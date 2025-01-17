!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    (function(e) {
        !function(t) {
            try {
                var i = "fbuy_current_shopper"
                  , r = window.localStorage.getItem(i);
                if (r)
                    t.shopperWorkaround = r;
                else {
                    var o = new URLSearchParams(window.location.search)
                      , s = o.get(i);
                    s && (t.shopperWorkaround = decodeURIComponent(s),
                    window.localStorage.setItem(i, t.shopperWorkaround))
                }
            } catch (e) {
                console.warn(e)
            }
            var o, a = n(1), u = n(18), c = n(17), l = n(5), d = {
                site: null,
                friendbuy_classic: "//cdn.friendbuy.com/js/friendbuy-classic.min.js",
                widget_data_site: "//cdn1.friendbuy.com",
                widget_service_site: "https://ws.friendbuy.com",
                serverlessSite: "https://ff.friendbuy.com/v1",
                campaignId: "",
                products: []
            }, f = {
                site: null,
                friendbuy_classic: "//cdn.friendbuy.ph/js/friendbuy-classic.min.js",
                widget_data_site: "//cdn.friendbuy.ph",
                widget_service_site: "https://ws.friendbuy.ph",
                serverlessSite: "https://ff.friendbuy.com/v1",
                campaignId: "",
                products: []
            }, h = {
                site: null,
                friendbuy_classic: "//az-cdn.friendbuy.com/js/friendbuy-classic.min.js",
                widget_data_site: "//az-cdn.friendbuy.com",
                widget_service_site: "https://az-ws.friendbuy.com",
                serverlessSite: "https://ff.friendbuy.com/v1",
                campaignId: "",
                products: []
            };
            o = e.env.NODE_ENV && "asia" === e.env.NODE_ENV ? f : e.env.NODE_ENV && "azure" === e.env.NODE_ENV ? h : d;
            var p = function(e) {
                if (e.classic) {
                    var i = m(o.widget_service_site, o.site);
                    return void i()
                }
                var r = n(9);
                if (r.setWidgets(e),
                !t._loaded) {
                    var s = n(3)
                      , a = {
                        overridePush: !0
                    };
                    u(t, o, e, c.main(o, t), a),
                    ("order"in o || "customer"in o) && l(o),
                    s.receiveMessage(function(e) {
                        if (t.widgets && e.data.split) {
                            var n = e.data.split("#")
                              , i = t.widgets[n.pop()]
                              , r = n.shift()
                              , o = "share.success" === r ? {
                                id: n.shift(),
                                network: n.shift(),
                                message: n.shift()
                            } : "widget.title" === r ? n.shift() : i;
                            i && i.fireEvent(r, o)
                        }
                    }),
                    n(19).init(t, o, e),
                    t._loaded = !0
                }
            }
              , m = function(e, t) {
                return function() {
                    a.getWithoutCredentials(e + "/widgets/configs/" + t + ".json", p, "application/json")
                }
            }
              , g = function() {
                u(t, o, {}, c.merchantLoad(o)),
                o.site && a.getWithoutCredentials(o.widget_data_site + "/widgets/configs/" + o.site + ".json", p, "application/json", m(o.widget_service_site, o.site))
            };
            setTimeout(function() {
                "undefined" == typeof t.fbuyPreviewWidgets || null === t.fbuyPreviewWidgets ? g() : p(t.fbuyPreviewWidgets)
            }, 300)
        }(window.friendbuy || [])
    }
    ).call(t, n(11))
}
, function(e, t) {
    var n = function(e) {
        var t = window.friendbuy || []
          , n = t.shopperWorkaround;
        if (n) {
            var i = e.startsWith("http://") || e.startsWith("https://") ? "" : window.location.protocol
              , r = new URL(i + e);
            return r.searchParams.set("_fbuy", n),
            r.toString()
        }
        return e
    };
    t.get = function(e, t, i, r, o) {
        if (XMLHttpRequest) {
            var s = new XMLHttpRequest;
            s.open("GET", n(e)),
            s.withCredentials = void 0 === o || o,
            t && (s.onload = function() {
                200 === this.status ? t("application/json" === i ? JSON.parse(this.responseText) : this.responseText) : r && r(this)
            }
            ),
            r && (s.onerror = r,
            s.onabort = r,
            s.ontimeout = r),
            s.send()
        }
    }
    ,
    t.getWithoutCredentials = function(e, n, i, r) {
        t.get(e, n, i, r, !1)
    }
    ,
    t.post = function(e, t, i, r) {
        if (XMLHttpRequest) {
            var o = new XMLHttpRequest;
            o.open("POST", n(e)),
            o.setRequestHeader("Content-Type", "application/json"),
            o.withCredentials = !0;
            var s = JSON.stringify(t);
            i && (o.onload = function() {
                i(JSON.parse(this.responseText))
            }
            ),
            r && (o.onerror = r,
            o.onabort = r,
            o.ontimeout = r),
            o.send(s)
        }
    }
}
, function(e, t, n) {
    (function(e) {
        !function(t, n) {
            e.exports = n()
        }(this, function() {
            "use strict";
            function t() {
                return ai.apply(null, arguments)
            }
            function n(e) {
                ai = e
            }
            function i(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }
            function r(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }
            function o(e, t) {
                var n, i = [];
                for (n = 0; n < e.length; ++n)
                    i.push(t(e[n], n));
                return i
            }
            function s(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            function a(e, t) {
                for (var n in t)
                    s(t, n) && (e[n] = t[n]);
                return s(t, "toString") && (e.toString = t.toString),
                s(t, "valueOf") && (e.valueOf = t.valueOf),
                e
            }
            function u(e, t, n, i) {
                return Ne(e, t, n, i, !0).utc()
            }
            function c() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }
            function l(e) {
                return null == e._pf && (e._pf = c()),
                e._pf
            }
            function d(e) {
                if (null == e._isValid) {
                    var t = l(e)
                      , n = ui.call(t.parsedDateParts, function(e) {
                        return null != e
                    });
                    e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n),
                    e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
                }
                return e._isValid
            }
            function f(e) {
                var t = u(NaN);
                return null != e ? a(l(t), e) : l(t).userInvalidated = !0,
                t
            }
            function h(e) {
                return void 0 === e
            }
            function p(e, t) {
                var n, i, r;
                if (h(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                h(t._i) || (e._i = t._i),
                h(t._f) || (e._f = t._f),
                h(t._l) || (e._l = t._l),
                h(t._strict) || (e._strict = t._strict),
                h(t._tzm) || (e._tzm = t._tzm),
                h(t._isUTC) || (e._isUTC = t._isUTC),
                h(t._offset) || (e._offset = t._offset),
                h(t._pf) || (e._pf = l(t)),
                h(t._locale) || (e._locale = t._locale),
                ci.length > 0)
                    for (n in ci)
                        i = ci[n],
                        r = t[i],
                        h(r) || (e[i] = r);
                return e
            }
            function m(e) {
                p(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                li === !1 && (li = !0,
                t.updateOffset(this),
                li = !1)
            }
            function g(e) {
                return e instanceof m || null != e && null != e._isAMomentObject
            }
            function y(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }
            function v(e) {
                var t = +e
                  , n = 0;
                return 0 !== t && isFinite(t) && (n = y(t)),
                n
            }
            function _(e, t, n) {
                var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
                for (i = 0; i < r; i++)
                    (n && e[i] !== t[i] || !n && v(e[i]) !== v(t[i])) && s++;
                return s + o
            }
            function w(e) {
                t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }
            function b(e, n) {
                var i = !0;
                return a(function() {
                    return null != t.deprecationHandler && t.deprecationHandler(null, e),
                    i && (w(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack),
                    i = !1),
                    n.apply(this, arguments)
                }, n)
            }
            function S(e, n) {
                null != t.deprecationHandler && t.deprecationHandler(e, n),
                di[e] || (w(n),
                di[e] = !0)
            }
            function k(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            function x(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            function M(e) {
                var t, n;
                for (n in e)
                    t = e[n],
                    k(t) ? this[n] = t : this["_" + n] = t;
                this._config = e,
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }
            function D(e, t) {
                var n, i = a({}, e);
                for (n in t)
                    s(t, n) && (x(e[n]) && x(t[n]) ? (i[n] = {},
                    a(i[n], e[n]),
                    a(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
                return i
            }
            function O(e) {
                null != e && this.set(e)
            }
            function E(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }
            function C(e) {
                for (var t, n, i, r, o = 0; o < e.length; ) {
                    for (r = E(e[o]).split("-"),
                    t = r.length,
                    n = E(e[o + 1]),
                    n = n ? n.split("-") : null; t > 0; ) {
                        if (i = T(r.slice(0, t).join("-")))
                            return i;
                        if (n && n.length >= t && _(r, n, !0) >= t - 1)
                            break;
                        t--
                    }
                    o++
                }
                return null
            }
            function T(t) {
                var n = null;
                if (!mi[t] && "undefined" != typeof e && e && e.exports)
                    try {
                        n = hi._abbr,
                        !function() {
                            var e = new Error('Cannot find module "./locale"');
                            throw e.code = "MODULE_NOT_FOUND",
                            e
                        }(),
                        R(n)
                    } catch (e) {}
                return mi[t]
            }
            function R(e, t) {
                var n;
                return e && (n = h(t) ? Y(e) : W(e, t),
                n && (hi = n)),
                hi._abbr
            }
            function W(e, t) {
                return null !== t ? (t.abbr = e,
                null != mi[e] ? (S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),
                t = D(mi[e]._config, t)) : null != t.parentLocale && (null != mi[t.parentLocale] ? t = D(mi[t.parentLocale]._config, t) : S("parentLocaleUndefined", "specified parentLocale is not defined yet")),
                mi[e] = new O(t),
                R(e),
                mi[e]) : (delete mi[e],
                null)
            }
            function P(e, t) {
                if (null != t) {
                    var n;
                    null != mi[e] && (t = D(mi[e]._config, t)),
                    n = new O(t),
                    n.parentLocale = mi[e],
                    mi[e] = n,
                    R(e)
                } else
                    null != mi[e] && (null != mi[e].parentLocale ? mi[e] = mi[e].parentLocale : null != mi[e] && delete mi[e]);
                return mi[e]
            }
            function Y(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                !e)
                    return hi;
                if (!i(e)) {
                    if (t = T(e))
                        return t;
                    e = [e]
                }
                return C(e)
            }
            function I() {
                return fi(mi)
            }
            function N(e, t) {
                var n = e.toLowerCase();
                gi[n] = gi[n + "s"] = gi[t] = e
            }
            function L(e) {
                return "string" == typeof e ? gi[e] || gi[e.toLowerCase()] : void 0
            }
            function A(e) {
                var t, n, i = {};
                for (n in e)
                    s(e, n) && (t = L(n),
                    t && (i[t] = e[n]));
                return i
            }
            function F(e, n) {
                return function(i) {
                    return null != i ? (H(this, e, i),
                    t.updateOffset(this, n),
                    this) : j(this, e)
                }
            }
            function j(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }
            function H(e, t, n) {
                e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
            }
            function U(e, t) {
                var n;
                if ("object" == typeof e)
                    for (n in e)
                        this.set(n, e[n]);
                else if (e = L(e),
                k(this[e]))
                    return this[e](t);
                return this
            }
            function z(e, t, n) {
                var i = "" + Math.abs(e)
                  , r = t - i.length
                  , o = e >= 0;
                return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
            }
            function B(e, t, n, i) {
                var r = i;
                "string" == typeof i && (r = function() {
                    return this[i]()
                }
                ),
                e && (wi[e] = r),
                t && (wi[t[0]] = function() {
                    return z(r.apply(this, arguments), t[1], t[2])
                }
                ),
                n && (wi[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), e)
                }
                )
            }
            function G(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }
            function V(e) {
                var t, n, i = e.match(yi);
                for (t = 0,
                n = i.length; t < n; t++)
                    wi[i[t]] ? i[t] = wi[i[t]] : i[t] = G(i[t]);
                return function(t) {
                    var r, o = "";
                    for (r = 0; r < n; r++)
                        o += i[r]instanceof Function ? i[r].call(t, e) : i[r];
                    return o
                }
            }
            function q(e, t) {
                return e.isValid() ? (t = $(t, e.localeData()),
                _i[t] = _i[t] || V(t),
                _i[t](e)) : e.localeData().invalidDate()
            }
            function $(e, t) {
                function n(e) {
                    return t.longDateFormat(e) || e
                }
                var i = 5;
                for (vi.lastIndex = 0; i >= 0 && vi.test(e); )
                    e = e.replace(vi, n),
                    vi.lastIndex = 0,
                    i -= 1;
                return e
            }
            function Z(e, t, n) {
                Ai[e] = k(t) ? t : function(e, i) {
                    return e && n ? n : t
                }
            }
            function J(e, t) {
                return s(Ai, e) ? Ai[e](t._strict, t._locale) : new RegExp(X(e))
            }
            function X(e) {
                return Q(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                    return t || n || i || r
                }))
            }
            function Q(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            function K(e, t) {
                var n, i = t;
                for ("string" == typeof e && (e = [e]),
                "number" == typeof t && (i = function(e, n) {
                    n[t] = v(e)
                }
                ),
                n = 0; n < e.length; n++)
                    Fi[e[n]] = i
            }
            function ee(e, t) {
                K(e, function(e, n, i, r) {
                    i._w = i._w || {},
                    t(e, i._w, i, r)
                })
            }
            function te(e, t, n) {
                null != t && s(Fi, e) && Fi[e](t, n._a, n, e)
            }
            function ne(e, t) {
                return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
            }
            function ie(e, t) {
                return i(this._months) ? this._months[e.month()] : this._months[Zi.test(t) ? "format" : "standalone"][e.month()]
            }
            function re(e, t) {
                return i(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Zi.test(t) ? "format" : "standalone"][e.month()]
            }
            function oe(e, t, n) {
                var i, r, o, s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0; i < 12; ++i)
                        o = u([2e3, i]),
                        this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                        this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
                return n ? "MMM" === t ? (r = pi.call(this._shortMonthsParse, s),
                r !== -1 ? r : null) : (r = pi.call(this._longMonthsParse, s),
                r !== -1 ? r : null) : "MMM" === t ? (r = pi.call(this._shortMonthsParse, s),
                r !== -1 ? r : (r = pi.call(this._longMonthsParse, s),
                r !== -1 ? r : null)) : (r = pi.call(this._longMonthsParse, s),
                r !== -1 ? r : (r = pi.call(this._shortMonthsParse, s),
                r !== -1 ? r : null))
            }
            function se(e, t, n) {
                var i, r, o;
                if (this._monthsParseExact)
                    return oe.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                i = 0; i < 12; i++) {
                    if (r = u([2e3, i]),
                    n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
                    n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
                    this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
                    n && "MMMM" === t && this._longMonthsParse[i].test(e))
                        return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                        return i;
                    if (!n && this._monthsParse[i].test(e))
                        return i
                }
            }
            function ae(e, t) {
                var n;
                if (!e.isValid())
                    return e;
                if ("string" == typeof t)
                    if (/^\d+$/.test(t))
                        t = v(t);
                    else if (t = e.localeData().monthsParse(t),
                    "number" != typeof t)
                        return e;
                return n = Math.min(e.date(), ne(e.year(), t)),
                e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
                e
            }
            function ue(e) {
                return null != e ? (ae(this, e),
                t.updateOffset(this, !0),
                this) : j(this, "Month")
            }
            function ce() {
                return ne(this.year(), this.month())
            }
            function le(e) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || fe.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
            }
            function de(e) {
                return this._monthsParseExact ? (s(this, "_monthsRegex") || fe.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
            }
            function fe() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, i = [], r = [], o = [];
                for (t = 0; t < 12; t++)
                    n = u([2e3, t]),
                    i.push(this.monthsShort(n, "")),
                    r.push(this.months(n, "")),
                    o.push(this.months(n, "")),
                    o.push(this.monthsShort(n, ""));
                for (i.sort(e),
                r.sort(e),
                o.sort(e),
                t = 0; t < 12; t++)
                    i[t] = Q(i[t]),
                    r[t] = Q(r[t]),
                    o[t] = Q(o[t]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
                this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
            }
            function he(e) {
                var t, n = e._a;
                return n && l(e).overflow === -2 && (t = n[Hi] < 0 || n[Hi] > 11 ? Hi : n[Ui] < 1 || n[Ui] > ne(n[ji], n[Hi]) ? Ui : n[zi] < 0 || n[zi] > 24 || 24 === n[zi] && (0 !== n[Bi] || 0 !== n[Gi] || 0 !== n[Vi]) ? zi : n[Bi] < 0 || n[Bi] > 59 ? Bi : n[Gi] < 0 || n[Gi] > 59 ? Gi : n[Vi] < 0 || n[Vi] > 999 ? Vi : -1,
                l(e)._overflowDayOfYear && (t < ji || t > Ui) && (t = Ui),
                l(e)._overflowWeeks && t === -1 && (t = qi),
                l(e)._overflowWeekday && t === -1 && (t = $i),
                l(e).overflow = t),
                e
            }
            function pe(e) {
                var t, n, i, r, o, s, a = e._i, u = er.exec(a) || tr.exec(a);
                if (u) {
                    for (l(e).iso = !0,
                    t = 0,
                    n = ir.length; t < n; t++)
                        if (ir[t][1].exec(u[1])) {
                            r = ir[t][0],
                            i = ir[t][2] !== !1;
                            break
                        }
                    if (null == r)
                        return void (e._isValid = !1);
                    if (u[3]) {
                        for (t = 0,
                        n = rr.length; t < n; t++)
                            if (rr[t][1].exec(u[3])) {
                                o = (u[2] || " ") + rr[t][0];
                                break
                            }
                        if (null == o)
                            return void (e._isValid = !1)
                    }
                    if (!i && null != o)
                        return void (e._isValid = !1);
                    if (u[4]) {
                        if (!nr.exec(u[4]))
                            return void (e._isValid = !1);
                        s = "Z"
                    }
                    e._f = r + (o || "") + (s || ""),
                    Ce(e)
                } else
                    e._isValid = !1
            }
            function me(e) {
                var n = or.exec(e._i);
                return null !== n ? void (e._d = new Date(+n[1])) : (pe(e),
                void (e._isValid === !1 && (delete e._isValid,
                t.createFromInputFallback(e))))
            }
            function ge(e, t, n, i, r, o, s) {
                var a = new Date(e,t,n,i,r,o,s);
                return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e),
                a
            }
            function ye(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
                t
            }
            function ve(e) {
                return _e(e) ? 366 : 365
            }
            function _e(e) {
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            }
            function we() {
                return _e(this.year())
            }
            function be(e, t, n) {
                var i = 7 + t - n
                  , r = (7 + ye(e, 0, i).getUTCDay() - t) % 7;
                return -r + i - 1
            }
            function Se(e, t, n, i, r) {
                var o, s, a = (7 + n - i) % 7, u = be(e, i, r), c = 1 + 7 * (t - 1) + a + u;
                return c <= 0 ? (o = e - 1,
                s = ve(o) + c) : c > ve(e) ? (o = e + 1,
                s = c - ve(e)) : (o = e,
                s = c),
                {
                    year: o,
                    dayOfYear: s
                }
            }
            function ke(e, t, n) {
                var i, r, o = be(e.year(), t, n), s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
                return s < 1 ? (r = e.year() - 1,
                i = s + xe(r, t, n)) : s > xe(e.year(), t, n) ? (i = s - xe(e.year(), t, n),
                r = e.year() + 1) : (r = e.year(),
                i = s),
                {
                    week: i,
                    year: r
                }
            }
            function xe(e, t, n) {
                var i = be(e, t, n)
                  , r = be(e + 1, t, n);
                return (ve(e) - i + r) / 7
            }
            function Me(e, t, n) {
                return null != e ? e : null != t ? t : n
            }
            function De(e) {
                var n = new Date(t.now());
                return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
            }
            function Oe(e) {
                var t, n, i, r, o = [];
                if (!e._d) {
                    for (i = De(e),
                    e._w && null == e._a[Ui] && null == e._a[Hi] && Ee(e),
                    e._dayOfYear && (r = Me(e._a[ji], i[ji]),
                    e._dayOfYear > ve(r) && (l(e)._overflowDayOfYear = !0),
                    n = ye(r, 0, e._dayOfYear),
                    e._a[Hi] = n.getUTCMonth(),
                    e._a[Ui] = n.getUTCDate()),
                    t = 0; t < 3 && null == e._a[t]; ++t)
                        e._a[t] = o[t] = i[t];
                    for (; t < 7; t++)
                        e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[zi] && 0 === e._a[Bi] && 0 === e._a[Gi] && 0 === e._a[Vi] && (e._nextDay = !0,
                    e._a[zi] = 0),
                    e._d = (e._useUTC ? ye : ge).apply(null, o),
                    null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                    e._nextDay && (e._a[zi] = 24)
                }
            }
            function Ee(e) {
                var t, n, i, r, o, s, a, u;
                t = e._w,
                null != t.GG || null != t.W || null != t.E ? (o = 1,
                s = 4,
                n = Me(t.GG, e._a[ji], ke(Le(), 1, 4).year),
                i = Me(t.W, 1),
                r = Me(t.E, 1),
                (r < 1 || r > 7) && (u = !0)) : (o = e._locale._week.dow,
                s = e._locale._week.doy,
                n = Me(t.gg, e._a[ji], ke(Le(), o, s).year),
                i = Me(t.w, 1),
                null != t.d ? (r = t.d,
                (r < 0 || r > 6) && (u = !0)) : null != t.e ? (r = t.e + o,
                (t.e < 0 || t.e > 6) && (u = !0)) : r = o),
                i < 1 || i > xe(n, o, s) ? l(e)._overflowWeeks = !0 : null != u ? l(e)._overflowWeekday = !0 : (a = Se(n, i, r, o, s),
                e._a[ji] = a.year,
                e._dayOfYear = a.dayOfYear)
            }
            function Ce(e) {
                if (e._f === t.ISO_8601)
                    return void pe(e);
                e._a = [],
                l(e).empty = !0;
                var n, i, r, o, s, a = "" + e._i, u = a.length, c = 0;
                for (r = $(e._f, e._locale).match(yi) || [],
                n = 0; n < r.length; n++)
                    o = r[n],
                    i = (a.match(J(o, e)) || [])[0],
                    i && (s = a.substr(0, a.indexOf(i)),
                    s.length > 0 && l(e).unusedInput.push(s),
                    a = a.slice(a.indexOf(i) + i.length),
                    c += i.length),
                    wi[o] ? (i ? l(e).empty = !1 : l(e).unusedTokens.push(o),
                    te(o, i, e)) : e._strict && !i && l(e).unusedTokens.push(o);
                l(e).charsLeftOver = u - c,
                a.length > 0 && l(e).unusedInput.push(a),
                l(e).bigHour === !0 && e._a[zi] <= 12 && e._a[zi] > 0 && (l(e).bigHour = void 0),
                l(e).parsedDateParts = e._a.slice(0),
                l(e).meridiem = e._meridiem,
                e._a[zi] = Te(e._locale, e._a[zi], e._meridiem),
                Oe(e),
                he(e)
            }
            function Te(e, t, n) {
                var i;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n),
                i && t < 12 && (t += 12),
                i || 12 !== t || (t = 0),
                t) : t
            }
            function Re(e) {
                var t, n, i, r, o;
                if (0 === e._f.length)
                    return l(e).invalidFormat = !0,
                    void (e._d = new Date(NaN));
                for (r = 0; r < e._f.length; r++)
                    o = 0,
                    t = p({}, e),
                    null != e._useUTC && (t._useUTC = e._useUTC),
                    t._f = e._f[r],
                    Ce(t),
                    d(t) && (o += l(t).charsLeftOver,
                    o += 10 * l(t).unusedTokens.length,
                    l(t).score = o,
                    (null == i || o < i) && (i = o,
                    n = t));
                a(e, n || t)
            }
            function We(e) {
                if (!e._d) {
                    var t = A(e._i);
                    e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                        return e && parseInt(e, 10)
                    }),
                    Oe(e)
                }
            }
            function Pe(e) {
                var t = new m(he(Ye(e)));
                return t._nextDay && (t.add(1, "d"),
                t._nextDay = void 0),
                t
            }
            function Ye(e) {
                var t = e._i
                  , n = e._f;
                return e._locale = e._locale || Y(e._l),
                null === t || void 0 === n && "" === t ? f({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                g(t) ? new m(he(t)) : (i(n) ? Re(e) : n ? Ce(e) : r(t) ? e._d = t : Ie(e),
                d(e) || (e._d = null),
                e))
            }
            function Ie(e) {
                var n = e._i;
                void 0 === n ? e._d = new Date(t.now()) : r(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? me(e) : i(n) ? (e._a = o(n.slice(0), function(e) {
                    return parseInt(e, 10)
                }),
                Oe(e)) : "object" == typeof n ? We(e) : "number" == typeof n ? e._d = new Date(n) : t.createFromInputFallback(e)
            }
            function Ne(e, t, n, i, r) {
                var o = {};
                return "boolean" == typeof n && (i = n,
                n = void 0),
                o._isAMomentObject = !0,
                o._useUTC = o._isUTC = r,
                o._l = n,
                o._i = e,
                o._f = t,
                o._strict = i,
                Pe(o)
            }
            function Le(e, t, n, i) {
                return Ne(e, t, n, i, !1)
            }
            function Ae(e, t) {
                var n, r;
                if (1 === t.length && i(t[0]) && (t = t[0]),
                !t.length)
                    return Le();
                for (n = t[0],
                r = 1; r < t.length; ++r)
                    t[r].isValid() && !t[r][e](n) || (n = t[r]);
                return n
            }
            function Fe() {
                var e = [].slice.call(arguments, 0);
                return Ae("isBefore", e)
            }
            function je() {
                var e = [].slice.call(arguments, 0);
                return Ae("isAfter", e)
            }
            function He(e) {
                var t = A(e)
                  , n = t.year || 0
                  , i = t.quarter || 0
                  , r = t.month || 0
                  , o = t.week || 0
                  , s = t.day || 0
                  , a = t.hour || 0
                  , u = t.minute || 0
                  , c = t.second || 0
                  , l = t.millisecond || 0;
                this._milliseconds = +l + 1e3 * c + 6e4 * u + 1e3 * a * 60 * 60,
                this._days = +s + 7 * o,
                this._months = +r + 3 * i + 12 * n,
                this._data = {},
                this._locale = Y(),
                this._bubble()
            }
            function Ue(e) {
                return e instanceof He
            }
            function ze(e, t) {
                B(e, 0, 0, function() {
                    var e = this.utcOffset()
                      , n = "+";
                    return e < 0 && (e = -e,
                    n = "-"),
                    n + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
                })
            }
            function Be(e, t) {
                var n = (t || "").match(e) || []
                  , i = n[n.length - 1] || []
                  , r = (i + "").match(lr) || ["-", 0, 0]
                  , o = +(60 * r[1]) + v(r[2]);
                return "+" === r[0] ? o : -o
            }
            function Ge(e, n) {
                var i, o;
                return n._isUTC ? (i = n.clone(),
                o = (g(e) || r(e) ? e.valueOf() : Le(e).valueOf()) - i.valueOf(),
                i._d.setTime(i._d.valueOf() + o),
                t.updateOffset(i, !1),
                i) : Le(e).local()
            }
            function Ve(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }
            function qe(e, n) {
                var i, r = this._offset || 0;
                return this.isValid() ? null != e ? ("string" == typeof e ? e = Be(Ii, e) : Math.abs(e) < 16 && (e *= 60),
                !this._isUTC && n && (i = Ve(this)),
                this._offset = e,
                this._isUTC = !0,
                null != i && this.add(i, "m"),
                r !== e && (!n || this._changeInProgress ? lt(this, rt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                t.updateOffset(this, !0),
                this._changeInProgress = null)),
                this) : this._isUTC ? r : Ve(this) : null != e ? this : NaN
            }
            function $e(e, t) {
                return null != e ? ("string" != typeof e && (e = -e),
                this.utcOffset(e, t),
                this) : -this.utcOffset()
            }
            function Ze(e) {
                return this.utcOffset(0, e)
            }
            function Je(e) {
                return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
                e && this.subtract(Ve(this), "m")),
                this
            }
            function Xe() {
                return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Be(Yi, this._i)),
                this
            }
            function Qe(e) {
                return !!this.isValid() && (e = e ? Le(e).utcOffset() : 0,
                (this.utcOffset() - e) % 60 === 0)
            }
            function Ke() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }
            function et() {
                if (!h(this._isDSTShifted))
                    return this._isDSTShifted;
                var e = {};
                if (p(e, this),
                e = Ye(e),
                e._a) {
                    var t = e._isUTC ? u(e._a) : Le(e._a);
                    this._isDSTShifted = this.isValid() && _(e._a, t.toArray()) > 0
                } else
                    this._isDSTShifted = !1;
                return this._isDSTShifted
            }
            function tt() {
                return !!this.isValid() && !this._isUTC
            }
            function nt() {
                return !!this.isValid() && this._isUTC
            }
            function it() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }
            function rt(e, t) {
                var n, i, r, o = e, a = null;
                return Ue(e) ? o = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : "number" == typeof e ? (o = {},
                t ? o[t] = e : o.milliseconds = e) : (a = dr.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
                o = {
                    y: 0,
                    d: v(a[Ui]) * n,
                    h: v(a[zi]) * n,
                    m: v(a[Bi]) * n,
                    s: v(a[Gi]) * n,
                    ms: v(a[Vi]) * n
                }) : (a = fr.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
                o = {
                    y: ot(a[2], n),
                    M: ot(a[3], n),
                    w: ot(a[4], n),
                    d: ot(a[5], n),
                    h: ot(a[6], n),
                    m: ot(a[7], n),
                    s: ot(a[8], n)
                }) : null == o ? o = {} : "object" == typeof o && ("from"in o || "to"in o) && (r = at(Le(o.from), Le(o.to)),
                o = {},
                o.ms = r.milliseconds,
                o.M = r.months),
                i = new He(o),
                Ue(e) && s(e, "_locale") && (i._locale = e._locale),
                i
            }
            function ot(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }
            function st(e, t) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
                e.clone().add(n.months, "M").isAfter(t) && --n.months,
                n.milliseconds = +t - +e.clone().add(n.months, "M"),
                n
            }
            function at(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = Ge(t, e),
                e.isBefore(t) ? n = st(e, t) : (n = st(t, e),
                n.milliseconds = -n.milliseconds,
                n.months = -n.months),
                n) : {
                    milliseconds: 0,
                    months: 0
                }
            }
            function ut(e) {
                return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
            }
            function ct(e, t) {
                return function(n, i) {
                    var r, o;
                    return null === i || isNaN(+i) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."),
                    o = n,
                    n = i,
                    i = o),
                    n = "string" == typeof n ? +n : n,
                    r = rt(n, i),
                    lt(this, r, e),
                    this
                }
            }
            function lt(e, n, i, r) {
                var o = n._milliseconds
                  , s = ut(n._days)
                  , a = ut(n._months);
                e.isValid() && (r = null == r || r,
                o && e._d.setTime(e._d.valueOf() + o * i),
                s && H(e, "Date", j(e, "Date") + s * i),
                a && ae(e, j(e, "Month") + a * i),
                r && t.updateOffset(e, s || a))
            }
            function dt(e, t) {
                var n = e || Le()
                  , i = Ge(n, this).startOf("day")
                  , r = this.diff(i, "days", !0)
                  , o = r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse"
                  , s = t && (k(t[o]) ? t[o]() : t[o]);
                return this.format(s || this.localeData().calendar(o, this, Le(n)))
            }
            function ft() {
                return new m(this)
            }
            function ht(e, t) {
                var n = g(e) ? e : Le(e);
                return !(!this.isValid() || !n.isValid()) && (t = L(h(t) ? "millisecond" : t),
                "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }
            function pt(e, t) {
                var n = g(e) ? e : Le(e);
                return !(!this.isValid() || !n.isValid()) && (t = L(h(t) ? "millisecond" : t),
                "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }
            function mt(e, t, n, i) {
                return i = i || "()",
                ("(" === i[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }
            function gt(e, t) {
                var n, i = g(e) ? e : Le(e);
                return !(!this.isValid() || !i.isValid()) && (t = L(t || "millisecond"),
                "millisecond" === t ? this.valueOf() === i.valueOf() : (n = i.valueOf(),
                this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }
            function yt(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }
            function vt(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }
            function _t(e, t, n) {
                var i, r, o, s;
                return this.isValid() ? (i = Ge(e, this),
                i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()),
                t = L(t),
                "year" === t || "month" === t || "quarter" === t ? (s = wt(this, i),
                "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (o = this - i,
                s = "second" === t ? o / 1e3 : "minute" === t ? o / 6e4 : "hour" === t ? o / 36e5 : "day" === t ? (o - r) / 864e5 : "week" === t ? (o - r) / 6048e5 : o),
                n ? s : y(s)) : NaN) : NaN
            }
            function wt(e, t) {
                var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()), o = e.clone().add(r, "months");
                return t - o < 0 ? (n = e.clone().add(r - 1, "months"),
                i = (t - o) / (o - n)) : (n = e.clone().add(r + 1, "months"),
                i = (t - o) / (n - o)),
                -(r + i) || 0
            }
            function bt() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }
            function St() {
                var e = this.clone().utc();
                return 0 < e.year() && e.year() <= 9999 ? k(Date.prototype.toISOString) ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }
            function kt(e) {
                e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                var n = q(this, e);
                return this.localeData().postformat(n)
            }
            function xt(e, t) {
                return this.isValid() && (g(e) && e.isValid() || Le(e).isValid()) ? rt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            function Mt(e) {
                return this.from(Le(), e)
            }
            function Dt(e, t) {
                return this.isValid() && (g(e) && e.isValid() || Le(e).isValid()) ? rt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }
            function Ot(e) {
                return this.to(Le(), e)
            }
            function Et(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = Y(e),
                null != t && (this._locale = t),
                this)
            }
            function Ct() {
                return this._locale
            }
            function Tt(e) {
                switch (e = L(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
                }
                return "week" === e && this.weekday(0),
                "isoWeek" === e && this.isoWeekday(1),
                "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
                this
            }
            function Rt(e) {
                return e = L(e),
                void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"),
                this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }
            function Wt() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }
            function Pt() {
                return Math.floor(this.valueOf() / 1e3)
            }
            function Yt() {
                return this._offset ? new Date(this.valueOf()) : this._d
            }
            function It() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }
            function Nt() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }
            function Lt() {
                return this.isValid() ? this.toISOString() : null
            }
            function At() {
                return d(this)
            }
            function Ft() {
                return a({}, l(this))
            }
            function jt() {
                return l(this).overflow
            }
            function Ht() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            function Ut(e, t) {
                B(0, [e, e.length], 0, t)
            }
            function zt(e) {
                return qt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }
            function Bt(e) {
                return qt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }
            function Gt() {
                return xe(this.year(), 1, 4)
            }
            function Vt() {
                var e = this.localeData()._week;
                return xe(this.year(), e.dow, e.doy)
            }
            function qt(e, t, n, i, r) {
                var o;
                return null == e ? ke(this, i, r).year : (o = xe(e, i, r),
                t > o && (t = o),
                $t.call(this, e, t, n, i, r))
            }
            function $t(e, t, n, i, r) {
                var o = Se(e, t, n, i, r)
                  , s = ye(o.year, 0, o.dayOfYear);
                return this.year(s.getUTCFullYear()),
                this.month(s.getUTCMonth()),
                this.date(s.getUTCDate()),
                this
            }
            function Zt(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }
            function Jt(e) {
                return ke(e, this._week.dow, this._week.doy).week
            }
            function Xt() {
                return this._week.dow
            }
            function Qt() {
                return this._week.doy
            }
            function Kt(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            function en(e) {
                var t = ke(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }
            function tn(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e),
                "number" == typeof e ? e : null) : parseInt(e, 10)
            }
            function nn(e, t) {
                return i(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
            }
            function rn(e) {
                return this._weekdaysShort[e.day()]
            }
            function on(e) {
                return this._weekdaysMin[e.day()]
            }
            function sn(e, t, n) {
                var i, r, o, s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0; i < 7; ++i)
                        o = u([2e3, 1]).day(i),
                        this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                        this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
                return n ? "dddd" === t ? (r = pi.call(this._weekdaysParse, s),
                r !== -1 ? r : null) : "ddd" === t ? (r = pi.call(this._shortWeekdaysParse, s),
                r !== -1 ? r : null) : (r = pi.call(this._minWeekdaysParse, s),
                r !== -1 ? r : null) : "dddd" === t ? (r = pi.call(this._weekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._shortWeekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._minWeekdaysParse, s),
                r !== -1 ? r : null))) : "ddd" === t ? (r = pi.call(this._shortWeekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._weekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._minWeekdaysParse, s),
                r !== -1 ? r : null))) : (r = pi.call(this._minWeekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._weekdaysParse, s),
                r !== -1 ? r : (r = pi.call(this._shortWeekdaysParse, s),
                r !== -1 ? r : null)))
            }
            function an(e, t, n) {
                var i, r, o;
                if (this._weekdaysParseExact)
                    return sn.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                i = 0; i < 7; i++) {
                    if (r = u([2e3, 1]).day(i),
                    n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$","i"),
                    this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$","i"),
                    this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$","i")),
                    this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
                    this._weekdaysParse[i] = new RegExp(o.replace(".", ""),"i")),
                    n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                        return i;
                    if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                        return i;
                    if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                        return i;
                    if (!n && this._weekdaysParse[i].test(e))
                        return i
                }
            }
            function un(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = tn(e, this.localeData()),
                this.add(e - t, "d")) : t
            }
            function cn(e) {
                if (!this.isValid())
                    return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }
            function ln(e) {
                return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
            }
            function dn(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || pn.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
            }
            function fn(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || pn.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
            }
            function hn(e) {
                return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || pn.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
            }
            function pn() {
                function e(e, t) {
                    return t.length - e.length
                }
                var t, n, i, r, o, s = [], a = [], c = [], l = [];
                for (t = 0; t < 7; t++)
                    n = u([2e3, 1]).day(t),
                    i = this.weekdaysMin(n, ""),
                    r = this.weekdaysShort(n, ""),
                    o = this.weekdays(n, ""),
                    s.push(i),
                    a.push(r),
                    c.push(o),
                    l.push(i),
                    l.push(r),
                    l.push(o);
                for (s.sort(e),
                a.sort(e),
                c.sort(e),
                l.sort(e),
                t = 0; t < 7; t++)
                    a[t] = Q(a[t]),
                    c[t] = Q(c[t]),
                    l[t] = Q(l[t]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")","i"),
                this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
                this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
            }
            function mn(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }
            function gn() {
                return this.hours() % 12 || 12
            }
            function yn() {
                return this.hours() || 24
            }
            function vn(e, t) {
                B(e, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }
            function _n(e, t) {
                return t._meridiemParse
            }
            function wn(e) {
                return "p" === (e + "").toLowerCase().charAt(0);
            }
            function bn(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }
            function Sn(e, t) {
                t[Vi] = v(1e3 * ("0." + e))
            }
            function kn() {
                return this._isUTC ? "UTC" : ""
            }
            function xn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            function Mn(e) {
                return Le(1e3 * e)
            }
            function Dn() {
                return Le.apply(null, arguments).parseZone()
            }
            function On(e, t, n) {
                var i = this._calendar[e];
                return k(i) ? i.call(t, n) : i
            }
            function En(e) {
                var t = this._longDateFormat[e]
                  , n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }),
                this._longDateFormat[e])
            }
            function Cn() {
                return this._invalidDate
            }
            function Tn(e) {
                return this._ordinal.replace("%d", e)
            }
            function Rn(e) {
                return e
            }
            function Wn(e, t, n, i) {
                var r = this._relativeTime[n];
                return k(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
            }
            function Pn(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return k(n) ? n(t) : n.replace(/%s/i, t)
            }
            function Yn(e, t, n, i) {
                var r = Y()
                  , o = u().set(i, t);
                return r[n](o, e)
            }
            function In(e, t, n) {
                if ("number" == typeof e && (t = e,
                e = void 0),
                e = e || "",
                null != t)
                    return Yn(e, t, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++)
                    r[i] = Yn(e, i, n, "month");
                return r
            }
            function Nn(e, t, n, i) {
                "boolean" == typeof e ? ("number" == typeof t && (n = t,
                t = void 0),
                t = t || "") : (t = e,
                n = t,
                e = !1,
                "number" == typeof t && (n = t,
                t = void 0),
                t = t || "");
                var r = Y()
                  , o = e ? r._week.dow : 0;
                if (null != n)
                    return Yn(t, (n + o) % 7, i, "day");
                var s, a = [];
                for (s = 0; s < 7; s++)
                    a[s] = Yn(t, (s + o) % 7, i, "day");
                return a
            }
            function Ln(e, t) {
                return In(e, t, "months")
            }
            function An(e, t) {
                return In(e, t, "monthsShort")
            }
            function Fn(e, t, n) {
                return Nn(e, t, n, "weekdays")
            }
            function jn(e, t, n) {
                return Nn(e, t, n, "weekdaysShort")
            }
            function Hn(e, t, n) {
                return Nn(e, t, n, "weekdaysMin")
            }
            function Un() {
                var e = this._data;
                return this._milliseconds = Fr(this._milliseconds),
                this._days = Fr(this._days),
                this._months = Fr(this._months),
                e.milliseconds = Fr(e.milliseconds),
                e.seconds = Fr(e.seconds),
                e.minutes = Fr(e.minutes),
                e.hours = Fr(e.hours),
                e.months = Fr(e.months),
                e.years = Fr(e.years),
                this
            }
            function zn(e, t, n, i) {
                var r = rt(t, n);
                return e._milliseconds += i * r._milliseconds,
                e._days += i * r._days,
                e._months += i * r._months,
                e._bubble()
            }
            function Bn(e, t) {
                return zn(this, e, t, 1)
            }
            function Gn(e, t) {
                return zn(this, e, t, -1)
            }
            function Vn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }
            function qn() {
                var e, t, n, i, r, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
                return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Vn(Zn(a) + s),
                s = 0,
                a = 0),
                u.milliseconds = o % 1e3,
                e = y(o / 1e3),
                u.seconds = e % 60,
                t = y(e / 60),
                u.minutes = t % 60,
                n = y(t / 60),
                u.hours = n % 24,
                s += y(n / 24),
                r = y($n(s)),
                a += r,
                s -= Vn(Zn(r)),
                i = y(a / 12),
                a %= 12,
                u.days = s,
                u.months = a,
                u.years = i,
                this
            }
            function $n(e) {
                return 4800 * e / 146097
            }
            function Zn(e) {
                return 146097 * e / 4800
            }
            function Jn(e) {
                var t, n, i = this._milliseconds;
                if (e = L(e),
                "month" === e || "year" === e)
                    return t = this._days + i / 864e5,
                    n = this._months + $n(t),
                    "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(Zn(this._months)),
                e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
                }
            }
            function Xn() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
            }
            function Qn(e) {
                return function() {
                    return this.as(e)
                }
            }
            function Kn(e) {
                return e = L(e),
                this[e + "s"]()
            }
            function ei(e) {
                return function() {
                    return this._data[e]
                }
            }
            function ti() {
                return y(this.days() / 7)
            }
            function ni(e, t, n, i, r) {
                return r.relativeTime(t || 1, !!n, e, i)
            }
            function ii(e, t, n) {
                var i = rt(e).abs()
                  , r = to(i.as("s"))
                  , o = to(i.as("m"))
                  , s = to(i.as("h"))
                  , a = to(i.as("d"))
                  , u = to(i.as("M"))
                  , c = to(i.as("y"))
                  , l = r < no.s && ["s", r] || o <= 1 && ["m"] || o < no.m && ["mm", o] || s <= 1 && ["h"] || s < no.h && ["hh", s] || a <= 1 && ["d"] || a < no.d && ["dd", a] || u <= 1 && ["M"] || u < no.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c];
                return l[2] = t,
                l[3] = +e > 0,
                l[4] = n,
                ni.apply(null, l)
            }
            function ri(e, t) {
                return void 0 !== no[e] && (void 0 === t ? no[e] : (no[e] = t,
                !0))
            }
            function oi(e) {
                var t = this.localeData()
                  , n = ii(this, !e, t);
                return e && (n = t.pastFuture(+this, n)),
                t.postformat(n)
            }
            function si() {
                var e, t, n, i = io(this._milliseconds) / 1e3, r = io(this._days), o = io(this._months);
                e = y(i / 60),
                t = y(e / 60),
                i %= 60,
                e %= 60,
                n = y(o / 12),
                o %= 12;
                var s = n
                  , a = o
                  , u = r
                  , c = t
                  , l = e
                  , d = i
                  , f = this.asSeconds();
                return f ? (f < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (u ? u + "D" : "") + (c || l || d ? "T" : "") + (c ? c + "H" : "") + (l ? l + "M" : "") + (d ? d + "S" : "") : "P0D"
            }
            var ai, ui;
            ui = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                    if (i in t && e.call(this, t[i], i, t))
                        return !0;
                return !1
            }
            ;
            var ci = t.momentProperties = []
              , li = !1
              , di = {};
            t.suppressDeprecationWarnings = !1,
            t.deprecationHandler = null;
            var fi;
            fi = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e)
                    s(e, t) && n.push(t);
                return n
            }
            ;
            var hi, pi, mi = {}, gi = {}, yi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, vi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, _i = {}, wi = {}, bi = /\d/, Si = /\d\d/, ki = /\d{3}/, xi = /\d{4}/, Mi = /[+-]?\d{6}/, Di = /\d\d?/, Oi = /\d\d\d\d?/, Ei = /\d\d\d\d\d\d?/, Ci = /\d{1,3}/, Ti = /\d{1,4}/, Ri = /[+-]?\d{1,6}/, Wi = /\d+/, Pi = /[+-]?\d+/, Yi = /Z|[+-]\d\d:?\d\d/gi, Ii = /Z|[+-]\d\d(?::?\d\d)?/gi, Ni = /[+-]?\d+(\.\d{1,3})?/, Li = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ai = {}, Fi = {}, ji = 0, Hi = 1, Ui = 2, zi = 3, Bi = 4, Gi = 5, Vi = 6, qi = 7, $i = 8;
            pi = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t)
                    if (this[t] === e)
                        return t;
                return -1
            }
            ,
            B("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }),
            B("MMM", 0, 0, function(e) {
                return this.localeData().monthsShort(this, e)
            }),
            B("MMMM", 0, 0, function(e) {
                return this.localeData().months(this, e)
            }),
            N("month", "M"),
            Z("M", Di),
            Z("MM", Di, Si),
            Z("MMM", function(e, t) {
                return t.monthsShortRegex(e)
            }),
            Z("MMMM", function(e, t) {
                return t.monthsRegex(e)
            }),
            K(["M", "MM"], function(e, t) {
                t[Hi] = v(e) - 1
            }),
            K(["MMM", "MMMM"], function(e, t, n, i) {
                var r = n._locale.monthsParse(e, i, n._strict);
                null != r ? t[Hi] = r : l(n).invalidMonth = e
            });
            var Zi = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/
              , Ji = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
              , Xi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
              , Qi = Li
              , Ki = Li
              , er = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
              , tr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
              , nr = /Z|[+-]\d\d(?::?\d\d)?/
              , ir = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
              , rr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
              , or = /^\/?Date\((\-?\d+)/i;
            t.createFromInputFallback = b("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }),
            B("Y", 0, 0, function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }),
            B(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }),
            B(0, ["YYYY", 4], 0, "year"),
            B(0, ["YYYYY", 5], 0, "year"),
            B(0, ["YYYYYY", 6, !0], 0, "year"),
            N("year", "y"),
            Z("Y", Pi),
            Z("YY", Di, Si),
            Z("YYYY", Ti, xi),
            Z("YYYYY", Ri, Mi),
            Z("YYYYYY", Ri, Mi),
            K(["YYYYY", "YYYYYY"], ji),
            K("YYYY", function(e, n) {
                n[ji] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
            }),
            K("YY", function(e, n) {
                n[ji] = t.parseTwoDigitYear(e)
            }),
            K("Y", function(e, t) {
                t[ji] = parseInt(e, 10)
            }),
            t.parseTwoDigitYear = function(e) {
                return v(e) + (v(e) > 68 ? 1900 : 2e3)
            }
            ;
            var sr = F("FullYear", !0);
            t.ISO_8601 = function() {}
            ;
            var ar = b("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Le.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : f()
            })
              , ur = b("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Le.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : f()
            })
              , cr = function() {
                return Date.now ? Date.now() : +new Date
            };
            ze("Z", ":"),
            ze("ZZ", ""),
            Z("Z", Ii),
            Z("ZZ", Ii),
            K(["Z", "ZZ"], function(e, t, n) {
                n._useUTC = !0,
                n._tzm = Be(Ii, e)
            });
            var lr = /([\+\-]|\d\d)/gi;
            t.updateOffset = function() {}
            ;
            var dr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/
              , fr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            rt.fn = He.prototype;
            var hr = ct(1, "add")
              , pr = ct(-1, "subtract");
            t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var mr = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            B(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }),
            B(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }),
            Ut("gggg", "weekYear"),
            Ut("ggggg", "weekYear"),
            Ut("GGGG", "isoWeekYear"),
            Ut("GGGGG", "isoWeekYear"),
            N("weekYear", "gg"),
            N("isoWeekYear", "GG"),
            Z("G", Pi),
            Z("g", Pi),
            Z("GG", Di, Si),
            Z("gg", Di, Si),
            Z("GGGG", Ti, xi),
            Z("gggg", Ti, xi),
            Z("GGGGG", Ri, Mi),
            Z("ggggg", Ri, Mi),
            ee(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
                t[i.substr(0, 2)] = v(e)
            }),
            ee(["gg", "GG"], function(e, n, i, r) {
                n[r] = t.parseTwoDigitYear(e)
            }),
            B("Q", 0, "Qo", "quarter"),
            N("quarter", "Q"),
            Z("Q", bi),
            K("Q", function(e, t) {
                t[Hi] = 3 * (v(e) - 1)
            }),
            B("w", ["ww", 2], "wo", "week"),
            B("W", ["WW", 2], "Wo", "isoWeek"),
            N("week", "w"),
            N("isoWeek", "W"),
            Z("w", Di),
            Z("ww", Di, Si),
            Z("W", Di),
            Z("WW", Di, Si),
            ee(["w", "ww", "W", "WW"], function(e, t, n, i) {
                t[i.substr(0, 1)] = v(e)
            });
            var gr = {
                dow: 0,
                doy: 6
            };
            B("D", ["DD", 2], "Do", "date"),
            N("date", "D"),
            Z("D", Di),
            Z("DD", Di, Si),
            Z("Do", function(e, t) {
                return e ? t._ordinalParse : t._ordinalParseLenient
            }),
            K(["D", "DD"], Ui),
            K("Do", function(e, t) {
                t[Ui] = v(e.match(Di)[0], 10)
            });
            var yr = F("Date", !0);
            B("d", 0, "do", "day"),
            B("dd", 0, 0, function(e) {
                return this.localeData().weekdaysMin(this, e)
            }),
            B("ddd", 0, 0, function(e) {
                return this.localeData().weekdaysShort(this, e)
            }),
            B("dddd", 0, 0, function(e) {
                return this.localeData().weekdays(this, e)
            }),
            B("e", 0, 0, "weekday"),
            B("E", 0, 0, "isoWeekday"),
            N("day", "d"),
            N("weekday", "e"),
            N("isoWeekday", "E"),
            Z("d", Di),
            Z("e", Di),
            Z("E", Di),
            Z("dd", function(e, t) {
                return t.weekdaysMinRegex(e)
            }),
            Z("ddd", function(e, t) {
                return t.weekdaysShortRegex(e)
            }),
            Z("dddd", function(e, t) {
                return t.weekdaysRegex(e)
            }),
            ee(["dd", "ddd", "dddd"], function(e, t, n, i) {
                var r = n._locale.weekdaysParse(e, i, n._strict);
                null != r ? t.d = r : l(n).invalidWeekday = e
            }),
            ee(["d", "e", "E"], function(e, t, n, i) {
                t[i] = v(e)
            });
            var vr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
              , _r = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
              , wr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
              , br = Li
              , Sr = Li
              , kr = Li;
            B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            N("dayOfYear", "DDD"),
            Z("DDD", Ci),
            Z("DDDD", ki),
            K(["DDD", "DDDD"], function(e, t, n) {
                n._dayOfYear = v(e)
            }),
            B("H", ["HH", 2], 0, "hour"),
            B("h", ["hh", 2], 0, gn),
            B("k", ["kk", 2], 0, yn),
            B("hmm", 0, 0, function() {
                return "" + gn.apply(this) + z(this.minutes(), 2)
            }),
            B("hmmss", 0, 0, function() {
                return "" + gn.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
            }),
            B("Hmm", 0, 0, function() {
                return "" + this.hours() + z(this.minutes(), 2)
            }),
            B("Hmmss", 0, 0, function() {
                return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
            }),
            vn("a", !0),
            vn("A", !1),
            N("hour", "h"),
            Z("a", _n),
            Z("A", _n),
            Z("H", Di),
            Z("h", Di),
            Z("HH", Di, Si),
            Z("hh", Di, Si),
            Z("hmm", Oi),
            Z("hmmss", Ei),
            Z("Hmm", Oi),
            Z("Hmmss", Ei),
            K(["H", "HH"], zi),
            K(["a", "A"], function(e, t, n) {
                n._isPm = n._locale.isPM(e),
                n._meridiem = e
            }),
            K(["h", "hh"], function(e, t, n) {
                t[zi] = v(e),
                l(n).bigHour = !0
            }),
            K("hmm", function(e, t, n) {
                var i = e.length - 2;
                t[zi] = v(e.substr(0, i)),
                t[Bi] = v(e.substr(i)),
                l(n).bigHour = !0
            }),
            K("hmmss", function(e, t, n) {
                var i = e.length - 4
                  , r = e.length - 2;
                t[zi] = v(e.substr(0, i)),
                t[Bi] = v(e.substr(i, 2)),
                t[Gi] = v(e.substr(r)),
                l(n).bigHour = !0
            }),
            K("Hmm", function(e, t, n) {
                var i = e.length - 2;
                t[zi] = v(e.substr(0, i)),
                t[Bi] = v(e.substr(i))
            }),
            K("Hmmss", function(e, t, n) {
                var i = e.length - 4
                  , r = e.length - 2;
                t[zi] = v(e.substr(0, i)),
                t[Bi] = v(e.substr(i, 2)),
                t[Gi] = v(e.substr(r))
            });
            var xr = /[ap]\.?m?\.?/i
              , Mr = F("Hours", !0);
            B("m", ["mm", 2], 0, "minute"),
            N("minute", "m"),
            Z("m", Di),
            Z("mm", Di, Si),
            K(["m", "mm"], Bi);
            var Dr = F("Minutes", !1);
            B("s", ["ss", 2], 0, "second"),
            N("second", "s"),
            Z("s", Di),
            Z("ss", Di, Si),
            K(["s", "ss"], Gi);
            var Or = F("Seconds", !1);
            B("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }),
            B(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }),
            B(0, ["SSS", 3], 0, "millisecond"),
            B(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }),
            B(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }),
            B(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }),
            B(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }),
            B(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }),
            B(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }),
            N("millisecond", "ms"),
            Z("S", Ci, bi),
            Z("SS", Ci, Si),
            Z("SSS", Ci, ki);
            var Er;
            for (Er = "SSSS"; Er.length <= 9; Er += "S")
                Z(Er, Wi);
            for (Er = "S"; Er.length <= 9; Er += "S")
                K(Er, Sn);
            var Cr = F("Milliseconds", !1);
            B("z", 0, 0, "zoneAbbr"),
            B("zz", 0, 0, "zoneName");
            var Tr = m.prototype;
            Tr.add = hr,
            Tr.calendar = dt,
            Tr.clone = ft,
            Tr.diff = _t,
            Tr.endOf = Rt,
            Tr.format = kt,
            Tr.from = xt,
            Tr.fromNow = Mt,
            Tr.to = Dt,
            Tr.toNow = Ot,
            Tr.get = U,
            Tr.invalidAt = jt,
            Tr.isAfter = ht,
            Tr.isBefore = pt,
            Tr.isBetween = mt,
            Tr.isSame = gt,
            Tr.isSameOrAfter = yt,
            Tr.isSameOrBefore = vt,
            Tr.isValid = At,
            Tr.lang = mr,
            Tr.locale = Et,
            Tr.localeData = Ct,
            Tr.max = ur,
            Tr.min = ar,
            Tr.parsingFlags = Ft,
            Tr.set = U,
            Tr.startOf = Tt,
            Tr.subtract = pr,
            Tr.toArray = It,
            Tr.toObject = Nt,
            Tr.toDate = Yt,
            Tr.toISOString = St,
            Tr.toJSON = Lt,
            Tr.toString = bt,
            Tr.unix = Pt,
            Tr.valueOf = Wt,
            Tr.creationData = Ht,
            Tr.year = sr,
            Tr.isLeapYear = we,
            Tr.weekYear = zt,
            Tr.isoWeekYear = Bt,
            Tr.quarter = Tr.quarters = Zt,
            Tr.month = ue,
            Tr.daysInMonth = ce,
            Tr.week = Tr.weeks = Kt,
            Tr.isoWeek = Tr.isoWeeks = en,
            Tr.weeksInYear = Vt,
            Tr.isoWeeksInYear = Gt,
            Tr.date = yr,
            Tr.day = Tr.days = un,
            Tr.weekday = cn,
            Tr.isoWeekday = ln,
            Tr.dayOfYear = mn,
            Tr.hour = Tr.hours = Mr,
            Tr.minute = Tr.minutes = Dr,
            Tr.second = Tr.seconds = Or,
            Tr.millisecond = Tr.milliseconds = Cr,
            Tr.utcOffset = qe,
            Tr.utc = Ze,
            Tr.local = Je,
            Tr.parseZone = Xe,
            Tr.hasAlignedHourOffset = Qe,
            Tr.isDST = Ke,
            Tr.isDSTShifted = et,
            Tr.isLocal = tt,
            Tr.isUtcOffset = nt,
            Tr.isUtc = it,
            Tr.isUTC = it,
            Tr.zoneAbbr = kn,
            Tr.zoneName = xn,
            Tr.dates = b("dates accessor is deprecated. Use date instead.", yr),
            Tr.months = b("months accessor is deprecated. Use month instead", ue),
            Tr.years = b("years accessor is deprecated. Use year instead", sr),
            Tr.zone = b("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", $e);
            var Rr = Tr
              , Wr = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            }
              , Pr = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }
              , Yr = "Invalid date"
              , Ir = "%d"
              , Nr = /\d{1,2}/
              , Lr = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            }
              , Ar = O.prototype;
            Ar._calendar = Wr,
            Ar.calendar = On,
            Ar._longDateFormat = Pr,
            Ar.longDateFormat = En,
            Ar._invalidDate = Yr,
            Ar.invalidDate = Cn,
            Ar._ordinal = Ir,
            Ar.ordinal = Tn,
            Ar._ordinalParse = Nr,
            Ar.preparse = Rn,
            Ar.postformat = Rn,
            Ar._relativeTime = Lr,
            Ar.relativeTime = Wn,
            Ar.pastFuture = Pn,
            Ar.set = M,
            Ar.months = ie,
            Ar._months = Ji,
            Ar.monthsShort = re,
            Ar._monthsShort = Xi,
            Ar.monthsParse = se,
            Ar._monthsRegex = Ki,
            Ar.monthsRegex = de,
            Ar._monthsShortRegex = Qi,
            Ar.monthsShortRegex = le,
            Ar.week = Jt,
            Ar._week = gr,
            Ar.firstDayOfYear = Qt,
            Ar.firstDayOfWeek = Xt,
            Ar.weekdays = nn,
            Ar._weekdays = vr,
            Ar.weekdaysMin = on,
            Ar._weekdaysMin = wr,
            Ar.weekdaysShort = rn,
            Ar._weekdaysShort = _r,
            Ar.weekdaysParse = an,
            Ar._weekdaysRegex = br,
            Ar.weekdaysRegex = dn,
            Ar._weekdaysShortRegex = Sr,
            Ar.weekdaysShortRegex = fn,
            Ar._weekdaysMinRegex = kr,
            Ar.weekdaysMinRegex = hn,
            Ar.isPM = wn,
            Ar._meridiemParse = xr,
            Ar.meridiem = bn,
            R("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10
                      , n = 1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }),
            t.lang = b("moment.lang is deprecated. Use moment.locale instead.", R),
            t.langData = b("moment.langData is deprecated. Use moment.localeData instead.", Y);
            var Fr = Math.abs
              , jr = Qn("ms")
              , Hr = Qn("s")
              , Ur = Qn("m")
              , zr = Qn("h")
              , Br = Qn("d")
              , Gr = Qn("w")
              , Vr = Qn("M")
              , qr = Qn("y")
              , $r = ei("milliseconds")
              , Zr = ei("seconds")
              , Jr = ei("minutes")
              , Xr = ei("hours")
              , Qr = ei("days")
              , Kr = ei("months")
              , eo = ei("years")
              , to = Math.round
              , no = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }
              , io = Math.abs
              , ro = He.prototype;
            ro.abs = Un,
            ro.add = Bn,
            ro.subtract = Gn,
            ro.as = Jn,
            ro.asMilliseconds = jr,
            ro.asSeconds = Hr,
            ro.asMinutes = Ur,
            ro.asHours = zr,
            ro.asDays = Br,
            ro.asWeeks = Gr,
            ro.asMonths = Vr,
            ro.asYears = qr,
            ro.valueOf = Xn,
            ro._bubble = qn,
            ro.get = Kn,
            ro.milliseconds = $r,
            ro.seconds = Zr,
            ro.minutes = Jr,
            ro.hours = Xr,
            ro.days = Qr,
            ro.weeks = ti,
            ro.months = Kr,
            ro.years = eo,
            ro.humanize = oi,
            ro.toISOString = si,
            ro.toString = si,
            ro.toJSON = si,
            ro.locale = Et,
            ro.localeData = Ct,
            ro.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", si),
            ro.lang = mr,
            B("X", 0, 0, "unix"),
            B("x", 0, 0, "valueOf"),
            Z("x", Pi),
            Z("X", Ni),
            K("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }),
            K("x", function(e, t, n) {
                n._d = new Date(v(e))
            }),
            t.version = "2.13.0",
            n(Le),
            t.fn = Rr,
            t.min = Fe,
            t.max = je,
            t.now = cr,
            t.utc = u,
            t.unix = Mn,
            t.months = Ln,
            t.isDate = r,
            t.locale = R,
            t.invalid = f,
            t.duration = rt,
            t.isMoment = g,
            t.weekdays = Fn,
            t.parseZone = Dn,
            t.localeData = Y,
            t.isDuration = Ue,
            t.monthsShort = An,
            t.weekdaysMin = Hn,
            t.defineLocale = W,
            t.updateLocale = P,
            t.locales = I,
            t.weekdaysShort = jn,
            t.normalizeUnits = L,
            t.relativeTimeThreshold = ri,
            t.prototype = Rr;
            var oo = t;
            return oo
        })
    }
    ).call(t, n(29)(e))
}
, function(e, t) {
    var n, i, r, o = 1;
    t.postMessage = function(e, t, n) {
        t && (n = n || parent,
        window.postMessage ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date + o++ + "&" + e))
    }
    ,
    t.receiveMessage = function(e, t) {
        window.postMessage ? (e && (r = function(n) {
            return !("string" == typeof t && n.origin !== t || "[object Function]" === Object.prototype.toString.call(t) && t(n.origin) === !1) && void e(n)
        }
        ),
        window.addEventListener ? window[e ? "addEventListener" : "removeEventListener"]("message", r, !1) : window[e ? "attachEvent" : "detachEvent"]("onmessage", r)) : (n && clearInterval(n),
        n = null,
        e && (n = setInterval(function() {
            var t = document.location.hash
              , n = /^#?\d+&/;
            t !== i && n.test(t) && (i = t,
            e({
                data: t.replace(n, "")
            }))
        }, 100)))
    }
}
, function(e, t, n) {
    function i(e) {
        return "_fbuy_" + e + "_last_popup"
    }
    var r = n(7)
      , o = n(2)
      , s = "YYYY-MM-DD";
    t.isPopupDue = function(e, t) {
        var n = r.getCookie(i(e));
        if (!n || isNaN(t))
            return !0;
        var a = o(n, s, !0);
        if (!a.isValid())
            return !0;
        if (t === 1 / 0)
            return !1;
        var u = o();
        return a.add(t, "days").isSameOrBefore(u)
    }
    ,
    t.popupAppeared = function(e) {
        r.setCookie(i(e), o().format(s))
    }
}
, function(e, t, n) {
    var i = n(1)
      , r = n(22);
    e.exports = function(e) {
        var t = r(e);
        i.post(e.widget_service_site + "/" + t.site + "/track", t)
    }
}
, function(e, t) {
    var n = function() {
        this.entries = []
    };
    n.MAX = 1e4,
    n.LOG = "log",
    n.DEBUG = "debug",
    n.INFO = "info",
    n.WARN = "warn",
    n.ERROR = "error";
    var i = function(e, t, i) {
        for (; e.length >= n.MAX; )
            e.shift();
        e.push({
            timestamp: new Date,
            type: t,
            message: i
        })
    };
    n.prototype.clear = function() {
        this.entries = []
    }
    ,
    n.prototype.log = function(e) {
        i(this.entries, n.LOG, e)
    }
    ,
    n.prototype.error = function(e) {
        i(this.entries, n.ERROR, e)
    }
    ,
    n.prototype.warn = function(e) {
        i(this.entries, n.WARN, e)
    }
    ,
    n.prototype.info = function(e) {
        i(this.entries, n.INFO, e)
    }
    ,
    n.prototype.debug = function(e) {
        i(this.entries, n.DEBUG, e)
    }
    ;
    var r = new n;
    r.MAX = n.MAX,
    r.LOG = n.LOG,
    r.DEBUG = n.DEBUG,
    r.INFO = n.INFO,
    r.WARN = n.WARN,
    r.ERROR = n.ERROR,
    n.LOG = "log",
    n.DEBUG = "debug",
    n.INFO = "info",
    n.WARN = "warn",
    n.ERROR = "error",
    e.exports = r
}
, function(e, t, n) {
    var i = n(20);
    t.getCookie = function(e) {
        return decodeURIComponent(i.document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    }
    ,
    t.setCookie = function(e, t) {
        return i.document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; max-age=31536000; path=/; Secure; SameSite=None",
        t
    }
}
, function(e, t) {
    var n = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    };
    e.exports = function() {
        return n() + "-" + n()
    }
}
, function(e, t, n) {
    var i = n(6)
      , r = {}
      , o = function(e, t, n) {
        if (!r)
            return i.error("Malformed script: missing widgets"),
            null;
        if (r.preview)
            return r;
        var o = r[e];
        if (!o)
            return i.error("Invalid site: " + e),
            null;
        var s = o[t];
        if (!s)
            return i.error("Invalid group id: " + t),
            null;
        if (0 == s.length)
            return null;
        if (n)
            for (var a = 0; a < s.length; a++)
                if (s[a].id == n)
                    return s[a];
        for (var u = 100 * Math.random(), c = 0, a = 0; a < s.length; a++) {
            var l = s[a];
            if (c += Number(l.distribution),
            u < c)
                return l
        }
        return s[s.length - 1]
    };
    e.exports = {
        setWidgets: function(e) {
            r = e
        },
        getWidgets: function() {
            return r
        },
        select: o
    }
}
, function(e, t, n) {
    var i = n(23)
      , r = n(4)
      , o = function(e, t) {
        return t.whitelist_on && i.acceptUrlFromWhitelist(e, t.whitelist)
    }
      , s = function(e, t) {
        return t.blacklist_on && i.acceptUrlFromBlacklist(e, t.blacklist)
    }
      , a = function(e, t) {
        return t !== e
    }
      , u = {
        ">": function(e, t) {
            return t > e
        },
        ">=": function(e, t) {
            return t >= e
        },
        "<": function(e, t) {
            return t < e
        },
        "<=": function(e, t) {
            return t <= e
        },
        "<>": a,
        "!=": a
    }
      , c = function(e, t) {
        var n = parseFloat(t);
        return Object.keys(e).every(function(t) {
            var i = u[t];
            return !(i instanceof Function) || u[t](parseFloat(e[t]), n)
        })
    }
      , l = function(e, t) {
        return Object.keys(e).every(function(n) {
            return e[n]instanceof Array ? e[n].includes(t[n]) : e[n]instanceof Object ? c(e[n], t[n]) : e[n] === t[n]
        })
    }
      , d = function(e, t) {
        return !e || !!t && l(e, t)
    }
      , f = function(e, t) {
        return !e || !!t && e.every(function(e) {
            return t.some(function(t) {
                return d(e, t)
            })
        })
    }
      , h = function(e) {
        return "ribbon" === e.widget_type || e.targeting_on
    }
      , p = function(e, t) {
        return o(t, e) || s(t, e)
    }
      , m = function(e, t) {
        if ("ribbon" === e.widget_type && !e.targeting_on)
            return !0;
        if (!e.targeting_criteria || e.targeting_fallback)
            return !1;
        var n = "string" == typeof e.targeting_criteria ? JSON.parse(e.targeting_criteria) : e.targeting_criteria;
        return !!(n && n instanceof Object) && (!!d(n.order, t.order) && (!!d(n.customer, t.customer) && !!f(n.products, t.products)))
    }
      , g = function(e, t, n, i) {
        n.forEach(function(n) {
            n.groupId = i,
            n.targeting_on && (n.targeting_fallback && e.push(n),
            t[n.targeting_selector] || (t[n.targeting_selector] = []))
        })
    }
      , y = function(e, t, n) {
        var i = [];
        return Object.keys(n).forEach(function(r) {
            n[r].length > 0 || (i = i.concat(t.filter(function(t) {
                return p(t, e) && t.targeting_selector === r
            })))
        }),
        i
    }
      , v = function(e, t) {
        var n = e.groupId
          , i = ["widget", n];
        return e.targeting_on && e.targeting_selector && i.push(e.targeting_selector),
        "embedded" === e.widget_type ? void t.push(i) : void (e.target_wgids.length > 0 && r.isPopupDue(n, e.days_between_popups) && (r.popupAppeared(n),
        t.push(i)))
    };
    t.pushTargetedWidgets = function(e, t, n, i) {
        if (!t || !n)
            return console.error("Malformed script: missing widgets or site"),
            null;
        var r = n.site
          , o = t[r];
        if (!o)
            return null;
        var s = Object.keys(o)
          , a = function(e, t) {
            return function(n) {
                return h(n) && p(n, e) && m(n, t)
            }
        }(i, n)
          , u = []
          , c = []
          , l = {};
        s.forEach(function(e) {
            var t = o[e];
            g(c, l, t, e),
            t.filter(a).forEach(function(e) {
                u.push(e),
                e.targeting_on && e.targeting_selector && l[e.targeting_selector].push(e)
            })
        }),
        u = u.concat(y(i, c, l)),
        u.forEach(function(t) {
            v(t, e)
        })
    }
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(e) {
        if (l === setTimeout)
            return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout)
            return l = setTimeout,
            setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }
    function o(e) {
        if (d === clearTimeout)
            return clearTimeout(e);
        if ((d === i || !d) && clearTimeout)
            return d = clearTimeout,
            clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }
    function s() {
        m && h && (m = !1,
        h.length ? p = h.concat(p) : g = -1,
        p.length && a())
    }
    function a() {
        if (!m) {
            var e = r(s);
            m = !0;
            for (var t = p.length; t; ) {
                for (h = p,
                p = []; ++g < t; )
                    h && h[g].run();
                g = -1,
                t = p.length
            }
            h = null,
            m = !1,
            o(e)
        }
    }
    function u(e, t) {
        this.fun = e,
        this.array = t
    }
    function c() {}
    var l, d, f = e.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            d = i
        }
    }();
    var h, p = [], m = !1, g = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        p.push(new u(e,t)),
        1 !== p.length || m || r(a)
    }
    ,
    u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    f.title = "browser",
    f.browser = !0,
    f.env = {},
    f.argv = [],
    f.version = "",
    f.versions = {},
    f.on = c,
    f.addListener = c,
    f.once = c,
    f.off = c,
    f.removeListener = c,
    f.removeAllListeners = c,
    f.emit = c,
    f.prependListener = c,
    f.prependOnceListener = c,
    f.listeners = function(e) {
        return []
    }
    ,
    f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    f.cwd = function() {
        return "/"
    }
    ,
    f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    f.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    function i(e) {
        o.setCookie(s, e)
    }
    function r() {
        return o.getCookie(s)
    }
    var o = n(7)
      , s = "_fbuy_buckets"
      , a = 20;
    t.getPreferredCampaignForGroup = function(e) {
        var t = null;
        try {
            var n = JSON.parse(r());
            "object" == typeof n && null !== n && (t = n[e] || null,
            Array.isArray(t) && (t = t[0]))
        } catch (e) {}
        return t
    }
    ,
    t.setPreferredCampaignForGroup = function(e, t) {
        var n = {};
        try {
            var o = r();
            o && (n = JSON.parse(o))
        } catch (e) {}
        if (n[e] = [t, (new Date).getTime()],
        Object.keys(n).length > a) {
            var s = Object.keys(n).map(function(e) {
                return [e, Array.isArray(n[e]) ? n[e] : [n[e], 0]]
            })
              , u = s.sort(function(e, t) {
                return t[1][1] - e[1][1]
            }).slice(0, a);
            n = {},
            u.forEach(function(e) {
                n[e[0]] = e[1]
            })
        }
        i(JSON.stringify(n))
    }
}
, function(e, t, n) {
    var i, r, o;
    !function(n) {
        "use strict";
        function s(e, t, i) {
            "addEventListener"in n ? e.addEventListener(t, i, !1) : "attachEvent"in n && e.attachEvent("on" + t, i)
        }
        function a(e, t, i) {
            "removeEventListener"in n ? e.removeEventListener(t, i, !1) : "detachEvent"in n && e.detachEvent("on" + t, i)
        }
        function u() {
            var e, t = ["moz", "webkit", "o", "ms"];
            for (e = 0; e < t.length && !z; e += 1)
                z = n[t[e] + "RequestAnimationFrame"];
            z || f("setup", "RequestAnimationFrame not supported")
        }
        function c(e) {
            var t = "Host page: " + e;
            return n.top !== n.self && (t = n.parentIFrame && n.parentIFrame.getId ? n.parentIFrame.getId() + ": " + e : "Nested host page: " + e),
            t
        }
        function l(e) {
            return j + "[" + c(e) + "]"
        }
        function d(e) {
            return G[e] ? G[e].log : N
        }
        function f(e, t) {
            m("log", e, t, d(e))
        }
        function h(e, t) {
            m("info", e, t, d(e))
        }
        function p(e, t) {
            m("warn", e, t, !0)
        }
        function m(e, t, i, r) {
            !0 === r && "object" == typeof n.console && console[e](l(t), i)
        }
        function g(e) {
            function t() {
                function e() {
                    k(V),
                    w($)
                }
                r("Height"),
                r("Width"),
                x(e, V, "init")
            }
            function i() {
                var e = B.substr(H).split(":");
                return {
                    iframe: G[e[0]].iframe,
                    id: e[0],
                    height: e[1],
                    width: e[2],
                    type: e[3]
                }
            }
            function r(e) {
                var t = Number(G[$]["max" + e])
                  , n = Number(G[$]["min" + e])
                  , i = e.toLowerCase()
                  , r = Number(V[i]);
                f($, "Checking " + i + " is in range " + n + "-" + t),
                r < n && (r = n,
                f($, "Set " + i + " to min value")),
                r > t && (r = t,
                f($, "Set " + i + " to max value")),
                V[i] = "" + r
            }
            function o() {
                function t() {
                    function e() {
                        var e = 0
                          , t = !1;
                        for (f($, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
                            if (i[e] === n) {
                                t = !0;
                                break
                            }
                        return t
                    }
                    function t() {
                        var e = G[$].remoteHost;
                        return f($, "Checking connection is from: " + e),
                        n === e
                    }
                    return i.constructor === Array ? e() : t()
                }
                var n = e.origin
                  , i = G[$].checkOrigin;
                if (i && "" + n != "null" && !t())
                    throw new Error("Unexpected message received from: " + n + " for " + V.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                return !0
            }
            function u() {
                return j === ("" + B).substr(0, H) && B.substr(H).split(":")[0]in G
            }
            function c() {
                var e = V.type in {
                    true: 1,
                    false: 1,
                    undefined: 1
                };
                return e && f($, "Ignoring init message from meta parent page"),
                e
            }
            function l(e) {
                return B.substr(B.indexOf(":") + F + e)
            }
            function d(e) {
                f($, "MessageCallback passed: {iframe: " + V.iframe.id + ", message: " + e + "}"),
                I("messageCallback", {
                    iframe: V.iframe,
                    message: JSON.parse(e)
                }),
                f($, "--")
            }
            function m() {
                var e = document.body.getBoundingClientRect()
                  , t = V.iframe.getBoundingClientRect();
                return JSON.stringify({
                    iframeHeight: t.height,
                    iframeWidth: t.width,
                    clientHeight: Math.max(document.documentElement.clientHeight, n.innerHeight || 0),
                    clientWidth: Math.max(document.documentElement.clientWidth, n.innerWidth || 0),
                    offsetTop: parseInt(t.top - e.top, 10),
                    offsetLeft: parseInt(t.left - e.left, 10),
                    scrollTop: n.pageYOffset,
                    scrollLeft: n.pageXOffset
                })
            }
            function g(e, t) {
                function n() {
                    M("Send Page Info", "pageInfo:" + m(), e, t)
                }
                E(n, 32)
            }
            function O() {
                function e(e, i) {
                    function o() {
                        G[r] ? g(G[r].iframe, r) : t()
                    }
                    ["scroll", "resize"].forEach(function(t) {
                        f(r, e + t + " listener for sendPageInfo"),
                        i(n, t, o)
                    })
                }
                function t() {
                    e("Remove ", a)
                }
                function i() {
                    e("Add ", s)
                }
                var r = $;
                i(),
                G[r].stopPageInfo = t
            }
            function C() {
                G[$] && G[$].stopPageInfo && (G[$].stopPageInfo(),
                delete G[$].stopPageInfo)
            }
            function T() {
                var e = !0;
                return null === V.iframe && (p($, "IFrame (" + V.id + ") not found"),
                e = !1),
                e
            }
            function R(e) {
                var t = e.getBoundingClientRect();
                return _($),
                {
                    x: Math.floor(Number(t.left) + Number(U.x)),
                    y: Math.floor(Number(t.top) + Number(U.y))
                }
            }
            function W(e) {
                function t() {
                    U = s,
                    P(),
                    f($, "--")
                }
                function i() {
                    return {
                        x: Number(V.width) + o.x,
                        y: Number(V.height) + o.y
                    }
                }
                function r() {
                    n.parentIFrame ? n.parentIFrame["scrollTo" + (e ? "Offset" : "")](s.x, s.y) : p($, "Unable to scroll to requested position, window.parentIFrame not found")
                }
                var o = e ? R(V.iframe) : {
                    x: 0,
                    y: 0
                }
                  , s = i();
                f($, "Reposition requested from iFrame (offset x:" + o.x + " y:" + o.y + ")"),
                n.top !== n.self ? r() : t()
            }
            function P() {
                !1 !== I("scrollCallback", U) ? w($) : b()
            }
            function Y(e) {
                function t() {
                    var e = R(s);
                    f($, "Moving to in page link (#" + r + ") at x: " + e.x + " y: " + e.y),
                    U = {
                        x: e.x,
                        y: e.y
                    },
                    P(),
                    f($, "--")
                }
                function i() {
                    n.parentIFrame ? n.parentIFrame.moveToAnchor(r) : f($, "In page link #" + r + " not found and window.parentIFrame not found")
                }
                var r = e.split("#")[1] || ""
                  , o = decodeURIComponent(r)
                  , s = document.getElementById(o) || document.getElementsByName(o)[0];
                s ? t() : n.top !== n.self ? i() : f($, "In page link #" + r + " not found")
            }
            function I(e, t) {
                return y($, e, t)
            }
            function N() {
                switch (G[$].firstRun && z(),
                V.type) {
                case "close":
                    v(V.iframe);
                    break;
                case "message":
                    d(l(6));
                    break;
                case "scrollTo":
                    W(!1);
                    break;
                case "scrollToOffset":
                    W(!0);
                    break;
                case "pageInfo":
                    g(G[$].iframe, $),
                    O();
                    break;
                case "pageInfoStop":
                    C();
                    break;
                case "inPageLink":
                    Y(l(9));
                    break;
                case "reset":
                    S(V);
                    break;
                case "init":
                    t(),
                    I("initCallback", V.iframe),
                    I("resizedCallback", V);
                    break;
                default:
                    t(),
                    I("resizedCallback", V)
                }
            }
            function L(e) {
                var t = !0;
                return G[e] || (t = !1,
                p(V.type + " No settings for " + e + ". Message was: " + B)),
                t
            }
            function A() {
                for (var e in G)
                    M("iFrame requested init", D(e), document.getElementById(e), e)
            }
            function z() {
                G[$].firstRun = !1
            }
            var B = e.data
              , V = {}
              , $ = null;
            "[iFrameResizerChild]Ready" === B ? A() : u() ? (V = i(),
            $ = q = V.id,
            !c() && L($) && (f($, "Received: " + B),
            T() && o() && N())) : h($, "Ignored: " + B)
        }
        function y(e, t, n) {
            var i = null
              , r = null;
            if (G[e]) {
                if (i = G[e][t],
                "function" != typeof i)
                    throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                r = i(n)
            }
            return r
        }
        function v(e) {
            var t = e.id;
            f(t, "Removing iFrame: " + t),
            e.parentNode.removeChild(e),
            y(t, "closedCallback", t),
            f(t, "--"),
            delete G[t]
        }
        function _(e) {
            null === U && (U = {
                x: void 0 !== n.pageXOffset ? n.pageXOffset : document.documentElement.scrollLeft,
                y: void 0 !== n.pageYOffset ? n.pageYOffset : document.documentElement.scrollTop
            },
            f(e, "Get page position: " + U.x + "," + U.y))
        }
        function w(e) {
            null !== U && (n.scrollTo(U.x, U.y),
            f(e, "Set page position: " + U.x + "," + U.y),
            b())
        }
        function b() {
            U = null
        }
        function S(e) {
            function t() {
                k(e),
                M("reset", "reset", e.iframe, e.id)
            }
            f(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
            _(e.id),
            x(t, e, "reset")
        }
        function k(e) {
            function t(t) {
                e.iframe.style[t] = e[t] + "px",
                f(e.id, "IFrame (" + r + ") " + t + " set to " + e[t] + "px")
            }
            function n(t) {
                L || "0" !== e[t] || (L = !0,
                f(r, "Hidden iFrame detected, creating visibility listener"),
                C())
            }
            function i(e) {
                t(e),
                n(e)
            }
            var r = e.iframe.id;
            G[r] && (G[r].sizeHeight && i("height"),
            G[r].sizeWidth && i("width"))
        }
        function x(e, t, n) {
            n !== t.type && z ? (f(t.id, "Requesting animation frame"),
            z(e)) : e()
        }
        function M(e, t, n, i) {
            function r() {
                var r = G[i].targetOrigin;
                f(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + t + ") targetOrigin: " + r),
                n.contentWindow.postMessage(j + t, r)
            }
            function o() {
                h(i, "[" + e + "] IFrame(" + i + ") not found"),
                G[i] && delete G[i]
            }
            function s() {
                n && "contentWindow"in n && null !== n.contentWindow ? r() : o()
            }
            i = i || n.id,
            G[i] && s()
        }
        function D(e) {
            return e + ":" + G[e].bodyMarginV1 + ":" + G[e].sizeWidth + ":" + G[e].log + ":" + G[e].interval + ":" + G[e].enablePublicMethods + ":" + G[e].autoResize + ":" + G[e].bodyMargin + ":" + G[e].heightCalculationMethod + ":" + G[e].bodyBackground + ":" + G[e].bodyPadding + ":" + G[e].tolerance + ":" + G[e].inPageLinks + ":" + G[e].resizeFrom + ":" + G[e].widthCalculationMethod;
        }
        function O(e, t) {
            function n() {
                function t(t) {
                    1 / 0 !== G[_][t] && 0 !== G[_][t] && (e.style[t] = G[_][t] + "px",
                    f(_, "Set " + t + " = " + G[_][t] + "px"))
                }
                function n(e) {
                    if (G[_]["min" + e] > G[_]["max" + e])
                        throw new Error("Value for min" + e + " can not be greater than max" + e)
                }
                n("Height"),
                n("Width"),
                t("maxHeight"),
                t("minHeight"),
                t("maxWidth"),
                t("minWidth")
            }
            function i() {
                var e = t && t.id || $.id + I++;
                return null !== document.getElementById(e) && (e += I++),
                e
            }
            function r(n) {
                return q = n,
                "" === n && (e.id = n = i(),
                N = (t || {}).log,
                q = n,
                f(n, "Added missing iframe ID: " + n + " (" + e.src + ")")),
                n
            }
            function o() {
                f(_, "IFrame scrolling " + (G[_].scrolling ? "enabled" : "disabled") + " for " + _),
                e.style.overflow = !1 === G[_].scrolling ? "hidden" : "auto",
                e.scrolling = !1 === G[_].scrolling ? "no" : "yes"
            }
            function a() {
                "number" != typeof G[_].bodyMargin && "0" !== G[_].bodyMargin || (G[_].bodyMarginV1 = G[_].bodyMargin,
                G[_].bodyMargin = "" + G[_].bodyMargin + "px")
            }
            function u() {
                var t = G[_].firstRun
                  , n = G[_].heightCalculationMethod in B;
                !t && n && S({
                    iframe: e,
                    height: 0,
                    width: 0,
                    type: "init"
                })
            }
            function c() {
                Function.prototype.bind && (G[_].iframe.iFrameResizer = {
                    close: v.bind(null, G[_].iframe),
                    resize: M.bind(null, "Window resize", "resize", G[_].iframe),
                    moveToAnchor: function(e) {
                        M("Move to anchor", "moveToAnchor:" + e, G[_].iframe, _)
                    },
                    sendMessage: function(e) {
                        e = JSON.stringify(e),
                        M("Send Message", "message:" + e, G[_].iframe, _)
                    }
                })
            }
            function l(t) {
                function n() {
                    M("iFrame.onload", t, e),
                    u()
                }
                s(e, "load", n),
                M("init", t, e)
            }
            function d(e) {
                if ("object" != typeof e)
                    throw new TypeError("Options is not an object")
            }
            function h(e) {
                for (var t in $)
                    $.hasOwnProperty(t) && (G[_][t] = e.hasOwnProperty(t) ? e[t] : $[t])
            }
            function m(e) {
                return "" === e || "file://" === e ? "*" : e
            }
            function g(t) {
                t = t || {},
                G[_] = {
                    firstRun: !0,
                    iframe: e,
                    remoteHost: e.src.split("/").slice(0, 3).join("/")
                },
                d(t),
                h(t),
                G[_].targetOrigin = !0 === G[_].checkOrigin ? m(G[_].remoteHost) : "*"
            }
            function y() {
                return _ in G && "iFrameResizer"in e
            }
            var _ = r(e.id);
            y() ? p(_, "Ignored iFrame, already setup.") : (g(t),
            o(),
            n(),
            a(),
            l(D(_)),
            c())
        }
        function E(e, t) {
            null === V && (V = setTimeout(function() {
                V = null,
                e()
            }, t))
        }
        function C() {
            function e() {
                function e(e) {
                    function t(t) {
                        return "0px" === G[e].iframe.style[t]
                    }
                    function n(e) {
                        return null !== e.offsetParent
                    }
                    n(G[e].iframe) && (t("height") || t("width")) && M("Visibility change", "resize", G[e].iframe, e)
                }
                for (var t in G)
                    e(t)
            }
            function t(t) {
                f("window", "Mutation observed: " + t[0].target + " " + t[0].type),
                E(e, 16)
            }
            function i() {
                var e = document.querySelector("body")
                  , n = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                }
                  , i = new r(t);
                i.observe(e, n)
            }
            var r = n.MutationObserver || n.WebKitMutationObserver;
            r && i()
        }
        function T(e) {
            function t() {
                W("Window " + e, "resize")
            }
            f("window", "Trigger event: " + e),
            E(t, 16)
        }
        function R() {
            function e() {
                W("Tab Visable", "resize")
            }
            "hidden" !== document.visibilityState && (f("document", "Trigger event: Visiblity change"),
            E(e, 16))
        }
        function W(e, t) {
            function n(e) {
                return "parent" === G[e].resizeFrom && G[e].autoResize && !G[e].firstRun
            }
            for (var i in G)
                n(i) && M(e, t, document.getElementById(i), i)
        }
        function P() {
            s(n, "message", g),
            s(n, "resize", function() {
                T("resize")
            }),
            s(document, "visibilitychange", R),
            s(document, "-webkit-visibilitychange", R),
            s(n, "focusin", function() {
                T("focus")
            }),
            s(n, "focus", function() {
                T("focus")
            })
        }
        function Y() {
            function e(e, n) {
                function i() {
                    if (!n.tagName)
                        throw new TypeError("Object is not a valid DOM element");
                    if ("IFRAME" !== n.tagName.toUpperCase())
                        throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">")
                }
                n && (i(),
                O(n, e),
                t.push(n))
            }
            var t;
            return u(),
            P(),
            function(n, i) {
                switch (t = [],
                typeof i) {
                case "undefined":
                case "string":
                    Array.prototype.forEach.call(document.querySelectorAll(i || "iframe"), e.bind(void 0, n));
                    break;
                case "object":
                    e(n, i);
                    break;
                default:
                    throw new TypeError("Unexpected data type (" + typeof i + ")")
                }
                return t
            }
        }
        var I = 0
          , N = !1
          , L = !1
          , A = "message"
          , F = A.length
          , j = "[iFrameSizer]"
          , H = j.length
          , U = null
          , z = n.requestAnimationFrame
          , B = {
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1
        }
          , G = {}
          , V = null
          , q = "Host Page"
          , $ = {
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            closedCallback: function() {},
            initCallback: function() {},
            messageCallback: function() {
                p("MessageCallback function not defined")
            },
            resizedCallback: function() {},
            scrollCallback: function() {
                return !0
            }
        };
        r = [],
        i = Y,
        o = "function" == typeof i ? i.apply(t, r) : i,
        !(void 0 !== o && (e.exports = o))
    }(window || {})
}
, function(e, t, n) {
    function i(e) {
        return e.split("").reduce(function(e, t) {
            return e[t] = !0,
            e
        }, {})
    }
    function r(e, t) {
        return t = t || {},
        function(n, i, r) {
            return s(n, e, t)
        }
    }
    function o(e, t) {
        e = e || {},
        t = t || {};
        var n = {};
        return Object.keys(t).forEach(function(e) {
            n[e] = t[e]
        }),
        Object.keys(e).forEach(function(t) {
            n[t] = e[t]
        }),
        n
    }
    function s(e, t, n) {
        if ("string" != typeof t)
            throw new TypeError("glob pattern string required");
        return n || (n = {}),
        !(!n.nocomment && "#" === t.charAt(0)) && ("" === t.trim() ? "" === e : new a(t,n).match(e))
    }
    function a(e, t) {
        if (!(this instanceof a))
            return new a(e,t);
        if ("string" != typeof e)
            throw new TypeError("glob pattern string required");
        t || (t = {}),
        e = e.trim(),
        "/" !== g.sep && (e = e.split(g.sep).join("/")),
        this.options = t,
        this.set = [],
        this.pattern = e,
        this.regexp = null,
        this.negate = !1,
        this.comment = !1,
        this.empty = !1,
        this.make()
    }
    function u() {
        if (!this._made) {
            var e = this.pattern
              , t = this.options;
            if (!t.nocomment && "#" === e.charAt(0))
                return void (this.comment = !0);
            if (!e)
                return void (this.empty = !0);
            this.parseNegate();
            var n = this.globSet = this.braceExpand();
            t.debug && (this.debug = console.error),
            this.debug(this.pattern, n),
            n = this.globParts = n.map(function(e) {
                return e.split(M)
            }),
            this.debug(this.pattern, n),
            n = n.map(function(e, t, n) {
                return e.map(this.parse, this)
            }, this),
            this.debug(this.pattern, n),
            n = n.filter(function(e) {
                return e.indexOf(!1) === -1
            }),
            this.debug(this.pattern, n),
            this.set = n
        }
    }
    function c() {
        var e = this.pattern
          , t = !1
          , n = this.options
          , i = 0;
        if (!n.nonegate) {
            for (var r = 0, o = e.length; r < o && "!" === e.charAt(r); r++)
                t = !t,
                i++;
            i && (this.pattern = e.substr(i)),
            this.negate = t
        }
    }
    function l(e, t) {
        if (t || (t = this instanceof a ? this.options : {}),
        e = "undefined" == typeof e ? this.pattern : e,
        "undefined" == typeof e)
            throw new TypeError("undefined pattern");
        return t.nobrace || !e.match(/\{.*\}/) ? [e] : v(e)
    }
    function d(e, t) {
        function n() {
            if (r) {
                switch (r) {
                case "*":
                    s += b,
                    a = !0;
                    break;
                case "?":
                    s += w,
                    a = !0;
                    break;
                default:
                    s += "\\" + r
                }
                g.debug("clearStateChar %j %j", r, s),
                r = !1
            }
        }
        if (e.length > 65536)
            throw new TypeError("pattern is too long");
        var i = this.options;
        if (!i.noglobstar && "**" === e)
            return y;
        if ("" === e)
            return "";
        for (var r, o, s = "", a = !!i.nocase, u = !1, c = [], l = [], d = !1, f = -1, h = -1, m = "." === e.charAt(0) ? "" : i.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", g = this, v = 0, S = e.length; v < S && (o = e.charAt(v)); v++)
            if (this.debug("%s\t%s %s %j", e, v, s, o),
            u && x[o])
                s += "\\" + o,
                u = !1;
            else
                switch (o) {
                case "/":
                    return !1;
                case "\\":
                    n(),
                    u = !0;
                    continue;
                case "?":
                case "*":
                case "+":
                case "@":
                case "!":
                    if (this.debug("%s\t%s %s %j <-- stateChar", e, v, s, o),
                    d) {
                        this.debug("  in class"),
                        "!" === o && v === h + 1 && (o = "^"),
                        s += o;
                        continue
                    }
                    g.debug("call clearStateChar %j", r),
                    n(),
                    r = o,
                    i.noext && n();
                    continue;
                case "(":
                    if (d) {
                        s += "(";
                        continue
                    }
                    if (!r) {
                        s += "\\(";
                        continue
                    }
                    c.push({
                        type: r,
                        start: v - 1,
                        reStart: s.length,
                        open: _[r].open,
                        close: _[r].close
                    }),
                    s += "!" === r ? "(?:(?!(?:" : "(?:",
                    this.debug("plType %j %j", r, s),
                    r = !1;
                    continue;
                case ")":
                    if (d || !c.length) {
                        s += "\\)";
                        continue
                    }
                    n(),
                    a = !0;
                    var k = c.pop();
                    s += k.close,
                    "!" === k.type && l.push(k),
                    k.reEnd = s.length;
                    continue;
                case "|":
                    if (d || !c.length || u) {
                        s += "\\|",
                        u = !1;
                        continue
                    }
                    n(),
                    s += "|";
                    continue;
                case "[":
                    if (n(),
                    d) {
                        s += "\\" + o;
                        continue
                    }
                    d = !0,
                    h = v,
                    f = s.length,
                    s += o;
                    continue;
                case "]":
                    if (v === h + 1 || !d) {
                        s += "\\" + o,
                        u = !1;
                        continue
                    }
                    if (d) {
                        var M = e.substring(h + 1, v);
                        try {
                            RegExp("[" + M + "]")
                        } catch (e) {
                            var O = this.parse(M, D);
                            s = s.substr(0, f) + "\\[" + O[0] + "\\]",
                            a = a || O[1],
                            d = !1;
                            continue
                        }
                    }
                    a = !0,
                    d = !1,
                    s += o;
                    continue;
                default:
                    n(),
                    u ? u = !1 : !x[o] || "^" === o && d || (s += "\\"),
                    s += o
                }
        for (d && (M = e.substr(h + 1),
        O = this.parse(M, D),
        s = s.substr(0, f) + "\\[" + O[0],
        a = a || O[1]),
        k = c.pop(); k; k = c.pop()) {
            var E = s.slice(k.reStart + k.open.length);
            this.debug("setting tail", s, k),
            E = E.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
                return n || (n = "\\"),
                t + t + n + "|"
            }),
            this.debug("tail=%j\n   %s", E, E, k, s);
            var C = "*" === k.type ? b : "?" === k.type ? w : "\\" + k.type;
            a = !0,
            s = s.slice(0, k.reStart) + C + "\\(" + E
        }
        n(),
        u && (s += "\\\\");
        var T = !1;
        switch (s.charAt(0)) {
        case ".":
        case "[":
        case "(":
            T = !0
        }
        for (var R = l.length - 1; R > -1; R--) {
            var W = l[R]
              , P = s.slice(0, W.reStart)
              , Y = s.slice(W.reStart, W.reEnd - 8)
              , I = s.slice(W.reEnd - 8, W.reEnd)
              , N = s.slice(W.reEnd);
            I += N;
            var L = P.split("(").length - 1
              , A = N;
            for (v = 0; v < L; v++)
                A = A.replace(/\)[+*?]?/, "");
            N = A;
            var F = "";
            "" === N && t !== D && (F = "$");
            var j = P + Y + N + F + I;
            s = j
        }
        if ("" !== s && a && (s = "(?=.)" + s),
        T && (s = m + s),
        t === D)
            return [s, a];
        if (!a)
            return p(e);
        var H = i.nocase ? "i" : "";
        try {
            var U = new RegExp("^" + s + "$",H)
        } catch (e) {
            return new RegExp("$.")
        }
        return U._glob = e,
        U._src = s,
        U
    }
    function f() {
        if (this.regexp || this.regexp === !1)
            return this.regexp;
        var e = this.set;
        if (!e.length)
            return this.regexp = !1,
            this.regexp;
        var t = this.options
          , n = t.noglobstar ? b : t.dot ? S : k
          , i = t.nocase ? "i" : ""
          , r = e.map(function(e) {
            return e.map(function(e) {
                return e === y ? n : "string" == typeof e ? m(e) : e._src
            }).join("\\/")
        }).join("|");
        r = "^(?:" + r + ")$",
        this.negate && (r = "^(?!" + r + ").*$");
        try {
            this.regexp = new RegExp(r,i)
        } catch (e) {
            this.regexp = !1
        }
        return this.regexp
    }
    function h(e, t) {
        if (this.debug("match", e, this.pattern),
        this.comment)
            return !1;
        if (this.empty)
            return "" === e;
        if ("/" === e && t)
            return !0;
        var n = this.options;
        "/" !== g.sep && (e = e.split(g.sep).join("/")),
        e = e.split(M),
        this.debug(this.pattern, "split", e);
        var i = this.set;
        this.debug(this.pattern, "set", i);
        var r, o;
        for (o = e.length - 1; o >= 0 && !(r = e[o]); o--)
            ;
        for (o = 0; o < i.length; o++) {
            var s = i[o]
              , a = e;
            n.matchBase && 1 === s.length && (a = [r]);
            var u = this.matchOne(a, s, t);
            if (u)
                return !!n.flipNegate || !this.negate
        }
        return !n.flipNegate && this.negate
    }
    function p(e) {
        return e.replace(/\\(.)/g, "$1")
    }
    function m(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    e.exports = s,
    s.Minimatch = a;
    var g = {
        sep: "/"
    };
    try {
        g = n(28)
    } catch (e) {}
    var y = s.GLOBSTAR = a.GLOBSTAR = {}
      , v = n(26)
      , _ = {
        "!": {
            open: "(?:(?!(?:",
            close: "))[^/]*?)"
        },
        "?": {
            open: "(?:",
            close: ")?"
        },
        "+": {
            open: "(?:",
            close: ")+"
        },
        "*": {
            open: "(?:",
            close: ")*"
        },
        "@": {
            open: "(?:",
            close: ")"
        }
    }
      , w = "[^/]"
      , b = w + "*?"
      , S = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
      , k = "(?:(?!(?:\\/|^)\\.).)*?"
      , x = i("().*{}+?[]^$\\!")
      , M = /\/+/;
    s.filter = r,
    s.defaults = function(e) {
        if (!e || !Object.keys(e).length)
            return s;
        var t = s
          , n = function(n, i, r) {
            return t.minimatch(n, i, o(e, r))
        };
        return n.Minimatch = function(n, i) {
            return new t.Minimatch(n,o(e, i))
        }
        ,
        n
    }
    ,
    a.defaults = function(e) {
        return e && Object.keys(e).length ? s.defaults(e).Minimatch : a
    }
    ,
    a.prototype.debug = function() {}
    ,
    a.prototype.make = u,
    a.prototype.parseNegate = c,
    s.braceExpand = function(e, t) {
        return l(e, t)
    }
    ,
    a.prototype.braceExpand = l,
    a.prototype.parse = d;
    var D = {};
    s.makeRe = function(e, t) {
        return new a(e,t || {}).makeRe()
    }
    ,
    a.prototype.makeRe = f,
    s.match = function(e, t, n) {
        n = n || {};
        var i = new a(t,n);
        return e = e.filter(function(e) {
            return i.match(e)
        }),
        i.options.nonull && !e.length && e.push(t),
        e
    }
    ,
    a.prototype.match = h,
    a.prototype.matchOne = function(e, t, n) {
        var i = this.options;
        this.debug("matchOne", {
            this: this,
            file: e,
            pattern: t
        }),
        this.debug("matchOne", e.length, t.length);
        for (var r = 0, o = 0, s = e.length, a = t.length; r < s && o < a; r++,
        o++) {
            this.debug("matchOne loop");
            var u = t[o]
              , c = e[r];
            if (this.debug(t, u, c),
            u === !1)
                return !1;
            if (u === y) {
                this.debug("GLOBSTAR", [t, u, c]);
                var l = r
                  , d = o + 1;
                if (d === a) {
                    for (this.debug("** at the end"); r < s; r++)
                        if ("." === e[r] || ".." === e[r] || !i.dot && "." === e[r].charAt(0))
                            return !1;
                    return !0
                }
                for (; l < s; ) {
                    var f = e[l];
                    if (this.debug("\nglobstar while", e, l, t, d, f),
                    this.matchOne(e.slice(l), t.slice(d), n))
                        return this.debug("globstar found match!", l, s, f),
                        !0;
                    if ("." === f || ".." === f || !i.dot && "." === f.charAt(0)) {
                        this.debug("dot detected!", e, l, t, d);
                        break
                    }
                    this.debug("globstar swallow a segment, and continue"),
                    l++
                }
                return !(!n || (this.debug("\n>>> no match, partial?", e, l, t, d),
                l !== s))
            }
            var h;
            if ("string" == typeof u ? (h = i.nocase ? c.toLowerCase() === u.toLowerCase() : c === u,
            this.debug("string match", u, c, h)) : (h = c.match(u),
            this.debug("pattern match", u, c, h)),
            !h)
                return !1
        }
        if (r === s && o === a)
            return !0;
        if (r === s)
            return n;
        if (o === a) {
            var p = r === s - 1 && "" === e[r];
            return p
        }
        throw new Error("wtf?")
    }
}
, function(e, t, n) {
    var i;
    /*!
	 * Sizzle CSS Selector Engine v@VERSION
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: @DATE
	 */
    !function(r) {
        function o(e, t, n, i) {
            var r, o, s, a, u, c, l, d, f, h;
            if ((t ? t.ownerDocument || t : B) !== N && I(t),
            t = t || N,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (a = t.nodeType) && 9 !== a)
                return [];
            if (A && !i) {
                if (r = be.exec(e))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && U(t, o) && o.id === s)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return ie.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = r[3]) && M.getElementsByClassName)
                            return ie.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (M.qsa && (!F || !F.test(e))) {
                    if (d = l = z,
                    f = t,
                    h = 9 === a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e),
                        (l = t.getAttribute("id")) ? d = l.replace(ke, "\\$&") : t.setAttribute("id", d),
                        d = "[id='" + d + "'] ",
                        u = c.length; u--; )
                            c[u] = d + g(c[u]);
                        f = Se.test(e) && p(t.parentNode) || t,
                        h = c.join(",")
                    }
                    if (h)
                        try {
                            return ie.apply(n, f.querySelectorAll(h)),
                            n
                        } catch (e) {} finally {
                            l || t.removeAttribute("id")
                        }
                }
            }
            return R(e.replace(de, "$1"), t, n, i)
        }
        function s() {
            function e(n, i) {
                return t.push(n + " ") > D.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function a(e) {
            return e[z] = !0,
            e
        }
        function u(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function c(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                D.attrHandle[n[i]] = t
        }
        function l(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function d(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function h(e) {
            return a(function(t) {
                return t = +t,
                a(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function p(e) {
            return e && typeof e.getElementsByTagName !== X && e
        }
        function m() {}
        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function y(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = V++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, u, c = [G, o];
                if (s) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (u = t[z] || (t[z] = {}),
                            (a = u[i]) && a[0] === G && a[1] === o)
                                return c[2] = a[2];
                            if (u[i] = c,
                            c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function v(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function _(e, t, n) {
            for (var i = 0, r = t.length; i < r; i++)
                o(e, t[i], n);
            return n
        }
        function w(e, t, n, i, r) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function b(e, t, n, i, r, o) {
            return i && !i[z] && (i = b(i)),
            r && !r[z] && (r = b(r, o)),
            a(function(o, s, a, u) {
                var c, l, d, f = [], h = [], p = s.length, m = o || _(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : w(m, f, e, a, u), y = n ? r || (o ? e : p || i) ? [] : s : g;
                if (n && n(g, y, a, u),
                i)
                    for (c = w(y, h),
                    i(c, [], a, u),
                    l = c.length; l--; )
                        (d = c[l]) && (y[h[l]] = !(g[h[l]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            l = y.length; l--; )
                                (d = y[l]) && c.push(g[l] = d);
                            r(null, y = [], c, u)
                        }
                        for (l = y.length; l--; )
                            (d = y[l]) && (c = r ? oe.call(o, d) : f[l]) > -1 && (o[c] = !(s[c] = d))
                    }
                } else
                    y = w(y === s ? y.splice(p, y.length) : y),
                    r ? r(null, s, y, u) : ie.apply(s, y)
            })
        }
        function S(e) {
            for (var t, n, i, r = e.length, o = D.relative[e[0].type], s = o || D.relative[" "], a = o ? 1 : 0, u = y(function(e) {
                return e === t
            }, s, !0), c = y(function(e) {
                return oe.call(t, e) > -1
            }, s, !0), l = [function(e, n, i) {
                return !o && (i || n !== W) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i))
            }
            ]; a < r; a++)
                if (n = D.relative[e[a].type])
                    l = [y(v(l), n)];
                else {
                    if (n = D.filter[e[a].type].apply(null, e[a].matches),
                    n[z]) {
                        for (i = ++a; i < r && !D.relative[e[i].type]; i++)
                            ;
                        return b(a > 1 && v(l), a > 1 && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(de, "$1"), n, a < i && S(e.slice(a, i)), i < r && S(e = e.slice(i)), i < r && g(e))
                    }
                    l.push(n)
                }
            return v(l)
        }
        function k(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , r = function(r, s, a, u, c) {
                var l, d, f, h = 0, p = "0", m = r && [], g = [], y = W, v = r || i && D.find.TAG("*", c), _ = G += null == y ? 1 : Math.random() || .1, b = v.length;
                for (c && (W = s !== N && s); p !== b && null != (l = v[p]); p++) {
                    if (i && l) {
                        for (d = 0; f = e[d++]; )
                            if (f(l, s, a)) {
                                u.push(l);
                                break
                            }
                        c && (G = _)
                    }
                    n && ((l = !f && l) && h--,
                    r && m.push(l))
                }
                if (h += p,
                n && p !== h) {
                    for (d = 0; f = t[d++]; )
                        f(m, g, s, a);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || g[p] || (g[p] = te.call(u));
                        g = w(g)
                    }
                    ie.apply(u, g),
                    c && !r && g.length > 0 && h + t.length > 1 && o.uniqueSort(u)
                }
                return c && (G = _,
                W = y),
                m
            };
            return n ? a(r) : r
        }
        var x, M, D, O, E, C, T, R, W, P, Y, I, N, L, A, F, j, H, U, z = "sizzle" + -new Date, B = r.document, G = 0, V = 0, q = s(), $ = s(), Z = s(), J = function(e, t) {
            return e === t && (Y = !0),
            0
        }, X = "undefined", Q = 1 << 31, K = {}.hasOwnProperty, ee = [], te = ee.pop, ne = ee.push, ie = ee.push, re = ee.slice, oe = ee.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , se = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ae = "[\\x20\\t\\r\\n\\f]", ue = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ce = "\\[" + ae + "*(" + ue + ")(?:" + ae + "*([*^$|!~]?=)" + ae + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ue + "))|)" + ae + "*\\]", le = ":(" + ue + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ce + ")*)|.*)\\)|)", de = new RegExp("^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$","g"), fe = new RegExp("^" + ae + "*," + ae + "*"), he = new RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"), pe = new RegExp("=" + ae + "*([^\\]'\"]*?)" + ae + "*\\]","g"), me = new RegExp(le), ge = new RegExp("^" + ue + "$"), ye = {
            ID: new RegExp("^#(" + ue + ")"),
            CLASS: new RegExp("^\\.(" + ue + ")"),
            TAG: new RegExp("^(" + ue + "|[*])"),
            ATTR: new RegExp("^" + ce),
            PSEUDO: new RegExp("^" + le),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)","i"),
            bool: new RegExp("^(?:" + se + ")$","i"),
            needsContext: new RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)","i")
        }, ve = /^(?:input|select|textarea|button)$/i, _e = /^h\d$/i, we = /^[^{]+\{\s*\[native \w/, be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Se = /[+~]/, ke = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ae + "?|(" + ae + ")|.)","ig"), Me = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            ie.apply(ee = re.call(B.childNodes), B.childNodes),
            ee[B.childNodes.length].nodeType
        } catch (e) {
            ie = {
                apply: ee.length ? function(e, t) {
                    ne.apply(e, re.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        M = o.support = {},
        E = o.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        I = o.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : B, i = n.defaultView;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n,
            L = n.documentElement,
            A = !E(n),
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                I()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                I()
            })),
            M.attributes = u(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            M.getElementsByTagName = u(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            M.getElementsByClassName = we.test(n.getElementsByClassName),
            M.getById = u(function(e) {
                return L.appendChild(e).id = z,
                !n.getElementsByName || !n.getElementsByName(z).length
            }),
            M.getById ? (D.find.ID = function(e, t) {
                if (typeof t.getElementById !== X && A) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            D.filter.ID = function(e) {
                var t = e.replace(xe, Me);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete D.find.ID,
            D.filter.ID = function(e) {
                var t = e.replace(xe, Me);
                return function(e) {
                    var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            D.find.TAG = M.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== X)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            D.find.CLASS = M.getElementsByClassName && function(e, t) {
                if (A)
                    return t.getElementsByClassName(e)
            }
            ,
            j = [],
            F = [],
            (M.qsa = we.test(n.querySelectorAll)) && (u(function(e) {
                e.innerHTML = "<select msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ae + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ae + "*(?:value|" + se + ")"),
                e.querySelectorAll(":checked").length || F.push(":checked")
            }),
            u(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ae + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (M.matchesSelector = we.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && u(function(e) {
                M.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                j.push("!=", le)
            }),
            F = F.length && new RegExp(F.join("|")),
            j = j.length && new RegExp(j.join("|")),
            t = we.test(L.compareDocumentPosition),
            U = t || we.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            J = t ? function(e, t) {
                if (e === t)
                    return Y = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !M.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === B && U(B, e) ? -1 : t === n || t.ownerDocument === B && U(B, t) ? 1 : P ? oe.call(P, e) - oe.call(P, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return Y = !0,
                    0;
                var i, r = 0, o = e.parentNode, s = t.parentNode, a = [e], u = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : P ? oe.call(P, e) - oe.call(P, t) : 0;
                if (o === s)
                    return l(e, t);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (i = t; i = i.parentNode; )
                    u.unshift(i);
                for (; a[r] === u[r]; )
                    r++;
                return r ? l(a[r], u[r]) : a[r] === B ? -1 : u[r] === B ? 1 : 0
            }
            ,
            n) : N
        }
        ,
        o.matches = function(e, t) {
            return o(e, null, null, t)
        }
        ,
        o.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== N && I(e),
            t = t.replace(pe, "='$1']"),
            M.matchesSelector && A && (!j || !j.test(t)) && (!F || !F.test(t)))
                try {
                    var n = H.call(e, t);
                    if (n || M.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return o(t, N, null, [e]).length > 0
        }
        ,
        o.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && I(e),
            U(e, t)
        }
        ,
        o.attr = function(e, t) {
            (e.ownerDocument || e) !== N && I(e);
            var n = D.attrHandle[t.toLowerCase()]
              , i = n && K.call(D.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== i ? i : M.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        o.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        o.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (Y = !M.detectDuplicates,
            P = !M.sortStable && e.slice(0),
            e.sort(J),
            Y) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return P = null,
            e
        }
        ,
        O = o.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += O(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += O(t);
            return n
        }
        ,
        D = o.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: ye,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Me),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Me),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ye.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && me.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Me).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && q(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = o.attr(i, e);
                        return null == r ? "!=" === t : !t || (r += "",
                        "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var c, l, d, f, h, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !u && !a;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild],
                            s && v) {
                                for (l = g[z] || (g[z] = {}),
                                c = l[e] || [],
                                h = c[0] === G && c[1],
                                f = c[0] === G && c[2],
                                d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        l[e] = [G, h, f];
                                        break
                                    }
                            } else if (v && (c = (t[z] || (t[z] = {}))[e]) && c[0] === G)
                                f = c[1];
                            else
                                for (; (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++f || (v && ((d[z] || (d[z] = {}))[e] = [G, f]),
                                d !== t)); )
                                    ;
                            return f -= r,
                            f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = D.pseudos[e] || D.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return i[z] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    D.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, n) {
                        for (var r, o = i(e, t), s = o.length; s--; )
                            r = oe.call(e, o[s]),
                            e[r] = !(n[r] = o[s])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: a(function(e) {
                    var t = []
                      , n = []
                      , i = T(e.replace(de, "$1"));
                    return i[z] ? a(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: a(function(e) {
                    return function(t) {
                        return o(e, t).length > 0
                    }
                }),
                contains: a(function(e) {
                    return e = e.replace(xe, Me),
                    function(t) {
                        return (t.textContent || t.innerText || O(t)).indexOf(e) > -1
                    }
                }),
                lang: a(function(e) {
                    return ge.test(e || "") || o.error("unsupported lang: " + e),
                    e = e.replace(xe, Me).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = r.location && r.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !D.pseudos.empty(e)
                },
                header: function(e) {
                    return _e.test(e.nodeName)
                },
                input: function(e) {
                    return ve.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(e, t) {
                    return [t - 1]
                }),
                eq: h(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: h(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: h(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: h(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: h(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        D.pseudos.nth = D.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            D.pseudos[x] = d(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            D.pseudos[x] = f(x);
        m.prototype = D.filters = D.pseudos,
        D.setFilters = new m,
        C = o.tokenize = function(e, t) {
            var n, i, r, s, a, u, c, l = $[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            u = [],
            c = D.preFilter; a; ) {
                n && !(i = fe.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                u.push(r = [])),
                n = !1,
                (i = he.exec(a)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(de, " ")
                }),
                a = a.slice(n.length));
                for (s in D.filter)
                    !(i = ye[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? o.error(e) : $(e, u).slice(0)
        }
        ,
        T = o.compile = function(e, t) {
            var n, i = [], r = [], o = Z[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    o = S(t[n]),
                    o[z] ? i.push(o) : r.push(o);
                o = Z(e, k(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        R = o.select = function(e, t, n, i) {
            var r, o, s, a, u, c = "function" == typeof e && e, l = !i && C(e = c.selector || e);
            if (n = n || [],
            1 === l.length) {
                if (o = l[0] = l[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && M.getById && 9 === t.nodeType && A && D.relative[o[1].type]) {
                    if (t = (D.find.ID(s.matches[0].replace(xe, Me), t) || [])[0],
                    !t)
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = ye.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !D.relative[a = s.type]); )
                    if ((u = D.find[a]) && (i = u(s.matches[0].replace(xe, Me), Se.test(o[0].type) && p(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        e = i.length && g(o),
                        !e)
                            return ie.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || T(e, l))(i, t, !A, n, Se.test(e) && p(t.parentNode) || t),
            n
        }
        ,
        M.sortStable = z.split("").sort(J).join("") === z,
        M.detectDuplicates = !!Y,
        I(),
        M.sortDetached = u(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }),
        u(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || c("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        M.attributes && u(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || c("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        u(function(e) {
            return null == e.getAttribute("disabled")
        }) || c(se, function(e, t, n) {
            var i;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        i = function() {
            return o
        }
        .call(t, n, t, e),
        !(void 0 !== i && (e.exports = i))
    }(window)
}
, function(e, t, n) {
    "use strict";
    !function(t) {
        for (var n = [], i = 0; i <= 15; i++)
            n[i] = i.toString(16);
        var r = function() {
            for (var e = "", t = 1; t <= 36; t++)
                e += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? 4 : 20 === t ? n[4 * Math.random() | 8] : n[15 * Math.random() | 0];
            return e
        };
        e.exports = r
    }(this)
}
, function(e, t, n) {
    var i = n(5);
    e.exports = {
        merchantLoad: function(e) {
            return {
                site: function(t) {
                    e.site = t
                },
                _setWidgetDataSite: function(t) {
                    e.widget_data_site = t
                }
            }
        },
        classicFallback: function(e) {
            return {
                _setFriendbuyClassic: function(t) {
                    e.friendbuy_classic = t
                }
            }
        },
        main: function(e, t) {
            var r = n(8)
              , o = n(24)
              , s = {}
              , a = n(1)
              , u = {
                friend_status: function(t) {
                    a.get(e.widget_service_site + "/" + e.site + "/friend_status", t)
                },
                visitor_status: function(t) {
                    a.get(e.widget_service_site + "/" + e.site + "/visitor_status", t, "application/json")
                }
            };
            return {
                site: function(t) {
                    e.site = t
                },
                _setWidgetServiceSite: function(t) {
                    e.widget_service_site = t
                },
                _setServerlessSite: function(t) {
                    e.serverlessSite = t
                },
                _setCampaignId: function(t) {
                    e.campaignId = t
                },
                debug: function(t) {
                    e.debug = t
                },
                track: function(n, r) {
                    var o = function() {
                        return "order"in e || "customer"in e
                    };
                    ["order", "customer", "products", "preview"].indexOf(n) < 0 || ("customer" === n && e.customer && r.id !== e.customer.id && (delete e.customer,
                    delete e.order,
                    delete e.products,
                    delete e.preview),
                    "order" !== n && "customer" !== n || (r.uuid = e.site + "_" + r.id),
                    r.id && (r.id = "" + r.id),
                    e[n] = r,
                    t._loaded && o() && i(e))
                },
                widget: function(n, i, a) {
                    if (Object.keys) {
                        t.widgetPlacements = t.widgetPlacements || {};
                        var u = n + (i || "");
                        if (!t.widgetPlacements[u]) {
                            t.widgetPlacements[u] = !0,
                            "string" != typeof i && (a = i,
                            i = null),
                            i || (i = ".friendbuy-" + n),
                            t.widgets = t.widgets || {};
                            var c = r();
                            t.widgets[c] = new o(t,c,e,n,i,s,a),
                            t.widgets[c].load()
                        }
                    }
                },
                subscribe: function(e, t) {
                    s[e] = s[e] || [],
                    s[e].push(t)
                },
                invoke: function(e, n) {
                    u[e] ? u[e](n) : t.console.warn("Invoke requested on non-existent function: ", e)
                }
            }
        }
    }
}
, function(e, t, n) {
    function i(e, t) {
        if (!(e instanceof Array))
            return void console.debug("Ignore invalid command: " + e);
        var n = t[e[0]];
        return n ? void n.apply(null, e.slice(1)) : void ("widget" !== e[0] && console.debug("No handler to handle command: " + e))
    }
    function r(e, t, n, r, s) {
        if (e) {
            var a = function(e) {
                i(e, r)
            };
            s && s.overridePush && (e.push = a);
            var u = e.filter(function(e) {
                return r[e[0]] && "widget" !== e[0]
            });
            u.sort(function(e, t) {
                return "site" === t[0] ? 1 : 0
            }),
            u.forEach(a);
            var c = e.filter(function(e) {
                return "widget" === e[0]
            });
            t.preview || o(c, n, t, location.href),
            c.forEach(a)
        }
    }
    var o = n(10).pushTargetedWidgets;
    e.exports = r
}
, function(e, t, n) {
    var i, r, o, s = n(10).pushTargetedWidgets, a = function(e) {
        e.remove ? e.remove() : null !== e.parentNode && e.parentNode.removeChild(e)
    }, u = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, c = function(e, t) {
        return u && e instanceof Element && u.call(e, t.selector)
    }, l = function(e) {
        if (i && i.widgets) {
            var t = Object.keys(i.widgets).map(function(e) {
                return i.widgets[e]
            });
            Array.prototype.forEach.call(e.removedNodes, function(e) {
                t.forEach(function(t) {
                    var n = t.find(t.selector, e);
                    if (n.length || c(e, t)) {
                        var i = t.find("#" + t.guid + "_frndby_container");
                        i.length && i.forEach(function(e) {
                            a(e)
                        }),
                        r = t.find(t.iframeSelector(), e),
                        r.forEach(function(e) {
                            a(e)
                        });
                        var r = t.find(t.iframeSelector());
                        r.forEach(function(e) {
                            e.iFrameResizer && "function" == typeof e.iFrameResizer.close && e.iFrameResizer.close()
                        }),
                        t.widgetCreated = !1
                    }
                })
            }),
            Array.prototype.forEach.call(e.addedNodes, function(e) {
                t.forEach(function(t) {
                    var n = t.find(t.selector, e);
                    (n.length || c(e, t)) && !t.widgetCreated && t.widgetEnabled && t.widgetType && t.createWidget()
                })
            })
        }
    }, d = function(e) {
        i && o && (i.widgets && Object.keys(i.widgets).forEach(function(e) {
            var t = i.widgets[e];
            "ribbon" === t.widgetType && (delete i.widgets[t.guid],
            delete i.widgetPlacements[t.groupId],
            t.ribbonTrigger && a(t.ribbonTrigger))
        }),
        s(i, o, r, location.href))
    }, f = new MutationObserver(function(e) {
        e.forEach(l)
    }
    );
    e.exports = {
        init: function(e, t, n) {
            i = e,
            r = t,
            o = n,
            f.observe(document, {
                childList: !0,
                subtree: !0
            }),
            ["popstate", "turbolinks:load", "friendbuy-location-update"].forEach(function(e) {
                window.addEventListener(e, d)
            }),
            window.history.pushState = function(e) {
                function t() {
                    e.apply(this, arguments);
                    var t;
                    "function" == typeof Event ? t = new Event("friendbuy-location-update") : (t = document.createEvent("Event"),
                    t.initEvent("friendbuy-location-update", !0, !0)),
                    window.dispatchEvent(t)
                }
                return t
            }(window.history.pushState)
        }
    }
}
, function(e, t) {
    e.exports = "undefined" == typeof window ? {} : window
}
, function(e, t, n) {
    var i = n(16)
      , r = n(2);
    e.exports = function() {
        return [r().format("YYYYMMDDHHmmss"), i()].join("")
    }
}
, function(e, t) {
    e.exports = function(e) {
        var t = {};
        return e.site && (t.site = e.site),
        void 0 !== e.preview && (t.preview = e.preview),
        e.customer && (t.customer = {
            id: e.customer.id,
            email: e.customer.email,
            first_name: e.customer.first_name,
            last_name: e.customer.last_name,
            stripe_customer_id: e.customer.stripe_customer_id,
            chargebee_customer_id: e.customer.chargebee_customer_id
        }),
        e.order && (t.order = {
            id: e.order.id,
            amount: e.order.amount,
            coupon_code: e.order.coupon_code,
            new_customer: e.order.new_customer,
            email: e.order.email
        }),
        e.products instanceof Array && (t.products = e.products.map(function(e) {
            return {
                sku: e.sku,
                price: e.price,
                quantity: e.quantity
            }
        })),
        t
    }
}
, function(e, t, n) {
    function i(e) {
        for (var t = i.options, n = t.parser[t.strictMode ? "strict" : "loose"].exec(e), r = {}, o = 14; o--; )
            r[t.key[o]] = n[o] || "";
        return r[t.q.name] = {},
        r[t.key[12]].replace(t.q.parser, function(e, n, i) {
            n && (r[t.q.name][n] = i)
        }),
        r
    }
    function r(e, t) {
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var i = t[n]
                  , r = e[n];
                if (void 0 === r || !c(r, i))
                    return !1
            }
        return !0
    }
    function o(e, t) {
        for (var n, i, r = 0, o = 0; o < t.length; o++) {
            var s = t[o];
            if (!(r < e.length))
                return "**" === s && o === t.length - 1;
            if (n = e[r],
            "*" !== s && "**" !== s && s !== n)
                return !1;
            if ("**" === s) {
                if (!(o + 1 < t.length))
                    return !0;
                i = t[o + 1];
                for (var a = !1; !a; )
                    if (n = e[r],
                    i === n)
                        a = !0;
                    else if (r += 1,
                    r >= e.length)
                        return !1
            } else
                r += 1
        }
        return r >= e.length
    }
    function s(e) {
        return e.replace(/^\/+/, "")
    }
    function a(e) {
        var t = e.anchor || ""
          , n = t.indexOf("?");
        return n !== -1 && (t = t.substring(0, n)),
        e.path && "/" === e.path[e.path.length - 1] && t && "/" === t[0] ? "#" + t : t
    }
    function u(e, t) {
        var n = i(e)
          , u = s((n.path || "") + a(n)).split("/")
          , c = n.queryKey
          , l = i("http://example.com/" + t)
          , d = s((l.path || "") + a(l)).split("/")
          , f = l.queryKey;
        return o(u, d) && r(c, f)
    }
    var c = n(14);
    i.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    },
    t.acceptUrlFromWhitelist = function(e, t) {
        return t.split("\n").some(function(t) {
            return u(e, t.trim())
        })
    }
    ,
    t.acceptUrlFromBlacklist = function(e, n) {
        return !t.acceptUrlFromWhitelist(e, n)
    }
}
, function(e, t, n) {
    var i = n(13)
      , r = n(15)
      , o = n(3)
      , s = n(1)
      , a = (n(8),
    n(21))
      , u = n(12)
      , c = n(6)
      , l = n(4)
      , d = document
      , f = location
      , h = function(e, t, n, i, r, o, s) {
        this.queue = e,
        this.guid = t,
        this.init(n, i, r, o, s),
        this.MOBILE_MARGIN = 20
    }
      , p = function(e, t) {
        if (!e)
            return null;
        var n = t || {};
        for (var i in e)
            n[i] = e[i];
        return n
    }
      , m = function(e) {
        return Object.keys(e).map(function(t) {
            return e[t] ? t + ":" + e[t] + ";" : ""
        }).join("")
    }
      , g = 0
      , y = {
        ios: {
            responsivePosition: "absolute",
            containerOverflowScroll: "touch"
        },
        base: {
            responsivePosition: "relative",
            containerOverflowScroll: ""
        }
    }
      , v = function() {
        if (Object.keys) {
            var e = {
                "line-height": "normal",
                overflow: "visible",
                position: "fixed",
                "z-index": 1e4
            }
              , t = {
                left: {
                    height: "0px",
                    left: "0",
                    bottom: "50%",
                    "transform-origin": "top left",
                    transform: "rotate(270deg)"
                },
                bot_left: {
                    bottom: "0",
                    left: "5%"
                },
                bot_right: {
                    bottom: "0",
                    right: "5%"
                },
                right: {
                    height: "0px",
                    right: "0",
                    bottom: "50%",
                    "transform-origin": "top right",
                    transform: "rotate(-270deg)"
                }
            };
            return Object.keys(t).forEach(function(n) {
                p(e, t[n])
            }),
            t.default = t.right,
            t
        }
    }()
      , _ = 24
      , w = function() {
        if (Object.keys) {
            var e = {
                display: "block",
                "min-height": _ + "pt",
                padding: "0.25em 0.75em",
                "text-align": "center",
                "word-wrap": "break-word"
            }
              , t = {
                border: "none",
                cursor: "pointer"
            }
              , n = {
                border: "none",
                cursor: "pointer",
                bottom: "0",
                height: "auto",
                "border-top-left-radius": "4px",
                "border-top-right-radius": "4px"
            }
              , i = {
                "border-bottom-left-radius": "4px",
                "border-bottom-right-radius": "4px"
            }
              , r = {
                left: "5%"
            }
              , o = {
                right: "5%"
            }
              , s = {
                "border-bottom-left-radius": "4px",
                "border-bottom-right-radius": "4px"
            }
              , a = {
                left: p(t),
                bot_left: p(n),
                bot_right: p(n),
                right: p(t)
            };
            return p(i, a.left),
            p(r, a.bot_left),
            p(o, a.bot_right),
            p(s, a.right),
            Object.keys(a).forEach(function(t) {
                p(e, a[t])
            }),
            a.default = a.right,
            a
        }
    }()
      , b = "fbuy_iFrameResizer"
      , S = {
        "width-response": function(e, t) {
            var n = d.getElementById(e.guid + "_frndby_unit")
              , i = d.getElementById(e.guid + "_frndby_close_btn")
              , r = window.innerWidth >= e.width ? e.width : t.width;
            n && r + "px" !== n.style.maxWidth && (e.setStyle(n, {
                "max-width": r + "px"
            }),
            e.setStyle(i, {
                "max-width": r + "px"
            }),
            e.centerWidgetPopup(n, i));
            var o = d.getElementById(e.guid + "_frndby_container");
            o && (n && (n.style.visibility = "visible"),
            e.centerWidgetPopup(n, i))
        },
        "dismiss-widget": function(e, t) {
            e.closeWidget()
        },
        "redirect-parent": function(e, t) {
            window.location.href = t.url
        }
    };
    h.prototype = {
        constructor: h,
        init: function(e, t, n, i, o) {
            this.find = r,
            this.groupId = t,
            this.selector = n,
            this.events = i,
            this.options = p(o),
            this.params = p(e),
            this.options && this.options.parameters && (this.params.parameters = this.options.parameters),
            this.options && this.options.criteria && (this.params.criteria = this.options.criteria),
            this.options && (delete this.options.parameters,
            delete this.options.criteria),
            e.site = e.site || f.host,
            this.site = e.site,
            this.campaignId = e.campaign_id || "",
            this.autoDelay = o && o.configuration && "undefined" != typeof o.configuration.auto_delay ? o.configuration.auto_delay : null,
            this.shareButton = !o || !o.configuration || "undefined" == typeof o.configuration.share_button || o.configuration.share_button,
            this.shareWidgetElement = null,
            this.widgetCreated = !1,
            this.merchantId = null,
            this.campaignId = null,
            this.shareButtonSrc = null,
            this.closeButtonSrc = null,
            this.opacity = null,
            this.width = null,
            this.height = null,
            this.top = null,
            this.embedLoadCode = null,
            this.widgetType = null,
            this.debug = !1,
            this.widgetSrc = null,
            this.ribbonCallToAction = null,
            this.ribbonPosition = null,
            this.ribbonBackgroundColor = null,
            this.ribbonFontColor = null,
            this.ribbonFontFamily = null,
            this.ribbonFontSize = null,
            this.ribbonOpacity = null
        },
        load: function() {
            var e = this.params;
            if (this.criteria = [],
            e.criteria)
                for (var t in e.criteria) {
                    var i = t + ":" + encodeURIComponent(e.criteria[t]);
                    this.criteria.push("criterion=" + i.toLowerCase())
                }
            var r = u.getPreferredCampaignForGroup(this.groupId)
              , o = n(9)
              , l = o.select(e.site, this.groupId, r);
            if (null === l)
                return void c.log("No properties found for site:" + e.site + ", groupId:" + this.groupId + ", preferredCampaignId:" + r);
            l && l.target_wgids && l.id && u.setPreferredCampaignForGroup(l.target_wgids[0], l.id);
            var d = this.options;
            this.name = l.name,
            this.merchantId = l.merchant_id,
            this.campaignId = l.id,
            this.shareLinkParameters = l.share_link_parameters,
            this.serviceProtocol = l.service_protocol,
            this.customerInfo = l.customerInfo,
            this.serviceSite = l.service_site || e.widget_service_site,
            this.shareButtonSrc = l.share_button_url || "//static-friendbuy-com.s3.amazonaws.com/img/img.gif",
            this.closeButtonSrc = l.close_button_url || "//static-friendbuy-com.s3.amazonaws.com/img/btn_close.gif",
            null === this.autoDelay && (this.autoDelay = 1e3 * l.automatically_show_widget),
            this.opacity = l.opacity || 80,
            this.width = parseInt(l.width || 685),
            this.height = parseInt(l.height || 475),
            this.top = parseInt(l.top || 50) || null,
            this.embedLoadCode = l.embedLoadCode,
            this.widgetEnabled = !l.widgetDisabled,
            this.widgetType = l.widget_type,
            this.widgetResponsive = l.widget_responsive,
            this.daysBetweenPopups = l.days_between_popups || 0,
            this.ribbonCallToAction = l.ribbon_call_to_action || "",
            this.ribbonPosition = l.orientation || "left",
            this.ribbonBackgroundColor = l.ribbon_background || "#D65129",
            this.ribbonFontColor = l.ribbon_fontcolor || "#fff",
            this.ribbonFontFamily = l.ribbon_fontfamily || "",
            this.ribbonFontSize = l.ribbon_fontsize || "12px",
            this.ribbonOpacity = l.ribbon_opacity || 80,
            this.hasCustomRibbon = l.has_custom_ribbon,
            this.ribbonMarkup = l.ribbon_markup,
            this.widgetSrc = e.preview ? "/widgets/" + l.id + "/source" : l.widget_src,
            d && d.content && (this.widgetSrc += this.widgetSrc.indexOf("?") > -1 ? "&" : "?",
            this.widgetSrc += "content=" + encodeURIComponent(JSON.stringify(d.content))),
            this.risid = a(),
            s.post(this.serviceUrl("widgets/" + this.campaignId + "/references"), {
                embed_load_code: this.risid,
                objective: l.objective
            }),
            this.widgetEnabled && this.createWidget()
        },
        shouldShowRibbon: function() {
            return this.ribbonPosition && "none" !== this.ribbonPosition && this.autoDelay <= 0
        },
        shouldShowRibbonPopup: function() {
            return l.isPopupDue(this.groupId, this.daysBetweenPopups)
        },
        showRibbon: function() {
            this.createWidgetRibbon()
        },
        showRibbonPopup: function() {
            this.autoShowWidget(),
            l.popupAppeared(this.groupId)
        },
        shouldShowOverlay: function() {
            return this.shareWidgetElement = this.find(this.selector),
            this.assignClickEvent(),
            "popup" === this.widgetType && this.createShareButton(),
            l.isPopupDue(this.groupId, this.daysBetweenPopups)
        },
        showOverlay: function() {
            this.shareWidgetElement && this.autoShowWidget(),
            l.popupAppeared(this.groupId)
        },
        shouldShowEmbedded: function() {
            return !0
        },
        showEmbedded: function() {
            this.shareWidgetElement = this.find(this.selector),
            this.createWidgetEmbedded()
        },
        createWidget: function() {
            switch (this.widgetType) {
            case "ribbon":
                this.shouldShowRibbon() ? this.showRibbon() : this.shouldShowRibbonPopup() && this.showRibbonPopup();
                break;
            case "embedded":
                this.shouldShowEmbedded() && this.showEmbedded();
                break;
            case "popup":
            case "native_element":
                this.shouldShowOverlay() && this.showOverlay();
                break;
            default:
                c.log("no known widgetType:" + this.widgetType)
            }
        },
        createWidgetRibbon: function() {
            function e() {
                t.style.visibility = "hidden",
                d.getElementsByTagName("body")[0].appendChild(o),
                "left" !== s.ribbonPosition && "right" !== s.ribbonPosition || (t.style.bottom = "calc(" + t.style.bottom + " - " + t.scrollWidth / 2 + "px)"),
                t.style.visibility = ""
            }
            var t = this.ele("div", {
                id: this.guid + "_ribbon_container",
                style: m(p(v[this.ribbonPosition] || v.default))
            })
              , n = this.ribbonFontSize < _ ? _ + "pt" : "normal"
              , i = m({
                cursor: "pointer"
            });
            this.hasCustomRibbon || (i = m(p(w[this.ribbonPosition] || w.default)) + m({
                "background-color": this.ribbonBackgroundColor,
                color: this.ribbonFontColor,
                "font-family": this.ribbonFontFamily || "",
                "font-size": this.ribbonFontSize + "pt",
                "line-height": n,
                opacity: this.ribbonOpacity / 100,
                filter: "alpha(opacity=" + this.ribbonOpacity + ")"
            }));
            var r = this.ele("div", {
                id: this.guid + "_ribbon_tab",
                href: "#",
                style: i
            })
              , o = d.createDocumentFragment();
            r.innerHTML = this.hasCustomRibbon ? this.ribbonMarkup : this.ribbonCallToAction,
            t.appendChild(r),
            o.appendChild(t);
            var s = this;
            "loading" === d.readyState ? (window.addEventListener || window.attachEvent)(window.addEventListener ? "load" : "onload", e) : e(),
            s.ribbonTrigger = t,
            this.assignProperty([t], "onclick", function(e) {
                var t = e || window.event;
                t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                s.showWidget()
            })
        },
        assignProperty: function(e, t, n) {
            for (var i = 0, r = e.length; i < r; i += 1)
                e[i][t] = n
        },
        createShareButton: function() {
            if (this.shareWidgetElement) {
                this.shareButton && this.assignProperty(this.shareWidgetElement, "innerHTML", "<a href='javascript:void(0);'><img src='" + this.shareButtonSrc + "' border='0' alt='' /></a>");
                var e = this;
                this.assignProperty(this.shareWidgetElement, "onclick", function(t) {
                    var n = t || window.event;
                    n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    e.showWidget()
                })
            }
        },
        assignClickEvent: function() {
            var e = this;
            this.assignProperty(this.shareWidgetElement, "onclick", function(t) {
                var n = t || window.event;
                n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                e.showWidget()
            })
        },
        isOverlay: function() {
            return "popup" === this.widgetType || "native_element" == this.widgetType
        },
        autoShowWidget: function() {
            if (this.autoDelay > 0) {
                var e = this;
                window.setTimeout(function() {
                    e.showWidget()
                }, this.autoDelay)
            }
        },
        pushContent: function(e) {
            if (Object.keys && e && this.options && this.options.content) {
                var t = this.options.content;
                Object.keys(t).forEach(function(n) {
                    o.postMessage(JSON.stringify({
                        friendbuy: !0,
                        type: "content",
                        key: n,
                        value: t[n]
                    }), e.src, e.contentWindow)
                })
            }
        },
        setIframeSrc: function() {
            var e = this
              , t = this.find(this.iframeSelector());
            t && t.forEach(function(t) {
                var n = e.widgetSrc;
                e.params.preview && (n += (n.indexOf("?") >= 0 ? "&" : "?") + "preview=" + e.params.preview);
                var r = n + "#" + encodeURIComponent(f.href + "#" + e.guid);
                e.params.preview && (r = location.origin + r);
                var a = navigator.userAgent.indexOf("MSIE") !== -1;
                t.addEventListener("load", function(n) {
                    if (t.iFrameResizer || i({
                        messageCallback: function(t) {
                            t.message.friendbuy && S[t.message.type] && S[t.message.type](e, t.message)
                        },
                        maxHeight: 1.25 * e.height,
                        heightCalculationMethod: a ? "max" : "lowestElement",
                        id: b
                    }, t),
                    this.src === r) {
                        var u = e.customerInfo;
                        if (u || (u = {},
                        e.params && e.params.customer && (u.account_id = e.params.customer.id,
                        u.first_name = e.params.customer.first_name,
                        u.last_name = e.params.customer.last_name,
                        u.email = e.params.customer.email)),
                        o.postMessage(e.guid + JSON.stringify({
                            embedLoadCode: e.risid,
                            serviceSite: e.serviceSite,
                            serviceProtocol: e.serviceProtocol,
                            merchantId: e.merchantId,
                            campaignId: e.campaignId,
                            customerInfo: JSON.stringify(u),
                            originalData: e.params,
                            shopperWorkaround: e.queue.shopperWorkaround || void 0
                        }), r, t.contentWindow),
                        !e.params.preview && u && u.account_id) {
                            var l = e.serviceUrl("customers")
                              , d = {
                                account_id: u.account_id,
                                campaign_id: e.campaignId,
                                first_name: u.first_name,
                                last_name: u.last_name,
                                email_address: u.email,
                                share_link_parameters: e.shareLinkParameters,
                                purl_parameters: e.params.parameters
                            }
                              , f = function(n) {
                                u.trackable_link = n.trackable_link,
                                o.postMessage(e.guid + JSON.stringify({
                                    customerInfo: JSON.stringify(u)
                                }), r, t.contentWindow)
                            }
                              , h = function(e) {
                                c.error(e)
                            }
                              , p = function(e) {
                                s.post(l, d, f, e)
                            }
                              , m = function() {
                                p(h)
                            };
                            p(m)
                        }
                    }
                    e.requestIframeSize(),
                    e.pushContent(t),
                    t.contentWindow && t.contentWindow.focus()
                }),
                s.post(e.serviceUrl("widgets/" + e.campaignId + "/impressions"), {
                    widget_url: e.widgetSrc,
                    embed_load_code: e.risid
                });
                var u = function(e) {
                    return e.replace(/[#?].*$/, "")
                };
                u(t.src) !== u(r) ? t.src = r : o.postMessage(JSON.stringify({
                    friendbuy: !0,
                    type: "reload"
                }), t.src, t.contentWindow)
            })
        },
        isRunningOnMobile: function() {
            if (this.force_mobile)
                return !0;
            var e = window.matchMedia ? window.matchMedia("(max-device-width: " + this.width + "px)").matches : screen.width < this.width;
            return e && (this.isResponsive() || this.isOverlay())
        },
        isResponsive: function() {
            return "enabled" === this.widgetResponsive
        },
        styleForMobile: function(e, t) {
            this.isResponsive() || (e.style.width = this.width + "px",
            t && (e.style.height = t + "px"))
        },
        requestIframeSize: function() {
            this.find(this.iframeSelector()).forEach(function(e) {
                o.postMessage(JSON.stringify({
                    friendbuy: !0,
                    type: "width-request"
                }), e.src, e.contentWindow)
            })
        },
        centerWidgetPopup: function(e, t) {
            e.style["margin-left"] = -(e.clientWidth / 2) + "px",
            t.style["margin-left"] = -(t.clientWidth / 2) + "px"
        },
        showWidget: function() {
            this.ensureWidgetCreated();
            var e = d.getElementById(this.guid + "_frndby_container");
            e && (e.style.display = "block");
            var t = d.getElementById(this.guid + "_frndby_unit")
              , n = d.getElementById(this.guid + "_frndby_close_btn");
            if (this.isRunningOnMobile()) {
                if (this.isResponsive()) {
                    var i = d.querySelector("meta[name=viewport]");
                    i ? this.previousViewport = i.content : (this.previousViewport = "width=980, height=1306",
                    i = document.createElement("meta"),
                    i.name = "viewport",
                    d.getElementsByTagName("head")[0].appendChild(i)),
                    i.content = "width=device-width, height=device-height",
                    window.scrollTo(0, 1)
                }
                this.styleForMobile(t, this.height),
                this.styleForMobile(n)
            }
            this.isOverlay() && (this.overflowOriginal = d.body.style.overflow,
            this.setStyle(d.body, {
                overflow: "hidden"
            })),
            "embedded" !== this.widgetType && this.centerWidgetPopup(t, n),
            this.setIframeSrc(),
            n && (n.style.display = "block");
            var r = d.getElementById(this.guid + "_frndby_bg");
            r && (r.innerHTML = "")
        },
        hideWidget: function() {
            d.getElementById(this.guid + "_frndby_container").style.display = "none",
            d.getElementById(this.guid + "_frndby_close_btn").style.display = "none",
            this.find(this.iframeSelector()).forEach(function(e) {
                o.postMessage(JSON.stringify({
                    friendbuy: !0,
                    type: "close"
                }), e.src, e.contentWindow)
            })
        },
        ensureWidgetCreated: function() {
            this.widgetCreated || (this.createWidgetPopup(),
            this.widgetCreated = !0)
        },
        onIos: function() {
            return /iPhone|iPad|iPod/.test(navigator.userAgent)
        },
        getPlatformSettings: function() {
            return y[this.onIos() ? "ios" : "base"]
        },
        setResponsiveStyles: function(e) {
            this.setStyle(e, {
                display: "block",
                position: this.getPlatformSettings().responsivePosition,
                left: "50%",
                "margin-left": -(Math.min(this.width, this.getWidth()) / 2) + "px",
                "max-width": this.width + "px",
                "min-width": "320px",
                width: "100%"
            })
        },
        createWidgetPopup: function() {
            var e = this.onIos() ? this.ele("div", {
                id: this.guid + "_frndby_container"
            }) : this.createBlackDiv();
            this.setStyle(e, {
                display: "none",
                "-webkit-overflow-scrolling": this.getPlatformSettings().containerOverflowScroll
            }),
            this.onIos() && e.appendChild(this.createBlackDiv(this.guid + "_frndby_bg"));
            var t = this.ele("div", {
                id: this.guid + "_frndby_unit"
            });
            t.setAttribute("role", "dialog"),
            t.setAttribute("aria-modal", "true"),
            this.setResponsiveStyles(t),
            this.setStyle(t, {
                "text-align": "left",
                top: this.unitTop() + "px",
                visibility: "hidden",
                "z-index": "999998",
                overflow: "hidden"
            });
            var n = this.createWidgetIframe()
              , i = d.createDocumentFragment();
            t.appendChild(n),
            e.appendChild(t);
            var r = this.createCloseButton();
            if (t.appendChild(r),
            i.appendChild(e),
            d.getElementsByTagName("body")[0].appendChild(i),
            !this.isRunningOnMobile()) {
                var o = this;
                window.addEventListener("resize", function() {
                    o.requestIframeSize(),
                    o.centerWidgetPopup(t, r)
                })
            }
        },
        createBlackDiv: function(e) {
            var t = this.ele("div", {
                id: e || this.guid + "_frndby_container"
            });
            return this.setStyle(t, {
                display: "block",
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                "background-color": "rgba(48, 48, 48, " + (this.opacity || 100) / 100 + ")",
                "overflow-x": "hidden",
                "overflow-y": "scroll",
                "z-index": "100001"
            }),
            t.innerHTML = '<img alt="Loading..." border="0" width="80" height="80" id="' + this.guid + '_frndby_unit_loading" src="//cdn.friendbuy.com/img/ajax-loader.gif" style="position: absolute; left: 50%; top: 80px; margin-left: -40px; z-index:1;" />',
            t
        },
        fireEvent: function(e, t) {
            if ("widget.title" === e) {
                var n = t
                  , i = this.find(this.iframeSelector());
                if (!i)
                    return;
                return void i.forEach(function(e) {
                    e.title = n
                })
            }
            var r = this.events;
            if (r[e])
                for (var o = Array.prototype.slice.call(arguments).slice(1), s = 0, a = r[e].length; s < a; s += 1)
                    r[e][s].apply(null, o)
        },
        createCloseButton: function() {
            var e = this.ele("div", {
                id: this.guid + "_frndby_close_btn",
                align: "right"
            });
            this.setResponsiveStyles(e),
            this.setStyle(e, {
                position: "absolute",
                "text-align": "right",
                top: g + "px",
                "z-index": "999999"
            });
            var t = this.ele("a", {
                href: "javascript:void(0)"
            })
              , n = this.ele("img", {
                alt: "",
                border: "0",
                "aria-label": "closeout"
            });
            this.setStyle(n, {
                display: "inline",
                "max-width": "31px"
            }),
            n.src = this.closeButtonSrc,
            t.appendChild(n),
            e.appendChild(t);
            var i = this;
            return t.onclick = function() {
                i.closeWidget()
            }
            ,
            e
        },
        closeWidget: function() {
            var e = this;
            if (e.isRunningOnMobile() && e.isResponsive()) {
                var t = d.querySelector("meta[name=viewport]");
                t || (t = d.createElement("meta"),
                t.name = "viewport",
                d.getElementsByTagName("head")[0].appendChild(t)),
                t.content = e.previousViewport
            }
            e.hideWidget(),
            e.setStyle(d.body, {
                overflow: e.overflowOriginal
            });
            var n = setInterval(function() {
                "none" === d.getElementById(e.guid + "_frndby_container").style.display && (e.fireEvent("widget.close", e),
                clearInterval(n))
            }, 100)
        },
        createWidgetEmbedded: function() {
            for (var e = 0, t = this.shareWidgetElement.length; e < t; e += 1) {
                var n = this.createWidgetIframe();
                this.shareWidgetElement[e].appendChild(n),
                this.widgetCreated = !0
            }
            this.setIframeSrc()
        },
        iframeClass: function() {
            return this.guid + "_frndby_iframe"
        },
        iframeSelector: function() {
            return "." + this.iframeClass()
        },
        createWidgetIframe: function() {
            var e = this.ele("iframe", {
                class: this.iframeClass(),
                frameBorder: "false",
                scrolling: "yes",
                title: this.name || "Friendbuy widget"
            });
            return this.setStyle(e, {
                position: "relative",
                "z-index": "2",
                border: "0px",
                height: this.height + "px",
                left: "0",
                top: "0"
            }),
            e.style.width = this.isResponsive() ? "100%" : this.width + "px",
            e.style.height = this.height + "px",
            e
        },
        ele: function(e, t) {
            var n = d.createElement(e);
            for (var i in t)
                n.setAttribute(i, t[i]);
            return n
        },
        toCamelCase: function(e) {
            return e.indexOf("-") > -1 ? e.replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            }) : e
        },
        setStyle: function(e, t) {
            if (e)
                for (var n in t)
                    e.style[this.toCamelCase(n)] = t[n]
        },
        getScrollTop: function() {
            if ("undefined" != typeof pageYOffset)
                return pageYOffset;
            var e = d.documentElement.clientHeight ? d.documentElement : d.body;
            return e.scrollTop
        },
        getHeight: function() {
            if ("undefined" != typeof window.innerHeight)
                return window.innerHeight;
            var e = d.documentElement.clientHeight ? d.documentElement : d.body;
            return e.clientHeight
        },
        getWidth: function() {
            if ("undefined" != typeof window.innerWidth)
                return window.innerWidth;
            var e = d.documentElement.clientWidth ? d.documentElement : d.body;
            return e.clientWidth
        },
        unitTop: function() {
            return this.top >= 0 ? this.top : this.getScrollTop() + .1 * this.getHeight()
        },
        serviceUrl: function(e) {
            var t = this.serviceProtocol + this.serviceSite + "/" + this.params.site;
            return e && (t += "/" + encodeURI(e)),
            t
        }
    },
    e.exports = h
}
, function(e, t) {
    "use strict";
    function n(e, t, n) {
        e instanceof RegExp && (e = i(e, n)),
        t instanceof RegExp && (t = i(t, n));
        var o = r(e, t, n);
        return o && {
            start: o[0],
            end: o[1],
            pre: n.slice(0, o[0]),
            body: n.slice(o[0] + e.length, o[1]),
            post: n.slice(o[1] + t.length)
        }
    }
    function i(e, t) {
        var n = t.match(e);
        return n ? n[0] : null
    }
    function r(e, t, n) {
        var i, r, o, s, a, u = n.indexOf(e), c = n.indexOf(t, u + 1), l = u;
        if (u >= 0 && c > 0) {
            for (i = [],
            o = n.length; l >= 0 && !a; )
                l == u ? (i.push(l),
                u = n.indexOf(e, l + 1)) : 1 == i.length ? a = [i.pop(), c] : (r = i.pop(),
                r < o && (o = r,
                s = c),
                c = n.indexOf(t, l + 1)),
                l = u < c && u >= 0 ? u : c;
            i.length && (a = [o, s])
        }
        return a
    }
    e.exports = n,
    n.range = r
}
, function(e, t, n) {
    function i(e) {
        return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0)
    }
    function r(e) {
        return e.split("\\\\").join(m).split("\\{").join(g).split("\\}").join(y).split("\\,").join(v).split("\\.").join(_)
    }
    function o(e) {
        return e.split(m).join("\\").split(g).join("{").split(y).join("}").split(v).join(",").split(_).join(".")
    }
    function s(e) {
        if (!e)
            return [""];
        var t = []
          , n = p("{", "}", e);
        if (!n)
            return e.split(",");
        var i = n.pre
          , r = n.body
          , o = n.post
          , a = i.split(",");
        a[a.length - 1] += "{" + r + "}";
        var u = s(o);
        return o.length && (a[a.length - 1] += u.shift(),
        a.push.apply(a, u)),
        t.push.apply(t, a),
        t
    }
    function a(e) {
        return e ? ("{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2)),
        f(r(e), !0).map(o)) : []
    }
    function u(e) {
        return "{" + e + "}"
    }
    function c(e) {
        return /^-?0\d/.test(e)
    }
    function l(e, t) {
        return e <= t
    }
    function d(e, t) {
        return e >= t
    }
    function f(e, t) {
        var n = []
          , r = p("{", "}", e);
        if (!r || /\$$/.test(r.pre))
            return [e];
        var o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(r.body)
          , a = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(r.body)
          , m = o || a
          , g = r.body.indexOf(",") >= 0;
        if (!m && !g)
            return r.post.match(/,.*\}/) ? (e = r.pre + "{" + r.body + y + r.post,
            f(e)) : [e];
        var v;
        if (m)
            v = r.body.split(/\.\./);
        else if (v = s(r.body),
        1 === v.length && (v = f(v[0], !1).map(u),
        1 === v.length)) {
            var _ = r.post.length ? f(r.post, !1) : [""];
            return _.map(function(e) {
                return r.pre + v[0] + e
            })
        }
        var w, b = r.pre, _ = r.post.length ? f(r.post, !1) : [""];
        if (m) {
            var S = i(v[0])
              , k = i(v[1])
              , x = Math.max(v[0].length, v[1].length)
              , M = 3 == v.length ? Math.abs(i(v[2])) : 1
              , D = l
              , O = k < S;
            O && (M *= -1,
            D = d);
            var E = v.some(c);
            w = [];
            for (var C = S; D(C, k); C += M) {
                var T;
                if (a)
                    T = String.fromCharCode(C),
                    "\\" === T && (T = "");
                else if (T = String(C),
                E) {
                    var R = x - T.length;
                    if (R > 0) {
                        var W = new Array(R + 1).join("0");
                        T = C < 0 ? "-" + W + T.slice(1) : W + T
                    }
                }
                w.push(T)
            }
        } else
            w = h(v, function(e) {
                return f(e, !1)
            });
        for (var P = 0; P < w.length; P++)
            for (var Y = 0; Y < _.length; Y++) {
                var I = b + w[P] + _[Y];
                (!t || m || I) && n.push(I)
            }
        return n
    }
    var h = n(27)
      , p = n(25);
    e.exports = a;
    var m = "\0SLASH" + Math.random() + "\0"
      , g = "\0OPEN" + Math.random() + "\0"
      , y = "\0CLOSE" + Math.random() + "\0"
      , v = "\0COMMA" + Math.random() + "\0"
      , _ = "\0PERIOD" + Math.random() + "\0"
}
, function(e, t) {
    e.exports = function(e, t) {
        for (var i = [], r = 0; r < e.length; r++) {
            var o = t(e[r], r);
            n(o) ? i.push.apply(i, o) : i.push(o)
        }
        return i
    }
    ;
    var n = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}
, function(e, t, n) {
    (function(e) {
        function n(e, t) {
            for (var n = 0, i = e.length - 1; i >= 0; i--) {
                var r = e[i];
                "." === r ? e.splice(i, 1) : ".." === r ? (e.splice(i, 1),
                n++) : n && (e.splice(i, 1),
                n--)
            }
            if (t)
                for (; n--; n)
                    e.unshift("..");
            return e
        }
        function i(e, t) {
            if (e.filter)
                return e.filter(t);
            for (var n = [], i = 0; i < e.length; i++)
                t(e[i], i, e) && n.push(e[i]);
            return n
        }
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          , o = function(e) {
            return r.exec(e).slice(1)
        };
        t.resolve = function() {
            for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                var s = o >= 0 ? arguments[o] : e.cwd();
                if ("string" != typeof s)
                    throw new TypeError("Arguments to path.resolve must be strings");
                s && (t = s + "/" + t,
                r = "/" === s.charAt(0))
            }
            return t = n(i(t.split("/"), function(e) {
                return !!e
            }), !r).join("/"),
            (r ? "/" : "") + t || "."
        }
        ,
        t.normalize = function(e) {
            var r = t.isAbsolute(e)
              , o = "/" === s(e, -1);
            return e = n(i(e.split("/"), function(e) {
                return !!e
            }), !r).join("/"),
            e || r || (e = "."),
            e && o && (e += "/"),
            (r ? "/" : "") + e
        }
        ,
        t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }
        ,
        t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(i(e, function(e, t) {
                if ("string" != typeof e)
                    throw new TypeError("Arguments to path.join must be strings");
                return e
            }).join("/"))
        }
        ,
        t.relative = function(e, n) {
            function i(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++)
                    ;
                for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                    ;
                return t > n ? [] : e.slice(t, n - t + 1)
            }
            e = t.resolve(e).substr(1),
            n = t.resolve(n).substr(1);
            for (var r = i(e.split("/")), o = i(n.split("/")), s = Math.min(r.length, o.length), a = s, u = 0; u < s; u++)
                if (r[u] !== o[u]) {
                    a = u;
                    break
                }
            for (var c = [], u = a; u < r.length; u++)
                c.push("..");
            return c = c.concat(o.slice(a)),
            c.join("/")
        }
        ,
        t.sep = "/",
        t.delimiter = ":",
        t.dirname = function(e) {
            var t = o(e)
              , n = t[0]
              , i = t[1];
            return n || i ? (i && (i = i.substr(0, i.length - 1)),
            n + i) : "."
        }
        ,
        t.basename = function(e, t) {
            var n = o(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
            n
        }
        ,
        t.extname = function(e) {
            return o(e)[3]
        }
        ;
        var s = "b" === "ab".substr(-1) ? function(e, t, n) {
            return e.substr(t, n)
        }
        : function(e, t, n) {
            return t < 0 && (t = e.length + t),
            e.substr(t, n)
        }
    }
    ).call(t, n(11))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children = [],
        e.webpackPolyfill = 1),
        e
    }
}
]);
