//@ts-check
"use strict";
  
((window) => {
  function objectCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  // function isObject(val) {
  //   if (val !== null && typeof val === "object" && val.constructor === Object) {
  //     return true;
  //   }
  //   return false;
  // }
  function textCopy(textVal) {
    const copyFrom = document.createElement("textarea");
    copyFrom.textContent = textVal;
    const bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    const retVal = document.execCommand("copy");
    bodyElm.removeChild(copyFrom);
    return retVal;
  }

  class parser_lexicallyAnalyze2AST {
    constructor(lexically_analyzed) {
      this.timeline_parsed = lexically_analyzed;
      this.i_loading = 0;
    }

    get now_val() {
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
      let output = [];
      let i;
      const t = this;
      const type = () => this.timeline_parsed[i].type;
      for (i = 0; i < this.timeline_parsed.length; i++) {
        if (type() === "bracketL") {
          removeMeaninglessNewLine();
        }
        output.push(this.timeline_parsed[i]);
      }
      function removeMeaninglessNewLine() {
        let i_toErrMsg = [i];
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

    parse() {
      this.Normalize();
      let output = [];
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
        const data = this.loadStatement();
        output.push(data);

        if (this.now_val_type !== "new_line") {
          this.error_unexpectedToken(
            "]のあとにコメント以外の文を書くことはできません"
          );
        }
      }
      return output;
    }

    loadStatement() {
      let statementList = [];

      const push = () => {
        statementList.push(this.now_val.value);
        this.nextVal();
      };

      this.checkIsWord();
      push();

      if (statementList[0] === "move_list" || statementList[0] === "mv_ls") {
        this.checkIsWord();
        push();

        if (this.now_val_type !== "bracketL") {
          this.error_unexpectedToken(
            "move_listの第二引数は [ から始まる必要があります"
          );
        }
        this.nextVal();

        const arg2 = [];
        if (this.now_val_type !== "bracketR") {
          loop: while (true) {
            let list;
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
                const val = { mode: "action", value: [] };
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
        statementList.push(arg2);
        this.nextVal();
      } else {
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

    isLastValue() {
      return this.i_loading + 1 >= this.timeline_parsed.length;
    }

    getMoveListInList(endType) {
      let output = [];
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
      const statement_list = [
        "<span class='errMsg'>→→",
        this.now_val.value,
        "←←</span>",
      ];
      // ....... \n <-
      //\n ........
      if (this.now_val.type !== "new_line") {
        for (let i = this.i_loading + 1; i < this.timeline_parsed.length; i++) {
          if (this.timeline_parsed[i].type === "new_line") {
            break;
          } else {
            statement_list.push(this.timeline_parsed[i].value);
          }
        }
      }
      for (let i = this.i_loading - 1; i >= 0; i--) {
        if (this.timeline_parsed[i].type === "new_line") {
          break;
        } else {
          statement_list.unshift(this.timeline_parsed[i].value);
        }
      }

      if (this.now_val.type === "reserved") {
        errMsg = "予約文字です";
      }
      throw Error(
        "想定外の値: 「" +
          JSON.stringify(this.now_val.value) +
          "」" +
          "<br>" +
          statement_list.join("") +
          "<br>" +
          errMsg
      );
    }
  }

  class parser_lexicallyAnalyze {
    constructor(timeline_str) {
      this.timeline_str = timeline_str;
      this.timeline_parsed = [];
      // .replaceAll(/#.*/g, "").replaceAll(/\\(\n|$)/g, "") + "\n";
      this._now_str = "";
      this.i_nowloadstr = 0;
    }

    parse() {
      this.timeline_parsed = this.lexicalAnalysis();
      // this.Normalize();
      return this.timeline_parsed;
    }

    lexicalAnalysis(string = this.timeline_str) {
      let output = [];
      let tmp = "";
      const space = "\u{20}";
      string = string.replaceAll(/\\(\n|$)/g, "");

      const parsed = (type, value) => ({ type: type, value: value });
      loop: for (let i = 0; i < string.length; i++) {
        let char = string[i];

        let val = parsed(undefined, char);
        const changeType = (type) => {
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
    constructor(URL = location.href, autochange = true) {
      this._href = URL;
      this._reflesh();
      this.autochange = autochange;
    }

    getParam(param) {
      return decodeURIComponent(this._urlAPI.searchParams.get(param) || "");
    }

    setParam(name, value = "") {
      this._urlAPI.searchParams.set(name, encodeURIComponent(value));
      if (this.autochange) {
        this._setURL(this._urlAPI.href);
      }
    }

    get hash() {
      return this._urlAPI.hash;
    }

    set hash(val) {
      this._setURL(`#${val}`);
    }

    get href() {
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

    _setURL(arg3) {
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
    constructor() {
      this.current = new Array();
      this.output = new Array();
      this.switchData = new Array();
      this.cardData = new Array();
      this.comment = new Array();
      this.color = undefined;

      this.place_of_currentTimeline = 0;
    }

    move(
      OrderValue,
      id = this.ID_of_firstChara(),
      canMoveWithout1stChara = false
    ) {
      this.setColor(id, this.place_of_currentTimeline);

      if (id !== this.ID_of_firstChara() && canMoveWithout1stChara === false) {
        throw new Error("最初のキャラ以外は操作できません");
      }
      const moveChara_nowOrderValue =
        this.get_chara_by_ID(id).timeline_OrderValue;

      let OrderValue_diff_between_1stchara_and_movechara =
        moveChara_nowOrderValue - this.OrderValue_of_firstChara();
      let calculated_moved_OrderValue =
        moveChara_nowOrderValue +
        OrderValue -
        OrderValue_diff_between_1stchara_and_movechara;

      this.pushChara(id, calculated_moved_OrderValue);
      this.nextturn();
    }

    setColor(chara, place) {
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

    setChara(id, initOrderValue) {
      // this.current.push({ id: id, timeline_OrderValue: initOrderValue });
      this.pushChara(id, initOrderValue);
    }

    place_to_moved(calculated_moved_OrderValue) {
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

    pushChara(id, calculated_moved_OrderValue) {
      let tmp_movechara;
      try {
        tmp_movechara = objectCopy(this.get_chara_by_ID(id));
      } catch {
        tmp_movechara = { id };
      }

      tmp_movechara.timeline_OrderValue = calculated_moved_OrderValue;

      let place_to_moved = this.place_to_moved(calculated_moved_OrderValue);
      this.current.splice(place_to_moved, 0, tmp_movechara);
    }

    addChara(id, initOrderValue) {
      this.current.splice(this.place_of_currentTimeline, 0, {
        id: id,
        timeline_OrderValue: initOrderValue,
      });
    }

    addSkillCard(id, OrderValue, time) {
      try {
        let current_card = this.get_chara_by_ID(id);
        current_card.time = time;
        this.current[this.placeToChara(id)] = current_card;
      } catch {
        let target_ov = this.OrderValue_of_firstChara() + OrderValue;
        let target_place = this.place_to_moved(target_ov);
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

    switchChara(id_currentChara, id_switchToChara) {
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
        this.switchSupportChara(...arguments);
      }
    }

    switchSupportChara(id_currentChara, id_switchToChara) {
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

    get firstChara() {
      return this.current[this.place_of_currentTimeline];
    }

    set firstChara(_) {
      throw Error("firstCharaにはセットできません");
    }

    OrderValue_of_firstChara() {
      return this.firstChara.timeline_OrderValue;
    }

    ID_of_firstChara() {
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

    get_chara_by_ID(id) {
      return this.current[this.placeToChara(id)];
    }

    placeToChara(id) {
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
    constructor(id, SPD, SPD_buff, LoadFactorReduce = 0) {
      this.id = id;
      this.SPD = SPD;
      this.SPD_buff = SPD_buff;
      this.LoadFactorReduce = LoadFactorReduce;
    }

    calculateOrderValue(LoadFactor, LoadFactorReduce = 0) {
      const SPD = this.SPD;
      const SPD_buff = this.SPD_buff / 100;
      let OrderValueRadix = Math.min(
        Math.max(124 - Math.floor(SPD / 2), 0),
        100
      );
      let OrderValue = Math.floor(
        OrderValueRadix *
          (LoadFactor / 100) *
          (1 - LoadFactorReduce) *
          (1 - SPD_buff)
      );

      return Math.max(Math.min(OrderValue, 500), 15);
    }

    initOrderValue() {
      return this.calculateOrderValue(100, 0);
    }
  }

  window.onload = () => {
    const input_elm = document.getElementById("input_txt");
    const TLparam = url.getParam("TL");
    if (typeof TLparam !== null) {
      input_elm.textContent = TLparam;
    }
    input_elm.oninput = main;
    document.getElementById("csvDownload").onclick = outputAsCSV;
    document.getElementById("copyTL").onclick = copyDataAsURL;
    document.getElementById("log_convertedTL").onclick = printConvertedTL;

    document.getElementById("copy_ConvertedTL").onclick = copyConvertedTL;

    document.getElementById("jumpTwitter").onclick = () => {
      window.open(
        "https://twitter.com/Y52en/status/1402239605978517505?s=20",
        "_blank"
      );
    };
    document.getElementById("unzipMoveList").onclick = () => {
      // @ts-ignore
      document.getElementById("pop11").checked = true;
    };

    const elm_Set_onbeforeunload = document.getElementById(
      "isSet_onbeforeunload"
    );
    function Set_onbeforeunload(e) {
      // @ts-ignore
      if (e.target.checked) {
        window.onbeforeunload = function (e) {
          // @ts-ignore
          if (input_elm.value.length !== 0) {
            e.preventDefault();
            e.returnValue = "ページから離れますか？";
          }
        };
      } else {
        // if(confirm("変更してもよろしいですか？")){
        window.onbeforeunload = () => {};
        // }else{
        // @ts-ignore
        // e.target.checked = true
        // }
      }
    }
    elm_Set_onbeforeunload.onchange = (e) => Set_onbeforeunload(e);
    Set_onbeforeunload({ target: elm_Set_onbeforeunload });

    // textCopy
    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "c" && e.ctrlKey) {
        // @ts-ignore
        let cursorPlace_start = input_elm.selectionStart;
        // @ts-ignore
        let cursorPlace_end = input_elm.selectionEnd;
        if (cursorPlace_start === cursorPlace_end) {
          // @ts-ignore
          let textValue = input_elm.value;
          const numOfLines_start = [
            ...textValue
              .slice(0, cursorPlace_start)
              // .cursorBeforeText
              .matchAll(/\n/g),
          ].length;
          const beforeLines_regex = "^(.*\\n){" + numOfLines_start + "}";

          textCopy(
            textValue.replace(
              new RegExp(beforeLines_regex + "(.*)($|[\\s\\S]*$)"),
              "$2"
            )
          );

          return false;
        } else {
          return true;
        }
      }
    });

    //comment ctrl + /
    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "/" && e.ctrlKey) {
        // @ts-ignore
        let cursorPlace_start = input_elm.selectionStart;
        // @ts-ignore
        let cursorPlace_end = input_elm.selectionEnd;
        // @ts-ignore
        let textValue = input_elm.value;
        const numOfLines_start = [
          ...textValue
            .slice(0, cursorPlace_start)
            // .cursorBeforeText
            .matchAll(/\n/g),
        ].length;
        const numOfLines_end = [
          ...textValue
            .slice(0, cursorPlace_end)
            // .cursorBeforeText
            .matchAll(/\n/g),
        ].length;

        for (let i = numOfLines_start; i <= numOfLines_end; i++) {
          const beforeLines_regex = "^(.*\n){" + i + "}";

          // if comment found
          if (new RegExp(beforeLines_regex + "( )*#").test(textValue)) {
            textValue = textValue.replace(
              new RegExp("(" + beforeLines_regex + "( )*)#"),
              "$1"
            );
            if (i === numOfLines_start) {
              cursorPlace_start--;
            }
            cursorPlace_end--;
          } else {
            textValue = textValue.replace(
              new RegExp("(" + beforeLines_regex + ")"),
              "$1#"
            );
            if (i === numOfLines_start) {
              cursorPlace_start++;
            }
            cursorPlace_end++;
          }
        }

        // @ts-ignore
        input_elm.value = textValue;
        // @ts-ignore
        input_elm.setSelectionRange(cursorPlace_start, cursorPlace_end);
        main();
      }
    });

    input_elm.addEventListener("keydown", (e) => {
      if ((e.key === "[" || e.key === "]") && e.ctrlKey) {
        // @ts-ignore
        let cursorPlace_start = input_elm.selectionStart;
        // @ts-ignore
        let cursorPlace_end = input_elm.selectionEnd;
        // @ts-ignore
        let textValue = input_elm.value;

        const numOfLines_start = [
          ...textValue
            .slice(0, cursorPlace_start)
            // .cursorBeforeText
            .matchAll(/\n/g),
        ].length;
        const numOfLines_end = [
          ...textValue
            .slice(0, cursorPlace_end)
            // .cursorBeforeText
            .matchAll(/\n/g),
        ].length;

        for (let i = numOfLines_start; i <= numOfLines_end; i++) {
          const beforeLines_regex = "^(.*\n){" + i + "}";
          const beforeReplace_textValue = textValue;

          // if comment found
          if (e.key === "[") {
            textValue = textValue.replace(
              new RegExp("(" + beforeLines_regex + ") "),
              "$1"
            );
            if (beforeReplace_textValue !== textValue) {
              if (i === numOfLines_start) {
                cursorPlace_start--;
              }
              cursorPlace_end--;
            }
          } else {
            textValue = textValue.replace(
              new RegExp("(" + beforeLines_regex + ")"),
              "$1 "
            );
            if (beforeReplace_textValue !== textValue) {
              if (i === numOfLines_start) {
                cursorPlace_start++;
              }
              cursorPlace_end++;
            }
          }
        }

        // @ts-ignore
        input_elm.value = textValue;
        // @ts-ignore
        input_elm.setSelectionRange(cursorPlace_start, cursorPlace_end);
        main();
      }
    });
    main();
  };

  let tableData = [];
  let convertedTLdata = {};

  function main() {
    // @ts-ignore
    let str = document.getElementById("input_txt").value;
    url.setParam("TL", str);

    convertedTLdata = { main: [], set: [] };
    let chara_list = {};
    let TL = new timeline();
    let chara_move_list = {};

    const err = document.getElementById("error");
    const info = document.getElementById("info");
    err.innerHTML = "";
    info.innerHTML = "";

    let parsed_tldata;
    try {
      // parsed_tldata = tl_parser.parse();
      const tl_parser_lexicallyAnalyze = new parser_lexicallyAnalyze(str);
      const lexicallyAnalyzed = tl_parser_lexicallyAnalyze.parse();

      const tl_parser_AST = new parser_lexicallyAnalyze2AST(lexicallyAnalyzed);
      parsed_tldata = tl_parser_AST.parse();
    } catch (e) {
      err.innerHTML = e;
      throw e;
      // @ts-ignore
      return;
    }

    const mode_list = {
      init: "init",
      start: "start",
      start_sort: "start_sort",
      sorting: "sorting",
      waiting_mode: "waiting_mode",
    };
    let mode = mode_list.init;
    for (let i = 0; i < parsed_tldata.length; i++) {
      try {
        const load_text_command = parsed_tldata[i]?.[0];
        const load_text_arg1 = parsed_tldata[i]?.[1];
        const load_text_arg2 = parsed_tldata[i]?.[2];
        const load_text_arg3 = parsed_tldata[i]?.[3];
        // @ts-ignore
        const load_text_arg4 = parsed_tldata[i]?.[4];

        let id, SPD, buff, LoadFactor, LoadFactor_list, to, from, ordervalue;

        switch (mode) {
          case mode_list.init:
            switch (load_text_command) {
              case "set":
                id = load_text_arg1.toString();
                SPD = Number(load_text_arg2);
                buff = Number(load_text_arg3) || 0;
                chara_list[id] = new chara(id, SPD, buff);
                TL.setChara(id, chara_list[id].initOrderValue());
                convertedTLdata.set.push(parsed_tldata[i]);
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
            mainMode(...parsed_tldata[i]);
            break;
          case mode_list.start_sort:
            switch (load_text_command) {
              case "move_list":
              case "mv_ls":
                id = load_text_arg1;
                LoadFactor_list = load_text_arg2;
                chara_move_list[id] = LoadFactor_list;
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
        }

        function sorting() {
          while (true) {
            const id = TL.ID_of_firstChara();
            if (chara_move_list[id]?.[0] === undefined) {
              let output = new Object();
              Object.keys(chara_move_list).forEach(function (key) {
                if (chara_move_list[key].length !== 0) {
                  output[key] = chara_move_list[key];
                }
              });
              if (Object.keys(output).length !== 0) {
                info.insertAdjacentText(
                  "beforeend",
                  "ⓘinfo :move_listに使われていないスキルがあります:" +
                    JSON.stringify(
                      Object.fromEntries(
                        Object.entries(output).map(([key, value]) => [
                          key,
                          value.map((x) => {
                            if (x.value.length === 1) {
                              x.value = x.value[0];
                            }
                            return x.value;
                          }),
                        ])
                      )
                      // @ts-ignore
                    ).replaceAll('"', "")
                );
              }
              break;
            }

            const input = chara_move_list[id].shift();

            try {
              if (input.mode === "order") {
                const [Color_OrderValue] = input.value;
                const Color = Color_OrderValue.match(/^[a-zA-Z]/g);
                const OrderValue = Color_OrderValue.match(/\d+/g);

                mainMode("color", Color);
                mainMode("order", id, OrderValue);
              } else if (input.mode === "action") {
                const [Color_LoadFactor] = input.value;

                const Color = Color_LoadFactor.match(/^[a-zA-Z]/g);
                const LoadFactor = Color_LoadFactor.match(/\d+/g);

                mainMode("color", Color);
                mainMode("action", id, LoadFactor);
              } else if (input.mode === "switch") {
                const [to_name, SPD, buff] = input.value;
                mainMode("switch", id, to_name, SPD, buff || 0);
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

        function mainMode(...arg) {
          const [
            load_text_command,
            load_text_arg1,
            load_text_arg2,
            load_text_arg3,
            load_text_arg4,
          ] = arg;

          if (load_text_command !== "" && load_text_command !== "end") {
            convertedTLdata.main.push(arg.filter((x) => x || x === 0));
          }

          let id, buff;
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
              const canMoveWithout1stChara = load_text_arg3 === "true";
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
              const canMoveWithout1stChara_act = load_text_arg3 === "true";
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
              var color = load_text_arg1;
              TL.color = color;
              break;

            case "skillcard":
            case "sc":
              var name = load_text_arg1;
              var spd = Number(load_text_arg2);
              LoadFactor = Number(load_text_arg3);
              var time = Number(load_text_arg4);

              var skillcard = new chara(name, spd, 0);
              chara_list[name] = skillcard;
              TL.addSkillCard(
                name,
                skillcard.calculateOrderValue(LoadFactor),
                time
              );

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
        console.error(i + 1 + "行目にエラー", e);

        // err.innerText =
        //   i + 1 + "行目にエラー(" + str_splited[i].join(" ") + ")";
        err.innerHTML += "<br>";
        err.insertAdjacentText("beforeend", e);
        break;
      }
    }

    let chara_array = [];
    for (let i in chara_list) {
      chara_array.push(i);
    }

    let outputTL = Array.from(new Array(Object.keys(chara_list).length), () =>
      new Array(TL.current.length).fill(undefined)
    );

    TL.current.forEach((i, index) => {
      let chara_id = i.id;
      let OrderValue = i.timeline_OrderValue;
      let charaPlace = chara_array.indexOf(chara_id);

      outputTL[charaPlace][index] = OrderValue;
    });
    TL.switchData.forEach((x) => {
      const [place, from_id, to_id] = x;
      let from_charaPlace = chara_array.indexOf(from_id);
      let to_charaPlace = chara_array.indexOf(to_id);
      let arrow_str = "";
      if (from_charaPlace < to_charaPlace) {
        arrow_str = "↓↓";
      } else {
        arrow_str = "↑↑";
      }

      outputTL[from_charaPlace][place] = arrow_str;
    });

    TL.cardData.forEach((x) => {
      let charaPlace = chara_array.indexOf(x[1]);
      outputTL[charaPlace][x[0]] = "→";
    });
    const now_place = TL.place_of_currentTimeline + 1;
    document.getElementById("firstchara").innerText = TL.ID_of_firstChara();
    document.getElementById("now_place").innerText = String(now_place);

    tableData = [outputTL, chara_array];
    outputAsTable(outputTL, chara_array, TL.comment, now_place);
    printConvertedTL();
  }

  function outputAsTable(json, charalist, comment, now_place) {
    let output = "";
    output += "<thead><tr>";

    output += htmltag("th", "");

    for (let i = 0; i < json[0].length; i++) {
      if (i + 1 === now_place) {
        output +=
          "<th style='background-color:#444;color:#fff'>" + (i + 1) + "</th>";
      } else if (i === 0) {
        output += "<th style='white-space: nowrap;'>" + (i + 1) + "</th>";
      } else {
        output += htmltag("th", i + 1);
      }
    }

    // for(let x = 0; json.length;x++){
    //   const output = htmltag("td")
    //   for(let y = 0; y < json[0].length; y++){

    //   }
    //   function htmltag(name, inner = "", Class = undefined) {
    //     const output = document.createElement(name)
    //     output.innerText = inner
    //     if(Class) output.classList.add(Class)
    //     return output
    //   }
    // }

    for (let x = 0; x < json.length; x++) {
      output += "<tr>";
      // output += htmltag("td", charalist[x]);
      output += "<td class='nowrap'>" + charalist[x] + "</td>";
      for (let y = 0; y < json[0].length; y++) {
        const find = comment.find(
          (elm) => elm[0] === "color" && elm[1] === charalist[x] && elm[2] === y
        );
        if (find) {
          // output += `<td style="background-color:${colorList[find[3]]}">${
          output += `<td class="color-${find[3]}">${json[x][y] || ""}</td>`;
        } else {
          output += htmltag("td", json[x][y] || "");
        }
      }
      output += "</tr>";
    }
    output += "</tr></thead>";

    function htmltag(name, inner) {
      return "<" + name + ">" + inner + "</" + name + ">";
      // // return
      // const output = document.createElement(name)
      // output.innerText = inner
      // if(Class) output.classList.add(Class)
      // return output
    }
    document.querySelector("table").innerHTML = output;
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

  function makeCSVfile_download(csv, fileName = "timeline.csv") {
    let bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    let blob = new Blob([bom, csv], { type: "text/csv" });
    let blobUrl = URL.createObjectURL(blob);

    let link = document.createElement("a");
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
    copyed.style.display = "block";
    setTimeout(() => {
      copyed.style.display = "none";
    }, 1000);
  }

  function printConvertedTL() {
    document.getElementById("popup").innerText = joinedTLdata();
  }

  function copyConvertedTL() {
    textCopy(joinedTLdata());
    const copyed = document.getElementById("copyed_popup");
    copyed.style.display = "block";
    setTimeout(() => {
      copyed.style.display = "none";
    }, 1000);
  }

  function joinedTLdata() {
    return (
      convertedTLdata.set.map((x) => x.join(" ")).join("\n") +
      "\n\nstart\n" +
      convertedTLdata.main.map((x) => "  " + x.join(" ")).join("\n") +
      "\nend"
    );
  }
})(window);





