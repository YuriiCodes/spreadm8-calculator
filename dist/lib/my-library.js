function Ce() {
}
function We(l) {
  return l();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function Re(l) {
  l.forEach(We);
}
function Ke(l) {
  return typeof l == "function";
}
function ut(l, r) {
  return l != l ? r == r : l !== r || l && typeof l == "object" || typeof l == "function";
}
function st(l) {
  return Object.keys(l).length === 0;
}
function p(l, r) {
  l.appendChild(r);
}
function se(l, r, t) {
  l.insertBefore(r, t || null);
}
function le(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function b(l) {
  return document.createElement(l);
}
function ze(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function K(l) {
  return document.createTextNode(l);
}
function V() {
  return K(" ");
}
function dt() {
  return K("");
}
function Je(l, r, t, a) {
  return l.addEventListener(r, t, a), () => l.removeEventListener(r, t, a);
}
function m(l, r, t) {
  t == null ? l.removeAttribute(r) : l.getAttribute(r) !== t && l.setAttribute(r, t);
}
function ct(l) {
  return Array.from(l.childNodes);
}
function ye(l, r) {
  r = "" + r, l.wholeText !== r && (l.data = r);
}
function de(l, r, t, a) {
  t === null ? l.style.removeProperty(r) : l.style.setProperty(r, t, a ? "important" : "");
}
function ft(l) {
  const r = {};
  for (const t of l)
    r[t.name] = t.value;
  return r;
}
let Pe;
function Le(l) {
  Pe = l;
}
function it() {
  if (!Pe)
    throw new Error("Function called outside component initialization");
  return Pe;
}
function pt(l) {
  it().$$.on_mount.push(l);
}
function ht(l) {
  it().$$.on_destroy.push(l);
}
const je = [], $e = [], He = [], et = [], mt = Promise.resolve();
let Ze = !1;
function _t() {
  Ze || (Ze = !0, mt.then($));
}
function Ge(l) {
  He.push(l);
}
const Be = /* @__PURE__ */ new Set();
let Ne = 0;
function $() {
  if (Ne !== 0)
    return;
  const l = Pe;
  do {
    try {
      for (; Ne < je.length; ) {
        const r = je[Ne];
        Ne++, Le(r), yt(r.$$);
      }
    } catch (r) {
      throw je.length = 0, Ne = 0, r;
    }
    for (Le(null), je.length = 0, Ne = 0; $e.length; )
      $e.pop()();
    for (let r = 0; r < He.length; r += 1) {
      const t = He[r];
      Be.has(t) || (Be.add(t), t());
    }
    He.length = 0;
  } while (je.length);
  for (; et.length; )
    et.pop()();
  Ze = !1, Be.clear(), Le(l);
}
function yt(l) {
  if (l.fragment !== null) {
    l.update(), Re(l.before_update);
    const r = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, r), l.after_update.forEach(Ge);
  }
}
const bt = /* @__PURE__ */ new Set();
function gt(l, r) {
  l && l.i && (bt.delete(l), l.i(r));
}
function vt(l, r, t, a) {
  const { fragment: e, after_update: n } = l.$$;
  e && e.m(r, t), a || Ge(() => {
    const o = l.$$.on_mount.map(We).filter(Ke);
    l.$$.on_destroy ? l.$$.on_destroy.push(...o) : Re(o), l.$$.on_mount = [];
  }), n.forEach(Ge);
}
function wt(l, r) {
  const t = l.$$;
  t.fragment !== null && (Re(t.on_destroy), t.fragment && t.fragment.d(r), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xt(l, r) {
  l.$$.dirty[0] === -1 && (je.push(l), _t(), l.$$.dirty.fill(0)), l.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function kt(l, r, t, a, e, n, o, i = [-1]) {
  const u = Pe;
  Le(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: Ce,
    not_equal: e,
    bound: Xe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xe(),
    dirty: i,
    skip_bound: !1,
    root: r.target || u.$$.root
  };
  o && o(s.root);
  let d = !1;
  if (s.ctx = t ? t(l, r.props || {}, (f, c, ...h) => {
    const y = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), d && xt(l, f)), c;
  }) : [], s.update(), d = !0, Re(s.before_update), s.fragment = a ? a(s.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = ct(r.target);
      s.fragment && s.fragment.l(f), f.forEach(le);
    } else
      s.fragment && s.fragment.c();
    r.intro && gt(l.$$.fragment), vt(l, r.target, r.anchor, r.customElement), $();
  }
  Le(u);
}
let at;
typeof HTMLElement == "function" && (at = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(We).filter(Ke);
    for (const r in this.$$.slotted)
      this.appendChild(this.$$.slotted[r]);
  }
  attributeChangedCallback(l, r, t) {
    this[l] = t;
  }
  disconnectedCallback() {
    Re(this.$$.on_disconnect);
  }
  $destroy() {
    wt(this, 1), this.$destroy = Ce;
  }
  $on(l, r) {
    if (!Ke(r))
      return Ce;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(r), () => {
      const a = t.indexOf(r);
      a !== -1 && t.splice(a, 1);
    };
  }
  $set(l) {
    this.$$set && !st(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tt = {}, Ct = {
  get exports() {
    return tt;
  },
  set exports(l) {
    tt = l;
  }
};
(function(l, r) {
  (function(t, a) {
    l.exports = a();
  })(Mt, function() {
    return function(t) {
      function a(n) {
        if (e[n])
          return e[n].exports;
        var o = e[n] = { exports: {}, id: n, loaded: !1 };
        return t[n].call(o.exports, o, o.exports, a), o.loaded = !0, o.exports;
      }
      var e = {};
      return a.m = t, a.c = e, a.p = "", a(0);
    }([function(t, a, e) {
      function n(s) {
        return s && s.__esModule ? s : { default: s };
      }
      e(84);
      var o = e(41), i = n(o), u = function() {
        i.default.addPickerToOtherInputs(), i.default.supportsDateInput() || i.default.addPickerToDateInputs();
      };
      u(), document.addEventListener("DOMContentLoaded", function() {
        u();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        u();
      });
    }, function(t, a, e) {
      t.exports = !e(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, a) {
      var e = t.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = e);
    }, function(t, a) {
      var e = {}.hasOwnProperty;
      t.exports = function(n, o) {
        return e.call(n, o);
      };
    }, function(t, a, e) {
      var n = e(9), o = e(32), i = e(25), u = Object.defineProperty;
      a.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (n(s), d = i(d, !0), n(f), o)
          try {
            return u(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
      };
    }, function(t, a, e) {
      var n = e(59), o = e(16);
      t.exports = function(i) {
        return n(o(i));
      };
    }, function(t, a, e) {
      var n = e(4), o = e(14);
      t.exports = e(1) ? function(i, u, s) {
        return n.f(i, u, o(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(t, a, e) {
      var n = e(23)("wks"), o = e(15), i = e(2).Symbol, u = typeof i == "function", s = t.exports = function(d) {
        return n[d] || (n[d] = u && i[d] || (u ? i : o)("Symbol." + d));
      };
      s.store = n;
    }, function(t, a) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, a, e) {
      var n = e(12);
      t.exports = function(o) {
        if (!n(o))
          throw TypeError(o + " is not an object!");
        return o;
      };
    }, function(t, a, e) {
      var n = e(2), o = e(8), i = e(56), u = e(6), s = "prototype", d = function(f, c, h) {
        var y, D, w, M = f & d.F, E = f & d.G, P = f & d.S, N = f & d.P, S = f & d.B, j = f & d.W, g = E ? o : o[c] || (o[c] = {}), _ = g[s], C = E ? n : P ? n[c] : (n[c] || {})[s];
        E && (h = c);
        for (y in h)
          D = !M && C && C[y] !== void 0, D && y in g || (w = D ? C[y] : h[y], g[y] = E && typeof C[y] != "function" ? h[y] : S && D ? i(w, n) : j && C[y] == w ? function(x) {
            var T = function(O, L, R) {
              if (this instanceof x) {
                switch (arguments.length) {
                  case 0:
                    return new x();
                  case 1:
                    return new x(O);
                  case 2:
                    return new x(O, L);
                }
                return new x(O, L, R);
              }
              return x.apply(this, arguments);
            };
            return T[s] = x[s], T;
          }(w) : N && typeof w == "function" ? i(Function.call, w) : w, N && ((g.virtual || (g.virtual = {}))[y] = w, f & d.R && _ && !_[y] && u(_, y, w)));
      };
      d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, t.exports = d;
    }, function(t, a) {
      t.exports = function(e) {
        try {
          return !!e();
        } catch {
          return !0;
        }
      };
    }, function(t, a) {
      t.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    }, function(t, a, e) {
      var n = e(38), o = e(17);
      t.exports = Object.keys || function(i) {
        return n(i, o);
      };
    }, function(t, a) {
      t.exports = function(e, n) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: n };
      };
    }, function(t, a) {
      var e = 0, n = Math.random();
      t.exports = function(o) {
        return "Symbol(".concat(o === void 0 ? "" : o, ")_", (++e + n).toString(36));
      };
    }, function(t, a) {
      t.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    }, function(t, a) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(t, a) {
      t.exports = {};
    }, function(t, a) {
      t.exports = !0;
    }, function(t, a) {
      a.f = {}.propertyIsEnumerable;
    }, function(t, a, e) {
      var n = e(4).f, o = e(3), i = e(7)("toStringTag");
      t.exports = function(u, s, d) {
        u && !o(u = d ? u : u.prototype, i) && n(u, i, { configurable: !0, value: s });
      };
    }, function(t, a, e) {
      var n = e(23)("keys"), o = e(15);
      t.exports = function(i) {
        return n[i] || (n[i] = o(i));
      };
    }, function(t, a, e) {
      var n = e(2), o = "__core-js_shared__", i = n[o] || (n[o] = {});
      t.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(t, a) {
      var e = Math.ceil, n = Math.floor;
      t.exports = function(o) {
        return isNaN(o = +o) ? 0 : (o > 0 ? n : e)(o);
      };
    }, function(t, a, e) {
      var n = e(12);
      t.exports = function(o, i) {
        if (!n(o))
          return o;
        var u, s;
        if (i && typeof (u = o.toString) == "function" && !n(s = u.call(o)) || typeof (u = o.valueOf) == "function" && !n(s = u.call(o)) || !i && typeof (u = o.toString) == "function" && !n(s = u.call(o)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, a, e) {
      var n = e(2), o = e(8), i = e(19), u = e(27), s = e(4).f;
      t.exports = function(d) {
        var f = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: u.f(d) });
      };
    }, function(t, a, e) {
      a.f = e(7);
    }, function(t, a) {
      a.__esModule = !0, a.default = function(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, a, e) {
      function n(u) {
        return u && u.__esModule ? u : { default: u };
      }
      a.__esModule = !0;
      var o = e(45), i = n(o);
      a.default = function() {
        function u(s, d) {
          for (var f = 0; f < d.length; f++) {
            var c = d[f];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), (0, i.default)(s, c.key, c);
          }
        }
        return function(s, d, f) {
          return d && u(s.prototype, d), f && u(s, f), s;
        };
      }();
    }, function(t, a) {
      var e = {}.toString;
      t.exports = function(n) {
        return e.call(n).slice(8, -1);
      };
    }, function(t, a, e) {
      var n = e(12), o = e(2).document, i = n(o) && n(o.createElement);
      t.exports = function(u) {
        return i ? o.createElement(u) : {};
      };
    }, function(t, a, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, a, e) {
      var n = e(19), o = e(10), i = e(39), u = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), y = e(7)("iterator"), D = !([].keys && "next" in [].keys()), w = "@@iterator", M = "keys", E = "values", P = function() {
        return this;
      };
      t.exports = function(N, S, j, g, _, C, x) {
        f(j, S, g);
        var T, O, L, R = function(te) {
          if (!D && te in H)
            return H[te];
          switch (te) {
            case M:
              return function() {
                return new j(this, te);
              };
            case E:
              return function() {
                return new j(this, te);
              };
          }
          return function() {
            return new j(this, te);
          };
        }, B = S + " Iterator", I = _ == E, F = !1, H = N.prototype, Z = H[y] || H[w] || _ && H[_], G = Z || R(_), W = _ ? I ? R("entries") : G : void 0, ie = S == "Array" && H.entries || Z;
        if (ie && (L = h(ie.call(new N())), L !== Object.prototype && (c(L, B, !0), n || s(L, y) || u(L, y, P))), I && Z && Z.name !== E && (F = !0, G = function() {
          return Z.call(this);
        }), n && !x || !D && !F && H[y] || u(H, y, G), d[S] = G, d[B] = P, _)
          if (T = { values: I ? G : R(E), keys: C ? G : R(M), entries: W }, x)
            for (O in T)
              O in H || i(H, O, T[O]);
          else
            o(o.P + o.F * (D || F), S, T);
        return T;
      };
    }, function(t, a, e) {
      var n = e(9), o = e(35), i = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), y = i.length, D = "<", w = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(D + "script" + w + "document.F=Object" + D + "/script" + w), c.close(), f = c.F; y--; )
          delete f[d][i[y]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var y;
        return c !== null ? (s[d] = n(c), y = new s(), s[d] = null, y[u] = c) : y = f(), h === void 0 ? y : o(y, h);
      };
    }, function(t, a, e) {
      var n = e(4), o = e(9), i = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        o(u);
        for (var d, f = i(s), c = f.length, h = 0; c > h; )
          n.f(u, d = f[h++], s[d]);
        return u;
      };
    }, function(t, a, e) {
      var n = e(38), o = e(17).concat("length", "prototype");
      a.f = Object.getOwnPropertyNames || function(i) {
        return n(i, o);
      };
    }, function(t, a) {
      a.f = Object.getOwnPropertySymbols;
    }, function(t, a, e) {
      var n = e(3), o = e(5), i = e(55)(!1), u = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var f, c = o(s), h = 0, y = [];
        for (f in c)
          f != u && n(c, f) && y.push(f);
        for (; d.length > h; )
          n(c, f = d[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(t, a, e) {
      t.exports = e(6);
    }, function(t, a, e) {
      function n(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function o(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function i(h) {
        var y = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        y.setDate(y.getDate() - (y.getDay() + 6) % 7 + 3);
        var D = new Date(y.getFullYear(), 0, 4);
        D.setDate(D.getDate() - (D.getDay() + 6) % 7 + 3);
        var w = y.getTimezoneOffset() - D.getTimezoneOffset();
        y.setHours(y.getHours() - w);
        var M = (y - D) / 6048e5;
        return 1 + Math.floor(M);
      }
      function u(h) {
        var y = h.getDay();
        return y === 0 && (y = 7), y;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, f.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, f.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var d = e(48), f = n(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(w, M, E, P) {
          if (arguments.length !== 1 || s(w) !== "string" || /\d/.test(w) || (M = w, w = void 0), w = w || new Date(), w instanceof Date || (w = new Date(w)), isNaN(w))
            throw TypeError("Invalid date");
          M = String(c.masks[M] || M || c.masks.default);
          var N = M.slice(0, 4);
          N !== "UTC:" && N !== "GMT:" || (M = M.slice(4), E = !0, N === "GMT:" && (P = !0));
          var S = E ? "getUTC" : "get", j = w[S + "Date"](), g = w[S + "Day"](), _ = w[S + "Month"](), C = w[S + "FullYear"](), x = w[S + "Hours"](), T = w[S + "Minutes"](), O = w[S + "Seconds"](), L = w[S + "Milliseconds"](), R = E ? 0 : w.getTimezoneOffset(), B = i(w), I = u(w), F = { d: j, dd: o(j), ddd: c.i18n.dayNames[g], dddd: c.i18n.dayNames[g + 7], m: _ + 1, mm: o(_ + 1), mmm: c.i18n.monthNames[_], mmmm: c.i18n.monthNames[_ + 12], yy: String(C).slice(2), yyyy: C, h: x % 12 || 12, hh: o(x % 12 || 12), H: x, HH: o(x), M: T, MM: o(T), s: O, ss: o(O), l: o(L, 3), L: o(Math.round(L / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: P ? "GMT" : E ? "UTC" : (String(w).match(y) || [""]).pop().replace(D, ""), o: (R > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(R) / 60) + Math.abs(R) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: B, N: I };
          return M.replace(h, function(H) {
            return H in F ? F[H] : H.slice(1, H.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, a.default = c;
    }, function(t, a, e) {
      function n(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var o = e(44), i = n(o), u = e(28), s = n(u), d = e(29), f = n(d), c = e(43), h = n(c), y = e(42), D = n(y), w = e(40), M = n(w), E = function() {
        function P(N) {
          var S = this;
          (0, s.default)(this, P), this.element = N, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!S.element.value)
              return null;
            var g = S.format || "yyyy-mm-dd", _ = S.element.value.match(/(\d+)/g), C = 0, x = {};
            return g.replace(/(yyyy|dd|mm)/g, function(T) {
              x[T] = C++;
            }), new Date(_[x.yyyy], _[x.mm] - 1, _[x.dd]);
          }, set: function(g) {
            S.element.value = (0, M.default)(g, S.format);
          } }, valueAsNumber: { get: function() {
            return S.element.value ? S.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            S.element.valueAsDate = new Date(g);
          } } });
          var j = function(g) {
            var _ = S.element;
            _.locale = S.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(g) {
            var _ = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                S.element.valueAsDate && (_.setDate(S.element.valueAsDate.getDate() + 1), S.element.valueAsDate = _, h.default.pingInput());
                break;
              case 40:
                S.element.valueAsDate && (_.setDate(S.element.valueAsDate.getDate() - 1), S.element.valueAsDate = _, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, f.default)(P, [{ key: "getLocaleText", value: function() {
          var N = this.locale.toLowerCase();
          for (var S in D.default) {
            var j = S.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(N) || ~j.indexOf(N.substr(0, 2)))
              return D.default[S];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var N = document.createElement("input");
          N.setAttribute("type", "date");
          var S = "not-a-date";
          return N.setAttribute("value", S), N.value !== S;
        } }, { key: "addPickerToDateInputs", value: function() {
          var N = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), S = N.length;
          if (!S)
            return !1;
          for (var j = 0; j < S; ++j)
            new P(N[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var N = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), S = N.length;
          if (!S)
            return !1;
          for (var j = 0; j < S; ++j)
            new P(N[j]);
        } }]), P;
      }();
      a.default = E;
    }, function(t, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      a.default = e;
    }, function(t, a, e) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var o = e(28), i = n(o), u = e(29), s = n(u), d = function() {
        function f() {
          var c = this;
          if ((0, i.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            c.date.setYear(c.year.value), c.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            c.date.setMonth(c.month.value), c.refreshDaysMatrix();
          });
          var y = document.createElement("span");
          y.className = "monthSelect-wrapper", y.appendChild(this.month), this.container.appendChild(y), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var w = new Date();
            c.date = new Date(w.getFullYear() + "/" + ("0" + (w.getMonth() + 1)).slice(-2) + "/" + ("0" + w.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var D = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(w) {
            var M = w.target;
            if (!M.hasAttribute("data-day"))
              return !1;
            var E = c.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), M.setAttribute("data-selected", ""), c.date.setDate(parseInt(M.textContent)), c.setInput();
          }), D.appendChild(this.daysHead), D.appendChild(this.days), this.container.appendChild(D), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(w) {
            if (c.isOpen) {
              for (var M = w.target, E = M === c.container || M === c.input; !E && (M = M.parentNode); )
                E = M === c.container;
              (w.target.getAttribute("type") !== "date" && !E || !E) && c.hide();
            }
          }, this.removeBlur = function(w) {
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
          var h = this, y = c.getBoundingClientRect();
          this.container.style.top = y.top + y.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var D = this.container.getBoundingClientRect(), w = D.width ? D.width : 280, M = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = y.right - w;
          y.right < w ? (E = y.left, this.container.className = M() + " polyfill-left-aligned") : this.container.className = M() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var c = ["<tr>"], h = 0, y = this.locale.days.length; h < y; ++h)
            c.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = c.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(c, h, 1).getDay(), D = new Date(this.date.getFullYear(), h + 1, 0).getDate(), w = f.absoluteDate(this.input.valueAsDate) || !1, M = w && c === w.getFullYear() && h === w.getMonth(), E = [], P = 0; P < D + y; ++P)
            if (P % 7 === 0 && E.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              E.push("<td></td>");
            else {
              var N = P + 1 - y, S = M && w.getDate() === N;
              E.push("<td data-day " + (S ? "data-selected" : "") + `>
          ` + N + `
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
        } }], [{ key: "createRangeSelect", value: function(c, h, y, D) {
          c.innerHTML = "";
          for (var w = h; w <= y; ++w) {
            var M = document.createElement("option");
            c.appendChild(M);
            var E = D ? D[w - h] : w;
            M.text = E, M.value = w;
          }
          return c;
        } }, { key: "absoluteDate", value: function(c) {
          return c && new Date(c.getTime() + 60 * c.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new d(), a.default = window.thePicker;
    }, function(t, a, e) {
      t.exports = { default: e(49), __esModule: !0 };
    }, function(t, a, e) {
      t.exports = { default: e(50), __esModule: !0 };
    }, function(t, a, e) {
      t.exports = { default: e(51), __esModule: !0 };
    }, function(t, a, e) {
      t.exports = { default: e(52), __esModule: !0 };
    }, function(t, a, e) {
      function n(f) {
        return f && f.__esModule ? f : { default: f };
      }
      a.__esModule = !0;
      var o = e(47), i = n(o), u = e(46), s = n(u), d = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      a.default = typeof s.default == "function" && d(i.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : d(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : d(f);
      };
    }, function(t, a, e) {
      e(73);
      var n = e(8).Object;
      t.exports = function(o, i) {
        return n.defineProperties(o, i);
      };
    }, function(t, a, e) {
      e(74);
      var n = e(8).Object;
      t.exports = function(o, i, u) {
        return n.defineProperty(o, i, u);
      };
    }, function(t, a, e) {
      e(77), e(75), e(78), e(79), t.exports = e(8).Symbol;
    }, function(t, a, e) {
      e(76), e(80), t.exports = e(27).f("iterator");
    }, function(t, a) {
      t.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    }, function(t, a) {
      t.exports = function() {
      };
    }, function(t, a, e) {
      var n = e(5), o = e(70), i = e(69);
      t.exports = function(u) {
        return function(s, d, f) {
          var c, h = n(s), y = o(h.length), D = i(f, y);
          if (u && d != d) {
            for (; y > D; )
              if (c = h[D++], c != c)
                return !0;
          } else
            for (; y > D; D++)
              if ((u || D in h) && h[D] === d)
                return u || D || 0;
          return !u && -1;
        };
      };
    }, function(t, a, e) {
      var n = e(53);
      t.exports = function(o, i, u) {
        if (n(o), i === void 0)
          return o;
        switch (u) {
          case 1:
            return function(s) {
              return o.call(i, s);
            };
          case 2:
            return function(s, d) {
              return o.call(i, s, d);
            };
          case 3:
            return function(s, d, f) {
              return o.call(i, s, d, f);
            };
        }
        return function() {
          return o.apply(i, arguments);
        };
      };
    }, function(t, a, e) {
      var n = e(13), o = e(37), i = e(20);
      t.exports = function(u) {
        var s = n(u), d = o.f;
        if (d)
          for (var f, c = d(u), h = i.f, y = 0; c.length > y; )
            h.call(u, f = c[y++]) && s.push(f);
        return s;
      };
    }, function(t, a, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, a, e) {
      var n = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(o) {
        return n(o) == "String" ? o.split("") : Object(o);
      };
    }, function(t, a, e) {
      var n = e(30);
      t.exports = Array.isArray || function(o) {
        return n(o) == "Array";
      };
    }, function(t, a, e) {
      var n = e(34), o = e(14), i = e(21), u = {};
      e(6)(u, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, f) {
        s.prototype = n(u, { next: o(1, f) }), i(s, d + " Iterator");
      };
    }, function(t, a) {
      t.exports = function(e, n) {
        return { value: n, done: !!e };
      };
    }, function(t, a, e) {
      var n = e(13), o = e(5);
      t.exports = function(i, u) {
        for (var s, d = o(i), f = n(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === u)
            return s;
      };
    }, function(t, a, e) {
      var n = e(15)("meta"), o = e(12), i = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(M) {
        u(M, n, { value: { i: "O" + ++s, w: {} } });
      }, h = function(M, E) {
        if (!o(M))
          return typeof M == "symbol" ? M : (typeof M == "string" ? "S" : "P") + M;
        if (!i(M, n)) {
          if (!d(M))
            return "F";
          if (!E)
            return "E";
          c(M);
        }
        return M[n].i;
      }, y = function(M, E) {
        if (!i(M, n)) {
          if (!d(M))
            return !0;
          if (!E)
            return !1;
          c(M);
        }
        return M[n].w;
      }, D = function(M) {
        return f && w.NEED && d(M) && !i(M, n) && c(M), M;
      }, w = t.exports = { KEY: n, NEED: !1, fastKey: h, getWeak: y, onFreeze: D };
    }, function(t, a, e) {
      var n = e(20), o = e(14), i = e(5), u = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      a.f = e(1) ? f : function(c, h) {
        if (c = i(c), h = u(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return o(!n.f.call(c, h), c[h]);
      };
    }, function(t, a, e) {
      var n = e(5), o = e(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return o(d);
        } catch {
          return u.slice();
        }
      };
      t.exports.f = function(d) {
        return u && i.call(d) == "[object Window]" ? s(d) : o(n(d));
      };
    }, function(t, a, e) {
      var n = e(3), o = e(71), i = e(22)("IE_PROTO"), u = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = o(s), n(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(t, a, e) {
      var n = e(24), o = e(16);
      t.exports = function(i) {
        return function(u, s) {
          var d, f, c = String(o(u)), h = n(s), y = c.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? c.charAt(h) : d : i ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, a, e) {
      var n = e(24), o = Math.max, i = Math.min;
      t.exports = function(u, s) {
        return u = n(u), u < 0 ? o(u + s, 0) : i(u, s);
      };
    }, function(t, a, e) {
      var n = e(24), o = Math.min;
      t.exports = function(i) {
        return i > 0 ? o(n(i), 9007199254740991) : 0;
      };
    }, function(t, a, e) {
      var n = e(16);
      t.exports = function(o) {
        return Object(n(o));
      };
    }, function(t, a, e) {
      var n = e(54), o = e(62), i = e(18), u = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, o(1)) : d == "keys" ? o(0, f) : d == "values" ? o(0, s[f]) : o(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries");
    }, function(t, a, e) {
      var n = e(10);
      n(n.S + n.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, a, e) {
      var n = e(10);
      n(n.S + n.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, a) {
    }, function(t, a, e) {
      var n = e(68)(!0);
      e(33)(String, "String", function(o) {
        this._t = String(o), this._i = 0;
      }, function() {
        var o, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (o = n(i, u), this._i += o.length, { value: o, done: !1 });
      });
    }, function(t, a, e) {
      var n = e(2), o = e(3), i = e(1), u = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), y = e(15), D = e(7), w = e(27), M = e(26), E = e(63), P = e(57), N = e(60), S = e(9), j = e(5), g = e(25), _ = e(14), C = e(34), x = e(66), T = e(65), O = e(4), L = e(13), R = T.f, B = O.f, I = x.f, F = n.Symbol, H = n.JSON, Z = H && H.stringify, G = "prototype", W = D("_hidden"), ie = D("toPrimitive"), te = {}.propertyIsEnumerable, re = c("symbol-registry"), X = c("symbols"), ue = c("op-symbols"), U = Object[G], oe = typeof F == "function", ce = n.QObject, be = !ce || !ce[G] || !ce[G].findChild, z = i && f(function() {
        return C(B({}, "a", { get: function() {
          return B(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(k, A, Y) {
        var Q = R(U, A);
        Q && delete U[A], B(k, A, Y), Q && k !== U && B(U, A, Q);
      } : B, v = function(k) {
        var A = X[k] = C(F[G]);
        return A._k = k, A;
      }, J = oe && typeof F.iterator == "symbol" ? function(k) {
        return typeof k == "symbol";
      } : function(k) {
        return k instanceof F;
      }, ee = function(k, A, Y) {
        return k === U && ee(ue, A, Y), S(k), A = g(A, !0), S(Y), o(X, A) ? (Y.enumerable ? (o(k, W) && k[W][A] && (k[W][A] = !1), Y = C(Y, { enumerable: _(0, !1) })) : (o(k, W) || B(k, W, _(1, {})), k[W][A] = !0), z(k, A, Y)) : B(k, A, Y);
      }, ve = function(k, A) {
        S(k);
        for (var Y, Q = P(A = j(A)), ae = 0, pe = Q.length; pe > ae; )
          ee(k, Y = Q[ae++], A[Y]);
        return k;
      }, Se = function(k, A) {
        return A === void 0 ? C(k) : ve(C(k), A);
      }, q = function(k) {
        var A = te.call(this, k = g(k, !0));
        return !(this === U && o(X, k) && !o(ue, k)) && (!(A || !o(this, k) || !o(X, k) || o(this, W) && this[W][k]) || A);
      }, we = function(k, A) {
        if (k = j(k), A = g(A, !0), k !== U || !o(X, A) || o(ue, A)) {
          var Y = R(k, A);
          return !Y || !o(X, A) || o(k, W) && k[W][A] || (Y.enumerable = !0), Y;
        }
      }, ke = function(k) {
        for (var A, Y = I(j(k)), Q = [], ae = 0; Y.length > ae; )
          o(X, A = Y[ae++]) || A == W || A == d || Q.push(A);
        return Q;
      }, Me = function(k) {
        for (var A, Y = k === U, Q = I(Y ? ue : j(k)), ae = [], pe = 0; Q.length > pe; )
          !o(X, A = Q[pe++]) || Y && !o(U, A) || ae.push(X[A]);
        return ae;
      };
      oe || (F = function() {
        if (this instanceof F)
          throw TypeError("Symbol is not a constructor!");
        var k = y(arguments.length > 0 ? arguments[0] : void 0), A = function(Y) {
          this === U && A.call(ue, Y), o(this, W) && o(this[W], k) && (this[W][k] = !1), z(this, k, _(1, Y));
        };
        return i && be && z(U, k, { configurable: !0, set: A }), v(k);
      }, s(F[G], "toString", function() {
        return this._k;
      }), T.f = we, O.f = ee, e(36).f = x.f = ke, e(20).f = q, e(37).f = Me, i && !e(19) && s(U, "propertyIsEnumerable", q, !0), w.f = function(k) {
        return v(D(k));
      }), u(u.G + u.W + u.F * !oe, { Symbol: F });
      for (var me = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), _e = 0; me.length > _e; )
        D(me[_e++]);
      for (var me = L(D.store), _e = 0; me.length > _e; )
        M(me[_e++]);
      u(u.S + u.F * !oe, "Symbol", { for: function(k) {
        return o(re, k += "") ? re[k] : re[k] = F(k);
      }, keyFor: function(k) {
        if (J(k))
          return E(re, k);
        throw TypeError(k + " is not a symbol!");
      }, useSetter: function() {
        be = !0;
      }, useSimple: function() {
        be = !1;
      } }), u(u.S + u.F * !oe, "Object", { create: Se, defineProperty: ee, defineProperties: ve, getOwnPropertyDescriptor: we, getOwnPropertyNames: ke, getOwnPropertySymbols: Me }), H && u(u.S + u.F * (!oe || f(function() {
        var k = F();
        return Z([k]) != "[null]" || Z({ a: k }) != "{}" || Z(Object(k)) != "{}";
      })), "JSON", { stringify: function(k) {
        if (k !== void 0 && !J(k)) {
          for (var A, Y, Q = [k], ae = 1; arguments.length > ae; )
            Q.push(arguments[ae++]);
          return A = Q[1], typeof A == "function" && (Y = A), !Y && N(A) || (A = function(pe, ge) {
            if (Y && (ge = Y.call(this, pe, ge)), !J(ge))
              return ge;
          }), Q[1] = A, Z.apply(H, Q);
        }
      } }), F[G][ie] || e(6)(F[G], ie, F[G].valueOf), h(F, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0);
    }, function(t, a, e) {
      e(26)("asyncIterator");
    }, function(t, a, e) {
      e(26)("observable");
    }, function(t, a, e) {
      e(72);
      for (var n = e(2), o = e(6), i = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = n[f], h = c && c.prototype;
        h && !h[u] && o(h, u, f), i[f] = i.Array;
      }
    }, function(t, a, e) {
      a = t.exports = e(82)(), a.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, a) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var n = [], o = 0; o < this.length; o++) {
            var i = this[o];
            i[2] ? n.push("@media " + i[2] + "{" + i[1] + "}") : n.push(i[1]);
          }
          return n.join("");
        }, e.i = function(n, o) {
          typeof n == "string" && (n = [[null, n, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < n.length; u++) {
            var d = n[u];
            typeof d[0] == "number" && i[d[0]] || (o && !d[2] ? d[2] = o : o && (d[2] = "(" + d[2] + ") and (" + o + ")"), e.push(d));
          }
        }, e;
      };
    }, function(t, a, e) {
      function n(g, _) {
        for (var C = 0; C < g.length; C++) {
          var x = g[C], T = D[x.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](x.parts[O]);
            for (; O < x.parts.length; O++)
              T.parts.push(f(x.parts[O], _));
          } else {
            for (var L = [], O = 0; O < x.parts.length; O++)
              L.push(f(x.parts[O], _));
            D[x.id] = { id: x.id, refs: 1, parts: L };
          }
        }
      }
      function o(g) {
        for (var _ = [], C = {}, x = 0; x < g.length; x++) {
          var T = g[x], O = T[0], L = T[1], R = T[2], B = T[3], I = { css: L, media: R, sourceMap: B };
          C[O] ? C[O].parts.push(I) : _.push(C[O] = { id: O, parts: [I] });
        }
        return _;
      }
      function i(g, _) {
        var C = E(), x = S[S.length - 1];
        if (g.insertAt === "top")
          x ? x.nextSibling ? C.insertBefore(_, x.nextSibling) : C.appendChild(_) : C.insertBefore(_, C.firstChild), S.push(_);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          C.appendChild(_);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var _ = S.indexOf(g);
        _ >= 0 && S.splice(_, 1);
      }
      function s(g) {
        var _ = document.createElement("style");
        return _.type = "text/css", i(g, _), _;
      }
      function d(g) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", i(g, _), _;
      }
      function f(g, _) {
        var C, x, T;
        if (_.singleton) {
          var O = N++;
          C = P || (P = s(_)), x = c.bind(null, C, O, !1), T = c.bind(null, C, O, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (C = d(_), x = y.bind(null, C), T = function() {
            u(C), C.href && URL.revokeObjectURL(C.href);
          }) : (C = s(_), x = h.bind(null, C), T = function() {
            u(C);
          });
        return x(g), function(L) {
          if (L) {
            if (L.css === g.css && L.media === g.media && L.sourceMap === g.sourceMap)
              return;
            x(g = L);
          } else
            T();
        };
      }
      function c(g, _, C, x) {
        var T = C ? "" : x.css;
        if (g.styleSheet)
          g.styleSheet.cssText = j(_, T);
        else {
          var O = document.createTextNode(T), L = g.childNodes;
          L[_] && g.removeChild(L[_]), L.length ? g.insertBefore(O, L[_]) : g.appendChild(O);
        }
      }
      function h(g, _) {
        var C = _.css, x = _.media;
        if (x && g.setAttribute("media", x), g.styleSheet)
          g.styleSheet.cssText = C;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(C));
        }
      }
      function y(g, _) {
        var C = _.css, x = _.sourceMap;
        x && (C += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(x)))) + " */");
        var T = new Blob([C], { type: "text/css" }), O = g.href;
        g.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var D = {}, w = function(g) {
        var _;
        return function() {
          return typeof _ > "u" && (_ = g.apply(this, arguments)), _;
        };
      }, M = w(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = w(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, N = 0, S = [];
      t.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = M()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var C = o(g);
        return n(C, _), function(x) {
          for (var T = [], O = 0; O < C.length; O++) {
            var L = C[O], R = D[L.id];
            R.refs--, T.push(R);
          }
          if (x) {
            var B = o(x);
            n(B, _);
          }
          for (var O = 0; O < T.length; O++) {
            var R = T[O];
            if (R.refs === 0) {
              for (var I = 0; I < R.parts.length; I++)
                R.parts[I]();
              delete D[R.id];
            }
          }
        };
      };
      var j = function() {
        var g = [];
        return function(_, C) {
          return g[_] = C, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(t, a, e) {
      var n = e(81);
      typeof n == "string" && (n = [[t.id, n, ""]]), e(83)(n, {}), n.locals && (t.exports = n.locals);
    }]);
  });
})(Ct);
function St(l) {
  let r, t, a;
  function e(i, u) {
    return (
      /*isIdle*/
      i[9] || /*isFetching*/
      i[11] ? Tt : (
        /*backendData*/
        i[8] ? At : (
          /*error*/
          i[10] ? Et : Ot
        )
      )
    );
  }
  let n = e(l), o = n(l);
  return {
    c() {
      r = b("div"), o.c(), m(r, "class", t = `p-12 shadow-${/*shadow*/
      l[3]}`), m(r, "style", a = `
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
    m(i, u) {
      se(i, r, u), o.m(r, null);
    },
    p(i, u) {
      n === (n = e(i)) && o ? o.p(i, u) : (o.d(1), o = n(i), o && (o.c(), o.m(r, null))), u[0] & /*shadow*/
      8 && t !== (t = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(r, "class", t), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && a !== (a = `
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
`) && m(r, "style", a);
    },
    d(i) {
      i && le(r), o.d();
    }
  };
}
function Dt(l) {
  let r, t, a, e, n, o;
  function i(d, f) {
    return (
      /*statusCheckError*/
      d[12] === lt ? Pt : Lt
    );
  }
  let u = i(l), s = u(l);
  return {
    c() {
      r = b("div"), t = b("div"), a = b("h1"), a.textContent = "An error occured", e = V(), s.c(), m(a, "class", "text-2xl"), m(t, "class", "flex flex-col items-center gap-4"), m(r, "class", n = `p-4 shadow-${/*shadow*/
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
    m(d, f) {
      se(d, r, f), p(r, t), p(t, a), p(t, e), s.m(t, null);
    },
    p(d, f) {
      u === (u = i(d)) && s ? s.p(d, f) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      8 && n !== (n = `p-4 shadow-${/*shadow*/
      d[3]}`) && m(r, "class", n), f[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && o !== (o = `
        background-color: ${/*background*/
      d[13]};
        border-radius: ${/*border_radius*/
      d[2]};
        color: ${/*text_color*/
      d[6]};
        opacity: ${/*opacity*/
      d[4]}%!important;
        height: ${/*height*/
      d[0]};
        width: ${/*width*/
      d[1]};
`) && m(r, "style", o);
    },
    d(d) {
      d && le(r), s.d();
    }
  };
}
function Ot(l) {
  let r, t, a, e, n, o, i;
  return {
    c() {
      r = b("div"), t = b("h1"), t.textContent = "An unknown error", a = V(), e = b("button"), n = K("Reset Form"), m(t, "class", "text-2xl"), m(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), de(
        e,
        "background-color",
        /*button_color*/
        l[7]
      ), de(
        e,
        "color",
        /*text_color*/
        l[6]
      ), m(r, "class", "flex flex-col items-center");
    },
    m(u, s) {
      se(u, r, s), p(r, t), p(r, a), p(r, e), p(e, n), o || (i = Je(
        e,
        "click",
        /*click_handler_2*/
        l[39]
      ), o = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      128 && de(
        e,
        "background-color",
        /*button_color*/
        u[7]
      ), s[0] & /*text_color*/
      64 && de(
        e,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && le(r), o = !1, i();
    }
  };
}
function Et(l) {
  let r, t, a, e, n, o, i, u, s, d;
  return {
    c() {
      r = b("div"), t = b("h1"), t.textContent = "Error", a = V(), e = b("pre"), n = K(
        /*error*/
        l[10]
      ), o = V(), i = b("button"), u = K("Reset Form"), m(t, "class", "text-2xl"), m(e, "class", "py-3"), m(i, "class", "rounded-lg bg-black px-6 py-3 mt-4"), de(
        i,
        "background-color",
        /*button_color*/
        l[7]
      ), de(
        i,
        "color",
        /*text_color*/
        l[6]
      ), m(r, "class", "flex flex-col items-center");
    },
    m(f, c) {
      se(f, r, c), p(r, t), p(r, a), p(r, e), p(e, n), p(r, o), p(r, i), p(i, u), s || (d = Je(
        i,
        "click",
        /*click_handler_1*/
        l[38]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      1024 && ye(
        n,
        /*error*/
        f[10]
      ), c[0] & /*button_color*/
      128 && de(
        i,
        "background-color",
        /*button_color*/
        f[7]
      ), c[0] & /*text_color*/
      64 && de(
        i,
        "color",
        /*text_color*/
        f[6]
      );
    },
    d(f) {
      f && le(r), s = !1, d();
    }
  };
}
function At(l) {
  let r, t, a, e, n, o, i = (
    /*backendData*/
    l[8].data[0].third_party_exchange_rate + ""
  ), u, s, d, f, c, h = (
    /*backendData*/
    l[8].data[0].ccy_pair + ""
  ), y, D, w, M, E, P = (
    /*backendData*/
    l[8].data[0].sold_ccy + ""
  ), N, S, j = (
    /*backendData*/
    l[8].data[0].third_party_profit + ""
  ), g, _, C, x, T, O, L, R, B, I = (
    /*backendData*/
    l[8].data[0].integritas_rate + ""
  ), F, H, Z, G, W = (
    /*backendData*/
    l[8].data[0].sold_ccy + ""
  ), ie, te, re = (
    /*backendData*/
    l[8].data[0].integritas_savings + ""
  ), X, ue, U, oe, ce, be, z = (
    /*shouldShowInterbankRate*/
    l[17] && ot(l)
  );
  return {
    c() {
      r = b("div"), t = b("div"), a = b("h1"), a.textContent = "Your Provider", e = V(), n = b("p"), o = K("Your exchange rate was "), u = K(i), s = V(), z && z.c(), d = V(), f = b("p"), c = K("Your provider's markup was TODO "), y = K(h), D = K("%."), w = V(), M = b("p"), E = K(`Your provider
                        charged `), N = K(P), S = V(), g = K(j), _ = K(` on this
                        trade.`), C = V(), x = b("div"), T = b("h1"), O = K(
        /*name*/
        l[5]
      ), L = V(), R = b("p"), B = K("Our exchange rate was "), F = K(I), H = V(), Z = b("p"), G = K(`We would've saved
                        you `), ie = K(W), te = V(), X = K(re), ue = V(), U = b("button"), oe = K("Calculate again"), m(a, "class", "text-2xl"), m(n, "class", "text-sm"), m(f, "class", "text-sm"), m(M, "class", "text-sm"), m(t, "class", "flex flex-col gap-2"), m(T, "class", "text-2xl mt-4"), m(R, "class", "text-sm"), m(Z, "class", "text-sm"), m(x, "class", "flex flex-col gap-2"), m(r, "class", "flex flex-col divide-y gap-4"), m(U, "class", "rounded-lg bg-black px-6 py-3 mt-4"), de(
        U,
        "background-color",
        /*button_color*/
        l[7]
      ), de(
        U,
        "color",
        /*text_color*/
        l[6]
      );
    },
    m(v, J) {
      se(v, r, J), p(r, t), p(t, a), p(t, e), p(t, n), p(n, o), p(n, u), p(t, s), z && z.m(t, null), p(t, d), p(t, f), p(f, c), p(f, y), p(f, D), p(t, w), p(t, M), p(M, E), p(M, N), p(M, S), p(M, g), p(M, _), p(r, C), p(r, x), p(x, T), p(T, O), p(x, L), p(x, R), p(R, B), p(R, F), p(x, H), p(x, Z), p(Z, G), p(Z, ie), p(Z, te), p(Z, X), se(v, ue, J), se(v, U, J), p(U, oe), ce || (be = Je(
        U,
        "click",
        /*click_handler*/
        l[37]
      ), ce = !0);
    },
    p(v, J) {
      J[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      v[8].data[0].third_party_exchange_rate + "") && ye(u, i), /*shouldShowInterbankRate*/
      v[17] ? z ? z.p(v, J) : (z = ot(v), z.c(), z.m(t, d)) : z && (z.d(1), z = null), J[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      v[8].data[0].ccy_pair + "") && ye(y, h), J[0] & /*backendData*/
      256 && P !== (P = /*backendData*/
      v[8].data[0].sold_ccy + "") && ye(N, P), J[0] & /*backendData*/
      256 && j !== (j = /*backendData*/
      v[8].data[0].third_party_profit + "") && ye(g, j), J[0] & /*name*/
      32 && ye(
        O,
        /*name*/
        v[5]
      ), J[0] & /*backendData*/
      256 && I !== (I = /*backendData*/
      v[8].data[0].integritas_rate + "") && ye(F, I), J[0] & /*backendData*/
      256 && W !== (W = /*backendData*/
      v[8].data[0].sold_ccy + "") && ye(ie, W), J[0] & /*backendData*/
      256 && re !== (re = /*backendData*/
      v[8].data[0].integritas_savings + "") && ye(X, re), J[0] & /*button_color*/
      128 && de(
        U,
        "background-color",
        /*button_color*/
        v[7]
      ), J[0] & /*text_color*/
      64 && de(
        U,
        "color",
        /*text_color*/
        v[6]
      );
    },
    d(v) {
      v && le(r), z && z.d(), v && le(ue), v && le(U), ce = !1, be();
    }
  };
}
function Tt(l) {
  let r, t, a, e, n, o, i, u, s, d, f, c, h, y, D, w, M, E, P, N, S, j, g, _, C, x, T, O, L, R, B, I, F, H, Z, G, W, ie, te, re, X, ue, U, oe, ce, be, z, v, J, ee, ve, Se, q, we, ke, Me, me, _e, k, A, Y, Q, ae, pe, ge, De, Oe, Ee, Ae, Te, qe, Ue, Fe, Ie, Ve, fe = (
    /*shouldShowEmail*/
    l[16] && nt(l)
  );
  function Qe(ne, he) {
    return (
      /*isFetching*/
      ne[11] ? Nt : jt
    );
  }
  let Ye = Qe(l), xe = Ye(l);
  return {
    c() {
      r = b("form"), t = b("div"), a = b("div"), e = b("div"), n = b("label"), n.textContent = "Select Date", o = V(), i = b("input"), u = V(), s = b("div"), d = b("label"), d.textContent = "Select Time", f = V(), c = b("input"), h = V(), y = b("div"), D = b("div"), w = b("label"), w.textContent = "Sell Amount", M = V(), E = b("input"), P = V(), N = b("div"), S = b("label"), j = K("Sell Currency"), g = V(), _ = b("select"), C = b("option"), C.textContent = "GBP", x = b("option"), x.textContent = "USD", T = b("option"), T.textContent = "EUR", O = b("option"), O.textContent = "JPY", L = b("option"), L.textContent = "CHF", R = b("option"), R.textContent = "CNY", B = b("option"), B.textContent = "NZD", I = b("option"), I.textContent = "SGD", F = b("option"), F.textContent = "INR", H = b("option"), H.textContent = "AUD", Z = b("option"), Z.textContent = "CAD", G = b("option"), G.textContent = "HKD", W = b("option"), W.textContent = "MYR", ie = b("option"), ie.textContent = "NOK", te = b("option"), te.textContent = "ZAR", re = b("option"), re.textContent = "RUB", X = b("option"), X.textContent = "SEK", ue = V(), U = b("div"), oe = b("div"), ce = b("label"), ce.textContent = "Buy Amount", be = V(), z = b("input"), v = V(), J = b("div"), ee = b("label"), ve = K("Buy Currency"), Se = V(), q = b("select"), we = b("option"), we.textContent = "USD", ke = b("option"), ke.textContent = "GBP", Me = b("option"), Me.textContent = "EUR", me = b("option"), me.textContent = "JPY", _e = b("option"), _e.textContent = "CHF", k = b("option"), k.textContent = "CNY", A = b("option"), A.textContent = "NZD", Y = b("option"), Y.textContent = "SGD", Q = b("option"), Q.textContent = "INR", ae = b("option"), ae.textContent = "AUD", pe = b("option"), pe.textContent = "CAD", ge = b("option"), ge.textContent = "HKD", De = b("option"), De.textContent = "MYR", Oe = b("option"), Oe.textContent = "NOK", Ee = b("option"), Ee.textContent = "ZAR", Ae = b("option"), Ae.textContent = "RUB", Te = b("option"), Te.textContent = "SEK", qe = V(), fe && fe.c(), Ue = V(), Fe = b("div"), xe.c(), m(n, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        l[15]
      ), m(e, "class", "w-full"), m(d, "for", "time"), m(c, "id", "time"), m(c, "type", "time"), m(c, "class", "w-full rounded-md px-3 py-2 mt-4"), m(c, "name", "time"), m(c, "placeholder", "Select Time"), c.required = !0, m(
        c,
        "style",
        /*input_style*/
        l[15]
      ), m(s, "class", "w-full"), m(a, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(w, "for", "sold_notional"), m(E, "id", "sold_notional"), m(E, "type", "number"), m(E, "step", ".01"), m(E, "class", "w-full rounded-md px-3 py-2 mt-4"), m(E, "name", "sold_notional"), m(E, "placeholder", "10000"), E.required = !0, m(
        E,
        "style",
        /*input_style*/
        l[15]
      ), m(D, "class", "w-full"), m(S, "for", "sold_ccy"), de(
        S,
        "color",
        /*text_color*/
        l[6]
      ), C.selected = !0, C.__value = "GBP", C.value = C.__value, x.__value = "USD", x.value = x.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, L.__value = "CHF", L.value = L.__value, R.__value = "CNY", R.value = R.__value, B.__value = "NZD", B.value = B.__value, I.__value = "SGD", I.value = I.__value, F.__value = "INR", F.value = F.__value, H.__value = "AUD", H.value = H.__value, Z.__value = "CAD", Z.value = Z.__value, G.__value = "HKD", G.value = G.__value, W.__value = "MYR", W.value = W.__value, ie.__value = "NOK", ie.value = ie.__value, te.__value = "ZAR", te.value = te.__value, re.__value = "RUB", re.value = re.__value, X.__value = "SEK", X.value = X.__value, m(_, "name", "sold_ccy"), m(_, "id", "sold_ccy"), m(_, "class", "w-full rounded-md px-3 py-2 mt-4"), _.required = !0, m(
        _,
        "style",
        /*input_style*/
        l[15]
      ), m(N, "class", "w-full"), m(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(ce, "for", "bought_notional"), m(z, "id", "bought_notional"), m(z, "type", "number"), m(z, "step", ".01"), m(z, "class", "w-full rounded-md px-3 py-2 mt-4"), m(z, "name", "bought_notional"), m(z, "placeholder", "10000"), z.required = !0, m(
        z,
        "style",
        /*input_style*/
        l[15]
      ), m(oe, "class", "w-full"), m(ee, "for", "bought_ccy"), de(
        ee,
        "color",
        /*text_color*/
        l[6]
      ), we.selected = !0, we.__value = "USD", we.value = we.__value, ke.__value = "GBP", ke.value = ke.__value, Me.__value = "EUR", Me.value = Me.__value, me.__value = "JPY", me.value = me.__value, _e.__value = "CHF", _e.value = _e.__value, k.__value = "CNY", k.value = k.__value, A.__value = "NZD", A.value = A.__value, Y.__value = "SGD", Y.value = Y.__value, Q.__value = "INR", Q.value = Q.__value, ae.__value = "AUD", ae.value = ae.__value, pe.__value = "CAD", pe.value = pe.__value, ge.__value = "HKD", ge.value = ge.__value, De.__value = "MYR", De.value = De.__value, Oe.__value = "NOK", Oe.value = Oe.__value, Ee.__value = "ZAR", Ee.value = Ee.__value, Ae.__value = "RUB", Ae.value = Ae.__value, Te.__value = "SEK", Te.value = Te.__value, m(q, "name", "bought_ccy"), m(q, "id", "bought_ccy"), m(q, "class", "w-full rounded-md px-3 py-2 mt-4"), q.required = !0, m(
        q,
        "style",
        /*input_style*/
        l[15]
      ), m(J, "class", "w-full"), m(U, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(t, "class", "flex flex-col sm:gap-4");
    },
    m(ne, he) {
      se(ne, r, he), p(r, t), p(t, a), p(a, e), p(e, n), p(e, o), p(e, i), p(a, u), p(a, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, y), p(y, D), p(D, w), p(D, M), p(D, E), p(y, P), p(y, N), p(N, S), p(S, j), p(N, g), p(N, _), p(_, C), p(_, x), p(_, T), p(_, O), p(_, L), p(_, R), p(_, B), p(_, I), p(_, F), p(_, H), p(_, Z), p(_, G), p(_, W), p(_, ie), p(_, te), p(_, re), p(_, X), p(t, ue), p(t, U), p(U, oe), p(oe, ce), p(oe, be), p(oe, z), p(U, v), p(U, J), p(J, ee), p(ee, ve), p(J, Se), p(J, q), p(q, we), p(q, ke), p(q, Me), p(q, me), p(q, _e), p(q, k), p(q, A), p(q, Y), p(q, Q), p(q, ae), p(q, pe), p(q, ge), p(q, De), p(q, Oe), p(q, Ee), p(q, Ae), p(q, Te), p(t, qe), fe && fe.m(t, null), p(t, Ue), p(t, Fe), xe.m(Fe, null), Ie || (Ve = Je(
        r,
        "submit",
        /*handleFormSubmit*/
        l[19]
      ), Ie = !0);
    },
    p(ne, he) {
      he[0] & /*input_style*/
      32768 && m(
        i,
        "style",
        /*input_style*/
        ne[15]
      ), he[0] & /*input_style*/
      32768 && m(
        c,
        "style",
        /*input_style*/
        ne[15]
      ), he[0] & /*input_style*/
      32768 && m(
        E,
        "style",
        /*input_style*/
        ne[15]
      ), he[0] & /*text_color*/
      64 && de(
        S,
        "color",
        /*text_color*/
        ne[6]
      ), he[0] & /*input_style*/
      32768 && m(
        _,
        "style",
        /*input_style*/
        ne[15]
      ), he[0] & /*input_style*/
      32768 && m(
        z,
        "style",
        /*input_style*/
        ne[15]
      ), he[0] & /*text_color*/
      64 && de(
        ee,
        "color",
        /*text_color*/
        ne[6]
      ), he[0] & /*input_style*/
      32768 && m(
        q,
        "style",
        /*input_style*/
        ne[15]
      ), /*shouldShowEmail*/
      ne[16] ? fe ? fe.p(ne, he) : (fe = nt(ne), fe.c(), fe.m(t, Ue)) : fe && (fe.d(1), fe = null), Ye === (Ye = Qe(ne)) && xe ? xe.p(ne, he) : (xe.d(1), xe = Ye(ne), xe && (xe.c(), xe.m(Fe, null)));
    },
    d(ne) {
      ne && le(r), fe && fe.d(), xe.d(), Ie = !1, Ve();
    }
  };
}
function ot(l) {
  let r, t, a = (
    /*backendData*/
    l[8].data[0].ccy_pair + ""
  ), e, n, o = (
    /*backendData*/
    l[8].data[0].mid_market_rate + ""
  ), i, u;
  return {
    c() {
      r = b("p"), t = K("The interbank rate "), e = K(a), n = K(`
                            was `), i = K(o), u = K("."), m(r, "class", "text-sm");
    },
    m(s, d) {
      se(s, r, d), p(r, t), p(r, e), p(r, n), p(r, i), p(r, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      256 && a !== (a = /*backendData*/
      s[8].data[0].ccy_pair + "") && ye(e, a), d[0] & /*backendData*/
      256 && o !== (o = /*backendData*/
      s[8].data[0].mid_market_rate + "") && ye(i, o);
    },
    d(s) {
      s && le(r);
    }
  };
}
function nt(l) {
  let r, t, a, e, n;
  return {
    c() {
      r = b("div"), t = b("div"), a = b("label"), a.textContent = "Email", e = V(), n = b("input"), m(a, "for", "user"), m(n, "id", "user"), m(n, "type", "email"), m(n, "class", "w-full rounded-md px-3 py-2 mt-4"), m(n, "name", "user"), m(n, "placeholder", "JohnDoe@email.com"), n.required = !0, m(
        n,
        "style",
        /*input_style*/
        l[15]
      ), m(t, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(o, i) {
      se(o, r, i), p(r, t), p(t, a), p(t, e), p(t, n);
    },
    p(o, i) {
      i[0] & /*input_style*/
      32768 && m(
        n,
        "style",
        /*input_style*/
        o[15]
      );
    },
    d(o) {
      o && le(r);
    }
  };
}
function Nt(l) {
  let r, t, a, e, n, o, i;
  return {
    c() {
      r = b("div"), t = b("div"), a = b("button"), e = ze("svg"), n = ze("path"), o = ze("path"), i = K(`
                                        Loading...`), m(n, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(n, "fill", "#E5E7EB"), m(o, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(o, "fill", "currentColor"), m(e, "aria-hidden", "true"), m(e, "role", "status"), m(e, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(e, "viewBox", "0 0 100 101"), m(e, "fill", "none"), m(e, "xmlns", "http://www.w3.org/2000/svg"), a.disabled = !0, m(a, "type", "button"), m(a, "class", "font-medium text-sm px-6 py-3 text-center inline-flex items-center"), m(
        a,
        "style",
        /*button_style*/
        l[14]
      ), m(t, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      se(u, r, s), p(r, t), p(t, a), p(a, e), p(e, n), p(e, o), p(a, i);
    },
    p(u, s) {
      s[0] & /*button_style*/
      16384 && m(
        a,
        "style",
        /*button_style*/
        u[14]
      );
    },
    d(u) {
      u && le(r);
    }
  };
}
function jt(l) {
  let r, t, a, e;
  return {
    c() {
      r = b("div"), t = b("div"), a = b("button"), e = K(`See your
                                        charges`), m(a, "type", "submit"), m(a, "class", "px-6 py-3 mt-6"), m(
        a,
        "style",
        /*button_style*/
        l[14]
      ), m(t, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, o) {
      se(n, r, o), p(r, t), p(t, a), p(a, e);
    },
    p(n, o) {
      o[0] & /*button_style*/
      16384 && m(
        a,
        "style",
        /*button_style*/
        n[14]
      );
    },
    d(n) {
      n && le(r);
    }
  };
}
function Lt(l) {
  let r, t;
  return {
    c() {
      r = b("p"), t = K(
        /*statusCheckError*/
        l[12]
      ), m(r, "class", "text-sm");
    },
    m(a, e) {
      se(a, r, e), p(r, t);
    },
    p(a, e) {
      e[0] & /*statusCheckError*/
      4096 && ye(
        t,
        /*statusCheckError*/
        a[12]
      );
    },
    d(a) {
      a && le(r);
    }
  };
}
function Pt(l) {
  let r;
  return {
    c() {
      r = b("div"), r.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, a) {
      se(t, r, a);
    },
    p: Ce,
    d(t) {
      t && le(r);
    }
  };
}
function Rt(l) {
  let r, t, a;
  function e(i, u) {
    return (
      /*statusCheckError*/
      i[12] ? Dt : St
    );
  }
  let n = e(l), o = n(l);
  return {
    c() {
      r = b("link"), t = V(), o.c(), a = dt(), this.c = Ce, m(r, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(r, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, r), se(i, t, u), o.m(i, u), se(i, a, u);
    },
    p(i, u) {
      n === (n = e(i)) && o ? o.p(i, u) : (o.d(1), o = n(i), o && (o.c(), o.m(a.parentNode, a)));
    },
    i: Ce,
    o: Ce,
    d(i) {
      le(r), i && le(t), o.d(i), i && le(a);
    }
  };
}
const rt = "http://localhost:8000", lt = "CORS_ERROR";
function Ft(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function Yt(l, r, t) {
  let a, e, n, o, i, u, { mode: s = "auto" } = r, { height: d = "100%" } = r, { width: f = "100%" } = r, { light_mode_background: c = "#ffffff" } = r, { dark_mode_background: h = "#1f2937" } = r, { light_mode_text_color: y = "#1f2937" } = r, { dark_mode_text_color: D = "#f9fafb" } = r, { dark_mode_input_background: w = "#374151" } = r, { light_mode_input_background: M = "#f9fafb" } = r, { dark_mode_button_color: E = "#374151" } = r, { light_mode_button_color: P = "#f9fafb" } = r, { light_mode_border_color: N = "#D1D5DB" } = r, { dark_mode_border_color: S = "#374151" } = r, { border_radius: j = "15px" } = r, { input_border_radius: g = "5" } = r, { shadow: _ = "md" } = r, { opacity: C = 100 } = r, { name: x = "Our Results" } = r, { show_interbank_rate: T = "false" } = r, { show_email_input: O = "false" } = r;
  function L() {
    const v = new XMLHttpRequest();
    v.open("GET", `${rt}/`, !0), v.onerror = function() {
      v.status === 0 ? t(12, Z = lt) : t(12, Z = "We're sorry, our servers are currently down. Please try again later.");
    }, v.send();
  }
  const R = async (v) => fetch(`${rt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(v)
  });
  pt(() => {
    L();
  });
  let B, I = !0, F, H = !1, Z;
  const G = () => {
    t(8, B = void 0), t(9, I = !0), t(10, F = !1), t(11, H = !1);
  }, W = async (v) => {
    t(9, I = !1), t(11, H = !0), t(10, F = void 0);
    try {
      const J = await R(v);
      if (!J.ok) {
        const ve = await J.json();
        throw console.log("errorRes", ve), new Error(ve || `HTTP error! Status: ${J.status}`);
      }
      const ee = await J.json();
      t(11, H = !1), t(10, F = void 0), t(9, I = !1), t(8, B = ee);
    } catch (J) {
      t(11, H = !1), t(10, F = J.message), t(9, I = !1), t(8, B = void 0);
    }
  }, ie = async (v) => {
    v.preventDefault();
    const J = new FormData(v.target), ee = {};
    for (let ve of J) {
      const [Se, q] = ve;
      ee[Se] = q;
    }
    ee.prospect = "", ee.input_spread = "5", ee.prospect_annual_flow = "", ee.email_user = !1, a || (ee.user = "testUserWithoutMail@gmail.com"), console.log(ee), W(ee);
  }, te = (v) => {
    t(36, n = v.matches);
  }, re = window.matchMedia("(prefers-color-scheme: dark)");
  re.addEventListener("change", te), ht(() => {
    re.removeEventListener("change", te);
  });
  let X, ue, U, oe;
  const ce = (v) => G(), be = (v) => G(), z = (v) => G();
  return l.$$set = (v) => {
    "mode" in v && t(20, s = v.mode), "height" in v && t(0, d = v.height), "width" in v && t(1, f = v.width), "light_mode_background" in v && t(21, c = v.light_mode_background), "dark_mode_background" in v && t(22, h = v.dark_mode_background), "light_mode_text_color" in v && t(23, y = v.light_mode_text_color), "dark_mode_text_color" in v && t(24, D = v.dark_mode_text_color), "dark_mode_input_background" in v && t(25, w = v.dark_mode_input_background), "light_mode_input_background" in v && t(26, M = v.light_mode_input_background), "dark_mode_button_color" in v && t(27, E = v.dark_mode_button_color), "light_mode_button_color" in v && t(28, P = v.light_mode_button_color), "light_mode_border_color" in v && t(29, N = v.light_mode_border_color), "dark_mode_border_color" in v && t(30, S = v.dark_mode_border_color), "border_radius" in v && t(2, j = v.border_radius), "input_border_radius" in v && t(31, g = v.input_border_radius), "shadow" in v && t(3, _ = v.shadow), "opacity" in v && t(4, C = v.opacity), "name" in v && t(5, x = v.name), "show_interbank_rate" in v && t(32, T = v.show_interbank_rate), "show_email_input" in v && t(33, O = v.show_email_input);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*show_email_input*/
    4 && t(16, a = O === "true"), l.$$.dirty[1] & /*show_interbank_rate*/
    2 && t(17, e = T === "true"), l.$$.dirty[0] & /*mode*/
    1048576 && t(36, n = Ft(s)), l.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | l.$$.dirty[1] & /*isDarkMode*/
    32 && t(13, X = n ? h : c), l.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | l.$$.dirty[1] & /*isDarkMode*/
    32 && t(6, ue = n ? D : y), l.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | l.$$.dirty[1] & /*isDarkMode*/
    32 && t(34, U = n ? w : M), l.$$.dirty[0] & /*dark_mode_border_color, light_mode_border_color*/
    1610612736 | l.$$.dirty[1] & /*isDarkMode*/
    32 && t(35, o = n ? S : N), l.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | l.$$.dirty[1] & /*isDarkMode*/
    32 && t(7, oe = n ? E : P), l.$$.dirty[0] & /*text_color*/
    64 | l.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    25 && t(15, i = `
    background-color: ${U};
    color: ${ue};
    border-width: 1px;
    border-color: ${o};
    border-radius: ${g}px;
    `), l.$$.dirty[0] & /*button_color, text_color*/
    192 | l.$$.dirty[1] & /*input_border_color, input_border_radius*/
    17 && t(14, u = `
    width: 100%;
    background-color: ${oe};
    color: ${ue};
    border-width: 1px;
    border-color: ${o};
    border-radius: ${g}px;
    `);
  }, [
    d,
    f,
    j,
    _,
    C,
    x,
    ue,
    oe,
    B,
    I,
    F,
    H,
    Z,
    X,
    u,
    i,
    a,
    e,
    G,
    ie,
    s,
    c,
    h,
    y,
    D,
    w,
    M,
    E,
    P,
    N,
    S,
    g,
    T,
    O,
    U,
    o,
    n,
    ce,
    be,
    z
  ];
}
class Ht extends at {
  constructor(r) {
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
        }}</style>`, kt(
      this,
      {
        target: this.shadowRoot,
        props: ft(this.attributes),
        customElement: !0
      },
      Yt,
      Rt,
      ut,
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
    ), r && (r.target && se(r.target, this, r.anchor), r.props && (this.$set(r.props), $()));
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
    this.$$set({ mode: r }), $();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(r) {
    this.$$set({ height: r }), $();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(r) {
    this.$$set({ width: r }), $();
  }
  get light_mode_background() {
    return this.$$.ctx[21];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), $();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), $();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), $();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), $();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), $();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), $();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), $();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), $();
  }
  get light_mode_border_color() {
    return this.$$.ctx[29];
  }
  set light_mode_border_color(r) {
    this.$$set({ light_mode_border_color: r }), $();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[30];
  }
  set dark_mode_border_color(r) {
    this.$$set({ dark_mode_border_color: r }), $();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), $();
  }
  get input_border_radius() {
    return this.$$.ctx[31];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), $();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), $();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(r) {
    this.$$set({ opacity: r }), $();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(r) {
    this.$$set({ name: r }), $();
  }
  get show_interbank_rate() {
    return this.$$.ctx[32];
  }
  set show_interbank_rate(r) {
    this.$$set({ show_interbank_rate: r }), $();
  }
  get show_email_input() {
    return this.$$.ctx[33];
  }
  set show_email_input(r) {
    this.$$set({ show_email_input: r }), $();
  }
}
customElements.define("spreadm8-calc", Ht);
export {
  Ht as Spreadm8Calc
};
