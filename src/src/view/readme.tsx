export function Readme(): JSX.Element {
  return (
    <>
      <div>
        <br />
        <button
          onClick={() =>
            window.open(
              "https://twitter.com/Y52en/status/1402239605978517505?s=20",
              "_blank"
            )
          }
        >
          基本的な使い方の説明(twitterにジャンプします)
        </button>
        <br />
        上記のツイートからの変更点
        <br />
        1.color追加 {escape("c:copper,d:dark")} <br />
        2.\を文末に置くことで改行できる(改行を無いものとしてみなす) <br />
        <br />
        2021/06/23
        <br />
        テキストのパース処理を変更 <br />
        これにより、色々変わりましたが重要なものだけ記載 <br />
        1.あいまいな記載が許されなくなった
        <br />
        2. move_list内でコマンドとコンマの間に改行できるようになった
        <br />
        もし正しい書き方であるのにパースエラーが出るときは@y52enに@ツイートなどでお知らせください
        <br />
        <br />
        2021/06/26
        <br />
        (また)テキストのパース処理を変更 <br />
        もし正しい書き方であるのにパースエラーが出るときは@y52enに@ツイートなどでお知らせください
        <br />
        <br />
        2021/07/10
        <br />
        CodeMirror採用 <br />
        色で見にくいかもしれないので意見募集中
        <br />
        <a href="https://static-site-generator.com/entry3.html">
          ショートカット一覧
        </a>
        <br />
        上記以外に [ Ctrl + / : コメント ] が使えます
        <br />
        あとブラウザの機能ですがF11で全画面です
        <br />
        <br />
        2021/12/19
        <br />
        ttk,ttk_untilを追加 <br />
        ざっくりとしたとっておきの値を出せます
        <br />
        <br />
        <strong>
          使い方
          <br />
        </strong>
        コマンドは半角で、またスペース区切りで設定すること
        <br />
        []内が引数(かっこ自体は書かない) <br />
        ()内のものは省略できる(バフなど) <br />
        <br />
        {how2use()}
        {/* <!-- <strong>start_sort</strong><br />
    ソートモード<br />
    end_sortを記入すると誰かのmove_listで書かれた硬直リストがなくなるまで行動する
    <br />
    (他のキャラにまだ硬直リストが残っていても終了) <br />
    <br />

    <strong>end_sort</strong><br />
    ソートモード終了<br />
    これを書かないとソートされない <br />
    その後ろにstart、start_sortを書くことでまた別のモードに切り替えられる<br />
    <br > --> */}
        <strong>例</strong>
        <br />
        <textarea
          readOnly
          cols={60}
          rows={30}
          value={`set enemy 224

set aikawa 126 
set kurumi 123
set yuzuko 131

#set hiro 130
#set hideri 135

ttk aikawa kurumi yuzuko hiro hideri heal
ttk_until 34

mv_ls enemy [{skillcard,dmg3000,224,1100,1},400*3,g400,r500,400,p200,{nomove}]

mv_ls aikawa [40,70,[hiro,130],70,70,40,40,[kurumi,123],35,40,b125]

mv_ls kurumi [[hideri,135],40,70,70,o40,[aikawa,123],70,[hideri,135],70,70,b125]

mv_ls yuzuko [{sc,heal,131,100,5},g40,s40,{b+,yuzuko,22.4,3},100,70,70,100,s40,{b+,yuzuko,22.4,3},g40,b125]`}
        />
      </div>
    </>
  );
}

function escape(str: string): string {
  return `{${str}}`;
}

function how2use(): JSX.Element {
  const readme_text: type_readme = readme;

  return (
    <>
      {readme_text.map((x, i) => {
        let _title: string[];
        if (typeof x.title === "string") {
          _title = [x.title];
        } else {
          _title = x.title;
        }

        return (
          <span key={i}>
            {_title.map((x, j) => (
              <span key={j + 10000}>
                <strong>{x}</strong>
                <br />
              </span>
            ))}
            {x.text.map((x, j) => (
              <span key={j + 20000}>
                {x}
                <br />
              </span>
            ))}
            {x.html ? <> {x.html} </> : <></>}
            <br />
          </span>
        );
      })}
    </>
  );
}

type type_readme = {
  title: string | string[];
  text: string[];
  html?: JSX.Element;
}[];

