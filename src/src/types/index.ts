import { chara, timeline } from "../timeline/timeline/timeline";

export enum command {
  set,
  countTTK,
  countTTKuntil,
  start,
  end,
  move,
  action,
  start_sort,
  end_sort,
  move_list,
  buffset,
  buffadd,
  buffminus,
  switch,
  order,
  skillcard,
  color,
  add,
  nomove,
  ttk_stop,
  move_ttk,
}

export const commandStr2Enum = (() => {
  const output: { [s: string]: command } = {};
  const command_list = [
    "set",
    "countTTK",
    "countTTKuntil",
    "start",
    "end",
    "move",
    "action",
    "start_sort",
    "end_sort",
    "move_list",
    "buffset",
    "buffadd",
    "buffminus",
    "switch",
    "order",
    "skillcard",
    "color",
    "add",
    "nomove",
    "ttk_stop",
    "move_ttk",
  ];
  command_list.forEach((x) => {
    // @ts-ignore
    output[x] = command[x] as command;
  });
  const shorthand_list: [string, command][] = [
    ["ttk", command.countTTK],
    ["ttk_until", command.countTTKuntil],
    ["mv_ls", command.move_list],
    ["b", command.buffset],
    ["b+", command.buffadd],
    ["b-", command.buffminus],
    ["a", command.add],
    ["m", command.move],
    ["ac", command.action],
    ["sw", command.switch],
    ["c", command.color],
    ["sc", command.skillcard],
  ];
  shorthand_list.forEach(([str, toCommand]) => {
    output[str] = toCommand;
  });
  return output;
})();

export interface lexicallyAnalyzed {
  type: lexicallyAnalyzeStr;
  value: string;
  addtional_info: addtional_info;
}

export type _addtional_info<T> = {
  value: T;
};

export type AST_command = {
  value: [Exclude<command, command.move_list>, ...string[]];
  option: {
    [s: string]: string;
  };
  mv_ls: false;
  addtional_info: addtional_info;
};

export type AST_mvls = {
  mv_ls: true;
  value: [command.move_list, string, move_list[]];
  addtional_info: addtional_info;
};
export type AST = AST_command | AST_mvls;
/*  [
            [set,syaro,144],
            [mv_ls,syaro, 
              [
                {mode: "command",value:[b,syaro,14]}
              ] 
            ]
          ]
          
       */

export const enum mvls_mode {
  switch,
  order,
  command,
  action,
}
export interface mvls_normal {
  mode: Exclude<mvls_mode, mvls_mode.command>;
  // mode: mvls_mode.action | mvls_mode.order | mvls_mode.switch;

  value: string[];
  option: {
    [s: string]: string;
  };
  addtional_info: addtional_info;
}

export interface mvls_command {
  mode: mvls_mode.command;
  value: AST_command;
  addtional_info: addtional_info;
}

export type move_list = mvls_normal | mvls_command;

export const enum lexicallyAnalyzeStr {
  comma,
  comment,
  new_line,
  braceL,
  braceR,
  bracketL,
  bracketR,
  angle_bracketL,
  angle_bracketR,
  asterisk,
  reserved,
  word,
  equal,
  space = 999,
}

export const enum TL_type {
  chara,
  skillcard,
}
export interface TL_chara {
  timeline_OrderValue: number;
  id: string;
  type: TL_type.chara;
  nomove: boolean;
}

export type card_event = (id: string, OrderValue: number, time: number) => void;

export interface TL_skillcard {
  OrderValue: number;
  id: string;
  time: number;
  timeline_OrderValue: number;
  type: TL_type.skillcard;
  event: card_event;
  nomove: false;
}

export interface buff {
  val: number;
  turn: number;
}

export type TL_obj = TL_chara | TL_skillcard;

export const enum editor_mode {
  python = "python",
  default = "kirafan-timeline",
}

export interface text_parser_result {
  AST: AST[];
  type: editor_mode;
}

export const enum mode_list {
  init,
  start,
  start_sort,
  sorting,
  waiting_mode,
}

export interface execTL_result {
  error: string | undefined;
  info: string | undefined;
  TL: timeline;
  ttk: number;
  convertedTLdata: type_convertedTLdata;
  chara_list: type_chara_list;
  count_ttk_ls: type_count_ttk_ls;
}

export interface type_convertedTLdata {
  main: string[][];
  set: [string[]?];
}

export type type_count_ttk_ls = { [s: string]: boolean };
export type type_chara_list = { [s: string]: chara };
export type type_chara_move_list = { [s: string]: move_list[] };

export interface type_editor_init {
  switch_editor: (lang: editor_mode) => void;
  get_value: () => string;
}

export type type_tableData = [
  Array<Array<number | string | undefined>>,
  string[]
];

export type type_tableData_json = (string | number | undefined)[][];

export type type_tl_comment = [string, string, number, string][];

export type update_data = (
  json: type_tableData_json,
  charalist: string[],
  convertedTLdata: type_convertedTLdata,
  comment: type_tl_comment,
  now_place: number
) => void;

export interface obj_update_data {
  json: type_tableData_json;
  charalist: string[];
  convertedTLdata: type_convertedTLdata;
  comment: type_tl_comment;
  now_place: number;
  TL_input: string;
  firstchara: string;
  count_ttk_ls: type_count_ttk_ls;
  ttk: number;
  info: string | undefined;
}

export interface type_state<T> {
  get: () => T;
  set: (val: T) => void;
}

// export enum value_info_type {
//   colon
// }

// export type value_with_colon = {type: value_info_type.colon, value: [string,string]};

export type command_array = string[];

export type addtional_info = {
  where: [number, number];
};

export type arg_0<_T> = [];
export type arg_1<T> = [T];
export type arg_2<T> = [T, T];
export type arg_3<T> = [T, T, T];
export type arg_4<T> = [T, T, T, T];

// export type arg_n1 = [string];
// export type arg_n2 = [string, string];
// export type arg_n3 = [string, string, string];
// export type arg_n4 = [string, string, string, string];

// export type arg_u1 = [string?];
// export type arg_u2 = [string?, string?];
// export type arg_u3 = [string?, string?, string?];

export type type_arg<
  T extends Array<string>,
  U extends Array<string | undefined>
> = [...T, ...U];

export type arg_num = 0 | 1 | 2 | 3 | 4;

export type arg_num_taple<T extends arg_num, U> = {
  0: arg_0<U>;
  1: arg_1<U>;
  2: arg_2<U>;
  3: arg_3<U>;
  4: arg_4<U>;
}[T];

export type arg_num_to_arg<T extends arg_num> = arg_num_taple<T, string>;

type arg_option = string | undefined;
export type arg_num_to_arg_u<T extends arg_num> = arg_num_taple<T, arg_option>;

export type arg_type = "string" | "number" | "string?" | "number?";

type GetWithoutLastValue<T> = T extends readonly [...infer A, infer _]
  ? A
  : never;
type GetLastValue<T> = T extends readonly [...infer _, infer B] ? B : never;

export type _arg_type = {
  string: string;
  "string?": string | undefined;
  number: number;
  "number?": number | undefined;
};

export type ConvertStr2Type<T> = T extends readonly []
  ? []
  : [
      ...ConvertStr2Type<GetWithoutLastValue<T>>,
      _arg_type[GetLastValue<T> extends keyof _arg_type
        ? GetLastValue<T>
        : never]
    ];

export type type_TL_main = {
  output: obj_update_data | undefined;
  error: string | undefined;
  // info: string | undefined;
};

// ["1","2", string?] ,2 ,1
//
