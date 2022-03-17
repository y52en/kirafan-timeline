/* eslint-disable no-constant-condition */
"use strict";

import lib from "./lib";
import { AST, editor_mode, obj_update_data, type_editor_init } from "./types";
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

((window) => {
  window.onload = () => {
    view_init(main, [], [], { main: [], set: [] }, [], 0, "");

    async function main(
      str: string,
      editor_fn: type_editor_init,
      update_data: (obj: obj_update_data) => void
    ) {
      const err = document.getElementById("error");
      const info_elm = document.getElementById("info");

      if (str.at(-1) !== "\n") {
        str += "\n";
      }

      if (!err || !info_elm) {
        throw lib.undefinedErr;
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
          execTL(parsed_tldata,str));
      } catch (e) {
        if (isPython) {
          const tmp = String(e).split("\n");
          err.innerText = tmp[tmp.length - 2];
        } else {
          err.innerHTML = String(e);
        }
        console.error("e :>> ", e);
        info_elm.innerHTML = "";
        return;
        // throw e;
      }

      /* timeline process */

      info_elm.innerHTML = "";
      err.innerHTML = "";

      if (error) {
        err.innerHTML = error;
        return;
      }
      if (info) {
        info_elm.innerHTML = info;
      }

      const { outputTL, chara_array } = convertOutput(chara_list, TL);

      update_data({
        json: outputTL,
        charalist: chara_array,
        convertedTLdata,
        comment: TL.comment,
        now_place: TL.place_of_currentTimeline + 1,
        TL_input: str,
        firstchara: TL.ID_of_firstChara(),
        count_ttk_ls,
        ttk,
      });
    }
  };
})(window);
