import { useEffect, useState } from "react";
import { main } from "../timeline";
import { obj_update_data, type_count_ttk_ls } from "../types";
import { CopyTLURL } from "./copytlurl";
import { CsvDownload } from "./csvDownload";
import { Editor } from "./editor";
import Ad from "./googleAd";
import { Popup } from "./popup";
import { Readme } from "./readme";
import { SetBeforeUnload } from "./setBeforeUnload";
import { TLTable } from "./tlTable";

export function Main(): JSX.Element {
  //   const Editor = props.editor;
  const [TLInput, setTLInput] = useState("");

  const [data, setData] = useState<obj_update_data>({
    json: [],
    charalist: [],
    convertedTLdata: { main: [], set: [] },
    comment: [],
    now_place: 0,
    TL_input: "",
    firstchara: "",
    count_ttk_ls: {},
    ttk: 0,
    info: undefined,
  });
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    main(TLInput).then((data) => {
      if (data.output != undefined) {
        setData(data.output);
      }
      if (data.error != undefined) {
        setError(data.error);
      }
    });
  }, [TLInput]);

  useEffect(() => {
    return () => {
      console.log("destroy 2");
    };
  }, [setTLInput]);
  return (
    <>
      <TLTable
        json={data.json}
        charalist={data.charalist}
        comment={data.comment}
        now_place={data.now_place}
      />
      現在先頭のキャラ:{data.firstchara}
      <br />
      現在 {data.now_place} 行目 <br />
      {show_ttk(data.count_ttk_ls) ? (
        <div>とっておきゲージ:{data.ttk}%</div>
      ) : (
        <></>
      )}
      {error ? <div dangerouslySetInnerHTML={{ __html: error }}></div> : <></>}
      {data.info ? <div>{data.info}</div> : <></>}
      {/* <span>
        <div id="loading_python" className="hide">
          Python 初期化中…
        </div>
        <div id="executing_python" className="hide">
          Python 実行中…
        </div>
      </span> */}
      <Editor onChanged={setTLInput} />
      <SetBeforeUnload tl_str={TLInput} />
      <Popup text={data.convertedTLdata} />
      <CsvDownload json={data.json} charalist={data.charalist} />
      <CopyTLURL text={TLInput} />
      <Readme />
      <Ad />
      <br />
    </>
  );
}

function show_ttk(count_ttk_ls: type_count_ttk_ls): boolean {
  return Object.values(count_ttk_ls).filter((x) => x).length !== 0;
}
