import { useState } from "react";
import { main } from "./timeline/index";
import {
  obj_update_data,
  type_convertedTLdata,
  type_count_ttk_ls,
  type_tableData_json,
  type_tl_comment,
} from "./types";
import { CopyTLURL } from "./view/copytlurl";
import { CsvDownload } from "./view/csvDownload";
import { Popup } from "./view/popup";
import { Readme } from "./view/readme";
import { SetBeforeUnload } from "./view/setBeforeUnload";
import { TLTable } from "./view/tl_table";

function App(): JSX.Element {
  const [firstChara, setFirstChara] = useState("");
  const [ttk, setTtk] = useState(0);
  const [now_place, setNowPlace] = useState(0);
  const [convertedTLdata, setconvertedTLdata] = useState<type_convertedTLdata>({
    main: [],
    set: [],
  });
  const [TLInput, setTLInput] = useState("");
  const [info, setInfo] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [countTTKLS, setCountTTKLS] = useState<type_count_ttk_ls>({});
  const [json, setJson] = useState<type_tableData_json>([]);
  const [charaList, setCharalist] = useState<string[]>([]);
  const [comment, setComment] = useState<type_tl_comment>([]);

  const updateData = (data: obj_update_data) => {
    const { json, charalist, comment, now_place } = data;
    setFirstChara(data.firstchara);
    setTtk(data.ttk);
    setNowPlace(data.now_place);
    setconvertedTLdata(data.convertedTLdata);
    setTLInput(data.TL_input);
    setCountTTKLS(data.count_ttk_ls);
    setJson(json);
    setCharalist(charalist);
    setComment(comment);
    setNowPlace(now_place);
  };
  const updateInfo = (info: string) => {
    setInfo(info);
  };
  const updateError = (error: string) => {
    setError(error);
  };
  window.onload = () => main(updateData, updateInfo, updateError);
  // window.onload = main
  return (
    <div className="App">
      <div className="keyboard"></div>
      <TLTable
        json={json}
        charalist={charaList}
        comment={comment}
        now_place={now_place}
      />
      現在先頭のキャラ:{firstChara}
      <br />
      現在 {now_place} 行目 <br />
      {show_ttk(countTTKLS) ? <div>とっておきゲージ:{ttk}%</div> : <></>}
      {error ? <div dangerouslySetInnerHTML={{ __html: error }}></div> : <></>}
      {info ? <div>{info}</div> : <></>}
      {/* <span>
        <div id="loading_python" className="hide">
          Python 初期化中…
        </div>
        <div id="executing_python" className="hide">
          Python 実行中…
        </div>
      </span> */}
      <span id="cm-resize-frame">
        <div id="editor"></div>
      </span>
      <br />
      <SetBeforeUnload tl_str={TLInput} />
      <Popup text={convertedTLdata} />
      <CsvDownload json={json} charalist={charaList} />
      <CopyTLURL text={TLInput} />
      <Readme />
      <br />
      <br />
    </div>
  );
}

function show_ttk(count_ttk_ls: type_count_ttk_ls): boolean {
  return Object.values(count_ttk_ls).filter((x) => x).length !== 0;
}

export default App;
