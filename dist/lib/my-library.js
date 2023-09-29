function Ct() {
}
function Wt(l) {
  return l();
}
function Xt() {
  return /* @__PURE__ */ Object.create(null);
}
function Lt(l) {
  l.forEach(Wt);
}
function Kt(l) {
  return typeof l == "function";
}
function se(l, r) {
  return l != l ? r == r : l !== r || l && typeof l == "object" || typeof l == "function";
}
function de(l) {
  return Object.keys(l).length === 0;
}
function p(l, r) {
  l.appendChild(r);
}
function ut(l, r, e) {
  l.insertBefore(r, e || null);
}
function it(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function b(l) {
  return document.createElement(l);
}
function zt(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function G(l) {
  return document.createTextNode(l);
}
function W() {
  return G(" ");
}
function ce() {
  return G("");
}
function Jt(l, r, e, i) {
  return l.addEventListener(r, e, i), () => l.removeEventListener(r, e, i);
}
function m(l, r, e) {
  e == null ? l.removeAttribute(r) : l.getAttribute(r) !== e && l.setAttribute(r, e);
}
function fe(l) {
  return Array.from(l.childNodes);
}
function _t(l, r) {
  r = "" + r, l.wholeText !== r && (l.data = r);
}
function kt(l, r, e, i) {
  e === null ? l.style.removeProperty(r) : l.style.setProperty(r, e, i ? "important" : "");
}
function pe(l) {
  const r = {};
  for (const e of l)
    r[e.name] = e.value;
  return r;
}
let Pt;
function Ft(l) {
  Pt = l;
}
function ae() {
  if (!Pt)
    throw new Error("Function called outside component initialization");
  return Pt;
}
function he(l) {
  ae().$$.on_mount.push(l);
}
function me(l) {
  ae().$$.on_destroy.push(l);
}
const jt = [], $t = [], Ht = [], te = [], _e = Promise.resolve();
let Zt = !1;
function ye() {
  Zt || (Zt = !0, _e.then(tt));
}
function Gt(l) {
  Ht.push(l);
}
const Bt = /* @__PURE__ */ new Set();
let Nt = 0;
function tt() {
  if (Nt !== 0)
    return;
  const l = Pt;
  do {
    try {
      for (; Nt < jt.length; ) {
        const r = jt[Nt];
        Nt++, Ft(r), be(r.$$);
      }
    } catch (r) {
      throw jt.length = 0, Nt = 0, r;
    }
    for (Ft(null), jt.length = 0, Nt = 0; $t.length; )
      $t.pop()();
    for (let r = 0; r < Ht.length; r += 1) {
      const e = Ht[r];
      Bt.has(e) || (Bt.add(e), e());
    }
    Ht.length = 0;
  } while (jt.length);
  for (; te.length; )
    te.pop()();
  Zt = !1, Bt.clear(), Ft(l);
}
function be(l) {
  if (l.fragment !== null) {
    l.update(), Lt(l.before_update);
    const r = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, r), l.after_update.forEach(Gt);
  }
}
const ge = /* @__PURE__ */ new Set();
function ve(l, r) {
  l && l.i && (ge.delete(l), l.i(r));
}
function we(l, r, e, i) {
  const { fragment: t, after_update: n } = l.$$;
  t && t.m(r, e), i || Gt(() => {
    const o = l.$$.on_mount.map(Wt).filter(Kt);
    l.$$.on_destroy ? l.$$.on_destroy.push(...o) : Lt(o), l.$$.on_mount = [];
  }), n.forEach(Gt);
}
function xe(l, r) {
  const e = l.$$;
  e.fragment !== null && (Lt(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function ke(l, r) {
  l.$$.dirty[0] === -1 && (jt.push(l), ye(), l.$$.dirty.fill(0)), l.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Me(l, r, e, i, t, n, o, a = [-1]) {
  const u = Pt;
  Ft(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: Ct,
    not_equal: t,
    bound: Xt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xt(),
    dirty: a,
    skip_bound: !1,
    root: r.target || u.$$.root
  };
  o && o(s.root);
  let c = !1;
  if (s.ctx = e ? e(l, r.props || {}, (f, d, ...h) => {
    const y = h.length ? h[0] : d;
    return s.ctx && t(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), c && ke(l, f)), d;
  }) : [], s.update(), c = !0, Lt(s.before_update), s.fragment = i ? i(s.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = fe(r.target);
      s.fragment && s.fragment.l(f), f.forEach(it);
    } else
      s.fragment && s.fragment.c();
    r.intro && ve(l.$$.fragment), we(l, r.target, r.anchor, r.customElement), tt();
  }
  Ft(u);
}
let le;
typeof HTMLElement == "function" && (le = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(Wt).filter(Kt);
    for (const r in this.$$.slotted)
      this.appendChild(this.$$.slotted[r]);
  }
  attributeChangedCallback(l, r, e) {
    this[l] = e;
  }
  disconnectedCallback() {
    Lt(this.$$.on_disconnect);
  }
  $destroy() {
    xe(this, 1), this.$destroy = Ct;
  }
  $on(l, r) {
    if (!Kt(r))
      return Ct;
    const e = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return e.push(r), () => {
      const i = e.indexOf(r);
      i !== -1 && e.splice(i, 1);
    };
  }
  $set(l) {
    this.$$set && !de(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ee = {}, Se = {
  get exports() {
    return ee;
  },
  set exports(l) {
    ee = l;
  }
};
(function(l, r) {
  (function(e, i) {
    l.exports = i();
  })(Ce, function() {
    return function(e) {
      function i(n) {
        if (t[n])
          return t[n].exports;
        var o = t[n] = { exports: {}, id: n, loaded: !1 };
        return e[n].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports;
      }
      var t = {};
      return i.m = e, i.c = t, i.p = "", i(0);
    }([function(e, i, t) {
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      t(84);
      var o = t(41), a = n(o), u = function() {
        a.default.addPickerToOtherInputs(), a.default.supportsDateInput() || a.default.addPickerToDateInputs();
      };
      u(), document.addEventListener("DOMContentLoaded", function() {
        u();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        u();
      });
    }, function(e, i, t) {
      e.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, i) {
      var t = e.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(e, i) {
      var t = {}.hasOwnProperty;
      e.exports = function(n, o) {
        return t.call(n, o);
      };
    }, function(e, i, t) {
      var n = t(9), o = t(32), a = t(25), u = Object.defineProperty;
      i.f = t(1) ? Object.defineProperty : function(s, c, f) {
        if (n(s), c = a(c, !0), n(f), o)
          try {
            return u(s, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[c] = f.value), s;
      };
    }, function(e, i, t) {
      var n = t(59), o = t(16);
      e.exports = function(a) {
        return n(o(a));
      };
    }, function(e, i, t) {
      var n = t(4), o = t(14);
      e.exports = t(1) ? function(a, u, s) {
        return n.f(a, u, o(1, s));
      } : function(a, u, s) {
        return a[u] = s, a;
      };
    }, function(e, i, t) {
      var n = t(23)("wks"), o = t(15), a = t(2).Symbol, u = typeof a == "function", s = e.exports = function(c) {
        return n[c] || (n[c] = u && a[c] || (u ? a : o)("Symbol." + c));
      };
      s.store = n;
    }, function(e, i) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, i, t) {
      var n = t(12);
      e.exports = function(o) {
        if (!n(o))
          throw TypeError(o + " is not an object!");
        return o;
      };
    }, function(e, i, t) {
      var n = t(2), o = t(8), a = t(56), u = t(6), s = "prototype", c = function(f, d, h) {
        var y, S, v, k = f & c.F, E = f & c.G, P = f & c.S, N = f & c.P, C = f & c.B, j = f & c.W, g = E ? o : o[d] || (o[d] = {}), _ = g[s], M = E ? n : P ? n[d] : (n[d] || {})[s];
        E && (h = d);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = E && typeof M[y] != "function" ? h[y] : C && S ? a(v, n) : j && M[y] == v ? function(w) {
            var T = function(D, F, R) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(D);
                  case 2:
                    return new w(D, F);
                }
                return new w(D, F, R);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : N && typeof v == "function" ? a(Function.call, v) : v, N && ((g.virtual || (g.virtual = {}))[y] = v, f & c.R && _ && !_[y] && u(_, y, v)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
    }, function(e, i) {
      e.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(e, i) {
      e.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(e, i, t) {
      var n = t(38), o = t(17);
      e.exports = Object.keys || function(a) {
        return n(a, o);
      };
    }, function(e, i) {
      e.exports = function(t, n) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
      };
    }, function(e, i) {
      var t = 0, n = Math.random();
      e.exports = function(o) {
        return "Symbol(".concat(o === void 0 ? "" : o, ")_", (++t + n).toString(36));
      };
    }, function(e, i) {
      e.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(e, i) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, i) {
      e.exports = {};
    }, function(e, i) {
      e.exports = !0;
    }, function(e, i) {
      i.f = {}.propertyIsEnumerable;
    }, function(e, i, t) {
      var n = t(4).f, o = t(3), a = t(7)("toStringTag");
      e.exports = function(u, s, c) {
        u && !o(u = c ? u : u.prototype, a) && n(u, a, { configurable: !0, value: s });
      };
    }, function(e, i, t) {
      var n = t(23)("keys"), o = t(15);
      e.exports = function(a) {
        return n[a] || (n[a] = o(a));
      };
    }, function(e, i, t) {
      var n = t(2), o = "__core-js_shared__", a = n[o] || (n[o] = {});
      e.exports = function(u) {
        return a[u] || (a[u] = {});
      };
    }, function(e, i) {
      var t = Math.ceil, n = Math.floor;
      e.exports = function(o) {
        return isNaN(o = +o) ? 0 : (o > 0 ? n : t)(o);
      };
    }, function(e, i, t) {
      var n = t(12);
      e.exports = function(o, a) {
        if (!n(o))
          return o;
        var u, s;
        if (a && typeof (u = o.toString) == "function" && !n(s = u.call(o)) || typeof (u = o.valueOf) == "function" && !n(s = u.call(o)) || !a && typeof (u = o.toString) == "function" && !n(s = u.call(o)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, i, t) {
      var n = t(2), o = t(8), a = t(19), u = t(27), s = t(4).f;
      e.exports = function(c) {
        var f = o.Symbol || (o.Symbol = a ? {} : n.Symbol || {});
        c.charAt(0) == "_" || c in f || s(f, c, { value: u.f(c) });
      };
    }, function(e, i, t) {
      i.f = t(7);
    }, function(e, i) {
      i.__esModule = !0, i.default = function(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, i, t) {
      function n(u) {
        return u && u.__esModule ? u : { default: u };
      }
      i.__esModule = !0;
      var o = t(45), a = n(o);
      i.default = function() {
        function u(s, c) {
          for (var f = 0; f < c.length; f++) {
            var d = c[f];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), (0, a.default)(s, d.key, d);
          }
        }
        return function(s, c, f) {
          return c && u(s.prototype, c), f && u(s, f), s;
        };
      }();
    }, function(e, i) {
      var t = {}.toString;
      e.exports = function(n) {
        return t.call(n).slice(8, -1);
      };
    }, function(e, i, t) {
      var n = t(12), o = t(2).document, a = n(o) && n(o.createElement);
      e.exports = function(u) {
        return a ? o.createElement(u) : {};
      };
    }, function(e, i, t) {
      e.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, i, t) {
      var n = t(19), o = t(10), a = t(39), u = t(6), s = t(3), c = t(18), f = t(61), d = t(21), h = t(67), y = t(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", E = "values", P = function() {
        return this;
      };
      e.exports = function(N, C, j, g, _, M, w) {
        f(j, C, g);
        var T, D, F, R = function($) {
          if (!S && $ in U)
            return U[$];
          switch ($) {
            case k:
              return function() {
                return new j(this, $);
              };
            case E:
              return function() {
                return new j(this, $);
              };
          }
          return function() {
            return new j(this, $);
          };
        }, K = C + " Iterator", I = _ == E, Y = !1, U = N.prototype, V = U[y] || U[v] || _ && U[_], z = V || R(_), B = _ ? I ? R("entries") : z : void 0, st = C == "Array" && U.entries || V;
        if (st && (F = h(st.call(new N())), F !== Object.prototype && (d(F, K, !0), n || s(F, y) || u(F, y, P))), I && V && V.name !== E && (Y = !0, z = function() {
          return V.call(this);
        }), n && !w || !S && !Y && U[y] || u(U, y, z), c[C] = z, c[K] = P, _)
          if (T = { values: I ? z : R(E), keys: M ? z : R(k), entries: B }, w)
            for (D in T)
              D in U || a(U, D, T[D]);
          else
            o(o.P + o.F * (S || Y), C, T);
        return T;
      };
    }, function(e, i, t) {
      var n = t(9), o = t(35), a = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", f = function() {
        var d, h = t(31)("iframe"), y = a.length, S = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", d = h.contentWindow.document, d.open(), d.write(S + "script" + v + "document.F=Object" + S + "/script" + v), d.close(), f = d.F; y--; )
          delete f[c][a[y]];
        return f();
      };
      e.exports = Object.create || function(d, h) {
        var y;
        return d !== null ? (s[c] = n(d), y = new s(), s[c] = null, y[u] = d) : y = f(), h === void 0 ? y : o(y, h);
      };
    }, function(e, i, t) {
      var n = t(4), o = t(9), a = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        o(u);
        for (var c, f = a(s), d = f.length, h = 0; d > h; )
          n.f(u, c = f[h++], s[c]);
        return u;
      };
    }, function(e, i, t) {
      var n = t(38), o = t(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(a) {
        return n(a, o);
      };
    }, function(e, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(e, i, t) {
      var n = t(3), o = t(5), a = t(55)(!1), u = t(22)("IE_PROTO");
      e.exports = function(s, c) {
        var f, d = o(s), h = 0, y = [];
        for (f in d)
          f != u && n(d, f) && y.push(f);
        for (; c.length > h; )
          n(d, f = c[h++]) && (~a(y, f) || y.push(f));
        return y;
      };
    }, function(e, i, t) {
      e.exports = t(6);
    }, function(e, i, t) {
      function n(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function o(h, y) {
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
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, f.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, f.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var c = t(48), f = n(c), d = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, E, P) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(d.masks[k] || k || d.masks.default);
          var N = k.slice(0, 4);
          N !== "UTC:" && N !== "GMT:" || (k = k.slice(4), E = !0, N === "GMT:" && (P = !0));
          var C = E ? "getUTC" : "get", j = v[C + "Date"](), g = v[C + "Day"](), _ = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), D = v[C + "Seconds"](), F = v[C + "Milliseconds"](), R = E ? 0 : v.getTimezoneOffset(), K = a(v), I = u(v), Y = { d: j, dd: o(j), ddd: d.i18n.dayNames[g], dddd: d.i18n.dayNames[g + 7], m: _ + 1, mm: o(_ + 1), mmm: d.i18n.monthNames[_], mmmm: d.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: o(w % 12 || 12), H: w, HH: o(w), M: T, MM: o(T), s: D, ss: o(D), l: o(F, 3), L: o(Math.round(F / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: P ? "GMT" : E ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (R > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(R) / 60) + Math.abs(R) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: K, N: I };
          return k.replace(h, function(U) {
            return U in Y ? Y[U] : U.slice(1, U.length - 1);
          });
        };
      }();
      d.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, d.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = d;
    }, function(e, i, t) {
      function n(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var o = t(44), a = n(o), u = t(28), s = n(u), c = t(29), f = n(c), d = t(43), h = n(d), y = t(42), S = n(y), v = t(40), k = n(v), E = function() {
        function P(N) {
          var C = this;
          (0, s.default)(this, P), this.element = N, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, a.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var g = C.format || "yyyy-mm-dd", _ = C.element.value.match(/(\d+)/g), M = 0, w = {};
            return g.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(_[w.yyyy], _[w.mm] - 1, _[w.dd]);
          }, set: function(g) {
            C.element.value = (0, k.default)(g, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            C.element.valueAsDate = new Date(g);
          } } });
          var j = function(g) {
            var _ = C.element;
            _.locale = C.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(g) {
            var _ = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                C.element.valueAsDate && (_.setDate(C.element.valueAsDate.getDate() + 1), C.element.valueAsDate = _, h.default.pingInput());
                break;
              case 40:
                C.element.valueAsDate && (_.setDate(C.element.valueAsDate.getDate() - 1), C.element.valueAsDate = _, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, f.default)(P, [{ key: "getLocaleText", value: function() {
          var N = this.locale.toLowerCase();
          for (var C in S.default) {
            var j = C.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(N) || ~j.indexOf(N.substr(0, 2)))
              return S.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var N = document.createElement("input");
          N.setAttribute("type", "date");
          var C = "not-a-date";
          return N.setAttribute("value", C), N.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var N = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = N.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new P(N[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var N = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = N.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new P(N[j]);
        } }]), P;
      }();
      i.default = E;
    }, function(e, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = t;
    }, function(e, i, t) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var o = t(28), a = n(o), u = t(29), s = n(u), c = function() {
        function f() {
          var d = this;
          if ((0, a.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            d.date.setYear(d.year.value), d.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            d.date.setMonth(d.month.value), d.refreshDaysMatrix();
          });
          var y = document.createElement("span");
          y.className = "monthSelect-wrapper", y.appendChild(this.month), this.container.appendChild(y), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var v = new Date();
            d.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), d.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var E = d.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), d.date.setDate(parseInt(k.textContent)), d.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (d.isOpen) {
              for (var k = v.target, E = k === d.container || k === d.input; !E && (k = k.parentNode); )
                E = k === d.container;
              (v.target.getAttribute("type") !== "date" && !E || !E) && d.hide();
            }
          }, this.removeBlur = function(v) {
            d.isOpen && d.hide();
          };
        }
        return (0, s.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var d = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", d.removeClickOut), document.addEventListener("touchstart", d.removeClickOut);
          }, 500), window.onpopstate = function() {
            d.hide();
          };
        } }, { key: "goto", value: function(d) {
          var h = this, y = d.getBoundingClientRect();
          this.container.style.top = y.top + y.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, k = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = y.right - v;
          y.right < v ? (E = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var d = ["<tr>"], h = 0, y = this.locale.days.length; h < y; ++h)
            d.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = d.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var d = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(d, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && d === v.getFullYear() && h === v.getMonth(), E = [], P = 0; P < S + y; ++P)
            if (P % 7 === 0 && E.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              E.push("<td></td>");
            else {
              var N = P + 1 - y, C = k && v.getDate() === N;
              E.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + N + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var d = void 0, h = void 0;
          try {
            d = new Event("input"), h = new Event("change");
          } catch {
            d = document.createEvent("KeyboardEvent"), d.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(d), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(d, h, y, S) {
          d.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            d.appendChild(k);
            var E = S ? S[v - h] : v;
            k.text = E, k.value = v;
          }
          return d;
        } }, { key: "absoluteDate", value: function(d) {
          return d && new Date(d.getTime() + 60 * d.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new c(), i.default = window.thePicker;
    }, function(e, i, t) {
      e.exports = { default: t(49), __esModule: !0 };
    }, function(e, i, t) {
      e.exports = { default: t(50), __esModule: !0 };
    }, function(e, i, t) {
      e.exports = { default: t(51), __esModule: !0 };
    }, function(e, i, t) {
      e.exports = { default: t(52), __esModule: !0 };
    }, function(e, i, t) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      i.__esModule = !0;
      var o = t(47), a = n(o), u = t(46), s = n(u), c = typeof s.default == "function" && typeof a.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      i.default = typeof s.default == "function" && c(a.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : c(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : c(f);
      };
    }, function(e, i, t) {
      t(73);
      var n = t(8).Object;
      e.exports = function(o, a) {
        return n.defineProperties(o, a);
      };
    }, function(e, i, t) {
      t(74);
      var n = t(8).Object;
      e.exports = function(o, a, u) {
        return n.defineProperty(o, a, u);
      };
    }, function(e, i, t) {
      t(77), t(75), t(78), t(79), e.exports = t(8).Symbol;
    }, function(e, i, t) {
      t(76), t(80), e.exports = t(27).f("iterator");
    }, function(e, i) {
      e.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(e, i) {
      e.exports = function() {
      };
    }, function(e, i, t) {
      var n = t(5), o = t(70), a = t(69);
      e.exports = function(u) {
        return function(s, c, f) {
          var d, h = n(s), y = o(h.length), S = a(f, y);
          if (u && c != c) {
            for (; y > S; )
              if (d = h[S++], d != d)
                return !0;
          } else
            for (; y > S; S++)
              if ((u || S in h) && h[S] === c)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(e, i, t) {
      var n = t(53);
      e.exports = function(o, a, u) {
        if (n(o), a === void 0)
          return o;
        switch (u) {
          case 1:
            return function(s) {
              return o.call(a, s);
            };
          case 2:
            return function(s, c) {
              return o.call(a, s, c);
            };
          case 3:
            return function(s, c, f) {
              return o.call(a, s, c, f);
            };
        }
        return function() {
          return o.apply(a, arguments);
        };
      };
    }, function(e, i, t) {
      var n = t(13), o = t(37), a = t(20);
      e.exports = function(u) {
        var s = n(u), c = o.f;
        if (c)
          for (var f, d = c(u), h = a.f, y = 0; d.length > y; )
            h.call(u, f = d[y++]) && s.push(f);
        return s;
      };
    }, function(e, i, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, i, t) {
      var n = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(o) {
        return n(o) == "String" ? o.split("") : Object(o);
      };
    }, function(e, i, t) {
      var n = t(30);
      e.exports = Array.isArray || function(o) {
        return n(o) == "Array";
      };
    }, function(e, i, t) {
      var n = t(34), o = t(14), a = t(21), u = {};
      t(6)(u, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, c, f) {
        s.prototype = n(u, { next: o(1, f) }), a(s, c + " Iterator");
      };
    }, function(e, i) {
      e.exports = function(t, n) {
        return { value: n, done: !!t };
      };
    }, function(e, i, t) {
      var n = t(13), o = t(5);
      e.exports = function(a, u) {
        for (var s, c = o(a), f = n(c), d = f.length, h = 0; d > h; )
          if (c[s = f[h++]] === u)
            return s;
      };
    }, function(e, i, t) {
      var n = t(15)("meta"), o = t(12), a = t(3), u = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), d = function(k) {
        u(k, n, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, E) {
        if (!o(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!a(k, n)) {
          if (!c(k))
            return "F";
          if (!E)
            return "E";
          d(k);
        }
        return k[n].i;
      }, y = function(k, E) {
        if (!a(k, n)) {
          if (!c(k))
            return !0;
          if (!E)
            return !1;
          d(k);
        }
        return k[n].w;
      }, S = function(k) {
        return f && v.NEED && c(k) && !a(k, n) && d(k), k;
      }, v = e.exports = { KEY: n, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(e, i, t) {
      var n = t(20), o = t(14), a = t(5), u = t(25), s = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      i.f = t(1) ? f : function(d, h) {
        if (d = a(d), h = u(h, !0), c)
          try {
            return f(d, h);
          } catch {
          }
        if (s(d, h))
          return o(!n.f.call(d, h), d[h]);
      };
    }, function(e, i, t) {
      var n = t(5), o = t(36).f, a = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(c) {
        try {
          return o(c);
        } catch {
          return u.slice();
        }
      };
      e.exports.f = function(c) {
        return u && a.call(c) == "[object Window]" ? s(c) : o(n(c));
      };
    }, function(e, i, t) {
      var n = t(3), o = t(71), a = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = o(s), n(s, a) ? s[a] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, i, t) {
      var n = t(24), o = t(16);
      e.exports = function(a) {
        return function(u, s) {
          var c, f, d = String(o(u)), h = n(s), y = d.length;
          return h < 0 || h >= y ? a ? "" : void 0 : (c = d.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (f = d.charCodeAt(h + 1)) < 56320 || f > 57343 ? a ? d.charAt(h) : c : a ? d.slice(h, h + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(e, i, t) {
      var n = t(24), o = Math.max, a = Math.min;
      e.exports = function(u, s) {
        return u = n(u), u < 0 ? o(u + s, 0) : a(u, s);
      };
    }, function(e, i, t) {
      var n = t(24), o = Math.min;
      e.exports = function(a) {
        return a > 0 ? o(n(a), 9007199254740991) : 0;
      };
    }, function(e, i, t) {
      var n = t(16);
      e.exports = function(o) {
        return Object(n(o));
      };
    }, function(e, i, t) {
      var n = t(54), o = t(62), a = t(18), u = t(5);
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = u(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, o(1)) : c == "keys" ? o(0, f) : c == "values" ? o(0, s[f]) : o(0, [f, s[f]]);
      }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries");
    }, function(e, i, t) {
      var n = t(10);
      n(n.S + n.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, i, t) {
      var n = t(10);
      n(n.S + n.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, i) {
    }, function(e, i, t) {
      var n = t(68)(!0);
      t(33)(String, "String", function(o) {
        this._t = String(o), this._i = 0;
      }, function() {
        var o, a = this._t, u = this._i;
        return u >= a.length ? { value: void 0, done: !0 } : (o = n(a, u), this._i += o.length, { value: o, done: !1 });
      });
    }, function(e, i, t) {
      var n = t(2), o = t(3), a = t(1), u = t(10), s = t(39), c = t(64).KEY, f = t(11), d = t(23), h = t(21), y = t(15), S = t(7), v = t(27), k = t(26), E = t(63), P = t(57), N = t(60), C = t(9), j = t(5), g = t(25), _ = t(14), M = t(34), w = t(66), T = t(65), D = t(4), F = t(13), R = T.f, K = D.f, I = w.f, Y = n.Symbol, U = n.JSON, V = U && U.stringify, z = "prototype", B = S("_hidden"), st = S("toPrimitive"), $ = {}.propertyIsEnumerable, at = d("symbol-registry"), et = d("symbols"), q = d("op-symbols"), H = Object[z], L = typeof Y == "function", Q = n.QObject, Mt = !Q || !Q[z] || !Q[z].findChild, dt = a && f(function() {
        return M(K({}, "a", { get: function() {
          return K(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, J) {
        var X = R(H, A);
        X && delete H[A], K(x, A, J), X && x !== H && K(H, A, X);
      } : K, O = function(x) {
        var A = et[x] = M(Y[z]);
        return A._k = x, A;
      }, rt = L && typeof Y.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof Y;
      }, ot = function(x, A, J) {
        return x === H && ot(q, A, J), C(x), A = g(A, !0), C(J), o(et, A) ? (J.enumerable ? (o(x, B) && x[B][A] && (x[B][A] = !1), J = M(J, { enumerable: _(0, !1) })) : (o(x, B) || K(x, B, _(1, {})), x[B][A] = !0), dt(x, A, J)) : K(x, A, J);
      }, bt = function(x, A) {
        C(x);
        for (var J, X = P(A = j(A)), lt = 0, ft = X.length; ft > lt; )
          ot(x, J = X[lt++], A[J]);
        return x;
      }, St = function(x, A) {
        return A === void 0 ? M(x) : bt(M(x), A);
      }, Z = function(x) {
        var A = $.call(this, x = g(x, !0));
        return !(this === H && o(et, x) && !o(q, x)) && (!(A || !o(this, x) || !o(et, x) || o(this, B) && this[B][x]) || A);
      }, gt = function(x, A) {
        if (x = j(x), A = g(A, !0), x !== H || !o(et, A) || o(q, A)) {
          var J = R(x, A);
          return !J || !o(et, A) || o(x, B) && x[B][A] || (J.enumerable = !0), J;
        }
      }, wt = function(x) {
        for (var A, J = I(j(x)), X = [], lt = 0; J.length > lt; )
          o(et, A = J[lt++]) || A == B || A == c || X.push(A);
        return X;
      }, xt = function(x) {
        for (var A, J = x === H, X = I(J ? q : j(x)), lt = [], ft = 0; X.length > ft; )
          !o(et, A = X[ft++]) || J && !o(H, A) || lt.push(et[A]);
        return lt;
      };
      L || (Y = function() {
        if (this instanceof Y)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(J) {
          this === H && A.call(q, J), o(this, B) && o(this[B], x) && (this[B][x] = !1), dt(this, x, _(1, J));
        };
        return a && Mt && dt(H, x, { configurable: !0, set: A }), O(x);
      }, s(Y[z], "toString", function() {
        return this._k;
      }), T.f = gt, D.f = ot, t(36).f = w.f = wt, t(20).f = Z, t(37).f = xt, a && !t(19) && s(H, "propertyIsEnumerable", Z, !0), v.f = function(x) {
        return O(S(x));
      }), u(u.G + u.W + u.F * !L, { Symbol: Y });
      for (var ht = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), mt = 0; ht.length > mt; )
        S(ht[mt++]);
      for (var ht = F(S.store), mt = 0; ht.length > mt; )
        k(ht[mt++]);
      u(u.S + u.F * !L, "Symbol", { for: function(x) {
        return o(at, x += "") ? at[x] : at[x] = Y(x);
      }, keyFor: function(x) {
        if (rt(x))
          return E(at, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        Mt = !0;
      }, useSimple: function() {
        Mt = !1;
      } }), u(u.S + u.F * !L, "Object", { create: St, defineProperty: ot, defineProperties: bt, getOwnPropertyDescriptor: gt, getOwnPropertyNames: wt, getOwnPropertySymbols: xt }), U && u(u.S + u.F * (!L || f(function() {
        var x = Y();
        return V([x]) != "[null]" || V({ a: x }) != "{}" || V(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !rt(x)) {
          for (var A, J, X = [x], lt = 1; arguments.length > lt; )
            X.push(arguments[lt++]);
          return A = X[1], typeof A == "function" && (J = A), !J && N(A) || (A = function(ft, yt) {
            if (J && (yt = J.call(this, ft, yt)), !rt(yt))
              return yt;
          }), X[1] = A, V.apply(U, X);
        }
      } }), Y[z][st] || t(6)(Y[z], st, Y[z].valueOf), h(Y, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0);
    }, function(e, i, t) {
      t(26)("asyncIterator");
    }, function(e, i, t) {
      t(26)("observable");
    }, function(e, i, t) {
      t(72);
      for (var n = t(2), o = t(6), a = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = s[c], d = n[f], h = d && d.prototype;
        h && !h[u] && o(h, u, f), a[f] = a.Array;
      }
    }, function(e, i, t) {
      i = e.exports = t(82)(), i.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, i) {
      e.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var n = [], o = 0; o < this.length; o++) {
            var a = this[o];
            a[2] ? n.push("@media " + a[2] + "{" + a[1] + "}") : n.push(a[1]);
          }
          return n.join("");
        }, t.i = function(n, o) {
          typeof n == "string" && (n = [[null, n, ""]]);
          for (var a = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (a[s] = !0);
          }
          for (u = 0; u < n.length; u++) {
            var c = n[u];
            typeof c[0] == "number" && a[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(" + c[2] + ") and (" + o + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, i, t) {
      function n(g, _) {
        for (var M = 0; M < g.length; M++) {
          var w = g[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var D = 0; D < T.parts.length; D++)
              T.parts[D](w.parts[D]);
            for (; D < w.parts.length; D++)
              T.parts.push(f(w.parts[D], _));
          } else {
            for (var F = [], D = 0; D < w.parts.length; D++)
              F.push(f(w.parts[D], _));
            S[w.id] = { id: w.id, refs: 1, parts: F };
          }
        }
      }
      function o(g) {
        for (var _ = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], D = T[0], F = T[1], R = T[2], K = T[3], I = { css: F, media: R, sourceMap: K };
          M[D] ? M[D].parts.push(I) : _.push(M[D] = { id: D, parts: [I] });
        }
        return _;
      }
      function a(g, _) {
        var M = E(), w = C[C.length - 1];
        if (g.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(_, w.nextSibling) : M.appendChild(_) : M.insertBefore(_, M.firstChild), C.push(_);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(_);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var _ = C.indexOf(g);
        _ >= 0 && C.splice(_, 1);
      }
      function s(g) {
        var _ = document.createElement("style");
        return _.type = "text/css", a(g, _), _;
      }
      function c(g) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", a(g, _), _;
      }
      function f(g, _) {
        var M, w, T;
        if (_.singleton) {
          var D = N++;
          M = P || (P = s(_)), w = d.bind(null, M, D, !1), T = d.bind(null, M, D, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = c(_), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(_), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(g), function(F) {
          if (F) {
            if (F.css === g.css && F.media === g.media && F.sourceMap === g.sourceMap)
              return;
            w(g = F);
          } else
            T();
        };
      }
      function d(g, _, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = j(_, T);
        else {
          var D = document.createTextNode(T), F = g.childNodes;
          F[_] && g.removeChild(F[_]), F.length ? g.insertBefore(D, F[_]) : g.appendChild(D);
        }
      }
      function h(g, _) {
        var M = _.css, w = _.media;
        if (w && g.setAttribute("media", w), g.styleSheet)
          g.styleSheet.cssText = M;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(M));
        }
      }
      function y(g, _) {
        var M = _.css, w = _.sourceMap;
        w && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(w)))) + " */");
        var T = new Blob([M], { type: "text/css" }), D = g.href;
        g.href = URL.createObjectURL(T), D && URL.revokeObjectURL(D);
      }
      var S = {}, v = function(g) {
        var _;
        return function() {
          return typeof _ > "u" && (_ = g.apply(this, arguments)), _;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, N = 0, C = [];
      e.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = k()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = o(g);
        return n(M, _), function(w) {
          for (var T = [], D = 0; D < M.length; D++) {
            var F = M[D], R = S[F.id];
            R.refs--, T.push(R);
          }
          if (w) {
            var K = o(w);
            n(K, _);
          }
          for (var D = 0; D < T.length; D++) {
            var R = T[D];
            if (R.refs === 0) {
              for (var I = 0; I < R.parts.length; I++)
                R.parts[I]();
              delete S[R.id];
            }
          }
        };
      };
      var j = function() {
        var g = [];
        return function(_, M) {
          return g[_] = M, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, i, t) {
      var n = t(81);
      typeof n == "string" && (n = [[e.id, n, ""]]), t(83)(n, {}), n.locals && (e.exports = n.locals);
    }]);
  });
})(Se);
function De(l) {
  let r, e, i;
  function t(a, u) {
    return (
      /*isIdle*/
      a[9] || /*isFetching*/
      a[11] ? Ne : (
        /*backendData*/
        a[8] ? Te : (
          /*error*/
          a[10] ? Ae : Ee
        )
      )
    );
  }
  let n = t(l), o = n(l);
  return {
    c() {
      r = b("div"), o.c(), m(r, "class", e = `p-12 shadow-${/*shadow*/
      l[3]}`), m(r, "style", i = `
        background-color: ${/*background*/
      l[13]};
        border-radius: ${/*border_radius*/
      l[2]};
        color: ${/*text_color*/
      l[6]};
        opacity: ${/*opacity*/
      l[4]}%!important;
        height: ${/*height*/
      l[0]};
        width: ${/*width*/
      l[1]};
`);
    },
    m(a, u) {
      ut(a, r, u), o.m(r, null);
    },
    p(a, u) {
      n === (n = t(a)) && o ? o.p(a, u) : (o.d(1), o = n(a), o && (o.c(), o.m(r, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      a[3]}`) && m(r, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && i !== (i = `
        background-color: ${/*background*/
      a[13]};
        border-radius: ${/*border_radius*/
      a[2]};
        color: ${/*text_color*/
      a[6]};
        opacity: ${/*opacity*/
      a[4]}%!important;
        height: ${/*height*/
      a[0]};
        width: ${/*width*/
      a[1]};
`) && m(r, "style", i);
    },
    d(a) {
      a && it(r), o.d();
    }
  };
}
function Oe(l) {
  let r, e, i, t, n, o;
  function a(c, f) {
    return (
      /*statusCheckError*/
      c[12] === ue ? Le : Pe
    );
  }
  let u = a(l), s = u(l);
  return {
    c() {
      r = b("div"), e = b("div"), i = b("h1"), i.textContent = "An error occured", t = W(), s.c(), m(i, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(r, "class", n = `p-4 shadow-${/*shadow*/
      l[3]}`), m(r, "style", o = `
        background-color: ${/*background*/
      l[13]};
        border-radius: ${/*border_radius*/
      l[2]};
        color: ${/*text_color*/
      l[6]};
        opacity: ${/*opacity*/
      l[4]}%!important;
        height: ${/*height*/
      l[0]};
        width: ${/*width*/
      l[1]};
`);
    },
    m(c, f) {
      ut(c, r, f), p(r, e), p(e, i), p(e, t), s.m(e, null);
    },
    p(c, f) {
      u === (u = a(c)) && s ? s.p(c, f) : (s.d(1), s = u(c), s && (s.c(), s.m(e, null))), f[0] & /*shadow*/
      8 && n !== (n = `p-4 shadow-${/*shadow*/
      c[3]}`) && m(r, "class", n), f[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && o !== (o = `
        background-color: ${/*background*/
      c[13]};
        border-radius: ${/*border_radius*/
      c[2]};
        color: ${/*text_color*/
      c[6]};
        opacity: ${/*opacity*/
      c[4]}%!important;
        height: ${/*height*/
      c[0]};
        width: ${/*width*/
      c[1]};
`) && m(r, "style", o);
    },
    d(c) {
      c && it(r), s.d();
    }
  };
}
function Ee(l) {
  let r, e, i, t, n, o, a;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "An unknown error", i = W(), t = b("button"), n = G("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), kt(
        t,
        "background-color",
        /*button_color*/
        l[7]
      ), kt(
        t,
        "color",
        /*text_color*/
        l[6]
      ), m(r, "class", "flex flex-col items-center");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, i), p(r, t), p(t, n), o || (a = Jt(
        t,
        "click",
        /*click_handler_2*/
        l[39]
      ), o = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      128 && kt(
        t,
        "background-color",
        /*button_color*/
        u[7]
      ), s[0] & /*text_color*/
      64 && kt(
        t,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && it(r), o = !1, a();
    }
  };
}
function Ae(l) {
  let r, e, i, t, n, o, a, u, s, c, f;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "Error", i = W(), t = b("p"), n = G(
        /*error*/
        l[10]
      ), o = W(), a = b("div"), u = b("button"), s = G("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        l[14]
      ), m(a, "class", "w-full mt-auto"), m(r, "class", "flex flex-col items-center h-full");
    },
    m(d, h) {
      ut(d, r, h), p(r, e), p(r, i), p(r, t), p(t, n), p(r, o), p(r, a), p(a, u), p(u, s), c || (f = Jt(
        u,
        "click",
        /*click_handler_1*/
        l[38]
      ), c = !0);
    },
    p(d, h) {
      h[0] & /*error*/
      1024 && _t(
        n,
        /*error*/
        d[10]
      ), h[0] & /*button_style*/
      16384 && m(
        u,
        "style",
        /*button_style*/
        d[14]
      );
    },
    d(d) {
      d && it(r), c = !1, f();
    }
  };
}
function Te(l) {
  let r, e, i, t, n, o, a = (
    /*backendData*/
    l[8].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, c, f, d, h = (
    /*backendData*/
    l[8].data[0].third_party_spread + ""
  ), y, S, v, k, E, P = (
    /*backendData*/
    l[8].data[0].sold_ccy + ""
  ), N, C, j = (
    /*backendData*/
    l[8].data[0].third_party_profit.toFixed(4) + ""
  ), g, _, M, w, T, D, F, R, K, I = (
    /*backendData*/
    l[8].data[0].integritas_rate.toFixed(4) + ""
  ), Y, U, V, z, B, st, $, at, et, q = (
    /*shouldShowInterbankRate*/
    l[17] && oe(l)
  ), H = (
    /*backendData*/
    l[8].data[0].integritas_savings > 50 && ne(l)
  );
  return {
    c() {
      r = b("div"), e = b("div"), i = b("h1"), i.textContent = "Your Provider", t = W(), n = b("p"), o = G(`Your exchange rate
                        was `), u = G(a), s = W(), q && q.c(), c = W(), f = b("p"), d = G("Your provider's markup was "), y = G(h), S = G("%"), v = W(), k = b("p"), E = G(`Your provider
                        charged `), N = G(P), C = W(), g = G(j), _ = G(` on
                        this trade`), M = W(), w = b("div"), T = b("h1"), D = G(
        /*name*/
        l[5]
      ), F = W(), R = b("p"), K = G("Our exchange rate was "), Y = G(I), U = W(), H && H.c(), V = W(), z = b("div"), B = b("button"), st = G("Calculate again"), m(i, "class", "text-2xl"), m(n, "class", "text-sm"), m(f, "class", "text-sm"), m(k, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(T, "class", "text-2xl mt-4"), m(R, "class", "text-sm"), m(w, "class", "flex flex-col gap-2"), m(r, "class", "flex flex-col divide-y gap-4"), kt(r, "height", "95%"), m(B, "class", "px-6 py-3"), m(B, "style", $ = `${/*button_style*/
      l[14]} margin-bottom: 1.5rem;`), m(z, "class", "w-full");
    },
    m(L, Q) {
      ut(L, r, Q), p(r, e), p(e, i), p(e, t), p(e, n), p(n, o), p(n, u), p(e, s), q && q.m(e, null), p(e, c), p(e, f), p(f, d), p(f, y), p(f, S), p(e, v), p(e, k), p(k, E), p(k, N), p(k, C), p(k, g), p(k, _), p(r, M), p(r, w), p(w, T), p(T, D), p(w, F), p(w, R), p(R, K), p(R, Y), p(w, U), H && H.m(w, null), ut(L, V, Q), ut(L, z, Q), p(z, B), p(B, st), at || (et = Jt(
        B,
        "click",
        /*click_handler*/
        l[37]
      ), at = !0);
    },
    p(L, Q) {
      Q[0] & /*backendData*/
      256 && a !== (a = /*backendData*/
      L[8].data[0].third_party_exchange_rate.toFixed(4) + "") && _t(u, a), /*shouldShowInterbankRate*/
      L[17] ? q ? q.p(L, Q) : (q = oe(L), q.c(), q.m(e, c)) : q && (q.d(1), q = null), Q[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      L[8].data[0].third_party_spread + "") && _t(y, h), Q[0] & /*backendData*/
      256 && P !== (P = /*backendData*/
      L[8].data[0].sold_ccy + "") && _t(N, P), Q[0] & /*backendData*/
      256 && j !== (j = /*backendData*/
      L[8].data[0].third_party_profit.toFixed(4) + "") && _t(g, j), Q[0] & /*name*/
      32 && _t(
        D,
        /*name*/
        L[5]
      ), Q[0] & /*backendData*/
      256 && I !== (I = /*backendData*/
      L[8].data[0].integritas_rate.toFixed(4) + "") && _t(Y, I), /*backendData*/
      L[8].data[0].integritas_savings > 50 ? H ? H.p(L, Q) : (H = ne(L), H.c(), H.m(w, null)) : H && (H.d(1), H = null), Q[0] & /*button_style*/
      16384 && $ !== ($ = `${/*button_style*/
      L[14]} margin-bottom: 1.5rem;`) && m(B, "style", $);
    },
    d(L) {
      L && it(r), q && q.d(), H && H.d(), L && it(V), L && it(z), at = !1, et();
    }
  };
}
function Ne(l) {
  let r, e, i, t, n, o, a, u, s, c, f, d, h, y, S, v, k, E, P, N, C, j, g, _, M, w, T, D, F, R, K, I, Y, U, V, z, B, st, $, at, et, q, H, L, Q, Mt, dt, O, rt, ot, bt, St, Z, gt, wt, xt, ht, mt, x, A, J, X, lt, ft, yt, Dt, Ot, Et, At, Tt, qt, Ut, Rt, It, Vt, ct = (
    /*shouldShowEmail*/
    l[16] && re(l)
  );
  function Qt(nt, pt) {
    return (
      /*isFetching*/
      nt[11] ? je : Fe
    );
  }
  let Yt = Qt(l), vt = Yt(l);
  return {
    c() {
      r = b("form"), e = b("div"), i = b("div"), t = b("div"), n = b("label"), n.textContent = "Select Date", o = W(), a = b("input"), u = W(), s = b("div"), c = b("label"), c.textContent = "Select Time", f = W(), d = b("input"), h = W(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = W(), E = b("input"), P = W(), N = b("div"), C = b("label"), j = G("Sell Currency"), g = W(), _ = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", D = b("option"), D.textContent = "JPY", F = b("option"), F.textContent = "CHF", R = b("option"), R.textContent = "CNY", K = b("option"), K.textContent = "NZD", I = b("option"), I.textContent = "SGD", Y = b("option"), Y.textContent = "INR", U = b("option"), U.textContent = "AUD", V = b("option"), V.textContent = "CAD", z = b("option"), z.textContent = "HKD", B = b("option"), B.textContent = "MYR", st = b("option"), st.textContent = "NOK", $ = b("option"), $.textContent = "ZAR", at = b("option"), at.textContent = "RUB", et = b("option"), et.textContent = "SEK", q = W(), H = b("div"), L = b("div"), Q = b("label"), Q.textContent = "Buy Amount", Mt = W(), dt = b("input"), O = W(), rt = b("div"), ot = b("label"), bt = G("Buy Currency"), St = W(), Z = b("select"), gt = b("option"), gt.textContent = "USD", wt = b("option"), wt.textContent = "GBP", xt = b("option"), xt.textContent = "EUR", ht = b("option"), ht.textContent = "JPY", mt = b("option"), mt.textContent = "CHF", x = b("option"), x.textContent = "CNY", A = b("option"), A.textContent = "NZD", J = b("option"), J.textContent = "SGD", X = b("option"), X.textContent = "INR", lt = b("option"), lt.textContent = "AUD", ft = b("option"), ft.textContent = "CAD", yt = b("option"), yt.textContent = "HKD", Dt = b("option"), Dt.textContent = "MYR", Ot = b("option"), Ot.textContent = "NOK", Et = b("option"), Et.textContent = "ZAR", At = b("option"), At.textContent = "RUB", Tt = b("option"), Tt.textContent = "SEK", qt = W(), ct && ct.c(), Ut = W(), Rt = b("div"), vt.c(), m(n, "for", "date"), m(a, "id", "date"), m(a, "type", "date"), m(a, "class", "w-full rounded-md px-3 py-2 mt-4"), m(a, "name", "date"), m(a, "placeholder", "Select date"), a.required = !0, m(
        a,
        "style",
        /*input_style*/
        l[15]
      ), m(t, "class", "w-full"), m(c, "for", "time"), m(d, "id", "time"), m(d, "type", "time"), m(d, "class", "w-full rounded-md px-3 py-2 mt-4"), m(d, "name", "time"), m(d, "placeholder", "Select Time"), d.required = !0, m(
        d,
        "style",
        /*input_style*/
        l[15]
      ), m(s, "class", "w-full"), m(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(v, "for", "sold_notional"), m(E, "id", "sold_notional"), m(E, "type", "number"), m(E, "step", ".01"), m(E, "class", "w-full rounded-md px-3 py-2 mt-4"), m(E, "name", "sold_notional"), m(E, "placeholder", "10000"), E.required = !0, m(
        E,
        "style",
        /*input_style*/
        l[15]
      ), m(S, "class", "w-full"), m(C, "for", "sold_ccy"), kt(
        C,
        "color",
        /*text_color*/
        l[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, D.__value = "JPY", D.value = D.__value, F.__value = "CHF", F.value = F.__value, R.__value = "CNY", R.value = R.__value, K.__value = "NZD", K.value = K.__value, I.__value = "SGD", I.value = I.__value, Y.__value = "INR", Y.value = Y.__value, U.__value = "AUD", U.value = U.__value, V.__value = "CAD", V.value = V.__value, z.__value = "HKD", z.value = z.__value, B.__value = "MYR", B.value = B.__value, st.__value = "NOK", st.value = st.__value, $.__value = "ZAR", $.value = $.__value, at.__value = "RUB", at.value = at.__value, et.__value = "SEK", et.value = et.__value, m(_, "name", "sold_ccy"), m(_, "id", "sold_ccy"), m(_, "class", "w-full rounded-md px-3 py-2 mt-4"), _.required = !0, m(
        _,
        "style",
        /*input_style*/
        l[15]
      ), m(N, "class", "w-full"), m(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(Q, "for", "bought_notional"), m(dt, "id", "bought_notional"), m(dt, "type", "number"), m(dt, "step", ".01"), m(dt, "class", "w-full rounded-md px-3 py-2 mt-4"), m(dt, "name", "bought_notional"), m(dt, "placeholder", "10000"), dt.required = !0, m(
        dt,
        "style",
        /*input_style*/
        l[15]
      ), m(L, "class", "w-full"), m(ot, "for", "bought_ccy"), kt(
        ot,
        "color",
        /*text_color*/
        l[6]
      ), gt.selected = !0, gt.__value = "USD", gt.value = gt.__value, wt.__value = "GBP", wt.value = wt.__value, xt.__value = "EUR", xt.value = xt.__value, ht.__value = "JPY", ht.value = ht.__value, mt.__value = "CHF", mt.value = mt.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, J.__value = "SGD", J.value = J.__value, X.__value = "INR", X.value = X.__value, lt.__value = "AUD", lt.value = lt.__value, ft.__value = "CAD", ft.value = ft.__value, yt.__value = "HKD", yt.value = yt.__value, Dt.__value = "MYR", Dt.value = Dt.__value, Ot.__value = "NOK", Ot.value = Ot.__value, Et.__value = "ZAR", Et.value = Et.__value, At.__value = "RUB", At.value = At.__value, Tt.__value = "SEK", Tt.value = Tt.__value, m(Z, "name", "bought_ccy"), m(Z, "id", "bought_ccy"), m(Z, "class", "w-full rounded-md px-3 py-2 mt-4"), Z.required = !0, m(
        Z,
        "style",
        /*input_style*/
        l[15]
      ), m(rt, "class", "w-full"), m(H, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m(nt, pt) {
      ut(nt, r, pt), p(r, e), p(e, i), p(i, t), p(t, n), p(t, o), p(t, a), p(i, u), p(i, s), p(s, c), p(s, f), p(s, d), p(e, h), p(e, y), p(y, S), p(S, v), p(S, k), p(S, E), p(y, P), p(y, N), p(N, C), p(C, j), p(N, g), p(N, _), p(_, M), p(_, w), p(_, T), p(_, D), p(_, F), p(_, R), p(_, K), p(_, I), p(_, Y), p(_, U), p(_, V), p(_, z), p(_, B), p(_, st), p(_, $), p(_, at), p(_, et), p(e, q), p(e, H), p(H, L), p(L, Q), p(L, Mt), p(L, dt), p(H, O), p(H, rt), p(rt, ot), p(ot, bt), p(rt, St), p(rt, Z), p(Z, gt), p(Z, wt), p(Z, xt), p(Z, ht), p(Z, mt), p(Z, x), p(Z, A), p(Z, J), p(Z, X), p(Z, lt), p(Z, ft), p(Z, yt), p(Z, Dt), p(Z, Ot), p(Z, Et), p(Z, At), p(Z, Tt), p(e, qt), ct && ct.m(e, null), p(e, Ut), p(e, Rt), vt.m(Rt, null), It || (Vt = Jt(
        r,
        "submit",
        /*handleFormSubmit*/
        l[19]
      ), It = !0);
    },
    p(nt, pt) {
      pt[0] & /*input_style*/
      32768 && m(
        a,
        "style",
        /*input_style*/
        nt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        d,
        "style",
        /*input_style*/
        nt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        E,
        "style",
        /*input_style*/
        nt[15]
      ), pt[0] & /*text_color*/
      64 && kt(
        C,
        "color",
        /*text_color*/
        nt[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        _,
        "style",
        /*input_style*/
        nt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        dt,
        "style",
        /*input_style*/
        nt[15]
      ), pt[0] & /*text_color*/
      64 && kt(
        ot,
        "color",
        /*text_color*/
        nt[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        Z,
        "style",
        /*input_style*/
        nt[15]
      ), /*shouldShowEmail*/
      nt[16] ? ct ? ct.p(nt, pt) : (ct = re(nt), ct.c(), ct.m(e, Ut)) : ct && (ct.d(1), ct = null), Yt === (Yt = Qt(nt)) && vt ? vt.p(nt, pt) : (vt.d(1), vt = Yt(nt), vt && (vt.c(), vt.m(Rt, null)));
    },
    d(nt) {
      nt && it(r), ct && ct.d(), vt.d(), It = !1, Vt();
    }
  };
}
function oe(l) {
  let r, e, i = (
    /*backendData*/
    l[8].data[0].ccy_pair + ""
  ), t, n, o = (
    /*backendData*/
    l[8].data[0].mid_market_rate.toFixed(4) + ""
  ), a;
  return {
    c() {
      r = b("p"), e = G("The interbank rate "), t = G(i), n = G(`
                            was `), a = G(o), m(r, "class", "text-sm");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, t), p(r, n), p(r, a);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      u[8].data[0].ccy_pair + "") && _t(t, i), s[0] & /*backendData*/
      256 && o !== (o = /*backendData*/
      u[8].data[0].mid_market_rate.toFixed(4) + "") && _t(a, o);
    },
    d(u) {
      u && it(r);
    }
  };
}
function ne(l) {
  let r, e, i = (
    /*backendData*/
    l[8].data[0].sold_ccy + ""
  ), t, n, o = (
    /*backendData*/
    l[8].data[0].integritas_savings.toFixed(4) + ""
  ), a;
  return {
    c() {
      r = b("p"), e = G(`We would've saved
                            you `), t = G(i), n = W(), a = G(o), m(r, "class", "text-sm");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, t), p(r, n), p(r, a);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      u[8].data[0].sold_ccy + "") && _t(t, i), s[0] & /*backendData*/
      256 && o !== (o = /*backendData*/
      u[8].data[0].integritas_savings.toFixed(4) + "") && _t(a, o);
    },
    d(u) {
      u && it(r);
    }
  };
}
function re(l) {
  let r, e, i, t, n;
  return {
    c() {
      r = b("div"), e = b("div"), i = b("label"), i.textContent = "Email", t = W(), n = b("input"), m(i, "for", "user"), m(n, "id", "user"), m(n, "type", "email"), m(n, "class", "w-full rounded-md px-3 py-2 mt-4"), m(n, "name", "user"), m(n, "placeholder", "JohnDoe@email.com"), n.required = !0, m(
        n,
        "style",
        /*input_style*/
        l[15]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(o, a) {
      ut(o, r, a), p(r, e), p(e, i), p(e, t), p(e, n);
    },
    p(o, a) {
      a[0] & /*input_style*/
      32768 && m(
        n,
        "style",
        /*input_style*/
        o[15]
      );
    },
    d(o) {
      o && it(r);
    }
  };
}
function je(l) {
  let r, e, i, t, n, o, a;
  return {
    c() {
      r = b("div"), e = b("div"), i = b("button"), t = zt("svg"), n = zt("path"), o = zt("path"), a = G(`
                                        Loading...`), m(n, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(n, "fill", "#E5E7EB"), m(o, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(o, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), i.disabled = !0, m(i, "type", "button"), m(i, "class", "px-6 py-3 mt-6 text-center inline-flex items-center"), m(
        i,
        "style",
        /*button_style*/
        l[14]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(e, i), p(i, t), p(t, n), p(t, o), p(i, a);
    },
    p(u, s) {
      s[0] & /*button_style*/
      16384 && m(
        i,
        "style",
        /*button_style*/
        u[14]
      );
    },
    d(u) {
      u && it(r);
    }
  };
}
function Fe(l) {
  let r, e, i, t;
  return {
    c() {
      r = b("div"), e = b("div"), i = b("button"), t = G("See your charges"), m(i, "type", "submit"), m(i, "class", "px-6 py-3 mt-6"), m(
        i,
        "style",
        /*button_style*/
        l[14]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, o) {
      ut(n, r, o), p(r, e), p(e, i), p(i, t);
    },
    p(n, o) {
      o[0] & /*button_style*/
      16384 && m(
        i,
        "style",
        /*button_style*/
        n[14]
      );
    },
    d(n) {
      n && it(r);
    }
  };
}
function Pe(l) {
  let r, e;
  return {
    c() {
      r = b("p"), e = G(
        /*statusCheckError*/
        l[12]
      ), m(r, "class", "text-sm");
    },
    m(i, t) {
      ut(i, r, t), p(r, e);
    },
    p(i, t) {
      t[0] & /*statusCheckError*/
      4096 && _t(
        e,
        /*statusCheckError*/
        i[12]
      );
    },
    d(i) {
      i && it(r);
    }
  };
}
function Le(l) {
  let r;
  return {
    c() {
      r = b("div"), r.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(e, i) {
      ut(e, r, i);
    },
    p: Ct,
    d(e) {
      e && it(r);
    }
  };
}
function Re(l) {
  let r, e, i;
  function t(a, u) {
    return (
      /*statusCheckError*/
      a[12] ? Oe : De
    );
  }
  let n = t(l), o = n(l);
  return {
    c() {
      r = b("link"), e = W(), o.c(), i = ce(), this.c = Ct, m(r, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(r, "rel", "stylesheet");
    },
    m(a, u) {
      p(document.head, r), ut(a, e, u), o.m(a, u), ut(a, i, u);
    },
    p(a, u) {
      n === (n = t(a)) && o ? o.p(a, u) : (o.d(1), o = n(a), o && (o.c(), o.m(i.parentNode, i)));
    },
    i: Ct,
    o: Ct,
    d(a) {
      it(r), a && it(e), o.d(a), a && it(i);
    }
  };
}
const ie = "http://localhost:8000", ue = "CORS_ERROR";
function Ye(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function He(l, r, e) {
  let i, t, n, o, a, u, { mode: s = "auto" } = r, { height: c = "100%" } = r, { width: f = "100%" } = r, { light_mode_background: d = "#ffffff" } = r, { dark_mode_background: h = "#1f2937" } = r, { light_mode_text_color: y = "#1f2937" } = r, { dark_mode_text_color: S = "#f9fafb" } = r, { dark_mode_input_background: v = "#374151" } = r, { light_mode_input_background: k = "#f9fafb" } = r, { dark_mode_button_color: E = "#374151" } = r, { light_mode_button_color: P = "#f9fafb" } = r, { light_mode_border_color: N = "#D1D5DB" } = r, { dark_mode_border_color: C = "#374151" } = r, { border_radius: j = "15px" } = r, { input_border_radius: g = "5" } = r, { shadow: _ = "md" } = r, { opacity: M = 100 } = r, { name: w = "Our Results" } = r, { show_interbank_rate: T = "false" } = r, { show_email_input: D = "true" } = r;
  function F() {
    const O = new XMLHttpRequest();
    O.open("GET", `${ie}/`, !0), O.onerror = function() {
      O.status === 0 ? e(12, V = ue) : e(12, V = "We're sorry, our servers are currently down. Please try again later.");
    }, O.send();
  }
  const R = async (O) => fetch(`${ie}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(O)
  });
  he(() => {
    F();
  });
  let K, I = !0, Y, U = !1, V;
  const z = () => {
    e(8, K = void 0), e(9, I = !0), e(10, Y = !1), e(11, U = !1);
  }, B = async (O) => {
    e(9, I = !1), e(11, U = !0), e(10, Y = void 0);
    try {
      const rt = await R(O);
      if (!rt.ok) {
        const bt = await rt.json();
        throw console.log("errorRes", bt), new Error(bt || `HTTP error! Status: ${rt.status}`);
      }
      const ot = await rt.json();
      e(11, U = !1), e(10, Y = void 0), e(9, I = !1), e(8, K = ot);
    } catch (rt) {
      e(11, U = !1), e(10, Y = rt.message), e(9, I = !1), e(8, K = void 0);
    }
  }, st = async (O) => {
    O.preventDefault();
    const rt = new FormData(O.target), ot = {};
    for (let bt of rt) {
      const [St, Z] = bt;
      ot[St] = Z;
    }
    ot.prospect = "", ot.input_spread = "0.2", ot.prospect_annual_flow = "", ot.email_user = !1, i || (ot.user = "testUserWithoutMail@gmail.com"), console.log(ot), B(ot);
  }, $ = (O) => {
    e(36, n = O.matches);
  }, at = window.matchMedia("(prefers-color-scheme: dark)");
  at.addEventListener("change", $), me(() => {
    at.removeEventListener("change", $);
  });
  let et, q, H, L;
  const Q = () => z(), Mt = (O) => z(), dt = (O) => z();
  return l.$$set = (O) => {
    "mode" in O && e(20, s = O.mode), "height" in O && e(0, c = O.height), "width" in O && e(1, f = O.width), "light_mode_background" in O && e(21, d = O.light_mode_background), "dark_mode_background" in O && e(22, h = O.dark_mode_background), "light_mode_text_color" in O && e(23, y = O.light_mode_text_color), "dark_mode_text_color" in O && e(24, S = O.dark_mode_text_color), "dark_mode_input_background" in O && e(25, v = O.dark_mode_input_background), "light_mode_input_background" in O && e(26, k = O.light_mode_input_background), "dark_mode_button_color" in O && e(27, E = O.dark_mode_button_color), "light_mode_button_color" in O && e(28, P = O.light_mode_button_color), "light_mode_border_color" in O && e(29, N = O.light_mode_border_color), "dark_mode_border_color" in O && e(30, C = O.dark_mode_border_color), "border_radius" in O && e(2, j = O.border_radius), "input_border_radius" in O && e(31, g = O.input_border_radius), "shadow" in O && e(3, _ = O.shadow), "opacity" in O && e(4, M = O.opacity), "name" in O && e(5, w = O.name), "show_interbank_rate" in O && e(32, T = O.show_interbank_rate), "show_email_input" in O && e(33, D = O.show_email_input);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*show_email_input*/
    4 && e(16, i = D === "true"), l.$$.dirty[1] & /*show_interbank_rate*/
    2 && e(17, t = T === "true"), l.$$.dirty[0] & /*mode*/
    1048576 && e(36, n = Ye(s)), l.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | l.$$.dirty[1] & /*isDarkMode*/
    32 && e(13, et = n ? h : d), l.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | l.$$.dirty[1] & /*isDarkMode*/
    32 && e(6, q = n ? S : y), l.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | l.$$.dirty[1] & /*isDarkMode*/
    32 && e(34, H = n ? v : k), l.$$.dirty[0] & /*dark_mode_border_color, light_mode_border_color*/
    1610612736 | l.$$.dirty[1] & /*isDarkMode*/
    32 && e(35, o = n ? C : N), l.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | l.$$.dirty[1] & /*isDarkMode*/
    32 && e(7, L = n ? E : P), l.$$.dirty[0] & /*text_color*/
    64 | l.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    25 && e(15, a = `
    background-color: ${H};
    color: ${q};
    border-width: 1px;
    border-color: ${o};
    border-radius: ${g}px;
    `), l.$$.dirty[0] & /*button_color, text_color*/
    192 | l.$$.dirty[1] & /*input_border_color, input_border_radius*/
    17 && e(14, u = `
    width: 100%;
    background-color: ${L};
    color: ${q};
    border-width: 1px;
    border-color: ${o};
    border-radius: ${g}px;
    `);
  }, [
    c,
    f,
    j,
    _,
    M,
    w,
    q,
    L,
    K,
    I,
    Y,
    U,
    V,
    et,
    u,
    a,
    i,
    t,
    z,
    st,
    s,
    d,
    h,
    y,
    S,
    v,
    k,
    E,
    P,
    N,
    C,
    g,
    T,
    D,
    H,
    o,
    n,
    Q,
    Mt,
    dt
  ];
}
class Je extends le {
  constructor(r) {
    super(), this.shadowRoot.innerHTML = `<style>*{font-family:'Inter', sans-serif}.pb-6{padding-bottom:1.5rem}.h-full{height:100%}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}.mt-auto{margin-top:auto}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
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
    }.p-12{padding:3rem}.px-3{padding-left:0.75rem;padding-right:0.75rem
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
        }}</style>`, Me(
      this,
      {
        target: this.shadowRoot,
        props: pe(this.attributes),
        customElement: !0
      },
      He,
      Re,
      se,
      {
        mode: 20,
        height: 0,
        width: 1,
        light_mode_background: 21,
        dark_mode_background: 22,
        light_mode_text_color: 23,
        dark_mode_text_color: 24,
        dark_mode_input_background: 25,
        light_mode_input_background: 26,
        dark_mode_button_color: 27,
        light_mode_button_color: 28,
        light_mode_border_color: 29,
        dark_mode_border_color: 30,
        border_radius: 2,
        input_border_radius: 31,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 32,
        show_email_input: 33
      },
      null,
      [-1, -1]
    ), r && (r.target && ut(r.target, this, r.anchor), r.props && (this.$set(r.props), tt()));
  }
  static get observedAttributes() {
    return [
      "mode",
      "height",
      "width",
      "light_mode_background",
      "dark_mode_background",
      "light_mode_text_color",
      "dark_mode_text_color",
      "dark_mode_input_background",
      "light_mode_input_background",
      "dark_mode_button_color",
      "light_mode_button_color",
      "light_mode_border_color",
      "dark_mode_border_color",
      "border_radius",
      "input_border_radius",
      "shadow",
      "opacity",
      "name",
      "show_interbank_rate",
      "show_email_input"
    ];
  }
  get mode() {
    return this.$$.ctx[20];
  }
  set mode(r) {
    this.$$set({ mode: r }), tt();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(r) {
    this.$$set({ height: r }), tt();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(r) {
    this.$$set({ width: r }), tt();
  }
  get light_mode_background() {
    return this.$$.ctx[21];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), tt();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), tt();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), tt();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), tt();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), tt();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), tt();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), tt();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), tt();
  }
  get light_mode_border_color() {
    return this.$$.ctx[29];
  }
  set light_mode_border_color(r) {
    this.$$set({ light_mode_border_color: r }), tt();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[30];
  }
  set dark_mode_border_color(r) {
    this.$$set({ dark_mode_border_color: r }), tt();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), tt();
  }
  get input_border_radius() {
    return this.$$.ctx[31];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), tt();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), tt();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(r) {
    this.$$set({ opacity: r }), tt();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(r) {
    this.$$set({ name: r }), tt();
  }
  get show_interbank_rate() {
    return this.$$.ctx[32];
  }
  set show_interbank_rate(r) {
    this.$$set({ show_interbank_rate: r }), tt();
  }
  get show_email_input() {
    return this.$$.ctx[33];
  }
  set show_email_input(r) {
    this.$$set({ show_email_input: r }), tt();
  }
}
customElements.define("spreadm8-calc", Je);
export {
  Je as Spreadm8Calc
};
