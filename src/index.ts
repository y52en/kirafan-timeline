/* eslint-disable no-constant-condition */
"use strict";
import clonedeep from "lodash/cloneDeep";
import codemirror from "codemirror";
import "codemirror/addon/mode/simple";
import "codemirror/addon/comment/comment";
import "codemirror/lib/codemirror.css";
// import "codemirror/theme/panda-syntax.css";
import "../public/css/panda-syntax.css";

((window) => {
  const undefinedErr = Error("undefined");

  function htmltag(name: string, inner = "", Class = ""): HTMLElement {
    const output = document.createElement(name);
    if (output) {
      if (inner) output.innerText = inner;
      if (Class) output.classList.add(Class);
      return output;
    } else {
      throw undefinedErr;
    }
  }

  // eslint-disable-next-line
  function objectCopy(obj: object | any[]): object | any[] {
    return clonedeep(obj);
  }
  // function isObject(val) {
  //   if (val !== null && typeof val === "object" && val.constructor === Object) {
  //     return true;
  //   }
  //   return false;
  // }
  function textCopy(textVal: string) {
    const copyFrom = document.createElement("textarea");
    copyFrom.textContent = textVal;
    const bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    const retVal = document.execCommand("copy");
    bodyElm.removeChild(copyFrom);
    return retVal;
  }

  interface lexicallyAnalyzed {
    type: string;
    value: string;
  }

  interface move_list {
    mode: string;
    value: string[];
  }

  type AST = string[] | ["mv_ls" | "move_list", string, move_list[]];
  /*  [
            [set,syaro,144],
            [mv_ls,syaro, 
              [
                {mode: "command",value:[b,syaro,14]}
              ] 
            ]
          ]
          
       */

  class parser_lexicallyAnalyze2AST {
    timeline_parsed: lexicallyAnalyzed[];
    i_loading: number;

    constructor(lexically_analyzed: lexicallyAnalyzed[]) {
      this.timeline_parsed = lexically_analyzed;
      this.i_loading = 0;
    }

    get now_val(): lexicallyAnalyzed {
      return this.timeline_parsed[this.i_loading];
    }

    set now_val(_) {
      throw Error("now_valにはセットできません");
    }

    get now_val_type() {
      return this.now_val.type;
    }

    set now_val_type(_) {
      throw Error("now_valにはセットできません");
    }

    Normalize() {
      const output = [];
      let i: number;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const t = this;
      const type = () => this.timeline_parsed[i].type;
      for (i = 0; i < this.timeline_parsed.length; i++) {
        if (type() === "bracketL") {
          removeMeaninglessNewLine();
        }
        output.push(this.timeline_parsed[i]);
      }
      function removeMeaninglessNewLine() {
        const i_toErrMsg = [i];
        output.push(t.timeline_parsed[i]);
        i++;
        for (; i < t.timeline_parsed.length; i++) {
          if (i + 1 === t.timeline_parsed.length) {
            t.i_loading = i_toErrMsg?.[1] || i_toErrMsg[0];
            t.error_unexpectedToken("]が不足しています");
          }

          if (type() === "bracketL") {
            i_toErrMsg.push(i);
            removeMeaninglessNewLine();
          } else if (type() === "new_line") {
            continue;
          } else if (type() === "bracketR") {
            i_toErrMsg.pop();
            break;
          }
          // else if (i + 1 === t.timeline_parsed.length) {
          //   throw Error("[]")

          //   break;
          // }
          output.push(t.timeline_parsed[i]);
        }
      }

      for (let i = 0, isBeforeNewLine = true; i < output.length; i++) {
        if (output[i].type === "new_line") {
          if (isBeforeNewLine) {
            output.splice(i, 1);
            i--;
          }
          isBeforeNewLine = true;
        } else {
          isBeforeNewLine = false;
        }
      }

      // 上で同じことが行える(初期値isBeforeNewLineがtrueのため)
      // for (let i = 0; i < output.length; i++) {
      //   if (this.timeline_parsed[i] === "new_line") {
      //     output.shift()
      //   }else{
      //     break;
      //   }
      // }

      for (let i = output.length - 1; i >= 0; i--) {
        if (output[i].type === "new_line") {
          output.pop();
        } else {
          break;
        }
      }
      this.timeline_parsed = output;
    }

    parse(): AST[] {
      this.Normalize();
      const output: Array<AST> = [];
      if (this.timeline_parsed.length === 0) {
        return output;
      }
      this.timeline_parsed.push({ type: "new_line", value: "\n" });

      for (
        this.i_loading = 0;
        this.i_loading < this.timeline_parsed.length;
        // skip newline
        this.i_loading++
      ) {
        const data: AST = this.loadStatement();
        output.push(data);

        if (this.now_val_type !== "new_line") {
          this.error_unexpectedToken(
            "]のあとにコメント以外の文を書くことはできません"
          );
        }
      }
      return output;
    }

    loadStatement(): AST {
      let statementList = [];
      // = [];

      this.checkIsWord();
      const commmand = this.now_val.value;
      this.nextVal();

      const push = () => {
        statementList.push(this.now_val.value);
        this.nextVal();
      };

      if (commmand === "move_list" || commmand === "mv_ls") {
        this.checkIsWord();
        const arg1 = this.now_val.value;
        this.nextVal();

        if (this.now_val_type !== "bracketL") {
          this.error_unexpectedToken(
            "move_listの第二引数は [ から始まる必要があります"
          );
        }
        this.nextVal();

        const arg2: move_list[] = [];
        if (this.now_val_type !== "bracketR") {
          loop: while (true) {
            let list, val: move_list;
            switch (this.now_val_type) {
              // [
              case "bracketL":
                this.nextVal();
                list = this.getMoveListInList("bracketR");
                arg2.push({ mode: "switch", value: list });
                break;

              // <
              case "angle_bracketL":
                this.nextVal();
                list = this.getMoveListInList("angle_bracketR");
                arg2.push({ mode: "order", value: list });
                break;

              // {
              case "braceL":
                this.nextVal();
                list = this.getMoveListInList("braceR");
                arg2.push({ mode: "command", value: list });
                break;

              case "word":
                val = { mode: "action", value: [] };
                val.value.push(this.now_val.value);
                arg2.push(val);
                this.nextVal();
                break;

              default:
                this.error_unexpectedToken(
                  "move_list内のパースエラー　正しい値が入力されているか確認してください"
                );
            }

            if (this.now_val_type === "bracketR") {
              break loop;
            } else if (this.now_val_type === "commma") {
              this.nextVal();
            } else {
              this.error_unexpectedToken(
                "コンマかmove_list終了の]が不足しています"
              );
            }
          }
        }
        statementList = [commmand, arg1, arg2] as [
          "mv_ls" | "move_list",
          string,
          move_list[]
        ];
        this.nextVal();
      } else {
        statementList = [commmand] as string[];
        while (true) {
          if (this.now_val_type === "word") {
            push();
          } else if (this.now_val_type === "new_line") {
            break;
          } else {
            this.error_unexpectedToken("この文字は入力できません");
          }
        }
      }

      return statementList;
    }

    isLastValue(): boolean {
      return this.i_loading + 1 >= this.timeline_parsed.length;
    }

    getMoveListInList(endType: string): string[] {
      const output: string[] = [];
      if (this.now_val_type === endType) {
        return output;
      }

      loop: while (true) {
        switch (this.now_val_type) {
          case "word":
            output.push(this.now_val.value);
            this.nextVal();
            break;

          default:
            this.error_unexpectedToken(
              "move_list内のかっこが閉じれていないか引数が不正です"
            );
        }

        switch (this.now_val_type) {
          case endType:
            this.nextVal();
            break loop;

          case "commma":
            this.nextVal();
            break;

          default:
            this.error_unexpectedToken(
              "move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています"
            );
        }
      }
      return output;
    }

    nextVal() {
      if (this.isLastValue()) {
        this.error_unexpectedToken(
          "内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"
        );
      }
      this.i_loading++;
    }

    nextVal_noerror() {
      if (!this.isLastValue()) {
        this.i_loading++;
      }
    }

    checkIsWord() {
      if (this.now_val_type !== "word") {
        this.error_unexpectedToken();
      }
    }

    checkIsCommma() {
      if (this.now_val_type !== "commma") {
        this.error_unexpectedToken();
      }
    }

    error_unexpectedToken(errMsg = "") {
      const output_err_where = htmltag("span");
      output_err_where.appendChild(
        htmltag("span", "→→" + this.now_val.value + "←←", "errMsg")
      );
      // ....... \n
      if (this.now_val.type !== "new_line") {
        for (let i = this.i_loading + 1; i < this.timeline_parsed.length; i++) {
          if (this.timeline_parsed[i].type === "new_line") {
            break;
          } else {
            output_err_where.insertAdjacentText(
              "beforeend",
              this.timeline_parsed[i].value
            );
          }
        }
      }
      for (let i = this.i_loading - 1; i >= 0; i--) {
        if (this.timeline_parsed[i].type === "new_line") {
          break;
        } else {
          output_err_where.insertAdjacentText(
            "afterbegin",
            this.timeline_parsed[i].value
          );
        }
      }

      if (this.now_val.type === "reserved") {
        errMsg = "予約文字です";
      }
      const output = htmltag("span");

      output.insertAdjacentText(
        "beforeend",
        "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"
      );
      output.appendChild(htmltag("br"));
      output.appendChild(output_err_where);
      output.appendChild(htmltag("br"));
      output.insertAdjacentText("beforeend", errMsg);

      throw Error(output.outerHTML);
    }
  }

  class parser_lexicallyAnalyze {
    timeline_str: string;
    timeline_parsed: lexicallyAnalyzed[];
    _now_str: string;
    i_nowloadstr: number;

    constructor(timeline_str: string) {
      this.timeline_str = timeline_str;
      this.timeline_parsed = [];
      // .replaceAll(/#.*/g, "").replaceAll(/\\(\n|$)/g, "") + "\n";
      this._now_str = "";
      this.i_nowloadstr = 0;
    }

    parse(): lexicallyAnalyzed[] {
      this.timeline_parsed = this.lexicalAnalysis();
      // this.Normalize();
      return this.timeline_parsed;
    }

    lexicalAnalysis(): lexicallyAnalyzed[] {
      let string = this.timeline_str;
      const output = [];
      let tmp = "";
      const space = "\u{20}";
      string = string.replaceAll(/\\(\n|$)/g, "");

      const parsed = (type: string, value: string) => ({
        type: type,
        value: value,
      });
      loop: for (let i = 0; i < string.length; i++) {
        const char = string[i];

        const val = parsed("", char);
        const changeType = (type: string) => {
          val.type = type;
        };

        switch (char) {
          case ",":
            changeType("commma");
            break;
          case "\n":
            // for (let m = i + 1; m < string.length; m++) {
            //   if (string[m] !== "\n") {
            //     break;
            //   }
            //   i++;
            // }
            changeType("new_line");
            break;
          case space:
          case "　":
          case "\t":
            // skip
            // changeType("space");
            push();
            continue;
          case "#":
            for (; i < string.length; i++) {
              if (string[i] === "\n") {
                i--;
                continue loop;
              }
            }
            // push();
            // changeType("comment");
            continue;
          case "{":
            changeType("braceL");
            break;
          case "}":
            changeType("braceR");
            break;
          case "[":
            changeType("bracketL");
            break;
          case "]":
            changeType("bracketR");
            break;
          case "<":
            changeType("angle_bracketL");
            break;
          case ">":
            changeType("angle_bracketR");
            break;

          case "(":
          case ")":
          case '"':
          case "'":
          case "!":
          case "$":
          case "%":
          case "&":
          case "=":
          case "^":
          case "~":
          case "*":
          case "?":
          case ";":
          case "`":
            // not @ _
            changeType("reserved");
            break;

          default:
            tmp += char;
            continue loop;
        }
        push();
        output.push(val);
      }

      push();

      function push() {
        if (tmp.length !== 0) {
          output.push(parsed("word", tmp));
          tmp = "";
        }
      }

      return output;
    }
  }

  class OperateURL {
    _href: string;
    autochange: boolean;
    _urlAPI: URL;
    constructor(_URL = location.href, autochange = true) {
      this._href = _URL;
      this._urlAPI = new URL(this._href);
      this.autochange = autochange;
    }

    getParam(param: string): string {
      return decodeURIComponent(this._urlAPI.searchParams.get(param) || "");
    }

    setParam(name: string, value = "") {
      this._urlAPI.searchParams.set(name, encodeURIComponent(value));
      if (this.autochange) {
        this._setURL(this._urlAPI.href);
      }
    }

    get hash(): string {
      return this._urlAPI.hash;
    }

    set hash(val) {
      this._setURL(`#${val}`);
    }

    get href(): string {
      return (
        this._urlAPI.protocol +
        "//" +
        this._urlAPI.host +
        this._urlAPI.pathname +
        "?TL=" +
        encodeURIComponent(this.getParam("TL"))
      );
      // encodeURIComponent(this._urlAPI.search.replace(/^\?/,""));
    }

    set href(val) {
      this._urlAPI.href = val;
      // this._reflesh()
    }

    _setURL(arg3: string) {
      if (this.autochange) {
        history.replaceState("", "", arg3);
      }
    }

    _reflesh() {
      this._urlAPI = new URL(this._href);
    }
  }
  const url = new OperateURL(undefined, false);

  interface TL_chara {
    timeline_OrderValue: number;
    id: string;
    type: "chara";
  }

  interface TL_skillcard {
    OrderValue: number;
    id: string;
    time: number;
    timeline_OrderValue: number;
    type: "skillcard";
  }

  type TL_obj = TL_chara | TL_skillcard;
  class timeline {
    current: TL_obj[];

    color: string | undefined;
    place_of_currentTimeline: number;
    cardData: [number, string][];
    comment: [string, string, number, string][];
    switchData: [number, string, string][];

    constructor() {
      this.current = [];
      this.switchData = [];
      this.cardData = [];
      this.comment = [];
      this.color = undefined;

      this.place_of_currentTimeline = 0;
    }

    move(
      OrderValue: number,
      id = this.ID_of_firstChara(),
      canMoveWithout1stChara = false
    ) {
      this.setColor(id, this.place_of_currentTimeline);

      if (id !== this.ID_of_firstChara() && canMoveWithout1stChara === false) {
        throw new Error("最初のキャラ以外は操作できません");
      }
      const moveChara_nowOrderValue =
        this.get_chara_by_ID(id).timeline_OrderValue;

      const OrderValue_diff_between_1stchara_and_movechara =
        moveChara_nowOrderValue - this.OrderValue_of_firstChara();
      const calculated_moved_OrderValue =
        moveChara_nowOrderValue +
        OrderValue -
        OrderValue_diff_between_1stchara_and_movechara;

      this.pushChara(id, calculated_moved_OrderValue);
      this.nextturn();
    }

    setColor(chara: string, place: number) {
      if (this.color) {
        this.comment.push(["color", chara, place, this.color]);
        this.color = undefined;
      }
    }

    // //古いコードのままになっている
    // move_stun(id, OrderValue) {
    //   let movechara_nowPlace = this.placeToChara(id);
    //   this.current[movechara_nowPlace].timeline_OrderValue += OrderValue;
    //   let place_to_moved = () => {
    //     if (movechara_nowPlace + 1 === this.current.length) {
    //       return movechara_nowPlace + 1;
    //     }
    //     for (let i = movechara_nowPlace + 1; i < this.current.length; i++) {
    //       if (
    //         this.current[i].timeline_OrderValue >=
    //         this.current[movechara_nowPlace].timeline_OrderValue
    //       ) {
    //         return i;
    //       }
    //     }
    //     return i + 1;
    //   };
    //   this.current.splice(
    //     place_to_moved(),
    //     0,
    //     this.current[movechara_nowPlace]
    //   );
    //   this.current.splice(movechara_nowPlace, 1);

    //   this.nextturn();
    // }

    // 逆走の実装方法が思いつかない
    // move_ttk(ordervalue){
    //   // this.setColor(this.ID_of_firstChara(), this.place_of_currentTimeline);
    //   const first_OV = this.OrderValue_of_firstChara()

    //   ordervalue.forEach(x => {
    //     this.current[this.place_of_currentTimeline]
    //   })
    // }

    setChara(id: string, initOrderValue: number) {
      // this.current.push({ id: id, timeline_OrderValue: initOrderValue });
      this.pushChara(id, initOrderValue);
    }

    place_to_moved(calculated_moved_OrderValue: number): number {
      let place_to_moved = -1;
      for (
        let i = this.current.length - 1;
        i > this.place_of_currentTimeline;
        i--
      ) {
        if (
          calculated_moved_OrderValue >= this.current[i].timeline_OrderValue
        ) {
          place_to_moved = i;
          break;
        }
      }

      let output;
      // splice 0 elm 1 elm 2
      // iter      0     1
      if (place_to_moved === -1) {
        output = this.place_of_currentTimeline + 1;
      } else {
        output = place_to_moved + 1;
      }
      return output;
    }

    pushChara(id: string, calculated_moved_OrderValue: number) {
      let tmp_movechara;
      try {
        tmp_movechara = objectCopy(this.get_chara_by_ID(id)) as TL_obj;
      } catch {
        tmp_movechara = { id } as TL_chara;
      }

      tmp_movechara.timeline_OrderValue = calculated_moved_OrderValue;

      const place_to_moved = this.place_to_moved(calculated_moved_OrderValue);
      this.current.splice(place_to_moved, 0, tmp_movechara);
    }

    addChara(id: string, initOrderValue: number) {
      const chara: TL_chara = {
        id: id,
        timeline_OrderValue: initOrderValue,
        type: "chara",
      };
      this.current.splice(this.place_of_currentTimeline, 0, chara);
    }

    addSkillCard(id: string, OrderValue: number, time: number) {
      let current_card;
      let isFoundCard = true;
      try {
        current_card = this.get_chara_by_ID(id);
      } catch {
        isFoundCard = false;
      }

      if (isFoundCard) {
        if (current_card) {
          if (current_card.type !== "skillcard")
            throw Error("指定された名前はスキルカードではありません");
          current_card.time = time;
          this.current[this.placeToChara(id)] = current_card;
        } else {
          throw Error("ここは実行されないはず");
        }
      } else {
        const target_ov = this.OrderValue_of_firstChara() + OrderValue;
        const target_place = this.place_to_moved(target_ov);
        this.current.splice(target_place, 0, {
          type: "skillcard",
          time,
          id,
          timeline_OrderValue: target_ov,
          OrderValue,
        });
        this.cardData.push([this.place_of_currentTimeline, id]);
      }
    }

    switchChara(id_currentChara: string, id_switchToChara: string) {
      this.switchData.push([
        this.place_of_currentTimeline,
        id_currentChara,
        id_switchToChara,
      ]);

      this.setColor(id_currentChara, this.place_of_currentTimeline);

      if (id_currentChara === this.ID_of_firstChara()) {
        this.current[this.placeToChara(id_currentChara)].id = id_switchToChara;
        this.current[this.placeToChara(id_switchToChara)].timeline_OrderValue =
          this.OrderValue_of_firstChara();
      } else {
        this.switchSupportChara(id_currentChara, id_switchToChara);
      }
    }

    switchSupportChara(id_currentChara: string, id_switchToChara: string) {
      this.current.splice(this.placeToChara(id_currentChara), 1);
      this.addChara(id_switchToChara, this.OrderValue_of_firstChara());
    }

    inited() {
      this.current.sort(function (a, b) {
        const a_OrderValue = a.timeline_OrderValue;
        const b_OrderValue = b.timeline_OrderValue;
        if (a_OrderValue < b_OrderValue) return -1;
        if (a_OrderValue > b_OrderValue) return 1;
        return 0;
      });
      this.place_of_currentTimeline = 0;
    }

    get firstChara(): TL_obj {
      return this.current[this.place_of_currentTimeline];
    }

    set firstChara(_) {
      throw Error("firstCharaにはセットできません");
    }

    OrderValue_of_firstChara(): number {
      return this.firstChara.timeline_OrderValue;
    }

    ID_of_firstChara(): string {
      return this.firstChara.id;
    }

    nextturn() {
      this.place_of_currentTimeline++;
      if (this.firstChara?.type === "skillcard") {
        this.firstChara.time--;
        if (this.firstChara.time === 0) {
          this.nextturn();
        } else if (this.firstChara.time < 0) {
          throw Error("skillcardのtimeに0未満の数値");
        } else {
          this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), false);
        }
      }
    }

    get_chara_by_ID(id: string): TL_obj {
      return this.current[this.placeToChara(id)];
    }

    placeToChara(id: string): number {
      for (
        let i = this.place_of_currentTimeline;
        i < this.current.length;
        i++
      ) {
        if (this.current[i].id === id) {
          return i;
        }
      }
      throw Error("Not Found!IDに誤りがあります");
    }
  }

  class chara {
    id: string;
    SPD: number;
    SPD_buff: number;
    LoadFactorReduce: number;

    constructor(
      id: string,
      SPD: number,
      SPD_buff: number,
      LoadFactorReduce = 0
    ) {
      this.id = id;
      this.SPD = SPD;
      this.SPD_buff = SPD_buff;
      this.LoadFactorReduce = LoadFactorReduce;
    }

    calculateOrderValue(LoadFactor: number, LoadFactorReduce = 0): number {
      const SPD = this.SPD;
      const SPD_buff = this.SPD_buff / 100;
      const OrderValueRadix = Math.min(
        Math.max(124 - Math.floor(SPD / 2), 0),
        100
      );
      const OrderValue = Math.floor(
        OrderValueRadix *
          (LoadFactor / 100) *
          (1 - LoadFactorReduce) *
          (1 - SPD_buff)
      );

      return Math.max(Math.min(OrderValue, 500), 15);
    }

    initOrderValue(): number {
      return this.calculateOrderValue(100, 0);
    }
  }

  let cm: codemirror.Editor;

  window.onload = () => {
    const elm_csvDownload = document.getElementById("csvDownload");
    const elm_copyTL = document.getElementById("copyTL");
    const elm_copy_ConvertedTL = document.getElementById("copy_ConvertedTL");
    const elm_log_convertedTL = document.getElementById("log_convertedTL");
    const elm_jumpTwitter = document.getElementById("jumpTwitter");
    const elm_unzipMoveList = document.getElementById("unzipMoveList");
    const elm_Set_onbeforeunload = document.getElementById(
      "isSet_onbeforeunload"
    ) as HTMLInputElement | null;
    const elm_pop11 = document.getElementById(
      "pop11"
    ) as HTMLInputElement | null;

    const elm_editor = document.getElementById(
      "editor"
    ) as HTMLTextAreaElement | null;

    if (
      !(
        // elm_textarea &&
        (
          elm_csvDownload &&
          elm_copyTL &&
          elm_copy_ConvertedTL &&
          elm_log_convertedTL &&
          elm_jumpTwitter &&
          elm_unzipMoveList &&
          elm_Set_onbeforeunload &&
          elm_pop11 &&
          elm_editor
        )
      )
    ) {
      throw undefinedErr;
    }

    codemirror.defineSimpleMode("kirafan-timeline", {
      start: [
        {
          regex: /(mv_ls|move_list)[ 　]+/,
          token: "keyword",
          next: "move_list",
        },

        // string and byte string
        { regex: /[a-zA-Z_]+$/, token: "keyword" },
        { regex: /[a-zA-Z_]+/, token: "keyword", next: "arg" },
        { regex: /\s+/, token: "" },
        { regex: /#.*$/, token: "comment" },
      ],
      move_list: [
        {
          // regex: /([^\s]+)\s*(\[)/,
          regex: /(?:([^[\s]+)(\s*)(\[))/,
          next: "move_list_arg2",
          token: ["operator", "", "age"],
        },
      ],
      move_list_arg2: [
        { regex: /\s+/, token: "" },

        { regex: /\]/, token: "unit", next: "start" },
        {
          regex: /(\[)(\s*)([^\]\s*,]+)/,
          token: ["unit", "", "string-3"],
          next: "mvls_switch",
        },
        {
          regex: /(\{)(\s*)([^\}\s*,]+)/,
          token: ["unit", "", "keyword"],
          next: "mvls_command",
        },
        {
          regex: /(<)(\s*)([^>\s*,]+)/,
          token: ["unit", "", "string-3"],
          next: "mvls_order",
        },
      ],
      mvls_switch: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: /\]/, token: "unit", next: "move_list_arg2" },

        {
          regex: /[^\s\],]+/,
          token: "string-3",
        },
      ],
      mvls_command: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: /\}/, token: "unit", next: "move_list_arg2" },

        {
          regex: /[^\s\},]+/,
          token: "string-3",
        },
      ],
      mvls_order: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: />/, token: "unit", next: "move_list_arg2" },

        {
          regex: /[^\s>,]+/,
          token: "string-3",
        },
      ],
      arg: [
        { regex: /[^#]*$/, token: "arg", next: "start" },
        { regex: /[^#]*/, token: "arg", next: "start" },

        { regex: /#.*$/, token: "comment" },
      ],
      comment: [{ regex: /.*?$/, token: "comment", next: "start" }],
      meta: {
        dontIndentStates: ["comment"],
        // electricInput: /^\s*\}$/,
        // blockCommentStart: "/*",
        // blockCommentEnd: "*/",
        lineComment: "#",
        fold: "brace",
      },
    });

    const TLparam = url.getParam("TL");
    let str = "";
    if (typeof TLparam !== null) {
      str = TLparam;
    }

    cm = codemirror(elm_editor, {
      mode: "kirafan-timeline",
      lineNumbers: true,
      indentUnit: 4,
      theme: "panda-syntax",
      lineWrapping: true,
      tabSize: 2,
      value: str,
    });
    // enable scrollbar
    cm.scrollTo(3, 3);

    cm.on("change", main);
    cm.on("keydown", (cm, e) => {
      if (e.key === "/" && e.ctrlKey) {
        cm.toggleComment({ lineComment: "#" });
      }
    });

    // elm_textarea.oninput = main;
    elm_csvDownload.onclick = outputAsCSV;
    elm_copyTL.onclick = copyDataAsURL;
    elm_log_convertedTL.onclick = printConvertedTL;
    elm_copy_ConvertedTL.onclick = copyConvertedTL;
    elm_jumpTwitter.onclick = () => {
      window.open(
        "https://twitter.com/Y52en/status/1402239605978517505?s=20",
        "_blank"
      );
    };
    elm_unzipMoveList.onclick = () => {
      elm_pop11.checked = true;
    };
    window.onbeforeunload = function (e) {
      if (cm.getValue().length !== 0 && elm_Set_onbeforeunload.checked) {
        e.preventDefault();
        e.returnValue = "ページから離れますか？";
      }
    };

    main();
  };

  let tableData: [Array<Array<number | string | undefined>>, string[]];
  let convertedTLdata: {
    main: [AST?];
    set: [string[]?];
  };

  function main() {
    const err = document.getElementById("error");
    const info = document.getElementById("info");

    let str;
    if (cm) {
      str = cm.getValue();
    } else {
      throw undefinedErr;
    }
    url.setParam("TL", str);

    convertedTLdata = { main: [], set: [] };
    const chara_list: { [s: string]: chara } = {};
    const TL = new timeline();
    const chara_move_list: { [s: string]: move_list[] } = {};

    if (!err || !info) {
      throw undefinedErr;
    }
    err.innerHTML = "";
    info.innerHTML = "";

    let parsed_tldata: AST[];
    try {
      // parsed_tldata = tl_parser.parse();
      const tl_parser_lexicallyAnalyze = new parser_lexicallyAnalyze(str);
      const lexicallyAnalyzed = tl_parser_lexicallyAnalyze.parse();

      const tl_parser_AST = new parser_lexicallyAnalyze2AST(lexicallyAnalyzed);
      parsed_tldata = tl_parser_AST.parse();
    } catch (e) {
      err.innerHTML = e;
      throw e;
    }

    enum mode_list {
      init,
      start,
      start_sort,
      sorting,
      waiting_mode,
    }
    let mode = mode_list.init;
    for (let i = 0; i < parsed_tldata.length; i++) {
      try {
        const load_text_command = parsed_tldata[i]?.[0];
        const load_text_arg1 = parsed_tldata[i]?.[1];
        const load_text_arg2 = parsed_tldata[i]?.[2];
        const load_text_arg3 = parsed_tldata[i]?.[3];
        // const load_text_arg4 = parsed_tldata[i]?.[4];

        let id,
          SPD,
          buff,
          LoadFactor,
          LoadFactor_list,
          to,
          from,
          ordervalue,
          statement;

        switch (mode) {
          case mode_list.init:
            switch (load_text_command) {
              case "set":
                id = load_text_arg1.toString();
                SPD = Number(load_text_arg2);
                buff = Number(load_text_arg3) || 0;
                chara_list[id] = new chara(id, SPD, buff);
                TL.setChara(id, chara_list[id].initOrderValue());

                if (convertedTLdata.set.length === 0) {
                  convertedTLdata.set = [parsed_tldata[i] as string[]];
                } else {
                  convertedTLdata.set.push(parsed_tldata[i] as string[]);
                }
                break;

              case "start":
                mode = mode_list.start;
                TL.inited();
                break;

              case "start_sort":
                mode = mode_list.start_sort;
                TL.inited();
                break;

              case "":
                break;

              default:
                throw Error("need 'start'");
            }
            break;
          case mode_list.start:
            statement = parsed_tldata[i];
            if (statement[0] !== "mv_ls" && statement[0] !== "move_list") {
              mainMode(...(statement as string[]));
            } else {
              throw Error("start_sort ~ end_sort内にmove_listを書いてください");
            }
            break;
          case mode_list.start_sort:
            switch (load_text_command) {
              case "move_list":
              case "mv_ls":
                id = load_text_arg1;
                LoadFactor_list = load_text_arg2;
                chara_move_list[id] = LoadFactor_list as move_list[];
                break;

              case "end_sort":
                sorting();
                mode = mode_list.waiting_mode;
                break;

              case "":
                break;

              default:
                throw Error("no command found:「" + load_text_command + "」");
            }

            break;
          case mode_list.waiting_mode:
            switch (load_text_command) {
              case "start":
                mode = mode_list.start;
                break;

              case "start_sort":
                mode = mode_list.start_sort;
                break;

              case "":
                break;

              default:
                throw Error("need 'start'");
            }
            break;

          default:
            throw Error("内部エラー");
        }

        // eslint-disable-next-line no-inner-declarations
        function sorting() {
          while (true) {
            const id = TL.ID_of_firstChara();
            if (chara_move_list[id]?.[0] === undefined) {
              const output: { [s: string]: move_list[] } = {};
              Object.keys(chara_move_list).forEach(function (key) {
                if (chara_move_list[key].length !== 0) {
                  output[key] = chara_move_list[key];
                }
              });
              if (Object.keys(output).length !== 0) {
                if (!info) throw undefinedErr;
                info.insertAdjacentText(
                  "beforeend",
                  "ⓘinfo :move_listに使われていないスキルがあります:" +
                    JSON.stringify(
                      Object.fromEntries(
                        Object.entries(output).map(([key, value]) => [
                          key,
                          value.map((x: { value: string[] | string }) => {
                            if (x.value.length === 1) {
                              x.value = x.value[0];
                            }
                            return x.value;
                          }),
                        ])
                      )
                    ).replaceAll('"', "")
                );
              }
              break;
            }

            const input = chara_move_list[id].shift();

            if (!input)
              throw Error(
                "内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"
              );

            try {
              if (input.mode === "order") {
                const [Color_OrderValue] = input.value;
                const Color = Color_OrderValue.match(/^[a-zA-Z]/g);
                const OrderValue = Color_OrderValue.match(/\d+/g);

                if (Color) mainMode("color", Color[0]);
                if (OrderValue) {
                  mainMode("order", id, OrderValue[0]);
                } else {
                  throw Error("硬直が見つかりませんでした");
                }
              } else if (input.mode === "action") {
                const [Color_LoadFactor] = input.value;

                const Color = Color_LoadFactor.match(/^[a-zA-Z]/g);
                const LoadFactor = Color_LoadFactor.match(/\d+/g);

                if (Color) mainMode("color", Color[0]);
                if (LoadFactor) {
                  mainMode("action", id, LoadFactor[0]);
                } else {
                  throw Error("硬直値が見つかりませんでした");
                }
              } else if (input.mode === "switch") {
                const [to_name, SPD, buff] = input.value;
                mainMode("switch", id, to_name, SPD, buff || "0");
                chara_move_list[to_name] = chara_move_list[id];
                chara_move_list[id] = [];
              } else if (input.mode === "command") {
                mainMode(...input.value);
              } else {
                throw Error("テキストのパースエラー");
              }
            } catch (e) {
              throw Error(e + ":  " + JSON.stringify(input.value) + " ");
            }
          }
        }

        // eslint-disable-next-line no-inner-declarations
        function mainMode(...arg: string[]) {
          const [
            load_text_command,
            load_text_arg1,
            load_text_arg2,
            load_text_arg3,
            load_text_arg4,
          ] = arg;

          if (load_text_command !== "" && load_text_command !== "end") {
            if (convertedTLdata.main.length === 0) {
              convertedTLdata.main = [arg.filter((x) => x || x === "0")];
            } else {
              convertedTLdata.main.push(arg.filter((x) => x || x === "0"));
            }
          }

          let id,
            buff,
            color,
            name,
            spd,
            time,
            skillcard,
            canMoveWithout1stChara,
            canMoveWithout1stChara_act;
          switch (load_text_command) {
            case "buffset":
            case "b":
              id = load_text_arg1;
              buff = Number(load_text_arg2) || 0;
              chara_list[id].SPD_buff = buff;
              break;

            case "buffadd":
            case "b+":
              id = load_text_arg1;
              buff = Number(load_text_arg2) || 0;
              chara_list[id].SPD_buff += buff;
              break;

            case "buffminus":
            case "b-":
              id = load_text_arg1;
              buff = Number(load_text_arg2) || 0;
              chara_list[id].SPD_buff -= buff;
              break;

            case "add":
            case "a":
              id = load_text_arg1;
              SPD = Number(load_text_arg2);
              buff = Number(load_text_arg3) || 0;
              chara_list[id] = new chara(id, SPD, buff);
              TL.addChara(id, chara_list[id].initOrderValue());
              break;

            case "move":
            case "m":
              LoadFactor = Number(load_text_arg1);
              id = load_text_arg2;
              canMoveWithout1stChara = load_text_arg3 === "true";
              TL.move(
                chara_list[TL.ID_of_firstChara()].calculateOrderValue(
                  LoadFactor
                ),
                id,
                canMoveWithout1stChara
              );
              break;

            case "action":
            case "ac":
              id = load_text_arg1;
              LoadFactor = Number(load_text_arg2);
              canMoveWithout1stChara_act = load_text_arg3 === "true";
              TL.move(
                chara_list[TL.ID_of_firstChara()].calculateOrderValue(
                  LoadFactor
                ),
                id,
                canMoveWithout1stChara_act
              );
              break;

            case "order":
              id = load_text_arg1;
              ordervalue = Number(load_text_arg2);
              // const canMoveWithout1stChara_act = load_text_arg3 === "true";

              TL.move(ordervalue, id, false);

              break;

            case "switch":
            case "sw":
              to = load_text_arg1;
              from = load_text_arg2;
              SPD = Number(load_text_arg3);
              buff = Number(load_text_arg4) || 0;
              TL.switchChara(to, from);
              chara_list[from] = new chara(from, SPD, buff);
              break;

            // case "switchSupport":
            // case "swS":
            //   to = load_text_arg1.toString();
            //   from = load_text_arg2.toString();
            //   SPD = load_text_arg3;
            //   buff = load_text_arg4 || 0;
            //   TL.switchSupportChara(to, from);
            //   chara_list[from] = new chara(from, SPD, buff);
            //   break;

            case "color":
            case "c":
              color = load_text_arg1;
              TL.color = color;
              break;

            case "skillcard":
            case "sc":
              name = load_text_arg1;
              spd = Number(load_text_arg2);
              LoadFactor = Number(load_text_arg3);
              time = Number(load_text_arg4);

              skillcard = new chara(name, spd, 0);
              chara_list[name] = skillcard;
              TL.addSkillCard(
                name,
                skillcard.calculateOrderValue(LoadFactor),
                time
              );
              break;

            case "end":
              mode = mode_list.waiting_mode;
              break;

            case "":
              break;

            default:
              throw Error("no command found");
          }
        }
      } catch (e) {
        // console.error(i + 1 + "行目にエラー", e);

        // err.innerText =
        //   i + 1 + "行目にエラー(" + str_splited[i].join(" ") + ")";
        err.appendChild(htmltag("br"));
        err.insertAdjacentText("beforeend", e);
        break;
      }
    }

    const chara_array: string[] = [];
    for (const i in chara_list) {
      chara_array.push(i);
    }

    const outputTL: Array<Array<string | number | undefined>> = Array.from(
      new Array(Object.keys(chara_list).length),
      () => new Array(TL.current.length).fill(undefined)
    );

    TL.current.forEach((i, index) => {
      const chara_id = i.id;
      const OrderValue = i.timeline_OrderValue;
      const charaPlace = chara_array.indexOf(chara_id);

      outputTL[charaPlace][index] = OrderValue;
    });
    TL.switchData.forEach((x) => {
      const [place, from_id, to_id] = x;
      const from_charaPlace = chara_array.indexOf(from_id);
      const to_charaPlace = chara_array.indexOf(to_id);
      let arrow_str = "";
      if (from_charaPlace < to_charaPlace) {
        arrow_str = "↓↓";
      } else {
        arrow_str = "↑↑";
      }

      outputTL[from_charaPlace][place] = arrow_str;
    });

    TL.cardData.forEach((x) => {
      const charaPlace = chara_array.indexOf(x[1]);
      outputTL[charaPlace][x[0]] = "→";
    });
    const now_place = TL.place_of_currentTimeline + 1;

    const elm_firstchara = document.getElementById("firstchara");
    if (elm_firstchara) elm_firstchara.innerText = TL.ID_of_firstChara();

    const elm_now_place = document.getElementById("now_place");
    if (elm_now_place) elm_now_place.innerText = String(now_place);

    tableData = [outputTL, chara_array];
    outputAsTable(outputTL, chara_array, TL.comment, now_place);
    printConvertedTL();
  }

  function outputAsTable(
    json: (string | number | undefined)[][],
    charalist: string[],
    comment: [string, string, number, string][],
    now_place: number
  ) {
    const output = htmltag("thead");
    const inner_tr = htmltag("tr");

    for (let i = 0; i <= json[0].length; i++) {
      let tmp;
      if (i === now_place) {
        tmp = htmltag("th", i.toString(), "now_place");
      } else if (i === 0) {
        tmp = htmltag("th", "", "nowrap");
      } else {
        tmp = htmltag("th", i.toString());
      }
      inner_tr.appendChild(tmp);
    }

    output.appendChild(inner_tr);

    for (let x = 0; x < json.length; x++) {
      const main_tl = htmltag("tr");
      main_tl.appendChild(htmltag("td", charalist[x], "nowrap"));
      for (let y = 0; y < json[0].length; y++) {
        let tmp;
        const find = comment.find(
          (elm) => elm[0] === "color" && elm[1] === charalist[x] && elm[2] === y
        );
        const inner_tmp = json[x][y];
        let inner_tmp_string: string;
        if (typeof inner_tmp === "string") {
          inner_tmp_string = inner_tmp;
        } else if (typeof inner_tmp === "number") {
          inner_tmp_string = String(inner_tmp);
        } else {
          inner_tmp_string = "";
        }
        if (find) {
          tmp = htmltag("td", inner_tmp_string, "color-" + find[3]);
        } else {
          tmp = htmltag("td", inner_tmp_string);
        }
        main_tl.appendChild(tmp);
      }
      output.appendChild(main_tl);
    }

    const target_elm = document.querySelector("table");
    if (target_elm) {
      target_elm.innerHTML = "";
      target_elm.appendChild(output);
    } else {
      throw undefinedErr;
    }
  }

  function outputAsCSV() {
    const [json, charalist] = tableData;
    let output = "";

    for (let i = 0; i < json[0].length; i++) {
      output += "," + (i + 1);
    }
    output += "\n";

    for (let x = 0; x < json.length; x++) {
      output += charalist[x];
      for (let y = 0; y < json[0].length; y++) {
        output += ",";
        output += json[x][y] || "";
      }
      output += "\n";
    }
    makeCSVfile_download(output);
  }

  function makeCSVfile_download(csv: string, fileName = "timeline.csv") {
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, csv], { type: "text/csv" });
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  }

  function copyDataAsURL() {
    textCopy(url.href);
    const copyed = document.getElementById("copyed");
    if (copyed) {
      copyed.style.display = "block";
      setTimeout(() => {
        copyed.style.display = "none";
      }, 1000);
    } else {
      throw undefinedErr;
    }
  }

  function printConvertedTL() {
    const popup_elm = document.getElementById("popup");
    if (popup_elm) {
      popup_elm.innerText = joinedTLdata();
    } else {
      throw undefinedErr;
    }
  }

  function copyConvertedTL() {
    textCopy(joinedTLdata());
    const copyed = document.getElementById("copyed_popup");
    if (copyed) {
      copyed.style.display = "block";
      setTimeout(() => {
        copyed.style.display = "none";
      }, 1000);
    } else {
      throw undefinedErr;
    }
  }

  function joinedTLdata(): string {
    return (
      convertedTLdata.set
        .map((x) => {
          if (x) {
            return x.join(" ");
          } else {
            return "";
          }
        })
        .join("\n") +
      "\n\nstart\n" +
      convertedTLdata.main
        .map((x) => {
          if (x) {
            return "  " + x.join(" ");
          } else {
            return "";
          }
        })
        .join("\n") +
      "\nend"
    );
  }
})(window);
