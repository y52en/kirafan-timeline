./node_modules/brython/brython.js

add:
window.brython = __BRYTHON__;

window.pyexec = (code) => {
        $B.parse_options()

        const $locals_script = {json:JSON.stringify};

        const root = $B.py2js(code, "script", "script")
        const js = root.to_js()
        $B.set_import_paths()

        if ($B.debug > 1) { console.log(js) }
        eval(js)
};