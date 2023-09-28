function Ce() {
}
function Ze(u) {
  return u();
}
function Ve() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(u) {
  u.forEach(Ze);
}
function ze(u) {
  return typeof u == "function";
}
function rt(u, a) {
  return u != u ? a == a : u !== a || u && typeof u == "object" || typeof u == "function";
}
function at(u) {
  return Object.keys(u).length === 0;
}
function p(u, a) {
  u.appendChild(a);
}
function ue(u, a, t) {
  u.insertBefore(a, t || null);
}
function ie(u) {
  u.parentNode && u.parentNode.removeChild(u);
}
function g(u) {
  return document.createElement(u);
}
function Ue(u) {
  return document.createElementNS("http://www.w3.org/2000/svg", u);
}
function B(u) {
  return document.createTextNode(u);
}
function Z() {
  return B(" ");
}
function it() {
  return B("");
}
function He(u, a, t, i) {
  return u.addEventListener(a, t, i), () => u.removeEventListener(a, t, i);
}
function y(u, a, t) {
  t == null ? u.removeAttribute(a) : u.getAttribute(a) !== t && u.setAttribute(a, t);
}
function lt(u) {
  return Array.from(u.childNodes);
}
function be(u, a) {
  a = "" + a, u.wholeText !== a && (u.data = a);
}
function q(u, a, t, i) {
  t === null ? u.style.removeProperty(a) : u.style.setProperty(a, t, i ? "important" : "");
}
function ut(u) {
  const a = {};
  for (const t of u)
    a[t.name] = t.value;
  return a;
}
let Le;
function je(u) {
  Le = u;
}
function tt() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function st(u) {
  tt().$$.on_mount.push(u);
}
function dt(u) {
  tt().$$.on_destroy.push(u);
}
const Ne = [], Qe = [], Ye = [], Xe = [], ct = Promise.resolve();
let Be = !1;
function ft() {
  Be || (Be = !0, ct.then(se));
}
function Ke(u) {
  Ye.push(u);
}
const Ie = /* @__PURE__ */ new Set();
let Te = 0;
function se() {
  if (Te !== 0)
    return;
  const u = Le;
  do {
    try {
      for (; Te < Ne.length; ) {
        const a = Ne[Te];
        Te++, je(a), pt(a.$$);
      }
    } catch (a) {
      throw Ne.length = 0, Te = 0, a;
    }
    for (je(null), Ne.length = 0, Te = 0; Qe.length; )
      Qe.pop()();
    for (let a = 0; a < Ye.length; a += 1) {
      const t = Ye[a];
      Ie.has(t) || (Ie.add(t), t());
    }
    Ye.length = 0;
  } while (Ne.length);
  for (; Xe.length; )
    Xe.pop()();
  Be = !1, Ie.clear(), je(u);
}
function pt(u) {
  if (u.fragment !== null) {
    u.update(), Pe(u.before_update);
    const a = u.dirty;
    u.dirty = [-1], u.fragment && u.fragment.p(u.ctx, a), u.after_update.forEach(Ke);
  }
}
const ht = /* @__PURE__ */ new Set();
function mt(u, a) {
  u && u.i && (ht.delete(u), u.i(a));
}
function _t(u, a, t, i) {
  const { fragment: e, after_update: o } = u.$$;
  e && e.m(a, t), i || Ke(() => {
    const n = u.$$.on_mount.map(Ze).filter(ze);
    u.$$.on_destroy ? u.$$.on_destroy.push(...n) : Pe(n), u.$$.on_mount = [];
  }), o.forEach(Ke);
}
function yt(u, a) {
  const t = u.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(a), t.on_destroy = t.fragment = null, t.ctx = []);
}
function bt(u, a) {
  u.$$.dirty[0] === -1 && (Ne.push(u), ft(), u.$$.dirty.fill(0)), u.$$.dirty[a / 31 | 0] |= 1 << a % 31;
}
function gt(u, a, t, i, e, o, n, r = [-1]) {
  const l = Le;
  je(u);
  const s = u.$$ = {
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
    context: new Map(a.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Ve(),
    dirty: r,
    skip_bound: !1,
    root: a.target || l.$$.root
  };
  n && n(s.root);
  let d = !1;
  if (s.ctx = t ? t(u, a.props || {}, (f, c, ...h) => {
    const _ = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = _) && (!s.skip_bound && s.bound[f] && s.bound[f](_), d && bt(u, f)), c;
  }) : [], s.update(), d = !0, Pe(s.before_update), s.fragment = i ? i(s.ctx) : !1, a.target) {
    if (a.hydrate) {
      const f = lt(a.target);
      s.fragment && s.fragment.l(f), f.forEach(ie);
    } else
      s.fragment && s.fragment.c();
    a.intro && mt(u.$$.fragment), _t(u, a.target, a.anchor, a.customElement), se();
  }
  je(l);
}
let nt;
typeof HTMLElement == "function" && (nt = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: u } = this.$$;
    this.$$.on_disconnect = u.map(Ze).filter(ze);
    for (const a in this.$$.slotted)
      this.appendChild(this.$$.slotted[a]);
  }
  attributeChangedCallback(u, a, t) {
    this[u] = t;
  }
  disconnectedCallback() {
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    yt(this, 1), this.$destroy = Ce;
  }
  $on(u, a) {
    if (!ze(a))
      return Ce;
    const t = this.$$.callbacks[u] || (this.$$.callbacks[u] = []);
    return t.push(a), () => {
      const i = t.indexOf(a);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(u) {
    this.$$set && !at(u) && (this.$$.skip_bound = !0, this.$$set(u), this.$$.skip_bound = !1);
  }
});
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $e = {}, wt = {
  get exports() {
    return $e;
  },
  set exports(u) {
    $e = u;
  }
};
(function(u, a) {
  (function(t, i) {
    u.exports = i();
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
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      e(84);
      var n = e(41), r = o(n), l = function() {
        r.default.addPickerToOtherInputs(), r.default.supportsDateInput() || r.default.addPickerToDateInputs();
      };
      l(), document.addEventListener("DOMContentLoaded", function() {
        l();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        l();
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
      var o = e(9), n = e(32), r = e(25), l = Object.defineProperty;
      i.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (o(s), d = r(d, !0), o(f), n)
          try {
            return l(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
      };
    }, function(t, i, e) {
      var o = e(59), n = e(16);
      t.exports = function(r) {
        return o(n(r));
      };
    }, function(t, i, e) {
      var o = e(4), n = e(14);
      t.exports = e(1) ? function(r, l, s) {
        return o.f(r, l, n(1, s));
      } : function(r, l, s) {
        return r[l] = s, r;
      };
    }, function(t, i, e) {
      var o = e(23)("wks"), n = e(15), r = e(2).Symbol, l = typeof r == "function", s = t.exports = function(d) {
        return o[d] || (o[d] = l && r[d] || (l ? r : n)("Symbol." + d));
      };
      s.store = o;
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
      var o = e(2), n = e(8), r = e(56), l = e(6), s = "prototype", d = function(f, c, h) {
        var _, S, v, C = f & d.F, E = f & d.G, R = f & d.S, L = f & d.P, M = f & d.B, N = f & d.W, b = E ? n : n[c] || (n[c] = {}), m = b[s], k = E ? o : R ? o[c] : (o[c] || {})[s];
        E && (h = c);
        for (_ in h)
          S = !C && k && k[_] !== void 0, S && _ in b || (v = S ? k[_] : h[_], b[_] = E && typeof k[_] != "function" ? h[_] : M && S ? r(v, o) : N && k[_] == v ? function(x) {
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
            return T[s] = x[s], T;
          }(v) : L && typeof v == "function" ? r(Function.call, v) : v, L && ((b.virtual || (b.virtual = {}))[_] = v, f & d.R && m && !m[_] && l(m, _, v)));
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
      t.exports = Object.keys || function(r) {
        return o(r, n);
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
      var o = e(4).f, n = e(3), r = e(7)("toStringTag");
      t.exports = function(l, s, d) {
        l && !n(l = d ? l : l.prototype, r) && o(l, r, { configurable: !0, value: s });
      };
    }, function(t, i, e) {
      var o = e(23)("keys"), n = e(15);
      t.exports = function(r) {
        return o[r] || (o[r] = n(r));
      };
    }, function(t, i, e) {
      var o = e(2), n = "__core-js_shared__", r = o[n] || (o[n] = {});
      t.exports = function(l) {
        return r[l] || (r[l] = {});
      };
    }, function(t, i) {
      var e = Math.ceil, o = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? o : e)(n);
      };
    }, function(t, i, e) {
      var o = e(12);
      t.exports = function(n, r) {
        if (!o(n))
          return n;
        var l, s;
        if (r && typeof (l = n.toString) == "function" && !o(s = l.call(n)) || typeof (l = n.valueOf) == "function" && !o(s = l.call(n)) || !r && typeof (l = n.toString) == "function" && !o(s = l.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, i, e) {
      var o = e(2), n = e(8), r = e(19), l = e(27), s = e(4).f;
      t.exports = function(d) {
        var f = n.Symbol || (n.Symbol = r ? {} : o.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: l.f(d) });
      };
    }, function(t, i, e) {
      i.f = e(7);
    }, function(t, i) {
      i.__esModule = !0, i.default = function(e, o) {
        if (!(e instanceof o))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, i, e) {
      function o(l) {
        return l && l.__esModule ? l : { default: l };
      }
      i.__esModule = !0;
      var n = e(45), r = o(n);
      i.default = function() {
        function l(s, d) {
          for (var f = 0; f < d.length; f++) {
            var c = d[f];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), (0, r.default)(s, c.key, c);
          }
        }
        return function(s, d, f) {
          return d && l(s.prototype, d), f && l(s, f), s;
        };
      }();
    }, function(t, i) {
      var e = {}.toString;
      t.exports = function(o) {
        return e.call(o).slice(8, -1);
      };
    }, function(t, i, e) {
      var o = e(12), n = e(2).document, r = o(n) && o(n.createElement);
      t.exports = function(l) {
        return r ? n.createElement(l) : {};
      };
    }, function(t, i, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, i, e) {
      var o = e(19), n = e(10), r = e(39), l = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), _ = e(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", C = "keys", E = "values", R = function() {
        return this;
      };
      t.exports = function(L, M, N, b, m, k, x) {
        f(N, M, b);
        var T, O, j, Y = function($) {
          if (!S && $ in z)
            return z[$];
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
        }, K = M + " Iterator", I = m == E, J = !1, z = L.prototype, D = z[_] || z[v] || m && z[m], U = D || Y(m), F = m ? I ? Y("entries") : U : void 0, Q = M == "Array" && z.entries || D;
        if (Q && (j = h(Q.call(new L())), j !== Object.prototype && (c(j, K, !0), o || s(j, _) || l(j, _, R))), I && D && D.name !== E && (J = !0, U = function() {
          return D.call(this);
        }), o && !x || !S && !J && z[_] || l(z, _, U), d[M] = U, d[K] = R, m)
          if (T = { values: I ? U : Y(E), keys: k ? U : Y(C), entries: F }, x)
            for (O in T)
              O in z || r(z, O, T[O]);
          else
            n(n.P + n.F * (S || J), M, T);
        return T;
      };
    }, function(t, i, e) {
      var o = e(9), n = e(35), r = e(17), l = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), _ = r.length, S = "<", v = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(S + "script" + v + "document.F=Object" + S + "/script" + v), c.close(), f = c.F; _--; )
          delete f[d][r[_]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var _;
        return c !== null ? (s[d] = o(c), _ = new s(), s[d] = null, _[l] = c) : _ = f(), h === void 0 ? _ : n(_, h);
      };
    }, function(t, i, e) {
      var o = e(4), n = e(9), r = e(13);
      t.exports = e(1) ? Object.defineProperties : function(l, s) {
        n(l);
        for (var d, f = r(s), c = f.length, h = 0; c > h; )
          o.f(l, d = f[h++], s[d]);
        return l;
      };
    }, function(t, i, e) {
      var o = e(38), n = e(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(r) {
        return o(r, n);
      };
    }, function(t, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(t, i, e) {
      var o = e(3), n = e(5), r = e(55)(!1), l = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var f, c = n(s), h = 0, _ = [];
        for (f in c)
          f != l && o(c, f) && _.push(f);
        for (; d.length > h; )
          o(c, f = d[h++]) && (~r(_, f) || _.push(f));
        return _;
      };
    }, function(t, i, e) {
      t.exports = e(6);
    }, function(t, i, e) {
      function o(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, _) {
        for (h = String(h), _ = _ || 2; h.length < _; )
          h = "0" + h;
        return h;
      }
      function r(h) {
        var _ = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        _.setDate(_.getDate() - (_.getDay() + 6) % 7 + 3);
        var S = new Date(_.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var v = _.getTimezoneOffset() - S.getTimezoneOffset();
        _.setHours(_.getHours() - v);
        var C = (_ - S) / 6048e5;
        return 1 + Math.floor(C);
      }
      function l(h) {
        var _ = h.getDay();
        return _ === 0 && (_ = 7), _;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, f.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, f.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var d = e(48), f = o(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, _ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, C, E, R) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (C = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          C = String(c.masks[C] || C || c.masks.default);
          var L = C.slice(0, 4);
          L !== "UTC:" && L !== "GMT:" || (C = C.slice(4), E = !0, L === "GMT:" && (R = !0));
          var M = E ? "getUTC" : "get", N = v[M + "Date"](), b = v[M + "Day"](), m = v[M + "Month"](), k = v[M + "FullYear"](), x = v[M + "Hours"](), T = v[M + "Minutes"](), O = v[M + "Seconds"](), j = v[M + "Milliseconds"](), Y = E ? 0 : v.getTimezoneOffset(), K = r(v), I = l(v), J = { d: N, dd: n(N), ddd: c.i18n.dayNames[b], dddd: c.i18n.dayNames[b + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(k).slice(2), yyyy: k, h: x % 12 || 12, hh: n(x % 12 || 12), H: x, HH: n(x), M: T, MM: n(T), s: O, ss: n(O), l: n(j, 3), L: n(Math.round(j / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: R ? "GMT" : E ? "UTC" : (String(v).match(_) || [""]).pop().replace(S, ""), o: (Y > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(Y) / 60) + Math.abs(Y) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: K, N: I };
          return C.replace(h, function(z) {
            return z in J ? J[z] : z.slice(1, z.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = c;
    }, function(t, i, e) {
      function o(R) {
        return R && R.__esModule ? R : { default: R };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(44), r = o(n), l = e(28), s = o(l), d = e(29), f = o(d), c = e(43), h = o(c), _ = e(42), S = o(_), v = e(40), C = o(v), E = function() {
        function R(L) {
          var M = this;
          (0, s.default)(this, R), this.element = L, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, r.default)(this.element, { valueAsDate: { get: function() {
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
            m.locale = M.localeText, h.default.attachTo(m);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(b) {
            var m = new Date();
            switch (b.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                M.element.valueAsDate && (m.setDate(M.element.valueAsDate.getDate() + 1), M.element.valueAsDate = m, h.default.pingInput());
                break;
              case 40:
                M.element.valueAsDate && (m.setDate(M.element.valueAsDate.getDate() - 1), M.element.valueAsDate = m, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(b) {
            h.default.sync();
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
      var n = e(28), r = o(n), l = e(29), s = o(l), d = function() {
        function f() {
          var c = this;
          if ((0, r.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            c.date.setYear(c.year.value), c.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            c.date.setMonth(c.month.value), c.refreshDaysMatrix();
          });
          var _ = document.createElement("span");
          _.className = "monthSelect-wrapper", _.appendChild(this.month), this.container.appendChild(_), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var v = new Date();
            c.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var C = v.target;
            if (!C.hasAttribute("data-day"))
              return !1;
            var E = c.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), C.setAttribute("data-selected", ""), c.date.setDate(parseInt(C.textContent)), c.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (c.isOpen) {
              for (var C = v.target, E = C === c.container || C === c.input; !E && (C = C.parentNode); )
                E = C === c.container;
              (v.target.getAttribute("type") !== "date" && !E || !E) && c.hide();
            }
          }, this.removeBlur = function(v) {
            c.isOpen && c.hide();
          };
        }
        return (0, s.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var c = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", c.removeClickOut), document.addEventListener("touchstart", c.removeClickOut);
          }, 500), window.onpopstate = function() {
            c.hide();
          };
        } }, { key: "goto", value: function(c) {
          var h = this, _ = c.getBoundingClientRect();
          this.container.style.top = _.top + _.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, C = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = _.right - v;
          _.right < v ? (E = _.left, this.container.className = C() + " polyfill-left-aligned") : this.container.className = C() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var c = ["<tr>"], h = 0, _ = this.locale.days.length; h < _; ++h)
            c.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = c.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), _ = new Date(c, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, C = v && c === v.getFullYear() && h === v.getMonth(), E = [], R = 0; R < S + _; ++R)
            if (R % 7 === 0 && E.push(`
          ` + (R !== 0 ? "</tr>" : "") + `
          <tr>
        `), R + 1 <= _)
              E.push("<td></td>");
            else {
              var L = R + 1 - _, M = C && v.getDate() === L;
              E.push("<td data-day " + (M ? "data-selected" : "") + `>
          ` + L + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var c = void 0, h = void 0;
          try {
            c = new Event("input"), h = new Event("change");
          } catch {
            c = document.createEvent("KeyboardEvent"), c.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(c), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(c, h, _, S) {
          c.innerHTML = "";
          for (var v = h; v <= _; ++v) {
            var C = document.createElement("option");
            c.appendChild(C);
            var E = S ? S[v - h] : v;
            C.text = E, C.value = v;
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
      var n = e(47), r = o(n), l = e(46), s = o(l), d = typeof s.default == "function" && typeof r.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      i.default = typeof s.default == "function" && d(r.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : d(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : d(f);
      };
    }, function(t, i, e) {
      e(73);
      var o = e(8).Object;
      t.exports = function(n, r) {
        return o.defineProperties(n, r);
      };
    }, function(t, i, e) {
      e(74);
      var o = e(8).Object;
      t.exports = function(n, r, l) {
        return o.defineProperty(n, r, l);
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
      var o = e(5), n = e(70), r = e(69);
      t.exports = function(l) {
        return function(s, d, f) {
          var c, h = o(s), _ = n(h.length), S = r(f, _);
          if (l && d != d) {
            for (; _ > S; )
              if (c = h[S++], c != c)
                return !0;
          } else
            for (; _ > S; S++)
              if ((l || S in h) && h[S] === d)
                return l || S || 0;
          return !l && -1;
        };
      };
    }, function(t, i, e) {
      var o = e(53);
      t.exports = function(n, r, l) {
        if (o(n), r === void 0)
          return n;
        switch (l) {
          case 1:
            return function(s) {
              return n.call(r, s);
            };
          case 2:
            return function(s, d) {
              return n.call(r, s, d);
            };
          case 3:
            return function(s, d, f) {
              return n.call(r, s, d, f);
            };
        }
        return function() {
          return n.apply(r, arguments);
        };
      };
    }, function(t, i, e) {
      var o = e(13), n = e(37), r = e(20);
      t.exports = function(l) {
        var s = o(l), d = n.f;
        if (d)
          for (var f, c = d(l), h = r.f, _ = 0; c.length > _; )
            h.call(l, f = c[_++]) && s.push(f);
        return s;
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
      var o = e(34), n = e(14), r = e(21), l = {};
      e(6)(l, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, f) {
        s.prototype = o(l, { next: n(1, f) }), r(s, d + " Iterator");
      };
    }, function(t, i) {
      t.exports = function(e, o) {
        return { value: o, done: !!e };
      };
    }, function(t, i, e) {
      var o = e(13), n = e(5);
      t.exports = function(r, l) {
        for (var s, d = n(r), f = o(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === l)
            return s;
      };
    }, function(t, i, e) {
      var o = e(15)("meta"), n = e(12), r = e(3), l = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(C) {
        l(C, o, { value: { i: "O" + ++s, w: {} } });
      }, h = function(C, E) {
        if (!n(C))
          return typeof C == "symbol" ? C : (typeof C == "string" ? "S" : "P") + C;
        if (!r(C, o)) {
          if (!d(C))
            return "F";
          if (!E)
            return "E";
          c(C);
        }
        return C[o].i;
      }, _ = function(C, E) {
        if (!r(C, o)) {
          if (!d(C))
            return !0;
          if (!E)
            return !1;
          c(C);
        }
        return C[o].w;
      }, S = function(C) {
        return f && v.NEED && d(C) && !r(C, o) && c(C), C;
      }, v = t.exports = { KEY: o, NEED: !1, fastKey: h, getWeak: _, onFreeze: S };
    }, function(t, i, e) {
      var o = e(20), n = e(14), r = e(5), l = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      i.f = e(1) ? f : function(c, h) {
        if (c = r(c), h = l(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return n(!o.f.call(c, h), c[h]);
      };
    }, function(t, i, e) {
      var o = e(5), n = e(36).f, r = {}.toString, l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch {
          return l.slice();
        }
      };
      t.exports.f = function(d) {
        return l && r.call(d) == "[object Window]" ? s(d) : n(o(d));
      };
    }, function(t, i, e) {
      var o = e(3), n = e(71), r = e(22)("IE_PROTO"), l = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), o(s, r) ? s[r] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? l : null;
      };
    }, function(t, i, e) {
      var o = e(24), n = e(16);
      t.exports = function(r) {
        return function(l, s) {
          var d, f, c = String(n(l)), h = o(s), _ = c.length;
          return h < 0 || h >= _ ? r ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === _ || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? r ? c.charAt(h) : d : r ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, i, e) {
      var o = e(24), n = Math.max, r = Math.min;
      t.exports = function(l, s) {
        return l = o(l), l < 0 ? n(l + s, 0) : r(l, s);
      };
    }, function(t, i, e) {
      var o = e(24), n = Math.min;
      t.exports = function(r) {
        return r > 0 ? n(o(r), 9007199254740991) : 0;
      };
    }, function(t, i, e) {
      var o = e(16);
      t.exports = function(n) {
        return Object(o(n));
      };
    }, function(t, i, e) {
      var o = e(54), n = e(62), r = e(18), l = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = l(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
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
        var n, r = this._t, l = this._i;
        return l >= r.length ? { value: void 0, done: !0 } : (n = o(r, l), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, i, e) {
      var o = e(2), n = e(3), r = e(1), l = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), _ = e(15), S = e(7), v = e(27), C = e(26), E = e(63), R = e(57), L = e(60), M = e(9), N = e(5), b = e(25), m = e(14), k = e(34), x = e(66), T = e(65), O = e(4), j = e(13), Y = T.f, K = O.f, I = x.f, J = o.Symbol, z = o.JSON, D = z && z.stringify, U = "prototype", F = S("_hidden"), Q = S("toPrimitive"), $ = {}.propertyIsEnumerable, X = c("symbol-registry"), ee = c("symbols"), de = c("op-symbols"), V = Object[U], re = typeof J == "function", ce = o.QObject, ge = !ce || !ce[U] || !ce[U].findChild, te = r && f(function() {
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
      }, le = function(w, A, H) {
        return w === V && le(de, A, H), M(w), A = b(A, !0), M(H), n(ee, A) ? (H.enumerable ? (n(w, F) && w[F][A] && (w[F][A] = !1), H = k(H, { enumerable: m(0, !1) })) : (n(w, F) || K(w, F, m(1, {})), w[F][A] = !0), te(w, A, H)) : K(w, A, H);
      }, Me = function(w, A) {
        M(w);
        for (var H, W = R(A = N(A)), ne = 0, pe = W.length; pe > ne; )
          le(w, H = W[ne++], A[H]);
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
        for (var A, H = I(N(w)), W = [], ne = 0; H.length > ne; )
          n(ee, A = H[ne++]) || A == F || A == d || W.push(A);
        return W;
      }, ke = function(w) {
        for (var A, H = w === V, W = I(H ? de : N(w)), ne = [], pe = 0; W.length > pe; )
          !n(ee, A = W[pe++]) || H && !n(V, A) || ne.push(ee[A]);
        return ne;
      };
      re || (J = function() {
        if (this instanceof J)
          throw TypeError("Symbol is not a constructor!");
        var w = _(arguments.length > 0 ? arguments[0] : void 0), A = function(H) {
          this === V && A.call(de, H), n(this, F) && n(this[F], w) && (this[F][w] = !1), te(this, w, m(1, H));
        };
        return r && ge && te(V, w, { configurable: !0, set: A }), ae(w);
      }, s(J[U], "toString", function() {
        return this._k;
      }), T.f = ve, O.f = le, e(36).f = x.f = xe, e(20).f = P, e(37).f = ke, r && !e(19) && s(V, "propertyIsEnumerable", P, !0), v.f = function(w) {
        return ae(S(w));
      }), l(l.G + l.W + l.F * !re, { Symbol: J });
      for (var he = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; he.length > me; )
        S(he[me++]);
      for (var he = j(S.store), me = 0; he.length > me; )
        C(he[me++]);
      l(l.S + l.F * !re, "Symbol", { for: function(w) {
        return n(X, w += "") ? X[w] : X[w] = J(w);
      }, keyFor: function(w) {
        if (fe(w))
          return E(X, w);
        throw TypeError(w + " is not a symbol!");
      }, useSetter: function() {
        ge = !0;
      }, useSimple: function() {
        ge = !1;
      } }), l(l.S + l.F * !re, "Object", { create: G, defineProperty: le, defineProperties: Me, getOwnPropertyDescriptor: ve, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), z && l(l.S + l.F * (!re || f(function() {
        var w = J();
        return D([w]) != "[null]" || D({ a: w }) != "{}" || D(Object(w)) != "{}";
      })), "JSON", { stringify: function(w) {
        if (w !== void 0 && !fe(w)) {
          for (var A, H, W = [w], ne = 1; arguments.length > ne; )
            W.push(arguments[ne++]);
          return A = W[1], typeof A == "function" && (H = A), !H && L(A) || (A = function(pe, ye) {
            if (H && (ye = H.call(this, pe, ye)), !fe(ye))
              return ye;
          }), W[1] = A, D.apply(z, W);
        }
      } }), J[U][Q] || e(6)(J[U], Q, J[U].valueOf), h(J, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0);
    }, function(t, i, e) {
      e(26)("asyncIterator");
    }, function(t, i, e) {
      e(26)("observable");
    }, function(t, i, e) {
      e(72);
      for (var o = e(2), n = e(6), r = e(18), l = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = o[f], h = c && c.prototype;
        h && !h[l] && n(h, l, f), r[f] = r.Array;
      }
    }, function(t, i, e) {
      i = t.exports = e(82)(), i.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, i) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var o = [], n = 0; n < this.length; n++) {
            var r = this[n];
            r[2] ? o.push("@media " + r[2] + "{" + r[1] + "}") : o.push(r[1]);
          }
          return o.join("");
        }, e.i = function(o, n) {
          typeof o == "string" && (o = [[null, o, ""]]);
          for (var r = {}, l = 0; l < this.length; l++) {
            var s = this[l][0];
            typeof s == "number" && (r[s] = !0);
          }
          for (l = 0; l < o.length; l++) {
            var d = o[l];
            typeof d[0] == "number" && r[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), e.push(d));
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
          var T = b[x], O = T[0], j = T[1], Y = T[2], K = T[3], I = { css: j, media: Y, sourceMap: K };
          k[O] ? k[O].parts.push(I) : m.push(k[O] = { id: O, parts: [I] });
        }
        return m;
      }
      function r(b, m) {
        var k = E(), x = M[M.length - 1];
        if (b.insertAt === "top")
          x ? x.nextSibling ? k.insertBefore(m, x.nextSibling) : k.appendChild(m) : k.insertBefore(m, k.firstChild), M.push(m);
        else {
          if (b.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          k.appendChild(m);
        }
      }
      function l(b) {
        b.parentNode.removeChild(b);
        var m = M.indexOf(b);
        m >= 0 && M.splice(m, 1);
      }
      function s(b) {
        var m = document.createElement("style");
        return m.type = "text/css", r(b, m), m;
      }
      function d(b) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", r(b, m), m;
      }
      function f(b, m) {
        var k, x, T;
        if (m.singleton) {
          var O = L++;
          k = R || (R = s(m)), x = c.bind(null, k, O, !1), T = c.bind(null, k, O, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (k = d(m), x = _.bind(null, k), T = function() {
            l(k), k.href && URL.revokeObjectURL(k.href);
          }) : (k = s(m), x = h.bind(null, k), T = function() {
            l(k);
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
      function h(b, m) {
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
      var S = {}, v = function(b) {
        var m;
        return function() {
          return typeof m > "u" && (m = b.apply(this, arguments)), m;
        };
      }, C = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = v(function() {
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
              for (var I = 0; I < Y.parts.length; I++)
                Y.parts[I]();
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
function xt(u) {
  let a, t, i;
  function e(r, l) {
    return (
      /*isIdle*/
      r[4] || /*isFetching*/
      r[6] ? Dt : (
        /*backendData*/
        r[3] ? St : (
          /*error*/
          r[5] ? Ct : Mt
        )
      )
    );
  }
  let o = e(u), n = o(u);
  return {
    c() {
      a = g("div"), n.c(), y(a, "class", t = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), y(a, "style", i = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
        opacity: 1,
`);
    },
    m(r, l) {
      ue(r, a, l), n.m(a, null);
    },
    p(r, l) {
      o === (o = e(r)) && n ? n.p(r, l) : (n.d(1), n = o(r), n && (n.c(), n.m(a, null))), l[0] & /*shadow*/
      2 && t !== (t = `w-full p-4 shadow-${/*shadow*/
      r[1]}`) && y(a, "class", t), l[0] & /*background, border_radius, text_color*/
      261 && i !== (i = `
        background-color: ${/*background*/
      r[8]};
        border-radius: ${/*border_radius*/
      r[0]};
        color: ${/*text_color*/
      r[2]};
        opacity: 1,
`) && y(a, "style", i);
    },
    d(r) {
      r && ie(a), n.d();
    }
  };
}
function kt(u) {
  let a, t, i, e, o, n;
  function r(d, f) {
    return (
      /*statusCheckError*/
      d[7] === ot ? Tt : At
    );
  }
  let l = r(u), s = l(u);
  return {
    c() {
      a = g("div"), t = g("div"), i = g("h1"), i.textContent = "An error occured", e = Z(), s.c(), y(i, "class", "text-2xl"), y(t, "class", "flex flex-col items-center gap-4"), y(a, "class", o = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), y(a, "style", n = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
`);
    },
    m(d, f) {
      ue(d, a, f), p(a, t), p(t, i), p(t, e), s.m(t, null);
    },
    p(d, f) {
      l === (l = r(d)) && s ? s.p(d, f) : (s.d(1), s = l(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      2 && o !== (o = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && y(a, "class", o), f[0] & /*background, border_radius, text_color*/
      261 && n !== (n = `
        background-color: ${/*background*/
      d[8]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[2]};
`) && y(a, "style", n);
    },
    d(d) {
      d && ie(a), s.d();
    }
  };
}
function Mt(u) {
  let a, t, i, e, o, n, r;
  return {
    c() {
      a = g("div"), t = g("h1"), t.textContent = "An unknown error", i = Z(), e = g("button"), o = B("Reset Form"), y(t, "class", "text-2xl"), y(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        e,
        "background-color",
        /*button_color*/
        u[9]
      ), q(
        e,
        "color",
        /*text_color*/
        u[2]
      ), y(a, "class", "flex flex-col items-center");
    },
    m(l, s) {
      ue(l, a, s), p(a, t), p(a, i), p(a, e), p(e, o), n || (r = He(
        e,
        "click",
        /*click_handler_2*/
        u[26]
      ), n = !0);
    },
    p(l, s) {
      s[0] & /*button_color*/
      512 && q(
        e,
        "background-color",
        /*button_color*/
        l[9]
      ), s[0] & /*text_color*/
      4 && q(
        e,
        "color",
        /*text_color*/
        l[2]
      );
    },
    d(l) {
      l && ie(a), n = !1, r();
    }
  };
}
function Ct(u) {
  let a, t, i, e, o, n, r, l, s, d;
  return {
    c() {
      a = g("div"), t = g("h1"), t.textContent = "Error", i = Z(), e = g("pre"), o = B(
        /*error*/
        u[5]
      ), n = Z(), r = g("button"), l = B("Reset Form"), y(t, "class", "text-2xl"), y(e, "class", "py-3"), y(r, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        r,
        "background-color",
        /*button_color*/
        u[9]
      ), q(
        r,
        "color",
        /*text_color*/
        u[2]
      ), y(a, "class", "flex flex-col items-center");
    },
    m(f, c) {
      ue(f, a, c), p(a, t), p(a, i), p(a, e), p(e, o), p(a, n), p(a, r), p(r, l), s || (d = He(
        r,
        "click",
        /*click_handler_1*/
        u[25]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      32 && be(
        o,
        /*error*/
        f[5]
      ), c[0] & /*button_color*/
      512 && q(
        r,
        "background-color",
        /*button_color*/
        f[9]
      ), c[0] & /*text_color*/
      4 && q(
        r,
        "color",
        /*text_color*/
        f[2]
      );
    },
    d(f) {
      f && ie(a), s = !1, d();
    }
  };
}
function St(u) {
  let a, t, i, e, o, n, r = (
    /*backendData*/
    u[3].data[0].third_party_exchange_rate + ""
  ), l, s, d, f, c = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), h, _, S = (
    /*backendData*/
    u[3].data[0].mid_market_rate + ""
  ), v, C, E, R, L, M = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), N, b, m, k = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), x, T, O = (
    /*backendData*/
    u[3].data[0].third_party_profit + ""
  ), j, Y, K, I, J, z, D, U, F = (
    /*backendData*/
    u[3].data[0].integritas_rate + ""
  ), Q, $, X, ee, de = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), V, re, ce = (
    /*backendData*/
    u[3].data[0].integritas_savings + ""
  ), ge, te, ae, fe, le, Me;
  return {
    c() {
      a = g("div"), t = g("div"), i = g("h1"), i.textContent = "Your Provider", e = Z(), o = g("p"), n = B("Your exchange rate was "), l = B(r), s = Z(), d = g("p"), f = B("The interbank rate "), h = B(c), _ = B(`
                        was `), v = B(S), C = B("."), E = Z(), R = g("p"), L = B("Your provider's markup was TODO "), N = B(M), b = B("%."), m = B(`
                    Your provider charged `), x = B(k), T = Z(), j = B(O), Y = B(` on this
                    trade.`), K = Z(), I = g("div"), J = g("h1"), J.textContent = "Integritas", z = Z(), D = g("p"), U = B("Our exchange rate was "), Q = B(F), $ = Z(), X = g("p"), ee = B(`We would've saved
                        you `), V = B(de), re = Z(), ge = B(ce), te = Z(), ae = g("button"), fe = B("Calculate again"), y(i, "class", "text-2xl"), y(o, "class", "text-sm"), y(d, "class", "text-sm"), y(t, "class", "flex flex-col gap-2"), y(J, "class", "text-2xl mt-4"), y(D, "class", "text-sm"), y(X, "class", "text-sm"), y(I, "class", "flex flex-col gap-2"), y(a, "class", "flex flex-col divide-y gap-4"), y(ae, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        ae,
        "background-color",
        /*button_color*/
        u[9]
      ), q(
        ae,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(G, P) {
      ue(G, a, P), p(a, t), p(t, i), p(t, e), p(t, o), p(o, n), p(o, l), p(t, s), p(t, d), p(d, f), p(d, h), p(d, _), p(d, v), p(d, C), p(t, E), p(t, R), p(R, L), p(R, N), p(R, b), p(t, m), p(t, x), p(t, T), p(t, j), p(t, Y), p(a, K), p(a, I), p(I, J), p(I, z), p(I, D), p(D, U), p(D, Q), p(I, $), p(I, X), p(X, ee), p(X, V), p(X, re), p(X, ge), ue(G, te, P), ue(G, ae, P), p(ae, fe), le || (Me = He(
        ae,
        "click",
        /*click_handler*/
        u[24]
      ), le = !0);
    },
    p(G, P) {
      P[0] & /*backendData*/
      8 && r !== (r = /*backendData*/
      G[3].data[0].third_party_exchange_rate + "") && be(l, r), P[0] & /*backendData*/
      8 && c !== (c = /*backendData*/
      G[3].data[0].ccy_pair + "") && be(h, c), P[0] & /*backendData*/
      8 && S !== (S = /*backendData*/
      G[3].data[0].mid_market_rate + "") && be(v, S), P[0] & /*backendData*/
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
      G && ie(a), G && ie(te), G && ie(ae), le = !1, Me();
    }
  };
}
function Dt(u) {
  let a, t, i, e, o, n, r, l, s, d, f, c, h, _, S, v, C, E, R, L, M, N, b, m, k, x, T, O, j, Y, K, I, J, z, D, U, F, Q, $, X, ee, de, V, re, ce, ge, te, ae, fe, le, Me, G, P, ve, xe, ke, he, me, w, A, H, W, ne, pe, ye, Se, De, Oe, Ee, Ae, Ge, Re, Je, We;
  function qe(oe, _e) {
    return (
      /*isFetching*/
      oe[6] ? Ot : Et
    );
  }
  let Fe = qe(u), we = Fe(u);
  return {
    c() {
      a = g("form"), t = g("div"), i = g("div"), e = g("div"), o = g("label"), o.textContent = "Select Date", n = Z(), r = g("input"), l = Z(), s = g("div"), d = g("label"), d.textContent = "Select Time", f = Z(), c = g("input"), h = Z(), _ = g("div"), S = g("div"), v = g("label"), v.textContent = "Sell Amount", C = Z(), E = g("input"), R = Z(), L = g("div"), M = g("label"), N = B("Sell Currency"), b = Z(), m = g("select"), k = g("option"), k.textContent = "GBP", x = g("option"), x.textContent = "USD", T = g("option"), T.textContent = "EUR", O = g("option"), O.textContent = "JPY", j = g("option"), j.textContent = "CHF", Y = g("option"), Y.textContent = "CNY", K = g("option"), K.textContent = "NZD", I = g("option"), I.textContent = "SGD", J = g("option"), J.textContent = "INR", z = g("option"), z.textContent = "AUD", D = g("option"), D.textContent = "CAD", U = g("option"), U.textContent = "HKD", F = g("option"), F.textContent = "MYR", Q = g("option"), Q.textContent = "NOK", $ = g("option"), $.textContent = "ZAR", X = g("option"), X.textContent = "RUB", ee = g("option"), ee.textContent = "SEK", de = Z(), V = g("div"), re = g("div"), ce = g("label"), ce.textContent = "Buy Amount", ge = Z(), te = g("input"), ae = Z(), fe = g("div"), le = g("label"), Me = B("Buy Currency"), G = Z(), P = g("select"), ve = g("option"), ve.textContent = "USD", xe = g("option"), xe.textContent = "GBP", ke = g("option"), ke.textContent = "EUR", he = g("option"), he.textContent = "JPY", me = g("option"), me.textContent = "CHF", w = g("option"), w.textContent = "CNY", A = g("option"), A.textContent = "NZD", H = g("option"), H.textContent = "SGD", W = g("option"), W.textContent = "INR", ne = g("option"), ne.textContent = "AUD", pe = g("option"), pe.textContent = "CAD", ye = g("option"), ye.textContent = "HKD", Se = g("option"), Se.textContent = "MYR", De = g("option"), De.textContent = "NOK", Oe = g("option"), Oe.textContent = "ZAR", Ee = g("option"), Ee.textContent = "RUB", Ae = g("option"), Ae.textContent = "SEK", Ge = Z(), Re = g("div"), we.c(), y(o, "for", "date"), y(r, "id", "date"), y(r, "type", "date"), y(r, "class", "w-full rounded-md px-3 py-2"), y(r, "name", "date"), y(r, "placeholder", "Select date"), r.required = !0, y(
        r,
        "style",
        /*input_style*/
        u[10]
      ), y(e, "class", "w-full"), y(d, "for", "time"), y(c, "id", "time"), y(c, "type", "time"), y(c, "class", "w-full rounded-md px-3 py-2"), y(c, "name", "time"), y(c, "placeholder", "Select Time"), c.required = !0, y(
        c,
        "style",
        /*input_style*/
        u[10]
      ), y(s, "class", "w-full"), y(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), y(v, "for", "sold_notional"), y(E, "id", "sold_notional"), y(E, "type", "number"), y(E, "step", ".01"), y(E, "class", "w-full rounded-md px-3 py-2"), y(E, "name", "sold_notional"), y(E, "placeholder", "10000"), E.required = !0, y(
        E,
        "style",
        /*input_style*/
        u[10]
      ), y(S, "class", "w-full"), y(M, "for", "sold_ccy"), q(
        M,
        "color",
        /*text_color*/
        u[2]
      ), k.selected = !0, k.__value = "GBP", k.value = k.__value, x.__value = "USD", x.value = x.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, j.__value = "CHF", j.value = j.__value, Y.__value = "CNY", Y.value = Y.__value, K.__value = "NZD", K.value = K.__value, I.__value = "SGD", I.value = I.__value, J.__value = "INR", J.value = J.__value, z.__value = "AUD", z.value = z.__value, D.__value = "CAD", D.value = D.__value, U.__value = "HKD", U.value = U.__value, F.__value = "MYR", F.value = F.__value, Q.__value = "NOK", Q.value = Q.__value, $.__value = "ZAR", $.value = $.__value, X.__value = "RUB", X.value = X.__value, ee.__value = "SEK", ee.value = ee.__value, y(m, "name", "sold_ccy"), y(m, "id", "sold_ccy"), y(m, "class", "w-full rounded-md px-3 py-2"), m.required = !0, y(
        m,
        "style",
        /*input_style*/
        u[10]
      ), y(L, "class", "w-full"), y(_, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(ce, "for", "bought_notional"), y(te, "id", "bought_notional"), y(te, "type", "number"), y(te, "step", ".01"), y(te, "class", "w-full rounded-md px-3 py-2"), y(te, "name", "bought_notional"), y(te, "placeholder", "10000"), te.required = !0, y(
        te,
        "style",
        /*input_style*/
        u[10]
      ), y(re, "class", "w-full"), y(le, "for", "bought_ccy"), q(
        le,
        "color",
        /*text_color*/
        u[2]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, he.__value = "JPY", he.value = he.__value, me.__value = "CHF", me.value = me.__value, w.__value = "CNY", w.value = w.__value, A.__value = "NZD", A.value = A.__value, H.__value = "SGD", H.value = H.__value, W.__value = "INR", W.value = W.__value, ne.__value = "AUD", ne.value = ne.__value, pe.__value = "CAD", pe.value = pe.__value, ye.__value = "HKD", ye.value = ye.__value, Se.__value = "MYR", Se.value = Se.__value, De.__value = "NOK", De.value = De.__value, Oe.__value = "ZAR", Oe.value = Oe.__value, Ee.__value = "RUB", Ee.value = Ee.__value, Ae.__value = "SEK", Ae.value = Ae.__value, y(P, "name", "bought_ccy"), y(P, "id", "bought_ccy"), y(P, "class", "w-full rounded-md px-3 py-2"), P.required = !0, y(
        P,
        "style",
        /*input_style*/
        u[10]
      ), y(fe, "class", "w-full"), y(V, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(t, "class", "flex flex-col sm:gap-4");
    },
    m(oe, _e) {
      ue(oe, a, _e), p(a, t), p(t, i), p(i, e), p(e, o), p(e, n), p(e, r), p(i, l), p(i, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, _), p(_, S), p(S, v), p(S, C), p(S, E), p(_, R), p(_, L), p(L, M), p(M, N), p(L, b), p(L, m), p(m, k), p(m, x), p(m, T), p(m, O), p(m, j), p(m, Y), p(m, K), p(m, I), p(m, J), p(m, z), p(m, D), p(m, U), p(m, F), p(m, Q), p(m, $), p(m, X), p(m, ee), p(t, de), p(t, V), p(V, re), p(re, ce), p(re, ge), p(re, te), p(V, ae), p(V, fe), p(fe, le), p(le, Me), p(fe, G), p(fe, P), p(P, ve), p(P, xe), p(P, ke), p(P, he), p(P, me), p(P, w), p(P, A), p(P, H), p(P, W), p(P, ne), p(P, pe), p(P, ye), p(P, Se), p(P, De), p(P, Oe), p(P, Ee), p(P, Ae), p(t, Ge), p(t, Re), we.m(Re, null), Je || (We = He(
        a,
        "submit",
        /*handleFormSubmit*/
        u[12]
      ), Je = !0);
    },
    p(oe, _e) {
      _e[0] & /*input_style*/
      1024 && y(
        r,
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
        le,
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
      oe && ie(a), we.d(), Je = !1, We();
    }
  };
}
function Ot(u) {
  let a, t, i, e, o;
  return {
    c() {
      a = g("button"), t = Ue("svg"), i = Ue("path"), e = Ue("path"), o = B(`
                                Loading...`), y(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), y(i, "fill", "#E5E7EB"), y(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), y(e, "fill", "currentColor"), y(t, "aria-hidden", "true"), y(t, "role", "status"), y(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), y(t, "viewBox", "0 0 100 101"), y(t, "fill", "none"), y(t, "xmlns", "http://www.w3.org/2000/svg"), a.disabled = !0, y(a, "type", "button"), y(a, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), q(
        a,
        "background-color",
        /*button_color*/
        u[9]
      ), q(
        a,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(n, r) {
      ue(n, a, r), p(a, t), p(t, i), p(t, e), p(a, o);
    },
    p(n, r) {
      r[0] & /*button_color*/
      512 && q(
        a,
        "background-color",
        /*button_color*/
        n[9]
      ), r[0] & /*text_color*/
      4 && q(
        a,
        "color",
        /*text_color*/
        n[2]
      );
    },
    d(n) {
      n && ie(a);
    }
  };
}
function Et(u) {
  let a, t;
  return {
    c() {
      a = g("button"), t = B(`See your
                                charges`), y(a, "type", "submit"), y(a, "class", "rounded-lg bg-black px-6 py-3 mt-6"), q(
        a,
        "background-color",
        /*button_color*/
        u[9]
      ), q(
        a,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(i, e) {
      ue(i, a, e), p(a, t);
    },
    p(i, e) {
      e[0] & /*button_color*/
      512 && q(
        a,
        "background-color",
        /*button_color*/
        i[9]
      ), e[0] & /*text_color*/
      4 && q(
        a,
        "color",
        /*text_color*/
        i[2]
      );
    },
    d(i) {
      i && ie(a);
    }
  };
}
function At(u) {
  let a, t;
  return {
    c() {
      a = g("p"), t = B(
        /*statusCheckError*/
        u[7]
      ), y(a, "class", "text-sm");
    },
    m(i, e) {
      ue(i, a, e), p(a, t);
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
      i && ie(a);
    }
  };
}
function Tt(u) {
  let a;
  return {
    c() {
      a = g("div"), a.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, i) {
      ue(t, a, i);
    },
    p: Ce,
    d(t) {
      t && ie(a);
    }
  };
}
function Nt(u) {
  let a, t, i;
  function e(r, l) {
    return (
      /*statusCheckError*/
      r[7] ? kt : xt
    );
  }
  let o = e(u), n = o(u);
  return {
    c() {
      a = g("link"), t = Z(), n.c(), i = it(), this.c = Ce, y(a, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), y(a, "rel", "stylesheet");
    },
    m(r, l) {
      p(document.head, a), ue(r, t, l), n.m(r, l), ue(r, i, l);
    },
    p(r, l) {
      o === (o = e(r)) && n ? n.p(r, l) : (n.d(1), n = o(r), n && (n.c(), n.m(i.parentNode, i)));
    },
    i: Ce,
    o: Ce,
    d(r) {
      ie(a), r && ie(t), n.d(r), r && ie(i);
    }
  };
}
const et = "http://localhost:8000", ot = "CORS_ERROR";
function jt(u, a, t) {
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
  let n, r = !0, l, s = !1, d;
  const f = () => {
    t(3, n = void 0), t(4, r = !0), t(5, l = !1), t(6, s = !1);
  }, c = async (D) => {
    t(4, r = !1), t(6, s = !0), t(5, l = void 0);
    try {
      const U = await o(D);
      if (!U.ok) {
        const Q = await U.json();
        throw console.log("errorRes", Q), new Error(Q || `HTTP error! Status: ${U.status}`);
      }
      const F = await U.json();
      t(6, s = !1), t(5, l = void 0), t(4, r = !1), t(3, n = F);
    } catch (U) {
      t(6, s = !1), t(5, l = U.message), t(4, r = !1), t(3, n = void 0);
    }
  }, h = async (D) => {
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
  }, v = window.matchMedia("(prefers-color-scheme: dark)");
  v.addEventListener("change", S), dt(() => {
    v.removeEventListener("change", S);
  });
  let { light_mode_background: C = "#d2d0d0" } = a, { dark_mode_background: E = "#1f2937" } = a, { light_mode_text_color: R = "#1f2937" } = a, { dark_mode_text_color: L = "#f9fafb" } = a, { dark_mode_input_background: M = "#374151" } = a, { light_mode_input_background: N = "#f9fafb" } = a, { dark_mode_button_color: b = "#374151" } = a, { light_mode_button_color: m = "#f9fafb" } = a, { border_radius: k = "0.5rem" } = a, { input_border_radius: x = "0.5rem" } = a, { shadow: T = "none" } = a, O, j, Y, K;
  const I = (D) => f(), J = (D) => f(), z = (D) => f();
  return u.$$set = (D) => {
    "light_mode_background" in D && t(13, C = D.light_mode_background), "dark_mode_background" in D && t(14, E = D.dark_mode_background), "light_mode_text_color" in D && t(15, R = D.light_mode_text_color), "dark_mode_text_color" in D && t(16, L = D.dark_mode_text_color), "dark_mode_input_background" in D && t(17, M = D.dark_mode_input_background), "light_mode_input_background" in D && t(18, N = D.light_mode_input_background), "dark_mode_button_color" in D && t(19, b = D.dark_mode_button_color), "light_mode_button_color" in D && t(20, m = D.light_mode_button_color), "border_radius" in D && t(0, k = D.border_radius), "input_border_radius" in D && t(21, x = D.input_border_radius), "shadow" in D && t(1, T = D.shadow);
  }, u.$$.update = () => {
    u.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    4218880 && t(8, O = _ ? E : C), u.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    4292608 && t(2, j = _ ? L : R), u.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    4587520 && t(23, Y = _ ? M : N), u.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    5767168 && t(9, K = _ ? b : m), u.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
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
    r,
    l,
    s,
    d,
    O,
    K,
    i,
    f,
    h,
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
    I,
    J,
    z
  ];
}
class Lt extends nt {
  constructor(a) {
    super(), this.shadowRoot.innerHTML = `<style>*{font-family:'Inter', sans-serif}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p,pre{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
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
    ), a && (a.target && ue(a.target, this, a.anchor), a.props && (this.$set(a.props), se()));
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
  set light_mode_background(a) {
    this.$$set({ light_mode_background: a }), se();
  }
  get dark_mode_background() {
    return this.$$.ctx[14];
  }
  set dark_mode_background(a) {
    this.$$set({ dark_mode_background: a }), se();
  }
  get light_mode_text_color() {
    return this.$$.ctx[15];
  }
  set light_mode_text_color(a) {
    this.$$set({ light_mode_text_color: a }), se();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[16];
  }
  set dark_mode_text_color(a) {
    this.$$set({ dark_mode_text_color: a }), se();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[17];
  }
  set dark_mode_input_background(a) {
    this.$$set({ dark_mode_input_background: a }), se();
  }
  get light_mode_input_background() {
    return this.$$.ctx[18];
  }
  set light_mode_input_background(a) {
    this.$$set({ light_mode_input_background: a }), se();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[19];
  }
  set dark_mode_button_color(a) {
    this.$$set({ dark_mode_button_color: a }), se();
  }
  get light_mode_button_color() {
    return this.$$.ctx[20];
  }
  set light_mode_button_color(a) {
    this.$$set({ light_mode_button_color: a }), se();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(a) {
    this.$$set({ border_radius: a }), se();
  }
  get input_border_radius() {
    return this.$$.ctx[21];
  }
  set input_border_radius(a) {
    this.$$set({ input_border_radius: a }), se();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(a) {
    this.$$set({ shadow: a }), se();
  }
}
customElements.define("spreadm8-calc", Lt);
export {
  Lt as Spreadm8Calc
};
