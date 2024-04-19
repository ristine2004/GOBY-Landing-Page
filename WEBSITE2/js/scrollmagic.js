!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var _ = function() {
        D.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
    };
    _.version = "2.0.5",
    window.addEventListener("mousewheel", function() {});
    var M = "data-scrollmagic-pin-spacer";
    _.Controller = function(e) {
        var n, r, o = "ScrollMagic.Controller", i = "FORWARD", l = "REVERSE", t = "PAUSED", s = O.defaults, a = this, c = D.extend({}, s, e), u = [], f = !1, d = 0, g = t, p = !0, h = 0, v = !0, m = function() {
            for (var e in c)
                s.hasOwnProperty(e) || (x(2, 'WARNING: Unknown option "' + e + '"'),
                delete c[e]);
            if (c.container = D.get.elements(c.container)[0],
            !c.container)
                throw x(1, "ERROR creating object " + o + ": No valid scroll container supplied"),
                o + " init failed.";
            (p = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window),
            h = S(),
            c.container.addEventListener("resize", T),
            c.container.addEventListener("scroll", T),
            c.refreshInterval = parseInt(c.refreshInterval) || s.refreshInterval,
            w(),
            x(3, "added new " + o + " controller (v" + _.version + ")")
        }, w = function() {
            0 < c.refreshInterval && (r = window.setTimeout(C, c.refreshInterval))
        }, y = function() {
            return c.vertical ? D.get.scrollTop(c.container) : D.get.scrollLeft(c.container)
        }, S = function() {
            return c.vertical ? D.get.height(c.container) : D.get.width(c.container)
        }, E = this._setScrollPos = function(e) {
            c.vertical ? p ? window.scrollTo(D.get.scrollLeft(), e) : c.container.scrollTop = e : p ? window.scrollTo(e, D.get.scrollTop()) : c.container.scrollLeft = e
        }
        , b = function() {
            if (v && f) {
                var n = D.type.Array(f) ? f : u.slice(0);
                f = !1;
                var e = d
                  , t = (d = a.scrollPos()) - e;
                0 !== t && (g = 0 < t ? i : l),
                g === l && n.reverse(),
                n.forEach(function(e, t) {
                    x(3, "updating Scene " + (t + 1) + "/" + n.length + " (" + u.length + " total)"),
                    e.update(!0)
                }),
                0 === n.length && 3 <= c.loglevel && x(3, "updating 0 Scenes (nothing added to controller)")
            }
        }, R = function() {
            n = D.rAF(b)
        }, T = function(e) {
            x(3, "event fired causing an update:", e.type),
            "resize" == e.type && (h = S(),
            g = t),
            !0 !== f && (f = !0,
            R())
        }, C = function() {
            if (!p && h != S()) {
                var e;
                try {
                    e = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    })
                } catch (t) {
                    (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                }
                c.container.dispatchEvent(e)
            }
            u.forEach(function(e) {
                e.refresh()
            }),
            w()
        }, x = this._log = function(e, t) {
            c.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + o + ") ->"),
            D.log.apply(window, arguments))
        }
        ;
        this._options = c;
        var F = function(e) {
            if (e.length <= 1)
                return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }),
            t
        };
        return this.addScene = function(e) {
            if (D.type.Array(e))
                e.forEach(function(e) {
                    a.addScene(e)
                });
            else if (e instanceof _.Scene) {
                if (e.controller() !== a)
                    e.addTo(a);
                else if (u.indexOf(e) < 0) {
                    for (var t in u.push(e),
                    u = F(u),
                    e.on("shift.controller_sort", function() {
                        u = F(u)
                    }),
                    c.globalSceneOptions)
                        e[t] && e[t].call(e, c.globalSceneOptions[t]);
                    x(3, "adding Scene (now " + u.length + " total)")
                }
            } else
                x(1, "ERROR: invalid argument supplied for '.addScene()'");
            return a
        }
        ,
        this.removeScene = function(e) {
            if (D.type.Array(e))
                e.forEach(function(e) {
                    a.removeScene(e)
                });
            else {
                var t = u.indexOf(e);
                -1 < t && (e.off("shift.controller_sort"),
                u.splice(t, 1),
                x(3, "removing Scene (now " + u.length + " left)"),
                e.remove())
            }
            return a
        }
        ,
        this.updateScene = function(e, t) {
            return D.type.Array(e) ? e.forEach(function(e) {
                a.updateScene(e, t)
            }) : t ? e.update(!0) : !0 !== f && e instanceof _.Scene && (-1 == (f = f || []).indexOf(e) && f.push(e),
            f = F(f),
            R()),
            a
        }
        ,
        this.update = function(e) {
            return T({
                type: "resize"
            }),
            e && b(),
            a
        }
        ,
        this.scrollTo = function(e, t) {
            if (D.type.Number(e))
                E.call(c.container, e, t);
            else if (e instanceof _.Scene)
                e.controller() === a ? a.scrollTo(e.scrollOffset(), t) : x(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
            else if (D.type.Function(e))
                E = e;
            else {
                var n = D.get.elements(e)[0];
                if (n) {
                    for (; n.parentNode.hasAttribute(M); )
                        n = n.parentNode;
                    var r = c.vertical ? "top" : "left"
                      , o = D.get.offset(c.container)
                      , i = D.get.offset(n);
                    p || (o[r] -= a.scrollPos()),
                    a.scrollTo(i[r] - o[r], t)
                } else
                    x(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", e)
            }
            return a
        }
        ,
        this.scrollPos = function(e) {
            return arguments.length ? (D.type.Function(e) ? y = e : x(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),
            a) : y.call(a)
        }
        ,
        this.info = function(e) {
            var t = {
                size: h,
                vertical: c.vertical,
                scrollPos: d,
                scrollDirection: g,
                container: c.container,
                isDocument: p
            };
            return arguments.length ? t[e] !== undefined ? t[e] : void x(1, 'ERROR: option "' + e + '" is not available') : t
        }
        ,
        this.loglevel = function(e) {
            return arguments.length ? (c.loglevel != e && (c.loglevel = e),
            a) : c.loglevel
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (v != e && (v = !!e,
            a.updateScene(u, !0)),
            a) : v
        }
        ,
        this.destroy = function(e) {
            window.clearTimeout(r);
            for (var t = u.length; t--; )
                u[t].destroy(e);
            return c.container.removeEventListener("resize", T),
            c.container.removeEventListener("scroll", T),
            D.cAF(n),
            x(3, "destroyed " + o + " (reset: " + (e ? "true" : "false") + ")"),
            null
        }
        ,
        m(),
        a
    }
    ;
    var O = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    _.Controller.addOption = function(e, t) {
        O.defaults[e] = t
    }
    ,
    _.Controller.extend = function(e) {
        var t = this;
        _.Controller = function() {
            return t.apply(this, arguments),
            this.$super = D.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        D.extend(_.Controller, t),
        _.Controller.prototype = t.prototype,
        _.Controller.prototype.constructor = _.Controller
    }
    ,
    _.Scene = function(e) {
        var r, a, n = "ScrollMagic.Scene", c = "BEFORE", u = "DURING", f = "AFTER", o = k.defaults, d = this, g = D.extend({}, o, e), p = c, h = 0, s = {
            start: 0,
            end: 0
        }, v = 0, i = !0, t = function() {
            for (var e in g)
                o.hasOwnProperty(e) || (m(2, 'WARNING: Unknown option "' + e + '"'),
                delete g[e]);
            for (var t in o)
                F(t);
            C()
        }, l = {};
        this.on = function(e, o) {
            return D.type.Function(o) ? (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split(".")
                  , n = t[0]
                  , r = t[1];
                "*" != n && (l[n] || (l[n] = []),
                l[n].push({
                    namespace: r || "",
                    callback: o
                }))
            }) : m(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"),
            d
        }
        ,
        this.off = function(e, i) {
            return e ? (e = e.trim().split(" ")).forEach(function(e) {
                var t = e.split(".")
                  , n = t[0]
                  , o = t[1] || "";
                ("*" === n ? Object.keys(l) : [n]).forEach(function(e) {
                    for (var t = l[e] || [], n = t.length; n--; ) {
                        var r = t[n];
                        !r || o !== r.namespace && "*" !== o || i && i != r.callback || t.splice(n, 1)
                    }
                    t.length || delete l[e]
                })
            }) : m(1, "ERROR: Invalid event name supplied."),
            d
        }
        ,
        this.trigger = function(e, t) {
            if (e) {
                var n = e.trim().split(".")
                  , r = n[0]
                  , o = n[1]
                  , i = l[r];
                m(3, "event fired:", r, t ? "->" : "", t || ""),
                i && i.forEach(function(e) {
                    o && o !== e.namespace || e.callback.call(d, new _.Event(r,e.namespace,d,t))
                })
            } else
                m(1, "ERROR: Invalid event name supplied.");
            return d
        }
        ,
        d.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? b() : "reverse" === e.what && d.update())
        }).on("shift.internal", function() {
            S(),
            d.update()
        });
        var m = this._log = function(e, t) {
            g.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + n + ") ->"),
            D.log.apply(window, arguments))
        }
        ;
        this.addTo = function(e) {
            return e instanceof _.Controller ? a != e && (a && a.removeScene(d),
            a = e,
            C(),
            E(!0),
            b(!0),
            S(),
            a.info("container").addEventListener("resize", R),
            e.addScene(d),
            d.trigger("add", {
                controller: a
            }),
            m(3, "added " + n + " to controller"),
            d.update()) : m(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
            d
        }
        ,
        this.enabled = function(e) {
            return arguments.length ? (i != e && (i = !!e,
            d.update(!0)),
            d) : i
        }
        ,
        this.remove = function() {
            if (a) {
                a.info("container").removeEventListener("resize", R);
                var e = a;
                a = undefined,
                e.removeScene(d),
                d.trigger("remove"),
                m(3, "removed " + n + " from controller")
            }
            return d
        }
        ,
        this.destroy = function(e) {
            return d.trigger("destroy", {
                reset: e
            }),
            d.remove(),
            d.off("*.*"),
            m(3, "destroyed " + n + " (reset: " + (e ? "true" : "false") + ")"),
            null
        }
        ,
        this.update = function(e) {
            if (a)
                if (e)
                    if (a.enabled() && i) {
                        var t, n = a.info("scrollPos");
                        t = 0 < g.duration ? (n - s.start) / (s.end - s.start) : n >= s.start ? 1 : 0,
                        d.trigger("update", {
                            startPos: s.start,
                            endPos: s.end,
                            scrollPos: n
                        }),
                        d.progress(t)
                    } else
                        w && p === u && O(!0);
                else
                    a.updateScene(d, !1);
            return d
        }
        ,
        this.refresh = function() {
            return E(),
            b(),
            d
        }
        ,
        this.progress = function(e) {
            if (arguments.length) {
                var t = !1
                  , n = p
                  , r = a ? a.info("scrollDirection") : "PAUSED"
                  , o = g.reverse || h <= e;
                if (0 === g.duration ? (t = h != e,
                p = 0 === (h = e < 1 && o ? 0 : 1) ? c : u) : e < 0 && p !== c && o ? (p = c,
                t = !(h = 0)) : 0 <= e && e < 1 && o ? (h = e,
                p = u,
                t = !0) : 1 <= e && p !== f ? (h = 1,
                p = f,
                t = !0) : p !== u || o || O(),
                t) {
                    var i = {
                        progress: h,
                        state: p,
                        scrollDirection: r
                    }
                      , l = p != n
                      , s = function(e) {
                        d.trigger(e, i)
                    };
                    l && n !== u && (s("enter"),
                    s(n === c ? "start" : "end")),
                    s("progress"),
                    l && p !== u && (s(p === c ? "start" : "end"),
                    s("leave"))
                }
                return d
            }
            return h
        }
        ;
        var w, y, S = function() {
            s = {
                start: v + g.offset
            },
            a && g.triggerElement && (s.start -= a.info("size") * g.triggerHook),
            s.end = s.start + g.duration
        }, E = function(e) {
            if (r) {
                var t = "duration";
                x(t, r.call(d)) && !e && (d.trigger("change", {
                    what: t,
                    newval: g[t]
                }),
                d.trigger("shift", {
                    reason: t
                }))
            }
        }, b = function(e) {
            var t = 0
              , n = g.triggerElement;
            if (a && n) {
                for (var r = a.info(), o = D.get.offset(r.container), i = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(M); )
                    n = n.parentNode;
                var l = D.get.offset(n);
                r.isDocument || (o[i] -= a.scrollPos()),
                t = l[i] - o[i]
            }
            var s = t != v;
            v = t,
            s && !e && d.trigger("shift", {
                reason: "triggerElementPosition"
            })
        }, R = function() {
            0 < g.triggerHook && d.trigger("shift", {
                reason: "containerResize"
            })
        }, T = D.extend(k.validate, {
            duration: function(e) {
                if (D.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function() {
                        return a ? a.info("size") * t : 0
                    }
                }
                if (D.type.Function(e)) {
                    r = e;
                    try {
                        e = parseFloat(r())
                    } catch (n) {
                        e = -1
                    }
                }
                if (e = parseFloat(e),
                !D.type.Number(e) || e < 0)
                    throw r ? (r = undefined,
                    ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                return e
            }
        }), C = function(e) {
            (e = arguments.length ? [e] : Object.keys(T)).forEach(function(e) {
                var t;
                if (T[e])
                    try {
                        t = T[e](g[e])
                    } catch (r) {
                        t = o[e];
                        var n = D.type.String(r) ? [r] : r;
                        D.type.Array(n) ? (n[0] = "ERROR: " + n[0],
                        n.unshift(1),
                        m.apply(this, n)) : m(1, "ERROR: Problem executing validation callback for option '" + e + "':", r.message)
                    } finally {
                        g[e] = t
                    }
            })
        }, x = function(e, t) {
            var n = !1
              , r = g[e];
            return g[e] != t && (g[e] = t,
            C(e),
            n = r != g[e]),
            n
        }, F = function(t) {
            d[t] || (d[t] = function(e) {
                return arguments.length ? ("duration" === t && (r = undefined),
                x(t, e) && (d.trigger("change", {
                    what: t,
                    newval: g[t]
                }),
                -1 < k.shifts.indexOf(t) && d.trigger("shift", {
                    reason: t
                })),
                d) : g[t]
            }
            )
        };
        this.controller = function() {
            return a
        }
        ,
        this.state = function() {
            return p
        }
        ,
        this.scrollOffset = function() {
            return s.start
        }
        ,
        this.triggerPosition = function() {
            var e = g.offset;
            return a && (g.triggerElement ? e += v : e += a.info("size") * d.triggerHook()),
            e
        }
        ,
        d.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (p === f && t || p === u && 0 === g.duration) && O(),
            t && z()
        }).on("progress.internal", function() {
            O()
        }).on("add.internal", function() {
            z()
        }).on("destroy.internal", function(e) {
            d.removePin(e.reset)
        });
        var O = function(e) {
            if (w && a) {
                var t = a.info()
                  , n = y.spacer.firstChild;
                if (e || p !== u) {
                    var r = {
                        position: y.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , o = D.css(n, "position") != r.position;
                    y.pushFollowers ? 0 < g.duration && (p === f && 0 === parseFloat(D.css(y.spacer, "padding-top")) ? o = !0 : p === c && 0 === parseFloat(D.css(y.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = g.duration * h,
                    D.css(n, r),
                    o && z()
                } else {
                    "fixed" != D.css(n, "position") && (D.css(n, {
                        position: "fixed"
                    }),
                    z());
                    var i = D.get.offset(y.spacer, !0)
                      , l = g.reverse || 0 === g.duration ? t.scrollPos - s.start : Math.round(h * g.duration * 10) / 10;
                    i[t.vertical ? "top" : "left"] += l,
                    D.css(y.spacer.firstChild, {
                        top: i.top,
                        left: i.left
                    })
                }
            }
        }
          , z = function() {
            if (w && a && y.inFlow) {
                var e = p === u
                  , t = a.info("vertical")
                  , n = y.spacer.firstChild
                  , r = D.isMarginCollapseType(D.css(y.spacer, "display"))
                  , o = {};
                y.relSize.width || y.relSize.autoFullWidth ? e ? D.css(w, {
                    width: D.get.width(y.spacer)
                }) : D.css(w, {
                    width: "100%"
                }) : (o["min-width"] = D.get.width(t ? w : n, !0, !0),
                o.width = e ? o["min-width"] : "auto"),
                y.relSize.height ? e ? D.css(w, {
                    height: D.get.height(y.spacer) - (y.pushFollowers ? g.duration : 0)
                }) : D.css(w, {
                    height: "100%"
                }) : (o["min-height"] = D.get.height(t ? n : w, !0, !r),
                o.height = e ? o["min-height"] : "auto"),
                y.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = g.duration * h,
                o["padding" + (t ? "Bottom" : "Right")] = g.duration * (1 - h)),
                D.css(y.spacer, o)
            }
        }
          , P = function() {
            a && w && p === u && !a.info("isDocument") && O()
        }
          , A = function() {
            a && w && p === u && ((y.relSize.width || y.relSize.autoFullWidth) && D.get.width(window) != D.get.width(y.spacer.parentNode) || y.relSize.height && D.get.height(window) != D.get.height(y.spacer.parentNode)) && z()
        }
          , L = function(e) {
            a && w && p === u && !a.info("isDocument") && (e.preventDefault(),
            a._setScrollPos(a.info("scrollPos") - ((e.wheelDelta || e[a.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        };
        this.setPin = function(e, t) {
            var n = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (t = D.extend({}, n, t),
            !(e = D.get.elements(e)[0]))
                return m(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                d;
            if ("fixed" === D.css(e, "position"))
                return m(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                d;
            if (w) {
                if (w === e)
                    return d;
                d.removePin()
            }
            var r = (w = e).parentNode.style.display
              , o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            w.parentNode.style.display = "none";
            var i = "absolute" != D.css(w, "position")
              , l = D.css(w, o.concat(["display"]))
              , s = D.css(w, ["width", "height"]);
            w.parentNode.style.display = r,
            !i && t.pushFollowers && (m(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
            t.pushFollowers = !1),
            window.setTimeout(function() {
                w && 0 === g.duration && t.pushFollowers && m(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
            }, 0);
            var a = w.parentNode.insertBefore(document.createElement("div"), w)
              , c = D.extend(l, {
                position: i ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (i || D.extend(c, D.css(w, ["width", "height"])),
            D.css(a, c),
            a.setAttribute(M, ""),
            D.addClass(a, t.spacerClass),
            y = {
                spacer: a,
                relSize: {
                    width: "%" === s.width.slice(-1),
                    height: "%" === s.height.slice(-1),
                    autoFullWidth: "auto" === s.width && i && D.isMarginCollapseType(l.display)
                },
                pushFollowers: t.pushFollowers,
                inFlow: i
            },
            !w.___origStyle) {
                w.___origStyle = {};
                var u = w.style;
                o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                    w.___origStyle[e] = u[e] || ""
                })
            }
            return y.relSize.width && D.css(a, {
                width: s.width
            }),
            y.relSize.height && D.css(a, {
                height: s.height
            }),
            a.appendChild(w),
            D.css(w, {
                position: i ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (y.relSize.width || y.relSize.autoFullWidth) && D.css(w, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", P),
            window.addEventListener("resize", P),
            window.addEventListener("resize", A),
            w.addEventListener("mousewheel", L),
            w.addEventListener("DOMMouseScroll", L),
            m(3, "added pin"),
            O(),
            d
        }
        ,
        this.removePin = function(e) {
            if (w) {
                if (p === u && O(!0),
                e || !a) {
                    var t = y.spacer.firstChild;
                    if (t.hasAttribute(M)) {
                        var n = y.spacer.style;
                        margins = {},
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                            margins[e] = n[e] || ""
                        }),
                        D.css(t, margins)
                    }
                    y.spacer.parentNode.insertBefore(t, y.spacer),
                    y.spacer.parentNode.removeChild(y.spacer),
                    w.parentNode.hasAttribute(M) || (D.css(w, w.___origStyle),
                    delete w.___origStyle)
                }
                window.removeEventListener("scroll", P),
                window.removeEventListener("resize", P),
                window.removeEventListener("resize", A),
                w.removeEventListener("mousewheel", L),
                w.removeEventListener("DOMMouseScroll", L),
                w = undefined,
                m(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
            }
            return d
        }
        ;
        var I, N = [];
        return d.on("destroy.internal", function(e) {
            d.removeClassToggle(e.reset)
        }),
        this.setClassToggle = function(e, t) {
            var n = D.get.elements(e);
            return 0 !== n.length && D.type.String(t) ? (0 < N.length && d.removeClassToggle(),
            I = t,
            N = n,
            d.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? D.addClass : D.removeClass;
                N.forEach(function(e) {
                    t(e, I)
                })
            })) : m(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."),
            d
        }
        ,
        this.removeClassToggle = function(e) {
            return e && N.forEach(function(e) {
                D.removeClass(e, I)
            }),
            d.off("start.internal_class end.internal_class"),
            I = undefined,
            N = [],
            d
        }
        ,
        t(),
        d
    }
    ;
    var k = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: undefined,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e),
                !D.type.Number(e))
                    throw ['Invalid value for option "offset":', e];
                return e
            },
            triggerElement: function(e) {
                if (e = e || undefined) {
                    var t = D.get.elements(e)[0];
                    if (!t)
                        throw ['Element defined in option "triggerElement" was not found:', e];
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (D.type.Number(e))
                    e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t))
                        throw ['Invalid value for option "triggerHook": ', e];
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            },
            loglevel: function(e) {
                if (e = parseInt(e),
                !D.type.Number(e) || e < 0 || 3 < e)
                    throw ['Invalid value for option "loglevel":', e];
                return e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    _.Scene.addOption = function(e, t, n, r) {
        e in k.defaults ? _._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (k.defaults[e] = t,
        k.validate[e] = n,
        r && k.shifts.push(e))
    }
    ,
    _.Scene.extend = function(e) {
        var t = this;
        _.Scene = function() {
            return t.apply(this, arguments),
            this.$super = D.extend({}, this),
            e.apply(this, arguments) || this
        }
        ,
        D.extend(_.Scene, t),
        _.Scene.prototype = t.prototype,
        _.Scene.prototype.constructor = _.Scene
    }
    ,
    _.Event = function(e, t, n, r) {
        for (var o in r = r || {})
            this[o] = r[o];
        return this.type = e,
        this.target = this.currentTarget = n,
        this.namespace = t || "",
        this.timeStamp = this.timestamp = Date.now(),
        this
    }
    ;
    var D = _._util = function(l) {
        var n, e = {}, s = function(e) {
            return parseFloat(e) || 0
        }, a = function(e) {
            return e.currentStyle ? e.currentStyle : l.getComputedStyle(e)
        }, r = function(e, t, n, r) {
            if ((t = t === document ? l : t) === l)
                r = !1;
            else if (!p.DomElement(t))
                return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var o = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
            if (n && r) {
                var i = a(t);
                o += "Height" === e ? s(i.marginTop) + s(i.marginBottom) : s(i.marginLeft) + s(i.marginRight)
            }
            return o
        }, c = function(e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            })
        };
        e.extend = function(e) {
            for (e = e || {},
            n = 1; n < arguments.length; n++)
                if (arguments[n])
                    for (var t in arguments[n])
                        arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
            return e
        }
        ,
        e.isMarginCollapseType = function(e) {
            return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        }
        ;
        var o = 0
          , t = ["ms", "moz", "webkit", "o"]
          , i = l.requestAnimationFrame
          , u = l.cancelAnimationFrame;
        for (n = 0; !i && n < t.length; ++n)
            i = l[t[n] + "RequestAnimationFrame"],
            u = l[t[n] + "CancelAnimationFrame"] || l[t[n] + "CancelRequestAnimationFrame"];
        i || (i = function(e) {
            var t = (new Date).getTime()
              , n = Math.max(0, 16 - (t - o))
              , r = l.setTimeout(function() {
                e(t + n)
            }, n);
            return o = t + n,
            r
        }
        ),
        u || (u = function(e) {
            l.clearTimeout(e)
        }
        ),
        e.rAF = i.bind(l),
        e.cAF = u.bind(l);
        var f = ["error", "warn", "log"]
          , d = l.console || {};
        for (d.log = d.log || function() {}
        ,
        n = 0; n < f.length; n++) {
            var g = f[n];
            d[g] || (d[g] = d.log)
        }
        e.log = function(e) {
            (e > f.length || e <= 0) && (e = f.length);
            var t = new Date
              , n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3)
              , r = f[e - 1]
              , o = Array.prototype.splice.call(arguments, 1)
              , i = Function.prototype.bind.call(d[r], d);
            o.unshift(n),
            i.apply(d, o)
        }
        ;
        var p = e.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        }
        ;
        p.String = function(e) {
            return "string" === p(e)
        }
        ,
        p.Function = function(e) {
            return "function" === p(e)
        }
        ,
        p.Array = function(e) {
            return Array.isArray(e)
        }
        ,
        p.Number = function(e) {
            return !p.Array(e) && 0 <= e - parseFloat(e) + 1
        }
        ,
        p.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        }
        ;
        var h = e.get = {};
        return h.elements = function(e) {
            var t = [];
            if (p.String(e))
                try {
                    e = document.querySelectorAll(e)
                } catch (i) {
                    return t
                }
            if ("nodelist" === p(e) || p.Array(e))
                for (var n = 0, r = t.length = e.length; n < r; n++) {
                    var o = e[n];
                    t[n] = p.DomElement(o) ? o : h.elements(o)
                }
            else
                (p.DomElement(e) || e === document || e === l) && (t = [e]);
            return t
        }
        ,
        h.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : l.pageYOffset || 0
        }
        ,
        h.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : l.pageXOffset || 0
        }
        ,
        h.width = function(e, t, n) {
            return r("width", e, t, n)
        }
        ,
        h.height = function(e, t, n) {
            return r("height", e, t, n)
        }
        ,
        h.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top,
                n.left = r.left,
                t || (n.top += h.scrollTop(),
                n.left += h.scrollLeft())
            }
            return n
        }
        ,
        e.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }
        ,
        e.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "))
        }
        ,
        e.css = function(e, t) {
            if (p.String(t))
                return a(e)[c(t)];
            if (p.Array(t)) {
                var n = {}
                  , r = a(e);
                return t.forEach(function(e) {
                    n[e] = r[c(e)]
                }),
                n
            }
            for (var o in t) {
                var i = t[o];
                i == parseFloat(i) && (i += "px"),
                e.style[c(o)] = i
            }
        }
        ,
        e
    }(window || {});
    return _.Scene.prototype.addIndicators = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    }
    ,
    _.Scene.prototype.removeIndicators = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this
    }
    ,
    _.Scene.prototype.setTween = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    }
    ,
    _.Scene.prototype.removeTween = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this
    }
    ,
    _.Scene.prototype.setVelocity = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    }
    ,
    _.Scene.prototype.removeVelocity = function() {
        return _._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this
    }
    ,
    _
});
