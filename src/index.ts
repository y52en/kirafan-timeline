/* eslint-disable no-constant-condition */
"use strict";
import codemirror from "codemirror";
import "codemirror/addon/mode/simple";
import "codemirror/addon/comment/comment";
import "codemirror/addon/hint/show-hint";
import "codemirror/mode/python/python";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/edit/closebrackets";
// import "codemirror/theme/panda-syntax.css";
import "../public/css/panda-syntax.css";
import lib from "./lib";
import define from "./define";
import python from "./python";
import CodeMirror from "codemirror";

((window) => {
  enum command {
    set,
    countTTK,
    countTTKuntil,
    start,
    end,
    move,
    action,
    start_sort,
    end_sort,
    move_list,
    buffset,
    buffadd,
    buffminus,
    switch,
    order,
    skillcard,
    color,
    add,
    nomove,
  }
  const commandStr2Enum = (() => {
    const output: { [s: string]: command } = {};
    const command_list = [
      "set",
      "countTTK",
      "countTTKuntil",
      "start",
      "end",
      "move",
      "action",
      "start_sort",
      "end_sort",
      "move_list",
      "buffset",
      "buffadd",
      "buffminus",
      "switch",
      "order",
      "skillcard",
      "color",
      "add",
      "nomove",
    ];
    command_list.forEach((x) => {
      // @ts-ignore
      output[x] = command[x] as command;
    });
    const shorthand_list: [string, command][] = [
      ["ttk", command.countTTK],
      ["ttk_until", command.countTTKuntil],
      ["mv_ls", command.move_list],
      ["b", command.buffset],
      ["b+", command.buffadd],
      ["b-", command.buffminus],
      ["a", command.add],
      ["m", command.move],
      ["ac", command.action],
      ["sw", command.switch],
      ["c", command.color],
      ["sc", command.skillcard],
    ];
    shorthand_list.forEach(([str, toCommand]) => {
      output[str] = toCommand;
    });
    return output;
  })();

  const globalVar = {
    cm: undefined as codemirror.Editor | undefined,
  };
  const enum editor_mode {
    python = "python",
    "kirafan-timeline" = "kirafan-timeline",
  }

  interface lexicallyAnalyzed {
    type: lexicallyAnalyzeStr;
    value: string;
  }

  type AST_command = [command, ...string[]];
  type AST_mvls = [command.move_list, string, move_list[]];
  type AST = AST_command | AST_mvls;
  /*  [
            [set,syaro,144],
            [mv_ls,syaro, 
              [
                {mode: "command",value:[b,syaro,14]}
              ] 
            ]
          ]
          
       */

  const enum mvls_mode {
    switch,
    order,
    command,
    action,
  }
  interface mvls_normal {
    mode: mvls_mode.action | mvls_mode.order | mvls_mode.switch;
    value: string[];
  }

  interface mvls_command {
    mode: mvls_mode.command;
    value: AST_command;
  }

  type move_list = mvls_normal | mvls_command;

  const enum lexicallyAnalyzeStr {
    commma,
    new_line,
    braceL,
    braceR,
    bracketL,
    bracketR,
    angle_bracketL,
    angle_bracketR,
    reserved,
    word,
  }

  const enum TL_type {
    chara,
    skillcard,
  }
  interface TL_chara {
    timeline_OrderValue: number;
    id: string;
    type: TL_type.chara;
  }

  type card_event = (id: string, OrderValue: number, time: number) => any;

  interface TL_skillcard {
    OrderValue: number;
    id: string;
    time: number;
    timeline_OrderValue: number;
    type: TL_type.skillcard;
    event: card_event;
  }

  interface buff {
    val: number;
    turn: number;
  }

  type TL_obj = TL_chara | TL_skillcard;

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
        if (type() === lexicallyAnalyzeStr.bracketL) {
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

          if (type() === lexicallyAnalyzeStr.bracketL) {
            i_toErrMsg.push(i);
            removeMeaninglessNewLine();
          } else if (type() === lexicallyAnalyzeStr.new_line) {
            continue;
          } else if (type() === lexicallyAnalyzeStr.bracketR) {
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
        if (output[i].type === lexicallyAnalyzeStr.new_line) {
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
        if (output[i].type === lexicallyAnalyzeStr.new_line) {
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
      this.timeline_parsed.push({
        type: lexicallyAnalyzeStr.new_line,
        value: "\n",
      });

      for (
        this.i_loading = 0;
        this.i_loading < this.timeline_parsed.length;
        // skip newline
        this.i_loading++
      ) {
        const data: AST = this.loadStatement();
        output.push(data);

        if (this.now_val_type !== lexicallyAnalyzeStr.new_line) {
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
      const commmand_str = this.now_val.value;

      const commmand = (() => {
        const tmp = commandStr2Enum[commmand_str] as command | undefined;
        if (typeof tmp !== "undefined") {
          return tmp;
        } else {
          throw Error("コマンド名に誤りがあります");
        }
      })();

      this.nextVal();

      const push = () => {
        statementList.push(this.now_val.value);
        this.nextVal();
      };

      if (commmand === command.move_list) {
        this.checkIsWord();
        const arg1 = this.now_val.value;
        this.nextVal();

        if (this.now_val_type !== lexicallyAnalyzeStr.bracketL) {
          this.error_unexpectedToken(
            "move_listの第二引数は [ から始まる必要があります"
          );
        }
        this.nextVal();

        const arg2: move_list[] = [];
        if (this.now_val_type !== lexicallyAnalyzeStr.bracketR) {
          while (true) {
            let list, val: move_list;
            switch (this.now_val_type) {
              // [
              case lexicallyAnalyzeStr.bracketL:
                this.nextVal();
                list = this.getMoveListInList(lexicallyAnalyzeStr.bracketR);
                arg2.push({ mode: mvls_mode.switch, value: list });
                break;

              // <
              case lexicallyAnalyzeStr.angle_bracketL:
                this.nextVal();
                list = this.getMoveListInList(
                  lexicallyAnalyzeStr.angle_bracketR
                );
                arg2.push({ mode: mvls_mode.order, value: list });
                break;

              // {
              case lexicallyAnalyzeStr.braceL:
                this.nextVal();
                list = this.getCommandListInList();
                arg2.push({ mode: mvls_mode.command, value: list });
                break;

              case lexicallyAnalyzeStr.word:
                val = { mode: mvls_mode.action, value: [] };
                val.value.push(this.now_val.value);
                arg2.push(val);
                this.nextVal();
                break;

              default:
                this.error_unexpectedToken(
                  "move_list内のパースエラー　正しい値が入力されているか確認してください"
                );
            }
            // @ts-ignore
            if (this.now_val_type === lexicallyAnalyzeStr.bracketR) {
              break;
            } else if (this.now_val_type === lexicallyAnalyzeStr.commma) {
              this.nextVal();
            } else {
              this.error_unexpectedToken(
                "コンマかmove_list終了の]が不足しています"
              );
            }
          }
        }
        statementList = [commmand, arg1, arg2] as AST_mvls;
        this.nextVal();
      } else {
        statementList = [commmand] as AST_command;
        while (true) {
          if (this.now_val_type === lexicallyAnalyzeStr.word) {
            push();
          } else if (this.now_val_type === lexicallyAnalyzeStr.new_line) {
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

    getCommandListInList(): AST_command {
      const endType = lexicallyAnalyzeStr.braceR;
      const output: (string | command)[] = [];
      // if (this.now_val_type === endType) {
      //   return output;
      // }

      let i = 0;
      loop: while (true) {
        switch (this.now_val_type) {
          case lexicallyAnalyzeStr.word:
            if (i === 0) {
              const command_num = commandStr2Enum[this.now_val.value] as
                | command
                | undefined;
              if (command_num) {
                output.push(command_num);
              } else {
                this.error_unexpectedToken("コマンド名に誤りがあります");
              }
            } else {
              output.push(this.now_val.value);
            }
            this.nextVal();
            break;

          default:
            this.error_unexpectedToken(
              "move_list内のかっこが閉じられていないか引数が不正です"
            );
        }

        switch (this.now_val_type) {
          case endType:
            this.nextVal();
            break loop;

          case lexicallyAnalyzeStr.commma:
            this.nextVal();
            break;

          default:
            this.error_unexpectedToken(
              "move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています"
            );
        }
        i++;
      }
      return output as AST_command;
    }

    getMoveListInList(endType: lexicallyAnalyzeStr): string[] {
      const output: string[] = [];
      if (this.now_val_type === endType) {
        return output;
      }

      loop: while (true) {
        switch (this.now_val_type) {
          case lexicallyAnalyzeStr.word:
            output.push(this.now_val.value);
            this.nextVal();
            break;

          default:
            this.error_unexpectedToken(
              "move_list内のかっこが閉じられていないか引数が不正です"
            );
        }

        switch (this.now_val_type) {
          case endType:
            this.nextVal();
            break loop;

          case lexicallyAnalyzeStr.commma:
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
      if (this.now_val_type !== lexicallyAnalyzeStr.word) {
        this.error_unexpectedToken();
      }
    }

    checkIsCommma() {
      if (this.now_val_type !== lexicallyAnalyzeStr.commma) {
        this.error_unexpectedToken();
      }
    }

    error_unexpectedToken(errMsg = "") {
      const output_err_where = lib.htmltag("span");
      output_err_where.appendChild(
        lib.htmltag("span", "→→" + this.now_val.value + "←←", "errMsg")
      );
      // ....... \n
      if (this.now_val.type !== lexicallyAnalyzeStr.new_line) {
        for (let i = this.i_loading + 1; i < this.timeline_parsed.length; i++) {
          if (this.timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
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
        if (this.timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
          break;
        } else {
          output_err_where.insertAdjacentText(
            "afterbegin",
            this.timeline_parsed[i].value
          );
        }
      }

      if (this.now_val.type === lexicallyAnalyzeStr.reserved) {
        errMsg = "予約文字です";
      }
      const output = lib.htmltag("span");

      output.insertAdjacentText(
        "beforeend",
        "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"
      );
      output.appendChild(lib.htmltag("br"));
      output.appendChild(output_err_where);
      output.appendChild(lib.htmltag("br"));
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
      const output: lexicallyAnalyzed[] = [];
      let tmp = "";
      const space = "\u{20}";
      string = string.replaceAll(/\\(\n|$)/g, "");

      const parsed = (type: lexicallyAnalyzeStr, value: string) => ({
        type,
        value,
      });
      loop: for (let i = 0; i < string.length; i++) {
        const char = string[i];

        let val: lexicallyAnalyzed | { value: string } = { value: char };
        const changeType = (type: lexicallyAnalyzeStr) => {
          val = {
            type: type,
            value: val.value,
          };
        };

        switch (char) {
          case ",":
            changeType(lexicallyAnalyzeStr.commma);
            break;
          case "\n":
            // for (let m = i + 1; m < string.length; m++) {
            //   if (string[m] !== "\n") {
            //     break;
            //   }
            //   i++;
            // }
            changeType(lexicallyAnalyzeStr.new_line);
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
            changeType(lexicallyAnalyzeStr.braceL);
            break;
          case "}":
            changeType(lexicallyAnalyzeStr.braceR);
            break;
          case "[":
            changeType(lexicallyAnalyzeStr.bracketL);
            break;
          case "]":
            changeType(lexicallyAnalyzeStr.bracketR);
            break;
          case "<":
            changeType(lexicallyAnalyzeStr.angle_bracketL);
            break;
          case ">":
            changeType(lexicallyAnalyzeStr.angle_bracketR);
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
            changeType(lexicallyAnalyzeStr.reserved);
            break;

          default:
            tmp += char;
            continue loop;
        }
        push();
        if ("type" in val) {
          output.push(val);
        } else {
          throw Error("未到達コード");
        }
      }

      push();

      function push() {
        if (tmp.length > 0) {
          output.push(parsed(lexicallyAnalyzeStr.word, tmp));
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
      const val = this._urlAPI.searchParams.get(param) || "";
      try {
        return decodeURIComponent(val);
      } catch {
        return val;
      }
    }

    setParam(name: string, value = "") {
      this._urlAPI.searchParams.set(name, value);
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
        tmp_movechara = lib.objectCopy(this.get_chara_by_ID(id)) as TL_obj;
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
        type: TL_type.chara,
      };
      this.current.splice(this.place_of_currentTimeline, 0, chara);
    }

    addSkillCard(
      id: string,
      OrderValue: number,
      time: number,
      event?: card_event
    ) {
      let current_card;
      let isFoundCard = true;
      try {
        current_card = this.get_chara_by_ID(id);
      } catch {
        isFoundCard = false;
      }

      if (isFoundCard) {
        if (current_card) {
          if (current_card.type !== TL_type.skillcard)
            throw Error("指定された名前はスキルカードではありません");
          current_card.time = time;
          this.current[this.placeToChara(id)] = current_card;
        } else {
          throw Error("ここは実行されないはず");
        }
      } else {
        const target_ov = this.OrderValue_of_firstChara() + OrderValue;
        const target_place = this.place_to_moved(target_ov);

        event = event || ((..._) => undefined);
        this.current.splice(target_place, 0, {
          type: TL_type.skillcard,
          time,
          id,
          timeline_OrderValue: target_ov,
          OrderValue,
          event,
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
      if (this.firstChara.type === TL_type.skillcard) {
        this.firstChara.event(
          this.firstChara.id,
          this.firstChara.OrderValue,
          this.firstChara.time
        );
        this.firstChara.time--;
        this.firstChara;
        if (this.firstChara.time === 0) {
          this.nextturn();
        } else if (this.firstChara.time < 0) {
          throw Error("skillcardのtimeに0未満の数値");
        } else {
          this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), false);
        }
      }
    }

    skip() {
      this.nextturn();
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
    // SPD_buff: number;
    _SPD_buff: buff[];
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
      this._SPD_buff = [];
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

    get SPD_buff() {
      return this._SPD_buff.reduce((a, b) => a + b.val, 0);
    }

    set SPD_buff(val: number) {
      this._SPD_buff = [{ val, turn: Infinity }];
    }

    setSPDbuff(val: number, turn = Infinity) {
      if (turn === 0) return;
      if (turn < 0) throw Error("turnは0以上の整数でなければなりません");
      this._SPD_buff.push({ val, turn });
    }

    nextTurn() {
      this._SPD_buff = this._SPD_buff
        .map((buff) => {
          buff.turn--;
          return buff;
        })
        .filter((buff) => buff.turn > 0);
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
      throw lib.undefinedErr;
    }

    const enum state {
      start = "start",
      move_list = "move_list",
      move_list_arg2 = "move_list_arg2",
      mvls_switch = "mvls_switch",
      mvls_command = "mvls_command",
      mvls_order = "mvls_order",
      arg = "arg",
      comment = "comment",
    }

    const enum token {
      keyword = "keyword",
      comment = "comment",
      none = "",
      operator = "operator",
      age = "age",
      unit = "unit",
      string_3 = "string-3",
      arg = "arg",
    }

    codemirror.defineSimpleMode("kirafan-timeline", {
      [state.start]: [
        {
          regex: /(mv_ls|move_list)[ \u3000]+/,
          token: token.keyword,
          next: state.move_list,
        },

        // string and byte string
        { regex: /[a-zA-Z_]+$/, token: token.keyword },
        { regex: /[a-zA-Z_]+/, token: token.keyword, next: state.arg },
        { regex: /\s+/ },
        { regex: /#.*$/, token: token.comment },
      ],
      [state.move_list]: [
        {
          // regex: /([^\s]+)\s*(\[)/,
          regex: /(?:([^[\s]+)(\s*)(\[))/,
          next: state.move_list_arg2,
          token: [token.operator, token.none, token.age],
        },
      ],
      [state.move_list_arg2]: [
        { regex: /\s+/ },

        { regex: /\]/, token: token.unit, next: state.start },
        {
          regex: /(\[)(\s*)([^\]\s*,]+)/,
          token: [token.unit, token.none, token.string_3],
          next: state.mvls_switch,
        },
        {
          regex: /(\{)(\s*)([^}\s*,]+)/,
          token: [token.unit, token.none, token.keyword],
          next: state.mvls_command,
        },
        {
          regex: /(<)(\s*)([^>\s*,]+)/,
          token: [token.unit, token.none, token.string_3],
          next: state.mvls_order,
        },
      ],
      [state.mvls_switch]: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: /\]/, token: token.unit, next: state.move_list_arg2 },

        {
          regex: /[^\s\],]+/,
          token: token.string_3,
        },
      ],
      [state.mvls_command]: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: /\}/, token: token.unit, next: state.move_list_arg2 },

        {
          regex: /[^\s},]+/,
          token: token.string_3,
        },
      ],
      [state.mvls_order]: [
        { regex: /\s+/ },
        {
          regex: /,/,
        },
        { regex: />/, token: token.unit, next: state.move_list_arg2 },

        {
          regex: /[^\s>,]+/,
          token: token.string_3,
        },
      ],
      [state.arg]: [
        { regex: /[^#]*$/, token: token.arg, next: state.start },
        { regex: /[^#]*/, token: token.arg, next: state.start },

        { regex: /#.*$/, token: token.comment },
      ],
      [state.comment]: [
        { regex: /.*?$/, token: token.comment, next: state.start },
      ],
      meta: {
        dontIndentStates: [state.comment],
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

    const command_name = Object.keys(commandStr2Enum);
    function synonyms(cm: codemirror.Editor): Promise<codemirror.Hints | void> {
      return new Promise(function (resolve) {
        setTimeout(function () {
          const cursor = cm.getCursor(),
            line = cm.getLine(cursor.line);
          let start = cursor.ch,
            end = cursor.ch;
          while (start && /[^\s,{}[\]<>]/.test(line.charAt(start - 1))) --start;
          while (end < line.length && /[^\s,{}[\]<>]/.test(line.charAt(end)))
            ++end;
          const word = line.slice(start, end).toLowerCase();
          const output: string[] = [];
          command_name.forEach((v) => {
            if (v.startsWith(word)) {
              output.push(v);
            }
          });
          const val = cm
            .getValue()
            .replaceAll(/#([^\n])+/g, "")
            .split("\n")
            .map((v) => v.trim().split(/\s/));

          const charas = val
            .filter((v) => {
              if (v.length < 1) {
                return false;
              }
              return v[0].startsWith("set");
            })
            .map((v) => v[1]);

          val.forEach((v) => {
            if (v.length <= 2) {
              return;
            }
            if (v[0].startsWith("mv_ls") || v[0].startsWith("move_list")) {
              const arg = [
                ...v[2].replaceAll(/\t/g, "").matchAll(/[[,]\[([^,]+)/g),
              ];

              arg.forEach((x) => {
                charas.push(x[1]);
              });
            }
          });

          charas
            .filter((x) => x.startsWith(word) && x !== word)
            .forEach((x) => output.push(x));

          if (output.length > 0) {
            return resolve({
              list: output,
              from: CodeMirror.Pos(cursor.line, start),
              to: CodeMirror.Pos(cursor.line, end),
            } as codemirror.Hints);
          }
          return resolve(undefined);
        }, 100);
      });
    }

    cm = codemirror(elm_editor, {
      mode: "kirafan-timeline",
      lineNumbers: true,
      indentUnit: 4,
      theme: "panda-syntax",
      lineWrapping: true,
      tabSize: 2,
      value: str,
      extraKeys: { "Ctrl-Space": "autocomplete" },
      hintOptions: { hint: synonyms as CodeMirror.HintFunction },
    });

    // enable scrollbar
    cm.scrollTo(3, 3);

    cm.on("change", () => {
      main();
    });
    function getPosition(pos: codemirror.Editor, to = 1): string {
      const { line, ch } = pos.getCursor();
      const lineText = pos.getLine(line);
      return lineText.substring(ch, ch + to);
    }
    function moveCursor(pos: codemirror.Editor, moveto: number): void {
      const { line, ch } = pos.getCursor();
      pos.setCursor({ line, ch: ch + moveto });
    }
    function addBracketR(pos: codemirror.Editor, str: string) {
      const cursor = pos.getCursor();
      pos.replaceRange(str, cursor, cursor);
      moveCursor(pos, -1);
    }
    function rmBracketLR(pos: codemirror.Editor) {
      const { line, ch } = pos.getCursor();
      pos.replaceRange("", { line, ch: ch - 1 }, { line, ch: ch + 1 });
    }
    const bracket = [
      ["[", "]"],
      ["{", "}"],
      ["<", ">"],
    ];
    cm.on("keydown", (cm, e) => {
      if (e.key === "/" && e.ctrlKey) {
        cm.toggleComment({ lineComment: "#" });
      }
      if (!lib.isPC()) return;
      bracket.forEach(([open, close]) => {
        if (e.key === open) {
          addBracketR(cm, open + close);
          e.preventDefault();
        }

        if (e.key === close && getPosition(cm) === close) {
          moveCursor(cm, 1);
          e.preventDefault();
        }
        if (
          e.key === "Backspace" &&
          getPosition(cm, -1) === open &&
          getPosition(cm, 1) === close
        ) {
          rmBracketLR(cm);
          e.preventDefault();
        }
        if (e.key.match(/^\w$/)) {
          cm.showHint();
        }
      });
    });
    globalVar.cm = cm;

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
      save();

      if (cm.getValue().length !== 0 && elm_Set_onbeforeunload.checked) {
        e.preventDefault();
        e.returnValue = "ページから離れますか？";
      }
    };

    main();
  };

  let tableData: [Array<Array<number | string | undefined>>, string[]];
  let convertedTLdata: {
    main: string[][];
    set: [string[]?];
  };

  function save() {
    const nowUrlTlParam = new OperateURL(location.href).getParam("TL");
    const title = String(new Date()) + "自動保存:TL生成ツール";

    if (nowUrlTlParam !== url.getParam("TL")) {
      if (nowUrlTlParam.length === 0) {
        history.pushState(null, title, url.href);
      } else {
        history.replaceState(null, title, url.href);
      }
      lib.changeTitle(title);
    }
  }

  (() => {
    setInterval(() => {
      save();
    }, 1000 * 60 * 5);
  })();

  function transfer(arr: any): AST[] {
    return arr.map((x: any) => {
      const output = [];
      const commmand_str = x[0];
      const cmd = (() => {
        const tmp = commandStr2Enum[commmand_str] as command | undefined;
        if (typeof tmp !== "undefined") {
          return tmp;
        } else {
          throw Error("コマンド名に誤りがあります");
        }
      })();
      output.push(cmd);

      for (let i = 1; i < x.length; i++) {
        const type = typeof x[i];
        if (type === "number") {
          output.push(String(x[i]));
        } else if (type === "string") {
          output.push(x[i]);
        } else if (Array.isArray(x[i])) {
          if (cmd === command.move_list) {
            const tmp = x[i].map((elem: any) => {
              elem.mode = elem.mode as mvls_mode;
              const is_mode_command = elem.mode === mvls_mode.command;
              if (is_mode_command) {
                elem.value[0] = commandStr2Enum[elem.value[0]] as command;
              }

              for (
                let j = Number(is_mode_command);
                j < elem.value.length;
                j++
              ) {
                if (typeof elem.value[j] === "number") {
                  elem.value[j] = String(elem.value[j]);
                }
              }
              return elem;
            });
            output.push(tmp);
          } else {
            throw Error("move_list以外に配列が指定されています");
          }
        } else {
          throw Error("不正な型です: " + JSON.stringify(x) + " -> " + x[i]);
        }
      }

      return output as AST;
    }) as AST[];
  }
  async function main() {
    const err = document.getElementById("error");
    const info = document.getElementById("info");

    const loading_python = document.getElementById("loading_python");
    const executing_python = document.getElementById("executing_python");

    let str;
    if (cm) {
      str = cm.getValue() + "\n";
    } else {
      throw lib.undefinedErr;
    }
    const isPython = Boolean(str.match(/^#python#/));
    url.setParam("TL", str);
    // save();

    convertedTLdata = { main: [], set: [] };
    const chara_list: { [s: string]: chara } = {};
    const TL = new timeline();
    const chara_move_list: { [s: string]: move_list[] } = {};

    if (!err || !info || !loading_python || !executing_python) {
      throw lib.undefinedErr;
    }

    let parsed_tldata: AST[];
    const count_ttk_ls: { [s: string]: boolean } = {};
    let ttk = 0;
    let ttk_count_until = Infinity;
    const add_ttk = (n: number) => {
      if (TL.place_of_currentTimeline < ttk_count_until) {
        ttk += n;
      }
    };

    try {
      // parsed_tldata = tl_parser.parse();
      if (isPython) {
        if (globalVar.cm?.getOption("mode") !== editor_mode.python) {
          cm.setOption("mode", editor_mode.python);
        }
        const timer = setTimeout(() => {
          err.innerHTML = "";
          info.innerHTML = "";

          loading_python.classList.remove("hide");
        }, 1500);
        await python.waitInit();
        clearTimeout(timer);
        loading_python.classList.add("hide");

        const timer2 = setTimeout(() => {
          err.innerHTML = "";
          info.innerHTML = "";

          executing_python.classList.remove("hide");
        }, 1500);
        const { results, error } = await python.main(str);
        clearTimeout(timer2);
        executing_python.classList.add("hide");
        if (error) {
          throw error;
        }

        const tl_json = JSON.parse(results);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // ts-ignore
        // const tl_json = JSON.parse(execPy(tmp)?.replaceAll("'", '"'));
        parsed_tldata = transfer(tl_json);
      } else {
        if (
          globalVar.cm?.getOption("mode") !== editor_mode["kirafan-timeline"]
        ) {
          cm.setOption("mode", editor_mode["kirafan-timeline"]);
        }
        const tl_parser_lexicallyAnalyze = new parser_lexicallyAnalyze(str);
        const lexicallyAnalyzed = tl_parser_lexicallyAnalyze.parse();

        const tl_parser_AST = new parser_lexicallyAnalyze2AST(
          lexicallyAnalyzed
        );
        parsed_tldata = tl_parser_AST.parse();
      }
    } catch (e) {
      if (isPython) {
        const tmp = String(e).split("\n");
        err.innerText = tmp[tmp.length - 2];
      } else {
        err.innerHTML = String(e);
      }
      info.innerHTML = "";
      return;
      // throw e;
    }
    info.innerHTML = "";
    err.innerHTML = "";

    const enum mode_list {
      init,
      start,
      start_sort,
      sorting,
      waiting_mode,
    }
    let mode = mode_list.init;

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
            if (!info) throw lib.undefinedErr;
            info.insertAdjacentText(
              "beforeend",
              "ⓘinfo :move_listに使われていないスキルがあります:" +
                JSON.stringify(
                  Object.fromEntries(
                    Object.entries(output).map(([key, value]) => [
                      key,
                      value.map((x: { value: string[] | AST_command }) => {
                        if (x.value.length > 0) {
                          // @ts-ignore
                          if (x.mode === mvls_mode.command) {
                            // @ts-ignore
                            x.value[0] = command[x.value[0]];
                          }
                        }
                        if (x.value.length === 1) {
                          // @ts-ignore
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
          if (input.mode === mvls_mode.order) {
            const [Color_OrderValue] = input.value;
            const Color = Color_OrderValue.match(/^[a-zA-Z]/g);
            const OrderValue = Color_OrderValue.match(/\d+(\.(\d+)?)?/g);

            if (Color) mainMode(command.color, Color[0]);
            if (OrderValue) {
              mainMode(command.order, id, OrderValue[0]);
            } else {
              throw Error("硬直が見つかりませんでした");
            }
          } else if (input.mode === mvls_mode.action) {
            const [Color_LoadFactor] = input.value;

            const Color = Color_LoadFactor.match(/^[a-zA-Z]/g);
            const LoadFactor = Color_LoadFactor.match(/\d+/g);

            if (Color) mainMode(command.color, Color[0]);
            if (LoadFactor) {
              mainMode(command.action, id, LoadFactor[0]);
            } else {
              throw Error("硬直値が見つかりませんでした");
            }
          } else if (input.mode === mvls_mode.switch) {
            const [to_name, SPD, buff] = input.value;
            mainMode(command.switch, id, to_name, SPD, buff || "0");
            chara_move_list[to_name] = chara_move_list[id];
            chara_move_list[id] = [];
          } else if (input.mode === mvls_mode.command) {
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
    function mainMode(...arg: AST_command) {
      const [
        load_text_command,
        load_text_arg1,
        load_text_arg2,
        load_text_arg3,
        load_text_arg4,
      ] = arg;

      if (load_text_command !== command.end) {
        const tmp: [command | string, ...string[]] = arg;
        tmp[0] = command[load_text_command];
        if (convertedTLdata.main.length === 0) {
          convertedTLdata.main = [];
        }
        convertedTLdata.main.push(tmp as string[]);
      }

      let id,
        buff,
        color,
        name,
        spd,
        SPD,
        time,
        turn,
        skillcard,
        canMoveWithout1stChara,
        LoadFactor,
        to,
        from,
        ordervalue;
      
      const str2num_inf = (n:string) => Number.isNaN(Number(n)) ? Infinity : Number(n);

      // canMoveWithout1stChara_act;
      switch (load_text_command) {
        case command.buffset:
          id = load_text_arg1;
          buff = Number(load_text_arg2) || 0;
          turn = str2num_inf(load_text_arg3);
          chara_list[id]._SPD_buff = [];
          chara_list[id].setSPDbuff(buff, turn);
          break;

        case command.buffadd:
          id = load_text_arg1;
          buff = Number(load_text_arg2) || 0;
          turn = str2num_inf(load_text_arg3);
          chara_list[id].setSPDbuff(buff, turn);
          break;

        case command.buffminus:
          id = load_text_arg1;
          buff = Number(load_text_arg2) || 0;
          turn = str2num_inf(load_text_arg3);
          chara_list[id].setSPDbuff(-buff, turn);
          break;

        case command.add:
          id = load_text_arg1;
          SPD = Number(load_text_arg2);
          buff = Number(load_text_arg3) || 0;
          chara_list[id] = new chara(id, SPD, buff);
          TL.addChara(id, chara_list[id].initOrderValue());
          break;

        case command.move:
        case command.action:
          if (load_text_command === command.move) {
            LoadFactor = Number(load_text_arg1);
            id = load_text_arg2;
          } else {
            id = load_text_arg1;
            LoadFactor = Number(load_text_arg2);
          }

          canMoveWithout1stChara = load_text_arg3 === "true";
          if (count_ttk_ls[id]) {
            add_ttk(define.getCharge(LoadFactor, false));
          }
          TL.move(
            chara_list[TL.ID_of_firstChara()].calculateOrderValue(LoadFactor),
            id,
            canMoveWithout1stChara
          );
          chara_list[id].nextTurn();
          break;

        // case command.action:
        //   id = load_text_arg1;
        //   LoadFactor = Number(load_text_arg2);
        //   canMoveWithout1stChara_act = load_text_arg3 === "true";
        //   TL.move(
        //     chara_list[TL.ID_of_firstChara()].calculateOrderValue(
        //       LoadFactor
        //     ),
        //     id,
        //     canMoveWithout1stChara_act
        //   );
        //   break;

        case command.order:
          id = load_text_arg1;
          ordervalue = Number(load_text_arg2);
          // const canMoveWithout1stChara_act = load_text_arg3 === "true";

          TL.move(ordervalue, id, false);
          chara_list[id].nextTurn();

          break;

        case command.switch:
          to = load_text_arg1;
          from = load_text_arg2;
          SPD = Number(load_text_arg3);
          buff = Number(load_text_arg4) || 0;
          // count_ttk_ls[to] = count_ttk_ls[from];
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

        case command.color:
          color = load_text_arg1;
          TL.color = color;
          break;

        case command.skillcard:
          name = load_text_arg1;
          spd = Number(load_text_arg2);
          LoadFactor = Number(load_text_arg3);
          time = Number(load_text_arg4);

          if ([spd, LoadFactor, time].includes(NaN)) {
            throw Error("引数不足です");
          }

          skillcard = new chara(name, spd, 0);
          chara_list[name] = skillcard;
          TL.addSkillCard(
            name,
            skillcard.calculateOrderValue(LoadFactor),
            time,
            (id, _, _i) =>
              add_ttk(
                count_ttk_ls[id]
                  ? define.getCharge(Number(load_text_arg3), true)
                  : 0
              )
          );
          break;

        case command.nomove:
          TL.skip();
          break;

        case command.end:
          mode = mode_list.waiting_mode;
          break;

        default:
          throw Error("no command found");
      }
    }

    for (let i = 0; i < parsed_tldata.length; i++) {
      try {
        const load_text_command = parsed_tldata[i]?.[0];
        const load_text_arg1 = parsed_tldata[i]?.[1];
        const load_text_arg2 = parsed_tldata[i]?.[2];
        const load_text_arg3 = parsed_tldata[i]?.[3];
        // const load_text_arg4 = parsed_tldata[i]?.[4];

        let id, SPD, buff, LoadFactor_list, statement, ttk_ls;

        switch (mode) {
          case mode_list.init:
            switch (load_text_command) {
              case command.set:
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

              case command.countTTK:
                ttk_ls = parsed_tldata[i].slice(1);
                ttk_ls.forEach((v) => {
                  if (typeof v === "string") {
                    count_ttk_ls[v] = true;
                  }
                });
                break;

              case command.countTTKuntil:
                ttk_count_until = Number(load_text_arg1) || Infinity;
                break;

              case command.start:
                mode = mode_list.start;
                TL.inited();
                break;

              case command.start_sort:
                mode = mode_list.start_sort;
                TL.inited();
                break;

              case command.move_list:
                mode = mode_list.start_sort;
                TL.inited();
                i--;
                break;

              default:
                throw Error("need 'start'");
            }
            break;
          case mode_list.start:
            statement = parsed_tldata[i];
            if (statement[0] !== command.move_list) {
              mainMode(...statement);
            } else {
              throw Error("start_sort ~ end_sort内にmove_listを書いてください");
            }
            break;
          case mode_list.start_sort:
            switch (load_text_command) {
              case command.move_list:
                id = load_text_arg1;
                LoadFactor_list = load_text_arg2;
                chara_move_list[id] = LoadFactor_list as move_list[];
                break;

              case command.end_sort:
                sorting();
                mode = mode_list.waiting_mode;
                break;

              default:
                throw Error("no command found:「" + load_text_command + "」");
            }

            break;
          case mode_list.waiting_mode:
            switch (load_text_command) {
              case command.start:
                mode = mode_list.start;
                break;

              case command.start_sort:
                mode = mode_list.start_sort;
                break;

              default:
                throw Error("need 'start'");
            }
            break;

          default:
            throw Error("内部エラー");
        }
      } catch (e) {
        console.error(e);
        // console.error(i + 1 + "行目にエラー", e);

        // err.innerText =
        //   i + 1 + "行目にエラー(" + str_splited[i].join(" ") + ")";
        err.appendChild(lib.htmltag("br"));
        err.insertAdjacentText("beforeend", String(e));
        break;
      }
    }

    if (mode === mode_list.start_sort) {
      sorting();
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

    document.querySelectorAll(".ttk").forEach((elm) => {
      if (Object.values(count_ttk_ls).filter((x) => x).length === 0) {
        elm.classList.add("display-none");
      } else {
        elm.classList.remove("display-none");
        document.querySelectorAll(".ttk-value").forEach((elm) => {
          elm.textContent = String(ttk);
        });
      }
    });
  }

  function outputAsTable(
    json: (string | number | undefined)[][],
    charalist: string[],
    comment: [string, string, number, string][],
    now_place: number
  ) {
    const output = lib.htmltag("thead");
    const inner_tr = lib.htmltag("tr");

    for (let i = 0; i <= json[0].length; i++) {
      let tmp;
      if (i === now_place) {
        tmp = lib.htmltag("th", i.toString(), "now_place");
      } else if (i === 0) {
        tmp = lib.htmltag("th", "", "nowrap");
      } else {
        tmp = lib.htmltag("th", i.toString());
      }
      inner_tr.appendChild(tmp);
    }

    output.appendChild(inner_tr);

    for (let x = 0; x < json.length; x++) {
      const main_tl = lib.htmltag("tr");
      main_tl.appendChild(lib.htmltag("td", charalist[x], "nowrap"));
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
          tmp = lib.htmltag("td", inner_tmp_string, "color-" + find[3]);
        } else {
          tmp = lib.htmltag("td", inner_tmp_string);
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
      throw lib.undefinedErr;
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
    lib.textCopy(url.href);
    const copyed = document.getElementById("copyed");
    if (copyed) {
      copyed.style.display = "block";
      setTimeout(() => {
        copyed.style.display = "none";
      }, 1000);
    } else {
      throw lib.undefinedErr;
    }
  }

  function printConvertedTL() {
    const popup_elm = document.getElementById("popup");
    if (popup_elm) {
      popup_elm.innerText = joinedTLdata();
    } else {
      throw lib.undefinedErr;
    }
  }

  function copyConvertedTL() {
    lib.textCopy(joinedTLdata());
    const copyed = document.getElementById("copyed_popup");
    if (copyed) {
      copyed.style.display = "block";
      setTimeout(() => {
        copyed.style.display = "none";
      }, 1000);
    } else {
      throw lib.undefinedErr;
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
