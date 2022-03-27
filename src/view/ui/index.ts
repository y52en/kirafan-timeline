import lib, { htmltag, OperateURL } from "../../lib";
import {
  lexicallyAnalyzed,
  lexicallyAnalyzeStr,
  obj_update_data,
  type_convertedTLdata,
  type_count_ttk_ls,
  type_tableData_json,
  type_tl_comment,
} from "../../types";

export function init(
  getVal: () => string,
  json: type_tableData_json,
  charalist: string[],
  convertedTLdata: type_convertedTLdata,
  comment: type_tl_comment,
  now_place: number,
  firstchara: string
): (data: obj_update_data) => void {
  const elm_copyTL = document.getElementById("copyTL");
  const elm_jumpTwitter = document.getElementById("jumpTwitter");
  const elm_unzipMoveList = document.getElementById("unzipMoveList");
  const elm_csvDownload = document.getElementById("csvDownload");
  const elm_copy_ConvertedTL = document.getElementById("copy_ConvertedTL");

  const elm_pop11 = document.getElementById("pop11") as HTMLInputElement | null;

  const elm_Set_onbeforeunload = document.getElementById(
    "isSet_onbeforeunload"
  ) as HTMLInputElement | null;

  writeReadMe();

  if (
    !(
      elm_copyTL &&
      elm_jumpTwitter &&
      elm_unzipMoveList &&
      elm_Set_onbeforeunload &&
      elm_pop11 &&
      elm_csvDownload &&
      elm_copy_ConvertedTL
    )
  ) {
    throw lib.undefinedErr;
  }

  (() => {
    setInterval(() => {
      save();
    }, 1000 * 60 * 5);
  })();

  window.onbeforeunload = function (e) {
    save();

    if (getVal().length !== 0 && elm_Set_onbeforeunload.checked) {
      e.preventDefault();
      e.returnValue = "ページから離れますか？";
    }
  };

  elm_jumpTwitter.onclick = () => {
    window.open(
      "https://twitter.com/Y52en/status/1402239605978517505?s=20",
      "_blank"
    );
  };
  elm_unzipMoveList.onclick = () => {
    elm_pop11.checked = true;
  };

  const _url = new OperateURL(undefined, false);
  const update_data = (data: obj_update_data) => {
    let TL_input, count_ttk_ls, ttk;
    ({
      json,
      charalist,
      comment,
      convertedTLdata,
      now_place,
      TL_input,
      firstchara,
      count_ttk_ls,
      ttk,
    } = data);
    _url.setParam("TL", TL_input);
    outputAsTable(json, charalist, comment, now_place);
    printConvertedTL(convertedTLdata);
    show_ttk(count_ttk_ls, ttk);
    updateInfo(now_place, firstchara);
  };

  elm_copyTL.onclick = () => copyDataAsURL(_url.href);

  elm_csvDownload.onclick = () => outputAsCSV(json, charalist);
  printConvertedTL(convertedTLdata);
  elm_copy_ConvertedTL.onclick = () => copyConvertedTL(convertedTLdata);
  outputAsTable(json, charalist, comment, now_place);
  updateInfo(now_place, firstchara);

  return update_data;
}

function updateInfo(now_place: number, firstchara: string) {
  const elm_firstchara = document.getElementById("firstchara");
  if (elm_firstchara) elm_firstchara.innerText = firstchara;
  const elm_now_place = document.getElementById("now_place");
  if (elm_now_place) elm_now_place.innerText = String(now_place);
}

