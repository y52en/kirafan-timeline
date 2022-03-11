/* eslint-disable no-constant-condition */
"use strict";

import lib from "./lib";
import {
  AST,
  editor_mode,
  obj_update_data,
  type_editor_init,
} from "./types";
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
      const info = document.getElementById("info");

      const loading_python = document.getElementById("loading_python");
      const executing_python = document.getElementById("executing_python");

      if (str.at(-1) !== "\n") {
        str += "\n";
      }

      if (!err || !info || !loading_python || !executing_python) {
        throw lib.undefinedErr;
      }

      let isPython = false;
      let parsed_tldata: AST[];

      try {
        const parseResult = await textParser(str);
        isPython = parseResult.type === editor_mode.python;

        editor_fn.switch_editor(parseResult.type);
        parsed_tldata = parseResult.AST;
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

      /* timeline process */

      const {
        chara_list,
        count_ttk_ls,
        TL,
        ttk,
        info: info_txt,
        error,
        convertedTLdata,
      } = execTL(parsed_tldata);

      if (error) {
        err.innerHTML = error;
        return;
      }
      if (info_txt) {
        info.innerHTML = info_txt;
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
      });

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
  };
})(window);

