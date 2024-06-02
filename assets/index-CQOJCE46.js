function ug(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const i in r)
				if (i !== "default" && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
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
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function cg(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var ad = { exports: {} },
	Do = {},
	ud = { exports: {} },
	V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var si = Symbol.for("react.element"),
	fg = Symbol.for("react.portal"),
	dg = Symbol.for("react.fragment"),
	hg = Symbol.for("react.strict_mode"),
	pg = Symbol.for("react.profiler"),
	mg = Symbol.for("react.provider"),
	gg = Symbol.for("react.context"),
	vg = Symbol.for("react.forward_ref"),
	yg = Symbol.for("react.suspense"),
	wg = Symbol.for("react.memo"),
	xg = Symbol.for("react.lazy"),
	Au = Symbol.iterator;
function Sg(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Au && e[Au]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var cd = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	fd = Object.assign,
	dd = {};
function nr(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = dd),
		(this.updater = n || cd);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hd() {}
hd.prototype = nr.prototype;
function sa(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = dd),
		(this.updater = n || cd);
}
var la = (sa.prototype = new hd());
la.constructor = sa;
fd(la, nr.prototype);
la.isPureReactComponent = !0;
var Mu = Array.isArray,
	pd = Object.prototype.hasOwnProperty,
	aa = { current: null },
	md = { key: !0, ref: !0, __self: !0, __source: !0 };
function gd(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			pd.call(t, r) && !md.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: si,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: aa.current,
	};
}
function kg(e, t) {
	return {
		$$typeof: si,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function ua(e) {
	return typeof e == "object" && e !== null && e.$$typeof === si;
}
function Pg(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Vu = /\/+/g;
function ss(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Pg("" + e.key)
		: t.toString(36);
}
function zi(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case si:
					case fg:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === "" ? "." + ss(s, 0) : r),
			Mu(i)
				? ((n = ""),
				  e != null && (n = e.replace(Vu, "$&/") + "/"),
				  zi(i, t, n, "", function (u) {
						return u;
				  }))
				: i != null &&
				  (ua(i) &&
						(i = kg(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ""
									: ("" + i.key).replace(Vu, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), Mu(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = r + ss(o, l);
			s += zi(o, t, n, a, i);
		}
	else if (((a = Sg(e)), typeof a == "function"))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + ss(o, l++)), (s += zi(o, t, n, a, i));
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
	return s;
}
function wi(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		zi(e, r, "", "", function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function _g(e) {
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
var xe = { current: null },
	Bi = { transition: null },
	Cg = {
		ReactCurrentDispatcher: xe,
		ReactCurrentBatchConfig: Bi,
		ReactCurrentOwner: aa,
	};
function vd() {
	throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
	map: wi,
	forEach: function (e, t, n) {
		wi(
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
			wi(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			wi(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!ua(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
V.Component = nr;
V.Fragment = dg;
V.Profiler = pg;
V.PureComponent = sa;
V.StrictMode = hg;
V.Suspense = yg;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cg;
V.act = vd;
V.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = fd({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = aa.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			pd.call(t, a) &&
				!md.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: si, type: e.type, key: i, ref: o, props: r, _owner: s };
};
V.createContext = function (e) {
	return (
		(e = {
			$$typeof: gg,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: mg, _context: e }),
		(e.Consumer = e)
	);
};
V.createElement = gd;
V.createFactory = function (e) {
	var t = gd.bind(null, e);
	return (t.type = e), t;
};
V.createRef = function () {
	return { current: null };
};
V.forwardRef = function (e) {
	return { $$typeof: vg, render: e };
};
V.isValidElement = ua;
V.lazy = function (e) {
	return { $$typeof: xg, _payload: { _status: -1, _result: e }, _init: _g };
};
V.memo = function (e, t) {
	return { $$typeof: wg, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
	var t = Bi.transition;
	Bi.transition = {};
	try {
		e();
	} finally {
		Bi.transition = t;
	}
};
V.unstable_act = vd;
V.useCallback = function (e, t) {
	return xe.current.useCallback(e, t);
};
V.useContext = function (e) {
	return xe.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
	return xe.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
	return xe.current.useEffect(e, t);
};
V.useId = function () {
	return xe.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
	return xe.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
	return xe.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
	return xe.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
	return xe.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
	return xe.current.useReducer(e, t, n);
};
V.useRef = function (e) {
	return xe.current.useRef(e);
};
V.useState = function (e) {
	return xe.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
	return xe.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
	return xe.current.useTransition();
};
V.version = "18.3.1";
ud.exports = V;
var k = ud.exports;
const yd = cg(k),
	Qs = ug({ __proto__: null, default: yd }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg = k,
	Eg = Symbol.for("react.element"),
	jg = Symbol.for("react.fragment"),
	Rg = Object.prototype.hasOwnProperty,
	Ng = Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function wd(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) Rg.call(t, r) && !Lg.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Eg,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Ng.current,
	};
}
Do.Fragment = jg;
Do.jsx = wd;
Do.jsxs = wd;
ad.exports = Do;
var y = ad.exports,
	Ys = {},
	xd = { exports: {} },
	Ve = {},
	Sd = { exports: {} },
	kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(E, A) {
		var M = E.length;
		E.push(A);
		e: for (; 0 < M; ) {
			var Q = (M - 1) >>> 1,
				ne = E[Q];
			if (0 < i(ne, A)) (E[Q] = A), (E[M] = ne), (M = Q);
			else break e;
		}
	}
	function n(E) {
		return E.length === 0 ? null : E[0];
	}
	function r(E) {
		if (E.length === 0) return null;
		var A = E[0],
			M = E.pop();
		if (M !== A) {
			E[0] = M;
			e: for (var Q = 0, ne = E.length, vi = ne >>> 1; Q < vi; ) {
				var Jt = 2 * (Q + 1) - 1,
					os = E[Jt],
					qt = Jt + 1,
					yi = E[qt];
				if (0 > i(os, M))
					qt < ne && 0 > i(yi, os)
						? ((E[Q] = yi), (E[qt] = M), (Q = qt))
						: ((E[Q] = os), (E[Jt] = M), (Q = Jt));
				else if (qt < ne && 0 > i(yi, M)) (E[Q] = yi), (E[qt] = M), (Q = qt);
				else break e;
			}
		}
		return A;
	}
	function i(E, A) {
		var M = E.sortIndex - A.sortIndex;
		return M !== 0 ? M : E.id - A.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		g = !1,
		v = !1,
		w = !1,
		S = typeof setTimeout == "function" ? setTimeout : null,
		p = typeof clearTimeout == "function" ? clearTimeout : null,
		h = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function m(E) {
		for (var A = n(u); A !== null; ) {
			if (A.callback === null) r(u);
			else if (A.startTime <= E)
				r(u), (A.sortIndex = A.expirationTime), t(a, A);
			else break;
			A = n(u);
		}
	}
	function x(E) {
		if (((w = !1), m(E), !v))
			if (n(a) !== null) (v = !0), Ee(P);
			else {
				var A = n(u);
				A !== null && Zt(x, A.startTime - E);
			}
	}
	function P(E, A) {
		(v = !1), w && ((w = !1), p(C), (C = -1)), (g = !0);
		var M = d;
		try {
			for (
				m(A), f = n(a);
				f !== null && (!(f.expirationTime > A) || (E && !te()));

			) {
				var Q = f.callback;
				if (typeof Q == "function") {
					(f.callback = null), (d = f.priorityLevel);
					var ne = Q(f.expirationTime <= A);
					(A = e.unstable_now()),
						typeof ne == "function" ? (f.callback = ne) : f === n(a) && r(a),
						m(A);
				} else r(a);
				f = n(a);
			}
			if (f !== null) var vi = !0;
			else {
				var Jt = n(u);
				Jt !== null && Zt(x, Jt.startTime - A), (vi = !1);
			}
			return vi;
		} finally {
			(f = null), (d = M), (g = !1);
		}
	}
	var T = !1,
		j = null,
		C = -1,
		D = 5,
		L = -1;
	function te() {
		return !(e.unstable_now() - L < D);
	}
	function yt() {
		if (j !== null) {
			var E = e.unstable_now();
			L = E;
			var A = !0;
			try {
				A = j(!0, E);
			} finally {
				A ? Xt() : ((T = !1), (j = null));
			}
		} else T = !1;
	}
	var Xt;
	if (typeof h == "function")
		Xt = function () {
			h(yt);
		};
	else if (typeof MessageChannel < "u") {
		var lr = new MessageChannel(),
			oe = lr.port2;
		(lr.port1.onmessage = yt),
			(Xt = function () {
				oe.postMessage(null);
			});
	} else
		Xt = function () {
			S(yt, 0);
		};
	function Ee(E) {
		(j = E), T || ((T = !0), Xt());
	}
	function Zt(E, A) {
		C = S(function () {
			E(e.unstable_now());
		}, A);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (E) {
			E.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			v || g || ((v = !0), Ee(P));
		}),
		(e.unstable_forceFrameRate = function (E) {
			0 > E || 125 < E
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (D = 0 < E ? Math.floor(1e3 / E) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return d;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (E) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var A = 3;
					break;
				default:
					A = d;
			}
			var M = d;
			d = A;
			try {
				return E();
			} finally {
				d = M;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (E, A) {
			switch (E) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					E = 3;
			}
			var M = d;
			d = E;
			try {
				return A();
			} finally {
				d = M;
			}
		}),
		(e.unstable_scheduleCallback = function (E, A, M) {
			var Q = e.unstable_now();
			switch (
				(typeof M == "object" && M !== null
					? ((M = M.delay), (M = typeof M == "number" && 0 < M ? Q + M : Q))
					: (M = Q),
				E)
			) {
				case 1:
					var ne = -1;
					break;
				case 2:
					ne = 250;
					break;
				case 5:
					ne = 1073741823;
					break;
				case 4:
					ne = 1e4;
					break;
				default:
					ne = 5e3;
			}
			return (
				(ne = M + ne),
				(E = {
					id: c++,
					callback: A,
					priorityLevel: E,
					startTime: M,
					expirationTime: ne,
					sortIndex: -1,
				}),
				M > Q
					? ((E.sortIndex = M),
					  t(u, E),
					  n(a) === null &&
							E === n(u) &&
							(w ? (p(C), (C = -1)) : (w = !0), Zt(x, M - Q)))
					: ((E.sortIndex = ne), t(a, E), v || g || ((v = !0), Ee(P))),
				E
			);
		}),
		(e.unstable_shouldYield = te),
		(e.unstable_wrapCallback = function (E) {
			var A = d;
			return function () {
				var M = d;
				d = A;
				try {
					return E.apply(this, arguments);
				} finally {
					d = M;
				}
			};
		});
})(kd);
Sd.exports = kd;
var Ag = Sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg = k,
	Ae = Ag;
function _(e) {
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
var Pd = new Set(),
	Or = {};
function yn(e, t) {
	Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
	for (Or[e] = t, e = 0; e < t.length; e++) Pd.add(t[e]);
}
var dt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Xs = Object.prototype.hasOwnProperty,
	Vg =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Du = {},
	Ou = {};
function Dg(e) {
	return Xs.call(Ou, e)
		? !0
		: Xs.call(Du, e)
		? !1
		: Vg.test(e)
		? (Ou[e] = !0)
		: ((Du[e] = !0), !1);
}
function Og(e, t, n, r) {
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
function Fg(e, t, n, r) {
	if (t === null || typeof t > "u" || Og(e, t, n, r)) return !0;
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
function Se(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ce[e] = new Se(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ce[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ce[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ce[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ce[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ce[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ce[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ce[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ce[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function fa(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(ca, fa);
		ce[t] = new Se(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(ca, fa);
		ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(ca, fa);
	ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Se(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function da(e, t, n, r) {
	var i = ce.hasOwnProperty(t) ? ce[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(Fg(t, n, i, r) && (n = null),
		r || i === null
			? Dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	xi = Symbol.for("react.element"),
	Tn = Symbol.for("react.portal"),
	En = Symbol.for("react.fragment"),
	ha = Symbol.for("react.strict_mode"),
	Zs = Symbol.for("react.profiler"),
	_d = Symbol.for("react.provider"),
	Cd = Symbol.for("react.context"),
	pa = Symbol.for("react.forward_ref"),
	Js = Symbol.for("react.suspense"),
	qs = Symbol.for("react.suspense_list"),
	ma = Symbol.for("react.memo"),
	kt = Symbol.for("react.lazy"),
	Td = Symbol.for("react.offscreen"),
	Fu = Symbol.iterator;
function ar(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Fu && e[Fu]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var b = Object.assign,
	ls;
function vr(e) {
	if (ls === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ls = (t && t[1]) || "";
		}
	return (
		`
` +
		ls +
		e
	);
}
var as = !1;
function us(e, t) {
	if (!e || as) return "";
	as = !0;
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
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var a =
									`
` + i[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										a.includes("<anonymous>") &&
										(a = a.replace("<anonymous>", e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(as = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function Ig(e) {
	switch (e.tag) {
		case 5:
			return vr(e.type);
		case 16:
			return vr("Lazy");
		case 13:
			return vr("Suspense");
		case 19:
			return vr("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = us(e.type, !1)), e;
		case 11:
			return (e = us(e.type.render, !1)), e;
		case 1:
			return (e = us(e.type, !0)), e;
		default:
			return "";
	}
}
function el(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case En:
			return "Fragment";
		case Tn:
			return "Portal";
		case Zs:
			return "Profiler";
		case ha:
			return "StrictMode";
		case Js:
			return "Suspense";
		case qs:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Cd:
				return (e.displayName || "Context") + ".Consumer";
			case _d:
				return (e._context.displayName || "Context") + ".Provider";
			case pa:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case ma:
				return (
					(t = e.displayName || null), t !== null ? t : el(e.type) || "Memo"
				);
			case kt:
				(t = e._payload), (e = e._init);
				try {
					return el(e(t));
				} catch {}
		}
	return null;
}
function zg(e) {
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
			return el(t);
		case 8:
			return t === ha ? "StrictMode" : "Mode";
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
function Ut(e) {
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
function Ed(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Bg(e) {
	var t = Ed(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = "" + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Si(e) {
	e._valueTracker || (e._valueTracker = Bg(e));
}
function jd(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Ed(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function eo(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function tl(e, t) {
	var n = t.checked;
	return b({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Iu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Ut(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Rd(e, t) {
	(t = t.checked), t != null && da(e, "checked", t, !1);
}
function nl(e, t) {
	Rd(e, t);
	var n = Ut(t.value),
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
		? rl(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && rl(e, t.type, Ut(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function zu(e, t, n) {
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
function rl(e, t, n) {
	(t !== "number" || eo(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function $n(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function il(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
	return b({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Bu(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(_(92));
			if (yr(n)) {
				if (1 < n.length) throw Error(_(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Ut(n) };
}
function Nd(e, t) {
	var n = Ut(t.value),
		r = Ut(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Uu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ld(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function ol(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Ld(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var ki,
	Ad = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				ki = ki || document.createElement("div"),
					ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = ki.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Fr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var kr = {
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
	Ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
	Ug.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]);
	});
});
function Md(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
		? ("" + t).trim()
		: t + "px";
}
function Vd(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Md(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var $g = b(
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
function sl(e, t) {
	if (t) {
		if ($g[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(_(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(_(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(_(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(_(62));
	}
}
function ll(e, t) {
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
var al = null;
function ga(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var ul = null,
	Wn = null,
	Hn = null;
function $u(e) {
	if ((e = ui(e))) {
		if (typeof ul != "function") throw Error(_(280));
		var t = e.stateNode;
		t && ((t = Bo(t)), ul(e.stateNode, e.type, t));
	}
}
function Dd(e) {
	Wn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Wn = e);
}
function Od() {
	if (Wn) {
		var e = Wn,
			t = Hn;
		if (((Hn = Wn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
	}
}
function Fd(e, t) {
	return e(t);
}
function Id() {}
var cs = !1;
function zd(e, t, n) {
	if (cs) return e(t, n);
	cs = !0;
	try {
		return Fd(e, t, n);
	} finally {
		(cs = !1), (Wn !== null || Hn !== null) && (Id(), Od());
	}
}
function Ir(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Bo(n);
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
	if (n && typeof n != "function") throw Error(_(231, t, typeof n));
	return n;
}
var cl = !1;
if (dt)
	try {
		var ur = {};
		Object.defineProperty(ur, "passive", {
			get: function () {
				cl = !0;
			},
		}),
			window.addEventListener("test", ur, ur),
			window.removeEventListener("test", ur, ur);
	} catch {
		cl = !1;
	}
function Wg(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var Pr = !1,
	to = null,
	no = !1,
	fl = null,
	Hg = {
		onError: function (e) {
			(Pr = !0), (to = e);
		},
	};
function Kg(e, t, n, r, i, o, s, l, a) {
	(Pr = !1), (to = null), Wg.apply(Hg, arguments);
}
function bg(e, t, n, r, i, o, s, l, a) {
	if ((Kg.apply(this, arguments), Pr)) {
		if (Pr) {
			var u = to;
			(Pr = !1), (to = null);
		} else throw Error(_(198));
		no || ((no = !0), (fl = u));
	}
}
function wn(e) {
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
function Bd(e) {
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
function Wu(e) {
	if (wn(e) !== e) throw Error(_(188));
}
function Gg(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = wn(e)), t === null)) throw Error(_(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Wu(i), e;
				if (o === r) return Wu(i), t;
				o = o.sibling;
			}
			throw Error(_(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(_(189));
			}
		}
		if (n.alternate !== r) throw Error(_(190));
	}
	if (n.tag !== 3) throw Error(_(188));
	return n.stateNode.current === n ? e : t;
}
function Ud(e) {
	return (e = Gg(e)), e !== null ? $d(e) : null;
}
function $d(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = $d(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Wd = Ae.unstable_scheduleCallback,
	Hu = Ae.unstable_cancelCallback,
	Qg = Ae.unstable_shouldYield,
	Yg = Ae.unstable_requestPaint,
	X = Ae.unstable_now,
	Xg = Ae.unstable_getCurrentPriorityLevel,
	va = Ae.unstable_ImmediatePriority,
	Hd = Ae.unstable_UserBlockingPriority,
	ro = Ae.unstable_NormalPriority,
	Zg = Ae.unstable_LowPriority,
	Kd = Ae.unstable_IdlePriority,
	Oo = null,
	et = null;
function Jg(e) {
	if (et && typeof et.onCommitFiberRoot == "function")
		try {
			et.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Qe = Math.clz32 ? Math.clz32 : tv,
	qg = Math.log,
	ev = Math.LN2;
function tv(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((qg(e) / ev) | 0)) | 0;
}
var Pi = 64,
	_i = 4194304;
function wr(e) {
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
function io(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0 ? (r = wr(l)) : ((o &= s), o !== 0 && (r = wr(o)));
	} else (s = n & ~i), s !== 0 ? (r = wr(s)) : o !== 0 && (r = wr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function nv(e, t) {
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
function rv(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Qe(o),
			l = 1 << s,
			a = i[s];
		a === -1
			? (!(l & n) || l & r) && (i[s] = nv(l, t))
			: a <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function dl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function bd() {
	var e = Pi;
	return (Pi <<= 1), !(Pi & 4194240) && (Pi = 64), e;
}
function fs(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function li(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Qe(t)),
		(e[t] = n);
}
function iv(e, t) {
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
		var i = 31 - Qe(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function ya(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Qe(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var F = 0;
function Gd(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Qd,
	wa,
	Yd,
	Xd,
	Zd,
	hl = !1,
	Ci = [],
	Nt = null,
	Lt = null,
	At = null,
	zr = new Map(),
	Br = new Map(),
	Ct = [],
	ov =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Ku(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Nt = null;
			break;
		case "dragenter":
		case "dragleave":
			Lt = null;
			break;
		case "mouseover":
		case "mouseout":
			At = null;
			break;
		case "pointerover":
		case "pointerout":
			zr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Br.delete(t.pointerId);
	}
}
function cr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = ui(t)), t !== null && wa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function sv(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (Nt = cr(Nt, e, t, n, r, i)), !0;
		case "dragenter":
			return (Lt = cr(Lt, e, t, n, r, i)), !0;
		case "mouseover":
			return (At = cr(At, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return zr.set(o, cr(zr.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId), Br.set(o, cr(Br.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Jd(e) {
	var t = sn(e.target);
	if (t !== null) {
		var n = wn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Bd(n)), t !== null)) {
					(e.blockedOn = t),
						Zd(e.priority, function () {
							Yd(n);
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
function Ui(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(al = r), n.target.dispatchEvent(r), (al = null);
		} else return (t = ui(n)), t !== null && wa(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function bu(e, t, n) {
	Ui(e) && n.delete(t);
}
function lv() {
	(hl = !1),
		Nt !== null && Ui(Nt) && (Nt = null),
		Lt !== null && Ui(Lt) && (Lt = null),
		At !== null && Ui(At) && (At = null),
		zr.forEach(bu),
		Br.forEach(bu);
}
function fr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		hl ||
			((hl = !0),
			Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, lv)));
}
function Ur(e) {
	function t(i) {
		return fr(i, e);
	}
	if (0 < Ci.length) {
		fr(Ci[0], e);
		for (var n = 1; n < Ci.length; n++) {
			var r = Ci[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Nt !== null && fr(Nt, e),
			Lt !== null && fr(Lt, e),
			At !== null && fr(At, e),
			zr.forEach(t),
			Br.forEach(t),
			n = 0;
		n < Ct.length;
		n++
	)
		(r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
		Jd(n), n.blockedOn === null && Ct.shift();
}
var Kn = vt.ReactCurrentBatchConfig,
	oo = !0;
function av(e, t, n, r) {
	var i = F,
		o = Kn.transition;
	Kn.transition = null;
	try {
		(F = 1), xa(e, t, n, r);
	} finally {
		(F = i), (Kn.transition = o);
	}
}
function uv(e, t, n, r) {
	var i = F,
		o = Kn.transition;
	Kn.transition = null;
	try {
		(F = 4), xa(e, t, n, r);
	} finally {
		(F = i), (Kn.transition = o);
	}
}
function xa(e, t, n, r) {
	if (oo) {
		var i = pl(e, t, n, r);
		if (i === null) Ss(e, t, r, so, n), Ku(e, r);
		else if (sv(i, e, t, n, r)) r.stopPropagation();
		else if ((Ku(e, r), t & 4 && -1 < ov.indexOf(e))) {
			for (; i !== null; ) {
				var o = ui(i);
				if (
					(o !== null && Qd(o),
					(o = pl(e, t, n, r)),
					o === null && Ss(e, t, r, so, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Ss(e, t, r, null, n);
	}
}
var so = null;
function pl(e, t, n, r) {
	if (((so = null), (e = ga(r)), (e = sn(e)), e !== null))
		if (((t = wn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Bd(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (so = e), null;
}
function qd(e) {
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
			switch (Xg()) {
				case va:
					return 1;
				case Hd:
					return 4;
				case ro:
				case Zg:
					return 16;
				case Kd:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Et = null,
	Sa = null,
	$i = null;
function eh() {
	if ($i) return $i;
	var e,
		t = Sa,
		n = t.length,
		r,
		i = "value" in Et ? Et.value : Et.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return ($i = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Wi(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Ti() {
	return !0;
}
function Gu() {
	return !1;
}
function De(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? Ti
				: Gu),
			(this.isPropagationStopped = Gu),
			this
		);
	}
	return (
		b(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = Ti));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = Ti));
			},
			persist: function () {},
			isPersistent: Ti,
		}),
		t
	);
}
var rr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ka = De(rr),
	ai = b({}, rr, { view: 0, detail: 0 }),
	cv = De(ai),
	ds,
	hs,
	dr,
	Fo = b({}, ai, {
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
		getModifierState: Pa,
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
				: (e !== dr &&
						(dr && e.type === "mousemove"
							? ((ds = e.screenX - dr.screenX), (hs = e.screenY - dr.screenY))
							: (hs = ds = 0),
						(dr = e)),
				  ds);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : hs;
		},
	}),
	Qu = De(Fo),
	fv = b({}, Fo, { dataTransfer: 0 }),
	dv = De(fv),
	hv = b({}, ai, { relatedTarget: 0 }),
	ps = De(hv),
	pv = b({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	mv = De(pv),
	gv = b({}, rr, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	vv = De(gv),
	yv = b({}, rr, { data: 0 }),
	Yu = De(yv),
	wv = {
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
	xv = {
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
	Sv = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function kv(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = Sv[e]) ? !!t[e] : !1;
}
function Pa() {
	return kv;
}
var Pv = b({}, ai, {
		key: function (e) {
			if (e.key) {
				var t = wv[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = Wi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? xv[e.keyCode] || "Unidentified"
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
		getModifierState: Pa,
		charCode: function (e) {
			return e.type === "keypress" ? Wi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? Wi(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	_v = De(Pv),
	Cv = b({}, Fo, {
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
	Xu = De(Cv),
	Tv = b({}, ai, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Pa,
	}),
	Ev = De(Tv),
	jv = b({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Rv = De(jv),
	Nv = b({}, Fo, {
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
	Lv = De(Nv),
	Av = [9, 13, 27, 32],
	_a = dt && "CompositionEvent" in window,
	_r = null;
dt && "documentMode" in document && (_r = document.documentMode);
var Mv = dt && "TextEvent" in window && !_r,
	th = dt && (!_a || (_r && 8 < _r && 11 >= _r)),
	Zu = " ",
	Ju = !1;
function nh(e, t) {
	switch (e) {
		case "keyup":
			return Av.indexOf(t.keyCode) !== -1;
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
function rh(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Vv(e, t) {
	switch (e) {
		case "compositionend":
			return rh(t);
		case "keypress":
			return t.which !== 32 ? null : ((Ju = !0), Zu);
		case "textInput":
			return (e = t.data), e === Zu && Ju ? null : e;
		default:
			return null;
	}
}
function Dv(e, t) {
	if (jn)
		return e === "compositionend" || (!_a && nh(e, t))
			? ((e = eh()), ($i = Sa = Et = null), (jn = !1), e)
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
			return th && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Ov = {
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
function qu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Ov[e.type] : t === "textarea";
}
function ih(e, t, n, r) {
	Dd(r),
		(t = lo(t, "onChange")),
		0 < t.length &&
			((n = new ka("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Cr = null,
	$r = null;
function Fv(e) {
	mh(e, 0);
}
function Io(e) {
	var t = Ln(e);
	if (jd(t)) return e;
}
function Iv(e, t) {
	if (e === "change") return t;
}
var oh = !1;
if (dt) {
	var ms;
	if (dt) {
		var gs = "oninput" in document;
		if (!gs) {
			var ec = document.createElement("div");
			ec.setAttribute("oninput", "return;"),
				(gs = typeof ec.oninput == "function");
		}
		ms = gs;
	} else ms = !1;
	oh = ms && (!document.documentMode || 9 < document.documentMode);
}
function tc() {
	Cr && (Cr.detachEvent("onpropertychange", sh), ($r = Cr = null));
}
function sh(e) {
	if (e.propertyName === "value" && Io($r)) {
		var t = [];
		ih(t, $r, e, ga(e)), zd(Fv, t);
	}
}
function zv(e, t, n) {
	e === "focusin"
		? (tc(), (Cr = t), ($r = n), Cr.attachEvent("onpropertychange", sh))
		: e === "focusout" && tc();
}
function Bv(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Io($r);
}
function Uv(e, t) {
	if (e === "click") return Io(t);
}
function $v(e, t) {
	if (e === "input" || e === "change") return Io(t);
}
function Wv(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : Wv;
function Wr(e, t) {
	if (Xe(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Xs.call(t, i) || !Xe(e[i], t[i])) return !1;
	}
	return !0;
}
function nc(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function rc(e, t) {
	var n = nc(e);
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
		n = nc(n);
	}
}
function lh(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? lh(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function ah() {
	for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = eo(e.document);
	}
	return t;
}
function Ca(e) {
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
function Hv(e) {
	var t = ah(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		lh(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Ca(n)) {
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
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = rc(n, o));
				var s = rc(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var Kv = dt && "documentMode" in document && 11 >= document.documentMode,
	Rn = null,
	ml = null,
	Tr = null,
	gl = !1;
function ic(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	gl ||
		Rn == null ||
		Rn !== eo(r) ||
		((r = Rn),
		"selectionStart" in r && Ca(r)
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
		(Tr && Wr(Tr, r)) ||
			((Tr = r),
			(r = lo(ml, "onSelect")),
			0 < r.length &&
				((t = new ka("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Rn))));
}
function Ei(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Nn = {
		animationend: Ei("Animation", "AnimationEnd"),
		animationiteration: Ei("Animation", "AnimationIteration"),
		animationstart: Ei("Animation", "AnimationStart"),
		transitionend: Ei("Transition", "TransitionEnd"),
	},
	vs = {},
	uh = {};
dt &&
	((uh = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Nn.animationend.animation,
		delete Nn.animationiteration.animation,
		delete Nn.animationstart.animation),
	"TransitionEvent" in window || delete Nn.transitionend.transition);
function zo(e) {
	if (vs[e]) return vs[e];
	if (!Nn[e]) return e;
	var t = Nn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in uh) return (vs[e] = t[n]);
	return e;
}
var ch = zo("animationend"),
	fh = zo("animationiteration"),
	dh = zo("animationstart"),
	hh = zo("transitionend"),
	ph = new Map(),
	oc =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function bt(e, t) {
	ph.set(e, t), yn(t, [e]);
}
for (var ys = 0; ys < oc.length; ys++) {
	var ws = oc[ys],
		bv = ws.toLowerCase(),
		Gv = ws[0].toUpperCase() + ws.slice(1);
	bt(bv, "on" + Gv);
}
bt(ch, "onAnimationEnd");
bt(fh, "onAnimationIteration");
bt(dh, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(hh, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xr =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	Qv = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function sc(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), bg(r, t, void 0, e), (e.currentTarget = null);
}
function mh(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
					sc(i, l, u), (o = a);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== o && i.isPropagationStopped())
					)
						break e;
					sc(i, l, u), (o = a);
				}
		}
	}
	if (no) throw ((e = fl), (no = !1), (fl = null), e);
}
function B(e, t) {
	var n = t[Sl];
	n === void 0 && (n = t[Sl] = new Set());
	var r = e + "__bubble";
	n.has(r) || (gh(t, e, 2, !1), n.add(r));
}
function xs(e, t, n) {
	var r = 0;
	t && (r |= 4), gh(n, e, r, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
	if (!e[ji]) {
		(e[ji] = !0),
			Pd.forEach(function (n) {
				n !== "selectionchange" && (Qv.has(n) || xs(n, !1, e), xs(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[ji] || ((t[ji] = !0), xs("selectionchange", !1, t));
	}
}
function gh(e, t, n, r) {
	switch (qd(t)) {
		case 1:
			var i = av;
			break;
		case 4:
			i = uv;
			break;
		default:
			i = xa;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!cl ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function Ss(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = sn(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = o = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	zd(function () {
		var u = o,
			c = ga(n),
			f = [];
		e: {
			var d = ph.get(e);
			if (d !== void 0) {
				var g = ka,
					v = e;
				switch (e) {
					case "keypress":
						if (Wi(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = _v;
						break;
					case "focusin":
						(v = "focus"), (g = ps);
						break;
					case "focusout":
						(v = "blur"), (g = ps);
						break;
					case "beforeblur":
					case "afterblur":
						g = ps;
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
						g = Qu;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = dv;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = Ev;
						break;
					case ch:
					case fh:
					case dh:
						g = mv;
						break;
					case hh:
						g = Rv;
						break;
					case "scroll":
						g = cv;
						break;
					case "wheel":
						g = Lv;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = vv;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = Xu;
				}
				var w = (t & 4) !== 0,
					S = !w && e === "scroll",
					p = w ? (d !== null ? d + "Capture" : null) : d;
				w = [];
				for (var h = u, m; h !== null; ) {
					m = h;
					var x = m.stateNode;
					if (
						(m.tag === 5 &&
							x !== null &&
							((m = x),
							p !== null && ((x = Ir(h, p)), x != null && w.push(Kr(h, x, m)))),
						S)
					)
						break;
					h = h.return;
				}
				0 < w.length &&
					((d = new g(d, v, null, n, c)), f.push({ event: d, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === "mouseover" || e === "pointerover"),
					(g = e === "mouseout" || e === "pointerout"),
					d &&
						n !== al &&
						(v = n.relatedTarget || n.fromElement) &&
						(sn(v) || v[ht]))
				)
					break e;
				if (
					(g || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					g
						? ((v = n.relatedTarget || n.toElement),
						  (g = u),
						  (v = v ? sn(v) : null),
						  v !== null &&
								((S = wn(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
								(v = null))
						: ((g = null), (v = u)),
					g !== v)
				) {
					if (
						((w = Qu),
						(x = "onMouseLeave"),
						(p = "onMouseEnter"),
						(h = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = Xu),
							(x = "onPointerLeave"),
							(p = "onPointerEnter"),
							(h = "pointer")),
						(S = g == null ? d : Ln(g)),
						(m = v == null ? d : Ln(v)),
						(d = new w(x, h + "leave", g, n, c)),
						(d.target = S),
						(d.relatedTarget = m),
						(x = null),
						sn(c) === u &&
							((w = new w(p, h + "enter", v, n, c)),
							(w.target = m),
							(w.relatedTarget = S),
							(x = w)),
						(S = x),
						g && v)
					)
						t: {
							for (w = g, p = v, h = 0, m = w; m; m = Pn(m)) h++;
							for (m = 0, x = p; x; x = Pn(x)) m++;
							for (; 0 < h - m; ) (w = Pn(w)), h--;
							for (; 0 < m - h; ) (p = Pn(p)), m--;
							for (; h--; ) {
								if (w === p || (p !== null && w === p.alternate)) break t;
								(w = Pn(w)), (p = Pn(p));
							}
							w = null;
						}
					else w = null;
					g !== null && lc(f, d, g, w, !1),
						v !== null && S !== null && lc(f, S, v, w, !0);
				}
			}
			e: {
				if (
					((d = u ? Ln(u) : window),
					(g = d.nodeName && d.nodeName.toLowerCase()),
					g === "select" || (g === "input" && d.type === "file"))
				)
					var P = Iv;
				else if (qu(d))
					if (oh) P = $v;
					else {
						P = Bv;
						var T = zv;
					}
				else
					(g = d.nodeName) &&
						g.toLowerCase() === "input" &&
						(d.type === "checkbox" || d.type === "radio") &&
						(P = Uv);
				if (P && (P = P(e, u))) {
					ih(f, P, n, c);
					break e;
				}
				T && T(e, d, u),
					e === "focusout" &&
						(T = d._wrapperState) &&
						T.controlled &&
						d.type === "number" &&
						rl(d, "number", d.value);
			}
			switch (((T = u ? Ln(u) : window), e)) {
				case "focusin":
					(qu(T) || T.contentEditable === "true") &&
						((Rn = T), (ml = u), (Tr = null));
					break;
				case "focusout":
					Tr = ml = Rn = null;
					break;
				case "mousedown":
					gl = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(gl = !1), ic(f, n, c);
					break;
				case "selectionchange":
					if (Kv) break;
				case "keydown":
				case "keyup":
					ic(f, n, c);
			}
			var j;
			if (_a)
				e: {
					switch (e) {
						case "compositionstart":
							var C = "onCompositionStart";
							break e;
						case "compositionend":
							C = "onCompositionEnd";
							break e;
						case "compositionupdate":
							C = "onCompositionUpdate";
							break e;
					}
					C = void 0;
				}
			else
				jn
					? nh(e, n) && (C = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
			C &&
				(th &&
					n.locale !== "ko" &&
					(jn || C !== "onCompositionStart"
						? C === "onCompositionEnd" && jn && (j = eh())
						: ((Et = c),
						  (Sa = "value" in Et ? Et.value : Et.textContent),
						  (jn = !0))),
				(T = lo(u, C)),
				0 < T.length &&
					((C = new Yu(C, e, null, n, c)),
					f.push({ event: C, listeners: T }),
					j ? (C.data = j) : ((j = rh(n)), j !== null && (C.data = j)))),
				(j = Mv ? Vv(e, n) : Dv(e, n)) &&
					((u = lo(u, "onBeforeInput")),
					0 < u.length &&
						((c = new Yu("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = j)));
		}
		mh(f, t);
	});
}
function Kr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function lo(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Ir(e, n)),
			o != null && r.unshift(Kr(e, o, i)),
			(o = Ir(e, t)),
			o != null && r.push(Kr(e, o, i))),
			(e = e.return);
	}
	return r;
}
function Pn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function lc(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = Ir(n, o)), a != null && s.unshift(Kr(n, a, l)))
				: i || ((a = Ir(n, o)), a != null && s.push(Kr(n, a, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yv = /\r\n?/g,
	Xv = /\u0000|\uFFFD/g;
function ac(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			Yv,
			`
`
		)
		.replace(Xv, "");
}
function Ri(e, t, n) {
	if (((t = ac(t)), ac(e) !== t && n)) throw Error(_(425));
}
function ao() {}
var vl = null,
	yl = null;
function wl(e, t) {
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
var xl = typeof setTimeout == "function" ? setTimeout : void 0,
	Zv = typeof clearTimeout == "function" ? clearTimeout : void 0,
	uc = typeof Promise == "function" ? Promise : void 0,
	Jv =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof uc < "u"
			? function (e) {
					return uc.resolve(null).then(e).catch(qv);
			  }
			: xl;
function qv(e) {
	setTimeout(function () {
		throw e;
	});
}
function ks(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), Ur(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	Ur(t);
}
function Mt(e) {
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
function cc(e) {
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
var ir = Math.random().toString(36).slice(2),
	qe = "__reactFiber$" + ir,
	br = "__reactProps$" + ir,
	ht = "__reactContainer$" + ir,
	Sl = "__reactEvents$" + ir,
	ey = "__reactListeners$" + ir,
	ty = "__reactHandles$" + ir;
function sn(e) {
	var t = e[qe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ht] || n[qe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = cc(e); e !== null; ) {
					if ((n = e[qe])) return n;
					e = cc(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function ui(e) {
	return (
		(e = e[qe] || e[ht]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function Ln(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(_(33));
}
function Bo(e) {
	return e[br] || null;
}
var kl = [],
	An = -1;
function Gt(e) {
	return { current: e };
}
function U(e) {
	0 > An || ((e.current = kl[An]), (kl[An] = null), An--);
}
function z(e, t) {
	An++, (kl[An] = e.current), (e.current = t);
}
var $t = {},
	ve = Gt($t),
	_e = Gt(!1),
	hn = $t;
function Yn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return $t;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function Ce(e) {
	return (e = e.childContextTypes), e != null;
}
function uo() {
	U(_e), U(ve);
}
function fc(e, t, n) {
	if (ve.current !== $t) throw Error(_(168));
	z(ve, t), z(_e, n);
}
function vh(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(_(108, zg(e) || "Unknown", i));
	return b({}, n, r);
}
function co(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
		(hn = ve.current),
		z(ve, e),
		z(_e, _e.current),
		!0
	);
}
function dc(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(_(169));
	n
		? ((e = vh(e, t, hn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  U(_e),
		  U(ve),
		  z(ve, e))
		: U(_e),
		z(_e, n);
}
var it = null,
	Uo = !1,
	Ps = !1;
function yh(e) {
	it === null ? (it = [e]) : it.push(e);
}
function ny(e) {
	(Uo = !0), yh(e);
}
function Qt() {
	if (!Ps && it !== null) {
		Ps = !0;
		var e = 0,
			t = F;
		try {
			var n = it;
			for (F = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(it = null), (Uo = !1);
		} catch (i) {
			throw (it !== null && (it = it.slice(e + 1)), Wd(va, Qt), i);
		} finally {
			(F = t), (Ps = !1);
		}
	}
	return null;
}
var Mn = [],
	Vn = 0,
	fo = null,
	ho = 0,
	Ie = [],
	ze = 0,
	pn = null,
	ot = 1,
	st = "";
function tn(e, t) {
	(Mn[Vn++] = ho), (Mn[Vn++] = fo), (fo = e), (ho = t);
}
function wh(e, t, n) {
	(Ie[ze++] = ot), (Ie[ze++] = st), (Ie[ze++] = pn), (pn = e);
	var r = ot;
	e = st;
	var i = 32 - Qe(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Qe(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(ot = (1 << (32 - Qe(t) + i)) | (n << i) | r),
			(st = o + e);
	} else (ot = (1 << o) | (n << i) | r), (st = e);
}
function Ta(e) {
	e.return !== null && (tn(e, 1), wh(e, 1, 0));
}
function Ea(e) {
	for (; e === fo; )
		(fo = Mn[--Vn]), (Mn[Vn] = null), (ho = Mn[--Vn]), (Mn[Vn] = null);
	for (; e === pn; )
		(pn = Ie[--ze]),
			(Ie[ze] = null),
			(st = Ie[--ze]),
			(Ie[ze] = null),
			(ot = Ie[--ze]),
			(Ie[ze] = null);
}
var Le = null,
	Re = null,
	$ = !1,
	Ge = null;
function xh(e, t) {
	var n = Be(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Le = e), (Re = Mt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Le = e), (Re = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = pn !== null ? { id: ot, overflow: st } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Be(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Le = e),
					  (Re = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Pl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _l(e) {
	if ($) {
		var t = Re;
		if (t) {
			var n = t;
			if (!hc(e, t)) {
				if (Pl(e)) throw Error(_(418));
				t = Mt(n.nextSibling);
				var r = Le;
				t && hc(e, t)
					? xh(r, n)
					: ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e));
			}
		} else {
			if (Pl(e)) throw Error(_(418));
			(e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e);
		}
	}
}
function pc(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Le = e;
}
function Ni(e) {
	if (e !== Le) return !1;
	if (!$) return pc(e), ($ = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !wl(e.type, e.memoizedProps))),
		t && (t = Re))
	) {
		if (Pl(e)) throw (Sh(), Error(_(418)));
		for (; t; ) xh(e, t), (t = Mt(t.nextSibling));
	}
	if ((pc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(_(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Re = Mt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Re = null;
		}
	} else Re = Le ? Mt(e.stateNode.nextSibling) : null;
	return !0;
}
function Sh() {
	for (var e = Re; e; ) e = Mt(e.nextSibling);
}
function Xn() {
	(Re = Le = null), ($ = !1);
}
function ja(e) {
	Ge === null ? (Ge = [e]) : Ge.push(e);
}
var ry = vt.ReactCurrentBatchConfig;
function hr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(_(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(_(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs;
						s === null ? delete l[o] : (l[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(_(284));
		if (!n._owner) throw Error(_(290, e));
	}
	return e;
}
function Li(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			_(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function mc(e) {
	var t = e._init;
	return t(e._payload);
}
function kh(e) {
	function t(p, h) {
		if (e) {
			var m = p.deletions;
			m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
		}
	}
	function n(p, h) {
		if (!e) return null;
		for (; h !== null; ) t(p, h), (h = h.sibling);
		return null;
	}
	function r(p, h) {
		for (p = new Map(); h !== null; )
			h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
		return p;
	}
	function i(p, h) {
		return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
	}
	function o(p, h, m) {
		return (
			(p.index = m),
			e
				? ((m = p.alternate),
				  m !== null
						? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
						: ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		);
	}
	function s(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function l(p, h, m, x) {
		return h === null || h.tag !== 6
			? ((h = Ns(m, p.mode, x)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h);
	}
	function a(p, h, m, x) {
		var P = m.type;
		return P === En
			? c(p, h, m.props.children, x, m.key)
			: h !== null &&
			  (h.elementType === P ||
					(typeof P == "object" &&
						P !== null &&
						P.$$typeof === kt &&
						mc(P) === h.type))
			? ((x = i(h, m.props)), (x.ref = hr(p, h, m)), (x.return = p), x)
			: ((x = Xi(m.type, m.key, m.props, null, p.mode, x)),
			  (x.ref = hr(p, h, m)),
			  (x.return = p),
			  x);
	}
	function u(p, h, m, x) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== m.containerInfo ||
			h.stateNode.implementation !== m.implementation
			? ((h = Ls(m, p.mode, x)), (h.return = p), h)
			: ((h = i(h, m.children || [])), (h.return = p), h);
	}
	function c(p, h, m, x, P) {
		return h === null || h.tag !== 7
			? ((h = fn(m, p.mode, x, P)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h);
	}
	function f(p, h, m) {
		if ((typeof h == "string" && h !== "") || typeof h == "number")
			return (h = Ns("" + h, p.mode, m)), (h.return = p), h;
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case xi:
					return (
						(m = Xi(h.type, h.key, h.props, null, p.mode, m)),
						(m.ref = hr(p, null, h)),
						(m.return = p),
						m
					);
				case Tn:
					return (h = Ls(h, p.mode, m)), (h.return = p), h;
				case kt:
					var x = h._init;
					return f(p, x(h._payload), m);
			}
			if (yr(h) || ar(h))
				return (h = fn(h, p.mode, m, null)), (h.return = p), h;
			Li(p, h);
		}
		return null;
	}
	function d(p, h, m, x) {
		var P = h !== null ? h.key : null;
		if ((typeof m == "string" && m !== "") || typeof m == "number")
			return P !== null ? null : l(p, h, "" + m, x);
		if (typeof m == "object" && m !== null) {
			switch (m.$$typeof) {
				case xi:
					return m.key === P ? a(p, h, m, x) : null;
				case Tn:
					return m.key === P ? u(p, h, m, x) : null;
				case kt:
					return (P = m._init), d(p, h, P(m._payload), x);
			}
			if (yr(m) || ar(m)) return P !== null ? null : c(p, h, m, x, null);
			Li(p, m);
		}
		return null;
	}
	function g(p, h, m, x, P) {
		if ((typeof x == "string" && x !== "") || typeof x == "number")
			return (p = p.get(m) || null), l(h, p, "" + x, P);
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case xi:
					return (p = p.get(x.key === null ? m : x.key) || null), a(h, p, x, P);
				case Tn:
					return (p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, P);
				case kt:
					var T = x._init;
					return g(p, h, m, T(x._payload), P);
			}
			if (yr(x) || ar(x)) return (p = p.get(m) || null), c(h, p, x, P, null);
			Li(h, x);
		}
		return null;
	}
	function v(p, h, m, x) {
		for (
			var P = null, T = null, j = h, C = (h = 0), D = null;
			j !== null && C < m.length;
			C++
		) {
			j.index > C ? ((D = j), (j = null)) : (D = j.sibling);
			var L = d(p, j, m[C], x);
			if (L === null) {
				j === null && (j = D);
				break;
			}
			e && j && L.alternate === null && t(p, j),
				(h = o(L, h, C)),
				T === null ? (P = L) : (T.sibling = L),
				(T = L),
				(j = D);
		}
		if (C === m.length) return n(p, j), $ && tn(p, C), P;
		if (j === null) {
			for (; C < m.length; C++)
				(j = f(p, m[C], x)),
					j !== null &&
						((h = o(j, h, C)), T === null ? (P = j) : (T.sibling = j), (T = j));
			return $ && tn(p, C), P;
		}
		for (j = r(p, j); C < m.length; C++)
			(D = g(j, p, C, m[C], x)),
				D !== null &&
					(e && D.alternate !== null && j.delete(D.key === null ? C : D.key),
					(h = o(D, h, C)),
					T === null ? (P = D) : (T.sibling = D),
					(T = D));
		return (
			e &&
				j.forEach(function (te) {
					return t(p, te);
				}),
			$ && tn(p, C),
			P
		);
	}
	function w(p, h, m, x) {
		var P = ar(m);
		if (typeof P != "function") throw Error(_(150));
		if (((m = P.call(m)), m == null)) throw Error(_(151));
		for (
			var T = (P = null), j = h, C = (h = 0), D = null, L = m.next();
			j !== null && !L.done;
			C++, L = m.next()
		) {
			j.index > C ? ((D = j), (j = null)) : (D = j.sibling);
			var te = d(p, j, L.value, x);
			if (te === null) {
				j === null && (j = D);
				break;
			}
			e && j && te.alternate === null && t(p, j),
				(h = o(te, h, C)),
				T === null ? (P = te) : (T.sibling = te),
				(T = te),
				(j = D);
		}
		if (L.done) return n(p, j), $ && tn(p, C), P;
		if (j === null) {
			for (; !L.done; C++, L = m.next())
				(L = f(p, L.value, x)),
					L !== null &&
						((h = o(L, h, C)), T === null ? (P = L) : (T.sibling = L), (T = L));
			return $ && tn(p, C), P;
		}
		for (j = r(p, j); !L.done; C++, L = m.next())
			(L = g(j, p, C, L.value, x)),
				L !== null &&
					(e && L.alternate !== null && j.delete(L.key === null ? C : L.key),
					(h = o(L, h, C)),
					T === null ? (P = L) : (T.sibling = L),
					(T = L));
		return (
			e &&
				j.forEach(function (yt) {
					return t(p, yt);
				}),
			$ && tn(p, C),
			P
		);
	}
	function S(p, h, m, x) {
		if (
			(typeof m == "object" &&
				m !== null &&
				m.type === En &&
				m.key === null &&
				(m = m.props.children),
			typeof m == "object" && m !== null)
		) {
			switch (m.$$typeof) {
				case xi:
					e: {
						for (var P = m.key, T = h; T !== null; ) {
							if (T.key === P) {
								if (((P = m.type), P === En)) {
									if (T.tag === 7) {
										n(p, T.sibling),
											(h = i(T, m.props.children)),
											(h.return = p),
											(p = h);
										break e;
									}
								} else if (
									T.elementType === P ||
									(typeof P == "object" &&
										P !== null &&
										P.$$typeof === kt &&
										mc(P) === T.type)
								) {
									n(p, T.sibling),
										(h = i(T, m.props)),
										(h.ref = hr(p, T, m)),
										(h.return = p),
										(p = h);
									break e;
								}
								n(p, T);
								break;
							} else t(p, T);
							T = T.sibling;
						}
						m.type === En
							? ((h = fn(m.props.children, p.mode, x, m.key)),
							  (h.return = p),
							  (p = h))
							: ((x = Xi(m.type, m.key, m.props, null, p.mode, x)),
							  (x.ref = hr(p, h, m)),
							  (x.return = p),
							  (p = x));
					}
					return s(p);
				case Tn:
					e: {
						for (T = m.key; h !== null; ) {
							if (h.key === T)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === m.containerInfo &&
									h.stateNode.implementation === m.implementation
								) {
									n(p, h.sibling),
										(h = i(h, m.children || [])),
										(h.return = p),
										(p = h);
									break e;
								} else {
									n(p, h);
									break;
								}
							else t(p, h);
							h = h.sibling;
						}
						(h = Ls(m, p.mode, x)), (h.return = p), (p = h);
					}
					return s(p);
				case kt:
					return (T = m._init), S(p, h, T(m._payload), x);
			}
			if (yr(m)) return v(p, h, m, x);
			if (ar(m)) return w(p, h, m, x);
			Li(p, m);
		}
		return (typeof m == "string" && m !== "") || typeof m == "number"
			? ((m = "" + m),
			  h !== null && h.tag === 6
					? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
					: (n(p, h), (h = Ns(m, p.mode, x)), (h.return = p), (p = h)),
			  s(p))
			: n(p, h);
	}
	return S;
}
var Zn = kh(!0),
	Ph = kh(!1),
	po = Gt(null),
	mo = null,
	Dn = null,
	Ra = null;
function Na() {
	Ra = Dn = mo = null;
}
function La(e) {
	var t = po.current;
	U(po), (e._currentValue = t);
}
function Cl(e, t, n) {
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
function bn(e, t) {
	(mo = e),
		(Ra = Dn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function $e(e) {
	var t = e._currentValue;
	if (Ra !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
			if (mo === null) throw Error(_(308));
			(Dn = e), (mo.dependencies = { lanes: 0, firstContext: e });
		} else Dn = Dn.next = e;
	return t;
}
var ln = null;
function Aa(e) {
	ln === null ? (ln = [e]) : ln.push(e);
}
function _h(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Aa(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		pt(e, r)
	);
}
function pt(e, t) {
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
var Pt = !1;
function Ma(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Ch(e, t) {
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
function at(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Vt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), O & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			pt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Aa(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		pt(e, n)
	);
}
function Hi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
	}
}
function gc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
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
function go(e, t, n, r) {
	var i = e.updateQueue;
	Pt = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var a = l,
			u = a.next;
		(a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var f = i.baseState;
		(s = 0), (c = u = a = null), (l = o);
		do {
			var d = l.lane,
				g = l.eventTime;
			if ((r & d) === d) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var v = e,
						w = l;
					switch (((d = t), (g = n), w.tag)) {
						case 1:
							if (((v = w.payload), typeof v == "function")) {
								f = v.call(g, f, d);
								break e;
							}
							f = v;
							break e;
						case 3:
							v.flags = (v.flags & -65537) | 128;
						case 0:
							if (
								((v = w.payload),
								(d = typeof v == "function" ? v.call(g, f, d) : v),
								d == null)
							)
								break e;
							f = b({}, f, d);
							break e;
						case 2:
							Pt = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [l]) : d.push(l));
			} else
				(g = {
					eventTime: g,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
					(s |= d);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (a = f),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(gn |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function vc(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(_(191, i));
				i.call(r);
			}
		}
}
var ci = {},
	tt = Gt(ci),
	Gr = Gt(ci),
	Qr = Gt(ci);
function an(e) {
	if (e === ci) throw Error(_(174));
	return e;
}
function Va(e, t) {
	switch ((z(Qr, t), z(Gr, e), z(tt, ci), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ol(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = ol(t, e));
	}
	U(tt), z(tt, t);
}
function Jn() {
	U(tt), U(Gr), U(Qr);
}
function Th(e) {
	an(Qr.current);
	var t = an(tt.current),
		n = ol(t, e.type);
	t !== n && (z(Gr, e), z(tt, n));
}
function Da(e) {
	Gr.current === e && (U(tt), U(Gr));
}
var W = Gt(0);
function vo(e) {
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
var _s = [];
function Oa() {
	for (var e = 0; e < _s.length; e++)
		_s[e]._workInProgressVersionPrimary = null;
	_s.length = 0;
}
var Ki = vt.ReactCurrentDispatcher,
	Cs = vt.ReactCurrentBatchConfig,
	mn = 0,
	K = null,
	q = null,
	re = null,
	yo = !1,
	Er = !1,
	Yr = 0,
	iy = 0;
function fe() {
	throw Error(_(321));
}
function Fa(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Xe(e[n], t[n])) return !1;
	return !0;
}
function Ia(e, t, n, r, i, o) {
	if (
		((mn = o),
		(K = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Ki.current = e === null || e.memoizedState === null ? ay : uy),
		(e = n(r, i)),
		Er)
	) {
		o = 0;
		do {
			if (((Er = !1), (Yr = 0), 25 <= o)) throw Error(_(301));
			(o += 1),
				(re = q = null),
				(t.updateQueue = null),
				(Ki.current = cy),
				(e = n(r, i));
		} while (Er);
	}
	if (
		((Ki.current = wo),
		(t = q !== null && q.next !== null),
		(mn = 0),
		(re = q = K = null),
		(yo = !1),
		t)
	)
		throw Error(_(300));
	return e;
}
function za() {
	var e = Yr !== 0;
	return (Yr = 0), e;
}
function Je() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function We() {
	if (q === null) {
		var e = K.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = q.next;
	var t = re === null ? K.memoizedState : re.next;
	if (t !== null) (re = t), (q = e);
	else {
		if (e === null) throw Error(_(310));
		(q = e),
			(e = {
				memoizedState: q.memoizedState,
				baseState: q.baseState,
				baseQueue: q.baseQueue,
				queue: q.queue,
				next: null,
			}),
			re === null ? (K.memoizedState = re = e) : (re = re.next = e);
	}
	return re;
}
function Xr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Ts(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(_(311));
	n.lastRenderedReducer = e;
	var r = q,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (s = null),
			a = null,
			u = o;
		do {
			var c = u.lane;
			if ((mn & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
					(K.lanes |= c),
					(gn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		a === null ? (s = r) : (a.next = l),
			Xe(r, t.memoizedState) || (Pe = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (K.lanes |= o), (gn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Es(e) {
	var t = We(),
		n = t.queue;
	if (n === null) throw Error(_(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		Xe(o, t.memoizedState) || (Pe = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function Eh() {}
function jh(e, t) {
	var n = K,
		r = We(),
		i = t(),
		o = !Xe(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (Pe = !0)),
		(r = r.queue),
		Ba(Lh.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Zr(9, Nh.bind(null, n, r, i, t), void 0, null),
			ie === null)
		)
			throw Error(_(349));
		mn & 30 || Rh(n, t, i);
	}
	return i;
}
function Rh(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = K.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (K.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Nh(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), Ah(t) && Mh(e);
}
function Lh(e, t, n) {
	return n(function () {
		Ah(t) && Mh(e);
	});
}
function Ah(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Xe(e, n);
	} catch {
		return !0;
	}
}
function Mh(e) {
	var t = pt(e, 1);
	t !== null && Ye(t, e, 1, -1);
}
function yc(e) {
	var t = Je();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Xr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = ly.bind(null, K, e)),
		[t.memoizedState, e]
	);
}
function Zr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = K.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (K.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Vh() {
	return We().memoizedState;
}
function bi(e, t, n, r) {
	var i = Je();
	(K.flags |= e),
		(i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function $o(e, t, n, r) {
	var i = We();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (q !== null) {
		var s = q.memoizedState;
		if (((o = s.destroy), r !== null && Fa(r, s.deps))) {
			i.memoizedState = Zr(t, n, o, r);
			return;
		}
	}
	(K.flags |= e), (i.memoizedState = Zr(1 | t, n, o, r));
}
function wc(e, t) {
	return bi(8390656, 8, e, t);
}
function Ba(e, t) {
	return $o(2048, 8, e, t);
}
function Dh(e, t) {
	return $o(4, 2, e, t);
}
function Oh(e, t) {
	return $o(4, 4, e, t);
}
function Fh(e, t) {
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
function Ih(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), $o(4, 4, Fh.bind(null, t, e), n)
	);
}
function Ua() {}
function zh(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Fa(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Bh(e, t) {
	var n = We();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Fa(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Uh(e, t, n) {
	return mn & 21
		? (Xe(n, t) || ((n = bd()), (K.lanes |= n), (gn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function oy(e, t) {
	var n = F;
	(F = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Cs.transition;
	Cs.transition = {};
	try {
		e(!1), t();
	} finally {
		(F = n), (Cs.transition = r);
	}
}
function $h() {
	return We().memoizedState;
}
function sy(e, t, n) {
	var r = Ot(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Wh(e))
	)
		Hh(t, n);
	else if (((n = _h(e, t, n, r)), n !== null)) {
		var i = we();
		Ye(n, e, r, i), Kh(n, t, r);
	}
}
function ly(e, t, n) {
	var r = Ot(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Wh(e)) Hh(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), Xe(l, s))) {
					var a = t.interleaved;
					a === null
						? ((i.next = i), Aa(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = _h(e, t, i, r)),
			n !== null && ((i = we()), Ye(n, e, r, i), Kh(n, t, r));
	}
}
function Wh(e) {
	var t = e.alternate;
	return e === K || (t !== null && t === K);
}
function Hh(e, t) {
	Er = yo = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Kh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ya(e, n);
	}
}
var wo = {
		readContext: $e,
		useCallback: fe,
		useContext: fe,
		useEffect: fe,
		useImperativeHandle: fe,
		useInsertionEffect: fe,
		useLayoutEffect: fe,
		useMemo: fe,
		useReducer: fe,
		useRef: fe,
		useState: fe,
		useDebugValue: fe,
		useDeferredValue: fe,
		useTransition: fe,
		useMutableSource: fe,
		useSyncExternalStore: fe,
		useId: fe,
		unstable_isNewReconciler: !1,
	},
	ay = {
		readContext: $e,
		useCallback: function (e, t) {
			return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: $e,
		useEffect: wc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				bi(4194308, 4, Fh.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return bi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return bi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Je();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Je();
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
				(e = e.dispatch = sy.bind(null, K, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Je();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: yc,
		useDebugValue: Ua,
		useDeferredValue: function (e) {
			return (Je().memoizedState = e);
		},
		useTransition: function () {
			var e = yc(!1),
				t = e[0];
			return (e = oy.bind(null, e[1])), (Je().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = K,
				i = Je();
			if ($) {
				if (n === void 0) throw Error(_(407));
				n = n();
			} else {
				if (((n = t()), ie === null)) throw Error(_(349));
				mn & 30 || Rh(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				wc(Lh.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Zr(9, Nh.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Je(),
				t = ie.identifierPrefix;
			if ($) {
				var n = st,
					r = ot;
				(n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Yr++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = iy++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	uy = {
		readContext: $e,
		useCallback: zh,
		useContext: $e,
		useEffect: Ba,
		useImperativeHandle: Ih,
		useInsertionEffect: Dh,
		useLayoutEffect: Oh,
		useMemo: Bh,
		useReducer: Ts,
		useRef: Vh,
		useState: function () {
			return Ts(Xr);
		},
		useDebugValue: Ua,
		useDeferredValue: function (e) {
			var t = We();
			return Uh(t, q.memoizedState, e);
		},
		useTransition: function () {
			var e = Ts(Xr)[0],
				t = We().memoizedState;
			return [e, t];
		},
		useMutableSource: Eh,
		useSyncExternalStore: jh,
		useId: $h,
		unstable_isNewReconciler: !1,
	},
	cy = {
		readContext: $e,
		useCallback: zh,
		useContext: $e,
		useEffect: Ba,
		useImperativeHandle: Ih,
		useInsertionEffect: Dh,
		useLayoutEffect: Oh,
		useMemo: Bh,
		useReducer: Es,
		useRef: Vh,
		useState: function () {
			return Es(Xr);
		},
		useDebugValue: Ua,
		useDeferredValue: function (e) {
			var t = We();
			return q === null ? (t.memoizedState = e) : Uh(t, q.memoizedState, e);
		},
		useTransition: function () {
			var e = Es(Xr)[0],
				t = We().memoizedState;
			return [e, t];
		},
		useMutableSource: Eh,
		useSyncExternalStore: jh,
		useId: $h,
		unstable_isNewReconciler: !1,
	};
function Ke(e, t) {
	if (e && e.defaultProps) {
		(t = b({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function Tl(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : b({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? wn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			i = Ot(e),
			o = at(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Ye(t, e, i, r), Hi(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = we(),
			i = Ot(e),
			o = at(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Ye(t, e, i, r), Hi(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = we(),
			r = Ot(e),
			i = at(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Vt(e, i, r)),
			t !== null && (Ye(t, e, r, n), Hi(t, e, r));
	},
};
function xc(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !Wr(n, r) || !Wr(i, o)
			: !0
	);
}
function bh(e, t, n) {
	var r = !1,
		i = $t,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = $e(o))
			: ((i = Ce(t) ? hn : ve.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? Yn(e, i) : $t)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Wo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Sc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function El(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ma(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = $e(o))
		: ((o = Ce(t) ? hn : ve.current), (i.context = Yn(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (Tl(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Wo.enqueueReplaceState(i, i.state, null),
			go(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += Ig(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function js(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function jl(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var fy = typeof WeakMap == "function" ? WeakMap : Map;
function Gh(e, t, n) {
	(n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			So || ((So = !0), (Il = r)), jl(e, t);
		}),
		n
	);
}
function Qh(e, t, n) {
	(n = at(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				jl(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				jl(e, t),
					typeof r != "function" &&
						(Dt === null ? (Dt = new Set([this])) : Dt.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function kc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new fy();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = Cy.bind(null, e, t, n)), t.then(e, e));
}
function Pc(e) {
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
function _c(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = at(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var dy = vt.ReactCurrentOwner,
	Pe = !1;
function ye(e, t, n, r) {
	t.child = e === null ? Ph(t, null, n, r) : Zn(t, e.child, n, r);
}
function Cc(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		bn(t, i),
		(r = Ia(e, t, n, r, o, i)),
		(n = za()),
		e !== null && !Pe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  mt(e, t, i))
			: ($ && n && Ta(t), (t.flags |= 1), ye(e, t, r, i), t.child)
	);
}
function Tc(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Ya(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Yh(e, t, o, r, i))
			: ((e = Xi(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Wr), n(s, r) && e.ref === t.ref)
		)
			return mt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Ft(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Yh(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Wr(o, r) && e.ref === t.ref)
			if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Pe = !0);
			else return (t.lanes = e.lanes), mt(e, t, i);
	}
	return Rl(e, t, n, r, i);
}
function Xh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				z(Fn, je),
				(je |= n);
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
					z(Fn, je),
					(je |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				z(Fn, je),
				(je |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			z(Fn, je),
			(je |= r);
	return ye(e, t, i, n), t.child;
}
function Zh(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Rl(e, t, n, r, i) {
	var o = Ce(n) ? hn : ve.current;
	return (
		(o = Yn(t, o)),
		bn(t, i),
		(n = Ia(e, t, n, r, o, i)),
		(r = za()),
		e !== null && !Pe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  mt(e, t, i))
			: ($ && r && Ta(t), (t.flags |= 1), ye(e, t, n, i), t.child)
	);
}
function Ec(e, t, n, r, i) {
	if (Ce(n)) {
		var o = !0;
		co(t);
	} else o = !1;
	if ((bn(t, i), t.stateNode === null))
		Gi(e, t), bh(t, n, r), El(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = $e(u))
			: ((u = Ce(n) ? hn : ve.current), (u = Yn(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== r || a !== u) && Sc(t, s, r, u)),
			(Pt = !1);
		var d = t.memoizedState;
		(s.state = d),
			go(t, r, s, i),
			(a = t.memoizedState),
			l !== r || d !== a || _e.current || Pt
				? (typeof c == "function" && (Tl(t, n, c, r), (a = t.memoizedState)),
				  (l = Pt || xc(t, n, l, r, d, a, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != "function" &&
									typeof s.componentWillMount != "function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == "function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (s.props = r),
				  (s.state = a),
				  (s.context = u),
				  (r = l))
				: (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			Ch(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Ke(t.type, l)),
			(s.props = u),
			(f = t.pendingProps),
			(d = s.context),
			(a = n.contextType),
			typeof a == "object" && a !== null
				? (a = $e(a))
				: ((a = Ce(n) ? hn : ve.current), (a = Yn(t, a)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((l !== f || d !== a) && Sc(t, s, r, a)),
			(Pt = !1),
			(d = t.memoizedState),
			(s.state = d),
			go(t, r, s, i);
		var v = t.memoizedState;
		l !== f || d !== v || _e.current || Pt
			? (typeof g == "function" && (Tl(t, n, g, r), (v = t.memoizedState)),
			  (u = Pt || xc(t, n, u, r, d, v, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != "function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, v, a),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, v, a)),
					  typeof s.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = v)),
			  (s.props = r),
			  (s.state = v),
			  (s.context = a),
			  (r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Nl(e, t, n, r, o, i);
}
function Nl(e, t, n, r, i, o) {
	Zh(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && dc(t, n, !1), mt(e, t, o);
	(r = t.stateNode), (dy.current = t);
	var l =
		s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Zn(t, e.child, null, o)), (t.child = Zn(t, null, l, o)))
			: ye(e, t, l, o),
		(t.memoizedState = r.state),
		i && dc(t, n, !0),
		t.child
	);
}
function Jh(e) {
	var t = e.stateNode;
	t.pendingContext
		? fc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && fc(e, t.context, !1),
		Va(e, t.containerInfo);
}
function jc(e, t, n, r, i) {
	return Xn(), ja(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Ll = { dehydrated: null, treeContext: null, retryLane: 0 };
function Al(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function qh(e, t, n) {
	var r = t.pendingProps,
		i = W.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		z(W, i & 1),
		e === null)
	)
		return (
			_l(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = bo(s, r, 0, null)),
						  (e = fn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Al(n)),
						  (t.memoizedState = Ll),
						  e)
						: $a(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return hy(e, t, s, r, l, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
		var a = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (t.deletions = null))
				: ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = Ft(l, o)) : ((o = fn(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? Al(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Ll),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Ft(o, { mode: "visible", children: r.children })),
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
function $a(e, t) {
	return (
		(t = bo({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Ai(e, t, n, r) {
	return (
		r !== null && ja(r),
		Zn(t, e.child, null, n),
		(e = $a(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function hy(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = js(Error(_(422)))), Ai(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = bo({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = fn(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Zn(t, e.child, null, s),
			  (t.child.memoizedState = Al(s)),
			  (t.memoizedState = Ll),
			  o);
	if (!(t.mode & 1)) return Ai(e, t, s, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (o = Error(_(419))), (r = js(o, r, void 0)), Ai(e, t, s, r);
	}
	if (((l = (s & e.childLanes) !== 0), Pe || l)) {
		if (((r = ie), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
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
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), pt(e, i), Ye(r, e, i, -1));
		}
		return Qa(), (r = js(Error(_(421)))), Ai(e, t, s, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Ty.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Re = Mt(i.nextSibling)),
		  (Le = t),
		  ($ = !0),
		  (Ge = null),
		  e !== null &&
				((Ie[ze++] = ot),
				(Ie[ze++] = st),
				(Ie[ze++] = pn),
				(ot = e.id),
				(st = e.overflow),
				(pn = t)),
		  (t = $a(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Rc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Cl(e.return, t, n);
}
function Rs(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function ep(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ye(e, t, r.children, n), (r = W.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Rc(e, n, t);
				else if (e.tag === 19) Rc(e, n, t);
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
	if ((z(W, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && vo(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Rs(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && vo(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				Rs(t, !0, n, null, o);
				break;
			case "together":
				Rs(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Gi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(gn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(_(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function py(e, t, n) {
	switch (t.tag) {
		case 3:
			Jh(t), Xn();
			break;
		case 5:
			Th(t);
			break;
		case 1:
			Ce(t.type) && co(t);
			break;
		case 4:
			Va(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			z(po, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (z(W, W.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? qh(e, t, n)
					: (z(W, W.current & 1),
					  (e = mt(e, t, n)),
					  e !== null ? e.sibling : null);
			z(W, W.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return ep(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				z(W, W.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Xh(e, t, n);
	}
	return mt(e, t, n);
}
var tp, Ml, np, rp;
tp = function (e, t) {
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
Ml = function () {};
np = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), an(tt.current);
		var o = null;
		switch (n) {
			case "input":
				(i = tl(e, i)), (r = tl(e, r)), (o = []);
				break;
			case "select":
				(i = b({}, i, { value: void 0 })),
					(r = b({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = il(e, i)), (r = il(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = ao);
		}
		sl(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var l = i[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(Or.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === "style")
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in a)
							a.hasOwnProperty(s) &&
								l[s] !== a[s] &&
								(n || (n = {}), (n[s] = a[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = a);
				else
					u === "dangerouslySetInnerHTML"
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (o = o || []).push(u, a))
						: u === "children"
						? (typeof a != "string" && typeof a != "number") ||
						  (o = o || []).push(u, "" + a)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (Or.hasOwnProperty(u)
								? (a != null && u === "onScroll" && B("scroll", e),
								  o || l === a || (o = []))
								: (o = o || []).push(u, a));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
rp = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function pr(e, t) {
	if (!$)
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
function de(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function my(e, t, n) {
	var r = t.pendingProps;
	switch ((Ea(t), t.tag)) {
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
			return de(t), null;
		case 1:
			return Ce(t.type) && uo(), de(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Jn(),
				U(_e),
				U(ve),
				Oa(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ni(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ge !== null && (Ul(Ge), (Ge = null)))),
				Ml(e, t),
				de(t),
				null
			);
		case 5:
			Da(t);
			var i = an(Qr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				np(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(_(166));
					return de(t), null;
				}
				if (((e = an(tt.current)), Ni(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[qe] = t), (r[br] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							B("cancel", r), B("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							B("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < xr.length; i++) B(xr[i], r);
							break;
						case "source":
							B("error", r);
							break;
						case "img":
						case "image":
						case "link":
							B("error", r), B("load", r);
							break;
						case "details":
							B("toggle", r);
							break;
						case "input":
							Iu(r, o), B("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								B("invalid", r);
							break;
						case "textarea":
							Bu(r, o), B("invalid", r);
					}
					sl(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === "children"
								? typeof l == "string"
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											Ri(r.textContent, l, e),
									  (i = ["children", l]))
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (o.suppressHydrationWarning !== !0 &&
											Ri(r.textContent, l, e),
									  (i = ["children", "" + l]))
								: Or.hasOwnProperty(s) &&
								  l != null &&
								  s === "onScroll" &&
								  B("scroll", r);
						}
					switch (n) {
						case "input":
							Si(r), zu(r, o, !0);
							break;
						case "textarea":
							Si(r), Uu(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = ao);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Ld(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[qe] = t),
						(e[br] = r),
						tp(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = ll(n, r)), n)) {
							case "dialog":
								B("cancel", e), B("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								B("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < xr.length; i++) B(xr[i], e);
								i = r;
								break;
							case "source":
								B("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								B("error", e), B("load", e), (i = r);
								break;
							case "details":
								B("toggle", e), (i = r);
								break;
							case "input":
								Iu(e, r), (i = tl(e, r)), B("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = b({}, r, { value: void 0 })),
									B("invalid", e);
								break;
							case "textarea":
								Bu(e, r), (i = il(e, r)), B("invalid", e);
								break;
							default:
								i = r;
						}
						sl(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === "style"
									? Vd(e, a)
									: o === "dangerouslySetInnerHTML"
									? ((a = a ? a.__html : void 0), a != null && Ad(e, a))
									: o === "children"
									? typeof a == "string"
										? (n !== "textarea" || a !== "") && Fr(e, a)
										: typeof a == "number" && Fr(e, "" + a)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (Or.hasOwnProperty(o)
											? a != null && o === "onScroll" && B("scroll", e)
											: a != null && da(e, o, a, s));
							}
						switch (n) {
							case "input":
								Si(e), zu(e, r, !1);
								break;
							case "textarea":
								Si(e), Uu(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Ut(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? $n(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  $n(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = ao);
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
			return de(t), null;
		case 6:
			if (e && t.stateNode != null) rp(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
				if (((n = an(Qr.current)), an(tt.current), Ni(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[qe] = t),
						(o = r.nodeValue !== n) && ((e = Le), e !== null))
					)
						switch (e.tag) {
							case 3:
								Ri(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Ri(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[qe] = t),
						(t.stateNode = r);
			}
			return de(t), null;
		case 13:
			if (
				(U(W),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if ($ && Re !== null && t.mode & 1 && !(t.flags & 128))
					Sh(), Xn(), (t.flags |= 98560), (o = !1);
				else if (((o = Ni(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(_(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(_(317));
						o[qe] = t;
					} else
						Xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					de(t), (o = !1);
				} else Ge !== null && (Ul(Ge), (Ge = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || W.current & 1 ? ee === 0 && (ee = 3) : Qa())),
				  t.updateQueue !== null && (t.flags |= 4),
				  de(t),
				  null);
		case 4:
			return (
				Jn(), Ml(e, t), e === null && Hr(t.stateNode.containerInfo), de(t), null
			);
		case 10:
			return La(t.type._context), de(t), null;
		case 17:
			return Ce(t.type) && uo(), de(t), null;
		case 19:
			if ((U(W), (o = t.memoizedState), o === null)) return de(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) pr(o, !1);
				else {
					if (ee !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = vo(e)), s !== null)) {
								for (
									t.flags |= 128,
										pr(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return z(W, (W.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						X() > er &&
						((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = vo(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							pr(o, !0),
							o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
						)
							return de(t), null;
					} else
						2 * X() - o.renderingStartTime > er &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = X()),
				  (t.sibling = null),
				  (n = W.current),
				  z(W, r ? (n & 1) | 2 : n & 1),
				  t)
				: (de(t), null);
		case 22:
		case 23:
			return (
				Ga(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? je & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: de(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(_(156, t.tag));
}
function gy(e, t) {
	switch ((Ea(t), t.tag)) {
		case 1:
			return (
				Ce(t.type) && uo(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Jn(),
				U(_e),
				U(ve),
				Oa(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Da(t), null;
		case 13:
			if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(_(340));
				Xn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return U(W), null;
		case 4:
			return Jn(), null;
		case 10:
			return La(t.type._context), null;
		case 22:
		case 23:
			return Ga(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Mi = !1,
	pe = !1,
	vy = typeof WeakSet == "function" ? WeakSet : Set,
	R = null;
function On(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				G(e, t, r);
			}
		else n.current = null;
}
function Vl(e, t, n) {
	try {
		n();
	} catch (r) {
		G(e, t, r);
	}
}
var Nc = !1;
function yy(e, t) {
	if (((vl = oo), (e = ah()), Ca(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						f = e,
						d = null;
					t: for (;;) {
						for (
							var g;
							f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
								f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(g = f.firstChild) !== null;

						)
							(d = f), (f = g);
						for (;;) {
							if (f === e) break t;
							if (
								(d === n && ++u === i && (l = s),
								d === o && ++c === r && (a = s),
								(g = f.nextSibling) !== null)
							)
								break;
							(f = d), (d = f.parentNode);
						}
						f = g;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (yl = { focusedElem: e, selectionRange: n }, oo = !1, R = t; R !== null; )
		if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (R = e);
		else
			for (; R !== null; ) {
				t = R;
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
									var w = v.memoizedProps,
										S = v.memoizedState,
										p = t.stateNode,
										h = p.getSnapshotBeforeUpdate(
											t.elementType === t.type ? w : Ke(t.type, w),
											S
										);
									p.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var m = t.stateNode.containerInfo;
								m.nodeType === 1
									? (m.textContent = "")
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(_(163));
						}
				} catch (x) {
					G(t, t.return, x);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (R = e);
					break;
				}
				R = t.return;
			}
	return (v = Nc), (Nc = !1), v;
}
function jr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Vl(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Ho(e, t) {
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
function Dl(e) {
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
function ip(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), ip(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[qe], delete t[br], delete t[Sl], delete t[ey], delete t[ty])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function op(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || op(e.return)) return null;
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
function Ol(e, t, n) {
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
				  n != null || t.onclick !== null || (t.onclick = ao));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Ol(e, t, n), e = e.sibling; e !== null; ) Ol(e, t, n), (e = e.sibling);
}
function Fl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Fl(e, t, n), e = e.sibling; e !== null; ) Fl(e, t, n), (e = e.sibling);
}
var le = null,
	be = !1;
function wt(e, t, n) {
	for (n = n.child; n !== null; ) sp(e, t, n), (n = n.sibling);
}
function sp(e, t, n) {
	if (et && typeof et.onCommitFiberUnmount == "function")
		try {
			et.onCommitFiberUnmount(Oo, n);
		} catch {}
	switch (n.tag) {
		case 5:
			pe || On(n, t);
		case 6:
			var r = le,
				i = be;
			(le = null),
				wt(e, t, n),
				(le = r),
				(be = i),
				le !== null &&
					(be
						? ((e = le),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: le.removeChild(n.stateNode));
			break;
		case 18:
			le !== null &&
				(be
					? ((e = le),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ks(e.parentNode, n)
							: e.nodeType === 1 && ks(e, n),
					  Ur(e))
					: ks(le, n.stateNode));
			break;
		case 4:
			(r = le),
				(i = be),
				(le = n.stateNode.containerInfo),
				(be = !0),
				wt(e, t, n),
				(le = r),
				(be = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!pe &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Vl(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			wt(e, t, n);
			break;
		case 1:
			if (
				!pe &&
				(On(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					G(n, t, l);
				}
			wt(e, t, n);
			break;
		case 21:
			wt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
				: wt(e, t, n);
			break;
		default:
			wt(e, t, n);
	}
}
function Ac(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new vy()),
			t.forEach(function (r) {
				var i = Ey.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function He(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(le = l.stateNode), (be = !1);
							break e;
						case 3:
							(le = l.stateNode.containerInfo), (be = !0);
							break e;
						case 4:
							(le = l.stateNode.containerInfo), (be = !0);
							break e;
					}
					l = l.return;
				}
				if (le === null) throw Error(_(160));
				sp(o, s, i), (le = null), (be = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				G(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) lp(t, e), (t = t.sibling);
}
function lp(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((He(t, e), Ze(e), r & 4)) {
				try {
					jr(3, e, e.return), Ho(3, e);
				} catch (w) {
					G(e, e.return, w);
				}
				try {
					jr(5, e, e.return);
				} catch (w) {
					G(e, e.return, w);
				}
			}
			break;
		case 1:
			He(t, e), Ze(e), r & 512 && n !== null && On(n, n.return);
			break;
		case 5:
			if (
				(He(t, e),
				Ze(e),
				r & 512 && n !== null && On(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Fr(i, "");
				} catch (w) {
					G(e, e.return, w);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === "input" && o.type === "radio" && o.name != null && Rd(i, o),
							ll(l, s);
						var u = ll(l, o);
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								f = a[s + 1];
							c === "style"
								? Vd(i, f)
								: c === "dangerouslySetInnerHTML"
								? Ad(i, f)
								: c === "children"
								? Fr(i, f)
								: da(i, c, f, u);
						}
						switch (l) {
							case "input":
								nl(i, o);
								break;
							case "textarea":
								Nd(i, o);
								break;
							case "select":
								var d = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? $n(i, !!o.multiple, g, !1)
									: d !== !!o.multiple &&
									  (o.defaultValue != null
											? $n(i, !!o.multiple, o.defaultValue, !0)
											: $n(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[br] = o;
					} catch (w) {
						G(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((He(t, e), Ze(e), r & 4)) {
				if (e.stateNode === null) throw Error(_(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (w) {
					G(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(He(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Ur(t.containerInfo);
				} catch (w) {
					G(e, e.return, w);
				}
			break;
		case 4:
			He(t, e), Ze(e);
			break;
		case 13:
			He(t, e),
				Ze(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Ka = X())),
				r & 4 && Ac(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((pe = (u = pe) || c), He(t, e), (pe = u)) : He(t, e),
				Ze(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (R = e, c = e.child; c !== null; ) {
						for (f = R = c; R !== null; ) {
							switch (((d = R), (g = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									jr(4, d, d.return);
									break;
								case 1:
									On(d, d.return);
									var v = d.stateNode;
									if (typeof v.componentWillUnmount == "function") {
										(r = d), (n = d.return);
										try {
											(t = r),
												(v.props = t.memoizedProps),
												(v.state = t.memoizedState),
												v.componentWillUnmount();
										} catch (w) {
											G(r, n, w);
										}
									}
									break;
								case 5:
									On(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										Vc(f);
										continue;
									}
							}
							g !== null ? ((g.return = d), (R = g)) : Vc(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(i = f.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((l = f.stateNode),
										  (a = f.memoizedProps.style),
										  (s =
												a != null && a.hasOwnProperty("display")
													? a.display
													: null),
										  (l.style.display = Md("display", s)));
							} catch (w) {
								G(e, e.return, w);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (w) {
								G(e, e.return, w);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			He(t, e), Ze(e), r & 4 && Ac(e);
			break;
		case 21:
			break;
		default:
			He(t, e), Ze(e);
	}
}
function Ze(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (op(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(_(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Fr(i, ""), (r.flags &= -33));
					var o = Lc(e);
					Fl(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = Lc(e);
					Ol(e, l, s);
					break;
				default:
					throw Error(_(161));
			}
		} catch (a) {
			G(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function wy(e, t, n) {
	(R = e), ap(e);
}
function ap(e, t, n) {
	for (var r = (e.mode & 1) !== 0; R !== null; ) {
		var i = R,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Mi;
			if (!s) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || pe;
				l = Mi;
				var u = pe;
				if (((Mi = s), (pe = a) && !u))
					for (R = i; R !== null; )
						(s = R),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Dc(i)
								: a !== null
								? ((a.return = s), (R = a))
								: Dc(i);
				for (; o !== null; ) (R = o), ap(o), (o = o.sibling);
				(R = i), (Mi = l), (pe = u);
			}
			Mc(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : Mc(e);
	}
}
function Mc(e) {
	for (; R !== null; ) {
		var t = R;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							pe || Ho(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !pe)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Ke(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && vc(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								vc(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
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
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && Ur(f);
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
							throw Error(_(163));
					}
				pe || (t.flags & 512 && Dl(t));
			} catch (d) {
				G(t, t.return, d);
			}
		}
		if (t === e) {
			R = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (R = n);
			break;
		}
		R = t.return;
	}
}
function Vc(e) {
	for (; R !== null; ) {
		var t = R;
		if (t === e) {
			R = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (R = n);
			break;
		}
		R = t.return;
	}
}
function Dc(e) {
	for (; R !== null; ) {
		var t = R;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Ho(4, t);
					} catch (a) {
						G(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							G(t, i, a);
						}
					}
					var o = t.return;
					try {
						Dl(t);
					} catch (a) {
						G(t, o, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						Dl(t);
					} catch (a) {
						G(t, s, a);
					}
			}
		} catch (a) {
			G(t, t.return, a);
		}
		if (t === e) {
			R = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (R = l);
			break;
		}
		R = t.return;
	}
}
var xy = Math.ceil,
	xo = vt.ReactCurrentDispatcher,
	Wa = vt.ReactCurrentOwner,
	Ue = vt.ReactCurrentBatchConfig,
	O = 0,
	ie = null,
	Z = null,
	ue = 0,
	je = 0,
	Fn = Gt(0),
	ee = 0,
	Jr = null,
	gn = 0,
	Ko = 0,
	Ha = 0,
	Rr = null,
	ke = null,
	Ka = 0,
	er = 1 / 0,
	rt = null,
	So = !1,
	Il = null,
	Dt = null,
	Vi = !1,
	jt = null,
	ko = 0,
	Nr = 0,
	zl = null,
	Qi = -1,
	Yi = 0;
function we() {
	return O & 6 ? X() : Qi !== -1 ? Qi : (Qi = X());
}
function Ot(e) {
	return e.mode & 1
		? O & 2 && ue !== 0
			? ue & -ue
			: ry.transition !== null
			? (Yi === 0 && (Yi = bd()), Yi)
			: ((e = F),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qd(e.type))),
			  e)
		: 1;
}
function Ye(e, t, n, r) {
	if (50 < Nr) throw ((Nr = 0), (zl = null), Error(_(185)));
	li(e, n, r),
		(!(O & 2) || e !== ie) &&
			(e === ie && (!(O & 2) && (Ko |= n), ee === 4 && Tt(e, ue)),
			Te(e, r),
			n === 1 && O === 0 && !(t.mode & 1) && ((er = X() + 500), Uo && Qt()));
}
function Te(e, t) {
	var n = e.callbackNode;
	rv(e, t);
	var r = io(e, e === ie ? ue : 0);
	if (r === 0)
		n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Hu(n), t === 1))
			e.tag === 0 ? ny(Oc.bind(null, e)) : yh(Oc.bind(null, e)),
				Jv(function () {
					!(O & 6) && Qt();
				}),
				(n = null);
		else {
			switch (Gd(r)) {
				case 1:
					n = va;
					break;
				case 4:
					n = Hd;
					break;
				case 16:
					n = ro;
					break;
				case 536870912:
					n = Kd;
					break;
				default:
					n = ro;
			}
			n = gp(n, up.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function up(e, t) {
	if (((Qi = -1), (Yi = 0), O & 6)) throw Error(_(327));
	var n = e.callbackNode;
	if (Gn() && e.callbackNode !== n) return null;
	var r = io(e, e === ie ? ue : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
	else {
		t = r;
		var i = O;
		O |= 2;
		var o = fp();
		(ie !== e || ue !== t) && ((rt = null), (er = X() + 500), cn(e, t));
		do
			try {
				Py();
				break;
			} catch (l) {
				cp(e, l);
			}
		while (!0);
		Na(),
			(xo.current = o),
			(O = i),
			Z !== null ? (t = 0) : ((ie = null), (ue = 0), (t = ee));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = dl(e)), i !== 0 && ((r = i), (t = Bl(e, i)))), t === 1)
		)
			throw ((n = Jr), cn(e, 0), Tt(e, r), Te(e, X()), n);
		if (t === 6) Tt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Sy(i) &&
					((t = Po(e, r)),
					t === 2 && ((o = dl(e)), o !== 0 && ((r = o), (t = Bl(e, o)))),
					t === 1))
			)
				throw ((n = Jr), cn(e, 0), Tt(e, r), Te(e, X()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(_(345));
				case 2:
					nn(e, ke, rt);
					break;
				case 3:
					if (
						(Tt(e, r), (r & 130023424) === r && ((t = Ka + 500 - X()), 10 < t))
					) {
						if (io(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							we(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = xl(nn.bind(null, e, ke, rt), t);
						break;
					}
					nn(e, ke, rt);
					break;
				case 4:
					if ((Tt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Qe(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = X() - r),
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
								: 1960 * xy(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = xl(nn.bind(null, e, ke, rt), r);
						break;
					}
					nn(e, ke, rt);
					break;
				case 5:
					nn(e, ke, rt);
					break;
				default:
					throw Error(_(329));
			}
		}
	}
	return Te(e, X()), e.callbackNode === n ? up.bind(null, e) : null;
}
function Bl(e, t) {
	var n = Rr;
	return (
		e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
		(e = Po(e, t)),
		e !== 2 && ((t = ke), (ke = n), t !== null && Ul(t)),
		e
	);
}
function Ul(e) {
	ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Sy(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Xe(o(), i)) return !1;
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
function Tt(e, t) {
	for (
		t &= ~Ha,
			t &= ~Ko,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Qe(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Oc(e) {
	if (O & 6) throw Error(_(327));
	Gn();
	var t = io(e, 0);
	if (!(t & 1)) return Te(e, X()), null;
	var n = Po(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = dl(e);
		r !== 0 && ((t = r), (n = Bl(e, r)));
	}
	if (n === 1) throw ((n = Jr), cn(e, 0), Tt(e, t), Te(e, X()), n);
	if (n === 6) throw Error(_(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		nn(e, ke, rt),
		Te(e, X()),
		null
	);
}
function ba(e, t) {
	var n = O;
	O |= 1;
	try {
		return e(t);
	} finally {
		(O = n), O === 0 && ((er = X() + 500), Uo && Qt());
	}
}
function vn(e) {
	jt !== null && jt.tag === 0 && !(O & 6) && Gn();
	var t = O;
	O |= 1;
	var n = Ue.transition,
		r = F;
	try {
		if (((Ue.transition = null), (F = 1), e)) return e();
	} finally {
		(F = r), (Ue.transition = n), (O = t), !(O & 6) && Qt();
	}
}
function Ga() {
	(je = Fn.current), U(Fn);
}
function cn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Zv(n)), Z !== null))
		for (n = Z.return; n !== null; ) {
			var r = n;
			switch ((Ea(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && uo();
					break;
				case 3:
					Jn(), U(_e), U(ve), Oa();
					break;
				case 5:
					Da(r);
					break;
				case 4:
					Jn();
					break;
				case 13:
					U(W);
					break;
				case 19:
					U(W);
					break;
				case 10:
					La(r.type._context);
					break;
				case 22:
				case 23:
					Ga();
			}
			n = n.return;
		}
	if (
		((ie = e),
		(Z = e = Ft(e.current, null)),
		(ue = je = t),
		(ee = 0),
		(Jr = null),
		(Ha = Ko = gn = 0),
		(ke = Rr = null),
		ln !== null)
	) {
		for (t = 0; t < ln.length; t++)
			if (((n = ln[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		ln = null;
	}
	return e;
}
function cp(e, t) {
	do {
		var n = Z;
		try {
			if ((Na(), (Ki.current = wo), yo)) {
				for (var r = K.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				yo = !1;
			}
			if (
				((mn = 0),
				(re = q = K = null),
				(Er = !1),
				(Yr = 0),
				(Wa.current = null),
				n === null || n.return === null)
			) {
				(ee = 1), (Jr = t), (Z = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = ue),
					(l.flags |= 32768),
					a !== null && typeof a == "object" && typeof a.then == "function")
				) {
					var u = a,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = Pc(s);
					if (g !== null) {
						(g.flags &= -257),
							_c(g, s, l, o, t),
							g.mode & 1 && kc(o, u, t),
							(t = g),
							(a = u);
						var v = t.updateQueue;
						if (v === null) {
							var w = new Set();
							w.add(a), (t.updateQueue = w);
						} else v.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							kc(o, u, t), Qa();
							break e;
						}
						a = Error(_(426));
					}
				} else if ($ && l.mode & 1) {
					var S = Pc(s);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256),
							_c(S, s, l, o, t),
							ja(qn(a, l));
						break e;
					}
				}
				(o = a = qn(a, l)),
					ee !== 4 && (ee = 2),
					Rr === null ? (Rr = [o]) : Rr.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var p = Gh(o, a, t);
							gc(o, p);
							break e;
						case 1:
							l = a;
							var h = o.type,
								m = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof h.getDerivedStateFromError == "function" ||
									(m !== null &&
										typeof m.componentDidCatch == "function" &&
										(Dt === null || !Dt.has(m))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var x = Qh(o, l, t);
								gc(o, x);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			hp(n);
		} catch (P) {
			(t = P), Z === n && n !== null && (Z = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function fp() {
	var e = xo.current;
	return (xo.current = wo), e === null ? wo : e;
}
function Qa() {
	(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
		ie === null || (!(gn & 268435455) && !(Ko & 268435455)) || Tt(ie, ue);
}
function Po(e, t) {
	var n = O;
	O |= 2;
	var r = fp();
	(ie !== e || ue !== t) && ((rt = null), cn(e, t));
	do
		try {
			ky();
			break;
		} catch (i) {
			cp(e, i);
		}
	while (!0);
	if ((Na(), (O = n), (xo.current = r), Z !== null)) throw Error(_(261));
	return (ie = null), (ue = 0), ee;
}
function ky() {
	for (; Z !== null; ) dp(Z);
}
function Py() {
	for (; Z !== null && !Qg(); ) dp(Z);
}
function dp(e) {
	var t = mp(e.alternate, e, je);
	(e.memoizedProps = e.pendingProps),
		t === null ? hp(e) : (Z = t),
		(Wa.current = null);
}
function hp(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = gy(n, t)), n !== null)) {
				(n.flags &= 32767), (Z = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ee = 6), (Z = null);
				return;
			}
		} else if (((n = my(n, t, je)), n !== null)) {
			Z = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Z = t;
			return;
		}
		Z = t = e;
	} while (t !== null);
	ee === 0 && (ee = 5);
}
function nn(e, t, n) {
	var r = F,
		i = Ue.transition;
	try {
		(Ue.transition = null), (F = 1), _y(e, t, n, r);
	} finally {
		(Ue.transition = i), (F = r);
	}
	return null;
}
function _y(e, t, n, r) {
	do Gn();
	while (jt !== null);
	if (O & 6) throw Error(_(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(_(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(iv(e, o),
		e === ie && ((Z = ie = null), (ue = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Vi ||
			((Vi = !0),
			gp(ro, function () {
				return Gn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Ue.transition), (Ue.transition = null);
		var s = F;
		F = 1;
		var l = O;
		(O |= 4),
			(Wa.current = null),
			yy(e, n),
			lp(n, e),
			Hv(yl),
			(oo = !!vl),
			(yl = vl = null),
			(e.current = n),
			wy(n),
			Yg(),
			(O = l),
			(F = s),
			(Ue.transition = o);
	} else e.current = n;
	if (
		(Vi && ((Vi = !1), (jt = e), (ko = i)),
		(o = e.pendingLanes),
		o === 0 && (Dt = null),
		Jg(n.stateNode),
		Te(e, X()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (So) throw ((So = !1), (e = Il), (Il = null), e);
	return (
		ko & 1 && e.tag !== 0 && Gn(),
		(o = e.pendingLanes),
		o & 1 ? (e === zl ? Nr++ : ((Nr = 0), (zl = e))) : (Nr = 0),
		Qt(),
		null
	);
}
function Gn() {
	if (jt !== null) {
		var e = Gd(ko),
			t = Ue.transition,
			n = F;
		try {
			if (((Ue.transition = null), (F = 16 > e ? 16 : e), jt === null))
				var r = !1;
			else {
				if (((e = jt), (jt = null), (ko = 0), O & 6)) throw Error(_(331));
				var i = O;
				for (O |= 4, R = e.current; R !== null; ) {
					var o = R,
						s = o.child;
					if (R.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (R = u; R !== null; ) {
									var c = R;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											jr(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (R = f);
									else
										for (; R !== null; ) {
											c = R;
											var d = c.sibling,
												g = c.return;
											if ((ip(c), c === u)) {
												R = null;
												break;
											}
											if (d !== null) {
												(d.return = g), (R = d);
												break;
											}
											R = g;
										}
								}
							}
							var v = o.alternate;
							if (v !== null) {
								var w = v.child;
								if (w !== null) {
									v.child = null;
									do {
										var S = w.sibling;
										(w.sibling = null), (w = S);
									} while (w !== null);
								}
							}
							R = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
					else
						e: for (; R !== null; ) {
							if (((o = R), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										jr(9, o, o.return);
								}
							var p = o.sibling;
							if (p !== null) {
								(p.return = o.return), (R = p);
								break e;
							}
							R = o.return;
						}
				}
				var h = e.current;
				for (R = h; R !== null; ) {
					s = R;
					var m = s.child;
					if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (R = m);
					else
						e: for (s = h; R !== null; ) {
							if (((l = R), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Ho(9, l);
									}
								} catch (P) {
									G(l, l.return, P);
								}
							if (l === s) {
								R = null;
								break e;
							}
							var x = l.sibling;
							if (x !== null) {
								(x.return = l.return), (R = x);
								break e;
							}
							R = l.return;
						}
				}
				if (
					((O = i), Qt(), et && typeof et.onPostCommitFiberRoot == "function")
				)
					try {
						et.onPostCommitFiberRoot(Oo, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(F = n), (Ue.transition = t);
		}
	}
	return !1;
}
function Fc(e, t, n) {
	(t = qn(n, t)),
		(t = Gh(e, t, 1)),
		(e = Vt(e, t, 1)),
		(t = we()),
		e !== null && (li(e, 1, t), Te(e, t));
}
function G(e, t, n) {
	if (e.tag === 3) Fc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Fc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(Dt === null || !Dt.has(r)))
				) {
					(e = qn(n, e)),
						(e = Qh(t, e, 1)),
						(t = Vt(t, e, 1)),
						(e = we()),
						t !== null && (li(t, 1, e), Te(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Cy(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = we()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ie === e &&
			(ue & n) === n &&
			(ee === 4 || (ee === 3 && (ue & 130023424) === ue && 500 > X() - Ka)
				? cn(e, 0)
				: (Ha |= n)),
		Te(e, t);
}
function pp(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304))
			: (t = 1));
	var n = we();
	(e = pt(e, t)), e !== null && (li(e, t, n), Te(e, n));
}
function Ty(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), pp(e, n);
}
function Ey(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(_(314));
	}
	r !== null && r.delete(t), pp(e, n);
}
var mp;
mp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || _e.current) Pe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), py(e, t, n);
			Pe = !!(e.flags & 131072);
		}
	else (Pe = !1), $ && t.flags & 1048576 && wh(t, ho, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Gi(e, t), (e = t.pendingProps);
			var i = Yn(t, ve.current);
			bn(t, n), (i = Ia(null, t, r, e, i, n));
			var o = za();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Ce(r) ? ((o = !0), co(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  Ma(t),
					  (i.updater = Wo),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  El(t, r, e, n),
					  (t = Nl(null, t, r, !0, o, n)))
					: ((t.tag = 0), $ && o && Ta(t), ye(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Gi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Ry(r)),
					(e = Ke(r, e)),
					i)
				) {
					case 0:
						t = Rl(null, t, r, e, n);
						break e;
					case 1:
						t = Ec(null, t, r, e, n);
						break e;
					case 11:
						t = Cc(null, t, r, e, n);
						break e;
					case 14:
						t = Tc(null, t, r, Ke(r.type, e), n);
						break e;
				}
				throw Error(_(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				Rl(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				Ec(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Jh(t), e === null)) throw Error(_(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					Ch(e, t),
					go(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = qn(Error(_(423)), t)), (t = jc(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = qn(Error(_(424)), t)), (t = jc(e, t, r, n, i));
						break e;
					} else
						for (
							Re = Mt(t.stateNode.containerInfo.firstChild),
								Le = t,
								$ = !0,
								Ge = null,
								n = Ph(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Xn(), r === i)) {
						t = mt(e, t, n);
						break e;
					}
					ye(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Th(t),
				e === null && _l(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				wl(r, i) ? (s = null) : o !== null && wl(r, o) && (t.flags |= 32),
				Zh(e, t),
				ye(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && _l(t), null;
		case 13:
			return qh(e, t, n);
		case 4:
			return (
				Va(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Zn(t, null, r, n)) : ye(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				Cc(e, t, r, i, n)
			);
		case 7:
			return ye(e, t, t.pendingProps, n), t.child;
		case 8:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					z(po, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Xe(o.value, s)) {
						if (o.children === i.children && !_e.current) {
							t = mt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											(a = at(-1, n & -n)), (a.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											Cl(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(_(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									Cl(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				ye(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				bn(t, n),
				(i = $e(i)),
				(r = r(i)),
				(t.flags |= 1),
				ye(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Ke(r, t.pendingProps)),
				(i = Ke(r.type, i)),
				Tc(e, t, r, i, n)
			);
		case 15:
			return Yh(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Ke(r, i)),
				Gi(e, t),
				(t.tag = 1),
				Ce(r) ? ((e = !0), co(t)) : (e = !1),
				bn(t, n),
				bh(t, r, i),
				El(t, r, i, n),
				Nl(null, t, r, !0, e, n)
			);
		case 19:
			return ep(e, t, n);
		case 22:
			return Xh(e, t, n);
	}
	throw Error(_(156, t.tag));
};
function gp(e, t) {
	return Wd(e, t);
}
function jy(e, t, n, r) {
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
function Be(e, t, n, r) {
	return new jy(e, t, n, r);
}
function Ya(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ry(e) {
	if (typeof e == "function") return Ya(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === pa)) return 11;
		if (e === ma) return 14;
	}
	return 2;
}
function Ft(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Be(e.tag, t, e.key, e.mode)),
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
function Xi(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == "function")) Ya(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case En:
				return fn(n.children, i, o, t);
			case ha:
				(s = 8), (i |= 8);
				break;
			case Zs:
				return (
					(e = Be(12, n, t, i | 2)), (e.elementType = Zs), (e.lanes = o), e
				);
			case Js:
				return (e = Be(13, n, t, i)), (e.elementType = Js), (e.lanes = o), e;
			case qs:
				return (e = Be(19, n, t, i)), (e.elementType = qs), (e.lanes = o), e;
			case Td:
				return bo(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case _d:
							s = 10;
							break e;
						case Cd:
							s = 9;
							break e;
						case pa:
							s = 11;
							break e;
						case ma:
							s = 14;
							break e;
						case kt:
							(s = 16), (r = null);
							break e;
					}
				throw Error(_(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function fn(e, t, n, r) {
	return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function bo(e, t, n, r) {
	return (
		(e = Be(22, e, r, t)),
		(e.elementType = Td),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Ns(e, t, n) {
	return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function Ls(e, t, n) {
	return (
		(t = Be(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Ny(e, t, n, r, i) {
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
		(this.eventTimes = fs(0)),
		(this.expirationTimes = fs(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = fs(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Xa(e, t, n, r, i, o, s, l, a) {
	return (
		(e = new Ny(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Be(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Ma(o),
		e
	);
}
function Ly(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Tn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function vp(e) {
	if (!e) return $t;
	e = e._reactInternals;
	e: {
		if (wn(e) !== e || e.tag !== 1) throw Error(_(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ce(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(_(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Ce(n)) return vh(e, n, t);
	}
	return t;
}
function yp(e, t, n, r, i, o, s, l, a) {
	return (
		(e = Xa(n, r, !0, e, i, o, s, l, a)),
		(e.context = vp(null)),
		(n = e.current),
		(r = we()),
		(i = Ot(n)),
		(o = at(r, i)),
		(o.callback = t ?? null),
		Vt(n, o, i),
		(e.current.lanes = i),
		li(e, i, r),
		Te(e, r),
		e
	);
}
function Go(e, t, n, r) {
	var i = t.current,
		o = we(),
		s = Ot(i);
	return (
		(n = vp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = at(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Vt(i, t, s)),
		e !== null && (Ye(e, i, s, o), Hi(e, i, s)),
		s
	);
}
function _o(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Ic(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Za(e, t) {
	Ic(e, t), (e = e.alternate) && Ic(e, t);
}
function Ay() {
	return null;
}
var wp =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Ja(e) {
	this._internalRoot = e;
}
Qo.prototype.render = Ja.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(_(409));
	Go(e, t, null, null);
};
Qo.prototype.unmount = Ja.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		vn(function () {
			Go(null, e, null, null);
		}),
			(t[ht] = null);
	}
};
function Qo(e) {
	this._internalRoot = e;
}
Qo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Xd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
		Ct.splice(n, 0, e), n === 0 && Jd(e);
	}
};
function qa(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function zc() {}
function My(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var u = _o(s);
				o.call(u);
			};
		}
		var s = yp(t, r, e, 0, null, !1, !1, "", zc);
		return (
			(e._reactRootContainer = s),
			(e[ht] = s.current),
			Hr(e.nodeType === 8 ? e.parentNode : e),
			vn(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function () {
			var u = _o(a);
			l.call(u);
		};
	}
	var a = Xa(e, 0, !1, null, null, !1, !1, "", zc);
	return (
		(e._reactRootContainer = a),
		(e[ht] = a.current),
		Hr(e.nodeType === 8 ? e.parentNode : e),
		vn(function () {
			Go(t, a, n, r);
		}),
		a
	);
}
function Xo(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var l = i;
			i = function () {
				var a = _o(s);
				l.call(a);
			};
		}
		Go(t, s, e, i);
	} else s = My(n, t, e, i, r);
	return _o(s);
}
Qd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = wr(t.pendingLanes);
				n !== 0 &&
					(ya(t, n | 1), Te(t, X()), !(O & 6) && ((er = X() + 500), Qt()));
			}
			break;
		case 13:
			vn(function () {
				var r = pt(e, 1);
				if (r !== null) {
					var i = we();
					Ye(r, e, 1, i);
				}
			}),
				Za(e, 1);
	}
};
wa = function (e) {
	if (e.tag === 13) {
		var t = pt(e, 134217728);
		if (t !== null) {
			var n = we();
			Ye(t, e, 134217728, n);
		}
		Za(e, 134217728);
	}
};
Yd = function (e) {
	if (e.tag === 13) {
		var t = Ot(e),
			n = pt(e, t);
		if (n !== null) {
			var r = we();
			Ye(n, e, t, r);
		}
		Za(e, t);
	}
};
Xd = function () {
	return F;
};
Zd = function (e, t) {
	var n = F;
	try {
		return (F = e), t();
	} finally {
		F = n;
	}
};
ul = function (e, t, n) {
	switch (t) {
		case "input":
			if ((nl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
						var i = Bo(r);
						if (!i) throw Error(_(90));
						jd(r), nl(r, i);
					}
				}
			}
			break;
		case "textarea":
			Nd(e, n);
			break;
		case "select":
			(t = n.value), t != null && $n(e, !!n.multiple, t, !1);
	}
};
Fd = ba;
Id = vn;
var Vy = { usingClientEntryPoint: !1, Events: [ui, Ln, Bo, Dd, Od, ba] },
	mr = {
		findFiberByHostInstance: sn,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	Dy = {
		bundleType: mr.bundleType,
		version: mr.version,
		rendererPackageName: mr.rendererPackageName,
		rendererConfig: mr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: vt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Ud(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: mr.findFiberByHostInstance || Ay,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Di.isDisabled && Di.supportsFiber)
		try {
			(Oo = Di.inject(Dy)), (et = Di);
		} catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vy;
Ve.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qa(t)) throw Error(_(200));
	return Ly(e, t, null, n);
};
Ve.createRoot = function (e, t) {
	if (!qa(e)) throw Error(_(299));
	var n = !1,
		r = "",
		i = wp;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Xa(e, 1, !1, null, null, n, !1, r, i)),
		(e[ht] = t.current),
		Hr(e.nodeType === 8 ? e.parentNode : e),
		new Ja(t)
	);
};
Ve.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(_(188))
			: ((e = Object.keys(e).join(",")), Error(_(268, e)));
	return (e = Ud(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
	return vn(e);
};
Ve.hydrate = function (e, t, n) {
	if (!Yo(t)) throw Error(_(200));
	return Xo(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
	if (!qa(e)) throw Error(_(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		s = wp;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = yp(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[ht] = t.current),
		Hr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new Qo(t);
};
Ve.render = function (e, t, n) {
	if (!Yo(t)) throw Error(_(200));
	return Xo(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
	if (!Yo(e)) throw Error(_(40));
	return e._reactRootContainer
		? (vn(function () {
				Xo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ht] = null);
				});
		  }),
		  !0)
		: !1;
};
Ve.unstable_batchedUpdates = ba;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Yo(n)) throw Error(_(200));
	if (e == null || e._reactInternals === void 0) throw Error(_(38));
	return Xo(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function xp() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp);
		} catch (e) {
			console.error(e);
		}
}
xp(), (xd.exports = Ve);
var Oy = xd.exports,
	Bc = Oy;
(Ys.createRoot = Bc.createRoot), (Ys.hydrateRoot = Bc.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qr() {
	return (
		(qr = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		qr.apply(this, arguments)
	);
}
var Rt;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rt || (Rt = {}));
const Uc = "popstate";
function Fy(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: s, hash: l } = r.location;
		return $l(
			"",
			{ pathname: o, search: s, hash: l },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : Co(i);
	}
	return zy(t, n, null, e);
}
function J(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sp(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Iy() {
	return Math.random().toString(36).substr(2, 8);
}
function $c(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function $l(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		qr(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? or(t) : t,
			{ state: n, key: (t && t.key) || r || Iy() }
		)
	);
}
function Co(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function or(e) {
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
function zy(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		l = Rt.Pop,
		a = null,
		u = c();
	u == null && ((u = 0), s.replaceState(qr({}, s.state, { idx: u }), ""));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		l = Rt.Pop;
		let S = c(),
			p = S == null ? null : S - u;
		(u = S), a && a({ action: l, location: w.location, delta: p });
	}
	function d(S, p) {
		l = Rt.Push;
		let h = $l(w.location, S, p);
		u = c() + 1;
		let m = $c(h, u),
			x = w.createHref(h);
		try {
			s.pushState(m, "", x);
		} catch (P) {
			if (P instanceof DOMException && P.name === "DataCloneError") throw P;
			i.location.assign(x);
		}
		o && a && a({ action: l, location: w.location, delta: 1 });
	}
	function g(S, p) {
		l = Rt.Replace;
		let h = $l(w.location, S, p);
		u = c();
		let m = $c(h, u),
			x = w.createHref(h);
		s.replaceState(m, "", x),
			o && a && a({ action: l, location: w.location, delta: 0 });
	}
	function v(S) {
		let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
			h = typeof S == "string" ? S : Co(S);
		return (
			(h = h.replace(/ $/, "%20")),
			J(
				p,
				"No window.location.(origin|href) available to create URL for href: " +
					h
			),
			new URL(h, p)
		);
	}
	let w = {
		get action() {
			return l;
		},
		get location() {
			return e(i, s);
		},
		listen(S) {
			if (a) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(Uc, f),
				(a = S),
				() => {
					i.removeEventListener(Uc, f), (a = null);
				}
			);
		},
		createHref(S) {
			return t(i, S);
		},
		createURL: v,
		encodeLocation(S) {
			let p = v(S);
			return { pathname: p.pathname, search: p.search, hash: p.hash };
		},
		push: d,
		replace: g,
		go(S) {
			return s.go(S);
		},
	};
	return w;
}
var Wc;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Wc || (Wc = {}));
function By(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? or(t) : t,
		i = eu(r.pathname || "/", n);
	if (i == null) return null;
	let o = kp(e);
	Uy(o);
	let s = null;
	for (let l = 0; s == null && l < o.length; ++l) {
		let a = qy(i);
		s = Xy(o[l], a);
	}
	return s;
}
function kp(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, s, l) => {
		let a = {
			relativePath: l === void 0 ? o.path || "" : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		a.relativePath.startsWith("/") &&
			(J(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = It([r, a.relativePath]),
			c = n.concat(a);
		o.children &&
			o.children.length > 0 &&
			(J(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			kp(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: Qy(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, s) => {
			var l;
			if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
			else for (let a of Pp(o.path)) i(o, s, a);
		}),
		t
	);
}
function Pp(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let s = Pp(r.join("/")),
		l = [];
	return (
		l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
		i && l.push(...s),
		l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
	);
}
function Uy(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Yy(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const $y = /^:[\w-]+$/,
	Wy = 3,
	Hy = 2,
	Ky = 1,
	by = 10,
	Gy = -2,
	Hc = (e) => e === "*";
function Qy(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Hc) && (r += Gy),
		t && (r += Hy),
		n
			.filter((i) => !Hc(i))
			.reduce((i, o) => i + ($y.test(o) ? Wy : o === "" ? Ky : by), r)
	);
}
function Yy(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Xy(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let l = n[s],
			a = s === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			c = Zy(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
				u
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let f = l.route;
		o.push({
			params: r,
			pathname: It([i, c.pathname]),
			pathnameBase: r0(It([i, c.pathnameBase])),
			route: f,
		}),
			c.pathnameBase !== "/" && (i = It([i, c.pathnameBase]));
	}
	return o;
}
function Zy(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Jy(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, "$1"),
		l = i.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			let { paramName: d, isOptional: g } = c;
			if (d === "*") {
				let w = l[f] || "";
				s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
			}
			const v = l[f];
			return (
				g && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
			);
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function Jy(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Sp(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, l, a) => (
						r.push({ paramName: l, isOptional: a != null }),
						a ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function qy(e) {
	try {
		return e
			.split("/")
			.map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
			.join("/");
	} catch (t) {
		return (
			Sp(
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
function eu(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function e0(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: i = "",
	} = typeof e == "string" ? or(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : t0(n, t)) : t,
		search: i0(r),
		hash: o0(i),
	};
}
function t0(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function As(e, t, n, r) {
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
function n0(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function _p(e, t) {
	let n = n0(e);
	return t
		? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function Cp(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = or(e))
		: ((i = qr({}, e)),
		  J(
				!i.pathname || !i.pathname.includes("?"),
				As("?", "pathname", "search", i)
		  ),
		  J(
				!i.pathname || !i.pathname.includes("#"),
				As("#", "pathname", "hash", i)
		  ),
		  J(!i.search || !i.search.includes("#"), As("#", "search", "hash", i)));
	let o = e === "" || i.pathname === "",
		s = o ? "/" : i.pathname,
		l;
	if (s == null) l = n;
	else {
		let f = t.length - 1;
		if (!r && s.startsWith("..")) {
			let d = s.split("/");
			for (; d[0] === ".."; ) d.shift(), (f -= 1);
			i.pathname = d.join("/");
		}
		l = f >= 0 ? t[f] : "/";
	}
	let a = e0(i, l),
		u = s && s !== "/" && s.endsWith("/"),
		c = (o || s === ".") && n.endsWith("/");
	return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
	r0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	i0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	o0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function s0(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Tp = ["post", "put", "patch", "delete"];
new Set(Tp);
const l0 = ["get", ...Tp];
new Set(l0);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
	return (
		(ei = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ei.apply(this, arguments)
	);
}
const tu = k.createContext(null),
	a0 = k.createContext(null),
	xn = k.createContext(null),
	Zo = k.createContext(null),
	Sn = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Ep = k.createContext(null);
function u0(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	fi() || J(!1);
	let { basename: r, navigator: i } = k.useContext(xn),
		{ hash: o, pathname: s, search: l } = Np(e, { relative: n }),
		a = s;
	return (
		r !== "/" && (a = s === "/" ? r : It([r, s])),
		i.createHref({ pathname: a, search: l, hash: o })
	);
}
function fi() {
	return k.useContext(Zo) != null;
}
function Jo() {
	return fi() || J(!1), k.useContext(Zo).location;
}
function jp(e) {
	k.useContext(xn).static || k.useLayoutEffect(e);
}
function Rp() {
	let { isDataRoute: e } = k.useContext(Sn);
	return e ? k0() : c0();
}
function c0() {
	fi() || J(!1);
	let e = k.useContext(tu),
		{ basename: t, future: n, navigator: r } = k.useContext(xn),
		{ matches: i } = k.useContext(Sn),
		{ pathname: o } = Jo(),
		s = JSON.stringify(_p(i, n.v7_relativeSplatPath)),
		l = k.useRef(!1);
	return (
		jp(() => {
			l.current = !0;
		}),
		k.useCallback(
			function (u, c) {
				if ((c === void 0 && (c = {}), !l.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let f = Cp(u, JSON.parse(s), o, c.relative === "path");
				e == null &&
					t !== "/" &&
					(f.pathname = f.pathname === "/" ? t : It([t, f.pathname])),
					(c.replace ? r.replace : r.push)(f, c.state, c);
			},
			[t, r, s, o, e]
		)
	);
}
function Np(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = k.useContext(xn),
		{ matches: i } = k.useContext(Sn),
		{ pathname: o } = Jo(),
		s = JSON.stringify(_p(i, r.v7_relativeSplatPath));
	return k.useMemo(() => Cp(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function f0(e, t) {
	return d0(e, t);
}
function d0(e, t, n, r) {
	fi() || J(!1);
	let { navigator: i } = k.useContext(xn),
		{ matches: o } = k.useContext(Sn),
		s = o[o.length - 1],
		l = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : "/";
	s && s.route;
	let u = Jo(),
		c;
	if (t) {
		var f;
		let S = typeof t == "string" ? or(t) : t;
		a === "/" || ((f = S.pathname) != null && f.startsWith(a)) || J(!1),
			(c = S);
	} else c = u;
	let d = c.pathname || "/",
		g = d;
	if (a !== "/") {
		let S = a.replace(/^\//, "").split("/");
		g = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/");
	}
	let v = By(e, { pathname: g }),
		w = v0(
			v &&
				v.map((S) =>
					Object.assign({}, S, {
						params: Object.assign({}, l, S.params),
						pathname: It([
							a,
							i.encodeLocation
								? i.encodeLocation(S.pathname).pathname
								: S.pathname,
						]),
						pathnameBase:
							S.pathnameBase === "/"
								? a
								: It([
										a,
										i.encodeLocation
											? i.encodeLocation(S.pathnameBase).pathname
											: S.pathnameBase,
								  ]),
					})
				),
			o,
			n,
			r
		);
	return t && w
		? k.createElement(
				Zo.Provider,
				{
					value: {
						location: ei(
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
				w
		  )
		: w;
}
function h0() {
	let e = S0(),
		t = s0(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return k.createElement(
		k.Fragment,
		null,
		k.createElement("h2", null, "Unexpected Application Error!"),
		k.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? k.createElement("pre", { style: i }, n) : null,
		null
	);
}
const p0 = k.createElement(h0, null);
class m0 extends k.Component {
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
					error: t.error !== void 0 ? t.error : n.error,
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
		return this.state.error !== void 0
			? k.createElement(
					Sn.Provider,
					{ value: this.props.routeContext },
					k.createElement(Ep.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function g0(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = k.useContext(tu);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		k.createElement(Sn.Provider, { value: t }, r)
	);
}
function v0(e, t, n, r) {
	var i;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o;
		if ((o = n) != null && o.errors) e = n.matches;
		else return null;
	}
	let s = e,
		l = (i = n) == null ? void 0 : i.errors;
	if (l != null) {
		let c = s.findIndex(
			(f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
		);
		c >= 0 || J(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
	}
	let a = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < s.length; c++) {
			let f = s[c];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
				f.route.id)
			) {
				let { loaderData: d, errors: g } = n,
					v =
						f.route.loader &&
						d[f.route.id] === void 0 &&
						(!g || g[f.route.id] === void 0);
				if (f.route.lazy || v) {
					(a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((c, f, d) => {
		let g,
			v = !1,
			w = null,
			S = null;
		n &&
			((g = l && f.route.id ? l[f.route.id] : void 0),
			(w = f.route.errorElement || p0),
			a &&
				(u < 0 && d === 0
					? ((v = !0), (S = null))
					: u === d &&
					  ((v = !0), (S = f.route.hydrateFallbackElement || null))));
		let p = t.concat(s.slice(0, d + 1)),
			h = () => {
				let m;
				return (
					g
						? (m = w)
						: v
						? (m = S)
						: f.route.Component
						? (m = k.createElement(f.route.Component, null))
						: f.route.element
						? (m = f.route.element)
						: (m = c),
					k.createElement(g0, {
						match: f,
						routeContext: { outlet: c, matches: p, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
			? k.createElement(m0, {
					location: n.location,
					revalidation: n.revalidation,
					component: w,
					error: g,
					children: h(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: h();
	}, null);
}
var Lp = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(Lp || {}),
	To = (function (e) {
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
	})(To || {});
function y0(e) {
	let t = k.useContext(tu);
	return t || J(!1), t;
}
function w0(e) {
	let t = k.useContext(a0);
	return t || J(!1), t;
}
function x0(e) {
	let t = k.useContext(Sn);
	return t || J(!1), t;
}
function Ap(e) {
	let t = x0(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || J(!1), n.route.id;
}
function S0() {
	var e;
	let t = k.useContext(Ep),
		n = w0(To.UseRouteError),
		r = Ap(To.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function k0() {
	let { router: e } = y0(Lp.UseNavigateStable),
		t = Ap(To.UseNavigateStable),
		n = k.useRef(!1);
	return (
		jp(() => {
			n.current = !0;
		}),
		k.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, ei({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function _n(e) {
	J(!1);
}
function P0(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Rt.Pop,
		navigator: o,
		static: s = !1,
		future: l,
	} = e;
	fi() && J(!1);
	let a = t.replace(/^\/*/, "/"),
		u = k.useMemo(
			() => ({
				basename: a,
				navigator: o,
				static: s,
				future: ei({ v7_relativeSplatPath: !1 }, l),
			}),
			[a, l, o, s]
		);
	typeof r == "string" && (r = or(r));
	let {
			pathname: c = "/",
			search: f = "",
			hash: d = "",
			state: g = null,
			key: v = "default",
		} = r,
		w = k.useMemo(() => {
			let S = eu(c, a);
			return S == null
				? null
				: {
						location: { pathname: S, search: f, hash: d, state: g, key: v },
						navigationType: i,
				  };
		}, [a, c, f, d, g, v, i]);
	return w == null
		? null
		: k.createElement(
				xn.Provider,
				{ value: u },
				k.createElement(Zo.Provider, { children: n, value: w })
		  );
}
function _0(e) {
	let { children: t, location: n } = e;
	return f0(Wl(t), n);
}
new Promise(() => {});
function Wl(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		k.Children.forEach(e, (r, i) => {
			if (!k.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === k.Fragment) {
				n.push.apply(n, Wl(r.props.children, o));
				return;
			}
			r.type !== _n && J(!1), !r.props.index || !r.props.children || J(!1);
			let s = {
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
			r.props.children && (s.children = Wl(r.props.children, o)), n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hl() {
	return (
		(Hl = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Hl.apply(this, arguments)
	);
}
function C0(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i,
		o;
	for (o = 0; o < r.length; o++)
		(i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function T0(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function E0(e, t) {
	return e.button === 0 && (!t || t === "_self") && !T0(e);
}
const j0 = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	R0 = "6";
try {
	window.__reactRouterVersion = R0;
} catch {}
const N0 = "startTransition",
	Kc = Qs[N0];
function L0(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = k.useRef();
	o.current == null && (o.current = Fy({ window: i, v5Compat: !0 }));
	let s = o.current,
		[l, a] = k.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = k.useCallback(
			(f) => {
				u && Kc ? Kc(() => a(f)) : a(f);
			},
			[a, u]
		);
	return (
		k.useLayoutEffect(() => s.listen(c), [s, c]),
		k.createElement(P0, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
			future: r,
		})
	);
}
const A0 =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	M0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	Lr = k.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: i,
				reloadDocument: o,
				replace: s,
				state: l,
				target: a,
				to: u,
				preventScrollReset: c,
				unstable_viewTransition: f,
			} = t,
			d = C0(t, j0),
			{ basename: g } = k.useContext(xn),
			v,
			w = !1;
		if (typeof u == "string" && M0.test(u) && ((v = u), A0))
			try {
				let m = new URL(window.location.href),
					x = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
					P = eu(x.pathname, g);
				x.origin === m.origin && P != null
					? (u = P + x.search + x.hash)
					: (w = !0);
			} catch {}
		let S = u0(u, { relative: i }),
			p = V0(u, {
				replace: s,
				state: l,
				target: a,
				preventScrollReset: c,
				relative: i,
				unstable_viewTransition: f,
			});
		function h(m) {
			r && r(m), m.defaultPrevented || p(m);
		}
		return k.createElement(
			"a",
			Hl({}, d, { href: v || S, onClick: w || o ? r : h, ref: n, target: a })
		);
	});
var bc;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(bc || (bc = {}));
var Gc;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(Gc || (Gc = {}));
function V0(e, t) {
	let {
			target: n,
			replace: r,
			state: i,
			preventScrollReset: o,
			relative: s,
			unstable_viewTransition: l,
		} = t === void 0 ? {} : t,
		a = Rp(),
		u = Jo(),
		c = Np(e, { relative: s });
	return k.useCallback(
		(f) => {
			if (E0(f, n)) {
				f.preventDefault();
				let d = r !== void 0 ? r : Co(u) === Co(c);
				a(e, {
					replace: d,
					state: i,
					preventScrollReset: o,
					relative: s,
					unstable_viewTransition: l,
				});
			}
		},
		[u, a, c, r, i, n, e, o, s, l]
	);
}
/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var D0 = {
	outline: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
	},
	filled: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 24,
		height: 24,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		stroke: "none",
	},
};
/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nu = (e, t, n, r) => {
	const i = k.forwardRef(
		(
			{
				color: o = "currentColor",
				size: s = 24,
				stroke: l = 2,
				className: a,
				children: u,
				...c
			},
			f
		) =>
			k.createElement(
				"svg",
				{
					ref: f,
					...D0[e],
					width: s,
					height: s,
					className: ["tabler-icon", `tabler-icon-${t}`, a].join(" "),
					strokeWidth: l,
					stroke: o,
					...c,
				},
				[
					...r.map(([d, g]) => k.createElement(d, g)),
					...(Array.isArray(u) ? u : [u]),
				]
			)
	);
	return (i.displayName = `${n}`), i;
};
/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var O0 = nu("outline", "player-play", "IconPlayerPlay", [
	["path", { d: "M7 4v16l13 -8z", key: "svg-0" }],
]);
/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var F0 = nu("outline", "power", "IconPower", [
	["path", { d: "M7 6a7.75 7.75 0 1 0 10 0", key: "svg-0" }],
	["path", { d: "M12 4l0 8", key: "svg-1" }],
]);
/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var I0 = nu("outline", "vinyl", "IconVinyl", [
	["path", { d: "M16 3.937a9 9 0 1 0 5 8.063", key: "svg-0" }],
	["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
	["path", { d: "M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
	["path", { d: "M20 4l-3.5 10l-2.5 2", key: "svg-3" }],
]);
const Mp = k.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: "never",
	}),
	qo = k.createContext({}),
	ru = k.createContext(null),
	iu = typeof document < "u",
	z0 = iu ? k.useLayoutEffect : k.useEffect,
	Vp = k.createContext({ strict: !1 }),
	ou = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	B0 = "framerAppearId",
	Dp = "data-" + ou(B0),
	U0 = { skipAnimations: !1, useManualTiming: !1 };
class Qc {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(t) {
		if (!this.scheduled.has(t))
			return this.scheduled.add(t), this.order.push(t), !0;
	}
	remove(t) {
		const n = this.order.indexOf(t);
		n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function $0(e) {
	let t = new Qc(),
		n = new Qc(),
		r = 0,
		i = !1,
		o = !1;
	const s = new WeakSet(),
		l = {
			schedule: (a, u = !1, c = !1) => {
				const f = c && i,
					d = f ? t : n;
				return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
			},
			cancel: (a) => {
				n.remove(a), s.delete(a);
			},
			process: (a) => {
				if (i) {
					o = !0;
					return;
				}
				if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
					for (let u = 0; u < r; u++) {
						const c = t.order[u];
						s.has(c) && (l.schedule(c), e()), c(a);
					}
				(i = !1), o && ((o = !1), l.process(a));
			},
		};
	return l;
}
const Oi = [
		"read",
		"resolveKeyframes",
		"update",
		"preRender",
		"render",
		"postRender",
	],
	W0 = 40;
function Op(e, t) {
	let n = !1,
		r = !0;
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		o = Oi.reduce((f, d) => ((f[d] = $0(() => (n = !0))), f), {}),
		s = (f) => {
			o[f].process(i);
		},
		l = () => {
			const f = performance.now();
			(n = !1),
				(i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, W0), 1)),
				(i.timestamp = f),
				(i.isProcessing = !0),
				Oi.forEach(s),
				(i.isProcessing = !1),
				n && t && ((r = !1), e(l));
		},
		a = () => {
			(n = !0), (r = !0), i.isProcessing || e(l);
		};
	return {
		schedule: Oi.reduce((f, d) => {
			const g = o[d];
			return (f[d] = (v, w = !1, S = !1) => (n || a(), g.schedule(v, w, S))), f;
		}, {}),
		cancel: (f) => Oi.forEach((d) => o[d].cancel(f)),
		state: i,
		steps: o,
	};
}
const { schedule: su, cancel: Gk } = Op(queueMicrotask, !1);
function H0(e, t, n, r) {
	const { visualElement: i } = k.useContext(qo),
		o = k.useContext(Vp),
		s = k.useContext(ru),
		l = k.useContext(Mp).reducedMotion,
		a = k.useRef();
	(r = r || o.renderer),
		!a.current &&
			r &&
			(a.current = r(e, {
				visualState: t,
				parent: i,
				props: n,
				presenceContext: s,
				blockInitialAnimation: s ? s.initial === !1 : !1,
				reducedMotionConfig: l,
			}));
	const u = a.current;
	k.useInsertionEffect(() => {
		u && u.update(n, s);
	});
	const c = k.useRef(!!(n[Dp] && !window.HandoffComplete));
	return (
		z0(() => {
			u &&
				(su.render(u.render),
				c.current && u.animationState && u.animationState.animateChanges());
		}),
		k.useEffect(() => {
			u &&
				(u.updateFeatures(),
				!c.current && u.animationState && u.animationState.animateChanges(),
				c.current && ((c.current = !1), (window.HandoffComplete = !0)));
		}),
		u
	);
}
function In(e) {
	return (
		e &&
		typeof e == "object" &&
		Object.prototype.hasOwnProperty.call(e, "current")
	);
}
function K0(e, t, n) {
	return k.useCallback(
		(r) => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == "function" ? n(r) : In(n) && (n.current = r));
		},
		[t]
	);
}
function ti(e) {
	return typeof e == "string" || Array.isArray(e);
}
function es(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function";
}
const lu = [
		"animate",
		"whileInView",
		"whileFocus",
		"whileHover",
		"whileTap",
		"whileDrag",
		"exit",
	],
	au = ["initial", ...lu];
function ts(e) {
	return es(e.animate) || au.some((t) => ti(e[t]));
}
function Fp(e) {
	return !!(ts(e) || e.variants);
}
function b0(e, t) {
	if (ts(e)) {
		const { initial: n, animate: r } = e;
		return {
			initial: n === !1 || ti(n) ? n : void 0,
			animate: ti(r) ? r : void 0,
		};
	}
	return e.inherit !== !1 ? t : {};
}
function G0(e) {
	const { initial: t, animate: n } = b0(e, k.useContext(qo));
	return k.useMemo(() => ({ initial: t, animate: n }), [Yc(t), Yc(n)]);
}
function Yc(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
const Xc = {
		animation: [
			"animate",
			"variants",
			"whileHover",
			"whileTap",
			"exit",
			"whileInView",
			"whileFocus",
			"whileDrag",
		],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"],
	},
	ni = {};
for (const e in Xc) ni[e] = { isEnabled: (t) => Xc[e].some((n) => !!t[n]) };
function Q0(e) {
	for (const t in e) ni[t] = { ...ni[t], ...e[t] };
}
const Ip = k.createContext({}),
	zp = k.createContext({}),
	Y0 = Symbol.for("motionComponentSymbol");
function X0({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i,
}) {
	e && Q0(e);
	function o(l, a) {
		let u;
		const c = { ...k.useContext(Mp), ...l, layoutId: Z0(l) },
			{ isStatic: f } = c,
			d = G0(l),
			g = r(l, f);
		if (!f && iu) {
			d.visualElement = H0(i, g, c, t);
			const v = k.useContext(zp),
				w = k.useContext(Vp).strict;
			d.visualElement && (u = d.visualElement.loadFeatures(c, w, e, v));
		}
		return y.jsxs(qo.Provider, {
			value: d,
			children: [
				u && d.visualElement
					? y.jsx(u, { visualElement: d.visualElement, ...c })
					: null,
				n(i, l, K0(g, d.visualElement, a), g, f, d.visualElement),
			],
		});
	}
	const s = k.forwardRef(o);
	return (s[Y0] = i), s;
}
function Z0({ layoutId: e }) {
	const t = k.useContext(Ip).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function J0(e) {
	function t(r, i = {}) {
		return X0(e(r, i));
	}
	if (typeof Proxy > "u") return t;
	const n = new Map();
	return new Proxy(t, {
		get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
	});
}
const q0 = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view",
];
function uu(e) {
	return typeof e != "string" || e.includes("-")
		? !1
		: !!(q0.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Eo = {};
function e1(e) {
	Object.assign(Eo, e);
}
const di = [
		"transformPerspective",
		"x",
		"y",
		"z",
		"translateX",
		"translateY",
		"translateZ",
		"scale",
		"scaleX",
		"scaleY",
		"rotate",
		"rotateX",
		"rotateY",
		"rotateZ",
		"skew",
		"skewX",
		"skewY",
	],
	kn = new Set(di);
function Bp(e, { layout: t, layoutId: n }) {
	return (
		kn.has(e) ||
		e.startsWith("origin") ||
		((t || n !== void 0) && (!!Eo[e] || e === "opacity"))
	);
}
const me = (e) => !!(e && e.getVelocity),
	t1 = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective",
	},
	n1 = di.length;
function r1(
	e,
	{ enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
	r,
	i
) {
	let o = "";
	for (let s = 0; s < n1; s++) {
		const l = di[s];
		if (e[l] !== void 0) {
			const a = t1[l] || l;
			o += `${a}(${e[l]}) `;
		}
	}
	return (
		t && !e.z && (o += "translateZ(0)"),
		(o = o.trim()),
		i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
		o
	);
}
const Up = (e) => (t) => typeof t == "string" && t.startsWith(e),
	$p = Up("--"),
	i1 = Up("var(--"),
	cu = (e) => (i1(e) ? o1.test(e.split("/*")[0].trim()) : !1),
	o1 =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	s1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
	Wt = (e, t, n) => (n > t ? t : n < e ? e : n),
	sr = {
		test: (e) => typeof e == "number",
		parse: parseFloat,
		transform: (e) => e,
	},
	Ar = { ...sr, transform: (e) => Wt(0, 1, e) },
	Fi = { ...sr, default: 1 },
	Mr = (e) => Math.round(e * 1e5) / 1e5,
	fu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
	l1 =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
	a1 =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function hi(e) {
	return typeof e == "string";
}
const pi = (e) => ({
		test: (t) => hi(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	St = pi("deg"),
	nt = pi("%"),
	N = pi("px"),
	u1 = pi("vh"),
	c1 = pi("vw"),
	Zc = {
		...nt,
		parse: (e) => nt.parse(e) / 100,
		transform: (e) => nt.transform(e * 100),
	},
	Jc = { ...sr, transform: Math.round },
	Wp = {
		borderWidth: N,
		borderTopWidth: N,
		borderRightWidth: N,
		borderBottomWidth: N,
		borderLeftWidth: N,
		borderRadius: N,
		radius: N,
		borderTopLeftRadius: N,
		borderTopRightRadius: N,
		borderBottomRightRadius: N,
		borderBottomLeftRadius: N,
		width: N,
		maxWidth: N,
		height: N,
		maxHeight: N,
		size: N,
		top: N,
		right: N,
		bottom: N,
		left: N,
		padding: N,
		paddingTop: N,
		paddingRight: N,
		paddingBottom: N,
		paddingLeft: N,
		margin: N,
		marginTop: N,
		marginRight: N,
		marginBottom: N,
		marginLeft: N,
		rotate: St,
		rotateX: St,
		rotateY: St,
		rotateZ: St,
		scale: Fi,
		scaleX: Fi,
		scaleY: Fi,
		scaleZ: Fi,
		skew: St,
		skewX: St,
		skewY: St,
		distance: N,
		translateX: N,
		translateY: N,
		translateZ: N,
		x: N,
		y: N,
		z: N,
		perspective: N,
		transformPerspective: N,
		opacity: Ar,
		originX: Zc,
		originY: Zc,
		originZ: N,
		zIndex: Jc,
		backgroundPositionX: N,
		backgroundPositionY: N,
		fillOpacity: Ar,
		strokeOpacity: Ar,
		numOctaves: Jc,
	};
function du(e, t, n, r) {
	const { style: i, vars: o, transform: s, transformOrigin: l } = e;
	let a = !1,
		u = !1,
		c = !0;
	for (const f in t) {
		const d = t[f];
		if ($p(f)) {
			o[f] = d;
			continue;
		}
		const g = Wp[f],
			v = s1(d, g);
		if (kn.has(f)) {
			if (((a = !0), (s[f] = v), !c)) continue;
			d !== (g.default || 0) && (c = !1);
		} else f.startsWith("origin") ? ((u = !0), (l[f] = v)) : (i[f] = v);
	}
	if (
		(t.transform ||
			(a || r
				? (i.transform = r1(e.transform, n, c, r))
				: i.transform && (i.transform = "none")),
		u)
	) {
		const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = l;
		i.transformOrigin = `${f} ${d} ${g}`;
	}
}
const hu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Hp(e, t, n) {
	for (const r in t) !me(t[r]) && !Bp(r, n) && (e[r] = t[r]);
}
function f1({ transformTemplate: e }, t, n) {
	return k.useMemo(() => {
		const r = hu();
		return (
			du(r, t, { enableHardwareAcceleration: !n }, e),
			Object.assign({}, r.vars, r.style)
		);
	}, [t]);
}
function d1(e, t, n) {
	const r = e.style || {},
		i = {};
	return Hp(i, r, e), Object.assign(i, f1(e, t, n)), i;
}
function h1(e, t, n) {
	const r = {},
		i = d1(e, t, n);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((r.draggable = !1),
			(i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
			(i.touchAction =
				e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(r.tabIndex = 0),
		(r.style = i),
		r
	);
}
const p1 = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"ignoreStrict",
	"viewport",
]);
function jo(e) {
	return (
		e.startsWith("while") ||
		(e.startsWith("drag") && e !== "draggable") ||
		e.startsWith("layout") ||
		e.startsWith("onTap") ||
		e.startsWith("onPan") ||
		e.startsWith("onLayout") ||
		p1.has(e)
	);
}
let Kp = (e) => !jo(e);
function m1(e) {
	e && (Kp = (t) => (t.startsWith("on") ? !jo(t) : e(t)));
}
try {
	m1(require("@emotion/is-prop-valid").default);
} catch {}
function g1(e, t, n) {
	const r = {};
	for (const i in e)
		(i === "values" && typeof e.values == "object") ||
			((Kp(i) ||
				(n === !0 && jo(i)) ||
				(!t && !jo(i)) ||
				(e.draggable && i.startsWith("onDrag"))) &&
				(r[i] = e[i]));
	return r;
}
function qc(e, t, n) {
	return typeof e == "string" ? e : N.transform(t + n * e);
}
function v1(e, t, n) {
	const r = qc(t, e.x, e.width),
		i = qc(n, e.y, e.height);
	return `${r} ${i}`;
}
const y1 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
	w1 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function x1(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const o = i ? y1 : w1;
	e[o.offset] = N.transform(-r);
	const s = N.transform(t),
		l = N.transform(n);
	e[o.array] = `${s} ${l}`;
}
function pu(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: i,
		originY: o,
		pathLength: s,
		pathSpacing: l = 1,
		pathOffset: a = 0,
		...u
	},
	c,
	f,
	d
) {
	if ((du(e, u, c, d), f)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: g, style: v, dimensions: w } = e;
	g.transform && (w && (v.transform = g.transform), delete g.transform),
		w &&
			(i !== void 0 || o !== void 0 || v.transform) &&
			(v.transformOrigin = v1(
				w,
				i !== void 0 ? i : 0.5,
				o !== void 0 ? o : 0.5
			)),
		t !== void 0 && (g.x = t),
		n !== void 0 && (g.y = n),
		r !== void 0 && (g.scale = r),
		s !== void 0 && x1(g, s, l, a, !1);
}
const bp = () => ({ ...hu(), attrs: {} }),
	mu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function S1(e, t, n, r) {
	const i = k.useMemo(() => {
		const o = bp();
		return (
			pu(o, t, { enableHardwareAcceleration: !1 }, mu(r), e.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [t]);
	if (e.style) {
		const o = {};
		Hp(o, e.style, e), (i.style = { ...o, ...i.style });
	}
	return i;
}
function k1(e = !1) {
	return (n, r, i, { latestValues: o }, s) => {
		const a = (uu(n) ? S1 : h1)(r, o, s, n),
			u = g1(r, typeof n == "string", e),
			c = n !== k.Fragment ? { ...u, ...a, ref: i } : {},
			{ children: f } = r,
			d = k.useMemo(() => (me(f) ? f.get() : f), [f]);
		return k.createElement(n, { ...c, children: d });
	};
}
function Gp(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (const o in n) e.style.setProperty(o, n[o]);
}
const Qp = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust",
]);
function Yp(e, t, n, r) {
	Gp(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(Qp.has(i) ? i : ou(i), t.attrs[i]);
}
function gu(e, t, n) {
	var r;
	const { style: i } = e,
		o = {};
	for (const s in i)
		(me(i[s]) ||
			(t.style && me(t.style[s])) ||
			Bp(s, e) ||
			((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
				? void 0
				: r.liveStyle) !== void 0) &&
			(o[s] = i[s]);
	return o;
}
function Xp(e, t, n) {
	const r = gu(e, t, n);
	for (const i in e)
		if (me(e[i]) || me(t[i])) {
			const o =
				di.indexOf(i) !== -1
					? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
					: i;
			r[o] = e[i];
		}
	return r;
}
function ef(e) {
	const t = [{}, {}];
	return (
		e == null ||
			e.values.forEach((n, r) => {
				(t[0][r] = n.get()), (t[1][r] = n.getVelocity());
			}),
		t
	);
}
function vu(e, t, n, r) {
	if (typeof t == "function") {
		const [i, o] = ef(r);
		t = t(n !== void 0 ? n : e.custom, i, o);
	}
	if (
		(typeof t == "string" && (t = e.variants && e.variants[t]),
		typeof t == "function")
	) {
		const [i, o] = ef(r);
		t = t(n !== void 0 ? n : e.custom, i, o);
	}
	return t;
}
function P1(e) {
	const t = k.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const Kl = (e) => Array.isArray(e),
	_1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
	C1 = (e) => (Kl(e) ? e[e.length - 1] || 0 : e);
function Zi(e) {
	const t = me(e) ? e.get() : e;
	return _1(t) ? t.toValue() : t;
}
function T1(
	{ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
	r,
	i,
	o
) {
	const s = { latestValues: E1(r, i, o, e), renderState: t() };
	return n && (s.mount = (l) => n(r, l, s)), s;
}
const Zp = (e) => (t, n) => {
	const r = k.useContext(qo),
		i = k.useContext(ru),
		o = () => T1(e, t, r, i);
	return n ? o() : P1(o);
};
function E1(e, t, n, r) {
	const i = {},
		o = r(e, {});
	for (const d in o) i[d] = Zi(o[d]);
	let { initial: s, animate: l } = e;
	const a = ts(e),
		u = Fp(e);
	t &&
		u &&
		!a &&
		e.inherit !== !1 &&
		(s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || s === !1;
	const f = c ? l : s;
	return (
		f &&
			typeof f != "boolean" &&
			!es(f) &&
			(Array.isArray(f) ? f : [f]).forEach((g) => {
				const v = vu(e, g);
				if (!v) return;
				const { transitionEnd: w, transition: S, ...p } = v;
				for (const h in p) {
					let m = p[h];
					if (Array.isArray(m)) {
						const x = c ? m.length - 1 : 0;
						m = m[x];
					}
					m !== null && (i[h] = m);
				}
				for (const h in w) i[h] = w[h];
			}),
		i
	);
}
const ge = (e) => e,
	{
		schedule: I,
		cancel: gt,
		state: ae,
		steps: Ms,
	} = Op(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0),
	j1 = {
		useVisualState: Zp({
			scrapeMotionValuesFromProps: Xp,
			createRenderState: bp,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				I.read(() => {
					try {
						n.dimensions =
							typeof t.getBBox == "function"
								? t.getBBox()
								: t.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					I.render(() => {
						pu(
							n,
							r,
							{ enableHardwareAcceleration: !1 },
							mu(t.tagName),
							e.transformTemplate
						),
							Yp(t, n);
					});
			},
		}),
	},
	R1 = {
		useVisualState: Zp({
			scrapeMotionValuesFromProps: gu,
			createRenderState: hu,
		}),
	};
function N1(e, { forwardMotionProps: t = !1 }, n, r) {
	return {
		...(uu(e) ? j1 : R1),
		preloadedFeatures: n,
		useRender: k1(t),
		createVisualElement: r,
		Component: e,
	};
}
function lt(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Jp = (e) =>
	e.pointerType === "mouse"
		? typeof e.button != "number" || e.button <= 0
		: e.isPrimary !== !1;
function ns(e, t = "page") {
	return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const L1 = (e) => (t) => Jp(t) && e(t, ns(t));
function ut(e, t, n, r) {
	return lt(e, t, L1(n), r);
}
const A1 = (e, t) => (n) => t(e(n)),
	ct = (...e) => e.reduce(A1);
function qp(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null;
		};
		return t === null ? ((t = e), n) : !1;
	};
}
const tf = qp("dragHorizontal"),
	nf = qp("dragVertical");
function em(e) {
	let t = !1;
	if (e === "y") t = nf();
	else if (e === "x") t = tf();
	else {
		const n = tf(),
			r = nf();
		n && r
			? (t = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return t;
}
function tm() {
	const e = em(!0);
	return e ? (e(), !1) : !0;
}
class Yt {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function rf(e, t) {
	const n = t ? "pointerenter" : "pointerleave",
		r = t ? "onHoverStart" : "onHoverEnd",
		i = (o, s) => {
			if (o.pointerType === "touch" || tm()) return;
			const l = e.getProps();
			e.animationState &&
				l.whileHover &&
				e.animationState.setActive("whileHover", t);
			const a = l[r];
			a && I.postRender(() => a(o, s));
		};
	return ut(e.current, n, i, { passive: !e.getProps()[r] });
}
class M1 extends Yt {
	mount() {
		this.unmount = ct(rf(this.node, !0), rf(this.node, !1));
	}
	unmount() {}
}
class V1 extends Yt {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible");
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !0),
			(this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive("whileFocus", !1),
			(this.isActive = !1));
	}
	mount() {
		this.unmount = ct(
			lt(this.node.current, "focus", () => this.onFocus()),
			lt(this.node.current, "blur", () => this.onBlur())
		);
	}
	unmount() {}
}
const nm = (e, t) => (t ? (e === t ? !0 : nm(e, t.parentElement)) : !1);
function Vs(e, t) {
	if (!t) return;
	const n = new PointerEvent("pointer" + e);
	t(n, ns(n));
}
class D1 extends Yt {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = ge),
			(this.removeEndListeners = ge),
			(this.removeAccessibleListeners = ge),
			(this.startPointerPress = (t, n) => {
				if (this.isPressing) return;
				this.removeEndListeners();
				const r = this.node.getProps(),
					o = ut(
						window,
						"pointerup",
						(l, a) => {
							if (!this.checkPressEnd()) return;
							const {
									onTap: u,
									onTapCancel: c,
									globalTapTarget: f,
								} = this.node.getProps(),
								d = !f && !nm(this.node.current, l.target) ? c : u;
							d && I.update(() => d(l, a));
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					s = ut(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = ct(o, s)), this.startPress(t, n);
			}),
			(this.startAccessiblePress = () => {
				const t = (o) => {
						if (o.key !== "Enter" || this.isPressing) return;
						const s = (l) => {
							l.key !== "Enter" ||
								!this.checkPressEnd() ||
								Vs("up", (a, u) => {
									const { onTap: c } = this.node.getProps();
									c && I.postRender(() => c(a, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = lt(this.node.current, "keyup", s)),
							Vs("down", (l, a) => {
								this.startPress(l, a);
							});
					},
					n = lt(this.node.current, "keydown", t),
					r = () => {
						this.isPressing && Vs("cancel", (o, s) => this.cancelPress(o, s));
					},
					i = lt(this.node.current, "blur", r);
				this.removeAccessibleListeners = ct(n, i);
			});
	}
	startPress(t, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: i } = this.node.getProps();
		i &&
			this.node.animationState &&
			this.node.animationState.setActive("whileTap", !0),
			r && I.postRender(() => r(t, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive("whileTap", !1),
			!tm()
		);
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && I.postRender(() => r(t, n));
	}
	mount() {
		const t = this.node.getProps(),
			n = ut(
				t.globalTapTarget ? window : this.node.current,
				"pointerdown",
				this.startPointerPress,
				{ passive: !(t.onTapStart || t.onPointerStart) }
			),
			r = lt(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = ct(n, r);
	}
	unmount() {
		this.removeStartListeners(),
			this.removeEndListeners(),
			this.removeAccessibleListeners();
	}
}
const bl = new WeakMap(),
	Ds = new WeakMap(),
	O1 = (e) => {
		const t = bl.get(e.target);
		t && t(e);
	},
	F1 = (e) => {
		e.forEach(O1);
	};
function I1({ root: e, ...t }) {
	const n = e || document;
	Ds.has(n) || Ds.set(n, {});
	const r = Ds.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(F1, { root: e, ...t })), r[i];
}
function z1(e, t, n) {
	const r = I1(t);
	return (
		bl.set(e, n),
		r.observe(e),
		() => {
			bl.delete(e), r.unobserve(e);
		}
	);
}
const B1 = { some: 0, all: 1 };
class U1 extends Yt {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = "some", once: o } = t,
			s = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == "number" ? i : B1[i],
			},
			l = (a) => {
				const { isIntersecting: u } = a;
				if (
					this.isInView === u ||
					((this.isInView = u), o && !u && this.hasEnteredView)
				)
					return;
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive("whileInView", u);
				const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
					d = u ? c : f;
				d && d(a);
			};
		return z1(this.node.current, s, l);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const { props: t, prevProps: n } = this.node;
		["amount", "margin", "root"].some($1(t, n)) && this.startObserver();
	}
	unmount() {}
}
function $1({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
const W1 = {
	inView: { Feature: U1 },
	tap: { Feature: D1 },
	focus: { Feature: V1 },
	hover: { Feature: M1 },
};
function rm(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
function rs(e, t, n) {
	const r = e.getProps();
	return vu(r, t, n !== void 0 ? n : r.custom, e);
}
const zt = (e) => e * 1e3,
	ft = (e) => e / 1e3,
	H1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
	K1 = (e) => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	b1 = { type: "keyframes", duration: 0.8 },
	G1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Q1 = (e, { keyframes: t }) =>
		t.length > 2
			? b1
			: kn.has(e)
			? e.startsWith("scale")
				? K1(t[1])
				: H1
			: G1;
function Y1({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: o,
	repeatType: s,
	repeatDelay: l,
	from: a,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function yu(e, t) {
	return e[t] || e.default || e;
}
const X1 = (e) => e !== null;
function is(e, { repeat: t, repeatType: n = "loop" }, r) {
	const i = e.filter(X1),
		o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
	return !o || r === void 0 ? i[o] : r;
}
let Ji;
function Z1() {
	Ji = void 0;
}
const Bt = {
		now: () => (
			Ji === void 0 &&
				Bt.set(
					ae.isProcessing || U0.useManualTiming
						? ae.timestamp
						: performance.now()
				),
			Ji
		),
		set: (e) => {
			(Ji = e), queueMicrotask(Z1);
		},
	},
	im = (e) => /^0[^.\s]+$/u.test(e);
function J1(e) {
	return typeof e == "number"
		? e === 0
		: e !== null
		? e === "none" || e === "0" || im(e)
		: !0;
}
let Gl = ge;
const om = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	q1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ew(e) {
	const t = q1.exec(e);
	if (!t) return [,];
	const [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function sm(e, t, n = 1) {
	const [r, i] = ew(e);
	if (!r) return;
	const o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		const s = o.trim();
		return om(s) ? parseFloat(s) : s;
	}
	return cu(i) ? sm(i, t, n + 1) : i;
}
const tw = new Set([
		"width",
		"height",
		"top",
		"left",
		"right",
		"bottom",
		"x",
		"y",
		"translateX",
		"translateY",
	]),
	of = (e) => e === sr || e === N,
	sf = (e, t) => parseFloat(e.split(", ")[t]),
	lf =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === "none" || !r) return 0;
			const i = r.match(/^matrix3d\((.+)\)$/u);
			if (i) return sf(i[1], t);
			{
				const o = r.match(/^matrix\((.+)\)$/u);
				return o ? sf(o[1], e) : 0;
			}
		},
	nw = new Set(["x", "y", "z"]),
	rw = di.filter((e) => !nw.has(e));
function iw(e) {
	const t = [];
	return (
		rw.forEach((n) => {
			const r = e.getValue(n);
			r !== void 0 &&
				(t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
		}),
		t
	);
}
const tr = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: lf(4, 13),
	y: lf(5, 14),
};
tr.translateX = tr.x;
tr.translateY = tr.y;
const lm = (e) => (t) => t.test(e),
	ow = { test: (e) => e === "auto", parse: (e) => e },
	am = [sr, N, nt, St, c1, u1, ow],
	af = (e) => am.find(lm(e)),
	dn = new Set();
let Ql = !1,
	Yl = !1;
function um() {
	if (Yl) {
		const e = Array.from(dn).filter((r) => r.needsMeasurement),
			t = new Set(e.map((r) => r.element)),
			n = new Map();
		t.forEach((r) => {
			const i = iw(r);
			i.length && (n.set(r, i), r.render());
		}),
			e.forEach((r) => r.measureInitialState()),
			t.forEach((r) => {
				r.render();
				const i = n.get(r);
				i &&
					i.forEach(([o, s]) => {
						var l;
						(l = r.getValue(o)) === null || l === void 0 || l.set(s);
					});
			}),
			e.forEach((r) => r.measureEndState()),
			e.forEach((r) => {
				r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
			});
	}
	(Yl = !1), (Ql = !1), dn.forEach((e) => e.complete()), dn.clear();
}
function cm() {
	dn.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Yl = !0);
	});
}
function sw() {
	cm(), um();
}
class wu {
	constructor(t, n, r, i, o, s = !1) {
		(this.isComplete = !1),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.isScheduled = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = n),
			(this.name = r),
			(this.motionValue = i),
			(this.element = o),
			(this.isAsync = s);
	}
	scheduleResolve() {
		(this.isScheduled = !0),
			this.isAsync
				? (dn.add(this), Ql || ((Ql = !0), I.read(cm), I.resolveKeyframes(um)))
				: (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i,
		} = this;
		for (let o = 0; o < t.length; o++)
			if (t[o] === null)
				if (o === 0) {
					const s = i == null ? void 0 : i.get(),
						l = t[t.length - 1];
					if (s !== void 0) t[0] = s;
					else if (r && n) {
						const a = r.readValue(n, l);
						a != null && (t[0] = a);
					}
					t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
				} else t[o] = t[o - 1];
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		(this.isComplete = !0),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
			dn.delete(this);
	}
	cancel() {
		this.isComplete || ((this.isScheduled = !1), dn.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}
const xu = (e, t) => (n) =>
		!!(
			(hi(n) && a1.test(n) && n.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(n, t))
		),
	fm = (e, t, n) => (r) => {
		if (!hi(r)) return r;
		const [i, o, s, l] = r.match(fu);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(o),
			[n]: parseFloat(s),
			alpha: l !== void 0 ? parseFloat(l) : 1,
		};
	},
	lw = (e) => Wt(0, 255, e),
	Os = { ...sr, transform: (e) => Math.round(lw(e)) },
	un = {
		test: xu("rgb", "red"),
		parse: fm("red", "green", "blue"),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			"rgba(" +
			Os.transform(e) +
			", " +
			Os.transform(t) +
			", " +
			Os.transform(n) +
			", " +
			Mr(Ar.transform(r)) +
			")",
	};
function aw(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const Xl = { test: xu("#"), parse: aw, transform: un.transform },
	zn = {
		test: xu("hsl", "hue"),
		parse: fm("hue", "saturation", "lightness"),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			"hsla(" +
			Math.round(e) +
			", " +
			nt.transform(Mr(t)) +
			", " +
			nt.transform(Mr(n)) +
			", " +
			Mr(Ar.transform(r)) +
			")",
	},
	he = {
		test: (e) => un.test(e) || Xl.test(e) || zn.test(e),
		parse: (e) =>
			un.test(e) ? un.parse(e) : zn.test(e) ? zn.parse(e) : Xl.parse(e),
		transform: (e) =>
			hi(e) ? e : e.hasOwnProperty("red") ? un.transform(e) : zn.transform(e),
	};
function uw(e) {
	var t, n;
	return (
		isNaN(e) &&
		hi(e) &&
		(((t = e.match(fu)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(l1)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const dm = "number",
	hm = "color",
	cw = "var",
	fw = "var(",
	uf = "${}",
	dw =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ri(e) {
	const t = e.toString(),
		n = [],
		r = { color: [], number: [], var: [] },
		i = [];
	let o = 0;
	const l = t
		.replace(
			dw,
			(a) => (
				he.test(a)
					? (r.color.push(o), i.push(hm), n.push(he.parse(a)))
					: a.startsWith(fw)
					? (r.var.push(o), i.push(cw), n.push(a))
					: (r.number.push(o), i.push(dm), n.push(parseFloat(a))),
				++o,
				uf
			)
		)
		.split(uf);
	return { values: n, split: l, indexes: r, types: i };
}
function pm(e) {
	return ri(e).values;
}
function mm(e) {
	const { split: t, types: n } = ri(e),
		r = t.length;
	return (i) => {
		let o = "";
		for (let s = 0; s < r; s++)
			if (((o += t[s]), i[s] !== void 0)) {
				const l = n[s];
				l === dm
					? (o += Mr(i[s]))
					: l === hm
					? (o += he.transform(i[s]))
					: (o += i[s]);
			}
		return o;
	};
}
const hw = (e) => (typeof e == "number" ? 0 : e);
function pw(e) {
	const t = pm(e);
	return mm(e)(t.map(hw));
}
const Ht = {
		test: uw,
		parse: pm,
		createTransformer: mm,
		getAnimatableNone: pw,
	},
	mw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function gw(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(fu) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let o = mw.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const vw = /\b([a-z-]*)\(.*?\)/gu,
	Zl = {
		...Ht,
		getAnimatableNone: (e) => {
			const t = e.match(vw);
			return t ? t.map(gw).join(" ") : e;
		},
	},
	yw = {
		...Wp,
		color: he,
		backgroundColor: he,
		outlineColor: he,
		fill: he,
		stroke: he,
		borderColor: he,
		borderTopColor: he,
		borderRightColor: he,
		borderBottomColor: he,
		borderLeftColor: he,
		filter: Zl,
		WebkitFilter: Zl,
	},
	Su = (e) => yw[e];
function gm(e, t) {
	let n = Su(e);
	return (
		n !== Zl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	);
}
const ww = new Set(["auto", "none", "0"]);
function xw(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i; ) {
		const o = e[r];
		typeof o == "string" && !ww.has(o) && ri(o).values.length && (i = e[r]),
			r++;
	}
	if (i && n) for (const o of t) e[o] = gm(n, i);
}
class vm extends wu {
	constructor(t, n, r, i) {
		super(t, n, r, i, i == null ? void 0 : i.owner, !0);
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: n, name: r } = this;
		if (!n.current) return;
		super.readKeyframes();
		for (let a = 0; a < t.length; a++) {
			let u = t[a];
			if (typeof u == "string" && ((u = u.trim()), cu(u))) {
				const c = sm(u, n.current);
				c !== void 0 && (t[a] = c),
					a === t.length - 1 && (this.finalKeyframe = u);
			}
		}
		if ((this.resolveNoneKeyframes(), !tw.has(r) || t.length !== 2)) return;
		const [i, o] = t,
			s = af(i),
			l = af(o);
		if (s !== l)
			if (of(s) && of(l))
				for (let a = 0; a < t.length; a++) {
					const u = t[a];
					typeof u == "string" && (t[a] = parseFloat(u));
				}
			else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: n } = this,
			r = [];
		for (let i = 0; i < t.length; i++) J1(t[i]) && r.push(i);
		r.length && xw(t, r, n);
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: n, name: r } = this;
		if (!t.current) return;
		r === "height" && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = tr[r](
				t.measureViewportBox(),
				window.getComputedStyle(t.current)
			)),
			(n[0] = this.measuredOrigin);
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1);
	}
	measureEndState() {
		var t;
		const { element: n, name: r, unresolvedKeyframes: i } = this;
		if (!n.current) return;
		const o = n.getValue(r);
		o && o.jump(this.measuredOrigin, !1);
		const s = i.length - 1,
			l = i[s];
		(i[s] = tr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
			l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
			!((t = this.removedTransforms) === null || t === void 0) &&
				t.length &&
				this.removedTransforms.forEach(([a, u]) => {
					n.getValue(a).set(u);
				}),
			this.resolveNoneKeyframes();
	}
}
function ym(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const cf = (e, t) =>
	t === "zIndex"
		? !1
		: !!(
				typeof e == "number" ||
				Array.isArray(e) ||
				(typeof e == "string" &&
					(Ht.test(e) || e === "0") &&
					!e.startsWith("url("))
		  );
function Sw(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function kw(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	const o = e[e.length - 1],
		s = cf(i, t),
		l = cf(o, t);
	return !s || !l ? !1 : Sw(e) || (n === "spring" && r);
}
class wm {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = "keyframes",
		repeat: i = 0,
		repeatDelay: o = 0,
		repeatType: s = "loop",
		...l
	}) {
		(this.isStopped = !1),
			(this.hasAttemptedResolve = !1),
			(this.options = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: o,
				repeatType: s,
				...l,
			}),
			this.updateFinishedPromise();
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && sw(), this._resolved;
	}
	onKeyframesResolved(t, n) {
		this.hasAttemptedResolve = !0;
		const {
			name: r,
			type: i,
			velocity: o,
			delay: s,
			onComplete: l,
			onUpdate: a,
			isGenerator: u,
		} = this.options;
		if (!u && !kw(t, r, i, o))
			if (s) this.options.duration = 0;
			else {
				a == null || a(is(t, this.options, n)),
					l == null || l(),
					this.resolveFinishedPromise();
				return;
			}
		const c = this.initPlayback(t, n);
		c !== !1 &&
			((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
			this.onPostResolved());
	}
	onPostResolved() {}
	then(t, n) {
		return this.currentFinishedPromise.then(t, n);
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((t) => {
			this.resolveFinishedPromise = t;
		});
	}
}
function xm(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const Pw = 5;
function Sm(e, t, n) {
	const r = Math.max(t - Pw, 0);
	return xm(n - e(r), t - r);
}
const Fs = 0.001,
	_w = 0.01,
	Cw = 10,
	Tw = 0.05,
	Ew = 1;
function jw({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: n = 0,
	mass: r = 1,
}) {
	let i,
		o,
		s = 1 - t;
	(s = Wt(Tw, Ew, s)),
		(e = Wt(_w, Cw, ft(e))),
		s < 1
			? ((i = (u) => {
					const c = u * s,
						f = c * e,
						d = c - n,
						g = Jl(u, s),
						v = Math.exp(-f);
					return Fs - (d / g) * v;
			  }),
			  (o = (u) => {
					const f = u * s * e,
						d = f * n + n,
						g = Math.pow(s, 2) * Math.pow(u, 2) * e,
						v = Math.exp(-f),
						w = Jl(Math.pow(u, 2), s);
					return ((-i(u) + Fs > 0 ? -1 : 1) * ((d - g) * v)) / w;
			  }))
			: ((i = (u) => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1;
					return -Fs + c * f;
			  }),
			  (o = (u) => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e);
					return c * f;
			  }));
	const l = 5 / e,
		a = Nw(i, o, l);
	if (((e = zt(e)), isNaN(a)))
		return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(a, 2) * r;
		return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
	}
}
const Rw = 12;
function Nw(e, t, n) {
	let r = n;
	for (let i = 1; i < Rw; i++) r = r - e(r) / t(r);
	return r;
}
function Jl(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const Lw = ["duration", "bounce"],
	Aw = ["stiffness", "damping", "mass"];
function ff(e, t) {
	return t.some((n) => e[n] !== void 0);
}
function Mw(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!ff(e, Aw) && ff(e, Lw)) {
		const n = jw(e);
		(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function km({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const i = e[0],
		o = e[e.length - 1],
		s = { done: !1, value: i },
		{
			stiffness: l,
			damping: a,
			mass: u,
			duration: c,
			velocity: f,
			isResolvedFromDuration: d,
		} = Mw({ ...r, velocity: -ft(r.velocity || 0) }),
		g = f || 0,
		v = a / (2 * Math.sqrt(l * u)),
		w = o - i,
		S = ft(Math.sqrt(l / u)),
		p = Math.abs(w) < 5;
	n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
	let h;
	if (v < 1) {
		const m = Jl(S, v);
		h = (x) => {
			const P = Math.exp(-v * S * x);
			return (
				o - P * (((g + v * S * w) / m) * Math.sin(m * x) + w * Math.cos(m * x))
			);
		};
	} else if (v === 1) h = (m) => o - Math.exp(-S * m) * (w + (g + S * w) * m);
	else {
		const m = S * Math.sqrt(v * v - 1);
		h = (x) => {
			const P = Math.exp(-v * S * x),
				T = Math.min(m * x, 300);
			return (
				o - (P * ((g + v * S * w) * Math.sinh(T) + m * w * Math.cosh(T))) / m
			);
		};
	}
	return {
		calculatedDuration: (d && c) || null,
		next: (m) => {
			const x = h(m);
			if (d) s.done = m >= c;
			else {
				let P = g;
				m !== 0 && (v < 1 ? (P = Sm(h, m, x)) : (P = 0));
				const T = Math.abs(P) <= n,
					j = Math.abs(o - x) <= t;
				s.done = T && j;
			}
			return (s.value = s.done ? o : x), s;
		},
	};
}
function df({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: s,
	min: l,
	max: a,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		g = (C) => (l !== void 0 && C < l) || (a !== void 0 && C > a),
		v = (C) =>
			l === void 0
				? a
				: a === void 0 || Math.abs(l - C) < Math.abs(a - C)
				? l
				: a;
	let w = n * t;
	const S = f + w,
		p = s === void 0 ? S : s(S);
	p !== S && (w = p - f);
	const h = (C) => -w * Math.exp(-C / r),
		m = (C) => p + h(C),
		x = (C) => {
			const D = h(C),
				L = m(C);
			(d.done = Math.abs(D) <= u), (d.value = d.done ? p : L);
		};
	let P, T;
	const j = (C) => {
		g(d.value) &&
			((P = C),
			(T = km({
				keyframes: [d.value, v(d.value)],
				velocity: Sm(m, C, d.value),
				damping: i,
				stiffness: o,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		j(0),
		{
			calculatedDuration: null,
			next: (C) => {
				let D = !1;
				return (
					!T && P === void 0 && ((D = !0), x(C), j(C)),
					P !== void 0 && C >= P ? T.next(C - P) : (!D && x(C), d)
				);
			},
		}
	);
}
const Pm = (e, t, n) =>
		(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	Vw = 1e-7,
	Dw = 12;
function Ow(e, t, n, r, i) {
	let o,
		s,
		l = 0;
	do (s = t + (n - t) / 2), (o = Pm(s, r, i) - e), o > 0 ? (n = s) : (t = s);
	while (Math.abs(o) > Vw && ++l < Dw);
	return s;
}
function mi(e, t, n, r) {
	if (e === t && n === r) return ge;
	const i = (o) => Ow(o, 0, 1, e, n);
	return (o) => (o === 0 || o === 1 ? o : Pm(i(o), t, r));
}
const Fw = mi(0.42, 0, 1, 1),
	Iw = mi(0, 0, 0.58, 1),
	_m = mi(0.42, 0, 0.58, 1),
	zw = (e) => Array.isArray(e) && typeof e[0] != "number",
	Cm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	Tm = (e) => (t) => 1 - e(1 - t),
	ku = (e) => 1 - Math.sin(Math.acos(e)),
	Em = Tm(ku),
	Bw = Cm(ku),
	jm = mi(0.33, 1.53, 0.69, 0.99),
	Pu = Tm(jm),
	Uw = Cm(Pu),
	$w = (e) =>
		(e *= 2) < 1 ? 0.5 * Pu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	hf = {
		linear: ge,
		easeIn: Fw,
		easeInOut: _m,
		easeOut: Iw,
		circIn: ku,
		circInOut: Bw,
		circOut: Em,
		backIn: Pu,
		backInOut: Uw,
		backOut: jm,
		anticipate: $w,
	},
	pf = (e) => {
		if (Array.isArray(e)) {
			Gl(e.length === 4);
			const [t, n, r, i] = e;
			return mi(t, n, r, i);
		} else if (typeof e == "string") return Gl(hf[e] !== void 0), hf[e];
		return e;
	},
	ii = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	},
	H = (e, t, n) => e + (t - e) * n;
function Is(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	);
}
function Ww({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let i = 0,
		o = 0,
		s = 0;
	if (!t) i = o = s = n;
	else {
		const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l;
		(i = Is(a, l, e + 1 / 3)), (o = Is(a, l, e)), (s = Is(a, l, e - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(s * 255),
		alpha: r,
	};
}
function Ro(e, t) {
	return (n) => (n > 0 ? t : e);
}
const zs = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i);
	},
	Hw = [Xl, un, zn],
	Kw = (e) => Hw.find((t) => t.test(e));
function mf(e) {
	const t = Kw(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === zn && (n = Ww(n)), n;
}
const gf = (e, t) => {
		const n = mf(e),
			r = mf(t);
		if (!n || !r) return Ro(e, t);
		const i = { ...n };
		return (o) => (
			(i.red = zs(n.red, r.red, o)),
			(i.green = zs(n.green, r.green, o)),
			(i.blue = zs(n.blue, r.blue, o)),
			(i.alpha = H(n.alpha, r.alpha, o)),
			un.transform(i)
		);
	},
	ql = new Set(["none", "hidden"]);
function bw(e, t) {
	return ql.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Gw(e, t) {
	return (n) => H(e, t, n);
}
function _u(e) {
	return typeof e == "number"
		? Gw
		: typeof e == "string"
		? cu(e)
			? Ro
			: he.test(e)
			? gf
			: Xw
		: Array.isArray(e)
		? Rm
		: typeof e == "object"
		? he.test(e)
			? gf
			: Qw
		: Ro;
}
function Rm(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((o, s) => _u(o)(o, t[s]));
	return (o) => {
		for (let s = 0; s < r; s++) n[s] = i[s](o);
		return n;
	};
}
function Qw(e, t) {
	const n = { ...e, ...t },
		r = {};
	for (const i in n)
		e[i] !== void 0 && t[i] !== void 0 && (r[i] = _u(e[i])(e[i], t[i]));
	return (i) => {
		for (const o in r) n[o] = r[o](i);
		return n;
	};
}
function Yw(e, t) {
	var n;
	const r = [],
		i = { color: 0, var: 0, number: 0 };
	for (let o = 0; o < t.values.length; o++) {
		const s = t.types[o],
			l = e.indexes[s][i[s]],
			a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
		(r[o] = a), i[s]++;
	}
	return r;
}
const Xw = (e, t) => {
	const n = Ht.createTransformer(t),
		r = ri(e),
		i = ri(t);
	return r.indexes.var.length === i.indexes.var.length &&
		r.indexes.color.length === i.indexes.color.length &&
		r.indexes.number.length >= i.indexes.number.length
		? (ql.has(e) && !i.values.length) || (ql.has(t) && !r.values.length)
			? bw(e, t)
			: ct(Rm(Yw(r, i), i.values), n)
		: Ro(e, t);
};
function Nm(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number"
		? H(e, t, n)
		: _u(e)(e, t);
}
function Zw(e, t, n) {
	const r = [],
		i = n || Nm,
		o = e.length - 1;
	for (let s = 0; s < o; s++) {
		let l = i(e[s], e[s + 1]);
		if (t) {
			const a = Array.isArray(t) ? t[s] || ge : t;
			l = ct(a, l);
		}
		r.push(l);
	}
	return r;
}
function Jw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const o = e.length;
	if ((Gl(o === t.length), o === 1)) return () => t[0];
	if (o === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const s = Zw(t, r, i),
		l = s.length,
		a = (u) => {
			let c = 0;
			if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = ii(e[c], e[c + 1], u);
			return s[c](f);
		};
	return n ? (u) => a(Wt(e[0], e[o - 1], u)) : a;
}
function qw(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = ii(0, t, r);
		e.push(H(n, 1, i));
	}
}
function ex(e) {
	const t = [0];
	return qw(t, e.length - 1), t;
}
function tx(e, t) {
	return e.map((n) => n * t);
}
function nx(e, t) {
	return e.map(() => t || _m).splice(0, e.length - 1);
}
function No({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut",
}) {
	const i = zw(r) ? r.map(pf) : pf(r),
		o = { done: !1, value: t[0] },
		s = tx(n && n.length === t.length ? n : ex(t), e),
		l = Jw(s, t, { ease: Array.isArray(i) ? i : nx(t, i) });
	return {
		calculatedDuration: e,
		next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
	};
}
const vf = 2e4;
function rx(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < vf; ) (t += n), (r = e.next(t));
	return t >= vf ? 1 / 0 : t;
}
const ix = (e) => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: () => I.update(t, !0),
			stop: () => gt(t),
			now: () => (ae.isProcessing ? ae.timestamp : Bt.now()),
		};
	},
	ox = { decay: df, inertia: df, tween: No, keyframes: No, spring: km },
	sx = (e) => e / 100;
class Cu extends wm {
	constructor({ KeyframeResolver: t = wu, ...n }) {
		super(n),
			(this.holdTime = null),
			(this.startTime = null),
			(this.cancelTime = null),
			(this.currentTime = 0),
			(this.playbackSpeed = 1),
			(this.pendingPlayState = "running"),
			(this.state = "idle"),
			(this.stop = () => {
				if (
					(this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
				)
					return;
				this.teardown();
				const { onStop: l } = this.options;
				l && l();
			});
		const { name: r, motionValue: i, keyframes: o } = this.options,
			s = (l, a) => this.onKeyframesResolved(l, a);
		r && i && i.owner
			? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
			: (this.resolver = new t(o, s, r, i)),
			this.resolver.scheduleResolve();
	}
	initPlayback(t) {
		const {
				type: n = "keyframes",
				repeat: r = 0,
				repeatDelay: i = 0,
				repeatType: o,
				velocity: s = 0,
			} = this.options,
			l = ox[n] || No;
		let a, u;
		l !== No &&
			typeof t[0] != "number" &&
			((a = ct(sx, Nm(t[0], t[1]))), (t = [0, 100]));
		const c = l({ ...this.options, keyframes: t });
		o === "mirror" &&
			(u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
			c.calculatedDuration === null && (c.calculatedDuration = rx(c));
		const { calculatedDuration: f } = c,
			d = f + i,
			g = d * (r + 1) - i;
		return {
			generator: c,
			mirroredGenerator: u,
			mapPercentToKeyframes: a,
			calculatedDuration: f,
			resolvedDuration: d,
			totalDuration: g,
		};
	}
	onPostResolved() {
		const { autoplay: t = !0 } = this.options;
		this.play(),
			this.pendingPlayState === "paused" || !t
				? this.pause()
				: (this.state = this.pendingPlayState);
	}
	tick(t, n = !1) {
		const { resolved: r } = this;
		if (!r) {
			const { keyframes: C } = this.options;
			return { done: !0, value: C[C.length - 1] };
		}
		const {
			finalKeyframe: i,
			generator: o,
			mirroredGenerator: s,
			mapPercentToKeyframes: l,
			keyframes: a,
			calculatedDuration: u,
			totalDuration: c,
			resolvedDuration: f,
		} = r;
		if (this.startTime === null) return o.next(0);
		const {
			delay: d,
			repeat: g,
			repeatType: v,
			repeatDelay: w,
			onUpdate: S,
		} = this.options;
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 &&
			  (this.startTime = Math.min(t - c / this.speed, this.startTime)),
			n
				? (this.currentTime = t)
				: this.holdTime !== null
				? (this.currentTime = this.holdTime)
				: (this.currentTime = Math.round(t - this.startTime) * this.speed);
		const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
			h = this.speed >= 0 ? p < 0 : p > c;
		(this.currentTime = Math.max(p, 0)),
			this.state === "finished" &&
				this.holdTime === null &&
				(this.currentTime = c);
		let m = this.currentTime,
			x = o;
		if (g) {
			const C = Math.min(this.currentTime, c) / f;
			let D = Math.floor(C),
				L = C % 1;
			!L && C >= 1 && (L = 1),
				L === 1 && D--,
				(D = Math.min(D, g + 1)),
				!!(D % 2) &&
					(v === "reverse"
						? ((L = 1 - L), w && (L -= w / f))
						: v === "mirror" && (x = s)),
				(m = Wt(0, 1, L) * f);
		}
		const P = h ? { done: !1, value: a[0] } : x.next(m);
		l && (P.value = l(P.value));
		let { done: T } = P;
		!h &&
			u !== null &&
			(T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
		const j =
			this.holdTime === null &&
			(this.state === "finished" || (this.state === "running" && T));
		return (
			j && i !== void 0 && (P.value = is(a, this.options, i)),
			S && S(P.value),
			j && this.finish(),
			P
		);
	}
	get duration() {
		const { resolved: t } = this;
		return t ? ft(t.calculatedDuration) : 0;
	}
	get time() {
		return ft(this.currentTime);
	}
	set time(t) {
		(t = zt(t)),
			(this.currentTime = t),
			this.holdTime !== null || this.speed === 0
				? (this.holdTime = t)
				: this.driver && (this.startTime = this.driver.now() - t / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(t) {
		const n = this.playbackSpeed !== t;
		(this.playbackSpeed = t), n && (this.time = ft(this.currentTime));
	}
	play() {
		if (
			(this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
		) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		const { driver: t = ix, onPlay: n } = this.options;
		this.driver || (this.driver = t((i) => this.tick(i))), n && n();
		const r = this.driver.now();
		this.holdTime !== null
			? (this.startTime = r - this.holdTime)
			: (!this.startTime || this.state === "finished") && (this.startTime = r),
			this.state === "finished" && this.updateFinishedPromise(),
			(this.cancelTime = this.startTime),
			(this.holdTime = null),
			(this.state = "running"),
			this.driver.start();
	}
	pause() {
		var t;
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return;
		}
		(this.state = "paused"),
			(this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
	}
	complete() {
		this.state !== "running" && this.play(),
			(this.pendingPlayState = this.state = "finished"),
			(this.holdTime = null);
	}
	finish() {
		this.teardown(), (this.state = "finished");
		const { onComplete: t } = this.options;
		t && t();
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime),
			this.teardown(),
			this.updateFinishedPromise();
	}
	teardown() {
		(this.state = "idle"),
			this.stopDriver(),
			this.resolveFinishedPromise(),
			this.updateFinishedPromise(),
			(this.startTime = this.cancelTime = null),
			this.resolver.cancel();
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0));
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0);
	}
}
const Lm = (e) => Array.isArray(e) && typeof e[0] == "number";
function Am(e) {
	return !!(
		!e ||
		(typeof e == "string" && e in Tu) ||
		Lm(e) ||
		(Array.isArray(e) && e.every(Am))
	);
}
const Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	Tu = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: Sr([0, 0.65, 0.55, 1]),
		circOut: Sr([0.55, 0, 1, 0.45]),
		backIn: Sr([0.31, 0.01, 0.66, -0.59]),
		backOut: Sr([0.33, 1.53, 0.69, 0.99]),
	};
function lx(e) {
	return Mm(e) || Tu.easeOut;
}
function Mm(e) {
	if (e) return Lm(e) ? Sr(e) : Array.isArray(e) ? e.map(lx) : Tu[e];
}
function ax(
	e,
	t,
	n,
	{
		delay: r = 0,
		duration: i = 300,
		repeat: o = 0,
		repeatType: s = "loop",
		ease: l,
		times: a,
	} = {}
) {
	const u = { [t]: n };
	a && (u.offset = a);
	const c = Mm(l);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? "linear" : c,
			fill: "both",
			iterations: o + 1,
			direction: s === "reverse" ? "alternate" : "normal",
		})
	);
}
const ux = ym(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
	cx = new Set(["opacity", "clipPath", "filter", "transform"]),
	Lo = 10,
	fx = 2e4;
function dx(e) {
	return e.type === "spring" || e.name === "backgroundColor" || !Am(e.ease);
}
function hx(e, t) {
	const n = new Cu({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0,
	});
	let r = { done: !1, value: e[0] };
	const i = [];
	let o = 0;
	for (; !r.done && o < fx; ) (r = n.sample(o)), i.push(r.value), (o += Lo);
	return { times: void 0, keyframes: i, duration: o - Lo, ease: "linear" };
}
class yf extends wm {
	constructor(t) {
		super(t);
		const { name: n, motionValue: r, keyframes: i } = this.options;
		(this.resolver = new vm(i, (o, s) => this.onKeyframesResolved(o, s), n, r)),
			this.resolver.scheduleResolve();
	}
	initPlayback(t, n) {
		var r;
		let {
			duration: i = 300,
			times: o,
			ease: s,
			type: l,
			motionValue: a,
			name: u,
		} = this.options;
		if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
		if (dx(this.options)) {
			const { onComplete: f, onUpdate: d, motionValue: g, ...v } = this.options,
				w = hx(t, v);
			(t = w.keyframes),
				t.length === 1 && (t[1] = t[0]),
				(i = w.duration),
				(o = w.times),
				(s = w.ease),
				(l = "keyframes");
		}
		const c = ax(a.owner.current, u, t, {
			...this.options,
			duration: i,
			times: o,
			ease: s,
		});
		return (
			(c.startTime = Bt.now()),
			this.pendingTimeline
				? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
				: (c.onfinish = () => {
						const { onComplete: f } = this.options;
						a.set(is(t, this.options, n)),
							f && f(),
							this.cancel(),
							this.resolveFinishedPromise();
				  }),
			{ animation: c, duration: i, times: o, type: l, ease: s, keyframes: t }
		);
	}
	get duration() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { duration: n } = t;
		return ft(n);
	}
	get time() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { animation: n } = t;
		return ft(n.currentTime || 0);
	}
	set time(t) {
		const { resolved: n } = this;
		if (!n) return;
		const { animation: r } = n;
		r.currentTime = zt(t);
	}
	get speed() {
		const { resolved: t } = this;
		if (!t) return 1;
		const { animation: n } = t;
		return n.playbackRate;
	}
	set speed(t) {
		const { resolved: n } = this;
		if (!n) return;
		const { animation: r } = n;
		r.playbackRate = t;
	}
	get state() {
		const { resolved: t } = this;
		if (!t) return "idle";
		const { animation: n } = t;
		return n.playState;
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t;
		else {
			const { resolved: n } = this;
			if (!n) return ge;
			const { animation: r } = n;
			(r.timeline = t), (r.onfinish = null);
		}
		return ge;
	}
	play() {
		if (this.isStopped) return;
		const { resolved: t } = this;
		if (!t) return;
		const { animation: n } = t;
		n.playState === "finished" && this.updateFinishedPromise(), n.play();
	}
	pause() {
		const { resolved: t } = this;
		if (!t) return;
		const { animation: n } = t;
		n.pause();
	}
	stop() {
		if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
			return;
		const { resolved: t } = this;
		if (!t) return;
		const {
			animation: n,
			keyframes: r,
			duration: i,
			type: o,
			ease: s,
			times: l,
		} = t;
		if (!(n.playState === "idle" || n.playState === "finished")) {
			if (this.time) {
				const {
						motionValue: a,
						onUpdate: u,
						onComplete: c,
						...f
					} = this.options,
					d = new Cu({
						...f,
						keyframes: r,
						duration: i,
						type: o,
						ease: s,
						times: l,
						isGenerator: !0,
					}),
					g = zt(this.time);
				a.setWithVelocity(d.sample(g - Lo).value, d.sample(g).value, Lo);
			}
			this.cancel();
		}
	}
	complete() {
		const { resolved: t } = this;
		t && t.animation.finish();
	}
	cancel() {
		const { resolved: t } = this;
		t && t.animation.cancel();
	}
	static supports(t) {
		const {
			motionValue: n,
			name: r,
			repeatDelay: i,
			repeatType: o,
			damping: s,
			type: l,
		} = t;
		return (
			ux() &&
			r &&
			cx.has(r) &&
			n &&
			n.owner &&
			n.owner.current instanceof HTMLElement &&
			!n.owner.getProps().onUpdate &&
			!i &&
			o !== "mirror" &&
			s !== 0 &&
			l !== "inertia"
		);
	}
}
function px(e, t) {
	let n;
	const r = () => {
		const { currentTime: i } = t,
			s = (i === null ? 0 : i.value) / 100;
		n !== s && e(s), (n = s);
	};
	return I.update(r, !0), () => gt(r);
}
const mx = ym(() => window.ScrollTimeline !== void 0);
class gx {
	constructor(t) {
		(this.stop = () => this.runAll("stop")),
			(this.animations = t.filter(Boolean));
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n);
	}
	getAll(t) {
		return this.animations[0][t];
	}
	setAll(t, n) {
		for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
	}
	attachTimeline(t) {
		const n = this.animations.map((r) => {
			if (mx() && r.attachTimeline) r.attachTimeline(t);
			else
				return (
					r.pause(),
					px((i) => {
						r.time = r.duration * i;
					}, t)
				);
		});
		return () => {
			n.forEach((r, i) => {
				r && r(), this.animations[i].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(t) {
		this.setAll("time", t);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(t) {
		this.setAll("speed", t);
	}
	get duration() {
		let t = 0;
		for (let n = 0; n < this.animations.length; n++)
			t = Math.max(t, this.animations[n].duration);
		return t;
	}
	runAll(t) {
		this.animations.forEach((n) => n[t]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
}
const Eu =
	(e, t, n, r = {}, i, o) =>
	(s) => {
		const l = yu(r, e) || {},
			a = l.delay || r.delay || 0;
		let { elapsed: u = 0 } = r;
		u = u - zt(a);
		let c = {
			keyframes: Array.isArray(n) ? n : [null, n],
			ease: "easeOut",
			velocity: t.getVelocity(),
			...l,
			delay: -u,
			onUpdate: (d) => {
				t.set(d), l.onUpdate && l.onUpdate(d);
			},
			onComplete: () => {
				s(), l.onComplete && l.onComplete();
			},
			name: e,
			motionValue: t,
			element: o ? void 0 : i,
		};
		Y1(l) || (c = { ...c, ...Q1(e, c) }),
			c.duration && (c.duration = zt(c.duration)),
			c.repeatDelay && (c.repeatDelay = zt(c.repeatDelay)),
			c.from !== void 0 && (c.keyframes[0] = c.from);
		let f = !1;
		if (
			((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
				((c.duration = 0), c.delay === 0 && (f = !0)),
			f && !o && t.get() !== void 0)
		) {
			const d = is(c.keyframes, l);
			if (d !== void 0)
				return (
					I.update(() => {
						c.onUpdate(d), c.onComplete();
					}),
					new gx([])
				);
		}
		return !o && yf.supports(c) ? new yf(c) : new Cu(c);
	};
function Ao(e) {
	return !!(me(e) && e.add);
}
function ju(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Ru(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
class Nu {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return ju(this.subscriptions, t), () => Ru(this.subscriptions, t);
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let o = 0; o < i; o++) {
					const s = this.subscriptions[o];
					s && s(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const wf = 30,
	vx = (e) => !isNaN(parseFloat(e));
class yx {
	constructor(t, n = {}) {
		(this.version = "11.2.10"),
			(this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (r, i = !0) => {
				const o = Bt.now();
				this.updatedAt !== o && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(r),
					this.current !== this.prev &&
						this.events.change &&
						this.events.change.notify(this.current),
					i &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.owner = n.owner);
	}
	setCurrent(t) {
		(this.current = t),
			(this.updatedAt = Bt.now()),
			this.canTrackVelocity === null &&
				t !== void 0 &&
				(this.canTrackVelocity = vx(this.current));
	}
	setPrevFrameValue(t = this.current) {
		(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
	}
	onChange(t) {
		return this.on("change", t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new Nu());
		const r = this.events[t].add(n);
		return t === "change"
			? () => {
					r(),
						I.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, n, r) {
		this.set(n),
			(this.prev = void 0),
			(this.prevFrameValue = t),
			(this.prevUpdatedAt = this.updatedAt - r);
	}
	jump(t, n = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			n && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		const t = Bt.now();
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			t - this.updatedAt > wf
		)
			return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, wf);
		return xm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function oi(e, t) {
	return new yx(e, t);
}
function wx(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, oi(n));
}
function xx(e, t) {
	const n = rs(e, t);
	let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
	o = { ...o, ...r };
	for (const s in o) {
		const l = C1(o[s]);
		wx(e, s, l);
	}
}
function Vm(e) {
	return e.getProps()[Dp];
}
function Sx({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function Dm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	var o;
	let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
	const u = e.getValue("willChange");
	r && (s = r);
	const c = [],
		f = i && e.animationState && e.animationState.getState()[i];
	for (const d in a) {
		const g = e.getValue(
				d,
				(o = e.latestValues[d]) !== null && o !== void 0 ? o : null
			),
			v = a[d];
		if (v === void 0 || (f && Sx(f, d))) continue;
		const w = { delay: n, elapsed: 0, ...yu(s || {}, d) };
		let S = !1;
		if (window.HandoffAppearAnimations) {
			const h = Vm(e);
			if (h) {
				const m = window.HandoffAppearAnimations(h, d, g, I);
				m !== null && ((w.elapsed = m), (S = !0));
			}
		}
		g.start(
			Eu(d, g, v, e.shouldReduceMotion && kn.has(d) ? { type: !1 } : w, e, S)
		);
		const p = g.animation;
		p && (Ao(u) && (u.add(d), p.then(() => u.remove(d))), c.push(p));
	}
	return (
		l &&
			Promise.all(c).then(() => {
				I.update(() => {
					l && xx(e, l);
				});
			}),
		c
	);
}
function ea(e, t, n = {}) {
	var r;
	const i = rs(
		e,
		t,
		n.type === "exit"
			? (r = e.presenceContext) === null || r === void 0
				? void 0
				: r.custom
			: void 0
	);
	let { transition: o = e.getDefaultTransition() || {} } = i || {};
	n.transitionOverride && (o = n.transitionOverride);
	const s = i ? () => Promise.all(Dm(e, i, n)) : () => Promise.resolve(),
		l =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: f,
							staggerDirection: d,
						} = o;
						return kx(e, t, c + u, f, d, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = o;
	if (a) {
		const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
		return u().then(() => c());
	} else return Promise.all([s(), l(n.delay)]);
}
function kx(e, t, n = 0, r = 0, i = 1, o) {
	const s = [],
		l = (e.variantChildren.size - 1) * r,
		a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
	return (
		Array.from(e.variantChildren)
			.sort(Px)
			.forEach((u, c) => {
				u.notify("AnimationStart", t),
					s.push(
						ea(u, t, { ...o, delay: n + a(c) }).then(() =>
							u.notify("AnimationComplete", t)
						)
					);
			}),
		Promise.all(s)
	);
}
function Px(e, t) {
	return e.sortNodePosition(t);
}
function _x(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map((o) => ea(e, o, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = ea(e, t, n);
	else {
		const i = typeof t == "function" ? rs(e, t, n.custom) : t;
		r = Promise.all(Dm(e, i, n));
	}
	return r.then(() => {
		I.postRender(() => {
			e.notify("AnimationComplete", t);
		});
	});
}
const Cx = [...lu].reverse(),
	Tx = lu.length;
function Ex(e) {
	return (t) =>
		Promise.all(t.map(({ animation: n, options: r }) => _x(e, n, r)));
}
function jx(e) {
	let t = Ex(e);
	const n = Nx();
	let r = !0;
	const i = (a) => (u, c) => {
		var f;
		const d = rs(
			e,
			c,
			a === "exit"
				? (f = e.presenceContext) === null || f === void 0
					? void 0
					: f.custom
				: void 0
		);
		if (d) {
			const { transition: g, transitionEnd: v, ...w } = d;
			u = { ...u, ...w, ...v };
		}
		return u;
	};
	function o(a) {
		t = a(e);
	}
	function s(a) {
		const u = e.getProps(),
			c = e.getVariantContext(!0) || {},
			f = [],
			d = new Set();
		let g = {},
			v = 1 / 0;
		for (let S = 0; S < Tx; S++) {
			const p = Cx[S],
				h = n[p],
				m = u[p] !== void 0 ? u[p] : c[p],
				x = ti(m),
				P = p === a ? h.isActive : null;
			P === !1 && (v = S);
			let T = m === c[p] && m !== u[p] && x;
			if (
				(T && r && e.manuallyAnimateOnMount && (T = !1),
				(h.protectedKeys = { ...g }),
				(!h.isActive && P === null) ||
					(!m && !h.prevProp) ||
					es(m) ||
					typeof m == "boolean")
			)
				continue;
			let C =
					Rx(h.prevProp, m) ||
					(p === a && h.isActive && !T && x) ||
					(S > v && x),
				D = !1;
			const L = Array.isArray(m) ? m : [m];
			let te = L.reduce(i(p), {});
			P === !1 && (te = {});
			const { prevResolvedValues: yt = {} } = h,
				Xt = { ...yt, ...te },
				lr = (oe) => {
					(C = !0),
						d.has(oe) && ((D = !0), d.delete(oe)),
						(h.needsAnimating[oe] = !0);
					const Ee = e.getValue(oe);
					Ee && (Ee.liveStyle = !1);
				};
			for (const oe in Xt) {
				const Ee = te[oe],
					Zt = yt[oe];
				if (g.hasOwnProperty(oe)) continue;
				let E = !1;
				Kl(Ee) && Kl(Zt) ? (E = !rm(Ee, Zt)) : (E = Ee !== Zt),
					E
						? Ee != null
							? lr(oe)
							: d.add(oe)
						: Ee !== void 0 && d.has(oe)
						? lr(oe)
						: (h.protectedKeys[oe] = !0);
			}
			(h.prevProp = m),
				(h.prevResolvedValues = te),
				h.isActive && (g = { ...g, ...te }),
				r && e.blockInitialAnimation && (C = !1),
				C &&
					(!T || D) &&
					f.push(...L.map((oe) => ({ animation: oe, options: { type: p } })));
		}
		if (d.size) {
			const S = {};
			d.forEach((p) => {
				const h = e.getBaseTarget(p),
					m = e.getValue(p);
				m && (m.liveStyle = !0), (S[p] = h ?? null);
			}),
				f.push({ animation: S });
		}
		let w = !!f.length;
		return (
			r &&
				(u.initial === !1 || u.initial === u.animate) &&
				!e.manuallyAnimateOnMount &&
				(w = !1),
			(r = !1),
			w ? t(f) : Promise.resolve()
		);
	}
	function l(a, u) {
		var c;
		if (n[a].isActive === u) return Promise.resolve();
		(c = e.variantChildren) === null ||
			c === void 0 ||
			c.forEach((d) => {
				var g;
				return (g = d.animationState) === null || g === void 0
					? void 0
					: g.setActive(a, u);
			}),
			(n[a].isActive = u);
		const f = s(a);
		for (const d in n) n[d].protectedKeys = {};
		return f;
	}
	return {
		animateChanges: s,
		setActive: l,
		setAnimateFunction: o,
		getState: () => n,
	};
}
function Rx(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !rm(t, e) : !1;
}
function en(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	};
}
function Nx() {
	return {
		animate: en(!0),
		whileInView: en(),
		whileHover: en(),
		whileTap: en(),
		whileDrag: en(),
		whileFocus: en(),
		exit: en(),
	};
}
class Lx extends Yt {
	constructor(t) {
		super(t), t.animationState || (t.animationState = jx(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), es(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let Ax = 0;
class Mx extends Yt {
	constructor() {
		super(...arguments), (this.id = Ax++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
			{ isPresent: r } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		const i = this.node.animationState.setActive("exit", !t);
		n && !t && i.then(() => n(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const Vx = { animation: { Feature: Lx }, exit: { Feature: Mx } },
	xf = (e, t) => Math.abs(e - t);
function Dx(e, t) {
	const n = xf(e.x, t.x),
		r = xf(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class Om {
	constructor(
		t,
		n,
		{ transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const f = Us(this.lastMoveEventInfo, this.history),
					d = this.startEvent !== null,
					g = Dx(f.offset, { x: 0, y: 0 }) >= 3;
				if (!d && !g) return;
				const { point: v } = f,
					{ timestamp: w } = ae;
				this.history.push({ ...v, timestamp: w });
				const { onStart: S, onMove: p } = this.handlers;
				d ||
					(S && S(this.lastMoveEvent, f),
					(this.startEvent = this.lastMoveEvent)),
					p && p(this.lastMoveEvent, f);
			}),
			(this.handlePointerMove = (f, d) => {
				(this.lastMoveEvent = f),
					(this.lastMoveEventInfo = Bs(d, this.transformPagePoint)),
					I.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (f, d) => {
				this.end();
				const { onEnd: g, onSessionEnd: v, resumeAnimation: w } = this.handlers;
				if (
					(this.dragSnapToOrigin && w && w(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return;
				const S = Us(
					f.type === "pointercancel"
						? this.lastMoveEventInfo
						: Bs(d, this.transformPagePoint),
					this.history
				);
				this.startEvent && g && g(f, S), v && v(f, S);
			}),
			!Jp(t))
		)
			return;
		(this.dragSnapToOrigin = o),
			(this.handlers = n),
			(this.transformPagePoint = r),
			(this.contextWindow = i || window);
		const s = ns(t),
			l = Bs(s, this.transformPagePoint),
			{ point: a } = l,
			{ timestamp: u } = ae;
		this.history = [{ ...a, timestamp: u }];
		const { onSessionStart: c } = n;
		c && c(t, Us(l, this.history)),
			(this.removeListeners = ct(
				ut(this.contextWindow, "pointermove", this.handlePointerMove),
				ut(this.contextWindow, "pointerup", this.handlePointerUp),
				ut(this.contextWindow, "pointercancel", this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), gt(this.updatePoint);
	}
}
function Bs(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Sf(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function Us({ point: e }, t) {
	return {
		point: e,
		delta: Sf(e, Fm(t)),
		offset: Sf(e, Ox(t)),
		velocity: Fx(t, 0.1),
	};
}
function Ox(e) {
	return e[0];
}
function Fm(e) {
	return e[e.length - 1];
}
function Fx(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const i = Fm(e);
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > zt(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const o = ft(i.timestamp - r.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
	return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Me(e) {
	return e.max - e.min;
}
function ta(e, t = 0, n = 0.01) {
	return Math.abs(e - t) <= n;
}
function kf(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = H(t.min, t.max, e.origin)),
		(e.scale = Me(n) / Me(t)),
		(ta(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = H(n.min, n.max, e.origin) - e.originPoint),
		(ta(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vr(e, t, n, r) {
	kf(e.x, t.x, n.x, r ? r.originX : void 0),
		kf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Pf(e, t, n) {
	(e.min = n.min + t.min), (e.max = e.min + Me(t));
}
function Ix(e, t, n) {
	Pf(e.x, t.x, n.x), Pf(e.y, t.y, n.y);
}
function _f(e, t, n) {
	(e.min = t.min - n.min), (e.max = e.min + Me(t));
}
function Dr(e, t, n) {
	_f(e.x, t.x, n.x), _f(e.y, t.y, n.y);
}
function zx(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? H(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function Cf(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function Bx(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: Cf(e.x, n, i), y: Cf(e.y, t, r) };
}
function Tf(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ux(e, t) {
	return { x: Tf(e.x, t.x), y: Tf(e.y, t.y) };
}
function $x(e, t) {
	let n = 0.5;
	const r = Me(e),
		i = Me(t);
	return (
		i > r
			? (n = ii(t.min, t.max - r, e.min))
			: r > i && (n = ii(e.min, e.max - i, t.min)),
		Wt(0, 1, n)
	);
}
function Wx(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min),
		t.max !== void 0 && (n.max = t.max - e.min),
		n
	);
}
const na = 0.35;
function Hx(e = na) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = na),
		{ x: Ef(e, "left", "right"), y: Ef(e, "top", "bottom") }
	);
}
function Ef(e, t, n) {
	return { min: jf(e, t), max: jf(e, n) };
}
function jf(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
const Rf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Bn = () => ({ x: Rf(), y: Rf() }),
	Nf = () => ({ min: 0, max: 0 }),
	Y = () => ({ x: Nf(), y: Nf() });
function Fe(e) {
	return [e("x"), e("y")];
}
function Im({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Kx({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function bx(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function $s(e) {
	return e === void 0 || e === 1;
}
function ra({ scale: e, scaleX: t, scaleY: n }) {
	return !$s(e) || !$s(t) || !$s(n);
}
function rn(e) {
	return (
		ra(e) ||
		zm(e) ||
		e.z ||
		e.rotate ||
		e.rotateX ||
		e.rotateY ||
		e.skewX ||
		e.skewY
	);
}
function zm(e) {
	return Lf(e.x) || Lf(e.y);
}
function Lf(e) {
	return e && e !== "0%";
}
function Mo(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i;
}
function Af(e, t, n, r, i) {
	return i !== void 0 && (e = Mo(e, i, r)), Mo(e, n, r) + t;
}
function ia(e, t = 0, n = 1, r, i) {
	(e.min = Af(e.min, t, n, r, i)), (e.max = Af(e.max, t, n, r, i));
}
function Bm(e, { x: t, y: n }) {
	ia(e.x, t.translate, t.scale, t.originPoint),
		ia(e.y, n.translate, n.scale, n.originPoint);
}
function Gx(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let o, s;
	for (let l = 0; l < i; l++) {
		(o = n[l]), (s = o.projectionDelta);
		const a = o.instance;
		(a && a.style && a.style.display === "contents") ||
			(r &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				Un(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Bm(e, s)),
			r && rn(o.latestValues) && Un(e, o.latestValues));
	}
	(t.x = Mf(t.x)), (t.y = Mf(t.y));
}
function Mf(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
		? e
		: 1;
}
function _t(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function Vf(e, t, [n, r, i]) {
	const o = t[i] !== void 0 ? t[i] : 0.5,
		s = H(e.min, e.max, o);
	ia(e, t[n], t[r], s, t.scale);
}
const Qx = ["x", "scaleX", "originX"],
	Yx = ["y", "scaleY", "originY"];
function Un(e, t) {
	Vf(e.x, t, Qx), Vf(e.y, t, Yx);
}
function Um(e, t) {
	return Im(bx(e.getBoundingClientRect(), t));
}
function Xx(e, t, n) {
	const r = Um(e, n),
		{ scroll: i } = t;
	return i && (_t(r.x, i.offset.x), _t(r.y, i.offset.y)), r;
}
const $m = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	Zx = new WeakMap();
class Jx {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = Y()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const i = (c) => {
				const { dragSnapToOrigin: f } = this.getProps();
				f ? this.pauseAnimation() : this.stopAnimation(),
					n && this.snapToCursor(ns(c, "page").point);
			},
			o = (c, f) => {
				const { drag: d, dragPropagation: g, onDragStart: v } = this.getProps();
				if (
					d &&
					!g &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = em(d)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					Fe((S) => {
						let p = this.getAxisMotionValue(S).get() || 0;
						if (nt.test(p)) {
							const { projection: h } = this.visualElement;
							if (h && h.layout) {
								const m = h.layout.layoutBox[S];
								m && (p = Me(m) * (parseFloat(p) / 100));
							}
						}
						this.originPoint[S] = p;
					}),
					v && I.postRender(() => v(c, f));
				const { animationState: w } = this.visualElement;
				w && w.setActive("whileDrag", !0);
			},
			s = (c, f) => {
				const {
					dragPropagation: d,
					dragDirectionLock: g,
					onDirectionLock: v,
					onDrag: w,
				} = this.getProps();
				if (!d && !this.openGlobalLock) return;
				const { offset: S } = f;
				if (g && this.currentDirection === null) {
					(this.currentDirection = qx(S)),
						this.currentDirection !== null && v && v(this.currentDirection);
					return;
				}
				this.updateAxis("x", f.point, S),
					this.updateAxis("y", f.point, S),
					this.visualElement.render(),
					w && w(c, f);
			},
			l = (c, f) => this.stop(c, f),
			a = () =>
				Fe((c) => {
					var f;
					return (
						this.getAnimationState(c) === "paused" &&
						((f = this.getAxisMotionValue(c).animation) === null || f === void 0
							? void 0
							: f.play())
					);
				}),
			{ dragSnapToOrigin: u } = this.getProps();
		this.panSession = new Om(
			t,
			{
				onSessionStart: i,
				onStart: o,
				onMove: s,
				onSessionEnd: l,
				resumeAnimation: a,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: $m(this.visualElement),
			}
		);
	}
	stop(t, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: i } = n;
		this.startAnimation(i);
		const { onDragEnd: o } = this.getProps();
		o && I.postRender(() => o(t, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive("whileDrag", !1);
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps();
		if (!r || !Ii(t, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(t);
		let s = this.originPoint[t] + r[t];
		this.constraints &&
			this.constraints[t] &&
			(s = zx(s, this.constraints[t], this.elastic[t])),
			o.set(s);
	}
	resolveConstraints() {
		var t;
		const { dragConstraints: n, dragElastic: r } = this.getProps(),
			i =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null || t === void 0
					? void 0
					: t.layout,
			o = this.constraints;
		n && In(n)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: n && i
			? (this.constraints = Bx(i.layoutBox, n))
			: (this.constraints = !1),
			(this.elastic = Hx(r)),
			o !== this.constraints &&
				i &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Fe((s) => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(s) &&
						(this.constraints[s] = Wx(i.layoutBox[s], this.constraints[s]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
		if (!t || !In(t)) return !1;
		const r = t.current,
			{ projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = Xx(r, i.root, this.visualElement.getTransformPagePoint());
		let s = Ux(i.layout.layoutBox, o);
		if (n) {
			const l = n(Kx(s));
			(this.hasMutatedConstraints = !!l), l && (s = Im(l));
		}
		return s;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: o,
				dragSnapToOrigin: s,
				onDragTransitionEnd: l,
			} = this.getProps(),
			a = this.constraints || {},
			u = Fe((c) => {
				if (!Ii(c, n, this.currentDirection)) return;
				let f = (a && a[c]) || {};
				s && (f = { min: 0, max: 0 });
				const d = i ? 200 : 1e6,
					g = i ? 40 : 1e7,
					v = {
						type: "inertia",
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: g,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...f,
					};
				return this.startAxisValueAnimation(c, v);
			});
		return Promise.all(u).then(l);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return r.start(Eu(t, r, 0, n, this.visualElement));
	}
	stopAnimation() {
		Fe((t) => this.getAxisMotionValue(t).stop());
	}
	pauseAnimation() {
		Fe((t) => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
				? void 0
				: n.pause();
		});
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
			? void 0
			: n.state;
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n];
		return (
			i ||
			this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
		);
	}
	snapToCursor(t) {
		Fe((n) => {
			const { drag: r } = this.getProps();
			if (!Ii(n, r, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: s, max: l } = i.layout.layoutBox[n];
				o.set(t[n] - H(s, l, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!In(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		Fe((s) => {
			const l = this.getAxisMotionValue(s);
			if (l && this.constraints !== !1) {
				const a = l.get();
				i[s] = $x({ min: a, max: a }, this.constraints[s]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, "") : "none"),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			Fe((s) => {
				if (!Ii(s, t, null)) return;
				const l = this.getAxisMotionValue(s),
					{ min: a, max: u } = this.constraints[s];
				l.set(H(a, u, i[s]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Zx.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = ut(t, "pointerdown", (a) => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(a);
			}),
			r = () => {
				const { dragConstraints: a } = this.getProps();
				In(a) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			o = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
		const s = lt(window, "resize", () => this.scalePositionWithinConstraints()),
			l = i.addEventListener(
				"didUpdate",
				({ delta: a, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Fe((c) => {
							const f = this.getAxisMotionValue(c);
							f &&
								((this.originPoint[c] += a[c].translate),
								f.set(f.get() + a[c].translate));
						}),
						this.visualElement.render());
				}
			);
		return () => {
			s(), n(), o(), l && l();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: s = na,
				dragMomentum: l = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: s,
			dragMomentum: l,
		};
	}
}
function Ii(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function qx(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class eS extends Yt {
	constructor(t) {
		super(t),
			(this.removeGroupControls = ge),
			(this.removeListeners = ge),
			(this.controls = new Jx(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || ge);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const Df = (e) => (t, n) => {
	e && I.postRender(() => e(t, n));
};
class tS extends Yt {
	constructor() {
		super(...arguments), (this.removePointerDownListener = ge);
	}
	onPointerDown(t) {
		this.session = new Om(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: $m(this.node),
		});
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i,
		} = this.node.getProps();
		return {
			onSessionStart: Df(t),
			onStart: Df(n),
			onMove: r,
			onEnd: (o, s) => {
				delete this.session, i && I.postRender(() => i(o, s));
			},
		};
	}
	mount() {
		this.removePointerDownListener = ut(this.node.current, "pointerdown", (t) =>
			this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function nS() {
	const e = k.useContext(ru);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: n, register: r } = e,
		i = k.useId();
	return k.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Of(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const gr = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (N.test(e)) e = parseFloat(e);
				else return e;
			const n = Of(e, t.target.x),
				r = Of(e, t.target.y);
			return `${n}% ${r}%`;
		},
	},
	rS = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = Ht.parse(e);
			if (i.length > 5) return r;
			const o = Ht.createTransformer(e),
				s = typeof i[0] != "number" ? 1 : 0,
				l = n.x.scale * t.x,
				a = n.y.scale * t.y;
			(i[0 + s] /= l), (i[1 + s] /= a);
			const u = H(l, a, 0.5);
			return (
				typeof i[2 + s] == "number" && (i[2 + s] /= u),
				typeof i[3 + s] == "number" && (i[3 + s] /= u),
				o(i)
			);
		},
	};
class iS extends k.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i,
			} = this.props,
			{ projection: o } = t;
		e1(oS),
			o &&
				(n.group && n.group.add(o),
				r && r.register && i && r.register(o),
				o.root.didUpdate(),
				o.addEventListener("animationComplete", () => {
					this.safeToRemove();
				}),
				o.setOptions({
					...o.options,
					onExitComplete: () => this.safeToRemove(),
				})),
			(qi.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: o,
			} = this.props,
			s = r.projection;
		return (
			s &&
				((s.isPresent = o),
				i || t.layoutDependency !== n || n === void 0
					? s.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== o &&
					(o
						? s.promote()
						: s.relegate() ||
						  I.postRender(() => {
								const l = s.getStack();
								(!l || !l.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			su.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
			} = this.props,
			{ projection: i } = t;
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			r && r.deregister && r.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function Wm(e) {
	const [t, n] = nS(),
		r = k.useContext(Ip);
	return y.jsx(iS, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: k.useContext(zp),
		isPresent: t,
		safeToRemove: n,
	});
}
const oS = {
		borderRadius: {
			...gr,
			applyTo: [
				"borderTopLeftRadius",
				"borderTopRightRadius",
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
			],
		},
		borderTopLeftRadius: gr,
		borderTopRightRadius: gr,
		borderBottomLeftRadius: gr,
		borderBottomRightRadius: gr,
		boxShadow: rS,
	},
	Hm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	sS = Hm.length,
	Ff = (e) => (typeof e == "string" ? parseFloat(e) : e),
	If = (e) => typeof e == "number" || N.test(e);
function lS(e, t, n, r, i, o) {
	i
		? ((e.opacity = H(0, n.opacity !== void 0 ? n.opacity : 1, aS(r))),
		  (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, uS(r))))
		: o &&
		  (e.opacity = H(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let s = 0; s < sS; s++) {
		const l = `border${Hm[s]}Radius`;
		let a = zf(t, l),
			u = zf(n, l);
		if (a === void 0 && u === void 0) continue;
		a || (a = 0),
			u || (u = 0),
			a === 0 || u === 0 || If(a) === If(u)
				? ((e[l] = Math.max(H(Ff(a), Ff(u), r), 0)),
				  (nt.test(u) || nt.test(a)) && (e[l] += "%"))
				: (e[l] = u);
	}
	(t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function zf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const aS = Km(0, 0.5, Em),
	uS = Km(0.5, 0.95, ge);
function Km(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(ii(e, t, r)));
}
function Bf(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
	Bf(e.x, t.x), Bf(e.y, t.y);
}
function Uf(e, t, n, r, i) {
	return (
		(e -= t), (e = Mo(e, 1 / n, r)), i !== void 0 && (e = Mo(e, 1 / i, r)), e
	);
}
function cS(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
	if (
		(nt.test(t) &&
			((t = parseFloat(t)), (t = H(s.min, s.max, t / 100) - s.min)),
		typeof t != "number")
	)
		return;
	let l = H(o.min, o.max, r);
	e === o && (l -= t),
		(e.min = Uf(e.min, t, n, l, i)),
		(e.max = Uf(e.max, t, n, l, i));
}
function $f(e, t, [n, r, i], o, s) {
	cS(e, t[n], t[r], t[i], t.scale, o, s);
}
const fS = ["x", "scaleX", "originX"],
	dS = ["y", "scaleY", "originY"];
function Wf(e, t, n, r) {
	$f(e.x, t, fS, n ? n.x : void 0, r ? r.x : void 0),
		$f(e.y, t, dS, n ? n.y : void 0, r ? r.y : void 0);
}
function Hf(e) {
	return e.translate === 0 && e.scale === 1;
}
function bm(e) {
	return Hf(e.x) && Hf(e.y);
}
function hS(e, t) {
	return (
		e.x.min === t.x.min &&
		e.x.max === t.x.max &&
		e.y.min === t.y.min &&
		e.y.max === t.y.max
	);
}
function Gm(e, t) {
	return (
		Math.round(e.x.min) === Math.round(t.x.min) &&
		Math.round(e.x.max) === Math.round(t.x.max) &&
		Math.round(e.y.min) === Math.round(t.y.min) &&
		Math.round(e.y.max) === Math.round(t.y.max)
	);
}
function Kf(e) {
	return Me(e.x) / Me(e.y);
}
class pS {
	constructor() {
		this.members = [];
	}
	add(t) {
		ju(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(Ru(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		const n = this.members.findIndex((i) => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				r = o;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: i } = t.options;
			i === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: n, resumingFrom: r } = t;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function bf(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		o = e.y.translate / t.y,
		s = (n == null ? void 0 : n.z) || 0;
	if (
		((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: f,
			rotateY: d,
			skewX: g,
			skewY: v,
		} = n;
		u && (r = `perspective(${u}px) ${r}`),
			c && (r += `rotate(${c}deg) `),
			f && (r += `rotateX(${f}deg) `),
			d && (r += `rotateY(${d}deg) `),
			g && (r += `skewX(${g}deg) `),
			v && (r += `skewY(${v}deg) `);
	}
	const l = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const mS = (e, t) => e.depth - t.depth;
class gS {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		ju(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		Ru(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(mS),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
function vS(e, t) {
	const n = Bt.now(),
		r = ({ timestamp: i }) => {
			const o = i - n;
			o >= t && (gt(r), e(o - t));
		};
	return I.read(r, !0), () => gt(r);
}
function yS(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function wS(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
function xS(e, t, n) {
	const r = me(e) ? e : oi(e);
	return r.start(Eu("", r, t, n)), r.animation;
}
const Ws = ["", "X", "Y", "Z"],
	SS = { visibility: "hidden" },
	Gf = 1e3;
let kS = 0;
const on = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function Hs(e, t, n, r) {
	const { latestValues: i } = t;
	i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Qm(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
	const { visualElement: t } = e.options;
	return t
		? Vm(t)
			? !0
			: e.parent && !e.parent.hasCheckedOptimisedAppear
			? Qm(e.parent)
			: !1
		: !1;
}
function Ym({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(s = {}, l = t == null ? void 0 : t()) {
			(this.id = kS++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(this.projectionUpdateScheduled = !1),
						(on.totalNodes =
							on.resolvedTargetDeltas =
							on.recalculatedProjection =
								0),
						this.nodes.forEach(CS),
						this.nodes.forEach(NS),
						this.nodes.forEach(LS),
						this.nodes.forEach(TS),
						yS(on);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = s),
				(this.root = l ? l.root || l : this),
				(this.path = l ? [...l.path, l] : []),
				(this.parent = l),
				(this.depth = l ? l.depth + 1 : 0);
			for (let a = 0; a < this.path.length; a++)
				this.path[a].shouldResetTransform = !0;
			this.root === this && (this.nodes = new gS());
		}
		addEventListener(s, l) {
			return (
				this.eventHandlers.has(s) || this.eventHandlers.set(s, new Nu()),
				this.eventHandlers.get(s).add(l)
			);
		}
		notifyListeners(s, ...l) {
			const a = this.eventHandlers.get(s);
			a && a.notify(...l);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		mount(s, l = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = wS(s)), (this.instance = s);
			const { layoutId: a, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(s),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				l && (u || a) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				e(s, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = vS(d, 250)),
						qi.hasAnimatedSinceResize &&
							((qi.hasAnimatedSinceResize = !1), this.nodes.forEach(Yf));
				});
			}
			a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					c &&
					(a || u) &&
					this.addEventListener(
						"didUpdate",
						({
							delta: f,
							hasLayoutChanged: d,
							hasRelativeTargetChanged: g,
							layout: v,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const w =
									this.options.transition || c.getDefaultTransition() || OS,
								{ onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
									c.getProps(),
								h = !this.targetLayout || !Gm(this.targetLayout, v) || g,
								m = !d && g;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								m ||
								(d && (h || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, m);
								const x = { ...yu(w, "layout"), onPlay: S, onComplete: p };
								(c.shouldReduceMotion || this.options.layoutRoot) &&
									((x.delay = 0), (x.type = !1)),
									this.startAnimation(x);
							} else
								d || Yf(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = v;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const s = this.getStack();
			s && s.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				gt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(AS),
				this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: s } = this.options;
			return s && s.getProps().transformTemplate;
		}
		willUpdate(s = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(window.HandoffCancelAllAnimations &&
					Qm(this) &&
					window.HandoffCancelAllAnimations(),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c];
				(f.shouldResetTransform = !0),
					f.updateScroll("snapshot"),
					f.options.layoutRoot && f.willUpdate(!1);
			}
			const { layoutId: l, layout: a } = this.options;
			if (l === void 0 && !a) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
				this.updateSnapshot(),
				s && this.notifyListeners("willUpdate");
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Qf);
				return;
			}
			this.isUpdating || this.nodes.forEach(jS),
				(this.isUpdating = !1),
				this.nodes.forEach(RS),
				this.nodes.forEach(PS),
				this.nodes.forEach(_S),
				this.clearAllSnapshots();
			const l = Bt.now();
			(ae.delta = Wt(0, 1e3 / 60, l - ae.timestamp)),
				(ae.timestamp = l),
				(ae.isProcessing = !0),
				Ms.update.process(ae),
				Ms.preRender.process(ae),
				Ms.render.process(ae),
				(ae.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), su.read(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(ES), this.sharedNodes.forEach(MS);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				I.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			I.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
			const s = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = Y()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement: l } = this.options;
			l &&
				l.notify(
					"LayoutMeasure",
					this.layout.layoutBox,
					s ? s.layoutBox : void 0
				);
		}
		updateScroll(s = "measure") {
			let l = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === s &&
				(l = !1),
				l &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: s,
						isRoot: r(this.instance),
						offset: n(this.instance),
					});
		}
		resetTransform() {
			if (!i) return;
			const s = this.isLayoutDirty || this.shouldResetTransform,
				l = this.projectionDelta && !bm(this.projectionDelta),
				a = this.getTransformTemplate(),
				u = a ? a(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			s &&
				(l || rn(this.latestValues) || c) &&
				(i(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(s = !0) {
			const l = this.measurePageBox();
			let a = this.removeElementScroll(l);
			return (
				s && (a = this.removeTransform(a)),
				FS(a),
				{
					animationId: this.root.animationId,
					measuredBox: l,
					layoutBox: a,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: s } = this.options;
			if (!s) return Y();
			const l = s.measureViewportBox(),
				{ scroll: a } = this.root;
			return a && (_t(l.x, a.offset.x), _t(l.y, a.offset.y)), l;
		}
		removeElementScroll(s) {
			const l = Y();
			Oe(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a],
					{ scroll: c, options: f } = u;
				if (u !== this.root && c && f.layoutScroll) {
					if (c.isRoot) {
						Oe(l, s);
						const { scroll: d } = this.root;
						d && (_t(l.x, -d.offset.x), _t(l.y, -d.offset.y));
					}
					_t(l.x, c.offset.x), _t(l.y, c.offset.y);
				}
			}
			return l;
		}
		applyTransform(s, l = !1) {
			const a = Y();
			Oe(a, s);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!l &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					Un(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					rn(c.latestValues) && Un(a, c.latestValues);
			}
			return rn(this.latestValues) && Un(a, this.latestValues), a;
		}
		removeTransform(s) {
			const l = Y();
			Oe(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a];
				if (!u.instance || !rn(u.latestValues)) continue;
				ra(u.latestValues) && u.updateSnapshot();
				const c = Y(),
					f = u.measurePageBox();
				Oe(c, f),
					Wf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return rn(this.latestValues) && Wf(l, this.latestValues), l;
		}
		setTargetDelta(s) {
			(this.targetDelta = s),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(s = !1) {
			var l;
			const a = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== a;
			if (
				!(
					s ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((l = this.parent) === null || l === void 0) &&
						l.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = ae.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const g = this.getClosestProjectingParent();
					g && g.layout && this.animationProgress !== 1
						? ((this.relativeParent = g),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = Y()),
						  (this.relativeTargetOrigin = Y()),
						  Dr(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								g.layout.layoutBox
						  ),
						  Oe(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target ||
							((this.target = Y()), (this.targetWithTransforms = Y())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  Ix(
									this.target,
									this.relativeTarget,
									this.relativeParent.target
							  ))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: Oe(this.target, this.layout.layoutBox),
							  Bm(this.target, this.targetDelta))
							: Oe(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const g = this.getClosestProjectingParent();
						g &&
						!!g.resumingFrom == !!this.resumingFrom &&
						!g.options.layoutScroll &&
						g.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = g),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = Y()),
							  (this.relativeTargetOrigin = Y()),
							  Dr(this.relativeTargetOrigin, this.target, g.target),
							  Oe(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					on.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					ra(this.parent.latestValues) ||
					zm(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var s;
			const l = this.getLead(),
				a = !!this.resumingFrom || this !== l;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) &&
						s.isProjectionDirty)) &&
					(u = !1),
				a &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(u = !1),
				this.resolvedRelativeTargetAt === ae.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return;
			Oe(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				g = this.treeScale.y;
			Gx(this.layoutCorrected, this.treeScale, this.path, a),
				l.layout &&
					!l.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((l.target = l.layout.layoutBox), (l.targetWithTransforms = Y()));
			const { target: v } = l;
			if (!v) {
				this.projectionTransform &&
					((this.projectionDelta = Bn()),
					(this.projectionTransform = "none"),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = Bn()),
				(this.projectionDeltaWithTransform = Bn()));
			const w = this.projectionTransform;
			Vr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
				(this.projectionTransform = bf(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== w ||
					this.treeScale.x !== d ||
					this.treeScale.y !== g) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners("projectionUpdate", v)),
				on.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(s = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
				const l = this.getStack();
				l && l.scheduleRender();
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0);
		}
		setAnimationOrigin(s, l = !1) {
			const a = this.snapshot,
				u = a ? a.latestValues : {},
				c = { ...this.latestValues },
				f = Bn();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !l);
			const d = Y(),
				g = a ? a.source : void 0,
				v = this.layout ? this.layout.source : void 0,
				w = g !== v,
				S = this.getStack(),
				p = !S || S.members.length <= 1,
				h = !!(w && !p && this.options.crossfade === !0 && !this.path.some(DS));
			this.animationProgress = 0;
			let m;
			(this.mixTargetDelta = (x) => {
				const P = x / 1e3;
				Xf(f.x, s.x, P),
					Xf(f.y, s.y, P),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Dr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						VS(this.relativeTarget, this.relativeTargetOrigin, d, P),
						m && hS(this.relativeTarget, m) && (this.isProjectionDirty = !1),
						m || (m = Y()),
						Oe(m, this.relativeTarget)),
					w &&
						((this.animationValues = c), lS(c, u, this.latestValues, P, h, p)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = P);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(s) {
			this.notifyListeners("animationStart"),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(gt(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = I.update(() => {
					(qi.hasAnimatedSinceResize = !0),
						(this.currentAnimation = xS(0, Gf, {
							...s,
							onUpdate: (l) => {
								this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
							},
							onComplete: () => {
								s.onComplete && s.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const s = this.getStack();
			s && s.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Gf),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const s = this.getLead();
			let {
				targetWithTransforms: l,
				target: a,
				layout: u,
				latestValues: c,
			} = s;
			if (!(!l || !a || !u)) {
				if (
					this !== s &&
					this.layout &&
					u &&
					Xm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					a = this.target || Y();
					const f = Me(this.layout.layoutBox.x);
					(a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
					const d = Me(this.layout.layoutBox.y);
					(a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
				}
				Oe(l, a),
					Un(l, c),
					Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
			}
		}
		registerSharedNode(s, l) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new pS()),
				this.sharedNodes.get(s).add(l);
			const u = l.options.initialPromotionConfig;
			l.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(l)
						: void 0,
			});
		}
		isLead() {
			const s = this.getStack();
			return s ? s.lead === this : !0;
		}
		getLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
						this
				: this;
		}
		getPrevLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? (s = this.getStack()) === null || s === void 0
					? void 0
					: s.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: s } = this.options;
			if (s) return this.root.sharedNodes.get(s);
		}
		promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
			const u = this.getStack();
			u && u.promote(this, a),
				s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				l && this.setOptions({ transition: l });
		}
		relegate() {
			const s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			const { visualElement: s } = this.options;
			if (!s) return;
			let l = !1;
			const { latestValues: a } = s;
			if (
				((a.z ||
					a.rotate ||
					a.rotateX ||
					a.rotateY ||
					a.rotateZ ||
					a.skewX ||
					a.skewY) &&
					(l = !0),
				!l)
			)
				return;
			const u = {};
			a.z && Hs("z", s, u, this.animationValues);
			for (let c = 0; c < Ws.length; c++)
				Hs(`rotate${Ws[c]}`, s, u, this.animationValues),
					Hs(`skew${Ws[c]}`, s, u, this.animationValues);
			s.render();
			for (const c in u)
				s.setStaticValue(c, u[c]),
					this.animationValues && (this.animationValues[c] = u[c]);
			s.scheduleRender();
		}
		getProjectionStyles(s) {
			var l, a;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return SS;
			const u = { visibility: "" },
				c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ""),
					(u.pointerEvents = Zi(s == null ? void 0 : s.pointerEvents) || ""),
					(u.transform = c ? c(this.latestValues, "") : "none"),
					u
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const w = {};
				return (
					this.options.layoutId &&
						((w.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(w.pointerEvents = Zi(s == null ? void 0 : s.pointerEvents) || "")),
					this.hasProjected &&
						!rn(this.latestValues) &&
						((w.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
					w
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = bf(
					this.projectionDeltaWithTransform,
					this.treeScale,
					d
				)),
				c && (u.transform = c(d, u.transform));
			const { x: g, y: v } = this.projectionDelta;
			(u.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (a =
										(l = d.opacity) !== null && l !== void 0
											? l
											: this.latestValues.opacity) !== null && a !== void 0
									? a
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ""
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const w in Eo) {
				if (d[w] === void 0) continue;
				const { correct: S, applyTo: p } = Eo[w],
					h = u.transform === "none" ? d[w] : S(d[w], f);
				if (p) {
					const m = p.length;
					for (let x = 0; x < m; x++) u[p[x]] = h;
				} else u[w] = h;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents =
						f === this
							? Zi(s == null ? void 0 : s.pointerEvents) || ""
							: "none"),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((s) => {
				var l;
				return (l = s.currentAnimation) === null || l === void 0
					? void 0
					: l.stop();
			}),
				this.root.nodes.forEach(Qf),
				this.root.sharedNodes.clear();
		}
	};
}
function PS(e) {
	e.updateLayout();
}
function _S(e) {
	var t;
	const n =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: o } = e.options,
			s = n.source !== e.layout.source;
		o === "size"
			? Fe((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Me(d);
					(d.min = r[f].min), (d.max = d.min + g);
			  })
			: Xm(o, n.layoutBox, r) &&
			  Fe((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Me(r[f]);
					(d.max = d.min + g),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[f].max = e.relativeTarget[f].min + g));
			  });
		const l = Bn();
		Vr(l, r, n.layoutBox);
		const a = Bn();
		s ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
		const u = !bm(l);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: g } = f;
				if (d && g) {
					const v = Y();
					Dr(v, n.layoutBox, d.layoutBox);
					const w = Y();
					Dr(w, r, g.layoutBox),
						Gm(v, w) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = w),
							(e.relativeTargetOrigin = v),
							(e.relativeParent = f));
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: n,
			delta: a,
			layoutDelta: l,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function CS(e) {
	on.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function TS(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ES(e) {
	e.clearSnapshot();
}
function Qf(e) {
	e.clearMeasurements();
}
function jS(e) {
	e.isLayoutDirty = !1;
}
function RS(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
		e.resetTransform();
}
function Yf(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function NS(e) {
	e.resolveTargetDelta();
}
function LS(e) {
	e.calcProjection();
}
function AS(e) {
	e.resetSkewAndRotation();
}
function MS(e) {
	e.removeLeadSnapshot();
}
function Xf(e, t, n) {
	(e.translate = H(t.translate, 0, n)),
		(e.scale = H(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function Zf(e, t, n, r) {
	(e.min = H(t.min, n.min, r)), (e.max = H(t.max, n.max, r));
}
function VS(e, t, n, r) {
	Zf(e.x, t.x, n.x, r), Zf(e.y, t.y, n.y, r);
}
function DS(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Jf = (e) =>
		typeof navigator < "u" &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(e),
	qf = Jf("applewebkit/") && !Jf("chrome/") ? Math.round : ge;
function ed(e) {
	(e.min = qf(e.min)), (e.max = qf(e.max));
}
function FS(e) {
	ed(e.x), ed(e.y);
}
function Xm(e, t, n) {
	return (
		e === "position" || (e === "preserve-aspect" && !ta(Kf(t), Kf(n), 0.2))
	);
}
const IS = Ym({
		attachResizeListener: (e, t) => lt(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Ks = { current: void 0 },
	Zm = Ym({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Ks.current) {
				const e = new IS({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ks.current = e);
			}
			return Ks.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none";
		},
		checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
	}),
	zS = {
		pan: { Feature: tS },
		drag: { Feature: eS, ProjectionNode: Zm, MeasureLayout: Wm },
	},
	oa = { current: null },
	Jm = { current: !1 };
function BS() {
	if (((Jm.current = !0), !!iu))
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => (oa.current = e.matches);
			e.addListener(t), t();
		} else oa.current = !1;
}
function US(e, t, n) {
	const { willChange: r } = t;
	for (const i in t) {
		const o = t[i],
			s = n[i];
		if (me(o)) e.addValue(i, o), Ao(r) && r.add(i);
		else if (me(s)) e.addValue(i, oi(o, { owner: e })), Ao(r) && r.remove(i);
		else if (s !== o)
			if (e.hasValue(i)) {
				const l = e.getValue(i);
				l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o);
			} else {
				const l = e.getStaticValue(i);
				e.addValue(i, oi(l !== void 0 ? l : o, { owner: e }));
			}
	}
	for (const i in n) t[i] === void 0 && e.removeValue(i);
	return t;
}
const td = new WeakMap(),
	$S = [...am, he, Ht],
	WS = (e) => $S.find(lm(e)),
	qm = Object.keys(ni),
	HS = qm.length,
	nd = [
		"AnimationStart",
		"AnimationComplete",
		"Update",
		"BeforeLayoutMeasure",
		"LayoutMeasure",
		"LayoutAnimationStart",
		"LayoutAnimationComplete",
	],
	KS = au.length;
function eg(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : eg(e.parent);
}
class bS {
	scrapeMotionValuesFromProps(t, n, r) {
		return {};
	}
	constructor(
		{
			parent: t,
			props: n,
			presenceContext: r,
			reducedMotionConfig: i,
			blockInitialAnimation: o,
			visualState: s,
		},
		l = {}
	) {
		(this.resolveKeyframes = (d, g, v, w) =>
			new this.KeyframeResolver(d, g, v, w, this)),
			(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = wu),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.scheduleRender = () => I.render(this.render, !1, !0));
		const { latestValues: a, renderState: u } = s;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = u),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = l),
			(this.blockInitialAnimation = !!o),
			(this.isControllingVariants = ts(n)),
			(this.isVariantNode = Fp(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
			n,
			{},
			this
		);
		for (const d in f) {
			const g = f[d];
			a[d] !== void 0 && me(g) && (g.set(a[d], !1), Ao(c) && c.add(d));
		}
	}
	mount(t) {
		(this.current = t),
			td.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			Jm.current || BS(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === "never"
					? !1
					: this.reducedMotionConfig === "always"
					? !0
					: oa.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		var t;
		td.delete(this.current),
			this.projection && this.projection.unmount(),
			gt(this.notifyUpdate),
			gt(this.render),
			this.valueSubscriptions.forEach((n) => n()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const n in this.events) this.events[n].clear();
		for (const n in this.features)
			(t = this.features[n]) === null || t === void 0 || t.unmount();
		this.current = null;
	}
	bindToMotionValue(t, n) {
		const r = kn.has(t),
			i = n.on("change", (s) => {
				(this.latestValues[t] = s),
					this.props.onUpdate && I.preRender(this.notifyUpdate),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			i(), o(), n.owner && n.stop();
		});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...n }, r, i, o) {
		let s, l;
		for (let a = 0; a < HS; a++) {
			const u = qm[a],
				{
					isEnabled: c,
					Feature: f,
					ProjectionNode: d,
					MeasureLayout: g,
				} = ni[u];
			d && (s = d),
				c(n) &&
					(!this.features[u] && f && (this.features[u] = new f(this)),
					g && (l = g));
		}
		if (
			(this.type === "html" || this.type === "svg") &&
			!this.projection &&
			s
		) {
			const {
				layoutId: a,
				layout: u,
				drag: c,
				dragConstraints: f,
				layoutScroll: d,
				layoutRoot: g,
			} = n;
			(this.projection = new s(
				this.latestValues,
				n["data-framer-portal-id"] ? void 0 : eg(this.parent)
			)),
				this.projection.setOptions({
					layoutId: a,
					layout: u,
					alwaysMeasureLayout: !!c || (f && In(f)),
					visualElement: this,
					scheduleRender: () => this.scheduleRender(),
					animationType: typeof u == "string" ? u : "both",
					initialPromotionConfig: o,
					layoutScroll: d,
					layoutRoot: g,
				});
		}
		return l;
	}
	updateFeatures() {
		for (const t in this.features) {
			const n = this.features[t];
			n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: Y();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < nd.length; r++) {
			const i = nd[r];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](),
				delete this.propEventSubscriptions[i]);
			const o = "on" + i,
				s = t[o];
			s && (this.propEventSubscriptions[i] = this.on(i, s));
		}
		(this.prevMotionValues = US(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps, this),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return (
				this.props.initial !== void 0 && (r.initial = this.props.initial), r
			);
		}
		const n = {};
		for (let r = 0; r < KS; r++) {
			const i = au[r],
				o = this.props[i];
			(ti(o) || o === !1) && (n[i] = o);
		}
		return n;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n)
			return (
				n.variantChildren && n.variantChildren.add(t),
				() => n.variantChildren.delete(t)
			);
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r &&
			(r && this.removeValue(t),
			this.bindToMotionValue(t, n),
			this.values.set(t, n),
			(this.latestValues[t] = n.get()));
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return (
			r === void 0 &&
				n !== void 0 &&
				((r = oi(n === null ? void 0 : n, { owner: this })),
				this.addValue(t, r)),
			r
		);
	}
	readValue(t, n) {
		var r;
		let i =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
				  r !== void 0
				? r
				: this.readValueFromInstance(this.current, t, this.options);
		return (
			i != null &&
				(typeof i == "string" && (om(i) || im(i))
					? (i = parseFloat(i))
					: !WS(i) && Ht.test(n) && (i = gm(t, n)),
				this.setBaseTarget(t, me(i) ? i.get() : i)),
			me(i) ? i.get() : i
		);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var n;
		const { initial: r } = this.props;
		let i;
		if (typeof r == "string" || typeof r == "object") {
			const s = vu(
				this.props,
				r,
				(n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
			);
			s && (i = s[t]);
		}
		if (r && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, t);
		return o !== void 0 && !me(o)
			? o
			: this.initialValues[t] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new Nu()), this.events[t].add(n);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
}
class tg extends bS {
	constructor() {
		super(...arguments), (this.KeyframeResolver = vm);
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
}
function GS(e) {
	return window.getComputedStyle(e);
}
class QS extends tg {
	constructor() {
		super(...arguments), (this.type = "html");
	}
	readValueFromInstance(t, n) {
		if (kn.has(n)) {
			const r = Su(n);
			return (r && r.default) || 0;
		} else {
			const r = GS(t),
				i = ($p(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof i == "string" ? i.trim() : i;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Um(t, n);
	}
	build(t, n, r, i) {
		du(t, n, r, i.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return gu(t, n, r);
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		me(t) &&
			(this.childSubscription = t.on("change", (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(t, n, r, i) {
		Gp(t, n, r, i);
	}
}
class YS extends tg {
	constructor() {
		super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (kn.has(n)) {
			const r = Su(n);
			return (r && r.default) || 0;
		}
		return (n = Qp.has(n) ? n : ou(n)), t.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return Y();
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Xp(t, n, r);
	}
	build(t, n, r, i) {
		pu(t, n, r, this.isSVGTag, i.transformTemplate);
	}
	renderInstance(t, n, r, i) {
		Yp(t, n, r, i);
	}
	mount(t) {
		(this.isSVGTag = mu(t.tagName)), super.mount(t);
	}
}
const XS = (e, t) =>
		uu(e)
			? new YS(t, { enableHardwareAcceleration: !1 })
			: new QS(t, {
					allowProjection: e !== k.Fragment,
					enableHardwareAcceleration: !0,
			  }),
	ZS = { layout: { ProjectionNode: Zm, MeasureLayout: Wm } },
	JS = { ...Vx, ...W1, ...zS, ...ZS },
	ng = J0((e, t) => N1(e, t, JS, XS));
function qS() {
	const e = Rp(),
		t = () => {
			const n = prompt("Siapakah nama anda?");
			n === "Monika"
				? alert("Pakai nama lengkap dong cantik")
				: n === "Monika Anita Putri"
				? e("/hi")
				: alert("Error: Tidak boleh kosong!");
		};
	return y.jsx("div", {
		className: "w-full bg-slate-200",
		children: y.jsx(ng.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className:
				"absolute top-0 left-0 w-full h-screen overflow-hidden bg-slate-200",
			children: y.jsx("div", {
				className: "flex items-center justify-center w-full h-screen",
				children: y.jsxs("a", {
					href: "#",
					onClick: t,
					className: "flex-col items-center justify-center text-center",
					children: [
						y.jsx(F0, {
							stroke: 2,
							width: 128,
							height: 128,
							className: "text-teal-500",
						}),
						y.jsx("p", {
							className:
								"text-2xl font-bold tracking-wider text-teal-700 uppercase",
							children: "Mulai",
						}),
					],
				}),
			}),
		}),
	});
}
const ek = () => {
	const [e, t] = k.useState(!1),
		[n, r] = k.useState(!1),
		[i, o] = k.useState(!1),
		[s, l] = k.useState("box.png"),
		[a, u] = k.useState("box.png"),
		[c, f] = k.useState("box.png");
	return (
		k.useEffect(() => {
			l(e ? "open-box.png" : "box.png");
		}, [e]),
		k.useEffect(() => {
			u(n ? "open-box.png" : "box.png");
		}, [n]),
		k.useEffect(() => {
			f(i ? "open-box.png" : "box.png");
		}, [i]),
		y.jsxs(ng.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			className:
				"relative h-screen max-w-full max-h-screen mx-auto overflow-hidden bg-slate-200 scroll-smooth",
			children: [
				y.jsx("div", {
					className: "flex items-center justify-center h-screen p-3",
					children: y.jsxs("div", {
						children: [
							y.jsxs("h1", {
								className: "text-3xl font-semibold text-center text-slate-800",
								children: [
									"Hai Cantik ",
									y.jsx("br", {}),
									" Monika Anita Putri",
								],
							}),
							y.jsxs("p", {
								className: "mt-3 font-medium text-slate-700",
								children: [
									"Aku ada game/story nih buat dimaenin hehehe, cuman sesuatu sederhana kok semoga aja kamu suka.",
									y.jsx("br", {}),
									" Jadi mari kita awali dengan doa terlebih dahulu, sebagai bentuk ucapan terimakasih kita kepada Tuhan Yesus karena masih diberikan kesempatan untuk bersama sampai saat ini.",
								],
							}),
							y.jsx("div", {
								className: "w-1/2 my-5",
								children: y.jsxs("a", {
									href: "#story",
									className:
										"mx-auto px-5 py-1.5 bg-slate-900 text-slate-100 font-semibold text-lg flex items-center gap-2 justify-center rounded-full",
									children: [y.jsx(O0, { stroke: 2 }), " Mulai"],
								}),
							}),
							y.jsxs("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									y.jsx("img", { src: "img/9.jpg", alt: "" }),
									y.jsx("img", { src: "img/8.jpg", alt: "" }),
									y.jsx("img", { src: "img/10.jpg", alt: "" }),
								],
							}),
						],
					}),
				}),
				y.jsx("div", {
					className: "w-full min-h-screen bg-slate-200",
					id: "story",
					children: y.jsxs("div", {
						className: "relative z-10 top-20",
						children: [
							y.jsx("div", {
								children: y.jsx(Lr, {
									to: "/one",
									onClick: () => t(!e),
									children: y.jsx("img", {
										src: s,
										alt: "Box",
										className: "w-6/12 mx-auto",
									}),
								}),
							}),
							y.jsx("div", {
								className: "my-5",
								children: y.jsx(Lr, {
									to: "/two",
									onClick: () => r(!n),
									children: y.jsx("img", {
										src: a,
										alt: "Box",
										className: "w-6/12 mx-auto",
									}),
								}),
							}),
							y.jsx("div", {
								children: y.jsx(Lr, {
									to: "/three",
									onClick: () => o(!i),
									children: y.jsx("img", {
										src: c,
										alt: "Box",
										className: "w-6/12 mx-auto",
									}),
								}),
							}),
						],
					}),
				}),
			],
		})
	);
};
function tk() {
	return y.jsxs("div", {
		className: "min-h-screen bg-slate-200",
		children: [
			y.jsx("img", {
				src: "img/1.jpg",
				className: "absolute z-[1] top-40 w-6/12",
			}),
			y.jsx("img", {
				src: "img/2.jpg",
				className: "absolute z-[1] top-40 right-0 w-5/12",
			}),
			y.jsx("img", {
				src: "img/3.jpg",
				className: "absolute z-[1] top-80  w-5/12",
			}),
			y.jsxs("div", {
				className:
					"relative px-3 top-32 z-[2] bg-slate-200/70 font-medium text-slate-900 backdrop-blur-[1px] h-screen",
				children: [
					"Hi Cantik, gimana perjalanannya pulang ke kediri? pasti tidur tok kan..... ",
					y.jsx("br", {}),
					"Jadi pada 3 Juni 2024 ini aku mau ucapin, SELAMAT HARI JADIAN KE 2 TAHUN SAYANGKU!",
					y.jsx("br", {}),
					"Semoga di Tahun yang baru ini kita bisa sama-sama tumbuh menjadi lebih dewasa lagi, bisa lebih saling mengerti dan memahami dan juga mendukung satu sama lain. ",
					y.jsx("br", {}),
					y.jsx("br", {}),
					"Ehmmm.. Terimakasih banyak atas semua dukunganmu dan kehadiranmu selama ini ya sayang, terutama kamu yang masih selalu support aku mau gimanapun keadaanku. Terimakasih banyak atas Suka cita yang kamu ciptain buat KITA dan terimakasih telah hadir menjadi Wanita yang bisa mengerti aku selain mama.",
					y.jsx("br", {}),
					y.jsx("br", {}),
					y.jsx(Lr, {
						to: "/hi#story",
						className: "px-5 py-1 rounded-full bg-slate-800 text-slate-100",
						children: "Lanjut ....",
					}),
				],
			}),
		],
	});
}
function nk() {
	return y.jsxs("div", {
		className: "min-h-screen bg-slate-200",
		children: [
			y.jsx("img", {
				src: "img/4.jpg",
				className: "absolute z-[1] top-40 w-6/12",
			}),
			y.jsx("img", {
				src: "img/5.jpg",
				className: "absolute z-[1] top-40 right-0 w-5/12",
			}),
			y.jsx("img", {
				src: "img/6.jpg",
				className: "absolute z-[1] top-80  w-5/12",
			}),
			y.jsx("img", {
				src: "img/7.jpg",
				className: "absolute z-[1] right-0 bottom-10  w-5/12",
			}),
			y.jsxs("div", {
				className:
					"relative font-medium text-slate-900 px-3 top-32 z-[2] bg-slate-200/70 backdrop-blur-[1px] h-screen",
				children: [
					"Heheheh Lanjut sayang, jujur aku bingung mau bilang apa tapi terimakasih dan maaf karena aku masih belum bisa memberikan sesuatu yang terbaik buat kamu dan masih sering banyak kurangnya. Tapi aku yakin dan semoga saja disuatu saat nanti aku pasti bisa bikin kamu lebih bahagia lagi.",
					" ",
					y.jsx("br", {}),
					"Jadi aku mohon untuk tetap sama aku dan tungguin aku supaya bisa lebih baik kedepannya sayang :D",
					y.jsx("br", {}),
					y.jsx("br", {}),
					"Sekali lagi aku ucapin Happy Anniversary ya sayang, semoga damai beserta kita selamanya. 💎💕 ",
					y.jsx("br", {}),
					y.jsx("br", {}),
					y.jsx(Lr, {
						to: "/hi#story",
						className: "px-5 py-1 rounded-full bg-slate-800 text-slate-100",
						children: "Lanjut ....",
					}),
				],
			}),
		],
	});
}
var rg = { exports: {} },
	ig = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gi = k;
function rk(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ik = typeof Object.is == "function" ? Object.is : rk,
	ok = gi.useSyncExternalStore,
	sk = gi.useRef,
	lk = gi.useEffect,
	ak = gi.useMemo,
	uk = gi.useDebugValue;
ig.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
	var o = sk(null);
	if (o.current === null) {
		var s = { hasValue: !1, value: null };
		o.current = s;
	} else s = o.current;
	o = ak(
		function () {
			function a(g) {
				if (!u) {
					if (((u = !0), (c = g), (g = r(g)), i !== void 0 && s.hasValue)) {
						var v = s.value;
						if (i(v, g)) return (f = v);
					}
					return (f = g);
				}
				if (((v = f), ik(c, g))) return v;
				var w = r(g);
				return i !== void 0 && i(v, w) ? v : ((c = g), (f = w));
			}
			var u = !1,
				c,
				f,
				d = n === void 0 ? null : n;
			return [
				function () {
					return a(t());
				},
				d === null
					? void 0
					: function () {
							return a(d());
					  },
			];
		},
		[t, n, r, i]
	);
	var l = ok(e, o[0], o[1]);
	return (
		lk(
			function () {
				(s.hasValue = !0), (s.value = l);
			},
			[l]
		),
		uk(l),
		l
	);
};
rg.exports = ig;
var ck = rg.exports,
	Ne = "default" in Qs ? yd : Qs,
	rd = Symbol.for("react-redux-context"),
	id = typeof globalThis < "u" ? globalThis : {};
function fk() {
	if (!Ne.createContext) return {};
	const e = id[rd] ?? (id[rd] = new Map());
	let t = e.get(Ne.createContext);
	return t || ((t = Ne.createContext(null)), e.set(Ne.createContext, t)), t;
}
var Kt = fk(),
	dk = () => {
		throw new Error("uSES not initialized!");
	};
function Lu(e = Kt) {
	return function () {
		return Ne.useContext(e);
	};
}
var og = Lu(),
	sg = dk,
	hk = (e) => {
		sg = e;
	},
	pk = (e, t) => e === t;
function mk(e = Kt) {
	const t = e === Kt ? og : Lu(e),
		n = (r, i = {}) => {
			const { equalityFn: o = pk, devModeChecks: s = {} } =
					typeof i == "function" ? { equalityFn: i } : i,
				{
					store: l,
					subscription: a,
					getServerState: u,
					stabilityCheck: c,
					identityFunctionCheck: f,
				} = t();
			Ne.useRef(!0);
			const d = Ne.useCallback(
					{
						[r.name](v) {
							return r(v);
						},
					}[r.name],
					[r, c, s.stabilityCheck]
				),
				g = sg(a.addNestedSub, l.getState, u || l.getState, d, o);
			return Ne.useDebugValue(g), g;
		};
	return Object.assign(n, { withTypes: () => n }), n;
}
var gk = mk();
function vk(e) {
	e();
}
function yk() {
	let e = null,
		t = null;
	return {
		clear() {
			(e = null), (t = null);
		},
		notify() {
			vk(() => {
				let n = e;
				for (; n; ) n.callback(), (n = n.next);
			});
		},
		get() {
			const n = [];
			let r = e;
			for (; r; ) n.push(r), (r = r.next);
			return n;
		},
		subscribe(n) {
			let r = !0;
			const i = (t = { callback: n, next: null, prev: t });
			return (
				i.prev ? (i.prev.next = i) : (e = i),
				function () {
					!r ||
						e === null ||
						((r = !1),
						i.next ? (i.next.prev = i.prev) : (t = i.prev),
						i.prev ? (i.prev.next = i.next) : (e = i.next));
				}
			);
		},
	};
}
var od = { notify() {}, get: () => [] };
function wk(e, t) {
	let n,
		r = od,
		i = 0,
		o = !1;
	function s(w) {
		c();
		const S = r.subscribe(w);
		let p = !1;
		return () => {
			p || ((p = !0), S(), f());
		};
	}
	function l() {
		r.notify();
	}
	function a() {
		v.onStateChange && v.onStateChange();
	}
	function u() {
		return o;
	}
	function c() {
		i++, n || ((n = e.subscribe(a)), (r = yk()));
	}
	function f() {
		i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = od));
	}
	function d() {
		o || ((o = !0), c());
	}
	function g() {
		o && ((o = !1), f());
	}
	const v = {
		addNestedSub: s,
		notifyNestedSubs: l,
		handleChangeWrapper: a,
		isSubscribed: u,
		trySubscribe: d,
		tryUnsubscribe: g,
		getListeners: () => r,
	};
	return v;
}
var xk =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	Sk = typeof navigator < "u" && navigator.product === "ReactNative",
	kk = xk || Sk ? Ne.useLayoutEffect : Ne.useEffect;
function Pk({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: i = "once",
	identityFunctionCheck: o = "once",
}) {
	const s = Ne.useMemo(() => {
			const u = wk(e);
			return {
				store: e,
				subscription: u,
				getServerState: r ? () => r : void 0,
				stabilityCheck: i,
				identityFunctionCheck: o,
			};
		}, [e, r, i, o]),
		l = Ne.useMemo(() => e.getState(), [e]);
	kk(() => {
		const { subscription: u } = s;
		return (
			(u.onStateChange = u.notifyNestedSubs),
			u.trySubscribe(),
			l !== e.getState() && u.notifyNestedSubs(),
			() => {
				u.tryUnsubscribe(), (u.onStateChange = void 0);
			}
		);
	}, [s, l]);
	const a = t || Kt;
	return Ne.createElement(a.Provider, { value: s }, n);
}
var _k = Pk;
function lg(e = Kt) {
	const t = e === Kt ? og : Lu(e),
		n = () => {
			const { store: r } = t();
			return r;
		};
	return Object.assign(n, { withTypes: () => n }), n;
}
var Ck = lg();
function Tk(e = Kt) {
	const t = e === Kt ? Ck : lg(e),
		n = () => t().dispatch;
	return Object.assign(n, { withTypes: () => n }), n;
}
var Ek = Tk();
hk(ck.useSyncExternalStoreWithSelector);
const jk = (e) => ({ type: "PLAY_AUDIO", payload: e }),
	Rk = () => ({ type: "STOP_AUDIO" }),
	Nk = () => {
		const e = Ek(),
			{ isPlaying: t, audioUrl: n } = gk((r) => r.player);
		return y.jsxs("div", {
			className: "fixed w-11/12 mx-auto top-1 right-0 left-0 z-[5]",
			children: [
				t
					? y.jsx("button", { onClick: () => e(Rk()) })
					: y.jsxs("button", {
							onClick: () => e(jk("music.mp4")),
							className:
								"px-5 mt-3 py-1.5 font-semibold uppercase mx-auto bg-teal-600 rounded-full text-slate-100 flex items-center justify-center gap-2",
							children: [y.jsx(I0, { stroke: 2 }), " Play"],
					  }),
				t &&
					y.jsx("audio", {
						src: n,
						autoPlay: !0,
						controls: !0,
						className: "w-full mx-auto",
					}),
			],
		});
	},
	Lk = () => (
		k.useEffect(() => {
			document.body.classList.contains("container") &&
				document.body.classList.remove("container");
		}, []),
		y.jsxs(y.Fragment, {
			children: [
				y.jsx("div", { className: "night" }),
				y.jsxs("div", {
					className: "flowers",
					children: [
						y.jsx(bs, { number: 1 }),
						y.jsx(bs, { number: 2 }),
						y.jsx(bs, { number: 3 }),
						y.jsx(Cn, { delay: "1.2s" }),
						y.jsx(sd, {}),
						y.jsx(sd, {}),
						y.jsx(Cn, { delay: "2.4s", type: "right", number: 1 }),
						y.jsx(Cn, { delay: "2.8s", type: "right", number: 2 }),
						y.jsx(Cn, { delay: "2.8s", type: "front" }),
						y.jsx(Cn, { delay: "3.2s", type: "fr" }),
						y.jsx(xt, { number: 0 }),
						y.jsx(xt, { number: 1 }),
						y.jsx(xt, { number: 2 }),
						y.jsx(xt, { number: 3 }),
						y.jsx(xt, { number: 4 }),
						y.jsx(xt, { number: 5 }),
						y.jsx(xt, { number: 6 }),
						y.jsx(xt, { number: 7 }),
					],
				}),
			],
		})
	),
	bs = ({ number: e }) =>
		y.jsxs("div", {
			className: `flower flower--${e}`,
			children: [
				y.jsxs("div", {
					className: `flower__leafs flower__leafs--${e}`,
					children: [
						y.jsx("div", { className: "flower__leaf flower__leaf--1" }),
						y.jsx("div", { className: "flower__leaf flower__leaf--2" }),
						y.jsx("div", { className: "flower__leaf flower__leaf--3" }),
						y.jsx("div", { className: "flower__leaf flower__leaf--4" }),
						y.jsx("div", { className: "flower__white-circle" }),
						y.jsx("div", { className: "flower__light flower__light--1" }),
						y.jsx("div", { className: "flower__light flower__light--2" }),
						y.jsx("div", { className: "flower__light flower__light--3" }),
						y.jsx("div", { className: "flower__light flower__light--4" }),
						y.jsx("div", { className: "flower__light flower__light--5" }),
						y.jsx("div", { className: "flower__light flower__light--6" }),
						y.jsx("div", { className: "flower__light flower__light--7" }),
						y.jsx("div", { className: "flower__light flower__light--8" }),
					],
				}),
				y.jsxs("div", {
					className: "flower__line",
					children: [
						y.jsx("div", {
							className: "flower__line__leaf flower__line__leaf--1",
						}),
						y.jsx("div", {
							className: "flower__line__leaf flower__line__leaf--2",
						}),
						y.jsx("div", {
							className: "flower__line__leaf flower__line__leaf--3",
						}),
						y.jsx("div", {
							className: "flower__line__leaf flower__line__leaf--4",
						}),
						e === 1 &&
							y.jsxs(y.Fragment, {
								children: [
									y.jsx("div", {
										className: "flower__line__leaf flower__line__leaf--5",
									}),
									y.jsx("div", {
										className: "flower__line__leaf flower__line__leaf--6",
									}),
								],
							}),
					],
				}),
			],
		}),
	Cn = ({ delay: e, type: t, number: n }) => {
		const r = `grow-ans ${t ? `flower__g-${t}${n ? `--${n}` : ""}` : ""}`;
		return y.jsxs("div", {
			className: r,
			style: { "--d": e },
			children: [
				t === "long" &&
					y.jsxs("div", {
						className: "flower__g-long",
						children: [
							y.jsx("div", { className: "flower__g-long__top" }),
							y.jsx("div", { className: "flower__g-long__bottom" }),
						],
					}),
				t === "right" && y.jsx("div", { className: "leaf" }),
				t === "front" &&
					y.jsxs(y.Fragment, {
						children: [
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", {
								className:
									"flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8",
								children: y.jsx("div", { className: "flower__g-front__leaf" }),
							}),
							y.jsx("div", { className: "flower__g-front__line" }),
						],
					}),
				t === "fr" &&
					y.jsxs(y.Fragment, {
						children: [
							y.jsx("div", { className: "leaf" }),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--1",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--2",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--3",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--4",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--5",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--6",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--7",
							}),
							y.jsx("div", {
								className: "flower__g-fr__leaf flower__g-fr__leaf--8",
							}),
						],
					}),
			],
		});
	},
	sd = () =>
		y.jsx("div", {
			className: "growing-grass",
			children: y.jsxs("div", {
				className: "flower__grass flower__grass--1",
				children: [
					y.jsx("div", { className: "flower__grass--top" }),
					y.jsx("div", { className: "flower__grass--bottom" }),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--1",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--2",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--3",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--4",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--5",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--6",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--7",
					}),
					y.jsx("div", {
						className: "flower__grass__leaf flower__grass__leaf--8",
					}),
					y.jsx("div", { className: "flower__grass__overlay" }),
				],
			}),
		}),
	xt = ({ number: e }) =>
		y.jsx("div", {
			className: `long-g long-g--${e}`,
			children: y.jsx(Cn, { delay: `${3 + e * 0.2}s`, type: "long" }),
		});
function Ak() {
	return y.jsxs(y.Fragment, {
		children: [
			y.jsx("nav", { children: y.jsx(Nk, {}) }),
			y.jsxs(_0, {
				children: [
					y.jsx(_n, { path: "/", element: y.jsx(qS, {}) }),
					y.jsx(_n, { path: "/hi", element: y.jsx(ek, {}) }),
					y.jsx(_n, { path: "/one", element: y.jsx(tk, {}) }),
					y.jsx(_n, { path: "/two", element: y.jsx(nk, {}) }),
					y.jsx(_n, { path: "/three", element: y.jsx(Lk, {}) }),
				],
			}),
		],
	});
}
function se(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Mk = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
	ld = Mk,
	Gs = () => Math.random().toString(36).substring(7).split("").join("."),
	Vk = {
		INIT: `@@redux/INIT${Gs()}`,
		REPLACE: `@@redux/REPLACE${Gs()}`,
		PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Gs()}`,
	},
	Vo = Vk;
function Dk(e) {
	if (typeof e != "object" || e === null) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ag(e, t, n) {
	if (typeof e != "function") throw new Error(se(2));
	if (
		(typeof t == "function" && typeof n == "function") ||
		(typeof n == "function" && typeof arguments[3] == "function")
	)
		throw new Error(se(0));
	if (
		(typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
		typeof n < "u")
	) {
		if (typeof n != "function") throw new Error(se(1));
		return n(ag)(e, t);
	}
	let r = e,
		i = t,
		o = new Map(),
		s = o,
		l = 0,
		a = !1;
	function u() {
		s === o &&
			((s = new Map()),
			o.forEach((S, p) => {
				s.set(p, S);
			}));
	}
	function c() {
		if (a) throw new Error(se(3));
		return i;
	}
	function f(S) {
		if (typeof S != "function") throw new Error(se(4));
		if (a) throw new Error(se(5));
		let p = !0;
		u();
		const h = l++;
		return (
			s.set(h, S),
			function () {
				if (p) {
					if (a) throw new Error(se(6));
					(p = !1), u(), s.delete(h), (o = null);
				}
			}
		);
	}
	function d(S) {
		if (!Dk(S)) throw new Error(se(7));
		if (typeof S.type > "u") throw new Error(se(8));
		if (typeof S.type != "string") throw new Error(se(17));
		if (a) throw new Error(se(9));
		try {
			(a = !0), (i = r(i, S));
		} finally {
			a = !1;
		}
		return (
			(o = s).forEach((h) => {
				h();
			}),
			S
		);
	}
	function g(S) {
		if (typeof S != "function") throw new Error(se(10));
		(r = S), d({ type: Vo.REPLACE });
	}
	function v() {
		const S = f;
		return {
			subscribe(p) {
				if (typeof p != "object" || p === null) throw new Error(se(11));
				function h() {
					const x = p;
					x.next && x.next(c());
				}
				return h(), { unsubscribe: S(h) };
			},
			[ld]() {
				return this;
			},
		};
	}
	return (
		d({ type: Vo.INIT }),
		{ dispatch: d, subscribe: f, getState: c, replaceReducer: g, [ld]: v }
	);
}
function Ok(e) {
	Object.keys(e).forEach((t) => {
		const n = e[t];
		if (typeof n(void 0, { type: Vo.INIT }) > "u") throw new Error(se(12));
		if (typeof n(void 0, { type: Vo.PROBE_UNKNOWN_ACTION() }) > "u")
			throw new Error(se(13));
	});
}
function Fk(e) {
	const t = Object.keys(e),
		n = {};
	for (let o = 0; o < t.length; o++) {
		const s = t[o];
		typeof e[s] == "function" && (n[s] = e[s]);
	}
	const r = Object.keys(n);
	let i;
	try {
		Ok(n);
	} catch (o) {
		i = o;
	}
	return function (s = {}, l) {
		if (i) throw i;
		let a = !1;
		const u = {};
		for (let c = 0; c < r.length; c++) {
			const f = r[c],
				d = n[f],
				g = s[f],
				v = d(g, l);
			if (typeof v > "u") throw (l && l.type, new Error(se(14)));
			(u[f] = v), (a = a || v !== g);
		}
		return (a = a || r.length !== Object.keys(s).length), a ? u : s;
	};
}
function Ik(...e) {
	return e.length === 0
		? (t) => t
		: e.length === 1
		? e[0]
		: e.reduce(
				(t, n) =>
					(...r) =>
						t(n(...r))
		  );
}
function zk(...e) {
	return (t) => (n, r) => {
		const i = t(n, r);
		let o = () => {
			throw new Error(se(15));
		};
		const s = { getState: i.getState, dispatch: (a, ...u) => o(a, ...u) },
			l = e.map((a) => a(s));
		return (o = Ik(...l)(i.dispatch)), { ...i, dispatch: o };
	};
}
function Bk(e) {
	return ({ dispatch: n, getState: r }) =>
		(i) =>
		(o) =>
			typeof o == "function" ? o(n, r, e) : i(o);
}
var Uk = Bk();
const $k = { isPlaying: !1, audioUrl: "music.mp4" },
	Wk = (e = $k, t) => {
		switch (t.type) {
			case "PLAY_AUDIO":
				return { ...e, isPlaying: !0, audioUrl: t.payload };
			case "STOP_AUDIO":
				return { ...e, isPlaying: !1 };
			default:
				return e;
		}
	},
	Hk = Fk({ player: Wk }),
	Kk = ag(Hk, zk(Uk)),
	bk = Ys.createRoot(document.getElementById("root"));
bk.render(
	y.jsx(L0, { children: y.jsx(_k, { store: Kk, children: y.jsx(Ak, {}) }) })
);
