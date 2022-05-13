import { rangeIterator } from "../lib";
import { type_tableData_json, type_tl_comment } from "../types";

type Props = {
  json: type_tableData_json;
  charalist: string[];
  comment: type_tl_comment;
  now_place: number;
};

export function TLTable(props: Props): JSX.Element {
  const minHeight =
   String(200) + "px";
  return (
    <div id="TL_table">
      <table
        width="100"
        style={{
          minHeight,
          border: "solid 1px",
        }}
      >
        {outputAsTable(
          props.json,
          props.charalist,
          props.comment,
          props.now_place
        )}
      </table>
    </div>
  );
}

function outputAsTable(
  json: type_tableData_json,
  charalist: string[],
  comment: type_tl_comment,
  now_place: number
): JSX.Element {
  if (json.length === 0) {
    return <></>;
  }
  return (
    <>
      <thead>
        <tr>
          {rangeIterator(json[0].length + 1, (i) => {
            if (i === now_place) {
              return (
                <th key={i} className="now_place">
                  {" "}
                  {i.toString()}
                </th>
              );
            } else if (i === 0) {
              return <th key={i} className="nowrap" />;
            } else {
              return <th key={i}> {i.toString()}</th>;
            }
          })}
        </tr>
      </thead>

      <tbody>
        {rangeIterator(json.length, (x) => {
          return (
            <tr key={x}>
              <>
                <td className="nowrap"> {charalist[x]} </td>
                {rangeIterator(json[0].length, (y) => {
                  const colorcode = comment.find(
                    (elm) =>
                      elm[0] === "color" &&
                      elm[1] === charalist[x] &&
                      elm[2] === y
                  );
                  const inner_tmp = json[x][y];
                  let inner_tmp_string: string;
                  if (typeof inner_tmp === "string") {
                    inner_tmp_string = inner_tmp;
                  } else if (typeof inner_tmp === "number") {
                    inner_tmp_string = String(inner_tmp);
                  } else {
                    inner_tmp_string = "";
                  }

                  if (colorcode) {
                    return (
                      <td key={y} className={"color-" + colorcode[3]}>
                        {inner_tmp_string}
                      </td>
                    );
                  } else {
                    return <td key={y}>{inner_tmp_string}</td>;
                  }
                })}
              </>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}
