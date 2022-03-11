import clonedeep from "lodash/cloneDeep";

const undefinedErr = Error("undefined");

function htmltag(name: string, inner = "", Class = ""): HTMLElement {
  const output = document.createElement(name);
  if (output) {
    if (inner) output.innerText = inner;
    if (Class) output.classList.add(Class);
    return output;
  } else {
    throw undefinedErr;
  }
}

function changeTitle(title: string): void {
  const elm_title = document.querySelector("title");
  if (elm_title) {
    elm_title.innerText = title;
  } else {
    throw undefinedErr;
  }
}
// eslint-disable-next-line
function objectCopy(obj: object | any[]): object | any[] {
  return clonedeep(obj);
}

function textCopy(textVal: string): boolean {
  const elm_textarea = document.createElement("textarea");
  elm_textarea.value = textVal;
  elm_textarea.setAttribute("readonly", "");
  elm_textarea.style.position = "absolute";
  elm_textarea.style.left = "-9999px";
  document.body.appendChild(elm_textarea);
  elm_textarea.select();
  const retVal = document.execCommand("copy");
  document.body.removeChild(elm_textarea);
  return retVal;
}

function makeTable(headers: string[], data: any[][]): HTMLElement {
  const table = htmltag("table");
  const thead = htmltag("thead");
  const tr = htmltag("tr");
  for (const header of headers) {
    const th = htmltag("th");
    th.innerText = header;
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = htmltag("tbody");
  for (const row of data) {
    const tr = htmltag("tr");
    for (const col of row) {
      const td = htmltag("td");
      td.innerText = col;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}
function isAndroid(): boolean {
  return navigator.userAgent.indexOf("Android") > 0;
}
function isPC(): boolean {
  return !(
    navigator.userAgent.indexOf("iPhone") > 0 ||
    (navigator.userAgent.indexOf("Android") > 0 &&
      navigator.userAgent.indexOf("Mobile") > 0) ||
    navigator.userAgent.indexOf("iPad") > 0 ||
    navigator.userAgent.indexOf("Android") > 0
  );
}

// 自然数であるか
function isNaturalString(str: string): boolean {
  return /^[+]?\d+$/.test(str);
}

function unreachable(msg = "unreachable code"): never {
  throw new Error(msg);
}

type match_callback = () => void;
const matched = Symbol();
type match_result<T> = {
  case: (x: T | T[], fn: match_callback) => match_result<T>;
  default: (fn: match_callback) => void;
};

function match<T>(val: T, ismatch?: symbol): match_result<T> {
  return {
    case: (x: T | T[], fn: match_callback) => _matcher(val, x, fn, ismatch),
    default: (fn: match_callback) => {
      if (ismatch !== matched) {
        fn();
      }
    },
  };
}

function _matcher<T>(
  val: T,
  matcher_val: T,
  fn: () => void,
  ismatch?: symbol
): match_result<T> {
  if (ismatch === matched) {
    return match(val, ismatch);
  }
  let _matched = false;
  if (Array.isArray(matcher_val)) {
    if (matcher_val.includes(val)) {
      _matched = true;
    }
  } else if (val === matcher_val) {
    _matched = true;
  }

  if (_matched) {
    fn();
    return match(val, matched);
  }
  return match(val);
}

class OperateURL {
  _href: string;
  autochange: boolean;
  _urlAPI: URL;
  constructor(_URL = location.href, autochange = true) {
    this._href = _URL;
    this._urlAPI = new URL(this._href);
    this.autochange = autochange;
  }

  getParam(param: string): string {
    const val = this._urlAPI.searchParams.get(param) || "";
    try {
      return decodeURIComponent(val);
    } catch {
      return val;
    }
  }

  setParam(name: string, value = ""): void {
    this._urlAPI.searchParams.set(name, value);
    if (this.autochange) {
      this._setURL(this._urlAPI.href);
    }
  }

  get hash(): string {
    return this._urlAPI.hash;
  }

  set hash(val: string) {
    this._setURL(`#${val}`);
  }

  get href(): string {
    return (
      this._urlAPI.protocol +
      "//" +
      this._urlAPI.host +
      this._urlAPI.pathname +
      "?TL=" +
      encodeURIComponent(this.getParam("TL"))
    );
  }

  set href(val: string) {
    this._urlAPI.href = val;
  }

  _setURL(arg3: string): void {
    if (this.autochange) {
      history.replaceState("", "", arg3);
    }
  }

  _reflesh(): void {
    this._urlAPI = new URL(this._href);
  }
}

// function isNumberString(str: string): boolean {
//   return /^[+-]?\d+$/.test(str);
// }


// XXX:どう直したらいいかわからない
const _export = {
  undefinedErr,
  htmltag,
  changeTitle,
  objectCopy,
  textCopy,
  makeTable,
  isPC,
  isAndroid,
  isNaturalString,
  unreachable,
  match,
  OperateURL,
};

export {
  undefinedErr,
  htmltag,
  changeTitle,
  objectCopy,
  textCopy,
  makeTable,
  isPC,
  isAndroid,
  isNaturalString,
  unreachable,
  match,
  OperateURL,
};
export default _export;
