import python from "./python";
import {command,AST,commandStr2Enum, mvls_mode} from "../../types";
function transfer(arr: any): AST[] {
  return arr.map((x: any) => {
    const output = [];
    const commmand_str = x[0];
    const cmd = (() => {
      const tmp = commandStr2Enum[commmand_str] as command | undefined;
      if (typeof tmp !== "undefined") {
        return tmp;
      } else {
        throw Error("コマンド名に誤りがあります");
      }
    })();
    output.push(cmd);

    for (let i = 1; i < x.length; i++) {
      const type = typeof x[i];
      if (type === "number") {
        output.push(String(x[i]));
      } else if (type === "string") {
        output.push(x[i]);
      } else if (Array.isArray(x[i])) {
        if (cmd === command.move_list) {
          const tmp = x[i].map((elem: any) => {
            elem.mode = elem.mode as mvls_mode;
            const is_mode_command = elem.mode === mvls_mode.command;
            if (is_mode_command) {
              elem.value[0] = commandStr2Enum[elem.value[0]] as command;
            }

            for (let j = Number(is_mode_command); j < elem.value.length; j++) {
              if (typeof elem.value[j] === "number") {
                elem.value[j] = String(elem.value[j]);
              }
            }
            return elem;
          });
          output.push(tmp);
        } else {
          throw Error("move_list以外に配列が指定されています");
        }
      } else {
        throw Error("不正な型です: " + JSON.stringify(x) + " -> " + x[i]);
      }
    }

    return output as AST;
  }) as AST[];
}

export default async function parse(text: string): Promise<AST[]> {
  const timer = setTimeout(() => {
    err.innerHTML = "";
    info.innerHTML = "";

    loading_python.classList.remove("hide");
  }, 1500);
  await python.waitInit();
  clearTimeout(timer);
  loading_python.classList.add("hide");

  const timer2 = setTimeout(() => {
    err.innerHTML = "";
    info.innerHTML = "";

    executing_python.classList.remove("hide");
  }, 1500);
  const { results, error } = await python.main(text);
  clearTimeout(timer2);
  executing_python.classList.add("hide");
  if (error) {
    throw error;
  }

  const tl_json = JSON.parse(results);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // ts-ignore
  // const tl_json = JSON.parse(execPy(tmp)?.replaceAll("'", '"'));
  return transfer(tl_json);
}
