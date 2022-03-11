import { chara, timeline } from "../timeline/timeline";

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
}

export type AST_command = [command, ...string[]];
export type AST_mvls = [command.move_list, string, move_list[]];
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
  mode: mvls_mode.action | mvls_mode.order | mvls_mode.switch;
  value: string[];
}

export interface mvls_command {
  mode: mvls_mode.command;
  value: AST_command;
}

export type move_list = mvls_normal | mvls_command;

export const enum lexicallyAnalyzeStr {
  commma,
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
}

export const enum TL_type {
  chara,
  skillcard,
}
export interface TL_chara {
  timeline_OrderValue: number;
  id: string;
  type: TL_type.chara;
}

export type card_event = (id: string, OrderValue: number, time: number) => void;

export interface TL_skillcard {
  OrderValue: number;
  id: string;
  time: number;
  timeline_OrderValue: number;
  type: TL_type.skillcard;
  event: card_event;
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
}
