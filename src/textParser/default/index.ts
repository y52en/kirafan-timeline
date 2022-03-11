import {
  lexicallyAnalyzed,
  lexicallyAnalyzeStr,
  commandStr2Enum,
  AST,
  command,
  move_list,
  mvls_mode,
  AST_mvls,
  AST_command,
} from "../../types";

import lib, { match } from "../../lib";

const TIMES_FAILSAFE = 20;

class parser_lexicallyAnalyze2AST {
  timeline_parsed: lexicallyAnalyzed[];
  i_loading: number;

  constructor(lexically_analyzed: lexicallyAnalyzed[]) {
    this.timeline_parsed = lexically_analyzed;
    this.i_loading = 0;
  }

  get now_val(): lexicallyAnalyzed {
    return this.timeline_parsed[this.i_loading];
  }

  set now_val(_) {
    throw Error("now_valにはセットできません");
  }

  get now_val_type() {
    return this.now_val.type;
  }

  set now_val_type(_) {
    throw Error("now_valにはセットできません");
  }

  Normalize() {
    const output = [];
    let i: number;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const t = this;
    const type = () => this.timeline_parsed[i].type;
    for (i = 0; i < this.timeline_parsed.length; i++) {
      if (type() === lexicallyAnalyzeStr.bracketL) {
        removeMeaninglessNewLine();
      }
      output.push(this.timeline_parsed[i]);
    }
    function removeMeaninglessNewLine() {
      const i_toErrMsg = [i];
      output.push(t.timeline_parsed[i]);
      i++;
      for (; i < t.timeline_parsed.length; i++) {
        if (i + 1 === t.timeline_parsed.length) {
          t.i_loading = i_toErrMsg?.[1] || i_toErrMsg[0];
          t.error_unexpectedToken("]が不足しています");
        }

        if (type() === lexicallyAnalyzeStr.bracketL) {
          i_toErrMsg.push(i);
          removeMeaninglessNewLine();
        } else if (type() === lexicallyAnalyzeStr.new_line) {
          continue;
        } else if (type() === lexicallyAnalyzeStr.bracketR) {
          i_toErrMsg.pop();
          break;
        }
        output.push(t.timeline_parsed[i]);
      }
    }

    for (let i = 0, isBeforeNewLine = true; i < output.length; i++) {
      if (output[i].type === lexicallyAnalyzeStr.new_line) {
        if (isBeforeNewLine) {
          output.splice(i, 1);
          i--;
        }
        isBeforeNewLine = true;
      } else {
        isBeforeNewLine = false;
      }
    }

    // 上で同じことが行える(初期値isBeforeNewLineがtrueのため)
    // for (let i = 0; i < output.length; i++) {
    //   if (this.timeline_parsed[i] === "new_line") {
    //     output.shift()
    //   }else{
    //     break;
    //   }
    // }

    for (let i = output.length - 1; i >= 0; i--) {
      if (output[i].type === lexicallyAnalyzeStr.new_line) {
        output.pop();
      } else {
        break;
      }
    }
    this.timeline_parsed = output;
  }

  parse(): AST[] {
    this.Normalize();
    const output: Array<AST> = [];
    if (this.timeline_parsed.length === 0) {
      return output;
    }
    this.timeline_parsed.push({
      type: lexicallyAnalyzeStr.new_line,
      value: "\n",
    });

    for (
      this.i_loading = 0;
      this.i_loading < this.timeline_parsed.length;
      // skip newline
      this.i_loading++
    ) {
      const data: AST = this.loadStatement();
      output.push(data);

      if (this.now_val_type !== lexicallyAnalyzeStr.new_line) {
        this.error_unexpectedToken(
          "]のあとにコメント以外の文を書くことはできません"
        );
      }
    }
    return output;
  }

