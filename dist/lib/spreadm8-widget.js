function Ct() {
}
function Gt(a) {
  return a();
}
function Xt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ft(a) {
  a.forEach(Gt);
}
function Kt(a) {
  return typeof a == "function";
}
function ue(a, r) {
  return a != a ? r == r : a !== r || a && typeof a == "object" || typeof a == "function";
}
function se(a) {
  return Object.keys(a).length === 0;
}
function p(a, r) {
  a.appendChild(r);
}
function ut(a, r, e) {
  a.insertBefore(r, e || null);
}
function it(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function b(a) {
  return document.createElement(a);
}
function zt(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function W(a) {
  return document.createTextNode(a);
}
function G() {
  return W(" ");
}
function de() {
  return W("");
}
function Jt(a, r, e, l) {
  return a.addEventListener(r, e, l), () => a.removeEventListener(r, e, l);
}
function m(a, r, e) {
  e == null ? a.removeAttribute(r) : a.getAttribute(r) !== e && a.setAttribute(r, e);
}
function ce(a) {
  return Array.from(a.childNodes);
}
function _t(a, r) {
  r = "" + r, a.wholeText !== r && (a.data = r);
}
function kt(a, r, e, l) {
  e === null ? a.style.removeProperty(r) : a.style.setProperty(r, e, l ? "important" : "");
}
function fe(a) {
  const r = {};
  for (const e of a)
    r[e.name] = e.value;
  return r;
}
let Pt;
function Rt(a) {
  Pt = a;
}
function ae() {
  if (!Pt)
    throw new Error("Function called outside component initialization");
  return Pt;
}
function pe(a) {
  ae().$$.on_mount.push(a);
}
function he(a) {
  ae().$$.on_destroy.push(a);
}
const Nt = [], $t = [], Ht = [], te = [], me = Promise.resolve();
let Zt = !1;
function _e() {
  Zt || (Zt = !0, me.then(et));
}
function Wt(a) {
  Ht.push(a);
}
const Bt = /* @__PURE__ */ new Set();
let jt = 0;
function et() {
  if (jt !== 0)
    return;
  const a = Pt;
  do {
    try {
      for (; jt < Nt.length; ) {
        const r = Nt[jt];
        jt++, Rt(r), ye(r.$$);
      }
    } catch (r) {
      throw Nt.length = 0, jt = 0, r;
    }
    for (Rt(null), Nt.length = 0, jt = 0; $t.length; )
      $t.pop()();
    for (let r = 0; r < Ht.length; r += 1) {
      const e = Ht[r];
      Bt.has(e) || (Bt.add(e), e());
    }
    Ht.length = 0;
  } while (Nt.length);
  for (; te.length; )
    te.pop()();
  Zt = !1, Bt.clear(), Rt(a);
}
function ye(a) {
  if (a.fragment !== null) {
    a.update(), Ft(a.before_update);
    const r = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, r), a.after_update.forEach(Wt);
  }
}
const be = /* @__PURE__ */ new Set();
function ge(a, r) {
  a && a.i && (be.delete(a), a.i(r));
}
function ve(a, r, e, l) {
  const { fragment: t, after_update: o } = a.$$;
  t && t.m(r, e), l || Wt(() => {
    const n = a.$$.on_mount.map(Gt).filter(Kt);
    a.$$.on_destroy ? a.$$.on_destroy.push(...n) : Ft(n), a.$$.on_mount = [];
  }), o.forEach(Wt);
}
function we(a, r) {
  const e = a.$$;
  e.fragment !== null && (Ft(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function xe(a, r) {
  a.$$.dirty[0] === -1 && (Nt.push(a), _e(), a.$$.dirty.fill(0)), a.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function ke(a, r, e, l, t, o, n, i = [-1]) {
  const u = Pt;
  Rt(a);
  const s = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
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
    dirty: i,
    skip_bound: !1,
    root: r.target || u.$$.root
  };
  n && n(s.root);
  let c = !1;
  if (s.ctx = e ? e(a, r.props || {}, (f, d, ...h) => {
    const y = h.length ? h[0] : d;
    return s.ctx && t(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), c && xe(a, f)), d;
  }) : [], s.update(), c = !0, Ft(s.before_update), s.fragment = l ? l(s.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = ce(r.target);
      s.fragment && s.fragment.l(f), f.forEach(it);
    } else
      s.fragment && s.fragment.c();
    r.intro && ge(a.$$.fragment), ve(a, r.target, r.anchor, r.customElement), et();
  }
  Rt(u);
}
let le;
typeof HTMLElement == "function" && (le = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: a } = this.$$;
    this.$$.on_disconnect = a.map(Gt).filter(Kt);
    for (const r in this.$$.slotted)
      this.appendChild(this.$$.slotted[r]);
  }
  attributeChangedCallback(a, r, e) {
    this[a] = e;
  }
  disconnectedCallback() {
    Ft(this.$$.on_disconnect);
  }
  $destroy() {
    we(this, 1), this.$destroy = Ct;
  }
  $on(a, r) {
    if (!Kt(r))
      return Ct;
    const e = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return e.push(r), () => {
      const l = e.indexOf(r);
      l !== -1 && e.splice(l, 1);
    };
  }
  $set(a) {
    this.$$set && !se(a) && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
  }
});
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ee = {}, Ce = {
  get exports() {
    return ee;
  },
  set exports(a) {
    ee = a;
  }
};
(function(a, r) {
  (function(e, l) {
    a.exports = l();
  })(Me, function() {
    return function(e) {
      function l(o) {
        if (t[o])
          return t[o].exports;
        var n = t[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(n.exports, n, n.exports, l), n.loaded = !0, n.exports;
      }
      var t = {};
      return l.m = e, l.c = t, l.p = "", l(0);
    }([function(e, l, t) {
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      t(84);
      var n = t(41), i = o(n), u = function() {
        i.default.addPickerToOtherInputs(), i.default.supportsDateInput() || i.default.addPickerToDateInputs();
      };
      u(), document.addEventListener("DOMContentLoaded", function() {
        u();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        u();
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
      e.exports = function(o, n) {
        return t.call(o, n);
      };
    }, function(e, l, t) {
      var o = t(9), n = t(32), i = t(25), u = Object.defineProperty;
      l.f = t(1) ? Object.defineProperty : function(s, c, f) {
        if (o(s), c = i(c, !0), o(f), n)
          try {
            return u(s, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[c] = f.value), s;
      };
    }, function(e, l, t) {
      var o = t(59), n = t(16);
      e.exports = function(i) {
        return o(n(i));
      };
    }, function(e, l, t) {
      var o = t(4), n = t(14);
      e.exports = t(1) ? function(i, u, s) {
        return o.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(e, l, t) {
      var o = t(23)("wks"), n = t(15), i = t(2).Symbol, u = typeof i == "function", s = e.exports = function(c) {
        return o[c] || (o[c] = u && i[c] || (u ? i : n)("Symbol." + c));
      };
      s.store = o;
    }, function(e, l) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, l, t) {
      var o = t(12);
      e.exports = function(n) {
        if (!o(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(e, l, t) {
      var o = t(2), n = t(8), i = t(56), u = t(6), s = "prototype", c = function(f, d, h) {
        var y, S, v, k = f & c.F, O = f & c.G, P = f & c.S, j = f & c.P, C = f & c.B, N = f & c.W, g = O ? n : n[d] || (n[d] = {}), _ = g[s], M = O ? o : P ? o[d] : (o[d] || {})[s];
        O && (h = d);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = O && typeof M[y] != "function" ? h[y] : C && S ? i(v, o) : N && M[y] == v ? function(w) {
            var T = function(D, R, L) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(D);
                  case 2:
                    return new w(D, R);
                }
                return new w(D, R, L);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : j && typeof v == "function" ? i(Function.call, v) : v, j && ((g.virtual || (g.virtual = {}))[y] = v, f & c.R && _ && !_[y] && u(_, y, v)));
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
      var o = t(38), n = t(17);
      e.exports = Object.keys || function(i) {
        return o(i, n);
      };
    }, function(e, l) {
      e.exports = function(t, o) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: o };
      };
    }, function(e, l) {
      var t = 0, o = Math.random();
      e.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++t + o).toString(36));
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
      var o = t(4).f, n = t(3), i = t(7)("toStringTag");
      e.exports = function(u, s, c) {
        u && !n(u = c ? u : u.prototype, i) && o(u, i, { configurable: !0, value: s });
      };
    }, function(e, l, t) {
      var o = t(23)("keys"), n = t(15);
      e.exports = function(i) {
        return o[i] || (o[i] = n(i));
      };
    }, function(e, l, t) {
      var o = t(2), n = "__core-js_shared__", i = o[n] || (o[n] = {});
      e.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(e, l) {
      var t = Math.ceil, o = Math.floor;
      e.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? o : t)(n);
      };
    }, function(e, l, t) {
      var o = t(12);
      e.exports = function(n, i) {
        if (!o(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !o(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !o(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !o(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, l, t) {
      var o = t(2), n = t(8), i = t(19), u = t(27), s = t(4).f;
      e.exports = function(c) {
        var f = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {});
        c.charAt(0) == "_" || c in f || s(f, c, { value: u.f(c) });
      };
    }, function(e, l, t) {
      l.f = t(7);
    }, function(e, l) {
      l.__esModule = !0, l.default = function(t, o) {
        if (!(t instanceof o))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, l, t) {
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      l.__esModule = !0;
      var n = t(45), i = o(n);
      l.default = function() {
        function u(s, c) {
          for (var f = 0; f < c.length; f++) {
            var d = c[f];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), (0, i.default)(s, d.key, d);
          }
        }
        return function(s, c, f) {
          return c && u(s.prototype, c), f && u(s, f), s;
        };
      }();
    }, function(e, l) {
      var t = {}.toString;
      e.exports = function(o) {
        return t.call(o).slice(8, -1);
      };
    }, function(e, l, t) {
      var o = t(12), n = t(2).document, i = o(n) && o(n.createElement);
      e.exports = function(u) {
        return i ? n.createElement(u) : {};
      };
    }, function(e, l, t) {
      e.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, l, t) {
      var o = t(19), n = t(10), i = t(39), u = t(6), s = t(3), c = t(18), f = t(61), d = t(21), h = t(67), y = t(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", O = "values", P = function() {
        return this;
      };
      e.exports = function(j, C, N, g, _, M, w) {
        f(N, C, g);
        var T, D, R, L = function(tt) {
          if (!S && tt in U)
            return U[tt];
          switch (tt) {
            case k:
              return function() {
                return new N(this, tt);
              };
            case O:
              return function() {
                return new N(this, tt);
              };
          }
          return function() {
            return new N(this, tt);
          };
        }, K = C + " Iterator", I = _ == O, Y = !1, U = j.prototype, V = U[y] || U[v] || _ && U[_], z = V || L(_), B = _ ? I ? L("entries") : z : void 0, st = C == "Array" && U.entries || V;
        if (st && (R = h(st.call(new j())), R !== Object.prototype && (d(R, K, !0), o || s(R, y) || u(R, y, P))), I && V && V.name !== O && (Y = !0, z = function() {
          return V.call(this);
        }), o && !w || !S && !Y && U[y] || u(U, y, z), c[C] = z, c[K] = P, _)
          if (T = { values: I ? z : L(O), keys: M ? z : L(k), entries: B }, w)
            for (D in T)
              D in U || i(U, D, T[D]);
          else
            n(n.P + n.F * (S || Y), C, T);
        return T;
      };
    }, function(e, l, t) {
      var o = t(9), n = t(35), i = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", f = function() {
        var d, h = t(31)("iframe"), y = i.length, S = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", d = h.contentWindow.document, d.open(), d.write(S + "script" + v + "document.F=Object" + S + "/script" + v), d.close(), f = d.F; y--; )
          delete f[c][i[y]];
        return f();
      };
      e.exports = Object.create || function(d, h) {
        var y;
        return d !== null ? (s[c] = o(d), y = new s(), s[c] = null, y[u] = d) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(e, l, t) {
      var o = t(4), n = t(9), i = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var c, f = i(s), d = f.length, h = 0; d > h; )
          o.f(u, c = f[h++], s[c]);
        return u;
      };
    }, function(e, l, t) {
      var o = t(38), n = t(17).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(i) {
        return o(i, n);
      };
    }, function(e, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(e, l, t) {
      var o = t(3), n = t(5), i = t(55)(!1), u = t(22)("IE_PROTO");
      e.exports = function(s, c) {
        var f, d = n(s), h = 0, y = [];
        for (f in d)
          f != u && o(d, f) && y.push(f);
        for (; c.length > h; )
          o(d, f = c[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(e, l, t) {
      e.exports = t(6);
    }, function(e, l, t) {
      function o(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function i(h) {
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
      Object.defineProperty(l, "__esModule", { value: !0 });
      var c = t(48), f = o(c), d = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, O, P) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(d.masks[k] || k || d.masks.default);
          var j = k.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (k = k.slice(4), O = !0, j === "GMT:" && (P = !0));
          var C = O ? "getUTC" : "get", N = v[C + "Date"](), g = v[C + "Day"](), _ = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), D = v[C + "Seconds"](), R = v[C + "Milliseconds"](), L = O ? 0 : v.getTimezoneOffset(), K = i(v), I = u(v), Y = { d: N, dd: n(N), ddd: d.i18n.dayNames[g], dddd: d.i18n.dayNames[g + 7], m: _ + 1, mm: n(_ + 1), mmm: d.i18n.monthNames[_], mmmm: d.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: D, ss: n(D), l: n(R, 3), L: n(Math.round(R / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: P ? "GMT" : O ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (L > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(L) / 60) + Math.abs(L) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: K, N: I };
          return k.replace(h, function(U) {
            return U in Y ? Y[U] : U.slice(1, U.length - 1);
          });
        };
      }();
      d.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, d.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = d;
    }, function(e, l, t) {
      function o(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(44), i = o(n), u = t(28), s = o(u), c = t(29), f = o(c), d = t(43), h = o(d), y = t(42), S = o(y), v = t(40), k = o(v), O = function() {
        function P(j) {
          var C = this;
          (0, s.default)(this, P), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
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
          var N = function(g) {
            var _ = C.element;
            _.locale = C.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(g) {
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
            new P(j[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var j = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var N = 0; N < C; ++N)
            new P(j[N]);
        } }]), P;
      }();
      l.default = O;
    }, function(e, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = t;
    }, function(e, l, t) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(28), i = o(n), u = t(29), s = o(u), c = function() {
        function f() {
          var d = this;
          if ((0, i.default)(this, f), window.thePicker)
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
            var O = d.days.querySelector("[data-selected]");
            O && O.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), d.date.setDate(parseInt(k.textContent)), d.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (d.isOpen) {
              for (var k = v.target, O = k === d.container || k === d.input; !O && (k = k.parentNode); )
                O = k === d.container;
              (v.target.getAttribute("type") !== "date" && !O || !O) && d.hide();
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
          }, O = y.right - v;
          y.right < v ? (O = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = O + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var d = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(d, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && d === v.getFullYear() && h === v.getMonth(), O = [], P = 0; P < S + y; ++P)
            if (P % 7 === 0 && O.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              O.push("<td></td>");
            else {
              var j = P + 1 - y, C = k && v.getDate() === j;
              O.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + j + `
        </td>`);
            }
          this.days.innerHTML = O.join("");
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
            var O = S ? S[v - h] : v;
            k.text = O, k.value = v;
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
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      l.__esModule = !0;
      var n = t(47), i = o(n), u = t(46), s = o(u), c = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      l.default = typeof s.default == "function" && c(i.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : c(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : c(f);
      };
    }, function(e, l, t) {
      t(73);
      var o = t(8).Object;
      e.exports = function(n, i) {
        return o.defineProperties(n, i);
      };
    }, function(e, l, t) {
      t(74);
      var o = t(8).Object;
      e.exports = function(n, i, u) {
        return o.defineProperty(n, i, u);
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
      var o = t(5), n = t(70), i = t(69);
      e.exports = function(u) {
        return function(s, c, f) {
          var d, h = o(s), y = n(h.length), S = i(f, y);
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
    }, function(e, l, t) {
      var o = t(53);
      e.exports = function(n, i, u) {
        if (o(n), i === void 0)
          return n;
        switch (u) {
          case 1:
            return function(s) {
              return n.call(i, s);
            };
          case 2:
            return function(s, c) {
              return n.call(i, s, c);
            };
          case 3:
            return function(s, c, f) {
              return n.call(i, s, c, f);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(e, l, t) {
      var o = t(13), n = t(37), i = t(20);
      e.exports = function(u) {
        var s = o(u), c = n.f;
        if (c)
          for (var f, d = c(u), h = i.f, y = 0; d.length > y; )
            h.call(u, f = d[y++]) && s.push(f);
        return s;
      };
    }, function(e, l, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, l, t) {
      var o = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return o(n) == "String" ? n.split("") : Object(n);
      };
    }, function(e, l, t) {
      var o = t(30);
      e.exports = Array.isArray || function(n) {
        return o(n) == "Array";
      };
    }, function(e, l, t) {
      var o = t(34), n = t(14), i = t(21), u = {};
      t(6)(u, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, c, f) {
        s.prototype = o(u, { next: n(1, f) }), i(s, c + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, o) {
        return { value: o, done: !!t };
      };
    }, function(e, l, t) {
      var o = t(13), n = t(5);
      e.exports = function(i, u) {
        for (var s, c = n(i), f = o(c), d = f.length, h = 0; d > h; )
          if (c[s = f[h++]] === u)
            return s;
      };
    }, function(e, l, t) {
      var o = t(15)("meta"), n = t(12), i = t(3), u = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), d = function(k) {
        u(k, o, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, O) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, o)) {
          if (!c(k))
            return "F";
          if (!O)
            return "E";
          d(k);
        }
        return k[o].i;
      }, y = function(k, O) {
        if (!i(k, o)) {
          if (!c(k))
            return !0;
          if (!O)
            return !1;
          d(k);
        }
        return k[o].w;
      }, S = function(k) {
        return f && v.NEED && c(k) && !i(k, o) && d(k), k;
      }, v = e.exports = { KEY: o, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(e, l, t) {
      var o = t(20), n = t(14), i = t(5), u = t(25), s = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? f : function(d, h) {
        if (d = i(d), h = u(h, !0), c)
          try {
            return f(d, h);
          } catch {
          }
        if (s(d, h))
          return n(!o.f.call(d, h), d[h]);
      };
    }, function(e, l, t) {
      var o = t(5), n = t(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(c) {
        try {
          return n(c);
        } catch {
          return u.slice();
        }
      };
      e.exports.f = function(c) {
        return u && i.call(c) == "[object Window]" ? s(c) : n(o(c));
      };
    }, function(e, l, t) {
      var o = t(3), n = t(71), i = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), o(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, l, t) {
      var o = t(24), n = t(16);
      e.exports = function(i) {
        return function(u, s) {
          var c, f, d = String(n(u)), h = o(s), y = d.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (c = d.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (f = d.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? d.charAt(h) : c : i ? d.slice(h, h + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(e, l, t) {
      var o = t(24), n = Math.max, i = Math.min;
      e.exports = function(u, s) {
        return u = o(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(e, l, t) {
      var o = t(24), n = Math.min;
      e.exports = function(i) {
        return i > 0 ? n(o(i), 9007199254740991) : 0;
      };
    }, function(e, l, t) {
      var o = t(16);
      e.exports = function(n) {
        return Object(o(n));
      };
    }, function(e, l, t) {
      var o = t(54), n = t(62), i = t(18), u = t(5);
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = u(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : c == "keys" ? n(0, f) : c == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, function(e, l, t) {
      var o = t(10);
      o(o.S + o.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, l, t) {
      var o = t(10);
      o(o.S + o.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, l) {
    }, function(e, l, t) {
      var o = t(68)(!0);
      t(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = o(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(e, l, t) {
      var o = t(2), n = t(3), i = t(1), u = t(10), s = t(39), c = t(64).KEY, f = t(11), d = t(23), h = t(21), y = t(15), S = t(7), v = t(27), k = t(26), O = t(63), P = t(57), j = t(60), C = t(9), N = t(5), g = t(25), _ = t(14), M = t(34), w = t(66), T = t(65), D = t(4), R = t(13), L = T.f, K = D.f, I = w.f, Y = o.Symbol, U = o.JSON, V = U && U.stringify, z = "prototype", B = S("_hidden"), st = S("toPrimitive"), tt = {}.propertyIsEnumerable, at = d("symbol-registry"), nt = d("symbols"), q = d("op-symbols"), H = Object[z], F = typeof Y == "function", X = o.QObject, Mt = !X || !X[z] || !X[z].findChild, dt = i && f(function() {
        return M(K({}, "a", { get: function() {
          return K(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, J) {
        var $ = L(H, A);
        $ && delete H[A], K(x, A, J), $ && x !== H && K(H, A, $);
      } : K, E = function(x) {
        var A = nt[x] = M(Y[z]);
        return A._k = x, A;
      }, Q = F && typeof Y.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof Y;
      }, ot = function(x, A, J) {
        return x === H && ot(q, A, J), C(x), A = g(A, !0), C(J), n(nt, A) ? (J.enumerable ? (n(x, B) && x[B][A] && (x[B][A] = !1), J = M(J, { enumerable: _(0, !1) })) : (n(x, B) || K(x, B, _(1, {})), x[B][A] = !0), dt(x, A, J)) : K(x, A, J);
      }, vt = function(x, A) {
        C(x);
        for (var J, $ = P(A = N(A)), lt = 0, ft = $.length; ft > lt; )
          ot(x, J = $[lt++], A[J]);
        return x;
      }, St = function(x, A) {
        return A === void 0 ? M(x) : vt(M(x), A);
      }, Z = function(x) {
        var A = tt.call(this, x = g(x, !0));
        return !(this === H && n(nt, x) && !n(q, x)) && (!(A || !n(this, x) || !n(nt, x) || n(this, B) && this[B][x]) || A);
      }, bt = function(x, A) {
        if (x = N(x), A = g(A, !0), x !== H || !n(nt, A) || n(q, A)) {
          var J = L(x, A);
          return !J || !n(nt, A) || n(x, B) && x[B][A] || (J.enumerable = !0), J;
        }
      }, wt = function(x) {
        for (var A, J = I(N(x)), $ = [], lt = 0; J.length > lt; )
          n(nt, A = J[lt++]) || A == B || A == c || $.push(A);
        return $;
      }, xt = function(x) {
        for (var A, J = x === H, $ = I(J ? q : N(x)), lt = [], ft = 0; $.length > ft; )
          !n(nt, A = $[ft++]) || J && !n(H, A) || lt.push(nt[A]);
        return lt;
      };
      F || (Y = function() {
        if (this instanceof Y)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(J) {
          this === H && A.call(q, J), n(this, B) && n(this[B], x) && (this[B][x] = !1), dt(this, x, _(1, J));
        };
        return i && Mt && dt(H, x, { configurable: !0, set: A }), E(x);
      }, s(Y[z], "toString", function() {
        return this._k;
      }), T.f = bt, D.f = ot, t(36).f = w.f = wt, t(20).f = Z, t(37).f = xt, i && !t(19) && s(H, "propertyIsEnumerable", Z, !0), v.f = function(x) {
        return E(S(x));
      }), u(u.G + u.W + u.F * !F, { Symbol: Y });
      for (var ht = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), mt = 0; ht.length > mt; )
        S(ht[mt++]);
      for (var ht = R(S.store), mt = 0; ht.length > mt; )
        k(ht[mt++]);
      u(u.S + u.F * !F, "Symbol", { for: function(x) {
        return n(at, x += "") ? at[x] : at[x] = Y(x);
      }, keyFor: function(x) {
        if (Q(x))
          return O(at, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        Mt = !0;
      }, useSimple: function() {
        Mt = !1;
      } }), u(u.S + u.F * !F, "Object", { create: St, defineProperty: ot, defineProperties: vt, getOwnPropertyDescriptor: bt, getOwnPropertyNames: wt, getOwnPropertySymbols: xt }), U && u(u.S + u.F * (!F || f(function() {
        var x = Y();
        return V([x]) != "[null]" || V({ a: x }) != "{}" || V(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !Q(x)) {
          for (var A, J, $ = [x], lt = 1; arguments.length > lt; )
            $.push(arguments[lt++]);
          return A = $[1], typeof A == "function" && (J = A), !J && j(A) || (A = function(ft, yt) {
            if (J && (yt = J.call(this, ft, yt)), !Q(yt))
              return yt;
          }), $[1] = A, V.apply(U, $);
        }
      } }), Y[z][st] || t(6)(Y[z], st, Y[z].valueOf), h(Y, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var o = t(2), n = t(6), i = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = s[c], d = o[f], h = d && d.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
      }
    }, function(e, l, t) {
      l = e.exports = t(82)(), l.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, l) {
      e.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var o = [], n = 0; n < this.length; n++) {
            var i = this[n];
            i[2] ? o.push("@media " + i[2] + "{" + i[1] + "}") : o.push(i[1]);
          }
          return o.join("");
        }, t.i = function(o, n) {
          typeof o == "string" && (o = [[null, o, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < o.length; u++) {
            var c = o[u];
            typeof c[0] == "number" && i[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, l, t) {
      function o(g, _) {
        for (var M = 0; M < g.length; M++) {
          var w = g[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var D = 0; D < T.parts.length; D++)
              T.parts[D](w.parts[D]);
            for (; D < w.parts.length; D++)
              T.parts.push(f(w.parts[D], _));
          } else {
            for (var R = [], D = 0; D < w.parts.length; D++)
              R.push(f(w.parts[D], _));
            S[w.id] = { id: w.id, refs: 1, parts: R };
          }
        }
      }
      function n(g) {
        for (var _ = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], D = T[0], R = T[1], L = T[2], K = T[3], I = { css: R, media: L, sourceMap: K };
          M[D] ? M[D].parts.push(I) : _.push(M[D] = { id: D, parts: [I] });
        }
        return _;
      }
      function i(g, _) {
        var M = O(), w = C[C.length - 1];
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
        return _.type = "text/css", i(g, _), _;
      }
      function c(g) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", i(g, _), _;
      }
      function f(g, _) {
        var M, w, T;
        if (_.singleton) {
          var D = j++;
          M = P || (P = s(_)), w = d.bind(null, M, D, !1), T = d.bind(null, M, D, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = c(_), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(_), w = h.bind(null, M), T = function() {
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
      function d(g, _, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = N(_, T);
        else {
          var D = document.createTextNode(T), R = g.childNodes;
          R[_] && g.removeChild(R[_]), R.length ? g.insertBefore(D, R[_]) : g.appendChild(D);
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
      }), O = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, j = 0, C = [];
      e.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = k()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = n(g);
        return o(M, _), function(w) {
          for (var T = [], D = 0; D < M.length; D++) {
            var R = M[D], L = S[R.id];
            L.refs--, T.push(L);
          }
          if (w) {
            var K = n(w);
            o(K, _);
          }
          for (var D = 0; D < T.length; D++) {
            var L = T[D];
            if (L.refs === 0) {
              for (var I = 0; I < L.parts.length; I++)
                L.parts[I]();
              delete S[L.id];
            }
          }
        };
      };
      var N = function() {
        var g = [];
        return function(_, M) {
          return g[_] = M, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, l, t) {
      var o = t(81);
      typeof o == "string" && (o = [[e.id, o, ""]]), t(83)(o, {}), o.locals && (e.exports = o.locals);
    }]);
  });
})(Ce);
function Se(a) {
  let r, e, l;
  function t(i, u) {
    return (
      /*isIdle*/
      i[9] || /*isFetching*/
      i[11] ? Te : (
        /*backendData*/
        i[8] ? Ae : (
          /*error*/
          i[10] ? Ee : Oe
        )
      )
    );
  }
  let o = t(a), n = o(a);
  return {
    c() {
      r = b("div"), n.c(), m(r, "class", e = `p-12 shadow-${/*shadow*/
      a[3]}`), m(r, "style", l = `
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
`);
    },
    m(i, u) {
      ut(i, r, u), n.m(r, null);
    },
    p(i, u) {
      o === (o = t(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(r, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(r, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && l !== (l = `
        background-color: ${/*background*/
      i[13]};
        border-radius: ${/*border_radius*/
      i[2]};
        color: ${/*text_color*/
      i[6]};
        opacity: ${/*opacity*/
      i[4]}%!important;
        height: ${/*height*/
      i[0]};
        width: ${/*width*/
      i[1]};
`) && m(r, "style", l);
    },
    d(i) {
      i && it(r), n.d();
    }
  };
}
function De(a) {
  let r, e, l, t, o, n;
  function i(c, f) {
    return (
      /*statusCheckError*/
      c[12] === Le ? Pe : Re
    );
  }
  let u = i(a), s = u(a);
  return {
    c() {
      r = b("div"), e = b("div"), l = b("h1"), l.textContent = "An error occured", t = G(), s.c(), m(l, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(r, "class", o = `p-4 shadow-${/*shadow*/
      a[3]}`), m(r, "style", n = `
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
`);
    },
    m(c, f) {
      ut(c, r, f), p(r, e), p(e, l), p(e, t), s.m(e, null);
    },
    p(c, f) {
      u === (u = i(c)) && s ? s.p(c, f) : (s.d(1), s = u(c), s && (s.c(), s.m(e, null))), f[0] & /*shadow*/
      8 && o !== (o = `p-4 shadow-${/*shadow*/
      c[3]}`) && m(r, "class", o), f[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && n !== (n = `
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
`) && m(r, "style", n);
    },
    d(c) {
      c && it(r), s.d();
    }
  };
}
function Oe(a) {
  let r, e, l, t, o, n, i;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "An unknown error", l = G(), t = b("button"), o = W("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), kt(
        t,
        "background-color",
        /*button_color*/
        a[7]
      ), kt(
        t,
        "color",
        /*text_color*/
        a[6]
      ), m(r, "class", "flex flex-col items-center");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, l), p(r, t), p(t, o), n || (i = Jt(
        t,
        "click",
        /*click_handler_2*/
        a[39]
      ), n = !0);
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
      u && it(r), n = !1, i();
    }
  };
}
function Ee(a) {
  let r, e, l, t, o, n, i, u, s, c, f;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "Error", l = G(), t = b("p"), o = W(
        /*error*/
        a[10]
      ), n = G(), i = b("div"), u = b("button"), s = W("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        a[14]
      ), m(i, "class", "w-full mt-auto"), m(r, "class", "flex flex-col items-center h-full");
    },
    m(d, h) {
      ut(d, r, h), p(r, e), p(r, l), p(r, t), p(t, o), p(r, n), p(r, i), p(i, u), p(u, s), c || (f = Jt(
        u,
        "click",
        /*click_handler_1*/
        a[38]
      ), c = !0);
    },
    p(d, h) {
      h[0] & /*error*/
      1024 && _t(
        o,
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
function Ae(a) {
  let r, e, l, t, o, n, i = (
    /*backendData*/
    a[8].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, c, f, d, h = (
    /*backendData*/
    a[8].data[0].third_party_spread + ""
  ), y, S, v, k, O, P = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), j, C, N = (
    /*backendData*/
    a[8].data[0].third_party_profit + ""
  ), g, _, M, w, T, D, R, L, K, I = (
    /*backendData*/
    a[8].data[0].integritas_rate.toFixed(4) + ""
  ), Y, U, V, z, B, st, tt, at, nt, q = (
    /*shouldShowInterbankRate*/
    a[17] && ne(a)
  ), H = (
    /*backendData*/
    a[8].data[0].integritas_savings > 50 && oe(a)
  );
  return {
    c() {
      r = b("div"), e = b("div"), l = b("h1"), l.textContent = "Your Provider", t = G(), o = b("p"), n = W(`Your exchange rate
                        was `), u = W(i), s = G(), q && q.c(), c = G(), f = b("p"), d = W("Your provider's markup was "), y = W(h), S = W("%"), v = G(), k = b("p"), O = W(`Your provider
                        charged `), j = W(P), C = G(), g = W(N), _ = W(` on
                        this trade`), M = G(), w = b("div"), T = b("h1"), D = W(
        /*name*/
        a[5]
      ), R = G(), L = b("p"), K = W("Our exchange rate was "), Y = W(I), U = G(), H && H.c(), V = G(), z = b("div"), B = b("button"), st = W("Calculate again"), m(l, "class", "text-2xl"), m(o, "class", "text-sm"), m(f, "class", "text-sm"), m(k, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(T, "class", "text-2xl mt-4"), m(L, "class", "text-sm"), m(w, "class", "flex flex-col gap-2"), m(r, "class", "flex flex-col divide-y gap-4"), kt(r, "height", "95%"), m(B, "class", "px-6 py-3"), m(B, "style", tt = `${/*button_style*/
      a[14]} margin-bottom: 1.5rem;`), m(z, "class", "w-full");
    },
    m(F, X) {
      ut(F, r, X), p(r, e), p(e, l), p(e, t), p(e, o), p(o, n), p(o, u), p(e, s), q && q.m(e, null), p(e, c), p(e, f), p(f, d), p(f, y), p(f, S), p(e, v), p(e, k), p(k, O), p(k, j), p(k, C), p(k, g), p(k, _), p(r, M), p(r, w), p(w, T), p(T, D), p(w, R), p(w, L), p(L, K), p(L, Y), p(w, U), H && H.m(w, null), ut(F, V, X), ut(F, z, X), p(z, B), p(B, st), at || (nt = Jt(
        B,
        "click",
        /*click_handler*/
        a[37]
      ), at = !0);
    },
    p(F, X) {
      X[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      F[8].data[0].third_party_exchange_rate.toFixed(4) + "") && _t(u, i), /*shouldShowInterbankRate*/
      F[17] ? q ? q.p(F, X) : (q = ne(F), q.c(), q.m(e, c)) : q && (q.d(1), q = null), X[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      F[8].data[0].third_party_spread + "") && _t(y, h), X[0] & /*backendData*/
      256 && P !== (P = /*backendData*/
      F[8].data[0].sold_ccy + "") && _t(j, P), X[0] & /*backendData*/
      256 && N !== (N = /*backendData*/
      F[8].data[0].third_party_profit + "") && _t(g, N), X[0] & /*name*/
      32 && _t(
        D,
        /*name*/
        F[5]
      ), X[0] & /*backendData*/
      256 && I !== (I = /*backendData*/
      F[8].data[0].integritas_rate.toFixed(4) + "") && _t(Y, I), /*backendData*/
      F[8].data[0].integritas_savings > 50 ? H ? H.p(F, X) : (H = oe(F), H.c(), H.m(w, null)) : H && (H.d(1), H = null), X[0] & /*button_style*/
      16384 && tt !== (tt = `${/*button_style*/
      F[14]} margin-bottom: 1.5rem;`) && m(B, "style", tt);
    },
    d(F) {
      F && it(r), q && q.d(), H && H.d(), F && it(V), F && it(z), at = !1, nt();
    }
  };
}
function Te(a) {
  let r, e, l, t, o, n, i, u, s, c, f, d, h, y, S, v, k, O, P, j, C, N, g, _, M, w, T, D, R, L, K, I, Y, U, V, z, B, st, tt, at, nt, q, H, F, X, Mt, dt, E, Q, ot, vt, St, Z, bt, wt, xt, ht, mt, x, A, J, $, lt, ft, yt, Dt, Ot, Et, At, Tt, qt, Ut, Lt, It, Vt, ct = (
    /*shouldShowEmail*/
    a[16] && re(a)
  );
  function Qt(rt, pt) {
    return (
      /*isFetching*/
      rt[11] ? je : Ne
    );
  }
  let Yt = Qt(a), gt = Yt(a);
  return {
    c() {
      r = b("form"), e = b("div"), l = b("div"), t = b("div"), o = b("label"), o.textContent = "Select Date", n = G(), i = b("input"), u = G(), s = b("div"), c = b("label"), c.textContent = "Select Time", f = G(), d = b("input"), h = G(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = G(), O = b("input"), P = G(), j = b("div"), C = b("label"), N = W("Sell Currency"), g = G(), _ = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", D = b("option"), D.textContent = "JPY", R = b("option"), R.textContent = "CHF", L = b("option"), L.textContent = "CNY", K = b("option"), K.textContent = "NZD", I = b("option"), I.textContent = "SGD", Y = b("option"), Y.textContent = "INR", U = b("option"), U.textContent = "AUD", V = b("option"), V.textContent = "CAD", z = b("option"), z.textContent = "HKD", B = b("option"), B.textContent = "MYR", st = b("option"), st.textContent = "NOK", tt = b("option"), tt.textContent = "ZAR", at = b("option"), at.textContent = "RUB", nt = b("option"), nt.textContent = "SEK", q = G(), H = b("div"), F = b("div"), X = b("label"), X.textContent = "Buy Amount", Mt = G(), dt = b("input"), E = G(), Q = b("div"), ot = b("label"), vt = W("Buy Currency"), St = G(), Z = b("select"), bt = b("option"), bt.textContent = "USD", wt = b("option"), wt.textContent = "GBP", xt = b("option"), xt.textContent = "EUR", ht = b("option"), ht.textContent = "JPY", mt = b("option"), mt.textContent = "CHF", x = b("option"), x.textContent = "CNY", A = b("option"), A.textContent = "NZD", J = b("option"), J.textContent = "SGD", $ = b("option"), $.textContent = "INR", lt = b("option"), lt.textContent = "AUD", ft = b("option"), ft.textContent = "CAD", yt = b("option"), yt.textContent = "HKD", Dt = b("option"), Dt.textContent = "MYR", Ot = b("option"), Ot.textContent = "NOK", Et = b("option"), Et.textContent = "ZAR", At = b("option"), At.textContent = "RUB", Tt = b("option"), Tt.textContent = "SEK", qt = G(), ct && ct.c(), Ut = G(), Lt = b("div"), gt.c(), m(o, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        a[15]
      ), m(t, "class", "w-full"), m(c, "for", "time"), m(d, "id", "time"), m(d, "type", "time"), m(d, "class", "w-full rounded-md px-3 py-2 mt-4"), m(d, "name", "time"), m(d, "placeholder", "Select Time"), d.required = !0, m(
        d,
        "style",
        /*input_style*/
        a[15]
      ), m(s, "class", "w-full"), m(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(v, "for", "sold_notional"), m(O, "id", "sold_notional"), m(O, "type", "number"), m(O, "step", ".01"), m(O, "class", "w-full rounded-md px-3 py-2 mt-4"), m(O, "name", "sold_notional"), m(O, "placeholder", "10000"), O.required = !0, m(
        O,
        "style",
        /*input_style*/
        a[15]
      ), m(S, "class", "w-full"), m(C, "for", "sold_ccy"), kt(
        C,
        "color",
        /*text_color*/
        a[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, D.__value = "JPY", D.value = D.__value, R.__value = "CHF", R.value = R.__value, L.__value = "CNY", L.value = L.__value, K.__value = "NZD", K.value = K.__value, I.__value = "SGD", I.value = I.__value, Y.__value = "INR", Y.value = Y.__value, U.__value = "AUD", U.value = U.__value, V.__value = "CAD", V.value = V.__value, z.__value = "HKD", z.value = z.__value, B.__value = "MYR", B.value = B.__value, st.__value = "NOK", st.value = st.__value, tt.__value = "ZAR", tt.value = tt.__value, at.__value = "RUB", at.value = at.__value, nt.__value = "SEK", nt.value = nt.__value, m(_, "name", "sold_ccy"), m(_, "id", "sold_ccy"), m(_, "class", "w-full rounded-md px-3 py-2 mt-4"), _.required = !0, m(
        _,
        "style",
        /*input_style*/
        a[15]
      ), m(j, "class", "w-full"), m(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(X, "for", "bought_notional"), m(dt, "id", "bought_notional"), m(dt, "type", "number"), m(dt, "step", ".01"), m(dt, "class", "w-full rounded-md px-3 py-2 mt-4"), m(dt, "name", "bought_notional"), m(dt, "placeholder", "10000"), dt.required = !0, m(
        dt,
        "style",
        /*input_style*/
        a[15]
      ), m(F, "class", "w-full"), m(ot, "for", "bought_ccy"), kt(
        ot,
        "color",
        /*text_color*/
        a[6]
      ), bt.selected = !0, bt.__value = "USD", bt.value = bt.__value, wt.__value = "GBP", wt.value = wt.__value, xt.__value = "EUR", xt.value = xt.__value, ht.__value = "JPY", ht.value = ht.__value, mt.__value = "CHF", mt.value = mt.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, J.__value = "SGD", J.value = J.__value, $.__value = "INR", $.value = $.__value, lt.__value = "AUD", lt.value = lt.__value, ft.__value = "CAD", ft.value = ft.__value, yt.__value = "HKD", yt.value = yt.__value, Dt.__value = "MYR", Dt.value = Dt.__value, Ot.__value = "NOK", Ot.value = Ot.__value, Et.__value = "ZAR", Et.value = Et.__value, At.__value = "RUB", At.value = At.__value, Tt.__value = "SEK", Tt.value = Tt.__value, m(Z, "name", "bought_ccy"), m(Z, "id", "bought_ccy"), m(Z, "class", "w-full rounded-md px-3 py-2 mt-4"), Z.required = !0, m(
        Z,
        "style",
        /*input_style*/
        a[15]
      ), m(Q, "class", "w-full"), m(H, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m(rt, pt) {
      ut(rt, r, pt), p(r, e), p(e, l), p(l, t), p(t, o), p(t, n), p(t, i), p(l, u), p(l, s), p(s, c), p(s, f), p(s, d), p(e, h), p(e, y), p(y, S), p(S, v), p(S, k), p(S, O), p(y, P), p(y, j), p(j, C), p(C, N), p(j, g), p(j, _), p(_, M), p(_, w), p(_, T), p(_, D), p(_, R), p(_, L), p(_, K), p(_, I), p(_, Y), p(_, U), p(_, V), p(_, z), p(_, B), p(_, st), p(_, tt), p(_, at), p(_, nt), p(e, q), p(e, H), p(H, F), p(F, X), p(F, Mt), p(F, dt), p(H, E), p(H, Q), p(Q, ot), p(ot, vt), p(Q, St), p(Q, Z), p(Z, bt), p(Z, wt), p(Z, xt), p(Z, ht), p(Z, mt), p(Z, x), p(Z, A), p(Z, J), p(Z, $), p(Z, lt), p(Z, ft), p(Z, yt), p(Z, Dt), p(Z, Ot), p(Z, Et), p(Z, At), p(Z, Tt), p(e, qt), ct && ct.m(e, null), p(e, Ut), p(e, Lt), gt.m(Lt, null), It || (Vt = Jt(
        r,
        "submit",
        /*handleFormSubmit*/
        a[19]
      ), It = !0);
    },
    p(rt, pt) {
      pt[0] & /*input_style*/
      32768 && m(
        i,
        "style",
        /*input_style*/
        rt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        d,
        "style",
        /*input_style*/
        rt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        O,
        "style",
        /*input_style*/
        rt[15]
      ), pt[0] & /*text_color*/
      64 && kt(
        C,
        "color",
        /*text_color*/
        rt[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        _,
        "style",
        /*input_style*/
        rt[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        dt,
        "style",
        /*input_style*/
        rt[15]
      ), pt[0] & /*text_color*/
      64 && kt(
        ot,
        "color",
        /*text_color*/
        rt[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        Z,
        "style",
        /*input_style*/
        rt[15]
      ), /*shouldShowEmail*/
      rt[16] ? ct ? ct.p(rt, pt) : (ct = re(rt), ct.c(), ct.m(e, Ut)) : ct && (ct.d(1), ct = null), Yt === (Yt = Qt(rt)) && gt ? gt.p(rt, pt) : (gt.d(1), gt = Yt(rt), gt && (gt.c(), gt.m(Lt, null)));
    },
    d(rt) {
      rt && it(r), ct && ct.d(), gt.d(), It = !1, Vt();
    }
  };
}
function ne(a) {
  let r, e, l = (
    /*backendData*/
    a[8].data[0].ccy_pair + ""
  ), t, o, n = (
    /*backendData*/
    a[8].data[0].mid_market_rate.toFixed(4) + ""
  ), i;
  return {
    c() {
      r = b("p"), e = W("The interbank rate "), t = W(l), o = W(`
                            was `), i = W(n), m(r, "class", "text-sm");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, t), p(r, o), p(r, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].ccy_pair + "") && _t(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].mid_market_rate.toFixed(4) + "") && _t(i, n);
    },
    d(u) {
      u && it(r);
    }
  };
}
function oe(a) {
  let r, e, l = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), t, o, n = (
    /*backendData*/
    a[8].data[0].integritas_savings.toFixed(4) + ""
  ), i;
  return {
    c() {
      r = b("p"), e = W(`We would've saved
                            you `), t = W(l), o = G(), i = W(n), m(r, "class", "text-sm");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(r, t), p(r, o), p(r, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].sold_ccy + "") && _t(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].integritas_savings.toFixed(4) + "") && _t(i, n);
    },
    d(u) {
      u && it(r);
    }
  };
}
function re(a) {
  let r, e, l, t, o;
  return {
    c() {
      r = b("div"), e = b("div"), l = b("label"), l.textContent = "Email", t = G(), o = b("input"), m(l, "for", "user"), m(o, "id", "user"), m(o, "type", "email"), m(o, "class", "w-full rounded-md px-3 py-2 mt-4"), m(o, "name", "user"), m(o, "placeholder", "JohnDoe@email.com"), o.required = !0, m(
        o,
        "style",
        /*input_style*/
        a[15]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, i) {
      ut(n, r, i), p(r, e), p(e, l), p(e, t), p(e, o);
    },
    p(n, i) {
      i[0] & /*input_style*/
      32768 && m(
        o,
        "style",
        /*input_style*/
        n[15]
      );
    },
    d(n) {
      n && it(r);
    }
  };
}
function je(a) {
  let r, e, l, t, o, n, i;
  return {
    c() {
      r = b("div"), e = b("div"), l = b("button"), t = zt("svg"), o = zt("path"), n = zt("path"), i = W(`
                                        Loading...`), m(o, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(o, "fill", "#E5E7EB"), m(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(n, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), l.disabled = !0, m(l, "type", "button"), m(l, "class", "px-6 py-3 mt-6 text-center inline-flex items-center justify-center"), m(
        l,
        "style",
        /*button_style*/
        a[14]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      ut(u, r, s), p(r, e), p(e, l), p(l, t), p(t, o), p(t, n), p(l, i);
    },
    p(u, s) {
      s[0] & /*button_style*/
      16384 && m(
        l,
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
function Ne(a) {
  let r, e, l, t;
  return {
    c() {
      r = b("div"), e = b("button"), l = W("See your charges"), m(e, "type", "submit"), m(e, "class", "px-6 py-3 mt-6"), m(
        e,
        "style",
        /*button_style*/
        a[14]
      ), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full items-center justify-center"), m(r, "style", t = (!/*shouldShowEmail*/
      a[16] && "height: 10rem") + ";");
    },
    m(o, n) {
      ut(o, r, n), p(r, e), p(e, l);
    },
    p(o, n) {
      n[0] & /*button_style*/
      16384 && m(
        e,
        "style",
        /*button_style*/
        o[14]
      ), n[0] & /*shouldShowEmail*/
      65536 && t !== (t = (!/*shouldShowEmail*/
      o[16] && "height: 10rem") + ";") && m(r, "style", t);
    },
    d(o) {
      o && it(r);
    }
  };
}
function Re(a) {
  let r, e;
  return {
    c() {
      r = b("p"), e = W(
        /*statusCheckError*/
        a[12]
      ), m(r, "class", "text-sm");
    },
    m(l, t) {
      ut(l, r, t), p(r, e);
    },
    p(l, t) {
      t[0] & /*statusCheckError*/
      4096 && _t(
        e,
        /*statusCheckError*/
        l[12]
      );
    },
    d(l) {
      l && it(r);
    }
  };
}
function Pe(a) {
  let r;
  return {
    c() {
      r = b("div"), r.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(e, l) {
      ut(e, r, l);
    },
    p: Ct,
    d(e) {
      e && it(r);
    }
  };
}
function Fe(a) {
  let r, e, l;
  function t(i, u) {
    return (
      /*statusCheckError*/
      i[12] ? De : Se
    );
  }
  let o = t(a), n = o(a);
  return {
    c() {
      r = b("link"), e = G(), n.c(), l = de(), this.c = Ct, m(r, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(r, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, r), ut(i, e, u), n.m(i, u), ut(i, l, u);
    },
    p(i, u) {
      o === (o = t(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(l.parentNode, l)));
    },
    i: Ct,
    o: Ct,
    d(i) {
      it(r), i && it(e), n.d(i), i && it(l);
    }
  };
}
const ie = "http://localhost:8000", Le = "CORS_ERROR";
function Ye(a) {
  return a === "dark" ? !0 : a === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function He(a, r, e) {
  let l, t, o, n, i, u, { mode: s = "auto" } = r, { height: c = "100%" } = r, { width: f = "100%" } = r, { light_mode_background: d = "#ffffff" } = r, { dark_mode_background: h = "#1f2937" } = r, { light_mode_text_color: y = "#1f2937" } = r, { dark_mode_text_color: S = "#f9fafb" } = r, { dark_mode_input_background: v = "#374151" } = r, { light_mode_input_background: k = "#f9fafb" } = r, { dark_mode_button_color: O = "#374151" } = r, { light_mode_button_color: P = "#f9fafb" } = r, { light_mode_border_color: j = "#D1D5DB" } = r, { dark_mode_border_color: C = "#374151" } = r, { border_radius: N = "15px" } = r, { input_border_radius: g = "5" } = r, { shadow: _ = "md" } = r, { opacity: M = 100 } = r, { name: w = "Our Results" } = r, { show_interbank_rate: T = "false" } = r, { show_email_input: D = "true" } = r;
  async function R() {
    const E = "CORS_ERROR";
    try {
      const Q = await fetch(`${ie}/`);
      if (!Q.ok)
        throw Q.status === 403 ? new Error(E) : new Error("We're sorry, our servers are currently down. Please try again later.");
    } catch (Q) {
      Q.message === E ? e(12, V = E) : e(12, V = Q.message);
    }
  }
  const L = async (E) => fetch(`${ie}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(E)
  });
  pe(() => {
    R();
  });
  let K, I = !0, Y, U = !1, V;
  const z = () => {
    e(8, K = void 0), e(9, I = !0), e(10, Y = !1), e(11, U = !1);
  }, B = async (E) => {
    e(9, I = !1), e(11, U = !0), e(10, Y = void 0);
    try {
      const Q = await L(E);
      if (!Q.ok) {
        const vt = await Q.json();
        throw new Error(vt || `HTTP error! Status: ${Q.status}`);
      }
      const ot = await Q.json();
      e(11, U = !1), e(10, Y = void 0), e(9, I = !1), e(8, K = ot);
    } catch (Q) {
      e(11, U = !1), e(10, Y = Q.message), e(9, I = !1), e(8, K = void 0);
    }
  }, st = async (E) => {
    E.preventDefault();
    const Q = new FormData(E.target), ot = {};
    for (let vt of Q) {
      const [St, Z] = vt;
      ot[St] = Z;
    }
    ot.prospect = "", ot.prospect_annual_flow = "", ot.email_user = !1, ot.is_widget = !0, l || (ot.user = "testUserWithoutMail@gmail.com"), B(ot);
  }, tt = (E) => {
    e(36, o = E.matches);
  }, at = window.matchMedia("(prefers-color-scheme: dark)");
  at.addEventListener("change", tt), he(() => {
    at.removeEventListener("change", tt);
  });
  let nt, q, H, F;
  const X = () => z(), Mt = (E) => z(), dt = (E) => z();
  return a.$$set = (E) => {
    "mode" in E && e(20, s = E.mode), "height" in E && e(0, c = E.height), "width" in E && e(1, f = E.width), "light_mode_background" in E && e(21, d = E.light_mode_background), "dark_mode_background" in E && e(22, h = E.dark_mode_background), "light_mode_text_color" in E && e(23, y = E.light_mode_text_color), "dark_mode_text_color" in E && e(24, S = E.dark_mode_text_color), "dark_mode_input_background" in E && e(25, v = E.dark_mode_input_background), "light_mode_input_background" in E && e(26, k = E.light_mode_input_background), "dark_mode_button_color" in E && e(27, O = E.dark_mode_button_color), "light_mode_button_color" in E && e(28, P = E.light_mode_button_color), "light_mode_border_color" in E && e(29, j = E.light_mode_border_color), "dark_mode_border_color" in E && e(30, C = E.dark_mode_border_color), "border_radius" in E && e(2, N = E.border_radius), "input_border_radius" in E && e(31, g = E.input_border_radius), "shadow" in E && e(3, _ = E.shadow), "opacity" in E && e(4, M = E.opacity), "name" in E && e(5, w = E.name), "show_interbank_rate" in E && e(32, T = E.show_interbank_rate), "show_email_input" in E && e(33, D = E.show_email_input);
  }, a.$$.update = () => {
    a.$$.dirty[1] & /*show_email_input*/
    4 && e(16, l = D === "true"), a.$$.dirty[1] & /*show_interbank_rate*/
    2 && e(17, t = T === "true"), a.$$.dirty[0] & /*mode*/
    1048576 && e(36, o = Ye(s)), a.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | a.$$.dirty[1] & /*isDarkMode*/
    32 && e(13, nt = o ? h : d), a.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | a.$$.dirty[1] & /*isDarkMode*/
    32 && e(6, q = o ? S : y), a.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | a.$$.dirty[1] & /*isDarkMode*/
    32 && e(34, H = o ? v : k), a.$$.dirty[0] & /*dark_mode_border_color, light_mode_border_color*/
    1610612736 | a.$$.dirty[1] & /*isDarkMode*/
    32 && e(35, n = o ? C : j), a.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | a.$$.dirty[1] & /*isDarkMode*/
    32 && e(7, F = o ? O : P), a.$$.dirty[0] & /*text_color*/
    64 | a.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    25 && e(15, i = `
    background-color: ${H};
    color: ${q};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${g}px;
    `), a.$$.dirty[0] & /*button_color, text_color*/
    192 | a.$$.dirty[1] & /*input_border_color, input_border_radius*/
    17 && e(14, u = `
    width: 100%;
    background-color: ${F};
    color: ${q};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${g}px;
    `);
  }, [
    c,
    f,
    N,
    _,
    M,
    w,
    q,
    F,
    K,
    I,
    Y,
    U,
    V,
    nt,
    u,
    i,
    l,
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
    O,
    P,
    j,
    C,
    g,
    T,
    D,
    H,
    n,
    o,
    X,
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
    }.justify-center{justify-content:center
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
        }}</style>`, ke(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      He,
      Fe,
      ue,
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
    ), r && (r.target && ut(r.target, this, r.anchor), r.props && (this.$set(r.props), et()));
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
    this.$$set({ mode: r }), et();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(r) {
    this.$$set({ height: r }), et();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(r) {
    this.$$set({ width: r }), et();
  }
  get light_mode_background() {
    return this.$$.ctx[21];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), et();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), et();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), et();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), et();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), et();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), et();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), et();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), et();
  }
  get light_mode_border_color() {
    return this.$$.ctx[29];
  }
  set light_mode_border_color(r) {
    this.$$set({ light_mode_border_color: r }), et();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[30];
  }
  set dark_mode_border_color(r) {
    this.$$set({ dark_mode_border_color: r }), et();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), et();
  }
  get input_border_radius() {
    return this.$$.ctx[31];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), et();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), et();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(r) {
    this.$$set({ opacity: r }), et();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(r) {
    this.$$set({ name: r }), et();
  }
  get show_interbank_rate() {
    return this.$$.ctx[32];
  }
  set show_interbank_rate(r) {
    this.$$set({ show_interbank_rate: r }), et();
  }
  get show_email_input() {
    return this.$$.ctx[33];
  }
  set show_email_input(r) {
    this.$$set({ show_email_input: r }), et();
  }
}
customElements.define("spreadm8-calc", Je);
export {
  Je as Spreadm8Calc
};
