/* eslint-disable no-constant-condition */
"use strict";

import { AST, editor_mode, obj_update_data, type_editor_init } from "../types";
import { textParser } from "./textParser";
import { convertOutput, execTL } from "./timeline";
import { init as view_init } from "./view";

declare global {
  interface Window {
    debug: {
      [s: string | number | symbol]: any;
    };
  }
}

window.debug = {};

// ((window) => {
//   window.onload = main;
// })(window);

export function main(
  onChanged: (arg: obj_update_data) => void,
  update_info: (arg: string) => void,
  update_error: (arg: string) => void
): void {
  view_init(main_);

  async function main_(str: string, editor_fn: type_editor_init) {
    // const err = document.getElementById("error");

    if (str.at(-1) !== "\n") {
      str += "\n";
    }

    let isPython = false;
    let parsed_tldata: AST[];

    let chara_list, count_ttk_ls, TL, ttk, info, error, convertedTLdata;

    try {
      const parseResult = await textParser(str);
      isPython = parseResult.type === editor_mode.python;

      editor_fn.switch_editor(parseResult.type);
      parsed_tldata = parseResult.AST;

      ({ chara_list, count_ttk_ls, TL, ttk, info, error, convertedTLdata } =
        execTL(parsed_tldata, str));
    } catch (e) {
      if (isPython) {
        const tmp = String(e).split("\n");
        // err.innerText = tmp[tmp.length - 2];
        update_error(tmp[tmp.length - 2]);
      } else {
        update_error(String(e));
        // err.innerHTML = String(e);
      }
      update_info("");
      return;
    }

    /* timeline process */
    update_error("");
    update_info("");

    if (error) {
      update_error(error);
      return;
    }

    if (info) {
      update_info(info);
    }

    const { outputTL, chara_array } = convertOutput(chara_list, TL);

    const _update_data = {
      json: outputTL,
      charalist: chara_array,
      convertedTLdata,
      comment: TL.comment,
      now_place: TL.place_of_currentTimeline + 1,
      TL_input: str,
      firstchara: TL.ID_of_firstChara(),
      count_ttk_ls,
      ttk,
      info,
    };
    if (onChanged) onChanged(_update_data);
  }
}
