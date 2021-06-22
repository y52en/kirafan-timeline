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

  class parser {
    constructor(timeline_str) {
      this.timeline_str = timeline_str
        .replaceAll(/#.*(\n|$)/g, "")
        .replaceAll(/\\(\n|$)/g, "");
      this._now_str = "";
      this.i_nowloadstr = 0;
    }

    get now_str() {
      return this._now_str;
    }

    set now_str(_) {
      throw Error("上書き禁止！");
    }

    parse() {
      this.setNextStr();
      const output = this._parse();
      return output;
    }

    _parse() {
      const output = [];
      try {
        this.skipSpaceAndNewLine();
        while (true) {
          const command_list = this.loadStatement();
          output.push(command_list);

          this.skipSpace();
          if (!this.isStrEqualNewLine()) {
            this.error(
              "error",
              "想定外の文字:「" +
                this.now_str +
                "」<br>(" +
                JSON.stringify(output.slice(-1)) +
                ")<br>(おそらくmove_listの内のかっこの対応が不正です)"
            );
          }
          this.skipSpaceAndNewLine();
        }
      } catch (e) {
        if (e.reason === "loaded") {
          return output;
        } else {
          throw e;
        }
      }
    }

    loadStatement() {
      const output = [];

      this.skipSpace();
      const command = this.loadCommand();
      output.push(command);
      this.skipSpace();
      if (command === "move_list" || command === "mv_ls") {
        const arg1 = this.loadCommand();
        output.push(arg1);
        this.skipSpaceAndNewLine();
        if (this.now_str !== "[") {
          this.error("error", "パースエラー：move_listには [ が必要です");
        }
        this.setNextStr();

        const arg2 = [];

        try {
          while (true) {
            this.skipSpaceAndNewLine();

            if (this.now_str === "]") {
              this.setNextStr();
              break;
            } else if (this.now_str === "{") {
              // skip {
              this.setNextStr();
              const endChar = "}";
              const val = { mode: "command", value: [] };
              while (true) {
                const arg = this.loadCommand("\n," + endChar);
                val.value.push(arg);
                this.skipSpaceAndNewLine();
                if (this.now_str === endChar) {
                  this.setNextStr();
                  break;
                }
                this.skipSpaceAndNewLine();
                if (!this.isStrEqualComma()) {
                  this.error("error", "not comma");
                }
                // skip commma
                this.setNextStr();
                this.skipSpaceAndNewLine();
              }
              arg2.push(val);
            } else if (this.now_str === "[") {
              this.setNextStr();

              const endChar = "]";
              const val = { mode: "switch", value: [] };
              while (true) {
                const arg = this.loadCommand("\n," + endChar);
                val.value.push(arg);
                this.skipSpaceAndNewLine();
                if (this.now_str === endChar) {
                  break;
                }
                this.skipSpaceAndNewLine();
                if (!this.isStrEqualComma()) {
                  this.error("error", "not comma");
                }
                // skip commma
                this.setNextStr();
                this.skipSpaceAndNewLine();
              }
              // skip ]
              this.setNextStr();
              arg2.push(val);
            } else if (this.now_str === "<") {
              this.setNextStr();
              const endChar = ">";
              const val = { mode: "order", value: [] };
              const arg = this.loadCommand(endChar);
              val.value.push(arg);
              arg2.push(val);
              // skip >
              this.setNextStr();
            } else {
              const val = { mode: "action", value: [] };
              const arg = this.loadCommand(
                "\n" +
                  " 　\f\r\t\v\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF" +
                  ",]"
              );
              val.value.push(arg);
              arg2.push(val);
            }
            this.skipSpaceAndNewLine();
            this.skipComma();
          }
        } catch (e) {
          e.value +=
            "<br>(" + command + " " + arg1 + " " + JSON.stringify(arg2) + ")";
        }

        output.push(arg2);
      } else {
        while (true) {
          if (this.isStrEqualNewLine()) {
            break;
          }
          const arg = this.loadCommand();
          output.push(arg);
          this.skipSpace();
        }
      }
      return output;
    }

    error(reason, value) {
      throw {
        reason,
        value,
      };
    }

    loadCommand(
      // "\s"
      endChar = "\n" +
        " 　\f\r\t\v\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF"
    ) {
      let output = "";
      while (true) {
        if (endChar.split("").includes(this.now_str)) {
          break;
        }
        try {
          this.checkNotReservedStr();
        } catch (e) {
          e.value += "( " + output + this.now_str + " ←ここでエラー)";
          throw e;
        }
        if (this.isNotReservedStr()) {
          output += this.now_str;
        } else {
          this.error("error", "内部エラー:未到達コードなはず");
        }
        this.setNextStr();
      }
      return output;
    }

    skipSpace() {
      while (true) {
        if (this.isStrEqualSpace()) {
          this.setNextStr();
        } else {
          break;
        }
      }
    }

    skipComma() {
      while (true) {
        if (this.isStrEqualSpace() || this.isStrEqualComma()) {
          this.setNextStr();
        } else {
          break;
        }
      }
    }

    skipSpaceAndNewLine() {
      while (true) {
        if (this.isStrEqualText()) {
          break;
        }
        this.setNextStr();
      }
    }

    _setNextStr() {
      if (this.i_nowloadstr + 1 > this.timeline_str.length) {
        return { done: true, value: undefined };
      } else {
        let output = {
          done: false,
          value: this.timeline_str[this.i_nowloadstr],
        };
        this.i_nowloadstr++;
        return output;
      }
    }

    setNextStr() {
      let returnVal = this._setNextStr();
      if (returnVal.done) {
        throw {
          reason: "loaded",
        };
      }
      this._now_str = returnVal.value;
    }

    isStrEqualNewLine() {
      return this.now_str === "\n";
    }

    isStrEqualComma() {
      return this.now_str === ",";
    }

    addStackStr() {
      this.stack_str += this.now_str;
    }

    isStrEqualSpace() {
      const spaceRegex = new RegExp(
        /^[ 　\f\r\t\v\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/
      );
      return spaceRegex.test(this.now_str);
    }

    isStrEqualText() {
      // return !(this.isStrEqualNewLine() || this.isStrEqualSpace())
      return !this.isStrEqualNewLine() && !this.isStrEqualSpace();
    }

    isNotReservedStr() {
      // {}[]()<>,"'
      return !/[\{\}\[\]\(\)\<\>,"']/.test(this.now_str);
    }

    checkNotReservedStr() {
      if (!this.isNotReservedStr()) {
        this.error(
          "error",
          "パースエラー：想定されていない文字「" +
            this.now_str +
            "」が見つかりました"
        );
      }
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
    // textCopy
    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "c" && e.ctrlKey) {
        let cursorPlace_start = input_elm.selectionStart;
        let cursorPlace_end = input_elm.selectionEnd;
        if (cursorPlace_start === cursorPlace_end) {
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
        let cursorPlace_start = input_elm.selectionStart;
        let cursorPlace_end = input_elm.selectionEnd;
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

        input_elm.value = textValue;
        input_elm.setSelectionRange(cursorPlace_start, cursorPlace_end);
        main();
      }
    });

    input_elm.addEventListener("keydown", (e) => {
      if ((e.key === "[" || e.key === "]") && e.ctrlKey) {
        let cursorPlace_start = input_elm.selectionStart;
        let cursorPlace_end = input_elm.selectionEnd;
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

        input_elm.value = textValue;
        input_elm.setSelectionRange(cursorPlace_start, cursorPlace_end);
        main();
      }
    });
    main();
  };

  let tableData = [];

  let convertedTLdata = {};

  function main() {
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

    const tl_parser = new parser(str);
    let parsed_tldata;
    try {
      parsed_tldata = tl_parser.parse();
    } catch (e) {
      err.innerHTML = e.value;
      throw e;
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
                throw Error("no command found");
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
                      Object.entries(output).map(([key, value]) => ({
                        [key]: value.map((x) => {
                          if (x.value.length === 1) {
                            x.value = x.value[0];
                          }
                          return x.value;
                        }),
                      }))
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
    document.getElementById("now_place").innerText = now_place;

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

    for (let x = 0; x < json.length; x++) {
      output += "<tr>";
      // output += htmltag("td", charalist[x]);
      output += "<td style='white-space: nowrap;'>" + charalist[x] + "</td>";
      for (let y = 0; y < json[0].length; y++) {
        // console.log(comment);
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
