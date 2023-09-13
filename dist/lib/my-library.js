function Nt() {
}
function Kt(d) {
  return d();
}
function Vt() {
  return /* @__PURE__ */ Object.create(null);
}
function Pt(d) {
  d.forEach(Kt);
}
function It(d) {
  return typeof d == "function";
}
function ee(d, i) {
  return d != d ? i == i : d !== i || d && typeof d == "object" || typeof d == "function";
}
function oe(d) {
  return Object.keys(d).length === 0;
}
function h(d, i) {
  d.appendChild(i);
}
function _t(d, i, e) {
  d.insertBefore(i, e || null);
}
function wt(d) {
  d.parentNode && d.parentNode.removeChild(d);
}
function w(d) {
  return document.createElement(d);
}
function Ht(d) {
  return document.createElementNS("http://www.w3.org/2000/svg", d);
}
function z(d) {
  return document.createTextNode(d);
}
function W() {
  return z(" ");
}
function Jt(d, i, e, l) {
  return d.addEventListener(i, e, l), () => d.removeEventListener(i, e, l);
}
function y(d, i, e) {
  e == null ? d.removeAttribute(i) : d.getAttribute(i) !== e && d.setAttribute(i, e);
}
function ne(d) {
  return Array.from(d.childNodes);
}
function vt(d, i) {
  i = "" + i, d.wholeText !== i && (d.data = i);
}
function q(d, i, e, l) {
  e === null ? d.style.removeProperty(i) : d.style.setProperty(i, e, l ? "important" : "");
}
function re(d) {
  const i = {};
  for (const e of d)
    i[e.name] = e.value;
  return i;
}
let Zt;
function jt(d) {
  Zt = d;
}
const Tt = [], Qt = [], Rt = [], Xt = [], ae = Promise.resolve();
let zt = !1;
function ie() {
  zt || (zt = !0, ae.then(ct));
}
function Bt(d) {
  Rt.push(d);
}
const Ut = /* @__PURE__ */ new Set();
let At = 0;
function ct() {
  if (At !== 0)
    return;
  const d = Zt;
  do {
    try {
      for (; At < Tt.length; ) {
        const i = Tt[At];
        At++, jt(i), le(i.$$);
      }
    } catch (i) {
      throw Tt.length = 0, At = 0, i;
    }
    for (jt(null), Tt.length = 0, At = 0; Qt.length; )
      Qt.pop()();
    for (let i = 0; i < Rt.length; i += 1) {
      const e = Rt[i];
      Ut.has(e) || (Ut.add(e), e());
    }
    Rt.length = 0;
  } while (Tt.length);
  for (; Xt.length; )
    Xt.pop()();
  zt = !1, Ut.clear(), jt(d);
}
function le(d) {
  if (d.fragment !== null) {
    d.update(), Pt(d.before_update);
    const i = d.dirty;
    d.dirty = [-1], d.fragment && d.fragment.p(d.ctx, i), d.after_update.forEach(Bt);
  }
}
const ue = /* @__PURE__ */ new Set();
function se(d, i) {
  d && d.i && (ue.delete(d), d.i(i));
}
function de(d, i, e, l) {
  const { fragment: t, after_update: n } = d.$$;
  t && t.m(i, e), l || Bt(() => {
    const o = d.$$.on_mount.map(Kt).filter(It);
    d.$$.on_destroy ? d.$$.on_destroy.push(...o) : Pt(o), d.$$.on_mount = [];
  }), n.forEach(Bt);
}
function ce(d, i) {
  const e = d.$$;
  e.fragment !== null && (Pt(e.on_destroy), e.fragment && e.fragment.d(i), e.on_destroy = e.fragment = null, e.ctx = []);
}
function fe(d, i) {
  d.$$.dirty[0] === -1 && (Tt.push(d), ie(), d.$$.dirty.fill(0)), d.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function pe(d, i, e, l, t, n, o, r = [-1]) {
  const a = Zt;
  jt(d);
  const s = d.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: Nt,
    not_equal: t,
    bound: Vt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(i.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Vt(),
    dirty: r,
    skip_bound: !1,
    root: i.target || a.$$.root
  };
  o && o(s.root);
  let c = !1;
  if (s.ctx = e ? e(d, i.props || {}, (f, u, ...p) => {
    const g = p.length ? p[0] : u;
    return s.ctx && t(s.ctx[f], s.ctx[f] = g) && (!s.skip_bound && s.bound[f] && s.bound[f](g), c && fe(d, f)), u;
  }) : [], s.update(), c = !0, Pt(s.before_update), s.fragment = l ? l(s.ctx) : !1, i.target) {
    if (i.hydrate) {
      const f = ne(i.target);
      s.fragment && s.fragment.l(f), f.forEach(wt);
    } else
      s.fragment && s.fragment.c();
    i.intro && se(d.$$.fragment), de(d, i.target, i.anchor, i.customElement), ct();
  }
  jt(a);
}
let te;
typeof HTMLElement == "function" && (te = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: d } = this.$$;
    this.$$.on_disconnect = d.map(Kt).filter(It);
    for (const i in this.$$.slotted)
      this.appendChild(this.$$.slotted[i]);
  }
  attributeChangedCallback(d, i, e) {
    this[d] = e;
  }
  disconnectedCallback() {
    Pt(this.$$.on_disconnect);
  }
  $destroy() {
    ce(this, 1), this.$destroy = Nt;
  }
  $on(d, i) {
    if (!It(i))
      return Nt;
    const e = this.$$.callbacks[d] || (this.$$.callbacks[d] = []);
    return e.push(i), () => {
      const l = e.indexOf(i);
      l !== -1 && e.splice(l, 1);
    };
  }
  $set(d) {
    this.$$set && !oe(d) && (this.$$.skip_bound = !0, this.$$set(d), this.$$.skip_bound = !1);
  }
});
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = {}, me = {
  get exports() {
    return $t;
  },
  set exports(d) {
    $t = d;
  }
};
(function(d, i) {
  (function(e, l) {
    d.exports = l();
  })(he, function() {
    return function(e) {
      function l(n) {
        if (t[n])
          return t[n].exports;
        var o = t[n] = { exports: {}, id: n, loaded: !1 };
        return e[n].call(o.exports, o, o.exports, l), o.loaded = !0, o.exports;
      }
      var t = {};
      return l.m = e, l.c = t, l.p = "", l(0);
    }([function(e, l, t) {
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      t(84);
      var o = t(41), r = n(o), a = function() {
        r.default.addPickerToOtherInputs(), r.default.supportsDateInput() || r.default.addPickerToDateInputs();
      };
      a(), document.addEventListener("DOMContentLoaded", function() {
        a();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        a();
      });
    }, function(e, l, t) {
      e.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, l) {
      var t = e.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(e, l) {
      var t = {}.hasOwnProperty;
      e.exports = function(n, o) {
        return t.call(n, o);
      };
    }, function(e, l, t) {
      var n = t(9), o = t(32), r = t(25), a = Object.defineProperty;
      l.f = t(1) ? Object.defineProperty : function(s, c, f) {
        if (n(s), c = r(c, !0), n(f), o)
          try {
            return a(s, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[c] = f.value), s;
      };
    }, function(e, l, t) {
      var n = t(59), o = t(16);
      e.exports = function(r) {
        return n(o(r));
      };
    }, function(e, l, t) {
      var n = t(4), o = t(14);
      e.exports = t(1) ? function(r, a, s) {
        return n.f(r, a, o(1, s));
      } : function(r, a, s) {
        return r[a] = s, r;
      };
    }, function(e, l, t) {
      var n = t(23)("wks"), o = t(15), r = t(2).Symbol, a = typeof r == "function", s = e.exports = function(c) {
        return n[c] || (n[c] = a && r[c] || (a ? r : o)("Symbol." + c));
      };
      s.store = n;
    }, function(e, l) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, l, t) {
      var n = t(12);
      e.exports = function(o) {
        if (!n(o))
          throw TypeError(o + " is not an object!");
        return o;
      };
    }, function(e, l, t) {
      var n = t(2), o = t(8), r = t(56), a = t(6), s = "prototype", c = function(f, u, p) {
        var g, S, b, C = f & c.F, E = f & c.G, R = f & c.S, P = f & c.P, M = f & c.B, N = f & c.W, v = E ? o : o[u] || (o[u] = {}), m = v[s], k = E ? n : R ? n[u] : (n[u] || {})[s];
        E && (p = u);
        for (g in p)
          S = !C && k && k[g] !== void 0, S && g in v || (b = S ? k[g] : p[g], v[g] = E && typeof k[g] != "function" ? p[g] : M && S ? r(b, n) : N && k[g] == b ? function(x) {
            var T = function(O, L, H) {
              if (this instanceof x) {
                switch (arguments.length) {
                  case 0:
                    return new x();
                  case 1:
                    return new x(O);
                  case 2:
                    return new x(O, L);
                }
                return new x(O, L, H);
              }
              return x.apply(this, arguments);
            };
            return T[s] = x[s], T;
          }(b) : P && typeof b == "function" ? r(Function.call, b) : b, P && ((v.virtual || (v.virtual = {}))[g] = b, f & c.R && m && !m[g] && a(m, g, b)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
    }, function(e, l) {
      e.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(e, l) {
      e.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(e, l, t) {
      var n = t(38), o = t(17);
      e.exports = Object.keys || function(r) {
        return n(r, o);
      };
    }, function(e, l) {
      e.exports = function(t, n) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
      };
    }, function(e, l) {
      var t = 0, n = Math.random();
      e.exports = function(o) {
        return "Symbol(".concat(o === void 0 ? "" : o, ")_", (++t + n).toString(36));
      };
    }, function(e, l) {
      e.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(e, l) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, l) {
      e.exports = {};
    }, function(e, l) {
      e.exports = !0;
    }, function(e, l) {
      l.f = {}.propertyIsEnumerable;
    }, function(e, l, t) {
      var n = t(4).f, o = t(3), r = t(7)("toStringTag");
      e.exports = function(a, s, c) {
        a && !o(a = c ? a : a.prototype, r) && n(a, r, { configurable: !0, value: s });
      };
    }, function(e, l, t) {
      var n = t(23)("keys"), o = t(15);
      e.exports = function(r) {
        return n[r] || (n[r] = o(r));
      };
    }, function(e, l, t) {
      var n = t(2), o = "__core-js_shared__", r = n[o] || (n[o] = {});
      e.exports = function(a) {
        return r[a] || (r[a] = {});
      };
    }, function(e, l) {
      var t = Math.ceil, n = Math.floor;
      e.exports = function(o) {
        return isNaN(o = +o) ? 0 : (o > 0 ? n : t)(o);
      };
    }, function(e, l, t) {
      var n = t(12);
      e.exports = function(o, r) {
        if (!n(o))
          return o;
        var a, s;
        if (r && typeof (a = o.toString) == "function" && !n(s = a.call(o)) || typeof (a = o.valueOf) == "function" && !n(s = a.call(o)) || !r && typeof (a = o.toString) == "function" && !n(s = a.call(o)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, l, t) {
      var n = t(2), o = t(8), r = t(19), a = t(27), s = t(4).f;
      e.exports = function(c) {
        var f = o.Symbol || (o.Symbol = r ? {} : n.Symbol || {});
        c.charAt(0) == "_" || c in f || s(f, c, { value: a.f(c) });
      };
    }, function(e, l, t) {
      l.f = t(7);
    }, function(e, l) {
      l.__esModule = !0, l.default = function(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, l, t) {
      function n(a) {
        return a && a.__esModule ? a : { default: a };
      }
      l.__esModule = !0;
      var o = t(45), r = n(o);
      l.default = function() {
        function a(s, c) {
          for (var f = 0; f < c.length; f++) {
            var u = c[f];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), (0, r.default)(s, u.key, u);
          }
        }
        return function(s, c, f) {
          return c && a(s.prototype, c), f && a(s, f), s;
        };
      }();
    }, function(e, l) {
      var t = {}.toString;
      e.exports = function(n) {
        return t.call(n).slice(8, -1);
      };
    }, function(e, l, t) {
      var n = t(12), o = t(2).document, r = n(o) && n(o.createElement);
      e.exports = function(a) {
        return r ? o.createElement(a) : {};
      };
    }, function(e, l, t) {
      e.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, l, t) {
      var n = t(19), o = t(10), r = t(39), a = t(6), s = t(3), c = t(18), f = t(61), u = t(21), p = t(67), g = t(7)("iterator"), S = !([].keys && "next" in [].keys()), b = "@@iterator", C = "keys", E = "values", R = function() {
        return this;
      };
      e.exports = function(P, M, N, v, m, k, x) {
        f(N, M, v);
        var T, O, L, H = function(tt) {
          if (!S && tt in J)
            return J[tt];
          switch (tt) {
            case C:
              return function() {
                return new N(this, tt);
              };
            case E:
              return function() {
                return new N(this, tt);
              };
          }
          return function() {
            return new N(this, tt);
          };
        }, I = M + " Iterator", D = m == E, j = !1, J = P.prototype, K = J[g] || J[b] || m && J[m], B = K || H(m), U = m ? D ? H("entries") : B : void 0, nt = M == "Array" && J.entries || K;
        if (nt && (L = p(nt.call(new P())), L !== Object.prototype && (u(L, I, !0), n || s(L, g) || a(L, g, R))), D && K && K.name !== E && (j = !0, B = function() {
          return K.call(this);
        }), n && !x || !S && !j && J[g] || a(J, g, B), c[M] = B, c[I] = R, m)
          if (T = { values: D ? B : H(E), keys: k ? B : H(C), entries: U }, x)
            for (O in T)
              O in J || r(J, O, T[O]);
          else
            o(o.P + o.F * (S || j), M, T);
        return T;
      };
    }, function(e, l, t) {
      var n = t(9), o = t(35), r = t(17), a = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", f = function() {
        var u, p = t(31)("iframe"), g = r.length, S = "<", b = ">";
        for (p.style.display = "none", t(58).appendChild(p), p.src = "javascript:", u = p.contentWindow.document, u.open(), u.write(S + "script" + b + "document.F=Object" + S + "/script" + b), u.close(), f = u.F; g--; )
          delete f[c][r[g]];
        return f();
      };
      e.exports = Object.create || function(u, p) {
        var g;
        return u !== null ? (s[c] = n(u), g = new s(), s[c] = null, g[a] = u) : g = f(), p === void 0 ? g : o(g, p);
      };
    }, function(e, l, t) {
      var n = t(4), o = t(9), r = t(13);
      e.exports = t(1) ? Object.defineProperties : function(a, s) {
        o(a);
        for (var c, f = r(s), u = f.length, p = 0; u > p; )
          n.f(a, c = f[p++], s[c]);
        return a;
      };
    }, function(e, l, t) {
      var n = t(38), o = t(17).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(r) {
        return n(r, o);
      };
    }, function(e, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(e, l, t) {
      var n = t(3), o = t(5), r = t(55)(!1), a = t(22)("IE_PROTO");
      e.exports = function(s, c) {
        var f, u = o(s), p = 0, g = [];
        for (f in u)
          f != a && n(u, f) && g.push(f);
        for (; c.length > p; )
          n(u, f = c[p++]) && (~r(g, f) || g.push(f));
        return g;
      };
    }, function(e, l, t) {
      e.exports = t(6);
    }, function(e, l, t) {
      function n(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function o(p, g) {
        for (p = String(p), g = g || 2; p.length < g; )
          p = "0" + p;
        return p;
      }
      function r(p) {
        var g = new Date(p.getFullYear(), p.getMonth(), p.getDate());
        g.setDate(g.getDate() - (g.getDay() + 6) % 7 + 3);
        var S = new Date(g.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var b = g.getTimezoneOffset() - S.getTimezoneOffset();
        g.setHours(g.getHours() - b);
        var C = (g - S) / 6048e5;
        return 1 + Math.floor(C);
      }
      function a(p) {
        var g = p.getDay();
        return g === 0 && (g = 7), g;
      }
      function s(p) {
        return p === null ? "null" : p === void 0 ? "undefined" : (typeof p > "u" ? "undefined" : (0, f.default)(p)) !== "object" ? typeof p > "u" ? "undefined" : (0, f.default)(p) : Array.isArray(p) ? "array" : {}.toString.call(p).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var c = t(48), f = n(c), u = function() {
        var p = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, g = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(b, C, E, R) {
          if (arguments.length !== 1 || s(b) !== "string" || /\d/.test(b) || (C = b, b = void 0), b = b || new Date(), b instanceof Date || (b = new Date(b)), isNaN(b))
            throw TypeError("Invalid date");
          C = String(u.masks[C] || C || u.masks.default);
          var P = C.slice(0, 4);
          P !== "UTC:" && P !== "GMT:" || (C = C.slice(4), E = !0, P === "GMT:" && (R = !0));
          var M = E ? "getUTC" : "get", N = b[M + "Date"](), v = b[M + "Day"](), m = b[M + "Month"](), k = b[M + "FullYear"](), x = b[M + "Hours"](), T = b[M + "Minutes"](), O = b[M + "Seconds"](), L = b[M + "Milliseconds"](), H = E ? 0 : b.getTimezoneOffset(), I = r(b), D = a(b), j = { d: N, dd: o(N), ddd: u.i18n.dayNames[v], dddd: u.i18n.dayNames[v + 7], m: m + 1, mm: o(m + 1), mmm: u.i18n.monthNames[m], mmmm: u.i18n.monthNames[m + 12], yy: String(k).slice(2), yyyy: k, h: x % 12 || 12, hh: o(x % 12 || 12), H: x, HH: o(x), M: T, MM: o(T), s: O, ss: o(O), l: o(L, 3), L: o(Math.round(L / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: R ? "GMT" : E ? "UTC" : (String(b).match(g) || [""]).pop().replace(S, ""), o: (H > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: I, N: D };
          return C.replace(p, function(J) {
            return J in j ? j[J] : J.slice(1, J.length - 1);
          });
        };
      }();
      u.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, u.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = u;
    }, function(e, l, t) {
      function n(R) {
        return R && R.__esModule ? R : { default: R };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = t(44), r = n(o), a = t(28), s = n(a), c = t(29), f = n(c), u = t(43), p = n(u), g = t(42), S = n(g), b = t(40), C = n(b), E = function() {
        function R(P) {
          var M = this;
          (0, s.default)(this, R), this.element = P, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, r.default)(this.element, { valueAsDate: { get: function() {
            if (!M.element.value)
              return null;
            var v = M.format || "yyyy-mm-dd", m = M.element.value.match(/(\d+)/g), k = 0, x = {};
            return v.replace(/(yyyy|dd|mm)/g, function(T) {
              x[T] = k++;
            }), new Date(m[x.yyyy], m[x.mm] - 1, m[x.dd]);
          }, set: function(v) {
            M.element.value = (0, C.default)(v, M.format);
          } }, valueAsNumber: { get: function() {
            return M.element.value ? M.element.valueAsDate.valueOf() : NaN;
          }, set: function(v) {
            M.element.valueAsDate = new Date(v);
          } } });
          var N = function(v) {
            var m = M.element;
            m.locale = M.localeText, p.default.attachTo(m);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(v) {
            var m = new Date();
            switch (v.keyCode) {
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
          }), this.element.addEventListener("keyup", function(v) {
            p.default.sync();
          });
        }
        return (0, f.default)(R, [{ key: "getLocaleText", value: function() {
          var P = this.locale.toLowerCase();
          for (var M in S.default) {
            var N = M.split("_");
            if (N.map(function(v) {
              return v.toLowerCase();
            }), ~N.indexOf(P) || ~N.indexOf(P.substr(0, 2)))
              return S.default[M];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var P = document.createElement("input");
          P.setAttribute("type", "date");
          var M = "not-a-date";
          return P.setAttribute("value", M), P.value !== M;
        } }, { key: "addPickerToDateInputs", value: function() {
          var P = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), M = P.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new R(P[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var P = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), M = P.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new R(P[N]);
        } }]), R;
      }();
      l.default = E;
    }, function(e, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = t;
    }, function(e, l, t) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = t(28), r = n(o), a = t(29), s = n(a), c = function() {
        function f() {
          var u = this;
          if ((0, r.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            u.date.setYear(u.year.value), u.refreshDaysMatrix();
          });
          var p = document.createElement("span");
          p.className = "yearSelect-wrapper", p.appendChild(this.year), this.container.appendChild(p), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            u.date.setMonth(u.month.value), u.refreshDaysMatrix();
          });
          var g = document.createElement("span");
          g.className = "monthSelect-wrapper", g.appendChild(this.month), this.container.appendChild(g), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var b = new Date();
            u.date = new Date(b.getFullYear() + "/" + ("0" + (b.getMonth() + 1)).slice(-2) + "/" + ("0" + b.getDate()).slice(-2)), u.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(b) {
            var C = b.target;
            if (!C.hasAttribute("data-day"))
              return !1;
            var E = u.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), C.setAttribute("data-selected", ""), u.date.setDate(parseInt(C.textContent)), u.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(b) {
            if (u.isOpen) {
              for (var C = b.target, E = C === u.container || C === u.input; !E && (C = C.parentNode); )
                E = C === u.container;
              (b.target.getAttribute("type") !== "date" && !E || !E) && u.hide();
            }
          }, this.removeBlur = function(b) {
            u.isOpen && u.hide();
          };
        }
        return (0, s.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var u = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", u.removeClickOut), document.addEventListener("touchstart", u.removeClickOut);
          }, 500), window.onpopstate = function() {
            u.hide();
          };
        } }, { key: "goto", value: function(u) {
          var p = this, g = u.getBoundingClientRect();
          this.container.style.top = g.top + g.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), b = S.width ? S.width : 280, C = function() {
            return p.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = g.right - b;
          g.right < b ? (E = g.left, this.container.className = C() + " polyfill-left-aligned") : this.container.className = C() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(u) {
          return !(u === this.input && this.isOpen || (this.input = u, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = f.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var u = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            u.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var u = ["<tr>"], p = 0, g = this.locale.days.length; p < g; ++p)
            u.push('<th scope="col">' + this.locale.days[p] + "</th>");
          this.daysHead.innerHTML = u.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var u = this.date.getFullYear(), p = this.date.getMonth(), g = new Date(u, p, 1).getDay(), S = new Date(this.date.getFullYear(), p + 1, 0).getDate(), b = f.absoluteDate(this.input.valueAsDate) || !1, C = b && u === b.getFullYear() && p === b.getMonth(), E = [], R = 0; R < S + g; ++R)
            if (R % 7 === 0 && E.push(`
          ` + (R !== 0 ? "</tr>" : "") + `
          <tr>
        `), R + 1 <= g)
              E.push("<td></td>");
            else {
              var P = R + 1 - g, M = C && b.getDate() === P;
              E.push("<td data-day " + (M ? "data-selected" : "") + `>
          ` + P + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var u = void 0, p = void 0;
          try {
            u = new Event("input"), p = new Event("change");
          } catch {
            u = document.createEvent("KeyboardEvent"), u.initEvent("input", !0, !1), p = document.createEvent("KeyboardEvent"), p.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(u), this.input.dispatchEvent(p);
        } }], [{ key: "createRangeSelect", value: function(u, p, g, S) {
          u.innerHTML = "";
          for (var b = p; b <= g; ++b) {
            var C = document.createElement("option");
            u.appendChild(C);
            var E = S ? S[b - p] : b;
            C.text = E, C.value = b;
          }
          return u;
        } }, { key: "absoluteDate", value: function(u) {
          return u && new Date(u.getTime() + 60 * u.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new c(), l.default = window.thePicker;
    }, function(e, l, t) {
      e.exports = { default: t(49), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(50), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(51), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(52), __esModule: !0 };
    }, function(e, l, t) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      l.__esModule = !0;
      var o = t(47), r = n(o), a = t(46), s = n(a), c = typeof s.default == "function" && typeof r.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      l.default = typeof s.default == "function" && c(r.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : c(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : c(f);
      };
    }, function(e, l, t) {
      t(73);
      var n = t(8).Object;
      e.exports = function(o, r) {
        return n.defineProperties(o, r);
      };
    }, function(e, l, t) {
      t(74);
      var n = t(8).Object;
      e.exports = function(o, r, a) {
        return n.defineProperty(o, r, a);
      };
    }, function(e, l, t) {
      t(77), t(75), t(78), t(79), e.exports = t(8).Symbol;
    }, function(e, l, t) {
      t(76), t(80), e.exports = t(27).f("iterator");
    }, function(e, l) {
      e.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(e, l) {
      e.exports = function() {
      };
    }, function(e, l, t) {
      var n = t(5), o = t(70), r = t(69);
      e.exports = function(a) {
        return function(s, c, f) {
          var u, p = n(s), g = o(p.length), S = r(f, g);
          if (a && c != c) {
            for (; g > S; )
              if (u = p[S++], u != u)
                return !0;
          } else
            for (; g > S; S++)
              if ((a || S in p) && p[S] === c)
                return a || S || 0;
          return !a && -1;
        };
      };
    }, function(e, l, t) {
      var n = t(53);
      e.exports = function(o, r, a) {
        if (n(o), r === void 0)
          return o;
        switch (a) {
          case 1:
            return function(s) {
              return o.call(r, s);
            };
          case 2:
            return function(s, c) {
              return o.call(r, s, c);
            };
          case 3:
            return function(s, c, f) {
              return o.call(r, s, c, f);
            };
        }
        return function() {
          return o.apply(r, arguments);
        };
      };
    }, function(e, l, t) {
      var n = t(13), o = t(37), r = t(20);
      e.exports = function(a) {
        var s = n(a), c = o.f;
        if (c)
          for (var f, u = c(a), p = r.f, g = 0; u.length > g; )
            p.call(a, f = u[g++]) && s.push(f);
        return s;
      };
    }, function(e, l, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, l, t) {
      var n = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(o) {
        return n(o) == "String" ? o.split("") : Object(o);
      };
    }, function(e, l, t) {
      var n = t(30);
      e.exports = Array.isArray || function(o) {
        return n(o) == "Array";
      };
    }, function(e, l, t) {
      var n = t(34), o = t(14), r = t(21), a = {};
      t(6)(a, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, c, f) {
        s.prototype = n(a, { next: o(1, f) }), r(s, c + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, n) {
        return { value: n, done: !!t };
      };
    }, function(e, l, t) {
      var n = t(13), o = t(5);
      e.exports = function(r, a) {
        for (var s, c = o(r), f = n(c), u = f.length, p = 0; u > p; )
          if (c[s = f[p++]] === a)
            return s;
      };
    }, function(e, l, t) {
      var n = t(15)("meta"), o = t(12), r = t(3), a = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), u = function(C) {
        a(C, n, { value: { i: "O" + ++s, w: {} } });
      }, p = function(C, E) {
        if (!o(C))
          return typeof C == "symbol" ? C : (typeof C == "string" ? "S" : "P") + C;
        if (!r(C, n)) {
          if (!c(C))
            return "F";
          if (!E)
            return "E";
          u(C);
        }
        return C[n].i;
      }, g = function(C, E) {
        if (!r(C, n)) {
          if (!c(C))
            return !0;
          if (!E)
            return !1;
          u(C);
        }
        return C[n].w;
      }, S = function(C) {
        return f && b.NEED && c(C) && !r(C, n) && u(C), C;
      }, b = e.exports = { KEY: n, NEED: !1, fastKey: p, getWeak: g, onFreeze: S };
    }, function(e, l, t) {
      var n = t(20), o = t(14), r = t(5), a = t(25), s = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? f : function(u, p) {
        if (u = r(u), p = a(p, !0), c)
          try {
            return f(u, p);
          } catch {
          }
        if (s(u, p))
          return o(!n.f.call(u, p), u[p]);
      };
    }, function(e, l, t) {
      var n = t(5), o = t(36).f, r = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(c) {
        try {
          return o(c);
        } catch {
          return a.slice();
        }
      };
      e.exports.f = function(c) {
        return a && r.call(c) == "[object Window]" ? s(c) : o(n(c));
      };
    }, function(e, l, t) {
      var n = t(3), o = t(71), r = t(22)("IE_PROTO"), a = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = o(s), n(s, r) ? s[r] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? a : null;
      };
    }, function(e, l, t) {
      var n = t(24), o = t(16);
      e.exports = function(r) {
        return function(a, s) {
          var c, f, u = String(o(a)), p = n(s), g = u.length;
          return p < 0 || p >= g ? r ? "" : void 0 : (c = u.charCodeAt(p), c < 55296 || c > 56319 || p + 1 === g || (f = u.charCodeAt(p + 1)) < 56320 || f > 57343 ? r ? u.charAt(p) : c : r ? u.slice(p, p + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(e, l, t) {
      var n = t(24), o = Math.max, r = Math.min;
      e.exports = function(a, s) {
        return a = n(a), a < 0 ? o(a + s, 0) : r(a, s);
      };
    }, function(e, l, t) {
      var n = t(24), o = Math.min;
      e.exports = function(r) {
        return r > 0 ? o(n(r), 9007199254740991) : 0;
      };
    }, function(e, l, t) {
      var n = t(16);
      e.exports = function(o) {
        return Object(n(o));
      };
    }, function(e, l, t) {
      var n = t(54), o = t(62), r = t(18), a = t(5);
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = a(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, o(1)) : c == "keys" ? o(0, f) : c == "values" ? o(0, s[f]) : o(0, [f, s[f]]);
      }, "values"), r.Arguments = r.Array, n("keys"), n("values"), n("entries");
    }, function(e, l, t) {
      var n = t(10);
      n(n.S + n.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, l, t) {
      var n = t(10);
      n(n.S + n.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, l) {
    }, function(e, l, t) {
      var n = t(68)(!0);
      t(33)(String, "String", function(o) {
        this._t = String(o), this._i = 0;
      }, function() {
        var o, r = this._t, a = this._i;
        return a >= r.length ? { value: void 0, done: !0 } : (o = n(r, a), this._i += o.length, { value: o, done: !1 });
      });
    }, function(e, l, t) {
      var n = t(2), o = t(3), r = t(1), a = t(10), s = t(39), c = t(64).KEY, f = t(11), u = t(23), p = t(21), g = t(15), S = t(7), b = t(27), C = t(26), E = t(63), R = t(57), P = t(60), M = t(9), N = t(5), v = t(25), m = t(14), k = t(34), x = t(66), T = t(65), O = t(4), L = t(13), H = T.f, I = O.f, D = x.f, j = n.Symbol, J = n.JSON, K = J && J.stringify, B = "prototype", U = S("_hidden"), nt = S("toPrimitive"), tt = {}.propertyIsEnumerable, Q = u("symbol-registry"), X = u("symbols"), lt = u("op-symbols"), V = Object[B], rt = typeof j == "function", ut = n.QObject, gt = !ut || !ut[B] || !ut[B].findChild, $ = r && f(function() {
        return k(I({}, "a", { get: function() {
          return I(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(_, A, Y) {
        var G = H(V, A);
        G && delete V[A], I(_, A, Y), G && _ !== V && I(V, A, G);
      } : I, at = function(_) {
        var A = X[_] = k(j[B]);
        return A._k = _, A;
      }, st = rt && typeof j.iterator == "symbol" ? function(_) {
        return typeof _ == "symbol";
      } : function(_) {
        return _ instanceof j;
      }, it = function(_, A, Y) {
        return _ === V && it(lt, A, Y), M(_), A = v(A, !0), M(Y), o(X, A) ? (Y.enumerable ? (o(_, U) && _[U][A] && (_[U][A] = !1), Y = k(Y, { enumerable: m(0, !1) })) : (o(_, U) || I(_, U, m(1, {})), _[U][A] = !0), $(_, A, Y)) : I(_, A, Y);
      }, Mt = function(_, A) {
        M(_);
        for (var Y, G = R(A = N(A)), et = 0, dt = G.length; dt > et; )
          it(_, Y = G[et++], A[Y]);
        return _;
      }, Z = function(_, A) {
        return A === void 0 ? k(_) : Mt(k(_), A);
      }, F = function(_) {
        var A = tt.call(this, _ = v(_, !0));
        return !(this === V && o(X, _) && !o(lt, _)) && (!(A || !o(this, _) || !o(X, _) || o(this, U) && this[U][_]) || A);
      }, yt = function(_, A) {
        if (_ = N(_), A = v(A, !0), _ !== V || !o(X, A) || o(lt, A)) {
          var Y = H(_, A);
          return !Y || !o(X, A) || o(_, U) && _[U][A] || (Y.enumerable = !0), Y;
        }
      }, xt = function(_) {
        for (var A, Y = D(N(_)), G = [], et = 0; Y.length > et; )
          o(X, A = Y[et++]) || A == U || A == c || G.push(A);
        return G;
      }, kt = function(_) {
        for (var A, Y = _ === V, G = D(Y ? lt : N(_)), et = [], dt = 0; G.length > dt; )
          !o(X, A = G[dt++]) || Y && !o(V, A) || et.push(X[A]);
        return et;
      };
      rt || (j = function() {
        if (this instanceof j)
          throw TypeError("Symbol is not a constructor!");
        var _ = g(arguments.length > 0 ? arguments[0] : void 0), A = function(Y) {
          this === V && A.call(lt, Y), o(this, U) && o(this[U], _) && (this[U][_] = !1), $(this, _, m(1, Y));
        };
        return r && gt && $(V, _, { configurable: !0, set: A }), at(_);
      }, s(j[B], "toString", function() {
        return this._k;
      }), T.f = yt, O.f = it, t(36).f = x.f = xt, t(20).f = F, t(37).f = kt, r && !t(19) && s(V, "propertyIsEnumerable", F, !0), b.f = function(_) {
        return at(S(_));
      }), a(a.G + a.W + a.F * !rt, { Symbol: j });
      for (var ft = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), pt = 0; ft.length > pt; )
        S(ft[pt++]);
      for (var ft = L(S.store), pt = 0; ft.length > pt; )
        C(ft[pt++]);
      a(a.S + a.F * !rt, "Symbol", { for: function(_) {
        return o(Q, _ += "") ? Q[_] : Q[_] = j(_);
      }, keyFor: function(_) {
        if (st(_))
          return E(Q, _);
        throw TypeError(_ + " is not a symbol!");
      }, useSetter: function() {
        gt = !0;
      }, useSimple: function() {
        gt = !1;
      } }), a(a.S + a.F * !rt, "Object", { create: Z, defineProperty: it, defineProperties: Mt, getOwnPropertyDescriptor: yt, getOwnPropertyNames: xt, getOwnPropertySymbols: kt }), J && a(a.S + a.F * (!rt || f(function() {
        var _ = j();
        return K([_]) != "[null]" || K({ a: _ }) != "{}" || K(Object(_)) != "{}";
      })), "JSON", { stringify: function(_) {
        if (_ !== void 0 && !st(_)) {
          for (var A, Y, G = [_], et = 1; arguments.length > et; )
            G.push(arguments[et++]);
          return A = G[1], typeof A == "function" && (Y = A), !Y && P(A) || (A = function(dt, mt) {
            if (Y && (mt = Y.call(this, dt, mt)), !st(mt))
              return mt;
          }), G[1] = A, K.apply(J, G);
        }
      } }), j[B][nt] || t(6)(j[B], nt, j[B].valueOf), p(j, "Symbol"), p(Math, "Math", !0), p(n.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var n = t(2), o = t(6), r = t(18), a = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = s[c], u = n[f], p = u && u.prototype;
        p && !p[a] && o(p, a, f), r[f] = r.Array;
      }
    }, function(e, l, t) {
      l = e.exports = t(82)(), l.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, l) {
      e.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var n = [], o = 0; o < this.length; o++) {
            var r = this[o];
            r[2] ? n.push("@media " + r[2] + "{" + r[1] + "}") : n.push(r[1]);
          }
          return n.join("");
        }, t.i = function(n, o) {
          typeof n == "string" && (n = [[null, n, ""]]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var s = this[a][0];
            typeof s == "number" && (r[s] = !0);
          }
          for (a = 0; a < n.length; a++) {
            var c = n[a];
            typeof c[0] == "number" && r[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(" + c[2] + ") and (" + o + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, l, t) {
      function n(v, m) {
        for (var k = 0; k < v.length; k++) {
          var x = v[k], T = S[x.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](x.parts[O]);
            for (; O < x.parts.length; O++)
              T.parts.push(f(x.parts[O], m));
          } else {
            for (var L = [], O = 0; O < x.parts.length; O++)
              L.push(f(x.parts[O], m));
            S[x.id] = { id: x.id, refs: 1, parts: L };
          }
        }
      }
      function o(v) {
        for (var m = [], k = {}, x = 0; x < v.length; x++) {
          var T = v[x], O = T[0], L = T[1], H = T[2], I = T[3], D = { css: L, media: H, sourceMap: I };
          k[O] ? k[O].parts.push(D) : m.push(k[O] = { id: O, parts: [D] });
        }
        return m;
      }
      function r(v, m) {
        var k = E(), x = M[M.length - 1];
        if (v.insertAt === "top")
          x ? x.nextSibling ? k.insertBefore(m, x.nextSibling) : k.appendChild(m) : k.insertBefore(m, k.firstChild), M.push(m);
        else {
          if (v.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          k.appendChild(m);
        }
      }
      function a(v) {
        v.parentNode.removeChild(v);
        var m = M.indexOf(v);
        m >= 0 && M.splice(m, 1);
      }
      function s(v) {
        var m = document.createElement("style");
        return m.type = "text/css", r(v, m), m;
      }
      function c(v) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", r(v, m), m;
      }
      function f(v, m) {
        var k, x, T;
        if (m.singleton) {
          var O = P++;
          k = R || (R = s(m)), x = u.bind(null, k, O, !1), T = u.bind(null, k, O, !0);
        } else
          v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (k = c(m), x = g.bind(null, k), T = function() {
            a(k), k.href && URL.revokeObjectURL(k.href);
          }) : (k = s(m), x = p.bind(null, k), T = function() {
            a(k);
          });
        return x(v), function(L) {
          if (L) {
            if (L.css === v.css && L.media === v.media && L.sourceMap === v.sourceMap)
              return;
            x(v = L);
          } else
            T();
        };
      }
      function u(v, m, k, x) {
        var T = k ? "" : x.css;
        if (v.styleSheet)
          v.styleSheet.cssText = N(m, T);
        else {
          var O = document.createTextNode(T), L = v.childNodes;
          L[m] && v.removeChild(L[m]), L.length ? v.insertBefore(O, L[m]) : v.appendChild(O);
        }
      }
      function p(v, m) {
        var k = m.css, x = m.media;
        if (x && v.setAttribute("media", x), v.styleSheet)
          v.styleSheet.cssText = k;
        else {
          for (; v.firstChild; )
            v.removeChild(v.firstChild);
          v.appendChild(document.createTextNode(k));
        }
      }
      function g(v, m) {
        var k = m.css, x = m.sourceMap;
        x && (k += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(x)))) + " */");
        var T = new Blob([k], { type: "text/css" }), O = v.href;
        v.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var S = {}, b = function(v) {
        var m;
        return function() {
          return typeof m > "u" && (m = v.apply(this, arguments)), m;
        };
      }, C = b(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = b(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), R = null, P = 0, M = [];
      e.exports = function(v, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = C()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var k = o(v);
        return n(k, m), function(x) {
          for (var T = [], O = 0; O < k.length; O++) {
            var L = k[O], H = S[L.id];
            H.refs--, T.push(H);
          }
          if (x) {
            var I = o(x);
            n(I, m);
          }
          for (var O = 0; O < T.length; O++) {
            var H = T[O];
            if (H.refs === 0) {
              for (var D = 0; D < H.parts.length; D++)
                H.parts[D]();
              delete S[H.id];
            }
          }
        };
      };
      var N = function() {
        var v = [];
        return function(m, k) {
          return v[m] = k, v.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, l, t) {
      var n = t(81);
      typeof n == "string" && (n = [[e.id, n, ""]]), t(83)(n, {}), n.locals && (e.exports = n.locals);
    }]);
  });
})(me);
function ge(d) {
  let i, e, l, t, n, o, r;
  return {
    c() {
      i = w("div"), e = w("h1"), e.textContent = "an unknown error", l = W(), t = w("button"), n = z("Reset Form"), y(e, "class", "text-2xl"), y(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        t,
        "background-color",
        /*button_color*/
        d[8]
      ), q(
        t,
        "color",
        /*text_color*/
        d[2]
      ), y(i, "class", "flex flex-col items-center");
    },
    m(a, s) {
      _t(a, i, s), h(i, e), h(i, l), h(i, t), h(t, n), o || (r = Jt(
        t,
        "click",
        /*click_handler_2*/
        d[24]
      ), o = !0);
    },
    p(a, s) {
      s & /*button_color*/
      256 && q(
        t,
        "background-color",
        /*button_color*/
        a[8]
      ), s & /*text_color*/
      4 && q(
        t,
        "color",
        /*text_color*/
        a[2]
      );
    },
    d(a) {
      a && wt(i), o = !1, r();
    }
  };
}
function ye(d) {
  let i, e, l, t, n = JSON.stringify(
    /*error*/
    d[5],
    null,
    2
  ) + "", o, r, a, s, c, f;
  return {
    c() {
      i = w("div"), e = w("h1"), e.textContent = "Error", l = W(), t = w("pre"), o = z(n), r = W(), a = w("button"), s = z("Reset Form"), y(e, "class", "text-2xl"), y(t, "class", "text-sm"), y(a, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        a,
        "background-color",
        /*button_color*/
        d[8]
      ), q(
        a,
        "color",
        /*text_color*/
        d[2]
      ), y(i, "class", "flex flex-col items-center");
    },
    m(u, p) {
      _t(u, i, p), h(i, e), h(i, l), h(i, t), h(t, o), h(i, r), h(i, a), h(a, s), c || (f = Jt(
        a,
        "click",
        /*click_handler_1*/
        d[23]
      ), c = !0);
    },
    p(u, p) {
      p & /*error*/
      32 && n !== (n = JSON.stringify(
        /*error*/
        u[5],
        null,
        2
      ) + "") && vt(o, n), p & /*button_color*/
      256 && q(
        a,
        "background-color",
        /*button_color*/
        u[8]
      ), p & /*text_color*/
      4 && q(
        a,
        "color",
        /*text_color*/
        u[2]
      );
    },
    d(u) {
      u && wt(i), c = !1, f();
    }
  };
}
function be(d) {
  let i, e, l, t, n, o, r = (
    /*backendData*/
    d[3].data[0].third_party_exchange_rate + ""
  ), a, s, c, f, u = (
    /*backendData*/
    d[3].data[0].ccy_pair + ""
  ), p, g, S = (
    /*backendData*/
    d[3].data[0].mid_market_rate + ""
  ), b, C, E, R, P, M = (
    /*backendData*/
    d[3].data[0].ccy_pair + ""
  ), N, v, m, k = (
    /*backendData*/
    d[3].data[0].sold_ccy + ""
  ), x, T, O = (
    /*backendData*/
    d[3].data[0].third_party_profit + ""
  ), L, H, I, D, j, J, K, B, U = (
    /*backendData*/
    d[3].data[0].integritas_rate + ""
  ), nt, tt, Q, X, lt = (
    /*backendData*/
    d[3].data[0].sold_ccy + ""
  ), V, rt, ut = (
    /*backendData*/
    d[3].data[0].integritas_savings + ""
  ), gt, $, at, st, it, Mt;
  return {
    c() {
      i = w("div"), e = w("div"), l = w("h1"), l.textContent = "Your Broker", t = W(), n = w("p"), o = z("Your exchange rate was "), a = z(r), s = W(), c = w("p"), f = z("The interbank rate "), p = z(u), g = z(`
                    was `), b = z(S), C = z("."), E = W(), R = w("p"), P = z("Your broker's markup was TODO "), N = z(M), v = z("%."), m = z(`
                Your broker made `), x = z(k), T = W(), L = z(O), H = z(" on this trade."), I = W(), D = w("div"), j = w("h1"), j.textContent = "Integritas", J = W(), K = w("p"), B = z("Our exchange rate was "), nt = z(U), tt = W(), Q = w("p"), X = z(`We would've saved
                    you `), V = z(lt), rt = W(), gt = z(ut), $ = W(), at = w("button"), st = z("Calculate again"), y(l, "class", "text-2xl"), y(n, "class", "text-sm"), y(c, "class", "text-sm"), y(e, "class", "flex flex-col gap-2"), y(j, "class", "text-2xl mt-4"), y(K, "class", "text-sm"), y(Q, "class", "text-sm"), y(D, "class", "flex flex-col gap-2"), y(i, "class", "flex flex-col divide-y gap-4"), y(at, "class", "rounded-lg bg-black px-6 py-3 mt-4"), q(
        at,
        "background-color",
        /*button_color*/
        d[8]
      ), q(
        at,
        "color",
        /*text_color*/
        d[2]
      );
    },
    m(Z, F) {
      _t(Z, i, F), h(i, e), h(e, l), h(e, t), h(e, n), h(n, o), h(n, a), h(e, s), h(e, c), h(c, f), h(c, p), h(c, g), h(c, b), h(c, C), h(e, E), h(e, R), h(R, P), h(R, N), h(R, v), h(e, m), h(e, x), h(e, T), h(e, L), h(e, H), h(i, I), h(i, D), h(D, j), h(D, J), h(D, K), h(K, B), h(K, nt), h(D, tt), h(D, Q), h(Q, X), h(Q, V), h(Q, rt), h(Q, gt), _t(Z, $, F), _t(Z, at, F), h(at, st), it || (Mt = Jt(
        at,
        "click",
        /*click_handler*/
        d[22]
      ), it = !0);
    },
    p(Z, F) {
      F & /*backendData*/
      8 && r !== (r = /*backendData*/
      Z[3].data[0].third_party_exchange_rate + "") && vt(a, r), F & /*backendData*/
      8 && u !== (u = /*backendData*/
      Z[3].data[0].ccy_pair + "") && vt(p, u), F & /*backendData*/
      8 && S !== (S = /*backendData*/
      Z[3].data[0].mid_market_rate + "") && vt(b, S), F & /*backendData*/
      8 && M !== (M = /*backendData*/
      Z[3].data[0].ccy_pair + "") && vt(N, M), F & /*backendData*/
      8 && k !== (k = /*backendData*/
      Z[3].data[0].sold_ccy + "") && vt(x, k), F & /*backendData*/
      8 && O !== (O = /*backendData*/
      Z[3].data[0].third_party_profit + "") && vt(L, O), F & /*backendData*/
      8 && U !== (U = /*backendData*/
      Z[3].data[0].integritas_rate + "") && vt(nt, U), F & /*backendData*/
      8 && lt !== (lt = /*backendData*/
      Z[3].data[0].sold_ccy + "") && vt(V, lt), F & /*backendData*/
      8 && ut !== (ut = /*backendData*/
      Z[3].data[0].integritas_savings + "") && vt(gt, ut), F & /*button_color*/
      256 && q(
        at,
        "background-color",
        /*button_color*/
        Z[8]
      ), F & /*text_color*/
      4 && q(
        at,
        "color",
        /*text_color*/
        Z[2]
      );
    },
    d(Z) {
      Z && wt(i), Z && wt($), Z && wt(at), it = !1, Mt();
    }
  };
}
function ve(d) {
  let i, e, l, t, n, o, r, a, s, c, f, u, p, g, S, b, C, E, R, P, M, N, v, m, k, x, T, O, L, H, I, D, j, J, K, B, U, nt, tt, Q, X, lt, V, rt, ut, gt, $, at, st, it, Mt, Z, F, yt, xt, kt, ft, pt, _, A, Y, G, et, dt, mt, Ct, St, Dt, Ot, Et, Gt, Lt, Yt, Wt;
  function qt(ot, ht) {
    return (
      /*isFetching*/
      ot[6] ? _e : we
    );
  }
  let Ft = qt(d), bt = Ft(d);
  return {
    c() {
      i = w("form"), e = w("div"), l = w("div"), t = w("div"), n = w("label"), n.textContent = "Select Date", o = W(), r = w("input"), a = W(), s = w("div"), c = w("label"), c.textContent = "Select Time", f = W(), u = w("input"), p = W(), g = w("div"), S = w("div"), b = w("label"), b.textContent = "I Paid", C = W(), E = w("input"), R = W(), P = w("div"), M = w("label"), N = z("Currency"), v = W(), m = w("select"), k = w("option"), k.textContent = "GBP", x = w("option"), x.textContent = "USD", T = w("option"), T.textContent = "EUR", O = w("option"), O.textContent = "JPY", L = w("option"), L.textContent = "CHF", H = w("option"), H.textContent = "CNY", I = w("option"), I.textContent = "NZD", D = w("option"), D.textContent = "SGD", j = w("option"), j.textContent = "INR", J = w("option"), J.textContent = "AUD", K = w("option"), K.textContent = "CAD", B = w("option"), B.textContent = "HKD", U = w("option"), U.textContent = "MYR", nt = w("option"), nt.textContent = "NOK", tt = w("option"), tt.textContent = "ZAR", Q = w("option"), Q.textContent = "RUB", X = w("option"), X.textContent = "SEK", lt = W(), V = w("div"), rt = w("div"), ut = w("label"), ut.textContent = "I Received", gt = W(), $ = w("input"), at = W(), st = w("div"), it = w("label"), Mt = z("Currency"), Z = W(), F = w("select"), yt = w("option"), yt.textContent = "USD", xt = w("option"), xt.textContent = "GBP", kt = w("option"), kt.textContent = "EUR", ft = w("option"), ft.textContent = "JPY", pt = w("option"), pt.textContent = "CHF", _ = w("option"), _.textContent = "CNY", A = w("option"), A.textContent = "NZD", Y = w("option"), Y.textContent = "SGD", G = w("option"), G.textContent = "INR", et = w("option"), et.textContent = "AUD", dt = w("option"), dt.textContent = "CAD", mt = w("option"), mt.textContent = "HKD", Ct = w("option"), Ct.textContent = "MYR", St = w("option"), St.textContent = "NOK", Dt = w("option"), Dt.textContent = "ZAR", Ot = w("option"), Ot.textContent = "RUB", Et = w("option"), Et.textContent = "SEK", Gt = W(), Lt = w("div"), bt.c(), y(n, "for", "date"), y(r, "id", "date"), y(r, "type", "date"), y(r, "class", "w-full rounded-md px-3 py-2"), y(r, "name", "date"), y(r, "placeholder", "Select date"), r.required = !0, y(
        r,
        "style",
        /*input_style*/
        d[9]
      ), y(t, "class", "w-full"), y(c, "for", "time"), y(u, "id", "time"), y(u, "type", "time"), y(u, "class", "w-full rounded-md px-3 py-2"), y(u, "name", "time"), y(u, "placeholder", "Select Time"), u.required = !0, y(
        u,
        "style",
        /*input_style*/
        d[9]
      ), y(s, "class", "w-full"), y(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), y(b, "for", "sold_notional"), y(E, "id", "sold_notional"), y(E, "type", "number"), y(E, "step", ".01"), y(E, "class", "w-full rounded-md px-3 py-2"), y(E, "name", "sold_notional"), y(E, "placeholder", "10000"), E.required = !0, y(
        E,
        "style",
        /*input_style*/
        d[9]
      ), y(S, "class", "w-full"), y(M, "for", "sold_ccy"), q(
        M,
        "color",
        /*text_color*/
        d[2]
      ), k.selected = !0, k.__value = "GBP", k.value = k.__value, x.__value = "USD", x.value = x.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, L.__value = "CHF", L.value = L.__value, H.__value = "CNY", H.value = H.__value, I.__value = "NZD", I.value = I.__value, D.__value = "SGD", D.value = D.__value, j.__value = "INR", j.value = j.__value, J.__value = "AUD", J.value = J.__value, K.__value = "CAD", K.value = K.__value, B.__value = "HKD", B.value = B.__value, U.__value = "MYR", U.value = U.__value, nt.__value = "NOK", nt.value = nt.__value, tt.__value = "ZAR", tt.value = tt.__value, Q.__value = "RUB", Q.value = Q.__value, X.__value = "SEK", X.value = X.__value, y(m, "name", "sold_ccy"), y(m, "id", "sold_ccy"), y(m, "class", "w-full rounded-md px-3 py-2"), m.required = !0, y(
        m,
        "style",
        /*input_style*/
        d[9]
      ), y(P, "class", "w-full"), y(g, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(ut, "for", "bought_notional"), y($, "id", "bought_notional"), y($, "type", "number"), y($, "step", ".01"), y($, "class", "w-full rounded-md px-3 py-2"), y($, "name", "bought_notional"), y($, "placeholder", "10000"), $.required = !0, y(
        $,
        "style",
        /*input_style*/
        d[9]
      ), y(rt, "class", "w-full"), y(it, "for", "bought_ccy"), q(
        it,
        "color",
        /*text_color*/
        d[2]
      ), yt.selected = !0, yt.__value = "USD", yt.value = yt.__value, xt.__value = "GBP", xt.value = xt.__value, kt.__value = "EUR", kt.value = kt.__value, ft.__value = "JPY", ft.value = ft.__value, pt.__value = "CHF", pt.value = pt.__value, _.__value = "CNY", _.value = _.__value, A.__value = "NZD", A.value = A.__value, Y.__value = "SGD", Y.value = Y.__value, G.__value = "INR", G.value = G.__value, et.__value = "AUD", et.value = et.__value, dt.__value = "CAD", dt.value = dt.__value, mt.__value = "HKD", mt.value = mt.__value, Ct.__value = "MYR", Ct.value = Ct.__value, St.__value = "NOK", St.value = St.__value, Dt.__value = "ZAR", Dt.value = Dt.__value, Ot.__value = "RUB", Ot.value = Ot.__value, Et.__value = "SEK", Et.value = Et.__value, y(F, "name", "bought_ccy"), y(F, "id", "bought_ccy"), y(F, "class", "w-full rounded-md px-3 py-2"), F.required = !0, y(
        F,
        "style",
        /*input_style*/
        d[9]
      ), y(st, "class", "w-full"), y(V, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(e, "class", "flex flex-col sm:gap-4");
    },
    m(ot, ht) {
      _t(ot, i, ht), h(i, e), h(e, l), h(l, t), h(t, n), h(t, o), h(t, r), h(l, a), h(l, s), h(s, c), h(s, f), h(s, u), h(e, p), h(e, g), h(g, S), h(S, b), h(S, C), h(S, E), h(g, R), h(g, P), h(P, M), h(M, N), h(P, v), h(P, m), h(m, k), h(m, x), h(m, T), h(m, O), h(m, L), h(m, H), h(m, I), h(m, D), h(m, j), h(m, J), h(m, K), h(m, B), h(m, U), h(m, nt), h(m, tt), h(m, Q), h(m, X), h(e, lt), h(e, V), h(V, rt), h(rt, ut), h(rt, gt), h(rt, $), h(V, at), h(V, st), h(st, it), h(it, Mt), h(st, Z), h(st, F), h(F, yt), h(F, xt), h(F, kt), h(F, ft), h(F, pt), h(F, _), h(F, A), h(F, Y), h(F, G), h(F, et), h(F, dt), h(F, mt), h(F, Ct), h(F, St), h(F, Dt), h(F, Ot), h(F, Et), h(e, Gt), h(e, Lt), bt.m(Lt, null), Yt || (Wt = Jt(
        i,
        "submit",
        /*handleFormSubmit*/
        d[11]
      ), Yt = !0);
    },
    p(ot, ht) {
      ht & /*input_style*/
      512 && y(
        r,
        "style",
        /*input_style*/
        ot[9]
      ), ht & /*input_style*/
      512 && y(
        u,
        "style",
        /*input_style*/
        ot[9]
      ), ht & /*input_style*/
      512 && y(
        E,
        "style",
        /*input_style*/
        ot[9]
      ), ht & /*text_color*/
      4 && q(
        M,
        "color",
        /*text_color*/
        ot[2]
      ), ht & /*input_style*/
      512 && y(
        m,
        "style",
        /*input_style*/
        ot[9]
      ), ht & /*input_style*/
      512 && y(
        $,
        "style",
        /*input_style*/
        ot[9]
      ), ht & /*text_color*/
      4 && q(
        it,
        "color",
        /*text_color*/
        ot[2]
      ), ht & /*input_style*/
      512 && y(
        F,
        "style",
        /*input_style*/
        ot[9]
      ), Ft === (Ft = qt(ot)) && bt ? bt.p(ot, ht) : (bt.d(1), bt = Ft(ot), bt && (bt.c(), bt.m(Lt, null)));
    },
    d(ot) {
      ot && wt(i), bt.d(), Yt = !1, Wt();
    }
  };
}
function _e(d) {
  let i, e, l, t, n;
  return {
    c() {
      i = w("button"), e = Ht("svg"), l = Ht("path"), t = Ht("path"), n = z(`
                            Loading...`), y(l, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), y(l, "fill", "#E5E7EB"), y(t, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), y(t, "fill", "currentColor"), y(e, "aria-hidden", "true"), y(e, "role", "status"), y(e, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), y(e, "viewBox", "0 0 100 101"), y(e, "fill", "none"), y(e, "xmlns", "http://www.w3.org/2000/svg"), i.disabled = !0, y(i, "type", "button"), y(i, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), q(
        i,
        "background-color",
        /*button_color*/
        d[8]
      ), q(
        i,
        "color",
        /*text_color*/
        d[2]
      );
    },
    m(o, r) {
      _t(o, i, r), h(i, e), h(e, l), h(e, t), h(i, n);
    },
    p(o, r) {
      r & /*button_color*/
      256 && q(
        i,
        "background-color",
        /*button_color*/
        o[8]
      ), r & /*text_color*/
      4 && q(
        i,
        "color",
        /*text_color*/
        o[2]
      );
    },
    d(o) {
      o && wt(i);
    }
  };
}
function we(d) {
  let i, e;
  return {
    c() {
      i = w("button"), e = z(`See your
                            charges`), y(i, "type", "submit"), y(i, "class", "rounded-lg bg-black px-6 py-3 mt-6"), q(
        i,
        "background-color",
        /*button_color*/
        d[8]
      ), q(
        i,
        "color",
        /*text_color*/
        d[2]
      );
    },
    m(l, t) {
      _t(l, i, t), h(i, e);
    },
    p(l, t) {
      t & /*button_color*/
      256 && q(
        i,
        "background-color",
        /*button_color*/
        l[8]
      ), t & /*text_color*/
      4 && q(
        i,
        "color",
        /*text_color*/
        l[2]
      );
    },
    d(l) {
      l && wt(i);
    }
  };
}
function xe(d) {
  let i, e, l;
  function t(r, a) {
    return (
      /*isIdle*/
      r[4] || /*isFetching*/
      r[6] ? ve : (
        /*backendData*/
        r[3] ? be : (
          /*error*/
          r[5] ? ye : ge
        )
      )
    );
  }
  let n = t(d), o = n(d);
  return {
    c() {
      i = w("div"), o.c(), this.c = Nt, y(i, "class", e = `w-full p-4 shadow-${/*shadow*/
      d[1]}}`), y(i, "style", l = `
        background-color: ${/*background*/
      d[7]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[2]};
`);
    },
    m(r, a) {
      _t(r, i, a), o.m(i, null);
    },
    p(r, [a]) {
      n === (n = t(r)) && o ? o.p(r, a) : (o.d(1), o = n(r), o && (o.c(), o.m(i, null))), a & /*shadow*/
      2 && e !== (e = `w-full p-4 shadow-${/*shadow*/
      r[1]}}`) && y(i, "class", e), a & /*background, border_radius, text_color*/
      133 && l !== (l = `
        background-color: ${/*background*/
      r[7]};
        border-radius: ${/*border_radius*/
      r[0]};
        color: ${/*text_color*/
      r[2]};
`) && y(i, "style", l);
    },
    i: Nt,
    o: Nt,
    d(r) {
      r && wt(i), o.d();
    }
  };
}
const ke = "http://localhost:8000";
function Me(d, i, e) {
  let l;
  const t = async (D) => (await fetch(`${ke}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  })).json();
  let n, o = !0, r, a = !1;
  const s = () => {
    e(3, n = void 0), e(4, o = !0), e(5, r = !1), e(6, a = !1);
  }, c = (D) => {
    e(4, o = !1), e(6, a = !0), e(5, r = !1), t(D).then((j) => {
      if (!j.ok)
        throw new Error(`Request failed with status ${j.status}`);
      return j.json();
    }).then((j) => {
      e(6, a = !1), e(5, r = !1), e(4, o = !1), console.log("Success"), console.log(j), e(3, n = j);
    }).catch((j) => {
      e(6, a = !1), e(5, r = j), e(4, o = !1), console.error(j);
    });
  }, f = async (D) => {
    D.preventDefault();
    const j = new FormData(D.target), J = {};
    for (let K of j) {
      const [B, U] = K;
      J[B] = U;
    }
    J.prospect = "", J.input_spread = "5", J.prospect_annual_flow = "", J.email_user = !1, J.user = "yuriypidlisnyi2020@gmail.com", console.log(J), c(J);
  };
  let u = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const p = (D) => {
    e(20, u = D.matches);
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", p);
  let { light_mode_background: S = "#d2d0d0" } = i, { dark_mode_background: b = "#1f2937" } = i, { light_mode_text_color: C = "#1f2937" } = i, { dark_mode_text_color: E = "#f9fafb" } = i, { dark_mode_input_background: R = "#374151" } = i, { light_mode_input_background: P = "#f9fafb" } = i, { dark_mode_button_color: M = "#374151" } = i, { light_mode_button_color: N = "#f9fafb" } = i, { border_radius: v = "0.5rem" } = i, { shadow: m = "none" } = i, k, x, T, O;
  const L = (D) => s(), H = (D) => s(), I = (D) => s();
  return d.$$set = (D) => {
    "light_mode_background" in D && e(12, S = D.light_mode_background), "dark_mode_background" in D && e(13, b = D.dark_mode_background), "light_mode_text_color" in D && e(14, C = D.light_mode_text_color), "dark_mode_text_color" in D && e(15, E = D.dark_mode_text_color), "dark_mode_input_background" in D && e(16, R = D.dark_mode_input_background), "light_mode_input_background" in D && e(17, P = D.light_mode_input_background), "dark_mode_button_color" in D && e(18, M = D.dark_mode_button_color), "light_mode_button_color" in D && e(19, N = D.light_mode_button_color), "border_radius" in D && e(0, v = D.border_radius), "shadow" in D && e(1, m = D.shadow);
  }, d.$$.update = () => {
    d.$$.dirty & /*isDarkMode, dark_mode_background, light_mode_background*/
    1060864 && e(7, k = u ? b : S), d.$$.dirty & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    1097728 && e(2, x = u ? E : C), d.$$.dirty & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    1245184 && e(21, T = u ? R : P), d.$$.dirty & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    1835008 && e(8, O = u ? M : N), d.$$.dirty & /*input_background, text_color, border_radius*/
    2097157 && e(9, l = `
    background-color: ${T};
    color: ${x};
    border-radius: ${v};
    `);
  }, [
    v,
    m,
    x,
    n,
    o,
    r,
    a,
    k,
    O,
    l,
    s,
    f,
    S,
    b,
    C,
    E,
    R,
    P,
    M,
    N,
    u,
    T,
    L,
    H,
    I
  ];
}
class Ce extends te {
  constructor(i) {
    super(), this.shadowRoot.innerHTML = `<style>*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p,pre{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }.mr-2{margin-right:0.5rem
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
    }.gap-12{gap:3rem
    }.gap-2{gap:0.5rem
    }.gap-4{gap:1rem
    }.gap-6{gap:1.5rem
    }.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))
    }.rounded-lg{border-radius:0.5rem
    }.rounded-md{border-radius:0.375rem
    }.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))
    }.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
    }.p-4{padding:1rem
    }.px-3{padding-left:0.75rem;padding-right:0.75rem
    }.px-5{padding-left:1.25rem;padding-right:1.25rem
    }.px-6{padding-left:1.5rem;padding-right:1.5rem
    }.py-2{padding-top:0.5rem;padding-bottom:0.5rem
    }.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem
    }.py-3{padding-top:0.75rem;padding-bottom:0.75rem
    }.text-center{text-align:center
    }.text-2xl{font-size:1.5rem;line-height:2rem
    }.text-sm{font-size:0.875rem;line-height:1.25rem
    }.font-medium{font-weight:500
    }.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
    }.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175 / var(--tw-bg-opacity))
    }.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
    }.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253 / var(--tw-ring-opacity))
    }@media(prefers-color-scheme: dark){.dark\\:bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
        }.dark\\:hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
        }.dark\\:focus\\:ring-blue-800:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175 / var(--tw-ring-opacity))
        }}@media(min-width: 640px){.sm\\:flex-row{flex-direction:row
        }.sm\\:justify-between{justify-content:space-between
        }.sm\\:justify-around{justify-content:space-around
        }.sm\\:gap-12{gap:3rem
        }.sm\\:gap-4{gap:1rem
        }}</style>`, pe(
      this,
      {
        target: this.shadowRoot,
        props: re(this.attributes),
        customElement: !0
      },
      Me,
      xe,
      ee,
      {
        light_mode_background: 12,
        dark_mode_background: 13,
        light_mode_text_color: 14,
        dark_mode_text_color: 15,
        dark_mode_input_background: 16,
        light_mode_input_background: 17,
        dark_mode_button_color: 18,
        light_mode_button_color: 19,
        border_radius: 0,
        shadow: 1
      },
      null
    ), i && (i.target && _t(i.target, this, i.anchor), i.props && (this.$set(i.props), ct()));
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
      "shadow"
    ];
  }
  get light_mode_background() {
    return this.$$.ctx[12];
  }
  set light_mode_background(i) {
    this.$$set({ light_mode_background: i }), ct();
  }
  get dark_mode_background() {
    return this.$$.ctx[13];
  }
  set dark_mode_background(i) {
    this.$$set({ dark_mode_background: i }), ct();
  }
  get light_mode_text_color() {
    return this.$$.ctx[14];
  }
  set light_mode_text_color(i) {
    this.$$set({ light_mode_text_color: i }), ct();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[15];
  }
  set dark_mode_text_color(i) {
    this.$$set({ dark_mode_text_color: i }), ct();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[16];
  }
  set dark_mode_input_background(i) {
    this.$$set({ dark_mode_input_background: i }), ct();
  }
  get light_mode_input_background() {
    return this.$$.ctx[17];
  }
  set light_mode_input_background(i) {
    this.$$set({ light_mode_input_background: i }), ct();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[18];
  }
  set dark_mode_button_color(i) {
    this.$$set({ dark_mode_button_color: i }), ct();
  }
  get light_mode_button_color() {
    return this.$$.ctx[19];
  }
  set light_mode_button_color(i) {
    this.$$set({ light_mode_button_color: i }), ct();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(i) {
    this.$$set({ border_radius: i }), ct();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(i) {
    this.$$set({ shadow: i }), ct();
  }
}
customElements.define("spreadm8-calc", Ce);
export {
  Ce as Spreadm8Calc
};
