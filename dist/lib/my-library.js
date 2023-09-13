function Nt() {
}
function Kt(s) {
  return s();
}
function Vt() {
  return /* @__PURE__ */ Object.create(null);
}
function Pt(s) {
  s.forEach(Kt);
}
function It(s) {
  return typeof s == "function";
}
function ee(s, i) {
  return s != s ? i == i : s !== i || s && typeof s == "object" || typeof s == "function";
}
function oe(s) {
  return Object.keys(s).length === 0;
}
function h(s, i) {
  s.appendChild(i);
}
function vt(s, i, e) {
  s.insertBefore(i, e || null);
}
function _t(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function w(s) {
  return document.createElement(s);
}
function Jt(s) {
  return document.createElementNS("http://www.w3.org/2000/svg", s);
}
function B(s) {
  return document.createTextNode(s);
}
function V() {
  return B(" ");
}
function Yt(s, i, e, l) {
  return s.addEventListener(i, e, l), () => s.removeEventListener(i, e, l);
}
function y(s, i, e) {
  e == null ? s.removeAttribute(i) : s.getAttribute(i) !== e && s.setAttribute(i, e);
}
function ne(s) {
  return Array.from(s.childNodes);
}
function kt(s, i) {
  i = "" + i, s.wholeText !== i && (s.data = i);
}
function W(s, i, e, l) {
  e === null ? s.style.removeProperty(i) : s.style.setProperty(i, e, l ? "important" : "");
}
function re(s) {
  const i = {};
  for (const e of s)
    i[e.name] = e.value;
  return i;
}
let Zt;
function jt(s) {
  Zt = s;
}
const Tt = [], Qt = [], Rt = [], Xt = [], ae = Promise.resolve();
let zt = !1;
function ie() {
  zt || (zt = !0, ae.then(ct));
}
function Bt(s) {
  Rt.push(s);
}
const Ut = /* @__PURE__ */ new Set();
let At = 0;
function ct() {
  if (At !== 0)
    return;
  const s = Zt;
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
  zt = !1, Ut.clear(), jt(s);
}
function le(s) {
  if (s.fragment !== null) {
    s.update(), Pt(s.before_update);
    const i = s.dirty;
    s.dirty = [-1], s.fragment && s.fragment.p(s.ctx, i), s.after_update.forEach(Bt);
  }
}
const ue = /* @__PURE__ */ new Set();
function se(s, i) {
  s && s.i && (ue.delete(s), s.i(i));
}
function de(s, i, e, l) {
  const { fragment: t, after_update: n } = s.$$;
  t && t.m(i, e), l || Bt(() => {
    const o = s.$$.on_mount.map(Kt).filter(It);
    s.$$.on_destroy ? s.$$.on_destroy.push(...o) : Pt(o), s.$$.on_mount = [];
  }), n.forEach(Bt);
}
function ce(s, i) {
  const e = s.$$;
  e.fragment !== null && (Pt(e.on_destroy), e.fragment && e.fragment.d(i), e.on_destroy = e.fragment = null, e.ctx = []);
}
function fe(s, i) {
  s.$$.dirty[0] === -1 && (Tt.push(s), ie(), s.$$.dirty.fill(0)), s.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function pe(s, i, e, l, t, n, o, r = [-1]) {
  const a = Zt;
  jt(s);
  const u = s.$$ = {
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
  o && o(u.root);
  let c = !1;
  if (u.ctx = e ? e(s, i.props || {}, (f, d, ...p) => {
    const g = p.length ? p[0] : d;
    return u.ctx && t(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), c && fe(s, f)), d;
  }) : [], u.update(), c = !0, Pt(u.before_update), u.fragment = l ? l(u.ctx) : !1, i.target) {
    if (i.hydrate) {
      const f = ne(i.target);
      u.fragment && u.fragment.l(f), f.forEach(_t);
    } else
      u.fragment && u.fragment.c();
    i.intro && se(s.$$.fragment), de(s, i.target, i.anchor, i.customElement), ct();
  }
  jt(a);
}
let te;
typeof HTMLElement == "function" && (te = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: s } = this.$$;
    this.$$.on_disconnect = s.map(Kt).filter(It);
    for (const i in this.$$.slotted)
      this.appendChild(this.$$.slotted[i]);
  }
  attributeChangedCallback(s, i, e) {
    this[s] = e;
  }
  disconnectedCallback() {
    Pt(this.$$.on_disconnect);
  }
  $destroy() {
    ce(this, 1), this.$destroy = Nt;
  }
  $on(s, i) {
    if (!It(i))
      return Nt;
    const e = this.$$.callbacks[s] || (this.$$.callbacks[s] = []);
    return e.push(i), () => {
      const l = e.indexOf(i);
      l !== -1 && e.splice(l, 1);
    };
  }
  $set(s) {
    this.$$set && !oe(s) && (this.$$.skip_bound = !0, this.$$set(s), this.$$.skip_bound = !1);
  }
});
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $t = {}, me = {
  get exports() {
    return $t;
  },
  set exports(s) {
    $t = s;
  }
};
(function(s, i) {
  (function(e, l) {
    s.exports = l();
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
      function n(u) {
        return u && u.__esModule ? u : { default: u };
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
      l.f = t(1) ? Object.defineProperty : function(u, c, f) {
        if (n(u), c = r(c, !0), n(f), o)
          try {
            return a(u, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (u[c] = f.value), u;
      };
    }, function(e, l, t) {
      var n = t(59), o = t(16);
      e.exports = function(r) {
        return n(o(r));
      };
    }, function(e, l, t) {
      var n = t(4), o = t(14);
      e.exports = t(1) ? function(r, a, u) {
        return n.f(r, a, o(1, u));
      } : function(r, a, u) {
        return r[a] = u, r;
      };
    }, function(e, l, t) {
      var n = t(23)("wks"), o = t(15), r = t(2).Symbol, a = typeof r == "function", u = e.exports = function(c) {
        return n[c] || (n[c] = a && r[c] || (a ? r : o)("Symbol." + c));
      };
      u.store = n;
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
      var n = t(2), o = t(8), r = t(56), a = t(6), u = "prototype", c = function(f, d, p) {
        var g, S, b, C = f & c.F, E = f & c.G, F = f & c.S, j = f & c.P, M = f & c.B, N = f & c.W, v = E ? o : o[d] || (o[d] = {}), m = v[u], k = E ? n : F ? n[d] : (n[d] || {})[u];
        E && (p = d);
        for (g in p)
          S = !C && k && k[g] !== void 0, S && g in v || (b = S ? k[g] : p[g], v[g] = E && typeof k[g] != "function" ? p[g] : M && S ? r(b, n) : N && k[g] == b ? function(x) {
            var T = function(O, P, J) {
              if (this instanceof x) {
                switch (arguments.length) {
                  case 0:
                    return new x();
                  case 1:
                    return new x(O);
                  case 2:
                    return new x(O, P);
                }
                return new x(O, P, J);
              }
              return x.apply(this, arguments);
            };
            return T[u] = x[u], T;
          }(b) : j && typeof b == "function" ? r(Function.call, b) : b, j && ((v.virtual || (v.virtual = {}))[g] = b, f & c.R && m && !m[g] && a(m, g, b)));
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
      e.exports = function(a, u, c) {
        a && !o(a = c ? a : a.prototype, r) && n(a, r, { configurable: !0, value: u });
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
        var a, u;
        if (r && typeof (a = o.toString) == "function" && !n(u = a.call(o)) || typeof (a = o.valueOf) == "function" && !n(u = a.call(o)) || !r && typeof (a = o.toString) == "function" && !n(u = a.call(o)))
          return u;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, l, t) {
      var n = t(2), o = t(8), r = t(19), a = t(27), u = t(4).f;
      e.exports = function(c) {
        var f = o.Symbol || (o.Symbol = r ? {} : n.Symbol || {});
        c.charAt(0) == "_" || c in f || u(f, c, { value: a.f(c) });
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
        function a(u, c) {
          for (var f = 0; f < c.length; f++) {
            var d = c[f];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), (0, r.default)(u, d.key, d);
          }
        }
        return function(u, c, f) {
          return c && a(u.prototype, c), f && a(u, f), u;
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
      var n = t(19), o = t(10), r = t(39), a = t(6), u = t(3), c = t(18), f = t(61), d = t(21), p = t(67), g = t(7)("iterator"), S = !([].keys && "next" in [].keys()), b = "@@iterator", C = "keys", E = "values", F = function() {
        return this;
      };
      e.exports = function(j, M, N, v, m, k, x) {
        f(N, M, v);
        var T, O, P, J = function(tt) {
          if (!S && tt in Y)
            return Y[tt];
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
        }, I = M + " Iterator", D = m == E, R = !1, Y = j.prototype, K = Y[g] || Y[b] || m && Y[m], z = K || J(m), U = m ? D ? J("entries") : z : void 0, nt = M == "Array" && Y.entries || K;
        if (nt && (P = p(nt.call(new j())), P !== Object.prototype && (d(P, I, !0), n || u(P, g) || a(P, g, F))), D && K && K.name !== E && (R = !0, z = function() {
          return K.call(this);
        }), n && !x || !S && !R && Y[g] || a(Y, g, z), c[M] = z, c[I] = F, m)
          if (T = { values: D ? z : J(E), keys: k ? z : J(C), entries: U }, x)
            for (O in T)
              O in Y || r(Y, O, T[O]);
          else
            o(o.P + o.F * (S || R), M, T);
        return T;
      };
    }, function(e, l, t) {
      var n = t(9), o = t(35), r = t(17), a = t(22)("IE_PROTO"), u = function() {
      }, c = "prototype", f = function() {
        var d, p = t(31)("iframe"), g = r.length, S = "<", b = ">";
        for (p.style.display = "none", t(58).appendChild(p), p.src = "javascript:", d = p.contentWindow.document, d.open(), d.write(S + "script" + b + "document.F=Object" + S + "/script" + b), d.close(), f = d.F; g--; )
          delete f[c][r[g]];
        return f();
      };
      e.exports = Object.create || function(d, p) {
        var g;
        return d !== null ? (u[c] = n(d), g = new u(), u[c] = null, g[a] = d) : g = f(), p === void 0 ? g : o(g, p);
      };
    }, function(e, l, t) {
      var n = t(4), o = t(9), r = t(13);
      e.exports = t(1) ? Object.defineProperties : function(a, u) {
        o(a);
        for (var c, f = r(u), d = f.length, p = 0; d > p; )
          n.f(a, c = f[p++], u[c]);
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
      e.exports = function(u, c) {
        var f, d = o(u), p = 0, g = [];
        for (f in d)
          f != a && n(d, f) && g.push(f);
        for (; c.length > p; )
          n(d, f = c[p++]) && (~r(g, f) || g.push(f));
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
      function u(p) {
        return p === null ? "null" : p === void 0 ? "undefined" : (typeof p > "u" ? "undefined" : (0, f.default)(p)) !== "object" ? typeof p > "u" ? "undefined" : (0, f.default)(p) : Array.isArray(p) ? "array" : {}.toString.call(p).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var c = t(48), f = n(c), d = function() {
        var p = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, g = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(b, C, E, F) {
          if (arguments.length !== 1 || u(b) !== "string" || /\d/.test(b) || (C = b, b = void 0), b = b || new Date(), b instanceof Date || (b = new Date(b)), isNaN(b))
            throw TypeError("Invalid date");
          C = String(d.masks[C] || C || d.masks.default);
          var j = C.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (C = C.slice(4), E = !0, j === "GMT:" && (F = !0));
          var M = E ? "getUTC" : "get", N = b[M + "Date"](), v = b[M + "Day"](), m = b[M + "Month"](), k = b[M + "FullYear"](), x = b[M + "Hours"](), T = b[M + "Minutes"](), O = b[M + "Seconds"](), P = b[M + "Milliseconds"](), J = E ? 0 : b.getTimezoneOffset(), I = r(b), D = a(b), R = { d: N, dd: o(N), ddd: d.i18n.dayNames[v], dddd: d.i18n.dayNames[v + 7], m: m + 1, mm: o(m + 1), mmm: d.i18n.monthNames[m], mmmm: d.i18n.monthNames[m + 12], yy: String(k).slice(2), yyyy: k, h: x % 12 || 12, hh: o(x % 12 || 12), H: x, HH: o(x), M: T, MM: o(T), s: O, ss: o(O), l: o(P, 3), L: o(Math.round(P / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: F ? "GMT" : E ? "UTC" : (String(b).match(g) || [""]).pop().replace(S, ""), o: (J > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(J) / 60) + Math.abs(J) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: I, N: D };
          return C.replace(p, function(Y) {
            return Y in R ? R[Y] : Y.slice(1, Y.length - 1);
          });
        };
      }();
      d.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, d.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = d;
    }, function(e, l, t) {
      function n(F) {
        return F && F.__esModule ? F : { default: F };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var o = t(44), r = n(o), a = t(28), u = n(a), c = t(29), f = n(c), d = t(43), p = n(d), g = t(42), S = n(g), b = t(40), C = n(b), E = function() {
        function F(j) {
          var M = this;
          (0, u.default)(this, F), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, r.default)(this.element, { valueAsDate: { get: function() {
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
        return (0, f.default)(F, [{ key: "getLocaleText", value: function() {
          var j = this.locale.toLowerCase();
          for (var M in S.default) {
            var N = M.split("_");
            if (N.map(function(v) {
              return v.toLowerCase();
            }), ~N.indexOf(j) || ~N.indexOf(j.substr(0, 2)))
              return S.default[M];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var j = document.createElement("input");
          j.setAttribute("type", "date");
          var M = "not-a-date";
          return j.setAttribute("value", M), j.value !== M;
        } }, { key: "addPickerToDateInputs", value: function() {
          var j = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), M = j.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new F(j[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var j = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), M = j.length;
          if (!M)
            return !1;
          for (var N = 0; N < M; ++N)
            new F(j[N]);
        } }]), F;
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
      var o = t(28), r = n(o), a = t(29), u = n(a), c = function() {
        function f() {
          var d = this;
          if ((0, r.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            d.date.setYear(d.year.value), d.refreshDaysMatrix();
          });
          var p = document.createElement("span");
          p.className = "yearSelect-wrapper", p.appendChild(this.year), this.container.appendChild(p), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            d.date.setMonth(d.month.value), d.refreshDaysMatrix();
          });
          var g = document.createElement("span");
          g.className = "monthSelect-wrapper", g.appendChild(this.month), this.container.appendChild(g), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var b = new Date();
            d.date = new Date(b.getFullYear() + "/" + ("0" + (b.getMonth() + 1)).slice(-2) + "/" + ("0" + b.getDate()).slice(-2)), d.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(b) {
            var C = b.target;
            if (!C.hasAttribute("data-day"))
              return !1;
            var E = d.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), C.setAttribute("data-selected", ""), d.date.setDate(parseInt(C.textContent)), d.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(b) {
            if (d.isOpen) {
              for (var C = b.target, E = C === d.container || C === d.input; !E && (C = C.parentNode); )
                E = C === d.container;
              (b.target.getAttribute("type") !== "date" && !E || !E) && d.hide();
            }
          }, this.removeBlur = function(b) {
            d.isOpen && d.hide();
          };
        }
        return (0, u.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var d = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", d.removeClickOut), document.addEventListener("touchstart", d.removeClickOut);
          }, 500), window.onpopstate = function() {
            d.hide();
          };
        } }, { key: "goto", value: function(d) {
          var p = this, g = d.getBoundingClientRect();
          this.container.style.top = g.top + g.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), b = S.width ? S.width : 280, C = function() {
            return p.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = g.right - b;
          g.right < b ? (E = g.left, this.container.className = C() + " polyfill-left-aligned") : this.container.className = C() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(d) {
          return !(d === this.input && this.isOpen || (this.input = d, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = f.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var d = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            d.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var d = ["<tr>"], p = 0, g = this.locale.days.length; p < g; ++p)
            d.push('<th scope="col">' + this.locale.days[p] + "</th>");
          this.daysHead.innerHTML = d.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var d = this.date.getFullYear(), p = this.date.getMonth(), g = new Date(d, p, 1).getDay(), S = new Date(this.date.getFullYear(), p + 1, 0).getDate(), b = f.absoluteDate(this.input.valueAsDate) || !1, C = b && d === b.getFullYear() && p === b.getMonth(), E = [], F = 0; F < S + g; ++F)
            if (F % 7 === 0 && E.push(`
          ` + (F !== 0 ? "</tr>" : "") + `
          <tr>
        `), F + 1 <= g)
              E.push("<td></td>");
            else {
              var j = F + 1 - g, M = C && b.getDate() === j;
              E.push("<td data-day " + (M ? "data-selected" : "") + `>
          ` + j + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var d = void 0, p = void 0;
          try {
            d = new Event("input"), p = new Event("change");
          } catch {
            d = document.createEvent("KeyboardEvent"), d.initEvent("input", !0, !1), p = document.createEvent("KeyboardEvent"), p.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(d), this.input.dispatchEvent(p);
        } }], [{ key: "createRangeSelect", value: function(d, p, g, S) {
          d.innerHTML = "";
          for (var b = p; b <= g; ++b) {
            var C = document.createElement("option");
            d.appendChild(C);
            var E = S ? S[b - p] : b;
            C.text = E, C.value = b;
          }
          return d;
        } }, { key: "absoluteDate", value: function(d) {
          return d && new Date(d.getTime() + 60 * d.getTimezoneOffset() * 1e3);
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
      var o = t(47), r = n(o), a = t(46), u = n(a), c = typeof u.default == "function" && typeof r.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof u.default == "function" && f.constructor === u.default ? "symbol" : typeof f;
      };
      l.default = typeof u.default == "function" && c(r.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : c(f);
      } : function(f) {
        return f && typeof u.default == "function" && f.constructor === u.default ? "symbol" : typeof f > "u" ? "undefined" : c(f);
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
        return function(u, c, f) {
          var d, p = n(u), g = o(p.length), S = r(f, g);
          if (a && c != c) {
            for (; g > S; )
              if (d = p[S++], d != d)
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
            return function(u) {
              return o.call(r, u);
            };
          case 2:
            return function(u, c) {
              return o.call(r, u, c);
            };
          case 3:
            return function(u, c, f) {
              return o.call(r, u, c, f);
            };
        }
        return function() {
          return o.apply(r, arguments);
        };
      };
    }, function(e, l, t) {
      var n = t(13), o = t(37), r = t(20);
      e.exports = function(a) {
        var u = n(a), c = o.f;
        if (c)
          for (var f, d = c(a), p = r.f, g = 0; d.length > g; )
            p.call(a, f = d[g++]) && u.push(f);
        return u;
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
      }), e.exports = function(u, c, f) {
        u.prototype = n(a, { next: o(1, f) }), r(u, c + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, n) {
        return { value: n, done: !!t };
      };
    }, function(e, l, t) {
      var n = t(13), o = t(5);
      e.exports = function(r, a) {
        for (var u, c = o(r), f = n(c), d = f.length, p = 0; d > p; )
          if (c[u = f[p++]] === a)
            return u;
      };
    }, function(e, l, t) {
      var n = t(15)("meta"), o = t(12), r = t(3), a = t(4).f, u = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), d = function(C) {
        a(C, n, { value: { i: "O" + ++u, w: {} } });
      }, p = function(C, E) {
        if (!o(C))
          return typeof C == "symbol" ? C : (typeof C == "string" ? "S" : "P") + C;
        if (!r(C, n)) {
          if (!c(C))
            return "F";
          if (!E)
            return "E";
          d(C);
        }
        return C[n].i;
      }, g = function(C, E) {
        if (!r(C, n)) {
          if (!c(C))
            return !0;
          if (!E)
            return !1;
          d(C);
        }
        return C[n].w;
      }, S = function(C) {
        return f && b.NEED && c(C) && !r(C, n) && d(C), C;
      }, b = e.exports = { KEY: n, NEED: !1, fastKey: p, getWeak: g, onFreeze: S };
    }, function(e, l, t) {
      var n = t(20), o = t(14), r = t(5), a = t(25), u = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? f : function(d, p) {
        if (d = r(d), p = a(p, !0), c)
          try {
            return f(d, p);
          } catch {
          }
        if (u(d, p))
          return o(!n.f.call(d, p), d[p]);
      };
    }, function(e, l, t) {
      var n = t(5), o = t(36).f, r = {}.toString, a = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function(c) {
        try {
          return o(c);
        } catch {
          return a.slice();
        }
      };
      e.exports.f = function(c) {
        return a && r.call(c) == "[object Window]" ? u(c) : o(n(c));
      };
    }, function(e, l, t) {
      var n = t(3), o = t(71), r = t(22)("IE_PROTO"), a = Object.prototype;
      e.exports = Object.getPrototypeOf || function(u) {
        return u = o(u), n(u, r) ? u[r] : typeof u.constructor == "function" && u instanceof u.constructor ? u.constructor.prototype : u instanceof Object ? a : null;
      };
    }, function(e, l, t) {
      var n = t(24), o = t(16);
      e.exports = function(r) {
        return function(a, u) {
          var c, f, d = String(o(a)), p = n(u), g = d.length;
          return p < 0 || p >= g ? r ? "" : void 0 : (c = d.charCodeAt(p), c < 55296 || c > 56319 || p + 1 === g || (f = d.charCodeAt(p + 1)) < 56320 || f > 57343 ? r ? d.charAt(p) : c : r ? d.slice(p, p + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(e, l, t) {
      var n = t(24), o = Math.max, r = Math.min;
      e.exports = function(a, u) {
        return a = n(a), a < 0 ? o(a + u, 0) : r(a, u);
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
      e.exports = t(33)(Array, "Array", function(u, c) {
        this._t = a(u), this._i = 0, this._k = c;
      }, function() {
        var u = this._t, c = this._k, f = this._i++;
        return !u || f >= u.length ? (this._t = void 0, o(1)) : c == "keys" ? o(0, f) : c == "values" ? o(0, u[f]) : o(0, [f, u[f]]);
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
      var n = t(2), o = t(3), r = t(1), a = t(10), u = t(39), c = t(64).KEY, f = t(11), d = t(23), p = t(21), g = t(15), S = t(7), b = t(27), C = t(26), E = t(63), F = t(57), j = t(60), M = t(9), N = t(5), v = t(25), m = t(14), k = t(34), x = t(66), T = t(65), O = t(4), P = t(13), J = T.f, I = O.f, D = x.f, R = n.Symbol, Y = n.JSON, K = Y && Y.stringify, z = "prototype", U = S("_hidden"), nt = S("toPrimitive"), tt = {}.propertyIsEnumerable, Q = d("symbol-registry"), X = d("symbols"), lt = d("op-symbols"), q = Object[z], rt = typeof R == "function", ut = n.QObject, gt = !ut || !ut[z] || !ut[z].findChild, $ = r && f(function() {
        return k(I({}, "a", { get: function() {
          return I(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(_, A, H) {
        var G = J(q, A);
        G && delete q[A], I(_, A, H), G && _ !== q && I(q, A, G);
      } : I, at = function(_) {
        var A = X[_] = k(R[z]);
        return A._k = _, A;
      }, st = rt && typeof R.iterator == "symbol" ? function(_) {
        return typeof _ == "symbol";
      } : function(_) {
        return _ instanceof R;
      }, it = function(_, A, H) {
        return _ === q && it(lt, A, H), M(_), A = v(A, !0), M(H), o(X, A) ? (H.enumerable ? (o(_, U) && _[U][A] && (_[U][A] = !1), H = k(H, { enumerable: m(0, !1) })) : (o(_, U) || I(_, U, m(1, {})), _[U][A] = !0), $(_, A, H)) : I(_, A, H);
      }, Mt = function(_, A) {
        M(_);
        for (var H, G = F(A = N(A)), et = 0, dt = G.length; dt > et; )
          it(_, H = G[et++], A[H]);
        return _;
      }, Z = function(_, A) {
        return A === void 0 ? k(_) : Mt(k(_), A);
      }, L = function(_) {
        var A = tt.call(this, _ = v(_, !0));
        return !(this === q && o(X, _) && !o(lt, _)) && (!(A || !o(this, _) || !o(X, _) || o(this, U) && this[U][_]) || A);
      }, yt = function(_, A) {
        if (_ = N(_), A = v(A, !0), _ !== q || !o(X, A) || o(lt, A)) {
          var H = J(_, A);
          return !H || !o(X, A) || o(_, U) && _[U][A] || (H.enumerable = !0), H;
        }
      }, wt = function(_) {
        for (var A, H = D(N(_)), G = [], et = 0; H.length > et; )
          o(X, A = H[et++]) || A == U || A == c || G.push(A);
        return G;
      }, xt = function(_) {
        for (var A, H = _ === q, G = D(H ? lt : N(_)), et = [], dt = 0; G.length > dt; )
          !o(X, A = G[dt++]) || H && !o(q, A) || et.push(X[A]);
        return et;
      };
      rt || (R = function() {
        if (this instanceof R)
          throw TypeError("Symbol is not a constructor!");
        var _ = g(arguments.length > 0 ? arguments[0] : void 0), A = function(H) {
          this === q && A.call(lt, H), o(this, U) && o(this[U], _) && (this[U][_] = !1), $(this, _, m(1, H));
        };
        return r && gt && $(q, _, { configurable: !0, set: A }), at(_);
      }, u(R[z], "toString", function() {
        return this._k;
      }), T.f = yt, O.f = it, t(36).f = x.f = wt, t(20).f = L, t(37).f = xt, r && !t(19) && u(q, "propertyIsEnumerable", L, !0), b.f = function(_) {
        return at(S(_));
      }), a(a.G + a.W + a.F * !rt, { Symbol: R });
      for (var ft = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), pt = 0; ft.length > pt; )
        S(ft[pt++]);
      for (var ft = P(S.store), pt = 0; ft.length > pt; )
        C(ft[pt++]);
      a(a.S + a.F * !rt, "Symbol", { for: function(_) {
        return o(Q, _ += "") ? Q[_] : Q[_] = R(_);
      }, keyFor: function(_) {
        if (st(_))
          return E(Q, _);
        throw TypeError(_ + " is not a symbol!");
      }, useSetter: function() {
        gt = !0;
      }, useSimple: function() {
        gt = !1;
      } }), a(a.S + a.F * !rt, "Object", { create: Z, defineProperty: it, defineProperties: Mt, getOwnPropertyDescriptor: yt, getOwnPropertyNames: wt, getOwnPropertySymbols: xt }), Y && a(a.S + a.F * (!rt || f(function() {
        var _ = R();
        return K([_]) != "[null]" || K({ a: _ }) != "{}" || K(Object(_)) != "{}";
      })), "JSON", { stringify: function(_) {
        if (_ !== void 0 && !st(_)) {
          for (var A, H, G = [_], et = 1; arguments.length > et; )
            G.push(arguments[et++]);
          return A = G[1], typeof A == "function" && (H = A), !H && j(A) || (A = function(dt, mt) {
            if (H && (mt = H.call(this, dt, mt)), !st(mt))
              return mt;
          }), G[1] = A, K.apply(Y, G);
        }
      } }), R[z][nt] || t(6)(R[z], nt, R[z].valueOf), p(R, "Symbol"), p(Math, "Math", !0), p(n.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var n = t(2), o = t(6), r = t(18), a = t(7)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = u[c], d = n[f], p = d && d.prototype;
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
            var u = this[a][0];
            typeof u == "number" && (r[u] = !0);
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
            for (var P = [], O = 0; O < x.parts.length; O++)
              P.push(f(x.parts[O], m));
            S[x.id] = { id: x.id, refs: 1, parts: P };
          }
        }
      }
      function o(v) {
        for (var m = [], k = {}, x = 0; x < v.length; x++) {
          var T = v[x], O = T[0], P = T[1], J = T[2], I = T[3], D = { css: P, media: J, sourceMap: I };
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
      function u(v) {
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
          var O = j++;
          k = F || (F = u(m)), x = d.bind(null, k, O, !1), T = d.bind(null, k, O, !0);
        } else
          v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (k = c(m), x = g.bind(null, k), T = function() {
            a(k), k.href && URL.revokeObjectURL(k.href);
          }) : (k = u(m), x = p.bind(null, k), T = function() {
            a(k);
          });
        return x(v), function(P) {
          if (P) {
            if (P.css === v.css && P.media === v.media && P.sourceMap === v.sourceMap)
              return;
            x(v = P);
          } else
            T();
        };
      }
      function d(v, m, k, x) {
        var T = k ? "" : x.css;
        if (v.styleSheet)
          v.styleSheet.cssText = N(m, T);
        else {
          var O = document.createTextNode(T), P = v.childNodes;
          P[m] && v.removeChild(P[m]), P.length ? v.insertBefore(O, P[m]) : v.appendChild(O);
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
      }), F = null, j = 0, M = [];
      e.exports = function(v, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = C()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var k = o(v);
        return n(k, m), function(x) {
          for (var T = [], O = 0; O < k.length; O++) {
            var P = k[O], J = S[P.id];
            J.refs--, T.push(J);
          }
          if (x) {
            var I = o(x);
            n(I, m);
          }
          for (var O = 0; O < T.length; O++) {
            var J = T[O];
            if (J.refs === 0) {
              for (var D = 0; D < J.parts.length; D++)
                J.parts[D]();
              delete S[J.id];
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
function ge(s) {
  let i, e, l, t, n, o, r;
  return {
    c() {
      i = w("div"), e = w("h1"), e.textContent = "An unknown error", l = V(), t = w("button"), n = B("Reset Form"), y(e, "class", "text-2xl"), y(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), W(
        t,
        "background-color",
        /*button_color*/
        s[8]
      ), W(
        t,
        "color",
        /*text_color*/
        s[2]
      ), y(i, "class", "flex flex-col items-center");
    },
    m(a, u) {
      vt(a, i, u), h(i, e), h(i, l), h(i, t), h(t, n), o || (r = Yt(
        t,
        "click",
        /*click_handler_2*/
        s[24]
      ), o = !0);
    },
    p(a, u) {
      u & /*button_color*/
      256 && W(
        t,
        "background-color",
        /*button_color*/
        a[8]
      ), u & /*text_color*/
      4 && W(
        t,
        "color",
        /*text_color*/
        a[2]
      );
    },
    d(a) {
      a && _t(i), o = !1, r();
    }
  };
}
function ye(s) {
  let i, e, l, t, n, o, r;
  return {
    c() {
      i = w("div"), e = w("h1"), e.textContent = "Error", l = V(), t = w("button"), n = B("Reset Form"), y(e, "class", "text-2xl"), y(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), W(
        t,
        "background-color",
        /*button_color*/
        s[8]
      ), W(
        t,
        "color",
        /*text_color*/
        s[2]
      ), y(i, "class", "flex flex-col items-center");
    },
    m(a, u) {
      vt(a, i, u), h(i, e), h(i, l), h(i, t), h(t, n), o || (r = Yt(
        t,
        "click",
        /*click_handler_1*/
        s[23]
      ), o = !0);
    },
    p(a, u) {
      u & /*button_color*/
      256 && W(
        t,
        "background-color",
        /*button_color*/
        a[8]
      ), u & /*text_color*/
      4 && W(
        t,
        "color",
        /*text_color*/
        a[2]
      );
    },
    d(a) {
      a && _t(i), o = !1, r();
    }
  };
}
function be(s) {
  let i, e, l, t, n, o, r = (
    /*backendData*/
    s[3].data[0].third_party_exchange_rate + ""
  ), a, u, c, f, d = (
    /*backendData*/
    s[3].data[0].ccy_pair + ""
  ), p, g, S = (
    /*backendData*/
    s[3].data[0].mid_market_rate + ""
  ), b, C, E, F, j, M = (
    /*backendData*/
    s[3].data[0].ccy_pair + ""
  ), N, v, m, k = (
    /*backendData*/
    s[3].data[0].sold_ccy + ""
  ), x, T, O = (
    /*backendData*/
    s[3].data[0].third_party_profit + ""
  ), P, J, I, D, R, Y, K, z, U = (
    /*backendData*/
    s[3].data[0].integritas_rate + ""
  ), nt, tt, Q, X, lt = (
    /*backendData*/
    s[3].data[0].sold_ccy + ""
  ), q, rt, ut = (
    /*backendData*/
    s[3].data[0].integritas_savings + ""
  ), gt, $, at, st, it, Mt;
  return {
    c() {
      i = w("div"), e = w("div"), l = w("h1"), l.textContent = "Your Broker", t = V(), n = w("p"), o = B("Your exchange rate was "), a = B(r), u = V(), c = w("p"), f = B("The interbank rate "), p = B(d), g = B(`
                    was `), b = B(S), C = B("."), E = V(), F = w("p"), j = B("Your broker's markup was TODO "), N = B(M), v = B("%."), m = B(`
                Your broker made `), x = B(k), T = V(), P = B(O), J = B(" on this trade."), I = V(), D = w("div"), R = w("h1"), R.textContent = "Integritas", Y = V(), K = w("p"), z = B("Our exchange rate was "), nt = B(U), tt = V(), Q = w("p"), X = B(`We would've saved
                    you `), q = B(lt), rt = V(), gt = B(ut), $ = V(), at = w("button"), st = B("Calculate again"), y(l, "class", "text-2xl"), y(n, "class", "text-sm"), y(c, "class", "text-sm"), y(e, "class", "flex flex-col gap-2"), y(R, "class", "text-2xl mt-4"), y(K, "class", "text-sm"), y(Q, "class", "text-sm"), y(D, "class", "flex flex-col gap-2"), y(i, "class", "flex flex-col divide-y gap-4"), y(at, "class", "rounded-lg bg-black px-6 py-3 mt-4"), W(
        at,
        "background-color",
        /*button_color*/
        s[8]
      ), W(
        at,
        "color",
        /*text_color*/
        s[2]
      );
    },
    m(Z, L) {
      vt(Z, i, L), h(i, e), h(e, l), h(e, t), h(e, n), h(n, o), h(n, a), h(e, u), h(e, c), h(c, f), h(c, p), h(c, g), h(c, b), h(c, C), h(e, E), h(e, F), h(F, j), h(F, N), h(F, v), h(e, m), h(e, x), h(e, T), h(e, P), h(e, J), h(i, I), h(i, D), h(D, R), h(D, Y), h(D, K), h(K, z), h(K, nt), h(D, tt), h(D, Q), h(Q, X), h(Q, q), h(Q, rt), h(Q, gt), vt(Z, $, L), vt(Z, at, L), h(at, st), it || (Mt = Yt(
        at,
        "click",
        /*click_handler*/
        s[22]
      ), it = !0);
    },
    p(Z, L) {
      L & /*backendData*/
      8 && r !== (r = /*backendData*/
      Z[3].data[0].third_party_exchange_rate + "") && kt(a, r), L & /*backendData*/
      8 && d !== (d = /*backendData*/
      Z[3].data[0].ccy_pair + "") && kt(p, d), L & /*backendData*/
      8 && S !== (S = /*backendData*/
      Z[3].data[0].mid_market_rate + "") && kt(b, S), L & /*backendData*/
      8 && M !== (M = /*backendData*/
      Z[3].data[0].ccy_pair + "") && kt(N, M), L & /*backendData*/
      8 && k !== (k = /*backendData*/
      Z[3].data[0].sold_ccy + "") && kt(x, k), L & /*backendData*/
      8 && O !== (O = /*backendData*/
      Z[3].data[0].third_party_profit + "") && kt(P, O), L & /*backendData*/
      8 && U !== (U = /*backendData*/
      Z[3].data[0].integritas_rate + "") && kt(nt, U), L & /*backendData*/
      8 && lt !== (lt = /*backendData*/
      Z[3].data[0].sold_ccy + "") && kt(q, lt), L & /*backendData*/
      8 && ut !== (ut = /*backendData*/
      Z[3].data[0].integritas_savings + "") && kt(gt, ut), L & /*button_color*/
      256 && W(
        at,
        "background-color",
        /*button_color*/
        Z[8]
      ), L & /*text_color*/
      4 && W(
        at,
        "color",
        /*text_color*/
        Z[2]
      );
    },
    d(Z) {
      Z && _t(i), Z && _t($), Z && _t(at), it = !1, Mt();
    }
  };
}
function ve(s) {
  let i, e, l, t, n, o, r, a, u, c, f, d, p, g, S, b, C, E, F, j, M, N, v, m, k, x, T, O, P, J, I, D, R, Y, K, z, U, nt, tt, Q, X, lt, q, rt, ut, gt, $, at, st, it, Mt, Z, L, yt, wt, xt, ft, pt, _, A, H, G, et, dt, mt, Ct, St, Dt, Ot, Et, Gt, Lt, Ht, Wt;
  function qt(ot, ht) {
    return (
      /*isFetching*/
      ot[6] ? _e : we
    );
  }
  let Ft = qt(s), bt = Ft(s);
  return {
    c() {
      i = w("form"), e = w("div"), l = w("div"), t = w("div"), n = w("label"), n.textContent = "Select Date", o = V(), r = w("input"), a = V(), u = w("div"), c = w("label"), c.textContent = "Select Time", f = V(), d = w("input"), p = V(), g = w("div"), S = w("div"), b = w("label"), b.textContent = "I Paid", C = V(), E = w("input"), F = V(), j = w("div"), M = w("label"), N = B("Currency"), v = V(), m = w("select"), k = w("option"), k.textContent = "GBP", x = w("option"), x.textContent = "USD", T = w("option"), T.textContent = "EUR", O = w("option"), O.textContent = "JPY", P = w("option"), P.textContent = "CHF", J = w("option"), J.textContent = "CNY", I = w("option"), I.textContent = "NZD", D = w("option"), D.textContent = "SGD", R = w("option"), R.textContent = "INR", Y = w("option"), Y.textContent = "AUD", K = w("option"), K.textContent = "CAD", z = w("option"), z.textContent = "HKD", U = w("option"), U.textContent = "MYR", nt = w("option"), nt.textContent = "NOK", tt = w("option"), tt.textContent = "ZAR", Q = w("option"), Q.textContent = "RUB", X = w("option"), X.textContent = "SEK", lt = V(), q = w("div"), rt = w("div"), ut = w("label"), ut.textContent = "I Received", gt = V(), $ = w("input"), at = V(), st = w("div"), it = w("label"), Mt = B("Currency"), Z = V(), L = w("select"), yt = w("option"), yt.textContent = "USD", wt = w("option"), wt.textContent = "GBP", xt = w("option"), xt.textContent = "EUR", ft = w("option"), ft.textContent = "JPY", pt = w("option"), pt.textContent = "CHF", _ = w("option"), _.textContent = "CNY", A = w("option"), A.textContent = "NZD", H = w("option"), H.textContent = "SGD", G = w("option"), G.textContent = "INR", et = w("option"), et.textContent = "AUD", dt = w("option"), dt.textContent = "CAD", mt = w("option"), mt.textContent = "HKD", Ct = w("option"), Ct.textContent = "MYR", St = w("option"), St.textContent = "NOK", Dt = w("option"), Dt.textContent = "ZAR", Ot = w("option"), Ot.textContent = "RUB", Et = w("option"), Et.textContent = "SEK", Gt = V(), Lt = w("div"), bt.c(), y(n, "for", "date"), y(r, "id", "date"), y(r, "type", "date"), y(r, "class", "w-full rounded-md px-3 py-2"), y(r, "name", "date"), y(r, "placeholder", "Select date"), r.required = !0, y(
        r,
        "style",
        /*input_style*/
        s[9]
      ), y(t, "class", "w-full"), y(c, "for", "time"), y(d, "id", "time"), y(d, "type", "time"), y(d, "class", "w-full rounded-md px-3 py-2"), y(d, "name", "time"), y(d, "placeholder", "Select Time"), d.required = !0, y(
        d,
        "style",
        /*input_style*/
        s[9]
      ), y(u, "class", "w-full"), y(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), y(b, "for", "sold_notional"), y(E, "id", "sold_notional"), y(E, "type", "number"), y(E, "step", ".01"), y(E, "class", "w-full rounded-md px-3 py-2"), y(E, "name", "sold_notional"), y(E, "placeholder", "10000"), E.required = !0, y(
        E,
        "style",
        /*input_style*/
        s[9]
      ), y(S, "class", "w-full"), y(M, "for", "sold_ccy"), W(
        M,
        "color",
        /*text_color*/
        s[2]
      ), k.selected = !0, k.__value = "GBP", k.value = k.__value, x.__value = "USD", x.value = x.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, P.__value = "CHF", P.value = P.__value, J.__value = "CNY", J.value = J.__value, I.__value = "NZD", I.value = I.__value, D.__value = "SGD", D.value = D.__value, R.__value = "INR", R.value = R.__value, Y.__value = "AUD", Y.value = Y.__value, K.__value = "CAD", K.value = K.__value, z.__value = "HKD", z.value = z.__value, U.__value = "MYR", U.value = U.__value, nt.__value = "NOK", nt.value = nt.__value, tt.__value = "ZAR", tt.value = tt.__value, Q.__value = "RUB", Q.value = Q.__value, X.__value = "SEK", X.value = X.__value, y(m, "name", "sold_ccy"), y(m, "id", "sold_ccy"), y(m, "class", "w-full rounded-md px-3 py-2"), m.required = !0, y(
        m,
        "style",
        /*input_style*/
        s[9]
      ), y(j, "class", "w-full"), y(g, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(ut, "for", "bought_notional"), y($, "id", "bought_notional"), y($, "type", "number"), y($, "step", ".01"), y($, "class", "w-full rounded-md px-3 py-2"), y($, "name", "bought_notional"), y($, "placeholder", "10000"), $.required = !0, y(
        $,
        "style",
        /*input_style*/
        s[9]
      ), y(rt, "class", "w-full"), y(it, "for", "bought_ccy"), W(
        it,
        "color",
        /*text_color*/
        s[2]
      ), yt.selected = !0, yt.__value = "USD", yt.value = yt.__value, wt.__value = "GBP", wt.value = wt.__value, xt.__value = "EUR", xt.value = xt.__value, ft.__value = "JPY", ft.value = ft.__value, pt.__value = "CHF", pt.value = pt.__value, _.__value = "CNY", _.value = _.__value, A.__value = "NZD", A.value = A.__value, H.__value = "SGD", H.value = H.__value, G.__value = "INR", G.value = G.__value, et.__value = "AUD", et.value = et.__value, dt.__value = "CAD", dt.value = dt.__value, mt.__value = "HKD", mt.value = mt.__value, Ct.__value = "MYR", Ct.value = Ct.__value, St.__value = "NOK", St.value = St.__value, Dt.__value = "ZAR", Dt.value = Dt.__value, Ot.__value = "RUB", Ot.value = Ot.__value, Et.__value = "SEK", Et.value = Et.__value, y(L, "name", "bought_ccy"), y(L, "id", "bought_ccy"), y(L, "class", "w-full rounded-md px-3 py-2"), L.required = !0, y(
        L,
        "style",
        /*input_style*/
        s[9]
      ), y(st, "class", "w-full"), y(q, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), y(e, "class", "flex flex-col sm:gap-4");
    },
    m(ot, ht) {
      vt(ot, i, ht), h(i, e), h(e, l), h(l, t), h(t, n), h(t, o), h(t, r), h(l, a), h(l, u), h(u, c), h(u, f), h(u, d), h(e, p), h(e, g), h(g, S), h(S, b), h(S, C), h(S, E), h(g, F), h(g, j), h(j, M), h(M, N), h(j, v), h(j, m), h(m, k), h(m, x), h(m, T), h(m, O), h(m, P), h(m, J), h(m, I), h(m, D), h(m, R), h(m, Y), h(m, K), h(m, z), h(m, U), h(m, nt), h(m, tt), h(m, Q), h(m, X), h(e, lt), h(e, q), h(q, rt), h(rt, ut), h(rt, gt), h(rt, $), h(q, at), h(q, st), h(st, it), h(it, Mt), h(st, Z), h(st, L), h(L, yt), h(L, wt), h(L, xt), h(L, ft), h(L, pt), h(L, _), h(L, A), h(L, H), h(L, G), h(L, et), h(L, dt), h(L, mt), h(L, Ct), h(L, St), h(L, Dt), h(L, Ot), h(L, Et), h(e, Gt), h(e, Lt), bt.m(Lt, null), Ht || (Wt = Yt(
        i,
        "submit",
        /*handleFormSubmit*/
        s[11]
      ), Ht = !0);
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
        d,
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
      4 && W(
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
      4 && W(
        it,
        "color",
        /*text_color*/
        ot[2]
      ), ht & /*input_style*/
      512 && y(
        L,
        "style",
        /*input_style*/
        ot[9]
      ), Ft === (Ft = qt(ot)) && bt ? bt.p(ot, ht) : (bt.d(1), bt = Ft(ot), bt && (bt.c(), bt.m(Lt, null)));
    },
    d(ot) {
      ot && _t(i), bt.d(), Ht = !1, Wt();
    }
  };
}
function _e(s) {
  let i, e, l, t, n;
  return {
    c() {
      i = w("button"), e = Jt("svg"), l = Jt("path"), t = Jt("path"), n = B(`
                            Loading...`), y(l, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), y(l, "fill", "#E5E7EB"), y(t, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), y(t, "fill", "currentColor"), y(e, "aria-hidden", "true"), y(e, "role", "status"), y(e, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), y(e, "viewBox", "0 0 100 101"), y(e, "fill", "none"), y(e, "xmlns", "http://www.w3.org/2000/svg"), i.disabled = !0, y(i, "type", "button"), y(i, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), W(
        i,
        "background-color",
        /*button_color*/
        s[8]
      ), W(
        i,
        "color",
        /*text_color*/
        s[2]
      );
    },
    m(o, r) {
      vt(o, i, r), h(i, e), h(e, l), h(e, t), h(i, n);
    },
    p(o, r) {
      r & /*button_color*/
      256 && W(
        i,
        "background-color",
        /*button_color*/
        o[8]
      ), r & /*text_color*/
      4 && W(
        i,
        "color",
        /*text_color*/
        o[2]
      );
    },
    d(o) {
      o && _t(i);
    }
  };
}
function we(s) {
  let i, e;
  return {
    c() {
      i = w("button"), e = B(`See your
                            charges`), y(i, "type", "submit"), y(i, "class", "rounded-lg bg-black px-6 py-3 mt-6"), W(
        i,
        "background-color",
        /*button_color*/
        s[8]
      ), W(
        i,
        "color",
        /*text_color*/
        s[2]
      );
    },
    m(l, t) {
      vt(l, i, t), h(i, e);
    },
    p(l, t) {
      t & /*button_color*/
      256 && W(
        i,
        "background-color",
        /*button_color*/
        l[8]
      ), t & /*text_color*/
      4 && W(
        i,
        "color",
        /*text_color*/
        l[2]
      );
    },
    d(l) {
      l && _t(i);
    }
  };
}
function xe(s) {
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
  let n = t(s), o = n(s);
  return {
    c() {
      i = w("div"), o.c(), this.c = Nt, y(i, "class", e = `w-full p-4 shadow-${/*shadow*/
      s[1]}}`), y(i, "style", l = `
        background-color: ${/*background*/
      s[7]};
        border-radius: ${/*border_radius*/
      s[0]};
        color: ${/*text_color*/
      s[2]};
`);
    },
    m(r, a) {
      vt(r, i, a), o.m(i, null);
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
      r && _t(i), o.d();
    }
  };
}
const ke = "http://localhost:8000";
function Me(s, i, e) {
  let l;
  const t = async (D) => fetch(`${ke}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  let n, o = !0, r, a = !1;
  const u = () => {
    e(3, n = void 0), e(4, o = !0), e(5, r = !1), e(6, a = !1);
  }, c = async (D) => {
    e(4, o = !1), e(6, a = !0), e(5, r = void 0);
    try {
      const R = await t(D);
      if (!R.ok)
        throw new Error(`HTTP error! Status: ${R.status}`);
      const Y = await R.json();
      e(6, a = !1), e(5, r = void 0), e(4, o = !1), console.log("Success"), console.log(Y), e(3, n = Y);
    } catch (R) {
      e(6, a = !1), e(5, r = R), e(4, o = !1), e(3, n = void 0), console.error("Error:", R.message);
    }
  }, f = async (D) => {
    D.preventDefault();
    const R = new FormData(D.target), Y = {};
    for (let K of R) {
      const [z, U] = K;
      Y[z] = U;
    }
    Y.prospect = "", Y.input_spread = "5", Y.prospect_annual_flow = "", Y.email_user = !1, Y.user = "yuriypidlisnyi2020@gmail.com", console.log(Y), c(Y);
  };
  let d = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const p = (D) => {
    e(20, d = D.matches);
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", p);
  let { light_mode_background: S = "#d2d0d0" } = i, { dark_mode_background: b = "#1f2937" } = i, { light_mode_text_color: C = "#1f2937" } = i, { dark_mode_text_color: E = "#f9fafb" } = i, { dark_mode_input_background: F = "#374151" } = i, { light_mode_input_background: j = "#f9fafb" } = i, { dark_mode_button_color: M = "#374151" } = i, { light_mode_button_color: N = "#f9fafb" } = i, { border_radius: v = "0.5rem" } = i, { shadow: m = "none" } = i, k, x, T, O;
  const P = (D) => u(), J = (D) => u(), I = (D) => u();
  return s.$$set = (D) => {
    "light_mode_background" in D && e(12, S = D.light_mode_background), "dark_mode_background" in D && e(13, b = D.dark_mode_background), "light_mode_text_color" in D && e(14, C = D.light_mode_text_color), "dark_mode_text_color" in D && e(15, E = D.dark_mode_text_color), "dark_mode_input_background" in D && e(16, F = D.dark_mode_input_background), "light_mode_input_background" in D && e(17, j = D.light_mode_input_background), "dark_mode_button_color" in D && e(18, M = D.dark_mode_button_color), "light_mode_button_color" in D && e(19, N = D.light_mode_button_color), "border_radius" in D && e(0, v = D.border_radius), "shadow" in D && e(1, m = D.shadow);
  }, s.$$.update = () => {
    s.$$.dirty & /*isDarkMode, dark_mode_background, light_mode_background*/
    1060864 && e(7, k = d ? b : S), s.$$.dirty & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    1097728 && e(2, x = d ? E : C), s.$$.dirty & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    1245184 && e(21, T = d ? F : j), s.$$.dirty & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    1835008 && e(8, O = d ? M : N), s.$$.dirty & /*input_background, text_color, border_radius*/
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
    u,
    f,
    S,
    b,
    C,
    E,
    F,
    j,
    M,
    N,
    d,
    T,
    P,
    J,
    I
  ];
}
class Ce extends te {
  constructor(i) {
    super(), this.shadowRoot.innerHTML = `<style>*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
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
    ), i && (i.target && vt(i.target, this, i.anchor), i.props && (this.$set(i.props), ct()));
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
