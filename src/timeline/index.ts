import define from "../define";
import { match } from "../lib";
import {
  AST,
  AST_command,
  command,
  execTL_result,
  mode_list,
  move_list,
  mvls_mode,
  type_chara_list,
  type_chara_move_list,
  type_convertedTLdata,
  type_count_ttk_ls,
} from "../types";
import { timeline, chara } from "./timeline";

function sorting(
  TL: timeline,
  chara_move_list: type_chara_move_list,
  convertedTLdata: type_convertedTLdata,
  mode: mode_list,
  count_ttk_ls: Readonly<type_count_ttk_ls>,
  chara_list: type_chara_list,
  ttk_count_until: number,
  call_add_ttk: (n: number) => void
) {
  let info = undefined;

  const _mainMode = (...arg: AST_command) => {
    ({ TL, convertedTLdata, mode } = mainMode(
      TL,
      convertedTLdata,
      mode,
      count_ttk_ls,
      chara_list,
      ttk_count_until,
      call_add_ttk,
      ...arg
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
                value.map((x: { value: string[] | AST_command }) => {
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

    const input = chara_move_list[id].shift();

    if (!input)
      throw Error(
        "内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"
      );

    try {
      if (input.mode === mvls_mode.order) {
        const [Color_OrderValue] = input.value;
        const Color = Color_OrderValue.match(/^[a-zA-Z]/g);
        const OrderValue = Color_OrderValue.match(/\d+(\.(\d+)?)?/g);

        if (Color) _mainMode(command.color, Color[0]);
        if (OrderValue) {
          _mainMode(command.order, id, OrderValue[0]);
        } else {
          throw Error("硬直が見つかりませんでした");
        }
      } else if (input.mode === mvls_mode.action) {
        const [Color_LoadFactor] = input.value;

        const Color = Color_LoadFactor.match(/^[a-zA-Z]/g);
        const LoadFactor = Color_LoadFactor.match(/\d+/g);

        if (Color) _mainMode(command.color, Color[0]);
        if (LoadFactor) {
          _mainMode(command.action, id, LoadFactor[0]);
        } else {
          throw Error("硬直値が見つかりませんでした");
        }
      } else if (input.mode === mvls_mode.switch) {
        const [to_name, SPD, buff] = input.value;
        _mainMode(command.switch, id, to_name, SPD, buff || "0");
        chara_move_list[to_name] = chara_move_list[id];
        chara_move_list[id] = [];
      } else if (input.mode === mvls_mode.command) {
        _mainMode(...input.value);
      } else {
        throw Error("テキストのパースエラー");
      }
    } catch (e) {
      throw Error(e + ":  " + JSON.stringify(input.value) + " ");
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
  ttk_count_until: number,
  call_add_ttk: (ttk: number) => void,
  ...arg: AST_command
) {
  const [
    load_text_command,
    load_text_arg1,
    load_text_arg2,
    load_text_arg3,
    load_text_arg4,
  ] = arg;
  const add_ttk = (n: number) => {
    if (TL.place_of_currentTimeline < ttk_count_until) {
      call_add_ttk(n);
    }
  };

  if (load_text_command !== command.end) {
    const tmp: [command | string, ...string[]] = arg;
    tmp[0] = command[load_text_command];
    if (convertedTLdata.main.length === 0) {
      convertedTLdata.main = [];
    }
    convertedTLdata.main.push(tmp as string[]);
  }

  const str2num_inf = (n: string) =>
    Number.isNaN(Number(n)) ? Infinity : Number(n);

  match(load_text_command)
    .case(command.buffset, () => {
      const id = load_text_arg1;
      const buff = Number(load_text_arg2) || 0;
      const turn = str2num_inf(load_text_arg3);
      chara_list[id]._SPD_buff = [];
      chara_list[id].setSPDbuff(buff, turn);
    })

    .case(command.buffadd, () => {
      const id = load_text_arg1;
      const buff = Number(load_text_arg2) || 0;
      const turn = str2num_inf(load_text_arg3);
      chara_list[id].setSPDbuff(buff, turn);
    })

    .case(command.buffminus, () => {
      const id = load_text_arg1;
      const buff = Number(load_text_arg2) || 0;
      const turn = str2num_inf(load_text_arg3);
      chara_list[id].setSPDbuff(-buff, turn);
    })

    .case(command.add, () => {
      const id = load_text_arg1;
      const SPD = Number(load_text_arg2);
      const buff = Number(load_text_arg3) || 0;
      chara_list[id] = new chara(id, SPD, buff);
      TL.addChara(id, chara_list[id].initOrderValue());
    })

    .case([command.move, command.action], () => {
      let id, LoadFactor;
      if (load_text_command === command.move) {
        LoadFactor = Number(load_text_arg1);
        id = load_text_arg2;
      } else {
        id = load_text_arg1;
        LoadFactor = Number(load_text_arg2);
      }

      const canMoveWithout1stChara = load_text_arg3 === "true";
      if (count_ttk_ls[id]) {
        add_ttk(define.getCharge(LoadFactor, false));
      }
      TL.move(
        chara_list[TL.ID_of_firstChara()].calculateOrderValue(LoadFactor),
        id,
        canMoveWithout1stChara
      );
      chara_list[id].nextTurn();
    })

    .case(command.order, () => {
      const id = load_text_arg1;
      const ordervalue = Number(load_text_arg2);
      // const canMoveWithout1stChara_act = load_text_arg3 === "true";

      TL.move(ordervalue, id, false);
      chara_list[id].nextTurn();
    })

    .case(command.switch, () => {
      const to = load_text_arg1;
      const from = load_text_arg2;
      const SPD = Number(load_text_arg3);
      const buff = Number(load_text_arg4) || 0;
      TL.switchChara(to, from);
      chara_list[from] = new chara(from, SPD, buff);
    })

    .case(command.color, () => {
      const color = load_text_arg1;
      TL.color = color;
    })

    .case(command.skillcard, () => {
      const name = load_text_arg1;
      const spd = Number(load_text_arg2);
      const LoadFactor = Number(load_text_arg3);
      const time = Number(load_text_arg4);

      if ([spd, LoadFactor, time].includes(NaN)) {
        throw Error("引数不足です");
      }

      const skillcard = new chara(name, spd, 0);
      chara_list[name] = skillcard;
      TL.addSkillCard(
        name,
        skillcard.calculateOrderValue(LoadFactor),
        time,
        (id, _, _i) =>
          add_ttk(
            count_ttk_ls[id]
              ? define.getCharge(Number(load_text_arg3), true)
              : 0
          )
      );
    })

    .case(command.nomove, () => {
      TL.skip();
    })

    .case(command.end, () => {
      mode = mode_list.waiting_mode;
    })

    .default(() => {
      throw Error("no command found");
    });

  return {
    mode,
    convertedTLdata,
    TL,
  };
}

export function execTL(parsed_tldata: AST[]): execTL_result {
  let TL = new timeline();
  let chara_move_list: type_chara_move_list = {};
  const chara_list: type_chara_list = {};
  let convertedTLdata: type_convertedTLdata = { main: [], set: [] };
  const count_ttk_ls: type_count_ttk_ls = {};

  let ttk = 0;
  let ttk_count_until = Infinity;

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
      add_ttk
    ));
  };

  try {
    for (let i = 0; i < parsed_tldata.length; i++) {
      const load_text_command = parsed_tldata[i]?.[0];
      const load_text_arg1 = parsed_tldata[i]?.[1];
      const load_text_arg2 = parsed_tldata[i]?.[2];
      const load_text_arg3 = parsed_tldata[i]?.[3];
      // const load_text_arg4 = parsed_tldata[i]?.[4];

      match(mode)
        .case(mode_list.init, () => {
          match(load_text_command)
            .case(command.set, () => {
              const id = load_text_arg1.toString();
              const SPD = Number(load_text_arg2);
              const buff = Number(load_text_arg3) || 0;
              chara_list[id] = new chara(id, SPD, buff);
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
              ttk_count_until = Number(load_text_arg1) || Infinity;
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
              ...statement
            ));
          } else {
            throw Error("start_sort ~ end_sort内にmove_listを書いてください");
          }
        })
        .case(mode_list.start_sort, () => {
          match(load_text_command)
            .case(command.move_list, () => {
              const id = load_text_arg1;
              const LoadFactor_list = load_text_arg2;
              chara_move_list[id] = LoadFactor_list as move_list[];
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
    console.error(e);
    error = e as string;
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