  loadStatement(): AST {
    let statementList = [];
    // = [];

    this.checkIsWord();
    const commmand_str = this.now_val.value;

    const commmand = (() => {
      const tmp = commandStr2Enum[commmand_str] as command | undefined;
      if (typeof tmp !== "undefined") {
        return tmp;
      } else {
        throw Error("コマンド名に誤りがあります");
      }
    })();

    this.nextVal();

    const push = () => {
      statementList.push(this.now_val.value);
      this.nextVal();
    };

    if (commmand === command.move_list) {
      this.checkIsWord();
      const arg1 = this.now_val.value;
      this.nextVal();

      if (this.now_val_type !== lexicallyAnalyzeStr.bracketL) {
        this.error_unexpectedToken(
          "move_listの第二引数は [ から始まる必要があります"
        );
      }
      this.nextVal();

      const arg2: move_list[] = [];
      if (this.now_val_type !== lexicallyAnalyzeStr.bracketR) {
        while (true) {
          let list, val: move_list;
          match(this.now_val_type)
            // [
            .case(lexicallyAnalyzeStr.bracketL, () => {
              this.nextVal();
              list = this.getMoveListInList(lexicallyAnalyzeStr.bracketR);
              arg2.push({ mode: mvls_mode.switch, value: list });
            })

            // <
            .case(lexicallyAnalyzeStr.angle_bracketL, () => {
              this.nextVal();
              list = this.getMoveListInList(lexicallyAnalyzeStr.angle_bracketR);
              arg2.push({ mode: mvls_mode.order, value: list });
            })
            // {
            .case(lexicallyAnalyzeStr.braceL, () => {
              this.nextVal();
              list = this.getCommandListInList();
              arg2.push({ mode: mvls_mode.command, value: list });
            })

            .case(lexicallyAnalyzeStr.word, () => {
              val = { mode: mvls_mode.action, value: [] };
              val.value.push(this.now_val.value);
              arg2.push(val);
              this.nextVal();
            })

            .default(() => {
              this.error_unexpectedToken(
                "move_list内のパースエラー　正しい値が入力されているか確認してください"
              );
            });

          if (this.now_val_type === lexicallyAnalyzeStr.asterisk) {
            const before_val = arg2.pop();
            const inputNumIsIllegalError = () => {
              this.error_unexpectedToken(
                "*の後は0以上の整数である必要があります"
              );
            };
            if (!before_val) {
              this.error_unexpectedToken("unreachable code");
              throw Error("unreachable code");
            }
            this.nextVal();
            // @ts-ignore
            if (this.now_val_type === lexicallyAnalyzeStr.word) {
              const times = this.now_val.value;

              if (!lib.isNaturalString(times)) {
                inputNumIsIllegalError();
              }
              const num_times = Number(times);
              if (num_times < 0) {
                inputNumIsIllegalError();
              }

              if (num_times > TIMES_FAILSAFE) {
                this.error_unexpectedToken(
                  `エラー : ${TIMES_FAILSAFE}回を超える繰り返しはできません(極端な値が入力され重くなることを防ぐため)`
                );
              }
              for (let i = 0; i < num_times; i++) {
                const tmp = lib.objectCopy(before_val) as move_list;
                arg2.push(tmp);
              }
              this.nextVal();
            } else {
              inputNumIsIllegalError();
            }
          }

          // @ts-ignore
          if (this.now_val_type === lexicallyAnalyzeStr.bracketR) {
            break;
          } else if (this.now_val_type === lexicallyAnalyzeStr.commma) {
            this.nextVal();
          } else {
            this.error_unexpectedToken(
              "コンマかmove_list終了の]が不足しています"
            );
          }
        }
      }
      statementList = [commmand, arg1, arg2] as AST_mvls;
      this.nextVal();
    } else {
      statementList = [commmand] as AST_command;
      while (true) {
        if (this.now_val_type === lexicallyAnalyzeStr.word) {
          push();
        } else if (this.now_val_type === lexicallyAnalyzeStr.new_line) {
          break;
        } else {
          this.error_unexpectedToken("この文字は入力できません");
        }
      }
    }

    return statementList;
  }

  isLastValue(): boolean {
    return this.i_loading + 1 >= this.timeline_parsed.length;
  }

  getCommandListInList(): AST_command {
    const endType = lexicallyAnalyzeStr.braceR;
    const output: (string | command)[] = [];

    let i = 0;
    loop: while (true) {
      match(this.now_val_type)
        .case(lexicallyAnalyzeStr.word, () => {
          if (i === 0) {
            const command_num = commandStr2Enum[this.now_val.value] as
              | command
              | undefined;
            if (command_num) {
              output.push(command_num);
            } else {
              this.error_unexpectedToken("コマンド名に誤りがあります");
            }
          } else {
            output.push(this.now_val.value);
          }
          this.nextVal();
        })

        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じられていないか引数が不正です"
          );
        });

      let is_end = false;
      match(this.now_val_type)
        .case(endType, () => {
          this.nextVal();
          is_end = true;
        })
        .case(lexicallyAnalyzeStr.commma, () => {
          this.nextVal();
        })
        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています"
          );
        });

      if (is_end) {
        break loop;
      }

      i++;
    }
    return output as AST_command;
  }

  getMoveListInList(endType: lexicallyAnalyzeStr): string[] {
    const output: string[] = [];
    if (this.now_val_type === endType) {
      return output;
    }

    loop: while (true) {
      match(this.now_val_type)
        .case(lexicallyAnalyzeStr.word, () => {
          output.push(this.now_val.value);
          this.nextVal();
        })
        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じられていないか引数が不正です"
          );
        });

      let is_end = false;
      match(this.now_val_type)
        .case(endType, () => {
          this.nextVal();
          is_end = true;
        })

        .case(lexicallyAnalyzeStr.commma, () => {
          this.nextVal();
        })

        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています"
          );
        });

      if (is_end) {
        break loop;
      }
    }
    return output;
  }

  nextVal() {
    if (this.isLastValue()) {
      this.error_unexpectedToken(
        "内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"
      );
    }
    this.i_loading++;
  }

  nextVal_noerror() {
    if (!this.isLastValue()) {
      this.i_loading++;
    }
  }

  checkIsWord() {
    if (this.now_val_type !== lexicallyAnalyzeStr.word) {
      this.error_unexpectedToken();
    }
  }

  checkIsCommma() {
    if (this.now_val_type !== lexicallyAnalyzeStr.commma) {
      this.error_unexpectedToken();
    }
  }

  error_unexpectedToken(errMsg = "") {
    const output_err_where = lib.htmltag("span");
    output_err_where.appendChild(
      lib.htmltag("span", "→→" + this.now_val.value + "←←", "errMsg")
    );
    // ....... \n
    if (this.now_val.type !== lexicallyAnalyzeStr.new_line) {
      for (let i = this.i_loading + 1; i < this.timeline_parsed.length; i++) {
        if (this.timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
          break;
        } else {
          output_err_where.insertAdjacentText(
            "beforeend",
            this.timeline_parsed[i].value
          );
        }
      }
    }
    for (let i = this.i_loading - 1; i >= 0; i--) {
      if (this.timeline_parsed[i].type === lexicallyAnalyzeStr.new_line) {
        break;
      } else {
        output_err_where.insertAdjacentText(
          "afterbegin",
          this.timeline_parsed[i].value
        );
      }
    }

    if (this.now_val.type === lexicallyAnalyzeStr.reserved) {
      errMsg = "予約文字です";
    }
    const output = lib.htmltag("span");

    output.insertAdjacentText(
      "beforeend",
      "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"
    );
    output.appendChild(lib.htmltag("br"));
    output.appendChild(output_err_where);
    output.appendChild(lib.htmltag("br"));
    output.insertAdjacentText("beforeend", errMsg);

    throw Error(output.outerHTML);
  }
}

