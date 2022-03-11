import lib, { OperateURL } from "../lib";
import { editor_mode, type_convertedTLdata, type_editor_init, type_tableData_json, type_tl_comment } from "../types";
import { init as editor_init } from "./editor";
import { init as ui_init } from "./ui";

class wrapper {
  constructor(
    // private _ui_init: type_editor_init,
    private _editor_init: type_editor_init
  ) {
    this._editor_init = _editor_init;
    // this._ui_init = _ui_init;
  }

  switch_editor(_editor_mode: editor_mode) {
    this._editor_init.switch_editor(_editor_mode);
  }
}

export function init(
  input_callback: (text: string, editor_fn: type_editor_init) => void,
  json: type_tableData_json,
  charalist: string[],
  convertedTLdata: type_convertedTLdata,
  comment: type_tl_comment,
  now_place: number
): wrapper {
  const tmp = editor_init(input_callback);
  ui_init(tmp.get_value, json, charalist, convertedTLdata, comment, now_place);
  return new wrapper(tmp);
}
