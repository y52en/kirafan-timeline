import {
  lexicallyAnalyzed,
  lexicallyAnalyzeStr,
  commandStr2Enum,
  AST,
  command,
  move_list,
  mvls_mode,
  AST_command,
  command_array,
} from "../../types";

import lib, { match } from "../../lib";
import { show_error } from "../../view/ui";
import { parse as wasm_parse } from "./wasm/kirafan_tl";

const TIMES_FAILSAFE = 20;

class parser_lexicallyAnalyze2AST {
  timeline_parsed: lexicallyAnalyzed[];
  i_loading: number;
  bracket_type: [lexicallyAnalyzeStr, lexicallyAnalyzeStr][] = [
    [lexicallyAnalyzeStr.bracketL, lexicallyAnalyzeStr.bracketR],
    [lexicallyAnalyzeStr.braceL, lexicallyAnalyzeStr.braceR],
    [lexicallyAnalyzeStr.angle_bracketL, lexicallyAnalyzeStr.angle_bracketR],
  ];
  str: string;

  constructor(lexically_analyzed: lexicallyAnalyzed[], str: string) {
    this.timeline_parsed = lexically_analyzed;
    this.str = str;
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
    const timeline_parsed = this.timeline_parsed.filter(
      (x) => x.type !== lexicallyAnalyzeStr.comment
    );
    const type = () => timeline_parsed[i].type;

    for (i = 0; i < timeline_parsed.length; i++) {
      if (type() === lexicallyAnalyzeStr.bracketL) {
        removeMeaninglessNewLine();
      }
      output.push(timeline_parsed[i]);
    }
    function removeMeaninglessNewLine() {
      const i_toErrMsg = [i];
      output.push(timeline_parsed[i]);
      i++;
      for (; i < timeline_parsed.length; i++) {
        if (i + 1 === timeline_parsed.length) {
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
        output.push(timeline_parsed[i]);
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
    const output: AST[] = [];
    if (this.timeline_parsed.length === 0) {
      return output;
    }
    this.timeline_parsed.push({
      type: lexicallyAnalyzeStr.new_line,
      value: "\n",
      addtional_info: {
        where: [
          this.timeline_parsed.at(-1)?.addtional_info["where"][1] ?? 0,
          this.timeline_parsed.at(-1)?.addtional_info["where"][1] ?? 0,
        ],
      },
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
          "文のあとにコメント以外の文を書くことはできません"
        );
      }
    }
    return output;
  }

  loadStatement(): AST {
    let statementList = [];
    const option: { [s: string]: string } = {};
    // = [];

    const start = this.now_val.addtional_info.where[0];

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
          match(this.now_val_type)
            // [
            .case(lexicallyAnalyzeStr.bracketL, () => {
              const start = this.now_val.addtional_info["where"][0];

              this.nextVal();
              const list = this.getMoveListInList(lexicallyAnalyzeStr.bracketR);

              const end = this.now_val.addtional_info["where"][0];
              const addtional_info = {
                where: [start, end] as [number, number],
              };
              arg2.push({
                mode: mvls_mode.switch,
                value: list[0],
                addtional_info,
                option: list[1],
              });
            })

            // <
            .case(lexicallyAnalyzeStr.angle_bracketL, () => {
              const start = this.now_val.addtional_info["where"][0];

              this.nextVal();
              const list = this.getMoveListInList(
                lexicallyAnalyzeStr.angle_bracketR
              );

              const end = this.now_val.addtional_info["where"][0];
              const addtional_info = {
                where: [start, end] as [number, number],
              };
              arg2.push({
                mode: mvls_mode.order,
                value: list[0] as string[],
                addtional_info,
                option: list[1],
              });
            })
            // {
            .case(lexicallyAnalyzeStr.braceL, () => {
              const start = this.now_val.addtional_info["where"][0];

              this.nextVal();
              const list = this.getCommandListInList();
              const end = this.now_val.addtional_info["where"][0];
              const addtional_info = {
                where: [start, end] as [number, number],
              };
              arg2.push({
                mode: mvls_mode.command,
                value: list,
                addtional_info,
              });
            })

            .case(lexicallyAnalyzeStr.word, () => {
              arg2.push({
                mode: mvls_mode.action,
                value: [this.now_val.value],
                addtional_info: {
                  where: [
                    this.now_val.addtional_info["where"][0],
                    this.now_val.addtional_info["where"][1],
                  ] as [number, number],
                },
                option: {},
              });
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
          } else if (this.now_val_type === lexicallyAnalyzeStr.comma) {
            this.nextVal();
          } else {
            this.error_unexpectedToken(
              "コンマかmove_list終了の]が不足しています"
            );
          }
        }
      }
      statementList = [commmand, arg1, arg2] as [
        command.move_list,
        string,
        move_list[]
      ];
      this.nextVal();
    } else {
      statementList = [commmand] as [command, ...string[]];
      while (true) {
        if (this.now_val_type === lexicallyAnalyzeStr.word) {
          this.getValue(
            (val) => {
              statementList.push(val);
            },
            (key, val) => {
              option[key] = val;
            }
          );
        } else if (this.now_val_type === lexicallyAnalyzeStr.new_line) {
          break;
        } else {
          this.error_unexpectedToken("この文字は入力できません");
        }
      }
    }

    return {
      mv_ls: statementList[0] === command.move_list,
      addtional_info: {
        where: [
          start,
          this.timeline_parsed[this.i_loading - 1].addtional_info.where[1],
        ],
      },
      // @ts-ignore
      value: statementList,
      option,
    };
  }

