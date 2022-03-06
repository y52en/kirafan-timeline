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

// function textCopy(textVal: string): boolean {
//   const copyFrom = document.createElement("textarea");
//   copyFrom.textContent = textVal;
//   const bodyElm = document.getElementsByTagName("body")[0];
//   bodyElm.appendChild(copyFrom);
//   copyFrom.select();
//   const retVal = document.execCommand("copy");
//   // bodyElm.removeChild(copyFrom);
//   return retVal;
// }

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

type match_callback = (any:any) => void;
const matched = Symbol();
type match_result = {
  case: (x: any, fn: match_callback) => match_result;
  default: (fn: match_callback) => void;
};

function match(val: any): match_result {
  return {
    case: (x: any, fn: match_callback) => _matcher(val, x, fn),
    default: (fn: match_callback) => {
      if (val !== matched) {
        fn(val);
      }
    },
  };
}

function _matcher(val: any, matcher_val: any, fn: (any:any) => void) {
  let _matched = false;
  if (Array.isArray(matcher_val)) {
    if (matcher_val.includes(val)) {
      _matched = true;
    }
  } else if (val === matcher_val) {
    _matched = true;
  }

  if (_matched) {
    fn(val);
    return match(matched);
  }
  return match(val);
}

// function isNumberString(str: string): boolean {
//   return /^[+-]?\d+$/.test(str);
// }

// function isObject(val) {
//   if (val !== null && typeof val === "object" && val.constructor === Object) {
//     return true;
//   }
//   return false;
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
};
export default _export;
