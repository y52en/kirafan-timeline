import {
  editor_mode,
  obj_update_data,
  type_convertedTLdata,
  type_editor_init,
  type_tableData_json,
  type_tl_comment,
} from "../types";
import { init as editor_init } from "./editor";
import { init as ui_init } from "./ui";

class wrapper {
  constructor(
    private _editor_init: type_editor_init,
    private _update_data: (data: obj_update_data) => void
  ) {
    this._editor_init = _editor_init;
    this._update_data = _update_data;
  }

  switch_editor(_editor_mode: editor_mode) {
    this._editor_init.switch_editor(_editor_mode);
  }

  update_data(obj: obj_update_data) {
    this._update_data(obj);
  }
}

export function init(
  input_callback: (
    text: string,
    editor_fn: type_editor_init,
    update_data: (obj: obj_update_data) => void
  ) => void,
  json: type_tableData_json,
  charalist: string[],
  convertedTLdata: type_convertedTLdata,
  comment: type_tl_comment,
  now_place: number,
  firstchara: string
): wrapper {
  const update_data = ui_init(
    () => "",
    json,
    charalist,
    convertedTLdata,
    comment,
    now_place,
    firstchara
  );
  const tmp = editor_init((str: string, editor_fn: type_editor_init) =>
    input_callback(str, editor_fn, update_data)
  );

  return new wrapper(tmp, update_data);
}
