function Me() {
}
function Ve(l) {
  return l();
}
function nt() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(l) {
  l.forEach(Ve);
}
function Ge(l) {
  return typeof l == "function";
}
function ct(l, o) {
  return l != l ? o == o : l !== o || l && typeof l == "object" || typeof l == "function";
}
function ft(l) {
  return Object.keys(l).length === 0;
}
function p(l, o) {
  l.appendChild(o);
}
function se(l, o, t) {
  l.insertBefore(o, t || null);
}
function ue(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function b(l) {
  return document.createElement(l);
}
function Ke(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function U(l) {
  return document.createTextNode(l);
}
function W() {
  return U(" ");
}
function pt() {
  return U("");
}
function ze(l, o, t, i) {
  return l.addEventListener(o, t, i), () => l.removeEventListener(o, t, i);
}
function _(l, o, t) {
  t == null ? l.removeAttribute(o) : l.getAttribute(o) !== t && l.setAttribute(o, t);
}
function ht(l) {
  return Array.from(l.childNodes);
}
function me(l, o) {
  o = "" + o, l.wholeText !== o && (l.data = o);
}
function te(l, o, t, i) {
  t === null ? l.style.removeProperty(o) : l.style.setProperty(o, t, i ? "important" : "");
}
function mt(l) {
  const o = {};
  for (const t of l)
    o[t.name] = t.value;
  return o;
}
let Le;
function Re(l) {
  Le = l;
}
function ut() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function _t(l) {
  ut().$$.on_mount.push(l);
}
function yt(l) {
  ut().$$.on_destroy.push(l);
}
const Ne = [], ot = [], Ue = [], rt = [], bt = Promise.resolve();
let We = !1;
function gt() {
  We || (We = !0, bt.then(ie));
}
function qe(l) {
  Ue.push(l);
}
const Ze = /* @__PURE__ */ new Set();
let Te = 0;
function ie() {
  if (Te !== 0)
    return;
  const l = Le;
  do {
    try {
      for (; Te < Ne.length; ) {
        const o = Ne[Te];
        Te++, Re(o), vt(o.$$);
      }
    } catch (o) {
      throw Ne.length = 0, Te = 0, o;
    }
    for (Re(null), Ne.length = 0, Te = 0; ot.length; )
      ot.pop()();
    for (let o = 0; o < Ue.length; o += 1) {
      const t = Ue[o];
      Ze.has(t) || (Ze.add(t), t());
    }
    Ue.length = 0;
  } while (Ne.length);
  for (; rt.length; )
    rt.pop()();
  We = !1, Ze.clear(), Re(l);
}
function vt(l) {
  if (l.fragment !== null) {
    l.update(), Pe(l.before_update);
    const o = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, o), l.after_update.forEach(qe);
  }
}
const wt = /* @__PURE__ */ new Set();
function xt(l, o) {
  l && l.i && (wt.delete(l), l.i(o));
}
function kt(l, o, t, i) {
  const { fragment: e, after_update: r } = l.$$;
  e && e.m(o, t), i || qe(() => {
    const n = l.$$.on_mount.map(Ve).filter(Ge);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Pe(n), l.$$.on_mount = [];
  }), r.forEach(qe);
}
function Mt(l, o) {
  const t = l.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(o), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ct(l, o) {
  l.$$.dirty[0] === -1 && (Ne.push(l), gt(), l.$$.dirty.fill(0)), l.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function St(l, o, t, i, e, r, n, a = [-1]) {
  const u = Le;
  Re(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Me,
    not_equal: e,
    bound: nt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(o.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: nt(),
    dirty: a,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let d = !1;
  if (s.ctx = t ? t(l, o.props || {}, (c, f, ...h) => {
    const y = h.length ? h[0] : f;
    return s.ctx && e(s.ctx[c], s.ctx[c] = y) && (!s.skip_bound && s.bound[c] && s.bound[c](y), d && Ct(l, c)), f;
  }) : [], s.update(), d = !0, Pe(s.before_update), s.fragment = i ? i(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const c = ht(o.target);
      s.fragment && s.fragment.l(c), c.forEach(ue);
    } else
      s.fragment && s.fragment.c();
    o.intro && xt(l.$$.fragment), kt(l, o.target, o.anchor, o.customElement), ie();
  }
  Re(u);
}
let st;
typeof HTMLElement == "function" && (st = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(Ve).filter(Ge);
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(l, o, t) {
    this[l] = t;
  }
  disconnectedCallback() {
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    Mt(this, 1), this.$destroy = Me;
  }
  $on(l, o) {
    if (!Ge(o))
      return Me;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(o), () => {
      const i = t.indexOf(o);
      i !== -1 && t.splice(i, 1);
    };
  }
  $set(l) {
    this.$$set && !ft(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, at = {}, Et = {
  get exports() {
    return at;
  },
  set exports(l) {
    at = l;
  }
};
(function(l, o) {
  (function(t, i) {
    l.exports = i();
  })(Dt, function() {
    return function(t) {
      function i(r) {
        if (e[r])
          return e[r].exports;
        var n = e[r] = { exports: {}, id: r, loaded: !1 };
        return t[r].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports;
      }
      var e = {};
      return i.m = t, i.c = e, i.p = "", i(0);
    }([function(t, i, e) {
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      e(84);
      var n = e(41), a = r(n), u = function() {
        a.default.addPickerToOtherInputs(), a.default.supportsDateInput() || a.default.addPickerToDateInputs();
      };
      u(), document.addEventListener("DOMContentLoaded", function() {
        u();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        u();
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
      t.exports = function(r, n) {
        return e.call(r, n);
      };
    }, function(t, i, e) {
      var r = e(9), n = e(32), a = e(25), u = Object.defineProperty;
      i.f = e(1) ? Object.defineProperty : function(s, d, c) {
        if (r(s), d = a(d, !0), r(c), n)
          try {
            return u(s, d, c);
          } catch {
          }
        if ("get" in c || "set" in c)
          throw TypeError("Accessors not supported!");
        return "value" in c && (s[d] = c.value), s;
      };
    }, function(t, i, e) {
      var r = e(59), n = e(16);
      t.exports = function(a) {
        return r(n(a));
      };
    }, function(t, i, e) {
      var r = e(4), n = e(14);
      t.exports = e(1) ? function(a, u, s) {
        return r.f(a, u, n(1, s));
      } : function(a, u, s) {
        return a[u] = s, a;
      };
    }, function(t, i, e) {
      var r = e(23)("wks"), n = e(15), a = e(2).Symbol, u = typeof a == "function", s = t.exports = function(d) {
        return r[d] || (r[d] = u && a[d] || (u ? a : n)("Symbol." + d));
      };
      s.store = r;
    }, function(t, i) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, i, e) {
      var r = e(12);
      t.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(t, i, e) {
      var r = e(2), n = e(8), a = e(56), u = e(6), s = "prototype", d = function(c, f, h) {
        var y, S, v, k = c & d.F, O = c & d.G, L = c & d.S, j = c & d.P, C = c & d.B, N = c & d.W, g = O ? n : n[f] || (n[f] = {}), m = g[s], M = O ? r : L ? r[f] : (r[f] || {})[s];
        O && (h = f);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = O && typeof M[y] != "function" ? h[y] : C && S ? a(v, r) : N && M[y] == v ? function(w) {
            var T = function(E, R, P) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(E);
                  case 2:
                    return new w(E, R);
                }
                return new w(E, R, P);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : j && typeof v == "function" ? a(Function.call, v) : v, j && ((g.virtual || (g.virtual = {}))[y] = v, c & d.R && m && !m[y] && u(m, y, v)));
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
      var r = e(38), n = e(17);
      t.exports = Object.keys || function(a) {
        return r(a, n);
      };
    }, function(t, i) {
      t.exports = function(e, r) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: r };
      };
    }, function(t, i) {
      var e = 0, r = Math.random();
      t.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + r).toString(36));
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
      var r = e(4).f, n = e(3), a = e(7)("toStringTag");
      t.exports = function(u, s, d) {
        u && !n(u = d ? u : u.prototype, a) && r(u, a, { configurable: !0, value: s });
      };
    }, function(t, i, e) {
      var r = e(23)("keys"), n = e(15);
      t.exports = function(a) {
        return r[a] || (r[a] = n(a));
      };
    }, function(t, i, e) {
      var r = e(2), n = "__core-js_shared__", a = r[n] || (r[n] = {});
      t.exports = function(u) {
        return a[u] || (a[u] = {});
      };
    }, function(t, i) {
      var e = Math.ceil, r = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n);
      };
    }, function(t, i, e) {
      var r = e(12);
      t.exports = function(n, a) {
        if (!r(n))
          return n;
        var u, s;
        if (a && typeof (u = n.toString) == "function" && !r(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !r(s = u.call(n)) || !a && typeof (u = n.toString) == "function" && !r(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, i, e) {
      var r = e(2), n = e(8), a = e(19), u = e(27), s = e(4).f;
      t.exports = function(d) {
        var c = n.Symbol || (n.Symbol = a ? {} : r.Symbol || {});
        d.charAt(0) == "_" || d in c || s(c, d, { value: u.f(d) });
      };
    }, function(t, i, e) {
      i.f = e(7);
    }, function(t, i) {
      i.__esModule = !0, i.default = function(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, i, e) {
      function r(u) {
        return u && u.__esModule ? u : { default: u };
      }
      i.__esModule = !0;
      var n = e(45), a = r(n);
      i.default = function() {
        function u(s, d) {
          for (var c = 0; c < d.length; c++) {
            var f = d[c];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), (0, a.default)(s, f.key, f);
          }
        }
        return function(s, d, c) {
          return d && u(s.prototype, d), c && u(s, c), s;
        };
      }();
    }, function(t, i) {
      var e = {}.toString;
      t.exports = function(r) {
        return e.call(r).slice(8, -1);
      };
    }, function(t, i, e) {
      var r = e(12), n = e(2).document, a = r(n) && r(n.createElement);
      t.exports = function(u) {
        return a ? n.createElement(u) : {};
      };
    }, function(t, i, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, i, e) {
      var r = e(19), n = e(10), a = e(39), u = e(6), s = e(3), d = e(18), c = e(61), f = e(21), h = e(67), y = e(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", O = "values", L = function() {
        return this;
      };
      t.exports = function(j, C, N, g, m, M, w) {
        c(N, C, g);
        var T, E, R, P = function(D) {
          if (!S && D in Y)
            return Y[D];
          switch (D) {
            case k:
              return function() {
                return new N(this, D);
              };
            case O:
              return function() {
                return new N(this, D);
              };
          }
          return function() {
            return new N(this, D);
          };
        }, z = C + " Iterator", B = m == O, I = !1, Y = j.prototype, G = Y[y] || Y[v] || m && Y[m], V = G || P(m), K = m ? B ? P("entries") : V : void 0, ne = C == "Array" && Y.entries || G;
        if (ne && (R = h(ne.call(new j())), R !== Object.prototype && (f(R, z, !0), r || s(R, y) || u(R, y, L))), B && G && G.name !== O && (I = !0, V = function() {
          return G.call(this);
        }), r && !w || !S && !I && Y[y] || u(Y, y, V), d[C] = V, d[z] = L, m)
          if (T = { values: B ? V : P(O), keys: M ? V : P(k), entries: K }, w)
            for (E in T)
              E in Y || a(Y, E, T[E]);
          else
            n(n.P + n.F * (S || I), C, T);
        return T;
      };
    }, function(t, i, e) {
      var r = e(9), n = e(35), a = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", c = function() {
        var f, h = e(31)("iframe"), y = a.length, S = "<", v = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", f = h.contentWindow.document, f.open(), f.write(S + "script" + v + "document.F=Object" + S + "/script" + v), f.close(), c = f.F; y--; )
          delete c[d][a[y]];
        return c();
      };
      t.exports = Object.create || function(f, h) {
        var y;
        return f !== null ? (s[d] = r(f), y = new s(), s[d] = null, y[u] = f) : y = c(), h === void 0 ? y : n(y, h);
      };
    }, function(t, i, e) {
      var r = e(4), n = e(9), a = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, c = a(s), f = c.length, h = 0; f > h; )
          r.f(u, d = c[h++], s[d]);
        return u;
      };
    }, function(t, i, e) {
      var r = e(38), n = e(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(a) {
        return r(a, n);
      };
    }, function(t, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(t, i, e) {
      var r = e(3), n = e(5), a = e(55)(!1), u = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var c, f = n(s), h = 0, y = [];
        for (c in f)
          c != u && r(f, c) && y.push(c);
        for (; d.length > h; )
          r(f, c = d[h++]) && (~a(y, c) || y.push(c));
        return y;
      };
    }, function(t, i, e) {
      t.exports = e(6);
    }, function(t, i, e) {
      function r(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function a(h) {
        var y = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        y.setDate(y.getDate() - (y.getDay() + 6) % 7 + 3);
        var S = new Date(y.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var v = y.getTimezoneOffset() - S.getTimezoneOffset();
        y.setHours(y.getHours() - v);
        var k = (y - S) / 6048e5;
        return 1 + Math.floor(k);
      }
      function u(h) {
        var y = h.getDay();
        return y === 0 && (y = 7), y;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, c.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, c.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var d = e(48), c = r(d), f = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, O, L) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(f.masks[k] || k || f.masks.default);
          var j = k.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (k = k.slice(4), O = !0, j === "GMT:" && (L = !0));
          var C = O ? "getUTC" : "get", N = v[C + "Date"](), g = v[C + "Day"](), m = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), E = v[C + "Seconds"](), R = v[C + "Milliseconds"](), P = O ? 0 : v.getTimezoneOffset(), z = a(v), B = u(v), I = { d: N, dd: n(N), ddd: f.i18n.dayNames[g], dddd: f.i18n.dayNames[g + 7], m: m + 1, mm: n(m + 1), mmm: f.i18n.monthNames[m], mmmm: f.i18n.monthNames[m + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: E, ss: n(E), l: n(R, 3), L: n(Math.round(R / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: L ? "GMT" : O ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (P > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(P) / 60) + Math.abs(P) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: z, N: B };
          return k.replace(h, function(Y) {
            return Y in I ? I[Y] : Y.slice(1, Y.length - 1);
          });
        };
      }();
      f.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, f.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = f;
    }, function(t, i, e) {
      function r(L) {
        return L && L.__esModule ? L : { default: L };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(44), a = r(n), u = e(28), s = r(u), d = e(29), c = r(d), f = e(43), h = r(f), y = e(42), S = r(y), v = e(40), k = r(v), O = function() {
        function L(j) {
          var C = this;
          (0, s.default)(this, L), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, a.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var g = C.format || "yyyy-mm-dd", m = C.element.value.match(/(\d+)/g), M = 0, w = {};
            return g.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(m[w.yyyy], m[w.mm] - 1, m[w.dd]);
          }, set: function(g) {
            C.element.value = (0, k.default)(g, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            C.element.valueAsDate = new Date(g);
          } } });
          var N = function(g) {
            var m = C.element;
            m.locale = C.localeText, h.default.attachTo(m);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(g) {
            var m = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                C.element.valueAsDate && (m.setDate(C.element.valueAsDate.getDate() + 1), C.element.valueAsDate = m, h.default.pingInput());
                break;
              case 40:
                C.element.valueAsDate && (m.setDate(C.element.valueAsDate.getDate() - 1), C.element.valueAsDate = m, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, c.default)(L, [{ key: "getLocaleText", value: function() {
          var j = this.locale.toLowerCase();
          for (var C in S.default) {
            var N = C.split("_");
            if (N.map(function(g) {
              return g.toLowerCase();
            }), ~N.indexOf(j) || ~N.indexOf(j.substr(0, 2)))
              return S.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var j = document.createElement("input");
          j.setAttribute("type", "date");
          var C = "not-a-date";
          return j.setAttribute("value", C), j.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var j = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var N = 0; N < C; ++N)
            new L(j[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var j = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var N = 0; N < C; ++N)
            new L(j[N]);
        } }]), L;
      }();
      i.default = O;
    }, function(t, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = e;
    }, function(t, i, e) {
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(28), a = r(n), u = e(29), s = r(u), d = function() {
        function c() {
          var f = this;
          if ((0, a.default)(this, c), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), c.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            f.date.setYear(f.year.value), f.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            f.date.setMonth(f.month.value), f.refreshDaysMatrix();
          });
          var y = document.createElement("span");
          y.className = "monthSelect-wrapper", y.appendChild(this.month), this.container.appendChild(y), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var v = new Date();
            f.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), f.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var O = f.days.querySelector("[data-selected]");
            O && O.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), f.date.setDate(parseInt(k.textContent)), f.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (f.isOpen) {
              for (var k = v.target, O = k === f.container || k === f.input; !O && (k = k.parentNode); )
                O = k === f.container;
              (v.target.getAttribute("type") !== "date" && !O || !O) && f.hide();
            }
          }, this.removeBlur = function(v) {
            f.isOpen && f.hide();
          };
        }
        return (0, s.default)(c, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var f = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", f.removeClickOut), document.addEventListener("touchstart", f.removeClickOut);
          }, 500), window.onpopstate = function() {
            f.hide();
          };
        } }, { key: "goto", value: function(f) {
          var h = this, y = f.getBoundingClientRect();
          this.container.style.top = y.top + y.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, k = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, O = y.right - v;
          y.right < v ? (O = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = O + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(f) {
          return !(f === this.input && this.isOpen || (this.input = f, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = c.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var f = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            f.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var f = ["<tr>"], h = 0, y = this.locale.days.length; h < y; ++h)
            f.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = f.join(""), c.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var f = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(f, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = c.absoluteDate(this.input.valueAsDate) || !1, k = v && f === v.getFullYear() && h === v.getMonth(), O = [], L = 0; L < S + y; ++L)
            if (L % 7 === 0 && O.push(`
          ` + (L !== 0 ? "</tr>" : "") + `
          <tr>
        `), L + 1 <= y)
              O.push("<td></td>");
            else {
              var j = L + 1 - y, C = k && v.getDate() === j;
              O.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + j + `
        </td>`);
            }
          this.days.innerHTML = O.join("");
        } }, { key: "pingInput", value: function() {
          var f = void 0, h = void 0;
          try {
            f = new Event("input"), h = new Event("change");
          } catch {
            f = document.createEvent("KeyboardEvent"), f.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(f), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(f, h, y, S) {
          f.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            f.appendChild(k);
            var O = S ? S[v - h] : v;
            k.text = O, k.value = v;
          }
          return f;
        } }, { key: "absoluteDate", value: function(f) {
          return f && new Date(f.getTime() + 60 * f.getTimezoneOffset() * 1e3);
        } }]), c;
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
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      i.__esModule = !0;
      var n = e(47), a = r(n), u = e(46), s = r(u), d = typeof s.default == "function" && typeof a.default == "symbol" ? function(c) {
        return typeof c;
      } : function(c) {
        return c && typeof s.default == "function" && c.constructor === s.default ? "symbol" : typeof c;
      };
      i.default = typeof s.default == "function" && d(a.default) === "symbol" ? function(c) {
        return typeof c > "u" ? "undefined" : d(c);
      } : function(c) {
        return c && typeof s.default == "function" && c.constructor === s.default ? "symbol" : typeof c > "u" ? "undefined" : d(c);
      };
    }, function(t, i, e) {
      e(73);
      var r = e(8).Object;
      t.exports = function(n, a) {
        return r.defineProperties(n, a);
      };
    }, function(t, i, e) {
      e(74);
      var r = e(8).Object;
      t.exports = function(n, a, u) {
        return r.defineProperty(n, a, u);
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
      var r = e(5), n = e(70), a = e(69);
      t.exports = function(u) {
        return function(s, d, c) {
          var f, h = r(s), y = n(h.length), S = a(c, y);
          if (u && d != d) {
            for (; y > S; )
              if (f = h[S++], f != f)
                return !0;
          } else
            for (; y > S; S++)
              if ((u || S in h) && h[S] === d)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(t, i, e) {
      var r = e(53);
      t.exports = function(n, a, u) {
        if (r(n), a === void 0)
          return n;
        switch (u) {
          case 1:
            return function(s) {
              return n.call(a, s);
            };
          case 2:
            return function(s, d) {
              return n.call(a, s, d);
            };
          case 3:
            return function(s, d, c) {
              return n.call(a, s, d, c);
            };
        }
        return function() {
          return n.apply(a, arguments);
        };
      };
    }, function(t, i, e) {
      var r = e(13), n = e(37), a = e(20);
      t.exports = function(u) {
        var s = r(u), d = n.f;
        if (d)
          for (var c, f = d(u), h = a.f, y = 0; f.length > y; )
            h.call(u, c = f[y++]) && s.push(c);
        return s;
      };
    }, function(t, i, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, i, e) {
      var r = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(t, i, e) {
      var r = e(30);
      t.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(t, i, e) {
      var r = e(34), n = e(14), a = e(21), u = {};
      e(6)(u, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, c) {
        s.prototype = r(u, { next: n(1, c) }), a(s, d + " Iterator");
      };
    }, function(t, i) {
      t.exports = function(e, r) {
        return { value: r, done: !!e };
      };
    }, function(t, i, e) {
      var r = e(13), n = e(5);
      t.exports = function(a, u) {
        for (var s, d = n(a), c = r(d), f = c.length, h = 0; f > h; )
          if (d[s = c[h++]] === u)
            return s;
      };
    }, function(t, i, e) {
      var r = e(15)("meta"), n = e(12), a = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, c = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), f = function(k) {
        u(k, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, O) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!a(k, r)) {
          if (!d(k))
            return "F";
          if (!O)
            return "E";
          f(k);
        }
        return k[r].i;
      }, y = function(k, O) {
        if (!a(k, r)) {
          if (!d(k))
            return !0;
          if (!O)
            return !1;
          f(k);
        }
        return k[r].w;
      }, S = function(k) {
        return c && v.NEED && d(k) && !a(k, r) && f(k), k;
      }, v = t.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(t, i, e) {
      var r = e(20), n = e(14), a = e(5), u = e(25), s = e(3), d = e(32), c = Object.getOwnPropertyDescriptor;
      i.f = e(1) ? c : function(f, h) {
        if (f = a(f), h = u(h, !0), d)
          try {
            return c(f, h);
          } catch {
          }
        if (s(f, h))
          return n(!r.f.call(f, h), f[h]);
      };
    }, function(t, i, e) {
      var r = e(5), n = e(36).f, a = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch {
          return u.slice();
        }
      };
      t.exports.f = function(d) {
        return u && a.call(d) == "[object Window]" ? s(d) : n(r(d));
      };
    }, function(t, i, e) {
      var r = e(3), n = e(71), a = e(22)("IE_PROTO"), u = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, a) ? s[a] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(t, i, e) {
      var r = e(24), n = e(16);
      t.exports = function(a) {
        return function(u, s) {
          var d, c, f = String(n(u)), h = r(s), y = f.length;
          return h < 0 || h >= y ? a ? "" : void 0 : (d = f.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (c = f.charCodeAt(h + 1)) < 56320 || c > 57343 ? a ? f.charAt(h) : d : a ? f.slice(h, h + 2) : (d - 55296 << 10) + (c - 56320) + 65536);
        };
      };
    }, function(t, i, e) {
      var r = e(24), n = Math.max, a = Math.min;
      t.exports = function(u, s) {
        return u = r(u), u < 0 ? n(u + s, 0) : a(u, s);
      };
    }, function(t, i, e) {
      var r = e(24), n = Math.min;
      t.exports = function(a) {
        return a > 0 ? n(r(a), 9007199254740991) : 0;
      };
    }, function(t, i, e) {
      var r = e(16);
      t.exports = function(n) {
        return Object(r(n));
      };
    }, function(t, i, e) {
      var r = e(54), n = e(62), a = e(18), u = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, c = this._i++;
        return !s || c >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, c) : d == "values" ? n(0, s[c]) : n(0, [c, s[c]]);
      }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries");
    }, function(t, i, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, i, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, i) {
    }, function(t, i, e) {
      var r = e(68)(!0);
      e(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, a = this._t, u = this._i;
        return u >= a.length ? { value: void 0, done: !0 } : (n = r(a, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, i, e) {
      var r = e(2), n = e(3), a = e(1), u = e(10), s = e(39), d = e(64).KEY, c = e(11), f = e(23), h = e(21), y = e(15), S = e(7), v = e(27), k = e(26), O = e(63), L = e(57), j = e(60), C = e(9), N = e(5), g = e(25), m = e(14), M = e(34), w = e(66), T = e(65), E = e(4), R = e(13), P = T.f, z = E.f, B = w.f, I = r.Symbol, Y = r.JSON, G = Y && Y.stringify, V = "prototype", K = S("_hidden"), ne = S("toPrimitive"), D = {}.propertyIsEnumerable, $ = f("symbol-registry"), J = f("symbols"), le = f("op-symbols"), H = Object[V], oe = typeof I == "function", fe = r.QObject, we = !fe || !fe[V] || !fe[V].findChild, Z = a && c(function() {
        return M(z({}, "a", { get: function() {
          return z(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, F) {
        var ee = P(H, A);
        ee && delete H[A], z(x, A, F), ee && x !== H && z(H, A, ee);
      } : z, Q = function(x) {
        var A = J[x] = M(I[V]);
        return A._k = x, A;
      }, X = oe && typeof I.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof I;
      }, _e = function(x, A, F) {
        return x === H && _e(le, A, F), C(x), A = g(A, !0), C(F), n(J, A) ? (F.enumerable ? (n(x, K) && x[K][A] && (x[K][A] = !1), F = M(F, { enumerable: m(0, !1) })) : (n(x, K) || z(x, K, m(1, {})), x[K][A] = !0), Z(x, A, F)) : z(x, A, F);
      }, je = function(x, A) {
        C(x);
        for (var F, ee = L(A = N(A)), re = 0, de = ee.length; de > re; )
          _e(x, F = ee[re++], A[F]);
        return x;
      }, Fe = function(x, A) {
        return A === void 0 ? M(x) : je(M(x), A);
      }, q = function(x) {
        var A = D.call(this, x = g(x, !0));
        return !(this === H && n(J, x) && !n(le, x)) && (!(A || !n(this, x) || !n(J, x) || n(this, K) && this[K][x]) || A);
      }, be = function(x, A) {
        if (x = N(x), A = g(A, !0), x !== H || !n(J, A) || n(le, A)) {
          var F = P(x, A);
          return !F || !n(J, A) || n(x, K) && x[K][A] || (F.enumerable = !0), F;
        }
      }, xe = function(x) {
        for (var A, F = B(N(x)), ee = [], re = 0; F.length > re; )
          n(J, A = F[re++]) || A == K || A == d || ee.push(A);
        return ee;
      }, ke = function(x) {
        for (var A, F = x === H, ee = B(F ? le : N(x)), re = [], de = 0; ee.length > de; )
          !n(J, A = ee[de++]) || F && !n(H, A) || re.push(J[A]);
        return re;
      };
      oe || (I = function() {
        if (this instanceof I)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(F) {
          this === H && A.call(le, F), n(this, K) && n(this[K], x) && (this[K][x] = !1), Z(this, x, m(1, F));
        };
        return a && we && Z(H, x, { configurable: !0, set: A }), Q(x);
      }, s(I[V], "toString", function() {
        return this._k;
      }), T.f = be, E.f = _e, e(36).f = w.f = xe, e(20).f = q, e(37).f = ke, a && !e(19) && s(H, "propertyIsEnumerable", q, !0), v.f = function(x) {
        return Q(S(x));
      }), u(u.G + u.W + u.F * !oe, { Symbol: I });
      for (var pe = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), he = 0; pe.length > he; )
        S(pe[he++]);
      for (var pe = R(S.store), he = 0; pe.length > he; )
        k(pe[he++]);
      u(u.S + u.F * !oe, "Symbol", { for: function(x) {
        return n($, x += "") ? $[x] : $[x] = I(x);
      }, keyFor: function(x) {
        if (X(x))
          return O($, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        we = !0;
      }, useSimple: function() {
        we = !1;
      } }), u(u.S + u.F * !oe, "Object", { create: Fe, defineProperty: _e, defineProperties: je, getOwnPropertyDescriptor: be, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), Y && u(u.S + u.F * (!oe || c(function() {
        var x = I();
        return G([x]) != "[null]" || G({ a: x }) != "{}" || G(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !X(x)) {
          for (var A, F, ee = [x], re = 1; arguments.length > re; )
            ee.push(arguments[re++]);
          return A = ee[1], typeof A == "function" && (F = A), !F && j(A) || (A = function(de, ye) {
            if (F && (ye = F.call(this, de, ye)), !X(ye))
              return ye;
          }), ee[1] = A, G.apply(Y, ee);
        }
      } }), I[V][ne] || e(6)(I[V], ne, I[V].valueOf), h(I, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(t, i, e) {
      e(26)("asyncIterator");
    }, function(t, i, e) {
      e(26)("observable");
    }, function(t, i, e) {
      e(72);
      for (var r = e(2), n = e(6), a = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var c = s[d], f = r[c], h = f && f.prototype;
        h && !h[u] && n(h, u, c), a[c] = a.Array;
      }
    }, function(t, i, e) {
      i = t.exports = e(82)(), i.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, i) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var r = [], n = 0; n < this.length; n++) {
            var a = this[n];
            a[2] ? r.push("@media " + a[2] + "{" + a[1] + "}") : r.push(a[1]);
          }
          return r.join("");
        }, e.i = function(r, n) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var a = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (a[s] = !0);
          }
          for (u = 0; u < r.length; u++) {
            var d = r[u];
            typeof d[0] == "number" && a[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), e.push(d));
          }
        }, e;
      };
    }, function(t, i, e) {
      function r(g, m) {
        for (var M = 0; M < g.length; M++) {
          var w = g[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var E = 0; E < T.parts.length; E++)
              T.parts[E](w.parts[E]);
            for (; E < w.parts.length; E++)
              T.parts.push(c(w.parts[E], m));
          } else {
            for (var R = [], E = 0; E < w.parts.length; E++)
              R.push(c(w.parts[E], m));
            S[w.id] = { id: w.id, refs: 1, parts: R };
          }
        }
      }
      function n(g) {
        for (var m = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], E = T[0], R = T[1], P = T[2], z = T[3], B = { css: R, media: P, sourceMap: z };
          M[E] ? M[E].parts.push(B) : m.push(M[E] = { id: E, parts: [B] });
        }
        return m;
      }
      function a(g, m) {
        var M = O(), w = C[C.length - 1];
        if (g.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(m, w.nextSibling) : M.appendChild(m) : M.insertBefore(m, M.firstChild), C.push(m);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(m);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var m = C.indexOf(g);
        m >= 0 && C.splice(m, 1);
      }
      function s(g) {
        var m = document.createElement("style");
        return m.type = "text/css", a(g, m), m;
      }
      function d(g) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", a(g, m), m;
      }
      function c(g, m) {
        var M, w, T;
        if (m.singleton) {
          var E = j++;
          M = L || (L = s(m)), w = f.bind(null, M, E, !1), T = f.bind(null, M, E, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = d(m), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(m), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(g), function(R) {
          if (R) {
            if (R.css === g.css && R.media === g.media && R.sourceMap === g.sourceMap)
              return;
            w(g = R);
          } else
            T();
        };
      }
      function f(g, m, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = N(m, T);
        else {
          var E = document.createTextNode(T), R = g.childNodes;
          R[m] && g.removeChild(R[m]), R.length ? g.insertBefore(E, R[m]) : g.appendChild(E);
        }
      }
      function h(g, m) {
        var M = m.css, w = m.media;
        if (w && g.setAttribute("media", w), g.styleSheet)
          g.styleSheet.cssText = M;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(M));
        }
      }
      function y(g, m) {
        var M = m.css, w = m.sourceMap;
        w && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(w)))) + " */");
        var T = new Blob([M], { type: "text/css" }), E = g.href;
        g.href = URL.createObjectURL(T), E && URL.revokeObjectURL(E);
      }
      var S = {}, v = function(g) {
        var m;
        return function() {
          return typeof m > "u" && (m = g.apply(this, arguments)), m;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), O = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), L = null, j = 0, C = [];
      t.exports = function(g, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = k()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var M = n(g);
        return r(M, m), function(w) {
          for (var T = [], E = 0; E < M.length; E++) {
            var R = M[E], P = S[R.id];
            P.refs--, T.push(P);
          }
          if (w) {
            var z = n(w);
            r(z, m);
          }
          for (var E = 0; E < T.length; E++) {
            var P = T[E];
            if (P.refs === 0) {
              for (var B = 0; B < P.parts.length; B++)
                P.parts[B]();
              delete S[P.id];
            }
          }
        };
      };
      var N = function() {
        var g = [];
        return function(m, M) {
          return g[m] = M, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(t, i, e) {
      var r = e(81);
      typeof r == "string" && (r = [[t.id, r, ""]]), e(83)(r, {}), r.locals && (t.exports = r.locals);
    }]);
  });
})(Et);
function Ot(l) {
  let o, t, i;
  function e(a, u) {
    return (
      /*isIdle*/
      a[7] || /*isFetching*/
      a[9] ? Rt : (
        /*backendData*/
        a[6] ? jt : (
          /*error*/
          a[8] ? Nt : Tt
        )
      )
    );
  }
  let r = e(l), n = r(l);
  return {
    c() {
      o = b("div"), n.c(), _(o, "class", t = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(o, "style", i = `
        background-color: ${/*background*/
      l[11]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[5]};
        opacity: ${/*opacity*/
      l[2]}%!important;
`);
    },
    m(a, u) {
      se(a, o, u), n.m(o, null);
    },
    p(a, u) {
      r === (r = e(a)) && n ? n.p(a, u) : (n.d(1), n = r(a), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      2 && t !== (t = `w-full p-4 shadow-${/*shadow*/
      a[1]}`) && _(o, "class", t), u[0] & /*background, border_radius, text_color, opacity*/
      2085 && i !== (i = `
        background-color: ${/*background*/
      a[11]};
        border-radius: ${/*border_radius*/
      a[0]};
        color: ${/*text_color*/
      a[5]};
        opacity: ${/*opacity*/
      a[2]}%!important;
`) && _(o, "style", i);
    },
    d(a) {
      a && ue(o), n.d();
    }
  };
}
function At(l) {
  let o, t, i, e, r, n;
  function a(d, c) {
    return (
      /*statusCheckError*/
      d[10] === dt ? It : Ft
    );
  }
  let u = a(l), s = u(l);
  return {
    c() {
      o = b("div"), t = b("div"), i = b("h1"), i.textContent = "An error occured", e = W(), s.c(), _(i, "class", "text-2xl"), _(t, "class", "flex flex-col items-center gap-4"), _(o, "class", r = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(o, "style", n = `
        background-color: ${/*background*/
      l[11]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[5]};
        opacity: ${/*opacity*/
      l[2]}%!important;
`);
    },
    m(d, c) {
      se(d, o, c), p(o, t), p(t, i), p(t, e), s.m(t, null);
    },
    p(d, c) {
      u === (u = a(d)) && s ? s.p(d, c) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), c[0] & /*shadow*/
      2 && r !== (r = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && _(o, "class", r), c[0] & /*background, border_radius, text_color, opacity*/
      2085 && n !== (n = `
        background-color: ${/*background*/
      d[11]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[5]};
        opacity: ${/*opacity*/
      d[2]}%!important;
`) && _(o, "style", n);
    },
    d(d) {
      d && ue(o), s.d();
    }
  };
}
function Tt(l) {
  let o, t, i, e, r, n, a;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "An unknown error", i = W(), e = b("button"), r = U("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), te(
        e,
        "background-color",
        /*button_color*/
        l[12]
      ), te(
        e,
        "color",
        /*text_color*/
        l[5]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      se(u, o, s), p(o, t), p(o, i), p(o, e), p(e, r), n || (a = ze(
        e,
        "click",
        /*click_handler_2*/
        l[30]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      4096 && te(
        e,
        "background-color",
        /*button_color*/
        u[12]
      ), s[0] & /*text_color*/
      32 && te(
        e,
        "color",
        /*text_color*/
        u[5]
      );
    },
    d(u) {
      u && ue(o), n = !1, a();
    }
  };
}
function Nt(l) {
  let o, t, i, e, r, n, a, u, s, d;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "Error", i = W(), e = b("pre"), r = U(
        /*error*/
        l[8]
      ), n = W(), a = b("button"), u = U("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "py-3"), _(a, "class", "rounded-lg bg-black px-6 py-3 mt-4"), te(
        a,
        "background-color",
        /*button_color*/
        l[12]
      ), te(
        a,
        "color",
        /*text_color*/
        l[5]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(c, f) {
      se(c, o, f), p(o, t), p(o, i), p(o, e), p(e, r), p(o, n), p(o, a), p(a, u), s || (d = ze(
        a,
        "click",
        /*click_handler_1*/
        l[29]
      ), s = !0);
    },
    p(c, f) {
      f[0] & /*error*/
      256 && me(
        r,
        /*error*/
        c[8]
      ), f[0] & /*button_color*/
      4096 && te(
        a,
        "background-color",
        /*button_color*/
        c[12]
      ), f[0] & /*text_color*/
      32 && te(
        a,
        "color",
        /*text_color*/
        c[5]
      );
    },
    d(c) {
      c && ue(o), s = !1, d();
    }
  };
}
function jt(l) {
  let o, t, i, e, r, n, a = (
    /*backendData*/
    l[6].data[0].third_party_exchange_rate + ""
  ), u, s, d, c, f, h = (
    /*backendData*/
    l[6].data[0].ccy_pair + ""
  ), y, S, v, k, O, L = (
    /*backendData*/
    l[6].data[0].sold_ccy + ""
  ), j, C, N = (
    /*backendData*/
    l[6].data[0].third_party_profit + ""
  ), g, m, M, w, T, E, R, P, z, B = (
    /*backendData*/
    l[6].data[0].integritas_rate + ""
  ), I, Y, G, V, K = (
    /*backendData*/
    l[6].data[0].sold_ccy + ""
  ), ne, D, $ = (
    /*backendData*/
    l[6].data[0].integritas_savings + ""
  ), J, le, H, oe, fe, we, Z = (
    /*showInterbankRate*/
    l[4] && it(l)
  );
  return {
    c() {
      o = b("div"), t = b("div"), i = b("h1"), i.textContent = "Your Provider", e = W(), r = b("p"), n = U("Your exchange rate was "), u = U(a), s = W(), Z && Z.c(), d = W(), c = b("p"), f = U("Your provider's markup was TODO "), y = U(h), S = U("%."), v = W(), k = b("p"), O = U(`Your provider
                        charged `), j = U(L), C = W(), g = U(N), m = U(` on this
                        trade.`), M = W(), w = b("div"), T = b("h1"), E = U(
        /*name*/
        l[3]
      ), R = W(), P = b("p"), z = U("Our exchange rate was "), I = U(B), Y = W(), G = b("p"), V = U(`We would've saved
                        you `), ne = U(K), D = W(), J = U($), le = W(), H = b("button"), oe = U("Calculate again"), _(i, "class", "text-2xl"), _(r, "class", "text-sm"), _(c, "class", "text-sm"), _(k, "class", "text-sm"), _(t, "class", "flex flex-col gap-2"), _(T, "class", "text-2xl mt-4"), _(P, "class", "text-sm"), _(G, "class", "text-sm"), _(w, "class", "flex flex-col gap-2"), _(o, "class", "flex flex-col divide-y gap-4"), _(H, "class", "rounded-lg bg-black px-6 py-3 mt-4"), te(
        H,
        "background-color",
        /*button_color*/
        l[12]
      ), te(
        H,
        "color",
        /*text_color*/
        l[5]
      );
    },
    m(Q, X) {
      se(Q, o, X), p(o, t), p(t, i), p(t, e), p(t, r), p(r, n), p(r, u), p(t, s), Z && Z.m(t, null), p(t, d), p(t, c), p(c, f), p(c, y), p(c, S), p(t, v), p(t, k), p(k, O), p(k, j), p(k, C), p(k, g), p(k, m), p(o, M), p(o, w), p(w, T), p(T, E), p(w, R), p(w, P), p(P, z), p(P, I), p(w, Y), p(w, G), p(G, V), p(G, ne), p(G, D), p(G, J), se(Q, le, X), se(Q, H, X), p(H, oe), fe || (we = ze(
        H,
        "click",
        /*click_handler*/
        l[28]
      ), fe = !0);
    },
    p(Q, X) {
      X[0] & /*backendData*/
      64 && a !== (a = /*backendData*/
      Q[6].data[0].third_party_exchange_rate + "") && me(u, a), /*showInterbankRate*/
      Q[4] ? Z ? Z.p(Q, X) : (Z = it(Q), Z.c(), Z.m(t, d)) : Z && (Z.d(1), Z = null), X[0] & /*backendData*/
      64 && h !== (h = /*backendData*/
      Q[6].data[0].ccy_pair + "") && me(y, h), X[0] & /*backendData*/
      64 && L !== (L = /*backendData*/
      Q[6].data[0].sold_ccy + "") && me(j, L), X[0] & /*backendData*/
      64 && N !== (N = /*backendData*/
      Q[6].data[0].third_party_profit + "") && me(g, N), X[0] & /*name*/
      8 && me(
        E,
        /*name*/
        Q[3]
      ), X[0] & /*backendData*/
      64 && B !== (B = /*backendData*/
      Q[6].data[0].integritas_rate + "") && me(I, B), X[0] & /*backendData*/
      64 && K !== (K = /*backendData*/
      Q[6].data[0].sold_ccy + "") && me(ne, K), X[0] & /*backendData*/
      64 && $ !== ($ = /*backendData*/
      Q[6].data[0].integritas_savings + "") && me(J, $), X[0] & /*button_color*/
      4096 && te(
        H,
        "background-color",
        /*button_color*/
        Q[12]
      ), X[0] & /*text_color*/
      32 && te(
        H,
        "color",
        /*text_color*/
        Q[5]
      );
    },
    d(Q) {
      Q && ue(o), Z && Z.d(), Q && ue(le), Q && ue(H), fe = !1, we();
    }
  };
}
function Rt(l) {
  let o, t, i, e, r, n, a, u, s, d, c, f, h, y, S, v, k, O, L, j, C, N, g, m, M, w, T, E, R, P, z, B, I, Y, G, V, K, ne, D, $, J, le, H, oe, fe, we, Z, Q, X, _e, je, Fe, q, be, xe, ke, pe, he, x, A, F, ee, re, de, ye, Ce, Se, De, Ee, Oe, Qe, Ie, Ae, Ye, Xe, ge, $e, He, Be, et;
  function tt(ae, ce) {
    return (
      /*isFetching*/
      ae[9] ? Lt : Pt
    );
  }
  let Je = tt(l), ve = Je(l);
  return {
    c() {
      o = b("form"), t = b("div"), i = b("div"), e = b("div"), r = b("label"), r.textContent = "Select Date", n = W(), a = b("input"), u = W(), s = b("div"), d = b("label"), d.textContent = "Select Time", c = W(), f = b("input"), h = W(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = W(), O = b("input"), L = W(), j = b("div"), C = b("label"), N = U("Sell Currency"), g = W(), m = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", E = b("option"), E.textContent = "JPY", R = b("option"), R.textContent = "CHF", P = b("option"), P.textContent = "CNY", z = b("option"), z.textContent = "NZD", B = b("option"), B.textContent = "SGD", I = b("option"), I.textContent = "INR", Y = b("option"), Y.textContent = "AUD", G = b("option"), G.textContent = "CAD", V = b("option"), V.textContent = "HKD", K = b("option"), K.textContent = "MYR", ne = b("option"), ne.textContent = "NOK", D = b("option"), D.textContent = "ZAR", $ = b("option"), $.textContent = "RUB", J = b("option"), J.textContent = "SEK", le = W(), H = b("div"), oe = b("div"), fe = b("label"), fe.textContent = "Buy Amount", we = W(), Z = b("input"), Q = W(), X = b("div"), _e = b("label"), je = U("Buy Currency"), Fe = W(), q = b("select"), be = b("option"), be.textContent = "USD", xe = b("option"), xe.textContent = "GBP", ke = b("option"), ke.textContent = "EUR", pe = b("option"), pe.textContent = "JPY", he = b("option"), he.textContent = "CHF", x = b("option"), x.textContent = "CNY", A = b("option"), A.textContent = "NZD", F = b("option"), F.textContent = "SGD", ee = b("option"), ee.textContent = "INR", re = b("option"), re.textContent = "AUD", de = b("option"), de.textContent = "CAD", ye = b("option"), ye.textContent = "HKD", Ce = b("option"), Ce.textContent = "MYR", Se = b("option"), Se.textContent = "NOK", De = b("option"), De.textContent = "ZAR", Ee = b("option"), Ee.textContent = "RUB", Oe = b("option"), Oe.textContent = "SEK", Qe = W(), Ie = b("div"), Ae = b("div"), Ye = b("label"), Ye.textContent = "Email", Xe = W(), ge = b("input"), $e = W(), He = b("div"), ve.c(), _(r, "for", "date"), _(a, "id", "date"), _(a, "type", "date"), _(a, "class", "w-full rounded-md px-3 py-2"), _(a, "name", "date"), _(a, "placeholder", "Select date"), a.required = !0, _(
        a,
        "style",
        /*input_style*/
        l[13]
      ), _(e, "class", "w-full"), _(d, "for", "time"), _(f, "id", "time"), _(f, "type", "time"), _(f, "class", "w-full rounded-md px-3 py-2"), _(f, "name", "time"), _(f, "placeholder", "Select Time"), f.required = !0, _(
        f,
        "style",
        /*input_style*/
        l[13]
      ), _(s, "class", "w-full"), _(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), _(v, "for", "sold_notional"), _(O, "id", "sold_notional"), _(O, "type", "number"), _(O, "step", ".01"), _(O, "class", "w-full rounded-md px-3 py-2"), _(O, "name", "sold_notional"), _(O, "placeholder", "10000"), O.required = !0, _(
        O,
        "style",
        /*input_style*/
        l[13]
      ), _(S, "class", "w-full"), _(C, "for", "sold_ccy"), te(
        C,
        "color",
        /*text_color*/
        l[5]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, E.__value = "JPY", E.value = E.__value, R.__value = "CHF", R.value = R.__value, P.__value = "CNY", P.value = P.__value, z.__value = "NZD", z.value = z.__value, B.__value = "SGD", B.value = B.__value, I.__value = "INR", I.value = I.__value, Y.__value = "AUD", Y.value = Y.__value, G.__value = "CAD", G.value = G.__value, V.__value = "HKD", V.value = V.__value, K.__value = "MYR", K.value = K.__value, ne.__value = "NOK", ne.value = ne.__value, D.__value = "ZAR", D.value = D.__value, $.__value = "RUB", $.value = $.__value, J.__value = "SEK", J.value = J.__value, _(m, "name", "sold_ccy"), _(m, "id", "sold_ccy"), _(m, "class", "w-full rounded-md px-3 py-2"), m.required = !0, _(
        m,
        "style",
        /*input_style*/
        l[13]
      ), _(j, "class", "w-full"), _(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(fe, "for", "bought_notional"), _(Z, "id", "bought_notional"), _(Z, "type", "number"), _(Z, "step", ".01"), _(Z, "class", "w-full rounded-md px-3 py-2"), _(Z, "name", "bought_notional"), _(Z, "placeholder", "10000"), Z.required = !0, _(
        Z,
        "style",
        /*input_style*/
        l[13]
      ), _(oe, "class", "w-full"), _(_e, "for", "bought_ccy"), te(
        _e,
        "color",
        /*text_color*/
        l[5]
      ), be.selected = !0, be.__value = "USD", be.value = be.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, pe.__value = "JPY", pe.value = pe.__value, he.__value = "CHF", he.value = he.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, F.__value = "SGD", F.value = F.__value, ee.__value = "INR", ee.value = ee.__value, re.__value = "AUD", re.value = re.__value, de.__value = "CAD", de.value = de.__value, ye.__value = "HKD", ye.value = ye.__value, Ce.__value = "MYR", Ce.value = Ce.__value, Se.__value = "NOK", Se.value = Se.__value, De.__value = "ZAR", De.value = De.__value, Ee.__value = "RUB", Ee.value = Ee.__value, Oe.__value = "SEK", Oe.value = Oe.__value, _(q, "name", "bought_ccy"), _(q, "id", "bought_ccy"), _(q, "class", "w-full rounded-md px-3 py-2"), q.required = !0, _(
        q,
        "style",
        /*input_style*/
        l[13]
      ), _(X, "class", "w-full"), _(H, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(Ye, "for", "user"), _(ge, "id", "user"), _(ge, "type", "email"), _(ge, "class", "w-full rounded-md px-3 py-2"), _(ge, "name", "user"), _(ge, "placeholder", "JohnDoe@email.com"), ge.required = !0, _(
        ge,
        "style",
        /*input_style*/
        l[13]
      ), _(Ae, "class", "w-full"), _(Ie, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(t, "class", "flex flex-col sm:gap-4");
    },
    m(ae, ce) {
      se(ae, o, ce), p(o, t), p(t, i), p(i, e), p(e, r), p(e, n), p(e, a), p(i, u), p(i, s), p(s, d), p(s, c), p(s, f), p(t, h), p(t, y), p(y, S), p(S, v), p(S, k), p(S, O), p(y, L), p(y, j), p(j, C), p(C, N), p(j, g), p(j, m), p(m, M), p(m, w), p(m, T), p(m, E), p(m, R), p(m, P), p(m, z), p(m, B), p(m, I), p(m, Y), p(m, G), p(m, V), p(m, K), p(m, ne), p(m, D), p(m, $), p(m, J), p(t, le), p(t, H), p(H, oe), p(oe, fe), p(oe, we), p(oe, Z), p(H, Q), p(H, X), p(X, _e), p(_e, je), p(X, Fe), p(X, q), p(q, be), p(q, xe), p(q, ke), p(q, pe), p(q, he), p(q, x), p(q, A), p(q, F), p(q, ee), p(q, re), p(q, de), p(q, ye), p(q, Ce), p(q, Se), p(q, De), p(q, Ee), p(q, Oe), p(t, Qe), p(t, Ie), p(Ie, Ae), p(Ae, Ye), p(Ae, Xe), p(Ae, ge), p(t, $e), p(t, He), ve.m(He, null), Be || (et = ze(
        o,
        "submit",
        /*handleFormSubmit*/
        l[15]
      ), Be = !0);
    },
    p(ae, ce) {
      ce[0] & /*input_style*/
      8192 && _(
        a,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*input_style*/
      8192 && _(
        f,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*input_style*/
      8192 && _(
        O,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*text_color*/
      32 && te(
        C,
        "color",
        /*text_color*/
        ae[5]
      ), ce[0] & /*input_style*/
      8192 && _(
        m,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*input_style*/
      8192 && _(
        Z,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*text_color*/
      32 && te(
        _e,
        "color",
        /*text_color*/
        ae[5]
      ), ce[0] & /*input_style*/
      8192 && _(
        q,
        "style",
        /*input_style*/
        ae[13]
      ), ce[0] & /*input_style*/
      8192 && _(
        ge,
        "style",
        /*input_style*/
        ae[13]
      ), Je === (Je = tt(ae)) && ve ? ve.p(ae, ce) : (ve.d(1), ve = Je(ae), ve && (ve.c(), ve.m(He, null)));
    },
    d(ae) {
      ae && ue(o), ve.d(), Be = !1, et();
    }
  };
}
function it(l) {
  let o, t, i = (
    /*backendData*/
    l[6].data[0].ccy_pair + ""
  ), e, r, n = (
    /*backendData*/
    l[6].data[0].mid_market_rate + ""
  ), a, u;
  return {
    c() {
      o = b("p"), t = U("The interbank rate "), e = U(i), r = U(`
                            was `), a = U(n), u = U("."), _(o, "class", "text-sm");
    },
    m(s, d) {
      se(s, o, d), p(o, t), p(o, e), p(o, r), p(o, a), p(o, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      64 && i !== (i = /*backendData*/
      s[6].data[0].ccy_pair + "") && me(e, i), d[0] & /*backendData*/
      64 && n !== (n = /*backendData*/
      s[6].data[0].mid_market_rate + "") && me(a, n);
    },
    d(s) {
      s && ue(o);
    }
  };
}
function Lt(l) {
  let o, t, i, e, r;
  return {
    c() {
      o = b("button"), t = Ke("svg"), i = Ke("path"), e = Ke("path"), r = U(`
                                Loading...`), _(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), _(i, "fill", "#E5E7EB"), _(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), _(e, "fill", "currentColor"), _(t, "aria-hidden", "true"), _(t, "role", "status"), _(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), _(t, "viewBox", "0 0 100 101"), _(t, "fill", "none"), _(t, "xmlns", "http://www.w3.org/2000/svg"), o.disabled = !0, _(o, "type", "button"), _(o, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), te(
        o,
        "background-color",
        /*button_color*/
        l[12]
      ), te(
        o,
        "color",
        /*text_color*/
        l[5]
      );
    },
    m(n, a) {
      se(n, o, a), p(o, t), p(t, i), p(t, e), p(o, r);
    },
    p(n, a) {
      a[0] & /*button_color*/
      4096 && te(
        o,
        "background-color",
        /*button_color*/
        n[12]
      ), a[0] & /*text_color*/
      32 && te(
        o,
        "color",
        /*text_color*/
        n[5]
      );
    },
    d(n) {
      n && ue(o);
    }
  };
}
function Pt(l) {
  let o, t;
  return {
    c() {
      o = b("button"), t = U(`See your
                                charges`), _(o, "type", "submit"), _(o, "class", "rounded-lg bg-black px-6 py-3 mt-6"), te(
        o,
        "background-color",
        /*button_color*/
        l[12]
      ), te(
        o,
        "color",
        /*text_color*/
        l[5]
      );
    },
    m(i, e) {
      se(i, o, e), p(o, t);
    },
    p(i, e) {
      e[0] & /*button_color*/
      4096 && te(
        o,
        "background-color",
        /*button_color*/
        i[12]
      ), e[0] & /*text_color*/
      32 && te(
        o,
        "color",
        /*text_color*/
        i[5]
      );
    },
    d(i) {
      i && ue(o);
    }
  };
}
function Ft(l) {
  let o, t;
  return {
    c() {
      o = b("p"), t = U(
        /*statusCheckError*/
        l[10]
      ), _(o, "class", "text-sm");
    },
    m(i, e) {
      se(i, o, e), p(o, t);
    },
    p(i, e) {
      e[0] & /*statusCheckError*/
      1024 && me(
        t,
        /*statusCheckError*/
        i[10]
      );
    },
    d(i) {
      i && ue(o);
    }
  };
}
function It(l) {
  let o;
  return {
    c() {
      o = b("div"), o.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, i) {
      se(t, o, i);
    },
    p: Me,
    d(t) {
      t && ue(o);
    }
  };
}
function Yt(l) {
  let o, t, i;
  function e(a, u) {
    return (
      /*statusCheckError*/
      a[10] ? At : Ot
    );
  }
  let r = e(l), n = r(l);
  return {
    c() {
      o = b("link"), t = W(), n.c(), i = pt(), this.c = Me, _(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), _(o, "rel", "stylesheet");
    },
    m(a, u) {
      p(document.head, o), se(a, t, u), n.m(a, u), se(a, i, u);
    },
    p(a, u) {
      r === (r = e(a)) && n ? n.p(a, u) : (n.d(1), n = r(a), n && (n.c(), n.m(i.parentNode, i)));
    },
    i: Me,
    o: Me,
    d(a) {
      ue(o), a && ue(t), n.d(a), a && ue(i);
    }
  };
}
const lt = "http://localhost:8000", dt = "CORS_ERROR";
function Ht(l, o, t) {
  let i;
  function e() {
    const D = new XMLHttpRequest();
    D.open("GET", `${lt}/`, !0), D.onerror = function() {
      D.status === 0 ? t(10, d = dt) : t(10, d = "We're sorry, our servers are currently down. Please try again later.");
    }, D.send();
  }
  const r = async (D) => fetch(`${lt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  _t(() => {
    e();
  });
  let n, a = !0, u, s = !1, d;
  const c = () => {
    t(6, n = void 0), t(7, a = !0), t(8, u = !1), t(9, s = !1);
  }, f = async (D) => {
    t(7, a = !1), t(9, s = !0), t(8, u = void 0);
    try {
      const $ = await r(D);
      if (!$.ok) {
        const le = await $.json();
        throw console.log("errorRes", le), new Error(le || `HTTP error! Status: ${$.status}`);
      }
      const J = await $.json();
      t(9, s = !1), t(8, u = void 0), t(7, a = !1), t(6, n = J);
    } catch ($) {
      t(9, s = !1), t(8, u = $.message), t(7, a = !1), t(6, n = void 0);
    }
  }, h = async (D) => {
    D.preventDefault();
    const $ = new FormData(D.target), J = {};
    for (let le of $) {
      const [H, oe] = le;
      J[H] = oe;
    }
    J.prospect = "", J.input_spread = "5", J.prospect_annual_flow = "", J.email_user = !1, z || (J.user = "testUserWithoutMail@gmail.com"), console.log(J), f(J);
  };
  let y = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const S = (D) => {
    t(26, y = D.matches);
  }, v = window.matchMedia("(prefers-color-scheme: dark)");
  v.addEventListener("change", S), yt(() => {
    v.removeEventListener("change", S);
  });
  let { light_mode_background: k = "#d2d0d0" } = o, { dark_mode_background: O = "#1f2937" } = o, { light_mode_text_color: L = "#1f2937" } = o, { dark_mode_text_color: j = "#f9fafb" } = o, { dark_mode_input_background: C = "#374151" } = o, { light_mode_input_background: N = "#f9fafb" } = o, { dark_mode_button_color: g = "#374151" } = o, { light_mode_button_color: m = "#f9fafb" } = o, { border_radius: M = "0.5rem" } = o, { input_border_radius: w = "0.5rem" } = o, { shadow: T = "none" } = o, { opacity: E = 100 } = o, { name: R = "Our Results" } = o, { showInterbankRate: P = !0 } = o, { showEmailInput: z = !1 } = o, B, I, Y, G;
  const V = (D) => c(), K = (D) => c(), ne = (D) => c();
  return l.$$set = (D) => {
    "light_mode_background" in D && t(16, k = D.light_mode_background), "dark_mode_background" in D && t(17, O = D.dark_mode_background), "light_mode_text_color" in D && t(18, L = D.light_mode_text_color), "dark_mode_text_color" in D && t(19, j = D.dark_mode_text_color), "dark_mode_input_background" in D && t(20, C = D.dark_mode_input_background), "light_mode_input_background" in D && t(21, N = D.light_mode_input_background), "dark_mode_button_color" in D && t(22, g = D.dark_mode_button_color), "light_mode_button_color" in D && t(23, m = D.light_mode_button_color), "border_radius" in D && t(0, M = D.border_radius), "input_border_radius" in D && t(24, w = D.input_border_radius), "shadow" in D && t(1, T = D.shadow), "opacity" in D && t(2, E = D.opacity), "name" in D && t(3, R = D.name), "showInterbankRate" in D && t(4, P = D.showInterbankRate), "showEmailInput" in D && t(25, z = D.showEmailInput);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    67305472 && t(11, B = y ? O : k), l.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    67895296 && t(5, I = y ? j : L), l.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    70254592 && t(27, Y = y ? C : N), l.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    79691776 && t(12, G = y ? g : m), l.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    150994976 && t(13, i = `
    background-color: ${Y};
    color: ${I};
    border-radius: ${w}px;
    `);
  }, [
    M,
    T,
    E,
    R,
    P,
    I,
    n,
    a,
    u,
    s,
    d,
    B,
    G,
    i,
    c,
    h,
    k,
    O,
    L,
    j,
    C,
    N,
    g,
    m,
    w,
    z,
    y,
    Y,
    V,
    K,
    ne
  ];
}
class Jt extends st {
  constructor(o) {
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
        }}</style>`, St(
      this,
      {
        target: this.shadowRoot,
        props: mt(this.attributes),
        customElement: !0
      },
      Ht,
      Yt,
      ct,
      {
        light_mode_background: 16,
        dark_mode_background: 17,
        light_mode_text_color: 18,
        dark_mode_text_color: 19,
        dark_mode_input_background: 20,
        light_mode_input_background: 21,
        dark_mode_button_color: 22,
        light_mode_button_color: 23,
        border_radius: 0,
        input_border_radius: 24,
        shadow: 1,
        opacity: 2,
        name: 3,
        showInterbankRate: 4,
        showEmailInput: 25
      },
      null,
      [-1, -1]
    ), o && (o.target && se(o.target, this, o.anchor), o.props && (this.$set(o.props), ie()));
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
      "shadow",
      "opacity",
      "name",
      "showInterbankRate",
      "showEmailInput"
    ];
  }
  get light_mode_background() {
    return this.$$.ctx[16];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), ie();
  }
  get dark_mode_background() {
    return this.$$.ctx[17];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), ie();
  }
  get light_mode_text_color() {
    return this.$$.ctx[18];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), ie();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[19];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), ie();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[20];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), ie();
  }
  get light_mode_input_background() {
    return this.$$.ctx[21];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), ie();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[22];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), ie();
  }
  get light_mode_button_color() {
    return this.$$.ctx[23];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), ie();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(o) {
    this.$$set({ border_radius: o }), ie();
  }
  get input_border_radius() {
    return this.$$.ctx[24];
  }
  set input_border_radius(o) {
    this.$$set({ input_border_radius: o }), ie();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(o) {
    this.$$set({ shadow: o }), ie();
  }
  get opacity() {
    return this.$$.ctx[2];
  }
  set opacity(o) {
    this.$$set({ opacity: o }), ie();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(o) {
    this.$$set({ name: o }), ie();
  }
  get showInterbankRate() {
    return this.$$.ctx[4];
  }
  set showInterbankRate(o) {
    this.$$set({ showInterbankRate: o }), ie();
  }
  get showEmailInput() {
    return this.$$.ctx[25];
  }
  set showEmailInput(o) {
    this.$$set({ showEmailInput: o }), ie();
  }
}
customElements.define("spreadm8-calc", Jt);
export {
  Jt as Spreadm8Calc
};
