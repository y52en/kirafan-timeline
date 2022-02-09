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

function isPC(): boolean {
  return !(
    navigator.userAgent.indexOf("iPhone") > 0 ||
    (navigator.userAgent.indexOf("Android") > 0 &&
      navigator.userAgent.indexOf("Mobile") > 0) ||
    navigator.userAgent.indexOf("iPad") > 0 ||
    navigator.userAgent.indexOf("Android") > 0
  );
}

// function isObject(val) {
//   if (val !== null && typeof val === "object" && val.constructor === Object) {
//     return true;
//   }
//   return false;
// }

export default {
  undefinedErr,
  htmltag,
  changeTitle,
  objectCopy,
  textCopy,
  makeTable,
  isPC,
};
