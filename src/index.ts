/* eslint-disable no-constant-condition */
"use strict";

import lib, { OperateURL } from "./lib";
import { AST, editor_mode, type_convertedTLdata, type_editor_init } from "./types";
import { textParser } from "./textParser";
import { execTL } from "./timeline";
import { init as view_init } from "./view";
import { updateData } from "./view/ui";

declare global {
  interface Window {
    debug: {
      [s: string | number | symbol]: any;
    };
  }
}

window.debug = {};

((window) => {
  const url = new OperateURL(undefined, false);

  window.onload = () => {
    const { switch_editor } = view_init(
      main,
      [],
      [],
      { main: [], set: [] },
      [],
      0
    );

    // let tableData: type_tableData;

    async function main(str: string, editor_fn: type_editor_init) {
      const convertedTLdata: type_convertedTLdata = { main: [], set: [] };

      const err = document.getElementById("error");
      const info = document.getElementById("info");

      const loading_python = document.getElementById("loading_python");
      const executing_python = document.getElementById("executing_python");

      if (str.at(-1) === "\n") {
        str += "\n";
      }
      url.setParam("TL", str);

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
      } = execTL(parsed_tldata);

      if (error) {
        err.innerHTML = error;
        return;
      }
      if (info_txt) {
        info.innerHTML = info_txt;
      }

      const chara_array: string[] = [];
      for (const i in chara_list) {
        chara_array.push(i);
      }

      const outputTL: Array<Array<string | number | undefined>> = Array.from(
        new Array(Object.keys(chara_list).length),
        () => new Array(TL.current.length).fill(undefined)
      );

      TL.current.forEach((i, index) => {
        const chara_id = i.id;
        const OrderValue = i.timeline_OrderValue;
        const charaPlace = chara_array.indexOf(chara_id);

        outputTL[charaPlace][index] = OrderValue;
      });
      TL.switchData.forEach((x) => {
        const [place, from_id, to_id] = x;
        const from_charaPlace = chara_array.indexOf(from_id);
        const to_charaPlace = chara_array.indexOf(to_id);
        let arrow_str = "";
        if (from_charaPlace < to_charaPlace) {
          arrow_str = "↓↓";
        } else {
          arrow_str = "↑↑";
        }

        outputTL[from_charaPlace][place] = arrow_str;
      });

      TL.cardData.forEach((x) => {
        const charaPlace = chara_array.indexOf(x[1]);
        outputTL[charaPlace][x[0]] = "→";
      });
      const now_place = TL.place_of_currentTimeline + 1;

      const elm_firstchara = document.getElementById("firstchara");
      if (elm_firstchara) elm_firstchara.innerText = TL.ID_of_firstChara();

      const elm_now_place = document.getElementById("now_place");
      if (elm_now_place) elm_now_place.innerText = String(now_place);

      updateData(outputTL, chara_array, convertedTLdata, TL.comment, now_place);

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
