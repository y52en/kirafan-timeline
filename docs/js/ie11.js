"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  "use strict";

  (function (e) {
    var t = Error("undefined");

    function r(e) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var a = document.createElement(e);
      if (a) return r && (a.innerText = r), n && a.classList.add(n), a;
      throw t;
    }

    function n(e) {
      var t = document.createElement("textarea");
      t.textContent = e;
      var r = document.getElementsByTagName("body")[0];
      r.appendChild(t), t.select();
      var n = document.execCommand("copy");
      return r.removeChild(t), n;
    }

    var a = /*#__PURE__*/function () {
      function a(e) {
        _classCallCheck(this, a);

        this.timeline_parsed = e, this.i_loading = 0;
      }

      _createClass(a, [{
        key: "now_val",
        get: function get() {
          return this.timeline_parsed[this.i_loading];
        },
        set: function set(e) {
          throw Error("now_valにはセットできません");
        }
      }, {
        key: "now_val_type",
        get: function get() {
          return this.now_val.type;
        },
        set: function set(e) {
          throw Error("now_valにはセットできません");
        }
      }, {
        key: "Normalize",
        value: function Normalize() {
          var _this = this;

          var e,
              t = [];

          var r = this,
              n = function n() {
            return _this.timeline_parsed[e].type;
          };

          for (e = 0; e < this.timeline_parsed.length; e++) {
            "bracketL" === n() && _a(), t.push(this.timeline_parsed[e]);
          }

          function _a() {
            var i = [e];

            for (t.push(r.timeline_parsed[e]), e++; e < r.timeline_parsed.length; e++) {
              if (e + 1 === r.timeline_parsed.length && (r.i_loading = (null == i ? void 0 : i[1]) || i[0], r.error_unexpectedToken("]が不足しています")), "bracketL" === n()) i.push(e), _a();else {
                if ("new_line" === n()) continue;

                if ("bracketR" === n()) {
                  i.pop();
                  break;
                }
              }
              t.push(r.timeline_parsed[e]);
            }
          }

          for (var _e = 0, _r = !0; _e < t.length; _e++) {
            "new_line" === t[_e].type ? (_r && (t.splice(_e, 1), _e--), _r = !0) : _r = !1;
          }

          for (var _e2 = t.length - 1; _e2 >= 0 && "new_line" === t[_e2].type; _e2--) {
            t.pop();
          }

          this.timeline_parsed = t;
        }
      }, {
        key: "parse",
        value: function parse() {
          this.Normalize();
          var e = [];
          if (0 === this.timeline_parsed.length) return e;

          for (this.timeline_parsed.push({
            type: "new_line",
            value: "\n"
          }), this.i_loading = 0; this.i_loading < this.timeline_parsed.length; this.i_loading++) {
            var _t = this.loadStatement();

            e.push(_t), "new_line" !== this.now_val_type && this.error_unexpectedToken("]のあとにコメント以外の文を書くことはできません");
          }

          return e;
        }
      }, {
        key: "loadStatement",
        value: function loadStatement() {
          var _this2 = this;

          var e = [];
          this.checkIsWord();
          var t = this.now_val.value;
          this.nextVal();

          var r = function r() {
            e.push(_this2.now_val.value), _this2.nextVal();
          };

          if ("move_list" === t || "mv_ls" === t) {
            this.checkIsWord();
            var _r2 = this.now_val.value;
            this.nextVal(), "bracketL" !== this.now_val_type && this.error_unexpectedToken("move_listの第二引数は [ から始まる必要があります"), this.nextVal();
            var _n = [];
            if ("bracketR" !== this.now_val_type) e: for (;;) {
              var _e3 = void 0;

              switch (this.now_val_type) {
                case "bracketL":
                  this.nextVal(), _e3 = this.getMoveListInList("bracketR"), _n.push({
                    mode: "switch",
                    value: _e3
                  });
                  break;

                case "angle_bracketL":
                  this.nextVal(), _e3 = this.getMoveListInList("angle_bracketR"), _n.push({
                    mode: "order",
                    value: _e3
                  });
                  break;

                case "braceL":
                  this.nextVal(), _e3 = this.getMoveListInList("braceR"), _n.push({
                    mode: "command",
                    value: _e3
                  });
                  break;

                case "word":
                  var _t2 = {
                    mode: "action",
                    value: []
                  };
                  _t2.value.push(this.now_val.value), _n.push(_t2), this.nextVal();
                  break;

                default:
                  this.error_unexpectedToken("move_list内のパースエラー　正しい値が入力されているか確認してください");
              }

              if ("bracketR" === this.now_val_type) break e;
              "commma" === this.now_val_type ? this.nextVal() : this.error_unexpectedToken("コンマかmove_list終了の]が不足しています");
            }
            e = [t, _r2, _n], this.nextVal();
          } else for (e = [t];;) {
            if ("word" === this.now_val_type) r();else {
              if ("new_line" === this.now_val_type) break;
              this.error_unexpectedToken("この文字は入力できません");
            }
          }

          return e;
        }
      }, {
        key: "isLastValue",
        value: function isLastValue() {
          return this.i_loading + 1 >= this.timeline_parsed.length;
        }
      }, {
        key: "getMoveListInList",
        value: function getMoveListInList(e) {
          var t = [];
          if (this.now_val_type === e) return t;

          e: for (;;) {
            switch (this.now_val_type) {
              case "word":
                t.push(this.now_val.value), this.nextVal();
                break;

              default:
                this.error_unexpectedToken("move_list内のかっこが閉じれていないか引数が不正です");
            }

            switch (this.now_val_type) {
              case e:
                this.nextVal();
                break e;

              case "commma":
                this.nextVal();
                break;

              default:
                this.error_unexpectedToken("move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています");
            }
          }

          return t;
        }
      }, {
        key: "nextVal",
        value: function nextVal() {
          this.isLastValue() && this.error_unexpectedToken("内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。"), this.i_loading++;
        }
      }, {
        key: "nextVal_noerror",
        value: function nextVal_noerror() {
          this.isLastValue() || this.i_loading++;
        }
      }, {
        key: "checkIsWord",
        value: function checkIsWord() {
          "word" !== this.now_val_type && this.error_unexpectedToken();
        }
      }, {
        key: "checkIsCommma",
        value: function checkIsCommma() {
          "commma" !== this.now_val_type && this.error_unexpectedToken();
        }
      }, {
        key: "error_unexpectedToken",
        value: function error_unexpectedToken() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = r("span");
          if (t.appendChild(r("span", "→→" + this.now_val.value + "←←", "errMsg")), "new_line" !== this.now_val.type) for (var _e4 = this.i_loading + 1; _e4 < this.timeline_parsed.length && "new_line" !== this.timeline_parsed[_e4].type; _e4++) {
            t.insertAdjacentText("beforeend", this.timeline_parsed[_e4].value);
          }

          for (var _e5 = this.i_loading - 1; _e5 >= 0 && "new_line" !== this.timeline_parsed[_e5].type; _e5--) {
            t.insertAdjacentText("afterbegin", this.timeline_parsed[_e5].value);
          }

          "reserved" === this.now_val.type && (e = "予約文字です");
          var n = r("span");
          throw n.insertAdjacentText("beforeend", "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"), n.appendChild(r("br")), n.appendChild(t), n.appendChild(r("br")), n.insertAdjacentText("beforeend", e), Error(n.outerHTML);
        }
      }]);

      return a;
    }();

    var i = /*#__PURE__*/function () {
      function i(e) {
        _classCallCheck(this, i);

        this.timeline_str = e, this.timeline_parsed = [], this._now_str = "", this.i_nowloadstr = 0;
      }

      _createClass(i, [{
        key: "parse",
        value: function parse() {
          return this.timeline_parsed = this.lexicalAnalysis(), this.timeline_parsed;
        }
      }, {
        key: "lexicalAnalysis",
        value: function lexicalAnalysis() {
          var e = this.timeline_str,
              t = [],
              r = "";
          e = e.replaceAll(/\\(\n|$)/g, "");

          var n = function n(e, t) {
            return {
              type: e,
              value: t
            };
          };

          var _loop = function _loop(_i3) {
            var s = e[_i3],
                o = n("", s);

            var l = function l(e) {
              o.type = e;
            };

            switch (s) {
              case ",":
                l("commma");
                break;

              case "\n":
                l("new_line");
                break;

              case " ":
              case "　":
              case "\t":
                a();
                _i2 = _i3;
                return "continue";

              case "#":
                for (; _i3 < e.length; _i3++) {
                  if ("\n" === e[_i3]) {
                    _i3--;
                    _i2 = _i3;
                    return "continue|e";
                  }
                }

                _i2 = _i3;
                return "continue";

              case "{":
                l("braceL");
                break;

              case "}":
                l("braceR");
                break;

              case "[":
                l("bracketL");
                break;

              case "]":
                l("bracketR");
                break;

              case "<":
                l("angle_bracketL");
                break;

              case ">":
                l("angle_bracketR");
                break;

              case "(":
              case "(":
              case ")":
              case '"':
              case "'":
              case "!":
              case "$":
              case "%":
              case "&":
              case "=":
              case "^":
              case "~":
              case "*":
              case "?":
              case ";":
              case "`":
                l("reserved");
                break;

              default:
                r += s;
                _i2 = _i3;
                return "continue|e";
            }

            a(), t.push(o);
            _i2 = _i3;
          };

          e: for (var _i2 = 0; _i2 < e.length; _i2++) {
            var _ret = _loop(_i2);

            if (_ret === "continue") continue;
            if (_ret === "continue|e") continue e;
          }

          function a() {
            0 !== r.length && (t.push(n("word", r)), r = "");
          }

          return a(), t;
        }
      }]);

      return i;
    }();

    var s = new ( /*#__PURE__*/function () {
      function _class() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

        _classCallCheck(this, _class);

        this._href = e, this._urlAPI = new URL(this._href), this.autochange = t;
      }

      _createClass(_class, [{
        key: "getParam",
        value: function getParam(e) {
          return decodeURIComponent(this._urlAPI.searchParams.get(e) || "");
        }
      }, {
        key: "setParam",
        value: function setParam(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          this._urlAPI.searchParams.set(e, encodeURIComponent(t)), this.autochange && this._setURL(this._urlAPI.href);
        }
      }, {
        key: "hash",
        get: function get() {
          return this._urlAPI.hash;
        },
        set: function set(e) {
          this._setURL("#".concat(e));
        }
      }, {
        key: "href",
        get: function get() {
          return this._urlAPI.protocol + "//" + this._urlAPI.host + this._urlAPI.pathname + "?TL=" + encodeURIComponent(this.getParam("TL"));
        },
        set: function set(e) {
          this._urlAPI.href = e;
        }
      }, {
        key: "_setURL",
        value: function _setURL(e) {
          this.autochange && history.replaceState("", "", e);
        }
      }, {
        key: "_reflesh",
        value: function _reflesh() {
          this._urlAPI = new URL(this._href);
        }
      }]);

      return _class;
    }())(void 0, !1);

    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);

        this.current = new Array(), this.switchData = new Array(), this.cardData = new Array(), this.comment = new Array(), this.color = void 0, this.place_of_currentTimeline = 0;
      }

      _createClass(o, [{
        key: "move",
        value: function move(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ID_of_firstChara();
          var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (this.setColor(t, this.place_of_currentTimeline), t !== this.ID_of_firstChara() && !1 === r) throw new Error("最初のキャラ以外は操作できません");
          var n = this.get_chara_by_ID(t).timeline_OrderValue;
          var a = n + e - (n - this.OrderValue_of_firstChara());
          this.pushChara(t, a), this.nextturn();
        }
      }, {
        key: "setColor",
        value: function setColor(e, t) {
          this.color && (this.comment.push(["color", e, t, this.color]), this.color = void 0);
        }
      }, {
        key: "setChara",
        value: function setChara(e, t) {
          this.pushChara(e, t);
        }
      }, {
        key: "place_to_moved",
        value: function place_to_moved(e) {
          var t,
              r = -1;

          for (var _t3 = this.current.length - 1; _t3 > this.place_of_currentTimeline; _t3--) {
            if (e >= this.current[_t3].timeline_OrderValue) {
              r = _t3;
              break;
            }
          }

          return t = -1 === r ? this.place_of_currentTimeline + 1 : r + 1, t;
        }
      }, {
        key: "pushChara",
        value: function pushChara(e, t) {
          var r;

          try {
            n = this.get_chara_by_ID(e), r = JSON.parse(JSON.stringify(n));
          } catch (t) {
            r = {
              id: e
            };
          }

          var n;
          r.timeline_OrderValue = t;
          var a = this.place_to_moved(t);
          this.current.splice(a, 0, r);
        }
      }, {
        key: "addChara",
        value: function addChara(e, t) {
          var r = {
            id: e,
            timeline_OrderValue: t,
            type: "chara"
          };
          this.current.splice(this.place_of_currentTimeline, 0, r);
        }
      }, {
        key: "addSkillCard",
        value: function addSkillCard(e, t, r) {
          var n,
              a = !0;

          try {
            n = this.get_chara_by_ID(e);
          } catch (e) {
            a = !1;
          }

          if (a) {
            if (!n) throw Error("ここは実行されないはず");
            if ("skillcard" !== n.type) throw Error("指定された名前はスキルカードではありません");
            n.time = r, this.current[this.placeToChara(e)] = n;
          } else {
            var _n2 = this.OrderValue_of_firstChara() + t,
                _a2 = this.place_to_moved(_n2);

            this.current.splice(_a2, 0, {
              type: "skillcard",
              time: r,
              id: e,
              timeline_OrderValue: _n2,
              OrderValue: t
            }), this.cardData.push([this.place_of_currentTimeline, e]);
          }
        }
      }, {
        key: "switchChara",
        value: function switchChara(e, t) {
          this.switchData.push([this.place_of_currentTimeline, e, t]), this.setColor(e, this.place_of_currentTimeline), e === this.ID_of_firstChara() ? (this.current[this.placeToChara(e)].id = t, this.current[this.placeToChara(t)].timeline_OrderValue = this.OrderValue_of_firstChara()) : this.switchSupportChara(e, t);
        }
      }, {
        key: "switchSupportChara",
        value: function switchSupportChara(e, t) {
          this.current.splice(this.placeToChara(e), 1), this.addChara(t, this.OrderValue_of_firstChara());
        }
      }, {
        key: "inited",
        value: function inited() {
          this.current.sort(function (e, t) {
            var r = e.timeline_OrderValue,
                n = t.timeline_OrderValue;
            return r < n ? -1 : r > n ? 1 : 0;
          }), this.place_of_currentTimeline = 0;
        }
      }, {
        key: "firstChara",
        get: function get() {
          return this.current[this.place_of_currentTimeline];
        },
        set: function set(e) {
          throw Error("firstCharaにはセットできません");
        }
      }, {
        key: "OrderValue_of_firstChara",
        value: function OrderValue_of_firstChara() {
          return this.firstChara.timeline_OrderValue;
        }
      }, {
        key: "ID_of_firstChara",
        value: function ID_of_firstChara() {
          return this.firstChara.id;
        }
      }, {
        key: "nextturn",
        value: function nextturn() {
          var e;
          if (this.place_of_currentTimeline++, "skillcard" === (null === (e = this.firstChara) || void 0 === e ? void 0 : e.type)) if (this.firstChara.time--, 0 === this.firstChara.time) this.nextturn();else {
            if (this.firstChara.time < 0) throw Error("skillcardのtimeに0未満の数値");
            this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), !1);
          }
        }
      }, {
        key: "get_chara_by_ID",
        value: function get_chara_by_ID(e) {
          return this.current[this.placeToChara(e)];
        }
      }, {
        key: "placeToChara",
        value: function placeToChara(e) {
          for (var _t4 = this.place_of_currentTimeline; _t4 < this.current.length; _t4++) {
            if (this.current[_t4].id === e) return _t4;
          }

          throw Error("Not Found!IDに誤りがあります");
        }
      }]);

      return o;
    }();

    var l = /*#__PURE__*/function () {
      function l(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, l);

        this.id = e, this.SPD = t, this.SPD_buff = r, this.LoadFactorReduce = n;
      }

      _createClass(l, [{
        key: "calculateOrderValue",
        value: function calculateOrderValue(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var r = this.SPD,
              n = this.SPD_buff / 100;
          var a = Math.min(Math.max(124 - Math.floor(r / 2), 0), 100),
              i = Math.floor(a * (e / 100) * (1 - t) * (1 - n));
          return Math.max(Math.min(i, 500), 15);
        }
      }, {
        key: "initOrderValue",
        value: function initOrderValue() {
          return this.calculateOrderValue(100, 0);
        }
      }]);

      return l;
    }();

    var c, h;

    function d() {
      var e, n, d, u;

      var _ = document.getElementById("input_txt");

      var p;
      if (!_) throw t;
      p = _.value, s.setParam("TL", p), h = {
        main: [],
        set: []
      };
      var f = {},
          w = new o(),
          v = {};
      var b = document.getElementById("error"),
          g = document.getElementById("info");
      if (!b || !g) throw t;
      var k;
      b.innerHTML = "", g.innerHTML = "";

      try {
        var _e6 = new i(p).parse();

        k = new a(_e6).parse();
      } catch (e) {
        throw b.innerHTML = e, e;
      }

      var y = "init",
          C = "start",
          x = "start_sort",
          E = "waiting_mode";
      var T = y;

      for (var _a3 = 0; _a3 < k.length; _a3++) {
        try {
          var I;

          (function () {
            var r = null === (e = k[_a3]) || void 0 === e ? void 0 : e[0],
                i = null === (n = k[_a3]) || void 0 === n ? void 0 : n[1],
                s = null === (d = k[_a3]) || void 0 === d ? void 0 : d[2],
                o = null === (u = k[_a3]) || void 0 === u ? void 0 : u[3];

            var c = void 0,
                _ = void 0,
                m = void 0,
                p = void 0,
                b = void 0,
                L = void 0,
                V = void 0,
                O = void 0;

            switch (T) {
              case y:
                switch (r) {
                  case "set":
                    c = i.toString(), _ = Number(s), m = Number(o) || 0, f[c] = new l(c, _, m), w.setChara(c, f[c].initOrderValue()), 0 === h.set.length ? h.set = [k[_a3]] : h.set.push(k[_a3]);
                    break;

                  case "start":
                    T = C, w.inited();
                    break;

                  case "start_sort":
                    T = x, w.inited();
                    break;

                  case "":
                    break;

                  default:
                    throw Error("need 'start'");
                }

                break;

              case C:
                I = k[_a3];
                if ("mv_ls" === I[0] || "move_list" === I[0]) throw Error("start_sort ~ end_sort内にmove_listを書いてください");
                S.apply(void 0, _toConsumableArray(I));
                break;

              case x:
                switch (r) {
                  case "move_list":
                  case "mv_ls":
                    c = i, b = s, v[c] = b;
                    break;

                  case "end_sort":
                    A(), T = E;
                    break;

                  case "":
                    break;

                  default:
                    throw Error("no command found:「" + r + "」");
                }

                break;

              case E:
                switch (r) {
                  case "start":
                    T = C;
                    break;

                  case "start_sort":
                    T = x;
                    break;

                  case "":
                    break;

                  default:
                    throw Error("need 'start'");
                }

                break;

              default:
                throw Error("内部エラー");
            }

            function A() {
              for (var e;;) {
                var _r3 = w.ID_of_firstChara();

                if (void 0 === (null === (e = v[_r3]) || void 0 === e ? void 0 : e[0])) {
                  var _ret2 = function () {
                    var e = {};

                    if (Object.keys(v).forEach(function (t) {
                      0 !== v[t].length && (e[t] = v[t]);
                    }), 0 !== Object.keys(e).length) {
                      if (!g) throw t;
                      g.insertAdjacentText("beforeend", "ⓘinfo :move_listに使われていないスキルがあります:" + JSON.stringify(Object.fromEntries(Object.entries(e).map(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            e = _ref2[0],
                            t = _ref2[1];

                        return [e, t.map(function (e) {
                          return 1 === e.value.length && (e.value = e.value[0]), e.value;
                        })];
                      }))).replaceAll('"', ""));
                    }

                    return "break";
                  }();

                  if (_ret2 === "break") break;
                }

                var _n3 = v[_r3].shift();

                if (!_n3) throw Error("内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。");

                try {
                  if ("order" === _n3.mode) {
                    var _n3$value = _slicedToArray(_n3.value, 1),
                        _e7 = _n3$value[0],
                        _t5 = _e7.match(/^[a-zA-Z]/g),
                        _a4 = _e7.match(/\d+/g);

                    if (_t5 && S("color", _t5[0]), !_a4) throw Error("硬直が見つかりませんでした");
                    S("order", _r3, _a4[0]);
                  } else if ("action" === _n3.mode) {
                    var _n3$value2 = _slicedToArray(_n3.value, 1),
                        _e8 = _n3$value2[0],
                        _t6 = _e8.match(/^[a-zA-Z]/g),
                        _a5 = _e8.match(/\d+/g);

                    if (_t6 && S("color", _t6[0]), !_a5) throw Error("硬直値が見つかりませんでした");
                    S("action", _r3, _a5[0]);
                  } else if ("switch" === _n3.mode) {
                    var _n3$value3 = _slicedToArray(_n3.value, 3),
                        _e9 = _n3$value3[0],
                        _t7 = _n3$value3[1],
                        _a6 = _n3$value3[2];

                    S("switch", _r3, _e9, _t7, _a6 || "0"), v[_e9] = v[_r3], v[_r3] = [];
                  } else {
                    if ("command" !== _n3.mode) throw Error("テキストのパースエラー");
                    S.apply(void 0, _toConsumableArray(_n3.value));
                  }
                } catch (e) {
                  throw Error(e + ":  " + JSON.stringify(_n3.value) + " ");
                }
              }
            }

            function S() {
              for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
                e[_key] = arguments[_key];
              }

              var t = e[0],
                  r = e[1],
                  n = e[2],
                  a = e[3],
                  i = e[4];
              var s, o;

              switch ("" !== t && "end" !== t && (0 === h.main.length ? h.main = [e.filter(function (e) {
                return e || "0" === e;
              })] : h.main.push(e.filter(function (e) {
                return e || "0" === e;
              }))), t) {
                case "buffset":
                case "b":
                  s = r, o = Number(n) || 0, f[s].SPD_buff = o;
                  break;

                case "buffadd":
                case "b+":
                  s = r, o = Number(n) || 0, f[s].SPD_buff += o;
                  break;

                case "buffminus":
                case "b-":
                  s = r, o = Number(n) || 0, f[s].SPD_buff -= o;
                  break;

                case "add":
                case "a":
                  s = r, _ = Number(n), o = Number(a) || 0, f[s] = new l(s, _, o), w.addChara(s, f[s].initOrderValue());
                  break;

                case "move":
                case "m":
                  p = Number(r), s = n;

                  var _e10 = "true" === a;

                  w.move(f[w.ID_of_firstChara()].calculateOrderValue(p), s, _e10);
                  break;

                case "action":
                case "ac":
                  s = r, p = Number(n);

                  var _t8 = "true" === a;

                  w.move(f[w.ID_of_firstChara()].calculateOrderValue(p), s, _t8);
                  break;

                case "order":
                  s = r, O = Number(n), w.move(O, s, !1);
                  break;

                case "switch":
                case "sw":
                  L = r, V = n, _ = Number(a), o = Number(i) || 0, w.switchChara(L, V), f[V] = new l(V, _, o);
                  break;

                case "color":
                case "c":
                  var c = r;
                  w.color = c;
                  break;

                case "skillcard":
                case "sc":
                  var d = r,
                      u = Number(n);
                  p = Number(a);
                  var m = Number(i),
                      v = new l(d, u, 0);
                  f[d] = v, w.addSkillCard(d, v.calculateOrderValue(p), m);
                  break;

                case "end":
                  T = E;
                  break;

                case "":
                  break;

                default:
                  throw Error("no command found");
              }
            }
          })();
        } catch (e) {
          b.appendChild(r("br")), b.insertAdjacentText("beforeend", e);
          break;
        }
      }

      var L = [];

      for (var _e11 in f) {
        L.push(_e11);
      }

      var V = Array.from(new Array(Object.keys(f).length), function () {
        return new Array(w.current.length).fill(void 0);
      });
      w.current.forEach(function (e, t) {
        var r = e.id,
            n = e.timeline_OrderValue,
            a = L.indexOf(r);
        V[a][t] = n;
      }), w.switchData.forEach(function (e) {
        var _e12 = _slicedToArray(e, 3),
            t = _e12[0],
            r = _e12[1],
            n = _e12[2];

        var a = L.indexOf(r),
            i = "";
        i = a < L.indexOf(n) ? "↓↓" : "↑↑", V[a][t] = i;
      }), w.cardData.forEach(function (e) {
        var t = L.indexOf(e[1]);
        V[t][e[0]] = "→";
      });
      var O = w.place_of_currentTimeline + 1,
          A = document.getElementById("firstchara");
      A && (A.innerText = w.ID_of_firstChara());
      var S = document.getElementById("now_place");
      S && (S.innerText = String(O)), c = [V, L], function (e, n, a, i) {
        var s = r("thead"),
            o = r("tr");

        for (var _t9 = 0; _t9 <= e[0].length; _t9++) {
          var _e13 = void 0;

          _e13 = _t9 === i ? r("th", _t9.toString(), "now_place") : 0 === _t9 ? r("th", "", "nowrap") : r("th", _t9.toString()), o.appendChild(_e13);
        }

        s.appendChild(o);

        var _loop2 = function _loop2(_t10) {
          var i = r("tr");
          i.appendChild(r("td", n[_t10], "nowrap"));

          var _loop3 = function _loop3(_s2) {
            var o = void 0;
            var l = a.find(function (e) {
              return "color" === e[0] && e[1] === n[_t10] && e[2] === _s2;
            });
            var c = void 0,
                h = e[_t10][_s2];
            c = "string" == typeof h ? h : "number" == typeof h ? String(h) : "", o = l ? r("td", c, "color-" + l[3]) : r("td", c), i.appendChild(o);
          };

          for (var _s2 = 0; _s2 < e[0].length; _s2++) {
            _loop3(_s2);
          }

          s.appendChild(i);
        };

        for (var _t10 = 0; _t10 < e.length; _t10++) {
          _loop2(_t10);
        }

        var l = document.querySelector("table");
        if (!l) throw t;
        l.innerHTML = "", l.appendChild(s);
      }(V, L, w.comment, O), m();
    }

    function u() {
      var _c = c,
          _c2 = _slicedToArray(_c, 2),
          e = _c2[0],
          t = _c2[1];

      var r = "";

      for (var _t11 = 0; _t11 < e[0].length; _t11++) {
        r += "," + (_t11 + 1);
      }

      r += "\n";

      for (var _n4 = 0; _n4 < e.length; _n4++) {
        r += t[_n4];

        for (var _t12 = 0; _t12 < e[0].length; _t12++) {
          r += ",", r += e[_n4][_t12] || "";
        }

        r += "\n";
      }

      !function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "timeline.csv";
        var r = new Uint8Array([239, 187, 191]),
            n = new Blob([r, e], {
          type: "text/csv"
        }),
            a = URL.createObjectURL(n),
            i = document.createElement("a");
        i.href = a, i.download = t, i.style.display = "none", document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(a);
      }(r);
    }

    function _() {
      n(s.href);
      var e = document.getElementById("copyed");
      if (!e) throw t;
      e.style.display = "block", setTimeout(function () {
        e.style.display = "none";
      }, 1e3);
    }

    function m() {
      var e = document.getElementById("popup");
      if (!e) throw t;
      e.innerText = f();
    }

    function p() {
      n(f());
      var e = document.getElementById("copyed_popup");
      if (!e) throw t;
      e.style.display = "block", setTimeout(function () {
        e.style.display = "none";
      }, 1e3);
    }

    function f() {
      return h.set.map(function (e) {
        return e.join(" ");
      }).join("\n") + "\n\nstart\n" + h.main.map(function (e) {
        return "  " + e.join(" ");
      }).join("\n") + "\nend";
    }

    e.onload = function () {
      var r = document.getElementById("input_txt");
      if (!r) throw t;
      var a = s.getParam("TL");
      null !== typeof a && (r.textContent = a), r.oninput = d;
      var i = document.getElementById("csvDownload");
      i && (i.onclick = u);
      var o = document.getElementById("copyTL");
      o && (o.onclick = _);
      var l = document.getElementById("log_convertedTL");
      l && (l.onclick = m);
      var c = document.getElementById("copy_ConvertedTL");
      c && (c.onclick = p);
      var h = document.getElementById("jumpTwitter");
      h && (h.onclick = function () {
        e.open("https://twitter.com/Y52en/status/1402239605978517505?s=20", "_blank");
      });
      var f = document.getElementById("unzipMoveList");
      f && (f.onclick = function () {
        var e = document.getElementById("pop11");
        e && (e.checked = !0);
      });
      var w = document.getElementById("isSet_onbeforeunload");
      if (!w) throw t;
      e.onbeforeunload = function (e) {
        0 !== r.value.length && w.checked && (e.preventDefault(), e.returnValue = "ページから離れますか？");
      }, r.addEventListener("keydown", function (e) {
        if ("c" === e.key && e.ctrlKey) {
          var _e14 = r.selectionStart;

          if (_e14 === r.selectionEnd) {
            var _t13 = r.value;

            var _a7 = "^(.*\\n){" + _toConsumableArray(_t13.slice(0, _e14).matchAll(/\n/g)).length + "}";

            return n(_t13.replace(new RegExp(_a7 + "(.*)($|[\\s\\S]*$)"), "$2")), !1;
          }
        }

        return !0;
      }), r.addEventListener("keydown", function (e) {
        if ("/" === e.key && e.ctrlKey) {
          var _e15 = r.selectionStart,
              _t14 = r.selectionEnd,
              _n5 = r.value;

          var _a8 = _toConsumableArray(_n5.slice(0, _e15).matchAll(/\n/g)).length,
              _i4 = _toConsumableArray(_n5.slice(0, _t14).matchAll(/\n/g)).length;

          for (var _r4 = _a8; _r4 <= _i4; _r4++) {
            var _i5 = "^(.*\n){" + _r4 + "}";

            new RegExp(_i5 + "( )*#").test(_n5) ? (_n5 = _n5.replace(new RegExp("(" + _i5 + "( )*)#"), "$1"), _r4 === _a8 && _e15--, _t14--) : (_n5 = _n5.replace(new RegExp("(" + _i5 + ")"), "$1#"), _r4 === _a8 && _e15++, _t14++);
          }

          r.value = _n5, r.setSelectionRange(_e15, _t14), d();
        }
      }), r.addEventListener("keydown", function (e) {
        if (("[" === e.key || "]" === e.key) && e.ctrlKey) {
          var _t15 = r.selectionStart,
              _n6 = r.selectionEnd,
              _a9 = r.value;

          var _i6 = _toConsumableArray(_a9.slice(0, _t15).matchAll(/\n/g)).length,
              _s3 = _toConsumableArray(_a9.slice(0, _n6).matchAll(/\n/g)).length;

          for (var _r5 = _i6; _r5 <= _s3; _r5++) {
            var _s4 = "^(.*\n){" + _r5 + "}",
                _o = _a9;

            "[" === e.key ? (_a9 = _a9.replace(new RegExp("(" + _s4 + ") "), "$1"), _o !== _a9 && (_r5 === _i6 && _t15--, _n6--)) : (_a9 = _a9.replace(new RegExp("(" + _s4 + ")"), "$1 "), _o !== _a9 && (_r5 === _i6 && _t15++, _n6++));
          }

          r.value = _a9, r.setSelectionRange(_t15, _n6), d();
        }
      }), d();
    };
  })(window);
})();
