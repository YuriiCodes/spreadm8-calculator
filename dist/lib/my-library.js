function Me() {
}
function We(a) {
  return a();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function Pe(a) {
  a.forEach(We);
}
function Ke(a) {
  return typeof a == "function";
}
function ut(a, o) {
  return a != a ? o == o : a !== o || a && typeof a == "object" || typeof a == "function";
}
function st(a) {
  return Object.keys(a).length === 0;
}
function p(a, o) {
  a.appendChild(o);
}
function de(a, o, t) {
  a.insertBefore(o, t || null);
}
function se(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function g(a) {
  return document.createElement(a);
}
function ze(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function Z(a) {
  return document.createTextNode(a);
}
function G() {
  return Z(" ");
}
function dt() {
  return Z("");
}
function Je(a, o, t, l) {
  return a.addEventListener(o, t, l), () => a.removeEventListener(o, t, l);
}
function _(a, o, t) {
  t == null ? a.removeAttribute(o) : a.getAttribute(o) !== t && a.setAttribute(o, t);
}
function ct(a) {
  return Array.from(a.childNodes);
}
function ge(a, o) {
  o = "" + o, a.wholeText !== o && (a.data = o);
}
function re(a, o, t, l) {
  t === null ? a.style.removeProperty(o) : a.style.setProperty(o, t, l ? "important" : "");
}
function ft(a) {
  const o = {};
  for (const t of a)
    o[t.name] = t.value;
  return o;
}
let Le;
function je(a) {
  Le = a;
}
function it() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function pt(a) {
  it().$$.on_mount.push(a);
}
function ht(a) {
  it().$$.on_destroy.push(a);
}
const Te = [], $e = [], He = [], et = [], mt = Promise.resolve();
let Ze = !1;
function _t() {
  Ze || (Ze = !0, mt.then(te));
}
function Ge(a) {
  He.push(a);
}
const Be = /* @__PURE__ */ new Set();
let Ae = 0;
function te() {
  if (Ae !== 0)
    return;
  const a = Le;
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
  Ze = !1, Be.clear(), je(a);
}
function yt(a) {
  if (a.fragment !== null) {
    a.update(), Pe(a.before_update);
    const o = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, o), a.after_update.forEach(Ge);
  }
}
const gt = /* @__PURE__ */ new Set();
function bt(a, o) {
  a && a.i && (gt.delete(a), a.i(o));
}
function vt(a, o, t, l) {
  const { fragment: e, after_update: r } = a.$$;
  e && e.m(o, t), l || Ge(() => {
    const n = a.$$.on_mount.map(We).filter(Ke);
    a.$$.on_destroy ? a.$$.on_destroy.push(...n) : Pe(n), a.$$.on_mount = [];
  }), r.forEach(Ge);
}
function wt(a, o) {
  const t = a.$$;
  t.fragment !== null && (Pe(t.on_destroy), t.fragment && t.fragment.d(o), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xt(a, o) {
  a.$$.dirty[0] === -1 && (Te.push(a), _t(), a.$$.dirty.fill(0)), a.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function kt(a, o, t, l, e, r, n, i = [-1]) {
  const u = Le;
  je(a);
  const s = a.$$ = {
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
  if (s.ctx = t ? t(a, o.props || {}, (f, c, ...h) => {
    const y = h.length ? h[0] : c;
    return s.ctx && e(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), d && xt(a, f)), c;
  }) : [], s.update(), d = !0, Pe(s.before_update), s.fragment = l ? l(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const f = ct(o.target);
      s.fragment && s.fragment.l(f), f.forEach(se);
    } else
      s.fragment && s.fragment.c();
    o.intro && bt(a.$$.fragment), vt(a, o.target, o.anchor, o.customElement), te();
  }
  je(u);
}
let at;
typeof HTMLElement == "function" && (at = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: a } = this.$$;
    this.$$.on_disconnect = a.map(We).filter(Ke);
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(a, o, t) {
    this[a] = t;
  }
  disconnectedCallback() {
    Pe(this.$$.on_disconnect);
  }
  $destroy() {
    wt(this, 1), this.$destroy = Me;
  }
  $on(a, o) {
    if (!Ke(o))
      return Me;
    const t = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return t.push(o), () => {
      const l = t.indexOf(o);
      l !== -1 && t.splice(l, 1);
    };
  }
  $set(a) {
    this.$$set && !st(a) && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
  }
});
var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tt = {}, Ct = {
  get exports() {
    return tt;
  },
  set exports(a) {
    tt = a;
  }
};
(function(a, o) {
  (function(t, l) {
    a.exports = l();
  })(Mt, function() {
    return function(t) {
      function l(r) {
        if (e[r])
          return e[r].exports;
        var n = e[r] = { exports: {}, id: r, loaded: !1 };
        return t[r].call(n.exports, n, n.exports, l), n.loaded = !0, n.exports;
      }
      var e = {};
      return l.m = t, l.c = e, l.p = "", l(0);
    }([function(t, l, e) {
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
    }, function(t, l, e) {
      t.exports = !e(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, l) {
      var e = t.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = e);
    }, function(t, l) {
      var e = {}.hasOwnProperty;
      t.exports = function(r, n) {
        return e.call(r, n);
      };
    }, function(t, l, e) {
      var r = e(9), n = e(32), i = e(25), u = Object.defineProperty;
      l.f = e(1) ? Object.defineProperty : function(s, d, f) {
        if (r(s), d = i(d, !0), r(f), n)
          try {
            return u(s, d, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[d] = f.value), s;
      };
    }, function(t, l, e) {
      var r = e(59), n = e(16);
      t.exports = function(i) {
        return r(n(i));
      };
    }, function(t, l, e) {
      var r = e(4), n = e(14);
      t.exports = e(1) ? function(i, u, s) {
        return r.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(t, l, e) {
      var r = e(23)("wks"), n = e(15), i = e(2).Symbol, u = typeof i == "function", s = t.exports = function(d) {
        return r[d] || (r[d] = u && i[d] || (u ? i : n)("Symbol." + d));
      };
      s.store = r;
    }, function(t, l) {
      var e = t.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = e);
    }, function(t, l, e) {
      var r = e(12);
      t.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(t, l, e) {
      var r = e(2), n = e(8), i = e(56), u = e(6), s = "prototype", d = function(f, c, h) {
        var y, S, v, k = f & d.F, E = f & d.G, R = f & d.S, N = f & d.P, C = f & d.B, L = f & d.W, b = E ? n : n[c] || (n[c] = {}), m = b[s], M = E ? r : R ? r[c] : (r[c] || {})[s];
        E && (h = c);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in b || (v = S ? M[y] : h[y], b[y] = E && typeof M[y] != "function" ? h[y] : C && S ? i(v, r) : L && M[y] == v ? function(w) {
            var T = function(O, j, P) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(O);
                  case 2:
                    return new w(O, j);
                }
                return new w(O, j, P);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : N && typeof v == "function" ? i(Function.call, v) : v, N && ((b.virtual || (b.virtual = {}))[y] = v, f & d.R && m && !m[y] && u(m, y, v)));
      };
      d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, t.exports = d;
    }, function(t, l) {
      t.exports = function(e) {
        try {
          return !!e();
        } catch {
          return !0;
        }
      };
    }, function(t, l) {
      t.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    }, function(t, l, e) {
      var r = e(38), n = e(17);
      t.exports = Object.keys || function(i) {
        return r(i, n);
      };
    }, function(t, l) {
      t.exports = function(e, r) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: r };
      };
    }, function(t, l) {
      var e = 0, r = Math.random();
      t.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + r).toString(36));
      };
    }, function(t, l) {
      t.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    }, function(t, l) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(t, l) {
      t.exports = {};
    }, function(t, l) {
      t.exports = !0;
    }, function(t, l) {
      l.f = {}.propertyIsEnumerable;
    }, function(t, l, e) {
      var r = e(4).f, n = e(3), i = e(7)("toStringTag");
      t.exports = function(u, s, d) {
        u && !n(u = d ? u : u.prototype, i) && r(u, i, { configurable: !0, value: s });
      };
    }, function(t, l, e) {
      var r = e(23)("keys"), n = e(15);
      t.exports = function(i) {
        return r[i] || (r[i] = n(i));
      };
    }, function(t, l, e) {
      var r = e(2), n = "__core-js_shared__", i = r[n] || (r[n] = {});
      t.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(t, l) {
      var e = Math.ceil, r = Math.floor;
      t.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n);
      };
    }, function(t, l, e) {
      var r = e(12);
      t.exports = function(n, i) {
        if (!r(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !r(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !r(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !r(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(t, l, e) {
      var r = e(2), n = e(8), i = e(19), u = e(27), s = e(4).f;
      t.exports = function(d) {
        var f = n.Symbol || (n.Symbol = i ? {} : r.Symbol || {});
        d.charAt(0) == "_" || d in f || s(f, d, { value: u.f(d) });
      };
    }, function(t, l, e) {
      l.f = e(7);
    }, function(t, l) {
      l.__esModule = !0, l.default = function(e, r) {
        if (!(e instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, l, e) {
      function r(u) {
        return u && u.__esModule ? u : { default: u };
      }
      l.__esModule = !0;
      var n = e(45), i = r(n);
      l.default = function() {
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
    }, function(t, l) {
      var e = {}.toString;
      t.exports = function(r) {
        return e.call(r).slice(8, -1);
      };
    }, function(t, l, e) {
      var r = e(12), n = e(2).document, i = r(n) && r(n.createElement);
      t.exports = function(u) {
        return i ? n.createElement(u) : {};
      };
    }, function(t, l, e) {
      t.exports = !e(1) && !e(11)(function() {
        return Object.defineProperty(e(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t, l, e) {
      var r = e(19), n = e(10), i = e(39), u = e(6), s = e(3), d = e(18), f = e(61), c = e(21), h = e(67), y = e(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", E = "values", R = function() {
        return this;
      };
      t.exports = function(N, C, L, b, m, M, w) {
        f(L, C, b);
        var T, O, j, P = function(ee) {
          if (!S && ee in U)
            return U[ee];
          switch (ee) {
            case k:
              return function() {
                return new L(this, ee);
              };
            case E:
              return function() {
                return new L(this, ee);
              };
          }
          return function() {
            return new L(this, ee);
          };
        }, J = C + " Iterator", B = m == E, Y = !1, U = N.prototype, W = U[y] || U[v] || m && U[m], q = W || P(m), K = m ? B ? P("entries") : q : void 0, ie = C == "Array" && U.entries || W;
        if (ie && (j = h(ie.call(new N())), j !== Object.prototype && (c(j, J, !0), r || s(j, y) || u(j, y, R))), B && W && W.name !== E && (Y = !0, q = function() {
          return W.call(this);
        }), r && !w || !S && !Y && U[y] || u(U, y, q), d[C] = q, d[J] = R, m)
          if (T = { values: B ? q : P(E), keys: M ? q : P(k), entries: K }, w)
            for (O in T)
              O in U || i(U, O, T[O]);
          else
            n(n.P + n.F * (S || Y), C, T);
        return T;
      };
    }, function(t, l, e) {
      var r = e(9), n = e(35), i = e(17), u = e(22)("IE_PROTO"), s = function() {
      }, d = "prototype", f = function() {
        var c, h = e(31)("iframe"), y = i.length, S = "<", v = ">";
        for (h.style.display = "none", e(58).appendChild(h), h.src = "javascript:", c = h.contentWindow.document, c.open(), c.write(S + "script" + v + "document.F=Object" + S + "/script" + v), c.close(), f = c.F; y--; )
          delete f[d][i[y]];
        return f();
      };
      t.exports = Object.create || function(c, h) {
        var y;
        return c !== null ? (s[d] = r(c), y = new s(), s[d] = null, y[u] = c) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(t, l, e) {
      var r = e(4), n = e(9), i = e(13);
      t.exports = e(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, f = i(s), c = f.length, h = 0; c > h; )
          r.f(u, d = f[h++], s[d]);
        return u;
      };
    }, function(t, l, e) {
      var r = e(38), n = e(17).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(i) {
        return r(i, n);
      };
    }, function(t, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(t, l, e) {
      var r = e(3), n = e(5), i = e(55)(!1), u = e(22)("IE_PROTO");
      t.exports = function(s, d) {
        var f, c = n(s), h = 0, y = [];
        for (f in c)
          f != u && r(c, f) && y.push(f);
        for (; d.length > h; )
          r(c, f = d[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(t, l, e) {
      t.exports = e(6);
    }, function(t, l, e) {
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
      var d = e(48), f = r(d), c = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, E, R) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(c.masks[k] || k || c.masks.default);
          var N = k.slice(0, 4);
          N !== "UTC:" && N !== "GMT:" || (k = k.slice(4), E = !0, N === "GMT:" && (R = !0));
          var C = E ? "getUTC" : "get", L = v[C + "Date"](), b = v[C + "Day"](), m = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), O = v[C + "Seconds"](), j = v[C + "Milliseconds"](), P = E ? 0 : v.getTimezoneOffset(), J = i(v), B = u(v), Y = { d: L, dd: n(L), ddd: c.i18n.dayNames[b], dddd: c.i18n.dayNames[b + 7], m: m + 1, mm: n(m + 1), mmm: c.i18n.monthNames[m], mmmm: c.i18n.monthNames[m + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: O, ss: n(O), l: n(j, 3), L: n(Math.round(j / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: R ? "GMT" : E ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (P > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(P) / 60) + Math.abs(P) % 60, 4), S: ["th", "st", "nd", "rd"][L % 10 > 3 ? 0 : (L % 100 - L % 10 != 10) * L % 10], W: J, N: B };
          return k.replace(h, function(U) {
            return U in Y ? Y[U] : U.slice(1, U.length - 1);
          });
        };
      }();
      c.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, c.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = c;
    }, function(t, l, e) {
      function r(R) {
        return R && R.__esModule ? R : { default: R };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = e(44), i = r(n), u = e(28), s = r(u), d = e(29), f = r(d), c = e(43), h = r(c), y = e(42), S = r(y), v = e(40), k = r(v), E = function() {
        function R(N) {
          var C = this;
          (0, s.default)(this, R), this.element = N, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var b = C.format || "yyyy-mm-dd", m = C.element.value.match(/(\d+)/g), M = 0, w = {};
            return b.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(m[w.yyyy], m[w.mm] - 1, m[w.dd]);
          }, set: function(b) {
            C.element.value = (0, k.default)(b, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(b) {
            C.element.valueAsDate = new Date(b);
          } } });
          var L = function(b) {
            var m = C.element;
            m.locale = C.localeText, h.default.attachTo(m);
          };
          this.element.addEventListener("focus", L), this.element.addEventListener("mouseup", L), this.element.addEventListener("keydown", function(b) {
            var m = new Date();
            switch (b.keyCode) {
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
          }), this.element.addEventListener("keyup", function(b) {
            h.default.sync();
          });
        }
        return (0, f.default)(R, [{ key: "getLocaleText", value: function() {
          var N = this.locale.toLowerCase();
          for (var C in S.default) {
            var L = C.split("_");
            if (L.map(function(b) {
              return b.toLowerCase();
            }), ~L.indexOf(N) || ~L.indexOf(N.substr(0, 2)))
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
          for (var L = 0; L < C; ++L)
            new R(N[L]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var N = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = N.length;
          if (!C)
            return !1;
          for (var L = 0; L < C; ++L)
            new R(N[L]);
        } }]), R;
      }();
      l.default = E;
    }, function(t, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var e = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = e;
    }, function(t, l, e) {
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
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
            var v = new Date();
            c.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), c.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var E = c.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), c.date.setDate(parseInt(k.textContent)), c.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (c.isOpen) {
              for (var k = v.target, E = k === c.container || k === c.input; !E && (k = k.parentNode); )
                E = k === c.container;
              (v.target.getAttribute("type") !== "date" && !E || !E) && c.hide();
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
          }, E = y.right - v;
          y.right < v ? (E = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
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
          for (var c = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(c, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && c === v.getFullYear() && h === v.getMonth(), E = [], R = 0; R < S + y; ++R)
            if (R % 7 === 0 && E.push(`
          ` + (R !== 0 ? "</tr>" : "") + `
          <tr>
        `), R + 1 <= y)
              E.push("<td></td>");
            else {
              var N = R + 1 - y, C = k && v.getDate() === N;
              E.push("<td data-day " + (C ? "data-selected" : "") + `>
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
        } }], [{ key: "createRangeSelect", value: function(c, h, y, S) {
          c.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            c.appendChild(k);
            var E = S ? S[v - h] : v;
            k.text = E, k.value = v;
          }
          return c;
        } }, { key: "absoluteDate", value: function(c) {
          return c && new Date(c.getTime() + 60 * c.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new d(), l.default = window.thePicker;
    }, function(t, l, e) {
      t.exports = { default: e(49), __esModule: !0 };
    }, function(t, l, e) {
      t.exports = { default: e(50), __esModule: !0 };
    }, function(t, l, e) {
      t.exports = { default: e(51), __esModule: !0 };
    }, function(t, l, e) {
      t.exports = { default: e(52), __esModule: !0 };
    }, function(t, l, e) {
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      l.__esModule = !0;
      var n = e(47), i = r(n), u = e(46), s = r(u), d = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      l.default = typeof s.default == "function" && d(i.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : d(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : d(f);
      };
    }, function(t, l, e) {
      e(73);
      var r = e(8).Object;
      t.exports = function(n, i) {
        return r.defineProperties(n, i);
      };
    }, function(t, l, e) {
      e(74);
      var r = e(8).Object;
      t.exports = function(n, i, u) {
        return r.defineProperty(n, i, u);
      };
    }, function(t, l, e) {
      e(77), e(75), e(78), e(79), t.exports = e(8).Symbol;
    }, function(t, l, e) {
      e(76), e(80), t.exports = e(27).f("iterator");
    }, function(t, l) {
      t.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    }, function(t, l) {
      t.exports = function() {
      };
    }, function(t, l, e) {
      var r = e(5), n = e(70), i = e(69);
      t.exports = function(u) {
        return function(s, d, f) {
          var c, h = r(s), y = n(h.length), S = i(f, y);
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
    }, function(t, l, e) {
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
    }, function(t, l, e) {
      var r = e(13), n = e(37), i = e(20);
      t.exports = function(u) {
        var s = r(u), d = n.f;
        if (d)
          for (var f, c = d(u), h = i.f, y = 0; c.length > y; )
            h.call(u, f = c[y++]) && s.push(f);
        return s;
      };
    }, function(t, l, e) {
      t.exports = e(2).document && document.documentElement;
    }, function(t, l, e) {
      var r = e(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(t, l, e) {
      var r = e(30);
      t.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(t, l, e) {
      var r = e(34), n = e(14), i = e(21), u = {};
      e(6)(u, e(7)("iterator"), function() {
        return this;
      }), t.exports = function(s, d, f) {
        s.prototype = r(u, { next: n(1, f) }), i(s, d + " Iterator");
      };
    }, function(t, l) {
      t.exports = function(e, r) {
        return { value: r, done: !!e };
      };
    }, function(t, l, e) {
      var r = e(13), n = e(5);
      t.exports = function(i, u) {
        for (var s, d = n(i), f = r(d), c = f.length, h = 0; c > h; )
          if (d[s = f[h++]] === u)
            return s;
      };
    }, function(t, l, e) {
      var r = e(15)("meta"), n = e(12), i = e(3), u = e(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, f = !e(11)(function() {
        return d(Object.preventExtensions({}));
      }), c = function(k) {
        u(k, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, E) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, r)) {
          if (!d(k))
            return "F";
          if (!E)
            return "E";
          c(k);
        }
        return k[r].i;
      }, y = function(k, E) {
        if (!i(k, r)) {
          if (!d(k))
            return !0;
          if (!E)
            return !1;
          c(k);
        }
        return k[r].w;
      }, S = function(k) {
        return f && v.NEED && d(k) && !i(k, r) && c(k), k;
      }, v = t.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(t, l, e) {
      var r = e(20), n = e(14), i = e(5), u = e(25), s = e(3), d = e(32), f = Object.getOwnPropertyDescriptor;
      l.f = e(1) ? f : function(c, h) {
        if (c = i(c), h = u(h, !0), d)
          try {
            return f(c, h);
          } catch {
          }
        if (s(c, h))
          return n(!r.f.call(c, h), c[h]);
      };
    }, function(t, l, e) {
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
    }, function(t, l, e) {
      var r = e(3), n = e(71), i = e(22)("IE_PROTO"), u = Object.prototype;
      t.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(t, l, e) {
      var r = e(24), n = e(16);
      t.exports = function(i) {
        return function(u, s) {
          var d, f, c = String(n(u)), h = r(s), y = c.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (d = c.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === y || (f = c.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? c.charAt(h) : d : i ? c.slice(h, h + 2) : (d - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(t, l, e) {
      var r = e(24), n = Math.max, i = Math.min;
      t.exports = function(u, s) {
        return u = r(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(t, l, e) {
      var r = e(24), n = Math.min;
      t.exports = function(i) {
        return i > 0 ? n(r(i), 9007199254740991) : 0;
      };
    }, function(t, l, e) {
      var r = e(16);
      t.exports = function(n) {
        return Object(r(n));
      };
    }, function(t, l, e) {
      var r = e(54), n = e(62), i = e(18), u = e(5);
      t.exports = e(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, f) : d == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(t, l, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperties: e(35) });
    }, function(t, l, e) {
      var r = e(10);
      r(r.S + r.F * !e(1), "Object", { defineProperty: e(4).f });
    }, function(t, l) {
    }, function(t, l, e) {
      var r = e(68)(!0);
      e(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = r(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(t, l, e) {
      var r = e(2), n = e(3), i = e(1), u = e(10), s = e(39), d = e(64).KEY, f = e(11), c = e(23), h = e(21), y = e(15), S = e(7), v = e(27), k = e(26), E = e(63), R = e(57), N = e(60), C = e(9), L = e(5), b = e(25), m = e(14), M = e(34), w = e(66), T = e(65), O = e(4), j = e(13), P = T.f, J = O.f, B = w.f, Y = r.Symbol, U = r.JSON, W = U && U.stringify, q = "prototype", K = S("_hidden"), ie = S("toPrimitive"), ee = {}.propertyIsEnumerable, ne = c("symbol-registry"), X = c("symbols"), ce = c("op-symbols"), I = Object[q], ae = typeof Y == "function", D = r.QObject, le = !D || !D[q] || !D[q].findChild, F = i && f(function() {
        return M(J({}, "a", { get: function() {
          return J(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, H) {
        var $ = P(I, A);
        $ && delete I[A], J(x, A, H), $ && x !== I && J(I, A, $);
      } : J, z = function(x) {
        var A = X[x] = M(Y[q]);
        return A._k = x, A;
      }, V = ae && typeof Y.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof Y;
      }, pe = function(x, A, H) {
        return x === I && pe(ce, A, H), C(x), A = b(A, !0), C(H), n(X, A) ? (H.enumerable ? (n(x, K) && x[K][A] && (x[K][A] = !1), H = M(H, { enumerable: m(0, !1) })) : (n(x, K) || J(x, K, m(1, {})), x[K][A] = !0), F(x, A, H)) : J(x, A, H);
      }, Ne = function(x, A) {
        C(x);
        for (var H, $ = R(A = L(A)), ue = 0, he = $.length; he > ue; )
          pe(x, H = $[ue++], A[H]);
        return x;
      }, Re = function(x, A) {
        return A === void 0 ? M(x) : Ne(M(x), A);
      }, Q = function(x) {
        var A = ee.call(this, x = b(x, !0));
        return !(this === I && n(X, x) && !n(ce, x)) && (!(A || !n(this, x) || !n(X, x) || n(this, K) && this[K][x]) || A);
      }, ve = function(x, A) {
        if (x = L(x), A = b(A, !0), x !== I || !n(X, A) || n(ce, A)) {
          var H = P(x, A);
          return !H || !n(X, A) || n(x, K) && x[K][A] || (H.enumerable = !0), H;
        }
      }, xe = function(x) {
        for (var A, H = B(L(x)), $ = [], ue = 0; H.length > ue; )
          n(X, A = H[ue++]) || A == K || A == d || $.push(A);
        return $;
      }, ke = function(x) {
        for (var A, H = x === I, $ = B(H ? ce : L(x)), ue = [], he = 0; $.length > he; )
          !n(X, A = $[he++]) || H && !n(I, A) || ue.push(X[A]);
        return ue;
      };
      ae || (Y = function() {
        if (this instanceof Y)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(H) {
          this === I && A.call(ce, H), n(this, K) && n(this[K], x) && (this[K][x] = !1), F(this, x, m(1, H));
        };
        return i && le && F(I, x, { configurable: !0, set: A }), z(x);
      }, s(Y[q], "toString", function() {
        return this._k;
      }), T.f = ve, O.f = pe, e(36).f = w.f = xe, e(20).f = Q, e(37).f = ke, i && !e(19) && s(I, "propertyIsEnumerable", Q, !0), v.f = function(x) {
        return z(S(x));
      }), u(u.G + u.W + u.F * !ae, { Symbol: Y });
      for (var _e = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ye = 0; _e.length > ye; )
        S(_e[ye++]);
      for (var _e = j(S.store), ye = 0; _e.length > ye; )
        k(_e[ye++]);
      u(u.S + u.F * !ae, "Symbol", { for: function(x) {
        return n(ne, x += "") ? ne[x] : ne[x] = Y(x);
      }, keyFor: function(x) {
        if (V(x))
          return E(ne, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        le = !0;
      }, useSimple: function() {
        le = !1;
      } }), u(u.S + u.F * !ae, "Object", { create: Re, defineProperty: pe, defineProperties: Ne, getOwnPropertyDescriptor: ve, getOwnPropertyNames: xe, getOwnPropertySymbols: ke }), U && u(u.S + u.F * (!ae || f(function() {
        var x = Y();
        return W([x]) != "[null]" || W({ a: x }) != "{}" || W(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !V(x)) {
          for (var A, H, $ = [x], ue = 1; arguments.length > ue; )
            $.push(arguments[ue++]);
          return A = $[1], typeof A == "function" && (H = A), !H && N(A) || (A = function(he, be) {
            if (H && (be = H.call(this, he, be)), !V(be))
              return be;
          }), $[1] = A, W.apply(U, $);
        }
      } }), Y[q][ie] || e(6)(Y[q], ie, Y[q].valueOf), h(Y, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(t, l, e) {
      e(26)("asyncIterator");
    }, function(t, l, e) {
      e(26)("observable");
    }, function(t, l, e) {
      e(72);
      for (var r = e(2), n = e(6), i = e(18), u = e(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var f = s[d], c = r[f], h = c && c.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
      }
    }, function(t, l, e) {
      l = t.exports = e(82)(), l.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(t, l) {
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
    }, function(t, l, e) {
      function r(b, m) {
        for (var M = 0; M < b.length; M++) {
          var w = b[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](w.parts[O]);
            for (; O < w.parts.length; O++)
              T.parts.push(f(w.parts[O], m));
          } else {
            for (var j = [], O = 0; O < w.parts.length; O++)
              j.push(f(w.parts[O], m));
            S[w.id] = { id: w.id, refs: 1, parts: j };
          }
        }
      }
      function n(b) {
        for (var m = [], M = {}, w = 0; w < b.length; w++) {
          var T = b[w], O = T[0], j = T[1], P = T[2], J = T[3], B = { css: j, media: P, sourceMap: J };
          M[O] ? M[O].parts.push(B) : m.push(M[O] = { id: O, parts: [B] });
        }
        return m;
      }
      function i(b, m) {
        var M = E(), w = C[C.length - 1];
        if (b.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(m, w.nextSibling) : M.appendChild(m) : M.insertBefore(m, M.firstChild), C.push(m);
        else {
          if (b.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(m);
        }
      }
      function u(b) {
        b.parentNode.removeChild(b);
        var m = C.indexOf(b);
        m >= 0 && C.splice(m, 1);
      }
      function s(b) {
        var m = document.createElement("style");
        return m.type = "text/css", i(b, m), m;
      }
      function d(b) {
        var m = document.createElement("link");
        return m.rel = "stylesheet", i(b, m), m;
      }
      function f(b, m) {
        var M, w, T;
        if (m.singleton) {
          var O = N++;
          M = R || (R = s(m)), w = c.bind(null, M, O, !1), T = c.bind(null, M, O, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = d(m), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(m), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(b), function(j) {
          if (j) {
            if (j.css === b.css && j.media === b.media && j.sourceMap === b.sourceMap)
              return;
            w(b = j);
          } else
            T();
        };
      }
      function c(b, m, M, w) {
        var T = M ? "" : w.css;
        if (b.styleSheet)
          b.styleSheet.cssText = L(m, T);
        else {
          var O = document.createTextNode(T), j = b.childNodes;
          j[m] && b.removeChild(j[m]), j.length ? b.insertBefore(O, j[m]) : b.appendChild(O);
        }
      }
      function h(b, m) {
        var M = m.css, w = m.media;
        if (w && b.setAttribute("media", w), b.styleSheet)
          b.styleSheet.cssText = M;
        else {
          for (; b.firstChild; )
            b.removeChild(b.firstChild);
          b.appendChild(document.createTextNode(M));
        }
      }
      function y(b, m) {
        var M = m.css, w = m.sourceMap;
        w && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(w)))) + " */");
        var T = new Blob([M], { type: "text/css" }), O = b.href;
        b.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var S = {}, v = function(b) {
        var m;
        return function() {
          return typeof m > "u" && (m = b.apply(this, arguments)), m;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), R = null, N = 0, C = [];
      t.exports = function(b, m) {
        m = m || {}, typeof m.singleton > "u" && (m.singleton = k()), typeof m.insertAt > "u" && (m.insertAt = "bottom");
        var M = n(b);
        return r(M, m), function(w) {
          for (var T = [], O = 0; O < M.length; O++) {
            var j = M[O], P = S[j.id];
            P.refs--, T.push(P);
          }
          if (w) {
            var J = n(w);
            r(J, m);
          }
          for (var O = 0; O < T.length; O++) {
            var P = T[O];
            if (P.refs === 0) {
              for (var B = 0; B < P.parts.length; B++)
                P.parts[B]();
              delete S[P.id];
            }
          }
        };
      };
      var L = function() {
        var b = [];
        return function(m, M) {
          return b[m] = M, b.filter(Boolean).join(`
`);
        };
      }();
    }, function(t, l, e) {
      var r = e(81);
      typeof r == "string" && (r = [[t.id, r, ""]]), e(83)(r, {}), r.locals && (t.exports = r.locals);
    }]);
  });
})(Ct);
function St(a) {
  let o, t, l;
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
  let r = e(a), n = r(a);
  return {
    c() {
      o = g("div"), n.c(), _(o, "class", t = `p-4 shadow-${/*shadow*/
      a[3]}`), _(o, "style", l = `
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
      de(i, o, u), n.m(o, null);
    },
    p(i, u) {
      r === (r = e(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      8 && t !== (t = `p-4 shadow-${/*shadow*/
      i[3]}`) && _(o, "class", t), u[0] & /*background, border_radius, text_color, opacity, height, width*/
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
`) && _(o, "style", l);
    },
    d(i) {
      i && se(o), n.d();
    }
  };
}
function Dt(a) {
  let o, t, l, e, r, n;
  function i(d, f) {
    return (
      /*statusCheckError*/
      d[12] === lt ? Pt : Lt
    );
  }
  let u = i(a), s = u(a);
  return {
    c() {
      o = g("div"), t = g("div"), l = g("h1"), l.textContent = "An error occured", e = G(), s.c(), _(l, "class", "text-2xl"), _(t, "class", "flex flex-col items-center gap-4"), _(o, "class", r = `p-4 shadow-${/*shadow*/
      a[3]}`), _(o, "style", n = `
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
    m(d, f) {
      de(d, o, f), p(o, t), p(t, l), p(t, e), s.m(t, null);
    },
    p(d, f) {
      u === (u = i(d)) && s ? s.p(d, f) : (s.d(1), s = u(d), s && (s.c(), s.m(t, null))), f[0] & /*shadow*/
      8 && r !== (r = `p-4 shadow-${/*shadow*/
      d[3]}`) && _(o, "class", r), f[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && n !== (n = `
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
`) && _(o, "style", n);
    },
    d(d) {
      d && se(o), s.d();
    }
  };
}
function Ot(a) {
  let o, t, l, e, r, n, i;
  return {
    c() {
      o = g("div"), t = g("h1"), t.textContent = "An unknown error", l = G(), e = g("button"), r = Z("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "rounded-lg bg-black px-6 py-3 mt-4"), re(
        e,
        "background-color",
        /*button_color*/
        a[7]
      ), re(
        e,
        "color",
        /*text_color*/
        a[6]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      de(u, o, s), p(o, t), p(o, l), p(o, e), p(e, r), n || (i = Je(
        e,
        "click",
        /*click_handler_2*/
        a[36]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      128 && re(
        e,
        "background-color",
        /*button_color*/
        u[7]
      ), s[0] & /*text_color*/
      64 && re(
        e,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && se(o), n = !1, i();
    }
  };
}
function Et(a) {
  let o, t, l, e, r, n, i, u, s, d;
  return {
    c() {
      o = g("div"), t = g("h1"), t.textContent = "Error", l = G(), e = g("pre"), r = Z(
        /*error*/
        a[10]
      ), n = G(), i = g("button"), u = Z("Reset Form"), _(t, "class", "text-2xl"), _(e, "class", "py-3"), _(i, "class", "rounded-lg bg-black px-6 py-3 mt-4"), re(
        i,
        "background-color",
        /*button_color*/
        a[7]
      ), re(
        i,
        "color",
        /*text_color*/
        a[6]
      ), _(o, "class", "flex flex-col items-center");
    },
    m(f, c) {
      de(f, o, c), p(o, t), p(o, l), p(o, e), p(e, r), p(o, n), p(o, i), p(i, u), s || (d = Je(
        i,
        "click",
        /*click_handler_1*/
        a[35]
      ), s = !0);
    },
    p(f, c) {
      c[0] & /*error*/
      1024 && ge(
        r,
        /*error*/
        f[10]
      ), c[0] & /*button_color*/
      128 && re(
        i,
        "background-color",
        /*button_color*/
        f[7]
      ), c[0] & /*text_color*/
      64 && re(
        i,
        "color",
        /*text_color*/
        f[6]
      );
    },
    d(f) {
      f && se(o), s = !1, d();
    }
  };
}
function At(a) {
  let o, t, l, e, r, n, i = (
    /*backendData*/
    a[8].data[0].third_party_exchange_rate + ""
  ), u, s, d, f, c, h = (
    /*backendData*/
    a[8].data[0].ccy_pair + ""
  ), y, S, v, k, E, R = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), N, C, L = (
    /*backendData*/
    a[8].data[0].third_party_profit + ""
  ), b, m, M, w, T, O, j, P, J, B = (
    /*backendData*/
    a[8].data[0].integritas_rate + ""
  ), Y, U, W, q, K = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), ie, ee, ne = (
    /*backendData*/
    a[8].data[0].integritas_savings + ""
  ), X, ce, I, ae, D, le, F = (
    /*shouldShowInterbankRate*/
    a[17] && nt(a)
  );
  return {
    c() {
      o = g("div"), t = g("div"), l = g("h1"), l.textContent = "Your Provider", e = G(), r = g("p"), n = Z("Your exchange rate was "), u = Z(i), s = G(), F && F.c(), d = G(), f = g("p"), c = Z("Your provider's markup was TODO "), y = Z(h), S = Z("%."), v = G(), k = g("p"), E = Z(`Your provider
                        charged `), N = Z(R), C = G(), b = Z(L), m = Z(` on this
                        trade.`), M = G(), w = g("div"), T = g("h1"), O = Z(
        /*name*/
        a[5]
      ), j = G(), P = g("p"), J = Z("Our exchange rate was "), Y = Z(B), U = G(), W = g("p"), q = Z(`We would've saved
                        you `), ie = Z(K), ee = G(), X = Z(ne), ce = G(), I = g("button"), ae = Z("Calculate again"), _(l, "class", "text-2xl"), _(r, "class", "text-sm"), _(f, "class", "text-sm"), _(k, "class", "text-sm"), _(t, "class", "flex flex-col gap-2"), _(T, "class", "text-2xl mt-4"), _(P, "class", "text-sm"), _(W, "class", "text-sm"), _(w, "class", "flex flex-col gap-2"), _(o, "class", "flex flex-col divide-y gap-4"), _(I, "class", "rounded-lg bg-black px-6 py-3 mt-4"), re(
        I,
        "background-color",
        /*button_color*/
        a[7]
      ), re(
        I,
        "color",
        /*text_color*/
        a[6]
      );
    },
    m(z, V) {
      de(z, o, V), p(o, t), p(t, l), p(t, e), p(t, r), p(r, n), p(r, u), p(t, s), F && F.m(t, null), p(t, d), p(t, f), p(f, c), p(f, y), p(f, S), p(t, v), p(t, k), p(k, E), p(k, N), p(k, C), p(k, b), p(k, m), p(o, M), p(o, w), p(w, T), p(T, O), p(w, j), p(w, P), p(P, J), p(P, Y), p(w, U), p(w, W), p(W, q), p(W, ie), p(W, ee), p(W, X), de(z, ce, V), de(z, I, V), p(I, ae), D || (le = Je(
        I,
        "click",
        /*click_handler*/
        a[34]
      ), D = !0);
    },
    p(z, V) {
      V[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      z[8].data[0].third_party_exchange_rate + "") && ge(u, i), /*shouldShowInterbankRate*/
      z[17] ? F ? F.p(z, V) : (F = nt(z), F.c(), F.m(t, d)) : F && (F.d(1), F = null), V[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      z[8].data[0].ccy_pair + "") && ge(y, h), V[0] & /*backendData*/
      256 && R !== (R = /*backendData*/
      z[8].data[0].sold_ccy + "") && ge(N, R), V[0] & /*backendData*/
      256 && L !== (L = /*backendData*/
      z[8].data[0].third_party_profit + "") && ge(b, L), V[0] & /*name*/
      32 && ge(
        O,
        /*name*/
        z[5]
      ), V[0] & /*backendData*/
      256 && B !== (B = /*backendData*/
      z[8].data[0].integritas_rate + "") && ge(Y, B), V[0] & /*backendData*/
      256 && K !== (K = /*backendData*/
      z[8].data[0].sold_ccy + "") && ge(ie, K), V[0] & /*backendData*/
      256 && ne !== (ne = /*backendData*/
      z[8].data[0].integritas_savings + "") && ge(X, ne), V[0] & /*button_color*/
      128 && re(
        I,
        "background-color",
        /*button_color*/
        z[7]
      ), V[0] & /*text_color*/
      64 && re(
        I,
        "color",
        /*text_color*/
        z[6]
      );
    },
    d(z) {
      z && se(o), F && F.d(), z && se(ce), z && se(I), D = !1, le();
    }
  };
}
function Tt(a) {
  let o, t, l, e, r, n, i, u, s, d, f, c, h, y, S, v, k, E, R, N, C, L, b, m, M, w, T, O, j, P, J, B, Y, U, W, q, K, ie, ee, ne, X, ce, I, ae, D, le, F, z, V, pe, Ne, Re, Q, ve, xe, ke, _e, ye, x, A, H, $, ue, he, be, Ce, Se, De, Oe, Ee, qe, Ue, Fe, Ie, Ve, fe = (
    /*shouldShowEmail*/
    a[16] && ot(a)
  );
  function Qe(oe, me) {
    return (
      /*isFetching*/
      oe[11] ? Nt : jt
    );
  }
  let Ye = Qe(a), we = Ye(a);
  return {
    c() {
      o = g("form"), t = g("div"), l = g("div"), e = g("div"), r = g("label"), r.textContent = "Select Date", n = G(), i = g("input"), u = G(), s = g("div"), d = g("label"), d.textContent = "Select Time", f = G(), c = g("input"), h = G(), y = g("div"), S = g("div"), v = g("label"), v.textContent = "Sell Amount", k = G(), E = g("input"), R = G(), N = g("div"), C = g("label"), L = Z("Sell Currency"), b = G(), m = g("select"), M = g("option"), M.textContent = "GBP", w = g("option"), w.textContent = "USD", T = g("option"), T.textContent = "EUR", O = g("option"), O.textContent = "JPY", j = g("option"), j.textContent = "CHF", P = g("option"), P.textContent = "CNY", J = g("option"), J.textContent = "NZD", B = g("option"), B.textContent = "SGD", Y = g("option"), Y.textContent = "INR", U = g("option"), U.textContent = "AUD", W = g("option"), W.textContent = "CAD", q = g("option"), q.textContent = "HKD", K = g("option"), K.textContent = "MYR", ie = g("option"), ie.textContent = "NOK", ee = g("option"), ee.textContent = "ZAR", ne = g("option"), ne.textContent = "RUB", X = g("option"), X.textContent = "SEK", ce = G(), I = g("div"), ae = g("div"), D = g("label"), D.textContent = "Buy Amount", le = G(), F = g("input"), z = G(), V = g("div"), pe = g("label"), Ne = Z("Buy Currency"), Re = G(), Q = g("select"), ve = g("option"), ve.textContent = "USD", xe = g("option"), xe.textContent = "GBP", ke = g("option"), ke.textContent = "EUR", _e = g("option"), _e.textContent = "JPY", ye = g("option"), ye.textContent = "CHF", x = g("option"), x.textContent = "CNY", A = g("option"), A.textContent = "NZD", H = g("option"), H.textContent = "SGD", $ = g("option"), $.textContent = "INR", ue = g("option"), ue.textContent = "AUD", he = g("option"), he.textContent = "CAD", be = g("option"), be.textContent = "HKD", Ce = g("option"), Ce.textContent = "MYR", Se = g("option"), Se.textContent = "NOK", De = g("option"), De.textContent = "ZAR", Oe = g("option"), Oe.textContent = "RUB", Ee = g("option"), Ee.textContent = "SEK", qe = G(), fe && fe.c(), Ue = G(), Fe = g("div"), we.c(), _(r, "for", "date"), _(i, "id", "date"), _(i, "type", "date"), _(i, "class", "w-full rounded-md px-3 py-2 mt-4"), _(i, "name", "date"), _(i, "placeholder", "Select date"), i.required = !0, _(
        i,
        "style",
        /*input_style*/
        a[15]
      ), _(e, "class", "w-full"), _(d, "for", "time"), _(c, "id", "time"), _(c, "type", "time"), _(c, "class", "w-full rounded-md px-3 py-2 mt-4"), _(c, "name", "time"), _(c, "placeholder", "Select Time"), c.required = !0, _(
        c,
        "style",
        /*input_style*/
        a[15]
      ), _(s, "class", "w-full"), _(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), _(v, "for", "sold_notional"), _(E, "id", "sold_notional"), _(E, "type", "number"), _(E, "step", ".01"), _(E, "class", "w-full rounded-md px-3 py-2 mt-4"), _(E, "name", "sold_notional"), _(E, "placeholder", "10000"), E.required = !0, _(
        E,
        "style",
        /*input_style*/
        a[15]
      ), _(S, "class", "w-full"), _(C, "for", "sold_ccy"), re(
        C,
        "color",
        /*text_color*/
        a[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, j.__value = "CHF", j.value = j.__value, P.__value = "CNY", P.value = P.__value, J.__value = "NZD", J.value = J.__value, B.__value = "SGD", B.value = B.__value, Y.__value = "INR", Y.value = Y.__value, U.__value = "AUD", U.value = U.__value, W.__value = "CAD", W.value = W.__value, q.__value = "HKD", q.value = q.__value, K.__value = "MYR", K.value = K.__value, ie.__value = "NOK", ie.value = ie.__value, ee.__value = "ZAR", ee.value = ee.__value, ne.__value = "RUB", ne.value = ne.__value, X.__value = "SEK", X.value = X.__value, _(m, "name", "sold_ccy"), _(m, "id", "sold_ccy"), _(m, "class", "w-full rounded-md px-3 py-2 mt-4"), m.required = !0, _(
        m,
        "style",
        /*input_style*/
        a[15]
      ), _(N, "class", "w-full"), _(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(D, "for", "bought_notional"), _(F, "id", "bought_notional"), _(F, "type", "number"), _(F, "step", ".01"), _(F, "class", "w-full rounded-md px-3 py-2 mt-4"), _(F, "name", "bought_notional"), _(F, "placeholder", "10000"), F.required = !0, _(
        F,
        "style",
        /*input_style*/
        a[15]
      ), _(ae, "class", "w-full"), _(pe, "for", "bought_ccy"), re(
        pe,
        "color",
        /*text_color*/
        a[6]
      ), ve.selected = !0, ve.__value = "USD", ve.value = ve.__value, xe.__value = "GBP", xe.value = xe.__value, ke.__value = "EUR", ke.value = ke.__value, _e.__value = "JPY", _e.value = _e.__value, ye.__value = "CHF", ye.value = ye.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, H.__value = "SGD", H.value = H.__value, $.__value = "INR", $.value = $.__value, ue.__value = "AUD", ue.value = ue.__value, he.__value = "CAD", he.value = he.__value, be.__value = "HKD", be.value = be.__value, Ce.__value = "MYR", Ce.value = Ce.__value, Se.__value = "NOK", Se.value = Se.__value, De.__value = "ZAR", De.value = De.__value, Oe.__value = "RUB", Oe.value = Oe.__value, Ee.__value = "SEK", Ee.value = Ee.__value, _(Q, "name", "bought_ccy"), _(Q, "id", "bought_ccy"), _(Q, "class", "w-full rounded-md px-3 py-2 mt-4"), Q.required = !0, _(
        Q,
        "style",
        /*input_style*/
        a[15]
      ), _(V, "class", "w-full"), _(I, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), _(t, "class", "flex flex-col sm:gap-4");
    },
    m(oe, me) {
      de(oe, o, me), p(o, t), p(t, l), p(l, e), p(e, r), p(e, n), p(e, i), p(l, u), p(l, s), p(s, d), p(s, f), p(s, c), p(t, h), p(t, y), p(y, S), p(S, v), p(S, k), p(S, E), p(y, R), p(y, N), p(N, C), p(C, L), p(N, b), p(N, m), p(m, M), p(m, w), p(m, T), p(m, O), p(m, j), p(m, P), p(m, J), p(m, B), p(m, Y), p(m, U), p(m, W), p(m, q), p(m, K), p(m, ie), p(m, ee), p(m, ne), p(m, X), p(t, ce), p(t, I), p(I, ae), p(ae, D), p(ae, le), p(ae, F), p(I, z), p(I, V), p(V, pe), p(pe, Ne), p(V, Re), p(V, Q), p(Q, ve), p(Q, xe), p(Q, ke), p(Q, _e), p(Q, ye), p(Q, x), p(Q, A), p(Q, H), p(Q, $), p(Q, ue), p(Q, he), p(Q, be), p(Q, Ce), p(Q, Se), p(Q, De), p(Q, Oe), p(Q, Ee), p(t, qe), fe && fe.m(t, null), p(t, Ue), p(t, Fe), we.m(Fe, null), Ie || (Ve = Je(
        o,
        "submit",
        /*handleFormSubmit*/
        a[19]
      ), Ie = !0);
    },
    p(oe, me) {
      me[0] & /*input_style*/
      32768 && _(
        i,
        "style",
        /*input_style*/
        oe[15]
      ), me[0] & /*input_style*/
      32768 && _(
        c,
        "style",
        /*input_style*/
        oe[15]
      ), me[0] & /*input_style*/
      32768 && _(
        E,
        "style",
        /*input_style*/
        oe[15]
      ), me[0] & /*text_color*/
      64 && re(
        C,
        "color",
        /*text_color*/
        oe[6]
      ), me[0] & /*input_style*/
      32768 && _(
        m,
        "style",
        /*input_style*/
        oe[15]
      ), me[0] & /*input_style*/
      32768 && _(
        F,
        "style",
        /*input_style*/
        oe[15]
      ), me[0] & /*text_color*/
      64 && re(
        pe,
        "color",
        /*text_color*/
        oe[6]
      ), me[0] & /*input_style*/
      32768 && _(
        Q,
        "style",
        /*input_style*/
        oe[15]
      ), /*shouldShowEmail*/
      oe[16] ? fe ? fe.p(oe, me) : (fe = ot(oe), fe.c(), fe.m(t, Ue)) : fe && (fe.d(1), fe = null), Ye === (Ye = Qe(oe)) && we ? we.p(oe, me) : (we.d(1), we = Ye(oe), we && (we.c(), we.m(Fe, null)));
    },
    d(oe) {
      oe && se(o), fe && fe.d(), we.d(), Ie = !1, Ve();
    }
  };
}
function nt(a) {
  let o, t, l = (
    /*backendData*/
    a[8].data[0].ccy_pair + ""
  ), e, r, n = (
    /*backendData*/
    a[8].data[0].mid_market_rate + ""
  ), i, u;
  return {
    c() {
      o = g("p"), t = Z("The interbank rate "), e = Z(l), r = Z(`
                            was `), i = Z(n), u = Z("."), _(o, "class", "text-sm");
    },
    m(s, d) {
      de(s, o, d), p(o, t), p(o, e), p(o, r), p(o, i), p(o, u);
    },
    p(s, d) {
      d[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      s[8].data[0].ccy_pair + "") && ge(e, l), d[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      s[8].data[0].mid_market_rate + "") && ge(i, n);
    },
    d(s) {
      s && se(o);
    }
  };
}
function ot(a) {
  let o, t, l, e, r, n, i;
  return {
    c() {
      o = g("div"), t = g("div"), l = g("label"), l.textContent = "Email", e = G(), r = g("input"), n = G(), i = g("div"), _(l, "for", "user"), _(r, "id", "user"), _(r, "type", "email"), _(r, "class", "w-full rounded-md px-3 py-2 mt-4"), _(r, "name", "user"), _(r, "placeholder", "JohnDoe@email.com"), r.required = !0, _(
        r,
        "style",
        /*input_style*/
        a[15]
      ), _(t, "class", "w-full"), _(i, "class", "w-full"), _(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      de(u, o, s), p(o, t), p(t, l), p(t, e), p(t, r), p(o, n), p(o, i);
    },
    p(u, s) {
      s[0] & /*input_style*/
      32768 && _(
        r,
        "style",
        /*input_style*/
        u[15]
      );
    },
    d(u) {
      u && se(o);
    }
  };
}
function Nt(a) {
  let o, t, l, e, r;
  return {
    c() {
      o = g("button"), t = ze("svg"), l = ze("path"), e = ze("path"), r = Z(`
                                Loading...`), _(l, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), _(l, "fill", "#E5E7EB"), _(e, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), _(e, "fill", "currentColor"), _(t, "aria-hidden", "true"), _(t, "role", "status"), _(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), _(t, "viewBox", "0 0 100 101"), _(t, "fill", "none"), _(t, "xmlns", "http://www.w3.org/2000/svg"), o.disabled = !0, _(o, "type", "button"), _(o, "class", "font-medium rounded-lg text-sm px-6 py-3 text-center inline-flex items-center"), re(
        o,
        "background-color",
        /*button_color*/
        a[7]
      ), re(
        o,
        "color",
        /*text_color*/
        a[6]
      );
    },
    m(n, i) {
      de(n, o, i), p(o, t), p(t, l), p(t, e), p(o, r);
    },
    p(n, i) {
      i[0] & /*button_color*/
      128 && re(
        o,
        "background-color",
        /*button_color*/
        n[7]
      ), i[0] & /*text_color*/
      64 && re(
        o,
        "color",
        /*text_color*/
        n[6]
      );
    },
    d(n) {
      n && se(o);
    }
  };
}
function jt(a) {
  let o, t;
  return {
    c() {
      o = g("button"), t = Z(`See your
                                charges`), _(o, "type", "submit"), _(o, "class", "px-6 py-3 mt-6"), _(
        o,
        "style",
        /*button_style*/
        a[14]
      );
    },
    m(l, e) {
      de(l, o, e), p(o, t);
    },
    p(l, e) {
      e[0] & /*button_style*/
      16384 && _(
        o,
        "style",
        /*button_style*/
        l[14]
      );
    },
    d(l) {
      l && se(o);
    }
  };
}
function Lt(a) {
  let o, t;
  return {
    c() {
      o = g("p"), t = Z(
        /*statusCheckError*/
        a[12]
      ), _(o, "class", "text-sm");
    },
    m(l, e) {
      de(l, o, e), p(o, t);
    },
    p(l, e) {
      e[0] & /*statusCheckError*/
      4096 && ge(
        t,
        /*statusCheckError*/
        l[12]
      );
    },
    d(l) {
      l && se(o);
    }
  };
}
function Pt(a) {
  let o;
  return {
    c() {
      o = g("div"), o.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(t, l) {
      de(t, o, l);
    },
    p: Me,
    d(t) {
      t && se(o);
    }
  };
}
function Rt(a) {
  let o, t, l;
  function e(i, u) {
    return (
      /*statusCheckError*/
      i[12] ? Dt : St
    );
  }
  let r = e(a), n = r(a);
  return {
    c() {
      o = g("link"), t = G(), n.c(), l = dt(), this.c = Me, _(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), _(o, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, o), de(i, t, u), n.m(i, u), de(i, l, u);
    },
    p(i, u) {
      r === (r = e(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(l.parentNode, l)));
    },
    i: Me,
    o: Me,
    d(i) {
      se(o), i && se(t), n.d(i), i && se(l);
    }
  };
}
const rt = "http://localhost:8000", lt = "CORS_ERROR";
function Ft(a) {
  return a === "dark" ? !0 : a === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function Yt(a, o, t) {
  let l, e, r, n, i, { mode: u = "auto" } = o, { height: s = "100%" } = o, { width: d = "100%" } = o, { light_mode_background: f = "#d2d0d0" } = o, { dark_mode_background: c = "#1f2937" } = o, { light_mode_text_color: h = "#1f2937" } = o, { dark_mode_text_color: y = "#f9fafb" } = o, { dark_mode_input_background: S = "#374151" } = o, { light_mode_input_background: v = "#f9fafb" } = o, { dark_mode_button_color: k = "#374151" } = o, { light_mode_button_color: E = "#f9fafb" } = o, { border_radius: R = "0.5rem" } = o, { input_border_radius: N = "0.5rem" } = o, { shadow: C = "none" } = o, { opacity: L = 100 } = o, { name: b = "Our Results" } = o, { show_interbank_rate: m = "false" } = o, { show_email_input: M = "false" } = o;
  function w() {
    const D = new XMLHttpRequest();
    D.open("GET", `${rt}/`, !0), D.onerror = function() {
      D.status === 0 ? t(12, B = lt) : t(12, B = "We're sorry, our servers are currently down. Please try again later.");
    }, D.send();
  }
  const T = async (D) => fetch(`${rt}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  pt(() => {
    w();
  });
  let O, j = !0, P, J = !1, B;
  const Y = () => {
    t(8, O = void 0), t(9, j = !0), t(10, P = !1), t(11, J = !1);
  }, U = async (D) => {
    t(9, j = !1), t(11, J = !0), t(10, P = void 0);
    try {
      const le = await T(D);
      if (!le.ok) {
        const z = await le.json();
        throw console.log("errorRes", z), new Error(z || `HTTP error! Status: ${le.status}`);
      }
      const F = await le.json();
      t(11, J = !1), t(10, P = void 0), t(9, j = !1), t(8, O = F);
    } catch (le) {
      t(11, J = !1), t(10, P = le.message), t(9, j = !1), t(8, O = void 0);
    }
  }, W = async (D) => {
    D.preventDefault();
    const le = new FormData(D.target), F = {};
    for (let z of le) {
      const [V, pe] = z;
      F[V] = pe;
    }
    F.prospect = "", F.input_spread = "5", F.prospect_annual_flow = "", F.email_user = !1, l || (F.user = "testUserWithoutMail@gmail.com"), console.log(F), U(F);
  }, q = (D) => {
    t(33, r = D.matches);
  }, K = window.matchMedia("(prefers-color-scheme: dark)");
  K.addEventListener("change", q), ht(() => {
    K.removeEventListener("change", q);
  });
  let ie, ee, ne, X;
  const ce = (D) => Y(), I = (D) => Y(), ae = (D) => Y();
  return a.$$set = (D) => {
    "mode" in D && t(20, u = D.mode), "height" in D && t(0, s = D.height), "width" in D && t(1, d = D.width), "light_mode_background" in D && t(21, f = D.light_mode_background), "dark_mode_background" in D && t(22, c = D.dark_mode_background), "light_mode_text_color" in D && t(23, h = D.light_mode_text_color), "dark_mode_text_color" in D && t(24, y = D.dark_mode_text_color), "dark_mode_input_background" in D && t(25, S = D.dark_mode_input_background), "light_mode_input_background" in D && t(26, v = D.light_mode_input_background), "dark_mode_button_color" in D && t(27, k = D.dark_mode_button_color), "light_mode_button_color" in D && t(28, E = D.light_mode_button_color), "border_radius" in D && t(2, R = D.border_radius), "input_border_radius" in D && t(29, N = D.input_border_radius), "shadow" in D && t(3, C = D.shadow), "opacity" in D && t(4, L = D.opacity), "name" in D && t(5, b = D.name), "show_interbank_rate" in D && t(30, m = D.show_interbank_rate), "show_email_input" in D && t(31, M = D.show_email_input);
  }, a.$$.update = () => {
    a.$$.dirty[1] & /*show_email_input*/
    1 && t(16, l = M === "true"), a.$$.dirty[0] & /*show_interbank_rate*/
    1073741824 && t(17, e = m === "true"), a.$$.dirty[0] & /*mode*/
    1048576 && t(33, r = Ft(u)), a.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | a.$$.dirty[1] & /*isDarkMode*/
    4 && t(13, ie = r ? c : f), a.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | a.$$.dirty[1] & /*isDarkMode*/
    4 && t(6, ee = r ? y : h), a.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | a.$$.dirty[1] & /*isDarkMode*/
    4 && t(32, ne = r ? S : v), a.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | a.$$.dirty[1] & /*isDarkMode*/
    4 && t(7, X = r ? k : E), a.$$.dirty[0] & /*text_color, input_border_radius*/
    536870976 | a.$$.dirty[1] & /*input_background*/
    2 && t(15, n = `
    background-color: ${ne};
    color: ${ee};
    border-radius: ${N}px;
    `), a.$$.dirty[0] & /*button_color, text_color, input_border_radius*/
    536871104 && t(14, i = `
    background-color: ${X};
    color: ${ee};
    border-radius: ${N}px;
    `);
  }, [
    s,
    d,
    R,
    C,
    L,
    b,
    ee,
    X,
    O,
    j,
    P,
    J,
    B,
    ie,
    i,
    n,
    l,
    e,
    Y,
    W,
    u,
    f,
    c,
    h,
    y,
    S,
    v,
    k,
    E,
    N,
    m,
    M,
    ne,
    r,
    ce,
    I,
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
        border_radius: 2,
        input_border_radius: 29,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 30,
        show_email_input: 31
      },
      null,
      [-1, -1]
    ), o && (o.target && de(o.target, this, o.anchor), o.props && (this.$set(o.props), te()));
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
  set mode(o) {
    this.$$set({ mode: o }), te();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(o) {
    this.$$set({ height: o }), te();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(o) {
    this.$$set({ width: o }), te();
  }
  get light_mode_background() {
    return this.$$.ctx[21];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), te();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), te();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), te();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), te();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), te();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), te();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), te();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), te();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(o) {
    this.$$set({ border_radius: o }), te();
  }
  get input_border_radius() {
    return this.$$.ctx[29];
  }
  set input_border_radius(o) {
    this.$$set({ input_border_radius: o }), te();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(o) {
    this.$$set({ shadow: o }), te();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(o) {
    this.$$set({ opacity: o }), te();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(o) {
    this.$$set({ name: o }), te();
  }
  get show_interbank_rate() {
    return this.$$.ctx[30];
  }
  set show_interbank_rate(o) {
    this.$$set({ show_interbank_rate: o }), te();
  }
  get show_email_input() {
    return this.$$.ctx[31];
  }
  set show_email_input(o) {
    this.$$set({ show_email_input: o }), te();
  }
}
customElements.define("spreadm8-calc", Ht);
export {
  Ht as Spreadm8Calc
};
