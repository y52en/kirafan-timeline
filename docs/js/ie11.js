"use strict";

var _excluded = ["id"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e16) { throw _e16; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e17) { didErr = true; err = _e17; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  var e = {
    4504: function _(e, t, n) {
      !function (e) {
        "use strict";

        var t = {},
            n = /[^\s\u00a0]/,
            r = e.Pos,
            i = e.cmpPos;

        function o(e) {
          var t = e.search(n);
          return -1 == t ? 0 : t;
        }

        function s(e, t) {
          var n = e.getMode();
          return !1 !== n.useInnerComments && n.innerMode ? e.getModeAt(t) : n;
        }

        e.commands.toggleComment = function (e) {
          e.toggleComment();
        }, e.defineExtension("toggleComment", function (e) {
          e || (e = t);

          for (var n = this, i = 1 / 0, o = this.listSelections(), s = null, a = o.length - 1; a >= 0; a--) {
            var l = o[a].from(),
                c = o[a].to();
            l.line >= i || (c.line >= i && (c = r(i, 0)), i = l.line, null == s ? n.uncomment(l, c, e) ? s = "un" : (n.lineComment(l, c, e), s = "line") : "un" == s ? n.uncomment(l, c, e) : n.lineComment(l, c, e));
          }
        }), e.defineExtension("lineComment", function (e, i, a) {
          a || (a = t);
          var l,
              c,
              u = this,
              d = s(u, e),
              h = u.getLine(e.line);

          if (null != h && (l = e, c = h, !/\bstring\b/.test(u.getTokenTypeAt(r(l.line, 0))) || /^[\'\"\`]/.test(c))) {
            var f = a.lineComment || d.lineComment;

            if (f) {
              var p = Math.min(0 != i.ch || i.line == e.line ? i.line + 1 : i.line, u.lastLine() + 1),
                  m = null == a.padding ? " " : a.padding,
                  g = a.commentBlankLines || e.line == i.line;
              u.operation(function () {
                if (a.indent) {
                  for (var t = null, i = e.line; i < p; ++i) {
                    var s = (l = u.getLine(i)).slice(0, o(l));
                    (null == t || t.length > s.length) && (t = s);
                  }

                  for (i = e.line; i < p; ++i) {
                    var l = u.getLine(i),
                        c = t.length;
                    (g || n.test(l)) && (l.slice(0, c) != t && (c = o(l)), u.replaceRange(t + f + m, r(i, 0), r(i, c)));
                  }
                } else for (i = e.line; i < p; ++i) {
                  (g || n.test(u.getLine(i))) && u.replaceRange(f + m, r(i, 0));
                }
              });
            } else (a.blockCommentStart || d.blockCommentStart) && (a.fullLines = !0, u.blockComment(e, i, a));
          }
        }), e.defineExtension("blockComment", function (e, o, a) {
          a || (a = t);
          var l = this,
              c = s(l, e),
              u = a.blockCommentStart || c.blockCommentStart,
              d = a.blockCommentEnd || c.blockCommentEnd;

          if (u && d) {
            if (!/\bcomment\b/.test(l.getTokenTypeAt(r(e.line, 0)))) {
              var h = Math.min(o.line, l.lastLine());
              h != e.line && 0 == o.ch && n.test(l.getLine(h)) && --h;
              var f = null == a.padding ? " " : a.padding;
              e.line > h || l.operation(function () {
                if (0 != a.fullLines) {
                  var t = n.test(l.getLine(h));
                  l.replaceRange(f + d, r(h)), l.replaceRange(u + f, r(e.line, 0));
                  var s = a.blockCommentLead || c.blockCommentLead;
                  if (null != s) for (var p = e.line + 1; p <= h; ++p) {
                    (p != h || t) && l.replaceRange(s + f, r(p, 0));
                  }
                } else {
                  var m = 0 == i(l.getCursor("to"), o),
                      g = !l.somethingSelected();
                  l.replaceRange(d, o), m && l.setSelection(g ? o : l.getCursor("from"), o), l.replaceRange(u, e);
                }
              });
            }
          } else (a.lineComment || c.lineComment) && 0 != a.fullLines && l.lineComment(e, o, a);
        }), e.defineExtension("uncomment", function (e, i, o) {
          o || (o = t);
          var a,
              l = this,
              c = s(l, e),
              u = Math.min(0 != i.ch || i.line == e.line ? i.line : i.line - 1, l.lastLine()),
              d = Math.min(e.line, u),
              h = o.lineComment || c.lineComment,
              f = [],
              p = null == o.padding ? " " : o.padding;

          e: if (h) {
            for (var m = d; m <= u; ++m) {
              var g = l.getLine(m),
                  v = g.indexOf(h);
              if (v > -1 && !/comment/.test(l.getTokenTypeAt(r(m, v + 1))) && (v = -1), -1 == v && n.test(g)) break e;
              if (v > -1 && n.test(g.slice(0, v))) break e;
              f.push(g);
            }

            if (l.operation(function () {
              for (var e = d; e <= u; ++e) {
                var t = f[e - d],
                    n = t.indexOf(h),
                    i = n + h.length;
                n < 0 || (t.slice(i, i + p.length) == p && (i += p.length), a = !0, l.replaceRange("", r(e, n), r(e, i)));
              }
            }), a) return !0;
          }

          var y = o.blockCommentStart || c.blockCommentStart,
              b = o.blockCommentEnd || c.blockCommentEnd;
          if (!y || !b) return !1;
          var x = o.blockCommentLead || c.blockCommentLead,
              w = l.getLine(d),
              C = w.indexOf(y);
          if (-1 == C) return !1;

          var k = u == d ? w : l.getLine(u),
              S = k.indexOf(b, u == d ? C + y.length : 0),
              _ = r(d, C + 1),
              T = r(u, S + 1);

          if (-1 == S || !/comment/.test(l.getTokenTypeAt(_)) || !/comment/.test(l.getTokenTypeAt(T)) || l.getRange(_, T, "\n").indexOf(b) > -1) return !1;
          var M = w.lastIndexOf(y, e.ch),
              L = -1 == M ? -1 : w.slice(0, e.ch).indexOf(b, M + y.length);
          if (-1 != M && -1 != L && L + b.length != e.ch) return !1;
          L = k.indexOf(b, i.ch);
          var O = k.slice(i.ch).lastIndexOf(y, L - i.ch);
          return M = -1 == L || -1 == O ? -1 : i.ch + O, (-1 == L || -1 == M || M == i.ch) && (l.operation(function () {
            l.replaceRange("", r(u, S - (p && k.slice(S - p.length, S) == p ? p.length : 0)), r(u, S + b.length));
            var e = C + y.length;
            if (p && w.slice(e, e + p.length) == p && (e += p.length), l.replaceRange("", r(d, C), r(d, e)), x) for (var t = d + 1; t <= u; ++t) {
              var i = l.getLine(t),
                  o = i.indexOf(x);

              if (-1 != o && !n.test(i.slice(0, o))) {
                var s = o + x.length;
                p && i.slice(s, s + p.length) == p && (s += p.length), l.replaceRange("", r(t, o), r(t, s));
              }
            }
          }), !0);
        });
      }(n(4631));
    },
    2801: function _(e, t, n) {
      !function (e) {
        var t = {
          pairs: "()[]{}''\"\"",
          closeBefore: ")]}'\":;>",
          triples: "",
          explode: "[]{}"
        },
            n = e.Pos;

        function r(e, n) {
          return "pairs" == n && "string" == typeof e ? e : "object" == _typeof(e) && null != e[n] ? e[n] : t[n];
        }

        e.defineOption("autoCloseBrackets", !1, function (t, n, s) {
          s && s != e.Init && (t.removeKeyMap(i), t.state.closeBrackets = null), n && (o(r(n, "pairs")), t.state.closeBrackets = n, t.addKeyMap(i));
        });
        var i = {
          Backspace: function Backspace(t) {
            var i = a(t);
            if (!i || t.getOption("disableInput")) return e.Pass;

            for (var o = r(i, "pairs"), s = t.listSelections(), l = 0; l < s.length; l++) {
              if (!s[l].empty()) return e.Pass;
              var c = u(t, s[l].head);
              if (!c || o.indexOf(c) % 2 != 0) return e.Pass;
            }

            for (l = s.length - 1; l >= 0; l--) {
              var d = s[l].head;
              t.replaceRange("", n(d.line, d.ch - 1), n(d.line, d.ch + 1), "+delete");
            }
          },
          Enter: function Enter(t) {
            var n = a(t),
                i = n && r(n, "explode");
            if (!i || t.getOption("disableInput")) return e.Pass;

            for (var o = t.listSelections(), s = 0; s < o.length; s++) {
              if (!o[s].empty()) return e.Pass;
              var c = u(t, o[s].head);
              if (!c || i.indexOf(c) % 2 != 0) return e.Pass;
            }

            t.operation(function () {
              var e = t.lineSeparator() || "\n";
              t.replaceSelection(e + e, null), l(t, -1), o = t.listSelections();

              for (var n = 0; n < o.length; n++) {
                var r = o[n].head.line;
                t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0);
              }
            });
          }
        };

        function o(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e.charAt(t),
                r = "'" + n + "'";
            i[r] || (i[r] = s(n));
          }
        }

        function s(t) {
          return function (i) {
            return function (t, i) {
              var o = a(t);
              if (!o || t.getOption("disableInput")) return e.Pass;
              var s = r(o, "pairs"),
                  u = s.indexOf(i);
              if (-1 == u) return e.Pass;

              for (var h, f = r(o, "closeBefore"), p = r(o, "triples"), m = s.charAt(u + 1) == i, g = t.listSelections(), v = u % 2 == 0, y = 0; y < g.length; y++) {
                var b,
                    x = g[y],
                    w = x.head,
                    C = t.getRange(w, n(w.line, w.ch + 1));
                if (v && !x.empty()) b = "surround";else if (!m && v || C != i) {
                  if (m && w.ch > 1 && p.indexOf(i) >= 0 && t.getRange(n(w.line, w.ch - 2), w) == i + i) {
                    if (w.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(w.line, w.ch - 2)))) return e.Pass;
                    b = "addFour";
                  } else if (m) {
                    var k = 0 == w.ch ? " " : t.getRange(n(w.line, w.ch - 1), w);
                    if (e.isWordChar(C) || k == i || e.isWordChar(k)) return e.Pass;
                    b = "both";
                  } else {
                    if (!v || !(0 === C.length || /\s/.test(C) || f.indexOf(C) > -1)) return e.Pass;
                    b = "both";
                  }
                } else b = m && d(t, w) ? "both" : p.indexOf(i) >= 0 && t.getRange(w, n(w.line, w.ch + 3)) == i + i + i ? "skipThree" : "skip";

                if (h) {
                  if (h != b) return e.Pass;
                } else h = b;
              }

              var S = u % 2 ? s.charAt(u - 1) : i,
                  _ = u % 2 ? i : s.charAt(u + 1);

              t.operation(function () {
                if ("skip" == h) l(t, 1);else if ("skipThree" == h) l(t, 3);else if ("surround" == h) {
                  for (var e = t.getSelections(), n = 0; n < e.length; n++) {
                    e[n] = S + e[n] + _;
                  }

                  for (t.replaceSelections(e, "around"), e = t.listSelections().slice(), n = 0; n < e.length; n++) {
                    e[n] = c(e[n]);
                  }

                  t.setSelections(e);
                } else "both" == h ? (t.replaceSelection(S + _, null), t.triggerElectric(S + _), l(t, -1)) : "addFour" == h && (t.replaceSelection(S + S + S + S, "before"), l(t, 1));
              });
            }(i, t);
          };
        }

        function a(e) {
          var t = e.state.closeBrackets;
          return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t;
        }

        function l(e, t) {
          for (var n = [], r = e.listSelections(), i = 0, o = 0; o < r.length; o++) {
            var s = r[o];
            s.head == e.getCursor() && (i = o);
            var a = s.head.ch || t > 0 ? {
              line: s.head.line,
              ch: s.head.ch + t
            } : {
              line: s.head.line - 1
            };
            n.push({
              anchor: a,
              head: a
            });
          }

          e.setSelections(n, i);
        }

        function c(t) {
          var r = e.cmpPos(t.anchor, t.head) > 0;
          return {
            anchor: new n(t.anchor.line, t.anchor.ch + (r ? -1 : 1)),
            head: new n(t.head.line, t.head.ch + (r ? 1 : -1))
          };
        }

        function u(e, t) {
          var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
          return 2 == r.length ? r : null;
        }

        function d(e, t) {
          var r = e.getTokenAt(n(t.line, t.ch + 1));
          return /\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)));
        }

        o(t.pairs + "`");
      }(n(4631));
    },
    1707: function _(e, t, n) {
      !function (e) {
        "use strict";

        function t(e, t) {
          if (this.cm = e, this.options = t, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
            var n = this;
            e.on("cursorActivity", this.activityFunc = function () {
              n.cursorActivity();
            });
          }
        }

        e.showHint = function (e, t, n) {
          if (!t) return e.showHint(n);
          n && n.async && (t.async = !0);
          var r = {
            hint: t
          };
          if (n) for (var i in n) {
            r[i] = n[i];
          }
          return e.showHint(r);
        }, e.defineExtension("showHint", function (n) {
          n = function (e, t, n) {
            var r = e.options.hintOptions,
                i = {};

            for (var o in l) {
              i[o] = l[o];
            }

            if (r) for (var o in r) {
              void 0 !== r[o] && (i[o] = r[o]);
            }
            if (n) for (var o in n) {
              void 0 !== n[o] && (i[o] = n[o]);
            }
            return i.hint.resolve && (i.hint = i.hint.resolve(e, t)), i;
          }(this, this.getCursor("start"), n);

          var r = this.listSelections();

          if (!(r.length > 1)) {
            if (this.somethingSelected()) {
              if (!n.hint.supportsSelection) return;

              for (var i = 0; i < r.length; i++) {
                if (r[i].head.line != r[i].anchor.line) return;
              }
            }

            this.state.completionActive && this.state.completionActive.close();
            var o = this.state.completionActive = new t(this, n);
            o.options.hint && (e.signal(this, "startCompletion", this), o.update(!0));
          }
        }), e.defineExtension("closeHint", function () {
          this.state.completionActive && this.state.completionActive.close();
        });

        var n = window.requestAnimationFrame || function (e) {
          return setTimeout(e, 1e3 / 60);
        },
            r = window.cancelAnimationFrame || clearTimeout;

        function i(e) {
          return "string" == typeof e ? e : e.text;
        }

        function o(e, t) {
          for (; t && t != e;) {
            if ("LI" === t.nodeName.toUpperCase() && t.parentNode == e) return t;
            t = t.parentNode;
          }
        }

        function s(t, n) {
          this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = t, this.data = n, this.picked = !1;
          var r = this,
              s = t.cm,
              a = s.getInputField().ownerDocument,
              l = a.defaultView || a.parentWindow,
              c = this.hints = a.createElement("ul");
          c.setAttribute("role", "listbox"), c.setAttribute("aria-expanded", "true"), c.id = this.id;
          var u = t.cm.options.theme;
          c.className = "CodeMirror-hints " + u, this.selectedHint = n.selectedHint || 0;

          for (var d = n.list, h = 0; h < d.length; ++h) {
            var f = c.appendChild(a.createElement("li")),
                p = d[h],
                m = "CodeMirror-hint" + (h != this.selectedHint ? "" : " CodeMirror-hint-active");
            null != p.className && (m = p.className + " " + m), f.className = m, h == this.selectedHint && f.setAttribute("aria-selected", "true"), f.id = this.id + "-" + h, f.setAttribute("role", "option"), p.render ? p.render(f, n, p) : f.appendChild(a.createTextNode(p.displayText || i(p))), f.hintId = h;
          }

          var g = t.options.container || a.body,
              v = s.cursorCoords(t.options.alignWithWord ? n.from : null),
              y = v.left,
              b = v.bottom,
              x = !0,
              w = 0,
              C = 0;

          if (g !== a.body) {
            var k = -1 !== ["absolute", "relative", "fixed"].indexOf(l.getComputedStyle(g).position) ? g : g.offsetParent,
                S = k.getBoundingClientRect(),
                _ = a.body.getBoundingClientRect();

            w = S.left - _.left - k.scrollLeft, C = S.top - _.top - k.scrollTop;
          }

          c.style.left = y - w + "px", c.style.top = b - C + "px";
          var T = l.innerWidth || Math.max(a.body.offsetWidth, a.documentElement.offsetWidth),
              M = l.innerHeight || Math.max(a.body.offsetHeight, a.documentElement.offsetHeight);
          g.appendChild(c), s.getInputField().setAttribute("aria-autocomplete", "list"), s.getInputField().setAttribute("aria-owns", this.id), s.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
          var L,
              O = t.options.moveOnOverlap ? c.getBoundingClientRect() : new DOMRect(),
              A = !!t.options.paddingForScrollbar && c.scrollHeight > c.clientHeight + 1;

          if (setTimeout(function () {
            L = s.getScrollInfo();
          }), O.bottom - M > 0) {
            var N = O.bottom - O.top;
            if (v.top - (v.bottom - O.top) - N > 0) c.style.top = (b = v.top - N - C) + "px", x = !1;else if (N > M) {
              c.style.height = M - 5 + "px", c.style.top = (b = v.bottom - O.top - C) + "px";
              var E = s.getCursor();
              n.from.ch != E.ch && (v = s.cursorCoords(E), c.style.left = (y = v.left - w) + "px", O = c.getBoundingClientRect());
            }
          }

          var D,
              P = O.right - T;
          if (A && (P += s.display.nativeBarWidth), P > 0 && (O.right - O.left > T && (c.style.width = T - 5 + "px", P -= O.right - O.left - T), c.style.left = (y = v.left - P - w) + "px"), A) for (var I = c.firstChild; I; I = I.nextSibling) {
            I.style.paddingRight = s.display.nativeBarWidth + "px";
          }
          s.addKeyMap(this.keyMap = function (e, t) {
            var n = {
              Up: function Up() {
                t.moveFocus(-1);
              },
              Down: function Down() {
                t.moveFocus(1);
              },
              PageUp: function PageUp() {
                t.moveFocus(1 - t.menuSize(), !0);
              },
              PageDown: function PageDown() {
                t.moveFocus(t.menuSize() - 1, !0);
              },
              Home: function Home() {
                t.setFocus(0);
              },
              End: function End() {
                t.setFocus(t.length - 1);
              },
              Enter: t.pick,
              Tab: t.pick,
              Esc: t.close
            };
            /Mac/.test(navigator.platform) && (n["Ctrl-P"] = function () {
              t.moveFocus(-1);
            }, n["Ctrl-N"] = function () {
              t.moveFocus(1);
            });
            var r = e.options.customKeys,
                i = r ? {} : n;

            function o(e, r) {
              var o;
              o = "string" != typeof r ? function (e) {
                return r(e, t);
              } : n.hasOwnProperty(r) ? n[r] : r, i[e] = o;
            }

            if (r) for (var s in r) {
              r.hasOwnProperty(s) && o(s, r[s]);
            }
            var a = e.options.extraKeys;
            if (a) for (var s in a) {
              a.hasOwnProperty(s) && o(s, a[s]);
            }
            return i;
          }(t, {
            moveFocus: function moveFocus(e, t) {
              r.changeActive(r.selectedHint + e, t);
            },
            setFocus: function setFocus(e) {
              r.changeActive(e);
            },
            menuSize: function menuSize() {
              return r.screenAmount();
            },
            length: d.length,
            close: function close() {
              t.close();
            },
            pick: function pick() {
              r.pick();
            },
            data: n
          })), t.options.closeOnUnfocus && (s.on("blur", this.onBlur = function () {
            D = setTimeout(function () {
              t.close();
            }, 100);
          }), s.on("focus", this.onFocus = function () {
            clearTimeout(D);
          })), s.on("scroll", this.onScroll = function () {
            var e = s.getScrollInfo(),
                n = s.getWrapperElement().getBoundingClientRect();
            L || (L = s.getScrollInfo());
            var r = b + L.top - e.top,
                i = r - (l.pageYOffset || (a.documentElement || a.body).scrollTop);
            if (x || (i += c.offsetHeight), i <= n.top || i >= n.bottom) return t.close();
            c.style.top = r + "px", c.style.left = y + L.left - e.left + "px";
          }), e.on(c, "dblclick", function (e) {
            var t = o(c, e.target || e.srcElement);
            t && null != t.hintId && (r.changeActive(t.hintId), r.pick());
          }), e.on(c, "click", function (e) {
            var n = o(c, e.target || e.srcElement);
            n && null != n.hintId && (r.changeActive(n.hintId), t.options.completeOnSingleClick && r.pick());
          }), e.on(c, "mousedown", function () {
            setTimeout(function () {
              s.focus();
            }, 20);
          });
          var W = this.getSelectedHintRange();
          return 0 === W.from && 0 === W.to || this.scrollToActive(), e.signal(n, "select", d[this.selectedHint], c.childNodes[this.selectedHint]), !0;
        }

        function a(e, t, n, r) {
          if (e.async) e(t, r, n);else {
            var i = e(t, n);
            i && i.then ? i.then(r) : r(i);
          }
        }

        t.prototype = {
          close: function close() {
            this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e.signal(this.data, "close"), this.widget && this.widget.close(), e.signal(this.cm, "endCompletion", this.cm));
          },
          active: function active() {
            return this.cm.state.completionActive == this;
          },
          pick: function pick(t, n) {
            var r = t.list[n],
                o = this;
            this.cm.operation(function () {
              r.hint ? r.hint(o.cm, t, r) : o.cm.replaceRange(i(r), r.from || t.from, r.to || t.to, "complete"), e.signal(t, "pick", r), o.cm.scrollIntoView();
            }), this.options.closeOnPick && this.close();
          },
          cursorActivity: function cursorActivity() {
            this.debounce && (r(this.debounce), this.debounce = 0);
            var e = this.startPos;
            this.data && (e = this.data.from);
            var t = this.cm.getCursor(),
                i = this.cm.getLine(t.line);
            if (t.line != this.startPos.line || i.length - t.ch != this.startLen - this.startPos.ch || t.ch < e.ch || this.cm.somethingSelected() || !t.ch || this.options.closeCharacters.test(i.charAt(t.ch - 1))) this.close();else {
              var o = this;
              this.debounce = n(function () {
                o.update();
              }), this.widget && this.widget.disable();
            }
          },
          update: function update(e) {
            if (null != this.tick) {
              var t = this,
                  n = ++this.tick;
              a(this.options.hint, this.cm, this.options, function (r) {
                t.tick == n && t.finishUpdate(r, e);
              });
            }
          },
          finishUpdate: function finishUpdate(t, n) {
            this.data && e.signal(this.data, "update");
            var r = this.widget && this.widget.picked || n && this.options.completeSingle;
            this.widget && this.widget.close(), this.data = t, t && t.list.length && (r && 1 == t.list.length ? this.pick(t, 0) : (this.widget = new s(this, t), e.signal(t, "shown")));
          }
        }, s.prototype = {
          close: function close() {
            if (this.completion.widget == this) {
              this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
              var e = this.completion.cm.getInputField();
              e.removeAttribute("aria-activedescendant"), e.removeAttribute("aria-owns");
              var t = this.completion.cm;
              this.completion.options.closeOnUnfocus && (t.off("blur", this.onBlur), t.off("focus", this.onFocus)), t.off("scroll", this.onScroll);
            }
          },
          disable: function disable() {
            this.completion.cm.removeKeyMap(this.keyMap);
            var e = this;
            this.keyMap = {
              Enter: function Enter() {
                e.picked = !0;
              }
            }, this.completion.cm.addKeyMap(this.keyMap);
          },
          pick: function pick() {
            this.completion.pick(this.data, this.selectedHint);
          },
          changeActive: function changeActive(t, n) {
            if (t >= this.data.list.length ? t = n ? this.data.list.length - 1 : 0 : t < 0 && (t = n ? 0 : this.data.list.length - 1), this.selectedHint != t) {
              var r = this.hints.childNodes[this.selectedHint];
              r && (r.className = r.className.replace(" CodeMirror-hint-active", ""), r.removeAttribute("aria-selected")), (r = this.hints.childNodes[this.selectedHint = t]).className += " CodeMirror-hint-active", r.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", r.id), this.scrollToActive(), e.signal(this.data, "select", this.data.list[this.selectedHint], r);
            }
          },
          scrollToActive: function scrollToActive() {
            var e = this.getSelectedHintRange(),
                t = this.hints.childNodes[e.from],
                n = this.hints.childNodes[e.to],
                r = this.hints.firstChild;
            t.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = t.offsetTop - r.offsetTop : n.offsetTop + n.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = n.offsetTop + n.offsetHeight - this.hints.clientHeight + r.offsetTop);
          },
          screenAmount: function screenAmount() {
            return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
          },
          getSelectedHintRange: function getSelectedHintRange() {
            var e = this.completion.options.scrollMargin || 0;
            return {
              from: Math.max(0, this.selectedHint - e),
              to: Math.min(this.data.list.length - 1, this.selectedHint + e)
            };
          }
        }, e.registerHelper("hint", "auto", {
          resolve: function resolve(t, n) {
            var r,
                i = t.getHelpers(n, "hint");

            if (i.length) {
              var o = function o(e, t, n) {
                var r = function (e, t) {
                  if (!e.somethingSelected()) return t;

                  for (var n = [], r = 0; r < t.length; r++) {
                    t[r].supportsSelection && n.push(t[r]);
                  }

                  return n;
                }(e, i);

                !function i(o) {
                  if (o == r.length) return t(null);
                  a(r[o], e, n, function (e) {
                    e && e.list.length > 0 ? t(e) : i(o + 1);
                  });
                }(0);
              };

              return o.async = !0, o.supportsSelection = !0, o;
            }

            return (r = t.getHelper(t.getCursor(), "hintWords")) ? function (t) {
              return e.hint.fromList(t, {
                words: r
              });
            } : e.hint.anyword ? function (t, n) {
              return e.hint.anyword(t, n);
            } : function () {};
          }
        }), e.registerHelper("hint", "fromList", function (t, n) {
          var r,
              i = t.getCursor(),
              o = t.getTokenAt(i),
              s = e.Pos(i.line, o.start),
              a = i;
          o.start < i.ch && /\w/.test(o.string.charAt(i.ch - o.start - 1)) ? r = o.string.substr(0, i.ch - o.start) : (r = "", s = i);

          for (var l = [], c = 0; c < n.words.length; c++) {
            var u = n.words[c];
            u.slice(0, r.length) == r && l.push(u);
          }

          if (l.length) return {
            list: l,
            from: s,
            to: a
          };
        }), e.commands.autocomplete = e.showHint;
        var l = {
          hint: e.hint.auto,
          completeSingle: !0,
          alignWithWord: !0,
          closeCharacters: /[\s()\[\]{};:>,]/,
          closeOnPick: !0,
          closeOnUnfocus: !0,
          updateOnCursorActivity: !0,
          completeOnSingleClick: !0,
          container: null,
          customKeys: null,
          extraKeys: null,
          paddingForScrollbar: !0,
          moveOnOverlap: !0
        };
        e.defineOption("hintOptions", null);
      }(n(4631));
    },
    790: function _(e, t, n) {
      !function (e) {
        "use strict";

        function t(e, t) {
          if (!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode");
        }

        function n(e, t) {
          if (!e) return /(?:)/;
          var n = "";
          return e instanceof RegExp ? (e.ignoreCase && (n = "i"), e.unicode && (n += "u"), e = e.source) : e = String(e), new RegExp((!1 === t ? "" : "^") + "(?:" + e + ")", n);
        }

        function r(e, r) {
          (e.next || e.push) && t(r, e.next || e.push), this.regex = n(e.regex), this.token = function (e) {
            if (!e) return null;
            if (e.apply) return e;
            if ("string" == typeof e) return e.replace(/\./g, " ");

            for (var t = [], n = 0; n < e.length; n++) {
              t.push(e[n] && e[n].replace(/\./g, " "));
            }

            return t;
          }(e.token), this.data = e;
        }

        function i(e, t) {
          return function (n, r) {
            if (r.pending) {
              var i = r.pending.shift();
              return 0 == r.pending.length && (r.pending = null), n.pos += i.text.length, i.token;
            }

            if (r.local) {
              if (r.local.end && n.match(r.local.end)) {
                var o = r.local.endToken || null;
                return r.local = r.localState = null, o;
              }

              var a;
              return o = r.local.mode.token(n, r.localState), r.local.endScan && (a = r.local.endScan.exec(n.current())) && (n.pos = n.start + a.index), o;
            }

            for (var l = e[r.state], c = 0; c < l.length; c++) {
              var u = l[c],
                  d = (!u.data.sol || n.sol()) && n.match(u.regex);

              if (d) {
                u.data.next ? r.state = u.data.next : u.data.push ? ((r.stack || (r.stack = [])).push(r.state), r.state = u.data.push) : u.data.pop && r.stack && r.stack.length && (r.state = r.stack.pop()), u.data.mode && s(t, r, u.data.mode, u.token), u.data.indent && r.indent.push(n.indentation() + t.indentUnit), u.data.dedent && r.indent.pop();
                var h = u.token;

                if (h && h.apply && (h = h(d)), d.length > 2 && u.token && "string" != typeof u.token) {
                  for (var f = 2; f < d.length; f++) {
                    d[f] && (r.pending || (r.pending = [])).push({
                      text: d[f],
                      token: u.token[f - 1]
                    });
                  }

                  return n.backUp(d[0].length - (d[1] ? d[1].length : 0)), h[0];
                }

                return h && h.join ? h[0] : h;
              }
            }

            return n.next(), null;
          };
        }

        function o(e, t) {
          if (e === t) return !0;
          if (!e || "object" != _typeof(e) || !t || "object" != _typeof(t)) return !1;
          var n = 0;

          for (var r in e) {
            if (e.hasOwnProperty(r)) {
              if (!t.hasOwnProperty(r) || !o(e[r], t[r])) return !1;
              n++;
            }
          }

          for (var r in t) {
            t.hasOwnProperty(r) && n--;
          }

          return 0 == n;
        }

        function s(t, r, i, s) {
          var a;
          if (i.persistent) for (var l = r.persistentStates; l && !a; l = l.next) {
            (i.spec ? o(i.spec, l.spec) : i.mode == l.mode) && (a = l);
          }
          var c = a ? a.mode : i.mode || e.getMode(t, i.spec),
              u = a ? a.state : e.startState(c);
          i.persistent && !a && (r.persistentStates = {
            mode: c,
            spec: i.spec,
            state: u,
            next: r.persistentStates
          }), r.localState = u, r.local = {
            mode: c,
            end: i.end && n(i.end),
            endScan: i.end && !1 !== i.forceEnd && n(i.end, !1),
            endToken: s && s.join ? s[s.length - 1] : s
          };
        }

        function a(t, n) {
          return function (r, i, o) {
            if (r.local && r.local.mode.indent) return r.local.mode.indent(r.localState, i, o);
            if (null == r.indent || r.local || n.dontIndentStates && function (e, t) {
              for (var n = 0; n < t.length; n++) {
                if (t[n] === e) return !0;
              }
            }(r.state, n.dontIndentStates) > -1) return e.Pass;
            var s = r.indent.length - 1,
                a = t[r.state];

            e: for (;;) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];

                if (c.data.dedent && !1 !== c.data.dedentIfLineStart) {
                  var u = c.regex.exec(i);

                  if (u && u[0]) {
                    s--, (c.next || c.push) && (a = t[c.next || c.push]), i = i.slice(u[0].length);
                    continue e;
                  }
                }
              }

              break;
            }

            return s < 0 ? 0 : r.indent[s];
          };
        }

        e.defineSimpleMode = function (t, n) {
          e.defineMode(t, function (t) {
            return e.simpleMode(t, n);
          });
        }, e.simpleMode = function (n, o) {
          t(o, "start");
          var s = {},
              l = o.meta || {},
              c = !1;

          for (var u in o) {
            if (u != l && o.hasOwnProperty(u)) for (var d = s[u] = [], h = o[u], f = 0; f < h.length; f++) {
              var p = h[f];
              d.push(new r(p, o)), (p.indent || p.dedent) && (c = !0);
            }
          }

          var m = {
            startState: function startState() {
              return {
                state: "start",
                pending: null,
                local: null,
                localState: null,
                indent: c ? [] : null
              };
            },
            copyState: function copyState(t) {
              var n = {
                state: t.state,
                pending: t.pending,
                local: t.local,
                localState: null,
                indent: t.indent && t.indent.slice(0)
              };
              t.localState && (n.localState = e.copyState(t.local.mode, t.localState)), t.stack && (n.stack = t.stack.slice(0));

              for (var r = t.persistentStates; r; r = r.next) {
                n.persistentStates = {
                  mode: r.mode,
                  spec: r.spec,
                  state: r.state == t.localState ? n.localState : e.copyState(r.mode, r.state),
                  next: n.persistentStates
                };
              }

              return n;
            },
            token: i(s, n),
            innerMode: function innerMode(e) {
              return e.local && {
                mode: e.local.mode,
                state: e.localState
              };
            },
            indent: a(s, l)
          };
          if (l) for (var g in l) {
            l.hasOwnProperty(g) && (m[g] = l[g]);
          }
          return m;
        };
      }(n(4631));
    },
    4631: function _(e) {
      e.exports = function () {
        "use strict";

        var e = navigator.userAgent,
            t = navigator.platform,
            n = /gecko\/\d/i.test(e),
            r = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e),
            s = r || i || o,
            a = s && (r ? document.documentMode || 6 : +(o || i)[1]),
            l = !o && /WebKit\//.test(e),
            c = l && /Qt\/\d+\.\d+/.test(e),
            u = !o && /Chrome\//.test(e),
            d = /Opera\//.test(e),
            h = /Apple Computer/.test(navigator.vendor),
            f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            p = /PhantomJS/.test(e),
            m = h && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
            g = /Android/.test(e),
            v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            y = m || /Mac/.test(t),
            b = /\bCrOS\b/.test(e),
            x = /win/i.test(t),
            w = d && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && (d = !1, l = !0);
        var C = y && (c || d && (null == w || w < 12.11)),
            k = n || s && a >= 9;

        function S(e) {
          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
        }

        var _,
            T = function T(e, t) {
          var n = e.className,
              r = S(t).exec(n);

          if (r) {
            var i = n.slice(r.index + r[0].length);
            e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
          }
        };

        function M(e) {
          for (var t = e.childNodes.length; t > 0; --t) {
            e.removeChild(e.firstChild);
          }

          return e;
        }

        function L(e, t) {
          return M(e).appendChild(t);
        }

        function O(e, t, n, r) {
          var i = document.createElement(e);
          if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
            i.appendChild(t[o]);
          }
          return i;
        }

        function A(e, t, n, r) {
          var i = O(e, t, n, r);
          return i.setAttribute("role", "presentation"), i;
        }

        function N(e, t) {
          if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);

          do {
            if (11 == t.nodeType && (t = t.host), t == e) return !0;
          } while (t = t.parentNode);
        }

        function E() {
          var e;

          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }

          for (; e && e.shadowRoot && e.shadowRoot.activeElement;) {
            e = e.shadowRoot.activeElement;
          }

          return e;
        }

        function D(e, t) {
          var n = e.className;
          S(t).test(n) || (e.className += (n ? " " : "") + t);
        }

        function P(e, t) {
          for (var n = e.split(" "), r = 0; r < n.length; r++) {
            n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
          }

          return t;
        }

        _ = document.createRange ? function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        } : function (e, t, n) {
          var r = document.body.createTextRange();

          try {
            r.moveToElementText(e.parentNode);
          } catch (e) {
            return r;
          }

          return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
        };

        var I = function I(e) {
          e.select();
        };

        function W(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            return e.apply(null, t);
          };
        }

        function H(e, t, n) {
          for (var r in t || (t = {}), e) {
            !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
          }

          return t;
        }

        function F(e, t, n, r, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);

          for (var o = r || 0, s = i || 0;;) {
            var a = e.indexOf("\t", o);
            if (a < 0 || a >= t) return s + (t - o);
            s += a - o, s += n - s % n, o = a + 1;
          }
        }

        m ? I = function I(e) {
          e.selectionStart = 0, e.selectionEnd = e.value.length;
        } : s && (I = function I(e) {
          try {
            e.select();
          } catch (e) {}
        });

        var z = function z() {
          this.id = null, this.f = null, this.time = 0, this.handler = W(this.onTimeout, this);
        };

        function j(e, t) {
          for (var n = 0; n < e.length; ++n) {
            if (e[n] == t) return n;
          }

          return -1;
        }

        z.prototype.onTimeout = function (e) {
          e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }, z.prototype.set = function (e, t) {
          this.f = t;
          var n = +new Date() + e;
          (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
        };
        var R = {
          toString: function toString() {
            return "CodeMirror.Pass";
          }
        },
            B = {
          scroll: !1
        },
            V = {
          origin: "*mouse"
        },
            U = {
          origin: "+move"
        };

        function K(e, t, n) {
          for (var r = 0, i = 0;;) {
            var o = e.indexOf("\t", r);
            -1 == o && (o = e.length);
            var s = o - r;
            if (o == e.length || i + s >= t) return r + Math.min(s, t - i);
            if (i += o - r, r = o + 1, (i += n - i % n) >= t) return r;
          }
        }

        var G = [""];

        function $(e) {
          for (; G.length <= e;) {
            G.push(X(G) + " ");
          }

          return G[e];
        }

        function X(e) {
          return e[e.length - 1];
        }

        function Z(e, t) {
          for (var n = [], r = 0; r < e.length; r++) {
            n[r] = t(e[r], r);
          }

          return n;
        }

        function Y() {}

        function q(e, t) {
          var n;
          return Object.create ? n = Object.create(e) : (Y.prototype = e, n = new Y()), t && H(t, n), n;
        }

        var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

        function Q(e) {
          return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || J.test(e));
        }

        function ee(e, t) {
          return t ? !!(t.source.indexOf("\\w") > -1 && Q(e)) || t.test(e) : Q(e);
        }

        function te(e) {
          for (var t in e) {
            if (e.hasOwnProperty(t) && e[t]) return !1;
          }

          return !0;
        }

        var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function re(e) {
          return e.charCodeAt(0) >= 768 && ne.test(e);
        }

        function ie(e, t, n) {
          for (; (n < 0 ? t > 0 : t < e.length) && re(e.charAt(t));) {
            t += n;
          }

          return t;
        }

        function oe(e, t, n) {
          for (var r = t > n ? -1 : 1;;) {
            if (t == n) return t;
            var i = (t + n) / 2,
                o = r < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : n;
            e(o) ? n = o : t = o + r;
          }
        }

        var se = null;

        function ae(e, t, n) {
          var r;
          se = null;

          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == n ? r = i : se = i), o.from == t && (o.from != o.to && "before" != n ? r = i : se = i);
          }

          return null != r ? r : se;
        }

        var le = function () {
          var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              t = /[stwN]/,
              n = /[LRr]/,
              r = /[Lb1n]/,
              i = /[1n]/;

          function o(e, t, n) {
            this.level = e, this.from = t, this.to = n;
          }

          return function (s, a) {
            var l,
                c = "ltr" == a ? "L" : "R";
            if (0 == s.length || "ltr" == a && !e.test(s)) return !1;

            for (var u = s.length, d = [], h = 0; h < u; ++h) {
              d.push((l = s.charCodeAt(h)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(l) : 1424 <= l && l <= 1524 ? "R" : 1536 <= l && l <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(l - 1536) : 1774 <= l && l <= 2220 ? "r" : 8192 <= l && l <= 8203 ? "w" : 8204 == l ? "b" : "L");
            }

            for (var f = 0, p = c; f < u; ++f) {
              var m = d[f];
              "m" == m ? d[f] = p : p = m;
            }

            for (var g = 0, v = c; g < u; ++g) {
              var y = d[g];
              "1" == y && "r" == v ? d[g] = "n" : n.test(y) && (v = y, "r" == y && (d[g] = "R"));
            }

            for (var b = 1, x = d[0]; b < u - 1; ++b) {
              var w = d[b];
              "+" == w && "1" == x && "1" == d[b + 1] ? d[b] = "1" : "," != w || x != d[b + 1] || "1" != x && "n" != x || (d[b] = x), x = w;
            }

            for (var C = 0; C < u; ++C) {
              var k = d[C];
              if ("," == k) d[C] = "N";else if ("%" == k) {
                var S = void 0;

                for (S = C + 1; S < u && "%" == d[S]; ++S) {
                  ;
                }

                for (var _ = C && "!" == d[C - 1] || S < u && "1" == d[S] ? "1" : "N", T = C; T < S; ++T) {
                  d[T] = _;
                }

                C = S - 1;
              }
            }

            for (var M = 0, L = c; M < u; ++M) {
              var O = d[M];
              "L" == L && "1" == O ? d[M] = "L" : n.test(O) && (L = O);
            }

            for (var A = 0; A < u; ++A) {
              if (t.test(d[A])) {
                var N = void 0;

                for (N = A + 1; N < u && t.test(d[N]); ++N) {
                  ;
                }

                for (var E = "L" == (A ? d[A - 1] : c), D = E == ("L" == (N < u ? d[N] : c)) ? E ? "L" : "R" : c, P = A; P < N; ++P) {
                  d[P] = D;
                }

                A = N - 1;
              }
            }

            for (var I, W = [], H = 0; H < u;) {
              if (r.test(d[H])) {
                var F = H;

                for (++H; H < u && r.test(d[H]); ++H) {
                  ;
                }

                W.push(new o(0, F, H));
              } else {
                var z = H,
                    j = W.length,
                    R = "rtl" == a ? 1 : 0;

                for (++H; H < u && "L" != d[H]; ++H) {
                  ;
                }

                for (var B = z; B < H;) {
                  if (i.test(d[B])) {
                    z < B && (W.splice(j, 0, new o(1, z, B)), j += R);
                    var V = B;

                    for (++B; B < H && i.test(d[B]); ++B) {
                      ;
                    }

                    W.splice(j, 0, new o(2, V, B)), j += R, z = B;
                  } else ++B;
                }

                z < H && W.splice(j, 0, new o(1, z, H));
              }
            }

            return "ltr" == a && (1 == W[0].level && (I = s.match(/^\s+/)) && (W[0].from = I[0].length, W.unshift(new o(0, 0, I[0].length))), 1 == X(W).level && (I = s.match(/\s+$/)) && (X(W).to -= I[0].length, W.push(new o(0, u - I[0].length, u)))), "rtl" == a ? W.reverse() : W;
          };
        }();

        function ce(e, t) {
          var n = e.order;
          return null == n && (n = e.order = le(e.text, t)), n;
        }

        var ue = [],
            de = function de(e, t, n) {
          if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || ue).concat(n);
          }
        };

        function he(e, t) {
          return e._handlers && e._handlers[t] || ue;
        }

        function fe(e, t, n) {
          if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else {
            var r = e._handlers,
                i = r && r[t];

            if (i) {
              var o = j(i, n);
              o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }

        function pe(e, t) {
          var n = he(e, t);
          if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
            n[i].apply(null, r);
          }
        }

        function me(e, t, n) {
          return "string" == typeof t && (t = {
            type: t,
            preventDefault: function preventDefault() {
              this.defaultPrevented = !0;
            }
          }), pe(e, n || t.type, e, t), we(t) || t.codemirrorIgnore;
        }

        function ge(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
            -1 == j(n, t[r]) && n.push(t[r]);
          }
        }

        function ve(e, t) {
          return he(e, t).length > 0;
        }

        function ye(e) {
          e.prototype.on = function (e, t) {
            de(this, e, t);
          }, e.prototype.off = function (e, t) {
            fe(this, e, t);
          };
        }

        function be(e) {
          e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        }

        function xe(e) {
          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
        }

        function we(e) {
          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
        }

        function Ce(e) {
          be(e), xe(e);
        }

        function ke(e) {
          return e.target || e.srcElement;
        }

        function Se(e) {
          var t = e.which;
          return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
        }

        var _e,
            Te,
            Me = function () {
          if (s && a < 9) return !1;
          var e = O("div");
          return "draggable" in e || "dragDrop" in e;
        }();

        function Le(e) {
          if (null == _e) {
            var t = O("span", "​");
            L(e, O("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (_e = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(s && a < 8));
          }

          var n = _e ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
          return n.setAttribute("cm-text", ""), n;
        }

        function Oe(e) {
          if (null != Te) return Te;

          var t = L(e, document.createTextNode("AخA")),
              n = _(t, 0, 1).getBoundingClientRect(),
              r = _(t, 1, 2).getBoundingClientRect();

          return M(e), !(!n || n.left == n.right) && (Te = r.right - n.right < 3);
        }

        var Ae,
            Ne = 3 != "\n\nb".split(/\n/).length ? function (e) {
          for (var t = 0, n = [], r = e.length; t <= r;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                s = o.indexOf("\r");
            -1 != s ? (n.push(o.slice(0, s)), t += s + 1) : (n.push(o), t = i + 1);
          }

          return n;
        } : function (e) {
          return e.split(/\r\n?|\n/);
        },
            Ee = window.getSelection ? function (e) {
          try {
            return e.selectionStart != e.selectionEnd;
          } catch (e) {
            return !1;
          }
        } : function (e) {
          var t;

          try {
            t = e.ownerDocument.selection.createRange();
          } catch (e) {}

          return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
        },
            De = "oncopy" in (Ae = O("div")) || (Ae.setAttribute("oncopy", "return;"), "function" == typeof Ae.oncopy),
            Pe = null;
        var Ie = {},
            We = {};

        function He(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ie[e] = t;
        }

        function Fe(e) {
          if ("string" == typeof e && We.hasOwnProperty(e)) e = We[e];else if (e && "string" == typeof e.name && We.hasOwnProperty(e.name)) {
            var t = We[e.name];
            "string" == typeof t && (t = {
              name: t
            }), (e = q(t, e)).name = t.name;
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Fe("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Fe("application/json");
          }
          return "string" == typeof e ? {
            name: e
          } : e || {
            name: "null"
          };
        }

        function ze(e, t) {
          t = Fe(t);
          var n = Ie[t.name];
          if (!n) return ze(e, "text/plain");
          var r = n(e, t);

          if (je.hasOwnProperty(t.name)) {
            var i = je[t.name];

            for (var o in i) {
              i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]);
            }
          }

          if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var s in t.modeProps) {
            r[s] = t.modeProps[s];
          }
          return r;
        }

        var je = {};

        function Re(e, t) {
          H(t, je.hasOwnProperty(e) ? je[e] : je[e] = {});
        }

        function Be(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var n = {};

          for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), n[r] = i;
          }

          return n;
        }

        function Ve(e, t) {
          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) {
            t = n.state, e = n.mode;
          }

          return n || {
            mode: e,
            state: t
          };
        }

        function Ue(e, t, n) {
          return !e.startState || e.startState(t, n);
        }

        var Ke = function Ke(e, t, n) {
          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
        };

        function Ge(e, t) {
          if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");

          for (var n = e; !n.lines;) {
            for (var r = 0;; ++r) {
              var i = n.children[r],
                  o = i.chunkSize();

              if (t < o) {
                n = i;
                break;
              }

              t -= o;
            }
          }

          return n.lines[t];
        }

        function $e(e, t, n) {
          var r = [],
              i = t.line;
          return e.iter(t.line, n.line + 1, function (e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
          }), r;
        }

        function Xe(e, t, n) {
          var r = [];
          return e.iter(t, n, function (e) {
            r.push(e.text);
          }), r;
        }

        function Ze(e, t) {
          var n = t - e.height;
          if (n) for (var r = e; r; r = r.parent) {
            r.height += n;
          }
        }

        function Ye(e) {
          if (null == e.parent) return null;

          for (var t = e.parent, n = j(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
            for (var i = 0; r.children[i] != t; ++i) {
              n += r.children[i].chunkSize();
            }
          }

          return n + t.first;
        }

        function qe(e, t) {
          var n = e.first;

          e: do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r],
                  o = i.height;

              if (t < o) {
                e = i;
                continue e;
              }

              t -= o, n += i.chunkSize();
            }

            return n;
          } while (!e.lines);

          for (var s = 0; s < e.lines.length; ++s) {
            var a = e.lines[s].height;
            if (t < a) break;
            t -= a;
          }

          return n + s;
        }

        function Je(e, t) {
          return t >= e.first && t < e.first + e.size;
        }

        function Qe(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }

        function et(e, t, n) {
          if (void 0 === n && (n = null), !(this instanceof et)) return new et(e, t, n);
          this.line = e, this.ch = t, this.sticky = n;
        }

        function tt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }

        function nt(e, t) {
          return e.sticky == t.sticky && 0 == tt(e, t);
        }

        function rt(e) {
          return et(e.line, e.ch);
        }

        function it(e, t) {
          return tt(e, t) < 0 ? t : e;
        }

        function ot(e, t) {
          return tt(e, t) < 0 ? e : t;
        }

        function st(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }

        function at(e, t) {
          if (t.line < e.first) return et(e.first, 0);
          var n = e.first + e.size - 1;
          return t.line > n ? et(n, Ge(e, n).text.length) : function (e, t) {
            var n = e.ch;
            return null == n || n > t ? et(e.line, t) : n < 0 ? et(e.line, 0) : e;
          }(t, Ge(e, t.line).text.length);
        }

        function lt(e, t) {
          for (var n = [], r = 0; r < t.length; r++) {
            n[r] = at(e, t[r]);
          }

          return n;
        }

        Ke.prototype.eol = function () {
          return this.pos >= this.string.length;
        }, Ke.prototype.sol = function () {
          return this.pos == this.lineStart;
        }, Ke.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }, Ke.prototype.next = function () {
          if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        }, Ke.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
        }, Ke.prototype.eatWhile = function (e) {
          for (var t = this.pos; this.eat(e);) {
            ;
          }

          return this.pos > t;
        }, Ke.prototype.eatSpace = function () {
          for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
            ++this.pos;
          }

          return this.pos > e;
        }, Ke.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }, Ke.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return this.pos = t, !0;
        }, Ke.prototype.backUp = function (e) {
          this.pos -= e;
        }, Ke.prototype.column = function () {
          return this.lastColumnPos < this.start && (this.lastColumnValue = F(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0);
        }, Ke.prototype.indentation = function () {
          return F(this.string, null, this.tabSize) - (this.lineStart ? F(this.string, this.lineStart, this.tabSize) : 0);
        }, Ke.prototype.match = function (e, t, n) {
          if ("string" != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
          }

          var i = function i(e) {
            return n ? e.toLowerCase() : e;
          };

          if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
        }, Ke.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }, Ke.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;

          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }, Ke.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }, Ke.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        };

        var ct = function ct(e, t) {
          this.state = e, this.lookAhead = t;
        },
            ut = function ut(e, t, n, r) {
          this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
        };

        function dt(e, t, n, r) {
          var i = [e.state.modeGen],
              o = {};
          xt(e, t.text, e.doc.mode, n, function (e, t) {
            return i.push(e, t);
          }, o, r);

          for (var s = n.state, a = function a(r) {
            n.baseTokens = i;
            var a = e.state.overlays[r],
                l = 1,
                c = 0;
            n.state = !0, xt(e, t.text, a.mode, n, function (e, t) {
              for (var n = l; c < e;) {
                var r = i[l];
                r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, c = Math.min(e, r);
              }

              if (t) if (a.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2;else for (; n < l; n += 2) {
                var o = i[n + 1];
                i[n + 1] = (o ? o + " " : "") + "overlay " + t;
              }
            }, o), n.state = s, n.baseTokens = null, n.baseTokenPos = 1;
          }, l = 0; l < e.state.overlays.length; ++l) {
            a(l);
          }

          return {
            styles: i,
            classes: o.bgClass || o.textClass ? o : null
          };
        }

        function ht(e, t, n) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = ft(e, Ye(t)),
                i = t.text.length > e.options.maxHighlightLength && Be(e.doc.mode, r.state),
                o = dt(e, t, r);
            i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }

          return t.styles;
        }

        function ft(e, t, n) {
          var r = e.doc,
              i = e.display;
          if (!r.mode.startState) return new ut(r, !0, t);

          var o = function (e, t, n) {
            for (var r, i, o = e.doc, s = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > s; --a) {
              if (a <= o.first) return o.first;
              var l = Ge(o, a - 1),
                  c = l.stateAfter;
              if (c && (!n || a + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)) return a;
              var u = F(l.text, null, e.options.tabSize);
              (null == i || r > u) && (i = a - 1, r = u);
            }

            return i;
          }(e, t, n),
              s = o > r.first && Ge(r, o - 1).stateAfter,
              a = s ? ut.fromSaved(r, s, o) : new ut(r, Ue(r.mode), o);

          return r.iter(o, t, function (n) {
            pt(e, n.text, a);
            var r = a.line;
            n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? a.save() : null, a.nextLine();
          }), n && (r.modeFrontier = a.line), a;
        }

        function pt(e, t, n, r) {
          var i = e.doc.mode,
              o = new Ke(t, e.options.tabSize, n);

          for (o.start = o.pos = r || 0, "" == t && mt(i, n.state); !o.eol();) {
            gt(i, o, n.state), o.start = o.pos;
          }
        }

        function mt(e, t) {
          if (e.blankLine) return e.blankLine(t);

          if (e.innerMode) {
            var n = Ve(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
          }
        }

        function gt(e, t, n, r) {
          for (var i = 0; i < 10; i++) {
            r && (r[0] = Ve(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start) return o;
          }

          throw new Error("Mode " + e.name + " failed to advance stream.");
        }

        ut.prototype.lookAhead = function (e) {
          var t = this.doc.getLine(this.line + e);
          return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }, ut.prototype.baseToken = function (e) {
          if (!this.baseTokens) return null;

          for (; this.baseTokens[this.baseTokenPos] <= e;) {
            this.baseTokenPos += 2;
          }

          var t = this.baseTokens[this.baseTokenPos + 1];
          return {
            type: t && t.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - e
          };
        }, ut.prototype.nextLine = function () {
          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
        }, ut.fromSaved = function (e, t, n) {
          return t instanceof ct ? new ut(e, Be(e.mode, t.state), n, t.lookAhead) : new ut(e, Be(e.mode, t), n);
        }, ut.prototype.save = function (e) {
          var t = !1 !== e ? Be(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
        };

        var vt = function vt(e, t, n) {
          this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
        };

        function yt(e, t, n, r) {
          var i,
              o,
              s = e.doc,
              a = s.mode,
              l = Ge(s, (t = at(s, t)).line),
              c = ft(e, t.line, n),
              u = new Ke(l.text, e.options.tabSize, c);

          for (r && (o = []); (r || u.pos < t.ch) && !u.eol();) {
            u.start = u.pos, i = gt(a, u, c.state), r && o.push(new vt(u, i, Be(s.mode, c.state)));
          }

          return r ? o : new vt(u, i, c.state);
        }

        function bt(e, t) {
          if (e) for (;;) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n) break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            null == t[r] ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
          }
          return e;
        }

        function xt(e, t, n, r, i, o, s) {
          var a = n.flattenSpans;
          null == a && (a = e.options.flattenSpans);
          var l,
              c = 0,
              u = null,
              d = new Ke(t, e.options.tabSize, r),
              h = e.options.addModeClass && [null];

          for ("" == t && bt(mt(n, r.state), o); !d.eol();) {
            if (d.pos > e.options.maxHighlightLength ? (a = !1, s && pt(e, t, r, d.pos), d.pos = t.length, l = null) : l = bt(gt(n, d, r.state, h), o), h) {
              var f = h[0].name;
              f && (l = "m-" + (l ? f + " " + l : f));
            }

            if (!a || u != l) {
              for (; c < d.start;) {
                i(c = Math.min(d.start, c + 5e3), u);
              }

              u = l;
            }

            d.start = d.pos;
          }

          for (; c < d.pos;) {
            var p = Math.min(d.pos, c + 5e3);
            i(p, u), c = p;
          }
        }

        var wt = !1,
            Ct = !1;

        function kt(e, t, n) {
          this.marker = e, this.from = t, this.to = n;
        }

        function St(e, t) {
          if (e) for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t) return r;
          }
        }

        function _t(e, t) {
          for (var n, r = 0; r < e.length; ++r) {
            e[r] != t && (n || (n = [])).push(e[r]);
          }

          return n;
        }

        function Tt(e, t) {
          if (t.full) return null;
          var n = Je(e, t.from.line) && Ge(e, t.from.line).markedSpans,
              r = Je(e, t.to.line) && Ge(e, t.to.line).markedSpans;
          if (!n && !r) return null;

          var i = t.from.ch,
              o = t.to.ch,
              s = 0 == tt(t.from, t.to),
              a = function (e, t, n) {
            var r;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  s = o.marker;

              if (null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == s.type && (!n || !o.marker.insertLeft)) {
                var a = null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                (r || (r = [])).push(new kt(s, o.from, a ? null : o.to));
              }
            }
            return r;
          }(n, i, s),
              l = function (e, t, n) {
            var r;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  s = o.marker;

              if (null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == s.type && (!n || o.marker.insertLeft)) {
                var a = null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t);
                (r || (r = [])).push(new kt(s, a ? null : o.from - t, null == o.to ? null : o.to - t));
              }
            }
            return r;
          }(r, o, s),
              c = 1 == t.text.length,
              u = X(t.text).length + (c ? i : 0);

          if (a) for (var d = 0; d < a.length; ++d) {
            var h = a[d];

            if (null == h.to) {
              var f = St(l, h.marker);
              f ? c && (h.to = null == f.to ? null : f.to + u) : h.to = i;
            }
          }
          if (l) for (var p = 0; p < l.length; ++p) {
            var m = l[p];
            null != m.to && (m.to += u), null == m.from ? St(a, m.marker) || (m.from = u, c && (a || (a = [])).push(m)) : (m.from += u, c && (a || (a = [])).push(m));
          }
          a && (a = Mt(a)), l && l != a && (l = Mt(l));
          var g = [a];

          if (!c) {
            var v,
                y = t.text.length - 2;
            if (y > 0 && a) for (var b = 0; b < a.length; ++b) {
              null == a[b].to && (v || (v = [])).push(new kt(a[b].marker, null, null));
            }

            for (var x = 0; x < y; ++x) {
              g.push(v);
            }

            g.push(l);
          }

          return g;
        }

        function Mt(e) {
          for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
          }

          return e.length ? e : null;
        }

        function Lt(e) {
          var t = e.markedSpans;

          if (t) {
            for (var n = 0; n < t.length; ++n) {
              t[n].marker.detachLine(e);
            }

            e.markedSpans = null;
          }
        }

        function Ot(e, t) {
          if (t) {
            for (var n = 0; n < t.length; ++n) {
              t[n].marker.attachLine(e);
            }

            e.markedSpans = t;
          }
        }

        function At(e) {
          return e.inclusiveLeft ? -1 : 0;
        }

        function Nt(e) {
          return e.inclusiveRight ? 1 : 0;
        }

        function Et(e, t) {
          var n = e.lines.length - t.lines.length;
          if (0 != n) return n;
          var r = e.find(),
              i = t.find(),
              o = tt(r.from, i.from) || At(e) - At(t);
          return o ? -o : tt(r.to, i.to) || Nt(e) - Nt(t) || t.id - e.id;
        }

        function Dt(e, t) {
          var n,
              r = Ct && e.markedSpans;
          if (r) for (var i = void 0, o = 0; o < r.length; ++o) {
            (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Et(n, i.marker) < 0) && (n = i.marker);
          }
          return n;
        }

        function Pt(e) {
          return Dt(e, !0);
        }

        function It(e) {
          return Dt(e, !1);
        }

        function Wt(e, t) {
          var n,
              r = Ct && e.markedSpans;
          if (r) for (var i = 0; i < r.length; ++i) {
            var o = r[i];
            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Et(n, o.marker) < 0) && (n = o.marker);
          }
          return n;
        }

        function Ht(e, t, n, r, i) {
          var o = Ge(e, t),
              s = Ct && o.markedSpans;
          if (s) for (var a = 0; a < s.length; ++a) {
            var l = s[a];

            if (l.marker.collapsed) {
              var c = l.marker.find(0),
                  u = tt(c.from, n) || At(l.marker) - At(i),
                  d = tt(c.to, r) || Nt(l.marker) - Nt(i);
              if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? tt(c.to, n) >= 0 : tt(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? tt(c.from, r) <= 0 : tt(c.from, r) < 0))) return !0;
            }
          }
        }

        function Ft(e) {
          for (var t; t = Pt(e);) {
            e = t.find(-1, !0).line;
          }

          return e;
        }

        function zt(e, t) {
          var n = Ge(e, t),
              r = Ft(n);
          return n == r ? t : Ye(r);
        }

        function jt(e, t) {
          if (t > e.lastLine()) return t;
          var n,
              r = Ge(e, t);
          if (!Rt(e, r)) return t;

          for (; n = It(r);) {
            r = n.find(1, !0).line;
          }

          return Ye(r) + 1;
        }

        function Rt(e, t) {
          var n = Ct && t.markedSpans;
          if (n) for (var r = void 0, i = 0; i < n.length; ++i) {
            if ((r = n[i]).marker.collapsed) {
              if (null == r.from) return !0;
              if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Bt(e, t, r)) return !0;
            }
          }
        }

        function Bt(e, t, n) {
          if (null == n.to) {
            var r = n.marker.find(1, !0);
            return Bt(e, r.line, St(r.line.markedSpans, n.marker));
          }

          if (n.marker.inclusiveRight && n.to == t.text.length) return !0;

          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
            if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Bt(e, t, i)) return !0;
          }
        }

        function Vt(e) {
          for (var t = 0, n = (e = Ft(e)).parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e) break;
            t += i.height;
          }

          for (var o = n.parent; o; o = (n = o).parent) {
            for (var s = 0; s < o.children.length; ++s) {
              var a = o.children[s];
              if (a == n) break;
              t += a.height;
            }
          }

          return t;
        }

        function Ut(e) {
          if (0 == e.height) return 0;

          for (var t, n = e.text.length, r = e; t = Pt(r);) {
            var i = t.find(0, !0);
            r = i.from.line, n += i.from.ch - i.to.ch;
          }

          for (r = e; t = It(r);) {
            var o = t.find(0, !0);
            n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch;
          }

          return n;
        }

        function Kt(e) {
          var t = e.display,
              n = e.doc;
          t.maxLine = Ge(n, n.first), t.maxLineLength = Ut(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
            var n = Ut(e);
            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
          });
        }

        var Gt = function Gt(e, t, n) {
          this.text = e, Ot(this, t), this.height = n ? n(this) : 1;
        };

        function $t(e) {
          e.parent = null, Lt(e);
        }

        Gt.prototype.lineNo = function () {
          return Ye(this);
        }, ye(Gt);
        var Xt = {},
            Zt = {};

        function Yt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var n = t.addModeClass ? Zt : Xt;
          return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
        }

        function qt(e, t) {
          var n = A("span", null, null, l ? "padding-right: .1px" : null),
              r = {
            pre: A("pre", [n], "CodeMirror-line"),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping")
          };
          t.measure = {};

          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
                s = void 0;
            r.pos = 0, r.addToken = Qt, Oe(e.display.measure) && (s = ce(o, e.doc.direction)) && (r.addToken = en(r.addToken, s)), r.map = [], nn(o, r, ht(e, o, t != e.display.externalMeasured && Ye(o))), o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Le(e.display.measure))), 0 == i ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
          }

          if (l) {
            var a = r.content.lastChild;
            (/\bcm-tab\b/.test(a.className) || a.querySelector && a.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
          }

          return pe(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = P(r.pre.className, r.textClass || "")), r;
        }

        function Jt(e) {
          var t = O("span", "•", "cm-invalidchar");
          return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
        }

        function Qt(e, t, n, r, i, o, l) {
          if (t) {
            var c,
                u = e.splitSpaces ? function (e, t) {
              if (e.length > 1 && !/  /.test(e)) return e;

              for (var n = t, r = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o;
              }

              return r;
            }(t, e.trailingSpace) : t,
                d = e.cm.state.specialChars,
                h = !1;

            if (d.test(t)) {
              c = document.createDocumentFragment();

              for (var f = 0;;) {
                d.lastIndex = f;
                var p = d.exec(t),
                    m = p ? p.index - f : t.length - f;

                if (m) {
                  var g = document.createTextNode(u.slice(f, f + m));
                  s && a < 9 ? c.appendChild(O("span", [g])) : c.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m;
                }

                if (!p) break;
                f += m + 1;
                var v = void 0;

                if ("\t" == p[0]) {
                  var y = e.cm.options.tabSize,
                      b = y - e.col % y;
                  (v = c.appendChild(O("span", $(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b;
                } else "\r" == p[0] || "\n" == p[0] ? ((v = c.appendChild(O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), s && a < 9 ? c.appendChild(O("span", [v])) : c.appendChild(v), e.col += 1);

                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else e.col += t.length, c = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, c), s && a < 9 && (h = !0), e.pos += t.length;

            if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || r || i || h || o || l) {
              var x = n || "";
              r && (x += r), i && (x += i);
              var w = O("span", [c], x, o);
              if (l) for (var C in l) {
                l.hasOwnProperty(C) && "style" != C && "class" != C && w.setAttribute(C, l[C]);
              }
              return e.content.appendChild(w);
            }

            e.content.appendChild(c);
          }
        }

        function en(e, t) {
          return function (n, r, i, o, s, a, l) {
            i = i ? i + " cm-force-border" : "cm-force-border";

            for (var c = n.pos, u = c + r.length;;) {
              for (var d = void 0, h = 0; h < t.length && !((d = t[h]).to > c && d.from <= c); h++) {
                ;
              }

              if (d.to >= u) return e(n, r, i, o, s, a, l);
              e(n, r.slice(0, d.to - c), i, o, null, a, l), o = null, r = r.slice(d.to - c), c = d.to;
            }
          };
        }

        function tn(e, t, n, r) {
          var i = !r && n.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
        }

        function nn(e, t, n) {
          var r = e.markedSpans,
              i = e.text,
              o = 0;
          if (r) for (var s, a, l, c, u, d, h, f = i.length, p = 0, m = 1, g = "", v = 0;;) {
            if (v == p) {
              l = c = u = a = "", h = null, d = null, v = 1 / 0;

              for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                var w = r[x],
                    C = w.marker;
                if ("bookmark" == C.type && w.from == p && C.widgetNode) y.push(C);else if (w.from <= p && (null == w.to || w.to > p || C.collapsed && w.to == p && w.from == p)) {
                  if (null != w.to && w.to != p && v > w.to && (v = w.to, c = ""), C.className && (l += " " + C.className), C.css && (a = (a ? a + ";" : "") + C.css), C.startStyle && w.from == p && (u += " " + C.startStyle), C.endStyle && w.to == v && (b || (b = [])).push(C.endStyle, w.to), C.title && ((h || (h = {})).title = C.title), C.attributes) for (var k in C.attributes) {
                    (h || (h = {}))[k] = C.attributes[k];
                  }
                  C.collapsed && (!d || Et(d.marker, C) < 0) && (d = w);
                } else w.from > p && v > w.from && (v = w.from);
              }

              if (b) for (var S = 0; S < b.length; S += 2) {
                b[S + 1] == v && (c += " " + b[S]);
              }
              if (!d || d.from == p) for (var _ = 0; _ < y.length; ++_) {
                tn(t, 0, y[_]);
              }

              if (d && (d.from || 0) == p) {
                if (tn(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                d.to == p && (d = !1);
              }
            }

            if (p >= f) break;

            for (var T = Math.min(f, v);;) {
              if (g) {
                var M = p + g.length;

                if (!d) {
                  var L = M > T ? g.slice(0, T - p) : g;
                  t.addToken(t, L, s ? s + l : l, u, p + L.length == v ? c : "", a, h);
                }

                if (M >= T) {
                  g = g.slice(T - p), p = T;
                  break;
                }

                p = M, u = "";
              }

              g = i.slice(o, o = n[m++]), s = Yt(n[m++], t.cm.options);
            }
          } else for (var O = 1; O < n.length; O += 2) {
            t.addToken(t, i.slice(o, o = n[O]), Yt(n[O + 1], t.cm.options));
          }
        }

        function rn(e, t, n) {
          this.line = t, this.rest = function (e) {
            for (var t, n; t = It(e);) {
              e = t.find(1, !0).line, (n || (n = [])).push(e);
            }

            return n;
          }(t), this.size = this.rest ? Ye(X(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = Rt(e, t);
        }

        function on(e, t, n) {
          for (var r, i = [], o = t; o < n; o = r) {
            var s = new rn(e.doc, Ge(e.doc, o), o);
            r = o + s.size, i.push(s);
          }

          return i;
        }

        var sn = null;
        var an = null;

        function ln(e, t) {
          var n = he(e, t);

          if (n.length) {
            var r,
                i = Array.prototype.slice.call(arguments, 2);
            sn ? r = sn.delayedCallbacks : an ? r = an : (r = an = [], setTimeout(cn, 0));

            for (var o = function o(e) {
              r.push(function () {
                return n[e].apply(null, i);
              });
            }, s = 0; s < n.length; ++s) {
              o(s);
            }
          }
        }

        function cn() {
          var e = an;
          an = null;

          for (var t = 0; t < e.length; ++t) {
            e[t]();
          }
        }

        function un(e, t, n, r) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? fn(e, t) : "gutter" == o ? mn(e, t, n, r) : "class" == o ? pn(e, t) : "widget" == o && gn(e, t, r);
          }

          t.changes = null;
        }

        function dn(e) {
          return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), s && a < 8 && (e.node.style.zIndex = 2)), e.node;
        }

        function hn(e, t) {
          var n = e.display.externalMeasured;
          return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : qt(e, t);
        }

        function fn(e, t) {
          var n = t.text.className,
              r = hn(e, t);
          t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, pn(e, t)) : n && (t.text.className = n);
        }

        function pn(e, t) {
          (function (e, t) {
            var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);else if (n) {
              var r = dn(t);
              t.background = r.insertBefore(O("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
            }
          })(e, t), t.line.wrapClass ? dn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
          var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
          t.text.className = n || "";
        }

        function mn(e, t, n, r) {
          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
            var i = dn(t);
            t.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
          }

          var o = t.line.gutterMarkers;

          if (e.options.lineNumbers || o) {
            var s = dn(t),
                a = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
            if (a.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(a), s.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(O("div", Qe(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
              var c = e.display.gutterSpecs[l].className,
                  u = o.hasOwnProperty(c) && o[c];
              u && a.appendChild(O("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"));
            }
          }
        }

        function gn(e, t, n) {
          t.alignable && (t.alignable = null);

          for (var r = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) {
            o = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
          }

          yn(e, t, n);
        }

        function vn(e, t, n, r) {
          var i = hn(e, t);
          return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), pn(e, t), mn(e, t, n, r), yn(e, t, r), t.node;
        }

        function yn(e, t, n) {
          if (bn(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) {
            bn(e, t.rest[r], t, n, !1);
          }
        }

        function bn(e, t, n, r, i) {
          if (t.widgets) for (var o = dn(n), s = 0, a = t.widgets; s < a.length; ++s) {
            var l = a[s],
                c = O("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
            l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), xn(l, c, n, r), e.display.input.setUneditable(c), i && l.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c), ln(l, "redraw");
          }
        }

        function xn(e, t, n, r) {
          if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
          }

          e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
        }

        function wn(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;

          if (!N(document.body, e.node)) {
            var n = "position: relative;";
            e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), L(t.display.measure, O("div", [e.node], null, n));
          }

          return e.height = e.node.parentNode.offsetHeight;
        }

        function Cn(e, t) {
          for (var n = ke(t); n != e.wrapper; n = n.parentNode) {
            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
          }
        }

        function kn(e) {
          return e.lineSpace.offsetTop;
        }

        function Sn(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }

        function _n(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = L(e.measure, O("pre", "x", "CodeMirror-line-like")),
              n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
              r = {
            left: parseInt(n.paddingLeft),
            right: parseInt(n.paddingRight)
          };
          return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
        }

        function Tn(e) {
          return 50 - e.display.nativeBarWidth;
        }

        function Mn(e) {
          return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth;
        }

        function Ln(e) {
          return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight;
        }

        function On(e, t, n) {
          if (e.line == t) return {
            map: e.measure.map,
            cache: e.measure.cache
          };

          if (e.rest) {
            for (var r = 0; r < e.rest.length; r++) {
              if (e.rest[r] == t) return {
                map: e.measure.maps[r],
                cache: e.measure.caches[r]
              };
            }

            for (var i = 0; i < e.rest.length; i++) {
              if (Ye(e.rest[i]) > n) return {
                map: e.measure.maps[i],
                cache: e.measure.caches[i],
                before: !0
              };
            }
          }
        }

        function An(e, t, n, r) {
          return Dn(e, En(e, t), n, r);
        }

        function Nn(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[ur(e, t)];
          var n = e.display.externalMeasured;
          return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
        }

        function En(e, t) {
          var n = Ye(t),
              r = Nn(e, n);
          r && !r.text ? r = null : r && r.changes && (un(e, r, n, or(e)), e.curOp.forceUpdate = !0), r || (r = function (e, t) {
            var n = Ye(t = Ft(t)),
                r = e.display.externalMeasured = new rn(e.doc, t, n);
            r.lineN = n;
            var i = r.built = qt(e, r);
            return r.text = i.pre, L(e.display.lineMeasure, i.pre), r;
          }(e, t));
          var i = On(r, t, n);
          return {
            line: t,
            view: r,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
          };
        }

        function Dn(e, t, n, r, i) {
          t.before && (n = -1);
          var o,
              l = n + (r || "");
          return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, n) {
            var r = e.options.lineWrapping,
                i = r && Mn(e);

            if (!t.measure.heights || r && t.measure.width != i) {
              var o = t.measure.heights = [];

              if (r) {
                t.measure.width = i;

                for (var s = t.text.firstChild.getClientRects(), a = 0; a < s.length - 1; a++) {
                  var l = s[a],
                      c = s[a + 1];
                  Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top);
                }
              }

              o.push(n.bottom - n.top);
            }
          }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, n, r) {
            var i,
                o = Wn(t.map, n, r),
                l = o.node,
                c = o.start,
                u = o.end,
                d = o.collapse;

            if (3 == l.nodeType) {
              for (var h = 0; h < 4; h++) {
                for (; c && re(t.line.text.charAt(o.coverStart + c));) {
                  --c;
                }

                for (; o.coverStart + u < o.coverEnd && re(t.line.text.charAt(o.coverStart + u));) {
                  ++u;
                }

                if ((i = s && a < 9 && 0 == c && u == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : Hn(_(l, c, u).getClientRects(), r)).left || i.right || 0 == c) break;
                u = c, c -= 1, d = "right";
              }

              s && a < 11 && (i = function (e, t) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                  if (null != Pe) return Pe;

                  var t = L(e, O("span", "x")),
                      n = t.getBoundingClientRect(),
                      r = _(t, 0, 1).getBoundingClientRect();

                  return Pe = Math.abs(n.left - r.left) > 1;
                }(e)) return t;
                var n = screen.logicalXDPI / screen.deviceXDPI,
                    r = screen.logicalYDPI / screen.deviceYDPI;
                return {
                  left: t.left * n,
                  right: t.right * n,
                  top: t.top * r,
                  bottom: t.bottom * r
                };
              }(e.display.measure, i));
            } else {
              var f;
              c > 0 && (d = r = "right"), i = e.options.lineWrapping && (f = l.getClientRects()).length > 1 ? f["right" == r ? f.length - 1 : 0] : l.getBoundingClientRect();
            }

            if (s && a < 9 && !c && (!i || !i.left && !i.right)) {
              var p = l.parentNode.getClientRects()[0];
              i = p ? {
                left: p.left,
                right: p.left + ir(e.display),
                top: p.top,
                bottom: p.bottom
              } : In;
            }

            for (var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++) {
              ;
            }

            var x = b ? y[b - 1] : 0,
                w = y[b],
                C = {
              left: ("right" == d ? i.right : i.left) - t.rect.left,
              right: ("left" == d ? i.left : i.right) - t.rect.left,
              top: x,
              bottom: w
            };
            return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = m, C.rbottom = g), C;
          }(e, t, n, r)).bogus || (t.cache[l] = o)), {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
          };
        }

        var Pn,
            In = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };

        function Wn(e, t, n) {
          for (var r, i, o, s, a, l, c = 0; c < e.length; c += 3) {
            if (a = e[c], l = e[c + 1], t < a ? (i = 0, o = 1, s = "left") : t < l ? o = 1 + (i = t - a) : (c == e.length - 3 || t == l && e[c + 3] > t) && (i = (o = l - a) - 1, t >= l && (s = "right")), null != i) {
              if (r = e[c + 2], a == l && n == (r.insertLeft ? "left" : "right") && (s = n), "left" == n && 0 == i) for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) {
                r = e[2 + (c -= 3)], s = "left";
              }
              if ("right" == n && i == l - a) for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) {
                r = e[(c += 3) + 2], s = "right";
              }
              break;
            }
          }

          return {
            node: r,
            start: i,
            end: o,
            collapse: s,
            coverStart: a,
            coverEnd: l
          };
        }

        function Hn(e, t) {
          var n = In;
          if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) {
            ;
          } else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) {
            ;
          }
          return n;
        }

        function Fn(e) {
          if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
            e.measure.caches[t] = {};
          }
        }

        function zn(e) {
          e.display.externalMeasure = null, M(e.display.lineMeasure);

          for (var t = 0; t < e.display.view.length; t++) {
            Fn(e.display.view[t]);
          }
        }

        function jn(e) {
          zn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
        }

        function Rn() {
          return u && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }

        function Bn() {
          return u && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }

        function Vn(e) {
          var t = Ft(e).widgets,
              n = 0;
          if (t) for (var r = 0; r < t.length; ++r) {
            t[r].above && (n += wn(t[r]));
          }
          return n;
        }

        function Un(e, t, n, r, i) {
          if (!i) {
            var o = Vn(t);
            n.top += o, n.bottom += o;
          }

          if ("line" == r) return n;
          r || (r = "local");
          var s = Vt(t);

          if ("local" == r ? s += kn(e.display) : s -= e.display.viewOffset, "page" == r || "window" == r) {
            var a = e.display.lineSpace.getBoundingClientRect();
            s += a.top + ("window" == r ? 0 : Bn());
            var l = a.left + ("window" == r ? 0 : Rn());
            n.left += l, n.right += l;
          }

          return n.top += s, n.bottom += s, n;
        }

        function Kn(e, t, n) {
          if ("div" == n) return t;
          var r = t.left,
              i = t.top;
          if ("page" == n) r -= Rn(), i -= Bn();else if ("local" == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            r += o.left, i += o.top;
          }
          var s = e.display.lineSpace.getBoundingClientRect();
          return {
            left: r - s.left,
            top: i - s.top
          };
        }

        function Gn(e, t, n, r, i) {
          return r || (r = Ge(e.doc, t.line)), Un(e, r, An(e, r, t.ch, i), n);
        }

        function $n(e, t, n, r, i, o) {
          function s(t, s) {
            var a = Dn(e, i, t, s ? "right" : "left", o);
            return s ? a.left = a.right : a.right = a.left, Un(e, r, a, n);
          }

          r = r || Ge(e.doc, t.line), i || (i = En(e, r));
          var a = ce(r, e.doc.direction),
              l = t.ch,
              c = t.sticky;
          if (l >= r.text.length ? (l = r.text.length, c = "before") : l <= 0 && (l = 0, c = "after"), !a) return s("before" == c ? l - 1 : l, "before" == c);

          function u(e, t, n) {
            return s(n ? e - 1 : e, 1 == a[t].level != n);
          }

          var d = ae(a, l, c),
              h = se,
              f = u(l, d, "before" == c);
          return null != h && (f.other = u(l, h, "before" != c)), f;
        }

        function Xn(e, t) {
          var n = 0;
          t = at(e.doc, t), e.options.lineWrapping || (n = ir(e.display) * t.ch);
          var r = Ge(e.doc, t.line),
              i = Vt(r) + kn(e.display);
          return {
            left: n,
            right: n,
            top: i,
            bottom: i + r.height
          };
        }

        function Zn(e, t, n, r, i) {
          var o = et(e, t, n);
          return o.xRel = i, r && (o.outside = r), o;
        }

        function Yn(e, t, n) {
          var r = e.doc;
          if ((n += e.display.viewOffset) < 0) return Zn(r.first, 0, null, -1, -1);
          var i = qe(r, n),
              o = r.first + r.size - 1;
          if (i > o) return Zn(r.first + r.size - 1, Ge(r, o).text.length, null, 1, 1);
          t < 0 && (t = 0);

          for (var s = Ge(r, i);;) {
            var a = er(e, s, i, t, n),
                l = Wt(s, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
            if (!l) return a;
            var c = l.find(1);
            if (c.line == i) return c;
            s = Ge(r, i = c.line);
          }
        }

        function qn(e, t, n, r) {
          r -= Vn(t);
          var i = t.text.length,
              o = oe(function (t) {
            return Dn(e, n, t - 1).bottom <= r;
          }, i, 0);
          return {
            begin: o,
            end: i = oe(function (t) {
              return Dn(e, n, t).top > r;
            }, o, i)
          };
        }

        function Jn(e, t, n, r) {
          return n || (n = En(e, t)), qn(e, t, n, Un(e, t, Dn(e, n, r), "line").top);
        }

        function Qn(e, t, n, r) {
          return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
        }

        function er(e, t, n, r, i) {
          i -= Vt(t);
          var o = En(e, t),
              s = Vn(t),
              a = 0,
              l = t.text.length,
              c = !0,
              u = ce(t, e.doc.direction);

          if (u) {
            var d = (e.options.lineWrapping ? nr : tr)(e, t, n, o, u, r, i);
            a = (c = 1 != d.level) ? d.from : d.to - 1, l = c ? d.to : d.from - 1;
          }

          var h,
              f,
              p = null,
              m = null,
              g = oe(function (t) {
            var n = Dn(e, o, t);
            return n.top += s, n.bottom += s, !!Qn(n, r, i, !1) && (n.top <= i && n.left <= r && (p = t, m = n), !0);
          }, a, l),
              v = !1;

          if (m) {
            var y = r - m.left < m.right - r,
                b = y == c;
            g = p + (b ? 0 : 1), f = b ? "after" : "before", h = y ? m.left : m.right;
          } else {
            c || g != l && g != a || g++, f = 0 == g ? "after" : g == t.text.length ? "before" : Dn(e, o, g - (c ? 1 : 0)).bottom + s <= i == c ? "after" : "before";
            var x = $n(e, et(n, g, f), "line", t, o);
            h = x.left, v = i < x.top ? -1 : i >= x.bottom ? 1 : 0;
          }

          return Zn(n, g = ie(t.text, g, 1), f, v, r - h);
        }

        function tr(e, t, n, r, i, o, s) {
          var a = oe(function (a) {
            var l = i[a],
                c = 1 != l.level;
            return Qn($n(e, et(n, c ? l.to : l.from, c ? "before" : "after"), "line", t, r), o, s, !0);
          }, 0, i.length - 1),
              l = i[a];

          if (a > 0) {
            var c = 1 != l.level,
                u = $n(e, et(n, c ? l.from : l.to, c ? "after" : "before"), "line", t, r);
            Qn(u, o, s, !0) && u.top > s && (l = i[a - 1]);
          }

          return l;
        }

        function nr(e, t, n, r, i, o, s) {
          var a = qn(e, t, r, s),
              l = a.begin,
              c = a.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;

          for (var u = null, d = null, h = 0; h < i.length; h++) {
            var f = i[h];

            if (!(f.from >= c || f.to <= l)) {
              var p = Dn(e, r, 1 != f.level ? Math.min(c, f.to) - 1 : Math.max(l, f.from)).right,
                  m = p < o ? o - p + 1e9 : p - o;
              (!u || d > m) && (u = f, d = m);
            }
          }

          return u || (u = i[i.length - 1]), u.from < l && (u = {
            from: l,
            to: u.to,
            level: u.level
          }), u.to > c && (u = {
            from: u.from,
            to: c,
            level: u.level
          }), u;
        }

        function rr(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;

          if (null == Pn) {
            Pn = O("pre", null, "CodeMirror-line-like");

            for (var t = 0; t < 49; ++t) {
              Pn.appendChild(document.createTextNode("x")), Pn.appendChild(O("br"));
            }

            Pn.appendChild(document.createTextNode("x"));
          }

          L(e.measure, Pn);
          var n = Pn.offsetHeight / 50;
          return n > 3 && (e.cachedTextHeight = n), M(e.measure), n || 1;
        }

        function ir(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = O("span", "xxxxxxxxxx"),
              n = O("pre", [t], "CodeMirror-line-like");
          L(e.measure, n);
          var r = t.getBoundingClientRect(),
              i = (r.right - r.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }

        function or(e) {
          for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, s = 0; o; o = o.nextSibling, ++s) {
            var a = e.display.gutterSpecs[s].className;
            n[a] = o.offsetLeft + o.clientLeft + i, r[a] = o.clientWidth;
          }

          return {
            fixedPos: sr(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
          };
        }

        function sr(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }

        function ar(e) {
          var t = rr(e.display),
              n = e.options.lineWrapping,
              r = n && Math.max(5, e.display.scroller.clientWidth / ir(e.display) - 3);
          return function (i) {
            if (Rt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets) for (var s = 0; s < i.widgets.length; s++) {
              i.widgets[s].height && (o += i.widgets[s].height);
            }
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
          };
        }

        function lr(e) {
          var t = e.doc,
              n = ar(e);
          t.iter(function (e) {
            var t = n(e);
            t != e.height && Ze(e, t);
          });
        }

        function cr(e, t, n, r) {
          var i = e.display;
          if (!n && "true" == ke(t).getAttribute("cm-not-content")) return null;
          var o,
              s,
              a = i.lineSpace.getBoundingClientRect();

          try {
            o = t.clientX - a.left, s = t.clientY - a.top;
          } catch (e) {
            return null;
          }

          var l,
              c = Yn(e, o, s);

          if (r && c.xRel > 0 && (l = Ge(e.doc, c.line).text).length == c.ch) {
            var u = F(l, l.length, e.options.tabSize) - l.length;
            c = et(c.line, Math.max(0, Math.round((o - _n(e.display).left) / ir(e.display)) - u));
          }

          return c;
        }

        function ur(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;

          for (var n = e.display.view, r = 0; r < n.length; r++) {
            if ((t -= n[r].size) < 0) return r;
          }
        }

        function dr(e, t, n, r) {
          null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
          var i = e.display;
          if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ct && zt(e.doc, t) < i.viewTo && fr(e);else if (n <= i.viewFrom) Ct && jt(e.doc, n + r) > i.viewFrom ? fr(e) : (i.viewFrom += r, i.viewTo += r);else if (t <= i.viewFrom && n >= i.viewTo) fr(e);else if (t <= i.viewFrom) {
            var o = pr(e, n, n + r, 1);
            o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : fr(e);
          } else if (n >= i.viewTo) {
            var s = pr(e, t, t, -1);
            s ? (i.view = i.view.slice(0, s.index), i.viewTo = s.lineN) : fr(e);
          } else {
            var a = pr(e, t, t, -1),
                l = pr(e, n, n + r, 1);
            a && l ? (i.view = i.view.slice(0, a.index).concat(on(e, a.lineN, l.lineN)).concat(i.view.slice(l.index)), i.viewTo += r) : fr(e);
          }
          var c = i.externalMeasured;
          c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null));
        }

        function hr(e, t, n) {
          e.curOp.viewChanged = !0;
          var r = e.display,
              i = e.display.externalMeasured;

          if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
            var o = r.view[ur(e, t)];

            if (null != o.node) {
              var s = o.changes || (o.changes = []);
              -1 == j(s, n) && s.push(n);
            }
          }
        }

        function fr(e) {
          e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
        }

        function pr(e, t, n, r) {
          var i,
              o = ur(e, t),
              s = e.display.view;
          if (!Ct || n == e.doc.first + e.doc.size) return {
            index: o,
            lineN: n
          };

          for (var a = e.display.viewFrom, l = 0; l < o; l++) {
            a += s[l].size;
          }

          if (a != t) {
            if (r > 0) {
              if (o == s.length - 1) return null;
              i = a + s[o].size - t, o++;
            } else i = a - t;

            t += i, n += i;
          }

          for (; zt(e.doc, n) != n;) {
            if (o == (r < 0 ? 0 : s.length - 1)) return null;
            n += r * s[o - (r < 0 ? 1 : 0)].size, o += r;
          }

          return {
            index: o,
            lineN: n
          };
        }

        function mr(e) {
          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || i.node && !i.changes || ++n;
          }

          return n;
        }

        function gr(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }

        function vr(e, t) {
          void 0 === t && (t = !0);
          var n = e.doc,
              r = {},
              i = r.cursors = document.createDocumentFragment(),
              o = r.selection = document.createDocumentFragment(),
              s = e.options.$customCursor;
          s && (t = !0);

          for (var a = 0; a < n.sel.ranges.length; a++) {
            if (t || a != n.sel.primIndex) {
              var l = n.sel.ranges[a];

              if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                var c = l.empty();

                if (s) {
                  var u = s(e, l);
                  u && yr(e, u, i);
                } else (c || e.options.showCursorWhenSelecting) && yr(e, l.head, i);

                c || xr(e, l, o);
              }
            }
          }

          return r;
        }

        function yr(e, t, n) {
          var r = $n(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
              i = n.appendChild(O("div", " ", "CodeMirror-cursor"));

          if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
            var o = Gn(e, t, "div", null, null),
                s = o.right - o.left;
            i.style.width = (s > 0 ? s : e.defaultCharWidth()) + "px";
          }

          if (r.other) {
            var a = n.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            a.style.display = "", a.style.left = r.other.left + "px", a.style.top = r.other.top + "px", a.style.height = .85 * (r.other.bottom - r.other.top) + "px";
          }
        }

        function br(e, t) {
          return e.top - t.top || e.left - t.left;
        }

        function xr(e, t, n) {
          var r = e.display,
              i = e.doc,
              o = document.createDocumentFragment(),
              s = _n(e.display),
              a = s.left,
              l = Math.max(r.sizerWidth, Mn(e) - r.sizer.offsetLeft) - s.right,
              c = "ltr" == i.direction;

          function u(e, t, n, r) {
            t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), o.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? l - e : n) + "px;\n                             height: " + (r - t) + "px"));
          }

          function d(t, n, r) {
            var o,
                s,
                d = Ge(i, t),
                h = d.text.length;

            function f(n, r) {
              return Gn(e, et(t, n), "div", d, r);
            }

            function p(t, n, r) {
              var i = Jn(e, d, null, t),
                  o = "ltr" == n == ("after" == r) ? "left" : "right";
              return f("after" == r ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
            }

            var m = ce(d, i.direction);
            return function (e, t, n, r) {
              if (!e) return r(t, n, "ltr", 0);

              for (var i = !1, o = 0; o < e.length; ++o) {
                var s = e[o];
                (s.from < n && s.to > t || t == n && s.to == t) && (r(Math.max(s.from, t), Math.min(s.to, n), 1 == s.level ? "rtl" : "ltr", o), i = !0);
              }

              i || r(t, n, "ltr");
            }(m, n || 0, null == r ? h : r, function (e, t, i, d) {
              var g = "ltr" == i,
                  v = f(e, g ? "left" : "right"),
                  y = f(t - 1, g ? "right" : "left"),
                  b = null == n && 0 == e,
                  x = null == r && t == h,
                  w = 0 == d,
                  C = !m || d == m.length - 1;

              if (y.top - v.top <= 3) {
                var k = (c ? x : b) && C,
                    S = (c ? b : x) && w ? a : (g ? v : y).left,
                    _ = k ? l : (g ? y : v).right;

                u(S, v.top, _ - S, v.bottom);
              } else {
                var T, M, L, O;
                g ? (T = c && b && w ? a : v.left, M = c ? l : p(e, i, "before"), L = c ? a : p(t, i, "after"), O = c && x && C ? l : y.right) : (T = c ? p(e, i, "before") : a, M = !c && b && w ? l : v.right, L = !c && x && C ? a : y.left, O = c ? p(t, i, "after") : l), u(T, v.top, M - T, v.bottom), v.bottom < y.top && u(a, v.bottom, null, y.top), u(L, y.top, O - L, y.bottom);
              }

              (!o || br(v, o) < 0) && (o = v), br(y, o) < 0 && (o = y), (!s || br(v, s) < 0) && (s = v), br(y, s) < 0 && (s = y);
            }), {
              start: o,
              end: s
            };
          }

          var h = t.from(),
              f = t.to();
          if (h.line == f.line) d(h.line, h.ch, f.ch);else {
            var p = Ge(i, h.line),
                m = Ge(i, f.line),
                g = Ft(p) == Ft(m),
                v = d(h.line, h.ch, g ? p.text.length + 1 : null).end,
                y = d(f.line, g ? 0 : null, f.ch).start;
            g && (v.top < y.top - 2 ? (u(v.right, v.top, null, v.bottom), u(a, y.top, y.left, y.bottom)) : u(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && u(a, v.bottom, null, y.top);
          }
          n.appendChild(o);
        }

        function wr(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
              e.hasFocus() || _r(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
          }
        }

        function Cr(e) {
          e.hasFocus() || (e.display.input.focus(), e.state.focused || Sr(e));
        }

        function kr(e) {
          e.state.delayingBlurEvent = !0, setTimeout(function () {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && _r(e));
          }, 100);
        }

        function Sr(e, t) {
          e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (pe(e, "focus", e, t), e.state.focused = !0, D(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), l && setTimeout(function () {
            return e.display.input.reset(!0);
          }, 20)), e.display.input.receivedFocus()), wr(e));
        }

        function _r(e, t) {
          e.state.delayingBlurEvent || (e.state.focused && (pe(e, "blur", e, t), e.state.focused = !1, T(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
        }

        function Tr(e) {
          for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < t.view.length; l++) {
            var c = t.view[l],
                u = e.options.lineWrapping,
                d = void 0,
                h = 0;

            if (!c.hidden) {
              if (i += c.line.height, s && a < 8) {
                var f = c.node.offsetTop + c.node.offsetHeight;
                d = f - n, n = f;
              } else {
                var p = c.node.getBoundingClientRect();
                d = p.bottom - p.top, !u && c.text.firstChild && (h = c.text.firstChild.getBoundingClientRect().right - p.left - 1);
              }

              var m = c.line.height - d;
              if ((m > .005 || m < -.005) && (i < r && (o -= m), Ze(c.line, d), Mr(c.line), c.rest)) for (var g = 0; g < c.rest.length; g++) {
                Mr(c.rest[g]);
              }

              if (h > e.display.sizerWidth) {
                var v = Math.ceil(h / ir(e.display));
                v > e.display.maxLineLength && (e.display.maxLineLength = v, e.display.maxLine = c.line, e.display.maxLineChanged = !0);
              }
            }
          }

          Math.abs(o) > 2 && (t.scroller.scrollTop += o);
        }

        function Mr(e) {
          if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t],
                r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
        }

        function Lr(e, t, n) {
          var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
          r = Math.floor(r - kn(e));
          var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
              o = qe(t, r),
              s = qe(t, i);

          if (n && n.ensure) {
            var a = n.ensure.from.line,
                l = n.ensure.to.line;
            a < o ? (o = a, s = qe(t, Vt(Ge(t, a)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= s && (o = qe(t, Vt(Ge(t, l)) - e.wrapper.clientHeight), s = l);
          }

          return {
            from: o,
            to: Math.max(s, o + 1)
          };
        }

        function Or(e, t) {
          var n = e.display,
              r = rr(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
              o = Ln(e),
              s = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var a = e.doc.height + Sn(n),
              l = t.top < r,
              c = t.bottom > a - r;
          if (t.top < i) s.scrollTop = l ? 0 : t.top;else if (t.bottom > i + o) {
            var u = Math.min(t.top, (c ? a : t.bottom) - o);
            u != i && (s.scrollTop = u);
          }
          var d = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
              h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft - d,
              f = Mn(e) - n.gutters.offsetWidth,
              p = t.right - t.left > f;
          return p && (t.right = t.left + f), t.left < 10 ? s.scrollLeft = 0 : t.left < h ? s.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)) : t.right > f + h - 3 && (s.scrollLeft = t.right + (p ? 0 : 10) - f), s;
        }

        function Ar(e, t) {
          null != t && (Dr(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
        }

        function Nr(e) {
          Dr(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
          };
        }

        function Er(e, t, n) {
          null == t && null == n || Dr(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
        }

        function Dr(e) {
          var t = e.curOp.scrollToPos;
          t && (e.curOp.scrollToPos = null, Pr(e, Xn(e, t.from), Xn(e, t.to), t.margin));
        }

        function Pr(e, t, n, r) {
          var i = Or(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r
          });
          Er(e, i.scrollLeft, i.scrollTop);
        }

        function Ir(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 || (n || li(e, {
            top: t
          }), Wr(e, t, !0), n && li(e), ri(e, 100));
        }

        function Wr(e, t, n) {
          t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }

        function Hr(e, t, n, r) {
          t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, di(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
        }

        function Fr(e) {
          var t = e.display,
              n = t.gutters.offsetWidth,
              r = Math.round(e.doc.height + Sn(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Tn(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n
          };
        }

        var zr = function zr(e, t, n) {
          this.cm = n;
          var r = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
              i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
          r.tabIndex = i.tabIndex = -1, e(r), e(i), de(r, "scroll", function () {
            r.clientHeight && t(r.scrollTop, "vertical");
          }), de(i, "scroll", function () {
            i.clientWidth && t(i.scrollLeft, "horizontal");
          }), this.checkedZeroWidth = !1, s && a < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };

        zr.prototype.update = function (e) {
          var t = e.scrollWidth > e.clientWidth + 1,
              n = e.scrollHeight > e.clientHeight + 1,
              r = e.nativeBarWidth;

          if (n) {
            this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
            var i = e.viewHeight - (t ? r : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
          } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";

          if (t) {
            this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (n ? r : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
          } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

          return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
            right: n ? r : 0,
            bottom: t ? r : 0
          };
        }, zr.prototype.setScrollLeft = function (e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }, zr.prototype.setScrollTop = function (e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }, zr.prototype.zeroWidthHack = function () {
          var e = y && !f ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new z(), this.disableVert = new z();
        }, zr.prototype.enableZeroWidthBar = function (e, t, n) {
          e.style.pointerEvents = "auto", t.set(1e3, function r() {
            var i = e.getBoundingClientRect();
            ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r);
          });
        }, zr.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        };

        var jr = function jr() {};

        function Rr(e, t) {
          t || (t = Fr(e));
          var n = e.display.barWidth,
              r = e.display.barHeight;
          Br(e, t);

          for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) {
            n != e.display.barWidth && e.options.lineWrapping && Tr(e), Br(e, Fr(e)), n = e.display.barWidth, r = e.display.barHeight;
          }
        }

        function Br(e, t) {
          var n = e.display,
              r = n.scrollbars.update(t);
          n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
        }

        jr.prototype.update = function () {
          return {
            bottom: 0,
            right: 0
          };
        }, jr.prototype.setScrollLeft = function () {}, jr.prototype.setScrollTop = function () {}, jr.prototype.clear = function () {};
        var Vr = {
          native: zr,
          null: jr
        };

        function Ur(e) {
          e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && T(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Vr[e.options.scrollbarStyle](function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), de(t, "mousedown", function () {
              e.state.focused && setTimeout(function () {
                return e.display.input.focus();
              }, 0);
            }), t.setAttribute("cm-not-content", "true");
          }, function (t, n) {
            "horizontal" == n ? Hr(e, t) : Ir(e, t);
          }, e), e.display.scrollbars.addClass && D(e.display.wrapper, e.display.scrollbars.addClass);
        }

        var Kr = 0;

        function Gr(e) {
          var t;
          e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Kr,
            markArrays: null
          }, t = e.curOp, sn ? sn.ops.push(t) : t.ownsGroup = sn = {
            ops: [t],
            delayedCallbacks: []
          };
        }

        function $r(e) {
          var t = e.curOp;
          t && function (e, t) {
            var n = e.ownsGroup;
            if (n) try {
              !function (e) {
                var t = e.delayedCallbacks,
                    n = 0;

                do {
                  for (; n < t.length; n++) {
                    t[n].call(null);
                  }

                  for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
                      i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                    }
                  }
                } while (n < t.length);
              }(n);
            } finally {
              sn = null, t(n);
            }
          }(t, function (e) {
            for (var t = 0; t < e.ops.length; t++) {
              e.ops[t].cm.curOp = null;
            }

            !function (e) {
              for (var t = e.ops, n = 0; n < t.length; n++) {
                Xr(t[n]);
              }

              for (var r = 0; r < t.length; r++) {
                Zr(t[r]);
              }

              for (var i = 0; i < t.length; i++) {
                Yr(t[i]);
              }

              for (var o = 0; o < t.length; o++) {
                qr(t[o]);
              }

              for (var s = 0; s < t.length; s++) {
                Jr(t[s]);
              }
            }(e);
          });
        }

        function Xr(e) {
          var t = e.cm,
              n = t.display;
          (function (e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Tn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Tn(e) + "px", t.scrollbarsClipped = !0);
          })(t), e.updateMaxLine && Kt(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new oi(t, e.mustUpdate && {
            top: e.scrollTop,
            ensure: e.scrollToPos
          }, e.forceUpdate);
        }

        function Zr(e) {
          e.updatedDisplay = e.mustUpdate && si(e.cm, e.update);
        }

        function Yr(e) {
          var t = e.cm,
              n = t.display;
          e.updatedDisplay && Tr(t), e.barMeasure = Fr(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = An(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Mn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
        }

        function qr(e) {
          var t = e.cm;
          null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Hr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
          var n = e.focus && e.focus == E();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Rr(t, e.barMeasure), e.updatedDisplay && ui(t, e.barMeasure), e.selectionChanged && wr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Cr(e.cm);
        }

        function Jr(e) {
          var t = e.cm,
              n = t.display,
              r = t.doc;
          e.updatedDisplay && ai(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Wr(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Hr(t, e.scrollLeft, !0, !0), e.scrollToPos && function (e, t) {
            if (!me(e, "scrollCursorIntoView")) {
              var n = e.display,
                  r = n.sizer.getBoundingClientRect(),
                  i = null;

              if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                var o = O("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - kn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Tn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
              }
            }
          }(t, function (e, t, n, r) {
            var i;
            null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == t.sticky ? et(t.line, t.ch + 1, "before") : t, t = t.ch ? et(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t);

            for (var o = 0; o < 5; o++) {
              var s = !1,
                  a = $n(e, t),
                  l = n && n != t ? $n(e, n) : a,
                  c = Or(e, i = {
                left: Math.min(a.left, l.left),
                top: Math.min(a.top, l.top) - r,
                right: Math.max(a.left, l.left),
                bottom: Math.max(a.bottom, l.bottom) + r
              }),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft;
              if (null != c.scrollTop && (Ir(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (s = !0)), null != c.scrollLeft && (Hr(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (s = !0)), !s) break;
            }

            return i;
          }(t, at(r, e.scrollToPos.from), at(r, e.scrollToPos.to), e.scrollToPos.margin));
          var i = e.maybeHiddenMarkers,
              o = e.maybeUnhiddenMarkers;
          if (i) for (var s = 0; s < i.length; ++s) {
            i[s].lines.length || pe(i[s], "hide");
          }
          if (o) for (var a = 0; a < o.length; ++a) {
            o[a].lines.length && pe(o[a], "unhide");
          }
          n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && pe(t, "changes", t, e.changeObjs), e.update && e.update.finish();
        }

        function Qr(e, t) {
          if (e.curOp) return t();
          Gr(e);

          try {
            return t();
          } finally {
            $r(e);
          }
        }

        function ei(e, t) {
          return function () {
            if (e.curOp) return t.apply(e, arguments);
            Gr(e);

            try {
              return t.apply(e, arguments);
            } finally {
              $r(e);
            }
          };
        }

        function ti(e) {
          return function () {
            if (this.curOp) return e.apply(this, arguments);
            Gr(this);

            try {
              return e.apply(this, arguments);
            } finally {
              $r(this);
            }
          };
        }

        function ni(e) {
          return function () {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Gr(t);

            try {
              return e.apply(this, arguments);
            } finally {
              $r(t);
            }
          };
        }

        function ri(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, W(ii, e));
        }

        function ii(e) {
          var t = e.doc;

          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date() + e.options.workTime,
                r = ft(e, t.highlightFrontier),
                i = [];
            t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
              if (r.line >= e.display.viewFrom) {
                var s = o.styles,
                    a = o.text.length > e.options.maxHighlightLength ? Be(t.mode, r.state) : null,
                    l = dt(e, o, r, !0);
                a && (r.state = a), o.styles = l.styles;
                var c = o.styleClasses,
                    u = l.classes;
                u ? o.styleClasses = u : c && (o.styleClasses = null);

                for (var d = !s || s.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), h = 0; !d && h < s.length; ++h) {
                  d = s[h] != o.styles[h];
                }

                d && i.push(r.line), o.stateAfter = r.save(), r.nextLine();
              } else o.text.length <= e.options.maxHighlightLength && pt(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();

              if (+new Date() > n) return ri(e, e.options.workDelay), !0;
            }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && Qr(e, function () {
              for (var t = 0; t < i.length; t++) {
                hr(e, i[t], "text");
              }
            });
          }
        }

        var oi = function oi(e, t, n) {
          var r = e.display;
          this.viewport = t, this.visible = Lr(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = Mn(e), this.force = n, this.dims = or(e), this.events = [];
        };

        function si(e, t) {
          var n = e.display,
              r = e.doc;
          if (t.editorIsHidden) return fr(e), !1;
          if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == mr(e)) return !1;
          hi(e) && (fr(e), t.dims = or(e));
          var i = r.first + r.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
              s = Math.min(i, t.visible.to + e.options.viewportMargin);
          n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > s && n.viewTo - s < 20 && (s = Math.min(i, n.viewTo)), Ct && (o = zt(e.doc, o), s = jt(e.doc, s));
          var a = o != n.viewFrom || s != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
          (function (e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = on(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = on(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(ur(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(on(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, ur(e, n)))), r.viewTo = n;
          })(e, o, s), n.viewOffset = Vt(Ge(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
          var c = mr(e);
          if (!a && 0 == c && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;

          var u = function (e) {
            if (e.hasFocus()) return null;
            var t = E();
            if (!t || !N(e.display.lineDiv, t)) return null;
            var n = {
              activeElt: t
            };

            if (window.getSelection) {
              var r = window.getSelection();
              r.anchorNode && r.extend && N(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
            }

            return n;
          }(e);

          return c > 4 && (n.lineDiv.style.display = "none"), function (e, t, n) {
            var r = e.display,
                i = e.options.lineNumbers,
                o = r.lineDiv,
                s = o.firstChild;

            function a(t) {
              var n = t.nextSibling;
              return l && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
            }

            for (var c = r.view, u = r.viewFrom, d = 0; d < c.length; d++) {
              var h = c[d];
              if (h.hidden) ;else if (h.node && h.node.parentNode == o) {
                for (; s != h.node;) {
                  s = a(s);
                }

                var f = i && null != t && t <= u && h.lineNumber;
                h.changes && (j(h.changes, "gutter") > -1 && (f = !1), un(e, h, u, n)), f && (M(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(Qe(e.options, u)))), s = h.node.nextSibling;
              } else {
                var p = vn(e, h, u, n);
                o.insertBefore(p, s);
              }
              u += h.size;
            }

            for (; s;) {
              s = a(s);
            }
          }(e, n.updateLineNumbers, t.dims), c > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, function (e) {
            if (e && e.activeElt && e.activeElt != E() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && N(document.body, e.anchorNode) && N(document.body, e.focusNode))) {
              var t = window.getSelection(),
                  n = document.createRange();
              n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset);
            }
          }(u), M(n.cursorDiv), M(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, a && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, ri(e, 400)), n.updateLineNumbers = null, !0;
        }

        function ai(e, t) {
          for (var n = t.viewport, r = !0;; r = !1) {
            if (r && e.options.lineWrapping && t.oldDisplayWidth != Mn(e)) r && (t.visible = Lr(e.display, e.doc, n));else if (n && null != n.top && (n = {
              top: Math.min(e.doc.height + Sn(e.display) - Ln(e), n.top)
            }), t.visible = Lr(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
            if (!si(e, t)) break;
            Tr(e);
            var i = Fr(e);
            gr(e), Rr(e, i), ui(e, i), t.force = !1;
          }

          t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
        }

        function li(e, t) {
          var n = new oi(e, t);

          if (si(e, n)) {
            Tr(e), ai(e, n);
            var r = Fr(e);
            gr(e), Rr(e, r), ui(e, r), n.finish();
          }
        }

        function ci(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + "px", ln(e, "gutterChanged", e);
        }

        function ui(e, t) {
          e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tn(e) + "px";
        }

        function di(e) {
          var t = e.display,
              n = t.view;

          if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var r = sr(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", s = 0; s < n.length; s++) {
              if (!n[s].hidden) {
                e.options.fixedGutter && (n[s].gutter && (n[s].gutter.style.left = o), n[s].gutterBackground && (n[s].gutterBackground.style.left = o));
                var a = n[s].alignable;
                if (a) for (var l = 0; l < a.length; l++) {
                  a[l].style.left = o;
                }
              }
            }

            e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
          }
        }

        function hi(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
              n = Qe(e.options, t.first + t.size - 1),
              r = e.display;

          if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(O("div", [O("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                o = i.firstChild.offsetWidth,
                s = i.offsetWidth - o;
            return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - s) + 1, r.lineNumWidth = r.lineNumInnerWidth + s, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", ci(e.display), !0;
          }

          return !1;
        }

        function fi(e, t) {
          for (var n = [], r = !1, i = 0; i < e.length; i++) {
            var o = e[i],
                s = null;

            if ("string" != typeof o && (s = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
              if (!t) continue;
              r = !0;
            }

            n.push({
              className: o,
              style: s
            });
          }

          return t && !r && n.push({
            className: "CodeMirror-linenumbers",
            style: null
          }), n;
        }

        function pi(e) {
          var t = e.gutters,
              n = e.gutterSpecs;
          M(t), e.lineGutter = null;

          for (var r = 0; r < n.length; ++r) {
            var i = n[r],
                o = i.className,
                s = i.style,
                a = t.appendChild(O("div", null, "CodeMirror-gutter " + o));
            s && (a.style.cssText = s), "CodeMirror-linenumbers" == o && (e.lineGutter = a, a.style.width = (e.lineNumWidth || 1) + "px");
          }

          t.style.display = n.length ? "" : "none", ci(e);
        }

        function mi(e) {
          pi(e.display), dr(e), di(e);
        }

        function gi(e, t, r, i) {
          var o = this;
          this.input = r, o.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = A("div", null, "CodeMirror-code"), o.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = O("div", null, "CodeMirror-cursors"), o.measure = O("div", null, "CodeMirror-measure"), o.lineMeasure = O("div", null, "CodeMirror-measure"), o.lineSpace = A("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
          var c = A("div", [o.lineSpace], "CodeMirror-lines");
          o.mover = O("div", [c], null, "position: relative"), o.sizer = O("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = O("div", null, null, "position: absolute; height: 50px; width: 1px;"), o.gutters = O("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = O("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = O("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), o.wrapper.setAttribute("translate", "no"), s && a < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), l || n && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = fi(i.gutters, i.lineNumbers), pi(o), r.init(o);
        }

        oi.prototype.signal = function (e, t) {
          ve(e, t) && this.events.push(arguments);
        }, oi.prototype.finish = function () {
          for (var e = 0; e < this.events.length; e++) {
            pe.apply(null, this.events[e]);
          }
        };
        var vi = 0,
            yi = null;

        function bi(e) {
          var t = e.wheelDeltaX,
              n = e.wheelDeltaY;
          return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), {
            x: t,
            y: n
          };
        }

        function xi(e) {
          var t = bi(e);
          return t.x *= yi, t.y *= yi, t;
        }

        function wi(e, t) {
          var r = bi(t),
              i = r.x,
              o = r.y,
              s = yi;
          0 === t.deltaMode && (i = t.deltaX, o = t.deltaY, s = 1);
          var a = e.display,
              c = a.scroller,
              u = c.scrollWidth > c.clientWidth,
              h = c.scrollHeight > c.clientHeight;

          if (i && u || o && h) {
            if (o && y && l) e: for (var f = t.target, p = a.view; f != c; f = f.parentNode) {
              for (var m = 0; m < p.length; m++) {
                if (p[m].node == f) {
                  e.display.currentWheelTarget = f;
                  break e;
                }
              }
            }
            if (i && !n && !d && null != s) return o && h && Ir(e, Math.max(0, c.scrollTop + o * s)), Hr(e, Math.max(0, c.scrollLeft + i * s)), (!o || o && h) && be(t), void (a.wheelStartX = null);

            if (o && null != s) {
              var g = o * s,
                  v = e.doc.scrollTop,
                  b = v + a.wrapper.clientHeight;
              g < 0 ? v = Math.max(0, v + g - 50) : b = Math.min(e.doc.height, b + g + 50), li(e, {
                top: v,
                bottom: b
              });
            }

            vi < 20 && 0 !== t.deltaMode && (null == a.wheelStartX ? (a.wheelStartX = c.scrollLeft, a.wheelStartY = c.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
              if (null != a.wheelStartX) {
                var e = c.scrollLeft - a.wheelStartX,
                    t = c.scrollTop - a.wheelStartY,
                    n = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                a.wheelStartX = a.wheelStartY = null, n && (yi = (yi * vi + n) / (vi + 1), ++vi);
              }
            }, 200)) : (a.wheelDX += i, a.wheelDY += o));
          }
        }

        s ? yi = -.53 : n ? yi = 15 : u ? yi = -.7 : h && (yi = -1 / 3);

        var Ci = function Ci(e, t) {
          this.ranges = e, this.primIndex = t;
        };

        Ci.prototype.primary = function () {
          return this.ranges[this.primIndex];
        }, Ci.prototype.equals = function (e) {
          if (e == this) return !0;
          if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;

          for (var t = 0; t < this.ranges.length; t++) {
            var n = this.ranges[t],
                r = e.ranges[t];
            if (!nt(n.anchor, r.anchor) || !nt(n.head, r.head)) return !1;
          }

          return !0;
        }, Ci.prototype.deepCopy = function () {
          for (var e = [], t = 0; t < this.ranges.length; t++) {
            e[t] = new ki(rt(this.ranges[t].anchor), rt(this.ranges[t].head));
          }

          return new Ci(e, this.primIndex);
        }, Ci.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++) {
            if (!this.ranges[e].empty()) return !0;
          }

          return !1;
        }, Ci.prototype.contains = function (e, t) {
          t || (t = e);

          for (var n = 0; n < this.ranges.length; n++) {
            var r = this.ranges[n];
            if (tt(t, r.from()) >= 0 && tt(e, r.to()) <= 0) return n;
          }

          return -1;
        };

        var ki = function ki(e, t) {
          this.anchor = e, this.head = t;
        };

        function Si(e, t, n) {
          var r = e && e.options.selectionsMayTouch,
              i = t[n];
          t.sort(function (e, t) {
            return tt(e.from(), t.from());
          }), n = j(t, i);

          for (var o = 1; o < t.length; o++) {
            var s = t[o],
                a = t[o - 1],
                l = tt(a.to(), s.from());

            if (r && !s.empty() ? l > 0 : l >= 0) {
              var c = ot(a.from(), s.from()),
                  u = it(a.to(), s.to()),
                  d = a.empty() ? s.from() == s.head : a.from() == a.head;
              o <= n && --n, t.splice(--o, 2, new ki(d ? u : c, d ? c : u));
            }
          }

          return new Ci(t, n);
        }

        function _i(e, t) {
          return new Ci([new ki(e, t || e)], 0);
        }

        function Ti(e) {
          return e.text ? et(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
        }

        function Mi(e, t) {
          if (tt(e, t.from) < 0) return e;
          if (tt(e, t.to) <= 0) return Ti(t);
          var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              r = e.ch;
          return e.line == t.to.line && (r += Ti(t).ch - t.to.ch), et(n, r);
        }

        function Li(e, t) {
          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new ki(Mi(i.anchor, t), Mi(i.head, t)));
          }

          return Si(e.cm, n, e.sel.primIndex);
        }

        function Oi(e, t, n) {
          return e.line == t.line ? et(n.line, e.ch - t.ch + n.ch) : et(n.line + (e.line - t.line), e.ch);
        }

        function Ai(e) {
          e.doc.mode = ze(e.options, e.doc.modeOption), Ni(e);
        }

        function Ni(e) {
          e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
          }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ri(e, 100), e.state.modeGen++, e.curOp && dr(e);
        }

        function Ei(e, t) {
          return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
        }

        function Di(e, t, n, r) {
          function i(e) {
            return n ? n[e] : null;
          }

          function o(e, n, i) {
            (function (e, t, n, r) {
              e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Lt(e), Ot(e, n);
              var i = r ? r(e) : 1;
              i != e.height && Ze(e, i);
            })(e, n, i, r), ln(e, "change", e, t);
          }

          function s(e, t) {
            for (var n = [], o = e; o < t; ++o) {
              n.push(new Gt(c[o], i(o), r));
            }

            return n;
          }

          var a = t.from,
              l = t.to,
              c = t.text,
              u = Ge(e, a.line),
              d = Ge(e, l.line),
              h = X(c),
              f = i(c.length - 1),
              p = l.line - a.line;
          if (t.full) e.insert(0, s(0, c.length)), e.remove(c.length, e.size - c.length);else if (Ei(e, t)) {
            var m = s(0, c.length - 1);
            o(d, d.text, f), p && e.remove(a.line, p), m.length && e.insert(a.line, m);
          } else if (u == d) {
            if (1 == c.length) o(u, u.text.slice(0, a.ch) + h + u.text.slice(l.ch), f);else {
              var g = s(1, c.length - 1);
              g.push(new Gt(h + u.text.slice(l.ch), f, r)), o(u, u.text.slice(0, a.ch) + c[0], i(0)), e.insert(a.line + 1, g);
            }
          } else if (1 == c.length) o(u, u.text.slice(0, a.ch) + c[0] + d.text.slice(l.ch), i(0)), e.remove(a.line + 1, p);else {
            o(u, u.text.slice(0, a.ch) + c[0], i(0)), o(d, h + d.text.slice(l.ch), f);
            var v = s(1, c.length - 1);
            p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, v);
          }
          ln(e, "change", e, t);
        }

        function Pi(e, t, n) {
          !function e(r, i, o) {
            if (r.linked) for (var s = 0; s < r.linked.length; ++s) {
              var a = r.linked[s];

              if (a.doc != i) {
                var l = o && a.sharedHist;
                n && !l || (t(a.doc, l), e(a.doc, r, l));
              }
            }
          }(e, null, !0);
        }

        function Ii(e, t) {
          if (t.cm) throw new Error("This document is already in use.");
          e.doc = t, t.cm = e, lr(e), Ai(e), Wi(e), e.options.direction = t.direction, e.options.lineWrapping || Kt(e), e.options.mode = t.modeOption, dr(e);
        }

        function Wi(e) {
          ("rtl" == e.doc.direction ? D : T)(e.display.lineDiv, "CodeMirror-rtl");
        }

        function Hi(e) {
          this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
        }

        function Fi(e, t) {
          var n = {
            from: rt(t.from),
            to: Ti(t),
            text: $e(e, t.from, t.to)
          };
          return Vi(e, n, t.from.line, t.to.line + 1), Pi(e, function (e) {
            return Vi(e, n, t.from.line, t.to.line + 1);
          }, !0), n;
        }

        function zi(e) {
          for (; e.length && X(e).ranges;) {
            e.pop();
          }
        }

        function ji(e, t, n, r) {
          var i = e.history;
          i.undone.length = 0;
          var o,
              s,
              a = +new Date();
          if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function (e, t) {
            return t ? (zi(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0;
          }(i, i.lastOp == r))) s = X(o.changes), 0 == tt(t.from, t.to) && 0 == tt(t.from, s.to) ? s.to = Ti(t) : o.changes.push(Fi(e, t));else {
            var l = X(i.done);

            for (l && l.ranges || Bi(e.sel, i.done), o = {
              changes: [Fi(e, t)],
              generation: i.generation
            }, i.done.push(o); i.done.length > i.undoDepth;) {
              i.done.shift(), i.done[0].ranges || i.done.shift();
            }
          }
          i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, s || pe(e, "historyAdded");
        }

        function Ri(e, t, n, r) {
          var i = e.history,
              o = r && r.origin;
          n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function (e, t, n, r) {
            var i = t.charAt(0);
            return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
          }(e, o, X(i.done), t)) ? i.done[i.done.length - 1] = t : Bi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && zi(i.undone);
        }

        function Bi(e, t) {
          var n = X(t);
          n && n.ranges && n.equals(e) || t.push(e);
        }

        function Vi(e, t, n, r) {
          var i = t["spans_" + e.id],
              o = 0;
          e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
          });
        }

        function Ui(e) {
          if (!e) return null;

          for (var t, n = 0; n < e.length; ++n) {
            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
          }

          return t ? t.length ? t : null : e;
        }

        function Ki(e, t) {
          var n = function (e, t) {
            var n = t["spans_" + e.id];
            if (!n) return null;

            for (var r = [], i = 0; i < t.text.length; ++i) {
              r.push(Ui(n[i]));
            }

            return r;
          }(e, t),
              r = Tt(e, t);

          if (!n) return r;
          if (!r) return n;

          for (var i = 0; i < n.length; ++i) {
            var o = n[i],
                s = r[i];
            if (o && s) e: for (var a = 0; a < s.length; ++a) {
              for (var l = s[a], c = 0; c < o.length; ++c) {
                if (o[c].marker == l.marker) continue e;
              }

              o.push(l);
            } else s && (n[i] = s);
          }

          return n;
        }

        function Gi(e, t, n) {
          for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) r.push(n ? Ci.prototype.deepCopy.call(o) : o);else {
              var s = o.changes,
                  a = [];
              r.push({
                changes: a
              });

              for (var l = 0; l < s.length; ++l) {
                var c = s[l],
                    u = void 0;
                if (a.push({
                  from: c.from,
                  to: c.to,
                  text: c.text
                }), t) for (var d in c) {
                  (u = d.match(/^spans_(\d+)$/)) && j(t, Number(u[1])) > -1 && (X(a)[d] = c[d], delete c[d]);
                }
              }
            }
          }

          return r;
        }

        function $i(e, t, n, r) {
          if (r) {
            var i = e.anchor;

            if (n) {
              var o = tt(t, i) < 0;
              o != tt(n, i) < 0 ? (i = t, t = n) : o != tt(t, n) < 0 && (t = n);
            }

            return new ki(i, t);
          }

          return new ki(n || t, t);
        }

        function Xi(e, t, n, r, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Qi(e, new Ci([$i(e.sel.primary(), t, n, i)], 0), r);
        }

        function Zi(e, t, n) {
          for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) {
            r[o] = $i(e.sel.ranges[o], t[o], null, i);
          }

          Qi(e, Si(e.cm, r, e.sel.primIndex), n);
        }

        function Yi(e, t, n, r) {
          var i = e.sel.ranges.slice(0);
          i[t] = n, Qi(e, Si(e.cm, i, e.sel.primIndex), r);
        }

        function qi(e, t, n, r) {
          Qi(e, _i(t, n), r);
        }

        function Ji(e, t, n) {
          var r = e.history.done,
              i = X(r);
          i && i.ranges ? (r[r.length - 1] = t, eo(e, t, n)) : Qi(e, t, n);
        }

        function Qi(e, t, n) {
          eo(e, t, n), Ri(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
        }

        function eo(e, t, n) {
          (ve(e, "beforeSelectionChange") || e.cm && ve(e.cm, "beforeSelectionChange")) && (t = function (e, t, n) {
            var r = {
              ranges: t.ranges,
              update: function update(t) {
                this.ranges = [];

                for (var n = 0; n < t.length; n++) {
                  this.ranges[n] = new ki(at(e, t[n].anchor), at(e, t[n].head));
                }
              },
              origin: n && n.origin
            };
            return pe(e, "beforeSelectionChange", e, r), e.cm && pe(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Si(e.cm, r.ranges, r.ranges.length - 1) : t;
          }(e, t, n));
          var r = n && n.bias || (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          to(e, ro(e, t, r, !0)), n && !1 === n.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || Nr(e.cm);
        }

        function to(e, t) {
          t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ge(e.cm)), ln(e, "cursorActivity", e));
        }

        function no(e) {
          to(e, ro(e, e.sel, null, !1));
        }

        function ro(e, t, n, r) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var s = t.ranges[o],
                a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                l = oo(e, s.anchor, a && a.anchor, n, r),
                c = oo(e, s.head, a && a.head, n, r);
            (i || l != s.anchor || c != s.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new ki(l, c));
          }

          return i ? Si(e.cm, i, t.primIndex) : t;
        }

        function io(e, t, n, r, i) {
          var o = Ge(e, t.line);
          if (o.markedSpans) for (var s = 0; s < o.markedSpans.length; ++s) {
            var a = o.markedSpans[s],
                l = a.marker,
                c = "selectLeft" in l ? !l.selectLeft : l.inclusiveLeft,
                u = "selectRight" in l ? !l.selectRight : l.inclusiveRight;

            if ((null == a.from || (c ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (u ? a.to >= t.ch : a.to > t.ch))) {
              if (i && (pe(l, "beforeCursorEnter"), l.explicitlyCleared)) {
                if (o.markedSpans) {
                  --s;
                  continue;
                }

                break;
              }

              if (!l.atomic) continue;

              if (n) {
                var d = l.find(r < 0 ? 1 : -1),
                    h = void 0;
                if ((r < 0 ? u : c) && (d = so(e, d, -r, d && d.line == t.line ? o : null)), d && d.line == t.line && (h = tt(d, n)) && (r < 0 ? h < 0 : h > 0)) return io(e, d, t, r, i);
              }

              var f = l.find(r < 0 ? -1 : 1);
              return (r < 0 ? c : u) && (f = so(e, f, r, f.line == t.line ? o : null)), f ? io(e, f, t, r, i) : null;
            }
          }
          return t;
        }

        function oo(e, t, n, r, i) {
          var o = r || 1;
          return io(e, t, n, o, i) || !i && io(e, t, n, o, !0) || io(e, t, n, -o, i) || !i && io(e, t, n, -o, !0) || (e.cantEdit = !0, et(e.first, 0));
        }

        function so(e, t, n, r) {
          return n < 0 && 0 == t.ch ? t.line > e.first ? at(e, et(t.line - 1)) : null : n > 0 && t.ch == (r || Ge(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? et(t.line + 1, 0) : null : new et(t.line, t.ch + n);
        }

        function ao(e) {
          e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), B);
        }

        function lo(e, t, n) {
          var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function cancel() {
              return r.canceled = !0;
            }
          };
          return n && (r.update = function (t, n, i, o) {
            t && (r.from = at(e, t)), n && (r.to = at(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
          }), pe(e, "beforeChange", e, r), e.cm && pe(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
            from: r.from,
            to: r.to,
            text: r.text,
            origin: r.origin
          };
        }

        function co(e, t, n) {
          if (e.cm) {
            if (!e.cm.curOp) return ei(e.cm, co)(e, t, n);
            if (e.cm.state.suppressEdits) return;
          }

          if (!(ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange")) || (t = lo(e, t, !0))) {
            var r = wt && !n && function (e, t, n) {
              var r = null;
              if (e.iter(t.line, n.line + 1, function (e) {
                if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                  var n = e.markedSpans[t].marker;
                  !n.readOnly || r && -1 != j(r, n) || (r || (r = [])).push(n);
                }
              }), !r) return null;

              for (var i = [{
                from: t,
                to: n
              }], o = 0; o < r.length; ++o) {
                for (var s = r[o], a = s.find(0), l = 0; l < i.length; ++l) {
                  var c = i[l];

                  if (!(tt(c.to, a.from) < 0 || tt(c.from, a.to) > 0)) {
                    var u = [l, 1],
                        d = tt(c.from, a.from),
                        h = tt(c.to, a.to);
                    (d < 0 || !s.inclusiveLeft && !d) && u.push({
                      from: c.from,
                      to: a.from
                    }), (h > 0 || !s.inclusiveRight && !h) && u.push({
                      from: a.to,
                      to: c.to
                    }), i.splice.apply(i, u), l += u.length - 3;
                  }
                }
              }

              return i;
            }(e, t.from, t.to);

            if (r) for (var i = r.length - 1; i >= 0; --i) {
              uo(e, {
                from: r[i].from,
                to: r[i].to,
                text: i ? [""] : t.text,
                origin: t.origin
              });
            } else uo(e, t);
          }
        }

        function uo(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) {
            var n = Li(e, t);
            ji(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Tt(e, t));
            var r = [];
            Pi(e, function (e, n) {
              n || -1 != j(r, e.history) || (yo(e.history, t), r.push(e.history)), po(e, t, null, Tt(e, t));
            });
          }
        }

        function ho(e, t, n) {
          var r = e.cm && e.cm.state.suppressEdits;

          if (!r || n) {
            for (var i, o = e.history, s = e.sel, a = "undo" == t ? o.done : o.undone, l = "undo" == t ? o.undone : o.done, c = 0; c < a.length && (i = a[c], n ? !i.ranges || i.equals(e.sel) : i.ranges); c++) {
              ;
            }

            if (c != a.length) {
              for (o.lastOrigin = o.lastSelOrigin = null;;) {
                if (!(i = a.pop()).ranges) {
                  if (r) return void a.push(i);
                  break;
                }

                if (Bi(i, l), n && !i.equals(e.sel)) return void Qi(e, i, {
                  clearRedo: !1
                });
                s = i;
              }

              var u = [];
              Bi(s, l), l.push({
                changes: u,
                generation: o.generation
              }), o.generation = i.generation || ++o.maxGeneration;

              for (var d = ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange"), h = function h(n) {
                var r = i.changes[n];
                if (r.origin = t, d && !lo(e, r, !1)) return a.length = 0, {};
                u.push(Fi(e, r));
                var o = n ? Li(e, r) : X(a);
                po(e, r, o, Ki(e, r)), !n && e.cm && e.cm.scrollIntoView({
                  from: r.from,
                  to: Ti(r)
                });
                var s = [];
                Pi(e, function (e, t) {
                  t || -1 != j(s, e.history) || (yo(e.history, r), s.push(e.history)), po(e, r, null, Ki(e, r));
                });
              }, f = i.changes.length - 1; f >= 0; --f) {
                var p = h(f);
                if (p) return p.v;
              }
            }
          }
        }

        function fo(e, t) {
          if (0 != t && (e.first += t, e.sel = new Ci(Z(e.sel.ranges, function (e) {
            return new ki(et(e.anchor.line + t, e.anchor.ch), et(e.head.line + t, e.head.ch));
          }), e.sel.primIndex), e.cm)) {
            dr(e.cm, e.first, e.first - t, t);

            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
              hr(e.cm, r, "gutter");
            }
          }
        }

        function po(e, t, n, r) {
          if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, n, r);
          if (t.to.line < e.first) fo(e, t.text.length - 1 - (t.to.line - t.from.line));else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              fo(e, i), t = {
                from: et(e.first, 0),
                to: et(t.to.line + i, t.to.ch),
                text: [X(t.text)],
                origin: t.origin
              };
            }

            var o = e.lastLine();
            t.to.line > o && (t = {
              from: t.from,
              to: et(o, Ge(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin
            }), t.removed = $e(e, t.from, t.to), n || (n = Li(e, t)), e.cm ? function (e, t, n) {
              var r = e.doc,
                  i = e.display,
                  o = t.from,
                  s = t.to,
                  a = !1,
                  l = o.line;
              e.options.lineWrapping || (l = Ye(Ft(Ge(r, o.line))), r.iter(l, s.line + 1, function (e) {
                if (e == i.maxLine) return a = !0, !0;
              })), r.sel.contains(t.from, t.to) > -1 && ge(e), Di(r, t, n, ar(e)), e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function (e) {
                var t = Ut(e);
                t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, a = !1);
              }), a && (e.curOp.updateMaxLine = !0)), function (e, t) {
                if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                  for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = Ge(e, r).stateAfter;

                    if (i && (!(i instanceof ct) || r + i.lookAhead < t)) {
                      n = r + 1;
                      break;
                    }
                  }

                  e.highlightFrontier = Math.min(e.highlightFrontier, n);
                }
              }(r, o.line), ri(e, 400);
              var c = t.text.length - (s.line - o.line) - 1;
              t.full ? dr(e) : o.line != s.line || 1 != t.text.length || Ei(e.doc, t) ? dr(e, o.line, s.line + 1, c) : hr(e, o.line, "text");
              var u = ve(e, "changes"),
                  d = ve(e, "change");

              if (d || u) {
                var h = {
                  from: o,
                  to: s,
                  text: t.text,
                  removed: t.removed,
                  origin: t.origin
                };
                d && ln(e, "change", e, h), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
              }

              e.display.selForContextMenu = null;
            }(e.cm, t, r) : Di(e, t, r), eo(e, n, B), e.cantEdit && oo(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }

        function mo(e, t, n, r, i) {
          var o;
          r || (r = n), tt(r, n) < 0 && (n = (o = [r, n])[0], r = o[1]), "string" == typeof t && (t = e.splitLines(t)), co(e, {
            from: n,
            to: r,
            text: t,
            origin: i
          });
        }

        function go(e, t, n, r) {
          n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
        }

        function vo(e, t, n, r) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
                s = !0;

            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);

              for (var a = 0; a < o.ranges.length; a++) {
                go(o.ranges[a].anchor, t, n, r), go(o.ranges[a].head, t, n, r);
              }
            } else {
              for (var l = 0; l < o.changes.length; ++l) {
                var c = o.changes[l];
                if (n < c.from.line) c.from = et(c.from.line + r, c.from.ch), c.to = et(c.to.line + r, c.to.ch);else if (t <= c.to.line) {
                  s = !1;
                  break;
                }
              }

              s || (e.splice(0, i + 1), i = 0);
            }
          }
        }

        function yo(e, t) {
          var n = t.from.line,
              r = t.to.line,
              i = t.text.length - (r - n) - 1;
          vo(e.done, n, r, i), vo(e.undone, n, r, i);
        }

        function bo(e, t, n, r) {
          var i = t,
              o = t;
          return "number" == typeof t ? o = Ge(e, st(e, t)) : i = Ye(t), null == i ? null : (r(o, i) && e.cm && hr(e.cm, i, n), o);
        }

        function xo(e) {
          this.lines = e, this.parent = null;

          for (var t = 0, n = 0; n < e.length; ++n) {
            e[n].parent = this, t += e[n].height;
          }

          this.height = t;
        }

        function wo(e) {
          this.children = e;

          for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
            var i = e[r];
            t += i.chunkSize(), n += i.height, i.parent = this;
          }

          this.size = t, this.height = n, this.parent = null;
        }

        ki.prototype.from = function () {
          return ot(this.anchor, this.head);
        }, ki.prototype.to = function () {
          return it(this.anchor, this.head);
        }, ki.prototype.empty = function () {
          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
        }, xo.prototype = {
          chunkSize: function chunkSize() {
            return this.lines.length;
          },
          removeInner: function removeInner(e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
              var i = this.lines[n];
              this.height -= i.height, $t(i), ln(i, "delete");
            }

            this.lines.splice(e, t);
          },
          collapse: function collapse(e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function insertInner(e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));

            for (var r = 0; r < t.length; ++r) {
              t[r].parent = this;
            }
          },
          iterN: function iterN(e, t, n) {
            for (var r = e + t; e < r; ++e) {
              if (n(this.lines[e])) return !0;
            }
          }
        }, wo.prototype = {
          chunkSize: function chunkSize() {
            return this.size;
          },
          removeInner: function removeInner(e, t) {
            this.size -= t;

            for (var n = 0; n < this.children.length; ++n) {
              var r = this.children[n],
                  i = r.chunkSize();

              if (e < i) {
                var o = Math.min(t, i - e),
                    s = r.height;
                if (r.removeInner(e, o), this.height -= s - r.height, i == o && (this.children.splice(n--, 1), r.parent = null), 0 == (t -= o)) break;
                e = 0;
              } else e -= i;
            }

            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof xo))) {
              var a = [];
              this.collapse(a), this.children = [new xo(a)], this.children[0].parent = this;
            }
          },
          collapse: function collapse(e) {
            for (var t = 0; t < this.children.length; ++t) {
              this.children[t].collapse(e);
            }
          },
          insertInner: function insertInner(e, t, n) {
            this.size += t.length, this.height += n;

            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                  o = i.chunkSize();

              if (e <= o) {
                if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                  for (var s = i.lines.length % 25 + 25, a = s; a < i.lines.length;) {
                    var l = new xo(i.lines.slice(a, a += 25));
                    i.height -= l.height, this.children.splice(++r, 0, l), l.parent = this;
                  }

                  i.lines = i.lines.slice(0, s), this.maybeSpill();
                }

                break;
              }

              e -= o;
            }
          },
          maybeSpill: function maybeSpill() {
            if (!(this.children.length <= 10)) {
              var e = this;

              do {
                var t = new wo(e.children.splice(e.children.length - 5, 5));

                if (e.parent) {
                  e.size -= t.size, e.height -= t.height;
                  var n = j(e.parent.children, e);
                  e.parent.children.splice(n + 1, 0, t);
                } else {
                  var r = new wo(e.children);
                  r.parent = e, e.children = [r, t], e = r;
                }

                t.parent = e.parent;
              } while (e.children.length > 10);

              e.parent.maybeSpill();
            }
          },
          iterN: function iterN(e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
              var i = this.children[r],
                  o = i.chunkSize();

              if (e < o) {
                var s = Math.min(t, o - e);
                if (i.iterN(e, s, n)) return !0;
                if (0 == (t -= s)) break;
                e = 0;
              } else e -= o;
            }
          }
        };

        var Co = function Co(e, t, n) {
          if (n) for (var r in n) {
            n.hasOwnProperty(r) && (this[r] = n[r]);
          }
          this.doc = e, this.node = t;
        };

        function ko(e, t, n) {
          Vt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Ar(e, n);
        }

        Co.prototype.clear = function () {
          var e = this.doc.cm,
              t = this.line.widgets,
              n = this.line,
              r = Ye(n);

          if (null != r && t) {
            for (var i = 0; i < t.length; ++i) {
              t[i] == this && t.splice(i--, 1);
            }

            t.length || (n.widgets = null);
            var o = wn(this);
            Ze(n, Math.max(0, n.height - o)), e && (Qr(e, function () {
              ko(e, n, -o), hr(e, r, "widget");
            }), ln(e, "lineWidgetCleared", e, this, r));
          }
        }, Co.prototype.changed = function () {
          var e = this,
              t = this.height,
              n = this.doc.cm,
              r = this.line;
          this.height = null;
          var i = wn(this) - t;
          i && (Rt(this.doc, r) || Ze(r, r.height + i), n && Qr(n, function () {
            n.curOp.forceUpdate = !0, ko(n, r, i), ln(n, "lineWidgetChanged", n, e, Ye(r));
          }));
        }, ye(Co);

        var So = 0,
            _o = function _o(e, t) {
          this.lines = [], this.type = t, this.doc = e, this.id = ++So;
        };

        function To(e, t, n, r, i) {
          if (r && r.shared) return function (e, t, n, r, i) {
            (r = H(r)).shared = !1;
            var o = [To(e, t, n, r, i)],
                s = o[0],
                a = r.widgetNode;
            return Pi(e, function (e) {
              a && (r.widgetNode = a.cloneNode(!0)), o.push(To(e, at(e, t), at(e, n), r, i));

              for (var l = 0; l < e.linked.length; ++l) {
                if (e.linked[l].isParent) return;
              }

              s = X(o);
            }), new Mo(o, s);
          }(e, t, n, r, i);
          if (e.cm && !e.cm.curOp) return ei(e.cm, To)(e, t, n, r, i);
          var o = new _o(e, i),
              s = tt(t, n);
          if (r && H(r, o, !1), s > 0 || 0 == s && !1 !== o.clearWhenEmpty) return o;

          if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
            if (Ht(e, t.line, t, n, o) || t.line != n.line && Ht(e, n.line, t, n, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
            Ct = !0;
          }

          o.addToHistory && ji(e, {
            from: t,
            to: n,
            origin: "markText"
          }, e.sel, NaN);
          var a,
              l = t.line,
              c = e.cm;

          if (e.iter(l, n.line + 1, function (r) {
            c && o.collapsed && !c.options.lineWrapping && Ft(r) == c.display.maxLine && (a = !0), o.collapsed && l != t.line && Ze(r, 0), function (e, t, n) {
              var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet()));
              r && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
            }(r, new kt(o, l == t.line ? t.ch : null, l == n.line ? n.ch : null), e.cm && e.cm.curOp), ++l;
          }), o.collapsed && e.iter(t.line, n.line + 1, function (t) {
            Rt(e, t) && Ze(t, 0);
          }), o.clearOnEnter && de(o, "beforeCursorEnter", function () {
            return o.clear();
          }), o.readOnly && (wt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++So, o.atomic = !0), c) {
            if (a && (c.curOp.updateMaxLine = !0), o.collapsed) dr(c, t.line, n.line + 1);else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var u = t.line; u <= n.line; u++) {
              hr(c, u, "text");
            }
            o.atomic && no(c.doc), ln(c, "markerAdded", c, o);
          }

          return o;
        }

        _o.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
                t = e && !e.curOp;

            if (t && Gr(e), ve(this, "clear")) {
              var n = this.find();
              n && ln(this, "clear", n.from, n.to);
            }

            for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
              var s = this.lines[o],
                  a = St(s.markedSpans, this);
              e && !this.collapsed ? hr(e, Ye(s), "text") : e && (null != a.to && (i = Ye(s)), null != a.from && (r = Ye(s))), s.markedSpans = _t(s.markedSpans, a), null == a.from && this.collapsed && !Rt(this.doc, s) && e && Ze(s, rr(e.display));
            }

            if (e && this.collapsed && !e.options.lineWrapping) for (var l = 0; l < this.lines.length; ++l) {
              var c = Ft(this.lines[l]),
                  u = Ut(c);
              u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0);
            }
            null != r && e && this.collapsed && dr(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && no(e.doc)), e && ln(e, "markerCleared", e, this, r, i), t && $r(e), this.parent && this.parent.clear();
          }
        }, _o.prototype.find = function (e, t) {
          var n, r;
          null == e && "bookmark" == this.type && (e = 1);

          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
                s = St(o.markedSpans, this);
            if (null != s.from && (n = et(t ? o : Ye(o), s.from), -1 == e)) return n;
            if (null != s.to && (r = et(t ? o : Ye(o), s.to), 1 == e)) return r;
          }

          return n && {
            from: n,
            to: r
          };
        }, _o.prototype.changed = function () {
          var e = this,
              t = this.find(-1, !0),
              n = this,
              r = this.doc.cm;
          t && r && Qr(r, function () {
            var i = t.line,
                o = Ye(t.line),
                s = Nn(r, o);

            if (s && (Fn(s), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !Rt(n.doc, i) && null != n.height) {
              var a = n.height;
              n.height = null;
              var l = wn(n) - a;
              l && Ze(i, i.height + l);
            }

            ln(r, "markerChanged", r, e);
          });
        }, _o.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != j(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
          }

          this.lines.push(e);
        }, _o.prototype.detachLine = function (e) {
          if (this.lines.splice(j(this.lines, e), 1), !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }, ye(_o);

        var Mo = function Mo(e, t) {
          this.markers = e, this.primary = t;

          for (var n = 0; n < e.length; ++n) {
            e[n].parent = this;
          }
        };

        function Lo(e) {
          return e.findMarks(et(e.first, 0), e.clipPos(et(e.lastLine())), function (e) {
            return e.parent;
          });
        }

        function Oo(e) {
          for (var t = function t(_t2) {
            var n = e[_t2],
                r = [n.primary.doc];
            Pi(n.primary.doc, function (e) {
              return r.push(e);
            });

            for (var i = 0; i < n.markers.length; i++) {
              var o = n.markers[i];
              -1 == j(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1));
            }
          }, n = 0; n < e.length; n++) {
            t(n);
          }
        }

        Mo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;

            for (var e = 0; e < this.markers.length; ++e) {
              this.markers[e].clear();
            }

            ln(this, "clear");
          }
        }, Mo.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        }, ye(Mo);

        var Ao = 0,
            No = function No(e, t, n, r, i) {
          if (!(this instanceof No)) return new No(e, t, n, r, i);
          null == n && (n = 0), wo.call(this, [new xo([new Gt("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
          var o = et(n, 0);
          this.sel = _i(o), this.history = new Hi(null), this.id = ++Ao, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Di(this, {
            from: o,
            to: o,
            text: e
          }), Qi(this, _i(o), B);
        };

        No.prototype = q(wo.prototype, {
          constructor: No,
          iter: function iter(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function insert(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) {
              n += t[r].height;
            }

            this.insertInner(e - this.first, t, n);
          },
          remove: function remove(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function getValue(e) {
            var t = Xe(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: ni(function (e) {
            var t = et(this.first, 0),
                n = this.first + this.size - 1;
            co(this, {
              from: t,
              to: et(n, Ge(this, n).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0
            }, !0), this.cm && Er(this.cm, 0, 0), Qi(this, _i(t), B);
          }),
          replaceRange: function replaceRange(e, t, n, r) {
            mo(this, e, t = at(this, t), n = n ? at(this, n) : t, r);
          },
          getRange: function getRange(e, t, n) {
            var r = $e(this, at(this, e), at(this, t));
            return !1 === n ? r : "" === n ? r.join("") : r.join(n || this.lineSeparator());
          },
          getLine: function getLine(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function getLineHandle(e) {
            if (Je(this, e)) return Ge(this, e);
          },
          getLineNumber: function getLineNumber(e) {
            return Ye(e);
          },
          getLineHandleVisualStart: function getLineHandleVisualStart(e) {
            return "number" == typeof e && (e = Ge(this, e)), Ft(e);
          },
          lineCount: function lineCount() {
            return this.size;
          },
          firstLine: function firstLine() {
            return this.first;
          },
          lastLine: function lastLine() {
            return this.first + this.size - 1;
          },
          clipPos: function clipPos(e) {
            return at(this, e);
          },
          getCursor: function getCursor(e) {
            var t = this.sel.primary();
            return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
          },
          listSelections: function listSelections() {
            return this.sel.ranges;
          },
          somethingSelected: function somethingSelected() {
            return this.sel.somethingSelected();
          },
          setCursor: ni(function (e, t, n) {
            qi(this, at(this, "number" == typeof e ? et(e, t || 0) : e), null, n);
          }),
          setSelection: ni(function (e, t, n) {
            qi(this, at(this, e), at(this, t || e), n);
          }),
          extendSelection: ni(function (e, t, n) {
            Xi(this, at(this, e), t && at(this, t), n);
          }),
          extendSelections: ni(function (e, t) {
            Zi(this, lt(this, e), t);
          }),
          extendSelectionsBy: ni(function (e, t) {
            Zi(this, lt(this, Z(this.sel.ranges, e)), t);
          }),
          setSelections: ni(function (e, t, n) {
            if (e.length) {
              for (var r = [], i = 0; i < e.length; i++) {
                r[i] = new ki(at(this, e[i].anchor), at(this, e[i].head || e[i].anchor));
              }

              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Qi(this, Si(this.cm, r, t), n);
            }
          }),
          addSelection: ni(function (e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new ki(at(this, e), at(this, t || e))), Qi(this, Si(this.cm, r, r.length - 1), n);
          }),
          getSelection: function getSelection(e) {
            for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = $e(this, n[r].from(), n[r].to());
              t = t ? t.concat(i) : i;
            }

            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function getSelections(e) {
            for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
              var i = $e(this, n[r].from(), n[r].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), t[r] = i;
            }

            return t;
          },
          replaceSelection: function replaceSelection(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
              r[i] = e;
            }

            this.replaceSelections(r, t, n || "+input");
          },
          replaceSelections: ni(function (e, t, n) {
            for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var s = i.ranges[o];
              r[o] = {
                from: s.from(),
                to: s.to(),
                text: this.splitLines(e[o]),
                origin: n
              };
            }

            for (var a = t && "end" != t && function (e, t, n) {
              for (var r = [], i = et(e.first, 0), o = i, s = 0; s < t.length; s++) {
                var a = t[s],
                    l = Oi(a.from, i, o),
                    c = Oi(Ti(a), i, o);

                if (i = a.to, o = c, "around" == n) {
                  var u = e.sel.ranges[s],
                      d = tt(u.head, u.anchor) < 0;
                  r[s] = new ki(d ? c : l, d ? l : c);
                } else r[s] = new ki(l, l);
              }

              return new Ci(r, e.sel.primIndex);
            }(this, r, t), l = r.length - 1; l >= 0; l--) {
              co(this, r[l]);
            }

            a ? Ji(this, a) : this.cm && Nr(this.cm);
          }),
          undo: ni(function () {
            ho(this, "undo");
          }),
          redo: ni(function () {
            ho(this, "redo");
          }),
          undoSelection: ni(function () {
            ho(this, "undo", !0);
          }),
          redoSelection: ni(function () {
            ho(this, "redo", !0);
          }),
          setExtending: function setExtending(e) {
            this.extend = e;
          },
          getExtending: function getExtending() {
            return this.extend;
          },
          historySize: function historySize() {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
              e.done[r].ranges || ++t;
            }

            for (var i = 0; i < e.undone.length; i++) {
              e.undone[i].ranges || ++n;
            }

            return {
              undo: t,
              redo: n
            };
          },
          clearHistory: function clearHistory() {
            var e = this;
            this.history = new Hi(this.history), Pi(this, function (t) {
              return t.history = e.history;
            }, !0);
          },
          markClean: function markClean() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function changeGeneration(e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
          },
          isClean: function isClean(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function getHistory() {
            return {
              done: Gi(this.history.done),
              undone: Gi(this.history.undone)
            };
          },
          setHistory: function setHistory(e) {
            var t = this.history = new Hi(this.history);
            t.done = Gi(e.done.slice(0), null, !0), t.undone = Gi(e.undone.slice(0), null, !0);
          },
          setGutterMarker: ni(function (e, t, n) {
            return bo(this, e, "gutter", function (e) {
              var r = e.gutterMarkers || (e.gutterMarkers = {});
              return r[t] = n, !n && te(r) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: ni(function (e) {
            var t = this;
            this.iter(function (n) {
              n.gutterMarkers && n.gutterMarkers[e] && bo(t, n, "gutter", function () {
                return n.gutterMarkers[e] = null, te(n.gutterMarkers) && (n.gutterMarkers = null), !0;
              });
            });
          }),
          lineInfo: function lineInfo(e) {
            var t;

            if ("number" == typeof e) {
              if (!Je(this, e)) return null;
              if (t = e, !(e = Ge(this, e))) return null;
            } else if (null == (t = Ye(e))) return null;

            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets
            };
          },
          addLineClass: ni(function (e, t, n) {
            return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";

              if (e[r]) {
                if (S(n).test(e[r])) return !1;
                e[r] += " " + n;
              } else e[r] = n;

              return !0;
            });
          }),
          removeLineClass: ni(function (e, t, n) {
            return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                  i = e[r];
              if (!i) return !1;
              if (null == n) e[r] = null;else {
                var o = i.match(S(n));
                if (!o) return !1;
                var s = o.index + o[0].length;
                e[r] = i.slice(0, o.index) + (o.index && s != i.length ? " " : "") + i.slice(s) || null;
              }
              return !0;
            });
          }),
          addLineWidget: ni(function (e, t, n) {
            return function (e, t, n, r) {
              var i = new Co(e, n, r),
                  o = e.cm;
              return o && i.noHScroll && (o.display.alignWidgets = !0), bo(e, t, "widget", function (t) {
                var n = t.widgets || (t.widgets = []);

                if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Rt(e, t)) {
                  var r = Vt(t) < e.scrollTop;
                  Ze(t, t.height + wn(i)), r && Ar(o, i.height), o.curOp.forceUpdate = !0;
                }

                return !0;
              }), o && ln(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Ye(t)), i;
            }(this, e, t, n);
          }),
          removeLineWidget: function removeLineWidget(e) {
            e.clear();
          },
          markText: function markText(e, t, n) {
            return To(this, at(this, e), at(this, t), n, n && n.type || "range");
          },
          setBookmark: function setBookmark(e, t) {
            var n = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents
            };
            return To(this, e = at(this, e), e, n, "bookmark");
          },
          findMarksAt: function findMarksAt(e) {
            var t = [],
                n = Ge(this, (e = at(this, e)).line).markedSpans;
            if (n) for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
            return t;
          },
          findMarks: function findMarks(e, t, n) {
            e = at(this, e), t = at(this, t);
            var r = [],
                i = e.line;
            return this.iter(e.line, t.line + 1, function (o) {
              var s = o.markedSpans;
              if (s) for (var a = 0; a < s.length; a++) {
                var l = s[a];
                null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker);
              }
              ++i;
            }), r;
          },
          getAllMarks: function getAllMarks() {
            var e = [];
            return this.iter(function (t) {
              var n = t.markedSpans;
              if (n) for (var r = 0; r < n.length; ++r) {
                null != n[r].from && e.push(n[r].marker);
              }
            }), e;
          },
          posFromIndex: function posFromIndex(e) {
            var t,
                n = this.first,
                r = this.lineSeparator().length;
            return this.iter(function (i) {
              var o = i.text.length + r;
              if (o > e) return t = e, !0;
              e -= o, ++n;
            }), at(this, et(n, t));
          },
          indexFromPos: function indexFromPos(e) {
            var t = (e = at(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var n = this.lineSeparator().length;
            return this.iter(this.first, e.line, function (e) {
              t += e.text.length + n;
            }), t;
          },
          copy: function copy(e) {
            var t = new No(Xe(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
          },
          linkedDoc: function linkedDoc(e) {
            e || (e = {});
            var t = this.first,
                n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
            var r = new No(Xe(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({
              doc: r,
              sharedHist: e.sharedHist
            }), r.linked = [{
              doc: this,
              isParent: !0,
              sharedHist: e.sharedHist
            }], function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = r.find(),
                    o = e.clipPos(i.from),
                    s = e.clipPos(i.to);

                if (tt(o, s)) {
                  var a = To(e, o, s, r.primary, r.primary.type);
                  r.markers.push(a), a.parent = r;
                }
              }
            }(r, Lo(this)), r;
          },
          unlinkDoc: function unlinkDoc(e) {
            if (e instanceof Ms && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Oo(Lo(this));
                break;
              }
            }

            if (e.history == this.history) {
              var n = [e.id];
              Pi(e, function (e) {
                return n.push(e.id);
              }, !0), e.history = new Hi(null), e.history.done = Gi(this.history.done, n), e.history.undone = Gi(this.history.undone, n);
            }
          },
          iterLinkedDocs: function iterLinkedDocs(e) {
            Pi(this, e);
          },
          getMode: function getMode() {
            return this.mode;
          },
          getEditor: function getEditor() {
            return this.cm;
          },
          splitLines: function splitLines(e) {
            return this.lineSep ? e.split(this.lineSep) : Ne(e);
          },
          lineSeparator: function lineSeparator() {
            return this.lineSep || "\n";
          },
          setDirection: ni(function (e) {
            var t;
            "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
              return e.order = null;
            }), this.cm && Qr(t = this.cm, function () {
              Wi(t), dr(t);
            }));
          })
        }), No.prototype.eachLine = No.prototype.iter;
        var Eo = 0;

        function Do(e) {
          var t = this;

          if (Po(t), !me(t, e) && !Cn(t.display, e)) {
            be(e), s && (Eo = +new Date());
            var n = cr(t, e, !0),
                r = e.dataTransfer.files;
            if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), a = 0, l = function l() {
              ++a == i && ei(t, function () {
                var e = {
                  from: n = at(t.doc, n),
                  to: n,
                  text: t.doc.splitLines(o.filter(function (e) {
                    return null != e;
                  }).join(t.doc.lineSeparator())),
                  origin: "paste"
                };
                co(t.doc, e), Ji(t.doc, _i(at(t.doc, n), at(t.doc, Ti(e))));
              })();
            }, c = function c(e, n) {
              if (t.options.allowDropFileTypes && -1 == j(t.options.allowDropFileTypes, e.type)) l();else {
                var r = new FileReader();
                r.onerror = function () {
                  return l();
                }, r.onload = function () {
                  var e = r.result;
                  /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), l();
                }, r.readAsText(e);
              }
            }, u = 0; u < r.length; u++) {
              c(r[u], u);
            } else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
                return t.display.input.focus();
              }, 20);

              try {
                var d = e.dataTransfer.getData("Text");

                if (d) {
                  var h;
                  if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), eo(t.doc, _i(n, n)), h) for (var f = 0; f < h.length; ++f) {
                    mo(t.doc, "", h[f].anchor, h[f].head, "drag");
                  }
                  t.replaceSelection(d, "around", "paste"), t.display.input.focus();
                }
              } catch (e) {}
            }
          }
        }

        function Po(e) {
          e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
        }

        function Io(e) {
          if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
              var i = t[r].CodeMirror;
              i && n.push(i);
            }

            n.length && n[0].operation(function () {
              for (var t = 0; t < n.length; t++) {
                e(n[t]);
              }
            });
          }
        }

        var Wo = !1;

        function Ho() {
          var e;
          Wo || (de(window, "resize", function () {
            null == e && (e = setTimeout(function () {
              e = null, Io(Fo);
            }, 100));
          }), de(window, "blur", function () {
            return Io(_r);
          }), Wo = !0);
        }

        function Fo(e) {
          var t = e.display;
          t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
        }

        for (var zo = {
          3: "Pause",
          8: "Backspace",
          9: "Tab",
          13: "Enter",
          16: "Shift",
          17: "Ctrl",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Esc",
          32: "Space",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "Left",
          38: "Up",
          39: "Right",
          40: "Down",
          44: "PrintScrn",
          45: "Insert",
          46: "Delete",
          59: ";",
          61: "=",
          91: "Mod",
          92: "Mod",
          93: "Mod",
          106: "*",
          107: "=",
          109: "-",
          110: ".",
          111: "/",
          145: "ScrollLock",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
          224: "Mod",
          63232: "Up",
          63233: "Down",
          63234: "Left",
          63235: "Right",
          63272: "Delete",
          63273: "Home",
          63275: "End",
          63276: "PageUp",
          63277: "PageDown",
          63302: "Insert"
        }, jo = 0; jo < 10; jo++) {
          zo[jo + 48] = zo[jo + 96] = String(jo);
        }

        for (var Ro = 65; Ro <= 90; Ro++) {
          zo[Ro] = String.fromCharCode(Ro);
        }

        for (var Bo = 1; Bo <= 12; Bo++) {
          zo[Bo + 111] = zo[Bo + 63235] = "F" + Bo;
        }

        var Vo = {};

        function Uo(e) {
          var t,
              n,
              r,
              i,
              o = e.split(/-(?!$)/);
          e = o[o.length - 1];

          for (var s = 0; s < o.length - 1; s++) {
            var a = o[s];
            if (/^(cmd|meta|m)$/i.test(a)) i = !0;else if (/^a(lt)?$/i.test(a)) t = !0;else if (/^(c|ctrl|control)$/i.test(a)) n = !0;else {
              if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
              r = !0;
            }
          }

          return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
        }

        function Ko(e) {
          var t = {};

          for (var n in e) {
            if (e.hasOwnProperty(n)) {
              var r = e[n];
              if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;

              if ("..." == r) {
                delete e[n];
                continue;
              }

              for (var i = Z(n.split(" "), Uo), o = 0; o < i.length; o++) {
                var s = void 0,
                    a = void 0;
                o == i.length - 1 ? (a = i.join(" "), s = r) : (a = i.slice(0, o + 1).join(" "), s = "...");
                var l = t[a];

                if (l) {
                  if (l != s) throw new Error("Inconsistent bindings for " + a);
                } else t[a] = s;
              }

              delete e[n];
            }
          }

          for (var c in t) {
            e[c] = t[c];
          }

          return e;
        }

        function Go(e, t, n, r) {
          var i = (t = Yo(t)).call ? t.call(e, r) : t[e];
          if (!1 === i) return "nothing";
          if ("..." === i) return "multi";
          if (null != i && n(i)) return "handled";

          if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Go(e, t.fallthrough, n, r);

            for (var o = 0; o < t.fallthrough.length; o++) {
              var s = Go(e, t.fallthrough[o], n, r);
              if (s) return s;
            }
          }
        }

        function $o(e) {
          var t = "string" == typeof e ? e : zo[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }

        function Xo(e, t, n) {
          var r = e;
          return t.altKey && "Alt" != r && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
        }

        function Zo(e, t) {
          if (d && 34 == e.keyCode && e.char) return !1;
          var n = zo[e.keyCode];
          return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Xo(n, e, t));
        }

        function Yo(e) {
          return "string" == typeof e ? Vo[e] : e;
        }

        function qo(e, t) {
          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && tt(o.from, X(r).to) <= 0;) {
              var s = r.pop();

              if (tt(s.from, o.from) < 0) {
                o.from = s.from;
                break;
              }
            }

            r.push(o);
          }

          Qr(e, function () {
            for (var t = r.length - 1; t >= 0; t--) {
              mo(e.doc, "", r[t].from, r[t].to, "+delete");
            }

            Nr(e);
          });
        }

        function Jo(e, t, n) {
          var r = ie(e.text, t + n, n);
          return r < 0 || r > e.text.length ? null : r;
        }

        function Qo(e, t, n) {
          var r = Jo(e, t.ch, n);
          return null == r ? null : new et(t.line, r, n < 0 ? "after" : "before");
        }

        function es(e, t, n, r, i) {
          if (e) {
            "rtl" == t.doc.direction && (i = -i);
            var o = ce(n, t.doc.direction);

            if (o) {
              var s,
                  a = i < 0 ? X(o) : o[0],
                  l = i < 0 == (1 == a.level) ? "after" : "before";

              if (a.level > 0 || "rtl" == t.doc.direction) {
                var c = En(t, n);
                s = i < 0 ? n.text.length - 1 : 0;
                var u = Dn(t, c, s).top;
                s = oe(function (e) {
                  return Dn(t, c, e).top == u;
                }, i < 0 == (1 == a.level) ? a.from : a.to - 1, s), "before" == l && (s = Jo(n, s, 1));
              } else s = i < 0 ? a.to : a.from;

              return new et(r, s, l);
            }
          }

          return new et(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
        }

        Vo.basic = {
          Left: "goCharLeft",
          Right: "goCharRight",
          Up: "goLineUp",
          Down: "goLineDown",
          End: "goLineEnd",
          Home: "goLineStartSmart",
          PageUp: "goPageUp",
          PageDown: "goPageDown",
          Delete: "delCharAfter",
          Backspace: "delCharBefore",
          "Shift-Backspace": "delCharBefore",
          Tab: "defaultTab",
          "Shift-Tab": "indentAuto",
          Enter: "newlineAndIndent",
          Insert: "toggleOverwrite",
          Esc: "singleSelection"
        }, Vo.pcDefault = {
          "Ctrl-A": "selectAll",
          "Ctrl-D": "deleteLine",
          "Ctrl-Z": "undo",
          "Shift-Ctrl-Z": "redo",
          "Ctrl-Y": "redo",
          "Ctrl-Home": "goDocStart",
          "Ctrl-End": "goDocEnd",
          "Ctrl-Up": "goLineUp",
          "Ctrl-Down": "goLineDown",
          "Ctrl-Left": "goGroupLeft",
          "Ctrl-Right": "goGroupRight",
          "Alt-Left": "goLineStart",
          "Alt-Right": "goLineEnd",
          "Ctrl-Backspace": "delGroupBefore",
          "Ctrl-Delete": "delGroupAfter",
          "Ctrl-S": "save",
          "Ctrl-F": "find",
          "Ctrl-G": "findNext",
          "Shift-Ctrl-G": "findPrev",
          "Shift-Ctrl-F": "replace",
          "Shift-Ctrl-R": "replaceAll",
          "Ctrl-[": "indentLess",
          "Ctrl-]": "indentMore",
          "Ctrl-U": "undoSelection",
          "Shift-Ctrl-U": "redoSelection",
          "Alt-U": "redoSelection",
          fallthrough: "basic"
        }, Vo.emacsy = {
          "Ctrl-F": "goCharRight",
          "Ctrl-B": "goCharLeft",
          "Ctrl-P": "goLineUp",
          "Ctrl-N": "goLineDown",
          "Ctrl-A": "goLineStart",
          "Ctrl-E": "goLineEnd",
          "Ctrl-V": "goPageDown",
          "Shift-Ctrl-V": "goPageUp",
          "Ctrl-D": "delCharAfter",
          "Ctrl-H": "delCharBefore",
          "Alt-Backspace": "delWordBefore",
          "Ctrl-K": "killLine",
          "Ctrl-T": "transposeChars",
          "Ctrl-O": "openLine"
        }, Vo.macDefault = {
          "Cmd-A": "selectAll",
          "Cmd-D": "deleteLine",
          "Cmd-Z": "undo",
          "Shift-Cmd-Z": "redo",
          "Cmd-Y": "redo",
          "Cmd-Home": "goDocStart",
          "Cmd-Up": "goDocStart",
          "Cmd-End": "goDocEnd",
          "Cmd-Down": "goDocEnd",
          "Alt-Left": "goGroupLeft",
          "Alt-Right": "goGroupRight",
          "Cmd-Left": "goLineLeft",
          "Cmd-Right": "goLineRight",
          "Alt-Backspace": "delGroupBefore",
          "Ctrl-Alt-Backspace": "delGroupAfter",
          "Alt-Delete": "delGroupAfter",
          "Cmd-S": "save",
          "Cmd-F": "find",
          "Cmd-G": "findNext",
          "Shift-Cmd-G": "findPrev",
          "Cmd-Alt-F": "replace",
          "Shift-Cmd-Alt-F": "replaceAll",
          "Cmd-[": "indentLess",
          "Cmd-]": "indentMore",
          "Cmd-Backspace": "delWrappedLineLeft",
          "Cmd-Delete": "delWrappedLineRight",
          "Cmd-U": "undoSelection",
          "Shift-Cmd-U": "redoSelection",
          "Ctrl-Up": "goDocStart",
          "Ctrl-Down": "goDocEnd",
          fallthrough: ["basic", "emacsy"]
        }, Vo.default = y ? Vo.macDefault : Vo.pcDefault;
        var ts = {
          selectAll: ao,
          singleSelection: function singleSelection(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), B);
          },
          killLine: function killLine(e) {
            return qo(e, function (t) {
              if (t.empty()) {
                var n = Ge(e.doc, t.head.line).text.length;
                return t.head.ch == n && t.head.line < e.lastLine() ? {
                  from: t.head,
                  to: et(t.head.line + 1, 0)
                } : {
                  from: t.head,
                  to: et(t.head.line, n)
                };
              }

              return {
                from: t.from(),
                to: t.to()
              };
            });
          },
          deleteLine: function deleteLine(e) {
            return qo(e, function (t) {
              return {
                from: et(t.from().line, 0),
                to: at(e.doc, et(t.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function delLineLeft(e) {
            return qo(e, function (e) {
              return {
                from: et(e.from().line, 0),
                to: e.from()
              };
            });
          },
          delWrappedLineLeft: function delWrappedLineLeft(e) {
            return qo(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5;
              return {
                from: e.coordsChar({
                  left: 0,
                  top: n
                }, "div"),
                to: t.from()
              };
            });
          },
          delWrappedLineRight: function delWrappedLineRight(e) {
            return qo(e, function (t) {
              var n = e.charCoords(t.head, "div").top + 5,
                  r = e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: n
              }, "div");
              return {
                from: t.from(),
                to: r
              };
            });
          },
          undo: function undo(e) {
            return e.undo();
          },
          redo: function redo(e) {
            return e.redo();
          },
          undoSelection: function undoSelection(e) {
            return e.undoSelection();
          },
          redoSelection: function redoSelection(e) {
            return e.redoSelection();
          },
          goDocStart: function goDocStart(e) {
            return e.extendSelection(et(e.firstLine(), 0));
          },
          goDocEnd: function goDocEnd(e) {
            return e.extendSelection(et(e.lastLine()));
          },
          goLineStart: function goLineStart(e) {
            return e.extendSelectionsBy(function (t) {
              return ns(e, t.head.line);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineStartSmart: function goLineStartSmart(e) {
            return e.extendSelectionsBy(function (t) {
              return rs(e, t.head);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineEnd: function goLineEnd(e) {
            return e.extendSelectionsBy(function (t) {
              return function (e, t) {
                var n = Ge(e.doc, t),
                    r = function (e) {
                  for (var t; t = It(e);) {
                    e = t.find(1, !0).line;
                  }

                  return e;
                }(n);

                return r != n && (t = Ye(r)), es(!0, e, n, t, -1);
              }(e, t.head.line);
            }, {
              origin: "+move",
              bias: -1
            });
          },
          goLineRight: function goLineRight(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: n
              }, "div");
            }, U);
          },
          goLineLeft: function goLineLeft(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: 0,
                top: n
              }, "div");
            }, U);
          },
          goLineLeftSmart: function goLineLeftSmart(e) {
            return e.extendSelectionsBy(function (t) {
              var n = e.cursorCoords(t.head, "div").top + 5,
                  r = e.coordsChar({
                left: 0,
                top: n
              }, "div");
              return r.ch < e.getLine(r.line).search(/\S/) ? rs(e, t.head) : r;
            }, U);
          },
          goLineUp: function goLineUp(e) {
            return e.moveV(-1, "line");
          },
          goLineDown: function goLineDown(e) {
            return e.moveV(1, "line");
          },
          goPageUp: function goPageUp(e) {
            return e.moveV(-1, "page");
          },
          goPageDown: function goPageDown(e) {
            return e.moveV(1, "page");
          },
          goCharLeft: function goCharLeft(e) {
            return e.moveH(-1, "char");
          },
          goCharRight: function goCharRight(e) {
            return e.moveH(1, "char");
          },
          goColumnLeft: function goColumnLeft(e) {
            return e.moveH(-1, "column");
          },
          goColumnRight: function goColumnRight(e) {
            return e.moveH(1, "column");
          },
          goWordLeft: function goWordLeft(e) {
            return e.moveH(-1, "word");
          },
          goGroupRight: function goGroupRight(e) {
            return e.moveH(1, "group");
          },
          goGroupLeft: function goGroupLeft(e) {
            return e.moveH(-1, "group");
          },
          goWordRight: function goWordRight(e) {
            return e.moveH(1, "word");
          },
          delCharBefore: function delCharBefore(e) {
            return e.deleteH(-1, "codepoint");
          },
          delCharAfter: function delCharAfter(e) {
            return e.deleteH(1, "char");
          },
          delWordBefore: function delWordBefore(e) {
            return e.deleteH(-1, "word");
          },
          delWordAfter: function delWordAfter(e) {
            return e.deleteH(1, "word");
          },
          delGroupBefore: function delGroupBefore(e) {
            return e.deleteH(-1, "group");
          },
          delGroupAfter: function delGroupAfter(e) {
            return e.deleteH(1, "group");
          },
          indentAuto: function indentAuto(e) {
            return e.indentSelection("smart");
          },
          indentMore: function indentMore(e) {
            return e.indentSelection("add");
          },
          indentLess: function indentLess(e) {
            return e.indentSelection("subtract");
          },
          insertTab: function insertTab(e) {
            return e.replaceSelection("\t");
          },
          insertSoftTab: function insertSoftTab(e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
              var o = n[i].from(),
                  s = F(e.getLine(o.line), o.ch, r);
              t.push($(r - s % r));
            }

            e.replaceSelections(t);
          },
          defaultTab: function defaultTab(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
          },
          transposeChars: function transposeChars(e) {
            return Qr(e, function () {
              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
                if (t[r].empty()) {
                  var i = t[r].head,
                      o = Ge(e.doc, i.line).text;
                  if (o) if (i.ch == o.length && (i = new et(i.line, i.ch - 1)), i.ch > 0) i = new et(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), et(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
                    var s = Ge(e.doc, i.line - 1).text;
                    s && (i = new et(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + s.charAt(s.length - 1), et(i.line - 1, s.length - 1), i, "+transpose"));
                  }
                  n.push(new ki(i, i));
                }
              }

              e.setSelections(n);
            });
          },
          newlineAndIndent: function newlineAndIndent(e) {
            return Qr(e, function () {
              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) {
                e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
              }

              t = e.listSelections();

              for (var r = 0; r < t.length; r++) {
                e.indentLine(t[r].from().line, null, !0);
              }

              Nr(e);
            });
          },
          openLine: function openLine(e) {
            return e.replaceSelection("\n", "start");
          },
          toggleOverwrite: function toggleOverwrite(e) {
            return e.toggleOverwrite();
          }
        };

        function ns(e, t) {
          var n = Ge(e.doc, t),
              r = Ft(n);
          return r != n && (t = Ye(r)), es(!0, e, r, t, 1);
        }

        function rs(e, t) {
          var n = ns(e, t.line),
              r = Ge(e.doc, n.line),
              i = ce(r, e.doc.direction);

          if (!i || 0 == i[0].level) {
            var o = Math.max(n.ch, r.text.search(/\S/)),
                s = t.line == n.line && t.ch <= o && t.ch;
            return et(n.line, s ? 0 : o, n.sticky);
          }

          return n;
        }

        function is(e, t, n) {
          if ("string" == typeof t && !(t = ts[t])) return !1;
          e.display.input.ensurePolled();
          var r = e.display.shift,
              i = !1;

          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != R;
          } finally {
            e.display.shift = r, e.state.suppressEdits = !1;
          }

          return i;
        }

        var os = new z();

        function ss(e, t, n, r) {
          var i = e.state.keySeq;

          if (i) {
            if ($o(t)) return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : os.set(50, function () {
              e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
            }), as(e, i + " " + t, n, r)) return !0;
          }

          return as(e, t, n, r);
        }

        function as(e, t, n, r) {
          var i = function (e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
              var i = Go(t, e.state.keyMaps[r], n, e);
              if (i) return i;
            }

            return e.options.extraKeys && Go(t, e.options.extraKeys, n, e) || Go(t, e.options.keyMap, n, e);
          }(e, t, r);

          return "multi" == i && (e.state.keySeq = t), "handled" == i && ln(e, "keyHandled", e, t, n), "handled" != i && "multi" != i || (be(n), wr(e)), !!i;
        }

        function ls(e, t) {
          var n = Zo(t, !0);
          return !!n && (t.shiftKey && !e.state.keySeq ? ss(e, "Shift-" + n, t, function (t) {
            return is(e, t, !0);
          }) || ss(e, n, t, function (t) {
            if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return is(e, t);
          }) : ss(e, n, t, function (t) {
            return is(e, t);
          }));
        }

        var cs = null;

        function us(e) {
          var t = this;

          if (!(e.target && e.target != t.display.input.getField() || (t.curOp.focus = E(), me(t, e)))) {
            s && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var r = e.keyCode;
            t.display.shift = 16 == r || e.shiftKey;
            var i = ls(t, e);
            d && (cs = i ? r : null, i || 88 != r || De || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), n && !y && !i && 46 == r && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
              var t = e.display.lineDiv;

              function n(e) {
                18 != e.keyCode && e.altKey || (T(t, "CodeMirror-crosshair"), fe(document, "keyup", n), fe(document, "mouseover", n));
              }

              D(t, "CodeMirror-crosshair"), de(document, "keyup", n), de(document, "mouseover", n);
            }(t);
          }
        }

        function ds(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
        }

        function hs(e) {
          var t = this;

          if (!(e.target && e.target != t.display.input.getField() || Cn(t.display, e) || me(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
            var n = e.keyCode,
                r = e.charCode;
            if (d && n == cs) return cs = null, void be(e);

            if (!d || e.which && !(e.which < 10) || !ls(t, e)) {
              var i = String.fromCharCode(null == r ? n : r);
              "\b" != i && (function (e, t, n) {
                return ss(e, "'" + n + "'", t, function (t) {
                  return is(e, t, !0);
                });
              }(t, e, i) || t.display.input.onKeyPress(e));
            }
          }
        }

        var fs,
            ps,
            ms = function ms(e, t, n) {
          this.time = e, this.pos = t, this.button = n;
        };

        function gs(e) {
          var t = this,
              n = t.display;
          if (!(me(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, Cn(n, e)) l || (n.scroller.draggable = !1, setTimeout(function () {
            return n.scroller.draggable = !0;
          }, 100));else if (!bs(t, e)) {
            var r = cr(t, e),
                i = Se(e),
                o = r ? function (e, t) {
              var n = +new Date();
              return ps && ps.compare(n, e, t) ? (fs = ps = null, "triple") : fs && fs.compare(n, e, t) ? (ps = new ms(n, e, t), fs = null, "double") : (fs = new ms(n, e, t), ps = null, "single");
            }(r, i) : "single";
            window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && function (e, t, n, r, i) {
              var o = "Click";
              return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), ss(e, Xo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function (t) {
                if ("string" == typeof t && (t = ts[t]), !t) return !1;
                var r = !1;

                try {
                  e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != R;
                } finally {
                  e.state.suppressEdits = !1;
                }

                return r;
              });
            }(t, i, r, o, e) || (1 == i ? r ? function (e, t, n, r) {
              s ? setTimeout(W(Cr, e), 0) : e.curOp.focus = E();

              var i,
                  o = function (e, t, n) {
                var r = e.getOption("configureMouse"),
                    i = r ? r(e, t, n) : {};

                if (null == i.unit) {
                  var o = b ? n.shiftKey && n.metaKey : n.altKey;
                  i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                }

                return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)), i;
              }(e, n, r),
                  c = e.doc.sel;

              e.options.dragDrop && Me && !e.isReadOnly() && "single" == n && (i = c.contains(t)) > -1 && (tt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) && (tt(i.to(), t) > 0 || t.xRel < 0) ? function (e, t, n, r) {
                var i = e.display,
                    o = !1,
                    c = ei(e, function (t) {
                  l && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : kr(e)), fe(i.wrapper.ownerDocument, "mouseup", c), fe(i.wrapper.ownerDocument, "mousemove", u), fe(i.scroller, "dragstart", d), fe(i.scroller, "drop", c), o || (be(t), r.addNew || Xi(e.doc, n, null, null, r.extend), l && !h || s && 9 == a ? setTimeout(function () {
                    i.wrapper.ownerDocument.body.focus({
                      preventScroll: !0
                    }), i.input.focus();
                  }, 20) : i.input.focus());
                }),
                    u = function u(e) {
                  o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                },
                    d = function d() {
                  return o = !0;
                };

                l && (i.scroller.draggable = !0), e.state.draggingText = c, c.copy = !r.moveOnDrag, de(i.wrapper.ownerDocument, "mouseup", c), de(i.wrapper.ownerDocument, "mousemove", u), de(i.scroller, "dragstart", d), de(i.scroller, "drop", c), e.state.delayingBlurEvent = !0, setTimeout(function () {
                  return i.input.focus();
                }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
              }(e, r, t, o) : function (e, t, n, r) {
                s && kr(e);
                var i = e.display,
                    o = e.doc;
                be(t);
                var a,
                    l,
                    c = o.sel,
                    u = c.ranges;
                if (r.addNew && !r.extend ? (l = o.sel.contains(n), a = l > -1 ? u[l] : new ki(n, n)) : (a = o.sel.primary(), l = o.sel.primIndex), "rectangle" == r.unit) r.addNew || (a = new ki(n, n)), n = cr(e, t, !0, !0), l = -1;else {
                  var d = vs(e, n, r.unit);
                  a = r.extend ? $i(a, d.anchor, d.head, r.extend) : d;
                }
                r.addNew ? -1 == l ? (l = u.length, Qi(o, Si(e, u.concat([a]), l), {
                  scroll: !1,
                  origin: "*mouse"
                })) : u.length > 1 && u[l].empty() && "char" == r.unit && !r.extend ? (Qi(o, Si(e, u.slice(0, l).concat(u.slice(l + 1)), 0), {
                  scroll: !1,
                  origin: "*mouse"
                }), c = o.sel) : Yi(o, l, a, V) : (l = 0, Qi(o, new Ci([a], 0), V), c = o.sel);
                var h = n;

                function f(t) {
                  if (0 != tt(h, t)) if (h = t, "rectangle" == r.unit) {
                    for (var i = [], s = e.options.tabSize, u = F(Ge(o, n.line).text, n.ch, s), d = F(Ge(o, t.line).text, t.ch, s), f = Math.min(u, d), p = Math.max(u, d), m = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= g; m++) {
                      var v = Ge(o, m).text,
                          y = K(v, f, s);
                      f == p ? i.push(new ki(et(m, y), et(m, y))) : v.length > y && i.push(new ki(et(m, y), et(m, K(v, p, s))));
                    }

                    i.length || i.push(new ki(n, n)), Qi(o, Si(e, c.ranges.slice(0, l).concat(i), l), {
                      origin: "*mouse",
                      scroll: !1
                    }), e.scrollIntoView(t);
                  } else {
                    var b,
                        x = a,
                        w = vs(e, t, r.unit),
                        C = x.anchor;
                    tt(w.anchor, C) > 0 ? (b = w.head, C = ot(x.from(), w.anchor)) : (b = w.anchor, C = it(x.to(), w.head));
                    var k = c.ranges.slice(0);
                    k[l] = function (e, t) {
                      var n = t.anchor,
                          r = t.head,
                          i = Ge(e.doc, n.line);
                      if (0 == tt(n, r) && n.sticky == r.sticky) return t;
                      var o = ce(i);
                      if (!o) return t;
                      var s = ae(o, n.ch, n.sticky),
                          a = o[s];
                      if (a.from != n.ch && a.to != n.ch) return t;
                      var l,
                          c = s + (a.from == n.ch == (1 != a.level) ? 0 : 1);
                      if (0 == c || c == o.length) return t;
                      if (r.line != n.line) l = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;else {
                        var u = ae(o, r.ch, r.sticky),
                            d = u - s || (r.ch - n.ch) * (1 == a.level ? -1 : 1);
                        l = u == c - 1 || u == c ? d < 0 : d > 0;
                      }
                      var h = o[c + (l ? -1 : 0)],
                          f = l == (1 == h.level),
                          p = f ? h.from : h.to,
                          m = f ? "after" : "before";
                      return n.ch == p && n.sticky == m ? t : new ki(new et(n.line, p, m), r);
                    }(e, new ki(at(o, C), b)), Qi(o, Si(e, k, l), V);
                  }
                }

                var p = i.wrapper.getBoundingClientRect(),
                    m = 0;

                function g(t) {
                  var n = ++m,
                      s = cr(e, t, !0, "rectangle" == r.unit);
                  if (s) if (0 != tt(s, h)) {
                    e.curOp.focus = E(), f(s);
                    var a = Lr(i, o);
                    (s.line >= a.to || s.line < a.from) && setTimeout(ei(e, function () {
                      m == n && g(t);
                    }), 150);
                  } else {
                    var l = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                    l && setTimeout(ei(e, function () {
                      m == n && (i.scroller.scrollTop += l, g(t));
                    }), 50);
                  }
                }

                function v(t) {
                  e.state.selectingText = !1, m = 1 / 0, t && (be(t), i.input.focus()), fe(i.wrapper.ownerDocument, "mousemove", y), fe(i.wrapper.ownerDocument, "mouseup", b), o.history.lastSelOrigin = null;
                }

                var y = ei(e, function (e) {
                  0 !== e.buttons && Se(e) ? g(e) : v(e);
                }),
                    b = ei(e, v);
                e.state.selectingText = b, de(i.wrapper.ownerDocument, "mousemove", y), de(i.wrapper.ownerDocument, "mouseup", b);
              }(e, r, t, o);
            }(t, r, o, e) : ke(e) == n.scroller && be(e) : 2 == i ? (r && Xi(t.doc, r), setTimeout(function () {
              return n.input.focus();
            }, 20)) : 3 == i && (k ? t.display.input.onContextMenu(e) : kr(t)));
          }
        }

        function vs(e, t, n) {
          if ("char" == n) return new ki(t, t);
          if ("word" == n) return e.findWordAt(t);
          if ("line" == n) return new ki(et(t.line, 0), at(e.doc, et(t.line + 1, 0)));
          var r = n(e, t);
          return new ki(r.from, r.to);
        }

        function ys(e, t, n, r) {
          var i, o;
          if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;else try {
            i = t.clientX, o = t.clientY;
          } catch (e) {
            return !1;
          }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          r && be(t);
          var s = e.display,
              a = s.lineDiv.getBoundingClientRect();
          if (o > a.bottom || !ve(e, n)) return we(t);
          o -= a.top - s.viewOffset;

          for (var l = 0; l < e.display.gutterSpecs.length; ++l) {
            var c = s.gutters.childNodes[l];
            if (c && c.getBoundingClientRect().right >= i) return pe(e, n, e, qe(e.doc, o), e.display.gutterSpecs[l].className, t), we(t);
          }
        }

        function bs(e, t) {
          return ys(e, t, "gutterClick", !0);
        }

        function xs(e, t) {
          Cn(e.display, t) || function (e, t) {
            return !!ve(e, "gutterContextMenu") && ys(e, t, "gutterContextMenu", !1);
          }(e, t) || me(e, t, "contextmenu") || k || e.display.input.onContextMenu(t);
        }

        function ws(e) {
          e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), jn(e);
        }

        ms.prototype.compare = function (e, t, n) {
          return this.time + 400 > e && 0 == tt(t, this.pos) && n == this.button;
        };

        var Cs = {
          toString: function toString() {
            return "CodeMirror.Init";
          }
        },
            ks = {},
            Ss = {};

        function _s(e, t, n) {
          if (!t != !(n && n != Cs)) {
            var r = e.display.dragFunctions,
                i = t ? de : fe;
            i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop);
          }
        }

        function Ts(e) {
          e.options.lineWrapping ? (D(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (T(e.display.wrapper, "CodeMirror-wrap"), Kt(e)), lr(e), dr(e), jn(e), setTimeout(function () {
            return Rr(e);
          }, 100);
        }

        function Ms(e, t) {
          var n = this;
          if (!(this instanceof Ms)) return new Ms(e, t);
          this.options = t = t ? H(t) : {}, H(ks, t, !1);
          var r = t.value;
          "string" == typeof r ? r = new No(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
          var i = new Ms.inputStyles[t.inputStyle](this),
              o = this.display = new gi(e, r, i, t);

          for (var c in o.wrapper.CodeMirror = this, ws(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Ur(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new z(),
            keySeq: null,
            specialChars: null
          }, t.autofocus && !v && o.input.focus(), s && a < 11 && setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20), function (e) {
            var t = e.display;
            de(t.scroller, "mousedown", ei(e, gs)), de(t.scroller, "dblclick", s && a < 11 ? ei(e, function (t) {
              if (!me(e, t)) {
                var n = cr(e, t);

                if (n && !bs(e, t) && !Cn(e.display, t)) {
                  be(t);
                  var r = e.findWordAt(n);
                  Xi(e.doc, r.anchor, r.head);
                }
              }
            }) : function (t) {
              return me(e, t) || be(t);
            }), de(t.scroller, "contextmenu", function (t) {
              return xs(e, t);
            }), de(t.input.getField(), "contextmenu", function (n) {
              t.scroller.contains(n.target) || xs(e, n);
            });
            var n,
                r = {
              end: 0
            };

            function i() {
              t.activeTouch && (n = setTimeout(function () {
                return t.activeTouch = null;
              }, 1e3), (r = t.activeTouch).end = +new Date());
            }

            function o(e) {
              if (1 != e.touches.length) return !1;
              var t = e.touches[0];
              return t.radiusX <= 1 && t.radiusY <= 1;
            }

            function l(e, t) {
              if (null == t.left) return !0;
              var n = t.left - e.left,
                  r = t.top - e.top;
              return n * n + r * r > 400;
            }

            de(t.scroller, "touchstart", function (i) {
              if (!me(e, i) && !o(i) && !bs(e, i)) {
                t.input.ensurePolled(), clearTimeout(n);
                var s = +new Date();
                t.activeTouch = {
                  start: s,
                  moved: !1,
                  prev: s - r.end <= 300 ? r : null
                }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY);
              }
            }), de(t.scroller, "touchmove", function () {
              t.activeTouch && (t.activeTouch.moved = !0);
            }), de(t.scroller, "touchend", function (n) {
              var r = t.activeTouch;

              if (r && !Cn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                var o,
                    s = e.coordsChar(t.activeTouch, "page");
                o = !r.prev || l(r, r.prev) ? new ki(s, s) : !r.prev.prev || l(r, r.prev.prev) ? e.findWordAt(s) : new ki(et(s.line, 0), at(e.doc, et(s.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), be(n);
              }

              i();
            }), de(t.scroller, "touchcancel", i), de(t.scroller, "scroll", function () {
              t.scroller.clientHeight && (Ir(e, t.scroller.scrollTop), Hr(e, t.scroller.scrollLeft, !0), pe(e, "scroll", e));
            }), de(t.scroller, "mousewheel", function (t) {
              return wi(e, t);
            }), de(t.scroller, "DOMMouseScroll", function (t) {
              return wi(e, t);
            }), de(t.wrapper, "scroll", function () {
              return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
            }), t.dragFunctions = {
              enter: function enter(t) {
                me(e, t) || Ce(t);
              },
              over: function over(t) {
                me(e, t) || (function (e, t) {
                  var n = cr(e, t);

                  if (n) {
                    var r = document.createDocumentFragment();
                    yr(e, n, r), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), L(e.display.dragCursor, r);
                  }
                }(e, t), Ce(t));
              },
              start: function start(t) {
                return function (e, t) {
                  if (s && (!e.state.draggingText || +new Date() - Eo < 100)) Ce(t);else if (!me(e, t) && !Cn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !h)) {
                    var n = O("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), d && n.parentNode.removeChild(n);
                  }
                }(e, t);
              },
              drop: ei(e, Do),
              leave: function leave(t) {
                me(e, t) || Po(e);
              }
            };
            var c = t.input.getField();
            de(c, "keyup", function (t) {
              return ds.call(e, t);
            }), de(c, "keydown", ei(e, us)), de(c, "keypress", ei(e, hs)), de(c, "focus", function (t) {
              return Sr(e, t);
            }), de(c, "blur", function (t) {
              return _r(e, t);
            });
          }(this), Ho(), Gr(this), this.curOp.forceUpdate = !0, Ii(this, r), t.autofocus && !v || this.hasFocus() ? setTimeout(function () {
            n.hasFocus() && !n.state.focused && Sr(n);
          }, 20) : _r(this), Ss) {
            Ss.hasOwnProperty(c) && Ss[c](this, t[c], Cs);
          }

          hi(this), t.finishInit && t.finishInit(this);

          for (var u = 0; u < Ls.length; ++u) {
            Ls[u](this);
          }

          $r(this), l && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
        }

        Ms.defaults = ks, Ms.optionHandlers = Ss;
        var Ls = [];

        function Os(e, t, n, r) {
          var i,
              o = e.doc;
          null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = ft(e, t).state : n = "prev");
          var s = e.options.tabSize,
              a = Ge(o, t),
              l = F(a.text, null, s);
          a.stateAfter && (a.stateAfter = null);
          var c,
              u = a.text.match(/^\s*/)[0];

          if (r || /\S/.test(a.text)) {
            if ("smart" == n && ((c = o.mode.indent(i, a.text.slice(u.length), a.text)) == R || c > 150)) {
              if (!r) return;
              n = "prev";
            }
          } else c = 0, n = "not";

          "prev" == n ? c = t > o.first ? F(Ge(o, t - 1).text, null, s) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n), c = Math.max(0, c);
          var d = "",
              h = 0;
          if (e.options.indentWithTabs) for (var f = Math.floor(c / s); f; --f) {
            h += s, d += "\t";
          }
          if (h < c && (d += $(c - h)), d != u) return mo(o, d, et(t, 0), et(t, u.length), "+input"), a.stateAfter = null, !0;

          for (var p = 0; p < o.sel.ranges.length; p++) {
            var m = o.sel.ranges[p];

            if (m.head.line == t && m.head.ch < u.length) {
              var g = et(t, u.length);
              Yi(o, p, new ki(g, g));
              break;
            }
          }
        }

        Ms.defineInitHook = function (e) {
          return Ls.push(e);
        };

        var As = null;

        function Ns(e) {
          As = e;
        }

        function Es(e, t, n, r, i) {
          var o = e.doc;
          e.display.shift = !1, r || (r = o.sel);
          var s = +new Date() - 200,
              a = "paste" == i || e.state.pasteIncoming > s,
              l = Ne(t),
              c = null;
          if (a && r.ranges.length > 1) if (As && As.text.join("\n") == t) {
            if (r.ranges.length % As.text.length == 0) {
              c = [];

              for (var u = 0; u < As.text.length; u++) {
                c.push(o.splitLines(As.text[u]));
              }
            }
          } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (c = Z(l, function (e) {
            return [e];
          }));

          for (var d = e.curOp.updateInput, h = r.ranges.length - 1; h >= 0; h--) {
            var f = r.ranges[h],
                p = f.from(),
                m = f.to();
            f.empty() && (n && n > 0 ? p = et(p.line, p.ch - n) : e.state.overwrite && !a ? m = et(m.line, Math.min(Ge(o, m.line).text.length, m.ch + X(l).length)) : a && As && As.lineWise && As.text.join("\n") == l.join("\n") && (p = m = et(p.line, 0)));
            var g = {
              from: p,
              to: m,
              text: c ? c[h % c.length] : l,
              origin: i || (a ? "paste" : e.state.cutIncoming > s ? "cut" : "+input")
            };
            co(e.doc, g), ln(e, "inputRead", e, g);
          }

          t && !a && Ps(e, t), Nr(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
        }

        function Ds(e, t) {
          var n = e.clipboardData && e.clipboardData.getData("Text");
          if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Qr(t, function () {
            return Es(t, n, 0, null, "paste");
          }), !0;
        }

        function Ps(e, t) {
          if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];

            if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
              var o = e.getModeAt(i.head),
                  s = !1;

              if (o.electricChars) {
                for (var a = 0; a < o.electricChars.length; a++) {
                  if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                    s = Os(e, i.head.line, "smart");
                    break;
                  }
                }
              } else o.electricInput && o.electricInput.test(Ge(e.doc, i.head.line).text.slice(0, i.head.ch)) && (s = Os(e, i.head.line, "smart"));

              s && ln(e, "electricInput", e, i.head.line);
            }
          }
        }

        function Is(e) {
          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line,
                o = {
              anchor: et(i, 0),
              head: et(i + 1, 0)
            };
            n.push(o), t.push(e.getRange(o.anchor, o.head));
          }

          return {
            text: t,
            ranges: n
          };
        }

        function Ws(e, t, n, r) {
          e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t);
        }

        function Hs() {
          var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
              t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
          return l ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Ws(e), t;
        }

        function Fs(e, t, n, r, i) {
          var o = t,
              s = n,
              a = Ge(e, t.line),
              l = i && "rtl" == e.direction ? -n : n;

          function c(o) {
            var s, c;

            if ("codepoint" == r) {
              var u = a.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
              if (isNaN(u)) s = null;else {
                var d = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                s = new et(t.line, Math.max(0, Math.min(a.text.length, t.ch + n * (d ? 2 : 1))), -n);
              }
            } else s = i ? function (e, t, n, r) {
              var i = ce(t, e.doc.direction);
              if (!i) return Qo(t, n, r);
              n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
              var o = ae(i, n.ch, n.sticky),
                  s = i[o];
              if ("ltr" == e.doc.direction && s.level % 2 == 0 && (r > 0 ? s.to > n.ch : s.from < n.ch)) return Qo(t, n, r);

              var a,
                  l = function l(e, n) {
                return Jo(t, e instanceof et ? e.ch : e, n);
              },
                  c = function c(n) {
                return e.options.lineWrapping ? (a = a || En(e, t), Jn(e, t, a, n)) : {
                  begin: 0,
                  end: t.text.length
                };
              },
                  u = c("before" == n.sticky ? l(n, -1) : n.ch);

              if ("rtl" == e.doc.direction || 1 == s.level) {
                var d = 1 == s.level == r < 0,
                    h = l(n, d ? 1 : -1);

                if (null != h && (d ? h <= s.to && h <= u.end : h >= s.from && h >= u.begin)) {
                  var f = d ? "before" : "after";
                  return new et(n.line, h, f);
                }
              }

              var p = function p(e, t, r) {
                for (var o = function o(e, t) {
                  return t ? new et(n.line, l(e, 1), "before") : new et(n.line, e, "after");
                }; e >= 0 && e < i.length; e += t) {
                  var s = i[e],
                      a = t > 0 == (1 != s.level),
                      c = a ? r.begin : l(r.end, -1);
                  if (s.from <= c && c < s.to) return o(c, a);
                  if (c = a ? s.from : l(s.to, -1), r.begin <= c && c < r.end) return o(c, a);
                }
              },
                  m = p(o + r, r, u);

              if (m) return m;
              var g = r > 0 ? u.end : l(u.begin, -1);
              return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, c(g))) ? null : m;
            }(e.cm, a, t, n) : Qo(a, t, n);

            if (null == s) {
              if (o || (c = t.line + l) < e.first || c >= e.first + e.size || (t = new et(c, t.ch, t.sticky), !(a = Ge(e, c)))) return !1;
              t = es(i, e.cm, a, t.line, l);
            } else t = s;

            return !0;
          }

          if ("char" == r || "codepoint" == r) c();else if ("column" == r) c(!0);else if ("word" == r || "group" == r) for (var u = null, d = "group" == r, h = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || c(!f); f = !1) {
            var p = a.text.charAt(t.ch) || "\n",
                m = ee(p, h) ? "w" : d && "\n" == p ? "n" : !d || /\s/.test(p) ? null : "p";

            if (!d || f || m || (m = "s"), u && u != m) {
              n < 0 && (n = 1, c(), t.sticky = "after");
              break;
            }

            if (m && (u = m), n > 0 && !c(!f)) break;
          }
          var g = oo(e, t, o, s, !0);
          return nt(o, g) && (g.hitSide = !0), g;
        }

        function zs(e, t, n, r) {
          var i,
              o,
              s = e.doc,
              a = t.left;

          if ("page" == r) {
            var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                c = Math.max(l - .5 * rr(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * c;
          } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);

          for (; (o = Yn(e, a, i)).outside;) {
            if (n < 0 ? i <= 0 : i >= s.height) {
              o.hitSide = !0;
              break;
            }

            i += 5 * n;
          }

          return o;
        }

        var js = function js(e) {
          this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new z(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
        };

        function Rs(e, t) {
          var n = Nn(e, t.line);
          if (!n || n.hidden) return null;
          var r = Ge(e.doc, t.line),
              i = On(n, r, t.line),
              o = ce(r, e.doc.direction),
              s = "left";
          o && (s = ae(o, t.ch) % 2 ? "right" : "left");
          var a = Wn(i.map, t.ch, s);
          return a.offset = "right" == a.collapse ? a.end : a.start, a;
        }

        function Bs(e, t) {
          return t && (e.bad = !0), e;
        }

        function Vs(e, t, n) {
          var r;

          if (t == e.display.lineDiv) {
            if (!(r = e.display.lineDiv.childNodes[n])) return Bs(e.clipPos(et(e.display.viewTo - 1)), !0);
            t = null, n = 0;
          } else for (r = t;; r = r.parentNode) {
            if (!r || r == e.display.lineDiv) return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
          }

          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r) return Us(o, t, n);
          }
        }

        function Us(e, t, n) {
          var r = e.text.firstChild,
              i = !1;
          if (!t || !N(r, t)) return Bs(et(Ye(e.line), 0), !0);

          if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
            var o = e.rest ? X(e.rest) : e.line;
            return Bs(et(Ye(o), o.text.length), i);
          }

          var s = 3 == t.nodeType ? t : null,
              a = t;

          for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, n && (n = s.nodeValue.length)); a.parentNode != r;) {
            a = a.parentNode;
          }

          var l = e.measure,
              c = l.maps;

          function u(t, n, r) {
            for (var i = -1; i < (c ? c.length : 0); i++) {
              for (var o = i < 0 ? l.map : c[i], s = 0; s < o.length; s += 3) {
                var a = o[s + 2];

                if (a == t || a == n) {
                  var u = Ye(i < 0 ? e.line : e.rest[i]),
                      d = o[s] + r;
                  return (r < 0 || a != t) && (d = o[s + (r ? 1 : 0)]), et(u, d);
                }
              }
            }
          }

          var d = u(s, a, n);
          if (d) return Bs(d, i);

          for (var h = a.nextSibling, f = s ? s.nodeValue.length - n : 0; h; h = h.nextSibling) {
            if (d = u(h, h.firstChild, 0)) return Bs(et(d.line, d.ch - f), i);
            f += h.textContent.length;
          }

          for (var p = a.previousSibling, m = n; p; p = p.previousSibling) {
            if (d = u(p, p.firstChild, -1)) return Bs(et(d.line, d.ch + m), i);
            m += p.textContent.length;
          }
        }

        js.prototype.init = function (e) {
          var t = this,
              n = this,
              r = n.cm,
              i = n.div = e.lineDiv;

          function o(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == i) return !0;
              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
            }

            return !1;
          }

          function s(e) {
            if (o(e) && !me(r, e)) {
              if (r.somethingSelected()) Ns({
                lineWise: !1,
                text: r.getSelections()
              }), "cut" == e.type && r.replaceSelection("", null, "cut");else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Is(r);
                Ns({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type && r.operation(function () {
                  r.setSelections(t.ranges, 0, B), r.replaceSelection("", null, "cut");
                });
              }

              if (e.clipboardData) {
                e.clipboardData.clearData();
                var s = As.text.join("\n");
                if (e.clipboardData.setData("Text", s), e.clipboardData.getData("Text") == s) return void e.preventDefault();
              }

              var a = Hs(),
                  l = a.firstChild;
              r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), l.value = As.text.join("\n");
              var c = E();
              I(l), setTimeout(function () {
                r.display.lineSpace.removeChild(a), c.focus(), c == i && n.showPrimarySelection();
              }, 50);
            }
          }

          i.contentEditable = !0, Ws(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize), de(i, "paste", function (e) {
            !o(e) || me(r, e) || Ds(e, r) || a <= 11 && setTimeout(ei(r, function () {
              return t.updateFromDOM();
            }), 20);
          }), de(i, "compositionstart", function (e) {
            t.composing = {
              data: e.data,
              done: !1
            };
          }), de(i, "compositionupdate", function (e) {
            t.composing || (t.composing = {
              data: e.data,
              done: !1
            });
          }), de(i, "compositionend", function (e) {
            t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
          }), de(i, "touchstart", function () {
            return n.forceCompositionEnd();
          }), de(i, "input", function () {
            t.composing || t.readFromDOMSoon();
          }), de(i, "copy", s), de(i, "cut", s);
        }, js.prototype.screenReaderLabelChanged = function (e) {
          e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
        }, js.prototype.prepareSelection = function () {
          var e = vr(this.cm, !1);
          return e.focus = E() == this.div, e;
        }, js.prototype.showSelection = function (e, t) {
          e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
        }, js.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }, js.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
              t = this.cm,
              r = t.doc.sel.primary(),
              i = r.from(),
              o = r.to();
          if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();else {
            var s = Vs(t, e.anchorNode, e.anchorOffset),
                a = Vs(t, e.focusNode, e.focusOffset);

            if (!s || s.bad || !a || a.bad || 0 != tt(ot(s, a), i) || 0 != tt(it(s, a), o)) {
              var l = t.display.view,
                  c = i.line >= t.display.viewFrom && Rs(t, i) || {
                node: l[0].measure.map[2],
                offset: 0
              },
                  u = o.line < t.display.viewTo && Rs(t, o);

              if (!u) {
                var d = l[l.length - 1].measure,
                    h = d.maps ? d.maps[d.maps.length - 1] : d.map;
                u = {
                  node: h[h.length - 1],
                  offset: h[h.length - 2] - h[h.length - 3]
                };
              }

              if (c && u) {
                var f,
                    p = e.rangeCount && e.getRangeAt(0);

                try {
                  f = _(c.node, c.offset, u.offset, u.node);
                } catch (e) {}

                f && (!n && t.state.focused ? (e.collapse(c.node, c.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), p && null == e.anchorNode ? e.addRange(p) : n && this.startGracePeriod()), this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }, js.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
            e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
              return e.cm.curOp.selectionChanged = !0;
            });
          }, 20);
        }, js.prototype.showMultipleSelections = function (e) {
          L(this.cm.display.cursorDiv, e.cursors), L(this.cm.display.selectionDiv, e.selection);
        }, js.prototype.rememberSelection = function () {
          var e = this.getSelection();
          this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
        }, js.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return N(this.div, t);
        }, js.prototype.focus = function () {
          "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && E() == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus());
        }, js.prototype.blur = function () {
          this.div.blur();
        }, js.prototype.getField = function () {
          return this.div;
        }, js.prototype.supportsTouch = function () {
          return !0;
        }, js.prototype.receivedFocus = function () {
          var e = this,
              t = this;
          this.selectionInEditor() ? setTimeout(function () {
            return e.pollSelection();
          }, 20) : Qr(this.cm, function () {
            return t.cm.curOp.selectionChanged = !0;
          }), this.polling.set(this.cm.options.pollInterval, function e() {
            t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
          });
        }, js.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
        }, js.prototype.pollSelection = function () {
          if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var e = this.getSelection(),
                t = this.cm;
            if (g && u && this.cm.display.gutterSpecs.length && function (e) {
              for (var t = e; t; t = t.parentNode) {
                if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
              }

              return !1;
            }(e.anchorNode)) return this.cm.triggerOnKeyDown({
              type: "keydown",
              keyCode: 8,
              preventDefault: Math.abs
            }), this.blur(), void this.focus();

            if (!this.composing) {
              this.rememberSelection();
              var n = Vs(t, e.anchorNode, e.anchorOffset),
                  r = Vs(t, e.focusNode, e.focusOffset);
              n && r && Qr(t, function () {
                Qi(t.doc, _i(n, r), B), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
              });
            }
          }
        }, js.prototype.pollContent = function () {
          null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
          var e,
              t,
              n,
              r = this.cm,
              i = r.display,
              o = r.doc.sel.primary(),
              s = o.from(),
              a = o.to();
          if (0 == s.ch && s.line > r.firstLine() && (s = et(s.line - 1, Ge(r.doc, s.line - 1).length)), a.ch == Ge(r.doc, a.line).text.length && a.line < r.lastLine() && (a = et(a.line + 1, 0)), s.line < i.viewFrom || a.line > i.viewTo - 1) return !1;
          s.line == i.viewFrom || 0 == (e = ur(r, s.line)) ? (t = Ye(i.view[0].line), n = i.view[0].node) : (t = Ye(i.view[e].line), n = i.view[e - 1].node.nextSibling);
          var l,
              c,
              u = ur(r, a.line);
          if (u == i.view.length - 1 ? (l = i.viewTo - 1, c = i.lineDiv.lastChild) : (l = Ye(i.view[u + 1].line) - 1, c = i.view[u + 1].node.previousSibling), !n) return !1;

          for (var d = r.doc.splitLines(function (e, t, n, r, i) {
            var o = "",
                s = !1,
                a = e.doc.lineSeparator(),
                l = !1;

            function c() {
              s && (o += a, l && (o += a), s = l = !1);
            }

            function u(e) {
              e && (c(), o += e);
            }

            function d(t) {
              if (1 == t.nodeType) {
                var n = t.getAttribute("cm-text");
                if (n) return void u(n);
                var o,
                    h = t.getAttribute("cm-marker");

                if (h) {
                  var f = e.findMarks(et(r, 0), et(i + 1, 0), (g = +h, function (e) {
                    return e.id == g;
                  }));
                  return void (f.length && (o = f[0].find(0)) && u($e(e.doc, o.from, o.to).join(a)));
                }

                if ("false" == t.getAttribute("contenteditable")) return;
                var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                p && c();

                for (var m = 0; m < t.childNodes.length; m++) {
                  d(t.childNodes[m]);
                }

                /^(pre|p)$/i.test(t.nodeName) && (l = !0), p && (s = !0);
              } else 3 == t.nodeType && u(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));

              var g;
            }

            for (; d(t), t != n;) {
              t = t.nextSibling, l = !1;
            }

            return o;
          }(r, n, c, t, l)), h = $e(r.doc, et(t, 0), et(l, Ge(r.doc, l).text.length)); d.length > 1 && h.length > 1;) {
            if (X(d) == X(h)) d.pop(), h.pop(), l--;else {
              if (d[0] != h[0]) break;
              d.shift(), h.shift(), t++;
            }
          }

          for (var f = 0, p = 0, m = d[0], g = h[0], v = Math.min(m.length, g.length); f < v && m.charCodeAt(f) == g.charCodeAt(f);) {
            ++f;
          }

          for (var y = X(d), b = X(h), x = Math.min(y.length - (1 == d.length ? f : 0), b.length - (1 == h.length ? f : 0)); p < x && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
            ++p;
          }

          if (1 == d.length && 1 == h.length && t == s.line) for (; f && f > s.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
            f--, p++;
          }
          d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(f).replace(/\u200b+$/, "");
          var w = et(t, f),
              C = et(l, h.length ? X(h).length - p : 0);
          return d.length > 1 || d[0] || tt(w, C) ? (mo(r.doc, d, w, C, "+input"), !0) : void 0;
        }, js.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }, js.prototype.reset = function () {
          this.forceCompositionEnd();
        }, js.prototype.forceCompositionEnd = function () {
          this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
        }, js.prototype.readFromDOMSoon = function () {
          var e = this;
          null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
            if (e.readDOMTimeout = null, e.composing) {
              if (!e.composing.done) return;
              e.composing = null;
            }

            e.updateFromDOM();
          }, 80));
        }, js.prototype.updateFromDOM = function () {
          var e = this;
          !this.cm.isReadOnly() && this.pollContent() || Qr(this.cm, function () {
            return dr(e.cm);
          });
        }, js.prototype.setUneditable = function (e) {
          e.contentEditable = "false";
        }, js.prototype.onKeyPress = function (e) {
          0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || ei(this.cm, Es)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
        }, js.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String("nocursor" != e);
        }, js.prototype.onContextMenu = function () {}, js.prototype.resetPosition = function () {}, js.prototype.needsContentAttribute = !0;

        var Ks = function Ks(e) {
          this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new z(), this.hasSelection = !1, this.composing = null;
        };

        Ks.prototype.init = function (e) {
          var t = this,
              n = this,
              r = this.cm;
          this.createField(e);
          var i = this.textarea;

          function o(e) {
            if (!me(r, e)) {
              if (r.somethingSelected()) Ns({
                lineWise: !1,
                text: r.getSelections()
              });else {
                if (!r.options.lineWiseCopyCut) return;
                var t = Is(r);
                Ns({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type ? r.setSelections(t.ranges, null, B) : (n.prevInput = "", i.value = t.text.join("\n"), I(i));
              }
              "cut" == e.type && (r.state.cutIncoming = +new Date());
            }
          }

          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), m && (i.style.width = "0px"), de(i, "input", function () {
            s && a >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
          }), de(i, "paste", function (e) {
            me(r, e) || Ds(e, r) || (r.state.pasteIncoming = +new Date(), n.fastPoll());
          }), de(i, "cut", o), de(i, "copy", o), de(e.scroller, "paste", function (t) {
            if (!Cn(e, t) && !me(r, t)) {
              if (!i.dispatchEvent) return r.state.pasteIncoming = +new Date(), void n.focus();
              var o = new Event("paste");
              o.clipboardData = t.clipboardData, i.dispatchEvent(o);
            }
          }), de(e.lineSpace, "selectstart", function (t) {
            Cn(e, t) || be(t);
          }), de(i, "compositionstart", function () {
            var e = r.getCursor("from");
            n.composing && n.composing.range.clear(), n.composing = {
              start: e,
              range: r.markText(e, r.getCursor("to"), {
                className: "CodeMirror-composing"
              })
            };
          }), de(i, "compositionend", function () {
            n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
          });
        }, Ks.prototype.createField = function (e) {
          this.wrapper = Hs(), this.textarea = this.wrapper.firstChild;
        }, Ks.prototype.screenReaderLabelChanged = function (e) {
          e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
        }, Ks.prototype.prepareSelection = function () {
          var e = this.cm,
              t = e.display,
              n = e.doc,
              r = vr(e);

          if (e.options.moveInputWithCursor) {
            var i = $n(e, n.sel.primary().head, "div"),
                o = t.wrapper.getBoundingClientRect(),
                s = t.lineDiv.getBoundingClientRect();
            r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + s.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + s.left - o.left));
          }

          return r;
        }, Ks.prototype.showSelection = function (e) {
          var t = this.cm.display;
          L(t.cursorDiv, e.cursors), L(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
        }, Ks.prototype.reset = function (e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;

            if (t.somethingSelected()) {
              this.prevInput = "";
              var n = t.getSelection();
              this.textarea.value = n, t.state.focused && I(this.textarea), s && a >= 9 && (this.hasSelection = n);
            } else e || (this.prevInput = this.textarea.value = "", s && a >= 9 && (this.hasSelection = null));
          }
        }, Ks.prototype.getField = function () {
          return this.textarea;
        }, Ks.prototype.supportsTouch = function () {
          return !1;
        }, Ks.prototype.focus = function () {
          if ("nocursor" != this.cm.options.readOnly && (!v || E() != this.textarea)) try {
            this.textarea.focus();
          } catch (e) {}
        }, Ks.prototype.blur = function () {
          this.textarea.blur();
        }, Ks.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }, Ks.prototype.receivedFocus = function () {
          this.slowPoll();
        }, Ks.prototype.slowPoll = function () {
          var e = this;
          this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
        }, Ks.prototype.fastPoll = function () {
          var e = !1,
              t = this;
          t.pollingFast = !0, t.polling.set(20, function n() {
            t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, n));
          });
        }, Ks.prototype.poll = function () {
          var e = this,
              t = this.cm,
              n = this.textarea,
              r = this.prevInput;
          if (this.contextMenuPending || !t.state.focused || Ee(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
          var i = n.value;
          if (i == r && !t.somethingSelected()) return !1;
          if (s && a >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;

          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo");
          }

          for (var l = 0, c = Math.min(r.length, i.length); l < c && r.charCodeAt(l) == i.charCodeAt(l);) {
            ++l;
          }

          return Qr(t, function () {
            Es(t, i.slice(l), r.length - l, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
              className: "CodeMirror-composing"
            }));
          }), !0;
        }, Ks.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }, Ks.prototype.onKeyPress = function () {
          s && a >= 9 && (this.hasSelection = null), this.fastPoll();
        }, Ks.prototype.onContextMenu = function (e) {
          var t = this,
              n = t.cm,
              r = n.display,
              i = t.textarea;
          t.contextMenuPending && t.contextMenuPending();
          var o = cr(n, e),
              c = r.scroller.scrollTop;

          if (o && !d) {
            n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && ei(n, Qi)(n.doc, _i(o), B);
            var u,
                h = i.style.cssText,
                f = t.wrapper.style.cssText,
                p = t.wrapper.offsetParent.getBoundingClientRect();

            if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (s ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", l && (u = window.scrollY), r.input.focus(), l && window.scrollTo(null, u), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll), s && a >= 9 && g(), k) {
              Ce(e);

              var m = function m() {
                fe(window, "mouseup", m), setTimeout(v, 20);
              };

              de(window, "mouseup", m);
            } else setTimeout(v, 50);
          }

          function g() {
            if (null != i.selectionStart) {
              var e = n.somethingSelected(),
                  o = "​" + (e ? i.value : "");
              i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, r.selForContextMenu = n.doc.sel;
            }
          }

          function v() {
            if (t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = f, i.style.cssText = h, s && a < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = c), null != i.selectionStart)) {
              (!s || s && a < 9) && g();

              var e = 0,
                  o = function o() {
                r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? ei(n, ao)(n) : e++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null, r.input.reset());
              };

              r.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }, Ks.prototype.readOnlyChanged = function (e) {
          e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e;
        }, Ks.prototype.setUneditable = function () {}, Ks.prototype.needsContentAttribute = !1, function (e) {
          var t = e.optionHandlers;

          function n(n, r, i, o) {
            e.defaults[n] = r, i && (t[n] = o ? function (e, t, n) {
              n != Cs && i(e, t, n);
            } : i);
          }

          e.defineOption = n, e.Init = Cs, n("value", "", function (e, t) {
            return e.setValue(t);
          }, !0), n("mode", null, function (e, t) {
            e.doc.modeOption = t, Ai(e);
          }, !0), n("indentUnit", 2, Ai, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function (e) {
            Ni(e), jn(e), dr(e);
          }, !0), n("lineSeparator", null, function (e, t) {
            if (e.doc.lineSep = t, t) {
              var n = [],
                  r = e.doc.first;
              e.doc.iter(function (e) {
                for (var i = 0;;) {
                  var o = e.text.indexOf(t, i);
                  if (-1 == o) break;
                  i = o + t.length, n.push(et(r, o));
                }

                r++;
              });

              for (var i = n.length - 1; i >= 0; i--) {
                mo(e.doc, t, n[i], et(n[i].line, n[i].ch + t.length));
              }
            }
          }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
            e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != Cs && e.refresh();
          }), n("specialCharPlaceholder", Jt, function (e) {
            return e.refresh();
          }, !0), n("electricChars", !0), n("inputStyle", v ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          }, !0), n("spellcheck", !1, function (e, t) {
            return e.getInputField().spellcheck = t;
          }, !0), n("autocorrect", !1, function (e, t) {
            return e.getInputField().autocorrect = t;
          }, !0), n("autocapitalize", !1, function (e, t) {
            return e.getInputField().autocapitalize = t;
          }, !0), n("rtlMoveVisually", !x), n("wholeLineUpdateBefore", !0), n("theme", "default", function (e) {
            ws(e), mi(e);
          }, !0), n("keyMap", "default", function (e, t, n) {
            var r = Yo(t),
                i = n != Cs && Yo(n);
            i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
          }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, Ts, !0), n("gutters", [], function (e, t) {
            e.display.gutterSpecs = fi(t, e.options.lineNumbers), mi(e);
          }, !0), n("fixedGutter", !0, function (e, t) {
            e.display.gutters.style.left = t ? sr(e.display) + "px" : "0", e.refresh();
          }, !0), n("coverGutterNextToScrollbar", !1, function (e) {
            return Rr(e);
          }, !0), n("scrollbarStyle", "native", function (e) {
            Ur(e), Rr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
          }, !0), n("lineNumbers", !1, function (e, t) {
            e.display.gutterSpecs = fi(e.options.gutters, t), mi(e);
          }, !0), n("firstLineNumber", 1, mi, !0), n("lineNumberFormatter", function (e) {
            return e;
          }, mi, !0), n("showCursorWhenSelecting", !1, gr, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function (e, t) {
            "nocursor" == t && (_r(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
          }), n("screenReaderLabel", null, function (e, t) {
            t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t);
          }), n("disableInput", !1, function (e, t) {
            t || e.display.input.reset();
          }, !0), n("dragDrop", !0, _s), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, gr, !0), n("singleCursorHeightPerLine", !0, gr, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, Ni, !0), n("addModeClass", !1, Ni, !0), n("pollInterval", 100), n("undoDepth", 200, function (e, t) {
            return e.doc.history.undoDepth = t;
          }), n("historyEventDelay", 1250), n("viewportMargin", 10, function (e) {
            return e.refresh();
          }, !0), n("maxHighlightLength", 1e4, Ni, !0), n("moveInputWithCursor", !0, function (e, t) {
            t || e.display.input.resetPosition();
          }), n("tabindex", null, function (e, t) {
            return e.display.input.getField().tabIndex = t || "";
          }), n("autofocus", null), n("direction", "ltr", function (e, t) {
            return e.doc.setDirection(t);
          }, !0), n("phrases", null);
        }(Ms), function (e) {
          var t = e.optionHandlers,
              n = e.helpers = {};
          e.prototype = {
            constructor: e,
            focus: function focus() {
              window.focus(), this.display.input.focus();
            },
            setOption: function setOption(e, n) {
              var r = this.options,
                  i = r[e];
              r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && ei(this, t[e])(this, n, i), pe(this, "optionChange", this, e));
            },
            getOption: function getOption(e) {
              return this.options[e];
            },
            getDoc: function getDoc() {
              return this.doc;
            },
            addKeyMap: function addKeyMap(e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](Yo(e));
            },
            removeKeyMap: function removeKeyMap(e) {
              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
              }
            },
            addOverlay: ti(function (t, n) {
              var r = t.token ? t : e.getMode(this.options, t);
              if (r.startState) throw new Error("Overlays may not be stateful.");
              (function (e, t, n) {
                for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) {
                  r++;
                }

                e.splice(r, 0, t);
              })(this.state.overlays, {
                mode: r,
                modeSpec: t,
                opaque: n && n.opaque,
                priority: n && n.priority || 0
              }, function (e) {
                return e.priority;
              }), this.state.modeGen++, dr(this);
            }),
            removeOverlay: ti(function (e) {
              for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || "string" == typeof e && r.name == e) return t.splice(n, 1), this.state.modeGen++, void dr(this);
              }
            }),
            indentLine: ti(function (e, t, n) {
              "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Je(this.doc, e) && Os(this, e, t, n);
            }),
            indentSelection: ti(function (e) {
              for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.empty()) i.head.line > n && (Os(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && Nr(this));else {
                  var o = i.from(),
                      s = i.to(),
                      a = Math.max(n, o.line);
                  n = Math.min(this.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;

                  for (var l = a; l < n; ++l) {
                    Os(this, l, e);
                  }

                  var c = this.doc.sel.ranges;
                  0 == o.ch && t.length == c.length && c[r].from().ch > 0 && Yi(this.doc, r, new ki(o, c[r].to()), B);
                }
              }
            }),
            getTokenAt: function getTokenAt(e, t) {
              return yt(this, e, t);
            },
            getLineTokens: function getLineTokens(e, t) {
              return yt(this, et(e), t, !0);
            },
            getTokenTypeAt: function getTokenTypeAt(e) {
              e = at(this.doc, e);
              var t,
                  n = ht(this, Ge(this.doc, e.line)),
                  r = 0,
                  i = (n.length - 1) / 2,
                  o = e.ch;
              if (0 == o) t = n[2];else for (;;) {
                var s = r + i >> 1;
                if ((s ? n[2 * s - 1] : 0) >= o) i = s;else {
                  if (!(n[2 * s + 1] < o)) {
                    t = n[2 * s + 2];
                    break;
                  }

                  r = s + 1;
                }
              }
              var a = t ? t.indexOf("overlay ") : -1;
              return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
            },
            getModeAt: function getModeAt(t) {
              var n = this.doc.mode;
              return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
            },
            getHelper: function getHelper(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function getHelpers(e, t) {
              var r = [];
              if (!n.hasOwnProperty(t)) return r;
              var i = n[t],
                  o = this.getModeAt(e);
              if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);else if (o[t]) for (var s = 0; s < o[t].length; s++) {
                var a = i[o[t][s]];
                a && r.push(a);
              } else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);

              for (var l = 0; l < i._global.length; l++) {
                var c = i._global[l];
                c.pred(o, this) && -1 == j(r, c.val) && r.push(c.val);
              }

              return r;
            },
            getStateAfter: function getStateAfter(e, t) {
              var n = this.doc;
              return ft(this, (e = st(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
            },
            cursorCoords: function cursorCoords(e, t) {
              var n = this.doc.sel.primary();
              return $n(this, null == e ? n.head : "object" == _typeof(e) ? at(this.doc, e) : e ? n.from() : n.to(), t || "page");
            },
            charCoords: function charCoords(e, t) {
              return Gn(this, at(this.doc, e), t || "page");
            },
            coordsChar: function coordsChar(e, t) {
              return Yn(this, (e = Kn(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function lineAtHeight(e, t) {
              return e = Kn(this, {
                top: e,
                left: 0
              }, t || "page").top, qe(this.doc, e + this.display.viewOffset);
            },
            heightAtLine: function heightAtLine(e, t, n) {
              var r,
                  i = !1;

              if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = Ge(this.doc, e);
              } else r = e;

              return Un(this, r, {
                top: 0,
                left: 0
              }, t || "page", n || i).top + (i ? this.doc.height - Vt(r) : 0);
            },
            defaultTextHeight: function defaultTextHeight() {
              return rr(this.display);
            },
            defaultCharWidth: function defaultCharWidth() {
              return ir(this.display);
            },
            getViewport: function getViewport() {
              return {
                from: this.display.viewFrom,
                to: this.display.viewTo
              };
            },
            addWidget: function addWidget(e, t, n, r, i) {
              var o,
                  s,
                  a,
                  l = this.display,
                  c = (e = $n(this, at(this.doc, e))).bottom,
                  u = e.left;
              if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), l.sizer.appendChild(t), "over" == r) c = e.top;else if ("above" == r || "near" == r) {
                var d = Math.max(l.wrapper.clientHeight, this.doc.height),
                    h = Math.max(l.sizer.clientWidth, l.lineSpace.clientWidth);
                ("above" == r || e.bottom + t.offsetHeight > d) && e.top > t.offsetHeight ? c = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= d && (c = e.bottom), u + t.offsetWidth > h && (u = h - t.offsetWidth);
              }
              t.style.top = c + "px", t.style.left = t.style.right = "", "right" == i ? (u = l.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? u = 0 : "middle" == i && (u = (l.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && (o = this, s = {
                left: u,
                top: c,
                right: u + t.offsetWidth,
                bottom: c + t.offsetHeight
              }, null != (a = Or(o, s)).scrollTop && Ir(o, a.scrollTop), null != a.scrollLeft && Hr(o, a.scrollLeft));
            },
            triggerOnKeyDown: ti(us),
            triggerOnKeyPress: ti(hs),
            triggerOnKeyUp: ds,
            triggerOnMouseDown: ti(gs),
            execCommand: function execCommand(e) {
              if (ts.hasOwnProperty(e)) return ts[e].call(null, this);
            },
            triggerElectric: ti(function (e) {
              Ps(this, e);
            }),
            findPosH: function findPosH(e, t, n, r) {
              var i = 1;
              t < 0 && (i = -1, t = -t);

              for (var o = at(this.doc, e), s = 0; s < t && !(o = Fs(this.doc, o, i, n, r)).hitSide; ++s) {
                ;
              }

              return o;
            },
            moveH: ti(function (e, t) {
              var n = this;
              this.extendSelectionsBy(function (r) {
                return n.display.shift || n.doc.extend || r.empty() ? Fs(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
              }, U);
            }),
            deleteH: ti(function (e, t) {
              var n = this.doc.sel,
                  r = this.doc;
              n.somethingSelected() ? r.replaceSelection("", null, "+delete") : qo(this, function (n) {
                var i = Fs(r, n.head, e, t, !1);
                return e < 0 ? {
                  from: i,
                  to: n.head
                } : {
                  from: n.head,
                  to: i
                };
              });
            }),
            findPosV: function findPosV(e, t, n, r) {
              var i = 1,
                  o = r;
              t < 0 && (i = -1, t = -t);

              for (var s = at(this.doc, e), a = 0; a < t; ++a) {
                var l = $n(this, s, "div");
                if (null == o ? o = l.left : l.left = o, (s = zs(this, l, i, n)).hitSide) break;
              }

              return s;
            },
            moveV: ti(function (e, t) {
              var n = this,
                  r = this.doc,
                  i = [],
                  o = !this.display.shift && !r.extend && r.sel.somethingSelected();
              if (r.extendSelectionsBy(function (s) {
                if (o) return e < 0 ? s.from() : s.to();
                var a = $n(n, s.head, "div");
                null != s.goalColumn && (a.left = s.goalColumn), i.push(a.left);
                var l = zs(n, a, e, t);
                return "page" == t && s == r.sel.primary() && Ar(n, Gn(n, l, "div").top - a.top), l;
              }, U), i.length) for (var s = 0; s < r.sel.ranges.length; s++) {
                r.sel.ranges[s].goalColumn = i[s];
              }
            }),
            findWordAt: function findWordAt(e) {
              var t = Ge(this.doc, e.line).text,
                  n = e.ch,
                  r = e.ch;

              if (t) {
                var i = this.getHelper(e, "wordChars");
                "before" != e.sticky && r != t.length || !n ? ++r : --n;

                for (var o = t.charAt(n), s = ee(o, i) ? function (e) {
                  return ee(e, i);
                } : /\s/.test(o) ? function (e) {
                  return /\s/.test(e);
                } : function (e) {
                  return !/\s/.test(e) && !ee(e);
                }; n > 0 && s(t.charAt(n - 1));) {
                  --n;
                }

                for (; r < t.length && s(t.charAt(r));) {
                  ++r;
                }
              }

              return new ki(et(e.line, n), et(e.line, r));
            },
            toggleOverwrite: function toggleOverwrite(e) {
              null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? D(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"), pe(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function hasFocus() {
              return this.display.input.getField() == E();
            },
            isReadOnly: function isReadOnly() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ti(function (e, t) {
              Er(this, e, t);
            }),
            getScrollInfo: function getScrollInfo() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Tn(this) - this.display.barHeight,
                width: e.scrollWidth - Tn(this) - this.display.barWidth,
                clientHeight: Ln(this),
                clientWidth: Mn(this)
              };
            },
            scrollIntoView: ti(function (e, t) {
              null == e ? (e = {
                from: this.doc.sel.primary().head,
                to: null
              }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                from: et(e, 0),
                to: null
              } : null == e.from && (e = {
                from: e,
                to: null
              }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function (e, t) {
                Dr(e), e.curOp.scrollToPos = t;
              }(this, e) : Pr(this, e.from, e.to, e.margin);
            }),
            setSize: ti(function (e, t) {
              var n = this,
                  r = function r(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
              };

              null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && zn(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
                  if (e.widgets[t].noHScroll) {
                    hr(n, i, "widget");
                    break;
                  }
                }
                ++i;
              }), this.curOp.forceUpdate = !0, pe(this, "refresh", this);
            }),
            operation: function operation(e) {
              return Qr(this, e);
            },
            startOperation: function startOperation() {
              return Gr(this);
            },
            endOperation: function endOperation() {
              return $r(this);
            },
            refresh: ti(function () {
              var e = this.display.cachedTextHeight;
              dr(this), this.curOp.forceUpdate = !0, jn(this), Er(this, this.doc.scrollLeft, this.doc.scrollTop), ci(this.display), (null == e || Math.abs(e - rr(this.display)) > .5 || this.options.lineWrapping) && lr(this), pe(this, "refresh", this);
            }),
            swapDoc: ti(function (e) {
              var t = this.doc;
              return t.cm = null, this.state.selectingText && this.state.selectingText(), Ii(this, e), jn(this), this.display.input.reset(), Er(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, ln(this, "swapDoc", this, t), t;
            }),
            phrase: function phrase(e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function getInputField() {
              return this.display.input.getField();
            },
            getWrapperElement: function getWrapperElement() {
              return this.display.wrapper;
            },
            getScrollerElement: function getScrollerElement() {
              return this.display.scroller;
            },
            getGutterElement: function getGutterElement() {
              return this.display.gutters;
            }
          }, ye(e), e.registerHelper = function (t, r, i) {
            n.hasOwnProperty(t) || (n[t] = e[t] = {
              _global: []
            }), n[t][r] = i;
          }, e.registerGlobalHelper = function (t, r, i, o) {
            e.registerHelper(t, r, o), n[t]._global.push({
              pred: i,
              val: o
            });
          };
        }(Ms);
        var Gs = "iter insert remove copy getEditor constructor".split(" ");

        for (var $s in No.prototype) {
          No.prototype.hasOwnProperty($s) && j(Gs, $s) < 0 && (Ms.prototype[$s] = function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          }(No.prototype[$s]));
        }

        return ye(No), Ms.inputStyles = {
          textarea: Ks,
          contenteditable: js
        }, Ms.defineMode = function (e) {
          Ms.defaults.mode || "null" == e || (Ms.defaults.mode = e), He.apply(this, arguments);
        }, Ms.defineMIME = function (e, t) {
          We[e] = t;
        }, Ms.defineMode("null", function () {
          return {
            token: function token(e) {
              return e.skipToEnd();
            }
          };
        }), Ms.defineMIME("text/plain", "null"), Ms.defineExtension = function (e, t) {
          Ms.prototype[e] = t;
        }, Ms.defineDocExtension = function (e, t) {
          No.prototype[e] = t;
        }, Ms.fromTextArea = function (e, t) {
          if ((t = t ? H(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
            var n = E();
            t.autofocus = n == e || null != e.getAttribute("autofocus") && n == document.body;
          }

          function r() {
            e.value = a.getValue();
          }

          var i;

          if (e.form && (de(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;

            try {
              var s = o.submit = function () {
                r(), o.submit = i, o.submit(), o.submit = s;
              };
            } catch (e) {}
          }

          t.finishInit = function (n) {
            n.save = r, n.getTextArea = function () {
              return e;
            }, n.toTextArea = function () {
              n.toTextArea = isNaN, r(), e.parentNode.removeChild(n.getWrapperElement()), e.style.display = "", e.form && (fe(e.form, "submit", r), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
            };
          }, e.style.display = "none";
          var a = Ms(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return a;
        }, function (e) {
          e.off = fe, e.on = de, e.wheelEventPixels = xi, e.Doc = No, e.splitLines = Ne, e.countColumn = F, e.findColumn = K, e.isWordChar = Q, e.Pass = R, e.signal = pe, e.Line = Gt, e.changeEnd = Ti, e.scrollbarModel = Vr, e.Pos = et, e.cmpPos = tt, e.modes = Ie, e.mimeModes = We, e.resolveMode = Fe, e.getMode = ze, e.modeExtensions = je, e.extendMode = Re, e.copyState = Be, e.startState = Ue, e.innerMode = Ve, e.commands = ts, e.keyMap = Vo, e.keyName = Zo, e.isModifierKey = $o, e.lookupKey = Go, e.normalizeKeyMap = Ko, e.StringStream = Ke, e.SharedTextMarker = Mo, e.TextMarker = _o, e.LineWidget = Co, e.e_preventDefault = be, e.e_stopPropagation = xe, e.e_stop = Ce, e.addClass = D, e.contains = N, e.rmClass = T, e.keyNames = zo;
        }(Ms), Ms.version = "5.65.2", Ms;
      }();
    },
    5321: function _(e, t, n) {
      !function (e) {
        "use strict";

        function t(e) {
          return new RegExp("^((" + e.join(")|(") + "))\\b");
        }

        var n = t(["and", "or", "not", "is"]),
            r = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"],
            i = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];

        function o(e) {
          return e.scopes[e.scopes.length - 1];
        }

        e.registerHelper("hintWords", "python", r.concat(i)), e.defineMode("python", function (s, a) {
          for (var l = "error", c = a.delimiters || a.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, u = [a.singleOperators, a.doubleOperators, a.doubleDelimiters, a.tripleDelimiters, a.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], d = 0; d < u.length; d++) {
            u[d] || u.splice(d--, 1);
          }

          var h = a.hangingIndent || s.indentUnit,
              f = r,
              p = i;
          null != a.extra_keywords && (f = f.concat(a.extra_keywords)), null != a.extra_builtins && (p = p.concat(a.extra_builtins));
          var m = !(a.version && Number(a.version) < 3);

          if (m) {
            var g = a.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
            f = f.concat(["nonlocal", "False", "True", "None", "async", "await"]), p = p.concat(["ascii", "bytes", "exec", "print"]);
            var v = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))", "i");
          } else g = a.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/, f = f.concat(["exec", "print"]), p = p.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]), v = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");

          var y = t(f),
              b = t(p);

          function x(e, t) {
            var n = e.sol() && "\\" != t.lastToken;

            if (n && (t.indent = e.indentation()), n && "py" == o(t).type) {
              var r = o(t).offset;

              if (e.eatSpace()) {
                var i = e.indentation();
                return i > r ? C(t) : i < r && k(e, t) && "#" != e.peek() && (t.errorToken = !0), null;
              }

              var s = w(e, t);
              return r > 0 && k(e, t) && (s += " error"), s;
            }

            return w(e, t);
          }

          function w(e, t, r) {
            if (e.eatSpace()) return null;
            if (!r && e.match(/^#.*/)) return "comment";

            if (e.match(/^[0-9\.]/, !1)) {
              var i = !1;
              if (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0), e.match(/^[\d_]+\.\d*/) && (i = !0), e.match(/^\.\d+/) && (i = !0), i) return e.eat(/J/i), "number";
              var o = !1;
              if (e.match(/^0x[0-9a-f_]+/i) && (o = !0), e.match(/^0b[01_]+/i) && (o = !0), e.match(/^0o[0-7_]+/i) && (o = !0), e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (e.eat(/J/i), o = !0), e.match(/^0(?![\dx])/i) && (o = !0), o) return e.eat(/L/i), "number";
            }

            if (e.match(v)) return -1 !== e.current().toLowerCase().indexOf("f") ? (t.tokenize = function (e, t) {
              for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0;) {
                e = e.substr(1);
              }

              var n = 1 == e.length,
                  r = "string";

              function i(e) {
                return function (t, n) {
                  var r = w(t, n, !0);
                  return "punctuation" == r && ("{" == t.current() ? n.tokenize = i(e + 1) : "}" == t.current() && (n.tokenize = e > 1 ? i(e - 1) : o)), r;
                };
              }

              function o(o, s) {
                for (; !o.eol();) {
                  if (o.eatWhile(/[^'"\{\}\\]/), o.eat("\\")) {
                    if (o.next(), n && o.eol()) return r;
                  } else {
                    if (o.match(e)) return s.tokenize = t, r;
                    if (o.match("{{")) return r;
                    if (o.match("{", !1)) return s.tokenize = i(0), o.current() ? r : s.tokenize(o, s);
                    if (o.match("}}")) return r;
                    if (o.match("}")) return l;
                    o.eat(/['"]/);
                  }
                }

                if (n) {
                  if (a.singleLineStringErrors) return l;
                  s.tokenize = t;
                }

                return r;
              }

              return o.isString = !0, o;
            }(e.current(), t.tokenize), t.tokenize(e, t)) : (t.tokenize = function (e, t) {
              for (; "rubf".indexOf(e.charAt(0).toLowerCase()) >= 0;) {
                e = e.substr(1);
              }

              var n = 1 == e.length,
                  r = "string";

              function i(i, o) {
                for (; !i.eol();) {
                  if (i.eatWhile(/[^'"\\]/), i.eat("\\")) {
                    if (i.next(), n && i.eol()) return r;
                  } else {
                    if (i.match(e)) return o.tokenize = t, r;
                    i.eat(/['"]/);
                  }
                }

                if (n) {
                  if (a.singleLineStringErrors) return l;
                  o.tokenize = t;
                }

                return r;
              }

              return i.isString = !0, i;
            }(e.current(), t.tokenize), t.tokenize(e, t));

            for (var s = 0; s < u.length; s++) {
              if (e.match(u[s])) return "operator";
            }

            return e.match(c) ? "punctuation" : "." == t.lastToken && e.match(g) ? "property" : e.match(y) || e.match(n) ? "keyword" : e.match(b) ? "builtin" : e.match(/^(self|cls)\b/) ? "variable-2" : e.match(g) ? "def" == t.lastToken || "class" == t.lastToken ? "def" : "variable" : (e.next(), r ? null : l);
          }

          function C(e) {
            for (; "py" != o(e).type;) {
              e.scopes.pop();
            }

            e.scopes.push({
              offset: o(e).offset + s.indentUnit,
              type: "py",
              align: null
            });
          }

          function k(e, t) {
            for (var n = e.indentation(); t.scopes.length > 1 && o(t).offset > n;) {
              if ("py" != o(t).type) return !0;
              t.scopes.pop();
            }

            return o(t).offset != n;
          }

          function S(e, t) {
            e.sol() && (t.beginningOfLine = !0, t.dedent = !1);
            var n = t.tokenize(e, t),
                r = e.current();
            if (t.beginningOfLine && "@" == r) return e.match(g, !1) ? "meta" : m ? "operator" : l;

            if (/\S/.test(r) && (t.beginningOfLine = !1), "variable" != n && "builtin" != n || "meta" != t.lastToken || (n = "meta"), "pass" != r && "return" != r || (t.dedent = !0), "lambda" == r && (t.lambda = !0), ":" == r && !t.lambda && "py" == o(t).type && e.match(/^\s*(?:#|$)/, !1) && C(t), 1 == r.length && !/string|comment/.test(n)) {
              var i = "[({".indexOf(r);

              if (-1 != i && function (e, t, n) {
                var r = e.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : e.column() + 1;
                t.scopes.push({
                  offset: t.indent + h,
                  type: n,
                  align: r
                });
              }(e, t, "])}".slice(i, i + 1)), -1 != (i = "])}".indexOf(r))) {
                if (o(t).type != r) return l;
                t.indent = t.scopes.pop().offset - h;
              }
            }

            return t.dedent && e.eol() && "py" == o(t).type && t.scopes.length > 1 && t.scopes.pop(), n;
          }

          return {
            startState: function startState(e) {
              return {
                tokenize: x,
                scopes: [{
                  offset: e || 0,
                  type: "py",
                  align: null
                }],
                indent: e || 0,
                lastToken: null,
                lambda: !1,
                dedent: 0
              };
            },
            token: function token(e, t) {
              var n = t.errorToken;
              n && (t.errorToken = !1);
              var r = S(e, t);
              return r && "comment" != r && (t.lastToken = "keyword" == r || "punctuation" == r ? e.current() : r), "punctuation" == r && (r = null), e.eol() && t.lambda && (t.lambda = !1), n ? r + " " + l : r;
            },
            indent: function indent(t, n) {
              if (t.tokenize != x) return t.tokenize.isString ? e.Pass : 0;
              var r = o(t),
                  i = r.type == n.charAt(0) || "py" == r.type && !t.dedent && /^(else:|elif |except |finally:)/.test(n);
              return null != r.align ? r.align - (i ? 1 : 0) : r.offset - (i ? h : 0);
            },
            electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
            closeBrackets: {
              triples: "'\""
            },
            lineComment: "#",
            fold: "indent"
          };
        }), e.defineMIME("text/x-python", "python");
        var s;
        e.defineMIME("text/x-cython", {
          name: "python",
          extra_keywords: (s = "by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE", s.split(" "))
        });
      }(n(4631));
    },
    2875: function _(e, t, n) {
      "use strict";

      n.d(t, {
        Z: function Z() {
          return o;
        }
      });
      var r = n(3645),
          i = n.n(r)()(function (e) {
        return e[1];
      });
      i.push([e.id, ".CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n\n  margin: 0;\n  padding: 2px;\n\n  -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer;\n}\n\nli.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n", ""]);
      var o = i;
    },
    3501: function _(e, t, n) {
      "use strict";

      n.d(t, {
        Z: function Z() {
          return o;
        }
      });
      var r = n(3645),
          i = n.n(r)()(function (e) {
        return e[1];
      });
      i.push([e.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor .CodeMirror-line::selection,\n.cm-fat-cursor .CodeMirror-line > span::selection, \n.cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n.cm-fat-cursor .CodeMirror-line::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.cm-fat-cursor { caret-color: transparent; }\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);
      var o = i;
    },
    1368: function _(e, t, n) {
      "use strict";

      n.d(t, {
        Z: function Z() {
          return o;
        }
      });
      var r = n(3645),
          i = n.n(r)()(function (e) {
        return e[1];
      });
      i.push([e.id, "/*\n\tName:       Panda Syntax\n\tAuthor:     Siamak Mokhtari (http://github.com/siamak/)\n\tCodeMirror template by Siamak Mokhtari (https://github.com/siamak/atom-panda-syntax)\n*/\n.cm-s-panda-syntax {\n\tbackground: #292A2B;\n\tcolor: #E6E6E6;\n\tline-height: 1.2;\n\tfont-size:small;\n\tfont-family: 'Operator Mono', 'Source Code Pro', Menlo, Monaco, Consolas, Courier New, monospace;\n}\n.cm-s-panda-syntax .CodeMirror-cursor { border-color: #ff2c6d; }\n.cm-s-panda-syntax .CodeMirror-activeline-background {\n\tbackground: rgba(99, 123, 156, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-selected {\n\tbackground: rgba(255, 255, 255, 0.26);\n}\n.cm-s-panda-syntax .cm-comment {\n\tfont-style: italic;\n\tcolor: #c0c1c5;\n}\n.cm-s-panda-syntax .cm-operator {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-string {\n\tcolor: #ffffff;\n}\n.cm-s-panda-syntax .cm-string-2 {\n    color: #FFB86C;\n}\n\n.cm-s-panda-syntax .cm-string-3 {\n    color: #99d1ff;\n}\n\n.cm-s-panda-syntax .cm-tag {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-meta {\n\tcolor: #b084eb;\n}\n\n.cm-s-panda-syntax .cm-number {\n\tcolor: #FFB86C;\n}\n.cm-s-panda-syntax .cm-atom {\n\tcolor: #ff2c6d;\n}\n.cm-s-panda-syntax .cm-keyword {\n\tcolor: #ffadd3;\n}\n.cm-s-panda-syntax .cm-variable {\n\tcolor: #ffb86c;\n}\n.cm-s-panda-syntax .cm-variable-2 {\n\tcolor: #ff9ac1;\n}\n.cm-s-panda-syntax .cm-variable-3, .cm-s-panda-syntax .cm-type {\n\tcolor: #ff9ac1;\n}\n\n.cm-s-panda-syntax .cm-def {\n\tcolor: #e6e6e6;\n}\n.cm-s-panda-syntax .cm-property {\n\tcolor: #f3f3f3;\n}\n.cm-s-panda-syntax .cm-unit {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-attribute {\n    color: #ffb86c;\n}\n\n.cm-s-panda-syntax .cm-age {\n    color: #ff9f9f;\n}\n\n.cm-s-panda-syntax .CodeMirror-matchingbracket {\n    border-bottom: 1px dotted #19F9D8;\n    padding-bottom: 2px;\n    color: #e6e6e6;\n}\n.cm-s-panda-syntax .CodeMirror-gutters {\n    background: #292a2b;\n    border-right-color: rgba(255, 255, 255, 0.1);\n}\n.cm-s-panda-syntax .CodeMirror-linenumber {\n    color: #e6e6e6;\n    opacity: 0.6;\n}\n\n\n", ""]);
      var o = i;
    },
    3645: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = [];
        return t.toString = function () {
          return this.map(function (t) {
            var n = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }, t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (r) for (var o = 0; o < this.length; o++) {
            var s = this[o][0];
            null != s && (i[s] = !0);
          }

          for (var a = 0; a < e.length; a++) {
            var l = [].concat(e[a]);
            r && i[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), t.push(l));
          }
        }, t;
      };
    },
    8552: function _(e, t, n) {
      var r = n(852)(n(5639), "DataView");
      e.exports = r;
    },
    1989: function _(e, t, n) {
      var r = n(1789),
          i = n(401),
          o = n(7667),
          s = n(1327),
          a = n(1866);

      function l(e) {
        var t = -1,
            n = null == e ? 0 : e.length;

        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }

      l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, e.exports = l;
    },
    8407: function _(e, t, n) {
      var r = n(7040),
          i = n(4125),
          o = n(2117),
          s = n(7518),
          a = n(4705);

      function l(e) {
        var t = -1,
            n = null == e ? 0 : e.length;

        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }

      l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, e.exports = l;
    },
    7071: function _(e, t, n) {
      var r = n(852)(n(5639), "Map");
      e.exports = r;
    },
    3369: function _(e, t, n) {
      var r = n(4785),
          i = n(1285),
          o = n(6e3),
          s = n(9916),
          a = n(5265);

      function l(e) {
        var t = -1,
            n = null == e ? 0 : e.length;

        for (this.clear(); ++t < n;) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }

      l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, e.exports = l;
    },
    3818: function _(e, t, n) {
      var r = n(852)(n(5639), "Promise");
      e.exports = r;
    },
    8525: function _(e, t, n) {
      var r = n(852)(n(5639), "Set");
      e.exports = r;
    },
    6384: function _(e, t, n) {
      var r = n(8407),
          i = n(7465),
          o = n(3779),
          s = n(7599),
          a = n(4758),
          l = n(4309);

      function c(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size;
      }

      c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = s, c.prototype.has = a, c.prototype.set = l, e.exports = c;
    },
    2705: function _(e, t, n) {
      var r = n(5639).Symbol;
      e.exports = r;
    },
    1149: function _(e, t, n) {
      var r = n(5639).Uint8Array;
      e.exports = r;
    },
    577: function _(e, t, n) {
      var r = n(852)(n(5639), "WeakMap");
      e.exports = r;
    },
    7412: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);) {
          ;
        }

        return e;
      };
    },
    4963: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
          var s = e[n];
          t(s, n, e) && (o[i++] = s);
        }

        return o;
      };
    },
    4636: function _(e, t, n) {
      var r = n(2545),
          i = n(5694),
          o = n(1469),
          s = n(4144),
          a = n(5776),
          l = n(6719),
          c = Object.prototype.hasOwnProperty;

      e.exports = function (e, t) {
        var n = o(e),
            u = !n && i(e),
            d = !n && !u && s(e),
            h = !n && !u && !d && l(e),
            f = n || u || d || h,
            p = f ? r(e.length, String) : [],
            m = p.length;

        for (var g in e) {
          !t && !c.call(e, g) || f && ("length" == g || d && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || a(g, m)) || p.push(g);
        }

        return p;
      };
    },
    2488: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) {
          e[i + n] = t[n];
        }

        return e;
      };
    },
    4865: function _(e, t, n) {
      var r = n(9465),
          i = n(7813),
          o = Object.prototype.hasOwnProperty;

      e.exports = function (e, t, n) {
        var s = e[t];
        o.call(e, t) && i(s, n) && (void 0 !== n || t in e) || r(e, t, n);
      };
    },
    8470: function _(e, t, n) {
      var r = n(7813);

      e.exports = function (e, t) {
        for (var n = e.length; n--;) {
          if (r(e[n][0], t)) return n;
        }

        return -1;
      };
    },
    4037: function _(e, t, n) {
      var r = n(8363),
          i = n(3674);

      e.exports = function (e, t) {
        return e && r(t, i(t), e);
      };
    },
    3886: function _(e, t, n) {
      var r = n(8363),
          i = n(1704);

      e.exports = function (e, t) {
        return e && r(t, i(t), e);
      };
    },
    9465: function _(e, t, n) {
      var r = n(8777);

      e.exports = function (e, t, n) {
        "__proto__" == t && r ? r(e, t, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : e[t] = n;
      };
    },
    5990: function _(e, t, n) {
      var r = n(6384),
          i = n(7412),
          o = n(4865),
          s = n(4037),
          a = n(3886),
          l = n(4626),
          c = n(278),
          u = n(8805),
          d = n(1911),
          h = n(8234),
          f = n(6904),
          p = n(4160),
          m = n(3824),
          g = n(9148),
          v = n(8517),
          y = n(1469),
          b = n(4144),
          x = n(6688),
          w = n(3218),
          C = n(2928),
          k = n(3674),
          S = n(1704),
          _ = "[object Arguments]",
          T = "[object Function]",
          M = "[object Object]",
          L = {};
      L[_] = L["[object Array]"] = L["[object ArrayBuffer]"] = L["[object DataView]"] = L["[object Boolean]"] = L["[object Date]"] = L["[object Float32Array]"] = L["[object Float64Array]"] = L["[object Int8Array]"] = L["[object Int16Array]"] = L["[object Int32Array]"] = L["[object Map]"] = L["[object Number]"] = L[M] = L["[object RegExp]"] = L["[object Set]"] = L["[object String]"] = L["[object Symbol]"] = L["[object Uint8Array]"] = L["[object Uint8ClampedArray]"] = L["[object Uint16Array]"] = L["[object Uint32Array]"] = !0, L["[object Error]"] = L[T] = L["[object WeakMap]"] = !1, e.exports = function e(t, n, O, A, N, E) {
        var D,
            P = 1 & n,
            I = 2 & n,
            W = 4 & n;
        if (O && (D = N ? O(t, A, N, E) : O(t)), void 0 !== D) return D;
        if (!w(t)) return t;
        var H = y(t);

        if (H) {
          if (D = m(t), !P) return c(t, D);
        } else {
          var F = p(t),
              z = F == T || "[object GeneratorFunction]" == F;
          if (b(t)) return l(t, P);

          if (F == M || F == _ || z && !N) {
            if (D = I || z ? {} : v(t), !P) return I ? d(t, a(D, t)) : u(t, s(D, t));
          } else {
            if (!L[F]) return N ? t : {};
            D = g(t, F, P);
          }
        }

        E || (E = new r());
        var j = E.get(t);
        if (j) return j;
        E.set(t, D), C(t) ? t.forEach(function (r) {
          D.add(e(r, n, O, r, t, E));
        }) : x(t) && t.forEach(function (r, i) {
          D.set(i, e(r, n, O, i, t, E));
        });
        var R = H ? void 0 : (W ? I ? f : h : I ? S : k)(t);
        return i(R || t, function (r, i) {
          R && (r = t[i = r]), o(D, i, e(r, n, O, i, t, E));
        }), D;
      };
    },
    3118: function _(e, t, n) {
      var r = n(3218),
          i = Object.create,
          o = function () {
        function e() {}

        return function (t) {
          if (!r(t)) return {};
          if (i) return i(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = void 0, n;
        };
      }();

      e.exports = o;
    },
    8866: function _(e, t, n) {
      var r = n(2488),
          i = n(1469);

      e.exports = function (e, t, n) {
        var o = t(e);
        return i(e) ? o : r(o, n(e));
      };
    },
    4239: function _(e, t, n) {
      var r = n(2705),
          i = n(9607),
          o = n(2333),
          s = r ? r.toStringTag : void 0;

      e.exports = function (e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? i(e) : o(e);
      };
    },
    9454: function _(e, t, n) {
      var r = n(4239),
          i = n(7005);

      e.exports = function (e) {
        return i(e) && "[object Arguments]" == r(e);
      };
    },
    5588: function _(e, t, n) {
      var r = n(4160),
          i = n(7005);

      e.exports = function (e) {
        return i(e) && "[object Map]" == r(e);
      };
    },
    8458: function _(e, t, n) {
      var r = n(3560),
          i = n(5346),
          o = n(3218),
          s = n(346),
          a = /^\[object .+?Constructor\]$/,
          l = Function.prototype,
          c = Object.prototype,
          u = l.toString,
          d = c.hasOwnProperty,
          h = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

      e.exports = function (e) {
        return !(!o(e) || i(e)) && (r(e) ? h : a).test(s(e));
      };
    },
    9221: function _(e, t, n) {
      var r = n(4160),
          i = n(7005);

      e.exports = function (e) {
        return i(e) && "[object Set]" == r(e);
      };
    },
    8749: function _(e, t, n) {
      var r = n(4239),
          i = n(1780),
          o = n(7005),
          s = {};
      s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = function (e) {
        return o(e) && i(e.length) && !!s[r(e)];
      };
    },
    280: function _(e, t, n) {
      var r = n(5726),
          i = n(6916),
          o = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];

        for (var n in Object(e)) {
          o.call(e, n) && "constructor" != n && t.push(n);
        }

        return t;
      };
    },
    313: function _(e, t, n) {
      var r = n(3218),
          i = n(5726),
          o = n(3498),
          s = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        if (!r(e)) return o(e);
        var t = i(e),
            n = [];

        for (var a in e) {
          ("constructor" != a || !t && s.call(e, a)) && n.push(a);
        }

        return n;
      };
    },
    2545: function _(e) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e;) {
          r[n] = t(n);
        }

        return r;
      };
    },
    1717: function _(e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    4318: function _(e, t, n) {
      var r = n(1149);

      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t;
      };
    },
    4626: function _(e, t, n) {
      e = n.nmd(e);
      var r = n(5639),
          i = t && !t.nodeType && t,
          o = i && e && !e.nodeType && e,
          s = o && o.exports === i ? r.Buffer : void 0,
          a = s ? s.allocUnsafe : void 0;

      e.exports = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
            r = a ? a(n) : new e.constructor(n);
        return e.copy(r), r;
      };
    },
    7157: function _(e, t, n) {
      var r = n(4318);

      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
    },
    3147: function _(e) {
      var t = /\w*$/;

      e.exports = function (e) {
        var n = new e.constructor(e.source, t.exec(e));
        return n.lastIndex = e.lastIndex, n;
      };
    },
    419: function _(e, t, n) {
      var r = n(2705),
          i = r ? r.prototype : void 0,
          o = i ? i.valueOf : void 0;

      e.exports = function (e) {
        return o ? Object(o.call(e)) : {};
      };
    },
    7133: function _(e, t, n) {
      var r = n(4318);

      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
    },
    278: function _(e) {
      e.exports = function (e, t) {
        var n = -1,
            r = e.length;

        for (t || (t = Array(r)); ++n < r;) {
          t[n] = e[n];
        }

        return t;
      };
    },
    8363: function _(e, t, n) {
      var r = n(4865),
          i = n(9465);

      e.exports = function (e, t, n, o) {
        var s = !n;
        n || (n = {});

        for (var a = -1, l = t.length; ++a < l;) {
          var c = t[a],
              u = o ? o(n[c], e[c], c, n, e) : void 0;
          void 0 === u && (u = e[c]), s ? i(n, c, u) : r(n, c, u);
        }

        return n;
      };
    },
    8805: function _(e, t, n) {
      var r = n(8363),
          i = n(9551);

      e.exports = function (e, t) {
        return r(e, i(e), t);
      };
    },
    1911: function _(e, t, n) {
      var r = n(8363),
          i = n(1442);

      e.exports = function (e, t) {
        return r(e, i(e), t);
      };
    },
    4429: function _(e, t, n) {
      var r = n(5639)["__core-js_shared__"];
      e.exports = r;
    },
    8777: function _(e, t, n) {
      var r = n(852),
          i = function () {
        try {
          var e = r(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      }();

      e.exports = i;
    },
    1957: function _(e, t, n) {
      var r = "object" == _typeof(n.g) && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    8234: function _(e, t, n) {
      var r = n(8866),
          i = n(9551),
          o = n(3674);

      e.exports = function (e) {
        return r(e, o, i);
      };
    },
    6904: function _(e, t, n) {
      var r = n(8866),
          i = n(1442),
          o = n(1704);

      e.exports = function (e) {
        return r(e, o, i);
      };
    },
    5050: function _(e, t, n) {
      var r = n(7019);

      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    852: function _(e, t, n) {
      var r = n(8458),
          i = n(7801);

      e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    5924: function _(e, t, n) {
      var r = n(5569)(Object.getPrototypeOf, Object);
      e.exports = r;
    },
    9607: function _(e, t, n) {
      var r = n(2705),
          i = Object.prototype,
          o = i.hasOwnProperty,
          s = i.toString,
          a = r ? r.toStringTag : void 0;

      e.exports = function (e) {
        var t = o.call(e, a),
            n = e[a];

        try {
          e[a] = void 0;
          var r = !0;
        } catch (e) {}

        var i = s.call(e);
        return r && (t ? e[a] = n : delete e[a]), i;
      };
    },
    9551: function _(e, t, n) {
      var r = n(4963),
          i = n(479),
          o = Object.prototype.propertyIsEnumerable,
          s = Object.getOwnPropertySymbols,
          a = s ? function (e) {
        return null == e ? [] : (e = Object(e), r(s(e), function (t) {
          return o.call(e, t);
        }));
      } : i;
      e.exports = a;
    },
    1442: function _(e, t, n) {
      var r = n(2488),
          i = n(5924),
          o = n(9551),
          s = n(479),
          a = Object.getOwnPropertySymbols ? function (e) {
        for (var t = []; e;) {
          r(t, o(e)), e = i(e);
        }

        return t;
      } : s;
      e.exports = a;
    },
    4160: function _(e, t, n) {
      var r = n(8552),
          i = n(7071),
          o = n(3818),
          s = n(8525),
          a = n(577),
          l = n(4239),
          c = n(346),
          u = "[object Map]",
          d = "[object Promise]",
          h = "[object Set]",
          f = "[object WeakMap]",
          p = "[object DataView]",
          m = c(r),
          g = c(i),
          v = c(o),
          y = c(s),
          b = c(a),
          x = l;
      (r && x(new r(new ArrayBuffer(1))) != p || i && x(new i()) != u || o && x(o.resolve()) != d || s && x(new s()) != h || a && x(new a()) != f) && (x = function x(e) {
        var t = l(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
        if (r) switch (r) {
          case m:
            return p;

          case g:
            return u;

          case v:
            return d;

          case y:
            return h;

          case b:
            return f;
        }
        return t;
      }), e.exports = x;
    },
    7801: function _(e) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    1789: function _(e, t, n) {
      var r = n(4536);

      e.exports = function () {
        this.__data__ = r ? r(null) : {}, this.size = 0;
      };
    },
    401: function _(e) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      };
    },
    7667: function _(e, t, n) {
      var r = n(4536),
          i = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var t = this.__data__;

        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }

        return i.call(t, e) ? t[e] : void 0;
      };
    },
    1327: function _(e, t, n) {
      var r = n(4536),
          i = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    1866: function _(e, t, n) {
      var r = n(4536);

      e.exports = function (e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      };
    },
    3824: function _(e) {
      var t = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var n = e.length,
            r = new e.constructor(n);
        return n && "string" == typeof e[0] && t.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      };
    },
    9148: function _(e, t, n) {
      var r = n(4318),
          i = n(7157),
          o = n(3147),
          s = n(419),
          a = n(7133);

      e.exports = function (e, t, n) {
        var l = e.constructor;

        switch (t) {
          case "[object ArrayBuffer]":
            return r(e);

          case "[object Boolean]":
          case "[object Date]":
            return new l(+e);

          case "[object DataView]":
            return i(e, n);

          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return a(e, n);

          case "[object Map]":
          case "[object Set]":
            return new l();

          case "[object Number]":
          case "[object String]":
            return new l(e);

          case "[object RegExp]":
            return o(e);

          case "[object Symbol]":
            return s(e);
        }
      };
    },
    8517: function _(e, t, n) {
      var r = n(3118),
          i = n(5924),
          o = n(5726);

      e.exports = function (e) {
        return "function" != typeof e.constructor || o(e) ? {} : r(i(e));
      };
    },
    5776: function _(e) {
      var t = /^(?:0|[1-9]\d*)$/;

      e.exports = function (e, n) {
        var r = _typeof(e);

        return !!(n = null == n ? 9007199254740991 : n) && ("number" == r || "symbol" != r && t.test(e)) && e > -1 && e % 1 == 0 && e < n;
      };
    },
    7019: function _(e) {
      e.exports = function (e) {
        var t = _typeof(e);

        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
      };
    },
    5346: function _(e, t, n) {
      var r,
          i = n(4429),
          o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";

      e.exports = function (e) {
        return !!o && o in e;
      };
    },
    5726: function _(e) {
      var t = Object.prototype;

      e.exports = function (e) {
        var n = e && e.constructor;
        return e === ("function" == typeof n && n.prototype || t);
      };
    },
    7040: function _(e) {
      e.exports = function () {
        this.__data__ = [], this.size = 0;
      };
    },
    4125: function _(e, t, n) {
      var r = n(8470),
          i = Array.prototype.splice;

      e.exports = function (e) {
        var t = this.__data__,
            n = r(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
      };
    },
    2117: function _(e, t, n) {
      var r = n(8470);

      e.exports = function (e) {
        var t = this.__data__,
            n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    7518: function _(e, t, n) {
      var r = n(8470);

      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    4705: function _(e, t, n) {
      var r = n(8470);

      e.exports = function (e, t) {
        var n = this.__data__,
            i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
      };
    },
    4785: function _(e, t, n) {
      var r = n(1989),
          i = n(8407),
          o = n(7071);

      e.exports = function () {
        this.size = 0, this.__data__ = {
          hash: new r(),
          map: new (o || i)(),
          string: new r()
        };
      };
    },
    1285: function _(e, t, n) {
      var r = n(5050);

      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      };
    },
    6e3: function _(e, t, n) {
      var r = n(5050);

      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    9916: function _(e, t, n) {
      var r = n(5050);

      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    5265: function _(e, t, n) {
      var r = n(5050);

      e.exports = function (e, t) {
        var n = r(this, e),
            i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
      };
    },
    4536: function _(e, t, n) {
      var r = n(852)(Object, "create");
      e.exports = r;
    },
    6916: function _(e, t, n) {
      var r = n(5569)(Object.keys, Object);
      e.exports = r;
    },
    3498: function _(e) {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) {
          t.push(n);
        }
        return t;
      };
    },
    1167: function _(e, t, n) {
      e = n.nmd(e);

      var r = n(1957),
          i = t && !t.nodeType && t,
          o = i && e && !e.nodeType && e,
          s = o && o.exports === i && r.process,
          a = function () {
        try {
          return o && o.require && o.require("util").types || s && s.binding && s.binding("util");
        } catch (e) {}
      }();

      e.exports = a;
    },
    2333: function _(e) {
      var t = Object.prototype.toString;

      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: function _(e) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    5639: function _(e, t, n) {
      var r = n(1957),
          i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          o = r || i || Function("return this")();
      e.exports = o;
    },
    7465: function _(e, t, n) {
      var r = n(8407);

      e.exports = function () {
        this.__data__ = new r(), this.size = 0;
      };
    },
    3779: function _(e) {
      e.exports = function (e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n;
      };
    },
    7599: function _(e) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    4758: function _(e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    4309: function _(e, t, n) {
      var r = n(8407),
          i = n(7071),
          o = n(3369);

      e.exports = function (e, t) {
        var n = this.__data__;

        if (n instanceof r) {
          var s = n.__data__;
          if (!i || s.length < 199) return s.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new o(s);
        }

        return n.set(e, t), this.size = n.size, this;
      };
    },
    346: function _(e) {
      var t = Function.prototype.toString;

      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}

          try {
            return e + "";
          } catch (e) {}
        }

        return "";
      };
    },
    361: function _(e, t, n) {
      var r = n(5990);

      e.exports = function (e) {
        return r(e, 5);
      };
    },
    7813: function _(e) {
      e.exports = function (e, t) {
        return e === t || e != e && t != t;
      };
    },
    5694: function _(e, t, n) {
      var r = n(9454),
          i = n(7005),
          o = Object.prototype,
          s = o.hasOwnProperty,
          a = o.propertyIsEnumerable,
          l = r(function () {
        return arguments;
      }()) ? r : function (e) {
        return i(e) && s.call(e, "callee") && !a.call(e, "callee");
      };
      e.exports = l;
    },
    1469: function _(e) {
      var t = Array.isArray;
      e.exports = t;
    },
    8612: function _(e, t, n) {
      var r = n(3560),
          i = n(1780);

      e.exports = function (e) {
        return null != e && i(e.length) && !r(e);
      };
    },
    4144: function _(e, t, n) {
      e = n.nmd(e);
      var r = n(5639),
          i = n(5062),
          o = t && !t.nodeType && t,
          s = o && e && !e.nodeType && e,
          a = s && s.exports === o ? r.Buffer : void 0,
          l = (a ? a.isBuffer : void 0) || i;
      e.exports = l;
    },
    3560: function _(e, t, n) {
      var r = n(4239),
          i = n(3218);

      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      };
    },
    1780: function _(e) {
      e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      };
    },
    6688: function _(e, t, n) {
      var r = n(5588),
          i = n(1717),
          o = n(1167),
          s = o && o.isMap,
          a = s ? i(s) : r;
      e.exports = a;
    },
    3218: function _(e) {
      e.exports = function (e) {
        var t = _typeof(e);

        return null != e && ("object" == t || "function" == t);
      };
    },
    7005: function _(e) {
      e.exports = function (e) {
        return null != e && "object" == _typeof(e);
      };
    },
    2928: function _(e, t, n) {
      var r = n(9221),
          i = n(1717),
          o = n(1167),
          s = o && o.isSet,
          a = s ? i(s) : r;
      e.exports = a;
    },
    6719: function _(e, t, n) {
      var r = n(8749),
          i = n(1717),
          o = n(1167),
          s = o && o.isTypedArray,
          a = s ? i(s) : r;
      e.exports = a;
    },
    3674: function _(e, t, n) {
      var r = n(4636),
          i = n(280),
          o = n(8612);

      e.exports = function (e) {
        return o(e) ? r(e) : i(e);
      };
    },
    1704: function _(e, t, n) {
      var r = n(4636),
          i = n(313),
          o = n(8612);

      e.exports = function (e) {
        return o(e) ? r(e, !0) : i(e);
      };
    },
    479: function _(e) {
      e.exports = function () {
        return [];
      };
    },
    5062: function _(e) {
      e.exports = function () {
        return !1;
      };
    },
    3379: function _(e) {
      "use strict";

      var t = [];

      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++) {
          if (t[r].identifier === e) {
            n = r;
            break;
          }
        }

        return n;
      }

      function r(e, r) {
        for (var o = {}, s = [], a = 0; a < e.length; a++) {
          var l = e[a],
              c = r.base ? l[0] + r.base : l[0],
              u = o[c] || 0,
              d = "".concat(c, " ").concat(u);
          o[c] = u + 1;
          var h = n(d),
              f = {
            css: l[1],
            media: l[2],
            sourceMap: l[3],
            supports: l[4],
            layer: l[5]
          };
          if (-1 !== h) t[h].references++, t[h].updater(f);else {
            var p = i(f, r);
            r.byIndex = a, t.splice(a, 0, {
              identifier: d,
              updater: p,
              references: 1
            });
          }
          s.push(d);
        }

        return s;
      }

      function i(e, t) {
        var n = t.domAPI(t);
        return n.update(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
            n.update(e = t);
          } else n.remove();
        };
      }

      e.exports = function (e, i) {
        var o = r(e = e || [], i = i || {});
        return function (e) {
          e = e || [];

          for (var s = 0; s < o.length; s++) {
            var a = n(o[s]);
            t[a].references--;
          }

          for (var l = r(e, i), c = 0; c < o.length; c++) {
            var u = n(o[c]);
            0 === t[u].references && (t[u].updater(), t.splice(u, 1));
          }

          o = l;
        };
      };
    },
    569: function _(e) {
      "use strict";

      var t = {};

      e.exports = function (e, n) {
        var r = function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (e) {
              n = null;
            }
            t[e] = n;
          }

          return t[e];
        }(e);

        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(n);
      };
    },
    9216: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
      };
    },
    3565: function _(e, t, n) {
      "use strict";

      e.exports = function (e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t);
      };
    },
    7795: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = e.insertStyleElement(e);
        return {
          update: function update(n) {
            !function (e, t, n) {
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
              var i = void 0 !== n.layer;
              i && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, i && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
              var o = n.sourceMap;
              o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(r, e, t.options);
            }(t, e, n);
          },
          remove: function remove() {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            }(t);
          }
        };
      };
    },
    4589: function _(e) {
      "use strict";

      e.exports = function (e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(e));
        }
      };
    }
  },
      t = {};

  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports;
  }

  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, {
      a: t
    }), t;
  }, n.d = function (e, t) {
    for (var r in t) {
      n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }
  }, n.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.nmd = function (e) {
    return e.paths = [], e.children || (e.children = []), e;
  }, function () {
    "use strict";

    var e = n(361),
        t = n.n(e);
    var r = Error("undefined");

    function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var i = document.createElement(e);
      if (i) return t && (i.innerText = t), n && i.classList.add(n), i;
      throw r;
    }

    var o = Symbol();

    function s(e, t) {
      return {
        case: function _case(n, r) {
          return function (e, t, n, r) {
            if (r === o) return s(e, r);
            var i = !1;
            return Array.isArray(t) ? t.includes(e) && (i = !0) : e === t && (i = !0), i ? (n(), s(e, o)) : s(e);
          }(e, n, r, t);
        },
        default: function _default(e) {
          t !== o && e();
        }
      };
    }

    var a = /*#__PURE__*/function () {
      function a() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

        _classCallCheck(this, a);

        this._href = e, this._urlAPI = new URL(this._href), this.autochange = t;
      }

      _createClass(a, [{
        key: "getParam",
        value: function getParam(e) {
          var t = this._urlAPI.searchParams.get(e) || "";

          try {
            return decodeURIComponent(t);
          } catch (e) {
            return t;
          }
        }
      }, {
        key: "setParam",
        value: function setParam(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          this._urlAPI.searchParams.set(e, t), this.autochange && this._setURL(this._urlAPI.href);
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

      return a;
    }();

    function l(e) {
      var t = e;
      return {
        get: function get() {
          return t;
        },
        set: function set(e) {
          t = e;
        }
      };
    }

    var c = {
      undefinedErr: r,
      htmltag: i,
      changeTitle: function changeTitle(e) {
        var t = document.querySelector("title");
        if (!t) throw r;
        t.innerText = e;
      },
      objectCopy: function objectCopy(e) {
        return t()(e);
      },
      textCopy: function textCopy(e) {
        var t = document.createElement("textarea");
        t.value = e, t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), t.select();
        var n = document.execCommand("copy");
        return document.body.removeChild(t), n;
      },
      makeTable: function makeTable(e, t) {
        var n = i("table"),
            r = i("thead"),
            o = i("tr");

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _t3 = _step.value;

            var _e2 = i("th");

            _e2.innerText = _t3, o.appendChild(_e2);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        r.appendChild(o), n.appendChild(r);
        var s = i("tbody");

        var _iterator2 = _createForOfIteratorHelper(t),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e3 = _step2.value;

            var _t4 = i("tr");

            var _iterator3 = _createForOfIteratorHelper(_e3),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _n2 = _step3.value;

                var _e4 = i("td");

                _e4.innerText = _n2, _t4.appendChild(_e4);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            s.appendChild(_t4);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return n.appendChild(s), n;
      },
      isPC: function isPC() {
        return !(navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0 && navigator.userAgent.indexOf("Mobile") > 0 || navigator.userAgent.indexOf("iPad") > 0 || navigator.userAgent.indexOf("Android") > 0);
      },
      isAndroid: function isAndroid() {
        return navigator.userAgent.indexOf("Android") > 0;
      },
      isNaturalString: function isNaturalString(e) {
        return /^[+]?\d+$/.test(e);
      },
      unreachable: function unreachable() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unreachable code";
        throw new Error(e);
      },
      match: s,
      OperateURL: a,
      state: l
    };
    var u;
    !function (e) {
      e[e.set = 0] = "set", e[e.countTTK = 1] = "countTTK", e[e.countTTKuntil = 2] = "countTTKuntil", e[e.start = 3] = "start", e[e.end = 4] = "end", e[e.move = 5] = "move", e[e.action = 6] = "action", e[e.start_sort = 7] = "start_sort", e[e.end_sort = 8] = "end_sort", e[e.move_list = 9] = "move_list", e[e.buffset = 10] = "buffset", e[e.buffadd = 11] = "buffadd", e[e.buffminus = 12] = "buffminus", e[e.switch = 13] = "switch", e[e.order = 14] = "order", e[e.skillcard = 15] = "skillcard", e[e.color = 16] = "color", e[e.add = 17] = "add", e[e.nomove = 18] = "nomove", e[e.ttk_stop = 19] = "ttk_stop";
    }(u || (u = {}));

    var d = function () {
      var e = {};
      return ["set", "countTTK", "countTTKuntil", "start", "end", "move", "action", "start_sort", "end_sort", "move_list", "buffset", "buffadd", "buffminus", "switch", "order", "skillcard", "color", "add", "nomove", "ttk_stop"].forEach(function (t) {
        e[t] = u[t];
      }), [["ttk", u.countTTK], ["ttk_until", u.countTTKuntil], ["mv_ls", u.move_list], ["b", u.buffset], ["b+", u.buffadd], ["b-", u.buffminus], ["a", u.add], ["m", u.move], ["ac", u.action], ["sw", u.switch], ["c", u.color], ["sc", u.skillcard]].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            t = _ref2[0],
            n = _ref2[1];

        e[t] = n;
      }), e;
    }();

    var h = /*#__PURE__*/function () {
      function h(e) {
        _classCallCheck(this, h);

        this.timeline_parsed = e, this.i_loading = 0;
      }

      _createClass(h, [{
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

          var e = [];
          var t;

          var n = this,
              r = function r() {
            return _this.timeline_parsed[t].type;
          };

          for (t = 0; t < this.timeline_parsed.length; t++) {
            4 === r() && i(), e.push(this.timeline_parsed[t]);
          }

          function i() {
            var o = [t];

            for (e.push(n.timeline_parsed[t]), t++; t < n.timeline_parsed.length; t++) {
              if (t + 1 === n.timeline_parsed.length && (n.i_loading = (null == o ? void 0 : o[1]) || o[0], n.error_unexpectedToken("]が不足しています")), 4 === r()) o.push(t), i();else {
                if (1 === r()) continue;

                if (5 === r()) {
                  o.pop();
                  break;
                }
              }
              e.push(n.timeline_parsed[t]);
            }
          }

          for (var _t5 = 0, _n3 = !0; _t5 < e.length; _t5++) {
            1 === e[_t5].type ? (_n3 && (e.splice(_t5, 1), _t5--), _n3 = !0) : _n3 = !1;
          }

          for (var _t6 = e.length - 1; _t6 >= 0 && 1 === e[_t6].type; _t6--) {
            e.pop();
          }

          this.timeline_parsed = e;
        }
      }, {
        key: "parse",
        value: function parse() {
          this.Normalize();
          var e = [];
          if (0 === this.timeline_parsed.length) return e;

          for (this.timeline_parsed.push({
            type: 1,
            value: "\n"
          }), this.i_loading = 0; this.i_loading < this.timeline_parsed.length; this.i_loading++) {
            var _t7 = this.loadStatement();

            e.push(_t7), 1 !== this.now_val_type && this.error_unexpectedToken("]のあとにコメント以外の文を書くことはできません");
          }

          return e;
        }
      }, {
        key: "loadStatement",
        value: function loadStatement() {
          var _this2 = this;

          var e = [];
          this.checkIsWord();

          var t = this.now_val.value,
              n = function () {
            var e = d[t];
            if (void 0 !== e) return e;
            throw Error("コマンド名に誤りがあります");
          }();

          this.nextVal();

          var r = function r() {
            e.push(_this2.now_val.value), _this2.nextVal();
          };

          if (n === u.move_list) {
            (function () {
              _this2.checkIsWord();

              var t = _this2.now_val.value;
              _this2.nextVal(), 4 !== _this2.now_val_type && _this2.error_unexpectedToken("move_listの第二引数は [ から始まる必要があります"), _this2.nextVal();
              var r = [];

              if (5 !== _this2.now_val_type) {
                var _loop = function _loop() {
                  var e = void 0,
                      t = void 0;

                  if (s(_this2.now_val_type).case(4, function () {
                    _this2.nextVal(), e = _this2.getMoveListInList(5), r.push({
                      mode: 0,
                      value: e
                    });
                  }).case(6, function () {
                    _this2.nextVal(), e = _this2.getMoveListInList(7), r.push({
                      mode: 1,
                      value: e
                    });
                  }).case(2, function () {
                    _this2.nextVal(), e = _this2.getCommandListInList(), r.push({
                      mode: 2,
                      value: e
                    });
                  }).case(10, function () {
                    t = {
                      mode: 3,
                      value: []
                    }, t.value.push(_this2.now_val.value), r.push(t), _this2.nextVal();
                  }).default(function () {
                    _this2.error_unexpectedToken("move_list内のパースエラー　正しい値が入力されているか確認してください");
                  }), 8 === _this2.now_val_type) {
                    var _e5 = r.pop(),
                        _t8 = function _t8() {
                      _this2.error_unexpectedToken("*の後は0以上の整数である必要があります");
                    };

                    if (!_e5) throw _this2.error_unexpectedToken("unreachable code"), Error("unreachable code");

                    if (_this2.nextVal(), 10 === _this2.now_val_type) {
                      var _n4 = _this2.now_val.value;
                      c.isNaturalString(_n4) || _t8();

                      var _i2 = Number(_n4);

                      _i2 < 0 && _t8(), _i2 > 20 && _this2.error_unexpectedToken("エラー : 20回を超える繰り返しはできません(極端な値が入力され重くなることを防ぐため)");

                      for (var _t9 = 0; _t9 < _i2; _t9++) {
                        var _t10 = c.objectCopy(_e5);

                        r.push(_t10);
                      }

                      _this2.nextVal();
                    } else _t8();
                  }

                  if (5 === _this2.now_val_type) return "break";
                  0 === _this2.now_val_type ? _this2.nextVal() : _this2.error_unexpectedToken("コンマかmove_list終了の]が不足しています");
                };

                for (;;) {
                  var _ret = _loop();

                  if (_ret === "break") break;
                }
              }

              e = [n, t, r], _this2.nextVal();
            })();
          } else for (e = [n];;) {
            if (10 === this.now_val_type) r();else {
              if (1 === this.now_val_type) break;
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
        key: "getCommandListInList",
        value: function getCommandListInList() {
          var _this3 = this;

          var e = [];
          var t = 0;

          e: for (;;) {
            s(this.now_val_type).case(10, function () {
              if (0 === t) {
                var _t11 = d[_this3.now_val.value];
                _t11 ? e.push(_t11) : _this3.error_unexpectedToken("コマンド名に誤りがあります");
              } else e.push(_this3.now_val.value);

              _this3.nextVal();
            }).default(function () {
              _this3.error_unexpectedToken("move_list内のかっこが閉じられていないか引数が不正です");
            });

            var _n5 = !1;

            if (s(this.now_val_type).case(3, function () {
              _this3.nextVal(), _n5 = !0;
            }).case(0, function () {
              _this3.nextVal();
            }).default(function () {
              _this3.error_unexpectedToken("move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています");
            }), _n5) break e;
            t++;
          }

          return e;
        }
      }, {
        key: "getMoveListInList",
        value: function getMoveListInList(e) {
          var _this4 = this;

          var t = [];
          if (this.now_val_type === e) return t;

          e: for (;;) {
            s(this.now_val_type).case(10, function () {
              t.push(_this4.now_val.value), _this4.nextVal();
            }).default(function () {
              _this4.error_unexpectedToken("move_list内のかっこが閉じられていないか引数が不正です");
            });

            var _n6 = !1;

            if (s(this.now_val_type).case(e, function () {
              _this4.nextVal(), _n6 = !0;
            }).case(0, function () {
              _this4.nextVal();
            }).default(function () {
              _this4.error_unexpectedToken("move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています");
            }), _n6) break e;
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
          10 !== this.now_val_type && this.error_unexpectedToken();
        }
      }, {
        key: "checkIsCommma",
        value: function checkIsCommma() {
          0 !== this.now_val_type && this.error_unexpectedToken();
        }
      }, {
        key: "error_unexpectedToken",
        value: function error_unexpectedToken() {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var t = c.htmltag("span");
          if (t.appendChild(c.htmltag("span", "→→" + this.now_val.value + "←←", "errMsg")), 1 !== this.now_val.type) for (var _e6 = this.i_loading + 1; _e6 < this.timeline_parsed.length && 1 !== this.timeline_parsed[_e6].type; _e6++) {
            t.insertAdjacentText("beforeend", this.timeline_parsed[_e6].value);
          }

          for (var _e7 = this.i_loading - 1; _e7 >= 0 && 1 !== this.timeline_parsed[_e7].type; _e7--) {
            t.insertAdjacentText("afterbegin", this.timeline_parsed[_e7].value);
          }

          9 === this.now_val.type && (e = "予約文字です");
          var n = c.htmltag("span");
          throw n.insertAdjacentText("beforeend", "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"), n.appendChild(c.htmltag("br")), n.appendChild(t), n.appendChild(c.htmltag("br")), n.insertAdjacentText("beforeend", e), Error(n.outerHTML);
        }
      }]);

      return h;
    }();

    var f = /*#__PURE__*/function () {
      function f(e) {
        _classCallCheck(this, f);

        this.timeline_str = e, this.timeline_parsed = [], this._now_str = "", this.i_nowloadstr = 0;
      }

      _createClass(f, [{
        key: "parse",
        value: function parse() {
          return this.timeline_parsed = this.lexicalAnalysis(), this.timeline_parsed;
        }
      }, {
        key: "lexicalAnalysis",
        value: function lexicalAnalysis() {
          var e = this.timeline_str;
          var t = [];
          var n = "";
          e = e.replaceAll(/\\(\n|$)/g, "");

          var _loop2 = function _loop2(_i4) {
            var o = e[_i4];
            var a = {
              value: o
            };

            var l = function l(e) {
              a = {
                type: e,
                value: a.value
              };
            };

            var c = !1;

            var u = function u() {
              return c = !0;
            };

            if (s(o).case(",", function () {
              l(0);
            }).case("\n", function () {
              l(1);
            }).case([" ", "　", "\t"], function () {
              r(), u();
            }).case("#", function () {
              for (; _i4 < e.length; _i4++) {
                if ("\n" === e[_i4]) {
                  _i4--;
                  break;
                }
              }

              u();
            }).case("{", function () {
              l(2);
            }).case("}", function () {
              l(3);
            }).case("[", function () {
              l(4);
            }).case("]", function () {
              l(5);
            }).case("<", function () {
              l(6);
            }).case(">", function () {
              l(7);
            }).case("*", function () {
              l(8);
            }).case(["(", ")", '"', "'", "!", "$", "%", "&", "=", "^", "~", "?", ";", "`"], function () {
              l(9);
            }).default(function () {
              n += o, u();
            }), !c) {
              if (r(), !("type" in a)) throw Error("未到達コード");
              t.push(a);
            }

            _i3 = _i4;
          };

          for (var _i3 = 0; _i3 < e.length; _i3++) {
            _loop2(_i3);
          }

          function r() {
            n.length > 0 && (t.push({
              type: 10,
              value: n
            }), n = "");
          }

          return r(), t;
        }
      }]);

      return f;
    }();

    var p,
        m,
        g,
        v = !1,
        y = function y() {};

    function b() {
      p = new Worker("./js/pyodide/webworker.js");
    }

    function x() {
      p.onmessage = function (e) {
        var _e$data = e.data,
            t = _e$data.id,
            n = _objectWithoutProperties(_e$data, _excluded);

        if (-1 === t) return v = !0, y(), void (y = function y() {});

        if (t === g) {
          var _e8 = m;
          clearInterval(g), g = void 0, _e8(n);
        }
      };
    }

    function w() {
      return new Promise(function (e, t) {
        p || (b(), x()), v ? e() : y = e;
      });
    }

    var C = function () {
      var e = 0;
      return function (t, n) {
        return p || (b(), x()), e = (e + 1) % Number.MAX_SAFE_INTEGER, new Promise(function (e) {
          m = e, w().then(function () {
            g && (clearInterval(g), g = void 0), g = setTimeout(function () {
              p.terminate(), v = !1, clearInterval(g), g = void 0, b(), x(), e({
                error: "Error:timeout\n"
              });
            }, 3e3), p.postMessage(_objectSpread(_objectSpread({}, n), {}, {
              python: t,
              id: g
            }));
          });
        });
      };
    }(),
        k = {
      main: function () {
        var _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return C((t = e, "\n_output = []\n\n_command__ = [\n    \"set\",\n    \"countTTK\",\n    \"countTTKuntil\",\n    \"start\",\n    \"end\",\n    \"move\",\n    \"action\",\n    \"start_sort\",\n    \"end_sort\",\n    \"move_list\",\n    \"buffset\",\n    \"buffadd\",\n    \"buffminus\",\n    \"switch\",\n    \"order\",\n    \"skillcard\",\n    \"color\",\n    \"add\",\n    \"nomove\"\n]\n\n\ndef _command_fn(command, *args):\n    tmp = [command]\n    tmp += list(args)\n    _output.append(tmp)\n\n\nclass _wrapper_command:\n    def __init__(self, command):\n        self.command = command\n        self.isCommand = True\n\n    def __call__(self, *args):\n        _command_fn(self.command, *args)\n\n\nfor _cmd__ in _command__:\n    globals()[_cmd__] = _wrapper_command(_cmd__)\n\n\nttk = countTTK\nttk_until = countTTKuntil\nmv_ls = move_list\nbs = buffset\nbp = buffadd\nbm = buffminus\n# a = add\n# m = move\n# ac = action\nsw = switch\n# c = color\nsc = skillcard\n\n\ndef ___set(*args):\n    globals()[list(args)[0]] = list(args)[0]\n    _wrapper_command(\"set\")(*args)\n\n\nset = ___set\n\n\n# b-10 -> \"b10\"\nclass _color__():\n    def __init__(self, color):\n        self.color = color\n\n    def __sub__(self, num):\n        if(type(num) != int and type(num) != float):\n            raise TypeError(\"num must be Number\")\n        return self.color + str(num)\n\n\nfor _alp_num in range(26):\n    alphabet = str(chr(_alp_num + 97))\n    globals()[alphabet] = _color__(alphabet)\n\n\nclass _mv_ls():\n    def __call__(self):\n        return _color__(\"m\")\n\n    def _obj(self, mode, arg):\n        return {\"mode\": mode, \"value\": list(arg)}\n\n    def s(self, *args):\n        return self._obj(0, args)\n\n    def o(self, *args):\n        return self._obj(1, args)\n\n    def order(self, *args):\n        return self.o(*args)\n\n    def c(self, *args):\n        args = list(args)\n        if args[0].isCommand != True:\n            raise Exception(\"args[0] must be command function\")\n        args[0] = args[0].command\n        return self._obj(2, args)\n\n    def command(self, *args):\n        return self.c(*args)\n\n    def a(self, *args):\n        return self._obj(3, args)\n\n\nm = _mv_ls()\n\n######################\n\n".concat(t, "\n\n######################\n\nm = _mv_ls()\nfor (i, cmd) in enumerate(_output):\n    if(cmd[0] == \"move_list\"):\n        for (j, o) in enumerate(cmd[2]):\n            o_type = type(o)\n\n            if(o_type == int or o_type == float or o_type == str):\n                _output[i][2][j] = m.a(o)\n            elif(o_type == list):\n                _output[i][2][j] = m.s(*o)\n\nimport json\njson.dumps(_output)\n")), {});

                case 3:
                  return _context.abrupt("return", _context.sent);

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  console.log("Error in pyodideWorker at ".concat(_context.t0.filename, ", Line: ").concat(_context.t0.lineno, ", ").concat(_context.t0.message));

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 6]]);
        }));

        function main(_x) {
          return _main.apply(this, arguments);
        }

        return main;
      }(),
      waitInit: w
    };

    function S(e) {
      return t = this, n = void 0, i = /*#__PURE__*/regeneratorRuntime.mark(function i() {
        var t, n, r, i, _yield$k$main, o, s;

        return regeneratorRuntime.wrap(function i$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                t = document.getElementById("loading_python"), n = document.getElementById("executing_python");

                if (!(!t || !n)) {
                  _context2.next = 3;
                  break;
                }

                throw Error("DOMエラー");

              case 3:
                r = setTimeout(function () {
                  t.classList.remove("hide");
                }, 1500);
                _context2.next = 6;
                return k.waitInit();

              case 6:
                clearTimeout(r);
                t.classList.add("hide");
                i = setTimeout(function () {
                  n.classList.remove("hide");
                }, 1500);
                _context2.next = 11;
                return k.main(e);

              case 11:
                _yield$k$main = _context2.sent;
                o = _yield$k$main.results;
                s = _yield$k$main.error;

                if (!(clearTimeout(i), n.classList.add("hide"), s)) {
                  _context2.next = 16;
                  break;
                }

                throw s;

              case 16:
                return _context2.abrupt("return", JSON.parse(o).map(function (e) {
                  var t = [],
                      n = e[0],
                      r = function () {
                    var e = d[n];
                    if (void 0 !== e) return e;
                    throw Error("コマンド名に誤りがあります");
                  }();

                  t.push(r);

                  for (var _n7 = 1; _n7 < e.length; _n7++) {
                    var _i5 = _typeof(e[_n7]);

                    if ("number" === _i5) t.push(String(e[_n7]));else if ("string" === _i5) t.push(e[_n7]);else {
                      if (!Array.isArray(e[_n7])) throw Error("不正な型です: " + JSON.stringify(e) + " -> " + e[_n7]);
                      if (r !== u.move_list) throw Error("move_list以外に配列が指定されています");
                      {
                        var _r2 = e[_n7].map(function (e) {
                          e.mode = e.mode;
                          var t = 2 === e.mode;
                          t && (e.value[0] = d[e.value[0]]);

                          for (var _n8 = Number(t); _n8 < e.value.length; _n8++) {
                            "number" == typeof e.value[_n8] && (e.value[_n8] = String(e.value[_n8]));
                          }

                          return e;
                        });

                        t.push(_r2);
                      }
                    }
                  }

                  return t;
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, i);
      }), new ((r = void 0) || (r = Promise))(function (e, o) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            o(e);
          }
        }

        function a(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function l(t) {
          var n;
          t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function (e) {
            e(n);
          })).then(s, a);
        }

        l((i = i.apply(t, n || [])).next());
      });
      var t, n, r, i;
    }

    function _(e) {
      return t = this, n = void 0, i = /*#__PURE__*/regeneratorRuntime.mark(function i() {
        var t;
        return regeneratorRuntime.wrap(function i$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                t = {};

                if (!Boolean(e.match(/^#python#/))) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 4;
                return S(e);

              case 4:
                t.AST = _context4.sent;
                t.type = "python";
                _context4.next = 12;
                break;

              case 8:
                _context4.next = 10;
                return function (e) {
                  return t = this, n = void 0, i = /*#__PURE__*/regeneratorRuntime.mark(function i() {
                    var t;
                    return regeneratorRuntime.wrap(function i$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            t = new f(e).parse();
                            return _context3.abrupt("return", new h(t).parse());

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, i);
                  }), new ((r = void 0) || (r = Promise))(function (e, o) {
                    function s(e) {
                      try {
                        l(i.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }

                    function a(e) {
                      try {
                        l(i.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }

                    function l(t) {
                      var n;
                      t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function (e) {
                        e(n);
                      })).then(s, a);
                    }

                    l((i = i.apply(t, n || [])).next());
                  });
                  var t, n, r, i;
                }(e);

              case 10:
                t.AST = _context4.sent;
                t.type = "kirafan-timeline";

              case 12:
                return _context4.abrupt("return", t);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, i);
      }), new ((r = void 0) || (r = Promise))(function (e, o) {
        function s(e) {
          try {
            l(i.next(e));
          } catch (e) {
            o(e);
          }
        }

        function a(e) {
          try {
            l(i.throw(e));
          } catch (e) {
            o(e);
          }
        }

        function l(t) {
          var n;
          t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(function (e) {
            e(n);
          })).then(s, a);
        }

        l((i = i.apply(t, n || [])).next());
      });
      var t, n, r, i;
    }

    var T = function T(e, t) {
      var n = function n(e, t) {
        var n = e.findIndex(function (e) {
          return e[0] === t[0];
        });
        if (-1 === n) throw Error("not found");
        e[n] = t;
      },
          r = [[0, 5], [10, 8], [27.5, 17], [35, 17], [40, 8], [45, 2], [50, 5], [55, 8], [60, 8], [65, 8], [67.5, 17], [70, 2], [75, 8], [80, 5], [100, 5], [110, 22], [120, 8], [125, 8], [130, 8], [135, 17], [140, 8], [145, 8], [150, 17], [155, 8], [165, 10], [170, 17], [190, 17], [200, 17]];

      n(r, [125, 0]), n(r, [10, 0]), n(r, [100, 17]), n(r, [70, 17]), n(r, [75, 17]), n(r, [130, 10]);
      var i = [[75, 5], [80, 22], [100, 17]];
      n(i, [100, 22]);
      var o = (t ? i : r).find(function (t) {
        return t[0] === e;
      });
      return o ? o[1] : 0;
    };

    var M = /*#__PURE__*/function () {
      function M() {
        _classCallCheck(this, M);

        this.current = [], this.switchData = [], this.cardData = [], this.comment = [], this.color = void 0, this.place_of_currentTimeline = 0;
      }

      _createClass(M, [{
        key: "move",
        value: function move(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ID_of_firstChara();
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
          if (this.setColor(t, this.place_of_currentTimeline), t !== this.ID_of_firstChara() && !1 === n) throw new Error("最初のキャラ以外は操作できません");
          var r = this.get_chara_by_ID(t).timeline_OrderValue,
              i = r + e - (r - this.OrderValue_of_firstChara());
          this.pushChara(t, i), this.nextturn();
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
              n = -1;

          for (var _t12 = this.current.length - 1; _t12 > this.place_of_currentTimeline; _t12--) {
            if (e >= this.current[_t12].timeline_OrderValue) {
              n = _t12;
              break;
            }
          }

          return t = -1 === n ? this.place_of_currentTimeline + 1 : n + 1, t;
        }
      }, {
        key: "pushChara",
        value: function pushChara(e, t) {
          var n;

          try {
            n = c.objectCopy(this.get_chara_by_ID(e));
          } catch (t) {
            n = {
              id: e
            };
          }

          n.timeline_OrderValue = t;
          var r = this.place_to_moved(t);
          this.current.splice(r, 0, n);
        }
      }, {
        key: "addChara",
        value: function addChara(e, t) {
          var n = {
            id: e,
            timeline_OrderValue: t,
            type: 0
          };
          this.current.splice(this.place_of_currentTimeline, 0, n);
        }
      }, {
        key: "addSkillCard",
        value: function addSkillCard(e, t, n, r) {
          var i,
              o = !0;

          try {
            i = this.get_chara_by_ID(e);
          } catch (e) {
            o = !1;
          }

          if (o) {
            if (!i) throw Error("unreachable");
            if (1 !== i.type) throw Error("指定された名前はスキルカードではありません");
            i.time = n, this.current[this.placeToChara(e)] = i;
          } else {
            var _i6 = this.OrderValue_of_firstChara() + t,
                _o2 = this.place_to_moved(_i6);

            r = r || function () {}, this.current.splice(_o2, 0, {
              type: 1,
              time: n,
              id: e,
              timeline_OrderValue: _i6,
              OrderValue: t,
              event: r
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
            var n = e.timeline_OrderValue,
                r = t.timeline_OrderValue;
            return n < r ? -1 : n > r ? 1 : 0;
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
          if (this.place_of_currentTimeline++, 1 === this.firstChara.type) if (this.firstChara.event(this.firstChara.id, this.firstChara.OrderValue, this.firstChara.time), this.firstChara.time--, this.firstChara, 0 === this.firstChara.time) this.nextturn();else {
            if (this.firstChara.time < 0) throw Error("skillcardのtimeに0未満の数値");
            this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), !1);
          }
        }
      }, {
        key: "skip",
        value: function skip() {
          this.nextturn();
        }
      }, {
        key: "get_chara_by_ID",
        value: function get_chara_by_ID(e) {
          return this.current[this.placeToChara(e)];
        }
      }, {
        key: "placeToChara",
        value: function placeToChara(e) {
          for (var _t13 = this.place_of_currentTimeline; _t13 < this.current.length; _t13++) {
            if (this.current[_t13].id === e) return _t13;
          }

          throw Error("Not Found!IDに誤りがあります");
        }
      }]);

      return M;
    }();

    var L = /*#__PURE__*/function () {
      function L(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, L);

        this.id = e, this.SPD = t, this._SPD_buff = [], this.SPD_buff = n, this.LoadFactorReduce = r;
      }

      _createClass(L, [{
        key: "calculateOrderValue",
        value: function calculateOrderValue(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = this.SPD,
              r = this.SPD_buff / 100,
              i = Math.min(Math.max(124 - Math.floor(n / 2), 0), 100),
              o = Math.floor(i * (e / 100) * (1 - t) * (1 - r));
          return Math.max(Math.min(o, 500), 15);
        }
      }, {
        key: "initOrderValue",
        value: function initOrderValue() {
          return this.calculateOrderValue(100, 0);
        }
      }, {
        key: "SPD_buff",
        get: function get() {
          return this._SPD_buff.reduce(function (e, t) {
            return e + t.val;
          }, 0);
        },
        set: function set(e) {
          this._SPD_buff = [{
            val: e,
            turn: 1 / 0
          }];
        }
      }, {
        key: "setSPDbuff",
        value: function setSPDbuff(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 / 0;

          if (0 !== t) {
            if (t < 0) throw Error("turnは0以上の整数でなければなりません");

            this._SPD_buff.push({
              val: e,
              turn: t
            });
          }
        }
      }, {
        key: "nextTurn",
        value: function nextTurn() {
          this._SPD_buff = this._SPD_buff.map(function (e) {
            return e.turn--, e;
          }).filter(function (e) {
            return e.turn > 0;
          });
        }
      }]);

      return L;
    }();

    function O(e, t, n, r, i, o, a) {
      for (var _len = arguments.length, l = new Array(_len > 7 ? _len - 7 : 0), _key = 7; _key < _len; _key++) {
        l[_key - 7] = arguments[_key];
      }

      var c = l[0],
          d = l[1],
          h = l[2],
          f = l[3],
          p = l[4],
          m = function m(t) {
        var n = o.get();
        e.place_of_currentTimeline < n && a(t);
      };

      if (c !== u.end) {
        var _e9 = l;
        _e9[0] = u[c], 0 === t.main.length && (t.main = []), t.main.push(_e9);
      }

      var g = function g(e) {
        return Number.isNaN(Number(e)) ? 1 / 0 : Number(e);
      };

      return s(c).case(u.buffset, function () {
        var e = d,
            t = Number(h) || 0,
            n = g(f);
        i[e]._SPD_buff = [], i[e].setSPDbuff(t, n);
      }).case(u.buffadd, function () {
        var e = d,
            t = Number(h) || 0,
            n = g(f);
        i[e].setSPDbuff(t, n);
      }).case(u.buffminus, function () {
        var e = d,
            t = Number(h) || 0,
            n = g(f);
        i[e].setSPDbuff(-t, n);
      }).case(u.add, function () {
        var t = d,
            n = Number(h),
            r = Number(f) || 0;
        i[t] = new L(t, n, r), e.addChara(t, i[t].initOrderValue());
      }).case([u.move, u.action], function () {
        var t, n;
        c === u.move ? (n = Number(d), t = h) : (t = d, n = Number(h));
        var o = "true" === f;
        r[t] && m(T(n, !1)), e.move(i[e.ID_of_firstChara()].calculateOrderValue(n), t, o), i[t].nextTurn();
      }).case(u.order, function () {
        var t = d,
            n = Number(h);
        e.move(n, t, !1), i[t].nextTurn();
      }).case(u.switch, function () {
        var t = d,
            n = h,
            r = Number(f),
            o = Number(p) || 0;
        e.switchChara(t, n), i[n] = new L(n, r, o);
      }).case(u.color, function () {
        var t = d;
        e.color = t;
      }).case(u.skillcard, function () {
        var t = d,
            n = Number(h),
            o = Number(f),
            s = Number(p);
        if ([n, o, s].includes(NaN)) throw Error("引数不足です");
        var a = new L(t, n, 0);
        i[t] = a, e.addSkillCard(t, a.calculateOrderValue(o), s, function (e, t, n) {
          return m(r[e] ? T(Number(f), !0) : 0);
        });
      }).case(u.nomove, function () {
        e.skip();
      }).case(u.end, function () {
        n = 4;
      }).case(u.ttk_stop, function () {
        o.set(e.place_of_currentTimeline);
      }).default(function () {
        throw Error("no command found");
      }), {
        mode: n,
        convertedTLdata: t,
        TL: e
      };
    }

    var A = n(4631),
        N = n.n(A),
        E = (n(790), n(4504), n(1707), n(5321), n(3379)),
        D = n.n(E),
        P = n(7795),
        I = n.n(P),
        W = n(569),
        H = n.n(W),
        F = n(3565),
        z = n.n(F),
        j = n(9216),
        R = n.n(j),
        B = n(4589),
        V = n.n(B),
        U = n(3501),
        K = {};
    K.styleTagTransform = V(), K.setAttributes = z(), K.insert = H().bind(null, "head"), K.domAPI = I(), K.insertStyleElement = R(), D()(U.Z, K), U.Z && U.Z.locals && U.Z.locals;
    var G = n(2875),
        $ = {};
    $.styleTagTransform = V(), $.setAttributes = z(), $.insert = H().bind(null, "head"), $.domAPI = I(), $.insertStyleElement = R(), D()(G.Z, $), G.Z && G.Z.locals && G.Z.locals, n(2801);
    var X = n(1368),
        Z = {};

    function Y(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var _e$getCursor = e.getCursor(),
          n = _e$getCursor.line,
          r = _e$getCursor.ch;

      return e.getLine(n).substring(r, r + t);
    }

    function q(e, t) {
      var _e$getCursor2 = e.getCursor(),
          n = _e$getCursor2.line,
          r = _e$getCursor2.ch;

      e.setCursor({
        line: n,
        ch: r + t
      });
    }

    function J(e) {
      var t = Object.keys(d);
      return new Promise(function (n) {
        setTimeout(function () {
          var r = e.getCursor(),
              i = e.getLine(r.line);
          var o = r.ch,
              s = r.ch;

          for (; o && /[^\s,{}[\]<>]/.test(i.charAt(o - 1));) {
            --o;
          }

          for (; s < i.length && /[^\s,{}[\]<>]/.test(i.charAt(s));) {
            ++s;
          }

          var a = i.slice(o, s).toLowerCase(),
              l = [];
          t.forEach(function (e) {
            e.startsWith(a) && l.push(e);
          });
          var c = e.getValue().replaceAll(/#([^\n])+/g, "").split("\n").map(function (e) {
            return e.trim().split(/\s/);
          }),
              u = c.filter(function (e) {
            return !(e.length < 1) && e[0].startsWith("set");
          }).map(function (e) {
            return e[1];
          });
          return c.forEach(function (e) {
            e.length <= 2 || !e[0].startsWith("mv_ls") && !e[0].startsWith("move_list") || _toConsumableArray(e[2].replaceAll(/\t/g, "").matchAll(/[[,]\[([^,]+)/g)).forEach(function (e) {
              u.push(e[1]);
            });
          }), u.filter(function (e) {
            return e.startsWith(a) && e !== a;
          }).forEach(function (e) {
            return l.push(e);
          }), l.length > 0 ? n({
            list: l,
            from: N().Pos(r.line, o),
            to: N().Pos(r.line, s)
          }) : n(void 0);
        }, 100);
      });
    }

    function Q(e, t) {
      var n = document.getElementById("firstchara");
      n && (n.innerText = t);
      var r = document.getElementById("now_place");
      r && (r.innerText = String(e));
    }

    function ee() {
      var e = new a(location.href).getParam("TL"),
          t = new a(location.href),
          n = String(new Date()) + "自動保存:TL生成ツール";
      e !== t.getParam("TL") && (0 === e.length ? history.pushState(null, n, t.href) : history.replaceState(null, n, t.href), c.changeTitle(n));
    }

    function te(e, t, n, r) {
      var i;
      var o = c.htmltag("thead"),
          s = c.htmltag("tr");
      if (null == (null === (i = e[0]) || void 0 === i ? void 0 : i.length)) return;

      for (var _t14 = 0; _t14 <= e[0].length; _t14++) {
        var _e10 = void 0;

        _e10 = _t14 === r ? c.htmltag("th", _t14.toString(), "now_place") : 0 === _t14 ? c.htmltag("th", "", "nowrap") : c.htmltag("th", _t14.toString()), s.appendChild(_e10);
      }

      o.appendChild(s);

      var _loop3 = function _loop3(_r3) {
        var i = c.htmltag("tr");
        i.appendChild(c.htmltag("td", t[_r3], "nowrap"));

        var _loop4 = function _loop4(_o3) {
          var s = void 0;
          var a = n.find(function (e) {
            return "color" === e[0] && e[1] === t[_r3] && e[2] === _o3;
          }),
              l = e[_r3][_o3];
          var u = void 0;
          u = "string" == typeof l ? l : "number" == typeof l ? String(l) : "", s = a ? c.htmltag("td", u, "color-" + a[3]) : c.htmltag("td", u), i.appendChild(s);
        };

        for (var _o3 = 0; _o3 < e[0].length; _o3++) {
          _loop4(_o3);
        }

        o.appendChild(i);
      };

      for (var _r3 = 0; _r3 < e.length; _r3++) {
        _loop3(_r3);
      }

      var a = document.querySelector("table");
      if (!a) throw c.undefinedErr;
      a.innerHTML = "", a.appendChild(o);
    }

    function ne(e) {
      var t = document.getElementById("popup");
      if (!t) throw c.undefinedErr;
      t.innerText = re(e);
    }

    function re(e) {
      return e.set.map(function (e) {
        return e ? e.join(" ") : "";
      }).join("\n") + "\n\nstart\n" + e.main.map(function (e) {
        return e ? "  " + e.join(" ") : "";
      }).join("\n") + "\nend";
    }

    Z.styleTagTransform = V(), Z.setAttributes = z(), Z.insert = H().bind(null, "head"), Z.domAPI = I(), Z.insertStyleElement = R(), D()(X.Z, Z), X.Z && X.Z.locals && X.Z.locals;

    var ie = /*#__PURE__*/function () {
      function ie(e, t) {
        _classCallCheck(this, ie);

        this._editor_init = e, this._update_data = t, this._editor_init = e, this._update_data = t;
      }

      _createClass(ie, [{
        key: "switch_editor",
        value: function switch_editor(e) {
          this._editor_init.switch_editor(e);
        }
      }, {
        key: "update_data",
        value: function update_data(e) {
          this._update_data(e);
        }
      }]);

      return ie;
    }();

    function oe(e, t, n, r, o, s, l) {
      var u = function (e, t, n, r, o, s, l) {
        var u = document.getElementById("copyTL"),
            d = document.getElementById("jumpTwitter"),
            h = document.getElementById("unzipMoveList"),
            f = document.getElementById("csvDownload"),
            p = document.getElementById("copy_ConvertedTL"),
            m = document.getElementById("pop11"),
            g = document.getElementById("isSet_onbeforeunload");
        if (function () {
          var e = document.getElementById("readme");
          if (!e) throw c.undefinedErr;
          var t = i("span");
          [{
            title: "#[comment]",
            text: ["#から始まるものは行末まで無視されます(コメントに使用)", "命令の最後に書いてもよい", "ショートカットは「Ctrl + /」", "例:", "move 125 enemy", "#ここからデバフを入れる", "例:", "move 125 momo #とっておき"]
          }, {
            title: "set [name] [SPD] ([buff(%)])",
            text: ["開始(start)前にフィールドに出すキャラを設定", "SPDの優先度の高いキャラから先に書く", "nameにスペースを含めるのは禁止"]
          }, {
            title: "start",
            text: ["メインモード切り替え", "setを書き終わったら記入"]
          }, {
            title: "end",
            text: ["メインモードモード終了", "その後ろにstart、start_sortを書くことでまた別のモードに切り替えられる"]
          }, {
            title: "move [硬直(%)] [name]",
            text: ["行動", "先頭のキャラ以外をnameに記入した場合errorを吐く", "moveの代わりにmでも可"]
          }, {
            title: "action [name] [硬直(%)]",
            text: ["行動", "moveと引数の順番が異なる以外同じ", "actionの代わりにacでも可"]
          }, {
            title: "move_list [name] [[硬直(%)],[交代後のname,SPD,(buff)],[硬直(%)],{command,argments1,argments2...}...]",
            text: ["行動リスト", "move_list nagi [40,{buffset,nagi,24},100,[ren,141,100],100]", "のように書く", "スペースを空けるのは厳禁", "内側にある[]は途中で交代することを示す", "{}でコマンドを使用可能", "<>で硬直値を直接入力可能", "move_listの代わりにmv_lsでも可"]
          }, {
            title: "----ここからほとんどデバッグしていないので正しく動かない可能性大----",
            text: []
          }, {
            title: ["buffset [name] [buff(%)] ([turn])", "buffadd [name] [buff(%)] ([turn])", "buffminus [name] [buff(%)] ([turn])"],
            text: ["バフ設定", "それぞれ b,b+,b-と省略可"]
          }, {
            title: "switch [from_name] [to_name] [SPD] ([buff])",
            text: ["from_nameに交代前のキャラ名、to_nameに交代後のキャラ名を記入", "swと省略可"]
          }, {
            title: "order [name] [name] [SPD]",
            text: ["硬直地直接入力"]
          }, {
            title: "skillcard [name] [SPD] [硬直] [回数]",
            text: ["スキルカード"]
          }, {
            title: "color [色]",
            text: ["r red", "g green", "b blue", "p purple", "s silver", "y yellow", "o orange", "c copper", "d dark"]
          }, {
            title: ["ttk[name][name][name] ...", "ttk_until[n行目]"],
            text: ["とっておきカウント", "ttkは引数にプレイヤーのキャラ、スキルカードの名前を書きます", "ttk_untilは引数に何行目までカウントしたいか書きます", "", "使用しているテーブル(以下にないものは0として計算)", "スキル"],
            html: '<table class="normal-table"><thead><th>硬直</th><th>チャージ</th></thead><tbody><tr><td>0</td><td>5</td></tr><tr><td>10</td><td>0</td></tr><tr><td>35</td><td>17</td></tr><tr><td>40</td><td>8</td></tr><tr><td>45</td><td>2</td></tr><tr><td>50</td><td>5</td></tr><tr><td>55</td><td>8</td></tr><tr><td>60</td><td>8</td></tr><tr><td>65</td><td>8</td></tr><tr><td>67.5</td><td>17</td></tr><tr><td>70</td><td>17</td></tr><tr><td>75</td><td>17</td></tr><tr><td>80</td><td>5</td></tr><tr><td>100</td><td>17</td></tr><tr><td>110</td><td>22</td></tr><tr><td>120</td><td>8</td></tr><tr><td>125</td><td>0</td></tr><tr><td>130</td><td>10</td></tr><tr><td>135</td><td>17</td></tr><tr><td>140</td><td>8</td></tr><tr><td>145</td><td>8</td></tr><tr><td>150</td><td>17</td></tr><tr><td>155</td><td>8</td></tr><tr><td>165</td><td>10</td></tr><tr><td>170</td><td>17</td></tr><tr><td>190</td><td>17</td></tr><tr><td>200</td><td>17</td></tr></tbody></table>\n         <br />\n         スキルカード<br />\n        <table class="normal-table"><thead><th>硬直</th><th>チャージ</th></thead><tbody><tr><td>75</td><td>5</td></tr><tr><td>80</td><td>22</td></tr><tr><td>100</td><td>22</td></tr></tbody></table>\n      '
          }, {
            title: "#python#",
            text: ["一番最初に#python#を入れるとpythonとして入力できます", "各コマンドは関数になっているのでそれを呼び出すと反映されます", "交代はそのままlistで書き、硬直値入力はm.order,コマンド入力はm.commandです", "注意点として、m.commandの第一引数はfunctionを渡します", "", "一部のコマンドの略称が変わります", "bs = buffset", "bp = buffadd", "bm = buffminus", "", "色を付ける場合、色-数字としてください", "b-40", "m.order(b-40)"],
            html: '<textarea cols="30" rows="10">\n#python#\nset("syaro",144)\nset("media",124)\n\nmv_ls(syaro,[m.command(bp,syaro,-200),10,99,m.order(10.66)])\nmv_ls(media,[d-80,80,69,m.order(c-14.5),["I",140],60])\n\n    </textarea>'
          }].forEach(function (e) {
            var n;

            if (n = "string" == typeof e.title ? [e.title] : e.title, n.forEach(function (e) {
              t.appendChild(i("strong", e)), t.appendChild(i("br"));
            }), e.text.forEach(function (e) {
              t.appendChild(i("span", e)), t.appendChild(i("br"));
            }), e.html) {
              var _n9 = i("span");

              _n9.innerHTML = e.html, t.appendChild(_n9);
            }

            t.appendChild(i("br"));
          }), e.innerHTML = "", e.appendChild(t);
        }(), !(u && d && h && g && m && f && p)) throw c.undefinedErr;
        setInterval(function () {
          ee();
        }, 3e5), window.onbeforeunload = function (t) {
          ee(), 0 !== e().length && g.checked && (t.preventDefault(), t.returnValue = "ページから離れますか？");
        }, d.onclick = function () {
          window.open("https://twitter.com/Y52en/status/1402239605978517505?s=20", "_blank");
        }, h.onclick = function () {
          m.checked = !0;
        };
        var v = new a(void 0, !1);
        return u.onclick = function () {
          return function (e) {
            c.textCopy(e);
            var t = document.getElementById("copyed");
            if (!t) throw c.undefinedErr;
            t.style.display = "block", setTimeout(function () {
              t.style.display = "none";
            }, 1e3);
          }(v.href);
        }, f.onclick = function () {
          return function (e, t) {
            var n = "";

            for (var _t15 = 0; _t15 < e[0].length; _t15++) {
              n += "," + (_t15 + 1);
            }

            n += "\n";

            for (var _r4 = 0; _r4 < e.length; _r4++) {
              n += t[_r4];

              for (var _t16 = 0; _t16 < e[0].length; _t16++) {
                n += ",", n += e[_r4][_t16] || "";
              }

              n += "\n";
            }

            !function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "timeline.csv";
              var n = new Uint8Array([239, 187, 191]),
                  r = new Blob([n, e], {
                type: "text/csv"
              }),
                  i = URL.createObjectURL(r),
                  o = document.createElement("a");
              o.href = i, o.download = t, o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(i);
            }(n);
          }(t, n);
        }, ne(r), p.onclick = function () {
          return function (e) {
            c.textCopy(re(e));
            var t = document.getElementById("copyed_popup");
            if (!t) throw c.undefinedErr;
            t.style.display = "block", setTimeout(function () {
              t.style.display = "none";
            }, 1e3);
          }(r);
        }, te(t, n, o, s), Q(s, l), function (e) {
          var _e11;

          var i;
          (_e11 = e, t = _e11.json, n = _e11.charalist, o = _e11.comment, r = _e11.convertedTLdata, s = _e11.now_place, i = _e11.TL_input, l = _e11.firstchara, _e11), v.setParam("TL", i), te(t, n, o, s), ne(r), Q(s, l);
        };
      }(function () {
        return "";
      }, t, n, r, o, s, l),
          d = function (e) {
        var t = document.getElementById("editor");
        if (!t) throw c.undefinedErr;
        N().defineSimpleMode("kirafan-timeline", {
          start: [{
            regex: /(mv_ls|move_list)[ \u3000]+/,
            token: "keyword",
            next: "move_list"
          }, {
            regex: /[a-zA-Z_]+$/,
            token: "keyword"
          }, {
            regex: /[a-zA-Z_]+/,
            token: "keyword",
            next: "arg"
          }, {
            regex: /\s+/
          }, {
            regex: /#.*$/,
            token: "comment"
          }],
          move_list: [{
            regex: /(?:([^[\s]+)(\s*)(\[))/,
            next: "move_list_arg2",
            token: ["operator", "", "age"]
          }],
          move_list_arg2: [{
            regex: /\s+/
          }, {
            regex: /\]/,
            token: "unit",
            next: "start"
          }, {
            regex: /(\[)(\s*)([^\]\s*,]+)/,
            token: ["unit", "", "string-3"],
            next: "mvls_switch"
          }, {
            regex: /(\{)(\s*)([^}\s*,]+)/,
            token: ["unit", "", "keyword"],
            next: "mvls_command"
          }, {
            regex: /(<)(\s*)([^>\s*,]+)/,
            token: ["unit", "", "string-3"],
            next: "mvls_order"
          }],
          mvls_switch: [{
            regex: /\s+/
          }, {
            regex: /,/
          }, {
            regex: /\]/,
            token: "unit",
            next: "move_list_arg2"
          }, {
            regex: /[^\s\],]+/,
            token: "string-3"
          }],
          mvls_command: [{
            regex: /\s+/
          }, {
            regex: /,/
          }, {
            regex: /\}/,
            token: "unit",
            next: "move_list_arg2"
          }, {
            regex: /[^\s},]+/,
            token: "string-3"
          }],
          mvls_order: [{
            regex: /\s+/
          }, {
            regex: /,/
          }, {
            regex: />/,
            token: "unit",
            next: "move_list_arg2"
          }, {
            regex: /[^\s>,]+/,
            token: "string-3"
          }],
          arg: [{
            regex: /[^#]*$/,
            token: "arg",
            next: "start"
          }, {
            regex: /[^#]*/,
            token: "arg",
            next: "start"
          }, {
            regex: /#.*$/,
            token: "comment"
          }],
          comment: [{
            regex: /.*?$/,
            token: "comment",
            next: "start"
          }],
          meta: {
            dontIndentStates: ["comment"],
            lineComment: "#",
            fold: "brace"
          }
        });
        var n = new a(location.href).getParam("TL");
        var r = "";
        null !== typeof n && (r = n);
        var i = N()(t, {
          mode: "kirafan-timeline",
          lineNumbers: !0,
          indentUnit: 4,
          theme: "panda-syntax",
          lineWrapping: !0,
          tabSize: 2,
          value: r,
          extraKeys: {
            "Ctrl-Space": "autocomplete"
          },
          hintOptions: {
            hint: J
          }
        });
        i.on("keydown", function (e, t) {
          "/" === t.key && t.ctrlKey && e.toggleComment({
            lineComment: "#"
          }), [["[", "]"], ["{", "}"], ["<", ">"]].forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                n = _ref4[0],
                r = _ref4[1];

            if (t.key === n && (function (e, t) {
              var n = e.getCursor();
              e.replaceRange(t, n);
            }(e, r), q(e, -1)), t.key === r && Y(e) === r) {
              if (c.isAndroid()) return;
              q(e, 1), t.preventDefault();
            }

            "Backspace" === t.key && Y(e, -1) === n && Y(e, 1) === r && (function (e) {
              var _e$getCursor3 = e.getCursor(),
                  t = _e$getCursor3.line,
                  n = _e$getCursor3.ch;

              e.replaceRange("", {
                line: t,
                ch: n - 1
              }, {
                line: t,
                ch: n + 1
              });
            }(e), t.preventDefault());
          }), c.isPC() && t.key.match(/^\w$/) && e.showHint();
        });

        var o = {
          switch_editor: function switch_editor(e) {
            i = function (e, t) {
              return e.getOption("mode") !== t && e.setOption("mode", t), e;
            }(i, e);
          },
          get_value: function get_value() {
            return i.getValue();
          }
        },
            s = function s() {
          e(i.getValue(), o);
        };

        return i.on("change", function () {
          s();
        }), i.scrollTo(3, 3), s(), o;
      }(function (t, n) {
        return e(t, n, u);
      });

      return new ie(d, u);
    }

    window.debug = {}, function (e) {
      e.onload = function () {
        oe(function (e, t, n) {
          return r = this, i = void 0, a = /*#__PURE__*/regeneratorRuntime.mark(function a() {
            var r, i, o, a, d, h, _n10, _t17, _ref5, f, p, m, g, v, y, b, _ref9, x, w;

            return regeneratorRuntime.wrap(function a$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    r = document.getElementById("error"), i = document.getElementById("info"), o = document.getElementById("loading_python"), a = document.getElementById("executing_python");

                    if (!("\n" !== e.at(-1) && (e += "\n"), !(r && i && o && a))) {
                      _context5.next = 3;
                      break;
                    }

                    throw c.undefinedErr;

                  case 3:
                    h = !1;
                    _context5.prev = 4;
                    _context5.next = 7;
                    return _(e);

                  case 7:
                    _n10 = _context5.sent;
                    h = "python" === _n10.type, t.switch_editor(_n10.type), d = _n10.AST;
                    _context5.next = 15;
                    break;

                  case 11:
                    _context5.prev = 11;
                    _context5.t0 = _context5["catch"](4);

                    if (h) {
                      _t17 = String(_context5.t0).split("\n");
                      r.innerText = _t17[_t17.length - 2];
                    } else r.innerHTML = String(_context5.t0);

                    return _context5.abrupt("return", void (i.innerHTML = ""));

                  case 15:
                    i.innerHTML = "", r.innerHTML = "";
                    _ref5 = function (e) {
                      var t, n, r, i;
                      var o = new M(),
                          a = {};
                      var c = {};
                      var d = {
                        main: [],
                        set: []
                      };
                      var h = {};
                      var f = 0;
                      var p = l(1 / 0);
                      var m,
                          g,
                          v = 0;

                      var y = function y(e) {
                        f += e;
                      },
                          b = function b() {
                        var _ref6 = function (e, t, n, r, i, o, s, a) {
                          var l;
                          var c;

                          var d = function d() {
                            for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                              t[_key2] = arguments[_key2];
                            }

                            var _O = O.apply(void 0, [e, n, r, i, o, s, a].concat(t));

                            e = _O.TL;
                            n = _O.convertedTLdata;
                            r = _O.mode;
                          };

                          for (; 0 !== e.current.length;) {
                            var _n11 = e.ID_of_firstChara();

                            if (void 0 === (null === (l = t[_n11]) || void 0 === l ? void 0 : l[0])) {
                              var _ret2 = function () {
                                var e = {};
                                Object.keys(t).forEach(function (n) {
                                  0 !== t[n].length && (e[n] = t[n]);
                                }), 0 !== Object.keys(e).length && (c = "ⓘinfo :move_listに使われていないスキルがあります:" + JSON.stringify(Object.fromEntries(Object.entries(e).map(function (_ref7) {
                                  var _ref8 = _slicedToArray(_ref7, 2),
                                      e = _ref8[0],
                                      t = _ref8[1];

                                  return [e, t.map(function (e) {
                                    return e.value.length > 0 && 2 === e.mode && (e.value[0] = u[e.value[0]]), 1 === e.value.length && (e.value = e.value[0]), e.value;
                                  })];
                                }))).replaceAll('"', ""));
                                return "break";
                              }();

                              if (_ret2 === "break") break;
                            }

                            var _r5 = t[_n11].shift();

                            if (!_r5) throw Error("内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。");

                            try {
                              if (1 === _r5.mode) {
                                var _r5$value = _slicedToArray(_r5.value, 1),
                                    _e12 = _r5$value[0],
                                    _t18 = _e12.match(/^[a-zA-Z]/g),
                                    _i7 = _e12.match(/\d+(\.(\d+)?)?/g);

                                if (_t18 && d(u.color, _t18[0]), !_i7) throw Error("硬直が見つかりませんでした");
                                d(u.order, _n11, _i7[0]);
                              } else if (3 === _r5.mode) {
                                var _r5$value2 = _slicedToArray(_r5.value, 1),
                                    _e13 = _r5$value2[0],
                                    _t19 = _e13.match(/^[a-zA-Z]/g),
                                    _i8 = _e13.match(/\d+/g);

                                if (_t19 && d(u.color, _t19[0]), !_i8) throw Error("硬直値が見つかりませんでした");
                                d(u.action, _n11, _i8[0]);
                              } else if (0 === _r5.mode) {
                                var _r5$value3 = _slicedToArray(_r5.value, 3),
                                    _e14 = _r5$value3[0],
                                    _i9 = _r5$value3[1],
                                    _o4 = _r5$value3[2];

                                d(u.switch, _n11, _e14, _i9, _o4 || "0"), t[_e14] = t[_n11], t[_n11] = [];
                              } else {
                                if (2 !== _r5.mode) throw Error("テキストのパースエラー");
                                d.apply(void 0, _toConsumableArray(_r5.value));
                              }
                            } catch (e) {
                              throw Error(e + ":  " + JSON.stringify(_r5.value) + " ");
                            }
                          }

                          return {
                            TL: e,
                            chara_move_list: t,
                            info: c
                          };
                        }(o, a, d, v, h, c, p, y);

                        o = _ref6.TL;
                        m = _ref6.info;
                        a = _ref6.chara_move_list;
                      };

                      try {
                        var _loop5 = function _loop5(_l2) {
                          var f = null === (t = e[_l2]) || void 0 === t ? void 0 : t[0],
                              m = null === (n = e[_l2]) || void 0 === n ? void 0 : n[1],
                              g = null === (r = e[_l2]) || void 0 === r ? void 0 : r[2],
                              x = null === (i = e[_l2]) || void 0 === i ? void 0 : i[3];
                          s(v).case([0], function () {
                            s(f).case(u.set, function () {
                              var t = m.toString(),
                                  n = Number(g),
                                  r = Number(x) || 0;
                              c[t] = new L(t, n, r), o.setChara(t, c[t].initOrderValue()), 0 === d.set.length ? d.set = [e[_l2]] : d.set.push(e[_l2]);
                            }).case(u.countTTK, function () {
                              e[_l2].slice(1).forEach(function (e) {
                                "string" == typeof e && (h[e] = !0);
                              });
                            }).case(u.countTTKuntil, function () {
                              p.set(Number(m) || 1 / 0);
                            }).case(u.start, function () {
                              v = 1, o.inited();
                            }).case(u.start_sort, function () {
                              v = 2, o.inited();
                            }).case(u.move_list, function () {
                              v = 2, o.inited(), _l2--;
                            }).default(function () {
                              throw Error("need 'start'");
                            });
                          }).case(1, function () {
                            var t = e[_l2];
                            if (t[0] === u.move_list) throw Error("start_sort ~ end_sort内にmove_listを書いてください");

                            var _O2 = O.apply(void 0, [o, d, v, h, c, p, y].concat(_toConsumableArray(t)));

                            v = _O2.mode;
                            d = _O2.convertedTLdata;
                            o = _O2.TL;
                          }).case(2, function () {
                            s(f).case(u.move_list, function () {
                              var e = g;
                              a[m] = e;
                            }).case(u.end_sort, function () {
                              b(), v = 4;
                            }).default(function () {
                              throw Error("no command found:「" + f + "」");
                            });
                          }).case(4, function () {
                            s(f).case(u.start, function () {
                              v = 1;
                            }).case(u.start_sort, function () {
                              v = 2;
                            }).default(function () {
                              throw Error("need 'start'");
                            });
                          }).default(function () {
                            throw Error("内部エラー");
                          });
                          _l = _l2;
                        };

                        for (var _l = 0; _l < e.length; _l++) {
                          _loop5(_l);
                        }

                        0 === v && (o.inited(), v = 2), 2 === v && b();
                      } catch (e) {
                        console.error(e), g = e;
                      }

                      return {
                        info: m,
                        error: g,
                        TL: o,
                        ttk: f,
                        convertedTLdata: d,
                        chara_list: c,
                        count_ttk_ls: h
                      };
                    }(d), f = _ref5.chara_list, p = _ref5.count_ttk_ls, m = _ref5.TL, g = _ref5.ttk, v = _ref5.info, y = _ref5.error, b = _ref5.convertedTLdata;

                    if (!y) {
                      _context5.next = 19;
                      break;
                    }

                    return _context5.abrupt("return", void (r.innerHTML = y));

                  case 19:
                    v && (i.innerHTML = v);
                    _ref9 = function (e, t) {
                      var n = [];

                      for (var _t20 in e) {
                        n.push(_t20);
                      }

                      var r = Array.from(new Array(Object.keys(e).length), function () {
                        return new Array(t.current.length).fill(void 0);
                      });
                      return t.current.forEach(function (e, t) {
                        var i = e.id,
                            o = e.timeline_OrderValue,
                            s = n.indexOf(i);
                        r[s][t] = o;
                      }), t.switchData.forEach(function (e) {
                        var _e15 = _slicedToArray(e, 3),
                            t = _e15[0],
                            i = _e15[1],
                            o = _e15[2],
                            s = n.indexOf(i);

                        var a = "";
                        a = s < n.indexOf(o) ? "↓↓" : "↑↑", r[s][t] = a;
                      }), t.cardData.forEach(function (e) {
                        var t = n.indexOf(e[1]);
                        r[t][e[0]] = "→";
                      }), {
                        outputTL: r,
                        chara_array: n
                      };
                    }(f, m), x = _ref9.outputTL, w = _ref9.chara_array;
                    n({
                      json: x,
                      charalist: w,
                      convertedTLdata: b,
                      comment: m.comment,
                      now_place: m.place_of_currentTimeline + 1,
                      TL_input: e,
                      firstchara: m.ID_of_firstChara()
                    }), document.querySelectorAll(".ttk").forEach(function (e) {
                      0 === Object.values(p).filter(function (e) {
                        return e;
                      }).length ? e.classList.add("display-none") : (e.classList.remove("display-none"), document.querySelectorAll(".ttk-value").forEach(function (e) {
                        e.textContent = String(g);
                      }));
                    });

                  case 22:
                  case "end":
                    return _context5.stop();
                }
              }
            }, a, null, [[4, 11]]);
          }), new ((o = void 0) || (o = Promise))(function (e, t) {
            function n(e) {
              try {
                l(a.next(e));
              } catch (e) {
                t(e);
              }
            }

            function s(e) {
              try {
                l(a.throw(e));
              } catch (e) {
                t(e);
              }
            }

            function l(t) {
              var r;
              t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o(function (e) {
                e(r);
              })).then(n, s);
            }

            l((a = a.apply(r, i || [])).next());
          });
          var r, i, o, a;
        }, [], [], {
          main: [],
          set: []
        }, [], 0, "");
      };
    }(window);
  }();
})();
