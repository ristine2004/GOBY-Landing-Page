!function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).dataCollector = e()
}(function() {
    return function r(i, o, s) {
        function a(t, e) {
            if (!o[t]) {
                if (!i[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n)
                        return n(t, !0);
                    if (c)
                        return c(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    n
                }
                n = o[t] = {
                    exports: {}
                },
                i[t][0].call(n.exports, function(e) {
                    return a(i[t][1][e] || e)
                }, n, n.exports, r, i, o, s)
            }
            return o[t].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < s.length; e++)
            a(s[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PromiseGlobal = void 0;
            e = r(e("promise-polyfill")),
            e = "undefined" != typeof Promise ? Promise : e.default;
            n.PromiseGlobal = e
        }
        , {
            "promise-polyfill": 9
        }],
        2: [function(e, t, n) {
            "use strict";
            var s = e("./lib/promise")
              , a = {};
            function r(n) {
                var e, t = JSON.stringify(n);
                if (!n.forceScriptReload && (e = a[t]))
                    return e;
                var r = document.createElement("script")
                  , i = n.dataAttributes || {}
                  , o = n.container || document.head;
                return r.src = n.src,
                r.id = n.id || "",
                r.async = !0,
                n.crossorigin && r.setAttribute("crossorigin", "" + n.crossorigin),
                Object.keys(i).forEach(function(e) {
                    r.setAttribute("data-" + e, "" + i[e])
                }),
                e = new s.PromiseGlobal(function(e, t) {
                    r.addEventListener("load", function() {
                        e(r)
                    }),
                    r.addEventListener("error", function() {
                        t(new Error(n.src + " failed to load."))
                    }),
                    r.addEventListener("abort", function() {
                        t(new Error(n.src + " has aborted."))
                    }),
                    o.appendChild(r)
                }
                ),
                a[t] = e
            }
            r.clearCache = function() {
                a = {}
            }
            ,
            t.exports = r
        }
        , {
            "./lib/promise": 1
        }],
        3: [function(e, t, n) {
            t.exports = e("./dist/load-script")
        }
        , {
            "./dist/load-script": 2
        }],
        4: [function(e, t, n) {
            "use strict";
            var r = "undefined" != typeof Promise ? Promise : null
              , r = (i.defaultOnResolve = function(e) {
                return i.Promise.resolve(e)
            }
            ,
            i.defaultOnReject = function(e) {
                return i.Promise.reject(e)
            }
            ,
            i.setPromise = function(e) {
                i.Promise = e
            }
            ,
            i.shouldCatchExceptions = function(e) {
                return e.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(e.suppressUnhandledPromiseMessage) : Boolean(i.suppressUnhandledPromiseMessage)
            }
            ,
            i.all = function(e) {
                return i.Promise.all(e)
            }
            ,
            i.allSettled = function(e) {
                return i.Promise.allSettled(e)
            }
            ,
            i.race = function(e) {
                return i.Promise.race(e)
            }
            ,
            i.reject = function(e) {
                return i.Promise.reject(e)
            }
            ,
            i.resolve = function(e) {
                return i.Promise.resolve(e)
            }
            ,
            i.prototype.then = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).then.apply(e, t)
            }
            ,
            i.prototype.catch = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).catch.apply(e, t)
            }
            ,
            i.prototype.resolve = function(e) {
                var t = this;
                return this.isFulfilled || (this._setResolved(),
                i.Promise.resolve().then(function() {
                    return t._onResolve(e)
                }).then(function(e) {
                    t._resolveFunction(e)
                }).catch(function(e) {
                    t._resetState(),
                    t.reject(e)
                })),
                this
            }
            ,
            i.prototype.reject = function(e) {
                var t = this;
                return this.isFulfilled || (this._setRejected(),
                i.Promise.resolve().then(function() {
                    return t._onReject(e)
                }).then(function(e) {
                    t._setResolved(),
                    t._resolveFunction(e)
                }).catch(function(e) {
                    return t._rejectFunction(e)
                })),
                this
            }
            ,
            i.prototype._resetState = function() {
                this.isFulfilled = !1,
                this.isResolved = !1,
                this.isRejected = !1
            }
            ,
            i.prototype._setResolved = function() {
                this.isFulfilled = !0,
                this.isResolved = !0,
                this.isRejected = !1
            }
            ,
            i.prototype._setRejected = function() {
                this.isFulfilled = !0,
                this.isResolved = !1,
                this.isRejected = !0
            }
            ,
            i.Promise = r,
            i);
            function i(e) {
                var n = this;
                "function" != typeof e ? (this._promise = new i.Promise(function(e, t) {
                    n._resolveFunction = e,
                    n._rejectFunction = t
                }
                ),
                this._onResolve = (e = e || {}).onResolve || i.defaultOnResolve,
                this._onReject = e.onReject || i.defaultOnReject,
                i.shouldCatchExceptions(e) && this._promise.catch(function() {}),
                this._resetState()) : this._promise = new i.Promise(e)
            }
            t.exports = r
        }
        , {}],
        5: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.deferred = function(n) {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    setTimeout(function() {
                        try {
                            n.apply(void 0, e)
                        } catch (e) {
                            console.log("Error in callback function"),
                            console.log(e)
                        }
                    }, 1)
                }
            }
        }
        , {}],
        6: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.once = function(n) {
                var r = !1;
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    r || (r = !0,
                    n.apply(void 0, e))
                }
            }
        }
        , {}],
        7: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.promiseOrCallback = function(e, t) {
                if (!t)
                    return e;
                e.then(function(e) {
                    return t(null, e)
                }).catch(function(e) {
                    return t(e)
                })
            }
        }
        , {}],
        8: [function(e, t, n) {
            "use strict";
            var i = e("./lib/deferred")
              , o = e("./lib/once")
              , s = e("./lib/promise-or-callback");
            function a(r) {
                return function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return "function" == typeof t[t.length - 1] && (e = t.pop(),
                    e = o.once(i.deferred(e))),
                    s.promiseOrCallback(r.apply(this, t), e)
                }
            }
            a.wrapPrototype = function(r, e) {
                var i = (e = void 0 === e ? {} : e).ignoreMethods || []
                  , o = !0 === e.transformPrivateMethods;
                return Object.getOwnPropertyNames(r.prototype).filter(function(e) {
                    var t = "constructor" !== e && "function" == typeof r.prototype[e]
                      , n = -1 === i.indexOf(e)
                      , e = o || "_" !== e.charAt(0);
                    return t && e && n
                }).forEach(function(e) {
                    var t = r.prototype[e];
                    r.prototype[e] = a(t)
                }),
                r
            }
            ,
            t.exports = a
        }
        , {
            "./lib/deferred": 5,
            "./lib/once": 6,
            "./lib/promise-or-callback": 7
        }],
        9: [function(e, t, n) {
            "use strict";
            var r = setTimeout;
            function c(e) {
                return Boolean(e && void 0 !== e.length)
            }
            function i() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                f(e, this)
            }
            function s(n, r) {
                for (; 3 === n._state; )
                    n = n._value;
                0 !== n._state ? (n._handled = !0,
                o._immediateFn(function() {
                    var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void u(r.promise, e)
                        }
                        a(r.promise, e)
                    } else
                        (1 === n._state ? a : u)(r.promise, n._value)
                })) : n._deferreds.push(r)
            }
            function a(t, e) {
                try {
                    if (e === t)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof o)
                            return t._state = 3,
                            t._value = e,
                            void l(t);
                        if ("function" == typeof n)
                            return void f((r = n,
                            i = e,
                            function() {
                                r.apply(i, arguments)
                            }
                            ), t)
                    }
                    t._state = 1,
                    t._value = e,
                    l(t)
                } catch (e) {
                    u(t, e)
                }
                var r, i
            }
            function u(e, t) {
                e._state = 2,
                e._value = t,
                l(e)
            }
            function l(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    s(e, e._deferreds[t]);
                e._deferreds = null
            }
            function h(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function f(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        u(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    u(t, e)
                }
            }
            o.prototype.catch = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(i);
                return s(this, new h(e,t,n)),
                n
            }
            ,
            o.prototype.finally = function(t) {
                var n = this.constructor;
                return this.then(function(e) {
                    return n.resolve(t()).then(function() {
                        return e
                    })
                }, function(e) {
                    return n.resolve(t()).then(function() {
                        return n.reject(e)
                    })
                })
            }
            ,
            o.all = function(t) {
                return new o(function(i, o) {
                    if (!c(t))
                        return o(new TypeError("Promise.all accepts an array"));
                    var s = Array.prototype.slice.call(t);
                    if (0 === s.length)
                        return i([]);
                    var a = s.length;
                    for (var e = 0; e < s.length; e++)
                        !function t(n, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var r = e.then;
                                    if ("function" == typeof r)
                                        return void r.call(e, function(e) {
                                            t(n, e)
                                        }, o)
                                }
                                s[n] = e,
                                0 == --a && i(s)
                            } catch (e) {
                                o(e)
                            }
                        }(e, s[e])
                }
                )
            }
            ,
            o.allSettled = function(n) {
                return new this(function(i, e) {
                    if (!n || void 0 === n.length)
                        return e(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var o = Array.prototype.slice.call(n);
                    if (0 === o.length)
                        return i([]);
                    var s = o.length;
                    for (var t = 0; t < o.length; t++)
                        !function t(n, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var r = e.then;
                                if ("function" == typeof r)
                                    return void r.call(e, function(e) {
                                        t(n, e)
                                    }, function(e) {
                                        o[n] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        0 == --s && i(o)
                                    })
                            }
                            o[n] = {
                                status: "fulfilled",
                                value: e
                            },
                            0 == --s && i(o)
                        }(t, o[t])
                }
                )
            }
            ,
            o.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                    e(t)
                }
                )
            }
            ,
            o.reject = function(n) {
                return new o(function(e, t) {
                    t(n)
                }
                )
            }
            ,
            o.race = function(i) {
                return new o(function(e, t) {
                    if (!c(i))
                        return t(new TypeError("Promise.race accepts an array"));
                    for (var n = 0, r = i.length; n < r; n++)
                        o.resolve(i[n]).then(e, t)
                }
                )
            }
            ,
            o._immediateFn = "function" == typeof setImmediate ? function(e) {
                setImmediate(e)
            }
            : function(e) {
                r(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            t.exports = o
        }
        , {}],
        10: [function(e, t, n) {
            "use strict";
            e = e("../lib/braintree-error");
            t.exports = {
                DATA_COLLECTOR_KOUNT_NOT_ENABLED: {
                    type: e.types.MERCHANT,
                    code: "DATA_COLLECTOR_KOUNT_NOT_ENABLED",
                    message: "Kount is not enabled for this merchant."
                },
                DATA_COLLECTOR_KOUNT_ERROR: {
                    type: e.types.MERCHANT,
                    code: "DATA_COLLECTOR_KOUNT_ERROR"
                },
                DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: {
                    type: e.types.MERCHANT,
                    code: "DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",
                    message: "Data Collector must be created with Kount and/or PayPal."
                }
            }
        }
        , {
            "../lib/braintree-error": 17
        }],
        11: [function(e, t, n) {
            "use strict";
            var i, o = e("../lib/constants").FRAUDNET_FNCLS, s = e("../lib/constants").FRAUDNET_SOURCE, a = e("../lib/constants").FRAUDNET_URL, c = e("../lib/assets").loadScript, r = e("../lib/promise");
            function u() {}
            function l(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            u.prototype.initialize = function(e) {
                var t, n = e.environment, r = this;
                return this.sessionId = e.sessionId || function() {
                    var e, t = "";
                    for (e = 0; e < 32; e++)
                        t += Math.floor(16 * Math.random()).toString(16);
                    return t
                }(),
                e.sessionId || (i = this.sessionId),
                this._beaconId = (t = this.sessionId,
                e = (new Date).getTime() / 1e3,
                "https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=" + t + "&t=" + e + "&a=14"),
                this._parameterBlock = function(e, t, n) {
                    var r = document.body.appendChild(document.createElement("script"))
                      , t = {
                        f: e,
                        s: s,
                        b: t
                    };
                    "production" !== n && (t.sandbox = !0);
                    return r.type = "application/json",
                    r.setAttribute("fncls", o),
                    r.text = JSON.stringify(t),
                    r
                }(this.sessionId, this._beaconId, n),
                c({
                    src: a
                }).then(function(e) {
                    return r._thirdPartyBlock = e,
                    r
                }).catch(function() {
                    return null
                })
            }
            ,
            u.prototype.teardown = function() {
                l(document.querySelector('iframe[title="ppfniframe"]')),
                l(document.querySelector('iframe[title="pbf"]')),
                l(this._parameterBlock),
                l(this._thirdPartyBlock)
            }
            ,
            t.exports = {
                setup: function(e) {
                    var t = new u;
                    return !(e = e || {}).sessionId && i ? (t.sessionId = i,
                    r.resolve(t)) : t.initialize(e)
                },
                clearSessionIdCache: function() {
                    i = null
                }
            }
        }
        , {
            "../lib/assets": 15,
            "../lib/constants": 19,
            "../lib/promise": 26
        }],
        12: [function(e, t, n) {
            "use strict";
            var s = e("./kount")
              , a = e("./fraudnet")
              , c = e("../lib/braintree-error")
              , u = e("../lib/basic-component-verification")
              , l = e("../lib/create-deferred-client")
              , h = e("../lib/create-assets-url")
              , f = e("../lib/methods")
              , d = e("../lib/convert-methods-to-error")
              , p = e("../lib/promise")
              , m = e("@braintree/wrap-promise")
              , v = e("./errors");
            t.exports = {
                create: m(function(r) {
                    var i, n = "Data Collector", o = {
                        _instances: []
                    };
                    return u.verify({
                        name: n,
                        client: r.client,
                        authorization: r.authorization
                    }).then(function() {
                        var e, t;
                        return o._instantiatedWithAClient = !r.useDeferredClient,
                        o._createPromise = l.create({
                            authorization: r.authorization,
                            client: r.client,
                            debug: r.debug,
                            assetsUrl: h.create(r.authorization),
                            name: n
                        }).then(function(e) {
                            var t, n = e.getConfiguration();
                            if (!0 === r.kount && n.gatewayConfiguration.kount) {
                                try {
                                    t = s.setup({
                                        environment: n.gatewayConfiguration.environment,
                                        merchantId: n.gatewayConfiguration.kount.kountMerchantId
                                    })
                                } catch (e) {
                                    return p.reject(new c({
                                        type: v.DATA_COLLECTOR_KOUNT_ERROR.type,
                                        code: v.DATA_COLLECTOR_KOUNT_ERROR.code,
                                        message: e.message
                                    }))
                                }
                                i = t.deviceData,
                                o._instances.push(t)
                            } else
                                i = {};
                            return p.resolve(e)
                        }).then(function(e) {
                            return a.setup({
                                sessionId: r.clientMetadataId || r.correlationId,
                                environment: e.getConfiguration().gatewayConfiguration.environment
                            }).then(function(e) {
                                e && (i.correlation_id = e.sessionId,
                                o._instances.push(e))
                            })
                        }).then(function() {
                            return 0 === o._instances.length ? p.reject(new c(v.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)) : (o.deviceData = JSON.stringify(i),
                            o.rawDeviceData = i,
                            o)
                        }),
                        o.teardown = (e = o,
                        m(function() {
                            return e._createPromise.then(function() {
                                e._instances.forEach(function(e) {
                                    e && e.teardown()
                                }),
                                d(e, f(e))
                            })
                        })),
                        o.getDeviceData = (t = o,
                        m(function(e) {
                            return e = e || {},
                            t._createPromise.then(function() {
                                return e.raw ? p.resolve(t.rawDeviceData) : p.resolve(t.deviceData)
                            })
                        })),
                        o._instantiatedWithAClient ? o._createPromise : o
                    })
                }),
                VERSION: "3.82.0"
            }
        }
        , {
            "../lib/basic-component-verification": 16,
            "../lib/braintree-error": 17,
            "../lib/convert-methods-to-error": 20,
            "../lib/create-assets-url": 21,
            "../lib/create-deferred-client": 22,
            "../lib/methods": 25,
            "../lib/promise": 26,
            "./errors": 10,
            "./fraudnet": 11,
            "./kount": 13,
            "@braintree/wrap-promise": 8
        }],
        13: [function(e, t, n) {
            "use strict";
            var r = e("./vendor/sjcl")
              , i = e("../lib/camel-case-to-snake-case")
              , e = "https://assets.qa.braintreepayments.com/data"
              , o = {
                development: e,
                qa: e,
                sandbox: "https://assets.braintreegateway.com/sandbox/data",
                production: "https://assets.braintreegateway.com/data"
            }
              , s = {};
            function a(e) {
                var t = a.getCachedDeviceData(e.merchantId);
                if (t)
                    return this.deviceData = t,
                    void (this._isCached = !0);
                this._currentEnvironment = this._initializeEnvironment(e),
                r.random.startCollectors(),
                this._deviceSessionId = this._generateDeviceSessionId(),
                this.deviceData = this._getDeviceData(),
                a.setCachedDeviceData(e.merchantId, this.deviceData),
                this._iframe = this._setupIFrame()
            }
            a.getCachedDeviceData = function(e) {
                return s[e]
            }
            ,
            a.setCachedDeviceData = function(e, t) {
                s[e] = t
            }
            ,
            a.prototype.teardown = function() {
                this._isCached || (r.random.stopCollectors(),
                this._removeIframe())
            }
            ,
            a.prototype._removeIframe = function() {
                this._iframe.parentNode.removeChild(this._iframe)
            }
            ,
            a.prototype._getDeviceData = function() {
                return i({
                    deviceSessionId: this._deviceSessionId,
                    fraudMerchantId: this._currentEnvironment.id
                })
            }
            ,
            a.prototype._generateDeviceSessionId = function() {
                var e = r.random.randomWords(4, 0);
                return r.codec.hex.fromBits(e)
            }
            ,
            a.prototype._setupIFrame = function() {
                var e = this
                  , t = "?m=" + this._currentEnvironment.id + "&s=" + this._deviceSessionId
                  , n = document.createElement("iframe");
                return n.width = 1,
                n.id = "braintreeDataFrame-" + this._deviceSessionId,
                n.height = 1,
                n.frameBorder = 0,
                n.scrolling = "no",
                n.style.position = "fixed",
                n.style.left = "-999999px",
                n.style.top = "-999999px",
                n.title = "Braintree-Kount-iframe",
                n.setAttribute("aria-hidden", "true"),
                document.body.appendChild(n),
                setTimeout(function() {
                    n.src = e._currentEnvironment.url + "/logo.htm" + t,
                    n.innerHTML = '<img src="' + e._currentEnvironment.url + "/logo.gif" + t + '" alt="" />'
                }, 10),
                n
            }
            ,
            a.prototype._initializeEnvironment = function(e) {
                var t = o[e.environment];
                if (null == t)
                    throw new Error(e.environment + " is not a valid environment for kount.environment");
                return {
                    url: t,
                    name: e.environment,
                    id: e.merchantId
                }
            }
            ,
            t.exports = {
                setup: function(e) {
                    return new a(null != e ? e : {})
                },
                Kount: a,
                environmentUrls: o
            }
        }
        , {
            "../lib/camel-case-to-snake-case": 18,
            "./vendor/sjcl": 14
        }],
        14: [function(e, t, n) {
            "use strict";
            var r, i, o, s, a, _ = {
                cipher: {},
                hash: {},
                keyexchange: {},
                mode: {},
                misc: {},
                codec: {},
                exception: {
                    corrupt: function(e) {
                        this.toString = function() {
                            return "CORRUPT: " + this.message
                        }
                        ,
                        this.message = e
                    },
                    invalid: function(e) {
                        this.toString = function() {
                            return "INVALID: " + this.message
                        }
                        ,
                        this.message = e
                    },
                    bug: function(e) {
                        this.toString = function() {
                            return "BUG: " + this.message
                        }
                        ,
                        this.message = e
                    },
                    notReady: function(e) {
                        this.toString = function() {
                            return "NOT READY: " + this.message
                        }
                        ,
                        this.message = e
                    }
                }
            };
            function c(e, t, n) {
                if (4 !== t.length)
                    throw new _.exception.invalid("invalid aes block size");
                var r = e.b[n]
                  , i = t[0] ^ r[0]
                  , o = t[n ? 3 : 1] ^ r[1]
                  , s = t[2] ^ r[2];
                t = t[n ? 1 : 3] ^ r[3];
                var a, c, u = r.length / 4 - 2, l = 4, h = [0, 0, 0, 0], f = e.l[n];
                e = f[0];
                for (var d = f[1], p = f[2], m = f[3], v = f[4], y = 0; y < u; y++)
                    f = e[i >>> 24] ^ d[o >> 16 & 255] ^ p[s >> 8 & 255] ^ m[255 & t] ^ r[l],
                    a = e[o >>> 24] ^ d[s >> 16 & 255] ^ p[t >> 8 & 255] ^ m[255 & i] ^ r[l + 1],
                    c = e[s >>> 24] ^ d[t >> 16 & 255] ^ p[i >> 8 & 255] ^ m[255 & o] ^ r[l + 2],
                    t = e[t >>> 24] ^ d[i >> 16 & 255] ^ p[o >> 8 & 255] ^ m[255 & s] ^ r[l + 3],
                    l += 4,
                    i = f,
                    o = a,
                    s = c;
                for (y = 0; y < 4; y++)
                    h[n ? 3 & -y : y] = v[i >>> 24] << 24 ^ v[o >> 16 & 255] << 16 ^ v[s >> 8 & 255] << 8 ^ v[255 & t] ^ r[l++],
                    f = i,
                    i = o,
                    o = s,
                    s = t,
                    t = f;
                return h
            }
            function u(e, t) {
                for (var n, r, i = e.u, o = e.b, s = i[0], a = i[1], c = i[2], u = i[3], l = i[4], h = i[5], f = i[6], d = i[7], p = 0; p < 64; p++)
                    n = (n = p < 16 ? t[p] : (n = t[p + 1 & 15],
                    r = t[p + 14 & 15],
                    t[15 & p] = (n >>> 7 ^ n >>> 18 ^ n >>> 3 ^ n << 25 ^ n << 14) + (r >>> 17 ^ r >>> 19 ^ r >>> 10 ^ r << 15 ^ r << 13) + t[15 & p] + t[p + 9 & 15] | 0)) + d + (l >>> 6 ^ l >>> 11 ^ l >>> 25 ^ l << 26 ^ l << 21 ^ l << 7) + (f ^ l & (h ^ f)) + o[p],
                    d = f,
                    f = h,
                    h = l,
                    l = u + n | 0,
                    u = c,
                    c = a,
                    s = n + ((a = s) & c ^ u & (a ^ c)) + (a >>> 2 ^ a >>> 13 ^ a >>> 22 ^ a << 30 ^ a << 19 ^ a << 10) | 0;
                i[0] = i[0] + s | 0,
                i[1] = i[1] + a | 0,
                i[2] = i[2] + c | 0,
                i[3] = i[3] + u | 0,
                i[4] = i[4] + l | 0,
                i[5] = i[5] + h | 0,
                i[6] = i[6] + f | 0,
                i[7] = i[7] + d | 0
            }
            function l(e, t) {
                var n, r = _.random.B[e], i = [];
                for (n in r)
                    r.hasOwnProperty(n) && i.push(r[n]);
                for (n = 0; n < i.length; n++)
                    i[n](t)
            }
            function h(e, t) {
                "undefined" != typeof window && window.performance && "function" == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, "loadtime") : e.addEntropy((new Date).valueOf(), t, "loadtime")
            }
            function f(e) {
                e.b = d(e).concat(d(e)),
                e.C = new _.cipher.aes(e.b)
            }
            function d(e) {
                for (var t = 0; t < 4 && (e.g[t] = e.g[t] + 1 | 0,
                !e.g[t]); t++)
                    ;
                return e.C.encrypt(e.g)
            }
            function p(e, t) {
                return function() {
                    t.apply(e, arguments)
                }
            }
            _.cipher.aes = function(e) {
                this.l[0][0][0] || this.G();
                var t, n, r, i = this.l[0][4], o = this.l[1], s = e.length, a = 1;
                if (4 !== s && 6 !== s && 8 !== s)
                    throw new _.exception.invalid("invalid aes key size");
                for (this.b = [n = e.slice(0), r = []],
                e = s; e < 4 * s + 28; e++)
                    t = n[e - 1],
                    (0 == e % s || 8 === s && 4 == e % s) && (t = i[t >>> 24] << 24 ^ i[t >> 16 & 255] << 16 ^ i[t >> 8 & 255] << 8 ^ i[255 & t],
                    0 == e % s && (t = t << 8 ^ t >>> 24 ^ a << 24,
                    a = a << 1 ^ 283 * (a >> 7))),
                    n[e] = n[e - s] ^ t;
                for (s = 0; e; s++,
                e--)
                    t = n[3 & s ? e : e - 4],
                    r[s] = e <= 4 || s < 4 ? t : o[0][i[t >>> 24]] ^ o[1][i[t >> 16 & 255]] ^ o[2][i[t >> 8 & 255]] ^ o[3][i[255 & t]]
            }
            ,
            _.cipher.aes.prototype = {
                encrypt: function(e) {
                    return c(this, e, 0)
                },
                decrypt: function(e) {
                    return c(this, e, 1)
                },
                l: [[[], [], [], [], []], [[], [], [], [], []]],
                G: function() {
                    for (var e, t, n, r, i, o, s = this.l[0], a = this.l[1], c = s[4], u = a[4], l = [], h = [], f = 0; f < 256; f++)
                        h[(l[f] = f << 1 ^ 283 * (f >> 7)) ^ f] = f;
                    for (e = t = 0; !c[e]; e ^= n || 1,
                    t = h[t] || 1)
                        for (o = 16843009 * (r = l[f = l[n = l[u[c[e] = i = (i = t ^ t << 1 ^ t << 2 ^ t << 3 ^ t << 4) >> 8 ^ 255 & i ^ 99] = e]]]) ^ 65537 * f ^ 257 * n ^ 16843008 * e,
                        r = 257 * l[i] ^ 16843008 * i,
                        f = 0; f < 4; f++)
                            s[f][e] = r = r << 24 ^ r >>> 8,
                            a[f][i] = o = o << 24 ^ o >>> 8;
                    for (f = 0; f < 5; f++)
                        s[f] = s[f].slice(0),
                        a[f] = a[f].slice(0)
                }
            },
            _.bitArray = {
                bitSlice: function(e, t, n) {
                    return e = _.bitArray.M(e.slice(t / 32), 32 - (31 & t)).slice(1),
                    void 0 === n ? e : _.bitArray.clamp(e, n - t)
                },
                extract: function(e, t, n) {
                    var r = Math.floor(-t - n & 31);
                    return (-32 & (t + n - 1 ^ t) ? e[t / 32 | 0] << 32 - r ^ e[t / 32 + 1 | 0] >>> r : e[t / 32 | 0] >>> r) & (1 << n) - 1
                },
                concat: function(e, t) {
                    if (0 === e.length || 0 === t.length)
                        return e.concat(t);
                    var n = e[e.length - 1]
                      , r = _.bitArray.getPartial(n);
                    return 32 === r ? e.concat(t) : _.bitArray.M(t, r, 0 | n, e.slice(0, e.length - 1))
                },
                bitLength: function(e) {
                    var t = e.length;
                    return 0 === t ? 0 : 32 * (t - 1) + _.bitArray.getPartial(e[t - 1])
                },
                clamp: function(e, t) {
                    if (32 * e.length < t)
                        return e;
                    var n = (e = e.slice(0, Math.ceil(t / 32))).length;
                    return t &= 31,
                    0 < n && t && (e[n - 1] = _.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)),
                    e
                },
                partial: function(e, t, n) {
                    return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e
                },
                getPartial: function(e) {
                    return Math.round(e / 1099511627776) || 32
                },
                equal: function(e, t) {
                    if (_.bitArray.bitLength(e) !== _.bitArray.bitLength(t))
                        return !1;
                    for (var n = 0, r = 0; r < e.length; r++)
                        n |= e[r] ^ t[r];
                    return 0 === n
                },
                M: function(e, t, n, r) {
                    var i = 0;
                    for (void 0 === r && (r = []); 32 <= t; t -= 32)
                        r.push(n),
                        n = 0;
                    if (0 === t)
                        return r.concat(e);
                    for (i = 0; i < e.length; i++)
                        r.push(n | e[i] >>> t),
                        n = e[i] << 32 - t;
                    return i = e.length ? e[e.length - 1] : 0,
                    e = _.bitArray.getPartial(i),
                    r.push(_.bitArray.partial(t + e & 31, 32 < t + e ? n : r.pop(), 1)),
                    r
                },
                Y: function(e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]]
                },
                byteswapM: function(e) {
                    for (var t, n = 0; n < e.length; ++n)
                        t = e[n],
                        e[n] = t >>> 24 | t >>> 8 & 65280 | (65280 & t) << 8 | t << 24;
                    return e
                }
            },
            _.codec.utf8String = {
                fromBits: function(e) {
                    for (var t, n = "", r = _.bitArray.bitLength(e), i = 0; i < r / 8; i++)
                        0 == (3 & i) && (t = e[i / 4]),
                        n += String.fromCharCode(t >>> 8 >>> 8 >>> 8),
                        t <<= 8;
                    return decodeURIComponent(escape(n))
                },
                toBits: function(e) {
                    e = unescape(encodeURIComponent(e));
                    for (var t = [], n = 0, r = 0; r < e.length; r++)
                        n = n << 8 | e.charCodeAt(r),
                        3 == (3 & r) && (t.push(n),
                        n = 0);
                    return 3 & r && t.push(_.bitArray.partial(8 * (3 & r), n)),
                    t
                }
            },
            _.codec.hex = {
                fromBits: function(e) {
                    for (var t = "", n = 0; n < e.length; n++)
                        t += (0xf00000000000 + (0 | e[n])).toString(16).substr(4);
                    return t.substr(0, _.bitArray.bitLength(e) / 4)
                },
                toBits: function(e) {
                    var t, n = [], r = (e = e.replace(/\s|0x/g, "")).length;
                    for (e += "00000000",
                    t = 0; t < e.length; t += 8)
                        n.push(0 ^ parseInt(e.substr(t, 8), 16));
                    return _.bitArray.clamp(n, 4 * r)
                }
            },
            _.hash.sha256 = function(e) {
                this.b[0] || this.G(),
                e ? (this.u = e.u.slice(0),
                this.o = e.o.slice(0),
                this.h = e.h) : this.reset()
            }
            ,
            _.hash.sha256.hash = function(e) {
                return (new _.hash.sha256).update(e).finalize()
            }
            ,
            _.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    return this.u = this.K.slice(0),
                    this.o = [],
                    this.h = 0,
                    this
                },
                update: function(e) {
                    "string" == typeof e && (e = _.codec.utf8String.toBits(e));
                    var t = this.o = _.bitArray.concat(this.o, e);
                    if (i = this.h,
                    9007199254740991 < (e = this.h = i + _.bitArray.bitLength(e)))
                        throw new _.exception.invalid("Cannot hash more than 2^53 - 1 bits");
                    if ("undefined" != typeof Uint32Array) {
                        for (var n = new Uint32Array(t), r = 0, i = 512 + i - (512 + i & 511); i <= e; i += 512)
                            u(this, n.subarray(16 * r, 16 * (r + 1))),
                            r += 1;
                        t.splice(0, 16 * r)
                    } else
                        for (i = 512 + i - (512 + i & 511); i <= e; i += 512)
                            u(this, t.splice(0, 16));
                    return this
                },
                finalize: function() {
                    for (var e = this.o, t = this.u, n = (e = _.bitArray.concat(e, [_.bitArray.partial(1, 1)])).length + 2; 15 & n; n++)
                        e.push(0);
                    for (e.push(Math.floor(this.h / 4294967296)),
                    e.push(0 | this.h); e.length; )
                        u(this, e.splice(0, 16));
                    return this.reset(),
                    t
                },
                K: [],
                b: [],
                G: function() {
                    function e(e) {
                        return 4294967296 * (e - Math.floor(e)) | 0
                    }
                    for (var t, n, r = 0, i = 2; r < 64; i++) {
                        for (n = !0,
                        t = 2; t * t <= i; t++)
                            if (0 == i % t) {
                                n = !1;
                                break
                            }
                        n && (r < 8 && (this.K[r] = e(Math.pow(i, .5))),
                        this.b[r] = e(Math.pow(i, 1 / 3)),
                        r++)
                    }
                }
            },
            _.prng = function(e) {
                this.c = [new _.hash.sha256],
                this.i = [0],
                this.H = 0,
                this.v = {},
                this.F = 0,
                this.J = {},
                this.L = this.f = this.j = this.T = 0,
                this.b = [0, 0, 0, 0, 0, 0, 0, 0],
                this.g = [0, 0, 0, 0],
                this.C = void 0,
                this.D = e,
                this.s = !1,
                this.B = {
                    progress: {},
                    seeded: {}
                },
                this.m = this.S = 0,
                this.w = 1,
                this.A = 2,
                this.O = 65536,
                this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024],
                this.P = 3e4,
                this.N = 80
            }
            ,
            _.prng.prototype = {
                randomWords: function(e, t) {
                    var n = [];
                    if ((i = this.isReady(t)) === this.m)
                        throw new _.exception.notReady("generator isn't seeded");
                    if (i & this.A) {
                        var r, i = !(i & this.w), o = [], s = 0;
                        for (this.L = o[0] = (new Date).valueOf() + this.P,
                        r = 0; r < 16; r++)
                            o.push(4294967296 * Math.random() | 0);
                        for (r = 0; r < this.c.length && (o = o.concat(this.c[r].finalize()),
                        s += this.i[r],
                        this.i[r] = 0,
                        i || !(this.H & 1 << r)); r++)
                            ;
                        for (this.H >= 1 << this.c.length && (this.c.push(new _.hash.sha256),
                        this.i.push(0)),
                        this.f -= s,
                        s > this.j && (this.j = s),
                        this.H++,
                        this.b = _.hash.sha256.hash(this.b.concat(o)),
                        this.C = new _.cipher.aes(this.b),
                        i = 0; i < 4 && (this.g[i] = this.g[i] + 1 | 0,
                        !this.g[i]); i++)
                            ;
                    }
                    for (i = 0; i < e; i += 4)
                        0 == (i + 1) % this.O && f(this),
                        o = d(this),
                        n.push(o[0], o[1], o[2], o[3]);
                    return f(this),
                    n.slice(0, e)
                },
                setDefaultParanoia: function(e, t) {
                    if (0 === e && "Setting paranoia=0 will ruin your security; use it only for testing" !== t)
                        throw new _.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
                    this.D = e
                },
                addEntropy: function(e, t, n) {
                    n = n || "user";
                    var r, i = (new Date).valueOf(), o = this.v[n], s = this.isReady(), a = 0, c = this.J[n];
                    switch (void 0 === c && (c = this.J[n] = this.T++),
                    void 0 === o && (o = this.v[n] = 0),
                    this.v[n] = (this.v[n] + 1) % this.c.length,
                    typeof e) {
                    case "number":
                        void 0 === t && (t = 1),
                        this.c[o].update([c, this.F++, 1, t, i, 1, 0 | e]);
                        break;
                    case "object":
                        if ("[object Uint32Array]" === (n = Object.prototype.toString.call(e))) {
                            for (r = [],
                            n = 0; n < e.length; n++)
                                r.push(e[n]);
                            e = r
                        } else
                            for ("[object Array]" !== n && (a = 1),
                            n = 0; n < e.length && !a; n++)
                                "number" != typeof e[n] && (a = 1);
                        if (!a) {
                            if (void 0 === t)
                                for (n = t = 0; n < e.length; n++)
                                    for (r = e[n]; 0 < r; )
                                        t++,
                                        r >>>= 1;
                            this.c[o].update([c, this.F++, 2, t, i, e.length].concat(e))
                        }
                        break;
                    case "string":
                        void 0 === t && (t = e.length),
                        this.c[o].update([c, this.F++, 3, t, i, e.length]),
                        this.c[o].update(e);
                        break;
                    default:
                        a = 1
                    }
                    if (a)
                        throw new _.exception.bug("random: addEntropy only supports number, array of numbers or string");
                    this.i[o] += t,
                    this.f += t,
                    s === this.m && (this.isReady() !== this.m && l("seeded", Math.max(this.j, this.f)),
                    l("progress", this.getProgress()))
                },
                isReady: function(e) {
                    return e = this.I[void 0 !== e ? e : this.D],
                    this.j && this.j >= e ? this.i[0] > this.N && (new Date).valueOf() > this.L ? this.A | this.w : this.w : this.f >= e ? this.A | this.m : this.m
                },
                getProgress: function(e) {
                    return e = this.I[e || this.D],
                    this.j >= e || this.f > e ? 1 : this.f / e
                },
                startCollectors: function() {
                    if (!this.s) {
                        if (this.a = {
                            loadTimeCollector: p(this, this.V),
                            mouseCollector: p(this, this.W),
                            keyboardCollector: p(this, this.U),
                            accelerometerCollector: p(this, this.R),
                            touchCollector: p(this, this.X)
                        },
                        window.addEventListener)
                            window.addEventListener("load", this.a.loadTimeCollector, !1),
                            window.addEventListener("mousemove", this.a.mouseCollector, !1),
                            window.addEventListener("keypress", this.a.keyboardCollector, !1),
                            window.addEventListener("devicemotion", this.a.accelerometerCollector, !1),
                            window.addEventListener("touchmove", this.a.touchCollector, !1);
                        else {
                            if (!document.attachEvent)
                                throw new _.exception.bug("can't attach event");
                            document.attachEvent("onload", this.a.loadTimeCollector),
                            document.attachEvent("onmousemove", this.a.mouseCollector),
                            document.attachEvent("keypress", this.a.keyboardCollector)
                        }
                        this.s = !0
                    }
                },
                stopCollectors: function() {
                    this.s && (window.removeEventListener ? (window.removeEventListener("load", this.a.loadTimeCollector, !1),
                    window.removeEventListener("mousemove", this.a.mouseCollector, !1),
                    window.removeEventListener("keypress", this.a.keyboardCollector, !1),
                    window.removeEventListener("devicemotion", this.a.accelerometerCollector, !1),
                    window.removeEventListener("touchmove", this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent("onload", this.a.loadTimeCollector),
                    document.detachEvent("onmousemove", this.a.mouseCollector),
                    document.detachEvent("keypress", this.a.keyboardCollector)),
                    this.s = !1)
                },
                addEventListener: function(e, t) {
                    this.B[e][this.S++] = t
                },
                removeEventListener: function(e, t) {
                    var n, r, i = this.B[e], o = [];
                    for (r in i)
                        i.hasOwnProperty(r) && i[r] === t && o.push(r);
                    for (n = 0; n < o.length; n++)
                        delete i[r = o[n]]
                },
                U: function() {
                    h(this, 1)
                },
                W: function(e) {
                    var t, n;
                    try {
                        t = e.x || e.clientX || e.offsetX || 0,
                        n = e.y || e.clientY || e.offsetY || 0
                    } catch (e) {
                        n = t = 0
                    }
                    0 != t && 0 != n && this.addEntropy([t, n], 2, "mouse"),
                    h(this, 0)
                },
                X: function(e) {
                    e = e.touches[0] || e.changedTouches[0],
                    this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, "touch"),
                    h(this, 0)
                },
                V: function() {
                    h(this, 2)
                },
                R: function(e) {
                    var t;
                    e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z,
                    !window.orientation || "number" == typeof (t = window.orientation) && this.addEntropy(t, 1, "accelerometer"),
                    e && this.addEntropy(e, 2, "accelerometer"),
                    h(this, 0)
                }
            },
            _.random = new _.prng(6);
            e: try {
                if (s = void 0 !== t && t.exports) {
                    try {
                        a = e("crypto")
                    } catch (e) {
                        a = null
                    }
                    s = i = a
                }
                if (s && i.randomBytes)
                    r = i.randomBytes(128),
                    r = new Uint32Array(new Uint8Array(r).buffer),
                    _.random.addEntropy(r, 1024, "crypto['randomBytes']");
                else if ("undefined" != typeof window && "undefined" != typeof Uint32Array) {
                    if (o = new Uint32Array(32),
                    window.crypto && window.crypto.getRandomValues)
                        window.crypto.getRandomValues(o);
                    else {
                        if (!window.msCrypto || !window.msCrypto.getRandomValues)
                            break e;
                        window.msCrypto.getRandomValues(o)
                    }
                    _.random.addEntropy(o, 1024, "crypto['getRandomValues']")
                }
            } catch (e) {
                "undefined" != typeof window && window.console && (console.log("There was an error collecting entropy from the browser:"),
                console.log(e))
            }
            void 0 !== t && t.exports && (t.exports = _)
        }
        , {
            crypto: void 0
        }],
        15: [function(e, t, n) {
            "use strict";
            e = e("@braintree/asset-loader/load-script");
            t.exports = {
                loadScript: e
            }
        }
        , {
            "@braintree/asset-loader/load-script": 3
        }],
        16: [function(e, t, n) {
            "use strict";
            var r = e("./braintree-error")
              , i = e("./promise")
              , o = e("./errors");
            t.exports = {
                verify: function(e) {
                    var t, n;
                    return e ? (n = e.name,
                    t = e.client,
                    e = e.authorization,
                    t || e ? e || "3.82.0" === t.getVersion() ? i.resolve() : i.reject(new r({
                        type: o.INCOMPATIBLE_VERSIONS.type,
                        code: o.INCOMPATIBLE_VERSIONS.code,
                        message: "Client (version " + t.getVersion() + ") and " + n + " (version 3.82.0) components must be from the same SDK version."
                    })) : i.reject(new r({
                        type: o.INSTANTIATION_OPTION_REQUIRED.type,
                        code: o.INSTANTIATION_OPTION_REQUIRED.code,
                        message: "options.client is required when instantiating " + n + "."
                    }))) : i.reject(new r({
                        type: o.INVALID_USE_OF_INTERNAL_FUNCTION.type,
                        code: o.INVALID_USE_OF_INTERNAL_FUNCTION.code,
                        message: "Options must be passed to basicComponentVerification function."
                    }))
                }
            }
        }
        , {
            "./braintree-error": 17,
            "./errors": 24,
            "./promise": 26
        }],
        17: [function(e, t, n) {
            "use strict";
            e = e("./enumerate");
            function r(e) {
                if (!r.types.hasOwnProperty(e.type))
                    throw new Error(e.type + " is not a valid type.");
                if (!e.code)
                    throw new Error("Error code required.");
                if (!e.message)
                    throw new Error("Error message required.");
                this.name = "BraintreeError",
                this.code = e.code,
                this.message = e.message,
                this.type = e.type,
                this.details = e.details
            }
            ((r.prototype = Object.create(Error.prototype)).constructor = r).types = e(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]),
            r.findRootError = function(e) {
                return e instanceof r && e.details && e.details.originalError ? r.findRootError(e.details.originalError) : e
            }
            ,
            t.exports = r
        }
        , {
            "./enumerate": 23
        }],
        18: [function(e, t, n) {
            "use strict";
            t.exports = function(n) {
                return Object.keys(n).reduce(function(e, t) {
                    return e[t.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase()] = n[t],
                    e
                }, {})
            }
        }
        , {}],
        19: [function(e, t, n) {
            "use strict";
            t.exports = {
                ANALYTICS_PREFIX: "web.",
                ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
                ASSETS_URLS: {
                    production: "https://assets.braintreegateway.com",
                    sandbox: "https://assets.braintreegateway.com"
                },
                CLIENT_API_URLS: {
                    production: "https://api.braintreegateway.com:443",
                    sandbox: "https://api.sandbox.braintreegateway.com:443"
                },
                FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
                FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
                FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
                BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
                GRAPHQL_URLS: {
                    production: "https://payments.braintree-api.com/graphql",
                    sandbox: "https://payments.sandbox.braintree-api.com/graphql"
                },
                INTEGRATION_TIMEOUT_MS: 6e4,
                VERSION: "3.82.0",
                INTEGRATION: "custom",
                SOURCE: "client",
                PLATFORM: "web",
                BRAINTREE_LIBRARY_VERSION: "braintree/web/3.82.0"
            }
        }
        , {}],
        20: [function(e, t, n) {
            "use strict";
            var r = e("./braintree-error")
              , i = e("./errors");
            t.exports = function(t, e) {
                e.forEach(function(e) {
                    t[e] = function() {
                        throw new r({
                            type: i.METHOD_CALLED_AFTER_TEARDOWN.type,
                            code: i.METHOD_CALLED_AFTER_TEARDOWN.code,
                            message: e + " cannot be called after teardown."
                        })
                    }
                })
            }
        }
        , {
            "./braintree-error": 17,
            "./errors": 24
        }],
        21: [function(e, t, n) {
            "use strict";
            var r = e("./constants").ASSETS_URLS;
            t.exports = {
                create: function(e) {
                    return r.production
                }
            }
        }
        , {
            "./constants": 19
        }],
        22: [function(e, t, n) {
            "use strict";
            var r = e("./braintree-error")
              , i = e("./promise")
              , o = e("./assets")
              , s = e("./errors")
              , a = "3.82.0";
            t.exports = {
                create: function(e) {
                    var t = i.resolve();
                    return e.client ? i.resolve(e.client) : (t = !window.braintree || !window.braintree.client ? o.loadScript({
                        src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
                    }).catch(function(e) {
                        return i.reject(new r({
                            type: s.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                            code: s.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                            message: s.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                            details: {
                                originalError: e
                            }
                        }))
                    }) : t).then(function() {
                        return window.braintree.client.VERSION !== a ? i.reject(new r({
                            type: s.INCOMPATIBLE_VERSIONS.type,
                            code: s.INCOMPATIBLE_VERSIONS.code,
                            message: "Client (version " + window.braintree.client.VERSION + ") and " + e.name + " (version " + a + ") components must be from the same SDK version."
                        })) : window.braintree.client.create({
                            authorization: e.authorization,
                            debug: e.debug
                        })
                    })
                }
            }
        }
        , {
            "./assets": 15,
            "./braintree-error": 17,
            "./errors": 24,
            "./promise": 26
        }],
        23: [function(e, t, n) {
            "use strict";
            t.exports = function(e, n) {
                return n = null == n ? "" : n,
                e.reduce(function(e, t) {
                    return e[t] = n + t,
                    e
                }, {})
            }
        }
        , {}],
        24: [function(e, t, n) {
            "use strict";
            e = e("./braintree-error");
            t.exports = {
                INVALID_USE_OF_INTERNAL_FUNCTION: {
                    type: e.types.INTERNAL,
                    code: "INVALID_USE_OF_INTERNAL_FUNCTION"
                },
                INSTANTIATION_OPTION_REQUIRED: {
                    type: e.types.MERCHANT,
                    code: "INSTANTIATION_OPTION_REQUIRED"
                },
                INCOMPATIBLE_VERSIONS: {
                    type: e.types.MERCHANT,
                    code: "INCOMPATIBLE_VERSIONS"
                },
                CLIENT_SCRIPT_FAILED_TO_LOAD: {
                    type: e.types.NETWORK,
                    code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
                    message: "Braintree client script could not be loaded."
                },
                METHOD_CALLED_AFTER_TEARDOWN: {
                    type: e.types.MERCHANT,
                    code: "METHOD_CALLED_AFTER_TEARDOWN"
                }
            }
        }
        , {
            "./braintree-error": 17
        }],
        25: [function(e, t, n) {
            "use strict";
            t.exports = function(t) {
                return Object.keys(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            }
        }
        , {}],
        26: [function(e, t, n) {
            "use strict";
            var r = e("promise-polyfill")
              , e = e("@braintree/extended-promise")
              , r = "undefined" != typeof Promise ? Promise : r;
            e.suppressUnhandledPromiseMessage = !0,
            e.setPromise(r),
            t.exports = r
        }
        , {
            "@braintree/extended-promise": 4,
            "promise-polyfill": 9
        }]
    }, {}, [12])(12)
});