const readme: type_readme = [
  {
    title: "#[comment]",
    text: [
      "#から始まるものは行末まで無視されます(コメントに使用)",
      "命令の最後に書いてもよい",
      "ショートカットは「Ctrl + /」",
      "例:",
      "move 125 enemy",
      "#ここからデバフを入れる",
      "例:",
      "move 125 momo #とっておき",
    ],
  },
  {
    title: "set [name] [SPD] ([buff(%)])",
    text: [
      "開始(start)前にフィールドに出すキャラを設定",
      "SPDの優先度の高いキャラから先に書く",
      "nameにスペースを含めるのは禁止",
    ],
  },
  {
    title: "start",
    text: ["メインモード切り替え", "setを書き終わったら記入"],
  },
  {
    title: "end",
    text: [
      "メインモードモード終了",
      "その後ろにstart、start_sortを書くことでまた別のモードに切り替えられる",
    ],
  },
  {
    title: "move [硬直(%)] [name]",
    text: [
      "行動",
      "先頭のキャラ以外をnameに記入した場合errorを吐く",
      "moveの代わりにmでも可",
    ],
  },
  {
    title: "action [name] [硬直(%)]",
    text: [
      "行動",
      "moveと引数の順番が異なる以外同じ",
      "actionの代わりにacでも可",
    ],
  },
  {
    title:
      "move_list [name] [[硬直(%)],[交代後のname,SPD,(buff)],[硬直(%)],{command,argments1,argments2...}...]",
    text: [
      "行動リスト",
      "move_list nagi [40,{buffset,nagi,24},100,[ren,141,100],100]",
      "のように書く",
      "スペースを空けるのは厳禁",
      "内側にある[]は途中で交代することを示す",
      "{}でコマンドを使用可能",
      "<>で硬直値を直接入力可能",
      "move_listの代わりにmv_lsでも可",
    ],
  },
  {
    title:
      "----ここからほとんどデバッグしていないので正しく動かない可能性大----",
    text: [],
  },
  {
    title: [
      "buffset [name] [buff(%)] ([turn])",
      "buffadd [name] [buff(%)] ([turn])",
      "buffminus [name] [buff(%)] ([turn])",
    ],
    text: ["バフ設定", "それぞれ b,b+,b-と省略可"],
  },
  {
    title: "switch [from_name] [to_name] [SPD] ([buff])",
    text: [
      "from_nameに交代前のキャラ名、to_nameに交代後のキャラ名を記入",
      "swと省略可",
    ],
  },
  {
    title: "order [name] [name] [SPD]",
    text: ["硬直地直接入力"],
  },
  {
    title: "skillcard [name] [SPD] [硬直] [回数]",
    text: ["スキルカード"],
  },
  {
    title: "color [色]",
    text: [
      "r red",
      "g green",
      "b blue",
      "p purple",
      "s silver",
      "y yellow",
      "o orange",
      "c copper",
      "d dark",
    ],
  },
  {
    title: ["ttk[name][name][name] ...", "ttk_until[n行目]"],
    text: [
      "とっておきカウント",
      "ttkは引数にプレイヤーのキャラ、スキルカードの名前を書きます",
      "ttk_untilは引数に何行目までカウントしたいか書きます",
      "",
      "使用しているテーブル(以下にないものは0として計算)",
      "スキル",
    ],
    html: (
      <>
        <table className="normal-table">
          <thead>
            <tr>
              <th>硬直</th>
              <th>チャージ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>5</td>
            </tr>
            <tr>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>35</td>
              <td>17</td>
            </tr>
            <tr>
              <td>40</td>
              <td>8</td>
            </tr>
            <tr>
              <td>45</td>
              <td>2</td>
            </tr>
            <tr>
              <td>50</td>
              <td>5</td>
            </tr>
            <tr>
              <td>55</td>
              <td>8</td>
            </tr>
            <tr>
              <td>60</td>
              <td>8</td>
            </tr>
            <tr>
              <td>65</td>
              <td>8</td>
            </tr>
            <tr>
              <td>67.5</td>
              <td>17</td>
            </tr>
            <tr>
              <td>70</td>
              <td>17</td>
            </tr>
            <tr>
              <td>75</td>
              <td>17</td>
            </tr>
            <tr>
              <td>80</td>
              <td>5</td>
            </tr>
            <tr>
              <td>100</td>
              <td>17</td>
            </tr>
            <tr>
              <td>110</td>
              <td>22</td>
            </tr>
            <tr>
              <td>120</td>
              <td>8</td>
            </tr>
            <tr>
              <td>125</td>
              <td>0</td>
            </tr>
            <tr>
              <td>130</td>
              <td>10</td>
            </tr>
            <tr>
              <td>135</td>
              <td>17</td>
            </tr>
            <tr>
              <td>140</td>
              <td>8</td>
            </tr>
            <tr>
              <td>145</td>
              <td>8</td>
            </tr>
            <tr>
              <td>150</td>
              <td>17</td>
            </tr>
            <tr>
              <td>155</td>
              <td>8</td>
            </tr>
            <tr>
              <td>165</td>
              <td>10</td>
            </tr>
            <tr>
              <td>170</td>
              <td>17</td>
            </tr>
            <tr>
              <td>190</td>
              <td>17</td>
            </tr>
            <tr>
              <td>200</td>
              <td>17</td>
            </tr>
          </tbody>
        </table>
        <br />
        スキルカード
        <br />
        <table className="normal-table">
          <thead>
            <tr>
              <th>硬直</th>
              <th>チャージ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>75</td>
              <td>5</td>
            </tr>
            <tr>
              <td>80</td>
              <td>22</td>
            </tr>
            <tr>
              <td>100</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: "#python#",
    text: [
      "一番最初に#python#を入れるとpythonとして入力できます",
      "各コマンドは関数になっているのでそれを呼び出すと反映されます",
      "交代はそのままlistで書き、硬直値入力はm.order,コマンド入力はm.commandです",
      "注意点として、m.commandの第一引数はfunctionを渡します",
      "",
      "一部のコマンドの略称が変わります",
      "bs = buffset",
      "bp = buffadd",
      "bm = buffminus",
      "",
      "色を付ける場合、色-数字としてください",
      "b-40",
      "m.order(b-40)",
    ],
    html: (
      <>
        <textarea
          cols={30}
          rows={10}
          readOnly
          value={`#python#
set("syaro",144)
set("media",124)

mv_ls(syaro,[m.command(bp,syaro,-200),10,99,m.order(10.66)])
mv_ls(media,[d-80,80,69,m.order(c-14.5),["I",140],60])`}
        ></textarea>
        <br />
      </>
    ),
  },
  {
    title: "ttk_stop",
    text: ["とっておきカウントストップ"],
  },
  {
    title: "nomove",
    text: ["キャラの行動を止める(スキップ)"],
  },
];
