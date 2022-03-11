import lib, { OperateURL } from "../../lib";
import {
  obj_update_data,
  type_convertedTLdata,
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
    let TL_input;
    ({
      json,
      charalist,
      comment,
      convertedTLdata,
      now_place,
      TL_input,
      firstchara,
    } = data);
    _url.setParam("TL", TL_input);
    outputAsTable(json, charalist, comment, now_place);
    printConvertedTL(convertedTLdata);

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
