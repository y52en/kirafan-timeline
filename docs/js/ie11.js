"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var e = {
    4504: function _(e, t, r) {
      !function (e) {
        "use strict";

        var t = {},
            r = /[^\s\u00a0]/,
            n = e.Pos,
            i = e.cmpPos;

        function o(e) {
          var t = e.search(r);
          return -1 == t ? 0 : t;
        }

        function a(e, t) {
          var r = e.getMode();
          return !1 !== r.useInnerComments && r.innerMode ? e.getModeAt(t) : r;
        }

        e.commands.toggleComment = function (e) {
          e.toggleComment();
        }, e.defineExtension("toggleComment", function (e) {
          e || (e = t);

          for (var r = this, i = 1 / 0, o = this.listSelections(), a = null, l = o.length - 1; l >= 0; l--) {
            var s = o[l].from(),
                c = o[l].to();
            s.line >= i || (c.line >= i && (c = n(i, 0)), i = s.line, null == a ? r.uncomment(s, c, e) ? a = "un" : (r.lineComment(s, c, e), a = "line") : "un" == a ? r.uncomment(s, c, e) : r.lineComment(s, c, e));
          }
        }), e.defineExtension("lineComment", function (e, i, l) {
          l || (l = t);
          var s,
              c,
              u = this,
              d = a(u, e),
              h = u.getLine(e.line);

          if (null != h && (s = e, c = h, !/\bstring\b/.test(u.getTokenTypeAt(n(s.line, 0))) || /^[\'\"\`]/.test(c))) {
            var f = l.lineComment || d.lineComment;

            if (f) {
              var p = Math.min(0 != i.ch || i.line == e.line ? i.line + 1 : i.line, u.lastLine() + 1),
                  g = null == l.padding ? " " : l.padding,
                  m = l.commentBlankLines || e.line == i.line;
              u.operation(function () {
                if (l.indent) {
                  for (var t = null, i = e.line; i < p; ++i) {
                    var a = (s = u.getLine(i)).slice(0, o(s));
                    (null == t || t.length > a.length) && (t = a);
                  }

                  for (i = e.line; i < p; ++i) {
                    var s = u.getLine(i),
                        c = t.length;
                    (m || r.test(s)) && (s.slice(0, c) != t && (c = o(s)), u.replaceRange(t + f + g, n(i, 0), n(i, c)));
                  }
                } else for (i = e.line; i < p; ++i) {
                  (m || r.test(u.getLine(i))) && u.replaceRange(f + g, n(i, 0));
                }
              });
            } else (l.blockCommentStart || d.blockCommentStart) && (l.fullLines = !0, u.blockComment(e, i, l));
          }
        }), e.defineExtension("blockComment", function (e, o, l) {
          l || (l = t);
          var s = this,
              c = a(s, e),
              u = l.blockCommentStart || c.blockCommentStart,
              d = l.blockCommentEnd || c.blockCommentEnd;

          if (u && d) {
            if (!/\bcomment\b/.test(s.getTokenTypeAt(n(e.line, 0)))) {
              var h = Math.min(o.line, s.lastLine());
              h != e.line && 0 == o.ch && r.test(s.getLine(h)) && --h;
              var f = null == l.padding ? " " : l.padding;
              e.line > h || s.operation(function () {
                if (0 != l.fullLines) {
                  var t = r.test(s.getLine(h));
                  s.replaceRange(f + d, n(h)), s.replaceRange(u + f, n(e.line, 0));
                  var a = l.blockCommentLead || c.blockCommentLead;
                  if (null != a) for (var p = e.line + 1; p <= h; ++p) {
                    (p != h || t) && s.replaceRange(a + f, n(p, 0));
                  }
                } else {
                  var g = 0 == i(s.getCursor("to"), o),
                      m = !s.somethingSelected();
                  s.replaceRange(d, o), g && s.setSelection(m ? o : s.getCursor("from"), o), s.replaceRange(u, e);
                }
              });
            }
          } else (l.lineComment || c.lineComment) && 0 != l.fullLines && s.lineComment(e, o, l);
        }), e.defineExtension("uncomment", function (e, i, o) {
          o || (o = t);
          var l,
              s = this,
              c = a(s, e),
              u = Math.min(0 != i.ch || i.line == e.line ? i.line : i.line - 1, s.lastLine()),
              d = Math.min(e.line, u),
              h = o.lineComment || c.lineComment,
              f = [],
              p = null == o.padding ? " " : o.padding;

          e: if (h) {
            for (var g = d; g <= u; ++g) {
              var m = s.getLine(g),
                  v = m.indexOf(h);
              if (v > -1 && !/comment/.test(s.getTokenTypeAt(n(g, v + 1))) && (v = -1), -1 == v && r.test(m)) break e;
              if (v > -1 && r.test(m.slice(0, v))) break e;
              f.push(m);
            }

            if (s.operation(function () {
              for (var e = d; e <= u; ++e) {
                var t = f[e - d],
                    r = t.indexOf(h),
                    i = r + h.length;
                r < 0 || (t.slice(i, i + p.length) == p && (i += p.length), l = !0, s.replaceRange("", n(e, r), n(e, i)));
              }
            }), l) return !0;
          }

          var y = o.blockCommentStart || c.blockCommentStart,
              b = o.blockCommentEnd || c.blockCommentEnd;
          if (!y || !b) return !1;
          var x = o.blockCommentLead || c.blockCommentLead,
              w = s.getLine(d),
              C = w.indexOf(y);
          if (-1 == C) return !1;
          var k = u == d ? w : s.getLine(u),
              S = k.indexOf(b, u == d ? C + y.length : 0),
              M = n(d, C + 1),
              L = n(u, S + 1);
          if (-1 == S || !/comment/.test(s.getTokenTypeAt(M)) || !/comment/.test(s.getTokenTypeAt(L)) || s.getRange(M, L, "\n").indexOf(b) > -1) return !1;

          var T = w.lastIndexOf(y, e.ch),
              _ = -1 == T ? -1 : w.slice(0, e.ch).indexOf(b, T + y.length);

          if (-1 != T && -1 != _ && _ + b.length != e.ch) return !1;
          _ = k.indexOf(b, i.ch);
          var O = k.slice(i.ch).lastIndexOf(y, _ - i.ch);
          return T = -1 == _ || -1 == O ? -1 : i.ch + O, (-1 == _ || -1 == T || T == i.ch) && (s.operation(function () {
            s.replaceRange("", n(u, S - (p && k.slice(S - p.length, S) == p ? p.length : 0)), n(u, S + b.length));
            var e = C + y.length;
            if (p && w.slice(e, e + p.length) == p && (e += p.length), s.replaceRange("", n(d, C), n(d, e)), x) for (var t = d + 1; t <= u; ++t) {
              var i = s.getLine(t),
                  o = i.indexOf(x);

              if (-1 != o && !r.test(i.slice(0, o))) {
                var a = o + x.length;
                p && i.slice(a, a + p.length) == p && (a += p.length), s.replaceRange("", n(t, o), n(t, a));
              }
            }
          }), !0);
        });
      }(r(4631));
    },
    790: function _(e, t, r) {
      !function (e) {
        "use strict";

        function t(e, t) {
          if (!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode");
        }

        function r(e, t) {
          if (!e) return /(?:)/;
          var r = "";
          return e instanceof RegExp ? (e.ignoreCase && (r = "i"), e.unicode && (r += "u"), e = e.source) : e = String(e), new RegExp((!1 === t ? "" : "^") + "(?:" + e + ")", r);
        }

        function n(e, n) {
          (e.next || e.push) && t(n, e.next || e.push), this.regex = r(e.regex), this.token = function (e) {
            if (!e) return null;
            if (e.apply) return e;
            if ("string" == typeof e) return e.replace(/\./g, " ");

            for (var t = [], r = 0; r < e.length; r++) {
              t.push(e[r] && e[r].replace(/\./g, " "));
            }

            return t;
          }(e.token), this.data = e;
        }

        function i(e, t) {
          return function (r, n) {
            if (n.pending) {
              var i = n.pending.shift();
              return 0 == n.pending.length && (n.pending = null), r.pos += i.text.length, i.token;
            }

            if (n.local) {
              if (n.local.end && r.match(n.local.end)) {
                var o = n.local.endToken || null;
                return n.local = n.localState = null, o;
              }

              var l;
              return o = n.local.mode.token(r, n.localState), n.local.endScan && (l = n.local.endScan.exec(r.current())) && (r.pos = r.start + l.index), o;
            }

            for (var s = e[n.state], c = 0; c < s.length; c++) {
              var u = s[c],
                  d = (!u.data.sol || r.sol()) && r.match(u.regex);

              if (d) {
                u.data.next ? n.state = u.data.next : u.data.push ? ((n.stack || (n.stack = [])).push(n.state), n.state = u.data.push) : u.data.pop && n.stack && n.stack.length && (n.state = n.stack.pop()), u.data.mode && a(t, n, u.data.mode, u.token), u.data.indent && n.indent.push(r.indentation() + t.indentUnit), u.data.dedent && n.indent.pop();
                var h = u.token;

                if (h && h.apply && (h = h(d)), d.length > 2 && u.token && "string" != typeof u.token) {
                  for (var f = 2; f < d.length; f++) {
                    d[f] && (n.pending || (n.pending = [])).push({
                      text: d[f],
                      token: u.token[f - 1]
                    });
                  }

                  return r.backUp(d[0].length - (d[1] ? d[1].length : 0)), h[0];
                }

                return h && h.join ? h[0] : h;
              }
            }

            return r.next(), null;
          };
        }

        function o(e, t) {
          if (e === t) return !0;
          if (!e || "object" != _typeof(e) || !t || "object" != _typeof(t)) return !1;
          var r = 0;

          for (var n in e) {
            if (e.hasOwnProperty(n)) {
              if (!t.hasOwnProperty(n) || !o(e[n], t[n])) return !1;
              r++;
            }
          }

          for (var n in t) {
            t.hasOwnProperty(n) && r--;
          }

          return 0 == r;
        }

        function a(t, n, i, a) {
          var l;
          if (i.persistent) for (var s = n.persistentStates; s && !l; s = s.next) {
            (i.spec ? o(i.spec, s.spec) : i.mode == s.mode) && (l = s);
          }
          var c = l ? l.mode : i.mode || e.getMode(t, i.spec),
              u = l ? l.state : e.startState(c);
          i.persistent && !l && (n.persistentStates = {
            mode: c,
            spec: i.spec,
            state: u,
            next: n.persistentStates
          }), n.localState = u, n.local = {
            mode: c,
            end: i.end && r(i.end),
            endScan: i.end && !1 !== i.forceEnd && r(i.end, !1),
            endToken: a && a.join ? a[a.length - 1] : a
          };
        }

        function l(t, r) {
          return function (n, i, o) {
            if (n.local && n.local.mode.indent) return n.local.mode.indent(n.localState, i, o);
            if (null == n.indent || n.local || r.dontIndentStates && function (e, t) {
              for (var r = 0; r < t.length; r++) {
                if (t[r] === e) return !0;
              }
            }(n.state, r.dontIndentStates) > -1) return e.Pass;
            var a = n.indent.length - 1,
                l = t[n.state];

            e: for (;;) {
              for (var s = 0; s < l.length; s++) {
                var c = l[s];

                if (c.data.dedent && !1 !== c.data.dedentIfLineStart) {
                  var u = c.regex.exec(i);

                  if (u && u[0]) {
                    a--, (c.next || c.push) && (l = t[c.next || c.push]), i = i.slice(u[0].length);
                    continue e;
                  }
                }
              }

              break;
            }

            return a < 0 ? 0 : n.indent[a];
          };
        }

        e.defineSimpleMode = function (t, r) {
          e.defineMode(t, function (t) {
            return e.simpleMode(t, r);
          });
        }, e.simpleMode = function (r, o) {
          t(o, "start");
          var a = {},
              s = o.meta || {},
              c = !1;

          for (var u in o) {
            if (u != s && o.hasOwnProperty(u)) for (var d = a[u] = [], h = o[u], f = 0; f < h.length; f++) {
              var p = h[f];
              d.push(new n(p, o)), (p.indent || p.dedent) && (c = !0);
            }
          }

          var g = {
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
              var r = {
                state: t.state,
                pending: t.pending,
                local: t.local,
                localState: null,
                indent: t.indent && t.indent.slice(0)
              };
              t.localState && (r.localState = e.copyState(t.local.mode, t.localState)), t.stack && (r.stack = t.stack.slice(0));

              for (var n = t.persistentStates; n; n = n.next) {
                r.persistentStates = {
                  mode: n.mode,
                  spec: n.spec,
                  state: n.state == t.localState ? r.localState : e.copyState(n.mode, n.state),
                  next: r.persistentStates
                };
              }

              return r;
            },
            token: i(a, r),
            innerMode: function innerMode(e) {
              return e.local && {
                mode: e.local.mode,
                state: e.localState
              };
            },
            indent: l(a, s)
          };
          if (s) for (var m in s) {
            s.hasOwnProperty(m) && (g[m] = s[m]);
          }
          return g;
        };
      }(r(4631));
    },
    4631: function _(e) {
      e.exports = function () {
        "use strict";

        var e = navigator.userAgent,
            t = navigator.platform,
            r = /gecko\/\d/i.test(e),
            n = /MSIE \d/.test(e),
            i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
            o = /Edge\/(\d+)/.exec(e),
            a = n || i || o,
            l = a && (n ? document.documentMode || 6 : +(o || i)[1]),
            s = !o && /WebKit\//.test(e),
            c = s && /Qt\/\d+\.\d+/.test(e),
            u = !o && /Chrome\//.test(e),
            d = /Opera\//.test(e),
            h = /Apple Computer/.test(navigator.vendor),
            f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
            p = /PhantomJS/.test(e),
            g = h && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
            m = /Android/.test(e),
            v = g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
            y = g || /Mac/.test(t),
            b = /\bCrOS\b/.test(e),
            x = /win/i.test(t),
            w = d && e.match(/Version\/(\d*\.\d*)/);
        w && (w = Number(w[1])), w && w >= 15 && (d = !1, s = !0);
        var C = y && (c || d && (null == w || w < 12.11)),
            k = r || a && l >= 9;

        function S(e) {
          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
        }

        var M,
            L = function L(e, t) {
          var r = e.className,
              n = S(t).exec(r);

          if (n) {
            var i = r.slice(n.index + n[0].length);
            e.className = r.slice(0, n.index) + (i ? n[1] + i : "");
          }
        };

        function T(e) {
          for (var t = e.childNodes.length; t > 0; --t) {
            e.removeChild(e.firstChild);
          }

          return e;
        }

        function _(e, t) {
          return T(e).appendChild(t);
        }

        function O(e, t, r, n) {
          var i = document.createElement(e);
          if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
            i.appendChild(t[o]);
          }
          return i;
        }

        function A(e, t, r, n) {
          var i = O(e, t, r, n);
          return i.setAttribute("role", "presentation"), i;
        }

        function N(e, t) {
          if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);

          do {
            if (11 == t.nodeType && (t = t.host), t == e) return !0;
          } while (t = t.parentNode);
        }

        function D() {
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

        function E(e, t) {
          var r = e.className;
          S(t).test(r) || (e.className += (r ? " " : "") + t);
        }

        function W(e, t) {
          for (var r = e.split(" "), n = 0; n < r.length; n++) {
            r[n] && !S(r[n]).test(t) && (t += " " + r[n]);
          }

          return t;
        }

        M = document.createRange ? function (e, t, r, n) {
          var i = document.createRange();
          return i.setEnd(n || e, r), i.setStart(e, t), i;
        } : function (e, t, r) {
          var n = document.body.createTextRange();

          try {
            n.moveToElementText(e.parentNode);
          } catch (e) {
            return n;
          }

          return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n;
        };

        var P = function P(e) {
          e.select();
        };

        function I(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function () {
            return e.apply(null, t);
          };
        }

        function F(e, t, r) {
          for (var n in t || (t = {}), e) {
            !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
          }

          return t;
        }

        function j(e, t, r, n, i) {
          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);

          for (var o = n || 0, a = i || 0;;) {
            var l = e.indexOf("\t", o);
            if (l < 0 || l >= t) return a + (t - o);
            a += l - o, a += r - a % r, o = l + 1;
          }
        }

        g ? P = function P(e) {
          e.selectionStart = 0, e.selectionEnd = e.value.length;
        } : a && (P = function P(e) {
          try {
            e.select();
          } catch (e) {}
        });

        var z = function z() {
          this.id = null, this.f = null, this.time = 0, this.handler = I(this.onTimeout, this);
        };

        function H(e, t) {
          for (var r = 0; r < e.length; ++r) {
            if (e[r] == t) return r;
          }

          return -1;
        }

        z.prototype.onTimeout = function (e) {
          e.id = 0, e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }, z.prototype.set = function (e, t) {
          this.f = t;
          var r = +new Date() + e;
          (!this.id || r < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = r);
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

        function G(e, t, r) {
          for (var n = 0, i = 0;;) {
            var o = e.indexOf("\t", n);
            -1 == o && (o = e.length);
            var a = o - n;
            if (o == e.length || i + a >= t) return n + Math.min(a, t - i);
            if (i += o - n, n = o + 1, (i += r - i % r) >= t) return n;
          }
        }

        var K = [""];

        function $(e) {
          for (; K.length <= e;) {
            K.push(X(K) + " ");
          }

          return K[e];
        }

        function X(e) {
          return e[e.length - 1];
        }

        function Y(e, t) {
          for (var r = [], n = 0; n < e.length; n++) {
            r[n] = t(e[n], n);
          }

          return r;
        }

        function q() {}

        function Z(e, t) {
          var r;
          return Object.create ? r = Object.create(e) : (q.prototype = e, r = new q()), t && F(t, r), r;
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

        var re = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

        function ne(e) {
          return e.charCodeAt(0) >= 768 && re.test(e);
        }

        function ie(e, t, r) {
          for (; (r < 0 ? t > 0 : t < e.length) && ne(e.charAt(t));) {
            t += r;
          }

          return t;
        }

        function oe(e, t, r) {
          for (var n = t > r ? -1 : 1;;) {
            if (t == r) return t;
            var i = (t + r) / 2,
                o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : r;
            e(o) ? r = o : t = o + n;
          }
        }

        var ae = null;

        function le(e, t, r) {
          var n;
          ae = null;

          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && "before" == r ? n = i : ae = i), o.from == t && (o.from != o.to && "before" != r ? n = i : ae = i);
          }

          return null != n ? n : ae;
        }

        var se = function () {
          var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
              t = /[stwN]/,
              r = /[LRr]/,
              n = /[Lb1n]/,
              i = /[1n]/;

          function o(e, t, r) {
            this.level = e, this.from = t, this.to = r;
          }

          return function (a, l) {
            var s,
                c = "ltr" == l ? "L" : "R";
            if (0 == a.length || "ltr" == l && !e.test(a)) return !1;

            for (var u = a.length, d = [], h = 0; h < u; ++h) {
              d.push((s = a.charCodeAt(h)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(s) : 1424 <= s && s <= 1524 ? "R" : 1536 <= s && s <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(s - 1536) : 1774 <= s && s <= 2220 ? "r" : 8192 <= s && s <= 8203 ? "w" : 8204 == s ? "b" : "L");
            }

            for (var f = 0, p = c; f < u; ++f) {
              var g = d[f];
              "m" == g ? d[f] = p : p = g;
            }

            for (var m = 0, v = c; m < u; ++m) {
              var y = d[m];
              "1" == y && "r" == v ? d[m] = "n" : r.test(y) && (v = y, "r" == y && (d[m] = "R"));
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

                for (var M = C && "!" == d[C - 1] || S < u && "1" == d[S] ? "1" : "N", L = C; L < S; ++L) {
                  d[L] = M;
                }

                C = S - 1;
              }
            }

            for (var T = 0, _ = c; T < u; ++T) {
              var O = d[T];
              "L" == _ && "1" == O ? d[T] = "L" : r.test(O) && (_ = O);
            }

            for (var A = 0; A < u; ++A) {
              if (t.test(d[A])) {
                var N = void 0;

                for (N = A + 1; N < u && t.test(d[N]); ++N) {
                  ;
                }

                for (var D = "L" == (A ? d[A - 1] : c), E = D == ("L" == (N < u ? d[N] : c)) ? D ? "L" : "R" : c, W = A; W < N; ++W) {
                  d[W] = E;
                }

                A = N - 1;
              }
            }

            for (var P, I = [], F = 0; F < u;) {
              if (n.test(d[F])) {
                var j = F;

                for (++F; F < u && n.test(d[F]); ++F) {
                  ;
                }

                I.push(new o(0, j, F));
              } else {
                var z = F,
                    H = I.length,
                    R = "rtl" == l ? 1 : 0;

                for (++F; F < u && "L" != d[F]; ++F) {
                  ;
                }

                for (var B = z; B < F;) {
                  if (i.test(d[B])) {
                    z < B && (I.splice(H, 0, new o(1, z, B)), H += R);
                    var V = B;

                    for (++B; B < F && i.test(d[B]); ++B) {
                      ;
                    }

                    I.splice(H, 0, new o(2, V, B)), H += R, z = B;
                  } else ++B;
                }

                z < F && I.splice(H, 0, new o(1, z, F));
              }
            }

            return "ltr" == l && (1 == I[0].level && (P = a.match(/^\s+/)) && (I[0].from = P[0].length, I.unshift(new o(0, 0, P[0].length))), 1 == X(I).level && (P = a.match(/\s+$/)) && (X(I).to -= P[0].length, I.push(new o(0, u - P[0].length, u)))), "rtl" == l ? I.reverse() : I;
          };
        }();

        function ce(e, t) {
          var r = e.order;
          return null == r && (r = e.order = se(e.text, t)), r;
        }

        var ue = [],
            de = function de(e, t, r) {
          if (e.addEventListener) e.addEventListener(t, r, !1);else if (e.attachEvent) e.attachEvent("on" + t, r);else {
            var n = e._handlers || (e._handlers = {});
            n[t] = (n[t] || ue).concat(r);
          }
        };

        function he(e, t) {
          return e._handlers && e._handlers[t] || ue;
        }

        function fe(e, t, r) {
          if (e.removeEventListener) e.removeEventListener(t, r, !1);else if (e.detachEvent) e.detachEvent("on" + t, r);else {
            var n = e._handlers,
                i = n && n[t];

            if (i) {
              var o = H(i, r);
              o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }

        function pe(e, t) {
          var r = he(e, t);
          if (r.length) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) {
            r[i].apply(null, n);
          }
        }

        function ge(e, t, r) {
          return "string" == typeof t && (t = {
            type: t,
            preventDefault: function preventDefault() {
              this.defaultPrevented = !0;
            }
          }), pe(e, r || t.type, e, t), we(t) || t.codemirrorIgnore;
        }

        function me(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) {
            -1 == H(r, t[n]) && r.push(t[n]);
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

        var Me,
            Le,
            Te = function () {
          if (a && l < 9) return !1;
          var e = O("div");
          return "draggable" in e || "dragDrop" in e;
        }();

        function _e(e) {
          if (null == Me) {
            var t = O("span", "​");
            _(e, O("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Me = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(a && l < 8));
          }

          var r = Me ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
          return r.setAttribute("cm-text", ""), r;
        }

        function Oe(e) {
          if (null != Le) return Le;

          var t = _(e, document.createTextNode("AخA")),
              r = M(t, 0, 1).getBoundingClientRect(),
              n = M(t, 1, 2).getBoundingClientRect();

          return T(e), !(!r || r.left == r.right) && (Le = n.right - r.right < 3);
        }

        var Ae,
            Ne = 3 != "\n\nb".split(/\n/).length ? function (e) {
          for (var t = 0, r = [], n = e.length; t <= n;) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                a = o.indexOf("\r");
            -1 != a ? (r.push(o.slice(0, a)), t += a + 1) : (r.push(o), t = i + 1);
          }

          return r;
        } : function (e) {
          return e.split(/\r\n?|\n/);
        },
            De = window.getSelection ? function (e) {
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
            Ee = "oncopy" in (Ae = O("div")) || (Ae.setAttribute("oncopy", "return;"), "function" == typeof Ae.oncopy),
            We = null;
        var Pe = {},
            Ie = {};

        function Fe(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Pe[e] = t;
        }

        function je(e) {
          if ("string" == typeof e && Ie.hasOwnProperty(e)) e = Ie[e];else if (e && "string" == typeof e.name && Ie.hasOwnProperty(e.name)) {
            var t = Ie[e.name];
            "string" == typeof t && (t = {
              name: t
            }), (e = Z(t, e)).name = t.name;
          } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return je("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return je("application/json");
          }
          return "string" == typeof e ? {
            name: e
          } : e || {
            name: "null"
          };
        }

        function ze(e, t) {
          t = je(t);
          var r = Pe[t.name];
          if (!r) return ze(e, "text/plain");
          var n = r(e, t);

          if (He.hasOwnProperty(t.name)) {
            var i = He[t.name];

            for (var o in i) {
              i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o]);
            }
          }

          if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) {
            n[a] = t.modeProps[a];
          }
          return n;
        }

        var He = {};

        function Re(e, t) {
          F(t, He.hasOwnProperty(e) ? He[e] : He[e] = {});
        }

        function Be(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var r = {};

          for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), r[n] = i;
          }

          return r;
        }

        function Ve(e, t) {
          for (var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;) {
            t = r.state, e = r.mode;
          }

          return r || {
            mode: e,
            state: t
          };
        }

        function Ue(e, t, r) {
          return !e.startState || e.startState(t, r);
        }

        var Ge = function Ge(e, t, r) {
          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r;
        };

        function Ke(e, t) {
          if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");

          for (var r = e; !r.lines;) {
            for (var n = 0;; ++n) {
              var i = r.children[n],
                  o = i.chunkSize();

              if (t < o) {
                r = i;
                break;
              }

              t -= o;
            }
          }

          return r.lines[t];
        }

        function $e(e, t, r) {
          var n = [],
              i = t.line;
          return e.iter(t.line, r.line + 1, function (e) {
            var o = e.text;
            i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i;
          }), n;
        }

        function Xe(e, t, r) {
          var n = [];
          return e.iter(t, r, function (e) {
            n.push(e.text);
          }), n;
        }

        function Ye(e, t) {
          var r = t - e.height;
          if (r) for (var n = e; n; n = n.parent) {
            n.height += r;
          }
        }

        function qe(e) {
          if (null == e.parent) return null;

          for (var t = e.parent, r = H(t.lines, e), n = t.parent; n; t = n, n = n.parent) {
            for (var i = 0; n.children[i] != t; ++i) {
              r += n.children[i].chunkSize();
            }
          }

          return r + t.first;
        }

        function Ze(e, t) {
          var r = e.first;

          e: do {
            for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n],
                  o = i.height;

              if (t < o) {
                e = i;
                continue e;
              }

              t -= o, r += i.chunkSize();
            }

            return r;
          } while (!e.lines);

          for (var a = 0; a < e.lines.length; ++a) {
            var l = e.lines[a].height;
            if (t < l) break;
            t -= l;
          }

          return r + a;
        }

        function Je(e, t) {
          return t >= e.first && t < e.first + e.size;
        }

        function Qe(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }

        function et(e, t, r) {
          if (void 0 === r && (r = null), !(this instanceof et)) return new et(e, t, r);
          this.line = e, this.ch = t, this.sticky = r;
        }

        function tt(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }

        function rt(e, t) {
          return e.sticky == t.sticky && 0 == tt(e, t);
        }

        function nt(e) {
          return et(e.line, e.ch);
        }

        function it(e, t) {
          return tt(e, t) < 0 ? t : e;
        }

        function ot(e, t) {
          return tt(e, t) < 0 ? e : t;
        }

        function at(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }

        function lt(e, t) {
          if (t.line < e.first) return et(e.first, 0);
          var r = e.first + e.size - 1;
          return t.line > r ? et(r, Ke(e, r).text.length) : function (e, t) {
            var r = e.ch;
            return null == r || r > t ? et(e.line, t) : r < 0 ? et(e.line, 0) : e;
          }(t, Ke(e, t.line).text.length);
        }

        function st(e, t) {
          for (var r = [], n = 0; n < t.length; n++) {
            r[n] = lt(e, t[n]);
          }

          return r;
        }

        Ge.prototype.eol = function () {
          return this.pos >= this.string.length;
        }, Ge.prototype.sol = function () {
          return this.pos == this.lineStart;
        }, Ge.prototype.peek = function () {
          return this.string.charAt(this.pos) || void 0;
        }, Ge.prototype.next = function () {
          if (this.pos < this.string.length) return this.string.charAt(this.pos++);
        }, Ge.prototype.eat = function (e) {
          var t = this.string.charAt(this.pos);
          if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
        }, Ge.prototype.eatWhile = function (e) {
          for (var t = this.pos; this.eat(e);) {
            ;
          }

          return this.pos > t;
        }, Ge.prototype.eatSpace = function () {
          for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
            ++this.pos;
          }

          return this.pos > e;
        }, Ge.prototype.skipToEnd = function () {
          this.pos = this.string.length;
        }, Ge.prototype.skipTo = function (e) {
          var t = this.string.indexOf(e, this.pos);
          if (t > -1) return this.pos = t, !0;
        }, Ge.prototype.backUp = function (e) {
          this.pos -= e;
        }, Ge.prototype.column = function () {
          return this.lastColumnPos < this.start && (this.lastColumnValue = j(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? j(this.string, this.lineStart, this.tabSize) : 0);
        }, Ge.prototype.indentation = function () {
          return j(this.string, null, this.tabSize) - (this.lineStart ? j(this.string, this.lineStart, this.tabSize) : 0);
        }, Ge.prototype.match = function (e, t, r) {
          if ("string" != typeof e) {
            var n = this.string.slice(this.pos).match(e);
            return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n);
          }

          var i = function i(e) {
            return r ? e.toLowerCase() : e;
          };

          if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
        }, Ge.prototype.current = function () {
          return this.string.slice(this.start, this.pos);
        }, Ge.prototype.hideFirstChars = function (e, t) {
          this.lineStart += e;

          try {
            return t();
          } finally {
            this.lineStart -= e;
          }
        }, Ge.prototype.lookAhead = function (e) {
          var t = this.lineOracle;
          return t && t.lookAhead(e);
        }, Ge.prototype.baseToken = function () {
          var e = this.lineOracle;
          return e && e.baseToken(this.pos);
        };

        var ct = function ct(e, t) {
          this.state = e, this.lookAhead = t;
        },
            ut = function ut(e, t, r, n) {
          this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1;
        };

        function dt(e, t, r, n) {
          var i = [e.state.modeGen],
              o = {};
          xt(e, t.text, e.doc.mode, r, function (e, t) {
            return i.push(e, t);
          }, o, n);

          for (var a = r.state, l = function l(n) {
            r.baseTokens = i;
            var l = e.state.overlays[n],
                s = 1,
                c = 0;
            r.state = !0, xt(e, t.text, l.mode, r, function (e, t) {
              for (var r = s; c < e;) {
                var n = i[s];
                n > e && i.splice(s, 1, e, i[s + 1], n), s += 2, c = Math.min(e, n);
              }

              if (t) if (l.opaque) i.splice(r, s - r, e, "overlay " + t), s = r + 2;else for (; r < s; r += 2) {
                var o = i[r + 1];
                i[r + 1] = (o ? o + " " : "") + "overlay " + t;
              }
            }, o), r.state = a, r.baseTokens = null, r.baseTokenPos = 1;
          }, s = 0; s < e.state.overlays.length; ++s) {
            l(s);
          }

          return {
            styles: i,
            classes: o.bgClass || o.textClass ? o : null
          };
        }

        function ht(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = ft(e, qe(t)),
                i = t.text.length > e.options.maxHighlightLength && Be(e.doc.mode, n.state),
                o = dt(e, t, n);
            i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }

          return t.styles;
        }

        function ft(e, t, r) {
          var n = e.doc,
              i = e.display;
          if (!n.mode.startState) return new ut(n, !0, t);

          var o = function (e, t, r) {
            for (var n, i, o = e.doc, a = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
              if (l <= o.first) return o.first;
              var s = Ke(o, l - 1),
                  c = s.stateAfter;
              if (c && (!r || l + (c instanceof ct ? c.lookAhead : 0) <= o.modeFrontier)) return l;
              var u = j(s.text, null, e.options.tabSize);
              (null == i || n > u) && (i = l - 1, n = u);
            }

            return i;
          }(e, t, r),
              a = o > n.first && Ke(n, o - 1).stateAfter,
              l = a ? ut.fromSaved(n, a, o) : new ut(n, Ue(n.mode), o);

          return n.iter(o, t, function (r) {
            pt(e, r.text, l);
            var n = l.line;
            r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? l.save() : null, l.nextLine();
          }), r && (n.modeFrontier = l.line), l;
        }

        function pt(e, t, r, n) {
          var i = e.doc.mode,
              o = new Ge(t, e.options.tabSize, r);

          for (o.start = o.pos = n || 0, "" == t && gt(i, r.state); !o.eol();) {
            mt(i, o, r.state), o.start = o.pos;
          }
        }

        function gt(e, t) {
          if (e.blankLine) return e.blankLine(t);

          if (e.innerMode) {
            var r = Ve(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
          }
        }

        function mt(e, t, r, n) {
          for (var i = 0; i < 10; i++) {
            n && (n[0] = Ve(e, r).mode);
            var o = e.token(t, r);
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
        }, ut.fromSaved = function (e, t, r) {
          return t instanceof ct ? new ut(e, Be(e.mode, t.state), r, t.lookAhead) : new ut(e, Be(e.mode, t), r);
        }, ut.prototype.save = function (e) {
          var t = !1 !== e ? Be(this.doc.mode, this.state) : this.state;
          return this.maxLookAhead > 0 ? new ct(t, this.maxLookAhead) : t;
        };

        var vt = function vt(e, t, r) {
          this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r;
        };

        function yt(e, t, r, n) {
          var i,
              o,
              a = e.doc,
              l = a.mode,
              s = Ke(a, (t = lt(a, t)).line),
              c = ft(e, t.line, r),
              u = new Ge(s.text, e.options.tabSize, c);

          for (n && (o = []); (n || u.pos < t.ch) && !u.eol();) {
            u.start = u.pos, i = mt(l, u, c.state), n && o.push(new vt(u, i, Be(a.mode, c.state)));
          }

          return n ? o : new vt(u, i, c.state);
        }

        function bt(e, t) {
          if (e) for (;;) {
            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!r) break;
            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
            var n = r[1] ? "bgClass" : "textClass";
            null == t[n] ? t[n] = r[2] : new RegExp("(?:^|\\s)" + r[2] + "(?:$|\\s)").test(t[n]) || (t[n] += " " + r[2]);
          }
          return e;
        }

        function xt(e, t, r, n, i, o, a) {
          var l = r.flattenSpans;
          null == l && (l = e.options.flattenSpans);
          var s,
              c = 0,
              u = null,
              d = new Ge(t, e.options.tabSize, n),
              h = e.options.addModeClass && [null];

          for ("" == t && bt(gt(r, n.state), o); !d.eol();) {
            if (d.pos > e.options.maxHighlightLength ? (l = !1, a && pt(e, t, n, d.pos), d.pos = t.length, s = null) : s = bt(mt(r, d, n.state, h), o), h) {
              var f = h[0].name;
              f && (s = "m-" + (s ? f + " " + s : f));
            }

            if (!l || u != s) {
              for (; c < d.start;) {
                i(c = Math.min(d.start, c + 5e3), u);
              }

              u = s;
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

        function kt(e, t, r) {
          this.marker = e, this.from = t, this.to = r;
        }

        function St(e, t) {
          if (e) for (var r = 0; r < e.length; ++r) {
            var n = e[r];
            if (n.marker == t) return n;
          }
        }

        function Mt(e, t) {
          for (var r, n = 0; n < e.length; ++n) {
            e[n] != t && (r || (r = [])).push(e[n]);
          }

          return r;
        }

        function Lt(e, t) {
          if (t.full) return null;
          var r = Je(e, t.from.line) && Ke(e, t.from.line).markedSpans,
              n = Je(e, t.to.line) && Ke(e, t.to.line).markedSpans;
          if (!r && !n) return null;

          var i = t.from.ch,
              o = t.to.ch,
              a = 0 == tt(t.from, t.to),
              l = function (e, t, r) {
            var n;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  a = o.marker;

              if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!r || !o.marker.insertLeft)) {
                var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);
                (n || (n = [])).push(new kt(a, o.from, l ? null : o.to));
              }
            }
            return n;
          }(r, i, a),
              s = function (e, t, r) {
            var n;
            if (e) for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                  a = o.marker;

              if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!r || o.marker.insertLeft)) {
                var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);
                (n || (n = [])).push(new kt(a, l ? null : o.from - t, null == o.to ? null : o.to - t));
              }
            }
            return n;
          }(n, o, a),
              c = 1 == t.text.length,
              u = X(t.text).length + (c ? i : 0);

          if (l) for (var d = 0; d < l.length; ++d) {
            var h = l[d];

            if (null == h.to) {
              var f = St(s, h.marker);
              f ? c && (h.to = null == f.to ? null : f.to + u) : h.to = i;
            }
          }
          if (s) for (var p = 0; p < s.length; ++p) {
            var g = s[p];
            null != g.to && (g.to += u), null == g.from ? St(l, g.marker) || (g.from = u, c && (l || (l = [])).push(g)) : (g.from += u, c && (l || (l = [])).push(g));
          }
          l && (l = Tt(l)), s && s != l && (s = Tt(s));
          var m = [l];

          if (!c) {
            var v,
                y = t.text.length - 2;
            if (y > 0 && l) for (var b = 0; b < l.length; ++b) {
              null == l[b].to && (v || (v = [])).push(new kt(l[b].marker, null, null));
            }

            for (var x = 0; x < y; ++x) {
              m.push(v);
            }

            m.push(s);
          }

          return m;
        }

        function Tt(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1);
          }

          return e.length ? e : null;
        }

        function _t(e) {
          var t = e.markedSpans;

          if (t) {
            for (var r = 0; r < t.length; ++r) {
              t[r].marker.detachLine(e);
            }

            e.markedSpans = null;
          }
        }

        function Ot(e, t) {
          if (t) {
            for (var r = 0; r < t.length; ++r) {
              t[r].marker.attachLine(e);
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

        function Dt(e, t) {
          var r = e.lines.length - t.lines.length;
          if (0 != r) return r;
          var n = e.find(),
              i = t.find(),
              o = tt(n.from, i.from) || At(e) - At(t);
          return o ? -o : tt(n.to, i.to) || Nt(e) - Nt(t) || t.id - e.id;
        }

        function Et(e, t) {
          var r,
              n = Ct && e.markedSpans;
          if (n) for (var i = void 0, o = 0; o < n.length; ++o) {
            (i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Dt(r, i.marker) < 0) && (r = i.marker);
          }
          return r;
        }

        function Wt(e) {
          return Et(e, !0);
        }

        function Pt(e) {
          return Et(e, !1);
        }

        function It(e, t) {
          var r,
              n = Ct && e.markedSpans;
          if (n) for (var i = 0; i < n.length; ++i) {
            var o = n[i];
            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Dt(r, o.marker) < 0) && (r = o.marker);
          }
          return r;
        }

        function Ft(e, t, r, n, i) {
          var o = Ke(e, t),
              a = Ct && o.markedSpans;
          if (a) for (var l = 0; l < a.length; ++l) {
            var s = a[l];

            if (s.marker.collapsed) {
              var c = s.marker.find(0),
                  u = tt(c.from, r) || At(s.marker) - At(i),
                  d = tt(c.to, n) || Nt(s.marker) - Nt(i);
              if (!(u >= 0 && d <= 0 || u <= 0 && d >= 0) && (u <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? tt(c.to, r) >= 0 : tt(c.to, r) > 0) || u >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? tt(c.from, n) <= 0 : tt(c.from, n) < 0))) return !0;
            }
          }
        }

        function jt(e) {
          for (var t; t = Wt(e);) {
            e = t.find(-1, !0).line;
          }

          return e;
        }

        function zt(e, t) {
          var r = Ke(e, t),
              n = jt(r);
          return r == n ? t : qe(n);
        }

        function Ht(e, t) {
          if (t > e.lastLine()) return t;
          var r,
              n = Ke(e, t);
          if (!Rt(e, n)) return t;

          for (; r = Pt(n);) {
            n = r.find(1, !0).line;
          }

          return qe(n) + 1;
        }

        function Rt(e, t) {
          var r = Ct && t.markedSpans;
          if (r) for (var n = void 0, i = 0; i < r.length; ++i) {
            if ((n = r[i]).marker.collapsed) {
              if (null == n.from) return !0;
              if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && Bt(e, t, n)) return !0;
            }
          }
        }

        function Bt(e, t, r) {
          if (null == r.to) {
            var n = r.marker.find(1, !0);
            return Bt(e, n.line, St(n.line.markedSpans, r.marker));
          }

          if (r.marker.inclusiveRight && r.to == t.text.length) return !0;

          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
            if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && Bt(e, t, i)) return !0;
          }
        }

        function Vt(e) {
          for (var t = 0, r = (e = jt(e)).parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e) break;
            t += i.height;
          }

          for (var o = r.parent; o; o = (r = o).parent) {
            for (var a = 0; a < o.children.length; ++a) {
              var l = o.children[a];
              if (l == r) break;
              t += l.height;
            }
          }

          return t;
        }

        function Ut(e) {
          if (0 == e.height) return 0;

          for (var t, r = e.text.length, n = e; t = Wt(n);) {
            var i = t.find(0, !0);
            n = i.from.line, r += i.from.ch - i.to.ch;
          }

          for (n = e; t = Pt(n);) {
            var o = t.find(0, !0);
            r -= n.text.length - o.from.ch, r += (n = o.to.line).text.length - o.to.ch;
          }

          return r;
        }

        function Gt(e) {
          var t = e.display,
              r = e.doc;
          t.maxLine = Ke(r, r.first), t.maxLineLength = Ut(t.maxLine), t.maxLineChanged = !0, r.iter(function (e) {
            var r = Ut(e);
            r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e);
          });
        }

        var Kt = function Kt(e, t, r) {
          this.text = e, Ot(this, t), this.height = r ? r(this) : 1;
        };

        function $t(e) {
          e.parent = null, _t(e);
        }

        Kt.prototype.lineNo = function () {
          return qe(this);
        }, ye(Kt);
        var Xt = {},
            Yt = {};

        function qt(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var r = t.addModeClass ? Yt : Xt;
          return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
        }

        function Zt(e, t) {
          var r = A("span", null, null, s ? "padding-right: .1px" : null),
              n = {
            pre: A("pre", [r], "CodeMirror-line"),
            content: r,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: e.getOption("lineWrapping")
          };
          t.measure = {};

          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
                a = void 0;
            n.pos = 0, n.addToken = Qt, Oe(e.display.measure) && (a = ce(o, e.doc.direction)) && (n.addToken = er(n.addToken, a)), n.map = [], rr(o, n, ht(e, o, t != e.display.externalMeasured && qe(o))), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = W(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = W(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(_e(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}));
          }

          if (s) {
            var l = n.content.lastChild;
            (/\bcm-tab\b/.test(l.className) || l.querySelector && l.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack");
          }

          return pe(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = W(n.pre.className, n.textClass || "")), n;
        }

        function Jt(e) {
          var t = O("span", "•", "cm-invalidchar");
          return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
        }

        function Qt(e, t, r, n, i, o, s) {
          if (t) {
            var c,
                u = e.splitSpaces ? function (e, t) {
              if (e.length > 1 && !/  /.test(e)) return e;

              for (var r = t, n = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), n += o, r = " " == o;
              }

              return n;
            }(t, e.trailingSpace) : t,
                d = e.cm.state.specialChars,
                h = !1;

            if (d.test(t)) {
              c = document.createDocumentFragment();

              for (var f = 0;;) {
                d.lastIndex = f;
                var p = d.exec(t),
                    g = p ? p.index - f : t.length - f;

                if (g) {
                  var m = document.createTextNode(u.slice(f, f + g));
                  a && l < 9 ? c.appendChild(O("span", [m])) : c.appendChild(m), e.map.push(e.pos, e.pos + g, m), e.col += g, e.pos += g;
                }

                if (!p) break;
                f += g + 1;
                var v = void 0;

                if ("\t" == p[0]) {
                  var y = e.cm.options.tabSize,
                      b = y - e.col % y;
                  (v = c.appendChild(O("span", $(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b;
                } else "\r" == p[0] || "\n" == p[0] ? ((v = c.appendChild(O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), a && l < 9 ? c.appendChild(O("span", [v])) : c.appendChild(v), e.col += 1);

                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else e.col += t.length, c = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, c), a && l < 9 && (h = !0), e.pos += t.length;

            if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), r || n || i || h || o || s) {
              var x = r || "";
              n && (x += n), i && (x += i);
              var w = O("span", [c], x, o);
              if (s) for (var C in s) {
                s.hasOwnProperty(C) && "style" != C && "class" != C && w.setAttribute(C, s[C]);
              }
              return e.content.appendChild(w);
            }

            e.content.appendChild(c);
          }
        }

        function er(e, t) {
          return function (r, n, i, o, a, l, s) {
            i = i ? i + " cm-force-border" : "cm-force-border";

            for (var c = r.pos, u = c + n.length;;) {
              for (var d = void 0, h = 0; h < t.length && !((d = t[h]).to > c && d.from <= c); h++) {
                ;
              }

              if (d.to >= u) return e(r, n, i, o, a, l, s);
              e(r, n.slice(0, d.to - c), i, o, null, l, s), o = null, n = n.slice(d.to - c), c = d.to;
            }
          };
        }

        function tr(e, t, r, n) {
          var i = !n && r.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
        }

        function rr(e, t, r) {
          var n = e.markedSpans,
              i = e.text,
              o = 0;
          if (n) for (var a, l, s, c, u, d, h, f = i.length, p = 0, g = 1, m = "", v = 0;;) {
            if (v == p) {
              s = c = u = l = "", h = null, d = null, v = 1 / 0;

              for (var y = [], b = void 0, x = 0; x < n.length; ++x) {
                var w = n[x],
                    C = w.marker;
                if ("bookmark" == C.type && w.from == p && C.widgetNode) y.push(C);else if (w.from <= p && (null == w.to || w.to > p || C.collapsed && w.to == p && w.from == p)) {
                  if (null != w.to && w.to != p && v > w.to && (v = w.to, c = ""), C.className && (s += " " + C.className), C.css && (l = (l ? l + ";" : "") + C.css), C.startStyle && w.from == p && (u += " " + C.startStyle), C.endStyle && w.to == v && (b || (b = [])).push(C.endStyle, w.to), C.title && ((h || (h = {})).title = C.title), C.attributes) for (var k in C.attributes) {
                    (h || (h = {}))[k] = C.attributes[k];
                  }
                  C.collapsed && (!d || Dt(d.marker, C) < 0) && (d = w);
                } else w.from > p && v > w.from && (v = w.from);
              }

              if (b) for (var S = 0; S < b.length; S += 2) {
                b[S + 1] == v && (c += " " + b[S]);
              }
              if (!d || d.from == p) for (var M = 0; M < y.length; ++M) {
                tr(t, 0, y[M]);
              }

              if (d && (d.from || 0) == p) {
                if (tr(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from), null == d.to) return;
                d.to == p && (d = !1);
              }
            }

            if (p >= f) break;

            for (var L = Math.min(f, v);;) {
              if (m) {
                var T = p + m.length;

                if (!d) {
                  var _ = T > L ? m.slice(0, L - p) : m;

                  t.addToken(t, _, a ? a + s : s, u, p + _.length == v ? c : "", l, h);
                }

                if (T >= L) {
                  m = m.slice(L - p), p = L;
                  break;
                }

                p = T, u = "";
              }

              m = i.slice(o, o = r[g++]), a = qt(r[g++], t.cm.options);
            }
          } else for (var O = 1; O < r.length; O += 2) {
            t.addToken(t, i.slice(o, o = r[O]), qt(r[O + 1], t.cm.options));
          }
        }

        function nr(e, t, r) {
          this.line = t, this.rest = function (e) {
            for (var t, r; t = Pt(e);) {
              e = t.find(1, !0).line, (r || (r = [])).push(e);
            }

            return r;
          }(t), this.size = this.rest ? qe(X(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = Rt(e, t);
        }

        function ir(e, t, r) {
          for (var n, i = [], o = t; o < r; o = n) {
            var a = new nr(e.doc, Ke(e.doc, o), o);
            n = o + a.size, i.push(a);
          }

          return i;
        }

        var or = null;
        var ar = null;

        function lr(e, t) {
          var r = he(e, t);

          if (r.length) {
            var n,
                i = Array.prototype.slice.call(arguments, 2);
            or ? n = or.delayedCallbacks : ar ? n = ar : (n = ar = [], setTimeout(sr, 0));

            for (var o = function o(e) {
              n.push(function () {
                return r[e].apply(null, i);
              });
            }, a = 0; a < r.length; ++a) {
              o(a);
            }
          }
        }

        function sr() {
          var e = ar;
          ar = null;

          for (var t = 0; t < e.length; ++t) {
            e[t]();
          }
        }

        function cr(e, t, r, n) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? hr(e, t) : "gutter" == o ? pr(e, t, r, n) : "class" == o ? fr(e, t) : "widget" == o && gr(e, t, n);
          }

          t.changes = null;
        }

        function ur(e) {
          return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), a && l < 8 && (e.node.style.zIndex = 2)), e.node;
        }

        function dr(e, t) {
          var r = e.display.externalMeasured;
          return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : Zt(e, t);
        }

        function hr(e, t) {
          var r = t.text.className,
              n = dr(e, t);
          t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, fr(e, t)) : r && (t.text.className = r);
        }

        function fr(e, t) {
          (function (e, t) {
            var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null);else if (r) {
              var n = ur(t);
              t.background = n.insertBefore(O("div", null, r), n.firstChild), e.display.input.setUneditable(t.background);
            }
          })(e, t), t.line.wrapClass ? ur(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
          var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
          t.text.className = r || "";
        }

        function pr(e, t, r, n) {
          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
            var i = ur(t);
            t.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
          }

          var o = t.line.gutterMarkers;

          if (e.options.lineNumbers || o) {
            var a = ur(t),
                l = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
            if (l.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(l), a.insertBefore(l, t.text), t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(O("div", Qe(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o) for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
              var c = e.display.gutterSpecs[s].className,
                  u = o.hasOwnProperty(c) && o[c];
              u && l.appendChild(O("div", [u], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[c] + "px; width: " + n.gutterWidth[c] + "px"));
            }
          }
        }

        function gr(e, t, r) {
          t.alignable && (t.alignable = null);

          for (var n = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) {
            o = i.nextSibling, n.test(i.className) && t.node.removeChild(i);
          }

          vr(e, t, r);
        }

        function mr(e, t, r, n) {
          var i = dr(e, t);
          return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), fr(e, t), pr(e, t, r, n), vr(e, t, n), t.node;
        }

        function vr(e, t, r) {
          if (yr(e, t.line, t, r, !0), t.rest) for (var n = 0; n < t.rest.length; n++) {
            yr(e, t.rest[n], t, r, !1);
          }
        }

        function yr(e, t, r, n, i) {
          if (t.widgets) for (var o = ur(r), a = 0, l = t.widgets; a < l.length; ++a) {
            var s = l[a],
                c = O("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
            s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), br(s, c, r, n), e.display.input.setUneditable(c), i && s.above ? o.insertBefore(c, r.gutter || r.text) : o.appendChild(c), lr(s, "redraw");
          }
        }

        function br(e, t, r, n) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px";
          }

          e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
        }

        function xr(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;

          if (!N(document.body, e.node)) {
            var r = "position: relative;";
            e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), _(t.display.measure, O("div", [e.node], null, r));
          }

          return e.height = e.node.parentNode.offsetHeight;
        }

        function wr(e, t) {
          for (var r = ke(t); r != e.wrapper; r = r.parentNode) {
            if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0;
          }
        }

        function Cr(e) {
          return e.lineSpace.offsetTop;
        }

        function kr(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }

        function Sr(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;

          var t = _(e.measure, O("pre", "x", "CodeMirror-line-like")),
              r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
              n = {
            left: parseInt(r.paddingLeft),
            right: parseInt(r.paddingRight)
          };

          return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
        }

        function Mr(e) {
          return 50 - e.display.nativeBarWidth;
        }

        function Lr(e) {
          return e.display.scroller.clientWidth - Mr(e) - e.display.barWidth;
        }

        function Tr(e) {
          return e.display.scroller.clientHeight - Mr(e) - e.display.barHeight;
        }

        function _r(e, t, r) {
          if (e.line == t) return {
            map: e.measure.map,
            cache: e.measure.cache
          };

          for (var n = 0; n < e.rest.length; n++) {
            if (e.rest[n] == t) return {
              map: e.measure.maps[n],
              cache: e.measure.caches[n]
            };
          }

          for (var i = 0; i < e.rest.length; i++) {
            if (qe(e.rest[i]) > r) return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0
            };
          }
        }

        function Or(e, t, r, n) {
          return Dr(e, Nr(e, t), r, n);
        }

        function Ar(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[un(e, t)];
          var r = e.display.externalMeasured;
          return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
        }

        function Nr(e, t) {
          var r = qe(t),
              n = Ar(e, r);
          n && !n.text ? n = null : n && n.changes && (cr(e, n, r, on(e)), e.curOp.forceUpdate = !0), n || (n = function (e, t) {
            var r = qe(t = jt(t)),
                n = e.display.externalMeasured = new nr(e.doc, t, r);
            n.lineN = r;
            var i = n.built = Zt(e, n);
            return n.text = i.pre, _(e.display.lineMeasure, i.pre), n;
          }(e, t));

          var i = _r(n, t, r);

          return {
            line: t,
            view: n,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
          };
        }

        function Dr(e, t, r, n, i) {
          t.before && (r = -1);
          var o,
              s = r + (n || "");
          return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (function (e, t, r) {
            var n = e.options.lineWrapping,
                i = n && Lr(e);

            if (!t.measure.heights || n && t.measure.width != i) {
              var o = t.measure.heights = [];

              if (n) {
                t.measure.width = i;

                for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
                  var s = a[l],
                      c = a[l + 1];
                  Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top);
                }
              }

              o.push(r.bottom - r.top);
            }
          }(e, t.view, t.rect), t.hasHeights = !0), (o = function (e, t, r, n) {
            var i,
                o = Pr(t.map, r, n),
                s = o.node,
                c = o.start,
                u = o.end,
                d = o.collapse;

            if (3 == s.nodeType) {
              for (var h = 0; h < 4; h++) {
                for (; c && ne(t.line.text.charAt(o.coverStart + c));) {
                  --c;
                }

                for (; o.coverStart + u < o.coverEnd && ne(t.line.text.charAt(o.coverStart + u));) {
                  ++u;
                }

                if ((i = a && l < 9 && 0 == c && u == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : Ir(M(s, c, u).getClientRects(), n)).left || i.right || 0 == c) break;
                u = c, c -= 1, d = "right";
              }

              a && l < 11 && (i = function (e, t) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function (e) {
                  if (null != We) return We;

                  var t = _(e, O("span", "x")),
                      r = t.getBoundingClientRect(),
                      n = M(t, 0, 1).getBoundingClientRect();

                  return We = Math.abs(r.left - n.left) > 1;
                }(e)) return t;
                var r = screen.logicalXDPI / screen.deviceXDPI,
                    n = screen.logicalYDPI / screen.deviceYDPI;
                return {
                  left: t.left * r,
                  right: t.right * r,
                  top: t.top * n,
                  bottom: t.bottom * n
                };
              }(e.display.measure, i));
            } else {
              var f;
              c > 0 && (d = n = "right"), i = e.options.lineWrapping && (f = s.getClientRects()).length > 1 ? f["right" == n ? f.length - 1 : 0] : s.getBoundingClientRect();
            }

            if (a && l < 9 && !c && (!i || !i.left && !i.right)) {
              var p = s.parentNode.getClientRects()[0];
              i = p ? {
                left: p.left,
                right: p.left + nn(e.display),
                top: p.top,
                bottom: p.bottom
              } : Wr;
            }

            for (var g = i.top - t.rect.top, m = i.bottom - t.rect.top, v = (g + m) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++) {
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
            return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = g, C.rbottom = m), C;
          }(e, t, r, n)).bogus || (t.cache[s] = o)), {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
          };
        }

        var Er,
            Wr = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        };

        function Pr(e, t, r) {
          for (var n, i, o, a, l, s, c = 0; c < e.length; c += 3) {
            if (l = e[c], s = e[c + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? o = 1 + (i = t - l) : (c == e.length - 3 || t == s && e[c + 3] > t) && (i = (o = s - l) - 1, t >= s && (a = "right")), null != i) {
              if (n = e[c + 2], l == s && r == (n.insertLeft ? "left" : "right") && (a = r), "left" == r && 0 == i) for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft;) {
                n = e[2 + (c -= 3)], a = "left";
              }
              if ("right" == r && i == s - l) for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft;) {
                n = e[(c += 3) + 2], a = "right";
              }
              break;
            }
          }

          return {
            node: n,
            start: i,
            end: o,
            collapse: a,
            coverStart: l,
            coverEnd: s
          };
        }

        function Ir(e, t) {
          var r = Wr;
          if ("left" == t) for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++) {
            ;
          } else for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--) {
            ;
          }
          return r;
        }

        function Fr(e) {
          if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
            e.measure.caches[t] = {};
          }
        }

        function jr(e) {
          e.display.externalMeasure = null, T(e.display.lineMeasure);

          for (var t = 0; t < e.display.view.length; t++) {
            Fr(e.display.view[t]);
          }
        }

        function zr(e) {
          jr(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
        }

        function Hr() {
          return u && m ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }

        function Rr() {
          return u && m ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }

        function Br(e) {
          var t = 0;
          if (e.widgets) for (var r = 0; r < e.widgets.length; ++r) {
            e.widgets[r].above && (t += xr(e.widgets[r]));
          }
          return t;
        }

        function Vr(e, t, r, n, i) {
          if (!i) {
            var o = Br(t);
            r.top += o, r.bottom += o;
          }

          if ("line" == n) return r;
          n || (n = "local");
          var a = Vt(t);

          if ("local" == n ? a += Cr(e.display) : a -= e.display.viewOffset, "page" == n || "window" == n) {
            var l = e.display.lineSpace.getBoundingClientRect();
            a += l.top + ("window" == n ? 0 : Rr());
            var s = l.left + ("window" == n ? 0 : Hr());
            r.left += s, r.right += s;
          }

          return r.top += a, r.bottom += a, r;
        }

        function Ur(e, t, r) {
          if ("div" == r) return t;
          var n = t.left,
              i = t.top;
          if ("page" == r) n -= Hr(), i -= Rr();else if ("local" == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            n += o.left, i += o.top;
          }
          var a = e.display.lineSpace.getBoundingClientRect();
          return {
            left: n - a.left,
            top: i - a.top
          };
        }

        function Gr(e, t, r, n, i) {
          return n || (n = Ke(e.doc, t.line)), Vr(e, n, Or(e, n, t.ch, i), r);
        }

        function Kr(e, t, r, n, i, o) {
          function a(t, a) {
            var l = Dr(e, i, t, a ? "right" : "left", o);
            return a ? l.left = l.right : l.right = l.left, Vr(e, n, l, r);
          }

          n = n || Ke(e.doc, t.line), i || (i = Nr(e, n));
          var l = ce(n, e.doc.direction),
              s = t.ch,
              c = t.sticky;
          if (s >= n.text.length ? (s = n.text.length, c = "before") : s <= 0 && (s = 0, c = "after"), !l) return a("before" == c ? s - 1 : s, "before" == c);

          function u(e, t, r) {
            return a(r ? e - 1 : e, 1 == l[t].level != r);
          }

          var d = le(l, s, c),
              h = ae,
              f = u(s, d, "before" == c);
          return null != h && (f.other = u(s, h, "before" != c)), f;
        }

        function $r(e, t) {
          var r = 0;
          t = lt(e.doc, t), e.options.lineWrapping || (r = nn(e.display) * t.ch);
          var n = Ke(e.doc, t.line),
              i = Vt(n) + Cr(e.display);
          return {
            left: r,
            right: r,
            top: i,
            bottom: i + n.height
          };
        }

        function Xr(e, t, r, n, i) {
          var o = et(e, t, r);
          return o.xRel = i, n && (o.outside = n), o;
        }

        function Yr(e, t, r) {
          var n = e.doc;
          if ((r += e.display.viewOffset) < 0) return Xr(n.first, 0, null, -1, -1);
          var i = Ze(n, r),
              o = n.first + n.size - 1;
          if (i > o) return Xr(n.first + n.size - 1, Ke(n, o).text.length, null, 1, 1);
          t < 0 && (t = 0);

          for (var a = Ke(n, i);;) {
            var l = Qr(e, a, i, t, r),
                s = It(a, l.ch + (l.xRel > 0 || l.outside > 0 ? 1 : 0));
            if (!s) return l;
            var c = s.find(1);
            if (c.line == i) return c;
            a = Ke(n, i = c.line);
          }
        }

        function qr(e, t, r, n) {
          n -= Br(t);
          var i = t.text.length,
              o = oe(function (t) {
            return Dr(e, r, t - 1).bottom <= n;
          }, i, 0);
          return {
            begin: o,
            end: i = oe(function (t) {
              return Dr(e, r, t).top > n;
            }, o, i)
          };
        }

        function Zr(e, t, r, n) {
          return r || (r = Nr(e, t)), qr(e, t, r, Vr(e, t, Dr(e, r, n), "line").top);
        }

        function Jr(e, t, r, n) {
          return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
        }

        function Qr(e, t, r, n, i) {
          i -= Vt(t);
          var o = Nr(e, t),
              a = Br(t),
              l = 0,
              s = t.text.length,
              c = !0,
              u = ce(t, e.doc.direction);

          if (u) {
            var d = (e.options.lineWrapping ? tn : en)(e, t, r, o, u, n, i);
            l = (c = 1 != d.level) ? d.from : d.to - 1, s = c ? d.to : d.from - 1;
          }

          var h,
              f,
              p = null,
              g = null,
              m = oe(function (t) {
            var r = Dr(e, o, t);
            return r.top += a, r.bottom += a, !!Jr(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t, g = r), !0);
          }, l, s),
              v = !1;

          if (g) {
            var y = n - g.left < g.right - n,
                b = y == c;
            m = p + (b ? 0 : 1), f = b ? "after" : "before", h = y ? g.left : g.right;
          } else {
            c || m != s && m != l || m++, f = 0 == m ? "after" : m == t.text.length ? "before" : Dr(e, o, m - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
            var x = Kr(e, et(r, m, f), "line", t, o);
            h = x.left, v = i < x.top ? -1 : i >= x.bottom ? 1 : 0;
          }

          return Xr(r, m = ie(t.text, m, 1), f, v, n - h);
        }

        function en(e, t, r, n, i, o, a) {
          var l = oe(function (l) {
            var s = i[l],
                c = 1 != s.level;
            return Jr(Kr(e, et(r, c ? s.to : s.from, c ? "before" : "after"), "line", t, n), o, a, !0);
          }, 0, i.length - 1),
              s = i[l];

          if (l > 0) {
            var c = 1 != s.level,
                u = Kr(e, et(r, c ? s.from : s.to, c ? "after" : "before"), "line", t, n);
            Jr(u, o, a, !0) && u.top > a && (s = i[l - 1]);
          }

          return s;
        }

        function tn(e, t, r, n, i, o, a) {
          var l = qr(e, t, n, a),
              s = l.begin,
              c = l.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;

          for (var u = null, d = null, h = 0; h < i.length; h++) {
            var f = i[h];

            if (!(f.from >= c || f.to <= s)) {
              var p = Dr(e, n, 1 != f.level ? Math.min(c, f.to) - 1 : Math.max(s, f.from)).right,
                  g = p < o ? o - p + 1e9 : p - o;
              (!u || d > g) && (u = f, d = g);
            }
          }

          return u || (u = i[i.length - 1]), u.from < s && (u = {
            from: s,
            to: u.to,
            level: u.level
          }), u.to > c && (u = {
            from: u.from,
            to: c,
            level: u.level
          }), u;
        }

        function rn(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;

          if (null == Er) {
            Er = O("pre", null, "CodeMirror-line-like");

            for (var t = 0; t < 49; ++t) {
              Er.appendChild(document.createTextNode("x")), Er.appendChild(O("br"));
            }

            Er.appendChild(document.createTextNode("x"));
          }

          _(e.measure, Er);

          var r = Er.offsetHeight / 50;
          return r > 3 && (e.cachedTextHeight = r), T(e.measure), r || 1;
        }

        function nn(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = O("span", "xxxxxxxxxx"),
              r = O("pre", [t], "CodeMirror-line-like");

          _(e.measure, r);

          var n = t.getBoundingClientRect(),
              i = (n.right - n.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }

        function on(e) {
          for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
            var l = e.display.gutterSpecs[a].className;
            r[l] = o.offsetLeft + o.clientLeft + i, n[l] = o.clientWidth;
          }

          return {
            fixedPos: an(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth
          };
        }

        function an(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }

        function ln(e) {
          var t = rn(e.display),
              r = e.options.lineWrapping,
              n = r && Math.max(5, e.display.scroller.clientWidth / nn(e.display) - 3);
          return function (i) {
            if (Rt(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets) for (var a = 0; a < i.widgets.length; a++) {
              i.widgets[a].height && (o += i.widgets[a].height);
            }
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
          };
        }

        function sn(e) {
          var t = e.doc,
              r = ln(e);
          t.iter(function (e) {
            var t = r(e);
            t != e.height && Ye(e, t);
          });
        }

        function cn(e, t, r, n) {
          var i = e.display;
          if (!r && "true" == ke(t).getAttribute("cm-not-content")) return null;
          var o,
              a,
              l = i.lineSpace.getBoundingClientRect();

          try {
            o = t.clientX - l.left, a = t.clientY - l.top;
          } catch (e) {
            return null;
          }

          var s,
              c = Yr(e, o, a);

          if (n && c.xRel > 0 && (s = Ke(e.doc, c.line).text).length == c.ch) {
            var u = j(s, s.length, e.options.tabSize) - s.length;
            c = et(c.line, Math.max(0, Math.round((o - Sr(e.display).left) / nn(e.display)) - u));
          }

          return c;
        }

        function un(e, t) {
          if (t >= e.display.viewTo) return null;
          if ((t -= e.display.viewFrom) < 0) return null;

          for (var r = e.display.view, n = 0; n < r.length; n++) {
            if ((t -= r[n].size) < 0) return n;
          }
        }

        function dn(e, t, r, n) {
          null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
          var i = e.display;
          if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ct && zt(e.doc, t) < i.viewTo && fn(e);else if (r <= i.viewFrom) Ct && Ht(e.doc, r + n) > i.viewFrom ? fn(e) : (i.viewFrom += n, i.viewTo += n);else if (t <= i.viewFrom && r >= i.viewTo) fn(e);else if (t <= i.viewFrom) {
            var o = pn(e, r, r + n, 1);
            o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : fn(e);
          } else if (r >= i.viewTo) {
            var a = pn(e, t, t, -1);
            a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : fn(e);
          } else {
            var l = pn(e, t, t, -1),
                s = pn(e, r, r + n, 1);
            l && s ? (i.view = i.view.slice(0, l.index).concat(ir(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += n) : fn(e);
          }
          var c = i.externalMeasured;
          c && (r < c.lineN ? c.lineN += n : t < c.lineN + c.size && (i.externalMeasured = null));
        }

        function hn(e, t, r) {
          e.curOp.viewChanged = !0;
          var n = e.display,
              i = e.display.externalMeasured;

          if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
            var o = n.view[un(e, t)];

            if (null != o.node) {
              var a = o.changes || (o.changes = []);
              -1 == H(a, r) && a.push(r);
            }
          }
        }

        function fn(e) {
          e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
        }

        function pn(e, t, r, n) {
          var i,
              o = un(e, t),
              a = e.display.view;
          if (!Ct || r == e.doc.first + e.doc.size) return {
            index: o,
            lineN: r
          };

          for (var l = e.display.viewFrom, s = 0; s < o; s++) {
            l += a[s].size;
          }

          if (l != t) {
            if (n > 0) {
              if (o == a.length - 1) return null;
              i = l + a[o].size - t, o++;
            } else i = l - t;

            t += i, r += i;
          }

          for (; zt(e.doc, r) != r;) {
            if (o == (n < 0 ? 0 : a.length - 1)) return null;
            r += n * a[o - (n < 0 ? 1 : 0)].size, o += n;
          }

          return {
            index: o,
            lineN: r
          };
        }

        function gn(e) {
          for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || i.node && !i.changes || ++r;
          }

          return r;
        }

        function mn(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }

        function vn(e, t) {
          void 0 === t && (t = !0);

          for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), a = 0; a < r.sel.ranges.length; a++) {
            if (t || a != r.sel.primIndex) {
              var l = r.sel.ranges[a];

              if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
                var s = l.empty();
                (s || e.options.showCursorWhenSelecting) && yn(e, l.head, i), s || xn(e, l, o);
              }
            }
          }

          return n;
        }

        function yn(e, t, r) {
          var n = Kr(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
              i = r.appendChild(O("div", " ", "CodeMirror-cursor"));

          if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
            var o = r.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px";
          }
        }

        function bn(e, t) {
          return e.top - t.top || e.left - t.left;
        }

        function xn(e, t, r) {
          var n = e.display,
              i = e.doc,
              o = document.createDocumentFragment(),
              a = Sr(e.display),
              l = a.left,
              s = Math.max(n.sizerWidth, Lr(e) - n.sizer.offsetLeft) - a.right,
              c = "ltr" == i.direction;

          function u(e, t, r, n) {
            t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? s - e : r) + "px;\n                             height: " + (n - t) + "px"));
          }

          function d(t, r, n) {
            var o,
                a,
                d = Ke(i, t),
                h = d.text.length;

            function f(r, n) {
              return Gr(e, et(t, r), "div", d, n);
            }

            function p(t, r, n) {
              var i = Zr(e, d, null, t),
                  o = "ltr" == r == ("after" == n) ? "left" : "right";
              return f("after" == n ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
            }

            var g = ce(d, i.direction);
            return function (e, t, r, n) {
              if (!e) return n(t, r, "ltr", 0);

              for (var i = !1, o = 0; o < e.length; ++o) {
                var a = e[o];
                (a.from < r && a.to > t || t == r && a.to == t) && (n(Math.max(a.from, t), Math.min(a.to, r), 1 == a.level ? "rtl" : "ltr", o), i = !0);
              }

              i || n(t, r, "ltr");
            }(g, r || 0, null == n ? h : n, function (e, t, i, d) {
              var m = "ltr" == i,
                  v = f(e, m ? "left" : "right"),
                  y = f(t - 1, m ? "right" : "left"),
                  b = null == r && 0 == e,
                  x = null == n && t == h,
                  w = 0 == d,
                  C = !g || d == g.length - 1;

              if (y.top - v.top <= 3) {
                var k = (c ? x : b) && C,
                    S = (c ? b : x) && w ? l : (m ? v : y).left,
                    M = k ? s : (m ? y : v).right;
                u(S, v.top, M - S, v.bottom);
              } else {
                var L, T, _, O;

                m ? (L = c && b && w ? l : v.left, T = c ? s : p(e, i, "before"), _ = c ? l : p(t, i, "after"), O = c && x && C ? s : y.right) : (L = c ? p(e, i, "before") : l, T = !c && b && w ? s : v.right, _ = !c && x && C ? l : y.left, O = c ? p(t, i, "after") : s), u(L, v.top, T - L, v.bottom), v.bottom < y.top && u(l, v.bottom, null, y.top), u(_, y.top, O - _, y.bottom);
              }

              (!o || bn(v, o) < 0) && (o = v), bn(y, o) < 0 && (o = y), (!a || bn(v, a) < 0) && (a = v), bn(y, a) < 0 && (a = y);
            }), {
              start: o,
              end: a
            };
          }

          var h = t.from(),
              f = t.to();
          if (h.line == f.line) d(h.line, h.ch, f.ch);else {
            var p = Ke(i, h.line),
                g = Ke(i, f.line),
                m = jt(p) == jt(g),
                v = d(h.line, h.ch, m ? p.text.length + 1 : null).end,
                y = d(f.line, m ? 0 : null, f.ch).start;
            m && (v.top < y.top - 2 ? (u(v.right, v.top, null, v.bottom), u(l, y.top, y.left, y.bottom)) : u(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && u(l, v.bottom, null, y.top);
          }
          r.appendChild(o);
        }

        function wn(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
              e.hasFocus() || Mn(e), t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden";
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
          }
        }

        function Cn(e) {
          e.hasFocus() || (e.display.input.focus(), e.state.focused || Sn(e));
        }

        function kn(e) {
          e.state.delayingBlurEvent = !0, setTimeout(function () {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && Mn(e));
          }, 100);
        }

        function Sn(e, t) {
          e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (pe(e, "focus", e, t), e.state.focused = !0, E(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout(function () {
            return e.display.input.reset(!0);
          }, 20)), e.display.input.receivedFocus()), wn(e));
        }

        function Mn(e, t) {
          e.state.delayingBlurEvent || (e.state.focused && (pe(e, "blur", e, t), e.state.focused = !1, L(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
            e.state.focused || (e.display.shift = !1);
          }, 150));
        }

        function Ln(e) {
          for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
            var i = t.view[n],
                o = e.options.lineWrapping,
                s = void 0,
                c = 0;

            if (!i.hidden) {
              if (a && l < 8) {
                var u = i.node.offsetTop + i.node.offsetHeight;
                s = u - r, r = u;
              } else {
                var d = i.node.getBoundingClientRect();
                s = d.bottom - d.top, !o && i.text.firstChild && (c = i.text.firstChild.getBoundingClientRect().right - d.left - 1);
              }

              var h = i.line.height - s;
              if ((h > .005 || h < -.005) && (Ye(i.line, s), Tn(i.line), i.rest)) for (var f = 0; f < i.rest.length; f++) {
                Tn(i.rest[f]);
              }

              if (c > e.display.sizerWidth) {
                var p = Math.ceil(c / nn(e.display));
                p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0);
              }
            }
          }
        }

        function Tn(e) {
          if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
            var r = e.widgets[t],
                n = r.node.parentNode;
            n && (r.height = n.offsetHeight);
          }
        }

        function _n(e, t, r) {
          var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
          n = Math.floor(n - Cr(e));
          var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
              o = Ze(t, n),
              a = Ze(t, i);

          if (r && r.ensure) {
            var l = r.ensure.from.line,
                s = r.ensure.to.line;
            l < o ? (o = l, a = Ze(t, Vt(Ke(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = Ze(t, Vt(Ke(t, s)) - e.wrapper.clientHeight), a = s);
          }

          return {
            from: o,
            to: Math.max(a, o + 1)
          };
        }

        function On(e, t) {
          var r = e.display,
              n = rn(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
              o = Tr(e),
              a = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var l = e.doc.height + kr(r),
              s = t.top < n,
              c = t.bottom > l - n;
          if (t.top < i) a.scrollTop = s ? 0 : t.top;else if (t.bottom > i + o) {
            var u = Math.min(t.top, (c ? l : t.bottom) - o);
            u != i && (a.scrollTop = u);
          }
          var d = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
              h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft - d,
              f = Lr(e) - r.gutters.offsetWidth,
              p = t.right - t.left > f;
          return p && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)) : t.right > f + h - 3 && (a.scrollLeft = t.right + (p ? 0 : 10) - f), a;
        }

        function An(e, t) {
          null != t && (En(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
        }

        function Nn(e) {
          En(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
          };
        }

        function Dn(e, t, r) {
          null == t && null == r || En(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r);
        }

        function En(e) {
          var t = e.curOp.scrollToPos;
          t && (e.curOp.scrollToPos = null, Wn(e, $r(e, t.from), $r(e, t.to), t.margin));
        }

        function Wn(e, t, r, n) {
          var i = On(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n
          });
          Dn(e, i.scrollLeft, i.scrollTop);
        }

        function Pn(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 || (r || si(e, {
            top: t
          }), In(e, t, !0), r && si(e), ni(e, 100));
        }

        function In(e, t, r) {
          t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }

        function Fn(e, t, r, n) {
          t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, di(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
        }

        function jn(e) {
          var t = e.display,
              r = t.gutters.offsetWidth,
              n = Math.round(e.doc.height + kr(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Mr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r
          };
        }

        var zn = function zn(e, t, r) {
          this.cm = r;
          var n = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
              i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
          n.tabIndex = i.tabIndex = -1, e(n), e(i), de(n, "scroll", function () {
            n.clientHeight && t(n.scrollTop, "vertical");
          }), de(i, "scroll", function () {
            i.clientWidth && t(i.scrollLeft, "horizontal");
          }), this.checkedZeroWidth = !1, a && l < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
        };

        zn.prototype.update = function (e) {
          var t = e.scrollWidth > e.clientWidth + 1,
              r = e.scrollHeight > e.clientHeight + 1,
              n = e.nativeBarWidth;

          if (r) {
            this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
          } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";

          if (t) {
            this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
          } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

          return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
            right: r ? n : 0,
            bottom: t ? n : 0
          };
        }, zn.prototype.setScrollLeft = function (e) {
          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
        }, zn.prototype.setScrollTop = function (e) {
          this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
        }, zn.prototype.zeroWidthHack = function () {
          var e = y && !f ? "12px" : "18px";
          this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new z(), this.disableVert = new z();
        }, zn.prototype.enableZeroWidthBar = function (e, t, r) {
          e.style.pointerEvents = "auto", t.set(1e3, function n() {
            var i = e.getBoundingClientRect();
            ("vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, n);
          });
        }, zn.prototype.clear = function () {
          var e = this.horiz.parentNode;
          e.removeChild(this.horiz), e.removeChild(this.vert);
        };

        var Hn = function Hn() {};

        function Rn(e, t) {
          t || (t = jn(e));
          var r = e.display.barWidth,
              n = e.display.barHeight;
          Bn(e, t);

          for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) {
            r != e.display.barWidth && e.options.lineWrapping && Ln(e), Bn(e, jn(e)), r = e.display.barWidth, n = e.display.barHeight;
          }
        }

        function Bn(e, t) {
          var r = e.display,
              n = r.scrollbars.update(t);
          r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = "";
        }

        Hn.prototype.update = function () {
          return {
            bottom: 0,
            right: 0
          };
        }, Hn.prototype.setScrollLeft = function () {}, Hn.prototype.setScrollTop = function () {}, Hn.prototype.clear = function () {};
        var Vn = {
          native: zn,
          null: Hn
        };

        function Un(e) {
          e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Vn[e.options.scrollbarStyle](function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), de(t, "mousedown", function () {
              e.state.focused && setTimeout(function () {
                return e.display.input.focus();
              }, 0);
            }), t.setAttribute("cm-not-content", "true");
          }, function (t, r) {
            "horizontal" == r ? Fn(e, t) : Pn(e, t);
          }, e), e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass);
        }

        var Gn = 0;

        function Kn(e) {
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
            id: ++Gn,
            markArrays: null
          }, t = e.curOp, or ? or.ops.push(t) : t.ownsGroup = or = {
            ops: [t],
            delayedCallbacks: []
          };
        }

        function $n(e) {
          var t = e.curOp;
          t && function (e, t) {
            var r = e.ownsGroup;
            if (r) try {
              !function (e) {
                var t = e.delayedCallbacks,
                    r = 0;

                do {
                  for (; r < t.length; r++) {
                    t[r].call(null);
                  }

                  for (var n = 0; n < e.ops.length; n++) {
                    var i = e.ops[n];
                    if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
                      i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                    }
                  }
                } while (r < t.length);
              }(r);
            } finally {
              or = null, t(r);
            }
          }(t, function (e) {
            for (var t = 0; t < e.ops.length; t++) {
              e.ops[t].cm.curOp = null;
            }

            !function (e) {
              for (var t = e.ops, r = 0; r < t.length; r++) {
                Xn(t[r]);
              }

              for (var n = 0; n < t.length; n++) {
                Yn(t[n]);
              }

              for (var i = 0; i < t.length; i++) {
                qn(t[i]);
              }

              for (var o = 0; o < t.length; o++) {
                Zn(t[o]);
              }

              for (var a = 0; a < t.length; a++) {
                Jn(t[a]);
              }
            }(e);
          });
        }

        function Xn(e) {
          var t = e.cm,
              r = t.display;
          (function (e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Mr(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Mr(e) + "px", t.scrollbarsClipped = !0);
          })(t), e.updateMaxLine && Gt(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new oi(t, e.mustUpdate && {
            top: e.scrollTop,
            ensure: e.scrollToPos
          }, e.forceUpdate);
        }

        function Yn(e) {
          e.updatedDisplay = e.mustUpdate && ai(e.cm, e.update);
        }

        function qn(e) {
          var t = e.cm,
              r = t.display;
          e.updatedDisplay && Ln(t), e.barMeasure = jn(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Or(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Mr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Lr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection());
        }

        function Zn(e) {
          var t = e.cm;
          null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Fn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
          var r = e.focus && e.focus == D();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && Rn(t, e.barMeasure), e.updatedDisplay && ui(t, e.barMeasure), e.selectionChanged && wn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && Cn(e.cm);
        }

        function Jn(e) {
          var t = e.cm,
              r = t.display,
              n = t.doc;
          e.updatedDisplay && li(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && In(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Fn(t, e.scrollLeft, !0, !0), e.scrollToPos && function (e, t) {
            if (!ge(e, "scrollCursorIntoView")) {
              var r = e.display,
                  n = r.sizer.getBoundingClientRect(),
                  i = null;

              if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                var o = O("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Cr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Mr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
              }
            }
          }(t, function (e, t, r, n) {
            var i;
            null == n && (n = 0), e.options.lineWrapping || t != r || (r = "before" == t.sticky ? et(t.line, t.ch + 1, "before") : t, t = t.ch ? et(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t);

            for (var o = 0; o < 5; o++) {
              var a = !1,
                  l = Kr(e, t),
                  s = r && r != t ? Kr(e, r) : l,
                  c = On(e, i = {
                left: Math.min(l.left, s.left),
                top: Math.min(l.top, s.top) - n,
                right: Math.max(l.left, s.left),
                bottom: Math.max(l.bottom, s.bottom) + n
              }),
                  u = e.doc.scrollTop,
                  d = e.doc.scrollLeft;
              if (null != c.scrollTop && (Pn(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (a = !0)), null != c.scrollLeft && (Fn(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (a = !0)), !a) break;
            }

            return i;
          }(t, lt(n, e.scrollToPos.from), lt(n, e.scrollToPos.to), e.scrollToPos.margin));
          var i = e.maybeHiddenMarkers,
              o = e.maybeUnhiddenMarkers;
          if (i) for (var a = 0; a < i.length; ++a) {
            i[a].lines.length || pe(i[a], "hide");
          }
          if (o) for (var l = 0; l < o.length; ++l) {
            o[l].lines.length && pe(o[l], "unhide");
          }
          r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && pe(t, "changes", t, e.changeObjs), e.update && e.update.finish();
        }

        function Qn(e, t) {
          if (e.curOp) return t();
          Kn(e);

          try {
            return t();
          } finally {
            $n(e);
          }
        }

        function ei(e, t) {
          return function () {
            if (e.curOp) return t.apply(e, arguments);
            Kn(e);

            try {
              return t.apply(e, arguments);
            } finally {
              $n(e);
            }
          };
        }

        function ti(e) {
          return function () {
            if (this.curOp) return e.apply(this, arguments);
            Kn(this);

            try {
              return e.apply(this, arguments);
            } finally {
              $n(this);
            }
          };
        }

        function ri(e) {
          return function () {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            Kn(t);

            try {
              return e.apply(this, arguments);
            } finally {
              $n(t);
            }
          };
        }

        function ni(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, I(ii, e));
        }

        function ii(e) {
          var t = e.doc;

          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var r = +new Date() + e.options.workTime,
                n = ft(e, t.highlightFrontier),
                i = [];
            t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
              if (n.line >= e.display.viewFrom) {
                var a = o.styles,
                    l = o.text.length > e.options.maxHighlightLength ? Be(t.mode, n.state) : null,
                    s = dt(e, o, n, !0);
                l && (n.state = l), o.styles = s.styles;
                var c = o.styleClasses,
                    u = s.classes;
                u ? o.styleClasses = u : c && (o.styleClasses = null);

                for (var d = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), h = 0; !d && h < a.length; ++h) {
                  d = a[h] != o.styles[h];
                }

                d && i.push(n.line), o.stateAfter = n.save(), n.nextLine();
              } else o.text.length <= e.options.maxHighlightLength && pt(e, o.text, n), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();

              if (+new Date() > r) return ni(e, e.options.workDelay), !0;
            }), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), i.length && Qn(e, function () {
              for (var t = 0; t < i.length; t++) {
                hn(e, i[t], "text");
              }
            });
          }
        }

        var oi = function oi(e, t, r) {
          var n = e.display;
          this.viewport = t, this.visible = _n(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Lr(e), this.force = r, this.dims = on(e), this.events = [];
        };

        function ai(e, t) {
          var r = e.display,
              n = e.doc;
          if (t.editorIsHidden) return fn(e), !1;
          if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == gn(e)) return !1;
          hi(e) && (fn(e), t.dims = on(e));
          var i = n.first + n.size,
              o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
              a = Math.min(i, t.visible.to + e.options.viewportMargin);
          r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(i, r.viewTo)), Ct && (o = zt(e.doc, o), a = Ht(e.doc, a));
          var l = o != r.viewFrom || a != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
          (function (e, t, r) {
            var n = e.display;
            0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = ir(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = ir(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(un(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(ir(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, un(e, r)))), n.viewTo = r;
          })(e, o, a), r.viewOffset = Vt(Ke(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
          var c = gn(e);
          if (!l && 0 == c && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;

          var u = function (e) {
            if (e.hasFocus()) return null;
            var t = D();
            if (!t || !N(e.display.lineDiv, t)) return null;
            var r = {
              activeElt: t
            };

            if (window.getSelection) {
              var n = window.getSelection();
              n.anchorNode && n.extend && N(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset);
            }

            return r;
          }(e);

          return c > 4 && (r.lineDiv.style.display = "none"), function (e, t, r) {
            var n = e.display,
                i = e.options.lineNumbers,
                o = n.lineDiv,
                a = o.firstChild;

            function l(t) {
              var r = t.nextSibling;
              return s && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r;
            }

            for (var c = n.view, u = n.viewFrom, d = 0; d < c.length; d++) {
              var h = c[d];
              if (h.hidden) ;else if (h.node && h.node.parentNode == o) {
                for (; a != h.node;) {
                  a = l(a);
                }

                var f = i && null != t && t <= u && h.lineNumber;
                h.changes && (H(h.changes, "gutter") > -1 && (f = !1), cr(e, h, u, r)), f && (T(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(Qe(e.options, u)))), a = h.node.nextSibling;
              } else {
                var p = mr(e, h, u, r);
                o.insertBefore(p, a);
              }
              u += h.size;
            }

            for (; a;) {
              a = l(a);
            }
          }(e, r.updateLineNumbers, t.dims), c > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, function (e) {
            if (e && e.activeElt && e.activeElt != D() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && N(document.body, e.anchorNode) && N(document.body, e.focusNode))) {
              var t = window.getSelection(),
                  r = document.createRange();
              r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset);
            }
          }(u), T(r.cursorDiv), T(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, l && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, ni(e, 400)), r.updateLineNumbers = null, !0;
        }

        function li(e, t) {
          for (var r = t.viewport, n = !0;; n = !1) {
            if (n && e.options.lineWrapping && t.oldDisplayWidth != Lr(e)) n && (t.visible = _n(e.display, e.doc, r));else if (r && null != r.top && (r = {
              top: Math.min(e.doc.height + kr(e.display) - Tr(e), r.top)
            }), t.visible = _n(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
            if (!ai(e, t)) break;
            Ln(e);
            var i = jn(e);
            mn(e), Rn(e, i), ui(e, i), t.force = !1;
          }

          t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
        }

        function si(e, t) {
          var r = new oi(e, t);

          if (ai(e, r)) {
            Ln(e), li(e, r);
            var n = jn(e);
            mn(e), Rn(e, n), ui(e, n), r.finish();
          }
        }

        function ci(e) {
          var t = e.gutters.offsetWidth;
          e.sizer.style.marginLeft = t + "px", lr(e, "gutterChanged", e);
        }

        function ui(e, t) {
          e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Mr(e) + "px";
        }

        function di(e) {
          var t = e.display,
              r = t.view;

          if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var n = an(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", a = 0; a < r.length; a++) {
              if (!r[a].hidden) {
                e.options.fixedGutter && (r[a].gutter && (r[a].gutter.style.left = o), r[a].gutterBackground && (r[a].gutterBackground.style.left = o));
                var l = r[a].alignable;
                if (l) for (var s = 0; s < l.length; s++) {
                  l[s].style.left = o;
                }
              }
            }

            e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
          }
        }

        function hi(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
              r = Qe(e.options, t.first + t.size - 1),
              n = e.display;

          if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(O("div", [O("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                o = i.firstChild.offsetWidth,
                a = i.offsetWidth - o;
            return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - a) + 1, n.lineNumWidth = n.lineNumInnerWidth + a, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", ci(e.display), !0;
          }

          return !1;
        }

        function fi(e, t) {
          for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i],
                a = null;

            if ("string" != typeof o && (a = o.style, o = o.className), "CodeMirror-linenumbers" == o) {
              if (!t) continue;
              n = !0;
            }

            r.push({
              className: o,
              style: a
            });
          }

          return t && !n && r.push({
            className: "CodeMirror-linenumbers",
            style: null
          }), r;
        }

        function pi(e) {
          var t = e.gutters,
              r = e.gutterSpecs;
          T(t), e.lineGutter = null;

          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
                o = i.className,
                a = i.style,
                l = t.appendChild(O("div", null, "CodeMirror-gutter " + o));
            a && (l.style.cssText = a), "CodeMirror-linenumbers" == o && (e.lineGutter = l, l.style.width = (e.lineNumWidth || 1) + "px");
          }

          t.style.display = r.length ? "" : "none", ci(e);
        }

        function gi(e) {
          pi(e.display), dn(e), di(e);
        }

        function mi(e, t, n, i) {
          var o = this;
          this.input = n, o.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = A("div", null, "CodeMirror-code"), o.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = O("div", null, "CodeMirror-cursors"), o.measure = O("div", null, "CodeMirror-measure"), o.lineMeasure = O("div", null, "CodeMirror-measure"), o.lineSpace = A("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
          var c = A("div", [o.lineSpace], "CodeMirror-lines");
          o.mover = O("div", [c], null, "position: relative"), o.sizer = O("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = O("div", null, null, "position: absolute; height: 50px; width: 1px;"), o.gutters = O("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = O("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = O("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), a && l < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), s || r && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = fi(i.gutters, i.lineNumbers), pi(o), n.init(o);
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
              r = e.wheelDeltaY;
          return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
            x: t,
            y: r
          };
        }

        function xi(e) {
          var t = bi(e);
          return t.x *= yi, t.y *= yi, t;
        }

        function wi(e, t) {
          var n = bi(t),
              i = n.x,
              o = n.y,
              a = e.display,
              l = a.scroller,
              c = l.scrollWidth > l.clientWidth,
              u = l.scrollHeight > l.clientHeight;

          if (i && c || o && u) {
            if (o && y && s) e: for (var h = t.target, f = a.view; h != l; h = h.parentNode) {
              for (var p = 0; p < f.length; p++) {
                if (f[p].node == h) {
                  e.display.currentWheelTarget = h;
                  break e;
                }
              }
            }
            if (i && !r && !d && null != yi) return o && u && Pn(e, Math.max(0, l.scrollTop + o * yi)), Fn(e, Math.max(0, l.scrollLeft + i * yi)), (!o || o && u) && be(t), void (a.wheelStartX = null);

            if (o && null != yi) {
              var g = o * yi,
                  m = e.doc.scrollTop,
                  v = m + a.wrapper.clientHeight;
              g < 0 ? m = Math.max(0, m + g - 50) : v = Math.min(e.doc.height, v + g + 50), si(e, {
                top: m,
                bottom: v
              });
            }

            vi < 20 && (null == a.wheelStartX ? (a.wheelStartX = l.scrollLeft, a.wheelStartY = l.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function () {
              if (null != a.wheelStartX) {
                var e = l.scrollLeft - a.wheelStartX,
                    t = l.scrollTop - a.wheelStartY,
                    r = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
                a.wheelStartX = a.wheelStartY = null, r && (yi = (yi * vi + r) / (vi + 1), ++vi);
              }
            }, 200)) : (a.wheelDX += i, a.wheelDY += o));
          }
        }

        a ? yi = -.53 : r ? yi = 15 : u ? yi = -.7 : h && (yi = -1 / 3);

        var Ci = function Ci(e, t) {
          this.ranges = e, this.primIndex = t;
        };

        Ci.prototype.primary = function () {
          return this.ranges[this.primIndex];
        }, Ci.prototype.equals = function (e) {
          if (e == this) return !0;
          if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;

          for (var t = 0; t < this.ranges.length; t++) {
            var r = this.ranges[t],
                n = e.ranges[t];
            if (!rt(r.anchor, n.anchor) || !rt(r.head, n.head)) return !1;
          }

          return !0;
        }, Ci.prototype.deepCopy = function () {
          for (var e = [], t = 0; t < this.ranges.length; t++) {
            e[t] = new ki(nt(this.ranges[t].anchor), nt(this.ranges[t].head));
          }

          return new Ci(e, this.primIndex);
        }, Ci.prototype.somethingSelected = function () {
          for (var e = 0; e < this.ranges.length; e++) {
            if (!this.ranges[e].empty()) return !0;
          }

          return !1;
        }, Ci.prototype.contains = function (e, t) {
          t || (t = e);

          for (var r = 0; r < this.ranges.length; r++) {
            var n = this.ranges[r];
            if (tt(t, n.from()) >= 0 && tt(e, n.to()) <= 0) return r;
          }

          return -1;
        };

        var ki = function ki(e, t) {
          this.anchor = e, this.head = t;
        };

        function Si(e, t, r) {
          var n = e && e.options.selectionsMayTouch,
              i = t[r];
          t.sort(function (e, t) {
            return tt(e.from(), t.from());
          }), r = H(t, i);

          for (var o = 1; o < t.length; o++) {
            var a = t[o],
                l = t[o - 1],
                s = tt(l.to(), a.from());

            if (n && !a.empty() ? s > 0 : s >= 0) {
              var c = ot(l.from(), a.from()),
                  u = it(l.to(), a.to()),
                  d = l.empty() ? a.from() == a.head : l.from() == l.head;
              o <= r && --r, t.splice(--o, 2, new ki(d ? u : c, d ? c : u));
            }
          }

          return new Ci(t, r);
        }

        function Mi(e, t) {
          return new Ci([new ki(e, t || e)], 0);
        }

        function Li(e) {
          return e.text ? et(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
        }

        function Ti(e, t) {
          if (tt(e, t.from) < 0) return e;
          if (tt(e, t.to) <= 0) return Li(t);
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
              n = e.ch;
          return e.line == t.to.line && (n += Li(t).ch - t.to.ch), et(r, n);
        }

        function _i(e, t) {
          for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new ki(Ti(i.anchor, t), Ti(i.head, t)));
          }

          return Si(e.cm, r, e.sel.primIndex);
        }

        function Oi(e, t, r) {
          return e.line == t.line ? et(r.line, e.ch - t.ch + r.ch) : et(r.line + (e.line - t.line), e.ch);
        }

        function Ai(e) {
          e.doc.mode = ze(e.options, e.doc.modeOption), Ni(e);
        }

        function Ni(e) {
          e.doc.iter(function (e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
          }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ni(e, 100), e.state.modeGen++, e.curOp && dn(e);
        }

        function Di(e, t) {
          return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
        }

        function Ei(e, t, r, n) {
          function i(e) {
            return r ? r[e] : null;
          }

          function o(e, r, i) {
            (function (e, t, r, n) {
              e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), _t(e), Ot(e, r);
              var i = n ? n(e) : 1;
              i != e.height && Ye(e, i);
            })(e, r, i, n), lr(e, "change", e, t);
          }

          function a(e, t) {
            for (var r = [], o = e; o < t; ++o) {
              r.push(new Kt(c[o], i(o), n));
            }

            return r;
          }

          var l = t.from,
              s = t.to,
              c = t.text,
              u = Ke(e, l.line),
              d = Ke(e, s.line),
              h = X(c),
              f = i(c.length - 1),
              p = s.line - l.line;
          if (t.full) e.insert(0, a(0, c.length)), e.remove(c.length, e.size - c.length);else if (Di(e, t)) {
            var g = a(0, c.length - 1);
            o(d, d.text, f), p && e.remove(l.line, p), g.length && e.insert(l.line, g);
          } else if (u == d) {
            if (1 == c.length) o(u, u.text.slice(0, l.ch) + h + u.text.slice(s.ch), f);else {
              var m = a(1, c.length - 1);
              m.push(new Kt(h + u.text.slice(s.ch), f, n)), o(u, u.text.slice(0, l.ch) + c[0], i(0)), e.insert(l.line + 1, m);
            }
          } else if (1 == c.length) o(u, u.text.slice(0, l.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(l.line + 1, p);else {
            o(u, u.text.slice(0, l.ch) + c[0], i(0)), o(d, h + d.text.slice(s.ch), f);
            var v = a(1, c.length - 1);
            p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, v);
          }
          lr(e, "change", e, t);
        }

        function Wi(e, t, r) {
          !function e(n, i, o) {
            if (n.linked) for (var a = 0; a < n.linked.length; ++a) {
              var l = n.linked[a];

              if (l.doc != i) {
                var s = o && l.sharedHist;
                r && !s || (t(l.doc, s), e(l.doc, n, s));
              }
            }
          }(e, null, !0);
        }

        function Pi(e, t) {
          if (t.cm) throw new Error("This document is already in use.");
          e.doc = t, t.cm = e, sn(e), Ai(e), Ii(e), e.options.direction = t.direction, e.options.lineWrapping || Gt(e), e.options.mode = t.modeOption, dn(e);
        }

        function Ii(e) {
          ("rtl" == e.doc.direction ? E : L)(e.display.lineDiv, "CodeMirror-rtl");
        }

        function Fi(e) {
          this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
        }

        function ji(e, t) {
          var r = {
            from: nt(t.from),
            to: Li(t),
            text: $e(e, t.from, t.to)
          };
          return Vi(e, r, t.from.line, t.to.line + 1), Wi(e, function (e) {
            return Vi(e, r, t.from.line, t.to.line + 1);
          }, !0), r;
        }

        function zi(e) {
          for (; e.length && X(e).ranges;) {
            e.pop();
          }
        }

        function Hi(e, t, r, n) {
          var i = e.history;
          i.undone.length = 0;
          var o,
              a,
              l = +new Date();
          if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function (e, t) {
            return t ? (zi(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0;
          }(i, i.lastOp == n))) a = X(o.changes), 0 == tt(t.from, t.to) && 0 == tt(t.from, a.to) ? a.to = Li(t) : o.changes.push(ji(e, t));else {
            var s = X(i.done);

            for (s && s.ranges || Bi(e.sel, i.done), o = {
              changes: [ji(e, t)],
              generation: i.generation
            }, i.done.push(o); i.done.length > i.undoDepth;) {
              i.done.shift(), i.done[0].ranges || i.done.shift();
            }
          }
          i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, a || pe(e, "historyAdded");
        }

        function Ri(e, t, r, n) {
          var i = e.history,
              o = n && n.origin;
          r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function (e, t, r, n) {
            var i = t.charAt(0);
            return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
          }(e, o, X(i.done), t)) ? i.done[i.done.length - 1] = t : Bi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && zi(i.undone);
        }

        function Bi(e, t) {
          var r = X(t);
          r && r.ranges && r.equals(e) || t.push(e);
        }

        function Vi(e, t, r, n) {
          var i = t["spans_" + e.id],
              o = 0;
          e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
            r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o;
          });
        }

        function Ui(e) {
          if (!e) return null;

          for (var t, r = 0; r < e.length; ++r) {
            e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
          }

          return t ? t.length ? t : null : e;
        }

        function Gi(e, t) {
          var r = function (e, t) {
            var r = t["spans_" + e.id];
            if (!r) return null;

            for (var n = [], i = 0; i < t.text.length; ++i) {
              n.push(Ui(r[i]));
            }

            return n;
          }(e, t),
              n = Lt(e, t);

          if (!r) return n;
          if (!n) return r;

          for (var i = 0; i < r.length; ++i) {
            var o = r[i],
                a = n[i];
            if (o && a) e: for (var l = 0; l < a.length; ++l) {
              for (var s = a[l], c = 0; c < o.length; ++c) {
                if (o[c].marker == s.marker) continue e;
              }

              o.push(s);
            } else a && (r[i] = a);
          }

          return r;
        }

        function Ki(e, t, r) {
          for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) n.push(r ? Ci.prototype.deepCopy.call(o) : o);else {
              var a = o.changes,
                  l = [];
              n.push({
                changes: l
              });

              for (var s = 0; s < a.length; ++s) {
                var c = a[s],
                    u = void 0;
                if (l.push({
                  from: c.from,
                  to: c.to,
                  text: c.text
                }), t) for (var d in c) {
                  (u = d.match(/^spans_(\d+)$/)) && H(t, Number(u[1])) > -1 && (X(l)[d] = c[d], delete c[d]);
                }
              }
            }
          }

          return n;
        }

        function $i(e, t, r, n) {
          if (n) {
            var i = e.anchor;

            if (r) {
              var o = tt(t, i) < 0;
              o != tt(r, i) < 0 ? (i = t, t = r) : o != tt(t, r) < 0 && (t = r);
            }

            return new ki(i, t);
          }

          return new ki(r || t, t);
        }

        function Xi(e, t, r, n, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Qi(e, new Ci([$i(e.sel.primary(), t, r, i)], 0), n);
        }

        function Yi(e, t, r) {
          for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) {
            n[o] = $i(e.sel.ranges[o], t[o], null, i);
          }

          Qi(e, Si(e.cm, n, e.sel.primIndex), r);
        }

        function qi(e, t, r, n) {
          var i = e.sel.ranges.slice(0);
          i[t] = r, Qi(e, Si(e.cm, i, e.sel.primIndex), n);
        }

        function Zi(e, t, r, n) {
          Qi(e, Mi(t, r), n);
        }

        function Ji(e, t, r) {
          var n = e.history.done,
              i = X(n);
          i && i.ranges ? (n[n.length - 1] = t, eo(e, t, r)) : Qi(e, t, r);
        }

        function Qi(e, t, r) {
          eo(e, t, r), Ri(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
        }

        function eo(e, t, r) {
          (ve(e, "beforeSelectionChange") || e.cm && ve(e.cm, "beforeSelectionChange")) && (t = function (e, t, r) {
            var n = {
              ranges: t.ranges,
              update: function update(t) {
                this.ranges = [];

                for (var r = 0; r < t.length; r++) {
                  this.ranges[r] = new ki(lt(e, t[r].anchor), lt(e, t[r].head));
                }
              },
              origin: r && r.origin
            };
            return pe(e, "beforeSelectionChange", e, n), e.cm && pe(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? Si(e.cm, n.ranges, n.ranges.length - 1) : t;
          }(e, t, r));
          var n = r && r.bias || (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          to(e, no(e, t, n, !0)), r && !1 === r.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || Nn(e.cm);
        }

        function to(e, t) {
          t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, me(e.cm)), lr(e, "cursorActivity", e));
        }

        function ro(e) {
          to(e, no(e, e.sel, null, !1));
        }

        function no(e, t, r, n) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var a = t.ranges[o],
                l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                s = oo(e, a.anchor, l && l.anchor, r, n),
                c = oo(e, a.head, l && l.head, r, n);
            (i || s != a.anchor || c != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new ki(s, c));
          }

          return i ? Si(e.cm, i, t.primIndex) : t;
        }

        function io(e, t, r, n, i) {
          var o = Ke(e, t.line);
          if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
            var l = o.markedSpans[a],
                s = l.marker,
                c = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
                u = "selectRight" in s ? !s.selectRight : s.inclusiveRight;

            if ((null == l.from || (c ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (u ? l.to >= t.ch : l.to > t.ch))) {
              if (i && (pe(s, "beforeCursorEnter"), s.explicitlyCleared)) {
                if (o.markedSpans) {
                  --a;
                  continue;
                }

                break;
              }

              if (!s.atomic) continue;

              if (r) {
                var d = s.find(n < 0 ? 1 : -1),
                    h = void 0;
                if ((n < 0 ? u : c) && (d = ao(e, d, -n, d && d.line == t.line ? o : null)), d && d.line == t.line && (h = tt(d, r)) && (n < 0 ? h < 0 : h > 0)) return io(e, d, t, n, i);
              }

              var f = s.find(n < 0 ? -1 : 1);
              return (n < 0 ? c : u) && (f = ao(e, f, n, f.line == t.line ? o : null)), f ? io(e, f, t, n, i) : null;
            }
          }
          return t;
        }

        function oo(e, t, r, n, i) {
          var o = n || 1;
          return io(e, t, r, o, i) || !i && io(e, t, r, o, !0) || io(e, t, r, -o, i) || !i && io(e, t, r, -o, !0) || (e.cantEdit = !0, et(e.first, 0));
        }

        function ao(e, t, r, n) {
          return r < 0 && 0 == t.ch ? t.line > e.first ? lt(e, et(t.line - 1)) : null : r > 0 && t.ch == (n || Ke(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? et(t.line + 1, 0) : null : new et(t.line, t.ch + r);
        }

        function lo(e) {
          e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), B);
        }

        function so(e, t, r) {
          var n = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function cancel() {
              return n.canceled = !0;
            }
          };
          return r && (n.update = function (t, r, i, o) {
            t && (n.from = lt(e, t)), r && (n.to = lt(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o);
          }), pe(e, "beforeChange", e, n), e.cm && pe(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
            from: n.from,
            to: n.to,
            text: n.text,
            origin: n.origin
          };
        }

        function co(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp) return ei(e.cm, co)(e, t, r);
            if (e.cm.state.suppressEdits) return;
          }

          if (!(ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange")) || (t = so(e, t, !0))) {
            var n = wt && !r && function (e, t, r) {
              var n = null;
              if (e.iter(t.line, r.line + 1, function (e) {
                if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                  var r = e.markedSpans[t].marker;
                  !r.readOnly || n && -1 != H(n, r) || (n || (n = [])).push(r);
                }
              }), !n) return null;

              for (var i = [{
                from: t,
                to: r
              }], o = 0; o < n.length; ++o) {
                for (var a = n[o], l = a.find(0), s = 0; s < i.length; ++s) {
                  var c = i[s];

                  if (!(tt(c.to, l.from) < 0 || tt(c.from, l.to) > 0)) {
                    var u = [s, 1],
                        d = tt(c.from, l.from),
                        h = tt(c.to, l.to);
                    (d < 0 || !a.inclusiveLeft && !d) && u.push({
                      from: c.from,
                      to: l.from
                    }), (h > 0 || !a.inclusiveRight && !h) && u.push({
                      from: l.to,
                      to: c.to
                    }), i.splice.apply(i, u), s += u.length - 3;
                  }
                }
              }

              return i;
            }(e, t.from, t.to);

            if (n) for (var i = n.length - 1; i >= 0; --i) {
              uo(e, {
                from: n[i].from,
                to: n[i].to,
                text: i ? [""] : t.text,
                origin: t.origin
              });
            } else uo(e, t);
          }
        }

        function uo(e, t) {
          if (1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) {
            var r = _i(e, t);

            Hi(e, t, r, e.cm ? e.cm.curOp.id : NaN), po(e, t, r, Lt(e, t));
            var n = [];
            Wi(e, function (e, r) {
              r || -1 != H(n, e.history) || (yo(e.history, t), n.push(e.history)), po(e, t, null, Lt(e, t));
            });
          }
        }

        function ho(e, t, r) {
          var n = e.cm && e.cm.state.suppressEdits;

          if (!n || r) {
            for (var i, o = e.history, a = e.sel, l = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, c = 0; c < l.length && (i = l[c], r ? !i.ranges || i.equals(e.sel) : i.ranges); c++) {
              ;
            }

            if (c != l.length) {
              for (o.lastOrigin = o.lastSelOrigin = null;;) {
                if (!(i = l.pop()).ranges) {
                  if (n) return void l.push(i);
                  break;
                }

                if (Bi(i, s), r && !i.equals(e.sel)) return void Qi(e, i, {
                  clearRedo: !1
                });
                a = i;
              }

              var u = [];
              Bi(a, s), s.push({
                changes: u,
                generation: o.generation
              }), o.generation = i.generation || ++o.maxGeneration;

              for (var d = ve(e, "beforeChange") || e.cm && ve(e.cm, "beforeChange"), h = function h(r) {
                var n = i.changes[r];
                if (n.origin = t, d && !so(e, n, !1)) return l.length = 0, {};
                u.push(ji(e, n));
                var o = r ? _i(e, n) : X(l);
                po(e, n, o, Gi(e, n)), !r && e.cm && e.cm.scrollIntoView({
                  from: n.from,
                  to: Li(n)
                });
                var a = [];
                Wi(e, function (e, t) {
                  t || -1 != H(a, e.history) || (yo(e.history, n), a.push(e.history)), po(e, n, null, Gi(e, n));
                });
              }, f = i.changes.length - 1; f >= 0; --f) {
                var p = h(f);
                if (p) return p.v;
              }
            }
          }
        }

        function fo(e, t) {
          if (0 != t && (e.first += t, e.sel = new Ci(Y(e.sel.ranges, function (e) {
            return new ki(et(e.anchor.line + t, e.anchor.ch), et(e.head.line + t, e.head.ch));
          }), e.sel.primIndex), e.cm)) {
            dn(e.cm, e.first, e.first - t, t);

            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) {
              hn(e.cm, n, "gutter");
            }
          }
        }

        function po(e, t, r, n) {
          if (e.cm && !e.cm.curOp) return ei(e.cm, po)(e, t, r, n);
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
              to: et(o, Ke(e, o).text.length),
              text: [t.text[0]],
              origin: t.origin
            }), t.removed = $e(e, t.from, t.to), r || (r = _i(e, t)), e.cm ? function (e, t, r) {
              var n = e.doc,
                  i = e.display,
                  o = t.from,
                  a = t.to,
                  l = !1,
                  s = o.line;
              e.options.lineWrapping || (s = qe(jt(Ke(n, o.line))), n.iter(s, a.line + 1, function (e) {
                if (e == i.maxLine) return l = !0, !0;
              })), n.sel.contains(t.from, t.to) > -1 && me(e), Ei(n, t, r, ln(e)), e.options.lineWrapping || (n.iter(s, o.line + t.text.length, function (e) {
                var t = Ut(e);
                t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1);
              }), l && (e.curOp.updateMaxLine = !0)), function (e, t) {
                if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                  for (var r = e.first, n = t - 1; n > r; n--) {
                    var i = Ke(e, n).stateAfter;

                    if (i && (!(i instanceof ct) || n + i.lookAhead < t)) {
                      r = n + 1;
                      break;
                    }
                  }

                  e.highlightFrontier = Math.min(e.highlightFrontier, r);
                }
              }(n, o.line), ni(e, 400);
              var c = t.text.length - (a.line - o.line) - 1;
              t.full ? dn(e) : o.line != a.line || 1 != t.text.length || Di(e.doc, t) ? dn(e, o.line, a.line + 1, c) : hn(e, o.line, "text");
              var u = ve(e, "changes"),
                  d = ve(e, "change");

              if (d || u) {
                var h = {
                  from: o,
                  to: a,
                  text: t.text,
                  removed: t.removed,
                  origin: t.origin
                };
                d && lr(e, "change", e, h), u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
              }

              e.display.selForContextMenu = null;
            }(e.cm, t, n) : Ei(e, t, n), eo(e, r, B), e.cantEdit && oo(e, et(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }

        function go(e, t, r, n, i) {
          var o;
          n || (n = r), tt(n, r) < 0 && (r = (o = [n, r])[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), co(e, {
            from: r,
            to: n,
            text: t,
            origin: i
          });
        }

        function mo(e, t, r, n) {
          r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0);
        }

        function vo(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
                a = !0;

            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);

              for (var l = 0; l < o.ranges.length; l++) {
                mo(o.ranges[l].anchor, t, r, n), mo(o.ranges[l].head, t, r, n);
              }
            } else {
              for (var s = 0; s < o.changes.length; ++s) {
                var c = o.changes[s];
                if (r < c.from.line) c.from = et(c.from.line + n, c.from.ch), c.to = et(c.to.line + n, c.to.ch);else if (t <= c.to.line) {
                  a = !1;
                  break;
                }
              }

              a || (e.splice(0, i + 1), i = 0);
            }
          }
        }

        function yo(e, t) {
          var r = t.from.line,
              n = t.to.line,
              i = t.text.length - (n - r) - 1;
          vo(e.done, r, n, i), vo(e.undone, r, n, i);
        }

        function bo(e, t, r, n) {
          var i = t,
              o = t;
          return "number" == typeof t ? o = Ke(e, at(e, t)) : i = qe(t), null == i ? null : (n(o, i) && e.cm && hn(e.cm, i, r), o);
        }

        function xo(e) {
          this.lines = e, this.parent = null;

          for (var t = 0, r = 0; r < e.length; ++r) {
            e[r].parent = this, t += e[r].height;
          }

          this.height = t;
        }

        function wo(e) {
          this.children = e;

          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            t += i.chunkSize(), r += i.height, i.parent = this;
          }

          this.size = t, this.height = r, this.parent = null;
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
            for (var r = e, n = e + t; r < n; ++r) {
              var i = this.lines[r];
              this.height -= i.height, $t(i), lr(i, "delete");
            }

            this.lines.splice(e, t);
          },
          collapse: function collapse(e) {
            e.push.apply(e, this.lines);
          },
          insertInner: function insertInner(e, t, r) {
            this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));

            for (var n = 0; n < t.length; ++n) {
              t[n].parent = this;
            }
          },
          iterN: function iterN(e, t, r) {
            for (var n = e + t; e < n; ++e) {
              if (r(this.lines[e])) return !0;
            }
          }
        }, wo.prototype = {
          chunkSize: function chunkSize() {
            return this.size;
          },
          removeInner: function removeInner(e, t) {
            this.size -= t;

            for (var r = 0; r < this.children.length; ++r) {
              var n = this.children[r],
                  i = n.chunkSize();

              if (e < i) {
                var o = Math.min(t, i - e),
                    a = n.height;
                if (n.removeInner(e, o), this.height -= a - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
                e = 0;
              } else e -= i;
            }

            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof xo))) {
              var l = [];
              this.collapse(l), this.children = [new xo(l)], this.children[0].parent = this;
            }
          },
          collapse: function collapse(e) {
            for (var t = 0; t < this.children.length; ++t) {
              this.children[t].collapse(e);
            }
          },
          insertInner: function insertInner(e, t, r) {
            this.size += t.length, this.height += r;

            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                  o = i.chunkSize();

              if (e <= o) {
                if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
                  for (var a = i.lines.length % 25 + 25, l = a; l < i.lines.length;) {
                    var s = new xo(i.lines.slice(l, l += 25));
                    i.height -= s.height, this.children.splice(++n, 0, s), s.parent = this;
                  }

                  i.lines = i.lines.slice(0, a), this.maybeSpill();
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
                  var r = H(e.parent.children, e);
                  e.parent.children.splice(r + 1, 0, t);
                } else {
                  var n = new wo(e.children);
                  n.parent = e, e.children = [n, t], e = n;
                }

                t.parent = e.parent;
              } while (e.children.length > 10);

              e.parent.maybeSpill();
            }
          },
          iterN: function iterN(e, t, r) {
            for (var n = 0; n < this.children.length; ++n) {
              var i = this.children[n],
                  o = i.chunkSize();

              if (e < o) {
                var a = Math.min(t, o - e);
                if (i.iterN(e, a, r)) return !0;
                if (0 == (t -= a)) break;
                e = 0;
              } else e -= o;
            }
          }
        };

        var Co = function Co(e, t, r) {
          if (r) for (var n in r) {
            r.hasOwnProperty(n) && (this[n] = r[n]);
          }
          this.doc = e, this.node = t;
        };

        function ko(e, t, r) {
          Vt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && An(e, r);
        }

        Co.prototype.clear = function () {
          var e = this.doc.cm,
              t = this.line.widgets,
              r = this.line,
              n = qe(r);

          if (null != n && t) {
            for (var i = 0; i < t.length; ++i) {
              t[i] == this && t.splice(i--, 1);
            }

            t.length || (r.widgets = null);
            var o = xr(this);
            Ye(r, Math.max(0, r.height - o)), e && (Qn(e, function () {
              ko(e, r, -o), hn(e, n, "widget");
            }), lr(e, "lineWidgetCleared", e, this, n));
          }
        }, Co.prototype.changed = function () {
          var e = this,
              t = this.height,
              r = this.doc.cm,
              n = this.line;
          this.height = null;
          var i = xr(this) - t;
          i && (Rt(this.doc, n) || Ye(n, n.height + i), r && Qn(r, function () {
            r.curOp.forceUpdate = !0, ko(r, n, i), lr(r, "lineWidgetChanged", r, e, qe(n));
          }));
        }, ye(Co);

        var So = 0,
            Mo = function Mo(e, t) {
          this.lines = [], this.type = t, this.doc = e, this.id = ++So;
        };

        function Lo(e, t, r, n, i) {
          if (n && n.shared) return function (e, t, r, n, i) {
            (n = F(n)).shared = !1;
            var o = [Lo(e, t, r, n, i)],
                a = o[0],
                l = n.widgetNode;
            return Wi(e, function (e) {
              l && (n.widgetNode = l.cloneNode(!0)), o.push(Lo(e, lt(e, t), lt(e, r), n, i));

              for (var s = 0; s < e.linked.length; ++s) {
                if (e.linked[s].isParent) return;
              }

              a = X(o);
            }), new To(o, a);
          }(e, t, r, n, i);
          if (e.cm && !e.cm.curOp) return ei(e.cm, Lo)(e, t, r, n, i);
          var o = new Mo(e, i),
              a = tt(t, r);
          if (n && F(n, o, !1), a > 0 || 0 == a && !1 !== o.clearWhenEmpty) return o;

          if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
            if (Ft(e, t.line, t, r, o) || t.line != r.line && Ft(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
            Ct = !0;
          }

          o.addToHistory && Hi(e, {
            from: t,
            to: r,
            origin: "markText"
          }, e.sel, NaN);
          var l,
              s = t.line,
              c = e.cm;

          if (e.iter(s, r.line + 1, function (n) {
            c && o.collapsed && !c.options.lineWrapping && jt(n) == c.display.maxLine && (l = !0), o.collapsed && s != t.line && Ye(n, 0), function (e, t, r) {
              var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()));
              n && n.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], n && n.add(e.markedSpans)), t.marker.attachLine(e);
            }(n, new kt(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null), e.cm && e.cm.curOp), ++s;
          }), o.collapsed && e.iter(t.line, r.line + 1, function (t) {
            Rt(e, t) && Ye(t, 0);
          }), o.clearOnEnter && de(o, "beforeCursorEnter", function () {
            return o.clear();
          }), o.readOnly && (wt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++So, o.atomic = !0), c) {
            if (l && (c.curOp.updateMaxLine = !0), o.collapsed) dn(c, t.line, r.line + 1);else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var u = t.line; u <= r.line; u++) {
              hn(c, u, "text");
            }
            o.atomic && ro(c.doc), lr(c, "markerAdded", c, o);
          }

          return o;
        }

        Mo.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
                t = e && !e.curOp;

            if (t && Kn(e), ve(this, "clear")) {
              var r = this.find();
              r && lr(this, "clear", r.from, r.to);
            }

            for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
              var a = this.lines[o],
                  l = St(a.markedSpans, this);
              e && !this.collapsed ? hn(e, qe(a), "text") : e && (null != l.to && (i = qe(a)), null != l.from && (n = qe(a))), a.markedSpans = Mt(a.markedSpans, l), null == l.from && this.collapsed && !Rt(this.doc, a) && e && Ye(a, rn(e.display));
            }

            if (e && this.collapsed && !e.options.lineWrapping) for (var s = 0; s < this.lines.length; ++s) {
              var c = jt(this.lines[s]),
                  u = Ut(c);
              u > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = u, e.display.maxLineChanged = !0);
            }
            null != n && e && this.collapsed && dn(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && ro(e.doc)), e && lr(e, "markerCleared", e, this, n, i), t && $n(e), this.parent && this.parent.clear();
          }
        }, Mo.prototype.find = function (e, t) {
          var r, n;
          null == e && "bookmark" == this.type && (e = 1);

          for (var i = 0; i < this.lines.length; ++i) {
            var o = this.lines[i],
                a = St(o.markedSpans, this);
            if (null != a.from && (r = et(t ? o : qe(o), a.from), -1 == e)) return r;
            if (null != a.to && (n = et(t ? o : qe(o), a.to), 1 == e)) return n;
          }

          return r && {
            from: r,
            to: n
          };
        }, Mo.prototype.changed = function () {
          var e = this,
              t = this.find(-1, !0),
              r = this,
              n = this.doc.cm;
          t && n && Qn(n, function () {
            var i = t.line,
                o = qe(t.line),
                a = Ar(n, o);

            if (a && (Fr(a), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !Rt(r.doc, i) && null != r.height) {
              var l = r.height;
              r.height = null;
              var s = xr(r) - l;
              s && Ye(i, i.height + s);
            }

            lr(n, "markerChanged", n, e);
          });
        }, Mo.prototype.attachLine = function (e) {
          if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != H(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
          }

          this.lines.push(e);
        }, Mo.prototype.detachLine = function (e) {
          if (this.lines.splice(H(this.lines, e), 1), !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
          }
        }, ye(Mo);

        var To = function To(e, t) {
          this.markers = e, this.primary = t;

          for (var r = 0; r < e.length; ++r) {
            e[r].parent = this;
          }
        };

        function _o(e) {
          return e.findMarks(et(e.first, 0), e.clipPos(et(e.lastLine())), function (e) {
            return e.parent;
          });
        }

        function Oo(e) {
          for (var t = function t(_t2) {
            var r = e[_t2],
                n = [r.primary.doc];
            Wi(r.primary.doc, function (e) {
              return n.push(e);
            });

            for (var i = 0; i < r.markers.length; i++) {
              var o = r.markers[i];
              -1 == H(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1));
            }
          }, r = 0; r < e.length; r++) {
            t(r);
          }
        }

        To.prototype.clear = function () {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;

            for (var e = 0; e < this.markers.length; ++e) {
              this.markers[e].clear();
            }

            lr(this, "clear");
          }
        }, To.prototype.find = function (e, t) {
          return this.primary.find(e, t);
        }, ye(To);

        var Ao = 0,
            No = function No(e, t, r, n, i) {
          if (!(this instanceof No)) return new No(e, t, r, n, i);
          null == r && (r = 0), wo.call(this, [new xo([new Kt("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
          var o = et(r, 0);
          this.sel = Mi(o), this.history = new Fi(null), this.id = ++Ao, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Ei(this, {
            from: o,
            to: o,
            text: e
          }), Qi(this, Mi(o), B);
        };

        No.prototype = Z(wo.prototype, {
          constructor: No,
          iter: function iter(e, t, r) {
            r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function insert(e, t) {
            for (var r = 0, n = 0; n < t.length; ++n) {
              r += t[n].height;
            }

            this.insertInner(e - this.first, t, r);
          },
          remove: function remove(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function getValue(e) {
            var t = Xe(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: ri(function (e) {
            var t = et(this.first, 0),
                r = this.first + this.size - 1;
            co(this, {
              from: t,
              to: et(r, Ke(this, r).text.length),
              text: this.splitLines(e),
              origin: "setValue",
              full: !0
            }, !0), this.cm && Dn(this.cm, 0, 0), Qi(this, Mi(t), B);
          }),
          replaceRange: function replaceRange(e, t, r, n) {
            go(this, e, t = lt(this, t), r = r ? lt(this, r) : t, n);
          },
          getRange: function getRange(e, t, r) {
            var n = $e(this, lt(this, e), lt(this, t));
            return !1 === r ? n : "" === r ? n.join("") : n.join(r || this.lineSeparator());
          },
          getLine: function getLine(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function getLineHandle(e) {
            if (Je(this, e)) return Ke(this, e);
          },
          getLineNumber: function getLineNumber(e) {
            return qe(e);
          },
          getLineHandleVisualStart: function getLineHandleVisualStart(e) {
            return "number" == typeof e && (e = Ke(this, e)), jt(e);
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
            return lt(this, e);
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
          setCursor: ri(function (e, t, r) {
            Zi(this, lt(this, "number" == typeof e ? et(e, t || 0) : e), null, r);
          }),
          setSelection: ri(function (e, t, r) {
            Zi(this, lt(this, e), lt(this, t || e), r);
          }),
          extendSelection: ri(function (e, t, r) {
            Xi(this, lt(this, e), t && lt(this, t), r);
          }),
          extendSelections: ri(function (e, t) {
            Yi(this, st(this, e), t);
          }),
          extendSelectionsBy: ri(function (e, t) {
            Yi(this, st(this, Y(this.sel.ranges, e)), t);
          }),
          setSelections: ri(function (e, t, r) {
            if (e.length) {
              for (var n = [], i = 0; i < e.length; i++) {
                n[i] = new ki(lt(this, e[i].anchor), lt(this, e[i].head || e[i].anchor));
              }

              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Qi(this, Si(this.cm, n, t), r);
            }
          }),
          addSelection: ri(function (e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new ki(lt(this, e), lt(this, t || e))), Qi(this, Si(this.cm, n, n.length - 1), r);
          }),
          getSelection: function getSelection(e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = $e(this, r[n].from(), r[n].to());
              t = t ? t.concat(i) : i;
            }

            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function getSelections(e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = $e(this, r[n].from(), r[n].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i;
            }

            return t;
          },
          replaceSelection: function replaceSelection(e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++) {
              n[i] = e;
            }

            this.replaceSelections(n, t, r || "+input");
          },
          replaceSelections: ri(function (e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var a = i.ranges[o];
              n[o] = {
                from: a.from(),
                to: a.to(),
                text: this.splitLines(e[o]),
                origin: r
              };
            }

            for (var l = t && "end" != t && function (e, t, r) {
              for (var n = [], i = et(e.first, 0), o = i, a = 0; a < t.length; a++) {
                var l = t[a],
                    s = Oi(l.from, i, o),
                    c = Oi(Li(l), i, o);

                if (i = l.to, o = c, "around" == r) {
                  var u = e.sel.ranges[a],
                      d = tt(u.head, u.anchor) < 0;
                  n[a] = new ki(d ? c : s, d ? s : c);
                } else n[a] = new ki(s, s);
              }

              return new Ci(n, e.sel.primIndex);
            }(this, n, t), s = n.length - 1; s >= 0; s--) {
              co(this, n[s]);
            }

            l ? Ji(this, l) : this.cm && Nn(this.cm);
          }),
          undo: ri(function () {
            ho(this, "undo");
          }),
          redo: ri(function () {
            ho(this, "redo");
          }),
          undoSelection: ri(function () {
            ho(this, "undo", !0);
          }),
          redoSelection: ri(function () {
            ho(this, "redo", !0);
          }),
          setExtending: function setExtending(e) {
            this.extend = e;
          },
          getExtending: function getExtending() {
            return this.extend;
          },
          historySize: function historySize() {
            for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) {
              e.done[n].ranges || ++t;
            }

            for (var i = 0; i < e.undone.length; i++) {
              e.undone[i].ranges || ++r;
            }

            return {
              undo: t,
              redo: r
            };
          },
          clearHistory: function clearHistory() {
            var e = this;
            this.history = new Fi(this.history), Wi(this, function (t) {
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
              done: Ki(this.history.done),
              undone: Ki(this.history.undone)
            };
          },
          setHistory: function setHistory(e) {
            var t = this.history = new Fi(this.history);
            t.done = Ki(e.done.slice(0), null, !0), t.undone = Ki(e.undone.slice(0), null, !0);
          },
          setGutterMarker: ri(function (e, t, r) {
            return bo(this, e, "gutter", function (e) {
              var n = e.gutterMarkers || (e.gutterMarkers = {});
              return n[t] = r, !r && te(n) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: ri(function (e) {
            var t = this;
            this.iter(function (r) {
              r.gutterMarkers && r.gutterMarkers[e] && bo(t, r, "gutter", function () {
                return r.gutterMarkers[e] = null, te(r.gutterMarkers) && (r.gutterMarkers = null), !0;
              });
            });
          }),
          lineInfo: function lineInfo(e) {
            var t;

            if ("number" == typeof e) {
              if (!Je(this, e)) return null;
              if (t = e, !(e = Ke(this, e))) return null;
            } else if (null == (t = qe(e))) return null;

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
          addLineClass: ri(function (e, t, r) {
            return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";

              if (e[n]) {
                if (S(r).test(e[n])) return !1;
                e[n] += " " + r;
              } else e[n] = r;

              return !0;
            });
          }),
          removeLineClass: ri(function (e, t, r) {
            return bo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
              var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                  i = e[n];
              if (!i) return !1;
              if (null == r) e[n] = null;else {
                var o = i.match(S(r));
                if (!o) return !1;
                var a = o.index + o[0].length;
                e[n] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null;
              }
              return !0;
            });
          }),
          addLineWidget: ri(function (e, t, r) {
            return function (e, t, r, n) {
              var i = new Co(e, r, n),
                  o = e.cm;
              return o && i.noHScroll && (o.display.alignWidgets = !0), bo(e, t, "widget", function (t) {
                var r = t.widgets || (t.widgets = []);

                if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Rt(e, t)) {
                  var n = Vt(t) < e.scrollTop;
                  Ye(t, t.height + xr(i)), n && An(o, i.height), o.curOp.forceUpdate = !0;
                }

                return !0;
              }), o && lr(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : qe(t)), i;
            }(this, e, t, r);
          }),
          removeLineWidget: function removeLineWidget(e) {
            e.clear();
          },
          markText: function markText(e, t, r) {
            return Lo(this, lt(this, e), lt(this, t), r, r && r.type || "range");
          },
          setBookmark: function setBookmark(e, t) {
            var r = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents
            };
            return Lo(this, e = lt(this, e), e, r, "bookmark");
          },
          findMarksAt: function findMarksAt(e) {
            var t = [],
                r = Ke(this, (e = lt(this, e)).line).markedSpans;
            if (r) for (var n = 0; n < r.length; ++n) {
              var i = r[n];
              (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
            return t;
          },
          findMarks: function findMarks(e, t, r) {
            e = lt(this, e), t = lt(this, t);
            var n = [],
                i = e.line;
            return this.iter(e.line, t.line + 1, function (o) {
              var a = o.markedSpans;
              if (a) for (var l = 0; l < a.length; l++) {
                var s = a[l];
                null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker);
              }
              ++i;
            }), n;
          },
          getAllMarks: function getAllMarks() {
            var e = [];
            return this.iter(function (t) {
              var r = t.markedSpans;
              if (r) for (var n = 0; n < r.length; ++n) {
                null != r[n].from && e.push(r[n].marker);
              }
            }), e;
          },
          posFromIndex: function posFromIndex(e) {
            var t,
                r = this.first,
                n = this.lineSeparator().length;
            return this.iter(function (i) {
              var o = i.text.length + n;
              if (o > e) return t = e, !0;
              e -= o, ++r;
            }), lt(this, et(r, t));
          },
          indexFromPos: function indexFromPos(e) {
            var t = (e = lt(this, e)).ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var r = this.lineSeparator().length;
            return this.iter(this.first, e.line, function (e) {
              t += e.text.length + r;
            }), t;
          },
          copy: function copy(e) {
            var t = new No(Xe(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
          },
          linkedDoc: function linkedDoc(e) {
            e || (e = {});
            var t = this.first,
                r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
            var n = new No(Xe(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
            return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
              doc: n,
              sharedHist: e.sharedHist
            }), n.linked = [{
              doc: this,
              isParent: !0,
              sharedHist: e.sharedHist
            }], function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r],
                    i = n.find(),
                    o = e.clipPos(i.from),
                    a = e.clipPos(i.to);

                if (tt(o, a)) {
                  var l = Lo(e, o, a, n.primary, n.primary.type);
                  n.markers.push(l), l.parent = n;
                }
              }
            }(n, _o(this)), n;
          },
          unlinkDoc: function unlinkDoc(e) {
            if (e instanceof Ta && (e = e.doc), this.linked) for (var t = 0; t < this.linked.length; ++t) {
              if (this.linked[t].doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Oo(_o(this));
                break;
              }
            }

            if (e.history == this.history) {
              var r = [e.id];
              Wi(e, function (e) {
                return r.push(e.id);
              }, !0), e.history = new Fi(null), e.history.done = Ki(this.history.done, r), e.history.undone = Ki(this.history.undone, r);
            }
          },
          iterLinkedDocs: function iterLinkedDocs(e) {
            Wi(this, e);
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
          setDirection: ri(function (e) {
            var t;
            "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
              return e.order = null;
            }), this.cm && Qn(t = this.cm, function () {
              Ii(t), dn(t);
            }));
          })
        }), No.prototype.eachLine = No.prototype.iter;
        var Do = 0;

        function Eo(e) {
          var t = this;

          if (Wo(t), !ge(t, e) && !wr(t.display, e)) {
            be(e), a && (Do = +new Date());
            var r = cn(t, e, !0),
                n = e.dataTransfer.files;
            if (r && !t.isReadOnly()) if (n && n.length && window.FileReader && window.File) for (var i = n.length, o = Array(i), l = 0, s = function s() {
              ++l == i && ei(t, function () {
                var e = {
                  from: r = lt(t.doc, r),
                  to: r,
                  text: t.doc.splitLines(o.filter(function (e) {
                    return null != e;
                  }).join(t.doc.lineSeparator())),
                  origin: "paste"
                };
                co(t.doc, e), Ji(t.doc, Mi(lt(t.doc, r), lt(t.doc, Li(e))));
              })();
            }, c = function c(e, r) {
              if (t.options.allowDropFileTypes && -1 == H(t.options.allowDropFileTypes, e.type)) s();else {
                var n = new FileReader();
                n.onerror = function () {
                  return s();
                }, n.onload = function () {
                  var e = n.result;
                  /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[r] = e), s();
                }, n.readAsText(e);
              }
            }, u = 0; u < n.length; u++) {
              c(n[u], u);
            } else {
              if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout(function () {
                return t.display.input.focus();
              }, 20);

              try {
                var d = e.dataTransfer.getData("Text");

                if (d) {
                  var h;
                  if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), eo(t.doc, Mi(r, r)), h) for (var f = 0; f < h.length; ++f) {
                    go(t.doc, "", h[f].anchor, h[f].head, "drag");
                  }
                  t.replaceSelection(d, "around", "paste"), t.display.input.focus();
                }
              } catch (e) {}
            }
          }
        }

        function Wo(e) {
          e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
        }

        function Po(e) {
          if (document.getElementsByClassName) {
            for (var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) {
              var i = t[n].CodeMirror;
              i && r.push(i);
            }

            r.length && r[0].operation(function () {
              for (var t = 0; t < r.length; t++) {
                e(r[t]);
              }
            });
          }
        }

        var Io = !1;

        function Fo() {
          var e;
          Io || (de(window, "resize", function () {
            null == e && (e = setTimeout(function () {
              e = null, Po(jo);
            }, 100));
          }), de(window, "blur", function () {
            return Po(Mn);
          }), Io = !0);
        }

        function jo(e) {
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
        }, Ho = 0; Ho < 10; Ho++) {
          zo[Ho + 48] = zo[Ho + 96] = String(Ho);
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
              r,
              n,
              i,
              o = e.split(/-(?!$)/);
          e = o[o.length - 1];

          for (var a = 0; a < o.length - 1; a++) {
            var l = o[a];
            if (/^(cmd|meta|m)$/i.test(l)) i = !0;else if (/^a(lt)?$/i.test(l)) t = !0;else if (/^(c|ctrl|control)$/i.test(l)) r = !0;else {
              if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
              n = !0;
            }
          }

          return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e;
        }

        function Go(e) {
          var t = {};

          for (var r in e) {
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;

              if ("..." == n) {
                delete e[r];
                continue;
              }

              for (var i = Y(r.split(" "), Uo), o = 0; o < i.length; o++) {
                var a = void 0,
                    l = void 0;
                o == i.length - 1 ? (l = i.join(" "), a = n) : (l = i.slice(0, o + 1).join(" "), a = "...");
                var s = t[l];

                if (s) {
                  if (s != a) throw new Error("Inconsistent bindings for " + l);
                } else t[l] = a;
              }

              delete e[r];
            }
          }

          for (var c in t) {
            e[c] = t[c];
          }

          return e;
        }

        function Ko(e, t, r, n) {
          var i = (t = qo(t)).call ? t.call(e, n) : t[e];
          if (!1 === i) return "nothing";
          if ("..." === i) return "multi";
          if (null != i && r(i)) return "handled";

          if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Ko(e, t.fallthrough, r, n);

            for (var o = 0; o < t.fallthrough.length; o++) {
              var a = Ko(e, t.fallthrough[o], r, n);
              if (a) return a;
            }
          }
        }

        function $o(e) {
          var t = "string" == typeof e ? e : zo[e.keyCode];
          return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
        }

        function Xo(e, t, r) {
          var n = e;
          return t.altKey && "Alt" != n && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Mod" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e;
        }

        function Yo(e, t) {
          if (d && 34 == e.keyCode && e.char) return !1;
          var r = zo[e.keyCode];
          return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Xo(r, e, t));
        }

        function qo(e) {
          return "string" == typeof e ? Vo[e] : e;
        }

        function Zo(e, t) {
          for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            for (var o = t(r[i]); n.length && tt(o.from, X(n).to) <= 0;) {
              var a = n.pop();

              if (tt(a.from, o.from) < 0) {
                o.from = a.from;
                break;
              }
            }

            n.push(o);
          }

          Qn(e, function () {
            for (var t = n.length - 1; t >= 0; t--) {
              go(e.doc, "", n[t].from, n[t].to, "+delete");
            }

            Nn(e);
          });
        }

        function Jo(e, t, r) {
          var n = ie(e.text, t + r, r);
          return n < 0 || n > e.text.length ? null : n;
        }

        function Qo(e, t, r) {
          var n = Jo(e, t.ch, r);
          return null == n ? null : new et(t.line, n, r < 0 ? "after" : "before");
        }

        function ea(e, t, r, n, i) {
          if (e) {
            "rtl" == t.doc.direction && (i = -i);
            var o = ce(r, t.doc.direction);

            if (o) {
              var a,
                  l = i < 0 ? X(o) : o[0],
                  s = i < 0 == (1 == l.level) ? "after" : "before";

              if (l.level > 0 || "rtl" == t.doc.direction) {
                var c = Nr(t, r);
                a = i < 0 ? r.text.length - 1 : 0;
                var u = Dr(t, c, a).top;
                a = oe(function (e) {
                  return Dr(t, c, e).top == u;
                }, i < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == s && (a = Jo(r, a, 1));
              } else a = i < 0 ? l.to : l.from;

              return new et(n, a, s);
            }
          }

          return new et(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after");
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
        var ta = {
          selectAll: lo,
          singleSelection: function singleSelection(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), B);
          },
          killLine: function killLine(e) {
            return Zo(e, function (t) {
              if (t.empty()) {
                var r = Ke(e.doc, t.head.line).text.length;
                return t.head.ch == r && t.head.line < e.lastLine() ? {
                  from: t.head,
                  to: et(t.head.line + 1, 0)
                } : {
                  from: t.head,
                  to: et(t.head.line, r)
                };
              }

              return {
                from: t.from(),
                to: t.to()
              };
            });
          },
          deleteLine: function deleteLine(e) {
            return Zo(e, function (t) {
              return {
                from: et(t.from().line, 0),
                to: lt(e.doc, et(t.to().line + 1, 0))
              };
            });
          },
          delLineLeft: function delLineLeft(e) {
            return Zo(e, function (e) {
              return {
                from: et(e.from().line, 0),
                to: e.from()
              };
            });
          },
          delWrappedLineLeft: function delWrappedLineLeft(e) {
            return Zo(e, function (t) {
              var r = e.charCoords(t.head, "div").top + 5;
              return {
                from: e.coordsChar({
                  left: 0,
                  top: r
                }, "div"),
                to: t.from()
              };
            });
          },
          delWrappedLineRight: function delWrappedLineRight(e) {
            return Zo(e, function (t) {
              var r = e.charCoords(t.head, "div").top + 5,
                  n = e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: r
              }, "div");
              return {
                from: t.from(),
                to: n
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
              return ra(e, t.head.line);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineStartSmart: function goLineStartSmart(e) {
            return e.extendSelectionsBy(function (t) {
              return na(e, t.head);
            }, {
              origin: "+move",
              bias: 1
            });
          },
          goLineEnd: function goLineEnd(e) {
            return e.extendSelectionsBy(function (t) {
              return function (e, t) {
                var r = Ke(e.doc, t),
                    n = function (e) {
                  for (var t; t = Pt(e);) {
                    e = t.find(1, !0).line;
                  }

                  return e;
                }(r);

                return n != r && (t = qe(n)), ea(!0, e, r, t, -1);
              }(e, t.head.line);
            }, {
              origin: "+move",
              bias: -1
            });
          },
          goLineRight: function goLineRight(e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: e.display.lineDiv.offsetWidth + 100,
                top: r
              }, "div");
            }, U);
          },
          goLineLeft: function goLineLeft(e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5;
              return e.coordsChar({
                left: 0,
                top: r
              }, "div");
            }, U);
          },
          goLineLeftSmart: function goLineLeftSmart(e) {
            return e.extendSelectionsBy(function (t) {
              var r = e.cursorCoords(t.head, "div").top + 5,
                  n = e.coordsChar({
                left: 0,
                top: r
              }, "div");
              return n.ch < e.getLine(n.line).search(/\S/) ? na(e, t.head) : n;
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
            for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
              var o = r[i].from(),
                  a = j(e.getLine(o.line), o.ch, n);
              t.push($(n - a % n));
            }

            e.replaceSelections(t);
          },
          defaultTab: function defaultTab(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
          },
          transposeChars: function transposeChars(e) {
            return Qn(e, function () {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++) {
                if (t[n].empty()) {
                  var i = t[n].head,
                      o = Ke(e.doc, i.line).text;
                  if (o) if (i.ch == o.length && (i = new et(i.line, i.ch - 1)), i.ch > 0) i = new et(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), et(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
                    var a = Ke(e.doc, i.line - 1).text;
                    a && (i = new et(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), et(i.line - 1, a.length - 1), i, "+transpose"));
                  }
                  r.push(new ki(i, i));
                }
              }

              e.setSelections(r);
            });
          },
          newlineAndIndent: function newlineAndIndent(e) {
            return Qn(e, function () {
              for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--) {
                e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
              }

              t = e.listSelections();

              for (var n = 0; n < t.length; n++) {
                e.indentLine(t[n].from().line, null, !0);
              }

              Nn(e);
            });
          },
          openLine: function openLine(e) {
            return e.replaceSelection("\n", "start");
          },
          toggleOverwrite: function toggleOverwrite(e) {
            return e.toggleOverwrite();
          }
        };

        function ra(e, t) {
          var r = Ke(e.doc, t),
              n = jt(r);
          return n != r && (t = qe(n)), ea(!0, e, n, t, 1);
        }

        function na(e, t) {
          var r = ra(e, t.line),
              n = Ke(e.doc, r.line),
              i = ce(n, e.doc.direction);

          if (!i || 0 == i[0].level) {
            var o = Math.max(r.ch, n.text.search(/\S/)),
                a = t.line == r.line && t.ch <= o && t.ch;
            return et(r.line, a ? 0 : o, r.sticky);
          }

          return r;
        }

        function ia(e, t, r) {
          if ("string" == typeof t && !(t = ta[t])) return !1;
          e.display.input.ensurePolled();
          var n = e.display.shift,
              i = !1;

          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != R;
          } finally {
            e.display.shift = n, e.state.suppressEdits = !1;
          }

          return i;
        }

        var oa = new z();

        function aa(e, t, r, n) {
          var i = e.state.keySeq;

          if (i) {
            if ($o(t)) return "handled";
            if (/\'$/.test(t) ? e.state.keySeq = null : oa.set(50, function () {
              e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
            }), la(e, i + " " + t, r, n)) return !0;
          }

          return la(e, t, r, n);
        }

        function la(e, t, r, n) {
          var i = function (e, t, r) {
            for (var n = 0; n < e.state.keyMaps.length; n++) {
              var i = Ko(t, e.state.keyMaps[n], r, e);
              if (i) return i;
            }

            return e.options.extraKeys && Ko(t, e.options.extraKeys, r, e) || Ko(t, e.options.keyMap, r, e);
          }(e, t, n);

          return "multi" == i && (e.state.keySeq = t), "handled" == i && lr(e, "keyHandled", e, t, r), "handled" != i && "multi" != i || (be(r), wn(e)), !!i;
        }

        function sa(e, t) {
          var r = Yo(t, !0);
          return !!r && (t.shiftKey && !e.state.keySeq ? aa(e, "Shift-" + r, t, function (t) {
            return ia(e, t, !0);
          }) || aa(e, r, t, function (t) {
            if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ia(e, t);
          }) : aa(e, r, t, function (t) {
            return ia(e, t);
          }));
        }

        var ca = null;

        function ua(e) {
          var t = this;

          if (!(e.target && e.target != t.display.input.getField() || (t.curOp.focus = D(), ge(t, e)))) {
            a && l < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var i = sa(t, e);
            d && (ca = i ? n : null, i || 88 != n || Ee || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), r && !y && !i && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function (e) {
              var t = e.display.lineDiv;

              function r(e) {
                18 != e.keyCode && e.altKey || (L(t, "CodeMirror-crosshair"), fe(document, "keyup", r), fe(document, "mouseover", r));
              }

              E(t, "CodeMirror-crosshair"), de(document, "keyup", r), de(document, "mouseover", r);
            }(t);
          }
        }

        function da(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ge(this, e);
        }

        function ha(e) {
          var t = this;

          if (!(e.target && e.target != t.display.input.getField() || wr(t.display, e) || ge(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
            var r = e.keyCode,
                n = e.charCode;
            if (d && r == ca) return ca = null, void be(e);

            if (!d || e.which && !(e.which < 10) || !sa(t, e)) {
              var i = String.fromCharCode(null == n ? r : n);
              "\b" != i && (function (e, t, r) {
                return aa(e, "'" + r + "'", t, function (t) {
                  return ia(e, t, !0);
                });
              }(t, e, i) || t.display.input.onKeyPress(e));
            }
          }
        }

        var fa,
            pa,
            ga = function ga(e, t, r) {
          this.time = e, this.pos = t, this.button = r;
        };

        function ma(e) {
          var t = this,
              r = t.display;
          if (!(ge(t, e) || r.activeTouch && r.input.supportsTouch())) if (r.input.ensurePolled(), r.shift = e.shiftKey, wr(r, e)) s || (r.scroller.draggable = !1, setTimeout(function () {
            return r.scroller.draggable = !0;
          }, 100));else if (!ba(t, e)) {
            var n = cn(t, e),
                i = Se(e),
                o = n ? function (e, t) {
              var r = +new Date();
              return pa && pa.compare(r, e, t) ? (fa = pa = null, "triple") : fa && fa.compare(r, e, t) ? (pa = new ga(r, e, t), fa = null, "double") : (fa = new ga(r, e, t), pa = null, "single");
            }(n, i) : "single";
            window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), n && function (e, t, r, n, i) {
              var o = "Click";
              return "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o), aa(e, Xo(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function (t) {
                if ("string" == typeof t && (t = ta[t]), !t) return !1;
                var n = !1;

                try {
                  e.isReadOnly() && (e.state.suppressEdits = !0), n = t(e, r) != R;
                } finally {
                  e.state.suppressEdits = !1;
                }

                return n;
              });
            }(t, i, n, o, e) || (1 == i ? n ? function (e, t, r, n) {
              a ? setTimeout(I(Cn, e), 0) : e.curOp.focus = D();

              var i,
                  o = function (e, t, r) {
                var n = e.getOption("configureMouse"),
                    i = n ? n(e, t, r) : {};

                if (null == i.unit) {
                  var o = b ? r.shiftKey && r.metaKey : r.altKey;
                  i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                }

                return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey), null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)), i;
              }(e, r, n),
                  c = e.doc.sel;

              e.options.dragDrop && Te && !e.isReadOnly() && "single" == r && (i = c.contains(t)) > -1 && (tt((i = c.ranges[i]).from(), t) < 0 || t.xRel > 0) && (tt(i.to(), t) > 0 || t.xRel < 0) ? function (e, t, r, n) {
                var i = e.display,
                    o = !1,
                    c = ei(e, function (t) {
                  s && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : kn(e)), fe(i.wrapper.ownerDocument, "mouseup", c), fe(i.wrapper.ownerDocument, "mousemove", u), fe(i.scroller, "dragstart", d), fe(i.scroller, "drop", c), o || (be(t), n.addNew || Xi(e.doc, r, null, null, n.extend), s && !h || a && 9 == l ? setTimeout(function () {
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

                s && (i.scroller.draggable = !0), e.state.draggingText = c, c.copy = !n.moveOnDrag, de(i.wrapper.ownerDocument, "mouseup", c), de(i.wrapper.ownerDocument, "mousemove", u), de(i.scroller, "dragstart", d), de(i.scroller, "drop", c), e.state.delayingBlurEvent = !0, setTimeout(function () {
                  return i.input.focus();
                }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
              }(e, n, t, o) : function (e, t, r, n) {
                a && kn(e);
                var i = e.display,
                    o = e.doc;
                be(t);
                var l,
                    s,
                    c = o.sel,
                    u = c.ranges;
                if (n.addNew && !n.extend ? (s = o.sel.contains(r), l = s > -1 ? u[s] : new ki(r, r)) : (l = o.sel.primary(), s = o.sel.primIndex), "rectangle" == n.unit) n.addNew || (l = new ki(r, r)), r = cn(e, t, !0, !0), s = -1;else {
                  var d = va(e, r, n.unit);
                  l = n.extend ? $i(l, d.anchor, d.head, n.extend) : d;
                }
                n.addNew ? -1 == s ? (s = u.length, Qi(o, Si(e, u.concat([l]), s), {
                  scroll: !1,
                  origin: "*mouse"
                })) : u.length > 1 && u[s].empty() && "char" == n.unit && !n.extend ? (Qi(o, Si(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                  scroll: !1,
                  origin: "*mouse"
                }), c = o.sel) : qi(o, s, l, V) : (s = 0, Qi(o, new Ci([l], 0), V), c = o.sel);
                var h = r;

                function f(t) {
                  if (0 != tt(h, t)) if (h = t, "rectangle" == n.unit) {
                    for (var i = [], a = e.options.tabSize, u = j(Ke(o, r.line).text, r.ch, a), d = j(Ke(o, t.line).text, t.ch, a), f = Math.min(u, d), p = Math.max(u, d), g = Math.min(r.line, t.line), m = Math.min(e.lastLine(), Math.max(r.line, t.line)); g <= m; g++) {
                      var v = Ke(o, g).text,
                          y = G(v, f, a);
                      f == p ? i.push(new ki(et(g, y), et(g, y))) : v.length > y && i.push(new ki(et(g, y), et(g, G(v, p, a))));
                    }

                    i.length || i.push(new ki(r, r)), Qi(o, Si(e, c.ranges.slice(0, s).concat(i), s), {
                      origin: "*mouse",
                      scroll: !1
                    }), e.scrollIntoView(t);
                  } else {
                    var b,
                        x = l,
                        w = va(e, t, n.unit),
                        C = x.anchor;
                    tt(w.anchor, C) > 0 ? (b = w.head, C = ot(x.from(), w.anchor)) : (b = w.anchor, C = it(x.to(), w.head));
                    var k = c.ranges.slice(0);
                    k[s] = function (e, t) {
                      var r = t.anchor,
                          n = t.head,
                          i = Ke(e.doc, r.line);
                      if (0 == tt(r, n) && r.sticky == n.sticky) return t;
                      var o = ce(i);
                      if (!o) return t;
                      var a = le(o, r.ch, r.sticky),
                          l = o[a];
                      if (l.from != r.ch && l.to != r.ch) return t;
                      var s,
                          c = a + (l.from == r.ch == (1 != l.level) ? 0 : 1);
                      if (0 == c || c == o.length) return t;
                      if (n.line != r.line) s = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;else {
                        var u = le(o, n.ch, n.sticky),
                            d = u - a || (n.ch - r.ch) * (1 == l.level ? -1 : 1);
                        s = u == c - 1 || u == c ? d < 0 : d > 0;
                      }
                      var h = o[c + (s ? -1 : 0)],
                          f = s == (1 == h.level),
                          p = f ? h.from : h.to,
                          g = f ? "after" : "before";
                      return r.ch == p && r.sticky == g ? t : new ki(new et(r.line, p, g), n);
                    }(e, new ki(lt(o, C), b)), Qi(o, Si(e, k, s), V);
                  }
                }

                var p = i.wrapper.getBoundingClientRect(),
                    g = 0;

                function m(t) {
                  var r = ++g,
                      a = cn(e, t, !0, "rectangle" == n.unit);
                  if (a) if (0 != tt(a, h)) {
                    e.curOp.focus = D(), f(a);

                    var l = _n(i, o);

                    (a.line >= l.to || a.line < l.from) && setTimeout(ei(e, function () {
                      g == r && m(t);
                    }), 150);
                  } else {
                    var s = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                    s && setTimeout(ei(e, function () {
                      g == r && (i.scroller.scrollTop += s, m(t));
                    }), 50);
                  }
                }

                function v(t) {
                  e.state.selectingText = !1, g = 1 / 0, t && (be(t), i.input.focus()), fe(i.wrapper.ownerDocument, "mousemove", y), fe(i.wrapper.ownerDocument, "mouseup", b), o.history.lastSelOrigin = null;
                }

                var y = ei(e, function (e) {
                  0 !== e.buttons && Se(e) ? m(e) : v(e);
                }),
                    b = ei(e, v);
                e.state.selectingText = b, de(i.wrapper.ownerDocument, "mousemove", y), de(i.wrapper.ownerDocument, "mouseup", b);
              }(e, n, t, o);
            }(t, n, o, e) : ke(e) == r.scroller && be(e) : 2 == i ? (n && Xi(t.doc, n), setTimeout(function () {
              return r.input.focus();
            }, 20)) : 3 == i && (k ? t.display.input.onContextMenu(e) : kn(t)));
          }
        }

        function va(e, t, r) {
          if ("char" == r) return new ki(t, t);
          if ("word" == r) return e.findWordAt(t);
          if ("line" == r) return new ki(et(t.line, 0), lt(e.doc, et(t.line + 1, 0)));
          var n = r(e, t);
          return new ki(n.from, n.to);
        }

        function ya(e, t, r, n) {
          var i, o;
          if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;else try {
            i = t.clientX, o = t.clientY;
          } catch (e) {
            return !1;
          }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          n && be(t);
          var a = e.display,
              l = a.lineDiv.getBoundingClientRect();
          if (o > l.bottom || !ve(e, r)) return we(t);
          o -= l.top - a.viewOffset;

          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var c = a.gutters.childNodes[s];
            if (c && c.getBoundingClientRect().right >= i) return pe(e, r, e, Ze(e.doc, o), e.display.gutterSpecs[s].className, t), we(t);
          }
        }

        function ba(e, t) {
          return ya(e, t, "gutterClick", !0);
        }

        function xa(e, t) {
          wr(e.display, t) || function (e, t) {
            return !!ve(e, "gutterContextMenu") && ya(e, t, "gutterContextMenu", !1);
          }(e, t) || ge(e, t, "contextmenu") || k || e.display.input.onContextMenu(t);
        }

        function wa(e) {
          e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), zr(e);
        }

        ga.prototype.compare = function (e, t, r) {
          return this.time + 400 > e && 0 == tt(t, this.pos) && r == this.button;
        };

        var Ca = {
          toString: function toString() {
            return "CodeMirror.Init";
          }
        },
            ka = {},
            Sa = {};

        function Ma(e, t, r) {
          if (!t != !(r && r != Ca)) {
            var n = e.display.dragFunctions,
                i = t ? de : fe;
            i(e.display.scroller, "dragstart", n.start), i(e.display.scroller, "dragenter", n.enter), i(e.display.scroller, "dragover", n.over), i(e.display.scroller, "dragleave", n.leave), i(e.display.scroller, "drop", n.drop);
          }
        }

        function La(e) {
          e.options.lineWrapping ? (E(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (L(e.display.wrapper, "CodeMirror-wrap"), Gt(e)), sn(e), dn(e), zr(e), setTimeout(function () {
            return Rn(e);
          }, 100);
        }

        function Ta(e, t) {
          var r = this;
          if (!(this instanceof Ta)) return new Ta(e, t);
          this.options = t = t ? F(t) : {}, F(ka, t, !1);
          var n = t.value;
          "string" == typeof n ? n = new No(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
          var i = new Ta.inputStyles[t.inputStyle](this),
              o = this.display = new mi(e, n, i, t);

          for (var c in o.wrapper.CodeMirror = this, wa(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Un(this), this.state = {
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
          }, t.autofocus && !v && o.input.focus(), a && l < 11 && setTimeout(function () {
            return r.display.input.reset(!0);
          }, 20), function (e) {
            var t = e.display;
            de(t.scroller, "mousedown", ei(e, ma)), de(t.scroller, "dblclick", a && l < 11 ? ei(e, function (t) {
              if (!ge(e, t)) {
                var r = cn(e, t);

                if (r && !ba(e, t) && !wr(e.display, t)) {
                  be(t);
                  var n = e.findWordAt(r);
                  Xi(e.doc, n.anchor, n.head);
                }
              }
            }) : function (t) {
              return ge(e, t) || be(t);
            }), de(t.scroller, "contextmenu", function (t) {
              return xa(e, t);
            }), de(t.input.getField(), "contextmenu", function (r) {
              t.scroller.contains(r.target) || xa(e, r);
            });
            var r,
                n = {
              end: 0
            };

            function i() {
              t.activeTouch && (r = setTimeout(function () {
                return t.activeTouch = null;
              }, 1e3), (n = t.activeTouch).end = +new Date());
            }

            function o(e) {
              if (1 != e.touches.length) return !1;
              var t = e.touches[0];
              return t.radiusX <= 1 && t.radiusY <= 1;
            }

            function s(e, t) {
              if (null == t.left) return !0;
              var r = t.left - e.left,
                  n = t.top - e.top;
              return r * r + n * n > 400;
            }

            de(t.scroller, "touchstart", function (i) {
              if (!ge(e, i) && !o(i) && !ba(e, i)) {
                t.input.ensurePolled(), clearTimeout(r);
                var a = +new Date();
                t.activeTouch = {
                  start: a,
                  moved: !1,
                  prev: a - n.end <= 300 ? n : null
                }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY);
              }
            }), de(t.scroller, "touchmove", function () {
              t.activeTouch && (t.activeTouch.moved = !0);
            }), de(t.scroller, "touchend", function (r) {
              var n = t.activeTouch;

              if (n && !wr(t, r) && null != n.left && !n.moved && new Date() - n.start < 300) {
                var o,
                    a = e.coordsChar(t.activeTouch, "page");
                o = !n.prev || s(n, n.prev) ? new ki(a, a) : !n.prev.prev || s(n, n.prev.prev) ? e.findWordAt(a) : new ki(et(a.line, 0), lt(e.doc, et(a.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), be(r);
              }

              i();
            }), de(t.scroller, "touchcancel", i), de(t.scroller, "scroll", function () {
              t.scroller.clientHeight && (Pn(e, t.scroller.scrollTop), Fn(e, t.scroller.scrollLeft, !0), pe(e, "scroll", e));
            }), de(t.scroller, "mousewheel", function (t) {
              return wi(e, t);
            }), de(t.scroller, "DOMMouseScroll", function (t) {
              return wi(e, t);
            }), de(t.wrapper, "scroll", function () {
              return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
            }), t.dragFunctions = {
              enter: function enter(t) {
                ge(e, t) || Ce(t);
              },
              over: function over(t) {
                ge(e, t) || (function (e, t) {
                  var r = cn(e, t);

                  if (r) {
                    var n = document.createDocumentFragment();
                    yn(e, r, n), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), _(e.display.dragCursor, n);
                  }
                }(e, t), Ce(t));
              },
              start: function start(t) {
                return function (e, t) {
                  if (a && (!e.state.draggingText || +new Date() - Do < 100)) Ce(t);else if (!ge(e, t) && !wr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !h)) {
                    var r = O("img", null, null, "position: fixed; left: 0; top: 0;");
                    r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), d && r.parentNode.removeChild(r);
                  }
                }(e, t);
              },
              drop: ei(e, Eo),
              leave: function leave(t) {
                ge(e, t) || Wo(e);
              }
            };
            var c = t.input.getField();
            de(c, "keyup", function (t) {
              return da.call(e, t);
            }), de(c, "keydown", ei(e, ua)), de(c, "keypress", ei(e, ha)), de(c, "focus", function (t) {
              return Sn(e, t);
            }), de(c, "blur", function (t) {
              return Mn(e, t);
            });
          }(this), Fo(), Kn(this), this.curOp.forceUpdate = !0, Pi(this, n), t.autofocus && !v || this.hasFocus() ? setTimeout(function () {
            r.hasFocus() && !r.state.focused && Sn(r);
          }, 20) : Mn(this), Sa) {
            Sa.hasOwnProperty(c) && Sa[c](this, t[c], Ca);
          }

          hi(this), t.finishInit && t.finishInit(this);

          for (var u = 0; u < _a.length; ++u) {
            _a[u](this);
          }

          $n(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
        }

        Ta.defaults = ka, Ta.optionHandlers = Sa;
        var _a = [];

        function Oa(e, t, r, n) {
          var i,
              o = e.doc;
          null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = ft(e, t).state : r = "prev");
          var a = e.options.tabSize,
              l = Ke(o, t),
              s = j(l.text, null, a);
          l.stateAfter && (l.stateAfter = null);
          var c,
              u = l.text.match(/^\s*/)[0];

          if (n || /\S/.test(l.text)) {
            if ("smart" == r && ((c = o.mode.indent(i, l.text.slice(u.length), l.text)) == R || c > 150)) {
              if (!n) return;
              r = "prev";
            }
          } else c = 0, r = "not";

          "prev" == r ? c = t > o.first ? j(Ke(o, t - 1).text, null, a) : 0 : "add" == r ? c = s + e.options.indentUnit : "subtract" == r ? c = s - e.options.indentUnit : "number" == typeof r && (c = s + r), c = Math.max(0, c);
          var d = "",
              h = 0;
          if (e.options.indentWithTabs) for (var f = Math.floor(c / a); f; --f) {
            h += a, d += "\t";
          }
          if (h < c && (d += $(c - h)), d != u) return go(o, d, et(t, 0), et(t, u.length), "+input"), l.stateAfter = null, !0;

          for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];

            if (g.head.line == t && g.head.ch < u.length) {
              var m = et(t, u.length);
              qi(o, p, new ki(m, m));
              break;
            }
          }
        }

        Ta.defineInitHook = function (e) {
          return _a.push(e);
        };

        var Aa = null;

        function Na(e) {
          Aa = e;
        }

        function Da(e, t, r, n, i) {
          var o = e.doc;
          e.display.shift = !1, n || (n = o.sel);
          var a = +new Date() - 200,
              l = "paste" == i || e.state.pasteIncoming > a,
              s = Ne(t),
              c = null;
          if (l && n.ranges.length > 1) if (Aa && Aa.text.join("\n") == t) {
            if (n.ranges.length % Aa.text.length == 0) {
              c = [];

              for (var u = 0; u < Aa.text.length; u++) {
                c.push(o.splitLines(Aa.text[u]));
              }
            }
          } else s.length == n.ranges.length && e.options.pasteLinesPerSelection && (c = Y(s, function (e) {
            return [e];
          }));

          for (var d = e.curOp.updateInput, h = n.ranges.length - 1; h >= 0; h--) {
            var f = n.ranges[h],
                p = f.from(),
                g = f.to();
            f.empty() && (r && r > 0 ? p = et(p.line, p.ch - r) : e.state.overwrite && !l ? g = et(g.line, Math.min(Ke(o, g.line).text.length, g.ch + X(s).length)) : l && Aa && Aa.lineWise && Aa.text.join("\n") == s.join("\n") && (p = g = et(p.line, 0)));
            var m = {
              from: p,
              to: g,
              text: c ? c[h % c.length] : s,
              origin: i || (l ? "paste" : e.state.cutIncoming > a ? "cut" : "+input")
            };
            co(e.doc, m), lr(e, "inputRead", e, m);
          }

          t && !l && Wa(e, t), Nn(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = d), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
        }

        function Ea(e, t) {
          var r = e.clipboardData && e.clipboardData.getData("Text");
          if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Qn(t, function () {
            return Da(t, r, 0, null, "paste");
          }), !0;
        }

        function Wa(e, t) {
          if (e.options.electricChars && e.options.smartIndent) for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
            var i = r.ranges[n];

            if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
              var o = e.getModeAt(i.head),
                  a = !1;

              if (o.electricChars) {
                for (var l = 0; l < o.electricChars.length; l++) {
                  if (t.indexOf(o.electricChars.charAt(l)) > -1) {
                    a = Oa(e, i.head.line, "smart");
                    break;
                  }
                }
              } else o.electricInput && o.electricInput.test(Ke(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Oa(e, i.head.line, "smart"));

              a && lr(e, "electricInput", e, i.head.line);
            }
          }
        }

        function Pa(e) {
          for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
                o = {
              anchor: et(i, 0),
              head: et(i + 1, 0)
            };
            r.push(o), t.push(e.getRange(o.anchor, o.head));
          }

          return {
            text: t,
            ranges: r
          };
        }

        function Ia(e, t, r, n) {
          e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t);
        }

        function Fa() {
          var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
              t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
          return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), Ia(e), t;
        }

        function ja(e, t, r, n, i) {
          var o = t,
              a = r,
              l = Ke(e, t.line),
              s = i && "rtl" == e.direction ? -r : r;

          function c(o) {
            var a, c;

            if ("codepoint" == n) {
              var u = l.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
              if (isNaN(u)) a = null;else {
                var d = r > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                a = new et(t.line, Math.max(0, Math.min(l.text.length, t.ch + r * (d ? 2 : 1))), -r);
              }
            } else a = i ? function (e, t, r, n) {
              var i = ce(t, e.doc.direction);
              if (!i) return Qo(t, r, n);
              r.ch >= t.text.length ? (r.ch = t.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, r.sticky = "after");
              var o = le(i, r.ch, r.sticky),
                  a = i[o];
              if ("ltr" == e.doc.direction && a.level % 2 == 0 && (n > 0 ? a.to > r.ch : a.from < r.ch)) return Qo(t, r, n);

              var l,
                  s = function s(e, r) {
                return Jo(t, e instanceof et ? e.ch : e, r);
              },
                  c = function c(r) {
                return e.options.lineWrapping ? (l = l || Nr(e, t), Zr(e, t, l, r)) : {
                  begin: 0,
                  end: t.text.length
                };
              },
                  u = c("before" == r.sticky ? s(r, -1) : r.ch);

              if ("rtl" == e.doc.direction || 1 == a.level) {
                var d = 1 == a.level == n < 0,
                    h = s(r, d ? 1 : -1);

                if (null != h && (d ? h <= a.to && h <= u.end : h >= a.from && h >= u.begin)) {
                  var f = d ? "before" : "after";
                  return new et(r.line, h, f);
                }
              }

              var p = function p(e, t, n) {
                for (var o = function o(e, t) {
                  return t ? new et(r.line, s(e, 1), "before") : new et(r.line, e, "after");
                }; e >= 0 && e < i.length; e += t) {
                  var a = i[e],
                      l = t > 0 == (1 != a.level),
                      c = l ? n.begin : s(n.end, -1);
                  if (a.from <= c && c < a.to) return o(c, l);
                  if (c = l ? a.from : s(a.to, -1), n.begin <= c && c < n.end) return o(c, l);
                }
              },
                  g = p(o + n, n, u);

              if (g) return g;
              var m = n > 0 ? u.end : s(u.begin, -1);
              return null == m || n > 0 && m == t.text.length || !(g = p(n > 0 ? 0 : i.length - 1, n, c(m))) ? null : g;
            }(e.cm, l, t, r) : Qo(l, t, r);

            if (null == a) {
              if (o || (c = t.line + s) < e.first || c >= e.first + e.size || (t = new et(c, t.ch, t.sticky), !(l = Ke(e, c)))) return !1;
              t = ea(i, e.cm, l, t.line, s);
            } else t = a;

            return !0;
          }

          if ("char" == n || "codepoint" == n) c();else if ("column" == n) c(!0);else if ("word" == n || "group" == n) for (var u = null, d = "group" == n, h = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(r < 0) || c(!f); f = !1) {
            var p = l.text.charAt(t.ch) || "\n",
                g = ee(p, h) ? "w" : d && "\n" == p ? "n" : !d || /\s/.test(p) ? null : "p";

            if (!d || f || g || (g = "s"), u && u != g) {
              r < 0 && (r = 1, c(), t.sticky = "after");
              break;
            }

            if (g && (u = g), r > 0 && !c(!f)) break;
          }
          var m = oo(e, t, o, a, !0);
          return rt(o, m) && (m.hitSide = !0), m;
        }

        function za(e, t, r, n) {
          var i,
              o,
              a = e.doc,
              l = t.left;

          if ("page" == n) {
            var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                c = Math.max(s - .5 * rn(e.display), 3);
            i = (r > 0 ? t.bottom : t.top) + r * c;
          } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);

          for (; (o = Yr(e, l, i)).outside;) {
            if (r < 0 ? i <= 0 : i >= a.height) {
              o.hitSide = !0;
              break;
            }

            i += 5 * r;
          }

          return o;
        }

        var Ha = function Ha(e) {
          this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new z(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
        };

        function Ra(e, t) {
          var r = Ar(e, t.line);
          if (!r || r.hidden) return null;

          var n = Ke(e.doc, t.line),
              i = _r(r, n, t.line),
              o = ce(n, e.doc.direction),
              a = "left";

          o && (a = le(o, t.ch) % 2 ? "right" : "left");
          var l = Pr(i.map, t.ch, a);
          return l.offset = "right" == l.collapse ? l.end : l.start, l;
        }

        function Ba(e, t) {
          return t && (e.bad = !0), e;
        }

        function Va(e, t, r) {
          var n;

          if (t == e.display.lineDiv) {
            if (!(n = e.display.lineDiv.childNodes[r])) return Ba(e.clipPos(et(e.display.viewTo - 1)), !0);
            t = null, r = 0;
          } else for (n = t;; n = n.parentNode) {
            if (!n || n == e.display.lineDiv) return null;
            if (n.parentNode && n.parentNode == e.display.lineDiv) break;
          }

          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n) return Ua(o, t, r);
          }
        }

        function Ua(e, t, r) {
          var n = e.text.firstChild,
              i = !1;
          if (!t || !N(n, t)) return Ba(et(qe(e.line), 0), !0);

          if (t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) {
            var o = e.rest ? X(e.rest) : e.line;
            return Ba(et(qe(o), o.text.length), i);
          }

          var a = 3 == t.nodeType ? t : null,
              l = t;

          for (a || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (a = t.firstChild, r && (r = a.nodeValue.length)); l.parentNode != n;) {
            l = l.parentNode;
          }

          var s = e.measure,
              c = s.maps;

          function u(t, r, n) {
            for (var i = -1; i < (c ? c.length : 0); i++) {
              for (var o = i < 0 ? s.map : c[i], a = 0; a < o.length; a += 3) {
                var l = o[a + 2];

                if (l == t || l == r) {
                  var u = qe(i < 0 ? e.line : e.rest[i]),
                      d = o[a] + n;
                  return (n < 0 || l != t) && (d = o[a + (n ? 1 : 0)]), et(u, d);
                }
              }
            }
          }

          var d = u(a, l, r);
          if (d) return Ba(d, i);

          for (var h = l.nextSibling, f = a ? a.nodeValue.length - r : 0; h; h = h.nextSibling) {
            if (d = u(h, h.firstChild, 0)) return Ba(et(d.line, d.ch - f), i);
            f += h.textContent.length;
          }

          for (var p = l.previousSibling, g = r; p; p = p.previousSibling) {
            if (d = u(p, p.firstChild, -1)) return Ba(et(d.line, d.ch + g), i);
            g += p.textContent.length;
          }
        }

        Ha.prototype.init = function (e) {
          var t = this,
              r = this,
              n = r.cm,
              i = r.div = e.lineDiv;

          function o(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == i) return !0;
              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
            }

            return !1;
          }

          function a(e) {
            if (o(e) && !ge(n, e)) {
              if (n.somethingSelected()) Na({
                lineWise: !1,
                text: n.getSelections()
              }), "cut" == e.type && n.replaceSelection("", null, "cut");else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Pa(n);
                Na({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type && n.operation(function () {
                  n.setSelections(t.ranges, 0, B), n.replaceSelection("", null, "cut");
                });
              }

              if (e.clipboardData) {
                e.clipboardData.clearData();
                var a = Aa.text.join("\n");
                if (e.clipboardData.setData("Text", a), e.clipboardData.getData("Text") == a) return void e.preventDefault();
              }

              var l = Fa(),
                  s = l.firstChild;
              n.display.lineSpace.insertBefore(l, n.display.lineSpace.firstChild), s.value = Aa.text.join("\n");
              var c = D();
              P(s), setTimeout(function () {
                n.display.lineSpace.removeChild(l), c.focus(), c == i && r.showPrimarySelection();
              }, 50);
            }
          }

          i.contentEditable = !0, Ia(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), de(i, "paste", function (e) {
            !o(e) || ge(n, e) || Ea(e, n) || l <= 11 && setTimeout(ei(n, function () {
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
            return r.forceCompositionEnd();
          }), de(i, "input", function () {
            t.composing || t.readFromDOMSoon();
          }), de(i, "copy", a), de(i, "cut", a);
        }, Ha.prototype.screenReaderLabelChanged = function (e) {
          e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
        }, Ha.prototype.prepareSelection = function () {
          var e = vn(this.cm, !1);
          return e.focus = D() == this.div, e;
        }, Ha.prototype.showSelection = function (e, t) {
          e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
        }, Ha.prototype.getSelection = function () {
          return this.cm.display.wrapper.ownerDocument.getSelection();
        }, Ha.prototype.showPrimarySelection = function () {
          var e = this.getSelection(),
              t = this.cm,
              n = t.doc.sel.primary(),
              i = n.from(),
              o = n.to();
          if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();else {
            var a = Va(t, e.anchorNode, e.anchorOffset),
                l = Va(t, e.focusNode, e.focusOffset);

            if (!a || a.bad || !l || l.bad || 0 != tt(ot(a, l), i) || 0 != tt(it(a, l), o)) {
              var s = t.display.view,
                  c = i.line >= t.display.viewFrom && Ra(t, i) || {
                node: s[0].measure.map[2],
                offset: 0
              },
                  u = o.line < t.display.viewTo && Ra(t, o);

              if (!u) {
                var d = s[s.length - 1].measure,
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
                  f = M(c.node, c.offset, u.offset, u.node);
                } catch (e) {}

                f && (!r && t.state.focused ? (e.collapse(c.node, c.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()), this.rememberSelection();
              } else e.removeAllRanges();
            }
          }
        }, Ha.prototype.startGracePeriod = function () {
          var e = this;
          clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
            e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
              return e.cm.curOp.selectionChanged = !0;
            });
          }, 20);
        }, Ha.prototype.showMultipleSelections = function (e) {
          _(this.cm.display.cursorDiv, e.cursors), _(this.cm.display.selectionDiv, e.selection);
        }, Ha.prototype.rememberSelection = function () {
          var e = this.getSelection();
          this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
        }, Ha.prototype.selectionInEditor = function () {
          var e = this.getSelection();
          if (!e.rangeCount) return !1;
          var t = e.getRangeAt(0).commonAncestorContainer;
          return N(this.div, t);
        }, Ha.prototype.focus = function () {
          "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && D() == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus());
        }, Ha.prototype.blur = function () {
          this.div.blur();
        }, Ha.prototype.getField = function () {
          return this.div;
        }, Ha.prototype.supportsTouch = function () {
          return !0;
        }, Ha.prototype.receivedFocus = function () {
          var e = this;
          this.selectionInEditor() ? this.pollSelection() : Qn(this.cm, function () {
            return e.cm.curOp.selectionChanged = !0;
          }), this.polling.set(this.cm.options.pollInterval, function t() {
            e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
          });
        }, Ha.prototype.selectionChanged = function () {
          var e = this.getSelection();
          return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
        }, Ha.prototype.pollSelection = function () {
          if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var e = this.getSelection(),
                t = this.cm;
            if (m && u && this.cm.display.gutterSpecs.length && function (e) {
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
              var r = Va(t, e.anchorNode, e.anchorOffset),
                  n = Va(t, e.focusNode, e.focusOffset);
              r && n && Qn(t, function () {
                Qi(t.doc, Mi(r, n), B), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
              });
            }
          }
        }, Ha.prototype.pollContent = function () {
          null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
          var e,
              t,
              r,
              n = this.cm,
              i = n.display,
              o = n.doc.sel.primary(),
              a = o.from(),
              l = o.to();
          if (0 == a.ch && a.line > n.firstLine() && (a = et(a.line - 1, Ke(n.doc, a.line - 1).length)), l.ch == Ke(n.doc, l.line).text.length && l.line < n.lastLine() && (l = et(l.line + 1, 0)), a.line < i.viewFrom || l.line > i.viewTo - 1) return !1;
          a.line == i.viewFrom || 0 == (e = un(n, a.line)) ? (t = qe(i.view[0].line), r = i.view[0].node) : (t = qe(i.view[e].line), r = i.view[e - 1].node.nextSibling);
          var s,
              c,
              u = un(n, l.line);
          if (u == i.view.length - 1 ? (s = i.viewTo - 1, c = i.lineDiv.lastChild) : (s = qe(i.view[u + 1].line) - 1, c = i.view[u + 1].node.previousSibling), !r) return !1;

          for (var d = n.doc.splitLines(function (e, t, r, n, i) {
            var o = "",
                a = !1,
                l = e.doc.lineSeparator(),
                s = !1;

            function c() {
              a && (o += l, s && (o += l), a = s = !1);
            }

            function u(e) {
              e && (c(), o += e);
            }

            function d(t) {
              if (1 == t.nodeType) {
                var r = t.getAttribute("cm-text");
                if (r) return void u(r);
                var o,
                    h = t.getAttribute("cm-marker");

                if (h) {
                  var f = e.findMarks(et(n, 0), et(i + 1, 0), (m = +h, function (e) {
                    return e.id == m;
                  }));
                  return void (f.length && (o = f[0].find(0)) && u($e(e.doc, o.from, o.to).join(l)));
                }

                if ("false" == t.getAttribute("contenteditable")) return;
                var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                p && c();

                for (var g = 0; g < t.childNodes.length; g++) {
                  d(t.childNodes[g]);
                }

                /^(pre|p)$/i.test(t.nodeName) && (s = !0), p && (a = !0);
              } else 3 == t.nodeType && u(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));

              var m;
            }

            for (; d(t), t != r;) {
              t = t.nextSibling, s = !1;
            }

            return o;
          }(n, r, c, t, s)), h = $e(n.doc, et(t, 0), et(s, Ke(n.doc, s).text.length)); d.length > 1 && h.length > 1;) {
            if (X(d) == X(h)) d.pop(), h.pop(), s--;else {
              if (d[0] != h[0]) break;
              d.shift(), h.shift(), t++;
            }
          }

          for (var f = 0, p = 0, g = d[0], m = h[0], v = Math.min(g.length, m.length); f < v && g.charCodeAt(f) == m.charCodeAt(f);) {
            ++f;
          }

          for (var y = X(d), b = X(h), x = Math.min(y.length - (1 == d.length ? f : 0), b.length - (1 == h.length ? f : 0)); p < x && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
            ++p;
          }

          if (1 == d.length && 1 == h.length && t == a.line) for (; f && f > a.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
            f--, p++;
          }
          d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), d[0] = d[0].slice(f).replace(/\u200b+$/, "");
          var w = et(t, f),
              C = et(s, h.length ? X(h).length - p : 0);
          return d.length > 1 || d[0] || tt(w, C) ? (go(n.doc, d, w, C, "+input"), !0) : void 0;
        }, Ha.prototype.ensurePolled = function () {
          this.forceCompositionEnd();
        }, Ha.prototype.reset = function () {
          this.forceCompositionEnd();
        }, Ha.prototype.forceCompositionEnd = function () {
          this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
        }, Ha.prototype.readFromDOMSoon = function () {
          var e = this;
          null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
            if (e.readDOMTimeout = null, e.composing) {
              if (!e.composing.done) return;
              e.composing = null;
            }

            e.updateFromDOM();
          }, 80));
        }, Ha.prototype.updateFromDOM = function () {
          var e = this;
          !this.cm.isReadOnly() && this.pollContent() || Qn(this.cm, function () {
            return dn(e.cm);
          });
        }, Ha.prototype.setUneditable = function (e) {
          e.contentEditable = "false";
        }, Ha.prototype.onKeyPress = function (e) {
          0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || ei(this.cm, Da)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
        }, Ha.prototype.readOnlyChanged = function (e) {
          this.div.contentEditable = String("nocursor" != e);
        }, Ha.prototype.onContextMenu = function () {}, Ha.prototype.resetPosition = function () {}, Ha.prototype.needsContentAttribute = !0;

        var Ga = function Ga(e) {
          this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new z(), this.hasSelection = !1, this.composing = null;
        };

        Ga.prototype.init = function (e) {
          var t = this,
              r = this,
              n = this.cm;
          this.createField(e);
          var i = this.textarea;

          function o(e) {
            if (!ge(n, e)) {
              if (n.somethingSelected()) Na({
                lineWise: !1,
                text: n.getSelections()
              });else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Pa(n);
                Na({
                  lineWise: !0,
                  text: t.text
                }), "cut" == e.type ? n.setSelections(t.ranges, null, B) : (r.prevInput = "", i.value = t.text.join("\n"), P(i));
              }
              "cut" == e.type && (n.state.cutIncoming = +new Date());
            }
          }

          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), g && (i.style.width = "0px"), de(i, "input", function () {
            a && l >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
          }), de(i, "paste", function (e) {
            ge(n, e) || Ea(e, n) || (n.state.pasteIncoming = +new Date(), r.fastPoll());
          }), de(i, "cut", o), de(i, "copy", o), de(e.scroller, "paste", function (t) {
            if (!wr(e, t) && !ge(n, t)) {
              if (!i.dispatchEvent) return n.state.pasteIncoming = +new Date(), void r.focus();
              var o = new Event("paste");
              o.clipboardData = t.clipboardData, i.dispatchEvent(o);
            }
          }), de(e.lineSpace, "selectstart", function (t) {
            wr(e, t) || be(t);
          }), de(i, "compositionstart", function () {
            var e = n.getCursor("from");
            r.composing && r.composing.range.clear(), r.composing = {
              start: e,
              range: n.markText(e, n.getCursor("to"), {
                className: "CodeMirror-composing"
              })
            };
          }), de(i, "compositionend", function () {
            r.composing && (r.poll(), r.composing.range.clear(), r.composing = null);
          });
        }, Ga.prototype.createField = function (e) {
          this.wrapper = Fa(), this.textarea = this.wrapper.firstChild;
        }, Ga.prototype.screenReaderLabelChanged = function (e) {
          e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
        }, Ga.prototype.prepareSelection = function () {
          var e = this.cm,
              t = e.display,
              r = e.doc,
              n = vn(e);

          if (e.options.moveInputWithCursor) {
            var i = Kr(e, r.sel.primary().head, "div"),
                o = t.wrapper.getBoundingClientRect(),
                a = t.lineDiv.getBoundingClientRect();
            n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
          }

          return n;
        }, Ga.prototype.showSelection = function (e) {
          var t = this.cm.display;
          _(t.cursorDiv, e.cursors), _(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
        }, Ga.prototype.reset = function (e) {
          if (!this.contextMenuPending && !this.composing) {
            var t = this.cm;

            if (t.somethingSelected()) {
              this.prevInput = "";
              var r = t.getSelection();
              this.textarea.value = r, t.state.focused && P(this.textarea), a && l >= 9 && (this.hasSelection = r);
            } else e || (this.prevInput = this.textarea.value = "", a && l >= 9 && (this.hasSelection = null));
          }
        }, Ga.prototype.getField = function () {
          return this.textarea;
        }, Ga.prototype.supportsTouch = function () {
          return !1;
        }, Ga.prototype.focus = function () {
          if ("nocursor" != this.cm.options.readOnly && (!v || D() != this.textarea)) try {
            this.textarea.focus();
          } catch (e) {}
        }, Ga.prototype.blur = function () {
          this.textarea.blur();
        }, Ga.prototype.resetPosition = function () {
          this.wrapper.style.top = this.wrapper.style.left = 0;
        }, Ga.prototype.receivedFocus = function () {
          this.slowPoll();
        }, Ga.prototype.slowPoll = function () {
          var e = this;
          this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
        }, Ga.prototype.fastPoll = function () {
          var e = !1,
              t = this;
          t.pollingFast = !0, t.polling.set(20, function r() {
            t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, r));
          });
        }, Ga.prototype.poll = function () {
          var e = this,
              t = this.cm,
              r = this.textarea,
              n = this.prevInput;
          if (this.contextMenuPending || !t.state.focused || De(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
          var i = r.value;
          if (i == n && !t.somethingSelected()) return !1;
          if (a && l >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;

          if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if (8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo");
          }

          for (var s = 0, c = Math.min(n.length, i.length); s < c && n.charCodeAt(s) == i.charCodeAt(s);) {
            ++s;
          }

          return Qn(t, function () {
            Da(t, i.slice(s), n.length - s, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
              className: "CodeMirror-composing"
            }));
          }), !0;
        }, Ga.prototype.ensurePolled = function () {
          this.pollingFast && this.poll() && (this.pollingFast = !1);
        }, Ga.prototype.onKeyPress = function () {
          a && l >= 9 && (this.hasSelection = null), this.fastPoll();
        }, Ga.prototype.onContextMenu = function (e) {
          var t = this,
              r = t.cm,
              n = r.display,
              i = t.textarea;
          t.contextMenuPending && t.contextMenuPending();
          var o = cn(r, e),
              c = n.scroller.scrollTop;

          if (o && !d) {
            r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(o) && ei(r, Qi)(r.doc, Mi(o), B);
            var u,
                h = i.style.cssText,
                f = t.wrapper.style.cssText,
                p = t.wrapper.offsetParent.getBoundingClientRect();

            if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (u = window.scrollY), n.input.focus(), s && window.scrollTo(null, u), n.input.reset(), r.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), a && l >= 9 && m(), k) {
              Ce(e);

              var g = function g() {
                fe(window, "mouseup", g), setTimeout(v, 20);
              };

              de(window, "mouseup", g);
            } else setTimeout(v, 50);
          }

          function m() {
            if (null != i.selectionStart) {
              var e = r.somethingSelected(),
                  o = "​" + (e ? i.value : "");
              i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel;
            }
          }

          function v() {
            if (t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = f, i.style.cssText = h, a && l < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = c), null != i.selectionStart)) {
              (!a || a && l < 9) && m();

              var e = 0,
                  o = function o() {
                n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? ei(r, lo)(r) : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500) : (n.selForContextMenu = null, n.input.reset());
              };

              n.detectingSelectAll = setTimeout(o, 200);
            }
          }
        }, Ga.prototype.readOnlyChanged = function (e) {
          e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e;
        }, Ga.prototype.setUneditable = function () {}, Ga.prototype.needsContentAttribute = !1, function (e) {
          var t = e.optionHandlers;

          function r(r, n, i, o) {
            e.defaults[r] = n, i && (t[r] = o ? function (e, t, r) {
              r != Ca && i(e, t, r);
            } : i);
          }

          e.defineOption = r, e.Init = Ca, r("value", "", function (e, t) {
            return e.setValue(t);
          }, !0), r("mode", null, function (e, t) {
            e.doc.modeOption = t, Ai(e);
          }, !0), r("indentUnit", 2, Ai, !0), r("indentWithTabs", !1), r("smartIndent", !0), r("tabSize", 4, function (e) {
            Ni(e), zr(e), dn(e);
          }, !0), r("lineSeparator", null, function (e, t) {
            if (e.doc.lineSep = t, t) {
              var r = [],
                  n = e.doc.first;
              e.doc.iter(function (e) {
                for (var i = 0;;) {
                  var o = e.text.indexOf(t, i);
                  if (-1 == o) break;
                  i = o + t.length, r.push(et(n, o));
                }

                n++;
              });

              for (var i = r.length - 1; i >= 0; i--) {
                go(e.doc, t, r[i], et(r[i].line, r[i].ch + t.length));
              }
            }
          }), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, r) {
            e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != Ca && e.refresh();
          }), r("specialCharPlaceholder", Jt, function (e) {
            return e.refresh();
          }, !0), r("electricChars", !0), r("inputStyle", v ? "contenteditable" : "textarea", function () {
            throw new Error("inputStyle can not (yet) be changed in a running editor");
          }, !0), r("spellcheck", !1, function (e, t) {
            return e.getInputField().spellcheck = t;
          }, !0), r("autocorrect", !1, function (e, t) {
            return e.getInputField().autocorrect = t;
          }, !0), r("autocapitalize", !1, function (e, t) {
            return e.getInputField().autocapitalize = t;
          }, !0), r("rtlMoveVisually", !x), r("wholeLineUpdateBefore", !0), r("theme", "default", function (e) {
            wa(e), gi(e);
          }, !0), r("keyMap", "default", function (e, t, r) {
            var n = qo(t),
                i = r != Ca && qo(r);
            i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null);
          }), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, La, !0), r("gutters", [], function (e, t) {
            e.display.gutterSpecs = fi(t, e.options.lineNumbers), gi(e);
          }, !0), r("fixedGutter", !0, function (e, t) {
            e.display.gutters.style.left = t ? an(e.display) + "px" : "0", e.refresh();
          }, !0), r("coverGutterNextToScrollbar", !1, function (e) {
            return Rn(e);
          }, !0), r("scrollbarStyle", "native", function (e) {
            Un(e), Rn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
          }, !0), r("lineNumbers", !1, function (e, t) {
            e.display.gutterSpecs = fi(e.options.gutters, t), gi(e);
          }, !0), r("firstLineNumber", 1, gi, !0), r("lineNumberFormatter", function (e) {
            return e;
          }, gi, !0), r("showCursorWhenSelecting", !1, mn, !0), r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), r("readOnly", !1, function (e, t) {
            "nocursor" == t && (Mn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
          }), r("screenReaderLabel", null, function (e, t) {
            t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t);
          }), r("disableInput", !1, function (e, t) {
            t || e.display.input.reset();
          }, !0), r("dragDrop", !0, Ma), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), r("cursorScrollMargin", 0), r("cursorHeight", 1, mn, !0), r("singleCursorHeightPerLine", !0, mn, !0), r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, Ni, !0), r("addModeClass", !1, Ni, !0), r("pollInterval", 100), r("undoDepth", 200, function (e, t) {
            return e.doc.history.undoDepth = t;
          }), r("historyEventDelay", 1250), r("viewportMargin", 10, function (e) {
            return e.refresh();
          }, !0), r("maxHighlightLength", 1e4, Ni, !0), r("moveInputWithCursor", !0, function (e, t) {
            t || e.display.input.resetPosition();
          }), r("tabindex", null, function (e, t) {
            return e.display.input.getField().tabIndex = t || "";
          }), r("autofocus", null), r("direction", "ltr", function (e, t) {
            return e.doc.setDirection(t);
          }, !0), r("phrases", null);
        }(Ta), function (e) {
          var t = e.optionHandlers,
              r = e.helpers = {};
          e.prototype = {
            constructor: e,
            focus: function focus() {
              window.focus(), this.display.input.focus();
            },
            setOption: function setOption(e, r) {
              var n = this.options,
                  i = n[e];
              n[e] == r && "mode" != e || (n[e] = r, t.hasOwnProperty(e) && ei(this, t[e])(this, r, i), pe(this, "optionChange", this, e));
            },
            getOption: function getOption(e) {
              return this.options[e];
            },
            getDoc: function getDoc() {
              return this.doc;
            },
            addKeyMap: function addKeyMap(e, t) {
              this.state.keyMaps[t ? "push" : "unshift"](qo(e));
            },
            removeKeyMap: function removeKeyMap(e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) {
                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
              }
            },
            addOverlay: ti(function (t, r) {
              var n = t.token ? t : e.getMode(this.options, t);
              if (n.startState) throw new Error("Overlays may not be stateful.");
              (function (e, t, r) {
                for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i;) {
                  n++;
                }

                e.splice(n, 0, t);
              })(this.state.overlays, {
                mode: n,
                modeSpec: t,
                opaque: r && r.opaque,
                priority: r && r.priority || 0
              }, function (e) {
                return e.priority;
              }), this.state.modeGen++, dn(this);
            }),
            removeOverlay: ti(function (e) {
              for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                var n = t[r].modeSpec;
                if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void dn(this);
              }
            }),
            indentLine: ti(function (e, t, r) {
              "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Je(this.doc, e) && Oa(this, e, t, r);
            }),
            indentSelection: ti(function (e) {
              for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
                var i = t[n];
                if (i.empty()) i.head.line > r && (Oa(this, i.head.line, e, !0), r = i.head.line, n == this.doc.sel.primIndex && Nn(this));else {
                  var o = i.from(),
                      a = i.to(),
                      l = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;

                  for (var s = l; s < r; ++s) {
                    Oa(this, s, e);
                  }

                  var c = this.doc.sel.ranges;
                  0 == o.ch && t.length == c.length && c[n].from().ch > 0 && qi(this.doc, n, new ki(o, c[n].to()), B);
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
              e = lt(this.doc, e);
              var t,
                  r = ht(this, Ke(this.doc, e.line)),
                  n = 0,
                  i = (r.length - 1) / 2,
                  o = e.ch;
              if (0 == o) t = r[2];else for (;;) {
                var a = n + i >> 1;
                if ((a ? r[2 * a - 1] : 0) >= o) i = a;else {
                  if (!(r[2 * a + 1] < o)) {
                    t = r[2 * a + 2];
                    break;
                  }

                  n = a + 1;
                }
              }
              var l = t ? t.indexOf("overlay ") : -1;
              return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
            },
            getModeAt: function getModeAt(t) {
              var r = this.doc.mode;
              return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r;
            },
            getHelper: function getHelper(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function getHelpers(e, t) {
              var n = [];
              if (!r.hasOwnProperty(t)) return n;
              var i = r[t],
                  o = this.getModeAt(e);
              if ("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);else if (o[t]) for (var a = 0; a < o[t].length; a++) {
                var l = i[o[t][a]];
                l && n.push(l);
              } else o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]);

              for (var s = 0; s < i._global.length; s++) {
                var c = i._global[s];
                c.pred(o, this) && -1 == H(n, c.val) && n.push(c.val);
              }

              return n;
            },
            getStateAfter: function getStateAfter(e, t) {
              var r = this.doc;
              return ft(this, (e = at(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state;
            },
            cursorCoords: function cursorCoords(e, t) {
              var r = this.doc.sel.primary();
              return Kr(this, null == e ? r.head : "object" == _typeof(e) ? lt(this.doc, e) : e ? r.from() : r.to(), t || "page");
            },
            charCoords: function charCoords(e, t) {
              return Gr(this, lt(this.doc, e), t || "page");
            },
            coordsChar: function coordsChar(e, t) {
              return Yr(this, (e = Ur(this, e, t || "page")).left, e.top);
            },
            lineAtHeight: function lineAtHeight(e, t) {
              return e = Ur(this, {
                top: e,
                left: 0
              }, t || "page").top, Ze(this.doc, e + this.display.viewOffset);
            },
            heightAtLine: function heightAtLine(e, t, r) {
              var n,
                  i = !1;

              if ("number" == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), n = Ke(this.doc, e);
              } else n = e;

              return Vr(this, n, {
                top: 0,
                left: 0
              }, t || "page", r || i).top + (i ? this.doc.height - Vt(n) : 0);
            },
            defaultTextHeight: function defaultTextHeight() {
              return rn(this.display);
            },
            defaultCharWidth: function defaultCharWidth() {
              return nn(this.display);
            },
            getViewport: function getViewport() {
              return {
                from: this.display.viewFrom,
                to: this.display.viewTo
              };
            },
            addWidget: function addWidget(e, t, r, n, i) {
              var o,
                  a,
                  l,
                  s = this.display,
                  c = (e = Kr(this, lt(this.doc, e))).bottom,
                  u = e.left;
              if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), s.sizer.appendChild(t), "over" == n) c = e.top;else if ("above" == n || "near" == n) {
                var d = Math.max(s.wrapper.clientHeight, this.doc.height),
                    h = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                ("above" == n || e.bottom + t.offsetHeight > d) && e.top > t.offsetHeight ? c = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= d && (c = e.bottom), u + t.offsetWidth > h && (u = h - t.offsetWidth);
              }
              t.style.top = c + "px", t.style.left = t.style.right = "", "right" == i ? (u = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? u = 0 : "middle" == i && (u = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), r && (o = this, a = {
                left: u,
                top: c,
                right: u + t.offsetWidth,
                bottom: c + t.offsetHeight
              }, null != (l = On(o, a)).scrollTop && Pn(o, l.scrollTop), null != l.scrollLeft && Fn(o, l.scrollLeft));
            },
            triggerOnKeyDown: ti(ua),
            triggerOnKeyPress: ti(ha),
            triggerOnKeyUp: da,
            triggerOnMouseDown: ti(ma),
            execCommand: function execCommand(e) {
              if (ta.hasOwnProperty(e)) return ta[e].call(null, this);
            },
            triggerElectric: ti(function (e) {
              Wa(this, e);
            }),
            findPosH: function findPosH(e, t, r, n) {
              var i = 1;
              t < 0 && (i = -1, t = -t);

              for (var o = lt(this.doc, e), a = 0; a < t && !(o = ja(this.doc, o, i, r, n)).hitSide; ++a) {
                ;
              }

              return o;
            },
            moveH: ti(function (e, t) {
              var r = this;
              this.extendSelectionsBy(function (n) {
                return r.display.shift || r.doc.extend || n.empty() ? ja(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to();
              }, U);
            }),
            deleteH: ti(function (e, t) {
              var r = this.doc.sel,
                  n = this.doc;
              r.somethingSelected() ? n.replaceSelection("", null, "+delete") : Zo(this, function (r) {
                var i = ja(n, r.head, e, t, !1);
                return e < 0 ? {
                  from: i,
                  to: r.head
                } : {
                  from: r.head,
                  to: i
                };
              });
            }),
            findPosV: function findPosV(e, t, r, n) {
              var i = 1,
                  o = n;
              t < 0 && (i = -1, t = -t);

              for (var a = lt(this.doc, e), l = 0; l < t; ++l) {
                var s = Kr(this, a, "div");
                if (null == o ? o = s.left : s.left = o, (a = za(this, s, i, r)).hitSide) break;
              }

              return a;
            },
            moveV: ti(function (e, t) {
              var r = this,
                  n = this.doc,
                  i = [],
                  o = !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (n.extendSelectionsBy(function (a) {
                if (o) return e < 0 ? a.from() : a.to();
                var l = Kr(r, a.head, "div");
                null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);
                var s = za(r, l, e, t);
                return "page" == t && a == n.sel.primary() && An(r, Gr(r, s, "div").top - l.top), s;
              }, U), i.length) for (var a = 0; a < n.sel.ranges.length; a++) {
                n.sel.ranges[a].goalColumn = i[a];
              }
            }),
            findWordAt: function findWordAt(e) {
              var t = Ke(this.doc, e.line).text,
                  r = e.ch,
                  n = e.ch;

              if (t) {
                var i = this.getHelper(e, "wordChars");
                "before" != e.sticky && n != t.length || !r ? ++n : --r;

                for (var o = t.charAt(r), a = ee(o, i) ? function (e) {
                  return ee(e, i);
                } : /\s/.test(o) ? function (e) {
                  return /\s/.test(e);
                } : function (e) {
                  return !/\s/.test(e) && !ee(e);
                }; r > 0 && a(t.charAt(r - 1));) {
                  --r;
                }

                for (; n < t.length && a(t.charAt(n));) {
                  ++n;
                }
              }

              return new ki(et(e.line, r), et(e.line, n));
            },
            toggleOverwrite: function toggleOverwrite(e) {
              null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? E(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"), pe(this, "overwriteToggle", this, this.state.overwrite));
            },
            hasFocus: function hasFocus() {
              return this.display.input.getField() == D();
            },
            isReadOnly: function isReadOnly() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: ti(function (e, t) {
              Dn(this, e, t);
            }),
            getScrollInfo: function getScrollInfo() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Mr(this) - this.display.barHeight,
                width: e.scrollWidth - Mr(this) - this.display.barWidth,
                clientHeight: Tr(this),
                clientWidth: Lr(this)
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
                En(e), e.curOp.scrollToPos = t;
              }(this, e) : Wn(this, e.from, e.to, e.margin);
            }),
            setSize: ti(function (e, t) {
              var r = this,
                  n = function n(e) {
                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
              };

              null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && jr(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function (e) {
                if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
                  if (e.widgets[t].noHScroll) {
                    hn(r, i, "widget");
                    break;
                  }
                }
                ++i;
              }), this.curOp.forceUpdate = !0, pe(this, "refresh", this);
            }),
            operation: function operation(e) {
              return Qn(this, e);
            },
            startOperation: function startOperation() {
              return Kn(this);
            },
            endOperation: function endOperation() {
              return $n(this);
            },
            refresh: ti(function () {
              var e = this.display.cachedTextHeight;
              dn(this), this.curOp.forceUpdate = !0, zr(this), Dn(this, this.doc.scrollLeft, this.doc.scrollTop), ci(this.display), (null == e || Math.abs(e - rn(this.display)) > .5 || this.options.lineWrapping) && sn(this), pe(this, "refresh", this);
            }),
            swapDoc: ti(function (e) {
              var t = this.doc;
              return t.cm = null, this.state.selectingText && this.state.selectingText(), Pi(this, e), zr(this), this.display.input.reset(), Dn(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, lr(this, "swapDoc", this, t), t;
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
          }, ye(e), e.registerHelper = function (t, n, i) {
            r.hasOwnProperty(t) || (r[t] = e[t] = {
              _global: []
            }), r[t][n] = i;
          }, e.registerGlobalHelper = function (t, n, i, o) {
            e.registerHelper(t, n, o), r[t]._global.push({
              pred: i,
              val: o
            });
          };
        }(Ta);
        var Ka = "iter insert remove copy getEditor constructor".split(" ");

        for (var $a in No.prototype) {
          No.prototype.hasOwnProperty($a) && H(Ka, $a) < 0 && (Ta.prototype[$a] = function (e) {
            return function () {
              return e.apply(this.doc, arguments);
            };
          }(No.prototype[$a]));
        }

        return ye(No), Ta.inputStyles = {
          textarea: Ga,
          contenteditable: Ha
        }, Ta.defineMode = function (e) {
          Ta.defaults.mode || "null" == e || (Ta.defaults.mode = e), Fe.apply(this, arguments);
        }, Ta.defineMIME = function (e, t) {
          Ie[e] = t;
        }, Ta.defineMode("null", function () {
          return {
            token: function token(e) {
              return e.skipToEnd();
            }
          };
        }), Ta.defineMIME("text/plain", "null"), Ta.defineExtension = function (e, t) {
          Ta.prototype[e] = t;
        }, Ta.defineDocExtension = function (e, t) {
          No.prototype[e] = t;
        }, Ta.fromTextArea = function (e, t) {
          if ((t = t ? F(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
            var r = D();
            t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body;
          }

          function n() {
            e.value = l.getValue();
          }

          var i;

          if (e.form && (de(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;

            try {
              var a = o.submit = function () {
                n(), o.submit = i, o.submit(), o.submit = a;
              };
            } catch (e) {}
          }

          t.finishInit = function (r) {
            r.save = n, r.getTextArea = function () {
              return e;
            }, r.toTextArea = function () {
              r.toTextArea = isNaN, n(), e.parentNode.removeChild(r.getWrapperElement()), e.style.display = "", e.form && (fe(e.form, "submit", n), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
            };
          }, e.style.display = "none";
          var l = Ta(function (t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return l;
        }, function (e) {
          e.off = fe, e.on = de, e.wheelEventPixels = xi, e.Doc = No, e.splitLines = Ne, e.countColumn = j, e.findColumn = G, e.isWordChar = Q, e.Pass = R, e.signal = pe, e.Line = Kt, e.changeEnd = Li, e.scrollbarModel = Vn, e.Pos = et, e.cmpPos = tt, e.modes = Pe, e.mimeModes = Ie, e.resolveMode = je, e.getMode = ze, e.modeExtensions = He, e.extendMode = Re, e.copyState = Be, e.startState = Ue, e.innerMode = Ve, e.commands = ta, e.keyMap = Vo, e.keyName = Yo, e.isModifierKey = $o, e.lookupKey = Ko, e.normalizeKeyMap = Go, e.StringStream = Ge, e.SharedTextMarker = To, e.TextMarker = Mo, e.LineWidget = Co, e.e_preventDefault = be, e.e_stopPropagation = xe, e.e_stop = Ce, e.addClass = E, e.contains = N, e.rmClass = L, e.keyNames = zo;
        }(Ta), Ta.version = "5.62.0", Ta;
      }();
    },
    3501: function _(e, t, r) {
      "use strict";

      r.d(t, {
        Z: function Z() {
          return o;
        }
      });
      var n = r(3645),
          i = r.n(n)()(function (e) {
        return e[1];
      });
      i.push([e.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);
      var o = i;
    },
    1368: function _(e, t, r) {
      "use strict";

      r.d(t, {
        Z: function Z() {
          return o;
        }
      });
      var n = r(3645),
          i = r.n(n)()(function (e) {
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
            var r = e(t);
            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
          }).join("");
        }, t.i = function (e, r, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (n) for (var o = 0; o < this.length; o++) {
            var a = this[o][0];
            null != a && (i[a] = !0);
          }

          for (var l = 0; l < e.length; l++) {
            var s = [].concat(e[l]);
            n && i[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), t.push(s));
          }
        }, t;
      };
    },
    8552: function _(e, t, r) {
      var n = r(852)(r(5639), "DataView");
      e.exports = n;
    },
    1989: function _(e, t, r) {
      var n = r(1789),
          i = r(401),
          o = r(7667),
          a = r(1327),
          l = r(1866);

      function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      s.prototype.clear = n, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = l, e.exports = s;
    },
    8407: function _(e, t, r) {
      var n = r(7040),
          i = r(4125),
          o = r(2117),
          a = r(7518),
          l = r(4705);

      function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      s.prototype.clear = n, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = l, e.exports = s;
    },
    7071: function _(e, t, r) {
      var n = r(852)(r(5639), "Map");
      e.exports = n;
    },
    3369: function _(e, t, r) {
      var n = r(4785),
          i = r(1285),
          o = r(6e3),
          a = r(9916),
          l = r(5265);

      function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;

        for (this.clear(); ++t < r;) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }

      s.prototype.clear = n, s.prototype.delete = i, s.prototype.get = o, s.prototype.has = a, s.prototype.set = l, e.exports = s;
    },
    3818: function _(e, t, r) {
      var n = r(852)(r(5639), "Promise");
      e.exports = n;
    },
    8525: function _(e, t, r) {
      var n = r(852)(r(5639), "Set");
      e.exports = n;
    },
    6384: function _(e, t, r) {
      var n = r(8407),
          i = r(7465),
          o = r(3779),
          a = r(7599),
          l = r(4758),
          s = r(4309);

      function c(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size;
      }

      c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = l, c.prototype.set = s, e.exports = c;
    },
    2705: function _(e, t, r) {
      var n = r(5639).Symbol;
      e.exports = n;
    },
    1149: function _(e, t, r) {
      var n = r(5639).Uint8Array;
      e.exports = n;
    },
    577: function _(e, t, r) {
      var n = r(852)(r(5639), "WeakMap");
      e.exports = n;
    },
    7412: function _(e) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e);) {
          ;
        }

        return e;
      };
    },
    4963: function _(e) {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
          var a = e[r];
          t(a, r, e) && (o[i++] = a);
        }

        return o;
      };
    },
    4636: function _(e, t, r) {
      var n = r(2545),
          i = r(5694),
          o = r(1469),
          a = r(4144),
          l = r(5776),
          s = r(6719),
          c = Object.prototype.hasOwnProperty;

      e.exports = function (e, t) {
        var r = o(e),
            u = !r && i(e),
            d = !r && !u && a(e),
            h = !r && !u && !d && s(e),
            f = r || u || d || h,
            p = f ? n(e.length, String) : [],
            g = p.length;

        for (var m in e) {
          !t && !c.call(e, m) || f && ("length" == m || d && ("offset" == m || "parent" == m) || h && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || l(m, g)) || p.push(m);
        }

        return p;
      };
    },
    2488: function _(e) {
      e.exports = function (e, t) {
        for (var r = -1, n = t.length, i = e.length; ++r < n;) {
          e[i + r] = t[r];
        }

        return e;
      };
    },
    4865: function _(e, t, r) {
      var n = r(9465),
          i = r(7813),
          o = Object.prototype.hasOwnProperty;

      e.exports = function (e, t, r) {
        var a = e[t];
        o.call(e, t) && i(a, r) && (void 0 !== r || t in e) || n(e, t, r);
      };
    },
    8470: function _(e, t, r) {
      var n = r(7813);

      e.exports = function (e, t) {
        for (var r = e.length; r--;) {
          if (n(e[r][0], t)) return r;
        }

        return -1;
      };
    },
    4037: function _(e, t, r) {
      var n = r(8363),
          i = r(3674);

      e.exports = function (e, t) {
        return e && n(t, i(t), e);
      };
    },
    3886: function _(e, t, r) {
      var n = r(8363),
          i = r(1704);

      e.exports = function (e, t) {
        return e && n(t, i(t), e);
      };
    },
    9465: function _(e, t, r) {
      var n = r(8777);

      e.exports = function (e, t, r) {
        "__proto__" == t && n ? n(e, t, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[t] = r;
      };
    },
    5990: function _(e, t, r) {
      var n = r(6384),
          i = r(7412),
          o = r(4865),
          a = r(4037),
          l = r(3886),
          s = r(4626),
          c = r(278),
          u = r(8805),
          d = r(1911),
          h = r(8234),
          f = r(6904),
          p = r(4160),
          g = r(3824),
          m = r(9148),
          v = r(8517),
          y = r(1469),
          b = r(4144),
          x = r(6688),
          w = r(3218),
          C = r(2928),
          k = r(3674),
          S = r(1704),
          M = "[object Arguments]",
          L = "[object Function]",
          T = "[object Object]",
          _ = {};
      _[M] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object DataView]"] = _["[object Boolean]"] = _["[object Date]"] = _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Map]"] = _["[object Number]"] = _[T] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object Symbol]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Error]"] = _[L] = _["[object WeakMap]"] = !1, e.exports = function e(t, r, O, A, N, D) {
        var E,
            W = 1 & r,
            P = 2 & r,
            I = 4 & r;
        if (O && (E = N ? O(t, A, N, D) : O(t)), void 0 !== E) return E;
        if (!w(t)) return t;
        var F = y(t);

        if (F) {
          if (E = g(t), !W) return c(t, E);
        } else {
          var j = p(t),
              z = j == L || "[object GeneratorFunction]" == j;
          if (b(t)) return s(t, W);

          if (j == T || j == M || z && !N) {
            if (E = P || z ? {} : v(t), !W) return P ? d(t, l(E, t)) : u(t, a(E, t));
          } else {
            if (!_[j]) return N ? t : {};
            E = m(t, j, W);
          }
        }

        D || (D = new n());
        var H = D.get(t);
        if (H) return H;
        D.set(t, E), C(t) ? t.forEach(function (n) {
          E.add(e(n, r, O, n, t, D));
        }) : x(t) && t.forEach(function (n, i) {
          E.set(i, e(n, r, O, i, t, D));
        });
        var R = F ? void 0 : (I ? P ? f : h : P ? S : k)(t);
        return i(R || t, function (n, i) {
          R && (n = t[i = n]), o(E, i, e(n, r, O, i, t, D));
        }), E;
      };
    },
    3118: function _(e, t, r) {
      var n = r(3218),
          i = Object.create,
          o = function () {
        function e() {}

        return function (t) {
          if (!n(t)) return {};
          if (i) return i(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();

      e.exports = o;
    },
    8866: function _(e, t, r) {
      var n = r(2488),
          i = r(1469);

      e.exports = function (e, t, r) {
        var o = t(e);
        return i(e) ? o : n(o, r(e));
      };
    },
    4239: function _(e, t, r) {
      var n = r(2705),
          i = r(9607),
          o = r(2333),
          a = n ? n.toStringTag : void 0;

      e.exports = function (e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e);
      };
    },
    9454: function _(e, t, r) {
      var n = r(4239),
          i = r(7005);

      e.exports = function (e) {
        return i(e) && "[object Arguments]" == n(e);
      };
    },
    5588: function _(e, t, r) {
      var n = r(4160),
          i = r(7005);

      e.exports = function (e) {
        return i(e) && "[object Map]" == n(e);
      };
    },
    8458: function _(e, t, r) {
      var n = r(3560),
          i = r(5346),
          o = r(3218),
          a = r(346),
          l = /^\[object .+?Constructor\]$/,
          s = Function.prototype,
          c = Object.prototype,
          u = s.toString,
          d = c.hasOwnProperty,
          h = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

      e.exports = function (e) {
        return !(!o(e) || i(e)) && (n(e) ? h : l).test(a(e));
      };
    },
    9221: function _(e, t, r) {
      var n = r(4160),
          i = r(7005);

      e.exports = function (e) {
        return i(e) && "[object Set]" == n(e);
      };
    },
    8749: function _(e, t, r) {
      var n = r(4239),
          i = r(1780),
          o = r(7005),
          a = {};
      a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
        return o(e) && i(e.length) && !!a[n(e)];
      };
    },
    280: function _(e, t, r) {
      var n = r(5726),
          i = r(6916),
          o = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        if (!n(e)) return i(e);
        var t = [];

        for (var r in Object(e)) {
          o.call(e, r) && "constructor" != r && t.push(r);
        }

        return t;
      };
    },
    313: function _(e, t, r) {
      var n = r(3218),
          i = r(5726),
          o = r(3498),
          a = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        if (!n(e)) return o(e);
        var t = i(e),
            r = [];

        for (var l in e) {
          ("constructor" != l || !t && a.call(e, l)) && r.push(l);
        }

        return r;
      };
    },
    2545: function _(e) {
      e.exports = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e;) {
          n[r] = t(r);
        }

        return n;
      };
    },
    1717: function _(e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    4318: function _(e, t, r) {
      var n = r(1149);

      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new n(t).set(new n(e)), t;
      };
    },
    4626: function _(e, t, r) {
      e = r.nmd(e);
      var n = r(5639),
          i = t && !t.nodeType && t,
          o = i && e && !e.nodeType && e,
          a = o && o.exports === i ? n.Buffer : void 0,
          l = a ? a.allocUnsafe : void 0;

      e.exports = function (e, t) {
        if (t) return e.slice();
        var r = e.length,
            n = l ? l(r) : new e.constructor(r);
        return e.copy(n), n;
      };
    },
    7157: function _(e, t, r) {
      var n = r(4318);

      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      };
    },
    3147: function _(e) {
      var t = /\w*$/;

      e.exports = function (e) {
        var r = new e.constructor(e.source, t.exec(e));
        return r.lastIndex = e.lastIndex, r;
      };
    },
    419: function _(e, t, r) {
      var n = r(2705),
          i = n ? n.prototype : void 0,
          o = i ? i.valueOf : void 0;

      e.exports = function (e) {
        return o ? Object(o.call(e)) : {};
      };
    },
    7133: function _(e, t, r) {
      var n = r(4318);

      e.exports = function (e, t) {
        var r = t ? n(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      };
    },
    278: function _(e) {
      e.exports = function (e, t) {
        var r = -1,
            n = e.length;

        for (t || (t = Array(n)); ++r < n;) {
          t[r] = e[r];
        }

        return t;
      };
    },
    8363: function _(e, t, r) {
      var n = r(4865),
          i = r(9465);

      e.exports = function (e, t, r, o) {
        var a = !r;
        r || (r = {});

        for (var l = -1, s = t.length; ++l < s;) {
          var c = t[l],
              u = o ? o(r[c], e[c], c, r, e) : void 0;
          void 0 === u && (u = e[c]), a ? i(r, c, u) : n(r, c, u);
        }

        return r;
      };
    },
    8805: function _(e, t, r) {
      var n = r(8363),
          i = r(9551);

      e.exports = function (e, t) {
        return n(e, i(e), t);
      };
    },
    1911: function _(e, t, r) {
      var n = r(8363),
          i = r(1442);

      e.exports = function (e, t) {
        return n(e, i(e), t);
      };
    },
    4429: function _(e, t, r) {
      var n = r(5639)["__core-js_shared__"];
      e.exports = n;
    },
    8777: function _(e, t, r) {
      var n = r(852),
          i = function () {
        try {
          var e = n(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      }();

      e.exports = i;
    },
    1957: function _(e, t, r) {
      var n = "object" == _typeof(r.g) && r.g && r.g.Object === Object && r.g;
      e.exports = n;
    },
    8234: function _(e, t, r) {
      var n = r(8866),
          i = r(9551),
          o = r(3674);

      e.exports = function (e) {
        return n(e, o, i);
      };
    },
    6904: function _(e, t, r) {
      var n = r(8866),
          i = r(1442),
          o = r(1704);

      e.exports = function (e) {
        return n(e, o, i);
      };
    },
    5050: function _(e, t, r) {
      var n = r(7019);

      e.exports = function (e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
      };
    },
    852: function _(e, t, r) {
      var n = r(8458),
          i = r(7801);

      e.exports = function (e, t) {
        var r = i(e, t);
        return n(r) ? r : void 0;
      };
    },
    5924: function _(e, t, r) {
      var n = r(5569)(Object.getPrototypeOf, Object);
      e.exports = n;
    },
    9607: function _(e, t, r) {
      var n = r(2705),
          i = Object.prototype,
          o = i.hasOwnProperty,
          a = i.toString,
          l = n ? n.toStringTag : void 0;

      e.exports = function (e) {
        var t = o.call(e, l),
            r = e[l];

        try {
          e[l] = void 0;
          var n = !0;
        } catch (e) {}

        var i = a.call(e);
        return n && (t ? e[l] = r : delete e[l]), i;
      };
    },
    9551: function _(e, t, r) {
      var n = r(4963),
          i = r(479),
          o = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          l = a ? function (e) {
        return null == e ? [] : (e = Object(e), n(a(e), function (t) {
          return o.call(e, t);
        }));
      } : i;
      e.exports = l;
    },
    1442: function _(e, t, r) {
      var n = r(2488),
          i = r(5924),
          o = r(9551),
          a = r(479),
          l = Object.getOwnPropertySymbols ? function (e) {
        for (var t = []; e;) {
          n(t, o(e)), e = i(e);
        }

        return t;
      } : a;
      e.exports = l;
    },
    4160: function _(e, t, r) {
      var n = r(8552),
          i = r(7071),
          o = r(3818),
          a = r(8525),
          l = r(577),
          s = r(4239),
          c = r(346),
          u = "[object Map]",
          d = "[object Promise]",
          h = "[object Set]",
          f = "[object WeakMap]",
          p = "[object DataView]",
          g = c(n),
          m = c(i),
          v = c(o),
          y = c(a),
          b = c(l),
          x = s;
      (n && x(new n(new ArrayBuffer(1))) != p || i && x(new i()) != u || o && x(o.resolve()) != d || a && x(new a()) != h || l && x(new l()) != f) && (x = function x(e) {
        var t = s(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
        if (n) switch (n) {
          case g:
            return p;

          case m:
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
    1789: function _(e, t, r) {
      var n = r(4536);

      e.exports = function () {
        this.__data__ = n ? n(null) : {}, this.size = 0;
      };
    },
    401: function _(e) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      };
    },
    7667: function _(e, t, r) {
      var n = r(4536),
          i = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var t = this.__data__;

        if (n) {
          var r = t[e];
          return "__lodash_hash_undefined__" === r ? void 0 : r;
        }

        return i.call(t, e) ? t[e] : void 0;
      };
    },
    1327: function _(e, t, r) {
      var n = r(4536),
          i = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : i.call(t, e);
      };
    },
    1866: function _(e, t, r) {
      var n = r(4536);

      e.exports = function (e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this;
      };
    },
    3824: function _(e) {
      var t = Object.prototype.hasOwnProperty;

      e.exports = function (e) {
        var r = e.length,
            n = new e.constructor(r);
        return r && "string" == typeof e[0] && t.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      };
    },
    9148: function _(e, t, r) {
      var n = r(4318),
          i = r(7157),
          o = r(3147),
          a = r(419),
          l = r(7133);

      e.exports = function (e, t, r) {
        var s = e.constructor;

        switch (t) {
          case "[object ArrayBuffer]":
            return n(e);

          case "[object Boolean]":
          case "[object Date]":
            return new s(+e);

          case "[object DataView]":
            return i(e, r);

          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return l(e, r);

          case "[object Map]":
            return new s();

          case "[object Number]":
          case "[object String]":
            return new s(e);

          case "[object RegExp]":
            return o(e);

          case "[object Set]":
            return new s();

          case "[object Symbol]":
            return a(e);
        }
      };
    },
    8517: function _(e, t, r) {
      var n = r(3118),
          i = r(5924),
          o = r(5726);

      e.exports = function (e) {
        return "function" != typeof e.constructor || o(e) ? {} : n(i(e));
      };
    },
    5776: function _(e) {
      var t = /^(?:0|[1-9]\d*)$/;

      e.exports = function (e, r) {
        var n = _typeof(e);

        return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r;
      };
    },
    7019: function _(e) {
      e.exports = function (e) {
        var t = _typeof(e);

        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
      };
    },
    5346: function _(e, t, r) {
      var n,
          i = r(4429),
          o = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";

      e.exports = function (e) {
        return !!o && o in e;
      };
    },
    5726: function _(e) {
      var t = Object.prototype;

      e.exports = function (e) {
        var r = e && e.constructor;
        return e === ("function" == typeof r && r.prototype || t);
      };
    },
    7040: function _(e) {
      e.exports = function () {
        this.__data__ = [], this.size = 0;
      };
    },
    4125: function _(e, t, r) {
      var n = r(8470),
          i = Array.prototype.splice;

      e.exports = function (e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0 || (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, 0));
      };
    },
    2117: function _(e, t, r) {
      var n = r(8470);

      e.exports = function (e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1];
      };
    },
    7518: function _(e, t, r) {
      var n = r(8470);

      e.exports = function (e) {
        return n(this.__data__, e) > -1;
      };
    },
    4705: function _(e, t, r) {
      var n = r(8470);

      e.exports = function (e, t) {
        var r = this.__data__,
            i = n(r, e);
        return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
      };
    },
    4785: function _(e, t, r) {
      var n = r(1989),
          i = r(8407),
          o = r(7071);

      e.exports = function () {
        this.size = 0, this.__data__ = {
          hash: new n(),
          map: new (o || i)(),
          string: new n()
        };
      };
    },
    1285: function _(e, t, r) {
      var n = r(5050);

      e.exports = function (e) {
        var t = n(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      };
    },
    6e3: function _(e, t, r) {
      var n = r(5050);

      e.exports = function (e) {
        return n(this, e).get(e);
      };
    },
    9916: function _(e, t, r) {
      var n = r(5050);

      e.exports = function (e) {
        return n(this, e).has(e);
      };
    },
    5265: function _(e, t, r) {
      var n = r(5050);

      e.exports = function (e, t) {
        var r = n(this, e),
            i = r.size;
        return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
      };
    },
    4536: function _(e, t, r) {
      var n = r(852)(Object, "create");
      e.exports = n;
    },
    6916: function _(e, t, r) {
      var n = r(5569)(Object.keys, Object);
      e.exports = n;
    },
    3498: function _(e) {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) {
          t.push(r);
        }
        return t;
      };
    },
    1167: function _(e, t, r) {
      e = r.nmd(e);

      var n = r(1957),
          i = t && !t.nodeType && t,
          o = i && e && !e.nodeType && e,
          a = o && o.exports === i && n.process,
          l = function () {
        try {
          return o && o.require && o.require("util").types || a && a.binding && a.binding("util");
        } catch (e) {}
      }();

      e.exports = l;
    },
    2333: function _(e) {
      var t = Object.prototype.toString;

      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: function _(e) {
      e.exports = function (e, t) {
        return function (r) {
          return e(t(r));
        };
      };
    },
    5639: function _(e, t, r) {
      var n = r(1957),
          i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
          o = n || i || Function("return this")();
      e.exports = o;
    },
    7465: function _(e, t, r) {
      var n = r(8407);

      e.exports = function () {
        this.__data__ = new n(), this.size = 0;
      };
    },
    3779: function _(e) {
      e.exports = function (e) {
        var t = this.__data__,
            r = t.delete(e);
        return this.size = t.size, r;
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
    4309: function _(e, t, r) {
      var n = r(8407),
          i = r(7071),
          o = r(3369);

      e.exports = function (e, t) {
        var r = this.__data__;

        if (r instanceof n) {
          var a = r.__data__;
          if (!i || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new o(a);
        }

        return r.set(e, t), this.size = r.size, this;
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
    361: function _(e, t, r) {
      var n = r(5990);

      e.exports = function (e) {
        return n(e, 5);
      };
    },
    7813: function _(e) {
      e.exports = function (e, t) {
        return e === t || e != e && t != t;
      };
    },
    5694: function _(e, t, r) {
      var n = r(9454),
          i = r(7005),
          o = Object.prototype,
          a = o.hasOwnProperty,
          l = o.propertyIsEnumerable,
          s = n(function () {
        return arguments;
      }()) ? n : function (e) {
        return i(e) && a.call(e, "callee") && !l.call(e, "callee");
      };
      e.exports = s;
    },
    1469: function _(e) {
      var t = Array.isArray;
      e.exports = t;
    },
    8612: function _(e, t, r) {
      var n = r(3560),
          i = r(1780);

      e.exports = function (e) {
        return null != e && i(e.length) && !n(e);
      };
    },
    4144: function _(e, t, r) {
      e = r.nmd(e);
      var n = r(5639),
          i = r(5062),
          o = t && !t.nodeType && t,
          a = o && e && !e.nodeType && e,
          l = a && a.exports === o ? n.Buffer : void 0,
          s = (l ? l.isBuffer : void 0) || i;
      e.exports = s;
    },
    3560: function _(e, t, r) {
      var n = r(4239),
          i = r(3218);

      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
      };
    },
    1780: function _(e) {
      e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
      };
    },
    6688: function _(e, t, r) {
      var n = r(5588),
          i = r(1717),
          o = r(1167),
          a = o && o.isMap,
          l = a ? i(a) : n;
      e.exports = l;
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
    2928: function _(e, t, r) {
      var n = r(9221),
          i = r(1717),
          o = r(1167),
          a = o && o.isSet,
          l = a ? i(a) : n;
      e.exports = l;
    },
    6719: function _(e, t, r) {
      var n = r(8749),
          i = r(1717),
          o = r(1167),
          a = o && o.isTypedArray,
          l = a ? i(a) : n;
      e.exports = l;
    },
    3674: function _(e, t, r) {
      var n = r(4636),
          i = r(280),
          o = r(8612);

      e.exports = function (e) {
        return o(e) ? n(e) : i(e);
      };
    },
    1704: function _(e, t, r) {
      var n = r(4636),
          i = r(313),
          o = r(8612);

      e.exports = function (e) {
        return o(e) ? n(e, !0) : i(e);
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
    695: function _(e) {
      "use strict";

      var t = {};

      e.exports = function (e) {
        if (void 0 === t[e]) {
          var r = document.querySelector(e);
          if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
            r = r.contentDocument.head;
          } catch (e) {
            r = null;
          }
          t[e] = r;
        }

        return t[e];
      };
    },
    3379: function _(e) {
      "use strict";

      var t = [];

      function r(e) {
        for (var r = -1, n = 0; n < t.length; n++) {
          if (t[n].identifier === e) {
            r = n;
            break;
          }
        }

        return r;
      }

      function n(e, n) {
        for (var o = {}, a = [], l = 0; l < e.length; l++) {
          var s = e[l],
              c = n.base ? s[0] + n.base : s[0],
              u = o[c] || 0,
              d = "".concat(c, " ").concat(u);
          o[c] = u + 1;
          var h = r(d),
              f = {
            css: s[1],
            media: s[2],
            sourceMap: s[3]
          };
          -1 !== h ? (t[h].references++, t[h].updater(f)) : t.push({
            identifier: d,
            updater: i(f, n),
            references: 1
          }), a.push(d);
        }

        return a;
      }

      function i(e, t) {
        var r = t.domAPI(t);
        return r.update(e), function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r.update(e = t);
          } else r.remove();
        };
      }

      e.exports = function (e, i) {
        var o = n(e = e || [], i = i || {});
        return function (e) {
          e = e || [];

          for (var a = 0; a < o.length; a++) {
            var l = r(o[a]);
            t[l].references--;
          }

          for (var s = n(e, i), c = 0; c < o.length; c++) {
            var u = r(o[c]);
            0 === t[u].references && (t[u].updater(), t.splice(u, 1));
          }

          o = s;
        };
      };
    },
    9216: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t), t;
      };
    },
    7795: function _(e) {
      "use strict";

      e.exports = function (e) {
        var t = e.insertStyleElement(e);
        return {
          update: function update(r) {
            !function (e, t, r) {
              var n = r.css,
                  i = r.media,
                  o = r.sourceMap;
              i ? e.setAttribute("media", i) : e.removeAttribute("media"), o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(n, e);
            }(t, e, r);
          },
          remove: function remove() {
            !function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            }(t);
          }
        };
      };
    }
  },
      t = {};

  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var o = t[n] = {
      id: n,
      loaded: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
  }

  r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, {
      a: t
    }), t;
  }, r.d = function (e, t) {
    for (var n in t) {
      r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      });
    }
  }, r.g = function () {
    if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
    }
  }(), r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.nmd = function (e) {
    return e.paths = [], e.children || (e.children = []), e;
  }, function () {
    "use strict";

    var e = r(4631),
        t = r.n(e),
        n = (r(790), r(4504), r(3379)),
        i = r.n(n),
        o = r(7795),
        a = r.n(o),
        l = r(695),
        s = r.n(l),
        c = r(9216),
        u = r.n(c),
        d = r(3501),
        h = {
      styleTagTransform: function styleTagTransform(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(e));
        }
      },
      setAttributes: function setAttributes(e) {
        var t = r.nc;
        t && e.setAttribute("nonce", t);
      },
      insert: function insert(e) {
        var t = s()("head");
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        t.appendChild(e);
      }
    };
    h.domAPI = a(), h.insertStyleElement = u(), i()(d.Z, h), d.Z && d.Z.locals && d.Z.locals;
    var f = r(1368),
        p = {
      styleTagTransform: function styleTagTransform(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(document.createTextNode(e));
        }
      },
      setAttributes: function setAttributes(e) {
        var t = r.nc;
        t && e.setAttribute("nonce", t);
      },
      insert: function insert(e) {
        var t = s()("head");
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        t.appendChild(e);
      }
    };
    p.domAPI = a(), p.insertStyleElement = u(), i()(f.Z, p), f.Z && f.Z.locals && f.Z.locals;
    var g = r(361),
        m = r.n(g);
    var v = Error("undefined"),
        y = {
      undefinedErr: v,
      htmltag: function htmltag(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var n = document.createElement(e);
        if (n) return t && (n.innerText = t), r && n.classList.add(r), n;
        throw v;
      },
      changeTitle: function changeTitle(e) {
        var t = document.querySelector("title");
        if (!t) throw v;
        t.innerText = e;
      },
      objectCopy: function objectCopy(e) {
        return m()(e);
      },
      textCopy: function textCopy(e) {
        var t = document.createElement("textarea");
        t.textContent = e;
        var r = document.getElementsByTagName("body")[0];
        r.appendChild(t), t.select();
        var n = document.execCommand("copy");
        return r.removeChild(t), n;
      }
    };

    (function (e) {
      var r;
      !function (e) {
        e[e.set = 0] = "set", e[e.start = 1] = "start", e[e.end = 2] = "end", e[e.move = 3] = "move", e[e.action = 4] = "action", e[e.start_sort = 5] = "start_sort", e[e.end_sort = 6] = "end_sort", e[e.move_list = 7] = "move_list", e[e.buffset = 8] = "buffset", e[e.buffadd = 9] = "buffadd", e[e.buffminus = 10] = "buffminus", e[e.switch = 11] = "switch", e[e.order = 12] = "order", e[e.skillcard = 13] = "skillcard", e[e.color = 14] = "color", e[e.add = 15] = "add";
      }(r || (r = {}));

      var n = function () {
        var e = {};
        return ["set", "start", "end", "move", "action", "start_sort", "end_sort", "move_list", "buffset", "buffadd", "buffminus", "switch", "order", "skillcard", "color", "add"].forEach(function (t) {
          e[t] = r[t];
        }), [["mv_ls", r.move_list], ["b", r.buffset], ["b+", r.buffadd], ["b-", r.buffminus], ["a", r.add], ["m", r.move], ["ac", r.action], ["sw", r.switch], ["c", r.color], ["sc", r.skillcard]].forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              t = _ref2[0],
              r = _ref2[1];

          e[t] = r;
        }), e;
      }();

      var i = /*#__PURE__*/function () {
        function i(e) {
          _classCallCheck(this, i);

          this.timeline_parsed = e, this.i_loading = 0;
        }

        _createClass(i, [{
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

            var r = this,
                n = function n() {
              return _this.timeline_parsed[t].type;
            };

            for (t = 0; t < this.timeline_parsed.length; t++) {
              4 === n() && _i2(), e.push(this.timeline_parsed[t]);
            }

            function _i2() {
              var o = [t];

              for (e.push(r.timeline_parsed[t]), t++; t < r.timeline_parsed.length; t++) {
                if (t + 1 === r.timeline_parsed.length && (r.i_loading = (null == o ? void 0 : o[1]) || o[0], r.error_unexpectedToken("]が不足しています")), 4 === n()) o.push(t), _i2();else {
                  if (1 === n()) continue;

                  if (5 === n()) {
                    o.pop();
                    break;
                  }
                }
                e.push(r.timeline_parsed[t]);
              }
            }

            for (var _t3 = 0, _r2 = !0; _t3 < e.length; _t3++) {
              1 === e[_t3].type ? (_r2 && (e.splice(_t3, 1), _t3--), _r2 = !0) : _r2 = !1;
            }

            for (var _t4 = e.length - 1; _t4 >= 0 && 1 === e[_t4].type; _t4--) {
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
              var _t5 = this.loadStatement();

              e.push(_t5), 1 !== this.now_val_type && this.error_unexpectedToken("]のあとにコメント以外の文を書くことはできません");
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
                _i3 = function () {
              var e = n[t];
              if (void 0 !== e) return e;
              throw Error("コマンド名に誤りがあります");
            }();

            this.nextVal();

            var o = function o() {
              e.push(_this2.now_val.value), _this2.nextVal();
            };

            if (_i3 === r.move_list) {
              this.checkIsWord();
              var _t6 = this.now_val.value;
              this.nextVal(), 4 !== this.now_val_type && this.error_unexpectedToken("move_listの第二引数は [ から始まる必要があります"), this.nextVal();
              var _r3 = [];
              if (5 !== this.now_val_type) for (;;) {
                var _e2 = void 0,
                    _t7 = void 0;

                switch (this.now_val_type) {
                  case 4:
                    this.nextVal(), _e2 = this.getMoveListInList(5), _r3.push({
                      mode: 0,
                      value: _e2
                    });
                    break;

                  case 6:
                    this.nextVal(), _e2 = this.getMoveListInList(7), _r3.push({
                      mode: 1,
                      value: _e2
                    });
                    break;

                  case 2:
                    this.nextVal(), _e2 = this.getCommandListInList(), _r3.push({
                      mode: 2,
                      value: _e2
                    });
                    break;

                  case 9:
                    _t7 = {
                      mode: 3,
                      value: []
                    }, _t7.value.push(this.now_val.value), _r3.push(_t7), this.nextVal();
                    break;

                  default:
                    this.error_unexpectedToken("move_list内のパースエラー　正しい値が入力されているか確認してください");
                }

                if (5 === this.now_val_type) break;
                0 === this.now_val_type ? this.nextVal() : this.error_unexpectedToken("コンマかmove_list終了の]が不足しています");
              }
              e = [_i3, _t6, _r3], this.nextVal();
            } else for (e = [_i3];;) {
              if (9 === this.now_val_type) o();else {
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
            var e = [];
            var t = 0;

            e: for (;;) {
              switch (this.now_val_type) {
                case 9:
                  if (0 === t) {
                    var _t8 = n[this.now_val.value];
                    _t8 ? e.push(_t8) : this.error_unexpectedToken("コマンド名に誤りがあります");
                  } else e.push(this.now_val.value);

                  this.nextVal();
                  break;

                default:
                  this.error_unexpectedToken("move_list内のかっこが閉じられていないか引数が不正です");
              }

              switch (this.now_val_type) {
                case 3:
                  this.nextVal();
                  break e;

                case 0:
                  this.nextVal();
                  break;

                default:
                  this.error_unexpectedToken("move_list内のかっこが閉じれていないか引数が不正、もしくはコンマが不足しています");
              }

              t++;
            }

            return e;
          }
        }, {
          key: "getMoveListInList",
          value: function getMoveListInList(e) {
            var t = [];
            if (this.now_val_type === e) return t;

            e: for (;;) {
              switch (this.now_val_type) {
                case 9:
                  t.push(this.now_val.value), this.nextVal();
                  break;

                default:
                  this.error_unexpectedToken("move_list内のかっこが閉じられていないか引数が不正です");
              }

              switch (this.now_val_type) {
                case e:
                  this.nextVal();
                  break e;

                case 0:
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
            9 !== this.now_val_type && this.error_unexpectedToken();
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
            var t = y.htmltag("span");
            if (t.appendChild(y.htmltag("span", "→→" + this.now_val.value + "←←", "errMsg")), 1 !== this.now_val.type) for (var _e3 = this.i_loading + 1; _e3 < this.timeline_parsed.length && 1 !== this.timeline_parsed[_e3].type; _e3++) {
              t.insertAdjacentText("beforeend", this.timeline_parsed[_e3].value);
            }

            for (var _e4 = this.i_loading - 1; _e4 >= 0 && 1 !== this.timeline_parsed[_e4].type; _e4--) {
              t.insertAdjacentText("afterbegin", this.timeline_parsed[_e4].value);
            }

            8 === this.now_val.type && (e = "予約文字です");
            var r = y.htmltag("span");
            throw r.insertAdjacentText("beforeend", "想定外の値: 「" + JSON.stringify(this.now_val.value) + "」"), r.appendChild(y.htmltag("br")), r.appendChild(t), r.appendChild(y.htmltag("br")), r.insertAdjacentText("beforeend", e), Error(r.outerHTML);
          }
        }]);

        return i;
      }();

      var o = /*#__PURE__*/function () {
        function o(e) {
          _classCallCheck(this, o);

          this.timeline_str = e, this.timeline_parsed = [], this._now_str = "", this.i_nowloadstr = 0;
        }

        _createClass(o, [{
          key: "parse",
          value: function parse() {
            return this.timeline_parsed = this.lexicalAnalysis(), this.timeline_parsed;
          }
        }, {
          key: "lexicalAnalysis",
          value: function lexicalAnalysis() {
            var e = this.timeline_str;
            var t = [];
            var r = "";
            e = e.replaceAll(/\\(\n|$)/g, "");

            var _loop = function _loop(_i5) {
              var _o2 = e[_i5];
              var a = {
                value: _o2
              };

              var l = function l(e) {
                a = {
                  type: e,
                  value: a.value
                };
              };

              switch (_o2) {
                case ",":
                  l(0);
                  break;

                case "\n":
                  l(1);
                  break;

                case " ":
                case "　":
                case "\t":
                  n();
                  _i4 = _i5;
                  return "continue";

                case "#":
                  for (; _i5 < e.length; _i5++) {
                    if ("\n" === e[_i5]) {
                      _i5--;
                      _i4 = _i5;
                      return "continue|e";
                    }
                  }

                  _i4 = _i5;
                  return "continue";

                case "{":
                  l(2);
                  break;

                case "}":
                  l(3);
                  break;

                case "[":
                  l(4);
                  break;

                case "]":
                  l(5);
                  break;

                case "<":
                  l(6);
                  break;

                case ">":
                  l(7);
                  break;

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
                  l(8);
                  break;

                default:
                  r += _o2;
                  _i4 = _i5;
                  return "continue|e";
              }

              if (n(), !("type" in a)) throw Error("未到達コード");
              t.push(a);
              _i4 = _i5;
            };

            e: for (var _i4 = 0; _i4 < e.length; _i4++) {
              var _ret = _loop(_i4);

              if (_ret === "continue") continue;
              if (_ret === "continue|e") continue e;
            }

            function n() {
              r.length > 0 && (t.push({
                type: 9,
                value: r
              }), r = "");
            }

            return n(), t;
          }
        }]);

        return o;
      }();

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

        return a;
      }();

      var l = new a(void 0, !1);

      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this.current = [], this.switchData = [], this.cardData = [], this.comment = [], this.color = void 0, this.place_of_currentTimeline = 0;
        }

        _createClass(s, [{
          key: "move",
          value: function move(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ID_of_firstChara();
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
            if (this.setColor(t, this.place_of_currentTimeline), t !== this.ID_of_firstChara() && !1 === r) throw new Error("最初のキャラ以外は操作できません");
            var n = this.get_chara_by_ID(t).timeline_OrderValue,
                i = n + e - (n - this.OrderValue_of_firstChara());
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
                r = -1;

            for (var _t9 = this.current.length - 1; _t9 > this.place_of_currentTimeline; _t9--) {
              if (e >= this.current[_t9].timeline_OrderValue) {
                r = _t9;
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
              r = y.objectCopy(this.get_chara_by_ID(e));
            } catch (t) {
              r = {
                id: e
              };
            }

            r.timeline_OrderValue = t;
            var n = this.place_to_moved(t);
            this.current.splice(n, 0, r);
          }
        }, {
          key: "addChara",
          value: function addChara(e, t) {
            var r = {
              id: e,
              timeline_OrderValue: t,
              type: 0
            };
            this.current.splice(this.place_of_currentTimeline, 0, r);
          }
        }, {
          key: "addSkillCard",
          value: function addSkillCard(e, t, r) {
            var n,
                i = !0;

            try {
              n = this.get_chara_by_ID(e);
            } catch (e) {
              i = !1;
            }

            if (i) {
              if (!n) throw Error("ここは実行されないはず");
              if (1 !== n.type) throw Error("指定された名前はスキルカードではありません");
              n.time = r, this.current[this.placeToChara(e)] = n;
            } else {
              var _n2 = this.OrderValue_of_firstChara() + t,
                  _i6 = this.place_to_moved(_n2);

              this.current.splice(_i6, 0, {
                type: 1,
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
            if (this.place_of_currentTimeline++, 1 === (null === (e = this.firstChara) || void 0 === e ? void 0 : e.type)) if (this.firstChara.time--, 0 === this.firstChara.time) this.nextturn();else {
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
            for (var _t10 = this.place_of_currentTimeline; _t10 < this.current.length; _t10++) {
              if (this.current[_t10].id === e) return _t10;
            }

            throw Error("Not Found!IDに誤りがあります");
          }
        }]);

        return s;
      }();

      var c = /*#__PURE__*/function () {
        function c(e, t, r) {
          var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, c);

          this.id = e, this.SPD = t, this.SPD_buff = r, this.LoadFactorReduce = n;
        }

        _createClass(c, [{
          key: "calculateOrderValue",
          value: function calculateOrderValue(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var r = this.SPD,
                n = this.SPD_buff / 100,
                i = Math.min(Math.max(124 - Math.floor(r / 2), 0), 100),
                o = Math.floor(i * (e / 100) * (1 - t) * (1 - n));
            return Math.max(Math.min(o, 500), 15);
          }
        }, {
          key: "initOrderValue",
          value: function initOrderValue() {
            return this.calculateOrderValue(100, 0);
          }
        }]);

        return c;
      }();

      var u, d, h;

      function f() {
        var e = new a(location.href).getParam("TL"),
            t = "自動保存:TL生成ツール";
        e !== l.getParam("TL") && (0 === e.length ? history.replaceState(null, t, l.href) : history.pushState(null, t, l.href), y.changeTitle(t));
      }

      function p() {
        var e, t, n, a;
        var p = document.getElementById("error"),
            g = document.getElementById("info");
        var m;
        if (!u) throw y.undefinedErr;
        m = u.getValue(), l.setParam("TL", m), f(), h = {
          main: [],
          set: []
        };
        var b = {},
            x = new s(),
            w = {};
        if (!p || !g) throw y.undefinedErr;
        var C;
        p.innerHTML = "", g.innerHTML = "";

        try {
          var _e5 = new o(m).parse();

          C = new i(_e5).parse();
        } catch (e) {
          throw p.innerHTML = e, e;
        }

        var k = 0;

        for (var _i7 = 0; _i7 < C.length; _i7++) {
          try {
            (function () {
              var o = null === (e = C[_i7]) || void 0 === e ? void 0 : e[0],
                  l = null === (t = C[_i7]) || void 0 === t ? void 0 : t[1],
                  s = null === (n = C[_i7]) || void 0 === n ? void 0 : n[2],
                  u = null === (a = C[_i7]) || void 0 === a ? void 0 : a[3];
              var d = void 0,
                  f = void 0,
                  p = void 0,
                  m = void 0,
                  v = void 0,
                  S = void 0,
                  M = void 0,
                  L = void 0,
                  T = void 0;

              switch (k) {
                case 0:
                  switch (o) {
                    case r.set:
                      d = l.toString(), f = Number(s), p = Number(u) || 0, b[d] = new c(d, f, p), x.setChara(d, b[d].initOrderValue()), 0 === h.set.length ? h.set = [C[_i7]] : h.set.push(C[_i7]);
                      break;

                    case r.start:
                      k = 1, x.inited();
                      break;

                    case r.start_sort:
                      k = 2, x.inited();
                      break;

                    default:
                      throw Error("need 'start'");
                  }

                  break;

                case 1:
                  if (T = C[_i7], T[0] === r.move_list) throw Error("start_sort ~ end_sort内にmove_listを書いてください");
                  O.apply(void 0, _toConsumableArray(T));
                  break;

                case 2:
                  switch (o) {
                    case r.move_list:
                      d = l, v = s, w[d] = v;
                      break;

                    case r.end_sort:
                      _(), k = 4;
                      break;

                    default:
                      throw Error("no command found:「" + o + "」");
                  }

                  break;

                case 4:
                  switch (o) {
                    case r.start:
                      k = 1;
                      break;

                    case r.start_sort:
                      k = 2;
                      break;

                    default:
                      throw Error("need 'start'");
                  }

                  break;

                default:
                  throw Error("内部エラー");
              }

              function _() {
                for (var e;;) {
                  var _t11 = x.ID_of_firstChara();

                  if (void 0 === (null === (e = w[_t11]) || void 0 === e ? void 0 : e[0])) {
                    var _ret2 = function () {
                      var e = {};

                      if (Object.keys(w).forEach(function (t) {
                        0 !== w[t].length && (e[t] = w[t]);
                      }), 0 !== Object.keys(e).length) {
                        if (!g) throw y.undefinedErr;
                        g.insertAdjacentText("beforeend", "ⓘinfo :move_listに使われていないスキルがあります:" + JSON.stringify(Object.fromEntries(Object.entries(e).map(function (_ref3) {
                          var _ref4 = _slicedToArray(_ref3, 2),
                              e = _ref4[0],
                              t = _ref4[1];

                          return [e, t.map(function (e) {
                            return e.value.length > 0 && 2 === e.mode && (e.value[0] = r[e.value[0]]), 1 === e.value.length && (e.value = e.value[0]), e.value;
                          })];
                        }))).replaceAll('"', ""));
                      }

                      return "break";
                    }();

                    if (_ret2 === "break") break;
                  }

                  var _n3 = w[_t11].shift();

                  if (!_n3) throw Error("内部エラーの可能性があります。このメッセージが出たらお知らせお願いします。");

                  try {
                    if (1 === _n3.mode) {
                      var _n3$value = _slicedToArray(_n3.value, 1),
                          _e6 = _n3$value[0],
                          _i8 = _e6.match(/^[a-zA-Z]/g),
                          _o3 = _e6.match(/\d+/g);

                      if (_i8 && O(r.color, _i8[0]), !_o3) throw Error("硬直が見つかりませんでした");
                      O(r.order, _t11, _o3[0]);
                    } else if (3 === _n3.mode) {
                      var _n3$value2 = _slicedToArray(_n3.value, 1),
                          _e7 = _n3$value2[0],
                          _i9 = _e7.match(/^[a-zA-Z]/g),
                          _o4 = _e7.match(/\d+/g);

                      if (_i9 && O(r.color, _i9[0]), !_o4) throw Error("硬直値が見つかりませんでした");
                      O(r.action, _t11, _o4[0]);
                    } else if (0 === _n3.mode) {
                      var _n3$value3 = _slicedToArray(_n3.value, 3),
                          _e8 = _n3$value3[0],
                          _i10 = _n3$value3[1],
                          _o5 = _n3$value3[2];

                      O(r.switch, _t11, _e8, _i10, _o5 || "0"), w[_e8] = w[_t11], w[_t11] = [];
                    } else {
                      if (2 !== _n3.mode) throw Error("テキストのパースエラー");
                      O.apply(void 0, _toConsumableArray(_n3.value));
                    }
                  } catch (e) {
                    throw Error(e + ":  " + JSON.stringify(_n3.value) + " ");
                  }
                }
              }

              function O() {
                for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
                  e[_key] = arguments[_key];
                }

                var t = e[0],
                    n = e[1],
                    i = e[2],
                    o = e[3],
                    a = e[4];

                if (t !== r.end) {
                  var _n4 = e;
                  _n4[0] = r[t], 0 === h.main.length && (h.main = []), h.main.push(_n4);
                }

                var l, s, u, d, p, g, v, y, w;

                switch (t) {
                  case r.buffset:
                    l = n, s = Number(i) || 0, b[l].SPD_buff = s;
                    break;

                  case r.buffadd:
                    l = n, s = Number(i) || 0, b[l].SPD_buff += s;
                    break;

                  case r.buffminus:
                    l = n, s = Number(i) || 0, b[l].SPD_buff -= s;
                    break;

                  case r.add:
                    l = n, f = Number(i), s = Number(o) || 0, b[l] = new c(l, f, s), x.addChara(l, b[l].initOrderValue());
                    break;

                  case r.move:
                    m = Number(n), l = i, y = "true" === o, x.move(b[x.ID_of_firstChara()].calculateOrderValue(m), l, y);
                    break;

                  case r.action:
                    l = n, m = Number(i), w = "true" === o, x.move(b[x.ID_of_firstChara()].calculateOrderValue(m), l, w);
                    break;

                  case r.order:
                    l = n, L = Number(i), x.move(L, l, !1);
                    break;

                  case r.switch:
                    S = n, M = i, f = Number(o), s = Number(a) || 0, x.switchChara(S, M), b[M] = new c(M, f, s);
                    break;

                  case r.color:
                    u = n, x.color = u;
                    break;

                  case r.skillcard:
                    if (d = n, p = Number(i), m = Number(o), g = Number(a), [p, m, g].includes(NaN)) throw Error("引数不足です");
                    v = new c(d, p, 0), b[d] = v, x.addSkillCard(d, v.calculateOrderValue(m), g);
                    break;

                  case r.end:
                    k = 4;
                    break;

                  default:
                    throw Error("no command found");
                }
              }
            })();
          } catch (e) {
            p.appendChild(y.htmltag("br")), p.insertAdjacentText("beforeend", e);
            break;
          }
        }

        var S = [];

        for (var _e9 in b) {
          S.push(_e9);
        }

        var M = Array.from(new Array(Object.keys(b).length), function () {
          return new Array(x.current.length).fill(void 0);
        });
        x.current.forEach(function (e, t) {
          var r = e.id,
              n = e.timeline_OrderValue,
              i = S.indexOf(r);
          M[i][t] = n;
        }), x.switchData.forEach(function (e) {
          var _e10 = _slicedToArray(e, 3),
              t = _e10[0],
              r = _e10[1],
              n = _e10[2],
              i = S.indexOf(r);

          var o = "";
          o = i < S.indexOf(n) ? "↓↓" : "↑↑", M[i][t] = o;
        }), x.cardData.forEach(function (e) {
          var t = S.indexOf(e[1]);
          M[t][e[0]] = "→";
        });
        var L = x.place_of_currentTimeline + 1,
            T = document.getElementById("firstchara");
        T && (T.innerText = x.ID_of_firstChara());

        var _ = document.getElementById("now_place");

        _ && (_.innerText = String(L)), d = [M, S], function (e, t, r, n) {
          var i = y.htmltag("thead"),
              o = y.htmltag("tr");

          for (var _t12 = 0; _t12 <= e[0].length; _t12++) {
            var _e11 = void 0;

            _e11 = _t12 === n ? y.htmltag("th", _t12.toString(), "now_place") : 0 === _t12 ? y.htmltag("th", "", "nowrap") : y.htmltag("th", _t12.toString()), o.appendChild(_e11);
          }

          i.appendChild(o);

          var _loop2 = function _loop2(_n5) {
            var o = y.htmltag("tr");
            o.appendChild(y.htmltag("td", t[_n5], "nowrap"));

            var _loop3 = function _loop3(_i11) {
              var a = void 0;
              var l = r.find(function (e) {
                return "color" === e[0] && e[1] === t[_n5] && e[2] === _i11;
              }),
                  s = e[_n5][_i11];
              var c = void 0;
              c = "string" == typeof s ? s : "number" == typeof s ? String(s) : "", a = l ? y.htmltag("td", c, "color-" + l[3]) : y.htmltag("td", c), o.appendChild(a);
            };

            for (var _i11 = 0; _i11 < e[0].length; _i11++) {
              _loop3(_i11);
            }

            i.appendChild(o);
          };

          for (var _n5 = 0; _n5 < e.length; _n5++) {
            _loop2(_n5);
          }

          var a = document.querySelector("table");
          if (!a) throw y.undefinedErr;
          a.innerHTML = "", a.appendChild(i);
        }(M, S, x.comment, L), v();
      }

      function g() {
        var _d2 = d,
            _d3 = _slicedToArray(_d2, 2),
            e = _d3[0],
            t = _d3[1];

        var r = "";

        for (var _t13 = 0; _t13 < e[0].length; _t13++) {
          r += "," + (_t13 + 1);
        }

        r += "\n";

        for (var _n6 = 0; _n6 < e.length; _n6++) {
          r += t[_n6];

          for (var _t14 = 0; _t14 < e[0].length; _t14++) {
            r += ",", r += e[_n6][_t14] || "";
          }

          r += "\n";
        }

        !function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "timeline.csv";
          var r = new Uint8Array([239, 187, 191]),
              n = new Blob([r, e], {
            type: "text/csv"
          }),
              i = URL.createObjectURL(n),
              o = document.createElement("a");
          o.href = i, o.download = t, o.style.display = "none", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(i);
        }(r);
      }

      function m() {
        y.textCopy(l.href);
        var e = document.getElementById("copyed");
        if (!e) throw y.undefinedErr;
        e.style.display = "block", setTimeout(function () {
          e.style.display = "none";
        }, 1e3);
      }

      function v() {
        var e = document.getElementById("popup");
        if (!e) throw y.undefinedErr;
        e.innerText = x();
      }

      function b() {
        y.textCopy(x());
        var e = document.getElementById("copyed_popup");
        if (!e) throw y.undefinedErr;
        e.style.display = "block", setTimeout(function () {
          e.style.display = "none";
        }, 1e3);
      }

      function x() {
        return h.set.map(function (e) {
          return e ? e.join(" ") : "";
        }).join("\n") + "\n\nstart\n" + h.main.map(function (e) {
          return e ? "  " + e.join(" ") : "";
        }).join("\n") + "\nend";
      }

      e.onload = function () {
        var r = document.getElementById("csvDownload"),
            n = document.getElementById("copyTL"),
            i = document.getElementById("copy_ConvertedTL"),
            o = document.getElementById("log_convertedTL"),
            a = document.getElementById("jumpTwitter"),
            s = document.getElementById("unzipMoveList"),
            c = document.getElementById("isSet_onbeforeunload"),
            d = document.getElementById("pop11"),
            h = document.getElementById("editor");
        if (!(r && n && i && o && a && s && c && d && h)) throw y.undefinedErr;
        t().defineSimpleMode("kirafan-timeline", {
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
        var x = l.getParam("TL");
        var w = "";
        null !== typeof x && (w = x), u = t()(h, {
          mode: "kirafan-timeline",
          lineNumbers: !0,
          indentUnit: 4,
          theme: "panda-syntax",
          lineWrapping: !0,
          tabSize: 2,
          value: w
        }), u.scrollTo(3, 3), u.on("change", function () {
          p();
        }), u.on("keydown", function (e, t) {
          "/" === t.key && t.ctrlKey && e.toggleComment({
            lineComment: "#"
          });
        }), r.onclick = g, n.onclick = m, o.onclick = v, i.onclick = b, a.onclick = function () {
          e.open("https://twitter.com/Y52en/status/1402239605978517505?s=20", "_blank");
        }, s.onclick = function () {
          d.checked = !0;
        }, e.onbeforeunload = function (e) {
          f(), 0 !== u.getValue().length && c.checked && (e.preventDefault(), e.returnValue = "ページから離れますか？");
        }, p();
      };
    })(window);
  }();
})();