  getValue(
    val_callback: (val: string) => void,
    option_callback: (key: string, val: string) => void
  ) {
    if (this.getNextValue().type === lexicallyAnalyzeStr.equal) {
      const keyName = this.now_val.value;
      this.nextVal();
      this.nextVal();
      if (this.now_val_type !== lexicallyAnalyzeStr.word) {
        this.error_unexpectedToken("=の後に値が入力されていません");
      }
      const value = this.now_val.value;
      option_callback(keyName, value);
    } else {
      val_callback(this.now_val.value);
    }
    this.nextVal();
  }

  isLastValue(): boolean {
    return this.i_loading + 1 >= this.timeline_parsed.length;
  }

  getNextValue(): lexicallyAnalyzed {
    return this.timeline_parsed[this.i_loading + 1];
  }

  getCommandListInList(): AST_command {
    const endType = lexicallyAnalyzeStr.braceR;
    // @ts-ignore
    const output: Omit<AST_command, "value"> = {
      option: {},
      mv_ls: false,
    };
    // @ts-ignore
    let value: [Exclude<command, command.move_list>, ...string[]] = [];

    let i = 0;
    loop: while (true) {
      match(this.now_val_type)
        .case(lexicallyAnalyzeStr.word, () => {
          if (i === 0) {
            const command_num = commandStr2Enum[this.now_val.value] as
              | command
              | undefined;
            if (command_num && command_num !== command.move_list) {
              value = [command_num];
            } else {
              this.error_unexpectedToken("コマンド名に誤りがあります");
            }

            this.nextVal();
          } else {
            // if (this.getNextValue().type === lexicallyAnalyzeStr.colon) {
            //   if (output[0] !== command.ttkttk) {
            //     throw Error("とっておきコマンド内にのみ:を使えます");
            //   }
            //   const tmp = this.now_val.value;
            //   this.nextVal();
            //   this.nextVal();
            //   if (this.now_val_type !== lexicallyAnalyzeStr.word) {
            //     this.error_unexpectedToken(
            //       "コロン(:)の後は数字である必要があります"
            //     );
            //   }
            //   output.push({
            //     type: value_info_type.colon,
            //     value: [tmp, this.now_val.value],
            //   });
            // } else {

            // if (value[0] === command.ttkttk) {
            //   this.error_unexpectedToken(
            //     "とっておきコマンドの第二引数は配列 [] です"
            //   );
            // } else {
            this.getValue(
              (val) => {
                value.push(val);
              },
              (key, val) => {
                output.option[key] = val;
              }
            );

            // }
            // }
          }
        })
        // .case(lexicallyAnalyzeStr.bracketL, () => {
        //   this.nextVal();
        //   if (value[0] === command.ttkttk) {
        //     value.push(this.getMoveListInList(lexicallyAnalyzeStr.bracketR));
        //   } else {
        //     throw Error("このコマンドには[]は使えません");
        //   }
        // })

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
        .case(lexicallyAnalyzeStr.comma, () => {
          this.nextVal();
        })
        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています_"
          );
        });

      if (is_end) {
        break loop;
      }

      i++;
    }
    if (!output) {
      this.error_unexpectedToken("コマンドが入力されていません");
    }
    return {
      ...output,
      value,
    };
  }

  getMoveListInList(
    endType: lexicallyAnalyzeStr
  ): [command_array, { [s: string]: string }] {
    const output: command_array = [];
    const option: { [s: string]: string } = {};
    if (this.now_val_type === endType) {
      return [output, option];
    }

    loop: while (true) {
      match(this.now_val_type)
        .case(lexicallyAnalyzeStr.word, () => {
          // if (this.getNextValue().type === lexicallyAnalyzeStr.colon) {
          //   const tmp = this.now_val.value;
          //   this.nextVal();
          //   this.nextVal();
          //   if (this.now_val_type !== lexicallyAnalyzeStr.word) {
          //     this.error_unexpectedToken(
          //       "コロン(:)の後は数字である必要があります"
          //     );
          //   }
          //   output.push({
          //     type: value_info_type.colon,
          //     value: [tmp, this.now_val.value],
          //   });
          // } else {

          this.getValue(
            (val) => {
              output.push(val);
            },
            (key, val) => {
              option[key] = val;
            }
          );
          // }
        })

        // [
        // .case(lexicallyAnalyzeStr.bracketL, () => {
        //   this.nextVal();
        //   output.push(this.getMoveListInList(lexicallyAnalyzeStr.bracketR));
        // })
        .default(() => {
          this.error_unexpectedToken(
            "move_list内のかっこが閉じられていないか引数が不正ですx"
          );
        });

      let is_end = false;
      match(this.now_val_type)
        .case(endType, () => {
          this.nextVal();
          is_end = true;
        })

        .case(lexicallyAnalyzeStr.comma, () => {
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
    return [output, option];
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
    if (this.now_val_type !== lexicallyAnalyzeStr.comma) {
      this.error_unexpectedToken();
    }
  }

  getRangeValue(str: string, start: number, end: number): string {
    return str.substring(start, end);
  }

  error_unexpectedToken(errMsg = "") {
    show_error(this.timeline_parsed, this.i_loading, this.str, errMsg);
  }
}

class parser_lexicallyAnalyze {
  timeline_str: string;
  timeline_parsed: lexicallyAnalyzed[];
  _now_str: string;
  i_nowloadstr: number;
  readonly space = "\u{20}";

  constructor(timeline_str: string) {
    this.timeline_str = timeline_str;
    this.timeline_parsed = [];
    this._now_str = "";
    this.i_nowloadstr = 0;
  }

  async parse(): Promise<lexicallyAnalyzed[]> {
    return await JSON.parse(wasm_parse(this.timeline_str));
  }

  parse_no_wasm(): lexicallyAnalyzed[] {
    this.timeline_parsed = this.lexicalAnalysis();
    return this.timeline_parsed;
  }

  lexicalAnalysis(): lexicallyAnalyzed[] {
    const string = this.timeline_str;
    const parsed_data: lexicallyAnalyzed[] = [];

    const chars = string.split("");
    const s_len = chars.length;
    let i = 0;
    while (i < s_len) {
      const position: [number, number] = [i, i + 1];
      const value_chr = chars[i];
      let value = value_chr;
      const chr_type = this.getNextCharType(i);

      let isContinue = false;
      const continue_loop = () => {
        isContinue = true;
      };

      match(chr_type)
        .case(lexicallyAnalyzeStr.space, () => {
          i += 1;
          continue_loop();
        })
        .case(lexicallyAnalyzeStr.comment, () => {
          value = "";
          while (i < s_len) {
            const value_chr = chars[i];
            const chr_type = this.getNextCharType(i);
            if (chr_type === lexicallyAnalyzeStr.new_line) {
              i -= 1;
              break;
            }
            value += value_chr;
            i += 1;
          }
        })
        .case(lexicallyAnalyzeStr.word, () => {
          value = "";
          while (i < s_len) {
            const value_chr = chars[i];
            const chr_type = this.getNextCharType(i);
            if (chr_type !== lexicallyAnalyzeStr.word) {
              i -= 1;
              break;
            }
            value += value_chr;
            i += 1;
          }
        })
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .default(() => {});
      if (isContinue) {
        continue;
      }

      position[1] = i + 1;
      parsed_data.push({
        type: chr_type,
        value: value,
        addtional_info: { where: position },
      });
      i += 1;
    }
    return parsed_data;
  }

  getNextCharType(i: number): lexicallyAnalyzeStr {
    const char = this.timeline_str[i];
    let type: lexicallyAnalyzeStr;
    const changeType = (_type: lexicallyAnalyzeStr) => {
      type = _type;
    };
    match(char)
      .case(",", () => {
        changeType(lexicallyAnalyzeStr.comma);
      })
      .case("\n", () => {
        changeType(lexicallyAnalyzeStr.new_line);
      })
      // .case([this.space, "　", "\t"], () => {
      //   changeType(lexicallyAnalyzeStr.comment);
      // })
      .case("#", () => {
        changeType(lexicallyAnalyzeStr.comment);
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
      .case("=", () => {
        changeType(lexicallyAnalyzeStr.equal);
      })
      .case(
        ["(", ")", '"', "'", "!", "$", "%", "&", "^", "~", "?", ";", "`"],
        () => {
          // not @ _
          changeType(lexicallyAnalyzeStr.reserved);
        }
      )
      .default(() => {
        if (char.trim() === "") {
          changeType(lexicallyAnalyzeStr.space);
        } else {
          changeType(lexicallyAnalyzeStr.word);
        }
      });

    // type = type as lexicallyAnalyzeStr;
    // @ts-ignore
    if (type == undefined) {
      throw lib.undefinedErr;
    }
    return type;
  }
}

export default async function parse(text: string): Promise<AST[]> {
  const tl_parser_lexicallyAnalyze = new parser_lexicallyAnalyze(text);

  // console.time("1");
  // const lexicallyAnalyzed = await tl_parser_lexicallyAnalyze.parse();
  // console.timeEnd("1");
  // console.time("2");
  const lexicallyAnalyzed = tl_parser_lexicallyAnalyze.parse_no_wasm();
  // console.timeEnd("2");

  const tl_parser_AST = new parser_lexicallyAnalyze2AST(
    lexicallyAnalyzed,
    text
  );
  return tl_parser_AST.parse();
}
