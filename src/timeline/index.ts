import define from "../define";
import { match, state } from "../lib";
import {
  arg_num,
  arg_num_to_arg,
  arg_num_to_arg_u,
  AST,
  AST_command,
  command,
  execTL_result,
  mode_list,
  move_list,
  mvls_mode,
  type_arg,
  type_chara_list,
  type_chara_move_list,
  type_convertedTLdata,
  type_count_ttk_ls,
  type_state,
  type_tableData_json,
} from "../types";
import { timeline, chara } from "./timeline";

type arg_taple<T extends arg_num, U extends arg_num> = type_arg<
  arg_num_to_arg<T>,
  arg_num_to_arg_u<U>
>;
function arg2taple<T extends arg_num, U extends arg_num, X>(
  arg: X[],
  arg_len: T,
  option: U
): arg_taple<T, U> {
  if (arg.length < arg_len) {
    throw new Error(`引数不足です: 必要引数:${arg_len} , オプション引数:${option}`);
  }
  const output: [...(X | undefined)[]] = [...arg.slice(0, arg_len + option)];
  for (let i = arg.length; i < arg_len + option; i++) {
    output.push(undefined);
  }
  return output as type_arg<arg_num_to_arg<T>, arg_num_to_arg_u<U>>;
}

function sorting(
  TL: timeline,
  chara_move_list: type_chara_move_list,
  convertedTLdata: type_convertedTLdata,
  mode: mode_list,
  count_ttk_ls: Readonly<type_count_ttk_ls>,
  chara_list: type_chara_list,
  ttk_count_until: type_state<number>,
  call_add_ttk: (n: number) => void,
  input_str: string
) {
  let info = undefined;

  let input;

  try {
    const _mainMode = (_arg: AST_command) => {
      ({ TL, convertedTLdata, mode } = mainMode(
        TL,
        convertedTLdata,
        mode,
        count_ttk_ls,
        chara_list,
        ttk_count_until,
        call_add_ttk,
        _arg
      ));
    };

    while (true) {
      if (TL.current.length === 0) {
        break;
      }
      const id = TL.ID_of_firstChara();
      if (chara_move_list[id]?.[0] === undefined) {
        const output: { [s: string]: move_list[] } = {};
        Object.keys(chara_move_list).forEach(function (key) {
          if (chara_move_list[key].length !== 0) {
            output[key] = chara_move_list[key];
          }
        });
        if (Object.keys(output).length !== 0) {
          info =
            "ⓘinfo :move_listに使われていないスキルがあります:" +
            JSON.stringify(
              Object.fromEntries(
                Object.entries(output).map(([key, value]) => [
                  key,
                  // @ts-ignore
                  value.map((x: { value: string[] | AST_command["value"] }) => {
                    if (x.value.length > 0) {
                      // @ts-ignore
                      if (x.mode === mvls_mode.command) {
                        // @ts-ignore
                        x.value[0] = command[x.value[0]];
                      }
                    }
                    if (x.value.length === 1) {
                      // @ts-ignore
                      x.value = x.value[0];
                    }
                    return x.value;
                  }),
                ])
              )
            ).replaceAll('"', "");
        }
        break;
      }
      input = chara_move_list[id].shift();

      if (!input)
        throw Error(
          "内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"
        );

      const _mainmode = (
        _command: Exclude<command, command.move_list>,
        option: { [s: string]: string } = {},
        ...val: string[]
      ) =>
        _mainMode({
          value: [_command, ...val],
          option,
          mv_ls: false,

          addtional_info: {
            where: [0, 0],
          },
        });

      if (input.mode === mvls_mode.order) {
        const [Color_OrderValue] = input.value;
        const Color = Color_OrderValue.match(/^[a-zA-Z]/g);
        const OrderValue = Color_OrderValue.match(/\d+(\.(\d+)?)?/g);

        if (Color) _mainmode(command.color, input.option, Color[0]);
        if (OrderValue) {
          _mainmode(command.order, input.option, id, OrderValue[0]);
        } else {
          throw Error("硬直が見つかりませんでした");
        }
      } else if (input.mode === mvls_mode.action) {
        const [Color_LoadFactor] = input.value;

        const Color = Color_LoadFactor.match(/^[a-zA-Z]/g);
        const LoadFactor = Color_LoadFactor.match(/\d+/g);

        if (Color) _mainmode(command.color, input.option, Color[0]);
        if (LoadFactor) {
          _mainmode(command.action, input.option, id, LoadFactor[0]);
        } else {
          throw Error("硬直値が見つかりませんでした");
        }
      } else if (input.mode === mvls_mode.switch) {
        const [to_name, SPD, buff] = input.value;
        _mainmode(command.switch, input.option, id, to_name, SPD, buff || "0");
        chara_move_list[to_name] = chara_move_list[id];
        chara_move_list[id] = [];
      } else if (input.mode === mvls_mode.command) {
        _mainMode(input.value);
      } else {
        throw Error("テキストのパースエラー");
      }
    }
  } catch (e) {
    if (input) {
      throw Error(
        `「${input_str.substring(...input.addtional_info.where)}」 : ${e}`
      );
    } else {
      console.log('e is undefined');
      throw Error(e as string);
    }
  }

  return {
    TL,
    chara_move_list,
    info,
  };
}

