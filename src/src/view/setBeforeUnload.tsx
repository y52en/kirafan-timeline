import { useState } from "react";

type Props = {
  tl_str: string;
};
export function SetBeforeUnload(props: Props): JSX.Element {
  const [askExit, setAskExit] = useState(false);

  window.onbeforeunload = function (e) {
    if (props.tl_str.length !== 0 && askExit) {
      e.preventDefault();
      e.returnValue = "ページから離れますか？";
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="isSet_onbeforeunload"
          onChange={(e) => setAskExit(e.currentTarget.checked)}
        />
        ページを離れる前に確認する
      </div>
      ((iOSの?)safariの場合beforeunloadイベントが無視されるようなのでこの設定は使えません)
      <br />
    </>
  );
}
