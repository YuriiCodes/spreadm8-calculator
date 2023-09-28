function Se() {
}
function Ge(u) {
  return u();
}
function Qe() {
  return /* @__PURE__ */ Object.create(null);
}
function Re(u) {
  u.forEach(Ge);
}
function Be(u) {
  return typeof u == "function";
}
function at(u, a) {
  return u != u ? a == a : u !== a || u && typeof u == "object" || typeof u == "function";
}
function it(u) {
  return Object.keys(u).length === 0;
}
function m(u, a) {
  u.appendChild(a);
}
function se(u, a, n) {
  u.insertBefore(a, n || null);
}
function de(u) {
  u.parentNode && u.parentNode.removeChild(u);
}
function w(u) {
  return document.createElement(u);
}
function ze(u) {
  return document.createElementNS("http://www.w3.org/2000/svg", u);
}
function Z(u) {
  return document.createTextNode(u);
}
function G() {
  return Z(" ");
}
function lt() {
  return Z("");
}
function Je(u, a, n, i) {
  return u.addEventListener(a, n, i), () => u.removeEventListener(a, n, i);
}
function b(u, a, n) {
  n == null ? u.removeAttribute(a) : u.getAttribute(a) !== n && u.setAttribute(a, n);
}
function ut(u) {
  return Array.from(u.childNodes);
}
function xe(u, a) {
  a = "" + a, u.wholeText !== a && (u.data = a);
}
function V(u, a, n, i) {
  n === null ? u.style.removeProperty(a) : u.style.setProperty(a, n, i ? "important" : "");
}
function st(u) {
  const a = {};
  for (const n of u)
    a[n.name] = n.value;
  return a;
}
let Pe;
function Le(u) {
  Pe = u;
}
function nt() {
  if (!Pe)
    throw new Error("Function called outside component initialization");
  return Pe;
}
function dt(u) {
  nt().$$.on_mount.push(u);
}
function ct(u) {
  nt().$$.on_destroy.push(u);
}
const je = [], Xe = [], He = [], $e = [], ft = Promise.resolve();
let Ke = !1;
function pt() {
  Ke || (Ke = !0, ft.then(ue));
}
function Ze(u) {
  He.push(u);
}
const Ie = /* @__PURE__ */ new Set();
let Ne = 0;
function ue() {
  if (Ne !== 0)
    return;
  const u = Pe;
  do {
    try {
      for (; Ne < je.length; ) {
        const a = je[Ne];
        Ne++, Le(a), ht(a.$$);
      }
    } catch (a) {
      throw je.length = 0, Ne = 0, a;
    }
    for (Le(null), je.length = 0, Ne = 0; Xe.length; )
      Xe.pop()();
    for (let a = 0; a < He.length; a += 1) {
      const n = He[a];
      Ie.has(n) || (Ie.add(n), n());
    }
    He.length = 0;
  } while (je.length);
  for (; $e.length; )
    $e.pop()();
  Ke = !1, Ie.clear(), Le(u);
}
function ht(u) {
  if (u.fragment !== null) {
    u.update(), Re(u.before_update);
    const a = u.dirty;
    u.dirty = [-1], u.fragment && u.fragment.p(u.ctx, a), u.after_update.forEach(Ze);
  }
}
const mt = /* @__PURE__ */ new Set();
function _t(u, a) {
  u && u.i && (mt.delete(u), u.i(a));
}
function yt(u, a, n, i) {
  const { fragment: t, after_update: r } = u.$$;
  t && t.m(a, n), i || Ze(() => {
    const o = u.$$.on_mount.map(Ge).filter(Be);
    u.$$.on_destroy ? u.$$.on_destroy.push(...o) : Re(o), u.$$.on_mount = [];
  }), r.forEach(Ze);
}
function bt(u, a) {
  const n = u.$$;
  n.fragment !== null && (Re(n.on_destroy), n.fragment && n.fragment.d(a), n.on_destroy = n.fragment = null, n.ctx = []);
}
function gt(u, a) {
  u.$$.dirty[0] === -1 && (je.push(u), pt(), u.$$.dirty.fill(0)), u.$$.dirty[a / 31 | 0] |= 1 << a % 31;
}
function vt(u, a, n, i, t, r, o, l = [-1]) {
  const s = Pe;
  Le(u);
  const d = u.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Se,
    not_equal: t,
    bound: Qe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(a.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Qe(),
    dirty: l,
    skip_bound: !1,
    root: a.target || s.$$.root
  };
  o && o(d.root);
  let c = !1;
  if (d.ctx = n ? n(u, a.props || {}, (p, f, ...h) => {
    const y = h.length ? h[0] : f;
    return d.ctx && t(d.ctx[p], d.ctx[p] = y) && (!d.skip_bound && d.bound[p] && d.bound[p](y), c && gt(u, p)), f;
  }) : [], d.update(), c = !0, Re(d.before_update), d.fragment = i ? i(d.ctx) : !1, a.target) {
    if (a.hydrate) {
      const p = ut(a.target);
      d.fragment && d.fragment.l(p), p.forEach(de);
    } else
      d.fragment && d.fragment.c();
    a.intro && _t(u.$$.fragment), yt(u, a.target, a.anchor, a.customElement), ue();
  }
  Le(s);
}
let ot;
typeof HTMLElement == "function" && (ot = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: u } = this.$$;
    this.$$.on_disconnect = u.map(Ge).filter(Be);
    for (const a in this.$$.slotted)
      this.appendChild(this.$$.slotted[a]);
  }
  attributeChangedCallback(u, a, n) {
    this[u] = n;
  }
  disconnectedCallback() {
    Re(this.$$.on_disconnect);
  }
  $destroy() {
    bt(this, 1), this.$destroy = Se;
  }
  $on(u, a) {
    if (!Be(a))
      return Se;
    const n = this.$$.callbacks[u] || (this.$$.callbacks[u] = []);
    return n.push(a), () => {
      const i = n.indexOf(a);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(u) {
    this.$$set && !it(u) && (this.$$.skip_bound = !0, this.$$set(u), this.$$.skip_bound = !1);
  }
});
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, et = {}, xt = {
  get exports() {
    return et;
  },
  set exports(u) {
    et = u;
  }
};
(function(u, a) {
  (function(n, i) {
    u.exports = i();
  })(wt, function() {
    return function(n) {
      function i(r) {
        if (t[r])
          return t[r].exports;
        var o = t[r] = { exports: {}, id: r, loaded: !1 };
        return n[r].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports;
      }
      var t = {};
      return i.m = n, i.c = t, i.p = "", i(0);
    }([function(n, i, t) {
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      t(84);
      var o = t(41), l = r(o), s = function() {
        l.default.addPickerToOtherInputs(), l.default.supportsDateInput() || l.default.addPickerToDateInputs();
      };
      s(), document.addEventListener("DOMContentLoaded", function() {
        s();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        s();
      });
    }, function(n, i, t) {
      n.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(n, i) {
      var t = n.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(n, i) {
      var t = {}.hasOwnProperty;
      n.exports = function(r, o) {
        return t.call(r, o);
      };
    }, function(n, i, t) {
      var r = t(9), o = t(32), l = t(25), s = Object.defineProperty;
      i.f = t(1) ? Object.defineProperty : function(d, c, p) {
        if (r(d), c = l(c, !0), r(p), o)
          try {
            return s(d, c, p);
          } catch {
          }
        if ("get" in p || "set" in p)
          throw TypeError("Accessors not supported!");
        return "value" in p && (d[c] = p.value), d;
      };
    }, function(n, i, t) {
      var r = t(59), o = t(16);
      n.exports = function(l) {
        return r(o(l));
      };
    }, function(n, i, t) {
      var r = t(4), o = t(14);
      n.exports = t(1) ? function(l, s, d) {
        return r.f(l, s, o(1, d));
      } : function(l, s, d) {
        return l[s] = d, l;
      };
    }, function(n, i, t) {
      var r = t(23)("wks"), o = t(15), l = t(2).Symbol, s = typeof l == "function", d = n.exports = function(c) {
        return r[c] || (r[c] = s && l[c] || (s ? l : o)("Symbol." + c));
      };
      d.store = r;
    }, function(n, i) {
      var t = n.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(n, i, t) {
      var r = t(12);
      n.exports = function(o) {
        if (!r(o))
          throw TypeError(o + " is not an object!");
        return o;
      };
    }, function(n, i, t) {
      var r = t(2), o = t(8), l = t(56), s = t(6), d = "prototype", c = function(p, f, h) {
        var y, D, v, S = p & c.F, A = p & c.G, F = p & c.S, P = p & c.P, C = p & c.B, j = p & c.W, g = A ? o : o[f] || (o[f] = {}), _ = g[d], M = A ? r : F ? r[f] : (r[f] || {})[d];
        A && (h = f);
        for (y in h)
          D = !S && M && M[y] !== void 0, D && y in g || (v = D ? M[y] : h[y], g[y] = A && typeof M[y] != "function" ? h[y] : C && D ? l(v, r) : j && M[y] == v ? function(k) {
            var N = function(E, L, H) {
              if (this instanceof k) {
                switch (arguments.length) {
                  case 0:
                    return new k();
                  case 1:
                    return new k(E);
                  case 2:
                    return new k(E, L);
                }
                return new k(E, L, H);
              }
              return k.apply(this, arguments);
            };
            return N[d] = k[d], N;
          }(v) : P && typeof v == "function" ? l(Function.call, v) : v, P && ((g.virtual || (g.virtual = {}))[y] = v, p & c.R && _ && !_[y] && s(_, y, v)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, n.exports = c;
    }, function(n, i) {
      n.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(n, i) {
      n.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(n, i, t) {
      var r = t(38), o = t(17);
      n.exports = Object.keys || function(l) {
        return r(l, o);
      };
    }, function(n, i) {
      n.exports = function(t, r) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
      };
    }, function(n, i) {
      var t = 0, r = Math.random();
      n.exports = function(o) {
        return "Symbol(".concat(o === void 0 ? "" : o, ")_", (++t + r).toString(36));
      };
    }, function(n, i) {
      n.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(n, i) {
      n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(n, i) {
      n.exports = {};
    }, function(n, i) {
      n.exports = !0;
    }, function(n, i) {
      i.f = {}.propertyIsEnumerable;
    }, function(n, i, t) {
      var r = t(4).f, o = t(3), l = t(7)("toStringTag");
      n.exports = function(s, d, c) {
        s && !o(s = c ? s : s.prototype, l) && r(s, l, { configurable: !0, value: d });
      };
    }, function(n, i, t) {
      var r = t(23)("keys"), o = t(15);
      n.exports = function(l) {
        return r[l] || (r[l] = o(l));
      };
    }, function(n, i, t) {
      var r = t(2), o = "__core-js_shared__", l = r[o] || (r[o] = {});
      n.exports = function(s) {
        return l[s] || (l[s] = {});
      };
    }, function(n, i) {
      var t = Math.ceil, r = Math.floor;
      n.exports = function(o) {
        return isNaN(o = +o) ? 0 : (o > 0 ? r : t)(o);
      };
    }, function(n, i, t) {
      var r = t(12);
      n.exports = function(o, l) {
        if (!r(o))
          return o;
        var s, d;
        if (l && typeof (s = o.toString) == "function" && !r(d = s.call(o)) || typeof (s = o.valueOf) == "function" && !r(d = s.call(o)) || !l && typeof (s = o.toString) == "function" && !r(d = s.call(o)))
          return d;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(n, i, t) {
      var r = t(2), o = t(8), l = t(19), s = t(27), d = t(4).f;
      n.exports = function(c) {
        var p = o.Symbol || (o.Symbol = l ? {} : r.Symbol || {});
        c.charAt(0) == "_" || c in p || d(p, c, { value: s.f(c) });
      };
    }, function(n, i, t) {
      i.f = t(7);
    }, function(n, i) {
      i.__esModule = !0, i.default = function(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(n, i, t) {
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      i.__esModule = !0;
      var o = t(45), l = r(o);
      i.default = function() {
        function s(d, c) {
          for (var p = 0; p < c.length; p++) {
            var f = c[p];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), (0, l.default)(d, f.key, f);
          }
        }
        return function(d, c, p) {
          return c && s(d.prototype, c), p && s(d, p), d;
        };
      }();
    }, function(n, i) {
      var t = {}.toString;
      n.exports = function(r) {
        return t.call(r).slice(8, -1);
      };
    }, function(n, i, t) {
      var r = t(12), o = t(2).document, l = r(o) && r(o.createElement);
      n.exports = function(s) {
        return l ? o.createElement(s) : {};
      };
    }, function(n, i, t) {
      n.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(n, i, t) {
      var r = t(19), o = t(10), l = t(39), s = t(6), d = t(3), c = t(18), p = t(61), f = t(21), h = t(67), y = t(7)("iterator"), D = !([].keys && "next" in [].keys()), v = "@@iterator", S = "keys", A = "values", F = function() {
        return this;
      };
      n.exports = function(P, C, j, g, _, M, k) {
        p(j, C, g);
        var N, E, L, H = function($) {
          if (!D && $ in B)
            return B[$];
          switch ($) {
            case S:
              return function() {
                return new j(this, $);
              };
            case A:
              return function() {
                return new j(this, $);
              };
          }
          return function() {
            return new j(this, $);
          };
        }, K = C + " Iterator", I = _ == A, U = !1, B = P.prototype, O = B[y] || B[v] || _ && B[_], z = O || H(_), Y = _ ? I ? H("entries") : z : void 0, ne = C == "Array" && B.entries || O;
        if (ne && (L = h(ne.call(new P())), L !== Object.prototype && (f(L, K, !0), r || d(L, y) || s(L, y, F))), I && O && O.name !== A && (U = !0, z = function() {
          return O.call(this);
        }), r && !k || !D && !U && B[y] || s(B, y, z), c[C] = z, c[K] = F, _)
          if (N = { values: I ? z : H(A), keys: M ? z : H(S), entries: Y }, k)
            for (E in N)
              E in B || l(B, E, N[E]);
          else
            o(o.P + o.F * (D || U), C, N);
        return N;
      };
    }, function(n, i, t) {
      var r = t(9), o = t(35), l = t(17), s = t(22)("IE_PROTO"), d = function() {
      }, c = "prototype", p = function() {
        var f, h = t(31)("iframe"), y = l.length, D = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", f = h.contentWindow.document, f.open(), f.write(D + "script" + v + "document.F=Object" + D + "/script" + v), f.close(), p = f.F; y--; )
          delete p[c][l[y]];
        return p();
      };
      n.exports = Object.create || function(f, h) {
        var y;
        return f !== null ? (d[c] = r(f), y = new d(), d[c] = null, y[s] = f) : y = p(), h === void 0 ? y : o(y, h);
      };
    }, function(n, i, t) {
      var r = t(4), o = t(9), l = t(13);
      n.exports = t(1) ? Object.defineProperties : function(s, d) {
        o(s);
        for (var c, p = l(d), f = p.length, h = 0; f > h; )
          r.f(s, c = p[h++], d[c]);
        return s;
      };
    }, function(n, i, t) {
      var r = t(38), o = t(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(l) {
        return r(l, o);
      };
    }, function(n, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(n, i, t) {
      var r = t(3), o = t(5), l = t(55)(!1), s = t(22)("IE_PROTO");
      n.exports = function(d, c) {
        var p, f = o(d), h = 0, y = [];
        for (p in f)
          p != s && r(f, p) && y.push(p);
        for (; c.length > h; )
          r(f, p = c[h++]) && (~l(y, p) || y.push(p));
        return y;
      };
    }, function(n, i, t) {
      n.exports = t(6);
    }, function(n, i, t) {
      function r(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function o(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function l(h) {
        var y = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        y.setDate(y.getDate() - (y.getDay() + 6) % 7 + 3);
        var D = new Date(y.getFullYear(), 0, 4);
        D.setDate(D.getDate() - (D.getDay() + 6) % 7 + 3);
        var v = y.getTimezoneOffset() - D.getTimezoneOffset();
        y.setHours(y.getHours() - v);
        var S = (y - D) / 6048e5;
        return 1 + Math.floor(S);
      }
      function s(h) {
        var y = h.getDay();
        return y === 0 && (y = 7), y;
      }
      function d(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, p.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, p.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var c = t(48), p = r(c), f = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(v, S, A, F) {
          if (arguments.length !== 1 || d(v) !== "string" || /\d/.test(v) || (S = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          S = String(f.masks[S] || S || f.masks.default);
          var P = S.slice(0, 4);
          P !== "UTC:" && P !== "GMT:" || (S = S.slice(4), A = !0, P === "GMT:" && (F = !0));
          var C = A ? "getUTC" : "get", j = v[C + "Date"](), g = v[C + "Day"](), _ = v[C + "Month"](), M = v[C + "FullYear"](), k = v[C + "Hours"](), N = v[C + "Minutes"](), E = v[C + "Seconds"](), L = v[C + "Milliseconds"](), H = A ? 0 : v.getTimezoneOffset(), K = l(v), I = s(v), U = { d: j, dd: o(j), ddd: f.i18n.dayNames[g], dddd: f.i18n.dayNames[g + 7], m: _ + 1, mm: o(_ + 1), mmm: f.i18n.monthNames[_], mmmm: f.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: k % 12 || 12, hh: o(k % 12 || 12), H: k, HH: o(k), M: N, MM: o(N), s: E, ss: o(E), l: o(L, 3), L: o(Math.round(L / 10)), t: k < 12 ? "a" : "p", tt: k < 12 ? "am" : "pm", T: k < 12 ? "A" : "P", TT: k < 12 ? "AM" : "PM", Z: F ? "GMT" : A ? "UTC" : (String(v).match(y) || [""]).pop().replace(D, ""), o: (H > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: K, N: I };
          return S.replace(h, function(B) {
            return B in U ? U[B] : B.slice(1, B.length - 1);
          });
        };
      }();
      f.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, f.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = f;
    }, function(n, i, t) {
      function r(F) {
        return F && F.__esModule ? F : { default: F };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var o = t(44), l = r(o), s = t(28), d = r(s), c = t(29), p = r(c), f = t(43), h = r(f), y = t(42), D = r(y), v = t(40), S = r(v), A = function() {
        function F(P) {
          var C = this;
          (0, d.default)(this, F), this.element = P, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, l.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var g = C.format || "yyyy-mm-dd", _ = C.element.value.match(/(\d+)/g), M = 0, k = {};
            return g.replace(/(yyyy|dd|mm)/g, function(N) {
              k[N] = M++;
            }), new Date(_[k.yyyy], _[k.mm] - 1, _[k.dd]);
          }, set: function(g) {
            C.element.value = (0, S.default)(g, C.format);
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
        return (0, p.default)(F, [{ key: "getLocaleText", value: function() {
          var P = this.locale.toLowerCase();
          for (var C in D.default) {
            var j = C.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(P) || ~j.indexOf(P.substr(0, 2)))
              return D.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var P = document.createElement("input");
          P.setAttribute("type", "date");
          var C = "not-a-date";
          return P.setAttribute("value", C), P.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var P = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = P.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(P[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var P = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = P.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(P[j]);
        } }]), F;
      }();
      i.default = A;
    }, function(n, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = t;
    }, function(n, i, t) {
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var o = t(28), l = r(o), s = t(29), d = r(s), c = function() {
        function p() {
          var f = this;
          if ((0, l.default)(this, p), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), p.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
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
          var D = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var S = v.target;
            if (!S.hasAttribute("data-day"))
              return !1;
            var A = f.days.querySelector("[data-selected]");
            A && A.removeAttribute("data-selected"), S.setAttribute("data-selected", ""), f.date.setDate(parseInt(S.textContent)), f.setInput();
          }), D.appendChild(this.daysHead), D.appendChild(this.days), this.container.appendChild(D), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (f.isOpen) {
              for (var S = v.target, A = S === f.container || S === f.input; !A && (S = S.parentNode); )
                A = S === f.container;
              (v.target.getAttribute("type") !== "date" && !A || !A) && f.hide();
            }
          }, this.removeBlur = function(v) {
            f.isOpen && f.hide();
          };
        }
        return (0, d.default)(p, [{ key: "hide", value: function() {
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
          var D = this.container.getBoundingClientRect(), v = D.width ? D.width : 280, S = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, A = y.right - v;
          y.right < v ? (A = y.left, this.container.className = S() + " polyfill-left-aligned") : this.container.className = S() + " polyfill-right-aligned", this.container.style.left = A + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(f) {
          return !(f === this.input && this.isOpen || (this.input = f, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = p.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
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
          this.daysHead.innerHTML = f.join(""), p.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var f = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(f, h, 1).getDay(), D = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = p.absoluteDate(this.input.valueAsDate) || !1, S = v && f === v.getFullYear() && h === v.getMonth(), A = [], F = 0; F < D + y; ++F)
            if (F % 7 === 0 && A.push(`
          ` + (F !== 0 ? "</tr>" : "") + `
          <tr>
        `), F + 1 <= y)
              A.push("<td></td>");
            else {
              var P = F + 1 - y, C = S && v.getDate() === P;
              A.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + P + `
        </td>`);
            }
          this.days.innerHTML = A.join("");
        } }, { key: "pingInput", value: function() {
          var f = void 0, h = void 0;
          try {
            f = new Event("input"), h = new Event("change");
          } catch {
            f = document.createEvent("KeyboardEvent"), f.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(f), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(f, h, y, D) {
          f.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var S = document.createElement("option");
            f.appendChild(S);
            var A = D ? D[v - h] : v;
            S.text = A, S.value = v;
          }
          return f;
        } }, { key: "absoluteDate", value: function(f) {
          return f && new Date(f.getTime() + 60 * f.getTimezoneOffset() * 1e3);
        } }]), p;
      }();
      window.thePicker = new c(), i.default = window.thePicker;
    }, function(n, i, t) {
      n.exports = { default: t(49), __esModule: !0 };
    }, function(n, i, t) {
      n.exports = { default: t(50), __esModule: !0 };
    }, function(n, i, t) {
      n.exports = { default: t(51), __esModule: !0 };
    }, function(n, i, t) {
      n.exports = { default: t(52), __esModule: !0 };
    }, function(n, i, t) {
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      i.__esModule = !0;
      var o = t(47), l = r(o), s = t(46), d = r(s), c = typeof d.default == "function" && typeof l.default == "symbol" ? function(p) {
        return typeof p;
      } : function(p) {
        return p && typeof d.default == "function" && p.constructor === d.default ? "symbol" : typeof p;
      };
      i.default = typeof d.default == "function" && c(l.default) === "symbol" ? function(p) {
        return typeof p > "u" ? "undefined" : c(p);
      } : function(p) {
        return p && typeof d.default == "function" && p.constructor === d.default ? "symbol" : typeof p > "u" ? "undefined" : c(p);
      };
    }, function(n, i, t) {
      t(73);
      var r = t(8).Object;
      n.exports = function(o, l) {
        return r.defineProperties(o, l);
      };
    }, function(n, i, t) {
      t(74);
      var r = t(8).Object;
      n.exports = function(o, l, s) {
        return r.defineProperty(o, l, s);
      };
    }, function(n, i, t) {
      t(77), t(75), t(78), t(79), n.exports = t(8).Symbol;
    }, function(n, i, t) {
      t(76), t(80), n.exports = t(27).f("iterator");
    }, function(n, i) {
      n.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(n, i) {
      n.exports = function() {
      };
    }, function(n, i, t) {
      var r = t(5), o = t(70), l = t(69);
      n.exports = function(s) {
        return function(d, c, p) {
          var f, h = r(d), y = o(h.length), D = l(p, y);
          if (s && c != c) {
            for (; y > D; )
              if (f = h[D++], f != f)
                return !0;
          } else
            for (; y > D; D++)
              if ((s || D in h) && h[D] === c)
                return s || D || 0;
          return !s && -1;
        };
      };
    }, function(n, i, t) {
      var r = t(53);
      n.exports = function(o, l, s) {
        if (r(o), l === void 0)
          return o;
        switch (s) {
          case 1:
            return function(d) {
              return o.call(l, d);
            };
          case 2:
            return function(d, c) {
              return o.call(l, d, c);
            };
          case 3:
            return function(d, c, p) {
              return o.call(l, d, c, p);
            };
        }
        return function() {
          return o.apply(l, arguments);
        };
      };
    }, function(n, i, t) {
      var r = t(13), o = t(37), l = t(20);
      n.exports = function(s) {
        var d = r(s), c = o.f;
        if (c)
          for (var p, f = c(s), h = l.f, y = 0; f.length > y; )
            h.call(s, p = f[y++]) && d.push(p);
        return d;
      };
    }, function(n, i, t) {
      n.exports = t(2).document && document.documentElement;
    }, function(n, i, t) {
      var r = t(30);
      n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(o) {
        return r(o) == "String" ? o.split("") : Object(o);
      };
    }, function(n, i, t) {
      var r = t(30);
      n.exports = Array.isArray || function(o) {
        return r(o) == "Array";
      };
    }, function(n, i, t) {
      var r = t(34), o = t(14), l = t(21), s = {};
      t(6)(s, t(7)("iterator"), function() {
        return this;
      }), n.exports = function(d, c, p) {
        d.prototype = r(s, { next: o(1, p) }), l(d, c + " Iterator");
      };
    }, function(n, i) {
      n.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    }, function(n, i, t) {
      var r = t(13), o = t(5);
      n.exports = function(l, s) {
        for (var d, c = o(l), p = r(c), f = p.length, h = 0; f > h; )
          if (c[d = p[h++]] === s)
            return d;
      };
    }, function(n, i, t) {
      var r = t(15)("meta"), o = t(12), l = t(3), s = t(4).f, d = 0, c = Object.isExtensible || function() {
        return !0;
      }, p = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), f = function(S) {
        s(S, r, { value: { i: "O" + ++d, w: {} } });
      }, h = function(S, A) {
        if (!o(S))
          return typeof S == "symbol" ? S : (typeof S == "string" ? "S" : "P") + S;
        if (!l(S, r)) {
          if (!c(S))
            return "F";
          if (!A)
            return "E";
          f(S);
        }
        return S[r].i;
      }, y = function(S, A) {
        if (!l(S, r)) {
          if (!c(S))
            return !0;
          if (!A)
            return !1;
          f(S);
        }
        return S[r].w;
      }, D = function(S) {
        return p && v.NEED && c(S) && !l(S, r) && f(S), S;
      }, v = n.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: D };
    }, function(n, i, t) {
      var r = t(20), o = t(14), l = t(5), s = t(25), d = t(3), c = t(32), p = Object.getOwnPropertyDescriptor;
      i.f = t(1) ? p : function(f, h) {
        if (f = l(f), h = s(h, !0), c)
          try {
            return p(f, h);
          } catch {
          }
        if (d(f, h))
          return o(!r.f.call(f, h), f[h]);
      };
    }, function(n, i, t) {
      var r = t(5), o = t(36).f, l = {}.toString, s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(c) {
        try {
          return o(c);
        } catch {
          return s.slice();
        }
      };
      n.exports.f = function(c) {
        return s && l.call(c) == "[object Window]" ? d(c) : o(r(c));
      };
    }, function(n, i, t) {
      var r = t(3), o = t(71), l = t(22)("IE_PROTO"), s = Object.prototype;
      n.exports = Object.getPrototypeOf || function(d) {
        return d = o(d), r(d, l) ? d[l] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? s : null;
      };
    }, function(n, i, t) {
      var r = t(24), o = t(16);
      n.exports = function(l) {
        return function(s, d) {
          var c, p, f = String(o(s)), h = r(d), y = f.length;
          return h < 0 || h >= y ? l ? "" : void 0 : (c = f.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (p = f.charCodeAt(h + 1)) < 56320 || p > 57343 ? l ? f.charAt(h) : c : l ? f.slice(h, h + 2) : (c - 55296 << 10) + (p - 56320) + 65536);
        };
      };
    }, function(n, i, t) {
      var r = t(24), o = Math.max, l = Math.min;
      n.exports = function(s, d) {
        return s = r(s), s < 0 ? o(s + d, 0) : l(s, d);
      };
    }, function(n, i, t) {
      var r = t(24), o = Math.min;
      n.exports = function(l) {
        return l > 0 ? o(r(l), 9007199254740991) : 0;
      };
    }, function(n, i, t) {
      var r = t(16);
      n.exports = function(o) {
        return Object(r(o));
      };
    }, function(n, i, t) {
      var r = t(54), o = t(62), l = t(18), s = t(5);
      n.exports = t(33)(Array, "Array", function(d, c) {
        this._t = s(d), this._i = 0, this._k = c;
      }, function() {
        var d = this._t, c = this._k, p = this._i++;
        return !d || p >= d.length ? (this._t = void 0, o(1)) : c == "keys" ? o(0, p) : c == "values" ? o(0, d[p]) : o(0, [p, d[p]]);
      }, "values"), l.Arguments = l.Array, r("keys"), r("values"), r("entries");
    }, function(n, i, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(n, i, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(n, i) {
    }, function(n, i, t) {
      var r = t(68)(!0);
      t(33)(String, "String", function(o) {
        this._t = String(o), this._i = 0;
      }, function() {
        var o, l = this._t, s = this._i;
        return s >= l.length ? { value: void 0, done: !0 } : (o = r(l, s), this._i += o.length, { value: o, done: !1 });
      });
    }, function(n, i, t) {
      var r = t(2), o = t(3), l = t(1), s = t(10), d = t(39), c = t(64).KEY, p = t(11), f = t(23), h = t(21), y = t(15), D = t(7), v = t(27), S = t(26), A = t(63), F = t(57), P = t(60), C = t(9), j = t(5), g = t(25), _ = t(14), M = t(34), k = t(66), N = t(65), E = t(4), L = t(13), H = N.f, K = E.f, I = k.f, U = r.Symbol, B = r.JSON, O = B && B.stringify, z = "prototype", Y = D("_hidden"), ne = D("toPrimitive"), $ = {}.propertyIsEnumerable, X = f("symbol-registry"), ee = f("symbols"), ce = f("op-symbols"), Q = Object[z], ae = typeof U == "function", fe = r.QObject, ge = !fe || !fe[z] || !fe[z].findChild, te = l && p(function() {
        return M(K({}, "a", { get: function() {
          return K(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, T, J) {
        var q = H(Q, T);
        q && delete Q[T], K(x, T, J), q && x !== Q && K(Q, T, q);
      } : K, ie = function(x) {
        var T = ee[x] = M(U[z]);
        return T._k = x, T;
      }, pe = ae && typeof U.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof U;
      }, le = function(x, T, J) {
        return x === Q && le(ce, T, J), C(x), T = g(T, !0), C(J), o(ee, T) ? (J.enumerable ? (o(x, Y) && x[Y][T] && (x[Y][T] = !1), J = M(J, { enumerable: _(0, !1) })) : (o(x, Y) || K(x, Y, _(1, {})), x[Y][T] = !0), te(x, T, J)) : K(x, T, J);
      }, Ce = function(x, T) {
        C(x);
        for (var J, q = F(T = j(T)), oe = 0, he = q.length; he > oe; )
          le(x, J = q[oe++], T[J]);
        return x;
      }, W = function(x, T) {
        return T === void 0 ? M(x) : Ce(M(x), T);
      }, R = function(x) {
        var T = $.call(this, x = g(x, !0));
        return !(this === Q && o(ee, x) && !o(ce, x)) && (!(T || !o(this, x) || !o(ee, x) || o(this, Y) && this[Y][x]) || T);
      }, ve = function(x, T) {
        if (x = j(x), T = g(T, !0), x !== Q || !o(ee, T) || o(ce, T)) {
          var J = H(x, T);
          return !J || !o(ee, T) || o(x, Y) && x[Y][T] || (J.enumerable = !0), J;
        }
      }, ke = function(x) {
        for (var T, J = I(j(x)), q = [], oe = 0; J.length > oe; )
          o(ee, T = J[oe++]) || T == Y || T == c || q.push(T);
        return q;
      }, Me = function(x) {
        for (var T, J = x === Q, q = I(J ? ce : j(x)), oe = [], he = 0; q.length > he; )
          !o(ee, T = q[he++]) || J && !o(Q, T) || oe.push(ee[T]);
        return oe;
      };
      ae || (U = function() {
        if (this instanceof U)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), T = function(J) {
          this === Q && T.call(ce, J), o(this, Y) && o(this[Y], x) && (this[Y][x] = !1), te(this, x, _(1, J));
        };
        return l && ge && te(Q, x, { configurable: !0, set: T }), ie(x);
      }, d(U[z], "toString", function() {
        return this._k;
      }), N.f = ve, E.f = le, t(36).f = k.f = ke, t(20).f = R, t(37).f = Me, l && !t(19) && d(Q, "propertyIsEnumerable", R, !0), v.f = function(x) {
        return ie(D(x));
      }), s(s.G + s.W + s.F * !ae, { Symbol: U });
      for (var me = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), _e = 0; me.length > _e; )
        D(me[_e++]);
      for (var me = L(D.store), _e = 0; me.length > _e; )
        S(me[_e++]);
      s(s.S + s.F * !ae, "Symbol", { for: function(x) {
        return o(X, x += "") ? X[x] : X[x] = U(x);
      }, keyFor: function(x) {
        if (pe(x))
          return A(X, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        ge = !0;
      }, useSimple: function() {
        ge = !1;
      } }), s(s.S + s.F * !ae, "Object", { create: W, defineProperty: le, defineProperties: Ce, getOwnPropertyDescriptor: ve, getOwnPropertyNames: ke, getOwnPropertySymbols: Me }), B && s(s.S + s.F * (!ae || p(function() {
        var x = U();
        return O([x]) != "[null]" || O({ a: x }) != "{}" || O(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !pe(x)) {
          for (var T, J, q = [x], oe = 1; arguments.length > oe; )
            q.push(arguments[oe++]);
          return T = q[1], typeof T == "function" && (J = T), !J && P(T) || (T = function(he, be) {
            if (J && (be = J.call(this, he, be)), !pe(be))
              return be;
          }), q[1] = T, O.apply(B, q);
        }
      } }), U[z][ne] || t(6)(U[z], ne, U[z].valueOf), h(U, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(n, i, t) {
      t(26)("asyncIterator");
    }, function(n, i, t) {
      t(26)("observable");
    }, function(n, i, t) {
      t(72);
      for (var r = t(2), o = t(6), l = t(18), s = t(7)("toStringTag"), d = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var p = d[c], f = r[p], h = f && f.prototype;
        h && !h[s] && o(h, s, p), l[p] = l.Array;
      }
    }, function(n, i, t) {
      i = n.exports = t(82)(), i.push([n.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(n, i) {
      n.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var r = [], o = 0; o < this.length; o++) {
            var l = this[o];
            l[2] ? r.push("@media " + l[2] + "{" + l[1] + "}") : r.push(l[1]);
          }
          return r.join("");
        }, t.i = function(r, o) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, s = 0; s < this.length; s++) {
            var d = this[s][0];
            typeof d == "number" && (l[d] = !0);
          }
          for (s = 0; s < r.length; s++) {
            var c = r[s];
            typeof c[0] == "number" && l[c[0]] || (o && !c[2] ? c[2] = o : o && (c[2] = "(" + c[2] + ") and (" + o + ")"), t.push(c));
          }
        }, t;
      };
    }, function(n, i, t) {
      function r(g, _) {
        for (var M = 0; M < g.length; M++) {
          var k = g[M], N = D[k.id];
          if (N) {
            N.refs++;
            for (var E = 0; E < N.parts.length; E++)
              N.parts[E](k.parts[E]);
            for (; E < k.parts.length; E++)
              N.parts.push(p(k.parts[E], _));
          } else {
            for (var L = [], E = 0; E < k.parts.length; E++)
              L.push(p(k.parts[E], _));
            D[k.id] = { id: k.id, refs: 1, parts: L };
          }
        }
      }
      function o(g) {
        for (var _ = [], M = {}, k = 0; k < g.length; k++) {
          var N = g[k], E = N[0], L = N[1], H = N[2], K = N[3], I = { css: L, media: H, sourceMap: K };
          M[E] ? M[E].parts.push(I) : _.push(M[E] = { id: E, parts: [I] });
        }
        return _;
      }
      function l(g, _) {
        var M = A(), k = C[C.length - 1];
        if (g.insertAt === "top")
          k ? k.nextSibling ? M.insertBefore(_, k.nextSibling) : M.appendChild(_) : M.insertBefore(_, M.firstChild), C.push(_);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(_);
        }
      }
      function s(g) {
        g.parentNode.removeChild(g);
        var _ = C.indexOf(g);
        _ >= 0 && C.splice(_, 1);
      }
      function d(g) {
        var _ = document.createElement("style");
        return _.type = "text/css", l(g, _), _;
      }
      function c(g) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", l(g, _), _;
      }
      function p(g, _) {
        var M, k, N;
        if (_.singleton) {
          var E = P++;
          M = F || (F = d(_)), k = f.bind(null, M, E, !1), N = f.bind(null, M, E, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = c(_), k = y.bind(null, M), N = function() {
            s(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = d(_), k = h.bind(null, M), N = function() {
            s(M);
          });
        return k(g), function(L) {
          if (L) {
            if (L.css === g.css && L.media === g.media && L.sourceMap === g.sourceMap)
              return;
            k(g = L);
          } else
            N();
        };
      }
      function f(g, _, M, k) {
        var N = M ? "" : k.css;
        if (g.styleSheet)
          g.styleSheet.cssText = j(_, N);
        else {
          var E = document.createTextNode(N), L = g.childNodes;
          L[_] && g.removeChild(L[_]), L.length ? g.insertBefore(E, L[_]) : g.appendChild(E);
        }
      }
      function h(g, _) {
        var M = _.css, k = _.media;
        if (k && g.setAttribute("media", k), g.styleSheet)
          g.styleSheet.cssText = M;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(M));
        }
      }
      function y(g, _) {
        var M = _.css, k = _.sourceMap;
        k && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(k)))) + " */");
        var N = new Blob([M], { type: "text/css" }), E = g.href;
        g.href = URL.createObjectURL(N), E && URL.revokeObjectURL(E);
      }
      var D = {}, v = function(g) {
        var _;
        return function() {
          return typeof _ > "u" && (_ = g.apply(this, arguments)), _;
        };
      }, S = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), A = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), F = null, P = 0, C = [];
      n.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = S()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = o(g);
        return r(M, _), function(k) {
          for (var N = [], E = 0; E < M.length; E++) {
            var L = M[E], H = D[L.id];
            H.refs--, N.push(H);
          }
          if (k) {
            var K = o(k);
            r(K, _);
          }
          for (var E = 0; E < N.length; E++) {
            var H = N[E];
            if (H.refs === 0) {
              for (var I = 0; I < H.parts.length; I++)
                H.parts[I]();
              delete D[H.id];
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
    }, function(n, i, t) {
      var r = t(81);
      typeof r == "string" && (r = [[n.id, r, ""]]), t(83)(r, {}), r.locals && (n.exports = r.locals);
    }]);
  });
})(xt);
function kt(u) {
  let a, n, i;
  function t(l, s) {
    return (
      /*isIdle*/
      l[4] || /*isFetching*/
      l[6] ? Ot : (
        /*backendData*/
        l[3] ? Dt : (
          /*error*/
          l[5] ? St : Ct
        )
      )
    );
  }
  let r = t(u), o = r(u);
  return {
    c() {
      a = w("div"), o.c(), b(a, "class", n = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), b(a, "style", i = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
`);
    },
    m(l, s) {
      se(l, a, s), o.m(a, null);
    },
    p(l, s) {
      r === (r = t(l)) && o ? o.p(l, s) : (o.d(1), o = r(l), o && (o.c(), o.m(a, null))), s[0] & /*shadow*/
      2 && n !== (n = `w-full p-4 shadow-${/*shadow*/
      l[1]}`) && b(a, "class", n), s[0] & /*background, border_radius, text_color*/
      261 && i !== (i = `
        background-color: ${/*background*/
      l[8]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[2]};
`) && b(a, "style", i);
    },
    d(l) {
      l && de(a), o.d();
    }
  };
}
function Mt(u) {
  let a, n, i, t, r, o;
  function l(c, p) {
    return (
      /*statusCheckError*/
      c[7] === rt ? Nt : Tt
    );
  }
  let s = l(u), d = s(u);
  return {
    c() {
      a = w("div"), n = w("div"), i = w("h1"), i.textContent = "An error occured", t = G(), d.c(), b(i, "class", "text-2xl"), b(n, "class", "flex flex-col items-center gap-4"), b(a, "class", r = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), b(a, "style", o = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
`);
    },
    m(c, p) {
      se(c, a, p), m(a, n), m(n, i), m(n, t), d.m(n, null);
    },
    p(c, p) {
      s === (s = l(c)) && d ? d.p(c, p) : (d.d(1), d = s(c), d && (d.c(), d.m(n, null))), p[0] & /*shadow*/
      2 && r !== (r = `w-full p-4 shadow-${/*shadow*/
      c[1]}`) && b(a, "class", r), p[0] & /*background, border_radius, text_color*/
      261 && o !== (o = `
        background-color: ${/*background*/
      c[8]};
        border-radius: ${/*border_radius*/
      c[0]};
        color: ${/*text_color*/
      c[2]};
`) && b(a, "style", o);
    },
    d(c) {
      c && de(a), d.d();
    }
  };
}
function Ct(u) {
  let a, n, i, t, r, o, l, s, d;
  return {
    c() {
      a = w("div"), n = w("h1"), n.textContent = "An unknown error", i = G(), t = w("pre"), t.textContent = `${JSON.strigify(e)}`, r = G(), o = w("button"), l = Z("Reset Form"), b(n, "class", "text-2xl"), b(o, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
        o,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        o,
        "color",
        /*text_color*/
        u[2]
      ), b(a, "class", "flex flex-col items-center");
    },
    m(c, p) {
      se(c, a, p), m(a, n), m(a, i), m(a, t), m(a, r), m(a, o), m(o, l), s || (d = Je(
        o,
        "click",
        /*click_handler_2*/
        u[26]
      ), s = !0);
    },
    p(c, p) {
      p[0] & /*button_color*/
      512 && V(
        o,
        "background-color",
        /*button_color*/
        c[9]
      ), p[0] & /*text_color*/
      4 && V(
        o,
        "color",
        /*text_color*/
        c[2]
      );
    },
    d(c) {
      c && de(a), s = !1, d();
    }
  };
}
function St(u) {
  let a, n, i, t, r, o, l;
  return {
    c() {
      a = w("div"), n = w("h1"), n.textContent = "Error", i = G(), t = w("button"), r = Z("Reset Form"), b(n, "class", "text-2xl"), b(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
        t,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        t,
        "color",
        /*text_color*/
        u[2]
      ), b(a, "class", "flex flex-col items-center");
    },
    m(s, d) {
      se(s, a, d), m(a, n), m(a, i), m(a, t), m(t, r), o || (l = Je(
        t,
        "click",
        /*click_handler_1*/
        u[25]
      ), o = !0);
    },
    p(s, d) {
      d[0] & /*button_color*/
      512 && V(
        t,
        "background-color",
        /*button_color*/
        s[9]
      ), d[0] & /*text_color*/
      4 && V(
        t,
        "color",
        /*text_color*/
        s[2]
      );
    },
    d(s) {
      s && de(a), o = !1, l();
    }
  };
}
function Dt(u) {
  let a, n, i, t, r, o, l = (
    /*backendData*/
    u[3].data[0].third_party_exchange_rate + ""
  ), s, d, c, p, f = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), h, y, D = (
    /*backendData*/
    u[3].data[0].mid_market_rate + ""
  ), v, S, A, F, P, C = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), j, g, _, M = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), k, N, E = (
    /*backendData*/
    u[3].data[0].third_party_profit + ""
  ), L, H, K, I, U, B, O, z, Y = (
    /*backendData*/
    u[3].data[0].integritas_rate + ""
  ), ne, $, X, ee, ce = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), Q, ae, fe = (
    /*backendData*/
    u[3].data[0].integritas_savings + ""
  ), ge, te, ie, pe, le, Ce;
  return {
    c() {
      a = w("div"), n = w("div"), i = w("h1"), i.textContent = "Your Broker", t = G(), r = w("p"), o = Z("Your exchange rate was "), s = Z(l), d = G(), c = w("p"), p = Z("The interbank rate "), h = Z(f), y = Z(`
                        was `), v = Z(D), S = Z("."), A = G(), F = w("p"), P = Z("Your broker's markup was TODO "), j = Z(C), g = Z("%."), _ = Z(`
                    Your broker made `), k = Z(M), N = G(), L = Z(E), H = Z(` on this
                    trade.`), K = G(), I = w("div"), U = w("h1"), U.textContent = "Integritas", B = G(), O = w("p"), z = Z("Our exchange rate was "), ne = Z(Y), $ = G(), X = w("p"), ee = Z(`We would've saved
                        you `), Q = Z(ce), ae = G(), ge = Z(fe), te = G(), ie = w("button"), pe = Z("Calculate again"), b(i, "class", "text-2xl"), b(r, "class", "text-sm"), b(c, "class", "text-sm"), b(n, "class", "flex flex-col gap-2"), b(U, "class", "text-2xl mt-4"), b(O, "class", "text-sm"), b(X, "class", "text-sm"), b(I, "class", "flex flex-col gap-2"), b(a, "class", "flex flex-col divide-y gap-4"), b(ie, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
        ie,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        ie,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(W, R) {
      se(W, a, R), m(a, n), m(n, i), m(n, t), m(n, r), m(r, o), m(r, s), m(n, d), m(n, c), m(c, p), m(c, h), m(c, y), m(c, v), m(c, S), m(n, A), m(n, F), m(F, P), m(F, j), m(F, g), m(n, _), m(n, k), m(n, N), m(n, L), m(n, H), m(a, K), m(a, I), m(I, U), m(I, B), m(I, O), m(O, z), m(O, ne), m(I, $), m(I, X), m(X, ee), m(X, Q), m(X, ae), m(X, ge), se(W, te, R), se(W, ie, R), m(ie, pe), le || (Ce = Je(
        ie,
        "click",
        /*click_handler*/
        u[24]
      ), le = !0);
    },
    p(W, R) {
      R[0] & /*backendData*/
      8 && l !== (l = /*backendData*/
      W[3].data[0].third_party_exchange_rate + "") && xe(s, l), R[0] & /*backendData*/
      8 && f !== (f = /*backendData*/
      W[3].data[0].ccy_pair + "") && xe(h, f), R[0] & /*backendData*/
      8 && D !== (D = /*backendData*/
      W[3].data[0].mid_market_rate + "") && xe(v, D), R[0] & /*backendData*/
      8 && C !== (C = /*backendData*/
      W[3].data[0].ccy_pair + "") && xe(j, C), R[0] & /*backendData*/
      8 && M !== (M = /*backendData*/
      W[3].data[0].sold_ccy + "") && xe(k, M), R[0] & /*backendData*/
      8 && E !== (E = /*backendData*/
      W[3].data[0].third_party_profit + "") && xe(L, E), R[0] & /*backendData*/
      8 && Y !== (Y = /*backendData*/
      W[3].data[0].integritas_rate + "") && xe(ne, Y), R[0] & /*backendData*/
      8 && ce !== (ce = /*backendData*/
      W[3].data[0].sold_ccy + "") && xe(Q, ce), R[0] & /*backendData*/
      8 && fe !== (fe = /*backendData*/
      W[3].data[0].integritas_savings + "") && xe(ge, fe), R[0] & /*button_color*/
      512 && V(
        ie,
        "background-color",
        /*button_color*/
        W[9]
      ), R[0] & /*text_color*/
      4 && V(
        ie,
        "color",
        /*text_color*/
        W[2]
      );
    },
    d(W) {
      W && de(a), W && de(te), W && de(ie), le = !1, Ce();
    }
  };
}
function Ot(u) {
  let a, n, i, t, r, o, l, s, d, c, p, f, h, y, D, v, S, A, F, P, C, j, g, _, M, k, N, E, L, H, K, I, U, B, O, z, Y, ne, $, X, ee, ce, Q, ae, fe, ge, te, ie, pe, le, Ce, W, R, ve, ke, Me, me, _e, x, T, J, q, oe, he, be, De, Oe, Ee, Ae, Te, We, Fe, Ue, qe;
  function Ve(re, ye) {
    return (
      /*isFetching*/
      re[6] ? Et : At
    );
  }
  let Ye = Ve(u), we = Ye(u);
  return {
    c() {
      a = w("form"), n = w("div"), i = w("div"), t = w("div"), r = w("label"), r.textContent = "Select Date", o = G(), l = w("input"), s = G(), d = w("div"), c = w("label"), c.textContent = "Select Time", p = G(), f = w("input"), h = G(), y = w("div"), D = w("div"), v = w("label"), v.textContent = "Sell Amount", S = G(), A = w("input"), F = G(), P = w("div"), C = w("label"), j = Z("Sell Currency"), g = G(), _ = w("select"), M = w("option"), M.textContent = "GBP", k = w("option"), k.textContent = "USD", N = w("option"), N.textContent = "EUR", E = w("option"), E.textContent = "JPY", L = w("option"), L.textContent = "CHF", H = w("option"), H.textContent = "CNY", K = w("option"), K.textContent = "NZD", I = w("option"), I.textContent = "SGD", U = w("option"), U.textContent = "INR", B = w("option"), B.textContent = "AUD", O = w("option"), O.textContent = "CAD", z = w("option"), z.textContent = "HKD", Y = w("option"), Y.textContent = "MYR", ne = w("option"), ne.textContent = "NOK", $ = w("option"), $.textContent = "ZAR", X = w("option"), X.textContent = "RUB", ee = w("option"), ee.textContent = "SEK", ce = G(), Q = w("div"), ae = w("div"), fe = w("label"), fe.textContent = "Buy Amount", ge = G(), te = w("input"), ie = G(), pe = w("div"), le = w("label"), Ce = Z("Buy Currency"), W = G(), R = w("select"), ve = w("option"), ve.textContent = "USD", ke = w("option"), ke.textContent = "GBP", Me = w("option"), Me.textContent = "EUR", me = w("option"), me.textContent = "JPY", _e = w("option"), _e.textContent = "CHF", x = w("option"), x.textContent = "CNY", T = w("option"), T.textContent = "NZD", J = w("option"), J.textContent = "SGD", q = w("option"), q.textContent = "INR", oe = w("option"), oe.textContent = "AUD", he = w("option"), he.textContent = "CAD", be = w("option"), be.textContent = "HKD", De = w("option"), De.textContent = "MYR", Oe = w("option"), Oe.textContent = "NOK", Ee = w("option"), Ee.textContent = "ZAR", Ae = w("option"), Ae.textContent = "RUB", Te = w("option"), Te.textContent = "SEK", We = G(), Fe = w("div"), we.c(), b(r, "for", "date"), b(l, "id", "date"), b(l, "type", "date"), b(l, "class", "w-full rounded-md px-3 py-2"), b(l, "name", "date"), b(l, "placeholder", "Select date"), l.required = !0, b(
        l,
        "style",
        /*input_style*/
        u[10]
      ), b(t, "class", "w-full"), b(c, "for", "time"), b(f, "id", "time"), b(f, "type", "time"), b(f, "class", "w-full rounded-md px-3 py-2"), b(f, "name", "time"), b(f, "placeholder", "Select Time"), f.required = !0, b(
        f,
        "style",
        /*input_style*/
        u[10]
      ), b(d, "class", "w-full"), b(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), b(v, "for", "sold_notional"), b(A, "id", "sold_notional"), b(A, "type", "number"), b(A, "step", ".01"), b(A, "class", "w-full rounded-md px-3 py-2"), b(A, "name", "sold_notional"), b(A, "placeholder", "10000"), A.required = !0, b(
        A,
        "style",
        /*input_style*/
        u[10]
      ), b(D, "class", "w-full"), b(C, "for", "sold_ccy"), V(
        C,
        "color",
        /*text_color*/
        u[2]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, k.__value = "USD", k.value = k.__value, N.__value = "EUR", N.value = N.__value, E.__value = "JPY", E.value = E.__value, L.__value = "CHF", L.value = L.__value, H.__value = "CNY", H.value = H.__value, K.__value = "NZD", K.value = K.__value, I.__value = "SGD", I.value = I.__value, U.__value = "INR", U.value = U.__value, B.__value = "AUD", B.value = B.__value, O.__value = "CAD", O.value = O.__value, z.__value = "HKD", z.value = z.__value, Y.__value = "MYR", Y.value = Y.__value, ne.__value = "NOK", ne.value = ne.__value, $.__value = "ZAR", $.value = $.__value, X.__value = "RUB", X.value = X.__value, ee.__value = "SEK", ee.value = ee.__value, b(_, "name", "sold_ccy"), b(_, "id", "sold_ccy"), b(_, "class", "w-full rounded-md px-3 py-2"), _.required = !0, b(
        _,
        "style",
        /*input_style*/
        u[10]
      ), b(P, "class", "w-full"), b(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), b(fe, "for", "bought_notional"), b(te, "id", "bought_notional"), b(te, "type", "number"), b(te, "step", ".01"), b(te, "class", "w-full rounded-md px-3 py-2"), b(te, "name", "bought_notional"), b(te, "placeholder", "10000"), te.required = !0, b(
        te,
        "style",
        /*input_style*/
        u[10]
      ), b(ae, "class", "w-full"), b(le, "for", "bought_ccy"), V(
        le,
        "color",
        /*text_color*/
        u[2]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, ke.__value = "GBP", ke.value = ke.__value, Me.__value = "EUR", Me.value = Me.__value, me.__value = "JPY", me.value = me.__value, _e.__value = "CHF", _e.value = _e.__value, x.__value = "CNY", x.value = x.__value, T.__value = "NZD", T.value = T.__value, J.__value = "SGD", J.value = J.__value, q.__value = "INR", q.value = q.__value, oe.__value = "AUD", oe.value = oe.__value, he.__value = "CAD", he.value = he.__value, be.__value = "HKD", be.value = be.__value, De.__value = "MYR", De.value = De.__value, Oe.__value = "NOK", Oe.value = Oe.__value, Ee.__value = "ZAR", Ee.value = Ee.__value, Ae.__value = "RUB", Ae.value = Ae.__value, Te.__value = "SEK", Te.value = Te.__value, b(R, "name", "bought_ccy"), b(R, "id", "bought_ccy"), b(R, "class", "w-full rounded-md px-3 py-2"), R.required = !0, b(
        R,
        "style",
        /*input_style*/
        u[10]
      ), b(pe, "class", "w-full"), b(Q, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), b(n, "class", "flex flex-col sm:gap-4");
    },
    m(re, ye) {
      se(re, a, ye), m(a, n), m(n, i), m(i, t), m(t, r), m(t, o), m(t, l), m(i, s), m(i, d), m(d, c), m(d, p), m(d, f), m(n, h), m(n, y), m(y, D), m(D, v), m(D, S), m(D, A), m(y, F), m(y, P), m(P, C), m(C, j), m(P, g), m(P, _), m(_, M), m(_, k), m(_, N), m(_, E), m(_, L), m(_, H), m(_, K), m(_, I), m(_, U), m(_, B), m(_, O), m(_, z), m(_, Y), m(_, ne), m(_, $), m(_, X), m(_, ee), m(n, ce), m(n, Q), m(Q, ae), m(ae, fe), m(ae, ge), m(ae, te), m(Q, ie), m(Q, pe), m(pe, le), m(le, Ce), m(pe, W), m(pe, R), m(R, ve), m(R, ke), m(R, Me), m(R, me), m(R, _e), m(R, x), m(R, T), m(R, J), m(R, q), m(R, oe), m(R, he), m(R, be), m(R, De), m(R, Oe), m(R, Ee), m(R, Ae), m(R, Te), m(n, We), m(n, Fe), we.m(Fe, null), Ue || (qe = Je(
        a,
        "submit",
        /*handleFormSubmit*/
        u[12]
      ), Ue = !0);
    },
    p(re, ye) {
      ye[0] & /*input_style*/
      1024 && b(
        l,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && b(
        f,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && b(
        A,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*text_color*/
      4 && V(
        C,
        "color",
        /*text_color*/
        re[2]
      ), ye[0] & /*input_style*/
      1024 && b(
        _,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && b(
        te,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*text_color*/
      4 && V(
        le,
        "color",
        /*text_color*/
        re[2]
      ), ye[0] & /*input_style*/
      1024 && b(
        R,
        "style",
        /*input_style*/
        re[10]
      ), Ye === (Ye = Ve(re)) && we ? we.p(re, ye) : (we.d(1), we = Ye(re), we && (we.c(), we.m(Fe, null)));
    },
    d(re) {
      re && de(a), we.d(), Ue = !1, qe();
    }
  };
}
function Et(u) {
  let a, n, i, t, r;
  return {
    c() {
      a = w("button"), n = ze("svg"), i = ze("path"), t = ze("path"), r = Z(`
                                Loading...`), b(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), b(i, "fill", "#E5E7EB"), b(t, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), b(t, "fill", "currentColor"), b(n, "aria-hidden", "true"), b(n, "role", "status"), b(n, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), b(n, "viewBox", "0 0 100 101"), b(n, "fill", "none"), b(n, "xmlns", "http://www.w3.org/2000/svg"), a.disabled = !0, b(a, "type", "button"), b(a, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), V(
        a,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        a,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(o, l) {
      se(o, a, l), m(a, n), m(n, i), m(n, t), m(a, r);
    },
    p(o, l) {
      l[0] & /*button_color*/
      512 && V(
        a,
        "background-color",
        /*button_color*/
        o[9]
      ), l[0] & /*text_color*/
      4 && V(
        a,
        "color",
        /*text_color*/
        o[2]
      );
    },
    d(o) {
      o && de(a);
    }
  };
}
function At(u) {
  let a, n;
  return {
    c() {
      a = w("button"), n = Z(`See your
                                charges`), b(a, "type", "submit"), b(a, "class", "rounded-lg bg-black px-6 py-3 mt-6"), V(
        a,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        a,
        "color",
        /*text_color*/
        u[2]
      );
    },
    m(i, t) {
      se(i, a, t), m(a, n);
    },
    p(i, t) {
      t[0] & /*button_color*/
      512 && V(
        a,
        "background-color",
        /*button_color*/
        i[9]
      ), t[0] & /*text_color*/
      4 && V(
        a,
        "color",
        /*text_color*/
        i[2]
      );
    },
    d(i) {
      i && de(a);
    }
  };
}
function Tt(u) {
  let a, n;
  return {
    c() {
      a = w("p"), n = Z(
        /*statusCheckError*/
        u[7]
      ), b(a, "class", "text-sm");
    },
    m(i, t) {
      se(i, a, t), m(a, n);
    },
    p(i, t) {
      t[0] & /*statusCheckError*/
      128 && xe(
        n,
        /*statusCheckError*/
        i[7]
      );
    },
    d(i) {
      i && de(a);
    }
  };
}
function Nt(u) {
  let a;
  return {
    c() {
      a = w("div"), a.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(n, i) {
      se(n, a, i);
    },
    p: Se,
    d(n) {
      n && de(a);
    }
  };
}
function jt(u) {
  let a;
  function n(r, o) {
    return (
      /*statusCheckError*/
      r[7] ? Mt : kt
    );
  }
  let i = n(u), t = i(u);
  return {
    c() {
      t.c(), a = lt(), this.c = Se;
    },
    m(r, o) {
      t.m(r, o), se(r, a, o);
    },
    p(r, o) {
      i === (i = n(r)) && t ? t.p(r, o) : (t.d(1), t = i(r), t && (t.c(), t.m(a.parentNode, a)));
    },
    i: Se,
    o: Se,
    d(r) {
      t.d(r), r && de(a);
    }
  };
}
const tt = "http://localhost:8000", rt = "CORS_ERROR";
function Lt(u, a, n) {
  let i;
  function t() {
    const O = new XMLHttpRequest();
    O.open("GET", `${tt}/`, !0), O.onerror = function() {
      O.status === 0 ? n(7, c = rt) : n(7, c = "We're sorry, our servers are currently down. Please try again later.");
    }, O.send();
  }
  const r = async (O) => fetch(`${tt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(O)
  });
  dt(() => {
    t();
  });
  let o, l = !0, s, d = !1, c;
  const p = () => {
    n(3, o = void 0), n(4, l = !0), n(5, s = !1), n(6, d = !1);
  }, f = async (O) => {
    n(4, l = !1), n(6, d = !0), n(5, s = void 0);
    try {
      const z = await r(O);
      if (!z.ok)
        throw new Error(`HTTP error! Status: ${z.status}`);
      const Y = await z.json();
      n(6, d = !1), n(5, s = void 0), n(4, l = !1), console.log("Success"), console.log(Y), n(3, o = Y);
    } catch (z) {
      n(6, d = !1), n(5, s = z), n(4, l = !1), n(3, o = void 0), console.error("Error:", z.message);
    }
  }, h = async (O) => {
    O.preventDefault();
    const z = new FormData(O.target), Y = {};
    for (let ne of z) {
      const [$, X] = ne;
      Y[$] = X;
    }
    Y.prospect = "", Y.input_spread = "5", Y.prospect_annual_flow = "", Y.email_user = !1, Y.user = "yuriypidlisnyi2020@gmail.com", console.log(Y), f(Y);
  };
  let y = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const D = (O) => {
    n(22, y = O.matches);
  }, v = window.matchMedia("(prefers-color-scheme: dark)");
  v.addEventListener("change", D), ct(() => {
    v.removeEventListener("change", D);
  });
  let { light_mode_background: S = "#d2d0d0" } = a, { dark_mode_background: A = "#1f2937" } = a, { light_mode_text_color: F = "#1f2937" } = a, { dark_mode_text_color: P = "#f9fafb" } = a, { dark_mode_input_background: C = "#374151" } = a, { light_mode_input_background: j = "#f9fafb" } = a, { dark_mode_button_color: g = "#374151" } = a, { light_mode_button_color: _ = "#f9fafb" } = a, { border_radius: M = "0.5rem" } = a, { input_border_radius: k = "0.5rem" } = a, { shadow: N = "none" } = a, E, L, H, K;
  const I = (O) => p(), U = (O) => p(), B = (O) => p();
  return u.$$set = (O) => {
    "light_mode_background" in O && n(13, S = O.light_mode_background), "dark_mode_background" in O && n(14, A = O.dark_mode_background), "light_mode_text_color" in O && n(15, F = O.light_mode_text_color), "dark_mode_text_color" in O && n(16, P = O.dark_mode_text_color), "dark_mode_input_background" in O && n(17, C = O.dark_mode_input_background), "light_mode_input_background" in O && n(18, j = O.light_mode_input_background), "dark_mode_button_color" in O && n(19, g = O.dark_mode_button_color), "light_mode_button_color" in O && n(20, _ = O.light_mode_button_color), "border_radius" in O && n(0, M = O.border_radius), "input_border_radius" in O && n(21, k = O.input_border_radius), "shadow" in O && n(1, N = O.shadow);
  }, u.$$.update = () => {
    u.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    4218880 && n(8, E = y ? A : S), u.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    4292608 && n(2, L = y ? P : F), u.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    4587520 && n(23, H = y ? C : j), u.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    5767168 && n(9, K = y ? g : _), u.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    10485764 && n(10, i = `
    background-color: ${H};
    color: ${L};
    border-radius: ${k}px;
    `);
  }, [
    M,
    N,
    L,
    o,
    l,
    s,
    d,
    c,
    E,
    K,
    i,
    p,
    h,
    S,
    A,
    F,
    P,
    C,
    j,
    g,
    _,
    k,
    y,
    H,
    I,
    U,
    B
  ];
}
class Pt extends ot {
  constructor(a) {
    super(), this.shadowRoot.innerHTML = `<style>input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p,pre{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
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
        }}</style>`, vt(
      this,
      {
        target: this.shadowRoot,
        props: st(this.attributes),
        customElement: !0
      },
      Lt,
      jt,
      at,
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
    ), a && (a.target && se(a.target, this, a.anchor), a.props && (this.$set(a.props), ue()));
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
    this.$$set({ light_mode_background: a }), ue();
  }
  get dark_mode_background() {
    return this.$$.ctx[14];
  }
  set dark_mode_background(a) {
    this.$$set({ dark_mode_background: a }), ue();
  }
  get light_mode_text_color() {
    return this.$$.ctx[15];
  }
  set light_mode_text_color(a) {
    this.$$set({ light_mode_text_color: a }), ue();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[16];
  }
  set dark_mode_text_color(a) {
    this.$$set({ dark_mode_text_color: a }), ue();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[17];
  }
  set dark_mode_input_background(a) {
    this.$$set({ dark_mode_input_background: a }), ue();
  }
  get light_mode_input_background() {
    return this.$$.ctx[18];
  }
  set light_mode_input_background(a) {
    this.$$set({ light_mode_input_background: a }), ue();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[19];
  }
  set dark_mode_button_color(a) {
    this.$$set({ dark_mode_button_color: a }), ue();
  }
  get light_mode_button_color() {
    return this.$$.ctx[20];
  }
  set light_mode_button_color(a) {
    this.$$set({ light_mode_button_color: a }), ue();
  }
  get border_radius() {
    return this.$$.ctx[0];
  }
  set border_radius(a) {
    this.$$set({ border_radius: a }), ue();
  }
  get input_border_radius() {
    return this.$$.ctx[21];
  }
  set input_border_radius(a) {
    this.$$set({ input_border_radius: a }), ue();
  }
  get shadow() {
    return this.$$.ctx[1];
  }
  set shadow(a) {
    this.$$set({ shadow: a }), ue();
  }
}
customElements.define("spreadm8-calc", Pt);
export {
  Pt as Spreadm8Calc
};
