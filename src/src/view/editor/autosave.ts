import { changeTitle, OperateURL } from "../../lib";

export function autosave(getVal: () => string): { fn: () => void } {
  const SEC = 1000;
  const MIN = 60 * SEC;
  const HOUR = 60 * MIN;

  const intervalId = setInterval(() => {
    save(getVal());
  }, 0.5 * HOUR);

  const _save = () => save(getVal());
  window.addEventListener("beforeunload", _save);
  return {
    fn: () => {
      window.removeEventListener("beforeunload", _save);
      clearInterval(intervalId);
    },
  };
}

function save(nowUrlTlParam: string) {
  const url = new OperateURL(location.href);
  const title = String(new Date()) + "自動保存:TL生成ツール";

  if (nowUrlTlParam !== url.getParam("TL")) {
    url.setParam("TL", nowUrlTlParam);
    if (nowUrlTlParam.length === 0) {
      history.pushState(null, title, url.href);
    } else {
      history.replaceState(null, title, url.href);
    }
    changeTitle(title);
  }
}
