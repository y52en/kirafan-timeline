/* eslint-disable no-constant-condition */
"use strict";

import { AST, editor_mode, type_TL_main } from "../types";
import { textParser } from "./textParser";
import { convertOutput, execTL } from "./timeline";
// import { init as view_init } from "./view";

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

export async function main(
  // onChanged: (arg: obj_update_data) => void,
  // update_info: (arg: string) => void,
  // update_error: (arg: string) => void
  TL_input: string
): Promise<type_TL_main> {
  let str = TL_input;
  const output: type_TL_main = {
    output: undefined,
    error: undefined,
    // info: undefined,
  };

  let chara_list, count_ttk_ls, TL, ttk, info, error, convertedTLdata;

  let apply_info: string | undefined;
  const update_info = (_info: string) => {
    apply_info = _info;
  };
  const update_error = (error: string) => {
    output.error = error;
  };

  if (str.at(-1) !== "\n") {
    str += "\n";
  }

  let isPython = false;
  let parsed_tldata: AST[];

  try {
    const parseResult = await textParser(str);
    isPython = parseResult.type === editor_mode.python;

    // editor_fn.switch_editor(parseResult.type);
    parsed_tldata = parseResult.AST;

    ({ chara_list, count_ttk_ls, TL, ttk, info, error, convertedTLdata } =
      execTL(parsed_tldata, str));
  } catch (e) {
    if (isPython) {
      const tmp = String(e).split("\n");
      update_error(tmp[tmp.length - 2]);
    } else {
      update_error(String(e));
    }
    update_info("");
    return output;
  }

  /* timeline process */
  update_error("");
  update_info("");

  if (error) {
    update_error(error);
    return output;
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
    info: apply_info,
  };
  output.output = _update_data;
  return output;
}