function save() {
  const nowUrlTlParam = new OperateURL(location.href).getParam("TL");
  const url = new OperateURL(location.href);
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

function show_ttk(count_ttk_ls: type_count_ttk_ls, ttk: number) {
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
  json: type_tableData_json,
  charalist: string[],
  comment: type_tl_comment,
  now_place: number
) {
  const output = lib.htmltag("thead");
  const inner_tr = lib.htmltag("tr");

  if (json[0]?.length == undefined) {
    return;
  }
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

function outputAsCSV(json: type_tableData_json, charalist: string[]) {
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

function copyDataAsURL(url: string) {
  lib.textCopy(url);
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

function printConvertedTL(convertedTLdata: type_convertedTLdata) {
  const popup_elm = document.getElementById("popup");
  if (popup_elm) {
    popup_elm.innerText = joinedTLdata(convertedTLdata);
  } else {
    throw lib.undefinedErr;
  }
}

function copyConvertedTL(convertedTLdata: type_convertedTLdata) {
  lib.textCopy(joinedTLdata(convertedTLdata));
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

function joinedTLdata(convertedTLdata: type_convertedTLdata): string {
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

function writeReadMe(): void {
  const readme_elm = document.getElementById("readme");
  if (!readme_elm) {
    throw lib.undefinedErr;
  }

  type readme = {
    title: string | string[];
    text: string[];
    html?: string;
  }[];

  const readme_text: readme = [
    {
      title: "#[comment]",
      text: [
        "#から始まるものは行末まで無視されます(コメントに使用)",
        "命令の最後に書いてもよい",
        "ショートカットは「Ctrl + /」",
        "例:",
        "move 125 enemy",
        "#ここからデバフを入れる",
        "例:",
        "move 125 momo #とっておき",
      ],
    },
    {
      title: "set [name] [SPD] ([buff(%)])",
      text: [
        "開始(start)前にフィールドに出すキャラを設定",
        "SPDの優先度の高いキャラから先に書く",
        "nameにスペースを含めるのは禁止",
      ],
    },
    {
      title: "start",
      text: ["メインモード切り替え", "setを書き終わったら記入"],
    },
    {
      title: "end",
      text: [
        "メインモードモード終了",
        "その後ろにstart、start_sortを書くことでまた別のモードに切り替えられる",
      ],
    },
    {
      title: "move [硬直(%)] [name]",
      text: [
        "行動",
        "先頭のキャラ以外をnameに記入した場合errorを吐く",
        "moveの代わりにmでも可",
      ],
    },
    {
      title: "action [name] [硬直(%)]",
      text: [
        "行動",
        "moveと引数の順番が異なる以外同じ",
        "actionの代わりにacでも可",
      ],
    },
    {
      title:
        "move_list [name] [[硬直(%)],[交代後のname,SPD,(buff)],[硬直(%)],{command,argments1,argments2...}...]",
      text: [
        "行動リスト",
        "move_list nagi [40,{buffset,nagi,24},100,[ren,141,100],100]",
        "のように書く",
        "スペースを空けるのは厳禁",
        "内側にある[]は途中で交代することを示す",
        "{}でコマンドを使用可能",
        "<>で硬直値を直接入力可能",
        "move_listの代わりにmv_lsでも可",
      ],
    },
    {
      title:
        "----ここからほとんどデバッグしていないので正しく動かない可能性大----",
      text: [],
    },
    {
      title: [
        "buffset [name] [buff(%)] ([turn])",
        "buffadd [name] [buff(%)] ([turn])",
        "buffminus [name] [buff(%)] ([turn])",
      ],
      text: ["バフ設定", "それぞれ b,b+,b-と省略可"],
    },
    {
      title: "switch [from_name] [to_name] [SPD] ([buff])",
      text: [
        "from_nameに交代前のキャラ名、to_nameに交代後のキャラ名を記入",
        "swと省略可",
      ],
    },
    {
      title: "order [name] [name] [SPD]",
      text: ["硬直地直接入力"],
    },
    {
      title: "skillcard [name] [SPD] [硬直] [回数]",
      text: ["スキルカード"],
    },
    {
      title: "color [色]",
      text: [
        "r red",
        "g green",
        "b blue",
        "p purple",
        "s silver",
        "y yellow",
        "o orange",
        "c copper",
        "d dark",
      ],
    },
    {
      title: ["ttk[name][name][name] ...", "ttk_until[n行目]"],
      text: [
        "とっておきカウント",
        "ttkは引数にプレイヤーのキャラ、スキルカードの名前を書きます",
        "ttk_untilは引数に何行目までカウントしたいか書きます",
        "",
        "使用しているテーブル(以下にないものは0として計算)",
        "スキル",
      ],
      html: `<table class="normal-table"><thead><th>硬直</th><th>チャージ</th></thead><tbody><tr><td>0</td><td>5</td></tr><tr><td>10</td><td>0</td></tr><tr><td>35</td><td>17</td></tr><tr><td>40</td><td>8</td></tr><tr><td>45</td><td>2</td></tr><tr><td>50</td><td>5</td></tr><tr><td>55</td><td>8</td></tr><tr><td>60</td><td>8</td></tr><tr><td>65</td><td>8</td></tr><tr><td>67.5</td><td>17</td></tr><tr><td>70</td><td>17</td></tr><tr><td>75</td><td>17</td></tr><tr><td>80</td><td>5</td></tr><tr><td>100</td><td>17</td></tr><tr><td>110</td><td>22</td></tr><tr><td>120</td><td>8</td></tr><tr><td>125</td><td>0</td></tr><tr><td>130</td><td>10</td></tr><tr><td>135</td><td>17</td></tr><tr><td>140</td><td>8</td></tr><tr><td>145</td><td>8</td></tr><tr><td>150</td><td>17</td></tr><tr><td>155</td><td>8</td></tr><tr><td>165</td><td>10</td></tr><tr><td>170</td><td>17</td></tr><tr><td>190</td><td>17</td></tr><tr><td>200</td><td>17</td></tr></tbody></table>
         <br />
         スキルカード<br />
        <table class="normal-table"><thead><th>硬直</th><th>チャージ</th></thead><tbody><tr><td>75</td><td>5</td></tr><tr><td>80</td><td>22</td></tr><tr><td>100</td><td>22</td></tr></tbody></table>
      `,
    },
    {
      title: "#python#",
      text: [
        "一番最初に#python#を入れるとpythonとして入力できます",
        "各コマンドは関数になっているのでそれを呼び出すと反映されます",
        "交代はそのままlistで書き、硬直値入力はm.order,コマンド入力はm.commandです",
        "注意点として、m.commandの第一引数はfunctionを渡します",
        "",
        "一部のコマンドの略称が変わります",
        "bs = buffset",
        "bp = buffadd",
        "bm = buffminus",
        "",
        "色を付ける場合、色-数字としてください",
        "b-40",
        "m.order(b-40)",
      ],
      html: `<textarea cols="30" rows="10">
#python#
set("syaro",144)
set("media",124)

mv_ls(syaro,[m.command(bp,syaro,-200),10,99,m.order(10.66)])
mv_ls(media,[d-80,80,69,m.order(c-14.5),["I",140],60])

    </textarea><br>`,
    },
    {
      title: "ttk_stop",
      text: ["とっておきカウントストップ"],
    },
    {
      title: "nomove",
      text: ["キャラの行動を止める(スキップ)"],
    },
  ];

  /*
  <strong> buffadd [name] [buff(%)] ([turn])</strong><br />
  <strong> buffminus [name] [buff(%)] ([turn])</strong><br />
  バフ設定 <br />
  それぞれ b,b+,b-と省略可 <br />
  <br />
  */

  const write_html = htmltag("span");
  readme_text.forEach((x) => {
    let _title: string[];
    if (typeof x.title === "string") {
      _title = [x.title];
    } else {
      _title = x.title;
    }

    _title.forEach((title) => {
      write_html.appendChild(htmltag("strong", title));
      write_html.appendChild(htmltag("br"));
    });
    x.text.forEach((text) => {
      write_html.appendChild(htmltag("span", text));
      write_html.appendChild(htmltag("br"));
    });
    if (x.html) {
      const tmp = htmltag("span");
      tmp.innerHTML = x.html;
      write_html.appendChild(tmp);
    }
    write_html.appendChild(htmltag("br"));
  });
  readme_elm.innerHTML = "";
  readme_elm.appendChild(write_html);
}

export function show_error(
  timeline_parsed: lexicallyAnalyzed[],
  index: number,
  TL_str: string,
  errMsg = ""
):never {
  const now_val = timeline_parsed[index];
  // this.timeline_parsed[this.i_loading];
  const output_err_where = lib.htmltag("span");
  output_err_where.appendChild(
    lib.htmltag("span", "→→" + now_val.value + "←←", "errMsg")
  );
  // ....... \n
  if (now_val.type !== lexicallyAnalyzeStr.new_line) {
    let end = now_val.addtional_info.where[1];
    for (let i = index + 1; i < timeline_parsed.length; i++) {
      if (timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
        end = timeline_parsed[i].addtional_info.where[0];
        break;
      }
    }
    output_err_where.insertAdjacentText(
      "beforeend",
      TL_str.substring(now_val.addtional_info.where[1], end)
    );
  }

  let start = now_val.addtional_info.where[0];
  for (let i = index - 1; i >= 0; i--) {
    if (timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
      start = timeline_parsed[i].addtional_info.where[1];
      break;
    }
  }
  output_err_where.insertAdjacentText(
    "afterbegin",
    TL_str.substring(start, now_val.addtional_info.where[0])
  );

  if (now_val.type === lexicallyAnalyzeStr.reserved) {
    errMsg = "予約文字です";
  }
  const output = lib.htmltag("span");

  output.insertAdjacentText(
    "beforeend",
    "想定外の値: 「" + JSON.stringify(now_val.value) + "」"
  );
  output.appendChild(lib.htmltag("br"));
  output.appendChild(output_err_where);
  output.appendChild(lib.htmltag("br"));
  output.insertAdjacentText("beforeend", errMsg);

  throw Error(output.outerHTML);
}
