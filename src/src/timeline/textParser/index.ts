import defaultParser from "./default";
import pythonParser from "./python";
import { text_parser_result, editor_mode } from "../../types";

export async function textParser(text: string): Promise<text_parser_result> {
  const isPython = Boolean(text.match(/^#python#/));
  const output = {} as text_parser_result;

  if (isPython) {
    throw new Error("現在Pythonモードは対応していません");
    output.AST = await pythonParser(text);
    output.type = editor_mode.python;
  } else {
    output.AST = await defaultParser(text);
    output.type = editor_mode.default;
  }
  return output;
}
