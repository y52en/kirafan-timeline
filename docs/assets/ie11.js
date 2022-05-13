"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var D3 = Object.defineProperty,
    O3 = Object.defineProperties;
var N3 = Object.getOwnPropertyDescriptors;
var Qp = Object.getOwnPropertySymbols;
var P3 = Object.prototype.hasOwnProperty,
    B3 = Object.prototype.propertyIsEnumerable;

var af = function af(e, n, i) {
  return n in e ? D3(e, n, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
  }) : e[n] = i;
},
    Yp = function Yp(e, n) {
  for (var i in n || (n = {})) {
    P3.call(n, i) && af(e, i, n[i]);
  }

  if (Qp) {
    var _iterator = _createForOfIteratorHelper(Qp(n)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        B3.call(n, i) && af(e, i, n[i]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return e;
},
    Xp = function Xp(e, n) {
  return O3(e, N3(n));
};

var Re = function Re(e, n, i) {
  return af(e, _typeof(n) != "symbol" ? n + "" : n, i), i;
};

var M3 = function M3() {
  var n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;

  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var s = _step2.value;
      a(s);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  new MutationObserver(function (s) {
    var _iterator3 = _createForOfIteratorHelper(s),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var c = _step3.value;

        if (c.type === "childList") {
          var _iterator4 = _createForOfIteratorHelper(c.addedNodes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var p = _step4.value;
              p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function i(s) {
    var c = {};
    return s.integrity && (c.integrity = s.integrity), s.referrerpolicy && (c.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? c.credentials = "include" : s.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }

  function a(s) {
    if (s.ep) return;
    s.ep = !0;
    var c = i(s);
    fetch(s.href, c);
  }
};

M3();
var eo = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    ct = {
  exports: {}
},
    Ce = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

var Bo = Symbol.for("react.element"),
    I3 = Symbol.for("react.portal"),
    R3 = Symbol.for("react.fragment"),
    z3 = Symbol.for("react.strict_mode"),
    H3 = Symbol.for("react.profiler"),
    W3 = Symbol.for("react.provider"),
    $3 = Symbol.for("react.context"),
    U3 = Symbol.for("react.forward_ref"),
    j3 = Symbol.for("react.suspense"),
    K3 = Symbol.for("react.memo"),
    G3 = Symbol.for("react.lazy"),
    Zp = Symbol.iterator;

function V3(e) {
  return e === null || _typeof(e) != "object" ? null : (e = Zp && e[Zp] || e["@@iterator"], typeof e == "function" ? e : null);
}

var Iv = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    Rv = Object.assign,
    zv = {};

function nl(e, n, i) {
  this.props = e, this.context = n, this.refs = zv, this.updater = i || Iv;
}

nl.prototype.isReactComponent = {};

nl.prototype.setState = function (e, n) {
  if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};

nl.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};

function Hv() {}

Hv.prototype = nl.prototype;

function Mc(e, n, i) {
  this.props = e, this.context = n, this.refs = zv, this.updater = i || Iv;
}

var Ic = Mc.prototype = new Hv();
Ic.constructor = Mc;
Rv(Ic, nl.prototype);
Ic.isPureReactComponent = !0;
var Jp = Array.isArray,
    Wv = Object.prototype.hasOwnProperty,
    Rc = {
  current: null
},
    $v = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function Uv(e, n, i) {
  var a,
      s = {},
      c = null,
      p = null;
  if (n != null) for (a in n.ref !== void 0 && (p = n.ref), n.key !== void 0 && (c = "" + n.key), n) {
    Wv.call(n, a) && !$v.hasOwnProperty(a) && (s[a] = n[a]);
  }
  var m = arguments.length - 2;
  if (m === 1) s.children = i;else if (1 < m) {
    for (var C = Array(m), x = 0; x < m; x++) {
      C[x] = arguments[x + 2];
    }

    s.children = C;
  }
  if (e && e.defaultProps) for (a in m = e.defaultProps, m) {
    s[a] === void 0 && (s[a] = m[a]);
  }
  return {
    $$typeof: Bo,
    type: e,
    key: c,
    ref: p,
    props: s,
    _owner: Rc.current
  };
}

function Q3(e, n) {
  return {
    $$typeof: Bo,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}

function zc(e) {
  return _typeof(e) == "object" && e !== null && e.$$typeof === Bo;
}

function Y3(e) {
  var n = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (i) {
    return n[i];
  });
}

var qp = /\/+/g;

function sf(e, n) {
  return _typeof(e) == "object" && e !== null && e.key != null ? Y3("" + e.key) : n.toString(36);
}

function $u(e, n, i, a, s) {
  var c = _typeof(e);

  (c === "undefined" || c === "boolean") && (e = null);
  var p = !1;
  if (e === null) p = !0;else switch (c) {
    case "string":
    case "number":
      p = !0;
      break;

    case "object":
      switch (e.$$typeof) {
        case Bo:
        case I3:
          p = !0;
      }

  }
  if (p) return p = e, s = s(p), e = a === "" ? "." + sf(p, 0) : a, Jp(s) ? (i = "", e != null && (i = e.replace(qp, "$&/") + "/"), $u(s, n, i, "", function (x) {
    return x;
  })) : s != null && (zc(s) && (s = Q3(s, i + (!s.key || p && p.key === s.key ? "" : ("" + s.key).replace(qp, "$&/") + "/") + e)), n.push(s)), 1;
  if (p = 0, a = a === "" ? "." : a + ":", Jp(e)) for (var m = 0; m < e.length; m++) {
    c = e[m];
    var C = a + sf(c, m);
    p += $u(c, n, i, C, s);
  } else if (C = V3(e), typeof C == "function") for (e = C.call(e), m = 0; !(c = e.next()).done;) {
    c = c.value, C = a + sf(c, m++), p += $u(c, n, i, C, s);
  } else if (c === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return p;
}

function _u(e, n, i) {
  if (e == null) return e;
  var a = [],
      s = 0;
  return $u(e, a, "", "", function (c) {
    return n.call(i, c, s++);
  }), a;
}

function X3(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function (i) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i);
    }, function (i) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }

  if (e._status === 1) return e._result.default;
  throw e._result;
}

var Rt = {
  current: null
},
    Uu = {
  transition: null
},
    Z3 = {
  ReactCurrentDispatcher: Rt,
  ReactCurrentBatchConfig: Uu,
  ReactCurrentOwner: Rc
};
Ce.Children = {
  map: _u,
  forEach: function forEach(e, n, i) {
    _u(e, function () {
      n.apply(this, arguments);
    }, i);
  },
  count: function count(e) {
    var n = 0;
    return _u(e, function () {
      n++;
    }), n;
  },
  toArray: function toArray(e) {
    return _u(e, function (n) {
      return n;
    }) || [];
  },
  only: function only(e) {
    if (!zc(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  }
};
Ce.Component = nl;
Ce.Fragment = R3;
Ce.Profiler = H3;
Ce.PureComponent = Mc;
Ce.StrictMode = z3;
Ce.Suspense = j3;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z3;

Ce.cloneElement = function (e, n, i) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var a = Rv({}, e.props),
      s = e.key,
      c = e.ref,
      p = e._owner;

  if (n != null) {
    if (n.ref !== void 0 && (c = n.ref, p = Rc.current), n.key !== void 0 && (s = "" + n.key), e.type && e.type.defaultProps) var m = e.type.defaultProps;

    for (C in n) {
      Wv.call(n, C) && !$v.hasOwnProperty(C) && (a[C] = n[C] === void 0 && m !== void 0 ? m[C] : n[C]);
    }
  }

  var C = arguments.length - 2;
  if (C === 1) a.children = i;else if (1 < C) {
    m = Array(C);

    for (var x = 0; x < C; x++) {
      m[x] = arguments[x + 2];
    }

    a.children = m;
  }
  return {
    $$typeof: Bo,
    type: e.type,
    key: s,
    ref: c,
    props: a,
    _owner: p
  };
};

Ce.createContext = function (e) {
  return e = {
    $$typeof: $3,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: W3,
    _context: e
  }, e.Consumer = e;
};

Ce.createElement = Uv;

Ce.createFactory = function (e) {
  var n = Uv.bind(null, e);
  return n.type = e, n;
};

Ce.createRef = function () {
  return {
    current: null
  };
};

Ce.forwardRef = function (e) {
  return {
    $$typeof: U3,
    render: e
  };
};

Ce.isValidElement = zc;

Ce.lazy = function (e) {
  return {
    $$typeof: G3,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: X3
  };
};

Ce.memo = function (e, n) {
  return {
    $$typeof: K3,
    type: e,
    compare: n === void 0 ? null : n
  };
};

Ce.startTransition = function (e) {
  var n = Uu.transition;
  Uu.transition = {};

  try {
    e();
  } finally {
    Uu.transition = n;
  }
};

Ce.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};

Ce.useCallback = function (e, n) {
  return Rt.current.useCallback(e, n);
};

Ce.useContext = function (e) {
  return Rt.current.useContext(e);
};

Ce.useDebugValue = function () {};

Ce.useDeferredValue = function (e) {
  return Rt.current.useDeferredValue(e);
};

Ce.useEffect = function (e, n) {
  return Rt.current.useEffect(e, n);
};

Ce.useId = function () {
  return Rt.current.useId();
};

Ce.useImperativeHandle = function (e, n, i) {
  return Rt.current.useImperativeHandle(e, n, i);
};

Ce.useInsertionEffect = function (e, n) {
  return Rt.current.useInsertionEffect(e, n);
};

Ce.useLayoutEffect = function (e, n) {
  return Rt.current.useLayoutEffect(e, n);
};

Ce.useMemo = function (e, n) {
  return Rt.current.useMemo(e, n);
};

Ce.useReducer = function (e, n, i) {
  return Rt.current.useReducer(e, n, i);
};

Ce.useRef = function (e) {
  return Rt.current.useRef(e);
};

Ce.useState = function (e) {
  return Rt.current.useState(e);
};

Ce.useSyncExternalStore = function (e, n, i) {
  return Rt.current.useSyncExternalStore(e, n, i);
};

Ce.useTransition = function () {
  return Rt.current.useTransition();
};

Ce.version = "18.1.0";
ct.exports = Ce;
var jv = ct.exports,
    Mf = {},
    Kv = {
  exports: {}
},
    en = {},
    Gv = {
  exports: {}
},
    Vv = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

(function (e) {
  function n(W, j) {
    var X = W.length;
    W.push(j);

    e: for (; 0 < X;) {
      var ie = X - 1 >>> 1,
          se = W[ie];
      if (0 < s(se, j)) W[ie] = j, W[X] = se, X = ie;else break e;
    }
  }

  function i(W) {
    return W.length === 0 ? null : W[0];
  }

  function a(W) {
    if (W.length === 0) return null;
    var j = W[0],
        X = W.pop();

    if (X !== j) {
      W[0] = X;

      e: for (var ie = 0, se = W.length, Se = se >>> 1; ie < Se;) {
        var ke = 2 * (ie + 1) - 1,
            Ze = W[ke],
            be = ke + 1,
            et = W[be];
        if (0 > s(Ze, X)) be < se && 0 > s(et, Ze) ? (W[ie] = et, W[be] = X, ie = be) : (W[ie] = Ze, W[ke] = X, ie = ke);else if (be < se && 0 > s(et, X)) W[ie] = et, W[be] = X, ie = be;else break e;
      }
    }

    return j;
  }

  function s(W, j) {
    var X = W.sortIndex - j.sortIndex;
    return X !== 0 ? X : W.id - j.id;
  }

  if ((typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function") {
    var c = performance;

    e.unstable_now = function () {
      return c.now();
    };
  } else {
    var p = Date,
        m = p.now();

    e.unstable_now = function () {
      return p.now() - m;
    };
  }

  var C = [],
      x = [],
      _ = 1,
      A = null,
      E = 3,
      b = !1,
      F = !1,
      D = !1,
      R = typeof setTimeout == "function" ? setTimeout : null,
      y = typeof clearTimeout == "function" ? clearTimeout : null,
      w = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function S(W) {
    for (var j = i(x); j !== null;) {
      if (j.callback === null) a(x);else if (j.startTime <= W) a(x), j.sortIndex = j.expirationTime, n(C, j);else break;
      j = i(x);
    }
  }

  function L(W) {
    if (D = !1, S(W), !F) if (i(C) !== null) F = !0, U(O);else {
      var j = i(x);
      j !== null && V(L, j.startTime - W);
    }
  }

  function O(W, j) {
    F = !1, D && (D = !1, y(H), H = -1), b = !0;
    var X = E;

    try {
      for (S(j), A = i(C); A !== null && (!(A.expirationTime > j) || W && !ue());) {
        var ie = A.callback;

        if (typeof ie == "function") {
          A.callback = null, E = A.priorityLevel;
          var se = ie(A.expirationTime <= j);
          j = e.unstable_now(), typeof se == "function" ? A.callback = se : A === i(C) && a(C), S(j);
        } else a(C);

        A = i(C);
      }

      if (A !== null) var Se = !0;else {
        var ke = i(x);
        ke !== null && V(L, ke.startTime - j), Se = !1;
      }
      return Se;
    } finally {
      A = null, E = X, b = !1;
    }
  }

  var I = !1,
      M = null,
      H = -1,
      ee = 5,
      q = -1;

  function ue() {
    return !(e.unstable_now() - q < ee);
  }

  function he() {
    if (M !== null) {
      var W = e.unstable_now();
      q = W;
      var j = !0;

      try {
        j = M(!0, W);
      } finally {
        j ? me() : (I = !1, M = null);
      }
    } else I = !1;
  }

  var me;
  if (typeof w == "function") me = function me() {
    w(he);
  };else if (typeof MessageChannel != "undefined") {
    var Y = new MessageChannel(),
        xe = Y.port2;
    Y.port1.onmessage = he, me = function me() {
      xe.postMessage(null);
    };
  } else me = function me() {
    R(he, 0);
  };

  function U(W) {
    M = W, I || (I = !0, me());
  }

  function V(W, j) {
    H = R(function () {
      W(e.unstable_now());
    }, j);
  }

  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (W) {
    W.callback = null;
  }, e.unstable_continueExecution = function () {
    F || b || (F = !0, U(O));
  }, e.unstable_forceFrameRate = function (W) {
    0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ee = 0 < W ? Math.floor(1e3 / W) : 5;
  }, e.unstable_getCurrentPriorityLevel = function () {
    return E;
  }, e.unstable_getFirstCallbackNode = function () {
    return i(C);
  }, e.unstable_next = function (W) {
    switch (E) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;

      default:
        j = E;
    }

    var X = E;
    E = j;

    try {
      return W();
    } finally {
      E = X;
    }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (W, j) {
    switch (W) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;

      default:
        W = 3;
    }

    var X = E;
    E = W;

    try {
      return j();
    } finally {
      E = X;
    }
  }, e.unstable_scheduleCallback = function (W, j, X) {
    var ie = e.unstable_now();

    switch (_typeof(X) == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ie + X : ie) : X = ie, W) {
      case 1:
        var se = -1;
        break;

      case 2:
        se = 250;
        break;

      case 5:
        se = 1073741823;
        break;

      case 4:
        se = 1e4;
        break;

      default:
        se = 5e3;
    }

    return se = X + se, W = {
      id: _++,
      callback: j,
      priorityLevel: W,
      startTime: X,
      expirationTime: se,
      sortIndex: -1
    }, X > ie ? (W.sortIndex = X, n(x, W), i(C) === null && W === i(x) && (D ? (y(H), H = -1) : D = !0, V(L, X - ie))) : (W.sortIndex = se, n(C, W), F || b || (F = !0, U(O))), W;
  }, e.unstable_shouldYield = ue, e.unstable_wrapCallback = function (W) {
    var j = E;
    return function () {
      var X = E;
      E = j;

      try {
        return W.apply(this, arguments);
      } finally {
        E = X;
      }
    };
  };
})(Vv);

Gv.exports = Vv;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

var Qv = ct.exports,
    qt = Gv.exports;

function Q(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) {
    n += "&args[]=" + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var Yv = new Set(),
    go = {};

function li(e, n) {
  Xi(e, n), Xi(e + "Capture", n);
}

function Xi(e, n) {
  for (go[e] = n, e = 0; e < n.length; e++) {
    Yv.add(n[e]);
  }
}

var Yn = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    If = Object.prototype.hasOwnProperty,
    J3 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    e0 = {},
    t0 = {};

function q3(e) {
  return If.call(t0, e) ? !0 : If.call(e0, e) ? !1 : J3.test(e) ? t0[e] = !0 : (e0[e] = !0, !1);
}

function ew(e, n, i, a) {
  if (i !== null && i.type === 0) return !1;

  switch (_typeof(n)) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      return a ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");

    default:
      return !1;
  }
}

function tw(e, n, i, a) {
  if (n === null || typeof n == "undefined" || ew(e, n, i, a)) return !0;
  if (a) return !1;
  if (i !== null) switch (i.type) {
    case 3:
      return !n;

    case 4:
      return n === !1;

    case 5:
      return isNaN(n);

    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}

function zt(e, n, i, a, s, c, p) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = a, this.attributeNamespace = s, this.mustUseProperty = i, this.propertyName = e, this.type = n, this.sanitizeURL = c, this.removeEmptyString = p;
}

var wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  wt[e] = new zt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var n = e[0];
  wt[n] = new zt(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  wt[e] = new zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  wt[e] = new zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  wt[e] = new zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  wt[e] = new zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  wt[e] = new zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  wt[e] = new zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  wt[e] = new zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hc = /[\-:]([a-z])/g;

function Wc(e) {
  return e[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var n = e.replace(Hc, Wc);
  wt[n] = new zt(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var n = e.replace(Hc, Wc);
  wt[n] = new zt(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Hc, Wc);
  wt[n] = new zt(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  wt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
wt.xlinkHref = new zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  wt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});

function $c(e, n, i, a) {
  var s = wt.hasOwnProperty(n) ? wt[n] : null;
  (s !== null ? s.type !== 0 : a || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (tw(n, i, s, a) && (i = null), a || s === null ? q3(n) && (i === null ? e.removeAttribute(n) : e.setAttribute(n, "" + i)) : s.mustUseProperty ? e[s.propertyName] = i === null ? s.type === 3 ? !1 : "" : i : (n = s.attributeName, a = s.attributeNamespace, i === null ? e.removeAttribute(n) : (s = s.type, i = s === 3 || s === 4 && i === !0 ? "" : "" + i, a ? e.setAttributeNS(a, n, i) : e.setAttribute(n, i))));
}

var Jn = Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Eu = Symbol.for("react.element"),
    Oi = Symbol.for("react.portal"),
    Ni = Symbol.for("react.fragment"),
    Uc = Symbol.for("react.strict_mode"),
    Rf = Symbol.for("react.profiler"),
    Xv = Symbol.for("react.provider"),
    Zv = Symbol.for("react.context"),
    jc = Symbol.for("react.forward_ref"),
    zf = Symbol.for("react.suspense"),
    Hf = Symbol.for("react.suspense_list"),
    Kc = Symbol.for("react.memo"),
    cr = Symbol.for("react.lazy"),
    Jv = Symbol.for("react.offscreen"),
    n0 = Symbol.iterator;

function jl(e) {
  return e === null || _typeof(e) != "object" ? null : (e = n0 && e[n0] || e["@@iterator"], typeof e == "function" ? e : null);
}

var Ue = Object.assign,
    ff;

function to(e) {
  if (ff === void 0) try {
    throw Error();
  } catch (i) {
    var n = i.stack.trim().match(/\n( *(at )?)/);
    ff = n && n[1] || "";
  }
  return "\n" + ff + e;
}

var cf = !1;

function df(e, n) {
  if (!e || cf) return "";
  cf = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;

  try {
    if (n) {
      if (n = function n() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", {
        set: function set() {
          throw Error();
        }
      }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (x) {
          var a = x;
        }

        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (x) {
          a = x;
        }

        e.call(n.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        a = x;
      }

      e();
    }
  } catch (x) {
    if (x && a && typeof x.stack == "string") {
      for (var s = x.stack.split("\n"), c = a.stack.split("\n"), p = s.length - 1, m = c.length - 1; 1 <= p && 0 <= m && s[p] !== c[m];) {
        m--;
      }

      for (; 1 <= p && 0 <= m; p--, m--) {
        if (s[p] !== c[m]) {
          if (p !== 1 || m !== 1) do {
            if (p--, m--, 0 > m || s[p] !== c[m]) {
              var C = "\n" + s[p].replace(" at new ", " at ");
              return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
            }
          } while (1 <= p && 0 <= m);
          break;
        }
      }
    }
  } finally {
    cf = !1, Error.prepareStackTrace = i;
  }

  return (e = e ? e.displayName || e.name : "") ? to(e) : "";
}

function nw(e) {
  switch (e.tag) {
    case 5:
      return to(e.type);

    case 16:
      return to("Lazy");

    case 13:
      return to("Suspense");

    case 19:
      return to("SuspenseList");

    case 0:
    case 2:
    case 15:
      return e = df(e.type, !1), e;

    case 11:
      return e = df(e.type.render, !1), e;

    case 1:
      return e = df(e.type, !0), e;

    default:
      return "";
  }
}

function Wf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;

  switch (e) {
    case Ni:
      return "Fragment";

    case Oi:
      return "Portal";

    case Rf:
      return "Profiler";

    case Uc:
      return "StrictMode";

    case zf:
      return "Suspense";

    case Hf:
      return "SuspenseList";
  }

  if (_typeof(e) == "object") switch (e.$$typeof) {
    case Zv:
      return (e.displayName || "Context") + ".Consumer";

    case Xv:
      return (e._context.displayName || "Context") + ".Provider";

    case jc:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;

    case Kc:
      return n = e.displayName || null, n !== null ? n : Wf(e.type) || "Memo";

    case cr:
      n = e._payload, e = e._init;

      try {
        return Wf(e(n));
      } catch (_unused) {}

  }
  return null;
}

function rw(e) {
  var n = e.type;

  switch (e.tag) {
    case 24:
      return "Cache";

    case 9:
      return (n.displayName || "Context") + ".Consumer";

    case 10:
      return (n._context.displayName || "Context") + ".Provider";

    case 18:
      return "DehydratedFragment";

    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");

    case 7:
      return "Fragment";

    case 5:
      return n;

    case 4:
      return "Portal";

    case 3:
      return "Root";

    case 6:
      return "Text";

    case 16:
      return Wf(n);

    case 8:
      return n === Uc ? "StrictMode" : "Mode";

    case 22:
      return "Offscreen";

    case 12:
      return "Profiler";

    case 21:
      return "Scope";

    case 13:
      return "Suspense";

    case 19:
      return "SuspenseList";

    case 25:
      return "TracingMarker";

    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }

  return null;
}

function kr(e) {
  switch (_typeof(e)) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;

    case "object":
      return e;

    default:
      return "";
  }
}

function qv(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}

function iw(e) {
  var n = qv(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      a = "" + e[n];

  if (!e.hasOwnProperty(n) && typeof i != "undefined" && typeof i.get == "function" && typeof i.set == "function") {
    var s = i.get,
        c = i.set;
    return Object.defineProperty(e, n, {
      configurable: !0,
      get: function get() {
        return s.call(this);
      },
      set: function set(p) {
        a = "" + p, c.call(this, p);
      }
    }), Object.defineProperty(e, n, {
      enumerable: i.enumerable
    }), {
      getValue: function getValue() {
        return a;
      },
      setValue: function setValue(p) {
        a = "" + p;
      },
      stopTracking: function stopTracking() {
        e._valueTracker = null, delete e[n];
      }
    };
  }
}

function Tu(e) {
  e._valueTracker || (e._valueTracker = iw(e));
}

function eg(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var i = n.getValue(),
      a = "";
  return e && (a = qv(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== i ? (n.setValue(e), !0) : !1;
}

function ra(e) {
  if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;

  try {
    return e.activeElement || e.body;
  } catch (_unused2) {
    return e.body;
  }
}

function $f(e, n) {
  var i = n.checked;
  return Ue({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i != null ? i : e._wrapperState.initialChecked
  });
}

function r0(e, n) {
  var i = n.defaultValue == null ? "" : n.defaultValue,
      a = n.checked != null ? n.checked : n.defaultChecked;
  i = kr(n.value != null ? n.value : i), e._wrapperState = {
    initialChecked: a,
    initialValue: i,
    controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
  };
}

function tg(e, n) {
  n = n.checked, n != null && $c(e, "checked", n, !1);
}

function Uf(e, n) {
  tg(e, n);
  var i = kr(n.value),
      a = n.type;
  if (i != null) a === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);else if (a === "submit" || a === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? jf(e, n.type, i) : n.hasOwnProperty("defaultValue") && jf(e, n.type, kr(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}

function i0(e, n, i) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var a = n.type;
    if (!(a !== "submit" && a !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, i || n === e.value || (e.value = n), e.defaultValue = n;
  }

  i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
}

function jf(e, n, i) {
  (n !== "number" || ra(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}

var no = Array.isArray;

function ji(e, n, i, a) {
  if (e = e.options, n) {
    n = {};

    for (var s = 0; s < i.length; s++) {
      n["$" + i[s]] = !0;
    }

    for (i = 0; i < e.length; i++) {
      s = n.hasOwnProperty("$" + e[i].value), e[i].selected !== s && (e[i].selected = s), s && a && (e[i].defaultSelected = !0);
    }
  } else {
    for (i = "" + kr(i), n = null, s = 0; s < e.length; s++) {
      if (e[s].value === i) {
        e[s].selected = !0, a && (e[s].defaultSelected = !0);
        return;
      }

      n !== null || e[s].disabled || (n = e[s]);
    }

    n !== null && (n.selected = !0);
  }
}

function Kf(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(Q(91));
  return Ue({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  });
}

function l0(e, n) {
  var i = n.value;

  if (i == null) {
    if (i = n.children, n = n.defaultValue, i != null) {
      if (n != null) throw Error(Q(92));

      if (no(i)) {
        if (1 < i.length) throw Error(Q(93));
        i = i[0];
      }

      n = i;
    }

    n == null && (n = ""), i = n;
  }

  e._wrapperState = {
    initialValue: kr(i)
  };
}

function ng(e, n) {
  var i = kr(n.value),
      a = kr(n.defaultValue);
  i != null && (i = "" + i, i !== e.value && (e.value = i), n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), a != null && (e.defaultValue = "" + a);
}

function o0(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}

function rg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function Gf(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? rg(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}

var Lu,
    ig = function (e) {
  return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (n, i, a, s) {
    MSApp.execUnsafeLocalFunction(function () {
      return e(n, i, a, s);
    });
  } : e;
}(function (e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;else {
    for (Lu = Lu || document.createElement("div"), Lu.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Lu.firstChild; e.firstChild;) {
      e.removeChild(e.firstChild);
    }

    for (; n.firstChild;) {
      e.appendChild(n.firstChild);
    }
  }
});

function yo(e, n) {
  if (n) {
    var i = e.firstChild;

    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = n;
      return;
    }
  }

  e.textContent = n;
}

var oo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    lw = ["Webkit", "ms", "Moz", "O"];
Object.keys(oo).forEach(function (e) {
  lw.forEach(function (n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), oo[n] = oo[e];
  });
});

function lg(e, n, i) {
  return n == null || typeof n == "boolean" || n === "" ? "" : i || typeof n != "number" || n === 0 || oo.hasOwnProperty(e) && oo[e] ? ("" + n).trim() : n + "px";
}

function og(e, n) {
  e = e.style;

  for (var i in n) {
    if (n.hasOwnProperty(i)) {
      var a = i.indexOf("--") === 0,
          s = lg(i, n[i], a);
      i === "float" && (i = "cssFloat"), a ? e.setProperty(i, s) : e[i] = s;
    }
  }
}

var ow = Ue({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function Vf(e, n) {
  if (n) {
    if (ow[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(Q(137, e));

    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(Q(60));
      if (_typeof(n.dangerouslySetInnerHTML) != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(Q(61));
    }

    if (n.style != null && _typeof(n.style) != "object") throw Error(Q(62));
  }
}

function Qf(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";

  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

var Yf = null;

function Gc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}

var Xf = null,
    Ki = null,
    Gi = null;

function u0(e) {
  if (e = Ro(e)) {
    if (typeof Xf != "function") throw Error(Q(280));
    var n = e.stateNode;
    n && (n = Pa(n), Xf(e.stateNode, e.type, n));
  }
}

function ug(e) {
  Ki ? Gi ? Gi.push(e) : Gi = [e] : Ki = e;
}

function ag() {
  if (Ki) {
    var e = Ki,
        n = Gi;
    if (Gi = Ki = null, u0(e), n) for (e = 0; e < n.length; e++) {
      u0(n[e]);
    }
  }
}

function sg(e, n) {
  return e(n);
}

function fg() {}

var hf = !1;

function cg(e, n, i) {
  if (hf) return e(n, i);
  hf = !0;

  try {
    return sg(e, n, i);
  } finally {
    hf = !1, (Ki !== null || Gi !== null) && (fg(), ag());
  }
}

function mo(e, n) {
  var i = e.stateNode;
  if (i === null) return null;
  var a = Pa(i);
  if (a === null) return null;
  i = a[n];

  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
      break e;

    default:
      e = !1;
  }

  if (e) return null;
  if (i && typeof i != "function") throw Error(Q(231, n, _typeof(i)));
  return i;
}

var Zf = !1;
if (Yn) try {
  var Kl = {};
  Object.defineProperty(Kl, "passive", {
    get: function get() {
      Zf = !0;
    }
  }), window.addEventListener("test", Kl, Kl), window.removeEventListener("test", Kl, Kl);
} catch (_unused3) {
  Zf = !1;
}

function uw(e, n, i, a, s, c, p, m, C) {
  var x = Array.prototype.slice.call(arguments, 3);

  try {
    n.apply(i, x);
  } catch (_) {
    this.onError(_);
  }
}

var uo = !1,
    ia = null,
    la = !1,
    Jf = null,
    aw = {
  onError: function onError(e) {
    uo = !0, ia = e;
  }
};

function sw(e, n, i, a, s, c, p, m, C) {
  uo = !1, ia = null, uw.apply(aw, arguments);
}

function fw(e, n, i, a, s, c, p, m, C) {
  if (sw.apply(this, arguments), uo) {
    if (uo) {
      var x = ia;
      uo = !1, ia = null;
    } else throw Error(Q(198));

    la || (la = !0, Jf = x);
  }
}

function oi(e) {
  var n = e,
      i = e;
  if (e.alternate) for (; n.return;) {
    n = n.return;
  } else {
    e = n;

    do {
      n = e, (n.flags & 4098) !== 0 && (i = n.return), e = n.return;
    } while (e);
  }
  return n.tag === 3 ? i : null;
}

function dg(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }

  return null;
}

function a0(e) {
  if (oi(e) !== e) throw Error(Q(188));
}

function cw(e) {
  var n = e.alternate;

  if (!n) {
    if (n = oi(e), n === null) throw Error(Q(188));
    return n !== e ? null : e;
  }

  for (var i = e, a = n;;) {
    var s = i.return;
    if (s === null) break;
    var c = s.alternate;

    if (c === null) {
      if (a = s.return, a !== null) {
        i = a;
        continue;
      }

      break;
    }

    if (s.child === c.child) {
      for (c = s.child; c;) {
        if (c === i) return a0(s), e;
        if (c === a) return a0(s), n;
        c = c.sibling;
      }

      throw Error(Q(188));
    }

    if (i.return !== a.return) i = s, a = c;else {
      for (var p = !1, m = s.child; m;) {
        if (m === i) {
          p = !0, i = s, a = c;
          break;
        }

        if (m === a) {
          p = !0, a = s, i = c;
          break;
        }

        m = m.sibling;
      }

      if (!p) {
        for (m = c.child; m;) {
          if (m === i) {
            p = !0, i = c, a = s;
            break;
          }

          if (m === a) {
            p = !0, a = c, i = s;
            break;
          }

          m = m.sibling;
        }

        if (!p) throw Error(Q(189));
      }
    }
    if (i.alternate !== a) throw Error(Q(190));
  }

  if (i.tag !== 3) throw Error(Q(188));
  return i.stateNode.current === i ? e : n;
}

function hg(e) {
  return e = cw(e), e !== null ? pg(e) : null;
}

function pg(e) {
  if (e.tag === 5 || e.tag === 6) return e;

  for (e = e.child; e !== null;) {
    var n = pg(e);
    if (n !== null) return n;
    e = e.sibling;
  }

  return null;
}

var vg = qt.unstable_scheduleCallback,
    s0 = qt.unstable_cancelCallback,
    dw = qt.unstable_shouldYield,
    hw = qt.unstable_requestPaint,
    Xe = qt.unstable_now,
    pw = qt.unstable_getCurrentPriorityLevel,
    Vc = qt.unstable_ImmediatePriority,
    gg = qt.unstable_UserBlockingPriority,
    oa = qt.unstable_NormalPriority,
    vw = qt.unstable_LowPriority,
    yg = qt.unstable_IdlePriority,
    Fa = null,
    Dn = null;

function gw(e) {
  if (Dn && typeof Dn.onCommitFiberRoot == "function") try {
    Dn.onCommitFiberRoot(Fa, e, void 0, (e.current.flags & 128) === 128);
  } catch (_unused4) {}
}

var Cn = Math.clz32 ? Math.clz32 : ww,
    yw = Math.log,
    mw = Math.LN2;

function ww(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yw(e) / mw | 0) | 0;
}

var bu = 64,
    Au = 4194304;

function ro(e) {
  switch (e & -e) {
    case 1:
      return 1;

    case 2:
      return 2;

    case 4:
      return 4;

    case 8:
      return 8;

    case 16:
      return 16;

    case 32:
      return 32;

    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;

    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;

    case 134217728:
      return 134217728;

    case 268435456:
      return 268435456;

    case 536870912:
      return 536870912;

    case 1073741824:
      return 1073741824;

    default:
      return e;
  }
}

function ua(e, n) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var a = 0,
      s = e.suspendedLanes,
      c = e.pingedLanes,
      p = i & 268435455;

  if (p !== 0) {
    var m = p & ~s;
    m !== 0 ? a = ro(m) : (c &= p, c !== 0 && (a = ro(c)));
  } else p = i & ~s, p !== 0 ? a = ro(p) : c !== 0 && (a = ro(c));

  if (a === 0) return 0;
  if (n !== 0 && n !== a && (n & s) === 0 && (s = a & -a, c = n & -n, s >= c || s === 16 && (c & 4194240) !== 0)) return n;
  if ((a & 4) !== 0 && (a |= i & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= a; 0 < n;) {
    i = 31 - Cn(n), s = 1 << i, a |= e[i], n &= ~s;
  }
  return a;
}

function Cw(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;

    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;

    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;

    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;

    default:
      return -1;
  }
}

function Sw(e, n) {
  for (var i = e.suspendedLanes, a = e.pingedLanes, s = e.expirationTimes, c = e.pendingLanes; 0 < c;) {
    var p = 31 - Cn(c),
        m = 1 << p,
        C = s[p];
    C === -1 ? ((m & i) === 0 || (m & a) !== 0) && (s[p] = Cw(m, n)) : C <= n && (e.expiredLanes |= m), c &= ~m;
  }
}

function qf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}

function mg() {
  var e = bu;
  return bu <<= 1, (bu & 4194240) === 0 && (bu = 64), e;
}

function pf(e) {
  for (var n = [], i = 0; 31 > i; i++) {
    n.push(e);
  }

  return n;
}

function Mo(e, n, i) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Cn(n), e[n] = i;
}

function xw(e, n) {
  var i = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var a = e.eventTimes;

  for (e = e.expirationTimes; 0 < i;) {
    var s = 31 - Cn(i),
        c = 1 << s;
    n[s] = 0, a[s] = -1, e[s] = -1, i &= ~c;
  }
}

function Qc(e, n) {
  var i = e.entangledLanes |= n;

  for (e = e.entanglements; i;) {
    var a = 31 - Cn(i),
        s = 1 << a;
    s & n | e[a] & n && (e[a] |= n), i &= ~s;
  }
}

var Ae = 0;

function wg(e) {
  return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}

var Cg,
    Yc,
    Sg,
    xg,
    kg,
    ec = !1,
    Fu = [],
    yr = null,
    mr = null,
    wr = null,
    wo = new Map(),
    Co = new Map(),
    hr = [],
    kw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function f0(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      yr = null;
      break;

    case "dragenter":
    case "dragleave":
      mr = null;
      break;

    case "mouseover":
    case "mouseout":
      wr = null;
      break;

    case "pointerover":
    case "pointerout":
      wo.delete(n.pointerId);
      break;

    case "gotpointercapture":
    case "lostpointercapture":
      Co.delete(n.pointerId);
  }
}

function Gl(e, n, i, a, s, c) {
  return e === null || e.nativeEvent !== c ? (e = {
    blockedOn: n,
    domEventName: i,
    eventSystemFlags: a,
    nativeEvent: c,
    targetContainers: [s]
  }, n !== null && (n = Ro(n), n !== null && Yc(n)), e) : (e.eventSystemFlags |= a, n = e.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), e);
}

function _w(e, n, i, a, s) {
  switch (n) {
    case "focusin":
      return yr = Gl(yr, e, n, i, a, s), !0;

    case "dragenter":
      return mr = Gl(mr, e, n, i, a, s), !0;

    case "mouseover":
      return wr = Gl(wr, e, n, i, a, s), !0;

    case "pointerover":
      var c = s.pointerId;
      return wo.set(c, Gl(wo.get(c) || null, e, n, i, a, s)), !0;

    case "gotpointercapture":
      return c = s.pointerId, Co.set(c, Gl(Co.get(c) || null, e, n, i, a, s)), !0;
  }

  return !1;
}

function _g(e) {
  var n = Xr(e.target);

  if (n !== null) {
    var i = oi(n);

    if (i !== null) {
      if (n = i.tag, n === 13) {
        if (n = dg(i), n !== null) {
          e.blockedOn = n, kg(e.priority, function () {
            Sg(i);
          });
          return;
        }
      } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }

  e.blockedOn = null;
}

function ju(e) {
  if (e.blockedOn !== null) return !1;

  for (var n = e.targetContainers; 0 < n.length;) {
    var i = tc(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);

    if (i === null) {
      i = e.nativeEvent;
      var a = new i.constructor(i.type, i);
      Yf = a, i.target.dispatchEvent(a), Yf = null;
    } else return n = Ro(i), n !== null && Yc(n), e.blockedOn = i, !1;

    n.shift();
  }

  return !0;
}

function c0(e, n, i) {
  ju(e) && i.delete(n);
}

function Ew() {
  ec = !1, yr !== null && ju(yr) && (yr = null), mr !== null && ju(mr) && (mr = null), wr !== null && ju(wr) && (wr = null), wo.forEach(c0), Co.forEach(c0);
}

function Vl(e, n) {
  e.blockedOn === n && (e.blockedOn = null, ec || (ec = !0, qt.unstable_scheduleCallback(qt.unstable_NormalPriority, Ew)));
}

function So(e) {
  function n(s) {
    return Vl(s, e);
  }

  if (0 < Fu.length) {
    Vl(Fu[0], e);

    for (var i = 1; i < Fu.length; i++) {
      var a = Fu[i];
      a.blockedOn === e && (a.blockedOn = null);
    }
  }

  for (yr !== null && Vl(yr, e), mr !== null && Vl(mr, e), wr !== null && Vl(wr, e), wo.forEach(n), Co.forEach(n), i = 0; i < hr.length; i++) {
    a = hr[i], a.blockedOn === e && (a.blockedOn = null);
  }

  for (; 0 < hr.length && (i = hr[0], i.blockedOn === null);) {
    _g(i), i.blockedOn === null && hr.shift();
  }
}

var Vi = Jn.ReactCurrentBatchConfig,
    aa = !0;

function Tw(e, n, i, a) {
  var s = Ae,
      c = Vi.transition;
  Vi.transition = null;

  try {
    Ae = 1, Xc(e, n, i, a);
  } finally {
    Ae = s, Vi.transition = c;
  }
}

function Lw(e, n, i, a) {
  var s = Ae,
      c = Vi.transition;
  Vi.transition = null;

  try {
    Ae = 4, Xc(e, n, i, a);
  } finally {
    Ae = s, Vi.transition = c;
  }
}

function Xc(e, n, i, a) {
  if (aa) {
    var s = tc(e, n, i, a);
    if (s === null) _f(e, n, a, sa, i), f0(e, a);else if (_w(s, e, n, i, a)) a.stopPropagation();else if (f0(e, a), n & 4 && -1 < kw.indexOf(e)) {
      for (; s !== null;) {
        var c = Ro(s);
        if (c !== null && Cg(c), c = tc(e, n, i, a), c === null && _f(e, n, a, sa, i), c === s) break;
        s = c;
      }

      s !== null && a.stopPropagation();
    } else _f(e, n, a, null, i);
  }
}

var sa = null;

function tc(e, n, i, a) {
  if (sa = null, e = Gc(a), e = Xr(e), e !== null) if (n = oi(e), n === null) e = null;else if (i = n.tag, i === 13) {
    if (e = dg(n), e !== null) return e;
    e = null;
  } else if (i === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return sa = e, null;
}

function Eg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;

    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;

    case "message":
      switch (pw()) {
        case Vc:
          return 1;

        case gg:
          return 4;

        case oa:
        case vw:
          return 16;

        case yg:
          return 536870912;

        default:
          return 16;
      }

    default:
      return 16;
  }
}

var vr = null,
    Zc = null,
    Ku = null;

function Tg() {
  if (Ku) return Ku;
  var e,
      n = Zc,
      i = n.length,
      a,
      s = "value" in vr ? vr.value : vr.textContent,
      c = s.length;

  for (e = 0; e < i && n[e] === s[e]; e++) {
    ;
  }

  var p = i - e;

  for (a = 1; a <= p && n[i - a] === s[c - a]; a++) {
    ;
  }

  return Ku = s.slice(e, 1 < a ? 1 - a : void 0);
}

function Gu(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}

function Du() {
  return !0;
}

function d0() {
  return !1;
}

function tn(e) {
  function n(i, a, s, c, p) {
    this._reactName = i, this._targetInst = s, this.type = a, this.nativeEvent = c, this.target = p, this.currentTarget = null;

    for (var m in e) {
      e.hasOwnProperty(m) && (i = e[m], this[m] = i ? i(c) : c[m]);
    }

    return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Du : d0, this.isPropagationStopped = d0, this;
  }

  return Ue(n.prototype, {
    preventDefault: function preventDefault() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Du);
    },
    stopPropagation: function stopPropagation() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Du);
    },
    persist: function persist() {},
    isPersistent: Du
  }), n;
}

var rl = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function timeStamp(e) {
    return e.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
},
    Jc = tn(rl),
    Io = Ue({}, rl, {
  view: 0,
  detail: 0
}),
    bw = tn(Io),
    vf,
    gf,
    Ql,
    Da = Ue({}, Io, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: qc,
  button: 0,
  buttons: 0,
  relatedTarget: function relatedTarget(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  },
  movementX: function movementX(e) {
    return "movementX" in e ? e.movementX : (e !== Ql && (Ql && e.type === "mousemove" ? (vf = e.screenX - Ql.screenX, gf = e.screenY - Ql.screenY) : gf = vf = 0, Ql = e), vf);
  },
  movementY: function movementY(e) {
    return "movementY" in e ? e.movementY : gf;
  }
}),
    h0 = tn(Da),
    Aw = Ue({}, Da, {
  dataTransfer: 0
}),
    Fw = tn(Aw),
    Dw = Ue({}, Io, {
  relatedTarget: 0
}),
    yf = tn(Dw),
    Ow = Ue({}, rl, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}),
    Nw = tn(Ow),
    Pw = Ue({}, rl, {
  clipboardData: function clipboardData(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  }
}),
    Bw = tn(Pw),
    Mw = Ue({}, rl, {
  data: 0
}),
    p0 = tn(Mw),
    Iw = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    Rw = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    zw = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Hw(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = zw[e]) ? !!n[e] : !1;
}

function qc() {
  return Hw;
}

var Ww = Ue({}, Io, {
  key: function key(e) {
    if (e.key) {
      var n = Iw[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }

    return e.type === "keypress" ? (e = Gu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rw[e.keyCode] || "Unidentified" : "";
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: qc,
  charCode: function charCode(e) {
    return e.type === "keypress" ? Gu(e) : 0;
  },
  keyCode: function keyCode(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  },
  which: function which(e) {
    return e.type === "keypress" ? Gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }
}),
    $w = tn(Ww),
    Uw = Ue({}, Da, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
}),
    v0 = tn(Uw),
    jw = Ue({}, Io, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: qc
}),
    Kw = tn(jw),
    Gw = Ue({}, rl, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}),
    Vw = tn(Gw),
    Qw = Ue({}, Da, {
  deltaX: function deltaX(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function deltaY(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}),
    Yw = tn(Qw),
    Xw = [9, 13, 27, 32],
    ed = Yn && "CompositionEvent" in window,
    ao = null;
Yn && "documentMode" in document && (ao = document.documentMode);
var Zw = Yn && "TextEvent" in window && !ao,
    Lg = Yn && (!ed || ao && 8 < ao && 11 >= ao),
    g0 = String.fromCharCode(32),
    y0 = !1;

function bg(e, n) {
  switch (e) {
    case "keyup":
      return Xw.indexOf(n.keyCode) !== -1;

    case "keydown":
      return n.keyCode !== 229;

    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;

    default:
      return !1;
  }
}

function Ag(e) {
  return e = e.detail, _typeof(e) == "object" && "data" in e ? e.data : null;
}

var Pi = !1;

function Jw(e, n) {
  switch (e) {
    case "compositionend":
      return Ag(n);

    case "keypress":
      return n.which !== 32 ? null : (y0 = !0, g0);

    case "textInput":
      return e = n.data, e === g0 && y0 ? null : e;

    default:
      return null;
  }
}

function qw(e, n) {
  if (Pi) return e === "compositionend" || !ed && bg(e, n) ? (e = Tg(), Ku = Zc = vr = null, Pi = !1, e) : null;

  switch (e) {
    case "paste":
      return null;

    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }

      return null;

    case "compositionend":
      return Lg && n.locale !== "ko" ? null : n.data;

    default:
      return null;
  }
}

var eC = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function m0(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!eC[e.type] : n === "textarea";
}

function Fg(e, n, i, a) {
  ug(a), n = fa(n, "onChange"), 0 < n.length && (i = new Jc("onChange", "change", null, i, a), e.push({
    event: i,
    listeners: n
  }));
}

var so = null,
    xo = null;

function tC(e) {
  Wg(e, 0);
}

function Oa(e) {
  var n = Ii(e);
  if (eg(n)) return e;
}

function nC(e, n) {
  if (e === "change") return n;
}

var Dg = !1;

if (Yn) {
  var mf;

  if (Yn) {
    var wf = ("oninput" in document);

    if (!wf) {
      var w0 = document.createElement("div");
      w0.setAttribute("oninput", "return;"), wf = typeof w0.oninput == "function";
    }

    mf = wf;
  } else mf = !1;

  Dg = mf && (!document.documentMode || 9 < document.documentMode);
}

function C0() {
  so && (so.detachEvent("onpropertychange", Og), xo = so = null);
}

function Og(e) {
  if (e.propertyName === "value" && Oa(xo)) {
    var n = [];
    Fg(n, xo, e, Gc(e)), cg(tC, n);
  }
}

function rC(e, n, i) {
  e === "focusin" ? (C0(), so = n, xo = i, so.attachEvent("onpropertychange", Og)) : e === "focusout" && C0();
}

function iC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Oa(xo);
}

function lC(e, n) {
  if (e === "click") return Oa(n);
}

function oC(e, n) {
  if (e === "input" || e === "change") return Oa(n);
}

function uC(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}

var Sn = typeof Object.is == "function" ? Object.is : uC;

function ko(e, n) {
  if (Sn(e, n)) return !0;
  if (_typeof(e) != "object" || e === null || _typeof(n) != "object" || n === null) return !1;
  var i = Object.keys(e),
      a = Object.keys(n);
  if (i.length !== a.length) return !1;

  for (a = 0; a < i.length; a++) {
    var s = i[a];
    if (!If.call(n, s) || !Sn(e[s], n[s])) return !1;
  }

  return !0;
}

function S0(e) {
  for (; e && e.firstChild;) {
    e = e.firstChild;
  }

  return e;
}

function x0(e, n) {
  var i = S0(e);
  e = 0;

  for (var a; i;) {
    if (i.nodeType === 3) {
      if (a = e + i.textContent.length, e <= n && a >= n) return {
        node: i,
        offset: n - e
      };
      e = a;
    }

    e: {
      for (; i;) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }

        i = i.parentNode;
      }

      i = void 0;
    }

    i = S0(i);
  }
}

function Ng(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ng(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}

function Pg() {
  for (var e = window, n = ra(); n instanceof e.HTMLIFrameElement;) {
    try {
      var i = typeof n.contentWindow.location.href == "string";
    } catch (_unused5) {
      i = !1;
    }

    if (i) e = n.contentWindow;else break;
    n = ra(e.document);
  }

  return n;
}

function td(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}

function aC(e) {
  var n = Pg(),
      i = e.focusedElem,
      a = e.selectionRange;

  if (n !== i && i && i.ownerDocument && Ng(i.ownerDocument.documentElement, i)) {
    if (a !== null && td(i)) {
      if (n = a.start, e = a.end, e === void 0 && (e = n), "selectionStart" in i) i.selectionStart = n, i.selectionEnd = Math.min(e, i.value.length);else if (e = (n = i.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var s = i.textContent.length,
            c = Math.min(a.start, s);
        a = a.end === void 0 ? c : Math.min(a.end, s), !e.extend && c > a && (s = a, a = c, c = s), s = x0(i, c);
        var p = x0(i, a);
        s && p && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (n = n.createRange(), n.setStart(s.node, s.offset), e.removeAllRanges(), c > a ? (e.addRange(n), e.extend(p.node, p.offset)) : (n.setEnd(p.node, p.offset), e.addRange(n)));
      }
    }

    for (n = [], e = i; e = e.parentNode;) {
      e.nodeType === 1 && n.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
    }

    for (typeof i.focus == "function" && i.focus(), i = 0; i < n.length; i++) {
      e = n[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
}

var sC = Yn && "documentMode" in document && 11 >= document.documentMode,
    Bi = null,
    nc = null,
    fo = null,
    rc = !1;

function k0(e, n, i) {
  var a = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  rc || Bi == null || Bi !== ra(a) || (a = Bi, "selectionStart" in a && td(a) ? a = {
    start: a.selectionStart,
    end: a.selectionEnd
  } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
    anchorNode: a.anchorNode,
    anchorOffset: a.anchorOffset,
    focusNode: a.focusNode,
    focusOffset: a.focusOffset
  }), fo && ko(fo, a) || (fo = a, a = fa(nc, "onSelect"), 0 < a.length && (n = new Jc("onSelect", "select", null, n, i), e.push({
    event: n,
    listeners: a
  }), n.target = Bi)));
}

function Ou(e, n) {
  var i = {};
  return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
}

var Mi = {
  animationend: Ou("Animation", "AnimationEnd"),
  animationiteration: Ou("Animation", "AnimationIteration"),
  animationstart: Ou("Animation", "AnimationStart"),
  transitionend: Ou("Transition", "TransitionEnd")
},
    Cf = {},
    Bg = {};
Yn && (Bg = document.createElement("div").style, "AnimationEvent" in window || (delete Mi.animationend.animation, delete Mi.animationiteration.animation, delete Mi.animationstart.animation), "TransitionEvent" in window || delete Mi.transitionend.transition);

function Na(e) {
  if (Cf[e]) return Cf[e];
  if (!Mi[e]) return e;
  var n = Mi[e],
      i;

  for (i in n) {
    if (n.hasOwnProperty(i) && i in Bg) return Cf[e] = n[i];
  }

  return e;
}

var Mg = Na("animationend"),
    Ig = Na("animationiteration"),
    Rg = Na("animationstart"),
    zg = Na("transitionend"),
    Hg = new Map(),
    _0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Tr(e, n) {
  Hg.set(e, n), li(n, [e]);
}

for (var Sf = 0; Sf < _0.length; Sf++) {
  var xf = _0[Sf],
      fC = xf.toLowerCase(),
      cC = xf[0].toUpperCase() + xf.slice(1);
  Tr(fC, "on" + cC);
}

Tr(Mg, "onAnimationEnd");
Tr(Ig, "onAnimationIteration");
Tr(Rg, "onAnimationStart");
Tr("dblclick", "onDoubleClick");
Tr("focusin", "onFocus");
Tr("focusout", "onBlur");
Tr(zg, "onTransitionEnd");
Xi("onMouseEnter", ["mouseout", "mouseover"]);
Xi("onMouseLeave", ["mouseout", "mouseover"]);
Xi("onPointerEnter", ["pointerout", "pointerover"]);
Xi("onPointerLeave", ["pointerout", "pointerover"]);
li("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
li("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
li("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var io = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    dC = new Set("cancel close invalid load scroll toggle".split(" ").concat(io));

function E0(e, n, i) {
  var a = e.type || "unknown-event";
  e.currentTarget = i, fw(a, n, void 0, e), e.currentTarget = null;
}

function Wg(e, n) {
  n = (n & 4) !== 0;

  for (var i = 0; i < e.length; i++) {
    var a = e[i],
        s = a.event;
    a = a.listeners;

    e: {
      var c = void 0;
      if (n) for (var p = a.length - 1; 0 <= p; p--) {
        var m = a[p],
            C = m.instance,
            x = m.currentTarget;
        if (m = m.listener, C !== c && s.isPropagationStopped()) break e;
        E0(s, m, x), c = C;
      } else for (p = 0; p < a.length; p++) {
        if (m = a[p], C = m.instance, x = m.currentTarget, m = m.listener, C !== c && s.isPropagationStopped()) break e;
        E0(s, m, x), c = C;
      }
    }
  }

  if (la) throw e = Jf, la = !1, Jf = null, e;
}

function Pe(e, n) {
  var i = n[ac];
  i === void 0 && (i = n[ac] = new Set());
  var a = e + "__bubble";
  i.has(a) || ($g(n, e, 2, !1), i.add(a));
}

function kf(e, n, i) {
  var a = 0;
  n && (a |= 4), $g(i, e, a, n);
}

var Nu = "_reactListening" + Math.random().toString(36).slice(2);

function _o(e) {
  if (!e[Nu]) {
    e[Nu] = !0, Yv.forEach(function (i) {
      i !== "selectionchange" && (dC.has(i) || kf(i, !1, e), kf(i, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[Nu] || (n[Nu] = !0, kf("selectionchange", !1, n));
  }
}

function $g(e, n, i, a) {
  switch (Eg(n)) {
    case 1:
      var s = Tw;
      break;

    case 4:
      s = Lw;
      break;

    default:
      s = Xc;
  }

  i = s.bind(null, n, i, e), s = void 0, !Zf || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), a ? s !== void 0 ? e.addEventListener(n, i, {
    capture: !0,
    passive: s
  }) : e.addEventListener(n, i, !0) : s !== void 0 ? e.addEventListener(n, i, {
    passive: s
  }) : e.addEventListener(n, i, !1);
}

function _f(e, n, i, a, s) {
  var c = a;
  if ((n & 1) === 0 && (n & 2) === 0 && a !== null) e: for (;;) {
    if (a === null) return;
    var p = a.tag;

    if (p === 3 || p === 4) {
      var m = a.stateNode.containerInfo;
      if (m === s || m.nodeType === 8 && m.parentNode === s) break;
      if (p === 4) for (p = a.return; p !== null;) {
        var C = p.tag;
        if ((C === 3 || C === 4) && (C = p.stateNode.containerInfo, C === s || C.nodeType === 8 && C.parentNode === s)) return;
        p = p.return;
      }

      for (; m !== null;) {
        if (p = Xr(m), p === null) return;

        if (C = p.tag, C === 5 || C === 6) {
          a = c = p;
          continue e;
        }

        m = m.parentNode;
      }
    }

    a = a.return;
  }
  cg(function () {
    var x = c,
        _ = Gc(i),
        A = [];

    e: {
      var E = Hg.get(e);

      if (E !== void 0) {
        var b = Jc,
            F = e;

        switch (e) {
          case "keypress":
            if (Gu(i) === 0) break e;

          case "keydown":
          case "keyup":
            b = $w;
            break;

          case "focusin":
            F = "focus", b = yf;
            break;

          case "focusout":
            F = "blur", b = yf;
            break;

          case "beforeblur":
          case "afterblur":
            b = yf;
            break;

          case "click":
            if (i.button === 2) break e;

          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = h0;
            break;

          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Fw;
            break;

          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Kw;
            break;

          case Mg:
          case Ig:
          case Rg:
            b = Nw;
            break;

          case zg:
            b = Vw;
            break;

          case "scroll":
            b = bw;
            break;

          case "wheel":
            b = Yw;
            break;

          case "copy":
          case "cut":
          case "paste":
            b = Bw;
            break;

          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = v0;
        }

        var D = (n & 4) !== 0,
            R = !D && e === "scroll",
            y = D ? E !== null ? E + "Capture" : null : E;
        D = [];

        for (var w = x, S; w !== null;) {
          S = w;
          var L = S.stateNode;
          if (S.tag === 5 && L !== null && (S = L, y !== null && (L = mo(w, y), L != null && D.push(Eo(w, L, S)))), R) break;
          w = w.return;
        }

        0 < D.length && (E = new b(E, F, null, i, _), A.push({
          event: E,
          listeners: D
        }));
      }
    }

    if ((n & 7) === 0) {
      e: {
        if (E = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", E && i !== Yf && (F = i.relatedTarget || i.fromElement) && (Xr(F) || F[Xn])) break e;

        if ((b || E) && (E = _.window === _ ? _ : (E = _.ownerDocument) ? E.defaultView || E.parentWindow : window, b ? (F = i.relatedTarget || i.toElement, b = x, F = F ? Xr(F) : null, F !== null && (R = oi(F), F !== R || F.tag !== 5 && F.tag !== 6) && (F = null)) : (b = null, F = x), b !== F)) {
          if (D = h0, L = "onMouseLeave", y = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (D = v0, L = "onPointerLeave", y = "onPointerEnter", w = "pointer"), R = b == null ? E : Ii(b), S = F == null ? E : Ii(F), E = new D(L, w + "leave", b, i, _), E.target = R, E.relatedTarget = S, L = null, Xr(_) === x && (D = new D(y, w + "enter", F, i, _), D.target = S, D.relatedTarget = R, L = D), R = L, b && F) t: {
            for (D = b, y = F, w = 0, S = D; S; S = Di(S)) {
              w++;
            }

            for (S = 0, L = y; L; L = Di(L)) {
              S++;
            }

            for (; 0 < w - S;) {
              D = Di(D), w--;
            }

            for (; 0 < S - w;) {
              y = Di(y), S--;
            }

            for (; w--;) {
              if (D === y || y !== null && D === y.alternate) break t;
              D = Di(D), y = Di(y);
            }

            D = null;
          } else D = null;
          b !== null && T0(A, E, b, D, !1), F !== null && R !== null && T0(A, R, F, D, !0);
        }
      }

      e: {
        if (E = x ? Ii(x) : window, b = E.nodeName && E.nodeName.toLowerCase(), b === "select" || b === "input" && E.type === "file") var O = nC;else if (m0(E)) {
          if (Dg) O = oC;else {
            O = iC;
            var I = rC;
          }
        } else (b = E.nodeName) && b.toLowerCase() === "input" && (E.type === "checkbox" || E.type === "radio") && (O = lC);

        if (O && (O = O(e, x))) {
          Fg(A, O, i, _);
          break e;
        }

        I && I(e, E, x), e === "focusout" && (I = E._wrapperState) && I.controlled && E.type === "number" && jf(E, "number", E.value);
      }

      switch (I = x ? Ii(x) : window, e) {
        case "focusin":
          (m0(I) || I.contentEditable === "true") && (Bi = I, nc = x, fo = null);
          break;

        case "focusout":
          fo = nc = Bi = null;
          break;

        case "mousedown":
          rc = !0;
          break;

        case "contextmenu":
        case "mouseup":
        case "dragend":
          rc = !1, k0(A, i, _);
          break;

        case "selectionchange":
          if (sC) break;

        case "keydown":
        case "keyup":
          k0(A, i, _);
      }

      var M;
      if (ed) e: {
        switch (e) {
          case "compositionstart":
            var H = "onCompositionStart";
            break e;

          case "compositionend":
            H = "onCompositionEnd";
            break e;

          case "compositionupdate":
            H = "onCompositionUpdate";
            break e;
        }

        H = void 0;
      } else Pi ? bg(e, i) && (H = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (H = "onCompositionStart");
      H && (Lg && i.locale !== "ko" && (Pi || H !== "onCompositionStart" ? H === "onCompositionEnd" && Pi && (M = Tg()) : (vr = _, Zc = "value" in vr ? vr.value : vr.textContent, Pi = !0)), I = fa(x, H), 0 < I.length && (H = new p0(H, e, null, i, _), A.push({
        event: H,
        listeners: I
      }), M ? H.data = M : (M = Ag(i), M !== null && (H.data = M)))), (M = Zw ? Jw(e, i) : qw(e, i)) && (x = fa(x, "onBeforeInput"), 0 < x.length && (_ = new p0("onBeforeInput", "beforeinput", null, i, _), A.push({
        event: _,
        listeners: x
      }), _.data = M));
    }

    Wg(A, n);
  });
}

function Eo(e, n, i) {
  return {
    instance: e,
    listener: n,
    currentTarget: i
  };
}

function fa(e, n) {
  for (var i = n + "Capture", a = []; e !== null;) {
    var s = e,
        c = s.stateNode;
    s.tag === 5 && c !== null && (s = c, c = mo(e, i), c != null && a.unshift(Eo(e, c, s)), c = mo(e, n), c != null && a.push(Eo(e, c, s))), e = e.return;
  }

  return a;
}

function Di(e) {
  if (e === null) return null;

  do {
    e = e.return;
  } while (e && e.tag !== 5);

  return e || null;
}

function T0(e, n, i, a, s) {
  for (var c = n._reactName, p = []; i !== null && i !== a;) {
    var m = i,
        C = m.alternate,
        x = m.stateNode;
    if (C !== null && C === a) break;
    m.tag === 5 && x !== null && (m = x, s ? (C = mo(i, c), C != null && p.unshift(Eo(i, C, m))) : s || (C = mo(i, c), C != null && p.push(Eo(i, C, m)))), i = i.return;
  }

  p.length !== 0 && e.push({
    event: n,
    listeners: p
  });
}

var hC = /\r\n?/g,
    pC = /\u0000|\uFFFD/g;

function L0(e) {
  return (typeof e == "string" ? e : "" + e).replace(hC, "\n").replace(pC, "");
}

function Pu(e, n, i) {
  if (n = L0(n), L0(e) !== n && i) throw Error(Q(425));
}

function ca() {}

var ic = null,
    lc = null;

function oc(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || _typeof(n.dangerouslySetInnerHTML) == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}

var uc = typeof setTimeout == "function" ? setTimeout : void 0,
    vC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    b0 = typeof Promise == "function" ? Promise : void 0,
    gC = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 != "undefined" ? function (e) {
  return b0.resolve(null).then(e).catch(yC);
} : uc;

function yC(e) {
  setTimeout(function () {
    throw e;
  });
}

function Ef(e, n) {
  var i = n,
      a = 0;

  do {
    var s = i.nextSibling;
    if (e.removeChild(i), s && s.nodeType === 8) if (i = s.data, i === "/$") {
      if (a === 0) {
        e.removeChild(s), So(n);
        return;
      }

      a--;
    } else i !== "$" && i !== "$?" && i !== "$!" || a++;
    i = s;
  } while (i);

  So(n);
}

function jn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;

    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }

  return e;
}

function A0(e) {
  e = e.previousSibling;

  for (var n = 0; e;) {
    if (e.nodeType === 8) {
      var i = e.data;

      if (i === "$" || i === "$!" || i === "$?") {
        if (n === 0) return e;
        n--;
      } else i === "/$" && n++;
    }

    e = e.previousSibling;
  }

  return null;
}

var il = Math.random().toString(36).slice(2),
    An = "__reactFiber$" + il,
    To = "__reactProps$" + il,
    Xn = "__reactContainer$" + il,
    ac = "__reactEvents$" + il,
    mC = "__reactListeners$" + il,
    wC = "__reactHandles$" + il;

function Xr(e) {
  var n = e[An];
  if (n) return n;

  for (var i = e.parentNode; i;) {
    if (n = i[Xn] || i[An]) {
      if (i = n.alternate, n.child !== null || i !== null && i.child !== null) for (e = A0(e); e !== null;) {
        if (i = e[An]) return i;
        e = A0(e);
      }
      return n;
    }

    e = i, i = e.parentNode;
  }

  return null;
}

function Ro(e) {
  return e = e[An] || e[Xn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}

function Ii(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Q(33));
}

function Pa(e) {
  return e[To] || null;
}

var sc = [],
    Ri = -1;

function Lr(e) {
  return {
    current: e
  };
}

function Me(e) {
  0 > Ri || (e.current = sc[Ri], sc[Ri] = null, Ri--);
}

function Oe(e, n) {
  Ri++, sc[Ri] = e.current, e.current = n;
}

var _r = {},
    Tt = Lr(_r),
    Kt = Lr(!1),
    ei = _r;

function Zi(e, n) {
  var i = e.type.contextTypes;
  if (!i) return _r;
  var a = e.stateNode;
  if (a && a.__reactInternalMemoizedUnmaskedChildContext === n) return a.__reactInternalMemoizedMaskedChildContext;
  var s = {},
      c;

  for (c in i) {
    s[c] = n[c];
  }

  return a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = s), s;
}

function Gt(e) {
  return e = e.childContextTypes, e != null;
}

function da() {
  Me(Kt), Me(Tt);
}

function F0(e, n, i) {
  if (Tt.current !== _r) throw Error(Q(168));
  Oe(Tt, n), Oe(Kt, i);
}

function Ug(e, n, i) {
  var a = e.stateNode;
  if (n = n.childContextTypes, typeof a.getChildContext != "function") return i;
  a = a.getChildContext();

  for (var s in a) {
    if (!(s in n)) throw Error(Q(108, rw(e) || "Unknown", s));
  }

  return Ue({}, i, a);
}

function ha(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _r, ei = Tt.current, Oe(Tt, e), Oe(Kt, Kt.current), !0;
}

function D0(e, n, i) {
  var a = e.stateNode;
  if (!a) throw Error(Q(169));
  i ? (e = Ug(e, n, ei), a.__reactInternalMemoizedMergedChildContext = e, Me(Kt), Me(Tt), Oe(Tt, e)) : Me(Kt), Oe(Kt, i);
}

var Un = null,
    Ba = !1,
    Tf = !1;

function jg(e) {
  Un === null ? Un = [e] : Un.push(e);
}

function CC(e) {
  Ba = !0, jg(e);
}

function br() {
  if (!Tf && Un !== null) {
    Tf = !0;
    var e = 0,
        n = Ae;

    try {
      var i = Un;

      for (Ae = 1; e < i.length; e++) {
        var a = i[e];

        do {
          a = a(!0);
        } while (a !== null);
      }

      Un = null, Ba = !1;
    } catch (s) {
      throw Un !== null && (Un = Un.slice(e + 1)), vg(Vc, br), s;
    } finally {
      Ae = n, Tf = !1;
    }
  }

  return null;
}

var SC = Jn.ReactCurrentBatchConfig;

function gn(e, n) {
  if (e && e.defaultProps) {
    n = Ue({}, n), e = e.defaultProps;

    for (var i in e) {
      n[i] === void 0 && (n[i] = e[i]);
    }

    return n;
  }

  return n;
}

var pa = Lr(null),
    va = null,
    zi = null,
    nd = null;

function rd() {
  nd = zi = va = null;
}

function id(e) {
  var n = pa.current;
  Me(pa), e._currentValue = n;
}

function fc(e, n, i) {
  for (; e !== null;) {
    var a = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, a !== null && (a.childLanes |= n)) : a !== null && (a.childLanes & n) !== n && (a.childLanes |= n), e === i) break;
    e = e.return;
  }
}

function Qi(e, n) {
  va = e, nd = zi = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (jt = !0), e.firstContext = null);
}

function sn(e) {
  var n = e._currentValue;
  if (nd !== e) if (e = {
    context: e,
    memoizedValue: n,
    next: null
  }, zi === null) {
    if (va === null) throw Error(Q(308));
    zi = e, va.dependencies = {
      lanes: 0,
      firstContext: e
    };
  } else zi = zi.next = e;
  return n;
}

var wn = null,
    dr = !1;

function ld(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}

function Kg(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  });
}

function Vn(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}

function Cr(e, n) {
  var i = e.updateQueue;
  i !== null && (i = i.shared, Py(e) ? (e = i.interleaved, e === null ? (n.next = n, wn === null ? wn = [i] : wn.push(i)) : (n.next = e.next, e.next = n), i.interleaved = n) : (e = i.pending, e === null ? n.next = n : (n.next = e.next, e.next = n), i.pending = n));
}

function Vu(e, n, i) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194240) !== 0)) {
    var a = n.lanes;
    a &= e.pendingLanes, i |= a, n.lanes = i, Qc(e, i);
  }
}

function O0(e, n) {
  var i = e.updateQueue,
      a = e.alternate;

  if (a !== null && (a = a.updateQueue, i === a)) {
    var s = null,
        c = null;

    if (i = i.firstBaseUpdate, i !== null) {
      do {
        var p = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        };
        c === null ? s = c = p : c = c.next = p, i = i.next;
      } while (i !== null);

      c === null ? s = c = n : c = c.next = n;
    } else s = c = n;

    i = {
      baseState: a.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: c,
      shared: a.shared,
      effects: a.effects
    }, e.updateQueue = i;
    return;
  }

  e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
}

function ga(e, n, i, a) {
  var s = e.updateQueue;
  dr = !1;
  var c = s.firstBaseUpdate,
      p = s.lastBaseUpdate,
      m = s.shared.pending;

  if (m !== null) {
    s.shared.pending = null;
    var C = m,
        x = C.next;
    C.next = null, p === null ? c = x : p.next = x, p = C;
    var _ = e.alternate;
    _ !== null && (_ = _.updateQueue, m = _.lastBaseUpdate, m !== p && (m === null ? _.firstBaseUpdate = x : m.next = x, _.lastBaseUpdate = C));
  }

  if (c !== null) {
    var A = s.baseState;
    p = 0, _ = x = C = null, m = c;

    do {
      var E = m.lane,
          b = m.eventTime;

      if ((a & E) === E) {
        _ !== null && (_ = _.next = {
          eventTime: b,
          lane: 0,
          tag: m.tag,
          payload: m.payload,
          callback: m.callback,
          next: null
        });

        e: {
          var F = e,
              D = m;

          switch (E = n, b = i, D.tag) {
            case 1:
              if (F = D.payload, typeof F == "function") {
                A = F.call(b, A, E);
                break e;
              }

              A = F;
              break e;

            case 3:
              F.flags = F.flags & -65537 | 128;

            case 0:
              if (F = D.payload, E = typeof F == "function" ? F.call(b, A, E) : F, E == null) break e;
              A = Ue({}, A, E);
              break e;

            case 2:
              dr = !0;
          }
        }

        m.callback !== null && m.lane !== 0 && (e.flags |= 64, E = s.effects, E === null ? s.effects = [m] : E.push(m));
      } else b = {
        eventTime: b,
        lane: E,
        tag: m.tag,
        payload: m.payload,
        callback: m.callback,
        next: null
      }, _ === null ? (x = _ = b, C = A) : _ = _.next = b, p |= E;

      if (m = m.next, m === null) {
        if (m = s.shared.pending, m === null) break;
        E = m, m = E.next, E.next = null, s.lastBaseUpdate = E, s.shared.pending = null;
      }
    } while (1);

    if (_ === null && (C = A), s.baseState = C, s.firstBaseUpdate = x, s.lastBaseUpdate = _, n = s.shared.interleaved, n !== null) {
      s = n;

      do {
        p |= s.lane, s = s.next;
      } while (s !== n);
    } else c === null && (s.shared.lanes = 0);

    ri |= p, e.lanes = p, e.memoizedState = A;
  }
}

function N0(e, n, i) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var a = e[n],
        s = a.callback;

    if (s !== null) {
      if (a.callback = null, a = i, typeof s != "function") throw Error(Q(191, s));
      s.call(a);
    }
  }
}

var Gg = new Qv.Component().refs;

function cc(e, n, i, a) {
  n = e.memoizedState, i = i(a, n), i = i == null ? n : Ue({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
}

var Ma = {
  isMounted: function isMounted(e) {
    return (e = e._reactInternals) ? oi(e) === e : !1;
  },
  enqueueSetState: function enqueueSetState(e, n, i) {
    e = e._reactInternals;
    var a = It(),
        s = xr(e),
        c = Vn(a, s);
    c.payload = n, i != null && (c.callback = i), Cr(e, c), n = an(e, s, a), n !== null && Vu(n, e, s);
  },
  enqueueReplaceState: function enqueueReplaceState(e, n, i) {
    e = e._reactInternals;
    var a = It(),
        s = xr(e),
        c = Vn(a, s);
    c.tag = 1, c.payload = n, i != null && (c.callback = i), Cr(e, c), n = an(e, s, a), n !== null && Vu(n, e, s);
  },
  enqueueForceUpdate: function enqueueForceUpdate(e, n) {
    e = e._reactInternals;
    var i = It(),
        a = xr(e),
        s = Vn(i, a);
    s.tag = 2, n != null && (s.callback = n), Cr(e, s), n = an(e, a, i), n !== null && Vu(n, e, a);
  }
};

function P0(e, n, i, a, s, c, p) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, p) : n.prototype && n.prototype.isPureReactComponent ? !ko(i, a) || !ko(s, c) : !0;
}

function Vg(e, n, i) {
  var a = !1,
      s = _r,
      c = n.contextType;
  return _typeof(c) == "object" && c !== null ? c = sn(c) : (s = Gt(n) ? ei : Tt.current, a = n.contextTypes, c = (a = a != null) ? Zi(e, s) : _r), n = new n(i, c), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ma, e.stateNode = n, n._reactInternals = e, a && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = c), n;
}

function B0(e, n, i, a) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, a), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, a), n.state !== e && Ma.enqueueReplaceState(n, n.state, null);
}

function dc(e, n, i, a) {
  var s = e.stateNode;
  s.props = i, s.state = e.memoizedState, s.refs = Gg, ld(e);
  var c = n.contextType;
  _typeof(c) == "object" && c !== null ? s.context = sn(c) : (c = Gt(n) ? ei : Tt.current, s.context = Zi(e, c)), s.state = e.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (cc(e, n, c, i), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (n = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), n !== s.state && Ma.enqueueReplaceState(s, s.state, null), ga(e, i, s, a), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}

var Hi = [],
    Wi = 0,
    ya = null,
    ma = 0,
    rn = [],
    ln = 0,
    ti = null,
    Kn = 1,
    Gn = "";

function Gr(e, n) {
  Hi[Wi++] = ma, Hi[Wi++] = ya, ya = e, ma = n;
}

function Qg(e, n, i) {
  rn[ln++] = Kn, rn[ln++] = Gn, rn[ln++] = ti, ti = e;
  var a = Kn;
  e = Gn;
  var s = 32 - Cn(a) - 1;
  a &= ~(1 << s), i += 1;
  var c = 32 - Cn(n) + s;

  if (30 < c) {
    var p = s - s % 5;
    c = (a & (1 << p) - 1).toString(32), a >>= p, s -= p, Kn = 1 << 32 - Cn(n) + s | i << s | a, Gn = c + e;
  } else Kn = 1 << c | i << s | a, Gn = e;
}

function od(e) {
  e.return !== null && (Gr(e, 1), Qg(e, 1, 0));
}

function ud(e) {
  for (; e === ya;) {
    ya = Hi[--Wi], Hi[Wi] = null, ma = Hi[--Wi], Hi[Wi] = null;
  }

  for (; e === ti;) {
    ti = rn[--ln], rn[ln] = null, Gn = rn[--ln], rn[ln] = null, Kn = rn[--ln], rn[ln] = null;
  }
}

var Jt = null,
    Ut = null,
    ze = !1,
    mn = null;

function Yg(e, n) {
  var i = on(5, null, null, 0);
  i.elementType = "DELETED", i.stateNode = n, i.return = e, n = e.deletions, n === null ? (e.deletions = [i], e.flags |= 16) : n.push(i);
}

function M0(e, n) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return n = n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Jt = e, Ut = jn(n.firstChild), !0) : !1;

    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Jt = e, Ut = null, !0) : !1;

    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (i = ti !== null ? {
        id: Kn,
        overflow: Gn
      } : null, e.memoizedState = {
        dehydrated: n,
        treeContext: i,
        retryLane: 1073741824
      }, i = on(18, null, null, 0), i.stateNode = n, i.return = e, e.child = i, Jt = e, Ut = null, !0) : !1;

    default:
      return !1;
  }
}

function hc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}

function pc(e) {
  if (ze) {
    var n = Ut;

    if (n) {
      var i = n;

      if (!M0(e, n)) {
        if (hc(e)) throw Error(Q(418));
        n = jn(i.nextSibling);
        var a = Jt;
        n && M0(e, n) ? Yg(a, i) : (e.flags = e.flags & -4097 | 2, ze = !1, Jt = e);
      }
    } else {
      if (hc(e)) throw Error(Q(418));
      e.flags = e.flags & -4097 | 2, ze = !1, Jt = e;
    }
  }
}

function I0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) {
    e = e.return;
  }

  Jt = e;
}

function Yl(e) {
  if (e !== Jt) return !1;
  if (!ze) return I0(e), ze = !0, !1;
  var n;

  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !oc(e.type, e.memoizedProps)), n && (n = Ut)) {
    if (hc(e)) {
      for (e = Ut; e;) {
        e = jn(e.nextSibling);
      }

      throw Error(Q(418));
    }

    for (; n;) {
      Yg(e, n), n = jn(n.nextSibling);
    }
  }

  if (I0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(Q(317));

    e: {
      for (e = e.nextSibling, n = 0; e;) {
        if (e.nodeType === 8) {
          var i = e.data;

          if (i === "/$") {
            if (n === 0) {
              Ut = jn(e.nextSibling);
              break e;
            }

            n--;
          } else i !== "$" && i !== "$!" && i !== "$?" || n++;
        }

        e = e.nextSibling;
      }

      Ut = null;
    }
  } else Ut = Jt ? jn(e.stateNode.nextSibling) : null;

  return !0;
}

function Ji() {
  Ut = Jt = null, ze = !1;
}

function ad(e) {
  mn === null ? mn = [e] : mn.push(e);
}

function Xl(e, n, i) {
  if (e = i.ref, e !== null && typeof e != "function" && _typeof(e) != "object") {
    if (i._owner) {
      if (i = i._owner, i) {
        if (i.tag !== 1) throw Error(Q(309));
        var a = i.stateNode;
      }

      if (!a) throw Error(Q(147, e));
      var s = a,
          c = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === c ? n.ref : (n = function n(p) {
        var m = s.refs;
        m === Gg && (m = s.refs = {}), p === null ? delete m[c] : m[c] = p;
      }, n._stringRef = c, n);
    }

    if (typeof e != "string") throw Error(Q(284));
    if (!i._owner) throw Error(Q(290, e));
  }

  return e;
}

function Bu(e, n) {
  throw e = Object.prototype.toString.call(n), Error(Q(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}

function R0(e) {
  var n = e._init;
  return n(e._payload);
}

function Xg(e) {
  function n(y, w) {
    if (e) {
      var S = y.deletions;
      S === null ? (y.deletions = [w], y.flags |= 16) : S.push(w);
    }
  }

  function i(y, w) {
    if (!e) return null;

    for (; w !== null;) {
      n(y, w), w = w.sibling;
    }

    return null;
  }

  function a(y, w) {
    for (y = new Map(); w !== null;) {
      w.key !== null ? y.set(w.key, w) : y.set(w.index, w), w = w.sibling;
    }

    return y;
  }

  function s(y, w) {
    return y = Er(y, w), y.index = 0, y.sibling = null, y;
  }

  function c(y, w, S) {
    return y.index = S, e ? (S = y.alternate, S !== null ? (S = S.index, S < w ? (y.flags |= 2, w) : S) : (y.flags |= 2, w)) : (y.flags |= 1048576, w);
  }

  function p(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }

  function m(y, w, S, L) {
    return w === null || w.tag !== 6 ? (w = Of(S, y.mode, L), w.return = y, w) : (w = s(w, S), w.return = y, w);
  }

  function C(y, w, S, L) {
    var O = S.type;
    return O === Ni ? _(y, w, S.props.children, L, S.key) : w !== null && (w.elementType === O || _typeof(O) == "object" && O !== null && O.$$typeof === cr && R0(O) === w.type) ? (L = s(w, S.props), L.ref = Xl(y, w, S), L.return = y, L) : (L = Ju(S.type, S.key, S.props, null, y.mode, L), L.ref = Xl(y, w, S), L.return = y, L);
  }

  function x(y, w, S, L) {
    return w === null || w.tag !== 4 || w.stateNode.containerInfo !== S.containerInfo || w.stateNode.implementation !== S.implementation ? (w = Nf(S, y.mode, L), w.return = y, w) : (w = s(w, S.children || []), w.return = y, w);
  }

  function _(y, w, S, L, O) {
    return w === null || w.tag !== 7 ? (w = qr(S, y.mode, L, O), w.return = y, w) : (w = s(w, S), w.return = y, w);
  }

  function A(y, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return w = Of("" + w, y.mode, S), w.return = y, w;

    if (_typeof(w) == "object" && w !== null) {
      switch (w.$$typeof) {
        case Eu:
          return S = Ju(w.type, w.key, w.props, null, y.mode, S), S.ref = Xl(y, null, w), S.return = y, S;

        case Oi:
          return w = Nf(w, y.mode, S), w.return = y, w;

        case cr:
          var L = w._init;
          return A(y, L(w._payload), S);
      }

      if (no(w) || jl(w)) return w = qr(w, y.mode, S, null), w.return = y, w;
      Bu(y, w);
    }

    return null;
  }

  function E(y, w, S, L) {
    var O = w !== null ? w.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return O !== null ? null : m(y, w, "" + S, L);

    if (_typeof(S) == "object" && S !== null) {
      switch (S.$$typeof) {
        case Eu:
          return S.key === O ? C(y, w, S, L) : null;

        case Oi:
          return S.key === O ? x(y, w, S, L) : null;

        case cr:
          return O = S._init, E(y, w, O(S._payload), L);
      }

      if (no(S) || jl(S)) return O !== null ? null : _(y, w, S, L, null);
      Bu(y, S);
    }

    return null;
  }

  function b(y, w, S, L, O) {
    if (typeof L == "string" && L !== "" || typeof L == "number") return y = y.get(S) || null, m(w, y, "" + L, O);

    if (_typeof(L) == "object" && L !== null) {
      switch (L.$$typeof) {
        case Eu:
          return y = y.get(L.key === null ? S : L.key) || null, C(w, y, L, O);

        case Oi:
          return y = y.get(L.key === null ? S : L.key) || null, x(w, y, L, O);

        case cr:
          var I = L._init;
          return b(y, w, S, I(L._payload), O);
      }

      if (no(L) || jl(L)) return y = y.get(S) || null, _(w, y, L, O, null);
      Bu(w, L);
    }

    return null;
  }

  function F(y, w, S, L) {
    for (var O = null, I = null, M = w, H = w = 0, ee = null; M !== null && H < S.length; H++) {
      M.index > H ? (ee = M, M = null) : ee = M.sibling;
      var q = E(y, M, S[H], L);

      if (q === null) {
        M === null && (M = ee);
        break;
      }

      e && M && q.alternate === null && n(y, M), w = c(q, w, H), I === null ? O = q : I.sibling = q, I = q, M = ee;
    }

    if (H === S.length) return i(y, M), ze && Gr(y, H), O;

    if (M === null) {
      for (; H < S.length; H++) {
        M = A(y, S[H], L), M !== null && (w = c(M, w, H), I === null ? O = M : I.sibling = M, I = M);
      }

      return ze && Gr(y, H), O;
    }

    for (M = a(y, M); H < S.length; H++) {
      ee = b(M, y, H, S[H], L), ee !== null && (e && ee.alternate !== null && M.delete(ee.key === null ? H : ee.key), w = c(ee, w, H), I === null ? O = ee : I.sibling = ee, I = ee);
    }

    return e && M.forEach(function (ue) {
      return n(y, ue);
    }), ze && Gr(y, H), O;
  }

  function D(y, w, S, L) {
    var O = jl(S);
    if (typeof O != "function") throw Error(Q(150));
    if (S = O.call(S), S == null) throw Error(Q(151));

    for (var I = O = null, M = w, H = w = 0, ee = null, q = S.next(); M !== null && !q.done; H++, q = S.next()) {
      M.index > H ? (ee = M, M = null) : ee = M.sibling;
      var ue = E(y, M, q.value, L);

      if (ue === null) {
        M === null && (M = ee);
        break;
      }

      e && M && ue.alternate === null && n(y, M), w = c(ue, w, H), I === null ? O = ue : I.sibling = ue, I = ue, M = ee;
    }

    if (q.done) return i(y, M), ze && Gr(y, H), O;

    if (M === null) {
      for (; !q.done; H++, q = S.next()) {
        q = A(y, q.value, L), q !== null && (w = c(q, w, H), I === null ? O = q : I.sibling = q, I = q);
      }

      return ze && Gr(y, H), O;
    }

    for (M = a(y, M); !q.done; H++, q = S.next()) {
      q = b(M, y, H, q.value, L), q !== null && (e && q.alternate !== null && M.delete(q.key === null ? H : q.key), w = c(q, w, H), I === null ? O = q : I.sibling = q, I = q);
    }

    return e && M.forEach(function (he) {
      return n(y, he);
    }), ze && Gr(y, H), O;
  }

  function R(y, w, S, L) {
    if (_typeof(S) == "object" && S !== null && S.type === Ni && S.key === null && (S = S.props.children), _typeof(S) == "object" && S !== null) {
      switch (S.$$typeof) {
        case Eu:
          e: {
            for (var O = S.key, I = w; I !== null;) {
              if (I.key === O) {
                if (O = S.type, O === Ni) {
                  if (I.tag === 7) {
                    i(y, I.sibling), w = s(I, S.props.children), w.return = y, y = w;
                    break e;
                  }
                } else if (I.elementType === O || _typeof(O) == "object" && O !== null && O.$$typeof === cr && R0(O) === I.type) {
                  i(y, I.sibling), w = s(I, S.props), w.ref = Xl(y, I, S), w.return = y, y = w;
                  break e;
                }

                i(y, I);
                break;
              } else n(y, I);

              I = I.sibling;
            }

            S.type === Ni ? (w = qr(S.props.children, y.mode, L, S.key), w.return = y, y = w) : (L = Ju(S.type, S.key, S.props, null, y.mode, L), L.ref = Xl(y, w, S), L.return = y, y = L);
          }

          return p(y);

        case Oi:
          e: {
            for (I = S.key; w !== null;) {
              if (w.key === I) {
                if (w.tag === 4 && w.stateNode.containerInfo === S.containerInfo && w.stateNode.implementation === S.implementation) {
                  i(y, w.sibling), w = s(w, S.children || []), w.return = y, y = w;
                  break e;
                } else {
                  i(y, w);
                  break;
                }
              } else n(y, w);
              w = w.sibling;
            }

            w = Nf(S, y.mode, L), w.return = y, y = w;
          }

          return p(y);

        case cr:
          return I = S._init, R(y, w, I(S._payload), L);
      }

      if (no(S)) return F(y, w, S, L);
      if (jl(S)) return D(y, w, S, L);
      Bu(y, S);
    }

    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, w !== null && w.tag === 6 ? (i(y, w.sibling), w = s(w, S), w.return = y, y = w) : (i(y, w), w = Of(S, y.mode, L), w.return = y, y = w), p(y)) : i(y, w);
  }

  return R;
}

var qi = Xg(!0),
    Zg = Xg(!1),
    zo = {},
    On = Lr(zo),
    Lo = Lr(zo),
    bo = Lr(zo);

function Zr(e) {
  if (e === zo) throw Error(Q(174));
  return e;
}

function sd(e, n) {
  switch (Oe(bo, n), Oe(Lo, e), Oe(On, zo), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : Gf(null, "");
      break;

    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Gf(n, e);
  }

  Me(On), Oe(On, n);
}

function el() {
  Me(On), Me(Lo), Me(bo);
}

function Jg(e) {
  Zr(bo.current);
  var n = Zr(On.current),
      i = Gf(n, e.type);
  n !== i && (Oe(Lo, e), Oe(On, i));
}

function fd(e) {
  Lo.current === e && (Me(On), Me(Lo));
}

var We = Lr(0);

function wa(e) {
  for (var n = e; n !== null;) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if ((n.flags & 128) !== 0) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }

    if (n === e) break;

    for (; n.sibling === null;) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }

    n.sibling.return = n.return, n = n.sibling;
  }

  return null;
}

var Lf = [];

function cd() {
  for (var e = 0; e < Lf.length; e++) {
    Lf[e]._workInProgressVersionPrimary = null;
  }

  Lf.length = 0;
}

var Qu = Jn.ReactCurrentDispatcher,
    bf = Jn.ReactCurrentBatchConfig,
    ni = 0,
    $e = null,
    ut = null,
    dt = null,
    Ca = !1,
    co = !1,
    Ao = 0,
    xC = 0;

function kt() {
  throw Error(Q(321));
}

function dd(e, n) {
  if (n === null) return !1;

  for (var i = 0; i < n.length && i < e.length; i++) {
    if (!Sn(e[i], n[i])) return !1;
  }

  return !0;
}

function hd(e, n, i, a, s, c) {
  if (ni = c, $e = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Qu.current = e === null || e.memoizedState === null ? TC : LC, e = i(a, s), co) {
    c = 0;

    do {
      if (co = !1, Ao = 0, 25 <= c) throw Error(Q(301));
      c += 1, dt = ut = null, n.updateQueue = null, Qu.current = bC, e = i(a, s);
    } while (co);
  }

  if (Qu.current = Sa, n = ut !== null && ut.next !== null, ni = 0, dt = ut = $e = null, Ca = !1, n) throw Error(Q(300));
  return e;
}

function pd() {
  var e = Ao !== 0;
  return Ao = 0, e;
}

function bn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return dt === null ? $e.memoizedState = dt = e : dt = dt.next = e, dt;
}

function fn() {
  if (ut === null) {
    var e = $e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ut.next;

  var n = dt === null ? $e.memoizedState : dt.next;
  if (n !== null) dt = n, ut = e;else {
    if (e === null) throw Error(Q(310));
    ut = e, e = {
      memoizedState: ut.memoizedState,
      baseState: ut.baseState,
      baseQueue: ut.baseQueue,
      queue: ut.queue,
      next: null
    }, dt === null ? $e.memoizedState = dt = e : dt = dt.next = e;
  }
  return dt;
}

function Fo(e, n) {
  return typeof n == "function" ? n(e) : n;
}

function Af(e) {
  var n = fn(),
      i = n.queue;
  if (i === null) throw Error(Q(311));
  i.lastRenderedReducer = e;
  var a = ut,
      s = a.baseQueue,
      c = i.pending;

  if (c !== null) {
    if (s !== null) {
      var p = s.next;
      s.next = c.next, c.next = p;
    }

    a.baseQueue = s = c, i.pending = null;
  }

  if (s !== null) {
    c = s.next, a = a.baseState;
    var m = p = null,
        C = null,
        x = c;

    do {
      var _ = x.lane;
      if ((ni & _) === _) C !== null && (C = C.next = {
        lane: 0,
        action: x.action,
        hasEagerState: x.hasEagerState,
        eagerState: x.eagerState,
        next: null
      }), a = x.hasEagerState ? x.eagerState : e(a, x.action);else {
        var A = {
          lane: _,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null
        };
        C === null ? (m = C = A, p = a) : C = C.next = A, $e.lanes |= _, ri |= _;
      }
      x = x.next;
    } while (x !== null && x !== c);

    C === null ? p = a : C.next = m, Sn(a, n.memoizedState) || (jt = !0), n.memoizedState = a, n.baseState = p, n.baseQueue = C, i.lastRenderedState = a;
  }

  if (e = i.interleaved, e !== null) {
    s = e;

    do {
      c = s.lane, $e.lanes |= c, ri |= c, s = s.next;
    } while (s !== e);
  } else s === null && (i.lanes = 0);

  return [n.memoizedState, i.dispatch];
}

function Ff(e) {
  var n = fn(),
      i = n.queue;
  if (i === null) throw Error(Q(311));
  i.lastRenderedReducer = e;
  var a = i.dispatch,
      s = i.pending,
      c = n.memoizedState;

  if (s !== null) {
    i.pending = null;
    var p = s = s.next;

    do {
      c = e(c, p.action), p = p.next;
    } while (p !== s);

    Sn(c, n.memoizedState) || (jt = !0), n.memoizedState = c, n.baseQueue === null && (n.baseState = c), i.lastRenderedState = c;
  }

  return [c, a];
}

function qg() {}

function ey(e, n) {
  var i = $e,
      a = fn(),
      s = n(),
      c = !Sn(a.memoizedState, s);

  if (c && (a.memoizedState = s, jt = !0), a = a.queue, vd(ry.bind(null, i, a, e), [e]), a.getSnapshot !== n || c || dt !== null && dt.memoizedState.tag & 1) {
    if (i.flags |= 2048, Do(9, ny.bind(null, i, a, s, n), void 0, null), st === null) throw Error(Q(349));
    (ni & 30) !== 0 || ty(i, n, s);
  }

  return s;
}

function ty(e, n, i) {
  e.flags |= 16384, e = {
    getSnapshot: n,
    value: i
  }, n = $e.updateQueue, n === null ? (n = {
    lastEffect: null,
    stores: null
  }, $e.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
}

function ny(e, n, i, a) {
  n.value = i, n.getSnapshot = a, iy(n) && an(e, 1, -1);
}

function ry(e, n, i) {
  return i(function () {
    iy(n) && an(e, 1, -1);
  });
}

function iy(e) {
  var n = e.getSnapshot;
  e = e.value;

  try {
    var i = n();
    return !Sn(e, i);
  } catch (_unused6) {
    return !0;
  }
}

function z0(e) {
  var n = bn();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Fo,
    lastRenderedState: e
  }, n.queue = e, e = e.dispatch = EC.bind(null, $e, e), [n.memoizedState, e];
}

function Do(e, n, i, a) {
  return e = {
    tag: e,
    create: n,
    destroy: i,
    deps: a,
    next: null
  }, n = $e.updateQueue, n === null ? (n = {
    lastEffect: null,
    stores: null
  }, $e.updateQueue = n, n.lastEffect = e.next = e) : (i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (a = i.next, i.next = e, e.next = a, n.lastEffect = e)), e;
}

function ly() {
  return fn().memoizedState;
}

function Yu(e, n, i, a) {
  var s = bn();
  $e.flags |= e, s.memoizedState = Do(1 | n, i, void 0, a === void 0 ? null : a);
}

function Ia(e, n, i, a) {
  var s = fn();
  a = a === void 0 ? null : a;
  var c = void 0;

  if (ut !== null) {
    var p = ut.memoizedState;

    if (c = p.destroy, a !== null && dd(a, p.deps)) {
      s.memoizedState = Do(n, i, c, a);
      return;
    }
  }

  $e.flags |= e, s.memoizedState = Do(1 | n, i, c, a);
}

function H0(e, n) {
  return Yu(8390656, 8, e, n);
}

function vd(e, n) {
  return Ia(2048, 8, e, n);
}

function oy(e, n) {
  return Ia(4, 2, e, n);
}

function uy(e, n) {
  return Ia(4, 4, e, n);
}

function ay(e, n) {
  if (typeof n == "function") return e = e(), n(e), function () {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function () {
    n.current = null;
  };
}

function sy(e, n, i) {
  return i = i != null ? i.concat([e]) : null, Ia(4, 4, ay.bind(null, n, e), i);
}

function gd() {}

function fy(e, n) {
  var i = fn();
  n = n === void 0 ? null : n;
  var a = i.memoizedState;
  return a !== null && n !== null && dd(n, a[1]) ? a[0] : (i.memoizedState = [e, n], e);
}

function cy(e, n) {
  var i = fn();
  n = n === void 0 ? null : n;
  var a = i.memoizedState;
  return a !== null && n !== null && dd(n, a[1]) ? a[0] : (e = e(), i.memoizedState = [e, n], e);
}

function dy(e, n, i) {
  return (ni & 21) === 0 ? (e.baseState && (e.baseState = !1, jt = !0), e.memoizedState = i) : (Sn(i, n) || (i = mg(), $e.lanes |= i, ri |= i, e.baseState = !0), n);
}

function kC(e, n) {
  var i = Ae;
  Ae = i !== 0 && 4 > i ? i : 4, e(!0);
  var a = bf.transition;
  bf.transition = {};

  try {
    e(!1), n();
  } finally {
    Ae = i, bf.transition = a;
  }
}

function hy() {
  return fn().memoizedState;
}

function _C(e, n, i) {
  var a = xr(e);
  i = {
    lane: a,
    action: i,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, py(e) ? vy(n, i) : (gy(e, n, i), i = It(), e = an(e, a, i), e !== null && yy(e, n, a));
}

function EC(e, n, i) {
  var a = xr(e),
      s = {
    lane: a,
    action: i,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (py(e)) vy(n, s);else {
    gy(e, n, s);
    var c = e.alternate;
    if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = n.lastRenderedReducer, c !== null)) try {
      var p = n.lastRenderedState,
          m = c(p, i);
      if (s.hasEagerState = !0, s.eagerState = m, Sn(m, p)) return;
    } catch (_unused7) {} finally {}
    i = It(), e = an(e, a, i), e !== null && yy(e, n, a);
  }
}

function py(e) {
  var n = e.alternate;
  return e === $e || n !== null && n === $e;
}

function vy(e, n) {
  co = Ca = !0;
  var i = e.pending;
  i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
}

function gy(e, n, i) {
  Py(e) ? (e = n.interleaved, e === null ? (i.next = i, wn === null ? wn = [n] : wn.push(n)) : (i.next = e.next, e.next = i), n.interleaved = i) : (e = n.pending, e === null ? i.next = i : (i.next = e.next, e.next = i), n.pending = i);
}

function yy(e, n, i) {
  if ((i & 4194240) !== 0) {
    var a = n.lanes;
    a &= e.pendingLanes, i |= a, n.lanes = i, Qc(e, i);
  }
}

var Sa = {
  readContext: sn,
  useCallback: kt,
  useContext: kt,
  useEffect: kt,
  useImperativeHandle: kt,
  useInsertionEffect: kt,
  useLayoutEffect: kt,
  useMemo: kt,
  useReducer: kt,
  useRef: kt,
  useState: kt,
  useDebugValue: kt,
  useDeferredValue: kt,
  useTransition: kt,
  useMutableSource: kt,
  useSyncExternalStore: kt,
  useId: kt,
  unstable_isNewReconciler: !1
},
    TC = {
  readContext: sn,
  useCallback: function useCallback(e, n) {
    return bn().memoizedState = [e, n === void 0 ? null : n], e;
  },
  useContext: sn,
  useEffect: H0,
  useImperativeHandle: function useImperativeHandle(e, n, i) {
    return i = i != null ? i.concat([e]) : null, Yu(4194308, 4, ay.bind(null, n, e), i);
  },
  useLayoutEffect: function useLayoutEffect(e, n) {
    return Yu(4194308, 4, e, n);
  },
  useInsertionEffect: function useInsertionEffect(e, n) {
    return Yu(4, 2, e, n);
  },
  useMemo: function useMemo(e, n) {
    var i = bn();
    return n = n === void 0 ? null : n, e = e(), i.memoizedState = [e, n], e;
  },
  useReducer: function useReducer(e, n, i) {
    var a = bn();
    return n = i !== void 0 ? i(n) : n, a.memoizedState = a.baseState = n, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e,
      lastRenderedState: n
    }, a.queue = e, e = e.dispatch = _C.bind(null, $e, e), [a.memoizedState, e];
  },
  useRef: function useRef(e) {
    var n = bn();
    return e = {
      current: e
    }, n.memoizedState = e;
  },
  useState: z0,
  useDebugValue: gd,
  useDeferredValue: function useDeferredValue(e) {
    return bn().memoizedState = e;
  },
  useTransition: function useTransition() {
    var e = z0(!1),
        n = e[0];
    return e = kC.bind(null, e[1]), bn().memoizedState = e, [n, e];
  },
  useMutableSource: function useMutableSource() {},
  useSyncExternalStore: function useSyncExternalStore(e, n, i) {
    var a = $e,
        s = bn();

    if (ze) {
      if (i === void 0) throw Error(Q(407));
      i = i();
    } else {
      if (i = n(), st === null) throw Error(Q(349));
      (ni & 30) !== 0 || ty(a, n, i);
    }

    s.memoizedState = i;
    var c = {
      value: i,
      getSnapshot: n
    };
    return s.queue = c, H0(ry.bind(null, a, c, e), [e]), a.flags |= 2048, Do(9, ny.bind(null, a, c, i, n), void 0, null), i;
  },
  useId: function useId() {
    var e = bn(),
        n = st.identifierPrefix;

    if (ze) {
      var i = Gn,
          a = Kn;
      i = (a & ~(1 << 32 - Cn(a) - 1)).toString(32) + i, n = ":" + n + "R" + i, i = Ao++, 0 < i && (n += "H" + i.toString(32)), n += ":";
    } else i = xC++, n = ":" + n + "r" + i.toString(32) + ":";

    return e.memoizedState = n;
  },
  unstable_isNewReconciler: !1
},
    LC = {
  readContext: sn,
  useCallback: fy,
  useContext: sn,
  useEffect: vd,
  useImperativeHandle: sy,
  useInsertionEffect: oy,
  useLayoutEffect: uy,
  useMemo: cy,
  useReducer: Af,
  useRef: ly,
  useState: function useState() {
    return Af(Fo);
  },
  useDebugValue: gd,
  useDeferredValue: function useDeferredValue(e) {
    var n = fn();
    return dy(n, ut.memoizedState, e);
  },
  useTransition: function useTransition() {
    var e = Af(Fo)[0],
        n = fn().memoizedState;
    return [e, n];
  },
  useMutableSource: qg,
  useSyncExternalStore: ey,
  useId: hy,
  unstable_isNewReconciler: !1
},
    bC = {
  readContext: sn,
  useCallback: fy,
  useContext: sn,
  useEffect: vd,
  useImperativeHandle: sy,
  useInsertionEffect: oy,
  useLayoutEffect: uy,
  useMemo: cy,
  useReducer: Ff,
  useRef: ly,
  useState: function useState() {
    return Ff(Fo);
  },
  useDebugValue: gd,
  useDeferredValue: function useDeferredValue(e) {
    var n = fn();
    return ut === null ? n.memoizedState = e : dy(n, ut.memoizedState, e);
  },
  useTransition: function useTransition() {
    var e = Ff(Fo)[0],
        n = fn().memoizedState;
    return [e, n];
  },
  useMutableSource: qg,
  useSyncExternalStore: ey,
  useId: hy,
  unstable_isNewReconciler: !1
};

function yd(e, n) {
  try {
    var i = "",
        a = n;

    do {
      i += nw(a), a = a.return;
    } while (a);

    var s = i;
  } catch (c) {
    s = "\nError generating stack: " + c.message + "\n" + c.stack;
  }

  return {
    value: e,
    source: n,
    stack: s
  };
}

function vc(e, n) {
  try {
    console.error(n.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}

var AC = typeof WeakMap == "function" ? WeakMap : Map;

function my(e, n, i) {
  i = Vn(-1, i), i.tag = 3, i.payload = {
    element: null
  };
  var a = n.value;
  return i.callback = function () {
    ka || (ka = !0, _c = a), vc(e, n);
  }, i;
}

function wy(e, n, i) {
  i = Vn(-1, i), i.tag = 3;
  var a = e.type.getDerivedStateFromError;

  if (typeof a == "function") {
    var s = n.value;
    i.payload = function () {
      return a(s);
    }, i.callback = function () {
      vc(e, n);
    };
  }

  var c = e.stateNode;
  return c !== null && typeof c.componentDidCatch == "function" && (i.callback = function () {
    vc(e, n), typeof a != "function" && (Sr === null ? Sr = new Set([this]) : Sr.add(this));
    var p = n.stack;
    this.componentDidCatch(n.value, {
      componentStack: p !== null ? p : ""
    });
  }), i;
}

function W0(e, n, i) {
  var a = e.pingCache;

  if (a === null) {
    a = e.pingCache = new AC();
    var s = new Set();
    a.set(n, s);
  } else s = a.get(n), s === void 0 && (s = new Set(), a.set(n, s));

  s.has(i) || (s.add(i), e = $C.bind(null, e, n, i), n.then(e, e));
}

function $0(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);

  return null;
}

function U0(e, n, i, a, s) {
  return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (n = Vn(-1, 1), n.tag = 2, Cr(i, n))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = s, e);
}

var Cy, gc, Sy, xy;

Cy = function Cy(e, n) {
  for (var i = n.child; i !== null;) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);else if (i.tag !== 4 && i.child !== null) {
      i.child.return = i, i = i.child;
      continue;
    }
    if (i === n) break;

    for (; i.sibling === null;) {
      if (i.return === null || i.return === n) return;
      i = i.return;
    }

    i.sibling.return = i.return, i = i.sibling;
  }
};

gc = function gc() {};

Sy = function Sy(e, n, i, a) {
  var s = e.memoizedProps;

  if (s !== a) {
    e = n.stateNode, Zr(On.current);
    var c = null;

    switch (i) {
      case "input":
        s = $f(e, s), a = $f(e, a), c = [];
        break;

      case "select":
        s = Ue({}, s, {
          value: void 0
        }), a = Ue({}, a, {
          value: void 0
        }), c = [];
        break;

      case "textarea":
        s = Kf(e, s), a = Kf(e, a), c = [];
        break;

      default:
        typeof s.onClick != "function" && typeof a.onClick == "function" && (e.onclick = ca);
    }

    Vf(i, a);
    var p;
    i = null;

    for (x in s) {
      if (!a.hasOwnProperty(x) && s.hasOwnProperty(x) && s[x] != null) if (x === "style") {
        var m = s[x];

        for (p in m) {
          m.hasOwnProperty(p) && (i || (i = {}), i[p] = "");
        }
      } else x !== "dangerouslySetInnerHTML" && x !== "children" && x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && x !== "autoFocus" && (go.hasOwnProperty(x) ? c || (c = []) : (c = c || []).push(x, null));
    }

    for (x in a) {
      var C = a[x];
      if (m = s != null ? s[x] : void 0, a.hasOwnProperty(x) && C !== m && (C != null || m != null)) if (x === "style") {
        if (m) {
          for (p in m) {
            !m.hasOwnProperty(p) || C && C.hasOwnProperty(p) || (i || (i = {}), i[p] = "");
          }

          for (p in C) {
            C.hasOwnProperty(p) && m[p] !== C[p] && (i || (i = {}), i[p] = C[p]);
          }
        } else i || (c || (c = []), c.push(x, i)), i = C;
      } else x === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, m = m ? m.__html : void 0, C != null && m !== C && (c = c || []).push(x, C)) : x === "children" ? typeof C != "string" && typeof C != "number" || (c = c || []).push(x, "" + C) : x !== "suppressContentEditableWarning" && x !== "suppressHydrationWarning" && (go.hasOwnProperty(x) ? (C != null && x === "onScroll" && Pe("scroll", e), c || m === C || (c = [])) : (c = c || []).push(x, C));
    }

    i && (c = c || []).push("style", i);
    var x = c;
    (n.updateQueue = x) && (n.flags |= 4);
  }
};

xy = function xy(e, n, i, a) {
  i !== a && (n.flags |= 4);
};

function Zl(e, n) {
  if (!ze) switch (e.tailMode) {
    case "hidden":
      n = e.tail;

      for (var i = null; n !== null;) {
        n.alternate !== null && (i = n), n = n.sibling;
      }

      i === null ? e.tail = null : i.sibling = null;
      break;

    case "collapsed":
      i = e.tail;

      for (var a = null; i !== null;) {
        i.alternate !== null && (a = i), i = i.sibling;
      }

      a === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
  }
}

function _t(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      a = 0;
  if (n) for (var s = e.child; s !== null;) {
    i |= s.lanes | s.childLanes, a |= s.subtreeFlags & 14680064, a |= s.flags & 14680064, s.return = e, s = s.sibling;
  } else for (s = e.child; s !== null;) {
    i |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = e, s = s.sibling;
  }
  return e.subtreeFlags |= a, e.childLanes = i, n;
}

function FC(e, n, i) {
  var a = n.pendingProps;

  switch (ud(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _t(n), null;

    case 1:
      return Gt(n.type) && da(), _t(n), null;

    case 3:
      return a = n.stateNode, el(), Me(Kt), Me(Tt), cd(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Yl(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, mn !== null && (Lc(mn), mn = null))), gc(e, n), _t(n), null;

    case 5:
      fd(n);
      var s = Zr(bo.current);
      if (i = n.type, e !== null && n.stateNode != null) Sy(e, n, i, a, s), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);else {
        if (!a) {
          if (n.stateNode === null) throw Error(Q(166));
          return _t(n), null;
        }

        if (e = Zr(On.current), Yl(n)) {
          a = n.stateNode, i = n.type;
          var c = n.memoizedProps;

          switch (a[An] = n, a[To] = c, e = (n.mode & 1) !== 0, i) {
            case "dialog":
              Pe("cancel", a), Pe("close", a);
              break;

            case "iframe":
            case "object":
            case "embed":
              Pe("load", a);
              break;

            case "video":
            case "audio":
              for (s = 0; s < io.length; s++) {
                Pe(io[s], a);
              }

              break;

            case "source":
              Pe("error", a);
              break;

            case "img":
            case "image":
            case "link":
              Pe("error", a), Pe("load", a);
              break;

            case "details":
              Pe("toggle", a);
              break;

            case "input":
              r0(a, c), Pe("invalid", a);
              break;

            case "select":
              a._wrapperState = {
                wasMultiple: !!c.multiple
              }, Pe("invalid", a);
              break;

            case "textarea":
              l0(a, c), Pe("invalid", a);
          }

          Vf(i, c), s = null;

          for (var p in c) {
            if (c.hasOwnProperty(p)) {
              var m = c[p];
              p === "children" ? typeof m == "string" ? a.textContent !== m && (c.suppressHydrationWarning !== !0 && Pu(a.textContent, m, e), s = ["children", m]) : typeof m == "number" && a.textContent !== "" + m && (c.suppressHydrationWarning !== !0 && Pu(a.textContent, m, e), s = ["children", "" + m]) : go.hasOwnProperty(p) && m != null && p === "onScroll" && Pe("scroll", a);
            }
          }

          switch (i) {
            case "input":
              Tu(a), i0(a, c, !0);
              break;

            case "textarea":
              Tu(a), o0(a);
              break;

            case "select":
            case "option":
              break;

            default:
              typeof c.onClick == "function" && (a.onclick = ca);
          }

          a = s, n.updateQueue = a, a !== null && (n.flags |= 4);
        } else {
          p = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rg(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = p.createElement(i, {
            is: a.is
          }) : (e = p.createElement(i), i === "select" && (p = e, a.multiple ? p.multiple = !0 : a.size && (p.size = a.size))) : e = p.createElementNS(e, i), e[An] = n, e[To] = a, Cy(e, n, !1, !1), n.stateNode = e;

          e: {
            switch (p = Qf(i, a), i) {
              case "dialog":
                Pe("cancel", e), Pe("close", e), s = a;
                break;

              case "iframe":
              case "object":
              case "embed":
                Pe("load", e), s = a;
                break;

              case "video":
              case "audio":
                for (s = 0; s < io.length; s++) {
                  Pe(io[s], e);
                }

                s = a;
                break;

              case "source":
                Pe("error", e), s = a;
                break;

              case "img":
              case "image":
              case "link":
                Pe("error", e), Pe("load", e), s = a;
                break;

              case "details":
                Pe("toggle", e), s = a;
                break;

              case "input":
                r0(e, a), s = $f(e, a), Pe("invalid", e);
                break;

              case "option":
                s = a;
                break;

              case "select":
                e._wrapperState = {
                  wasMultiple: !!a.multiple
                }, s = Ue({}, a, {
                  value: void 0
                }), Pe("invalid", e);
                break;

              case "textarea":
                l0(e, a), s = Kf(e, a), Pe("invalid", e);
                break;

              default:
                s = a;
            }

            Vf(i, s), m = s;

            for (c in m) {
              if (m.hasOwnProperty(c)) {
                var C = m[c];
                c === "style" ? og(e, C) : c === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ig(e, C)) : c === "children" ? typeof C == "string" ? (i !== "textarea" || C !== "") && yo(e, C) : typeof C == "number" && yo(e, "" + C) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (go.hasOwnProperty(c) ? C != null && c === "onScroll" && Pe("scroll", e) : C != null && $c(e, c, C, p));
              }
            }

            switch (i) {
              case "input":
                Tu(e), i0(e, a, !1);
                break;

              case "textarea":
                Tu(e), o0(e);
                break;

              case "option":
                a.value != null && e.setAttribute("value", "" + kr(a.value));
                break;

              case "select":
                e.multiple = !!a.multiple, c = a.value, c != null ? ji(e, !!a.multiple, c, !1) : a.defaultValue != null && ji(e, !!a.multiple, a.defaultValue, !0);
                break;

              default:
                typeof s.onClick == "function" && (e.onclick = ca);
            }

            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;

              case "img":
                a = !0;
                break e;

              default:
                a = !1;
            }
          }

          a && (n.flags |= 4);
        }

        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return _t(n), null;

    case 6:
      if (e && n.stateNode != null) xy(e, n, e.memoizedProps, a);else {
        if (typeof a != "string" && n.stateNode === null) throw Error(Q(166));

        if (i = Zr(bo.current), Zr(On.current), Yl(n)) {
          if (a = n.stateNode, i = n.memoizedProps, a[An] = n, (c = a.nodeValue !== i) && (e = Jt, e !== null)) switch (e.tag) {
            case 3:
              Pu(a.nodeValue, i, (e.mode & 1) !== 0);
              break;

            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Pu(a.nodeValue, i, (e.mode & 1) !== 0);
          }
          c && (n.flags |= 4);
        } else a = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(a), a[An] = n, n.stateNode = a;
      }
      return _t(n), null;

    case 13:
      if (Me(We), a = n.memoizedState, ze && Ut !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) {
        for (a = Ut; a;) {
          a = jn(a.nextSibling);
        }

        return Ji(), n.flags |= 98560, n;
      }

      if (a !== null && a.dehydrated !== null) {
        if (a = Yl(n), e === null) {
          if (!a) throw Error(Q(318));
          if (a = n.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(Q(317));
          a[An] = n;
        } else Ji(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;

        return _t(n), null;
      }

      return mn !== null && (Lc(mn), mn = null), (n.flags & 128) !== 0 ? (n.lanes = i, n) : (a = a !== null, i = !1, e === null ? Yl(n) : i = e.memoizedState !== null, a !== i && a && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (We.current & 1) !== 0 ? at === 0 && (at = 3) : kd())), n.updateQueue !== null && (n.flags |= 4), _t(n), null);

    case 4:
      return el(), gc(e, n), e === null && _o(n.stateNode.containerInfo), _t(n), null;

    case 10:
      return id(n.type._context), _t(n), null;

    case 17:
      return Gt(n.type) && da(), _t(n), null;

    case 19:
      if (Me(We), c = n.memoizedState, c === null) return _t(n), null;
      if (a = (n.flags & 128) !== 0, p = c.rendering, p === null) {
        if (a) Zl(c, !1);else {
          if (at !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null;) {
            if (p = wa(e), p !== null) {
              for (n.flags |= 128, Zl(c, !1), a = p.updateQueue, a !== null && (n.updateQueue = a, n.flags |= 4), n.subtreeFlags = 0, a = i, i = n.child; i !== null;) {
                c = i, e = a, c.flags &= 14680066, p = c.alternate, p === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = p.childLanes, c.lanes = p.lanes, c.child = p.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = p.memoizedProps, c.memoizedState = p.memoizedState, c.updateQueue = p.updateQueue, c.type = p.type, e = p.dependencies, c.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), i = i.sibling;
              }

              return Oe(We, We.current & 1 | 2), n.child;
            }

            e = e.sibling;
          }
          c.tail !== null && Xe() > tl && (n.flags |= 128, a = !0, Zl(c, !1), n.lanes = 4194304);
        }
      } else {
        if (!a) if (e = wa(p), e !== null) {
          if (n.flags |= 128, a = !0, i = e.updateQueue, i !== null && (n.updateQueue = i, n.flags |= 4), Zl(c, !0), c.tail === null && c.tailMode === "hidden" && !p.alternate && !ze) return _t(n), null;
        } else 2 * Xe() - c.renderingStartTime > tl && i !== 1073741824 && (n.flags |= 128, a = !0, Zl(c, !1), n.lanes = 4194304);
        c.isBackwards ? (p.sibling = n.child, n.child = p) : (i = c.last, i !== null ? i.sibling = p : n.child = p, c.last = p);
      }
      return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Xe(), n.sibling = null, i = We.current, Oe(We, a ? i & 1 | 2 : i & 1), n) : (_t(n), null);

    case 22:
    case 23:
      return xd(), a = n.memoizedState !== null, e !== null && e.memoizedState !== null !== a && (n.flags |= 8192), a && (n.mode & 1) !== 0 ? (Xt & 1073741824) !== 0 && (_t(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : _t(n), null;

    case 24:
      return null;

    case 25:
      return null;
  }

  throw Error(Q(156, n.tag));
}

var DC = Jn.ReactCurrentOwner,
    jt = !1;

function Bt(e, n, i, a) {
  n.child = e === null ? Zg(n, null, i, a) : qi(n, e.child, i, a);
}

function j0(e, n, i, a, s) {
  i = i.render;
  var c = n.ref;
  return Qi(n, s), a = hd(e, n, i, a, c, s), i = pd(), e !== null && !jt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~s, Zn(e, n, s)) : (ze && i && od(n), n.flags |= 1, Bt(e, n, a, s), n.child);
}

function K0(e, n, i, a, s) {
  if (e === null) {
    var c = i.type;
    return typeof c == "function" && !_d(c) && c.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (n.tag = 15, n.type = c, ky(e, n, c, a, s)) : (e = Ju(i.type, null, a, n, n.mode, s), e.ref = n.ref, e.return = n, n.child = e);
  }

  if (c = e.child, (e.lanes & s) === 0) {
    var p = c.memoizedProps;
    if (i = i.compare, i = i !== null ? i : ko, i(p, a) && e.ref === n.ref) return Zn(e, n, s);
  }

  return n.flags |= 1, e = Er(c, a), e.ref = n.ref, e.return = n, n.child = e;
}

function ky(e, n, i, a, s) {
  if (e !== null) {
    var c = e.memoizedProps;
    if (ko(c, a) && e.ref === n.ref) if (jt = !1, n.pendingProps = a = c, (e.lanes & s) !== 0) (e.flags & 131072) !== 0 && (jt = !0);else return n.lanes = e.lanes, Zn(e, n, s);
  }

  return yc(e, n, i, a, s);
}

function _y(e, n, i) {
  var a = n.pendingProps,
      s = a.children,
      c = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden") {
    if ((n.mode & 1) === 0) n.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, Oe(Ui, Xt), Xt |= i;else if ((i & 1073741824) !== 0) n.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, a = c !== null ? c.baseLanes : i, Oe(Ui, Xt), Xt |= a;else return e = c !== null ? c.baseLanes | i : i, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
      baseLanes: e,
      cachePool: null,
      transitions: null
    }, n.updateQueue = null, Oe(Ui, Xt), Xt |= e, null;
  } else c !== null ? (a = c.baseLanes | i, n.memoizedState = null) : a = i, Oe(Ui, Xt), Xt |= a;
  return Bt(e, n, s, i), n.child;
}

function Ey(e, n) {
  var i = n.ref;
  (e === null && i !== null || e !== null && e.ref !== i) && (n.flags |= 512, n.flags |= 2097152);
}

function yc(e, n, i, a, s) {
  var c = Gt(i) ? ei : Tt.current;
  return c = Zi(n, c), Qi(n, s), i = hd(e, n, i, a, c, s), a = pd(), e !== null && !jt ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~s, Zn(e, n, s)) : (ze && a && od(n), n.flags |= 1, Bt(e, n, i, s), n.child);
}

function G0(e, n, i, a, s) {
  if (Gt(i)) {
    var c = !0;
    ha(n);
  } else c = !1;

  if (Qi(n, s), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), Vg(n, i, a), dc(n, i, a, s), a = !0;else if (e === null) {
    var p = n.stateNode,
        m = n.memoizedProps;
    p.props = m;
    var C = p.context,
        x = i.contextType;
    _typeof(x) == "object" && x !== null ? x = sn(x) : (x = Gt(i) ? ei : Tt.current, x = Zi(n, x));
    var _ = i.getDerivedStateFromProps,
        A = typeof _ == "function" || typeof p.getSnapshotBeforeUpdate == "function";
    A || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (m !== a || C !== x) && B0(n, p, a, x), dr = !1;
    var E = n.memoizedState;
    p.state = E, ga(n, a, p, s), C = n.memoizedState, m !== a || E !== C || Kt.current || dr ? (typeof _ == "function" && (cc(n, i, _, a), C = n.memoizedState), (m = dr || P0(n, i, m, a, E, C, x)) ? (A || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = a, n.memoizedState = C), p.props = a, p.state = C, p.context = x, a = m) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), a = !1);
  } else {
    p = n.stateNode, Kg(e, n), m = n.memoizedProps, x = n.type === n.elementType ? m : gn(n.type, m), p.props = x, A = n.pendingProps, E = p.context, C = i.contextType, _typeof(C) == "object" && C !== null ? C = sn(C) : (C = Gt(i) ? ei : Tt.current, C = Zi(n, C));
    var b = i.getDerivedStateFromProps;
    (_ = typeof b == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (m !== A || E !== C) && B0(n, p, a, C), dr = !1, E = n.memoizedState, p.state = E, ga(n, a, p, s);
    var F = n.memoizedState;
    m !== A || E !== F || Kt.current || dr ? (typeof b == "function" && (cc(n, i, b, a), F = n.memoizedState), (x = dr || P0(n, i, x, a, E, F, C) || !1) ? (_ || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(a, F, C), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(a, F, C)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || m === e.memoizedProps && E === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && E === e.memoizedState || (n.flags |= 1024), n.memoizedProps = a, n.memoizedState = F), p.props = a, p.state = F, p.context = C, a = x) : (typeof p.componentDidUpdate != "function" || m === e.memoizedProps && E === e.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && E === e.memoizedState || (n.flags |= 1024), a = !1);
  }
  return mc(e, n, i, a, c, s);
}

function mc(e, n, i, a, s, c) {
  Ey(e, n);
  var p = (n.flags & 128) !== 0;
  if (!a && !p) return s && D0(n, i, !1), Zn(e, n, c);
  a = n.stateNode, DC.current = n;
  var m = p && typeof i.getDerivedStateFromError != "function" ? null : a.render();
  return n.flags |= 1, e !== null && p ? (n.child = qi(n, e.child, null, c), n.child = qi(n, null, m, c)) : Bt(e, n, m, c), n.memoizedState = a.state, s && D0(n, i, !0), n.child;
}

function Ty(e) {
  var n = e.stateNode;
  n.pendingContext ? F0(e, n.pendingContext, n.pendingContext !== n.context) : n.context && F0(e, n.context, !1), sd(e, n.containerInfo);
}

function V0(e, n, i, a, s) {
  return Ji(), ad(s), n.flags |= 256, Bt(e, n, i, a), n.child;
}

var Mu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Iu(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  };
}

function Q0(e, n) {
  return {
    baseLanes: e.baseLanes | n,
    cachePool: null,
    transitions: e.transitions
  };
}

function Ly(e, n, i) {
  var a = n.pendingProps,
      s = We.current,
      c = !1,
      p = (n.flags & 128) !== 0,
      m;
  if ((m = p) || (m = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), m ? (c = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Oe(We, s & 1), e === null) return pc(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (s = a.children, e = a.fallback, c ? (a = n.mode, c = n.child, s = {
    mode: "hidden",
    children: s
  }, (a & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = s) : c = Ta(s, a, 0, null), e = qr(e, a, i, null), c.return = n, e.return = n, c.sibling = e, n.child = c, n.child.memoizedState = Iu(i), n.memoizedState = Mu, e) : wc(n, s));

  if (s = e.memoizedState, s !== null) {
    if (m = s.dehydrated, m !== null) {
      if (p) return n.flags & 256 ? (n.flags &= -257, Ru(e, n, i, Error(Q(422)))) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (c = a.fallback, s = n.mode, a = Ta({
        mode: "visible",
        children: a.children
      }, s, 0, null), c = qr(c, s, i, null), c.flags |= 2, a.return = n, c.return = n, a.sibling = c, n.child = a, (n.mode & 1) !== 0 && qi(n, e.child, null, i), n.child.memoizedState = Iu(i), n.memoizedState = Mu, c);
      if ((n.mode & 1) === 0) n = Ru(e, n, i, null);else if (m.data === "$!") n = Ru(e, n, i, Error(Q(419)));else if (a = (i & e.childLanes) !== 0, jt || a) {
        if (a = st, a !== null) {
          switch (i & -i) {
            case 4:
              c = 2;
              break;

            case 16:
              c = 8;
              break;

            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              c = 32;
              break;

            case 536870912:
              c = 268435456;
              break;

            default:
              c = 0;
          }

          a = (c & (a.suspendedLanes | i)) !== 0 ? 0 : c, a !== 0 && a !== s.retryLane && (s.retryLane = a, an(e, a, -1));
        }

        kd(), n = Ru(e, n, i, Error(Q(421)));
      } else m.data === "$?" ? (n.flags |= 128, n.child = e.child, n = UC.bind(null, e), m._reactRetry = n, n = null) : (i = s.treeContext, Ut = jn(m.nextSibling), Jt = n, ze = !0, mn = null, i !== null && (rn[ln++] = Kn, rn[ln++] = Gn, rn[ln++] = ti, Kn = i.id, Gn = i.overflow, ti = n), n = wc(n, n.pendingProps.children), n.flags |= 4096);
      return n;
    }

    return c ? (a = X0(e, n, a.children, a.fallback, i), c = n.child, s = e.child.memoizedState, c.memoizedState = s === null ? Iu(i) : Q0(s, i), c.childLanes = e.childLanes & ~i, n.memoizedState = Mu, a) : (i = Y0(e, n, a.children, i), n.memoizedState = null, i);
  }

  return c ? (a = X0(e, n, a.children, a.fallback, i), c = n.child, s = e.child.memoizedState, c.memoizedState = s === null ? Iu(i) : Q0(s, i), c.childLanes = e.childLanes & ~i, n.memoizedState = Mu, a) : (i = Y0(e, n, a.children, i), n.memoizedState = null, i);
}

function wc(e, n) {
  return n = Ta({
    mode: "visible",
    children: n
  }, e.mode, 0, null), n.return = e, e.child = n;
}

function Y0(e, n, i, a) {
  var s = e.child;
  return e = s.sibling, i = Er(s, {
    mode: "visible",
    children: i
  }), (n.mode & 1) === 0 && (i.lanes = a), i.return = n, i.sibling = null, e !== null && (a = n.deletions, a === null ? (n.deletions = [e], n.flags |= 16) : a.push(e)), n.child = i;
}

function X0(e, n, i, a, s) {
  var c = n.mode;
  e = e.child;
  var p = e.sibling,
      m = {
    mode: "hidden",
    children: i
  };
  return (c & 1) === 0 && n.child !== e ? (i = n.child, i.childLanes = 0, i.pendingProps = m, n.deletions = null) : (i = Er(e, m), i.subtreeFlags = e.subtreeFlags & 14680064), p !== null ? a = Er(p, a) : (a = qr(a, c, s, null), a.flags |= 2), a.return = n, i.return = n, i.sibling = a, n.child = i, a;
}

function Ru(e, n, i, a) {
  return a !== null && ad(a), qi(n, e.child, null, i), e = wc(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}

function Z0(e, n, i) {
  e.lanes |= n;
  var a = e.alternate;
  a !== null && (a.lanes |= n), fc(e.return, n, i);
}

function Df(e, n, i, a, s) {
  var c = e.memoizedState;
  c === null ? e.memoizedState = {
    isBackwards: n,
    rendering: null,
    renderingStartTime: 0,
    last: a,
    tail: i,
    tailMode: s
  } : (c.isBackwards = n, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = i, c.tailMode = s);
}

function by(e, n, i) {
  var a = n.pendingProps,
      s = a.revealOrder,
      c = a.tail;
  if (Bt(e, n, a.children, i), a = We.current, (a & 2) !== 0) a = a & 1 | 2, n.flags |= 128;else {
    if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Z0(e, i, n);else if (e.tag === 19) Z0(e, i, n);else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;

      for (; e.sibling === null;) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }

      e.sibling.return = e.return, e = e.sibling;
    }
    a &= 1;
  }
  if (Oe(We, a), (n.mode & 1) === 0) n.memoizedState = null;else switch (s) {
    case "forwards":
      for (i = n.child, s = null; i !== null;) {
        e = i.alternate, e !== null && wa(e) === null && (s = i), i = i.sibling;
      }

      i = s, i === null ? (s = n.child, n.child = null) : (s = i.sibling, i.sibling = null), Df(n, !1, s, i, c);
      break;

    case "backwards":
      for (i = null, s = n.child, n.child = null; s !== null;) {
        if (e = s.alternate, e !== null && wa(e) === null) {
          n.child = s;
          break;
        }

        e = s.sibling, s.sibling = i, i = s, s = e;
      }

      Df(n, !0, i, null, c);
      break;

    case "together":
      Df(n, !1, null, null, void 0);
      break;

    default:
      n.memoizedState = null;
  }
  return n.child;
}

function Zn(e, n, i) {
  if (e !== null && (n.dependencies = e.dependencies), ri |= n.lanes, (i & n.childLanes) === 0) return null;
  if (e !== null && n.child !== e.child) throw Error(Q(153));

  if (n.child !== null) {
    for (e = n.child, i = Er(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null;) {
      e = e.sibling, i = i.sibling = Er(e, e.pendingProps), i.return = n;
    }

    i.sibling = null;
  }

  return n.child;
}

function OC(e, n, i) {
  switch (n.tag) {
    case 3:
      Ty(n), Ji();
      break;

    case 5:
      Jg(n);
      break;

    case 1:
      Gt(n.type) && ha(n);
      break;

    case 4:
      sd(n, n.stateNode.containerInfo);
      break;

    case 10:
      var a = n.type._context,
          s = n.memoizedProps.value;
      Oe(pa, a._currentValue), a._currentValue = s;
      break;

    case 13:
      if (a = n.memoizedState, a !== null) return a.dehydrated !== null ? (Oe(We, We.current & 1), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Ly(e, n, i) : (Oe(We, We.current & 1), e = Zn(e, n, i), e !== null ? e.sibling : null);
      Oe(We, We.current & 1);
      break;

    case 19:
      if (a = (i & n.childLanes) !== 0, (e.flags & 128) !== 0) {
        if (a) return by(e, n, i);
        n.flags |= 128;
      }

      if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Oe(We, We.current), a) break;
      return null;

    case 22:
    case 23:
      return n.lanes = 0, _y(e, n, i);
  }

  return Zn(e, n, i);
}

function NC(e, n) {
  switch (ud(n), n.tag) {
    case 1:
      return Gt(n.type) && da(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;

    case 3:
      return el(), Me(Kt), Me(Tt), cd(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;

    case 5:
      return fd(n), null;

    case 13:
      if (Me(We), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(Q(340));
        Ji();
      }

      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;

    case 19:
      return Me(We), null;

    case 4:
      return el(), null;

    case 10:
      return id(n.type._context), null;

    case 22:
    case 23:
      return xd(), null;

    case 24:
      return null;

    default:
      return null;
  }
}

var zu = !1,
    Et = !1,
    PC = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;

function $i(e, n) {
  var i = e.ref;
  if (i !== null) if (typeof i == "function") try {
    i(null);
  } catch (a) {
    Ke(e, n, a);
  } else i.current = null;
}

function Cc(e, n, i) {
  try {
    i();
  } catch (a) {
    Ke(e, n, a);
  }
}

var J0 = !1;

function BC(e, n) {
  if (ic = aa, e = Pg(), td(e)) {
    if ("selectionStart" in e) var i = {
      start: e.selectionStart,
      end: e.selectionEnd
    };else e: {
      i = (i = e.ownerDocument) && i.defaultView || window;
      var a = i.getSelection && i.getSelection();

      if (a && a.rangeCount !== 0) {
        i = a.anchorNode;
        var s = a.anchorOffset,
            c = a.focusNode;
        a = a.focusOffset;

        try {
          i.nodeType, c.nodeType;
        } catch (_unused8) {
          i = null;
          break e;
        }

        var p = 0,
            m = -1,
            C = -1,
            x = 0,
            _ = 0,
            A = e,
            E = null;

        t: for (;;) {
          for (var b; A !== i || s !== 0 && A.nodeType !== 3 || (m = p + s), A !== c || a !== 0 && A.nodeType !== 3 || (C = p + a), A.nodeType === 3 && (p += A.nodeValue.length), (b = A.firstChild) !== null;) {
            E = A, A = b;
          }

          for (;;) {
            if (A === e) break t;
            if (E === i && ++x === s && (m = p), E === c && ++_ === a && (C = p), (b = A.nextSibling) !== null) break;
            A = E, E = A.parentNode;
          }

          A = b;
        }

        i = m === -1 || C === -1 ? null : {
          start: m,
          end: C
        };
      } else i = null;
    }
    i = i || {
      start: 0,
      end: 0
    };
  } else i = null;

  for (lc = {
    focusedElem: e,
    selectionRange: i
  }, aa = !1, re = n; re !== null;) {
    if (n = re, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, re = e;else for (; re !== null;) {
      n = re;

      try {
        var F = n.alternate;
        if ((n.flags & 1024) !== 0) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;

          case 1:
            if (F !== null) {
              var D = F.memoizedProps,
                  R = F.memoizedState,
                  y = n.stateNode,
                  w = y.getSnapshotBeforeUpdate(n.elementType === n.type ? D : gn(n.type, D), R);
              y.__reactInternalSnapshotBeforeUpdate = w;
            }

            break;

          case 3:
            var S = n.stateNode.containerInfo;
            if (S.nodeType === 1) S.textContent = "";else if (S.nodeType === 9) {
              var L = S.body;
              L != null && (L.textContent = "");
            }
            break;

          case 5:
          case 6:
          case 4:
          case 17:
            break;

          default:
            throw Error(Q(163));
        }
      } catch (O) {
        Ke(n, n.return, O);
      }

      if (e = n.sibling, e !== null) {
        e.return = n.return, re = e;
        break;
      }

      re = n.return;
    }
  }

  return F = J0, J0 = !1, F;
}

function ho(e, n, i) {
  var a = n.updateQueue;

  if (a = a !== null ? a.lastEffect : null, a !== null) {
    var s = a = a.next;

    do {
      if ((s.tag & e) === e) {
        var c = s.destroy;
        s.destroy = void 0, c !== void 0 && Cc(n, i, c);
      }

      s = s.next;
    } while (s !== a);
  }
}

function Ra(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;

    do {
      if ((i.tag & e) === e) {
        var a = i.create;
        i.destroy = a();
      }

      i = i.next;
    } while (i !== n);
  }
}

function Sc(e) {
  var n = e.ref;

  if (n !== null) {
    var i = e.stateNode;

    switch (e.tag) {
      case 5:
        e = i;
        break;

      default:
        e = i;
    }

    typeof n == "function" ? n(e) : n.current = e;
  }
}

function Ay(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Ay(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[An], delete n[To], delete n[ac], delete n[mC], delete n[wC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}

function Fy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}

function q0(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Fy(e.return)) return null;
      e = e.return;
    }

    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }

    if (!(e.flags & 2)) return e.stateNode;
  }
}

function xc(e, n, i) {
  var a = e.tag;
  if (a === 5 || a === 6) e = e.stateNode, n ? i.nodeType === 8 ? i.parentNode.insertBefore(e, n) : i.insertBefore(e, n) : (i.nodeType === 8 ? (n = i.parentNode, n.insertBefore(e, i)) : (n = i, n.appendChild(e)), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = ca));else if (a !== 4 && (e = e.child, e !== null)) for (xc(e, n, i), e = e.sibling; e !== null;) {
    xc(e, n, i), e = e.sibling;
  }
}

function kc(e, n, i) {
  var a = e.tag;
  if (a === 5 || a === 6) e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);else if (a !== 4 && (e = e.child, e !== null)) for (kc(e, n, i), e = e.sibling; e !== null;) {
    kc(e, n, i), e = e.sibling;
  }
}

var yt = null,
    yn = !1;

function sr(e, n, i) {
  for (i = i.child; i !== null;) {
    Dy(e, n, i), i = i.sibling;
  }
}

function Dy(e, n, i) {
  if (Dn && typeof Dn.onCommitFiberUnmount == "function") try {
    Dn.onCommitFiberUnmount(Fa, i);
  } catch (_unused9) {}

  switch (i.tag) {
    case 5:
      Et || $i(i, n);

    case 6:
      var a = yt,
          s = yn;
      yt = null, sr(e, n, i), yt = a, yn = s, yt !== null && (yn ? (e = yt, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : yt.removeChild(i.stateNode));
      break;

    case 18:
      yt !== null && (yn ? (e = yt, i = i.stateNode, e.nodeType === 8 ? Ef(e.parentNode, i) : e.nodeType === 1 && Ef(e, i), So(e)) : Ef(yt, i.stateNode));
      break;

    case 4:
      a = yt, s = yn, yt = i.stateNode.containerInfo, yn = !0, sr(e, n, i), yt = a, yn = s;
      break;

    case 0:
    case 11:
    case 14:
    case 15:
      if (!Et && (a = i.updateQueue, a !== null && (a = a.lastEffect, a !== null))) {
        s = a = a.next;

        do {
          var c = s,
              p = c.destroy;
          c = c.tag, p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && Cc(i, n, p), s = s.next;
        } while (s !== a);
      }

      sr(e, n, i);
      break;

    case 1:
      if (!Et && ($i(i, n), a = i.stateNode, typeof a.componentWillUnmount == "function")) try {
        a.props = i.memoizedProps, a.state = i.memoizedState, a.componentWillUnmount();
      } catch (m) {
        Ke(i, n, m);
      }
      sr(e, n, i);
      break;

    case 21:
      sr(e, n, i);
      break;

    case 22:
      i.mode & 1 ? (Et = (a = Et) || i.memoizedState !== null, sr(e, n, i), Et = a) : sr(e, n, i);
      break;

    default:
      sr(e, n, i);
  }
}

function ev(e) {
  var n = e.updateQueue;

  if (n !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new PC()), n.forEach(function (a) {
      var s = jC.bind(null, e, a);
      i.has(a) || (i.add(a), a.then(s, s));
    });
  }
}

function vn(e, n) {
  var i = n.deletions;
  if (i !== null) for (var a = 0; a < i.length; a++) {
    var s = i[a];

    try {
      var c = e,
          p = n,
          m = p;

      e: for (; m !== null;) {
        switch (m.tag) {
          case 5:
            yt = m.stateNode, yn = !1;
            break e;

          case 3:
            yt = m.stateNode.containerInfo, yn = !0;
            break e;

          case 4:
            yt = m.stateNode.containerInfo, yn = !0;
            break e;
        }

        m = m.return;
      }

      if (yt === null) throw Error(Q(160));
      Dy(c, p, s), yt = null, yn = !1;
      var C = s.alternate;
      C !== null && (C.return = null), s.return = null;
    } catch (x) {
      Ke(s, n, x);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null;) {
    Oy(n, e), n = n.sibling;
  }
}

function Oy(e, n) {
  var i = e.alternate,
      a = e.flags;

  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vn(n, e), Ln(e), a & 4) {
        try {
          ho(3, e, e.return), Ra(3, e);
        } catch (F) {
          Ke(e, e.return, F);
        }

        try {
          ho(5, e, e.return);
        } catch (F) {
          Ke(e, e.return, F);
        }
      }

      break;

    case 1:
      vn(n, e), Ln(e), a & 512 && i !== null && $i(i, i.return);
      break;

    case 5:
      if (vn(n, e), Ln(e), a & 512 && i !== null && $i(i, i.return), e.flags & 32) {
        var s = e.stateNode;

        try {
          yo(s, "");
        } catch (F) {
          Ke(e, e.return, F);
        }
      }

      if (a & 4 && (s = e.stateNode, s != null)) {
        var c = e.memoizedProps,
            p = i !== null ? i.memoizedProps : c,
            m = e.type,
            C = e.updateQueue;
        if (e.updateQueue = null, C !== null) try {
          m === "input" && c.type === "radio" && c.name != null && tg(s, c), Qf(m, p);
          var x = Qf(m, c);

          for (p = 0; p < C.length; p += 2) {
            var _ = C[p],
                A = C[p + 1];
            _ === "style" ? og(s, A) : _ === "dangerouslySetInnerHTML" ? ig(s, A) : _ === "children" ? yo(s, A) : $c(s, _, A, x);
          }

          switch (m) {
            case "input":
              Uf(s, c);
              break;

            case "textarea":
              ng(s, c);
              break;

            case "select":
              var E = s._wrapperState.wasMultiple;
              s._wrapperState.wasMultiple = !!c.multiple;
              var b = c.value;
              b != null ? ji(s, !!c.multiple, b, !1) : E !== !!c.multiple && (c.defaultValue != null ? ji(s, !!c.multiple, c.defaultValue, !0) : ji(s, !!c.multiple, c.multiple ? [] : "", !1));
          }

          s[To] = c;
        } catch (F) {
          Ke(e, e.return, F);
        }
      }

      break;

    case 6:
      if (vn(n, e), Ln(e), a & 4) {
        if (e.stateNode === null) throw Error(Q(162));
        x = e.stateNode, _ = e.memoizedProps;

        try {
          x.nodeValue = _;
        } catch (F) {
          Ke(e, e.return, F);
        }
      }

      break;

    case 3:
      if (vn(n, e), Ln(e), a & 4 && i !== null && i.memoizedState.isDehydrated) try {
        So(n.containerInfo);
      } catch (F) {
        Ke(e, e.return, F);
      }
      break;

    case 4:
      vn(n, e), Ln(e);
      break;

    case 13:
      vn(n, e), Ln(e), x = e.child, x.flags & 8192 && x.memoizedState !== null && (x.alternate === null || x.alternate.memoizedState === null) && (Cd = Xe()), a & 4 && ev(e);
      break;

    case 22:
      if (x = i !== null && i.memoizedState !== null, e.mode & 1 ? (Et = (_ = Et) || x, vn(n, e), Et = _) : vn(n, e), Ln(e), a & 8192) {
        _ = e.memoizedState !== null;

        e: for (A = null, E = e;;) {
          if (E.tag === 5) {
            if (A === null) {
              A = E;

              try {
                s = E.stateNode, _ ? (c = s.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (m = E.stateNode, C = E.memoizedProps.style, p = C != null && C.hasOwnProperty("display") ? C.display : null, m.style.display = lg("display", p));
              } catch (F) {
                Ke(e, e.return, F);
              }
            }
          } else if (E.tag === 6) {
            if (A === null) try {
              E.stateNode.nodeValue = _ ? "" : E.memoizedProps;
            } catch (F) {
              Ke(e, e.return, F);
            }
          } else if ((E.tag !== 22 && E.tag !== 23 || E.memoizedState === null || E === e) && E.child !== null) {
            E.child.return = E, E = E.child;
            continue;
          }

          if (E === e) break e;

          for (; E.sibling === null;) {
            if (E.return === null || E.return === e) break e;
            A === E && (A = null), E = E.return;
          }

          A === E && (A = null), E.sibling.return = E.return, E = E.sibling;
        }

        if (_ && !x && (e.mode & 1) !== 0) for (re = e, e = e.child; e !== null;) {
          for (x = re = e; re !== null;) {
            switch (_ = re, A = _.child, _.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ho(4, _, _.return);
                break;

              case 1:
                if ($i(_, _.return), c = _.stateNode, typeof c.componentWillUnmount == "function") {
                  E = _, b = _.return;

                  try {
                    s = E, c.props = s.memoizedProps, c.state = s.memoizedState, c.componentWillUnmount();
                  } catch (F) {
                    Ke(E, b, F);
                  }
                }

                break;

              case 5:
                $i(_, _.return);
                break;

              case 22:
                if (_.memoizedState !== null) {
                  nv(x);
                  continue;
                }

            }

            A !== null ? (A.return = _, re = A) : nv(x);
          }

          e = e.sibling;
        }
      }

      break;

    case 19:
      vn(n, e), Ln(e), a & 4 && ev(e);
      break;

    case 21:
      break;

    default:
      vn(n, e), Ln(e);
  }
}

function Ln(e) {
  var n = e.flags;

  if (n & 2) {
    try {
      e: {
        for (var i = e.return; i !== null;) {
          if (Fy(i)) {
            var a = i;
            break e;
          }

          i = i.return;
        }

        throw Error(Q(160));
      }

      switch (a.tag) {
        case 5:
          var s = a.stateNode;
          a.flags & 32 && (yo(s, ""), a.flags &= -33);
          var c = q0(e);
          kc(e, c, s);
          break;

        case 3:
        case 4:
          var p = a.stateNode.containerInfo,
              m = q0(e);
          xc(e, m, p);
          break;

        default:
          throw Error(Q(161));
      }
    } catch (C) {
      Ke(e, e.return, C);
    }

    e.flags &= -3;
  }

  n & 4096 && (e.flags &= -4097);
}

function MC(e, n, i) {
  re = e, Ny(e);
}

function Ny(e, n, i) {
  for (var a = (e.mode & 1) !== 0; re !== null;) {
    var s = re,
        c = s.child;

    if (s.tag === 22 && a) {
      var p = s.memoizedState !== null || zu;

      if (!p) {
        var m = s.alternate,
            C = m !== null && m.memoizedState !== null || Et;
        m = zu;
        var x = Et;
        if (zu = p, (Et = C) && !x) for (re = s; re !== null;) {
          p = re, C = p.child, p.tag === 22 && p.memoizedState !== null ? rv(s) : C !== null ? (C.return = p, re = C) : rv(s);
        }

        for (; c !== null;) {
          re = c, Ny(c), c = c.sibling;
        }

        re = s, zu = m, Et = x;
      }

      tv(e);
    } else (s.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = s, re = c) : tv(e);
  }
}

function tv(e) {
  for (; re !== null;) {
    var n = re;

    if ((n.flags & 8772) !== 0) {
      var i = n.alternate;

      try {
        if ((n.flags & 8772) !== 0) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Et || Ra(5, n);
            break;

          case 1:
            var a = n.stateNode;
            if (n.flags & 4 && !Et) if (i === null) a.componentDidMount();else {
              var s = n.elementType === n.type ? i.memoizedProps : gn(n.type, i.memoizedProps);
              a.componentDidUpdate(s, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
            }
            var c = n.updateQueue;
            c !== null && N0(n, c, a);
            break;

          case 3:
            var p = n.updateQueue;

            if (p !== null) {
              if (i = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  i = n.child.stateNode;
                  break;

                case 1:
                  i = n.child.stateNode;
              }
              N0(n, p, i);
            }

            break;

          case 5:
            var m = n.stateNode;

            if (i === null && n.flags & 4) {
              i = m;
              var C = n.memoizedProps;

              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  C.autoFocus && i.focus();
                  break;

                case "img":
                  C.src && (i.src = C.src);
              }
            }

            break;

          case 6:
            break;

          case 4:
            break;

          case 12:
            break;

          case 13:
            if (n.memoizedState === null) {
              var x = n.alternate;

              if (x !== null) {
                var _ = x.memoizedState;

                if (_ !== null) {
                  var A = _.dehydrated;
                  A !== null && So(A);
                }
              }
            }

            break;

          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
            break;

          default:
            throw Error(Q(163));
        }
        Et || n.flags & 512 && Sc(n);
      } catch (E) {
        Ke(n, n.return, E);
      }
    }

    if (n === e) {
      re = null;
      break;
    }

    if (i = n.sibling, i !== null) {
      i.return = n.return, re = i;
      break;
    }

    re = n.return;
  }
}

function nv(e) {
  for (; re !== null;) {
    var n = re;

    if (n === e) {
      re = null;
      break;
    }

    var i = n.sibling;

    if (i !== null) {
      i.return = n.return, re = i;
      break;
    }

    re = n.return;
  }
}

function rv(e) {
  for (; re !== null;) {
    var n = re;

    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var i = n.return;

          try {
            Ra(4, n);
          } catch (C) {
            Ke(n, i, C);
          }

          break;

        case 1:
          var a = n.stateNode;

          if (typeof a.componentDidMount == "function") {
            var s = n.return;

            try {
              a.componentDidMount();
            } catch (C) {
              Ke(n, s, C);
            }
          }

          var c = n.return;

          try {
            Sc(n);
          } catch (C) {
            Ke(n, c, C);
          }

          break;

        case 5:
          var p = n.return;

          try {
            Sc(n);
          } catch (C) {
            Ke(n, p, C);
          }

      }
    } catch (C) {
      Ke(n, n.return, C);
    }

    if (n === e) {
      re = null;
      break;
    }

    var m = n.sibling;

    if (m !== null) {
      m.return = n.return, re = m;
      break;
    }

    re = n.return;
  }
}

var IC = Math.ceil,
    xa = Jn.ReactCurrentDispatcher,
    md = Jn.ReactCurrentOwner,
    un = Jn.ReactCurrentBatchConfig,
    _e = 0,
    st = null,
    qe = null,
    mt = 0,
    Xt = 0,
    Ui = Lr(0),
    at = 0,
    Oo = null,
    ri = 0,
    za = 0,
    wd = 0,
    po = null,
    $t = null,
    Cd = 0,
    tl = 1 / 0,
    $n = null,
    ka = !1,
    _c = null,
    Sr = null,
    Hu = !1,
    gr = null,
    _a = 0,
    vo = 0,
    Ec = null,
    Xu = -1,
    Zu = 0;

function It() {
  return (_e & 6) !== 0 ? Xe() : Xu !== -1 ? Xu : Xu = Xe();
}

function xr(e) {
  return (e.mode & 1) === 0 ? 1 : (_e & 2) !== 0 && mt !== 0 ? mt & -mt : SC.transition !== null ? (Zu === 0 && (Zu = mg()), Zu) : (e = Ae, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Eg(e.type)), e);
}

function an(e, n, i) {
  if (50 < vo) throw vo = 0, Ec = null, Error(Q(185));
  var a = Ha(e, n);
  return a === null ? null : (Mo(a, n, i), ((_e & 2) === 0 || a !== st) && (a === st && ((_e & 2) === 0 && (za |= n), at === 4 && pr(a, mt)), Vt(a, i), n === 1 && _e === 0 && (e.mode & 1) === 0 && (tl = Xe() + 500, Ba && br())), a);
}

function Ha(e, n) {
  e.lanes |= n;
  var i = e.alternate;

  for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null;) {
    e.childLanes |= n, i = e.alternate, i !== null && (i.childLanes |= n), i = e, e = e.return;
  }

  return i.tag === 3 ? i.stateNode : null;
}

function Py(e) {
  return (st !== null || wn !== null) && (e.mode & 1) !== 0 && (_e & 2) === 0;
}

function Vt(e, n) {
  var i = e.callbackNode;
  Sw(e, n);
  var a = ua(e, e === st ? mt : 0);
  if (a === 0) i !== null && s0(i), e.callbackNode = null, e.callbackPriority = 0;else if (n = a & -a, e.callbackPriority !== n) {
    if (i != null && s0(i), n === 1) e.tag === 0 ? CC(iv.bind(null, e)) : jg(iv.bind(null, e)), gC(function () {
      _e === 0 && br();
    }), i = null;else {
      switch (wg(a)) {
        case 1:
          i = Vc;
          break;

        case 4:
          i = gg;
          break;

        case 16:
          i = oa;
          break;

        case 536870912:
          i = yg;
          break;

        default:
          i = oa;
      }

      i = $y(i, By.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = i;
  }
}

function By(e, n) {
  if (Xu = -1, Zu = 0, (_e & 6) !== 0) throw Error(Q(327));
  var i = e.callbackNode;
  if (Yi() && e.callbackNode !== i) return null;
  var a = ua(e, e === st ? mt : 0);
  if (a === 0) return null;
  if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || n) n = Ea(e, a);else {
    n = a;
    var s = _e;
    _e |= 2;
    var c = Iy();
    (st !== e || mt !== n) && ($n = null, tl = Xe() + 500, Jr(e, n));

    do {
      try {
        HC();
        break;
      } catch (m) {
        My(e, m);
      }
    } while (1);

    rd(), xa.current = c, _e = s, qe !== null ? n = 0 : (st = null, mt = 0, n = at);
  }

  if (n !== 0) {
    if (n === 2 && (s = qf(e), s !== 0 && (a = s, n = Tc(e, s))), n === 1) throw i = Oo, Jr(e, 0), pr(e, a), Vt(e, Xe()), i;
    if (n === 6) pr(e, a);else {
      if (s = e.current.alternate, (a & 30) === 0 && !RC(s) && (n = Ea(e, a), n === 2 && (c = qf(e), c !== 0 && (a = c, n = Tc(e, c))), n === 1)) throw i = Oo, Jr(e, 0), pr(e, a), Vt(e, Xe()), i;

      switch (e.finishedWork = s, e.finishedLanes = a, n) {
        case 0:
        case 1:
          throw Error(Q(345));

        case 2:
          Vr(e, $t, $n);
          break;

        case 3:
          if (pr(e, a), (a & 130023424) === a && (n = Cd + 500 - Xe(), 10 < n)) {
            if (ua(e, 0) !== 0) break;

            if (s = e.suspendedLanes, (s & a) !== a) {
              It(), e.pingedLanes |= e.suspendedLanes & s;
              break;
            }

            e.timeoutHandle = uc(Vr.bind(null, e, $t, $n), n);
            break;
          }

          Vr(e, $t, $n);
          break;

        case 4:
          if (pr(e, a), (a & 4194240) === a) break;

          for (n = e.eventTimes, s = -1; 0 < a;) {
            var p = 31 - Cn(a);
            c = 1 << p, p = n[p], p > s && (s = p), a &= ~c;
          }

          if (a = s, a = Xe() - a, a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * IC(a / 1960)) - a, 10 < a) {
            e.timeoutHandle = uc(Vr.bind(null, e, $t, $n), a);
            break;
          }

          Vr(e, $t, $n);
          break;

        case 5:
          Vr(e, $t, $n);
          break;

        default:
          throw Error(Q(329));
      }
    }
  }

  return Vt(e, Xe()), e.callbackNode === i ? By.bind(null, e) : null;
}

function Tc(e, n) {
  var i = po;
  return e.current.memoizedState.isDehydrated && (Jr(e, n).flags |= 256), e = Ea(e, n), e !== 2 && (n = $t, $t = i, n !== null && Lc(n)), e;
}

function Lc(e) {
  $t === null ? $t = e : $t.push.apply($t, e);
}

function RC(e) {
  for (var n = e;;) {
    if (n.flags & 16384) {
      var i = n.updateQueue;
      if (i !== null && (i = i.stores, i !== null)) for (var a = 0; a < i.length; a++) {
        var s = i[a],
            c = s.getSnapshot;
        s = s.value;

        try {
          if (!Sn(c(), s)) return !1;
        } catch (_unused10) {
          return !1;
        }
      }
    }

    if (i = n.child, n.subtreeFlags & 16384 && i !== null) i.return = n, n = i;else {
      if (n === e) break;

      for (; n.sibling === null;) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }

      n.sibling.return = n.return, n = n.sibling;
    }
  }

  return !0;
}

function pr(e, n) {
  for (n &= ~wd, n &= ~za, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
    var i = 31 - Cn(n),
        a = 1 << i;
    e[i] = -1, n &= ~a;
  }
}

function iv(e) {
  if ((_e & 6) !== 0) throw Error(Q(327));
  Yi();
  var n = ua(e, 0);
  if ((n & 1) === 0) return Vt(e, Xe()), null;
  var i = Ea(e, n);

  if (e.tag !== 0 && i === 2) {
    var a = qf(e);
    a !== 0 && (n = a, i = Tc(e, a));
  }

  if (i === 1) throw i = Oo, Jr(e, 0), pr(e, n), Vt(e, Xe()), i;
  if (i === 6) throw Error(Q(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Vr(e, $t, $n), Vt(e, Xe()), null;
}

function Sd(e, n) {
  var i = _e;
  _e |= 1;

  try {
    return e(n);
  } finally {
    _e = i, _e === 0 && (tl = Xe() + 500, Ba && br());
  }
}

function ii(e) {
  gr !== null && gr.tag === 0 && (_e & 6) === 0 && Yi();
  var n = _e;
  _e |= 1;
  var i = un.transition,
      a = Ae;

  try {
    if (un.transition = null, Ae = 1, e) return e();
  } finally {
    Ae = a, un.transition = i, _e = n, (_e & 6) === 0 && br();
  }
}

function xd() {
  Xt = Ui.current, Me(Ui);
}

function Jr(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var i = e.timeoutHandle;
  if (i !== -1 && (e.timeoutHandle = -1, vC(i)), qe !== null) for (i = qe.return; i !== null;) {
    var a = i;

    switch (ud(a), a.tag) {
      case 1:
        a = a.type.childContextTypes, a != null && da();
        break;

      case 3:
        el(), Me(Kt), Me(Tt), cd();
        break;

      case 5:
        fd(a);
        break;

      case 4:
        el();
        break;

      case 13:
        Me(We);
        break;

      case 19:
        Me(We);
        break;

      case 10:
        id(a.type._context);
        break;

      case 22:
      case 23:
        xd();
    }

    i = i.return;
  }

  if (st = e, qe = e = Er(e.current, null), mt = Xt = n, at = 0, Oo = null, wd = za = ri = 0, $t = po = null, wn !== null) {
    for (n = 0; n < wn.length; n++) {
      if (i = wn[n], a = i.interleaved, a !== null) {
        i.interleaved = null;
        var s = a.next,
            c = i.pending;

        if (c !== null) {
          var p = c.next;
          c.next = s, a.next = p;
        }

        i.pending = a;
      }
    }

    wn = null;
  }

  return e;
}

function My(e, n) {
  do {
    var i = qe;

    try {
      if (rd(), Qu.current = Sa, Ca) {
        for (var a = $e.memoizedState; a !== null;) {
          var s = a.queue;
          s !== null && (s.pending = null), a = a.next;
        }

        Ca = !1;
      }

      if (ni = 0, dt = ut = $e = null, co = !1, Ao = 0, md.current = null, i === null || i.return === null) {
        at = 1, Oo = n, qe = null;
        break;
      }

      e: {
        var c = e,
            p = i.return,
            m = i,
            C = n;

        if (n = mt, m.flags |= 32768, C !== null && _typeof(C) == "object" && typeof C.then == "function") {
          var x = C,
              _ = m,
              A = _.tag;

          if ((_.mode & 1) === 0 && (A === 0 || A === 11 || A === 15)) {
            var E = _.alternate;
            E ? (_.updateQueue = E.updateQueue, _.memoizedState = E.memoizedState, _.lanes = E.lanes) : (_.updateQueue = null, _.memoizedState = null);
          }

          var b = $0(p);

          if (b !== null) {
            b.flags &= -257, U0(b, p, m, c, n), b.mode & 1 && W0(c, x, n), n = b, C = x;
            var F = n.updateQueue;

            if (F === null) {
              var D = new Set();
              D.add(C), n.updateQueue = D;
            } else F.add(C);

            break e;
          } else {
            if ((n & 1) === 0) {
              W0(c, x, n), kd();
              break e;
            }

            C = Error(Q(426));
          }
        } else if (ze && m.mode & 1) {
          var R = $0(p);

          if (R !== null) {
            (R.flags & 65536) === 0 && (R.flags |= 256), U0(R, p, m, c, n), ad(C);
            break e;
          }
        }

        c = C, at !== 4 && (at = 2), po === null ? po = [c] : po.push(c), C = yd(C, m), m = p;

        do {
          switch (m.tag) {
            case 3:
              m.flags |= 65536, n &= -n, m.lanes |= n;
              var y = my(m, C, n);
              O0(m, y);
              break e;

            case 1:
              c = C;
              var w = m.type,
                  S = m.stateNode;

              if ((m.flags & 128) === 0 && (typeof w.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Sr === null || !Sr.has(S)))) {
                m.flags |= 65536, n &= -n, m.lanes |= n;
                var L = wy(m, c, n);
                O0(m, L);
                break e;
              }

          }

          m = m.return;
        } while (m !== null);
      }

      zy(i);
    } catch (O) {
      n = O, qe === i && i !== null && (qe = i = i.return);
      continue;
    }

    break;
  } while (1);
}

function Iy() {
  var e = xa.current;
  return xa.current = Sa, e === null ? Sa : e;
}

function kd() {
  (at === 0 || at === 3 || at === 2) && (at = 4), st === null || (ri & 268435455) === 0 && (za & 268435455) === 0 || pr(st, mt);
}

function Ea(e, n) {
  var i = _e;
  _e |= 2;
  var a = Iy();
  (st !== e || mt !== n) && ($n = null, Jr(e, n));

  do {
    try {
      zC();
      break;
    } catch (s) {
      My(e, s);
    }
  } while (1);

  if (rd(), _e = i, xa.current = a, qe !== null) throw Error(Q(261));
  return st = null, mt = 0, at;
}

function zC() {
  for (; qe !== null;) {
    Ry(qe);
  }
}

function HC() {
  for (; qe !== null && !dw();) {
    Ry(qe);
  }
}

function Ry(e) {
  var n = Wy(e.alternate, e, Xt);
  e.memoizedProps = e.pendingProps, n === null ? zy(e) : qe = n, md.current = null;
}

function zy(e) {
  var n = e;

  do {
    var i = n.alternate;

    if (e = n.return, (n.flags & 32768) === 0) {
      if (i = FC(i, n, Xt), i !== null) {
        qe = i;
        return;
      }
    } else {
      if (i = NC(i, n), i !== null) {
        i.flags &= 32767, qe = i;
        return;
      }

      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;else {
        at = 6, qe = null;
        return;
      }
    }

    if (n = n.sibling, n !== null) {
      qe = n;
      return;
    }

    qe = n = e;
  } while (n !== null);

  at === 0 && (at = 5);
}

function Vr(e, n, i) {
  var a = Ae,
      s = un.transition;

  try {
    un.transition = null, Ae = 1, WC(e, n, i, a);
  } finally {
    un.transition = s, Ae = a;
  }

  return null;
}

function WC(e, n, i, a) {
  do {
    Yi();
  } while (gr !== null);

  if ((_e & 6) !== 0) throw Error(Q(327));
  i = e.finishedWork;
  var s = e.finishedLanes;
  if (i === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(Q(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var c = i.lanes | i.childLanes;

  if (xw(e, c), e === st && (qe = st = null, mt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Hu || (Hu = !0, $y(oa, function () {
    return Yi(), null;
  })), c = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || c) {
    c = un.transition, un.transition = null;
    var p = Ae;
    Ae = 1;
    var m = _e;
    _e |= 4, md.current = null, BC(e, i), Oy(i, e), aC(lc), aa = !!ic, lc = ic = null, e.current = i, MC(i), hw(), _e = m, Ae = p, un.transition = c;
  } else e.current = i;

  if (Hu && (Hu = !1, gr = e, _a = s), c = e.pendingLanes, c === 0 && (Sr = null), gw(i.stateNode), Vt(e, Xe()), n !== null) for (a = e.onRecoverableError, i = 0; i < n.length; i++) {
    a(n[i]);
  }
  if (ka) throw ka = !1, e = _c, _c = null, e;
  return (_a & 1) !== 0 && e.tag !== 0 && Yi(), c = e.pendingLanes, (c & 1) !== 0 ? e === Ec ? vo++ : (vo = 0, Ec = e) : vo = 0, br(), null;
}

function Yi() {
  if (gr !== null) {
    var e = wg(_a),
        n = un.transition,
        i = Ae;

    try {
      if (un.transition = null, Ae = 16 > e ? 16 : e, gr === null) var a = !1;else {
        if (e = gr, gr = null, _a = 0, (_e & 6) !== 0) throw Error(Q(331));
        var s = _e;

        for (_e |= 4, re = e.current; re !== null;) {
          var c = re,
              p = c.child;

          if ((re.flags & 16) !== 0) {
            var m = c.deletions;

            if (m !== null) {
              for (var C = 0; C < m.length; C++) {
                var x = m[C];

                for (re = x; re !== null;) {
                  var _ = re;

                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ho(8, _, c);
                  }

                  var A = _.child;
                  if (A !== null) A.return = _, re = A;else for (; re !== null;) {
                    _ = re;
                    var E = _.sibling,
                        b = _.return;

                    if (Ay(_), _ === x) {
                      re = null;
                      break;
                    }

                    if (E !== null) {
                      E.return = b, re = E;
                      break;
                    }

                    re = b;
                  }
                }
              }

              var F = c.alternate;

              if (F !== null) {
                var D = F.child;

                if (D !== null) {
                  F.child = null;

                  do {
                    var R = D.sibling;
                    D.sibling = null, D = R;
                  } while (D !== null);
                }
              }

              re = c;
            }
          }

          if ((c.subtreeFlags & 2064) !== 0 && p !== null) p.return = c, re = p;else e: for (; re !== null;) {
            if (c = re, (c.flags & 2048) !== 0) switch (c.tag) {
              case 0:
              case 11:
              case 15:
                ho(9, c, c.return);
            }
            var y = c.sibling;

            if (y !== null) {
              y.return = c.return, re = y;
              break e;
            }

            re = c.return;
          }
        }

        var w = e.current;

        for (re = w; re !== null;) {
          p = re;
          var S = p.child;
          if ((p.subtreeFlags & 2064) !== 0 && S !== null) S.return = p, re = S;else e: for (p = w; re !== null;) {
            if (m = re, (m.flags & 2048) !== 0) try {
              switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Ra(9, m);
              }
            } catch (O) {
              Ke(m, m.return, O);
            }

            if (m === p) {
              re = null;
              break e;
            }

            var L = m.sibling;

            if (L !== null) {
              L.return = m.return, re = L;
              break e;
            }

            re = m.return;
          }
        }

        if (_e = s, br(), Dn && typeof Dn.onPostCommitFiberRoot == "function") try {
          Dn.onPostCommitFiberRoot(Fa, e);
        } catch (_unused11) {}
        a = !0;
      }
      return a;
    } finally {
      Ae = i, un.transition = n;
    }
  }

  return !1;
}

function lv(e, n, i) {
  n = yd(i, n), n = my(e, n, 1), Cr(e, n), n = It(), e = Ha(e, 1), e !== null && (Mo(e, 1, n), Vt(e, n));
}

function Ke(e, n, i) {
  if (e.tag === 3) lv(e, e, i);else for (; n !== null;) {
    if (n.tag === 3) {
      lv(n, e, i);
      break;
    } else if (n.tag === 1) {
      var a = n.stateNode;

      if (typeof n.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Sr === null || !Sr.has(a))) {
        e = yd(i, e), e = wy(n, e, 1), Cr(n, e), e = It(), n = Ha(n, 1), n !== null && (Mo(n, 1, e), Vt(n, e));
        break;
      }
    }

    n = n.return;
  }
}

function $C(e, n, i) {
  var a = e.pingCache;
  a !== null && a.delete(n), n = It(), e.pingedLanes |= e.suspendedLanes & i, st === e && (mt & i) === i && (at === 4 || at === 3 && (mt & 130023424) === mt && 500 > Xe() - Cd ? Jr(e, 0) : wd |= i), Vt(e, n);
}

function Hy(e, n) {
  n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Au, Au <<= 1, (Au & 130023424) === 0 && (Au = 4194304)));
  var i = It();
  e = Ha(e, n), e !== null && (Mo(e, n, i), Vt(e, i));
}

function UC(e) {
  var n = e.memoizedState,
      i = 0;
  n !== null && (i = n.retryLane), Hy(e, i);
}

function jC(e, n) {
  var i = 0;

  switch (e.tag) {
    case 13:
      var a = e.stateNode,
          s = e.memoizedState;
      s !== null && (i = s.retryLane);
      break;

    case 19:
      a = e.stateNode;
      break;

    default:
      throw Error(Q(314));
  }

  a !== null && a.delete(n), Hy(e, i);
}

var Wy;

Wy = function Wy(e, n, i) {
  if (e !== null) {
    if (e.memoizedProps !== n.pendingProps || Kt.current) jt = !0;else {
      if ((e.lanes & i) === 0 && (n.flags & 128) === 0) return jt = !1, OC(e, n, i);
      jt = (e.flags & 131072) !== 0;
    }
  } else jt = !1, ze && (n.flags & 1048576) !== 0 && Qg(n, ma, n.index);

  switch (n.lanes = 0, n.tag) {
    case 2:
      var a = n.type;
      e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps;
      var s = Zi(n, Tt.current);
      Qi(n, i), s = hd(null, n, a, e, s, i);
      var c = pd();
      return n.flags |= 1, _typeof(s) == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Gt(a) ? (c = !0, ha(n)) : c = !1, n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ld(n), s.updater = Ma, n.stateNode = s, s._reactInternals = n, dc(n, a, e, i), n = mc(null, n, a, !0, c, i)) : (n.tag = 0, ze && c && od(n), Bt(null, n, s, i), n = n.child), n;

    case 16:
      a = n.elementType;

      e: {
        switch (e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, s = a._init, a = s(a._payload), n.type = a, s = n.tag = GC(a), e = gn(a, e), s) {
          case 0:
            n = yc(null, n, a, e, i);
            break e;

          case 1:
            n = G0(null, n, a, e, i);
            break e;

          case 11:
            n = j0(null, n, a, e, i);
            break e;

          case 14:
            n = K0(null, n, a, gn(a.type, e), i);
            break e;
        }

        throw Error(Q(306, a, ""));
      }

      return n;

    case 0:
      return a = n.type, s = n.pendingProps, s = n.elementType === a ? s : gn(a, s), yc(e, n, a, s, i);

    case 1:
      return a = n.type, s = n.pendingProps, s = n.elementType === a ? s : gn(a, s), G0(e, n, a, s, i);

    case 3:
      e: {
        if (Ty(n), e === null) throw Error(Q(387));
        a = n.pendingProps, c = n.memoizedState, s = c.element, Kg(e, n), ga(n, a, null, i);
        var p = n.memoizedState;
        if (a = p.element, c.isDehydrated) {
          if (c = {
            element: a,
            isDehydrated: !1,
            cache: p.cache,
            pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
            transitions: p.transitions
          }, n.updateQueue.baseState = c, n.memoizedState = c, n.flags & 256) {
            s = Error(Q(423)), n = V0(e, n, a, i, s);
            break e;
          } else if (a !== s) {
            s = Error(Q(424)), n = V0(e, n, a, i, s);
            break e;
          } else for (Ut = jn(n.stateNode.containerInfo.firstChild), Jt = n, ze = !0, mn = null, i = Zg(n, null, a, i), n.child = i; i;) {
            i.flags = i.flags & -3 | 4096, i = i.sibling;
          }
        } else {
          if (Ji(), a === s) {
            n = Zn(e, n, i);
            break e;
          }

          Bt(e, n, a, i);
        }
        n = n.child;
      }

      return n;

    case 5:
      return Jg(n), e === null && pc(n), a = n.type, s = n.pendingProps, c = e !== null ? e.memoizedProps : null, p = s.children, oc(a, s) ? p = null : c !== null && oc(a, c) && (n.flags |= 32), Ey(e, n), Bt(e, n, p, i), n.child;

    case 6:
      return e === null && pc(n), null;

    case 13:
      return Ly(e, n, i);

    case 4:
      return sd(n, n.stateNode.containerInfo), a = n.pendingProps, e === null ? n.child = qi(n, null, a, i) : Bt(e, n, a, i), n.child;

    case 11:
      return a = n.type, s = n.pendingProps, s = n.elementType === a ? s : gn(a, s), j0(e, n, a, s, i);

    case 7:
      return Bt(e, n, n.pendingProps, i), n.child;

    case 8:
      return Bt(e, n, n.pendingProps.children, i), n.child;

    case 12:
      return Bt(e, n, n.pendingProps.children, i), n.child;

    case 10:
      e: {
        if (a = n.type._context, s = n.pendingProps, c = n.memoizedProps, p = s.value, Oe(pa, a._currentValue), a._currentValue = p, c !== null) if (Sn(c.value, p)) {
          if (c.children === s.children && !Kt.current) {
            n = Zn(e, n, i);
            break e;
          }
        } else for (c = n.child, c !== null && (c.return = n); c !== null;) {
          var m = c.dependencies;

          if (m !== null) {
            p = c.child;

            for (var C = m.firstContext; C !== null;) {
              if (C.context === a) {
                if (c.tag === 1) {
                  C = Vn(-1, i & -i), C.tag = 2;
                  var x = c.updateQueue;

                  if (x !== null) {
                    x = x.shared;
                    var _ = x.pending;
                    _ === null ? C.next = C : (C.next = _.next, _.next = C), x.pending = C;
                  }
                }

                c.lanes |= i, C = c.alternate, C !== null && (C.lanes |= i), fc(c.return, i, n), m.lanes |= i;
                break;
              }

              C = C.next;
            }
          } else if (c.tag === 10) p = c.type === n.type ? null : c.child;else if (c.tag === 18) {
            if (p = c.return, p === null) throw Error(Q(341));
            p.lanes |= i, m = p.alternate, m !== null && (m.lanes |= i), fc(p, i, n), p = c.sibling;
          } else p = c.child;

          if (p !== null) p.return = c;else for (p = c; p !== null;) {
            if (p === n) {
              p = null;
              break;
            }

            if (c = p.sibling, c !== null) {
              c.return = p.return, p = c;
              break;
            }

            p = p.return;
          }
          c = p;
        }
        Bt(e, n, s.children, i), n = n.child;
      }

      return n;

    case 9:
      return s = n.type, a = n.pendingProps.children, Qi(n, i), s = sn(s), a = a(s), n.flags |= 1, Bt(e, n, a, i), n.child;

    case 14:
      return a = n.type, s = gn(a, n.pendingProps), s = gn(a.type, s), K0(e, n, a, s, i);

    case 15:
      return ky(e, n, n.type, n.pendingProps, i);

    case 17:
      return a = n.type, s = n.pendingProps, s = n.elementType === a ? s : gn(a, s), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, Gt(a) ? (e = !0, ha(n)) : e = !1, Qi(n, i), Vg(n, a, s), dc(n, a, s, i), mc(null, n, a, !0, e, i);

    case 19:
      return by(e, n, i);

    case 22:
      return _y(e, n, i);
  }

  throw Error(Q(156, n.tag));
};

function $y(e, n) {
  return vg(e, n);
}

function KC(e, n, i, a) {
  this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}

function on(e, n, i, a) {
  return new KC(e, n, i, a);
}

function _d(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}

function GC(e) {
  if (typeof e == "function") return _d(e) ? 1 : 0;

  if (e != null) {
    if (e = e.$$typeof, e === jc) return 11;
    if (e === Kc) return 14;
  }

  return 2;
}

function Er(e, n) {
  var i = e.alternate;
  return i === null ? (i = on(e.tag, n, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : {
    lanes: n.lanes,
    firstContext: n.firstContext
  }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
}

function Ju(e, n, i, a, s, c) {
  var p = 2;
  if (a = e, typeof e == "function") _d(e) && (p = 1);else if (typeof e == "string") p = 5;else e: switch (e) {
    case Ni:
      return qr(i.children, s, c, n);

    case Uc:
      p = 8, s |= 8;
      break;

    case Rf:
      return e = on(12, i, n, s | 2), e.elementType = Rf, e.lanes = c, e;

    case zf:
      return e = on(13, i, n, s), e.elementType = zf, e.lanes = c, e;

    case Hf:
      return e = on(19, i, n, s), e.elementType = Hf, e.lanes = c, e;

    case Jv:
      return Ta(i, s, c, n);

    default:
      if (_typeof(e) == "object" && e !== null) switch (e.$$typeof) {
        case Xv:
          p = 10;
          break e;

        case Zv:
          p = 9;
          break e;

        case jc:
          p = 11;
          break e;

        case Kc:
          p = 14;
          break e;

        case cr:
          p = 16, a = null;
          break e;
      }
      throw Error(Q(130, e == null ? e : _typeof(e), ""));
  }
  return n = on(p, i, n, s), n.elementType = e, n.type = a, n.lanes = c, n;
}

function qr(e, n, i, a) {
  return e = on(7, e, a, n), e.lanes = i, e;
}

function Ta(e, n, i, a) {
  return e = on(22, e, a, n), e.elementType = Jv, e.lanes = i, e.stateNode = {}, e;
}

function Of(e, n, i) {
  return e = on(6, e, null, n), e.lanes = i, e;
}

function Nf(e, n, i) {
  return n = on(4, e.children !== null ? e.children : [], e.key, n), n.lanes = i, n.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, n;
}

function VC(e, n, i, a, s) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pf(0), this.expirationTimes = pf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pf(0), this.identifierPrefix = a, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
}

function Ed(e, n, i, a, s, c, p, m, C) {
  return e = new VC(e, n, i, m, C), n === 1 ? (n = 1, c === !0 && (n |= 8)) : n = 0, c = on(3, null, null, n), e.current = c, c.stateNode = e, c.memoizedState = {
    element: a,
    isDehydrated: i,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, ld(c), e;
}

function QC(e, n, i) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Oi,
    key: a == null ? null : "" + a,
    children: e,
    containerInfo: n,
    implementation: i
  };
}

function Uy(e) {
  if (!e) return _r;
  e = e._reactInternals;

  e: {
    if (oi(e) !== e || e.tag !== 1) throw Error(Q(170));
    var n = e;

    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;

        case 1:
          if (Gt(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }

      }

      n = n.return;
    } while (n !== null);

    throw Error(Q(171));
  }

  if (e.tag === 1) {
    var i = e.type;
    if (Gt(i)) return Ug(e, i, n);
  }

  return n;
}

function jy(e, n, i, a, s, c, p, m, C) {
  return e = Ed(i, a, !0, e, s, c, p, m, C), e.context = Uy(null), i = e.current, a = It(), s = xr(i), c = Vn(a, s), c.callback = n != null ? n : null, Cr(i, c), e.current.lanes = s, Mo(e, s, a), Vt(e, a), e;
}

function Wa(e, n, i, a) {
  var s = n.current,
      c = It(),
      p = xr(s);
  return i = Uy(i), n.context === null ? n.context = i : n.pendingContext = i, n = Vn(c, p), n.payload = {
    element: e
  }, a = a === void 0 ? null : a, a !== null && (n.callback = a), Cr(s, n), e = an(s, p, c), e !== null && Vu(e, s, p), p;
}

function La(e) {
  if (e = e.current, !e.child) return null;

  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;

    default:
      return e.child.stateNode;
  }
}

function ov(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < n ? i : n;
  }
}

function Td(e, n) {
  ov(e, n), (e = e.alternate) && ov(e, n);
}

function YC() {
  return null;
}

var Ky = typeof reportError == "function" ? reportError : function (e) {
  console.error(e);
};

function Ld(e) {
  this._internalRoot = e;
}

$a.prototype.render = Ld.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(Q(409));
  Wa(e, n, null, null);
};

$a.prototype.unmount = Ld.prototype.unmount = function () {
  var e = this._internalRoot;

  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    ii(function () {
      Wa(null, e, null, null);
    }), n[Xn] = null;
  }
};

function $a(e) {
  this._internalRoot = e;
}

$a.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = xg();
    e = {
      blockedOn: null,
      target: e,
      priority: n
    };

    for (var i = 0; i < hr.length && n !== 0 && n < hr[i].priority; i++) {
      ;
    }

    hr.splice(i, 0, e), i === 0 && _g(e);
  }
};

function bd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}

function Ua(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}

function uv() {}

function XC(e, n, i, a, s) {
  if (s) {
    if (typeof a == "function") {
      var c = a;

      a = function a() {
        var x = La(p);
        c.call(x);
      };
    }

    var p = jy(n, a, e, 0, null, !1, !1, "", uv);
    return e._reactRootContainer = p, e[Xn] = p.current, _o(e.nodeType === 8 ? e.parentNode : e), ii(), p;
  }

  for (; s = e.lastChild;) {
    e.removeChild(s);
  }

  if (typeof a == "function") {
    var m = a;

    a = function a() {
      var x = La(C);
      m.call(x);
    };
  }

  var C = Ed(e, 0, !1, null, null, !1, !1, "", uv);
  return e._reactRootContainer = C, e[Xn] = C.current, _o(e.nodeType === 8 ? e.parentNode : e), ii(function () {
    Wa(n, C, i, a);
  }), C;
}

function ja(e, n, i, a, s) {
  var c = i._reactRootContainer;

  if (c) {
    var p = c;

    if (typeof s == "function") {
      var m = s;

      s = function s() {
        var C = La(p);
        m.call(C);
      };
    }

    Wa(n, p, e, s);
  } else p = XC(i, n, e, s, a);

  return La(p);
}

Cg = function Cg(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;

      if (n.current.memoizedState.isDehydrated) {
        var i = ro(n.pendingLanes);
        i !== 0 && (Qc(n, i | 1), Vt(n, Xe()), (_e & 6) === 0 && (tl = Xe() + 500, br()));
      }

      break;

    case 13:
      var a = It();
      ii(function () {
        return an(e, 1, a);
      }), Td(e, 1);
  }
};

Yc = function Yc(e) {
  if (e.tag === 13) {
    var n = It();
    an(e, 134217728, n), Td(e, 134217728);
  }
};

Sg = function Sg(e) {
  if (e.tag === 13) {
    var n = It(),
        i = xr(e);
    an(e, i, n), Td(e, i);
  }
};

xg = function xg() {
  return Ae;
};

kg = function kg(e, n) {
  var i = Ae;

  try {
    return Ae = e, n();
  } finally {
    Ae = i;
  }
};

Xf = function Xf(e, n, i) {
  switch (n) {
    case "input":
      if (Uf(e, i), n = i.name, i.type === "radio" && n != null) {
        for (i = e; i.parentNode;) {
          i = i.parentNode;
        }

        for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < i.length; n++) {
          var a = i[n];

          if (a !== e && a.form === e.form) {
            var s = Pa(a);
            if (!s) throw Error(Q(90));
            eg(a), Uf(a, s);
          }
        }
      }

      break;

    case "textarea":
      ng(e, i);
      break;

    case "select":
      n = i.value, n != null && ji(e, !!i.multiple, n, !1);
  }
};

sg = Sd;
fg = ii;
var ZC = {
  usingClientEntryPoint: !1,
  Events: [Ro, Ii, Pa, ug, ag, Sd]
},
    Jl = {
  findFiberByHostInstance: Xr,
  bundleType: 0,
  version: "18.1.0",
  rendererPackageName: "react-dom"
},
    JC = {
  bundleType: Jl.bundleType,
  version: Jl.version,
  rendererPackageName: Jl.rendererPackageName,
  rendererConfig: Jl.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: Jn.ReactCurrentDispatcher,
  findHostInstanceByFiber: function findHostInstanceByFiber(e) {
    return e = hg(e), e === null ? null : e.stateNode;
  },
  findFiberByHostInstance: Jl.findFiberByHostInstance || YC,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.1.0-next-22edb9f77-20220426"
};

if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Wu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wu.isDisabled && Wu.supportsFiber) try {
    Fa = Wu.inject(JC), Dn = Wu;
  } catch (_unused12) {}
}

en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ZC;

en.createPortal = function (e, n) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bd(n)) throw Error(Q(200));
  return QC(e, n, null, i);
};

en.createRoot = function (e, n) {
  if (!bd(e)) throw Error(Q(299));
  var i = !1,
      a = "",
      s = Ky;
  return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), n = Ed(e, 1, !1, null, null, i, !1, a, s), e[Xn] = n.current, _o(e.nodeType === 8 ? e.parentNode : e), new Ld(n);
};

en.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0) throw typeof e.render == "function" ? Error(Q(188)) : (e = Object.keys(e).join(","), Error(Q(268, e)));
  return e = hg(n), e = e === null ? null : e.stateNode, e;
};

en.flushSync = function (e) {
  return ii(e);
};

en.hydrate = function (e, n, i) {
  if (!Ua(n)) throw Error(Q(200));
  return ja(null, e, n, !0, i);
};

en.hydrateRoot = function (e, n, i) {
  if (!bd(e)) throw Error(Q(405));
  var a = i != null && i.hydratedSources || null,
      s = !1,
      c = "",
      p = Ky;
  if (i != null && (i.unstable_strictMode === !0 && (s = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onRecoverableError !== void 0 && (p = i.onRecoverableError)), n = jy(n, null, e, 1, i != null ? i : null, s, !1, c, p), e[Xn] = n.current, _o(e), a) for (e = 0; e < a.length; e++) {
    i = a[e], s = i._getVersion, s = s(i._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [i, s] : n.mutableSourceEagerHydrationData.push(i, s);
  }
  return new $a(n);
};

en.render = function (e, n, i) {
  if (!Ua(n)) throw Error(Q(200));
  return ja(null, e, n, !1, i);
};

en.unmountComponentAtNode = function (e) {
  if (!Ua(e)) throw Error(Q(40));
  return e._reactRootContainer ? (ii(function () {
    ja(null, null, e, !1, function () {
      e._reactRootContainer = null, e[Xn] = null;
    });
  }), !0) : !1;
};

en.unstable_batchedUpdates = Sd;

en.unstable_renderSubtreeIntoContainer = function (e, n, i, a) {
  if (!Ua(i)) throw Error(Q(200));
  if (e == null || e._reactInternals === void 0) throw Error(Q(38));
  return ja(e, n, i, !1, a);
};

en.version = "18.1.0-next-22edb9f77-20220426";

function Gy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy);
  } catch (e) {
    console.error(e);
  }
}

Gy(), Kv.exports = en;
var av = Kv.exports;
Mf.createRoot = av.createRoot, Mf.hydrateRoot = av.hydrateRoot;

var ye = function (e) {
  return e[e.set = 0] = "set", e[e.countTTK = 1] = "countTTK", e[e.countTTKuntil = 2] = "countTTKuntil", e[e.start = 3] = "start", e[e.end = 4] = "end", e[e.move = 5] = "move", e[e.action = 6] = "action", e[e.start_sort = 7] = "start_sort", e[e.end_sort = 8] = "end_sort", e[e.move_list = 9] = "move_list", e[e.buffset = 10] = "buffset", e[e.buffadd = 11] = "buffadd", e[e.buffminus = 12] = "buffminus", e[e.switch = 13] = "switch", e[e.order = 14] = "order", e[e.skillcard = 15] = "skillcard", e[e.color = 16] = "color", e[e.add = 17] = "add", e[e.nomove = 18] = "nomove", e[e.ttk_stop = 19] = "ttk_stop", e[e.move_ttk = 20] = "move_ttk", e;
}(ye || {});

var bc = function () {
  var e = {};
  return ["set", "countTTK", "countTTKuntil", "start", "end", "move", "action", "start_sort", "end_sort", "move_list", "buffset", "buffadd", "buffminus", "switch", "order", "skillcard", "color", "add", "nomove", "ttk_stop", "move_ttk"].forEach(function (a) {
    e[a] = ye[a];
  }), [["ttk", 1], ["ttk_until", 2], ["mv_ls", 9], ["b", 10], ["b+", 11], ["b-", 12], ["a", 17], ["m", 5], ["ac", 6], ["sw", 13], ["c", 16], ["sc", 15]].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        s = _ref2[1];

    e[a] = s;
  }), e;
}();

var Fn = function (e) {
  return e[e.switch = 0] = "switch", e[e.order = 1] = "order", e[e.command = 2] = "command", e[e.action = 3] = "action", e;
}(Fn || {}),
    le = function (e) {
  return e[e.comma = 0] = "comma", e[e.comment = 1] = "comment", e[e.new_line = 2] = "new_line", e[e.braceL = 3] = "braceL", e[e.braceR = 4] = "braceR", e[e.bracketL = 5] = "bracketL", e[e.bracketR = 6] = "bracketR", e[e.angle_bracketL = 7] = "angle_bracketL", e[e.angle_bracketR = 8] = "angle_bracketR", e[e.asterisk = 9] = "asterisk", e[e.reserved = 10] = "reserved", e[e.word = 11] = "word", e[e.equal = 12] = "equal", e[e.space = 999] = "space", e;
}(le || {}),
    Qr = function (e) {
  return e[e.chara = 0] = "chara", e[e.skillcard = 1] = "skillcard", e;
}(Qr || {}),
    No = function (e) {
  return e.python = "python", e.default = "kirafan-timeline", e;
}(No || {}),
    gt = function (e) {
  return e[e.init = 0] = "init", e[e.start = 1] = "start", e[e.start_sort = 2] = "start_sort", e[e.sorting = 3] = "sorting", e[e.waiting_mode = 4] = "waiting_mode", e;
}(gt || {});

function qC() {
  this.__data__ = [], this.size = 0;
}

var eS = qC;

function tS(e, n) {
  return e === n || e !== e && n !== n;
}

var Vy = tS,
    nS = Vy;

function rS(e, n) {
  for (var i = e.length; i--;) {
    if (nS(e[i][0], n)) return i;
  }

  return -1;
}

var Ka = rS,
    iS = Ka,
    lS = Array.prototype,
    oS = lS.splice;

function uS(e) {
  var n = this.__data__,
      i = iS(n, e);
  if (i < 0) return !1;
  var a = n.length - 1;
  return i == a ? n.pop() : oS.call(n, i, 1), --this.size, !0;
}

var aS = uS,
    sS = Ka;

function fS(e) {
  var n = this.__data__,
      i = sS(n, e);
  return i < 0 ? void 0 : n[i][1];
}

var cS = fS,
    dS = Ka;

function hS(e) {
  return dS(this.__data__, e) > -1;
}

var pS = hS,
    vS = Ka;

function gS(e, n) {
  var i = this.__data__,
      a = vS(i, e);
  return a < 0 ? (++this.size, i.push([e, n])) : i[a][1] = n, this;
}

var yS = gS,
    mS = eS,
    wS = aS,
    CS = cS,
    SS = pS,
    xS = yS;

function ll(e) {
  var n = -1,
      i = e == null ? 0 : e.length;

  for (this.clear(); ++n < i;) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}

ll.prototype.clear = mS;
ll.prototype.delete = wS;
ll.prototype.get = CS;
ll.prototype.has = SS;
ll.prototype.set = xS;
var Ga = ll,
    kS = Ga;

function _S() {
  this.__data__ = new kS(), this.size = 0;
}

var ES = _S;

function TS(e) {
  var n = this.__data__,
      i = n.delete(e);
  return this.size = n.size, i;
}

var LS = TS;

function bS(e) {
  return this.__data__.get(e);
}

var AS = bS;

function FS(e) {
  return this.__data__.has(e);
}

var DS = FS,
    OS = _typeof(eo) == "object" && eo && eo.Object === Object && eo,
    Qy = OS,
    NS = Qy,
    PS = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    BS = NS || PS || Function("return this")(),
    Nn = BS,
    MS = Nn,
    IS = MS.Symbol,
    Ad = IS,
    sv = Ad,
    Yy = Object.prototype,
    RS = Yy.hasOwnProperty,
    zS = Yy.toString,
    ql = sv ? sv.toStringTag : void 0;

function HS(e) {
  var n = RS.call(e, ql),
      i = e[ql];

  try {
    e[ql] = void 0;
    var a = !0;
  } catch (_unused13) {}

  var s = zS.call(e);
  return a && (n ? e[ql] = i : delete e[ql]), s;
}

var WS = HS,
    $S = Object.prototype,
    US = $S.toString;

function jS(e) {
  return US.call(e);
}

var KS = jS,
    fv = Ad,
    GS = WS,
    VS = KS,
    QS = "[object Null]",
    YS = "[object Undefined]",
    cv = fv ? fv.toStringTag : void 0;

function XS(e) {
  return e == null ? e === void 0 ? YS : QS : cv && cv in Object(e) ? GS(e) : VS(e);
}

var Va = XS;

function ZS(e) {
  var n = _typeof(e);

  return e != null && (n == "object" || n == "function");
}

var Ho = ZS,
    JS = Va,
    qS = Ho,
    ex = "[object AsyncFunction]",
    tx = "[object Function]",
    nx = "[object GeneratorFunction]",
    rx = "[object Proxy]";

function ix(e) {
  if (!qS(e)) return !1;
  var n = JS(e);
  return n == tx || n == nx || n == ex || n == rx;
}

var Xy = ix,
    lx = Nn,
    ox = lx["__core-js_shared__"],
    ux = ox,
    Pf = ux,
    dv = function () {
  var e = /[^.]+$/.exec(Pf && Pf.keys && Pf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();

function ax(e) {
  return !!dv && dv in e;
}

var sx = ax,
    fx = Function.prototype,
    cx = fx.toString;

function dx(e) {
  if (e != null) {
    try {
      return cx.call(e);
    } catch (_unused14) {}

    try {
      return e + "";
    } catch (_unused15) {}
  }

  return "";
}

var Zy = dx,
    hx = Xy,
    px = sx,
    vx = Ho,
    gx = Zy,
    yx = /[\\^$.*+?()[\]{}|]/g,
    mx = /^\[object .+?Constructor\]$/,
    wx = Function.prototype,
    Cx = Object.prototype,
    Sx = wx.toString,
    xx = Cx.hasOwnProperty,
    kx = RegExp("^" + Sx.call(xx).replace(yx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function _x(e) {
  if (!vx(e) || px(e)) return !1;
  var n = hx(e) ? kx : mx;
  return n.test(gx(e));
}

var Ex = _x;

function Tx(e, n) {
  return e == null ? void 0 : e[n];
}

var Lx = Tx,
    bx = Ex,
    Ax = Lx;

function Fx(e, n) {
  var i = Ax(e, n);
  return bx(i) ? i : void 0;
}

var ui = Fx,
    Dx = ui,
    Ox = Nn,
    Nx = Dx(Ox, "Map"),
    Fd = Nx,
    Px = ui,
    Bx = Px(Object, "create"),
    Qa = Bx,
    hv = Qa;

function Mx() {
  this.__data__ = hv ? hv(null) : {}, this.size = 0;
}

var Ix = Mx;

function Rx(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}

var zx = Rx,
    Hx = Qa,
    Wx = "__lodash_hash_undefined__",
    $x = Object.prototype,
    Ux = $x.hasOwnProperty;

function jx(e) {
  var n = this.__data__;

  if (Hx) {
    var i = n[e];
    return i === Wx ? void 0 : i;
  }

  return Ux.call(n, e) ? n[e] : void 0;
}

var Kx = jx,
    Gx = Qa,
    Vx = Object.prototype,
    Qx = Vx.hasOwnProperty;

function Yx(e) {
  var n = this.__data__;
  return Gx ? n[e] !== void 0 : Qx.call(n, e);
}

var Xx = Yx,
    Zx = Qa,
    Jx = "__lodash_hash_undefined__";

function qx(e, n) {
  var i = this.__data__;
  return this.size += this.has(e) ? 0 : 1, i[e] = Zx && n === void 0 ? Jx : n, this;
}

var ek = qx,
    tk = Ix,
    nk = zx,
    rk = Kx,
    ik = Xx,
    lk = ek;

function ol(e) {
  var n = -1,
      i = e == null ? 0 : e.length;

  for (this.clear(); ++n < i;) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}

ol.prototype.clear = tk;
ol.prototype.delete = nk;
ol.prototype.get = rk;
ol.prototype.has = ik;
ol.prototype.set = lk;
var ok = ol,
    pv = ok,
    uk = Ga,
    ak = Fd;

function sk() {
  this.size = 0, this.__data__ = {
    hash: new pv(),
    map: new (ak || uk)(),
    string: new pv()
  };
}

var fk = sk;

function ck(e) {
  var n = _typeof(e);

  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}

var dk = ck,
    hk = dk;

function pk(e, n) {
  var i = e.__data__;
  return hk(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
}

var Ya = pk,
    vk = Ya;

function gk(e) {
  var n = vk(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}

var yk = gk,
    mk = Ya;

function wk(e) {
  return mk(this, e).get(e);
}

var Ck = wk,
    Sk = Ya;

function xk(e) {
  return Sk(this, e).has(e);
}

var kk = xk,
    _k = Ya;

function Ek(e, n) {
  var i = _k(this, e),
      a = i.size;

  return i.set(e, n), this.size += i.size == a ? 0 : 1, this;
}

var Tk = Ek,
    Lk = fk,
    bk = yk,
    Ak = Ck,
    Fk = kk,
    Dk = Tk;

function ul(e) {
  var n = -1,
      i = e == null ? 0 : e.length;

  for (this.clear(); ++n < i;) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}

ul.prototype.clear = Lk;
ul.prototype.delete = bk;
ul.prototype.get = Ak;
ul.prototype.has = Fk;
ul.prototype.set = Dk;
var Ok = ul,
    Nk = Ga,
    Pk = Fd,
    Bk = Ok,
    Mk = 200;

function Ik(e, n) {
  var i = this.__data__;

  if (i instanceof Nk) {
    var a = i.__data__;
    if (!Pk || a.length < Mk - 1) return a.push([e, n]), this.size = ++i.size, this;
    i = this.__data__ = new Bk(a);
  }

  return i.set(e, n), this.size = i.size, this;
}

var Rk = Ik,
    zk = Ga,
    Hk = ES,
    Wk = LS,
    $k = AS,
    Uk = DS,
    jk = Rk;

function al(e) {
  var n = this.__data__ = new zk(e);
  this.size = n.size;
}

al.prototype.clear = Hk;
al.prototype.delete = Wk;
al.prototype.get = $k;
al.prototype.has = Uk;
al.prototype.set = jk;
var Kk = al;

function Gk(e, n) {
  for (var i = -1, a = e == null ? 0 : e.length; ++i < a && n(e[i], i, e) !== !1;) {
    ;
  }

  return e;
}

var Vk = Gk,
    Qk = ui,
    Yk = function () {
  try {
    var e = Qk(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch (_unused16) {}
}(),
    Xk = Yk,
    vv = Xk;

function Zk(e, n, i) {
  n == "__proto__" && vv ? vv(e, n, {
    configurable: !0,
    enumerable: !0,
    value: i,
    writable: !0
  }) : e[n] = i;
}

var Jy = Zk,
    Jk = Jy,
    qk = Vy,
    e_ = Object.prototype,
    t_ = e_.hasOwnProperty;

function n_(e, n, i) {
  var a = e[n];
  (!(t_.call(e, n) && qk(a, i)) || i === void 0 && !(n in e)) && Jk(e, n, i);
}

var qy = n_,
    r_ = qy,
    i_ = Jy;

function l_(e, n, i, a) {
  var s = !i;
  i || (i = {});

  for (var c = -1, p = n.length; ++c < p;) {
    var m = n[c],
        C = a ? a(i[m], e[m], m, i, e) : void 0;
    C === void 0 && (C = e[m]), s ? i_(i, m, C) : r_(i, m, C);
  }

  return i;
}

var Xa = l_;

function o_(e, n) {
  for (var i = -1, a = Array(e); ++i < e;) {
    a[i] = n(i);
  }

  return a;
}

var u_ = o_;

function a_(e) {
  return e != null && _typeof(e) == "object";
}

var Wo = a_,
    s_ = Va,
    f_ = Wo,
    c_ = "[object Arguments]";

function d_(e) {
  return f_(e) && s_(e) == c_;
}

var h_ = d_,
    gv = h_,
    p_ = Wo,
    em = Object.prototype,
    v_ = em.hasOwnProperty,
    g_ = em.propertyIsEnumerable,
    y_ = gv(function () {
  return arguments;
}()) ? gv : function (e) {
  return p_(e) && v_.call(e, "callee") && !g_.call(e, "callee");
},
    m_ = y_,
    w_ = Array.isArray,
    Dd = w_,
    ba = {
  exports: {}
};

function C_() {
  return !1;
}

var S_ = C_;

(function (e, n) {
  var i = Nn,
      a = S_,
      s = n && !n.nodeType && n,
      c = s && !0 && e && !e.nodeType && e,
      p = c && c.exports === s,
      m = p ? i.Buffer : void 0,
      C = m ? m.isBuffer : void 0,
      x = C || a;
  e.exports = x;
})(ba, ba.exports);

var x_ = 9007199254740991,
    k_ = /^(?:0|[1-9]\d*)$/;

function __(e, n) {
  var i = _typeof(e);

  return n = n == null ? x_ : n, !!n && (i == "number" || i != "symbol" && k_.test(e)) && e > -1 && e % 1 == 0 && e < n;
}

var E_ = __,
    T_ = 9007199254740991;

function L_(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= T_;
}

var tm = L_,
    b_ = Va,
    A_ = tm,
    F_ = Wo,
    D_ = "[object Arguments]",
    O_ = "[object Array]",
    N_ = "[object Boolean]",
    P_ = "[object Date]",
    B_ = "[object Error]",
    M_ = "[object Function]",
    I_ = "[object Map]",
    R_ = "[object Number]",
    z_ = "[object Object]",
    H_ = "[object RegExp]",
    W_ = "[object Set]",
    $_ = "[object String]",
    U_ = "[object WeakMap]",
    j_ = "[object ArrayBuffer]",
    K_ = "[object DataView]",
    G_ = "[object Float32Array]",
    V_ = "[object Float64Array]",
    Q_ = "[object Int8Array]",
    Y_ = "[object Int16Array]",
    X_ = "[object Int32Array]",
    Z_ = "[object Uint8Array]",
    J_ = "[object Uint8ClampedArray]",
    q_ = "[object Uint16Array]",
    eE = "[object Uint32Array]",
    Be = {};
Be[G_] = Be[V_] = Be[Q_] = Be[Y_] = Be[X_] = Be[Z_] = Be[J_] = Be[q_] = Be[eE] = !0;
Be[D_] = Be[O_] = Be[j_] = Be[N_] = Be[K_] = Be[P_] = Be[B_] = Be[M_] = Be[I_] = Be[R_] = Be[z_] = Be[H_] = Be[W_] = Be[$_] = Be[U_] = !1;

function tE(e) {
  return F_(e) && A_(e.length) && !!Be[b_(e)];
}

var nE = tE;

function rE(e) {
  return function (n) {
    return e(n);
  };
}

var Od = rE,
    Po = {
  exports: {}
};

(function (e, n) {
  var i = Qy,
      a = n && !n.nodeType && n,
      s = a && !0 && e && !e.nodeType && e,
      c = s && s.exports === a,
      p = c && i.process,
      m = function () {
    try {
      var C = s && s.require && s.require("util").types;

      return C || p && p.binding && p.binding("util");
    } catch (_unused17) {}
  }();

  e.exports = m;
})(Po, Po.exports);

var iE = nE,
    lE = Od,
    yv = Po.exports,
    mv = yv && yv.isTypedArray,
    oE = mv ? lE(mv) : iE,
    uE = oE,
    aE = u_,
    sE = m_,
    fE = Dd,
    cE = ba.exports,
    dE = E_,
    hE = uE,
    pE = Object.prototype,
    vE = pE.hasOwnProperty;

function gE(e, n) {
  var i = fE(e),
      a = !i && sE(e),
      s = !i && !a && cE(e),
      c = !i && !a && !s && hE(e),
      p = i || a || s || c,
      m = p ? aE(e.length, String) : [],
      C = m.length;

  for (var x in e) {
    (n || vE.call(e, x)) && !(p && (x == "length" || s && (x == "offset" || x == "parent") || c && (x == "buffer" || x == "byteLength" || x == "byteOffset") || dE(x, C))) && m.push(x);
  }

  return m;
}

var nm = gE,
    yE = Object.prototype;

function mE(e) {
  var n = e && e.constructor,
      i = typeof n == "function" && n.prototype || yE;
  return e === i;
}

var Nd = mE;

function wE(e, n) {
  return function (i) {
    return e(n(i));
  };
}

var rm = wE,
    CE = rm,
    SE = CE(Object.keys, Object),
    xE = SE,
    kE = Nd,
    _E = xE,
    EE = Object.prototype,
    TE = EE.hasOwnProperty;

function LE(e) {
  if (!kE(e)) return _E(e);
  var n = [];

  for (var i in Object(e)) {
    TE.call(e, i) && i != "constructor" && n.push(i);
  }

  return n;
}

var bE = LE,
    AE = Xy,
    FE = tm;

function DE(e) {
  return e != null && FE(e.length) && !AE(e);
}

var im = DE,
    OE = nm,
    NE = bE,
    PE = im;

function BE(e) {
  return PE(e) ? OE(e) : NE(e);
}

var Pd = BE,
    ME = Xa,
    IE = Pd;

function RE(e, n) {
  return e && ME(n, IE(n), e);
}

var zE = RE;

function HE(e) {
  var n = [];
  if (e != null) for (var i in Object(e)) {
    n.push(i);
  }
  return n;
}

var WE = HE,
    $E = Ho,
    UE = Nd,
    jE = WE,
    KE = Object.prototype,
    GE = KE.hasOwnProperty;

function VE(e) {
  if (!$E(e)) return jE(e);
  var n = UE(e),
      i = [];

  for (var a in e) {
    a == "constructor" && (n || !GE.call(e, a)) || i.push(a);
  }

  return i;
}

var QE = VE,
    YE = nm,
    XE = QE,
    ZE = im;

function JE(e) {
  return ZE(e) ? YE(e, !0) : XE(e);
}

var Bd = JE,
    qE = Xa,
    e5 = Bd;

function t5(e, n) {
  return e && qE(n, e5(n), e);
}

var n5 = t5,
    Ac = {
  exports: {}
};

(function (e, n) {
  var i = Nn,
      a = n && !n.nodeType && n,
      s = a && !0 && e && !e.nodeType && e,
      c = s && s.exports === a,
      p = c ? i.Buffer : void 0,
      m = p ? p.allocUnsafe : void 0;

  function C(x, _) {
    if (_) return x.slice();
    var A = x.length,
        E = m ? m(A) : new x.constructor(A);
    return x.copy(E), E;
  }

  e.exports = C;
})(Ac, Ac.exports);

function r5(e, n) {
  var i = -1,
      a = e.length;

  for (n || (n = Array(a)); ++i < a;) {
    n[i] = e[i];
  }

  return n;
}

var i5 = r5;

function l5(e, n) {
  for (var i = -1, a = e == null ? 0 : e.length, s = 0, c = []; ++i < a;) {
    var p = e[i];
    n(p, i, e) && (c[s++] = p);
  }

  return c;
}

var o5 = l5;

function u5() {
  return [];
}

var lm = u5,
    a5 = o5,
    s5 = lm,
    f5 = Object.prototype,
    c5 = f5.propertyIsEnumerable,
    wv = Object.getOwnPropertySymbols,
    d5 = wv ? function (e) {
  return e == null ? [] : (e = Object(e), a5(wv(e), function (n) {
    return c5.call(e, n);
  }));
} : s5,
    Md = d5,
    h5 = Xa,
    p5 = Md;

function v5(e, n) {
  return h5(e, p5(e), n);
}

var g5 = v5;

function y5(e, n) {
  for (var i = -1, a = n.length, s = e.length; ++i < a;) {
    e[s + i] = n[i];
  }

  return e;
}

var om = y5,
    m5 = rm,
    w5 = m5(Object.getPrototypeOf, Object),
    um = w5,
    C5 = om,
    S5 = um,
    x5 = Md,
    k5 = lm,
    _5 = Object.getOwnPropertySymbols,
    E5 = _5 ? function (e) {
  for (var n = []; e;) {
    C5(n, x5(e)), e = S5(e);
  }

  return n;
} : k5,
    am = E5,
    T5 = Xa,
    L5 = am;

function b5(e, n) {
  return T5(e, L5(e), n);
}

var A5 = b5,
    F5 = om,
    D5 = Dd;

function O5(e, n, i) {
  var a = n(e);
  return D5(e) ? a : F5(a, i(e));
}

var sm = O5,
    N5 = sm,
    P5 = Md,
    B5 = Pd;

function M5(e) {
  return N5(e, B5, P5);
}

var I5 = M5,
    R5 = sm,
    z5 = am,
    H5 = Bd;

function W5(e) {
  return R5(e, H5, z5);
}

var $5 = W5,
    U5 = ui,
    j5 = Nn,
    K5 = U5(j5, "DataView"),
    G5 = K5,
    V5 = ui,
    Q5 = Nn,
    Y5 = V5(Q5, "Promise"),
    X5 = Y5,
    Z5 = ui,
    J5 = Nn,
    q5 = Z5(J5, "Set"),
    e6 = q5,
    t6 = ui,
    n6 = Nn,
    r6 = t6(n6, "WeakMap"),
    i6 = r6,
    Fc = G5,
    Dc = Fd,
    Oc = X5,
    Nc = e6,
    Pc = i6,
    fm = Va,
    sl = Zy,
    Cv = "[object Map]",
    l6 = "[object Object]",
    Sv = "[object Promise]",
    xv = "[object Set]",
    kv = "[object WeakMap]",
    _v = "[object DataView]",
    o6 = sl(Fc),
    u6 = sl(Dc),
    a6 = sl(Oc),
    s6 = sl(Nc),
    f6 = sl(Pc),
    Yr = fm;
(Fc && Yr(new Fc(new ArrayBuffer(1))) != _v || Dc && Yr(new Dc()) != Cv || Oc && Yr(Oc.resolve()) != Sv || Nc && Yr(new Nc()) != xv || Pc && Yr(new Pc()) != kv) && (Yr = function Yr(e) {
  var n = fm(e),
      i = n == l6 ? e.constructor : void 0,
      a = i ? sl(i) : "";
  if (a) switch (a) {
    case o6:
      return _v;

    case u6:
      return Cv;

    case a6:
      return Sv;

    case s6:
      return xv;

    case f6:
      return kv;
  }
  return n;
});
var Id = Yr,
    c6 = Object.prototype,
    d6 = c6.hasOwnProperty;

function h6(e) {
  var n = e.length,
      i = new e.constructor(n);
  return n && typeof e[0] == "string" && d6.call(e, "index") && (i.index = e.index, i.input = e.input), i;
}

var p6 = h6,
    v6 = Nn,
    g6 = v6.Uint8Array,
    y6 = g6,
    Ev = y6;

function m6(e) {
  var n = new e.constructor(e.byteLength);
  return new Ev(n).set(new Ev(e)), n;
}

var Rd = m6,
    w6 = Rd;

function C6(e, n) {
  var i = n ? w6(e.buffer) : e.buffer;
  return new e.constructor(i, e.byteOffset, e.byteLength);
}

var S6 = C6,
    x6 = /\w*$/;

function k6(e) {
  var n = new e.constructor(e.source, x6.exec(e));
  return n.lastIndex = e.lastIndex, n;
}

var _6 = k6,
    Tv = Ad,
    Lv = Tv ? Tv.prototype : void 0,
    bv = Lv ? Lv.valueOf : void 0;

function E6(e) {
  return bv ? Object(bv.call(e)) : {};
}

var T6 = E6,
    L6 = Rd;

function b6(e, n) {
  var i = n ? L6(e.buffer) : e.buffer;
  return new e.constructor(i, e.byteOffset, e.length);
}

var A6 = b6,
    F6 = Rd,
    D6 = S6,
    O6 = _6,
    N6 = T6,
    P6 = A6,
    B6 = "[object Boolean]",
    M6 = "[object Date]",
    I6 = "[object Map]",
    R6 = "[object Number]",
    z6 = "[object RegExp]",
    H6 = "[object Set]",
    W6 = "[object String]",
    $6 = "[object Symbol]",
    U6 = "[object ArrayBuffer]",
    j6 = "[object DataView]",
    K6 = "[object Float32Array]",
    G6 = "[object Float64Array]",
    V6 = "[object Int8Array]",
    Q6 = "[object Int16Array]",
    Y6 = "[object Int32Array]",
    X6 = "[object Uint8Array]",
    Z6 = "[object Uint8ClampedArray]",
    J6 = "[object Uint16Array]",
    q6 = "[object Uint32Array]";

function eT(e, n, i) {
  var a = e.constructor;

  switch (n) {
    case U6:
      return F6(e);

    case B6:
    case M6:
      return new a(+e);

    case j6:
      return D6(e, i);

    case K6:
    case G6:
    case V6:
    case Q6:
    case Y6:
    case X6:
    case Z6:
    case J6:
    case q6:
      return P6(e, i);

    case I6:
      return new a();

    case R6:
    case W6:
      return new a(e);

    case z6:
      return O6(e);

    case H6:
      return new a();

    case $6:
      return N6(e);
  }
}

var tT = eT,
    nT = Ho,
    Av = Object.create,
    rT = function () {
  function e() {}

  return function (n) {
    if (!nT(n)) return {};
    if (Av) return Av(n);
    e.prototype = n;
    var i = new e();
    return e.prototype = void 0, i;
  };
}(),
    iT = rT,
    lT = iT,
    oT = um,
    uT = Nd;

function aT(e) {
  return typeof e.constructor == "function" && !uT(e) ? lT(oT(e)) : {};
}

var sT = aT,
    fT = Id,
    cT = Wo,
    dT = "[object Map]";

function hT(e) {
  return cT(e) && fT(e) == dT;
}

var pT = hT,
    vT = pT,
    gT = Od,
    Fv = Po.exports,
    Dv = Fv && Fv.isMap,
    yT = Dv ? gT(Dv) : vT,
    mT = yT,
    wT = Id,
    CT = Wo,
    ST = "[object Set]";

function xT(e) {
  return CT(e) && wT(e) == ST;
}

var kT = xT,
    _T = kT,
    ET = Od,
    Ov = Po.exports,
    Nv = Ov && Ov.isSet,
    TT = Nv ? ET(Nv) : _T,
    LT = TT,
    bT = Kk,
    AT = Vk,
    FT = qy,
    DT = zE,
    OT = n5,
    NT = Ac.exports,
    PT = i5,
    BT = g5,
    MT = A5,
    IT = I5,
    RT = $5,
    zT = Id,
    HT = p6,
    WT = tT,
    $T = sT,
    UT = Dd,
    jT = ba.exports,
    KT = mT,
    GT = Ho,
    VT = LT,
    QT = Pd,
    YT = Bd,
    XT = 1,
    ZT = 2,
    JT = 4,
    cm = "[object Arguments]",
    qT = "[object Array]",
    e2 = "[object Boolean]",
    t2 = "[object Date]",
    n2 = "[object Error]",
    dm = "[object Function]",
    r2 = "[object GeneratorFunction]",
    i2 = "[object Map]",
    l2 = "[object Number]",
    hm = "[object Object]",
    o2 = "[object RegExp]",
    u2 = "[object Set]",
    a2 = "[object String]",
    s2 = "[object Symbol]",
    f2 = "[object WeakMap]",
    c2 = "[object ArrayBuffer]",
    d2 = "[object DataView]",
    h2 = "[object Float32Array]",
    p2 = "[object Float64Array]",
    v2 = "[object Int8Array]",
    g2 = "[object Int16Array]",
    y2 = "[object Int32Array]",
    m2 = "[object Uint8Array]",
    w2 = "[object Uint8ClampedArray]",
    C2 = "[object Uint16Array]",
    S2 = "[object Uint32Array]",
    De = {};
De[cm] = De[qT] = De[c2] = De[d2] = De[e2] = De[t2] = De[h2] = De[p2] = De[v2] = De[g2] = De[y2] = De[i2] = De[l2] = De[hm] = De[o2] = De[u2] = De[a2] = De[s2] = De[m2] = De[w2] = De[C2] = De[S2] = !0;
De[n2] = De[dm] = De[f2] = !1;

function qu(e, n, i, a, s, c) {
  var p,
      m = n & XT,
      C = n & ZT,
      x = n & JT;
  if (i && (p = s ? i(e, a, s, c) : i(e)), p !== void 0) return p;
  if (!GT(e)) return e;

  var _ = UT(e);

  if (_) {
    if (p = HT(e), !m) return PT(e, p);
  } else {
    var A = zT(e),
        E = A == dm || A == r2;
    if (jT(e)) return NT(e, m);

    if (A == hm || A == cm || E && !s) {
      if (p = C || E ? {} : $T(e), !m) return C ? MT(e, OT(p, e)) : BT(e, DT(p, e));
    } else {
      if (!De[A]) return s ? e : {};
      p = WT(e, A, m);
    }
  }

  c || (c = new bT());
  var b = c.get(e);
  if (b) return b;
  c.set(e, p), VT(e) ? e.forEach(function (R) {
    p.add(qu(R, n, i, R, e, c));
  }) : KT(e) && e.forEach(function (R, y) {
    p.set(y, qu(R, n, i, y, e, c));
  });
  var F = x ? C ? RT : IT : C ? YT : QT,
      D = _ ? void 0 : F(e);
  return AT(D || e, function (R, y) {
    D && (y = R, R = e[y]), FT(p, y, qu(R, n, i, y, e, c));
  }), p;
}

var x2 = qu,
    k2 = x2,
    _2 = 1,
    E2 = 4;

function T2(e) {
  return k2(e, _2 | E2);
}

var L2 = T2,
    Za = {
  exports: {}
},
    Ja = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

var b2 = ct.exports,
    A2 = Symbol.for("react.element"),
    F2 = Symbol.for("react.fragment"),
    D2 = Object.prototype.hasOwnProperty,
    O2 = b2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    N2 = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function pm(e, n, i) {
  var a,
      s = {},
      c = null,
      p = null;
  i !== void 0 && (c = "" + i), n.key !== void 0 && (c = "" + n.key), n.ref !== void 0 && (p = n.ref);

  for (a in n) {
    D2.call(n, a) && !N2.hasOwnProperty(a) && (s[a] = n[a]);
  }

  if (e && e.defaultProps) for (a in n = e.defaultProps, n) {
    s[a] === void 0 && (s[a] = n[a]);
  }
  return {
    $$typeof: A2,
    type: e,
    key: c,
    ref: p,
    props: s,
    _owner: O2.current
  };
}

Ja.Fragment = F2;
Ja.jsx = pm;
Ja.jsxs = pm;
Za.exports = Ja;
var B = Za.exports.jsx,
    ce = Za.exports.jsxs,
    ht = Za.exports.Fragment,
    zd = Error("undefined");

function fr(e) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var a = document.createElement(e);
  if (a) return n && (a.innerText = n), i && a.classList.add(i), a;
  throw zd;
}

function P2(e) {
  var n = document.querySelector("title");
  if (n) n.innerText = e;else throw zd;
}

function B2(e) {
  return L2(e);
}

function Hd(e) {
  var n = document.createElement("textarea");
  n.value = e, n.setAttribute("readonly", ""), n.style.position = "absolute", n.style.left = "-9999px", document.body.appendChild(n), n.select();
  var i = document.execCommand("copy");
  return document.body.removeChild(n), i;
}

function M2(e, n) {
  var i = fr("table"),
      a = fr("thead"),
      s = fr("tr");

  var _iterator5 = _createForOfIteratorHelper(e),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var p = _step5.value;
      var m = fr("th");
      m.innerText = p, s.appendChild(m);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  a.appendChild(s), i.appendChild(a);
  var c = fr("tbody");

  var _iterator6 = _createForOfIteratorHelper(n),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _p2 = _step6.value;

      var _m2 = fr("tr");

      var _iterator7 = _createForOfIteratorHelper(_p2),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var C = _step7.value;
          var x = fr("td");
          x.innerText = C, _m2.appendChild(x);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      c.appendChild(_m2);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return i.appendChild(c), i;
}

function I2() {
  return navigator.userAgent.indexOf("Android") > 0;
}

function R2() {
  return !(navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0 && navigator.userAgent.indexOf("Mobile") > 0 || navigator.userAgent.indexOf("iPad") > 0 || navigator.userAgent.indexOf("Android") > 0);
}

function z2(e) {
  return /^[+]?\d+$/.test(e);
}

function H2() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unreachable code";
  throw new Error(e);
}

var Bc = Symbol();

function Mt(e, n) {
  return {
    case: function _case(i, a) {
      return W2(e, i, a, n);
    },
    default: function _default(i) {
      n !== Bc && i();
    }
  };
}

function W2(e, n, i, a) {
  if (a === Bc) return Mt(e, a);
  var s = !1;
  return Array.isArray(n) ? n.includes(e) && (s = !0) : e === n && (s = !0), s ? (i(), Mt(e, Bc)) : Mt(e);
}

var qa = /*#__PURE__*/function () {
  function qa() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;

    _classCallCheck(this, qa);

    Re(this, "_href");
    Re(this, "autochange");
    Re(this, "_urlAPI");
    this._href = n, this._urlAPI = new URL(this._href), this.autochange = i;
  }

  _createClass(qa, [{
    key: "getParam",
    value: function getParam(n) {
      var i = this._urlAPI.searchParams.get(n) || "";

      try {
        return decodeURIComponent(i);
      } catch (_unused18) {
        return i;
      }
    }
  }, {
    key: "setParam",
    value: function setParam(n) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      this._urlAPI.searchParams.set(n, i), this.autochange && this._setURL(this._urlAPI.href);
    }
  }, {
    key: "hash",
    get: function get() {
      return this._urlAPI.hash;
    },
    set: function set(n) {
      this._setURL("#".concat(n));
    }
  }, {
    key: "href",
    get: function get() {
      return this._urlAPI.protocol + "//" + this._urlAPI.host + this._urlAPI.pathname + "?TL=" + encodeURIComponent(this.getParam("TL"));
    },
    set: function set(n) {
      this._urlAPI.href = n;
    }
  }, {
    key: "_setURL",
    value: function _setURL(n) {
      this.autochange && history.replaceState("", "", n);
    }
  }, {
    key: "_reflesh",
    value: function _reflesh() {
      this._urlAPI = new URL(this._href);
    }
  }]);

  return qa;
}();

function vm(e) {
  var n = e;
  return {
    get: function get() {
      return n;
    },
    set: function set(i) {
      n = i;
    }
  };
}

function ea() {
  return Math.random().toString(36).slice(2);
}

function gm(e) {
  var n = e.split("\n");
  return B(ht, {
    children: n.map(function (i, a) {
      return ce("span", {
        children: [i, B("br", {})]
      }, a);
    })
  });
}

function ta(e, n) {
  var i = [],
      a = typeof e == "number" ? [0, e - 1] : e;

  for (var s = a[0]; s <= a[1]; s++) {
    i.push(n(s));
  }

  return i;
}

function ym(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function Qn(e) {
  return Error(ym(e));
}

var Zt = {
  undefinedErr: zd,
  htmltag: fr,
  changeTitle: P2,
  objectCopy: B2,
  textCopy: Hd,
  makeTable: M2,
  isPC: R2,
  isAndroid: I2,
  isNaturalString: z2,
  unreachable: H2,
  match: Mt,
  OperateURL: qa,
  state: vm,
  getRandomStr: ea,
  innerText: gm,
  rangeIterator: ta,
  makeSafeText: ym,
  HTMLSafeError: Qn
};

function $2(e) {
  setInterval(function () {
    Pv(e());
  }, .5 * 36e5), window.addEventListener("beforeunload", function () {
    return Pv(e());
  });
}

function Pv(e) {
  var n = new qa(location.href),
      i = String(new Date()) + "\u81EA\u52D5\u4FDD\u5B58:TL\u751F\u6210\u30C4\u30FC\u30EB";
  e !== n.getParam("TL") && (n.setParam("TL", e), e.length === 0 ? history.pushState(null, i, n.href) : history.replaceState(null, i, n.href), Zt.changeTitle(i)), console.log(e);
}

function U2(e, n, i) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var s = e[n],
      c = Zt.htmltag("span");

  if (c.appendChild(Zt.htmltag("span", "\u2192\u2192" + s.value + "\u2190\u2190", "errMsg")), s.type !== le.new_line) {
    var C = s.addtional_info.where[1];

    for (var x = n + 1; x < e.length; x++) {
      if (e[x].type === le.new_line) {
        C = e[x].addtional_info.where[0];
        break;
      }
    }

    c.insertAdjacentText("beforeend", i.substring(s.addtional_info.where[1], C));
  }

  var p = s.addtional_info.where[0];

  for (var _C2 = n - 1; _C2 >= 0; _C2--) {
    if (e[_C2].type === le.new_line) {
      p = e[_C2].addtional_info.where[1];
      break;
    }
  }

  c.insertAdjacentText("afterbegin", i.substring(p, s.addtional_info.where[0])), s.type === le.reserved && (a = "\u4E88\u7D04\u6587\u5B57\u3067\u3059");
  var m = Zt.htmltag("span");
  throw m.insertAdjacentText("beforeend", "\u60F3\u5B9A\u5916\u306E\u5024: \u300C" + JSON.stringify(s.value) + "\u300D"), m.appendChild(Zt.htmltag("br")), m.appendChild(c), m.appendChild(Zt.htmltag("br")), m.insertAdjacentText("beforeend", a), Error(m.outerHTML);
}

var Bv = 20;

var j2 = /*#__PURE__*/function () {
  function j2(n, i) {
    _classCallCheck(this, j2);

    Re(this, "timeline_parsed");
    Re(this, "i_loading");
    Re(this, "bracket_type", [[le.bracketL, le.bracketR], [le.braceL, le.braceR], [le.angle_bracketL, le.angle_bracketR]]);
    Re(this, "str");
    this.timeline_parsed = n, this.str = i, this.i_loading = 0;
  }

  _createClass(j2, [{
    key: "now_val",
    get: function get() {
      return this.timeline_parsed[this.i_loading];
    },
    set: function set(n) {
      throw Error("now_val\u306B\u306F\u30BB\u30C3\u30C8\u3067\u304D\u307E\u305B\u3093");
    }
  }, {
    key: "now_val_type",
    get: function get() {
      return this.now_val.type;
    },
    set: function set(n) {
      throw Error("now_val\u306B\u306F\u30BB\u30C3\u30C8\u3067\u304D\u307E\u305B\u3093");
    }
  }, {
    key: "Normalize",
    value: function Normalize() {
      var n = [];
      var i;

      var a = this,
          s = this.timeline_parsed.filter(function (m) {
        return m.type !== le.comment;
      }),
          c = function c() {
        return s[i].type;
      };

      for (i = 0; i < s.length; i++) {
        c() === le.bracketL && p(), n.push(s[i]);
      }

      function p() {
        var m = [i];

        for (n.push(s[i]), i++; i < s.length; i++) {
          if (i + 1 === s.length && (a.i_loading = (m == null ? void 0 : m[1]) || m[0], a.error_unexpectedToken("]\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059")), c() === le.bracketL) m.push(i), p();else {
            if (c() === le.new_line) continue;

            if (c() === le.bracketR) {
              m.pop();
              break;
            }
          }
          n.push(s[i]);
        }
      }

      for (var m = 0, C = !0; m < n.length; m++) {
        n[m].type === le.new_line ? (C && (n.splice(m, 1), m--), C = !0) : C = !1;
      }

      for (var _m3 = n.length - 1; _m3 >= 0 && n[_m3].type === le.new_line; _m3--) {
        n.pop();
      }

      this.timeline_parsed = n;
    }
  }, {
    key: "parse",
    value: function parse() {
      var i, a, s, c;
      this.Normalize();
      var n = [];
      if (this.timeline_parsed.length === 0) return n;

      for (this.timeline_parsed.push({
        type: le.new_line,
        value: "\n",
        addtional_info: {
          where: [(a = (i = this.timeline_parsed.at(-1)) == null ? void 0 : i.addtional_info.where[1]) != null ? a : 0, (c = (s = this.timeline_parsed.at(-1)) == null ? void 0 : s.addtional_info.where[1]) != null ? c : 0]
        }
      }), this.i_loading = 0; this.i_loading < this.timeline_parsed.length; this.i_loading++) {
        var p = this.loadStatement();
        n.push(p), this.now_val_type !== le.new_line && this.error_unexpectedToken("\u6587\u306E\u3042\u3068\u306B\u30B3\u30E1\u30F3\u30C8\u4EE5\u5916\u306E\u6587\u3092\u66F8\u304F\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093");
      }

      return n;
    }
  }, {
    key: "loadStatement",
    value: function loadStatement() {
      var _this = this;

      var n = [];
      var i = {},
          a = this.now_val.addtional_info.where[0];
      this.checkIsWord();

      var s = this.now_val.value,
          c = function () {
        var p = bc[s];
        if (typeof p != "undefined") return p;
        throw Error("\u30B3\u30DE\u30F3\u30C9\u540D\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059");
      }();

      if (this.nextVal(), c === ye.move_list) {
        (function () {
          _this.checkIsWord();

          var p = _this.now_val.value;
          _this.nextVal(), _this.now_val_type !== le.bracketL && _this.error_unexpectedToken("move_list\u306E\u7B2C\u4E8C\u5F15\u6570\u306F [ \u304B\u3089\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059"), _this.nextVal();
          var m = [];
          if (_this.now_val_type !== le.bracketR) for (;;) {
            if (Mt(_this.now_val_type).case(le.bracketL, function () {
              var C = _this.now_val.addtional_info.where[0];

              _this.nextVal();

              var x = _this.getMoveListInList(le.bracketR),
                  _ = _this.now_val.addtional_info.where[0],
                  A = {
                where: [C, _]
              };

              m.push({
                mode: Fn.switch,
                value: x[0],
                addtional_info: A,
                option: x[1]
              });
            }).case(le.angle_bracketL, function () {
              var C = _this.now_val.addtional_info.where[0];

              _this.nextVal();

              var x = _this.getMoveListInList(le.angle_bracketR),
                  _ = _this.now_val.addtional_info.where[0],
                  A = {
                where: [C, _]
              };

              m.push({
                mode: Fn.order,
                value: x[0],
                addtional_info: A,
                option: x[1]
              });
            }).case(le.braceL, function () {
              var C = _this.now_val.addtional_info.where[0];

              _this.nextVal();

              var x = _this.getCommandListInList(),
                  _ = _this.now_val.addtional_info.where[0],
                  A = {
                where: [C, _]
              };

              m.push({
                mode: Fn.command,
                value: x,
                addtional_info: A
              });
            }).case(le.word, function () {
              m.push({
                mode: Fn.action,
                value: [_this.now_val.value],
                addtional_info: {
                  where: [_this.now_val.addtional_info.where[0], _this.now_val.addtional_info.where[1]]
                },
                option: {}
              }), _this.nextVal();
            }).default(function () {
              _this.error_unexpectedToken("move_list\u5185\u306E\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC\u3000\u6B63\u3057\u3044\u5024\u304C\u5165\u529B\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044");
            }), _this.now_val_type === le.asterisk) {
              var C = m.pop(),
                  x = function x() {
                _this.error_unexpectedToken("*\u306E\u5F8C\u306F0\u4EE5\u4E0A\u306E\u6574\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
              };

              if (!C) throw _this.error_unexpectedToken("unreachable code"), Error("unreachable code");

              if (_this.nextVal(), _this.now_val_type === le.word) {
                var _ = _this.now_val.value;
                Zt.isNaturalString(_) || x();
                var A = Number(_);
                A < 0 && x(), A > Bv && _this.error_unexpectedToken("\u30A8\u30E9\u30FC : ".concat(Bv, "\u56DE\u3092\u8D85\u3048\u308B\u7E70\u308A\u8FD4\u3057\u306F\u3067\u304D\u307E\u305B\u3093(\u6975\u7AEF\u306A\u5024\u304C\u5165\u529B\u3055\u308C\u91CD\u304F\u306A\u308B\u3053\u3068\u3092\u9632\u3050\u305F\u3081)"));

                for (var E = 0; E < A; E++) {
                  var b = Zt.objectCopy(C);
                  m.push(b);
                }

                _this.nextVal();
              } else x();
            }

            if (_this.now_val_type === le.bracketR) break;
            _this.now_val_type === le.comma ? _this.nextVal() : _this.error_unexpectedToken("\u30B3\u30F3\u30DE\u304Bmove_list\u7D42\u4E86\u306E]\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059");
          }
          n = [c, p, m], _this.nextVal();
        })();
      } else for (n = [c];;) {
        if (this.now_val_type === le.word) this.getValue(function (p) {
          n.push(p);
        }, function (p, m) {
          i[p] = m;
        });else {
          if (this.now_val_type === le.new_line) break;
          this.error_unexpectedToken("\u3053\u306E\u6587\u5B57\u306F\u5165\u529B\u3067\u304D\u307E\u305B\u3093");
        }
      }

      return {
        mv_ls: n[0] === ye.move_list,
        addtional_info: {
          where: [a, this.timeline_parsed[this.i_loading - 1].addtional_info.where[1]]
        },
        value: n,
        option: i
      };
    }
  }, {
    key: "getValue",
    value: function getValue(n, i) {
      if (this.getNextValue().type === le.equal) {
        var a = this.now_val.value;
        this.nextVal(), this.nextVal(), this.now_val_type !== le.word && this.error_unexpectedToken("=\u306E\u5F8C\u306B\u5024\u304C\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093");
        var s = this.now_val.value;
        i(a, s);
      } else n(this.now_val.value);

      this.nextVal();
    }
  }, {
    key: "isLastValue",
    value: function isLastValue() {
      return this.i_loading + 1 >= this.timeline_parsed.length;
    }
  }, {
    key: "getNextValue",
    value: function getNextValue() {
      return this.timeline_parsed[this.i_loading + 1];
    }
  }, {
    key: "getCommandListInList",
    value: function getCommandListInList() {
      var _this2 = this;

      var n = le.braceR,
          i = {
        option: {},
        mv_ls: !1
      };
      var a = [],
          s = 0;

      e: for (;;) {
        Mt(this.now_val_type).case(le.word, function () {
          if (s === 0) {
            var p = bc[_this2.now_val.value];
            p && p !== ye.move_list ? a = [p] : _this2.error_unexpectedToken("\u30B3\u30DE\u30F3\u30C9\u540D\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059"), _this2.nextVal();
          } else _this2.getValue(function (p) {
            a.push(p);
          }, function (p, m) {
            i.option[p] = m;
          });
        }).default(function () {
          _this2.error_unexpectedToken("move_list\u5185\u306E\u304B\u3063\u3053\u304C\u9589\u3058\u3089\u308C\u3066\u3044\u306A\u3044\u304B\u5F15\u6570\u304C\u4E0D\u6B63\u3067\u3059");
        });
        var c = !1;
        if (Mt(this.now_val_type).case(n, function () {
          _this2.nextVal(), c = !0;
        }).case(le.comma, function () {
          _this2.nextVal();
        }).default(function () {
          _this2.error_unexpectedToken("move_list\u5185\u306E\u304B\u3063\u3053\u304C\u9589\u3058\u308C\u3066\u3044\u306A\u3044\u304B\u5F15\u6570\u304C\u4E0D\u6B63\u3001\u3082\u3057\u304F\u306F\u30B3\u30F3\u30DE\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059_");
        }), c) break e;
        s++;
      }

      return i || this.error_unexpectedToken("\u30B3\u30DE\u30F3\u30C9\u304C\u5165\u529B\u3055\u308C\u3066\u3044\u307E\u305B\u3093"), Xp(Yp({}, i), {
        value: a
      });
    }
  }, {
    key: "getMoveListInList",
    value: function getMoveListInList(n) {
      var _this3 = this;

      var i = [],
          a = {};
      if (this.now_val_type === n) return [i, a];

      e: for (;;) {
        Mt(this.now_val_type).case(le.word, function () {
          _this3.getValue(function (c) {
            i.push(c);
          }, function (c, p) {
            a[c] = p;
          });
        }).default(function () {
          _this3.error_unexpectedToken("move_list\u5185\u306E\u304B\u3063\u3053\u304C\u9589\u3058\u3089\u308C\u3066\u3044\u306A\u3044\u304B\u5F15\u6570\u304C\u4E0D\u6B63\u3067\u3059x");
        });
        var s = !1;
        if (Mt(this.now_val_type).case(n, function () {
          _this3.nextVal(), s = !0;
        }).case(le.comma, function () {
          _this3.nextVal();
        }).default(function () {
          _this3.error_unexpectedToken("move_list\u5185\u306E\u304B\u3063\u3053\u304C\u9589\u3058\u308C\u3066\u3044\u306A\u3044\u304B\u5F15\u6570\u304C\u4E0D\u6B63\u3001\u3082\u3057\u304F\u306F\u30B3\u30F3\u30DE\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059");
        }), s) break e;
      }

      return [i, a];
    }
  }, {
    key: "nextVal",
    value: function nextVal() {
      this.isLastValue() && this.error_unexpectedToken("\u5185\u90E8\u30A8\u30E9\u30FC\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u51FA\u305F\u3089\u304A\u77E5\u3089\u305B\u304A\u9858\u3044\u3057\u307E\u3059\u3002"), this.i_loading++;
    }
  }, {
    key: "nextVal_noerror",
    value: function nextVal_noerror() {
      this.isLastValue() || this.i_loading++;
    }
  }, {
    key: "checkIsWord",
    value: function checkIsWord() {
      this.now_val_type !== le.word && this.error_unexpectedToken();
    }
  }, {
    key: "checkIsCommma",
    value: function checkIsCommma() {
      this.now_val_type !== le.comma && this.error_unexpectedToken();
    }
  }, {
    key: "getRangeValue",
    value: function getRangeValue(n, i, a) {
      return n.substring(i, a);
    }
  }, {
    key: "error_unexpectedToken",
    value: function error_unexpectedToken() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      U2(this.timeline_parsed, this.i_loading, this.str, n);
    }
  }]);

  return j2;
}();

var K2 = /*#__PURE__*/function () {
  function K2(n) {
    _classCallCheck(this, K2);

    Re(this, "timeline_str");
    Re(this, "timeline_parsed");
    Re(this, "_now_str");
    Re(this, "i_nowloadstr");
    Re(this, "space", " ");
    this.timeline_str = n, this.timeline_parsed = [], this._now_str = "", this.i_nowloadstr = 0;
  }

  _createClass(K2, [{
    key: "parse_no_wasm",
    value: function parse_no_wasm() {
      return this.timeline_parsed = this.lexicalAnalysis(), this.timeline_parsed;
    }
  }, {
    key: "lexicalAnalysis",
    value: function lexicalAnalysis() {
      var _this4 = this;

      var n = this.timeline_str,
          i = [],
          a = n.split(""),
          s = a.length;
      var c = 0;

      var _loop = function _loop() {
        var p = [c, c + 1];
        var C = a[c];

        var x = _this4.getNextCharType(c);

        var _ = !1;

        var A = function A() {
          _ = !0;
        };

        Mt(x).case(le.space, function () {
          c += 1, A();
        }).case(le.comment, function () {
          for (C = ""; c < s;) {
            var E = a[c];

            if (_this4.getNextCharType(c) === le.new_line) {
              c -= 1;
              break;
            }

            C += E, c += 1;
          }
        }).case(le.word, function () {
          for (C = ""; c < s;) {
            var E = a[c];

            if (_this4.getNextCharType(c) !== le.word) {
              c -= 1;
              break;
            }

            C += E, c += 1;
          }
        }).default(function () {}), !_ && (p[1] = c + 1, i.push({
          type: x,
          value: C,
          addtional_info: {
            where: p
          }
        }), c += 1);
      };

      for (; c < s;) {
        _loop();
      }

      return i;
    }
  }, {
    key: "getNextCharType",
    value: function getNextCharType(n) {
      var i = this.timeline_str[n];
      var a;

      var s = function s(c) {
        a = c;
      };

      if (Mt(i).case(",", function () {
        s(le.comma);
      }).case("\n", function () {
        s(le.new_line);
      }).case("#", function () {
        s(le.comment);
      }).case("{", function () {
        s(le.braceL);
      }).case("}", function () {
        s(le.braceR);
      }).case("[", function () {
        s(le.bracketL);
      }).case("]", function () {
        s(le.bracketR);
      }).case("<", function () {
        s(le.angle_bracketL);
      }).case(">", function () {
        s(le.angle_bracketR);
      }).case("*", function () {
        s(le.asterisk);
      }).case("=", function () {
        s(le.equal);
      }).case(["(", ")", '"', "'", "!", "$", "%", "&", "^", "~", "?", ";", "`"], function () {
        s(le.reserved);
      }).default(function () {
        i.trim() === "" ? s(le.space) : s(le.word);
      }), a == null) throw Zt.undefinedErr;
      return a;
    }
  }]);

  return K2;
}();

function G2(_x2) {
  return _G.apply(this, arguments);
}

function _G() {
  _G = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            i = new K2(e).parse_no_wasm();
            return _context2.abrupt("return", new j2(i, e).parse());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _G.apply(this, arguments);
}

function V2(_x3) {
  return _V.apply(this, arguments);
}

function _V() {
  _V = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
    var n, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            n = Boolean(e.match(/^#python#/)), i = {};

            if (!n) {
              _context3.next = 3;
              break;
            }

            throw new Error("\u73FE\u5728Python\u30E2\u30FC\u30C9\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093");

          case 3:
            _context3.next = 5;
            return G2(e);

          case 5:
            i.AST = _context3.sent;
            i.type = No.default;
            return _context3.abrupt("return", i);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _V.apply(this, arguments);
}

function Q2(e, n) {
  var i = function i(m, C) {
    var x = m.findIndex(function (_) {
      return _[0] === C[0];
    });
    if (x !== -1) m[x] = C;else throw Error("not found");
  },
      a = [[0, 5], [10, 8], [27.5, 17], [35, 17], [40, 8], [45, 2], [50, 5], [55, 8], [60, 8], [65, 8], [67.5, 17], [70, 2], [75, 8], [80, 5], [100, 5], [110, 22], [120, 8], [125, 8], [130, 8], [135, 17], [140, 8], [145, 8], [150, 17], [155, 8], [165, 10], [170, 17], [190, 17], [200, 17]];

  i(a, [125, 0]), i(a, [10, 0]), i(a, [100, 17]), i(a, [70, 17]), i(a, [75, 17]), i(a, [130, 10]);
  var s = [[75, 5], [80, 22], [100, 17]];
  i(s, [100, 22]);
  var p = (n ? s : a).find(function (m) {
    return m[0] === e;
  });
  return p ? p[1] : 0;
}

var Y2 = 125;
var lo = {
  getCharge: Q2,
  ttk_val: Y2
};

var X2 = /*#__PURE__*/function () {
  function X2() {
    _classCallCheck(this, X2);

    Re(this, "current");
    Re(this, "color");
    Re(this, "place_of_currentTimeline");
    Re(this, "cardData");
    Re(this, "comment");
    Re(this, "switchData");
    this.current = [], this.switchData = [], this.cardData = [], this.comment = [], this.color = void 0, this.place_of_currentTimeline = 0;
  }

  _createClass(X2, [{
    key: "move",
    value: function move(n) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.ID_of_firstChara();
      var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      if (this.setColor(i, this.place_of_currentTimeline), i !== this.ID_of_firstChara() && a === !1) throw new Error("\u6700\u521D\u306E\u30AD\u30E3\u30E9\u4EE5\u5916\u306F\u64CD\u4F5C\u3067\u304D\u307E\u305B\u3093");
      var s = this.get_chara_by_ID(i).timeline_OrderValue,
          c = s - this.OrderValue_of_firstChara(),
          p = s + n - c;
      this.pushChara(i, p), this.nextturn();
    }
  }, {
    key: "moveTTK",
    value: function moveTTK(n, i) {
      var _this5 = this;

      if (n.length > 3 || n.length <= 0) throw new Error("\u79FB\u52D5\u3059\u308B\u30AD\u30E3\u30E9\u304C4\u4EBA\u4EE5\u4E0A\u3042\u308B\u304B\u30011\u4EBA\u3082\u3042\u308A\u307E\u305B\u3093");
      if (n.length !== i.length) throw new Error("charas\u3068OrderValues\u306E\u9577\u3055\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093");
      var a = !1;

      for (var c = 0; c < n.length; c++) {
        if (this.get_chara_by_ID(n[c]).type !== Qr.chara) throw new Error("\u3068\u3063\u3066\u304A\u304D\u306E\u5BFE\u8C61\u306B\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u306F\u6307\u5B9A\u3067\u304D\u307E\u305B\u3093");

        for (var p = c + 1; p < n.length; p++) {
          if (n[c] === n[p]) throw new Error("\u540C\u3058\u30AD\u30E3\u30E9\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059");
        }

        this.firstChara.id === n[c] && (a = !0);
      }

      var s = this.OrderValue_of_firstChara();
      n.forEach(function (c, p) {
        _this5.get_chara_by_ID(c).nomove = !0, _this5.pushChara(c, s + i[p]);
      }), a && this.nextturn();
    }
  }, {
    key: "setColor",
    value: function setColor(n, i) {
      this.color && (this.comment.push(["color", n, i, this.color]), this.color = void 0);
    }
  }, {
    key: "setChara",
    value: function setChara(n, i) {
      this.pushChara(n, i);
    }
  }, {
    key: "place_to_moved",
    value: function place_to_moved(n) {
      var i = -1;

      for (var s = this.current.length - 1; s > this.place_of_currentTimeline; s--) {
        if (n >= this.current[s].timeline_OrderValue) {
          i = s;
          break;
        }
      }

      var a;
      return i === -1 ? a = this.place_of_currentTimeline + 1 : a = i + 1, a;
    }
  }, {
    key: "pushChara",
    value: function pushChara(n, i) {
      var a;

      try {
        a = Zt.objectCopy(this.get_chara_by_ID(n));
      } catch (_unused19) {
        a = {
          id: n,
          nomove: !1,
          timeline_OrderValue: i,
          type: Qr.chara
        };
      }

      this._pushChara(i, a);
    }
  }, {
    key: "_pushChara",
    value: function _pushChara(n, i) {
      i.timeline_OrderValue = n;
      var a = this.place_to_moved(n);
      this.current.splice(a, 0, i);
    }
  }, {
    key: "addChara",
    value: function addChara(n, i) {
      var a = {
        id: n,
        timeline_OrderValue: i,
        type: Qr.chara,
        nomove: !1
      };
      this.current.splice(this.place_of_currentTimeline, 0, a);
    }
  }, {
    key: "addSkillCard",
    value: function addSkillCard(n, i, a, s) {
      var c,
          p = !0;

      try {
        c = this.get_chara_by_ID(n);
      } catch (_unused20) {
        p = !1;
      }

      if (p) {
        if (!c) throw Error("unreachable");
        if (c.type !== Qr.skillcard) throw Error("\u6307\u5B9A\u3055\u308C\u305F\u540D\u524D\u306F\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u3067\u306F\u3042\u308A\u307E\u305B\u3093");
        c.time = a, this.current[this.placeToChara(n)] = c;
      } else {
        var m = this.OrderValue_of_firstChara() + i,
            C = this.place_to_moved(m);
        s = s || function () {}, this.current.splice(C, 0, {
          type: Qr.skillcard,
          time: a,
          id: n,
          timeline_OrderValue: m,
          OrderValue: i,
          event: s,
          nomove: !1
        }), this.cardData.push([this.place_of_currentTimeline, n]);
      }
    }
  }, {
    key: "switchChara",
    value: function switchChara(n, i) {
      this.switchData.push([this.place_of_currentTimeline, n, i]), this.setColor(n, this.place_of_currentTimeline), n === this.ID_of_firstChara() ? (this.current[this.placeToChara(n)].id = i, this.current[this.placeToChara(i)].timeline_OrderValue = this.OrderValue_of_firstChara()) : this.switchSupportChara(n, i);
    }
  }, {
    key: "switchSupportChara",
    value: function switchSupportChara(n, i) {
      this.current.splice(this.placeToChara(n), 1), this.addChara(i, this.OrderValue_of_firstChara());
    }
  }, {
    key: "inited",
    value: function inited() {
      this.current.sort(function (n, i) {
        var a = n.timeline_OrderValue,
            s = i.timeline_OrderValue;
        return a < s ? -1 : a > s ? 1 : 0;
      }), this.place_of_currentTimeline = 0;
    }
  }, {
    key: "firstChara",
    get: function get() {
      return this.current[this.place_of_currentTimeline];
    },
    set: function set(n) {
      throw Error("firstChara\u306B\u306F\u30BB\u30C3\u30C8\u3067\u304D\u307E\u305B\u3093");
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
      if (this.place_of_currentTimeline++, this.firstChara.type === Qr.skillcard) {
        if (this.firstChara.event(this.firstChara.id, this.firstChara.OrderValue, this.firstChara.time), this.firstChara.time--, this.firstChara, this.firstChara.time === 0) this.nextturn();else {
          if (this.firstChara.time < 0) throw Error("skillcard\u306Etime\u306B0\u672A\u6E80\u306E\u6570\u5024");
          this.move(this.firstChara.OrderValue, this.ID_of_firstChara(), !1);
        }
      } else this.firstChara.nomove && this.nextturn();
    }
  }, {
    key: "skip",
    value: function skip() {
      this.nextturn();
    }
  }, {
    key: "get_chara_by_ID",
    value: function get_chara_by_ID(n) {
      return this.current[this.placeToChara(n)];
    }
  }, {
    key: "placeToChara",
    value: function placeToChara(n) {
      for (var i = this.place_of_currentTimeline; i < this.current.length; i++) {
        if (this.current[i].id === n && !this.current[i].nomove) return i;
      }

      throw Error("Not Found!ID\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059");
    }
  }]);

  return X2;
}();

var na = /*#__PURE__*/function () {
  function na(n, i, a) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var c = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, na);

    Re(this, "id");
    Re(this, "SPD");
    Re(this, "_SPD_buff");
    Re(this, "LoadFactorReduce");
    Re(this, "ttk_val");
    this.id = n, this.SPD = i, this._SPD_buff = [], this.SPD_buff = a, this.LoadFactorReduce = s, this.ttk_val = c;
  }

  _createClass(na, [{
    key: "calculateOrderValue",
    value: function calculateOrderValue(n) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var a = this.SPD,
          s = this.SPD_buff / 100,
          c = Math.min(Math.max(124 - Math.floor(a / 2), 0), 100),
          p = Math.floor(c * (n / 100) * (1 - i) * (1 - s));
      return Math.max(Math.min(p, 500), 15);
    }
  }, {
    key: "initOrderValue",
    value: function initOrderValue() {
      return this.calculateOrderValue(100, 0);
    }
  }, {
    key: "SPD_buff",
    get: function get() {
      return this._SPD_buff.reduce(function (n, i) {
        return n + i.val;
      }, 0);
    },
    set: function set(n) {
      this._SPD_buff = [{
        val: n,
        turn: 1 / 0
      }];
    }
  }, {
    key: "setSPDbuff",
    value: function setSPDbuff(n) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1 / 0;

      if (i !== 0) {
        if (i < 0) throw Error("turn\u306F0\u4EE5\u4E0A\u306E\u6574\u6570\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093");

        this._SPD_buff.push({
          val: n,
          turn: i
        });
      }
    }
  }, {
    key: "nextTurn",
    value: function nextTurn() {
      this._SPD_buff = this._SPD_buff.map(function (n) {
        return n.turn--, n;
      }).filter(function (n) {
        return n.turn > 0;
      });
    }
  }, {
    key: "getTTK",
    value: function getTTK(n) {
      var i = this.calculateOrderValue(this.ttk_val);
      return n && this.nextTurn(), i;
    }
  }]);

  return na;
}();

function Z2(e) {
  return !Number.isNaN(Number(e));
}

function J2(e, n) {
  if ((n === "number" || n === "number?" && e !== void 0) && !Z2(e || "0")) throw Qn("\u5F15\u6570\u306B\u6570\u5024\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093: ".concat(e));

  switch (n) {
    case "number":
      return Number(e);

    case "number?":
      return e === void 0 ? void 0 : Number(e);

    case "string":
    case "string?":
      return e;

    case void 0:
      throw Qn("\u5F15\u6570\u304C\u591A\u3059\u304E\u307E\u3059: ".concat(e));

    default:
      throw Qn("unknown type: ".concat(n));
  }
}

function mm(e, n) {
  var i = n.length;
  n.forEach(function (p, m) {
    if (p.match(/\?$/)) {
      i = m;
      return;
    }
  });
  var a = i,
      s = n.length - a;
  if (e.length < a) throw Qn("\u5F15\u6570\u4E0D\u8DB3\u3067\u3059: \u5FC5\u8981\u5F15\u6570:".concat(a, " , \u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570:").concat(s));
  var c = new Array(a).fill(void 0);

  for (var p = 0; p < e.length; p++) {
    c[p] = J2(e[p], n[p]);
  }

  return c;
}

function q2(e, n, i) {
  if (e.length < n) throw Qn("\u5F15\u6570\u4E0D\u8DB3\u3067\u3059: \u5FC5\u8981\u5F15\u6570:".concat(n, " , \u30AA\u30D7\u30B7\u30E7\u30F3\u5F15\u6570:").concat(i));

  var a = _toConsumableArray(e.slice(0, n + i));

  for (var s = e.length; s < n + i; s++) {
    a.push(void 0);
  }

  return a;
}

function e4(e, n, i, a, s, c, p, m, C) {
  var A;

  var x, _;

  try {
    (function () {
      var E = function E(b) {
        var _wm = wm(e, i, a, s, c, p, m, b);

        e = _wm.TL;
        i = _wm.convertedTLdata;
        a = _wm.mode;
      };

      for (; e.current.length !== 0;) {
        var b = e.ID_of_firstChara();

        if (((A = n[b]) == null ? void 0 : A[0]) === void 0) {
          var _ret = function () {
            var D = {};
            Object.keys(n).forEach(function (R) {
              n[R].length !== 0 && (D[R] = n[R]);
            }), Object.keys(D).length !== 0 && (x = "\u24D8info :move_list\u306B\u4F7F\u308F\u308C\u3066\u3044\u306A\u3044\u30B9\u30AD\u30EB\u304C\u3042\u308A\u307E\u3059:" + JSON.stringify(Object.fromEntries(Object.entries(D).map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  R = _ref4[0],
                  y = _ref4[1];

              return [R, y.map(function (w) {
                return w.value.length > 0 && w.mode === Fn.command && (w.value[0] = ye[w.value[0]]), w.value.length === 1 && (w.value = w.value[0]), w.value;
              })];
            }))).replaceAll('"', ""));
            return "break";
          }();

          if (_ret === "break") break;
        }

        if (_ = n[b].shift(), !_) throw Error("\u5185\u90E8\u30A8\u30E9\u30FC\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u51FA\u305F\u3089\u304A\u77E5\u3089\u305B\u304A\u9858\u3044\u3057\u307E\u3059\u3002");

        var F = function F(D) {
          var R = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          for (var _len = arguments.length, y = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            y[_key - 2] = arguments[_key];
          }

          return E({
            value: [D].concat(y),
            option: R,
            mv_ls: !1,
            addtional_info: {
              where: [0, 0]
            }
          });
        };

        if (_.mode === Fn.order) {
          var _$value = _slicedToArray(_.value, 1),
              D = _$value[0],
              R = D.match(/^[a-zA-Z]/g),
              y = D.match(/\d+(\.(\d+)?)?/g);

          if (R && F(ye.color, _.option, R[0]), y) F(ye.order, _.option, b, y[0]);else throw Error("\u786C\u76F4\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F");
        } else if (_.mode === Fn.action) {
          var _$value2 = _slicedToArray(_.value, 1),
              _D = _$value2[0],
              _R = _D.match(/^[a-zA-Z]/g),
              _y2 = _D.match(/\d+/g);

          if (_R && F(ye.color, _.option, _R[0]), _y2) F(ye.action, _.option, b, _y2[0]);else throw Error("\u786C\u76F4\u5024\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F");
        } else if (_.mode === Fn.switch) {
          var _$value3 = _slicedToArray(_.value, 3),
              _D2 = _$value3[0],
              _R2 = _$value3[1],
              _y3 = _$value3[2];

          F(ye.switch, _.option, b, _D2, _R2, _y3 || "0"), n[_D2] = n[b], n[b] = [];
        } else if (_.mode === Fn.command) E(_.value);else throw Error("\u30C6\u30AD\u30B9\u30C8\u306E\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC");
      }
    })();
  } catch (E) {
    throw _ ? Qn("\u300C".concat(C.substring.apply(C, _toConsumableArray(_.addtional_info.where)), "\u300D : ").concat(E)) : (console.log("e is undefined"), Qn(E));
  }

  return {
    TL: e,
    chara_move_list: n,
    info: x
  };
}

function wm(e, n, i, a, s, c, p, m) {
  var E, b, F;

  var _m$value = _toArray(m.value),
      C = _m$value[0],
      x = _m$value.slice(1),
      _ = function _(D) {
    return mm(x, D);
  },
      A = function A(D) {
    var R = c.get();
    e.place_of_currentTimeline < R && p(D);
  };

  if (C !== ye.end) {
    var D = m.value;
    D[0] = ye[C], n.main.length === 0 && (n.main = []), n.main.push(D);
  }

  if (C === ye.buffset) {
    var _ref5 = _(["string", "number", "number?"]),
        _ref6 = _slicedToArray(_ref5, 3),
        _D3 = _ref6[0],
        R = _ref6[1],
        y = _ref6[2],
        w = y != null ? y : 1 / 0;

    s[_D3]._SPD_buff = [], s[_D3].setSPDbuff(R, w);
  } else if (C === ye.buffadd) {
    var _ref7 = _(["string", "number", "number?"]),
        _ref8 = _slicedToArray(_ref7, 3),
        _D4 = _ref8[0],
        _R3 = _ref8[1],
        _y4 = _ref8[2],
        _w2 = _y4 != null ? _y4 : 1 / 0;

    s[_D4].setSPDbuff(_R3, _w2);
  } else if (C === ye.buffminus) {
    var _ref9 = _(["string", "number", "number?"]),
        _ref10 = _slicedToArray(_ref9, 3),
        _D5 = _ref10[0],
        _R4 = _ref10[1],
        _y5 = _ref10[2],
        _w3 = _y5 != null ? _y5 : 1 / 0;

    s[_D5].setSPDbuff(-_R4, _w3);
  } else if (C === ye.add) {
    var _ref11 = _(["string", "number", "number?"]),
        _ref12 = _slicedToArray(_ref11, 3),
        _D6 = _ref12[0],
        _R5 = _ref12[1],
        _y6 = _ref12[2],
        _w4 = (E = Number(_y6)) != null ? E : 0;

    s[_D6] = new na(_D6, _R5, _w4, 0, lo.ttk_val), e.addChara(_D6, s[_D6].initOrderValue());
  } else if (C === ye.move || C === ye.action) {
    var _ref13, _ref14, _ref15, _ref16;

    var _D7, _R6, _y7;

    C === ye.move ? (_ref13 = _(["number", "string", "string?"]), _ref14 = _slicedToArray(_ref13, 3), _R6 = _ref14[0], _D7 = _ref14[1], _y7 = _ref14[2], _ref13) : (_ref15 = _(["string", "number", "string?"]), _ref16 = _slicedToArray(_ref15, 3), _D7 = _ref16[0], _R6 = _ref16[1], _y7 = _ref16[2], _ref15);

    var _w5 = _y7 === "true";

    a[_D7] && A(lo.getCharge(_R6, !1)), e.move(s[e.ID_of_firstChara()].calculateOrderValue(_R6), _D7, _w5), s[_D7].nextTurn();
  } else if (C === ye.order) {
    var _ref17 = _(["string", "number"]),
        _ref18 = _slicedToArray(_ref17, 2),
        _D8 = _ref18[0],
        _R7 = _ref18[1];

    e.move(_R7, _D8, !1), s[_D8].nextTurn();
  } else if (C === ye.switch) {
    var _ref19 = _(["string", "string", "number", "number?"]),
        _ref20 = _slicedToArray(_ref19, 4),
        _D9 = _ref20[0],
        _R8 = _ref20[1],
        _y8 = _ref20[2],
        _w6 = _ref20[3],
        S = _w6 != null ? _w6 : 0;

    e.switchChara(_D9, _R8), s[_R8] = new na(_R8, _y8, S, 0, Number((F = (b = m == null ? void 0 : m.option) == null ? void 0 : b.ttk) != null ? F : lo.ttk_val));
  } else if (C === ye.color) {
    var _ref21 = _(["string"]),
        _ref22 = _slicedToArray(_ref21, 1),
        _D10 = _ref22[0];

    e.color = _D10;
  } else if (C === ye.skillcard) {
    var _ref23 = _(["string", "number", "number", "number"]),
        _ref24 = _slicedToArray(_ref23, 4),
        _D11 = _ref24[0],
        _R9 = _ref24[1],
        _y9 = _ref24[2],
        _w7 = _ref24[3],
        _S2 = new na(_D11, _R9, 0, 0, 0);

    s[_D11] = _S2, e.addSkillCard(_D11, _S2.calculateOrderValue(_y9), _w7, function (L, O, I) {
      return A(a[L] ? lo.getCharge(_y9, !0) : 0);
    });
  } else if (C === ye.nomove) e.skip();else if (C === ye.end) i = gt.waiting_mode;else if (C === ye.ttk_stop) c.set(e.place_of_currentTimeline);else if (C === ye.move_ttk) {
    var _D12 = m.value.slice(1),
        _R10 = _D12.map(function (y) {
      return s[y].getTTK(!1);
    });

    s[_D12[0]].nextTurn(), e.moveTTK(_D12, _R10);
  } else throw Error("no command found");

  return {
    mode: i,
    convertedTLdata: n,
    TL: e
  };
}

function t4(e, n) {
  var i = new X2(),
      a = {};
  var s = {};
  var c = {
    main: [],
    set: []
  };
  var p = {};
  var m = 0;
  var C = vm(1 / 0);

  var x = gt.init,
      _,
      A;

  var E = function E(R) {
    m += R;
  },
      b = function b() {
    var _e2 = e4(i, a, c, x, p, s, C, E, n);

    i = _e2.TL;
    _ = _e2.info;
    a = _e2.chara_move_list;
  };

  var F = 0;
  var D = e.map(function (R) {
    return R.value;
  });

  try {
    var _loop2 = function _loop2() {
      var _D$F = _toArray(D[F]),
          R = _D$F[0],
          y = _D$F.slice(1),
          w = function w(I, M) {
        return I !== ye.move_list;
      },
          S = function S(I) {
        if (w(R, y)) return mm(y, I);
        throw Error("move_list is not allowed");
      },
          L = function L(I, M) {
        return q2(y, I, M);
      },
          O = e[F];

      O.mv_ls || Object.keys(O.option).forEach(function (I) {
        if (I !== "ttk") throw Error("option\u306E\u30AD\u30FC\u306Fttk\u4EE5\u5916\u73FE\u5728\u4F7F\u3048\u307E\u305B\u3093");
      }), Mt(x).case([gt.init], function () {
        Mt(R).case(ye.set, function () {
          var ue, he;

          var _S3 = S(["string", "number", "number?"]),
              _S4 = _slicedToArray(_S3, 3),
              I = _S4[0],
              M = _S4[1],
              H = _S4[2],
              ee = H != null ? H : 0;

          var q = lo.ttk_val;
          O.mv_ls || (q = Number((he = (ue = O == null ? void 0 : O.option) == null ? void 0 : ue.ttk) != null ? he : q)), s[I] = new na(I, M, ee, 0, q), i.setChara(I, s[I].initOrderValue()), c.set.length === 0 ? c.set = [D[F]] : c.set.push(D[F]);
        }).case(ye.countTTK, function () {
          D[F].slice(1).forEach(function (M) {
            typeof M == "string" && (p[M] = !0);
          });
        }).case(ye.countTTKuntil, function () {
          var _S5 = S(["number"]),
              _S6 = _slicedToArray(_S5, 1),
              I = _S6[0];

          C.set(I);
        }).case(ye.start, function () {
          x = gt.start, i.inited();
        }).case(ye.start_sort, function () {
          x = gt.start_sort, i.inited();
        }).case(ye.move_list, function () {
          x = gt.start_sort, i.inited(), F--;
        }).default(function () {
          throw Error("need 'start'");
        });
      }).case(gt.start, function () {
        var I = D[F];

        if (I[0] !== ye.move_list) {
          var _wm2 = wm(i, c, x, p, s, C, E, {
            value: I,
            option: {},
            addtional_info: {
              where: [0, 0]
            },
            mv_ls: !1
          });

          x = _wm2.mode;
          c = _wm2.convertedTLdata;
          i = _wm2.TL;
        } else throw Error("start_sort ~ end_sort\u5185\u306Bmove_list\u3092\u66F8\u3044\u3066\u304F\u3060\u3055\u3044");
      }).case(gt.start_sort, function () {
        Mt(R).case(ye.move_list, function () {
          var _L = L(2, 0),
              _L2 = _slicedToArray(_L, 2),
              I = _L2[0],
              M = _L2[1],
              H = D[F][2];

          a[I] = H;
        }).case(ye.end_sort, function () {
          b(), x = gt.waiting_mode;
        }).default(function () {
          throw Qn("no command found:\u300C" + R + "\u300D");
        });
      }).case(gt.waiting_mode, function () {
        Mt(R).case(ye.start, function () {
          x = gt.start;
        }).case(ye.start_sort, function () {
          x = gt.start_sort;
        }).default(function () {
          throw Error("need 'start'");
        });
      }).default(function () {
        throw Error("\u5185\u90E8\u30A8\u30E9\u30FC");
      });
    };

    for (F = 0; F < e.length; F++) {
      _loop2();
    }

    x === gt.init && (i.inited(), x = gt.start_sort), x === gt.start_sort && b();
  } catch (R) {
    x === gt.start_sort ? A = R : A = "\u300C".concat(n.substring.apply(n, _toConsumableArray(e[F].addtional_info.where)), "\u300D : ").concat(R);
  }

  return {
    info: _,
    error: A,
    TL: i,
    ttk: m,
    convertedTLdata: c,
    chara_list: s,
    count_ttk_ls: p
  };
}

function n4(e, n) {
  var i = [];

  for (var s in e) {
    i.push(s);
  }

  var a = Array.from(new Array(Object.keys(e).length), function () {
    return new Array(n.current.length).fill(void 0);
  });
  return n.current.forEach(function (s, c) {
    var p = s.id,
        m = s.timeline_OrderValue,
        C = i.indexOf(p);
    s.nomove === !0 ? a[C][c] = "(".concat(m, ")") : a[C][c] = m;
  }), n.switchData.forEach(function (s) {
    var _s2 = _slicedToArray(s, 3),
        c = _s2[0],
        p = _s2[1],
        m = _s2[2],
        C = i.indexOf(p),
        x = i.indexOf(m);

    var _ = "";
    C < x ? _ = "\u2193\u2193" : _ = "\u2191\u2191", a[C][c] = _;
  }), n.cardData.forEach(function (s) {
    var c = i.indexOf(s[1]);
    a[c][s[0]] = "\u2192";
  }), {
    outputTL: a,
    chara_array: i
  };
}

var ai = {
  exports: {}
};

(function (e, n) {
  (function (i, a) {
    e.exports = a();
  })(eo, function () {
    var i = navigator.userAgent,
        a = navigator.platform,
        s = /gecko\/\d/i.test(i),
        c = /MSIE \d/.test(i),
        p = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(i),
        m = /Edge\/(\d+)/.exec(i),
        C = c || p || m,
        x = C && (c ? document.documentMode || 6 : +(m || p)[1]),
        _ = !m && /WebKit\//.test(i),
        A = _ && /Qt\/\d+\.\d+/.test(i),
        E = !m && /Chrome\//.test(i),
        b = /Opera\//.test(i),
        F = /Apple Computer/.test(navigator.vendor),
        D = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(i),
        R = /PhantomJS/.test(i),
        y = F && (/Mobile\/\w+/.test(i) || navigator.maxTouchPoints > 2),
        w = /Android/.test(i),
        S = y || w || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(i),
        L = y || /Mac/.test(a),
        O = /\bCrOS\b/.test(i),
        I = /win/i.test(a),
        M = b && i.match(/Version\/(\d*\.\d*)/);

    M && (M = Number(M[1])), M && M >= 15 && (b = !1, _ = !0);
    var H = L && (A || b && (M == null || M < 12.11)),
        ee = s || C && x >= 9;

    function q(t) {
      return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*");
    }

    var ue = function ue(t, r) {
      var o = t.className,
          l = q(r).exec(o);

      if (l) {
        var u = o.slice(l.index + l[0].length);
        t.className = o.slice(0, l.index) + (u ? l[1] + u : "");
      }
    };

    function he(t) {
      for (var r = t.childNodes.length; r > 0; --r) {
        t.removeChild(t.firstChild);
      }

      return t;
    }

    function me(t, r) {
      return he(t).appendChild(r);
    }

    function Y(t, r, o, l) {
      var u = document.createElement(t);
      if (o && (u.className = o), l && (u.style.cssText = l), typeof r == "string") u.appendChild(document.createTextNode(r));else if (r) for (var f = 0; f < r.length; ++f) {
        u.appendChild(r[f]);
      }
      return u;
    }

    function xe(t, r, o, l) {
      var u = Y(t, r, o, l);
      return u.setAttribute("role", "presentation"), u;
    }

    var U;
    document.createRange ? U = function U(t, r, o, l) {
      var u = document.createRange();
      return u.setEnd(l || t, o), u.setStart(t, r), u;
    } : U = function U(t, r, o) {
      var l = document.body.createTextRange();

      try {
        l.moveToElementText(t.parentNode);
      } catch (_unused21) {
        return l;
      }

      return l.collapse(!0), l.moveEnd("character", o), l.moveStart("character", r), l;
    };

    function V(t, r) {
      if (r.nodeType == 3 && (r = r.parentNode), t.contains) return t.contains(r);

      do {
        if (r.nodeType == 11 && (r = r.host), r == t) return !0;
      } while (r = r.parentNode);
    }

    function W() {
      var t;

      try {
        t = document.activeElement;
      } catch (_unused22) {
        t = document.body || null;
      }

      for (; t && t.shadowRoot && t.shadowRoot.activeElement;) {
        t = t.shadowRoot.activeElement;
      }

      return t;
    }

    function j(t, r) {
      var o = t.className;
      q(r).test(o) || (t.className += (o ? " " : "") + r);
    }

    function X(t, r) {
      for (var o = t.split(" "), l = 0; l < o.length; l++) {
        o[l] && !q(o[l]).test(r) && (r += " " + o[l]);
      }

      return r;
    }

    var ie = function ie(t) {
      t.select();
    };

    y ? ie = function ie(t) {
      t.selectionStart = 0, t.selectionEnd = t.value.length;
    } : C && (ie = function ie(t) {
      try {
        t.select();
      } catch (_unused23) {}
    });

    function se(t) {
      var r = Array.prototype.slice.call(arguments, 1);
      return function () {
        return t.apply(null, r);
      };
    }

    function Se(t, r, o) {
      r || (r = {});

      for (var l in t) {
        t.hasOwnProperty(l) && (o !== !1 || !r.hasOwnProperty(l)) && (r[l] = t[l]);
      }

      return r;
    }

    function ke(t, r, o, l, u) {
      r == null && (r = t.search(/[^\s\u00a0]/), r == -1 && (r = t.length));

      for (var f = l || 0, d = u || 0;;) {
        var h = t.indexOf("	", f);
        if (h < 0 || h >= r) return d + (r - f);
        d += h - f, d += o - d % o, f = h + 1;
      }
    }

    var Ze = function Ze() {
      this.id = null, this.f = null, this.time = 0, this.handler = se(this.onTimeout, this);
    };

    Ze.prototype.onTimeout = function (t) {
      t.id = 0, t.time <= +new Date() ? t.f() : setTimeout(t.handler, t.time - +new Date());
    }, Ze.prototype.set = function (t, r) {
      this.f = r;
      var o = +new Date() + t;
      (!this.id || o < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, t), this.time = o);
    };

    function be(t, r) {
      for (var o = 0; o < t.length; ++o) {
        if (t[o] == r) return o;
      }

      return -1;
    }

    var et = 50,
        Ar = {
      toString: function toString() {
        return "CodeMirror.Pass";
      }
    },
        Ct = {
      scroll: !1
    },
        fl = {
      origin: "*mouse"
    },
        Pn = {
      origin: "+move"
    };

    function cl(t, r, o) {
      for (var l = 0, u = 0;;) {
        var f = t.indexOf("	", l);
        f == -1 && (f = t.length);
        var d = f - l;
        if (f == t.length || u + d >= r) return l + Math.min(d, r - u);
        if (u += f - l, u += o - u % o, l = f + 1, u >= r) return l;
      }
    }

    var Fr = [""];

    function qn(t) {
      for (; Fr.length <= t;) {
        Fr.push(we(Fr) + " ");
      }

      return Fr[t];
    }

    function we(t) {
      return t[t.length - 1];
    }

    function Dr(t, r) {
      for (var o = [], l = 0; l < t.length; l++) {
        o[l] = r(t[l], l);
      }

      return o;
    }

    function $o(t, r, o) {
      for (var l = 0, u = o(r); l < t.length && o(t[l]) <= u;) {
        l++;
      }

      t.splice(l, 0, r);
    }

    function Lt() {}

    function bt(t, r) {
      var o;
      return Object.create ? o = Object.create(t) : (Lt.prototype = t, o = new Lt()), r && Se(r, o), o;
    }

    var Uo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

    function Or(t) {
      return /\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Uo.test(t));
    }

    function jo(t, r) {
      return r ? r.source.indexOf("\\w") > -1 && Or(t) ? !0 : r.test(t) : Or(t);
    }

    function Wd(t) {
      for (var r in t) {
        if (t.hasOwnProperty(r) && t[r]) return !1;
      }

      return !0;
    }

    var Cm = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

    function es(t) {
      return t.charCodeAt(0) >= 768 && Cm.test(t);
    }

    function $d(t, r, o) {
      for (; (o < 0 ? r > 0 : r < t.length) && es(t.charAt(r));) {
        r += o;
      }

      return r;
    }

    function dl(t, r, o) {
      for (var l = r > o ? -1 : 1;;) {
        if (r == o) return r;
        var u = (r + o) / 2,
            f = l < 0 ? Math.ceil(u) : Math.floor(u);
        if (f == r) return t(f) ? r : o;
        t(f) ? o = f : r = f + l;
      }
    }

    function Sm(t, r, o, l) {
      if (!t) return l(r, o, "ltr", 0);

      for (var u = !1, f = 0; f < t.length; ++f) {
        var d = t[f];
        (d.from < o && d.to > r || r == o && d.to == r) && (l(Math.max(d.from, r), Math.min(d.to, o), d.level == 1 ? "rtl" : "ltr", f), u = !0);
      }

      u || l(r, o, "ltr");
    }

    var hl = null;

    function pl(t, r, o) {
      var l;
      hl = null;

      for (var u = 0; u < t.length; ++u) {
        var f = t[u];
        if (f.from < r && f.to > r) return u;
        f.to == r && (f.from != f.to && o == "before" ? l = u : hl = u), f.from == r && (f.from != f.to && o != "before" ? l = u : hl = u);
      }

      return l != null ? l : hl;
    }

    var xm = function () {
      var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
          r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

      function o(g) {
        return g <= 247 ? t.charAt(g) : 1424 <= g && g <= 1524 ? "R" : 1536 <= g && g <= 1785 ? r.charAt(g - 1536) : 1774 <= g && g <= 2220 ? "r" : 8192 <= g && g <= 8203 ? "w" : g == 8204 ? "b" : "L";
      }

      var l = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
          u = /[stwN]/,
          f = /[LRr]/,
          d = /[Lb1n]/,
          h = /[1n]/;

      function v(g, k, T) {
        this.level = g, this.from = k, this.to = T;
      }

      return function (g, k) {
        var T = k == "ltr" ? "L" : "R";
        if (g.length == 0 || k == "ltr" && !l.test(g)) return !1;

        for (var P = g.length, N = [], z = 0; z < P; ++z) {
          N.push(o(g.charCodeAt(z)));
        }

        for (var $ = 0, G = T; $ < P; ++$) {
          var Z = N[$];
          Z == "m" ? N[$] = G : G = Z;
        }

        for (var te = 0, J = T; te < P; ++te) {
          var ne = N[te];
          ne == "1" && J == "r" ? N[te] = "n" : f.test(ne) && (J = ne, ne == "r" && (N[te] = "R"));
        }

        for (var fe = 1, ae = N[0]; fe < P - 1; ++fe) {
          var ge = N[fe];
          ge == "+" && ae == "1" && N[fe + 1] == "1" ? N[fe] = "1" : ge == "," && ae == N[fe + 1] && (ae == "1" || ae == "n") && (N[fe] = ae), ae = ge;
        }

        for (var Fe = 0; Fe < P; ++Fe) {
          var lt = N[Fe];
          if (lt == ",") N[Fe] = "N";else if (lt == "%") {
            var Ie = void 0;

            for (Ie = Fe + 1; Ie < P && N[Ie] == "%"; ++Ie) {
              ;
            }

            for (var Wt = Fe && N[Fe - 1] == "!" || Ie < P && N[Ie] == "1" ? "1" : "N", Ot = Fe; Ot < Ie; ++Ot) {
              N[Ot] = Wt;
            }

            Fe = Ie - 1;
          }
        }

        for (var Qe = 0, Nt = T; Qe < P; ++Qe) {
          var ft = N[Qe];
          Nt == "L" && ft == "1" ? N[Qe] = "L" : f.test(ft) && (Nt = ft);
        }

        for (var Je = 0; Je < P; ++Je) {
          if (u.test(N[Je])) {
            var Ye = void 0;

            for (Ye = Je + 1; Ye < P && u.test(N[Ye]); ++Ye) {
              ;
            }

            for (var He = (Je ? N[Je - 1] : T) == "L", Pt = (Ye < P ? N[Ye] : T) == "L", Ai = He == Pt ? He ? "L" : "R" : T, ar = Je; ar < Ye; ++ar) {
              N[ar] = Ai;
            }

            Je = Ye - 1;
          }
        }

        for (var vt = [], Tn, ot = 0; ot < P;) {
          if (d.test(N[ot])) {
            var of = ot;

            for (++ot; ot < P && d.test(N[ot]); ++ot) {
              ;
            }

            vt.push(new v(0, of, ot));
          } else {
            var Wn = ot,
                jr = vt.length,
                Kr = k == "rtl" ? 1 : 0;

            for (++ot; ot < P && N[ot] != "L"; ++ot) {
              ;
            }

            for (var xt = Wn; xt < ot;) {
              if (h.test(N[xt])) {
                Wn < xt && (vt.splice(jr, 0, new v(1, Wn, xt)), jr += Kr);
                var Fi = xt;

                for (++xt; xt < ot && h.test(N[xt]); ++xt) {
                  ;
                }

                vt.splice(jr, 0, new v(2, Fi, xt)), jr += Kr, Wn = xt;
              } else ++xt;
            }

            Wn < ot && vt.splice(jr, 0, new v(1, Wn, ot));
          }
        }

        return k == "ltr" && (vt[0].level == 1 && (Tn = g.match(/^\s+/)) && (vt[0].from = Tn[0].length, vt.unshift(new v(0, 0, Tn[0].length))), we(vt).level == 1 && (Tn = g.match(/\s+$/)) && (we(vt).to -= Tn[0].length, vt.push(new v(0, P - Tn[0].length, P)))), k == "rtl" ? vt.reverse() : vt;
      };
    }();

    function Bn(t, r) {
      var o = t.order;
      return o == null && (o = t.order = xm(t.text, r)), o;
    }

    var Ud = [],
        de = function de(t, r, o) {
      if (t.addEventListener) t.addEventListener(r, o, !1);else if (t.attachEvent) t.attachEvent("on" + r, o);else {
        var l = t._handlers || (t._handlers = {});
        l[r] = (l[r] || Ud).concat(o);
      }
    };

    function ts(t, r) {
      return t._handlers && t._handlers[r] || Ud;
    }

    function Qt(t, r, o) {
      if (t.removeEventListener) t.removeEventListener(r, o, !1);else if (t.detachEvent) t.detachEvent("on" + r, o);else {
        var l = t._handlers,
            u = l && l[r];

        if (u) {
          var f = be(u, o);
          f > -1 && (l[r] = u.slice(0, f).concat(u.slice(f + 1)));
        }
      }
    }

    function Ge(t, r) {
      var o = ts(t, r);
      if (!!o.length) for (var l = Array.prototype.slice.call(arguments, 2), u = 0; u < o.length; ++u) {
        o[u].apply(null, l);
      }
    }

    function tt(t, r, o) {
      return typeof r == "string" && (r = {
        type: r,
        preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }
      }), Ge(t, o || r.type, t, r), ns(r) || r.codemirrorIgnore;
    }

    function jd(t) {
      var r = t._handlers && t._handlers.cursorActivity;
      if (!!r) for (var o = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), l = 0; l < r.length; ++l) {
        be(o, r[l]) == -1 && o.push(r[l]);
      }
    }

    function nn(t, r) {
      return ts(t, r).length > 0;
    }

    function si(t) {
      t.prototype.on = function (r, o) {
        de(this, r, o);
      }, t.prototype.off = function (r, o) {
        Qt(this, r, o);
      };
    }

    function At(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }

    function Kd(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    }

    function ns(t) {
      return t.defaultPrevented != null ? t.defaultPrevented : t.returnValue == !1;
    }

    function vl(t) {
      At(t), Kd(t);
    }

    function rs(t) {
      return t.target || t.srcElement;
    }

    function Gd(t) {
      var r = t.which;
      return r == null && (t.button & 1 ? r = 1 : t.button & 2 ? r = 3 : t.button & 4 && (r = 2)), L && t.ctrlKey && r == 1 && (r = 3), r;
    }

    var km = function () {
      if (C && x < 9) return !1;
      var t = Y("div");
      return "draggable" in t || "dragDrop" in t;
    }(),
        is;

    function _m(t) {
      if (is == null) {
        var r = Y("span", "\u200B");
        me(t, Y("span", [r, document.createTextNode("x")])), t.firstChild.offsetHeight != 0 && (is = r.offsetWidth <= 1 && r.offsetHeight > 2 && !(C && x < 8));
      }

      var o = is ? Y("span", "\u200B") : Y("span", "\xA0", null, "display: inline-block; width: 1px; margin-right: -1px");
      return o.setAttribute("cm-text", ""), o;
    }

    var ls;

    function Em(t) {
      if (ls != null) return ls;
      var r = me(t, document.createTextNode("A\u062EA")),
          o = U(r, 0, 1).getBoundingClientRect(),
          l = U(r, 1, 2).getBoundingClientRect();
      return he(t), !o || o.left == o.right ? !1 : ls = l.right - o.right < 3;
    }

    var os = "\n\nb".split(/\n/).length != 3 ? function (t) {
      for (var r = 0, o = [], l = t.length; r <= l;) {
        var u = t.indexOf("\n", r);
        u == -1 && (u = t.length);
        var f = t.slice(r, t.charAt(u - 1) == "\r" ? u - 1 : u),
            d = f.indexOf("\r");
        d != -1 ? (o.push(f.slice(0, d)), r += d + 1) : (o.push(f), r = u + 1);
      }

      return o;
    } : function (t) {
      return t.split(/\r\n?|\n/);
    },
        Tm = window.getSelection ? function (t) {
      try {
        return t.selectionStart != t.selectionEnd;
      } catch (_unused24) {
        return !1;
      }
    } : function (t) {
      var r;

      try {
        r = t.ownerDocument.selection.createRange();
      } catch (_unused25) {}

      return !r || r.parentElement() != t ? !1 : r.compareEndPoints("StartToEnd", r) != 0;
    },
        Lm = function () {
      var t = Y("div");
      return "oncopy" in t ? !0 : (t.setAttribute("oncopy", "return;"), typeof t.oncopy == "function");
    }(),
        us = null;

    function bm(t) {
      if (us != null) return us;
      var r = me(t, Y("span", "x")),
          o = r.getBoundingClientRect(),
          l = U(r, 0, 1).getBoundingClientRect();
      return us = Math.abs(o.left - l.left) > 1;
    }

    var as = {},
        fi = {};

    function Am(t, r) {
      arguments.length > 2 && (r.dependencies = Array.prototype.slice.call(arguments, 2)), as[t] = r;
    }

    function Fm(t, r) {
      fi[t] = r;
    }

    function Ko(t) {
      if (typeof t == "string" && fi.hasOwnProperty(t)) t = fi[t];else if (t && typeof t.name == "string" && fi.hasOwnProperty(t.name)) {
        var r = fi[t.name];
        typeof r == "string" && (r = {
          name: r
        }), t = bt(r, t), t.name = r.name;
      } else {
        if (typeof t == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return Ko("application/xml");
        if (typeof t == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(t)) return Ko("application/json");
      }
      return typeof t == "string" ? {
        name: t
      } : t || {
        name: "null"
      };
    }

    function ss(t, r) {
      r = Ko(r);
      var o = as[r.name];
      if (!o) return ss(t, "text/plain");
      var l = o(t, r);

      if (ci.hasOwnProperty(r.name)) {
        var u = ci[r.name];

        for (var f in u) {
          !u.hasOwnProperty(f) || (l.hasOwnProperty(f) && (l["_" + f] = l[f]), l[f] = u[f]);
        }
      }

      if (l.name = r.name, r.helperType && (l.helperType = r.helperType), r.modeProps) for (var d in r.modeProps) {
        l[d] = r.modeProps[d];
      }
      return l;
    }

    var ci = {};

    function Dm(t, r) {
      var o = ci.hasOwnProperty(t) ? ci[t] : ci[t] = {};
      Se(r, o);
    }

    function Nr(t, r) {
      if (r === !0) return r;
      if (t.copyState) return t.copyState(r);
      var o = {};

      for (var l in r) {
        var u = r[l];
        u instanceof Array && (u = u.concat([])), o[l] = u;
      }

      return o;
    }

    function fs(t, r) {
      for (var o; t.innerMode && (o = t.innerMode(r), !(!o || o.mode == t));) {
        r = o.state, t = o.mode;
      }

      return o || {
        mode: t,
        state: r
      };
    }

    function Vd(t, r, o) {
      return t.startState ? t.startState(r, o) : !0;
    }

    var Ve = function Ve(t, r, o) {
      this.pos = this.start = 0, this.string = t, this.tabSize = r || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = o;
    };

    Ve.prototype.eol = function () {
      return this.pos >= this.string.length;
    }, Ve.prototype.sol = function () {
      return this.pos == this.lineStart;
    }, Ve.prototype.peek = function () {
      return this.string.charAt(this.pos) || void 0;
    }, Ve.prototype.next = function () {
      if (this.pos < this.string.length) return this.string.charAt(this.pos++);
    }, Ve.prototype.eat = function (t) {
      var r = this.string.charAt(this.pos),
          o;
      if (typeof t == "string" ? o = r == t : o = r && (t.test ? t.test(r) : t(r)), o) return ++this.pos, r;
    }, Ve.prototype.eatWhile = function (t) {
      for (var r = this.pos; this.eat(t);) {
        ;
      }

      return this.pos > r;
    }, Ve.prototype.eatSpace = function () {
      for (var t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
        ++this.pos;
      }

      return this.pos > t;
    }, Ve.prototype.skipToEnd = function () {
      this.pos = this.string.length;
    }, Ve.prototype.skipTo = function (t) {
      var r = this.string.indexOf(t, this.pos);
      if (r > -1) return this.pos = r, !0;
    }, Ve.prototype.backUp = function (t) {
      this.pos -= t;
    }, Ve.prototype.column = function () {
      return this.lastColumnPos < this.start && (this.lastColumnValue = ke(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? ke(this.string, this.lineStart, this.tabSize) : 0);
    }, Ve.prototype.indentation = function () {
      return ke(this.string, null, this.tabSize) - (this.lineStart ? ke(this.string, this.lineStart, this.tabSize) : 0);
    }, Ve.prototype.match = function (t, r, o) {
      if (typeof t == "string") {
        var l = function l(d) {
          return o ? d.toLowerCase() : d;
        },
            u = this.string.substr(this.pos, t.length);

        if (l(u) == l(t)) return r !== !1 && (this.pos += t.length), !0;
      } else {
        var f = this.string.slice(this.pos).match(t);
        return f && f.index > 0 ? null : (f && r !== !1 && (this.pos += f[0].length), f);
      }
    }, Ve.prototype.current = function () {
      return this.string.slice(this.start, this.pos);
    }, Ve.prototype.hideFirstChars = function (t, r) {
      this.lineStart += t;

      try {
        return r();
      } finally {
        this.lineStart -= t;
      }
    }, Ve.prototype.lookAhead = function (t) {
      var r = this.lineOracle;
      return r && r.lookAhead(t);
    }, Ve.prototype.baseToken = function () {
      var t = this.lineOracle;
      return t && t.baseToken(this.pos);
    };

    function oe(t, r) {
      if (r -= t.first, r < 0 || r >= t.size) throw new Error("There is no line " + (r + t.first) + " in the document.");

      for (var o = t; !o.lines;) {
        for (var l = 0;; ++l) {
          var u = o.children[l],
              f = u.chunkSize();

          if (r < f) {
            o = u;
            break;
          }

          r -= f;
        }
      }

      return o.lines[r];
    }

    function Pr(t, r, o) {
      var l = [],
          u = r.line;
      return t.iter(r.line, o.line + 1, function (f) {
        var d = f.text;
        u == o.line && (d = d.slice(0, o.ch)), u == r.line && (d = d.slice(r.ch)), l.push(d), ++u;
      }), l;
    }

    function cs(t, r, o) {
      var l = [];
      return t.iter(r, o, function (u) {
        l.push(u.text);
      }), l;
    }

    function xn(t, r) {
      var o = r - t.height;
      if (o) for (var l = t; l; l = l.parent) {
        l.height += o;
      }
    }

    function Te(t) {
      if (t.parent == null) return null;

      for (var r = t.parent, o = be(r.lines, t), l = r.parent; l; r = l, l = l.parent) {
        for (var u = 0; l.children[u] != r; ++u) {
          o += l.children[u].chunkSize();
        }
      }

      return o + r.first;
    }

    function Br(t, r) {
      var o = t.first;

      e: do {
        for (var l = 0; l < t.children.length; ++l) {
          var u = t.children[l],
              f = u.height;

          if (r < f) {
            t = u;
            continue e;
          }

          r -= f, o += u.chunkSize();
        }

        return o;
      } while (!t.lines);

      for (var d = 0; d < t.lines.length; ++d) {
        var h = t.lines[d],
            v = h.height;
        if (r < v) break;
        r -= v;
      }

      return o + d;
    }

    function gl(t, r) {
      return r >= t.first && r < t.first + t.size;
    }

    function ds(t, r) {
      return String(t.lineNumberFormatter(r + t.firstLineNumber));
    }

    function K(t, r, o) {
      if (o === void 0 && (o = null), !(this instanceof K)) return new K(t, r, o);
      this.line = t, this.ch = r, this.sticky = o;
    }

    function pe(t, r) {
      return t.line - r.line || t.ch - r.ch;
    }

    function hs(t, r) {
      return t.sticky == r.sticky && pe(t, r) == 0;
    }

    function ps(t) {
      return K(t.line, t.ch);
    }

    function Go(t, r) {
      return pe(t, r) < 0 ? r : t;
    }

    function Vo(t, r) {
      return pe(t, r) < 0 ? t : r;
    }

    function Qd(t, r) {
      return Math.max(t.first, Math.min(r, t.first + t.size - 1));
    }

    function ve(t, r) {
      if (r.line < t.first) return K(t.first, 0);
      var o = t.first + t.size - 1;
      return r.line > o ? K(o, oe(t, o).text.length) : Om(r, oe(t, r.line).text.length);
    }

    function Om(t, r) {
      var o = t.ch;
      return o == null || o > r ? K(t.line, r) : o < 0 ? K(t.line, 0) : t;
    }

    function Yd(t, r) {
      for (var o = [], l = 0; l < r.length; l++) {
        o[l] = ve(t, r[l]);
      }

      return o;
    }

    var Qo = function Qo(t, r) {
      this.state = t, this.lookAhead = r;
    },
        kn = function kn(t, r, o, l) {
      this.state = r, this.doc = t, this.line = o, this.maxLookAhead = l || 0, this.baseTokens = null, this.baseTokenPos = 1;
    };

    kn.prototype.lookAhead = function (t) {
      var r = this.doc.getLine(this.line + t);
      return r != null && t > this.maxLookAhead && (this.maxLookAhead = t), r;
    }, kn.prototype.baseToken = function (t) {
      if (!this.baseTokens) return null;

      for (; this.baseTokens[this.baseTokenPos] <= t;) {
        this.baseTokenPos += 2;
      }

      var r = this.baseTokens[this.baseTokenPos + 1];
      return {
        type: r && r.replace(/( |^)overlay .*/, ""),
        size: this.baseTokens[this.baseTokenPos] - t
      };
    }, kn.prototype.nextLine = function () {
      this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
    }, kn.fromSaved = function (t, r, o) {
      return r instanceof Qo ? new kn(t, Nr(t.mode, r.state), o, r.lookAhead) : new kn(t, Nr(t.mode, r), o);
    }, kn.prototype.save = function (t) {
      var r = t !== !1 ? Nr(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new Qo(r, this.maxLookAhead) : r;
    };

    function Xd(t, r, o, l) {
      var u = [t.state.modeGen],
          f = {};
      nh(t, r.text, t.doc.mode, o, function (g, k) {
        return u.push(g, k);
      }, f, l);

      for (var d = o.state, h = function h(g) {
        o.baseTokens = u;
        var k = t.state.overlays[g],
            T = 1,
            P = 0;
        o.state = !0, nh(t, r.text, k.mode, o, function (N, z) {
          for (var $ = T; P < N;) {
            var G = u[T];
            G > N && u.splice(T, 1, N, u[T + 1], G), T += 2, P = Math.min(N, G);
          }

          if (!!z) if (k.opaque) u.splice($, T - $, N, "overlay " + z), T = $ + 2;else for (; $ < T; $ += 2) {
            var Z = u[$ + 1];
            u[$ + 1] = (Z ? Z + " " : "") + "overlay " + z;
          }
        }, f), o.state = d, o.baseTokens = null, o.baseTokenPos = 1;
      }, v = 0; v < t.state.overlays.length; ++v) {
        h(v);
      }

      return {
        styles: u,
        classes: f.bgClass || f.textClass ? f : null
      };
    }

    function Zd(t, r, o) {
      if (!r.styles || r.styles[0] != t.state.modeGen) {
        var l = yl(t, Te(r)),
            u = r.text.length > t.options.maxHighlightLength && Nr(t.doc.mode, l.state),
            f = Xd(t, r, l);
        u && (l.state = u), r.stateAfter = l.save(!u), r.styles = f.styles, f.classes ? r.styleClasses = f.classes : r.styleClasses && (r.styleClasses = null), o === t.doc.highlightFrontier && (t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier));
      }

      return r.styles;
    }

    function yl(t, r, o) {
      var l = t.doc,
          u = t.display;
      if (!l.mode.startState) return new kn(l, !0, r);
      var f = Nm(t, r, o),
          d = f > l.first && oe(l, f - 1).stateAfter,
          h = d ? kn.fromSaved(l, d, f) : new kn(l, Vd(l.mode), f);
      return l.iter(f, r, function (v) {
        vs(t, v.text, h);
        var g = h.line;
        v.stateAfter = g == r - 1 || g % 5 == 0 || g >= u.viewFrom && g < u.viewTo ? h.save() : null, h.nextLine();
      }), o && (l.modeFrontier = h.line), h;
    }

    function vs(t, r, o, l) {
      var u = t.doc.mode,
          f = new Ve(r, t.options.tabSize, o);

      for (f.start = f.pos = l || 0, r == "" && Jd(u, o.state); !f.eol();) {
        gs(u, f, o.state), f.start = f.pos;
      }
    }

    function Jd(t, r) {
      if (t.blankLine) return t.blankLine(r);

      if (!!t.innerMode) {
        var o = fs(t, r);
        if (o.mode.blankLine) return o.mode.blankLine(o.state);
      }
    }

    function gs(t, r, o, l) {
      for (var u = 0; u < 10; u++) {
        l && (l[0] = fs(t, o).mode);
        var f = t.token(r, o);
        if (r.pos > r.start) return f;
      }

      throw new Error("Mode " + t.name + " failed to advance stream.");
    }

    var qd = function qd(t, r, o) {
      this.start = t.start, this.end = t.pos, this.string = t.current(), this.type = r || null, this.state = o;
    };

    function eh(t, r, o, l) {
      var u = t.doc,
          f = u.mode,
          d;
      r = ve(u, r);
      var h = oe(u, r.line),
          v = yl(t, r.line, o),
          g = new Ve(h.text, t.options.tabSize, v),
          k;

      for (l && (k = []); (l || g.pos < r.ch) && !g.eol();) {
        g.start = g.pos, d = gs(f, g, v.state), l && k.push(new qd(g, d, Nr(u.mode, v.state)));
      }

      return l ? k : new qd(g, d, v.state);
    }

    function th(t, r) {
      if (t) for (;;) {
        var o = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!o) break;
        t = t.slice(0, o.index) + t.slice(o.index + o[0].length);
        var l = o[1] ? "bgClass" : "textClass";
        r[l] == null ? r[l] = o[2] : new RegExp("(?:^|\\s)" + o[2] + "(?:$|\\s)").test(r[l]) || (r[l] += " " + o[2]);
      }
      return t;
    }

    function nh(t, r, o, l, u, f, d) {
      var h = o.flattenSpans;
      h == null && (h = t.options.flattenSpans);
      var v = 0,
          g = null,
          k = new Ve(r, t.options.tabSize, l),
          T,
          P = t.options.addModeClass && [null];

      for (r == "" && th(Jd(o, l.state), f); !k.eol();) {
        if (k.pos > t.options.maxHighlightLength ? (h = !1, d && vs(t, r, l, k.pos), k.pos = r.length, T = null) : T = th(gs(o, k, l.state, P), f), P) {
          var N = P[0].name;
          N && (T = "m-" + (T ? N + " " + T : N));
        }

        if (!h || g != T) {
          for (; v < k.start;) {
            v = Math.min(k.start, v + 5e3), u(v, g);
          }

          g = T;
        }

        k.start = k.pos;
      }

      for (; v < k.pos;) {
        var z = Math.min(k.pos, v + 5e3);
        u(z, g), v = z;
      }
    }

    function Nm(t, r, o) {
      for (var l, u, f = t.doc, d = o ? -1 : r - (t.doc.mode.innerMode ? 1e3 : 100), h = r; h > d; --h) {
        if (h <= f.first) return f.first;
        var v = oe(f, h - 1),
            g = v.stateAfter;
        if (g && (!o || h + (g instanceof Qo ? g.lookAhead : 0) <= f.modeFrontier)) return h;
        var k = ke(v.text, null, t.options.tabSize);
        (u == null || l > k) && (u = h - 1, l = k);
      }

      return u;
    }

    function Pm(t, r) {
      if (t.modeFrontier = Math.min(t.modeFrontier, r), !(t.highlightFrontier < r - 10)) {
        for (var o = t.first, l = r - 1; l > o; l--) {
          var u = oe(t, l).stateAfter;

          if (u && (!(u instanceof Qo) || l + u.lookAhead < r)) {
            o = l + 1;
            break;
          }
        }

        t.highlightFrontier = Math.min(t.highlightFrontier, o);
      }
    }

    var rh = !1,
        Mn = !1;

    function Bm() {
      rh = !0;
    }

    function Mm() {
      Mn = !0;
    }

    function Yo(t, r, o) {
      this.marker = t, this.from = r, this.to = o;
    }

    function ml(t, r) {
      if (t) for (var o = 0; o < t.length; ++o) {
        var l = t[o];
        if (l.marker == r) return l;
      }
    }

    function Im(t, r) {
      for (var o, l = 0; l < t.length; ++l) {
        t[l] != r && (o || (o = [])).push(t[l]);
      }

      return o;
    }

    function Rm(t, r, o) {
      var l = o && window.WeakSet && (o.markedSpans || (o.markedSpans = new WeakSet()));
      l && l.has(t.markedSpans) ? t.markedSpans.push(r) : (t.markedSpans = t.markedSpans ? t.markedSpans.concat([r]) : [r], l && l.add(t.markedSpans)), r.marker.attachLine(t);
    }

    function zm(t, r, o) {
      var l;
      if (t) for (var u = 0; u < t.length; ++u) {
        var f = t[u],
            d = f.marker,
            h = f.from == null || (d.inclusiveLeft ? f.from <= r : f.from < r);

        if (h || f.from == r && d.type == "bookmark" && (!o || !f.marker.insertLeft)) {
          var v = f.to == null || (d.inclusiveRight ? f.to >= r : f.to > r);
          (l || (l = [])).push(new Yo(d, f.from, v ? null : f.to));
        }
      }
      return l;
    }

    function Hm(t, r, o) {
      var l;
      if (t) for (var u = 0; u < t.length; ++u) {
        var f = t[u],
            d = f.marker,
            h = f.to == null || (d.inclusiveRight ? f.to >= r : f.to > r);

        if (h || f.from == r && d.type == "bookmark" && (!o || f.marker.insertLeft)) {
          var v = f.from == null || (d.inclusiveLeft ? f.from <= r : f.from < r);
          (l || (l = [])).push(new Yo(d, v ? null : f.from - r, f.to == null ? null : f.to - r));
        }
      }
      return l;
    }

    function ys(t, r) {
      if (r.full) return null;
      var o = gl(t, r.from.line) && oe(t, r.from.line).markedSpans,
          l = gl(t, r.to.line) && oe(t, r.to.line).markedSpans;
      if (!o && !l) return null;
      var u = r.from.ch,
          f = r.to.ch,
          d = pe(r.from, r.to) == 0,
          h = zm(o, u, d),
          v = Hm(l, f, d),
          g = r.text.length == 1,
          k = we(r.text).length + (g ? u : 0);
      if (h) for (var T = 0; T < h.length; ++T) {
        var P = h[T];

        if (P.to == null) {
          var N = ml(v, P.marker);
          N ? g && (P.to = N.to == null ? null : N.to + k) : P.to = u;
        }
      }
      if (v) for (var z = 0; z < v.length; ++z) {
        var $ = v[z];

        if ($.to != null && ($.to += k), $.from == null) {
          var G = ml(h, $.marker);
          G || ($.from = k, g && (h || (h = [])).push($));
        } else $.from += k, g && (h || (h = [])).push($);
      }
      h && (h = ih(h)), v && v != h && (v = ih(v));
      var Z = [h];

      if (!g) {
        var te = r.text.length - 2,
            J;
        if (te > 0 && h) for (var ne = 0; ne < h.length; ++ne) {
          h[ne].to == null && (J || (J = [])).push(new Yo(h[ne].marker, null, null));
        }

        for (var fe = 0; fe < te; ++fe) {
          Z.push(J);
        }

        Z.push(v);
      }

      return Z;
    }

    function ih(t) {
      for (var r = 0; r < t.length; ++r) {
        var o = t[r];
        o.from != null && o.from == o.to && o.marker.clearWhenEmpty !== !1 && t.splice(r--, 1);
      }

      return t.length ? t : null;
    }

    function Wm(t, r, o) {
      var l = null;
      if (t.iter(r.line, o.line + 1, function (N) {
        if (N.markedSpans) for (var z = 0; z < N.markedSpans.length; ++z) {
          var $ = N.markedSpans[z].marker;
          $.readOnly && (!l || be(l, $) == -1) && (l || (l = [])).push($);
        }
      }), !l) return null;

      for (var u = [{
        from: r,
        to: o
      }], f = 0; f < l.length; ++f) {
        for (var d = l[f], h = d.find(0), v = 0; v < u.length; ++v) {
          var g = u[v];

          if (!(pe(g.to, h.from) < 0 || pe(g.from, h.to) > 0)) {
            var k = [v, 1],
                T = pe(g.from, h.from),
                P = pe(g.to, h.to);
            (T < 0 || !d.inclusiveLeft && !T) && k.push({
              from: g.from,
              to: h.from
            }), (P > 0 || !d.inclusiveRight && !P) && k.push({
              from: h.to,
              to: g.to
            }), u.splice.apply(u, k), v += k.length - 3;
          }
        }
      }

      return u;
    }

    function lh(t) {
      var r = t.markedSpans;

      if (!!r) {
        for (var o = 0; o < r.length; ++o) {
          r[o].marker.detachLine(t);
        }

        t.markedSpans = null;
      }
    }

    function oh(t, r) {
      if (!!r) {
        for (var o = 0; o < r.length; ++o) {
          r[o].marker.attachLine(t);
        }

        t.markedSpans = r;
      }
    }

    function Xo(t) {
      return t.inclusiveLeft ? -1 : 0;
    }

    function Zo(t) {
      return t.inclusiveRight ? 1 : 0;
    }

    function ms(t, r) {
      var o = t.lines.length - r.lines.length;
      if (o != 0) return o;
      var l = t.find(),
          u = r.find(),
          f = pe(l.from, u.from) || Xo(t) - Xo(r);
      if (f) return -f;
      var d = pe(l.to, u.to) || Zo(t) - Zo(r);
      return d || r.id - t.id;
    }

    function uh(t, r) {
      var o = Mn && t.markedSpans,
          l;
      if (o) for (var u = void 0, f = 0; f < o.length; ++f) {
        u = o[f], u.marker.collapsed && (r ? u.from : u.to) == null && (!l || ms(l, u.marker) < 0) && (l = u.marker);
      }
      return l;
    }

    function ah(t) {
      return uh(t, !0);
    }

    function Jo(t) {
      return uh(t, !1);
    }

    function $m(t, r) {
      var o = Mn && t.markedSpans,
          l;
      if (o) for (var u = 0; u < o.length; ++u) {
        var f = o[u];
        f.marker.collapsed && (f.from == null || f.from < r) && (f.to == null || f.to > r) && (!l || ms(l, f.marker) < 0) && (l = f.marker);
      }
      return l;
    }

    function sh(t, r, o, l, u) {
      var f = oe(t, r),
          d = Mn && f.markedSpans;
      if (d) for (var h = 0; h < d.length; ++h) {
        var v = d[h];

        if (!!v.marker.collapsed) {
          var g = v.marker.find(0),
              k = pe(g.from, o) || Xo(v.marker) - Xo(u),
              T = pe(g.to, l) || Zo(v.marker) - Zo(u);
          if (!(k >= 0 && T <= 0 || k <= 0 && T >= 0) && (k <= 0 && (v.marker.inclusiveRight && u.inclusiveLeft ? pe(g.to, o) >= 0 : pe(g.to, o) > 0) || k >= 0 && (v.marker.inclusiveRight && u.inclusiveLeft ? pe(g.from, l) <= 0 : pe(g.from, l) < 0))) return !0;
        }
      }
    }

    function cn(t) {
      for (var r; r = ah(t);) {
        t = r.find(-1, !0).line;
      }

      return t;
    }

    function Um(t) {
      for (var r; r = Jo(t);) {
        t = r.find(1, !0).line;
      }

      return t;
    }

    function jm(t) {
      for (var r, o; r = Jo(t);) {
        t = r.find(1, !0).line, (o || (o = [])).push(t);
      }

      return o;
    }

    function ws(t, r) {
      var o = oe(t, r),
          l = cn(o);
      return o == l ? r : Te(l);
    }

    function fh(t, r) {
      if (r > t.lastLine()) return r;
      var o = oe(t, r),
          l;
      if (!er(t, o)) return r;

      for (; l = Jo(o);) {
        o = l.find(1, !0).line;
      }

      return Te(o) + 1;
    }

    function er(t, r) {
      var o = Mn && r.markedSpans;

      if (o) {
        for (var l = void 0, u = 0; u < o.length; ++u) {
          if (l = o[u], !!l.marker.collapsed) {
            if (l.from == null) return !0;
            if (!l.marker.widgetNode && l.from == 0 && l.marker.inclusiveLeft && Cs(t, r, l)) return !0;
          }
        }
      }
    }

    function Cs(t, r, o) {
      if (o.to == null) {
        var l = o.marker.find(1, !0);
        return Cs(t, l.line, ml(l.line.markedSpans, o.marker));
      }

      if (o.marker.inclusiveRight && o.to == r.text.length) return !0;

      for (var u = void 0, f = 0; f < r.markedSpans.length; ++f) {
        if (u = r.markedSpans[f], u.marker.collapsed && !u.marker.widgetNode && u.from == o.to && (u.to == null || u.to != o.from) && (u.marker.inclusiveLeft || o.marker.inclusiveRight) && Cs(t, r, u)) return !0;
      }
    }

    function In(t) {
      t = cn(t);

      for (var r = 0, o = t.parent, l = 0; l < o.lines.length; ++l) {
        var u = o.lines[l];
        if (u == t) break;
        r += u.height;
      }

      for (var f = o.parent; f; o = f, f = o.parent) {
        for (var d = 0; d < f.children.length; ++d) {
          var h = f.children[d];
          if (h == o) break;
          r += h.height;
        }
      }

      return r;
    }

    function qo(t) {
      if (t.height == 0) return 0;

      for (var r = t.text.length, o, l = t; o = ah(l);) {
        var u = o.find(0, !0);
        l = u.from.line, r += u.from.ch - u.to.ch;
      }

      for (l = t; o = Jo(l);) {
        var f = o.find(0, !0);
        r -= l.text.length - f.from.ch, l = f.to.line, r += l.text.length - f.to.ch;
      }

      return r;
    }

    function Ss(t) {
      var r = t.display,
          o = t.doc;
      r.maxLine = oe(o, o.first), r.maxLineLength = qo(r.maxLine), r.maxLineChanged = !0, o.iter(function (l) {
        var u = qo(l);
        u > r.maxLineLength && (r.maxLineLength = u, r.maxLine = l);
      });
    }

    var di = function di(t, r, o) {
      this.text = t, oh(this, r), this.height = o ? o(this) : 1;
    };

    di.prototype.lineNo = function () {
      return Te(this);
    }, si(di);

    function Km(t, r, o, l) {
      t.text = r, t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null), t.order != null && (t.order = null), lh(t), oh(t, o);
      var u = l ? l(t) : 1;
      u != t.height && xn(t, u);
    }

    function Gm(t) {
      t.parent = null, lh(t);
    }

    var Vm = {},
        Qm = {};

    function ch(t, r) {
      if (!t || /^\s*$/.test(t)) return null;
      var o = r.addModeClass ? Qm : Vm;
      return o[t] || (o[t] = t.replace(/\S+/g, "cm-$&"));
    }

    function dh(t, r) {
      var o = xe("span", null, null, _ ? "padding-right: .1px" : null),
          l = {
        pre: xe("pre", [o], "CodeMirror-line"),
        content: o,
        col: 0,
        pos: 0,
        cm: t,
        trailingSpace: !1,
        splitSpaces: t.getOption("lineWrapping")
      };
      r.measure = {};

      for (var u = 0; u <= (r.rest ? r.rest.length : 0); u++) {
        var f = u ? r.rest[u - 1] : r.line,
            d = void 0;
        l.pos = 0, l.addToken = Xm, Em(t.display.measure) && (d = Bn(f, t.doc.direction)) && (l.addToken = Jm(l.addToken, d)), l.map = [];
        var h = r != t.display.externalMeasured && Te(f);
        qm(f, l, Zd(t, f, h)), f.styleClasses && (f.styleClasses.bgClass && (l.bgClass = X(f.styleClasses.bgClass, l.bgClass || "")), f.styleClasses.textClass && (l.textClass = X(f.styleClasses.textClass, l.textClass || ""))), l.map.length == 0 && l.map.push(0, 0, l.content.appendChild(_m(t.display.measure))), u == 0 ? (r.measure.map = l.map, r.measure.cache = {}) : ((r.measure.maps || (r.measure.maps = [])).push(l.map), (r.measure.caches || (r.measure.caches = [])).push({}));
      }

      if (_) {
        var v = l.content.lastChild;
        (/\bcm-tab\b/.test(v.className) || v.querySelector && v.querySelector(".cm-tab")) && (l.content.className = "cm-tab-wrap-hack");
      }

      return Ge(t, "renderLine", t, r.line, l.pre), l.pre.className && (l.textClass = X(l.pre.className, l.textClass || "")), l;
    }

    function Ym(t) {
      var r = Y("span", "\u2022", "cm-invalidchar");
      return r.title = "\\u" + t.charCodeAt(0).toString(16), r.setAttribute("aria-label", r.title), r;
    }

    function Xm(t, r, o, l, u, f, d) {
      if (!!r) {
        var h = t.splitSpaces ? Zm(r, t.trailingSpace) : r,
            v = t.cm.state.specialChars,
            g = !1,
            k;
        if (!v.test(r)) t.col += r.length, k = document.createTextNode(h), t.map.push(t.pos, t.pos + r.length, k), C && x < 9 && (g = !0), t.pos += r.length;else {
          k = document.createDocumentFragment();

          for (var T = 0;;) {
            v.lastIndex = T;
            var P = v.exec(r),
                N = P ? P.index - T : r.length - T;

            if (N) {
              var z = document.createTextNode(h.slice(T, T + N));
              C && x < 9 ? k.appendChild(Y("span", [z])) : k.appendChild(z), t.map.push(t.pos, t.pos + N, z), t.col += N, t.pos += N;
            }

            if (!P) break;
            T += N + 1;
            var $ = void 0;

            if (P[0] == "	") {
              var G = t.cm.options.tabSize,
                  Z = G - t.col % G;
              $ = k.appendChild(Y("span", qn(Z), "cm-tab")), $.setAttribute("role", "presentation"), $.setAttribute("cm-text", "	"), t.col += Z;
            } else P[0] == "\r" || P[0] == "\n" ? ($ = k.appendChild(Y("span", P[0] == "\r" ? "\u240D" : "\u2424", "cm-invalidchar")), $.setAttribute("cm-text", P[0]), t.col += 1) : ($ = t.cm.options.specialCharPlaceholder(P[0]), $.setAttribute("cm-text", P[0]), C && x < 9 ? k.appendChild(Y("span", [$])) : k.appendChild($), t.col += 1);

            t.map.push(t.pos, t.pos + 1, $), t.pos++;
          }
        }

        if (t.trailingSpace = h.charCodeAt(r.length - 1) == 32, o || l || u || g || f || d) {
          var te = o || "";
          l && (te += l), u && (te += u);
          var J = Y("span", [k], te, f);
          if (d) for (var ne in d) {
            d.hasOwnProperty(ne) && ne != "style" && ne != "class" && J.setAttribute(ne, d[ne]);
          }
          return t.content.appendChild(J);
        }

        t.content.appendChild(k);
      }
    }

    function Zm(t, r) {
      if (t.length > 1 && !/  /.test(t)) return t;

      for (var o = r, l = "", u = 0; u < t.length; u++) {
        var f = t.charAt(u);
        f == " " && o && (u == t.length - 1 || t.charCodeAt(u + 1) == 32) && (f = "\xA0"), l += f, o = f == " ";
      }

      return l;
    }

    function Jm(t, r) {
      return function (o, l, u, f, d, h, v) {
        u = u ? u + " cm-force-border" : "cm-force-border";

        for (var g = o.pos, k = g + l.length;;) {
          for (var T = void 0, P = 0; P < r.length && (T = r[P], !(T.to > g && T.from <= g)); P++) {
            ;
          }

          if (T.to >= k) return t(o, l, u, f, d, h, v);
          t(o, l.slice(0, T.to - g), u, f, null, h, v), f = null, l = l.slice(T.to - g), g = T.to;
        }
      };
    }

    function hh(t, r, o, l) {
      var u = !l && o.widgetNode;
      u && t.map.push(t.pos, t.pos + r, u), !l && t.cm.display.input.needsContentAttribute && (u || (u = t.content.appendChild(document.createElement("span"))), u.setAttribute("cm-marker", o.id)), u && (t.cm.display.input.setUneditable(u), t.content.appendChild(u)), t.pos += r, t.trailingSpace = !1;
    }

    function qm(t, r, o) {
      var l = t.markedSpans,
          u = t.text,
          f = 0;

      if (!l) {
        for (var d = 1; d < o.length; d += 2) {
          r.addToken(r, u.slice(f, f = o[d]), ch(o[d + 1], r.cm.options));
        }

        return;
      }

      for (var h = u.length, v = 0, g = 1, k = "", T, P, N = 0, z, $, G, Z, te;;) {
        if (N == v) {
          z = $ = G = P = "", te = null, Z = null, N = 1 / 0;

          for (var J = [], ne = void 0, fe = 0; fe < l.length; ++fe) {
            var ae = l[fe],
                ge = ae.marker;
            if (ge.type == "bookmark" && ae.from == v && ge.widgetNode) J.push(ge);else if (ae.from <= v && (ae.to == null || ae.to > v || ge.collapsed && ae.to == v && ae.from == v)) {
              if (ae.to != null && ae.to != v && N > ae.to && (N = ae.to, $ = ""), ge.className && (z += " " + ge.className), ge.css && (P = (P ? P + ";" : "") + ge.css), ge.startStyle && ae.from == v && (G += " " + ge.startStyle), ge.endStyle && ae.to == N && (ne || (ne = [])).push(ge.endStyle, ae.to), ge.title && ((te || (te = {})).title = ge.title), ge.attributes) for (var Fe in ge.attributes) {
                (te || (te = {}))[Fe] = ge.attributes[Fe];
              }
              ge.collapsed && (!Z || ms(Z.marker, ge) < 0) && (Z = ae);
            } else ae.from > v && N > ae.from && (N = ae.from);
          }

          if (ne) for (var lt = 0; lt < ne.length; lt += 2) {
            ne[lt + 1] == N && ($ += " " + ne[lt]);
          }
          if (!Z || Z.from == v) for (var Ie = 0; Ie < J.length; ++Ie) {
            hh(r, 0, J[Ie]);
          }

          if (Z && (Z.from || 0) == v) {
            if (hh(r, (Z.to == null ? h + 1 : Z.to) - v, Z.marker, Z.from == null), Z.to == null) return;
            Z.to == v && (Z = !1);
          }
        }

        if (v >= h) break;

        for (var Wt = Math.min(h, N);;) {
          if (k) {
            var Ot = v + k.length;

            if (!Z) {
              var Qe = Ot > Wt ? k.slice(0, Wt - v) : k;
              r.addToken(r, Qe, T ? T + z : z, G, v + Qe.length == N ? $ : "", P, te);
            }

            if (Ot >= Wt) {
              k = k.slice(Wt - v), v = Wt;
              break;
            }

            v = Ot, G = "";
          }

          k = u.slice(f, f = o[g++]), T = ch(o[g++], r.cm.options);
        }
      }
    }

    function ph(t, r, o) {
      this.line = r, this.rest = jm(r), this.size = this.rest ? Te(we(this.rest)) - o + 1 : 1, this.node = this.text = null, this.hidden = er(t, r);
    }

    function eu(t, r, o) {
      for (var l = [], u, f = r; f < o; f = u) {
        var d = new ph(t.doc, oe(t.doc, f), f);
        u = f + d.size, l.push(d);
      }

      return l;
    }

    var hi = null;

    function e1(t) {
      hi ? hi.ops.push(t) : t.ownsGroup = hi = {
        ops: [t],
        delayedCallbacks: []
      };
    }

    function t1(t) {
      var r = t.delayedCallbacks,
          o = 0;

      do {
        for (; o < r.length; o++) {
          r[o].call(null);
        }

        for (var l = 0; l < t.ops.length; l++) {
          var u = t.ops[l];
          if (u.cursorActivityHandlers) for (; u.cursorActivityCalled < u.cursorActivityHandlers.length;) {
            u.cursorActivityHandlers[u.cursorActivityCalled++].call(null, u.cm);
          }
        }
      } while (o < r.length);
    }

    function n1(t, r) {
      var o = t.ownsGroup;
      if (!!o) try {
        t1(o);
      } finally {
        hi = null, r(o);
      }
    }

    var wl = null;

    function nt(t, r) {
      var o = ts(t, r);

      if (!!o.length) {
        var l = Array.prototype.slice.call(arguments, 2),
            u;
        hi ? u = hi.delayedCallbacks : wl ? u = wl : (u = wl = [], setTimeout(r1, 0));

        for (var f = function f(h) {
          u.push(function () {
            return o[h].apply(null, l);
          });
        }, d = 0; d < o.length; ++d) {
          f(d);
        }
      }
    }

    function r1() {
      var t = wl;
      wl = null;

      for (var r = 0; r < t.length; ++r) {
        t[r]();
      }
    }

    function vh(t, r, o, l) {
      for (var u = 0; u < r.changes.length; u++) {
        var f = r.changes[u];
        f == "text" ? l1(t, r) : f == "gutter" ? yh(t, r, o, l) : f == "class" ? xs(t, r) : f == "widget" && o1(t, r, l);
      }

      r.changes = null;
    }

    function Cl(t) {
      return t.node == t.text && (t.node = Y("div", null, null, "position: relative"), t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text), t.node.appendChild(t.text), C && x < 8 && (t.node.style.zIndex = 2)), t.node;
    }

    function i1(t, r) {
      var o = r.bgClass ? r.bgClass + " " + (r.line.bgClass || "") : r.line.bgClass;
      if (o && (o += " CodeMirror-linebackground"), r.background) o ? r.background.className = o : (r.background.parentNode.removeChild(r.background), r.background = null);else if (o) {
        var l = Cl(r);
        r.background = l.insertBefore(Y("div", null, o), l.firstChild), t.display.input.setUneditable(r.background);
      }
    }

    function gh(t, r) {
      var o = t.display.externalMeasured;
      return o && o.line == r.line ? (t.display.externalMeasured = null, r.measure = o.measure, o.built) : dh(t, r);
    }

    function l1(t, r) {
      var o = r.text.className,
          l = gh(t, r);
      r.text == r.node && (r.node = l.pre), r.text.parentNode.replaceChild(l.pre, r.text), r.text = l.pre, l.bgClass != r.bgClass || l.textClass != r.textClass ? (r.bgClass = l.bgClass, r.textClass = l.textClass, xs(t, r)) : o && (r.text.className = o);
    }

    function xs(t, r) {
      i1(t, r), r.line.wrapClass ? Cl(r).className = r.line.wrapClass : r.node != r.text && (r.node.className = "");
      var o = r.textClass ? r.textClass + " " + (r.line.textClass || "") : r.line.textClass;
      r.text.className = o || "";
    }

    function yh(t, r, o, l) {
      if (r.gutter && (r.node.removeChild(r.gutter), r.gutter = null), r.gutterBackground && (r.node.removeChild(r.gutterBackground), r.gutterBackground = null), r.line.gutterClass) {
        var u = Cl(r);
        r.gutterBackground = Y("div", null, "CodeMirror-gutter-background " + r.line.gutterClass, "left: " + (t.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) + "px; width: " + l.gutterTotalWidth + "px"), t.display.input.setUneditable(r.gutterBackground), u.insertBefore(r.gutterBackground, r.text);
      }

      var f = r.line.gutterMarkers;

      if (t.options.lineNumbers || f) {
        var d = Cl(r),
            h = r.gutter = Y("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? l.fixedPos : -l.gutterTotalWidth) + "px");
        if (h.setAttribute("aria-hidden", "true"), t.display.input.setUneditable(h), d.insertBefore(h, r.text), r.line.gutterClass && (h.className += " " + r.line.gutterClass), t.options.lineNumbers && (!f || !f["CodeMirror-linenumbers"]) && (r.lineNumber = h.appendChild(Y("div", ds(t.options, o), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + l.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth + "px"))), f) for (var v = 0; v < t.display.gutterSpecs.length; ++v) {
          var g = t.display.gutterSpecs[v].className,
              k = f.hasOwnProperty(g) && f[g];
          k && h.appendChild(Y("div", [k], "CodeMirror-gutter-elt", "left: " + l.gutterLeft[g] + "px; width: " + l.gutterWidth[g] + "px"));
        }
      }
    }

    function o1(t, r, o) {
      r.alignable && (r.alignable = null);

      for (var l = q("CodeMirror-linewidget"), u = r.node.firstChild, f = void 0; u; u = f) {
        f = u.nextSibling, l.test(u.className) && r.node.removeChild(u);
      }

      mh(t, r, o);
    }

    function u1(t, r, o, l) {
      var u = gh(t, r);
      return r.text = r.node = u.pre, u.bgClass && (r.bgClass = u.bgClass), u.textClass && (r.textClass = u.textClass), xs(t, r), yh(t, r, o, l), mh(t, r, l), r.node;
    }

    function mh(t, r, o) {
      if (wh(t, r.line, r, o, !0), r.rest) for (var l = 0; l < r.rest.length; l++) {
        wh(t, r.rest[l], r, o, !1);
      }
    }

    function wh(t, r, o, l, u) {
      if (!!r.widgets) for (var f = Cl(o), d = 0, h = r.widgets; d < h.length; ++d) {
        var v = h[d],
            g = Y("div", [v.node], "CodeMirror-linewidget" + (v.className ? " " + v.className : ""));
        v.handleMouseEvents || g.setAttribute("cm-ignore-events", "true"), a1(v, g, o, l), t.display.input.setUneditable(g), u && v.above ? f.insertBefore(g, o.gutter || o.text) : f.appendChild(g), nt(v, "redraw");
      }
    }

    function a1(t, r, o, l) {
      if (t.noHScroll) {
        (o.alignable || (o.alignable = [])).push(r);
        var u = l.wrapperWidth;
        r.style.left = l.fixedPos + "px", t.coverGutter || (u -= l.gutterTotalWidth, r.style.paddingLeft = l.gutterTotalWidth + "px"), r.style.width = u + "px";
      }

      t.coverGutter && (r.style.zIndex = 5, r.style.position = "relative", t.noHScroll || (r.style.marginLeft = -l.gutterTotalWidth + "px"));
    }

    function Sl(t) {
      if (t.height != null) return t.height;
      var r = t.doc.cm;
      if (!r) return 0;

      if (!V(document.body, t.node)) {
        var o = "position: relative;";
        t.coverGutter && (o += "margin-left: -" + r.display.gutters.offsetWidth + "px;"), t.noHScroll && (o += "width: " + r.display.wrapper.clientWidth + "px;"), me(r.display.measure, Y("div", [t.node], null, o));
      }

      return t.height = t.node.parentNode.offsetHeight;
    }

    function Rn(t, r) {
      for (var o = rs(r); o != t.wrapper; o = o.parentNode) {
        if (!o || o.nodeType == 1 && o.getAttribute("cm-ignore-events") == "true" || o.parentNode == t.sizer && o != t.mover) return !0;
      }
    }

    function tu(t) {
      return t.lineSpace.offsetTop;
    }

    function ks(t) {
      return t.mover.offsetHeight - t.lineSpace.offsetHeight;
    }

    function Ch(t) {
      if (t.cachedPaddingH) return t.cachedPaddingH;
      var r = me(t.measure, Y("pre", "x", "CodeMirror-line-like")),
          o = window.getComputedStyle ? window.getComputedStyle(r) : r.currentStyle,
          l = {
        left: parseInt(o.paddingLeft),
        right: parseInt(o.paddingRight)
      };
      return !isNaN(l.left) && !isNaN(l.right) && (t.cachedPaddingH = l), l;
    }

    function _n(t) {
      return et - t.display.nativeBarWidth;
    }

    function Mr(t) {
      return t.display.scroller.clientWidth - _n(t) - t.display.barWidth;
    }

    function _s(t) {
      return t.display.scroller.clientHeight - _n(t) - t.display.barHeight;
    }

    function s1(t, r, o) {
      var l = t.options.lineWrapping,
          u = l && Mr(t);

      if (!r.measure.heights || l && r.measure.width != u) {
        var f = r.measure.heights = [];

        if (l) {
          r.measure.width = u;

          for (var d = r.text.firstChild.getClientRects(), h = 0; h < d.length - 1; h++) {
            var v = d[h],
                g = d[h + 1];
            Math.abs(v.bottom - g.bottom) > 2 && f.push((v.bottom + g.top) / 2 - o.top);
          }
        }

        f.push(o.bottom - o.top);
      }
    }

    function Sh(t, r, o) {
      if (t.line == r) return {
        map: t.measure.map,
        cache: t.measure.cache
      };

      if (t.rest) {
        for (var l = 0; l < t.rest.length; l++) {
          if (t.rest[l] == r) return {
            map: t.measure.maps[l],
            cache: t.measure.caches[l]
          };
        }

        for (var u = 0; u < t.rest.length; u++) {
          if (Te(t.rest[u]) > o) return {
            map: t.measure.maps[u],
            cache: t.measure.caches[u],
            before: !0
          };
        }
      }
    }

    function f1(t, r) {
      r = cn(r);
      var o = Te(r),
          l = t.display.externalMeasured = new ph(t.doc, r, o);
      l.lineN = o;
      var u = l.built = dh(t, l);
      return l.text = u.pre, me(t.display.lineMeasure, u.pre), l;
    }

    function xh(t, r, o, l) {
      return En(t, pi(t, r), o, l);
    }

    function Es(t, r) {
      if (r >= t.display.viewFrom && r < t.display.viewTo) return t.display.view[zr(t, r)];
      var o = t.display.externalMeasured;
      if (o && r >= o.lineN && r < o.lineN + o.size) return o;
    }

    function pi(t, r) {
      var o = Te(r),
          l = Es(t, o);
      l && !l.text ? l = null : l && l.changes && (vh(t, l, o, Fs(t)), t.curOp.forceUpdate = !0), l || (l = f1(t, r));
      var u = Sh(l, r, o);
      return {
        line: r,
        view: l,
        rect: null,
        map: u.map,
        cache: u.cache,
        before: u.before,
        hasHeights: !1
      };
    }

    function En(t, r, o, l, u) {
      r.before && (o = -1);
      var f = o + (l || ""),
          d;
      return r.cache.hasOwnProperty(f) ? d = r.cache[f] : (r.rect || (r.rect = r.view.text.getBoundingClientRect()), r.hasHeights || (s1(t, r.view, r.rect), r.hasHeights = !0), d = d1(t, r, o, l), d.bogus || (r.cache[f] = d)), {
        left: d.left,
        right: d.right,
        top: u ? d.rtop : d.top,
        bottom: u ? d.rbottom : d.bottom
      };
    }

    var kh = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };

    function _h(t, r, o) {
      for (var l, u, f, d, h, v, g = 0; g < t.length; g += 3) {
        if (h = t[g], v = t[g + 1], r < h ? (u = 0, f = 1, d = "left") : r < v ? (u = r - h, f = u + 1) : (g == t.length - 3 || r == v && t[g + 3] > r) && (f = v - h, u = f - 1, r >= v && (d = "right")), u != null) {
          if (l = t[g + 2], h == v && o == (l.insertLeft ? "left" : "right") && (d = o), o == "left" && u == 0) for (; g && t[g - 2] == t[g - 3] && t[g - 1].insertLeft;) {
            l = t[(g -= 3) + 2], d = "left";
          }
          if (o == "right" && u == v - h) for (; g < t.length - 3 && t[g + 3] == t[g + 4] && !t[g + 5].insertLeft;) {
            l = t[(g += 3) + 2], d = "right";
          }
          break;
        }
      }

      return {
        node: l,
        start: u,
        end: f,
        collapse: d,
        coverStart: h,
        coverEnd: v
      };
    }

    function c1(t, r) {
      var o = kh;
      if (r == "left") for (var l = 0; l < t.length && (o = t[l]).left == o.right; l++) {
        ;
      } else for (var u = t.length - 1; u >= 0 && (o = t[u]).left == o.right; u--) {
        ;
      }
      return o;
    }

    function d1(t, r, o, l) {
      var u = _h(r.map, o, l),
          f = u.node,
          d = u.start,
          h = u.end,
          v = u.collapse,
          g;

      if (f.nodeType == 3) {
        for (var k = 0; k < 4; k++) {
          for (; d && es(r.line.text.charAt(u.coverStart + d));) {
            --d;
          }

          for (; u.coverStart + h < u.coverEnd && es(r.line.text.charAt(u.coverStart + h));) {
            ++h;
          }

          if (C && x < 9 && d == 0 && h == u.coverEnd - u.coverStart ? g = f.parentNode.getBoundingClientRect() : g = c1(U(f, d, h).getClientRects(), l), g.left || g.right || d == 0) break;
          h = d, d = d - 1, v = "right";
        }

        C && x < 11 && (g = h1(t.display.measure, g));
      } else {
        d > 0 && (v = l = "right");
        var T;
        t.options.lineWrapping && (T = f.getClientRects()).length > 1 ? g = T[l == "right" ? T.length - 1 : 0] : g = f.getBoundingClientRect();
      }

      if (C && x < 9 && !d && (!g || !g.left && !g.right)) {
        var P = f.parentNode.getClientRects()[0];
        P ? g = {
          left: P.left,
          right: P.left + gi(t.display),
          top: P.top,
          bottom: P.bottom
        } : g = kh;
      }

      for (var N = g.top - r.rect.top, z = g.bottom - r.rect.top, $ = (N + z) / 2, G = r.view.measure.heights, Z = 0; Z < G.length - 1 && !($ < G[Z]); Z++) {
        ;
      }

      var te = Z ? G[Z - 1] : 0,
          J = G[Z],
          ne = {
        left: (v == "right" ? g.right : g.left) - r.rect.left,
        right: (v == "left" ? g.left : g.right) - r.rect.left,
        top: te,
        bottom: J
      };
      return !g.left && !g.right && (ne.bogus = !0), t.options.singleCursorHeightPerLine || (ne.rtop = N, ne.rbottom = z), ne;
    }

    function h1(t, r) {
      if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !bm(t)) return r;
      var o = screen.logicalXDPI / screen.deviceXDPI,
          l = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: r.left * o,
        right: r.right * o,
        top: r.top * l,
        bottom: r.bottom * l
      };
    }

    function Eh(t) {
      if (t.measure && (t.measure.cache = {}, t.measure.heights = null, t.rest)) for (var r = 0; r < t.rest.length; r++) {
        t.measure.caches[r] = {};
      }
    }

    function Th(t) {
      t.display.externalMeasure = null, he(t.display.lineMeasure);

      for (var r = 0; r < t.display.view.length; r++) {
        Eh(t.display.view[r]);
      }
    }

    function xl(t) {
      Th(t), t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null, t.options.lineWrapping || (t.display.maxLineChanged = !0), t.display.lineNumChars = null;
    }

    function Lh() {
      return E && w ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
    }

    function bh() {
      return E && w ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
    }

    function Ts(t) {
      var r = cn(t),
          o = r.widgets,
          l = 0;
      if (o) for (var u = 0; u < o.length; ++u) {
        o[u].above && (l += Sl(o[u]));
      }
      return l;
    }

    function nu(t, r, o, l, u) {
      if (!u) {
        var f = Ts(r);
        o.top += f, o.bottom += f;
      }

      if (l == "line") return o;
      l || (l = "local");
      var d = In(r);

      if (l == "local" ? d += tu(t.display) : d -= t.display.viewOffset, l == "page" || l == "window") {
        var h = t.display.lineSpace.getBoundingClientRect();
        d += h.top + (l == "window" ? 0 : bh());
        var v = h.left + (l == "window" ? 0 : Lh());
        o.left += v, o.right += v;
      }

      return o.top += d, o.bottom += d, o;
    }

    function Ah(t, r, o) {
      if (o == "div") return r;
      var l = r.left,
          u = r.top;
      if (o == "page") l -= Lh(), u -= bh();else if (o == "local" || !o) {
        var f = t.display.sizer.getBoundingClientRect();
        l += f.left, u += f.top;
      }
      var d = t.display.lineSpace.getBoundingClientRect();
      return {
        left: l - d.left,
        top: u - d.top
      };
    }

    function ru(t, r, o, l, u) {
      return l || (l = oe(t.doc, r.line)), nu(t, l, xh(t, l, r.ch, u), o);
    }

    function dn(t, r, o, l, u, f) {
      l = l || oe(t.doc, r.line), u || (u = pi(t, l));

      function d(z, $) {
        var G = En(t, u, z, $ ? "right" : "left", f);
        return $ ? G.left = G.right : G.right = G.left, nu(t, l, G, o);
      }

      var h = Bn(l, t.doc.direction),
          v = r.ch,
          g = r.sticky;
      if (v >= l.text.length ? (v = l.text.length, g = "before") : v <= 0 && (v = 0, g = "after"), !h) return d(g == "before" ? v - 1 : v, g == "before");

      function k(z, $, G) {
        var Z = h[$],
            te = Z.level == 1;
        return d(G ? z - 1 : z, te != G);
      }

      var T = pl(h, v, g),
          P = hl,
          N = k(v, T, g == "before");
      return P != null && (N.other = k(v, P, g != "before")), N;
    }

    function Fh(t, r) {
      var o = 0;
      r = ve(t.doc, r), t.options.lineWrapping || (o = gi(t.display) * r.ch);
      var l = oe(t.doc, r.line),
          u = In(l) + tu(t.display);
      return {
        left: o,
        right: o,
        top: u,
        bottom: u + l.height
      };
    }

    function Ls(t, r, o, l, u) {
      var f = K(t, r, o);
      return f.xRel = u, l && (f.outside = l), f;
    }

    function bs(t, r, o) {
      var l = t.doc;
      if (o += t.display.viewOffset, o < 0) return Ls(l.first, 0, null, -1, -1);
      var u = Br(l, o),
          f = l.first + l.size - 1;
      if (u > f) return Ls(l.first + l.size - 1, oe(l, f).text.length, null, 1, 1);
      r < 0 && (r = 0);

      for (var d = oe(l, u);;) {
        var h = p1(t, d, u, r, o),
            v = $m(d, h.ch + (h.xRel > 0 || h.outside > 0 ? 1 : 0));
        if (!v) return h;
        var g = v.find(1);
        if (g.line == u) return g;
        d = oe(l, u = g.line);
      }
    }

    function Dh(t, r, o, l) {
      l -= Ts(r);
      var u = r.text.length,
          f = dl(function (d) {
        return En(t, o, d - 1).bottom <= l;
      }, u, 0);
      return u = dl(function (d) {
        return En(t, o, d).top > l;
      }, f, u), {
        begin: f,
        end: u
      };
    }

    function Oh(t, r, o, l) {
      o || (o = pi(t, r));
      var u = nu(t, r, En(t, o, l), "line").top;
      return Dh(t, r, o, u);
    }

    function As(t, r, o, l) {
      return t.bottom <= o ? !1 : t.top > o ? !0 : (l ? t.left : t.right) > r;
    }

    function p1(t, r, o, l, u) {
      u -= In(r);
      var f = pi(t, r),
          d = Ts(r),
          h = 0,
          v = r.text.length,
          g = !0,
          k = Bn(r, t.doc.direction);

      if (k) {
        var T = (t.options.lineWrapping ? g1 : v1)(t, r, o, f, k, l, u);
        g = T.level != 1, h = g ? T.from : T.to - 1, v = g ? T.to : T.from - 1;
      }

      var P = null,
          N = null,
          z = dl(function (fe) {
        var ae = En(t, f, fe);
        return ae.top += d, ae.bottom += d, As(ae, l, u, !1) ? (ae.top <= u && ae.left <= l && (P = fe, N = ae), !0) : !1;
      }, h, v),
          $,
          G,
          Z = !1;

      if (N) {
        var te = l - N.left < N.right - l,
            J = te == g;
        z = P + (J ? 0 : 1), G = J ? "after" : "before", $ = te ? N.left : N.right;
      } else {
        !g && (z == v || z == h) && z++, G = z == 0 ? "after" : z == r.text.length ? "before" : En(t, f, z - (g ? 1 : 0)).bottom + d <= u == g ? "after" : "before";
        var ne = dn(t, K(o, z, G), "line", r, f);
        $ = ne.left, Z = u < ne.top ? -1 : u >= ne.bottom ? 1 : 0;
      }

      return z = $d(r.text, z, 1), Ls(o, z, G, Z, l - $);
    }

    function v1(t, r, o, l, u, f, d) {
      var h = dl(function (T) {
        var P = u[T],
            N = P.level != 1;
        return As(dn(t, K(o, N ? P.to : P.from, N ? "before" : "after"), "line", r, l), f, d, !0);
      }, 0, u.length - 1),
          v = u[h];

      if (h > 0) {
        var g = v.level != 1,
            k = dn(t, K(o, g ? v.from : v.to, g ? "after" : "before"), "line", r, l);
        As(k, f, d, !0) && k.top > d && (v = u[h - 1]);
      }

      return v;
    }

    function g1(t, r, o, l, u, f, d) {
      var h = Dh(t, r, l, d),
          v = h.begin,
          g = h.end;
      /\s/.test(r.text.charAt(g - 1)) && g--;

      for (var k = null, T = null, P = 0; P < u.length; P++) {
        var N = u[P];

        if (!(N.from >= g || N.to <= v)) {
          var z = N.level != 1,
              $ = En(t, l, z ? Math.min(g, N.to) - 1 : Math.max(v, N.from)).right,
              G = $ < f ? f - $ + 1e9 : $ - f;
          (!k || T > G) && (k = N, T = G);
        }
      }

      return k || (k = u[u.length - 1]), k.from < v && (k = {
        from: v,
        to: k.to,
        level: k.level
      }), k.to > g && (k = {
        from: k.from,
        to: g,
        level: k.level
      }), k;
    }

    var Ir;

    function vi(t) {
      if (t.cachedTextHeight != null) return t.cachedTextHeight;

      if (Ir == null) {
        Ir = Y("pre", null, "CodeMirror-line-like");

        for (var r = 0; r < 49; ++r) {
          Ir.appendChild(document.createTextNode("x")), Ir.appendChild(Y("br"));
        }

        Ir.appendChild(document.createTextNode("x"));
      }

      me(t.measure, Ir);
      var o = Ir.offsetHeight / 50;
      return o > 3 && (t.cachedTextHeight = o), he(t.measure), o || 1;
    }

    function gi(t) {
      if (t.cachedCharWidth != null) return t.cachedCharWidth;
      var r = Y("span", "xxxxxxxxxx"),
          o = Y("pre", [r], "CodeMirror-line-like");
      me(t.measure, o);
      var l = r.getBoundingClientRect(),
          u = (l.right - l.left) / 10;
      return u > 2 && (t.cachedCharWidth = u), u || 10;
    }

    function Fs(t) {
      for (var r = t.display, o = {}, l = {}, u = r.gutters.clientLeft, f = r.gutters.firstChild, d = 0; f; f = f.nextSibling, ++d) {
        var h = t.display.gutterSpecs[d].className;
        o[h] = f.offsetLeft + f.clientLeft + u, l[h] = f.clientWidth;
      }

      return {
        fixedPos: Ds(r),
        gutterTotalWidth: r.gutters.offsetWidth,
        gutterLeft: o,
        gutterWidth: l,
        wrapperWidth: r.wrapper.clientWidth
      };
    }

    function Ds(t) {
      return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left;
    }

    function Nh(t) {
      var r = vi(t.display),
          o = t.options.lineWrapping,
          l = o && Math.max(5, t.display.scroller.clientWidth / gi(t.display) - 3);
      return function (u) {
        if (er(t.doc, u)) return 0;
        var f = 0;
        if (u.widgets) for (var d = 0; d < u.widgets.length; d++) {
          u.widgets[d].height && (f += u.widgets[d].height);
        }
        return o ? f + (Math.ceil(u.text.length / l) || 1) * r : f + r;
      };
    }

    function Os(t) {
      var r = t.doc,
          o = Nh(t);
      r.iter(function (l) {
        var u = o(l);
        u != l.height && xn(l, u);
      });
    }

    function Rr(t, r, o, l) {
      var u = t.display;
      if (!o && rs(r).getAttribute("cm-not-content") == "true") return null;
      var f,
          d,
          h = u.lineSpace.getBoundingClientRect();

      try {
        f = r.clientX - h.left, d = r.clientY - h.top;
      } catch (_unused26) {
        return null;
      }

      var v = bs(t, f, d),
          g;

      if (l && v.xRel > 0 && (g = oe(t.doc, v.line).text).length == v.ch) {
        var k = ke(g, g.length, t.options.tabSize) - g.length;
        v = K(v.line, Math.max(0, Math.round((f - Ch(t.display).left) / gi(t.display)) - k));
      }

      return v;
    }

    function zr(t, r) {
      if (r >= t.display.viewTo || (r -= t.display.viewFrom, r < 0)) return null;

      for (var o = t.display.view, l = 0; l < o.length; l++) {
        if (r -= o[l].size, r < 0) return l;
      }
    }

    function Ft(t, r, o, l) {
      r == null && (r = t.doc.first), o == null && (o = t.doc.first + t.doc.size), l || (l = 0);
      var u = t.display;
      if (l && o < u.viewTo && (u.updateLineNumbers == null || u.updateLineNumbers > r) && (u.updateLineNumbers = r), t.curOp.viewChanged = !0, r >= u.viewTo) Mn && ws(t.doc, r) < u.viewTo && nr(t);else if (o <= u.viewFrom) Mn && fh(t.doc, o + l) > u.viewFrom ? nr(t) : (u.viewFrom += l, u.viewTo += l);else if (r <= u.viewFrom && o >= u.viewTo) nr(t);else if (r <= u.viewFrom) {
        var f = iu(t, o, o + l, 1);
        f ? (u.view = u.view.slice(f.index), u.viewFrom = f.lineN, u.viewTo += l) : nr(t);
      } else if (o >= u.viewTo) {
        var d = iu(t, r, r, -1);
        d ? (u.view = u.view.slice(0, d.index), u.viewTo = d.lineN) : nr(t);
      } else {
        var h = iu(t, r, r, -1),
            v = iu(t, o, o + l, 1);
        h && v ? (u.view = u.view.slice(0, h.index).concat(eu(t, h.lineN, v.lineN)).concat(u.view.slice(v.index)), u.viewTo += l) : nr(t);
      }
      var g = u.externalMeasured;
      g && (o < g.lineN ? g.lineN += l : r < g.lineN + g.size && (u.externalMeasured = null));
    }

    function tr(t, r, o) {
      t.curOp.viewChanged = !0;
      var l = t.display,
          u = t.display.externalMeasured;

      if (u && r >= u.lineN && r < u.lineN + u.size && (l.externalMeasured = null), !(r < l.viewFrom || r >= l.viewTo)) {
        var f = l.view[zr(t, r)];

        if (f.node != null) {
          var d = f.changes || (f.changes = []);
          be(d, o) == -1 && d.push(o);
        }
      }
    }

    function nr(t) {
      t.display.viewFrom = t.display.viewTo = t.doc.first, t.display.view = [], t.display.viewOffset = 0;
    }

    function iu(t, r, o, l) {
      var u = zr(t, r),
          f,
          d = t.display.view;
      if (!Mn || o == t.doc.first + t.doc.size) return {
        index: u,
        lineN: o
      };

      for (var h = t.display.viewFrom, v = 0; v < u; v++) {
        h += d[v].size;
      }

      if (h != r) {
        if (l > 0) {
          if (u == d.length - 1) return null;
          f = h + d[u].size - r, u++;
        } else f = h - r;

        r += f, o += f;
      }

      for (; ws(t.doc, o) != o;) {
        if (u == (l < 0 ? 0 : d.length - 1)) return null;
        o += l * d[u - (l < 0 ? 1 : 0)].size, u += l;
      }

      return {
        index: u,
        lineN: o
      };
    }

    function y1(t, r, o) {
      var l = t.display,
          u = l.view;
      u.length == 0 || r >= l.viewTo || o <= l.viewFrom ? (l.view = eu(t, r, o), l.viewFrom = r) : (l.viewFrom > r ? l.view = eu(t, r, l.viewFrom).concat(l.view) : l.viewFrom < r && (l.view = l.view.slice(zr(t, r))), l.viewFrom = r, l.viewTo < o ? l.view = l.view.concat(eu(t, l.viewTo, o)) : l.viewTo > o && (l.view = l.view.slice(0, zr(t, o)))), l.viewTo = o;
    }

    function Ph(t) {
      for (var r = t.display.view, o = 0, l = 0; l < r.length; l++) {
        var u = r[l];
        !u.hidden && (!u.node || u.changes) && ++o;
      }

      return o;
    }

    function kl(t) {
      t.display.input.showSelection(t.display.input.prepareSelection());
    }

    function Bh(t, r) {
      r === void 0 && (r = !0);
      var o = t.doc,
          l = {},
          u = l.cursors = document.createDocumentFragment(),
          f = l.selection = document.createDocumentFragment(),
          d = t.options.$customCursor;
      d && (r = !0);

      for (var h = 0; h < o.sel.ranges.length; h++) {
        if (!(!r && h == o.sel.primIndex)) {
          var v = o.sel.ranges[h];

          if (!(v.from().line >= t.display.viewTo || v.to().line < t.display.viewFrom)) {
            var g = v.empty();

            if (d) {
              var k = d(t, v);
              k && Ns(t, k, u);
            } else (g || t.options.showCursorWhenSelecting) && Ns(t, v.head, u);

            g || m1(t, v, f);
          }
        }
      }

      return l;
    }

    function Ns(t, r, o) {
      var l = dn(t, r, "div", null, null, !t.options.singleCursorHeightPerLine),
          u = o.appendChild(Y("div", "\xA0", "CodeMirror-cursor"));

      if (u.style.left = l.left + "px", u.style.top = l.top + "px", u.style.height = Math.max(0, l.bottom - l.top) * t.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(t.getWrapperElement().className)) {
        var f = ru(t, r, "div", null, null),
            d = f.right - f.left;
        u.style.width = (d > 0 ? d : t.defaultCharWidth()) + "px";
      }

      if (l.other) {
        var h = o.appendChild(Y("div", "\xA0", "CodeMirror-cursor CodeMirror-secondarycursor"));
        h.style.display = "", h.style.left = l.other.left + "px", h.style.top = l.other.top + "px", h.style.height = (l.other.bottom - l.other.top) * .85 + "px";
      }
    }

    function lu(t, r) {
      return t.top - r.top || t.left - r.left;
    }

    function m1(t, r, o) {
      var l = t.display,
          u = t.doc,
          f = document.createDocumentFragment(),
          d = Ch(t.display),
          h = d.left,
          v = Math.max(l.sizerWidth, Mr(t) - l.sizer.offsetLeft) - d.right,
          g = u.direction == "ltr";

      function k(J, ne, fe, ae) {
        ne < 0 && (ne = 0), ne = Math.round(ne), ae = Math.round(ae), f.appendChild(Y("div", null, "CodeMirror-selected", "position: absolute; left: " + J + "px;\n                             top: " + ne + "px; width: " + (fe == null ? v - J : fe) + "px;\n                             height: " + (ae - ne) + "px"));
      }

      function T(J, ne, fe) {
        var ae = oe(u, J),
            ge = ae.text.length,
            Fe,
            lt;

        function Ie(Qe, Nt) {
          return ru(t, K(J, Qe), "div", ae, Nt);
        }

        function Wt(Qe, Nt, ft) {
          var Je = Oh(t, ae, null, Qe),
              Ye = Nt == "ltr" == (ft == "after") ? "left" : "right",
              He = ft == "after" ? Je.begin : Je.end - (/\s/.test(ae.text.charAt(Je.end - 1)) ? 2 : 1);
          return Ie(He, Ye)[Ye];
        }

        var Ot = Bn(ae, u.direction);
        return Sm(Ot, ne || 0, fe == null ? ge : fe, function (Qe, Nt, ft, Je) {
          var Ye = ft == "ltr",
              He = Ie(Qe, Ye ? "left" : "right"),
              Pt = Ie(Nt - 1, Ye ? "right" : "left"),
              Ai = ne == null && Qe == 0,
              ar = fe == null && Nt == ge,
              vt = Je == 0,
              Tn = !Ot || Je == Ot.length - 1;

          if (Pt.top - He.top <= 3) {
            var ot = (g ? Ai : ar) && vt,
                of = (g ? ar : Ai) && Tn,
                Wn = ot ? h : (Ye ? He : Pt).left,
                jr = of ? v : (Ye ? Pt : He).right;
            k(Wn, He.top, jr - Wn, He.bottom);
          } else {
            var Kr, xt, Fi, uf;
            Ye ? (Kr = g && Ai && vt ? h : He.left, xt = g ? v : Wt(Qe, ft, "before"), Fi = g ? h : Wt(Nt, ft, "after"), uf = g && ar && Tn ? v : Pt.right) : (Kr = g ? Wt(Qe, ft, "before") : h, xt = !g && Ai && vt ? v : He.right, Fi = !g && ar && Tn ? h : Pt.left, uf = g ? Wt(Nt, ft, "after") : v), k(Kr, He.top, xt - Kr, He.bottom), He.bottom < Pt.top && k(h, He.bottom, null, Pt.top), k(Fi, Pt.top, uf - Fi, Pt.bottom);
          }

          (!Fe || lu(He, Fe) < 0) && (Fe = He), lu(Pt, Fe) < 0 && (Fe = Pt), (!lt || lu(He, lt) < 0) && (lt = He), lu(Pt, lt) < 0 && (lt = Pt);
        }), {
          start: Fe,
          end: lt
        };
      }

      var P = r.from(),
          N = r.to();
      if (P.line == N.line) T(P.line, P.ch, N.ch);else {
        var z = oe(u, P.line),
            $ = oe(u, N.line),
            G = cn(z) == cn($),
            Z = T(P.line, P.ch, G ? z.text.length + 1 : null).end,
            te = T(N.line, G ? 0 : null, N.ch).start;
        G && (Z.top < te.top - 2 ? (k(Z.right, Z.top, null, Z.bottom), k(h, te.top, te.left, te.bottom)) : k(Z.right, Z.top, te.left - Z.right, Z.bottom)), Z.bottom < te.top && k(h, Z.bottom, null, te.top);
      }
      o.appendChild(f);
    }

    function Ps(t) {
      if (!!t.state.focused) {
        var r = t.display;
        clearInterval(r.blinker);
        var o = !0;
        r.cursorDiv.style.visibility = "", t.options.cursorBlinkRate > 0 ? r.blinker = setInterval(function () {
          t.hasFocus() || yi(t), r.cursorDiv.style.visibility = (o = !o) ? "" : "hidden";
        }, t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (r.cursorDiv.style.visibility = "hidden");
      }
    }

    function Mh(t) {
      t.hasFocus() || (t.display.input.focus(), t.state.focused || Ms(t));
    }

    function Bs(t) {
      t.state.delayingBlurEvent = !0, setTimeout(function () {
        t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1, t.state.focused && yi(t));
      }, 100);
    }

    function Ms(t, r) {
      t.state.delayingBlurEvent && !t.state.draggingText && (t.state.delayingBlurEvent = !1), t.options.readOnly != "nocursor" && (t.state.focused || (Ge(t, "focus", t, r), t.state.focused = !0, j(t.display.wrapper, "CodeMirror-focused"), !t.curOp && t.display.selForContextMenu != t.doc.sel && (t.display.input.reset(), _ && setTimeout(function () {
        return t.display.input.reset(!0);
      }, 20)), t.display.input.receivedFocus()), Ps(t));
    }

    function yi(t, r) {
      t.state.delayingBlurEvent || (t.state.focused && (Ge(t, "blur", t, r), t.state.focused = !1, ue(t.display.wrapper, "CodeMirror-focused")), clearInterval(t.display.blinker), setTimeout(function () {
        t.state.focused || (t.display.shift = !1);
      }, 150));
    }

    function ou(t) {
      for (var r = t.display, o = r.lineDiv.offsetTop, l = Math.max(0, r.scroller.getBoundingClientRect().top), u = r.lineDiv.getBoundingClientRect().top, f = 0, d = 0; d < r.view.length; d++) {
        var h = r.view[d],
            v = t.options.lineWrapping,
            g = void 0,
            k = 0;

        if (!h.hidden) {
          if (u += h.line.height, C && x < 8) {
            var T = h.node.offsetTop + h.node.offsetHeight;
            g = T - o, o = T;
          } else {
            var P = h.node.getBoundingClientRect();
            g = P.bottom - P.top, !v && h.text.firstChild && (k = h.text.firstChild.getBoundingClientRect().right - P.left - 1);
          }

          var N = h.line.height - g;
          if ((N > .005 || N < -.005) && (u < l && (f -= N), xn(h.line, g), Ih(h.line), h.rest)) for (var z = 0; z < h.rest.length; z++) {
            Ih(h.rest[z]);
          }

          if (k > t.display.sizerWidth) {
            var $ = Math.ceil(k / gi(t.display));
            $ > t.display.maxLineLength && (t.display.maxLineLength = $, t.display.maxLine = h.line, t.display.maxLineChanged = !0);
          }
        }
      }

      Math.abs(f) > 2 && (r.scroller.scrollTop += f);
    }

    function Ih(t) {
      if (t.widgets) for (var r = 0; r < t.widgets.length; ++r) {
        var o = t.widgets[r],
            l = o.node.parentNode;
        l && (o.height = l.offsetHeight);
      }
    }

    function uu(t, r, o) {
      var l = o && o.top != null ? Math.max(0, o.top) : t.scroller.scrollTop;
      l = Math.floor(l - tu(t));
      var u = o && o.bottom != null ? o.bottom : l + t.wrapper.clientHeight,
          f = Br(r, l),
          d = Br(r, u);

      if (o && o.ensure) {
        var h = o.ensure.from.line,
            v = o.ensure.to.line;
        h < f ? (f = h, d = Br(r, In(oe(r, h)) + t.wrapper.clientHeight)) : Math.min(v, r.lastLine()) >= d && (f = Br(r, In(oe(r, v)) - t.wrapper.clientHeight), d = v);
      }

      return {
        from: f,
        to: Math.max(d, f + 1)
      };
    }

    function w1(t, r) {
      if (!tt(t, "scrollCursorIntoView")) {
        var o = t.display,
            l = o.sizer.getBoundingClientRect(),
            u = null;

        if (r.top + l.top < 0 ? u = !0 : r.bottom + l.top > (window.innerHeight || document.documentElement.clientHeight) && (u = !1), u != null && !R) {
          var f = Y("div", "\u200B", null, "position: absolute;\n                         top: " + (r.top - o.viewOffset - tu(t.display)) + "px;\n                         height: " + (r.bottom - r.top + _n(t) + o.barHeight) + "px;\n                         left: " + r.left + "px; width: " + Math.max(2, r.right - r.left) + "px;");
          t.display.lineSpace.appendChild(f), f.scrollIntoView(u), t.display.lineSpace.removeChild(f);
        }
      }
    }

    function C1(t, r, o, l) {
      l == null && (l = 0);
      var u;
      !t.options.lineWrapping && r == o && (o = r.sticky == "before" ? K(r.line, r.ch + 1, "before") : r, r = r.ch ? K(r.line, r.sticky == "before" ? r.ch - 1 : r.ch, "after") : r);

      for (var f = 0; f < 5; f++) {
        var d = !1,
            h = dn(t, r),
            v = !o || o == r ? h : dn(t, o);
        u = {
          left: Math.min(h.left, v.left),
          top: Math.min(h.top, v.top) - l,
          right: Math.max(h.left, v.left),
          bottom: Math.max(h.bottom, v.bottom) + l
        };
        var g = Is(t, u),
            k = t.doc.scrollTop,
            T = t.doc.scrollLeft;
        if (g.scrollTop != null && (El(t, g.scrollTop), Math.abs(t.doc.scrollTop - k) > 1 && (d = !0)), g.scrollLeft != null && (Hr(t, g.scrollLeft), Math.abs(t.doc.scrollLeft - T) > 1 && (d = !0)), !d) break;
      }

      return u;
    }

    function S1(t, r) {
      var o = Is(t, r);
      o.scrollTop != null && El(t, o.scrollTop), o.scrollLeft != null && Hr(t, o.scrollLeft);
    }

    function Is(t, r) {
      var o = t.display,
          l = vi(t.display);
      r.top < 0 && (r.top = 0);

      var u = t.curOp && t.curOp.scrollTop != null ? t.curOp.scrollTop : o.scroller.scrollTop,
          f = _s(t),
          d = {};

      r.bottom - r.top > f && (r.bottom = r.top + f);
      var h = t.doc.height + ks(o),
          v = r.top < l,
          g = r.bottom > h - l;
      if (r.top < u) d.scrollTop = v ? 0 : r.top;else if (r.bottom > u + f) {
        var k = Math.min(r.top, (g ? h : r.bottom) - f);
        k != u && (d.scrollTop = k);
      }
      var T = t.options.fixedGutter ? 0 : o.gutters.offsetWidth,
          P = t.curOp && t.curOp.scrollLeft != null ? t.curOp.scrollLeft : o.scroller.scrollLeft - T,
          N = Mr(t) - o.gutters.offsetWidth,
          z = r.right - r.left > N;
      return z && (r.right = r.left + N), r.left < 10 ? d.scrollLeft = 0 : r.left < P ? d.scrollLeft = Math.max(0, r.left + T - (z ? 0 : 10)) : r.right > N + P - 3 && (d.scrollLeft = r.right + (z ? 0 : 10) - N), d;
    }

    function Rs(t, r) {
      r != null && (au(t), t.curOp.scrollTop = (t.curOp.scrollTop == null ? t.doc.scrollTop : t.curOp.scrollTop) + r);
    }

    function mi(t) {
      au(t);
      var r = t.getCursor();
      t.curOp.scrollToPos = {
        from: r,
        to: r,
        margin: t.options.cursorScrollMargin
      };
    }

    function _l(t, r, o) {
      (r != null || o != null) && au(t), r != null && (t.curOp.scrollLeft = r), o != null && (t.curOp.scrollTop = o);
    }

    function x1(t, r) {
      au(t), t.curOp.scrollToPos = r;
    }

    function au(t) {
      var r = t.curOp.scrollToPos;

      if (r) {
        t.curOp.scrollToPos = null;
        var o = Fh(t, r.from),
            l = Fh(t, r.to);
        Rh(t, o, l, r.margin);
      }
    }

    function Rh(t, r, o, l) {
      var u = Is(t, {
        left: Math.min(r.left, o.left),
        top: Math.min(r.top, o.top) - l,
        right: Math.max(r.right, o.right),
        bottom: Math.max(r.bottom, o.bottom) + l
      });

      _l(t, u.scrollLeft, u.scrollTop);
    }

    function El(t, r) {
      Math.abs(t.doc.scrollTop - r) < 2 || (s || Hs(t, {
        top: r
      }), zh(t, r, !0), s && Hs(t), bl(t, 100));
    }

    function zh(t, r, o) {
      r = Math.max(0, Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, r)), !(t.display.scroller.scrollTop == r && !o) && (t.doc.scrollTop = r, t.display.scrollbars.setScrollTop(r), t.display.scroller.scrollTop != r && (t.display.scroller.scrollTop = r));
    }

    function Hr(t, r, o, l) {
      r = Math.max(0, Math.min(r, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)), !((o ? r == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - r) < 2) && !l) && (t.doc.scrollLeft = r, jh(t), t.display.scroller.scrollLeft != r && (t.display.scroller.scrollLeft = r), t.display.scrollbars.setScrollLeft(r));
    }

    function Tl(t) {
      var r = t.display,
          o = r.gutters.offsetWidth,
          l = Math.round(t.doc.height + ks(t.display));
      return {
        clientHeight: r.scroller.clientHeight,
        viewHeight: r.wrapper.clientHeight,
        scrollWidth: r.scroller.scrollWidth,
        clientWidth: r.scroller.clientWidth,
        viewWidth: r.wrapper.clientWidth,
        barLeft: t.options.fixedGutter ? o : 0,
        docHeight: l,
        scrollHeight: l + _n(t) + r.barHeight,
        nativeBarWidth: r.nativeBarWidth,
        gutterWidth: o
      };
    }

    var Wr = function Wr(t, r, o) {
      this.cm = o;
      var l = this.vert = Y("div", [Y("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
          u = this.horiz = Y("div", [Y("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      l.tabIndex = u.tabIndex = -1, t(l), t(u), de(l, "scroll", function () {
        l.clientHeight && r(l.scrollTop, "vertical");
      }), de(u, "scroll", function () {
        u.clientWidth && r(u.scrollLeft, "horizontal");
      }), this.checkedZeroWidth = !1, C && x < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
    };

    Wr.prototype.update = function (t) {
      var r = t.scrollWidth > t.clientWidth + 1,
          o = t.scrollHeight > t.clientHeight + 1,
          l = t.nativeBarWidth;

      if (o) {
        this.vert.style.display = "block", this.vert.style.bottom = r ? l + "px" : "0";
        var u = t.viewHeight - (r ? l : 0);
        this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + u) + "px";
      } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";

      if (r) {
        this.horiz.style.display = "block", this.horiz.style.right = o ? l + "px" : "0", this.horiz.style.left = t.barLeft + "px";
        var f = t.viewWidth - t.barLeft - (o ? l : 0);
        this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + f) + "px";
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

      return !this.checkedZeroWidth && t.clientHeight > 0 && (l == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
        right: o ? l : 0,
        bottom: r ? l : 0
      };
    }, Wr.prototype.setScrollLeft = function (t) {
      this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
    }, Wr.prototype.setScrollTop = function (t) {
      this.vert.scrollTop != t && (this.vert.scrollTop = t), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
    }, Wr.prototype.zeroWidthHack = function () {
      var t = L && !D ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = t, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ze(), this.disableVert = new Ze();
    }, Wr.prototype.enableZeroWidthBar = function (t, r, o) {
      t.style.pointerEvents = "auto";

      function l() {
        var u = t.getBoundingClientRect(),
            f = o == "vert" ? document.elementFromPoint(u.right - 1, (u.top + u.bottom) / 2) : document.elementFromPoint((u.right + u.left) / 2, u.bottom - 1);
        f != t ? t.style.pointerEvents = "none" : r.set(1e3, l);
      }

      r.set(1e3, l);
    }, Wr.prototype.clear = function () {
      var t = this.horiz.parentNode;
      t.removeChild(this.horiz), t.removeChild(this.vert);
    };

    var Ll = function Ll() {};

    Ll.prototype.update = function () {
      return {
        bottom: 0,
        right: 0
      };
    }, Ll.prototype.setScrollLeft = function () {}, Ll.prototype.setScrollTop = function () {}, Ll.prototype.clear = function () {};

    function wi(t, r) {
      r || (r = Tl(t));
      var o = t.display.barWidth,
          l = t.display.barHeight;
      Hh(t, r);

      for (var u = 0; u < 4 && o != t.display.barWidth || l != t.display.barHeight; u++) {
        o != t.display.barWidth && t.options.lineWrapping && ou(t), Hh(t, Tl(t)), o = t.display.barWidth, l = t.display.barHeight;
      }
    }

    function Hh(t, r) {
      var o = t.display,
          l = o.scrollbars.update(r);
      o.sizer.style.paddingRight = (o.barWidth = l.right) + "px", o.sizer.style.paddingBottom = (o.barHeight = l.bottom) + "px", o.heightForcer.style.borderBottom = l.bottom + "px solid transparent", l.right && l.bottom ? (o.scrollbarFiller.style.display = "block", o.scrollbarFiller.style.height = l.bottom + "px", o.scrollbarFiller.style.width = l.right + "px") : o.scrollbarFiller.style.display = "", l.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter ? (o.gutterFiller.style.display = "block", o.gutterFiller.style.height = l.bottom + "px", o.gutterFiller.style.width = r.gutterWidth + "px") : o.gutterFiller.style.display = "";
    }

    var Wh = {
      native: Wr,
      null: Ll
    };

    function $h(t) {
      t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && ue(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new Wh[t.options.scrollbarStyle](function (r) {
        t.display.wrapper.insertBefore(r, t.display.scrollbarFiller), de(r, "mousedown", function () {
          t.state.focused && setTimeout(function () {
            return t.display.input.focus();
          }, 0);
        }), r.setAttribute("cm-not-content", "true");
      }, function (r, o) {
        o == "horizontal" ? Hr(t, r) : El(t, r);
      }, t), t.display.scrollbars.addClass && j(t.display.wrapper, t.display.scrollbars.addClass);
    }

    var k1 = 0;

    function $r(t) {
      t.curOp = {
        cm: t,
        viewChanged: !1,
        startHeight: t.doc.height,
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
        id: ++k1,
        markArrays: null
      }, e1(t.curOp);
    }

    function Ur(t) {
      var r = t.curOp;
      r && n1(r, function (o) {
        for (var l = 0; l < o.ops.length; l++) {
          o.ops[l].cm.curOp = null;
        }

        _1(o);
      });
    }

    function _1(t) {
      for (var r = t.ops, o = 0; o < r.length; o++) {
        E1(r[o]);
      }

      for (var l = 0; l < r.length; l++) {
        T1(r[l]);
      }

      for (var u = 0; u < r.length; u++) {
        L1(r[u]);
      }

      for (var f = 0; f < r.length; f++) {
        b1(r[f]);
      }

      for (var d = 0; d < r.length; d++) {
        A1(r[d]);
      }
    }

    function E1(t) {
      var r = t.cm,
          o = r.display;
      D1(r), t.updateMaxLine && Ss(r), t.mustUpdate = t.viewChanged || t.forceUpdate || t.scrollTop != null || t.scrollToPos && (t.scrollToPos.from.line < o.viewFrom || t.scrollToPos.to.line >= o.viewTo) || o.maxLineChanged && r.options.lineWrapping, t.update = t.mustUpdate && new su(r, t.mustUpdate && {
        top: t.scrollTop,
        ensure: t.scrollToPos
      }, t.forceUpdate);
    }

    function T1(t) {
      t.updatedDisplay = t.mustUpdate && zs(t.cm, t.update);
    }

    function L1(t) {
      var r = t.cm,
          o = r.display;
      t.updatedDisplay && ou(r), t.barMeasure = Tl(r), o.maxLineChanged && !r.options.lineWrapping && (t.adjustWidthTo = xh(r, o.maxLine, o.maxLine.text.length).left + 3, r.display.sizerWidth = t.adjustWidthTo, t.barMeasure.scrollWidth = Math.max(o.scroller.clientWidth, o.sizer.offsetLeft + t.adjustWidthTo + _n(r) + r.display.barWidth), t.maxScrollLeft = Math.max(0, o.sizer.offsetLeft + t.adjustWidthTo - Mr(r))), (t.updatedDisplay || t.selectionChanged) && (t.preparedSelection = o.input.prepareSelection());
    }

    function b1(t) {
      var r = t.cm;
      t.adjustWidthTo != null && (r.display.sizer.style.minWidth = t.adjustWidthTo + "px", t.maxScrollLeft < r.doc.scrollLeft && Hr(r, Math.min(r.display.scroller.scrollLeft, t.maxScrollLeft), !0), r.display.maxLineChanged = !1);
      var o = t.focus && t.focus == W();
      t.preparedSelection && r.display.input.showSelection(t.preparedSelection, o), (t.updatedDisplay || t.startHeight != r.doc.height) && wi(r, t.barMeasure), t.updatedDisplay && $s(r, t.barMeasure), t.selectionChanged && Ps(r), r.state.focused && t.updateInput && r.display.input.reset(t.typing), o && Mh(t.cm);
    }

    function A1(t) {
      var r = t.cm,
          o = r.display,
          l = r.doc;

      if (t.updatedDisplay && Uh(r, t.update), o.wheelStartX != null && (t.scrollTop != null || t.scrollLeft != null || t.scrollToPos) && (o.wheelStartX = o.wheelStartY = null), t.scrollTop != null && zh(r, t.scrollTop, t.forceScroll), t.scrollLeft != null && Hr(r, t.scrollLeft, !0, !0), t.scrollToPos) {
        var u = C1(r, ve(l, t.scrollToPos.from), ve(l, t.scrollToPos.to), t.scrollToPos.margin);
        w1(r, u);
      }

      var f = t.maybeHiddenMarkers,
          d = t.maybeUnhiddenMarkers;
      if (f) for (var h = 0; h < f.length; ++h) {
        f[h].lines.length || Ge(f[h], "hide");
      }
      if (d) for (var v = 0; v < d.length; ++v) {
        d[v].lines.length && Ge(d[v], "unhide");
      }
      o.wrapper.offsetHeight && (l.scrollTop = r.display.scroller.scrollTop), t.changeObjs && Ge(r, "changes", r, t.changeObjs), t.update && t.update.finish();
    }

    function Ht(t, r) {
      if (t.curOp) return r();
      $r(t);

      try {
        return r();
      } finally {
        Ur(t);
      }
    }

    function rt(t, r) {
      return function () {
        if (t.curOp) return r.apply(t, arguments);
        $r(t);

        try {
          return r.apply(t, arguments);
        } finally {
          Ur(t);
        }
      };
    }

    function St(t) {
      return function () {
        if (this.curOp) return t.apply(this, arguments);
        $r(this);

        try {
          return t.apply(this, arguments);
        } finally {
          Ur(this);
        }
      };
    }

    function it(t) {
      return function () {
        var r = this.cm;
        if (!r || r.curOp) return t.apply(this, arguments);
        $r(r);

        try {
          return t.apply(this, arguments);
        } finally {
          Ur(r);
        }
      };
    }

    function bl(t, r) {
      t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(r, se(F1, t));
    }

    function F1(t) {
      var r = t.doc;

      if (!(r.highlightFrontier >= t.display.viewTo)) {
        var o = +new Date() + t.options.workTime,
            l = yl(t, r.highlightFrontier),
            u = [];
        r.iter(l.line, Math.min(r.first + r.size, t.display.viewTo + 500), function (f) {
          if (l.line >= t.display.viewFrom) {
            var d = f.styles,
                h = f.text.length > t.options.maxHighlightLength ? Nr(r.mode, l.state) : null,
                v = Xd(t, f, l, !0);
            h && (l.state = h), f.styles = v.styles;
            var g = f.styleClasses,
                k = v.classes;
            k ? f.styleClasses = k : g && (f.styleClasses = null);

            for (var T = !d || d.length != f.styles.length || g != k && (!g || !k || g.bgClass != k.bgClass || g.textClass != k.textClass), P = 0; !T && P < d.length; ++P) {
              T = d[P] != f.styles[P];
            }

            T && u.push(l.line), f.stateAfter = l.save(), l.nextLine();
          } else f.text.length <= t.options.maxHighlightLength && vs(t, f.text, l), f.stateAfter = l.line % 5 == 0 ? l.save() : null, l.nextLine();

          if (+new Date() > o) return bl(t, t.options.workDelay), !0;
        }), r.highlightFrontier = l.line, r.modeFrontier = Math.max(r.modeFrontier, l.line), u.length && Ht(t, function () {
          for (var f = 0; f < u.length; f++) {
            tr(t, u[f], "text");
          }
        });
      }
    }

    var su = function su(t, r, o) {
      var l = t.display;
      this.viewport = r, this.visible = uu(l, t.doc, r), this.editorIsHidden = !l.wrapper.offsetWidth, this.wrapperHeight = l.wrapper.clientHeight, this.wrapperWidth = l.wrapper.clientWidth, this.oldDisplayWidth = Mr(t), this.force = o, this.dims = Fs(t), this.events = [];
    };

    su.prototype.signal = function (t, r) {
      nn(t, r) && this.events.push(arguments);
    }, su.prototype.finish = function () {
      for (var t = 0; t < this.events.length; t++) {
        Ge.apply(null, this.events[t]);
      }
    };

    function D1(t) {
      var r = t.display;
      !r.scrollbarsClipped && r.scroller.offsetWidth && (r.nativeBarWidth = r.scroller.offsetWidth - r.scroller.clientWidth, r.heightForcer.style.height = _n(t) + "px", r.sizer.style.marginBottom = -r.nativeBarWidth + "px", r.sizer.style.borderRightWidth = _n(t) + "px", r.scrollbarsClipped = !0);
    }

    function O1(t) {
      if (t.hasFocus()) return null;
      var r = W();
      if (!r || !V(t.display.lineDiv, r)) return null;
      var o = {
        activeElt: r
      };

      if (window.getSelection) {
        var l = window.getSelection();
        l.anchorNode && l.extend && V(t.display.lineDiv, l.anchorNode) && (o.anchorNode = l.anchorNode, o.anchorOffset = l.anchorOffset, o.focusNode = l.focusNode, o.focusOffset = l.focusOffset);
      }

      return o;
    }

    function N1(t) {
      if (!(!t || !t.activeElt || t.activeElt == W()) && (t.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) && t.anchorNode && V(document.body, t.anchorNode) && V(document.body, t.focusNode))) {
        var r = window.getSelection(),
            o = document.createRange();
        o.setEnd(t.anchorNode, t.anchorOffset), o.collapse(!1), r.removeAllRanges(), r.addRange(o), r.extend(t.focusNode, t.focusOffset);
      }
    }

    function zs(t, r) {
      var o = t.display,
          l = t.doc;
      if (r.editorIsHidden) return nr(t), !1;
      if (!r.force && r.visible.from >= o.viewFrom && r.visible.to <= o.viewTo && (o.updateLineNumbers == null || o.updateLineNumbers >= o.viewTo) && o.renderedView == o.view && Ph(t) == 0) return !1;
      Kh(t) && (nr(t), r.dims = Fs(t));
      var u = l.first + l.size,
          f = Math.max(r.visible.from - t.options.viewportMargin, l.first),
          d = Math.min(u, r.visible.to + t.options.viewportMargin);
      o.viewFrom < f && f - o.viewFrom < 20 && (f = Math.max(l.first, o.viewFrom)), o.viewTo > d && o.viewTo - d < 20 && (d = Math.min(u, o.viewTo)), Mn && (f = ws(t.doc, f), d = fh(t.doc, d));
      var h = f != o.viewFrom || d != o.viewTo || o.lastWrapHeight != r.wrapperHeight || o.lastWrapWidth != r.wrapperWidth;
      y1(t, f, d), o.viewOffset = In(oe(t.doc, o.viewFrom)), t.display.mover.style.top = o.viewOffset + "px";
      var v = Ph(t);
      if (!h && v == 0 && !r.force && o.renderedView == o.view && (o.updateLineNumbers == null || o.updateLineNumbers >= o.viewTo)) return !1;
      var g = O1(t);
      return v > 4 && (o.lineDiv.style.display = "none"), P1(t, o.updateLineNumbers, r.dims), v > 4 && (o.lineDiv.style.display = ""), o.renderedView = o.view, N1(g), he(o.cursorDiv), he(o.selectionDiv), o.gutters.style.height = o.sizer.style.minHeight = 0, h && (o.lastWrapHeight = r.wrapperHeight, o.lastWrapWidth = r.wrapperWidth, bl(t, 400)), o.updateLineNumbers = null, !0;
    }

    function Uh(t, r) {
      for (var o = r.viewport, l = !0;; l = !1) {
        if (!l || !t.options.lineWrapping || r.oldDisplayWidth == Mr(t)) {
          if (o && o.top != null && (o = {
            top: Math.min(t.doc.height + ks(t.display) - _s(t), o.top)
          }), r.visible = uu(t.display, t.doc, o), r.visible.from >= t.display.viewFrom && r.visible.to <= t.display.viewTo) break;
        } else l && (r.visible = uu(t.display, t.doc, o));

        if (!zs(t, r)) break;
        ou(t);
        var u = Tl(t);
        kl(t), wi(t, u), $s(t, u), r.force = !1;
      }

      r.signal(t, "update", t), (t.display.viewFrom != t.display.reportedViewFrom || t.display.viewTo != t.display.reportedViewTo) && (r.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo), t.display.reportedViewFrom = t.display.viewFrom, t.display.reportedViewTo = t.display.viewTo);
    }

    function Hs(t, r) {
      var o = new su(t, r);

      if (zs(t, o)) {
        ou(t), Uh(t, o);
        var l = Tl(t);
        kl(t), wi(t, l), $s(t, l), o.finish();
      }
    }

    function P1(t, r, o) {
      var l = t.display,
          u = t.options.lineNumbers,
          f = l.lineDiv,
          d = f.firstChild;

      function h(z) {
        var $ = z.nextSibling;
        return _ && L && t.display.currentWheelTarget == z ? z.style.display = "none" : z.parentNode.removeChild(z), $;
      }

      for (var v = l.view, g = l.viewFrom, k = 0; k < v.length; k++) {
        var T = v[k];
        if (!T.hidden) if (!T.node || T.node.parentNode != f) {
          var P = u1(t, T, g, o);
          f.insertBefore(P, d);
        } else {
          for (; d != T.node;) {
            d = h(d);
          }

          var N = u && r != null && r <= g && T.lineNumber;
          T.changes && (be(T.changes, "gutter") > -1 && (N = !1), vh(t, T, g, o)), N && (he(T.lineNumber), T.lineNumber.appendChild(document.createTextNode(ds(t.options, g)))), d = T.node.nextSibling;
        }
        g += T.size;
      }

      for (; d;) {
        d = h(d);
      }
    }

    function Ws(t) {
      var r = t.gutters.offsetWidth;
      t.sizer.style.marginLeft = r + "px", nt(t, "gutterChanged", t);
    }

    function $s(t, r) {
      t.display.sizer.style.minHeight = r.docHeight + "px", t.display.heightForcer.style.top = r.docHeight + "px", t.display.gutters.style.height = r.docHeight + t.display.barHeight + _n(t) + "px";
    }

    function jh(t) {
      var r = t.display,
          o = r.view;

      if (!(!r.alignWidgets && (!r.gutters.firstChild || !t.options.fixedGutter))) {
        for (var l = Ds(r) - r.scroller.scrollLeft + t.doc.scrollLeft, u = r.gutters.offsetWidth, f = l + "px", d = 0; d < o.length; d++) {
          if (!o[d].hidden) {
            t.options.fixedGutter && (o[d].gutter && (o[d].gutter.style.left = f), o[d].gutterBackground && (o[d].gutterBackground.style.left = f));
            var h = o[d].alignable;
            if (h) for (var v = 0; v < h.length; v++) {
              h[v].style.left = f;
            }
          }
        }

        t.options.fixedGutter && (r.gutters.style.left = l + u + "px");
      }
    }

    function Kh(t) {
      if (!t.options.lineNumbers) return !1;
      var r = t.doc,
          o = ds(t.options, r.first + r.size - 1),
          l = t.display;

      if (o.length != l.lineNumChars) {
        var u = l.measure.appendChild(Y("div", [Y("div", o)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
            f = u.firstChild.offsetWidth,
            d = u.offsetWidth - f;
        return l.lineGutter.style.width = "", l.lineNumInnerWidth = Math.max(f, l.lineGutter.offsetWidth - d) + 1, l.lineNumWidth = l.lineNumInnerWidth + d, l.lineNumChars = l.lineNumInnerWidth ? o.length : -1, l.lineGutter.style.width = l.lineNumWidth + "px", Ws(t.display), !0;
      }

      return !1;
    }

    function Us(t, r) {
      for (var o = [], l = !1, u = 0; u < t.length; u++) {
        var f = t[u],
            d = null;
        if (typeof f != "string" && (d = f.style, f = f.className), f == "CodeMirror-linenumbers") if (r) l = !0;else continue;
        o.push({
          className: f,
          style: d
        });
      }

      return r && !l && o.push({
        className: "CodeMirror-linenumbers",
        style: null
      }), o;
    }

    function Gh(t) {
      var r = t.gutters,
          o = t.gutterSpecs;
      he(r), t.lineGutter = null;

      for (var l = 0; l < o.length; ++l) {
        var u = o[l],
            f = u.className,
            d = u.style,
            h = r.appendChild(Y("div", null, "CodeMirror-gutter " + f));
        d && (h.style.cssText = d), f == "CodeMirror-linenumbers" && (t.lineGutter = h, h.style.width = (t.lineNumWidth || 1) + "px");
      }

      r.style.display = o.length ? "" : "none", Ws(t);
    }

    function Al(t) {
      Gh(t.display), Ft(t), jh(t);
    }

    function B1(t, r, o, l) {
      var u = this;
      this.input = o, u.scrollbarFiller = Y("div", null, "CodeMirror-scrollbar-filler"), u.scrollbarFiller.setAttribute("cm-not-content", "true"), u.gutterFiller = Y("div", null, "CodeMirror-gutter-filler"), u.gutterFiller.setAttribute("cm-not-content", "true"), u.lineDiv = xe("div", null, "CodeMirror-code"), u.selectionDiv = Y("div", null, null, "position: relative; z-index: 1"), u.cursorDiv = Y("div", null, "CodeMirror-cursors"), u.measure = Y("div", null, "CodeMirror-measure"), u.lineMeasure = Y("div", null, "CodeMirror-measure"), u.lineSpace = xe("div", [u.measure, u.lineMeasure, u.selectionDiv, u.cursorDiv, u.lineDiv], null, "position: relative; outline: none");
      var f = xe("div", [u.lineSpace], "CodeMirror-lines");
      u.mover = Y("div", [f], null, "position: relative"), u.sizer = Y("div", [u.mover], "CodeMirror-sizer"), u.sizerWidth = null, u.heightForcer = Y("div", null, null, "position: absolute; height: " + et + "px; width: 1px;"), u.gutters = Y("div", null, "CodeMirror-gutters"), u.lineGutter = null, u.scroller = Y("div", [u.sizer, u.heightForcer, u.gutters], "CodeMirror-scroll"), u.scroller.setAttribute("tabIndex", "-1"), u.wrapper = Y("div", [u.scrollbarFiller, u.gutterFiller, u.scroller], "CodeMirror"), u.wrapper.setAttribute("translate", "no"), C && x < 8 && (u.gutters.style.zIndex = -1, u.scroller.style.paddingRight = 0), !_ && !(s && S) && (u.scroller.draggable = !0), t && (t.appendChild ? t.appendChild(u.wrapper) : t(u.wrapper)), u.viewFrom = u.viewTo = r.first, u.reportedViewFrom = u.reportedViewTo = r.first, u.view = [], u.renderedView = null, u.externalMeasured = null, u.viewOffset = 0, u.lastWrapHeight = u.lastWrapWidth = 0, u.updateLineNumbers = null, u.nativeBarWidth = u.barHeight = u.barWidth = 0, u.scrollbarsClipped = !1, u.lineNumWidth = u.lineNumInnerWidth = u.lineNumChars = null, u.alignWidgets = !1, u.cachedCharWidth = u.cachedTextHeight = u.cachedPaddingH = null, u.maxLine = null, u.maxLineLength = 0, u.maxLineChanged = !1, u.wheelDX = u.wheelDY = u.wheelStartX = u.wheelStartY = null, u.shift = !1, u.selForContextMenu = null, u.activeTouch = null, u.gutterSpecs = Us(l.gutters, l.lineNumbers), Gh(u), o.init(u);
    }

    var fu = 0,
        zn = null;
    C ? zn = -.53 : s ? zn = 15 : E ? zn = -.7 : F && (zn = -1 / 3);

    function Vh(t) {
      var r = t.wheelDeltaX,
          o = t.wheelDeltaY;
      return r == null && t.detail && t.axis == t.HORIZONTAL_AXIS && (r = t.detail), o == null && t.detail && t.axis == t.VERTICAL_AXIS ? o = t.detail : o == null && (o = t.wheelDelta), {
        x: r,
        y: o
      };
    }

    function M1(t) {
      var r = Vh(t);
      return r.x *= zn, r.y *= zn, r;
    }

    function Qh(t, r) {
      var o = Vh(r),
          l = o.x,
          u = o.y,
          f = zn;
      r.deltaMode === 0 && (l = r.deltaX, u = r.deltaY, f = 1);
      var d = t.display,
          h = d.scroller,
          v = h.scrollWidth > h.clientWidth,
          g = h.scrollHeight > h.clientHeight;

      if (!!(l && v || u && g)) {
        if (u && L && _) {
          e: for (var k = r.target, T = d.view; k != h; k = k.parentNode) {
            for (var P = 0; P < T.length; P++) {
              if (T[P].node == k) {
                t.display.currentWheelTarget = k;
                break e;
              }
            }
          }
        }

        if (l && !s && !b && f != null) {
          u && g && El(t, Math.max(0, h.scrollTop + u * f)), Hr(t, Math.max(0, h.scrollLeft + l * f)), (!u || u && g) && At(r), d.wheelStartX = null;
          return;
        }

        if (u && f != null) {
          var N = u * f,
              z = t.doc.scrollTop,
              $ = z + d.wrapper.clientHeight;
          N < 0 ? z = Math.max(0, z + N - 50) : $ = Math.min(t.doc.height, $ + N + 50), Hs(t, {
            top: z,
            bottom: $
          });
        }

        fu < 20 && r.deltaMode !== 0 && (d.wheelStartX == null ? (d.wheelStartX = h.scrollLeft, d.wheelStartY = h.scrollTop, d.wheelDX = l, d.wheelDY = u, setTimeout(function () {
          if (d.wheelStartX != null) {
            var G = h.scrollLeft - d.wheelStartX,
                Z = h.scrollTop - d.wheelStartY,
                te = Z && d.wheelDY && Z / d.wheelDY || G && d.wheelDX && G / d.wheelDX;
            d.wheelStartX = d.wheelStartY = null, te && (zn = (zn * fu + te) / (fu + 1), ++fu);
          }
        }, 200)) : (d.wheelDX += l, d.wheelDY += u));
      }
    }

    var Yt = function Yt(t, r) {
      this.ranges = t, this.primIndex = r;
    };

    Yt.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }, Yt.prototype.equals = function (t) {
      if (t == this) return !0;
      if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length) return !1;

      for (var r = 0; r < this.ranges.length; r++) {
        var o = this.ranges[r],
            l = t.ranges[r];
        if (!hs(o.anchor, l.anchor) || !hs(o.head, l.head)) return !1;
      }

      return !0;
    }, Yt.prototype.deepCopy = function () {
      for (var t = [], r = 0; r < this.ranges.length; r++) {
        t[r] = new Ee(ps(this.ranges[r].anchor), ps(this.ranges[r].head));
      }

      return new Yt(t, this.primIndex);
    }, Yt.prototype.somethingSelected = function () {
      for (var t = 0; t < this.ranges.length; t++) {
        if (!this.ranges[t].empty()) return !0;
      }

      return !1;
    }, Yt.prototype.contains = function (t, r) {
      r || (r = t);

      for (var o = 0; o < this.ranges.length; o++) {
        var l = this.ranges[o];
        if (pe(r, l.from()) >= 0 && pe(t, l.to()) <= 0) return o;
      }

      return -1;
    };

    var Ee = function Ee(t, r) {
      this.anchor = t, this.head = r;
    };

    Ee.prototype.from = function () {
      return Vo(this.anchor, this.head);
    }, Ee.prototype.to = function () {
      return Go(this.anchor, this.head);
    }, Ee.prototype.empty = function () {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    };

    function hn(t, r, o) {
      var l = t && t.options.selectionsMayTouch,
          u = r[o];
      r.sort(function (P, N) {
        return pe(P.from(), N.from());
      }), o = be(r, u);

      for (var f = 1; f < r.length; f++) {
        var d = r[f],
            h = r[f - 1],
            v = pe(h.to(), d.from());

        if (l && !d.empty() ? v > 0 : v >= 0) {
          var g = Vo(h.from(), d.from()),
              k = Go(h.to(), d.to()),
              T = h.empty() ? d.from() == d.head : h.from() == h.head;
          f <= o && --o, r.splice(--f, 2, new Ee(T ? k : g, T ? g : k));
        }
      }

      return new Yt(r, o);
    }

    function rr(t, r) {
      return new Yt([new Ee(t, r || t)], 0);
    }

    function ir(t) {
      return t.text ? K(t.from.line + t.text.length - 1, we(t.text).length + (t.text.length == 1 ? t.from.ch : 0)) : t.to;
    }

    function Yh(t, r) {
      if (pe(t, r.from) < 0) return t;
      if (pe(t, r.to) <= 0) return ir(r);
      var o = t.line + r.text.length - (r.to.line - r.from.line) - 1,
          l = t.ch;
      return t.line == r.to.line && (l += ir(r).ch - r.to.ch), K(o, l);
    }

    function js(t, r) {
      for (var o = [], l = 0; l < t.sel.ranges.length; l++) {
        var u = t.sel.ranges[l];
        o.push(new Ee(Yh(u.anchor, r), Yh(u.head, r)));
      }

      return hn(t.cm, o, t.sel.primIndex);
    }

    function Xh(t, r, o) {
      return t.line == r.line ? K(o.line, t.ch - r.ch + o.ch) : K(o.line + (t.line - r.line), t.ch);
    }

    function I1(t, r, o) {
      for (var l = [], u = K(t.first, 0), f = u, d = 0; d < r.length; d++) {
        var h = r[d],
            v = Xh(h.from, u, f),
            g = Xh(ir(h), u, f);

        if (u = h.to, f = g, o == "around") {
          var k = t.sel.ranges[d],
              T = pe(k.head, k.anchor) < 0;
          l[d] = new Ee(T ? g : v, T ? v : g);
        } else l[d] = new Ee(v, v);
      }

      return new Yt(l, t.sel.primIndex);
    }

    function Ks(t) {
      t.doc.mode = ss(t.options, t.doc.modeOption), Fl(t);
    }

    function Fl(t) {
      t.doc.iter(function (r) {
        r.stateAfter && (r.stateAfter = null), r.styles && (r.styles = null);
      }), t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first, bl(t, 100), t.state.modeGen++, t.curOp && Ft(t);
    }

    function Zh(t, r) {
      return r.from.ch == 0 && r.to.ch == 0 && we(r.text) == "" && (!t.cm || t.cm.options.wholeLineUpdateBefore);
    }

    function Gs(t, r, o, l) {
      function u(te) {
        return o ? o[te] : null;
      }

      function f(te, J, ne) {
        Km(te, J, ne, l), nt(te, "change", te, r);
      }

      function d(te, J) {
        for (var ne = [], fe = te; fe < J; ++fe) {
          ne.push(new di(g[fe], u(fe), l));
        }

        return ne;
      }

      var h = r.from,
          v = r.to,
          g = r.text,
          k = oe(t, h.line),
          T = oe(t, v.line),
          P = we(g),
          N = u(g.length - 1),
          z = v.line - h.line;
      if (r.full) t.insert(0, d(0, g.length)), t.remove(g.length, t.size - g.length);else if (Zh(t, r)) {
        var $ = d(0, g.length - 1);
        f(T, T.text, N), z && t.remove(h.line, z), $.length && t.insert(h.line, $);
      } else if (k == T) {
        if (g.length == 1) f(k, k.text.slice(0, h.ch) + P + k.text.slice(v.ch), N);else {
          var G = d(1, g.length - 1);
          G.push(new di(P + k.text.slice(v.ch), N, l)), f(k, k.text.slice(0, h.ch) + g[0], u(0)), t.insert(h.line + 1, G);
        }
      } else if (g.length == 1) f(k, k.text.slice(0, h.ch) + g[0] + T.text.slice(v.ch), u(0)), t.remove(h.line + 1, z);else {
        f(k, k.text.slice(0, h.ch) + g[0], u(0)), f(T, P + T.text.slice(v.ch), N);
        var Z = d(1, g.length - 1);
        z > 1 && t.remove(h.line + 1, z - 1), t.insert(h.line + 1, Z);
      }
      nt(t, "change", t, r);
    }

    function lr(t, r, o) {
      function l(u, f, d) {
        if (u.linked) for (var h = 0; h < u.linked.length; ++h) {
          var v = u.linked[h];

          if (v.doc != f) {
            var g = d && v.sharedHist;
            o && !g || (r(v.doc, g), l(v.doc, u, g));
          }
        }
      }

      l(t, null, !0);
    }

    function Jh(t, r) {
      if (r.cm) throw new Error("This document is already in use.");
      t.doc = r, r.cm = t, Os(t), Ks(t), qh(t), t.options.direction = r.direction, t.options.lineWrapping || Ss(t), t.options.mode = r.modeOption, Ft(t);
    }

    function qh(t) {
      (t.doc.direction == "rtl" ? j : ue)(t.display.lineDiv, "CodeMirror-rtl");
    }

    function R1(t) {
      Ht(t, function () {
        qh(t), Ft(t);
      });
    }

    function cu(t) {
      this.done = [], this.undone = [], this.undoDepth = t ? t.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = t ? t.maxGeneration : 1;
    }

    function Vs(t, r) {
      var o = {
        from: ps(r.from),
        to: ir(r),
        text: Pr(t, r.from, r.to)
      };
      return np(t, o, r.from.line, r.to.line + 1), lr(t, function (l) {
        return np(l, o, r.from.line, r.to.line + 1);
      }, !0), o;
    }

    function ep(t) {
      for (; t.length;) {
        var r = we(t);
        if (r.ranges) t.pop();else break;
      }
    }

    function z1(t, r) {
      if (r) return ep(t.done), we(t.done);
      if (t.done.length && !we(t.done).ranges) return we(t.done);
      if (t.done.length > 1 && !t.done[t.done.length - 2].ranges) return t.done.pop(), we(t.done);
    }

    function tp(t, r, o, l) {
      var u = t.history;
      u.undone.length = 0;
      var f = +new Date(),
          d,
          h;
      if ((u.lastOp == l || u.lastOrigin == r.origin && r.origin && (r.origin.charAt(0) == "+" && u.lastModTime > f - (t.cm ? t.cm.options.historyEventDelay : 500) || r.origin.charAt(0) == "*")) && (d = z1(u, u.lastOp == l))) h = we(d.changes), pe(r.from, r.to) == 0 && pe(r.from, h.to) == 0 ? h.to = ir(r) : d.changes.push(Vs(t, r));else {
        var v = we(u.done);

        for ((!v || !v.ranges) && du(t.sel, u.done), d = {
          changes: [Vs(t, r)],
          generation: u.generation
        }, u.done.push(d); u.done.length > u.undoDepth;) {
          u.done.shift(), u.done[0].ranges || u.done.shift();
        }
      }
      u.done.push(o), u.generation = ++u.maxGeneration, u.lastModTime = u.lastSelTime = f, u.lastOp = u.lastSelOp = l, u.lastOrigin = u.lastSelOrigin = r.origin, h || Ge(t, "historyAdded");
    }

    function H1(t, r, o, l) {
      var u = r.charAt(0);
      return u == "*" || u == "+" && o.ranges.length == l.ranges.length && o.somethingSelected() == l.somethingSelected() && new Date() - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500);
    }

    function W1(t, r, o, l) {
      var u = t.history,
          f = l && l.origin;
      o == u.lastSelOp || f && u.lastSelOrigin == f && (u.lastModTime == u.lastSelTime && u.lastOrigin == f || H1(t, f, we(u.done), r)) ? u.done[u.done.length - 1] = r : du(r, u.done), u.lastSelTime = +new Date(), u.lastSelOrigin = f, u.lastSelOp = o, l && l.clearRedo !== !1 && ep(u.undone);
    }

    function du(t, r) {
      var o = we(r);
      o && o.ranges && o.equals(t) || r.push(t);
    }

    function np(t, r, o, l) {
      var u = r["spans_" + t.id],
          f = 0;
      t.iter(Math.max(t.first, o), Math.min(t.first + t.size, l), function (d) {
        d.markedSpans && ((u || (u = r["spans_" + t.id] = {}))[f] = d.markedSpans), ++f;
      });
    }

    function $1(t) {
      if (!t) return null;

      for (var r, o = 0; o < t.length; ++o) {
        t[o].marker.explicitlyCleared ? r || (r = t.slice(0, o)) : r && r.push(t[o]);
      }

      return r ? r.length ? r : null : t;
    }

    function U1(t, r) {
      var o = r["spans_" + t.id];
      if (!o) return null;

      for (var l = [], u = 0; u < r.text.length; ++u) {
        l.push($1(o[u]));
      }

      return l;
    }

    function rp(t, r) {
      var o = U1(t, r),
          l = ys(t, r);
      if (!o) return l;
      if (!l) return o;

      for (var u = 0; u < o.length; ++u) {
        var f = o[u],
            d = l[u];

        if (f && d) {
          e: for (var h = 0; h < d.length; ++h) {
            for (var v = d[h], g = 0; g < f.length; ++g) {
              if (f[g].marker == v.marker) continue e;
            }

            f.push(v);
          }
        } else d && (o[u] = d);
      }

      return o;
    }

    function Ci(t, r, o) {
      for (var l = [], u = 0; u < t.length; ++u) {
        var f = t[u];

        if (f.ranges) {
          l.push(o ? Yt.prototype.deepCopy.call(f) : f);
          continue;
        }

        var d = f.changes,
            h = [];
        l.push({
          changes: h
        });

        for (var v = 0; v < d.length; ++v) {
          var g = d[v],
              k = void 0;
          if (h.push({
            from: g.from,
            to: g.to,
            text: g.text
          }), r) for (var T in g) {
            (k = T.match(/^spans_(\d+)$/)) && be(r, Number(k[1])) > -1 && (we(h)[T] = g[T], delete g[T]);
          }
        }
      }

      return l;
    }

    function Qs(t, r, o, l) {
      if (l) {
        var u = t.anchor;

        if (o) {
          var f = pe(r, u) < 0;
          f != pe(o, u) < 0 ? (u = r, r = o) : f != pe(r, o) < 0 && (r = o);
        }

        return new Ee(u, r);
      } else return new Ee(o || r, r);
    }

    function hu(t, r, o, l, u) {
      u == null && (u = t.cm && (t.cm.display.shift || t.extend)), pt(t, new Yt([Qs(t.sel.primary(), r, o, u)], 0), l);
    }

    function ip(t, r, o) {
      for (var l = [], u = t.cm && (t.cm.display.shift || t.extend), f = 0; f < t.sel.ranges.length; f++) {
        l[f] = Qs(t.sel.ranges[f], r[f], null, u);
      }

      var d = hn(t.cm, l, t.sel.primIndex);
      pt(t, d, o);
    }

    function Ys(t, r, o, l) {
      var u = t.sel.ranges.slice(0);
      u[r] = o, pt(t, hn(t.cm, u, t.sel.primIndex), l);
    }

    function lp(t, r, o, l) {
      pt(t, rr(r, o), l);
    }

    function j1(t, r, o) {
      var l = {
        ranges: r.ranges,
        update: function update(u) {
          this.ranges = [];

          for (var f = 0; f < u.length; f++) {
            this.ranges[f] = new Ee(ve(t, u[f].anchor), ve(t, u[f].head));
          }
        },
        origin: o && o.origin
      };
      return Ge(t, "beforeSelectionChange", t, l), t.cm && Ge(t.cm, "beforeSelectionChange", t.cm, l), l.ranges != r.ranges ? hn(t.cm, l.ranges, l.ranges.length - 1) : r;
    }

    function op(t, r, o) {
      var l = t.history.done,
          u = we(l);
      u && u.ranges ? (l[l.length - 1] = r, pu(t, r, o)) : pt(t, r, o);
    }

    function pt(t, r, o) {
      pu(t, r, o), W1(t, t.sel, t.cm ? t.cm.curOp.id : NaN, o);
    }

    function pu(t, r, o) {
      (nn(t, "beforeSelectionChange") || t.cm && nn(t.cm, "beforeSelectionChange")) && (r = j1(t, r, o));
      var l = o && o.bias || (pe(r.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
      up(t, sp(t, r, l, !0)), !(o && o.scroll === !1) && t.cm && t.cm.getOption("readOnly") != "nocursor" && mi(t.cm);
    }

    function up(t, r) {
      r.equals(t.sel) || (t.sel = r, t.cm && (t.cm.curOp.updateInput = 1, t.cm.curOp.selectionChanged = !0, jd(t.cm)), nt(t, "cursorActivity", t));
    }

    function ap(t) {
      up(t, sp(t, t.sel, null, !1));
    }

    function sp(t, r, o, l) {
      for (var u, f = 0; f < r.ranges.length; f++) {
        var d = r.ranges[f],
            h = r.ranges.length == t.sel.ranges.length && t.sel.ranges[f],
            v = vu(t, d.anchor, h && h.anchor, o, l),
            g = vu(t, d.head, h && h.head, o, l);
        (u || v != d.anchor || g != d.head) && (u || (u = r.ranges.slice(0, f)), u[f] = new Ee(v, g));
      }

      return u ? hn(t.cm, u, r.primIndex) : r;
    }

    function Si(t, r, o, l, u) {
      var f = oe(t, r.line);
      if (f.markedSpans) for (var d = 0; d < f.markedSpans.length; ++d) {
        var h = f.markedSpans[d],
            v = h.marker,
            g = "selectLeft" in v ? !v.selectLeft : v.inclusiveLeft,
            k = "selectRight" in v ? !v.selectRight : v.inclusiveRight;

        if ((h.from == null || (g ? h.from <= r.ch : h.from < r.ch)) && (h.to == null || (k ? h.to >= r.ch : h.to > r.ch))) {
          if (u && (Ge(v, "beforeCursorEnter"), v.explicitlyCleared)) if (f.markedSpans) {
            --d;
            continue;
          } else break;
          if (!v.atomic) continue;

          if (o) {
            var T = v.find(l < 0 ? 1 : -1),
                P = void 0;
            if ((l < 0 ? k : g) && (T = fp(t, T, -l, T && T.line == r.line ? f : null)), T && T.line == r.line && (P = pe(T, o)) && (l < 0 ? P < 0 : P > 0)) return Si(t, T, r, l, u);
          }

          var N = v.find(l < 0 ? -1 : 1);
          return (l < 0 ? g : k) && (N = fp(t, N, l, N.line == r.line ? f : null)), N ? Si(t, N, r, l, u) : null;
        }
      }
      return r;
    }

    function vu(t, r, o, l, u) {
      var f = l || 1,
          d = Si(t, r, o, f, u) || !u && Si(t, r, o, f, !0) || Si(t, r, o, -f, u) || !u && Si(t, r, o, -f, !0);
      return d || (t.cantEdit = !0, K(t.first, 0));
    }

    function fp(t, r, o, l) {
      return o < 0 && r.ch == 0 ? r.line > t.first ? ve(t, K(r.line - 1)) : null : o > 0 && r.ch == (l || oe(t, r.line)).text.length ? r.line < t.first + t.size - 1 ? K(r.line + 1, 0) : null : new K(r.line, r.ch + o);
    }

    function cp(t) {
      t.setSelection(K(t.firstLine(), 0), K(t.lastLine()), Ct);
    }

    function dp(t, r, o) {
      var l = {
        canceled: !1,
        from: r.from,
        to: r.to,
        text: r.text,
        origin: r.origin,
        cancel: function cancel() {
          return l.canceled = !0;
        }
      };
      return o && (l.update = function (u, f, d, h) {
        u && (l.from = ve(t, u)), f && (l.to = ve(t, f)), d && (l.text = d), h !== void 0 && (l.origin = h);
      }), Ge(t, "beforeChange", t, l), t.cm && Ge(t.cm, "beforeChange", t.cm, l), l.canceled ? (t.cm && (t.cm.curOp.updateInput = 2), null) : {
        from: l.from,
        to: l.to,
        text: l.text,
        origin: l.origin
      };
    }

    function xi(t, r, o) {
      if (t.cm) {
        if (!t.cm.curOp) return rt(t.cm, xi)(t, r, o);
        if (t.cm.state.suppressEdits) return;
      }

      if (!((nn(t, "beforeChange") || t.cm && nn(t.cm, "beforeChange")) && (r = dp(t, r, !0), !r))) {
        var l = rh && !o && Wm(t, r.from, r.to);
        if (l) for (var u = l.length - 1; u >= 0; --u) {
          hp(t, {
            from: l[u].from,
            to: l[u].to,
            text: u ? [""] : r.text,
            origin: r.origin
          });
        } else hp(t, r);
      }
    }

    function hp(t, r) {
      if (!(r.text.length == 1 && r.text[0] == "" && pe(r.from, r.to) == 0)) {
        var o = js(t, r);
        tp(t, r, o, t.cm ? t.cm.curOp.id : NaN), Dl(t, r, o, ys(t, r));
        var l = [];
        lr(t, function (u, f) {
          !f && be(l, u.history) == -1 && (yp(u.history, r), l.push(u.history)), Dl(u, r, null, ys(u, r));
        });
      }
    }

    function gu(t, r, o) {
      var l = t.cm && t.cm.state.suppressEdits;

      if (!(l && !o)) {
        for (var u = t.history, f, d = t.sel, h = r == "undo" ? u.done : u.undone, v = r == "undo" ? u.undone : u.done, g = 0; g < h.length && (f = h[g], !(o ? f.ranges && !f.equals(t.sel) : !f.ranges)); g++) {
          ;
        }

        if (g != h.length) {
          for (u.lastOrigin = u.lastSelOrigin = null;;) {
            if (f = h.pop(), f.ranges) {
              if (du(f, v), o && !f.equals(t.sel)) {
                pt(t, f, {
                  clearRedo: !1
                });
                return;
              }

              d = f;
            } else if (l) {
              h.push(f);
              return;
            } else break;
          }

          var k = [];
          du(d, v), v.push({
            changes: k,
            generation: u.generation
          }), u.generation = f.generation || ++u.maxGeneration;

          for (var T = nn(t, "beforeChange") || t.cm && nn(t.cm, "beforeChange"), P = function P($) {
            var G = f.changes[$];
            if (G.origin = r, T && !dp(t, G, !1)) return h.length = 0, {};
            k.push(Vs(t, G));
            var Z = $ ? js(t, G) : we(h);
            Dl(t, G, Z, rp(t, G)), !$ && t.cm && t.cm.scrollIntoView({
              from: G.from,
              to: ir(G)
            });
            var te = [];
            lr(t, function (J, ne) {
              !ne && be(te, J.history) == -1 && (yp(J.history, G), te.push(J.history)), Dl(J, G, null, rp(J, G));
            });
          }, N = f.changes.length - 1; N >= 0; --N) {
            var z = P(N);
            if (z) return z.v;
          }
        }
      }
    }

    function pp(t, r) {
      if (r != 0 && (t.first += r, t.sel = new Yt(Dr(t.sel.ranges, function (u) {
        return new Ee(K(u.anchor.line + r, u.anchor.ch), K(u.head.line + r, u.head.ch));
      }), t.sel.primIndex), t.cm)) {
        Ft(t.cm, t.first, t.first - r, r);

        for (var o = t.cm.display, l = o.viewFrom; l < o.viewTo; l++) {
          tr(t.cm, l, "gutter");
        }
      }
    }

    function Dl(t, r, o, l) {
      if (t.cm && !t.cm.curOp) return rt(t.cm, Dl)(t, r, o, l);

      if (r.to.line < t.first) {
        pp(t, r.text.length - 1 - (r.to.line - r.from.line));
        return;
      }

      if (!(r.from.line > t.lastLine())) {
        if (r.from.line < t.first) {
          var u = r.text.length - 1 - (t.first - r.from.line);
          pp(t, u), r = {
            from: K(t.first, 0),
            to: K(r.to.line + u, r.to.ch),
            text: [we(r.text)],
            origin: r.origin
          };
        }

        var f = t.lastLine();
        r.to.line > f && (r = {
          from: r.from,
          to: K(f, oe(t, f).text.length),
          text: [r.text[0]],
          origin: r.origin
        }), r.removed = Pr(t, r.from, r.to), o || (o = js(t, r)), t.cm ? K1(t.cm, r, l) : Gs(t, r, l), pu(t, o, Ct), t.cantEdit && vu(t, K(t.firstLine(), 0)) && (t.cantEdit = !1);
      }
    }

    function K1(t, r, o) {
      var l = t.doc,
          u = t.display,
          f = r.from,
          d = r.to,
          h = !1,
          v = f.line;
      t.options.lineWrapping || (v = Te(cn(oe(l, f.line))), l.iter(v, d.line + 1, function (N) {
        if (N == u.maxLine) return h = !0, !0;
      })), l.sel.contains(r.from, r.to) > -1 && jd(t), Gs(l, r, o, Nh(t)), t.options.lineWrapping || (l.iter(v, f.line + r.text.length, function (N) {
        var z = qo(N);
        z > u.maxLineLength && (u.maxLine = N, u.maxLineLength = z, u.maxLineChanged = !0, h = !1);
      }), h && (t.curOp.updateMaxLine = !0)), Pm(l, f.line), bl(t, 400);
      var g = r.text.length - (d.line - f.line) - 1;
      r.full ? Ft(t) : f.line == d.line && r.text.length == 1 && !Zh(t.doc, r) ? tr(t, f.line, "text") : Ft(t, f.line, d.line + 1, g);
      var k = nn(t, "changes"),
          T = nn(t, "change");

      if (T || k) {
        var P = {
          from: f,
          to: d,
          text: r.text,
          removed: r.removed,
          origin: r.origin
        };
        T && nt(t, "change", t, P), k && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(P);
      }

      t.display.selForContextMenu = null;
    }

    function ki(t, r, o, l, u) {
      var f;
      l || (l = o), pe(l, o) < 0 && (f = [l, o], o = f[0], l = f[1]), typeof r == "string" && (r = t.splitLines(r)), xi(t, {
        from: o,
        to: l,
        text: r,
        origin: u
      });
    }

    function vp(t, r, o, l) {
      o < t.line ? t.line += l : r < t.line && (t.line = r, t.ch = 0);
    }

    function gp(t, r, o, l) {
      for (var u = 0; u < t.length; ++u) {
        var f = t[u],
            d = !0;

        if (f.ranges) {
          f.copied || (f = t[u] = f.deepCopy(), f.copied = !0);

          for (var h = 0; h < f.ranges.length; h++) {
            vp(f.ranges[h].anchor, r, o, l), vp(f.ranges[h].head, r, o, l);
          }

          continue;
        }

        for (var v = 0; v < f.changes.length; ++v) {
          var g = f.changes[v];
          if (o < g.from.line) g.from = K(g.from.line + l, g.from.ch), g.to = K(g.to.line + l, g.to.ch);else if (r <= g.to.line) {
            d = !1;
            break;
          }
        }

        d || (t.splice(0, u + 1), u = 0);
      }
    }

    function yp(t, r) {
      var o = r.from.line,
          l = r.to.line,
          u = r.text.length - (l - o) - 1;
      gp(t.done, o, l, u), gp(t.undone, o, l, u);
    }

    function Ol(t, r, o, l) {
      var u = r,
          f = r;
      return typeof r == "number" ? f = oe(t, Qd(t, r)) : u = Te(r), u == null ? null : (l(f, u) && t.cm && tr(t.cm, u, o), f);
    }

    function Nl(t) {
      this.lines = t, this.parent = null;

      for (var r = 0, o = 0; o < t.length; ++o) {
        t[o].parent = this, r += t[o].height;
      }

      this.height = r;
    }

    Nl.prototype = {
      chunkSize: function chunkSize() {
        return this.lines.length;
      },
      removeInner: function removeInner(t, r) {
        for (var o = t, l = t + r; o < l; ++o) {
          var u = this.lines[o];
          this.height -= u.height, Gm(u), nt(u, "delete");
        }

        this.lines.splice(t, r);
      },
      collapse: function collapse(t) {
        t.push.apply(t, this.lines);
      },
      insertInner: function insertInner(t, r, o) {
        this.height += o, this.lines = this.lines.slice(0, t).concat(r).concat(this.lines.slice(t));

        for (var l = 0; l < r.length; ++l) {
          r[l].parent = this;
        }
      },
      iterN: function iterN(t, r, o) {
        for (var l = t + r; t < l; ++t) {
          if (o(this.lines[t])) return !0;
        }
      }
    };

    function Pl(t) {
      this.children = t;

      for (var r = 0, o = 0, l = 0; l < t.length; ++l) {
        var u = t[l];
        r += u.chunkSize(), o += u.height, u.parent = this;
      }

      this.size = r, this.height = o, this.parent = null;
    }

    Pl.prototype = {
      chunkSize: function chunkSize() {
        return this.size;
      },
      removeInner: function removeInner(t, r) {
        this.size -= r;

        for (var o = 0; o < this.children.length; ++o) {
          var l = this.children[o],
              u = l.chunkSize();

          if (t < u) {
            var f = Math.min(r, u - t),
                d = l.height;
            if (l.removeInner(t, f), this.height -= d - l.height, u == f && (this.children.splice(o--, 1), l.parent = null), (r -= f) == 0) break;
            t = 0;
          } else t -= u;
        }

        if (this.size - r < 25 && (this.children.length > 1 || !(this.children[0] instanceof Nl))) {
          var h = [];
          this.collapse(h), this.children = [new Nl(h)], this.children[0].parent = this;
        }
      },
      collapse: function collapse(t) {
        for (var r = 0; r < this.children.length; ++r) {
          this.children[r].collapse(t);
        }
      },
      insertInner: function insertInner(t, r, o) {
        this.size += r.length, this.height += o;

        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
              f = u.chunkSize();

          if (t <= f) {
            if (u.insertInner(t, r, o), u.lines && u.lines.length > 50) {
              for (var d = u.lines.length % 25 + 25, h = d; h < u.lines.length;) {
                var v = new Nl(u.lines.slice(h, h += 25));
                u.height -= v.height, this.children.splice(++l, 0, v), v.parent = this;
              }

              u.lines = u.lines.slice(0, d), this.maybeSpill();
            }

            break;
          }

          t -= f;
        }
      },
      maybeSpill: function maybeSpill() {
        if (!(this.children.length <= 10)) {
          var t = this;

          do {
            var r = t.children.splice(t.children.length - 5, 5),
                o = new Pl(r);

            if (t.parent) {
              t.size -= o.size, t.height -= o.height;
              var u = be(t.parent.children, t);
              t.parent.children.splice(u + 1, 0, o);
            } else {
              var l = new Pl(t.children);
              l.parent = t, t.children = [l, o], t = l;
            }

            o.parent = t.parent;
          } while (t.children.length > 10);

          t.parent.maybeSpill();
        }
      },
      iterN: function iterN(t, r, o) {
        for (var l = 0; l < this.children.length; ++l) {
          var u = this.children[l],
              f = u.chunkSize();

          if (t < f) {
            var d = Math.min(r, f - t);
            if (u.iterN(t, d, o)) return !0;
            if ((r -= d) == 0) break;
            t = 0;
          } else t -= f;
        }
      }
    };

    var Bl = function Bl(t, r, o) {
      if (o) for (var l in o) {
        o.hasOwnProperty(l) && (this[l] = o[l]);
      }
      this.doc = t, this.node = r;
    };

    Bl.prototype.clear = function () {
      var t = this.doc.cm,
          r = this.line.widgets,
          o = this.line,
          l = Te(o);

      if (!(l == null || !r)) {
        for (var u = 0; u < r.length; ++u) {
          r[u] == this && r.splice(u--, 1);
        }

        r.length || (o.widgets = null);
        var f = Sl(this);
        xn(o, Math.max(0, o.height - f)), t && (Ht(t, function () {
          mp(t, o, -f), tr(t, l, "widget");
        }), nt(t, "lineWidgetCleared", t, this, l));
      }
    }, Bl.prototype.changed = function () {
      var t = this,
          r = this.height,
          o = this.doc.cm,
          l = this.line;
      this.height = null;
      var u = Sl(this) - r;
      !u || (er(this.doc, l) || xn(l, l.height + u), o && Ht(o, function () {
        o.curOp.forceUpdate = !0, mp(o, l, u), nt(o, "lineWidgetChanged", o, t, Te(l));
      }));
    }, si(Bl);

    function mp(t, r, o) {
      In(r) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && Rs(t, o);
    }

    function G1(t, r, o, l) {
      var u = new Bl(t, o, l),
          f = t.cm;
      return f && u.noHScroll && (f.display.alignWidgets = !0), Ol(t, r, "widget", function (d) {
        var h = d.widgets || (d.widgets = []);

        if (u.insertAt == null ? h.push(u) : h.splice(Math.min(h.length, Math.max(0, u.insertAt)), 0, u), u.line = d, f && !er(t, d)) {
          var v = In(d) < t.scrollTop;
          xn(d, d.height + Sl(u)), v && Rs(f, u.height), f.curOp.forceUpdate = !0;
        }

        return !0;
      }), f && nt(f, "lineWidgetAdded", f, u, typeof r == "number" ? r : Te(r)), u;
    }

    var wp = 0,
        or = function or(t, r) {
      this.lines = [], this.type = r, this.doc = t, this.id = ++wp;
    };

    or.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var t = this.doc.cm,
            r = t && !t.curOp;

        if (r && $r(t), nn(this, "clear")) {
          var o = this.find();
          o && nt(this, "clear", o.from, o.to);
        }

        for (var l = null, u = null, f = 0; f < this.lines.length; ++f) {
          var d = this.lines[f],
              h = ml(d.markedSpans, this);
          t && !this.collapsed ? tr(t, Te(d), "text") : t && (h.to != null && (u = Te(d)), h.from != null && (l = Te(d))), d.markedSpans = Im(d.markedSpans, h), h.from == null && this.collapsed && !er(this.doc, d) && t && xn(d, vi(t.display));
        }

        if (t && this.collapsed && !t.options.lineWrapping) for (var v = 0; v < this.lines.length; ++v) {
          var g = cn(this.lines[v]),
              k = qo(g);
          k > t.display.maxLineLength && (t.display.maxLine = g, t.display.maxLineLength = k, t.display.maxLineChanged = !0);
        }
        l != null && t && this.collapsed && Ft(t, l, u + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && ap(t.doc)), t && nt(t, "markerCleared", t, this, l, u), r && Ur(t), this.parent && this.parent.clear();
      }
    }, or.prototype.find = function (t, r) {
      t == null && this.type == "bookmark" && (t = 1);

      for (var o, l, u = 0; u < this.lines.length; ++u) {
        var f = this.lines[u],
            d = ml(f.markedSpans, this);
        if (d.from != null && (o = K(r ? f : Te(f), d.from), t == -1)) return o;
        if (d.to != null && (l = K(r ? f : Te(f), d.to), t == 1)) return l;
      }

      return o && {
        from: o,
        to: l
      };
    }, or.prototype.changed = function () {
      var t = this,
          r = this.find(-1, !0),
          o = this,
          l = this.doc.cm;
      !r || !l || Ht(l, function () {
        var u = r.line,
            f = Te(r.line),
            d = Es(l, f);

        if (d && (Eh(d), l.curOp.selectionChanged = l.curOp.forceUpdate = !0), l.curOp.updateMaxLine = !0, !er(o.doc, u) && o.height != null) {
          var h = o.height;
          o.height = null;
          var v = Sl(o) - h;
          v && xn(u, u.height + v);
        }

        nt(l, "markerChanged", l, t);
      });
    }, or.prototype.attachLine = function (t) {
      if (!this.lines.length && this.doc.cm) {
        var r = this.doc.cm.curOp;
        (!r.maybeHiddenMarkers || be(r.maybeHiddenMarkers, this) == -1) && (r.maybeUnhiddenMarkers || (r.maybeUnhiddenMarkers = [])).push(this);
      }

      this.lines.push(t);
    }, or.prototype.detachLine = function (t) {
      if (this.lines.splice(be(this.lines, t), 1), !this.lines.length && this.doc.cm) {
        var r = this.doc.cm.curOp;
        (r.maybeHiddenMarkers || (r.maybeHiddenMarkers = [])).push(this);
      }
    }, si(or);

    function _i(t, r, o, l, u) {
      if (l && l.shared) return V1(t, r, o, l, u);
      if (t.cm && !t.cm.curOp) return rt(t.cm, _i)(t, r, o, l, u);
      var f = new or(t, u),
          d = pe(r, o);
      if (l && Se(l, f, !1), d > 0 || d == 0 && f.clearWhenEmpty !== !1) return f;

      if (f.replacedWith && (f.collapsed = !0, f.widgetNode = xe("span", [f.replacedWith], "CodeMirror-widget"), l.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"), l.insertLeft && (f.widgetNode.insertLeft = !0)), f.collapsed) {
        if (sh(t, r.line, r, o, f) || r.line != o.line && sh(t, o.line, r, o, f)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
        Mm();
      }

      f.addToHistory && tp(t, {
        from: r,
        to: o,
        origin: "markText"
      }, t.sel, NaN);
      var h = r.line,
          v = t.cm,
          g;

      if (t.iter(h, o.line + 1, function (T) {
        v && f.collapsed && !v.options.lineWrapping && cn(T) == v.display.maxLine && (g = !0), f.collapsed && h != r.line && xn(T, 0), Rm(T, new Yo(f, h == r.line ? r.ch : null, h == o.line ? o.ch : null), t.cm && t.cm.curOp), ++h;
      }), f.collapsed && t.iter(r.line, o.line + 1, function (T) {
        er(t, T) && xn(T, 0);
      }), f.clearOnEnter && de(f, "beforeCursorEnter", function () {
        return f.clear();
      }), f.readOnly && (Bm(), (t.history.done.length || t.history.undone.length) && t.clearHistory()), f.collapsed && (f.id = ++wp, f.atomic = !0), v) {
        if (g && (v.curOp.updateMaxLine = !0), f.collapsed) Ft(v, r.line, o.line + 1);else if (f.className || f.startStyle || f.endStyle || f.css || f.attributes || f.title) for (var k = r.line; k <= o.line; k++) {
          tr(v, k, "text");
        }
        f.atomic && ap(v.doc), nt(v, "markerAdded", v, f);
      }

      return f;
    }

    var Ml = function Ml(t, r) {
      this.markers = t, this.primary = r;

      for (var o = 0; o < t.length; ++o) {
        t[o].parent = this;
      }
    };

    Ml.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;

        for (var t = 0; t < this.markers.length; ++t) {
          this.markers[t].clear();
        }

        nt(this, "clear");
      }
    }, Ml.prototype.find = function (t, r) {
      return this.primary.find(t, r);
    }, si(Ml);

    function V1(t, r, o, l, u) {
      l = Se(l), l.shared = !1;
      var f = [_i(t, r, o, l, u)],
          d = f[0],
          h = l.widgetNode;
      return lr(t, function (v) {
        h && (l.widgetNode = h.cloneNode(!0)), f.push(_i(v, ve(v, r), ve(v, o), l, u));

        for (var g = 0; g < v.linked.length; ++g) {
          if (v.linked[g].isParent) return;
        }

        d = we(f);
      }), new Ml(f, d);
    }

    function Cp(t) {
      return t.findMarks(K(t.first, 0), t.clipPos(K(t.lastLine())), function (r) {
        return r.parent;
      });
    }

    function Q1(t, r) {
      for (var o = 0; o < r.length; o++) {
        var l = r[o],
            u = l.find(),
            f = t.clipPos(u.from),
            d = t.clipPos(u.to);

        if (pe(f, d)) {
          var h = _i(t, f, d, l.primary, l.primary.type);

          l.markers.push(h), h.parent = l;
        }
      }
    }

    function Y1(t) {
      for (var r = function r(l) {
        var u = t[l],
            f = [u.primary.doc];
        lr(u.primary.doc, function (v) {
          return f.push(v);
        });

        for (var d = 0; d < u.markers.length; d++) {
          var h = u.markers[d];
          be(f, h.doc) == -1 && (h.parent = null, u.markers.splice(d--, 1));
        }
      }, o = 0; o < t.length; o++) {
        r(o);
      }
    }

    var X1 = 0,
        Dt = function Dt(t, r, o, l, u) {
      if (!(this instanceof Dt)) return new Dt(t, r, o, l, u);
      o == null && (o = 0), Pl.call(this, [new Nl([new di("", null)])]), this.first = o, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = o;
      var f = K(o, 0);
      this.sel = rr(f), this.history = new cu(null), this.id = ++X1, this.modeOption = r, this.lineSep = l, this.direction = u == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof t == "string" && (t = this.splitLines(t)), Gs(this, {
        from: f,
        to: f,
        text: t
      }), pt(this, rr(f), Ct);
    };

    Dt.prototype = bt(Pl.prototype, {
      constructor: Dt,
      iter: function iter(t, r, o) {
        o ? this.iterN(t - this.first, r - t, o) : this.iterN(this.first, this.first + this.size, t);
      },
      insert: function insert(t, r) {
        for (var o = 0, l = 0; l < r.length; ++l) {
          o += r[l].height;
        }

        this.insertInner(t - this.first, r, o);
      },
      remove: function remove(t, r) {
        this.removeInner(t - this.first, r);
      },
      getValue: function getValue(t) {
        var r = cs(this, this.first, this.first + this.size);
        return t === !1 ? r : r.join(t || this.lineSeparator());
      },
      setValue: it(function (t) {
        var r = K(this.first, 0),
            o = this.first + this.size - 1;
        xi(this, {
          from: r,
          to: K(o, oe(this, o).text.length),
          text: this.splitLines(t),
          origin: "setValue",
          full: !0
        }, !0), this.cm && _l(this.cm, 0, 0), pt(this, rr(r), Ct);
      }),
      replaceRange: function replaceRange(t, r, o, l) {
        r = ve(this, r), o = o ? ve(this, o) : r, ki(this, t, r, o, l);
      },
      getRange: function getRange(t, r, o) {
        var l = Pr(this, ve(this, t), ve(this, r));
        return o === !1 ? l : o === "" ? l.join("") : l.join(o || this.lineSeparator());
      },
      getLine: function getLine(t) {
        var r = this.getLineHandle(t);
        return r && r.text;
      },
      getLineHandle: function getLineHandle(t) {
        if (gl(this, t)) return oe(this, t);
      },
      getLineNumber: function getLineNumber(t) {
        return Te(t);
      },
      getLineHandleVisualStart: function getLineHandleVisualStart(t) {
        return typeof t == "number" && (t = oe(this, t)), cn(t);
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
      clipPos: function clipPos(t) {
        return ve(this, t);
      },
      getCursor: function getCursor(t) {
        var r = this.sel.primary(),
            o;
        return t == null || t == "head" ? o = r.head : t == "anchor" ? o = r.anchor : t == "end" || t == "to" || t === !1 ? o = r.to() : o = r.from(), o;
      },
      listSelections: function listSelections() {
        return this.sel.ranges;
      },
      somethingSelected: function somethingSelected() {
        return this.sel.somethingSelected();
      },
      setCursor: it(function (t, r, o) {
        lp(this, ve(this, typeof t == "number" ? K(t, r || 0) : t), null, o);
      }),
      setSelection: it(function (t, r, o) {
        lp(this, ve(this, t), ve(this, r || t), o);
      }),
      extendSelection: it(function (t, r, o) {
        hu(this, ve(this, t), r && ve(this, r), o);
      }),
      extendSelections: it(function (t, r) {
        ip(this, Yd(this, t), r);
      }),
      extendSelectionsBy: it(function (t, r) {
        var o = Dr(this.sel.ranges, t);
        ip(this, Yd(this, o), r);
      }),
      setSelections: it(function (t, r, o) {
        if (!!t.length) {
          for (var l = [], u = 0; u < t.length; u++) {
            l[u] = new Ee(ve(this, t[u].anchor), ve(this, t[u].head || t[u].anchor));
          }

          r == null && (r = Math.min(t.length - 1, this.sel.primIndex)), pt(this, hn(this.cm, l, r), o);
        }
      }),
      addSelection: it(function (t, r, o) {
        var l = this.sel.ranges.slice(0);
        l.push(new Ee(ve(this, t), ve(this, r || t))), pt(this, hn(this.cm, l, l.length - 1), o);
      }),
      getSelection: function getSelection(t) {
        for (var r = this.sel.ranges, o, l = 0; l < r.length; l++) {
          var u = Pr(this, r[l].from(), r[l].to());
          o = o ? o.concat(u) : u;
        }

        return t === !1 ? o : o.join(t || this.lineSeparator());
      },
      getSelections: function getSelections(t) {
        for (var r = [], o = this.sel.ranges, l = 0; l < o.length; l++) {
          var u = Pr(this, o[l].from(), o[l].to());
          t !== !1 && (u = u.join(t || this.lineSeparator())), r[l] = u;
        }

        return r;
      },
      replaceSelection: function replaceSelection(t, r, o) {
        for (var l = [], u = 0; u < this.sel.ranges.length; u++) {
          l[u] = t;
        }

        this.replaceSelections(l, r, o || "+input");
      },
      replaceSelections: it(function (t, r, o) {
        for (var l = [], u = this.sel, f = 0; f < u.ranges.length; f++) {
          var d = u.ranges[f];
          l[f] = {
            from: d.from(),
            to: d.to(),
            text: this.splitLines(t[f]),
            origin: o
          };
        }

        for (var h = r && r != "end" && I1(this, l, r), v = l.length - 1; v >= 0; v--) {
          xi(this, l[v]);
        }

        h ? op(this, h) : this.cm && mi(this.cm);
      }),
      undo: it(function () {
        gu(this, "undo");
      }),
      redo: it(function () {
        gu(this, "redo");
      }),
      undoSelection: it(function () {
        gu(this, "undo", !0);
      }),
      redoSelection: it(function () {
        gu(this, "redo", !0);
      }),
      setExtending: function setExtending(t) {
        this.extend = t;
      },
      getExtending: function getExtending() {
        return this.extend;
      },
      historySize: function historySize() {
        for (var t = this.history, r = 0, o = 0, l = 0; l < t.done.length; l++) {
          t.done[l].ranges || ++r;
        }

        for (var u = 0; u < t.undone.length; u++) {
          t.undone[u].ranges || ++o;
        }

        return {
          undo: r,
          redo: o
        };
      },
      clearHistory: function clearHistory() {
        var t = this;
        this.history = new cu(this.history), lr(this, function (r) {
          return r.history = t.history;
        }, !0);
      },
      markClean: function markClean() {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function changeGeneration(t) {
        return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
      },
      isClean: function isClean(t) {
        return this.history.generation == (t || this.cleanGeneration);
      },
      getHistory: function getHistory() {
        return {
          done: Ci(this.history.done),
          undone: Ci(this.history.undone)
        };
      },
      setHistory: function setHistory(t) {
        var r = this.history = new cu(this.history);
        r.done = Ci(t.done.slice(0), null, !0), r.undone = Ci(t.undone.slice(0), null, !0);
      },
      setGutterMarker: it(function (t, r, o) {
        return Ol(this, t, "gutter", function (l) {
          var u = l.gutterMarkers || (l.gutterMarkers = {});
          return u[r] = o, !o && Wd(u) && (l.gutterMarkers = null), !0;
        });
      }),
      clearGutter: it(function (t) {
        var r = this;
        this.iter(function (o) {
          o.gutterMarkers && o.gutterMarkers[t] && Ol(r, o, "gutter", function () {
            return o.gutterMarkers[t] = null, Wd(o.gutterMarkers) && (o.gutterMarkers = null), !0;
          });
        });
      }),
      lineInfo: function lineInfo(t) {
        var r;

        if (typeof t == "number") {
          if (!gl(this, t) || (r = t, t = oe(this, t), !t)) return null;
        } else if (r = Te(t), r == null) return null;

        return {
          line: r,
          handle: t,
          text: t.text,
          gutterMarkers: t.gutterMarkers,
          textClass: t.textClass,
          bgClass: t.bgClass,
          wrapClass: t.wrapClass,
          widgets: t.widgets
        };
      },
      addLineClass: it(function (t, r, o) {
        return Ol(this, t, r == "gutter" ? "gutter" : "class", function (l) {
          var u = r == "text" ? "textClass" : r == "background" ? "bgClass" : r == "gutter" ? "gutterClass" : "wrapClass";
          if (!l[u]) l[u] = o;else {
            if (q(o).test(l[u])) return !1;
            l[u] += " " + o;
          }
          return !0;
        });
      }),
      removeLineClass: it(function (t, r, o) {
        return Ol(this, t, r == "gutter" ? "gutter" : "class", function (l) {
          var u = r == "text" ? "textClass" : r == "background" ? "bgClass" : r == "gutter" ? "gutterClass" : "wrapClass",
              f = l[u];
          if (f) {
            if (o == null) l[u] = null;else {
              var d = f.match(q(o));
              if (!d) return !1;
              var h = d.index + d[0].length;
              l[u] = f.slice(0, d.index) + (!d.index || h == f.length ? "" : " ") + f.slice(h) || null;
            }
          } else return !1;
          return !0;
        });
      }),
      addLineWidget: it(function (t, r, o) {
        return G1(this, t, r, o);
      }),
      removeLineWidget: function removeLineWidget(t) {
        t.clear();
      },
      markText: function markText(t, r, o) {
        return _i(this, ve(this, t), ve(this, r), o, o && o.type || "range");
      },
      setBookmark: function setBookmark(t, r) {
        var o = {
          replacedWith: r && (r.nodeType == null ? r.widget : r),
          insertLeft: r && r.insertLeft,
          clearWhenEmpty: !1,
          shared: r && r.shared,
          handleMouseEvents: r && r.handleMouseEvents
        };
        return t = ve(this, t), _i(this, t, t, o, "bookmark");
      },
      findMarksAt: function findMarksAt(t) {
        t = ve(this, t);
        var r = [],
            o = oe(this, t.line).markedSpans;
        if (o) for (var l = 0; l < o.length; ++l) {
          var u = o[l];
          (u.from == null || u.from <= t.ch) && (u.to == null || u.to >= t.ch) && r.push(u.marker.parent || u.marker);
        }
        return r;
      },
      findMarks: function findMarks(t, r, o) {
        t = ve(this, t), r = ve(this, r);
        var l = [],
            u = t.line;
        return this.iter(t.line, r.line + 1, function (f) {
          var d = f.markedSpans;
          if (d) for (var h = 0; h < d.length; h++) {
            var v = d[h];
            !(v.to != null && u == t.line && t.ch >= v.to || v.from == null && u != t.line || v.from != null && u == r.line && v.from >= r.ch) && (!o || o(v.marker)) && l.push(v.marker.parent || v.marker);
          }
          ++u;
        }), l;
      },
      getAllMarks: function getAllMarks() {
        var t = [];
        return this.iter(function (r) {
          var o = r.markedSpans;
          if (o) for (var l = 0; l < o.length; ++l) {
            o[l].from != null && t.push(o[l].marker);
          }
        }), t;
      },
      posFromIndex: function posFromIndex(t) {
        var r,
            o = this.first,
            l = this.lineSeparator().length;
        return this.iter(function (u) {
          var f = u.text.length + l;
          if (f > t) return r = t, !0;
          t -= f, ++o;
        }), ve(this, K(o, r));
      },
      indexFromPos: function indexFromPos(t) {
        t = ve(this, t);
        var r = t.ch;
        if (t.line < this.first || t.ch < 0) return 0;
        var o = this.lineSeparator().length;
        return this.iter(this.first, t.line, function (l) {
          r += l.text.length + o;
        }), r;
      },
      copy: function copy(t) {
        var r = new Dt(cs(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
        return r.scrollTop = this.scrollTop, r.scrollLeft = this.scrollLeft, r.sel = this.sel, r.extend = !1, t && (r.history.undoDepth = this.history.undoDepth, r.setHistory(this.getHistory())), r;
      },
      linkedDoc: function linkedDoc(t) {
        t || (t = {});
        var r = this.first,
            o = this.first + this.size;
        t.from != null && t.from > r && (r = t.from), t.to != null && t.to < o && (o = t.to);
        var l = new Dt(cs(this, r, o), t.mode || this.modeOption, r, this.lineSep, this.direction);
        return t.sharedHist && (l.history = this.history), (this.linked || (this.linked = [])).push({
          doc: l,
          sharedHist: t.sharedHist
        }), l.linked = [{
          doc: this,
          isParent: !0,
          sharedHist: t.sharedHist
        }], Q1(l, Cp(this)), l;
      },
      unlinkDoc: function unlinkDoc(t) {
        if (t instanceof Ne && (t = t.doc), this.linked) for (var r = 0; r < this.linked.length; ++r) {
          var o = this.linked[r];

          if (o.doc == t) {
            this.linked.splice(r, 1), t.unlinkDoc(this), Y1(Cp(this));
            break;
          }
        }

        if (t.history == this.history) {
          var l = [t.id];
          lr(t, function (u) {
            return l.push(u.id);
          }, !0), t.history = new cu(null), t.history.done = Ci(this.history.done, l), t.history.undone = Ci(this.history.undone, l);
        }
      },
      iterLinkedDocs: function iterLinkedDocs(t) {
        lr(this, t);
      },
      getMode: function getMode() {
        return this.mode;
      },
      getEditor: function getEditor() {
        return this.cm;
      },
      splitLines: function splitLines(t) {
        return this.lineSep ? t.split(this.lineSep) : os(t);
      },
      lineSeparator: function lineSeparator() {
        return this.lineSep || "\n";
      },
      setDirection: it(function (t) {
        t != "rtl" && (t = "ltr"), t != this.direction && (this.direction = t, this.iter(function (r) {
          return r.order = null;
        }), this.cm && R1(this.cm));
      })
    }), Dt.prototype.eachLine = Dt.prototype.iter;
    var Sp = 0;

    function Z1(t) {
      var r = this;

      if (xp(r), !(tt(r, t) || Rn(r.display, t))) {
        At(t), C && (Sp = +new Date());
        var o = Rr(r, t, !0),
            l = t.dataTransfer.files;
        if (!(!o || r.isReadOnly())) if (l && l.length && window.FileReader && window.File) for (var u = l.length, f = Array(u), d = 0, h = function h() {
          ++d == u && rt(r, function () {
            o = ve(r.doc, o);
            var N = {
              from: o,
              to: o,
              text: r.doc.splitLines(f.filter(function (z) {
                return z != null;
              }).join(r.doc.lineSeparator())),
              origin: "paste"
            };
            xi(r.doc, N), op(r.doc, rr(ve(r.doc, o), ve(r.doc, ir(N))));
          })();
        }, v = function v(N, z) {
          if (r.options.allowDropFileTypes && be(r.options.allowDropFileTypes, N.type) == -1) {
            h();
            return;
          }

          var $ = new FileReader();
          $.onerror = function () {
            return h();
          }, $.onload = function () {
            var G = $.result;

            if (/[\x00-\x08\x0e-\x1f]{2}/.test(G)) {
              h();
              return;
            }

            f[z] = G, h();
          }, $.readAsText(N);
        }, g = 0; g < l.length; g++) {
          v(l[g], g);
        } else {
          if (r.state.draggingText && r.doc.sel.contains(o) > -1) {
            r.state.draggingText(t), setTimeout(function () {
              return r.display.input.focus();
            }, 20);
            return;
          }

          try {
            var k = t.dataTransfer.getData("Text");

            if (k) {
              var T;
              if (r.state.draggingText && !r.state.draggingText.copy && (T = r.listSelections()), pu(r.doc, rr(o, o)), T) for (var P = 0; P < T.length; ++P) {
                ki(r.doc, "", T[P].anchor, T[P].head, "drag");
              }
              r.replaceSelection(k, "around", "paste"), r.display.input.focus();
            }
          } catch (_unused27) {}
        }
      }
    }

    function J1(t, r) {
      if (C && (!t.state.draggingText || +new Date() - Sp < 100)) {
        vl(r);
        return;
      }

      if (!(tt(t, r) || Rn(t.display, r)) && (r.dataTransfer.setData("Text", t.getSelection()), r.dataTransfer.effectAllowed = "copyMove", r.dataTransfer.setDragImage && !F)) {
        var o = Y("img", null, null, "position: fixed; left: 0; top: 0;");
        o.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", b && (o.width = o.height = 1, t.display.wrapper.appendChild(o), o._top = o.offsetTop), r.dataTransfer.setDragImage(o, 0, 0), b && o.parentNode.removeChild(o);
      }
    }

    function q1(t, r) {
      var o = Rr(t, r);

      if (!!o) {
        var l = document.createDocumentFragment();
        Ns(t, o, l), t.display.dragCursor || (t.display.dragCursor = Y("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)), me(t.display.dragCursor, l);
      }
    }

    function xp(t) {
      t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor), t.display.dragCursor = null);
    }

    function kp(t) {
      if (!!document.getElementsByClassName) {
        for (var r = document.getElementsByClassName("CodeMirror"), o = [], l = 0; l < r.length; l++) {
          var u = r[l].CodeMirror;
          u && o.push(u);
        }

        o.length && o[0].operation(function () {
          for (var f = 0; f < o.length; f++) {
            t(o[f]);
          }
        });
      }
    }

    var _p = !1;

    function e3() {
      _p || (t3(), _p = !0);
    }

    function t3() {
      var t;
      de(window, "resize", function () {
        t == null && (t = setTimeout(function () {
          t = null, kp(n3);
        }, 100));
      }), de(window, "blur", function () {
        return kp(yi);
      });
    }

    function n3(t) {
      var r = t.display;
      r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.scrollbarsClipped = !1, t.setSize();
    }

    for (var ur = {
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
    }, Il = 0; Il < 10; Il++) {
      ur[Il + 48] = ur[Il + 96] = String(Il);
    }

    for (var yu = 65; yu <= 90; yu++) {
      ur[yu] = String.fromCharCode(yu);
    }

    for (var Rl = 1; Rl <= 12; Rl++) {
      ur[Rl + 111] = ur[Rl + 63235] = "F" + Rl;
    }

    var Hn = {};
    Hn.basic = {
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
    }, Hn.pcDefault = {
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
    }, Hn.emacsy = {
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
    }, Hn.macDefault = {
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
    }, Hn.default = L ? Hn.macDefault : Hn.pcDefault;

    function r3(t) {
      var r = t.split(/-(?!$)/);
      t = r[r.length - 1];

      for (var o, l, u, f, d = 0; d < r.length - 1; d++) {
        var h = r[d];
        if (/^(cmd|meta|m)$/i.test(h)) f = !0;else if (/^a(lt)?$/i.test(h)) o = !0;else if (/^(c|ctrl|control)$/i.test(h)) l = !0;else if (/^s(hift)?$/i.test(h)) u = !0;else throw new Error("Unrecognized modifier name: " + h);
      }

      return o && (t = "Alt-" + t), l && (t = "Ctrl-" + t), f && (t = "Cmd-" + t), u && (t = "Shift-" + t), t;
    }

    function i3(t) {
      var r = {};

      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          var l = t[o];
          if (/^(name|fallthrough|(de|at)tach)$/.test(o)) continue;

          if (l == "...") {
            delete t[o];
            continue;
          }

          for (var u = Dr(o.split(" "), r3), f = 0; f < u.length; f++) {
            var d = void 0,
                h = void 0;
            f == u.length - 1 ? (h = u.join(" "), d = l) : (h = u.slice(0, f + 1).join(" "), d = "...");
            var v = r[h];
            if (!v) r[h] = d;else if (v != d) throw new Error("Inconsistent bindings for " + h);
          }

          delete t[o];
        }
      }

      for (var g in r) {
        t[g] = r[g];
      }

      return t;
    }

    function Ei(t, r, o, l) {
      r = mu(r);
      var u = r.call ? r.call(t, l) : r[t];
      if (u === !1) return "nothing";
      if (u === "...") return "multi";
      if (u != null && o(u)) return "handled";

      if (r.fallthrough) {
        if (Object.prototype.toString.call(r.fallthrough) != "[object Array]") return Ei(t, r.fallthrough, o, l);

        for (var f = 0; f < r.fallthrough.length; f++) {
          var d = Ei(t, r.fallthrough[f], o, l);
          if (d) return d;
        }
      }
    }

    function Ep(t) {
      var r = typeof t == "string" ? t : ur[t.keyCode];
      return r == "Ctrl" || r == "Alt" || r == "Shift" || r == "Mod";
    }

    function Tp(t, r, o) {
      var l = t;
      return r.altKey && l != "Alt" && (t = "Alt-" + t), (H ? r.metaKey : r.ctrlKey) && l != "Ctrl" && (t = "Ctrl-" + t), (H ? r.ctrlKey : r.metaKey) && l != "Mod" && (t = "Cmd-" + t), !o && r.shiftKey && l != "Shift" && (t = "Shift-" + t), t;
    }

    function Lp(t, r) {
      if (b && t.keyCode == 34 && t.char) return !1;
      var o = ur[t.keyCode];
      return o == null || t.altGraphKey ? !1 : (t.keyCode == 3 && t.code && (o = t.code), Tp(o, t, r));
    }

    function mu(t) {
      return typeof t == "string" ? Hn[t] : t;
    }

    function Ti(t, r) {
      for (var o = t.doc.sel.ranges, l = [], u = 0; u < o.length; u++) {
        for (var f = r(o[u]); l.length && pe(f.from, we(l).to) <= 0;) {
          var d = l.pop();

          if (pe(d.from, f.from) < 0) {
            f.from = d.from;
            break;
          }
        }

        l.push(f);
      }

      Ht(t, function () {
        for (var h = l.length - 1; h >= 0; h--) {
          ki(t.doc, "", l[h].from, l[h].to, "+delete");
        }

        mi(t);
      });
    }

    function Xs(t, r, o) {
      var l = $d(t.text, r + o, o);
      return l < 0 || l > t.text.length ? null : l;
    }

    function Zs(t, r, o) {
      var l = Xs(t, r.ch, o);
      return l == null ? null : new K(r.line, l, o < 0 ? "after" : "before");
    }

    function Js(t, r, o, l, u) {
      if (t) {
        r.doc.direction == "rtl" && (u = -u);
        var f = Bn(o, r.doc.direction);

        if (f) {
          var d = u < 0 ? we(f) : f[0],
              h = u < 0 == (d.level == 1),
              v = h ? "after" : "before",
              g;

          if (d.level > 0 || r.doc.direction == "rtl") {
            var k = pi(r, o);
            g = u < 0 ? o.text.length - 1 : 0;
            var T = En(r, k, g).top;
            g = dl(function (P) {
              return En(r, k, P).top == T;
            }, u < 0 == (d.level == 1) ? d.from : d.to - 1, g), v == "before" && (g = Xs(o, g, 1));
          } else g = u < 0 ? d.to : d.from;

          return new K(l, g, v);
        }
      }

      return new K(l, u < 0 ? o.text.length : 0, u < 0 ? "before" : "after");
    }

    function l3(t, r, o, l) {
      var u = Bn(r, t.doc.direction);
      if (!u) return Zs(r, o, l);
      o.ch >= r.text.length ? (o.ch = r.text.length, o.sticky = "before") : o.ch <= 0 && (o.ch = 0, o.sticky = "after");
      var f = pl(u, o.ch, o.sticky),
          d = u[f];
      if (t.doc.direction == "ltr" && d.level % 2 == 0 && (l > 0 ? d.to > o.ch : d.from < o.ch)) return Zs(r, o, l);

      var h = function h(Z, te) {
        return Xs(r, Z instanceof K ? Z.ch : Z, te);
      },
          v,
          g = function g(Z) {
        return t.options.lineWrapping ? (v = v || pi(t, r), Oh(t, r, v, Z)) : {
          begin: 0,
          end: r.text.length
        };
      },
          k = g(o.sticky == "before" ? h(o, -1) : o.ch);

      if (t.doc.direction == "rtl" || d.level == 1) {
        var T = d.level == 1 == l < 0,
            P = h(o, T ? 1 : -1);

        if (P != null && (T ? P <= d.to && P <= k.end : P >= d.from && P >= k.begin)) {
          var N = T ? "before" : "after";
          return new K(o.line, P, N);
        }
      }

      var z = function z(Z, te, J) {
        for (var ne = function ne(Fe, lt) {
          return lt ? new K(o.line, h(Fe, 1), "before") : new K(o.line, Fe, "after");
        }; Z >= 0 && Z < u.length; Z += te) {
          var fe = u[Z],
              ae = te > 0 == (fe.level != 1),
              ge = ae ? J.begin : h(J.end, -1);
          if (fe.from <= ge && ge < fe.to || (ge = ae ? fe.from : h(fe.to, -1), J.begin <= ge && ge < J.end)) return ne(ge, ae);
        }
      },
          $ = z(f + l, l, k);

      if ($) return $;
      var G = l > 0 ? k.end : h(k.begin, -1);
      return G != null && !(l > 0 && G == r.text.length) && ($ = z(l > 0 ? 0 : u.length - 1, l, g(G)), $) ? $ : null;
    }

    var zl = {
      selectAll: cp,
      singleSelection: function singleSelection(t) {
        return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), Ct);
      },
      killLine: function killLine(t) {
        return Ti(t, function (r) {
          if (r.empty()) {
            var o = oe(t.doc, r.head.line).text.length;
            return r.head.ch == o && r.head.line < t.lastLine() ? {
              from: r.head,
              to: K(r.head.line + 1, 0)
            } : {
              from: r.head,
              to: K(r.head.line, o)
            };
          } else return {
            from: r.from(),
            to: r.to()
          };
        });
      },
      deleteLine: function deleteLine(t) {
        return Ti(t, function (r) {
          return {
            from: K(r.from().line, 0),
            to: ve(t.doc, K(r.to().line + 1, 0))
          };
        });
      },
      delLineLeft: function delLineLeft(t) {
        return Ti(t, function (r) {
          return {
            from: K(r.from().line, 0),
            to: r.from()
          };
        });
      },
      delWrappedLineLeft: function delWrappedLineLeft(t) {
        return Ti(t, function (r) {
          var o = t.charCoords(r.head, "div").top + 5,
              l = t.coordsChar({
            left: 0,
            top: o
          }, "div");
          return {
            from: l,
            to: r.from()
          };
        });
      },
      delWrappedLineRight: function delWrappedLineRight(t) {
        return Ti(t, function (r) {
          var o = t.charCoords(r.head, "div").top + 5,
              l = t.coordsChar({
            left: t.display.lineDiv.offsetWidth + 100,
            top: o
          }, "div");
          return {
            from: r.from(),
            to: l
          };
        });
      },
      undo: function undo(t) {
        return t.undo();
      },
      redo: function redo(t) {
        return t.redo();
      },
      undoSelection: function undoSelection(t) {
        return t.undoSelection();
      },
      redoSelection: function redoSelection(t) {
        return t.redoSelection();
      },
      goDocStart: function goDocStart(t) {
        return t.extendSelection(K(t.firstLine(), 0));
      },
      goDocEnd: function goDocEnd(t) {
        return t.extendSelection(K(t.lastLine()));
      },
      goLineStart: function goLineStart(t) {
        return t.extendSelectionsBy(function (r) {
          return bp(t, r.head.line);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineStartSmart: function goLineStartSmart(t) {
        return t.extendSelectionsBy(function (r) {
          return Ap(t, r.head);
        }, {
          origin: "+move",
          bias: 1
        });
      },
      goLineEnd: function goLineEnd(t) {
        return t.extendSelectionsBy(function (r) {
          return o3(t, r.head.line);
        }, {
          origin: "+move",
          bias: -1
        });
      },
      goLineRight: function goLineRight(t) {
        return t.extendSelectionsBy(function (r) {
          var o = t.cursorCoords(r.head, "div").top + 5;
          return t.coordsChar({
            left: t.display.lineDiv.offsetWidth + 100,
            top: o
          }, "div");
        }, Pn);
      },
      goLineLeft: function goLineLeft(t) {
        return t.extendSelectionsBy(function (r) {
          var o = t.cursorCoords(r.head, "div").top + 5;
          return t.coordsChar({
            left: 0,
            top: o
          }, "div");
        }, Pn);
      },
      goLineLeftSmart: function goLineLeftSmart(t) {
        return t.extendSelectionsBy(function (r) {
          var o = t.cursorCoords(r.head, "div").top + 5,
              l = t.coordsChar({
            left: 0,
            top: o
          }, "div");
          return l.ch < t.getLine(l.line).search(/\S/) ? Ap(t, r.head) : l;
        }, Pn);
      },
      goLineUp: function goLineUp(t) {
        return t.moveV(-1, "line");
      },
      goLineDown: function goLineDown(t) {
        return t.moveV(1, "line");
      },
      goPageUp: function goPageUp(t) {
        return t.moveV(-1, "page");
      },
      goPageDown: function goPageDown(t) {
        return t.moveV(1, "page");
      },
      goCharLeft: function goCharLeft(t) {
        return t.moveH(-1, "char");
      },
      goCharRight: function goCharRight(t) {
        return t.moveH(1, "char");
      },
      goColumnLeft: function goColumnLeft(t) {
        return t.moveH(-1, "column");
      },
      goColumnRight: function goColumnRight(t) {
        return t.moveH(1, "column");
      },
      goWordLeft: function goWordLeft(t) {
        return t.moveH(-1, "word");
      },
      goGroupRight: function goGroupRight(t) {
        return t.moveH(1, "group");
      },
      goGroupLeft: function goGroupLeft(t) {
        return t.moveH(-1, "group");
      },
      goWordRight: function goWordRight(t) {
        return t.moveH(1, "word");
      },
      delCharBefore: function delCharBefore(t) {
        return t.deleteH(-1, "codepoint");
      },
      delCharAfter: function delCharAfter(t) {
        return t.deleteH(1, "char");
      },
      delWordBefore: function delWordBefore(t) {
        return t.deleteH(-1, "word");
      },
      delWordAfter: function delWordAfter(t) {
        return t.deleteH(1, "word");
      },
      delGroupBefore: function delGroupBefore(t) {
        return t.deleteH(-1, "group");
      },
      delGroupAfter: function delGroupAfter(t) {
        return t.deleteH(1, "group");
      },
      indentAuto: function indentAuto(t) {
        return t.indentSelection("smart");
      },
      indentMore: function indentMore(t) {
        return t.indentSelection("add");
      },
      indentLess: function indentLess(t) {
        return t.indentSelection("subtract");
      },
      insertTab: function insertTab(t) {
        return t.replaceSelection("	");
      },
      insertSoftTab: function insertSoftTab(t) {
        for (var r = [], o = t.listSelections(), l = t.options.tabSize, u = 0; u < o.length; u++) {
          var f = o[u].from(),
              d = ke(t.getLine(f.line), f.ch, l);
          r.push(qn(l - d % l));
        }

        t.replaceSelections(r);
      },
      defaultTab: function defaultTab(t) {
        t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab");
      },
      transposeChars: function transposeChars(t) {
        return Ht(t, function () {
          for (var r = t.listSelections(), o = [], l = 0; l < r.length; l++) {
            if (!!r[l].empty()) {
              var u = r[l].head,
                  f = oe(t.doc, u.line).text;

              if (f) {
                if (u.ch == f.length && (u = new K(u.line, u.ch - 1)), u.ch > 0) u = new K(u.line, u.ch + 1), t.replaceRange(f.charAt(u.ch - 1) + f.charAt(u.ch - 2), K(u.line, u.ch - 2), u, "+transpose");else if (u.line > t.doc.first) {
                  var d = oe(t.doc, u.line - 1).text;
                  d && (u = new K(u.line, 1), t.replaceRange(f.charAt(0) + t.doc.lineSeparator() + d.charAt(d.length - 1), K(u.line - 1, d.length - 1), u, "+transpose"));
                }
              }

              o.push(new Ee(u, u));
            }
          }

          t.setSelections(o);
        });
      },
      newlineAndIndent: function newlineAndIndent(t) {
        return Ht(t, function () {
          for (var r = t.listSelections(), o = r.length - 1; o >= 0; o--) {
            t.replaceRange(t.doc.lineSeparator(), r[o].anchor, r[o].head, "+input");
          }

          r = t.listSelections();

          for (var l = 0; l < r.length; l++) {
            t.indentLine(r[l].from().line, null, !0);
          }

          mi(t);
        });
      },
      openLine: function openLine(t) {
        return t.replaceSelection("\n", "start");
      },
      toggleOverwrite: function toggleOverwrite(t) {
        return t.toggleOverwrite();
      }
    };

    function bp(t, r) {
      var o = oe(t.doc, r),
          l = cn(o);
      return l != o && (r = Te(l)), Js(!0, t, l, r, 1);
    }

    function o3(t, r) {
      var o = oe(t.doc, r),
          l = Um(o);
      return l != o && (r = Te(l)), Js(!0, t, o, r, -1);
    }

    function Ap(t, r) {
      var o = bp(t, r.line),
          l = oe(t.doc, o.line),
          u = Bn(l, t.doc.direction);

      if (!u || u[0].level == 0) {
        var f = Math.max(o.ch, l.text.search(/\S/)),
            d = r.line == o.line && r.ch <= f && r.ch;
        return K(o.line, d ? 0 : f, o.sticky);
      }

      return o;
    }

    function wu(t, r, o) {
      if (typeof r == "string" && (r = zl[r], !r)) return !1;
      t.display.input.ensurePolled();
      var l = t.display.shift,
          u = !1;

      try {
        t.isReadOnly() && (t.state.suppressEdits = !0), o && (t.display.shift = !1), u = r(t) != Ar;
      } finally {
        t.display.shift = l, t.state.suppressEdits = !1;
      }

      return u;
    }

    function u3(t, r, o) {
      for (var l = 0; l < t.state.keyMaps.length; l++) {
        var u = Ei(r, t.state.keyMaps[l], o, t);
        if (u) return u;
      }

      return t.options.extraKeys && Ei(r, t.options.extraKeys, o, t) || Ei(r, t.options.keyMap, o, t);
    }

    var a3 = new Ze();

    function Hl(t, r, o, l) {
      var u = t.state.keySeq;

      if (u) {
        if (Ep(r)) return "handled";
        if (/\'$/.test(r) ? t.state.keySeq = null : a3.set(50, function () {
          t.state.keySeq == u && (t.state.keySeq = null, t.display.input.reset());
        }), Fp(t, u + " " + r, o, l)) return !0;
      }

      return Fp(t, r, o, l);
    }

    function Fp(t, r, o, l) {
      var u = u3(t, r, l);
      return u == "multi" && (t.state.keySeq = r), u == "handled" && nt(t, "keyHandled", t, r, o), (u == "handled" || u == "multi") && (At(o), Ps(t)), !!u;
    }

    function Dp(t, r) {
      var o = Lp(r, !0);
      return o ? r.shiftKey && !t.state.keySeq ? Hl(t, "Shift-" + o, r, function (l) {
        return wu(t, l, !0);
      }) || Hl(t, o, r, function (l) {
        if (typeof l == "string" ? /^go[A-Z]/.test(l) : l.motion) return wu(t, l);
      }) : Hl(t, o, r, function (l) {
        return wu(t, l);
      }) : !1;
    }

    function s3(t, r, o) {
      return Hl(t, "'" + o + "'", r, function (l) {
        return wu(t, l, !0);
      });
    }

    var qs = null;

    function Op(t) {
      var r = this;

      if (!(t.target && t.target != r.display.input.getField()) && (r.curOp.focus = W(), !tt(r, t))) {
        C && x < 11 && t.keyCode == 27 && (t.returnValue = !1);
        var o = t.keyCode;
        r.display.shift = o == 16 || t.shiftKey;
        var l = Dp(r, t);
        b && (qs = l ? o : null, !l && o == 88 && !Lm && (L ? t.metaKey : t.ctrlKey) && r.replaceSelection("", null, "cut")), s && !L && !l && o == 46 && t.shiftKey && !t.ctrlKey && document.execCommand && document.execCommand("cut"), o == 18 && !/\bCodeMirror-crosshair\b/.test(r.display.lineDiv.className) && f3(r);
      }
    }

    function f3(t) {
      var r = t.display.lineDiv;
      j(r, "CodeMirror-crosshair");

      function o(l) {
        (l.keyCode == 18 || !l.altKey) && (ue(r, "CodeMirror-crosshair"), Qt(document, "keyup", o), Qt(document, "mouseover", o));
      }

      de(document, "keyup", o), de(document, "mouseover", o);
    }

    function Np(t) {
      t.keyCode == 16 && (this.doc.sel.shift = !1), tt(this, t);
    }

    function Pp(t) {
      var r = this;

      if (!(t.target && t.target != r.display.input.getField()) && !(Rn(r.display, t) || tt(r, t) || t.ctrlKey && !t.altKey || L && t.metaKey)) {
        var o = t.keyCode,
            l = t.charCode;

        if (b && o == qs) {
          qs = null, At(t);
          return;
        }

        if (!(b && (!t.which || t.which < 10) && Dp(r, t))) {
          var u = String.fromCharCode(l == null ? o : l);
          u != "\b" && (s3(r, t, u) || r.display.input.onKeyPress(t));
        }
      }
    }

    var c3 = 400,
        ef = function ef(t, r, o) {
      this.time = t, this.pos = r, this.button = o;
    };

    ef.prototype.compare = function (t, r, o) {
      return this.time + c3 > t && pe(r, this.pos) == 0 && o == this.button;
    };

    var Wl, $l;

    function d3(t, r) {
      var o = +new Date();
      return $l && $l.compare(o, t, r) ? (Wl = $l = null, "triple") : Wl && Wl.compare(o, t, r) ? ($l = new ef(o, t, r), Wl = null, "double") : (Wl = new ef(o, t, r), $l = null, "single");
    }

    function Bp(t) {
      var r = this,
          o = r.display;

      if (!(tt(r, t) || o.activeTouch && o.input.supportsTouch())) {
        if (o.input.ensurePolled(), o.shift = t.shiftKey, Rn(o, t)) {
          _ || (o.scroller.draggable = !1, setTimeout(function () {
            return o.scroller.draggable = !0;
          }, 100));
          return;
        }

        if (!tf(r, t)) {
          var l = Rr(r, t),
              u = Gd(t),
              f = l ? d3(l, u) : "single";
          window.focus(), u == 1 && r.state.selectingText && r.state.selectingText(t), !(l && h3(r, u, l, f, t)) && (u == 1 ? l ? v3(r, l, f, t) : rs(t) == o.scroller && At(t) : u == 2 ? (l && hu(r.doc, l), setTimeout(function () {
            return o.input.focus();
          }, 20)) : u == 3 && (ee ? r.display.input.onContextMenu(t) : Bs(r)));
        }
      }
    }

    function h3(t, r, o, l, u) {
      var f = "Click";
      return l == "double" ? f = "Double" + f : l == "triple" && (f = "Triple" + f), f = (r == 1 ? "Left" : r == 2 ? "Middle" : "Right") + f, Hl(t, Tp(f, u), u, function (d) {
        if (typeof d == "string" && (d = zl[d]), !d) return !1;
        var h = !1;

        try {
          t.isReadOnly() && (t.state.suppressEdits = !0), h = d(t, o) != Ar;
        } finally {
          t.state.suppressEdits = !1;
        }

        return h;
      });
    }

    function p3(t, r, o) {
      var l = t.getOption("configureMouse"),
          u = l ? l(t, r, o) : {};

      if (u.unit == null) {
        var f = O ? o.shiftKey && o.metaKey : o.altKey;
        u.unit = f ? "rectangle" : r == "single" ? "char" : r == "double" ? "word" : "line";
      }

      return (u.extend == null || t.doc.extend) && (u.extend = t.doc.extend || o.shiftKey), u.addNew == null && (u.addNew = L ? o.metaKey : o.ctrlKey), u.moveOnDrag == null && (u.moveOnDrag = !(L ? o.altKey : o.ctrlKey)), u;
    }

    function v3(t, r, o, l) {
      C ? setTimeout(se(Mh, t), 0) : t.curOp.focus = W();
      var u = p3(t, o, l),
          f = t.doc.sel,
          d;
      t.options.dragDrop && km && !t.isReadOnly() && o == "single" && (d = f.contains(r)) > -1 && (pe((d = f.ranges[d]).from(), r) < 0 || r.xRel > 0) && (pe(d.to(), r) > 0 || r.xRel < 0) ? g3(t, l, r, u) : y3(t, l, r, u);
    }

    function g3(t, r, o, l) {
      var u = t.display,
          f = !1,
          d = rt(t, function (g) {
        _ && (u.scroller.draggable = !1), t.state.draggingText = !1, t.state.delayingBlurEvent && (t.hasFocus() ? t.state.delayingBlurEvent = !1 : Bs(t)), Qt(u.wrapper.ownerDocument, "mouseup", d), Qt(u.wrapper.ownerDocument, "mousemove", h), Qt(u.scroller, "dragstart", v), Qt(u.scroller, "drop", d), f || (At(g), l.addNew || hu(t.doc, o, null, null, l.extend), _ && !F || C && x == 9 ? setTimeout(function () {
          u.wrapper.ownerDocument.body.focus({
            preventScroll: !0
          }), u.input.focus();
        }, 20) : u.input.focus());
      }),
          h = function h(g) {
        f = f || Math.abs(r.clientX - g.clientX) + Math.abs(r.clientY - g.clientY) >= 10;
      },
          v = function v() {
        return f = !0;
      };

      _ && (u.scroller.draggable = !0), t.state.draggingText = d, d.copy = !l.moveOnDrag, de(u.wrapper.ownerDocument, "mouseup", d), de(u.wrapper.ownerDocument, "mousemove", h), de(u.scroller, "dragstart", v), de(u.scroller, "drop", d), t.state.delayingBlurEvent = !0, setTimeout(function () {
        return u.input.focus();
      }, 20), u.scroller.dragDrop && u.scroller.dragDrop();
    }

    function Mp(t, r, o) {
      if (o == "char") return new Ee(r, r);
      if (o == "word") return t.findWordAt(r);
      if (o == "line") return new Ee(K(r.line, 0), ve(t.doc, K(r.line + 1, 0)));
      var l = o(t, r);
      return new Ee(l.from, l.to);
    }

    function y3(t, r, o, l) {
      C && Bs(t);
      var u = t.display,
          f = t.doc;
      At(r);
      var d,
          h,
          v = f.sel,
          g = v.ranges;
      if (l.addNew && !l.extend ? (h = f.sel.contains(o), h > -1 ? d = g[h] : d = new Ee(o, o)) : (d = f.sel.primary(), h = f.sel.primIndex), l.unit == "rectangle") l.addNew || (d = new Ee(o, o)), o = Rr(t, r, !0, !0), h = -1;else {
        var k = Mp(t, o, l.unit);
        l.extend ? d = Qs(d, k.anchor, k.head, l.extend) : d = k;
      }
      l.addNew ? h == -1 ? (h = g.length, pt(f, hn(t, g.concat([d]), h), {
        scroll: !1,
        origin: "*mouse"
      })) : g.length > 1 && g[h].empty() && l.unit == "char" && !l.extend ? (pt(f, hn(t, g.slice(0, h).concat(g.slice(h + 1)), 0), {
        scroll: !1,
        origin: "*mouse"
      }), v = f.sel) : Ys(f, h, d, fl) : (h = 0, pt(f, new Yt([d], 0), fl), v = f.sel);
      var T = o;

      function P(J) {
        if (pe(T, J) != 0) if (T = J, l.unit == "rectangle") {
          for (var ne = [], fe = t.options.tabSize, ae = ke(oe(f, o.line).text, o.ch, fe), ge = ke(oe(f, J.line).text, J.ch, fe), Fe = Math.min(ae, ge), lt = Math.max(ae, ge), Ie = Math.min(o.line, J.line), Wt = Math.min(t.lastLine(), Math.max(o.line, J.line)); Ie <= Wt; Ie++) {
            var Ot = oe(f, Ie).text,
                Qe = cl(Ot, Fe, fe);
            Fe == lt ? ne.push(new Ee(K(Ie, Qe), K(Ie, Qe))) : Ot.length > Qe && ne.push(new Ee(K(Ie, Qe), K(Ie, cl(Ot, lt, fe))));
          }

          ne.length || ne.push(new Ee(o, o)), pt(f, hn(t, v.ranges.slice(0, h).concat(ne), h), {
            origin: "*mouse",
            scroll: !1
          }), t.scrollIntoView(J);
        } else {
          var Nt = d,
              ft = Mp(t, J, l.unit),
              Je = Nt.anchor,
              Ye;
          pe(ft.anchor, Je) > 0 ? (Ye = ft.head, Je = Vo(Nt.from(), ft.anchor)) : (Ye = ft.anchor, Je = Go(Nt.to(), ft.head));
          var He = v.ranges.slice(0);
          He[h] = m3(t, new Ee(ve(f, Je), Ye)), pt(f, hn(t, He, h), fl);
        }
      }

      var N = u.wrapper.getBoundingClientRect(),
          z = 0;

      function $(J) {
        var ne = ++z,
            fe = Rr(t, J, !0, l.unit == "rectangle");
        if (!!fe) if (pe(fe, T) != 0) {
          t.curOp.focus = W(), P(fe);
          var ae = uu(u, f);
          (fe.line >= ae.to || fe.line < ae.from) && setTimeout(rt(t, function () {
            z == ne && $(J);
          }), 150);
        } else {
          var ge = J.clientY < N.top ? -20 : J.clientY > N.bottom ? 20 : 0;
          ge && setTimeout(rt(t, function () {
            z == ne && (u.scroller.scrollTop += ge, $(J));
          }), 50);
        }
      }

      function G(J) {
        t.state.selectingText = !1, z = 1 / 0, J && (At(J), u.input.focus()), Qt(u.wrapper.ownerDocument, "mousemove", Z), Qt(u.wrapper.ownerDocument, "mouseup", te), f.history.lastSelOrigin = null;
      }

      var Z = rt(t, function (J) {
        J.buttons === 0 || !Gd(J) ? G(J) : $(J);
      }),
          te = rt(t, G);
      t.state.selectingText = te, de(u.wrapper.ownerDocument, "mousemove", Z), de(u.wrapper.ownerDocument, "mouseup", te);
    }

    function m3(t, r) {
      var o = r.anchor,
          l = r.head,
          u = oe(t.doc, o.line);
      if (pe(o, l) == 0 && o.sticky == l.sticky) return r;
      var f = Bn(u);
      if (!f) return r;
      var d = pl(f, o.ch, o.sticky),
          h = f[d];
      if (h.from != o.ch && h.to != o.ch) return r;
      var v = d + (h.from == o.ch == (h.level != 1) ? 0 : 1);
      if (v == 0 || v == f.length) return r;
      var g;
      if (l.line != o.line) g = (l.line - o.line) * (t.doc.direction == "ltr" ? 1 : -1) > 0;else {
        var k = pl(f, l.ch, l.sticky),
            T = k - d || (l.ch - o.ch) * (h.level == 1 ? -1 : 1);
        k == v - 1 || k == v ? g = T < 0 : g = T > 0;
      }
      var P = f[v + (g ? -1 : 0)],
          N = g == (P.level == 1),
          z = N ? P.from : P.to,
          $ = N ? "after" : "before";
      return o.ch == z && o.sticky == $ ? r : new Ee(new K(o.line, z, $), l);
    }

    function Ip(t, r, o, l) {
      var u, f;
      if (r.touches) u = r.touches[0].clientX, f = r.touches[0].clientY;else try {
        u = r.clientX, f = r.clientY;
      } catch (_unused28) {
        return !1;
      }
      if (u >= Math.floor(t.display.gutters.getBoundingClientRect().right)) return !1;
      l && At(r);
      var d = t.display,
          h = d.lineDiv.getBoundingClientRect();
      if (f > h.bottom || !nn(t, o)) return ns(r);
      f -= h.top - d.viewOffset;

      for (var v = 0; v < t.display.gutterSpecs.length; ++v) {
        var g = d.gutters.childNodes[v];

        if (g && g.getBoundingClientRect().right >= u) {
          var k = Br(t.doc, f),
              T = t.display.gutterSpecs[v];
          return Ge(t, o, t, k, T.className, r), ns(r);
        }
      }
    }

    function tf(t, r) {
      return Ip(t, r, "gutterClick", !0);
    }

    function Rp(t, r) {
      Rn(t.display, r) || w3(t, r) || tt(t, r, "contextmenu") || ee || t.display.input.onContextMenu(r);
    }

    function w3(t, r) {
      return nn(t, "gutterContextMenu") ? Ip(t, r, "gutterContextMenu", !1) : !1;
    }

    function zp(t) {
      t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), xl(t);
    }

    var Li = {
      toString: function toString() {
        return "CodeMirror.Init";
      }
    },
        Hp = {},
        Cu = {};

    function C3(t) {
      var r = t.optionHandlers;

      function o(l, u, f, d) {
        t.defaults[l] = u, f && (r[l] = d ? function (h, v, g) {
          g != Li && f(h, v, g);
        } : f);
      }

      t.defineOption = o, t.Init = Li, o("value", "", function (l, u) {
        return l.setValue(u);
      }, !0), o("mode", null, function (l, u) {
        l.doc.modeOption = u, Ks(l);
      }, !0), o("indentUnit", 2, Ks, !0), o("indentWithTabs", !1), o("smartIndent", !0), o("tabSize", 4, function (l) {
        Fl(l), xl(l), Ft(l);
      }, !0), o("lineSeparator", null, function (l, u) {
        if (l.doc.lineSep = u, !!u) {
          var f = [],
              d = l.doc.first;
          l.doc.iter(function (v) {
            for (var g = 0;;) {
              var k = v.text.indexOf(u, g);
              if (k == -1) break;
              g = k + u.length, f.push(K(d, k));
            }

            d++;
          });

          for (var h = f.length - 1; h >= 0; h--) {
            ki(l.doc, u, f[h], K(f[h].line, f[h].ch + u.length));
          }
        }
      }), o("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (l, u, f) {
        l.state.specialChars = new RegExp(u.source + (u.test("	") ? "" : "|	"), "g"), f != Li && l.refresh();
      }), o("specialCharPlaceholder", Ym, function (l) {
        return l.refresh();
      }, !0), o("electricChars", !0), o("inputStyle", S ? "contenteditable" : "textarea", function () {
        throw new Error("inputStyle can not (yet) be changed in a running editor");
      }, !0), o("spellcheck", !1, function (l, u) {
        return l.getInputField().spellcheck = u;
      }, !0), o("autocorrect", !1, function (l, u) {
        return l.getInputField().autocorrect = u;
      }, !0), o("autocapitalize", !1, function (l, u) {
        return l.getInputField().autocapitalize = u;
      }, !0), o("rtlMoveVisually", !I), o("wholeLineUpdateBefore", !0), o("theme", "default", function (l) {
        zp(l), Al(l);
      }, !0), o("keyMap", "default", function (l, u, f) {
        var d = mu(u),
            h = f != Li && mu(f);
        h && h.detach && h.detach(l, d), d.attach && d.attach(l, h || null);
      }), o("extraKeys", null), o("configureMouse", null), o("lineWrapping", !1, x3, !0), o("gutters", [], function (l, u) {
        l.display.gutterSpecs = Us(u, l.options.lineNumbers), Al(l);
      }, !0), o("fixedGutter", !0, function (l, u) {
        l.display.gutters.style.left = u ? Ds(l.display) + "px" : "0", l.refresh();
      }, !0), o("coverGutterNextToScrollbar", !1, function (l) {
        return wi(l);
      }, !0), o("scrollbarStyle", "native", function (l) {
        $h(l), wi(l), l.display.scrollbars.setScrollTop(l.doc.scrollTop), l.display.scrollbars.setScrollLeft(l.doc.scrollLeft);
      }, !0), o("lineNumbers", !1, function (l, u) {
        l.display.gutterSpecs = Us(l.options.gutters, u), Al(l);
      }, !0), o("firstLineNumber", 1, Al, !0), o("lineNumberFormatter", function (l) {
        return l;
      }, Al, !0), o("showCursorWhenSelecting", !1, kl, !0), o("resetSelectionOnContextMenu", !0), o("lineWiseCopyCut", !0), o("pasteLinesPerSelection", !0), o("selectionsMayTouch", !1), o("readOnly", !1, function (l, u) {
        u == "nocursor" && (yi(l), l.display.input.blur()), l.display.input.readOnlyChanged(u);
      }), o("screenReaderLabel", null, function (l, u) {
        u = u === "" ? null : u, l.display.input.screenReaderLabelChanged(u);
      }), o("disableInput", !1, function (l, u) {
        u || l.display.input.reset();
      }, !0), o("dragDrop", !0, S3), o("allowDropFileTypes", null), o("cursorBlinkRate", 530), o("cursorScrollMargin", 0), o("cursorHeight", 1, kl, !0), o("singleCursorHeightPerLine", !0, kl, !0), o("workTime", 100), o("workDelay", 100), o("flattenSpans", !0, Fl, !0), o("addModeClass", !1, Fl, !0), o("pollInterval", 100), o("undoDepth", 200, function (l, u) {
        return l.doc.history.undoDepth = u;
      }), o("historyEventDelay", 1250), o("viewportMargin", 10, function (l) {
        return l.refresh();
      }, !0), o("maxHighlightLength", 1e4, Fl, !0), o("moveInputWithCursor", !0, function (l, u) {
        u || l.display.input.resetPosition();
      }), o("tabindex", null, function (l, u) {
        return l.display.input.getField().tabIndex = u || "";
      }), o("autofocus", null), o("direction", "ltr", function (l, u) {
        return l.doc.setDirection(u);
      }, !0), o("phrases", null);
    }

    function S3(t, r, o) {
      var l = o && o != Li;

      if (!r != !l) {
        var u = t.display.dragFunctions,
            f = r ? de : Qt;
        f(t.display.scroller, "dragstart", u.start), f(t.display.scroller, "dragenter", u.enter), f(t.display.scroller, "dragover", u.over), f(t.display.scroller, "dragleave", u.leave), f(t.display.scroller, "drop", u.drop);
      }
    }

    function x3(t) {
      t.options.lineWrapping ? (j(t.display.wrapper, "CodeMirror-wrap"), t.display.sizer.style.minWidth = "", t.display.sizerWidth = null) : (ue(t.display.wrapper, "CodeMirror-wrap"), Ss(t)), Os(t), Ft(t), xl(t), setTimeout(function () {
        return wi(t);
      }, 100);
    }

    function Ne(t, r) {
      var o = this;
      if (!(this instanceof Ne)) return new Ne(t, r);
      this.options = r = r ? Se(r) : {}, Se(Hp, r, !1);
      var l = r.value;
      typeof l == "string" ? l = new Dt(l, r.mode, null, r.lineSeparator, r.direction) : r.mode && (l.modeOption = r.mode), this.doc = l;
      var u = new Ne.inputStyles[r.inputStyle](this),
          f = this.display = new B1(t, l, u, r);
      f.wrapper.CodeMirror = this, zp(this), r.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), $h(this), this.state = {
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
        highlight: new Ze(),
        keySeq: null,
        specialChars: null
      }, r.autofocus && !S && f.input.focus(), C && x < 11 && setTimeout(function () {
        return o.display.input.reset(!0);
      }, 20), k3(this), e3(), $r(this), this.curOp.forceUpdate = !0, Jh(this, l), r.autofocus && !S || this.hasFocus() ? setTimeout(function () {
        o.hasFocus() && !o.state.focused && Ms(o);
      }, 20) : yi(this);

      for (var d in Cu) {
        Cu.hasOwnProperty(d) && Cu[d](this, r[d], Li);
      }

      Kh(this), r.finishInit && r.finishInit(this);

      for (var h = 0; h < nf.length; ++h) {
        nf[h](this);
      }

      Ur(this), _ && r.lineWrapping && getComputedStyle(f.lineDiv).textRendering == "optimizelegibility" && (f.lineDiv.style.textRendering = "auto");
    }

    Ne.defaults = Hp, Ne.optionHandlers = Cu;

    function k3(t) {
      var r = t.display;
      de(r.scroller, "mousedown", rt(t, Bp)), C && x < 11 ? de(r.scroller, "dblclick", rt(t, function (v) {
        if (!tt(t, v)) {
          var g = Rr(t, v);

          if (!(!g || tf(t, v) || Rn(t.display, v))) {
            At(v);
            var k = t.findWordAt(g);
            hu(t.doc, k.anchor, k.head);
          }
        }
      })) : de(r.scroller, "dblclick", function (v) {
        return tt(t, v) || At(v);
      }), de(r.scroller, "contextmenu", function (v) {
        return Rp(t, v);
      }), de(r.input.getField(), "contextmenu", function (v) {
        r.scroller.contains(v.target) || Rp(t, v);
      });
      var o,
          l = {
        end: 0
      };

      function u() {
        r.activeTouch && (o = setTimeout(function () {
          return r.activeTouch = null;
        }, 1e3), l = r.activeTouch, l.end = +new Date());
      }

      function f(v) {
        if (v.touches.length != 1) return !1;
        var g = v.touches[0];
        return g.radiusX <= 1 && g.radiusY <= 1;
      }

      function d(v, g) {
        if (g.left == null) return !0;
        var k = g.left - v.left,
            T = g.top - v.top;
        return k * k + T * T > 20 * 20;
      }

      de(r.scroller, "touchstart", function (v) {
        if (!tt(t, v) && !f(v) && !tf(t, v)) {
          r.input.ensurePolled(), clearTimeout(o);
          var g = +new Date();
          r.activeTouch = {
            start: g,
            moved: !1,
            prev: g - l.end <= 300 ? l : null
          }, v.touches.length == 1 && (r.activeTouch.left = v.touches[0].pageX, r.activeTouch.top = v.touches[0].pageY);
        }
      }), de(r.scroller, "touchmove", function () {
        r.activeTouch && (r.activeTouch.moved = !0);
      }), de(r.scroller, "touchend", function (v) {
        var g = r.activeTouch;

        if (g && !Rn(r, v) && g.left != null && !g.moved && new Date() - g.start < 300) {
          var k = t.coordsChar(r.activeTouch, "page"),
              T;
          !g.prev || d(g, g.prev) ? T = new Ee(k, k) : !g.prev.prev || d(g, g.prev.prev) ? T = t.findWordAt(k) : T = new Ee(K(k.line, 0), ve(t.doc, K(k.line + 1, 0))), t.setSelection(T.anchor, T.head), t.focus(), At(v);
        }

        u();
      }), de(r.scroller, "touchcancel", u), de(r.scroller, "scroll", function () {
        r.scroller.clientHeight && (El(t, r.scroller.scrollTop), Hr(t, r.scroller.scrollLeft, !0), Ge(t, "scroll", t));
      }), de(r.scroller, "mousewheel", function (v) {
        return Qh(t, v);
      }), de(r.scroller, "DOMMouseScroll", function (v) {
        return Qh(t, v);
      }), de(r.wrapper, "scroll", function () {
        return r.wrapper.scrollTop = r.wrapper.scrollLeft = 0;
      }), r.dragFunctions = {
        enter: function enter(v) {
          tt(t, v) || vl(v);
        },
        over: function over(v) {
          tt(t, v) || (q1(t, v), vl(v));
        },
        start: function start(v) {
          return J1(t, v);
        },
        drop: rt(t, Z1),
        leave: function leave(v) {
          tt(t, v) || xp(t);
        }
      };
      var h = r.input.getField();
      de(h, "keyup", function (v) {
        return Np.call(t, v);
      }), de(h, "keydown", rt(t, Op)), de(h, "keypress", rt(t, Pp)), de(h, "focus", function (v) {
        return Ms(t, v);
      }), de(h, "blur", function (v) {
        return yi(t, v);
      });
    }

    var nf = [];

    Ne.defineInitHook = function (t) {
      return nf.push(t);
    };

    function Ul(t, r, o, l) {
      var u = t.doc,
          f;
      o == null && (o = "add"), o == "smart" && (u.mode.indent ? f = yl(t, r).state : o = "prev");
      var d = t.options.tabSize,
          h = oe(u, r),
          v = ke(h.text, null, d);
      h.stateAfter && (h.stateAfter = null);
      var g = h.text.match(/^\s*/)[0],
          k;
      if (!l && !/\S/.test(h.text)) k = 0, o = "not";else if (o == "smart" && (k = u.mode.indent(f, h.text.slice(g.length), h.text), k == Ar || k > 150)) {
        if (!l) return;
        o = "prev";
      }
      o == "prev" ? r > u.first ? k = ke(oe(u, r - 1).text, null, d) : k = 0 : o == "add" ? k = v + t.options.indentUnit : o == "subtract" ? k = v - t.options.indentUnit : typeof o == "number" && (k = v + o), k = Math.max(0, k);
      var T = "",
          P = 0;
      if (t.options.indentWithTabs) for (var N = Math.floor(k / d); N; --N) {
        P += d, T += "	";
      }
      if (P < k && (T += qn(k - P)), T != g) return ki(u, T, K(r, 0), K(r, g.length), "+input"), h.stateAfter = null, !0;

      for (var z = 0; z < u.sel.ranges.length; z++) {
        var $ = u.sel.ranges[z];

        if ($.head.line == r && $.head.ch < g.length) {
          var G = K(r, g.length);
          Ys(u, z, new Ee(G, G));
          break;
        }
      }
    }

    var pn = null;

    function Su(t) {
      pn = t;
    }

    function rf(t, r, o, l, u) {
      var f = t.doc;
      t.display.shift = !1, l || (l = f.sel);
      var d = +new Date() - 200,
          h = u == "paste" || t.state.pasteIncoming > d,
          v = os(r),
          g = null;
      if (h && l.ranges.length > 1) if (pn && pn.text.join("\n") == r) {
        if (l.ranges.length % pn.text.length == 0) {
          g = [];

          for (var k = 0; k < pn.text.length; k++) {
            g.push(f.splitLines(pn.text[k]));
          }
        }
      } else v.length == l.ranges.length && t.options.pasteLinesPerSelection && (g = Dr(v, function (Z) {
        return [Z];
      }));

      for (var T = t.curOp.updateInput, P = l.ranges.length - 1; P >= 0; P--) {
        var N = l.ranges[P],
            z = N.from(),
            $ = N.to();
        N.empty() && (o && o > 0 ? z = K(z.line, z.ch - o) : t.state.overwrite && !h ? $ = K($.line, Math.min(oe(f, $.line).text.length, $.ch + we(v).length)) : h && pn && pn.lineWise && pn.text.join("\n") == v.join("\n") && (z = $ = K(z.line, 0)));
        var G = {
          from: z,
          to: $,
          text: g ? g[P % g.length] : v,
          origin: u || (h ? "paste" : t.state.cutIncoming > d ? "cut" : "+input")
        };
        xi(t.doc, G), nt(t, "inputRead", t, G);
      }

      r && !h && $p(t, r), mi(t), t.curOp.updateInput < 2 && (t.curOp.updateInput = T), t.curOp.typing = !0, t.state.pasteIncoming = t.state.cutIncoming = -1;
    }

    function Wp(t, r) {
      var o = t.clipboardData && t.clipboardData.getData("Text");
      if (o) return t.preventDefault(), !r.isReadOnly() && !r.options.disableInput && Ht(r, function () {
        return rf(r, o, 0, null, "paste");
      }), !0;
    }

    function $p(t, r) {
      if (!(!t.options.electricChars || !t.options.smartIndent)) for (var o = t.doc.sel, l = o.ranges.length - 1; l >= 0; l--) {
        var u = o.ranges[l];

        if (!(u.head.ch > 100 || l && o.ranges[l - 1].head.line == u.head.line)) {
          var f = t.getModeAt(u.head),
              d = !1;

          if (f.electricChars) {
            for (var h = 0; h < f.electricChars.length; h++) {
              if (r.indexOf(f.electricChars.charAt(h)) > -1) {
                d = Ul(t, u.head.line, "smart");
                break;
              }
            }
          } else f.electricInput && f.electricInput.test(oe(t.doc, u.head.line).text.slice(0, u.head.ch)) && (d = Ul(t, u.head.line, "smart"));

          d && nt(t, "electricInput", t, u.head.line);
        }
      }
    }

    function Up(t) {
      for (var r = [], o = [], l = 0; l < t.doc.sel.ranges.length; l++) {
        var u = t.doc.sel.ranges[l].head.line,
            f = {
          anchor: K(u, 0),
          head: K(u + 1, 0)
        };
        o.push(f), r.push(t.getRange(f.anchor, f.head));
      }

      return {
        text: r,
        ranges: o
      };
    }

    function jp(t, r, o, l) {
      t.setAttribute("autocorrect", o ? "" : "off"), t.setAttribute("autocapitalize", l ? "" : "off"), t.setAttribute("spellcheck", !!r);
    }

    function Kp() {
      var t = Y("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
          r = Y("div", [t], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      return _ ? t.style.width = "1000px" : t.setAttribute("wrap", "off"), y && (t.style.border = "1px solid black"), jp(t), r;
    }

    function _3(t) {
      var r = t.optionHandlers,
          o = t.helpers = {};
      t.prototype = {
        constructor: t,
        focus: function focus() {
          window.focus(), this.display.input.focus();
        },
        setOption: function setOption(l, u) {
          var f = this.options,
              d = f[l];
          f[l] == u && l != "mode" || (f[l] = u, r.hasOwnProperty(l) && rt(this, r[l])(this, u, d), Ge(this, "optionChange", this, l));
        },
        getOption: function getOption(l) {
          return this.options[l];
        },
        getDoc: function getDoc() {
          return this.doc;
        },
        addKeyMap: function addKeyMap(l, u) {
          this.state.keyMaps[u ? "push" : "unshift"](mu(l));
        },
        removeKeyMap: function removeKeyMap(l) {
          for (var u = this.state.keyMaps, f = 0; f < u.length; ++f) {
            if (u[f] == l || u[f].name == l) return u.splice(f, 1), !0;
          }
        },
        addOverlay: St(function (l, u) {
          var f = l.token ? l : t.getMode(this.options, l);
          if (f.startState) throw new Error("Overlays may not be stateful.");
          $o(this.state.overlays, {
            mode: f,
            modeSpec: l,
            opaque: u && u.opaque,
            priority: u && u.priority || 0
          }, function (d) {
            return d.priority;
          }), this.state.modeGen++, Ft(this);
        }),
        removeOverlay: St(function (l) {
          for (var u = this.state.overlays, f = 0; f < u.length; ++f) {
            var d = u[f].modeSpec;

            if (d == l || typeof l == "string" && d.name == l) {
              u.splice(f, 1), this.state.modeGen++, Ft(this);
              return;
            }
          }
        }),
        indentLine: St(function (l, u, f) {
          typeof u != "string" && typeof u != "number" && (u == null ? u = this.options.smartIndent ? "smart" : "prev" : u = u ? "add" : "subtract"), gl(this.doc, l) && Ul(this, l, u, f);
        }),
        indentSelection: St(function (l) {
          for (var u = this.doc.sel.ranges, f = -1, d = 0; d < u.length; d++) {
            var h = u[d];
            if (h.empty()) h.head.line > f && (Ul(this, h.head.line, l, !0), f = h.head.line, d == this.doc.sel.primIndex && mi(this));else {
              var v = h.from(),
                  g = h.to(),
                  k = Math.max(f, v.line);
              f = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;

              for (var T = k; T < f; ++T) {
                Ul(this, T, l);
              }

              var P = this.doc.sel.ranges;
              v.ch == 0 && u.length == P.length && P[d].from().ch > 0 && Ys(this.doc, d, new Ee(v, P[d].to()), Ct);
            }
          }
        }),
        getTokenAt: function getTokenAt(l, u) {
          return eh(this, l, u);
        },
        getLineTokens: function getLineTokens(l, u) {
          return eh(this, K(l), u, !0);
        },
        getTokenTypeAt: function getTokenTypeAt(l) {
          l = ve(this.doc, l);
          var u = Zd(this, oe(this.doc, l.line)),
              f = 0,
              d = (u.length - 1) / 2,
              h = l.ch,
              v;
          if (h == 0) v = u[2];else for (;;) {
            var g = f + d >> 1;
            if ((g ? u[g * 2 - 1] : 0) >= h) d = g;else if (u[g * 2 + 1] < h) f = g + 1;else {
              v = u[g * 2 + 2];
              break;
            }
          }
          var k = v ? v.indexOf("overlay ") : -1;
          return k < 0 ? v : k == 0 ? null : v.slice(0, k - 1);
        },
        getModeAt: function getModeAt(l) {
          var u = this.doc.mode;
          return u.innerMode ? t.innerMode(u, this.getTokenAt(l).state).mode : u;
        },
        getHelper: function getHelper(l, u) {
          return this.getHelpers(l, u)[0];
        },
        getHelpers: function getHelpers(l, u) {
          var f = [];
          if (!o.hasOwnProperty(u)) return f;
          var d = o[u],
              h = this.getModeAt(l);
          if (typeof h[u] == "string") d[h[u]] && f.push(d[h[u]]);else if (h[u]) for (var v = 0; v < h[u].length; v++) {
            var g = d[h[u][v]];
            g && f.push(g);
          } else h.helperType && d[h.helperType] ? f.push(d[h.helperType]) : d[h.name] && f.push(d[h.name]);

          for (var k = 0; k < d._global.length; k++) {
            var T = d._global[k];
            T.pred(h, this) && be(f, T.val) == -1 && f.push(T.val);
          }

          return f;
        },
        getStateAfter: function getStateAfter(l, u) {
          var f = this.doc;
          return l = Qd(f, l == null ? f.first + f.size - 1 : l), yl(this, l + 1, u).state;
        },
        cursorCoords: function cursorCoords(l, u) {
          var f,
              d = this.doc.sel.primary();
          return l == null ? f = d.head : _typeof(l) == "object" ? f = ve(this.doc, l) : f = l ? d.from() : d.to(), dn(this, f, u || "page");
        },
        charCoords: function charCoords(l, u) {
          return ru(this, ve(this.doc, l), u || "page");
        },
        coordsChar: function coordsChar(l, u) {
          return l = Ah(this, l, u || "page"), bs(this, l.left, l.top);
        },
        lineAtHeight: function lineAtHeight(l, u) {
          return l = Ah(this, {
            top: l,
            left: 0
          }, u || "page").top, Br(this.doc, l + this.display.viewOffset);
        },
        heightAtLine: function heightAtLine(l, u, f) {
          var d = !1,
              h;

          if (typeof l == "number") {
            var v = this.doc.first + this.doc.size - 1;
            l < this.doc.first ? l = this.doc.first : l > v && (l = v, d = !0), h = oe(this.doc, l);
          } else h = l;

          return nu(this, h, {
            top: 0,
            left: 0
          }, u || "page", f || d).top + (d ? this.doc.height - In(h) : 0);
        },
        defaultTextHeight: function defaultTextHeight() {
          return vi(this.display);
        },
        defaultCharWidth: function defaultCharWidth() {
          return gi(this.display);
        },
        getViewport: function getViewport() {
          return {
            from: this.display.viewFrom,
            to: this.display.viewTo
          };
        },
        addWidget: function addWidget(l, u, f, d, h) {
          var v = this.display;
          l = dn(this, ve(this.doc, l));
          var g = l.bottom,
              k = l.left;
          if (u.style.position = "absolute", u.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(u), v.sizer.appendChild(u), d == "over") g = l.top;else if (d == "above" || d == "near") {
            var T = Math.max(v.wrapper.clientHeight, this.doc.height),
                P = Math.max(v.sizer.clientWidth, v.lineSpace.clientWidth);
            (d == "above" || l.bottom + u.offsetHeight > T) && l.top > u.offsetHeight ? g = l.top - u.offsetHeight : l.bottom + u.offsetHeight <= T && (g = l.bottom), k + u.offsetWidth > P && (k = P - u.offsetWidth);
          }
          u.style.top = g + "px", u.style.left = u.style.right = "", h == "right" ? (k = v.sizer.clientWidth - u.offsetWidth, u.style.right = "0px") : (h == "left" ? k = 0 : h == "middle" && (k = (v.sizer.clientWidth - u.offsetWidth) / 2), u.style.left = k + "px"), f && S1(this, {
            left: k,
            top: g,
            right: k + u.offsetWidth,
            bottom: g + u.offsetHeight
          });
        },
        triggerOnKeyDown: St(Op),
        triggerOnKeyPress: St(Pp),
        triggerOnKeyUp: Np,
        triggerOnMouseDown: St(Bp),
        execCommand: function execCommand(l) {
          if (zl.hasOwnProperty(l)) return zl[l].call(null, this);
        },
        triggerElectric: St(function (l) {
          $p(this, l);
        }),
        findPosH: function findPosH(l, u, f, d) {
          var h = 1;
          u < 0 && (h = -1, u = -u);

          for (var v = ve(this.doc, l), g = 0; g < u && (v = lf(this.doc, v, h, f, d), !v.hitSide); ++g) {
            ;
          }

          return v;
        },
        moveH: St(function (l, u) {
          var f = this;
          this.extendSelectionsBy(function (d) {
            return f.display.shift || f.doc.extend || d.empty() ? lf(f.doc, d.head, l, u, f.options.rtlMoveVisually) : l < 0 ? d.from() : d.to();
          }, Pn);
        }),
        deleteH: St(function (l, u) {
          var f = this.doc.sel,
              d = this.doc;
          f.somethingSelected() ? d.replaceSelection("", null, "+delete") : Ti(this, function (h) {
            var v = lf(d, h.head, l, u, !1);
            return l < 0 ? {
              from: v,
              to: h.head
            } : {
              from: h.head,
              to: v
            };
          });
        }),
        findPosV: function findPosV(l, u, f, d) {
          var h = 1,
              v = d;
          u < 0 && (h = -1, u = -u);

          for (var g = ve(this.doc, l), k = 0; k < u; ++k) {
            var T = dn(this, g, "div");
            if (v == null ? v = T.left : T.left = v, g = Gp(this, T, h, f), g.hitSide) break;
          }

          return g;
        },
        moveV: St(function (l, u) {
          var f = this,
              d = this.doc,
              h = [],
              v = !this.display.shift && !d.extend && d.sel.somethingSelected();
          if (d.extendSelectionsBy(function (k) {
            if (v) return l < 0 ? k.from() : k.to();
            var T = dn(f, k.head, "div");
            k.goalColumn != null && (T.left = k.goalColumn), h.push(T.left);
            var P = Gp(f, T, l, u);
            return u == "page" && k == d.sel.primary() && Rs(f, ru(f, P, "div").top - T.top), P;
          }, Pn), h.length) for (var g = 0; g < d.sel.ranges.length; g++) {
            d.sel.ranges[g].goalColumn = h[g];
          }
        }),
        findWordAt: function findWordAt(l) {
          var u = this.doc,
              f = oe(u, l.line).text,
              d = l.ch,
              h = l.ch;

          if (f) {
            var v = this.getHelper(l, "wordChars");
            (l.sticky == "before" || h == f.length) && d ? --d : ++h;

            for (var g = f.charAt(d), k = jo(g, v) ? function (T) {
              return jo(T, v);
            } : /\s/.test(g) ? function (T) {
              return /\s/.test(T);
            } : function (T) {
              return !/\s/.test(T) && !jo(T);
            }; d > 0 && k(f.charAt(d - 1));) {
              --d;
            }

            for (; h < f.length && k(f.charAt(h));) {
              ++h;
            }
          }

          return new Ee(K(l.line, d), K(l.line, h));
        },
        toggleOverwrite: function toggleOverwrite(l) {
          l != null && l == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? j(this.display.cursorDiv, "CodeMirror-overwrite") : ue(this.display.cursorDiv, "CodeMirror-overwrite"), Ge(this, "overwriteToggle", this, this.state.overwrite));
        },
        hasFocus: function hasFocus() {
          return this.display.input.getField() == W();
        },
        isReadOnly: function isReadOnly() {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: St(function (l, u) {
          _l(this, l, u);
        }),
        getScrollInfo: function getScrollInfo() {
          var l = this.display.scroller;
          return {
            left: l.scrollLeft,
            top: l.scrollTop,
            height: l.scrollHeight - _n(this) - this.display.barHeight,
            width: l.scrollWidth - _n(this) - this.display.barWidth,
            clientHeight: _s(this),
            clientWidth: Mr(this)
          };
        },
        scrollIntoView: St(function (l, u) {
          l == null ? (l = {
            from: this.doc.sel.primary().head,
            to: null
          }, u == null && (u = this.options.cursorScrollMargin)) : typeof l == "number" ? l = {
            from: K(l, 0),
            to: null
          } : l.from == null && (l = {
            from: l,
            to: null
          }), l.to || (l.to = l.from), l.margin = u || 0, l.from.line != null ? x1(this, l) : Rh(this, l.from, l.to, l.margin);
        }),
        setSize: St(function (l, u) {
          var f = this,
              d = function d(v) {
            return typeof v == "number" || /^\d+$/.test(String(v)) ? v + "px" : v;
          };

          l != null && (this.display.wrapper.style.width = d(l)), u != null && (this.display.wrapper.style.height = d(u)), this.options.lineWrapping && Th(this);
          var h = this.display.viewFrom;
          this.doc.iter(h, this.display.viewTo, function (v) {
            if (v.widgets) {
              for (var g = 0; g < v.widgets.length; g++) {
                if (v.widgets[g].noHScroll) {
                  tr(f, h, "widget");
                  break;
                }
              }
            }

            ++h;
          }), this.curOp.forceUpdate = !0, Ge(this, "refresh", this);
        }),
        operation: function operation(l) {
          return Ht(this, l);
        },
        startOperation: function startOperation() {
          return $r(this);
        },
        endOperation: function endOperation() {
          return Ur(this);
        },
        refresh: St(function () {
          var l = this.display.cachedTextHeight;
          Ft(this), this.curOp.forceUpdate = !0, xl(this), _l(this, this.doc.scrollLeft, this.doc.scrollTop), Ws(this.display), (l == null || Math.abs(l - vi(this.display)) > .5 || this.options.lineWrapping) && Os(this), Ge(this, "refresh", this);
        }),
        swapDoc: St(function (l) {
          var u = this.doc;
          return u.cm = null, this.state.selectingText && this.state.selectingText(), Jh(this, l), xl(this), this.display.input.reset(), _l(this, l.scrollLeft, l.scrollTop), this.curOp.forceScroll = !0, nt(this, "swapDoc", this, u), u;
        }),
        phrase: function phrase(l) {
          var u = this.options.phrases;
          return u && Object.prototype.hasOwnProperty.call(u, l) ? u[l] : l;
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
      }, si(t), t.registerHelper = function (l, u, f) {
        o.hasOwnProperty(l) || (o[l] = t[l] = {
          _global: []
        }), o[l][u] = f;
      }, t.registerGlobalHelper = function (l, u, f, d) {
        t.registerHelper(l, u, d), o[l]._global.push({
          pred: f,
          val: d
        });
      };
    }

    function lf(t, r, o, l, u) {
      var f = r,
          d = o,
          h = oe(t, r.line),
          v = u && t.direction == "rtl" ? -o : o;

      function g() {
        var te = r.line + v;
        return te < t.first || te >= t.first + t.size ? !1 : (r = new K(te, r.ch, r.sticky), h = oe(t, te));
      }

      function k(te) {
        var J;

        if (l == "codepoint") {
          var ne = h.text.charCodeAt(r.ch + (o > 0 ? 0 : -1));
          if (isNaN(ne)) J = null;else {
            var fe = o > 0 ? ne >= 55296 && ne < 56320 : ne >= 56320 && ne < 57343;
            J = new K(r.line, Math.max(0, Math.min(h.text.length, r.ch + o * (fe ? 2 : 1))), -o);
          }
        } else u ? J = l3(t.cm, h, r, o) : J = Zs(h, r, o);

        if (J == null) {
          if (!te && g()) r = Js(u, t.cm, h, r.line, v);else return !1;
        } else r = J;
        return !0;
      }

      if (l == "char" || l == "codepoint") k();else if (l == "column") k(!0);else if (l == "word" || l == "group") for (var T = null, P = l == "group", N = t.cm && t.cm.getHelper(r, "wordChars"), z = !0; !(o < 0 && !k(!z)); z = !1) {
        var $ = h.text.charAt(r.ch) || "\n",
            G = jo($, N) ? "w" : P && $ == "\n" ? "n" : !P || /\s/.test($) ? null : "p";

        if (P && !z && !G && (G = "s"), T && T != G) {
          o < 0 && (o = 1, k(), r.sticky = "after");
          break;
        }

        if (G && (T = G), o > 0 && !k(!z)) break;
      }
      var Z = vu(t, r, f, d, !0);
      return hs(f, Z) && (Z.hitSide = !0), Z;
    }

    function Gp(t, r, o, l) {
      var u = t.doc,
          f = r.left,
          d;

      if (l == "page") {
        var h = Math.min(t.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
            v = Math.max(h - .5 * vi(t.display), 3);
        d = (o > 0 ? r.bottom : r.top) + o * v;
      } else l == "line" && (d = o > 0 ? r.bottom + 3 : r.top - 3);

      for (var g; g = bs(t, f, d), !!g.outside;) {
        if (o < 0 ? d <= 0 : d >= u.height) {
          g.hitSide = !0;
          break;
        }

        d += o * 5;
      }

      return g;
    }

    var Le = function Le(t) {
      this.cm = t, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ze(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
    };

    Le.prototype.init = function (t) {
      var r = this,
          o = this,
          l = o.cm,
          u = o.div = t.lineDiv;
      u.contentEditable = !0, jp(u, l.options.spellcheck, l.options.autocorrect, l.options.autocapitalize);

      function f(h) {
        for (var v = h.target; v; v = v.parentNode) {
          if (v == u) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(v.className)) break;
        }

        return !1;
      }

      de(u, "paste", function (h) {
        !f(h) || tt(l, h) || Wp(h, l) || x <= 11 && setTimeout(rt(l, function () {
          return r.updateFromDOM();
        }), 20);
      }), de(u, "compositionstart", function (h) {
        r.composing = {
          data: h.data,
          done: !1
        };
      }), de(u, "compositionupdate", function (h) {
        r.composing || (r.composing = {
          data: h.data,
          done: !1
        });
      }), de(u, "compositionend", function (h) {
        r.composing && (h.data != r.composing.data && r.readFromDOMSoon(), r.composing.done = !0);
      }), de(u, "touchstart", function () {
        return o.forceCompositionEnd();
      }), de(u, "input", function () {
        r.composing || r.readFromDOMSoon();
      });

      function d(h) {
        if (!(!f(h) || tt(l, h))) {
          if (l.somethingSelected()) Su({
            lineWise: !1,
            text: l.getSelections()
          }), h.type == "cut" && l.replaceSelection("", null, "cut");else if (l.options.lineWiseCopyCut) {
            var v = Up(l);
            Su({
              lineWise: !0,
              text: v.text
            }), h.type == "cut" && l.operation(function () {
              l.setSelections(v.ranges, 0, Ct), l.replaceSelection("", null, "cut");
            });
          } else return;

          if (h.clipboardData) {
            h.clipboardData.clearData();
            var g = pn.text.join("\n");

            if (h.clipboardData.setData("Text", g), h.clipboardData.getData("Text") == g) {
              h.preventDefault();
              return;
            }
          }

          var k = Kp(),
              T = k.firstChild;
          l.display.lineSpace.insertBefore(k, l.display.lineSpace.firstChild), T.value = pn.text.join("\n");
          var P = W();
          ie(T), setTimeout(function () {
            l.display.lineSpace.removeChild(k), P.focus(), P == u && o.showPrimarySelection();
          }, 50);
        }
      }

      de(u, "copy", d), de(u, "cut", d);
    }, Le.prototype.screenReaderLabelChanged = function (t) {
      t ? this.div.setAttribute("aria-label", t) : this.div.removeAttribute("aria-label");
    }, Le.prototype.prepareSelection = function () {
      var t = Bh(this.cm, !1);
      return t.focus = W() == this.div, t;
    }, Le.prototype.showSelection = function (t, r) {
      !t || !this.cm.display.view.length || ((t.focus || r) && this.showPrimarySelection(), this.showMultipleSelections(t));
    }, Le.prototype.getSelection = function () {
      return this.cm.display.wrapper.ownerDocument.getSelection();
    }, Le.prototype.showPrimarySelection = function () {
      var t = this.getSelection(),
          r = this.cm,
          o = r.doc.sel.primary(),
          l = o.from(),
          u = o.to();

      if (r.display.viewTo == r.display.viewFrom || l.line >= r.display.viewTo || u.line < r.display.viewFrom) {
        t.removeAllRanges();
        return;
      }

      var f = xu(r, t.anchorNode, t.anchorOffset),
          d = xu(r, t.focusNode, t.focusOffset);

      if (!(f && !f.bad && d && !d.bad && pe(Vo(f, d), l) == 0 && pe(Go(f, d), u) == 0)) {
        var h = r.display.view,
            v = l.line >= r.display.viewFrom && Vp(r, l) || {
          node: h[0].measure.map[2],
          offset: 0
        },
            g = u.line < r.display.viewTo && Vp(r, u);

        if (!g) {
          var k = h[h.length - 1].measure,
              T = k.maps ? k.maps[k.maps.length - 1] : k.map;
          g = {
            node: T[T.length - 1],
            offset: T[T.length - 2] - T[T.length - 3]
          };
        }

        if (!v || !g) {
          t.removeAllRanges();
          return;
        }

        var P = t.rangeCount && t.getRangeAt(0),
            N;

        try {
          N = U(v.node, v.offset, g.offset, g.node);
        } catch (_unused29) {}

        N && (!s && r.state.focused ? (t.collapse(v.node, v.offset), N.collapsed || (t.removeAllRanges(), t.addRange(N))) : (t.removeAllRanges(), t.addRange(N)), P && t.anchorNode == null ? t.addRange(P) : s && this.startGracePeriod()), this.rememberSelection();
      }
    }, Le.prototype.startGracePeriod = function () {
      var t = this;
      clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
        t.gracePeriod = !1, t.selectionChanged() && t.cm.operation(function () {
          return t.cm.curOp.selectionChanged = !0;
        });
      }, 20);
    }, Le.prototype.showMultipleSelections = function (t) {
      me(this.cm.display.cursorDiv, t.cursors), me(this.cm.display.selectionDiv, t.selection);
    }, Le.prototype.rememberSelection = function () {
      var t = this.getSelection();
      this.lastAnchorNode = t.anchorNode, this.lastAnchorOffset = t.anchorOffset, this.lastFocusNode = t.focusNode, this.lastFocusOffset = t.focusOffset;
    }, Le.prototype.selectionInEditor = function () {
      var t = this.getSelection();
      if (!t.rangeCount) return !1;
      var r = t.getRangeAt(0).commonAncestorContainer;
      return V(this.div, r);
    }, Le.prototype.focus = function () {
      this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || W() != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
    }, Le.prototype.blur = function () {
      this.div.blur();
    }, Le.prototype.getField = function () {
      return this.div;
    }, Le.prototype.supportsTouch = function () {
      return !0;
    }, Le.prototype.receivedFocus = function () {
      var t = this,
          r = this;
      this.selectionInEditor() ? setTimeout(function () {
        return t.pollSelection();
      }, 20) : Ht(this.cm, function () {
        return r.cm.curOp.selectionChanged = !0;
      });

      function o() {
        r.cm.state.focused && (r.pollSelection(), r.polling.set(r.cm.options.pollInterval, o));
      }

      this.polling.set(this.cm.options.pollInterval, o);
    }, Le.prototype.selectionChanged = function () {
      var t = this.getSelection();
      return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode != this.lastFocusNode || t.focusOffset != this.lastFocusOffset;
    }, Le.prototype.pollSelection = function () {
      if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
        var t = this.getSelection(),
            r = this.cm;

        if (w && E && this.cm.display.gutterSpecs.length && E3(t.anchorNode)) {
          this.cm.triggerOnKeyDown({
            type: "keydown",
            keyCode: 8,
            preventDefault: Math.abs
          }), this.blur(), this.focus();
          return;
        }

        if (!this.composing) {
          this.rememberSelection();
          var o = xu(r, t.anchorNode, t.anchorOffset),
              l = xu(r, t.focusNode, t.focusOffset);
          o && l && Ht(r, function () {
            pt(r.doc, rr(o, l), Ct), (o.bad || l.bad) && (r.curOp.selectionChanged = !0);
          });
        }
      }
    }, Le.prototype.pollContent = function () {
      this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
      var t = this.cm,
          r = t.display,
          o = t.doc.sel.primary(),
          l = o.from(),
          u = o.to();
      if (l.ch == 0 && l.line > t.firstLine() && (l = K(l.line - 1, oe(t.doc, l.line - 1).length)), u.ch == oe(t.doc, u.line).text.length && u.line < t.lastLine() && (u = K(u.line + 1, 0)), l.line < r.viewFrom || u.line > r.viewTo - 1) return !1;
      var f, d, h;
      l.line == r.viewFrom || (f = zr(t, l.line)) == 0 ? (d = Te(r.view[0].line), h = r.view[0].node) : (d = Te(r.view[f].line), h = r.view[f - 1].node.nextSibling);
      var v = zr(t, u.line),
          g,
          k;
      if (v == r.view.length - 1 ? (g = r.viewTo - 1, k = r.lineDiv.lastChild) : (g = Te(r.view[v + 1].line) - 1, k = r.view[v + 1].node.previousSibling), !h) return !1;

      for (var T = t.doc.splitLines(T3(t, h, k, d, g)), P = Pr(t.doc, K(d, 0), K(g, oe(t.doc, g).text.length)); T.length > 1 && P.length > 1;) {
        if (we(T) == we(P)) T.pop(), P.pop(), g--;else if (T[0] == P[0]) T.shift(), P.shift(), d++;else break;
      }

      for (var N = 0, z = 0, $ = T[0], G = P[0], Z = Math.min($.length, G.length); N < Z && $.charCodeAt(N) == G.charCodeAt(N);) {
        ++N;
      }

      for (var te = we(T), J = we(P), ne = Math.min(te.length - (T.length == 1 ? N : 0), J.length - (P.length == 1 ? N : 0)); z < ne && te.charCodeAt(te.length - z - 1) == J.charCodeAt(J.length - z - 1);) {
        ++z;
      }

      if (T.length == 1 && P.length == 1 && d == l.line) for (; N && N > l.ch && te.charCodeAt(te.length - z - 1) == J.charCodeAt(J.length - z - 1);) {
        N--, z++;
      }
      T[T.length - 1] = te.slice(0, te.length - z).replace(/^\u200b+/, ""), T[0] = T[0].slice(N).replace(/\u200b+$/, "");
      var fe = K(d, N),
          ae = K(g, P.length ? we(P).length - z : 0);
      if (T.length > 1 || T[0] || pe(fe, ae)) return ki(t.doc, T, fe, ae, "+input"), !0;
    }, Le.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    }, Le.prototype.reset = function () {
      this.forceCompositionEnd();
    }, Le.prototype.forceCompositionEnd = function () {
      !this.composing || (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
    }, Le.prototype.readFromDOMSoon = function () {
      var t = this;
      this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function () {
        if (t.readDOMTimeout = null, t.composing) if (t.composing.done) t.composing = null;else return;
        t.updateFromDOM();
      }, 80));
    }, Le.prototype.updateFromDOM = function () {
      var t = this;
      (this.cm.isReadOnly() || !this.pollContent()) && Ht(this.cm, function () {
        return Ft(t.cm);
      });
    }, Le.prototype.setUneditable = function (t) {
      t.contentEditable = "false";
    }, Le.prototype.onKeyPress = function (t) {
      t.charCode == 0 || this.composing || (t.preventDefault(), this.cm.isReadOnly() || rt(this.cm, rf)(this.cm, String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), 0));
    }, Le.prototype.readOnlyChanged = function (t) {
      this.div.contentEditable = String(t != "nocursor");
    }, Le.prototype.onContextMenu = function () {}, Le.prototype.resetPosition = function () {}, Le.prototype.needsContentAttribute = !0;

    function Vp(t, r) {
      var o = Es(t, r.line);
      if (!o || o.hidden) return null;
      var l = oe(t.doc, r.line),
          u = Sh(o, l, r.line),
          f = Bn(l, t.doc.direction),
          d = "left";

      if (f) {
        var h = pl(f, r.ch);
        d = h % 2 ? "right" : "left";
      }

      var v = _h(u.map, r.ch, d);

      return v.offset = v.collapse == "right" ? v.end : v.start, v;
    }

    function E3(t) {
      for (var r = t; r; r = r.parentNode) {
        if (/CodeMirror-gutter-wrapper/.test(r.className)) return !0;
      }

      return !1;
    }

    function bi(t, r) {
      return r && (t.bad = !0), t;
    }

    function T3(t, r, o, l, u) {
      var f = "",
          d = !1,
          h = t.doc.lineSeparator(),
          v = !1;

      function g(N) {
        return function (z) {
          return z.id == N;
        };
      }

      function k() {
        d && (f += h, v && (f += h), d = v = !1);
      }

      function T(N) {
        N && (k(), f += N);
      }

      function P(N) {
        if (N.nodeType == 1) {
          var z = N.getAttribute("cm-text");

          if (z) {
            T(z);
            return;
          }

          var $ = N.getAttribute("cm-marker"),
              G;

          if ($) {
            var Z = t.findMarks(K(l, 0), K(u + 1, 0), g(+$));
            Z.length && (G = Z[0].find(0)) && T(Pr(t.doc, G.from, G.to).join(h));
            return;
          }

          if (N.getAttribute("contenteditable") == "false") return;
          var te = /^(pre|div|p|li|table|br)$/i.test(N.nodeName);
          if (!/^br$/i.test(N.nodeName) && N.textContent.length == 0) return;
          te && k();

          for (var J = 0; J < N.childNodes.length; J++) {
            P(N.childNodes[J]);
          }

          /^(pre|p)$/i.test(N.nodeName) && (v = !0), te && (d = !0);
        } else N.nodeType == 3 && T(N.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }

      for (; P(r), r != o;) {
        r = r.nextSibling, v = !1;
      }

      return f;
    }

    function xu(t, r, o) {
      var l;

      if (r == t.display.lineDiv) {
        if (l = t.display.lineDiv.childNodes[o], !l) return bi(t.clipPos(K(t.display.viewTo - 1)), !0);
        r = null, o = 0;
      } else for (l = r;; l = l.parentNode) {
        if (!l || l == t.display.lineDiv) return null;
        if (l.parentNode && l.parentNode == t.display.lineDiv) break;
      }

      for (var u = 0; u < t.display.view.length; u++) {
        var f = t.display.view[u];
        if (f.node == l) return L3(f, r, o);
      }
    }

    function L3(t, r, o) {
      var l = t.text.firstChild,
          u = !1;
      if (!r || !V(l, r)) return bi(K(Te(t.line), 0), !0);

      if (r == l && (u = !0, r = l.childNodes[o], o = 0, !r)) {
        var f = t.rest ? we(t.rest) : t.line;
        return bi(K(Te(f), f.text.length), u);
      }

      var d = r.nodeType == 3 ? r : null,
          h = r;

      for (!d && r.childNodes.length == 1 && r.firstChild.nodeType == 3 && (d = r.firstChild, o && (o = d.nodeValue.length)); h.parentNode != l;) {
        h = h.parentNode;
      }

      var v = t.measure,
          g = v.maps;

      function k(G, Z, te) {
        for (var J = -1; J < (g ? g.length : 0); J++) {
          for (var ne = J < 0 ? v.map : g[J], fe = 0; fe < ne.length; fe += 3) {
            var ae = ne[fe + 2];

            if (ae == G || ae == Z) {
              var ge = Te(J < 0 ? t.line : t.rest[J]),
                  Fe = ne[fe] + te;
              return (te < 0 || ae != G) && (Fe = ne[fe + (te ? 1 : 0)]), K(ge, Fe);
            }
          }
        }
      }

      var T = k(d, h, o);
      if (T) return bi(T, u);

      for (var P = h.nextSibling, N = d ? d.nodeValue.length - o : 0; P; P = P.nextSibling) {
        if (T = k(P, P.firstChild, 0), T) return bi(K(T.line, T.ch - N), u);
        N += P.textContent.length;
      }

      for (var z = h.previousSibling, $ = o; z; z = z.previousSibling) {
        if (T = k(z, z.firstChild, -1), T) return bi(K(T.line, T.ch + $), u);
        $ += z.textContent.length;
      }
    }

    var je = function je(t) {
      this.cm = t, this.prevInput = "", this.pollingFast = !1, this.polling = new Ze(), this.hasSelection = !1, this.composing = null;
    };

    je.prototype.init = function (t) {
      var r = this,
          o = this,
          l = this.cm;
      this.createField(t);
      var u = this.textarea;
      t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild), y && (u.style.width = "0px"), de(u, "input", function () {
        C && x >= 9 && r.hasSelection && (r.hasSelection = null), o.poll();
      }), de(u, "paste", function (d) {
        tt(l, d) || Wp(d, l) || (l.state.pasteIncoming = +new Date(), o.fastPoll());
      });

      function f(d) {
        if (!tt(l, d)) {
          if (l.somethingSelected()) Su({
            lineWise: !1,
            text: l.getSelections()
          });else if (l.options.lineWiseCopyCut) {
            var h = Up(l);
            Su({
              lineWise: !0,
              text: h.text
            }), d.type == "cut" ? l.setSelections(h.ranges, null, Ct) : (o.prevInput = "", u.value = h.text.join("\n"), ie(u));
          } else return;
          d.type == "cut" && (l.state.cutIncoming = +new Date());
        }
      }

      de(u, "cut", f), de(u, "copy", f), de(t.scroller, "paste", function (d) {
        if (!(Rn(t, d) || tt(l, d))) {
          if (!u.dispatchEvent) {
            l.state.pasteIncoming = +new Date(), o.focus();
            return;
          }

          var h = new Event("paste");
          h.clipboardData = d.clipboardData, u.dispatchEvent(h);
        }
      }), de(t.lineSpace, "selectstart", function (d) {
        Rn(t, d) || At(d);
      }), de(u, "compositionstart", function () {
        var d = l.getCursor("from");
        o.composing && o.composing.range.clear(), o.composing = {
          start: d,
          range: l.markText(d, l.getCursor("to"), {
            className: "CodeMirror-composing"
          })
        };
      }), de(u, "compositionend", function () {
        o.composing && (o.poll(), o.composing.range.clear(), o.composing = null);
      });
    }, je.prototype.createField = function (t) {
      this.wrapper = Kp(), this.textarea = this.wrapper.firstChild;
    }, je.prototype.screenReaderLabelChanged = function (t) {
      t ? this.textarea.setAttribute("aria-label", t) : this.textarea.removeAttribute("aria-label");
    }, je.prototype.prepareSelection = function () {
      var t = this.cm,
          r = t.display,
          o = t.doc,
          l = Bh(t);

      if (t.options.moveInputWithCursor) {
        var u = dn(t, o.sel.primary().head, "div"),
            f = r.wrapper.getBoundingClientRect(),
            d = r.lineDiv.getBoundingClientRect();
        l.teTop = Math.max(0, Math.min(r.wrapper.clientHeight - 10, u.top + d.top - f.top)), l.teLeft = Math.max(0, Math.min(r.wrapper.clientWidth - 10, u.left + d.left - f.left));
      }

      return l;
    }, je.prototype.showSelection = function (t) {
      var r = this.cm,
          o = r.display;
      me(o.cursorDiv, t.cursors), me(o.selectionDiv, t.selection), t.teTop != null && (this.wrapper.style.top = t.teTop + "px", this.wrapper.style.left = t.teLeft + "px");
    }, je.prototype.reset = function (t) {
      if (!(this.contextMenuPending || this.composing)) {
        var r = this.cm;

        if (r.somethingSelected()) {
          this.prevInput = "";
          var o = r.getSelection();
          this.textarea.value = o, r.state.focused && ie(this.textarea), C && x >= 9 && (this.hasSelection = o);
        } else t || (this.prevInput = this.textarea.value = "", C && x >= 9 && (this.hasSelection = null));
      }
    }, je.prototype.getField = function () {
      return this.textarea;
    }, je.prototype.supportsTouch = function () {
      return !1;
    }, je.prototype.focus = function () {
      if (this.cm.options.readOnly != "nocursor" && (!S || W() != this.textarea)) try {
        this.textarea.focus();
      } catch (_unused30) {}
    }, je.prototype.blur = function () {
      this.textarea.blur();
    }, je.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    }, je.prototype.receivedFocus = function () {
      this.slowPoll();
    }, je.prototype.slowPoll = function () {
      var t = this;
      this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
        t.poll(), t.cm.state.focused && t.slowPoll();
      });
    }, je.prototype.fastPoll = function () {
      var t = !1,
          r = this;
      r.pollingFast = !0;

      function o() {
        var l = r.poll();
        !l && !t ? (t = !0, r.polling.set(60, o)) : (r.pollingFast = !1, r.slowPoll());
      }

      r.polling.set(20, o);
    }, je.prototype.poll = function () {
      var t = this,
          r = this.cm,
          o = this.textarea,
          l = this.prevInput;
      if (this.contextMenuPending || !r.state.focused || Tm(o) && !l && !this.composing || r.isReadOnly() || r.options.disableInput || r.state.keySeq) return !1;
      var u = o.value;
      if (u == l && !r.somethingSelected()) return !1;
      if (C && x >= 9 && this.hasSelection === u || L && /[\uf700-\uf7ff]/.test(u)) return r.display.input.reset(), !1;

      if (r.doc.sel == r.display.selForContextMenu) {
        var f = u.charCodeAt(0);
        if (f == 8203 && !l && (l = "\u200B"), f == 8666) return this.reset(), this.cm.execCommand("undo");
      }

      for (var d = 0, h = Math.min(l.length, u.length); d < h && l.charCodeAt(d) == u.charCodeAt(d);) {
        ++d;
      }

      return Ht(r, function () {
        rf(r, u.slice(d), l.length - d, null, t.composing ? "*compose" : null), u.length > 1e3 || u.indexOf("\n") > -1 ? o.value = t.prevInput = "" : t.prevInput = u, t.composing && (t.composing.range.clear(), t.composing.range = r.markText(t.composing.start, r.getCursor("to"), {
          className: "CodeMirror-composing"
        }));
      }), !0;
    }, je.prototype.ensurePolled = function () {
      this.pollingFast && this.poll() && (this.pollingFast = !1);
    }, je.prototype.onKeyPress = function () {
      C && x >= 9 && (this.hasSelection = null), this.fastPoll();
    }, je.prototype.onContextMenu = function (t) {
      var r = this,
          o = r.cm,
          l = o.display,
          u = r.textarea;
      r.contextMenuPending && r.contextMenuPending();
      var f = Rr(o, t),
          d = l.scroller.scrollTop;
      if (!f || b) return;
      var h = o.options.resetSelectionOnContextMenu;
      h && o.doc.sel.contains(f) == -1 && rt(o, pt)(o.doc, rr(f), Ct);
      var v = u.style.cssText,
          g = r.wrapper.style.cssText,
          k = r.wrapper.offsetParent.getBoundingClientRect();
      r.wrapper.style.cssText = "position: static", u.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (t.clientY - k.top - 5) + "px; left: " + (t.clientX - k.left - 5) + "px;\n      z-index: 1000; background: " + (C ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      var T;
      _ && (T = window.scrollY), l.input.focus(), _ && window.scrollTo(null, T), l.input.reset(), o.somethingSelected() || (u.value = r.prevInput = " "), r.contextMenuPending = N, l.selForContextMenu = o.doc.sel, clearTimeout(l.detectingSelectAll);

      function P() {
        if (u.selectionStart != null) {
          var $ = o.somethingSelected(),
              G = "\u200B" + ($ ? u.value : "");
          u.value = "\u21DA", u.value = G, r.prevInput = $ ? "" : "\u200B", u.selectionStart = 1, u.selectionEnd = G.length, l.selForContextMenu = o.doc.sel;
        }
      }

      function N() {
        if (r.contextMenuPending == N && (r.contextMenuPending = !1, r.wrapper.style.cssText = g, u.style.cssText = v, C && x < 9 && l.scrollbars.setScrollTop(l.scroller.scrollTop = d), u.selectionStart != null)) {
          (!C || C && x < 9) && P();

          var $ = 0,
              G = function G() {
            l.selForContextMenu == o.doc.sel && u.selectionStart == 0 && u.selectionEnd > 0 && r.prevInput == "\u200B" ? rt(o, cp)(o) : $++ < 10 ? l.detectingSelectAll = setTimeout(G, 500) : (l.selForContextMenu = null, l.input.reset());
          };

          l.detectingSelectAll = setTimeout(G, 200);
        }
      }

      if (C && x >= 9 && P(), ee) {
        vl(t);

        var z = function z() {
          Qt(window, "mouseup", z), setTimeout(N, 20);
        };

        de(window, "mouseup", z);
      } else setTimeout(N, 50);
    }, je.prototype.readOnlyChanged = function (t) {
      t || this.reset(), this.textarea.disabled = t == "nocursor", this.textarea.readOnly = !!t;
    }, je.prototype.setUneditable = function () {}, je.prototype.needsContentAttribute = !1;

    function b3(t, r) {
      if (r = r ? Se(r) : {}, r.value = t.value, !r.tabindex && t.tabIndex && (r.tabindex = t.tabIndex), !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), r.autofocus == null) {
        var o = W();
        r.autofocus = o == t || t.getAttribute("autofocus") != null && o == document.body;
      }

      function l() {
        t.value = h.getValue();
      }

      var u;

      if (t.form && (de(t.form, "submit", l), !r.leaveSubmitMethodAlone)) {
        var f = t.form;
        u = f.submit;

        try {
          var d = f.submit = function () {
            l(), f.submit = u, f.submit(), f.submit = d;
          };
        } catch (_unused31) {}
      }

      r.finishInit = function (v) {
        v.save = l, v.getTextArea = function () {
          return t;
        }, v.toTextArea = function () {
          v.toTextArea = isNaN, l(), t.parentNode.removeChild(v.getWrapperElement()), t.style.display = "", t.form && (Qt(t.form, "submit", l), !r.leaveSubmitMethodAlone && typeof t.form.submit == "function" && (t.form.submit = u));
        };
      }, t.style.display = "none";
      var h = Ne(function (v) {
        return t.parentNode.insertBefore(v, t.nextSibling);
      }, r);
      return h;
    }

    function A3(t) {
      t.off = Qt, t.on = de, t.wheelEventPixels = M1, t.Doc = Dt, t.splitLines = os, t.countColumn = ke, t.findColumn = cl, t.isWordChar = Or, t.Pass = Ar, t.signal = Ge, t.Line = di, t.changeEnd = ir, t.scrollbarModel = Wh, t.Pos = K, t.cmpPos = pe, t.modes = as, t.mimeModes = fi, t.resolveMode = Ko, t.getMode = ss, t.modeExtensions = ci, t.extendMode = Dm, t.copyState = Nr, t.startState = Vd, t.innerMode = fs, t.commands = zl, t.keyMap = Hn, t.keyName = Lp, t.isModifierKey = Ep, t.lookupKey = Ei, t.normalizeKeyMap = i3, t.StringStream = Ve, t.SharedTextMarker = Ml, t.TextMarker = or, t.LineWidget = Bl, t.e_preventDefault = At, t.e_stopPropagation = Kd, t.e_stop = vl, t.addClass = j, t.contains = V, t.rmClass = ue, t.keyNames = ur;
    }

    C3(Ne), _3(Ne);
    var F3 = "iter insert remove copy getEditor constructor".split(" ");

    for (var ku in Dt.prototype) {
      Dt.prototype.hasOwnProperty(ku) && be(F3, ku) < 0 && (Ne.prototype[ku] = function (t) {
        return function () {
          return t.apply(this.doc, arguments);
        };
      }(Dt.prototype[ku]));
    }

    return si(Dt), Ne.inputStyles = {
      textarea: je,
      contenteditable: Le
    }, Ne.defineMode = function (t) {
      !Ne.defaults.mode && t != "null" && (Ne.defaults.mode = t), Am.apply(this, arguments);
    }, Ne.defineMIME = Fm, Ne.defineMode("null", function () {
      return {
        token: function token(t) {
          return t.skipToEnd();
        }
      };
    }), Ne.defineMIME("text/plain", "null"), Ne.defineExtension = function (t, r) {
      Ne.prototype[t] = r;
    }, Ne.defineDocExtension = function (t, r) {
      Dt.prototype[t] = r;
    }, Ne.fromTextArea = b3, A3(Ne), Ne.version = "5.65.2", Ne;
  });
})(ai);

var Aa = ai.exports;

(function (e, n) {
  (function (i) {
    i(ai.exports);
  })(function (i) {
    i.defineSimpleMode = function (E, b) {
      i.defineMode(E, function (F) {
        return i.simpleMode(F, b);
      });
    }, i.simpleMode = function (E, b) {
      a(b, "start");
      var F = {},
          D = b.meta || {},
          R = !1;

      for (var y in b) {
        if (y != D && b.hasOwnProperty(y)) for (var w = F[y] = [], S = b[y], L = 0; L < S.length; L++) {
          var O = S[L];
          w.push(new p(O, b)), (O.indent || O.dedent) && (R = !0);
        }
      }

      var I = {
        startState: function startState() {
          return {
            state: "start",
            pending: null,
            local: null,
            localState: null,
            indent: R ? [] : null
          };
        },
        copyState: function copyState(H) {
          var ee = {
            state: H.state,
            pending: H.pending,
            local: H.local,
            localState: null,
            indent: H.indent && H.indent.slice(0)
          };
          H.localState && (ee.localState = i.copyState(H.local.mode, H.localState)), H.stack && (ee.stack = H.stack.slice(0));

          for (var q = H.persistentStates; q; q = q.next) {
            ee.persistentStates = {
              mode: q.mode,
              spec: q.spec,
              state: q.state == H.localState ? ee.localState : i.copyState(q.mode, q.state),
              next: ee.persistentStates
            };
          }

          return ee;
        },
        token: m(F, E),
        innerMode: function innerMode(H) {
          return H.local && {
            mode: H.local.mode,
            state: H.localState
          };
        },
        indent: A(F, D)
      };
      if (D) for (var M in D) {
        D.hasOwnProperty(M) && (I[M] = D[M]);
      }
      return I;
    };

    function a(E, b) {
      if (!E.hasOwnProperty(b)) throw new Error("Undefined state " + b + " in simple mode");
    }

    function s(E, b) {
      if (!E) return /(?:)/;
      var F = "";
      return E instanceof RegExp ? (E.ignoreCase && (F = "i"), E.unicode && (F += "u"), E = E.source) : E = String(E), new RegExp((b === !1 ? "" : "^") + "(?:" + E + ")", F);
    }

    function c(E) {
      if (!E) return null;
      if (E.apply) return E;
      if (typeof E == "string") return E.replace(/\./g, " ");

      for (var b = [], F = 0; F < E.length; F++) {
        b.push(E[F] && E[F].replace(/\./g, " "));
      }

      return b;
    }

    function p(E, b) {
      (E.next || E.push) && a(b, E.next || E.push), this.regex = s(E.regex), this.token = c(E.token), this.data = E;
    }

    function m(E, b) {
      return function (F, D) {
        if (D.pending) {
          var R = D.pending.shift();
          return D.pending.length == 0 && (D.pending = null), F.pos += R.text.length, R.token;
        }

        if (D.local) if (D.local.end && F.match(D.local.end)) {
          var y = D.local.endToken || null;
          return D.local = D.localState = null, y;
        } else {
          var y = D.local.mode.token(F, D.localState),
              w;
          return D.local.endScan && (w = D.local.endScan.exec(F.current())) && (F.pos = F.start + w.index), y;
        }

        for (var S = E[D.state], L = 0; L < S.length; L++) {
          var O = S[L],
              I = (!O.data.sol || F.sol()) && F.match(O.regex);

          if (I) {
            O.data.next ? D.state = O.data.next : O.data.push ? ((D.stack || (D.stack = [])).push(D.state), D.state = O.data.push) : O.data.pop && D.stack && D.stack.length && (D.state = D.stack.pop()), O.data.mode && x(b, D, O.data.mode, O.token), O.data.indent && D.indent.push(F.indentation() + b.indentUnit), O.data.dedent && D.indent.pop();
            var M = O.token;

            if (M && M.apply && (M = M(I)), I.length > 2 && O.token && typeof O.token != "string") {
              for (var H = 2; H < I.length; H++) {
                I[H] && (D.pending || (D.pending = [])).push({
                  text: I[H],
                  token: O.token[H - 1]
                });
              }

              return F.backUp(I[0].length - (I[1] ? I[1].length : 0)), M[0];
            } else return M && M.join ? M[0] : M;
          }
        }

        return F.next(), null;
      };
    }

    function C(E, b) {
      if (E === b) return !0;
      if (!E || _typeof(E) != "object" || !b || _typeof(b) != "object") return !1;
      var F = 0;

      for (var D in E) {
        if (E.hasOwnProperty(D)) {
          if (!b.hasOwnProperty(D) || !C(E[D], b[D])) return !1;
          F++;
        }
      }

      for (var D in b) {
        b.hasOwnProperty(D) && F--;
      }

      return F == 0;
    }

    function x(E, b, F, D) {
      var R;
      if (F.persistent) for (var y = b.persistentStates; y && !R; y = y.next) {
        (F.spec ? C(F.spec, y.spec) : F.mode == y.mode) && (R = y);
      }
      var w = R ? R.mode : F.mode || i.getMode(E, F.spec),
          S = R ? R.state : i.startState(w);
      F.persistent && !R && (b.persistentStates = {
        mode: w,
        spec: F.spec,
        state: S,
        next: b.persistentStates
      }), b.localState = S, b.local = {
        mode: w,
        end: F.end && s(F.end),
        endScan: F.end && F.forceEnd !== !1 && s(F.end, !1),
        endToken: D && D.join ? D[D.length - 1] : D
      };
    }

    function _(E, b) {
      for (var F = 0; F < b.length; F++) {
        if (b[F] === E) return !0;
      }
    }

    function A(E, b) {
      return function (F, D, R) {
        if (F.local && F.local.mode.indent) return F.local.mode.indent(F.localState, D, R);
        if (F.indent == null || F.local || b.dontIndentStates && _(F.state, b.dontIndentStates) > -1) return i.Pass;
        var y = F.indent.length - 1,
            w = E[F.state];

        e: for (;;) {
          for (var S = 0; S < w.length; S++) {
            var L = w[S];

            if (L.data.dedent && L.data.dedentIfLineStart !== !1) {
              var O = L.regex.exec(D);

              if (O && O[0]) {
                y--, (L.next || L.push) && (w = E[L.next || L.push]), D = D.slice(O[0].length);
                continue e;
              }
            }
          }

          break;
        }

        return y < 0 ? 0 : F.indent[y];
      };
    }
  });
})();

(function (e, n) {
  (function (i) {
    i(ai.exports);
  })(function (i) {
    var a = {},
        s = /[^\s\u00a0]/,
        c = i.Pos,
        p = i.cmpPos;

    function m(_) {
      var A = _.search(s);

      return A == -1 ? 0 : A;
    }

    i.commands.toggleComment = function (_) {
      _.toggleComment();
    }, i.defineExtension("toggleComment", function (_) {
      _ || (_ = a);

      for (var A = this, E = 1 / 0, b = this.listSelections(), F = null, D = b.length - 1; D >= 0; D--) {
        var R = b[D].from(),
            y = b[D].to();
        R.line >= E || (y.line >= E && (y = c(E, 0)), E = R.line, F == null ? A.uncomment(R, y, _) ? F = "un" : (A.lineComment(R, y, _), F = "line") : F == "un" ? A.uncomment(R, y, _) : A.lineComment(R, y, _));
      }
    });

    function C(_, A, E) {
      return /\bstring\b/.test(_.getTokenTypeAt(c(A.line, 0))) && !/^[\'\"\`]/.test(E);
    }

    function x(_, A) {
      var E = _.getMode();

      return E.useInnerComments === !1 || !E.innerMode ? E : _.getModeAt(A);
    }

    i.defineExtension("lineComment", function (_, A, E) {
      E || (E = a);
      var b = this,
          F = x(b, _),
          D = b.getLine(_.line);

      if (!(D == null || C(b, _, D))) {
        var R = E.lineComment || F.lineComment;

        if (!R) {
          (E.blockCommentStart || F.blockCommentStart) && (E.fullLines = !0, b.blockComment(_, A, E));
          return;
        }

        var y = Math.min(A.ch != 0 || A.line == _.line ? A.line + 1 : A.line, b.lastLine() + 1),
            w = E.padding == null ? " " : E.padding,
            S = E.commentBlankLines || _.line == A.line;
        b.operation(function () {
          if (E.indent) {
            for (var L = null, O = _.line; O < y; ++O) {
              var I = b.getLine(O),
                  M = I.slice(0, m(I));
              (L == null || L.length > M.length) && (L = M);
            }

            for (var O = _.line; O < y; ++O) {
              var I = b.getLine(O),
                  H = L.length;
              !S && !s.test(I) || (I.slice(0, H) != L && (H = m(I)), b.replaceRange(L + R + w, c(O, 0), c(O, H)));
            }
          } else for (var O = _.line; O < y; ++O) {
            (S || s.test(b.getLine(O))) && b.replaceRange(R + w, c(O, 0));
          }
        });
      }
    }), i.defineExtension("blockComment", function (_, A, E) {
      E || (E = a);
      var b = this,
          F = x(b, _),
          D = E.blockCommentStart || F.blockCommentStart,
          R = E.blockCommentEnd || F.blockCommentEnd;

      if (!D || !R) {
        (E.lineComment || F.lineComment) && E.fullLines != !1 && b.lineComment(_, A, E);
        return;
      }

      if (!/\bcomment\b/.test(b.getTokenTypeAt(c(_.line, 0)))) {
        var y = Math.min(A.line, b.lastLine());
        y != _.line && A.ch == 0 && s.test(b.getLine(y)) && --y;
        var w = E.padding == null ? " " : E.padding;
        _.line > y || b.operation(function () {
          if (E.fullLines != !1) {
            var S = s.test(b.getLine(y));
            b.replaceRange(w + R, c(y)), b.replaceRange(D + w, c(_.line, 0));
            var L = E.blockCommentLead || F.blockCommentLead;
            if (L != null) for (var O = _.line + 1; O <= y; ++O) {
              (O != y || S) && b.replaceRange(L + w, c(O, 0));
            }
          } else {
            var I = p(b.getCursor("to"), A) == 0,
                M = !b.somethingSelected();
            b.replaceRange(R, A), I && b.setSelection(M ? A : b.getCursor("from"), A), b.replaceRange(D, _);
          }
        });
      }
    }), i.defineExtension("uncomment", function (_, A, E) {
      E || (E = a);
      var b = this,
          F = x(b, _),
          D = Math.min(A.ch != 0 || A.line == _.line ? A.line : A.line - 1, b.lastLine()),
          R = Math.min(_.line, D),
          y = E.lineComment || F.lineComment,
          w = [],
          S = E.padding == null ? " " : E.padding,
          L;

      e: {
        if (!y) break e;

        for (var O = R; O <= D; ++O) {
          var I = b.getLine(O),
              M = I.indexOf(y);
          if (M > -1 && !/comment/.test(b.getTokenTypeAt(c(O, M + 1))) && (M = -1), M == -1 && s.test(I) || M > -1 && s.test(I.slice(0, M))) break e;
          w.push(I);
        }

        if (b.operation(function () {
          for (var X = R; X <= D; ++X) {
            var ie = w[X - R],
                se = ie.indexOf(y),
                Se = se + y.length;
            se < 0 || (ie.slice(Se, Se + S.length) == S && (Se += S.length), L = !0, b.replaceRange("", c(X, se), c(X, Se)));
          }
        }), L) return !0;
      }

      var H = E.blockCommentStart || F.blockCommentStart,
          ee = E.blockCommentEnd || F.blockCommentEnd;
      if (!H || !ee) return !1;
      var q = E.blockCommentLead || F.blockCommentLead,
          ue = b.getLine(R),
          he = ue.indexOf(H);
      if (he == -1) return !1;
      var me = D == R ? ue : b.getLine(D),
          Y = me.indexOf(ee, D == R ? he + H.length : 0),
          xe = c(R, he + 1),
          U = c(D, Y + 1);
      if (Y == -1 || !/comment/.test(b.getTokenTypeAt(xe)) || !/comment/.test(b.getTokenTypeAt(U)) || b.getRange(xe, U, "\n").indexOf(ee) > -1) return !1;
      var V = ue.lastIndexOf(H, _.ch),
          W = V == -1 ? -1 : ue.slice(0, _.ch).indexOf(ee, V + H.length);
      if (V != -1 && W != -1 && W + ee.length != _.ch) return !1;
      W = me.indexOf(ee, A.ch);
      var j = me.slice(A.ch).lastIndexOf(H, W - A.ch);
      return V = W == -1 || j == -1 ? -1 : A.ch + j, W != -1 && V != -1 && V != A.ch ? !1 : (b.operation(function () {
        b.replaceRange("", c(D, Y - (S && me.slice(Y - S.length, Y) == S ? S.length : 0)), c(D, Y + ee.length));
        var X = he + H.length;
        if (S && ue.slice(X, X + S.length) == S && (X += S.length), b.replaceRange("", c(R, he), c(R, X)), q) for (var ie = R + 1; ie <= D; ++ie) {
          var se = b.getLine(ie),
              Se = se.indexOf(q);

          if (!(Se == -1 || s.test(se.slice(0, Se)))) {
            var ke = Se + q.length;
            S && se.slice(ke, ke + S.length) == S && (ke += S.length), b.replaceRange("", c(ie, Se), c(ie, ke));
          }
        }
      }), !0);
    });
  });
})();

(function (e, n) {
  (function (i) {
    i(ai.exports);
  })(function (i) {
    var a = "CodeMirror-hint",
        s = "CodeMirror-hint-active";
    i.showHint = function (y, w, S) {
      if (!w) return y.showHint(S);
      S && S.async && (w.async = !0);
      var L = {
        hint: w
      };
      if (S) for (var O in S) {
        L[O] = S[O];
      }
      return y.showHint(L);
    }, i.defineExtension("showHint", function (y) {
      y = C(this, this.getCursor("start"), y);
      var w = this.listSelections();

      if (!(w.length > 1)) {
        if (this.somethingSelected()) {
          if (!y.hint.supportsSelection) return;

          for (var S = 0; S < w.length; S++) {
            if (w[S].head.line != w[S].anchor.line) return;
          }
        }

        this.state.completionActive && this.state.completionActive.close();
        var L = this.state.completionActive = new c(this, y);
        !L.options.hint || (i.signal(this, "startCompletion", this), L.update(!0));
      }
    }), i.defineExtension("closeHint", function () {
      this.state.completionActive && this.state.completionActive.close();
    });

    function c(y, w) {
      if (this.cm = y, this.options = w, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
        var S = this;
        y.on("cursorActivity", this.activityFunc = function () {
          S.cursorActivity();
        });
      }
    }

    var p = window.requestAnimationFrame || function (y) {
      return setTimeout(y, 1e3 / 60);
    },
        m = window.cancelAnimationFrame || clearTimeout;

    c.prototype = {
      close: function close() {
        !this.active() || (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && i.signal(this.data, "close"), this.widget && this.widget.close(), i.signal(this.cm, "endCompletion", this.cm));
      },
      active: function active() {
        return this.cm.state.completionActive == this;
      },
      pick: function pick(y, w) {
        var S = y.list[w],
            L = this;
        this.cm.operation(function () {
          S.hint ? S.hint(L.cm, y, S) : L.cm.replaceRange(x(S), S.from || y.from, S.to || y.to, "complete"), i.signal(y, "pick", S), L.cm.scrollIntoView();
        }), this.options.closeOnPick && this.close();
      },
      cursorActivity: function cursorActivity() {
        this.debounce && (m(this.debounce), this.debounce = 0);
        var y = this.startPos;
        this.data && (y = this.data.from);
        var w = this.cm.getCursor(),
            S = this.cm.getLine(w.line);
        if (w.line != this.startPos.line || S.length - w.ch != this.startLen - this.startPos.ch || w.ch < y.ch || this.cm.somethingSelected() || !w.ch || this.options.closeCharacters.test(S.charAt(w.ch - 1))) this.close();else {
          var L = this;
          this.debounce = p(function () {
            L.update();
          }), this.widget && this.widget.disable();
        }
      },
      update: function update(y) {
        if (this.tick != null) {
          var w = this,
              S = ++this.tick;
          F(this.options.hint, this.cm, this.options, function (L) {
            w.tick == S && w.finishUpdate(L, y);
          });
        }
      },
      finishUpdate: function finishUpdate(y, w) {
        this.data && i.signal(this.data, "update");
        var S = this.widget && this.widget.picked || w && this.options.completeSingle;
        this.widget && this.widget.close(), this.data = y, y && y.list.length && (S && y.list.length == 1 ? this.pick(y, 0) : (this.widget = new E(this, y), i.signal(y, "shown")));
      }
    };

    function C(y, w, S) {
      var L = y.options.hintOptions,
          O = {};

      for (var I in R) {
        O[I] = R[I];
      }

      if (L) for (var I in L) {
        L[I] !== void 0 && (O[I] = L[I]);
      }
      if (S) for (var I in S) {
        S[I] !== void 0 && (O[I] = S[I]);
      }
      return O.hint.resolve && (O.hint = O.hint.resolve(y, w)), O;
    }

    function x(y) {
      return typeof y == "string" ? y : y.text;
    }

    function _(y, w) {
      var S = {
        Up: function Up() {
          w.moveFocus(-1);
        },
        Down: function Down() {
          w.moveFocus(1);
        },
        PageUp: function PageUp() {
          w.moveFocus(-w.menuSize() + 1, !0);
        },
        PageDown: function PageDown() {
          w.moveFocus(w.menuSize() - 1, !0);
        },
        Home: function Home() {
          w.setFocus(0);
        },
        End: function End() {
          w.setFocus(w.length - 1);
        },
        Enter: w.pick,
        Tab: w.pick,
        Esc: w.close
      },
          L = /Mac/.test(navigator.platform);
      L && (S["Ctrl-P"] = function () {
        w.moveFocus(-1);
      }, S["Ctrl-N"] = function () {
        w.moveFocus(1);
      });
      var O = y.options.customKeys,
          I = O ? {} : S;

      function M(q, ue) {
        var he;
        typeof ue != "string" ? he = function he(me) {
          return ue(me, w);
        } : S.hasOwnProperty(ue) ? he = S[ue] : he = ue, I[q] = he;
      }

      if (O) for (var H in O) {
        O.hasOwnProperty(H) && M(H, O[H]);
      }
      var ee = y.options.extraKeys;
      if (ee) for (var H in ee) {
        ee.hasOwnProperty(H) && M(H, ee[H]);
      }
      return I;
    }

    function A(y, w) {
      for (; w && w != y;) {
        if (w.nodeName.toUpperCase() === "LI" && w.parentNode == y) return w;
        w = w.parentNode;
      }
    }

    function E(y, w) {
      this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = y, this.data = w, this.picked = !1;
      var S = this,
          L = y.cm,
          O = L.getInputField().ownerDocument,
          I = O.defaultView || O.parentWindow,
          M = this.hints = O.createElement("ul");
      M.setAttribute("role", "listbox"), M.setAttribute("aria-expanded", "true"), M.id = this.id;
      var H = y.cm.options.theme;
      M.className = "CodeMirror-hints " + H, this.selectedHint = w.selectedHint || 0;

      for (var ee = w.list, q = 0; q < ee.length; ++q) {
        var ue = M.appendChild(O.createElement("li")),
            he = ee[q],
            me = a + (q != this.selectedHint ? "" : " " + s);
        he.className != null && (me = he.className + " " + me), ue.className = me, q == this.selectedHint && ue.setAttribute("aria-selected", "true"), ue.id = this.id + "-" + q, ue.setAttribute("role", "option"), he.render ? he.render(ue, w, he) : ue.appendChild(O.createTextNode(he.displayText || x(he))), ue.hintId = q;
      }

      var Y = y.options.container || O.body,
          xe = L.cursorCoords(y.options.alignWithWord ? w.from : null),
          U = xe.left,
          V = xe.bottom,
          W = !0,
          j = 0,
          X = 0;

      if (Y !== O.body) {
        var ie = ["absolute", "relative", "fixed"].indexOf(I.getComputedStyle(Y).position) !== -1,
            se = ie ? Y : Y.offsetParent,
            Se = se.getBoundingClientRect(),
            ke = O.body.getBoundingClientRect();
        j = Se.left - ke.left - se.scrollLeft, X = Se.top - ke.top - se.scrollTop;
      }

      M.style.left = U - j + "px", M.style.top = V - X + "px";
      var Ze = I.innerWidth || Math.max(O.body.offsetWidth, O.documentElement.offsetWidth),
          be = I.innerHeight || Math.max(O.body.offsetHeight, O.documentElement.offsetHeight);
      Y.appendChild(M), L.getInputField().setAttribute("aria-autocomplete", "list"), L.getInputField().setAttribute("aria-owns", this.id), L.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
      var et = y.options.moveOnOverlap ? M.getBoundingClientRect() : new DOMRect(),
          Ar = y.options.paddingForScrollbar ? M.scrollHeight > M.clientHeight + 1 : !1,
          Ct;
      setTimeout(function () {
        Ct = L.getScrollInfo();
      });
      var fl = et.bottom - be;

      if (fl > 0) {
        var Pn = et.bottom - et.top,
            cl = xe.top - (xe.bottom - et.top);
        if (cl - Pn > 0) M.style.top = (V = xe.top - Pn - X) + "px", W = !1;else if (Pn > be) {
          M.style.height = be - 5 + "px", M.style.top = (V = xe.bottom - et.top - X) + "px";
          var Fr = L.getCursor();
          w.from.ch != Fr.ch && (xe = L.cursorCoords(Fr), M.style.left = (U = xe.left - j) + "px", et = M.getBoundingClientRect());
        }
      }

      var qn = et.right - Ze;
      if (Ar && (qn += L.display.nativeBarWidth), qn > 0 && (et.right - et.left > Ze && (M.style.width = Ze - 5 + "px", qn -= et.right - et.left - Ze), M.style.left = (U = xe.left - qn - j) + "px"), Ar) for (var we = M.firstChild; we; we = we.nextSibling) {
        we.style.paddingRight = L.display.nativeBarWidth + "px";
      }

      if (L.addKeyMap(this.keyMap = _(y, {
        moveFocus: function moveFocus(Lt, bt) {
          S.changeActive(S.selectedHint + Lt, bt);
        },
        setFocus: function setFocus(Lt) {
          S.changeActive(Lt);
        },
        menuSize: function menuSize() {
          return S.screenAmount();
        },
        length: ee.length,
        close: function close() {
          y.close();
        },
        pick: function pick() {
          S.pick();
        },
        data: w
      })), y.options.closeOnUnfocus) {
        var Dr;
        L.on("blur", this.onBlur = function () {
          Dr = setTimeout(function () {
            y.close();
          }, 100);
        }), L.on("focus", this.onFocus = function () {
          clearTimeout(Dr);
        });
      }

      L.on("scroll", this.onScroll = function () {
        var Lt = L.getScrollInfo(),
            bt = L.getWrapperElement().getBoundingClientRect();
        Ct || (Ct = L.getScrollInfo());
        var Uo = V + Ct.top - Lt.top,
            Or = Uo - (I.pageYOffset || (O.documentElement || O.body).scrollTop);
        if (W || (Or += M.offsetHeight), Or <= bt.top || Or >= bt.bottom) return y.close();
        M.style.top = Uo + "px", M.style.left = U + Ct.left - Lt.left + "px";
      }), i.on(M, "dblclick", function (Lt) {
        var bt = A(M, Lt.target || Lt.srcElement);
        bt && bt.hintId != null && (S.changeActive(bt.hintId), S.pick());
      }), i.on(M, "click", function (Lt) {
        var bt = A(M, Lt.target || Lt.srcElement);
        bt && bt.hintId != null && (S.changeActive(bt.hintId), y.options.completeOnSingleClick && S.pick());
      }), i.on(M, "mousedown", function () {
        setTimeout(function () {
          L.focus();
        }, 20);
      });
      var $o = this.getSelectedHintRange();
      return ($o.from !== 0 || $o.to !== 0) && this.scrollToActive(), i.signal(w, "select", ee[this.selectedHint], M.childNodes[this.selectedHint]), !0;
    }

    E.prototype = {
      close: function close() {
        if (this.completion.widget == this) {
          this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
          var y = this.completion.cm.getInputField();
          y.removeAttribute("aria-activedescendant"), y.removeAttribute("aria-owns");
          var w = this.completion.cm;
          this.completion.options.closeOnUnfocus && (w.off("blur", this.onBlur), w.off("focus", this.onFocus)), w.off("scroll", this.onScroll);
        }
      },
      disable: function disable() {
        this.completion.cm.removeKeyMap(this.keyMap);
        var y = this;
        this.keyMap = {
          Enter: function Enter() {
            y.picked = !0;
          }
        }, this.completion.cm.addKeyMap(this.keyMap);
      },
      pick: function pick() {
        this.completion.pick(this.data, this.selectedHint);
      },
      changeActive: function changeActive(y, w) {
        if (y >= this.data.list.length ? y = w ? this.data.list.length - 1 : 0 : y < 0 && (y = w ? 0 : this.data.list.length - 1), this.selectedHint != y) {
          var S = this.hints.childNodes[this.selectedHint];
          S && (S.className = S.className.replace(" " + s, ""), S.removeAttribute("aria-selected")), S = this.hints.childNodes[this.selectedHint = y], S.className += " " + s, S.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", S.id), this.scrollToActive(), i.signal(this.data, "select", this.data.list[this.selectedHint], S);
        }
      },
      scrollToActive: function scrollToActive() {
        var y = this.getSelectedHintRange(),
            w = this.hints.childNodes[y.from],
            S = this.hints.childNodes[y.to],
            L = this.hints.firstChild;
        w.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = w.offsetTop - L.offsetTop : S.offsetTop + S.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = S.offsetTop + S.offsetHeight - this.hints.clientHeight + L.offsetTop);
      },
      screenAmount: function screenAmount() {
        return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
      },
      getSelectedHintRange: function getSelectedHintRange() {
        var y = this.completion.options.scrollMargin || 0;
        return {
          from: Math.max(0, this.selectedHint - y),
          to: Math.min(this.data.list.length - 1, this.selectedHint + y)
        };
      }
    };

    function b(y, w) {
      if (!y.somethingSelected()) return w;

      for (var S = [], L = 0; L < w.length; L++) {
        w[L].supportsSelection && S.push(w[L]);
      }

      return S;
    }

    function F(y, w, S, L) {
      if (y.async) y(w, L, S);else {
        var O = y(w, S);
        O && O.then ? O.then(L) : L(O);
      }
    }

    function D(y, w) {
      var S = y.getHelpers(w, "hint"),
          L;

      if (S.length) {
        var O = function O(I, M, H) {
          var ee = b(I, S);

          function q(ue) {
            if (ue == ee.length) return M(null);
            F(ee[ue], I, H, function (he) {
              he && he.list.length > 0 ? M(he) : q(ue + 1);
            });
          }

          q(0);
        };

        return O.async = !0, O.supportsSelection = !0, O;
      } else return (L = y.getHelper(y.getCursor(), "hintWords")) ? function (I) {
        return i.hint.fromList(I, {
          words: L
        });
      } : i.hint.anyword ? function (I, M) {
        return i.hint.anyword(I, M);
      } : function () {};
    }

    i.registerHelper("hint", "auto", {
      resolve: D
    }), i.registerHelper("hint", "fromList", function (y, w) {
      var S = y.getCursor(),
          L = y.getTokenAt(S),
          O,
          I = i.Pos(S.line, L.start),
          M = S;
      L.start < S.ch && /\w/.test(L.string.charAt(S.ch - L.start - 1)) ? O = L.string.substr(0, S.ch - L.start) : (O = "", I = S);

      for (var H = [], ee = 0; ee < w.words.length; ee++) {
        var q = w.words[ee];
        q.slice(0, O.length) == O && H.push(q);
      }

      if (H.length) return {
        list: H,
        from: I,
        to: M
      };
    }), i.commands.autocomplete = i.showHint;
    var R = {
      hint: i.hint.auto,
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
    i.defineOption("hintOptions", null);
  });
})();

(function (e, n) {
  (function (i) {
    i(ai.exports);
  })(function (i) {
    function a(x) {
      return new RegExp("^((" + x.join(")|(") + "))\\b");
    }

    var s = a(["and", "or", "not", "is"]),
        c = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"],
        p = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
    i.registerHelper("hintWords", "python", c.concat(p));

    function m(x) {
      return x.scopes[x.scopes.length - 1];
    }

    i.defineMode("python", function (x, _) {
      for (var A = "error", E = _.delimiters || _.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, b = [_.singleOperators, _.doubleOperators, _.doubleDelimiters, _.tripleDelimiters, _.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], F = 0; F < b.length; F++) {
        b[F] || b.splice(F--, 1);
      }

      var D = _.hangingIndent || x.indentUnit,
          R = c,
          y = p;
      _.extra_keywords != null && (R = R.concat(_.extra_keywords)), _.extra_builtins != null && (y = y.concat(_.extra_builtins));
      var w = !(_.version && Number(_.version) < 3);

      if (w) {
        var S = _.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        R = R.concat(["nonlocal", "False", "True", "None", "async", "await"]), y = y.concat(["ascii", "bytes", "exec", "print"]);
        var L = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))", "i");
      } else {
        var S = _.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        R = R.concat(["exec", "print"]), y = y.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]);
        var L = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
      }

      var O = a(R),
          I = a(y);

      function M(U, V) {
        var W = U.sol() && V.lastToken != "\\";

        if (W && (V.indent = U.indentation()), W && m(V).type == "py") {
          var j = m(V).offset;

          if (U.eatSpace()) {
            var X = U.indentation();
            return X > j ? ue(V) : X < j && me(U, V) && U.peek() != "#" && (V.errorToken = !0), null;
          } else {
            var ie = H(U, V);
            return j > 0 && me(U, V) && (ie += " " + A), ie;
          }
        }

        return H(U, V);
      }

      function H(U, V, W) {
        if (U.eatSpace()) return null;
        if (!W && U.match(/^#.*/)) return "comment";

        if (U.match(/^[0-9\.]/, !1)) {
          var j = !1;
          if (U.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (j = !0), U.match(/^[\d_]+\.\d*/) && (j = !0), U.match(/^\.\d+/) && (j = !0), j) return U.eat(/J/i), "number";
          var X = !1;
          if (U.match(/^0x[0-9a-f_]+/i) && (X = !0), U.match(/^0b[01_]+/i) && (X = !0), U.match(/^0o[0-7_]+/i) && (X = !0), U.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (U.eat(/J/i), X = !0), U.match(/^0(?![\dx])/i) && (X = !0), X) return U.eat(/L/i), "number";
        }

        if (U.match(L)) {
          var ie = U.current().toLowerCase().indexOf("f") !== -1;
          return ie ? (V.tokenize = ee(U.current(), V.tokenize), V.tokenize(U, V)) : (V.tokenize = q(U.current(), V.tokenize), V.tokenize(U, V));
        }

        for (var se = 0; se < b.length; se++) {
          if (U.match(b[se])) return "operator";
        }

        return U.match(E) ? "punctuation" : V.lastToken == "." && U.match(S) ? "property" : U.match(O) || U.match(s) ? "keyword" : U.match(I) ? "builtin" : U.match(/^(self|cls)\b/) ? "variable-2" : U.match(S) ? V.lastToken == "def" || V.lastToken == "class" ? "def" : "variable" : (U.next(), W ? null : A);
      }

      function ee(U, V) {
        for (; "rubf".indexOf(U.charAt(0).toLowerCase()) >= 0;) {
          U = U.substr(1);
        }

        var W = U.length == 1,
            j = "string";

        function X(se) {
          return function (Se, ke) {
            var Ze = H(Se, ke, !0);
            return Ze == "punctuation" && (Se.current() == "{" ? ke.tokenize = X(se + 1) : Se.current() == "}" && (se > 1 ? ke.tokenize = X(se - 1) : ke.tokenize = ie)), Ze;
          };
        }

        function ie(se, Se) {
          for (; !se.eol();) {
            if (se.eatWhile(/[^'"\{\}\\]/), se.eat("\\")) {
              if (se.next(), W && se.eol()) return j;
            } else {
              if (se.match(U)) return Se.tokenize = V, j;
              if (se.match("{{")) return j;
              if (se.match("{", !1)) return Se.tokenize = X(0), se.current() ? j : Se.tokenize(se, Se);
              if (se.match("}}")) return j;
              if (se.match("}")) return A;
              se.eat(/['"]/);
            }
          }

          if (W) {
            if (_.singleLineStringErrors) return A;
            Se.tokenize = V;
          }

          return j;
        }

        return ie.isString = !0, ie;
      }

      function q(U, V) {
        for (; "rubf".indexOf(U.charAt(0).toLowerCase()) >= 0;) {
          U = U.substr(1);
        }

        var W = U.length == 1,
            j = "string";

        function X(ie, se) {
          for (; !ie.eol();) {
            if (ie.eatWhile(/[^'"\\]/), ie.eat("\\")) {
              if (ie.next(), W && ie.eol()) return j;
            } else {
              if (ie.match(U)) return se.tokenize = V, j;
              ie.eat(/['"]/);
            }
          }

          if (W) {
            if (_.singleLineStringErrors) return A;
            se.tokenize = V;
          }

          return j;
        }

        return X.isString = !0, X;
      }

      function ue(U) {
        for (; m(U).type != "py";) {
          U.scopes.pop();
        }

        U.scopes.push({
          offset: m(U).offset + x.indentUnit,
          type: "py",
          align: null
        });
      }

      function he(U, V, W) {
        var j = U.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : U.column() + 1;
        V.scopes.push({
          offset: V.indent + D,
          type: W,
          align: j
        });
      }

      function me(U, V) {
        for (var W = U.indentation(); V.scopes.length > 1 && m(V).offset > W;) {
          if (m(V).type != "py") return !0;
          V.scopes.pop();
        }

        return m(V).offset != W;
      }

      function Y(U, V) {
        U.sol() && (V.beginningOfLine = !0, V.dedent = !1);
        var W = V.tokenize(U, V),
            j = U.current();
        if (V.beginningOfLine && j == "@") return U.match(S, !1) ? "meta" : w ? "operator" : A;

        if (/\S/.test(j) && (V.beginningOfLine = !1), (W == "variable" || W == "builtin") && V.lastToken == "meta" && (W = "meta"), (j == "pass" || j == "return") && (V.dedent = !0), j == "lambda" && (V.lambda = !0), j == ":" && !V.lambda && m(V).type == "py" && U.match(/^\s*(?:#|$)/, !1) && ue(V), j.length == 1 && !/string|comment/.test(W)) {
          var X = "[({".indexOf(j);
          if (X != -1 && he(U, V, "])}".slice(X, X + 1)), X = "])}".indexOf(j), X != -1) if (m(V).type == j) V.indent = V.scopes.pop().offset - D;else return A;
        }

        return V.dedent && U.eol() && m(V).type == "py" && V.scopes.length > 1 && V.scopes.pop(), W;
      }

      var xe = {
        startState: function startState(U) {
          return {
            tokenize: M,
            scopes: [{
              offset: U || 0,
              type: "py",
              align: null
            }],
            indent: U || 0,
            lastToken: null,
            lambda: !1,
            dedent: 0
          };
        },
        token: function token(U, V) {
          var W = V.errorToken;
          W && (V.errorToken = !1);
          var j = Y(U, V);
          return j && j != "comment" && (V.lastToken = j == "keyword" || j == "punctuation" ? U.current() : j), j == "punctuation" && (j = null), U.eol() && V.lambda && (V.lambda = !1), W ? j + " " + A : j;
        },
        indent: function indent(U, V) {
          if (U.tokenize != M) return U.tokenize.isString ? i.Pass : 0;
          var W = m(U),
              j = W.type == V.charAt(0) || W.type == "py" && !U.dedent && /^(else:|elif |except |finally:)/.test(V);
          return W.align != null ? W.align - (j ? 1 : 0) : W.offset - (j ? D : 0);
        },
        electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        closeBrackets: {
          triples: "'\""
        },
        lineComment: "#",
        fold: "indent"
      };
      return xe;
    }), i.defineMIME("text/x-python", "python");

    var C = function C(x) {
      return x.split(" ");
    };

    i.defineMIME("text/x-cython", {
      name: "python",
      extra_keywords: C("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
    });
  });
})();

(function (e, n) {
  (function (i) {
    i(ai.exports);
  })(function (i) {
    var a = {
      pairs: "()[]{}''\"\"",
      closeBefore: ")]}'\":;>",
      triples: "",
      explode: "[]{}"
    },
        s = i.Pos;
    i.defineOption("autoCloseBrackets", !1, function (y, w, S) {
      S && S != i.Init && (y.removeKeyMap(p), y.state.closeBrackets = null), w && (m(c(w, "pairs")), y.state.closeBrackets = w, y.addKeyMap(p));
    });

    function c(y, w) {
      return w == "pairs" && typeof y == "string" ? y : _typeof(y) == "object" && y[w] != null ? y[w] : a[w];
    }

    var p = {
      Backspace: _,
      Enter: A
    };

    function m(y) {
      for (var w = 0; w < y.length; w++) {
        var S = y.charAt(w),
            L = "'" + S + "'";
        p[L] || (p[L] = C(S));
      }
    }

    m(a.pairs + "`");

    function C(y) {
      return function (w) {
        return F(w, y);
      };
    }

    function x(y) {
      var w = y.state.closeBrackets;
      if (!w || w.override) return w;
      var S = y.getModeAt(y.getCursor());
      return S.closeBrackets || w;
    }

    function _(y) {
      var w = x(y);
      if (!w || y.getOption("disableInput")) return i.Pass;

      for (var S = c(w, "pairs"), L = y.listSelections(), O = 0; O < L.length; O++) {
        if (!L[O].empty()) return i.Pass;
        var I = D(y, L[O].head);
        if (!I || S.indexOf(I) % 2 != 0) return i.Pass;
      }

      for (var O = L.length - 1; O >= 0; O--) {
        var M = L[O].head;
        y.replaceRange("", s(M.line, M.ch - 1), s(M.line, M.ch + 1), "+delete");
      }
    }

    function A(y) {
      var w = x(y),
          S = w && c(w, "explode");
      if (!S || y.getOption("disableInput")) return i.Pass;

      for (var L = y.listSelections(), O = 0; O < L.length; O++) {
        if (!L[O].empty()) return i.Pass;
        var I = D(y, L[O].head);
        if (!I || S.indexOf(I) % 2 != 0) return i.Pass;
      }

      y.operation(function () {
        var M = y.lineSeparator() || "\n";
        y.replaceSelection(M + M, null), E(y, -1), L = y.listSelections();

        for (var H = 0; H < L.length; H++) {
          var ee = L[H].head.line;
          y.indentLine(ee, null, !0), y.indentLine(ee + 1, null, !0);
        }
      });
    }

    function E(y, w) {
      for (var S = [], L = y.listSelections(), O = 0, I = 0; I < L.length; I++) {
        var M = L[I];
        M.head == y.getCursor() && (O = I);
        var H = M.head.ch || w > 0 ? {
          line: M.head.line,
          ch: M.head.ch + w
        } : {
          line: M.head.line - 1
        };
        S.push({
          anchor: H,
          head: H
        });
      }

      y.setSelections(S, O);
    }

    function b(y) {
      var w = i.cmpPos(y.anchor, y.head) > 0;
      return {
        anchor: new s(y.anchor.line, y.anchor.ch + (w ? -1 : 1)),
        head: new s(y.head.line, y.head.ch + (w ? 1 : -1))
      };
    }

    function F(y, w) {
      var S = x(y);
      if (!S || y.getOption("disableInput")) return i.Pass;
      var L = c(S, "pairs"),
          O = L.indexOf(w);
      if (O == -1) return i.Pass;

      for (var I = c(S, "closeBefore"), M = c(S, "triples"), H = L.charAt(O + 1) == w, ee = y.listSelections(), q = O % 2 == 0, ue, he = 0; he < ee.length; he++) {
        var me = ee[he],
            Y = me.head,
            xe,
            U = y.getRange(Y, s(Y.line, Y.ch + 1));
        if (q && !me.empty()) xe = "surround";else if ((H || !q) && U == w) H && R(y, Y) ? xe = "both" : M.indexOf(w) >= 0 && y.getRange(Y, s(Y.line, Y.ch + 3)) == w + w + w ? xe = "skipThree" : xe = "skip";else if (H && Y.ch > 1 && M.indexOf(w) >= 0 && y.getRange(s(Y.line, Y.ch - 2), Y) == w + w) {
          if (Y.ch > 2 && /\bstring/.test(y.getTokenTypeAt(s(Y.line, Y.ch - 2)))) return i.Pass;
          xe = "addFour";
        } else if (H) {
          var V = Y.ch == 0 ? " " : y.getRange(s(Y.line, Y.ch - 1), Y);
          if (!i.isWordChar(U) && V != w && !i.isWordChar(V)) xe = "both";else return i.Pass;
        } else if (q && (U.length === 0 || /\s/.test(U) || I.indexOf(U) > -1)) xe = "both";else return i.Pass;
        if (!ue) ue = xe;else if (ue != xe) return i.Pass;
      }

      var W = O % 2 ? L.charAt(O - 1) : w,
          j = O % 2 ? w : L.charAt(O + 1);
      y.operation(function () {
        if (ue == "skip") E(y, 1);else if (ue == "skipThree") E(y, 3);else if (ue == "surround") {
          for (var X = y.getSelections(), ie = 0; ie < X.length; ie++) {
            X[ie] = W + X[ie] + j;
          }

          y.replaceSelections(X, "around"), X = y.listSelections().slice();

          for (var ie = 0; ie < X.length; ie++) {
            X[ie] = b(X[ie]);
          }

          y.setSelections(X);
        } else ue == "both" ? (y.replaceSelection(W + j, null), y.triggerElectric(W + j), E(y, -1)) : ue == "addFour" && (y.replaceSelection(W + W + W + W, "before"), E(y, 1));
      });
    }

    function D(y, w) {
      var S = y.getRange(s(w.line, w.ch - 1), s(w.line, w.ch + 1));
      return S.length == 2 ? S : null;
    }

    function R(y, w) {
      var S = y.getTokenAt(s(w.line, w.ch + 1));
      return /\bstring/.test(S.type) && S.start == w.ch && (w.ch == 0 || !/\bstring/.test(y.getTokenTypeAt(w)));
    }
  });
})();

function r4(e) {
  var n = document.getElementById("editor");
  if (!n) throw Zt.undefinedErr;
  var i;

  (function (_) {
    _.start = "start", _.move_list = "move_list", _.move_list_arg2 = "move_list_arg2", _.mvls_switch = "mvls_switch", _.mvls_command = "mvls_command", _.mvls_order = "mvls_order", _.arg = "arg", _.comment = "comment";
  })(i || (i = {}));

  var a;
  (function (_) {
    _.keyword = "keyword", _.comment = "comment", _.none = "", _.operator = "operator", _.age = "age", _.unit = "unit", _.string_3 = "string-3", _.arg = "arg";
  })(a || (a = {})), Aa.defineSimpleMode(No.default, {
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
  var c = new qa(location.href).getParam("TL");
  var p = "";
  typeof c !== null && (p = c);
  var m = Aa(n, {
    mode: No.default,
    lineNumbers: !0,
    indentUnit: 4,
    theme: "panda-syntax",
    lineWrapping: !0,
    tabSize: 2,
    value: p,
    extraKeys: {
      "Ctrl-Space": "autocomplete"
    },
    hintOptions: {
      hint: u4
    }
  });
  m.on("keydown", function (_, A) {
    A.key === "/" && A.ctrlKey && _.toggleComment({
      lineComment: "#"
    }), [["[", "]"], ["{", "}"], ["<", ">"]].forEach(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 2),
          b = _ref26[0],
          F = _ref26[1];

      if (!(A.ctrlKey || A.altKey || A.metaKey || A.shiftKey)) {
        if (A.key === b && (l4(_, F), Mv(_, -1)), A.key === F && Bf(_) === F) {
          if (Zt.isAndroid()) return;
          Mv(_, 1), A.preventDefault();
        }

        A.key === "Backspace" && Bf(_, -1) === b && Bf(_, 1) === F && (o4(_), A.preventDefault());
      }
    }), !!Zt.isPC() && A.key.match(/^\w$/) && _.showHint();
  });

  var C = {
    switch_editor: function switch_editor(_) {
      m = i4(m, _);
    },
    get_value: function get_value() {
      return m.getValue();
    }
  },
      x = function x() {
    e(m.getValue(), C);
  };

  return m.on("change", function () {
    x();
  }), m.scrollTo(3, 3), x(), C;
}

function i4(e, n) {
  return e.getOption("mode") !== n && e.setOption("mode", n), e;
}

function Bf(e) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var _e$getCursor = e.getCursor(),
      i = _e$getCursor.line,
      a = _e$getCursor.ch;

  return e.getLine(i).substring(a, a + n);
}

function Mv(e, n) {
  var _e$getCursor2 = e.getCursor(),
      i = _e$getCursor2.line,
      a = _e$getCursor2.ch;

  e.setCursor({
    line: i,
    ch: a + n
  });
}

function l4(e, n) {
  var i = e.getCursor();
  e.replaceRange(n, i);
}

function o4(e) {
  var _e$getCursor3 = e.getCursor(),
      n = _e$getCursor3.line,
      i = _e$getCursor3.ch;

  e.replaceRange("", {
    line: n,
    ch: i - 1
  }, {
    line: n,
    ch: i + 1
  });
}

function u4(e) {
  var n = Object.keys(bc);
  return new Promise(function (i) {
    setTimeout(function () {
      var a = e.getCursor(),
          s = e.getLine(a.line);
      var c = a.ch,
          p = a.ch;

      for (; c && /[^\s,{}[\]<>]/.test(s.charAt(c - 1));) {
        --c;
      }

      for (; p < s.length && /[^\s,{}[\]<>]/.test(s.charAt(p));) {
        ++p;
      }

      var m = s.slice(c, p).toLowerCase(),
          C = [];
      n.forEach(function (A) {
        A.startsWith(m) && C.push(A);
      });

      var x = e.getValue().replaceAll(/#([^\n])+/g, "").split("\n").map(function (A) {
        return A.trim().split(/\s/);
      }),
          _ = x.filter(function (A) {
        return A.length < 1 ? !1 : A[0].startsWith("set");
      }).map(function (A) {
        return A[1];
      });

      return x.forEach(function (A) {
        A.length <= 2 || (A[0].startsWith("mv_ls") || A[0].startsWith("move_list")) && _toConsumableArray(A[2].replaceAll(/\t/g, "").matchAll(/[[,]\[([^,]+)/g)).forEach(function (b) {
          _.push(b[1]);
        });
      }), _.filter(function (A) {
        return A.startsWith(m) && A !== m;
      }).forEach(function (A) {
        return C.push(A);
      }), C.length > 0 ? i({
        list: C,
        from: Aa.Pos(a.line, c),
        to: Aa.Pos(a.line, p)
      }) : i(void 0);
    }, 100);
  });
}

var a4 = /*#__PURE__*/function () {
  function a4(n) {
    _classCallCheck(this, a4);

    this._editor_init = n, this._editor_init = n;
  }

  _createClass(a4, [{
    key: "switch_editor",
    value: function switch_editor(n) {
      this._editor_init.switch_editor(n);
    }
  }]);

  return a4;
}();

function s4(e) {
  var n = "";
  $2(function () {
    return n;
  });
  var i = r4(function (a, s) {
    n = a, e(a, s);
  });
  return new a4(i);
}

window.debug = {};

function f4(e, n, i) {
  s4(a);

  function a(_x4, _x5) {
    return _a2.apply(this, arguments);
  }

  function _a2() {
    _a2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(s, c) {
      var p, m, C, x, _, A, E, b, F, _t2, w, S, _n2, D, R, y;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              s.at(-1) !== "\n" && (s += "\n");
              p = !1;
              _context.prev = 2;
              _context.next = 5;
              return V2(s);

            case 5:
              w = _context.sent;
              p = w.type === No.python, c.switch_editor(w.type), m = w.AST, (_t2 = t4(m, s), C = _t2.chara_list, x = _t2.count_ttk_ls, _ = _t2.TL, A = _t2.ttk, E = _t2.info, b = _t2.error, F = _t2.convertedTLdata, _t2);
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);

              if (p) {
                S = String(_context.t0).split("\n");
                i(S[S.length - 2]);
              } else i(String(_context.t0));

              n("");
              return _context.abrupt("return");

            case 14:
              if (!(i(""), n(""), b)) {
                _context.next = 17;
                break;
              }

              i(b);
              return _context.abrupt("return");

            case 17:
              E && n(E);
              _n2 = n4(C, _), D = _n2.outputTL, R = _n2.chara_array, y = {
                json: D,
                charalist: R,
                convertedTLdata: F,
                comment: _.comment,
                now_place: _.place_of_currentTimeline + 1,
                TL_input: s,
                firstchara: _.ID_of_firstChara(),
                count_ttk_ls: x,
                ttk: A,
                info: E
              };
              e && e(y);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));
    return _a2.apply(this, arguments);
  }
}

function c4(e) {
  var n = new qa(void 0, !1),
      _ct$exports$useState = ct.exports.useState(!1),
      _ct$exports$useState2 = _slicedToArray(_ct$exports$useState, 2),
      i = _ct$exports$useState2[0],
      a = _ct$exports$useState2[1];

  return ce(ht, {
    children: [B("div", {
      children: B("button", {
        onClick: function onClick() {
          n.setParam("TL", e.text), Hd(n.href), a(!0), setTimeout(function () {
            a(!1);
          }, 1e3);
        },
        children: "\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u30C7\u30FC\u30BF\u4ED8\u304D\u306EURL\u3092\u30B3\u30D4\u30FC"
      })
    }), i ? B("div", {
      children: "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"
    }) : B(ht, {})]
  });
}

function d4(e) {
  return B("div", {
    children: B("button", {
      onClick: function onClick() {
        return h4(e.json, e.charalist);
      },
      children: "CSV\u5F62\u5F0F\u3067\u8868\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
    })
  });
}

function h4(e, n) {
  var i = "";

  for (var a = 0; a < e[0].length; a++) {
    i += "," + (a + 1);
  }

  i += "\n";

  for (var _a3 = 0; _a3 < e.length; _a3++) {
    i += n[_a3];

    for (var s = 0; s < e[0].length; s++) {
      i += ",", i += e[_a3][s] || "";
    }

    i += "\n";
  }

  p4(i);
}

function p4(e) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "timeline.csv";
  var i = new Uint8Array([239, 187, 191]),
      a = new Blob([i, e], {
    type: "text/csv"
  }),
      s = URL.createObjectURL(a),
      c = document.createElement("a");
  c.href = s, c.download = n, c.style.display = "none", document.body.appendChild(c), c.click(), document.body.removeChild(c), URL.revokeObjectURL(s);
}

function v4(e) {
  var n = g4(e.text),
      _ct$exports$useState3 = ct.exports.useState(!1),
      _ct$exports$useState4 = _slicedToArray(_ct$exports$useState3, 2),
      i = _ct$exports$useState4[0],
      a = _ct$exports$useState4[1],
      s = function s() {
    Hd(n), a(!0), setTimeout(function () {
      a(!1);
    }, 1e3);
  };

  var c = jv.createRef();
  var _ref27 = [ea(), ea(), ea()],
      p = _ref27[0],
      m = _ref27[1],
      C = _ref27[2];
  return B(ht, {
    children: ce("div", {
      className: "popupModal1",
      children: [B("input", {
        type: "radio",
        name: "modalPop",
        id: C,
        ref: c
      }), B("label", {
        htmlFor: C,
        children: B("button", {
          onClick: function onClick() {
            c != null && c.current && (c.current.checked = !0);
          },
          children: "move_list\u306E\u5C55\u958B"
        })
      }), B("input", {
        type: "radio",
        name: "modalPop",
        id: p
      }), B("label", {
        htmlFor: p,
        children: "CLOSE"
      }), B("input", {
        type: "radio",
        name: "modalPop",
        id: m
      }), B("label", {
        htmlFor: m
      }), B("div", {
        className: "modalPopup2",
        children: ce("div", {
          className: "modalPopup3",
          children: [B("h2", {
            className: "modalTitle",
            children: "\u5C55\u958B\u6E08\u307F\u306ETL\u30C7\u30FC\u30BF"
          }), B("button", {
            onClick: s,
            children: "\u30B3\u30D4\u30FC\u3059\u308B"
          }), i ? B("div", {
            children: "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"
          }) : B(ht, {}), B("div", {
            className: "modalMain",
            children: gm(n)
          })]
        })
      })]
    })
  });
}

function g4(e) {
  return e.set.map(function (n) {
    return n ? n.join(" ") : "";
  }).join("\n") + "\n\nstart\n" + e.main.map(function (n) {
    return n ? "  " + n.join(" ") : "";
  }).join("\n") + "\nend";
}

function y4() {
  return B(ht, {
    children: ce("div", {
      children: [B("br", {}), B("button", {
        onClick: function onClick() {
          return window.open("https://twitter.com/Y52en/status/1402239605978517505?s=20", "_blank");
        },
        children: "\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u306E\u8AAC\u660E(twitter\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059)"
      }), B("br", {}), "\u4E0A\u8A18\u306E\u30C4\u30A4\u30FC\u30C8\u304B\u3089\u306E\u5909\u66F4\u70B9", B("br", {}), "1.color\u8FFD\u52A0 ", m4("c:copper,d:dark"), " ", B("br", {}), "2.\\\u3092\u6587\u672B\u306B\u7F6E\u304F\u3053\u3068\u3067\u6539\u884C\u3067\u304D\u308B(\u6539\u884C\u3092\u7121\u3044\u3082\u306E\u3068\u3057\u3066\u307F\u306A\u3059) ", B("br", {}), B("br", {}), "2021/06/23", B("br", {}), "\u30C6\u30AD\u30B9\u30C8\u306E\u30D1\u30FC\u30B9\u51E6\u7406\u3092\u5909\u66F4 ", B("br", {}), "\u3053\u308C\u306B\u3088\u308A\u3001\u8272\u3005\u5909\u308F\u308A\u307E\u3057\u305F\u304C\u91CD\u8981\u306A\u3082\u306E\u3060\u3051\u8A18\u8F09 ", B("br", {}), "1.\u3042\u3044\u307E\u3044\u306A\u8A18\u8F09\u304C\u8A31\u3055\u308C\u306A\u304F\u306A\u3063\u305F", B("br", {}), "2. move_list\u5185\u3067\u30B3\u30DE\u30F3\u30C9\u3068\u30B3\u30F3\u30DE\u306E\u9593\u306B\u6539\u884C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u3063\u305F", B("br", {}), "\u3082\u3057\u6B63\u3057\u3044\u66F8\u304D\u65B9\u3067\u3042\u308B\u306E\u306B\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC\u304C\u51FA\u308B\u3068\u304D\u306F@y52en\u306B@\u30C4\u30A4\u30FC\u30C8\u306A\u3069\u3067\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044", B("br", {}), B("br", {}), "2021/06/26", B("br", {}), "(\u307E\u305F)\u30C6\u30AD\u30B9\u30C8\u306E\u30D1\u30FC\u30B9\u51E6\u7406\u3092\u5909\u66F4 ", B("br", {}), "\u3082\u3057\u6B63\u3057\u3044\u66F8\u304D\u65B9\u3067\u3042\u308B\u306E\u306B\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC\u304C\u51FA\u308B\u3068\u304D\u306F@y52en\u306B@\u30C4\u30A4\u30FC\u30C8\u306A\u3069\u3067\u304A\u77E5\u3089\u305B\u304F\u3060\u3055\u3044", B("br", {}), B("br", {}), "2021/07/10", B("br", {}), "CodeMirror\u63A1\u7528 ", B("br", {}), "\u8272\u3067\u898B\u306B\u304F\u3044\u304B\u3082\u3057\u308C\u306A\u3044\u306E\u3067\u610F\u898B\u52DF\u96C6\u4E2D", B("br", {}), B("a", {
        href: "https://static-site-generator.com/entry3.html",
        children: "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u4E00\u89A7"
      }), B("br", {}), "\u4E0A\u8A18\u4EE5\u5916\u306B [ Ctrl + / : \u30B3\u30E1\u30F3\u30C8 ] \u304C\u4F7F\u3048\u307E\u3059", B("br", {}), "\u3042\u3068\u30D6\u30E9\u30A6\u30B6\u306E\u6A5F\u80FD\u3067\u3059\u304CF11\u3067\u5168\u753B\u9762\u3067\u3059", B("br", {}), B("br", {}), "2021/12/19", B("br", {}), "ttk,ttk_until\u3092\u8FFD\u52A0 ", B("br", {}), "\u3056\u3063\u304F\u308A\u3068\u3057\u305F\u3068\u3063\u3066\u304A\u304D\u306E\u5024\u3092\u51FA\u305B\u307E\u3059", B("br", {}), B("br", {}), ce("strong", {
        children: ["\u4F7F\u3044\u65B9", B("br", {})]
      }), "\u30B3\u30DE\u30F3\u30C9\u306F\u534A\u89D2\u3067\u3001\u307E\u305F\u30B9\u30DA\u30FC\u30B9\u533A\u5207\u308A\u3067\u8A2D\u5B9A\u3059\u308B\u3053\u3068", B("br", {}), "[]\u5185\u304C\u5F15\u6570(\u304B\u3063\u3053\u81EA\u4F53\u306F\u66F8\u304B\u306A\u3044) ", B("br", {}), "()\u5185\u306E\u3082\u306E\u306F\u7701\u7565\u3067\u304D\u308B(\u30D0\u30D5\u306A\u3069) ", B("br", {}), B("br", {}), w4(), B("strong", {
        children: "\u4F8B"
      }), B("br", {}), B("textarea", {
        readOnly: !0,
        cols: 60,
        rows: 30,
        value: "set enemy 224\n\nset aikawa 126 \nset kurumi 123\nset yuzuko 131\n\n#set hiro 130\n#set hideri 135\n\nttk aikawa kurumi yuzuko hiro hideri heal\nttk_until 34\n\nmv_ls enemy [{skillcard,dmg3000,224,1100,1},400*3,g400,r500,400,p200,{nomove}]\n\nmv_ls aikawa [40,70,[hiro,130],70,70,40,40,[kurumi,123],35,40,b125]\n\nmv_ls kurumi [[hideri,135],40,70,70,o40,[aikawa,123],70,[hideri,135],70,70,b125]\n\nmv_ls yuzuko [{sc,heal,131,100,5},g40,s40,{b+,yuzuko,22.4,3},100,70,70,100,s40,{b+,yuzuko,22.4,3},g40,b125]"
      })]
    })
  });
}

function m4(e) {
  return "{".concat(e, "}");
}

function w4() {
  return B(ht, {
    children: C4.map(function (n, i) {
      var a;
      return typeof n.title == "string" ? a = [n.title] : a = n.title, ce("span", {
        children: [a.map(function (s, c) {
          return ce("span", {
            children: [B("strong", {
              children: s
            }), B("br", {})]
          }, c + 1e4);
        }), n.text.map(function (s, c) {
          return ce("span", {
            children: [s, B("br", {})]
          }, c + 2e4);
        }), n.html ? ce(ht, {
          children: [" ", n.html, " "]
        }) : B(ht, {}), B("br", {})]
      }, i);
    })
  });
}

var C4 = [{
  title: "#[comment]",
  text: ["#\u304B\u3089\u59CB\u307E\u308B\u3082\u306E\u306F\u884C\u672B\u307E\u3067\u7121\u8996\u3055\u308C\u307E\u3059(\u30B3\u30E1\u30F3\u30C8\u306B\u4F7F\u7528)", "\u547D\u4EE4\u306E\u6700\u5F8C\u306B\u66F8\u3044\u3066\u3082\u3088\u3044", "\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306F\u300CCtrl + /\u300D", "\u4F8B:", "move 125 enemy", "#\u3053\u3053\u304B\u3089\u30C7\u30D0\u30D5\u3092\u5165\u308C\u308B", "\u4F8B:", "move 125 momo #\u3068\u3063\u3066\u304A\u304D"]
}, {
  title: "set [name] [SPD] ([buff(%)])",
  text: ["\u958B\u59CB(start)\u524D\u306B\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u51FA\u3059\u30AD\u30E3\u30E9\u3092\u8A2D\u5B9A", "SPD\u306E\u512A\u5148\u5EA6\u306E\u9AD8\u3044\u30AD\u30E3\u30E9\u304B\u3089\u5148\u306B\u66F8\u304F", "name\u306B\u30B9\u30DA\u30FC\u30B9\u3092\u542B\u3081\u308B\u306E\u306F\u7981\u6B62"]
}, {
  title: "start",
  text: ["\u30E1\u30A4\u30F3\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048", "set\u3092\u66F8\u304D\u7D42\u308F\u3063\u305F\u3089\u8A18\u5165"]
}, {
  title: "end",
  text: ["\u30E1\u30A4\u30F3\u30E2\u30FC\u30C9\u30E2\u30FC\u30C9\u7D42\u4E86", "\u305D\u306E\u5F8C\u308D\u306Bstart\u3001start_sort\u3092\u66F8\u304F\u3053\u3068\u3067\u307E\u305F\u5225\u306E\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048\u3089\u308C\u308B"]
}, {
  title: "move [\u786C\u76F4(%)] [name]",
  text: ["\u884C\u52D5", "\u5148\u982D\u306E\u30AD\u30E3\u30E9\u4EE5\u5916\u3092name\u306B\u8A18\u5165\u3057\u305F\u5834\u5408error\u3092\u5410\u304F", "move\u306E\u4EE3\u308F\u308A\u306Bm\u3067\u3082\u53EF"]
}, {
  title: "action [name] [\u786C\u76F4(%)]",
  text: ["\u884C\u52D5", "move\u3068\u5F15\u6570\u306E\u9806\u756A\u304C\u7570\u306A\u308B\u4EE5\u5916\u540C\u3058", "action\u306E\u4EE3\u308F\u308A\u306Bac\u3067\u3082\u53EF"]
}, {
  title: "move_list [name] [[\u786C\u76F4(%)],[\u4EA4\u4EE3\u5F8C\u306Ename,SPD,(buff)],[\u786C\u76F4(%)],{command,argments1,argments2...}...]",
  text: ["\u884C\u52D5\u30EA\u30B9\u30C8", "move_list nagi [40,{buffset,nagi,24},100,[ren,141,100],100]", "\u306E\u3088\u3046\u306B\u66F8\u304F", "\u30B9\u30DA\u30FC\u30B9\u3092\u7A7A\u3051\u308B\u306E\u306F\u53B3\u7981", "\u5185\u5074\u306B\u3042\u308B[]\u306F\u9014\u4E2D\u3067\u4EA4\u4EE3\u3059\u308B\u3053\u3068\u3092\u793A\u3059", "{}\u3067\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u53EF\u80FD", "<>\u3067\u786C\u76F4\u5024\u3092\u76F4\u63A5\u5165\u529B\u53EF\u80FD", "move_list\u306E\u4EE3\u308F\u308A\u306Bmv_ls\u3067\u3082\u53EF"]
}, {
  title: "----\u3053\u3053\u304B\u3089\u307B\u3068\u3093\u3069\u30C7\u30D0\u30C3\u30B0\u3057\u3066\u3044\u306A\u3044\u306E\u3067\u6B63\u3057\u304F\u52D5\u304B\u306A\u3044\u53EF\u80FD\u6027\u5927----",
  text: []
}, {
  title: ["buffset [name] [buff(%)] ([turn])", "buffadd [name] [buff(%)] ([turn])", "buffminus [name] [buff(%)] ([turn])"],
  text: ["\u30D0\u30D5\u8A2D\u5B9A", "\u305D\u308C\u305E\u308C b,b+,b-\u3068\u7701\u7565\u53EF"]
}, {
  title: "switch [from_name] [to_name] [SPD] ([buff])",
  text: ["from_name\u306B\u4EA4\u4EE3\u524D\u306E\u30AD\u30E3\u30E9\u540D\u3001to_name\u306B\u4EA4\u4EE3\u5F8C\u306E\u30AD\u30E3\u30E9\u540D\u3092\u8A18\u5165", "sw\u3068\u7701\u7565\u53EF"]
}, {
  title: "order [name] [name] [SPD]",
  text: ["\u786C\u76F4\u5730\u76F4\u63A5\u5165\u529B"]
}, {
  title: "skillcard [name] [SPD] [\u786C\u76F4] [\u56DE\u6570]",
  text: ["\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9"]
}, {
  title: "color [\u8272]",
  text: ["r red", "g green", "b blue", "p purple", "s silver", "y yellow", "o orange", "c copper", "d dark"]
}, {
  title: ["ttk[name][name][name] ...", "ttk_until[n\u884C\u76EE]"],
  text: ["\u3068\u3063\u3066\u304A\u304D\u30AB\u30A6\u30F3\u30C8", "ttk\u306F\u5F15\u6570\u306B\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30E3\u30E9\u3001\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9\u306E\u540D\u524D\u3092\u66F8\u304D\u307E\u3059", "ttk_until\u306F\u5F15\u6570\u306B\u4F55\u884C\u76EE\u307E\u3067\u30AB\u30A6\u30F3\u30C8\u3057\u305F\u3044\u304B\u66F8\u304D\u307E\u3059", "", "\u4F7F\u7528\u3057\u3066\u3044\u308B\u30C6\u30FC\u30D6\u30EB(\u4EE5\u4E0B\u306B\u306A\u3044\u3082\u306E\u306F0\u3068\u3057\u3066\u8A08\u7B97)", "\u30B9\u30AD\u30EB"],
  html: ce(ht, {
    children: [ce("table", {
      className: "normal-table",
      children: [B("thead", {
        children: ce("tr", {
          children: [B("th", {
            children: "\u786C\u76F4"
          }), B("th", {
            children: "\u30C1\u30E3\u30FC\u30B8"
          })]
        })
      }), ce("tbody", {
        children: [ce("tr", {
          children: [B("td", {
            children: "0"
          }), B("td", {
            children: "5"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "10"
          }), B("td", {
            children: "0"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "35"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "40"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "45"
          }), B("td", {
            children: "2"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "50"
          }), B("td", {
            children: "5"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "55"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "60"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "65"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "67.5"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "70"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "75"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "80"
          }), B("td", {
            children: "5"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "100"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "110"
          }), B("td", {
            children: "22"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "120"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "125"
          }), B("td", {
            children: "0"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "130"
          }), B("td", {
            children: "10"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "135"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "140"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "145"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "150"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "155"
          }), B("td", {
            children: "8"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "165"
          }), B("td", {
            children: "10"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "170"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "190"
          }), B("td", {
            children: "17"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "200"
          }), B("td", {
            children: "17"
          })]
        })]
      })]
    }), B("br", {}), "\u30B9\u30AD\u30EB\u30AB\u30FC\u30C9", B("br", {}), ce("table", {
      className: "normal-table",
      children: [B("thead", {
        children: ce("tr", {
          children: [B("th", {
            children: "\u786C\u76F4"
          }), B("th", {
            children: "\u30C1\u30E3\u30FC\u30B8"
          })]
        })
      }), ce("tbody", {
        children: [ce("tr", {
          children: [B("td", {
            children: "75"
          }), B("td", {
            children: "5"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "80"
          }), B("td", {
            children: "22"
          })]
        }), ce("tr", {
          children: [B("td", {
            children: "100"
          }), B("td", {
            children: "22"
          })]
        })]
      })]
    })]
  })
}, {
  title: "#python#",
  text: ["\u4E00\u756A\u6700\u521D\u306B#python#\u3092\u5165\u308C\u308B\u3068python\u3068\u3057\u3066\u5165\u529B\u3067\u304D\u307E\u3059", "\u5404\u30B3\u30DE\u30F3\u30C9\u306F\u95A2\u6570\u306B\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u305D\u308C\u3092\u547C\u3073\u51FA\u3059\u3068\u53CD\u6620\u3055\u308C\u307E\u3059", "\u4EA4\u4EE3\u306F\u305D\u306E\u307E\u307Elist\u3067\u66F8\u304D\u3001\u786C\u76F4\u5024\u5165\u529B\u306Fm.order,\u30B3\u30DE\u30F3\u30C9\u5165\u529B\u306Fm.command\u3067\u3059", "\u6CE8\u610F\u70B9\u3068\u3057\u3066\u3001m.command\u306E\u7B2C\u4E00\u5F15\u6570\u306Ffunction\u3092\u6E21\u3057\u307E\u3059", "", "\u4E00\u90E8\u306E\u30B3\u30DE\u30F3\u30C9\u306E\u7565\u79F0\u304C\u5909\u308F\u308A\u307E\u3059", "bs = buffset", "bp = buffadd", "bm = buffminus", "", "\u8272\u3092\u4ED8\u3051\u308B\u5834\u5408\u3001\u8272-\u6570\u5B57\u3068\u3057\u3066\u304F\u3060\u3055\u3044", "b-40", "m.order(b-40)"],
  html: ce(ht, {
    children: [B("textarea", {
      cols: 30,
      rows: 10,
      readOnly: !0,
      value: "#python#\nset(\"syaro\",144)\nset(\"media\",124)\n\nmv_ls(syaro,[m.command(bp,syaro,-200),10,99,m.order(10.66)])\nmv_ls(media,[d-80,80,69,m.order(c-14.5),[\"I\",140],60])"
    }), B("br", {})]
  })
}, {
  title: "ttk_stop",
  text: ["\u3068\u3063\u3066\u304A\u304D\u30AB\u30A6\u30F3\u30C8\u30B9\u30C8\u30C3\u30D7"]
}, {
  title: "nomove",
  text: ["\u30AD\u30E3\u30E9\u306E\u884C\u52D5\u3092\u6B62\u3081\u308B(\u30B9\u30AD\u30C3\u30D7)"]
}];

function S4(e) {
  var _ct$exports$useState5 = ct.exports.useState(!1),
      _ct$exports$useState6 = _slicedToArray(_ct$exports$useState5, 2),
      n = _ct$exports$useState6[0],
      i = _ct$exports$useState6[1];

  return window.onbeforeunload = function (a) {
    e.tl_str.length !== 0 && n && (a.preventDefault(), a.returnValue = "\u30DA\u30FC\u30B8\u304B\u3089\u96E2\u308C\u307E\u3059\u304B\uFF1F");
  }, ce(ht, {
    children: [ce("div", {
      children: [B("input", {
        type: "checkbox",
        id: "isSet_onbeforeunload",
        onChange: function onChange(a) {
          return i(a.currentTarget.checked);
        }
      }), "\u30DA\u30FC\u30B8\u3092\u96E2\u308C\u308B\u524D\u306B\u78BA\u8A8D\u3059\u308B"]
    }), "((iOS\u306E?)safari\u306E\u5834\u5408beforeunload\u30A4\u30D9\u30F3\u30C8\u304C\u7121\u8996\u3055\u308C\u308B\u3088\u3046\u306A\u306E\u3067\u3053\u306E\u8A2D\u5B9A\u306F\u4F7F\u3048\u307E\u305B\u3093)", B("br", {})]
  });
}

function x4(e) {
  return B("div", {
    id: "TL_table",
    children: B("table", {
      width: "100",
      style: {
        minHeight: "200px",
        border: "solid 1px"
      },
      children: k4(e.json, e.charalist, e.comment, e.now_place)
    })
  });
}

function k4(e, n, i, a) {
  return e.length === 0 ? B(ht, {}) : ce(ht, {
    children: [B("thead", {
      children: B("tr", {
        children: ta(e[0].length + 1, function (s) {
          return s === a ? ce("th", {
            className: "now_place",
            children: [" ", s.toString()]
          }, s) : s === 0 ? B("th", {
            className: "nowrap"
          }, s) : ce("th", {
            children: [" ", s.toString()]
          }, s);
        })
      })
    }), B("tbody", {
      children: ta(e.length, function (s) {
        return B("tr", {
          children: ce(ht, {
            children: [ce("td", {
              className: "nowrap",
              children: [" ", n[s], " "]
            }), ta(e[0].length, function (c) {
              var p = i.find(function (x) {
                return x[0] === "color" && x[1] === n[s] && x[2] === c;
              }),
                  m = e[s][c];
              var C;
              return typeof m == "string" ? C = m : typeof m == "number" ? C = String(m) : C = "", p ? B("td", {
                className: "color-" + p[3],
                children: C
              }, c) : B("td", {
                children: C
              }, c);
            })]
          })
        }, s);
      })
    })]
  });
}

function _4() {
  var _ct$exports$useState7 = ct.exports.useState(""),
      _ct$exports$useState8 = _slicedToArray(_ct$exports$useState7, 2),
      e = _ct$exports$useState8[0],
      n = _ct$exports$useState8[1],
      _ct$exports$useState9 = ct.exports.useState(0),
      _ct$exports$useState10 = _slicedToArray(_ct$exports$useState9, 2),
      i = _ct$exports$useState10[0],
      a = _ct$exports$useState10[1],
      _ct$exports$useState11 = ct.exports.useState(0),
      _ct$exports$useState12 = _slicedToArray(_ct$exports$useState11, 2),
      s = _ct$exports$useState12[0],
      c = _ct$exports$useState12[1],
      _ct$exports$useState13 = ct.exports.useState({
    main: [],
    set: []
  }),
      _ct$exports$useState14 = _slicedToArray(_ct$exports$useState13, 2),
      p = _ct$exports$useState14[0],
      m = _ct$exports$useState14[1],
      _ct$exports$useState15 = ct.exports.useState(""),
      _ct$exports$useState16 = _slicedToArray(_ct$exports$useState15, 2),
      C = _ct$exports$useState16[0],
      x = _ct$exports$useState16[1],
      _ct$exports$useState17 = ct.exports.useState(""),
      _ct$exports$useState18 = _slicedToArray(_ct$exports$useState17, 2),
      _ = _ct$exports$useState18[0],
      A = _ct$exports$useState18[1],
      _ct$exports$useState19 = ct.exports.useState(""),
      _ct$exports$useState20 = _slicedToArray(_ct$exports$useState19, 2),
      E = _ct$exports$useState20[0],
      b = _ct$exports$useState20[1],
      _ct$exports$useState21 = ct.exports.useState({}),
      _ct$exports$useState22 = _slicedToArray(_ct$exports$useState21, 2),
      F = _ct$exports$useState22[0],
      D = _ct$exports$useState22[1],
      _ct$exports$useState23 = ct.exports.useState([]),
      _ct$exports$useState24 = _slicedToArray(_ct$exports$useState23, 2),
      R = _ct$exports$useState24[0],
      y = _ct$exports$useState24[1],
      _ct$exports$useState25 = ct.exports.useState([]),
      _ct$exports$useState26 = _slicedToArray(_ct$exports$useState25, 2),
      w = _ct$exports$useState26[0],
      S = _ct$exports$useState26[1],
      _ct$exports$useState27 = ct.exports.useState([]),
      _ct$exports$useState28 = _slicedToArray(_ct$exports$useState27, 2),
      L = _ct$exports$useState28[0],
      O = _ct$exports$useState28[1],
      I = function I(ee) {
    var q = ee.json,
        ue = ee.charalist,
        he = ee.comment,
        me = ee.now_place;
    n(ee.firstchara), a(ee.ttk), c(ee.now_place), m(ee.convertedTLdata), x(ee.TL_input), D(ee.count_ttk_ls), y(q), S(ue), O(he), c(me);
  },
      M = function M(ee) {
    A(ee);
  },
      H = function H(ee) {
    b(ee);
  };

  return window.onload = function () {
    return f4(I, M, H);
  }, ce("div", {
    className: "App",
    children: [B("div", {
      className: "keyboard"
    }), B(x4, {
      json: R,
      charalist: w,
      comment: L,
      now_place: s
    }), "\u73FE\u5728\u5148\u982D\u306E\u30AD\u30E3\u30E9:", e, B("br", {}), "\u73FE\u5728 ", s, " \u884C\u76EE ", B("br", {}), E4(F) ? ce("div", {
      children: ["\u3068\u3063\u3066\u304A\u304D\u30B2\u30FC\u30B8:", i, "%"]
    }) : B(ht, {}), E ? B("div", {
      dangerouslySetInnerHTML: {
        __html: E
      }
    }) : B(ht, {}), _ ? B("div", {
      children: _
    }) : B(ht, {}), B("span", {
      id: "cm-resize-frame",
      children: B("div", {
        id: "editor"
      })
    }), B("br", {}), B(S4, {
      tl_str: C
    }), B(v4, {
      text: p
    }), B(d4, {
      json: R,
      charalist: w
    }), B(c4, {
      text: C
    }), B(y4, {}), B("br", {}), B("br", {})]
  });
}

function E4(e) {
  return Object.values(e).filter(function (n) {
    return n;
  }).length !== 0;
}

Mf.createRoot(document.getElementById("root")).render(B(jv.StrictMode, {
  children: B(_4, {})
}));
