let pyodideWorker;
let pyodideInited = false;
let initedCallback = () => void(0);

function makeWorker() {
  pyodideWorker = new Worker("./js/pyodide/webworker.js");
}

function restartWorker() {
  pyodideWorker.terminate();
  pyodideInited = false;
  clearTimer();
  makeWorker();
  setmsg();
}

function clearTimer() {
  clearInterval(timer);
  timer = undefined;
}

let callbacks_latest = undefined;
let timer = undefined;
const force_end = 3000;


function setmsg() {
  pyodideWorker.onmessage = (event) => {
    const { id, ...data } = event.data;
    if (id === -1) {
      pyodideInited = true;
      initedCallback();
      initedCallback = () => void 0;
      return;
    }
    if (id === timer) {
      const onSuccess = callbacks_latest;
      clearInterval(timer);
      timer = undefined;
      onSuccess(data);
    }
  };
  
}


function waitInit() {
  return new Promise((resolve, reject) => {
    if (!pyodideWorker) {
      makeWorker();
      setmsg();
    }
    if (pyodideInited) {
      resolve();
    } else {
      initedCallback = resolve;
    }
  });
}

const asyncRun = (() => {
  let id = 0; // identify a Promise
  return (script, context) => {
    if (!pyodideWorker) {
      makeWorker();
      setmsg();
    }
    // the id could be generated more carefully
    id = (id + 1) % Number.MAX_SAFE_INTEGER;
    return new Promise((onSuccess) => {
      callbacks_latest = onSuccess;
      waitInit().then(() => {
        if (timer) { 
          clearInterval(timer);
          timer = undefined;
        }
        
        timer = setTimeout(() => {
          restartWorker();
          onSuccess({ error: "Error:timeout\n" });
        }, force_end);
        pyodideWorker.postMessage({
          ...context,
          python: script,
          id:timer,
        });
      });
    });
  };
})();
export { asyncRun,waitInit };
