import { useState } from "react";
import { OperateURL, textCopy } from "../lib";

type Props = {
  text: string;
};

export function CopyTLURL(TL_input: Props): JSX.Element {
  const _url = new OperateURL(undefined, false);

  const [showCopied, setShowCopied] = useState(false);
  const copy = () => {
    _url.setParam("TL", TL_input.text);
    textCopy(_url.href);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };
  return (
    <>
      <div>
        <button onClick={copy}>タイムラインデータ付きのURLをコピー</button>
      </div>
      {showCopied ? <div>コピーしました</div> : <></>}
    </>
  );
}
