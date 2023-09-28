function Ce() {
}
function Ze(l) {
  return l();
}
function Ve() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(l) {
  l.forEach(Ze);
}
function Ie(l) {
  return typeof l == "function";
}
function rt(l, r) {
  return l != l ? r == r : l !== r || l && typeof l == "object" || typeof l == "function";
}
function at(l) {
  return Object.keys(l).length === 0;
}
function h(l, r) {
  l.appendChild(r);
}
function ue(l, r, t) {
  l.insertBefore(r, t || null);
}
function se(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function v(l) {
  return document.createElement(l);
}
function Ue(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function B(l) {
  return document.createTextNode(l);
}
function Z() {
  return B(" ");
}
function it() {
  return B("");
}
function He(l, r, t, i) {
  return l.addEventListener(r, t, i), () => l.removeEventListener(r, t, i);
}
function y(l, r, t) {
  t == null ? l.removeAttribute(r) : l.getAttribute(r) !== t && l.setAttribute(r, t);
}
function lt(l) {
  return Array.from(l.childNodes);
}
function be(l, r) {
  r = "" + r, l.wholeText !== r && (l.data = r);
}
function q(l, r, t, i) {
  t === null ? l.style.removeProperty(r) : l.style.setProperty(r, t, i ? "important" : "");
}
function ut(l) {
  const r = {};
  for (const t of l)
    r[t.name] = t.value;
  return r;
}
let Le;
function je(l) {
  Le = l;
}
function tt() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function st(l) {
  tt().$$.on_mount.push(l);
}
function dt(l) {
  tt().$$.on_destroy.push(l);
}
const Ne = [], Qe = [], Ye = [], Xe = [], ct = Promise.resolve();
let Be = !1;
function ft() {
  Be || (Be = !0, ct.then(le));
}
function Ke(l) {
  Ye.push(l);
}
const ze = /* @__PURE__ */ new Set();
let Te = 0;
function le() {
  if (Te !== 0)
    return;
  const l = Le;
  do {
    try {
      for (; Te < Ne.length; ) {
        const r = Ne[Te];
        Te++, je(r), pt(r.$$);
      }
    } catch (r) {
      throw Ne.length = 0, Te = 0, r;
    }
    for (je(null), Ne.length = 0, Te = 0; Qe.length; )
      Qe.pop()();
    for (let r = 0; r < Ye.length; r += 1) {
      const t = Ye[r];
      ze.has(t) || (ze.add(t), t());
    }
    Ye.length = 0;
  } while (Ne.length);
  for (; Xe.length; )
    Xe.pop()();
  Be = !1, ze.clear(), je(l);
}
function pt(l) {
  if (l.fragment !== null) {
    l.update(), Pe(l.before_update);
    const r = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, r), l.after_update.forEach(Ke);
  }
}
const ht = /* @__PURE__ */ new Set();
function mt(l, r) {
  l && l.i && (ht.delete(l), l.i(r));
}
function _t(l, r, t, i) {
  const { fragment: e, after_update: o } = l.$$;
  e && e.m(r, t), i || Ke(() => {
    const n = l.$$.on_mount.map(Ze).filter(Ie);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Pe(n), l.$$.on_mount = [];
  }), o.forEach(Ke);
}
function yt(l, r) {
  const t = l.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(r), t.on_destroy = t.fragment = null, t.ctx = []);
}
function bt(l, r) {
  l.$$.dirty[0] === -1 && (Ne.push(l), ft(), l.$$.dirty.fill(0)), l.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function gt(l, r, t, i, e, o, n, a = [-1]) {
  const s = Le;
  je(l);
  const u = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Ce,
    not_equal: e,
    bound: Ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ve(),
    dirty: a,
    skip_bound: !1,
    root: r.target || s.$$.root
  };
  n && n(u.root);
  let d = !1;
  if (u.ctx = t ? t(l, r.props || {}, (f, c, ...p) => {
    const _ = p.length ? p[0] : c;
    return u.ctx && e(u.ctx[f], u.ctx[f] = _) && (!u.skip_bound && u.bound[f] && u.bound[f](_), d && bt(l, f)), c;
  }) : [], u.update(), d = !0, Pe(u.before_update), u.fragment = i ? i(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = lt(r.target);
      u.fragment && u.fragment.l(f), f.forEach(se);
    } else
      u.fragment && u.fragment.c();
    r.intro && mt(l.$$.fragment), _t(l, r.target, r.anchor, r.customElement), le();
  }
  je(s);
}
let nt;
typeof HTMLElement == "function" && (nt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(Ze).filter(Ie);
    for (const r in this.$$.slotted)
      this.appendChild(this.$$.slotted[r]);
  }
  attributeChangedCallback(l, r, t) {
    this[l] = t;
  }
  disconnectedCallback() {
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    yt(this, 1), this.$destroy = Ce;
  }
  $on(l, r) {
    if (!Ie(r))
      return Ce;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(r), () => {
      const i = t.indexOf(r);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(l) {
    this.$$set && !at(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $e = {}, wt = {
  get exports() {
    return $e;
  },
  set exports(l) {
    $e = l;
  }
};
(function(l, r) {
  (function(t, i) {
    l.exports = i();
  })(vt, function() {
    return function(t) {
      function i(o) {
        if (e[o])
          return e[o].exports;
        var n = e[o] = { exports: {}, id: o, loaded: !1 };
        return t[o].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports;
      }
      var e = {};
      return i.m = t, i.c = e, i.p = "", i(0);
    }([function(t, i, e) {
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      e(84);
      var n = e(41), a = o(n), s = function() {
        a.default.addPickerToOtherInputs(), a.default.supportsDateInput() || a.default.addPickerToDateInputs();
      };
      s(), document.addEventListener("DOMContentLoaded", function() {
        s();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        s();
      });
    }, function(t, i, e) {
      t.exports = !e(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, i) {
      var e = t.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = e);
    }, function(t, i) {
      var e = {}.hasOwnProperty;
      t.exports = function(o, n) {
        return e.call(o, n);
      };
    }, function(t, i, e) {
      var o = e(9), n = e(32), a = e(25), s = Object.defineProperty;
      i.f = e(1) ? Object.defineProperty : function(u, d, f) {
        if (o(u), d = a(d, !0), o(f), n)
          try {
            return s(u, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (u[d] = f.value), u;
      };
    }, function(t, i, e) {
      var o = e(59), n = e(16);
      t.exports = function(a) {
        return o(n(a));
      };
    }, function(t, i, e) {
      var o = e(4), n = e(14);
      t.exports = e(1) ? function(a, s, u) {
        return o.f(a, s, n(1, u));
      } : function(a, s, u) {
        return a[s] = u, a;
      };
    }, function(t, i, e) {
      var o = e(23)("wks"), n = e(15), a = e(2).Symbol, s = typeof a == "function", u = t.exports = function(d) {
        return o[d] || (o[d] = s && a[d] || (s ? a : n)("Symbol." + d));
      };
      u.store = o;
    }, function(t, i) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, i, e) {
      var o = e(12);
      t.exports = function(n) {
        if (!o(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(t, i, e) {
      var o = e(2), n = e(8), a = e(56), s = e(6), u = "prototype", d = function(f, c, p) {
        var _, S, g, C = f & d.F, E = f & d.G, R = f & d.S, L = f & d.P, M = f & d.B, N = f & d.W, b = E ? n : n[c] || (n[c] = {}), m = b[u], k = E ? o : R ? o[c] : (o[c] || {})[u];
        E && (p = c);
        for (_ in p)
          S = !C && k && k[_] !== void 0, S && _ in b || (g = S ? k[_] : p[_], b[_] = E && typeof k[_] != "function" ? p[_] : M && S ? a(g, o) : N && k[_] == g ? function(x) {
            var T = function(O, j, Y) {
              if (this instanceof x) {
                switch (arguments.length) {
                  case 0:
                    return new x();
                  case 1:
                    return new x(O);
                  case 2:
                    return new x(O, j);
                }
                return new x(O, j, Y);
              }
              return x.apply(this, arguments);
            };
            return T[u] = x[u], T;
          }(g) : L && typeof g == "function" ? a(Function.call, g) : g, L && ((b.virtual || (b.virtual = {}))[_] = g, f & d.R && m && !m[_] && s(m, _, g)));
      };
      d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, t.exports = d;
    }, function(t, i) {
      t.exports = function(e) {
        try {
          return !!e();
        } catch {
          return !0;
        }
      };
    }, function(t, i) {
      t.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    }, function(t, i, e) {
      var o = e(38), n = e(17);
      t.exports = Object.keys || function(a) {
        return o(a, n);
      };
    }, function(t, i) {
      t.exports = function(e, o) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: o };
      };
    }, function(t, i) {
      var e = 0, o = Math.random();
      t.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + o).toString(36));
      };
    }, function(t, i) {
      t.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    }, function(t, i) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(t, i) {
      t.exports = {};
    }, function(t, i) {
      t.exports = !0;
    }, function(t, i) {
      i.f = {}.propertyIsEnumerable;
    }, function(t, i, e) {
      var o = e(4).f, n = e(3), a = e(7)("toStringTag");
      t.exports = function(s, u, d) {
        s && !n(s = d ? s : s.prototype, a) && o(s, a, { configurable: !0, value: u });
      };
    }, function(t, i, e) {
      var o = e(23)("keys"), n = e(15);
      t.exports = function(a) {
        return o[a] || (o[a] = n(a));
      };
    }, function(t, i, e) {
      var o = e(2), n = "__core-js_shared__", a = o[n] || (o[n] = {});
      t.exports = function(s) {
        return a[s] || (a[s] = {});
      };
    }, function(t, i) {
      var e = Math.ceil, o = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? o : e)(n);
      };
    }, function(t, i, e) {
      var o = e(12);
      t.exports = function(n, a) {
        if (!o(n))
          return n;
        var s, u;
        if (a && typeof (s = n.toString) == "function" && !o(u = s.call(n)) || typeof (s = n.valueOf) == "function" && !o(u = s.call(n)) || !a && typeof (s = n.toString) == "function" && !o(u = s.call(n)))
          return u;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, i, e) {
      var o = e(2), n = e(8), a = e(19), s = e(27), u = e(4).f;
      t.exports = function(d) {
        var f = n.Symbol || (n.Symbol = a ? {} : o.Symbol || {});
        d.charAt(0) == "_" || d in f || u(f, d, { value: s.f(d) });
      };
    }, function(t, i, e) {
      i.f = e(7);
    }, function(t, i) {
      i.__esModule = !0, i.default = function(e, o) {
        if (!(e instanceof o))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, i, e) {
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      i.__esModule = !0;
      var n = e(45), a = o(n);
      i.default = function() {
        function s(u, d) {
          for (var f = 0; f < d.length; f++) {
            var c = d[f];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), (0, a.default)(u, c.key, c);
          }
        }
        return function(u, d, f) {
          return d && s(u.prototype, d), f && s(u, f), u;
        };
      }();
    }, function(t, i) {
      var e = {}.toString;
      t.exports = function(o) {
        return e.call(o).slice(8, -1);
      };
    }, function(t, i, e) {
      var o = e(12), n = e(2).document, a = o(n) && o(n.createElement);
      t.exports = function(s) {
        return a ? n.createElement(s) : {};
      };
    }, function(t, i, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, i, e) {
      var o = e(19), n = e(10), a = e(39), s = e(6), u = e(3), d = e(18), f = e(61), c = e(21), p = e(67), _ = e(7)("iterator"), S = !([].keys && "next" in [].keys()), g = "@@iterator", C = "keys", E = "values", R = function() {
        return this;
      };
      t.exports = function(L, M, N, b, m, k, x) {
        f(N, M, b);
        var T, O, j, Y = function($) {
          if (!S && $ in I)
            return I[$];
          switch ($) {
            case C:
              return function() {
                return new N(this, $);
              };
            case E:
              return function() {
                return new N(this, $);
              };
          }
          return function() {
            return new N(this, $);
          };
        }, K = M + " Iterator", z = m == E, J = !1, I = L.prototype, D = I[_] || I[g] || m && I[m], U = D || Y(m), F = m ? z ? Y("entries") : U : void 0, Q = M == "Array" && I.entries || D;
        if (Q && (j = p(Q.call(new L())), j !== Object.prototype && (c(j, K, !0), o || u(j, _) || s(j, _, R))), z && D && D.name !== E && (J = !0, U = function() {
          return D.call(this);
        }), o && !x || !S && !J && I[_] || s(I, _, U), d[M] = U, d[K] = R, m)
          if (T = { values: z ? U : Y(E), keys: k ? U : Y(C), entries: F }, x)
            for (O in T)
              O in I || a(I, O, T[O]);
          else
            n(n.P + n.F * (S || J), M, T);
        return T;
      };
    }, function(t, i, e) {
      var o = e(9), n = e(35), a = e(17), s = e(22)("IE_PROTO"), u = function() {
      }, d = "prototype", f = function() {
        var c, p = e(31)("iframe"), _ = a.length, S = "<", g = ">";
        for (p.style.display = "none", e(58).appendChild(p), p.src = "javascript:", c = p.contentWindow.document, c.open(), c.write(S + "script" + g + "document.F=Object" + S + "/script" + g), c.close(), f = c.F; _--; )
          delete f[d][a[_]];
        return f();
      };
      t.exports = Object.create || function(c, p) {
        var _;
        return c !== null ? (u[d] = o(c), _ = new u(), u[d] = null, _[s] = c) : _ = f(), p === void 0 ? _ : n(_, p);
      };
    }, function(t, i, e) {
      var o = e(4), n = e(9), a = e(13);
      t.exports = e(1) ? Object.defineProperties : function(s, u) {
        n(s);
        for (var d, f = a(u), c = f.length, p = 0; c > p; )
          o.f(s, d = f[p++], u[d]);
        return s;
      };
    }, function(t, i, e) {
      var o = e(38), n = e(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(a) {
        return o(a, n);
      };
    }, function(t, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(t, i, e) {
      var o = e(3), n = e(5), a = e(55)(!1), s = e(22)("IE_PROTO");
      t.exports = function(u, d) {
        var f, c = n(u), p = 0, _ = [];
        for (f in c)
          f != s && o(c, f) && _.push(f);
        for (; d.length > p; )
          o(c, f = d[p++]) && (~a(_, f) || _.push(f));
        return _;
      };
    }, function(t, i, e) {
      t.exports = e(6);
    }, function(t, i, e) {
      function o(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function n(p, _) {
        for (p = String(p), _ = _ || 2; p.length < _; )
          p = "0" + p;
        return p;
      }
      function a(p) {
        var _ = new Date(p.getFullYear(), p.getMonth(), p.getDate());
        _.setDate(_.getDate() - (_.getDay() + 6) % 7 + 3);
        var S = new Date(_.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var g = _.getTimezoneOffset() - S.getTimezoneOffset();
        _.setHours(_.getHours() - g);
        var C = (_ - S) / 6048e5;
        return 1 + Math.floor(C);
      }
      function s(p) {
        var _ = p.getDay();
        return _ === 0 && (_ = 7), _;
      }
      function u(p) {
        return p === null ? "null" : p === void 0 ? "undefined" : (typeof p > "u" ? "undefined" : (0, f.default)(p)) !== "object" ? typeof p > "u" ? "undefined" : (0, f.default)(p) : Array.isArray(p) ? "array" : {}.toString.call(p).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var d = e(48), f = o(d), c = function() {
        var p = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, _ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(g, C, E, R) {
          if (arguments.length !== 1 || u(g) !== "string" || /\d/.test(g) || (C = g, g = void 0), g = g || new Date(), g instanceof Date || (g = new Date(g)), isNaN(g))
            throw TypeError("Invalid date");
          C = String(c.masks[C] || C || c.masks.default);
          var L = C.slice(0, 4);
          L !== "UTC:" && L !== "GMT:" || (C = C.slice(4), E = !0, L === "GMT:" && (R = !0));
          var M = E ? "getUTC" : "get", N = g[M + "Date"](), b = g[M + "Day"](), m = g[M + "Month"](), k = g[M + "FullYear"](), x = g[M + "Hours"](), T = g[M + "Minutes"](), O = g[M + "Seconds"](), j = g[M + "Milliseconds"](), Y = E ? 0 : g.getTimezoneOffset(), K = a(g), z = s(g), J = { d: N, dd: n(N), ddd: c.i18n.dayNames[b], dddd: c.i18n.dayNames[b + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(k).slice(2), yyyy: k, h: x % 12 || 12, hh: n(x % 12 || 12), H: x, HH: n(x), M: T, MM: n(T), s: O, ss: n(O), l: n(j, 3), L: n(Math.round(j / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: R ? "GMT" : E ? "UTC" : (String(g).match(_) || [""]).pop().replace(S, ""), o: (Y > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(Y) / 60) + Math.abs(Y) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: K, N: z };
          return C.replace(p, function(I) {
            return I in J ? J[I] : I.slice(1, I.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = c;
    }, function(t, i, e) {
      function o(R) {
        return R && R.__esModule ? R : { default: R };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(44), a = o(n), s = e(28), u = o(s), d = e(29), f = o(d), c = e(43), p = o(c), _ = e(42), S = o(_), g = e(40), C = o(g), E = function() {
        function R(L) {
          var M = this;
          (0, u.default)(this, R), this.element = L, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, a.default)(this.element, { valueAsDate: { get: function() {
            if (!M.element.value)
              return null;
            var b = M.format || "yyyy-mm-dd", m = M.element.value.match(/(\d+)/g), k = 0, x = {};
            return b.replace(/(yyyy|dd|mm)/g, function(T) {
              x[T] = k++;
            }), new Date(m[x.yyyy], m[x.mm] - 1, m[x.dd]);
          }, set: function(b) {
            M.element.value = (0, C.default)(b, M.format);
          } }, valueAsNumber: { get: function() {
            return M.element.value ? M.element.valueAsDate.valueOf() : NaN;
          }, set: function(b) {
            M.element.valueAsDate = new Date(b);
          } } });
          var N = function(b) {
            var m = M.element;
            m.locale = M.localeText, p.default.attachTo(m);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(b) {
            var m = new Date();
            switch (b.keyCode) {
              case 9:
              case 27:
                p.default.hide();
                break;
              case 38:
                M.element.valueAsDate && (m.setDate(M.element.valueAsDate.getDate() + 1), M.element.valueAsDate = m, p.default.pingInput());
                break;
              case 40:
                M.element.valueAsDate && (m.setDate(M.element.valueAsDate.getDate() - 1), M.element.valueAsDate = m, p.default.pingInput());
            }
            p.default.sync();
          }), this.element.addEventListener("keyup", function(b) {
            p.default.sync();
          });
        }
        return (0, f.default)(R, [{ key: "getLocaleText", value: function() {
          var L = this.locale.toLowerCase();
          for (var M in S.default) {
            var N = M.split("_");
            if (N.map(function(b) {
              return b.toLowerCase();
            }), ~N.indexOf(L) || ~N.indexOf(L.substr(0, 2)))
              return S.default[M];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var L = document.createElement("input");
          L.setAttribute("type", "date");
          var M = "not-a-date";
          return L.setAttribute("value", M), L.value !== M;
        } }, { key: "addPickerToDateInputs", value: function() {
          var L = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), M = L.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new R(L[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var L = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), M = L.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new R(L[N]);
        } }]), R;
      }();
      i.default = E;
    }, function(t, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = e;
    }, function(t, i, e) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(28), a = o(n), s = e(29), u = o(s), d = function() {
        function f() {
          var c = this;
          if ((0, a.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            c.date.setYear(c.year.value), c.refreshDaysMatrix();
          });
          var p = document.createElement("span");
          p.className = "yearSelect-wrapper", p.appendChild(this.year), this.container.appendChild(p), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            c.date.setMonth(c.month.value), c.refreshDaysMatrix();
          });
          var _ = document.createElement("span");
          _.className = "monthSelect-wrapper", _.appendChild(this.month), this.container.appendChild(_), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var g = new Date();
            c.date = new Date(g.getFullYear() + "/" + ("0" + (g.getMonth() + 1)).slice(-2) + "/" + ("0" + g.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(g) {
            var C = g.target;
            if (!C.hasAttribute("data-day"))
              return !1;
            var E = c.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), C.setAttribute("data-selected", ""), c.date.setDate(parseInt(C.textContent)), c.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(g) {
            if (c.isOpen) {
              for (var C = g.target, E = C === c.container || C === c.input; !E && (C = C.parentNode); )
                E = C === c.container;
              (g.target.getAttribute("type") !== "date" && !E || !E) && c.hide();
            }
          }, this.removeBlur = function(g) {
            c.isOpen && c.hide();
          };
        }
        return (0, u.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var c = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", c.removeClickOut), document.addEventListener("touchstart", c.removeClickOut);
          }, 500), window.onpopstate = function() {
            c.hide();
          };
        } }, { key: "goto", value: function(c) {
          var p = this, _ = c.getBoundingClientRect();
          this.container.style.top = _.top + _.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), g = S.width ? S.width : 280, C = function() {
            return p.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = _.right - g;
          _.right < g ? (E = _.left, this.container.className = C() + " polyfill-left-aligned") : this.container.className = C() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(c) {
          return !(c === this.input && this.isOpen || (this.input = c, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = f.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var c = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            c.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var c = ["<tr>"], p = 0, _ = this.locale.days.length; p < _; ++p)
            c.push('<th scope="col">' + this.locale.days[p] + "</th>");
          this.daysHead.innerHTML = c.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var c = this.date.getFullYear(), p = this.date.getMonth(), _ = new Date(c, p, 1).getDay(), S = new Date(this.date.getFullYear(), p + 1, 0).getDate(), g = f.absoluteDate(this.input.valueAsDate) || !1, C = g && c === g.getFullYear() && p === g.getMonth(), E = [], R = 0; R < S + _; ++R)
            if (R % 7 === 0 && E.push(`
          ` + (R !== 0 ? "</tr>" : "") + `
          <tr>
        `), R + 1 <= _)
              E.push("<td></td>");
            else {
              var L = R + 1 - _, M = C && g.getDate() === L;
              E.push("<td data-day " + (M ? "data-selected" : "") + `>
          ` + L + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var c = void 0, p = void 0;
          try {
            c = new Event("input"), p = new Event("change");
          } catch {
            c = document.createEvent("KeyboardEvent"), c.initEvent("input", !0, !1), p = document.createEvent("KeyboardEvent"), p.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(c), this.input.dispatchEvent(p);
        } }], [{ key: "createRangeSelect", value: function(c, p, _, S) {
          c.innerHTML = "";
          for (var g = p; g <= _; ++g) {
            var C = document.createElement("option");
            c.appendChild(C);
            var E = S ? S[g - p] : g;
            C.text = E, C.value = g;
          }
          return c;
        } }, { key: "absoluteDate", value: function(c) {
          return c && new Date(c.getTime() + 60 * c.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new d(), i.default = window.thePicker;
    }, function(t, i, e) {
      t.exports = { default: e(49), __esModule: !0 };
    }, function(t, i, e) {
      t.exports = { default: e(50), __esModule: !0 };
    }, function(t, i, e) {
      t.exports = { default: e(51), __esModule: !0 };
    }, function(t, i, e) {
      t.exports = { default: e(52), __esModule: !0 };
    }, function(t, i, e) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      i.__esModule = !0;
      var n = e(47), a = o(n), s = e(46), u = o(s), d = typeof u.default == "function" && typeof a.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof u.default == "function" && f.constructor === u.default ? "symbol" : typeof f;
      };
      i.default = typeof u.default == "function" && d(a.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : d(f);
      } : function(f) {
        return f && typeof u.default == "function" && f.constructor === u.default ? "symbol" : typeof f > "u" ? "undefined" : d(f);
      };
    }, function(t, i, e) {
      e(73);
      var o = e(8).Object;
      t.exports = function(n, a) {
        return o.defineProperties(n, a);
      };
    }, function(t, i, e) {
      e(74);
      var o = e(8).Object;
      t.exports = function(n, a, s) {
        return o.defineProperty(n, a, s);
      };
    }, function(t, i, e) {
      e(77), e(75), e(78), e(79), t.exports = e(8).Symbol;
    }, function(t, i, e) {
      e(76), e(80), t.exports = e(27).f("iterator");
    }, function(t, i) {
      t.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    }, function(t, i) {
      t.exports = function() {
      };
    }, function(t, i, e) {
      var o = e(5), n = e(70), a = e(69);
      t.exports = function(s) {
        return function(u, d, f) {
          var c, p = o(u), _ = n(p.length), S = a(f, _);
          if (s && d != d) {
            for (; _ > S; )
              if (c = p[S++], c != c)
                return !0;
          } else
            for (; _ > S; S++)
              if ((s || S in p) && p[S] === d)
                return s || S || 0;
          return !s && -1;
        };
      };
    }, function(t, i, e) {
      var o = e(53);
      t.exports = function(n, a, s) {
        if (o(n), a === void 0)
          return n;
        switch (s) {
          case 1:
            return function(u) {
              return n.call(a, u);
            };
          case 2:
            return function(u, d) {
              return n.call(a, u, d);
            };
          case 3:
            return function(u, d, f) {
              return n.call(a, u, d, f);
            };
        }
        return function() {
          return n.apply(a, arguments);
        };
      };
    }, function(t, i, e) {
      var o = e(13), n = e(37), a = e(20);
      t.exports = function(s) {
        var u = o(s), d = n.f;
        if (d)
          for (var f, c = d(s), p = a.f, _ = 0; c.length > _; )
            p.call(s, f = c[_++]) && u.push(f);
        return u;
      };
    }, function(t, i, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, i, e) {
      var o = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return o(n) == "String" ? n.split("") : Object(n);
      };
    }, function(t, i, e) {
      var o = e(30);
      t.exports = Array.isArray || function(n) {
        return o(n) == "Array";
      };
    }, function(t, i, e) {
      var o = e(34), n = e(14), a = e(21), s = {};
      e(6)(s, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(u, d, f) {
        u.prototype = o(s, { next: n(1, f) }), a(u, d + " Iterator");
      };
    }, function(t, i) {
      t.exports = function(e, o) {
        return { value: o, done: !!e };
      };
    }, function(t, i, e) {
      var o = e(13), n = e(5);
      t.exports = function(a, s) {
        for (var u, d = n(a), f = o(d), c = f.length, p = 0; c > p; )
          if (d[u = f[p++]] === s)
            return u;
      };
    }, function(t, i, e) {
      var o = e(15)("meta"), n = e(12), a = e(3), s = e(4).f, u = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(C) {
        s(C, o, { value: { i: "O" + ++u, w: {} } });
      }, p = function(C, E) {
        if (!n(C))
          return typeof C == "symbol" ? C : (typeof C == "string" ? "S" : "P") + C;
        if (!a(C, o)) {
          if (!d(C))
            return "F";
          if (!E)
            return "E";
          c(C);
        }
        return C[o].i;
      }, _ = function(C, E) {
        if (!a(C, o)) {
          if (!d(C))
            return !0;
          if (!E)
            return !1;
          c(C);
        }
        return C[o].w;
      }, S = function(C) {
        return f && g.NEED && d(C) && !a(C, o) && c(C), C;
      }, g = t.exports = { KEY: o, NEED: !1, fastKey: p, getWeak: _, onFreeze: S };
    }, function(t, i, e) {
      var o = e(20), n = e(14), a = e(5), s = e(25), u = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      i.f = e(1) ? f : function(c, p) {
        if (c = a(c), p = s(p, !0), d)
          try {
            return f(c, p);
          } catch {
          }
        if (u(c, p))
          return n(!o.f.call(c, p), c[p]);
      };
    }, function(t, i, e) {
      var o = e(5), n = e(36).f, a = {}.toString, s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function(d) {
        try {
          return n(d);
        } catch {
          return s.slice();
        }
      };
      t.exports.f = function(d) {
        return s && a.call(d) == "[object Window]" ? u(d) : n(o(d));
      };
    }, function(t, i, e) {
      var o = e(3), n = e(71), a = e(22)("IE_PROTO"), s = Object.prototype;
      t.exports = Object.getPrototypeOf || function(u) {
        return u = n(u), o(u, a) ? u[a] : typeof u.constructor == "function" && u instanceof u.constructor ? u.constructor.prototype : u instanceof Object ? s : null;
      };
    }, function(t, i, e) {
      var o = e(24), n = e(16);
      t.exports = function(a) {
        return function(s, u) {
          var d, f, c = String(n(s)), p = o(u), _ = c.length;
          return p < 0 || p >= _ ? a ? "" : void 0 : (d = c.charCodeAt(p), d < 55296 || d > 56319 || p + 1 === _ || (f = c.charCodeAt(p + 1)) < 56320 || f > 57343 ? a ? c.charAt(p) : d : a ? c.slice(p, p + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, i, e) {
      var o = e(24), n = Math.max, a = Math.min;
      t.exports = function(s, u) {
        return s = o(s), s < 0 ? n(s + u, 0) : a(s, u);
      };
    }, function(t, i, e) {
      var o = e(24), n = Math.min;
      t.exports = function(a) {
        return a > 0 ? n(o(a), 9007199254740991) : 0;
      };
    }, function(t, i, e) {
      var o = e(16);
      t.exports = function(n) {
        return Object(o(n));
      };
    }, function(t, i, e) {
      var o = e(54), n = e(62), a = e(18), s = e(5);
      t.exports = e(33)(Array, "Array", function(u, d) {
        this._t = s(u), this._i = 0, this._k = d;
      }, function() {
        var u = this._t, d = this._k, f = this._i++;
        return !u || f >= u.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, u[f]) : n(0, [f, u[f]]);
      }, "values"), a.Arguments = a.Array, o("keys"), o("values"), o("entries");
    }, function(t, i, e) {
      var o = e(10);
      o(o.S + o.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, i, e) {
      var o = e(10);
      o(o.S + o.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, i) {
    }, function(t, i, e) {
      var o = e(68)(!0);
      e(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, a = this._t, s = this._i;
        return s >= a.length ? { value: void 0, done: !0 } : (n = o(a, s), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, i, e) {
      var o = e(2), n = e(3), a = e(1), s = e(10), u = e(39), d = e(64).KEY, f = e(11), c = e(23), p = e(21), _ = e(15), S = e(7), g = e(27), C = e(26), E = e(63), R = e(57), L = e(60), M = e(9), N = e(5), b = e(25), m = e(14), k = e(34), x = e(66), T = e(65), O = e(4), j = e(13), Y = T.f, K = O.f, z = x.f, J = o.Symbol, I = o.JSON, D = I && I.stringify, U = "prototype", F = S("_hidden"), Q = S("toPrimitive"), $ = {}.propertyIsEnumerable, X = c("symbol-registry"), ee = c("symbols"), de = c("op-symbols"), V = Object[U], re = typeof J == "function", ce = o.QObject, ge = !ce || !ce[U] || !ce[U].findChild, te = a && f(function() {
        return k(K({}, "a", { get: function() {
          return K(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(w, A, H) {
        var W = Y(V, A);
        W && delete V[A], K(w, A, H), W && w !== V && K(V, A, W);
      } : K, ae = function(w) {
        var A = ee[w] = k(J[U]);
        return A._k = w, A;
      }, fe = re && typeof J.iterator == "symbol" ? function(w) {
        return typeof w == "symbol";
      } : function(w) {
        return w instanceof J;
      }, ie = function(w, A, H) {
        return w === V && ie(de, A, H), M(w), A = b(A, !0), M(H), n(ee, A) ? (H.enumerable ? (n(w, F) && w[F][A] && (w[F][A] = !1), H = k(H, { enumerable: m(0, !1) })) : (n(w, F) || K(w, F, m(1, {})), w[F][A] = !0), te(w, A, H)) : K(w, A, H);
      }, Me = function(w, A) {
        M(w);
        for (var H, W = R(A = N(A)), ne = 0, pe = W.length; pe > ne; )
          ie(w, H = W[ne++], A[H]);
        return w;
      }, G = function(w, A) {
        return A === void 0 ? k(w) : Me(k(w), A);
      }, P = function(w) {
        var A = $.call(this, w = b(w, !0));
        return !(this === V && n(ee, w) && !n(de, w)) && (!(A || !n(this, w) || !n(ee, w) || n(this, F) && this[F][w]) || A);
      }, ve = function(w, A) {
        if (w = N(w), A = b(A, !0), w !== V || !n(ee, A) || n(de, A)) {
          var H = Y(w, A);
          return !H || !n(ee, A) || n(w, F) && w[F][A] || (H.enumerable = !0), H;
        }
      }, xe = function(w) {
        for (var A, H = z(N(w)), W = [], ne = 0; H.length > ne; )
          n(ee, A = H[ne++]) || A == F || A == d || W.push(A);
        return W;
      }, ke = function(w) {
        for (var A, H = w === V, W = z(H ? de : N(w)), ne = [], pe = 0; W.length > pe; )
          !n(ee, A = W[pe++]) || H && !n(V, A) || ne.push(ee[A]);
        return ne;
      };
      re || (J = function() {
        if (this instanceof J)
          throw TypeError("Symbol is not a constructor!");
        var w = _(arguments.length > 0 ? arguments[0] : void 0), A = function(H) {
          this === V && A.call(de, H), n(this, F) && n(this[F], w) && (this[F][w] = !1), te(this, w, m(1, H));
        };
        return a && ge && te(V, w, { configurable: !0, set: A }), ae(w);
      }, u(J[U], "toString", function() {
        return this._k;
      }), T.f = ve, O.f = ie, e(36).f = x.f = xe, e(20).f = P, e(37).f = ke, a && !e(19) && u(V, "propertyIsEnumerable", P, !0), g.f = function(w) {
        return ae(S(w));
      }), s(s.G + s.W + s.F * !re, { Symbol: J });
      for (var he = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; he.length > me; )
        S(he[me++]);
      for (var he = j(S.store), me = 0; he.length > me; )
        C(he[me++]);
      s(s.S + s.F * !re, "Symbol", { for: function(w) {
        return n(X, w += "") ? X[w] : X[w] = J(w);
      }, keyFor: function(w) {
        if (fe(w))
          return E(X, w);
        throw TypeError(w + " is not a symbol!");
      }, useSetter: function() {
        ge = !0;
      }, useSimple: function() {
        ge = !1;
      } }), s(s.S + s.F * !re, "Object", { create: G, defineProperty: ie, defineProperties: Me, getOwnPropertyDescriptor: ve, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), I && s(s.S + s.F * (!re || f(function() {
        var w = J();
        return D([w]) != "[null]" || D({ a: w }) != "{}" || D(Object(w)) != "{}";
      })), "JSON", { stringify: function(w) {
        if (w !== void 0 && !fe(w)) {
          for (var A, H, W = [w], ne = 1; arguments.length > ne; )
            W.push(arguments[ne++]);
          return A = W[1], typeof A == "function" && (H = A), !H && L(A) || (A = function(pe, ye) {
            if (H && (ye = H.call(this, pe, ye)), !fe(ye))
              return ye;
          }), W[1] = A, D.apply(I, W);
        }
      } }), J[U][Q] || e(6)(J[U], Q, J[U].valueOf), p(J, "Symbol"), p(Math, "Math", !0), p(o.JSON, "JSON", !0);
    }, function(t, i, e) {
      e(26)("asyncIterator");
    }, function(t, i, e) {
      e(26)("observable");
    }, function(t, i, e) {
      e(72);
      for (var o = e(2), n = e(6), a = e(18), s = e(7)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = u[d], c = o[f], p = c && c.prototype;
        p && !p[s] && n(p, s, f), a[f] = a.Array;
      }
    }, function(t, i, e) {
      i = t.exports = e(82)(), i.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, i) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var o = [], n = 0; n < this.length; n++) {
            var a = this[n];
            a[2] ? o.push("@media " + a[2] + "{" + a[1] + "}") : o.push(a[1]);
          }
          return o.join("");
        }, e.i = function(o, n) {
          typeof o == "string" && (o = [[null, o, ""]]);
          for (var a = {}, s = 0; s < this.length; s++) {
            var u = this[s][0];
            typeof u == "number" && (a[u] = !0);
          }
          for (s = 0; s < o.length; s++) {
            var d = o[s];
            typeof d[0] == "number" && a[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), e.push(d));
          }
        }, e;
      };
    }, function(t, i, e) {
      function o(b, m) {
        for (var k = 0; k < b.length; k++) {
          var x = b[k], T = S[x.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](x.parts[O]);
            for (; O < x.parts.length; O++)
              T.parts.push(f(x.parts[O], m));
          } else {
            for (var j = [], O = 0; O < x.parts.length; O++)
              j.push(f(x.parts[O], m));
            S[x.id] = { id: x.id, refs: 1, parts: j };
          }
        }
      }
      function n(b) {
        for (var m = [], k = {}, x = 0; x < b.length; x++) {
          var T = b[x], O = T[0], j = T[1], Y = T[2], K = T[3], z = { css: j, media: Y, sourceMap: K };
          k[O] ? k[O].parts.push(z) : m.push(k[O] = { id: O, parts: [z] });
        }
        return m;
      }
      function a(b, m) {
        var k = E(), x = M[M.length - 1];
        if (b.insertAt === "top")
          x ? x.nextSibling ? k.insertBefore(m, x.nextSibling) : k.appendChild(m) : k.insertBefore(m, k.firstChild), M.push(m);
        else {
          if (b.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          k.appendChild(m);
        }
      }
      function s(b) {
        b.parentNode.removeChild(b);
        var m = M.indexOf(b);
        m >= 0 && M.splice(m, 1);
      }
      function u(b) {
        var m = document.createElement("style");
        return m.type = "text/css", a(b, m), m;
      }
      function d(b) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", a(b, m), m;
      }
      function f(b, m) {
        var k, x, T;
        if (m.singleton) {
          var O = L++;
          k = R || (R = u(m)), x = c.bind(null, k, O, !1), T = c.bind(null, k, O, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (k = d(m), x = _.bind(null, k), T = function() {
            s(k), k.href && URL.revokeObjectURL(k.href);
          }) : (k = u(m), x = p.bind(null, k), T = function() {
            s(k);
          });
        return x(b), function(j) {
          if (j) {
            if (j.css === b.css && j.media === b.media && j.sourceMap === b.sourceMap)
              return;
            x(b = j);
          } else
            T();
        };
      }
      function c(b, m, k, x) {
        var T = k ? "" : x.css;
        if (b.styleSheet)
          b.styleSheet.cssText = N(m, T);
        else {
          var O = document.createTextNode(T), j = b.childNodes;
          j[m] && b.removeChild(j[m]), j.length ? b.insertBefore(O, j[m]) : b.appendChild(O);
        }
      }
      function p(b, m) {
        var k = m.css, x = m.media;
        if (x && b.setAttribute("media", x), b.styleSheet)
          b.styleSheet.cssText = k;
        else {
          for (; b.firstChild; )
            b.removeChild(b.firstChild);
          b.appendChild(document.createTextNode(k));
        }
      }
      function _(b, m) {
        var k = m.css, x = m.sourceMap;
        x && (k += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(x)))) + " */");
        var T = new Blob([k], { type: "text/css" }), O = b.href;
        b.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var S = {}, g = function(b) {
        var m;
        return function() {
          return typeof m > "u" && (m = b.apply(this, arguments)), m;
        };
      }, C = g(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = g(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), R = null, L = 0, M = [];
      t.exports = function(b, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = C()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var k = n(b);
        return o(k, m), function(x) {
          for (var T = [], O = 0; O < k.length; O++) {
            var j = k[O], Y = S[j.id];
            Y.refs--, T.push(Y);
          }
          if (x) {
            var K = n(x);
            o(K, m);
          }
          for (var O = 0; O < T.length; O++) {
            var Y = T[O];
            if (Y.refs === 0) {
              for (var z = 0; z < Y.parts.length; z++)
                Y.parts[z]();
              delete S[Y.id];
            }
          }
        };
      };
      var N = function() {
        var b = [];
        return function(m, k) {
          return b[m] = k, b.filter(Boolean).join(`
`);
        };
      }();
    }, function(t, i, e) {
      var o = e(81);
      typeof o == "string" && (o = [[t.id, o, ""]]), e(83)(o, {}), o.locals && (t.exports = o.locals);
    }]);
  });
})(wt);
function xt(l) {
  let r, t, i;
  function e(a, s) {
    return (
      /*isIdle*/
      a[4] || /*isFetching*/
      a[6] ? Dt : (
        /*backendData*/
        a[3] ? St : (
          /*error*/
          a[5] ? Ct : Mt
        )
      )
    );
  }
  let o = e(l), n = o(l);
  return {
    c() {
      r = v("div"), n.c(), y(r, "class", t = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), y(r, "style", i = `
        background-color: ${/*background*/
      l[8]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[2]};
`);
    },
    m(a, s) {
      ue(a, r, s), n.m(r, null);
    },
    p(a, s) {
      o === (o = e(a)) && n ? n.p(a, s) : (n.d(1), n = o(a), n && (n.c(), n.m(r, null))), s[0] & /*shadow*/
      2 && t !== (t = `w-full p-4 shadow-${/*shadow*/
      a[1]}`) && y(r, "class", t), s[0] & /*background, border_radius, text_color*/
      261 && i !== (i = `
        background-color: ${/*background*/
      a[8]};
        border-radius: ${/*border_radius*/
      a[0]};
        color: ${/*text_color*/
      a[2]};
`) && y(r, "style", i);
    },
    d(a) {
      a && se(r), n.d();
    }
  };
}
function kt(l) {
  let r, t, i, e, o, n;
  function a(d, f) {
    return (
      /*statusCheckError*/
      d[7] === ot ? Tt : At
    );
  }
  let s = a(l), u = s(l);
  return {
    c() {
      r = v("div"), t = v("div"), i = v("h1"), i.textContent = "An error occured", e = Z(), u.c(), y(i, "class", "text-2xl"), y(t, "class", "flex flex-col items-center gap-4"), y(r, "class", o = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), y(r, "style", n = `
        background-color: ${/*background*/
      l[8]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[2]};
`);
    },
    m(d, f) {
      ue(d, r, f), h(r, t), h(t, i), h(t, e), u.m(t, null);
    },
    p(d, f) {
      s === (s = a(d)) && u ? u.p(d, f) : (u.d(1), u = s(d), u && (u.c(), u.m(t, null))), f[0] & /*shadow*/
      2 && o !== (o = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && y(r, "class", o), f[0] & /*background, border_radius, text_color*/
      261 && n !== (n = `
        background-color: ${/*background*/
      d[8]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[2]};
`) && y(r, "style", n);
    },
    d(d) {
      d && se(r), u.d();
    }
  };
}
function Mt(l) {
  let r, t, i, e, o, n, a;
  return {
    c() {
      r = v("div"), t = v("h1"), t.textContent = "An unknown error", i = Z(), e = v("button"), o = B("Reset Form"), y(t, "class", "text-2xl"), y(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        e,
        "background-color",
        /*button_color*/
        l[9]
      ), q(
        e,
        "color",
        /*text_color*/
        l[2]
      ), y(r, "class", "flex flex-col items-center");
    },
    m(s, u) {
      ue(s, r, u), h(r, t), h(r, i), h(r, e), h(e, o), n || (a = He(
        e,
        "click",
        /*click_handler_2*/
        l[26]
      ), n = !0);
    },
    p(s, u) {
      u[0] & /*button_color*/
      512 && q(
        e,
        "background-color",
        /*button_color*/
        s[9]
      ), u[0] & /*text_color*/
      4 && q(
        e,
        "color",
        /*text_color*/
        s[2]
      );
    },
    d(s) {
      s && se(r), n = !1, a();
    }
  };
}
function Ct(l) {
  let r, t, i, e, o, n, a, s, u, d;
  return {
    c() {
      r = v("div"), t = v("h1"), t.textContent = "Error", i = Z(), e = v("pre"), o = B(
        /*error*/
        l[5]
      ), n = Z(), a = v("button"), s = B("Reset Form"), y(t, "class", "text-2xl"), y(e, "class", "py-3"), y(a, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        a,
        "background-color",
        /*button_color*/
        l[9]
      ), q(
        a,
        "color",
        /*text_color*/
        l[2]
      ), y(r, "class", "flex flex-col items-center");
    },
    m(f, c) {
      ue(f, r, c), h(r, t), h(r, i), h(r, e), h(e, o), h(r, n), h(r, a), h(a, s), u || (d = He(
        a,
        "click",
        /*click_handler_1*/
        l[25]
      ), u = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      32 && be(
        o,
        /*error*/
        f[5]
      ), c[0] & /*button_color*/
      512 && q(
        a,
        "background-color",
        /*button_color*/
        f[9]
      ), c[0] & /*text_color*/
      4 && q(
        a,
        "color",
        /*text_color*/
        f[2]
      );
    },
    d(f) {
      f && se(r), u = !1, d();
    }
  };
}
function St(l) {
  let r, t, i, e, o, n, a = (
    /*backendData*/
    l[3].data[0].third_party_exchange_rate + ""
  ), s, u, d, f, c = (
    /*backendData*/
    l[3].data[0].ccy_pair + ""
  ), p, _, S = (
    /*backendData*/
    l[3].data[0].mid_market_rate + ""
  ), g, C, E, R, L, M = (
    /*backendData*/
    l[3].data[0].ccy_pair + ""
  ), N, b, m, k = (
    /*backendData*/
    l[3].data[0].sold_ccy + ""
  ), x, T, O = (
    /*backendData*/
    l[3].data[0].third_party_profit + ""
  ), j, Y, K, z, J, I, D, U, F = (
    /*backendData*/
    l[3].data[0].integritas_rate + ""
  ), Q, $, X, ee, de = (
    /*backendData*/
    l[3].data[0].sold_ccy + ""
  ), V, re, ce = (
    /*backendData*/
    l[3].data[0].integritas_savings + ""
  ), ge, te, ae, fe, ie, Me;
  return {
    c() {
      r = v("div"), t = v("div"), i = v("h1"), i.textContent = "Your Broker", e = Z(), o = v("p"), n = B("Your exchange rate was "), s = B(a), u = Z(), d = v("p"), f = B("The interbank rate "), p = B(c), _ = B(`
                        was `), g = B(S), C = B("."), E = Z(), R = v("p"), L = B("Your broker's markup was TODO "), N = B(M), b = B("%."), m = B(`
                    Your broker made `), x = B(k), T = Z(), j = B(O), Y = B(` on this
                    trade.`), K = Z(), z = v("div"), J = v("h1"), J.textContent = "Integritas", I = Z(), D = v("p"), U = B("Our exchange rate was "), Q = B(F), $ = Z(), X = v("p"), ee = B(`We would've saved
                        you `), V = B(de), re = Z(), ge = B(ce), te = Z(), ae = v("button"), fe = B("Calculate again"), y(i, "class", "text-2xl"), y(o, "class", "text-sm"), y(d, "class", "text-sm"), y(t, "class", "flex flex-col gap-2"), y(J, "class", "text-2xl mt-4"), y(D, "class", "text-sm"), y(X, "class", "text-sm"), y(z, "class", "flex flex-col gap-2"), y(r, "class", "flex flex-col divide-y gap-4"), y(ae, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        ae,
        "background-color",
        /*button_color*/
        l[9]
      ), q(
        ae,
        "color",
        /*text_color*/
        l[2]
      );
    },
    m(G, P) {
      ue(G, r, P), h(r, t), h(t, i), h(t, e), h(t, o), h(o, n), h(o, s), h(t, u), h(t, d), h(d, f), h(d, p), h(d, _), h(d, g), h(d, C), h(t, E), h(t, R), h(R, L), h(R, N), h(R, b), h(t, m), h(t, x), h(t, T), h(t, j), h(t, Y), h(r, K), h(r, z), h(z, J), h(z, I), h(z, D), h(D, U), h(D, Q), h(z, $), h(z, X), h(X, ee), h(X, V), h(X, re), h(X, ge), ue(G, te, P), ue(G, ae, P), h(ae, fe), ie || (Me = He(
        ae,
        "click",
        /*click_handler*/
        l[24]
      ), ie = !0);
    },
    p(G, P) {
      P[0] & /*backendData*/
      8 && a !== (a = /*backendData*/
      G[3].data[0].third_party_exchange_rate + "") && be(s, a), P[0] & /*backendData*/
      8 && c !== (c = /*backendData*/
      G[3].data[0].ccy_pair + "") && be(p, c), P[0] & /*backendData*/
      8 && S !== (S = /*backendData*/
      G[3].data[0].mid_market_rate + "") && be(g, S), P[0] & /*backendData*/
      8 && M !== (M = /*backendData*/
      G[3].data[0].ccy_pair + "") && be(N, M), P[0] & /*backendData*/
      8 && k !== (k = /*backendData*/
      G[3].data[0].sold_ccy + "") && be(x, k), P[0] & /*backendData*/
      8 && O !== (O = /*backendData*/
      G[3].data[0].third_party_profit + "") && be(j, O), P[0] & /*backendData*/
      8 && F !== (F = /*backendData*/
      G[3].data[0].integritas_rate + "") && be(Q, F), P[0] & /*backendData*/
      8 && de !== (de = /*backendData*/
      G[3].data[0].sold_ccy + "") && be(V, de), P[0] & /*backendData*/
      8 && ce !== (ce = /*backendData*/
      G[3].data[0].integritas_savings + "") && be(ge, ce), P[0] & /*button_color*/
      512 && q(
        ae,
        "background-color",
        /*button_color*/
        G[9]
      ), P[0] & /*text_color*/
      4 && q(
        ae,
        "color",
        /*text_color*/
        G[2]
      );
    },
    d(G) {
      G && se(r), G && se(te), G && se(ae), ie = !1, Me();
    }
  };
}
function Dt(l) {
  let r, t, i, e, o, n, a, s, u, d, f, c, p, _, S, g, C, E, R, L, M, N, b, m, k, x, T, O, j, Y, K, z, J, I, D, U, F, Q, $, X, ee, de, V, re, ce, ge, te, ae, fe, ie, Me, G, P, ve, xe, ke, he, me, w, A, H, W, ne, pe, ye, Se, De, Oe, Ee, Ae, Ge, Re, Je, We;
  function qe(oe, _e) {
    return (
      /*isFetching*/
      oe[6] ? Ot : Et
    );
  }
  let Fe = qe(l), we = Fe(l);
  return {
    c() {
      r = v("form"), t = v("div"), i = v("div"), e = v("div"), o = v("label"), o.textContent = "Select Date", n = Z(), a = v("input"), s = Z(), u = v("div"), d = v("label"), d.textContent = "Select Time", f = Z(), c = v("input"), p = Z(), _ = v("div"), S = v("div"), g = v("label"), g.textContent = "Sell Amount", C = Z(), E = v("input"), R = Z(), L = v("div"), M = v("label"), N = B("Sell Currency"), b = Z(), m = v("select"), k = v("option"), k.textContent = "GBP", x = v("option"), x.textContent = "USD", T = v("option"), T.textContent = "EUR", O = v("option"), O.textContent = "JPY", j = v("option"), j.textContent = "CHF", Y = v("option"), Y.textContent = "CNY", K = v("option"), K.textContent = "NZD", z = v("option"), z.textContent = "SGD", J = v("option"), J.textContent = "INR", I = v("option"), I.textContent = "AUD", D = v("option"), D.textContent = "CAD", U = v("option"), U.textContent = "HKD", F = v("option"), F.textContent = "MYR", Q = v("option"), Q.textContent = "NOK", $ = v("option"), $.textContent = "ZAR", X = v("option"), X.textContent = "RUB", ee = v("option"), ee.textContent = "SEK", de = Z(), V = v("div"), re = v("div"), ce = v("label"), ce.textContent = "Buy Amount", ge = Z(), te = v("input"), ae = Z(), fe = v("div"), ie = v("label"), Me = B("Buy Currency"), G = Z(), P = v("select"), ve = v("option"), ve.textContent = "USD", xe = v("option"), xe.textContent = "GBP", ke = v("option"), ke.textContent = "EUR", he = v("option"), he.textContent = "JPY", me = v("option"), me.textContent = "CHF", w = v("option"), w.textContent = "CNY", A = v("option"), A.textContent = "NZD", H = v("option"), H.textContent = "SGD", W = v("option"), W.textContent = "INR", ne = v("option"), ne.textContent = "AUD", pe = v("option"), pe.textContent = "CAD", ye = v("option"), ye.textContent = "HKD", Se = v("option"), Se.textContent = "MYR", De = v("option"), De.textContent = "NOK", Oe = v("option"), Oe.textContent = "ZAR", Ee = v("option"), Ee.textContent = "RUB", Ae = v("option"), Ae.textContent = "SEK", Ge = Z(), Re = v("div"), we.c(), y(o, "for", "date"), y(a, "id", "date"), y(a, "type", "date"), y(a, "class", "w-full rounded-md px-3 py-2"), y(a, "name", "date"), y(a, "placeholder", "Select date"), a.required = !0, y(
        a,
        "style",
        /*input_style*/
        l[10]
      ), y(e, "class", "w-full"), y(d, "for", "time"), y(c, "id", "time"), y(c, "type", "time"), y(c, "class", "w-full rounded-md px-3 py-2"), y(c, "name", "time"), y(c, "placeholder", "Select Time"), c.required = !0, y(
        c,
        "style",
        /*input_style*/
        l[10]
      ), y(u, "class", "w-full"), y(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), y(g, "for", "sold_notional"), y(E, "id", "sold_notional"), y(E, "type", "number"), y(E, "step", ".01"), y(E, "class", "w-full rounded-md px-3 py-2"), y(E, "name", "sold_notional"), y(E, "placeholder", "10000"), E.required = !0, y(
        E,
        "style",
        /*input_style*/
        l[10]
      ), y(S, "class", "w-full"), y(M, "for", "sold_ccy"), q(
        M,
        "color",
        /*text_color*/
        l[2]
      ), k.selected = !0, k.__value = "GBP", k.value = k.__value, x.__value = "USD", x.value = x.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, j.__value = "CHF", j.value = j.__value, Y.__value = "CNY", Y.value = Y.__value, K.__value = "NZD", K.value = K.__value, z.__value = "SGD", z.value = z.__value, J.__value = "INR", J.value = J.__value, I.__value = "AUD", I.value = I.__value, D.__value = "CAD", D.value = D.__value, U.__value = "HKD", U.value = U.__value, F.__value = "MYR", F.value = F.__value, Q.__value = "NOK", Q.value = Q.__value, $.__value = "ZAR", $.value = $.__value, X.__value = "RUB", X.value = X.__value, ee.__value = "SEK", ee.value = ee.__value, y(m, "name", "sold_ccy"), y(m, "id", "sold_ccy"), y(m, "class", "w-full rounded-md px-3 py-2"), m.required = !0, y(
        m,
        "style",
        /*input_style*/
        l[10]
      ), y(L, "class", "w-full"), y(_, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(ce, "for", "bought_notional"), y(te, "id", "bought_notional"), y(te, "type", "number"), y(te, "step", ".01"), y(te, "class", "w-full rounded-md px-3 py-2"), y(te, "name", "bought_notional"), y(te, "placeholder", "10000"), te.required = !0, y(
        te,
        "style",
        /*input_style*/
        l[10]
      ), y(re, "class", "w-full"), y(ie, "for", "bought_ccy"), q(
        ie,
        "color",
        /*text_color*/
        l[2]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, he.__value = "JPY", he.value = he.__value, me.__value = "CHF", me.value = me.__value, w.__value = "CNY", w.value = w.__value, A.__value = "NZD", A.value = A.__value, H.__value = "SGD", H.value = H.__value, W.__value = "INR", W.value = W.__value, ne.__value = "AUD", ne.value = ne.__value, pe.__value = "CAD", pe.value = pe.__value, ye.__value = "HKD", ye.value = ye.__value, Se.__value = "MYR", Se.value = Se.__value, De.__value = "NOK", De.value = De.__value, Oe.__value = "ZAR", Oe.value = Oe.__value, Ee.__value = "RUB", Ee.value = Ee.__value, Ae.__value = "SEK", Ae.value = Ae.__value, y(P, "name", "bought_ccy"), y(P, "id", "bought_ccy"), y(P, "class", "w-full rounded-md px-3 py-2"), P.required = !0, y(
        P,
        "style",
        /*input_style*/
        l[10]
      ), y(fe, "class", "w-full"), y(V, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(t, "class", "flex flex-col sm:gap-4");
    },
    m(oe, _e) {
      ue(oe, r, _e), h(r, t), h(t, i), h(i, e), h(e, o), h(e, n), h(e, a), h(i, s), h(i, u), h(u, d), h(u, f), h(u, c), h(t, p), h(t, _), h(_, S), h(S, g), h(S, C), h(S, E), h(_, R), h(_, L), h(L, M), h(M, N), h(L, b), h(L, m), h(m, k), h(m, x), h(m, T), h(m, O), h(m, j), h(m, Y), h(m, K), h(m, z), h(m, J), h(m, I), h(m, D), h(m, U), h(m, F), h(m, Q), h(m, $), h(m, X), h(m, ee), h(t, de), h(t, V), h(V, re), h(re, ce), h(re, ge), h(re, te), h(V, ae), h(V, fe), h(fe, ie), h(ie, Me), h(fe, G), h(fe, P), h(P, ve), h(P, xe), h(P, ke), h(P, he), h(P, me), h(P, w), h(P, A), h(P, H), h(P, W), h(P, ne), h(P, pe), h(P, ye), h(P, Se), h(P, De), h(P, Oe), h(P, Ee), h(P, Ae), h(t, Ge), h(t, Re), we.m(Re, null), Je || (We = He(
        r,
        "submit",
        /*handleFormSubmit*/
        l[12]
      ), Je = !0);
    },
    p(oe, _e) {
      _e[0] & /*input_style*/
      1024 && y(
        a,
        "style",
        /*input_style*/
        oe[10]
      ), _e[0] & /*input_style*/
      1024 && y(
        c,
        "style",
        /*input_style*/
        oe[10]
      ), _e[0] & /*input_style*/
      1024 && y(
        E,
        "style",
        /*input_style*/
        oe[10]
      ), _e[0] & /*text_color*/
      4 && q(
        M,
        "color",
        /*text_color*/
        oe[2]
      ), _e[0] & /*input_style*/
      1024 && y(
        m,
        "style",
        /*input_style*/
        oe[10]
      ), _e[0] & /*input_style*/
      1024 && y(
        te,
        "style",
        /*input_style*/
        oe[10]
      ), _e[0] & /*text_color*/
      4 && q(
        ie,
        "color",
        /*text_color*/
        oe[2]
      ), _e[0] & /*input_style*/
      1024 && y(
        P,
        "style",
        /*input_style*/
        oe[10]
      ), Fe === (Fe = qe(oe)) && we ? we.p(oe, _e) : (we.d(1), we = Fe(oe), we && (we.c(), we.m(Re, null)));
    },
    d(oe) {
      oe && se(r), we.d(), Je = !1, We();
    }
  };
}
function Ot(l) {
  let r, t, i, e, o;
  return {
    c() {
      r = v("button"), t = Ue("svg"), i = Ue("path"), e = Ue("path"), o = B(`
                                Loading...`), y(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), y(i, "fill", "#E5E7EB"), y(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), y(e, "fill", "currentColor"), y(t, "aria-hidden", "true"), y(t, "role", "status"), y(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), y(t, "viewBox", "0 0 100 101"), y(t, "fill", "none"), y(t, "xmlns", "http://www.w3.org/2000/svg"), r.disabled = !0, y(r, "type", "button"), y(r, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), q(
        r,
        "background-color",
        /*button_color*/
        l[9]
      ), q(
        r,
        "color",
        /*text_color*/
        l[2]
      );
    },
    m(n, a) {
      ue(n, r, a), h(r, t), h(t, i), h(t, e), h(r, o);
    },
    p(n, a) {
      a[0] & /*button_color*/
      512 && q(
        r,
        "background-color",
        /*button_color*/
        n[9]
      ), a[0] & /*text_color*/
      4 && q(
        r,
        "color",
        /*text_color*/
        n[2]
      );
    },
    d(n) {
      n && se(r);
    }
  };
}
function Et(l) {
  let r, t;
  return {
    c() {
      r = v("button"), t = B(`See your
                                charges`), y(r, "type", "submit"), y(r, "class", "rounded-lg bg-black px-6 py-3 mt-6"), q(
        r,
        "background-color",
        /*button_color*/
        l[9]
      ), q(
        r,
        "color",
        /*text_color*/
        l[2]
      );
    },
    m(i, e) {
      ue(i, r, e), h(r, t);
    },
    p(i, e) {
      e[0] & /*button_color*/
      512 && q(
        r,
        "background-color",
        /*button_color*/
        i[9]
      ), e[0] & /*text_color*/
      4 && q(
        r,
        "color",
        /*text_color*/
        i[2]
      );
    },
    d(i) {
      i && se(r);
    }
  };
}
function At(l) {
  let r, t;
  return {
    c() {
      r = v("p"), t = B(
        /*statusCheckError*/
        l[7]
      ), y(r, "class", "text-sm");
    },
    m(i, e) {
      ue(i, r, e), h(r, t);
    },
    p(i, e) {
      e[0] & /*statusCheckError*/
      128 && be(
        t,
        /*statusCheckError*/
        i[7]
      );
    },
    d(i) {
      i && se(r);
    }
  };
}
function Tt(l) {
  let r;
  return {
    c() {
      r = v("div"), r.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, i) {
      ue(t, r, i);
    },
    p: Ce,
    d(t) {
      t && se(r);
    }
  };
}
function Nt(l) {
  let r;
  function t(o, n) {
    return (
      /*statusCheckError*/
      o[7] ? kt : xt
    );
  }
  let i = t(l), e = i(l);
  return {
    c() {
      e.c(), r = it(), this.c = Ce;
    },
    m(o, n) {
      e.m(o, n), ue(o, r, n);
    },
    p(o, n) {
      i === (i = t(o)) && e ? e.p(o, n) : (e.d(1), e = i(o), e && (e.c(), e.m(r.parentNode, r)));
    },
    i: Ce,
    o: Ce,
    d(o) {
      e.d(o), o && se(r);
    }
  };
}
const et = "http://localhost:8000", ot = "CORS_ERROR";
function jt(l, r, t) {
  let i;
  function e() {
    const D = new XMLHttpRequest();
    D.open("GET", `${et}/`, !0), D.onerror = function() {
      D.status === 0 ? t(7, d = ot) : t(7, d = "We're sorry, our servers are currently down. Please try again later.");
    }, D.send();
  }
  const o = async (D) => fetch(`${et}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  st(() => {
    e();
  });
  let n, a = !0, s, u = !1, d;
  const f = () => {
    t(3, n = void 0), t(4, a = !0), t(5, s = !1), t(6, u = !1);
  }, c = async (D) => {
    t(4, a = !1), t(6, u = !0), t(5, s = void 0);
    try {
      const U = await o(D);
      if (!U.ok) {
        const Q = await U.json();
        throw console.log("errorRes", Q), new Error(Q || `HTTP error! Status: ${U.status}`);
      }
      const F = await U.json();
      t(6, u = !1), t(5, s = void 0), t(4, a = !1), t(3, n = F);
    } catch (U) {
      t(6, u = !1), t(5, s = U.message), t(4, a = !1), t(3, n = void 0);
    }
  }, p = async (D) => {
    D.preventDefault();
    const U = new FormData(D.target), F = {};
    for (let Q of U) {
      const [$, X] = Q;
      F[$] = X;
    }
    F.prospect = "", F.input_spread = "5", F.prospect_annual_flow = "", F.email_user = !1, F.user = "yuriypidlisnyi2020@gmail.com", console.log(F), c(F);
  };
  let _ = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const S = (D) => {
    t(22, _ = D.matches);
  }, g = window.matchMedia("(prefers-color-scheme: dark)");
  g.addEventListener("change", S), dt(() => {
    g.removeEventListener("change", S);
  });
  let { light_mode_background: C = "#d2d0d0" } = r, { dark_mode_background: E = "#1f2937" } = r, { light_mode_text_color: R = "#1f2937" } = r, { dark_mode_text_color: L = "#f9fafb" } = r, { dark_mode_input_background: M = "#374151" } = r, { light_mode_input_background: N = "#f9fafb" } = r, { dark_mode_button_color: b = "#374151" } = r, { light_mode_button_color: m = "#f9fafb" } = r, { border_radius: k = "0.5rem" } = r, { input_border_radius: x = "0.5rem" } = r, { shadow: T = "none" } = r, O, j, Y, K;
  const z = (D) => f(), J = (D) => f(), I = (D) => f();
  return l.$$set = (D) => {
    "light_mode_background" in D && t(13, C = D.light_mode_background), "dark_mode_background" in D && t(14, E = D.dark_mode_background), "light_mode_text_color" in D && t(15, R = D.light_mode_text_color), "dark_mode_text_color" in D && t(16, L = D.dark_mode_text_color), "dark_mode_input_background" in D && t(17, M = D.dark_mode_input_background), "light_mode_input_background" in D && t(18, N = D.light_mode_input_background), "dark_mode_button_color" in D && t(19, b = D.dark_mode_button_color), "light_mode_button_color" in D && t(20, m = D.light_mode_button_color), "border_radius" in D && t(0, k = D.border_radius), "input_border_radius" in D && t(21, x = D.input_border_radius), "shadow" in D && t(1, T = D.shadow);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    4218880 && t(8, O = _ ? E : C), l.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    4292608 && t(2, j = _ ? L : R), l.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    4587520 && t(23, Y = _ ? M : N), l.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    5767168 && t(9, K = _ ? b : m), l.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    10485764 && t(10, i = `
    background-color: ${Y};
    color: ${j};
    border-radius: ${x}px;
    `);
  }, [
    k,
    T,
    j,
    n,
    a,
    s,
    u,
    d,
    O,
    K,
    i,
    f,
    p,
    C,
    E,
    R,
    L,
    M,
    N,
    b,
    m,
    x,
    _,
    Y,
    z,
    J,
    I
  ];
}
class Lt extends nt {
  constructor(r) {
    super(), this.shadowRoot.innerHTML = `<style>input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p,pre{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }.mr-3{margin-right:0.75rem
    }.mt-4{margin-top:1rem
    }.mt-6{margin-top:1.5rem
    }.inline{display:inline
    }.flex{display:flex
    }.inline-flex{display:inline-flex
    }.h-4{height:1rem
    }.w-4{width:1rem
    }.w-full{width:100%
    }@keyframes spin{to{transform:rotate(360deg)
        }}.animate-spin{animation:spin 1s linear infinite
    }.flex-col{flex-direction:column
    }.items-center{align-items:center
    }.gap-2{gap:0.5rem
    }.gap-4{gap:1rem
    }.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))
    }.rounded-lg{border-radius:0.5rem
    }.rounded-md{border-radius:0.375rem
    }.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))
    }.p-4{padding:1rem
    }.px-3{padding-left:0.75rem;padding-right:0.75rem
    }.px-6{padding-left:1.5rem;padding-right:1.5rem
    }.py-2{padding-top:0.5rem;padding-bottom:0.5rem
    }.py-3{padding-top:0.75rem;padding-bottom:0.75rem
    }.text-center{text-align:center
    }.text-2xl{font-size:1.5rem;line-height:2rem
    }.text-sm{font-size:0.875rem;line-height:1.25rem
    }.font-medium{font-weight:500
    }.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
    }.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }@media(min-width: 640px){.sm\\:flex-row{flex-direction:row
        }.sm\\:justify-between{justify-content:space-between
        }.sm\\:justify-around{justify-content:space-around
        }.sm\\:gap-12{gap:3rem
        }.sm\\:gap-4{gap:1rem
        }}</style>`, gt(
      this,
      {
        target: this.shadowRoot,
        props: ut(this.attributes),
        customElement: !0
      },
      jt,
      Nt,
      rt,
      {
        light_mode_background: 13,
        dark_mode_background: 14,
        light_mode_text_color: 15,
        dark_mode_text_color: 16,
        dark_mode_input_background: 17,
        light_mode_input_background: 18,
        dark_mode_button_color: 19,
        light_mode_button_color: 20,
        border_radius: 0,
        input_border_radius: 21,
        shadow: 1
      },
      null,
      [-1, -1]
    ), r && (r.target && ue(r.target, this, r.anchor), r.props && (this.$set(r.props), le()));
  }
  static get observedAttributes() {
    return [
      "light_mode_background",
      "dark_mode_background",
      "light_mode_text_color",
      "dark_mode_text_color",
      "dark_mode_input_background",
      "light_mode_input_background",
      "dark_mode_button_color",
      "light_mode_button_color",
      "border_radius",
      "input_border_radius",
      "shadow"
    ];
  }
  get light_mode_background() {
    return this.$$.ctx[13];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), le();
  }
  get dark_mode_background() {
    return this.$$.ctx[14];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), le();
  }
  get light_mode_text_color() {
    return this.$$.ctx[15];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), le();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[16];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), le();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[17];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), le();
  }
  get light_mode_input_background() {
    return this.$$.ctx[18];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), le();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[19];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), le();
  }
  get light_mode_button_color() {
    return this.$$.ctx[20];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), le();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), le();
  }
  get input_border_radius() {
    return this.$$.ctx[21];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), le();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), le();
  }
}
customElements.define("spreadm8-calc", Lt);
export {
  Lt as Spreadm8Calc
};
