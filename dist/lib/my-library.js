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
function I(l) {
  return document.createTextNode(l);
}
function Z() {
  return I(" ");
}
function dt() {
  return I("");
}
function Je(l, o, t, a) {
  return l.addEventListener(o, t, a), () => l.removeEventListener(o, t, a);
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
function oe(l, o, t, a) {
  t === null ? l.style.removeProperty(o) : l.style.setProperty(o, t, a ? "important" : "");
}
function ft(l) {
  const o = {};
  for (const t of l)
    o[t.name] = t.value;
  return o;
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
  Ze || (Ze = !0, mt.then(re));
}
function Ge(l) {
  He.push(l);
}
const Be = /* @__PURE__ */ new Set();
let Ae = 0;
function re() {
  if (Ae !== 0)
    return;
  const l = Le;
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
    for (let o = 0; o < He.length; o += 1) {
      const t = He[o];
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
    const o = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, o), l.after_update.forEach(Ge);
  }
}
const bt = /* @__PURE__ */ new Set();
function gt(l, o) {
  l && l.i && (bt.delete(l), l.i(o));
}
function vt(l, o, t, a) {
  const { fragment: e, after_update: r } = l.$$;
  e && e.m(o, t), a || Ge(() => {
    const n = l.$$.on_mount.map(We).filter(Ke);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Pe(n), l.$$.on_mount = [];
  }), r.forEach(Ge);
}
function wt(l, o) {
  const t = l.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(o), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xt(l, o) {
  l.$$.dirty[0] === -1 && (Te.push(l), _t(), l.$$.dirty.fill(0)), l.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function kt(l, o, t, a, e, r, n, i = [-1]) {
  const u = Le;
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
    dirty: i,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let d = !1;
  if (s.ctx = t ? t(l, o.props || {}, (f, c, ...h) => {
    const y = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), d && xt(l, f)), c;
  }) : [], s.update(), d = !0, Pe(s.before_update), s.fragment = a ? a(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const f = ct(o.target);
      s.fragment && s.fragment.l(f), f.forEach(ue);
    } else
      s.fragment && s.fragment.c();
    o.intro && gt(l.$$.fragment), vt(l, o.target, o.anchor, o.customElement), re();
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
    wt(this, 1), this.$destroy = Me;
  }
  $on(l, o) {
    if (!Ke(o))
      return Me;
    const t = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return t.push(o), () => {
      const a = t.indexOf(o);
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
(function(l, o) {
  (function(t, a) {
    l.exports = a();
  })(Mt, function() {
    return function(t) {
      function a(r) {
        if (e[r])
          return e[r].exports;
        var n = e[r] = { exports: {}, id: r, loaded: !1 };
        return t[r].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports;
      }
      var e = {};
      return a.m = t, a.c = e, a.p = "", a(0);
    }([function(t, a, e) {
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      e(84);
      var n = e(41), i = r(n), u = function() {
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
      t.exports = function(r, n) {
        return e.call(r, n);
      };
    }, function(t, a, e) {
      var r = e(9), n = e(32), i = e(25), u = Object.defineProperty;
      a.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (r(s), d = i(d, !0), r(f), n)
          try {
            return u(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
      };
    }, function(t, a, e) {
      var r = e(59), n = e(16);
      t.exports = function(i) {
        return r(n(i));
      };
    }, function(t, a, e) {
      var r = e(4), n = e(14);
      t.exports = e(1) ? function(i, u, s) {
        return r.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(t, a, e) {
      var r = e(23)("wks"), n = e(15), i = e(2).Symbol, u = typeof i == "function", s = t.exports = function(d) {
        return r[d] || (r[d] = u && i[d] || (u ? i : n)("Symbol." + d));
      };
      s.store = r;
    }, function(t, a) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, a, e) {
      var r = e(12);
      t.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(t, a, e) {
      var r = e(2), n = e(8), i = e(56), u = e(6), s = "prototype", d = function(f, c, h) {
        var y, D, g, k = f & d.F, A = f & d.G, P = f & d.S, j = f & d.P, C = f & d.B, L = f & d.W, v = A ? n : n[c] || (n[c] = {}), m = v[s], M = A ? r : P ? r[c] : (r[c] || {})[s];
        A && (h = c);
        for (y in h)
          D = !k && M && M[y] !== void 0, D && y in v || (g = D ? M[y] : h[y], v[y] = A && typeof M[y] != "function" ? h[y] : C && D ? i(g, r) : L && M[y] == g ? function(w) {
            var T = function(O, N, F) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(O);
                  case 2:
                    return new w(O, N);
                }
                return new w(O, N, F);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(g) : j && typeof g == "function" ? i(Function.call, g) : g, j && ((v.virtual || (v.virtual = {}))[y] = g, f & d.R && m && !m[y] && u(m, y, g)));
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
      var r = e(38), n = e(17);
      t.exports = Object.keys || function(i) {
        return r(i, n);
      };
    }, function(t, a) {
      t.exports = function(e, r) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: r };
      };
    }, function(t, a) {
      var e = 0, r = Math.random();
      t.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + r).toString(36));
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
      var r = e(4).f, n = e(3), i = e(7)("toStringTag");
      t.exports = function(u, s, d) {
        u && !n(u = d ? u : u.prototype, i) && r(u, i, { configurable: !0, value: s });
      };
    }, function(t, a, e) {
      var r = e(23)("keys"), n = e(15);
      t.exports = function(i) {
        return r[i] || (r[i] = n(i));
      };
    }, function(t, a, e) {
      var r = e(2), n = "__core-js_shared__", i = r[n] || (r[n] = {});
      t.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(t, a) {
      var e = Math.ceil, r = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n);
      };
    }, function(t, a, e) {
      var r = e(12);
      t.exports = function(n, i) {
        if (!r(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !r(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !r(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !r(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, a, e) {
      var r = e(2), n = e(8), i = e(19), u = e(27), s = e(4).f;
      t.exports = function(d) {
        var f = n.Symbol || (n.Symbol = i ? {} : r.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: u.f(d) });
      };
    }, function(t, a, e) {
      a.f = e(7);
    }, function(t, a) {
      a.__esModule = !0, a.default = function(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, a, e) {
      function r(u) {
        return u && u.__esModule ? u : { default: u };
      }
      a.__esModule = !0;
      var n = e(45), i = r(n);
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
      t.exports = function(r) {
        return e.call(r).slice(8, -1);
      };
    }, function(t, a, e) {
      var r = e(12), n = e(2).document, i = r(n) && r(n.createElement);
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
      var r = e(19), n = e(10), i = e(39), u = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), y = e(7)("iterator"), D = !([].keys && "next" in [].keys()), g = "@@iterator", k = "keys", A = "values", P = function() {
        return this;
      };
      t.exports = function(j, C, L, v, m, M, w) {
        f(L, C, v);
        var T, O, N, F = function(te) {
          if (!D && te in J)
            return J[te];
          switch (te) {
            case k:
              return function() {
                return new L(this, te);
              };
            case A:
              return function() {
                return new L(this, te);
              };
          }
          return function() {
            return new L(this, te);
          };
        }, W = C + " Iterator", z = m == A, H = !1, J = j.prototype, B = J[y] || J[g] || m && J[m], G = B || F(m), U = m ? z ? F("entries") : G : void 0, ie = C == "Array" && J.entries || B;
        if (ie && (N = h(ie.call(new j())), N !== Object.prototype && (c(N, W, !0), r || s(N, y) || u(N, y, P))), z && B && B.name !== A && (H = !0, G = function() {
          return B.call(this);
        }), r && !w || !D && !H && J[y] || u(J, y, G), d[C] = G, d[W] = P, m)
          if (T = { values: z ? G : F(A), keys: M ? G : F(k), entries: U }, w)
            for (O in T)
              O in J || i(J, O, T[O]);
          else
            n(n.P + n.F * (D || H), C, T);
        return T;
      };
    }, function(t, a, e) {
      var r = e(9), n = e(35), i = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), y = i.length, D = "<", g = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(D + "script" + g + "document.F=Object" + D + "/script" + g), c.close(), f = c.F; y--; )
          delete f[d][i[y]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var y;
        return c !== null ? (s[d] = r(c), y = new s(), s[d] = null, y[u] = c) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(t, a, e) {
      var r = e(4), n = e(9), i = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, f = i(s), c = f.length, h = 0; c > h; )
          r.f(u, d = f[h++], s[d]);
        return u;
      };
    }, function(t, a, e) {
      var r = e(38), n = e(17).concat("length", "prototype");
      a.f = Object.getOwnPropertyNames || function(i) {
        return r(i, n);
      };
    }, function(t, a) {
      a.f = Object.getOwnPropertySymbols;
    }, function(t, a, e) {
      var r = e(3), n = e(5), i = e(55)(!1), u = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var f, c = n(s), h = 0, y = [];
        for (f in c)
          f != u && r(c, f) && y.push(f);
        for (; d.length > h; )
          r(c, f = d[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(t, a, e) {
      t.exports = e(6);
    }, function(t, a, e) {
      function r(h) {
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
        var D = new Date(y.getFullYear(), 0, 4);
        D.setDate(D.getDate() - (D.getDay() + 6) % 7 + 3);
        var g = y.getTimezoneOffset() - D.getTimezoneOffset();
        y.setHours(y.getHours() - g);
        var k = (y - D) / 6048e5;
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
      var d = e(48), f = r(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(g, k, A, P) {
          if (arguments.length !== 1 || s(g) !== "string" || /\d/.test(g) || (k = g, g = void 0), g = g || new Date(), g instanceof Date || (g = new Date(g)), isNaN(g))
            throw TypeError("Invalid date");
          k = String(c.masks[k] || k || c.masks.default);
          var j = k.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (k = k.slice(4), A = !0, j === "GMT:" && (P = !0));
          var C = A ? "getUTC" : "get", L = g[C + "Date"](), v = g[C + "Day"](), m = g[C + "Month"](), M = g[C + "FullYear"](), w = g[C + "Hours"](), T = g[C + "Minutes"](), O = g[C + "Seconds"](), N = g[C + "Milliseconds"](), F = A ? 0 : g.getTimezoneOffset(), W = i(g), z = u(g), H = { d: L, dd: n(L), ddd: c.i18n.dayNames[v], dddd: c.i18n.dayNames[v + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: O, ss: n(O), l: n(N, 3), L: n(Math.round(N / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: P ? "GMT" : A ? "UTC" : (String(g).match(y) || [""]).pop().replace(D, ""), o: (F > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(F) / 60) + Math.abs(F) % 60, 4), S: ["th", "st", "nd", "rd"][L % 10 > 3 ? 0 : (L % 100 - L % 10 != 10) * L % 10], W, N: z };
          return k.replace(h, function(J) {
            return J in H ? H[J] : J.slice(1, J.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, a.default = c;
    }, function(t, a, e) {
      function r(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = e(44), i = r(n), u = e(28), s = r(u), d = e(29), f = r(d), c = e(43), h = r(c), y = e(42), D = r(y), g = e(40), k = r(g), A = function() {
        function P(j) {
          var C = this;
          (0, s.default)(this, P), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var v = C.format || "yyyy-mm-dd", m = C.element.value.match(/(\d+)/g), M = 0, w = {};
            return v.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(m[w.yyyy], m[w.mm] - 1, m[w.dd]);
          }, set: function(v) {
            C.element.value = (0, k.default)(v, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(v) {
            C.element.valueAsDate = new Date(v);
          } } });
          var L = function(v) {
            var m = C.element;
            m.locale = C.localeText, h.default.attachTo(m);
          };
          this.element.addEventListener("focus", L), this.element.addEventListener("mouseup", L), this.element.addEventListener("keydown", function(v) {
            var m = new Date();
            switch (v.keyCode) {
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
          }), this.element.addEventListener("keyup", function(v) {
            h.default.sync();
          });
        }
        return (0, f.default)(P, [{ key: "getLocaleText", value: function() {
          var j = this.locale.toLowerCase();
          for (var C in D.default) {
            var L = C.split("_");
            if (L.map(function(v) {
              return v.toLowerCase();
            }), ~L.indexOf(j) || ~L.indexOf(j.substr(0, 2)))
              return D.default[C];
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
          for (var L = 0; L < C; ++L)
            new P(j[L]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var j = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var L = 0; L < C; ++L)
            new P(j[L]);
        } }]), P;
      }();
      a.default = A;
    }, function(t, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      a.default = e;
    }, function(t, a, e) {
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = e(28), i = r(n), u = e(29), s = r(u), d = function() {
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
            var g = new Date();
            c.date = new Date(g.getFullYear() + "/" + ("0" + (g.getMonth() + 1)).slice(-2) + "/" + ("0" + g.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var D = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(g) {
            var k = g.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var A = c.days.querySelector("[data-selected]");
            A && A.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), c.date.setDate(parseInt(k.textContent)), c.setInput();
          }), D.appendChild(this.daysHead), D.appendChild(this.days), this.container.appendChild(D), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(g) {
            if (c.isOpen) {
              for (var k = g.target, A = k === c.container || k === c.input; !A && (k = k.parentNode); )
                A = k === c.container;
              (g.target.getAttribute("type") !== "date" && !A || !A) && c.hide();
            }
          }, this.removeBlur = function(g) {
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
          var D = this.container.getBoundingClientRect(), g = D.width ? D.width : 280, k = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, A = y.right - g;
          y.right < g ? (A = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = A + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(c, h, 1).getDay(), D = new Date(this.date.getFullYear(), h + 1, 0).getDate(), g = f.absoluteDate(this.input.valueAsDate) || !1, k = g && c === g.getFullYear() && h === g.getMonth(), A = [], P = 0; P < D + y; ++P)
            if (P % 7 === 0 && A.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              A.push("<td></td>");
            else {
              var j = P + 1 - y, C = k && g.getDate() === j;
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
        } }], [{ key: "createRangeSelect", value: function(c, h, y, D) {
          c.innerHTML = "";
          for (var g = h; g <= y; ++g) {
            var k = document.createElement("option");
            c.appendChild(k);
            var A = D ? D[g - h] : g;
            k.text = A, k.value = g;
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
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      a.__esModule = !0;
      var n = e(47), i = r(n), u = e(46), s = r(u), d = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
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
      var r = e(8).Object;
      t.exports = function(n, i) {
        return r.defineProperties(n, i);
      };
    }, function(t, a, e) {
      e(74);
      var r = e(8).Object;
      t.exports = function(n, i, u) {
        return r.defineProperty(n, i, u);
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
      var r = e(5), n = e(70), i = e(69);
      t.exports = function(u) {
        return function(s, d, f) {
          var c, h = r(s), y = n(h.length), D = i(f, y);
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
      var r = e(53);
      t.exports = function(n, i, u) {
        if (r(n), i === void 0)
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
      var r = e(13), n = e(37), i = e(20);
      t.exports = function(u) {
        var s = r(u), d = n.f;
        if (d)
          for (var f, c = d(u), h = i.f, y = 0; c.length > y; )
            h.call(u, f = c[y++]) && s.push(f);
        return s;
      };
    }, function(t, a, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, a, e) {
      var r = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(t, a, e) {
      var r = e(30);
      t.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(t, a, e) {
      var r = e(34), n = e(14), i = e(21), u = {};
      e(6)(u, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, f) {
        s.prototype = r(u, { next: n(1, f) }), i(s, d + " Iterator");
      };
    }, function(t, a) {
      t.exports = function(e, r) {
        return { value: r, done: !!e };
      };
    }, function(t, a, e) {
      var r = e(13), n = e(5);
      t.exports = function(i, u) {
        for (var s, d = n(i), f = r(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === u)
            return s;
      };
    }, function(t, a, e) {
      var r = e(15)("meta"), n = e(12), i = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(k) {
        u(k, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, A) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, r)) {
          if (!d(k))
            return "F";
          if (!A)
            return "E";
          c(k);
        }
        return k[r].i;
      }, y = function(k, A) {
        if (!i(k, r)) {
          if (!d(k))
            return !0;
          if (!A)
            return !1;
          c(k);
        }
        return k[r].w;
      }, D = function(k) {
        return f && g.NEED && d(k) && !i(k, r) && c(k), k;
      }, g = t.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: D };
    }, function(t, a, e) {
      var r = e(20), n = e(14), i = e(5), u = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      a.f = e(1) ? f : function(c, h) {
        if (c = i(c), h = u(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return n(!r.f.call(c, h), c[h]);
      };
    }, function(t, a, e) {
      var r = e(5), n = e(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch {
          return u.slice();
        }
      };
      t.exports.f = function(d) {
        return u && i.call(d) == "[object Window]" ? s(d) : n(r(d));
      };
    }, function(t, a, e) {
      var r = e(3), n = e(71), i = e(22)("IE_PROTO"), u = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(t, a, e) {
      var r = e(24), n = e(16);
      t.exports = function(i) {
        return function(u, s) {
          var d, f, c = String(n(u)), h = r(s), y = c.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? c.charAt(h) : d : i ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, a, e) {
      var r = e(24), n = Math.max, i = Math.min;
      t.exports = function(u, s) {
        return u = r(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(t, a, e) {
      var r = e(24), n = Math.min;
      t.exports = function(i) {
        return i > 0 ? n(r(i), 9007199254740991) : 0;
      };
    }, function(t, a, e) {
      var r = e(16);
      t.exports = function(n) {
        return Object(r(n));
      };
    }, function(t, a, e) {
      var r = e(54), n = e(62), i = e(18), u = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(t, a, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, a, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, a) {
    }, function(t, a, e) {
      var r = e(68)(!0);
      e(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = r(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, a, e) {
      var r = e(2), n = e(3), i = e(1), u = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), y = e(15), D = e(7), g = e(27), k = e(26), A = e(63), P = e(57), j = e(60), C = e(9), L = e(5), v = e(25), m = e(14), M = e(34), w = e(66), T = e(65), O = e(4), N = e(13), F = T.f, W = O.f, z = w.f, H = r.Symbol, J = r.JSON, B = J && J.stringify, G = "prototype", U = D("_hidden"), ie = D("toPrimitive"), te = {}.propertyIsEnumerable, ae = c("symbol-registry"), S = c("symbols"), $ = c("op-symbols"), R = Object[G], ee = typeof H == "function", de = r.QObject, ye = !de || !de[G] || !de[G].findChild, K = i && f(function() {
        return M(W({}, "a", { get: function() {
          return W(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, E, Y) {
        var X = F(R, E);
        X && delete R[E], W(x, E, Y), X && x !== R && W(R, E, X);
      } : W, V = function(x) {
        var E = S[x] = M(H[G]);
        return E._k = x, E;
      }, Q = ee && typeof H.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof H;
      }, be = function(x, E, Y) {
        return x === R && be($, E, Y), C(x), E = v(E, !0), C(Y), n(S, E) ? (Y.enumerable ? (n(x, U) && x[U][E] && (x[U][E] = !1), Y = M(Y, { enumerable: m(0, !1) })) : (n(x, U) || W(x, U, m(1, {})), x[U][E] = !0), K(x, E, Y)) : W(x, E, Y);
      }, Ne = function(x, E) {
        C(x);
        for (var Y, X = P(E = L(E)), le = 0, fe = X.length; fe > le; )
          be(x, Y = X[le++], E[Y]);
        return x;
      }, Re = function(x, E) {
        return E === void 0 ? M(x) : Ne(M(x), E);
      }, q = function(x) {
        var E = te.call(this, x = v(x, !0));
        return !(this === R && n(S, x) && !n($, x)) && (!(E || !n(this, x) || !n(S, x) || n(this, U) && this[U][x]) || E);
      }, ve = function(x, E) {
        if (x = L(x), E = v(E, !0), x !== R || !n(S, E) || n($, E)) {
          var Y = F(x, E);
          return !Y || !n(S, E) || n(x, U) && x[U][E] || (Y.enumerable = !0), Y;
        }
      }, xe = function(x) {
        for (var E, Y = z(L(x)), X = [], le = 0; Y.length > le; )
          n(S, E = Y[le++]) || E == U || E == d || X.push(E);
        return X;
      }, ke = function(x) {
        for (var E, Y = x === R, X = z(Y ? $ : L(x)), le = [], fe = 0; X.length > fe; )
          !n(S, E = X[fe++]) || Y && !n(R, E) || le.push(S[E]);
        return le;
      };
      ee || (H = function() {
        if (this instanceof H)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), E = function(Y) {
          this === R && E.call($, Y), n(this, U) && n(this[U], x) && (this[U][x] = !1), K(this, x, m(1, Y));
        };
        return i && ye && K(R, x, { configurable: !0, set: E }), V(x);
      }, s(H[G], "toString", function() {
        return this._k;
      }), T.f = ve, O.f = be, e(36).f = w.f = xe, e(20).f = q, e(37).f = ke, i && !e(19) && s(R, "propertyIsEnumerable", q, !0), g.f = function(x) {
        return V(D(x));
      }), u(u.G + u.W + u.F * !ee, { Symbol: H });
      for (var he = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; he.length > me; )
        D(he[me++]);
      for (var he = N(D.store), me = 0; he.length > me; )
        k(he[me++]);
      u(u.S + u.F * !ee, "Symbol", { for: function(x) {
        return n(ae, x += "") ? ae[x] : ae[x] = H(x);
      }, keyFor: function(x) {
        if (Q(x))
          return A(ae, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        ye = !0;
      }, useSimple: function() {
        ye = !1;
      } }), u(u.S + u.F * !ee, "Object", { create: Re, defineProperty: be, defineProperties: Ne, getOwnPropertyDescriptor: ve, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), J && u(u.S + u.F * (!ee || f(function() {
        var x = H();
        return B([x]) != "[null]" || B({ a: x }) != "{}" || B(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !Q(x)) {
          for (var E, Y, X = [x], le = 1; arguments.length > le; )
            X.push(arguments[le++]);
          return E = X[1], typeof E == "function" && (Y = E), !Y && j(E) || (E = function(fe, ge) {
            if (Y && (ge = Y.call(this, fe, ge)), !Q(ge))
              return ge;
          }), X[1] = E, B.apply(J, X);
        }
      } }), H[G][ie] || e(6)(H[G], ie, H[G].valueOf), h(H, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(t, a, e) {
      e(26)("asyncIterator");
    }, function(t, a, e) {
      e(26)("observable");
    }, function(t, a, e) {
      e(72);
      for (var r = e(2), n = e(6), i = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = r[f], h = c && c.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
      }
    }, function(t, a, e) {
      a = t.exports = e(82)(), a.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, a) {
      t.exports = function() {
        var e = [];
        return e.toString = function() {
          for (var r = [], n = 0; n < this.length; n++) {
            var i = this[n];
            i[2] ? r.push("@media " + i[2] + "{" + i[1] + "}") : r.push(i[1]);
          }
          return r.join("");
        }, e.i = function(r, n) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < r.length; u++) {
            var d = r[u];
            typeof d[0] == "number" && i[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), e.push(d));
          }
        }, e;
      };
    }, function(t, a, e) {
      function r(v, m) {
        for (var M = 0; M < v.length; M++) {
          var w = v[M], T = D[w.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](w.parts[O]);
            for (; O < w.parts.length; O++)
              T.parts.push(f(w.parts[O], m));
          } else {
            for (var N = [], O = 0; O < w.parts.length; O++)
              N.push(f(w.parts[O], m));
            D[w.id] = { id: w.id, refs: 1, parts: N };
          }
        }
      }
      function n(v) {
        for (var m = [], M = {}, w = 0; w < v.length; w++) {
          var T = v[w], O = T[0], N = T[1], F = T[2], W = T[3], z = { css: N, media: F, sourceMap: W };
          M[O] ? M[O].parts.push(z) : m.push(M[O] = { id: O, parts: [z] });
        }
        return m;
      }
      function i(v, m) {
        var M = A(), w = C[C.length - 1];
        if (v.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(m, w.nextSibling) : M.appendChild(m) : M.insertBefore(m, M.firstChild), C.push(m);
        else {
          if (v.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(m);
        }
      }
      function u(v) {
        v.parentNode.removeChild(v);
        var m = C.indexOf(v);
        m >= 0 && C.splice(m, 1);
      }
      function s(v) {
        var m = document.createElement("style");
        return m.type = "text/css", i(v, m), m;
      }
      function d(v) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", i(v, m), m;
      }
      function f(v, m) {
        var M, w, T;
        if (m.singleton) {
          var O = j++;
          M = P || (P = s(m)), w = c.bind(null, M, O, !1), T = c.bind(null, M, O, !0);
        } else
          v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = d(m), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(m), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(v), function(N) {
          if (N) {
            if (N.css === v.css && N.media === v.media && N.sourceMap === v.sourceMap)
              return;
            w(v = N);
          } else
            T();
        };
      }
      function c(v, m, M, w) {
        var T = M ? "" : w.css;
        if (v.styleSheet)
          v.styleSheet.cssText = L(m, T);
        else {
          var O = document.createTextNode(T), N = v.childNodes;
          N[m] && v.removeChild(N[m]), N.length ? v.insertBefore(O, N[m]) : v.appendChild(O);
        }
      }
      function h(v, m) {
        var M = m.css, w = m.media;
        if (w && v.setAttribute("media", w), v.styleSheet)
          v.styleSheet.cssText = M;
        else {
          for (; v.firstChild; )
            v.removeChild(v.firstChild);
          v.appendChild(document.createTextNode(M));
        }
      }
      function y(v, m) {
        var M = m.css, w = m.sourceMap;
        w && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(w)))) + " */");
        var T = new Blob([M], { type: "text/css" }), O = v.href;
        v.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var D = {}, g = function(v) {
        var m;
        return function() {
          return typeof m > "u" && (m = v.apply(this, arguments)), m;
        };
      }, k = g(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), A = g(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, j = 0, C = [];
      t.exports = function(v, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = k()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var M = n(v);
        return r(M, m), function(w) {
          for (var T = [], O = 0; O < M.length; O++) {
            var N = M[O], F = D[N.id];
            F.refs--, T.push(F);
          }
          if (w) {
            var W = n(w);
            r(W, m);
          }
          for (var O = 0; O < T.length; O++) {
            var F = T[O];
            if (F.refs === 0) {
              for (var z = 0; z < F.parts.length; z++)
                F.parts[z]();
              delete D[F.id];
            }
          }
        };
      };
      var L = function() {
        var v = [];
        return function(m, M) {
          return v[m] = M, v.filter(Boolean).join(`
`);
        };
      }();
    }, function(t, a, e) {
      var r = e(81);
      typeof r == "string" && (r = [[t.id, r, ""]]), e(83)(r, {}), r.locals && (t.exports = r.locals);
    }]);
  });
})(Ct);
function St(l) {
  let o, t, a;
  function e(i, u) {
    return (
      /*isIdle*/
      i[7] || /*isFetching*/
      i[9] ? Tt : (
        /*backendData*/
        i[6] ? At : (
          /*error*/
          i[8] ? Et : Ot
        )
      )
    );
  }
  let r = e(l), n = r(l);
  return {
    c() {
      o = b("div"), n.c(), _(o, "class", t = `w-full p-4 shadow-${/*shadow*/
      l[1]}`), _(o, "style", a = `
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
    m(i, u) {
      se(i, o, u), n.m(o, null);
    },
    p(i, u) {
      r === (r = e(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      2 && t !== (t = `w-full p-4 shadow-${/*shadow*/
      i[1]}`) && _(o, "class", t), u[0] & /*background, border_radius, text_color, opacity*/
      2085 && a !== (a = `
        background-color: ${/*background*/
      i[11]};
        border-radius: ${/*border_radius*/
      i[0]};
        color: ${/*text_color*/
      i[5]};
        opacity: ${/*opacity*/
      i[2]}%!important;
`) && _(o, "style", a);
    },
    d(i) {
      i && ue(o), n.d();
    }
  };
}
function Dt(l) {
  let o, t, a, e, r, n;
  function i(d, f) {
    return (
      /*statusCheckError*/
      d[10] === lt ? Pt : Lt
    );
  }
  let u = i(l), s = u(l);
  return {
    c() {
      o = b("div"), t = b("div"), a = b("h1"), a.textContent = "An error occured", e = Z(), s.c(), _(a, "class", "text-2xl"), _(t, "class", "flex flex-col items-center gap-4"), _(o, "class", r = `w-full p-4 shadow-${/*shadow*/
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
    m(d, f) {
      se(d, o, f), p(o, t), p(t, a), p(t, e), s.m(t, null);
    },
    p(d, f) {
      u === (u = i(d)) && s ? s.p(d, f) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      2 && r !== (r = `w-full p-4 shadow-${/*shadow*/
      d[1]}`) && _(o, "class", r), f[0] & /*background, border_radius, text_color, opacity*/
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
function Ot(l) {
  let o, t, a, e, r, n, i;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "An unknown error", a = Z(), e = b("button"), r = I("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        e,
        "background-color",
        /*button_color*/
        l[12]
      ), oe(
        e,
        "color",
        /*text_color*/
        l[5]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      se(u, o, s), p(o, t), p(o, a), p(o, e), p(e, r), n || (i = Je(
        e,
        "click",
        /*click_handler_2*/
        l[32]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      4096 && oe(
        e,
        "background-color",
        /*button_color*/
        u[12]
      ), s[0] & /*text_color*/
      32 && oe(
        e,
        "color",
        /*text_color*/
        u[5]
      );
    },
    d(u) {
      u && ue(o), n = !1, i();
    }
  };
}
function Et(l) {
  let o, t, a, e, r, n, i, u, s, d;
  return {
    c() {
      o = b("div"), t = b("h1"), t.textContent = "Error", a = Z(), e = b("pre"), r = I(
        /*error*/
        l[8]
      ), n = Z(), i = b("button"), u = I("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "py-3"), _(i, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        i,
        "background-color",
        /*button_color*/
        l[12]
      ), oe(
        i,
        "color",
        /*text_color*/
        l[5]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(f, c) {
      se(f, o, c), p(o, t), p(o, a), p(o, e), p(e, r), p(o, n), p(o, i), p(i, u), s || (d = Je(
        i,
        "click",
        /*click_handler_1*/
        l[31]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      256 && _e(
        r,
        /*error*/
        f[8]
      ), c[0] & /*button_color*/
      4096 && oe(
        i,
        "background-color",
        /*button_color*/
        f[12]
      ), c[0] & /*text_color*/
      32 && oe(
        i,
        "color",
        /*text_color*/
        f[5]
      );
    },
    d(f) {
      f && ue(o), s = !1, d();
    }
  };
}
function At(l) {
  let o, t, a, e, r, n, i = (
    /*backendData*/
    l[6].data[0].third_party_exchange_rate + ""
  ), u, s, d, f, c, h = (
    /*backendData*/
    l[6].data[0].ccy_pair + ""
  ), y, D, g, k, A, P = (
    /*backendData*/
    l[6].data[0].sold_ccy + ""
  ), j, C, L = (
    /*backendData*/
    l[6].data[0].third_party_profit + ""
  ), v, m, M, w, T, O, N, F, W, z = (
    /*backendData*/
    l[6].data[0].integritas_rate + ""
  ), H, J, B, G, U = (
    /*backendData*/
    l[6].data[0].sold_ccy + ""
  ), ie, te, ae = (
    /*backendData*/
    l[6].data[0].integritas_savings + ""
  ), S, $, R, ee, de, ye, K = (
    /*show_interbank_rate*/
    l[4] && nt(l)
  );
  return {
    c() {
      o = b("div"), t = b("div"), a = b("h1"), a.textContent = "Your Provider", e = Z(), r = b("p"), n = I("Your exchange rate was "), u = I(i), s = Z(), K && K.c(), d = Z(), f = b("p"), c = I("Your provider's markup was TODO "), y = I(h), D = I("%."), g = Z(), k = b("p"), A = I(`Your provider
                        charged `), j = I(P), C = Z(), v = I(L), m = I(` on this
                        trade.`), M = Z(), w = b("div"), T = b("h1"), O = I(
        /*name*/
        l[3]
      ), N = Z(), F = b("p"), W = I("Our exchange rate was "), H = I(z), J = Z(), B = b("p"), G = I(`We would've saved
                        you `), ie = I(U), te = Z(), S = I(ae), $ = Z(), R = b("button"), ee = I("Calculate again"), _(a, "class", "text-2xl"), _(r, "class", "text-sm"), _(f, "class", "text-sm"), _(k, "class", "text-sm"), _(t, "class", "flex flex-col gap-2"), _(T, "class", "text-2xl mt-4"), _(F, "class", "text-sm"), _(B, "class", "text-sm"), _(w, "class", "flex flex-col gap-2"), _(o, "class", "flex flex-col divide-y gap-4"), _(R, "class", "rounded-lg bg-black px-6 py-3 mt-4"), oe(
        R,
        "background-color",
        /*button_color*/
        l[12]
      ), oe(
        R,
        "color",
        /*text_color*/
        l[5]
      );
    },
    m(V, Q) {
      se(V, o, Q), p(o, t), p(t, a), p(t, e), p(t, r), p(r, n), p(r, u), p(t, s), K && K.m(t, null), p(t, d), p(t, f), p(f, c), p(f, y), p(f, D), p(t, g), p(t, k), p(k, A), p(k, j), p(k, C), p(k, v), p(k, m), p(o, M), p(o, w), p(w, T), p(T, O), p(w, N), p(w, F), p(F, W), p(F, H), p(w, J), p(w, B), p(B, G), p(B, ie), p(B, te), p(B, S), se(V, $, Q), se(V, R, Q), p(R, ee), de || (ye = Je(
        R,
        "click",
        /*click_handler*/
        l[30]
      ), de = !0);
    },
    p(V, Q) {
      Q[0] & /*backendData*/
      64 && i !== (i = /*backendData*/
      V[6].data[0].third_party_exchange_rate + "") && _e(u, i), /*show_interbank_rate*/
      V[4] ? K ? K.p(V, Q) : (K = nt(V), K.c(), K.m(t, d)) : K && (K.d(1), K = null), Q[0] & /*backendData*/
      64 && h !== (h = /*backendData*/
      V[6].data[0].ccy_pair + "") && _e(y, h), Q[0] & /*backendData*/
      64 && P !== (P = /*backendData*/
      V[6].data[0].sold_ccy + "") && _e(j, P), Q[0] & /*backendData*/
      64 && L !== (L = /*backendData*/
      V[6].data[0].third_party_profit + "") && _e(v, L), Q[0] & /*name*/
      8 && _e(
        O,
        /*name*/
        V[3]
      ), Q[0] & /*backendData*/
      64 && z !== (z = /*backendData*/
      V[6].data[0].integritas_rate + "") && _e(H, z), Q[0] & /*backendData*/
      64 && U !== (U = /*backendData*/
      V[6].data[0].sold_ccy + "") && _e(ie, U), Q[0] & /*backendData*/
      64 && ae !== (ae = /*backendData*/
      V[6].data[0].integritas_savings + "") && _e(S, ae), Q[0] & /*button_color*/
      4096 && oe(
        R,
        "background-color",
        /*button_color*/
        V[12]
      ), Q[0] & /*text_color*/
      32 && oe(
        R,
        "color",
        /*text_color*/
        V[5]
      );
    },
    d(V) {
      V && ue(o), K && K.d(), V && ue($), V && ue(R), de = !1, ye();
    }
  };
}
function Tt(l) {
  let o, t, a, e, r, n, i, u, s, d, f, c, h, y, D, g, k, A, P, j, C, L, v, m, M, w, T, O, N, F, W, z, H, J, B, G, U, ie, te, ae, S, $, R, ee, de, ye, K, V, Q, be, Ne, Re, q, ve, xe, ke, he, me, x, E, Y, X, le, fe, ge, Ce, Se, De, Oe, Ee, qe, Ue, Fe, Ie, Ve, ce = (
    /*shouldShowEmail*/
    l[14] && ot(l)
  );
  function Qe(ne, pe) {
    return (
      /*isFetching*/
      ne[9] ? Nt : jt
    );
  }
  let Ye = Qe(l), we = Ye(l);
  return {
    c() {
      o = b("form"), t = b("div"), a = b("div"), e = b("div"), r = b("label"), r.textContent = "Select Date", n = Z(), i = b("input"), u = Z(), s = b("div"), d = b("label"), d.textContent = "Select Time", f = Z(), c = b("input"), h = Z(), y = b("div"), D = b("div"), g = b("label"), g.textContent = "Sell Amount", k = Z(), A = b("input"), P = Z(), j = b("div"), C = b("label"), L = I("Sell Currency"), v = Z(), m = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", O = b("option"), O.textContent = "JPY", N = b("option"), N.textContent = "CHF", F = b("option"), F.textContent = "CNY", W = b("option"), W.textContent = "NZD", z = b("option"), z.textContent = "SGD", H = b("option"), H.textContent = "INR", J = b("option"), J.textContent = "AUD", B = b("option"), B.textContent = "CAD", G = b("option"), G.textContent = "HKD", U = b("option"), U.textContent = "MYR", ie = b("option"), ie.textContent = "NOK", te = b("option"), te.textContent = "ZAR", ae = b("option"), ae.textContent = "RUB", S = b("option"), S.textContent = "SEK", $ = Z(), R = b("div"), ee = b("div"), de = b("label"), de.textContent = "Buy Amount", ye = Z(), K = b("input"), V = Z(), Q = b("div"), be = b("label"), Ne = I("Buy Currency"), Re = Z(), q = b("select"), ve = b("option"), ve.textContent = "USD", xe = b("option"), xe.textContent = "GBP", ke = b("option"), ke.textContent = "EUR", he = b("option"), he.textContent = "JPY", me = b("option"), me.textContent = "CHF", x = b("option"), x.textContent = "CNY", E = b("option"), E.textContent = "NZD", Y = b("option"), Y.textContent = "SGD", X = b("option"), X.textContent = "INR", le = b("option"), le.textContent = "AUD", fe = b("option"), fe.textContent = "CAD", ge = b("option"), ge.textContent = "HKD", Ce = b("option"), Ce.textContent = "MYR", Se = b("option"), Se.textContent = "NOK", De = b("option"), De.textContent = "ZAR", Oe = b("option"), Oe.textContent = "RUB", Ee = b("option"), Ee.textContent = "SEK", qe = Z(), ce && ce.c(), Ue = Z(), Fe = b("div"), we.c(), _(r, "for", "date"), _(i, "id", "date"), _(i, "type", "date"), _(i, "class", "w-full rounded-md px-3 py-2 mt-4"), _(i, "name", "date"), _(i, "placeholder", "Select date"), i.required = !0, _(
        i,
        "style",
        /*input_style*/
        l[13]
      ), _(e, "class", "w-full"), _(d, "for", "time"), _(c, "id", "time"), _(c, "type", "time"), _(c, "class", "w-full rounded-md px-3 py-2 mt-4"), _(c, "name", "time"), _(c, "placeholder", "Select Time"), c.required = !0, _(
        c,
        "style",
        /*input_style*/
        l[13]
      ), _(s, "class", "w-full"), _(a, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), _(g, "for", "sold_notional"), _(A, "id", "sold_notional"), _(A, "type", "number"), _(A, "step", ".01"), _(A, "class", "w-full rounded-md px-3 py-2 mt-4"), _(A, "name", "sold_notional"), _(A, "placeholder", "10000"), A.required = !0, _(
        A,
        "style",
        /*input_style*/
        l[13]
      ), _(D, "class", "w-full"), _(C, "for", "sold_ccy"), oe(
        C,
        "color",
        /*text_color*/
        l[5]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, N.__value = "CHF", N.value = N.__value, F.__value = "CNY", F.value = F.__value, W.__value = "NZD", W.value = W.__value, z.__value = "SGD", z.value = z.__value, H.__value = "INR", H.value = H.__value, J.__value = "AUD", J.value = J.__value, B.__value = "CAD", B.value = B.__value, G.__value = "HKD", G.value = G.__value, U.__value = "MYR", U.value = U.__value, ie.__value = "NOK", ie.value = ie.__value, te.__value = "ZAR", te.value = te.__value, ae.__value = "RUB", ae.value = ae.__value, S.__value = "SEK", S.value = S.__value, _(m, "name", "sold_ccy"), _(m, "id", "sold_ccy"), _(m, "class", "w-full rounded-md px-3 py-2 mt-4"), m.required = !0, _(
        m,
        "style",
        /*input_style*/
        l[13]
      ), _(j, "class", "w-full"), _(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(de, "for", "bought_notional"), _(K, "id", "bought_notional"), _(K, "type", "number"), _(K, "step", ".01"), _(K, "class", "w-full rounded-md px-3 py-2 mt-4"), _(K, "name", "bought_notional"), _(K, "placeholder", "10000"), K.required = !0, _(
        K,
        "style",
        /*input_style*/
        l[13]
      ), _(ee, "class", "w-full"), _(be, "for", "bought_ccy"), oe(
        be,
        "color",
        /*text_color*/
        l[5]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, he.__value = "JPY", he.value = he.__value, me.__value = "CHF", me.value = me.__value, x.__value = "CNY", x.value = x.__value, E.__value = "NZD", E.value = E.__value, Y.__value = "SGD", Y.value = Y.__value, X.__value = "INR", X.value = X.__value, le.__value = "AUD", le.value = le.__value, fe.__value = "CAD", fe.value = fe.__value, ge.__value = "HKD", ge.value = ge.__value, Ce.__value = "MYR", Ce.value = Ce.__value, Se.__value = "NOK", Se.value = Se.__value, De.__value = "ZAR", De.value = De.__value, Oe.__value = "RUB", Oe.value = Oe.__value, Ee.__value = "SEK", Ee.value = Ee.__value, _(q, "name", "bought_ccy"), _(q, "id", "bought_ccy"), _(q, "class", "w-full rounded-md px-3 py-2 mt-4"), q.required = !0, _(
        q,
        "style",
        /*input_style*/
        l[13]
      ), _(Q, "class", "w-full"), _(R, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(t, "class", "flex flex-col sm:gap-4");
    },
    m(ne, pe) {
      se(ne, o, pe), p(o, t), p(t, a), p(a, e), p(e, r), p(e, n), p(e, i), p(a, u), p(a, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, y), p(y, D), p(D, g), p(D, k), p(D, A), p(y, P), p(y, j), p(j, C), p(C, L), p(j, v), p(j, m), p(m, M), p(m, w), p(m, T), p(m, O), p(m, N), p(m, F), p(m, W), p(m, z), p(m, H), p(m, J), p(m, B), p(m, G), p(m, U), p(m, ie), p(m, te), p(m, ae), p(m, S), p(t, $), p(t, R), p(R, ee), p(ee, de), p(ee, ye), p(ee, K), p(R, V), p(R, Q), p(Q, be), p(be, Ne), p(Q, Re), p(Q, q), p(q, ve), p(q, xe), p(q, ke), p(q, he), p(q, me), p(q, x), p(q, E), p(q, Y), p(q, X), p(q, le), p(q, fe), p(q, ge), p(q, Ce), p(q, Se), p(q, De), p(q, Oe), p(q, Ee), p(t, qe), ce && ce.m(t, null), p(t, Ue), p(t, Fe), we.m(Fe, null), Ie || (Ve = Je(
        o,
        "submit",
        /*handleFormSubmit*/
        l[16]
      ), Ie = !0);
    },
    p(ne, pe) {
      pe[0] & /*input_style*/
      8192 && _(
        i,
        "style",
        /*input_style*/
        ne[13]
      ), pe[0] & /*input_style*/
      8192 && _(
        c,
        "style",
        /*input_style*/
        ne[13]
      ), pe[0] & /*input_style*/
      8192 && _(
        A,
        "style",
        /*input_style*/
        ne[13]
      ), pe[0] & /*text_color*/
      32 && oe(
        C,
        "color",
        /*text_color*/
        ne[5]
      ), pe[0] & /*input_style*/
      8192 && _(
        m,
        "style",
        /*input_style*/
        ne[13]
      ), pe[0] & /*input_style*/
      8192 && _(
        K,
        "style",
        /*input_style*/
        ne[13]
      ), pe[0] & /*text_color*/
      32 && oe(
        be,
        "color",
        /*text_color*/
        ne[5]
      ), pe[0] & /*input_style*/
      8192 && _(
        q,
        "style",
        /*input_style*/
        ne[13]
      ), /*shouldShowEmail*/
      ne[14] ? ce ? ce.p(ne, pe) : (ce = ot(ne), ce.c(), ce.m(t, Ue)) : ce && (ce.d(1), ce = null), Ye === (Ye = Qe(ne)) && we ? we.p(ne, pe) : (we.d(1), we = Ye(ne), we && (we.c(), we.m(Fe, null)));
    },
    d(ne) {
      ne && ue(o), ce && ce.d(), we.d(), Ie = !1, Ve();
    }
  };
}
function nt(l) {
  let o, t, a = (
    /*backendData*/
    l[6].data[0].ccy_pair + ""
  ), e, r, n = (
    /*backendData*/
    l[6].data[0].mid_market_rate + ""
  ), i, u;
  return {
    c() {
      o = b("p"), t = I("The interbank rate "), e = I(a), r = I(`
                            was `), i = I(n), u = I("."), _(o, "class", "text-sm");
    },
    m(s, d) {
      se(s, o, d), p(o, t), p(o, e), p(o, r), p(o, i), p(o, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      64 && a !== (a = /*backendData*/
      s[6].data[0].ccy_pair + "") && _e(e, a), d[0] & /*backendData*/
      64 && n !== (n = /*backendData*/
      s[6].data[0].mid_market_rate + "") && _e(i, n);
    },
    d(s) {
      s && ue(o);
    }
  };
}
function ot(l) {
  let o, t, a, e, r, n, i;
  return {
    c() {
      o = b("div"), t = b("div"), a = b("label"), a.textContent = "Email", e = Z(), r = b("input"), n = Z(), i = b("div"), _(a, "for", "user"), _(r, "id", "user"), _(r, "type", "email"), _(r, "class", "w-full rounded-md px-3 py-2 mt-4"), _(r, "name", "user"), _(r, "placeholder", "JohnDoe@email.com"), r.required = !0, _(
        r,
        "style",
        /*input_style*/
        l[13]
      ), _(t, "class", "w-full"), _(i, "class", "w-full"), _(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      se(u, o, s), p(o, t), p(t, a), p(t, e), p(t, r), p(o, n), p(o, i);
    },
    p(u, s) {
      s[0] & /*input_style*/
      8192 && _(
        r,
        "style",
        /*input_style*/
        u[13]
      );
    },
    d(u) {
      u && ue(o);
    }
  };
}
function Nt(l) {
  let o, t, a, e, r;
  return {
    c() {
      o = b("button"), t = ze("svg"), a = ze("path"), e = ze("path"), r = I(`
                                Loading...`), _(a, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), _(a, "fill", "#E5E7EB"), _(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), _(e, "fill", "currentColor"), _(t, "aria-hidden", "true"), _(t, "role", "status"), _(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), _(t, "viewBox", "0 0 100 101"), _(t, "fill", "none"), _(t, "xmlns", "http://www.w3.org/2000/svg"), o.disabled = !0, _(o, "type", "button"), _(o, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), oe(
        o,
        "background-color",
        /*button_color*/
        l[12]
      ), oe(
        o,
        "color",
        /*text_color*/
        l[5]
      );
    },
    m(n, i) {
      se(n, o, i), p(o, t), p(t, a), p(t, e), p(o, r);
    },
    p(n, i) {
      i[0] & /*button_color*/
      4096 && oe(
        o,
        "background-color",
        /*button_color*/
        n[12]
      ), i[0] & /*text_color*/
      32 && oe(
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
function jt(l) {
  let o, t;
  return {
    c() {
      o = b("button"), t = I(`See your
                                charges`), _(o, "type", "submit"), _(o, "class", "px-6 py-3 mt-6"), _(
        o,
        "style",
        /*input_style*/
        l[13]
      );
    },
    m(a, e) {
      se(a, o, e), p(o, t);
    },
    p(a, e) {
      e[0] & /*input_style*/
      8192 && _(
        o,
        "style",
        /*input_style*/
        a[13]
      );
    },
    d(a) {
      a && ue(o);
    }
  };
}
function Lt(l) {
  let o, t;
  return {
    c() {
      o = b("p"), t = I(
        /*statusCheckError*/
        l[10]
      ), _(o, "class", "text-sm");
    },
    m(a, e) {
      se(a, o, e), p(o, t);
    },
    p(a, e) {
      e[0] & /*statusCheckError*/
      1024 && _e(
        t,
        /*statusCheckError*/
        a[10]
      );
    },
    d(a) {
      a && ue(o);
    }
  };
}
function Pt(l) {
  let o;
  return {
    c() {
      o = b("div"), o.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, a) {
      se(t, o, a);
    },
    p: Me,
    d(t) {
      t && ue(o);
    }
  };
}
function Rt(l) {
  let o, t, a;
  function e(i, u) {
    return (
      /*statusCheckError*/
      i[10] ? Dt : St
    );
  }
  let r = e(l), n = r(l);
  return {
    c() {
      o = b("link"), t = Z(), n.c(), a = dt(), this.c = Me, _(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), _(o, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, o), se(i, t, u), n.m(i, u), se(i, a, u);
    },
    p(i, u) {
      r === (r = e(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(a.parentNode, a)));
    },
    i: Me,
    o: Me,
    d(i) {
      ue(o), i && ue(t), n.d(i), i && ue(a);
    }
  };
}
const rt = "http://localhost:8000", lt = "CORS_ERROR";
function Ft(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function Yt(l, o, t) {
  let a, e, r, { mode: n = "auto" } = o, { light_mode_background: i = "#d2d0d0" } = o, { dark_mode_background: u = "#1f2937" } = o, { light_mode_text_color: s = "#1f2937" } = o, { dark_mode_text_color: d = "#f9fafb" } = o, { dark_mode_input_background: f = "#374151" } = o, { light_mode_input_background: c = "#f9fafb" } = o, { dark_mode_button_color: h = "#374151" } = o, { light_mode_button_color: y = "#f9fafb" } = o, { border_radius: D = "0.5rem" } = o, { input_border_radius: g = "0.5rem" } = o, { shadow: k = "none" } = o, { opacity: A = 100 } = o, { name: P = "Our Results" } = o, { show_interbank_rate: j = !0 } = o, { show_email_input: C = "true" } = o;
  function L() {
    const S = new XMLHttpRequest();
    S.open("GET", `${rt}/`, !0), S.onerror = function() {
      S.status === 0 ? t(10, O = lt) : t(10, O = "We're sorry, our servers are currently down. Please try again later.");
    }, S.send();
  }
  const v = async (S) => fetch(`${rt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(S)
  });
  pt(() => {
    L();
  });
  let m, M = !0, w, T = !1, O;
  const N = () => {
    t(6, m = void 0), t(7, M = !0), t(8, w = !1), t(9, T = !1);
  }, F = async (S) => {
    t(7, M = !1), t(9, T = !0), t(8, w = void 0);
    try {
      const $ = await v(S);
      if (!$.ok) {
        const ee = await $.json();
        throw console.log("errorRes", ee), new Error(ee || `HTTP error! Status: ${$.status}`);
      }
      const R = await $.json();
      t(9, T = !1), t(8, w = void 0), t(7, M = !1), t(6, m = R);
    } catch ($) {
      t(9, T = !1), t(8, w = $.message), t(7, M = !1), t(6, m = void 0);
    }
  }, W = async (S) => {
    S.preventDefault();
    const $ = new FormData(S.target), R = {};
    for (let ee of $) {
      const [de, ye] = ee;
      R[de] = ye;
    }
    R.prospect = "", R.input_spread = "5", R.prospect_annual_flow = "", R.email_user = !1, a || (R.user = "testUserWithoutMail@gmail.com"), console.log(R), F(R);
  }, z = (S) => {
    t(29, e = S.matches);
  }, H = window.matchMedia("(prefers-color-scheme: dark)");
  H.addEventListener("change", z), ht(() => {
    H.removeEventListener("change", z);
  });
  let J, B, G, U;
  const ie = (S) => N(), te = (S) => N(), ae = (S) => N();
  return l.$$set = (S) => {
    "mode" in S && t(17, n = S.mode), "light_mode_background" in S && t(18, i = S.light_mode_background), "dark_mode_background" in S && t(19, u = S.dark_mode_background), "light_mode_text_color" in S && t(20, s = S.light_mode_text_color), "dark_mode_text_color" in S && t(21, d = S.dark_mode_text_color), "dark_mode_input_background" in S && t(22, f = S.dark_mode_input_background), "light_mode_input_background" in S && t(23, c = S.light_mode_input_background), "dark_mode_button_color" in S && t(24, h = S.dark_mode_button_color), "light_mode_button_color" in S && t(25, y = S.light_mode_button_color), "border_radius" in S && t(0, D = S.border_radius), "input_border_radius" in S && t(26, g = S.input_border_radius), "shadow" in S && t(1, k = S.shadow), "opacity" in S && t(2, A = S.opacity), "name" in S && t(3, P = S.name), "show_interbank_rate" in S && t(4, j = S.show_interbank_rate), "show_email_input" in S && t(27, C = S.show_email_input);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*show_email_input*/
    134217728 && t(14, a = C === "true"), l.$$.dirty[0] & /*mode*/
    131072 && t(29, e = Ft(n)), l.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    537657344 && t(11, J = e ? u : i), l.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    540016640 && t(5, B = e ? d : s), l.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    549453824 && t(28, G = e ? f : c), l.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    587202560 && t(12, U = e ? h : y), l.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    335544352 && t(13, r = `
    background-color: ${G};
    color: ${B};
    border-radius: ${g}px;
    `);
  }, [
    D,
    k,
    A,
    P,
    j,
    B,
    m,
    M,
    w,
    T,
    O,
    J,
    U,
    r,
    a,
    N,
    W,
    n,
    i,
    u,
    s,
    d,
    f,
    c,
    h,
    y,
    g,
    C,
    G,
    e,
    ie,
    te,
    ae
  ];
}
class Ht extends at {
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
        show_interbank_rate: 4,
        show_email_input: 27
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
      "show_interbank_rate",
      "show_email_input"
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
  get show_interbank_rate() {
    return this.$$.ctx[4];
  }
  set show_interbank_rate(o) {
    this.$$set({ show_interbank_rate: o }), re();
  }
  get show_email_input() {
    return this.$$.ctx[27];
  }
  set show_email_input(o) {
    this.$$set({ show_email_input: o }), re();
  }
}
customElements.define("spreadm8-calc", Ht);
export {
  Ht as Spreadm8Calc
};
