"use strict";

(() => {
  function objectCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  function textCopy(textVal) {
    // テキストエリアを用意する
    var copyFrom = document.createElement("textarea");
    // テキストエリアへ値をセット
    copyFrom.textContent = textVal;

    // bodyタグの要素を取得
    var bodyElm = document.getElementsByTagName("body")[0];
    // 子要素にテキストエリアを配置
    bodyElm.appendChild(copyFrom);

    // テキストエリアの値を選択
    copyFrom.select();
    // コピーコマンド発行
    var retVal = document.execCommand("copy");
    // 追加テキストエリアを削除
    bodyElm.removeChild(copyFrom);
    // 処理結果を返却
    return retVal;
  }

  class OperateURL {
    constructor(URL = location.href,autochange= true) {
      this._href = URL;
      this._reflesh();
      this.autochange = autochange
    }

    getParam(param) {
      return decodeURIComponent(this._urlAPI.searchParams.get(param) || "");
    }

    setParam(name, value) {
      this._urlAPI.searchParams.set(name, encodeURIComponent(value));
      if(this.autochange){
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
      console.log(this);
      return this._urlAPI.protocol + "//" + this._urlAPI.host + this._urlAPI.pathname + "?TL=" + 
      encodeURIComponent(this.getParam("TL"))
      // encodeURIComponent(this._urlAPI.search.replace(/^\?/,""));

    }

    set href(val) {
      this._urlAPI.href = val
      // this._reflesh()
    }

    _setURL(arg3) {
      if(this.autochange){
        history.replaceState("", "", arg3);
      }
    }

    _reflesh() {
      this._urlAPI = new URL(this._href);
    }
  }
  const url = new OperateURL(undefined,false)

  // function textCopy(string) {
  //   // 空div 生成
  //   var tmp = document.createElement("div");
  //   // 選択用のタグ生成
  //   var pre = document.createElement("pre");

  //   // 親要素のCSSで user-select: none だとコピーできないので書き換える
  //   pre.style.webkitUserSelect = "auto";
  //   pre.style.userSelect = "auto";

  //   tmp.appendChild(pre).textContent = string;

  //   // 要素を画面外へ
  //   var s = tmp.style;
  //   s.position = "fixed";
  //   s.right = "200%";

  //   // body に追加
  //   document.body.appendChild(tmp);
  //   // 要素を選択
  //   document.getSelection().selectAllChildren(tmp);

  //   // クリップボードにコピー
  //   var result = document.execCommand("copy");

  //   // 要素削除
  //   document.body.removeChild(tmp);

  //   return result;
  // }

  class timeline {
    constructor() {
      this.current = new Array();
      this.output = new Array();
      this.switchData = new Array();

      this.place_of_currentTimeline = 0;
    }

    move(
      OrderValue,
      id = this.ID_of_firstChara(),
      canMoveWithout1stChara = false
    ) {
      if (id !== this.ID_of_firstChara() && canMoveWithout1stChara === false) {
        throw new Error("最初のキャラ以外は操作できません");
      }
      let movechara_nowPlace = this.placeToChara(id);
      const moveChara_nowOrderValue = this.current[movechara_nowPlace]
        .timeline_OrderValue;

      let OrderValue_diff_between_1stchara_and_movechara =
        moveChara_nowOrderValue - this.OrderValue_of_firstChara();
      let calculated_moved_OrderValue =
        moveChara_nowOrderValue +
        OrderValue -
        OrderValue_diff_between_1stchara_and_movechara;

      let tmp_movechara = objectCopy(this.current[movechara_nowPlace]);
      tmp_movechara.timeline_OrderValue = calculated_moved_OrderValue;

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
      // splice 0 elm 1 elm 2
      // iter      0     1
      if (place_to_moved === -1) {
        this.current.splice(
          this.place_of_currentTimeline + 1,
          0,
          tmp_movechara
        );
      } else {
        this.current.splice(place_to_moved + 1, 0, tmp_movechara);
      }
      this.place_of_currentTimeline++;
    }

    //古いコードのままになっている
    move_stun(id, OrderValue) {
      let movechara_nowPlace = this.placeToChara(id);
      this.current[movechara_nowPlace].timeline_OrderValue += OrderValue;
      let place_to_moved = () => {
        if (movechara_nowPlace + 1 === this.current.length) {
          return movechara_nowPlace + 1;
        }
        for (let i = movechara_nowPlace + 1; i < this.current.length; i++) {
          if (
            this.current[i].timeline_OrderValue >=
            this.current[movechara_nowPlace].timeline_OrderValue
          ) {
            return i;
          }
        }
        return i + 1;
      };
      this.current.splice(
        place_to_moved(),
        0,
        this.current[movechara_nowPlace]
      );
      this.current.splice(movechara_nowPlace, 1);

      this.place_of_currentTimeline++;
    }

    setChara(id, initOrderValue) {
      this.current.push({ id: id, timeline_OrderValue: initOrderValue });
    }

    addChara(id, initOrderValue) {
      this.current.splice(this.place_of_currentTimeline, 0, {
        id: id,
        timeline_OrderValue: initOrderValue,
      });
    }

    switchChara(id_currentChara, id_switchToChara) {
      this.switchData.push([
        this.place_of_currentTimeline,
        id_currentChara,
        id_switchToChara,
      ]);

      if (id_currentChara === this.ID_of_firstChara()) {
        this.current[this.placeToChara(id_currentChara)].id = id_switchToChara;
        this.current[
          this.placeToChara(id_switchToChara)
        ].timeline_OrderValue = this.OrderValue_of_firstChara();
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

    OrderValue_of_firstChara() {
      return this.current[this.place_of_currentTimeline].timeline_OrderValue;
    }

    ID_of_firstChara() {
      return this.current[this.place_of_currentTimeline].id;
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
    const TLparam = url.getParam("TL")
    // console.log(typeof TLparam);
    if(typeof TLparam !== null){
      input_elm.textContent = TLparam
    }
    input_elm.oninput = main;
    document.getElementById("csvDownload").onclick = outputAsCSV;
    document.getElementById("copyTL").onclick = copyDataAsURL
    // textCopy
    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "c" && e.ctrlKey) {
        // debugger
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

          let s = textCopy(
            textValue.replace(
              new RegExp(beforeLines_regex + "(.*)($|[\\s\\S]*$)"),
              "$2"
            )
          );
          console.log(s);

          return false;
        } else {
          return true;
        }
      }
    });

    //comment ctrl + /
    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "/" && e.ctrlKey) {
        // debugger
        let cursorPlace_start = input_elm.selectionStart;
        let cursorPlace_end = input_elm.selectionEnd;
        let textValue = input_elm.value;
        // const cursorBeforeText = ;

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

        // console.log(numOfLines);
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
            // console.log(1);
            if (i === numOfLines_start) {
              cursorPlace_start++;
            }
            // else {
            cursorPlace_end++;
            // }
          }
        }

        input_elm.value = textValue;
        input_elm.setSelectionRange(cursorPlace_start, cursorPlace_end);
        main();
      }
    });

    input_elm.addEventListener("keydown", (e) => {
      if (e.key === "[" || (e.key === "]" && e.ctrlKey)) {
        // debugger
        let cursorPlace_start = input_elm.selectionStart;
        let cursorPlace_end = input_elm.selectionEnd;
        let textValue = input_elm.value;
        // const cursorBeforeText = ;

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

        // console.log(numOfLines);
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
            // console.log(1);
            if (beforeReplace_textValue !== textValue) {
              if (i === numOfLines_start) {
                cursorPlace_start++;
              }
              // else {
              cursorPlace_end++;
            }
            // }
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

  function main() {
    let str = document.getElementById("input_txt").value;
    url.setParam("TL",str);
    // let bak_str = str
    // .replaceAll("　"," ")
    // .split("\n")
    // .map((x) =>
    //   x.split(/^[^ ]+| +|(?=#)/)
    // );
    // console.log(bak_str);
    let chara_list = {};
    let TL = new timeline();

    let chara_move_list = {};

    const err = document.getElementById("error");
    const info = document.getElementById("info");
    err.innerHTML = "";
    info.innerHTML = "";

    // debugger

    // 長い[]は[\s&&[^\n]]と同じ(jsではその記法が使えなかった)

    //全角スペース => 半角
    str = str
      .replaceAll("　", " ")

      //delete space(半角)
      .replaceAll(/^( )+/gm, "")

      //delete comment
      .replaceAll(/#.*$/gm, "")

      //trim space
      .replaceAll(
        /[\f\r\t\v\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]{2,}/gm,
        " "
      );

    let str_splited = str
      .split("\n")
      .map((x) =>
        x.split(" ").map((x) => (/^\d+$/.test(x)) ? Number(x) : x)
      );

    const mode_list = {
      init: "init",
      start: "start",
      start_sort: "start_sort",
      sorting: "sorting",
      waiting_mode: "waiting_mode",
    };
    let mode = mode_list.init;
    for (let i = 0; i < str_splited.length; i++) {
      try {
        const load_text_command = str_splited[i]?.[0];
        const load_text_arg1 = str_splited[i]?.[1];
        const load_text_arg2 = str_splited[i]?.[2];
        const load_text_arg3 = str_splited[i]?.[3];
        const load_text_arg4 = str_splited[i]?.[4];

        let id, SPD, buff, LoadFactor, LoadFactor_list, to, from;

        switch (mode) {
          case mode_list.init:
            switch (load_text_command) {
              case "set":
                id = load_text_arg1.toString();
                SPD = load_text_arg2;
                buff = load_text_arg3 || 0;
                chara_list[id] = new chara(id, SPD, buff);
                TL.setChara(id, chara_list[id].initOrderValue());
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
            switch (load_text_command) {
              case "buffset":
              case "b":
                id = load_text_arg1.toString();
                buff = load_text_arg2 || 0;
                chara_list[id].SPD_buff = buff;
                break;

              case "buffadd":
              case "b+":
                id = load_text_arg1.toString();
                buff = load_text_arg2 || 0;
                chara_list[id].SPD_buff += buff;
                break;

              case "buffminus":
              case "b-":
                id = load_text_arg1.toString();
                buff = load_text_arg2 || 0;
                chara_list[id].SPD_buff -= buff;
                break;

              case "add":
              case "a":
                id = load_text_arg1.toString();
                SPD = load_text_arg2;
                buff = load_text_arg3 || 0;
                chara_list[id] = new chara(id, SPD, buff);
                TL.addChara(id, chara_list[id].initOrderValue());
                break;

              case "move":
              case "m":
                LoadFactor = load_text_arg1;
                id = load_text_arg2.toString();
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
                id = load_text_arg1.toString();
                LoadFactor = load_text_arg2;
                const canMoveWithout1stChara_act = load_text_arg3 === "true";
                TL.move(
                  chara_list[TL.ID_of_firstChara()].calculateOrderValue(
                    LoadFactor
                  ),
                  id,
                  canMoveWithout1stChara_act
                );
                break;
              case "switch":
              case "sw":
                to = load_text_arg1.toString();
                from = load_text_arg2.toString();
                SPD = load_text_arg3;
                buff = load_text_arg4 || 0;
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

              case "end":
                mode = mode_list.waiting_mode;
                break;

              case "":
                break;

              default:
                throw Error("no command found");
            }
            break;
          case mode_list.start_sort:
            switch (load_text_command) {
              case "move_list":
              case "mv_ls":
                id = load_text_arg1.toString();
                // debugger
                console.log(load_text_arg2);
                LoadFactor_list = [
                  ...load_text_arg2
                    .replaceAll(/^\[|\]$/g, "")
                    .matchAll(/\d+|\[[^,]+,\d+\]/g),
                ]
                  // alert(LoadFactor_list);
                  .map((x) => {
                    const tmp = x[0];
                    if (/^\d+$/.test(tmp)) {
                      return Number(tmp);
                    } else {
                      // console.log(x[0].split(","));
                      return tmp
                        .replaceAll(/^\[|\]$/g, "")
                        .split(",")
                        .map((x) => (/^\d+$/.test(x) ? Number(x) : x));
                    }
                  });
                // alert(LoadFactor_list);
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
                  output[key] = chara_move_list[key]
                }
              })
              if (Object.keys(output).length !== 0) {
                info.insertAdjacentText(
                  "beforeend",
                  "ⓘinfo :move_listに使われていないスキルがあります:" +
                    JSON.stringify(output)
                );

                // chara_move_list = {};
              }
              break;
            }

            //LoadFactor
            const input = chara_move_list[id].shift();
            // console.log(chara_move_list[id]);
            // console.log(input);

            if (/^\d+$/.test(input)) {
              const LoadFactor = input;
              // console.log(LoadFactor);
              TL.move(
                chara_list[id].calculateOrderValue(LoadFactor),
                id,
                false
              );
            } else {
              // const convertedJSONed_input = input.replaceAll('"','""').replace("[",'["').replace(",",'",')

              const [switchedName, SPD, buff] = input;
              // .replaceAll(/^\[|\]$/g, "")
              // .split(",")

              TL.switchChara(id, switchedName);
              chara_list[switchedName] = new chara(
                switchedName,
                SPD,
                buff || 0
              );

              chara_move_list[switchedName] = chara_move_list[id];
              chara_move_list[id] = [];
              // console.log(chara_move_list[switchedName],chara_move_list[id]);
            }
          }
        }
      } catch (e) {
        console.error(i + 1 + "行目にエラー", e);

        err.innerText =
          i + 1 + "行目にエラー(" + str_splited[i].join(" ") + ")";
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
    // console.log(TL.switchData);
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
    document.getElementById("firstchara").innerText = TL.ID_of_firstChara();
    document.getElementById("now_place").innerText =
      TL.place_of_currentTimeline + 1;

    tableData = [outputTL, chara_array];
    outputAsTable(outputTL, chara_array);
    // console.log(TL.switchData);
  }

  function outputAsTable(json, charalist) {
    let output = "";
    output += "<thead><tr>";

    output += htmltag("th", "");

    for (let i = 0; i < json[0].length; i++) {
      output += htmltag("th", i + 1);
    }

    for (let x = 0; x < json.length; x++) {
      output += "<tr>";
      output += htmltag("td", charalist[x]);
      for (let y = 0; y < json[0].length; y++) {
        output += htmltag("td", json[x][y] || "");
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

  function copyDataAsURL(){
    textCopy(url.href)
    const copyed = document.getElementById("copyed");
    copyed.style.display = "block"
    setTimeout(()=>{copyed.style.display = "none"},1000)
  }
})();