function mainMode(
  TL: timeline,
  convertedTLdata: type_convertedTLdata,
  mode: mode_list,
  count_ttk_ls: Readonly<type_count_ttk_ls>,
  chara_list: type_chara_list,
  ttk_count_until: type_state<number>,
  call_add_ttk: (ttk: number) => void,
  arg: AST_command
) {
  const [load_text_command, ...arg_string] = arg.value;
  const get_arg = <T extends arg_num, U extends arg_num>(
    arg_len: T,
    option: U
  ): arg_taple<T, U> => arg2taple(arg_string, arg_len, option);

  const add_ttk = (n: number) => {
    const ttk_until = ttk_count_until.get();
    if (TL.place_of_currentTimeline < ttk_until) {
      call_add_ttk(n);
    }
  };

  if (load_text_command !== command.end) {
    const tmp = arg.value;
    // @ts-ignore
    tmp[0] = command[load_text_command];
    if (convertedTLdata.main.length === 0) {
      convertedTLdata.main = [];
    }
    convertedTLdata.main.push(tmp as string[]);
  }

  const str2num_inf = (n: string | undefined) =>
    Number.isNaN(Number(n)) ? Infinity : Number(n);

  if (load_text_command === command.buffset) {
    const [id, _buff, _turn] = get_arg(2, 1);
    const buff = Number(_buff) || 0;
    const turn = str2num_inf(_turn);
    chara_list[id]._SPD_buff = [];
    chara_list[id].setSPDbuff(buff, turn);
  } else if (load_text_command === command.buffadd) {
    const [id, _buff, _turn] = get_arg(2, 1);
    const buff = Number(_buff) || 0;
    const turn = str2num_inf(_turn);
    chara_list[id].setSPDbuff(buff, turn);
  } else if (load_text_command === command.buffminus) {
    const [id, _buff, _turn] = get_arg(2, 1);
    const buff = Number(_buff) || 0;
    const turn = str2num_inf(_turn);
    chara_list[id].setSPDbuff(-buff, turn);
  } else if (load_text_command === command.add) {
    const [id, _SPD, _buff] = get_arg(2, 1);
    const SPD = Number(_SPD);
    const buff = Number(_buff) || 0;
    chara_list[id] = new chara(id, SPD, buff, 0, define.ttk_val);
    TL.addChara(id, chara_list[id].initOrderValue());
  } else if (
    load_text_command === command.move ||
    load_text_command === command.action
  ) {
    const [arg1, arg2, arg3] = get_arg(2, 1);
    let id, LoadFactor;
    if (load_text_command === command.move) {
      LoadFactor = Number(arg1);
      id = arg2;
    } else {
      id = arg1;
      LoadFactor = Number(arg2);
    }

    const canMoveWithout1stChara = arg3 === "true";
    if (count_ttk_ls[id]) {
      add_ttk(define.getCharge(LoadFactor, false));
    }
    TL.move(
      chara_list[TL.ID_of_firstChara()].calculateOrderValue(LoadFactor),
      id,
      canMoveWithout1stChara
    );
    chara_list[id].nextTurn();
  } else if (load_text_command === command.order) {
    const [id, _order] = get_arg(2, 0);
    const ordervalue = Number(_order) || 0;

    TL.move(ordervalue, id, false);
    chara_list[id].nextTurn();
  } else if (load_text_command === command.switch) {
    const [to, from, _SPD, _buff] = get_arg(3, 1);
    const SPD = Number(_SPD);
    const buff = Number(_buff) || 0;
    TL.switchChara(to, from);
    chara_list[from] = new chara(
      from,
      SPD,
      buff,
      0,
      Number(arg?.option?.ttk ?? define.ttk_val)
    );
  } else if (load_text_command === command.color) {
    const [color] = get_arg(1, 0);
    TL.color = color;
  } else if (load_text_command === command.skillcard) {
    const [name, _spd, _LoadFactor, _time] = get_arg(4, 0);
    const spd = Number(_spd);
    const LoadFactor = Number(_LoadFactor);
    const time = Number(_time);

    const skillcard = new chara(name, spd, 0, 0, 0);
    chara_list[name] = skillcard;
    TL.addSkillCard(
      name,
      skillcard.calculateOrderValue(LoadFactor),
      time,
      (id, _, _i) =>
        add_ttk(count_ttk_ls[id] ? define.getCharge(LoadFactor, true) : 0)
    );
  } else if (load_text_command === command.nomove) {
    TL.skip();
  } else if (load_text_command === command.end) {
    mode = mode_list.waiting_mode;
  } else if (load_text_command === command.ttk_stop) {
    ttk_count_until.set(TL.place_of_currentTimeline);
  } else if (load_text_command === command.move_ttk) {
    const charas = arg.value.slice(1) as string[];
    const ttk = charas.map((id) => {
      return chara_list[id].getTTK(false);
    });
    chara_list[charas[0]].nextTurn();
    TL.moveTTK(charas, ttk);
  } else {
    throw Error("no command found");
  }

  return {
    mode,
    convertedTLdata,
    TL,
  };
}

