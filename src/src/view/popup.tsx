import React from "react";
import { useState } from "react";
import { getRandomStr, innerText, textCopy } from "../lib";
import { type_convertedTLdata } from "../types";

type Props = {
  text: type_convertedTLdata;
};

export function Popup(props: Props): JSX.Element {
  const str = joinedTLdata(props.text);
  const [showCopied, setShowCopied] = useState(false);
  const copy = () => {
    textCopy(str);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };
  // eslint-disable-next-line prefer-const
  let input_elm = React.createRef<HTMLInputElement>();

  const [id_a, id_b, id_c] = [getRandomStr(), getRandomStr(), getRandomStr()];
  return (
    <>
      <div className="popupModal1">
        {/* <!-- https://qiita.com/dangoya/items/4176e8ef22e892570f4e --> */}
        <input type="radio" name="modalPop" id={id_c} ref={input_elm} />
        <label htmlFor={id_c}>
          <button
            onClick={() => {
              if (input_elm?.current) {
                input_elm.current.checked = true;
              }
            }}
          >
            move_listの展開
          </button>
        </label>
        <input type="radio" name="modalPop" id={id_a} />
        <label htmlFor={id_a}>CLOSE</label>
        <input type="radio" name="modalPop" id={id_b} />
        <label htmlFor={id_b}></label>
        <div className="modalPopup2">
          <div className="modalPopup3">
            <h2 className="modalTitle">展開済みのTLデータ</h2>
            <button onClick={copy}>コピーする</button>
            {showCopied ? <div>コピーしました</div> : <></>}
            <div className="modalMain">{innerText(str)}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function joinedTLdata(convertedTLdata: type_convertedTLdata): string {
  return (
    convertedTLdata.set
      .map((x) => {
        if (x) {
          return x.join(" ");
        } else {
          return "";
        }
      })
      .join("\n") +
    "\n\nstart\n" +
    convertedTLdata.main
      .map((x) => {
        if (x) {
          return "  " + x.join(" ");
        } else {
          return "";
        }
      })
      .join("\n") +
    "\nend"
  );
}