class parser_lexicallyAnalyze {
  timeline_str: string;
  timeline_parsed: lexicallyAnalyzed[];
  _now_str: string;
  i_nowloadstr: number;

  constructor(timeline_str: string) {
    this.timeline_str = timeline_str;
    this.timeline_parsed = [];
    this._now_str = "";
    this.i_nowloadstr = 0;
  }

  parse(): lexicallyAnalyzed[] {
    this.timeline_parsed = this.lexicalAnalysis();
    return this.timeline_parsed;
  }

  lexicalAnalysis(): lexicallyAnalyzed[] {
    let string = this.timeline_str;
    const output: lexicallyAnalyzed[] = [];
    let tmp = "";
    const space = "\u{20}";
    string = string.replaceAll(/\\(\n|$)/g, "");

    const parsed = (type: lexicallyAnalyzeStr, value: string) => ({
      type,
      value,
    });
    loop: for (let i = 0; i < string.length; i++) {
      const char = string[i];

      let val: lexicallyAnalyzed | { value: string } = { value: char };
      const changeType = (type: lexicallyAnalyzeStr) => {
        val = {
          type: type,
          value: val.value,
        };
      };

      let isContinue = false;
      const loop_continue = () => (isContinue = true);
      match(char)
        .case(",", () => {
          changeType(lexicallyAnalyzeStr.commma);
        })
        .case("\n", () => {
          changeType(lexicallyAnalyzeStr.new_line);
        })
        .case([space, "　", "\t"], () => {
          // skip
          push();
          loop_continue();
        })
        .case("#", () => {
          for (; i < string.length; i++) {
            if (string[i] === "\n") {
              i--;
              break;
            }
          }
          loop_continue();
        })
        .case("{", () => {
          changeType(lexicallyAnalyzeStr.braceL);
        })
        .case("}", () => {
          changeType(lexicallyAnalyzeStr.braceR);
        })
        .case("[", () => {
          changeType(lexicallyAnalyzeStr.bracketL);
        })
        .case("]", () => {
          changeType(lexicallyAnalyzeStr.bracketR);
        })
        .case("<", () => {
          changeType(lexicallyAnalyzeStr.angle_bracketL);
        })
        .case(">", () => {
          changeType(lexicallyAnalyzeStr.angle_bracketR);
        })

        .case("*", () => {
          changeType(lexicallyAnalyzeStr.asterisk);
        })

        .case(
          [
            "(",
            ")",
            '"',
            "'",
            "!",
            "$",
            "%",
            "&",
            "=",
            "^",
            "~",
            "?",
            ";",
            "`",
          ],
          () => {
            // not @ _
            changeType(lexicallyAnalyzeStr.reserved);
          }
        )

        .default(() => {
          tmp += char;
          loop_continue();
        });
      if (isContinue) {
        continue loop;
      }

      push();
      if ("type" in val) {
        output.push(val);
      } else {
        throw Error("未到達コード");
      }
    }

    push();

    function push() {
      if (tmp.length > 0) {
        output.push(parsed(lexicallyAnalyzeStr.word, tmp));
        tmp = "";
      }
    }

    return output;
  }
}

export default async function parse(text: string): Promise<AST[]> {
  const tl_parser_lexicallyAnalyze = new parser_lexicallyAnalyze(text);
  const lexicallyAnalyzed = tl_parser_lexicallyAnalyze.parse();
  const tl_parser_AST = new parser_lexicallyAnalyze2AST(lexicallyAnalyzed);
  return tl_parser_AST.parse();
}