export function execTL(_parsed_tldata: AST[], str: string): execTL_result {
  let TL = new timeline();
  let chara_move_list: type_chara_move_list = {};
  const chara_list: type_chara_list = {};
  let convertedTLdata: type_convertedTLdata = { main: [], set: [] };
  const count_ttk_ls: type_count_ttk_ls = {};

  let ttk = 0;
  const ttk_count_until = state(Infinity);

  let mode = mode_list.init;

  let info, error;

  const add_ttk = (n: number) => {
    ttk += n;
  };

  const exec_mvls = () => {
    ({ TL, info, chara_move_list } = sorting(
      TL,
      chara_move_list,
      convertedTLdata,
      mode,
      count_ttk_ls,
      chara_list,
      ttk_count_until,
      add_ttk,
      str
    ));
  };

  let i = 0;
  const parsed_tldata: AST["value"][] = _parsed_tldata.map((x) => x.value);

  try {
    for (i = 0; i < _parsed_tldata.length; i++) {
      const [load_text_command, ...arg_string] = parsed_tldata[i];

      const get_arg = <T extends arg_num, U extends arg_num>(
        arg_len: T,
        option: U
      ): arg_taple<T, U> => arg2taple(arg_string, arg_len, option);
      // const load_text_arg1 = parsed_tldata[i]?.[1];
      // const load_text_arg2 = parsed_tldata[i]?.[2];
      // const load_text_arg3 = parsed_tldata[i]?.[3];
      // const load_text_arg4 = parsed_tldata[i]?.[4];

      const tmp = _parsed_tldata[i];
      if (!tmp.mv_ls) {
        Object.keys(tmp.option).forEach((key) => {
          if (key !== "ttk") {
            throw Error(`optionのキーはttk以外現在使えません`);
          }
        });
      }

      match<mode_list>(mode)
        .case([mode_list.init], () => {
          match(load_text_command)
            .case(command.set, () => {
              const [id, _order, _buff] = get_arg(2, 1);
              const SPD = Number(_order);
              const buff = Number(_buff) || 0;
              let ttk_val = define.ttk_val;
              if (!tmp.mv_ls) {
                ttk_val = Number(tmp?.option?.ttk ?? ttk_val);
              }

              chara_list[id] = new chara(id, SPD, buff, 0, ttk_val);
              TL.setChara(id, chara_list[id].initOrderValue());

              if (convertedTLdata.set.length === 0) {
                convertedTLdata.set = [parsed_tldata[i] as string[]];
              } else {
                convertedTLdata.set.push(parsed_tldata[i] as string[]);
              }
            })

            .case(command.countTTK, () => {
              const ttk_ls = parsed_tldata[i].slice(1);
              ttk_ls.forEach((v) => {
                if (typeof v === "string") {
                  count_ttk_ls[v] = true;
                }
              });
            })

            .case(command.countTTKuntil, () => {
              const [_ttk_ls] = get_arg(1, 0);
              ttk_count_until.set(Number(_ttk_ls) || Infinity);
            })

            .case(command.start, () => {
              mode = mode_list.start;
              TL.inited();
            })

            .case(command.start_sort, () => {
              mode = mode_list.start_sort;
              TL.inited();
            })

            .case(command.move_list, () => {
              mode = mode_list.start_sort;
              TL.inited();
              i--;
            })

            .default(() => {
              throw Error("need 'start'");
            });
        })

        .case(mode_list.start, () => {
          const statement = parsed_tldata[i];
          if (statement[0] !== command.move_list) {
            ({ mode, convertedTLdata, TL } = mainMode(
              TL,
              convertedTLdata,
              mode,
              count_ttk_ls,
              chara_list,
              ttk_count_until,
              add_ttk,
              {
                value: statement,
                option: {},
                addtional_info: { where: [0, 0] },
                mv_ls: false,
              }
            ));
          } else {
            throw Error("start_sort ~ end_sort内にmove_listを書いてください");
          }
        })
        .case(mode_list.start_sort, () => {
          match(load_text_command)
            .case(command.move_list, () => {
              const [id, _] = get_arg(2, 0);
              const LoadFactor_list = parsed_tldata[i][2] as move_list[];
              chara_move_list[id] = LoadFactor_list;
            })

            .case(command.end_sort, () => {
              exec_mvls();
              mode = mode_list.waiting_mode;
            })

            .default(() => {
              throw Error("no command found:「" + load_text_command + "」");
            });
        })

        .case(mode_list.waiting_mode, () => {
          match(load_text_command)
            .case(command.start, () => {
              mode = mode_list.start;
            })
            .case(command.start_sort, () => {
              mode = mode_list.start_sort;
            })

            .default(() => {
              throw Error("need 'start'");
            });
        })

        .default(() => {
          throw Error("内部エラー");
        });
    }

    if (mode === mode_list.init) {
      TL.inited();
      mode = mode_list.start_sort;
    }

    // @ts-ignore
    if (mode === mode_list.start_sort) {
      exec_mvls();
    }
  } catch (e) {
    if (mode === mode_list.start_sort) {
      error = e as string;
    } else {
      error = `「${str.substring(
        ..._parsed_tldata[i].addtional_info.where
      )}」 : ${e}`;
    }

    // +
    // `「${str.substring(..._parsed_tldata[i].addtional_info.where)}」`;
  }

  return {
    info,
    error,
    TL,
    ttk,
    convertedTLdata,
    chara_list,
    count_ttk_ls,
  };
}

export function convertOutput(
  chara_list: type_chara_list,
  TL: timeline
): {
  chara_array: string[];
  outputTL: type_tableData_json;
} {
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

    if (i.nomove === true) {
      outputTL[charaPlace][index] = `(${OrderValue})`;
    } else {
      outputTL[charaPlace][index] = OrderValue;
    }
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

  return {
    outputTL,
    chara_array,
  };
}
