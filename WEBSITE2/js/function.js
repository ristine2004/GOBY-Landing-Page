!function(e, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, n) {
    "use strict";
    function e(h, s, c) {
        function e(t, o, r) {
            var a, l = "$()." + h + '("' + o + '")';
            return t.each(function(t, e) {
                var i = c.data(e, h);
                if (i) {
                    var n = i[o];
                    if (n && "_" != o.charAt(0)) {
                        var s = n.apply(i, r);
                        a = void 0 === a ? s : a
                    } else
                        d(l + " is not a valid method")
                } else
                    d(h + " not initialized. Cannot call methods, i.e. " + l)
            }),
            void 0 !== a ? a : t
        }
        function i(t, n) {
            t.each(function(t, e) {
                var i = c.data(e, h);
                i ? (i.option(n),
                i._init()) : (i = new s(e,n),
                c.data(e, h, i))
            })
        }
        (c = c || n || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
        }
        ),
        c.fn[h] = function(t) {
            return "string" != typeof t ? (i(this, t),
            this) : e(this, t, r.call(arguments, 1))
        }
        ,
        o(c))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = e)
    }
    var r = Array.prototype.slice
      , i = t.console
      , d = void 0 === i ? function() {}
    : function(t) {
        i.error(t)
    }
    ;
    return o(n || t.jQuery),
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
                var r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e),
                s = i[n += r ? 0 : 1]
            }
            return this
        }
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function m(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function t() {}
    function y() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < C; e++) {
            t[x[e]] = 0
        }
        return t
    }
    function S(t) {
        var e = getComputedStyle(t);
        return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function E() {
        if (!s) {
            s = !0;
            var t = document.createElement("div");
            t.style.width = "200px",
            t.style.padding = "1px 2px 3px 4px",
            t.style.borderStyle = "solid",
            t.style.borderWidth = "1px 2px 3px 4px",
            t.style.boxSizing = "border-box";
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var i = S(t);
            n.isBoxSizeOuter = b = 200 == m(i.width),
            e.removeChild(t)
        }
    }
    function n(t) {
        if (E(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType) {
            var e = S(t);
            if ("none" == e.display)
                return y();
            var i = {};
            i.width = t.offsetWidth,
            i.height = t.offsetHeight;
            for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < C; s++) {
                var o = x[s]
                  , r = e[o]
                  , a = parseFloat(r);
                i[o] = isNaN(a) ? 0 : a
            }
            var l = i.paddingLeft + i.paddingRight
              , h = i.paddingTop + i.paddingBottom
              , c = i.marginLeft + i.marginRight
              , d = i.marginTop + i.marginBottom
              , u = i.borderLeftWidth + i.borderRightWidth
              , f = i.borderTopWidth + i.borderBottomWidth
              , p = n && b
              , g = m(e.width);
            !1 !== g && (i.width = g + (p ? 0 : l + u));
            var v = m(e.height);
            return !1 !== v && (i.height = v + (p ? 0 : h + f)),
            i.innerWidth = i.width - (l + u),
            i.innerHeight = i.height - (h + f),
            i.outerWidth = i.width + c,
            i.outerHeight = i.height + d,
            i
        }
    }
    var b, i = "undefined" == typeof console ? t : function(t) {
        console.error(t)
    }
    , x = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], C = x.length, s = !1;
    return n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var i = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i] + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(t, e) {
        return t[i](e)
    }
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(n, o) {
    var c = {
        extend: function(t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        },
        makeArray: function(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++)
                    e.push(t[i]);
            else
                e.push(t);
            return e
        },
        removeFrom: function(t, e) {
            var i = t.indexOf(e);
            -1 != i && t.splice(i, 1)
        },
        getParent: function(t, e) {
            for (; t != document.body; )
                if (t = t.parentNode,
                o(t, e))
                    return t
        },
        getQueryElement: function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        filterFindElements: function(t, n) {
            t = c.makeArray(t);
            var s = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n)
                        return void s.push(t);
                    o(t, n) && s.push(t);
                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                        s.push(e[i])
                }
            }),
            s
        },
        debounceMethod: function(t, e, n) {
            var s = t.prototype[e]
              , o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments
                  , i = this;
                this[o] = setTimeout(function() {
                    s.apply(i, e),
                    delete i[o]
                }, n || 100)
            }
        },
        docReady: function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        },
        toDashed: function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }
    }
      , d = n.console;
    return c.htmlInit = function(l, h) {
        c.docReady(function() {
            var t = c.toDashed(h)
              , s = "data-" + t
              , o = document.querySelectorAll("[" + s + "]")
              , e = document.querySelectorAll(".js-" + t)
              , i = c.makeArray(o).concat(c.makeArray(e))
              , r = s + "-options"
              , a = n.jQuery;
            i.forEach(function(t) {
                var e, i = t.getAttribute(s) || t.getAttribute(r);
                try {
                    e = i && JSON.parse(i)
                } catch (o) {
                    return void (d && d.error("Error parsing " + s + " on " + t.className + ": " + o))
                }
                var n = new l(t,e);
                a && a.data(t, h, n)
            })
        })
    }
    ,
    c
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {},
    e.Flickity.Cell = i(e, e.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute",
        this.x = 0,
        this.shift = 0
    }
    ,
    n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }
    ,
    n.getSize = function() {
        this.size = e(this.element)
    }
    ,
    n.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }
    ,
    n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }
    ,
    n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }
    ,
    n.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }
    ,
    n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {},
    t.Flickity.Slide = e())
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t),
        this.outerWidth += t.size.outerWidth,
        this.height = Math.max(t.size.outerHeight, this.height),
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }
    ,
    e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft"
          , e = this.getLastCell()
          , i = e ? e.size[t] : 0
          , n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }
    ,
    e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    e.select = function() {
        this.changeSelectedClass("add")
    }
    ,
    e.unselect = function() {
        this.changeSelectedClass("remove")
    }
    ,
    e.changeSelectedClass = function(e) {
        this.cells.forEach(function(t) {
            t.element.classList[e]("is-selected")
        })
    }
    ,
    e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    t
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {},
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils))
}(window, function(t, o) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame
      , s = 0;
    i || (i = function(t) {
        var e = (new Date).getTime()
          , i = Math.max(0, 16 - (e - s))
          , n = setTimeout(t, i);
        return s = e + i,
        n
    }
    );
    var e = {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0,
            this.restingFrames = 0,
            this.animate())
        },
        animate: function() {
            this.applyDragForce(),
            this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(),
            this.positionSlider(),
            this.settle(t),
            this.isAnimating) {
                var e = this;
                i(function() {
                    e.animate()
                })
            }
        }
    }
      , r = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
    return e.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && 1 < this.cells.length && (t = o.modulo(t, this.slideableWidth),
        t -= this.slideableWidth,
        this.shiftWrapCells(t)),
        t += this.cursorPosition,
        t = this.options.rightToLeft && r ? -t : t;
        var e = this.getPositionValue(t);
        this.slider.style[r] = this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")";
        var i = this.slides[0];
        if (i) {
            var n = -this.x - i.target
              , s = n / this.slidesWidth;
            this.dispatchEvent("scroll", null, [s, n])
        }
    }
    ,
    e.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target,
        this.positionSlider())
    }
    ,
    e.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }
    ,
    e.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
        2 < this.restingFrames && (this.isAnimating = !1,
        delete this.isFreeScrolling,
        this.positionSlider(),
        this.dispatchEvent("settle"))
    }
    ,
    e.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }
    ,
    e._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n]
              , o = 0 < e ? i : 0;
            s.wrapShift(o),
            e -= s.size.outerWidth
        }
    }
    ,
    e._unshiftCells = function(t) {
        if (t && t.length)
            for (var e = 0; e < t.length; e++)
                t[e].wrapShift(0)
    }
    ,
    e.integratePhysics = function() {
        this.x += this.velocity,
        this.velocity *= this.getFrictionFactor()
    }
    ,
    e.applyForce = function(t) {
        this.velocity += t
    }
    ,
    e.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }
    ,
    e.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }
    ,
    e.applyDragForce = function() {
        if (this.isPointerDown) {
            var t = this.dragX - this.x - this.velocity;
            this.applyForce(t)
        }
    }
    ,
    e.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
            var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
            this.applyForce(t)
        }
    }
    ,
    e
}),
function(r, a) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, i, n, s, o) {
            return a(r, t, e, i, n, s, o)
        });
    else if ("object" == typeof module && module.exports)
        module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var t = r.Flickity;
        r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype)
    }
}(window, function(e, t, i, a, n, r, s) {
    function o(t, e) {
        for (t = a.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    function l(t, e) {
        var i = a.getQueryElement(t);
        if (i) {
            if (this.element = i,
            this.element.flickityGUID) {
                var n = f[this.element.flickityGUID];
                return n.option(e),
                n
            }
            h && (this.$element = h(this.element)),
            this.options = a.extend({}, this.constructor.defaults),
            this.option(e),
            this._create()
        } else
            d && d.error("Bad element for Flickity: " + (i || t))
    }
    var h = e.jQuery
      , c = e.getComputedStyle
      , d = e.console
      , u = 0
      , f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    l.createMethods = [];
    var p = l.prototype;
    a.extend(p, t.prototype),
    p._create = function() {
        var t = this.guid = ++u;
        this.element.flickityGUID = t,
        (f[t] = this).selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this),
        l.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }
    ,
    p.option = function(t) {
        a.extend(this.options, t)
    }
    ,
    p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0,
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize(),
            o(this._filterFindCellElements(this.element.children), this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && (this.element.tabIndex = 0,
            this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
            var t, e = this.options.initialIndex;
            t = this.isInitActivated ? this.selectedIndex : void 0 !== e && this.cells[e] ? e : 0,
            this.select(t, !1, !0),
            this.isInitActivated = !0
        }
    }
    ,
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    }
    ,
    p._filterFindCellElements = function(t) {
        return a.filterFindElements(t, this.options.cellSelector)
    }
    ,
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    }
    ,
    p._makeCells = function(t) {
        return this._filterFindCellElements(t).map(function(t) {
            return new n(t,this)
        }, this)
    }
    ,
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }
    ,
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    }
    ,
    p._positionCells = function(t) {
        t = t || 0,
        this.maxCellHeight = t && this.maxCellHeight || 0;
        var e = 0;
        if (0 < t) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e),
            e += o.size.outerWidth,
            this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }
    ,
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }
    ,
    p.updateSlides = function() {
        if (this.slides = [],
        this.cells.length) {
            var n = new r(this);
            this.slides.push(n);
            var s = "left" == this.originSide ? "marginRight" : "marginLeft"
              , o = this._getCanCellFit();
            this.cells.forEach(function(t, e) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
                    o.call(this, e, i) || (n.updateTarget(),
                    n = new r(this),
                    this.slides.push(n)),
                    n.addCell(t)
                } else
                    n.addCell(t)
            }, this),
            n.updateTarget(),
            this.updateSelectedSlide()
        }
    }
    ,
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            }
            ;
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e != 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/)
          , n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }
    ,
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    }
    ,
    p.getSize = function() {
        this.size = i(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    }
    ;
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }
    ,
    p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }
    ,
    p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition
              , e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }
    ,
    p._getGapCells = function(t, e, i) {
        for (var n = []; 0 < t; ) {
            var s = this.cells[e];
            if (!s)
                break;
            n.push(s),
            e += i,
            t -= s.size.outerWidth
        }
        return n
    }
    ,
    p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft
              , e = t ? "marginRight" : "marginLeft"
              , i = t ? "marginLeft" : "marginRight"
              , n = this.slideableWidth - this.getLastCell().size[i]
              , s = n < this.size.innerWidth
              , o = this.cursorPosition + this.cells[0].size[e]
              , r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o),
                t.target = Math.min(t.target, r))
            }, this)
        }
    }
    ,
    p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        h && this.$element) {
            var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (e) {
                var o = h.Event(e);
                o.type = t,
                s = o
            }
            this.$element.trigger(s, i)
        }
    }
    ,
    p.select = function(t, e, i) {
        this.isActive && (t = parseInt(t, 10),
        this._wrapSelect(t),
        (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)),
        this.slides[t] && (this.selectedIndex = t,
        this.updateSelectedSlide(),
        i ? this.positionSliderAtSelected() : this.startAnimation(),
        this.options.adaptiveHeight && this.setGallerySize(),
        this.dispatchEvent("select"),
        this.dispatchEvent("cellSelect")))
    }
    ,
    p._wrapSelect = function(t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e))
            return t;
        var i = a.modulo(t, e)
          , n = Math.abs(i - this.selectedIndex)
          , s = Math.abs(i + e - this.selectedIndex)
          , o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
    }
    ,
    p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }
    ,
    p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }
    ,
    p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(),
        (this.selectedSlide = t).select(),
        this.selectedCells = t.cells,
        this.selectedElements = t.getCellElements(),
        this.selectedCell = t.cells[0],
        this.selectedElement = this.selectedElements[0])
    }
    ,
    p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }
    ,
    p.selectCell = function(t, e, i) {
        var n;
        "number" == typeof t ? n = this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)),
        n = this.getCell(t));
        for (var s = 0; n && s < this.slides.length; s++) {
            if (-1 != this.slides[s].cells.indexOf(n))
                return void this.select(s, e, i)
        }
    }
    ,
    p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    }
    ,
    p.getCells = function(t) {
        t = a.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
            var e = this.getCell(t);
            e && i.push(e)
        }, this),
        i
    }
    ,
    p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e || (t = a.getParent(t, ".flickity-slider > *"),
        this.getCell(t))
    }
    ,
    p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t)
            return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
            var o = this.options.wrapAround ? a.modulo(s, i) : s
              , r = this.slides[o];
            r && (n = n.concat(r.getCellElements()))
        }
        return n
    }
    ,
    p.uiChange = function() {
        this.emitEvent("uiChange")
    }
    ,
    p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }
    ,
    p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }
    ,
    a.debounceMethod(l, "onresize", 150),
    p.resize = function() {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }
    ,
    p.watchCSS = function() {
        this.options.watchCSS && (-1 != c(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }
    ,
    p.onkeydown = function(t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
            if (37 == t.keyCode) {
                var e = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(),
                this[e]()
            } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(),
                this[i]()
            }
    }
    ,
    p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"),
        this.element.classList.remove("flickity-rtl"),
        this.cells.forEach(function(t) {
            t.destroy()
        }),
        this.unselectSelectedSlide(),
        this.element.removeChild(this.viewport),
        o(this.slider.children, this.element),
        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
        this.element.removeEventListener("keydown", this)),
        this.isActive = !1,
        this.emitEvent("deactivate"))
    }
    ,
    p.destroy = function() {
        this.deactivate(),
        e.removeEventListener("resize", this),
        this.emitEvent("destroy"),
        h && this.$element && h.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete f[this.guid]
    }
    ,
    a.extend(p, s),
    l.data = function(t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && f[e]
    }
    ,
    a.htmlInit(l, "flickity"),
    h && h.bridget && h.bridget("flickity", l),
    l.Cell = n,
    l
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function(n, t) {
    function e() {}
    function i() {}
    var s = i.prototype = Object.create(t.prototype);
    s.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    s.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    s._bindStartEvent = function(t, e) {
        var i = (e = void 0 === e || !!e) ? "addEventListener" : "removeEventListener";
        n.navigator.pointerEnabled ? t[i]("pointerdown", this) : n.navigator.msPointerEnabled ? t[i]("MSPointerDown", this) : (t[i]("mousedown", this),
        t[i]("touchstart", this))
    }
    ,
    s.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    }
    ,
    s.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    s.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    s.onMSPointerDown = s.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    s._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    s.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var o = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"],
        MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
    };
    return s._bindPostStartEvents = function(t) {
        if (t) {
            var e = o[t.type];
            e.forEach(function(t) {
                n.addEventListener(t, this)
            }, this),
            this._boundPointerEvents = e
        }
    }
    ,
    s._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
            n.removeEventListener(t, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    s.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    s.onMSPointerMove = s.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    s._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    s.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    s.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    s.onMSPointerUp = s.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    s._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    s.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    s._pointerDone = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier,
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    s.pointerDone = e,
    s.onMSPointerCancel = s.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    s._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    s.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    i.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    i
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function(t, s) {
    function o() {}
    function e() {}
    var i = e.prototype = Object.create(s.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0)
    }
    ,
    i.unbindHandles = function() {
        this._bindHandles(!1)
    }
    ;
    var r = t.navigator;
    return i._bindHandles = function(e) {
        var t;
        e = void 0 === e || !!e,
        t = r.pointerEnabled ? function(t) {
            t.style.touchAction = e ? "none" : ""
        }
        : r.msPointerEnabled ? function(t) {
            t.style.msTouchAction = e ? "none" : ""
        }
        : o;
        for (var i = e ? "addEventListener" : "removeEventListener", n = 0; n < this.handles.length; n++) {
            var s = this.handles[n];
            this._bindStartEvent(s, e),
            t(s),
            s[i]("click", this)
        }
    }
    ,
    i.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type)
            return this.isPointerDown = !1,
            void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(),
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ,
    i._dragPointerDown = function(t, e) {
        this.pointerDownPoint = s.getPointerPoint(e),
        this.canPreventDefaultOnPointerDown(t, e) && t.preventDefault()
    }
    ,
    i.canPreventDefaultOnPointerDown = function(t) {
        return "SELECT" != t.target.nodeName
    }
    ,
    i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    }
    ,
    i._dragPointerMove = function(t, e) {
        var i = s.getPointerPoint(e)
          , n = {
            x: i.x - this.pointerDownPoint.x,
            y: i.y - this.pointerDownPoint.y
        };
        return !this.isDragging && this.hasDragStarted(n) && this._dragStart(t, e),
        n
    }
    ,
    i.hasDragStarted = function(t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
    }
    ,
    i.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }
    ,
    i._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }
    ,
    i._dragStart = function(t, e) {
        this.isDragging = !0,
        this.dragStartPoint = s.getPointerPoint(e),
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    }
    ,
    i.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }
    ,
    i._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }
    ,
    i.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    }
    ,
    i._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }
        .bind(this)),
        this.dragEnd(t, e)
    }
    ,
    i.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }
    ,
    i.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }
    ,
    i._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = t.target.nodeName;
            "INPUT" != i && "TEXTAREA" != i || t.target.focus(),
            this.staticClick(t, e),
            "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
            setTimeout(function() {
                delete this.isIgnoringMouseUp
            }
            .bind(this), 400))
        }
    }
    ,
    i.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }
    ,
    e.getPointerPoint = s.getPointerPoint,
    e
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function(n, t, e, a) {
    function s() {
        return {
            x: n.pageXOffset,
            y: n.pageYOffset
        }
    }
    a.extend(t.defaults, {
        draggable: !0,
        dragThreshold: 3
    }),
    t.createMethods.push("_createDrag");
    var i = t.prototype;
    a.extend(i, e.prototype),
    i._createDrag = function() {
        this.on("activate", this.bindDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.unbindDrag)
    }
    ,
    i.bindDrag = function() {
        this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"),
        this.handles = [this.viewport],
        this.bindHandles(),
        this.isDragBound = !0)
    }
    ,
    i.unbindDrag = function() {
        this.isDragBound && (this.element.classList.remove("is-draggable"),
        this.unbindHandles(),
        delete this.isDragBound)
    }
    ,
    i._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }
    ,
    i._childUIPointerDownDrag = function(t) {
        t.preventDefault(),
        this.pointerDownFocus(t)
    }
    ;
    var o = {
        TEXTAREA: !0,
        INPUT: !0,
        OPTION: !0
    }
      , r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    i.pointerDown = function(t, e) {
        if (o[t.target.nodeName] && !r[t.target.type])
            return this.isPointerDown = !1,
            void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i != this.element && i != document.body && i.blur(),
        this.pointerDownFocus(t),
        this.dragX = this.x,
        this.viewport.classList.add("is-pointer-down"),
        this._bindPostStartEvents(t),
        this.pointerDownScroll = s(),
        n.addEventListener("scroll", this),
        this.dispatchEvent("pointerDown", t, [e])
    }
    ;
    var l = {
        touchstart: !0,
        MSPointerDown: !0
    }
      , h = {
        INPUT: !0,
        SELECT: !0
    };
    return i.pointerDownFocus = function(t) {
        if (this.options.accessibility && !l[t.type] && !h[t.target.nodeName]) {
            var e = n.pageYOffset;
            this.element.focus(),
            n.pageYOffset != e && n.scrollTo(n.pageXOffset, e)
        }
    }
    ,
    i.canPreventDefaultOnPointerDown = function(t) {
        var e = "touchstart" == t.type
          , i = t.target.nodeName;
        return !e && "SELECT" != i
    }
    ,
    i.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }
    ,
    i.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }
    ,
    i.pointerDone = function() {
        n.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }
    ,
    i.dragStart = function(t, e) {
        this.dragStartPosition = this.x,
        this.startAnimation(),
        this.dispatchEvent("dragStart", t, [e])
    }
    ,
    i.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    }
    ,
    i.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1
          , s = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = o < s ? .5 * (s + o) : s;
            var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            s = s < r ? .5 * (s + r) : s
        }
        this.dragX = s,
        this.dragMoveTime = new Date,
        this.dispatchEvent("dragMove", t, [e, i])
    }
    ,
    i.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
        } else
            this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX,
        this.isDragSelect = this.options.wrapAround,
        this.select(i),
        delete this.isDragSelect,
        this.dispatchEvent("dragEnd", t, [e])
    }
    ,
    i.dragEndRestingSelect = function() {
        var t = this.getRestingPosition()
          , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
          , i = this._getClosestResting(t, e, 1)
          , n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index
    }
    ,
    i._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e
        }
        : function(t, e) {
            return t < e
        }
        ; o(e, s) && (n += i,
        s = e,
        null !== (e = this.getSlideDistance(-t, n))); )
            e = Math.abs(e);
        return {
            distance: s,
            index: n - i
        }
    }
    ,
    i.getSlideDistance = function(t, e) {
        var i = this.slides.length
          , n = this.options.wrapAround && 1 < i
          , s = n ? a.modulo(e, i) : e
          , o = this.slides[s];
        if (!o)
            return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r)
    }
    ,
    i.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
          , e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
    }
    ,
    i.staticClick = function(t, e) {
        var i = this.getParentCell(t.target)
          , n = i && i.element
          , s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }
    ,
    i.onscroll = function() {
        var t = s()
          , e = this.pointerDownScroll.x - t.x
          , i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone()
    }
    ,
    t
}),
function(e, i) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.TapListener = i(e, e.Unipointer)
}(window, function(a, l) {
    function t(t) {
        this.bindTap(t)
    }
    var e = t.prototype = Object.create(l.prototype);
    return e.bindTap = function(t) {
        t && (this.unbindTap(),
        this.tapElement = t,
        this._bindStartEvent(t, !0))
    }
    ,
    e.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0),
        delete this.tapElement)
    }
    ,
    e.pointerUp = function(t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var i = l.getPointerPoint(e)
              , n = this.tapElement.getBoundingClientRect()
              , s = a.pageXOffset
              , o = a.pageYOffset;
            if (i.x >= n.left + s && i.x <= n.right + s && i.y >= n.top + o && i.y <= n.bottom + o && this.emitEvent("tap", [t, e]),
            "mouseup" != t.type) {
                this.isIgnoringMouseUp = !0;
                var r = this;
                setTimeout(function() {
                    delete r.isIgnoringMouseUp
                }, 400)
            }
        }
    }
    ,
    e.destroy = function() {
        this.pointerDone(),
        this.unbindTap()
    }
    ,
    t
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.TapListener, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    function s(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    function o(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }
    var r = "http://www.w3.org/2000/svg";
    s.prototype = new i,
    s.prototype._create = function() {
        this.isEnabled = !0,
        this.isPrevious = -1 == this.direction;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i),
        this.on("tap", this.onTap),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.bindTap(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        i.prototype.destroy.call(this),
        this.element.removeEventListener("click", this)
    }
    ,
    s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path")
          , i = o(this.parent.options.arrowShape);
        return e.setAttribute("d", i),
        e.setAttribute("class", "arrow"),
        this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(e),
        t
    }
    ,
    s.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }
    ,
    s.prototype.handleEvent = n.handleEvent,
    s.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap()
    }
    ,
    s.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1,
        this.isEnabled = !0)
    }
    ,
    s.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0,
        this.isEnabled = !1)
    }
    ,
    s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length)
            this.enable();
        else {
            var e = t.length ? t.length - 1 : 0
              , i = this.isPrevious ? 0 : e;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new s(-1,this),
        this.nextButton = new s(1,this),
        this.on("activate", this.activatePrevNextButtons))
    }
    ,
    a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    e.PrevNextButton = s,
    e
}),
function(n, s) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(t, e, i) {
        return s(n, t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = s(n, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.TapListener, n.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s(t) {
        this.parent = t,
        this._create()
    }
    s.prototype = new i,
    s.prototype._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.on("tap", this.onTap),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.setDots(),
        this.bindTap(this.holder),
        this.parent.element.appendChild(this.holder)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
        i.prototype.destroy.call(this)
    }
    ,
    s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }
    ,
    s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
            var n = document.createElement("li");
            n.className = "dot",
            e.appendChild(n),
            i.push(n),
            t--
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    }
    ,
    s.prototype.removeDots = function(t) {
        this.dots.splice(this.dots.length - t, t).forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }
    ,
    s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot"),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
        this.selectedDot.className = "dot is-selected")
    }
    ,
    s.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    e.PageDots = s,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new s(this),
        this.on("activate", this.activatePageDots),
        this.on("select", this.updateSelectedPageDots),
        this.on("cellChange", this.updatePageDots),
        this.on("resize", this.updatePageDots),
        this.on("deactivate", this.deactivatePageDots))
    }
    ,
    o.activatePageDots = function() {
        this.pageDots.activate()
    }
    ,
    o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }
    ,
    o.updatePageDots = function() {
        this.pageDots.setDots()
    }
    ,
    o.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }
    ,
    e.PageDots = s,
    e
}),
function(t, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, e, i) {
        return n(t, e, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        o && (this.onVisibilityChange = function() {
            this.visibilityChange()
        }
        .bind(this),
        this.onVisibilityPlay = function() {
            this.visibilityPlay()
        }
        .bind(this))
    }
    var s, o;
    "hidden"in document ? (s = "hidden",
    o = "visibilitychange") : "webkitHidden"in document && (s = "webkitHidden",
    o = "webkitvisibilitychange"),
    n.prototype = Object.create(t.prototype),
    n.prototype.play = function() {
        if ("playing" != this.state) {
            var t = document[s];
            if (o && t)
                return void document.addEventListener(o, this.onVisibilityPlay);
            this.state = "playing",
            o && document.addEventListener(o, this.onVisibilityChange),
            this.tick()
        }
    }
    ,
    n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function() {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    }
    ,
    n.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        o && document.removeEventListener(o, this.onVisibilityChange)
    }
    ,
    n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }
    ,
    n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused",
        this.clear())
    }
    ,
    n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }
    ,
    n.prototype.visibilityChange = function() {
        this[document[s] ? "pause" : "unpause"]()
    }
    ,
    n.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener(o, this.onVisibilityPlay)
    }
    ,
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var r = i.prototype;
    return r._createPlayer = function() {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }
    ,
    r.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(),
        this.element.addEventListener("mouseenter", this))
    }
    ,
    r.playPlayer = function() {
        this.player.play()
    }
    ,
    r.stopPlayer = function() {
        this.player.stop()
    }
    ,
    r.pausePlayer = function() {
        this.player.pause()
    }
    ,
    r.unpausePlayer = function() {
        this.player.unpause()
    }
    ,
    r.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }
    ,
    r.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(),
        this.element.addEventListener("mouseleave", this))
    }
    ,
    r.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }
    ,
    i.Player = n,
    i
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, r) {
    function h(t) {
        var e = document.createDocumentFragment();
        return t.forEach(function(t) {
            e.appendChild(t.element)
        }),
        e
    }
    var i = e.prototype;
    return i.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var n = this.cells.length;
            e = void 0 === e ? n : e;
            var s = h(i)
              , o = e == n;
            if (o)
                this.slider.appendChild(s);
            else {
                var r = this.cells[e].element;
                this.slider.insertBefore(s, r)
            }
            if (0 === e)
                this.cells = i.concat(this.cells);
            else if (o)
                this.cells = this.cells.concat(i);
            else {
                var a = this.cells.splice(e, n - e);
                this.cells = this.cells.concat(i).concat(a)
            }
            this._sizeCells(i);
            var l = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, l)
        }
    }
    ,
    i.append = function(t) {
        this.insert(t, this.cells.length)
    }
    ,
    i.prepend = function(t) {
        this.insert(t, 0)
    }
    ,
    i.remove = function(t) {
        var e, i, n = this.getCells(t), s = 0, o = n.length;
        for (e = 0; e < o; e++) {
            i = n[e],
            s -= this.cells.indexOf(i) < this.selectedIndex ? 1 : 0
        }
        for (e = 0; e < o; e++)
            (i = n[e]).remove(),
            r.removeFrom(this.cells, i);
        n.length && this._cellAddedRemoved(0, s)
    }
    ,
    i._cellAddedRemoved = function(t, e) {
        e = e || 0,
        this.selectedIndex += e,
        this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)),
        this.cellChange(t, !0),
        this.emitEvent("cellAddedRemoved", [t, e])
    }
    ,
    i.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }
    ,
    i.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize(),
        this.emitEvent("cellChange", [t]),
        this.options.freeScroll) {
            var n = i - this.slideableWidth;
            this.x += n * this.cellAlign,
            this.positionSlider()
        } else
            e && this.positionSliderAtSelected(),
            this.select(this.selectedIndex)
    }
    ,
    e
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(t, e, i) {
    "use strict";
    function s(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload"))
            return [t];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return i.makeArray(e)
    }
    function o(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    e.createMethods.push("_createLazyload");
    var n = e.prototype;
    return n._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }
    ,
    n.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0
              , i = this.getAdjacentCellElements(e)
              , n = [];
            i.forEach(function(t) {
                var e = s(t);
                n = n.concat(e)
            }),
            n.forEach(function(t) {
                new o(t,this)
            }, this)
        }
    }
    ,
    o.prototype.handleEvent = i.handleEvent,
    o.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.img.getAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload")
    }
    ,
    o.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }
    ,
    o.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }
    ,
    o.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img)
          , n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }
    ,
    e.LazyLoader = o,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(n, s) {
    function r(t, e, i) {
        return (e - t) * i + t
    }
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return t._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }
    ,
    t.setNavCompanion = function(t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
            this.navCompanion = e;
            var i = this;
            this.onNavCompanionSelect = function() {
                i.navCompanionSelect()
            }
            ,
            e.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    }
    ,
    t.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0]
              , i = this.navCompanion.cells.indexOf(e)
              , n = i + this.navCompanion.selectedCells.length - 1
              , s = Math.floor(r(i, n, this.navCompanion.cellAlign));
            if (this.selectCell(s, !1, t),
            this.removeNavSelectedElements(),
            !(s >= this.cells.length)) {
                var o = this.cells.slice(i, n + 1);
                this.navSelectedElements = o.map(function(t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
    }
    ,
    t.changeNavSelectedClass = function(e) {
        this.navSelectedElements.forEach(function(t) {
            t.classList[e]("is-nav-selected")
        })
    }
    ,
    t.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }
    ,
    t.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements)
    }
    ,
    t.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }
    ,
    t.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }
    ,
    t.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion)
    }
    ,
    n
}),
function(e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}(window, function(e, t) {
    function n(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function s(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function o(t, e, i) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = s(t),
        this.options = n({}, this.options),
        "function" == typeof e ? i = e : n(this.options, e),
        i && this.on("always", i),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new o(t,e,i)
    }
    function i(t) {
        this.img = t
    }
    function r(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = e.jQuery
      , l = e.console;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var h = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var s = n && n[2];
                s && this.addBackground(s, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(t) {
        var e = new i(t);
        this.images.push(e)
    }
    ,
    o.prototype.addBackground = function(t, e) {
        var i = new r(t,e);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(t, e, i) {
            setTimeout(function() {
                n.progress(t, e, i)
            })
        }
        var n = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }
    ,
    o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    i.prototype = Object.create(t.prototype),
    i.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    i.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    i.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    i.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    i.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype = Object.create(i.prototype),
    r.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((a = t).fn.imagesLoaded = function(t, e) {
            return new o(this,t,e).jqDeferred.promise(a(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
}),
function(i, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
        return n(i, t, e)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }
    ,
    n.imagesLoaded = function() {
        function t(t, e) {
            var i = n.getParentCell(e.img);
            n.cellSizeChange(i && i.element),
            n.options.freeScroll || n.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", t)
        }
    }
    ,
    e
});
  