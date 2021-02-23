"use strict";

(()=>{



function objectCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

class timeline {
  constructor() {
    this.current = new Array();
    this.output = new Array();

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
      if (calculated_moved_OrderValue >= this.current[i].timeline_OrderValue) {
        place_to_moved = i;
        break;
      }
    }
    // splice 0 elm 1 elm 2
    // iter      0     1
    if (place_to_moved === -1) {
      this.current.splice(this.place_of_currentTimeline + 1, 0, tmp_movechara);
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
    this.current.splice(place_to_moved(), 0, this.current[movechara_nowPlace]);
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
    for (let i = this.place_of_currentTimeline; i < this.current.length; i++) {
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
    let OrderValueRadix = Math.min(Math.max(124 - Math.floor(SPD / 2), 0), 100);
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
  document.getElementById("input_txt").oninput = main;
  document.getElementById("csvDownload").onclick = outputAsCSV;
  main();
};


let tableData = []

function main() {
  let str = document.getElementById("input_txt").value;
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
  err.innerHTML = "";

  // debugger

  // 長い[]は[\s&&[^\n]]と同じ(jsではその記法が使えなかった)

  //全角スペース => 半角
  str = str.replaceAll("　"," ")

  //delete space(半角)
  .replaceAll(/^( )+/gm, "")
  
  //delete comment
  .replaceAll(/#.*$/gm, "")

  //trim space
  .replaceAll(/[\f\r\t\v\u00A0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]{2,}/gm, " ");



  let str_splited = str
    .split("\n")
    .map((x) =>
      x.split(" ").map((x) => (isNaN(parseInt(x)) ? x : parseInt(x)))
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

            case "switchSupport":
            case "swS":
              to = load_text_arg1.toString();
              from = load_text_arg2.toString();
              SPD = load_text_arg3;
              buff = load_text_arg4 || 0;
              TL.switchSupportChara(to, from);
              chara_list[from] = new chara(from, SPD, buff);

              break;
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

              LoadFactor_list = JSON.parse(load_text_arg2);
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
            chara_move_list = {};
            break;
          }

          LoadFactor = chara_move_list[id].splice(0, 1);
          TL.move(chara_list[id].calculateOrderValue(LoadFactor), id, false);
        }
      }
    } catch (e) {
      console.error(i + 1 + "行目にエラー", e);
      err.innerHTML =
        i + 1 + "行目にエラー(" + str_splited[i].join(" ") + ")<br>" + e;
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
  document.getElementById("firstchara").innerHTML = TL.ID_of_firstChara();
  document.getElementById("now_place").innerHTML =
    TL.place_of_currentTimeline + 1;

  tableData = [outputTL, chara_array]
  outputAsTable(outputTL, chara_array);
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

function outputAsCSV(){
  const [json, charalist] = tableData;
  let output = "";

  for (let i = 0; i < json[0].length; i++) {
    output += "," + (i + 1);
  }
  output += "\n"

  for (let x = 0; x < json.length; x++) {
    output += charalist[x];
    for (let y = 0; y < json[0].length; y++) {
      output += ","
      output +=  json[x][y] || "";
    }
    output += "\n"
  }
  makeCSVfile_download(output);
}

function makeCSVfile_download(csv,fileName = "timeline.csv"){
    let bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    let blob = new Blob([bom, csv], { type: "text/csv" });
    let imgUrl = URL.createObjectURL(blob);

    let link = document.createElement("a");
    link.href = imgUrl;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(imgUrl);
}


})()
