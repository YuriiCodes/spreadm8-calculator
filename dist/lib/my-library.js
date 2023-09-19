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
function rt(u, a) {
  return u != u ? a == a : u !== a || u && typeof u == "object" || typeof u == "function";
}
function at(u) {
  return Object.keys(u).length === 0;
}
function m(u, a) {
  u.appendChild(a);
}
function se(u, a, o) {
  u.insertBefore(a, o || null);
}
function de(u) {
  u.parentNode && u.parentNode.removeChild(u);
}
function v(u) {
  return document.createElement(u);
}
function Ie(u) {
  return document.createElementNS("http://www.w3.org/2000/svg", u);
}
function Z(u) {
  return document.createTextNode(u);
}
function G() {
  return Z(" ");
}
function it() {
  return Z("");
}
function Je(u, a, o, i) {
  return u.addEventListener(a, o, i), () => u.removeEventListener(a, o, i);
}
function g(u, a, o) {
  o == null ? u.removeAttribute(a) : u.getAttribute(a) !== o && u.setAttribute(a, o);
}
function lt(u) {
  return Array.from(u.childNodes);
}
function xe(u, a) {
  a = "" + a, u.wholeText !== a && (u.data = a);
}
function V(u, a, o, i) {
  o === null ? u.style.removeProperty(a) : u.style.setProperty(a, o, i ? "important" : "");
}
function ut(u) {
  const a = {};
  for (const o of u)
    a[o.name] = o.value;
  return a;
}
let Le;
function Pe(u) {
  Le = u;
}
function st() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function dt(u) {
  st().$$.on_mount.push(u);
}
const je = [], Xe = [], He = [], $e = [], ct = Promise.resolve();
let Ke = !1;
function ft() {
  Ke || (Ke = !0, ct.then(ue));
}
function Ze(u) {
  He.push(u);
}
const ze = /* @__PURE__ */ new Set();
let Ne = 0;
function ue() {
  if (Ne !== 0)
    return;
  const u = Le;
  do {
    try {
      for (; Ne < je.length; ) {
        const a = je[Ne];
        Ne++, Pe(a), pt(a.$$);
      }
    } catch (a) {
      throw je.length = 0, Ne = 0, a;
    }
    for (Pe(null), je.length = 0, Ne = 0; Xe.length; )
      Xe.pop()();
    for (let a = 0; a < He.length; a += 1) {
      const o = He[a];
      ze.has(o) || (ze.add(o), o());
    }
    He.length = 0;
  } while (je.length);
  for (; $e.length; )
    $e.pop()();
  Ke = !1, ze.clear(), Pe(u);
}
function pt(u) {
  if (u.fragment !== null) {
    u.update(), Re(u.before_update);
    const a = u.dirty;
    u.dirty = [-1], u.fragment && u.fragment.p(u.ctx, a), u.after_update.forEach(Ze);
  }
}
const ht = /* @__PURE__ */ new Set();
function mt(u, a) {
  u && u.i && (ht.delete(u), u.i(a));
}
function _t(u, a, o, i) {
  const { fragment: t, after_update: r } = u.$$;
  t && t.m(a, o), i || Ze(() => {
    const n = u.$$.on_mount.map(Ge).filter(Be);
    u.$$.on_destroy ? u.$$.on_destroy.push(...n) : Re(n), u.$$.on_mount = [];
  }), r.forEach(Ze);
}
function yt(u, a) {
  const o = u.$$;
  o.fragment !== null && (Re(o.on_destroy), o.fragment && o.fragment.d(a), o.on_destroy = o.fragment = null, o.ctx = []);
}
function gt(u, a) {
  u.$$.dirty[0] === -1 && (je.push(u), ft(), u.$$.dirty.fill(0)), u.$$.dirty[a / 31 | 0] |= 1 << a % 31;
}
function bt(u, a, o, i, t, r, n, l = [-1]) {
  const s = Le;
  Pe(u);
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
  n && n(d.root);
  let c = !1;
  if (d.ctx = o ? o(u, a.props || {}, (p, f, ...h) => {
    const y = h.length ? h[0] : f;
    return d.ctx && t(d.ctx[p], d.ctx[p] = y) && (!d.skip_bound && d.bound[p] && d.bound[p](y), c && gt(u, p)), f;
  }) : [], d.update(), c = !0, Re(d.before_update), d.fragment = i ? i(d.ctx) : !1, a.target) {
    if (a.hydrate) {
      const p = lt(a.target);
      d.fragment && d.fragment.l(p), p.forEach(de);
    } else
      d.fragment && d.fragment.c();
    a.intro && mt(u.$$.fragment), _t(u, a.target, a.anchor, a.customElement), ue();
  }
  Pe(s);
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
  attributeChangedCallback(u, a, o) {
    this[u] = o;
  }
  disconnectedCallback() {
    Re(this.$$.on_disconnect);
  }
  $destroy() {
    yt(this, 1), this.$destroy = Se;
  }
  $on(u, a) {
    if (!Be(a))
      return Se;
    const o = this.$$.callbacks[u] || (this.$$.callbacks[u] = []);
    return o.push(a), () => {
      const i = o.indexOf(a);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(u) {
    this.$$set && !at(u) && (this.$$.skip_bound = !0, this.$$set(u), this.$$.skip_bound = !1);
  }
});
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, et = {}, wt = {
  get exports() {
    return et;
  },
  set exports(u) {
    et = u;
  }
};
(function(u, a) {
  (function(o, i) {
    u.exports = i();
  })(vt, function() {
    return function(o) {
      function i(r) {
        if (t[r])
          return t[r].exports;
        var n = t[r] = { exports: {}, id: r, loaded: !1 };
        return o[r].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports;
      }
      var t = {};
      return i.m = o, i.c = t, i.p = "", i(0);
    }([function(o, i, t) {
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      t(84);
      var n = t(41), l = r(n), s = function() {
        l.default.addPickerToOtherInputs(), l.default.supportsDateInput() || l.default.addPickerToDateInputs();
      };
      s(), document.addEventListener("DOMContentLoaded", function() {
        s();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        s();
      });
    }, function(o, i, t) {
      o.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(o, i) {
      var t = o.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(o, i) {
      var t = {}.hasOwnProperty;
      o.exports = function(r, n) {
        return t.call(r, n);
      };
    }, function(o, i, t) {
      var r = t(9), n = t(32), l = t(25), s = Object.defineProperty;
      i.f = t(1) ? Object.defineProperty : function(d, c, p) {
        if (r(d), c = l(c, !0), r(p), n)
          try {
            return s(d, c, p);
          } catch {
          }
        if ("get" in p || "set" in p)
          throw TypeError("Accessors not supported!");
        return "value" in p && (d[c] = p.value), d;
      };
    }, function(o, i, t) {
      var r = t(59), n = t(16);
      o.exports = function(l) {
        return r(n(l));
      };
    }, function(o, i, t) {
      var r = t(4), n = t(14);
      o.exports = t(1) ? function(l, s, d) {
        return r.f(l, s, n(1, d));
      } : function(l, s, d) {
        return l[s] = d, l;
      };
    }, function(o, i, t) {
      var r = t(23)("wks"), n = t(15), l = t(2).Symbol, s = typeof l == "function", d = o.exports = function(c) {
        return r[c] || (r[c] = s && l[c] || (s ? l : n)("Symbol." + c));
      };
      d.store = r;
    }, function(o, i) {
      var t = o.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(o, i, t) {
      var r = t(12);
      o.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(o, i, t) {
      var r = t(2), n = t(8), l = t(56), s = t(6), d = "prototype", c = function(p, f, h) {
        var y, D, w, S = p & c.F, T = p & c.G, F = p & c.S, L = p & c.P, C = p & c.B, j = p & c.W, b = T ? n : n[f] || (n[f] = {}), _ = b[d], M = T ? r : F ? r[f] : (r[f] || {})[d];
        T && (h = f);
        for (y in h)
          D = !S && M && M[y] !== void 0, D && y in b || (w = D ? M[y] : h[y], b[y] = T && typeof M[y] != "function" ? h[y] : C && D ? l(w, r) : j && M[y] == w ? function(k) {
            var N = function(E, P, H) {
              if (this instanceof k) {
                switch (arguments.length) {
                  case 0:
                    return new k();
                  case 1:
                    return new k(E);
                  case 2:
                    return new k(E, P);
                }
                return new k(E, P, H);
              }
              return k.apply(this, arguments);
            };
            return N[d] = k[d], N;
          }(w) : L && typeof w == "function" ? l(Function.call, w) : w, L && ((b.virtual || (b.virtual = {}))[y] = w, p & c.R && _ && !_[y] && s(_, y, w)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, o.exports = c;
    }, function(o, i) {
      o.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(o, i) {
      o.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(o, i, t) {
      var r = t(38), n = t(17);
      o.exports = Object.keys || function(l) {
        return r(l, n);
      };
    }, function(o, i) {
      o.exports = function(t, r) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
      };
    }, function(o, i) {
      var t = 0, r = Math.random();
      o.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++t + r).toString(36));
      };
    }, function(o, i) {
      o.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(o, i) {
      o.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(o, i) {
      o.exports = {};
    }, function(o, i) {
      o.exports = !0;
    }, function(o, i) {
      i.f = {}.propertyIsEnumerable;
    }, function(o, i, t) {
      var r = t(4).f, n = t(3), l = t(7)("toStringTag");
      o.exports = function(s, d, c) {
        s && !n(s = c ? s : s.prototype, l) && r(s, l, { configurable: !0, value: d });
      };
    }, function(o, i, t) {
      var r = t(23)("keys"), n = t(15);
      o.exports = function(l) {
        return r[l] || (r[l] = n(l));
      };
    }, function(o, i, t) {
      var r = t(2), n = "__core-js_shared__", l = r[n] || (r[n] = {});
      o.exports = function(s) {
        return l[s] || (l[s] = {});
      };
    }, function(o, i) {
      var t = Math.ceil, r = Math.floor;
      o.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : t)(n);
      };
    }, function(o, i, t) {
      var r = t(12);
      o.exports = function(n, l) {
        if (!r(n))
          return n;
        var s, d;
        if (l && typeof (s = n.toString) == "function" && !r(d = s.call(n)) || typeof (s = n.valueOf) == "function" && !r(d = s.call(n)) || !l && typeof (s = n.toString) == "function" && !r(d = s.call(n)))
          return d;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(o, i, t) {
      var r = t(2), n = t(8), l = t(19), s = t(27), d = t(4).f;
      o.exports = function(c) {
        var p = n.Symbol || (n.Symbol = l ? {} : r.Symbol || {});
        c.charAt(0) == "_" || c in p || d(p, c, { value: s.f(c) });
      };
    }, function(o, i, t) {
      i.f = t(7);
    }, function(o, i) {
      i.__esModule = !0, i.default = function(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(o, i, t) {
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      i.__esModule = !0;
      var n = t(45), l = r(n);
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
    }, function(o, i) {
      var t = {}.toString;
      o.exports = function(r) {
        return t.call(r).slice(8, -1);
      };
    }, function(o, i, t) {
      var r = t(12), n = t(2).document, l = r(n) && r(n.createElement);
      o.exports = function(s) {
        return l ? n.createElement(s) : {};
      };
    }, function(o, i, t) {
      o.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(o, i, t) {
      var r = t(19), n = t(10), l = t(39), s = t(6), d = t(3), c = t(18), p = t(61), f = t(21), h = t(67), y = t(7)("iterator"), D = !([].keys && "next" in [].keys()), w = "@@iterator", S = "keys", T = "values", F = function() {
        return this;
      };
      o.exports = function(L, C, j, b, _, M, k) {
        p(j, C, b);
        var N, E, P, H = function($) {
          if (!D && $ in B)
            return B[$];
          switch ($) {
            case S:
              return function() {
                return new j(this, $);
              };
            case T:
              return function() {
                return new j(this, $);
              };
          }
          return function() {
            return new j(this, $);
          };
        }, K = C + " Iterator", z = _ == T, U = !1, B = L.prototype, O = B[y] || B[w] || _ && B[_], I = O || H(_), Y = _ ? z ? H("entries") : I : void 0, oe = C == "Array" && B.entries || O;
        if (oe && (P = h(oe.call(new L())), P !== Object.prototype && (f(P, K, !0), r || d(P, y) || s(P, y, F))), z && O && O.name !== T && (U = !0, I = function() {
          return O.call(this);
        }), r && !k || !D && !U && B[y] || s(B, y, I), c[C] = I, c[K] = F, _)
          if (N = { values: z ? I : H(T), keys: M ? I : H(S), entries: Y }, k)
            for (E in N)
              E in B || l(B, E, N[E]);
          else
            n(n.P + n.F * (D || U), C, N);
        return N;
      };
    }, function(o, i, t) {
      var r = t(9), n = t(35), l = t(17), s = t(22)("IE_PROTO"), d = function() {
      }, c = "prototype", p = function() {
        var f, h = t(31)("iframe"), y = l.length, D = "<", w = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", f = h.contentWindow.document, f.open(), f.write(D + "script" + w + "document.F=Object" + D + "/script" + w), f.close(), p = f.F; y--; )
          delete p[c][l[y]];
        return p();
      };
      o.exports = Object.create || function(f, h) {
        var y;
        return f !== null ? (d[c] = r(f), y = new d(), d[c] = null, y[s] = f) : y = p(), h === void 0 ? y : n(y, h);
      };
    }, function(o, i, t) {
      var r = t(4), n = t(9), l = t(13);
      o.exports = t(1) ? Object.defineProperties : function(s, d) {
        n(s);
        for (var c, p = l(d), f = p.length, h = 0; f > h; )
          r.f(s, c = p[h++], d[c]);
        return s;
      };
    }, function(o, i, t) {
      var r = t(38), n = t(17).concat("length", "prototype");
      i.f = Object.getOwnPropertyNames || function(l) {
        return r(l, n);
      };
    }, function(o, i) {
      i.f = Object.getOwnPropertySymbols;
    }, function(o, i, t) {
      var r = t(3), n = t(5), l = t(55)(!1), s = t(22)("IE_PROTO");
      o.exports = function(d, c) {
        var p, f = n(d), h = 0, y = [];
        for (p in f)
          p != s && r(f, p) && y.push(p);
        for (; c.length > h; )
          r(f, p = c[h++]) && (~l(y, p) || y.push(p));
        return y;
      };
    }, function(o, i, t) {
      o.exports = t(6);
    }, function(o, i, t) {
      function r(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function l(h) {
        var y = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        y.setDate(y.getDate() - (y.getDay() + 6) % 7 + 3);
        var D = new Date(y.getFullYear(), 0, 4);
        D.setDate(D.getDate() - (D.getDay() + 6) % 7 + 3);
        var w = y.getTimezoneOffset() - D.getTimezoneOffset();
        y.setHours(y.getHours() - w);
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
        return function(w, S, T, F) {
          if (arguments.length !== 1 || d(w) !== "string" || /\d/.test(w) || (S = w, w = void 0), w = w || new Date(), w instanceof Date || (w = new Date(w)), isNaN(w))
            throw TypeError("Invalid date");
          S = String(f.masks[S] || S || f.masks.default);
          var L = S.slice(0, 4);
          L !== "UTC:" && L !== "GMT:" || (S = S.slice(4), T = !0, L === "GMT:" && (F = !0));
          var C = T ? "getUTC" : "get", j = w[C + "Date"](), b = w[C + "Day"](), _ = w[C + "Month"](), M = w[C + "FullYear"](), k = w[C + "Hours"](), N = w[C + "Minutes"](), E = w[C + "Seconds"](), P = w[C + "Milliseconds"](), H = T ? 0 : w.getTimezoneOffset(), K = l(w), z = s(w), U = { d: j, dd: n(j), ddd: f.i18n.dayNames[b], dddd: f.i18n.dayNames[b + 7], m: _ + 1, mm: n(_ + 1), mmm: f.i18n.monthNames[_], mmmm: f.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: k % 12 || 12, hh: n(k % 12 || 12), H: k, HH: n(k), M: N, MM: n(N), s: E, ss: n(E), l: n(P, 3), L: n(Math.round(P / 10)), t: k < 12 ? "a" : "p", tt: k < 12 ? "am" : "pm", T: k < 12 ? "A" : "P", TT: k < 12 ? "AM" : "PM", Z: F ? "GMT" : T ? "UTC" : (String(w).match(y) || [""]).pop().replace(D, ""), o: (H > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(H) / 60) + Math.abs(H) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: K, N: z };
          return S.replace(h, function(B) {
            return B in U ? U[B] : B.slice(1, B.length - 1);
          });
        };
      }();
      f.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, f.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, i.default = f;
    }, function(o, i, t) {
      function r(F) {
        return F && F.__esModule ? F : { default: F };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = t(44), l = r(n), s = t(28), d = r(s), c = t(29), p = r(c), f = t(43), h = r(f), y = t(42), D = r(y), w = t(40), S = r(w), T = function() {
        function F(L) {
          var C = this;
          (0, d.default)(this, F), this.element = L, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, l.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var b = C.format || "yyyy-mm-dd", _ = C.element.value.match(/(\d+)/g), M = 0, k = {};
            return b.replace(/(yyyy|dd|mm)/g, function(N) {
              k[N] = M++;
            }), new Date(_[k.yyyy], _[k.mm] - 1, _[k.dd]);
          }, set: function(b) {
            C.element.value = (0, S.default)(b, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(b) {
            C.element.valueAsDate = new Date(b);
          } } });
          var j = function(b) {
            var _ = C.element;
            _.locale = C.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(b) {
            var _ = new Date();
            switch (b.keyCode) {
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
          }), this.element.addEventListener("keyup", function(b) {
            h.default.sync();
          });
        }
        return (0, p.default)(F, [{ key: "getLocaleText", value: function() {
          var L = this.locale.toLowerCase();
          for (var C in D.default) {
            var j = C.split("_");
            if (j.map(function(b) {
              return b.toLowerCase();
            }), ~j.indexOf(L) || ~j.indexOf(L.substr(0, 2)))
              return D.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var L = document.createElement("input");
          L.setAttribute("type", "date");
          var C = "not-a-date";
          return L.setAttribute("value", C), L.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var L = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = L.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(L[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var L = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = L.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(L[j]);
        } }]), F;
      }();
      i.default = T;
    }, function(o, i) {
      Object.defineProperty(i, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      i.default = t;
    }, function(o, i, t) {
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = t(28), l = r(n), s = t(29), d = r(s), c = function() {
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
            var w = new Date();
            f.date = new Date(w.getFullYear() + "/" + ("0" + (w.getMonth() + 1)).slice(-2) + "/" + ("0" + w.getDate()).slice(-2)), f.setInput();
          }), this.container.appendChild(this.today);
          var D = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(w) {
            var S = w.target;
            if (!S.hasAttribute("data-day"))
              return !1;
            var T = f.days.querySelector("[data-selected]");
            T && T.removeAttribute("data-selected"), S.setAttribute("data-selected", ""), f.date.setDate(parseInt(S.textContent)), f.setInput();
          }), D.appendChild(this.daysHead), D.appendChild(this.days), this.container.appendChild(D), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(w) {
            if (f.isOpen) {
              for (var S = w.target, T = S === f.container || S === f.input; !T && (S = S.parentNode); )
                T = S === f.container;
              (w.target.getAttribute("type") !== "date" && !T || !T) && f.hide();
            }
          }, this.removeBlur = function(w) {
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
          var D = this.container.getBoundingClientRect(), w = D.width ? D.width : 280, S = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, T = y.right - w;
          y.right < w ? (T = y.left, this.container.className = S() + " polyfill-left-aligned") : this.container.className = S() + " polyfill-right-aligned", this.container.style.left = T + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var f = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(f, h, 1).getDay(), D = new Date(this.date.getFullYear(), h + 1, 0).getDate(), w = p.absoluteDate(this.input.valueAsDate) || !1, S = w && f === w.getFullYear() && h === w.getMonth(), T = [], F = 0; F < D + y; ++F)
            if (F % 7 === 0 && T.push(`
          ` + (F !== 0 ? "</tr>" : "") + `
          <tr>
        `), F + 1 <= y)
              T.push("<td></td>");
            else {
              var L = F + 1 - y, C = S && w.getDate() === L;
              T.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + L + `
        </td>`);
            }
          this.days.innerHTML = T.join("");
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
          for (var w = h; w <= y; ++w) {
            var S = document.createElement("option");
            f.appendChild(S);
            var T = D ? D[w - h] : w;
            S.text = T, S.value = w;
          }
          return f;
        } }, { key: "absoluteDate", value: function(f) {
          return f && new Date(f.getTime() + 60 * f.getTimezoneOffset() * 1e3);
        } }]), p;
      }();
      window.thePicker = new c(), i.default = window.thePicker;
    }, function(o, i, t) {
      o.exports = { default: t(49), __esModule: !0 };
    }, function(o, i, t) {
      o.exports = { default: t(50), __esModule: !0 };
    }, function(o, i, t) {
      o.exports = { default: t(51), __esModule: !0 };
    }, function(o, i, t) {
      o.exports = { default: t(52), __esModule: !0 };
    }, function(o, i, t) {
      function r(p) {
        return p && p.__esModule ? p : { default: p };
      }
      i.__esModule = !0;
      var n = t(47), l = r(n), s = t(46), d = r(s), c = typeof d.default == "function" && typeof l.default == "symbol" ? function(p) {
        return typeof p;
      } : function(p) {
        return p && typeof d.default == "function" && p.constructor === d.default ? "symbol" : typeof p;
      };
      i.default = typeof d.default == "function" && c(l.default) === "symbol" ? function(p) {
        return typeof p > "u" ? "undefined" : c(p);
      } : function(p) {
        return p && typeof d.default == "function" && p.constructor === d.default ? "symbol" : typeof p > "u" ? "undefined" : c(p);
      };
    }, function(o, i, t) {
      t(73);
      var r = t(8).Object;
      o.exports = function(n, l) {
        return r.defineProperties(n, l);
      };
    }, function(o, i, t) {
      t(74);
      var r = t(8).Object;
      o.exports = function(n, l, s) {
        return r.defineProperty(n, l, s);
      };
    }, function(o, i, t) {
      t(77), t(75), t(78), t(79), o.exports = t(8).Symbol;
    }, function(o, i, t) {
      t(76), t(80), o.exports = t(27).f("iterator");
    }, function(o, i) {
      o.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(o, i) {
      o.exports = function() {
      };
    }, function(o, i, t) {
      var r = t(5), n = t(70), l = t(69);
      o.exports = function(s) {
        return function(d, c, p) {
          var f, h = r(d), y = n(h.length), D = l(p, y);
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
    }, function(o, i, t) {
      var r = t(53);
      o.exports = function(n, l, s) {
        if (r(n), l === void 0)
          return n;
        switch (s) {
          case 1:
            return function(d) {
              return n.call(l, d);
            };
          case 2:
            return function(d, c) {
              return n.call(l, d, c);
            };
          case 3:
            return function(d, c, p) {
              return n.call(l, d, c, p);
            };
        }
        return function() {
          return n.apply(l, arguments);
        };
      };
    }, function(o, i, t) {
      var r = t(13), n = t(37), l = t(20);
      o.exports = function(s) {
        var d = r(s), c = n.f;
        if (c)
          for (var p, f = c(s), h = l.f, y = 0; f.length > y; )
            h.call(s, p = f[y++]) && d.push(p);
        return d;
      };
    }, function(o, i, t) {
      o.exports = t(2).document && document.documentElement;
    }, function(o, i, t) {
      var r = t(30);
      o.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(o, i, t) {
      var r = t(30);
      o.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(o, i, t) {
      var r = t(34), n = t(14), l = t(21), s = {};
      t(6)(s, t(7)("iterator"), function() {
        return this;
      }), o.exports = function(d, c, p) {
        d.prototype = r(s, { next: n(1, p) }), l(d, c + " Iterator");
      };
    }, function(o, i) {
      o.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    }, function(o, i, t) {
      var r = t(13), n = t(5);
      o.exports = function(l, s) {
        for (var d, c = n(l), p = r(c), f = p.length, h = 0; f > h; )
          if (c[d = p[h++]] === s)
            return d;
      };
    }, function(o, i, t) {
      var r = t(15)("meta"), n = t(12), l = t(3), s = t(4).f, d = 0, c = Object.isExtensible || function() {
        return !0;
      }, p = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), f = function(S) {
        s(S, r, { value: { i: "O" + ++d, w: {} } });
      }, h = function(S, T) {
        if (!n(S))
          return typeof S == "symbol" ? S : (typeof S == "string" ? "S" : "P") + S;
        if (!l(S, r)) {
          if (!c(S))
            return "F";
          if (!T)
            return "E";
          f(S);
        }
        return S[r].i;
      }, y = function(S, T) {
        if (!l(S, r)) {
          if (!c(S))
            return !0;
          if (!T)
            return !1;
          f(S);
        }
        return S[r].w;
      }, D = function(S) {
        return p && w.NEED && c(S) && !l(S, r) && f(S), S;
      }, w = o.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: D };
    }, function(o, i, t) {
      var r = t(20), n = t(14), l = t(5), s = t(25), d = t(3), c = t(32), p = Object.getOwnPropertyDescriptor;
      i.f = t(1) ? p : function(f, h) {
        if (f = l(f), h = s(h, !0), c)
          try {
            return p(f, h);
          } catch {
          }
        if (d(f, h))
          return n(!r.f.call(f, h), f[h]);
      };
    }, function(o, i, t) {
      var r = t(5), n = t(36).f, l = {}.toString, s = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], d = function(c) {
        try {
          return n(c);
        } catch {
          return s.slice();
        }
      };
      o.exports.f = function(c) {
        return s && l.call(c) == "[object Window]" ? d(c) : n(r(c));
      };
    }, function(o, i, t) {
      var r = t(3), n = t(71), l = t(22)("IE_PROTO"), s = Object.prototype;
      o.exports = Object.getPrototypeOf || function(d) {
        return d = n(d), r(d, l) ? d[l] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? s : null;
      };
    }, function(o, i, t) {
      var r = t(24), n = t(16);
      o.exports = function(l) {
        return function(s, d) {
          var c, p, f = String(n(s)), h = r(d), y = f.length;
          return h < 0 || h >= y ? l ? "" : void 0 : (c = f.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (p = f.charCodeAt(h + 1)) < 56320 || p > 57343 ? l ? f.charAt(h) : c : l ? f.slice(h, h + 2) : (c - 55296 << 10) + (p - 56320) + 65536);
        };
      };
    }, function(o, i, t) {
      var r = t(24), n = Math.max, l = Math.min;
      o.exports = function(s, d) {
        return s = r(s), s < 0 ? n(s + d, 0) : l(s, d);
      };
    }, function(o, i, t) {
      var r = t(24), n = Math.min;
      o.exports = function(l) {
        return l > 0 ? n(r(l), 9007199254740991) : 0;
      };
    }, function(o, i, t) {
      var r = t(16);
      o.exports = function(n) {
        return Object(r(n));
      };
    }, function(o, i, t) {
      var r = t(54), n = t(62), l = t(18), s = t(5);
      o.exports = t(33)(Array, "Array", function(d, c) {
        this._t = s(d), this._i = 0, this._k = c;
      }, function() {
        var d = this._t, c = this._k, p = this._i++;
        return !d || p >= d.length ? (this._t = void 0, n(1)) : c == "keys" ? n(0, p) : c == "values" ? n(0, d[p]) : n(0, [p, d[p]]);
      }, "values"), l.Arguments = l.Array, r("keys"), r("values"), r("entries");
    }, function(o, i, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(o, i, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(o, i) {
    }, function(o, i, t) {
      var r = t(68)(!0);
      t(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, l = this._t, s = this._i;
        return s >= l.length ? { value: void 0, done: !0 } : (n = r(l, s), this._i += n.length, { value: n, done: !1 });
      });
    }, function(o, i, t) {
      var r = t(2), n = t(3), l = t(1), s = t(10), d = t(39), c = t(64).KEY, p = t(11), f = t(23), h = t(21), y = t(15), D = t(7), w = t(27), S = t(26), T = t(63), F = t(57), L = t(60), C = t(9), j = t(5), b = t(25), _ = t(14), M = t(34), k = t(66), N = t(65), E = t(4), P = t(13), H = N.f, K = E.f, z = k.f, U = r.Symbol, B = r.JSON, O = B && B.stringify, I = "prototype", Y = D("_hidden"), oe = D("toPrimitive"), $ = {}.propertyIsEnumerable, X = f("symbol-registry"), ee = f("symbols"), ce = f("op-symbols"), Q = Object[I], ae = typeof U == "function", fe = r.QObject, be = !fe || !fe[I] || !fe[I].findChild, te = l && p(function() {
        return M(K({}, "a", { get: function() {
          return K(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, J) {
        var q = H(Q, A);
        q && delete Q[A], K(x, A, J), q && x !== Q && K(Q, A, q);
      } : K, ie = function(x) {
        var A = ee[x] = M(U[I]);
        return A._k = x, A;
      }, pe = ae && typeof U.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof U;
      }, le = function(x, A, J) {
        return x === Q && le(ce, A, J), C(x), A = b(A, !0), C(J), n(ee, A) ? (J.enumerable ? (n(x, Y) && x[Y][A] && (x[Y][A] = !1), J = M(J, { enumerable: _(0, !1) })) : (n(x, Y) || K(x, Y, _(1, {})), x[Y][A] = !0), te(x, A, J)) : K(x, A, J);
      }, Ce = function(x, A) {
        C(x);
        for (var J, q = F(A = j(A)), ne = 0, he = q.length; he > ne; )
          le(x, J = q[ne++], A[J]);
        return x;
      }, W = function(x, A) {
        return A === void 0 ? M(x) : Ce(M(x), A);
      }, R = function(x) {
        var A = $.call(this, x = b(x, !0));
        return !(this === Q && n(ee, x) && !n(ce, x)) && (!(A || !n(this, x) || !n(ee, x) || n(this, Y) && this[Y][x]) || A);
      }, ve = function(x, A) {
        if (x = j(x), A = b(A, !0), x !== Q || !n(ee, A) || n(ce, A)) {
          var J = H(x, A);
          return !J || !n(ee, A) || n(x, Y) && x[Y][A] || (J.enumerable = !0), J;
        }
      }, ke = function(x) {
        for (var A, J = z(j(x)), q = [], ne = 0; J.length > ne; )
          n(ee, A = J[ne++]) || A == Y || A == c || q.push(A);
        return q;
      }, Me = function(x) {
        for (var A, J = x === Q, q = z(J ? ce : j(x)), ne = [], he = 0; q.length > he; )
          !n(ee, A = q[he++]) || J && !n(Q, A) || ne.push(ee[A]);
        return ne;
      };
      ae || (U = function() {
        if (this instanceof U)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(J) {
          this === Q && A.call(ce, J), n(this, Y) && n(this[Y], x) && (this[Y][x] = !1), te(this, x, _(1, J));
        };
        return l && be && te(Q, x, { configurable: !0, set: A }), ie(x);
      }, d(U[I], "toString", function() {
        return this._k;
      }), N.f = ve, E.f = le, t(36).f = k.f = ke, t(20).f = R, t(37).f = Me, l && !t(19) && d(Q, "propertyIsEnumerable", R, !0), w.f = function(x) {
        return ie(D(x));
      }), s(s.G + s.W + s.F * !ae, { Symbol: U });
      for (var me = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), _e = 0; me.length > _e; )
        D(me[_e++]);
      for (var me = P(D.store), _e = 0; me.length > _e; )
        S(me[_e++]);
      s(s.S + s.F * !ae, "Symbol", { for: function(x) {
        return n(X, x += "") ? X[x] : X[x] = U(x);
      }, keyFor: function(x) {
        if (pe(x))
          return T(X, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        be = !0;
      }, useSimple: function() {
        be = !1;
      } }), s(s.S + s.F * !ae, "Object", { create: W, defineProperty: le, defineProperties: Ce, getOwnPropertyDescriptor: ve, getOwnPropertyNames: ke, getOwnPropertySymbols: Me }), B && s(s.S + s.F * (!ae || p(function() {
        var x = U();
        return O([x]) != "[null]" || O({ a: x }) != "{}" || O(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !pe(x)) {
          for (var A, J, q = [x], ne = 1; arguments.length > ne; )
            q.push(arguments[ne++]);
          return A = q[1], typeof A == "function" && (J = A), !J && L(A) || (A = function(he, ge) {
            if (J && (ge = J.call(this, he, ge)), !pe(ge))
              return ge;
          }), q[1] = A, O.apply(B, q);
        }
      } }), U[I][oe] || t(6)(U[I], oe, U[I].valueOf), h(U, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(o, i, t) {
      t(26)("asyncIterator");
    }, function(o, i, t) {
      t(26)("observable");
    }, function(o, i, t) {
      t(72);
      for (var r = t(2), n = t(6), l = t(18), s = t(7)("toStringTag"), d = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var p = d[c], f = r[p], h = f && f.prototype;
        h && !h[s] && n(h, s, p), l[p] = l.Array;
      }
    }, function(o, i, t) {
      i = o.exports = t(82)(), i.push([o.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(o, i) {
      o.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var r = [], n = 0; n < this.length; n++) {
            var l = this[n];
            l[2] ? r.push("@media " + l[2] + "{" + l[1] + "}") : r.push(l[1]);
          }
          return r.join("");
        }, t.i = function(r, n) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, s = 0; s < this.length; s++) {
            var d = this[s][0];
            typeof d == "number" && (l[d] = !0);
          }
          for (s = 0; s < r.length; s++) {
            var c = r[s];
            typeof c[0] == "number" && l[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
          }
        }, t;
      };
    }, function(o, i, t) {
      function r(b, _) {
        for (var M = 0; M < b.length; M++) {
          var k = b[M], N = D[k.id];
          if (N) {
            N.refs++;
            for (var E = 0; E < N.parts.length; E++)
              N.parts[E](k.parts[E]);
            for (; E < k.parts.length; E++)
              N.parts.push(p(k.parts[E], _));
          } else {
            for (var P = [], E = 0; E < k.parts.length; E++)
              P.push(p(k.parts[E], _));
            D[k.id] = { id: k.id, refs: 1, parts: P };
          }
        }
      }
      function n(b) {
        for (var _ = [], M = {}, k = 0; k < b.length; k++) {
          var N = b[k], E = N[0], P = N[1], H = N[2], K = N[3], z = { css: P, media: H, sourceMap: K };
          M[E] ? M[E].parts.push(z) : _.push(M[E] = { id: E, parts: [z] });
        }
        return _;
      }
      function l(b, _) {
        var M = T(), k = C[C.length - 1];
        if (b.insertAt === "top")
          k ? k.nextSibling ? M.insertBefore(_, k.nextSibling) : M.appendChild(_) : M.insertBefore(_, M.firstChild), C.push(_);
        else {
          if (b.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(_);
        }
      }
      function s(b) {
        b.parentNode.removeChild(b);
        var _ = C.indexOf(b);
        _ >= 0 && C.splice(_, 1);
      }
      function d(b) {
        var _ = document.createElement("style");
        return _.type = "text/css", l(b, _), _;
      }
      function c(b) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", l(b, _), _;
      }
      function p(b, _) {
        var M, k, N;
        if (_.singleton) {
          var E = L++;
          M = F || (F = d(_)), k = f.bind(null, M, E, !1), N = f.bind(null, M, E, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = c(_), k = y.bind(null, M), N = function() {
            s(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = d(_), k = h.bind(null, M), N = function() {
            s(M);
          });
        return k(b), function(P) {
          if (P) {
            if (P.css === b.css && P.media === b.media && P.sourceMap === b.sourceMap)
              return;
            k(b = P);
          } else
            N();
        };
      }
      function f(b, _, M, k) {
        var N = M ? "" : k.css;
        if (b.styleSheet)
          b.styleSheet.cssText = j(_, N);
        else {
          var E = document.createTextNode(N), P = b.childNodes;
          P[_] && b.removeChild(P[_]), P.length ? b.insertBefore(E, P[_]) : b.appendChild(E);
        }
      }
      function h(b, _) {
        var M = _.css, k = _.media;
        if (k && b.setAttribute("media", k), b.styleSheet)
          b.styleSheet.cssText = M;
        else {
          for (; b.firstChild; )
            b.removeChild(b.firstChild);
          b.appendChild(document.createTextNode(M));
        }
      }
      function y(b, _) {
        var M = _.css, k = _.sourceMap;
        k && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(k)))) + " */");
        var N = new Blob([M], { type: "text/css" }), E = b.href;
        b.href = URL.createObjectURL(N), E && URL.revokeObjectURL(E);
      }
      var D = {}, w = function(b) {
        var _;
        return function() {
          return typeof _ > "u" && (_ = b.apply(this, arguments)), _;
        };
      }, S = w(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), T = w(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), F = null, L = 0, C = [];
      o.exports = function(b, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = S()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = n(b);
        return r(M, _), function(k) {
          for (var N = [], E = 0; E < M.length; E++) {
            var P = M[E], H = D[P.id];
            H.refs--, N.push(H);
          }
          if (k) {
            var K = n(k);
            r(K, _);
          }
          for (var E = 0; E < N.length; E++) {
            var H = N[E];
            if (H.refs === 0) {
              for (var z = 0; z < H.parts.length; z++)
                H.parts[z]();
              delete D[H.id];
            }
          }
        };
      };
      var j = function() {
        var b = [];
        return function(_, M) {
          return b[_] = M, b.filter(Boolean).join(`
`);
        };
      }();
    }, function(o, i, t) {
      var r = t(81);
      typeof r == "string" && (r = [[o.id, r, ""]]), t(83)(r, {}), r.locals && (o.exports = r.locals);
    }]);
  });
})(wt);
function xt(u) {
  let a, o, i;
  function t(l, s) {
    return (
      /*isIdle*/
      l[4] || /*isFetching*/
      l[6] ? Dt : (
        /*backendData*/
        l[3] ? St : (
          /*error*/
          l[5] ? Ct : Mt
        )
      )
    );
  }
  let r = t(u), n = r(u);
  return {
    c() {
      a = v("div"), n.c(), g(a, "class", o = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), g(a, "style", i = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
`);
    },
    m(l, s) {
      se(l, a, s), n.m(a, null);
    },
    p(l, s) {
      r === (r = t(l)) && n ? n.p(l, s) : (n.d(1), n = r(l), n && (n.c(), n.m(a, null))), s[0] & /*shadow*/
      2 && o !== (o = `w-full p-4 shadow-${/*shadow*/
      l[1]}`) && g(a, "class", o), s[0] & /*background, border_radius, text_color*/
      261 && i !== (i = `
        background-color: ${/*background*/
      l[8]};
        border-radius: ${/*border_radius*/
      l[0]};
        color: ${/*text_color*/
      l[2]};
`) && g(a, "style", i);
    },
    d(l) {
      l && de(a), n.d();
    }
  };
}
function kt(u) {
  let a, o, i, t, r, n;
  function l(c, p) {
    return (
      /*statusCheckError*/
      c[7] === nt ? At : Tt
    );
  }
  let s = l(u), d = s(u);
  return {
    c() {
      a = v("div"), o = v("div"), i = v("h1"), i.textContent = "An error occured", t = G(), d.c(), g(i, "class", "text-2xl"), g(o, "class", "flex flex-col items-center gap-4"), g(a, "class", r = `w-full p-4 shadow-${/*shadow*/
      u[1]}`), g(a, "style", n = `
        background-color: ${/*background*/
      u[8]};
        border-radius: ${/*border_radius*/
      u[0]};
        color: ${/*text_color*/
      u[2]};
`);
    },
    m(c, p) {
      se(c, a, p), m(a, o), m(o, i), m(o, t), d.m(o, null);
    },
    p(c, p) {
      s === (s = l(c)) && d ? d.p(c, p) : (d.d(1), d = s(c), d && (d.c(), d.m(o, null))), p[0] & /*shadow*/
      2 && r !== (r = `w-full p-4 shadow-${/*shadow*/
      c[1]}`) && g(a, "class", r), p[0] & /*background, border_radius, text_color*/
      261 && n !== (n = `
        background-color: ${/*background*/
      c[8]};
        border-radius: ${/*border_radius*/
      c[0]};
        color: ${/*text_color*/
      c[2]};
`) && g(a, "style", n);
    },
    d(c) {
      c && de(a), d.d();
    }
  };
}
function Mt(u) {
  let a, o, i, t, r, n, l, s, d;
  return {
    c() {
      a = v("div"), o = v("h1"), o.textContent = "An unknown error", i = G(), t = v("pre"), t.textContent = `${JSON.strigify(e)}`, r = G(), n = v("button"), l = Z("Reset Form"), g(o, "class", "text-2xl"), g(n, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
        n,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        n,
        "color",
        /*text_color*/
        u[2]
      ), g(a, "class", "flex flex-col items-center");
    },
    m(c, p) {
      se(c, a, p), m(a, o), m(a, i), m(a, t), m(a, r), m(a, n), m(n, l), s || (d = Je(
        n,
        "click",
        /*click_handler_2*/
        u[26]
      ), s = !0);
    },
    p(c, p) {
      p[0] & /*button_color*/
      512 && V(
        n,
        "background-color",
        /*button_color*/
        c[9]
      ), p[0] & /*text_color*/
      4 && V(
        n,
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
function Ct(u) {
  let a, o, i, t, r, n, l;
  return {
    c() {
      a = v("div"), o = v("h1"), o.textContent = "Error", i = G(), t = v("button"), r = Z("Reset Form"), g(o, "class", "text-2xl"), g(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
        t,
        "background-color",
        /*button_color*/
        u[9]
      ), V(
        t,
        "color",
        /*text_color*/
        u[2]
      ), g(a, "class", "flex flex-col items-center");
    },
    m(s, d) {
      se(s, a, d), m(a, o), m(a, i), m(a, t), m(t, r), n || (l = Je(
        t,
        "click",
        /*click_handler_1*/
        u[25]
      ), n = !0);
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
      s && de(a), n = !1, l();
    }
  };
}
function St(u) {
  let a, o, i, t, r, n, l = (
    /*backendData*/
    u[3].data[0].third_party_exchange_rate + ""
  ), s, d, c, p, f = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), h, y, D = (
    /*backendData*/
    u[3].data[0].mid_market_rate + ""
  ), w, S, T, F, L, C = (
    /*backendData*/
    u[3].data[0].ccy_pair + ""
  ), j, b, _, M = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), k, N, E = (
    /*backendData*/
    u[3].data[0].third_party_profit + ""
  ), P, H, K, z, U, B, O, I, Y = (
    /*backendData*/
    u[3].data[0].integritas_rate + ""
  ), oe, $, X, ee, ce = (
    /*backendData*/
    u[3].data[0].sold_ccy + ""
  ), Q, ae, fe = (
    /*backendData*/
    u[3].data[0].integritas_savings + ""
  ), be, te, ie, pe, le, Ce;
  return {
    c() {
      a = v("div"), o = v("div"), i = v("h1"), i.textContent = "Your Broker", t = G(), r = v("p"), n = Z("Your exchange rate was "), s = Z(l), d = G(), c = v("p"), p = Z("The interbank rate "), h = Z(f), y = Z(`
                        was `), w = Z(D), S = Z("."), T = G(), F = v("p"), L = Z("Your broker's markup was TODO "), j = Z(C), b = Z("%."), _ = Z(`
                    Your broker made `), k = Z(M), N = G(), P = Z(E), H = Z(` on this
                    trade.`), K = G(), z = v("div"), U = v("h1"), U.textContent = "Integritas", B = G(), O = v("p"), I = Z("Our exchange rate was "), oe = Z(Y), $ = G(), X = v("p"), ee = Z(`We would've saved
                        you `), Q = Z(ce), ae = G(), be = Z(fe), te = G(), ie = v("button"), pe = Z("Calculate again"), g(i, "class", "text-2xl"), g(r, "class", "text-sm"), g(c, "class", "text-sm"), g(o, "class", "flex flex-col gap-2"), g(U, "class", "text-2xl mt-4"), g(O, "class", "text-sm"), g(X, "class", "text-sm"), g(z, "class", "flex flex-col gap-2"), g(a, "class", "flex flex-col divide-y gap-4"), g(ie, "class", "rounded-lg bg-black px-6 py-3 mt-4"), V(
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
      se(W, a, R), m(a, o), m(o, i), m(o, t), m(o, r), m(r, n), m(r, s), m(o, d), m(o, c), m(c, p), m(c, h), m(c, y), m(c, w), m(c, S), m(o, T), m(o, F), m(F, L), m(F, j), m(F, b), m(o, _), m(o, k), m(o, N), m(o, P), m(o, H), m(a, K), m(a, z), m(z, U), m(z, B), m(z, O), m(O, I), m(O, oe), m(z, $), m(z, X), m(X, ee), m(X, Q), m(X, ae), m(X, be), se(W, te, R), se(W, ie, R), m(ie, pe), le || (Ce = Je(
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
      W[3].data[0].mid_market_rate + "") && xe(w, D), R[0] & /*backendData*/
      8 && C !== (C = /*backendData*/
      W[3].data[0].ccy_pair + "") && xe(j, C), R[0] & /*backendData*/
      8 && M !== (M = /*backendData*/
      W[3].data[0].sold_ccy + "") && xe(k, M), R[0] & /*backendData*/
      8 && E !== (E = /*backendData*/
      W[3].data[0].third_party_profit + "") && xe(P, E), R[0] & /*backendData*/
      8 && Y !== (Y = /*backendData*/
      W[3].data[0].integritas_rate + "") && xe(oe, Y), R[0] & /*backendData*/
      8 && ce !== (ce = /*backendData*/
      W[3].data[0].sold_ccy + "") && xe(Q, ce), R[0] & /*backendData*/
      8 && fe !== (fe = /*backendData*/
      W[3].data[0].integritas_savings + "") && xe(be, fe), R[0] & /*button_color*/
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
function Dt(u) {
  let a, o, i, t, r, n, l, s, d, c, p, f, h, y, D, w, S, T, F, L, C, j, b, _, M, k, N, E, P, H, K, z, U, B, O, I, Y, oe, $, X, ee, ce, Q, ae, fe, be, te, ie, pe, le, Ce, W, R, ve, ke, Me, me, _e, x, A, J, q, ne, he, ge, De, Oe, Ee, Te, Ae, We, Fe, Ue, qe;
  function Ve(re, ye) {
    return (
      /*isFetching*/
      re[6] ? Ot : Et
    );
  }
  let Ye = Ve(u), we = Ye(u);
  return {
    c() {
      a = v("form"), o = v("div"), i = v("div"), t = v("div"), r = v("label"), r.textContent = "Select Date", n = G(), l = v("input"), s = G(), d = v("div"), c = v("label"), c.textContent = "Select Time", p = G(), f = v("input"), h = G(), y = v("div"), D = v("div"), w = v("label"), w.textContent = "I Paid", S = G(), T = v("input"), F = G(), L = v("div"), C = v("label"), j = Z("Currency"), b = G(), _ = v("select"), M = v("option"), M.textContent = "GBP", k = v("option"), k.textContent = "USD", N = v("option"), N.textContent = "EUR", E = v("option"), E.textContent = "JPY", P = v("option"), P.textContent = "CHF", H = v("option"), H.textContent = "CNY", K = v("option"), K.textContent = "NZD", z = v("option"), z.textContent = "SGD", U = v("option"), U.textContent = "INR", B = v("option"), B.textContent = "AUD", O = v("option"), O.textContent = "CAD", I = v("option"), I.textContent = "HKD", Y = v("option"), Y.textContent = "MYR", oe = v("option"), oe.textContent = "NOK", $ = v("option"), $.textContent = "ZAR", X = v("option"), X.textContent = "RUB", ee = v("option"), ee.textContent = "SEK", ce = G(), Q = v("div"), ae = v("div"), fe = v("label"), fe.textContent = "I Received", be = G(), te = v("input"), ie = G(), pe = v("div"), le = v("label"), Ce = Z("Currency"), W = G(), R = v("select"), ve = v("option"), ve.textContent = "USD", ke = v("option"), ke.textContent = "GBP", Me = v("option"), Me.textContent = "EUR", me = v("option"), me.textContent = "JPY", _e = v("option"), _e.textContent = "CHF", x = v("option"), x.textContent = "CNY", A = v("option"), A.textContent = "NZD", J = v("option"), J.textContent = "SGD", q = v("option"), q.textContent = "INR", ne = v("option"), ne.textContent = "AUD", he = v("option"), he.textContent = "CAD", ge = v("option"), ge.textContent = "HKD", De = v("option"), De.textContent = "MYR", Oe = v("option"), Oe.textContent = "NOK", Ee = v("option"), Ee.textContent = "ZAR", Te = v("option"), Te.textContent = "RUB", Ae = v("option"), Ae.textContent = "SEK", We = G(), Fe = v("div"), we.c(), g(r, "for", "date"), g(l, "id", "date"), g(l, "type", "date"), g(l, "class", "w-full rounded-md px-3 py-2"), g(l, "name", "date"), g(l, "placeholder", "Select date"), l.required = !0, g(
        l,
        "style",
        /*input_style*/
        u[10]
      ), g(t, "class", "w-full"), g(c, "for", "time"), g(f, "id", "time"), g(f, "type", "time"), g(f, "class", "w-full rounded-md px-3 py-2"), g(f, "name", "time"), g(f, "placeholder", "Select Time"), f.required = !0, g(
        f,
        "style",
        /*input_style*/
        u[10]
      ), g(d, "class", "w-full"), g(i, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), g(w, "for", "sold_notional"), g(T, "id", "sold_notional"), g(T, "type", "number"), g(T, "step", ".01"), g(T, "class", "w-full rounded-md px-3 py-2"), g(T, "name", "sold_notional"), g(T, "placeholder", "10000"), T.required = !0, g(
        T,
        "style",
        /*input_style*/
        u[10]
      ), g(D, "class", "w-full"), g(C, "for", "sold_ccy"), V(
        C,
        "color",
        /*text_color*/
        u[2]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, k.__value = "USD", k.value = k.__value, N.__value = "EUR", N.value = N.__value, E.__value = "JPY", E.value = E.__value, P.__value = "CHF", P.value = P.__value, H.__value = "CNY", H.value = H.__value, K.__value = "NZD", K.value = K.__value, z.__value = "SGD", z.value = z.__value, U.__value = "INR", U.value = U.__value, B.__value = "AUD", B.value = B.__value, O.__value = "CAD", O.value = O.__value, I.__value = "HKD", I.value = I.__value, Y.__value = "MYR", Y.value = Y.__value, oe.__value = "NOK", oe.value = oe.__value, $.__value = "ZAR", $.value = $.__value, X.__value = "RUB", X.value = X.__value, ee.__value = "SEK", ee.value = ee.__value, g(_, "name", "sold_ccy"), g(_, "id", "sold_ccy"), g(_, "class", "w-full rounded-md px-3 py-2"), _.required = !0, g(
        _,
        "style",
        /*input_style*/
        u[10]
      ), g(L, "class", "w-full"), g(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), g(fe, "for", "bought_notional"), g(te, "id", "bought_notional"), g(te, "type", "number"), g(te, "step", ".01"), g(te, "class", "w-full rounded-md px-3 py-2"), g(te, "name", "bought_notional"), g(te, "placeholder", "10000"), te.required = !0, g(
        te,
        "style",
        /*input_style*/
        u[10]
      ), g(ae, "class", "w-full"), g(le, "for", "bought_ccy"), V(
        le,
        "color",
        /*text_color*/
        u[2]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, ke.__value = "GBP", ke.value = ke.__value, Me.__value = "EUR", Me.value = Me.__value, me.__value = "JPY", me.value = me.__value, _e.__value = "CHF", _e.value = _e.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, J.__value = "SGD", J.value = J.__value, q.__value = "INR", q.value = q.__value, ne.__value = "AUD", ne.value = ne.__value, he.__value = "CAD", he.value = he.__value, ge.__value = "HKD", ge.value = ge.__value, De.__value = "MYR", De.value = De.__value, Oe.__value = "NOK", Oe.value = Oe.__value, Ee.__value = "ZAR", Ee.value = Ee.__value, Te.__value = "RUB", Te.value = Te.__value, Ae.__value = "SEK", Ae.value = Ae.__value, g(R, "name", "bought_ccy"), g(R, "id", "bought_ccy"), g(R, "class", "w-full rounded-md px-3 py-2"), R.required = !0, g(
        R,
        "style",
        /*input_style*/
        u[10]
      ), g(pe, "class", "w-full"), g(Q, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), g(o, "class", "flex flex-col sm:gap-4");
    },
    m(re, ye) {
      se(re, a, ye), m(a, o), m(o, i), m(i, t), m(t, r), m(t, n), m(t, l), m(i, s), m(i, d), m(d, c), m(d, p), m(d, f), m(o, h), m(o, y), m(y, D), m(D, w), m(D, S), m(D, T), m(y, F), m(y, L), m(L, C), m(C, j), m(L, b), m(L, _), m(_, M), m(_, k), m(_, N), m(_, E), m(_, P), m(_, H), m(_, K), m(_, z), m(_, U), m(_, B), m(_, O), m(_, I), m(_, Y), m(_, oe), m(_, $), m(_, X), m(_, ee), m(o, ce), m(o, Q), m(Q, ae), m(ae, fe), m(ae, be), m(ae, te), m(Q, ie), m(Q, pe), m(pe, le), m(le, Ce), m(pe, W), m(pe, R), m(R, ve), m(R, ke), m(R, Me), m(R, me), m(R, _e), m(R, x), m(R, A), m(R, J), m(R, q), m(R, ne), m(R, he), m(R, ge), m(R, De), m(R, Oe), m(R, Ee), m(R, Te), m(R, Ae), m(o, We), m(o, Fe), we.m(Fe, null), Ue || (qe = Je(
        a,
        "submit",
        /*handleFormSubmit*/
        u[12]
      ), Ue = !0);
    },
    p(re, ye) {
      ye[0] & /*input_style*/
      1024 && g(
        l,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && g(
        f,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && g(
        T,
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
      1024 && g(
        _,
        "style",
        /*input_style*/
        re[10]
      ), ye[0] & /*input_style*/
      1024 && g(
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
      1024 && g(
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
function Ot(u) {
  let a, o, i, t, r;
  return {
    c() {
      a = v("button"), o = Ie("svg"), i = Ie("path"), t = Ie("path"), r = Z(`
                                Loading...`), g(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), g(i, "fill", "#E5E7EB"), g(t, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), g(t, "fill", "currentColor"), g(o, "aria-hidden", "true"), g(o, "role", "status"), g(o, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), g(o, "viewBox", "0 0 100 101"), g(o, "fill", "none"), g(o, "xmlns", "http://www.w3.org/2000/svg"), a.disabled = !0, g(a, "type", "button"), g(a, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), V(
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
    m(n, l) {
      se(n, a, l), m(a, o), m(o, i), m(o, t), m(a, r);
    },
    p(n, l) {
      l[0] & /*button_color*/
      512 && V(
        a,
        "background-color",
        /*button_color*/
        n[9]
      ), l[0] & /*text_color*/
      4 && V(
        a,
        "color",
        /*text_color*/
        n[2]
      );
    },
    d(n) {
      n && de(a);
    }
  };
}
function Et(u) {
  let a, o;
  return {
    c() {
      a = v("button"), o = Z(`See your
                                charges`), g(a, "type", "submit"), g(a, "class", "rounded-lg bg-black px-6 py-3 mt-6"), V(
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
      se(i, a, t), m(a, o);
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
  let a, o;
  return {
    c() {
      a = v("p"), o = Z(
        /*statusCheckError*/
        u[7]
      ), g(a, "class", "text-sm");
    },
    m(i, t) {
      se(i, a, t), m(a, o);
    },
    p(i, t) {
      t[0] & /*statusCheckError*/
      128 && xe(
        o,
        /*statusCheckError*/
        i[7]
      );
    },
    d(i) {
      i && de(a);
    }
  };
}
function At(u) {
  let a;
  return {
    c() {
      a = v("div"), a.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(o, i) {
      se(o, a, i);
    },
    p: Se,
    d(o) {
      o && de(a);
    }
  };
}
function Nt(u) {
  let a;
  function o(r, n) {
    return (
      /*statusCheckError*/
      r[7] ? kt : xt
    );
  }
  let i = o(u), t = i(u);
  return {
    c() {
      t.c(), a = it(), this.c = Se;
    },
    m(r, n) {
      t.m(r, n), se(r, a, n);
    },
    p(r, n) {
      i === (i = o(r)) && t ? t.p(r, n) : (t.d(1), t = i(r), t && (t.c(), t.m(a.parentNode, a)));
    },
    i: Se,
    o: Se,
    d(r) {
      t.d(r), r && de(a);
    }
  };
}
const tt = "http://localhost:8000", nt = "CORS_ERROR";
function jt(u, a, o) {
  let i;
  function t() {
    const O = new XMLHttpRequest();
    O.open("GET", `${tt}/`, !0), O.onerror = function() {
      O.status === 0 ? o(7, c = nt) : o(7, c = "We're sorry, our servers are currently down. Please try again later.");
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
  let n, l = !0, s, d = !1, c;
  const p = () => {
    o(3, n = void 0), o(4, l = !0), o(5, s = !1), o(6, d = !1);
  }, f = async (O) => {
    o(4, l = !1), o(6, d = !0), o(5, s = void 0);
    try {
      const I = await r(O);
      if (!I.ok)
        throw new Error(`HTTP error! Status: ${I.status}`);
      const Y = await I.json();
      o(6, d = !1), o(5, s = void 0), o(4, l = !1), console.log("Success"), console.log(Y), o(3, n = Y);
    } catch (I) {
      o(6, d = !1), o(5, s = I), o(4, l = !1), o(3, n = void 0), console.error("Error:", I.message);
    }
  }, h = async (O) => {
    O.preventDefault();
    const I = new FormData(O.target), Y = {};
    for (let oe of I) {
      const [$, X] = oe;
      Y[$] = X;
    }
    Y.prospect = "", Y.input_spread = "5", Y.prospect_annual_flow = "", Y.email_user = !1, Y.user = "yuriypidlisnyi2020@gmail.com", console.log(Y), f(Y);
  };
  let y = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const D = (O) => {
    o(22, y = O.matches);
  };
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", D);
  let { light_mode_background: S = "#d2d0d0" } = a, { dark_mode_background: T = "#1f2937" } = a, { light_mode_text_color: F = "#1f2937" } = a, { dark_mode_text_color: L = "#f9fafb" } = a, { dark_mode_input_background: C = "#374151" } = a, { light_mode_input_background: j = "#f9fafb" } = a, { dark_mode_button_color: b = "#374151" } = a, { light_mode_button_color: _ = "#f9fafb" } = a, { border_radius: M = "0.5rem" } = a, { input_border_radius: k = "0.5rem" } = a, { shadow: N = "none" } = a, E, P, H, K;
  const z = (O) => p(), U = (O) => p(), B = (O) => p();
  return u.$$set = (O) => {
    "light_mode_background" in O && o(13, S = O.light_mode_background), "dark_mode_background" in O && o(14, T = O.dark_mode_background), "light_mode_text_color" in O && o(15, F = O.light_mode_text_color), "dark_mode_text_color" in O && o(16, L = O.dark_mode_text_color), "dark_mode_input_background" in O && o(17, C = O.dark_mode_input_background), "light_mode_input_background" in O && o(18, j = O.light_mode_input_background), "dark_mode_button_color" in O && o(19, b = O.dark_mode_button_color), "light_mode_button_color" in O && o(20, _ = O.light_mode_button_color), "border_radius" in O && o(0, M = O.border_radius), "input_border_radius" in O && o(21, k = O.input_border_radius), "shadow" in O && o(1, N = O.shadow);
  }, u.$$.update = () => {
    u.$$.dirty[0] & /*isDarkMode, dark_mode_background, light_mode_background*/
    4218880 && o(8, E = y ? T : S), u.$$.dirty[0] & /*isDarkMode, dark_mode_text_color, light_mode_text_color*/
    4292608 && o(2, P = y ? L : F), u.$$.dirty[0] & /*isDarkMode, dark_mode_input_background, light_mode_input_background*/
    4587520 && o(23, H = y ? C : j), u.$$.dirty[0] & /*isDarkMode, dark_mode_button_color, light_mode_button_color*/
    5767168 && o(9, K = y ? b : _), u.$$.dirty[0] & /*input_background, text_color, input_border_radius*/
    10485764 && o(10, i = `
    background-color: ${H};
    color: ${P};
    border-radius: ${k}px;
    `);
  }, [
    M,
    N,
    P,
    n,
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
    T,
    F,
    L,
    C,
    j,
    b,
    _,
    k,
    y,
    H,
    z,
    U,
    B
  ];
}
class Pt extends ot {
  constructor(a) {
    super(), this.shadowRoot.innerHTML = `<style>*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p,pre{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
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
        }}</style>`, bt(
      this,
      {
        target: this.shadowRoot,
        props: ut(this.attributes),
        customElement: !0
      },
      jt,
      Nt,
      rt,
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
