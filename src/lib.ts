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
  const copyFrom = document.createElement("textarea");
  copyFrom.textContent = textVal;
  const bodyElm = document.getElementsByTagName("body")[0];
  bodyElm.appendChild(copyFrom);
  copyFrom.select();
  const retVal = document.execCommand("copy");
  bodyElm.removeChild(copyFrom);
  return retVal;
}

function arr2enum(arr: Array<string>): { [s: string]: string } {
  const output: { [s: string]: string } = {};
  arr.forEach((x) => {
    output[x] = x;
  });
  return output;
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
};
