import { type_tableData_json } from "../types";

type Props = {
  json: type_tableData_json;
  charalist: string[];
};

export function CsvDownload(props: Props): JSX.Element {
  return (
    <div>
      <button onClick={() => outputAsCSV(props.json, props.charalist)}>
        CSV形式で表をダウンロード
      </button>
    </div>
  );
}

function outputAsCSV(json: type_tableData_json, charalist: string[]) {
  let output = "";

  for (let i = 0; i < json[0].length; i++) {
    output += "," + (i + 1);
  }
  output += "\n";

  for (let x = 0; x < json.length; x++) {
    output += charalist[x];
    for (let y = 0; y < json[0].length; y++) {
      output += ",";
      output += json[x][y] || "";
    }
    output += "\n";
  }
  makeCSVfile_download(output);
}

function makeCSVfile_download(csv: string, fileName = "timeline.csv") {
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, csv], { type: "text/csv" });
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = fileName;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(blobUrl);
}
