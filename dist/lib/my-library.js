function Me() {
}
function We(l) {
  return l();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function Le(l) {
  l.forEach(We);
}
function Ke(l) {
  return typeof l == "function";
}
function ut(l, o) {
  return l != l ? o == o : l !== o || l && typeof l == "object" || typeof l == "function";
}
function st(l) {
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
function ze(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function J(l) {
  return document.createTextNode(l);
}
function Z() {
  return J(" ");
}
function dt() {
  return J("");
}
function He(l, o, t, i) {
  return l.addEventListener(o, t, i), () => l.removeEventListener(o, t, i);
}
function _(l, o, t) {
  t == null ? l.removeAttribute(o) : l.getAttribute(o) !== t && l.setAttribute(o, t);
}
function ct(l) {
  return Array.from(l.childNodes);
}
function _e(l, o) {
  o = "" + o, l.wholeText !== o && (l.data = o);
}
function oe(l, o, t, i) {
  t === null ? l.style.removeProperty(o) : l.style.setProperty(o, t, i ? "important" : "");
}
function ft(l) {
  const o = {};
  for (const t of l)
    o[t.name] = t.value;
  return o;
}
let Re;
function je(l) {
  Re = l;
}
function at() {
  if (!Re)
    throw new Error("Function called outside component initialization");
  return Re;
}
function pt(l) {
  at().$$.on_mount.push(l);
}
function ht(l) {
  at().$$.on_destroy.push(l);
}
const Te = [], $e = [], Ye = [], et = [], mt = Promise.resolve();
let Ze = !1;
function _t() {
  Ze || (Ze = !0, mt.then(re));
}
function Ge(l) {
  Ye.push(l);
}
const Be = /* @__PURE__ */ new Set();
let Ae = 0;
function re() {
  if (Ae !== 0)
    return;
  const l = Re;
  do {
    try {
      for (; Ae < Te.length; ) {
        const o = Te[Ae];
        Ae++, je(o), yt(o.$$);
      }
    } catch (o) {
      throw Te.length = 0, Ae = 0, o;
    }
    for (je(null), Te.length = 0, Ae = 0; $e.length; )
      $e.pop()();
    for (let o = 0; o < Ye.length; o += 1) {
      const t = Ye[o];
      Be.has(t) || (Be.add(t), t());
    }
    Ye.length = 0;
  } while (Te.length);
  for (; et.length; )
    et.pop()();
  Ze = !1, Be.clear(), je(l);
}
function yt(l) {
  if (l.fragment !== null) {
    l.update(), Le(l.before_update);
    const o = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, o), l.after_update.forEach(Ge);
  }
}
const bt = /* @__PURE__ */ new Set();
function gt(l, o) {
  l && l.i && (bt.delete(l), l.i(o));
}
function vt(l, o, t, i) {
  const { fragment: e, after_update: r } = l.$$;
  e && e.m(o, t), i || Ge(() => {
    const n = l.$$.on_mount.map(We).filter(Ke);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Le(n), l.$$.on_mount = [];
  }), r.forEach(Ge);
}
function wt(l, o) {
  const t = l.$$;
  t.fragment !== null && (Le(t.on_destroy), t.fragment && t.fragment.d(o), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xt(l, o) {
  l.$$.dirty[0] === -1 && (Te.push(l), _t(), l.$$.dirty.fill(0)), l.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function kt(l, o, t, i, e, r, n, a = [-1]) {
  const u = Re;
  je(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Me,
    not_equal: e,
    bound: Xe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(o.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xe(),
    dirty: a,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let d = !1;
  if (s.ctx = t ? t(l, o.props || {}, (f, c, ...h) => {
    const y = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), d && xt(l, f)), c;
  }) : [], s.update(), d = !0, Le(s.before_update), s.fragment = i ? i(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const f = ct(o.target);
      s.fragment && s.fragment.l(f), f.forEach(ue);
    } else
      s.fragment && s.fragment.c();
    o.intro && gt(l.$$.fragment), vt(l, o.target, o.anchor, o.customElement), re();
  }
  je(u);
}
let it;
typeof HTMLElement == "function" && (it = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(We).filter(Ke);
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(l, o, t) {
    this[l] = t;
  }
  disconnectedCallback() {
    Le(this.$$.on_disconnect);
  }
  $destroy() {
    wt(this, 1), this.$destroy = Me;
  }
  $on(l, o) {
    if (!Ke(o))
      return Me;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(o), () => {
      const i = t.indexOf(o);
      i !== -1 && t.splice(i, 1);
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
(function(l, o) {
  (function(t, i) {
    l.exports = i();
  })(Mt, function() {
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
      i.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (r(s), d = a(d, !0), r(f), n)
          try {
            return u(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
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
      var r = e(2), n = e(8), a = e(56), u = e(6), s = "prototype", d = function(f, c, h) {
        var y, C, v, k = f & d.F, A = f & d.G, L = f & d.S, N = f & d.P, S = f & d.B, j = f & d.W, g = A ? n : n[c] || (n[c] = {}), m = g[s], M = A ? r : L ? r[c] : (r[c] || {})[s];
        A && (h = c);
        for (y in h)
          C = !k && M && M[y] !== void 0, C && y in g || (v = C ? M[y] : h[y], g[y] = A && typeof M[y] != "function" ? h[y] : S && C ? a(v, r) : j && M[y] == v ? function(w) {
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
          }(v) : N && typeof v == "function" ? a(Function.call, v) : v, N && ((g.virtual || (g.virtual = {}))[y] = v, f & d.R && m && !m[y] && u(m, y, v)));
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
        var f = n.Symbol || (n.Symbol = a ? {} : r.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: u.f(d) });
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
          for (var f = 0; f < d.length; f++) {
            var c = d[f];
            c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), (0, a.default)(s, c.key, c);
          }
        }
        return function(s, d, f) {
          return d && u(s.prototype, d), f && u(s, f), s;
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
      var r = e(19), n = e(10), a = e(39), u = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), y = e(7)("iterator"), C = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", A = "values", L = function() {
        return this;
      };
      t.exports = function(N, S, j, g, m, M, w) {
        f(j, S, g);
        var T, E, R, P = function(te) {
          if (!C && te in H)
            return H[te];
          switch (te) {
            case k:
              return function() {
                return new j(this, te);
              };
            case A:
              return function() {
                return new j(this, te);
              };
          }
          return function() {
            return new j(this, te);
          };
        }, G = S + " Iterator", U = m == A, I = !1, H = N.prototype, z = H[y] || H[v] || m && H[m], q = z || P(m), B = m ? U ? P("entries") : q : void 0, ae = S == "Array" && H.entries || z;
        if (ae && (R = h(ae.call(new N())), R !== Object.prototype && (c(R, G, !0), r || s(R, y) || u(R, y, L))), U && z && z.name !== A && (I = !0, q = function() {
          return z.call(this);
        }), r && !w || !C && !I && H[y] || u(H, y, q), d[S] = q, d[G] = L, m)
          if (T = { values: U ? q : P(A), keys: M ? q : P(k), entries: B }, w)
            for (E in T)
              E in H || a(H, E, T[E]);
          else
            n(n.P + n.F * (C || I), S, T);
        return T;
      };
    }, function(t, i, e) {
      var r = e(9), n = e(35), a = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), y = a.length, C = "<", v = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(C + "script" + v + "document.F=Object" + C + "/script" + v), c.close(), f = c.F; y--; )
          delete f[d][a[y]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var y;
        return c !== null ? (s[d] = r(c), y = new s(), s[d] = null, y[u] = c) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(t, i, e) {
      var r = e(4), n = e(9), a = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, f = a(s), c = f.length, h = 0; c > h; )
          r.f(u, d = f[h++], s[d]);
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
        var f, c = n(s), h = 0, y = [];
        for (f in c)
          f != u && r(c, f) && y.push(f);
        for (; d.length > h; )
          r(c, f = d[h++]) && (~a(y, f) || y.push(f));
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
        var C = new Date(y.getFullYear(), 0, 4);
        C.setDate(C.getDate() - (C.getDay() + 6) % 7 + 3);
        var v = y.getTimezoneOffset() - C.getTimezoneOffset();
        y.setHours(y.getHours() - v);
        var k = (y - C) / 6048e5;
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
      var d = e(48), f = r(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, C = /[^-+\dA-Z]/g;
        return function(v, k, A, L) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(c.masks[k] || k || c.masks.default);
          var N = k.slice(0, 4);
          N !== "UTC:" && N !== "GMT:" || (k = k.slice(4), A = !0, N === "GMT:" && (L = !0));
          var S = A ? "getUTC" : "get", j = v[S + "Date"](), g = v[S + "Day"](), m = v[S + "Month"](), M = v[S + "FullYear"](), w = v[S + "Hours"](), T = v[S + "Minutes"](), E = v[S + "Seconds"](), R = v[S + "Milliseconds"](), P = A ? 0 : v.getTimezoneOffset(), G = a(v), U = u(v), I = { d: j, dd: n(j), ddd: c.i18n.dayNames[g], dddd: c.i18n.dayNames[g + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: E, ss: n(E), l: n(R, 3), L: n(Math.round(R / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: L ? "GMT" : A ? "UTC" : (String(v).match(y) || [""]).pop().replace(C, ""), o: (P > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(P) / 60) + Math.abs(P) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: G, N: U };
          return k.replace(h, function(H) {
            return H in I ? I[H] : H.slice(1, H.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = c;
    }, function(t, i, e) {
      function r(L) {
        return L && L.__esModule ? L : { default: L };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(44), a = r(n), u = e(28), s = r(u), d = e(29), f = r(d), c = e(43), h = r(c), y = e(42), C = r(y), v = e(40), k = r(v), A = function() {
        function L(N) {
          var S = this;
          (0, s.default)(this, L), this.element = N, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, a.default)(this.element, { valueAsDate: { get: function() {
            if (!S.element.value)
              return null;
            var g = S.format || "yyyy-mm-dd", m = S.element.value.match(/(\d+)/g), M = 0, w = {};
            return g.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(m[w.yyyy], m[w.mm] - 1, m[w.dd]);
          }, set: function(g) {
            S.element.value = (0, k.default)(g, S.format);
          } }, valueAsNumber: { get: function() {
            return S.element.value ? S.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            S.element.valueAsDate = new Date(g);
          } } });
          var j = function(g) {
            var m = S.element;
            m.locale = S.localeText, h.default.attachTo(m);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(g) {
            var m = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                S.element.valueAsDate && (m.setDate(S.element.valueAsDate.getDate() + 1), S.element.valueAsDate = m, h.default.pingInput());
                break;
              case 40:
                S.element.valueAsDate && (m.setDate(S.element.valueAsDate.getDate() - 1), S.element.valueAsDate = m, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, f.default)(L, [{ key: "getLocaleText", value: function() {
          var N = this.locale.toLowerCase();
          for (var S in C.default) {
            var j = S.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(N) || ~j.indexOf(N.substr(0, 2)))
              return C.default[S];
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
            new L(N[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var N = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), S = N.length;
          if (!S)
            return !1;
          for (var j = 0; j < S; ++j)
            new L(N[j]);
        } }]), L;
      }();
      i.default = A;
    }, function(t, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = e;
    }, function(t, i, e) {
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = e(28), a = r(n), u = e(29), s = r(u), d = function() {
        function f() {
          var c = this;
          if ((0, a.default)(this, f), window.thePicker)
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
          var C = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var A = c.days.querySelector("[data-selected]");
            A && A.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), c.date.setDate(parseInt(k.textContent)), c.setInput();
          }), C.appendChild(this.daysHead), C.appendChild(this.days), this.container.appendChild(C), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
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
          var C = this.container.getBoundingClientRect(), v = C.width ? C.width : 280, k = function() {
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
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(c, h, 1).getDay(), C = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && c === v.getFullYear() && h === v.getMonth(), A = [], L = 0; L < C + y; ++L)
            if (L % 7 === 0 && A.push(`
          ` + (L !== 0 ? "</tr>" : "") + `
          <tr>
        `), L + 1 <= y)
              A.push("<td></td>");
            else {
              var N = L + 1 - y, S = k && v.getDate() === N;
              A.push("<td data-day " + (S ? "data-selected" : "") + `>
          ` + N + `
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
        } }], [{ key: "createRangeSelect", value: function(c, h, y, C) {
          c.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            c.appendChild(k);
            var A = C ? C[v - h] : v;
            k.text = A, k.value = v;
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
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      i.__esModule = !0;
      var n = e(47), a = r(n), u = e(46), s = r(u), d = typeof s.default == "function" && typeof a.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      i.default = typeof s.default == "function" && d(a.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : d(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : d(f);
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
        return function(s, d, f) {
          var c, h = r(s), y = n(h.length), C = a(f, y);
          if (u && d != d) {
            for (; y > C; )
              if (c = h[C++], c != c)
                return !0;
          } else
            for (; y > C; C++)
              if ((u || C in h) && h[C] === d)
                return u || C || 0;
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
            return function(s, d, f) {
              return n.call(a, s, d, f);
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
          for (var f, c = d(u), h = a.f, y = 0; c.length > y; )
            h.call(u, f = c[y++]) && s.push(f);
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
      }), t.exports = function(s, d, f) {
        s.prototype = r(u, { next: n(1, f) }), a(s, d + " Iterator");
      };
    }, function(t, i) {
      t.exports = function(e, r) {
        return { value: r, done: !!e };
      };
    }, function(t, i, e) {
      var r = e(13), n = e(5);
      t.exports = function(a, u) {
        for (var s, d = n(a), f = r(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === u)
            return s;
      };
    }, function(t, i, e) {
      var r = e(15)("meta"), n = e(12), a = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(k) {
        u(k, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, A) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!a(k, r)) {
          if (!d(k))
            return "F";
          if (!A)
            return "E";
          c(k);
        }
        return k[r].i;
      }, y = function(k, A) {
        if (!a(k, r)) {
          if (!d(k))
            return !0;
          if (!A)
            return !1;
          c(k);
        }
        return k[r].w;
      }, C = function(k) {
        return f && v.NEED && d(k) && !a(k, r) && c(k), k;
      }, v = t.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: C };
    }, function(t, i, e) {
      var r = e(20), n = e(14), a = e(5), u = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      i.f = e(1) ? f : function(c, h) {
        if (c = a(c), h = u(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return n(!r.f.call(c, h), c[h]);
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
          var d, f, c = String(n(u)), h = r(s), y = c.length;
          return h < 0 || h >= y ? a ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? a ? c.charAt(h) : d : a ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
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
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
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
      var r = e(2), n = e(3), a = e(1), u = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), y = e(15), C = e(7), v = e(27), k = e(26), A = e(63), L = e(57), N = e(60), S = e(9), j = e(5), g = e(25), m = e(14), M = e(34), w = e(66), T = e(65), E = e(4), R = e(13), P = T.f, G = E.f, U = w.f, I = r.Symbol, H = r.JSON, z = H && H.stringify, q = "prototype", B = C("_hidden"), ae = C("toPrimitive"), te = {}.propertyIsEnumerable, D = c("symbol-registry"), W = c("symbols"), ee = c("op-symbols"), Y = Object[q], ie = typeof I == "function", de = r.QObject, we = !de || !de[q] || !de[q].findChild, K = a && f(function() {
        return M(G({}, "a", { get: function() {
          return G(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, O, F) {
        var $ = P(Y, O);
        $ && delete Y[O], G(x, O, F), $ && x !== Y && G(Y, O, $);
      } : G, Q = function(x) {
        var O = W[x] = M(I[q]);
        return O._k = x, O;
      }, X = ie && typeof I.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof I;
      }, ye = function(x, O, F) {
        return x === Y && ye(ee, O, F), S(x), O = g(O, !0), S(F), n(W, O) ? (F.enumerable ? (n(x, B) && x[B][O] && (x[B][O] = !1), F = M(F, { enumerable: m(0, !1) })) : (n(x, B) || G(x, B, m(1, {})), x[B][O] = !0), K(x, O, F)) : G(x, O, F);
      }, Ne = function(x, O) {
        S(x);
        for (var F, $ = L(O = j(O)), le = 0, fe = $.length; fe > le; )
          ye(x, F = $[le++], O[F]);
        return x;
      }, Pe = function(x, O) {
        return O === void 0 ? M(x) : Ne(M(x), O);
      }, V = function(x) {
        var O = te.call(this, x = g(x, !0));
        return !(this === Y && n(W, x) && !n(ee, x)) && (!(O || !n(this, x) || !n(W, x) || n(this, B) && this[B][x]) || O);
      }, ge = function(x, O) {
        if (x = j(x), O = g(O, !0), x !== Y || !n(W, O) || n(ee, O)) {
          var F = P(x, O);
          return !F || !n(W, O) || n(x, B) && x[B][O] || (F.enumerable = !0), F;
        }
      }, xe = function(x) {
        for (var O, F = U(j(x)), $ = [], le = 0; F.length > le; )
          n(W, O = F[le++]) || O == B || O == d || $.push(O);
        return $;
      }, ke = function(x) {
        for (var O, F = x === Y, $ = U(F ? ee : j(x)), le = [], fe = 0; $.length > fe; )
          !n(W, O = $[fe++]) || F && !n(Y, O) || le.push(W[O]);
        return le;
      };
      ie || (I = function() {
        if (this instanceof I)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), O = function(F) {
          this === Y && O.call(ee, F), n(this, B) && n(this[B], x) && (this[B][x] = !1), K(this, x, m(1, F));
        };
        return a && we && K(Y, x, { configurable: !0, set: O }), Q(x);
      }, s(I[q], "toString", function() {
        return this._k;
      }), T.f = ge, E.f = ye, e(36).f = w.f = xe, e(20).f = V, e(37).f = ke, a && !e(19) && s(Y, "propertyIsEnumerable", V, !0), v.f = function(x) {
        return Q(C(x));
      }), u(u.G + u.W + u.F * !ie, { Symbol: I });
      for (var he = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; he.length > me; )
        C(he[me++]);
      for (var he = R(C.store), me = 0; he.length > me; )
        k(he[me++]);
      u(u.S + u.F * !ie, "Symbol", { for: function(x) {
        return n(D, x += "") ? D[x] : D[x] = I(x);
      }, keyFor: function(x) {
        if (X(x))
          return A(D, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        we = !0;
      }, useSimple: function() {
        we = !1;
      } }), u(u.S + u.F * !ie, "Object", { create: Pe, defineProperty: ye, defineProperties: Ne, getOwnPropertyDescriptor: ge, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), H && u(u.S + u.F * (!ie || f(function() {
        var x = I();
        return z([x]) != "[null]" || z({ a: x }) != "{}" || z(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !X(x)) {
          for (var O, F, $ = [x], le = 1; arguments.length > le; )
            $.push(arguments[le++]);
          return O = $[1], typeof O == "function" && (F = O), !F && N(O) || (O = function(fe, be) {
            if (F && (be = F.call(this, fe, be)), !X(be))
              return be;
          }), $[1] = O, z.apply(H, $);
        }
      } }), I[q][ae] || e(6)(I[q], ae, I[q].valueOf), h(I, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(t, i, e) {
      e(26)("asyncIterator");
    }, function(t, i, e) {
      e(26)("observable");
    }, function(t, i, e) {
      e(72);
      for (var r = e(2), n = e(6), a = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = r[f], h = c && c.prototype;
        h && !h[u] && n(h, u, f), a[f] = a.Array;
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
          var w = g[M], T = C[w.id];
          if (T) {
            T.refs++;
            for (var E = 0; E < T.parts.length; E++)
              T.parts[E](w.parts[E]);
            for (; E < w.parts.length; E++)
              T.parts.push(f(w.parts[E], m));
          } else {
            for (var R = [], E = 0; E < w.parts.length; E++)
              R.push(f(w.parts[E], m));
            C[w.id] = { id: w.id, refs: 1, parts: R };
          }
        }
      }
      function n(g) {
        for (var m = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], E = T[0], R = T[1], P = T[2], G = T[3], U = { css: R, media: P, sourceMap: G };
          M[E] ? M[E].parts.push(U) : m.push(M[E] = { id: E, parts: [U] });
        }
        return m;
      }
      function a(g, m) {
        var M = A(), w = S[S.length - 1];
        if (g.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(m, w.nextSibling) : M.appendChild(m) : M.insertBefore(m, M.firstChild), S.push(m);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(m);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var m = S.indexOf(g);
        m >= 0 && S.splice(m, 1);
      }
      function s(g) {
        var m = document.createElement("style");
        return m.type = "text/css", a(g, m), m;
      }
      function d(g) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", a(g, m), m;
      }
      function f(g, m) {
        var M, w, T;
        if (m.singleton) {
          var E = N++;
          M = L || (L = s(m)), w = c.bind(null, M, E, !1), T = c.bind(null, M, E, !0);
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
      function c(g, m, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = j(m, T);
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
      var C = {}, v = function(g) {
        var m;
        return function() {
          return typeof m > "u" && (m = g.apply(this, arguments)), m;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), A = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), L = null, N = 0, S = [];
      t.exports = function(g, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = k()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var M = n(g);
        return r(M, m), function(w) {
          for (var T = [], E = 0; E < M.length; E++) {
            var R = M[E], P = C[R.id];
            P.refs--, T.push(P);
          }
          if (w) {
            var G = n(w);
            r(G, m);
          }
          for (var E = 0; E < T.length; E++) {
            var P = T[E];
            if (P.refs === 0) {
              for (var U = 0; U < P.parts.length; U++)
                P.parts[U]();
              delete C[P.id];
            }
          }
        };
      };
      var j = function() {
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
})(Ct);
function St(l) {
  let o, t, i;
  function e(a, u) {
    return (
      /*isIdle*/
      a[8] || /*isFetching*/
      a[10] ? Tt : (
        /*backendData*/
        a[7] ? At : (
          /*error*/
          a[9] ? Ot : Et
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
      l[12]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[6]};
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
      4165 && i !== (i = `
        background-color: ${/*background*/
      a[12]};
        border-radius: ${/*border_radius*/
      a[0]};
        color: ${/*text_color*/
      a[6]};
        opacity: ${/*opacity*/
      a[2]}%!important;
`) && _(o, "style", i);
    },
    d(a) {
      a && ue(o), n.d();
    }
  };
}
function Dt(l) {
  let o, t, i, e, r, n;
  function a(d, f) {
    return (
      /*statusCheckError*/
      d[11] === lt ? Lt : Rt
    );
  }
  let u = a(l), s = u(l);
  return {
    c() {
      o = b("div"), t = b("div"), i = b("h1"), i.textContent = "An error occured", e = Z(), s.c(), _(i, "class", "text-2xl"), _(t, "class", "flex flex-col items-center gap-4"), _(o, "class", r = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(o, "style", n = `
        background-color: ${/*background*/
      l[12]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[6]};
        opacity: ${/*opacity*/
      l[2]}%!important;
`);
    },
    m(d, f) {
      se(d, o, f), p(o, t), p(t, i), p(t, e), s.m(t, null);
    },
    p(d, f) {
      u === (u = a(d)) && s ? s.p(d, f) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      2 && r !== (r = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && _(o, "class", r), f[0] & /*background, border_radius, text_color, opacity*/
      4165 && n !== (n = `
        background-color: ${/*background*/
      d[12]};
        border-radius: ${/*border_radius*/
      d[0]};
        color: ${/*text_color*/
      d[6]};
        opacity: ${/*opacity*/
      d[2]}%!important;
`) && _(o, "style", n);
    },
    d(d) {
      d && ue(o), s.d();
    }
  };
}
function Et(l) {
  let o, t, i, e, r, n, a;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "An unknown error", i = Z(), e = b("button"), r = J("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        e,
        "background-color",
        /*button_color*/
        l[13]
      ), oe(
        e,
        "color",
        /*text_color*/
        l[6]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      se(u, o, s), p(o, t), p(o, i), p(o, e), p(e, r), n || (a = He(
        e,
        "click",
        /*click_handler_2*/
        l[31]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      8192 && oe(
        e,
        "background-color",
        /*button_color*/
        u[13]
      ), s[0] & /*text_color*/
      64 && oe(
        e,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && ue(o), n = !1, a();
    }
  };
}
function Ot(l) {
  let o, t, i, e, r, n, a, u, s, d;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "Error", i = Z(), e = b("pre"), r = J(
        /*error*/
        l[9]
      ), n = Z(), a = b("button"), u = J("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "py-3"), _(a, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        a,
        "background-color",
        /*button_color*/
        l[13]
      ), oe(
        a,
        "color",
        /*text_color*/
        l[6]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(f, c) {
      se(f, o, c), p(o, t), p(o, i), p(o, e), p(e, r), p(o, n), p(o, a), p(a, u), s || (d = He(
        a,
        "click",
        /*click_handler_1*/
        l[30]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      512 && _e(
        r,
        /*error*/
        f[9]
      ), c[0] & /*button_color*/
      8192 && oe(
        a,
        "background-color",
        /*button_color*/
        f[13]
      ), c[0] & /*text_color*/
      64 && oe(
        a,
        "color",
        /*text_color*/
        f[6]
      );
    },
    d(f) {
      f && ue(o), s = !1, d();
    }
  };
}
function At(l) {
  let o, t, i, e, r, n, a = (
    /*backendData*/
    l[7].data[0].third_party_exchange_rate + ""
  ), u, s, d, f, c, h = (
    /*backendData*/
    l[7].data[0].ccy_pair + ""
  ), y, C, v, k, A, L = (
    /*backendData*/
    l[7].data[0].sold_ccy + ""
  ), N, S, j = (
    /*backendData*/
    l[7].data[0].third_party_profit + ""
  ), g, m, M, w, T, E, R, P, G, U = (
    /*backendData*/
    l[7].data[0].integritas_rate + ""
  ), I, H, z, q, B = (
    /*backendData*/
    l[7].data[0].sold_ccy + ""
  ), ae, te, D = (
    /*backendData*/
    l[7].data[0].integritas_savings + ""
  ), W, ee, Y, ie, de, we, K = (
    /*showInterbankRate*/
    l[4] && nt(l)
  );
  return {
    c() {
      o = b("div"), t = b("div"), i = b("h1"), i.textContent = "Your Provider", e = Z(), r = b("p"), n = J("Your exchange rate was "), u = J(a), s = Z(), K && K.c(), d = Z(), f = b("p"), c = J("Your provider's markup was TODO "), y = J(h), C = J("%."), v = Z(), k = b("p"), A = J(`Your provider
                        charged `), N = J(L), S = Z(), g = J(j), m = J(` on this
                        trade.`), M = Z(), w = b("div"), T = b("h1"), E = J(
        /*name*/
        l[3]
      ), R = Z(), P = b("p"), G = J("Our exchange rate was "), I = J(U), H = Z(), z = b("p"), q = J(`We would've saved
                        you `), ae = J(B), te = Z(), W = J(D), ee = Z(), Y = b("button"), ie = J("Calculate again"), _(i, "class", "text-2xl"), _(r, "class", "text-sm"), _(f, "class", "text-sm"), _(k, "class", "text-sm"), _(t, "class", "flex flex-col gap-2"), _(T, "class", "text-2xl mt-4"), _(P, "class", "text-sm"), _(z, "class", "text-sm"), _(w, "class", "flex flex-col gap-2"), _(o, "class", "flex flex-col divide-y gap-4"), _(Y, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        Y,
        "background-color",
        /*button_color*/
        l[13]
      ), oe(
        Y,
        "color",
        /*text_color*/
        l[6]
      );
    },
    m(Q, X) {
      se(Q, o, X), p(o, t), p(t, i), p(t, e), p(t, r), p(r, n), p(r, u), p(t, s), K && K.m(t, null), p(t, d), p(t, f), p(f, c), p(f, y), p(f, C), p(t, v), p(t, k), p(k, A), p(k, N), p(k, S), p(k, g), p(k, m), p(o, M), p(o, w), p(w, T), p(T, E), p(w, R), p(w, P), p(P, G), p(P, I), p(w, H), p(w, z), p(z, q), p(z, ae), p(z, te), p(z, W), se(Q, ee, X), se(Q, Y, X), p(Y, ie), de || (we = He(
        Y,
        "click",
        /*click_handler*/
        l[29]
      ), de = !0);
    },
    p(Q, X) {
      X[0] & /*backendData*/
      128 && a !== (a = /*backendData*/
      Q[7].data[0].third_party_exchange_rate + "") && _e(u, a), /*showInterbankRate*/
      Q[4] ? K ? K.p(Q, X) : (K = nt(Q), K.c(), K.m(t, d)) : K && (K.d(1), K = null), X[0] & /*backendData*/
      128 && h !== (h = /*backendData*/
      Q[7].data[0].ccy_pair + "") && _e(y, h), X[0] & /*backendData*/
      128 && L !== (L = /*backendData*/
      Q[7].data[0].sold_ccy + "") && _e(N, L), X[0] & /*backendData*/
      128 && j !== (j = /*backendData*/
      Q[7].data[0].third_party_profit + "") && _e(g, j), X[0] & /*name*/
      8 && _e(
        E,
        /*name*/
        Q[3]
      ), X[0] & /*backendData*/
      128 && U !== (U = /*backendData*/
      Q[7].data[0].integritas_rate + "") && _e(I, U), X[0] & /*backendData*/
      128 && B !== (B = /*backendData*/
      Q[7].data[0].sold_ccy + "") && _e(ae, B), X[0] & /*backendData*/
      128 && D !== (D = /*backendData*/
      Q[7].data[0].integritas_savings + "") && _e(W, D), X[0] & /*button_color*/
      8192 && oe(
        Y,
        "background-color",
        /*button_color*/
        Q[13]
      ), X[0] & /*text_color*/
      64 && oe(
        Y,
        "color",
        /*text_color*/
        Q[6]
      );
    },
    d(Q) {
      Q && ue(o), K && K.d(), Q && ue(ee), Q && ue(Y), de = !1, we();
    }
  };
}
function Tt(l) {
  let o, t, i, e, r, n, a, u, s, d, f, c, h, y, C, v, k, A, L, N, S, j, g, m, M, w, T, E, R, P, G, U, I, H, z, q, B, ae, te, D, W, ee, Y, ie, de, we, K, Q, X, ye, Ne, Pe, V, ge, xe, ke, he, me, x, O, F, $, le, fe, be, Ce, Se, De, Ee, Oe, qe, Je, Fe, Ue, Ve, ce = (
    /*showEmailInput*/
    l[5] && ot(l)
  );
  function Qe(ne, pe) {
    return (
      /*isFetching*/
      ne[10] ? Nt : jt
    );
  }
  let Ie = Qe(l), ve = Ie(l);
  return {
    c() {
      o = b("form"), t = b("div"), i = b("div"), e = b("div"), r = b("label"), r.textContent = "Select Date", n = Z(), a = b("input"), u = Z(), s = b("div"), d = b("label"), d.textContent = "Select Time", f = Z(), c = b("input"), h = Z(), y = b("div"), C = b("div"), v = b("label"), v.textContent = "Sell Amount", k = Z(), A = b("input"), L = Z(), N = b("div"), S = b("label"), j = J("Sell Currency"), g = Z(), m = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", E = b("option"), E.textContent = "JPY", R = b("option"), R.textContent = "CHF", P = b("option"), P.textContent = "CNY", G = b("option"), G.textContent = "NZD", U = b("option"), U.textContent = "SGD", I = b("option"), I.textContent = "INR", H = b("option"), H.textContent = "AUD", z = b("option"), z.textContent = "CAD", q = b("option"), q.textContent = "HKD", B = b("option"), B.textContent = "MYR", ae = b("option"), ae.textContent = "NOK", te = b("option"), te.textContent = "ZAR", D = b("option"), D.textContent = "RUB", W = b("option"), W.textContent = "SEK", ee = Z(), Y = b("div"), ie = b("div"), de = b("label"), de.textContent = "Buy Amount", we = Z(), K = b("input"), Q = Z(), X = b("div"), ye = b("label"), Ne = J("Buy Currency"), Pe = Z(), V = b("select"), ge = b("option"), ge.textContent = "USD", xe = b("option"), xe.textContent = "GBP", ke = b("option"), ke.textContent = "EUR", he = b("option"), he.textContent = "JPY", me = b("option"), me.textContent = "CHF", x = b("option"), x.textContent = "CNY", O = b("option"), O.textContent = "NZD", F = b("option"), F.textContent = "SGD", $ = b("option"), $.textContent = "INR", le = b("option"), le.textContent = "AUD", fe = b("option"), fe.textContent = "CAD", be = b("option"), be.textContent = "HKD", Ce = b("option"), Ce.textContent = "MYR", Se = b("option"), Se.textContent = "NOK", De = b("option"), De.textContent = "ZAR", Ee = b("option"), Ee.textContent = "RUB", Oe = b("option"), Oe.textContent = "SEK", qe = Z(), ce && ce.c(), Je = Z(), Fe = b("div"), ve.c(), _(r, "for", "date"), _(a, "id", "date"), _(a, "type", "date"), _(a, "class", "w-full rounded-md px-3 py-2 mt-4"), _(a, "name", "date"), _(a, "placeholder", "Select date"), a.required = !0, _(
        a,
        "style",
        /*input_style*/
        l[14]
      ), _(e, "class", "w-full"), _(d, "for", "time"), _(c, "id", "time"), _(c, "type", "time"), _(c, "class", "w-full rounded-md px-3 py-2 mt-4"), _(c, "name", "time"), _(c, "placeholder", "Select Time"), c.required = !0, _(
        c,
        "style",
        /*input_style*/
        l[14]
      ), _(s, "class", "w-full"), _(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), _(v, "for", "sold_notional"), _(A, "id", "sold_notional"), _(A, "type", "number"), _(A, "step", ".01"), _(A, "class", "w-full rounded-md px-3 py-2 mt-4"), _(A, "name", "sold_notional"), _(A, "placeholder", "10000"), A.required = !0, _(
        A,
        "style",
        /*input_style*/
        l[14]
      ), _(C, "class", "w-full"), _(S, "for", "sold_ccy"), oe(
        S,
        "color",
        /*text_color*/
        l[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, E.__value = "JPY", E.value = E.__value, R.__value = "CHF", R.value = R.__value, P.__value = "CNY", P.value = P.__value, G.__value = "NZD", G.value = G.__value, U.__value = "SGD", U.value = U.__value, I.__value = "INR", I.value = I.__value, H.__value = "AUD", H.value = H.__value, z.__value = "CAD", z.value = z.__value, q.__value = "HKD", q.value = q.__value, B.__value = "MYR", B.value = B.__value, ae.__value = "NOK", ae.value = ae.__value, te.__value = "ZAR", te.value = te.__value, D.__value = "RUB", D.value = D.__value, W.__value = "SEK", W.value = W.__value, _(m, "name", "sold_ccy"), _(m, "id", "sold_ccy"), _(m, "class", "w-full rounded-md px-3 py-2 mt-4"), m.required = !0, _(
        m,
        "style",
        /*input_style*/
        l[14]
      ), _(N, "class", "w-full"), _(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(de, "for", "bought_notional"), _(K, "id", "bought_notional"), _(K, "type", "number"), _(K, "step", ".01"), _(K, "class", "w-full rounded-md px-3 py-2 mt-4"), _(K, "name", "bought_notional"), _(K, "placeholder", "10000"), K.required = !0, _(
        K,
        "style",
        /*input_style*/
        l[14]
      ), _(ie, "class", "w-full"), _(ye, "for", "bought_ccy"), oe(
        ye,
        "color",
        /*text_color*/
        l[6]
      ), ge.selected = !0, ge.__value = "USD", ge.value = ge.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, he.__value = "JPY", he.value = he.__value, me.__value = "CHF", me.value = me.__value, x.__value = "CNY", x.value = x.__value, O.__value = "NZD", O.value = O.__value, F.__value = "SGD", F.value = F.__value, $.__value = "INR", $.value = $.__value, le.__value = "AUD", le.value = le.__value, fe.__value = "CAD", fe.value = fe.__value, be.__value = "HKD", be.value = be.__value, Ce.__value = "MYR", Ce.value = Ce.__value, Se.__value = "NOK", Se.value = Se.__value, De.__value = "ZAR", De.value = De.__value, Ee.__value = "RUB", Ee.value = Ee.__value, Oe.__value = "SEK", Oe.value = Oe.__value, _(V, "name", "bought_ccy"), _(V, "id", "bought_ccy"), _(V, "class", "w-full rounded-md px-3 py-2 mt-4"), V.required = !0, _(
        V,
        "style",
        /*input_style*/
        l[14]
      ), _(X, "class", "w-full"), _(Y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(t, "class", "flex flex-col sm:gap-4");
    },
    m(ne, pe) {
      se(ne, o, pe), p(o, t), p(t, i), p(i, e), p(e, r), p(e, n), p(e, a), p(i, u), p(i, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, y), p(y, C), p(C, v), p(C, k), p(C, A), p(y, L), p(y, N), p(N, S), p(S, j), p(N, g), p(N, m), p(m, M), p(m, w), p(m, T), p(m, E), p(m, R), p(m, P), p(m, G), p(m, U), p(m, I), p(m, H), p(m, z), p(m, q), p(m, B), p(m, ae), p(m, te), p(m, D), p(m, W), p(t, ee), p(t, Y), p(Y, ie), p(ie, de), p(ie, we), p(ie, K), p(Y, Q), p(Y, X), p(X, ye), p(ye, Ne), p(X, Pe), p(X, V), p(V, ge), p(V, xe), p(V, ke), p(V, he), p(V, me), p(V, x), p(V, O), p(V, F), p(V, $), p(V, le), p(V, fe), p(V, be), p(V, Ce), p(V, Se), p(V, De), p(V, Ee), p(V, Oe), p(t, qe), ce && ce.m(t, null), p(t, Je), p(t, Fe), ve.m(Fe, null), Ue || (Ve = He(
        o,
        "submit",
        /*handleFormSubmit*/
        l[16]
      ), Ue = !0);
    },
    p(ne, pe) {
      pe[0] & /*input_style*/
      16384 && _(
        a,
        "style",
        /*input_style*/
        ne[14]
      ), pe[0] & /*input_style*/
      16384 && _(
        c,
        "style",
        /*input_style*/
        ne[14]
      ), pe[0] & /*input_style*/
      16384 && _(
        A,
        "style",
        /*input_style*/
        ne[14]
      ), pe[0] & /*text_color*/
      64 && oe(
        S,
        "color",
        /*text_color*/
        ne[6]
      ), pe[0] & /*input_style*/
      16384 && _(
        m,
        "style",
        /*input_style*/
        ne[14]
      ), pe[0] & /*input_style*/
      16384 && _(
        K,
        "style",
        /*input_style*/
        ne[14]
      ), pe[0] & /*text_color*/
      64 && oe(
        ye,
        "color",
        /*text_color*/
        ne[6]
      ), pe[0] & /*input_style*/
      16384 && _(
        V,
        "style",
        /*input_style*/
        ne[14]
      ), /*showEmailInput*/
      ne[5] ? ce ? ce.p(ne, pe) : (ce = ot(ne), ce.c(), ce.m(t, Je)) : ce && (ce.d(1), ce = null), Ie === (Ie = Qe(ne)) && ve ? ve.p(ne, pe) : (ve.d(1), ve = Ie(ne), ve && (ve.c(), ve.m(Fe, null)));
    },
    d(ne) {
      ne && ue(o), ce && ce.d(), ve.d(), Ue = !1, Ve();
    }
  };
}
function nt(l) {
  let o, t, i = (
    /*backendData*/
    l[7].data[0].ccy_pair + ""
  ), e, r, n = (
    /*backendData*/
    l[7].data[0].mid_market_rate + ""
  ), a, u;
  return {
    c() {
      o = b("p"), t = J("The interbank rate "), e = J(i), r = J(`
                            was `), a = J(n), u = J("."), _(o, "class", "text-sm");
    },
    m(s, d) {
      se(s, o, d), p(o, t), p(o, e), p(o, r), p(o, a), p(o, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      128 && i !== (i = /*backendData*/
      s[7].data[0].ccy_pair + "") && _e(e, i), d[0] & /*backendData*/
      128 && n !== (n = /*backendData*/
      s[7].data[0].mid_market_rate + "") && _e(a, n);
    },
    d(s) {
      s && ue(o);
    }
  };
}
function ot(l) {
  let o, t, i, e, r, n, a;
  return {
    c() {
      o = b("div"), t = b("div"), i = b("label"), i.textContent = "Email", e = Z(), r = b("input"), n = Z(), a = b("div"), _(i, "for", "user"), _(r, "id", "user"), _(r, "type", "email"), _(r, "class", "w-full rounded-md px-3 py-2 mt-4"), _(r, "name", "user"), _(r, "placeholder", "JohnDoe@email.com"), r.required = !0, _(
        r,
        "style",
        /*input_style*/
        l[14]
      ), _(t, "class", "w-full"), _(a, "class", "w-full"), _(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      se(u, o, s), p(o, t), p(t, i), p(t, e), p(t, r), p(o, n), p(o, a);
    },
    p(u, s) {
      s[0] & /*input_style*/
      16384 && _(
        r,
        "style",
        /*input_style*/
        u[14]
      );
    },
    d(u) {
      u && ue(o);
    }
  };
}
function Nt(l) {
  let o, t, i, e, r;
  return {
    c() {
      o = b("button"), t = ze("svg"), i = ze("path"), e = ze("path"), r = J(`
                                Loading...`), _(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), _(i, "fill", "#E5E7EB"), _(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), _(e, "fill", "currentColor"), _(t, "aria-hidden", "true"), _(t, "role", "status"), _(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), _(t, "viewBox", "0 0 100 101"), _(t, "fill", "none"), _(t, "xmlns", "http://www.w3.org/2000/svg"), o.disabled = !0, _(o, "type", "button"), _(o, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), oe(
        o,
        "background-color",
        /*button_color*/
        l[13]
      ), oe(
        o,
        "color",
        /*text_color*/
        l[6]
      );
    },
    m(n, a) {
      se(n, o, a), p(o, t), p(t, i), p(t, e), p(o, r);
    },
    p(n, a) {
      a[0] & /*button_color*/
      8192 && oe(
        o,
        "background-color",
        /*button_color*/
        n[13]
      ), a[0] & /*text_color*/
      64 && oe(
        o,
        "color",
        /*text_color*/
        n[6]
      );
    },
    d(n) {
      n && ue(o);
    }
  };
}
function jt(l) {
  let o, t;
  return {
    c() {
      o = b("button"), t = J(`See your
                                charges`), _(o, "type", "submit"), _(o, "class", "px-6 py-3 mt-6"), _(
        o,
        "style",
        /*input_style*/
        l[14]
      );
    },
    m(i, e) {
      se(i, o, e), p(o, t);
    },
    p(i, e) {
      e[0] & /*input_style*/
      16384 && _(
        o,
        "style",
        /*input_style*/
        i[14]
      );
    },
    d(i) {
      i && ue(o);
    }
  };
}
function Rt(l) {
  let o, t;
  return {
    c() {
      o = b("p"), t = J(
        /*statusCheckError*/
        l[11]
      ), _(o, "class", "text-sm");
    },
    m(i, e) {
      se(i, o, e), p(o, t);
    },
    p(i, e) {
      e[0] & /*statusCheckError*/
      2048 && _e(
        t,
        /*statusCheckError*/
        i[11]
      );
    },
    d(i) {
      i && ue(o);
    }
  };
}
function Lt(l) {
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
function Pt(l) {
  let o, t, i;
  function e(a, u) {
    return (
      /*statusCheckError*/
      a[11] ? Dt : St
    );
  }
  let r = e(l), n = r(l);
  return {
    c() {
      o = b("link"), t = Z(), n.c(), i = dt(), this.c = Me, _(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), _(o, "rel", "stylesheet");
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
const rt = "http://localhost:8000", lt = "CORS_ERROR";
function Ft(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function It(l, o, t) {
  let i, e, { mode: r = "auto" } = o, { light_mode_background: n = "#d2d0d0" } = o, { dark_mode_background: a = "#1f2937" } = o, { light_mode_text_color: u = "#1f2937" } = o, { dark_mode_text_color: s = "#f9fafb" } = o, { dark_mode_input_background: d = "#374151" } = o, { light_mode_input_background: f = "#f9fafb" } = o, { dark_mode_button_color: c = "#374151" } = o, { light_mode_button_color: h = "#f9fafb" } = o, { border_radius: y = "0.5rem" } = o, { input_border_radius: C = "0.5rem" } = o, { shadow: v = "none" } = o, { opacity: k = 100 } = o, { name: A = "Our Results" } = o, { showInterbankRate: L = !0 } = o, { showEmailInput: N = !0 } = o;
  function S() {
    const D = new XMLHttpRequest();
    D.open("GET", `${rt}/`, !0), D.onerror = function() {
      D.status === 0 ? t(11, T = lt) : t(11, T = "We're sorry, our servers are currently down. Please try again later.");
    }, D.send();
  }
  const j = async (D) => fetch(`${rt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  pt(() => {
    S();
  });
  let g, m = !0, M, w = !1, T;
  const E = () => {
    t(7, g = void 0), t(8, m = !0), t(9, M = !1), t(10, w = !1);
  }, R = async (D) => {
    t(8, m = !1), t(10, w = !0), t(9, M = void 0);
    try {
      const W = await j(D);
      if (!W.ok) {
        const Y = await W.json();
        throw console.log("errorRes", Y), new Error(Y || `HTTP error! Status: ${W.status}`);
      }
      const ee = await W.json();
      t(10, w = !1), t(9, M = void 0), t(8, m = !1), t(7, g = ee);
    } catch (W) {
      t(10, w = !1), t(9, M = W.message), t(8, m = !1), t(7, g = void 0);
    }
  }, P = async (D) => {
    D.preventDefault();
    const W = new FormData(D.target), ee = {};
    for (let Y of W) {
      const [ie, de] = Y;
      ee[ie] = de;
    }
    ee.prospect = "", ee.input_spread = "5", ee.prospect_annual_flow = "", ee.email_user = !1, N || (ee.user = "testUserWithoutMail@gmail.com"), console.log(ee), R(ee);
  }, G = (D) => {
    t(28, i = D.matches);
  }, U = window.matchMedia("(prefers-color-scheme: dark)");
  U.addEventListener("change", G), ht(() => {
    U.removeEventListener("change", G);
  });
  let I, H, z, q;
  const B = (D) => E(), ae = (D) => E(), te = (D) => E();
  return l.$$set = (D) => {
    "mode" in D && t(17, r = D.mode), "light_mode_background" in D && t(18, n = D.light_mode_background), "dark_mode_background" in D && t(19, a = D.dark_mode_background), "light_mode_text_color" in D && t(20, u = D.light_mode_text_color), "dark_mode_text_color" in D && t(21, s = D.dark_mode_text_color), "dark_mode_input_background" in D && t(22, d = D.dark_mode_input_background), "light_mode_input_background" in D && t(23, f = D.light_mode_input_background), "dark_mode_button_color" in D && t(24, c = D.dark_mode_button_color), "light_mode_button_color" in D && t(25, h = D.light_mode_button_color), "border_radius" in D && t(0, y = D.border_radius), "input_border_radius" in D && t(26, C = D.input_border_radius), "shadow" in D && t(1, v = D.shadow), "opacity" in D && t(2, k = D.opacity), "name" in D && t(3, A = D.name), "showInterbankRate" in D && t(4, L = D.showInterbankRate), "showEmailInput" in D && t(5, N = D.showEmailInput);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*mode*/
    131072 && t(28, i = Ft(r)), l.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    269221888 && t(12, I = i ? a : n), l.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    271581184 && t(6, H = i ? s : u), l.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    281018368 && t(27, z = i ? d : f), l.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    318767104 && t(13, q = i ? c : h), l.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    201326656 && t(14, e = `
    background-color: ${z};
    color: ${H};
    border-radius: ${C}px;
    `);
  }, [
    y,
    v,
    k,
    A,
    L,
    N,
    H,
    g,
    m,
    M,
    w,
    T,
    I,
    q,
    e,
    E,
    P,
    r,
    n,
    a,
    u,
    s,
    d,
    f,
    c,
    h,
    C,
    z,
    i,
    B,
    ae,
    te
  ];
}
class Yt extends it {
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
        }}</style>`, kt(
      this,
      {
        target: this.shadowRoot,
        props: ft(this.attributes),
        customElement: !0
      },
      It,
      Pt,
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
        showInterbankRate: 4,
        showEmailInput: 5
      },
      null,
      [-1, -1]
    ), o && (o.target && se(o.target, this, o.anchor), o.props && (this.$set(o.props), re()));
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
      "showInterbankRate",
      "showEmailInput"
    ];
  }
  get mode() {
    return this.$$.ctx[17];
  }
  set mode(o) {
    this.$$set({ mode: o }), re();
  }
  get light_mode_background() {
    return this.$$.ctx[18];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), re();
  }
  get dark_mode_background() {
    return this.$$.ctx[19];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), re();
  }
  get light_mode_text_color() {
    return this.$$.ctx[20];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), re();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[21];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), re();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), re();
  }
  get light_mode_input_background() {
    return this.$$.ctx[23];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), re();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), re();
  }
  get light_mode_button_color() {
    return this.$$.ctx[25];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), re();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(o) {
    this.$$set({ border_radius: o }), re();
  }
  get input_border_radius() {
    return this.$$.ctx[26];
  }
  set input_border_radius(o) {
    this.$$set({ input_border_radius: o }), re();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(o) {
    this.$$set({ shadow: o }), re();
  }
  get opacity() {
    return this.$$.ctx[2];
  }
  set opacity(o) {
    this.$$set({ opacity: o }), re();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(o) {
    this.$$set({ name: o }), re();
  }
  get showInterbankRate() {
    return this.$$.ctx[4];
  }
  set showInterbankRate(o) {
    this.$$set({ showInterbankRate: o }), re();
  }
  get showEmailInput() {
    return this.$$.ctx[5];
  }
  set showEmailInput(o) {
    this.$$set({ showEmailInput: o }), re();
  }
}
customElements.define("spreadm8-calc", Yt);
export {
  Yt as Spreadm8Calc
};
