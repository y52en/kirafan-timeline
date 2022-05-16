import { editor_mode, type_editor_init } from "../../types";
import { init as editor_init } from "./editor";
import { init as ui_init } from "./ui";

class wrapper {
  constructor(private _editor_init: type_editor_init) {
    this._editor_init = _editor_init;
  }

  switch_editor(_editor_mode: editor_mode) {
    this._editor_init.switch_editor(_editor_mode);
  }
}

export function init(
  input_callback: (text: string, editor_fn: type_editor_init) => void
): wrapper {
  console.log('"stop" :>> ', "stop");
  let _str = "";
  ui_init(() => _str);
  const tmp = editor_init((str: string, editor_fn: type_editor_init) => {
    _str = str;
    input_callback(str, editor_fn);
  });

  return new wrapper(tmp);
}
