"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {});
}(undefined, function (t) {
  "use strict";
  function e(t) {
    var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), { browser: n, os: e, node: !1, canvasSupported: !!document.createElement("canvas").getContext, svgSupported: "undefined" != typeof SVGRect, touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge, pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11) };
  }function n(t, e) {
    "createCanvas" === t && (gu = null), du[t] = e;
  }function i(t) {
    if (null == t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return t;var e = t,
        n = ou.call(t);if ("[object Array]" === n) {
      if (!R(t)) {
        e = [];for (var r = 0, a = t.length; a > r; r++) {
          e[r] = i(t[r]);
        }
      }
    } else if (au[n]) {
      if (!R(t)) {
        var o = t.constructor;if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);for (var r = 0, a = t.length; a > r; r++) {
            e[r] = i(t[r]);
          }
        }
      }
    } else if (!ru[n] && !R(t) && !I(t)) {
      e = {};for (var s in t) {
        t.hasOwnProperty(s) && (e[s] = i(t[s]));
      }
    }return e;
  }function r(t, e, n) {
    if (!b(e) || !b(t)) return n ? i(e) : t;for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var o = t[a],
            s = e[a];!b(s) || !b(o) || _(s) || _(o) || I(s) || I(o) || S(s) || S(o) || R(s) || R(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);
      }
    }return t;
  }function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) {
      n = r(n, t[i], e);
    }return n;
  }function o(t, e) {
    for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }return t;
  }function s(t, e, n) {
    for (var i in e) {
      e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    }return t;
  }function l() {
    return gu || (gu = pu().getContext("2d")), gu;
  }function h(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);for (var n = 0, i = t.length; i > n; n++) {
        if (t[n] === e) return n;
      }
    }return -1;
  }function u(t, e) {
    function n() {}var i = t.prototype;n.prototype = e.prototype, t.prototype = new n();for (var r in i) {
      t.prototype[r] = i[r];
    }t.prototype.constructor = t, t.superClass = e;
  }function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);
  }function f(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;
  }function d(t, e, n) {
    if (t && e) if (t.forEach && t.forEach === lu) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) {
      e.call(n, t[i], i, t);
    } else for (var a in t) {
      t.hasOwnProperty(a) && e.call(n, t[a], a, t);
    }
  }function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === cu) return t.map(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        i.push(e.call(n, t[r], r, t));
      }return i;
    }
  }function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === fu) return t.reduce(e, n, i);for (var r = 0, a = t.length; a > r; r++) {
        n = e.call(i, n, t[r], r, t);
      }return n;
    }
  }function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === hu) return t.filter(e, n);for (var i = [], r = 0, a = t.length; a > r; r++) {
        e.call(n, t[r], r, t) && i.push(t[r]);
      }return i;
    }
  }function m(t, e) {
    var n = uu.call(arguments, 2);return function () {
      return t.apply(e, n.concat(uu.call(arguments)));
    };
  }function y(t) {
    var e = uu.call(arguments, 1);return function () {
      return t.apply(this, e.concat(uu.call(arguments)));
    };
  }function _(t) {
    return "[object Array]" === ou.call(t);
  }function x(t) {
    return "function" == typeof t;
  }function w(t) {
    return "[object String]" === ou.call(t);
  }function b(t) {
    var e = typeof t === "undefined" ? "undefined" : _typeof(t);return "function" === e || !!t && "object" == e;
  }function S(t) {
    return !!ru[ou.call(t)];
  }function M(t) {
    return !!au[ou.call(t)];
  }function I(t) {
    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
  }function T(t) {
    return t !== t;
  }function C() {
    for (var t = 0, e = arguments.length; e > t; t++) {
      if (null != arguments[t]) return arguments[t];
    }
  }function D(t, e) {
    return null != t ? t : e;
  }function k(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }function A() {
    return Function.call.apply(uu, arguments);
  }function L(t) {
    if ("number" == typeof t) return [t, t, t, t];var e = t.length;return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }function P(t, e) {
    if (!t) throw new Error(e);
  }function O(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }function E(t) {
    t[vu] = !0;
  }function R(t) {
    return t[vu];
  }function B(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }var n = _(t),
        i = this;t instanceof B ? t.each(e) : t && d(t, e);
  }function z(t) {
    return new B(t);
  }function N() {}function F(t, e) {
    var n = new mu(2);return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
  }function V(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }function W(t) {
    var e = new mu(2);return e[0] = t[0], e[1] = t[1], e;
  }function H(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
  }function G(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
  }function q(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
  }function X(t) {
    return Math.sqrt(U(t));
  }function U(t) {
    return t[0] * t[0] + t[1] * t[1];
  }function Y(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t;
  }function Z(t, e) {
    var n = X(e);return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
  }function j(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }function $(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }function K(t, e, n) {
    var i = e[0],
        r = e[1];return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
  }function Q(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
  }function J(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
  }function te() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
  }function ee(t, e) {
    return { target: t, topTarget: e && e.topTarget };
  }function ne(t, e, n) {
    return { type: t, event: n, target: e.target, topTarget: e.topTarget, cancelBubble: !1, offsetX: n.zrX, offsetY: n.zrY, gestureEvent: n.gestureEvent, pinchX: n.pinchX, pinchY: n.pinchY, pinchScale: n.pinchScale, wheelDelta: n.zrDelta, zrByTouch: n.zrByTouch, which: n.which };
  }function ie() {}function re(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;r.silent && (i = !0), r = r.parent;
      }return i ? bu : !0;
    }return !1;
  }function ae() {
    var t = new Iu(6);return oe(t), t;
  }function oe(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }function se(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }function le(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }function he(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
  }function ue(t, e, n) {
    var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        h = Math.sin(n),
        u = Math.cos(n);return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t;
  }function ce(t, e, n) {
    var i = n[0],
        r = n[1];return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
  }function fe(t, e) {
    var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
  }function de(t) {
    return t > Cu || -Cu > t;
  }function pe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
  }function ge(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }function ve(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }function me(t) {
    return ge(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }function ye(t) {
    return ve(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }function _e(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }function xe(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
  }function we(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }function be(t, e) {
    Fu && we(Fu, e), Fu = Nu.put(t, Fu || e.slice());
  }function Se(t, e) {
    if (t) {
      e = e || [];var n = Nu.get(t);if (n) return we(e, n);t += "";var i = t.replace(/ /g, "").toLowerCase();if (i in zu) return we(e, zu[i]), be(t, e), e;if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
            a = i.indexOf(")");if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
              s = i.substr(r + 1, a - (r + 1)).split(","),
              l = 1;switch (o) {case "rgba":
              if (4 !== s.length) return void xe(e, 0, 0, 0, 1);l = ye(s.pop());case "rgb":
              return 3 !== s.length ? void xe(e, 0, 0, 0, 1) : (xe(e, me(s[0]), me(s[1]), me(s[2]), l), be(t, e), e);case "hsla":
              return 4 !== s.length ? void xe(e, 0, 0, 0, 1) : (s[3] = ye(s[3]), Me(s, e), be(t, e), e);case "hsl":
              return 3 !== s.length ? void xe(e, 0, 0, 0, 1) : (Me(s, e), be(t, e), e);default:
              return;}
        }xe(e, 0, 0, 0, 1);
      } else {
        if (4 === i.length) {
          var h = parseInt(i.substr(1), 16);return h >= 0 && 4095 >= h ? (xe(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), be(t, e), e) : void xe(e, 0, 0, 0, 1);
        }if (7 === i.length) {
          var h = parseInt(i.substr(1), 16);return h >= 0 && 16777215 >= h ? (xe(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), be(t, e), e) : void xe(e, 0, 0, 0, 1);
        }
      }
    }
  }function Me(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = ye(t[1]),
        r = ye(t[2]),
        a = .5 >= r ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;return e = e || [], xe(e, ge(255 * _e(o, a, n + 1 / 3)), ge(255 * _e(o, a, n)), ge(255 * _e(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
  }function Ie(t, e) {
    var n = Se(t);if (n) {
      for (var i = 0; 3 > i; i++) {
        n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      }return Te(n, 4 === n.length ? "rgba" : "rgb");
    }
  }function Te(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
    }
  }function Ce(t, e) {
    return t[e];
  }function De(t, e, n) {
    t[e] = n;
  }function ke(t, e, n) {
    return (e - t) * n + t;
  }function Ae(t, e, n) {
    return n > .5 ? e : t;
  }function Le(t, e, n, i, r) {
    var a = t.length;if (1 == r) for (var o = 0; a > o; o++) {
      i[o] = ke(t[o], e[o], n);
    } else for (var s = a && t[0].length, o = 0; a > o; o++) {
      for (var l = 0; s > l; l++) {
        i[o][l] = ke(t[o][l], e[o][l], n);
      }
    }
  }function Pe(t, e, n) {
    var i = t.length,
        r = e.length;if (i !== r) {
      var a = i > r;if (a) t.length = r;else for (var o = i; r > o; o++) {
        t.push(1 === n ? e[o] : Vu.call(e[o]));
      }
    }for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
        isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
    }
  }function Oe(t, e, n) {
    if (t === e) return !0;var i = t.length;if (i !== e.length) return !1;if (1 === n) {
      for (var r = 0; i > r; r++) {
        if (t[r] !== e[r]) return !1;
      }
    } else for (var a = t[0].length, r = 0; i > r; r++) {
      for (var o = 0; a > o; o++) {
        if (t[r][o] !== e[r][o]) return !1;
      }
    }return !0;
  }function Ee(t, e, n, i, r, a, o, s, l) {
    var h = t.length;if (1 == l) for (var u = 0; h > u; u++) {
      s[u] = Re(t[u], e[u], n[u], i[u], r, a, o);
    } else for (var c = t[0].length, u = 0; h > u; u++) {
      for (var f = 0; c > f; f++) {
        s[u][f] = Re(t[u][f], e[u][f], n[u][f], i[u][f], r, a, o);
      }
    }
  }function Re(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function Be(t) {
    if (f(t)) {
      var e = t.length;if (f(t[0])) {
        for (var n = [], i = 0; e > i; i++) {
          n.push(Vu.call(t[i]));
        }return n;
      }return Vu.call(t);
    }return t;
  }function ze(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }function Ne(t) {
    var e = t[t.length - 1].value;return f(e && e[0]) ? 2 : 1;
  }function Fe(t, e, n, i, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        h = i.length;if (h) {
      var u,
          c = i[0].value,
          d = f(c),
          p = !1,
          g = !1,
          v = d ? Ne(i) : 0;i.sort(function (t, e) {
        return t.time - e.time;
      }), u = i[h - 1].time;for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; h > w; w++) {
        m.push(i[w].time / u);var b = i[w].value;if (d && Oe(b, _, v) || !d && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var S = Se(b);S ? (b = S, p = !0) : g = !0;
        }y.push(b);
      }if (a || !x) {
        for (var M = y[h - 1], w = 0; h - 1 > w; w++) {
          d ? Pe(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        }d && Pe(o(t._target, r), M, v);var I,
            T,
            C,
            D,
            k,
            A,
            L = 0,
            P = 0;if (p) var O = [0, 0, 0, 0];var E = function E(t, e) {
          var n;if (0 > e) n = 0;else if (P > e) {
            for (I = Math.min(L + 1, h - 1), n = I; n >= 0 && !(m[n] <= e); n--) {}n = Math.min(n, h - 2);
          } else {
            for (n = L; h > n && !(m[n] > e); n++) {}n = Math.min(n - 1, h - 2);
          }L = n, P = e;var i = m[n + 1] - m[n];if (0 !== i) if (T = (e - m[n]) / i, l) {
            if (D = y[n], C = y[0 === n ? n : n - 1], k = y[n > h - 2 ? h - 1 : n + 1], A = y[n > h - 3 ? h - 1 : n + 2], d) Ee(C, D, k, A, T, T * T, T * T * T, o(t, r), v);else {
              var a;if (p) a = Ee(C, D, k, A, T, T * T, T * T * T, O, 1), a = ze(O);else {
                if (g) return Ae(D, k, T);a = Re(C, D, k, A, T, T * T, T * T * T);
              }s(t, r, a);
            }
          } else if (d) Le(y[n], y[n + 1], T, o(t, r), v);else {
            var a;if (p) Le(y[n], y[n + 1], T, O, 1), a = ze(O);else {
              if (g) return Ae(y[n], y[n + 1], T);a = ke(y[n], y[n + 1], T);
            }s(t, r, a);
          }
        },
            R = new pe({ target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: E, ondestroy: n });return e && "spline" !== e && (R.easing = e), R;
      }
    }
  }function Ve(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }function We(t) {
    for (var e = 0; t >= Ju;) {
      e |= 1 & t, t >>= 1;
    }return t + e;
  }function He(t, e, n, i) {
    var r = e + 1;if (r === n) return 1;if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) {
        r++;
      }Ge(t, e, r);
    } else for (; n > r && i(t[r], t[r - 1]) >= 0;) {
      r++;
    }return r - e;
  }function Ge(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];t[e++] = t[n], t[n--] = i;
    }
  }function qe(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) {
        a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      }var h = i - s;switch (h) {case 3:
          t[s + 3] = t[s + 2];case 2:
          t[s + 2] = t[s + 1];case 1:
          t[s + 1] = t[s];break;default:
          for (; h > 0;) {
            t[s + h] = t[s + h - 1], h--;
          }}t[s] = o;
    }
  }function Xe(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var h = o;o = r - l, l = r - h;
    }for (o++; l > o;) {
      var u = o + (l - o >>> 1);a(t, e[n + u]) > 0 ? o = u + 1 : l = u;
    }return l;
  }function Ue(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s);var h = o;o = r - l, l = r - h;
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }l > s && (l = s), o += r, l += r;
    }for (o++; l > o;) {
      var u = o + (l - o >>> 1);a(t, e[n + u]) < 0 ? l = u : o = u + 1;
    }return l;
  }function Ye(t, e) {
    function n(t, e) {
      l[c] = t, h[c] = e, c += 1;
    }function i() {
      for (; c > 1;) {
        var t = c - 2;if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;else if (h[t] > h[t + 1]) break;a(t);
      }
    }function r() {
      for (; c > 1;) {
        var t = c - 2;t > 0 && h[t - 1] < h[t + 1] && t--, a(t);
      }
    }function a(n) {
      var i = l[n],
          r = h[n],
          a = l[n + 1],
          u = h[n + 1];h[n] = r + u, n === c - 3 && (l[n + 1] = l[n + 2], h[n + 1] = h[n + 2]), c--;var f = Ue(t[a], t, i, r, 0, e);i += f, r -= f, 0 !== r && (u = Xe(t[i + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(i, r, a, u) : s(i, r, a, u)));
    }function o(n, i, r, a) {
      var o = 0;for (o = 0; i > o; o++) {
        f[o] = t[n + o];
      }var s = 0,
          l = r,
          h = n;if (t[h++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }return void (t[h + a] = f[s]);
        }for (var c, d, p, g = u;;) {
          c = 0, d = 0, p = !1;do {
            if (e(t[l], f[s]) < 0) {
              if (t[h++] = t[l++], d++, c = 0, 0 === --a) {
                p = !0;break;
              }
            } else if (t[h++] = f[s++], c++, d = 0, 1 === --i) {
              p = !0;break;
            }
          } while (g > (c | d));if (p) break;do {
            if (c = Ue(t[l], f, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) {
                t[h + o] = f[s + o];
              }if (h += c, s += c, i -= c, 1 >= i) {
                p = !0;break;
              }
            }if (t[h++] = t[l++], 0 === --a) {
              p = !0;break;
            }if (d = Xe(f[s], t, l, a, 0, e), 0 !== d) {
              for (o = 0; d > o; o++) {
                t[h + o] = t[l + o];
              }if (h += d, l += d, a -= d, 0 === a) {
                p = !0;break;
              }
            }if (t[h++] = f[s++], 1 === --i) {
              p = !0;break;
            }g--;
          } while (c >= tc || d >= tc);if (p) break;0 > g && (g = 0), g += 2;
        }if (u = g, 1 > u && (u = 1), 1 === i) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }t[h + a] = f[s];
        } else {
          if (0 === i) throw new Error();for (o = 0; i > o; o++) {
            t[h + o] = f[s + o];
          }
        }
      } else for (o = 0; i > o; o++) {
        t[h + o] = f[s + o];
      }
    }function s(n, i, r, a) {
      var o = 0;for (o = 0; a > o; o++) {
        f[o] = t[r + o];
      }var s = n + i - 1,
          l = a - 1,
          h = r + a - 1,
          c = 0,
          d = 0;if (t[h--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (h -= i, s -= i, d = h + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[d + o] = t[c + o];
          }return void (t[h] = f[l]);
        }for (var p = u;;) {
          var g = 0,
              v = 0,
              m = !1;do {
            if (e(f[l], t[s]) < 0) {
              if (t[h--] = t[s--], g++, v = 0, 0 === --i) {
                m = !0;break;
              }
            } else if (t[h--] = f[l--], v++, g = 0, 1 === --a) {
              m = !0;break;
            }
          } while (p > (g | v));if (m) break;do {
            if (g = i - Ue(f[l], t, n, i, i - 1, e), 0 !== g) {
              for (h -= g, s -= g, i -= g, d = h + 1, c = s + 1, o = g - 1; o >= 0; o--) {
                t[d + o] = t[c + o];
              }if (0 === i) {
                m = !0;break;
              }
            }if (t[h--] = f[l--], 1 === --a) {
              m = !0;break;
            }if (v = a - Xe(t[s], f, 0, a, a - 1, e), 0 !== v) {
              for (h -= v, l -= v, a -= v, d = h + 1, c = l + 1, o = 0; v > o; o++) {
                t[d + o] = f[c + o];
              }if (1 >= a) {
                m = !0;break;
              }
            }if (t[h--] = t[s--], 0 === --i) {
              m = !0;break;
            }p--;
          } while (g >= tc || v >= tc);if (m) break;0 > p && (p = 0), p += 2;
        }if (u = p, 1 > u && (u = 1), 1 === a) {
          for (h -= i, s -= i, d = h + 1, c = s + 1, o = i - 1; o >= 0; o--) {
            t[d + o] = t[c + o];
          }t[h] = f[l];
        } else {
          if (0 === a) throw new Error();for (c = h - (a - 1), o = 0; a > o; o++) {
            t[c + o] = f[o];
          }
        }
      } else for (c = h - (a - 1), o = 0; a > o; o++) {
        t[c + o] = f[o];
      }
    }var l,
        h,
        u = tc,
        c = 0,
        f = [];l = [], h = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;
  }function Ze(t, e, n, i) {
    n || (n = 0), i || (i = t.length);var r = i - n;if (!(2 > r)) {
      var a = 0;if (Ju > r) return a = He(t, n, i, e), void qe(t, n, i, n + a, e);var o = new Ye(t, e),
          s = We(r);do {
        if (a = He(t, n, i, e), s > a) {
          var l = r;l > s && (l = s), qe(t, n, n + l, n + a, e), a = l;
        }o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
      } while (0 !== r);o.forceMergeRuns();
    }
  }function je(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }function $e(t, e, n) {
    var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;var s = t.createLinearGradient(i, a, r, o);return s;
  }function Ke(t, e, n) {
    var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);var h = t.createRadialGradient(o, s, 0, o, s, l);return h;
  }function Qe() {
    return !1;
  }function Je(t, e, n) {
    var i = pu(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
  }function tn(t) {
    if ("string" == typeof t) {
      var e = fc.get(t);return e && e.image;
    }return t;
  }function en(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;var a = fc.get(t),
            o = { hostEl: n, cb: i, cbPayload: r };return a ? (e = a.image, !rn(e) && a.pending.push(o)) : (!e && (e = new Image()), e.onload = nn, fc.put(t, e.__cachedImgObj = { image: e, pending: [o] }), e.src = e.__zrImageSrc = t), e;
      }return t;
    }return e;
  }function nn() {
    var t = this.__cachedImgObj;this.onload = this.__cachedImgObj = null;for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
          i = n.cb;i && i(this, n.cbPayload), n.hostEl.dirty();
    }t.pending.length = 0;
  }function rn(t) {
    return t && t.width && t.height;
  }function an(t, e) {
    e = e || mc;var n = t + ":" + e;if (dc[n]) return dc[n];for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) {
      r = Math.max(mn(i[a], e).width, r);
    }return pc > gc && (pc = 0, dc = {}), pc++, dc[n] = r, r;
  }function on(t, e, n, i, r, a, o) {
    return a ? ln(t, e, n, i, r, a, o) : sn(t, e, n, i, r, o);
  }function sn(t, e, n, i, r, a) {
    var o = yn(t, e, r, a),
        s = an(t, e);r && (s += r[1] + r[3]);var l = o.outerHeight,
        h = hn(0, s, n),
        u = un(0, l, i),
        c = new Ve(h, u, s, l);return c.lineHeight = o.lineHeight, c;
  }function ln(t, e, n, i, r, a, o) {
    var s = _n(t, { rich: a, truncate: o, font: e, textAlign: n, textPadding: r }),
        l = s.outerWidth,
        h = s.outerHeight,
        u = hn(0, l, n),
        c = un(0, h, i);return new Ve(u, c, l, h);
  }function hn(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
  }function un(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
  }function cn(t, e, n) {
    var i = e.x,
        r = e.y,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = "left",
        h = "top";switch (t) {case "left":
        i -= n, r += s, l = "right", h = "middle";break;case "right":
        i += n + o, r += s, h = "middle";break;case "top":
        i += o / 2, r -= n, l = "center", h = "bottom";break;case "bottom":
        i += o / 2, r += a + n, l = "center";break;case "inside":
        i += o / 2, r += s, l = "center", h = "middle";break;case "insideLeft":
        i += n, r += s, h = "middle";break;case "insideRight":
        i += o - n, r += s, l = "right", h = "middle";break;case "insideTop":
        i += o / 2, r += n, l = "center";break;case "insideBottom":
        i += o / 2, r += a - n, l = "center", h = "bottom";break;case "insideTopLeft":
        i += n, r += n;break;case "insideTopRight":
        i += o - n, r += n, l = "right";break;case "insideBottomLeft":
        i += n, r += a - n, h = "bottom";break;case "insideBottomRight":
        i += o - n, r += a - n, l = "right", h = "bottom";}return { x: i, y: r, textAlign: l, textVerticalAlign: h };
  }function fn(t, e, n, i, r) {
    if (!e) return "";var a = (t + "").split("\n");r = dn(e, n, i, r);for (var o = 0, s = a.length; s > o; o++) {
      a[o] = pn(a[o], r);
    }return a.join("\n");
  }function dn(t, e, n, i) {
    i = o({}, i), i.font = e;var n = D(n, "...");i.maxIterations = D(i.maxIterations, 2);var r = i.minChar = D(i.minChar, 0);i.cnCharWidth = an("国", e);var a = i.ascCharWidth = an("a", e);i.placeholder = D(i.placeholder, "");for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {
      s -= a;
    }var h = an(n);return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i;
  }function pn(t, e) {
    var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;if (!n) return "";var a = an(t, i);if (n >= a) return t;for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;break;
      }var s = 0 === o ? gn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;t = t.substr(0, s), a = an(t, i);
    }return "" === t && (t = e.placeholder), t;
  }function gn(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);r += s >= 0 && 127 >= s ? n : i;
    }return a;
  }function vn(t) {
    return an("国", t);
  }function mn(t, e) {
    return yc.measureText(t, e);
  }function yn(t, e, n, i) {
    null != t && (t += "");var r = vn(e),
        a = t ? t.split("\n") : [],
        o = a.length * r,
        s = o;if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
          h = i.outerWidth;if (null != l && s > l) t = "", a = [];else if (null != h) for (var u = dn(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, { minChar: i.minChar, placeholder: i.placeholder }), c = 0, f = a.length; f > c; c++) {
        a[c] = pn(a[c], u);
      }
    }return { lines: a, height: o, outerHeight: s, lineHeight: r };
  }function _n(t, e) {
    var n = { lines: [], width: 0, height: 0 };if (null != t && (t += ""), !t) return n;for (var i, r = vc.lastIndex = 0; null != (i = vc.exec(t));) {
      var a = i.index;a > r && xn(n, t.substring(r, a)), xn(n, i[2], i[1]), r = vc.lastIndex;
    }r < t.length && xn(n, t.substring(r, t.length));var o = n.lines,
        s = 0,
        l = 0,
        h = [],
        u = e.textPadding,
        c = e.truncate,
        f = c && c.outerWidth,
        d = c && c.outerHeight;u && (null != f && (f -= u[1] + u[3]), null != d && (d -= u[0] + u[2]));for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            S = _.textHeight = D(x.textHeight, vn(b));if (w && (S += w[0] + w[2]), _.height = S, _.lineHeight = k(x.textLineHeight, e.textLineHeight, S), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != d && s + _.lineHeight > d) return { lines: [], width: 0, height: 0 };_.textWidth = an(_.text, b);var M = x.textWidth,
            I = null == M || "auto" === M;if ("string" == typeof M && "%" === M.charAt(M.length - 1)) _.percentWidth = M, h.push(_), M = 0;else {
          if (I) {
            M = _.textWidth;var T = x.textBackgroundColor,
                C = T && T.image;C && (C = tn(C), rn(C) && (M = Math.max(M, C.width * S / C.height)));
          }var A = w ? w[1] + w[3] : 0;M += A;var L = null != f ? f - m : null;null != L && M > L && (!I || A > L ? (_.text = "", _.textWidth = M = 0) : (_.text = fn(_.text, L - A, b, c.ellipsis, { minChar: c.minChar }), _.textWidth = an(_.text, b), M = _.textWidth + A));
        }m += _.width = M, x && (v = Math.max(v, _.lineHeight));
      }g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);for (var p = 0; p < h.length; p++) {
      var _ = h[p],
          P = _.percentWidth;_.width = parseInt(P, 10) / 100 * l;
    }return n;
  }function xn(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = { styleName: n, text: s, isLineHolder: !s && !i };if (o) a.push({ tokens: [l] });else {
        var h = (a[a.length - 1] || (a[0] = { tokens: [] })).tokens,
            u = h.length;1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l);
      }
    }
  }function wn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");return e && O(e) || t.textFont || t.font;
  }function bn(t, e) {
    var n,
        i,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        h = e.height,
        u = e.r;0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;var c;n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }function Sn(t) {
    return Mn(t), d(t.rich, Mn), t;
  }function Mn(t) {
    if (t) {
      t.font = wn(t);var e = t.textAlign;"middle" === e && (e = "center"), t.textAlign = null == e || _c[e] ? e : "left";var n = t.textVerticalAlign || t.textBaseline;"center" === n && (n = "middle"), t.textVerticalAlign = null == n || xc[n] ? n : "top";var i = t.textPadding;i && (t.textPadding = L(t.textPadding));
    }
  }function In(t, e, n, i, r) {
    i.rich ? Cn(t, e, n, i, r) : Tn(t, e, n, i, r);
  }function Tn(t, e, n, i, r) {
    var a = Rn(e, "font", i.font || mc),
        o = i.textPadding,
        s = t.__textCotentBlock;(!s || t.__dirty) && (s = t.__textCotentBlock = yn(n, a, o, i.truncate));var l = s.outerHeight,
        h = s.lines,
        u = s.lineHeight,
        c = En(l, i, r),
        f = c.baseX,
        d = c.baseY,
        p = c.textAlign,
        g = c.textVerticalAlign;kn(e, i, r, f, d);var v = un(d, l, g),
        m = f,
        y = v,
        _ = Ln(i);if (_ || o) {
      var x = an(n, a),
          w = x;o && (w += o[1] + o[3]);var b = hn(f, w, p);_ && Pn(t, e, i, b, v, w, l), o && (m = Fn(f, p, o), y += o[0]);
    }Rn(e, "textAlign", p || "left"), Rn(e, "textBaseline", "middle"), Rn(e, "shadowBlur", i.textShadowBlur || 0), Rn(e, "shadowColor", i.textShadowColor || "transparent"), Rn(e, "shadowOffsetX", i.textShadowOffsetX || 0), Rn(e, "shadowOffsetY", i.textShadowOffsetY || 0), y += u / 2;var S = i.textStrokeWidth,
        M = Bn(i.textStroke, S),
        I = zn(i.textFill);M && (Rn(e, "lineWidth", S), Rn(e, "strokeStyle", M)), I && Rn(e, "fillStyle", I);for (var T = 0; T < h.length; T++) {
      M && e.strokeText(h[T], m, y), I && e.fillText(h[T], m, y), y += u;
    }
  }function Cn(t, e, n, i, r) {
    var a = t.__textCotentBlock;(!a || t.__dirty) && (a = t.__textCotentBlock = _n(n, i)), Dn(t, e, a, i, r);
  }function Dn(t, e, n, i, r) {
    var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        h = En(s, i, r),
        u = h.baseX,
        c = h.baseY,
        f = h.textAlign,
        d = h.textVerticalAlign;kn(e, i, r, u, c);var p = hn(u, o, f),
        g = un(c, s, d),
        v = p,
        m = g;l && (v += l[3], m += l[0]);var y = v + a;Ln(i) && Pn(t, e, i, p, g, o, s);for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, D = y, k = S - 1; S > T && (x = b[T], !x.textAlign || "left" === x.textAlign);) {
        An(t, e, x, i, M, m, C, "left"), I -= x.width, C += x.width, T++;
      }for (; k >= 0 && (x = b[k], "right" === x.textAlign);) {
        An(t, e, x, i, M, m, D, "right"), I -= x.width, D -= x.width, k--;
      }for (C += (a - (C - v) - (y - D) - I) / 2; k >= T;) {
        x = b[T], An(t, e, x, i, M, m, C + x.width / 2, "center"), C += x.width, T++;
      }m += M;
    }
  }function kn(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;"center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
    }
  }function An(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {},
        h = n.textVerticalAlign,
        u = a + r / 2;"top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && Ln(l) && Pn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);var c = n.textPadding;c && (o = Fn(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), Rn(e, "shadowBlur", k(l.textShadowBlur, i.textShadowBlur, 0)), Rn(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Rn(e, "shadowOffsetX", k(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Rn(e, "shadowOffsetY", k(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Rn(e, "textAlign", s), Rn(e, "textBaseline", "middle"), Rn(e, "font", n.font || mc);var f = Bn(l.textStroke || i.textStroke, p),
        d = zn(l.textFill || i.textFill),
        p = D(l.textStrokeWidth, i.textStrokeWidth);f && (Rn(e, "lineWidth", p), Rn(e, "strokeStyle", f), e.strokeText(n.text, o, u)), d && (Rn(e, "fillStyle", d), e.fillText(n.text, o, u));
  }function Ln(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
  }function Pn(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        h = n.textBorderColor,
        u = w(s);if (Rn(e, "shadowBlur", n.textBoxShadowBlur || 0), Rn(e, "shadowColor", n.textBoxShadowColor || "transparent"), Rn(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Rn(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
      e.beginPath();var c = n.textBorderRadius;c ? bn(e, { x: i, y: r, width: a, height: o, r: c }) : e.rect(i, r, a, o), e.closePath();
    }if (u) Rn(e, "fillStyle", s), e.fill();else if (b(s)) {
      var f = s.image;f = en(f, null, t, On, s), f && rn(f) && e.drawImage(f, i, r, a, o);
    }l && h && (Rn(e, "lineWidth", l), Rn(e, "strokeStyle", h), e.stroke());
  }function On(t, e) {
    e.image = t;
  }function En(t, e, n) {
    var i = e.x || 0,
        r = e.y || 0,
        a = e.textAlign,
        o = e.textVerticalAlign;if (n) {
      var s = e.textPosition;if (s instanceof Array) i = n.x + Nn(s[0], n.width), r = n.y + Nn(s[1], n.height);else {
        var l = cn(s, n, e.textDistance);i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
      }var h = e.textOffset;h && (i += h[0], r += h[1]);
    }return { baseX: i, baseY: r, textAlign: a, textVerticalAlign: o };
  }function Rn(t, e, n) {
    return t[e] = ic(t, e, n), t[e];
  }function Bn(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function zn(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }function Nn(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }function Fn(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }function Vn(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }function Wn(t) {
    t = t || {}, Zu.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    }this.style = new ac(t.style, this), this._rect = null, this.__clipPaths = [];
  }function Hn(t) {
    Wn.call(this, t);
  }function Gn(t) {
    return parseInt(t, 10);
  }function qn(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;
  }function Xn(t, e, n) {
    return Cc.copy(t.getBoundingRect()), t.transform && Cc.applyTransform(t.transform), Dc.width = e, Dc.height = n, !Cc.intersect(Dc);
  }function Un(t, e) {
    if (t == e) return !1;if (!t || !e || t.length !== e.length) return !0;for (var n = 0; n < t.length; n++) {
      if (t[n] !== e[n]) return !0;
    }
  }function Yn(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
    }
  }function Zn(t, e) {
    var n = document.createElement("div");return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
  }function jn(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0, top: 0 };
  }function $n(t, e, n, i) {
    return n = n || {}, i || !iu.canvasSupported ? Kn(t, e, n) : iu.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Kn(t, e, n), n;
  }function Kn(t, e, n) {
    var i = jn(t);n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;
  }function Qn(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;var i = e.type,
        r = i && i.indexOf("touch") >= 0;if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];a && $n(t, a, e, n);
    } else $n(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;var o = e.button;return null == e.which && void 0 !== o && Lc.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }function Jn(t, e, n) {
    Ac ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
  }function ti(t, e, n) {
    Ac ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
  }function ei(t) {
    var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];return Math.sqrt(e * e + n * n);
  }function ni(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }function ii(t) {
    return "mousewheel" === t && iu.browser.firefox ? "DOMMouseScroll" : t;
  }function ri(t, e, n) {
    var i = t._gestureMgr;"start" === n && i.clear();var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);if ("end" === n && i.clear(), r) {
      var a = r.type;e.gestureEvent = a, t.handler.dispatchToElement({ target: r.target }, a, r.event);
    }
  }function ai(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
      t._touching = !1;
    }, 700);
  }function oi(t) {
    var e = t.pointerType;return "pen" === e || "touch" === e;
  }function si(t) {
    function e(t, e) {
      return function () {
        return e._touching ? void 0 : t.apply(e, arguments);
      };
    }d(zc, function (e) {
      t._handlers[e] = m(Vc[e], t);
    }), d(Fc, function (e) {
      t._handlers[e] = m(Vc[e], t);
    }), d(Bc, function (n) {
      t._handlers[n] = e(Vc[n], t);
    });
  }function li(t) {
    function e(e, n) {
      d(e, function (e) {
        Jn(t, ii(e), n._handlers[e]);
      }, n);
    }wu.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Oc(), this._handlers = {}, si(this), iu.pointerEventsSupported ? e(Fc, this) : (iu.touchEventsSupported && e(zc, this), e(Bc, this));
  }function hi(t, e) {
    var n = new qc(eu(), t, e);return n;
  }function ui(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }function ci(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];!t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }function fi(t) {
    return !Uc(t) || Yc(t) || t instanceof Date ? t : t.value;
  }function di(t) {
    return Uc(t) && !(t instanceof Array);
  }function pi(t, e) {
    e = (e || []).slice();var n = p(t || [], function (t) {
      return { exist: t };
    });return Xc(e, function (t, i) {
      if (Uc(t)) {
        for (var r = 0; r < n.length; r++) {
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);
        }for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;if (!(n[r].option || null != a.id && null != t.id || null == t.name || mi(t) || mi(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null);
        }
      }
    }), Xc(e, function (t) {
      if (Uc(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;if (!n[e].option && !mi(i) && null == t.id) {
            n[e].option = t;break;
          }
        }e >= n.length && n.push({ option: t });
      }
    }), n;
  }function gi(t) {
    var e = z();Xc(t, function (t) {
      var n = t.exist;n && e.set(n.id, t);
    }), Xc(t, function (t) {
      var n = t.option;P(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Xc(t, function (t, n) {
      var i = t.exist,
          r = t.option,
          a = t.keyInfo;if (Uc(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : Zc + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;do {
            a.id = "\x00" + a.name + "\x00" + o++;
          } while (e.get(a.id));
        }e.set(a.id, t);
      }
    });
  }function vi(t) {
    var e = t.name;return !(!e || !e.indexOf(Zc));
  }function mi(t) {
    return Uc(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
  }function yi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : void 0;
  }function _i() {
    var t = "__\x00ec_inner_" + $c++ + "_" + Math.random().toFixed(5);return function (e) {
      return e[t] || (e[t] = {});
    };
  }function xi(t, e, n) {
    if (w(e)) {
      var i = {};i[e + "Index"] = 0, e = i;
    }var r = n && n.defaultMainType;!r || wi(e, r + "Index") || wi(e, r + "Id") || wi(e, r + "Name") || (e[r + "Index"] = 0);var a = {};return Xc(e, function (i, r) {
      var i = e[r];if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && h(n.includeMainTypes, s) < 0)) {
        var u = { mainType: s };("index" !== l || "all" !== i) && (u[l] = i);var c = t.queryComponents(u);a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }function wi(t, e) {
    return t && t.hasOwnProperty(e);
  }function bi(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
  }function Si(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }function Mi(t) {
    var e = { main: "", sub: "" };return t && (t = t.split(Kc), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }function Ii(t) {
    P(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }function Ti(t) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          n = function n() {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };return o(n.prototype, t), n.extend = this.extend, n.superCall = Di, n.superApply = ki, u(n, this), n.superClass = e, n;
    };
  }function Ci(t) {
    var e = ["__\x00is_clz", Jc++, Math.random().toFixed(3)].join("_");t.prototype[e] = !0, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }function Di(t, e) {
    var n = A(arguments, 2);return this.superClass.prototype[e].apply(t, n);
  }function ki(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }function Ai(t, e) {
    function n(t) {
      var e = i[t.main];return e && e[Qc] || (e = i[t.main] = {}, e[Qc] = !0), e;
    }e = e || {};var i = {};if (t.registerClass = function (t, e) {
      if (e) if (Ii(e), e = Mi(e), e.sub) {
        if (e.sub !== Qc) {
          var r = n(e);r[e.sub] = t;
        }
      } else i[e.main] = t;return t;
    }, t.getClass = function (t, e, n) {
      var r = i[t];if (r && r[Qc] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");return r;
    }, t.getClassesByMainType = function (t) {
      t = Mi(t);var e = [],
          n = i[t.main];return n && n[Qc] ? d(n, function (t, n) {
        n !== Qc && e.push(t);
      }) : e.push(n), e;
    }, t.hasClass = function (t) {
      return t = Mi(t), !!i[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];return d(i, function (e, n) {
        t.push(n);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = Mi(t);var e = i[t.main];return e && e[Qc];
    }, t.parseClassType = Mi, e.registerWhenExtend) {
      var r = t.extend;r && (t.extend = function (e) {
        var n = r.call(this, e);return t.registerClass(n, e.type);
      });
    }return t;
  }function Li(t) {
    return t > -lf && lf > t;
  }function Pi(t) {
    return t > lf || -lf > t;
  }function Oi(t, e, n, i, r) {
    var a = 1 - r;return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
  }function Ei(t, e, n, i, r) {
    var a = 1 - r;return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
  }function Ri(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        h = t - r,
        u = s * s - 3 * o * l,
        c = s * l - 9 * o * h,
        f = l * l - 3 * s * h,
        d = 0;if (Li(u) && Li(c)) {
      if (Li(s)) a[0] = 0;else {
        var p = -l / s;p >= 0 && 1 >= p && (a[d++] = p);
      }
    } else {
      var g = c * c - 4 * u * f;if (Li(g)) {
        var v = c / u,
            p = -s / o + v,
            m = -v / 2;p >= 0 && 1 >= p && (a[d++] = p), m >= 0 && 1 >= m && (a[d++] = m);
      } else if (g > 0) {
        var y = sf(g),
            _ = u * s + 1.5 * o * (-c + y),
            x = u * s + 1.5 * o * (-c - y);_ = 0 > _ ? -of(-_, cf) : of(_, cf), x = 0 > x ? -of(-x, cf) : of(x, cf);var p = (-s - (_ + x)) / (3 * o);p >= 0 && 1 >= p && (a[d++] = p);
      } else {
        var w = (2 * u * s - 3 * o * c) / (2 * sf(u * u * u)),
            b = Math.acos(w) / 3,
            S = sf(u),
            M = Math.cos(b),
            p = (-s - 2 * S * M) / (3 * o),
            m = (-s + S * (M + uf * Math.sin(b))) / (3 * o),
            I = (-s + S * (M - uf * Math.sin(b))) / (3 * o);p >= 0 && 1 >= p && (a[d++] = p), m >= 0 && 1 >= m && (a[d++] = m), I >= 0 && 1 >= I && (a[d++] = I);
      }
    }return d;
  }function Bi(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;if (Li(o)) {
      if (Pi(a)) {
        var h = -s / a;h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = a * a - 4 * o * s;if (Li(u)) r[0] = -a / (2 * o);else if (u > 0) {
        var c = sf(u),
            h = (-a + c) / (2 * o),
            f = (-a - c) / (2 * o);h >= 0 && 1 >= h && (r[l++] = h), f >= 0 && 1 >= f && (r[l++] = f);
      }
    }return l;
  }function zi(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        h = (s - o) * r + o,
        u = (l - s) * r + s,
        c = (u - h) * r + h;a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i;
  }function Ni(t, e, n, i, r, a, o, s, l, h, u) {
    var c,
        f,
        d,
        p,
        g,
        v = .005,
        m = 1 / 0;ff[0] = l, ff[1] = h;for (var y = 0; 1 > y; y += .05) {
      df[0] = Oi(t, n, r, o, y), df[1] = Oi(e, i, a, s, y), p = _u(ff, df), m > p && (c = y, m = p);
    }m = 1 / 0;for (var _ = 0; 32 > _ && !(hf > v); _++) {
      f = c - v, d = c + v, df[0] = Oi(t, n, r, o, f), df[1] = Oi(e, i, a, s, f), p = _u(df, ff), f >= 0 && m > p ? (c = f, m = p) : (pf[0] = Oi(t, n, r, o, d), pf[1] = Oi(e, i, a, s, d), g = _u(pf, ff), 1 >= d && m > g ? (c = d, m = g) : v *= .5);
    }return u && (u[0] = Oi(t, n, r, o, c), u[1] = Oi(e, i, a, s, c)), sf(m);
  }function Fi(t, e, n, i) {
    var r = 1 - i;return r * (r * t + 2 * i * e) + i * i * n;
  }function Vi(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }function Wi(t, e, n, i, r) {
    var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;if (Li(a)) {
      if (Pi(o)) {
        var h = -s / o;h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = o * o - 4 * a * s;if (Li(u)) {
        var h = -o / (2 * a);h >= 0 && 1 >= h && (r[l++] = h);
      } else if (u > 0) {
        var c = sf(u),
            h = (-o + c) / (2 * a),
            f = (-o - c) / (2 * a);h >= 0 && 1 >= h && (r[l++] = h), f >= 0 && 1 >= f && (r[l++] = f);
      }
    }return l;
  }function Hi(t, e, n) {
    var i = t + n - 2 * e;return 0 === i ? .5 : (t - e) / i;
  }function Gi(t, e, n, i, r) {
    var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
  }function qi(t, e, n, i, r, a, o, s, l) {
    var h,
        u = .005,
        c = 1 / 0;ff[0] = o, ff[1] = s;for (var f = 0; 1 > f; f += .05) {
      df[0] = Fi(t, n, r, f), df[1] = Fi(e, i, a, f);var d = _u(ff, df);c > d && (h = f, c = d);
    }c = 1 / 0;for (var p = 0; 32 > p && !(hf > u); p++) {
      var g = h - u,
          v = h + u;df[0] = Fi(t, n, r, g), df[1] = Fi(e, i, a, g);var d = _u(df, ff);if (g >= 0 && c > d) h = g, c = d;else {
        pf[0] = Fi(t, n, r, v), pf[1] = Fi(e, i, a, v);var m = _u(pf, ff);1 >= v && c > m ? (h = v, c = m) : u *= .5;
      }
    }return l && (l[0] = Fi(t, n, r, h), l[1] = Fi(e, i, a, h)), sf(c);
  }function Xi(t, e, n, i, r, a) {
    r[0] = gf(t, n), r[1] = gf(e, i), a[0] = vf(t, n), a[1] = vf(e, i);
  }function Ui(t, e, n, i, r, a, o, s, l, h) {
    var u,
        c = Bi,
        f = Oi,
        d = c(t, n, r, o, Sf);for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; d > u; u++) {
      var p = f(t, n, r, o, Sf[u]);l[0] = gf(p, l[0]), h[0] = vf(p, h[0]);
    }for (d = c(e, i, a, s, Mf), u = 0; d > u; u++) {
      var g = f(e, i, a, s, Mf[u]);l[1] = gf(g, l[1]), h[1] = vf(g, h[1]);
    }l[0] = gf(t, l[0]), h[0] = vf(t, h[0]), l[0] = gf(o, l[0]), h[0] = vf(o, h[0]), l[1] = gf(e, l[1]), h[1] = vf(e, h[1]), l[1] = gf(s, l[1]), h[1] = vf(s, h[1]);
  }function Yi(t, e, n, i, r, a, o, s) {
    var l = Hi,
        h = Fi,
        u = vf(gf(l(t, n, r), 1), 0),
        c = vf(gf(l(e, i, a), 1), 0),
        f = h(t, n, r, u),
        d = h(e, i, a, c);o[0] = gf(t, r, f), o[1] = gf(e, a, d), s[0] = vf(t, r, f), s[1] = vf(e, a, d);
  }function Zi(t, e, n, i, r, a, o, s, l) {
    var h = Q,
        u = J,
        c = Math.abs(r - a);if (1e-4 > c % _f && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);if (xf[0] = yf(r) * n + t, xf[1] = mf(r) * i + e, wf[0] = yf(a) * n + t, wf[1] = mf(a) * i + e, h(s, xf, wf), u(l, xf, wf), r %= _f, 0 > r && (r += _f), a %= _f, 0 > a && (a += _f), r > a && !o ? a += _f : a > r && o && (r += _f), o) {
      var f = a;a = r, r = f;
    }for (var d = 0; a > d; d += Math.PI / 2) {
      d > r && (bf[0] = yf(d) * n + t, bf[1] = mf(d) * i + e, h(s, bf, s), u(l, bf, l));
    }
  }function ji(t, e, n, i, r, a, o) {
    if (0 === r) return !1;var s = r,
        l = 0,
        h = t;if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;if (t === n) return Math.abs(a - t) <= s / 2;l = (e - i) / (t - n), h = (t * i - n * e) / (t - n);var u = l * a - o + h,
        c = u * u / (l * l + 1);return s / 2 * s / 2 >= c;
  }function $i(t, e, n, i, r, a, o, s, l, h, u) {
    if (0 === l) return !1;var c = l;if (u > e + c && u > i + c && u > a + c && u > s + c || e - c > u && i - c > u && a - c > u && s - c > u || h > t + c && h > n + c && h > r + c && h > o + c || t - c > h && n - c > h && r - c > h && o - c > h) return !1;var f = Ni(t, e, n, i, r, a, o, s, h, u, null);return c / 2 >= f;
  }function Ki(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;var h = o;if (l > e + h && l > i + h && l > a + h || e - h > l && i - h > l && a - h > l || s > t + h && s > n + h && s > r + h || t - h > s && n - h > s && r - h > s) return !1;var u = qi(t, e, n, i, r, a, s, l, null);return h / 2 >= u;
  }function Qi(t) {
    return t %= Nf, 0 > t && (t += Nf), t;
  }function Ji(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;var h = o;s -= t, l -= e;var u = Math.sqrt(s * s + l * l);if (u - h > n || n > u + h) return !1;if (Math.abs(i - r) % Ff < 1e-4) return !0;if (a) {
      var c = i;i = Qi(r), r = Qi(c);
    } else i = Qi(i), r = Qi(r);i > r && (r += Ff);var f = Math.atan2(l, s);return 0 > f && (f += Ff), f >= i && r >= f || f + Ff >= i && r >= f + Ff;
  }function tr(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;if (i === e) return 0;var o = e > i ? 1 : -1,
        s = (a - e) / (i - e);(1 === s || 0 === s) && (o = e > i ? .5 : -.5);var l = s * (n - t) + t;return l > r ? o : 0;
  }function er(t, e) {
    return Math.abs(t - e) < Hf;
  }function nr() {
    var t = qf[0];qf[0] = qf[1], qf[1] = t;
  }function ir(t, e, n, i, r, a, o, s, l, h) {
    if (h > e && h > i && h > a && h > s || e > h && i > h && a > h && s > h) return 0;var u = Ri(e, i, a, s, h, Gf);if (0 === u) return 0;for (var c, f, d = 0, p = -1, g = 0; u > g; g++) {
      var v = Gf[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = Oi(t, n, r, o, v);l > y || (0 > p && (p = Bi(e, i, a, s, qf), qf[1] < qf[0] && p > 1 && nr(), c = Oi(e, i, a, s, qf[0]), p > 1 && (f = Oi(e, i, a, s, qf[1]))), d += 2 == p ? v < qf[0] ? e > c ? m : -m : v < qf[1] ? c > f ? m : -m : f > s ? m : -m : v < qf[0] ? e > c ? m : -m : c > s ? m : -m);
    }return d;
  }function rr(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;var l = Wi(e, i, a, s, Gf);if (0 === l) return 0;var h = Hi(e, i, a);if (h >= 0 && 1 >= h) {
      for (var u = 0, c = Fi(e, i, a, h), f = 0; l > f; f++) {
        var d = 0 === Gf[f] || 1 === Gf[f] ? .5 : 1,
            p = Fi(t, n, r, Gf[f]);o > p || (u += Gf[f] < h ? e > c ? d : -d : c > a ? d : -d);
      }return u;
    }var d = 0 === Gf[0] || 1 === Gf[0] ? .5 : 1,
        p = Fi(t, n, r, Gf[0]);return o > p ? 0 : e > a ? d : -d;
  }function ar(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;var l = Math.sqrt(n * n - s * s);Gf[0] = -l, Gf[1] = l;var h = Math.abs(i - r);if (1e-4 > h) return 0;if (1e-4 > h % Wf) {
      i = 0, r = Wf;var u = a ? 1 : -1;return o >= Gf[0] + t && o <= Gf[1] + t ? u : 0;
    }if (a) {
      var l = i;i = Qi(r), r = Qi(l);
    } else i = Qi(i), r = Qi(r);i > r && (r += Wf);for (var c = 0, f = 0; 2 > f; f++) {
      var d = Gf[f];if (d + t > o) {
        var p = Math.atan2(s, d),
            u = a ? 1 : -1;0 > p && (p = Wf + p), (p >= i && r >= p || p + Wf >= i && r >= p + Wf) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u);
      }
    }return c;
  }function or(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
      var c = t[u++];switch (c === Vf.M && u > 1 && (n || (a += tr(o, s, l, h, i, r))), 1 == u && (o = t[u], s = t[u + 1], l = o, h = s), c) {case Vf.M:
          l = t[u++], h = t[u++], o = l, s = h;break;case Vf.L:
          if (n) {
            if (ji(o, s, t[u], t[u + 1], e, i, r)) return !0;
          } else a += tr(o, s, t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Vf.C:
          if (n) {
            if ($i(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
          } else a += ir(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Vf.Q:
          if (n) {
            if (Ki(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
          } else a += rr(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;o = t[u++], s = t[u++];break;case Vf.A:
          var f = t[u++],
              d = t[u++],
              p = t[u++],
              g = t[u++],
              v = t[u++],
              m = t[u++],
              y = (t[u++], 1 - t[u++]),
              _ = Math.cos(v) * p + f,
              x = Math.sin(v) * g + d;u > 1 ? a += tr(o, s, _, x, i, r) : (l = _, h = x);var w = (i - f) * g / p + f;if (n) {
            if (Ji(f, d, g, v, v + m, y, e, w, r)) return !0;
          } else a += ar(f, d, g, v, v + m, y, w, r);o = Math.cos(v + m) * p + f, s = Math.sin(v + m) * g + d;break;case Vf.R:
          l = o = t[u++], h = s = t[u++];var b = t[u++],
              S = t[u++],
              _ = l + b,
              x = h + S;if (n) {
            if (ji(l, h, _, h, e, i, r) || ji(_, h, _, x, e, i, r) || ji(_, x, l, x, e, i, r) || ji(l, x, l, h, e, i, r)) return !0;
          } else a += tr(_, h, _, x, i, r), a += tr(l, x, l, h, i, r);break;case Vf.Z:
          if (n) {
            if (ji(o, s, l, h, e, i, r)) return !0;
          } else a += tr(o, s, l, h, i, r);o = l, s = h;}
    }return n || er(s, h) || (a += tr(o, s, l, h, i, r) || 0), 0 !== a;
  }function sr(t, e, n) {
    return or(t, 0, !1, e, n);
  }function lr(t, e, n, i) {
    return or(t, e, !0, n, i);
  }function hr(t) {
    Wn.call(this, t), this.path = null;
  }function ur(t, e, n, i, r, a, o, s, l, h, u) {
    var c = l * (id / 180),
        f = nd(c) * (t - n) / 2 + ed(c) * (e - i) / 2,
        d = -1 * ed(c) * (t - n) / 2 + nd(c) * (e - i) / 2,
        p = f * f / (o * o) + d * d / (s * s);p > 1 && (o *= td(p), s *= td(p));var g = (r === a ? -1 : 1) * td((o * o * s * s - o * o * d * d - s * s * f * f) / (o * o * d * d + s * s * f * f)) || 0,
        v = g * o * d / s,
        m = g * -s * f / o,
        y = (t + n) / 2 + nd(c) * v - ed(c) * m,
        _ = (e + i) / 2 + ed(c) * v + nd(c) * m,
        x = od([1, 0], [(f - v) / o, (d - m) / s]),
        w = [(f - v) / o, (d - m) / s],
        b = [(-1 * f - v) / o, (-1 * d - m) / s],
        S = od(w, b);ad(w, b) <= -1 && (S = id), ad(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * id), 1 === a && 0 > S && (S += 2 * id), u.addData(h, y, _, o, s, x, S, c, a);
  }function cr(t) {
    if (!t) return [];var e,
        n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");for (e = 0; e < Jf.length; e++) {
      n = n.replace(new RegExp(Jf[e], "g"), "|" + Jf[e]);
    }var i,
        r = n.split("|"),
        a = 0,
        o = 0,
        s = new zf(),
        l = zf.CMD;for (e = 1; e < r.length; e++) {
      var h,
          u = r[e],
          c = u.charAt(0),
          f = 0,
          d = u.slice(1).replace(/e,-/g, "e-").split(",");d.length > 0 && "" === d[0] && d.shift();for (var p = 0; p < d.length; p++) {
        d[p] = parseFloat(d[p]);
      }for (; f < d.length && !isNaN(d[f]) && !isNaN(d[0]);) {
        var g,
            v,
            m,
            y,
            _,
            x,
            w,
            b = a,
            S = o;switch (c) {case "l":
            a += d[f++], o += d[f++], h = l.L, s.addData(h, a, o);break;case "L":
            a = d[f++], o = d[f++], h = l.L, s.addData(h, a, o);break;case "m":
            a += d[f++], o += d[f++], h = l.M, s.addData(h, a, o), c = "l";break;case "M":
            a = d[f++], o = d[f++], h = l.M, s.addData(h, a, o), c = "L";break;case "h":
            a += d[f++], h = l.L, s.addData(h, a, o);break;case "H":
            a = d[f++], h = l.L, s.addData(h, a, o);break;case "v":
            o += d[f++], h = l.L, s.addData(h, a, o);break;case "V":
            o = d[f++], h = l.L, s.addData(h, a, o);break;case "C":
            h = l.C, s.addData(h, d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]), a = d[f - 2], o = d[f - 1];break;case "c":
            h = l.C, s.addData(h, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o), a += d[f - 2], o += d[f - 1];break;case "S":
            g = a, v = o;var M = s.len(),
                I = s.data;i === l.C && (g += a - I[M - 4], v += o - I[M - 3]), h = l.C, b = d[f++], S = d[f++], a = d[f++], o = d[f++], s.addData(h, g, v, b, S, a, o);break;case "s":
            g = a, v = o;var M = s.len(),
                I = s.data;i === l.C && (g += a - I[M - 4], v += o - I[M - 3]), h = l.C, b = a + d[f++], S = o + d[f++], a += d[f++], o += d[f++], s.addData(h, g, v, b, S, a, o);break;case "Q":
            b = d[f++], S = d[f++], a = d[f++], o = d[f++], h = l.Q, s.addData(h, b, S, a, o);break;case "q":
            b = d[f++] + a, S = d[f++] + o, a += d[f++], o += d[f++], h = l.Q, s.addData(h, b, S, a, o);break;case "T":
            g = a, v = o;var M = s.len(),
                I = s.data;i === l.Q && (g += a - I[M - 4], v += o - I[M - 3]), a = d[f++], o = d[f++], h = l.Q, s.addData(h, g, v, a, o);break;case "t":
            g = a, v = o;var M = s.len(),
                I = s.data;i === l.Q && (g += a - I[M - 4], v += o - I[M - 3]), a += d[f++], o += d[f++], h = l.Q, s.addData(h, g, v, a, o);break;case "A":
            m = d[f++], y = d[f++], _ = d[f++], x = d[f++], w = d[f++], b = a, S = o, a = d[f++], o = d[f++], h = l.A, ur(b, S, a, o, x, w, m, y, _, h, s);break;case "a":
            m = d[f++], y = d[f++], _ = d[f++], x = d[f++], w = d[f++], b = a, S = o, a += d[f++], o += d[f++], h = l.A, ur(b, S, a, o, x, w, m, y, _, h, s);}
      }("z" === c || "Z" === c) && (h = l.Z, s.addData(h)), i = h;
    }return s.toStatic(), s;
  }function fr(t, e) {
    var n = cr(t);return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(n.data);var e = t.getContext();e && t.rebuildPath(e);
      } else {
        var e = t;n.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      Qf(n, t), this.dirty(!0);
    }, e;
  }function dr(t, e) {
    return new hr(fr(t, e));
  }function pr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }function gr(t, e, n) {
    var i = e.points,
        r = e.smooth;if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = dd(i, r, n, e.smoothConstraint);t.moveTo(i[0][0], i[0][1]);for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              h = a[2 * s + 1],
              u = i[(s + 1) % o];t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
        }
      } else {
        "spline" === r && (i = fd(i, n)), t.moveTo(i[0][0], i[0][1]);for (var s = 1, c = i.length; c > s; s++) {
          t.lineTo(i[s][0], i[s][1]);
        }
      }n && t.closePath();
    }
  }function vr(t, e, n) {
    var i = t.cpx2,
        r = t.cpy2;return null === i || null === r ? [(n ? Ei : Oi)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Ei : Oi)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Vi : Fi)(t.x1, t.cpx1, t.x2, e), (n ? Vi : Fi)(t.y1, t.cpy1, t.y2, e)];
  }function mr(t) {
    Wn.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
  }function yr(t) {
    return hr.extend(t);
  }function _r(t, e, n, i) {
    var r = dr(t, e),
        a = r.getBoundingRect();return n && ("center" === i && (n = wr(n, a)), br(r, n)), r;
  }function xr(t, e, n) {
    var i = new Hn({ style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height }, onload: function onload(t) {
        if ("center" === n) {
          var r = { width: t.width, height: t.height };i.setStyle(wr(e, r));
        }
      } });return i;
  }function wr(t, e) {
    var n,
        i = e.width / e.height,
        r = t.height * i;r <= t.width ? n = t.height : (r = t.width, n = r / i);var a = t.x + t.width / 2,
        o = t.y + t.height / 2;return { x: a - r / 2, y: o - n / 2, width: r, height: n };
  }function br(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
          i = n.calculateTransform(e);t.applyTransform(i);
    }
  }function Sr(t) {
    var e = t.shape,
        n = t.style.lineWidth;return Sd(2 * e.x1) === Sd(2 * e.x2) && (e.x1 = e.x2 = Mr(e.x1, n, !0)), Sd(2 * e.y1) === Sd(2 * e.y2) && (e.y1 = e.y2 = Mr(e.y1, n, !0)), t;
  }function Mr(t, e, n) {
    var i = Sd(2 * t);return (i + Sd(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }function Ir(t) {
    return null != t && "none" != t;
  }function Tr(t) {
    return "string" == typeof t ? Ie(t, -.1) : t;
  }function Cr(t) {
    if (t.__hoverStlDirty) {
      var e = t.style.stroke,
          n = t.style.fill,
          i = t.__hoverStl;i.fill = i.fill || (Ir(n) ? Tr(n) : null), i.stroke = i.stroke || (Ir(e) ? Tr(e) : null);var r = {};for (var a in i) {
        null != i[a] && (r[a] = t.style[a]);
      }t.__normalStl = r, t.__hoverStlDirty = !1;
    }
  }function Dr(t) {
    if (!t.__isHover) {
      if (Cr(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);else {
        var e = t.style,
            n = e.insideRollbackOpt;n && Xr(e), e.extendFrom(t.__hoverStl), n && (qr(e, e.insideOriginalTextPosition, n), null == e.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1;
      }t.__isHover = !0;
    }
  }function kr(t) {
    if (t.__isHover) {
      var e = t.__normalStl;t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1;
    }
  }function Ar(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && Dr(t);
    }) : Dr(t);
  }function Lr(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && kr(t);
    }) : kr(t);
  }function Pr(t, e) {
    t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Cr(t);
  }function Or(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Ar(this);
  }function Er(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Lr(this);
  }function Rr() {
    this.__isEmphasis = !0, Ar(this);
  }function Br() {
    this.__isEmphasis = !1, Lr(this);
  }function zr(t, e, n) {
    t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && Pr(t, e);
    }) : Pr(t, e), t.on("mouseover", Or).on("mouseout", Er), t.on("emphasis", Rr).on("normal", Br);
  }function Nr(t, e, n, i, r, a, o) {
    r = r || Md;var s,
        l = r.labelFetcher,
        h = r.labelDataIndex,
        u = r.labelDimIndex,
        c = n.getShallow("show"),
        f = i.getShallow("show");(c || f) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));var d = c ? s : null,
        p = f ? D(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;(null != d || null != p) && (Fr(t, n, a, r), Fr(e, i, o, r, !0)), t.text = d, e.text = p;
  }function Fr(t, e, n, i, r) {
    return Vr(t, e, i, r), n && o(t, n), t.host && t.host.dirty && t.host.dirty(!1), t;
  }function Vr(t, e, n, i) {
    if (n = n || Md, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");"outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");var a = e.getShallow("rotate");null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5);
    }var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        h = Wr(e);if (h) {
      o = {};for (var u in h) {
        if (h.hasOwnProperty(u)) {
          var c = e.getModel(["rich", u]);Hr(o[u] = {}, c, l, n, i);
        }
      }
    }return t.rich = o, Hr(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
  }function Wr(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Md).rich;if (n) {
        e = e || {};for (var i in n) {
          n.hasOwnProperty(i) && (e[i] = 1);
        }
      }t = t.parentModel;
    }return e;
  }function Hr(t, e, n, i, r, a) {
    if (n = !r && n || Md, t.textFill = Gr(e.getShallow("color"), i) || n.color, t.textStroke = Gr(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
      if (a) {
        var o = t.textPosition;t.insideRollback = qr(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i;
      }null == t.textFill && (t.textFill = i.autoColor);
    }t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Gr(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Gr(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
  }function Gr(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }function qr(t, e, n) {
    var i,
        r = n.useInsideStyle;return null == t.textFill && r !== !1 && (r === !0 || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = { textFill: null, textStroke: t.textStroke, textStrokeWidth: t.textStrokeWidth }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), i;
  }function Xr(t) {
    var e = t.insideRollback;e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth);
  }function Ur(t, e) {
    var n = e || e.getModel("textStyle");return O([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
  }function Yr(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);var o = i && i.isAnimationEnabled();if (o) {
      var s = t ? "Update" : "",
          l = i.getShallow("animationDuration" + s),
          h = i.getShallow("animationEasing" + s),
          u = i.getShallow("animationDelay" + s);"function" == typeof u && (u = u(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
    } else e.stopAnimation(), e.attr(n), a && a();
  }function Zr(t, e, n, i, r) {
    Yr(!0, t, e, n, i, r);
  }function jr(t, e, n, i, r) {
    Yr(!1, t, e, n, i, r);
  }function $r(t, e, n) {
    function i(t) {
      var e = {};return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }function r(t) {
      var e = { position: W(t.position), rotation: t.rotation };return t.shape && (e.shape = o({}, t.shape)), e;
    }if (t && e) {
      var a = i(t);e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];if (e) {
            var i = r(t);t.attr(r(e)), Zr(t, i, n, t.dataIndex);
          }
        }
      });
    }
  }function Kr(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t;
  }function Qr(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t[e[i]] : null, null != t)); i++) {}return null == t && n && (t = n.get(e)), t;
  }function Jr(t, e) {
    var n = Ad(t).getParent;return n ? n.call(t, e) : t.parentModel;
  }function ta(t) {
    return [t || "", Ld++, Math.random().toFixed(5)].join("_");
  }function ea(t) {
    var e = {};return t.registerSubTypeDefaulter = function (t, n) {
      t = Mi(t), e[t.main] = n;
    }, t.determineSubType = function (n, i) {
      var r = i.type;if (!r) {
        var a = Mi(n).main;t.hasSubTypes(n) && e[a] && (r = e[a](i));
      }return r;
    }, t;
  }function na(t, e) {
    function n(t) {
      var n = {},
          a = [];return d(t, function (o) {
        var s = i(n, o),
            l = s.originalDeps = e(o),
            u = r(l, t);s.entryCount = u.length, 0 === s.entryCount && a.push(o), d(u, function (t) {
          h(s.predecessor, t) < 0 && s.predecessor.push(t);var e = i(n, t);h(e.successor, t) < 0 && e.successor.push(o);
        });
      }), { graph: n, noEntryList: a };
    }function i(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
    }function r(t, e) {
      var n = [];return d(t, function (t) {
        h(e, t) >= 0 && n.push(t);
      }), n;
    }t.topologicalTravel = function (t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && h.push(t);
      }function o(t) {
        u[t] = !0, a(t);
      }if (t.length) {
        var s = n(e),
            l = s.graph,
            h = s.noEntryList,
            u = {};for (d(t, function (t) {
          u[t] = !0;
        }); h.length;) {
          var c = h.pop(),
              f = l[c],
              p = !!u[c];p && (i.call(r, c, f.originalDeps.slice()), delete u[c]), d(f.successor, p ? o : a);
        }d(u, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }function ia(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
  }function ra(t, e, n, i) {
    var r = e[1] - e[0],
        a = n[1] - n[0];if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;if (i) {
      if (r > 0) {
        if (t <= e[0]) return n[0];if (t >= e[1]) return n[1];
      } else {
        if (t >= e[0]) return n[0];if (t <= e[1]) return n[1];
      }
    } else {
      if (t === e[0]) return n[0];if (t === e[1]) return n[1];
    }return (t - e[0]) / r * a + n[0];
  }function aa(t, e) {
    switch (t) {case "center":case "middle":
        t = "50%";break;case "left":case "top":
        t = "0%";break;case "right":case "bottom":
        t = "100%";}return "string" == typeof t ? ia(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;
  }function oa(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
  }function sa(t) {
    var e = t.toString(),
        n = e.indexOf("e");if (n > 0) {
      var i = +e.slice(n + 1);return 0 > i ? -i : 0;
    }var r = e.indexOf(".");return 0 > r ? 0 : e.length - 1 - r;
  }function la(t, e) {
    var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max(-r + a, 0), 20);return isFinite(o) ? o : 20;
  }function ha(t, e, n) {
    if (!t[e]) return 0;var i = g(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);if (0 === i) return 0;for (var r = Math.pow(10, n), a = p(t, function (t) {
      return (isNaN(t) ? 0 : t) / i * r * 100;
    }), o = 100 * r, s = p(a, function (t) {
      return Math.floor(t);
    }), l = g(s, function (t, e) {
      return t + e;
    }, 0), h = p(a, function (t, e) {
      return t - s[e];
    }); o > l;) {
      for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, d = h.length; d > f; ++f) {
        h[f] > u && (u = h[f], c = f);
      }++s[c], h[c] = 0, ++l;
    }return s[e] / r;
  }function ua(t) {
    var e = 2 * Math.PI;return (t % e + e) % e;
  }function ca(t) {
    return t > -Pd && Pd > t;
  }function fa(t) {
    if (t instanceof Date) return t;if ("string" == typeof t) {
      var e = Od.exec(t);if (!e) return new Date(0 / 0);if (e[8]) {
        var n = +e[4] || 0;return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }return new Date(null == t ? 0 / 0 : Math.round(t));
  }function da(t) {
    return Math.pow(10, pa(t));
  }function pa(t) {
    return Math.floor(Math.log(t) / Math.LN10);
  }function ga(t, e) {
    var n,
        i = pa(t),
        r = Math.pow(10, i),
        a = t / r;return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
  }function va(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }function ma(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }function ya(t, e, n) {
    _(e) || (e = [e]);var i = e.length;if (!i) return "";for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Rd[a];t = t.replace(Bd(o), Bd(o, 0));
    }for (var s = 0; i > s; s++) {
      for (var l = 0; l < r.length; l++) {
        var h = e[s][r[l]];t = t.replace(Bd(Rd[l], s), n ? ma(h) : h);
      }
    }return t;
  }function _a(t, e) {
    t = w(t) ? { color: t, extraCssText: e } : t || {};var n = t.color,
        i = t.type,
        e = t.extraCssText;return n ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ma(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + ma(n) + ";" + (e || "") + '"></span>' : "";
  }function xa(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }function wa(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");var i = fa(e),
        r = n ? "UTC" : "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        h = i["get" + r + "Minutes"](),
        u = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();return t = t.replace("MM", xa(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", xa(s, 2)).replace("d", s).replace("hh", xa(l, 2)).replace("h", l).replace("mm", xa(h, 2)).replace("m", h).replace("ss", xa(u, 2)).replace("s", u).replace("SSS", xa(c, 3));
  }function ba(t, e, n, i, r) {
    var a = 0,
        o = 0;null == i && (i = 1 / 0), null == r && (r = 1 / 0);var s = 0;e.eachChild(function (l, h) {
      var u,
          c,
          f = l.position,
          d = l.getBoundingRect(),
          p = e.childAt(h + 1),
          g = p && p.getBoundingRect();if ("horizontal" === t) {
        var v = d.width + (g ? -g.x + d.x : 0);u = a + v, u > i || l.newline ? (a = 0, u = v, o += s + n, s = d.height) : s = Math.max(s, d.height);
      } else {
        var m = d.height + (g ? -g.y + d.y : 0);c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = d.width) : s = Math.max(s, d.width);
      }l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + n : o = c + n);
    });
  }function Sa(t, e, n) {
    n = Ed(n || 0);var i = e.width,
        r = e.height,
        a = aa(t.left, i),
        o = aa(t.top, r),
        s = aa(t.right, i),
        l = aa(t.bottom, r),
        h = aa(t.width, i),
        u = aa(t.height, r),
        c = n[2] + n[0],
        f = n[1] + n[3],
        d = t.aspect;switch (isNaN(h) && (h = i - s - f - a), isNaN(u) && (u = r - l - c - o), null != d && (isNaN(h) && isNaN(u) && (d > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = d * u), isNaN(u) && (u = h / d)), isNaN(a) && (a = i - s - h - f), isNaN(o) && (o = r - l - u - c), t.left || t.right) {case "center":
        a = i / 2 - h / 2 - n[3];break;case "right":
        a = i - h - f;}switch (t.top || t.bottom) {case "middle":case "center":
        o = r / 2 - u / 2 - n[0];break;case "bottom":
        o = r - u - c;}a = a || 0, o = o || 0, isNaN(h) && (h = i - f - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));var p = new Ve(a + n[3], o + n[0], h, u);return p.margin = n, p;
  }function Ma(t, e, n) {
    function i(n, i) {
      var o = {},
          l = 0,
          h = {},
          u = 0,
          c = 2;if (Nd(n, function (e) {
        h[e] = t[e];
      }), Nd(n, function (t) {
        r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
      }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;if (u !== c && l) {
        if (l >= c) return o;for (var f = 0; f < n.length; f++) {
          var d = n[f];if (!r(o, d) && r(t, d)) {
            o[d] = t[d];break;
          }
        }return o;
      }return h;
    }function r(t, e) {
      return t.hasOwnProperty(e);
    }function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }function o(t, e, n) {
      Nd(t, function (t) {
        e[t] = n[t];
      });
    }!b(n) && (n = {});var s = n.ignoreSize;!_(s) && (s = [s, s]);var l = i(Vd[0], 0),
        h = i(Vd[1], 1);o(Vd[0], t, l), o(Vd[1], t, h);
  }function Ia(t) {
    return Ta({}, t);
  }function Ta(t, e) {
    return e && t && Nd(Fd, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t;
  }function Ca(t) {
    var e = [];return d(Gd.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return Mi(t).main;
    }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }function Da(t, e) {
    for (var n = t.length, i = 0; n > i; i++) {
      if (t[i].length > e) return t[i];
    }return t[n - 1];
  }function ka(t) {
    var e = t.get("coordinateSystem"),
        n = { coordSysName: e, coordSysDims: [], axisMap: z(), categoryAxisMap: z() },
        i = Zd[e];return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
  }function Aa(t) {
    return "category" === t.get("type");
  }function La(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Qd ? {} : []), this.sourceFormat = t.sourceFormat || Jd, this.seriesLayoutBy = t.seriesLayoutBy || ep, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && z(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }function Pa(t) {
    return ip(t).source;
  }function Oa(t) {
    ip(t).datasetMap = z();
  }function Ea(t) {
    var e = t.option,
        n = e.data,
        i = M(n) ? tp : jd,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = Va(t);if (l) {
      var h = l.option;n = h.source, i = ip(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions;
    }var u = Ra(n, i, a, o, s),
        c = e.encode;!c && l && (c = Fa(t, l, n, i, a, u)), ip(t).source = new La({ data: n, fromDataset: r, seriesLayoutBy: a, sourceFormat: i, dimensionsDefine: u.dimensionsDefine, startIndex: u.startIndex, dimensionsDetectCount: u.dimensionsDetectCount, encodeDefine: c });
  }function Ra(t, e, n, i, r) {
    if (!t) return { dimensionsDefine: Ba(r) };var a, o, s;if (e === $d) "auto" === i || null == i ? za(function (t) {
      null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0);
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], za(function (t, e) {
      r[e] = null != t ? t : "";
    }, n, t)), a = r ? r.length : n === np ? t.length : t[0] ? t[0].length : null;else if (e === Kd) r || (r = Na(t), s = !0);else if (e === Qd) r || (r = [], s = !0, d(t, function (t, e) {
      r.push(e);
    }));else if (e === jd) {
      var l = fi(t[0]);a = _(l) && l.length || 1;
    }var h;return s && d(r, function (t, e) {
      "name" === (b(t) ? t.name : t) && (h = e);
    }), { startIndex: o, dimensionsDefine: Ba(r), dimensionsDetectCount: a, potentialNameDimIndex: h };
  }function Ba(t) {
    if (t) {
      var e = z();return p(t, function (t) {
        if (t = o({}, b(t) ? t : { name: t }), null == t.name) return t;t.name += "", null == t.displayName && (t.displayName = t.name);var n = e.get(t.name);return n ? t.name += "-" + n.count++ : e.set(t.name, { count: 1 }), t;
      });
    }
  }function za(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === np) for (var r = 0; r < n.length && i > r; r++) {
      t(n[r] ? n[r][0] : null, r);
    } else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) {
      t(a[r], r);
    }
  }function Na(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]);) {}if (e) {
      var i = [];return d(e, function (t, e) {
        i.push(e);
      }), i;
    }
  }function Fa(t, e, n, i, r, a) {
    var o = ka(t),
        s = {},
        l = [],
        h = [],
        u = t.subType,
        c = z(["pie", "map", "funnel"]),
        f = z(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);if (o && null != f.get(u)) {
      var p = t.ecModel,
          g = ip(p).datasetMap,
          v = e.uid + "_" + r,
          m = g.get(v) || g.set(v, { categoryWayDim: 1, valueWayDim: 0 });d(o.coordSysDims, function (t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;s[t] = e, h.push(e);
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {
          var e = m.categoryWayDim++;s[t] = e, h.push(e);
        }
      });
    } else if (null != c.get(u)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) {
        Ha(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
      }if (null != y) {
        s.value = y;var x = a.potentialNameDimIndex || Math.max(y - 1, 0);h.push(x), l.push(x);
      }
    }return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
  }function Va(t) {
    var e = t.option,
        n = e.data;return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }function Wa(t, e) {
    return Ha(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }function Ha(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : w(t) && "-" !== t ? !0 : void 0;
    }var s,
        l = 5;if (M(t)) return !1;var h;if (i && (h = i[a], h = b(h) ? h.name : h), e === $d) {
      if (n === np) {
        for (var u = t[a], c = 0; c < (u || []).length && l > c; c++) {
          if (null != (s = o(u[r + c]))) return s;
        }
      } else for (var c = 0; c < t.length && l > c; c++) {
        var f = t[r + c];if (f && null != (s = o(f[a]))) return s;
      }
    } else if (e === Kd) {
      if (!h) return;for (var c = 0; c < t.length && l > c; c++) {
        var d = t[c];if (d && null != (s = o(d[h]))) return s;
      }
    } else if (e === Qd) {
      if (!h) return;var u = t[h];if (!u || M(u)) return !1;for (var c = 0; c < u.length && l > c; c++) {
        if (null != (s = o(u[c]))) return s;
      }
    } else if (e === jd) for (var c = 0; c < t.length && l > c; c++) {
      var d = t[c],
          p = fi(d);if (!_(p)) return !1;if (null != (s = o(p[a]))) return s;
    }return !1;
  }function Ga(t, e) {
    if (e) {
      var n = e.seiresIndex,
          i = e.seriesId,
          r = e.seriesName;return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
    }
  }function qa(t, e) {
    var n = t.color && !t.colorLayer;d(e, function (e, a) {
      "colorLayer" === a && n || Gd.hasClass(a) || ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e));
    });
  }function Xa(t) {
    t = t, this.option = {}, this.option[rp] = 1, this._componentsMap = z({ series: [] }), this._seriesIndices, this._seriesIndicesMap, qa(t, this._theme.option), r(t, Xd, !1), this.mergeOption(t);
  }function Ua(t, e) {
    _(e) || (e = e ? [e] : []);var n = {};return d(e, function (e) {
      n[e] = (t.get(e) || []).slice();
    }), n;
  }function Ya(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : Gd.determineSubType(t, e);return i;
  }function Za(t, e) {
    t._seriesIndicesMap = z(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }function ja(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }function $a(t) {
    d(op, function (e) {
      this[e] = m(t[e], t);
    }, this);
  }function Ka() {
    this._coordinateSystems = [];
  }function Qa(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }function Ja(t, e, n) {
    var i,
        r,
        a = [],
        o = [],
        s = t.timeline;if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};var l = t.media;lp(l, function (t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t));
      });
    }return r || (r = t), r.timeline || (r.timeline = s), lp([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      lp(e, function (e) {
        e(t, n);
      });
    }), { baseOption: r, timelineOptions: a, mediaDefault: i, mediaList: o };
  }function to(t, e, n) {
    var i = { width: e, height: n, aspectratio: e / n },
        r = !0;return d(t, function (t, e) {
      var n = e.match(fp);if (n && n[1] && n[2]) {
        var a = n[1],
            o = n[2].toLowerCase();eo(i[o], t, a) || (r = !1);
      }
    }), r;
  }function eo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
  }function no(t, e) {
    return t.join(",") === e.join(",");
  }function io(t, e) {
    e = e || {}, lp(e, function (e, n) {
      if (null != e) {
        var i = t[n];if (Gd.hasClass(n)) {
          e = ui(e), i = ui(i);var r = pi(i, e);t[n] = up(r, function (t) {
            return t.option && t.exist ? cp(t.exist, t.option, !0) : t.exist || t.option;
          });
        } else t[n] = cp(i, e, !0);
      }
    });
  }function ro(t) {
    var e = t && t.itemStyle;if (e) for (var n = 0, i = gp.length; i > n; n++) {
      var a = gp[n],
          o = e.normal,
          s = e.emphasis;o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }function ao(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
          r = t[e].emphasis;i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }function oo(t) {
    ao(t, "itemStyle"), ao(t, "lineStyle"), ao(t, "areaStyle"), ao(t, "label"), ao(t, "labelLine"), ao(t, "upperLabel"), ao(t, "edgeLabel");
  }function so(t, e) {
    var n = pp(t) && t[e],
        i = pp(n) && n.textStyle;if (i) for (var r = 0, a = jc.length; a > r; r++) {
      var e = jc[r];i.hasOwnProperty(e) && (n[e] = i[e]);
    }
  }function lo(t) {
    t && (oo(t), so(t, "label"), t.emphasis && so(t.emphasis, "label"));
  }function ho(t) {
    if (pp(t)) {
      ro(t), oo(t), so(t, "label"), so(t, "upperLabel"), so(t, "edgeLabel"), t.emphasis && (so(t.emphasis, "label"), so(t.emphasis, "upperLabel"), so(t.emphasis, "edgeLabel"));var e = t.markPoint;e && (ro(e), lo(e));var n = t.markLine;n && (ro(n), lo(n));var i = t.markArea;i && lo(i);var r = t.data;if ("graph" === t.type) {
        r = r || t.nodes;var a = t.links || t.edges;if (a && !M(a)) for (var o = 0; o < a.length; o++) {
          lo(a[o]);
        }d(t.categories, function (t) {
          oo(t);
        });
      }if (r && !M(r)) for (var o = 0; o < r.length; o++) {
        lo(r[o]);
      }var e = t.markPoint;if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {
        lo(s[o]);
      }var n = t.markLine;if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) {
        _(l[o]) ? (lo(l[o][0]), lo(l[o][1])) : lo(l[o]);
      }"gauge" === t.type ? (so(t, "axisLabel"), so(t, "title"), so(t, "detail")) : "treemap" === t.type && (ao(t.breadcrumb, "itemStyle"), d(t.levels, function (t) {
        oo(t);
      }));
    }
  }function uo(t) {
    return _(t) ? t : t ? [t] : [];
  }function co(t) {
    return (_(t) ? t[0] : t) || {};
  }function fo(t, e) {
    e = e.split(",");for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++) {}return n;
  }function po(t, e, n, i) {
    e = e.split(",");for (var r, a = t, o = 0; o < e.length - 1; o++) {
      r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    }(i || null == a[e[o]]) && (a[e[o]] = n);
  }function go(t) {
    d(mp, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }function vo(t) {
    d(t, function (e, n) {
      var i = [],
          r = [0 / 0, 0 / 0],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, h) {
        var u = o.get(e.stackedDimension, h);if (isNaN(u)) return r;var c, f;s ? f = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);for (var d = 0 / 0, p = n - 1; p >= 0; p--) {
          var g = t[p];if (s || (f = g.data.rawIndexOf(g.stackedByDimension, c)), f >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, f);if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
              u += v, d = v;break;
            }
          }
        }return i[0] = u, i[1] = d, i;
      });o.hostModel.setData(l), e.data = l;
    });
  }function mo(t, e) {
    La.isInstance(t) || (t = La.seriesDataToSource(t)), this._source = t;var n = this._data = t.data,
        i = t.sourceFormat;i === tp && (this._offset = 0, this._dimSize = e, this._data = n);var r = bp[i === $d ? i + "_" + t.seriesLayoutBy : i];o(this, r);
  }function yo() {
    return this._data.length;
  }function _o(t) {
    return this._data[t];
  }function xo(t) {
    for (var e = 0; e < t.length; e++) {
      this._data.push(t[e]);
    }
  }function wo(t, e, n) {
    return null != n ? t[n] : t;
  }function bo(t, e, n, i) {
    return So(t[i], this._dimensionInfos[e]);
  }function So(t, e) {
    var n = e && e.type;if ("ordinal" === n) {
      var i = e && e.ordinalMeta;return i ? i.parseAndCollect(t) : t;
    }return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +fa(t)), null == t || "" === t ? 0 / 0 : +t;
  }function Mo(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);if (null != i) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(n);return s && (r = s.name, a = s.index), Sp[o](i, e, a, r);
      }
    }
  }function Io(t, e, n) {
    if (t) {
      var i = t.getProvider().getSource().sourceFormat;if (i === jd || i === Kd) {
        var r = t.getRawDataItem(e);return i !== jd || b(r) || (r = null), r ? r[n] : void 0;
      }
    }
  }function To(t) {
    return new Co(t);
  }function Co(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
  }function Do(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;var n, i;!e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress)), t._progress = n;var r = t._downstream;return r && r.dirty(), i;
  }function ko(t) {
    var e = t.name;vi(t) || (t.name = Ao(t) || e);
  }function Ao(t) {
    var e = t.getRawData(),
        n = e.mapDimension("seriesName", !0),
        i = [];return d(n, function (t) {
      var n = e.getDimensionInfo(t);n.displayName && i.push(n.displayName);
    }), i.join(" ");
  }function Lo(t) {
    return t.model.getRawData().count();
  }function Po(t) {
    var e = t.model;return e.setData(e.getRawData().cloneShallow()), Oo;
  }function Oo(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }function Eo(t, e) {
    d(t.CHANGABLE_METHODS, function (n) {
      t.wrapMethod(n, y(Ro, e));
    });
  }function Ro(t) {
    var e = Bo(t);e && e.setOutputEnd(this.count());
  }function Bo(t) {
    var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);if (n) {
      var i = n.currentTask;if (i) {
        var r = i.agentStubMap;r && (i = r.get(t.uid));
      }return i;
    }
  }function zo() {
    this.group = new Qu(), this.uid = ta("viewChart"), this.renderTask = To({ plan: Vo, reset: Wo }), this.renderTask.context = { view: this };
  }function No(t, e) {
    if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) {
      No(t.childAt(n), e);
    }
  }function Fo(t, e, n) {
    var i = yi(t, e);null != i ? d(ui(i), function (e) {
      No(t.getItemGraphicEl(e), n);
    }) : t.eachItemGraphicEl(function (t) {
      No(t, n);
    });
  }function Vo(t) {
    return Ep(t.model);
  }function Wo(t) {
    var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.canProgressiveRender,
        o = t.view,
        s = r && Op(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";return "render" !== l && o[l](e, n, i, r), Bp[l];
  }function Ho(t, e, n) {
    function i() {
      u = new Date().getTime(), c = null, t.apply(o, s || []);
    }var r,
        a,
        o,
        s,
        l,
        h = 0,
        u = 0,
        c = null;e = e || 0;var f = function f() {
      r = new Date().getTime(), o = this, s = arguments;var t = l || e,
          f = l || n;l = null, a = r - (f ? h : u) - t, clearTimeout(c), f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r;
    };return f.clear = function () {
      c && (clearTimeout(c), c = null);
    }, f.debounceNextCall = function (t) {
      l = t;
    }, f;
  }function Go(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished, this._dataProcessorHandlers = n.slice(), this._visualHandlers = i.slice(), this._stageTaskMap = z();
  }function qo(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }r = r || {};var o;d(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            h = s.overallTask;if (h) {
          var u,
              c = h.agentStubMap;c.each(function (t) {
            a(r, t) && (t.dirty(), u = !0);
          }), u && h.dirty(), Gp(h, i);var f = t.getPerformArgs(h, r.block);c.each(function (t) {
            t.perform(f);
          }), o |= h.perform(f);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();var l = t.getPerformArgs(s, r.block);l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), Gp(s, i), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }function Xo(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
          s = o.get(a) || o.set(a, To({ plan: Ko, reset: Qo, count: ts }));s.context = { model: n, ecModel: i, api: r, useClearVisual: e.isVisual && !e.isLayout, plan: e.plan, reset: e.reset, scheduler: t }, es(t, n, s);
    }var o = n.seriesTaskMap || (n.seriesTaskMap = z()),
        s = e.seriesType,
        l = e.getTargetSeries;e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);var h = t._pipelineMap;o.each(function (t, e) {
      h.get(e) || (t.dispose(), o.removeKey(e));
    });
  }function Uo(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
          i = s.get(n) || s.set(n, To({ reset: Zo, onDirty: $o }));i.context = { model: e, overallProgress: u, isOverallFilter: c }, i.agent = o, i.__block = u, es(t, e, i);
    }var o = n.overallTask = n.overallTask || To({ reset: Yo });o.context = { ecModel: i, api: r, overallReset: e.overallReset, scheduler: t };var s = o.agentStubMap = o.agentStubMap || z(),
        l = e.seriesType,
        h = e.getTargetSeries,
        u = !0,
        c = e.isOverallFilter;l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, d(i.getSeries(), a));var f = t._pipelineMap;s.each(function (t, e) {
      f.get(e) || (t.dispose(), s.removeKey(e));
    });
  }function Yo(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }function Zo(t) {
    return t.overallProgress && jo;
  }function jo() {
    this.agent.dirty(), this.getDownstream().dirty();
  }function $o() {
    this.agent && this.agent.dirty();
  }function Ko(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }function Qo(t) {
    t.useClearVisual && t.data.clearAllVisual();var e = t.resetDefines = ui(t.reset(t.model, t.ecModel, t.api, t.payload));return e.length ? Jo : void 0;
  }function Jo(t, e) {
    for (var n = e.data, i = e.resetDefines, r = 0; r < i.length; r++) {
      var a = i[r];if (a && a.dataEach) for (var o = t.start; o < t.end; o++) {
        a.dataEach(n, o);
      } else a && a.progress && a.progress(t, n);
    }
  }function ts(t) {
    return t.data.count();
  }function es(t, e, n) {
    var i = e.uid,
        r = t._pipelineMap.get(i);!r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
  }function ns(t) {
    qp = null;try {
      t(Xp, Up);
    } catch (e) {}return qp;
  }function is(t, e) {
    for (var n in e.prototype) {
      t[n] = N;
    }
  }function rs(t) {
    return function (e, n, i) {
      e = e && e.toLowerCase(), wu.prototype[t].call(this, e, n, i);
    };
  }function as() {
    wu.call(this);
  }function os(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }n = n || {}, "string" == typeof e && (e = Cg[e]), this.id, this.group, this._dom = t;var a = "canvas",
        o = this._zr = hi(t, { renderer: n.renderer || a, devicePixelRatio: n.devicePixelRatio, width: n.width, height: n.height });this._throttledZrFlush = Ho(m(o.flush, o), 17);var e = i(e);e && _p(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ka();var s = this._api = Ms(this);Ze(Tg, r), Ze(Sg, r), this._scheduler = new Go(this, s, Sg, Tg), wu.call(this), this._messageCenter = new as(), this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), ps(o, this), E(this);
  }function ss(t, e, n) {
    var i,
        r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();e = xi(r, e);for (var o = 0; o < a.length; o++) {
      var s = a[o];if (s[t] && null != (i = s[t](r, e, n))) return i;
    }
  }function ls(t) {
    var e = t._model,
        n = t._scheduler;n.restorePipelines(e), n.prepareStageTasks(), gs(t, "component", e, n), gs(t, "chart", e, n), n.plan();
  }function hs(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
    }var o = t._model;if (!i) return void tg(t._componentsViews.concat(t._chartsViews), a);var s = {};s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];var l = { mainType: i, query: s };r && (l.subType = r), o && o.eachComponent(l, function (e) {
      a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }function us(t, e) {
    var n = t._chartsMap,
        i = t._scheduler;e.eachSeries(function (t) {
      i.updateStreamModes(t, n[t.__viewId]);
    });
  }function cs(t, e) {
    var n = t.type,
        i = t.escapeConnect,
        r = wg[n],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        h = l.pop();l = null != l[0] && ig(l[0]), this[gg] = !0;var u = [t],
        c = !1;t.batch && (c = !0, u = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));var f,
        d = [],
        g = "highlight" === n || "downplay" === n;tg(u, function (t) {
      f = r.action(t, this._model, this._api), f = f || o({}, t), f.type = a.event || f.type, d.push(f), g ? hs(this, h, t, "series") : l && hs(this, h, t, l.main, l.sub);
    }, this), "none" === h || g || l || (this[vg] ? (ls(this), _g.update.call(this, t), this[vg] = !1) : _g[h].call(this, t)), f = c ? { type: a.event || n, escapeConnect: i, batch: d } : d[0], this[gg] = !1, !e && this._messageCenter.trigger(f.type, f);
  }function fs(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();cs.call(this, n, t);
    }
  }function ds(t) {
    !t && this.trigger("updated");
  }function ps(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[vg] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }function gs(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];if (!r) {
        var u = ig(t.type),
            c = a ? Ap.getClass(u.main, u.sub) : zo.getClass(u.sub);r = new c(), r.init(n, h), s[e] = r, o.push(r), l.add(r.group);
      }t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = { mainType: t.mainType, index: t.componentIndex }, !a && i.prepareView(r, t, n, h);
    }for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) {
      o[u].__alive = !1;
    }a ? n.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : n.eachSeries(r);for (var u = 0; u < o.length;) {
      var c = o[u];c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }function vs(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }function ms(t, e, n, i) {
    ys(t, e, n, i), tg(t._chartsViews, function (t) {
      t.__alive = !1;
    }), _s(t, e, n, i), tg(t._chartsViews, function (t) {
      t.__alive || t.remove(e, n);
    });
  }function ys(t, e, n, i, r) {
    tg(r || t._componentsViews, function (t) {
      var r = t.__model;t.render(r, e, n, i), Ss(r, t);
    });
  }function _s(t, e, n, i, r) {
    var a,
        o = t._scheduler;e.eachSeries(function (e) {
      var n = t._chartsMap[e.__viewId];n.__alive = !0;var s = n.renderTask;o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Ss(e, n), bs(e, n);
    }), o.unfinished |= a, ws(t._zr, e), Fp(t._zr.dom, e);
  }function xs(t, e) {
    tg(Ig, function (n) {
      n(t, e);
    });
  }function ws(t, e) {
    var n = t.storage,
        i = 0;n.traverse(function (t) {
      t.isGroup || i++;
    }), i > e.get("hoverLayerThreshold") && !iu.node && n.traverse(function (t) {
      t.isGroup || (t.useHoverLayer = !0);
    });
  }function bs(t, e) {
    var n = t.get("blendMode") || null;e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", n);
      });
    });
  }function Ss(t, e) {
    var n = t.get("z"),
        i = t.get("zlevel");e.group.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
    });
  }function Ms(t) {
    var e = t._coordSysMgr;return o(new $a(t), { getCoordinateSystems: m(e.getCoordinateSystems, e), getComponentByElement: function getComponentByElement(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;if (null != n) return t._model.getComponent(n.mainType, n.index);e = e.parent;
        }
      } });
  }function Is(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i[a] = e;
      }
    }var n = 0,
        i = 1,
        r = 2,
        a = "__connectUpdateStatus";tg(bg, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (Ag[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;var s = t.makeActionFromEvent(o),
              l = [];tg(kg, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, n), tg(l, function (t) {
            t[a] !== i && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }function Ts(t, e, n) {
    var i = As(t);if (i) return i;var r = new os(t, e, n);return r.id = "ec_" + Lg++, kg[r.id] = r, bi(t, Og, r.id), Is(r), r;
  }function Cs(t) {
    if (_(t)) {
      var e = t;t = null, tg(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + Pg++, tg(e, function (e) {
        e.group = t;
      });
    }return Ag[t] = !0, t;
  }function Ds(t) {
    Ag[t] = !1;
  }function ks(t) {
    "string" == typeof t ? t = kg[t] : t instanceof os || (t = As(t)), t instanceof os && !t.isDisposed() && t.dispose();
  }function As(t) {
    return kg[Si(t, Og)];
  }function Ls(t) {
    return kg[t];
  }function Ps(t, e) {
    Cg[t] = e;
  }function Os(t) {
    Mg.push(t);
  }function Es(t, e) {
    Ws(Sg, t, e, sg);
  }function Rs(t) {
    Ig.push(t);
  }function Bs(t, e, n) {
    "function" == typeof e && (n = e, e = "");var i = ng(t) ? t.type : [t, t = { event: e }][0];t.event = (t.event || i).toLowerCase(), e = t.event, Jp(mg.test(i) && mg.test(e)), wg[i] || (wg[i] = { action: n, actionInfo: t }), bg[e] = i;
  }function zs(t, e) {
    Ka.register(t, e);
  }function Ns(t) {
    var e = Ka.get(t);return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
  }function Fs(t, e) {
    Ws(Tg, t, e, hg, "layout");
  }function Vs(t, e) {
    Ws(Tg, t, e, cg, "visual");
  }function Ws(t, e, n, i, r) {
    (eg(e) || ng(e)) && (n = e, e = i);var a = Go.wrapStageHandler(n, r);return a.__prio = e, a.__raw = n, t.push(a), a;
  }function Hs(t, e) {
    Dg[t] = e;
  }function Gs(t) {
    return Gd.extend(t);
  }function qs(t) {
    return Ap.extend(t);
  }function Xs(t) {
    return kp.extend(t);
  }function Us(t) {
    return zo.extend(t);
  }function Ys(t) {
    n("createCanvas", t);
  }function Zs(t, e, n) {
    e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), Eg[t] = { geoJson: e, specialAreas: n };
  }function js(t) {
    return Eg[t];
  }function $s(t) {
    return t;
  }function Ks(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || $s, this._newKeyGetter = i || $s, this.context = r;
  }function Qs(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
          s = e[o];null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }function Js(t) {
    var e = {},
        n = e.encode = {},
        i = z(),
        r = [];d(t.dimensions, function (e) {
      var a = t.getDimensionInfo(e),
          o = a.coordDim;if (o) {
        var s = n[o];n.hasOwnProperty(o) || (s = n[o] = []), s[a.coordDimIndex] = e, a.isExtraCoord || (i.set(o, 1), el(a.type) && (r[0] = e));
      }zg.each(function (t, e) {
        var i = n[e];n.hasOwnProperty(e) || (i = n[e] = []);var r = a.otherDims[e];null != r && r !== !1 && (i[r] = a.name);
      });
    });var a = [],
        o = {};i.each(function (t, e) {
      var i = n[e];o[e] = i[0], a = a.concat(i);
    }), e.dataDimsOnCoord = a, e.encodeFirstDimNotExtra = o;var s = n.label;s && s.length && (r = s.slice());var l = r.slice(),
        h = n.tooltip;return h && h.length && (l = h.slice()), n.defaultedLabel = r, n.defaultedTooltip = l, e;
  }function tl(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }function el(t) {
    return !("ordinal" === t || "time" === t);
  }function nl(t) {
    return t._rawCount > 65535 ? Gg : qg;
  }function il(t) {
    var e = t.constructor;return e === Array ? t.slice() : new e(t);
  }function rl(t, e) {
    d(Xg.concat(e.__wrappedMethods || []), function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t.__wrappedMethods = e.__wrappedMethods;
  }function al(t) {
    var e = t._invertedIndicesMap;d(e, function (n, i) {
      var r = t._dimensionInfos[i],
          a = r.ordinalMeta;if (a) {
        n = e[i] = new Gg(a.categories.length);for (var o = 0; o < n.length; o++) {
          n[o] = 0 / 0;
        }for (var o = 0; o < t._count; o++) {
          n[t.get(i, o)] = o;
        }
      }
    });
  }function ol(t) {
    return t;
  }function sl(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }function ll(t, e) {
    var n = t._idList[e];return null == n && (n = t._getIdFromStore(e)), null == n && (n = Wg + e), n;
  }function hl(t) {
    return _(t) || (t = [t]), t;
  }function ul(t, e) {
    var n = t.dimensions,
        i = new Ug(p(n, t.getDimensionInfo, t), t.hostModel);rl(i, t);for (var r = i._storage = {}, a = t._storage, s = o({}, t._rawExtent), l = 0; l < n.length; l++) {
      var u = n[l];a[u] && (h(e, u) >= 0 ? (r[u] = cl(a[u]), s[u] = fl()) : r[u] = a[u]);
    }return i;
  }function cl(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) {
      e[n] = il(t[n]);
    }return e;
  }function fl() {
    return [1 / 0, -1 / 0];
  }function dl(t, e, n) {
    function r(t, e, n) {
      null != zg.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0));
    }La.isInstance(e) || (e = La.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();for (var a = (n.dimsDef || []).slice(), l = z(n.encodeDef), h = z(), u = z(), c = [], f = pl(e, t, a, n.dimCount), p = 0; f > p; p++) {
      var g = a[p] = o({}, b(a[p]) ? a[p] : { name: a[p] }),
          v = g.name,
          m = c[p] = { otherDims: {} };null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
    }l.each(function (t, e) {
      t = ui(t).slice();var n = l.set(e, []);d(t, function (t, i) {
        w(t) && (t = h.get(t)), null != t && f > t && (n[i] = t, r(c[t], e, i));
      });
    });var y = 0;d(t, function (t) {
      var e, t, n, a;if (w(t)) e = t, t = {};else {
        e = t.name;var o = t.ordinalMeta;t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }var h = ui(l.get(e));if (!h.length) for (var u = 0; u < (n && n.length || 1); u++) {
        for (; y < c.length && null != c[y].coordDim;) {
          y++;
        }y < c.length && h.push(y++);
      }d(h, function (i, o) {
        var l = c[i];r(s(l, t), e, o), null == l.name && n && (l.name = l.displayName = n[o]), a && s(l.otherDims, a);
      });
    });var _ = n.generateCoord,
        x = n.generateCoordCount,
        S = null != x;x = _ ? x || 1 : 0;for (var M = _ || "value", I = 0; f > I; I++) {
      var m = c[I] = c[I] || {},
          T = m.coordDim;null == T && (m.coordDim = gl(M, u, S), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = gl(m.coordDim, h)), null == m.type && Wa(e, I, m.name) && (m.type = "ordinal");
    }return c;
  }function pl(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);return d(e, function (t) {
      var e = t.dimsDef;e && (r = Math.max(r, e.length));
    }), r;
  }function gl(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) {
        i++;
      }t += i;
    }return e.set(t, !0), t;
  }function vl(t, e, n) {
    n = n || {};var i,
        r,
        a,
        o,
        s = n.byIndex,
        l = n.stackedCoordDimension,
        h = !(!t || !t.get("stack"));if (d(e, function (t, n) {
      w(t) && (e[n] = t = { name: t }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), r && (s || i)) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);var u = r.coordDim,
          c = r.type,
          f = 0;d(e, function (t) {
        t.coordDim === u && f++;
      }), e.push({ name: a, coordDim: u, coordDimIndex: f, type: c, isExtraCoord: !0, isCalculationCoord: !0 }), f++, e.push({ name: o, coordDim: o, coordDimIndex: f, type: c, isExtraCoord: !0, isCalculationCoord: !0 });
    }return { stackedDimension: r && r.name, stackedByDimension: i && i.name, isStackedByIndex: s, stackedOverDimension: o, stackResultDimension: a };
  }function ml(t, e, n) {
    return e && e === t.getCalculationInfo("stackedDimension") && (null != n ? n === t.getCalculationInfo("stackedByDimension") : t.getCalculationInfo("isStackedByIndex"));
  }function yl(t, e, n) {
    n = n || {}, La.isInstance(t) || (t = La.seriesDataToSource(t));var i,
        r = e.get("coordinateSystem"),
        a = Ka.get(r),
        o = ka(e);o && (i = p(o.coordSysDims, function (t) {
      var e = { name: t },
          n = o.axisMap.get(t);if (n) {
        var i = n.get("type");e.type = tl(i);
      }return e;
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);var s,
        l,
        h = jg(t, { coordDimensions: i, generateCoord: n.generateCoord });o && d(h, function (t, e) {
      var n = t.coordDim,
          i = o.categoryAxisMap.get(n);i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
    }), l || null == s || (h[s].otherDims.itemName = 0);var u = vl(e, h),
        c = new Ug(h, e);c.setCalculationInfo(u);var f = null != s && _l(t) ? function (t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
    } : null;return c.hasItemOption = !1, c.initData(t, null, f), c;
  }function _l(t) {
    if (t.sourceFormat === jd) {
      var e = xl(t.data || []);return null != e && !_(fi(e));
    }
  }function xl(t) {
    for (var e = 0; e < t.length && null == t[e];) {
      e++;
    }return t[e];
  }function wl(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
          i = this.shape;i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
    }
  }function bl(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));var l;return l = 0 === t.indexOf("image://") ? xr(t.slice(8), new Ve(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? _r(t.slice(7), {}, new Ve(e, n, i, r), o ? "center" : "cover") : new iv({ shape: { symbolType: t, x: e, y: n, width: i, height: r } }), l.__isEmptyBrush = s, l.setColor = wl, l.setColor(a), l;
  }function Sl(t, e) {
    var n = t.mapDimension("defaultedLabel", !0),
        i = n.length;if (1 === i) return Mo(t, e, n[0]);if (i) {
      for (var r = [], a = 0; a < n.length; a++) {
        var o = Mo(t, e, n[a]);r.push(o);
      }return r.join(" ");
    }
  }function Ml(t, e) {
    var n = t.getItemVisual(e, "symbolSize");return n instanceof Array ? n.slice() : [+n, +n];
  }function Il(t) {
    return [t[0] / 2, t[1] / 2];
  }function Tl(t, e, n) {
    Qu.call(this), this.updateData(t, e, n);
  }function Cl(t, e) {
    this.parent.drift(t, e);
  }function Dl(t) {
    this.group = new Qu(), this._symbolCtor = t || Tl;
  }function kl(t, e, n, i) {
    return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"));
  }function Al(t) {
    return null == t || b(t) || (t = { isIgnore: t }), t || {};
  }function Ll(t) {
    var e = t.hostModel;return { itemStyle: e.getModel("itemStyle").getItemStyle(["color"]), hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(), symbolRotate: e.get("symbolRotate"), symbolOffset: e.get("symbolOffset"), hoverAnimation: e.get("hoverAnimation"), labelModel: e.getModel("label"), hoverLabelModel: e.getModel("emphasis.label"), cursorStyle: e.get("cursor") };
  }function Pl(t, e, n) {
    var i = t.getBaseAxis(),
        r = t.getOtherAxis(i),
        a = Ol(r, n),
        o = i.dim,
        s = r.dim,
        l = e.mapDimension(s),
        h = e.mapDimension(o),
        u = "x" === s || "radius" === s ? 1 : 0,
        c = ml(e, l, h),
        f = p(t.dimensions, function (t) {
      return e.mapDimension(t);
    });return { dataDimsForPoint: f, valueStart: a, valueAxisDim: s, baseAxisDim: o, stacked: c, valueDim: l, baseDim: h, baseDataOffset: u, stackedOverDimension: e.getCalculationInfo("stackedOverDimension") };
  }function Ol(t, e) {
    var n = 0,
        i = t.scale.getExtent();return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n;
  }function El(t, e, n, i) {
    var r = 0 / 0;t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);var a = t.baseDataOffset,
        o = [];return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);
  }function Rl(t, e) {
    var n = [];return e.diff(t).add(function (t) {
      n.push({ cmd: "+", idx: t });
    }).update(function (t, e) {
      n.push({ cmd: "=", idx: e, idx1: t });
    }).remove(function (t) {
      n.push({ cmd: "-", idx: t });
    }).execute(), n;
  }function Bl(t) {
    return isNaN(t[0]) || isNaN(t[1]);
  }function zl(t, e, n, i, r, a, o, s, l, h, u) {
    return null == h ? Nl(e, "x") ? Fl(t, e, n, i, r, a, o, s, l, "x", u) : Nl(e, "y") ? Fl(t, e, n, i, r, a, o, s, l, "y", u) : Vl.apply(this, arguments) : "none" !== h && Nl(e, h) ? Fl.apply(this, arguments) : Vl.apply(this, arguments);
  }function Nl(t, e) {
    if (t.length <= 1) return !0;for (var n = "x" === e ? 0 : 1, i = t[0][n], r = 0, a = 1; a < t.length; ++a) {
      var o = t[a][n] - i;if (!isNaN(o) && !isNaN(r) && 0 !== o && 0 !== r && o >= 0 != r >= 0) return !1;isNaN(o) || 0 === o || (r = o, i = t[a][n]);
    }return !0;
  }function Fl(t, e, n, i, r, a, o, s, l, h, u) {
    for (var c = 0, f = n, d = 0; i > d; d++) {
      var p = e[f];if (f >= r || 0 > f) break;if (Bl(p)) {
        if (u) {
          f += a;continue;
        }break;
      }if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {
        var g = e[c],
            v = "y" === h ? 1 : 0,
            m = (p[v] - g[v]) * l;pv(vv, g), vv[v] = g[v] + m, pv(mv, p), mv[v] = p[v] - m, t.bezierCurveTo(vv[0], vv[1], mv[0], mv[1], p[0], p[1]);
      } else t.lineTo(p[0], p[1]);c = f, f += a;
    }return d;
  }function Vl(t, e, n, i, r, a, o, s, l, h, u) {
    for (var c = 0, f = n, d = 0; i > d; d++) {
      var p = e[f];if (f >= r || 0 > f) break;if (Bl(p)) {
        if (u) {
          f += a;continue;
        }break;
      }if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), pv(vv, p);else if (l > 0) {
        var g = f + a,
            v = e[g];if (u) for (; v && Bl(e[g]);) {
          g += a, v = e[g];
        }var m = .5,
            y = e[c],
            v = e[g];if (!v || Bl(v)) pv(mv, p);else {
          Bl(v) && !u && (v = p), q(gv, v, y);var _, x;if ("x" === h || "y" === h) {
            var w = "x" === h ? 0 : 1;_ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
          } else _ = yu(p, y), x = yu(p, v);m = x / (x + _), dv(mv, p, gv, -l * (1 - m));
        }cv(vv, vv, s), fv(vv, vv, o), cv(mv, mv, s), fv(mv, mv, o), t.bezierCurveTo(vv[0], vv[1], mv[0], mv[1], p[0], p[1]), dv(vv, p, gv, l * m);
      } else t.lineTo(p[0], p[1]);c = f, f += a;
    }return d;
  }function Wl(t, e) {
    var n = [1 / 0, 1 / 0],
        i = [-1 / 0, -1 / 0];if (e) for (var r = 0; r < t.length; r++) {
      var a = t[r];a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1]);
    }return { min: e ? n : i, max: e ? i : n };
  }function Hl(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = e[n];if (i[0] !== r[0] || i[1] !== r[1]) return;
      }return !0;
    }
  }function Gl(t) {
    return "number" == typeof t ? t : t ? .5 : 0;
  }function ql(t) {
    var e = t.getGlobalExtent();if (t.onBand) {
      var n = t.getBandWidth() / 2 - 1,
          i = e[1] > e[0] ? 1 : -1;e[0] += i * n, e[1] -= i * n;
    }return e;
  }function Xl(t, e, n) {
    if (!n.valueDim) return [];for (var i = [], r = 0, a = e.count(); a > r; r++) {
      i.push(El(n, t, e, r));
    }return i;
  }function Ul(t, e, n) {
    var i = ql(t.getAxis("x")),
        r = ql(t.getAxis("y")),
        a = t.getBaseAxis().isHorizontal(),
        o = Math.min(i[0], i[1]),
        s = Math.min(r[0], r[1]),
        l = Math.max(i[0], i[1]) - o,
        h = Math.max(r[0], r[1]) - s,
        u = n.get("lineStyle.width") || 2,
        c = n.get("clipOverflow") ? u / 2 : Math.max(l, h);a ? (s -= c, h += 2 * c) : (o -= c, l += 2 * c);var f = new gd({ shape: { x: o, y: s, width: l, height: h } });return e && (f.shape[a ? "width" : "height"] = 0, jr(f, { shape: { width: l, height: h } }, n)), f;
  }function Yl(t, e, n) {
    var i = t.getAngleAxis(),
        r = t.getRadiusAxis(),
        a = r.getExtent(),
        o = i.getExtent(),
        s = Math.PI / 180,
        l = new cd({ shape: { cx: t.cx, cy: t.cy, r0: a[0], r: a[1], startAngle: -o[0] * s, endAngle: -o[1] * s, clockwise: i.inverse } });return e && (l.shape.endAngle = -o[0] * s, jr(l, { shape: { endAngle: -o[1] * s } }, n)), l;
  }function Zl(t, e, n) {
    return "polar" === t.type ? Yl(t, e, n) : Ul(t, e, n);
  }function jl(t, e, n) {
    for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
      var s = t[o + 1],
          l = t[o];a.push(l);var h = [];switch (n) {case "end":
          h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);break;case "middle":
          var u = (l[r] + s[r]) / 2,
              c = [];h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);break;default:
          h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);}
    }return t[o] && a.push(t[o]), a;
  }function $l(t, e) {
    var n = t.getVisual("visualMeta");if (n && n.length && t.count() && "cartesian2d" === e.type) {
      for (var i, r, a = n.length - 1; a >= 0; a--) {
        var o = n[a].dimension,
            s = t.dimensions[o],
            l = t.getDimensionInfo(s);if (i = l && l.coordDim, "x" === i || "y" === i) {
          r = n[a];break;
        }
      }if (r) {
        var h = e.getAxis(i),
            u = p(r.stops, function (t) {
          return { coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color };
        }),
            c = u.length,
            f = r.outerColors.slice();c && u[0].coord > u[c - 1].coord && (u.reverse(), f.reverse());var g = 10,
            v = u[0].coord - g,
            m = u[c - 1].coord + g,
            y = m - v;if (.001 > y) return "transparent";d(u, function (t) {
          t.offset = (t.coord - v) / y;
        }), u.push({ offset: c ? u[c - 1].offset : .5, color: f[1] || "transparent" }), u.unshift({ offset: c ? u[0].offset : .5, color: f[0] || "transparent" });var _ = new xd(0, 0, 0, 0, u, !0);return _[i] = v, _[i + "2"] = m, _;
      }
    }
  }function Kl(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
  }function Ql(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }function Jl(t) {
    return t._map || (t._map = z(t.categories));
  }function th(t) {
    return b(t) && null != t.value ? t.value : t + "";
  }function eh(t, e, n, i) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = ga(a / e, !0);null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);var s = r.intervalPrecision = nh(o),
        l = r.niceTickExtent = [Dv(Math.ceil(t[0] / o) * o, s), Dv(Math.floor(t[1] / o) * o, s)];return rh(l, t), r;
  }function nh(t) {
    return sa(t) + 2;
  }function ih(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }function rh(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), ih(t, 0, e), ih(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }function ah(t, e, n, i) {
    var r = [];if (!t) return r;var a = 1e4;e[0] < n[0] && r.push(e[0]);for (var o = n[0]; o <= n[1] && (r.push(o), o = Dv(o + t, i), o !== r[r.length - 1]);) {
      if (r.length > a) return [];
    }return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
  }function oh(t) {
    return t.get("stack") || Lv + t.seriesIndex;
  }function sh(t) {
    return t.dim + t.index;
  }function lh(t, e) {
    var n = p(t, function (t) {
      var e = t.getData(),
          n = t.coordinateSystem,
          i = n.getBaseAxis(),
          r = i.getExtent(),
          a = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / e.count(),
          o = aa(t.get("barWidth"), a),
          s = aa(t.get("barMaxWidth"), a),
          l = t.get("barGap"),
          h = t.get("barCategoryGap");return { bandWidth: a, barWidth: o, barMaxWidth: s, barGap: l, barCategoryGap: h, axisKey: sh(i), stackId: oh(t) };
    });return hh(n, e);
  }function hh(t) {
    var e = {};d(t, function (t) {
      var n = t.axisKey,
          i = t.bandWidth,
          r = e[n] || { bandWidth: i, remainedWidth: i, autoWidthCount: 0, categoryGap: "20%", gap: "30%", stacks: {} },
          a = r.stacks;e[n] = r;var o = t.stackId;a[o] || r.autoWidthCount++, a[o] = a[o] || { width: 0, maxWidth: 0 };var s = t.barWidth;s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);var l = t.barMaxWidth;l && (a[o].maxWidth = l);var h = t.barGap;null != h && (r.gap = h);var u = t.barCategoryGap;null != u && (r.categoryGap = u);
    });var n = {};return d(e, function (t, e) {
      n[e] = {};var i = t.stacks,
          r = t.bandWidth,
          a = aa(t.categoryGap, r),
          o = aa(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          h = (s - a) / (l + (l - 1) * o);
      h = Math.max(h, 0), d(i, function (t) {
        var e = t.maxWidth;e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--);
      }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);var u,
          c = 0;d(i, function (t) {
        t.width || (t.width = h), u = t, c += t.width * (1 + o);
      }), u && (c -= u.width * o);var f = -c / 2;d(i, function (t, i) {
        n[e][i] = n[e][i] || { offset: f, width: t.width }, f += t.width * (1 + o);
      });
    }), n;
  }function uh(t, e) {
    return Xv(t, qv(e));
  }function ch(t, e) {
    var n,
        i,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        h = null != s,
        u = t.getExtent();"ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = aa(i[0], 1), i[1] = aa(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({ min: u[0], max: u[1] })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({ min: u[0], max: u[1] })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(T(o) || T(s)), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));var c = e.ecModel;if (c && "time" === a) {
      var f,
          d = [];if (c.eachSeriesByType("bar", function (t) {
        t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type && (d.push(t), f |= t.getBaseAxis() === e.axis);
      }), f) {
        var p = fh(o, s, e, d);o = p.min, s = p.max;
      }
    }return [o, s];
  }function fh(t, e, n, i) {
    var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = lh(i),
        s = n.axis.dim + n.axis.index,
        l = o[s];if (void 0 === l) return { min: t, max: e };var h = 1 / 0;d(l, function (t) {
      h = Math.min(t.offset, h);
    });var u = -1 / 0;d(l, function (t) {
      u = Math.max(t.offset + t.width, u);
    }), h = Math.abs(h), u = Math.abs(u);var c = h + u,
        f = e - t,
        p = 1 - (h + u) / a,
        g = f / p - f;return e += g * (u / c), t -= g * (h / c), { min: t, max: e };
  }function dh(t, e) {
    var n = ch(t, e),
        i = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");"log" === t.type && (t.base = e.get("logBase"));var o = t.type;t.setExtent(n[0], n[1]), t.niceExtent({ splitNumber: a, fixMin: i, fixMax: r, minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null, maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null });var s = e.get("interval");null != s && t.setInterval && t.setInterval(s);
  }function ph(t, e) {
    if (e = e || t.get("type")) switch (e) {case "category":
        return new Cv(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);case "value":
        return new Av();default:
        return (Kl.getClass(e) || Av).create(t);}
  }function gh(t) {
    var e = t.scale.getExtent(),
        n = e[0],
        i = e[1];return !(n > 0 && i > 0 || 0 > n && 0 > i);
  }function vh(t, e, n, i, r) {
    var a,
        o = 0,
        s = 0,
        l = (i - r) / 180 * Math.PI,
        h = 1;e.length > 40 && (h = Math.floor(e.length / 40));for (var u = 0; u < t.length; u += h) {
      var c = t[u],
          f = on(e[u], n, "center", "top");f.x += c * Math.cos(l), f.y += c * Math.sin(l), f.width *= 1.3, f.height *= 1.3, a ? a.intersect(f) ? (s++, o = Math.max(o, s)) : (a.union(f), s = 0) : a = f.clone();
    }return 0 === o && h > 1 ? h : (o + 1) * h - 1;
  }function mh(t, e) {
    var n = t.scale,
        i = n.getTicksLabels(),
        r = n.getTicks();return "string" == typeof e ? (e = function (t) {
      return function (e) {
        return t.replace("{value}", null != e ? e : "");
      };
    }(e), p(i, e)) : "function" == typeof e ? p(r, function (n, i) {
      return e(yh(t, n), i);
    }, this) : i;
  }function yh(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }function _h(t) {
    return this._axes[t];
  }function xh(t) {
    Kv.call(this, t);
  }function wh(t, e) {
    var n = t[1] - t[0],
        i = e,
        r = n / i / 2;t[0] += r, t[1] -= r;
  }function bh(t, e) {
    return e.type || (e.data ? "category" : "value");
  }function Sh(t, e) {
    return t.getCoordSysModel() === e;
  }function Mh(t, e) {
    var n = e * Math.PI / 180,
        i = t.plain(),
        r = i.width,
        a = i.height,
        o = r * Math.cos(n) + a * Math.sin(n),
        s = r * Math.sin(n) + a * Math.cos(n),
        l = new Ve(i.x, i.y, o, s);return l;
  }function Ih(t) {
    var e,
        n = t.model,
        i = n.get("axisLabel.show") ? n.getFormattedLabels() : [],
        r = n.getModel("axisLabel"),
        a = 1,
        o = i.length;o > 40 && (a = Math.ceil(o / 40));for (var s = 0; o > s; s += a) {
      if (!t.isLabelIgnored(s)) {
        var l = r.getTextRect(i[s]),
            h = Mh(l, r.get("rotate") || 0);e ? e.union(h) : e = h;
      }
    }return e;
  }function Th(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;
  }function Ch(t, e, n) {
    var i = t[e];if (n.onZero) {
      var r = n.onZeroAxisIndex;if (null != r) {
        var a = i[r];return void (a && Dh(a) && (n.onZero = !1));
      }for (var o in i) {
        if (i.hasOwnProperty(o)) {
          var a = i[o];if (a && !Dh(a)) {
            r = +o;break;
          }
        }
      }null == r && (n.onZero = !1), n.onZeroAxisIndex = r;
    }
  }function Dh(t) {
    return "category" === t.type || "time" === t.type || !um(t);
  }function kh(t, e) {
    var n = t.getExtent(),
        i = n[0] + n[1];t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return i - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return i - t + e;
    };
  }function Ah(t) {
    return p(dm, function (e) {
      var n = t.getReferringComponents(e)[0];return n;
    });
  }function Lh(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }function Ph(t) {
    var e = { componentType: t.mainType };return e[t.mainType + "Index"] = t.componentIndex, e;
  }function Oh(t, e, n, i) {
    var r,
        a,
        o = ua(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;return ca(o - pm / 2) ? (a = l ? "bottom" : "top", r = "center") : ca(o - 1.5 * pm) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * pm > o && o > pm / 2 ? l ? "left" : "right" : l ? "right" : "left"), { rotation: o, textAlign: r, textVerticalAlign: a };
  }function Eh(t) {
    var e = t.get("tooltip");return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  }function Rh(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
        r = t.get("axisLabel.showMaxLabel");e = e || [], n = n || [];var a = e[0],
        o = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        h = n[0],
        u = n[1],
        c = n[n.length - 1],
        f = n[n.length - 2];i === !1 ? (Bh(a), Bh(h)) : zh(a, o) && (i ? (Bh(o), Bh(u)) : (Bh(a), Bh(h))), r === !1 ? (Bh(s), Bh(c)) : zh(l, s) && (r ? (Bh(l), Bh(f)) : (Bh(s), Bh(c)));
  }function Bh(t) {
    t && (t.ignore = !0);
  }function zh(t, e) {
    var n = t && t.getBoundingRect().clone(),
        i = e && e.getBoundingRect().clone();if (n && i) {
      var r = oe([]);return ue(r, r, -t.rotation), n.applyTransform(le([], r, t.getLocalTransform())), i.applyTransform(le([], r, e.getLocalTransform())), n.intersect(i);
    }
  }function Nh(t) {
    return "middle" === t || "center" === t;
  }function Fh(t, e, n) {
    var i = e.axis;if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = _m(r, n.labelInterval), h = i.getTicksCoords(r.get("alignWithLabel")), u = i.scale.getTicks(), c = e.get("axisLabel.showMinLabel"), f = e.get("axisLabel.showMaxLabel"), d = [], p = [], g = t._transform, v = [], m = h.length, y = 0; m > y; y++) {
        if (!ym(i, y, l, m, c, f)) {
          var _ = h[y];d[0] = _, d[1] = 0, p[0] = _, p[1] = n.tickDirection * o, g && (K(d, d, g), K(p, p, g));var x = new vd(Sr({ anid: "tick_" + u[y], shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] }, style: s(a.getLineStyle(), { stroke: e.get("axisLine.lineStyle.color") }), z2: 2, silent: !0 }));t.group.add(x), v.push(x);
        }
      }return v;
    }
  }function Vh(t, e, n) {
    var i = e.axis,
        r = C(n.axisLabelShow, e.get("axisLabel.show"));if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = i.scale.getTicks(),
          l = e.getFormattedLabels(),
          h = (C(n.labelRotate, a.get("rotate")) || 0) * pm / 180,
          u = mm(n.rotation, h, n.labelDirection),
          c = e.getCategories(),
          f = [],
          p = Eh(e),
          g = e.get("triggerEvent"),
          v = e.get("axisLabel.showMinLabel"),
          m = e.get("axisLabel.showMaxLabel");return d(s, function (r, h) {
        if (!ym(i, h, n.labelInterval, s.length, v, m)) {
          var d = a;c && c[r] && c[r].textStyle && (d = new Kr(c[r].textStyle, a, e.ecModel));var y = d.getTextColor() || e.get("axisLine.lineStyle.color"),
              _ = i.dataToCoord(r),
              x = [_, n.labelOffset + n.labelDirection * o],
              w = i.scale.getLabel(r),
              b = new sd({ anid: "label_" + r, position: x, rotation: u.rotation, silent: p, z2: 10 });Fr(b.style, d, { text: l[h], textAlign: d.getShallow("align", !0) || u.textAlign, textVerticalAlign: d.getShallow("verticalAlign", !0) || d.getShallow("baseline", !0) || u.textVerticalAlign, textFill: "function" == typeof y ? y("category" === i.type ? w : "value" === i.type ? r + "" : r, h) : y }), g && (b.eventData = Ph(e), b.eventData.targetType = "axisLabel", b.eventData.value = w), t._dumbGroup.add(b), b.updateTransform(), f.push(b), t.group.add(b), b.decomposeTransform();
        }
      }), f;
    }
  }function Wh(t) {
    var e = Hh(t);if (e) {
      var n = e.axisPointerModel,
          i = e.axis.scale,
          r = n.option,
          a = n.get("status"),
          o = n.get("value");null != o && (o = i.parse(o));var s = qh(n);null == a && (r.status = s ? "show" : "hide");var l = i.getExtent().slice();l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }function Hh(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;return e && e.axesInfo[Xh(t)];
  }function Gh(t) {
    var e = Hh(t);return e && e.axisPointerModel;
  }function qh(t) {
    return !!t.get("handle.show");
  }function Xh(t) {
    return t.type + "||" + t.id;
  }function Uh(t, e, n, i, r, a) {
    var o = xm.getAxisPointerClass(t.axisPointerClass);if (o) {
      var s = Gh(e);s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Yh(t, i);
    }
  }function Yh(t, e, n) {
    var i = t._axisPointer;i && i.dispose(e, n), t._axisPointer = null;
  }function Zh(t, e, n) {
    n = n || {};var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.position,
        s = r.onZero ? "onZero" : o,
        l = r.dim,
        h = i.getRect(),
        u = [h.x, h.x + h.width, h.y, h.y + h.height],
        c = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
        f = e.get("offset") || 0,
        d = "x" === l ? [u[2] - f, u[3] + f] : [u[0] - f, u[1] + f];if (r.onZero) {
      var p = i.getAxis("x" === l ? "y" : "x", r.onZeroAxisIndex),
          g = p.toGlobalCoord(p.dataToCoord(0));d[c.onZero] = Math.max(Math.min(g, d[1]), d[0]);
    }a.position = ["y" === l ? d[c[s]] : u[0], "x" === l ? d[c[s]] : u[3]], a.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);var v = { top: -1, bottom: 1, left: -1, right: 1 };a.labelDirection = a.tickDirection = a.nameDirection = v[o], a.labelOffset = r.onZero ? d[c[o]] - d[c.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), C(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);var m = e.get("axisLabel.rotate");return a.labelRotate = "top" === s ? -m : m, a.labelInterval = r.getLabelInterval(), a.z2 = 1, a;
  }function jh(t, e, n, i) {
    var r = e.getData(),
        a = this.dataIndex,
        o = r.getName(a),
        s = e.get("selectedOffset");i.dispatchAction({ type: "pieToggleSelect", from: t, name: o, seriesId: e.id }), r.each(function (t) {
      $h(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
    });
  }function $h(t, e, n, i, r) {
    var a = (e.startAngle + e.endAngle) / 2,
        o = Math.cos(a),
        s = Math.sin(a),
        l = n ? i : 0,
        h = [o * l, s * l];r ? t.animate().when(200, { position: h }).start("bounceOut") : t.attr("position", h);
  }function Kh(t, e) {
    function n() {
      a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;
    }function i() {
      a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;
    }Qu.call(this);var r = new cd({ z2: 2 }),
        a = new pd(),
        o = new sd();this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i);
  }function Qh(t, e, n, i, r, a, o) {
    function s(e, n, i) {
      for (var r = e; n > r; r++) {
        if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);
      }l(n - 1, i / 2);
    }function l(e, n) {
      for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) {}
    }function h(t, e, n, i, r, a) {
      for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) {
        if ("center" !== t[s].position) {
          var h = Math.abs(t[s].y - i),
              u = t[s].len,
              c = t[s].len2,
              f = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);e && f >= o && (f = o - 10), !e && o >= f && (f = o + 10), t[s].x = n + f * a, o = f;
        }
      }
    }t.sort(function (t, e) {
      return t.y - e.y;
    });for (var u, c = 0, f = t.length, d = [], p = [], g = 0; f > g; g++) {
      u = t[g].y - c, 0 > u && s(g, f, -u, r), c = t[g].y + t[g].height;
    }0 > o - c && l(f - 1, c - o);for (var g = 0; f > g; g++) {
      t[g].y >= n ? p.push(t[g]) : d.push(t[g]);
    }h(d, !1, e, n, i, r), h(p, !0, e, n, i, r);
  }function Jh(t, e, n, i, r, a) {
    for (var o = [], s = [], l = 0; l < t.length; l++) {
      t[l].x < e ? o.push(t[l]) : s.push(t[l]);
    }Qh(s, e, n, i, 1, r, a), Qh(o, e, n, i, -1, r, a);for (var l = 0; l < t.length; l++) {
      var h = t[l].linePoints;if (h) {
        var u = h[1][0] - h[2][0];h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u;
      }
    }
  }var tu = 2311,
      eu = function eu() {
    return tu++;
  },
      nu = {};nu = "undefined" != typeof wx ? { browser: {}, os: {}, node: !1, wxa: !0, canvasSupported: !0, svgSupported: !1, touchEventsSupported: !0 } : "undefined" == typeof document && "undefined" != typeof self ? { browser: {}, os: {}, node: !1, worker: !0, canvasSupported: !0 } : "undefined" == typeof navigator ? { browser: {}, os: {}, node: !0, worker: !1, canvasSupported: !0, svgSupported: !0 } : e(navigator.userAgent);var iu = nu,
      ru = { "[object Function]": 1, "[object RegExp]": 1, "[object Date]": 1, "[object Error]": 1, "[object CanvasGradient]": 1, "[object CanvasPattern]": 1, "[object Image]": 1, "[object Canvas]": 1 },
      au = { "[object Int8Array]": 1, "[object Uint8Array]": 1, "[object Uint8ClampedArray]": 1, "[object Int16Array]": 1, "[object Uint16Array]": 1, "[object Int32Array]": 1, "[object Uint32Array]": 1, "[object Float32Array]": 1, "[object Float64Array]": 1 },
      ou = Object.prototype.toString,
      su = Array.prototype,
      lu = su.forEach,
      hu = su.filter,
      uu = su.slice,
      cu = su.map,
      fu = su.reduce,
      du = {},
      pu = function pu() {
    return du.createCanvas();
  };du.createCanvas = function () {
    return document.createElement("canvas");
  };var gu,
      vu = "__ec_primitive__";B.prototype = { constructor: B, get: function get(t) {
      return this.hasOwnProperty(t) ? this[t] : null;
    }, set: function set(t, e) {
      return this[t] = e;
    }, each: function each(t, e) {
      void 0 !== e && (t = m(t, e));for (var n in this) {
        this.hasOwnProperty(n) && t(this[n], n);
      }
    }, removeKey: function removeKey(t) {
      delete this[t];
    } };var mu = "undefined" == typeof Float32Array ? Array : Float32Array,
      yu = j,
      _u = $;te.prototype = { constructor: te, _dragStart: function _dragStart(t) {
      var e = t.target;e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ee(e, t), "dragstart", t.event));
    }, _drag: function _drag(t) {
      var e = this._draggingTarget;if (e) {
        var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            a = i - this._y;this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ee(e, t), "drag", t.event);var o = this.findHover(n, i, e).target,
            s = this._dropTarget;this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ee(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ee(o, t), "dragenter", t.event));
      }
    }, _dragEnd: function _dragEnd(t) {
      var e = this._draggingTarget;e && (e.dragging = !1), this.dispatchToElement(ee(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ee(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    } };var xu = Array.prototype.slice,
      wu = function wu() {
    this._$handlers = {};
  };wu.prototype = { constructor: wu, one: function one(t, e, n) {
      var i = this._$handlers;if (!e || !t) return this;i[t] || (i[t] = []);for (var r = 0; r < i[t].length; r++) {
        if (i[t][r].h === e) return this;
      }return i[t].push({ h: e, one: !0, ctx: n || this }), this;
    }, on: function on(t, e, n) {
      var i = this._$handlers;if (!e || !t) return this;i[t] || (i[t] = []);for (var r = 0; r < i[t].length; r++) {
        if (i[t][r].h === e) return this;
      }return i[t].push({ h: e, one: !1, ctx: n || this }), this;
    }, isSilent: function isSilent(t) {
      var e = this._$handlers;return e[t] && e[t].length;
    }, off: function off(t, e) {
      var n = this._$handlers;if (!t) return this._$handlers = {}, this;if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) {
            n[t][r].h != e && i.push(n[t][r]);
          }n[t] = i;
        }n[t] && 0 === n[t].length && delete n[t];
      } else delete n[t];return this;
    }, trigger: function trigger(t) {
      if (this._$handlers[t]) {
        var e = arguments,
            n = e.length;n > 3 && (e = xu.call(e, 1));for (var i = this._$handlers[t], r = i.length, a = 0; r > a;) {
          switch (n) {case 1:
              i[a].h.call(i[a].ctx);break;case 2:
              i[a].h.call(i[a].ctx, e[1]);break;case 3:
              i[a].h.call(i[a].ctx, e[1], e[2]);break;default:
              i[a].h.apply(i[a].ctx, e);}i[a].one ? (i.splice(a, 1), r--) : a++;
        }
      }return this;
    }, triggerWithContext: function triggerWithContext(t) {
      if (this._$handlers[t]) {
        var e = arguments,
            n = e.length;n > 4 && (e = xu.call(e, 1, e.length - 1));for (var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; a > o;) {
          switch (n) {case 1:
              r[o].h.call(i);break;case 2:
              r[o].h.call(i, e[1]);break;case 3:
              r[o].h.call(i, e[1], e[2]);break;default:
              r[o].h.apply(i, e);}r[o].one ? (r.splice(o, 1), a--) : o++;
        }
      }return this;
    } };var bu = "silent";ie.prototype.dispose = function () {};var Su = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      Mu = function Mu(t, e, n, i) {
    wu.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ie(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, te.call(this), this.setHandlerProxy(n);
  };Mu.prototype = { constructor: Mu, setHandlerProxy: function setHandlerProxy(t) {
      this.proxy && this.proxy.dispose(), t && (d(Su, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    }, mousemove: function mousemove(t) {
      var e = t.zrX,
          n = t.zrY,
          i = this._hovered,
          r = i.target;r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);var a = this._hovered = this.findHover(e, n),
          o = a.target,
          s = this.proxy;s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
    }, mouseout: function mouseout(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);var e,
          n = t.toElement || t.relatedTarget;do {
        n = n && n.parentNode;
      } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));!e && this.trigger("globalout", { event: t });
    }, resize: function resize() {
      this._hovered = {};
    }, dispatch: function dispatch(t, e) {
      var n = this[t];n && n.call(this, e);
    }, dispose: function dispose() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    }, setCursorStyle: function setCursorStyle(t) {
      var e = this.proxy;e.setCursor && e.setCursor(t);
    }, dispatchToElement: function dispatchToElement(t, e, n) {
      t = t || {};var i = t.target;if (!i || !i.silent) {
        for (var r = "on" + e, a = ne(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble);) {}a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    }, findHover: function findHover(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = { x: t, y: e }, a = i.length - 1; a >= 0; a--) {
        var o;if (i[a] !== n && !i[a].ignore && (o = re(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== bu)) {
          r.target = i[a];break;
        }
      }return r;
    } }, d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Mu.prototype[t] = function (e) {
      var n = this.findHover(e.zrX, e.zrY),
          i = n.target;if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || yu(this._downPoint, [e.zrX, e.zrY]) > 4) return;this._downPoint = null;
      }this.dispatchToElement(n, t, e);
    };
  }), c(Mu, wu), c(Mu, te);var Iu = "undefined" == typeof Float32Array ? Array : Float32Array,
      Tu = oe,
      Cu = 5e-5,
      Du = function Du(t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      ku = Du.prototype;ku.transform = null, ku.needLocalTransform = function () {
    return de(this.rotation) || de(this.position[0]) || de(this.position[1]) || de(this.scale[0] - 1) || de(this.scale[1] - 1);
  }, ku.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;return n || e ? (i = i || ae(), n ? this.getLocalTransform(i) : Tu(i), e && (n ? le(i, t.transform, i) : se(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || ae(), void fe(this.invTransform, i)) : void (i && Tu(i));
  }, ku.getLocalTransform = function (t) {
    return Du.getLocalTransform(this, t);
  }, ku.setTransform = function (t) {
    var e = this.transform,
        n = t.dpr || 1;e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, ku.restoreTransform = function (t) {
    var e = t.dpr || 1;t.setTransform(e, 0, 0, e, 0, 0);
  };var Au = [];ku.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;t && t.transform && (le(Au, t.invTransform, e), e = Au);var n = e[0] * e[0] + e[1] * e[1],
          i = e[2] * e[2] + e[3] * e[3],
          r = this.position,
          a = this.scale;de(n - 1) && (n = Math.sqrt(n)), de(i - 1) && (i = Math.sqrt(i)), e[0] < 0 && (n = -n), e[3] < 0 && (i = -i), r[0] = e[4], r[1] = e[5], a[0] = n, a[1] = i, this.rotation = Math.atan2(-e[1] / i, e[0] / n);
    }
  }, ku.getGlobalScale = function () {
    var t = this.transform;if (!t) return [1, 1];var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n];
  }, ku.transformCoordToLocal = function (t, e) {
    var n = [t, e],
        i = this.invTransform;return i && K(n, n, i), n;
  }, ku.transformCoordToGlobal = function (t, e) {
    var n = [t, e],
        i = this.transform;return i && K(n, n, i), n;
  }, Du.getLocalTransform = function (t, e) {
    e = e || [], Tu(e);var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];return n && (e[4] -= n[0], e[5] -= n[1]), ce(e, e, i), r && ue(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
  };var Lu = { linear: function linear(t) {
      return t;
    }, quadraticIn: function quadraticIn(t) {
      return t * t;
    }, quadraticOut: function quadraticOut(t) {
      return t * (2 - t);
    }, quadraticInOut: function quadraticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    }, cubicIn: function cubicIn(t) {
      return t * t * t;
    }, cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    }, cubicInOut: function cubicInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, quarticIn: function quarticIn(t) {
      return t * t * t * t;
    }, quarticOut: function quarticOut(t) {
      return 1 - --t * t * t * t;
    }, quarticInOut: function quarticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    }, quinticIn: function quinticIn(t) {
      return t * t * t * t * t;
    }, quinticOut: function quinticOut(t) {
      return --t * t * t * t * t + 1;
    }, quinticInOut: function quinticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, sinusoidalIn: function sinusoidalIn(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }, sinusoidalOut: function sinusoidalOut(t) {
      return Math.sin(t * Math.PI / 2);
    }, sinusoidalInOut: function sinusoidalInOut(t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    }, exponentialIn: function exponentialIn(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    }, exponentialOut: function exponentialOut(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    }, exponentialInOut: function exponentialInOut(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }, circularIn: function circularIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    }, circularOut: function circularOut(t) {
      return Math.sqrt(1 - --t * t);
    }, circularInOut: function circularInOut(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, elasticIn: function elasticIn(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));
    }, elasticOut: function elasticOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);
    }, elasticInOut: function elasticInOut(t) {
      var e,
          n = .1,
          i = .4;return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);
    }, backIn: function backIn(t) {
      var e = 1.70158;return t * t * ((e + 1) * t - e);
    }, backOut: function backOut(t) {
      var e = 1.70158;return --t * t * ((e + 1) * t + e) + 1;
    }, backInOut: function backInOut(t) {
      var e = 2.5949095;return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    }, bounceIn: function bounceIn(t) {
      return 1 - Lu.bounceOut(1 - t);
    }, bounceOut: function bounceOut(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }, bounceInOut: function bounceInOut(t) {
      return .5 > t ? .5 * Lu.bounceIn(2 * t) : .5 * Lu.bounceOut(2 * t - 1) + .5;
    } };pe.prototype = { constructor: pe, step: function step(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);var n = (t - this._startTime - this._pausedTime) / this._life;if (!(0 > n)) {
        n = Math.min(n, 1);var i = this.easing,
            r = "string" == typeof i ? Lu[i] : i,
            a = "function" == typeof r ? r(n) : n;return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
      }
    }, restart: function restart(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
    }, fire: function fire(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    }, pause: function pause() {
      this._paused = !0;
    }, resume: function resume() {
      this._paused = !1;
    } };var Pu = function Pu() {
    this.head = null, this.tail = null, this._len = 0;
  },
      Ou = Pu.prototype;Ou.insert = function (t) {
    var e = new Eu(t);return this.insertEntry(e), e;
  }, Ou.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, Ou.remove = function (t) {
    var e = t.prev,
        n = t.next;e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, Ou.len = function () {
    return this._len;
  }, Ou.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };var Eu = function Eu(t) {
    this.value = t, this.next, this.prev;
  },
      Ru = function Ru(t) {
    this._list = new Pu(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      Bu = Ru.prototype;Bu.put = function (t, e) {
    var n = this._list,
        i = this._map,
        r = null;if (null == i[t]) {
      var a = n.len(),
          o = this._lastRemovedEntry;if (a >= this._maxSize && a > 0) {
        var s = n.head;n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
      }o ? o.value = e : o = new Eu(e), o.key = t, n.insertEntry(o), i[t] = o;
    }return r;
  }, Bu.get = function (t) {
    var e = this._map[t],
        n = this._list;return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
  }, Bu.clear = function () {
    this._list.clear(), this._map = {};
  };var zu = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] },
      Nu = new Ru(20),
      Fu = null,
      Vu = Array.prototype.slice,
      Wu = function Wu(t, e, n, i) {
    this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ce, this._setter = i || De, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };Wu.prototype = { when: function when(t, e) {
      var n = this._tracks;for (var i in e) {
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];var r = this._getter(this._target, i);if (null == r) continue;0 !== t && n[i].push({ time: 0, value: Be(r) });
          }n[i].push({ time: t, value: e[i] });
        }
      }return this;
    }, during: function during(t) {
      return this._onframeList.push(t), this;
    }, pause: function pause() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].pause();
      }this._paused = !0;
    }, resume: function resume() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].resume();
      }this._paused = !1;
    }, isPaused: function isPaused() {
      return !!this._paused;
    }, _doneCallback: function _doneCallback() {
      this._tracks = {}, this._clipList.length = 0;for (var t = this._doneList, e = t.length, n = 0; e > n; n++) {
        t[n].call(this);
      }
    }, start: function start(t, e) {
      var n,
          i = this,
          r = 0,
          a = function a() {
        r--, r || i._doneCallback();
      };for (var o in this._tracks) {
        if (this._tracks.hasOwnProperty(o)) {
          var s = Fe(this, t, a, this._tracks[o], o, e);s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);
        }
      }if (n) {
        var l = n.onframe;n.onframe = function (t, e) {
          l(t, e);for (var n = 0; n < i._onframeList.length; n++) {
            i._onframeList[n](t, e);
          }
        };
      }return r || this._doneCallback(), this;
    }, stop: function stop(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];t && r.onframe(this._target, 1), n && n.removeClip(r);
      }e.length = 0;
    }, delay: function delay(t) {
      return this._delay = t, this;
    }, done: function done(t) {
      return t && this._doneList.push(t), this;
    }, getClips: function getClips() {
      return this._clipList;
    } };var Hu = 1;"undefined" != typeof window && (Hu = Math.max(window.devicePixelRatio || 1, 1));var Gu = 0,
      qu = Hu,
      Xu = function Xu() {};1 === Gu ? Xu = function Xu() {
    for (var t in arguments) {
      throw new Error(arguments[t]);
    }
  } : Gu > 1 && (Xu = function Xu() {
    for (var t in arguments) {
      console.log(arguments[t]);
    }
  });var Uu = Xu,
      Yu = function Yu() {
    this.animators = [];
  };Yu.prototype = { constructor: Yu, animate: function animate(t, e) {
      var n,
          i = !1,
          r = this,
          a = this.__zr;if (t) {
        var o = t.split("."),
            s = r;i = "shape" === o[0];for (var l = 0, u = o.length; u > l; l++) {
          s && (s = s[o[l]]);
        }s && (n = s);
      } else n = r;if (!n) return void Uu('Property "' + t + '" is not existed in element ' + r.id);var c = r.animators,
          f = new Wu(n, e);return f.during(function () {
        r.dirty(i);
      }).done(function () {
        c.splice(h(c, f), 1);
      }), c.push(f), a && a.animation.addAnimator(f), f;
    }, stopAnimation: function stopAnimation(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) {
        e[i].stop(t);
      }return e.length = 0, this;
    }, animateTo: function animateTo(t, e, n, i, r, a) {
      function o() {
        l--, l || r && r();
      }w(n) ? (r = i, i = n, n = 0) : x(i) ? (r = i, i = "linear", n = 0) : x(n) ? (r = n, n = 0) : x(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);var s = this.animators.slice(),
          l = s.length;l || r && r();for (var h = 0; h < s.length; h++) {
        s[h].done(o).start(i, a);
      }
    }, _animateToShallow: function _animateToShallow(t, e, n, i, r) {
      var a = {},
          o = 0;for (var s in n) {
        if (n.hasOwnProperty(s)) if (null != e[s]) b(n[s]) && !f(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++);else if (null != n[s]) if (t) {
          var l = {};l[t] = {}, l[t][s] = n[s], this.attr(l);
        } else this.attr(s, n[s]);
      }return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this;
    } };var Zu = function Zu(t) {
    Du.call(this, t), wu.call(this, t), Yu.call(this, t), this.id = t.id || eu();
  };Zu.prototype = { type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function drift(t, e) {
      switch (this.draggable) {case "horizontal":
          e = 0;break;case "vertical":
          t = 0;}var n = this.transform;n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);
    }, beforeUpdate: function beforeUpdate() {}, afterUpdate: function afterUpdate() {}, update: function update() {
      this.updateTransform();
    }, traverse: function traverse() {}, attrKV: function attrKV(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
        }
      } else this[t] = e;
    }, hide: function hide() {
      this.ignore = !0, this.__zr && this.__zr.refresh();
    }, show: function show() {
      this.ignore = !1, this.__zr && this.__zr.refresh();
    }, attr: function attr(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (b(t)) for (var n in t) {
        t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      }return this.dirty(!1), this;
    }, setClipPath: function setClipPath(t) {
      var e = this.__zr;e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
    }, removeClipPath: function removeClipPath() {
      var t = this.clipPath;t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
    }, addSelfToZr: function addSelfToZr(t) {
      this.__zr = t;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.addAnimator(e[n]);
      }this.clipPath && this.clipPath.addSelfToZr(t);
    }, removeSelfFromZr: function removeSelfFromZr(t) {
      this.__zr = null;var e = this.animators;if (e) for (var n = 0; n < e.length; n++) {
        t.animation.removeAnimator(e[n]);
      }this.clipPath && this.clipPath.removeSelfFromZr(t);
    } }, c(Zu, Yu), c(Zu, Du), c(Zu, wu);var ju = K,
      $u = Math.min,
      Ku = Math.max;Ve.prototype = { constructor: Ve, union: function union(t) {
      var e = $u(t.x, this.x),
          n = $u(t.y, this.y);this.width = Ku(t.x + t.width, this.x + this.width) - e, this.height = Ku(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
    }, applyTransform: function () {
      var t = [],
          e = [],
          n = [],
          i = [];
      return function (r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, ju(t, t, r), ju(e, e, r), ju(n, n, r), ju(i, i, r), this.x = $u(t[0], e[0], n[0], i[0]), this.y = $u(t[1], e[1], n[1], i[1]);var a = Ku(t[0], e[0], n[0], i[0]),
              o = Ku(t[1], e[1], n[1], i[1]);this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(), calculateTransform: function calculateTransform(t) {
      var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = ae();return he(r, r, [-e.x, -e.y]), ce(r, r, [n, i]), he(r, r, [t.x, t.y]), r;
    }, intersect: function intersect(t) {
      if (!t) return !1;t instanceof Ve || (t = Ve.create(t));var e = this,
          n = e.x,
          i = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          h = t.y + t.height;return !(o > i || n > s || l > a || r > h);
    }, contain: function contain(t, e) {
      var n = this;return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    }, clone: function clone() {
      return new Ve(this.x, this.y, this.width, this.height);
    }, copy: function copy(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    }, plain: function plain() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    } }, Ve.create = function (t) {
    return new Ve(t.x, t.y, t.width, t.height);
  };var Qu = function Qu(t) {
    t = t || {}, Zu.call(this, t);for (var e in t) {
      t.hasOwnProperty(e) && (this[e] = t[e]);
    }this._children = [], this.__storage = null, this.__dirty = !0;
  };Qu.prototype = { constructor: Qu, isGroup: !0, type: "group", silent: !1, children: function children() {
      return this._children.slice();
    }, childAt: function childAt(t) {
      return this._children[t];
    }, childOfName: function childOfName(t) {
      for (var e = this._children, n = 0; n < e.length; n++) {
        if (e[n].name === t) return e[n];
      }
    }, childCount: function childCount() {
      return this._children.length;
    }, add: function add(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    }, addBefore: function addBefore(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
            i = n.indexOf(e);i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
      }return this;
    }, _doAdd: function _doAdd(t) {
      t.parent && t.parent.remove(t), t.parent = this;var e = this.__storage,
          n = this.__zr;e && e !== t.__storage && (e.addToStorage(t), t instanceof Qu && t.addChildrenToStorage(e)), n && n.refresh();
    }, remove: function remove(t) {
      var e = this.__zr,
          n = this.__storage,
          i = this._children,
          r = h(i, t);return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Qu && t.delChildrenFromStorage(n)), e && e.refresh(), this);
    }, removeAll: function removeAll() {
      var t,
          e,
          n = this._children,
          i = this.__storage;for (e = 0; e < n.length; e++) {
        t = n[e], i && (i.delFromStorage(t), t instanceof Qu && t.delChildrenFromStorage(i)), t.parent = null;
      }return n.length = 0, this;
    }, eachChild: function eachChild(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];t.call(e, r, i);
      }return this;
    }, traverse: function traverse(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];t.call(e, i), "group" === i.type && i.traverse(t, e);
      }return this;
    }, addChildrenToStorage: function addChildrenToStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.addToStorage(n), n instanceof Qu && n.addChildrenToStorage(t);
      }
    }, delChildrenFromStorage: function delChildrenFromStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];t.delFromStorage(n), n instanceof Qu && n.delChildrenFromStorage(t);
      }
    }, dirty: function dirty() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
    }, getBoundingRect: function getBoundingRect(t) {
      for (var e = null, n = new Ve(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));
        }
      }return e || n;
    } }, u(Qu, Zu);var Ju = 32,
      tc = 7,
      ec = function ec() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };ec.prototype = { constructor: ec, traverse: function traverse(t, e) {
      for (var n = 0; n < this._roots.length; n++) {
        this._roots[n].traverse(t, e);
      }
    }, getDisplayList: function getDisplayList(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList;
    }, updateDisplayList: function updateDisplayList(t) {
      this._displayListLen = 0;for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) {
        this._updateAndAddDisplayable(e[i], null, t);
      }n.length = this._displayListLen, iu.canvasSupported && Ze(n, je);
    }, _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();var i = t.clipPath;if (i) {
          e = e ? e.slice() : [];for (var r = i, a = t; r;) {
            r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
          }
        }if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
          }t.__dirty = !1;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    }, addRoot: function addRoot(t) {
      t.__storage !== this && (t instanceof Qu && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    }, delRoot: function delRoot(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];n instanceof Qu && n.delChildrenFromStorage(this);
        }return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
      }if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) {
        this.delRoot(t[e]);
      } else {
        var r = h(this._roots, t);r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Qu && t.delChildrenFromStorage(this));
      }
    }, addToStorage: function addToStorage(t) {
      return t && (t.__storage = this, t.dirty(!1)), this;
    }, delFromStorage: function delFromStorage(t) {
      return t && (t.__storage = null), this;
    }, dispose: function dispose() {
      this._renderList = this._roots = null;
    }, displayableSortFunc: je };var nc = { shadowBlur: 1, shadowOffsetX: 1, shadowOffsetY: 1, textShadowBlur: 1, textShadowOffsetX: 1, textShadowOffsetY: 1, textBoxShadowBlur: 1, textBoxShadowOffsetX: 1, textBoxShadowOffsetY: 1 },
      ic = function ic(t, e, n) {
    return nc.hasOwnProperty(e) ? n *= t.dpr : n;
  },
      rc = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      ac = function ac(t, e) {
    this.extendFrom(t, !1), this.host = e;
  };ac.prototype = { constructor: ac, host: null, fill: "#000", stroke: null, opacity: 1, lineDash: null, lineDashOffset: 0, shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, lineWidth: 1, strokeNoScale: !1, text: null, font: null, textFont: null, fontStyle: null, fontWeight: null, fontSize: null, fontFamily: null, textTag: null, textFill: "#000", textStroke: null, textWidth: null, textHeight: null, textStrokeWidth: 0, textLineHeight: null, textPosition: "inside", textRect: null, textOffset: null, textAlign: null, textVerticalAlign: null, textDistance: 5, textShadowColor: "transparent", textShadowBlur: 0, textShadowOffsetX: 0, textShadowOffsetY: 0, textBoxShadowColor: "transparent", textBoxShadowBlur: 0, textBoxShadowOffsetX: 0, textBoxShadowOffsetY: 0, transformText: !1, textRotation: 0, textOrigin: null, textBackgroundColor: null, textBorderColor: null, textBorderWidth: 0, textBorderRadius: 0, textPadding: null, rich: null, truncate: null, blend: null, bind: function bind(t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < rc.length; o++) {
        var s = rc[o],
            l = s[0];(a || i[l] !== r[l]) && (t[l] = ic(t, l, i[l] || s[1]));
      }if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var h = i.lineWidth;t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    }, hasFill: function hasFill() {
      var t = this.fill;return null != t && "none" !== t;
    }, hasStroke: function hasStroke() {
      var t = this.stroke;return null != t && "none" !== t && this.lineWidth > 0;
    }, extendFrom: function extendFrom(t, e) {
      if (t) for (var n in t) {
        !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
      }
    }, set: function set(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
    }, clone: function clone() {
      var t = new this.constructor();return t.extendFrom(this, !0), t;
    }, getGradient: function getGradient(t, e, n) {
      for (var i = "radial" === e.type ? Ke : $e, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) {
        r.addColorStop(a[o].offset, a[o].color);
      }return r;
    } };for (var oc = ac.prototype, sc = 0; sc < rc.length; sc++) {
    var lc = rc[sc];lc[0] in oc || (oc[lc[0]] = lc[1]);
  }ac.getGradient = oc.getGradient;var hc = function hc(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };hc.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };var uc = function uc(t, e, n) {
    var i;n = n || qu, "string" == typeof t ? i = Je(t, e, n) : b(t) && (i = t, t = i.id), this.id = t, this.dom = i;var r = i.style;r && (i.onselectstart = Qe, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;
  };uc.prototype = { constructor: uc, __dirty: !0, __used: !1, __drawIndex: 0, __startIndex: 0, __endIndex: 0, incremental: !1, getElementCount: function getElementCount() {
      return this.__endIndex - this.__startIndex;
    }, initContext: function initContext() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    }, createBackBuffer: function createBackBuffer() {
      var t = this.dpr;this.domBack = Je("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
    }, resize: function resize(t, e) {
      var n = this.dpr,
          i = this.dom,
          r = i.style,
          a = this.domBack;r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n));
    }, clear: function clear(t, e) {
      var n = this.dom,
          i = this.ctx,
          r = n.width,
          a = n.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var h;e.colorStops ? (h = e.__canvasGradient || ac.getGradient(i, e, { x: 0, y: 0, width: r, height: a }), e.__canvasGradient = h) : e.image && (h = hc.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore();
      }if (o) {
        var u = this.domBack;i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore();
      }
    } };var cc = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      fc = new Ru(50),
      dc = {},
      pc = 0,
      gc = 5e3,
      vc = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      mc = "12px sans-serif",
      yc = {};yc.measureText = function (t, e) {
    var n = l();return n.font = e || mc, n.measureText(t);
  };var _c = { left: 1, right: 1, center: 1 },
      xc = { top: 1, bottom: 1, middle: 1 },
      wc = new Ve(),
      bc = function bc() {};bc.prototype = { constructor: bc, drawRectText: function drawRectText(t, e) {
      var n = this.style;e = n.textRect || e, this.__dirty && Sn(n, !0);var i = n.text;if (null != i && (i += ""), Vn(i, n)) {
        t.save();var r = this.transform;n.transformText ? this.setTransform(t) : r && (wc.copy(e), wc.applyTransform(r), e = wc), In(this, t, i, n, e), t.restore();
      }
    } }, Wn.prototype = { constructor: Wn, type: "displayable", __dirty: !0, invisible: !1, z: 0, z2: 0, zlevel: 0, draggable: !1, dragging: !1, silent: !1, culling: !1, cursor: "pointer", rectHover: !1, progressive: !1, incremental: !1, inplace: !1, beforeBrush: function beforeBrush() {}, afterBrush: function afterBrush() {}, brush: function brush() {}, getBoundingRect: function getBoundingRect() {}, contain: function contain(t, e) {
      return this.rectContain(t, e);
    }, traverse: function traverse(t, e) {
      t.call(e, this);
    }, rectContain: function rectContain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();return i.contain(n[0], n[1]);
    }, dirty: function dirty() {
      this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh();
    }, animateStyle: function animateStyle(t) {
      return this.animate("style", t);
    }, attrKV: function attrKV(t, e) {
      "style" !== t ? Zu.prototype.attrKV.call(this, t, e) : this.style.set(e);
    }, setStyle: function setStyle(t, e) {
      return this.style.set(t, e), this.dirty(!1), this;
    }, useStyle: function useStyle(t) {
      return this.style = new ac(t, this), this.dirty(!1), this;
    } }, u(Wn, Zu), c(Wn, bc), Hn.prototype = { constructor: Hn, type: "image", brush: function brush(t, e) {
      var n = this.style,
          i = n.image;n.bind(t, this, e);var r = this._image = en(i, this._image, this, this.onload);if (r && rn(r)) {
        var a = n.x || 0,
            o = n.y || 0,
            s = n.width,
            l = n.height,
            h = r.width / r.height;if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var u = n.sx || 0,
              c = n.sy || 0;t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l);
        } else if (n.sx && n.sy) {
          var u = n.sx,
              c = n.sy,
              f = s - u,
              d = l - c;t.drawImage(r, u, c, f, d, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;return this._rect || (this._rect = new Ve(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    } }, u(Hn, Wn);var Sc = 1e5,
      Mc = 314159,
      Ic = .01,
      Tc = .001,
      Cc = new Ve(0, 0, 0, 0),
      Dc = new Ve(0, 0, 0, 0),
      kc = function kc(t, e, n) {
    this.type = "canvas";var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || qu, this._singleCanvas = i, this.root = t;var r = t.style;r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;var a = this._zlevelList = [],
        s = this._layers = {};if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
      var l = t.width,
          h = t.height;null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;var u = new uc(t, this, this.dpr);u.__builtin__ = !0, u.initContext(), s[Mc] = u, a.push(Mc), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);var c = this._domRoot = Zn(this._width, this._height);t.appendChild(c);
    }this._hoverlayer = null, this._hoverElements = [];
  };kc.prototype = { constructor: kc, getType: function getType() {
      return "canvas";
    }, isSingleCanvas: function isSingleCanvas() {
      return this._singleCanvas;
    }, getViewportRoot: function getViewportRoot() {
      return this._domRoot;
    }, getViewportRootOffset: function getViewportRootOffset() {
      var t = this.getViewportRoot();return t ? { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 } : void 0;
    }, refresh: function refresh(t) {
      var e = this.storage.getDisplayList(!0),
          n = this._zlevelList;this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);for (var i = 0; i < n.length; i++) {
        var r = n[i],
            a = this._layers[r];if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;a.refresh(o);
        }
      }return this.refreshHover(), this;
    }, addHover: function addHover(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({ style: t.style, shape: t.shape });n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n);
      }
    }, removeHover: function removeHover(t) {
      var e = t.__hoverMir,
          n = this._hoverElements,
          i = h(n, e);i >= 0 && n.splice(i, 1), t.__hoverMir = null;
    }, clearHover: function clearHover() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;n && (n.__hoverMir = null);
      }t.length = 0;
    }, refreshHover: function refreshHover() {
      var t = this._hoverElements,
          e = t.length,
          n = this._hoverlayer;if (n && n.clear(), e) {
        Ze(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Sc));var i = {};n.ctx.save();for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }n.ctx.restore();
      }
    }, getHoverLayer: function getHoverLayer() {
      return this.getLayer(Sc);
    }, _paintList: function _paintList(t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);var i = this._doPaintList(t, e);if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;cc(function () {
            r._paintList(t, e, n);
          });
        }
      }
    }, _compositeManually: function _compositeManually() {
      var t = this.getLayer(Mc).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    }, _doPaintList: function _doPaintList(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
            a = this._layers[r];a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
      }for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
            l = a.ctx,
            h = {};l.save();var u = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            f = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (u === a.__startIndex) {
          var g = t[u];g.incremental && g.notClear && !e || a.clear(!1, p);
        }-1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);for (var v = u; v < a.__endIndex; v++) {
          var m = t[v];if (this._doPaintEl(m, a, e, h), m.__dirty = !1, c) {
            var y = Date.now() - f;if (y > 15) break;
          }
        }a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore();
      }return iu.wxa && d(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    }, _doPaintEl: function _doPaintEl(t, e, n, i) {
      var r = e.ctx,
          a = t.transform;if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && Xn(t, this._width, this._height))) {
        var o = t.__clipPaths;(!i.prevElClipPaths || Un(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), Yn(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    }, getLayer: function getLayer(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = Mc);var n = this._layers[t];return n || (n = new uc("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    }, insertLayer: function insertLayer(t, e) {
      var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          a = null,
          o = -1,
          s = this._domRoot;if (n[t]) return void Uu("ZLevel " + t + " has been used already");if (!qn(e)) return void Uu("Layer of zlevel " + t + " is not valid");if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) {}a = n[i[o]];
      }if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
        var l = a.dom;l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    }, eachLayer: function eachLayer(t, e) {
      var n,
          i,
          r = this._zlevelList;for (i = 0; i < r.length; i++) {
        n = r[i], t.call(e, this._layers[n], n);
      }
    }, eachBuiltinLayer: function eachBuiltinLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);
      }
    }, eachOtherLayer: function eachOtherLayer(t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;for (r = 0; r < a.length; r++) {
        i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);
      }
    }, getLayers: function getLayers() {
      return this._layers;
    }, _updateLayerStatus: function _updateLayerStatus(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);
      }if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = !1;
      }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
        var i = t[n];if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = !0;break;
        }
      }for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o,
            i = t[n],
            s = i.zlevel;i.incremental ? (o = this.getLayer(s + Tc, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Ic : 0), this._needsManuallyCompositing), o.__builtin__ || Uu("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
      }e(n), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    }, clear: function clear() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }, _clearLayer: function _clearLayer(t) {
      t.clear();
    }, setBackgroundColor: function setBackgroundColor(t) {
      this._backgroundColor = t;
    }, configLayer: function configLayer(t, e) {
      if (e) {
        var n = this._layerConfig;n[t] ? r(n[t], e, !0) : n[t] = e;for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];if (a === t || a === t + Ic) {
            var o = this._layers[a];r(o, n[t], !0);
          }
        }
      }
    }, delLayer: function delLayer(t) {
      var e = this._layers,
          n = this._zlevelList,
          i = e[t];i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1));
    }, resize: function resize(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;n.style.display = "none";var i = this._opts;if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";for (var r in this._layers) {
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          }d(this._progressiveLayers, function (n) {
            n.resize(t, e);
          }), this.refresh(!0);
        }this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;this._width = t, this._height = e, this.getLayer(Mc).resize(t, e);
      }return this;
    }, clearLayer: function clearLayer(t) {
      var e = this._layers[t];e && e.clear();
    }, dispose: function dispose() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    }, getRenderedCanvas: function getRenderedCanvas(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Mc].dom;var e = new uc("image", this, t.pixelRatio || this.dpr);if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();var n = e.dom.width,
            i = e.dom.height,
            r = e.ctx;this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
        var l = o[s];this._doPaintEl(l, e, !0, a);
      }return e.dom;
    }, getWidth: function getWidth() {
      return this._width;
    }, getHeight: function getHeight() {
      return this._height;
    }, _getSize: function _getSize(t) {
      var e = this._opts,
          n = ["width", "height"][t],
          i = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);var o = this.root,
          s = document.defaultView.getComputedStyle(o);return (o[i] || Gn(s[n]) || Gn(o.style[n])) - (Gn(s[r]) || 0) - (Gn(s[a]) || 0) | 0;
    }, pathToImage: function pathToImage(t, e) {
      e = e || this.dpr;var n = document.createElement("canvas"),
          i = n.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          h = a.hasStroke() ? a.lineWidth : 0,
          u = Math.max(h / 2, -s + o),
          c = Math.max(h / 2, s + o),
          f = Math.max(h / 2, -l + o),
          d = Math.max(h / 2, l + o),
          p = r.width + u + c,
          g = r.height + f + d;n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;var v = { position: t.position, rotation: t.rotation, scale: t.scale };t.position = [u - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);var m = Hn,
          y = new m({ style: { x: 0, y: 0, image: n } });return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    } };var Ac = "undefined" != typeof window && !!window.addEventListener,
      Lc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Pc = function Pc(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, wu.call(this);
  };Pc.prototype = { constructor: Pc, addClip: function addClip(t) {
      this._clips.push(t);
    }, addAnimator: function addAnimator(t) {
      t.animation = this;for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.addClip(e[n]);
      }
    }, removeClip: function removeClip(t) {
      var e = h(this._clips, t);e >= 0 && this._clips.splice(e, 1);
    }, removeAnimator: function removeAnimator(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) {
        this.removeClip(e[n]);
      }t.animation = null;
    }, _update: function _update() {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
            l = s.step(t, e);l && (r.push(l), a.push(s));
      }for (var o = 0; i > o;) {
        n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      }i = r.length;for (var o = 0; i > o; o++) {
        a[o].fire(r[o]);
      }this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    }, _startLoop: function _startLoop() {
      function t() {
        e._running && (cc(t), !e._paused && e._update());
      }var e = this;this._running = !0, cc(t);
    }, start: function start() {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    }, stop: function stop() {
      this._running = !1;
    }, pause: function pause() {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
    }, resume: function resume() {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
    }, clear: function clear() {
      this._clips = [];
    }, isFinished: function isFinished() {
      return !this._clips.length;
    }, animate: function animate(t, e) {
      e = e || {};var n = new Wu(t, e.loop, e.getter, e.setter);return this.addAnimator(n), n;
    } }, c(Pc, wu);var Oc = function Oc() {
    this._track = [];
  };Oc.prototype = { constructor: Oc, recognize: function recognize(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }, clear: function clear() {
      return this._track.length = 0, this;
    }, _doTrack: function _doTrack(t, e, n) {
      var i = t.touches;if (i) {
        for (var r = { points: [], touches: [], target: e, event: t }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
              l = $n(n, s, {});r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }this._track.push(r);
      }
    }, _recognize: function _recognize(t) {
      for (var e in Ec) {
        if (Ec.hasOwnProperty(e)) {
          var n = Ec[e](this._track, t);if (n) return n;
        }
      }
    } };var Ec = { pinch: function pinch(t, e) {
      var n = t.length;if (n) {
        var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;if (r && r.length > 1 && i && i.length > 1) {
          var a = ei(i) / ei(r);!isFinite(a) && (a = 1), e.pinchScale = a;var o = ni(i);return e.pinchX = o[0], e.pinchY = o[1], { type: "pinch", target: t[0].target, event: e };
        }
      }
    } },
      Rc = 300,
      Bc = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      zc = ["touchstart", "touchend", "touchmove"],
      Nc = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
      Fc = p(Bc, function (t) {
    var e = t.replace("mouse", "pointer");return Nc[e] ? e : t;
  }),
      Vc = { mousemove: function mousemove(t) {
      t = Qn(this.dom, t), this.trigger("mousemove", t);
    }, mouseout: function mouseout(t) {
      t = Qn(this.dom, t);var e = t.toElement || t.relatedTarget;if (e != this.dom) for (; e && 9 != e.nodeType;) {
        if (e === this.dom) return;e = e.parentNode;
      }this.trigger("mouseout", t);
    }, touchstart: function touchstart(t) {
      t = Qn(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date(), ri(this, t, "start"), Vc.mousemove.call(this, t), Vc.mousedown.call(this, t), ai(this);
    }, touchmove: function touchmove(t) {
      t = Qn(this.dom, t), t.zrByTouch = !0, ri(this, t, "change"), Vc.mousemove.call(this, t), ai(this);
    }, touchend: function touchend(t) {
      t = Qn(this.dom, t), t.zrByTouch = !0, ri(this, t, "end"), Vc.mouseup.call(this, t), +new Date() - this._lastTouchMoment < Rc && Vc.click.call(this, t), ai(this);
    }, pointerdown: function pointerdown(t) {
      Vc.mousedown.call(this, t);
    }, pointermove: function pointermove(t) {
      oi(t) || Vc.mousemove.call(this, t);
    }, pointerup: function pointerup(t) {
      Vc.mouseup.call(this, t);
    }, pointerout: function pointerout(t) {
      oi(t) || Vc.mouseout.call(this, t);
    } };d(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Vc[t] = function (e) {
      e = Qn(this.dom, e), this.trigger(t, e);
    };
  });var Wc = li.prototype;Wc.dispose = function () {
    for (var t = Bc.concat(zc), e = 0; e < t.length; e++) {
      var n = t[e];ti(this.dom, ii(n), this._handlers[n]);
    }
  }, Wc.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(li, wu);var Hc = !iu.canvasSupported,
      Gc = { canvas: kc },
      qc = function qc(t, e, n) {
    n = n || {}, this.dom = e, this.id = t;var i = this,
        r = new ec(),
        a = n.renderer;if (Hc) {
      if (!Gc.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");a = "vml";
    } else a && Gc[a] || (a = "canvas");var o = new Gc[a](e, r, n, t);this.storage = r, this.painter = o;var s = iu.node || iu.worker ? null : new li(o.getViewportRoot());this.handler = new Mu(r, o, s, o.root), this.animation = new Pc({ stage: { update: m(this.flush, this) } }), this.animation.start(), this._needsRefresh;var l = r.delFromStorage,
        h = r.addToStorage;r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(i);
    }, r.addToStorage = function (t) {
      h.call(r, t), t.addSelfToZr(i);
    };
  };qc.prototype = { constructor: qc, getId: function getId() {
      return this.id;
    }, add: function add(t) {
      this.storage.addRoot(t), this._needsRefresh = !0;
    }, remove: function remove(t) {
      this.storage.delRoot(t), this._needsRefresh = !0;
    }, configLayer: function configLayer(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
    }, setBackgroundColor: function setBackgroundColor(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
    }, refreshImmediately: function refreshImmediately() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
    }, refresh: function refresh() {
      this._needsRefresh = !0;
    }, flush: function flush() {
      var t;this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
    }, addHover: function addHover(t, e) {
      this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
    }, removeHover: function removeHover(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    }, clearHover: function clearHover() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    }, refreshHover: function refreshHover() {
      this._needsRefreshHover = !0;
    }, refreshHoverImmediately: function refreshHoverImmediately() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
    }, resize: function resize(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    }, clearAnimation: function clearAnimation() {
      this.animation.clear();
    }, getWidth: function getWidth() {
      return this.painter.getWidth();
    }, getHeight: function getHeight() {
      return this.painter.getHeight();
    }, pathToImage: function pathToImage(t, e) {
      return this.painter.pathToImage(t, e);
    }, setCursorStyle: function setCursorStyle(t) {
      this.handler.setCursorStyle(t);
    }, findHover: function findHover(t, e) {
      return this.handler.findHover(t, e);
    }, on: function on(t, e, n) {
      this.handler.on(t, e, n);
    }, off: function off(t, e) {
      this.handler.off(t, e);
    }, trigger: function trigger(t, e) {
      this.handler.trigger(t, e);
    }, clear: function clear() {
      this.storage.delRoot(), this.painter.clear();
    }, dispose: function dispose() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
    } };var Xc = d,
      Uc = b,
      Yc = _,
      Zc = "series\x00",
      jc = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      $c = 0,
      Kc = ".",
      Qc = "___EC__COMPONENT__CONTAINER___",
      Jc = 0,
      tf = function tf(t) {
    for (var e = 0; e < t.length; e++) {
      t[e][1] || (t[e][1] = t[e][0]);
    }return function (e, n, i) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];if (!(n && h(n, o) >= 0 || i && h(i, o) < 0)) {
          var s = e.getShallow(o);null != s && (r[t[a][0]] = s);
        }
      }return r;
    };
  },
      ef = tf([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      nf = { getLineStyle: function getLineStyle(t) {
      var e = ef(this, t),
          n = this.getLineDash(e.lineWidth);return n && (e.lineDash = n), e;
    }, getLineDash: function getLineDash(t) {
      null == t && (t = 1);var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n];
    } },
      rf = tf([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      af = { getAreaStyle: function getAreaStyle(t, e) {
      return rf(this, t, e);
    } },
      of = Math.pow,
      sf = Math.sqrt,
      lf = 1e-8,
      hf = 1e-4,
      uf = sf(3),
      cf = 1 / 3,
      ff = F(),
      df = F(),
      pf = F(),
      gf = Math.min,
      vf = Math.max,
      mf = Math.sin,
      yf = Math.cos,
      _f = 2 * Math.PI,
      xf = F(),
      wf = F(),
      bf = F(),
      Sf = [],
      Mf = [],
      If = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
      Tf = [],
      Cf = [],
      Df = [],
      kf = [],
      Af = Math.min,
      Lf = Math.max,
      Pf = Math.cos,
      Of = Math.sin,
      Ef = Math.sqrt,
      Rf = Math.abs,
      Bf = "undefined" != typeof Float32Array,
      zf = function zf(t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };zf.prototype = { constructor: zf, _xi: 0, _yi: 0, _x0: 0, _y0: 0, _ux: 0, _uy: 0, _len: 0, _lineDash: null, _dashOffset: 0, _dashIdx: 0, _dashSum: 0, setScale: function setScale(t, e) {
      this._ux = Rf(1 / qu / t) || 0, this._uy = Rf(1 / qu / e) || 0;
    }, getContext: function getContext() {
      return this._ctx;
    }, beginPath: function beginPath(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    }, moveTo: function moveTo(t, e) {
      return this.addData(If.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    }, lineTo: function lineTo(t, e) {
      var n = Rf(t - this._xi) > this._ux || Rf(e - this._yi) > this._uy || this._len < 5;return this.addData(If.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
    }, bezierCurveTo: function bezierCurveTo(t, e, n, i, r, a) {
      return this.addData(If.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
    }, quadraticCurveTo: function quadraticCurveTo(t, e, n, i) {
      return this.addData(If.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
    }, arc: function arc(t, e, n, i, r, a) {
      return this.addData(If.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Pf(r) * n + t, this._yi = Of(r) * n + t, this;
    }, arcTo: function arcTo(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
    }, rect: function rect(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(If.R, t, e, n, i), this;
    }, closePath: function closePath() {
      this.addData(If.Z);var t = this._ctx,
          e = this._x0,
          n = this._y0;return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
    }, fill: function fill(t) {
      t && t.fill(), this.toStatic();
    }, stroke: function stroke(t) {
      t && t.stroke(), this.toStatic();
    }, setLineDash: function setLineDash(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;for (var e = 0, n = 0; n < t.length; n++) {
          e += t[n];
        }this._dashSum = e;
      }return this;
    }, setLineDashOffset: function setLineDashOffset(t) {
      return this._dashOffset = t, this;
    }, len: function len() {
      return this._len;
    }, setData: function setData(t) {
      var e = t.length;this.data && this.data.length == e || !Bf || (this.data = new Float32Array(e));for (var n = 0; e > n; n++) {
        this.data[n] = t[n];
      }this._len = e;
    }, appendPath: function appendPath(t) {
      t instanceof Array || (t = [t]);for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) {
        n += t[r].len();
      }Bf && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));for (var r = 0; e > r; r++) {
        for (var a = t[r].data, o = 0; o < a.length; o++) {
          this.data[i++] = a[o];
        }
      }this._len = i;
    }, addData: function addData(t) {
      if (this._saveData) {
        var e = this.data;this._len + arguments.length > e.length && (this._expandData(), e = this.data);for (var n = 0; n < arguments.length; n++) {
          e[this._len++] = arguments[n];
        }this._prevCmd = t;
      }
    }, _expandData: function _expandData() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) {
          t[e] = this.data[e];
        }this.data = t;
      }
    }, _needsDash: function _needsDash() {
      return this._lineDash;
    }, _dashedLineTo: function _dashedLineTo(t, e) {
      var n,
          i,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          h = this._yi,
          u = t - l,
          c = e - h,
          f = Ef(u * u + c * c),
          d = l,
          p = h,
          g = o.length;for (u /= f, c /= f, 0 > a && (a = r + a), a %= r, d -= a * u, p -= a * c; u > 0 && t >= d || 0 > u && d >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e);) {
        i = this._dashIdx, n = o[i], d += u * n, p += c * n, this._dashIdx = (i + 1) % g, u > 0 && l > d || 0 > u && d > l || c > 0 && h > p || 0 > c && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? Af(d, t) : Lf(d, t), c >= 0 ? Af(p, e) : Lf(p, e));
      }u = d - t, c = p - e, this._dashOffset = -Ef(u * u + c * c);
    }, _dashedBezierTo: function _dashedBezierTo(t, e, n, i, r, a) {
      var o,
          s,
          l,
          h,
          u,
          c = this._dashSum,
          f = this._dashOffset,
          d = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = Oi,
          y = 0,
          _ = this._dashIdx,
          x = d.length,
          w = 0;for (0 > f && (f = c + f), f %= c, o = 0; 1 > o; o += .1) {
        s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Ef(s * s + l * l);
      }for (; x > _ && (w += d[_], !(w > f)); _++) {}for (o = (w - f) / y; 1 >= o;) {
        h = m(g, t, n, r, o), u = m(v, e, i, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += d[_] / y, _ = (_ + 1) % x;
      }_ % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Ef(s * s + l * l);
    }, _dashedQuadraticTo: function _dashedQuadraticTo(t, e, n, i) {
      var r = n,
          a = i;n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
    }, toStatic: function toStatic() {
      var t = this.data;t instanceof Array && (t.length = this._len, Bf && (this.data = new Float32Array(t)));
    }, getBoundingRect: function getBoundingRect() {
      Tf[0] = Tf[1] = Df[0] = Df[1] = Number.MAX_VALUE, Cf[0] = Cf[1] = kf[0] = kf[1] = -Number.MAX_VALUE;for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {case If.M:
            i = t[a++], r = t[a++], e = i, n = r, Df[0] = i, Df[1] = r, kf[0] = i, kf[1] = r;break;case If.L:
            Xi(e, n, t[a], t[a + 1], Df, kf), e = t[a++], n = t[a++];break;case If.C:
            Ui(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Df, kf), e = t[a++], n = t[a++];break;case If.Q:
            Yi(e, n, t[a++], t[a++], t[a], t[a + 1], Df, kf), e = t[a++], n = t[a++];break;case If.A:
            var s = t[a++],
                l = t[a++],
                h = t[a++],
                u = t[a++],
                c = t[a++],
                f = t[a++] + c,
                d = (t[a++], 1 - t[a++]);1 == a && (i = Pf(c) * h + s, r = Of(c) * u + l), Zi(s, l, h, u, c, f, d, Df, kf), e = Pf(f) * h + s, n = Of(f) * u + l;break;case If.R:
            i = e = t[a++], r = n = t[a++];var p = t[a++],
                g = t[a++];Xi(i, r, i + p, r + g, Df, kf);break;case If.Z:
            e = i, n = r;}Q(Tf, Tf, Df), J(Cf, Cf, kf);
      }return 0 === a && (Tf[0] = Tf[1] = Cf[0] = Cf[1] = 0), new Ve(Tf[0], Tf[1], Cf[0] - Tf[0], Cf[1] - Tf[1]);
    }, rebuildPath: function rebuildPath(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
        var f = s[c++];switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), f) {case If.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);break;case If.L:
            a = s[c++], o = s[c++], (Rf(a - i) > l || Rf(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);break;case If.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case If.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];break;case If.A:
            var d = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                S = g > v ? v / g : 1,
                M = Math.abs(g - v) > .001,
                I = m + y;M ? (t.translate(d, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-d, -p)) : t.arc(d, p, w, m, I, 1 - x), 1 == c && (e = Pf(m) * g + d, n = Of(m) * v + p), i = Pf(I) * g + d, r = Of(I) * v + p;break;case If.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);break;case If.Z:
            t.closePath(), i = e, r = n;}
      }
    } }, zf.CMD = If;var Nf = 2 * Math.PI,
      Ff = 2 * Math.PI,
      Vf = zf.CMD,
      Wf = 2 * Math.PI,
      Hf = 1e-4,
      Gf = [-1, -1, -1],
      qf = [-1, -1],
      Xf = hc.prototype.getCanvasPattern,
      Uf = Math.abs,
      Yf = new zf(!0);hr.prototype = { constructor: hr, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function brush(t, e) {
      var n = this.style,
          i = this.path || Yf,
          r = n.hasStroke(),
          a = n.hasFill(),
          o = n.fill,
          s = n.stroke,
          l = a && !!o.colorStops,
          h = r && !!s.colorStops,
          u = a && !!o.image,
          c = r && !!s.image;if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var f;l && (f = f || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, f)), h && (f = f || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, f));
      }l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Xf.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Xf.call(s, t));var d = n.lineDash,
          p = n.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();i.setScale(v[0], v[1]), this.__dirtyPath || d && !g && r ? (i.beginPath(t), d && !g && (i.setLineDash(d), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), d && g && (t.setLineDash(d), t.lineDashOffset = p), r && i.stroke(t), d && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    }, buildPath: function buildPath() {}, createPathProxy: function createPathProxy() {
      this.path = new zf();
    }, getBoundingRect: function getBoundingRect() {
      var t = this._rect,
          e = this.style,
          n = !t;if (n) {
        var i = this.path;i || (i = this.path = new zf()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();
      }if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());if (this.__dirty || n) {
          r.copy(t);var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }return r;
      }return t;
    }, contain: function contain(t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), lr(a, o / s, t, e))) return !0;
        }if (r.hasFill()) return sr(a, t, e);
      }return !1;
    }, dirty: function dirty(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    }, animateShape: function animateShape(t) {
      return this.animate("shape", t);
    }, attrKV: function attrKV(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Wn.prototype.attrKV.call(this, t, e);
    }, setShape: function setShape(t, e) {
      var n = this.shape;if (n) {
        if (b(t)) for (var i in t) {
          t.hasOwnProperty(i) && (n[i] = t[i]);
        } else n[t] = e;this.dirty(!0);
      }return this;
    }, getLineScale: function getLineScale() {
      var t = this.transform;return t && Uf(t[0] - 1) > 1e-10 && Uf(t[3] - 1) > 1e-10 ? Math.sqrt(Uf(t[0] * t[3] - t[2] * t[1])) : 1;
    } }, hr.extend = function (t) {
    var e = function e(_e2) {
      hr.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);var n = t.shape;if (n) {
        this.shape = this.shape || {};var i = this.shape;for (var r in n) {
          !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
        }
      }t.init && t.init.call(this, _e2);
    };u(e, hr);for (var n in t) {
      "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    }return e;
  }, u(hr, Wn);var Zf = zf.CMD,
      jf = [[], [], []],
      $f = Math.sqrt,
      Kf = Math.atan2,
      Qf = function Qf(t, e) {
    var n,
        i,
        r,
        a,
        o,
        s,
        l = t.data,
        h = Zf.M,
        u = Zf.C,
        c = Zf.L,
        f = Zf.R,
        d = Zf.A,
        p = Zf.Q;for (r = 0, a = 0; r < l.length;) {
      switch (n = l[r++], a = r, i = 0, n) {case h:
          i = 1;break;case c:
          i = 1;break;case u:
          i = 3;break;case p:
          i = 2;break;case d:
          var g = e[4],
              v = e[5],
              m = $f(e[0] * e[0] + e[1] * e[1]),
              y = $f(e[2] * e[2] + e[3] * e[3]),
              _ = Kf(-e[1] / y, e[0] / m);l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;break;case f:
          s[0] = l[r++], s[1] = l[r++], K(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], K(s, s, e), l[a++] = s[0], l[a++] = s[1];}for (o = 0; i > o; o++) {
        var s = jf[o];s[0] = l[r++], s[1] = l[r++], K(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      Jf = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
      td = Math.sqrt,
      ed = Math.sin,
      nd = Math.cos,
      id = Math.PI,
      rd = function rd(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      ad = function ad(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (rd(t) * rd(e));
  },
      od = function od(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(ad(t, e));
  },
      sd = function sd(t) {
    Wn.call(this, t);
  };sd.prototype = { constructor: sd, type: "text", brush: function brush(t, e) {
      var n = this.style;this.__dirty && Sn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;var i = n.text;null != i && (i += ""), n.bind(t, this, e), Vn(i, n) && (this.setTransform(t), In(this, t, i, n), this.restoreTransform(t));
    }, getBoundingRect: function getBoundingRect() {
      var t = this.style;if (this.__dirty && Sn(t, !0), !this._rect) {
        var e = t.text;null != e ? e += "" : e = "";var n = on(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);if (n.x += t.x || 0, n.y += t.y || 0, Bn(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
        }this._rect = n;
      }return this._rect;
    } }, u(sd, Wn);var ld = hr.extend({ type: "circle", shape: { cx: 0, cy: 0, r: 0 }, buildPath: function buildPath(t, e, n) {
      n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
    } }),
      hd = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      ud = function ud(t) {
    return iu.browser.ie && iu.browser.version >= 11 ? function () {
      var e,
          n = this.__clipPaths,
          i = this.style;if (n) for (var r = 0; r < n.length; r++) {
        var a = n[r],
            o = a && a.shape,
            s = a && a.type;if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < hd.length; l++) {
            hd[l][2] = i[hd[l][0]], i[hd[l][0]] = hd[l][1];
          }e = !0;break;
        }
      }if (t.apply(this, arguments), e) for (var l = 0; l < hd.length; l++) {
        i[hd[l][0]] = hd[l][2];
      }
    } : t;
  },
      cd = hr.extend({ type: "sector", shape: { cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, brush: ud(hr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          h = Math.cos(o),
          u = Math.sin(o);t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
    } });hr.extend({ type: "ring", shape: { cx: 0, cy: 0, r: 0, r0: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
    } });var fd = function fd(t, e) {
    for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) {
      r += j(t[a - 1], t[a]);
    }var o = r / 2;o = n > o ? n : o;for (var a = 0; o > a; a++) {
      var s,
          l,
          h,
          u = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(u),
          f = u - c,
          d = t[c % n];e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);var p = f * f,
          g = f * p;i.push([pr(s[0], d[0], l[0], h[0], f, p, g), pr(s[1], d[1], l[1], h[1], f, p, g)]);
    }return i;
  },
      dd = function dd(t, e, n, i) {
    var r,
        a,
        o,
        s,
        l = [],
        h = [],
        u = [],
        c = [];if (i) {
      o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];for (var f = 0, d = t.length; d > f; f++) {
        Q(o, o, t[f]), J(s, s, t[f]);
      }Q(o, o, i[0]), J(s, s, i[1]);
    }for (var f = 0, d = t.length; d > f; f++) {
      var p = t[f];if (n) r = t[f ? f - 1 : d - 1], a = t[(f + 1) % d];else {
        if (0 === f || f === d - 1) {
          l.push(W(t[f]));continue;
        }r = t[f - 1], a = t[f + 1];
      }q(h, a, r), Y(h, h, e);var g = j(p, r),
          v = j(p, a),
          m = g + v;0 !== m && (g /= m, v /= m), Y(u, h, -g), Y(c, h, v);var y = H([], p, u),
          _ = H([], p, c);i && (J(y, y, o), Q(y, y, s), J(_, _, o), Q(_, _, s)), l.push(y), l.push(_);
    }return n && l.push(l.shift()), l;
  };hr.extend({ type: "polygon", shape: { points: null, smooth: !1, smoothConstraint: null }, buildPath: function buildPath(t, e) {
      gr(t, e, !0);
    } });var pd = hr.extend({ type: "polyline", shape: { points: null, smooth: !1, smoothConstraint: null }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      gr(t, e, !1);
    } }),
      gd = hr.extend({ type: "rect", shape: { r: 0, x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;e.r ? bn(t, e) : t.rect(n, i, r, a), t.closePath();
    } }),
      vd = hr.extend({ type: "line", shape: { x1: 0, y1: 0, x2: 0, y2: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
    }, pointAt: function pointAt(t) {
      var e = this.shape;return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    } }),
      md = [];hr.extend({ type: "bezier-curve", shape: { x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          h = e.cpy2,
          u = e.percent;0 !== u && (t.moveTo(n, i), null == l || null == h ? (1 > u && (Gi(n, o, r, u, md), o = md[1], r = md[2], Gi(i, s, a, u, md), s = md[1], a = md[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (zi(n, o, l, r, u, md), o = md[1], l = md[2], r = md[3], zi(i, s, h, a, u, md), s = md[1], h = md[2], a = md[3]), t.bezierCurveTo(o, s, l, h, r, a)));
    }, pointAt: function pointAt(t) {
      return vr(this.shape, t, !1);
    }, tangentAt: function tangentAt(t) {
      var e = vr(this.shape, t, !0);return Z(e, e);
    } });var yd = hr.extend({ type: "arc", shape: { cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0 }, style: { stroke: "#000", fill: null }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          h = Math.sin(a);t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s);
    } });hr.extend({ type: "compound", shape: { paths: null }, _updatePathDirty: function _updatePathDirty() {
      for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) {
        t = t || e[n].__dirtyPath;
      }this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    }, beforeBrush: function beforeBrush() {
      this._updatePathDirty();for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) {
        t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1]);
      }
    }, buildPath: function buildPath(t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++) {
        n[i].buildPath(t, n[i].shape, !0);
      }
    }, afterBrush: function afterBrush() {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
        t[e].__dirtyPath = !1;
      }
    }, getBoundingRect: function getBoundingRect() {
      return this._updatePathDirty(), hr.prototype.getBoundingRect.call(this);
    } });var _d = function _d(t) {
    this.colorStops = t || [];
  };_d.prototype = { constructor: _d, addColorStop: function addColorStop(t, e) {
      this.colorStops.push({ offset: t, color: e });
    } };var xd = function xd(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, _d.call(this, r);
  };xd.prototype = { constructor: xd }, u(xd, _d);var wd = function wd(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, _d.call(this, i);
  };wd.prototype = { constructor: wd }, u(wd, _d), mr.prototype.incremental = !0, mr.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
  }, mr.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, mr.prototype.addDisplayables = function (t, e) {
    e = e || !1;for (var n = 0; n < t.length; n++) {
      this.addDisplayable(t[n], e);
    }
  }, mr.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      t && t(this._displayables[e]);
    }for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      t && t(this._temporaryDisplayables[e]);
    }
  }, mr.prototype.update = function () {
    this.updateTransform();for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];e.parent = this, e.update(), e.parent = null;
    }for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];e.parent = this, e.update(), e.parent = null;
    }
  }, mr.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._cursor = e;for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }this._temporaryDisplayables = [], this.notClear = !0;
  };var bd = [];mr.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new Ve(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
            i = n.getBoundingRect().clone();n.needLocalTransform() && i.applyTransform(n.getLocalTransform(bd)), t.union(i);
      }this._rect = t;
    }return this._rect;
  }, mr.prototype.contain = function (t, e) {
    var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];if (a.contain(t, e)) return !0;
    }return !1;
  }, u(mr, Wn);var Sd = Math.round,
      Md = {},
      Id = ["textStyle", "color"],
      Td = { getTextColor: function getTextColor(t) {
      var e = this.ecModel;return this.getShallow("color") || (!t && e ? e.get(Id) : null);
    }, getFont: function getFont() {
      return Ur({ fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, this.ecModel);
    }, getTextRect: function getTextRect(t) {
      return on(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
    } },
      Cd = tf([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Dd = { getItemStyle: function getItemStyle(t, e) {
      var n = Cd(this, t, e),
          i = this.getBorderLineDash();return i && (n.lineDash = i), n;
    }, getBorderLineDash: function getBorderLineDash() {
      var t = this.get("borderType");return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    } },
      kd = c,
      Ad = _i();Kr.prototype = { constructor: Kr, init: null, mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
    }, get: function get(t, e) {
      return null == t ? this.option : Qr(this.option, this.parsePath(t), !e && Jr(this, t));
    }, getShallow: function getShallow(t, e) {
      var n = this.option,
          i = null == n ? n : n[t],
          r = !e && Jr(this, t);return null == i && r && (i = r.getShallow(t)), i;
    }, getModel: function getModel(t, e) {
      var n,
          i = null == t ? this.option : Qr(this.option, t = this.parsePath(t));return e = e || (n = Jr(this, t)) && n.getModel(t), new Kr(i, e, this.ecModel);
    }, isEmpty: function isEmpty() {
      return null == this.option;
    }, restoreData: function restoreData() {}, clone: function clone() {
      var t = this.constructor;return new t(i(this.option));
    }, setReadOnly: function setReadOnly() {}, parsePath: function parsePath(t) {
      return "string" == typeof t && (t = t.split(".")), t;
    }, customizeGetParent: function customizeGetParent(t) {
      Ad(this).getParent = t;
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (!iu.node) {
        if (null != this.option.animation) return !!this.option.animation;if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    } }, Ti(Kr), Ci(Kr), kd(Kr, nf), kd(Kr, af), kd(Kr, Td), kd(Kr, Dd);var Ld = 0,
      Pd = 1e-4,
      Od = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      Ed = L,
      Rd = ["a", "b", "c", "d", "e", "f", "g"],
      Bd = function Bd(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      zd = fn,
      Nd = d,
      Fd = ["left", "right", "top", "bottom", "width", "height"],
      Vd = [["width", "left", "right"], ["height", "top", "bottom"]],
      Wd = (y(ba, "vertical"), y(ba, "horizontal"), { getBoxLayoutParams: function getBoxLayoutParams() {
      return { left: this.get("left"), top: this.get("top"), right: this.get("right"), bottom: this.get("bottom"), width: this.get("width"), height: this.get("height") };
    } }),
      Hd = _i(),
      Gd = Kr.extend({ type: "component", id: "", name: "", mainType: "", subType: "", componentIndex: 0, defaultOption: null, ecModel: null, dependentModels: [], uid: null, layoutMode: null, $constructor: function $constructor(t, e, n, i) {
      Kr.call(this, t, e, n, i), this.uid = ta("ec_cpt_model");
    }, init: function init(t, e, n) {
      this.mergeDefaultAndTheme(t, n);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? Ia(t) : {},
          a = e.getTheme();r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && Ma(t, i, n);
    }, mergeOption: function mergeOption(t) {
      r(this.option, t, !0);var e = this.layoutMode;e && Ma(this.option, t, e);
    }, optionUpdated: function optionUpdated() {}, getDefaultOption: function getDefaultOption() {
      var t = Hd(this);if (!t.defaultOption) {
        for (var e = [], n = this.constructor; n;) {
          var i = n.prototype.defaultOption;i && e.push(i), n = n.superClass;
        }for (var a = {}, o = e.length - 1; o >= 0; o--) {
          a = r(a, e[o], !0);
        }t.defaultOption = a;
      }return t.defaultOption;
    }, getReferringComponents: function getReferringComponents(t) {
      return this.ecModel.queryComponents({ mainType: t, index: this.get(t + "Index", !0), id: this.get(t + "Id", !0) });
    } });Ai(Gd, { registerWhenExtend: !0 }), ea(Gd), na(Gd, Ca), c(Gd, Wd);var qd = "";"undefined" != typeof navigator && (qd = navigator.platform || "");var Xd = { color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"], gradientColor: ["#f6efa6", "#d88273", "#bf444c"], textStyle: { fontFamily: qd.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 300, animationEasing: "exponentialOut", animationEasingUpdate: "cubicOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 },
      Ud = _i(),
      Yd = { clearColorPalette: function clearColorPalette() {
      Ud(this).colorIdx = 0, Ud(this).colorNameMap = {};
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      e = e || this;var i = Ud(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};if (a.hasOwnProperty(t)) return a[t];var o = ui(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? Da(s, n) : o;if (l = l || o, l && l.length) {
        var h = l[r];return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h;
      }
    } },
      Zd = { cartesian2d: function cartesian2d(t, e, n, i) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Aa(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Aa(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);
    }, singleAxis: function singleAxis(t, e, n, i) {
      var r = t.getReferringComponents("singleAxis")[0];e.coordSysDims = ["single"], n.set("single", r), Aa(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
    }, polar: function polar(t, e, n, i) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Aa(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Aa(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);
    }, geo: function geo(t, e) {
      e.coordSysDims = ["lng", "lat"];
    }, parallel: function parallel(t, e, n, i) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();d(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];n.set(l, s), Aa(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
      });
    } },
      jd = "original",
      $d = "arrayRows",
      Kd = "objectRows",
      Qd = "keyedColumns",
      Jd = "unknown",
      tp = "typedArray",
      ep = "column",
      np = "row";La.seriesDataToSource = function (t) {
    return new La({ data: t, sourceFormat: M(t) ? tp : jd, fromDataset: !1 });
  }, Ci(La);var ip = _i(),
      rp = "\x00_ec_inner",
      ap = Kr.extend({ constructor: ap, init: function init(t, e, n, i) {
      n = n || {}, this.option = null, this._theme = new Kr(n), this._optionManager = i;
    }, setOption: function setOption(t, e) {
      P(!(rp in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    }, resetOption: function resetOption(t) {
      var e = !1,
          n = this._optionManager;if (!t || "recreate" === t) {
        var i = n.mountOption("recreate" === t);this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Xa.call(this, i), e = !0;
      }if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = n.getTimelineOption(this);r && (this.mergeOption(r), e = !0);
      }if (!t || "recreate" === t || "media" === t) {
        var a = n.getMediaOption(this, this._api);a.length && d(a, function (t) {
          this.mergeOption(t, e = !0);
        }, this);
      }return e;
    }, mergeOption: function mergeOption(t) {
      function e(e, i) {
        var r = ui(t[e]),
            s = pi(a.get(e), r);gi(s), d(s, function (t) {
          var n = t.option;b(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Ya(e, n, t.exist));
        });var l = Ua(a, i);n[e] = [], a.set(e, []), d(s, function (t, i) {
          var r = t.exist,
              s = t.option;if (P(b(s) || r, "Empty component definition"), s) {
            var h = Gd.getClass(e, t.keyInfo.subType, !0);if (r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {
              var u = o({ dependentModels: l, componentIndex: i }, t.keyInfo);r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, !1);a.get(e)[i] = r, n[e][i] = r.option;
        }, this), "series" === e && Za(this, a.get("series"));
      }var n = this.option,
          a = this._componentsMap,
          s = [];Oa(this), d(t, function (t, e) {
        null != t && (Gd.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0));
      }), Gd.topologicalTravel(s, Gd.getAllClassMainTypes(), e, this), this._seriesIndicesMap = z(this._seriesIndices = this._seriesIndices || []);
    }, getOption: function getOption() {
      var t = i(this.option);return d(t, function (e, n) {
        if (Gd.hasClass(n)) {
          for (var e = ui(e), i = e.length - 1; i >= 0; i--) {
            mi(e[i]) && e.splice(i, 1);
          }t[n] = e;
        }
      }), delete t[rp], t;
    }, getTheme: function getTheme() {
      return this._theme;
    }, getComponent: function getComponent(t, e) {
      var n = this._componentsMap.get(t);return n ? n[e || 0] : void 0;
    }, queryComponents: function queryComponents(t) {
      var e = t.mainType;if (!e) return [];var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);if (!a || !a.length) return [];var o;if (null != n) _(n) || (n = [n]), o = v(p(n, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != i) {
        var s = _(i);o = v(a, function (t) {
          return s && h(i, t.id) >= 0 || !s && t.id === i;
        });
      } else if (null != r) {
        var l = _(r);o = v(a, function (t) {
          return l && h(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();return ja(o, t);
    }, findComponents: function findComponents(t) {
      function e(t) {
        var e = r + "Index",
            n = r + "Id",
            i = r + "Name";return !t || null == t[e] && null == t[n] && null == t[i] ? null : { mainType: r, index: t[e], id: t[n], name: t[i] };
      }function n(e) {
        return t.filter ? v(e, t.filter) : e;
      }var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);return n(ja(o, t));
    }, eachComponent: function eachComponent(t, e, n) {
      var i = this._componentsMap;if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
        d(t, function (t, r) {
          e.call(n, i, t, r);
        });
      });else if (w(t)) d(i.get(t), e, n);else if (b(t)) {
        var r = this.findComponents(t);d(r, e, n);
      }
    }, getSeriesByName: function getSeriesByName(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.name === t;
      });
    }, getSeriesByIndex: function getSeriesByIndex(t) {
      return this._componentsMap.get("series")[t];
    }, getSeriesByType: function getSeriesByType(t) {
      var e = this._componentsMap.get("series");return v(e, function (e) {
        return e.subType === t;
      });
    }, getSeries: function getSeries() {
      return this._componentsMap.get("series").slice();
    }, getSeriesCount: function getSeriesCount() {
      return this._componentsMap.get("series").length;
    }, eachSeries: function eachSeries(t, e) {
      d(this._seriesIndices, function (n) {
        var i = this._componentsMap.get("series")[n];t.call(e, i, n);
      }, this);
    }, eachRawSeries: function eachRawSeries(t, e) {
      d(this._componentsMap.get("series"), t, e);
    }, eachSeriesByType: function eachSeriesByType(t, e, n) {
      d(this._seriesIndices, function (i) {
        var r = this._componentsMap.get("series")[i];r.subType === t && e.call(n, r, i);
      }, this);
    }, eachRawSeriesByType: function eachRawSeriesByType(t, e, n) {
      return d(this.getSeriesByType(t), e, n);
    }, isSeriesFiltered: function isSeriesFiltered(t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    }, getCurrentSeriesIndices: function getCurrentSeriesIndices() {
      return (this._seriesIndices || []).slice();
    }, filterSeries: function filterSeries(t, e) {
      var n = v(this._componentsMap.get("series"), t, e);Za(this, n);
    }, restoreData: function restoreData(t) {
      var e = this._componentsMap;Za(this, e.get("series"));var n = [];e.each(function (t, e) {
        n.push(e);
      }), Gd.topologicalTravel(n, Gd.getAllClassMainTypes(), function (n) {
        d(e.get(n), function (e) {
          ("series" !== n || !Ga(e, t)) && e.restoreData();
        });
      });
    } });c(ap, Yd);var op = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      sp = {};Ka.prototype = { constructor: Ka, create: function create(t, e) {
      var n = [];d(sp, function (i) {
        var r = i.create(t, e);n = n.concat(r || []);
      }), this._coordinateSystems = n;
    }, update: function update(t, e) {
      d(this._coordinateSystems, function (n) {
        n.update && n.update(t, e);
      });
    }, getCoordinateSystems: function getCoordinateSystems() {
      return this._coordinateSystems.slice();
    } }, Ka.register = function (t, e) {
    sp[t] = e;
  }, Ka.get = function (t) {
    return sp[t];
  };var lp = d,
      hp = i,
      up = p,
      cp = r,
      fp = /^(min|max)?(.+)$/;Qa.prototype = { constructor: Qa, setOption: function setOption(t, e) {
      t && d(ui(t.series), function (t) {
        t && t.data && M(t.data) && E(t.data);
      }), t = hp(t, !0);var n = this._optionBackup,
          i = Ja.call(this, t, e, !n);this._newBaseOption = i.baseOption, n ? (io(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
    }, mountOption: function mountOption(t) {
      var e = this._optionBackup;return this._timelineOptions = up(e.timelineOptions, hp), this._mediaList = up(e.mediaList, hp), this._mediaDefault = hp(e.mediaDefault), this._currentMediaIndices = [], hp(t ? e.baseOption : this._newBaseOption);
    }, getTimelineOption: function getTimelineOption(t) {
      var e,
          n = this._timelineOptions;if (n.length) {
        var i = t.getComponent("timeline");i && (e = hp(n[i.getCurrentIndex()], !0));
      }return e;
    }, getMediaOption: function getMediaOption() {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          n = this._mediaList,
          i = this._mediaDefault,
          r = [],
          a = [];if (!n.length && !i) return a;for (var o = 0, s = n.length; s > o; o++) {
        to(n[o].query, t, e) && r.push(o);
      }return !r.length && i && (r = [-1]), r.length && !no(r, this._currentMediaIndices) && (a = up(r, function (t) {
        return hp(-1 === t ? i.option : n[t].option);
      })), this._currentMediaIndices = r, a;
    } };var dp = d,
      pp = b,
      gp = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      vp = function vp(t, e) {
    dp(uo(t.series), function (t) {
      pp(t) && ho(t);
    });var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), dp(n, function (e) {
      dp(uo(t[e]), function (t) {
        t && (so(t, "axisLabel"), so(t.axisPointer, "label"));
      });
    }), dp(uo(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;so(e, "axisLabel"), so(e && e.axisPointer, "label");
    }), dp(uo(t.calendar), function (t) {
      ao(t, "itemStyle"), so(t, "dayLabel"), so(t, "monthLabel"), so(t, "yearLabel");
    }), dp(uo(t.radar), function (t) {
      so(t, "name");
    }), dp(uo(t.geo), function (t) {
      pp(t) && (lo(t), dp(uo(t.regions), function (t) {
        lo(t);
      }));
    }), dp(uo(t.timeline), function (t) {
      lo(t), ao(t, "label"), ao(t, "itemStyle"), ao(t, "controlStyle", !0);var e = t.data;_(e) && d(e, function (t) {
        b(t) && (ao(t, "label"), ao(t, "itemStyle"));
      });
    }), dp(uo(t.toolbox), function (t) {
      ao(t, "iconStyle"), dp(t.feature, function (t) {
        ao(t, "iconStyle");
      });
    }), so(co(t.axisPointer), "label"), so(co(t.tooltip).axisPointer, "label");
  },
      mp = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      yp = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      _p = function _p(t, e) {
    vp(t, e), t.series = ui(t.series), d(t.series, function (t) {
      if (b(t)) {
        var e = t.type;if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
          var n = fo(t, "pointer.color");null != n && po(t, "itemStyle.normal.color", n);
        }go(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), d(yp, function (e) {
      var n = t[e];n && (_(n) || (n = [n]), d(n, function (t) {
        go(t);
      }));
    });
  },
      xp = function xp(t) {
    var e = z();t.eachSeries(function (t) {
      var n = t.get("stack");if (n) {
        var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = { stackResultDimension: r.getCalculationInfo("stackResultDimension"), stackedOverDimension: r.getCalculationInfo("stackedOverDimension"), stackedDimension: r.getCalculationInfo("stackedDimension"), stackedByDimension: r.getCalculationInfo("stackedByDimension"), isStackedByIndex: r.getCalculationInfo("isStackedByIndex"), data: r, seriesModel: t };if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
      }
    }), e.each(vo);
  },
      wp = mo.prototype;wp.pure = !1, wp.persistent = !0, wp.getSource = function () {
    return this._source;
  };var bp = { arrayRows_column: { pure: !0, count: function count() {
        return Math.max(0, this._data.length - this._source.startIndex);
      }, getItem: function getItem(t) {
        return this._data[t + this._source.startIndex];
      }, appendData: xo }, arrayRows_row: { pure: !0, count: function count() {
        var t = this._data[0];return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      }, getItem: function getItem(t) {
        t += this._source.startIndex;for (var e = [], n = this._data, i = 0; i < n.length; i++) {
          var r = n[i];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      } }, objectRows: { pure: !0, count: yo, getItem: _o, appendData: xo }, keyedColumns: { pure: !0, count: function count() {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];return e ? e.length : 0;
      }, getItem: function getItem(t) {
        for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
          var r = this._data[n[i].name];e.push(r ? r[t] : null);
        }return e;
      }, appendData: function appendData(t) {
        var e = this._data;d(t, function (t, n) {
          for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) {
            i.push(t[r]);
          }
        });
      } }, original: { count: yo, getItem: _o, appendData: xo }, typedArray: { persistent: !1, pure: !0, count: function count() {
        return this._data ? this._data.length / this._dimSize : 0;
      }, getItem: function getItem(t) {
        t -= this._offset;for (var e = [], n = this._dimSize * t, i = 0; i < this._dimSize; i++) {
          e[i] = this._data[n + i];
        }return e;
      }, appendData: function appendData(t) {
        this._data = t;
      }, clean: function clean() {
        this._offset += this.count(), this._data = null;
      } } },
      Sp = { arrayRows: wo, objectRows: function objectRows(t, e, n, i) {
      return null != n ? t[i] : t;
    }, keyedColumns: wo, original: function original(t, e, n) {
      var i = fi(t);return null != n && i instanceof Array ? i[n] : i;
    }, typedArray: wo },
      Mp = { arrayRows: bo, objectRows: function objectRows(t, e) {
      return So(t[e], this._dimensionInfos[e]);
    }, keyedColumns: bo, original: function original(t, e, n, i) {
      var r = t && (null == t.value ? t : t.value);return !this._rawData.pure && di(t) && (this.hasItemOption = !0), So(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
    }, typedArray: function typedArray(t, e, n, i) {
      return t[i];
    } },
      Ip = /\{@(.+?)\}/g,
      Tp = { getDataParams: function getDataParams(t, e) {
      var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t, !0),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color");return { componentType: this.mainType, componentSubType: this.subType, seriesType: "series" === this.mainType ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: this.id, seriesName: this.name, name: a, dataIndex: r, data: o, dataType: e, value: i, color: s, marker: _a(s), $vars: ["seriesName", "name", "value"] };
    }, getFormattedLabel: function getFormattedLabel(t, e, n, i, r) {
      e = e || "normal";var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);null != i && s.value instanceof Array && (s.value = s.value[i]);var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);if ("function" == typeof l) return s.status = e, l(s);if ("string" == typeof l) {
        var h = ya(l, s);return h.replace(Ip, function (e, n) {
          var i = n.length;return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), Mo(a, t, n);
        });
      }
    }, getRawValue: function getRawValue(t, e) {
      return Mo(this.getData(e), t);
    }, formatTooltip: function formatTooltip() {} },
      Cp = Co.prototype;Cp.perform = function (t) {
    var e = this._upstream,
        n = t && t.skip;if (this._dirty && e) {
      var i = this.context;i.data = i.outputData = e.context.outputData;
    }this.__pipeline && (this.__pipeline.currentTask = this);var r;this._plan && !n && (r = this._plan(this.context));var a;(this._dirty || "reset" === r) && (this._dirty = !1, a = Do(this, n));var o = t && t.step;if (this._dueEnd = e ? e._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var s = this._dueIndex,
          l = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd);!n && (a || l > s) && this._progress({ start: s, end: l }, this.context), this._dueIndex = l;var h = null != this._settedOutputEnd ? this._settedOutputEnd : l;this._outputDueEnd = h;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;return this.unfinished();
  }, Cp.dirty = function () {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, Cp.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, Cp.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, Cp.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, Cp.getUpstream = function () {
    return this._upstream;
  }, Cp.getDownstream = function () {
    return this._downstream;
  }, Cp.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };var Dp = _i(),
      kp = Gd.extend({ type: "series.__base__", seriesIndex: 0, coordinateSystem: null, defaultOption: null, legendDataProvider: null, visualColorAccessPath: "itemStyle.color", layoutMode: null, init: function init(t, e, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = To({ count: Lo, reset: Po }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t, n), Ea(this);var i = this.getInitialData(t, n);Eo(i, this), this.dataTask.context.data = i, Dp(this).dataBeforeProcessed = i, ko(this);
    }, mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var n = this.layoutMode,
          i = n ? Ia(t) : {},
          a = this.subType;Gd.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), ci(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && Ma(t, i, n);
    }, mergeOption: function mergeOption(t, e) {
      t = r(this.option, t, !0), this.fillDataTextStyle(t.data);var n = this.layoutMode;n && Ma(this.option, t, n), Ea(this);var i = this.getInitialData(t, e);Eo(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Dp(this).dataBeforeProcessed = i, ko(this);
    }, fillDataTextStyle: function fillDataTextStyle(t) {
      if (t) for (var e = ["show"], n = 0; n < t.length; n++) {
        t[n] && t[n].label && ci(t[n], "label", e);
      }
    }, getInitialData: function getInitialData() {}, appendData: function appendData(t) {
      var e = this.getRawData();e.appendData(t.data);
    }, getData: function getData(t) {
      var e = Bo(this);if (e) {
        var n = e.context.data;return null == t ? n : n.getLinkedData(t);
      }return Dp(this).data;
    }, setData: function setData(t) {
      var e = Bo(this);if (e) {
        var n = e.context;n.data !== t && e.isOverallFilter && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
      }Dp(this).data = t;
    }, getSource: function getSource() {
      return Pa(this);
    }, getRawData: function getRawData() {
      return Dp(this).dataBeforeProcessed;
    }, getBaseAxis: function getBaseAxis() {
      var t = this.coordinateSystem;return t && t.getBaseAxis && t.getBaseAxis();
    }, formatTooltip: function formatTooltip(t, e) {
      function n(n) {
        function i(t, n) {
          var i = r.getDimensionInfo(n);if (i && i.otherDims.tooltip !== !1) {
            var a = i.type,
                l = _a({ color: h, type: "subItem" }),
                u = (o ? l + ma(i.displayName || "-") + ": " : "") + ma("ordinal" === a ? t + "" : "time" === a ? e ? "" : wa("yyyy/MM/dd hh:mm:ss", t) : va(t));u && s.push(u);
          }
        }var o = g(n, function (t, e, n) {
          var i = r.getDimensionInfo(n);return t |= i && i.tooltip !== !1 && null != i.displayName;
        }, 0),
            s = [];return a.length ? d(a, function (e) {
          i(Mo(r, t, e), e);
        }) : d(n, i), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ");
      }function i(t) {
        return ma(va(t));
      }var r = this.getData(),
          a = r.mapDimension("defaultedTooltip", !0),
          o = a.length,
          s = this.getRawValue(t),
          l = _(s),
          h = r.getItemVisual(t, "color");b(h) && h.colorStops && (h = (h.colorStops[0] || {}).color), h = h || "transparent";var u = o > 1 || l && !o ? n(s) : i(o ? Mo(r, t, a[0]) : l ? s[0] : s),
          c = _a(h),
          f = r.getName(t),
          p = this.name;return vi(this) || (p = ""), p = p ? ma(p) + (e ? ": " : "<br/>") : "", e ? c + p + u : p + c + (f ? ma(f) + ": " + u : u);
    }, isAnimationEnabled: function isAnimationEnabled() {
      if (iu.node) return !1;var t = this.getShallow("animation");return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
    }, restoreData: function restoreData() {
      this.dataTask.dirty();
    }, getColorFromPalette: function getColorFromPalette(t, e, n) {
      var i = this.ecModel,
          r = Yd.getColorFromPalette.call(this, t, e, n);return r || (r = i.getColorFromPalette(t, e, n)), r;
    }, coordDimToDataDim: function coordDimToDataDim(t) {
      return this.getRawData().mapDimension(t, !0);
    }, getProgressive: function getProgressive() {
      return this.get("progressive");
    }, getProgressiveThreshold: function getProgressiveThreshold() {
      return this.get("progressiveThreshold");
    }, getAxisTooltipData: null, getTooltipPosition: null, pipeTask: null, preventIncremental: null, pipelineContext: null });c(kp, Tp), c(kp, Yd);var Ap = function Ap() {
    this.group = new Qu(), this.uid = ta("viewComponent");
  };Ap.prototype = { constructor: Ap, init: function init() {}, render: function render() {}, dispose: function dispose() {} };var Lp = Ap.prototype;Lp.updateView = Lp.updateLayout = Lp.updateVisual = function () {}, Ti(Ap), Ai(Ap, { registerWhenExtend: !0 });var Pp = function Pp() {
    var t = _i();return function (e) {
      var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.canProgressiveRender,
          o = n.large = i.large,
          s = n.canProgressiveRender = i.canProgressiveRender;return !!(r ^ o || a ^ s) && "reset";
    };
  },
      Op = _i(),
      Ep = Pp();zo.prototype = { type: "chart", init: function init() {}, render: function render() {}, highlight: function highlight(t, e, n, i) {
      Fo(t.getData(), i, "emphasis");
    }, downplay: function downplay(t, e, n, i) {
      Fo(t.getData(), i, "normal");
    }, remove: function remove() {
      this.group.removeAll();
    }, dispose: function dispose() {}, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null };var Rp = zo.prototype;Rp.updateView = Rp.updateLayout = Rp.updateVisual = function (t, e, n, i) {
    this.render(t, e, n, i);
  }, Ti(zo, ["dispose"]), Ai(zo, { registerWhenExtend: !0 }), zo.markUpdateMethod = function (t, e) {
    Op(t).updateMethod = e;
  };var Bp = { incrementalPrepareRender: { progress: function progress(t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      } }, render: { forceFirstProgress: !0, progress: function progress(t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      } } },
      zp = { createOnAllSeries: !0, performRawSeries: !0, reset: function reset(t, e) {
      var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
        "function" != typeof r || r instanceof _d || n.each(function (e) {
          n.setItemVisual(e, "color", r(t.getDataParams(e)));
        });var a = function a(t, e) {
          var n = t.getItemModel(e),
              r = n.get(i, !0);null != r && t.setItemVisual(e, "color", r);
        };return { dataEach: n.hasItemOption ? a : null };
      }
    } },
      Np = { toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } },
      Fp = function Fp(t, e) {
    function n(t, e) {
      if ("string" != typeof t) return t;var n = t;return d(e, function (t, e) {
        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), n;
    }function i(t) {
      var e = o.get(t);if (null == e) {
        for (var n = t.split("."), i = Np.aria, r = 0; r < n.length; ++r) {
          i = i[n[r]];
        }return i;
      }return e;
    }function r() {
      var t = e.getModel("title").option;return t && t.length && (t = t[0]), t && t.text;
    }function a(t) {
      return Np.series.typeNames[t] || "自定义图";
    }var o = e.getModel("aria");if (o.get("show")) {
      if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));var s = 0;e.eachSeries(function () {
        ++s;
      }, this);var l,
          h = o.get("data.maxCount") || 10,
          u = o.get("series.maxCount") || 10,
          c = Math.min(s, u);if (!(1 > s)) {
        var f = r();l = f ? n(i("general.withTitle"), { title: f }) : i("general.withoutTitle");var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";l += n(i(g), { seriesCount: s }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";r = i(o ? l + "withName" : l + "withoutName"), r = n(r, { seriesId: t.seriesIndex, seriesName: t.get("name"), seriesType: a(t.subType) });var u = t.getData();window.data = u, r += u.count() > h ? n(i("data.partialData"), { displayCnt: h }) : i("data.allData");for (var f = [], d = 0; d < u.count(); d++) {
              if (h > d) {
                var g = u.getName(d),
                    v = Mo(u, d);f.push(n(i(g ? "data.withName" : "data.withoutName"), { name: g, value: v }));
              }
            }r += f.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);
          }
        }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      Vp = Math.PI,
      Wp = function Wp(t, e) {
    e = e || {}, s(e, { text: "loading", color: "#c23531", textColor: "#000", maskColor: "rgba(255, 255, 255, 0.8)", zlevel: 0 });var n = new gd({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 }),
        i = new yd({ shape: { startAngle: -Vp / 2, endAngle: -Vp / 2 + .1, r: 10 }, style: { stroke: e.color, lineCap: "round", lineWidth: 5 }, zlevel: e.zlevel, z: 10001 }),
        r = new gd({ style: { fill: "none", text: e.text, textPosition: "right", textDistance: 10, textFill: e.textColor }, zlevel: e.zlevel, z: 10001 });i.animateShape(!0).when(1e3, { endAngle: 3 * Vp / 2 }).start("circularInOut"), i.animateShape(!0).when(1e3, { startAngle: 3 * Vp / 2 }).delay(300).start("circularInOut");var a = new Qu();return a.add(i), a.add(r), a.add(n), a.resize = function () {
      var e = t.getWidth() / 2,
          a = t.getHeight() / 2;i.setShape({ cx: e, cy: a });var o = i.shape.r;r.setShape({ x: e - o, y: a - o, width: 2 * o, height: 2 * o }), n.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() });
    }, a.resize(), a;
  },
      Hp = Go.prototype;Hp.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r = !e && n.progressiveEnabled && (!i || i.canProgressiveRender) && t.__idxInPipeline > n.bockIndex;return { step: r ? n.step : null };
    }
  }, Hp.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, Hp.updateStreamModes = function (t, e) {
    var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold");t.pipelineContext = n.context = { canProgressiveRender: a, large: o };
  }, Hp.restorePipelines = function (t) {
    var e = this,
        n = e._pipelineMap = z();t.eachSeries(function (t) {
      var i = t.getProgressive(),
          r = t.uid;n.set(r, { id: r, head: null, tail: null, threshold: t.getProgressiveThreshold(), progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()), bockIndex: -1, step: i || 700, count: 0 }), es(e, t, t.dataTask);
    });
  }, Hp.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;d([this._dataProcessorHandlers, this._visualHandlers], function (i) {
      d(i, function (i) {
        var r = t.get(i.uid) || t.set(i.uid, []);i.reset && Xo(this, i, r, e, n), i.overallReset && Uo(this, i, r, e, n);
      }, this);
    }, this);
  }, Hp.prepareView = function (t, e, n, i) {
    var r = t.renderTask,
        a = r.context;a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, es(this, e, r);
  }, Hp.performDataProcessorTasks = function (t, e) {
    qo(this, this._dataProcessorHandlers, t, e, { block: !0 });
  }, Hp.performVisualTasks = function (t, e, n) {
    qo(this, this._visualHandlers, t, e, n);
  }, Hp.performSeriesTasks = function (t) {
    var e;t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, Hp.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;do {
        if (e.__block) {
          t.bockIndex = e.__idxInPipeline;break;
        }e = e.getUpstream();
      } while (e);
    });
  };var Gp = Hp.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  };Go.wrapStageHandler = function (t, e) {
    return x(t) && (t = { overallReset: t, seriesType: ns(t) }), t.uid = ta("stageHandler"), e && (t.visualType = e), t;
  };var qp,
      Xp = {},
      Up = {};is(Xp, ap), is(Up, $a), Xp.eachSeriesByType = Xp.eachRawSeriesByType = function (t) {
    qp = t;
  }, Xp.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (qp = t.subType);
  };var Yp = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      Zp = { color: Yp, colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Yp] },
      jp = "#eee",
      $p = function $p() {
    return { axisLine: { lineStyle: { color: jp } }, axisTick: { lineStyle: { color: jp } }, axisLabel: { textStyle: { color: jp } }, splitLine: { lineStyle: { type: "dashed", color: "#aaa" } }, splitArea: { areaStyle: { color: jp } } };
  },
      Kp = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      Qp = { color: Kp, backgroundColor: "#333", tooltip: { axisPointer: { lineStyle: { color: jp }, crossStyle: { color: jp } } }, legend: { textStyle: { color: jp } }, textStyle: { color: jp }, title: { textStyle: { color: jp } }, toolbox: { iconStyle: { normal: { borderColor: jp } } }, dataZoom: { textStyle: { color: jp } }, visualMap: { textStyle: { color: jp } }, timeline: { lineStyle: { color: jp }, itemStyle: { normal: { color: Kp[1] } }, label: { normal: { textStyle: { color: jp } } }, controlStyle: { normal: { color: jp, borderColor: jp } } }, timeAxis: $p(), logAxis: $p(), valueAxis: $p(), categoryAxis: $p(), line: { symbol: "circle" }, graph: { color: Kp }, gauge: { title: { textStyle: { color: jp } } }, candlestick: { itemStyle: { normal: { color: "#FD1050", color0: "#0CF49B", borderColor: "#FD1050", borderColor0: "#0CF49B" } } } };Qp.categoryAxis.splitLine.show = !1;var Jp = P,
      tg = d,
      eg = x,
      ng = b,
      ig = Gd.parseClassType,
      rg = "4.0.4",
      ag = { zrender: "4.0.3" },
      og = 1,
      sg = 1e3,
      lg = 5e3,
      hg = 1e3,
      ug = 2e3,
      cg = 3e3,
      fg = 4e3,
      dg = 5e3,
      pg = { PROCESSOR: { FILTER: sg, STATISTIC: lg }, VISUAL: { LAYOUT: hg, GLOBAL: ug, CHART: cg, COMPONENT: fg, BRUSH: dg } },
      gg = "__flagInMainProcess",
      vg = "__optionUpdated",
      mg = /^[a-zA-Z0-9_]+$/;as.prototype.on = rs("on"), as.prototype.off = rs("off"), as.prototype.one = rs("one"), c(as, wu);var yg = os.prototype;yg._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;if (this[vg]) {
        var e = this[vg].silent;this[gg] = !0, ls(this), _g.update.call(this), this[gg] = !1, this[vg] = !1, fs.call(this, e), ds.call(this, e);
      } else if (t.unfinished) {
        var n = og,
            i = this._model,
            r = this._api;t.unfinished = !1;do {
          var a = +new Date();t.performSeriesTasks(i), t.performDataProcessorTasks(i), us(this, i), t.performVisualTasks(i), _s(this, this._model, r, "remain"), n -= +new Date() - a;
        } while (n > 0 && t.unfinished);t.unfinished || this._zr.flush();
      }
    }
  }, yg.getDom = function () {
    return this._dom;
  }, yg.getZr = function () {
    return this._zr;
  }, yg.setOption = function (t, e, n) {
    var i;if (ng(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[gg] = !0, !this._model || e) {
      var r = new Qa(this._api),
          a = this._theme,
          o = this._model = new ap(null, null, a, r);o.scheduler = this._scheduler, o.init(null, null, a, r);
    }this._model.setOption(t, Mg), n ? (this[vg] = { silent: i }, this[gg] = !1) : (ls(this), _g.update.call(this), this._zr.flush(), this[vg] = !1, this[gg] = !1, fs.call(this, i), ds.call(this, i));
  }, yg.setTheme = function () {
    console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, yg.getModel = function () {
    return this._model;
  }, yg.getOption = function () {
    return this._model && this._model.getOption();
  }, yg.getWidth = function () {
    return this._zr.getWidth();
  }, yg.getHeight = function () {
    return this._zr.getHeight();
  }, yg.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, yg.getRenderedCanvas = function (t) {
    if (iu.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");var e = this._zr;return e.painter.getRenderedCanvas(t);
    }
  }, yg.getSvgDataUrl = function () {
    if (iu.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();return d(e, function (t) {
        t.stopAnimation(!0);
      }), t.painter.pathToDataUrl();
    }
  }, yg.getDataURL = function (t) {
    t = t || {};var e = t.excludeComponents,
        n = this._model,
        i = [],
        r = this;tg(e, function (t) {
      n.eachComponent({ mainType: t }, function (t) {
        var e = r._componentsMap[t.__viewId];e.group.ignore || (i.push(e), e.group.ignore = !0);
      });
    });var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));return tg(i, function (t) {
      t.group.ignore = !1;
    }), a;
  }, yg.getConnectedDataURL = function (t) {
    if (iu.canvasSupported) {
      var e = this.group,
          n = Math.min,
          r = Math.max,
          a = 1 / 0;if (Ag[e]) {
        var o = a,
            s = a,
            l = -a,
            h = -a,
            u = [],
            c = t && t.pixelRatio || 1;d(kg, function (a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
                f = a.getDom().getBoundingClientRect();o = n(f.left, o), s = n(f.top, s), l = r(f.right, l), h = r(f.bottom, h), u.push({ dom: c, left: f.left, top: f.top });
          }
        }), o *= c, s *= c, l *= c, h *= c;var f = l - o,
            p = h - s,
            g = pu();g.width = f, g.height = p;var v = hi(g);return tg(u, function (t) {
          var e = new Hn({ style: { x: t.left * c - o, y: t.top * c - s, image: t.dom } });v.add(e);
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
      }return this.getDataURL(t);
    }
  }, yg.convertToPixel = y(ss, "convertToPixel"), yg.convertFromPixel = y(ss, "convertFromPixel"), yg.containPixel = function (t, e) {
    var n,
        i = this._model;return t = xi(i, t), d(t, function (t, i) {
      i.indexOf("Models") >= 0 && d(t, function (t) {
        var r = t.coordinateSystem;if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];a && a.containPoint && (n |= a.containPoint(e, t));
        }
      }, this);
    }, this), !!n;
  }, yg.getVisual = function (t, e) {
    var n = this._model;t = xi(n, t, { defaultMainType: "series" });var i = t.seriesModel,
        r = i.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, yg.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, yg.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };var _g = { prepareAndUpdate: function prepareAndUpdate(t) {
      ls(this), _g.update.call(this, t);
    }, update: function update(t) {
      var e = this._model,
          n = this._api,
          i = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;if (e) {
        e.restoreData(t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), us(this, e), r.update(e, n), vs(e), a.performVisualTasks(e, t), ms(this, e, n, t);var o = e.get("backgroundColor") || "transparent";if (iu.canvasSupported) i.setBackgroundColor(o);else {
          var s = Se(o);o = Te(s, "rgb"), 0 === s[3] && (o = "transparent");
        }xs(e, n);
      }
    }, updateTransform: function updateTransform(t) {
      var e = this._model,
          n = this,
          i = this._api;if (e) {
        var r = [];e.eachComponent(function (a, o) {
          var s = n.getViewOfComponentModel(o);if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, i, t);l && l.update && r.push(s);
          } else r.push(s);
        });var a = z();e.eachSeries(function (r) {
          var o = n._chartsMap[r.__viewId];if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), vs(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0, dirtyMap: a }), _s(n, e, i, t, a), xs(e, this._api);
      }
    }, updateView: function updateView(t) {
      var e = this._model;e && (zo.markUpdateMethod(t, "updateView"), vs(e), this._scheduler.performVisualTasks(e, t, { setDirty: !0 }), ms(this, this._model, this._api, t), xs(e, this._api));
    }, updateVisual: function updateVisual(t) {
      _g.update.call(this, t);
    }, updateLayout: function updateLayout(t) {
      _g.update.call(this, t);
    } };yg.resize = function (t) {
    this._zr.resize(t);var e = this._model;if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
          i = t && t.silent;this[gg] = !0, n && ls(this), _g.update.call(this), this[gg] = !1, fs.call(this, i), ds.call(this, i);
    }
  }, yg.showLoading = function (t, e) {
    if (ng(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Dg[t]) {
      var n = Dg[t](this._api, e),
          i = this._zr;this._loadingFX = n, i.add(n);
    }
  }, yg.hideLoading = function () {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
  }, yg.makeActionFromEvent = function (t) {
    var e = o({}, t);return e.type = bg[t.type], e;
  }, yg.dispatchAction = function (t, e) {
    if (ng(e) || (e = { silent: !!e }), wg[t.type] && this._model) {
      if (this[gg]) return void this._pendingActions.push(t);cs.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && iu.browser.weChat && this._throttledZrFlush(), fs.call(this, e.silent), ds.call(this, e.silent);
    }
  }, yg.appendData = function (t) {
    var e = t.seriesIndex,
        n = this.getModel(),
        i = n.getSeriesByIndex(e);i.appendData(t), this._scheduler.unfinished = !0;
  }, yg.on = rs("on"), yg.off = rs("off"), yg.one = rs("one");var xg = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];yg._initEvents = function () {
    tg(xg, function (t) {
      this._zr.on(t, function (e) {
        var n,
            i = this.getModel(),
            r = e.target;if ("globalout" === t) n = {};else if (r && null != r.dataIndex) {
          var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);n = a && a.getDataParams(r.dataIndex, r.dataType) || {};
        } else r && r.eventData && (n = o({}, r.eventData));n && (n.event = e, n.type = t, this.trigger(t, n));
      }, this);
    }, this), tg(bg, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, yg.isDisposed = function () {
    return this._disposed;
  }, yg.clear = function () {
    this.setOption({ series: [] }, !0);
  }, yg.dispose = function () {
    if (!this._disposed) {
      this._disposed = !0, bi(this.getDom(), Og, "");var t = this._api,
          e = this._model;tg(this._componentsViews, function (n) {
        n.dispose(e, t);
      }), tg(this._chartsViews, function (n) {
        n.dispose(e, t);
      }), this._zr.dispose(), delete kg[this.id];
    }
  }, c(os, wu);var wg = {},
      bg = {},
      Sg = [],
      Mg = [],
      Ig = [],
      Tg = [],
      Cg = {},
      Dg = {},
      kg = {},
      Ag = {},
      Lg = new Date() - 0,
      Pg = new Date() - 0,
      Og = "_echarts_instance_",
      Eg = {},
      Rg = Ds;Vs(ug, zp), Os(_p), Es(lg, xp), Hs("default", Wp), Bs({ type: "highlight", event: "highlight", update: "highlight" }, N), Bs({ type: "downplay", event: "downplay", update: "downplay" }, N), Ps("light", Zp), Ps("dark", Qp);var Bg = {};Ks.prototype = { constructor: Ks, add: function add(t) {
      return this._add = t, this;
    }, update: function update(t) {
      return this._update = t, this;
    }, remove: function remove(t) {
      return this._remove = t, this;
    }, execute: function execute() {
      var t,
          e = this._old,
          n = this._new,
          i = {},
          r = {},
          a = [],
          o = [];for (Qs(e, i, a, "_oldKeyGetter", this), Qs(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];if (null != l) {
          var h = l.length;h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }for (var t = 0; t < o.length; t++) {
        var s = o[t];if (r.hasOwnProperty(s)) {
          var l = r[s];if (null == l) continue;if (l.length) for (var u = 0, h = l.length; h > u; u++) {
            this._add && this._add(l[u]);
          } else this._add && this._add(l);
        }
      }
    } };var zg = z(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      Ng = b,
      Fg = "undefined",
      Vg = (typeof window === "undefined" ? "undefined" : _typeof(window)) === Fg ? global : window,
      Wg = "e\x00\x00",
      Hg = { "float": _typeof(Vg.Float64Array) === Fg ? Array : Vg.Float64Array, "int": _typeof(Vg.Int32Array) === Fg ? Array : Vg.Int32Array, ordinal: Array, number: Array, time: Array },
      Gg = _typeof(Vg.Uint32Array) === Fg ? Array : Vg.Uint32Array,
      qg = _typeof(Vg.Uint16Array) === Fg ? Array : Vg.Uint16Array,
      Xg = ["hasItemOption", "_nameList", "_idList", "_calculationInfo", "_invertedIndicesMap", "_rawData", "_rawExtent", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      Ug = function Ug(t, e) {
    t = t || ["x", "y"];for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];w(o) && (o = { name: o });var s = o.name;o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Js(this), this._invertedIndicesMap = r, this._calculationInfo = {};
  },
      Yg = Ug.prototype;Yg.type = "list", Yg.hasItemOption = !0, Yg.getDimension = function (t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t;
  }, Yg.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, Yg.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, Yg.mapDimension = function (t, e) {
    var n = this._dimensionsSummary;if (null == e) return n.encodeFirstDimNotExtra[t];var i = n.encode[t];return e === !0 ? (i || []).slice() : i && i[e];
  }, Yg.initData = function (t, e, n) {
    var i = La.isInstance(t) || f(t);i && (t = new mo(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Mp[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
  }, Yg.getProvider = function () {
    return this._rawData;
  }, Yg.appendData = function (t) {
    var e = this._rawData,
        n = this.count();e.appendData(t);var i = e.count();e.persistent || (i += n), this._initDataFromProvider(n, i);
  }, Yg._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = this._dimensionInfos, l = this._nameList, h = this._idList, u = this._rawExtent, c = this._nameRepeatCount = {}, f = this._chunkCount, d = f - 1, p = 0; p < o.length; p++) {
        var g = o[p];u[g] || (u[g] = fl());var v = s[g];0 === v.otherDims.itemName && (n = this._nameDimIdx = p), 0 === v.otherDims.itemId && (this._idDimIdx = p);var m = Hg[v.type];a[g] || (a[g] = []);var y = a[g][d];if (y && y.length < i) {
          for (var _ = new m(Math.min(e - d * i, i)), x = 0; x < y.length; x++) {
            _[x] = y[x];
          }a[g][d] = _;
        }for (var w = f * i; e > w; w += i) {
          a[g].push(new m(Math.min(e - w, i)));
        }this._chunkCount = a[g].length;
      }for (var b = t; e > b; b++) {
        for (var S = r.getItem(b), M = Math.floor(b / i), I = b % i, w = 0; w < o.length; w++) {
          var g = o[w],
              T = a[g][M],
              C = this._dimValueGetter(S, g, b, w);T[I] = C, C < u[g][0] && (u[g][0] = C), C > u[g][1] && (u[g][1] = C);
        }if (!r.pure) {
          var D = l[b];S && !D && (null != n ? D = this._getNameFromStore(b) : null != S.name && (l[b] = D = S.name));var k = null == S ? null : S.id;null == k && null != D && (c[D] = c[D] || 0, k = D, c[D] > 0 && (k += "__ec__" + c[D]), c[D]++), null != k && (h[b] = k);
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, al(this);
    }
  }, Yg._getNameFromStore = function (t) {
    var e = this._nameDimIdx;if (null != e) {
      var n = this._chunkSize,
          i = Math.floor(t / n),
          r = t % n,
          a = this.dimensions[e],
          o = this._dimensionInfos[a].ordinalMeta;if (o) return o.categories[t];var s = this._storage[a][i];return s && s[r];
    }
  }, Yg._getIdFromStore = function (t) {
    var e = this._idDimIdx;if (null != e) {
      var n = this._chunkSize,
          i = Math.floor(t / n),
          r = t % n,
          a = this.dimensions[e],
          o = this._dimensionInfos[a].ordinalMeta;if (o) return o.categories[t];var s = this._storage[a][i];return s && s[r];
    }
  }, Yg.count = function () {
    return this._count;
  }, Yg.getIndices = function () {
    if (this._indices) {
      var t = this._indices.constructor;return new t(this._indices.buffer, 0, this._count);
    }for (var t = nl(this), e = new t(this.count()), n = 0; n < e.length; n++) {
      e[n] = n;
    }return e;
  }, Yg.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;var n = this._storage;if (!n[t]) return 0 / 0;e = this.getRawIndex(e);var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[t][i],
        o = a[r];return o;
  }, Yg.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;var n = this._storage[t];if (!n) return 0 / 0;var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[i];return a[r];
  }, Yg._getFast = function (t, e) {
    var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize,
        r = this._storage[t][n];return r[i];
  }, Yg.getValues = function (t, e) {
    var n = [];_(t) || (e = t, t = this.dimensions);for (var i = 0, r = t.length; r > i; i++) {
      n.push(this.get(t[i], e));
    }return n;
  }, Yg.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) {
      if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
    }return !0;
  }, Yg.getDataExtent = function (t) {
    t = this.getDimension(t);var e = this._storage[t],
        n = fl();if (!e) return n;var i,
        r = this.count(),
        a = !this._indices;if (a) return this._rawExtent[t].slice();if (i = this._extent[t]) return i.slice();i = n;for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var h = this._getFast(t, this.getRawIndex(l));o > h && (o = h), h > s && (s = h);
    }return i = [o, s], this._extent[t] = i, i;
  }, Yg.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, Yg.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, Yg.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, Yg.setCalculationInfo = function (t, e) {
    Ng(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, Yg.getSum = function (t) {
    var e = this._storage[t],
        n = 0;if (e) for (var i = 0, r = this.count(); r > i; i++) {
      var a = this.get(t, i);isNaN(a) || (n += a);
    }return n;
  }, Yg.rawIndexOf = function (t, e) {
    var n = t && this._invertedIndicesMap[t],
        i = n[e];return null == i || isNaN(i) ? -1 : i;
  }, Yg.indexOfName = function (t) {
    for (var e = 0, n = this.count(); n > e; e++) {
      if (this.getName(e) === t) return e;
    }return -1;
  }, Yg.indexOfRawIndex = function (t) {
    if (!this._indices) return t;if (t >= this._rawCount || 0 > t) return -1;var e = this._indices,
        n = e[t];if (null != n && n < this._count && n === t) return t;for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;if (e[a] < t) i = a + 1;else {
        if (!(e[a] > t)) return a;r = a - 1;
      }
    }return -1;
  }, Yg.indicesOfNearest = function (t, e, n) {
    var i = this._storage,
        r = i[t],
        a = [];if (!r) return a;null == n && (n = 1 / 0);for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
      var u = e - this.get(t, l),
          c = Math.abs(u);n >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l));
    }return a;
  }, Yg.getRawIndex = ol, Yg.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];e.push(this.get(i, t));
    }return e;
  }, Yg.getName = function (t) {
    var e = this.getRawIndex(t);return this._nameList[e] || this._getNameFromStore(e) || "";
  }, Yg.getId = function (t) {
    return ll(this, this.getRawIndex(t));
  }, Yg.each = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(hl(t), this.getDimension, this);for (var r = t.length, a = 0; a < this.count(); a++) {
        switch (r) {case 0:
            e.call(n, a);break;case 1:
            e.call(n, this.get(t[0], a), a);break;case 2:
            e.call(n, this.get(t[0], a), this.get(t[1], a), a);break;default:
            for (var o = 0, s = []; r > o; o++) {
              s[o] = this.get(t[o], a);
            }s[o] = a, e.apply(n, s);}
      }
    }
  }, Yg.filterSelf = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(hl(t), this.getDimension, this);for (var r = this.count(), a = nl(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
        var f,
            d = this.getRawIndex(c);if (0 === l) f = e.call(n, c);else if (1 === l) {
          var g = this._getFast(u, d);f = e.call(n, g, c);
        } else {
          for (var v = 0; l > v; v++) {
            s[v] = this._getFast(u, d);
          }s[v] = c, f = e.apply(n, s);
        }f && (o[h++] = d);
      }return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? sl : ol, this;
    }
  }, Yg.selectRange = function (t) {
    if (this._count) {
      var e = [];for (var n in t) {
        t.hasOwnProperty(n) && e.push(n);
      }var i = e.length;if (i) {
        var r = this.count(),
            a = nl(this),
            o = new a(r),
            s = 0,
            l = e[0],
            h = t[l][0],
            u = t[l][1],
            c = !1;if (!this._indices) {
          var f = 0;if (1 === i) {
            for (var d = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {
              for (var g = d[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];y >= h && u >= y && (o[s++] = f), f++;
              }
            }c = !0;
          } else if (2 === i) {
            for (var d = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {
              for (var g = d[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                    S = b[m];y >= h && u >= y && S >= x && w >= S && (o[s++] = f), f++;
              }
            }c = !0;
          }
        }if (!c) if (1 === i) for (var m = 0; r > m; m++) {
          var M = this.getRawIndex(m),
              y = this._getFast(l, M);y >= h && u >= y && (o[s++] = M);
        } else for (var m = 0; r > m; m++) {
          for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
            var T = e[p],
                y = this._getFast(n, M);(y < t[T][0] || y > t[T][1]) && (I = !1);
          }I && (o[s++] = this.getRawIndex(m));
        }return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? sl : ol, this;
      }
    }
  }, Yg.mapArray = function (t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;var r = [];return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, n), r;
  }, Yg.map = function (t, e, n, i) {
    n = n || i || this, t = p(hl(t), this.getDimension, this);var r = ul(this, t);r._indices = this._indices, r.getRawIndex = r._indices ? sl : ol;for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, f = 0; h > f; f++) {
      for (var d = 0; l > d; d++) {
        u[d] = this.get(t[d], f);
      }u[l] = f;var g = e && e.apply(n, u);if (null != g) {
        "object" != (typeof g === "undefined" ? "undefined" : _typeof(g)) && (o[0] = g, g = o);for (var v = this.getRawIndex(f), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              S = a[x];S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }return r;
  }, Yg.downSample = function (t, e, n, i) {
    for (var r = ul(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], f = new (nl(this))(h), d = 0, p = 0; h > p; p += s) {
      s > h - p && (s = h - p, o.length = s);for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / u),
            y = v % u;o[g] = l[m][y];
      }var _ = n(o),
          x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1)),
          w = Math.floor(x / u),
          b = x % u;l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), f[d++] = x;
    }return r._count = d, r._indices = f, r.getRawIndex = sl, r;
  }, Yg.getItemModel = function (t) {
    var e = this.hostModel;return new Kr(this.getRawDataItem(t), e, e && e.ecModel);
  }, Yg.diff = function (t) {
    var e = this;return new Ks(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return ll(t, e);
    }, function (t) {
      return ll(e, t);
    });
  }, Yg.getVisual = function (t) {
    var e = this._visual;return e && e[t];
  }, Yg.setVisual = function (t, e) {
    if (Ng(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    } else this._visual = this._visual || {}, this._visual[t] = e;
  }, Yg.setLayout = function (t, e) {
    if (Ng(t)) for (var n in t) {
      t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    } else this._layout[t] = e;
  }, Yg.getLayout = function (t) {
    return this._layout[t];
  }, Yg.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, Yg.setItemLayout = function (t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
  }, Yg.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, Yg.getItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t],
        r = i && i[e];return null != r || n ? r : this.getVisual(e);
  }, Yg.setItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;if (this._itemVisuals[t] = i, Ng(e)) for (var a in e) {
      e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
    } else i[e] = n, r[e] = !0;
  }, Yg.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };var Zg = function Zg(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };Yg.setItemGraphicEl = function (t, e) {
    var n = this.hostModel;e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(Zg, e)), this._graphicEls[t] = e;
  }, Yg.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, Yg.eachItemGraphicEl = function (t, e) {
    d(this._graphicEls, function (n, i) {
      n && t && t.call(e, n, i);
    });
  }, Yg.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);t = new Ug(e, this.hostModel);
    }if (t._storage = this._storage, rl(t, this), this._indices) {
      var n = this._indices.constructor;t._indices = new n(this._indices);
    } else t._indices = null;return t.getRawIndex = t._indices ? sl : ol, t._extent = i(this._extent), t._approximateExtent = i(this._approximateExtent), t;
  }, Yg.wrapMethod = function (t, e) {
    var n = this[t];"function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = n.apply(this, arguments);return e.apply(this, [t].concat(A(arguments)));
    });
  }, Yg.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Yg.CHANGABLE_METHODS = ["filterSelf", "selectRange"];var jg = function jg(t, e) {
    return e = e || {}, dl(e.coordDimensions || [], t, { dimsDef: e.dimensionsDefine || t.dimensionsDefine, encodeDef: e.encodeDefine || t.encodeDefine, dimCount: e.dimensionsCount, generateCoord: e.generateCoord, generateCoordCount: e.generateCoordCount });
  };kp.extend({ type: "series.line", dependencies: ["grid", "polar"], getInitialData: function getInitialData() {
      return yl(this.getSource(), this);
    }, defaultOption: { zlevel: 0, z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, hoverAnimation: !0, clipOverflow: !0, label: { position: "top" }, lineStyle: { width: 2, type: "solid" }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 4, symbolRotate: null, showSymbol: !0, showAllSymbol: !1, connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0 } });var $g = yr({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
    } }),
      Kg = yr({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
    } }),
      Qg = yr({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          h = Math.asin(s / o),
          u = Math.cos(h) * o,
          c = Math.sin(h),
          f = Math.cos(h),
          d = .6 * o,
          p = .7 * o;t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * d, l + s + f * d, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * d, l + s + f * d, n - u, l + s), t.closePath();
    } }),
      Jg = yr({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function buildPath(t, e) {
      var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
    } }),
      tv = { line: vd, rect: gd, roundRect: gd, square: gd, circle: ld, diamond: Kg, pin: Qg, arrow: Jg, triangle: $g },
      ev = { line: function line(t, e, n, i, r) {
      r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
    }, rect: function rect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i;
    }, roundRect: function roundRect(t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
    }, square: function square(t, e, n, i, r) {
      var a = Math.min(n, i);r.x = t, r.y = e, r.width = a, r.height = a;
    }, circle: function circle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
    }, diamond: function diamond(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    }, pin: function pin(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, arrow: function arrow(t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    }, triangle: function triangle(t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    } },
      nv = {};d(tv, function (t, e) {
    nv[e] = new t();
  });var iv = yr({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, beforeBrush: function beforeBrush() {
      var t = this.style,
          e = this.shape;"pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");
    }, buildPath: function buildPath(t, e, n) {
      var i = e.symbolType,
          r = nv[i];"none" !== e.symbolType && (r || (i = "rect", r = nv[i]), ev[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n));
    } }),
      rv = Tl.prototype;rv._createSymbol = function (t, e, n, i) {
    this.removeAll();var r = e.getItemVisual(n, "color"),
        a = bl(t, -1, -1, 2, 2, r);a.attr({ z2: 100, culling: !0, scale: Il(i) }), a.drift = Cl, this._symbolType = t, this.add(a);
  }, rv.stopSymbolAnimation = function (t) {
    this.childAt(0).stopAnimation(t);
  }, rv.getSymbolPath = function () {
    return this.childAt(0);
  }, rv.getScale = function () {
    return this.childAt(0).scale;
  }, rv.highlight = function () {
    this.childAt(0).trigger("emphasis");
  }, rv.downplay = function () {
    this.childAt(0).trigger("normal");
  }, rv.setZ = function (t, e) {
    var n = this.childAt(0);n.zlevel = t, n.z = e;
  }, rv.setDraggable = function (t) {
    var e = this.childAt(0);e.draggable = t, e.cursor = t ? "move" : "pointer";
  }, rv.updateData = function (t, e, n) {
    this.silent = !1;var i = t.getItemVisual(e, "symbol") || "circle",
        r = t.hostModel,
        a = Ml(t, e),
        o = i !== this._symbolType;if (o) this._createSymbol(i, t, e, a);else {
      var s = this.childAt(0);s.silent = !1, Zr(s, { scale: Il(a) }, r, e);
    }if (this._updateCommon(t, e, a, n), o) {
      var s = this.childAt(0),
          l = n && n.fadeIn,
          h = { scale: s.scale.slice() };l && (h.style = { opacity: s.style.opacity }), s.scale = [0, 0], l && (s.style.opacity = 0), jr(s, h, r, e);
    }this._seriesModel = r;
  };var av = ["itemStyle"],
      ov = ["emphasis", "itemStyle"],
      sv = ["label"],
      lv = ["emphasis", "label"];rv._updateCommon = function (t, e, n, i) {
    function r(e) {
      return x ? t.getName(e) : Sl(t, e);
    }var a = this.childAt(0),
        s = t.hostModel,
        l = t.getItemVisual(e, "color");"image" !== a.type && a.useStyle({ strokeNoScale: !0 });var h = i && i.itemStyle,
        u = i && i.hoverItemStyle,
        c = i && i.symbolRotate,
        f = i && i.symbolOffset,
        d = i && i.labelModel,
        p = i && i.hoverLabelModel,
        g = i && i.hoverAnimation,
        v = i && i.cursorStyle;if (!i || t.hasItemOption) {
      var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);h = m.getModel(av).getItemStyle(["color"]), u = m.getModel(ov).getItemStyle(), c = m.getShallow("symbolRotate"), f = m.getShallow("symbolOffset"), d = m.getModel(sv), p = m.getModel(lv), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor");
    } else u = o({}, u);var y = a.style;a.attr("rotation", (c || 0) * Math.PI / 180 || 0), f && a.attr("position", [aa(f[0], n[0]), aa(f[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(h);var _ = t.getItemVisual(e, "opacity");null != _ && (y.opacity = _);var x = i && i.useNameLabel;Nr(y, u, d, p, { labelFetcher: s, labelDataIndex: e, defaultText: r, isRectText: !0, autoColor: l }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = u, zr(a);var w = Il(n);if (g && s.isAnimationEnabled()) {
      var b = function b() {
        if (!this.incremental) {
          var t = w[1] / w[0];this.animateTo({ scale: [Math.max(1.1 * w[0], w[0] + 3), Math.max(1.1 * w[1], w[1] + 3 * t)] }, 400, "elasticOut");
        }
      },
          S = function S() {
        this.incremental || this.animateTo({ scale: w }, 400, "elasticOut");
      };a.on("mouseover", b).on("mouseout", S).on("emphasis", b).on("normal", S);
    }
  }, rv.fadeOut = function (t, e) {
    var n = this.childAt(0);this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), Zr(n, { style: { opacity: 0 }, scale: [0, 0] }, this._seriesModel, this.dataIndex, t);
  }, u(Tl, Qu);var hv = Dl.prototype;hv.updateData = function (t, e) {
    e = Al(e);var n = this.group,
        i = t.hostModel,
        r = this._data,
        a = this._symbolCtor,
        o = Ll(t);r || n.removeAll(), t.diff(r).add(function (i) {
      var r = t.getItemLayout(i);if (kl(t, r, i, e)) {
        var s = new a(t, i, o);s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
      }
    }).update(function (s, l) {
      var h = r.getItemGraphicEl(l),
          u = t.getItemLayout(s);return kl(t, u, s, e) ? (h ? (h.updateData(t, s, o), Zr(h, { position: u }, i)) : (h = new a(t, s), h.attr("position", u)), n.add(h), void t.setItemGraphicEl(s, h)) : void n.remove(h);
    }).remove(function (t) {
      var e = r.getItemGraphicEl(t);e && e.fadeOut(function () {
        n.remove(e);
      });
    }).execute(), this._data = t;
  }, hv.isPersistent = function () {
    return !0;
  }, hv.updateLayout = function () {
    var t = this._data;t && t.eachItemGraphicEl(function (e, n) {
      var i = t.getItemLayout(n);e.attr("position", i);
    });
  }, hv.incrementalPrepareUpdate = function (t) {
    this._seriesScope = Ll(t), this._data = null, this.group.removeAll();
  }, hv.incrementalUpdate = function (t, e, n) {
    function i(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = !0);
    }n = Al(n);for (var r = t.start; r < t.end; r++) {
      var a = e.getItemLayout(r);if (kl(e, a, r, n)) {
        var o = new this._symbolCtor(e, r, this._seriesScope);o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
      }
    }
  }, hv.remove = function (t) {
    var e = this.group,
        n = this._data;n && t ? n.eachItemGraphicEl(function (t) {
      t.fadeOut(function () {
        e.remove(t);
      });
    }) : e.removeAll();
  };var uv = function uv(t, e, n, i, r, a, o, s) {
    for (var l = Rl(t, e), h = [], u = [], c = [], f = [], d = [], p = [], g = [], v = Pl(r, e, o), m = Pl(a, t, s), y = 0; y < l.length; y++) {
      var _ = l[y],
          x = !0;switch (_.cmd) {case "=":
          var w = t.getItemLayout(_.idx),
              b = e.getItemLayout(_.idx1);(isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[_.idx]), f.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));break;case "+":
          var S = _.idx;h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(El(v, r, e, S)), f.push(i[S]), g.push(e.getRawIndex(S));break;case "-":
          var S = _.idx,
              M = t.getRawIndex(S);M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), f.push(El(m, a, t, S)), g.push(M)) : x = !1;}x && (d.push(_), p.push(p.length));
    }p.sort(function (t, e) {
      return g[t] - g[e];
    });for (var I = [], T = [], C = [], D = [], k = [], y = 0; y < p.length; y++) {
      var S = p[y];I[y] = h[S], T[y] = u[S], C[y] = c[S], D[y] = f[S], k[y] = d[S];
    }return { current: I, next: T, stackedOnCurrent: C, stackedOnNext: D, status: k };
  },
      cv = Q,
      fv = J,
      dv = G,
      pv = V,
      gv = [],
      vv = [],
      mv = [],
      yv = hr.extend({ type: "ec-polyline", shape: { points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, style: { fill: null, stroke: "#000" }, brush: ud(hr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.points,
          i = 0,
          r = n.length,
          a = Wl(n, e.smoothConstraint);if (e.connectNulls) {
        for (; r > 0 && Bl(n[r - 1]); r--) {}for (; r > i && Bl(n[i]); i++) {}
      }for (; r > i;) {
        i += zl(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
      }
    } }),
      _v = hr.extend({ type: "ec-polygon", shape: { points: [], stackedOnPoints: [], smooth: 0, stackedOnSmooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1 }, brush: ud(hr.prototype.brush), buildPath: function buildPath(t, e) {
      var n = e.points,
          i = e.stackedOnPoints,
          r = 0,
          a = n.length,
          o = e.smoothMonotone,
          s = Wl(n, e.smoothConstraint),
          l = Wl(i, e.smoothConstraint);if (e.connectNulls) {
        for (; a > 0 && Bl(n[a - 1]); a--) {}for (; a > r && Bl(n[r]); r++) {}
      }for (; a > r;) {
        var h = zl(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);zl(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath();
      }
    } });zo.extend({ type: "line", init: function init() {
      var t = new Qu(),
          e = new Dl();this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
    }, render: function render(t, e, n) {
      var i = t.coordinateSystem,
          r = this.group,
          a = t.getData(),
          o = t.getModel("lineStyle"),
          l = t.getModel("areaStyle"),
          h = a.mapArray(a.getItemLayout),
          u = "polar" === i.type,
          c = this._coordSys,
          f = this._symbolDraw,
          d = this._polyline,
          p = this._polygon,
          g = this._lineGroup,
          v = t.get("animation"),
          m = !l.isEmpty(),
          y = l.get("origin"),
          _ = Pl(i, a, y),
          x = Xl(i, a, _),
          w = t.get("showSymbol"),
          b = w && !u && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(a, i),
          S = this._data;S && S.eachItemGraphicEl(function (t, e) {
        t.__temp && (r.remove(t), S.setItemGraphicEl(e, null));
      }), w || f.remove(), r.add(g);var M = !u && t.get("step");if (d && c.type === i.type && M === this._step) {
        m && !p ? p = this._newPolygon(h, x, i, v) : p && !m && (g.remove(p), p = this._polygon = null);var I = Zl(i, !1, t);g.setClipPath(I), w && f.updateData(a, { isIgnore: b, clipShape: I }), a.eachItemGraphicEl(function (t) {
          t.stopAnimation(!0);
        }), Hl(this._stackedOnPoints, x) && Hl(this._points, h) || (v ? this._updateAnimation(a, x, i, n, M, y) : (M && (h = jl(h, i, M), x = jl(x, i, M)), d.setShape({ points: h }), p && p.setShape({ points: h, stackedOnPoints: x })));
      } else w && f.updateData(a, { isIgnore: b, clipShape: Zl(i, !1, t) }), M && (h = jl(h, i, M), x = jl(x, i, M)), d = this._newPolyline(h, i, v), m && (p = this._newPolygon(h, x, i, v)), g.setClipPath(Zl(i, !0, t));var T = $l(a, i) || a.getVisual("color");d.useStyle(s(o.getLineStyle(), { fill: "none", stroke: T, lineJoin: "bevel" }));var C = t.get("smooth");if (C = Gl(t.get("smooth")), d.setShape({ smooth: C, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") }), p) {
        var D = a.getCalculationInfo("stackedOnSeries"),
            k = 0;p.useStyle(s(l.getAreaStyle(), { fill: T, opacity: .7, lineJoin: "bevel" })), D && (k = Gl(D.get("smooth"))), p.setShape({ smooth: C, stackedOnSmooth: k, smoothMonotone: t.get("smoothMonotone"), connectNulls: t.get("connectNulls") });
      }this._data = a, this._coordSys = i, this._stackedOnPoints = x, this._points = h, this._step = M, this._valueOrigin = y;
    }, dispose: function dispose() {}, highlight: function highlight(t, e, n, i) {
      var r = t.getData(),
          a = yi(r, i);if (!(a instanceof Array) && null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);if (!o) {
          var s = r.getItemLayout(a);if (!s) return;o = new Tl(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
        }o.highlight();
      } else zo.prototype.highlight.call(this, t, e, n, i);
    }, downplay: function downplay(t, e, n, i) {
      var r = t.getData(),
          a = yi(r, i);if (null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
      } else zo.prototype.downplay.call(this, t, e, n, i);
    }, _newPolyline: function _newPolyline(t) {
      var e = this._polyline;return e && this._lineGroup.remove(e), e = new yv({ shape: { points: t }, silent: !0, z2: 10 }), this._lineGroup.add(e), this._polyline = e, e;
    }, _newPolygon: function _newPolygon(t, e) {
      var n = this._polygon;return n && this._lineGroup.remove(n), n = new _v({ shape: { points: t, stackedOnPoints: e }, silent: !0 }), this._lineGroup.add(n), this._polygon = n, n;
    }, _getSymbolIgnoreFunc: function _getSymbolIgnoreFunc(t, e) {
      var n = e.getAxesByScale("ordinal")[0];return n && n.isLabelIgnored ? m(n.isLabelIgnored, n) : void 0;
    }, _updateAnimation: function _updateAnimation(t, e, n, i, r, a) {
      var o = this._polyline,
          s = this._polygon,
          l = t.hostModel,
          h = uv(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
          u = h.current,
          c = h.stackedOnCurrent,
          f = h.next,
          d = h.stackedOnNext;r && (u = jl(h.current, n, r), c = jl(h.stackedOnCurrent, n, r), f = jl(h.next, n, r), d = jl(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, Zr(o, { shape: { points: f } }, l), s && (s.setShape({ points: u, stackedOnPoints: c }), Zr(s, { shape: { points: f, stackedOnPoints: d } }, l));for (var p = [], g = h.status, v = 0; v < g.length; v++) {
        var m = g[v].cmd;if ("=" === m) {
          var y = t.getItemGraphicEl(g[v].idx1);y && p.push({ el: y, ptIdx: v });
        }
      }o.animators && o.animators.length && o.animators[0].during(function () {
        for (var t = 0; t < p.length; t++) {
          var e = p[t].el;e.attr("position", o.shape.__points[p[t].ptIdx]);
        }
      });
    }, remove: function remove() {
      var t = this.group,
          e = this._data;this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (n, i) {
        n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
    } });var xv = function xv(t, e, n) {
    return { seriesType: t, performRawSeries: !0, reset: function reset(t, i) {
        function r(e, n) {
          if ("function" == typeof s) {
            var i = t.getRawValue(n),
                r = t.getDataParams(n);e.setItemVisual(n, "symbolSize", s(i, r));
          }if (e.hasItemOption) {
            var a = e.getItemModel(n),
                o = a.getShallow("symbol", !0),
                l = a.getShallow("symbolSize", !0);null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l);
          }
        }var a = t.getData(),
            o = t.get("symbol") || e,
            s = t.get("symbolSize");if (a.setVisual({ legendSymbol: n || o, symbol: o, symbolSize: s }), !i.isSeriesFiltered(t)) {
          var l = "function" == typeof s;return { dataEach: a.hasItemOption || l ? r : null };
        }
      } };
  },
      wv = function wv(t) {
    return { seriesType: t, plan: Pp(), reset: function reset(t) {
        function e(t, e) {
          for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
            var f;if (1 === s) {
              var d = e.get(o[0], l, !0);f = !isNaN(d) && i.dataToPoint(d, null, c);
            } else {
              var d = u[0] = e.get(o[0], l, !0),
                  p = u[1] = e.get(o[1], l, !0);f = !isNaN(d) && !isNaN(p) && i.dataToPoint(u, null, c);
            }a ? (r[h++] = f ? f[0] : 0 / 0, r[h++] = f ? f[1] : 0 / 0) : e.setItemLayout(l, f && f.slice() || [0 / 0, 0 / 0]);
          }a && e.setLayout("symbolPoints", r);
        }var n = t.getData(),
            i = t.coordinateSystem,
            r = t.pipelineContext,
            a = r.large;if (i) {
          var o = p(i.dimensions, function (t) {
            return n.mapDimension(t);
          }).slice(0, 2),
              s = o.length;return ml(n, o[0], o[1]) && (o[0] = n.getCalculationInfo("stackResultDimension")), ml(n, o[1], o[0]) && (o[1] = n.getCalculationInfo("stackResultDimension")), s && { progress: e };
        }
      } };
  },
      bv = { average: function average(t) {
      for (var e = 0, n = 0, i = 0; i < t.length; i++) {
        isNaN(t[i]) || (e += t[i], n++);
      }return 0 === n ? 0 / 0 : e / n;
    }, sum: function sum(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        e += t[n] || 0;
      }return e;
    }, max: function max(t) {
      for (var e = -1 / 0, n = 0; n < t.length; n++) {
        t[n] > e && (e = t[n]);
      }return e;
    }, min: function min(t) {
      for (var e = 1 / 0, n = 0; n < t.length; n++) {
        t[n] < e && (e = t[n]);
      }return e;
    }, nearest: function nearest(t) {
      return t[0];
    } },
      Sv = function Sv(t) {
    return Math.round(t.length / 2);
  },
      Mv = function Mv(t) {
    return { seriesType: t, reset: function reset(t) {
        var e = t.getData(),
            n = t.get("sampling"),
            i = t.coordinateSystem;if ("cartesian2d" === i.type && n) {
          var r = i.getBaseAxis(),
              a = i.getOtherAxis(r),
              o = r.getExtent(),
              s = o[1] - o[0],
              l = Math.round(e.count() / s);if (l > 1) {
            var h;"string" == typeof n ? h = bv[n] : "function" == typeof n && (h = n), h && t.setData(e.downSample(a.dim, 1 / l, h, Sv));
          }
        }
      } };
  };Kl.prototype.parse = function (t) {
    return t;
  }, Kl.prototype.getSetting = function (t) {
    return this._setting[t];
  }, Kl.prototype.contain = function (t) {
    var e = this._extent;return t >= e[0] && t <= e[1];
  }, Kl.prototype.normalize = function (t) {
    var e = this._extent;return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, Kl.prototype.scale = function (t) {
    var e = this._extent;return t * (e[1] - e[0]) + e[0];
  }, Kl.prototype.unionExtent = function (t) {
    var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, Kl.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, Kl.prototype.getExtent = function () {
    return this._extent.slice();
  }, Kl.prototype.setExtent = function (t, e) {
    var n = this._extent;isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
  }, Kl.prototype.getTicksLabels = function () {
    for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++) {
      t.push(this.getLabel(e[n]));
    }return t;
  }, Kl.prototype.isBlank = function () {
    return this._isBlank;
  }, Kl.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, Ti(Kl), Ai(Kl, { registerWhenExtend: !0 }), Ql.createByAxisModel = function (t) {
    var e = t.option,
        n = e.data,
        i = n && p(n, th);return new Ql({ categories: i, needCollect: !i, deduplication: e.dedplication !== !1 });
  };var Iv = Ql.prototype;Iv.getOrdinal = function (t) {
    return Jl(this).get(t);
  }, Iv.parseAndCollect = function (t) {
    var e,
        n = this._needCollect;if ("string" != typeof t && !n) return t;if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;var i = Jl(this);return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e;
  };var Tv = Kl.prototype,
      Cv = Kl.extend({ type: "ordinal", init: function init(t, e) {
      (!t || _(t)) && (t = new Ql({ categories: t })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    }, parse: function parse(t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    }, contain: function contain(t) {
      return t = this.parse(t), Tv.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    }, normalize: function normalize(t) {
      return Tv.normalize.call(this, this.parse(t));
    }, scale: function scale(t) {
      return Math.round(Tv.scale.call(this, t));
    }, getTicks: function getTicks() {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1];) {
        t.push(n), n++;
      }return t;
    }, getLabel: function getLabel(t) {
      return this._ordinalMeta.categories[t];
    }, count: function count() {
      return this._extent[1] - this._extent[0] + 1;
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, niceTicks: N, niceExtent: N });Cv.create = function () {
    return new Cv();
  };var Dv = oa,
      kv = oa,
      Av = Kl.extend({ type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function setExtent(t, e) {
      var n = this._extent;isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
    }, unionExtent: function unionExtent(t) {
      var e = this._extent;t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Av.prototype.setExtent.call(this, e[0], e[1]);
    }, getInterval: function getInterval() {
      return this._interval;
    }, setInterval: function setInterval(t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = nh(t);
    }, getTicks: function getTicks() {
      return ah(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
    }, getTicksLabels: function getTicksLabels() {
      for (var t = [], e = this.getTicks(), n = 0; n < e.length; n++) {
        t.push(this.getLabel(e[n]));
      }return t;
    }, getLabel: function getLabel(t, e) {
      if (null == t) return "";var n = e && e.precision;return null == n ? n = sa(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = kv(t, n, !0), va(t);
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 5;var i = this._extent,
          r = i[1] - i[0];if (isFinite(r)) {
        0 > r && (r = -r, i.reverse());var a = eh(i, t, e, n);this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1]) if (0 !== e[0]) {
        var n = e[0];t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
      } else e[1] = 1;var i = e[1] - e[0];isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var r = this._interval;t.fixMin || (e[0] = kv(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = kv(Math.ceil(e[1] / r) * r));
    } });Av.create = function () {
    return new Av();
  };var Lv = "__ec_stack_",
      Pv = Av.prototype,
      Ov = Math.ceil,
      Ev = Math.floor,
      Rv = 1e3,
      Bv = 60 * Rv,
      zv = 60 * Bv,
      Nv = 24 * zv,
      Fv = function Fv(t, e, n, i) {
    for (; i > n;) {
      var r = n + i >>> 1;t[r][1] < e ? n = r + 1 : i = r;
    }return n;
  },
      Vv = Av.extend({ type: "time", getLabel: function getLabel(t) {
      var e = this._stepLvl,
          n = new Date(t);return wa(e[0], n, this.getSetting("useUTC"));
    }, niceExtent: function niceExtent(t) {
      var e = this._extent;if (e[0] === e[1] && (e[0] -= Nv, e[1] += Nv), e[1] === -1 / 0 && 1 / 0 === e[0]) {
        var n = new Date();e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Nv;
      }this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);var i = this._interval;t.fixMin || (e[0] = oa(Ev(e[0] / i) * i)), t.fixMax || (e[1] = oa(Ov(e[1] / i) * i));
    }, niceTicks: function niceTicks(t, e, n) {
      t = t || 10;var i = this._extent,
          r = i[1] - i[0],
          a = r / t;null != e && e > a && (a = e), null != n && a > n && (a = n);var o = Wv.length,
          s = Fv(Wv, a, 0, o),
          l = Wv[Math.min(s, o - 1)],
          h = l[1];if ("year" === l[0]) {
        var u = r / h,
            c = ga(u / t, !0);h *= c;
      }var f = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          d = [Math.round(Ov((i[0] - f) / h) * h + f), Math.round(Ev((i[1] - f) / h) * h + f)];rh(d, i), this._stepLvl = l, this._interval = h, this._niceExtent = d;
    }, parse: function parse(t) {
      return +fa(t);
    } });d(["contain", "normalize"], function (t) {
    Vv.prototype[t] = function (e) {
      return Pv[t].call(this, this.parse(e));
    };
  });var Wv = [["hh:mm:ss", Rv], ["hh:mm:ss", 5 * Rv], ["hh:mm:ss", 10 * Rv], ["hh:mm:ss", 15 * Rv], ["hh:mm:ss", 30 * Rv], ["hh:mm\nMM-dd", Bv], ["hh:mm\nMM-dd", 5 * Bv], ["hh:mm\nMM-dd", 10 * Bv], ["hh:mm\nMM-dd", 15 * Bv], ["hh:mm\nMM-dd", 30 * Bv], ["hh:mm\nMM-dd", zv], ["hh:mm\nMM-dd", 2 * zv], ["hh:mm\nMM-dd", 6 * zv], ["hh:mm\nMM-dd", 12 * zv], ["MM-dd\nyyyy", Nv], ["MM-dd\nyyyy", 2 * Nv], ["MM-dd\nyyyy", 3 * Nv], ["MM-dd\nyyyy", 4 * Nv], ["MM-dd\nyyyy", 5 * Nv], ["MM-dd\nyyyy", 6 * Nv], ["week", 7 * Nv], ["MM-dd\nyyyy", 10 * Nv], ["week", 14 * Nv], ["week", 21 * Nv], ["month", 31 * Nv], ["week", 42 * Nv], ["month", 62 * Nv], ["week", 42 * Nv], ["quarter", 380 * Nv / 4], ["month", 31 * Nv * 4], ["month", 31 * Nv * 5], ["half-year", 380 * Nv / 2], ["month", 31 * Nv * 8], ["month", 31 * Nv * 10], ["year", 380 * Nv]];Vv.create = function (t) {
    return new Vv({ useUTC: t.ecModel.get("useUTC") });
  };var Hv = Kl.prototype,
      Gv = Av.prototype,
      qv = sa,
      Xv = oa,
      Uv = Math.floor,
      Yv = Math.ceil,
      Zv = Math.pow,
      jv = Math.log,
      $v = Kl.extend({ type: "log", base: 10, $constructor: function $constructor() {
      Kl.apply(this, arguments), this._originalScale = new Av();
    }, getTicks: function getTicks() {
      var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();return p(Gv.getTicks.call(this), function (i) {
        var r = oa(Zv(this.base, i));return r = i === e[0] && t.__fixMin ? uh(r, n[0]) : r, r = i === e[1] && t.__fixMax ? uh(r, n[1]) : r;
      }, this);
    }, getLabel: Gv.getLabel, scale: function scale(t) {
      return t = Hv.scale.call(this, t), Zv(this.base, t);
    }, setExtent: function setExtent(t, e) {
      var n = this.base;t = jv(t) / jv(n), e = jv(e) / jv(n), Gv.setExtent.call(this, t, e);
    }, getExtent: function getExtent() {
      var t = this.base,
          e = Hv.getExtent.call(this);e[0] = Zv(t, e[0]), e[1] = Zv(t, e[1]);var n = this._originalScale,
          i = n.getExtent();return n.__fixMin && (e[0] = uh(e[0], i[0])), n.__fixMax && (e[1] = uh(e[1], i[1])), e;
    }, unionExtent: function unionExtent(t) {
      this._originalScale.unionExtent(t);var e = this.base;t[0] = jv(t[0]) / jv(e), t[1] = jv(t[1]) / jv(e), Hv.unionExtent.call(this, t);
    }, unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }, niceTicks: function niceTicks(t) {
      t = t || 10;var e = this._extent,
          n = e[1] - e[0];if (!(1 / 0 === n || 0 >= n)) {
        var i = da(n),
            r = t / n * i;for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) {
          i *= 10;
        }var a = [oa(Yv(e[0] / i) * i), oa(Uv(e[1] / i) * i)];this._interval = i, this._niceExtent = a;
      }
    }, niceExtent: function niceExtent(t) {
      Gv.niceExtent.call(this, t);var e = this._originalScale;e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    } });d(["contain", "normalize"], function (t) {
    $v.prototype[t] = function (e) {
      return e = jv(e) / jv(this.base), Hv[t].call(this, e);
    };
  }), $v.create = function () {
    return new $v();
  };var Kv = function Kv(t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };Kv.prototype = { constructor: Kv, type: "cartesian", getAxis: function getAxis(t) {
      return this._axes[t];
    }, getAxes: function getAxes() {
      return p(this._dimList, _h, this);
    }, getAxesByScale: function getAxesByScale(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    }, addAxis: function addAxis(t) {
      var e = t.dim;this._axes[e] = t, this._dimList.push(e);
    }, dataToCoord: function dataToCoord(t) {
      return this._dataCoordConvert(t, "dataToCoord");
    }, coordToData: function coordToData(t) {
      return this._dataCoordConvert(t, "coordToData");
    }, _dataCoordConvert: function _dataCoordConvert(t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
            o = this._axes[a];i[a] = o[e](t[a]);
      }return i;
    } }, xh.prototype = { constructor: xh, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function getBaseAxis() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, containPoint: function containPoint(t) {
      var e = this.getAxis("x"),
          n = this.getAxis("y");return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    }, containData: function containData(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    }, dataToPoint: function dataToPoint(t, e, n) {
      var i = this.getAxis("x"),
          r = this.getAxis("y");return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;
    }, clampData: function clampData(t, e) {
      var n = this.getAxis("x").scale.getExtent(),
          i = this.getAxis("y").scale.getExtent();return e = e || [], e[0] = Math.min(Math.max(Math.min(n[0], n[1]), t[0]), Math.max(n[0], n[1])), e[1] = Math.min(Math.max(Math.min(i[0], i[1]), t[1]), Math.max(i[0], i[1])), e;
    }, pointToData: function pointToData(t, e) {
      var n = this.getAxis("x"),
          i = this.getAxis("y");return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;
    }, getOtherAxis: function getOtherAxis(t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    } }, u(xh, Kv);var Qv = ra,
      Jv = [0, 1],
      tm = function tm(t, e, n) {
    this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1, this._labelInterval;
  };tm.prototype = { constructor: tm, contain: function contain(t) {
      var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);return t >= n && i >= t;
    }, containData: function containData(t) {
      return this.contain(this.dataToCoord(t));
    }, getExtent: function getExtent() {
      return this._extent.slice();
    }, getPixelPrecision: function getPixelPrecision(t) {
      return la(t || this.scale.getExtent(), this._extent);
    }, setExtent: function setExtent(t, e) {
      var n = this._extent;n[0] = t, n[1] = e;
    }, dataToCoord: function dataToCoord(t, e) {
      var n = this._extent,
          i = this.scale;return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), wh(n, i.count())), Qv(t, Jv, n, e);
    }, coordToData: function coordToData(t, e) {
      var n = this._extent,
          i = this.scale;this.onBand && "ordinal" === i.type && (n = n.slice(), wh(n, i.count()));var r = Qv(t, n, Jv, e);return this.scale.scale(r);
    }, pointToData: function pointToData() {}, getTicksCoords: function getTicksCoords(t) {
      if (this.onBand && !t) {
        for (var e = this.getBands(), n = [], i = 0; i < e.length; i++) {
          n.push(e[i][0]);
        }return e[i - 1] && n.push(e[i - 1][1]), n;
      }return p(this.scale.getTicks(), this.dataToCoord, this);
    }, getLabelsCoords: function getLabelsCoords() {
      return p(this.scale.getTicks(), this.dataToCoord, this);
    }, getBands: function getBands() {
      for (var t = this.getExtent(), e = [], n = this.scale.count(), i = t[0], r = t[1], a = r - i, o = 0; n > o; o++) {
        e.push([a * o / n + i, a * (o + 1) / n + i]);
      }return e;
    }, getBandWidth: function getBandWidth() {
      var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);0 === n && (n = 1);var i = Math.abs(t[1] - t[0]);return Math.abs(i) / n;
    }, isHorizontal: null, getRotate: null, getLabelInterval: function getLabelInterval() {
      var t = this._labelInterval;if (!t) {
        var e = this.model,
            n = e.getModel("axisLabel");t = n.get("interval"), "category" !== this.type || null != t && "auto" !== t || (t = vh(p(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), n.getFont(), this.getRotate ? this.getRotate() : this.isHorizontal && !this.isHorizontal() ? 90 : 0, n.get("rotate"))), this._labelInterval = t;
      }return t;
    } };var em = function em(t, e, n, i, r) {
    tm.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
  };em.prototype = { constructor: em, index: 0, onZero: !1, model: null, isHorizontal: function isHorizontal() {
      var t = this.position;return "top" === t || "bottom" === t;
    }, getGlobalExtent: function getGlobalExtent(t) {
      var e = this.getExtent();return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    }, getOtherAxis: function getOtherAxis() {
      this.grid.getOtherAxis();
    }, isLabelIgnored: function isLabelIgnored(t) {
      if ("category" === this.type) {
        var e = this.getLabelInterval();return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1);
      }
    }, pointToData: function pointToData(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    }, toLocalCoord: null, toGlobalCoord: null }, u(em, tm);var nm = { show: !0, zlevel: 0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: "#333", width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15] }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12 }, splitLine: { show: !0, lineStyle: { color: ["#ccc"], width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"] } } },
      im = {};im.categoryAxis = r({ boundaryGap: !0, deduplication: null, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto" }, axisLabel: { interval: "auto" } }, nm), im.valueAxis = r({ boundaryGap: [0, 0], splitNumber: 5 }, nm), im.timeAxis = s({ scale: !0, min: "dataMin", max: "dataMax" }, im.valueAxis), im.logAxis = s({ scale: !0, logBase: 10 }, im.valueAxis);var rm = ["value", "category", "time", "log"],
      am = function am(t, e, n, i) {
    d(rm, function (o) {
      e.extend({ type: t + "Axis." + o, mergeDefaultAndTheme: function mergeDefaultAndTheme(e, i) {
          var a = this.layoutMode,
              s = a ? Ia(e) : {},
              l = i.getTheme();r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && Ma(e, s, a);
        }, optionUpdated: function optionUpdated() {
          var t = this.option;"category" === t.type && (this.__ordinalMeta = Ql.createByAxisModel(this));
        }, getCategories: function getCategories() {
          return "category" === this.option.type ? this.__ordinalMeta.categories : void 0;
        }, getOrdinalMeta: function getOrdinalMeta() {
          return this.__ordinalMeta;
        }, defaultOption: a([{}, im[o + "Axis"], i], !0) });
    }), Gd.registerSubTypeDefaulter(t + "Axis", y(n, t));
  },
      om = { getFormattedLabels: function getFormattedLabels() {
      return mh(this.axis, this.get("axisLabel.formatter"));
    }, getMin: function getMin(t) {
      var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
    }, getMax: function getMax(t) {
      var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
    }, getNeedCrossZero: function getNeedCrossZero() {
      var t = this.option;return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;
    }, getCoordSysModel: N, setRange: function setRange(t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    }, resetRange: function resetRange() {
      this.option.rangeStart = this.option.rangeEnd = null;
    } },
      sm = Gd.extend({ type: "cartesian2dAxis", axis: null, init: function init() {
      sm.superApply(this, "init", arguments), this.resetRange();
    }, mergeOption: function mergeOption() {
      sm.superApply(this, "mergeOption", arguments), this.resetRange();
    }, restoreData: function restoreData() {
      sm.superApply(this, "restoreData", arguments), this.resetRange();
    }, getCoordSysModel: function getCoordSysModel() {
      return this.ecModel.queryComponents({ mainType: "grid", index: this.option.gridIndex, id: this.option.gridId })[0];
    } });r(sm.prototype, om);var lm = { offset: 0 };am("x", sm, bh, lm), am("y", sm, bh, lm), Gd.extend({ type: "grid", dependencies: ["xAxis", "yAxis"], layoutMode: "box", coordinateSystem: null, defaultOption: { show: !1, zlevel: 0, z: 0, left: "10%", top: 60, right: "10%", bottom: 60, containLabel: !1, backgroundColor: "rgba(0,0,0,0)", borderWidth: 1, borderColor: "#ccc" } });var hm = d,
      um = gh,
      cm = dh,
      fm = Th.prototype;fm.type = "grid", fm.axisPointerEnabled = !0, fm.getRect = function () {
    return this._rect;
  }, fm.update = function (t, e) {
    var n = this._axesMap;this._updateScale(t, this.model), hm(n.x, function (t) {
      cm(t.scale, t.model);
    }), hm(n.y, function (t) {
      cm(t.scale, t.model);
    }), hm(n.x, function (t) {
      Ch(n, "y", t);
    }), hm(n.y, function (t) {
      Ch(n, "x", t);
    }), this.resize(this.model, e);
  }, fm.resize = function (t, e, n) {
    function i() {
      hm(a, function (t) {
        var e = t.isHorizontal(),
            n = e ? [0, r.width] : [0, r.height],
            i = t.inverse ? 1 : 0;t.setExtent(n[i], n[1 - i]), kh(t, e ? r.x : r.y);
      });
    }var r = Sa(t.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });this._rect = r;var a = this._axesList;i(), !n && t.get("containLabel") && (hm(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = Ih(t);if (e) {
          var n = t.isHorizontal() ? "height" : "width",
              i = t.model.get("axisLabel.margin");r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
        }
      }
    }), i());
  }, fm.getAxis = function (t, e) {
    var n = this._axesMap[t];if (null != n) {
      if (null == e) for (var i in n) {
        if (n.hasOwnProperty(i)) return n[i];
      }return n[e];
    }
  }, fm.getAxes = function () {
    return this._axesList.slice();
  }, fm.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;return this._coordsMap[n];
    }b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);for (var i = 0, r = this._coordsList; i < r.length; i++) {
      if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
    }
  }, fm.getCartesians = function () {
    return this._coordsList.slice();
  }, fm.convertToPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
  }, fm.convertFromPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
  }, fm._findConvertTarget = function (t, e) {
    var n,
        i,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;if (r) n = r.coordinateSystem, h(l, n) < 0 && (n = null);else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) i = this.getAxis("x", a.componentIndex);else if (o) i = this.getAxis("y", o.componentIndex);else if (s) {
      var u = s.coordinateSystem;u === this && (n = this._coordsList[0]);
    }return { cartesian: n, axis: i };
  }, fm.containPoint = function (t) {
    var e = this._coordsList[0];return e ? e.containPoint(t) : void 0;
  }, fm._initCartesian = function (t, e) {
    function n(n) {
      return function (o, s) {
        if (Sh(o, t, e)) {
          var l = o.get("position");"x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;var h = new em(n, ph(o), [0, 0], o.get("type"), l),
              u = "category" === h.type;h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), h.onZero = o.get("axisLine.onZero"), h.onZeroAxisIndex = o.get("axisLine.onZeroAxisIndex"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[n][s] = h, a[n]++;
        }
      };
    }var i = { left: !1, right: !1, top: !1, bottom: !1 },
        r = { x: {}, y: {} },
        a = { x: 0, y: 0 };return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void hm(r.x, function (e, n) {
      hm(r.y, function (i, r) {
        var a = "x" + n + "y" + r,
            o = new xh(a);o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
      }, this);
    }, this)) : (this._axesMap = {}, void (this._axesList = []));
  }, fm._updateScale = function (t, e) {
    function n(t, e) {
      hm(t.mapDimension(e.dim, !0), function (n) {
        e.scale.unionExtentFromData(t, n);
      });
    }d(this._axesList, function (t) {
      t.scale.setExtent(1 / 0, -1 / 0);
    }), t.eachSeries(function (i) {
      if (Lh(i)) {
        var r = Ah(i, t),
            a = r[0],
            o = r[1];if (!Sh(a, e, t) || !Sh(o, e, t)) return;var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = i.getData(),
            h = s.getAxis("x"),
            u = s.getAxis("y");"list" === l.type && (n(l, h, i), n(l, u, i));
      }
    }, this);
  }, fm.getTooltipAxes = function (t) {
    var e = [],
        n = [];return hm(this.getCartesians(), function (i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
          a = i.getOtherAxis(r);h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a);
    }), { baseAxes: e, otherAxes: n };
  };var dm = ["xAxis", "yAxis"];Th.create = function (t, e) {
    var n = [];return t.eachComponent("grid", function (i, r) {
      var a = new Th(i, t, e);a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);
    }), t.eachSeries(function (e) {
      if (Lh(e)) {
        var n = Ah(e, t),
            i = n[0],
            r = n[1],
            a = i.getCoordSysModel(),
            o = a.coordinateSystem;e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
      }
    }), n;
  }, Th.dimensions = Th.prototype.dimensions = xh.prototype.dimensions, Ka.register("cartesian2d", Th);var pm = Math.PI,
      gm = function gm(t, e) {
    this.opt = e, this.axisModel = t, s(e, { labelOffset: 0, nameDirection: 1, tickDirection: 1, labelDirection: 1, silent: !0 }), this.group = new Qu();var n = new Qu({ position: e.position.slice(), rotation: e.rotation });n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
  };gm.prototype = { constructor: gm, hasBuilder: function hasBuilder(t) {
      return !!vm[t];
    }, add: function add(t) {
      vm[t].call(this);
    }, getGroup: function getGroup() {
      return this.group;
    } };var vm = { axisLine: function axisLine() {
      var t = this.opt,
          e = this.axisModel;if (e.get("axisLine.show")) {
        var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];i && (K(r, r, i), K(a, a, i));var s = o({ lineCap: "round" }, e.getModel("axisLine.lineStyle").getLineStyle());this.group.add(new vd(Sr({ anid: "line", shape: { x1: r[0], y1: r[1], x2: a[0], y2: a[1] }, style: s, strokeContainThreshold: t.strokeContainThreshold || 5, silent: !0, z2: 1 })));var l = e.get("axisLine.symbol"),
            h = e.get("axisLine.symbolSize"),
            u = e.get("axisLine.symbolOffset") || 0;if ("number" == typeof u && (u = [u, u]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);var c = h[0],
              f = h[1];d([{ rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0 }, { rotate: t.rotation - Math.PI / 2, offset: u[1], r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1])) }], function (e, n) {
            if ("none" !== l[n] && null != l[n]) {
              var i = bl(l[n], -c / 2, -f / 2, c, f, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];i.attr({ rotation: e.rotate, position: o, silent: !0 }), this.group.add(i);
            }
          }, this);
        }
      }
    }, axisTickLabel: function axisTickLabel() {
      var t = this.axisModel,
          e = this.opt,
          n = Fh(this, t, e),
          i = Vh(this, t, e);Rh(t, i, n);
    }, axisName: function axisName() {
      var t = this.opt,
          e = this.axisModel,
          n = C(t.axisName, e.get("name"));if (n) {
        var i,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            h = this.axisModel.axis.getExtent(),
            u = h[0] > h[1] ? -1 : 1,
            c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Nh(r) ? t.labelOffset + a * l : 0],
            f = e.get("nameRotate");null != f && (f = f * pm / 180);var d;Nh(r) ? i = mm(t.rotation, null != f ? f : t.rotation, a) : (i = Oh(t, r, f || 0, h), d = t.axisNameAvailableWidth, null != d && (d = Math.abs(d / Math.sin(i.rotation)), !isFinite(d) && (d = null)));var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = C(t.nameTruncateMaxWidth, g.maxWidth, d),
            y = null != v && null != m ? zd(n, m, p, v, { minChar: 2, placeholder: g.placeholder }) : n,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = { componentType: x, name: n, $vars: ["name"] };w[x + "Index"] = e.componentIndex;var b = new sd({ anid: "name", __fullText: n, __truncatedText: y, position: c, rotation: i.rotation, silent: Eh(e), z2: 1, tooltip: _ && _.show ? o({ content: n, formatter: function formatter() {
              return n;
            }, formatterParams: w }, _) : null });Fr(b.style, s, { text: y, textFont: p, textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"), textAlign: i.textAlign, textVerticalAlign: i.textVerticalAlign }), e.get("triggerEvent") && (b.eventData = Ph(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    } },
      mm = gm.innerTextLayout = function (t, e, n) {
    var i,
        r,
        a = ua(e - t);return ca(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : ca(a - pm) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && pm > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), { rotation: a, textAlign: i, textVerticalAlign: r };
  },
      ym = gm.ifIgnoreOnTick = function (t, e, n, i, r, a) {
    if (0 === e && r || e === i - 1 && a) return !1;var o,
        s = t.scale;return "ordinal" === s.type && ("function" == typeof n ? (o = s.getTicks()[e], !n(o, s.getLabel(o))) : e % (n + 1));
  },
      _m = gm.getInterval = function (t, e) {
    var n = t.get("interval");return (null == n || "auto" == n) && (n = e), n;
  },
      xm = qs({ type: "axis", _axisPointer: null, axisPointerClass: null, render: function render(t, e, n, i) {
      this.axisPointerClass && Wh(t), xm.superApply(this, "render", arguments), Uh(this, t, e, n, i, !0);
    }, updateAxisPointer: function updateAxisPointer(t, e, n, i) {
      Uh(this, t, e, n, i, !1);
    }, remove: function remove(t, e) {
      var n = this._axisPointer;n && n.remove(e), xm.superApply(this, "remove", arguments);
    }, dispose: function dispose(t, e) {
      Yh(this, e), xm.superApply(this, "dispose", arguments);
    } }),
      wm = [];xm.registerAxisPointerClass = function (t, e) {
    wm[t] = e;
  }, xm.getAxisPointerClass = function (t) {
    return t && wm[t];
  };var bm = gm.ifIgnoreOnTick,
      Sm = gm.getInterval,
      Mm = ["axisLine", "axisTickLabel", "axisName"],
      Im = ["splitArea", "splitLine"],
      Tm = xm.extend({ type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function render(t, e, n, i) {
      this.group.removeAll();var r = this._axisGroup;if (this._axisGroup = new Qu(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = Zh(a, t),
            s = new gm(t, o);d(Mm, s.add, s), this._axisGroup.add(s.getGroup()), d(Im, function (e) {
          t.get(e + ".show") && this["_" + e](t, a, o.labelInterval);
        }, this), $r(r, this._axisGroup, t), Tm.superCall(this, "render", t, e, n, i);
      }
    }, _splitLine: function _splitLine(t, e, n) {
      var i = t.axis;if (!i.scale.isBlank()) {
        var r = t.getModel("splitLine"),
            a = r.getModel("lineStyle"),
            o = a.get("color"),
            l = Sm(r, n);o = _(o) ? o : [o];for (var h = e.coordinateSystem.getRect(), u = i.isHorizontal(), c = 0, f = i.getTicksCoords(), d = i.scale.getTicks(), p = t.get("axisLabel.showMinLabel"), g = t.get("axisLabel.showMaxLabel"), v = [], m = [], y = a.getLineStyle(), x = 0; x < f.length; x++) {
          if (!bm(i, x, l, f.length, p, g)) {
            var w = i.toGlobalCoord(f[x]);u ? (v[0] = w, v[1] = h.y, m[0] = w, m[1] = h.y + h.height) : (v[0] = h.x, v[1] = w, m[0] = h.x + h.width, m[1] = w);var b = c++ % o.length;this._axisGroup.add(new vd(Sr({ anid: "line_" + d[x], shape: { x1: v[0], y1: v[1], x2: m[0], y2: m[1] }, style: s({ stroke: o[b] }, y), silent: !0 })));
          }
        }
      }
    }, _splitArea: function _splitArea(t, e, n) {
      var i = t.axis;if (!i.scale.isBlank()) {
        var r = t.getModel("splitArea"),
            a = r.getModel("areaStyle"),
            o = a.get("color"),
            l = e.coordinateSystem.getRect(),
            h = i.getTicksCoords(),
            u = i.scale.getTicks(),
            c = i.toGlobalCoord(h[0]),
            f = i.toGlobalCoord(h[0]),
            d = 0,
            p = Sm(r, n),
            g = a.getAreaStyle();o = _(o) ? o : [o];for (var v = t.get("axisLabel.showMinLabel"), m = t.get("axisLabel.showMaxLabel"), y = 1; y < h.length; y++) {
          if (!(bm(i, y, p, h.length, v, m) && y < h.length - 1)) {
            var x,
                w,
                b,
                S,
                M = i.toGlobalCoord(h[y]);i.isHorizontal() ? (x = c, w = l.y, b = M - x, S = l.height) : (x = l.x, w = f, b = l.width, S = M - w);var I = d++ % o.length;this._axisGroup.add(new gd({ anid: "area_" + u[y], shape: { x: x, y: w, width: b, height: S }, style: s({ fill: o[I] }, g), silent: !0 })), c = x + b, f = w + S;
          }
        }
      }
    } });Tm.extend({ type: "xAxis" }), Tm.extend({ type: "yAxis" }), qs({ type: "grid", render: function render(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new gd({ shape: t.coordinateSystem.getRect(), style: s({ fill: t.get("backgroundColor") }, t.getItemStyle()), silent: !0, z2: -1 }));
    } }), Os(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), Vs(xv("line", "circle", "line")), Fs(wv("line")), Es(pg.PROCESSOR.STATISTIC, Mv("line"));var Cm = function Cm(t, e, n) {
    e = _(e) && { coordDimensions: e } || o({}, e);var i = t.getSource(),
        r = jg(i, e),
        a = new Ug(r, t);return a.initData(i, n), a;
  },
      Dm = { updateSelectedMap: function updateSelectedMap(t) {
      this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
        return t.set(e.name, e), t;
      }, z());
    }, select: function select(t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
          i = this.get("selectedMode");"single" === i && this._selectTargetMap.each(function (t) {
        t.selected = !1;
      }), n && (n.selected = !0);
    }, unSelect: function unSelect(t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);n && (n.selected = !1);
    }, toggleSelected: function toggleSelected(t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0;
    }, isSelected: function isSelected(t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);return n && n.selected;
    } },
      km = Xs({ type: "series.pie", init: function init(t) {
      km.superApply(this, "init", arguments), this.legendDataProvider = function () {
        return this.getRawData();
      }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
    }, mergeOption: function mergeOption(t) {
      km.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
    }, getInitialData: function getInitialData() {
      return Cm(this, ["value"]);
    }, _createSelectableList: function _createSelectableList() {
      for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) {
        n.push({ name: t.getName(i), value: t.get(e, i), selected: Io(t, i, "selected") });
      }return n;
    }, getDataParams: function getDataParams(t) {
      var e = this.getData(),
          n = km.superCall(this, "getDataParams", t),
          i = [];return e.each(e.mapDimension("value"), function (t) {
        i.push(t);
      }), n.percent = ha(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;
    }, _defaultLabelLine: function _defaultLabelLine(t) {
      ci(t, "labelLine", ["show"]);var e = t.labelLine,
          n = t.emphasis.labelLine;e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
    }, defaultOption: { zlevel: 0, z: 2, legendHoverLink: !0, hoverAnimation: !0, center: ["50%", "50%"], radius: [0, "75%"], clockwise: !0, startAngle: 90, minAngle: 0, selectedOffset: 10, hoverOffset: 10, avoidLabelOverlap: !0, percentPrecision: 2, stillShowZeroSum: !0, label: { rotate: !1, show: !0, position: "outer" }, labelLine: { show: !0, length: 15, length2: 15, smooth: !1, lineStyle: { width: 1, type: "solid" } }, itemStyle: { borderWidth: 1 }, animationType: "expansion", animationEasing: "cubicOut" } });c(km, Dm);var Am = Kh.prototype;Am.updateData = function (t, e, n) {
    function i() {
      a.stopAnimation(!0), a.animateTo({ shape: { r: u.r + l.get("hoverOffset") } }, 300, "elasticOut");
    }function r() {
      a.stopAnimation(!0), a.animateTo({ shape: { r: u.r } }, 300, "elasticOut");
    }var a = this.childAt(0),
        l = t.hostModel,
        h = t.getItemModel(e),
        u = t.getItemLayout(e),
        c = o({}, u);if (c.label = null, n) {
      a.setShape(c);var f = l.getShallow("animationType");"scale" === f ? (a.shape.r = u.r0, jr(a, { shape: { r: u.r } }, l, e)) : (a.shape.endAngle = u.startAngle, Zr(a, { shape: { endAngle: u.endAngle } }, l, e));
    } else Zr(a, { shape: c }, l, e);var d = t.getItemVisual(e, "color");a.useStyle(s({ lineJoin: "bevel", fill: d }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();var p = h.getShallow("cursor");p && a.attr("cursor", p), $h(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), zr(this);
  }, Am._updateLabel = function (t, e) {
    var n = this.childAt(1),
        i = this.childAt(2),
        r = t.hostModel,
        a = t.getItemModel(e),
        o = t.getItemLayout(e),
        s = o.label,
        l = t.getItemVisual(e, "color");Zr(n, { shape: { points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]] } }, r, e), Zr(i, { style: { x: s.x, y: s.y } }, r, e), i.attr({ rotation: s.rotation, origin: [s.x, s.y], z2: 10 });var h = a.getModel("label"),
        u = a.getModel("emphasis.label"),
        c = a.getModel("labelLine"),
        f = a.getModel("emphasis.labelLine"),
        l = t.getItemVisual(e, "color");Nr(i.style, i.hoverStyle = {}, h, u, { labelFetcher: t.hostModel, labelDataIndex: e, defaultText: t.getName(e), autoColor: l, useInsideStyle: !!s.inside }, { textAlign: s.textAlign, textVerticalAlign: s.verticalAlign, opacity: t.getItemVisual(e, "opacity") }), i.ignore = i.normalIgnore = !h.get("show"), i.hoverIgnore = !u.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !f.get("show"), n.setStyle({ stroke: l, opacity: t.getItemVisual(e, "opacity") }), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = f.getModel("lineStyle").getLineStyle();var d = c.get("smooth");d && d === !0 && (d = .4), n.setShape({ smooth: d });
  }, u(Kh, Qu);var Lm = (zo.extend({ type: "pie", init: function init() {
      var t = new Qu();this._sectorGroup = t;
    }, render: function render(t, e, n, i) {
      if (!i || i.from !== this.uid) {
        var r = t.getData(),
            a = this._data,
            o = this.group,
            s = e.get("animation"),
            l = !a,
            h = t.get("animationType"),
            u = y(jh, this.uid, t, s, n),
            c = t.get("selectedMode");if (r.diff(a).add(function (t) {
          var e = new Kh(r, t);l && "scale" !== h && e.eachChild(function (t) {
            t.stopAnimation(!0);
          }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e);
        }).update(function (t, e) {
          var n = a.getItemGraphicEl(e);n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n);
        }).remove(function (t) {
          var e = a.getItemGraphicEl(t);o.remove(e);
        }).execute(), s && l && r.count() > 0 && "scale" !== h) {
          var f = r.getItemLayout(0),
              d = Math.max(n.getWidth(), n.getHeight()) / 2,
              p = m(o.removeClipPath, o);o.setClipPath(this._createClipPath(f.cx, f.cy, d, f.startAngle, f.clockwise, p, t));
        }this._data = r;
      }
    }, dispose: function dispose() {}, _createClipPath: function _createClipPath(t, e, n, i, r, a, o) {
      var s = new cd({ shape: { cx: t, cy: e, r0: 0, r: n, startAngle: i, endAngle: i, clockwise: r } });return jr(s, { shape: { endAngle: i + (r ? 1 : -1) * Math.PI * 2 } }, o, a), s;
    }, containPoint: function containPoint(t, e) {
      var n = e.getData(),
          i = n.getItemLayout(0);if (i) {
        var r = t[0] - i.cx,
            a = t[1] - i.cy,
            o = Math.sqrt(r * r + a * a);return o <= i.r && o >= i.r0;
      }
    } }), function (t, e) {
    d(e, function (e) {
      e.update = "updateView", Bs(e, function (n, i) {
        var r = {};return i.eachComponent({ mainType: "series", subType: t, query: n }, function (t) {
          t[e.method] && t[e.method](n.name, n.dataIndex);var i = t.getData();i.each(function (e) {
            var n = i.getName(e);r[n] = t.isSelected(n) || !1;
          });
        }), { name: n.name, selected: r };
      });
    });
  }),
      Pm = function Pm(t) {
    return { getTargetSeries: function getTargetSeries(e) {
        var n = {},
            i = z();return e.eachSeriesByType(t, function (t) {
          t.__paletteScope = n, i.set(t.uid, t);
        }), i;
      }, reset: function reset(t) {
        var e = t.getRawData(),
            n = {},
            i = t.getData();i.each(function (t) {
          var e = i.getRawIndex(t);n[e] = t;
        }), e.each(function (r) {
          var a = n[r],
              o = null != a && i.getItemVisual(a, "color", !0);if (o) e.setItemVisual(r, "color", o);else {
            var s = e.getItemModel(r),
                l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l);
          }
        });
      } };
  },
      Om = function Om(t, e, n, i) {
    var r,
        a,
        o = t.getData(),
        s = [],
        l = !1;o.each(function (n) {
      var i,
          h,
          u,
          c,
          f = o.getItemLayout(n),
          d = o.getItemModel(n),
          p = d.getModel("label"),
          g = p.get("position") || d.get("emphasis.label.position"),
          v = d.getModel("labelLine"),
          m = v.get("length"),
          y = v.get("length2"),
          _ = (f.startAngle + f.endAngle) / 2,
          x = Math.cos(_),
          w = Math.sin(_);r = f.cx, a = f.cy;var b = "inside" === g || "inner" === g;if ("center" === g) i = f.cx, h = f.cy, c = "center";else {
        var S = (b ? (f.r + f.r0) / 2 * x : f.r * x) + r,
            M = (b ? (f.r + f.r0) / 2 * w : f.r * w) + a;if (i = S + 3 * x, h = M + 3 * w, !b) {
          var I = S + x * (m + e - f.r),
              T = M + w * (m + e - f.r),
              C = I + (0 > x ? -1 : 1) * y,
              D = T;i = C + (0 > x ? -5 : 5), h = D, u = [[S, M], [I, T], [C, D]];
        }c = b ? "center" : x > 0 ? "left" : "right";
      }var k = p.getFont(),
          A = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
          L = t.getFormattedLabel(n, "normal") || o.getName(n),
          P = on(L, k, c, "top");l = !!A, f.label = { x: i, y: h, position: g, height: P.height, len: m, len2: y, linePoints: u, textAlign: c, verticalAlign: "middle", rotation: A, inside: b }, b || s.push(f.label);
    }), !l && t.get("avoidLabelOverlap") && Jh(s, r, a, e, n, i);
  },
      Em = 2 * Math.PI,
      Rm = Math.PI / 180,
      Bm = function Bm(t, e, n) {
    e.eachSeriesByType(t, function (t) {
      var e = t.getData(),
          i = e.mapDimension("value"),
          r = t.get("center"),
          a = t.get("radius");_(a) || (a = [0, a]), _(r) || (r = [r, r]);var o = n.getWidth(),
          s = n.getHeight(),
          l = Math.min(o, s),
          h = aa(r[0], o),
          u = aa(r[1], s),
          c = aa(a[0], l / 2),
          f = aa(a[1], l / 2),
          d = -t.get("startAngle") * Rm,
          p = t.get("minAngle") * Rm,
          g = 0;e.each(i, function (t) {
        !isNaN(t) && g++;
      });var v = e.getSum(i),
          m = Math.PI / (v || g) * 2,
          y = t.get("clockwise"),
          x = t.get("roseType"),
          w = t.get("stillShowZeroSum"),
          b = e.getDataExtent(i);b[0] = 0;var S = Em,
          M = 0,
          I = d,
          T = y ? 1 : -1;if (e.each(i, function (t, n) {
        var i;if (isNaN(t)) return void e.setItemLayout(n, { angle: 0 / 0, startAngle: 0 / 0, endAngle: 0 / 0, clockwise: y, cx: h, cy: u, r0: c, r: x ? 0 / 0 : f });i = "area" !== x ? 0 === v && w ? m : t * m : Em / g, p > i ? (i = p, S -= p) : M += t;var r = I + T * i;e.setItemLayout(n, { angle: i, startAngle: I, endAngle: r, clockwise: y, cx: h, cy: u, r0: c, r: x ? ra(t, b, [c, f]) : f }), I = r;
      }), Em > S && g) if (.001 >= S) {
        var C = Em / g;e.each(i, function (t, n) {
          if (!isNaN(t)) {
            var i = e.getItemLayout(n);i.angle = C, i.startAngle = d + T * n * C, i.endAngle = d + T * (n + 1) * C;
          }
        });
      } else m = S / M, I = d, e.each(i, function (t, n) {
        if (!isNaN(t)) {
          var i = e.getItemLayout(n),
              r = i.angle === p ? p : t * m;i.startAngle = I, i.endAngle = I + T * r, I += T * r;
        }
      });Om(t, f, o, s);
    });
  },
      zm = function zm(t) {
    return { seriesType: t, reset: function reset(t, e) {
        var n = e.findComponents({ mainType: "legend" });if (n && n.length) {
          var i = t.getData();i.filterSelf(function (t) {
            for (var e = i.getName(t), r = 0; r < n.length; r++) {
              if (!n[r].isSelected(e)) return !1;
            }return !0;
          });
        }
      } };
  };Lm("pie", [{ type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected" }, { type: "pieSelect", event: "pieselected", method: "select" }, { type: "pieUnSelect", event: "pieunselected", method: "unSelect" }]), Vs(Pm("pie")), Fs(y(Bm, "pie")), Es(zm("pie")), t.version = rg, t.dependencies = ag, t.PRIORITY = pg, t.init = Ts, t.connect = Cs, t.disConnect = Ds, t.disconnect = Rg, t.dispose = ks, t.getInstanceByDom = As, t.getInstanceById = Ls, t.registerTheme = Ps, t.registerPreprocessor = Os, t.registerProcessor = Es, t.registerPostUpdate = Rs, t.registerAction = Bs, t.registerCoordinateSystem = zs, t.getCoordinateSystemDimensions = Ns, t.registerLayout = Fs, t.registerVisual = Vs, t.registerLoading = Hs, t.extendComponentModel = Gs, t.extendComponentView = qs, t.extendSeriesModel = Xs, t.extendChartView = Us, t.setCanvasCreator = Ys, t.registerMap = Zs, t.getMap = js, t.dataTool = Bg;
});