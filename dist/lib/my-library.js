function Me() {
}
function We(l) {
  return l();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(l) {
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
function de(l, r, t) {
  l.insertBefore(r, t || null);
}
function ue(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function b(l) {
  return document.createElement(l);
}
function ze(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function z(l) {
  return document.createTextNode(l);
}
function B() {
  return z(" ");
}
function dt() {
  return z("");
}
function Je(l, r, t, a) {
  return l.addEventListener(r, t, a), () => l.removeEventListener(r, t, a);
}
function _(l, r, t) {
  t == null ? l.removeAttribute(r) : l.getAttribute(r) !== t && l.setAttribute(r, t);
}
function ct(l) {
  return Array.from(l.childNodes);
}
function _e(l, r) {
  r = "" + r, l.wholeText !== r && (l.data = r);
}
function oe(l, r, t, a) {
  t === null ? l.style.removeProperty(r) : l.style.setProperty(r, t, a ? "important" : "");
}
function ft(l) {
  const r = {};
  for (const t of l)
    r[t.name] = t.value;
  return r;
}
let Le;
function je(l) {
  Le = l;
}
function it() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function pt(l) {
  it().$$.on_mount.push(l);
}
function ht(l) {
  it().$$.on_destroy.push(l);
}
const Te = [], $e = [], He = [], et = [], mt = Promise.resolve();
let Ze = !1;
function _t() {
  Ze || (Ze = !0, mt.then(ie));
}
function Ge(l) {
  He.push(l);
}
const Be = /* @__PURE__ */ new Set();
let Ae = 0;
function ie() {
  if (Ae !== 0)
    return;
  const l = Le;
  do {
    try {
      for (; Ae < Te.length; ) {
        const r = Te[Ae];
        Ae++, je(r), yt(r.$$);
      }
    } catch (r) {
      throw Te.length = 0, Ae = 0, r;
    }
    for (je(null), Te.length = 0, Ae = 0; $e.length; )
      $e.pop()();
    for (let r = 0; r < He.length; r += 1) {
      const t = He[r];
      Be.has(t) || (Be.add(t), t());
    }
    He.length = 0;
  } while (Te.length);
  for (; et.length; )
    et.pop()();
  Ze = !1, Be.clear(), je(l);
}
function yt(l) {
  if (l.fragment !== null) {
    l.update(), Pe(l.before_update);
    const r = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, r), l.after_update.forEach(Ge);
  }
}
const bt = /* @__PURE__ */ new Set();
function gt(l, r) {
  l && l.i && (bt.delete(l), l.i(r));
}
function vt(l, r, t, a) {
  const { fragment: e, after_update: o } = l.$$;
  e && e.m(r, t), a || Ge(() => {
    const n = l.$$.on_mount.map(We).filter(Ke);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Pe(n), l.$$.on_mount = [];
  }), o.forEach(Ge);
}
function wt(l, r) {
  const t = l.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(r), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xt(l, r) {
  l.$$.dirty[0] === -1 && (Te.push(l), _t(), l.$$.dirty.fill(0)), l.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function kt(l, r, t, a, e, o, n, i = [-1]) {
  const u = Le;
  je(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Me,
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
  n && n(s.root);
  let d = !1;
  if (s.ctx = t ? t(l, r.props || {}, (f, c, ...h) => {
    const y = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), d && xt(l, f)), c;
  }) : [], s.update(), d = !0, Pe(s.before_update), s.fragment = a ? a(s.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = ct(r.target);
      s.fragment && s.fragment.l(f), f.forEach(ue);
    } else
      s.fragment && s.fragment.c();
    r.intro && gt(l.$$.fragment), vt(l, r.target, r.anchor, r.customElement), ie();
  }
  je(u);
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
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    wt(this, 1), this.$destroy = Me;
  }
  $on(l, r) {
    if (!Ke(r))
      return Me;
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
      function a(o) {
        if (e[o])
          return e[o].exports;
        var n = e[o] = { exports: {}, id: o, loaded: !1 };
        return t[o].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports;
      }
      var e = {};
      return a.m = t, a.c = e, a.p = "", a(0);
    }([function(t, a, e) {
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      e(84);
      var n = e(41), i = o(n), u = function() {
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
      t.exports = function(o, n) {
        return e.call(o, n);
      };
    }, function(t, a, e) {
      var o = e(9), n = e(32), i = e(25), u = Object.defineProperty;
      a.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (o(s), d = i(d, !0), o(f), n)
          try {
            return u(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
      };
    }, function(t, a, e) {
      var o = e(59), n = e(16);
      t.exports = function(i) {
        return o(n(i));
      };
    }, function(t, a, e) {
      var o = e(4), n = e(14);
      t.exports = e(1) ? function(i, u, s) {
        return o.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(t, a, e) {
      var o = e(23)("wks"), n = e(15), i = e(2).Symbol, u = typeof i == "function", s = t.exports = function(d) {
        return o[d] || (o[d] = u && i[d] || (u ? i : n)("Symbol." + d));
      };
      s.store = o;
    }, function(t, a) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, a, e) {
      var o = e(12);
      t.exports = function(n) {
        if (!o(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(t, a, e) {
      var o = e(2), n = e(8), i = e(56), u = e(6), s = "prototype", d = function(f, c, h) {
        var y, S, v, k = f & d.F, A = f & d.G, P = f & d.S, j = f & d.P, C = f & d.B, N = f & d.W, g = A ? n : n[c] || (n[c] = {}), m = g[s], M = A ? o : P ? o[c] : (o[c] || {})[s];
        A && (h = c);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = A && typeof M[y] != "function" ? h[y] : C && S ? i(v, o) : N && M[y] == v ? function(w) {
            var T = function(D, L, R) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(D);
                  case 2:
                    return new w(D, L);
                }
                return new w(D, L, R);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : j && typeof v == "function" ? i(Function.call, v) : v, j && ((g.virtual || (g.virtual = {}))[y] = v, f & d.R && m && !m[y] && u(m, y, v)));
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
      var o = e(38), n = e(17);
      t.exports = Object.keys || function(i) {
        return o(i, n);
      };
    }, function(t, a) {
      t.exports = function(e, o) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: o };
      };
    }, function(t, a) {
      var e = 0, o = Math.random();
      t.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + o).toString(36));
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
      var o = e(4).f, n = e(3), i = e(7)("toStringTag");
      t.exports = function(u, s, d) {
        u && !n(u = d ? u : u.prototype, i) && o(u, i, { configurable: !0, value: s });
      };
    }, function(t, a, e) {
      var o = e(23)("keys"), n = e(15);
      t.exports = function(i) {
        return o[i] || (o[i] = n(i));
      };
    }, function(t, a, e) {
      var o = e(2), n = "__core-js_shared__", i = o[n] || (o[n] = {});
      t.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(t, a) {
      var e = Math.ceil, o = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? o : e)(n);
      };
    }, function(t, a, e) {
      var o = e(12);
      t.exports = function(n, i) {
        if (!o(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !o(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !o(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !o(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, a, e) {
      var o = e(2), n = e(8), i = e(19), u = e(27), s = e(4).f;
      t.exports = function(d) {
        var f = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: u.f(d) });
      };
    }, function(t, a, e) {
      a.f = e(7);
    }, function(t, a) {
      a.__esModule = !0, a.default = function(e, o) {
        if (!(e instanceof o))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, a, e) {
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      a.__esModule = !0;
      var n = e(45), i = o(n);
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
      t.exports = function(o) {
        return e.call(o).slice(8, -1);
      };
    }, function(t, a, e) {
      var o = e(12), n = e(2).document, i = o(n) && o(n.createElement);
      t.exports = function(u) {
        return i ? n.createElement(u) : {};
      };
    }, function(t, a, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, a, e) {
      var o = e(19), n = e(10), i = e(39), u = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), y = e(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", A = "values", P = function() {
        return this;
      };
      t.exports = function(j, C, N, g, m, M, w) {
        f(N, C, g);
        var T, D, L, R = function(te) {
          if (!S && te in J)
            return J[te];
          switch (te) {
            case k:
              return function() {
                return new N(this, te);
              };
            case A:
              return function() {
                return new N(this, te);
              };
          }
          return function() {
            return new N(this, te);
          };
        }, W = C + " Iterator", K = m == A, H = !1, J = j.prototype, Z = J[y] || J[v] || m && J[m], G = Z || R(m), U = m ? K ? R("entries") : G : void 0, re = C == "Array" && J.entries || Z;
        if (re && (L = h(re.call(new j())), L !== Object.prototype && (c(L, W, !0), o || s(L, y) || u(L, y, P))), K && Z && Z.name !== A && (H = !0, G = function() {
          return Z.call(this);
        }), o && !w || !S && !H && J[y] || u(J, y, G), d[C] = G, d[W] = P, m)
          if (T = { values: K ? G : R(A), keys: M ? G : R(k), entries: U }, w)
            for (D in T)
              D in J || i(J, D, T[D]);
          else
            n(n.P + n.F * (S || H), C, T);
        return T;
      };
    }, function(t, a, e) {
      var o = e(9), n = e(35), i = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), y = i.length, S = "<", v = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(S + "script" + v + "document.F=Object" + S + "/script" + v), c.close(), f = c.F; y--; )
          delete f[d][i[y]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var y;
        return c !== null ? (s[d] = o(c), y = new s(), s[d] = null, y[u] = c) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(t, a, e) {
      var o = e(4), n = e(9), i = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, f = i(s), c = f.length, h = 0; c > h; )
          o.f(u, d = f[h++], s[d]);
        return u;
      };
    }, function(t, a, e) {
      var o = e(38), n = e(17).concat("length", "prototype");
      a.f = Object.getOwnPropertyNames || function(i) {
        return o(i, n);
      };
    }, function(t, a) {
      a.f = Object.getOwnPropertySymbols;
    }, function(t, a, e) {
      var o = e(3), n = e(5), i = e(55)(!1), u = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var f, c = n(s), h = 0, y = [];
        for (f in c)
          f != u && o(c, f) && y.push(f);
        for (; d.length > h; )
          o(c, f = d[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(t, a, e) {
      t.exports = e(6);
    }, function(t, a, e) {
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
      Object.defineProperty(a, "__esModule", { value: !0 });
      var d = e(48), f = o(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, A, P) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(c.masks[k] || k || c.masks.default);
          var j = k.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (k = k.slice(4), A = !0, j === "GMT:" && (P = !0));
          var C = A ? "getUTC" : "get", N = v[C + "Date"](), g = v[C + "Day"](), m = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), D = v[C + "Seconds"](), L = v[C + "Milliseconds"](), R = A ? 0 : v.getTimezoneOffset(), W = i(v), K = u(v), H = { d: N, dd: n(N), ddd: c.i18n.dayNames[g], dddd: c.i18n.dayNames[g + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: D, ss: n(D), l: n(L, 3), L: n(Math.round(L / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: P ? "GMT" : A ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (R > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(R) / 60) + Math.abs(R) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W, N: K };
          return k.replace(h, function(J) {
            return J in H ? H[J] : J.slice(1, J.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, a.default = c;
    }, function(t, a, e) {
      function o(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = e(44), i = o(n), u = e(28), s = o(u), d = e(29), f = o(d), c = e(43), h = o(c), y = e(42), S = o(y), v = e(40), k = o(v), A = function() {
        function P(j) {
          var C = this;
          (0, s.default)(this, P), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
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
      a.default = A;
    }, function(t, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      a.default = e;
    }, function(t, a, e) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = e(28), i = o(n), u = e(29), s = o(u), d = function() {
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
            var v = new Date();
            c.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var A = c.days.querySelector("[data-selected]");
            A && A.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), c.date.setDate(parseInt(k.textContent)), c.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (c.isOpen) {
              for (var k = v.target, A = k === c.container || k === c.input; !A && (k = k.parentNode); )
                A = k === c.container;
              (v.target.getAttribute("type") !== "date" && !A || !A) && c.hide();
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
          var h = this, y = c.getBoundingClientRect();
          this.container.style.top = y.top + y.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, k = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, A = y.right - v;
          y.right < v ? (A = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = A + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(c, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && c === v.getFullYear() && h === v.getMonth(), A = [], P = 0; P < S + y; ++P)
            if (P % 7 === 0 && A.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              A.push("<td></td>");
            else {
              var j = P + 1 - y, C = k && v.getDate() === j;
              A.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + j + `
        </td>`);
            }
          this.days.innerHTML = A.join("");
        } }, { key: "pingInput", value: function() {
          var c = void 0, h = void 0;
          try {
            c = new Event("input"), h = new Event("change");
          } catch {
            c = document.createEvent("KeyboardEvent"), c.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(c), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(c, h, y, S) {
          c.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            c.appendChild(k);
            var A = S ? S[v - h] : v;
            k.text = A, k.value = v;
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
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      a.__esModule = !0;
      var n = e(47), i = o(n), u = e(46), s = o(u), d = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
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
      var o = e(8).Object;
      t.exports = function(n, i) {
        return o.defineProperties(n, i);
      };
    }, function(t, a, e) {
      e(74);
      var o = e(8).Object;
      t.exports = function(n, i, u) {
        return o.defineProperty(n, i, u);
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
      var o = e(5), n = e(70), i = e(69);
      t.exports = function(u) {
        return function(s, d, f) {
          var c, h = o(s), y = n(h.length), S = i(f, y);
          if (u && d != d) {
            for (; y > S; )
              if (c = h[S++], c != c)
                return !0;
          } else
            for (; y > S; S++)
              if ((u || S in h) && h[S] === d)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(t, a, e) {
      var o = e(53);
      t.exports = function(n, i, u) {
        if (o(n), i === void 0)
          return n;
        switch (u) {
          case 1:
            return function(s) {
              return n.call(i, s);
            };
          case 2:
            return function(s, d) {
              return n.call(i, s, d);
            };
          case 3:
            return function(s, d, f) {
              return n.call(i, s, d, f);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(t, a, e) {
      var o = e(13), n = e(37), i = e(20);
      t.exports = function(u) {
        var s = o(u), d = n.f;
        if (d)
          for (var f, c = d(u), h = i.f, y = 0; c.length > y; )
            h.call(u, f = c[y++]) && s.push(f);
        return s;
      };
    }, function(t, a, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, a, e) {
      var o = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return o(n) == "String" ? n.split("") : Object(n);
      };
    }, function(t, a, e) {
      var o = e(30);
      t.exports = Array.isArray || function(n) {
        return o(n) == "Array";
      };
    }, function(t, a, e) {
      var o = e(34), n = e(14), i = e(21), u = {};
      e(6)(u, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, f) {
        s.prototype = o(u, { next: n(1, f) }), i(s, d + " Iterator");
      };
    }, function(t, a) {
      t.exports = function(e, o) {
        return { value: o, done: !!e };
      };
    }, function(t, a, e) {
      var o = e(13), n = e(5);
      t.exports = function(i, u) {
        for (var s, d = n(i), f = o(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === u)
            return s;
      };
    }, function(t, a, e) {
      var o = e(15)("meta"), n = e(12), i = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(k) {
        u(k, o, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, A) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, o)) {
          if (!d(k))
            return "F";
          if (!A)
            return "E";
          c(k);
        }
        return k[o].i;
      }, y = function(k, A) {
        if (!i(k, o)) {
          if (!d(k))
            return !0;
          if (!A)
            return !1;
          c(k);
        }
        return k[o].w;
      }, S = function(k) {
        return f && v.NEED && d(k) && !i(k, o) && c(k), k;
      }, v = t.exports = { KEY: o, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(t, a, e) {
      var o = e(20), n = e(14), i = e(5), u = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      a.f = e(1) ? f : function(c, h) {
        if (c = i(c), h = u(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return n(!o.f.call(c, h), c[h]);
      };
    }, function(t, a, e) {
      var o = e(5), n = e(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch {
          return u.slice();
        }
      };
      t.exports.f = function(d) {
        return u && i.call(d) == "[object Window]" ? s(d) : n(o(d));
      };
    }, function(t, a, e) {
      var o = e(3), n = e(71), i = e(22)("IE_PROTO"), u = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), o(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(t, a, e) {
      var o = e(24), n = e(16);
      t.exports = function(i) {
        return function(u, s) {
          var d, f, c = String(n(u)), h = o(s), y = c.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? c.charAt(h) : d : i ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, a, e) {
      var o = e(24), n = Math.max, i = Math.min;
      t.exports = function(u, s) {
        return u = o(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(t, a, e) {
      var o = e(24), n = Math.min;
      t.exports = function(i) {
        return i > 0 ? n(o(i), 9007199254740991) : 0;
      };
    }, function(t, a, e) {
      var o = e(16);
      t.exports = function(n) {
        return Object(o(n));
      };
    }, function(t, a, e) {
      var o = e(54), n = e(62), i = e(18), u = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, function(t, a, e) {
      var o = e(10);
      o(o.S + o.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, a, e) {
      var o = e(10);
      o(o.S + o.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, a) {
    }, function(t, a, e) {
      var o = e(68)(!0);
      e(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = o(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, a, e) {
      var o = e(2), n = e(3), i = e(1), u = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), y = e(15), S = e(7), v = e(27), k = e(26), A = e(63), P = e(57), j = e(60), C = e(9), N = e(5), g = e(25), m = e(14), M = e(34), w = e(66), T = e(65), D = e(4), L = e(13), R = T.f, W = D.f, K = w.f, H = o.Symbol, J = o.JSON, Z = J && J.stringify, G = "prototype", U = S("_hidden"), re = S("toPrimitive"), te = {}.propertyIsEnumerable, ae = c("symbol-registry"), ee = c("symbols"), O = c("op-symbols"), F = Object[G], V = typeof H == "function", se = o.QObject, ye = !se || !se[G] || !se[G].findChild, I = i && f(function() {
        return M(W({}, "a", { get: function() {
          return W(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, E, Y) {
        var $ = R(F, E);
        $ && delete F[E], W(x, E, Y), $ && x !== F && W(F, E, $);
      } : W, Q = function(x) {
        var E = ee[x] = M(H[G]);
        return E._k = x, E;
      }, X = V && typeof H.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof H;
      }, be = function(x, E, Y) {
        return x === F && be(O, E, Y), C(x), E = g(E, !0), C(Y), n(ee, E) ? (Y.enumerable ? (n(x, U) && x[U][E] && (x[U][E] = !1), Y = M(Y, { enumerable: m(0, !1) })) : (n(x, U) || W(x, U, m(1, {})), x[U][E] = !0), I(x, E, Y)) : W(x, E, Y);
      }, Ne = function(x, E) {
        C(x);
        for (var Y, $ = P(E = N(E)), le = 0, fe = $.length; fe > le; )
          be(x, Y = $[le++], E[Y]);
        return x;
      }, Re = function(x, E) {
        return E === void 0 ? M(x) : Ne(M(x), E);
      }, q = function(x) {
        var E = te.call(this, x = g(x, !0));
        return !(this === F && n(ee, x) && !n(O, x)) && (!(E || !n(this, x) || !n(ee, x) || n(this, U) && this[U][x]) || E);
      }, ve = function(x, E) {
        if (x = N(x), E = g(E, !0), x !== F || !n(ee, E) || n(O, E)) {
          var Y = R(x, E);
          return !Y || !n(ee, E) || n(x, U) && x[U][E] || (Y.enumerable = !0), Y;
        }
      }, xe = function(x) {
        for (var E, Y = K(N(x)), $ = [], le = 0; Y.length > le; )
          n(ee, E = Y[le++]) || E == U || E == d || $.push(E);
        return $;
      }, ke = function(x) {
        for (var E, Y = x === F, $ = K(Y ? O : N(x)), le = [], fe = 0; $.length > fe; )
          !n(ee, E = $[fe++]) || Y && !n(F, E) || le.push(ee[E]);
        return le;
      };
      V || (H = function() {
        if (this instanceof H)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), E = function(Y) {
          this === F && E.call(O, Y), n(this, U) && n(this[U], x) && (this[U][x] = !1), I(this, x, m(1, Y));
        };
        return i && ye && I(F, x, { configurable: !0, set: E }), Q(x);
      }, s(H[G], "toString", function() {
        return this._k;
      }), T.f = ve, D.f = be, e(36).f = w.f = xe, e(20).f = q, e(37).f = ke, i && !e(19) && s(F, "propertyIsEnumerable", q, !0), v.f = function(x) {
        return Q(S(x));
      }), u(u.G + u.W + u.F * !V, { Symbol: H });
      for (var he = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; he.length > me; )
        S(he[me++]);
      for (var he = L(S.store), me = 0; he.length > me; )
        k(he[me++]);
      u(u.S + u.F * !V, "Symbol", { for: function(x) {
        return n(ae, x += "") ? ae[x] : ae[x] = H(x);
      }, keyFor: function(x) {
        if (X(x))
          return A(ae, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        ye = !0;
      }, useSimple: function() {
        ye = !1;
      } }), u(u.S + u.F * !V, "Object", { create: Re, defineProperty: be, defineProperties: Ne, getOwnPropertyDescriptor: ve, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), J && u(u.S + u.F * (!V || f(function() {
        var x = H();
        return Z([x]) != "[null]" || Z({ a: x }) != "{}" || Z(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !X(x)) {
          for (var E, Y, $ = [x], le = 1; arguments.length > le; )
            $.push(arguments[le++]);
          return E = $[1], typeof E == "function" && (Y = E), !Y && j(E) || (E = function(fe, ge) {
            if (Y && (ge = Y.call(this, fe, ge)), !X(ge))
              return ge;
          }), $[1] = E, Z.apply(J, $);
        }
      } }), H[G][re] || e(6)(H[G], re, H[G].valueOf), h(H, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0);
    }, function(t, a, e) {
      e(26)("asyncIterator");
    }, function(t, a, e) {
      e(26)("observable");
    }, function(t, a, e) {
      e(72);
      for (var o = e(2), n = e(6), i = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = o[f], h = c && c.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
      }
    }, function(t, a, e) {
      a = t.exports = e(82)(), a.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, a) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var o = [], n = 0; n < this.length; n++) {
            var i = this[n];
            i[2] ? o.push("@media " + i[2] + "{" + i[1] + "}") : o.push(i[1]);
          }
          return o.join("");
        }, e.i = function(o, n) {
          typeof o == "string" && (o = [[null, o, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < o.length; u++) {
            var d = o[u];
            typeof d[0] == "number" && i[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), e.push(d));
          }
        }, e;
      };
    }, function(t, a, e) {
      function o(g, m) {
        for (var M = 0; M < g.length; M++) {
          var w = g[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var D = 0; D < T.parts.length; D++)
              T.parts[D](w.parts[D]);
            for (; D < w.parts.length; D++)
              T.parts.push(f(w.parts[D], m));
          } else {
            for (var L = [], D = 0; D < w.parts.length; D++)
              L.push(f(w.parts[D], m));
            S[w.id] = { id: w.id, refs: 1, parts: L };
          }
        }
      }
      function n(g) {
        for (var m = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], D = T[0], L = T[1], R = T[2], W = T[3], K = { css: L, media: R, sourceMap: W };
          M[D] ? M[D].parts.push(K) : m.push(M[D] = { id: D, parts: [K] });
        }
        return m;
      }
      function i(g, m) {
        var M = A(), w = C[C.length - 1];
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
        return m.type = "text/css", i(g, m), m;
      }
      function d(g) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", i(g, m), m;
      }
      function f(g, m) {
        var M, w, T;
        if (m.singleton) {
          var D = j++;
          M = P || (P = s(m)), w = c.bind(null, M, D, !1), T = c.bind(null, M, D, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = d(m), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(m), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(g), function(L) {
          if (L) {
            if (L.css === g.css && L.media === g.media && L.sourceMap === g.sourceMap)
              return;
            w(g = L);
          } else
            T();
        };
      }
      function c(g, m, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = N(m, T);
        else {
          var D = document.createTextNode(T), L = g.childNodes;
          L[m] && g.removeChild(L[m]), L.length ? g.insertBefore(D, L[m]) : g.appendChild(D);
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
        var T = new Blob([M], { type: "text/css" }), D = g.href;
        g.href = URL.createObjectURL(T), D && URL.revokeObjectURL(D);
      }
      var S = {}, v = function(g) {
        var m;
        return function() {
          return typeof m > "u" && (m = g.apply(this, arguments)), m;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), A = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, j = 0, C = [];
      t.exports = function(g, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = k()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var M = n(g);
        return o(M, m), function(w) {
          for (var T = [], D = 0; D < M.length; D++) {
            var L = M[D], R = S[L.id];
            R.refs--, T.push(R);
          }
          if (w) {
            var W = n(w);
            o(W, m);
          }
          for (var D = 0; D < T.length; D++) {
            var R = T[D];
            if (R.refs === 0) {
              for (var K = 0; K < R.parts.length; K++)
                R.parts[K]();
              delete S[R.id];
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
    }, function(t, a, e) {
      var o = e(81);
      typeof o == "string" && (o = [[t.id, o, ""]]), e(83)(o, {}), o.locals && (t.exports = o.locals);
    }]);
  });
})(Ct);
function St(l) {
  let r, t, a;
  function e(i, u) {
    return (
      /*isIdle*/
      i[6] || /*isFetching*/
      i[8] ? Tt : (
        /*backendData*/
        i[5] ? At : (
          /*error*/
          i[7] ? Et : Ot
        )
      )
    );
  }
  let o = e(l), n = o(l);
  return {
    c() {
      r = b("div"), n.c(), _(r, "class", t = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(r, "style", a = `
        background-color: ${/*background*/
      l[10]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[4]};
        opacity: ${/*opacity*/
      l[2]}%!important;
`);
    },
    m(i, u) {
      de(i, r, u), n.m(r, null);
    },
    p(i, u) {
      o === (o = e(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(r, null))), u[0] & /*shadow*/
      2 && t !== (t = `w-full p-4 shadow-${/*shadow*/
      i[1]}`) && _(r, "class", t), u[0] & /*background, border_radius, text_color, opacity*/
      1045 && a !== (a = `
        background-color: ${/*background*/
      i[10]};
        border-radius: ${/*border_radius*/
      i[0]};
        color: ${/*text_color*/
      i[4]};
        opacity: ${/*opacity*/
      i[2]}%!important;
`) && _(r, "style", a);
    },
    d(i) {
      i && ue(r), n.d();
    }
  };
}
function Dt(l) {
  let r, t, a, e, o, n;
  function i(d, f) {
    return (
      /*statusCheckError*/
      d[9] === lt ? Pt : Lt
    );
  }
  let u = i(l), s = u(l);
  return {
    c() {
      r = b("div"), t = b("div"), a = b("h1"), a.textContent = "An error occured", e = B(), s.c(), _(a, "class", "text-2xl"), _(t, "class", "flex flex-col items-center gap-4"), _(r, "class", o = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(r, "style", n = `
        background-color: ${/*background*/
      l[10]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[4]};
        opacity: ${/*opacity*/
      l[2]}%!important;
`);
    },
    m(d, f) {
      de(d, r, f), p(r, t), p(t, a), p(t, e), s.m(t, null);
    },
    p(d, f) {
      u === (u = i(d)) && s ? s.p(d, f) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      2 && o !== (o = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && _(r, "class", o), f[0] & /*background, border_radius, text_color, opacity*/
      1045 && n !== (n = `
        background-color: ${/*background*/
      d[10]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[4]};
        opacity: ${/*opacity*/
      d[2]}%!important;
`) && _(r, "style", n);
    },
    d(d) {
      d && ue(r), s.d();
    }
  };
}
function Ot(l) {
  let r, t, a, e, o, n, i;
  return {
    c() {
      r = b("div"), t = b("h1"), t.textContent = "An unknown error", a = B(), e = b("button"), o = z("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        e,
        "background-color",
        /*button_color*/
        l[11]
      ), oe(
        e,
        "color",
        /*text_color*/
        l[4]
      ), _(r, "class", "flex flex-col items-center");
    },
    m(u, s) {
      de(u, r, s), p(r, t), p(r, a), p(r, e), p(e, o), n || (i = Je(
        e,
        "click",
        /*click_handler_2*/
        l[33]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      2048 && oe(
        e,
        "background-color",
        /*button_color*/
        u[11]
      ), s[0] & /*text_color*/
      16 && oe(
        e,
        "color",
        /*text_color*/
        u[4]
      );
    },
    d(u) {
      u && ue(r), n = !1, i();
    }
  };
}
function Et(l) {
  let r, t, a, e, o, n, i, u, s, d;
  return {
    c() {
      r = b("div"), t = b("h1"), t.textContent = "Error", a = B(), e = b("pre"), o = z(
        /*error*/
        l[7]
      ), n = B(), i = b("button"), u = z("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "py-3"), _(i, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        i,
        "background-color",
        /*button_color*/
        l[11]
      ), oe(
        i,
        "color",
        /*text_color*/
        l[4]
      ), _(r, "class", "flex flex-col items-center");
    },
    m(f, c) {
      de(f, r, c), p(r, t), p(r, a), p(r, e), p(e, o), p(r, n), p(r, i), p(i, u), s || (d = Je(
        i,
        "click",
        /*click_handler_1*/
        l[32]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      128 && _e(
        o,
        /*error*/
        f[7]
      ), c[0] & /*button_color*/
      2048 && oe(
        i,
        "background-color",
        /*button_color*/
        f[11]
      ), c[0] & /*text_color*/
      16 && oe(
        i,
        "color",
        /*text_color*/
        f[4]
      );
    },
    d(f) {
      f && ue(r), s = !1, d();
    }
  };
}
function At(l) {
  let r, t, a, e, o, n, i = (
    /*backendData*/
    l[5].data[0].third_party_exchange_rate + ""
  ), u, s, d, f, c, h = (
    /*backendData*/
    l[5].data[0].ccy_pair + ""
  ), y, S, v, k, A, P = (
    /*backendData*/
    l[5].data[0].sold_ccy + ""
  ), j, C, N = (
    /*backendData*/
    l[5].data[0].third_party_profit + ""
  ), g, m, M, w, T, D, L, R, W, K = (
    /*backendData*/
    l[5].data[0].integritas_rate + ""
  ), H, J, Z, G, U = (
    /*backendData*/
    l[5].data[0].sold_ccy + ""
  ), re, te, ae = (
    /*backendData*/
    l[5].data[0].integritas_savings + ""
  ), ee, O, F, V, se, ye, I = (
    /*shouldShowInterbankRate*/
    l[14] && nt(l)
  );
  return {
    c() {
      r = b("div"), t = b("div"), a = b("h1"), a.textContent = "Your Provider", e = B(), o = b("p"), n = z("Your exchange rate was "), u = z(i), s = B(), I && I.c(), d = B(), f = b("p"), c = z("Your provider's markup was TODO "), y = z(h), S = z("%."), v = B(), k = b("p"), A = z(`Your provider
                        charged `), j = z(P), C = B(), g = z(N), m = z(` on this
                        trade.`), M = B(), w = b("div"), T = b("h1"), D = z(
        /*name*/
        l[3]
      ), L = B(), R = b("p"), W = z("Our exchange rate was "), H = z(K), J = B(), Z = b("p"), G = z(`We would've saved
                        you `), re = z(U), te = B(), ee = z(ae), O = B(), F = b("button"), V = z("Calculate again"), _(a, "class", "text-2xl"), _(o, "class", "text-sm"), _(f, "class", "text-sm"), _(k, "class", "text-sm"), _(t, "class", "flex flex-col gap-2"), _(T, "class", "text-2xl mt-4"), _(R, "class", "text-sm"), _(Z, "class", "text-sm"), _(w, "class", "flex flex-col gap-2"), _(r, "class", "flex flex-col divide-y gap-4"), _(F, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        F,
        "background-color",
        /*button_color*/
        l[11]
      ), oe(
        F,
        "color",
        /*text_color*/
        l[4]
      );
    },
    m(Q, X) {
      de(Q, r, X), p(r, t), p(t, a), p(t, e), p(t, o), p(o, n), p(o, u), p(t, s), I && I.m(t, null), p(t, d), p(t, f), p(f, c), p(f, y), p(f, S), p(t, v), p(t, k), p(k, A), p(k, j), p(k, C), p(k, g), p(k, m), p(r, M), p(r, w), p(w, T), p(T, D), p(w, L), p(w, R), p(R, W), p(R, H), p(w, J), p(w, Z), p(Z, G), p(Z, re), p(Z, te), p(Z, ee), de(Q, O, X), de(Q, F, X), p(F, V), se || (ye = Je(
        F,
        "click",
        /*click_handler*/
        l[31]
      ), se = !0);
    },
    p(Q, X) {
      X[0] & /*backendData*/
      32 && i !== (i = /*backendData*/
      Q[5].data[0].third_party_exchange_rate + "") && _e(u, i), /*shouldShowInterbankRate*/
      Q[14] ? I ? I.p(Q, X) : (I = nt(Q), I.c(), I.m(t, d)) : I && (I.d(1), I = null), X[0] & /*backendData*/
      32 && h !== (h = /*backendData*/
      Q[5].data[0].ccy_pair + "") && _e(y, h), X[0] & /*backendData*/
      32 && P !== (P = /*backendData*/
      Q[5].data[0].sold_ccy + "") && _e(j, P), X[0] & /*backendData*/
      32 && N !== (N = /*backendData*/
      Q[5].data[0].third_party_profit + "") && _e(g, N), X[0] & /*name*/
      8 && _e(
        D,
        /*name*/
        Q[3]
      ), X[0] & /*backendData*/
      32 && K !== (K = /*backendData*/
      Q[5].data[0].integritas_rate + "") && _e(H, K), X[0] & /*backendData*/
      32 && U !== (U = /*backendData*/
      Q[5].data[0].sold_ccy + "") && _e(re, U), X[0] & /*backendData*/
      32 && ae !== (ae = /*backendData*/
      Q[5].data[0].integritas_savings + "") && _e(ee, ae), X[0] & /*button_color*/
      2048 && oe(
        F,
        "background-color",
        /*button_color*/
        Q[11]
      ), X[0] & /*text_color*/
      16 && oe(
        F,
        "color",
        /*text_color*/
        Q[4]
      );
    },
    d(Q) {
      Q && ue(r), I && I.d(), Q && ue(O), Q && ue(F), se = !1, ye();
    }
  };
}
function Tt(l) {
  let r, t, a, e, o, n, i, u, s, d, f, c, h, y, S, v, k, A, P, j, C, N, g, m, M, w, T, D, L, R, W, K, H, J, Z, G, U, re, te, ae, ee, O, F, V, se, ye, I, Q, X, be, Ne, Re, q, ve, xe, ke, he, me, x, E, Y, $, le, fe, ge, Ce, Se, De, Oe, Ee, qe, Ue, Fe, Ie, Ve, ce = (
    /*shouldShowEmail*/
    l[13] && ot(l)
  );
  function Qe(ne, pe) {
    return (
      /*isFetching*/
      ne[8] ? Nt : jt
    );
  }
  let Ye = Qe(l), we = Ye(l);
  return {
    c() {
      r = b("form"), t = b("div"), a = b("div"), e = b("div"), o = b("label"), o.textContent = "Select Date", n = B(), i = b("input"), u = B(), s = b("div"), d = b("label"), d.textContent = "Select Time", f = B(), c = b("input"), h = B(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = B(), A = b("input"), P = B(), j = b("div"), C = b("label"), N = z("Sell Currency"), g = B(), m = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", D = b("option"), D.textContent = "JPY", L = b("option"), L.textContent = "CHF", R = b("option"), R.textContent = "CNY", W = b("option"), W.textContent = "NZD", K = b("option"), K.textContent = "SGD", H = b("option"), H.textContent = "INR", J = b("option"), J.textContent = "AUD", Z = b("option"), Z.textContent = "CAD", G = b("option"), G.textContent = "HKD", U = b("option"), U.textContent = "MYR", re = b("option"), re.textContent = "NOK", te = b("option"), te.textContent = "ZAR", ae = b("option"), ae.textContent = "RUB", ee = b("option"), ee.textContent = "SEK", O = B(), F = b("div"), V = b("div"), se = b("label"), se.textContent = "Buy Amount", ye = B(), I = b("input"), Q = B(), X = b("div"), be = b("label"), Ne = z("Buy Currency"), Re = B(), q = b("select"), ve = b("option"), ve.textContent = "USD", xe = b("option"), xe.textContent = "GBP", ke = b("option"), ke.textContent = "EUR", he = b("option"), he.textContent = "JPY", me = b("option"), me.textContent = "CHF", x = b("option"), x.textContent = "CNY", E = b("option"), E.textContent = "NZD", Y = b("option"), Y.textContent = "SGD", $ = b("option"), $.textContent = "INR", le = b("option"), le.textContent = "AUD", fe = b("option"), fe.textContent = "CAD", ge = b("option"), ge.textContent = "HKD", Ce = b("option"), Ce.textContent = "MYR", Se = b("option"), Se.textContent = "NOK", De = b("option"), De.textContent = "ZAR", Oe = b("option"), Oe.textContent = "RUB", Ee = b("option"), Ee.textContent = "SEK", qe = B(), ce && ce.c(), Ue = B(), Fe = b("div"), we.c(), _(o, "for", "date"), _(i, "id", "date"), _(i, "type", "date"), _(i, "class", "w-full rounded-md px-3 py-2 mt-4"), _(i, "name", "date"), _(i, "placeholder", "Select date"), i.required = !0, _(
        i,
        "style",
        /*input_style*/
        l[12]
      ), _(e, "class", "w-full"), _(d, "for", "time"), _(c, "id", "time"), _(c, "type", "time"), _(c, "class", "w-full rounded-md px-3 py-2 mt-4"), _(c, "name", "time"), _(c, "placeholder", "Select Time"), c.required = !0, _(
        c,
        "style",
        /*input_style*/
        l[12]
      ), _(s, "class", "w-full"), _(a, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), _(v, "for", "sold_notional"), _(A, "id", "sold_notional"), _(A, "type", "number"), _(A, "step", ".01"), _(A, "class", "w-full rounded-md px-3 py-2 mt-4"), _(A, "name", "sold_notional"), _(A, "placeholder", "10000"), A.required = !0, _(
        A,
        "style",
        /*input_style*/
        l[12]
      ), _(S, "class", "w-full"), _(C, "for", "sold_ccy"), oe(
        C,
        "color",
        /*text_color*/
        l[4]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, D.__value = "JPY", D.value = D.__value, L.__value = "CHF", L.value = L.__value, R.__value = "CNY", R.value = R.__value, W.__value = "NZD", W.value = W.__value, K.__value = "SGD", K.value = K.__value, H.__value = "INR", H.value = H.__value, J.__value = "AUD", J.value = J.__value, Z.__value = "CAD", Z.value = Z.__value, G.__value = "HKD", G.value = G.__value, U.__value = "MYR", U.value = U.__value, re.__value = "NOK", re.value = re.__value, te.__value = "ZAR", te.value = te.__value, ae.__value = "RUB", ae.value = ae.__value, ee.__value = "SEK", ee.value = ee.__value, _(m, "name", "sold_ccy"), _(m, "id", "sold_ccy"), _(m, "class", "w-full rounded-md px-3 py-2 mt-4"), m.required = !0, _(
        m,
        "style",
        /*input_style*/
        l[12]
      ), _(j, "class", "w-full"), _(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(se, "for", "bought_notional"), _(I, "id", "bought_notional"), _(I, "type", "number"), _(I, "step", ".01"), _(I, "class", "w-full rounded-md px-3 py-2 mt-4"), _(I, "name", "bought_notional"), _(I, "placeholder", "10000"), I.required = !0, _(
        I,
        "style",
        /*input_style*/
        l[12]
      ), _(V, "class", "w-full"), _(be, "for", "bought_ccy"), oe(
        be,
        "color",
        /*text_color*/
        l[4]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, he.__value = "JPY", he.value = he.__value, me.__value = "CHF", me.value = me.__value, x.__value = "CNY", x.value = x.__value, E.__value = "NZD", E.value = E.__value, Y.__value = "SGD", Y.value = Y.__value, $.__value = "INR", $.value = $.__value, le.__value = "AUD", le.value = le.__value, fe.__value = "CAD", fe.value = fe.__value, ge.__value = "HKD", ge.value = ge.__value, Ce.__value = "MYR", Ce.value = Ce.__value, Se.__value = "NOK", Se.value = Se.__value, De.__value = "ZAR", De.value = De.__value, Oe.__value = "RUB", Oe.value = Oe.__value, Ee.__value = "SEK", Ee.value = Ee.__value, _(q, "name", "bought_ccy"), _(q, "id", "bought_ccy"), _(q, "class", "w-full rounded-md px-3 py-2 mt-4"), q.required = !0, _(
        q,
        "style",
        /*input_style*/
        l[12]
      ), _(X, "class", "w-full"), _(F, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(t, "class", "flex flex-col sm:gap-4");
    },
    m(ne, pe) {
      de(ne, r, pe), p(r, t), p(t, a), p(a, e), p(e, o), p(e, n), p(e, i), p(a, u), p(a, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, y), p(y, S), p(S, v), p(S, k), p(S, A), p(y, P), p(y, j), p(j, C), p(C, N), p(j, g), p(j, m), p(m, M), p(m, w), p(m, T), p(m, D), p(m, L), p(m, R), p(m, W), p(m, K), p(m, H), p(m, J), p(m, Z), p(m, G), p(m, U), p(m, re), p(m, te), p(m, ae), p(m, ee), p(t, O), p(t, F), p(F, V), p(V, se), p(V, ye), p(V, I), p(F, Q), p(F, X), p(X, be), p(be, Ne), p(X, Re), p(X, q), p(q, ve), p(q, xe), p(q, ke), p(q, he), p(q, me), p(q, x), p(q, E), p(q, Y), p(q, $), p(q, le), p(q, fe), p(q, ge), p(q, Ce), p(q, Se), p(q, De), p(q, Oe), p(q, Ee), p(t, qe), ce && ce.m(t, null), p(t, Ue), p(t, Fe), we.m(Fe, null), Ie || (Ve = Je(
        r,
        "submit",
        /*handleFormSubmit*/
        l[16]
      ), Ie = !0);
    },
    p(ne, pe) {
      pe[0] & /*input_style*/
      4096 && _(
        i,
        "style",
        /*input_style*/
        ne[12]
      ), pe[0] & /*input_style*/
      4096 && _(
        c,
        "style",
        /*input_style*/
        ne[12]
      ), pe[0] & /*input_style*/
      4096 && _(
        A,
        "style",
        /*input_style*/
        ne[12]
      ), pe[0] & /*text_color*/
      16 && oe(
        C,
        "color",
        /*text_color*/
        ne[4]
      ), pe[0] & /*input_style*/
      4096 && _(
        m,
        "style",
        /*input_style*/
        ne[12]
      ), pe[0] & /*input_style*/
      4096 && _(
        I,
        "style",
        /*input_style*/
        ne[12]
      ), pe[0] & /*text_color*/
      16 && oe(
        be,
        "color",
        /*text_color*/
        ne[4]
      ), pe[0] & /*input_style*/
      4096 && _(
        q,
        "style",
        /*input_style*/
        ne[12]
      ), /*shouldShowEmail*/
      ne[13] ? ce ? ce.p(ne, pe) : (ce = ot(ne), ce.c(), ce.m(t, Ue)) : ce && (ce.d(1), ce = null), Ye === (Ye = Qe(ne)) && we ? we.p(ne, pe) : (we.d(1), we = Ye(ne), we && (we.c(), we.m(Fe, null)));
    },
    d(ne) {
      ne && ue(r), ce && ce.d(), we.d(), Ie = !1, Ve();
    }
  };
}
function nt(l) {
  let r, t, a = (
    /*backendData*/
    l[5].data[0].ccy_pair + ""
  ), e, o, n = (
    /*backendData*/
    l[5].data[0].mid_market_rate + ""
  ), i, u;
  return {
    c() {
      r = b("p"), t = z("The interbank rate "), e = z(a), o = z(`
                            was `), i = z(n), u = z("."), _(r, "class", "text-sm");
    },
    m(s, d) {
      de(s, r, d), p(r, t), p(r, e), p(r, o), p(r, i), p(r, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      32 && a !== (a = /*backendData*/
      s[5].data[0].ccy_pair + "") && _e(e, a), d[0] & /*backendData*/
      32 && n !== (n = /*backendData*/
      s[5].data[0].mid_market_rate + "") && _e(i, n);
    },
    d(s) {
      s && ue(r);
    }
  };
}
function ot(l) {
  let r, t, a, e, o, n, i;
  return {
    c() {
      r = b("div"), t = b("div"), a = b("label"), a.textContent = "Email", e = B(), o = b("input"), n = B(), i = b("div"), _(a, "for", "user"), _(o, "id", "user"), _(o, "type", "email"), _(o, "class", "w-full rounded-md px-3 py-2 mt-4"), _(o, "name", "user"), _(o, "placeholder", "JohnDoe@email.com"), o.required = !0, _(
        o,
        "style",
        /*input_style*/
        l[12]
      ), _(t, "class", "w-full"), _(i, "class", "w-full"), _(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      de(u, r, s), p(r, t), p(t, a), p(t, e), p(t, o), p(r, n), p(r, i);
    },
    p(u, s) {
      s[0] & /*input_style*/
      4096 && _(
        o,
        "style",
        /*input_style*/
        u[12]
      );
    },
    d(u) {
      u && ue(r);
    }
  };
}
function Nt(l) {
  let r, t, a, e, o;
  return {
    c() {
      r = b("button"), t = ze("svg"), a = ze("path"), e = ze("path"), o = z(`
                                Loading...`), _(a, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), _(a, "fill", "#E5E7EB"), _(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), _(e, "fill", "currentColor"), _(t, "aria-hidden", "true"), _(t, "role", "status"), _(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), _(t, "viewBox", "0 0 100 101"), _(t, "fill", "none"), _(t, "xmlns", "http://www.w3.org/2000/svg"), r.disabled = !0, _(r, "type", "button"), _(r, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), oe(
        r,
        "background-color",
        /*button_color*/
        l[11]
      ), oe(
        r,
        "color",
        /*text_color*/
        l[4]
      );
    },
    m(n, i) {
      de(n, r, i), p(r, t), p(t, a), p(t, e), p(r, o);
    },
    p(n, i) {
      i[0] & /*button_color*/
      2048 && oe(
        r,
        "background-color",
        /*button_color*/
        n[11]
      ), i[0] & /*text_color*/
      16 && oe(
        r,
        "color",
        /*text_color*/
        n[4]
      );
    },
    d(n) {
      n && ue(r);
    }
  };
}
function jt(l) {
  let r, t;
  return {
    c() {
      r = b("button"), t = z(`See your
                                charges`), _(r, "type", "submit"), _(r, "class", "px-6 py-3 mt-6"), _(
        r,
        "style",
        /*input_style*/
        l[12]
      );
    },
    m(a, e) {
      de(a, r, e), p(r, t);
    },
    p(a, e) {
      e[0] & /*input_style*/
      4096 && _(
        r,
        "style",
        /*input_style*/
        a[12]
      );
    },
    d(a) {
      a && ue(r);
    }
  };
}
function Lt(l) {
  let r, t;
  return {
    c() {
      r = b("p"), t = z(
        /*statusCheckError*/
        l[9]
      ), _(r, "class", "text-sm");
    },
    m(a, e) {
      de(a, r, e), p(r, t);
    },
    p(a, e) {
      e[0] & /*statusCheckError*/
      512 && _e(
        t,
        /*statusCheckError*/
        a[9]
      );
    },
    d(a) {
      a && ue(r);
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
      de(t, r, a);
    },
    p: Me,
    d(t) {
      t && ue(r);
    }
  };
}
function Rt(l) {
  let r, t, a;
  function e(i, u) {
    return (
      /*statusCheckError*/
      i[9] ? Dt : St
    );
  }
  let o = e(l), n = o(l);
  return {
    c() {
      r = b("link"), t = B(), n.c(), a = dt(), this.c = Me, _(r, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), _(r, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, r), de(i, t, u), n.m(i, u), de(i, a, u);
    },
    p(i, u) {
      o === (o = e(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(a.parentNode, a)));
    },
    i: Me,
    o: Me,
    d(i) {
      ue(r), i && ue(t), n.d(i), i && ue(a);
    }
  };
}
const rt = "http://localhost:8000", lt = "CORS_ERROR";
function Ft(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function Yt(l, r, t) {
  let a, e, o, n, { mode: i = "auto" } = r, { light_mode_background: u = "#d2d0d0" } = r, { dark_mode_background: s = "#1f2937" } = r, { light_mode_text_color: d = "#1f2937" } = r, { dark_mode_text_color: f = "#f9fafb" } = r, { dark_mode_input_background: c = "#374151" } = r, { light_mode_input_background: h = "#f9fafb" } = r, { dark_mode_button_color: y = "#374151" } = r, { light_mode_button_color: S = "#f9fafb" } = r, { border_radius: v = "0.5rem" } = r, { input_border_radius: k = "0.5rem" } = r, { shadow: A = "none" } = r, { opacity: P = 100 } = r, { name: j = "Our Results" } = r, { show_interbank_rate: C = "false" } = r, { show_email_input: N = "false" } = r;
  function g() {
    const O = new XMLHttpRequest();
    O.open("GET", `${rt}/`, !0), O.onerror = function() {
      O.status === 0 ? t(9, L = lt) : t(9, L = "We're sorry, our servers are currently down. Please try again later.");
    }, O.send();
  }
  const m = async (O) => fetch(`${rt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(O)
  });
  pt(() => {
    g();
  });
  let M, w = !0, T, D = !1, L;
  const R = () => {
    t(5, M = void 0), t(6, w = !0), t(7, T = !1), t(8, D = !1);
  }, W = async (O) => {
    t(6, w = !1), t(8, D = !0), t(7, T = void 0);
    try {
      const F = await m(O);
      if (!F.ok) {
        const se = await F.json();
        throw console.log("errorRes", se), new Error(se || `HTTP error! Status: ${F.status}`);
      }
      const V = await F.json();
      t(8, D = !1), t(7, T = void 0), t(6, w = !1), t(5, M = V);
    } catch (F) {
      t(8, D = !1), t(7, T = F.message), t(6, w = !1), t(5, M = void 0);
    }
  }, K = async (O) => {
    O.preventDefault();
    const F = new FormData(O.target), V = {};
    for (let se of F) {
      const [ye, I] = se;
      V[ye] = I;
    }
    V.prospect = "", V.input_spread = "5", V.prospect_annual_flow = "", V.email_user = !1, a || (V.user = "testUserWithoutMail@gmail.com"), console.log(V), W(V);
  }, H = (O) => {
    t(30, o = O.matches);
  }, J = window.matchMedia("(prefers-color-scheme: dark)");
  J.addEventListener("change", H), ht(() => {
    J.removeEventListener("change", H);
  });
  let Z, G, U, re;
  const te = (O) => R(), ae = (O) => R(), ee = (O) => R();
  return l.$$set = (O) => {
    "mode" in O && t(17, i = O.mode), "light_mode_background" in O && t(18, u = O.light_mode_background), "dark_mode_background" in O && t(19, s = O.dark_mode_background), "light_mode_text_color" in O && t(20, d = O.light_mode_text_color), "dark_mode_text_color" in O && t(21, f = O.dark_mode_text_color), "dark_mode_input_background" in O && t(22, c = O.dark_mode_input_background), "light_mode_input_background" in O && t(23, h = O.light_mode_input_background), "dark_mode_button_color" in O && t(24, y = O.dark_mode_button_color), "light_mode_button_color" in O && t(25, S = O.light_mode_button_color), "border_radius" in O && t(0, v = O.border_radius), "input_border_radius" in O && t(26, k = O.input_border_radius), "shadow" in O && t(1, A = O.shadow), "opacity" in O && t(2, P = O.opacity), "name" in O && t(3, j = O.name), "show_interbank_rate" in O && t(27, C = O.show_interbank_rate), "show_email_input" in O && t(28, N = O.show_email_input);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*show_email_input*/
    268435456 && t(13, a = N === "true"), l.$$.dirty[0] & /*show_interbank_rate*/
    134217728 && t(14, e = C === "true"), l.$$.dirty[0] & /*mode*/
    131072 && t(30, o = Ft(i)), l.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    1074528256 && t(10, Z = o ? s : u), l.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    1076887552 && t(4, G = o ? f : d), l.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    1086324736 && t(29, U = o ? c : h), l.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    1124073472 && t(11, re = o ? y : S), l.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    603979792 && t(12, n = `
    background-color: ${U};
    color: ${G};
    border-radius: ${k}px;
    `);
  }, [
    v,
    A,
    P,
    j,
    G,
    M,
    w,
    T,
    D,
    L,
    Z,
    re,
    n,
    a,
    e,
    R,
    K,
    i,
    u,
    s,
    d,
    f,
    c,
    h,
    y,
    S,
    k,
    C,
    N,
    U,
    o,
    te,
    ae,
    ee
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
        mode: 17,
        light_mode_background: 18,
        dark_mode_background: 19,
        light_mode_text_color: 20,
        dark_mode_text_color: 21,
        dark_mode_input_background: 22,
        light_mode_input_background: 23,
        dark_mode_button_color: 24,
        light_mode_button_color: 25,
        border_radius: 0,
        input_border_radius: 26,
        shadow: 1,
        opacity: 2,
        name: 3,
        show_interbank_rate: 27,
        show_email_input: 28
      },
      null,
      [-1, -1]
    ), r && (r.target && de(r.target, this, r.anchor), r.props && (this.$set(r.props), ie()));
  }
  static get observedAttributes() {
    return [
      "mode",
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
      "show_interbank_rate",
      "show_email_input"
    ];
  }
  get mode() {
    return this.$$.ctx[17];
  }
  set mode(r) {
    this.$$set({ mode: r }), ie();
  }
  get light_mode_background() {
    return this.$$.ctx[18];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), ie();
  }
  get dark_mode_background() {
    return this.$$.ctx[19];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), ie();
  }
  get light_mode_text_color() {
    return this.$$.ctx[20];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), ie();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[21];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), ie();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), ie();
  }
  get light_mode_input_background() {
    return this.$$.ctx[23];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), ie();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), ie();
  }
  get light_mode_button_color() {
    return this.$$.ctx[25];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), ie();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), ie();
  }
  get input_border_radius() {
    return this.$$.ctx[26];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), ie();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), ie();
  }
  get opacity() {
    return this.$$.ctx[2];
  }
  set opacity(r) {
    this.$$set({ opacity: r }), ie();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(r) {
    this.$$set({ name: r }), ie();
  }
  get show_interbank_rate() {
    return this.$$.ctx[27];
  }
  set show_interbank_rate(r) {
    this.$$set({ show_interbank_rate: r }), ie();
  }
  get show_email_input() {
    return this.$$.ctx[28];
  }
  set show_email_input(r) {
    this.$$set({ show_email_input: r }), ie();
  }
}
customElements.define("spreadm8-calc", Ht);
export {
  Ht as Spreadm8Calc
};
