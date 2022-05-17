// https://qiita.com/qrusadorz/items/14972b6e069feaf777a9

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function Ad(): JSX.Element {
  useEffect(() => {
    if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
      window.adsbygoogle.push({});
    }
    console.log('"ad" :>> ', "ad");
  }, []);

  return (
    <>
      広告
      <br />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1551475730309963"
        data-ad-slot="1369930607"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
