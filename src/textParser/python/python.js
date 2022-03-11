import { asyncRun,waitInit } from "./py-worker";

function py_script(main_script) {
  const template_script = `
_output = []

_command__ = [
    "set",
    "countTTK",
    "countTTKuntil",
    "start",
    "end",
    "move",
    "action",
    "start_sort",
    "end_sort",
    "move_list",
    "buffset",
    "buffadd",
    "buffminus",
    "switch",
    "order",
    "skillcard",
    "color",
    "add",
    "nomove"
]


def _command_fn(command, *args):
    tmp = [command]
    tmp += list(args)
    _output.append(tmp)


class _wrapper_command:
    def __init__(self, command):
        self.command = command
        self.isCommand = True

    def __call__(self, *args):
        _command_fn(self.command, *args)


for _cmd__ in _command__:
    globals()[_cmd__] = _wrapper_command(_cmd__)


ttk = countTTK
ttk_until = countTTKuntil
mv_ls = move_list
bs = buffset
bp = buffadd
bm = buffminus
# a = add
# m = move
# ac = action
sw = switch
# c = color
sc = skillcard


def ___set(*args):
    globals()[list(args)[0]] = list(args)[0]
    _wrapper_command("set")(*args)


set = ___set


# b-10 -> "b10"
class _color__():
    def __init__(self, color):
        self.color = color

    def __sub__(self, num):
        if(type(num) != int and type(num) != float):
            raise TypeError("num must be Number")
        return self.color + str(num)


for _alp_num in range(26):
    alphabet = str(chr(_alp_num + 97))
    globals()[alphabet] = _color__(alphabet)


class _mv_ls():
    def __call__(self):
        return _color__("m")

    def _obj(self, mode, arg):
        return {"mode": mode, "value": list(arg)}

    def s(self, *args):
        return self._obj(0, args)

    def o(self, *args):
        return self._obj(1, args)

    def order(self, *args):
        return self.o(*args)

    def c(self, *args):
        args = list(args)
        if args[0].isCommand != True:
            raise Exception("args[0] must be command function")
        args[0] = args[0].command
        return self._obj(2, args)

    def command(self, *args):
        return self.c(*args)

    def a(self, *args):
        return self._obj(3, args)


m = _mv_ls()

######################

${main_script}

######################

m = _mv_ls()
for (i, cmd) in enumerate(_output):
    if(cmd[0] == "move_list"):
        for (j, o) in enumerate(cmd[2]):
            o_type = type(o)

            if(o_type == int or o_type == float or o_type == str):
                _output[i][2][j] = m.a(o)
            elif(o_type == list):
                _output[i][2][j] = m.s(*o)

import json
json.dumps(_output)
`;
  return template_script;
}



async function main(code) {
  try {
    return await asyncRun(py_script(code), {});
  } catch (e) {
    console.log(
      `Error in pyodideWorker at ${e.filename}, Line: ${e.lineno}, ${e.message}`
    );
  }
}

export default { main, waitInit };

