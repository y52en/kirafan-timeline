import CodeMirror from "codemirror";
import "codemirror/addon/mode/simple";
import "codemirror/addon/comment/comment";
import "codemirror/addon/hint/show-hint";
import "codemirror/mode/python/python";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/edit/closebrackets";
import "../../css/panda-syntax.css";

import lib, { OperateURL } from "../../lib";
import { commandStr2Enum, editor_mode, type_editor_init } from "../../types";

export function init(
  input_callback: (str: string, editor_fn: type_editor_init) => void
): type_editor_init {
  const elm_editor = document.getElementById("editor");

  if (!elm_editor) {
    throw lib.undefinedErr;
  }

  const enum state {
    start = "start",
    move_list = "move_list",
    move_list_arg2 = "move_list_arg2",
    mvls_switch = "mvls_switch",
    mvls_command = "mvls_command",
    mvls_order = "mvls_order",
    arg = "arg",
    comment = "comment",
  }

  const enum token {
    keyword = "keyword",
    comment = "comment",
    none = "",
    operator = "operator",
    age = "age",
    unit = "unit",
    string_3 = "string-3",
    arg = "arg",
  }

  CodeMirror.defineSimpleMode(editor_mode.default, {
    [state.start]: [
      {
        regex: /(mv_ls|move_list)[ \u3000]+/,
        token: token.keyword,
        next: state.move_list,
      },

      // string and byte string
      { regex: /[a-zA-Z_]+$/, token: token.keyword },
      { regex: /[a-zA-Z_]+/, token: token.keyword, next: state.arg },
      { regex: /\s+/ },
      { regex: /#.*$/, token: token.comment },
    ],
    [state.move_list]: [
      {
        regex: /(?:([^[\s]+)(\s*)(\[))/,
        next: state.move_list_arg2,
        token: [token.operator, token.none, token.age],
      },
    ],
    [state.move_list_arg2]: [
      { regex: /\s+/ },

      { regex: /\]/, token: token.unit, next: state.start },
      {
        regex: /(\[)(\s*)([^\]\s*,]+)/,
        token: [token.unit, token.none, token.string_3],
        next: state.mvls_switch,
      },
      {
        regex: /(\{)(\s*)([^}\s*,]+)/,
        token: [token.unit, token.none, token.keyword],
        next: state.mvls_command,
      },
      {
        regex: /(<)(\s*)([^>\s*,]+)/,
        token: [token.unit, token.none, token.string_3],
        next: state.mvls_order,
      },
    ],
    [state.mvls_switch]: [
      { regex: /\s+/ },
      {
        regex: /,/,
      },
      { regex: /\]/, token: token.unit, next: state.move_list_arg2 },

      {
        regex: /[^\s\],]+/,
        token: token.string_3,
      },
    ],
    [state.mvls_command]: [
      { regex: /\s+/ },
      {
        regex: /,/,
      },
      { regex: /\}/, token: token.unit, next: state.move_list_arg2 },

      {
        regex: /[^\s},]+/,
        token: token.string_3,
      },
    ],
    [state.mvls_order]: [
      { regex: /\s+/ },
      {
        regex: /,/,
      },
      { regex: />/, token: token.unit, next: state.move_list_arg2 },

      {
        regex: /[^\s>,]+/,
        token: token.string_3,
      },
    ],
    [state.arg]: [
      { regex: /[^#]*$/, token: token.arg, next: state.start },
      { regex: /[^#]*/, token: token.arg, next: state.start },

      { regex: /#.*$/, token: token.comment },
    ],
    [state.comment]: [
      { regex: /.*?$/, token: token.comment, next: state.start },
    ],
    meta: {
      dontIndentStates: [state.comment],
      lineComment: "#",
      fold: "brace",
    },
  });

  const url = new OperateURL(location.href);
  const TLparam = url.getParam("TL");
  let str = "";
  if (typeof TLparam !== null) {
    str = TLparam;
  }

  let cm = CodeMirror(elm_editor, {
    mode: editor_mode.default,
    lineNumbers: true,
    indentUnit: 4,
    theme: "panda-syntax",
    lineWrapping: true,
    tabSize: 2,
    value: str,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    hintOptions: { hint: synonyms as CodeMirror.HintFunction },
  });

  cm.on("keydown", (cm, e) => {
    if (e.key === "/" && e.ctrlKey) {
      cm.toggleComment({ lineComment: "#" });
    }
    const bracket = [
      ["[", "]"],
      ["{", "}"],
      ["<", ">"],
    ];

    bracket.forEach(([open, close]) => {
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return;
      }

      if (e.key === open) {
        insertString(cm, close);
        moveCursor(cm, -1);
      }

      if (e.key === close && getPosition(cm) === close) {
        if (lib.isAndroid()) return;
        moveCursor(cm, 1);
        e.preventDefault();
      }
      if (
        e.key === "Backspace" &&
        getPosition(cm, -1) === open &&
        getPosition(cm, 1) === close
      ) {
        rmBracketLR(cm);
        e.preventDefault();
      }
    });

    if (!lib.isPC()) return;
    if (e.key.match(/^\w$/)) {
      cm.showHint();
    }
  });

  const output = {
    switch_editor: (lang: editor_mode) => {
      cm = switch_editor(cm, lang);
    },
    get_value: () => cm.getValue(),
  };

  const render = () => {
    input_callback(cm.getValue(), output);
  };

  cm.on("change", () => {
    render();
  });

  // enable scrollbar
  cm.scrollTo(3, 3);

  render();

  return output;
}

function switch_editor(
  cm: CodeMirror.Editor,
  lang: editor_mode
): CodeMirror.Editor {
  if (cm.getOption("mode") !== lang) {
    cm.setOption("mode", lang);
  }
  return cm;
}

function getPosition(pos: CodeMirror.Editor, to = 1): string {
  const { line, ch } = pos.getCursor();
  const lineText = pos.getLine(line);
  return lineText.substring(ch, ch + to);
}
function moveCursor(pos: CodeMirror.Editor, moveto: number): void {
  const { line, ch } = pos.getCursor();
  pos.setCursor({ line, ch: ch + moveto });
}
function insertString(pos: CodeMirror.Editor, str: string) {
  const cursor = pos.getCursor();
  pos.replaceRange(str, cursor);
}
function rmBracketLR(pos: CodeMirror.Editor) {
  const { line, ch } = pos.getCursor();
  pos.replaceRange("", { line, ch: ch - 1 }, { line, ch: ch + 1 });
}

function synonyms(cm: CodeMirror.Editor): Promise<CodeMirror.Hints | void> {
  const command_name = Object.keys(commandStr2Enum);

  return new Promise(function (resolve) {
    setTimeout(function () {
      const cursor = cm.getCursor(),
        line = cm.getLine(cursor.line);
      let start = cursor.ch,
        end = cursor.ch;
      while (start && /[^\s,{}[\]<>]/.test(line.charAt(start - 1))) --start;
      while (end < line.length && /[^\s,{}[\]<>]/.test(line.charAt(end))) ++end;
      const word = line.slice(start, end).toLowerCase();
      const output: string[] = [];
      command_name.forEach((v) => {
        if (v.startsWith(word)) {
          output.push(v);
        }
      });
      const val = cm
        .getValue()
        .replaceAll(/#([^\n])+/g, "")
        .split("\n")
        .map((v) => v.trim().split(/\s/));

      const charas = val
        .filter((v) => {
          if (v.length < 1) {
            return false;
          }
          return v[0].startsWith("set");
        })
        .map((v) => v[1]);

      val.forEach((v) => {
        if (v.length <= 2) {
          return;
        }
        if (v[0].startsWith("mv_ls") || v[0].startsWith("move_list")) {
          const arg = [
            ...v[2].replaceAll(/\t/g, "").matchAll(/[[,]\[([^,]+)/g),
          ];

          arg.forEach((x) => {
            charas.push(x[1]);
          });
        }
      });

      charas
        .filter((x) => x.startsWith(word) && x !== word)
        .forEach((x) => output.push(x));

      if (output.length > 0) {
        return resolve({
          list: output,
          from: CodeMirror.Pos(cursor.line, start),
          to: CodeMirror.Pos(cursor.line, end),
        } as CodeMirror.Hints);
      }
      return resolve(undefined);
    }, 100);
  });
}
