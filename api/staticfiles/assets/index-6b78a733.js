function dh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var C =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function fo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Zc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var qc = { exports: {} },
  po = {},
  ed = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wr = Symbol.for("react.element"),
  fh = Symbol.for("react.portal"),
  ph = Symbol.for("react.fragment"),
  hh = Symbol.for("react.strict_mode"),
  mh = Symbol.for("react.profiler"),
  gh = Symbol.for("react.provider"),
  vh = Symbol.for("react.context"),
  yh = Symbol.for("react.forward_ref"),
  wh = Symbol.for("react.suspense"),
  xh = Symbol.for("react.memo"),
  Sh = Symbol.for("react.lazy"),
  Xa = Symbol.iterator;
function Eh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xa && e[Xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var td = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nd = Object.assign,
  rd = {};
function Vn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rd),
    (this.updater = n || td);
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ld() {}
ld.prototype = Vn.prototype;
function Ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rd),
    (this.updater = n || td);
}
var Gs = (Ys.prototype = new ld());
Gs.constructor = Ys;
nd(Gs, Vn.prototype);
Gs.isPureReactComponent = !0;
var Ja = Array.isArray,
  od = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  id = { key: !0, ref: !0, __self: !0, __source: !0 };
function sd(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      od.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Wr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Xs.current,
  };
}
function Ah(e, t) {
  return {
    $$typeof: Wr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Js(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wr;
}
function jh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ka = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jh("" + e.key)
    : t.toString(36);
}
function El(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Wr:
          case fh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + $o(i, 0) : r),
      Ja(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ka, "$&/") + "/"),
          El(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Js(l) &&
            (l = Ah(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ka, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ja(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + $o(o, s);
      i += El(o, t, n, a, l);
    }
  else if (((a = Eh(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + $o(o, s++)), (i += El(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function el(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    El(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Ph(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Al = { transition: null },
  kh = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: Xs,
  };
B.Children = {
  map: el,
  forEach: function (e, t, n) {
    el(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      el(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      el(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Js(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Vn;
B.Fragment = ph;
B.Profiler = mh;
B.PureComponent = Ys;
B.StrictMode = hh;
B.Suspense = wh;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nd({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Xs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      od.call(t, a) &&
        !id.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Wr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: vh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gh, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = sd;
B.createFactory = function (e) {
  var t = sd.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: yh, render: e };
};
B.isValidElement = Js;
B.lazy = function (e) {
  return { $$typeof: Sh, _payload: { _status: -1, _result: e }, _init: Ph };
};
B.memo = function (e, t) {
  return { $$typeof: xh, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Al.transition;
  Al.transition = {};
  try {
    e();
  } finally {
    Al.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
B.useContext = function (e) {
  return be.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
B.useId = function () {
  return be.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return be.current.useRef(e);
};
B.useState = function (e) {
  return be.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return be.current.useTransition();
};
B.version = "18.2.0";
ed.exports = B;
var j = ed.exports;
const N = fo(j),
  bh = dh({ __proto__: null, default: N }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nh = j,
  _h = Symbol.for("react.element"),
  Ch = Symbol.for("react.fragment"),
  Oh = Object.prototype.hasOwnProperty,
  Th = Nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ad(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Oh.call(t, r) && !Rh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: _h,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Th.current,
  };
}
po.Fragment = Ch;
po.jsx = ad;
po.jsxs = ad;
qc.exports = po;
var u = qc.exports,
  Di = {},
  ud = { exports: {} },
  Me = {},
  cd = { exports: {} },
  dd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, D) {
    var L = P.length;
    P.push(D);
    e: for (; 0 < L; ) {
      var R = (L - 1) >>> 1,
        M = P[R];
      if (0 < l(M, D)) (P[R] = D), (P[L] = M), (L = R);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0],
      L = P.pop();
    if (L !== D) {
      P[0] = L;
      e: for (var R = 0, M = P.length, ye = M >>> 1; R < ye; ) {
        var ze = 2 * (R + 1) - 1,
          fn = P[ze],
          Gt = ze + 1,
          qr = P[Gt];
        if (0 > l(fn, L))
          Gt < M && 0 > l(qr, fn)
            ? ((P[R] = qr), (P[Gt] = L), (R = Gt))
            : ((P[R] = fn), (P[ze] = L), (R = ze));
        else if (Gt < M && 0 > l(qr, L)) (P[R] = qr), (P[Gt] = L), (R = Gt);
        else break e;
      }
    }
    return D;
  }
  function l(P, D) {
    var L = P.sortIndex - D.sortIndex;
    return L !== 0 ? L : P.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    c = [],
    f = 1,
    d = null,
    h = 3,
    w = !1,
    v = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= P)
        r(c), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(c);
    }
  }
  function x(P) {
    if (((y = !1), g(P), !v))
      if (n(a) !== null) (v = !0), Y(A);
      else {
        var D = n(c);
        D !== null && G(x, D.startTime - P);
      }
  }
  function A(P, D) {
    (v = !1), y && ((y = !1), m(b), (b = -1)), (w = !0);
    var L = h;
    try {
      for (
        g(D), d = n(a);
        d !== null && (!(d.expirationTime > D) || (P && !F()));

      ) {
        var R = d.callback;
        if (typeof R == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var M = R(d.expirationTime <= D);
          (D = e.unstable_now()),
            typeof M == "function" ? (d.callback = M) : d === n(a) && r(a),
            g(D);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var ye = !0;
      else {
        var ze = n(c);
        ze !== null && G(x, ze.startTime - D), (ye = !1);
      }
      return ye;
    } finally {
      (d = null), (h = L), (w = !1);
    }
  }
  var _ = !1,
    O = null,
    b = -1,
    U = 5,
    T = -1;
  function F() {
    return !(e.unstable_now() - T < U);
  }
  function W() {
    if (O !== null) {
      var P = e.unstable_now();
      T = P;
      var D = !0;
      try {
        D = O(!0, P);
      } finally {
        D ? Q() : ((_ = !1), (O = null));
      }
    } else _ = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(W);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      z = ue.port2;
    (ue.port1.onmessage = W),
      (Q = function () {
        z.postMessage(null);
      });
  } else
    Q = function () {
      E(W, 0);
    };
  function Y(P) {
    (O = P), _ || ((_ = !0), Q());
  }
  function G(P, D) {
    b = E(function () {
      P(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || w || ((v = !0), Y(A));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = h;
      }
      var L = h;
      h = D;
      try {
        return P();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, D) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = h;
      h = P;
      try {
        return D();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, D, L) {
      var R = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? R + L : R))
          : (L = R),
        P)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = L + M),
        (P = {
          id: f++,
          callback: D,
          priorityLevel: P,
          startTime: L,
          expirationTime: M,
          sortIndex: -1,
        }),
        L > R
          ? ((P.sortIndex = L),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (y ? (m(b), (b = -1)) : (y = !0), G(x, L - R)))
          : ((P.sortIndex = M), t(a, P), v || w || ((v = !0), Y(A))),
        P
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (P) {
      var D = h;
      return function () {
        var L = h;
        h = D;
        try {
          return P.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(dd);
cd.exports = dd;
var Ih = cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fd = j,
  Fe = Ih;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pd = new Set(),
  Sr = {};
function cn(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (Sr[e] = t, e = 0; e < t.length; e++) pd.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Li = Object.prototype.hasOwnProperty,
  Dh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Za = {},
  qa = {};
function Lh(e) {
  return Li.call(qa, e)
    ? !0
    : Li.call(Za, e)
    ? !1
    : Dh.test(e)
    ? (qa[e] = !0)
    : ((Za[e] = !0), !1);
}
function Uh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fh(e, t, n, r) {
  if (t === null || typeof t > "u" || Uh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ks = /[\-:]([a-z])/g;
function Zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ks, Zs);
    ve[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ks, Zs);
    ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ks, Zs);
  ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qs(e, t, n, r) {
  var l = ve.hasOwnProperty(t) ? ve[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fh(t, n, l, r) && (n = null),
    r || l === null
      ? Lh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tl = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  ea = Symbol.for("react.strict_mode"),
  Ui = Symbol.for("react.profiler"),
  hd = Symbol.for("react.provider"),
  md = Symbol.for("react.context"),
  ta = Symbol.for("react.forward_ref"),
  Fi = Symbol.for("react.suspense"),
  Mi = Symbol.for("react.suspense_list"),
  na = Symbol.for("react.memo"),
  bt = Symbol.for("react.lazy"),
  gd = Symbol.for("react.offscreen"),
  eu = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Yo;
function ar(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yo = (t && t[1]) || "";
    }
  return (
    `
` +
    Yo +
    e
  );
}
var Go = !1;
function Xo(e, t) {
  if (!e || Go) return "";
  Go = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Go = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function Mh(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e;
    case 11:
      return (e = Xo(e.type.render, !1)), e;
    case 1:
      return (e = Xo(e.type, !0)), e;
    default:
      return "";
  }
}
function Bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case gn:
      return "Portal";
    case Ui:
      return "Profiler";
    case ea:
      return "StrictMode";
    case Fi:
      return "Suspense";
    case Mi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case md:
        return (e.displayName || "Context") + ".Consumer";
      case hd:
        return (e._context.displayName || "Context") + ".Provider";
      case ta:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case na:
        return (
          (t = e.displayName || null), t !== null ? t : Bi(e.type) || "Memo"
        );
      case bt:
        (t = e._payload), (e = e._init);
        try {
          return Bi(e(t));
        } catch {}
    }
  return null;
}
function Bh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bi(t);
    case 8:
      return t === ea ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vt(e) {
  switch (typeof e) {
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
function vd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zh(e) {
  var t = vd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function nl(e) {
  e._valueTracker || (e._valueTracker = zh(e));
}
function yd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zi(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wd(e, t) {
  (t = t.checked), t != null && qs(e, "checked", t, !1);
}
function Vi(e, t) {
  wd(e, t);
  var n = Vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hi(e, t.type, Vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function nu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hi(e, t, n) {
  (t !== "number" || Fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ru(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function xd(e, t) {
  var n = Vt(t.value),
    r = Vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function lu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var rl,
  Ed = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        rl = rl || document.createElement("div"),
          rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
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
    strokeWidth: !0,
  },
  Vh = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) {
  Vh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
  });
});
function Ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fr.hasOwnProperty(e) && fr[e])
    ? ("" + t).trim()
    : t + "px";
}
function jd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ad(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Hh = te(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function $i(e, t) {
  if (t) {
    if (Hh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Yi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Gi = null;
function ra(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xi = null,
  _n = null,
  Cn = null;
function ou(e) {
  if ((e = Yr(e))) {
    if (typeof Xi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = yo(t)), Xi(e.stateNode, e.type, t));
  }
}
function Pd(e) {
  _n ? (Cn ? Cn.push(e) : (Cn = [e])) : (_n = e);
}
function kd() {
  if (_n) {
    var e = _n,
      t = Cn;
    if (((Cn = _n = null), ou(e), t)) for (e = 0; e < t.length; e++) ou(t[e]);
  }
}
function bd(e, t) {
  return e(t);
}
function Nd() {}
var Jo = !1;
function _d(e, t, n) {
  if (Jo) return e(t, n);
  Jo = !0;
  try {
    return bd(e, t, n);
  } finally {
    (Jo = !1), (_n !== null || Cn !== null) && (Nd(), kd());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Ji = !1;
if (wt)
  try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
      get: function () {
        Ji = !0;
      },
    }),
      window.addEventListener("test", Zn, Zn),
      window.removeEventListener("test", Zn, Zn);
  } catch {
    Ji = !1;
  }
function Wh(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var pr = !1,
  Ml = null,
  Bl = !1,
  Ki = null,
  Qh = {
    onError: function (e) {
      (pr = !0), (Ml = e);
    },
  };
function $h(e, t, n, r, l, o, i, s, a) {
  (pr = !1), (Ml = null), Wh.apply(Qh, arguments);
}
function Yh(e, t, n, r, l, o, i, s, a) {
  if (($h.apply(this, arguments), pr)) {
    if (pr) {
      var c = Ml;
      (pr = !1), (Ml = null);
    } else throw Error(k(198));
    Bl || ((Bl = !0), (Ki = c));
  }
}
function dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function iu(e) {
  if (dn(e) !== e) throw Error(k(188));
}
function Gh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return iu(l), e;
        if (o === r) return iu(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Od(e) {
  return (e = Gh(e)), e !== null ? Td(e) : null;
}
function Td(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Td(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rd = Fe.unstable_scheduleCallback,
  su = Fe.unstable_cancelCallback,
  Xh = Fe.unstable_shouldYield,
  Jh = Fe.unstable_requestPaint,
  re = Fe.unstable_now,
  Kh = Fe.unstable_getCurrentPriorityLevel,
  la = Fe.unstable_ImmediatePriority,
  Id = Fe.unstable_UserBlockingPriority,
  zl = Fe.unstable_NormalPriority,
  Zh = Fe.unstable_LowPriority,
  Dd = Fe.unstable_IdlePriority,
  ho = null,
  ut = null;
function qh(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : nm,
  em = Math.log,
  tm = Math.LN2;
function nm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((em(e) / tm) | 0)) | 0;
}
var ll = 64,
  ol = 4194304;
function cr(e) {
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
function Vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = cr(s)) : ((o &= i), o !== 0 && (r = cr(o)));
  } else (i = n & ~l), i !== 0 ? (r = cr(i)) : o !== 0 && (r = cr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - et(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function rm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function lm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - et(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = rm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ld() {
  var e = ll;
  return (ll <<= 1), !(ll & 4194240) && (ll = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function om(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - et(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var $ = 0;
function Ud(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fd,
  ia,
  Md,
  Bd,
  zd,
  qi = !1,
  il = [],
  It = null,
  Dt = null,
  Lt = null,
  jr = new Map(),
  Pr = new Map(),
  _t = [],
  im =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pr.delete(t.pointerId);
  }
}
function qn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Yr(t)), t !== null && ia(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function sm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (It = qn(It, e, t, n, r, l)), !0;
    case "dragenter":
      return (Dt = qn(Dt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Lt = qn(Lt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return jr.set(o, qn(jr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Pr.set(o, qn(Pr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Vd(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Cd(n)), t !== null)) {
          (e.blockedOn = t),
            zd(e.priority, function () {
              Md(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = es(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gi = r), n.target.dispatchEvent(r), (Gi = null);
    } else return (t = Yr(n)), t !== null && ia(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function uu(e, t, n) {
  jl(e) && n.delete(t);
}
function am() {
  (qi = !1),
    It !== null && jl(It) && (It = null),
    Dt !== null && jl(Dt) && (Dt = null),
    Lt !== null && jl(Lt) && (Lt = null),
    jr.forEach(uu),
    Pr.forEach(uu);
}
function er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qi ||
      ((qi = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, am)));
}
function kr(e) {
  function t(l) {
    return er(l, e);
  }
  if (0 < il.length) {
    er(il[0], e);
    for (var n = 1; n < il.length; n++) {
      var r = il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && er(It, e),
      Dt !== null && er(Dt, e),
      Lt !== null && er(Lt, e),
      jr.forEach(t),
      Pr.forEach(t),
      n = 0;
    n < _t.length;
    n++
  )
    (r = _t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && ((n = _t[0]), n.blockedOn === null); )
    Vd(n), n.blockedOn === null && _t.shift();
}
var On = At.ReactCurrentBatchConfig,
  Hl = !0;
function um(e, t, n, r) {
  var l = $,
    o = On.transition;
  On.transition = null;
  try {
    ($ = 1), sa(e, t, n, r);
  } finally {
    ($ = l), (On.transition = o);
  }
}
function cm(e, t, n, r) {
  var l = $,
    o = On.transition;
  On.transition = null;
  try {
    ($ = 4), sa(e, t, n, r);
  } finally {
    ($ = l), (On.transition = o);
  }
}
function sa(e, t, n, r) {
  if (Hl) {
    var l = es(e, t, n, r);
    if (l === null) si(e, t, r, Wl, n), au(e, r);
    else if (sm(l, e, t, n, r)) r.stopPropagation();
    else if ((au(e, r), t & 4 && -1 < im.indexOf(e))) {
      for (; l !== null; ) {
        var o = Yr(l);
        if (
          (o !== null && Fd(o),
          (o = es(e, t, n, r)),
          o === null && si(e, t, r, Wl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else si(e, t, r, null, n);
  }
}
var Wl = null;
function es(e, t, n, r) {
  if (((Wl = null), (e = ra(r)), (e = Kt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Cd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Wl = e), null;
}
function Hd(e) {
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
      switch (Kh()) {
        case la:
          return 1;
        case Id:
          return 4;
        case zl:
        case Zh:
          return 16;
        case Dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  aa = null,
  Pl = null;
function Wd() {
  if (Pl) return Pl;
  var e,
    t = aa,
    n = t.length,
    r,
    l = "value" in Ot ? Ot.value : Ot.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Pl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function kl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sl() {
  return !0;
}
function cu() {
  return !1;
}
function Be(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? sl
        : cu),
      (this.isPropagationStopped = cu),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sl));
      },
      persist: function () {},
      isPersistent: sl,
    }),
    t
  );
}
var Hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ua = Be(Hn),
  $r = te({}, Hn, { view: 0, detail: 0 }),
  dm = Be($r),
  Zo,
  qo,
  tr,
  mo = te({}, $r, {
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
    getModifierState: ca,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== tr &&
            (tr && e.type === "mousemove"
              ? ((Zo = e.screenX - tr.screenX), (qo = e.screenY - tr.screenY))
              : (qo = Zo = 0),
            (tr = e)),
          Zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qo;
    },
  }),
  du = Be(mo),
  fm = te({}, mo, { dataTransfer: 0 }),
  pm = Be(fm),
  hm = te({}, $r, { relatedTarget: 0 }),
  ei = Be(hm),
  mm = te({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gm = Be(mm),
  vm = te({}, Hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ym = Be(vm),
  wm = te({}, Hn, { data: 0 }),
  fu = Be(wm),
  xm = {
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
    MozPrintableKey: "Unidentified",
  },
  Sm = {
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
    224: "Meta",
  },
  Em = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Am(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Em[e]) ? !!t[e] : !1;
}
function ca() {
  return Am;
}
var jm = te({}, $r, {
    key: function (e) {
      if (e.key) {
        var t = xm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = kl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ca,
    charCode: function (e) {
      return e.type === "keypress" ? kl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? kl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Pm = Be(jm),
  km = te({}, mo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pu = Be(km),
  bm = te({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ca,
  }),
  Nm = Be(bm),
  _m = te({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cm = Be(_m),
  Om = te({}, mo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tm = Be(Om),
  Rm = [9, 13, 27, 32],
  da = wt && "CompositionEvent" in window,
  hr = null;
wt && "documentMode" in document && (hr = document.documentMode);
var Im = wt && "TextEvent" in window && !hr,
  Qd = wt && (!da || (hr && 8 < hr && 11 >= hr)),
  hu = String.fromCharCode(32),
  mu = !1;
function $d(e, t) {
  switch (e) {
    case "keyup":
      return Rm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Dm(e, t) {
  switch (e) {
    case "compositionend":
      return Yd(t);
    case "keypress":
      return t.which !== 32 ? null : ((mu = !0), hu);
    case "textInput":
      return (e = t.data), e === hu && mu ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (yn)
    return e === "compositionend" || (!da && $d(e, t))
      ? ((e = Wd()), (Pl = aa = Ot = null), (yn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Um = {
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
  week: !0,
};
function gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Um[e.type] : t === "textarea";
}
function Gd(e, t, n, r) {
  Pd(r),
    (t = Ql(t, "onChange")),
    0 < t.length &&
      ((n = new ua("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mr = null,
  br = null;
function Fm(e) {
  of(e, 0);
}
function go(e) {
  var t = Sn(e);
  if (yd(t)) return e;
}
function Mm(e, t) {
  if (e === "change") return t;
}
var Xd = !1;
if (wt) {
  var ti;
  if (wt) {
    var ni = "oninput" in document;
    if (!ni) {
      var vu = document.createElement("div");
      vu.setAttribute("oninput", "return;"),
        (ni = typeof vu.oninput == "function");
    }
    ti = ni;
  } else ti = !1;
  Xd = ti && (!document.documentMode || 9 < document.documentMode);
}
function yu() {
  mr && (mr.detachEvent("onpropertychange", Jd), (br = mr = null));
}
function Jd(e) {
  if (e.propertyName === "value" && go(br)) {
    var t = [];
    Gd(t, br, e, ra(e)), _d(Fm, t);
  }
}
function Bm(e, t, n) {
  e === "focusin"
    ? (yu(), (mr = t), (br = n), mr.attachEvent("onpropertychange", Jd))
    : e === "focusout" && yu();
}
function zm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return go(br);
}
function Vm(e, t) {
  if (e === "click") return go(t);
}
function Hm(e, t) {
  if (e === "input" || e === "change") return go(t);
}
function Wm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : Wm;
function Nr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Li.call(t, l) || !nt(e[l], t[l])) return !1;
  }
  return !0;
}
function wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xu(e, t) {
  var n = wu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wu(n);
  }
}
function Kd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zd() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fl(e.document);
  }
  return t;
}
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qm(e) {
  var t = Zd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = xu(n, o));
        var i = xu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $m = wt && "documentMode" in document && 11 >= document.documentMode,
  wn = null,
  ts = null,
  gr = null,
  ns = !1;
function Su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ns ||
    wn == null ||
    wn !== Fl(r) ||
    ((r = wn),
    "selectionStart" in r && fa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gr && Nr(gr, r)) ||
      ((gr = r),
      (r = Ql(ts, "onSelect")),
      0 < r.length &&
        ((t = new ua("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function al(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xn = {
    animationend: al("Animation", "AnimationEnd"),
    animationiteration: al("Animation", "AnimationIteration"),
    animationstart: al("Animation", "AnimationStart"),
    transitionend: al("Transition", "TransitionEnd"),
  },
  ri = {},
  qd = {};
wt &&
  ((qd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  "TransitionEvent" in window || delete xn.transitionend.transition);
function vo(e) {
  if (ri[e]) return ri[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qd) return (ri[e] = t[n]);
  return e;
}
var ef = vo("animationend"),
  tf = vo("animationiteration"),
  nf = vo("animationstart"),
  rf = vo("transitionend"),
  lf = new Map(),
  Eu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qt(e, t) {
  lf.set(e, t), cn(t, [e]);
}
for (var li = 0; li < Eu.length; li++) {
  var oi = Eu[li],
    Ym = oi.toLowerCase(),
    Gm = oi[0].toUpperCase() + oi.slice(1);
  Qt(Ym, "on" + Gm);
}
Qt(ef, "onAnimationEnd");
Qt(tf, "onAnimationIteration");
Qt(nf, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(rf, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yh(r, t, void 0, e), (e.currentTarget = null);
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          Au(l, s, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Au(l, s, c), (o = a);
        }
    }
  }
  if (Bl) throw ((e = Ki), (Bl = !1), (Ki = null), e);
}
function J(e, t) {
  var n = t[ss];
  n === void 0 && (n = t[ss] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sf(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), sf(n, e, r, t);
}
var ul = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[ul]) {
    (e[ul] = !0),
      pd.forEach(function (n) {
        n !== "selectionchange" && (Xm.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ul] || ((t[ul] = !0), ii("selectionchange", !1, t));
  }
}
function sf(e, t, n, r) {
  switch (Hd(t)) {
    case 1:
      var l = um;
      break;
    case 4:
      l = cm;
      break;
    default:
      l = sa;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ji ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function si(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Kt(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  _d(function () {
    var c = o,
      f = ra(n),
      d = [];
    e: {
      var h = lf.get(e);
      if (h !== void 0) {
        var w = ua,
          v = e;
        switch (e) {
          case "keypress":
            if (kl(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Pm;
            break;
          case "focusin":
            (v = "focus"), (w = ei);
            break;
          case "focusout":
            (v = "blur"), (w = ei);
            break;
          case "beforeblur":
          case "afterblur":
            w = ei;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = du;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = pm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Nm;
            break;
          case ef:
          case tf:
          case nf:
            w = gm;
            break;
          case rf:
            w = Cm;
            break;
          case "scroll":
            w = dm;
            break;
          case "wheel":
            w = Tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = pu;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          m = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              m !== null && ((x = Ar(p, m)), x != null && y.push(Cr(p, x, g)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new w(h, v, null, n, f)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Gi &&
            (v = n.relatedTarget || n.fromElement) &&
            (Kt(v) || v[xt]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((v = n.relatedTarget || n.toElement),
              (w = c),
              (v = v ? Kt(v) : null),
              v !== null &&
                ((E = dn(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((w = null), (v = c)),
          w !== v)
        ) {
          if (
            ((y = du),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = pu),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (E = w == null ? h : Sn(w)),
            (g = v == null ? h : Sn(v)),
            (h = new y(x, p + "leave", w, n, f)),
            (h.target = E),
            (h.relatedTarget = g),
            (x = null),
            Kt(f) === c &&
              ((y = new y(m, p + "enter", v, n, f)),
              (y.target = g),
              (y.relatedTarget = E),
              (x = y)),
            (E = x),
            w && v)
          )
            t: {
              for (y = w, m = v, p = 0, g = y; g; g = pn(g)) p++;
              for (g = 0, x = m; x; x = pn(x)) g++;
              for (; 0 < p - g; ) (y = pn(y)), p--;
              for (; 0 < g - p; ) (m = pn(m)), g--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = pn(y)), (m = pn(m));
              }
              y = null;
            }
          else y = null;
          w !== null && ju(d, h, w, y, !1),
            v !== null && E !== null && ju(d, E, v, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? Sn(c) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var A = Mm;
        else if (gu(h))
          if (Xd) A = Hm;
          else {
            A = zm;
            var _ = Bm;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (A = Vm);
        if (A && (A = A(e, c))) {
          Gd(d, A, n, f);
          break e;
        }
        _ && _(e, h, c),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            Hi(h, "number", h.value);
      }
      switch (((_ = c ? Sn(c) : window), e)) {
        case "focusin":
          (gu(_) || _.contentEditable === "true") &&
            ((wn = _), (ts = c), (gr = null));
          break;
        case "focusout":
          gr = ts = wn = null;
          break;
        case "mousedown":
          ns = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ns = !1), Su(d, n, f);
          break;
        case "selectionchange":
          if ($m) break;
        case "keydown":
        case "keyup":
          Su(d, n, f);
      }
      var O;
      if (da)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        yn
          ? $d(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Qd &&
          n.locale !== "ko" &&
          (yn || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && yn && (O = Wd())
            : ((Ot = f),
              (aa = "value" in Ot ? Ot.value : Ot.textContent),
              (yn = !0))),
        (_ = Ql(c, b)),
        0 < _.length &&
          ((b = new fu(b, e, null, n, f)),
          d.push({ event: b, listeners: _ }),
          O ? (b.data = O) : ((O = Yd(n)), O !== null && (b.data = O)))),
        (O = Im ? Dm(e, n) : Lm(e, n)) &&
          ((c = Ql(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new fu("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: c }),
            (f.data = O)));
    }
    of(d, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Ar(e, n)),
      o != null && r.unshift(Cr(e, o, l)),
      (o = Ar(e, t)),
      o != null && r.push(Cr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Ar(n, o)), a != null && i.unshift(Cr(n, a, s)))
        : l || ((a = Ar(n, o)), a != null && i.push(Cr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Jm = /\r\n?/g,
  Km = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jm,
      `
`
    )
    .replace(Km, "");
}
function cl(e, t, n) {
  if (((t = Pu(t)), Pu(e) !== t && n)) throw Error(k(425));
}
function $l() {}
var rs = null,
  ls = null;
function os(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var is = typeof setTimeout == "function" ? setTimeout : void 0,
  Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ku = typeof Promise == "function" ? Promise : void 0,
  qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ku < "u"
      ? function (e) {
          return ku.resolve(null).then(e).catch(eg);
        }
      : is;
function eg(e) {
  setTimeout(function () {
    throw e;
  });
}
function ai(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), kr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  kr(t);
}
function Ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wn = Math.random().toString(36).slice(2),
  st = "__reactFiber$" + Wn,
  Or = "__reactProps$" + Wn,
  xt = "__reactContainer$" + Wn,
  ss = "__reactEvents$" + Wn,
  tg = "__reactListeners$" + Wn,
  ng = "__reactHandles$" + Wn;
function Kt(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[st])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bu(e); e !== null; ) {
          if ((n = e[st])) return n;
          e = bu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Yr(e) {
  return (
    (e = e[st] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function yo(e) {
  return e[Or] || null;
}
var as = [],
  En = -1;
function $t(e) {
  return { current: e };
}
function K(e) {
  0 > En || ((e.current = as[En]), (as[En] = null), En--);
}
function X(e, t) {
  En++, (as[En] = e.current), (e.current = t);
}
var Ht = {},
  Ae = $t(Ht),
  Te = $t(!1),
  ln = Ht;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function Yl() {
  K(Te), K(Ae);
}
function Nu(e, t, n) {
  if (Ae.current !== Ht) throw Error(k(168));
  X(Ae, t), X(Te, n);
}
function af(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Bh(e) || "Unknown", l));
  return te({}, n, r);
}
function Gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (ln = Ae.current),
    X(Ae, e),
    X(Te, Te.current),
    !0
  );
}
function _u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = af(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Te),
      K(Ae),
      X(Ae, e))
    : K(Te),
    X(Te, n);
}
var ht = null,
  wo = !1,
  ui = !1;
function uf(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function rg(e) {
  (wo = !0), uf(e);
}
function Yt() {
  if (!ui && ht !== null) {
    ui = !0;
    var e = 0,
      t = $;
    try {
      var n = ht;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (wo = !1);
    } catch (l) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Rd(la, Yt), l);
    } finally {
      ($ = t), (ui = !1);
    }
  }
  return null;
}
var An = [],
  jn = 0,
  Xl = null,
  Jl = 0,
  Ve = [],
  He = 0,
  on = null,
  mt = 1,
  gt = "";
function Xt(e, t) {
  (An[jn++] = Jl), (An[jn++] = Xl), (Xl = e), (Jl = t);
}
function cf(e, t, n) {
  (Ve[He++] = mt), (Ve[He++] = gt), (Ve[He++] = on), (on = e);
  var r = mt;
  e = gt;
  var l = 32 - et(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - et(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (mt = (1 << (32 - et(t) + l)) | (n << l) | r),
      (gt = o + e);
  } else (mt = (1 << o) | (n << l) | r), (gt = e);
}
function pa(e) {
  e.return !== null && (Xt(e, 1), cf(e, 1, 0));
}
function ha(e) {
  for (; e === Xl; )
    (Xl = An[--jn]), (An[jn] = null), (Jl = An[--jn]), (An[jn] = null);
  for (; e === on; )
    (on = Ve[--He]),
      (Ve[He] = null),
      (gt = Ve[--He]),
      (Ve[He] = null),
      (mt = Ve[--He]),
      (Ve[He] = null);
}
var Ue = null,
  Le = null,
  Z = !1,
  qe = null;
function df(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Le = Ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = on !== null ? { id: mt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function us(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cs(e) {
  if (Z) {
    var t = Le;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (us(e)) throw Error(k(418));
        t = Ut(n.nextSibling);
        var r = Ue;
        t && Cu(e, t)
          ? df(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ue = e));
      }
    } else {
      if (us(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ue = e);
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function dl(e) {
  if (e !== Ue) return !1;
  if (!Z) return Ou(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !os(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (us(e)) throw (ff(), Error(k(418)));
    for (; t; ) df(e, t), (t = Ut(t.nextSibling));
  }
  if ((Ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Ue ? Ut(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = Le; e; ) e = Ut(e.nextSibling);
}
function Ln() {
  (Le = Ue = null), (Z = !1);
}
function ma(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var lg = At.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kl = $t(null),
  Zl = null,
  Pn = null,
  ga = null;
function va() {
  ga = Pn = Zl = null;
}
function ya(e) {
  var t = Kl.current;
  K(Kl), (e._currentValue = t);
}
function ds(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  (Zl = e),
    (ga = Pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (ga !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
      if (Zl === null) throw Error(k(308));
      (Pn = e), (Zl.dependencies = { lanes: 0, firstContext: e });
    } else Pn = Pn.next = e;
  return t;
}
var Zt = null;
function wa(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function pf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), wa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function xa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), wa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
  }
}
function Tu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ql(e, t, n, r) {
  var l = e.updateQueue;
  Nt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== i &&
        (s === null ? (f.firstBaseUpdate = c) : (s.next = c),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (f = c = a = null), (s = o);
    do {
      var h = s.lane,
        w = s.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            y = s;
          switch (((h = t), (w = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(w, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (h = typeof v == "function" ? v.call(w, d, h) : v),
                h == null)
              )
                break e;
              d = te({}, d, h);
              break e;
            case 2:
              Nt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [s]) : h.push(s));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((c = f = w), (a = d)) : (f = f.next = w),
          (i |= h);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = d),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (an |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function Ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var mf = new fd.Component().refs;
function fs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      l = Bt(e),
      o = vt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (tt(t, e, l, r), bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      l = Bt(e),
      o = vt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (tt(t, e, l, r), bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Bt(e),
      l = vt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ft(e, l, r)),
      t !== null && (tt(t, e, r, n), bl(t, e, r));
  },
};
function Iu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nr(n, r) || !Nr(l, o)
      : !0
  );
}
function gf(e, t, n) {
  var r = !1,
    l = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ye(o))
      : ((l = Re(t) ? ln : Ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dn(e, l) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Du(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xo.enqueueReplaceState(t, t.state, null);
}
function ps(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = mf), xa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ye(o))
    : ((o = Re(t) ? ln : Ae.current), (l.context = Dn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fs(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xo.enqueueReplaceState(l, l.state, null),
      ql(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            s === mf && (s = l.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function fl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Lu(e) {
  var t = e._init;
  return t(e._payload);
}
function vf(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function l(m, p) {
    return (m = zt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, g, x) {
    return p === null || p.tag !== 6
      ? ((p = gi(g, m.mode, x)), (p.return = m), p)
      : ((p = l(p, g)), (p.return = m), p);
  }
  function a(m, p, g, x) {
    var A = g.type;
    return A === vn
      ? f(m, p, g.props.children, x, g.key)
      : p !== null &&
        (p.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === bt &&
            Lu(A) === p.type))
      ? ((x = l(p, g.props)), (x.ref = nr(m, p, g)), (x.return = m), x)
      : ((x = Rl(g.type, g.key, g.props, null, m.mode, x)),
        (x.ref = nr(m, p, g)),
        (x.return = m),
        x);
  }
  function c(m, p, g, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = vi(g, m.mode, x)), (p.return = m), p)
      : ((p = l(p, g.children || [])), (p.return = m), p);
  }
  function f(m, p, g, x, A) {
    return p === null || p.tag !== 7
      ? ((p = nn(g, m.mode, x, A)), (p.return = m), p)
      : ((p = l(p, g)), (p.return = m), p);
  }
  function d(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = gi("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case tl:
          return (
            (g = Rl(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = nr(m, null, p)),
            (g.return = m),
            g
          );
        case gn:
          return (p = vi(p, m.mode, g)), (p.return = m), p;
        case bt:
          var x = p._init;
          return d(m, x(p._payload), g);
      }
      if (ur(p) || Kn(p))
        return (p = nn(p, m.mode, g, null)), (p.return = m), p;
      fl(m, p);
    }
    return null;
  }
  function h(m, p, g, x) {
    var A = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return A !== null ? null : s(m, p, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case tl:
          return g.key === A ? a(m, p, g, x) : null;
        case gn:
          return g.key === A ? c(m, p, g, x) : null;
        case bt:
          return (A = g._init), h(m, p, A(g._payload), x);
      }
      if (ur(g) || Kn(g)) return A !== null ? null : f(m, p, g, x, null);
      fl(m, g);
    }
    return null;
  }
  function w(m, p, g, x, A) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(g) || null), s(p, m, "" + x, A);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case tl:
          return (m = m.get(x.key === null ? g : x.key) || null), a(p, m, x, A);
        case gn:
          return (m = m.get(x.key === null ? g : x.key) || null), c(p, m, x, A);
        case bt:
          var _ = x._init;
          return w(m, p, g, _(x._payload), A);
      }
      if (ur(x) || Kn(x)) return (m = m.get(g) || null), f(p, m, x, A, null);
      fl(p, x);
    }
    return null;
  }
  function v(m, p, g, x) {
    for (
      var A = null, _ = null, O = p, b = (p = 0), U = null;
      O !== null && b < g.length;
      b++
    ) {
      O.index > b ? ((U = O), (O = null)) : (U = O.sibling);
      var T = h(m, O, g[b], x);
      if (T === null) {
        O === null && (O = U);
        break;
      }
      e && O && T.alternate === null && t(m, O),
        (p = o(T, p, b)),
        _ === null ? (A = T) : (_.sibling = T),
        (_ = T),
        (O = U);
    }
    if (b === g.length) return n(m, O), Z && Xt(m, b), A;
    if (O === null) {
      for (; b < g.length; b++)
        (O = d(m, g[b], x)),
          O !== null &&
            ((p = o(O, p, b)), _ === null ? (A = O) : (_.sibling = O), (_ = O));
      return Z && Xt(m, b), A;
    }
    for (O = r(m, O); b < g.length; b++)
      (U = w(O, m, b, g[b], x)),
        U !== null &&
          (e && U.alternate !== null && O.delete(U.key === null ? b : U.key),
          (p = o(U, p, b)),
          _ === null ? (A = U) : (_.sibling = U),
          (_ = U));
    return (
      e &&
        O.forEach(function (F) {
          return t(m, F);
        }),
      Z && Xt(m, b),
      A
    );
  }
  function y(m, p, g, x) {
    var A = Kn(g);
    if (typeof A != "function") throw Error(k(150));
    if (((g = A.call(g)), g == null)) throw Error(k(151));
    for (
      var _ = (A = null), O = p, b = (p = 0), U = null, T = g.next();
      O !== null && !T.done;
      b++, T = g.next()
    ) {
      O.index > b ? ((U = O), (O = null)) : (U = O.sibling);
      var F = h(m, O, T.value, x);
      if (F === null) {
        O === null && (O = U);
        break;
      }
      e && O && F.alternate === null && t(m, O),
        (p = o(F, p, b)),
        _ === null ? (A = F) : (_.sibling = F),
        (_ = F),
        (O = U);
    }
    if (T.done) return n(m, O), Z && Xt(m, b), A;
    if (O === null) {
      for (; !T.done; b++, T = g.next())
        (T = d(m, T.value, x)),
          T !== null &&
            ((p = o(T, p, b)), _ === null ? (A = T) : (_.sibling = T), (_ = T));
      return Z && Xt(m, b), A;
    }
    for (O = r(m, O); !T.done; b++, T = g.next())
      (T = w(O, m, b, T.value, x)),
        T !== null &&
          (e && T.alternate !== null && O.delete(T.key === null ? b : T.key),
          (p = o(T, p, b)),
          _ === null ? (A = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        O.forEach(function (W) {
          return t(m, W);
        }),
      Z && Xt(m, b),
      A
    );
  }
  function E(m, p, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === vn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case tl:
          e: {
            for (var A = g.key, _ = p; _ !== null; ) {
              if (_.key === A) {
                if (((A = g.type), A === vn)) {
                  if (_.tag === 7) {
                    n(m, _.sibling),
                      (p = l(_, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  _.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === bt &&
                    Lu(A) === _.type)
                ) {
                  n(m, _.sibling),
                    (p = l(_, g.props)),
                    (p.ref = nr(m, _, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, _);
                break;
              } else t(m, _);
              _ = _.sibling;
            }
            g.type === vn
              ? ((p = nn(g.props.children, m.mode, x, g.key)),
                (p.return = m),
                (m = p))
              : ((x = Rl(g.type, g.key, g.props, null, m.mode, x)),
                (x.ref = nr(m, p, g)),
                (x.return = m),
                (m = x));
          }
          return i(m);
        case gn:
          e: {
            for (_ = g.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = l(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = vi(g, m.mode, x)), (p.return = m), (m = p);
          }
          return i(m);
        case bt:
          return (_ = g._init), E(m, p, _(g._payload), x);
      }
      if (ur(g)) return v(m, p, g, x);
      if (Kn(g)) return y(m, p, g, x);
      fl(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = l(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = gi(g, m.mode, x)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return E;
}
var Un = vf(!0),
  yf = vf(!1),
  Gr = {},
  ct = $t(Gr),
  Tr = $t(Gr),
  Rr = $t(Gr);
function qt(e) {
  if (e === Gr) throw Error(k(174));
  return e;
}
function Sa(e, t) {
  switch ((X(Rr, t), X(Tr, e), X(ct, Gr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qi(t, e));
  }
  K(ct), X(ct, t);
}
function Fn() {
  K(ct), K(Tr), K(Rr);
}
function wf(e) {
  qt(Rr.current);
  var t = qt(ct.current),
    n = Qi(t, e.type);
  t !== n && (X(Tr, e), X(ct, n));
}
function Ea(e) {
  Tr.current === e && (K(ct), K(Tr));
}
var q = $t(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ci = [];
function Aa() {
  for (var e = 0; e < ci.length; e++)
    ci[e]._workInProgressVersionPrimary = null;
  ci.length = 0;
}
var Nl = At.ReactCurrentDispatcher,
  di = At.ReactCurrentBatchConfig,
  sn = 0,
  ee = null,
  ie = null,
  ce = null,
  to = !1,
  vr = !1,
  Ir = 0,
  og = 0;
function we() {
  throw Error(k(321));
}
function ja(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Pa(e, t, n, r, l, o) {
  if (
    ((sn = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nl.current = e === null || e.memoizedState === null ? ug : cg),
    (e = n(r, l)),
    vr)
  ) {
    o = 0;
    do {
      if (((vr = !1), (Ir = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (ce = ie = null),
        (t.updateQueue = null),
        (Nl.current = dg),
        (e = n(r, l));
    } while (vr);
  }
  if (
    ((Nl.current = no),
    (t = ie !== null && ie.next !== null),
    (sn = 0),
    (ce = ie = ee = null),
    (to = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ka() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Ge() {
  if (ie === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) (ce = t), (ie = e);
  else {
    if (e === null) throw Error(k(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ie,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      c = o;
    do {
      var f = c.lane;
      if ((sn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = d), (i = r)) : (a = a.next = d),
          (ee.lanes |= f),
          (an |= f);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = s),
      nt(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ee.lanes |= o), (an |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pi(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    nt(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function xf() {}
function Sf(e, t) {
  var n = ee,
    r = Ge(),
    l = t(),
    o = !nt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ce = !0)),
    (r = r.queue),
    ba(jf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lr(9, Af.bind(null, n, r, l, t), void 0, null),
      de === null)
    )
      throw Error(k(349));
    sn & 30 || Ef(n, t, l);
  }
  return l;
}
function Ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Af(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Pf(t) && kf(e);
}
function jf(e, t, n) {
  return n(function () {
    Pf(t) && kf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function kf(e) {
  var t = St(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Uu(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ag.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bf() {
  return Ge().memoizedState;
}
function _l(e, t, n, r) {
  var l = it();
  (ee.flags |= e),
    (l.memoizedState = Lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function So(e, t, n, r) {
  var l = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var i = ie.memoizedState;
    if (((o = i.destroy), r !== null && ja(r, i.deps))) {
      l.memoizedState = Lr(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (l.memoizedState = Lr(1 | t, n, o, r));
}
function Fu(e, t) {
  return _l(8390656, 8, e, t);
}
function ba(e, t) {
  return So(2048, 8, e, t);
}
function Nf(e, t) {
  return So(4, 2, e, t);
}
function _f(e, t) {
  return So(4, 4, e, t);
}
function Cf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), So(4, 4, Cf.bind(null, t, e), n)
  );
}
function Na() {}
function Tf(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ja(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rf(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ja(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function If(e, t, n) {
  return sn & 21
    ? (nt(n, t) || ((n = Ld()), (ee.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function ig(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = di.transition;
  di.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (di.transition = r);
  }
}
function Df() {
  return Ge().memoizedState;
}
function sg(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lf(e))
  )
    Uf(t, n);
  else if (((n = pf(e, t, n, r)), n !== null)) {
    var l = ke();
    tt(n, e, r, l), Ff(n, t, r);
  }
}
function ag(e, t, n) {
  var r = Bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lf(e)) Uf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), nt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), wa(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pf(e, t, l, r)),
      n !== null && ((l = ke()), tt(n, e, r, l), Ff(n, t, r));
  }
}
function Lf(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Uf(e, t) {
  vr = to = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ff(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
  }
}
var no = {
    readContext: Ye,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  ug = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: Fu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _l(4194308, 4, Cf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _l(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _l(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = sg.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Uu,
    useDebugValue: Na,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Uu(!1),
        t = e[0];
      return (e = ig.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        l = it();
      if (Z) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(k(349));
        sn & 30 || Ef(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Fu(jf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Lr(9, Af.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = de.identifierPrefix;
      if (Z) {
        var n = gt,
          r = mt;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = og++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cg = {
    readContext: Ye,
    useCallback: Tf,
    useContext: Ye,
    useEffect: ba,
    useImperativeHandle: Of,
    useInsertionEffect: Nf,
    useLayoutEffect: _f,
    useMemo: Rf,
    useReducer: fi,
    useRef: bf,
    useState: function () {
      return fi(Dr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = Ge();
      return If(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(Dr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Df,
    unstable_isNewReconciler: !1,
  },
  dg = {
    readContext: Ye,
    useCallback: Tf,
    useContext: Ye,
    useEffect: ba,
    useImperativeHandle: Of,
    useInsertionEffect: Nf,
    useLayoutEffect: _f,
    useMemo: Rf,
    useReducer: pi,
    useRef: bf,
    useState: function () {
      return pi(Dr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = Ge();
      return ie === null ? (t.memoizedState = e) : If(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(Dr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Df,
    unstable_isNewReconciler: !1,
  };
function Mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fg = typeof WeakMap == "function" ? WeakMap : Map;
function Mf(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      lo || ((lo = !0), (js = r)), hs(e, t);
    }),
    n
  );
}
function Bf(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        hs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        hs(e, t),
          typeof r != "function" &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fg();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kg.bind(null, e, t, n)), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = vt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pg = At.ReactCurrentOwner,
  Ce = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : Un(t, e.child, n, r);
}
function Vu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Tn(t, l),
    (r = Pa(e, t, n, r, o, l)),
    (n = ka()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Et(e, t, l))
      : (Z && n && pa(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
  );
}
function Hu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !La(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), zf(e, t, o, r, l))
      : ((e = Rl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Nr), n(i, r) && e.ref === t.ref)
    )
      return Et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Nr(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), Et(e, t, l);
  }
  return ms(e, t, n, r, l);
}
function Vf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(bn, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X(bn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        X(bn, De),
        (De |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(bn, De),
      (De |= r);
  return Pe(e, t, l, n), t.child;
}
function Hf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ms(e, t, n, r, l) {
  var o = Re(n) ? ln : Ae.current;
  return (
    (o = Dn(t, o)),
    Tn(t, l),
    (n = Pa(e, t, n, r, o, l)),
    (r = ka()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Et(e, t, l))
      : (Z && r && pa(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
  );
}
function Wu(e, t, n, r, l) {
  if (Re(n)) {
    var o = !0;
    Gl(t);
  } else o = !1;
  if ((Tn(t, l), t.stateNode === null))
    Cl(e, t), gf(t, n, r), ps(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ye(c))
      : ((c = Re(n) ? ln : Ae.current), (c = Dn(t, c)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && Du(t, i, r, c)),
      (Nt = !1);
    var h = t.memoizedState;
    (i.state = h),
      ql(t, r, i, l),
      (a = t.memoizedState),
      s !== r || h !== a || Te.current || Nt
        ? (typeof f == "function" && (fs(t, n, f, r), (a = t.memoizedState)),
          (s = Nt || Iu(t, n, s, r, h, a, c))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      hf(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ke(t.type, s)),
      (i.props = c),
      (d = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ye(a))
        : ((a = Re(n) ? ln : Ae.current), (a = Dn(t, a)));
    var w = n.getDerivedStateFromProps;
    (f =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== d || h !== a) && Du(t, i, r, a)),
      (Nt = !1),
      (h = t.memoizedState),
      (i.state = h),
      ql(t, r, i, l);
    var v = t.memoizedState;
    s !== d || h !== v || Te.current || Nt
      ? (typeof w == "function" && (fs(t, n, w, r), (v = t.memoizedState)),
        (c = Nt || Iu(t, n, c, r, h, v, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gs(e, t, n, r, o, l);
}
function gs(e, t, n, r, l, o) {
  Hf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && _u(t, n, !1), Et(e, t, o);
  (r = t.stateNode), (pg.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Un(t, e.child, null, o)), (t.child = Un(t, null, s, o)))
      : Pe(e, t, s, o),
    (t.memoizedState = r.state),
    l && _u(t, n, !0),
    t.child
  );
}
function Wf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Nu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Nu(e, t.context, !1),
    Sa(e, t.containerInfo);
}
function Qu(e, t, n, r, l) {
  return Ln(), ma(l), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ys(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    X(q, l & 1),
    e === null)
  )
    return (
      cs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = jo(i, r, 0, null)),
              (e = nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ys(n)),
              (t.memoizedState = vs),
              e)
            : _a(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return hg(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = zt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = zt(s, o)) : ((o = nn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ys(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = vs),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _a(e, t) {
  return (
    (t = jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function pl(e, t, n, r) {
  return (
    r !== null && ma(r),
    Un(t, e.child, null, n),
    (e = _a(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hg(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hi(Error(k(422)))), pl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = jo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = nn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Un(t, e.child, null, i),
        (t.child.memoizedState = ys(i)),
        (t.memoizedState = vs),
        o);
  if (!(t.mode & 1)) return pl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(k(419))), (r = hi(o, r, void 0)), pl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Ce || s)) {
    if (((r = de), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), St(e, l), tt(r, e, l, -1));
    }
    return Da(), (r = hi(Error(k(421)))), pl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Le = Ut(l.nextSibling)),
      (Ue = t),
      (Z = !0),
      (qe = null),
      e !== null &&
        ((Ve[He++] = mt),
        (Ve[He++] = gt),
        (Ve[He++] = on),
        (mt = e.id),
        (gt = e.overflow),
        (on = t)),
      (t = _a(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ds(e.return, t, n);
}
function mi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function $f(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
        else if (e.tag === 19) $u(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((X(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && eo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          mi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && eo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        mi(t, !0, n, null, o);
        break;
      case "together":
        mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mg(e, t, n) {
  switch (t.tag) {
    case 3:
      Wf(t), Ln();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      Re(t.type) && Gl(t);
      break;
    case 4:
      Sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      X(Kl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qf(e, t, n)
          : (X(q, q.current & 1),
            (e = Et(e, t, n)),
            e !== null ? e.sibling : null);
      X(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $f(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        X(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vf(e, t, n);
  }
  return Et(e, t, n);
}
var Yf, ws, Gf, Xf;
Yf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ws = function () {};
Gf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), qt(ct.current);
    var o = null;
    switch (n) {
      case "input":
        (l = zi(e, l)), (r = zi(e, r)), (o = []);
        break;
      case "select":
        (l = te({}, l, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Wi(e, l)), (r = Wi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $l);
    }
    $i(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Sr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Sr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && J("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Xf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gg(e, t, n) {
  var r = t.pendingProps;
  switch ((ha(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return Re(t.type) && Yl(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fn(),
        K(Te),
        K(Ae),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (bs(qe), (qe = null)))),
        ws(e, t),
        xe(t),
        null
      );
    case 5:
      Ea(t);
      var l = qt(Rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return xe(t), null;
        }
        if (((e = qt(ct.current)), dl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[st] = t), (r[Or] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < dr.length; l++) J(dr[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              tu(r, o), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              ru(r, o), J("invalid", r);
          }
          $i(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      cl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      cl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Sr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              nl(r), nu(r, o, !0);
              break;
            case "textarea":
              nl(r), lu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $l);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[st] = t),
            (e[Or] = r),
            Yf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Yi(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) J(dr[l], e);
                l = r;
                break;
              case "source":
                J("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (l = r);
                break;
              case "details":
                J("toggle", e), (l = r);
                break;
              case "input":
                tu(e, r), (l = zi(e, r)), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = te({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                ru(e, r), (l = Wi(e, r)), J("invalid", e);
                break;
              default:
                l = r;
            }
            $i(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? jd(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ed(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Er(e, a)
                    : typeof a == "number" && Er(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Sr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && J("scroll", e)
                      : a != null && qs(e, o, a, i));
              }
            switch (n) {
              case "input":
                nl(e), nu(e, r, !1);
                break;
              case "textarea":
                nl(e), lu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Nn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $l);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) Xf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = qt(Rr.current)), qt(ct.current), dl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[st] = t),
            (o = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[st] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (K(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Le !== null && t.mode & 1 && !(t.flags & 128))
          ff(), Ln(), (t.flags |= 98560), (o = !1);
        else if (((o = dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[st] = t;
          } else
            Ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (o = !1);
        } else qe !== null && (bs(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? se === 0 && (se = 3) : Da())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        Fn(), ws(e, t), e === null && _r(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return ya(t.type._context), xe(t), null;
    case 17:
      return Re(t.type) && Yl(), xe(t), null;
    case 19:
      if ((K(q), (o = t.memoizedState), o === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) rr(o, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = eo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    rr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            re() > Bn &&
            ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = eo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              rr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Z)
            )
              return xe(t), null;
          } else
            2 * re() - o.renderingStartTime > Bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = re()),
          (t.sibling = null),
          (n = q.current),
          X(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function vg(e, t) {
  switch ((ha(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && Yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fn(),
        K(Te),
        K(Ae),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ea(t), null;
    case 13:
      if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(q), null;
    case 4:
      return Fn(), null;
    case 10:
      return ya(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hl = !1,
  Ee = !1,
  yg = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function xs(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Yu = !1;
function wg(e, t) {
  if (((rs = Hl), (e = Zd()), fa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            c = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (l !== 0 && d.nodeType !== 3) || (s = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (h = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++c === l && (s = i),
                h === o && ++f === r && (a = i),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = w;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ls = { focusedElem: e, selectionRange: n }, Hl = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    E = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ke(t.type, y),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          ne(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (v = Yu), (Yu = !1), v;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && xs(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ss(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[st], delete t[Or], delete t[ss], delete t[tg], delete t[ng])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Es(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $l));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Es(e, t, n), e = e.sibling; e !== null; ) Es(e, t, n), (e = e.sibling);
}
function As(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), (e = e.sibling);
}
var me = null,
  Ze = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) Zf(e, t, n), (n = n.sibling);
}
function Zf(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || kn(n, t);
    case 6:
      var r = me,
        l = Ze;
      (me = null),
        jt(e, t, n),
        (me = r),
        (Ze = l),
        me !== null &&
          (Ze
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (Ze
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? ai(e.parentNode, n)
              : e.nodeType === 1 && ai(e, n),
            kr(e))
          : ai(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (l = Ze),
        (me = n.stateNode.containerInfo),
        (Ze = !0),
        jt(e, t, n),
        (me = r),
        (Ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && xs(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), jt(e, t, n), (Ee = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function Xu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yg()),
      t.forEach(function (r) {
        var l = Ng.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (me = s.stateNode), (Ze = !1);
              break e;
            case 3:
              (me = s.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (me = s.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          s = s.return;
        }
        if (me === null) throw Error(k(160));
        Zf(o, i, l), (me = null), (Ze = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        ne(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qf(t, e), (t = t.sibling);
}
function qf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), ot(e), r & 4)) {
        try {
          yr(3, e, e.return), Eo(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          yr(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      Je(t, e), ot(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        ot(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Er(l, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && wd(l, o),
              Yi(s, i);
            var c = Yi(s, o);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                d = a[i + 1];
              f === "style"
                ? jd(l, d)
                : f === "dangerouslySetInnerHTML"
                ? Ed(l, d)
                : f === "children"
                ? Er(l, d)
                : qs(l, f, d, c);
            }
            switch (s) {
              case "input":
                Vi(l, o);
                break;
              case "textarea":
                xd(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? Nn(l, !!o.multiple, w, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Nn(l, !!o.multiple, o.defaultValue, !0)
                      : Nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Or] = o;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Je(t, e), ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          kr(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      Je(t, e), ot(e);
      break;
    case 13:
      Je(t, e),
        ot(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ta = re())),
        r & 4 && Xu(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (c = Ee) || f), Je(t, e), (Ee = c)) : Je(t, e),
        ot(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (I = e, f = e.child; f !== null; ) {
            for (d = I = f; I !== null; ) {
              switch (((h = I), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, h, h.return);
                  break;
                case 1:
                  kn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  kn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ku(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (I = w)) : Ku(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Ad("display", i)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), ot(e), r & 4 && Xu(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), ot(e);
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Er(l, ""), (r.flags &= -33));
          var o = Gu(e);
          As(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Gu(e);
          Es(e, s, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xg(e, t, n) {
  (I = e), ep(e);
}
function ep(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var l = I,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || hl;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || Ee;
        s = hl;
        var c = Ee;
        if (((hl = i), (Ee = a) && !c))
          for (I = l; I !== null; )
            (i = I),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Zu(l)
                : a !== null
                ? ((a.return = i), (I = a))
                : Zu(l);
        for (; o !== null; ) (I = o), ep(o), (o = o.sibling);
        (I = l), (hl = s), (Ee = c);
      }
      Ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (I = o)) : Ju(e);
  }
}
function Ju(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ru(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ru(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && kr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Ee || (t.flags & 512 && Ss(t));
      } catch (h) {
        ne(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Ku(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Zu(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Eo(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, l, a);
            }
          }
          var o = t.return;
          try {
            Ss(t);
          } catch (a) {
            ne(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ss(t);
          } catch (a) {
            ne(t, i, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (I = s);
      break;
    }
    I = t.return;
  }
}
var Sg = Math.ceil,
  ro = At.ReactCurrentDispatcher,
  Ca = At.ReactCurrentOwner,
  Qe = At.ReactCurrentBatchConfig,
  H = 0,
  de = null,
  le = null,
  ge = 0,
  De = 0,
  bn = $t(0),
  se = 0,
  Ur = null,
  an = 0,
  Ao = 0,
  Oa = 0,
  wr = null,
  _e = null,
  Ta = 0,
  Bn = 1 / 0,
  pt = null,
  lo = !1,
  js = null,
  Mt = null,
  ml = !1,
  Tt = null,
  oo = 0,
  xr = 0,
  Ps = null,
  Ol = -1,
  Tl = 0;
function ke() {
  return H & 6 ? re() : Ol !== -1 ? Ol : (Ol = re());
}
function Bt(e) {
  return e.mode & 1
    ? H & 2 && ge !== 0
      ? ge & -ge
      : lg.transition !== null
      ? (Tl === 0 && (Tl = Ld()), Tl)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hd(e.type))),
        e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (Ps = null), Error(k(185)));
  Qr(e, n, r),
    (!(H & 2) || e !== de) &&
      (e === de && (!(H & 2) && (Ao |= n), se === 4 && Ct(e, ge)),
      Ie(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Bn = re() + 500), wo && Yt()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  lm(e, t);
  var r = Vl(e, e === de ? ge : 0);
  if (r === 0)
    n !== null && su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && su(n), t === 1))
      e.tag === 0 ? rg(qu.bind(null, e)) : uf(qu.bind(null, e)),
        qm(function () {
          !(H & 6) && Yt();
        }),
        (n = null);
    else {
      switch (Ud(r)) {
        case 1:
          n = la;
          break;
        case 4:
          n = Id;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = Dd;
          break;
        default:
          n = zl;
      }
      n = ap(n, tp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tp(e, t) {
  if (((Ol = -1), (Tl = 0), H & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Rn() && e.callbackNode !== n) return null;
  var r = Vl(e, e === de ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = io(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = rp();
    (de !== e || ge !== t) && ((pt = null), (Bn = re() + 500), tn(e, t));
    do
      try {
        jg();
        break;
      } catch (s) {
        np(e, s);
      }
    while (1);
    va(),
      (ro.current = o),
      (H = l),
      le !== null ? (t = 0) : ((de = null), (ge = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Zi(e)), l !== 0 && ((r = l), (t = ks(e, l)))), t === 1)
    )
      throw ((n = Ur), tn(e, 0), Ct(e, r), Ie(e, re()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Eg(l) &&
          ((t = io(e, r)),
          t === 2 && ((o = Zi(e)), o !== 0 && ((r = o), (t = ks(e, o)))),
          t === 1))
      )
        throw ((n = Ur), tn(e, 0), Ct(e, r), Ie(e, re()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Jt(e, _e, pt);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Ta + 500 - re()), 10 < t))
          ) {
            if (Vl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = is(Jt.bind(null, e, _e, pt), t);
            break;
          }
          Jt(e, _e, pt);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - et(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = is(Jt.bind(null, e, _e, pt), r);
            break;
          }
          Jt(e, _e, pt);
          break;
        case 5:
          Jt(e, _e, pt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ie(e, re()), e.callbackNode === n ? tp.bind(null, e) : null;
}
function ks(e, t) {
  var n = wr;
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = io(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && bs(t)),
    e
  );
}
function bs(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function Eg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ct(e, t) {
  for (
    t &= ~Oa,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qu(e) {
  if (H & 6) throw Error(k(327));
  Rn();
  var t = Vl(e, 0);
  if (!(t & 1)) return Ie(e, re()), null;
  var n = io(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zi(e);
    r !== 0 && ((t = r), (n = ks(e, r)));
  }
  if (n === 1) throw ((n = Ur), tn(e, 0), Ct(e, t), Ie(e, re()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, _e, pt),
    Ie(e, re()),
    null
  );
}
function Ra(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Bn = re() + 500), wo && Yt());
  }
}
function un(e) {
  Tt !== null && Tt.tag === 0 && !(H & 6) && Rn();
  var t = H;
  H |= 1;
  var n = Qe.transition,
    r = $;
  try {
    if (((Qe.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Qe.transition = n), (H = t), !(H & 6) && Yt();
  }
}
function Ia() {
  (De = bn.current), K(bn);
}
function tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zm(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((ha(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yl();
          break;
        case 3:
          Fn(), K(Te), K(Ae), Aa();
          break;
        case 5:
          Ea(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          K(q);
          break;
        case 19:
          K(q);
          break;
        case 10:
          ya(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (le = e = zt(e.current, null)),
    (ge = De = t),
    (se = 0),
    (Ur = null),
    (Oa = Ao = an = 0),
    (_e = wr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function np(e, t) {
  do {
    var n = le;
    try {
      if ((va(), (Nl.current = no), to)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        to = !1;
      }
      if (
        ((sn = 0),
        (ce = ie = ee = null),
        (vr = !1),
        (Ir = 0),
        (Ca.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Ur = t), (le = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = ge),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = Bu(i);
          if (w !== null) {
            (w.flags &= -257),
              zu(w, i, s, o, t),
              w.mode & 1 && Mu(o, c, t),
              (t = w),
              (a = c);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Mu(o, c, t), Da();
              break e;
            }
            a = Error(k(426));
          }
        } else if (Z && s.mode & 1) {
          var E = Bu(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              zu(E, i, s, o, t),
              ma(Mn(a, s));
            break e;
          }
        }
        (o = a = Mn(a, s)),
          se !== 4 && (se = 2),
          wr === null ? (wr = [o]) : wr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Mf(o, a, t);
              Tu(o, m);
              break e;
            case 1:
              s = a;
              var p = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Mt === null || !Mt.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Bf(o, s, t);
                Tu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      op(n);
    } catch (A) {
      (t = A), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function rp() {
  var e = ro.current;
  return (ro.current = no), e === null ? no : e;
}
function Da() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    de === null || (!(an & 268435455) && !(Ao & 268435455)) || Ct(de, ge);
}
function io(e, t) {
  var n = H;
  H |= 2;
  var r = rp();
  (de !== e || ge !== t) && ((pt = null), tn(e, t));
  do
    try {
      Ag();
      break;
    } catch (l) {
      np(e, l);
    }
  while (1);
  if ((va(), (H = n), (ro.current = r), le !== null)) throw Error(k(261));
  return (de = null), (ge = 0), se;
}
function Ag() {
  for (; le !== null; ) lp(le);
}
function jg() {
  for (; le !== null && !Xh(); ) lp(le);
}
function lp(e) {
  var t = sp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? op(e) : (le = t),
    (Ca.current = null);
}
function op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vg(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (le = null);
        return;
      }
    } else if (((n = gg(n, t, De)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Jt(e, t, n) {
  var r = $,
    l = Qe.transition;
  try {
    (Qe.transition = null), ($ = 1), Pg(e, t, n, r);
  } finally {
    (Qe.transition = l), ($ = r);
  }
  return null;
}
function Pg(e, t, n, r) {
  do Rn();
  while (Tt !== null);
  if (H & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (om(e, o),
    e === de && ((le = de = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ml ||
      ((ml = !0),
      ap(zl, function () {
        return Rn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Qe.transition), (Qe.transition = null);
    var i = $;
    $ = 1;
    var s = H;
    (H |= 4),
      (Ca.current = null),
      wg(e, n),
      qf(n, e),
      Qm(ls),
      (Hl = !!rs),
      (ls = rs = null),
      (e.current = n),
      xg(n),
      Jh(),
      (H = s),
      ($ = i),
      (Qe.transition = o);
  } else e.current = n;
  if (
    (ml && ((ml = !1), (Tt = e), (oo = l)),
    (o = e.pendingLanes),
    o === 0 && (Mt = null),
    qh(n.stateNode),
    Ie(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (lo) throw ((lo = !1), (e = js), (js = null), e);
  return (
    oo & 1 && e.tag !== 0 && Rn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ps ? xr++ : ((xr = 0), (Ps = e))) : (xr = 0),
    Yt(),
    null
  );
}
function Rn() {
  if (Tt !== null) {
    var e = Ud(oo),
      t = Qe.transition,
      n = $;
    try {
      if (((Qe.transition = null), ($ = 16 > e ? 16 : e), Tt === null))
        var r = !1;
      else {
        if (((e = Tt), (Tt = null), (oo = 0), H & 6)) throw Error(k(331));
        var l = H;
        for (H |= 4, I = e.current; I !== null; ) {
          var o = I,
            i = o.child;
          if (I.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (I = c; I !== null; ) {
                  var f = I;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (I = d);
                  else
                    for (; I !== null; ) {
                      f = I;
                      var h = f.sibling,
                        w = f.return;
                      if ((Jf(f), f === c)) {
                        I = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (I = h);
                        break;
                      }
                      I = w;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (I = i);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (I = m);
                break e;
              }
              I = o.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          i = I;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (I = g);
          else
            e: for (i = p; I !== null; ) {
              if (((s = I), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(9, s);
                  }
                } catch (A) {
                  ne(s, s.return, A);
                }
              if (s === i) {
                I = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (I = x);
                break e;
              }
              I = s.return;
            }
        }
        if (
          ((H = l), Yt(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Qe.transition = t);
    }
  }
  return !1;
}
function ec(e, t, n) {
  (t = Mn(n, t)),
    (t = Mf(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = ke()),
    e !== null && (Qr(e, 1, t), Ie(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) ec(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ec(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mt === null || !Mt.has(r)))
        ) {
          (e = Mn(n, e)),
            (e = Bf(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = ke()),
            t !== null && (Qr(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ge & n) === n &&
      (se === 4 || (se === 3 && (ge & 130023424) === ge && 500 > re() - Ta)
        ? tn(e, 0)
        : (Oa |= n)),
    Ie(e, t);
}
function ip(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ol), (ol <<= 1), !(ol & 130023424) && (ol = 4194304))
      : (t = 1));
  var n = ke();
  (e = St(e, t)), e !== null && (Qr(e, t, n), Ie(e, n));
}
function bg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ip(e, n);
}
function Ng(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), ip(e, n);
}
var sp;
sp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), mg(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Z && t.flags & 1048576 && cf(t, Jl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var l = Dn(t, Ae.current);
      Tn(t, n), (l = Pa(null, t, r, e, l, n));
      var o = ka();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((o = !0), Gl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            xa(t),
            (l.updater = xo),
            (t.stateNode = l),
            (l._reactInternals = t),
            ps(t, r, e, n),
            (t = gs(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && pa(t), Pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Cg(r)),
          (e = Ke(r, e)),
          l)
        ) {
          case 0:
            t = ms(null, t, r, e, n);
            break e;
          case 1:
            t = Wu(null, t, r, e, n);
            break e;
          case 11:
            t = Vu(null, t, r, e, n);
            break e;
          case 14:
            t = Hu(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        ms(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Wu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          hf(e, t),
          ql(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Mn(Error(k(423)), t)), (t = Qu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Mn(Error(k(424)), t)), (t = Qu(e, t, r, n, l));
            break e;
          } else
            for (
              Le = Ut(t.stateNode.containerInfo.firstChild),
                Ue = t,
                Z = !0,
                qe = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ln(), r === l)) {
            t = Et(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wf(t),
        e === null && cs(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        os(r, l) ? (i = null) : o !== null && os(r, o) && (t.flags |= 32),
        Hf(e, t),
        Pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && cs(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return (
        Sa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Un(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Vu(e, t, r, l, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          X(Kl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (nt(o.value, i)) {
            if (o.children === l.children && !Te.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = vt(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      ds(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  ds(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (l = Ye(l)),
        (r = r(l)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ke(r, t.pendingProps)),
        (l = Ke(r.type, l)),
        Hu(e, t, r, l, n)
      );
    case 15:
      return zf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Cl(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), Gl(t)) : (e = !1),
        Tn(t, n),
        gf(t, r, l),
        ps(t, r, l, n),
        gs(null, t, r, !0, e, n)
      );
    case 19:
      return $f(e, t, n);
    case 22:
      return Vf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function ap(e, t) {
  return Rd(e, t);
}
function _g(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new _g(e, t, n, r);
}
function La(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cg(e) {
  if (typeof e == "function") return La(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ta)) return 11;
    if (e === na) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) La(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case vn:
        return nn(n.children, l, o, t);
      case ea:
        (i = 8), (l |= 8);
        break;
      case Ui:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = Ui), (e.lanes = o), e
        );
      case Fi:
        return (e = We(13, n, t, l)), (e.elementType = Fi), (e.lanes = o), e;
      case Mi:
        return (e = We(19, n, t, l)), (e.elementType = Mi), (e.lanes = o), e;
      case gd:
        return jo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hd:
              i = 10;
              break e;
            case md:
              i = 9;
              break e;
            case ta:
              i = 11;
              break e;
            case na:
              i = 14;
              break e;
            case bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function nn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function jo(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = gd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gi(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Og(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ua(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new Og(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xa(o),
    e
  );
}
function Tg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function up(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return af(e, n, t);
  }
  return t;
}
function cp(e, t, n, r, l, o, i, s, a) {
  return (
    (e = Ua(n, r, !0, e, l, o, i, s, a)),
    (e.context = up(null)),
    (n = e.current),
    (r = ke()),
    (l = Bt(n)),
    (o = vt(r, l)),
    (o.callback = t ?? null),
    Ft(n, o, l),
    (e.current.lanes = l),
    Qr(e, l, r),
    Ie(e, r),
    e
  );
}
function Po(e, t, n, r) {
  var l = t.current,
    o = ke(),
    i = Bt(l);
  return (
    (n = up(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(l, t, i)),
    e !== null && (tt(e, l, i, o), bl(e, l, i)),
    i
  );
}
function so(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fa(e, t) {
  tc(e, t), (e = e.alternate) && tc(e, t);
}
function Rg() {
  return null;
}
var dp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ma(e) {
  this._internalRoot = e;
}
ko.prototype.render = Ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Po(e, t, null, null);
};
ko.prototype.unmount = Ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function () {
      Po(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function ko(e) {
  this._internalRoot = e;
}
ko.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++);
    _t.splice(n, 0, e), n === 0 && Vd(e);
  }
};
function Ba(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function bo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function nc() {}
function Ig(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = so(i);
        o.call(c);
      };
    }
    var i = cp(t, r, e, 0, null, !1, !1, "", nc);
    return (
      (e._reactRootContainer = i),
      (e[xt] = i.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      un(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = so(a);
      s.call(c);
    };
  }
  var a = Ua(e, 0, !1, null, null, !1, !1, "", nc);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    un(function () {
      Po(t, a, n, r);
    }),
    a
  );
}
function No(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = so(i);
        s.call(a);
      };
    }
    Po(t, i, e, l);
  } else i = Ig(n, t, e, l, r);
  return so(i);
}
Fd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 &&
          (oa(t, n | 1), Ie(t, re()), !(H & 6) && ((Bn = re() + 500), Yt()));
      }
      break;
    case 13:
      un(function () {
        var r = St(e, 1);
        if (r !== null) {
          var l = ke();
          tt(r, e, 1, l);
        }
      }),
        Fa(e, 1);
  }
};
ia = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = ke();
      tt(t, e, 134217728, n);
    }
    Fa(e, 134217728);
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = St(e, t);
    if (n !== null) {
      var r = ke();
      tt(n, e, t, r);
    }
    Fa(e, t);
  }
};
Bd = function () {
  return $;
};
zd = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Xi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yo(r);
            if (!l) throw Error(k(90));
            yd(r), Vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      xd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nn(e, !!n.multiple, t, !1);
  }
};
bd = Ra;
Nd = un;
var Dg = { usingClientEntryPoint: !1, Events: [Yr, Sn, yo, Pd, kd, Ra] },
  lr = {
    findFiberByHostInstance: Kt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lg = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Od(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || Rg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gl.isDisabled && gl.supportsFiber)
    try {
      (ho = gl.inject(Lg)), (ut = gl);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ba(t)) throw Error(k(200));
  return Tg(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!Ba(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = dp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ua(e, 1, !1, null, null, n, !1, r, l)),
    (e[xt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Ma(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Od(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return un(e);
};
Me.hydrate = function (e, t, n) {
  if (!bo(t)) throw Error(k(200));
  return No(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!Ba(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = dp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[xt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ko(t);
};
Me.render = function (e, t, n) {
  if (!bo(t)) throw Error(k(200));
  return No(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!bo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (un(function () {
        No(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = Ra;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return No(e, t, n, !1, r);
};
Me.version = "18.2.0-next-9e3b772b8-20220608";
function fp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp);
    } catch (e) {
      console.error(e);
    }
}
fp(), (ud.exports = Me);
var Ug = ud.exports,
  rc = Ug;
(Di.createRoot = rc.createRoot), (Di.hydrateRoot = rc.hydrateRoot);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fr() {
  return (
    (Fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fr.apply(this, arguments)
  );
}
var Rt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rt || (Rt = {}));
const lc = "popstate";
function Fg(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location;
    return Ns(
      "",
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : pp(l);
  }
  return Bg(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function za(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Mg() {
  return Math.random().toString(36).substr(2, 8);
}
function oc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ns(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Qn(t) : t,
      { state: n, key: (t && t.key) || r || Mg() }
    )
  );
}
function pp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Bg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = Rt.Pop,
    a = null,
    c = f();
  c == null && ((c = 0), i.replaceState(Fr({}, i.state, { idx: c }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    s = Rt.Pop;
    let E = f(),
      m = E == null ? null : E - c;
    (c = E), a && a({ action: s, location: y.location, delta: m });
  }
  function h(E, m) {
    s = Rt.Push;
    let p = Ns(y.location, E, m);
    n && n(p, E), (c = f() + 1);
    let g = oc(p, c),
      x = y.createHref(p);
    try {
      i.pushState(g, "", x);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      l.location.assign(x);
    }
    o && a && a({ action: s, location: y.location, delta: 1 });
  }
  function w(E, m) {
    s = Rt.Replace;
    let p = Ns(y.location, E, m);
    n && n(p, E), (c = f());
    let g = oc(p, c),
      x = y.createHref(p);
    i.replaceState(g, "", x),
      o && a && a({ action: s, location: y.location, delta: 0 });
  }
  function v(E) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      p = typeof E == "string" ? E : pp(E);
    return (
      ae(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(l, i);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(lc, d),
        (a = E),
        () => {
          l.removeEventListener(lc, d), (a = null);
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: v,
    encodeLocation(E) {
      let m = v(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: w,
    go(E) {
      return i.go(E);
    },
  };
  return y;
}
var ic;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ic || (ic = {}));
function zg(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Qn(t) : t,
    l = gp(r.pathname || "/", n);
  if (l == null) return null;
  let o = hp(e);
  Vg(o);
  let i = null;
  for (let s = 0; i == null && s < o.length; ++s) i = Kg(o[s], e0(l));
  return i;
}
function hp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (ae(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = rn([r, a.relativePath]),
      f = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (ae(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      hp(o.children, t, f, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: Xg(c, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) l(o, i);
      else for (let a of mp(o.path)) l(o, i, a);
    }),
    t
  );
}
function mp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = mp(r.join("/")),
    s = [];
  return (
    s.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && s.push(...i),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Vg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Jg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Hg = /^:\w+$/,
  Wg = 3,
  Qg = 2,
  $g = 1,
  Yg = 10,
  Gg = -2,
  sc = (e) => e === "*";
function Xg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(sc) && (r += Gg),
    t && (r += Qg),
    n
      .filter((l) => !sc(l))
      .reduce((l, o) => l + (Hg.test(o) ? Wg : o === "" ? $g : Yg), r)
  );
}
function Jg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Kg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let s = n[i],
      a = i === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      f = Zg(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        c
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = s.route;
    o.push({
      params: r,
      pathname: rn([l, f.pathname]),
      pathnameBase: i0(rn([l, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (l = rn([l, f.pathnameBase]));
  }
  return o;
}
function Zg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = qg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((c, f, d) => {
      let { paramName: h, isOptional: w } = f;
      if (h === "*") {
        let y = s[d] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = s[d];
      return w && !v ? (c[h] = void 0) : (c[h] = t0(v || "", h)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function qg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    za(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function e0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      za(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function t0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      za(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function gp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function n0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Qn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : r0(n, t)) : t,
    search: s0(r),
    hash: a0(l),
  };
}
function r0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function l0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function o0(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Qn(e))
    : ((l = Fr({}, e)),
      ae(
        !l.pathname || !l.pathname.includes("?"),
        yi("?", "pathname", "search", l)
      ),
      ae(
        !l.pathname || !l.pathname.includes("#"),
        yi("#", "pathname", "hash", l)
      ),
      ae(!l.search || !l.search.includes("#"), yi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    s;
  if (r || i == null) s = n;
  else {
    let d = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      l.pathname = h.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = n0(l, s),
    c = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || f) && (a.pathname += "/"), a;
}
const rn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  i0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  s0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  a0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function u0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const vp = ["post", "put", "patch", "delete"];
new Set(vp);
const c0 = ["get", ...vp];
new Set(c0);
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ao() {
  return (
    (ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ao.apply(this, arguments)
  );
}
const Va = j.createContext(null),
  d0 = j.createContext(null),
  _o = j.createContext(null),
  Co = j.createContext(null),
  $n = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  yp = j.createContext(null);
function Oo() {
  return j.useContext(Co) != null;
}
function wp() {
  return Oo() || ae(!1), j.useContext(Co).location;
}
function xp(e) {
  j.useContext(_o).static || j.useLayoutEffect(e);
}
function Xr() {
  let { isDataRoute: e } = j.useContext($n);
  return e ? j0() : f0();
}
function f0() {
  Oo() || ae(!1);
  let e = j.useContext(Va),
    { basename: t, navigator: n } = j.useContext(_o),
    { matches: r } = j.useContext($n),
    { pathname: l } = wp(),
    o = JSON.stringify(l0(r).map((a) => a.pathnameBase)),
    i = j.useRef(!1);
  return (
    xp(() => {
      i.current = !0;
    }),
    j.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let f = o0(a, JSON.parse(o), l, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : rn([t, f.pathname])),
          (c.replace ? n.replace : n.push)(f, c.state, c);
      },
      [t, n, o, l, e]
    )
  );
}
function p0(e, t) {
  return h0(e, t);
}
function h0(e, t, n) {
  Oo() || ae(!1);
  let { navigator: r } = j.useContext(_o),
    { matches: l } = j.useContext($n),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = wp(),
    c;
  if (t) {
    var f;
    let y = typeof t == "string" ? Qn(t) : t;
    s === "/" || ((f = y.pathname) != null && f.startsWith(s)) || ae(!1),
      (c = y);
  } else c = a;
  let d = c.pathname || "/",
    h = s === "/" ? d : d.slice(s.length) || "/",
    w = zg(e, { pathname: h }),
    v = w0(
      w &&
        w.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: rn([
              s,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? s
                : rn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && v
    ? j.createElement(
        Co.Provider,
        {
          value: {
            location: ao(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Rt.Pop,
          },
        },
        v
      )
    : v;
}
function m0() {
  let e = A0(),
    t = u0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: l }, n) : null,
    o
  );
}
const g0 = j.createElement(m0, null);
class v0 extends j.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? j.createElement(
          $n.Provider,
          { value: this.props.routeContext },
          j.createElement(yp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function y0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = j.useContext(Va);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement($n.Provider, { value: t }, r)
  );
}
function w0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let s = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    s >= 0 || ae(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, a, c) => {
    let f = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      d = null;
    n && (d = a.route.errorElement || g0);
    let h = t.concat(o.slice(0, c + 1)),
      w = () => {
        let v;
        return (
          f
            ? (v = d)
            : a.route.Component
            ? (v = j.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = s),
          j.createElement(y0, {
            match: a,
            routeContext: { outlet: s, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || c === 0)
      ? j.createElement(v0, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: f,
          children: w(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : w();
  }, null);
}
var Sp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Sp || {}),
  uo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(uo || {});
function x0(e) {
  let t = j.useContext(Va);
  return t || ae(!1), t;
}
function S0(e) {
  let t = j.useContext(d0);
  return t || ae(!1), t;
}
function E0(e) {
  let t = j.useContext($n);
  return t || ae(!1), t;
}
function Ep(e) {
  let t = E0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ae(!1), n.route.id;
}
function A0() {
  var e;
  let t = j.useContext(yp),
    n = S0(uo.UseRouteError),
    r = Ep(uo.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function j0() {
  let { router: e } = x0(Sp.UseNavigateStable),
    t = Ep(uo.UseNavigateStable),
    n = j.useRef(!1);
  return (
    xp(() => {
      n.current = !0;
    }),
    j.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, ao({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function kt(e) {
  ae(!1);
}
function P0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Rt.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Oo() && ae(!1);
  let s = t.replace(/^\/*/, "/"),
    a = j.useMemo(() => ({ basename: s, navigator: o, static: i }), [s, o, i]);
  typeof r == "string" && (r = Qn(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: h = null,
      key: w = "default",
    } = r,
    v = j.useMemo(() => {
      let y = gp(c, s);
      return y == null
        ? null
        : {
            location: { pathname: y, search: f, hash: d, state: h, key: w },
            navigationType: l,
          };
    }, [s, c, f, d, h, w, l]);
  return v == null
    ? null
    : j.createElement(
        _o.Provider,
        { value: a },
        j.createElement(Co.Provider, { children: n, value: v })
      );
}
function k0(e) {
  let { children: t, location: n } = e;
  return p0(_s(t), n);
}
new Promise(() => {});
function _s(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, l) => {
      if (!j.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === j.Fragment) {
        n.push.apply(n, _s(r.props.children, o));
        return;
      }
      r.type !== kt && ae(!1), !r.props.index || !r.props.children || ae(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = _s(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const b0 = "startTransition",
  ac = bh[b0];
function N0(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = j.useRef();
  o.current == null && (o.current = Fg({ window: l, v5Compat: !0 }));
  let i = o.current,
    [s, a] = j.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    f = j.useCallback(
      (d) => {
        c && ac ? ac(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    j.useLayoutEffect(() => i.listen(f), [i, f]),
    j.createElement(P0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
var uc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(uc || (uc = {}));
var cc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(cc || (cc = {}));
function Ap(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: _0 } = Object.prototype,
  { getPrototypeOf: Ha } = Object,
  To = ((e) => (t) => {
    const n = _0.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  dt = (e) => ((e = e.toLowerCase()), (t) => To(t) === e),
  Ro = (e) => (t) => typeof t === e,
  { isArray: Yn } = Array,
  Mr = Ro("undefined");
function C0(e) {
  return (
    e !== null &&
    !Mr(e) &&
    e.constructor !== null &&
    !Mr(e.constructor) &&
    $e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const jp = dt("ArrayBuffer");
function O0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && jp(e.buffer)),
    t
  );
}
const T0 = Ro("string"),
  $e = Ro("function"),
  Pp = Ro("number"),
  Io = (e) => e !== null && typeof e == "object",
  R0 = (e) => e === !0 || e === !1,
  Il = (e) => {
    if (To(e) !== "object") return !1;
    const t = Ha(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  I0 = dt("Date"),
  D0 = dt("File"),
  L0 = dt("Blob"),
  U0 = dt("FileList"),
  F0 = (e) => Io(e) && $e(e.pipe),
  M0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ($e(e.append) &&
          ((t = To(e)) === "formdata" ||
            (t === "object" &&
              $e(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  B0 = dt("URLSearchParams"),
  z0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Yn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function kp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const bp = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Np = (e) => !Mr(e) && e !== bp;
function Cs() {
  const { caseless: e } = (Np(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && kp(t, l)) || l;
      Il(t[o]) && Il(r)
        ? (t[o] = Cs(t[o], r))
        : Il(r)
        ? (t[o] = Cs({}, r))
        : Yn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Jr(arguments[r], n);
  return t;
}
const V0 = (e, t, n, { allOwnKeys: r } = {}) => (
    Jr(
      t,
      (l, o) => {
        n && $e(l) ? (e[o] = Ap(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  H0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  W0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Q0 = (e, t, n, r) => {
    let l, o, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && Ha(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  $0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Y0 = (e) => {
    if (!e) return null;
    if (Yn(e)) return e;
    let t = e.length;
    if (!Pp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  G0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ha(Uint8Array)),
  X0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  J0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  K0 = dt("HTMLFormElement"),
  Z0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  dc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  q0 = dt("RegExp"),
  _p = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Jr(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  ev = (e) => {
    _p(e, (t, n) => {
      if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if ($e(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  tv = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Yn(e) ? r(e) : r(String(e).split(t)), n;
  },
  nv = () => {},
  rv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  wi = "abcdefghijklmnopqrstuvwxyz",
  fc = "0123456789",
  Cp = { DIGIT: fc, ALPHA: wi, ALPHA_DIGIT: wi + wi.toUpperCase() + fc },
  lv = (e = 16, t = Cp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function ov(e) {
  return !!(
    e &&
    $e(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const iv = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Io(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Yn(r) ? [] : {};
            return (
              Jr(r, (i, s) => {
                const a = n(i, l + 1);
                !Mr(a) && (o[s] = a);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  sv = dt("AsyncFunction"),
  av = (e) => e && (Io(e) || $e(e)) && $e(e.then) && $e(e.catch),
  S = {
    isArray: Yn,
    isArrayBuffer: jp,
    isBuffer: C0,
    isFormData: M0,
    isArrayBufferView: O0,
    isString: T0,
    isNumber: Pp,
    isBoolean: R0,
    isObject: Io,
    isPlainObject: Il,
    isUndefined: Mr,
    isDate: I0,
    isFile: D0,
    isBlob: L0,
    isRegExp: q0,
    isFunction: $e,
    isStream: F0,
    isURLSearchParams: B0,
    isTypedArray: G0,
    isFileList: U0,
    forEach: Jr,
    merge: Cs,
    extend: V0,
    trim: z0,
    stripBOM: H0,
    inherits: W0,
    toFlatObject: Q0,
    kindOf: To,
    kindOfTest: dt,
    endsWith: $0,
    toArray: Y0,
    forEachEntry: X0,
    matchAll: J0,
    isHTMLForm: K0,
    hasOwnProperty: dc,
    hasOwnProp: dc,
    reduceDescriptors: _p,
    freezeMethods: ev,
    toObjectSet: tv,
    toCamelCase: Z0,
    noop: nv,
    toFiniteNumber: rv,
    findKey: kp,
    global: bp,
    isContextDefined: Np,
    ALPHABET: Cp,
    generateString: lv,
    isSpecCompliantForm: ov,
    toJSONObject: iv,
    isAsyncFn: sv,
    isThenable: av,
  };
function V(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
S.inherits(V, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Op = V.prototype,
  Tp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Tp[e] = { value: e };
});
Object.defineProperties(V, Tp);
Object.defineProperty(Op, "isAxiosError", { value: !0 });
V.from = (e, t, n, r, l, o) => {
  const i = Object.create(Op);
  return (
    S.toFlatObject(
      e,
      i,
      function (a) {
        return a !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    V.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const uv = null;
function Os(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Rp(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = Rp(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function cv(e) {
  return S.isArray(e) && !e.some(Os);
}
const dv = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Do(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, E) {
        return !S.isUndefined(E[y]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || f,
    o = n.dots,
    i = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(l)) throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (S.isDate(v)) return v.toISOString();
    if (!a && S.isBlob(v))
      throw new V("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(v) || S.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function f(v, y, E) {
    let m = v;
    if (v && !E && typeof v == "object") {
      if (S.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (S.isArray(v) && cv(v)) ||
        ((S.isFileList(v) || S.endsWith(y, "[]")) && (m = S.toArray(v)))
      )
        return (
          (y = Rp(y)),
          m.forEach(function (g, x) {
            !(S.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? pc([y], x, o) : i === null ? y : y + "[]",
                c(g)
              );
          }),
          !1
        );
    }
    return Os(v) ? !0 : (t.append(pc(E, y, o), c(v)), !1);
  }
  const d = [],
    h = Object.assign(dv, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: Os,
    });
  function w(v, y) {
    if (!S.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v),
        S.forEach(v, function (m, p) {
          (!(S.isUndefined(m) || m === null) &&
            l.call(t, m, S.isString(p) ? p.trim() : p, y, h)) === !0 &&
            w(m, y ? y.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function hc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Wa(e, t) {
  (this._pairs = []), e && Do(e, this, t);
}
const Ip = Wa.prototype;
Ip.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ip.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, hc);
      }
    : hc;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function fv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Dp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || fv,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new Wa(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class pv {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const mc = pv,
  Lp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  hv = typeof URLSearchParams < "u" ? URLSearchParams : Wa,
  mv = typeof FormData < "u" ? FormData : null,
  gv = typeof Blob < "u" ? Blob : null,
  vv = {
    isBrowser: !0,
    classes: { URLSearchParams: hv, FormData: mv, Blob: gv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Up = typeof window < "u" && typeof document < "u",
  yv = ((e) => Up && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  wv = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  xv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Up,
        hasStandardBrowserEnv: yv,
        hasStandardBrowserWebWorkerEnv: wv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  at = { ...xv, ...vv };
function Sv(e, t) {
  return Do(
    e,
    new at.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return at.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ev(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Av(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Fp(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    const s = Number.isFinite(+i),
      a = o >= n.length;
    return (
      (i = !i && S.isArray(l) ? l.length : i),
      a
        ? (S.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !s)
        : ((!l[i] || !S.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && S.isArray(l[i]) && (l[i] = Av(l[i])),
          !s)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, l) => {
        t(Ev(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function jv(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Qa = {
  transitional: Lp,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return l && l ? JSON.stringify(Fp(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Sv(t, this.formSerializer).toString();
        if ((s = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Do(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), jv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Qa.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && S.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? V.from(s, V.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: at.classes.FormData, Blob: at.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Qa.headers[e] = {};
});
const $a = Qa,
  Pv = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kv = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && Pv[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  gc = Symbol("internals");
function or(e) {
  return e && String(e).trim().toLowerCase();
}
function Dl(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Dl) : String(e);
}
function bv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Nv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xi(e, t, n, r, l) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function _v(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cv(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class Lo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(s, a, c) {
      const f = or(a);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = S.findKey(l, f);
      (!d || l[d] === void 0 || c === !0 || (c === void 0 && l[d] !== !1)) &&
        (l[d || a] = Dl(s));
    }
    const i = (s, a) => S.forEach(s, (c, f) => o(c, f, a));
    return (
      S.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : S.isString(t) && (t = t.trim()) && !Nv(t)
        ? i(kv(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = or(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return bv(l);
        if (S.isFunction(n)) return n.call(this, l, r);
        if (S.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = or(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || xi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = or(i)), i)) {
        const s = S.findKey(r, i);
        s && (!n || xi(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || xi(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (l, o) => {
        const i = S.findKey(r, o);
        if (i) {
          (n[i] = Dl(l)), delete n[o];
          return;
        }
        const s = t ? _v(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = Dl(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[gc] = this[gc] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const s = or(i);
      r[s] || (Cv(l, i), (r[s] = !0));
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Lo.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(Lo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(Lo);
const yt = Lo;
function Si(e, t) {
  const n = this || $a,
    r = t || n,
    l = yt.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (s) {
      o = s.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function Mp(e) {
  return !!(e && e.__CANCEL__);
}
function Kr(e, t, n) {
  V.call(this, e ?? "canceled", V.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(Kr, V, { __CANCEL__: !0 });
function Ov(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new V(
          "Request failed with status code " + n.status,
          [V.ERR_BAD_REQUEST, V.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Tv = at.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, l, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        S.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          S.isString(r) && i.push("path=" + r),
          S.isString(l) && i.push("domain=" + l),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Rv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Iv(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Bp(e, t) {
  return e && !Rv(t) ? Iv(e, t) : t;
}
const Dv = at.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (i) {
          const s = S.isString(i) ? l(i) : i;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Lv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Uv(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const c = Date.now(),
        f = r[o];
      i || (i = c), (n[l] = a), (r[l] = c);
      let d = o,
        h = 0;
      for (; d !== l; ) (h += n[d++]), (d = d % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), c - i < t)) return;
      const w = f && c - f;
      return w ? Math.round((h * 1e3) / w) : void 0;
    }
  );
}
function vc(e, t) {
  let n = 0;
  const r = Uv(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      s = o - n,
      a = r(s),
      c = o <= i;
    n = o;
    const f = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && i && c ? (i - o) / a : void 0,
      event: l,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const Fv = typeof XMLHttpRequest < "u",
  Mv =
    Fv &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const o = yt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: s } = e,
          a;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        let f;
        if (S.isFormData(l)) {
          if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((f = o.getContentType()) !== !1) {
            const [y, ...E] = f
              ? f
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([y || "multipart/form-data", ...E].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            E = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(y + ":" + E));
        }
        const h = Bp(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), Dp(h, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function w() {
          if (!d) return;
          const y = yt.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            m = {
              data:
                !i || i === "text" || i === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: y,
              config: e,
              request: d,
            };
          Ov(
            function (g) {
              n(g), c();
            },
            function (g) {
              r(g), c();
            },
            m
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = w)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (d.onabort = function () {
            d &&
              (r(new V("Request aborted", V.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new V("Network Error", V.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let E = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || Lp;
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(
                new V(
                  E,
                  m.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          at.hasStandardBrowserEnv &&
            (s && S.isFunction(s) && (s = s(e)), s || (s !== !1 && Dv(h))))
        ) {
          const y =
            e.xsrfHeaderName && e.xsrfCookieName && Tv.read(e.xsrfCookieName);
          y && o.set(e.xsrfHeaderName, y);
        }
        l === void 0 && o.setContentType(null),
          "setRequestHeader" in d &&
            S.forEach(o.toJSON(), function (E, m) {
              d.setRequestHeader(m, E);
            }),
          S.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          i && i !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", vc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", vc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (y) => {
              d &&
                (r(!y || y.type ? new Kr(null, e, d) : y),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const v = Lv(h);
        if (v && at.protocols.indexOf(v) === -1) {
          r(new V("Unsupported protocol " + v + ":", V.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(l || null);
      });
    },
  Ts = { http: uv, xhr: Mv };
S.forEach(Ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yc = (e) => `- ${e}`,
  Bv = (e) => S.isFunction(e) || e === null || e === !1,
  zp = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Bv(n) && ((r = Ts[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new V(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([s, a]) =>
            `adapter ${s} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(yc).join(`
`)
            : " " + yc(o[0])
          : "as no adapter specified";
        throw new V(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ts,
  };
function Ei(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Kr(null, e);
}
function wc(e) {
  return (
    Ei(e),
    (e.headers = yt.from(e.headers)),
    (e.data = Si.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    zp
      .getAdapter(e.adapter || $a.adapter)(e)
      .then(
        function (r) {
          return (
            Ei(e),
            (r.data = Si.call(e, e.transformResponse, r)),
            (r.headers = yt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Mp(r) ||
              (Ei(e),
              r &&
                r.response &&
                ((r.response.data = Si.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = yt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const xc = (e) => (e instanceof yt ? e.toJSON() : e);
function zn(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, d) {
    return S.isPlainObject(c) && S.isPlainObject(f)
      ? S.merge.call({ caseless: d }, c, f)
      : S.isPlainObject(f)
      ? S.merge({}, f)
      : S.isArray(f)
      ? f.slice()
      : f;
  }
  function l(c, f, d) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, f, d);
  }
  function o(c, f) {
    if (!S.isUndefined(f)) return r(void 0, f);
  }
  function i(c, f) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, f);
  }
  function s(c, f, d) {
    if (d in t) return r(c, f);
    if (d in e) return r(void 0, c);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (c, f) => l(xc(c), xc(f), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = a[f] || l,
        h = d(e[f], t[f], f);
      (S.isUndefined(h) && d !== s) || (n[f] = h);
    }),
    n
  );
}
const Vp = "1.6.2",
  Ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ya[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Sc = {};
Ya.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Vp +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, s) => {
    if (t === !1)
      throw new V(
        l(i, " has been removed" + (n ? " in " + n : "")),
        V.ERR_DEPRECATED
      );
    return (
      n &&
        !Sc[i] &&
        ((Sc[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, s) : !0
    );
  };
};
function zv(e, t, n) {
  if (typeof e != "object")
    throw new V("options must be an object", V.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const s = e[o],
        a = s === void 0 || i(s, o, e);
      if (a !== !0)
        throw new V("option " + o + " must be " + a, V.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new V("Unknown option " + o, V.ERR_BAD_OPTION);
  }
}
const Rs = { assertOptions: zv, validators: Ya },
  Pt = Rs.validators;
class co {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new mc(), response: new mc() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = zn(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Rs.assertOptions(
        r,
        {
          silentJSONParsing: Pt.transitional(Pt.boolean),
          forcedJSONParsing: Pt.transitional(Pt.boolean),
          clarifyTimeoutError: Pt.transitional(Pt.boolean),
        },
        !1
      ),
      l != null &&
        (S.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Rs.assertOptions(
              l,
              { encode: Pt.function, serialize: Pt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && S.merge(o.common, o[n.method]);
    o &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete o[v];
        }
      ),
      (n.headers = yt.concat(i, o));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), s.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (y) {
      c.push(y.fulfilled, y.rejected);
    });
    let f,
      d = 0,
      h;
    if (!a) {
      const v = [wc.bind(this), void 0];
      for (
        v.unshift.apply(v, s),
          v.push.apply(v, c),
          h = v.length,
          f = Promise.resolve(n);
        d < h;

      )
        f = f.then(v[d++], v[d++]);
      return f;
    }
    h = s.length;
    let w = n;
    for (d = 0; d < h; ) {
      const v = s[d++],
        y = s[d++];
      try {
        w = v(w);
      } catch (E) {
        y.call(this, E);
        break;
      }
    }
    try {
      f = wc.call(this, w);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = c.length; d < h; ) f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = zn(this.defaults, t);
    const n = Bp(t.baseURL, t.url);
    return Dp(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  co.prototype[t] = function (n, r) {
    return this.request(
      zn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, s) {
      return this.request(
        zn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (co.prototype[t] = n()), (co.prototype[t + "Form"] = n(!0));
});
const Ll = co;
class Ga {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, s) {
        r.reason || ((r.reason = new Kr(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Ga(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const Vv = Ga;
function Hv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Wv(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Is = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Is).forEach(([e, t]) => {
  Is[t] = e;
});
const Qv = Is;
function Hp(e) {
  const t = new Ll(e),
    n = Ap(Ll.prototype.request, t);
  return (
    S.extend(n, Ll.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Hp(zn(e, l));
    }),
    n
  );
}
const oe = Hp($a);
oe.Axios = Ll;
oe.CanceledError = Kr;
oe.CancelToken = Vv;
oe.isCancel = Mp;
oe.VERSION = Vp;
oe.toFormData = Do;
oe.AxiosError = V;
oe.Cancel = oe.CanceledError;
oe.all = function (t) {
  return Promise.all(t);
};
oe.spread = Hv;
oe.isAxiosError = Wv;
oe.mergeConfig = zn;
oe.AxiosHeaders = yt;
oe.formToJSON = (e) => Fp(S.isHTMLForm(e) ? new FormData(e) : e);
oe.getAdapter = zp.getAdapter;
oe.HttpStatusCode = Qv;
oe.default = oe;
const Oe = oe,
  Wp = "/static/assets/Login-c60cb000.png";
const Qp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHZSURBVHgBtVVLTsMwEH3jpHwkJExPELasuAFlxwKqcgJAYgMIUU4AnICyQIUVnAAVARLLcoOyQ2woFwBLLFr148GhotRp0qI0fVIU2xPPs2fmTQgxsJYucu88pVPejdp+D/tWIAE0UJuPsiVCQOQeYZwEIGSy8nJjfAQGLPR1Nl086ueOgWCSA6iCqcLMZ/dqp+wieXggNo9+NuNyQiFiFWWJvEFGXskZp5YhFkusm7f3ar8c6USLTAt62ZTTgQm6N5QgKy8OWNSOTSylOR20I54xAARX3antghkWcvJ8sQXyXD8XYQQmgVcM3oyZf5TUXsW8Kr9zKwfZ9MWpeW0iQXRvsCKLnjl53jazYtDZRFuUERNdgpSALRJG1WFaLqmdKkaA+PNHiwGCk1GdWwQEtgi+MFVCAuhJsi2WNNqzYRty8lQiDgGTqPQamqKRD9ugMR3smirqZ2MRgPnJNlE+2B07AuRCwMfAUHbV5F+9LSbfzFIgBH6piipBe/02wNGYH1QM3RuU1KFiTeshZ5CdAuh3rsGHwyrNUrLfv1nzuq8BDAQr3/nDx24BQ+AEF17rDy8LU6u3mniO/GZHkL2OjV4uXU1bd5+7j/gHhna0nGnbQP2HJI7wvgEgs6/BEmiN8wAAAABJRU5ErkJggg==",
  $p =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF0SURBVHgB7VYxTsMwFH3f7cKAZJUD0CNwg2ZkaKGcAGVsOwROQHsDWGiZKDeoRIXYKDeAExAOQOuRgfjzXdoqSRGoSiIWnmTZjp33YvvlyXSgBwEr2wVII3fwKTUqfUZxMArFQq8JyHJ6EVmfwTfIAeUU/fl42u4uOsP6zmCXmD1kQGIFbPGY1LOvyIiEACk6XLb3db9KoBoyYt1FjAmIQsA287BueV0S3vyopfEz2DCrUPbAwEIT8d6vAgzbG0873WVfVvciVdW56u6tM3TP6rrvCVlQ4i1/ZHyznNuULY0ID/Jd1Tjnxv/BBxDeztpHcXKHkWmFzPDT8zcWuBciV3v6WrsSHxub1oRBT5kEHOqVq7Nt9T5zpVG5PEmO2ufMAoRoRSrbcpwaNZkE3GHG7UuUtrLNJrAp/gX+XiAZdhJ0THYV2ZKmwdwxTCOmaOFvpSWlghiHkYi5WL3DqvaVZ98JFADlUhEFQsGWeigEbKxcWz4BcaKEvn+60bUAAAAASUVORK5CYII=",
  Yp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMwSURBVHgBpVZdTttAEJ5Zu/y0EtrCAWpOQHoCzFtVJST0AkmeEPSB9ATACQgPEFpVIjlBTcND30hukJ6g4QBFriqVX+90dtc2UYgTBN+LvTvrb2bn1wgD8OWxnBNXW0TgA4IHQBIAJYwFhXwmBII+IJ3cKgx+hBv9RIrJy6o82iKhdiYTTgQrpN32xWY9VVBYOKgAiePEIgJsKVQ9EaG1bgKUozxB6CPhsr05f6VE5Xu43sJ3suG9EHDGex4BtVw1WwvC6kTSUSjJPXknpusIWNY3+atmFt0XjvLZek/70KWnkecXDktIonijov0pdV2LxHRRu/qVuKwIAkdrA0I4earl7JpvzFBxUOwF4SfjYr2v3eYikWdOKepkEZgYKVFmphxYa3ogoNX+vdG0a51B7Hvkp9XY4TNbvF5y41Tk3eiB9To+rmDriIlNOsRJh5zGnMqF+cb2rYIVh2AFSMkg/Ngzcp0cwh51x6WlDX58Q4BmhKor7MelOJDGgFBNr3TCan8Ehecmb1Mw++uBW8imnKPU29Q6i6AkD+qRwDO+U25O/Kvx3k4iZNJ+FL8LyAKJbesNtTtEbjXwHgdz3xwFUc6iGalA57O+njmgRDPrY1dBIvM+yK9vHq0AYEbeW3rfV4YxTjZBwVWaUVmWabyXX3LJ+wU4fx6twBSLznXGnbiuQgYcoWyREvU6GUWaGWSuTlONHMDtwvxhbVi+Kj8zOdXis/uDshtwUhe795uXi/w4T9btcL2eXzgqcqX7TLFXeH3EnVJ1jZCwSMg9zFgPndMwrujU6mhQgRkYI4vNjS7X0u6IVOJzJXs9K9fkLs2sQTb6btzvpXK4ow5Bx4Iflbw8DHT1cm0sGX6EHilqseWdkbQOtx/unhyb0DWNC4kHhshlmXEabgZaHzwSHJOieQKeC25SXbuAsm5u8EzEHL5ZEATCgeumjQNI3bieoyTtvroLcAtvc/BNuPKy4aMdmxaEAWH0k68YRkhjh5BDKHnUSp5oy3Ze2IQhbuM6RulfhVGCcJwM7SeDLefsqiYJgMPygmxUOE2KJECCAolIE39jCLGPTBxh1J2KXgaDo/c/jFxlTMf8ursAAAAASUVORK5CYII=",
  Gp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBxVbBbtNAEJ0ZO0jhtGp/wEdulC+ouaEoJekfJBIHjITaP2h74wYRKilcan4AoiZI3JL8ga+cCD+QLBdAot1h7NbFbtZOSJD6pCjZfbPv7ezM2kEoQVMdbxmiBjP4gODJlHfJsAbGiNGMzw2Fn3UwKdJA22RNhB2kl8L6sBzC3waObEZzBo/VyR4Tv4IVIGKHZ9PgKDvnZAf1jbcHgPwCVod/r1qHLz8/jTOmf8URzGH5etYM+N6giegCtSzXxjGeY5yGbKwJlkwSg0eq61UIvpZrc8/harun2/omVds8bjlMp7lwc/5woJ+PKB64hB/LxWFSJF4ERPcg0a6rro/AW2XBBrnTn+XFfXWq7sIPj8AoZOd+vIu8A/h19dp3gaAJi3ZjLqLs+PJIfw0ByJMPzImnILcpLG7DAtyBaq4+LpkWXF+6EjBvk3TO4sAVgYieK1/KykphJWIU/5yC8z3HGTcC4jAz0SzQUbiz8WZWQIb9adCGJVDfPBkis2/j4hos3XpFKBJn5ogYeAxroKbeFba41CDC5B4QDC3+Os2uYir+B/3kW8rIse4Lt5cJ9mwGbHiXBjoYJQWd91dXC+cWS9ZZzioeaw70s17yqJAXylLF/CcwJA+7xCDOQu5iB/4TYq2+DsJrg8RkGuyjvAZhTbBoxFrpmLLk2ezpg3UyidcORCM7RzeDEncjNbEWvlB5woZ2sztP4drir84v3FHdljRzA+yq8s+CRnKZOkkn3hb+ANMs4l607y8OAAAAAElFTkSuQmCC",
  Xp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFOSURBVHgB7ZQ/TgJREMa/mbVQC/MSL7A21hwBejTeACmJJthagUewINqpnSWRYKvcwNpqTyCvUgqYcXYTE9DExxJeY/wlm/03+36bzPcG+CcAfV1U3Y3bxnvKEIckcQJ134tZkeZnIWQ/3s2keCZg/+hPXhYEh+66rSxdu3VY3593H95aF1R3V1ViPCECKtMa2+INRIJ4o8FKlCISqlphUk3DlXi2I0NJiMixndNQoZKMBuPWnkWkWVJUCJZm4Fu3JUXlBPOiRFFT4DJUu5Ig35Ri6SNoMIEbKEG+8A5P2oqPMy02JQW/MYH6ZXbwwW7vGDrpaBGK8MJzAjIBfhUQuGNNXYXM5lchiIMlzZqsI8SCcoGgj0jYsLtLXifDbH+rTpTPesKaxrV6Ac6H49P7hTgcuV5lCi4kkkiKEvAs7yV5S00GbPq+b8br7d/iE5K3dBwkLnHsAAAAAElFTkSuQmCC",
  Jp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgB7VVdTsJAEJ7ZYtRo4qIXqDfgCPXNGEjKCcQ30ZjICYwnMMYoxhfwBNbAu9xAbwAXQDbRRB9gx9k2FArlT+uDid/LNvvN7DezM50F+OvASYQjK3Id3jNgWbLePvLibLLyxgXoqbo6acwtkJVXDmLqDJAyTEuzR7q7oy1h920EoPKdCR9CR0IPBD3W2sXqRIHcZrnCSwF+AhaqdQ7zYwK5resCkKhAAjAZ969NDHbFGSQEFKkwUF/Ajx7AhuRgm1qGAgTWPiQMv1HMuivL9pKAZrwZqX4nfYd/0ytpsWRpJ9YV4NLSq9u11yKa70V5gzXxUcBc+vaBG9od4RQ7poc3cps3naFoI7wrL2RPLDdjsqkKwtjiqvEtVJN4T5XUCO+DiDICQdvjhw26wMDUCaJdNosPQkK0kf9egni0OIZLBNwgoNOY9GfxgcgUgUQgglb7RQECHG8xggYh5UFTiRAb8UGQIrYLbCjP57yMWnB9z/1h53KRuhZWkMiJHDE0tFx+HwA+w3v2VLFl1j15l7FE7znix8Ip0iVPHb9ExnVWlh3OqcCFM6Ojyr1+AHMgu3X7hKT5/RAeabqvq2JjqoOJNoh4fixq/48QXySGv6K3sk7lAAAAAElFTkSuQmCC",
  $v = "/static/assets/Logo-057ce054.png";
function Gn(e) {
  const [t, n] = j.useState(!1),
    [r, l] = j.useState(!1),
    [o, i] = j.useState(e.Username.Id),
    s = JSON.parse(localStorage.getItem("Data") || "{}"),
    a = Xr(),
    c = () => {
      n(!1);
    },
    f = () => {
      n(!0);
    },
    d = () => {
      o === -999 ? a("/login/") : l((w) => !w);
    };
  j.useEffect(() => {
    e.Username.Id === -999 && i(-999);
  }, []);
  async function h() {
    try {
      await Oe.post("http://127.0.0.1:8000/04D2430AAFE10AA4/logout/"),
        l(!1),
        i(-999);
    } catch (w) {
      console.error("Logout failed:", w.response.data);
    }
    l(!1),
      localStorage.removeItem("token"),
      localStorage.clear(),
      i(-999),
      delete Oe.defaults.headers.common.Authorization,
      localStorage.setItem(
        "Data",
        JSON.stringify({
          User: "false",
          Username: "false",
          Id: -999,
          Group: "Student",
        })
      );
  }
  return u.jsxs("nav", {
    className:
      " fixed bg-white border-gray-200  shadow-2xl top-0 dark:bg-gray-900 pb-2 w-screen mb-40 justify-center justify-content-center text-center bg-opacity-80 dark:bg-opacity-95",
    children: [
      u.jsxs("div", {
        className: "w-screen flex flex-wrap items-center justify-between  ",
        children: [
          u.jsxs("a", {
            href: "/",
            className: "flex items-center space-x-3 rtl:space-x-reverse",
            children: [
              u.jsx("h2", {
                className:
                  " my-4 ml-20 Logo-txt  verticalLine pr-2 font-black logo ",
                children: u.jsx("img", { src: $v, className: "NAV-Logo" }),
              }),
              u.jsxs("span", {
                className:
                  "text-left Logo-sd font-normal  whitespace-nowrap text-black dark:text-white",
                children: [
                  "Youth",
                  u.jsx("br", {}),
                  "Mentorship",
                  u.jsx("br", {}),
                  "Project",
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "items-center md:order-2 space-x-3  rtl:space-x-reverse mr-40",
            children: [
              u.jsxs("ul", {
                className: "flex ",
                children: [
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                      children: u.jsx("img", {
                        src: Qp,
                        className: "nsocials",
                      }),
                    }),
                  }),
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                      children: u.jsx("img", {
                        src: $p,
                        className: " nsocials",
                      }),
                    }),
                  }),
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://www.instagram.com/youthmentorshipproject/",
                      children: u.jsx("img", {
                        src: Yp,
                        className: " nsocials",
                      }),
                    }),
                  }),
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                      children: u.jsx("img", {
                        src: Gp,
                        className: "  nsocials",
                      }),
                    }),
                  }),
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                      children: u.jsx("img", {
                        src: Xp,
                        className: " nsocials",
                      }),
                    }),
                  }),
                  u.jsx("li", {
                    className: "Link",
                    children: u.jsx("a", {
                      target: "_blank",
                      href: "https://discord.gg/mCWDhdtmdS",
                      children: u.jsx("img", {
                        src: Jp,
                        className: " nsocials",
                      }),
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "flex items-center md:order-2 space-x-3  rtl:space-x-reverse pl-14",
                children: [
                  u.jsxs("button", {
                    type: "button",
                    className:
                      "flex px-3 py-2 btn-txt bg-purple-500 rounded-xl md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",
                    id: "user-menu-button",
                    "aria-expanded": "false",
                    "data-dropdown-toggle": "user-dropdown",
                    "data-dropdown-placement": "bottom",
                    onClick: d,
                    children: [
                      u.jsx("span", {
                        className: "sr-only",
                        children: "Open user menu",
                      }),
                      u.jsxs("div", {
                        className: "",
                        children: [
                          o !== -999
                            ? u.jsxs("p", {
                                className: "",
                                children: [e.Username.Username, " ▼"],
                              })
                            : u.jsx("a", {
                                className: "text-white ",
                                href: "/login/",
                                children: "Log In",
                              }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  u.jsx("a", {
                    target: "_blank",
                    href: "https://hcb.hackclub.com/donations/start/youthmentorshipproject",
                    className: "",
                    children: u.jsxs("button", {
                      type: "button",
                      className:
                        "flex px-3 py-2  btn-txt bg-blue-500 text-white rounded-xl md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",
                      id: "user-menu-button",
                      "aria-expanded": "false",
                      "data-dropdown-toggle": "user-dropdown",
                      "data-dropdown-placement": "bottom",
                      children: [
                        u.jsx("span", {
                          className: "sr-only",
                          children: "Open user menu",
                        }),
                        "Donate",
                      ],
                    }),
                  }),
                  r === !0 && e.Username.Id !== -999
                    ? u.jsxs(u.Fragment, {
                        children: [
                          " ",
                          u.jsxs("div", {
                            className:
                              " absolute top-11 my-10  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 dark:divide-gray-600",
                            children: [
                              u.jsxs("div", {
                                className: "px-4 py-3",
                                children: [
                                  u.jsx("span", {
                                    className:
                                      "block text-sm text-gray-900 dark:text-white",
                                    children: e.Username.User,
                                  }),
                                  u.jsx("span", {
                                    className:
                                      "block text-sm  text-gray-500 truncate dark:text-gray-400",
                                    children: e.Username.Id,
                                  }),
                                ],
                              }),
                              u.jsxs("ul", {
                                className: "py-2",
                                "aria-labelledby": "user-menu-button",
                                children: [
                                  s.Groups[0] !== "Student"
                                    ? u.jsx("li", {
                                        children: u.jsx("a", {
                                          href: "/hours",
                                          className:
                                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                                          children: "Hours",
                                        }),
                                      })
                                    : null,
                                  u.jsx("li", {
                                    children: u.jsx("a", {
                                      href: "#",
                                      className:
                                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                                      children: "Settings",
                                    }),
                                  }),
                                  u.jsx("li", {
                                    children: u.jsx("h1", {
                                      className:
                                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                                      onClick: f,
                                      children: "Profile",
                                    }),
                                  }),
                                  u.jsx("li", {
                                    children: u.jsx("a", {
                                      href: "/",
                                      onClick: h,
                                      className:
                                        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                                      children: "Sign out",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  u.jsxs("button", {
                    "data-collapse-toggle": "navbar-user",
                    type: "button",
                    className:
                      "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-user",
                    "aria-expanded": "false",
                    children: [
                      u.jsx("span", {
                        className: "sr-only",
                        children: "Open main menu",
                      }),
                      u.jsx("svg", {
                        className: "w-5 h-5",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 17 14",
                        children: u.jsx("path", {
                          stroke: "currentColor",
                          d: "M1 1h15M1 7h15M1 13h15",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-10",
            id: "navbar-user",
            children: u.jsxs("ul", {
              className:
                "flex flex-col text-md font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-opacity-80 dark:bg-opacity-95",
              children: [
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "/",
                    className:
                      "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 bg-opacity-80 dark:bg-opacity-95",
                    "aria-current": "page",
                    children: "Home",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#",
                    className:
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                    children: "About",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#",
                    className:
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                    children: "Programs",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#",
                    className:
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                    children: "Membership",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#",
                    className:
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                    children: "Events",
                  }),
                }),
                u.jsx("li", {
                  children: u.jsx("a", {
                    href: "#",
                    className:
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
                    children: "Partnership",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      t &&
        u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              className: "overlay",
              onClick: c,
              style: { zIndex: 9998 },
            }),
            u.jsx("div", {
              className: "popup",
              style: { zIndex: 9999 },
              children: u.jsxs("div", {
                className: "popup-content text-center",
                children: [
                  u.jsx("h1", {
                    className: "font-black text-lg text-center",
                    children: "Information",
                  }),
                  u.jsx("hr", {}),
                  u.jsx("br", {}),
                  u.jsx("br", {}),
                  u.jsxs("div", {
                    className: "grid grid-cols-3 gap-4 text-left w-full h-full",
                    children: [
                      u.jsx("div", {
                        className: "w-full h-full CONTENT",
                        children: "IMGAGES GO HERE",
                      }),
                      u.jsxs("div", {
                        className:
                          "col-span-2 grid grid-cols-2 w-full gap-x-20 gap-y-10",
                        children: [
                          u.jsxs("h2", {
                            children: [
                              u.jsx("strong", { children: "Username " }),
                              u.jsx("br", {}),
                              " ",
                              s.Username,
                            ],
                          }),
                          u.jsxs("p", {
                            children: [
                              u.jsx("strong", { children: "YMP ID" }),
                              " ",
                              u.jsx("br", {}),
                              s.Id,
                            ],
                          }),
                          u.jsxs("p", {
                            className: "",
                            children: [
                              u.jsx("strong", { children: "Email" }),
                              u.jsx("br", {}),
                              s.User,
                            ],
                          }),
                          u.jsxs("p", {
                            className: "",
                            children: [
                              u.jsx("strong", { children: "Role" }),
                              u.jsx("br", {}),
                              s.Groups[0],
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("br", {}),
                  u.jsx("br", {}),
                  u.jsx("button", { onClick: c, children: "Close Popup" }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function Yv() {
  const [e, t] = j.useState(""),
    [n, r] = j.useState(""),
    [l, o] = j.useState(!1),
    [i, s] = j.useState(""),
    a = Xr(),
    c = async (f) => {
      f.preventDefault();
      try {
        const d = await Oe.post(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/login/",
          { username: e, password: n }
        );
        a("/"), s(""), o(!1);
        const h = d.data.token;
        (Oe.defaults.headers.common.Authorization = `Token ${h}`),
          localStorage.setItem("token", JSON.stringify(h)),
          console.log(d.data),
          localStorage.setItem("Data", JSON.stringify(d.data));
      } catch (d) {
        s(d.response.data.error), o(!0);
      }
    };
  return u.jsxs("div", {
    className:
      "lg:fixed justify-center content-center w-full h-full bg-slate-100",
    children: [
      u.jsx(Gn, { Username: { User: "Login", Username: e, Id: -999 } }),
      u.jsxs("div", {
        className: "w-full h-full   grid grid-cols-2 text-black",
        children: [
          u.jsx("div", {
            className: "justify-center content-center text-center  ",
            children: u.jsx("img", {
              width: "auto",
              height: "100%",
              className: "Login-img",
              src: Wp,
            }),
          }),
          u.jsx("div", {
            className:
              " justify-center content-center text-center flex items-center ",
            children: u.jsxs("form", {
              className: "mb-10 w-full",
              onSubmit: c,
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "justify-center content-center text-center  ",
                      children: u.jsx("h1", {
                        className: "font-extrabold logo mb-10 ",
                        children: "YMP",
                      }),
                    }),
                    u.jsx("h1", {
                      className: " Login-Title mb-5 font-black",
                      children: "Login",
                    }),
                    u.jsx("p", {
                      className: "text-gray-400 info-ft mb-10",
                      children: "Login into YMP with your information",
                    }),
                    l === !0
                      ? u.jsx("p", {
                          className: "text-red-600 info-ft font-bold mb-2",
                          children: i,
                        })
                      : null,
                    u.jsxs("div", {
                      className: "mb-3  w-full ",
                      children: [
                        u.jsx("p", {
                          className:
                            "w-1/2 ml-6 mb-1 text-gray-700 info-ft font-semibold",
                          children: "Email",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md boo w-1/2 py-2 info-ft pl-3",
                          type: "email",
                          placeholder: "Enter your Email",
                          value: e,
                          onChange: (f) => t(f.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold",
                      children: "Password",
                    }),
                    u.jsx("input", {
                      className: "mb-3 rounded-md py-2 w-1/2 pl-3 boo info-ft",
                      type: "password",
                      placeholder: "Enter your Password",
                      value: n,
                      onChange: (f) => r(f.target.value),
                    }),
                  ],
                }),
                u.jsxs("p", {
                  className: "Redirect-txt",
                  children: [
                    " ",
                    "Don't have an account?",
                    " ",
                    u.jsx("a", {
                      className: "text-blue-500",
                      href: "/signup/",
                      children: "Sign Up!",
                    }),
                  ],
                }),
                u.jsx("button", {
                  className:
                    " Redirect-txt-btn bg-blue-400  mt-3 rounded-md shadow-2xl text-black",
                  type: "submit",
                  children: "Login",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Gv() {
  const [e, t] = j.useState(""),
    [n, r] = j.useState(""),
    [l, o] = j.useState(""),
    [i, s] = j.useState(!1),
    [a, c] = j.useState(""),
    f = Xr(),
    d = async (h) => {
      h.preventDefault();
      try {
        const w = await Oe.post(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/signup/",
          { email: l, username: e, password: n }
        );
        f("/"), f("/"), c(""), s(!1);
        const v = w.data.token;
        localStorage.setItem("token", JSON.stringify(v)),
          (Oe.defaults.headers.common.Authorization = `Token ${v}`),
          localStorage.setItem("Data", JSON.stringify(w.data));
      } catch (w) {
        c(w.response.data.error), console.log(w.response.data.error), s(!0);
      }
    };
  return u.jsxs("div", {
    className:
      "lg:fixed justify-center content-center w-full h-full bg-slate-100",
    children: [
      u.jsx(Gn, { Username: { User: l, Username: e, Id: -999 } }),
      u.jsxs("div", {
        className: "w-full h-full   grid grid-cols-2 text-black",
        children: [
          u.jsx("div", {
            className: "justify-center content-center text-center",
            children: u.jsx("img", {
              width: "auto",
              height: "100%",
              className: "Login-img",
              src: Wp,
            }),
          }),
          u.jsx("div", {
            className:
              " justify-center content-center text-center flex items-center ",
            children: u.jsxs("form", {
              className: "mb-10 w-full",
              onSubmit: d,
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "justify-center content-center text-center  ",
                      children: u.jsx("h1", {
                        className: "font-extrabold logo mb-10 ",
                        children: "YMP",
                      }),
                    }),
                    u.jsx("h1", {
                      className: "Login-Title mb-10 font-black",
                      children: "Signup",
                    }),
                    u.jsx("p", {
                      className: "text-gray-400 info-ft mb-10",
                      children: "Sign up for YMP with your information",
                    }),
                    i === !0
                      ? u.jsx("p", {
                          className: "text-red-600 info-ft font-bold mb-2",
                          children: a,
                        })
                      : null,
                    u.jsx("p", {
                      className:
                        "w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold",
                      children: "Username",
                    }),
                    u.jsx("input", {
                      className: "mb-3 info-ft rounded-md py-2 w-1/2 pl-3",
                      type: "text",
                      placeholder: "Enter your Username",
                      value: e,
                      onChange: (h) => t(h.target.value),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "w-1/2 ml-6 mb-1 text-gray-700 info-ft font-semibold",
                      children: "Email",
                    }),
                    u.jsx("input", {
                      className: "mb-3 rounded-md info-ft py-2 w-1/2 pl-3 boo",
                      type: "email",
                      placeholder: "Enter your Email",
                      value: l,
                      onChange: (h) => o(h.target.value),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className:
                        "w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold",
                      children: "Password",
                    }),
                    u.jsx("input", {
                      type: "password",
                      className: "mb-3 info-ft rounded-md py-2 w-1/2 pl-3",
                      placeholder: "Enter your Password",
                      value: n,
                      onChange: (h) => r(h.target.value),
                    }),
                  ],
                }),
                u.jsxs("p", {
                  className: "Redirect-txt",
                  children: [
                    " ",
                    "Have an account?",
                    " ",
                    u.jsx("a", {
                      className: "text-blue-500 ",
                      href: "/login/",
                      children: "Login!",
                    }),
                  ],
                }),
                u.jsx("button", {
                  className:
                    "bg-blue-400 Redirect-txt-btn rounded-md shadow-2xl text-black",
                  type: "submit",
                  children: "Signup",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Xv() {
  const e = Xr();
  async function t() {
    await Oe.post("http://127.0.0.1:8000/04D2430AAFE10AA4/logout/"),
      localStorage.setItem(
        "Data",
        JSON.stringify({
          User: "false",
          Username: "false",
          Id: -999,
          Group: "Student",
        })
      ),
      localStorage.clear(),
      localStorage.setItem(
        "Data",
        JSON.stringify({
          User: "false",
          Username: "false",
          Id: -999,
          Group: "Student",
        })
      ),
      e("/");
  }
  return u.jsx("div", {
    className: "relative",
    children: u.jsx("div", {
      className:
        " relative top-20 justify-center text-center align-center h-full w-full content-center",
      children: u.jsx("p", {
        className: "p-5 mt-40 bg-purple-500 w-fit content-center rounded-2xl",
        onClick: t,
        children: "Log out",
      }),
    }),
  });
}
function Ai(e) {
  return u.jsxs("div", {
    className: "p-4 Item relative shadow-lg pb-5 pt-5 mr-10 bg-white z-50",
    children: [
      u.jsx("img", { src: e.url, className: "w-full" }),
      u.jsx("h4", {
        className: "font-semibold mb-2 mt-3 Item-h4",
        children: e.title,
      }),
      u.jsx("p", { className: "mb-4 Item-p", children: e.description }),
      u.jsx("a", {
        href: e.link,
        className: "p-2 px-3 Item-btn transition rounded-xl",
        children: "Learn More",
      }),
    ],
  });
}
const Jv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHYSURBVHgBnZS/TgJBEMZnFqPR6oIxsbxKLbGz1FokZ2enlmqhPgHnE0hjCJX4BBCVGn0D7ZTGo7PwzyUmQtDdcRYjcHt3cPgVl72Z2192vp0bhH8oN1vaJpIFAPQRhYswprLpUh5Buf0I+hNJNzv2uSU/2qdAamcwjkB+opM480X7u4MV3pAxAYR4PBLizJ1lpBQVXtpBAHhCqc2qf3AnhgG0gVJiPQzAO6FgTQP0eyxEG0ikyrzFCiSQLoSaYsCe14eax+8ZCDtmjm/l5PLtwA3HBwEjDLx63StDhHqQJAZCjLqexBuoAX0D44S6BNmBp1CGsJqiqd2qv+vDCE3IL8iHyNrA97CBceJy0DYQhagbGApBomYwREe5dDEPY0goAWUzSADuxmyxrv2CBEo1PmvewnQW+SZWjZxNEpzFmVyz0bp+GArRj0ardrM4s37P/8QKvw62Oa9pa2k6C4+t2m0cJNixFl93Cs+BaDXiWy81yT3z3P9nIiF/yqaLeuRFmevxjhOz/WPniWOdZZQQFTK6uCtBhauX/eORkF8QlyfA5eV2RLpXXqLxGF+envZ4lHja61NxT9XD5aEvkkL0JBOqvczLiwAi6bQ3tZEucQnqkHvI0sPqB72rye8E8MLMAAAAAElFTkSuQmCC",
  Kv =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAaCAYAAABRqrc5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIISURBVHgBlZQxT9tAFMffu6NqoapkparU0V1Kx4yMZG5AydatzdI2MLT5BIRPUDpUFhPhE2A1TdUt9BOUbsCC2ZBQkAVDIsTd452R4Wxs4/yHJH6+/H3/n+89XH6++Z5IbQBgCEDf+2cr/Hs64VLFO+Jv964CPfnsSccPWmFZE4FATqJC8EGdT/41XnoulJQgxA4bpZ/qqks4Wq54a2VM0Hw0HM/VAoZkx7pb0ZOPYN0/aQeFJrHqFW+DC18y1gVKyubv0497WSbSvjgcD/7Mz9WP2ajKlzYrRxB9fjNbh4Px4G/hTmI9EG+X47XseJkmsThelxdkwQ0ARac/+uTfi5MWx9udn3v7HwEXIBWPz8K7OF7hTmKZeEriFhAtpu9JATVZxmR/MggPx7+2X8/WkZ+6aN9DQihlEiuK93TJ4VO9ENfYIxRTeDDozTXQ9DVRJAzKMXG3HHUxZibYSN+TGl7NPGjAjcgNOeT0rl03/Wb6zg/bQaFJ48WPKjfiDqQOHW8/EJqafrgStUEuEzOslMLhfQPcExpqfrh620eZJgYgke7xX5KzBmlb6Mc1EyFpbG8/Ajj5ZgZT2hhBr/88W+1Chm5NDMCrS9xhYNXkghuA/VG7Bzm6GUoGoBI5AHXTzp8lMQ3AXBMG2C0LME8zZtqTxTcCOMoGmL+TaNpDEE18hFbeGyjSNTua2tui/mqAAAAAAElFTkSuQmCC",
  Zv = ({ display: e, length: t, message: n }) => {
    const [r, l] = j.useState(0),
      o = () => {
        const a = (r - 1 + t) % t;
        l(a);
      },
      i = () => {
        const a = (r + 1) % t;
        l(a);
      },
      s = [];
    for (let a = 0; a < 3; a++) {
      const c = (r + a) % t;
      s.push(e[c]);
    }
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("h1", {
          className: "Message text-center font-bold",
          children: n,
        }),
        u.jsxs("div", {
          className: "carousel-container",
          children: [
            u.jsx("button", {
              className: "carousel-button",
              onClick: o,
              children: u.jsx("img", { src: Jv, className: "carousel-btn" }),
            }),
            u.jsx("div", {
              className: "carousel flex",
              children: s.map((a, c) =>
                u.jsx("img", { src: a, alt: `${r + c}` }, c)
              ),
            }),
            u.jsx("button", {
              className: "carousel-button",
              onClick: i,
              children: u.jsx("img", { src: Kv, className: "carousel-btn" }),
            }),
          ],
        }),
      ],
    });
  };
var Kp = {},
  Uo = {},
  Zp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = l(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var i = "";
      for (var s in o) t.call(o, s) && o[s] && (i = l(i, s));
      return i;
    }
    function l(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Zp);
var Xe = Zp.exports,
  Xn = {},
  qv =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.useFrame = void 0;
const ey = qv(j),
  ty = (e) =>
    ey.default.useMemo(
      () =>
        e || {
          document: typeof document < "u" ? document : void 0,
          window: typeof window < "u" ? window : void 0,
        },
      [e]
    );
Xn.useFrame = ty;
var rt = {},
  lt = {},
  ny =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  qp =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.EmbedStyle = void 0;
const ry = qp(Xe),
  ly = qp(j),
  oy = (e) => {
    var t = ny(e, []);
    return ly.default.createElement(
      "style",
      Object.assign({}, t, {
        className: (0, ry.default)(t.className),
        style: Object.assign({}, t.style),
      }),
      `
        .rsme-embed .rsme-d-none {
          display: none;
        }
    
        .rsme-embed .twitter-tweet {
          margin: 0 !important;
        }
    
        .rsme-embed blockquote {
          margin: 0 !important;
          padding: 0 !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post iframe {
          width: 100% !important;
        }

        .rsme-embed.rsme-facebook-embed .fb-post span {
          width: 100% !important;
        }
      `
    );
  };
lt.EmbedStyle = oy;
var Zr = {},
  iy =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  eh =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.BorderSpinner = void 0;
const sy = eh(Xe),
  vl = eh(j),
  ay = (e) => {
    var t = iy(e, []);
    return vl.default.createElement(
      vl.default.Fragment,
      null,
      vl.default.createElement(
        "style",
        null,
        `
        .rsme-spinner {
          border: 3px solid rgba(0,0,0,0.75);
          border-right-color: transparent;
          border-radius: 50%;
          animation: rsme-spin 1s linear infinite;
        }
        @keyframes rsme-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }  
      `
      ),
      vl.default.createElement(
        "div",
        Object.assign({}, t, {
          className: (0, sy.default)("rsme-spinner", t.className),
          style: Object.assign({ width: 10, height: 10 }, t.style),
        })
      )
    );
  };
Zr.BorderSpinner = ay;
var th = {};
(function (e) {
  var t =
      (C && C.__rest) ||
      function (c, f) {
        var d = {};
        for (var h in c)
          Object.prototype.hasOwnProperty.call(c, h) &&
            f.indexOf(h) < 0 &&
            (d[h] = c[h]);
        if (c != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var w = 0, h = Object.getOwnPropertySymbols(c);
            w < h.length;
            w++
          )
            f.indexOf(h[w]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(c, h[w]) &&
              (d[h[w]] = c[h[w]]);
        return d;
      },
    n =
      (C && C.__importDefault) ||
      function (c) {
        return c && c.__esModule ? c : { default: c };
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.ShareArrowIcon =
      e.ChatBubbleIcon =
      e.HeartIcon =
      e.EngagementIconsPlaceholder =
        void 0);
  const r = n(Xe),
    l = n(j),
    o = (c) => {
      var f = t(c, []);
      return l.default.createElement(
        "div",
        Object.assign({}, f, {
          className: (0, r.default)(f.className),
          style: Object.assign(
            { display: "flex", alignItems: "center", columnGap: 14 },
            f.style
          ),
        }),
        l.default.createElement(e.HeartIcon, null),
        l.default.createElement(e.ChatBubbleIcon, null),
        l.default.createElement(e.ShareArrowIcon, null)
      );
    };
  e.EngagementIconsPlaceholder = o;
  const i = (c) =>
    l.default.createElement(
      "div",
      Object.assign({}, c),
      l.default.createElement("div", {
        style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "12.5px",
          width: "12.5px",
          transform: "translateX(0px) translateY(7px)",
        },
      }),
      l.default.createElement("div", {
        style: {
          backgroundColor: "#F4F4F4",
          height: "12.5px",
          transform: "rotate(-45deg) translateX(3px) translateY(1px)",
          width: "12.5px",
          flexGrow: 0,
          marginRight: "6px",
          marginLeft: "2px",
        },
      }),
      l.default.createElement("div", {
        style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "12.5px",
          width: "12.5px",
          transform: "translateX(9px) translateY(-18px)",
        },
      })
    );
  e.HeartIcon = i;
  const s = (c) =>
    l.default.createElement(
      "div",
      Object.assign({}, c),
      l.default.createElement("div", {
        style: {
          backgroundColor: "#F4F4F4",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
        },
      }),
      l.default.createElement("div", {
        style: {
          width: 0,
          height: 0,
          borderTop: "2px solid transparent",
          borderLeft: "6px solid #f4f4f4",
          borderBottom: "2px solid transparent",
          transform: "translateX(16px) translateY(-4px) rotate(30deg)",
        },
      })
    );
  e.ChatBubbleIcon = s;
  const a = (c) =>
    l.default.createElement(
      "div",
      Object.assign({}, c, {
        style: {
          height: 25,
          width: 25,
          transform: "translateX(0px) translateY(-2px)",
        },
      }),
      l.default.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 512 512",
          xmlSpace: "preserve",
        },
        l.default.createElement("path", {
          style: { fill: "#F4F4F4" },
          d: `M295.204,180.593C132.168,180.593,0,312.759,0,475.796
c51.398-130.047,184.869-203.22,317.483-183.603L295.204,180.593z`,
        }),
        l.default.createElement("path", {
          style: { fill: "#F4F4F4" },
          d: `M512,253L295.204,36.204v217.818C159.946,249.655,34.992,339.262,0,475.794
c59.905-109.171,178.724-165.463,295.204-151.033v145.035L512,253z`,
        })
      )
    );
  e.ShareArrowIcon = a;
})(th);
var Fo = {},
  uy =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  nh =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.ProfilePlaceholder = void 0;
const cy = nh(Xe),
  hn = nh(j),
  dy = (e) => {
    var t = uy(e, []);
    return hn.default.createElement(
      "div",
      Object.assign({}, t, {
        className: (0, cy.default)(t.className),
        style: Object.assign({}, t.style),
      }),
      hn.default.createElement(
        "div",
        { style: { display: "flex", columnGap: 14 } },
        hn.default.createElement("div", {
          style: {
            backgroundColor: "#F4F4F4",
            borderRadius: "50%",
            width: 40,
            height: 40,
          },
        }),
        hn.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              rowGap: 6,
            },
          },
          hn.default.createElement("div", {
            style: {
              backgroundColor: "#F4F4F4",
              borderRadius: 4,
              width: 100,
              height: 14,
            },
          }),
          hn.default.createElement("div", {
            style: {
              backgroundColor: "#F4F4F4",
              borderRadius: 4,
              width: 60,
              height: 14,
            },
          })
        )
      )
    );
  };
Fo.ProfilePlaceholder = dy;
var fy =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  rh =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.PlaceholderEmbed = void 0;
const py = rh(Xe),
  fe = rh(j),
  hy = lt,
  my = Zr,
  gy = th,
  vy = Fo,
  yy = (e) => {
    var t,
      {
        url: n,
        linkText: r = "View post",
        imageUrl: l,
        spinner: o = fe.default.createElement(my.BorderSpinner, null),
        spinnerDisabled: i,
      } = e,
      s = fy(e, ["url", "linkText", "imageUrl", "spinner", "spinnerDisabled"]);
    return fe.default.createElement(
      "div",
      Object.assign({}, s, {
        className: (0, py.default)(s.className),
        style: Object.assign(
          {
            overflow: "hidden",
            border: "1px solid #dee2e6",
            backgroundColor: "#ffffff",
            borderRadius: 0,
            boxSizing: "border-box",
            position: "relative",
          },
          s.style
        ),
      }),
      fe.default.createElement(hy.EmbedStyle, null),
      fe.default.createElement(
        "a",
        {
          href: n,
          style: { textDecoration: "none" },
          target: "_blank",
          rel: "noopener noreferrer",
        },
        !l &&
          fe.default.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                zIndex: 2,
                backgroundColor: "#ffffff",
              },
            },
            fe.default.createElement(vy.ProfilePlaceholder, null)
          ),
        fe.default.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: l ? "start" : "center",
              height: "100%",
              width: "100%",
            },
          },
          !l &&
            fe.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  rowGap: 16,
                  zIndex: 3,
                  padding: 8,
                  backgroundColor: "#ffffff",
                },
              },
              !i && o,
              !!r &&
                fe.default.createElement(
                  "div",
                  {
                    style: {
                      color: "#000000",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 550,
                      lineHeight: "18px",
                      textAlign: "center",
                    },
                  },
                  r
                )
            ),
          l &&
            (typeof ((t = s.style) === null || t === void 0
              ? void 0
              : t.height) < "u"
              ? fe.default.createElement("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    background: `url("${l}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "40",
                  },
                })
              : fe.default.createElement(
                  "div",
                  { style: { width: "100%", marginBottom: 40 } },
                  fe.default.createElement("img", {
                    src: l,
                    style: { width: "100%" },
                  })
                ))
        ),
        fe.default.createElement(
          "div",
          {
            style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 40,
              width: "100%",
              backgroundColor: "#ffffff",
              zIndex: 1,
            },
          },
          !l &&
            fe.default.createElement(gy.EngagementIconsPlaceholder, {
              style: { marginLeft: 16 },
            }),
          l &&
            fe.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  columnGap: 16,
                },
              },
              fe.default.createElement(
                "div",
                {
                  style: {
                    color: "#0095f6",
                    fontWeight: 600,
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    marginLeft: 16,
                  },
                },
                r
              ),
              !i &&
                fe.default.createElement(
                  "div",
                  { style: { marginRight: 16 } },
                  o
                )
            )
        )
      )
    );
  };
rt.PlaceholderEmbed = yy;
var Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.generateUUID = void 0;
const wy = () => {
  let e = new Date().getTime(),
    t =
      (typeof performance < "u" &&
        performance.now &&
        performance.now() * 1e3) ||
      0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (n) {
    let r = Math.random() * 16;
    return (
      e > 0
        ? ((r = (e + r) % 16 | 0), (e = Math.floor(e / 16)))
        : ((r = (t + r) % 16 | 0), (t = Math.floor(t / 16))),
      (n === "x" ? r : (r & 3) | 8).toString(16)
    );
  });
};
Jn.generateUUID = wy;
var Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.Subs = Wt.Subscribe = void 0;
class en {
  static subscribe(t) {
    try {
      return t();
    } catch (n) {
      console.error(n);
    }
    return () => {};
  }
  static subscribeEvent(t, n, r) {
    return (
      t.addListener(n, r),
      () => {
        t.removeListener(n, r);
      }
    );
  }
  static subscribeDOMEvent(t, n, r, l) {
    return (
      t.addEventListener(n, r, l),
      () => {
        t.removeEventListener(n, r, l);
      }
    );
  }
  static setTimeout(t, n, ...r) {
    const l = setTimeout(t, n, r);
    return () => clearTimeout(l);
  }
  static setInterval(t, n, ...r) {
    const l = setInterval(t, n, r);
    return () => clearInterval(l);
  }
  static unsubAll(t) {
    if (Array.isArray(t))
      t.forEach((n) => {
        try {
          n();
        } catch (r) {
          console.error(r);
        }
      });
    else
      try {
        t();
      } catch (n) {
        console.error(n);
      }
  }
  static createCleanup(t) {
    return () => en.unsubAll(t);
  }
}
Wt.Subscribe = en;
class xy {
  constructor(t = []) {
    this.list = t;
  }
  subscribe(t) {
    const n = en.subscribe(t);
    return this.push(n), n;
  }
  subscribeEvent(t, n, r) {
    const l = en.subscribeEvent(t, n, r);
    return this.push(l), l;
  }
  subscribeDOMEvent(t, n, r) {
    const l = en.subscribeDOMEvent(t, n, r);
    return this.push(l), l;
  }
  setTimeout(t, n, ...r) {
    const l = setTimeout(t, n, r),
      o = () => clearTimeout(l);
    return this.push(o), o;
  }
  setInterval(t, n, ...r) {
    const l = setInterval(t, n, r),
      o = () => clearInterval(l);
    return this.push(o), o;
  }
  push(t) {
    this.list.push(t);
  }
  unsubAll() {
    en.unsubAll(this.list), this.list.splice(0, this.list.length);
  }
  createCleanup() {
    return () => {
      this.unsubAll();
    };
  }
}
Wt.Subs = xy;
var Sy =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  lh =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.FacebookEmbed = void 0;
const Ec = lh(Xe),
  pe = lh(j),
  Ey = Xn,
  Ay = rt,
  jy = Jn,
  Py = lt,
  Ac = Wt,
  ky = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0",
  Ds = 550,
  by = Ds,
  Ny = 372,
  jc = 3,
  Pc = "check-script",
  kc = "load-script",
  bc = "confirm-script-loaded",
  yl = "process-embed",
  Nc = "confirm-embed-success",
  _c = "retrying",
  Cc = "embed-success",
  _y = (e) => {
    var t,
      n,
      {
        url: r,
        width: l,
        height: o,
        linkText: i = "View post on Facebook",
        placeholderImageUrl: s,
        placeholderSpinner: a,
        placeholderSpinnerDisabled: c = !1,
        placeholderProps: f,
        embedPlaceholder: d,
        placeholderDisabled: h = !1,
        scriptLoadDisabled: w = !1,
        retryDelay: v = 5e3,
        retryDisabled: y = !1,
        frame: E = void 0,
        debug: m = !1,
      } = e,
      p = Sy(e, [
        "url",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
        "scriptLoadDisabled",
        "retryDelay",
        "retryDisabled",
        "frame",
        "debug",
      ]);
    const [g, x] = pe.default.useState(Pc),
      A = pe.default.useMemo(() => g === Cc, [g]),
      _ = pe.default.useRef((0, jy.generateUUID)()),
      [O, b] = pe.default.useState(Date.now()),
      U = pe.default.useMemo(() => `${_.current}-${O}`, [O]),
      T = (0, Ey.useFrame)(E);
    pe.default.useEffect(() => {
      m && console.log(`[${new Date().toISOString()}]: ${g}`);
    }, [m, g]),
      pe.default.useEffect(() => {
        var z, Y, G;
        g === Pc &&
          (!(
            (G =
              (Y = (z = T.window) === null || z === void 0 ? void 0 : z.FB) ===
                null || Y === void 0
                ? void 0
                : Y.XFBML) === null || G === void 0
          ) && G.parse
            ? x(yl)
            : w
            ? console.error(
                "Facebook embed script not found. Unable to process Facebook embed:",
                r
              )
            : x(kc));
      }, [w, g, r, T.window]),
      pe.default.useEffect(() => {
        if (g === kc && T.document) {
          const z = T.document.createElement("script");
          z.setAttribute("src", ky), T.document.head.appendChild(z), x(bc);
        }
      }, [g, T.document]),
      pe.default.useEffect(() => {
        const z = new Ac.Subs();
        return (
          g === bc &&
            z.setInterval(() => {
              var Y, G, P;
              !(
                (P =
                  (G =
                    (Y = T.window) === null || Y === void 0 ? void 0 : Y.FB) ===
                    null || G === void 0
                    ? void 0
                    : G.XFBML) === null || P === void 0
              ) &&
                P.parse &&
                x(yl);
            }, 1),
          z.createCleanup()
        );
      }, [g, T.window]),
      pe.default.useEffect(() => {
        var z, Y, G;
        if (g === yl) {
          const P =
            (G =
              (Y = (z = T.window) === null || z === void 0 ? void 0 : z.FB) ===
                null || Y === void 0
                ? void 0
                : Y.XFBML) === null || G === void 0
              ? void 0
              : G.parse;
          P
            ? (P(), x(Nc))
            : console.error(
                "Facebook embed script not found. Unable to process Facebook embed:",
                r
              );
        }
      }, [g, r, T.window]),
      pe.default.useEffect(() => {
        const z = new Ac.Subs();
        return (
          g === Nc &&
            (z.setInterval(() => {
              if (T.document) {
                const Y = T.document.getElementById(_.current);
                if (Y) {
                  const G = Y.getElementsByClassName("fb-post")[0];
                  G && G.children.length > 0 && x(Cc);
                }
              }
            }, 1),
            y ||
              z.setTimeout(() => {
                x(_c);
              }, v)),
          z.createCleanup()
        );
      }, [y, v, g, T.document]),
      pe.default.useEffect(() => {
        g === _c && (b(Date.now()), x(yl));
      }, [g]);
    const F = !!(l != null && l.toString().includes("%")),
      W = !!(o != null && o.toString().includes("%")),
      Q = {
        maxWidth: F ? void 0 : by,
        width: typeof l < "u" ? (F ? "100%" : l) : "100%",
        height: W
          ? "100%"
          : typeof o < "u"
          ? o
          : typeof ((t = p.style) === null || t === void 0
              ? void 0
              : t.height) < "u" ||
            typeof ((n = p.style) === null || n === void 0
              ? void 0
              : n.maxHeight) < "u"
          ? "100%"
          : Ny,
        border: "1px solid #dee2e6",
        borderRadius: jc,
      },
      ue =
        d ??
        pe.default.createElement(
          Ay.PlaceholderEmbed,
          Object.assign(
            {
              url: r,
              imageUrl: s,
              linkText: i,
              spinner: a,
              spinnerDisabled: c,
            },
            f,
            {
              style: Object.assign(
                Object.assign({}, Q),
                f == null ? void 0 : f.style
              ),
            }
          )
        );
    return pe.default.createElement(
      "div",
      Object.assign({}, p, {
        className: (0, Ec.default)(
          "rsme-embed rsme-facebook-embed",
          p.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: l ?? void 0,
            height: o ?? void 0,
            borderRadius: jc,
          },
          p.style
        ),
      }),
      pe.default.createElement(Py.EmbedStyle, null),
      pe.default.createElement(
        "div",
        { id: _.current, className: (0, Ec.default)(!A && "rsme-d-none") },
        pe.default.createElement("div", {
          key: U,
          className: "fb-post",
          "data-href": r,
          "data-width": F ? "100%" : l ?? Ds,
          style: {
            width: F ? "100%" : l ?? Ds,
            height: W ? "100%" : o ?? void 0,
          },
        })
      ),
      !A && !h && ue
    );
  };
Uo.FacebookEmbed = _y;
var Mo = {},
  Cy =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  Oy =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  Ty =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Cy(t, e, n);
      return Oy(t, e), t;
    },
  Ry =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  Iy =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.InstagramEmbed = void 0;
const Dy = Iy(Xe),
  Se = Ty(j),
  Oc = Wt,
  Ly = Xn,
  Uy = rt,
  Fy = Jn,
  My = lt,
  By = "https://www.instagram.com/embed.js",
  zy = 328,
  Vy = 372,
  Tc = 3,
  Rc = "check-script",
  Ic = "load-script",
  Dc = "confirm-script-loaded",
  wl = "process-embed",
  Lc = "confirm-embed-success",
  Uc = "retrying",
  Hy = "embed-success",
  Wy = (e) => {
    var t,
      n,
      {
        url: r,
        width: l,
        height: o,
        linkText: i = "View post on Instagram",
        captioned: s = !1,
        placeholderImageUrl: a,
        placeholderSpinner: c,
        placeholderSpinnerDisabled: f = !1,
        placeholderProps: d,
        embedPlaceholder: h,
        placeholderDisabled: w = !1,
        scriptLoadDisabled: v = !1,
        retryDelay: y = 5e3,
        retryDisabled: E = !1,
        igVersion: m = "14",
        frame: p = void 0,
        debug: g = !1,
      } = e,
      x = Ry(e, [
        "url",
        "width",
        "height",
        "linkText",
        "captioned",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
        "scriptLoadDisabled",
        "retryDelay",
        "retryDisabled",
        "igVersion",
        "frame",
        "debug",
      ]);
    const [A, _] = Se.useState(Rc),
      O = Se.useRef((0, Fy.generateUUID)()),
      [b, U] = Se.useState(Date.now()),
      T = Se.useMemo(() => `${O.current}-${b}`, [b]),
      F = (0, Ly.useFrame)(p);
    Se.useEffect(() => {
      g && console.log(`[${new Date().toISOString()}]: ${A}`);
    }, [g, A]),
      Se.useEffect(() => {
        var P, D, L;
        A === Rc &&
          (!(
            (L =
              (D =
                (P = F.window) === null || P === void 0
                  ? void 0
                  : P.instgrm) === null || D === void 0
                ? void 0
                : D.Embeds) === null || L === void 0
          ) && L.process
            ? _(wl)
            : v
            ? console.error(
                "Instagram embed script not found. Unable to process Instagram embed:",
                r
              )
            : _(Ic));
      }, [v, A, r, F.window]),
      Se.useEffect(() => {
        if (A === Ic && F.document) {
          const P = F.document.createElement("script");
          P.setAttribute("src", By), F.document.head.appendChild(P), _(Dc);
        }
      }, [A, F.document]),
      Se.useEffect(() => {
        const P = new Oc.Subs();
        return (
          A === Dc &&
            P.setInterval(() => {
              var D, L, R;
              !(
                (R =
                  (L =
                    (D = F.window) === null || D === void 0
                      ? void 0
                      : D.instgrm) === null || L === void 0
                    ? void 0
                    : L.Embeds) === null || R === void 0
              ) &&
                R.process &&
                _(wl);
            }, 1),
          P.createCleanup()
        );
      }, [A, F.window]),
      Se.useEffect(() => {
        var P, D, L;
        if (A === wl) {
          const R =
            (L =
              (D =
                (P = F.window) === null || P === void 0
                  ? void 0
                  : P.instgrm) === null || D === void 0
                ? void 0
                : D.Embeds) === null || L === void 0
              ? void 0
              : L.process;
          R
            ? (R(), _(Lc))
            : console.error(
                "Instagram embed script not found. Unable to process Instagram embed:",
                r
              );
        }
      }, [A, F.window, r]),
      Se.useEffect(() => {
        const P = new Oc.Subs();
        return (
          A === Lc &&
            (P.setInterval(() => {
              F.document && (F.document.getElementById(O.current) || _(Hy));
            }, 1),
            E ||
              P.setTimeout(() => {
                _(Uc);
              }, y)),
          P.createCleanup()
        );
      }, [y, E, A, F.document]),
      Se.useEffect(() => {
        A === Uc && (U(Date.now()), _(wl));
      }, [A]);
    const W = r.replace(/[?].*$/, ""),
      Q = `${W}${W.endsWith("/") ? "" : "/"}`,
      ue = !!(l != null && l.toString().includes("%")),
      z = !!(o != null && o.toString().includes("%")),
      Y = {
        minWidth: ue ? void 0 : zy,
        width: typeof l < "u" ? (ue ? "100%" : l) : "100%",
        height: z
          ? "100%"
          : typeof o < "u"
          ? o
          : typeof ((t = x.style) === null || t === void 0
              ? void 0
              : t.height) < "u" ||
            typeof ((n = x.style) === null || n === void 0
              ? void 0
              : n.maxHeight) < "u"
          ? "100%"
          : Vy,
        border: "1px solid #dee2e6",
        borderRadius: Tc,
      },
      G =
        h ??
        Se.createElement(
          Uy.PlaceholderEmbed,
          Object.assign(
            {
              url: Q,
              imageUrl: a,
              linkText: i,
              spinner: c,
              spinnerDisabled: f,
            },
            d,
            {
              style: Object.assign(
                Object.assign({}, Y),
                d == null ? void 0 : d.style
              ),
            }
          )
        );
    return Se.createElement(
      "div",
      Object.assign({}, x, {
        className: (0, Dy.default)(
          "rsme-embed rsme-instagram-embed",
          O.current,
          x.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: l ?? void 0,
            height: o ?? void 0,
            borderRadius: Tc,
          },
          x.style
        ),
      }),
      Se.createElement(My.EmbedStyle, null),
      Se.createElement(
        "blockquote",
        {
          key: T,
          className: "instagram-media",
          "data-instgrm-permalink": `${Q}?utm_source=ig_embed&utm_campaign=loading`,
          "data-instgrm-version": m,
          "data-instgrm-captioned": s || void 0,
          "data-width": ue ? "100%" : l ?? void 0,
          style: { width: "calc(100% - 2px)" },
        },
        !w && G,
        Se.createElement(
          "div",
          { id: O.current, className: "instagram-media-pre-embed rsme-d-none" },
          " "
        )
      )
    );
  };
Mo.InstagramEmbed = Wy;
var Bo = {},
  Qy =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  $y =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  Yy =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Qy(t, e, n);
      return $y(t, e), t;
    },
  Gy =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  Xy =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.LinkedInEmbed = void 0;
const Fc = Xy(Xe),
  ir = Yy(j),
  Jy = rt,
  Ky = lt,
  Zy = 250,
  qy = 550,
  e1 = 550,
  Mc = 8,
  t1 = (e) => {
    var t,
      n,
      {
        url: r,
        postUrl: l,
        width: o,
        height: i = 500,
        linkText: s = "View post on LinkedIn",
        placeholderImageUrl: a,
        placeholderSpinner: c,
        placeholderSpinnerDisabled: f = !1,
        placeholderProps: d,
        embedPlaceholder: h,
        placeholderDisabled: w = !1,
      } = e,
      v = Gy(e, [
        "url",
        "postUrl",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
      ]);
    const [y, E] = ir.useState(!1),
      m = {
        minWidth: Zy,
        maxWidth: qy,
        width: typeof o < "u" ? o : "100%",
        height:
          typeof i < "u"
            ? i
            : typeof ((t = v.style) === null || t === void 0
                ? void 0
                : t.height) < "u" ||
              typeof ((n = v.style) === null || n === void 0
                ? void 0
                : n.maxHeight) < "u"
            ? "100%"
            : e1,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        borderRadius: Mc,
      },
      p =
        h ??
        ir.createElement(
          Jy.PlaceholderEmbed,
          Object.assign(
            {
              url: l ?? r,
              imageUrl: a,
              linkText: s,
              spinner: c,
              spinnerDisabled: f,
            },
            d,
            {
              style: Object.assign(
                Object.assign({}, m),
                d == null ? void 0 : d.style
              ),
            }
          )
        );
    return ir.createElement(
      "div",
      Object.assign({}, v, {
        className: (0, Fc.default)(
          "rsme-embed rsme-linkedin-embed",
          v.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: o ?? void 0,
            height: i ?? void 0,
            borderRadius: Mc,
          },
          v.style
        ),
      }),
      ir.createElement(Ky.EmbedStyle, null),
      ir.createElement("iframe", {
        className: (0, Fc.default)("linkedin-post", !y && "rsme-d-none"),
        src: r,
        width: "100%",
        height: y ? i : 0,
        frameBorder: "0",
        onLoad: () => E(!0),
      }),
      !y && !w && p
    );
  };
Bo.LinkedInEmbed = t1;
var zo = {},
  n1 =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  r1 =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  l1 =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            n1(t, e, n);
      return r1(t, e), t;
    },
  o1 =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  i1 =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.PinterestEmbed = void 0;
const Bc = i1(Xe),
  sr = l1(j),
  s1 = rt,
  a1 = lt,
  u1 = 250,
  c1 = 550,
  d1 = 550,
  zc = 8,
  f1 = (e) => {
    var t,
      n,
      r,
      {
        url: l,
        postUrl: o,
        width: i,
        height: s = 500,
        linkText: a = "View post on Pinterest",
        placeholderImageUrl: c,
        placeholderSpinner: f,
        placeholderSpinnerDisabled: d = !1,
        placeholderProps: h,
        embedPlaceholder: w,
        placeholderDisabled: v = !1,
      } = e,
      y = o1(e, [
        "url",
        "postUrl",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
      ]);
    const [E, m] = sr.useState(!1),
      p = {
        minWidth: u1,
        maxWidth: c1,
        width: typeof i < "u" ? i : "100%",
        height:
          typeof s < "u"
            ? s
            : typeof ((t = y.style) === null || t === void 0
                ? void 0
                : t.height) < "u" ||
              typeof ((n = y.style) === null || n === void 0
                ? void 0
                : n.maxHeight) < "u"
            ? "100%"
            : d1,
        border: "solid 1px rgba(0, 0, 0, 0.15)",
        borderRadius: zc,
      },
      g =
        w ??
        sr.createElement(
          s1.PlaceholderEmbed,
          Object.assign(
            {
              url: o ?? l,
              imageUrl: c,
              linkText: a,
              spinner: f,
              spinnerDisabled: d,
            },
            h,
            {
              style: Object.assign(
                Object.assign({}, p),
                h == null ? void 0 : h.style
              ),
            }
          )
        ),
      x =
        (r = l.match(/pin\/([\w\d_-]+)/)) === null || r === void 0
          ? void 0
          : r[1],
      A = x ?? "000000000000000000";
    return sr.createElement(
      "div",
      Object.assign({}, y, {
        className: (0, Bc.default)(
          "rsme-embed rsme-pinterest-embed",
          y.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: i ?? void 0,
            height: s ?? void 0,
            borderRadius: zc,
          },
          y.style
        ),
      }),
      sr.createElement(a1.EmbedStyle, null),
      sr.createElement("iframe", {
        className: (0, Bc.default)("pinterest-post", !E && "rsme-d-none"),
        src: `https://assets.pinterest.com/ext/embed.html?id=${A}`,
        width: "100%",
        height: E ? s : 0,
        frameBorder: "0",
        scrolling: "no",
        onLoad: () => m(!0),
      }),
      !E && !v && g
    );
  };
zo.PinterestEmbed = f1;
var Vo = {},
  p1 =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  oh =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.TikTokEmbed = void 0;
const h1 = oh(Xe),
  je = oh(j),
  m1 = Wt,
  g1 = Xn,
  v1 = rt,
  y1 = Jn,
  w1 = lt,
  x1 = "https://www.tiktok.com/embed.js",
  S1 = 325,
  E1 = 480,
  A1 = 550,
  Vc = 8,
  ji = "process-embed",
  Hc = "confirm-embed-success",
  Wc = "retrying",
  j1 = "embed-success",
  P1 = (e) => {
    var t,
      n,
      {
        url: r,
        width: l,
        height: o,
        linkText: i = "View post on TikTok",
        placeholderImageUrl: s,
        placeholderSpinner: a,
        placeholderSpinnerDisabled: c = !1,
        placeholderProps: f,
        embedPlaceholder: d,
        placeholderDisabled: h = !1,
        scriptLoadDisabled: w = !1,
        retryDelay: v = 5e3,
        retryDisabled: y = !1,
        frame: E = void 0,
        debug: m = !1,
      } = e,
      p = p1(e, [
        "url",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
        "scriptLoadDisabled",
        "retryDelay",
        "retryDisabled",
        "frame",
        "debug",
      ]);
    const [g, x] = je.default.useState(ji),
      A = je.default.useRef((0, y1.generateUUID)()),
      [_, O] = je.default.useState(Date.now()),
      b = je.default.useMemo(() => `${A.current}-${_}`, [_]),
      U = (0, g1.useFrame)(E);
    je.default.useEffect(() => {
      m && console.log(`[${new Date().toISOString()}]: ${g}`);
    }, [m, g]),
      je.default.useEffect(() => {
        if (g === ji && U.document && !w) {
          const Q = "tiktok-embed-script",
            ue = U.document.getElementById(Q);
          ue && ue.remove();
          const z = U.document.createElement("script");
          z.setAttribute("src", `${x1}?t=${Date.now()}`),
            z.setAttribute("id", Q),
            U.document.head.appendChild(z),
            x(Hc);
        }
      }, [w, g, U.document]),
      je.default.useEffect(() => {
        const Q = new m1.Subs();
        return (
          g === Hc &&
            (Q.setInterval(() => {
              U.document && (U.document.getElementById(A.current) || x(j1));
            }, 1),
            y ||
              Q.setTimeout(() => {
                x(Wc);
              }, v)),
          Q.createCleanup()
        );
      }, [v, y, g, U.document]),
      je.default.useEffect(() => {
        g === Wc && (O(Date.now()), x(ji));
      }, [g]);
    const T = r.replace(/[?].*$/, "").replace(/^.+\//, ""),
      F = {
        minWidth: S1,
        maxWidth: E1,
        width: typeof l < "u" ? l : "100%",
        height:
          typeof o < "u"
            ? o
            : typeof ((t = p.style) === null || t === void 0
                ? void 0
                : t.height) < "u" ||
              typeof ((n = p.style) === null || n === void 0
                ? void 0
                : n.maxHeight) < "u"
            ? "100%"
            : A1,
        border: "solid 1px rgba(22,24,35,0.12)",
        borderRadius: Vc,
      },
      W =
        d ??
        je.default.createElement(
          v1.PlaceholderEmbed,
          Object.assign(
            {
              url: r,
              imageUrl: s,
              linkText: i,
              spinner: a,
              spinnerDisabled: c,
            },
            f,
            {
              style: Object.assign(
                Object.assign({}, F),
                f == null ? void 0 : f.style
              ),
            }
          )
        );
    return je.default.createElement(
      "div",
      Object.assign({}, p, {
        className: (0, h1.default)("rsme-embed rsme-tiktok-embed", p.className),
        style: Object.assign(
          {
            overflow: "hidden",
            width: l ?? void 0,
            height: o ?? void 0,
            borderRadius: Vc,
          },
          p.style
        ),
      }),
      je.default.createElement(w1.EmbedStyle, null),
      je.default.createElement(
        "div",
        { className: "tiktok-embed-container" },
        je.default.createElement(
          "blockquote",
          { key: b, className: "tiktok-embed", cite: r, "data-video-id": T },
          h
            ? je.default.createElement(
                "div",
                { id: A.current, style: { display: "none" } },
                " "
              )
            : je.default.createElement(
                "div",
                {
                  id: A.current,
                  style: { display: "flex", justifyContent: "center" },
                },
                W
              )
        )
      )
    );
  };
Vo.TikTokEmbed = P1;
var Ho = {},
  ft = "https://platform.twitter.com/widgets.js",
  Pi = "createTimeline",
  k1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1],
      i = function () {
        var c = Object.assign({}, t.options);
        if (t != null && t.autoHeight) {
          var f, d;
          c.height =
            (f = n.current) === null ||
            f === void 0 ||
            (d = f.parentNode) === null ||
            d === void 0
              ? void 0
              : d.offsetHeight;
        }
        return (
          (c = Object.assign({}, c, {
            theme: t == null ? void 0 : t.theme,
            linkColor: t == null ? void 0 : t.linkColor,
            borderColor: t == null ? void 0 : t.borderColor,
            lang: t == null ? void 0 : t.lang,
            tweetLimit: t == null ? void 0 : t.tweetLimit,
            ariaPolite: t == null ? void 0 : t.ariaPolite,
          })),
          c
        );
      },
      s = function (c) {
        return (
          (c.chrome = ""),
          t.noHeader && (c.chrome = c.chrome + " noheader"),
          t.noFooter && (c.chrome = c.chrome + " nofooter"),
          t.noBorders && (c.chrome = c.chrome + " noborders"),
          t.noScrollbar && (c.chrome = c.chrome + " noscrollbar"),
          t.transparent && (c.chrome = c.chrome + " transparent"),
          c
        );
      };
    return (
      N.useEffect(function () {
        var a = !0,
          c = require("scriptjs");
        return (
          c(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (a) {
              if (!window.twttr.widgets[Pi]) {
                console.error(
                  "Method " + Pi + " is not present anymore in twttr.widget api"
                );
                return;
              }
              var f = i();
              (f = s(f)),
                window.twttr.widgets[Pi](
                  {
                    sourceType: t.sourceType,
                    screenName: t.screenName,
                    userId: t.userId,
                    ownerScreenName: t.ownerScreenName,
                    slug: t.slug,
                    id: t.id || t.widgetId,
                    url: t.url,
                  },
                  n == null ? void 0 : n.current,
                  f
                ).then(function (d) {
                  o(!1), t.onLoad && t.onLoad(d);
                });
            }
          }),
          function () {
            a = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  ki = "createShareButton",
  b1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[ki]) {
                console.error(
                  "Method " + ki + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[ki](
                t.url,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  bi = "createFollowButton",
  N1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[bi]) {
                console.error(
                  "Method " + bi + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[bi](
                t.screenName,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Ni = "createHashtagButton",
  _1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Ni]) {
                console.error(
                  "Method " + Ni + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Ni](
                t.tag,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  _i = "createMentionButton",
  C1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[_i]) {
                console.error(
                  "Method " + _i + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[_i](
                t.screenName,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Ci = "createTweet",
  O1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Ci]) {
                console.error(
                  "Method " + Ci + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Ci](
                t.tweetId,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Oi = "createMoment",
  T1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Oi]) {
                console.error(
                  "Method " + Oi + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Oi](
                t.momentId,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Ti = "createDMButton",
  R1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Ti]) {
                console.error(
                  "Method " + Ti + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Ti](
                t.id,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                i && (o(!1), t.onLoad && t.onLoad(a));
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Ri = "createVideo",
  I1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Ri]) {
                console.error(
                  "Method " + Ri + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Ri](
                t.id,
                n == null ? void 0 : n.current
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  },
  Ii = "createPeriscopeOnAirButton",
  D1 = function (t) {
    var n = N.useRef(null),
      r = N.useState(!0),
      l = r[0],
      o = r[1];
    return (
      N.useEffect(function () {
        var i = !0,
          s = require("scriptjs");
        return (
          s(ft, "twitter-embed", function () {
            if (!window.twttr) {
              console.error("Failure to load window.twttr, aborting load");
              return;
            }
            if (i) {
              if (!window.twttr.widgets[Ii]) {
                console.error(
                  "Method " + Ii + " is not present anymore in twttr.widget api"
                );
                return;
              }
              window.twttr.widgets[Ii](
                t.username,
                n == null ? void 0 : n.current,
                t.options
              ).then(function (a) {
                o(!1), t.onLoad && t.onLoad(a);
              });
            }
          }),
          function () {
            i = !1;
          }
        );
      }, []),
      N.createElement(
        N.Fragment,
        null,
        l && N.createElement(N.Fragment, null, t.placeholder),
        N.createElement("div", { ref: n })
      )
    );
  };
const L1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        TwitterDMButton: R1,
        TwitterFollowButton: N1,
        TwitterHashtagButton: _1,
        TwitterMentionButton: C1,
        TwitterMomentShare: T1,
        TwitterOnAirButton: D1,
        TwitterShareButton: b1,
        TwitterTimelineEmbed: k1,
        TwitterTweetEmbed: O1,
        TwitterVideoEmbed: I1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  U1 = Zc(L1);
var F1 =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  M1 =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  B1 =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            F1(t, e, n);
      return M1(t, e), t;
    },
  z1 =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  V1 =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.TwitterEmbed = void 0;
const H1 = V1(Xe),
  xl = B1(j),
  W1 = U1,
  Q1 = rt,
  $1 = lt,
  Y1 = 250,
  G1 = 550,
  X1 = 350,
  Qc = 12,
  J1 = (e) => {
    var t,
      n,
      {
        url: r,
        width: l,
        height: o,
        linkText: i = "View post on Twitter",
        placeholderImageUrl: s,
        placeholderSpinner: a,
        placeholderSpinnerDisabled: c = !1,
        placeholderProps: f,
        embedPlaceholder: d,
        placeholderDisabled: h,
        twitterTweetEmbedProps: w,
      } = e,
      v = z1(e, [
        "url",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
        "twitterTweetEmbedProps",
      ]);
    const y = r.substring(r.lastIndexOf("/") + 1).replace(/[?].*$/, ""),
      E = !!(l != null && l.toString().includes("%")),
      m = !!(o != null && o.toString().includes("%")),
      p = {
        minWidth: Y1,
        maxWidth: G1,
        width: typeof l < "u" ? (E ? "100%" : l) : "100%",
        height: m
          ? "100%"
          : typeof o < "u"
          ? o
          : typeof ((t = v.style) === null || t === void 0
              ? void 0
              : t.height) < "u" ||
            typeof ((n = v.style) === null || n === void 0
              ? void 0
              : n.maxHeight) < "u"
          ? "100%"
          : X1,
        border: "solid 1px #c9d4d9",
        borderRadius: Qc,
      },
      g =
        d ??
        xl.createElement(
          Q1.PlaceholderEmbed,
          Object.assign(
            {
              url: r,
              imageUrl: s,
              linkText: i,
              spinner: a,
              spinnerDisabled: c,
            },
            f,
            {
              style: Object.assign(
                Object.assign({}, p),
                f == null ? void 0 : f.style
              ),
            }
          )
        );
    return xl.createElement(
      "div",
      Object.assign({}, v, {
        className: (0, H1.default)(
          "rsme-embed rsme-twitter-embed",
          v.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: l ?? void 0,
            height: o ?? void 0,
            borderRadius: Qc,
          },
          v.style
        ),
      }),
      xl.createElement($1.EmbedStyle, null),
      xl.createElement(
        W1.TwitterTweetEmbed,
        Object.assign({ tweetId: y, placeholder: h ? void 0 : g }, w)
      )
    );
  };
Ho.TwitterEmbed = J1;
var Wo = {},
  ih = { exports: {} },
  K1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Z1 = K1,
  q1 = Z1;
function sh() {}
function ah() {}
ah.resetWarningCache = sh;
var ew = function () {
  function e(r, l, o, i, s, a) {
    if (a !== q1) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ah,
    resetWarningCache: sh,
  };
  return (n.PropTypes = n), n;
};
ih.exports = ew();
var tw = ih.exports;
const he = fo(tw);
var nw = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, l, o;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (l = r; l-- !== 0; ) if (!e(t[l], n[l])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((o = Object.keys(t)), (r = o.length), r !== Object.keys(n).length))
      return !1;
    for (l = r; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[l])) return !1;
    for (l = r; l-- !== 0; ) {
      var i = o[l];
      if (!e(t[i], n[i])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const rw = fo(nw);
var Ls = { exports: {} },
  uh;
/**
 * @link https://github.com/gajus/sister for the canonical source repository
 * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
 */ uh = function () {
  var e = {},
    t = {};
  return (
    (e.on = function (n, r) {
      var l = { name: n, handler: r };
      return (t[n] = t[n] || []), t[n].unshift(l), l;
    }),
    (e.off = function (n) {
      var r = t[n.name].indexOf(n);
      r !== -1 && t[n.name].splice(r, 1);
    }),
    (e.trigger = function (n, r) {
      var l = t[n],
        o;
      if (l) for (o = l.length; o--; ) l[o].handler(r);
    }),
    e
  );
};
var lw = uh,
  Us = { exports: {} },
  ow = function (t, n, r) {
    var l = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("script");
    typeof n == "function" && ((r = n), (n = {})),
      (n = n || {}),
      (r = r || function () {}),
      (o.type = n.type || "text/javascript"),
      (o.charset = n.charset || "utf8"),
      (o.async = "async" in n ? !!n.async : !0),
      (o.src = t),
      n.attrs && iw(o, n.attrs),
      n.text && (o.text = "" + n.text);
    var i = "onload" in o ? $c : sw;
    i(o, r), o.onload || $c(o, r), l.appendChild(o);
  };
function iw(e, t) {
  for (var n in t) e.setAttribute(n, t[n]);
}
function $c(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(new Error("Failed to load " + this.src), e);
    });
}
function sw(e, t) {
  e.onreadystatechange = function () {
    (this.readyState != "complete" && this.readyState != "loaded") ||
      ((this.onreadystatechange = null), t(null, e));
  };
}
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = ow,
    r = l(n);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  (t.default = function (o) {
    var i = new Promise(function (s) {
      if (
        window.YT &&
        window.YT.Player &&
        window.YT.Player instanceof Function
      ) {
        s(window.YT);
        return;
      } else {
        var a = window.location.protocol === "http:" ? "http:" : "https:";
        (0, r.default)(a + "//www.youtube.com/iframe_api", function (f) {
          f && o.trigger("error", f);
        });
      }
      var c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () {
        c && c(), s(window.YT);
      };
    });
    return i;
  }),
    (e.exports = t.default);
})(Us, Us.exports);
var aw = Us.exports,
  Fs = { exports: {} },
  Ms = { exports: {} },
  Bs = { exports: {} },
  Br = 1e3,
  zr = Br * 60,
  Vr = zr * 60,
  Hr = Vr * 24,
  uw = Hr * 365.25,
  cw = function (e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0) return dw(e);
    if (n === "number" && isNaN(e) === !1) return t.long ? pw(e) : fw(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
function dw(e) {
  if (((e = String(e)), !(e.length > 100))) {
    var t =
      /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
      );
    if (t) {
      var n = parseFloat(t[1]),
        r = (t[2] || "ms").toLowerCase();
      switch (r) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * uw;
        case "days":
        case "day":
        case "d":
          return n * Hr;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * Vr;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * zr;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * Br;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function fw(e) {
  return e >= Hr
    ? Math.round(e / Hr) + "d"
    : e >= Vr
    ? Math.round(e / Vr) + "h"
    : e >= zr
    ? Math.round(e / zr) + "m"
    : e >= Br
    ? Math.round(e / Br) + "s"
    : e + "ms";
}
function pw(e) {
  return (
    Sl(e, Hr, "day") ||
    Sl(e, Vr, "hour") ||
    Sl(e, zr, "minute") ||
    Sl(e, Br, "second") ||
    e + " ms"
  );
}
function Sl(e, t, n) {
  if (!(e < t))
    return e < t * 1.5
      ? Math.floor(e / t) + " " + n
      : Math.ceil(e / t) + " " + n + "s";
}
(function (e, t) {
  (t = e.exports = l.debug = l.default = l),
    (t.coerce = a),
    (t.disable = i),
    (t.enable = o),
    (t.enabled = s),
    (t.humanize = cw),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
  var n;
  function r(c) {
    var f = 0,
      d;
    for (d in c) (f = (f << 5) - f + c.charCodeAt(d)), (f |= 0);
    return t.colors[Math.abs(f) % t.colors.length];
  }
  function l(c) {
    function f() {
      if (f.enabled) {
        var d = f,
          h = +new Date(),
          w = h - (n || h);
        (d.diff = w), (d.prev = n), (d.curr = h), (n = h);
        for (var v = new Array(arguments.length), y = 0; y < v.length; y++)
          v[y] = arguments[y];
        (v[0] = t.coerce(v[0])), typeof v[0] != "string" && v.unshift("%O");
        var E = 0;
        (v[0] = v[0].replace(/%([a-zA-Z%])/g, function (p, g) {
          if (p === "%%") return p;
          E++;
          var x = t.formatters[g];
          if (typeof x == "function") {
            var A = v[E];
            (p = x.call(d, A)), v.splice(E, 1), E--;
          }
          return p;
        })),
          t.formatArgs.call(d, v);
        var m = f.log || t.log || console.log.bind(console);
        m.apply(d, v);
      }
    }
    return (
      (f.namespace = c),
      (f.enabled = t.enabled(c)),
      (f.useColors = t.useColors()),
      (f.color = r(c)),
      typeof t.init == "function" && t.init(f),
      f
    );
  }
  function o(c) {
    t.save(c), (t.names = []), (t.skips = []);
    for (
      var f = (typeof c == "string" ? c : "").split(/[\s,]+/),
        d = f.length,
        h = 0;
      h < d;
      h++
    )
      f[h] &&
        ((c = f[h].replace(/\*/g, ".*?")),
        c[0] === "-"
          ? t.skips.push(new RegExp("^" + c.substr(1) + "$"))
          : t.names.push(new RegExp("^" + c + "$")));
  }
  function i() {
    t.enable("");
  }
  function s(c) {
    var f, d;
    for (f = 0, d = t.skips.length; f < d; f++)
      if (t.skips[f].test(c)) return !1;
    for (f = 0, d = t.names.length; f < d; f++)
      if (t.names[f].test(c)) return !0;
    return !1;
  }
  function a(c) {
    return c instanceof Error ? c.stack || c.message : c;
  }
})(Bs, Bs.exports);
var hw = Bs.exports;
(function (e, t) {
  (t = e.exports = hw),
    (t.log = l),
    (t.formatArgs = r),
    (t.save = o),
    (t.load = i),
    (t.useColors = n),
    (t.storage =
      typeof chrome < "u" && typeof chrome.storage < "u"
        ? chrome.storage.local
        : s()),
    (t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ]);
  function n() {
    return typeof window < "u" &&
      window.process &&
      window.process.type === "renderer"
      ? !0
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  t.formatters.j = function (a) {
    try {
      return JSON.stringify(a);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
  function r(a) {
    var c = this.useColors;
    if (
      ((a[0] =
        (c ? "%c" : "") +
        this.namespace +
        (c ? " %c" : " ") +
        a[0] +
        (c ? "%c " : " ") +
        "+" +
        t.humanize(this.diff)),
      !!c)
    ) {
      var f = "color: " + this.color;
      a.splice(1, 0, f, "color: inherit");
      var d = 0,
        h = 0;
      a[0].replace(/%[a-zA-Z%]/g, function (w) {
        w !== "%%" && (d++, w === "%c" && (h = d));
      }),
        a.splice(h, 0, f);
    }
  }
  function l() {
    return (
      typeof console == "object" &&
      console.log &&
      Function.prototype.apply.call(console.log, console, arguments)
    );
  }
  function o(a) {
    try {
      a == null ? t.storage.removeItem("debug") : (t.storage.debug = a);
    } catch {}
  }
  function i() {
    var a;
    try {
      a = t.storage.debug;
    } catch {}
    return !a && typeof process < "u" && "env" in process && (a = {}.DEBUG), a;
  }
  t.enable(i());
  function s() {
    try {
      return window.localStorage;
    } catch {}
  }
})(Ms, Ms.exports);
var mw = Ms.exports,
  zs = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = [
      "cueVideoById",
      "loadVideoById",
      "cueVideoByUrl",
      "loadVideoByUrl",
      "playVideo",
      "pauseVideo",
      "stopVideo",
      "getVideoLoadedFraction",
      "cuePlaylist",
      "loadPlaylist",
      "nextVideo",
      "previousVideo",
      "playVideoAt",
      "setShuffle",
      "setLoop",
      "getPlaylist",
      "getPlaylistIndex",
      "setOption",
      "mute",
      "unMute",
      "isMuted",
      "setVolume",
      "getVolume",
      "seekTo",
      "getPlayerState",
      "getPlaybackRate",
      "setPlaybackRate",
      "getAvailablePlaybackRates",
      "getPlaybackQuality",
      "setPlaybackQuality",
      "getAvailableQualityLevels",
      "getCurrentTime",
      "getDuration",
      "removeEventListener",
      "getVideoUrl",
      "getVideoEmbedCode",
      "getOptions",
      "getOption",
      "addEventListener",
      "destroy",
      "setSize",
      "getIframe",
    ]),
    (e.exports = t.default);
})(zs, zs.exports);
var gw = zs.exports,
  Vs = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = [
      "ready",
      "stateChange",
      "playbackQualityChange",
      "playbackRateChange",
      "error",
      "apiChange",
      "volumeChange",
    ]),
    (e.exports = t.default);
})(Vs, Vs.exports);
var vw = Vs.exports,
  Hs = { exports: {} },
  Ws = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5,
    }),
    (e.exports = t.default);
})(Ws, Ws.exports);
var yw = Ws.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = yw,
    r = l(n);
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  (t.default = {
    pauseVideo: {
      acceptableStates: [r.default.ENDED, r.default.PAUSED],
      stateChangeRequired: !1,
    },
    playVideo: {
      acceptableStates: [r.default.ENDED, r.default.PLAYING],
      stateChangeRequired: !1,
    },
    seekTo: {
      acceptableStates: [r.default.ENDED, r.default.PLAYING, r.default.PAUSED],
      stateChangeRequired: !0,
      timeout: 3e3,
    },
  }),
    (e.exports = t.default);
})(Hs, Hs.exports);
var ww = Hs.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = mw,
    r = f(n),
    l = gw,
    o = f(l),
    i = vw,
    s = f(i),
    a = ww,
    c = f(a);
  function f(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var d = (0, r.default)("youtube-player"),
    h = {};
  (h.proxyEvents = function (w) {
    var v = {},
      y = function (O) {
        var b = "on" + O.slice(0, 1).toUpperCase() + O.slice(1);
        v[b] = function (U) {
          d('event "%s"', b, U), w.trigger(O, U);
        };
      },
      E = !0,
      m = !1,
      p = void 0;
    try {
      for (
        var g = s.default[Symbol.iterator](), x;
        !(E = (x = g.next()).done);
        E = !0
      ) {
        var A = x.value;
        y(A);
      }
    } catch (_) {
      (m = !0), (p = _);
    } finally {
      try {
        !E && g.return && g.return();
      } finally {
        if (m) throw p;
      }
    }
    return v;
  }),
    (h.promisifyPlayer = function (w) {
      var v =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        y = {},
        E = function (b) {
          v && c.default[b]
            ? (y[b] = function () {
                for (var U = arguments.length, T = Array(U), F = 0; F < U; F++)
                  T[F] = arguments[F];
                return w.then(function (W) {
                  var Q = c.default[b],
                    ue = W.getPlayerState(),
                    z = W[b].apply(W, T);
                  return Q.stateChangeRequired ||
                    (Array.isArray(Q.acceptableStates) &&
                      Q.acceptableStates.indexOf(ue) === -1)
                    ? new Promise(function (Y) {
                        var G = function P() {
                          var D = W.getPlayerState(),
                            L = void 0;
                          typeof Q.timeout == "number" &&
                            (L = setTimeout(function () {
                              W.removeEventListener("onStateChange", P), Y();
                            }, Q.timeout)),
                            Array.isArray(Q.acceptableStates) &&
                              Q.acceptableStates.indexOf(D) !== -1 &&
                              (W.removeEventListener("onStateChange", P),
                              clearTimeout(L),
                              Y());
                        };
                        W.addEventListener("onStateChange", G);
                      }).then(function () {
                        return z;
                      })
                    : z;
                });
              })
            : (y[b] = function () {
                for (var U = arguments.length, T = Array(U), F = 0; F < U; F++)
                  T[F] = arguments[F];
                return w.then(function (W) {
                  return W[b].apply(W, T);
                });
              });
        },
        m = !0,
        p = !1,
        g = void 0;
      try {
        for (
          var x = o.default[Symbol.iterator](), A;
          !(m = (A = x.next()).done);
          m = !0
        ) {
          var _ = A.value;
          E(_);
        }
      } catch (O) {
        (p = !0), (g = O);
      } finally {
        try {
          !m && x.return && x.return();
        } finally {
          if (p) throw g;
        }
      }
      return y;
    }),
    (t.default = h),
    (e.exports = t.default);
})(Fs, Fs.exports);
var xw = Fs.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (d) {
            return typeof d;
          }
        : function (d) {
            return d &&
              typeof Symbol == "function" &&
              d.constructor === Symbol &&
              d !== Symbol.prototype
              ? "symbol"
              : typeof d;
          },
    r = lw,
    l = c(r),
    o = aw,
    i = c(o),
    s = xw,
    a = c(s);
  function c(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var f = void 0;
  (t.default = function (d) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      v = (0, l.default)();
    if ((f || (f = (0, i.default)(v)), h.events))
      throw new Error("Event handlers cannot be overwritten.");
    if (typeof d == "string" && !document.getElementById(d))
      throw new Error('Element "' + d + '" does not exist.');
    h.events = a.default.proxyEvents(v);
    var y = new Promise(function (m) {
        if (
          (typeof d > "u" ? "undefined" : n(d)) === "object" &&
          d.playVideo instanceof Function
        ) {
          var p = d;
          m(p);
        } else
          f.then(function (g) {
            var x = new g.Player(d, h);
            return (
              v.on("ready", function () {
                m(x);
              }),
              null
            );
          });
      }),
      E = a.default.promisifyPlayer(y, w);
    return (E.on = v.on), (E.off = v.off), E;
  }),
    (e.exports = t.default);
})(Ls, Ls.exports);
var Sw = Ls.exports;
const Ew = fo(Sw);
var Aw = Object.defineProperty,
  jw = Object.defineProperties,
  Pw = Object.getOwnPropertyDescriptors,
  Yc = Object.getOwnPropertySymbols,
  kw = Object.prototype.hasOwnProperty,
  bw = Object.prototype.propertyIsEnumerable,
  Gc = (e, t, n) =>
    t in e
      ? Aw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Qs = (e, t) => {
    for (var n in t || (t = {})) kw.call(t, n) && Gc(e, n, t[n]);
    if (Yc) for (var n of Yc(t)) bw.call(t, n) && Gc(e, n, t[n]);
    return e;
  },
  $s = (e, t) => jw(e, Pw(t)),
  Nw = (e, t, n) =>
    new Promise((r, l) => {
      var o = (a) => {
          try {
            s(n.next(a));
          } catch (c) {
            l(c);
          }
        },
        i = (a) => {
          try {
            s(n.throw(a));
          } catch (c) {
            l(c);
          }
        },
        s = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(o, i));
      s((n = n.apply(e, t)).next());
    });
function _w(e, t) {
  var n, r;
  if (e.videoId !== t.videoId) return !0;
  const l = ((n = e.opts) == null ? void 0 : n.playerVars) || {},
    o = ((r = t.opts) == null ? void 0 : r.playerVars) || {};
  return l.start !== o.start || l.end !== o.end;
}
function Xc(e = {}) {
  return $s(Qs({}, e), {
    height: 0,
    width: 0,
    playerVars: $s(Qs({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }),
  });
}
function Cw(e, t) {
  return e.videoId !== t.videoId || !rw(Xc(e.opts), Xc(t.opts));
}
function Ow(e, t) {
  var n, r, l, o;
  return (
    e.id !== t.id ||
    e.className !== t.className ||
    ((n = e.opts) == null ? void 0 : n.width) !==
      ((r = t.opts) == null ? void 0 : r.width) ||
    ((l = e.opts) == null ? void 0 : l.height) !==
      ((o = t.opts) == null ? void 0 : o.height) ||
    e.iframeClassName !== t.iframeClassName ||
    e.title !== t.title
  );
}
var Tw = {
    videoId: "",
    id: "",
    className: "",
    iframeClassName: "",
    style: {},
    title: "",
    loading: void 0,
    opts: {},
    onReady: () => {},
    onError: () => {},
    onPlay: () => {},
    onPause: () => {},
    onEnd: () => {},
    onStateChange: () => {},
    onPlaybackRateChange: () => {},
    onPlaybackQualityChange: () => {},
  },
  Rw = {
    videoId: he.string,
    id: he.string,
    className: he.string,
    iframeClassName: he.string,
    style: he.object,
    title: he.string,
    loading: he.oneOf(["lazy", "eager"]),
    opts: he.objectOf(he.any),
    onReady: he.func,
    onError: he.func,
    onPlay: he.func,
    onPause: he.func,
    onEnd: he.func,
    onStateChange: he.func,
    onPlaybackRateChange: he.func,
    onPlaybackQualityChange: he.func,
  },
  Ul = class extends N.Component {
    constructor(e) {
      super(e),
        (this.destroyPlayerPromise = void 0),
        (this.onPlayerReady = (t) => {
          var n, r;
          return (r = (n = this.props).onReady) == null ? void 0 : r.call(n, t);
        }),
        (this.onPlayerError = (t) => {
          var n, r;
          return (r = (n = this.props).onError) == null ? void 0 : r.call(n, t);
        }),
        (this.onPlayerStateChange = (t) => {
          var n, r, l, o, i, s, a, c;
          switch (
            ((r = (n = this.props).onStateChange) == null || r.call(n, t),
            t.data)
          ) {
            case Ul.PlayerState.ENDED:
              (o = (l = this.props).onEnd) == null || o.call(l, t);
              break;
            case Ul.PlayerState.PLAYING:
              (s = (i = this.props).onPlay) == null || s.call(i, t);
              break;
            case Ul.PlayerState.PAUSED:
              (c = (a = this.props).onPause) == null || c.call(a, t);
              break;
          }
        }),
        (this.onPlayerPlaybackRateChange = (t) => {
          var n, r;
          return (r = (n = this.props).onPlaybackRateChange) == null
            ? void 0
            : r.call(n, t);
        }),
        (this.onPlayerPlaybackQualityChange = (t) => {
          var n, r;
          return (r = (n = this.props).onPlaybackQualityChange) == null
            ? void 0
            : r.call(n, t);
        }),
        (this.destroyPlayer = () =>
          this.internalPlayer
            ? ((this.destroyPlayerPromise = this.internalPlayer
                .destroy()
                .then(() => (this.destroyPlayerPromise = void 0))),
              this.destroyPlayerPromise)
            : Promise.resolve()),
        (this.createPlayer = () => {
          if (typeof document > "u") return;
          if (this.destroyPlayerPromise) {
            this.destroyPlayerPromise.then(this.createPlayer);
            return;
          }
          const t = $s(Qs({}, this.props.opts), {
            videoId: this.props.videoId,
          });
          (this.internalPlayer = Ew(this.container, t)),
            this.internalPlayer.on("ready", this.onPlayerReady),
            this.internalPlayer.on("error", this.onPlayerError),
            this.internalPlayer.on("stateChange", this.onPlayerStateChange),
            this.internalPlayer.on(
              "playbackRateChange",
              this.onPlayerPlaybackRateChange
            ),
            this.internalPlayer.on(
              "playbackQualityChange",
              this.onPlayerPlaybackQualityChange
            ),
            (this.props.title || this.props.loading) &&
              this.internalPlayer.getIframe().then((n) => {
                this.props.title && n.setAttribute("title", this.props.title),
                  this.props.loading &&
                    n.setAttribute("loading", this.props.loading);
              });
        }),
        (this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer)),
        (this.updatePlayer = () => {
          var t;
          (t = this.internalPlayer) == null ||
            t.getIframe().then((n) => {
              this.props.id
                ? n.setAttribute("id", this.props.id)
                : n.removeAttribute("id"),
                this.props.iframeClassName
                  ? n.setAttribute("class", this.props.iframeClassName)
                  : n.removeAttribute("class"),
                this.props.opts && this.props.opts.width
                  ? n.setAttribute("width", this.props.opts.width.toString())
                  : n.removeAttribute("width"),
                this.props.opts && this.props.opts.height
                  ? n.setAttribute("height", this.props.opts.height.toString())
                  : n.removeAttribute("height"),
                this.props.title
                  ? n.setAttribute("title", this.props.title)
                  : n.setAttribute("title", "YouTube video player"),
                this.props.loading
                  ? n.setAttribute("loading", this.props.loading)
                  : n.removeAttribute("loading");
            });
        }),
        (this.getInternalPlayer = () => this.internalPlayer),
        (this.updateVideo = () => {
          var t, n, r, l;
          if (typeof this.props.videoId > "u" || this.props.videoId === null) {
            (t = this.internalPlayer) == null || t.stopVideo();
            return;
          }
          let o = !1;
          const i = { videoId: this.props.videoId };
          if (
            ((n = this.props.opts) != null &&
              n.playerVars &&
              ((o = this.props.opts.playerVars.autoplay === 1),
              "start" in this.props.opts.playerVars &&
                (i.startSeconds = this.props.opts.playerVars.start),
              "end" in this.props.opts.playerVars &&
                (i.endSeconds = this.props.opts.playerVars.end)),
            o)
          ) {
            (r = this.internalPlayer) == null || r.loadVideoById(i);
            return;
          }
          (l = this.internalPlayer) == null || l.cueVideoById(i);
        }),
        (this.refContainer = (t) => {
          this.container = t;
        }),
        (this.container = null),
        (this.internalPlayer = null);
    }
    componentDidMount() {
      this.createPlayer();
    }
    componentDidUpdate(e) {
      return Nw(this, null, function* () {
        Ow(e, this.props) && this.updatePlayer(),
          Cw(e, this.props) && (yield this.resetPlayer()),
          _w(e, this.props) && this.updateVideo();
      });
    }
    componentWillUnmount() {
      this.destroyPlayer();
    }
    render() {
      return N.createElement(
        "div",
        { className: this.props.className, style: this.props.style },
        N.createElement("div", {
          id: this.props.id,
          className: this.props.iframeClassName,
          ref: this.refContainer,
        })
      );
    }
  },
  Qo = Ul;
Qo.propTypes = Rw;
Qo.defaultProps = Tw;
Qo.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};
var Iw = Qo;
const Dw = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Iw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Lw = Zc(Dw);
var Uw =
    (C && C.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var l = Object.getOwnPropertyDescriptor(t, n);
          (!l || ("get" in l ? !t.__esModule : l.writable || l.configurable)) &&
            (l = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, l);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  Fw =
    (C && C.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  Mw =
    (C && C.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Uw(t, e, n);
      return Fw(t, e), t;
    },
  Bw =
    (C && C.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    },
  ch =
    (C && C.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.YouTubeEmbed = void 0;
const Jc = ch(Xe),
  mn = Mw(j),
  zw = ch(Lw),
  Vw = rt,
  Hw = lt,
  Ww = 640,
  Qw = 360,
  Kc = 0,
  $w = (e) => {
    var t,
      n,
      r,
      l,
      o,
      i,
      s,
      a,
      c,
      f,
      d,
      h,
      w,
      {
        url: v,
        width: y,
        height: E,
        linkText: m = "Watch on YouTube",
        placeholderImageUrl: p,
        placeholderSpinner: g,
        placeholderSpinnerDisabled: x = !1,
        placeholderProps: A,
        embedPlaceholder: _,
        placeholderDisabled: O,
        youTubeProps: b,
      } = e,
      U = Bw(e, [
        "url",
        "width",
        "height",
        "linkText",
        "placeholderImageUrl",
        "placeholderSpinner",
        "placeholderSpinnerDisabled",
        "placeholderProps",
        "embedPlaceholder",
        "placeholderDisabled",
        "youTubeProps",
      ]);
    const [T, F] = mn.useState(!1),
      W =
        (t = v.match(/[?&]v=(.+?)(?:$|[&?])/)) === null || t === void 0
          ? void 0
          : t[1],
      Q =
        (n = v.match(
          /https:\/\/(?:www\.)?youtube\.com\/shorts\/(.+?)(?:$|[&?])/
        )) === null || n === void 0
          ? void 0
          : n[1],
      ue =
        (r = v.match(/https:\/\/youtu\.be\/(.+?)(?:$|[&?])/)) === null ||
        r === void 0
          ? void 0
          : r[1],
      z =
        (l = v.match(
          /https:\/\/(?:www\.)youtube(-nocookie)?\.com\/embed\/(.+?)(?:$|[&?])/
        )) === null || l === void 0
          ? void 0
          : l[2],
      Y =
        (s =
          (i = (o = W ?? Q) !== null && o !== void 0 ? o : ue) !== null &&
          i !== void 0
            ? i
            : z) !== null && s !== void 0
          ? s
          : "00000000",
      G = +((c =
        (a = v.match(/(.+?)(?:$|[&?])start=(\d+)/)) === null || a === void 0
          ? void 0
          : a[2]) !== null && c !== void 0
        ? c
        : 0),
      P = !!(y != null && y.toString().includes("%")),
      D = !!(E != null && E.toString().includes("%"));
    let L = {};
    G && (L.playerVars = { start: G }),
      typeof y < "u" && (L.width = P ? "100%" : `${y}`),
      typeof E < "u" && (L.height = D ? "100%" : `${E}`),
      (L = Object.assign(Object.assign({}, L), b == null ? void 0 : b.opts));
    const R = {
        maxWidth: P ? void 0 : Ww,
        width: typeof y < "u" ? (P ? "100%" : y) : "100%",
        height: D
          ? "100%"
          : typeof E < "u"
          ? E
          : typeof ((f = U.style) === null || f === void 0
              ? void 0
              : f.height) < "u" ||
            typeof ((d = U.style) === null || d === void 0
              ? void 0
              : d.maxHeight) < "u"
          ? "100%"
          : Qw,
        border: "1px solid #dee2e6",
        borderRadius: Kc,
      },
      M =
        _ ??
        mn.createElement(
          Vw.PlaceholderEmbed,
          Object.assign(
            {
              url: v,
              imageUrl: p,
              linkText: m,
              spinner: g,
              spinnerDisabled: x,
            },
            A,
            {
              style: Object.assign(
                Object.assign({}, R),
                A == null ? void 0 : A.style
              ),
            }
          )
        );
    return mn.createElement(
      "div",
      Object.assign({}, U, {
        className: (0, Jc.default)(
          "rsme-embed rsme-youtube-embed",
          U.className
        ),
        style: Object.assign(
          {
            overflow: "hidden",
            width: y ?? void 0,
            height: E ?? void 0,
            borderRadius: Kc,
          },
          U.style
        ),
      }),
      mn.createElement(Hw.EmbedStyle, null),
      mn.createElement(
        "div",
        { className: (0, Jc.default)(!T && "rsme-d-none") },
        mn.createElement(
          zw.default,
          Object.assign({}, b, {
            className:
              (h = b == null ? void 0 : b.className) !== null && h !== void 0
                ? h
                : "youtube-iframe",
            videoId:
              (w = b == null ? void 0 : b.videoId) !== null && w !== void 0
                ? w
                : Y,
            opts: L,
            onReady: (ye) => {
              F(!0), b && b.onReady && (b == null || b.onReady(ye));
            },
          })
        )
      ),
      !T && !O && M
    );
  };
Wo.YouTubeEmbed = $w;
(function (e) {
  var t =
      (C && C.__createBinding) ||
      (Object.create
        ? function (r, l, o, i) {
            i === void 0 && (i = o);
            var s = Object.getOwnPropertyDescriptor(l, o);
            (!s ||
              ("get" in s ? !l.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return l[o];
                },
              }),
              Object.defineProperty(r, i, s);
          }
        : function (r, l, o, i) {
            i === void 0 && (i = o), (r[i] = l[o]);
          }),
    n =
      (C && C.__exportStar) ||
      function (r, l) {
        for (var o in r)
          o !== "default" &&
            !Object.prototype.hasOwnProperty.call(l, o) &&
            t(l, r, o);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    n(Uo, e),
    n(Mo, e),
    n(Bo, e),
    n(zo, e),
    n(Vo, e),
    n(Ho, e),
    n(Wo, e),
    n(rt, e),
    n(Zr, e);
})(Kp);
const Yw = "/static/assets/SWE-237c7eea.png",
  Gw = "/static/assets/bm-3d9dddcd.png",
  Xw = "/static/assets/CDE-5ef17c06.png",
  Jw = "/static/assets/EY-54530079.png",
  Kw = "/static/assets/unity-d7014889.png",
  Zw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgB7VUxchNBEOzZNZScXclQRXj+gfwDKbfgeIFxQvmKwOIFkl4gKzAqk0g/8GGbWHqCfoBCqgCx5UgY7w6zd7pDwuYggMTluWR2Z6avp4Newi0RhcPAXS4OGdwCyBAwOpvHXfwh8jmf+3660fBoULcOQ0nDX0ozrfXz5NPL6W3AT6uD9pJMkF4Q9gvw6PFxzTrVA6Oe1TDjrBQS2PDPoZF+gG7yMZ6VksnBd6snbYLrZHdsHKi/4SpHVn87BXNdOzSuFSJpPsy3ALgPomdrZAhdYtTY9wm4am69iXJgaZ4oRzsX87iTmH2zKoncteQn25QCe5aUbpltha5ylZ3zL/FIasXcRqER4935/CBCSSQmlWK7WT0RbV1PpJpqV2mcrRMpQhUJ0Vf8ZWjnkmxRNslvgNfA/0fcg9+D32HwoBTcO11zazD2puXPVmEs5xcoCe/lS9vdy27YbKw1PBmE9jv3xEJTj/Gm5B8L9kbFGDZlWD9EA4ubZOzlYmm75L+pspVJAe4gLK84KowMNFIO8voszLWqtMQN237YXuEDNCcQfxV7Df2GQqaek7HikO/n8ZE/rzJP/+ptl4m7F58PJiu1ThQMRiJPR/I9AU43W24Upjmhr+1mZ9UhKQp6gVObYymaDDSeoEzb4G3NKXvK+csjZLS1rxPzaop/FbuicxQc18p6fgAGVukHG13ukgAAAABJRU5ErkJggg==",
  qw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgB7VdNbtNAFH5vnFCxASsFiaU5AeYGzp607gmgG6Bl0eYEaU9QukDuLuEENbRiS3oCcgSzQ6KVRgikoGTm8WbS0DqqZI9bEEj+pGTs8bwfv38D1KiRB0JFxEHf19/GWwgYENBncQsG6ZeNDCqgkhLx/TehUviRyf1LrKTyRPvD1+cjcISAClBKHFoFEIf8FrtsDRZMvqfUobEQOKIBjnhyL4lAQ8DCs/dnL9vn2zsrrYNP7JYQvo9Dvh86sHS3hNAQmVUjvMs/oRPzrzSF4IhK7rCEBHJhy95jLk7+sBI3iVqJOQqzI36QBGqCe0qIXZcaYGuJ9npek7pFRazQEmrC2UAUN5XeAgdoJbYNnaUvwP8ZE1yQbCpynVhMRefUrK6EQBsXXDEf5fYBVu2KNJqteBdKojAwPeGNlFIsRNtK2JiOR1osSSKMOssH3EPIVM6nfOC8lG+mVkm+J0OPkBXJKLbE5EeG7AICDGPuG6nsSi1wzT7jwGPhff5F9gyKrtk2GWX7CHfW9HRjeG0ljFBm9tZcK4KeWY+ZsafhISu2LwAHdtX4+OjshbWCmtDenBxKoNQ8EftJoAVxl+S+IOj10elm98pzdtD52WMrbBvLGMVSWTzolB5qOsvJM2v6GTL2xb5ngnTK103PV2oaMTtTS4IZZ7E2t8yNKWFgZglu5X2aC7qaYaYFrB+XiIVLNO6wVtG4ikihUcgGJYkhoD7x9O1BKtcl/C2stJKdTishs8I18E+U7dLumHVTWxOCi13yZxO3KeX42wWcRbJxZ6mdZuXcUn7QVZ4PpKL85vwd7EjnX+xypDgMvM7ZUeZcY6plKl85f3/UqFFjEb8AttgHQ9X03EkAAAAASUVORK5CYII=",
  ex =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAILSURBVHgB7ZVNbtNQEMf/Y0cVKxRSkNjhnoAeId2nwjfA2SBlhThBxAkKC7BYpTeoEeyTG7ScoFmyAMlKhWrazpu+sZO0jR3FSfohVf5Lkb/mvfllPt4AlSpVugP59dDzvV4da8rBimo1vnXZwTGPksN1QWpYQbubYQ9igvGjhzhRiLjIVgF5dBq4GxRFvztDrAuRbniS7EEQlF1j7X2A9vgcb+zjTpFN6XQowMXof38ZAJXLSUSQ2K5r+s/DZpFNbZ5D/Dv3IJzmmsVRgK7dbBuLYF982RZ239OGfNTwR/GHuNUIPxPQZUHXmgxm1+Qi4b8MPS02Zj5kg77+bP4PygCoDDuBgQQ2/L3Ju5pJPk2jUVDEOQhzlobbw4pyDHIONRpCzpHe88lpcyHEuopi7QD6njnUosxEIr/SG8n/wVuHGGuYOb7hMG1hAi1Ox0PoTiCE8Cq9am1cqX5vENpdWpR675raAFMwep1d5WghhHHyfbyMLibdRRhE8bupQxKTtrjLlIPIHVY//3QGdjpuWZhg5tNbKdG6RLYoBUOX0Z68s7MmELHpSMHy84NQUjq2LVi/CMQ12CrafArRCI+RRaf9429nf/Z76ZpQJ/Yg2qFx+5XV7uZXPSs8XVcEsBTEqiBaAw5oX9fNsymdjuvKUkMHMp4n7tMnz6JhO8ZDSEPdmjOeK1Wq9Gh0CcXi4XxLwwDzAAAAAElFTkSuQmCC",
  tx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAInSURBVHgBrVRLctNAEO0epSCsEIYFS90A5wQ2+5jSDUJWKa2wT5D4BIaVk5XlEyDjAzicIBxB7FiQZIAqipjMNN2S7LInki1SeauZnu43rz8zAA8MdA37jbNjBNPlI79G8Mmnq6i/ZguDkW9+/QmXFoJRsUq38AU5KXYJ6QeA0tPLowQ7z04/AlK45kowmV5H4Sa2N43TCwJqOpLPVU6GmuX32RCLXSFewxYQgi5YYolFIM3GpspTI821OGGnMfwnPEVjiS2u0awQU14FUku4J8KXw4CkiQipArITMdqfv7s7t3kjCGyzNtutp81faBe7sfLsTSz5E3jvYFfqKmu1UbEoAqI2Srl2DdeOBrL2DDcl0T1NiD3W5Zs5zLglqaxFcaWouTpYrM2cLmRmCVUv0VG6HOxO46zLA31My4FG7T2iveRblLrqFiSZl2TEgqaXUSx7tXCcXh29Vxb3pA65JVecpbdGJlmgn40Jj4zELMjyC8pq5I98q25mxeCm7NWXl8ANHPA+4NfxRdnHrxN9qN3YUsKcdOAbfDJyX9EmsrWUXUizQNGkuDUVoqwQSB+qyAQ7UAOUpUyrH0clFDwwShWGL4ZtQ9n31CpMrZXjVuf5EDx+Zsn36NyNvdMUdn5bJ7Ui+nB1ZCoU4kFWr+xboq9lPET4Kuu+BZmAeAthDvmWylIS7HNJUMgUPHXPKgmNhVmnMSw/tFCJu4SEPHsUQA0g2c+u7R/VAvMTDjFjbgAAAABJRU5ErkJggg==",
  nx = "/static/assets/divider-9c4dae30.png",
  rx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABDCAYAAAAfz4kVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9MSURBVHgB7Z39deM2EsBn793/pw6CVBClgjAVRFfBMhWsU4HlCuytQEoFu1cB1YG9FYhXgX0VzHHEgTWE+IGBQJGy8HuPTzaITxIcgoPBACCRuAEQcVkdZiDOojoymIApy04kEldAJSByrNmTwOiIY/g8TiFQpiz7I/APSCQ+PiX/muq474hzz+eJNxgJFlhtAtU4vwkN1QUtUE8BF8B5S16KHCZkgva+Vscz1v3gEevRi4EJsRWDiGCzn2fOuZU4t4GRwLo/d9XBkkNCj3NxNeQwMtSpUM8e6wczlIsI6Y72Zjgf6BpOItRsBSAiWPfzV9s259yew/eyvVjfjzusBfy67VrwNaJzi45zuSj/Tlzfp+pYibgWSrMQ+a5x4hfL1cAXVcseRgTPELAYNsqUZDABGCa4L8EGL/gw2UIhMtgUJGsOuxdhOYeRICk6rsVjW13RebFj86W07Mkvd/K5x/ZR+R0k+uEb94p61jASGDga47QFnscTXBgMF9yXYo8X+uyxBcII4LFvUH+XwmYj4mxkONYvx60Ie3Triv2CjP6mz9cnJ9/30ZYIt5/6T06ZFL6ARD98UbWMcnEx/KHOOH2B53HxToPHmbW5cw8jYwuCEcDmJ6Zlj0eBIvve2kkrBdFC1hUHBFlL3pkTX9ZlIcLXXWkSR95nLT99+rSG4+yOL3TBxxjyhjws26oNO4gDtSuHyzK6gIgEPVijKcTHpuojZfXz4AQ/cDixEuFbJ54cqa9gHL5WdXnrqIOBRCuu+cWfoOcLRhy98JsxBz0PEJc/4EJgrfQ1cD3kVy7MSCC98L+76v+tOG378psQbjad/N/AOIxm+vGRaQgyHtHsQEfsUVnIA/LV7XQRyC44lP8C1wcJs2tWQJ8rMJLAmRFtBrEhI5svGGFWi/UMGegooTnkj8noAoavWwbXyT1+PNOAkn9pAmwpTzgvthcnXZeBa+ICnAgyHpX9DTroJsbQ8YTk8TDCaMyywvGV/rF1Y6XnEQO6Nlf7idnBdziOtt7vDfcD29ZS6GNL/v0iJwxg+L4uITEuGG6OYSAQDJu123fkVWA81jAiGNmSX1k22TfdRahDBhEJaUtAGQUXU7Sck/Zme44rn4dcxHVn+/c2X/f64Olz9SzOneTN4abrXMIDDDPHCLaKx7CHKe/Iq8B4vMJI4AgmFxAI12WPYUT9tD+3LZ5lfOure8f1eBc8TlzXoLzA+iVhhZbpyPcVj4LMhq2cvBfiXBrFaXEuoIYMlGDYA73pya/AuGQwAiPU86yHH8PXtka1u4vRFs9yjE8crG3CzEC8Bcc1Tto+bxsLN31f3pAIA5uLaX1Rj8oCHx7Tk1+BcYm+/hJHsuSHM8F2g1EfMohErLYkbodeNz6VQpMUnzvQoTJbwNpS3ICO7YgK/jaoTbGV/rM0gOXr+hX0jGUgmkgM4uOPLMQcw+shxTDj1xLiG7/6EM1mits95wc/ROdlIJGYiEFBFmiOcVgk6xGP7LQM6Ph64dGYJeYKhgxO7Y5mAy+ReVEm+wUSiTkTqDfZe+Spxct1EI6gRGdyiACO6DwRIoFNzws+RJvdjd2WxMfHy9V1oN6EBFXf51iQ8StMy2c4E6z1hwbmTwk6ZjvCTHx8ND77SW+iXV92j+2eMw3odWPu4t6YlJ7xVBMZHWiEYVrPl0h44C3IWG/yF+joWlAeMhoL8cwxRt7BSnqlAC8hbPYwkbg5VLso8YhoBzoaSvLA0dio5hY8oeGr3P6M4Ur/TBF36s9orfK+hJmDHntbirgGb9CRofIa0RdKDtcIhm2QsRbpC9TxikqrZm0ZnGatSBJkioE6Jb/BgGViEAnUT0hEMxqO3RbO81HUNRuIKw3B13AjiHYPTqphc7JucndO6n0tA32WHUZl3IEy0HEpcwuNDlDtdBF1zhO3E5mYHMCwCYn/wbyR6xSHVBvSfdNvMDJ4tAoYdUMfD+w1Mh5x6Vkpxd+TErpBL+mUNJW3LlC0Ll9KdsE9OqwD3HlGD1H6a3ybae32YhPih20H10Pn/cNp/MNlUD8jjbWac4afl1+r4+cRJ+G8+ScEQKOF6oKTIlqjtA9Rkl9aT0Rt8q0nPew7n4jKh6OMuPeAmqqu1K6Qe7WD64LauGsJH+zTLARp9PIT1CPRkxE0su6IHnKsdar0P/1SvJ2Nz3nJUd8fVdh/eXmgzWvB9TXV8a/q+CHzEPHoE4/6z3cun+I/2T0ARL2tjnfX19ew9raR2Xq3CKwVn3vi+IbbuWUZIct7kW2aDRjus8yX4GE2BujIRFrN5r5eSn/UbW2Xi3QX1ZFVyT9jGFE/iWK0pSXPgrO1v60eO/DUn1jhnH/suAZyizipP1ph/65N+478lnx+2RGH8vwsylyJ8HsR747Pb3C43rK/fW6Ju8fj7lELEZ5zmHVn9N2pg+UZ57ilHTYd0MXGQCB4niDTCI+1Z332ijxNYF0OQABYP3gbDCeHiJzTlp48C852Lf6+c+LkHL7H47UvxPl70eY1nu53aYWGca5PwfG/yTBRpgx/cvLZizrd4akjzMypO/HKcb5xHrlT74zDXp16y/5m06+d8tYtbcw5bCvKJzacXg4OHmGOoG4E44tWl+bWqdAU5qTVjDQHl+WgztfaxkmrFmTIPrE8DnqD00NR4HnsMbJex2YMEcGmILMvYHe0Zftyjo4gw+YIxBWANu4rHv2SWdx7unXbh80+YkT4U0e49BVYtOSx7ijz2QlfcptXTjva2lhwuN0Eu0+QtdWhkNcIIhOq7JdojWR9mMyGSqn0tzOxfWgs+WMo+feex7fqoLdjBucx1SL+c9hCPVmV4XFEQ59ySw5v0+XIWc8S61GNTV9y+EFh76Rz7+kO/LG2fA19GPfRv1vqZXHrb9OS4Hq0ba7yIb3Vrx26q63z/w/w561lks4+03SNMojM2YIs0Byjj4cZPBgai/pO5TBekZI/kJL3iLwqWBDYe/zF+f3ubJBrMeJvegkU4pCjrpijDcO/Zcs5G9bmPdatP92jF/6bRlp2dFRgh1qg5RporBTKgbDoI7KgWcsWyBwjhsK3hPG2dvOGBEp1g+nGLz2i01t50dH5NbO6U1vyaymr43e4XmgUQvcn49FYzuE+96FrSdsb9x0Dl6VXyFhTCf6EpINGenZG0vbfmM/dYiBMIxS9iPFpeY5XUZeHDoEwBf9RxL1zA1DnPLHrc2auUH3/fYWflO/QZxXUXxLWxpHY9bRJhh8cGMgDxlmiZUdRpuWcNdkoh54Z1qll9AlZHTl9TlbBP4v8Q9Y+92Fa9GByUDBPQcas4bwKlnMwrBPQG8q3PW1OFzPwH0J/n5EAH4Lq+TsLgmvHjr7sQ9apo+TPfnuPGjNvWJtB0CfmNzgfI/62L9NMKt+dEeQOhjl8CmPtVv4AC2x7D8foexs8mmoYOArLUVQo0QSZo3cIYUzvFmq0Sn84HX1p3nLX4uWCOv6vH0SIucLJ50Vq++gKj+YJNBNo04XeR3k9C55JXDhOGh5Zp0Xl2dnHEvw+ha1AXHMeG57tzDk89kqSw0RKdex5lpMOw+euQ4WCYd5PzzK3aKlDoSm8J59MkU0RmO65p/wQ84sxoCnzNVwIWyhEBI+2WrkTbu2y7pxwa87gmk9YIdZ5fbBpwmOc9LZv7J3wtZOfEXk94alJUIFNk4zWfJ389y31vvPJQ1yPZxFm81vy/1ubHk8NeRtlzR4M845hICIYSZBxXho7uYzTbBRp8p6ypxZkhwcUL2yNbQuHyKDei4rpOXfQO2H3XpQGPfe0VJS55EOdrxOnr97e+aOz3yYKQeakaS1r1qDeF3+M2U63DoWmAgN5aYQJvTk17e81DsRpBNkea0Gc4UTLSWxFIHFVYIsguxSxzC8+MqT0Jxsjn4ealL6/gT9jKPm1Oog3PkhPU17RpENivly8DyVBNgA92NUbZgd+phQk7JbgT3Ql/6XcHiUSLayrg0bSF3dDFdP84iMzxqziy0eZ/UskCDLpqI4/p1ihkgSZB0qf/r6kjUUSiUgkQeaPxtJ/iLkZ/yYSV00SZP5oLP2H2EEikYhGEmSeOK5TzuXaFognErMmCTId3+F8dte82PqawRYHkzAyWK8E8JnxTpxBEmQKIvlem3qHpJsEaxfLJw4m2YCTVm/kEBkWYLRgm5ZHZZAYjSTI9Jyj9E9K/ulYDpyj1Qyx1wK+id8SRgSP7ruvZz1jRJIg07OFcKX/DhJTQ5/270DtHLLkc/cxl2XxCJ78fv18AXXCH87vTZEs+5WwpT99HoZsYpuU/DODPbqSex7yXmLdMW35s5BGajRbbTj8fW9G9NxrkuPQi28rA/G41+VPUO+N2bnHJA7sR8mfxfac4f+TLvYc8IMtGu/IP8TDRxFQjnrROHwAxmgLduxTyedkn11zmPV6co9HFzp2B6G+vSbb3OIQRoR/wXYKdEaE2L2P5gZr7xOrjvPPcEOkT8sAApX+Sck/X6TweHHC7kT4VxZIpMCn3xLqXcT+4r8pzfsuRW1gPVp64n+3UDtrtOkzEF5msfboasvfcVzbjyifRw5/gOPnccn/j7G72e2ANzAi4zI0mxMHtRHTiCxmngVn6+5lSaMauUGu4fC9vXfY9MGVu3FFPntZBraMyPA40nMdNsq4S2w6Z3Tj2jq8DrXvVkg6snC2ULuz9lEO7yAxF5bOwy51Tw8teqW/HddGn/n3ZK/JKl9aP3vYKxRbJg04zM6e/sDukZutk82jMZqnmW+W8yUkDiRBFohS6Z+U/POBhEPmhB32m/B0gWT4t2w59+aU05WWeAS/clrLSmY8TZIgOw+awRoSZGn2aF4cdF3i/8MmMxdyKCnLkHotF+pXK0h4kwTZGfDUPY3KfuqJltz1zIu3M0czJAgNtO8g/5soo8T+HcBPjKOx3sTD8Ghfuo2i8NKJS5/HZA6SlPqJxK2gVYYLxf3aCZfmDvcifCnCNxzWpuwv8DiJYJz0tsylUwc37r0NF2F2wuKmzC4SiZsiliBz8joIDmzutLUXQqtNkBkUdmksgBr5iXJce8UCm9vCSZu1JxFOcYZ0cIlE4trAoynLk2f8guPnLee0e02iE27w1ETolfN0DWIpD3dLQvp/5cQzTryoe8UmEomZgAq3Pejs2dgTr3OvyS5B5pSRod9+lL37aGrrnUgkEoOwcJOGttEWoycSicTo4OnqlvSZNzKfIJFIRAdrRfwvUHvF2KaNj8fl/2lalWiRG1SkAAAAAElFTkSuQmCC",
  lx = [Yw, Gw, Xw, Jw, Kw];
function ox() {
  const [e, t] = j.useState(0),
    [n, r] = j.useState(0);
  async function l() {
    try {
      const i = await Oe.get(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/group/Student/"
        ),
        s = await Oe.get(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/group/Mentors/"
        ),
        a = await Oe.get(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/group/Teamlead/"
        ),
        c = await Oe.get("http://127.0.0.1:8000/04D2430AAFE10AA4/group/Admin/");
      r(s.data.count + a.data.count + c.data.count), t(i.data.count);
    } catch (i) {
      console.error("Error fetching data:", i);
    }
  }
  const o = JSON.parse(
    localStorage.getItem("Data") ||
      "{User:'Login',Username:'Login',Id:-999,Groups:'Students'}"
  );
  return (
    j.useEffect(() => {
      l();
    }, []),
    u.jsx("div", {
      className: "main-display",
      children: u.jsxs("div", {
        children: [
          u.jsxs("div", {
            className: "z-1",
            children: [
              u.jsx("img", {
                className: "absolute img",
                src: "https://i.ibb.co/6y0dx0Z/Whats-App-Image-2023-12-03-at-19-19-48-98168732.jpg",
              }),
              u.jsxs("div", {
                className: "flex z-1  mt-40 ml-40",
                children: [
                  u.jsxs("div", {
                    className: "relative z-1 title-container mt-10",
                    children: [
                      u.jsxs("h1", {
                        className: "relative font-bold TitleText   ",
                        children: ["Teach the", u.jsx("br", {})],
                      }),
                      u.jsxs("h1", {
                        className: "relative font-bold TitleText   ",
                        children: ["youth. Shape", u.jsx("br", {})],
                      }),
                      u.jsxs("h1", {
                        className: "relative font-bold TitleText ",
                        children: ["the future.", u.jsx("br", {})],
                      }),
                      u.jsx("div", {
                        className: "mt-7 ml-12",
                        children: u.jsxs("a", {
                          href: "/signup",
                          className: "relative font-medium Title-btn ",
                          children: [" ", "Join YMP for free"],
                        }),
                      }),
                    ],
                  }),
                  u.jsx("img", {
                    className: "z-3 relative girlslearn  ",
                    src: "https://i.ibb.co/Y2mRTpc/girlslearn-1.png",
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "z-50 mt-5 relative",
            children: u.jsxs("div", {
              className: "z-40 relative",
              children: [
                u.jsx("div", {
                  className:
                    "z-40 absolute Carousel-info ml-5 mt-10 pb-10 mr-10",
                  children: u.jsxs("div", {
                    className: "w-3/12 ml-7 mt-5",
                    children: [
                      u.jsx("h1", {
                        className: "mb-10 c-title font-semibold",
                        style: { pointerEvents: "auto", userSelect: "text" },
                        children:
                          "How can mentorship catapult your project's impact?",
                      }),
                      u.jsx("h3", {
                        className: "text-black c-text",
                        style: { pointerEvents: "auto", userSelect: "text" },
                        children:
                          "With access to our vast network of mentors, you can develop a project of your choosing with professional guidance. New skills learned through projects translate directly to amazing opportunities in the future.",
                      }),
                    ],
                  }),
                }),
                u.jsxs("div", {
                  className:
                    "z-65 absolute flex Carousel columns-3 right-5 pb-10 pl-40 mr-10",
                  children: [
                    u.jsx(Ai, {
                      url: "https://i.ibb.co/ZVy8xvC/IMG-3338-1.png",
                      title: "Upcoming Events",
                      description:
                        "Explore upcoming and previous events at YMP that you can participate in virtually and in person.",
                      link: "#",
                    }),
                    u.jsx(Ai, {
                      url: "https://i.ibb.co/ZVy8xvC/IMG-3338-1.png",
                      title: "Join YMP Today",
                      description:
                        "Join YMP to take a part in programs and opportunities for youth. Gain access to a global network of mentors for your projects.",
                      link: "/signup/",
                    }),
                    u.jsx(Ai, {
                      url: "https://i.ibb.co/ZVy8xvC/IMG-3338-1.png",
                      title: "Chapter Program",
                      description:
                        "Create a chapter to make an impact with your community on your community by completing projects with personalized mentorship.",
                      link: "#",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "z-100 relative w-full contain ",
            children: [
              u.jsx("img", { className: "absolute divider z-80", src: nx }),
              u.jsxs("div", {
                className: "absolute flex w-full info-box z-9",
                children: [
                  u.jsxs("div", {
                    className: "absolute left-0 pl-10",
                    children: [
                      u.jsxs("h1", {
                        className: "Divider-title-txt z-30",
                        children: [
                          "Explore some of out initiatives,",
                          u.jsx("br", {}),
                          " missions, and impact",
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "grid grid-cols-2 gap-10 gap-y-40 pt-20 Divider-Grid w-1/2",
                        children: [
                          u.jsxs("div", {
                            className: "z-30",
                            children: [
                              u.jsxs("div", {
                                className: "flex",
                                children: [
                                  u.jsx("img", {
                                    src: Zw,
                                    className: "Grid-img absolute",
                                  }),
                                  u.jsx("h2", {
                                    className: "font-bold Grid-content flex",
                                    children: u.jsx("u", {
                                      children: "YMP Match",
                                    }),
                                  }),
                                ],
                              }),
                              u.jsxs("p", {
                                className: "Grid-content-P",
                                children: [
                                  "Using this platform you can explore experienced professionals that are mentors through YMP for your project on your own.",
                                  " ",
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "z-30",
                            children: [
                              u.jsxs("div", {
                                className: "flex",
                                children: [
                                  u.jsx("img", {
                                    src: qw,
                                    className: "Grid-img absolute",
                                  }),
                                  u.jsx("h2", {
                                    className: "font-bold Grid-content flex",
                                    children: u.jsx("u", {
                                      children: "Catapult Podcast",
                                    }),
                                  }),
                                ],
                              }),
                              u.jsx("p", {
                                className: "Grid-content-P",
                                children:
                                  "We feature youth making a great impact in their community and especially those who have achieved so through our programs.",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "z-30",
                            children: [
                              u.jsxs("div", {
                                className: "flex",
                                children: [
                                  u.jsx("img", {
                                    src: ex,
                                    className: "Grid-img absolute",
                                  }),
                                  u.jsx("h2", {
                                    className: "font-bold Grid-content flex",
                                    children: u.jsx("u", {
                                      children:
                                        "EY X YMP Speaker Session Series",
                                    }),
                                  }),
                                ],
                              }),
                              u.jsx("p", {
                                className: "Grid-content-P",
                                children:
                                  "Collaborating with Embrace Youth from Indonesia, we have a series of speakers talking about the skills you can learn early that they learned the hard way through their experiences. Register for the series from January 21 - February 4.",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "z-30",
                            children: [
                              u.jsxs("div", {
                                className: "flex",
                                children: [
                                  u.jsx("img", {
                                    src: tx,
                                    className: "Grid-img absolute",
                                  }),
                                  u.jsx("h2", {
                                    className: "font-bold Grid-content flex",
                                    children: u.jsx("u", {
                                      children: "Awards",
                                    }),
                                  }),
                                ],
                              }),
                              u.jsx("p", {
                                className: "Grid-content-P",
                                children:
                                  "The Youth Mentorship Project likes to honor youth who are making an impact in their community with projects they have built.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "absolute right-0 w-1/2 z-30 DATA ",
                    children: [
                      u.jsx("div", {
                        className: "API text-center z-30 ",
                        children: u.jsx(Kp.InstagramEmbed, {
                          url: "https://www.instagram.com/p/Cy0zPPSLnL4/?utm_source=ig_embed&utm_campaign=loading",
                        }),
                      }),
                      u.jsxs("div", {
                        className: "grid API-grid grid-cols-2 ",
                        children: [
                          u.jsxs("div", {
                            children: [
                              u.jsx("h1", {
                                className: "API-info font-bold",
                                children: "Countries",
                              }),
                              u.jsx("p", {
                                className: "API-Data",
                                children: "16",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            children: [
                              " ",
                              u.jsx("h1", {
                                className: "API-info font-bold",
                                children: "Branches",
                              }),
                              u.jsx("p", {
                                className: "API-Data",
                                children: "20",
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("h1", {
                                className: "API-info font-bold",
                                children: "Students",
                              }),
                              u.jsx("p", {
                                className: "API-Data",
                                children: e,
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("h1", {
                                className: "API-info font-bold",
                                children: "Mentors",
                              }),
                              u.jsx("p", {
                                className: "API-Data",
                                children: n,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "Video-Bar absolute flex w-full right-0 z-20",
                children: [
                  u.jsx("div", {
                    className: "Video rounded-xl",
                    children: u.jsx("iframe", {
                      className: "Video rounded-xl",
                      src: "https://www.youtube.com/embed/CsE_pVrxXIg?autoplay=1&mute=1",
                      title: "Meet Your Team Video Template (Editable)",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "Video-TXT z-30",
                    children: [
                      u.jsxs("h1", {
                        className: "Video-Title",
                        children: [
                          "Take a look at what ",
                          u.jsx("br", {}),
                          "we do.",
                        ],
                      }),
                      u.jsxs("h3", {
                        className: "Video-description",
                        children: [
                          "Meet the team and learn about ",
                          u.jsx("br", {}),
                          "our initiatives as a ",
                          u.jsx("i", { children: "youth-lead" }),
                          " for ",
                          u.jsx("br", {}),
                          "youth organization.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "w-full sponsor absolute right-0 z-11",
                children: u.jsx(Zv, {
                  display: lx,
                  length: 5,
                  message:
                    "Corporate partners and sponsors support our goals and missions.",
                }),
              }),
              u.jsxs("div", {
                className: "Footer ",
                children: [
                  " ",
                  u.jsxs("div", {
                    className: "Footer-content flex",
                    children: [
                      " ",
                      u.jsx("img", { src: rx, className: "Footer-image" }),
                      u.jsx("div", {
                        className: "NAV-links",
                        children: u.jsxs("ul", {
                          children: [
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                href: "#",
                                children: "About",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                href: "#",
                                children: "Programs",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                href: "#",
                                children: "Membership",
                              }),
                            }),
                          ],
                        }),
                      }),
                      u.jsx("div", {
                        className: "NAV-links",
                        children: u.jsxs("ul", {
                          children: [
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                href: "#",
                                children: "Events",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                href: "#",
                                children: "Partner",
                              }),
                            }),
                          ],
                        }),
                      }),
                      u.jsx("div", {
                        className: "Chapter-links",
                        children: u.jsxs("ul", {
                          children: [
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("p", {
                                children: "Chapter Regions",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Americas",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Asia Pacific",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Europe",
                              }),
                            }),
                          ],
                        }),
                      }),
                      u.jsx("div", {
                        className: "Terms-links",
                        children: u.jsxs("ul", {
                          children: [
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Terms and conditions",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Privacy Policy",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "Contact Us",
                              }),
                            }),
                            u.jsx("li", {
                              className: "Link",
                              children: u.jsx("a", {
                                target: "_blank",
                                href: "#",
                                children: "About Us",
                              }),
                            }),
                          ],
                        }),
                      }),
                      u.jsxs("div", {
                        className: "socials text-white",
                        children: [
                          u.jsx("h3", { children: "Follow YMP:" }),
                          u.jsxs("ul", {
                            className: "flex",
                            children: [
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                                  children: u.jsx("img", {
                                    src: Qp,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                                  children: u.jsx("img", {
                                    src: $p,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://www.instagram.com/youthmentorshipproject/",
                                  children: u.jsx("img", {
                                    src: Yp,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                                  children: u.jsx("img", {
                                    src: Gp,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://www.linkedin.com/company/youth-mentorship-proj/",
                                  children: u.jsx("img", {
                                    src: Xp,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                              u.jsx("li", {
                                className: "Link",
                                children: u.jsx("a", {
                                  target: "_blank",
                                  href: "https://discord.gg/mCWDhdtmdS",
                                  children: u.jsx("img", {
                                    src: Jp,
                                    className: "Footer-socials",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "fixed z-50",
            children: u.jsx(Gn, {
              Username: { User: o.User, Username: o.Username, Id: o.Id },
            }),
          }),
        ],
      }),
    })
  );
}
const ix = () => {
  const [e, t] = j.useState(0),
    [n, r] = j.useState(""),
    [l, o] = j.useState(""),
    [i, s] = j.useState(""),
    [a, c] = j.useState(""),
    [f, d] = j.useState(),
    [h, w] = j.useState(!0),
    [v, y] = j.useState(!1),
    [E, m] = j.useState("loading"),
    [p, g] = j.useState(0),
    [x, A] = j.useState(0),
    [_, O] = j.useState(0),
    [b, U] = j.useState(null),
    T = JSON.parse(
      localStorage.getItem("Data") ||
        "{User:'Login',Username:'Login',Id:-999,Groups:'Students'}"
    ),
    F = Xr();
  T.Id === -999 && F("/");
  const W = (R) =>
    R.approved === !1
      ? R.denied === !1
        ? "pending-class"
        : "denied-class"
      : "approved-class";
  j.useEffect(() => {
    const R = (M) => {
      M.approved === !1
        ? M.denied === !1
          ? A((ye) => ye + M.hours)
          : g((ye) => ye + M.hours)
        : O((ye) => ye + M.hours);
    };
    (f || []).forEach(R);
  }, [f]);
  const Q = ({ dateString: R }) => {
      const M = new Date(`${R}T24:00:00Z`),
        ye = new Date(M.toLocaleString()),
        ze = { weekday: "long", month: "long", day: "numeric" };
      return ye.toLocaleDateString(void 0, ze);
    },
    ue = JSON.parse(localStorage.getItem("Data") || "{}"),
    z = JSON.parse(localStorage.getItem("token") || "{}");
  function Y(R, M) {
    m(R === !1 ? (M === !1 ? "Pending" : "Denied") : "Approved");
  }
  T.Groups.map((R) => {
    R === "Student" && F("/UnAuth");
  });
  const G = (R) => {
      U(R), Y(R.approved, R.denied);
    },
    P = () => {
      U(null);
    };
  async function D() {
    try {
      const R = await Oe.get(
        "http://127.0.0.1:8000/04D2430AAFE10AA4/Hours/?ymp_id=" + String(ue.Id),
        { headers: { Authorization: `Token ${z}` } }
      );
      d(R.data.reverse());
    } catch (R) {
      console.error("Error fetching data:", R);
    }
  }
  j.useEffect(() => {
    T.Id === -999 && w(!1), D();
  }, []);
  const L = async (R) => {
    y(!0), R.preventDefault();
    try {
      const M = await Oe.get(
          "http://127.0.0.1:8000/04D2430AAFE10AA4/users/?email=" + String(n),
          { headers: { Authorization: `Token ${z}` } }
        ),
        ye = async (ze) => {
          if (ze.groups[0] === 1 || ze.groups[0] === 3) {
            const fn = new Date(i + "T00:00:00Z").toISOString().split("T")[0];
            await Oe.post(
              "http://127.0.0.1:8000/04D2430AAFE10AA4/Hours/",
              {
                ymp_id: T.Id,
                hours: e,
                work_description: l,
                teamlead_email: n,
                next_week_plans: a,
                date: fn,
              },
              { headers: { Authorization: `Token ${z}` } }
            ),
              t(0),
              r(""),
              o(""),
              s(""),
              c(""),
              D();
          } else alert("Please enter a Real Team Lead Email");
        };
      M.data.length > 0
        ? T.User !== M.data[0].email
          ? ye(M.data[0])
          : alert(
              "You cannot log your own hours, Please enter you Team Lead's Email"
            )
        : alert("No User with that email is Found"),
        y(!1);
    } catch (M) {
      console.error("Signup failed:", M.response.data);
    }
  };
  return u.jsx(u.Fragment, {
    children: h
      ? u.jsxs("div", {
          className:
            "flex justify-center content-center w-screen h-screen  bg-slate-100",
          children: [
            u.jsx(Gn, {
              Username: { User: T.User, Username: T.Username, Id: T.Id },
            }),
            u.jsxs("div", {
              className:
                "w-full h-auto rounded-lg mx-5 my-12 grid grid-cols-2 text-black",
              children: [
                u.jsxs("div", {
                  className: "",
                  children: [
                    u.jsxs("div", {
                      className: "flex",
                      children: [
                        u.jsxs("div", {
                          className:
                            "justify-center content-center text-center",
                          children: [
                            u.jsx("h1", {
                              className: "text-3xl font-black  mt-11",
                              children: T.Username,
                            }),
                            u.jsx("h1", {
                              className: "text-3xl font-semibold text-gray-400",
                              children: T.Id,
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "justify-center content-center text-center mt-12 flex",
                          children: [
                            u.jsxs("h1", {
                              className:
                                "text-3xl font-semibold text-green-400 ml-10 mr-10",
                              children: ["Approved ", u.jsx("br", {}), _],
                            }),
                            u.jsxs("h1", {
                              className:
                                "text-3xl font-semibold pending-txt mr-10",
                              children: ["Pending ", u.jsx("br", {}), x],
                            }),
                            u.jsxs("h1", {
                              className:
                                "text-3xl font-semibold text-red-400 mr-10",
                              children: ["Denied ", u.jsx("br", {}), p],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: " Past-Hours",
                      children: (f || []).map((R, M) =>
                        u.jsxs(
                          "div",
                          {
                            className:
                              " mt-7 shadow-2xl rounded-xl p-1 grid  grid-cols-4 gap-2 " +
                              W(R),
                            onClick: () => G(R),
                            children: [
                              u.jsxs("div", {
                                className: "flex w-1/4 pl-3",
                                children: [
                                  u.jsx("h1", {
                                    className: "font-black text-5xl",
                                    children: R.hours,
                                  }),
                                  u.jsx("h1", { children: "hrs" }),
                                ],
                              }),
                              u.jsxs("div", {
                                className: "col-span-3",
                                children: [
                                  u.jsx("h1", {
                                    className: "ml-6 text-xl",
                                    children: u.jsx(Q, { dateString: R.date }),
                                  }),
                                  u.jsx("h1", {
                                    className: "ml-6 text-sm",
                                    children: R.work_description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          M
                        )
                      ),
                    }),
                  ],
                }),
                u.jsxs("form", {
                  className: "mb-10 w-full mt-7 text-center mr-14",
                  onSubmit: L,
                  children: [
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className:
                            "text-gray-600 text-xl font-medium mt-20 mb-5",
                          children: "Enter information to Log Hours",
                        }),
                        u.jsx("p", {
                          className: "w-1/ mb-1 text-gray-700 font-semibold",
                          children: "Hours",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl",
                          type: "number",
                          name: "enter Hours",
                          value: e,
                          required: !0,
                          min: 0,
                          max: 120,
                          onChange: (R) => t(parseInt(R.target.value, 10)),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className: " mb-1 text-gray-700 font-semibold",
                          children: "Team Lead Email",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl",
                          type: "email",
                          placeholder: "Please enter Team Lead Email",
                          value: n,
                          required: !0,
                          onChange: (R) => r(R.target.value),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className: " mb-1 text-gray-700 font-semibold",
                          children: "Work Description",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl",
                          type: "text",
                          placeholder: "Enter a short description of your work",
                          value: l,
                          required: !0,
                          maxLength: 500,
                          onChange: (R) => o(R.target.value),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className: "mb-1 text-gray-700 font-semibold",
                          children: "Date",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl",
                          type: "date",
                          placeholder: "Enter a Date",
                          value: i,
                          required: !0,
                          onChange: (R) => s(R.target.value),
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("p", {
                          className: " mb-1 text-gray-700 font-semibold",
                          children: "Next Week Plans",
                        }),
                        u.jsx("input", {
                          className:
                            "mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl",
                          type: "text",
                          placeholder: "Plans for next week",
                          value: a,
                          required: !0,
                          maxLength: 500,
                          onChange: (R) => c(R.target.value),
                        }),
                      ],
                    }),
                    u.jsx("button", {
                      type: "submit",
                      className:
                        "bg-blue-400 px-20 py-1 mt-3 shadow-xl rounded-md  text-black ",
                      disabled: v,
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
            b &&
              u.jsxs(u.Fragment, {
                children: [
                  u.jsx("div", {
                    className: "overlay",
                    onClick: P,
                    style: { zIndex: 9998 },
                  }),
                  u.jsx("div", {
                    className: "popup",
                    style: { zIndex: 9999 },
                    children: u.jsxs("div", {
                      className: "popup-content text-center",
                      children: [
                        u.jsx("h1", {
                          className: "font-black text-lg",
                          children: "Details",
                        }),
                        u.jsxs("h2", {
                          children: ["# of hours recorded: ", b.hours],
                        }),
                        u.jsx("br", {}),
                        u.jsxs("p", {
                          children: ["Work description: ", b.work_description],
                        }),
                        u.jsx("br", {}),
                        u.jsxs("p", {
                          children: [
                            "Plans for next week: ",
                            b.next_week_plans,
                          ],
                        }),
                        u.jsx("br", {}),
                        u.jsxs("p", {
                          className: "flex",
                          children: [
                            "Date of Monday:  ",
                            u.jsx(Q, { dateString: b.date }),
                          ],
                        }),
                        u.jsxs("p", { children: ["Status: ", E] }),
                        u.jsx("br", {}),
                        u.jsx("button", {
                          onClick: P,
                          children: "Close Popup",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
          ],
        })
      : F("/UnAuth"),
  });
};
function sx() {
  const e = JSON.parse(
    localStorage.getItem("Data") ||
      "{User:'Login',Username:'Login',Id:-999,Groups:'Students'}"
  );
  return u.jsxs("div", {
    className: "w-screen h-screen",
    children: [
      u.jsxs("div", {
        className: "absolute text-center h-screen",
        children: [
          u.jsx("div", {
            className: "font-black num absolute z-10 w-screen",
            children: u.jsx("h1", { className: "", children: "404" }),
          }),
          u.jsxs("div", {
            className: "z-20 relative w-screen txt",
            children: [
              " ",
              u.jsx("h1", { children: "Page Not Found" }),
              u.jsxs("a", {
                className: "btn",
                href: "/",
                children: [" ", "Return Home"],
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "z-50 fixed",
        children: u.jsx(Gn, {
          Username: { User: e.User, Username: e.Username, Id: e.Id },
        }),
      }),
    ],
  });
}
function ax() {
  const e = JSON.parse(
    localStorage.getItem("Data") ||
      "{User:'Login',Username:'Login',Id:-999,Groups:'Students'}"
  );
  return u.jsxs("div", {
    className: "w-screen h-screen",
    children: [
      u.jsxs("div", {
        className: "absolute text-center h-screen",
        children: [
          u.jsx("div", {
            className: "font-black num absolute z-10 w-screen",
            children: u.jsx("h1", { className: "", children: "403" }),
          }),
          u.jsxs("div", {
            className: "z-20 relative w-screen txt-lg",
            children: [
              " ",
              u.jsxs("h1", {
                children: [
                  "You don't have permission",
                  u.jsx("br", {}),
                  " to access this page",
                ],
              }),
              u.jsxs("a", {
                className: "btn",
                href: "/",
                children: [" ", "Return Home"],
              }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "z-50 fixed",
        children: u.jsx(Gn, {
          Username: { User: e.User, Username: e.Username, Id: e.Id },
        }),
      }),
    ],
  });
}
const ux = () =>
  u.jsx(N0, {
    children: u.jsxs(k0, {
      children: [
        u.jsx(kt, { path: "/login", element: u.jsx(Yv, {}) }),
        u.jsx(kt, { path: "/signup", element: u.jsx(Gv, {}) }),
        u.jsx(kt, { path: "/logout", element: u.jsx(Xv, {}) }),
        u.jsx(kt, { path: "/", element: u.jsx(ox, {}) }),
        u.jsx(kt, { path: "/hours", element: u.jsx(ix, {}) }),
        u.jsx(kt, { path: "*", element: u.jsx(sx, {}) }),
        u.jsx(kt, { path: "/UnAuth", element: u.jsx(ax, {}) }),
      ],
    }),
  });
function cx() {
  return u.jsx(ux, {});
}
Di.createRoot(document.getElementById("root")).render(
  u.jsx(N.StrictMode, { children: u.jsx(cx, {}) })
);
