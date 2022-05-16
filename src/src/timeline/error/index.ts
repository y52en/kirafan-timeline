import lib, { OperateURL } from "../../lib";
import {
  lexicallyAnalyzed,
  lexicallyAnalyzeStr,
} from "../../types";

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
