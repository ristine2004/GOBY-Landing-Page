"use strict";
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function displayCurrency(e) {
    return "$" + (e % 100 == 0 ? e / 100 : (e / 100).toFixed(2))
}
function optionsString(e) {
    return _.map(e, function(e, t) {
        return t + "=" + e
    }).join(",")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function initProductSelectors(e) {
    var i = $(".site--header " + e)
      , n = i.find(".item")
      , o = i.find(".kit-cart--panel-step-color");
    o.on("click", function(e) {
        var t = $(this).data("color");
        o.removeClass("active"),
        n.removeClass("active"),
        i.find('[data-color="' + t + '"]').addClass("active"),
        e.stopPropagation()
    })
}
function initBrushKitsMenu() {
    $(".js-header-nav-color-selector").on("click", function(e) {
        var t = $(this).data("color")
          , i = $(this).parents(".header-nav-brush-kit");
        i.find("[data-color]").removeClass("active"),
        i.find('[data-color="' + t + '"]').addClass("active"),
        e.stopPropagation()
    })
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function setSlide(e) {
    $(".slider-cell").removeClass("active").eq(e).addClass("active"),
    $(".slider-dots .dot").removeClass("active").eq(e).addClass("active")
}
function openTab(e, t) {
    var i, n, o;
    for (n = document.getElementsByClassName("testimonial-cards"),
    i = 0; i < n.length; i++)
        n[i].className = n[i].className.replace(" active", "");
    for (o = document.getElementsByClassName("testimonials-tab-btn"),
    i = 0; i < o.length; i++)
        o[i].className = o[i].className.replace(" active", "");
    document.getElementById(t).className += " active",
    e.currentTarget.className += " active"
}
function initShopSelectors() {
    var t = $(this)
      , i = t.find(".item")
      , n = t.find(".kit-cart--panel-step-color");
    n.click(function() {
        var e = $(this).data("color");
        n.removeClass("active"),
        i.removeClass("active"),
        t.find('[data-color="' + e + '"]').addClass("active")
    })
}
Spree.ajax = function(e, t) {
    return "object" == typeof e && (t = e,
    e = undefined),
    t = t || {},
    Spree.api_key && (t = $.extend(!0, t, {
        headers: {
            "X-Spree-Token": Spree.api_key
        }
    })),
    $.ajax(e, t)
}
,
Spree.Flash = {
    display: function display(e, t, i) {
        var n = Spree.Flash.template(t, i).addClass("flash-" + e + " custom-flash");
        return $(".flash-notices").append(n),
        "success" === e ? $(".flash-notices").fadeIn().delay(3200).fadeOut("slow") : n
    },
    template: function template(e, t) {
        var i = undefined;
        return i = "" !== t ? '\n      <div class="flash">\n        <div>' + e + "</div>\n        <div>" + t + "</div>\n      </div>\n      " : '\n      <div class="flash">\n        <div>' + e + "</div>\n      </div>\n      ",
        $(i)
    },
    alert: function alert(e, t) {
        var i = arguments.length <= 1 || t === undefined ? "" : arguments[1];
        return Spree.Flash.display("alert", e, i)
    },
    error: function error(e, t) {
        var i = arguments.length <= 1 || t === undefined ? "" : arguments[1];
        return Spree.Flash.display("error", e, i)
    },
    warn: function warn(e, t) {
        var i = arguments.length <= 1 || t === undefined ? "" : arguments[1];
        return Spree.Flash.display("warn", e, i)
    },
    success: function success(e, t) {
        var i = arguments.length <= 1 || t === undefined ? "" : arguments[1];
        return Spree.Flash.display("success", e, i)
    }
},
Spree.routes.order = function() {
    return Spree.pathFor("api/orders/" + Spree.order_number)
}
,
Spree.routes.line_item = function(e) {
    return Spree.pathFor("api/orders/" + Spree.order_number + "/line_items/" + (e || ""))
}
,
Spree.routes.payment_client_token_api = function() {
    return Spree.pathFor("api/payment_client_token")
}
,
Spree.api = {
    payment_client_token: {
        create: function create(e) {
            return Spree.ajax({
                url: Spree.routes.payment_client_token_api(),
                type: "POST",
                data: e
            }).then(function(e) {
                return e.client_token
            })
        }
    }
},
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(u) {
    var r = window.Slick || {};
    (r = function() {
        function e(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: u(e),
                appendDots: u(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return u('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            u.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = u(e),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            i = u(e).data("slick") || {},
            n.options = u.extend({}, n.defaults, t, i),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = u.proxy(n.autoPlay, n),
            n.autoPlayClear = u.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = u.proxy(n.autoPlayIterator, n),
            n.changeSlide = u.proxy(n.changeSlide, n),
            n.clickHandler = u.proxy(n.clickHandler, n),
            n.selectHandler = u.proxy(n.selectHandler, n),
            n.setPosition = u.proxy(n.setPosition, n),
            n.swipeHandler = u.proxy(n.swipeHandler, n),
            n.dragHandler = u.proxy(n.dragHandler, n),
            n.keyHandler = u.proxy(n.keyHandler, n),
            n.instanceUid = o++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
        var o = 0;
        return e
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t)
            i = t,
            t = null;
        else if (t < 0 || t >= n.slideCount)
            return !1;
        n.unload(),
        "number" == typeof t ? 0 === t && 0 === n.$slides.length ? u(e).appendTo(n.$slideTrack) : i ? u(e).insertBefore(n.$slides.eq(t)) : u(e).insertAfter(n.$slides.eq(t)) : !0 === i ? u(e).prependTo(n.$slideTrack) : u(e).appendTo(n.$slideTrack),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e)
        }),
        n.$slidesCache = n.$slides,
        n.reinit()
    }
    ,
    r.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    r.prototype.animateSlide = function(e, t) {
        var i = {}
          , n = this;
        n.animateHeight(),
        !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
        !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: e
        }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
            top: e
        }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
        u({
            animStart: n.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)",
                n.$slideTrack.css(i)
            },
            complete: function() {
                t && t.call()
            }
        })) : (n.applyTransition(),
        e = Math.ceil(e),
        !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)",
        n.$slideTrack.css(i),
        t && setTimeout(function() {
            n.disableTransition(),
            t.call()
        }, n.options.speed))
    }
    ,
    r.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = u(t).not(e.$slider)),
        t
    }
    ,
    r.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function() {
            var e = u(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    r.prototype.applyTransition = function(e) {
        var t = this
          , i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    r.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    r.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }
    ,
    r.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    r.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    r.prototype.buildDots = function() {
        var e, t, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            t = u("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                t.append(u("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = t.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    r.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            u(t).attr("data-slick-index", e).data("originalStyling", u(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? u('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    r.prototype.buildRows = function() {
        var e, t, i, n, o, s, a, r = this;
        if (n = document.createDocumentFragment(),
        s = r.$slider.children(),
        1 < r.options.rows) {
            for (a = r.options.slidesPerRow * r.options.rows,
            o = Math.ceil(s.length / a),
            e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < r.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < r.options.slidesPerRow; i++) {
                        var u = e * a + (t * r.options.slidesPerRow + i);
                        s.get(u) && c.appendChild(s.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            r.$slider.empty().append(n),
            r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    r.prototype.checkResponsive = function(e, t) {
        var i, n, o, s = this, a = !1, r = s.$slider.width(), l = window.innerWidth || u(window).width();
        if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = r : "min" === s.respondTo && (o = Math.min(l, r)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in n = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
            null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n,
            "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = u.extend({}, s.originalSettings, s.breakpointSettings[n]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = n) : (s.activeBreakpoint = n,
            "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = u.extend({}, s.originalSettings, s.breakpointSettings[n]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = n),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    r.prototype.changeSlide = function(e, t) {
        var i, n, o = this, s = u(e.currentTarget);
        switch (s.is("a") && e.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        e.data.message) {
        case "previous":
            n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
            break;
        case "next":
            n = 0 === i ? o.options.slidesToScroll : i,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, t),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    r.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0,
        e > (t = this.getNavigableIndexes())[t.length - 1])
            e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }
    ,
    r.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && u("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", u.proxy(e.interrupt, e, !0)).off("mouseleave.slick", u.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        u(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().off("click.slick", e.selectHandler),
        u(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        u(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        u("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        u(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    r.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", u.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.cleanUpRows = function() {
        var e, t = this;
        1 < t.options.rows && ((e = t.$slides.children().children()).removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    r.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    r.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        u(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            u(this).attr("style", u(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    r.prototype.disableTransition = function(e) {
        var t = this
          , i = {};
        i[t.transitionType] = "",
        !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }
    ,
    r.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
        i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(e),
            t.call()
        }, i.options.speed))
    }
    ,
    r.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
            e.stopImmediatePropagation();
            var t = u(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = t.is(":focus"),
                i.autoPlay())
            }, 0)
        })
    }
    ,
    r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    r.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , i = 0
          , n = 0;
        if (!0 === e.options.infinite)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++n,
                t = i + e.options.slidesToScroll,
                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }
    ,
    r.prototype.getLeft = function(e) {
        var t, i, n, o = this, s = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        s = i * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
        s = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        s = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        s = (e + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0),
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + s,
        !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
        t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        t += (o.$list.width() - n.outerWidth()) / 2)),
        t
    }
    ,
    r.prototype.getOption = r.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    r.prototype.getNavigableIndexes = function() {
        var e, t = this, i = 0, n = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
        n = -1 * t.options.slidesToScroll,
        e = 2 * t.slideCount); i < e; )
            o.push(i),
            i = n + t.options.slidesToScroll,
            n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }
    ,
    r.prototype.getSlick = function() {
        return this
    }
    ,
    r.prototype.getSlideCount = function() {
        var i, n, o = this;
        return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - n + u(t).outerWidth() / 2 > -1 * o.swipeLeft)
                return i = t,
                !1
        }),
        Math.abs(u(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    r.prototype.init = function(e) {
        var t = this;
        u(t.$slider).hasClass("slick-initialized") || (u(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    r.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(e) {
            u(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + e
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(e) {
            u(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + e,
                id: "slick-slide" + t.instanceUid + e
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    r.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    r.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && u("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && u("li", e.$dots).on("mouseenter.slick", u.proxy(e.interrupt, e, !0)).on("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }
    ,
    r.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", u.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", u.proxy(e.interrupt, e, !1)))
    }
    ,
    r.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        u(document).on(e.visibilityChange, u.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler),
        u(window).on("orientationchange.slick.slick-" + e.instanceUid, u.proxy(e.orientationChange, e)),
        u(window).on("resize.slick.slick-" + e.instanceUid, u.proxy(e.resize, e)),
        u("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        u(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    r.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    r.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    r.prototype.lazyLoad = function() {
        function e(e) {
            u("img[data-lazy]", e).each(function() {
                var e = u(this)
                  , t = u(this).attr("data-lazy")
                  , i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                i.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                i.src = t
            })
        }
        var t, i, n = this;
        !0 === n.options.centerMode ? !0 === n.options.infinite ? i = (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        i = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        i = Math.ceil(t + n.options.slidesToShow),
        !0 === n.options.fade && (0 < t && t--,
        i <= n.slideCount && i++)),
        e(n.$slider.find(".slick-slide").slice(t, i)),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    r.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    r.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }
    ,
    r.prototype.pause = r.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }
    ,
    r.prototype.play = r.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    r.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && t.initADA())
    }
    ,
    r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    r.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    r.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, i, n, o = this, s = u("img[data-lazy]", o.$slider);
        s.length ? (t = s.first(),
        i = t.attr("data-lazy"),
        (n = document.createElement("img")).onload = function() {
            t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === o.options.adaptiveHeight && o.setPosition(),
            o.$slider.trigger("lazyLoaded", [o, t, i]),
            o.progressiveLazyLoad()
        }
        ,
        n.onerror = function() {
            e < 3 ? setTimeout(function() {
                o.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            o.$slider.trigger("lazyLoadError", [o, t, i]),
            o.progressiveLazyLoad())
        }
        ,
        n.src = i) : o.$slider.trigger("allImagesLoaded", [o])
    }
    ,
    r.prototype.refresh = function(e) {
        var t, i, n = this;
        i = n.slideCount - n.options.slidesToShow,
        !n.options.infinite && n.currentSlide > i && (n.currentSlide = i),
        n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
        t = n.currentSlide,
        n.destroy(!0),
        u.extend(n, n.initials, {
            currentSlide: t
        }),
        n.init(),
        e || n.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    r.prototype.registerBreakpoints = function() {
        var e, t, i, n = this, o = n.options.responsive || null;
        if ("array" === u.type(o) && o.length) {
            for (e in n.respondTo = n.options.respondTo || "window",
            o)
                if (i = n.breakpoints.length - 1,
                t = o[e].breakpoint,
                o.hasOwnProperty(e)) {
                    for (; 0 <= i; )
                        n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1),
                        i--;
                    n.breakpoints.push(t),
                    n.breakpointSettings[t] = o[e].settings
                }
            n.breakpoints.sort(function(e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    r.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    r.prototype.resize = function() {
        var e = this;
        u(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = u(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e,
        n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
            return !1;
        n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        n.reinit()
    }
    ,
    r.prototype.setCSS = function(e) {
        var t, i, n = this, o = {};
        !0 === n.options.rtl && (e = -e),
        t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        o[n.positionProp] = e,
        !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"),
        n.$slideTrack.css(o)
    }
    ,
    r.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    r.prototype.setFade = function() {
        var i, n = this;
        n.$slides.each(function(e, t) {
            i = n.slideWidth * e * -1,
            !0 === n.options.rtl ? u(t).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : u(t).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    r.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }
    ,
    r.prototype.setOption = r.prototype.slickSetOption = function(e, t, i) {
        var n, o, s, a, r, l = this, c = !1;
        if ("object" === u.type(e) ? (s = arguments[0],
        c = t,
        r = "multiple") : "string" === u.type(arguments[0]) && (s = arguments[0],
        a = arguments[1],
        c = i,
        "responsive" === arguments[0] && "array" === u.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")),
        "single" === r)
            l.options[s] = a;
        else if ("multiple" === r)
            u.each(s, function(e, t) {
                l.options[e] = t
            });
        else if ("responsive" === r)
            for (o in a)
                if ("array" !== u.type(l.options.responsive))
                    l.options.responsive = [a[o]];
                else {
                    for (n = l.options.responsive.length - 1; 0 <= n; )
                        l.options.responsive[n].breakpoint === a[o].breakpoint && l.options.responsive.splice(n, 1),
                        n--;
                    l.options.responsive.push(a[o])
                }
        c && (l.unload(),
        l.reinit())
    }
    ,
    r.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    r.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        t.WebkitTransition === undefined && t.MozTransition === undefined && t.msTransition === undefined || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        t.OTransform !== undefined && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)),
        t.MozTransform !== undefined && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        t.perspectiveProperty === undefined && t.MozPerspective === undefined && (e.animType = !1)),
        t.webkitTransform !== undefined && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)),
        t.msTransform !== undefined && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        t.msTransform === undefined && (e.animType = !1)),
        t.transform !== undefined && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    r.prototype.setSlideClasses = function(e) {
        var t, i, n, o, s = this;
        i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        s.$slides.eq(e).addClass("slick-current"),
        !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2),
        !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e,
        i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")),
        s.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow,
        n = !0 === s.options.infinite ? s.options.slidesToShow + e : e,
        s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }
    ,
    r.prototype.setupInfinite = function() {
        var e, t, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1),
        !0 === n.options.infinite && !1 === n.options.fade && (t = null,
        n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow,
            e = n.slideCount; e > n.slideCount - i; e -= 1)
                t = e - 1,
                u(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1)
                t = e,
                u(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                u(this).attr("id", "")
            })
        }
    }
    ,
    r.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }
    ,
    r.prototype.selectHandler = function(e) {
        var t = this
          , i = u(e.target).is(".slick-slide") ? u(e.target) : u(e.target).parents(".slick-slide")
          , n = parseInt(i.attr("data-slick-index"));
        if (n || (n = 0),
        t.slideCount <= t.options.slidesToShow)
            return t.setSlideClasses(n),
            void t.asNavFor(n);
        t.slideHandler(n)
    }
    ,
    r.prototype.slideHandler = function(e, t, i) {
        var n, o, s, a, r, l = null, c = this;
        if (t = t || !1,
        (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow))
            if (!1 === t && c.asNavFor(e),
            n = e,
            l = c.getLeft(n),
            a = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(a, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (n = c.currentSlide,
                !0 !== i ? c.animateSlide(a, function() {
                    c.postSlide(n)
                }) : c.postSlide(n));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                s = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (r = (r = c.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(s),
                    c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== i ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
    }
    ,
    r.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    r.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(t, e),
        (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
        n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }
    ,
    r.prototype.swipeEnd = function() {
        var e, t, i = this;
        if (i.dragging = !1,
        i.interrupted = !1,
        i.shouldClick = !(10 < i.touchObject.swipeLength),
        i.touchObject.curX === undefined)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (t = i.swipeDirection()) {
            case "left":
            case "down":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != t && (i.slideHandler(e),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, t]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    r.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    r.prototype.swipeMove = function(e) {
        var t, i, n, o, s, a = this;
        return s = e.originalEvent !== undefined ? e.originalEvent.touches : null,
        !(!a.dragging || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide),
        a.touchObject.curX = s !== undefined ? s[0].pageX : e.clientX,
        a.touchObject.curY = s !== undefined ? s[0].pageY : e.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
        "vertical" !== (i = a.swipeDirection()) ? (e.originalEvent !== undefined && 4 < a.touchObject.swipeLength && e.preventDefault(),
        o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        n = a.touchObject.swipeLength,
        (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o,
        !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))) : void 0)
    }
    ,
    r.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
            return !(i.touchObject = {});
        e.originalEvent !== undefined && e.originalEvent.touches !== undefined && (t = e.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = t !== undefined ? t.pageX : e.clientX,
        i.touchObject.startY = i.touchObject.curY = t !== undefined ? t.pageY : e.clientY,
        i.dragging = !0
    }
    ,
    r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    r.prototype.unload = function() {
        var e = this;
        u(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    r.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    r.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    r.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    r.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    u.fn.slick = function(e) {
        var t, i, n = this, o = e, s = Array.prototype.slice.call(arguments, 1), a = n.length;
        for (t = 0; t < a; t++)
            if ("object" == typeof o || void 0 === o ? n[t].slick = new r(n[t],o) : i = n[t].slick[o].apply(n[t].slick, s),
            void 0 !== i)
                return i;
        return n
    }
}),
function(e, t) {
    function r(e, t) {
        return typeof e === t
    }
    function i() {
        var e, t, i, n, o, s;
        for (var a in c)
            if (c.hasOwnProperty(a)) {
                if (e = [],
                (t = c[a]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (i = 0; i < t.options.aliases.length; i++)
                        e.push(t.options.aliases[i].toLowerCase());
                for (n = r(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    1 === (s = e[o].split(".")).length ? u[s[0]] = n : (!u[s[0]] || u[s[0]]instanceof Boolean || (u[s[0]] = new Boolean(u[s[0]])),
                    u[s[0]][s[1]] = n),
                    l.push((n ? "" : "no-") + s.join("-"))
            }
    }
    function n(e) {
        var t = s.className
          , i = u._config.classPrefix || "";
        if (a && (t = t.baseVal),
        u._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            t = t.replace(n, "$1" + i + "js$2")
        }
        u._config.enableClasses && (t += " " + i + e.join(" " + i),
        a ? s.className.baseVal = t : s.className = t)
    }
    var l = []
      , c = []
      , o = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var i = this;
            setTimeout(function() {
                t(i[e])
            }, 0)
        },
        addTest: function(e, t, i) {
            c.push({
                name: e,
                fn: t,
                options: i
            })
        },
        addAsyncTest: function(e) {
            c.push({
                name: null,
                fn: e
            })
        }
    }
      , u = function() {};
    u.prototype = o,
    u = new u;
    var s = t.documentElement
      , a = "svg" === s.nodeName.toLowerCase();
    u.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e),
            sessionStorage.removeItem(e),
            !0
        } catch (t) {
            return !1
        }
    }),
    i(),
    n(l),
    delete o.addTest,
    delete o.addAsyncTest;
    for (var d = 0; d < u._q.length; d++)
        u._q[d]();
    e.Modernizr = u
}(window, document),
function() {
    function e(r) {
        function l(e, t, i, n, o, s) {
            for (; 0 <= o && o < s; o += r) {
                var a = n ? n[o] : o;
                i = t(i, e[a], a, e)
            }
            return i
        }
        return function(e, t, i, n) {
            t = b(t, n, 4);
            var o = !$(e) && y.keys(e)
              , s = (o || e).length
              , a = 0 < r ? 0 : s - 1;
            return arguments.length < 3 && (i = e[o ? o[a] : a],
            a += r),
            l(e, t, i, o, a, s)
        }
    }
    function t(s) {
        return function(e, t, i) {
            t = k(t, i);
            for (var n = C(e), o = 0 < s ? 0 : n - 1; 0 <= o && o < n; o += s)
                if (t(e[o], o, e))
                    return o;
            return -1
        }
    }
    function i(s, a, r) {
        return function(e, t, i) {
            var n = 0
              , o = C(e);
            if ("number" == typeof i)
                0 < s ? n = 0 <= i ? i : Math.max(i + o, n) : o = 0 <= i ? Math.min(i + 1, o) : i + o + 1;
            else if (r && i && o)
                return e[i = r(e, t)] === t ? i : -1;
            if (t != t)
                return 0 <= (i = a(u.call(e, n, o), y.isNaN)) ? i + n : -1;
            for (i = 0 < s ? n : o - 1; 0 <= i && i < o; i += s)
                if (e[i] === t)
                    return i;
            return -1
        }
    }
    function n(e, t) {
        var i = O.length
          , n = e.constructor
          , o = y.isFunction(n) && n.prototype || r
          , s = "constructor";
        for (y.has(e, s) && !y.contains(t, s) && t.push(s); i--; )
            (s = O[i])in e && e[s] !== o[s] && !y.contains(t, s) && t.push(s)
    }
    var o = this
      , s = o._
      , a = Array.prototype
      , r = Object.prototype
      , l = Function.prototype
      , c = a.push
      , u = a.slice
      , d = r.toString
      , p = r.hasOwnProperty
      , h = Array.isArray
      , f = Object.keys
      , v = l.bind
      , m = Object.create
      , g = function() {}
      , y = function(e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y),
    exports._ = y) : o._ = y,
    y.VERSION = "1.8.3";
    var b = function(o, s, e) {
        if (void 0 === s)
            return o;
        switch (null == e ? 3 : e) {
        case 1:
            return function(e) {
                return o.call(s, e)
            }
            ;
        case 2:
            return function(e, t) {
                return o.call(s, e, t)
            }
            ;
        case 3:
            return function(e, t, i) {
                return o.call(s, e, t, i)
            }
            ;
        case 4:
            return function(e, t, i, n) {
                return o.call(s, e, t, i, n)
            }
        }
        return function() {
            return o.apply(s, arguments)
        }
    }
      , k = function(e, t, i) {
        return null == e ? y.identity : y.isFunction(e) ? b(e, t, i) : y.isObject(e) ? y.matcher(e) : y.property(e)
    };
    y.iteratee = function(e, t) {
        return k(e, t, Infinity)
    }
    ;
    var w = function(l, c) {
        return function(e) {
            var t = arguments.length;
            if (t < 2 || null == e)
                return e;
            for (var i = 1; i < t; i++)
                for (var n = arguments[i], o = l(n), s = o.length, a = 0; a < s; a++) {
                    var r = o[a];
                    c && void 0 !== e[r] || (e[r] = n[r])
                }
            return e
        }
    }
      , _ = function(e) {
        if (!y.isObject(e))
            return {};
        if (m)
            return m(e);
        g.prototype = e;
        var t = new g;
        return g.prototype = null,
        t
    }
      , S = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
      , x = Math.pow(2, 53) - 1
      , C = S("length")
      , $ = function(e) {
        var t = C(e);
        return "number" == typeof t && 0 <= t && t <= x
    };
    y.each = y.forEach = function(e, t, i) {
        var n, o;
        if (t = b(t, i),
        $(e))
            for (n = 0,
            o = e.length; n < o; n++)
                t(e[n], n, e);
        else {
            var s = y.keys(e);
            for (n = 0,
            o = s.length; n < o; n++)
                t(e[s[n]], s[n], e)
        }
        return e
    }
    ,
    y.map = y.collect = function(e, t, i) {
        t = k(t, i);
        for (var n = !$(e) && y.keys(e), o = (n || e).length, s = Array(o), a = 0; a < o; a++) {
            var r = n ? n[a] : a;
            s[a] = t(e[r], r, e)
        }
        return s
    }
    ,
    y.reduce = y.foldl = y.inject = e(1),
    y.reduceRight = y.foldr = e(-1),
    y.find = y.detect = function(e, t, i) {
        var n;
        if (void 0 !== (n = $(e) ? y.findIndex(e, t, i) : y.findKey(e, t, i)) && -1 !== n)
            return e[n]
    }
    ,
    y.filter = y.select = function(e, n, t) {
        var o = [];
        return n = k(n, t),
        y.each(e, function(e, t, i) {
            n(e, t, i) && o.push(e)
        }),
        o
    }
    ,
    y.reject = function(e, t, i) {
        return y.filter(e, y.negate(k(t)), i)
    }
    ,
    y.every = y.all = function(e, t, i) {
        t = k(t, i);
        for (var n = !$(e) && y.keys(e), o = (n || e).length, s = 0; s < o; s++) {
            var a = n ? n[s] : s;
            if (!t(e[a], a, e))
                return !1
        }
        return !0
    }
    ,
    y.some = y.any = function(e, t, i) {
        t = k(t, i);
        for (var n = !$(e) && y.keys(e), o = (n || e).length, s = 0; s < o; s++) {
            var a = n ? n[s] : s;
            if (t(e[a], a, e))
                return !0
        }
        return !1
    }
    ,
    y.contains = y.includes = y.include = function(e, t, i, n) {
        return $(e) || (e = y.values(e)),
        ("number" != typeof i || n) && (i = 0),
        0 <= y.indexOf(e, t, i)
    }
    ,
    y.invoke = function(e, i) {
        var n = u.call(arguments, 2)
          , o = y.isFunction(i);
        return y.map(e, function(e) {
            var t = o ? i : e[i];
            return null == t ? t : t.apply(e, n)
        })
    }
    ,
    y.pluck = function(e, t) {
        return y.map(e, y.property(t))
    }
    ,
    y.where = function(e, t) {
        return y.filter(e, y.matcher(t))
    }
    ,
    y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t))
    }
    ,
    y.max = function(e, n, t) {
        var i, o, s = -Infinity, a = -Infinity;
        if (null == n && null != e)
            for (var r = 0, l = (e = $(e) ? e : y.values(e)).length; r < l; r++)
                i = e[r],
                s < i && (s = i);
        else
            n = k(n, t),
            y.each(e, function(e, t, i) {
                o = n(e, t, i),
                (a < o || o === -Infinity && s === -Infinity) && (s = e,
                a = o)
            });
        return s
    }
    ,
    y.min = function(e, n, t) {
        var i, o, s = Infinity, a = Infinity;
        if (null == n && null != e)
            for (var r = 0, l = (e = $(e) ? e : y.values(e)).length; r < l; r++)
                (i = e[r]) < s && (s = i);
        else
            n = k(n, t),
            y.each(e, function(e, t, i) {
                ((o = n(e, t, i)) < a || o === Infinity && s === Infinity) && (s = e,
                a = o)
            });
        return s
    }
    ,
    y.shuffle = function(e) {
        for (var t, i = $(e) ? e : y.values(e), n = i.length, o = Array(n), s = 0; s < n; s++)
            (t = y.random(0, s)) !== s && (o[s] = o[t]),
            o[t] = i[s];
        return o
    }
    ,
    y.sample = function(e, t, i) {
        return null == t || i ? ($(e) || (e = y.values(e)),
        e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
    }
    ,
    y.sortBy = function(e, n, t) {
        return n = k(n, t),
        y.pluck(y.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: n(e, t, i)
            }
        }).sort(function(e, t) {
            var i = e.criteria
              , n = t.criteria;
            if (i !== n) {
                if (n < i || void 0 === i)
                    return 1;
                if (i < n || void 0 === n)
                    return -1
            }
            return e.index - t.index
        }), "value")
    }
    ;
    var T = function(a) {
        return function(n, o, e) {
            var s = {};
            return o = k(o, e),
            y.each(n, function(e, t) {
                var i = o(e, t, n);
                a(s, e, i)
            }),
            s
        }
    };
    y.groupBy = T(function(e, t, i) {
        y.has(e, i) ? e[i].push(t) : e[i] = [t]
    }),
    y.indexBy = T(function(e, t, i) {
        e[i] = t
    }),
    y.countBy = T(function(e, t, i) {
        y.has(e, i) ? e[i]++ : e[i] = 1
    }),
    y.toArray = function(e) {
        return e ? y.isArray(e) ? u.call(e) : $(e) ? y.map(e, y.identity) : y.values(e) : []
    }
    ,
    y.size = function(e) {
        return null == e ? 0 : $(e) ? e.length : y.keys(e).length
    }
    ,
    y.partition = function(e, n, t) {
        n = k(n, t);
        var o = []
          , s = [];
        return y.each(e, function(e, t, i) {
            (n(e, t, i) ? o : s).push(e)
        }),
        [o, s]
    }
    ,
    y.first = y.head = y.take = function(e, t, i) {
        if (null != e)
            return null == t || i ? e[0] : y.initial(e, e.length - t)
    }
    ,
    y.initial = function(e, t, i) {
        return u.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)))
    }
    ,
    y.last = function(e, t, i) {
        if (null != e)
            return null == t || i ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
    }
    ,
    y.rest = y.tail = y.drop = function(e, t, i) {
        return u.call(e, null == t || i ? 1 : t)
    }
    ,
    y.compact = function(e) {
        return y.filter(e, y.identity)
    }
    ;
    var P = function(e, t, i, n) {
        for (var o = [], s = 0, a = n || 0, r = C(e); a < r; a++) {
            var l = e[a];
            if ($(l) && (y.isArray(l) || y.isArguments(l))) {
                t || (l = P(l, t, i));
                var c = 0
                  , u = l.length;
                for (o.length += u; c < u; )
                    o[s++] = l[c++]
            } else
                i || (o[s++] = l)
        }
        return o
    };
    y.flatten = function(e, t) {
        return P(e, t, !1)
    }
    ,
    y.without = function(e) {
        return y.difference(e, u.call(arguments, 1))
    }
    ,
    y.uniq = y.unique = function(e, t, i, n) {
        y.isBoolean(t) || (n = i,
        i = t,
        t = !1),
        null != i && (i = k(i, n));
        for (var o = [], s = [], a = 0, r = C(e); a < r; a++) {
            var l = e[a]
              , c = i ? i(l, a, e) : l;
            t ? (a && s === c || o.push(l),
            s = c) : i ? y.contains(s, c) || (s.push(c),
            o.push(l)) : y.contains(o, l) || o.push(l)
        }
        return o
    }
    ,
    y.union = function() {
        return y.uniq(P(arguments, !0, !0))
    }
    ,
    y.intersection = function(e) {
        for (var t = [], i = arguments.length, n = 0, o = C(e); n < o; n++) {
            var s = e[n];
            if (!y.contains(t, s)) {
                for (var a = 1; a < i && y.contains(arguments[a], s); a++)
                    ;
                a === i && t.push(s)
            }
        }
        return t
    }
    ,
    y.difference = function(e) {
        var t = P(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e)
        })
    }
    ,
    y.zip = function() {
        return y.unzip(arguments)
    }
    ,
    y.unzip = function(e) {
        for (var t = e && y.max(e, C).length || 0, i = Array(t), n = 0; n < t; n++)
            i[n] = y.pluck(e, n);
        return i
    }
    ,
    y.object = function(e, t) {
        for (var i = {}, n = 0, o = C(e); n < o; n++)
            t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
        return i
    }
    ,
    y.findIndex = t(1),
    y.findLastIndex = t(-1),
    y.sortedIndex = function(e, t, i, n) {
        for (var o = (i = k(i, n, 1))(t), s = 0, a = C(e); s < a; ) {
            var r = Math.floor((s + a) / 2);
            i(e[r]) < o ? s = r + 1 : a = r
        }
        return s
    }
    ,
    y.indexOf = i(1, y.findIndex, y.sortedIndex),
    y.lastIndexOf = i(-1, y.findLastIndex),
    y.range = function(e, t, i) {
        null == t && (t = e || 0,
        e = 0),
        i = i || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), o = Array(n), s = 0; s < n; s++,
        e += i)
            o[s] = e;
        return o
    }
    ;
    var M = function(e, t, i, n, o) {
        if (!(n instanceof t))
            return e.apply(i, o);
        var s = _(e.prototype)
          , a = e.apply(s, o);
        return y.isObject(a) ? a : s
    };
    y.bind = function(e, t) {
        if (v && e.bind === v)
            return v.apply(e, u.call(arguments, 1));
        if (!y.isFunction(e))
            throw new TypeError("Bind must be called on a function");
        var i = u.call(arguments, 2)
          , n = function() {
            return M(e, n, t, this, i.concat(u.call(arguments)))
        };
        return n
    }
    ,
    y.partial = function(o) {
        var s = u.call(arguments, 1)
          , a = function() {
            for (var e = 0, t = s.length, i = Array(t), n = 0; n < t; n++)
                i[n] = s[n] === y ? arguments[e++] : s[n];
            for (; e < arguments.length; )
                i.push(arguments[e++]);
            return M(o, a, this, this, i)
        };
        return a
    }
    ,
    y.bindAll = function(e) {
        var t, i, n = arguments.length;
        if (n <= 1)
            throw new Error("bindAll must be passed function names");
        for (t = 1; t < n; t++)
            e[i = arguments[t]] = y.bind(e[i], e);
        return e
    }
    ,
    y.memoize = function(n, o) {
        var s = function(e) {
            var t = s.cache
              , i = "" + (o ? o.apply(this, arguments) : e);
            return y.has(t, i) || (t[i] = n.apply(this, arguments)),
            t[i]
        };
        return s.cache = {},
        s
    }
    ,
    y.delay = function(e, t) {
        var i = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        }, t)
    }
    ,
    y.defer = y.partial(y.delay, y, 1),
    y.throttle = function(i, n, o) {
        var s, a, r, l = null, c = 0;
        o || (o = {});
        var u = function() {
            c = !1 === o.leading ? 0 : y.now(),
            l = null,
            r = i.apply(s, a),
            l || (s = a = null)
        };
        return function() {
            var e = y.now();
            c || !1 !== o.leading || (c = e);
            var t = n - (e - c);
            return s = this,
            a = arguments,
            t <= 0 || n < t ? (l && (clearTimeout(l),
            l = null),
            c = e,
            r = i.apply(s, a),
            l || (s = a = null)) : l || !1 === o.trailing || (l = setTimeout(u, t)),
            r
        }
    }
    ,
    y.debounce = function(t, i, n) {
        var o, s, a, r, l, c = function() {
            var e = y.now() - r;
            e < i && 0 <= e ? o = setTimeout(c, i - e) : (o = null,
            n || (l = t.apply(a, s),
            o || (a = s = null)))
        };
        return function() {
            a = this,
            s = arguments,
            r = y.now();
            var e = n && !o;
            return o || (o = setTimeout(c, i)),
            e && (l = t.apply(a, s),
            a = s = null),
            l
        }
    }
    ,
    y.wrap = function(e, t) {
        return y.partial(t, e)
    }
    ,
    y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    ,
    y.compose = function() {
        var i = arguments
          , n = i.length - 1;
        return function() {
            for (var e = n, t = i[n].apply(this, arguments); e--; )
                t = i[e].call(this, t);
            return t
        }
    }
    ,
    y.after = function(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    ,
    y.before = function(e, t) {
        var i;
        return function() {
            return 0 < --e && (i = t.apply(this, arguments)),
            e <= 1 && (t = null),
            i
        }
    }
    ,
    y.once = y.partial(y.before, 2);
    var E = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(e) {
        if (!y.isObject(e))
            return [];
        if (f)
            return f(e);
        var t = [];
        for (var i in e)
            y.has(e, i) && t.push(i);
        return E && n(e, t),
        t
    }
    ,
    y.allKeys = function(e) {
        if (!y.isObject(e))
            return [];
        var t = [];
        for (var i in e)
            t.push(i);
        return E && n(e, t),
        t
    }
    ,
    y.values = function(e) {
        for (var t = y.keys(e), i = t.length, n = Array(i), o = 0; o < i; o++)
            n[o] = e[t[o]];
        return n
    }
    ,
    y.mapObject = function(e, t, i) {
        t = k(t, i);
        for (var n, o = y.keys(e), s = o.length, a = {}, r = 0; r < s; r++)
            a[n = o[r]] = t(e[n], n, e);
        return a
    }
    ,
    y.pairs = function(e) {
        for (var t = y.keys(e), i = t.length, n = Array(i), o = 0; o < i; o++)
            n[o] = [t[o], e[t[o]]];
        return n
    }
    ,
    y.invert = function(e) {
        for (var t = {}, i = y.keys(e), n = 0, o = i.length; n < o; n++)
            t[e[i[n]]] = i[n];
        return t
    }
    ,
    y.functions = y.methods = function(e) {
        var t = [];
        for (var i in e)
            y.isFunction(e[i]) && t.push(i);
        return t.sort()
    }
    ,
    y.extend = w(y.allKeys),
    y.extendOwn = y.assign = w(y.keys),
    y.findKey = function(e, t, i) {
        t = k(t, i);
        for (var n, o = y.keys(e), s = 0, a = o.length; s < a; s++)
            if (t(e[n = o[s]], n, e))
                return n
    }
    ,
    y.pick = function(e, t, i) {
        var n, o, s = {}, a = e;
        if (null == a)
            return s;
        y.isFunction(t) ? (o = y.allKeys(a),
        n = b(t, i)) : (o = P(arguments, !1, !1, 1),
        n = function(e, t, i) {
            return t in i
        }
        ,
        a = Object(a));
        for (var r = 0, l = o.length; r < l; r++) {
            var c = o[r]
              , u = a[c];
            n(u, c, a) && (s[c] = u)
        }
        return s
    }
    ,
    y.omit = function(e, t, i) {
        if (y.isFunction(t))
            t = y.negate(t);
        else {
            var n = y.map(P(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(n, t)
            }
        }
        return y.pick(e, t, i)
    }
    ,
    y.defaults = w(y.allKeys, !0),
    y.create = function(e, t) {
        var i = _(e);
        return t && y.extendOwn(i, t),
        i
    }
    ,
    y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
    }
    ,
    y.tap = function(e, t) {
        return t(e),
        e
    }
    ,
    y.isMatch = function(e, t) {
        var i = y.keys(t)
          , n = i.length;
        if (null == e)
            return !n;
        for (var o = Object(e), s = 0; s < n; s++) {
            var a = i[s];
            if (t[a] !== o[a] || !(a in o))
                return !1
        }
        return !0
    }
    ;
    var j = function(e, t, i, n) {
        if (e === t)
            return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)
            return e === t;
        e instanceof y && (e = e._wrapped),
        t instanceof y && (t = t._wrapped);
        var o = d.call(e);
        if (o !== d.call(t))
            return !1;
        switch (o) {
        case "[object RegExp]":
        case "[object String]":
            return "" + e == "" + t;
        case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t
        }
        var s = "[object Array]" === o;
        if (!s) {
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            var a = e.constructor
              , r = t.constructor;
            if (a !== r && !(y.isFunction(a) && a instanceof a && y.isFunction(r) && r instanceof r) && "constructor"in e && "constructor"in t)
                return !1
        }
        n = n || [];
        for (var l = (i = i || []).length; l--; )
            if (i[l] === e)
                return n[l] === t;
        if (i.push(e),
        n.push(t),
        s) {
            if ((l = e.length) !== t.length)
                return !1;
            for (; l--; )
                if (!j(e[l], t[l], i, n))
                    return !1
        } else {
            var c, u = y.keys(e);
            if (l = u.length,
            y.keys(t).length !== l)
                return !1;
            for (; l--; )
                if (c = u[l],
                !y.has(t, c) || !j(e[c], t[c], i, n))
                    return !1
        }
        return i.pop(),
        n.pop(),
        !0
    };
    y.isEqual = function(e, t) {
        return j(e, t)
    }
    ,
    y.isEmpty = function(e) {
        return null == e || ($(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
    }
    ,
    y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }
    ,
    y.isArray = h || function(e) {
        return "[object Array]" === d.call(e)
    }
    ,
    y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    ,
    y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return d.call(e) === "[object " + t + "]"
        }
    }),
    y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1
    }
    ),
    y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }
    ,
    y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e
    }
    ,
    y.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === d.call(e)
    }
    ,
    y.isNull = function(e) {
        return null === e
    }
    ,
    y.isUndefined = function(e) {
        return void 0 === e
    }
    ,
    y.has = function(e, t) {
        return null != e && p.call(e, t)
    }
    ,
    y.noConflict = function() {
        return o._ = s,
        this
    }
    ,
    y.identity = function(e) {
        return e
    }
    ,
    y.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    y.noop = function() {}
    ,
    y.property = S,
    y.propertyOf = function(t) {
        return null == t ? function() {}
        : function(e) {
            return t[e]
        }
    }
    ,
    y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t),
        function(e) {
            return y.isMatch(e, t)
        }
    }
    ,
    y.times = function(e, t, i) {
        var n = Array(Math.max(0, e));
        t = b(t, i, 1);
        for (var o = 0; o < e; o++)
            n[o] = t(o);
        return n
    }
    ,
    y.random = function(e, t) {
        return null == t && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    }
    ,
    y.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var A = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , I = y.invert(A)
      , D = function(t) {
        var i = function(e) {
            return t[e]
        }
          , e = "(?:" + y.keys(t).join("|") + ")"
          , n = RegExp(e)
          , o = RegExp(e, "g");
        return function(e) {
            return e = null == e ? "" : "" + e,
            n.test(e) ? e.replace(o, i) : e
        }
    };
    y.escape = D(A),
    y.unescape = D(I),
    y.result = function(e, t, i) {
        var n = null == e ? void 0 : e[t];
        return void 0 === n && (n = i),
        y.isFunction(n) ? n.call(e) : n
    }
    ;
    var R = 0;
    y.uniqueId = function(e) {
        var t = ++R + "";
        return e ? e + t : t
    }
    ,
    y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/
      , F = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , B = /\\|'|\r|\n|\u2028|\u2029/g
      , q = function(e) {
        return "\\" + F[e]
    };
    y.template = function(s, e, t) {
        !e && t && (e = t),
        e = y.defaults({}, e, y.templateSettings);
        var i = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g")
          , a = 0
          , r = "__p+='";
        s.replace(i, function(e, t, i, n, o) {
            return r += s.slice(a, o).replace(B, q),
            a = o + e.length,
            t ? r += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : i ? r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : n && (r += "';\n" + n + "\n__p+='"),
            e
        }),
        r += "';\n",
        e.variable || (r = "with(obj||{}){\n" + r + "}\n"),
        r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            var n = new Function(e.variable || "obj","_",r)
        } catch (c) {
            throw c.source = r,
            c
        }
        var o = function(e) {
            return n.call(this, e, y)
        }
          , l = e.variable || "obj";
        return o.source = "function(" + l + "){\n" + r + "}",
        o
    }
    ,
    y.chain = function(e) {
        var t = y(e);
        return t._chain = !0,
        t
    }
    ;
    var N = function(e, t) {
        return e._chain ? y(t).chain() : t
    };
    y.mixin = function(i) {
        y.each(y.functions(i), function(e) {
            var t = y[e] = i[e];
            y.prototype[e] = function() {
                var e = [this._wrapped];
                return c.apply(e, arguments),
                N(this, t.apply(y, e))
            }
        })
    }
    ,
    y.mixin(y),
    y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = a[t];
        y.prototype[t] = function() {
            var e = this._wrapped;
            return i.apply(e, arguments),
            "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0],
            N(this, e)
        }
    }),
    y.each(["concat", "join", "slice"], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            return N(this, t.apply(this._wrapped, arguments))
        }
    }),
    y.prototype.value = function() {
        return this._wrapped
    }
    ,
    y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
    y.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}
.call(this),
_.mixin({
    get: function(e, t) {
        var i = typeof t;
        "string" != i && "number" != i || (t = ("" + t).replace(/\[(.*?)\]/, /\[(.*?)\]/, function(e, t) {
            return "." + t.replace(/["']/g, /["']/g, "")
        }).split("."));
        for (var n = 0, o = t.length; n < o; n++) {
            if (void 0 === e || !_.has(e, t[n]))
                return undefined;
            e = e[t[n]]
        }
        return e
    }
}),
_.mixin({
    set: function set(e, t, o) {
        var s = t.replace(/('|")/g, "").match(/(\w+)/g);
        return _.reduce(s, function(e, t, i) {
            var n = s[i + 1];
            if (!_.isUndefined(n))
                return _.isObject(e[t]) ? e[t] : _.isNaN(parseInt(n)) ? e[t] = {} : e[t] = [];
            e[t] = o
        }, e),
        e
    }
}),
_.mixin({
    zipObjectDeep: function zipObjectDeep(e, i) {
        var n = {};
        return _.each(e, function(e, t) {
            _.set(n, e, i[t])
        }),
        n
    }
}),
function(n) {
    var o = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(e, t, i) {
            o.Backbone = n(o, i, e, t)
        });
    else if ("undefined" != typeof exports) {
        var e, t = require("underscore");
        try {
            e = require("jquery")
        } catch (i) {}
        n(o, exports, t, e)
    } else
        o.Backbone = n(o, {}, o._, o.jQuery || o.Zepto || o.ender || o.$)
}(function(e, l, w, t) {
    var i = e.Backbone
      , s = Array.prototype.slice;
    l.VERSION = "1.3.3",
    l.$ = t,
    l.noConflict = function() {
        return e.Backbone = i,
        this
    }
    ,
    l.emulateHTTP = !1,
    l.emulateJSON = !1;
    var o = function(e, n, o) {
        switch (e) {
        case 1:
            return function() {
                return w[n](this[o])
            }
            ;
        case 2:
            return function(e) {
                return w[n](this[o], e)
            }
            ;
        case 3:
            return function(e, t) {
                return w[n](this[o], a(e, this), t)
            }
            ;
        case 4:
            return function(e, t, i) {
                return w[n](this[o], a(e, this), t, i)
            }
            ;
        default:
            return function() {
                var e = s.call(arguments);
                return e.unshift(this[o]),
                w[n].apply(w, e)
            }
        }
    }
      , n = function(i, e, n) {
        w.each(e, function(e, t) {
            w[t] && (i.prototype[t] = o(e, t, n))
        })
    }
      , a = function(t, e) {
        return w.isFunction(t) ? t : w.isObject(t) && !e._isModel(t) ? r(t) : w.isString(t) ? function(e) {
            return e.get(t)
        }
        : t
    }
      , r = function(e) {
        var t = w.matches(e);
        return function(e) {
            return t(e.attributes)
        }
    }
      , c = l.Events = {}
      , u = /\s+/
      , d = function(e, t, i, n, o) {
        var s, a = 0;
        if (i && "object" == typeof i) {
            void 0 !== n && "context"in o && void 0 === o.context && (o.context = n);
            for (s = w.keys(i); a < s.length; a++)
                t = d(e, t, s[a], i[s[a]], o)
        } else if (i && u.test(i))
            for (s = i.split(u); a < s.length; a++)
                t = e(t, s[a], n, o);
        else
            t = e(t, i, n, o);
        return t
    };
    c.on = function(e, t, i) {
        return p(this, e, t, i)
    }
    ;
    var p = function(e, t, i, n, o) {
        (e._events = d(h, e._events || {}, t, i, {
            context: n,
            ctx: e,
            listening: o
        }),
        o) && ((e._listeners || (e._listeners = {}))[o.id] = o);
        return e
    };
    c.listenTo = function(e, t, i) {
        if (!e)
            return this;
        var n = e._listenId || (e._listenId = w.uniqueId("l"))
          , o = this._listeningTo || (this._listeningTo = {})
          , s = o[n];
        if (!s) {
            var a = this._listenId || (this._listenId = w.uniqueId("l"));
            s = o[n] = {
                obj: e,
                objId: n,
                id: a,
                listeningTo: o,
                count: 0
            }
        }
        return p(e, t, i, this, s),
        this
    }
    ;
    var h = function(e, t, i, n) {
        if (i) {
            var o = e[t] || (e[t] = [])
              , s = n.context
              , a = n.ctx
              , r = n.listening;
            r && r.count++,
            o.push({
                callback: i,
                context: s,
                ctx: s || a,
                listening: r
            })
        }
        return e
    };
    c.off = function(e, t, i) {
        return this._events && (this._events = d(f, this._events, e, t, {
            context: i,
            listeners: this._listeners
        })),
        this
    }
    ,
    c.stopListening = function(e, t, i) {
        var n = this._listeningTo;
        if (!n)
            return this;
        for (var o = e ? [e._listenId] : w.keys(n), s = 0; s < o.length; s++) {
            var a = n[o[s]];
            if (!a)
                break;
            a.obj.off(t, i, this)
        }
        return this
    }
    ;
    var f = function(e, t, i, n) {
        if (e) {
            var o, s = 0, a = n.context, r = n.listeners;
            if (t || i || a) {
                for (var l = t ? [t] : w.keys(e); s < l.length; s++) {
                    var c = e[t = l[s]];
                    if (!c)
                        break;
                    for (var u = [], d = 0; d < c.length; d++) {
                        var p = c[d];
                        i && i !== p.callback && i !== p.callback._callback || a && a !== p.context ? u.push(p) : (o = p.listening) && 0 == --o.count && (delete r[o.id],
                        delete o.listeningTo[o.objId])
                    }
                    u.length ? e[t] = u : delete e[t]
                }
                return e
            }
            for (var h = w.keys(r); s < h.length; s++)
                delete r[(o = r[h[s]]).id],
                delete o.listeningTo[o.objId]
        }
    };
    c.once = function(e, t, i) {
        var n = d(v, {}, e, t, w.bind(this.off, this));
        return "string" == typeof e && null == i && (t = void 0),
        this.on(n, t, i)
    }
    ,
    c.listenToOnce = function(e, t, i) {
        var n = d(v, {}, t, i, w.bind(this.stopListening, this, e));
        return this.listenTo(e, n)
    }
    ;
    var v = function(e, t, i, n) {
        if (i) {
            var o = e[t] = w.once(function() {
                n(t, o),
                i.apply(this, arguments)
            });
            o._callback = i
        }
        return e
    };
    c.trigger = function(e) {
        if (!this._events)
            return this;
        for (var t = Math.max(0, arguments.length - 1), i = Array(t), n = 0; n < t; n++)
            i[n] = arguments[n + 1];
        return d(m, this._events, e, void 0, i),
        this
    }
    ;
    var m = function(e, t, i, n) {
        if (e) {
            var o = e[t]
              , s = e.all;
            o && s && (s = s.slice()),
            o && g(o, n),
            s && g(s, [t].concat(n))
        }
        return e
    }
      , g = function(e, t) {
        var i, n = -1, o = e.length, s = t[0], a = t[1], r = t[2];
        switch (t.length) {
        case 0:
            for (; ++n < o; )
                (i = e[n]).callback.call(i.ctx);
            return;
        case 1:
            for (; ++n < o; )
                (i = e[n]).callback.call(i.ctx, s);
            return;
        case 2:
            for (; ++n < o; )
                (i = e[n]).callback.call(i.ctx, s, a);
            return;
        case 3:
            for (; ++n < o; )
                (i = e[n]).callback.call(i.ctx, s, a, r);
            return;
        default:
            for (; ++n < o; )
                (i = e[n]).callback.apply(i.ctx, t);
            return
        }
    };
    c.bind = c.on,
    c.unbind = c.off,
    w.extend(l, c);
    var y = l.Model = function(e, t) {
        var i = e || {};
        t || (t = {}),
        this.cid = w.uniqueId(this.cidPrefix),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (i = this.parse(i, t) || {});
        var n = w.result(this, "defaults");
        i = w.defaults(w.extend({}, n, i), n),
        this.set(i, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    w.extend(y.prototype, c, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function() {
            return w.clone(this.attributes)
        },
        sync: function() {
            return l.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return w.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        matches: function(e) {
            return !!w.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, i) {
            if (null == e)
                return this;
            var n;
            if ("object" == typeof e ? (n = e,
            i = t) : (n = {})[e] = t,
            i || (i = {}),
            !this._validate(n, i))
                return !1;
            var o = i.unset
              , s = i.silent
              , a = []
              , r = this._changing;
            this._changing = !0,
            r || (this._previousAttributes = w.clone(this.attributes),
            this.changed = {});
            var l = this.attributes
              , c = this.changed
              , u = this._previousAttributes;
            for (var d in n)
                t = n[d],
                w.isEqual(l[d], t) || a.push(d),
                w.isEqual(u[d], t) ? delete c[d] : c[d] = t,
                o ? delete l[d] : l[d] = t;
            if (this.idAttribute in n && (this.id = this.get(this.idAttribute)),
            !s) {
                a.length && (this._pending = i);
                for (var p = 0; p < a.length; p++)
                    this.trigger("change:" + a[p], this, l[a[p]], i)
            }
            if (r)
                return this;
            if (!s)
                for (; this._pending; )
                    i = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, i);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, w.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes)
                t[i] = void 0;
            return this.set(t, w.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !w.isEmpty(this.changed) : w.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return !!this.hasChanged() && w.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes
              , i = {};
            for (var n in e) {
                var o = e[n];
                w.isEqual(t[n], o) || (i[n] = o)
            }
            return !!w.size(i) && i
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return w.clone(this._previousAttributes)
        },
        fetch: function(i) {
            i = w.extend({
                parse: !0
            }, i);
            var n = this
              , o = i.success;
            return i.success = function(e) {
                var t = i.parse ? n.parse(e, i) : e;
                if (!n.set(t, i))
                    return !1;
                o && o.call(i.context, n, e, i),
                n.trigger("sync", n, e, i)
            }
            ,
            B(this, i),
            this.sync("read", this, i)
        },
        save: function(e, t, i) {
            var n;
            null == e || "object" == typeof e ? (n = e,
            i = t) : (n = {})[e] = t;
            var o = (i = w.extend({
                validate: !0,
                parse: !0
            }, i)).wait;
            if (n && !o) {
                if (!this.set(n, i))
                    return !1
            } else if (!this._validate(n, i))
                return !1;
            var s = this
              , a = i.success
              , r = this.attributes;
            i.success = function(e) {
                s.attributes = r;
                var t = i.parse ? s.parse(e, i) : e;
                if (o && (t = w.extend({}, n, t)),
                t && !s.set(t, i))
                    return !1;
                a && a.call(i.context, s, e, i),
                s.trigger("sync", s, e, i)
            }
            ,
            B(this, i),
            n && o && (this.attributes = w.extend({}, r, n));
            var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== l || i.attrs || (i.attrs = n);
            var c = this.sync(l, this, i);
            return this.attributes = r,
            c
        },
        destroy: function(t) {
            t = t ? w.clone(t) : {};
            var i = this
              , n = t.success
              , o = t.wait
              , s = function() {
                i.stopListening(),
                i.trigger("destroy", i, i.collection, t)
            }
              , e = !(t.success = function(e) {
                o && s(),
                n && n.call(t.context, i, e, t),
                i.isNew() || i.trigger("sync", i, e, t)
            }
            );
            return this.isNew() ? w.defer(t.success) : (B(this, t),
            e = this.sync("delete", this, t)),
            o || s(),
            e
        },
        url: function() {
            var e = w.result(this, "urlRoot") || w.result(this.collection, "url") || F();
            if (this.isNew())
                return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, w.extend({}, e, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = w.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return !i || (this.trigger("invalid", this, i, w.extend(t, {
                validationError: i
            })),
            !1)
        }
    }),
    n(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var b = l.Collection = function(e, t) {
        t || (t = {}),
        t.model && (this.model = t.model),
        void 0 !== t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, w.extend({
            silent: !0
        }, t))
    }
      , _ = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , k = {
        add: !0,
        remove: !1
    }
      , S = function(e, t, i) {
        i = Math.min(Math.max(i, 0), e.length);
        var n, o = Array(e.length - i), s = t.length;
        for (n = 0; n < o.length; n++)
            o[n] = e[n + i];
        for (n = 0; n < s; n++)
            e[n + i] = t[n];
        for (n = 0; n < o.length; n++)
            e[n + s + i] = o[n]
    };
    w.extend(b.prototype, c, {
        model: y,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return l.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, w.extend({
                merge: !1
            }, t, k))
        },
        remove: function(e, t) {
            t = w.extend({}, t);
            var i = !w.isArray(e);
            e = i ? [e] : e.slice();
            var n = this._removeModels(e, t);
            return !t.silent && n.length && (t.changes = {
                added: [],
                merged: [],
                removed: n
            },
            this.trigger("update", this, t)),
            i ? n[0] : n
        },
        set: function(e, t) {
            if (null != e) {
                (t = w.extend({}, _, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                var i = !w.isArray(e);
                e = i ? [e] : e.slice();
                var n = t.at;
                null != n && (n = +n),
                n > this.length && (n = this.length),
                n < 0 && (n += this.length + 1);
                var o, s, a = [], r = [], l = [], c = [], u = {}, d = t.add, p = t.merge, h = t.remove, f = !1, v = this.comparator && null == n && !1 !== t.sort, m = w.isString(this.comparator) ? this.comparator : null;
                for (s = 0; s < e.length; s++) {
                    o = e[s];
                    var g = this.get(o);
                    if (g) {
                        if (p && o !== g) {
                            var y = this._isModel(o) ? o.attributes : o;
                            t.parse && (y = g.parse(y, t)),
                            g.set(y, t),
                            l.push(g),
                            v && !f && (f = g.hasChanged(m))
                        }
                        u[g.cid] || (u[g.cid] = !0,
                        a.push(g)),
                        e[s] = g
                    } else
                        d && (o = e[s] = this._prepareModel(o, t)) && (r.push(o),
                        this._addReference(o, t),
                        u[o.cid] = !0,
                        a.push(o))
                }
                if (h) {
                    for (s = 0; s < this.length; s++)
                        u[(o = this.models[s]).cid] || c.push(o);
                    c.length && this._removeModels(c, t)
                }
                var b = !1
                  , k = !v && d && h;
                if (a.length && k ? (b = this.length !== a.length || w.some(this.models, function(e, t) {
                    return e !== a[t]
                }),
                this.models.length = 0,
                S(this.models, a, 0),
                this.length = this.models.length) : r.length && (v && (f = !0),
                S(this.models, r, null == n ? this.length : n),
                this.length = this.models.length),
                f && this.sort({
                    silent: !0
                }),
                !t.silent) {
                    for (s = 0; s < r.length; s++)
                        null != n && (t.index = n + s),
                        (o = r[s]).trigger("add", o, this, t);
                    (f || b) && this.trigger("sort", this, t),
                    (r.length || c.length || l.length) && (t.changes = {
                        added: r,
                        removed: c,
                        merged: l
                    },
                    this.trigger("update", this, t))
                }
                return i ? e[0] : e
            }
        },
        reset: function(e, t) {
            t = t ? w.clone(t) : {};
            for (var i = 0; i < this.models.length; i++)
                this._removeReference(this.models[i], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, w.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, w.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e)
        },
        unshift: function(e, t) {
            return this.add(e, w.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e)
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(e) {
            if (null != e)
                return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
        },
        has: function(e) {
            return null != this.get(e)
        },
        at: function(e) {
            return e < 0 && (e += this.length),
            this.models[e]
        },
        where: function(e, t) {
            return this[t ? "find" : "filter"](e)
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            var t = this.comparator;
            if (!t)
                throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            var i = t.length;
            return w.isFunction(t) && (t = w.bind(t, this)),
            1 === i || w.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return this.map(e + "")
        },
        fetch: function(i) {
            var n = (i = w.extend({
                parse: !0
            }, i)).success
              , o = this;
            return i.success = function(e) {
                var t = i.reset ? "reset" : "set";
                o[t](e, i),
                n && n.call(i.context, o, e, i),
                o.trigger("sync", o, e, i)
            }
            ,
            B(this, i),
            this.sync("read", this, i)
        },
        create: function(e, t) {
            var n = (t = t ? w.clone(t) : {}).wait;
            if (!(e = this._prepareModel(e, t)))
                return !1;
            n || this.add(e, t);
            var o = this
              , s = t.success;
            return t.success = function(e, t, i) {
                n && o.add(e, i),
                s && s.call(i.context, e, t, i)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e))
                return e.collection || (e.collection = this),
                e;
            var i = new (((t = t ? w.clone(t) : {}).collection = this).model)(e,t);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, t),
            !1) : i
        },
        _removeModels: function(e, t) {
            for (var i = [], n = 0; n < e.length; n++) {
                var o = this.get(e[n]);
                if (o) {
                    var s = this.indexOf(o);
                    this.models.splice(s, 1),
                    this.length--,
                    delete this._byId[o.cid];
                    var a = this.modelId(o.attributes);
                    null != a && delete this._byId[a],
                    t.silent || (t.index = s,
                    o.trigger("remove", o, this, t)),
                    i.push(o),
                    this._removeReference(o, t)
                }
            }
            return i
        },
        _isModel: function(e) {
            return e instanceof y
        },
        _addReference: function(e) {
            this._byId[e.cid] = e;
            var t = this.modelId(e.attributes);
            null != t && (this._byId[t] = e),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e) {
            delete this._byId[e.cid];
            var t = this.modelId(e.attributes);
            null != t && delete this._byId[t],
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, i, n) {
            if (t) {
                if (("add" === e || "remove" === e) && i !== this)
                    return;
                if ("destroy" === e && this.remove(t, n),
                "change" === e) {
                    var o = this.modelId(t.previousAttributes())
                      , s = this.modelId(t.attributes);
                    o !== s && (null != o && delete this._byId[o],
                    null != s && (this._byId[s] = t))
                }
            }
            this.trigger.apply(this, arguments)
        }
    }),
    n(b, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var x = l.View = function(e) {
        this.cid = w.uniqueId("view"),
        w.extend(this, w.pick(e, $)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }
      , C = /^(\S+)\s*(.*)$/
      , $ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    w.extend(x.prototype, c, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(),
            this.stopListening(),
            this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(e) {
            return this.undelegateEvents(),
            this._setElement(e),
            this.delegateEvents(),
            this
        },
        _setElement: function(e) {
            this.$el = e instanceof l.$ ? e : l.$(e),
            this.el = this.$el[0]
        },
        delegateEvents: function(e) {
            if (e || (e = w.result(this, "events")),
            !e)
                return this;
            for (var t in this.undelegateEvents(),
            e) {
                var i = e[t];
                if (w.isFunction(i) || (i = this[i]),
                i) {
                    var n = t.match(C);
                    this.delegate(n[1], n[2], w.bind(i, this))
                }
            }
            return this
        },
        delegate: function(e, t, i) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, i),
            this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
            this
        },
        undelegate: function(e, t, i) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, i),
            this
        },
        _createElement: function(e) {
            return document.createElement(e)
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(w.result(this, "el"));
            else {
                var e = w.extend({}, w.result(this, "attributes"));
                this.id && (e.id = w.result(this, "id")),
                this.className && (e["class"] = w.result(this, "className")),
                this.setElement(this._createElement(w.result(this, "tagName"))),
                this._setAttributes(e)
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e)
        }
    }),
    l.sync = function(e, t, n) {
        var i = T[e];
        w.defaults(n || (n = {}), {
            emulateHTTP: l.emulateHTTP,
            emulateJSON: l.emulateJSON
        });
        var o = {
            type: i,
            dataType: "json"
        };
        if (n.url || (o.url = w.result(t, "url") || F()),
        null != n.data || !t || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json",
        o.data = JSON.stringify(n.attrs || t.toJSON(n))),
        n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
        o.data = o.data ? {
            model: o.data
        } : {}),
        n.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
            o.type = "POST",
            n.emulateJSON && (o.data._method = i);
            var s = n.beforeSend;
            n.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", i),
                s)
                    return s.apply(this, arguments)
            }
        }
        "GET" === o.type || n.emulateJSON || (o.processData = !1);
        var a = n.error;
        n.error = function(e, t, i) {
            n.textStatus = t,
            n.errorThrown = i,
            a && a.call(n.context, e, t, i)
        }
        ;
        var r = n.xhr = l.ajax(w.extend(o, n));
        return t.trigger("request", t, r, n),
        r
    }
    ;
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    l.ajax = function() {
        return l.$.ajax.apply(l.$, arguments)
    }
    ;
    var P = l.Router = function(e) {
        e || (e = {}),
        e.routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , M = /\((.*?)\)/g
      , E = /(\(\?)?:\w+/g
      , O = /\*\w+/g
      , j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    w.extend(P.prototype, c, {
        initialize: function() {},
        route: function(i, n, o) {
            w.isRegExp(i) || (i = this._routeToRegExp(i)),
            w.isFunction(n) && (o = n,
            n = ""),
            o || (o = this[n]);
            var s = this;
            return l.history.route(i, function(e) {
                var t = s._extractParameters(i, e);
                !1 !== s.execute(o, t, n) && (s.trigger.apply(s, ["route:" + n].concat(t)),
                s.trigger("route", n, t),
                l.history.trigger("route", s, n, t))
            }),
            this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, t) {
            return l.history.navigate(e, t),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = w.result(this, "routes");
                for (var e, t = w.keys(this.routes); null != (e = t.pop()); )
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(j, "\\$&").replace(M, "(?:$1)?").replace(E, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(O, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return w.map(i, function(e, t) {
                return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var A = l.History = function() {
        this.handlers = [],
        this.checkUrl = w.bind(this.checkUrl, this),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , I = /^[#\/]|\s+$/g
      , D = /^\/+|\/+$/g
      , R = /#.*$/;
    A.started = !1,
    w.extend(A.prototype, c, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : ""
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
            e.replace(I, "")
        },
        start: function(e) {
            if (A.started)
                throw new Error("Backbone.history has already been started");
            if (A.started = !0,
            this.options = w.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._hasHashChange = "onhashchange"in window && (void 0 === document.documentMode || 7 < document.documentMode),
            this._useHashChange = this._wantsHashChange && this._hasHashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !(!this.history || !this.history.pushState),
            this._usePushState = this._wantsPushState && this._hasPushState,
            this.fragment = this.getFragment(),
            this.root = ("/" + this.root + "/").replace(D, "/"),
            this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()),
                    !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"),
                this.iframe.src = "javascript:0",
                this.iframe.style.display = "none",
                this.iframe.tabIndex = -1;
                var i = document.body
                  , n = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                n.document.open(),
                n.document.close(),
                n.location.hash = "#" + this.fragment
            }
            var o = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t)
            }
            ;
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            !this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t)
            }
            ;
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
            this.iframe && (document.body.removeChild(this.iframe),
            this.iframe = null),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            A.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function() {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)),
            e === this.fragment)
                return !1;
            this.iframe && this.navigate(e),
            this.loadUrl()
        },
        loadUrl: function(t) {
            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t),
            w.some(this.handlers, function(e) {
                if (e.route.test(t))
                    return e.callback(t),
                    !0
            }))
        },
        navigate: function(e, t) {
            if (!A.started)
                return !1;
            t && !0 !== t || (t = {
                trigger: !!t
            }),
            e = this.getFragment(e || "");
            var i = this.root;
            "" !== e && "?" !== e.charAt(0) || (i = i.slice(0, -1) || "/");
            var n = i + e;
            if (e = this.decodeFragment(e.replace(R, "")),
            this.fragment !== e) {
                if (this.fragment = e,
                this._usePushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(n);
                    if (this._updateHash(this.location, e, t.replace),
                    this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var o = this.iframe.contentWindow;
                        t.replace || (o.document.open(),
                        o.document.close()),
                        this._updateHash(o.location, e, t.replace)
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, i) {
            if (i) {
                var n = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(n + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    l.history = new A;
    var L = function(e, t) {
        var i, n = this;
        return i = e && w.has(e, "constructor") ? e.constructor : function() {
            return n.apply(this, arguments)
        }
        ,
        w.extend(i, n, t),
        i.prototype = w.create(n.prototype, e),
        (i.prototype.constructor = i).__super__ = n.prototype,
        i
    };
    y.extend = b.extend = P.extend = x.extend = A.extend = L;
    var F = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , B = function(t, i) {
        var n = i.error;
        i.error = function(e) {
            n && n.call(i.context, t, e, i),
            t.trigger("error", t, e, i)
        }
    };
    return l
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["exports", "backbone", "underscore"], t) : "undefined" != typeof exports ? t(exports, require("backbone"), require("underscore")) : t(e, e.Backbone, e._)
}(this, function(e, h, f) {
    h.Relational = {
        showWarnings: !0
    },
    h.Semaphore = {
        _permitsAvailable: null,
        _permitsUsed: 0,
        acquire: function() {
            if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable)
                throw new Error("Max permits acquired");
            this._permitsUsed++
        },
        release: function() {
            if (0 === this._permitsUsed)
                throw new Error("All permits released");
            this._permitsUsed--
        },
        isLocked: function() {
            return 0 < this._permitsUsed
        },
        setAvailablePermits: function(e) {
            if (this._permitsUsed > e)
                throw new Error("Available permits cannot be less than used permits");
            this._permitsAvailable = e
        }
    },
    h.BlockingQueue = function() {
        this._queue = []
    }
    ,
    f.extend(h.BlockingQueue.prototype, h.Semaphore, {
        _queue: null,
        add: function(e) {
            this.isBlocked() ? this._queue.push(e) : e()
        },
        process: function() {
            var e = this._queue;
            for (this._queue = []; e && e.length; )
                e.shift()()
        },
        block: function() {
            this.acquire()
        },
        unblock: function() {
            this.release(),
            this.isBlocked() || this.process()
        },
        isBlocked: function() {
            return this.isLocked()
        }
    }),
    h.Relational.eventQueue = new h.BlockingQueue,
    h.Store = function() {
        this._collections = [],
        this._reverseRelations = [],
        this._orphanRelations = [],
        this._subModels = [],
        this._modelScopes = [e]
    }
    ,
    f.extend(h.Store.prototype, h.Events, {
        initializeRelation: function(e, t, i) {
            var n = f.isString(t.type) ? h[t.type] || this.getObjectByName(t.type) : t.type;
            if (n && n.prototype instanceof h.Relation)
                new n(e,t,i);
            else
                h.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; missing or invalid relation type!", t)
        },
        addModelScope: function(e) {
            this._modelScopes.push(e)
        },
        removeModelScope: function(e) {
            this._modelScopes = f.without(this._modelScopes, e)
        },
        addSubModels: function(e, t) {
            this._subModels.push({
                superModelType: t,
                subModels: e
            })
        },
        setupSuperModel: function(o) {
            f.find(this._subModels, function(n) {
                return f.filter(n.subModels || [], function(e, t) {
                    var i = this.getObjectByName(e);
                    if (o === i)
                        return (n.superModelType._subModels[t] = o)._superModel = n.superModelType,
                        o._subModelTypeValue = t,
                        o._subModelTypeAttribute = n.superModelType.prototype.subModelTypeAttribute,
                        !0
                }, this).length
            }, this)
        },
        addReverseRelation: function(e) {
            !f.any(this._reverseRelations, function(i) {
                return f.all(e || [], function(e, t) {
                    return e === i[t]
                })
            }) && e.model && e.type && (this._reverseRelations.push(e),
            this._addRelation(e.model, e),
            this.retroFitRelation(e))
        },
        addOrphanRelation: function(e) {
            !f.any(this._orphanRelations, function(i) {
                return f.all(e || [], function(e, t) {
                    return e === i[t]
                })
            }) && e.model && e.type && this._orphanRelations.push(e)
        },
        processOrphanRelations: function() {
            f.each(this._orphanRelations.slice(0), function(e) {
                h.Relational.store.getObjectByName(e.relatedModel) && (this.initializeRelation(null, e),
                this._orphanRelations = f.without(this._orphanRelations, e))
            }, this)
        },
        _addRelation: function(e, t) {
            e.prototype.relations || (e.prototype.relations = []),
            e.prototype.relations.push(t),
            f.each(e._subModels || [], function(e) {
                this._addRelation(e, t)
            }, this)
        },
        retroFitRelation: function(t) {
            var e = this.getCollection(t.model, !1);
            e && e.each(function(e) {
                if (e instanceof t.model)
                    new t.type(e,t)
            }, this)
        },
        getCollection: function(e, t) {
            e instanceof h.RelationalModel && (e = e.constructor);
            for (var i = e; i._superModel; )
                i = i._superModel;
            var n = f.find(this._collections, function(e) {
                return e.model === i
            });
            return n || !1 === t || (n = this._createCollection(i)),
            n
        },
        getObjectByName: function(e) {
            var t = e.split(".")
              , i = null;
            return f.find(this._modelScopes, function(e) {
                if ((i = f.reduce(t || [], function(e, t) {
                    return e ? e[t] : undefined
                }, e)) && i !== e)
                    return !0
            }, this),
            i
        },
        _createCollection: function(e) {
            var t;
            return e instanceof h.RelationalModel && (e = e.constructor),
            e.prototype instanceof h.RelationalModel && ((t = new h.Collection).model = e,
            this._collections.push(t)),
            t
        },
        resolveIdForItem: function(e, t) {
            var i = f.isString(t) || f.isNumber(t) ? t : null;
            return null === i && (t instanceof h.RelationalModel ? i = t.id : f.isObject(t) && (i = t[e.prototype.idAttribute])),
            i || 0 === i || (i = null),
            i
        },
        find: function(e, t) {
            var i = this.resolveIdForItem(e, t)
              , n = this.getCollection(e);
            if (n) {
                var o = n.get(i);
                if (o instanceof e)
                    return o
            }
            return null
        },
        register: function(e) {
            var t = this.getCollection(e);
            if (t) {
                var i = e.collection;
                t.add(e),
                e.collection = i
            }
        },
        checkId: function(e, t) {
            var i = this.getCollection(e)
              , n = i && i.get(t);
            if (n && e !== n)
                throw h.Relational.showWarnings && "undefined" != typeof console && console.warn("Duplicate id! Old RelationalModel=%o, new RelationalModel=%o", n, e),
                new Error("Cannot instantiate more than one Backbone.RelationalModel with the same id per type!")
        },
        update: function(e) {
            var t = this.getCollection(e);
            t.contains(e) || this.register(e),
            t._onModelEvent("change:" + e.idAttribute, e, t),
            e.trigger("relational:change:id", e, t)
        },
        unregister: function(e) {
            var t, i;
            e instanceof h.Model ? (t = this.getCollection(e),
            i = [e]) : e instanceof h.Collection ? (t = this.getCollection(e.model),
            i = f.clone(e.models)) : (t = this.getCollection(e),
            i = f.clone(t.models)),
            f.each(i, function(e) {
                this.stopListening(e),
                f.invoke(e.getRelations(), "stopListening")
            }, this),
            f.contains(this._collections, e) ? t.reset([]) : f.each(i, function(e) {
                t.get(e) ? t.remove(e) : t.trigger("relational:remove", e, t)
            }, this)
        },
        reset: function() {
            this.stopListening(),
            f.each(this._collections, function(e) {
                this.unregister(e)
            }, this),
            this._collections = [],
            this._subModels = [],
            this._modelScopes = [e]
        }
    }),
    h.Relational.store = new h.Store,
    h.Relation = function(e, t, i) {
        if (this.instance = e,
        t = f.isObject(t) ? t : {},
        this.reverseRelation = f.defaults(t.reverseRelation || {}, this.options.reverseRelation),
        this.options = f.defaults(t, this.options, h.Relation.prototype.options),
        this.reverseRelation.type = f.isString(this.reverseRelation.type) ? h[this.reverseRelation.type] || h.Relational.store.getObjectByName(this.reverseRelation.type) : this.reverseRelation.type,
        this.key = this.options.key,
        this.keySource = this.options.keySource || this.key,
        this.keyDestination = this.options.keyDestination || this.keySource || this.key,
        this.model = this.options.model || this.instance.constructor,
        this.relatedModel = this.options.relatedModel,
        f.isUndefined(this.relatedModel) && (this.relatedModel = this.model),
        !f.isFunction(this.relatedModel) || this.relatedModel.prototype instanceof h.RelationalModel || (this.relatedModel = f.result(this, "relatedModel")),
        f.isString(this.relatedModel) && (this.relatedModel = h.Relational.store.getObjectByName(this.relatedModel)),
        this.checkPreconditions() && (!this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key && h.Relational.store.addReverseRelation(f.defaults({
            isAutoRelation: !0,
            model: this.relatedModel,
            relatedModel: this.model,
            reverseRelation: this.options
        }, this.reverseRelation)),
        e)) {
            var n = this.keySource;
            n !== this.key && f.isObject(this.instance.get(this.key)) && (n = this.key),
            this.setKeyContents(this.instance.get(n)),
            this.relatedCollection = h.Relational.store.getCollection(this.relatedModel),
            this.keySource !== this.key && delete this.instance.attributes[this.keySource],
            (this.instance._relations[this.key] = this).initialize(i),
            this.options.autoFetch && this.instance.getAsync(this.key, f.isObject(this.options.autoFetch) ? this.options.autoFetch : {}),
            this.listenTo(this.instance, "destroy", this.destroy).listenTo(this.relatedCollection, "relational:add relational:change:id", this.tryAddRelated).listenTo(this.relatedCollection, "relational:remove", this.removeRelated)
        }
    }
    ,
    h.Relation.extend = h.Model.extend,
    f.extend(h.Relation.prototype, h.Events, h.Semaphore, {
        options: {
            createModels: !0,
            includeInJSON: !0,
            isAutoRelation: !1,
            autoFetch: !1,
            parse: !1
        },
        instance: null,
        key: null,
        keyContents: null,
        relatedModel: null,
        relatedCollection: null,
        reverseRelation: null,
        related: null,
        checkPreconditions: function() {
            var e = this.instance
              , t = this.key
              , i = this.model
              , n = this.relatedModel
              , o = h.Relational.showWarnings && "undefined" != typeof console;
            if (!i || !t || !n)
                return o && console.warn("Relation=%o: missing model, key or relatedModel (%o, %o, %o).", this, i, t, n),
                !1;
            if (!(i.prototype instanceof h.RelationalModel))
                return o && console.warn("Relation=%o: model does not inherit from Backbone.RelationalModel (%o).", this, e),
                !1;
            if (!(n.prototype instanceof h.RelationalModel))
                return o && console.warn("Relation=%o: relatedModel does not inherit from Backbone.RelationalModel (%o).", this, n),
                !1;
            if (this instanceof h.HasMany && this.reverseRelation.type === h.HasMany)
                return o && console.warn("Relation=%o: relation is a HasMany, and the reverseRelation is HasMany as well.", this),
                !1;
            if (e && f.keys(e._relations).length) {
                var s = f.find(e._relations, function(e) {
                    return e.key === t
                }, this);
                if (s)
                    return o && console.warn("Cannot create relation=%o on %o for model=%o: already taken by relation=%o.", this, t, e, s),
                    !1
            }
            return !0
        },
        setRelated: function(e) {
            this.related = e,
            this.instance.attributes[this.key] = e
        },
        _isReverseRelation: function(e) {
            return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key
        },
        getReverseRelations: function(e) {
            for (var t = [], i = f.isUndefined(e) ? this.related && (this.related.models || [this.related]) : [e], n = null, o = null, s = 0; s < (i || []).length; s++) {
                n = i[s].getRelations() || [];
                for (var a = 0; a < n.length; a++)
                    o = n[a],
                    this._isReverseRelation(o) && t.push(o)
            }
            return t
        },
        destroy: function() {
            this.stopListening(),
            this instanceof h.HasOne ? this.setRelated(null) : this instanceof h.HasMany && this.setRelated(this._prepareCollection()),
            f.each(this.getReverseRelations(), function(e) {
                e.removeRelated(this.instance)
            }, this)
        }
    }),
    h.HasOne = h.Relation.extend({
        options: {
            reverseRelation: {
                type: "HasMany"
            }
        },
        initialize: function(t) {
            this.listenTo(this.instance, "relational:change:" + this.key, this.onChange);
            var e = this.findRelated(t);
            this.setRelated(e),
            f.each(this.getReverseRelations(), function(e) {
                e.addRelated(this.instance, t)
            }, this)
        },
        findRelated: function(e) {
            var t = null;
            if (e = f.defaults({
                parse: this.options.parse
            }, e),
            this.keyContents instanceof this.relatedModel)
                t = this.keyContents;
            else if (this.keyContents || 0 === this.keyContents) {
                var i = f.defaults({
                    create: this.options.createModels
                }, e);
                t = this.relatedModel.findOrCreate(this.keyContents, i)
            }
            return t && (this.keyId = null),
            t
        },
        setKeyContents: function(e) {
            this.keyContents = e,
            this.keyId = h.Relational.store.resolveIdForItem(this.relatedModel, this.keyContents)
        },
        onChange: function(e, t, i) {
            if (!this.isLocked()) {
                this.acquire(),
                i = i ? f.clone(i) : {};
                var n = f.isUndefined(i.__related)
                  , o = n ? this.related : i.__related;
                if (n) {
                    this.setKeyContents(t);
                    var s = this.findRelated(i);
                    this.setRelated(s)
                }
                if (o && this.related !== o && f.each(this.getReverseRelations(o), function(e) {
                    e.removeRelated(this.instance, null, i)
                }, this),
                f.each(this.getReverseRelations(), function(e) {
                    e.addRelated(this.instance, i)
                }, this),
                !i.silent && this.related !== o) {
                    var a = this;
                    this.changed = !0,
                    h.Relational.eventQueue.add(function() {
                        a.instance.trigger("change:" + a.key, a.instance, a.related, i, !0),
                        a.changed = !1
                    })
                }
                this.release()
            }
        },
        tryAddRelated: function(e, t, i) {
            !this.keyId && 0 !== this.keyId || e.id !== this.keyId || (this.addRelated(e, i),
            this.keyId = null)
        },
        addRelated: function(t, i) {
            var n = this;
            t.queue(function() {
                if (t !== n.related) {
                    var e = n.related || null;
                    n.setRelated(t),
                    n.onChange(n.instance, t, f.defaults({
                        __related: e
                    }, i))
                }
            })
        },
        removeRelated: function(e, t, i) {
            if (this.related && e === this.related) {
                var n = this.related || null;
                this.setRelated(null),
                this.onChange(this.instance, e, f.defaults({
                    __related: n
                }, i))
            }
        }
    }),
    h.HasMany = h.Relation.extend({
        collectionType: null,
        options: {
            reverseRelation: {
                type: "HasOne"
            },
            collectionType: h.Collection,
            collectionKey: !0,
            collectionOptions: {}
        },
        initialize: function(e) {
            if (this.listenTo(this.instance, "relational:change:" + this.key, this.onChange),
            this.collectionType = this.options.collectionType,
            !f.isFunction(this.collectionType) || this.collectionType === h.Collection || this.collectionType.prototype instanceof h.Collection || (this.collectionType = f.result(this, "collectionType")),
            f.isString(this.collectionType) && (this.collectionType = h.Relational.store.getObjectByName(this.collectionType)),
            this.collectionType !== h.Collection && !(this.collectionType.prototype instanceof h.Collection))
                throw new Error("`collectionType` must inherit from Backbone.Collection");
            var t = this.findRelated(e);
            this.setRelated(t)
        },
        _prepareCollection: function(e) {
            if (this.related && this.stopListening(this.related),
            !(e && e instanceof h.Collection)) {
                var t = f.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance) : this.options.collectionOptions;
                e = new this.collectionType(null,t)
            }
            if (e.model = this.relatedModel,
            this.options.collectionKey) {
                var i = !0 === this.options.collectionKey ? this.options.reverseRelation.key : this.options.collectionKey;
                e[i] && e[i] !== this.instance ? h.Relational.showWarnings && "undefined" != typeof console && console.warn("Relation=%o; collectionKey=%s already exists on collection=%o", this, i, this.options.collectionKey) : i && (e[i] = this.instance)
            }
            return this.listenTo(e, "relational:add", this.handleAddition).listenTo(e, "relational:remove", this.handleRemoval).listenTo(e, "relational:reset", this.handleReset),
            e
        },
        findRelated: function(i) {
            var e = null;
            if (i = f.defaults({
                parse: this.options.parse
            }, i),
            this.keyContents instanceof h.Collection)
                this._prepareCollection(this.keyContents),
                e = this.keyContents;
            else {
                var n = [];
                f.each(this.keyContents, function(e) {
                    var t = null;
                    (t = e instanceof this.relatedModel ? e : f.isObject(e) && i.parse && this.relatedModel.prototype.parse ? this.relatedModel.prototype.parse(f.clone(e), i) : e) && n.push(t)
                }, this),
                (e = this.related instanceof h.Collection ? this.related : this._prepareCollection()).set(n, f.defaults({
                    parse: !1
                }, i))
            }
            return this.keyIds = f.difference(this.keyIds, f.pluck(e.models, "id")),
            e
        },
        setKeyContents: function(e) {
            this.keyContents = e instanceof h.Collection ? e : null,
            this.keyIds = [],
            this.keyContents || !e && 0 !== e || (this.keyContents = f.isArray(e) ? e : [e],
            f.each(this.keyContents, function(e) {
                var t = h.Relational.store.resolveIdForItem(this.relatedModel, e);
                (t || 0 === t) && this.keyIds.push(t)
            }, this))
        },
        onChange: function(e, t, i) {
            i = i ? f.clone(i) : {},
            this.setKeyContents(t),
            this.changed = !1;
            var n = this.findRelated(i);
            if (this.setRelated(n),
            !i.silent) {
                var o = this;
                h.Relational.eventQueue.add(function() {
                    o.changed && (o.instance.trigger("change:" + o.key, o.instance, o.related, i, !0),
                    o.changed = !1)
                })
            }
        },
        handleAddition: function(e, t, i) {
            i = i ? f.clone(i) : {},
            this.changed = !0,
            f.each(this.getReverseRelations(e), function(e) {
                e.addRelated(this.instance, i)
            }, this);
            var n = this;
            !i.silent && h.Relational.eventQueue.add(function() {
                n.instance.trigger("add:" + n.key, e, n.related, i)
            })
        },
        handleRemoval: function(e, t, i) {
            i = i ? f.clone(i) : {},
            this.changed = !0,
            f.each(this.getReverseRelations(e), function(e) {
                e.removeRelated(this.instance, null, i)
            }, this);
            var n = this;
            !i.silent && h.Relational.eventQueue.add(function() {
                n.instance.trigger("remove:" + n.key, e, n.related, i)
            })
        },
        handleReset: function(e, t) {
            var i = this;
            !(t = t ? f.clone(t) : {}).silent && h.Relational.eventQueue.add(function() {
                i.instance.trigger("reset:" + i.key, i.related, t)
            })
        },
        tryAddRelated: function(e, t, i) {
            f.contains(this.keyIds, e.id) && (this.addRelated(e, i),
            this.keyIds = f.without(this.keyIds, e.id))
        },
        addRelated: function(e, t) {
            var i = this;
            e.queue(function() {
                i.related && !i.related.get(e) && i.related.add(e, f.defaults({
                    parse: !1
                }, t))
            })
        },
        removeRelated: function(e, t, i) {
            this.related.get(e) && this.related.remove(e, i)
        }
    }),
    h.RelationalModel = h.Model.extend({
        relations: null,
        _relations: null,
        _isInitialized: !1,
        _deferProcessing: !1,
        _queue: null,
        _attributeChangeFired: !1,
        subModelTypeAttribute: "type",
        subModelTypes: null,
        constructor: function(e, t) {
            if (t && t.collection) {
                var i = this
                  , n = this.collection = t.collection;
                delete t.collection,
                this._deferProcessing = !0;
                var o = function(e) {
                    e === i && (i._deferProcessing = !1,
                    i.processQueue(),
                    n.off("relational:add", o))
                };
                n.on("relational:add", o),
                f.defer(function() {
                    o(i)
                })
            }
            h.Relational.store.processOrphanRelations(),
            h.Relational.store.listenTo(this, "relational:unregister", h.Relational.store.unregister),
            this._queue = new h.BlockingQueue,
            this._queue.block(),
            h.Relational.eventQueue.block();
            try {
                h.Model.apply(this, arguments)
            } finally {
                h.Relational.eventQueue.unblock()
            }
        },
        trigger: function(n) {
            if (5 < n.length && 0 === n.indexOf("change")) {
                var o = this
                  , s = arguments;
                h.Relational.eventQueue.isBlocked() ? h.Relational.eventQueue.add(function() {
                    var e = !0;
                    if ("change" === n)
                        e = o.hasChanged() || o._attributeChangeFired,
                        o._attributeChangeFired = !1;
                    else {
                        var t = n.slice(7)
                          , i = o.getRelation(t);
                        i ? (e = !0 === s[4]) ? o.changed[t] = s[2] : i.changed || delete o.changed[t] : e && (o._attributeChangeFired = !0)
                    }
                    e && h.Model.prototype.trigger.apply(o, s)
                }) : h.Model.prototype.trigger.apply(o, s)
            } else
                "destroy" === n ? (h.Model.prototype.trigger.apply(this, arguments),
                h.Relational.store.unregister(this)) : h.Model.prototype.trigger.apply(this, arguments);
            return this
        },
        initializeRelations: function(t) {
            this.acquire(),
            this._relations = {},
            f.each(this.relations || [], function(e) {
                h.Relational.store.initializeRelation(this, e, t)
            }, this),
            this._isInitialized = !0,
            this.release(),
            this.processQueue()
        },
        updateRelations: function(n, o) {
            this._isInitialized && !this.isLocked() && f.each(this._relations, function(e) {
                if (!n || e.keySource in n || e.key in n) {
                    var t = this.attributes[e.keySource] || this.attributes[e.key]
                      , i = n && (n[e.keySource] || n[e.key]);
                    (e.related !== t || null === t && null === i) && this.trigger("relational:change:" + e.key, this, t, o || {})
                }
                e.keySource !== e.key && delete this.attributes[e.keySource]
            }, this)
        },
        queue: function(e) {
            this._queue.add(e)
        },
        processQueue: function() {
            this._isInitialized && !this._deferProcessing && this._queue.isBlocked() && this._queue.unblock()
        },
        getRelation: function(e) {
            return this._relations[e]
        },
        getRelations: function() {
            return f.values(this._relations)
        },
        getIdsToFetch: function(e, t) {
            var i = e instanceof h.Relation ? e : this.getRelation(e)
              , n = i ? i.keyIds && i.keyIds.slice(0) || (i.keyId || 0 === i.keyId ? [i.keyId] : []) : [];
            if (t) {
                var o = i.related && (i.related.models || [i.related]);
                f.each(o, function(e) {
                    (e.id || 0 === e.id) && n.push(e.id)
                })
            }
            return n
        },
        getAsync: function(e, n) {
            n = f.extend({
                add: !0,
                remove: !1,
                refresh: !1
            }, n);
            var t = this
              , i = []
              , o = this.getRelation(e)
              , s = o && this.getIdsToFetch(o, n.refresh)
              , a = o.related instanceof h.Collection ? o.related : o.relatedCollection;
            if (s && s.length) {
                var r, l = [], c = [], u = function() {
                    l = f.map(s, function(e) {
                        var t = o.relatedModel.findModel(e);
                        if (!t) {
                            var i = {};
                            i[o.relatedModel.prototype.idAttribute] = e,
                            t = o.relatedModel.findOrCreate(i, n),
                            c.push(t)
                        }
                        return t
                    }, this)
                };
                if (a instanceof h.Collection && f.isFunction(a.url)) {
                    var d = a.url();
                    (r = a.url(s)) === d && (u(),
                    (r = a.url(l)) === d && (r = null))
                }
                if (r) {
                    var p = f.defaults({
                        error: function() {
                            f.each(c, function(e) {
                                e.trigger("destroy", e, e.collection, n)
                            }),
                            n.error && n.error.apply(l, arguments)
                        },
                        url: r
                    }, n);
                    i = [a.fetch(p)]
                } else
                    l.length || u(),
                    i = f.map(l, function(e) {
                        var t = f.defaults({
                            error: function() {
                                f.contains(c, e) && e.trigger("destroy", e, e.collection, n),
                                n.error && n.error.apply(l, arguments)
                            }
                        }, n);
                        return e.fetch(t)
                    }, this)
            }
            return this.deferArray(i).then(function() {
                return h.Model.prototype.get.call(t, e)
            })
        },
        deferArray: function(e) {
            return h.$.when.apply(null, e)
        },
        set: function(e, t, i) {
            var n, o;
            h.Relational.eventQueue.block(),
            f.isObject(e) || null == e ? (n = e,
            i = t) : (n = {})[e] = t;
            try {
                var s = this.id
                  , a = n && this.idAttribute in n && n[this.idAttribute];
                h.Relational.store.checkId(this, a),
                o = h.Model.prototype.set.apply(this, arguments),
                this._isInitialized || this.isLocked() ? a && a !== s && h.Relational.store.update(this) : (this.constructor.initializeModelHierarchy(),
                (a || 0 === a) && h.Relational.store.register(this),
                this.initializeRelations(i)),
                n && this.updateRelations(n, i)
            } finally {
                h.Relational.eventQueue.unblock()
            }
            return o
        },
        clone: function() {
            var t = f.clone(this.attributes);
            return f.isUndefined(t[this.idAttribute]) || (t[this.idAttribute] = null),
            f.each(this.getRelations(), function(e) {
                delete t[e.key]
            }),
            new this.constructor(t)
        },
        toJSON: function(i) {
            if (this.isLocked())
                return this.id;
            this.acquire();
            var s = h.Model.prototype.toJSON.call(this, i);
            return !this.constructor._superModel || this.constructor._subModelTypeAttribute in s || (s[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue),
            f.each(this._relations, function(e) {
                var t = s[e.key]
                  , n = e.options.includeInJSON
                  , o = null;
                !0 === n ? t && f.isFunction(t.toJSON) && (o = t.toJSON(i)) : f.isString(n) ? (t instanceof h.Collection ? o = t.pluck(n) : t instanceof h.Model && (o = t.get(n)),
                n === e.relatedModel.prototype.idAttribute && (e instanceof h.HasMany ? o = o.concat(e.keyIds) : e instanceof h.HasOne && ((o = o || e.keyId) || f.isObject(e.keyContents) || (o = e.keyContents || null)))) : f.isArray(n) ? t instanceof h.Collection ? (o = [],
                t.each(function(t) {
                    var i = {};
                    f.each(n, function(e) {
                        i[e] = t.get(e)
                    }),
                    o.push(i)
                })) : t instanceof h.Model && (o = {},
                f.each(n, function(e) {
                    o[e] = t.get(e)
                })) : delete s[e.key],
                null === o && i && i.wait && (o = t),
                n && (s[e.keyDestination] = o),
                e.keyDestination !== e.key && delete s[e.key]
            }),
            this.release(),
            s
        }
    }, {
        setup: function() {
            return this.prototype.relations = (this.prototype.relations || []).slice(0),
            this._subModels = {},
            this._superModel = null,
            this.prototype.hasOwnProperty("subModelTypes") ? h.Relational.store.addSubModels(this.prototype.subModelTypes, this) : this.prototype.subModelTypes = null,
            f.each(this.prototype.relations || [], function(e) {
                if (e.model || (e.model = this),
                e.reverseRelation && e.model === this) {
                    var t = !0;
                    if (f.isString(e.relatedModel)) {
                        var i = h.Relational.store.getObjectByName(e.relatedModel);
                        t = i && i.prototype instanceof h.RelationalModel
                    }
                    t ? h.Relational.store.initializeRelation(null, e) : f.isString(e.relatedModel) && h.Relational.store.addOrphanRelation(e)
                }
            }, this),
            this
        },
        build: function(e, t) {
            return this.initializeModelHierarchy(),
            new (this._findSubModelType(this, e) || this)(e,t)
        },
        _findSubModelType: function(e, t) {
            if (e._subModels && e.prototype.subModelTypeAttribute in t) {
                var i = t[e.prototype.subModelTypeAttribute]
                  , n = e._subModels[i];
                if (n)
                    return n;
                for (i in e._subModels)
                    if (n = this._findSubModelType(e._subModels[i], t))
                        return n
            }
            return null
        },
        initializeModelHierarchy: function() {
            if (this.inheritRelations(),
            this.prototype.subModelTypes) {
                var e = f.keys(this._subModels)
                  , t = f.omit(this.prototype.subModelTypes, e);
                f.each(t, function(e) {
                    var t = h.Relational.store.getObjectByName(e);
                    t && t.initializeModelHierarchy()
                })
            }
        },
        inheritRelations: function() {
            if (f.isUndefined(this._superModel) || f.isNull(this._superModel))
                if (h.Relational.store.setupSuperModel(this),
                this._superModel) {
                    if (this._superModel.inheritRelations(),
                    this._superModel.prototype.relations) {
                        var e = f.filter(this._superModel.prototype.relations || [], function(t) {
                            return !f.any(this.prototype.relations || [], function(e) {
                                return t.relatedModel === e.relatedModel && t.key === e.key
                            }, this)
                        }, this);
                        this.prototype.relations = e.concat(this.prototype.relations)
                    }
                } else
                    this._superModel = !1
        },
        findOrCreate: function(e, t) {
            t || (t = {});
            var i = f.isObject(e) && t.parse && this.prototype.parse ? this.prototype.parse(f.clone(e), t) : e
              , n = this.findModel(i);
            return f.isObject(e) && (n && !1 !== t.merge ? (delete t.collection,
            delete t.url,
            n.set(i, t)) : n || !1 === t.create || (n = this.build(i, f.defaults({
                parse: !1
            }, t)))),
            n
        },
        find: function(e, t) {
            return t || (t = {}),
            t.create = !1,
            this.findOrCreate(e, t)
        },
        findModel: function(e) {
            return h.Relational.store.find(this, e)
        }
    }),
    f.extend(h.RelationalModel.prototype, h.Semaphore),
    h.Collection.prototype.__prepareModel = h.Collection.prototype._prepareModel,
    h.Collection.prototype._prepareModel = function(e, t) {
        var i;
        return e instanceof h.Model ? (e.collection || (e.collection = this),
        i = e) : (i = "undefined" != typeof ((t = t ? f.clone(t) : {}).collection = this).model.findOrCreate ? this.model.findOrCreate(e, t) : new this.model(e,t)) && i.validationError && (this.trigger("invalid", this, e, t),
        i = !1),
        i
    }
    ;
    var l = h.Collection.prototype.__set = h.Collection.prototype.set;
    h.Collection.prototype.set = function(e, t) {
        if (!(this.model.prototype instanceof h.RelationalModel))
            return l.call(this, e, t);
        t && t.parse && (e = this.parse(e, t));
        var i = !f.isArray(e)
          , n = []
          , o = []
          , s = null;
        e = i ? e ? [e] : [] : f.clone(e);
        for (var a = 0; a < e.length; a++)
            (s = e[a])instanceof h.Model || (s = h.Collection.prototype._prepareModel.call(this, s, t)),
            s && (o.push(s),
            this.get(s) || this.get(s.cid) ? null !== s.id && s.id !== undefined && (this._byId[s.id] = s) : n.push(s));
        o = i ? o.length ? o[0] : null : o;
        var r = l.call(this, o, f.defaults({
            merge: !1,
            parse: !1
        }, t));
        for (a = 0; a < n.length; a++)
            s = n[a],
            (this.get(s) || this.get(s.cid)) && this.trigger("relational:add", s, this, t);
        return r
    }
    ;
    var o = h.Collection.prototype.___removeModels = h.Collection.prototype._removeModels;
    h.Collection.prototype._removeModels = function(e, t) {
        if (!(this.model.prototype instanceof h.RelationalModel))
            return o.call(this, e, t);
        var i = [];
        f.each(e, function(e) {
            (e = this.get(e) || e && this.get(e.cid)) && i.push(e)
        }, this);
        var n = o.call(this, i, t);
        return f.each(i, function(e) {
            this.trigger("relational:remove", e, this, t)
        }, this),
        n
    }
    ;
    var n = h.Collection.prototype.__reset = h.Collection.prototype.reset;
    h.Collection.prototype.reset = function(e, t) {
        t = f.extend({
            merge: !0
        }, t);
        var i = n.call(this, e, t);
        return this.model.prototype instanceof h.RelationalModel && this.trigger("relational:reset", this, t),
        i
    }
    ;
    var i = h.Collection.prototype.__sort = h.Collection.prototype.sort;
    h.Collection.prototype.sort = function(e) {
        var t = i.call(this, e);
        return this.model.prototype instanceof h.RelationalModel && this.trigger("relational:reset", this, e),
        t
    }
    ;
    var s = h.Collection.prototype.__trigger = h.Collection.prototype.trigger;
    h.Collection.prototype.trigger = function(e) {
        if (!(this.model.prototype instanceof h.RelationalModel))
            return s.apply(this, arguments);
        if ("add" === e || "remove" === e || "reset" === e || "sort" === e) {
            var t = this
              , i = arguments;
            f.isObject(i[3]) && ((i = f.toArray(i))[3] = f.clone(i[3])),
            h.Relational.eventQueue.add(function() {
                s.apply(t, i)
            })
        } else
            s.apply(this, arguments);
        return this
    }
    ,
    h.RelationalModel.extend = function(e, t) {
        var i = h.Model.extend.call(this, e, t);
        return i.setup(this),
        i
    }
}),
Backbone.ajax = Spree.ajax,
Backbone.sync_with_order = function(e, t, i) {
    return i = $.extend(!0, i, {
        headers: {
            "X-Spree-Order-Number": Spree.order_number,
            "X-Spree-Order-Token": Spree.current_order_token
        }
    }),
    Backbone.sync.call(this, e, t, i)
}
,
Backbone.Model.prototype.get = function(e) {
    return _.get(this.attributes, e)
}
,
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.Blazy = t()
}(this, function() {
    function n(e) {
        var t = e._util;
        t.elements = i(e.options),
        t.count = t.elements.length,
        t.destroyed && (t.destroyed = !1,
        e.options.container && _(e.options.container, function(e) {
            k(e, "scroll", t.validateT)
        }),
        k(window, "resize", t.saveViewportOffsetT),
        k(window, "resize", t.validateT),
        k(window, "scroll", t.validateT)),
        o(e)
    }
    function o(e) {
        for (var t = e._util, i = 0; i < t.count; i++) {
            var n = t.elements[i];
            (s(n, e.options) || y(n, e.options.successClass)) && (e.load(n),
            t.elements.splice(i, 1),
            t.count--,
            i--)
        }
        0 === t.count && e.destroy()
    }
    function s(e, t) {
        var i = e.getBoundingClientRect();
        if (t.container) {
            var n = e.closest(t.containerClass);
            if (n) {
                var o = n.getBoundingClientRect();
                return !!a(o, p) && a(i, {
                    top: o.top - t.offset,
                    right: o.right + t.offset,
                    bottom: o.bottom + t.offset,
                    left: o.left - t.offset
                })
            }
        }
        return a(i, p)
    }
    function a(e, t) {
        return e.right >= t.left && e.bottom >= t.top && e.left <= t.right && e.top <= t.bottom
    }
    function r(e, t, i) {
        if (!y(e, i.successClass) && (t || i.loadInvisible || 0 < e.offsetWidth && 0 < e.offsetHeight)) {
            var n = m(e, S) || m(e, i.src);
            if (n) {
                var o = n.split(i.separator)
                  , s = o[x && 1 < o.length ? 1 : 0]
                  , a = m(e, i.srcset)
                  , r = g(e, "img")
                  , l = e.parentNode
                  , c = l && g(l, "picture");
                if (r || e.src === undefined) {
                    var u = new Image
                      , d = function() {
                        i.error && i.error(e, "invalid"),
                        b(e, i.errorClass),
                        w(u, "error", d),
                        w(u, "load", p)
                    }
                      , p = function() {
                        r ? c || v(e, s, a) : e.style.backgroundImage = 'url("' + s + '")',
                        h(e, i),
                        w(u, "load", p),
                        w(u, "error", d)
                    };
                    c && (u = e,
                    _(l.getElementsByTagName("source"), function(e) {
                        f(e, $, i.srcset)
                    })),
                    k(u, "error", d),
                    k(u, "load", p),
                    v(u, s, a)
                } else
                    e.src = s,
                    h(e, i)
            } else
                g(e, "video") ? (_(e.getElementsByTagName("source"), function(e) {
                    f(e, C, i.src)
                }),
                e.load(),
                h(e, i)) : (i.error && i.error(e, "missing"),
                b(e, i.errorClass))
        }
    }
    function h(t, e) {
        b(t, e.successClass),
        e.success && e.success(t),
        c(t, e.src),
        c(t, e.srcset),
        _(e.breakpoints, function(e) {
            c(t, e.src)
        })
    }
    function f(e, t, i) {
        var n = m(e, i);
        n && (l(e, t, n),
        c(e, i))
    }
    function v(e, t, i) {
        i && l(e, $, i),
        e.src = t
    }
    function l(e, t, i) {
        e.setAttribute(t, i)
    }
    function m(e, t) {
        return e.getAttribute(t)
    }
    function c(e, t) {
        e.removeAttribute(t)
    }
    function g(e, t) {
        return e.nodeName.toLowerCase() === t
    }
    function y(e, t) {
        return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }
    function b(e, t) {
        y(e, t) || (e.className += " " + t)
    }
    function i(e) {
        for (var t = [], i = e.root.querySelectorAll(e.selector), n = i.length; n--; t.unshift(i[n]))
            ;
        return t
    }
    function u(e) {
        p.bottom = (window.innerHeight || document.documentElement.clientHeight) + e,
        p.right = (window.innerWidth || document.documentElement.clientWidth) + e
    }
    function k(e, t, i) {
        e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, i) : e.addEventListener(t, i, {
            capture: !1,
            passive: !0
        })
    }
    function w(e, t, i) {
        e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, i) : e.removeEventListener(t, i, {
            capture: !1,
            passive: !0
        })
    }
    function _(e, t) {
        if (e && t)
            for (var i = e.length, n = 0; n < i && !1 !== t(e[n], n); n++)
                ;
    }
    function d(t, i, n) {
        var o = 0;
        return function() {
            var e = +new Date;
            e - o < i || (o = e,
            t.apply(n, arguments))
        }
    }
    var S, p, x, C = "src", $ = "srcset";
    return function T(e) {
        if (!document.querySelectorAll) {
            var s = document.createStyleSheet();
            document.querySelectorAll = function(e, t, i, n, o) {
                for (o = document.all,
                t = [],
                i = (e = e.replace(/\[for\b/gi, "[htmlFor").split(",")).length; i--; ) {
                    for (s.addRule(e[i], "k:v"),
                    n = o.length; n--; )
                        o[n].currentStyle.k && t.push(o[n]);
                    s.removeRule(0)
                }
                return t
            }
        }
        var t = this
          , i = t._util = {};
        i.elements = [],
        i.destroyed = !0,
        t.options = e || {},
        t.options.error = t.options.error || !1,
        t.options.offset = t.options.offset || 100,
        t.options.root = t.options.root || document,
        t.options.success = t.options.success || !1,
        t.options.selector = t.options.selector || ".b-lazy",
        t.options.separator = t.options.separator || "|",
        t.options.containerClass = t.options.container,
        t.options.container = !!t.options.containerClass && document.querySelectorAll(t.options.containerClass),
        t.options.errorClass = t.options.errorClass || "b-error",
        t.options.breakpoints = t.options.breakpoints || !1,
        t.options.loadInvisible = t.options.loadInvisible || !1,
        t.options.successClass = t.options.successClass || "b-loaded",
        t.options.validateDelay = t.options.validateDelay || 25,
        t.options.saveViewportOffsetDelay = t.options.saveViewportOffsetDelay || 50,
        t.options.srcset = t.options.srcset || "data-srcset",
        t.options.src = S = t.options.src || "data-src",
        x = 1 < window.devicePixelRatio,
        (p = {}).top = 0 - t.options.offset,
        p.left = 0 - t.options.offset,
        t.revalidate = function() {
            n(this)
        }
        ,
        t.load = function(e, t) {
            var i = this.options;
            e.length === undefined ? r(e, t, i) : _(e, function(e) {
                r(e, t, i)
            })
        }
        ,
        t.destroy = function() {
            var e = this
              , t = e._util;
            e.options.container && _(e.options.container, function(e) {
                w(e, "scroll", t.validateT)
            }),
            w(window, "scroll", t.validateT),
            w(window, "resize", t.validateT),
            w(window, "resize", t.saveViewportOffsetT),
            t.count = 0,
            t.elements.length = 0,
            t.destroyed = !0
        }
        ,
        i.validateT = d(function() {
            o(t)
        }, t.options.validateDelay, t),
        i.saveViewportOffsetT = d(function() {
            u(t.options.offset)
        }, t.options.saveViewportOffsetDelay, t),
        u(t.options.offset),
        _(t.options.breakpoints, function(e) {
            if (e.width >= window.screen.width)
                return S = e.src,
                !1
        }),
        setTimeout(function() {
            n(t)
        })
    }
}),
function(e) {
    "function" == typeof define && define.amd ? define("datepicker", ["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(E) {
    function t(e) {
        return I.call(e).slice(8, -1).toLowerCase()
    }
    function c(e) {
        return "string" == typeof e
    }
    function s(e) {
        return "number" == typeof e && !isNaN(e)
    }
    function r(e) {
        return void 0 === e
    }
    function u(e) {
        return "date" === t(e)
    }
    function n(e, t) {
        var i = [];
        return Array.from ? Array.from(e).slice(t || 0) : (s(t) && i.push(t),
        i.slice.apply(e, i))
    }
    function e(e, t) {
        var i = n(arguments, 2);
        return function() {
            return e.apply(t, i.concat(n(arguments)))
        }
    }
    function i(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function O(e, t) {
        return [31, i(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
    }
    function a(e) {
        var t, i, n = String(e).toLowerCase(), o = n.match(_);
        if (!o || 0 === o.length)
            throw new Error("Invalid date format.");
        for (e = {
            source: n,
            parts: o
        },
        t = o.length,
        i = 0; i < t; i++)
            switch (o[i]) {
            case "dd":
            case "d":
                e.hasDay = !0;
                break;
            case "mm":
            case "m":
                e.hasMonth = !0;
                break;
            case "yyyy":
            case "yy":
                e.hasYear = !0
            }
        return e
    }
    function l(e, t) {
        (t = E.isPlainObject(t) ? t : {}).language && (t = E.extend({}, l.LANGUAGES[t.language], t)),
        this.$element = E(e),
        this.options = E.extend({}, l.DEFAULTS, t),
        this.isBuilt = !1,
        this.isShown = !1,
        this.isInput = !1,
        this.isInline = !1,
        this.initialValue = "",
        this.initialDate = null,
        this.startDate = null,
        this.endDate = null,
        this.init()
    }
    var o = E(window)
      , d = window.document
      , f = E(d)
      , p = window.Number
      , h = "datepicker"
      , v = "click." + h
      , m = "keyup." + h
      , g = "focus." + h
      , y = "resize." + h
      , b = "show." + h
      , k = "hide." + h
      , w = "pick." + h
      , _ = /(y|m|d)+/g
      , S = /\d+/g
      , x = /^\d{2,4}$/
      , C = h + "-inline"
      , $ = h + "-dropdown"
      , T = h + "-top-left"
      , P = h + "-bottom-left"
      , M = [T, h + "-top-right", P, h + "-bottom-right"].join(" ")
      , j = h + "-hide"
      , A = Math.min
      , I = Object.prototype.toString;
    l.prototype = {
        constructor: l,
        init: function() {
            var e = this.options
              , t = this.$element
              , i = e.startDate
              , n = e.endDate
              , o = e.date;
            this.$trigger = E(e.trigger || t),
            this.isInput = t.is("input") || t.is("textarea"),
            this.isInline = e.inline && (e.container || !this.isInput),
            this.format = a(e.format),
            this.oldValue = this.initialValue = this.getValue(),
            o = this.parseDate(o || this.initialValue),
            i && (i = this.parseDate(i),
            o.getTime() < i.getTime() && (o = new Date(i)),
            this.startDate = i),
            n && (n = this.parseDate(n),
            i && n.getTime() < i.getTime() && (n = new Date(i)),
            o.getTime() > n.getTime() && (o = new Date(n)),
            this.endDate = n),
            this.date = o,
            this.viewDate = new Date(o),
            this.initialDate = new Date(this.date),
            this.bind(),
            (e.autoShow || this.isInline) && this.show(),
            e.autoPick && this.pick()
        },
        build: function() {
            var e, t = this.options, i = this.$element;
            this.isBuilt || (this.isBuilt = !0,
            this.$picker = e = E(t.template),
            this.$week = e.find('[data-view="week"]'),
            this.$yearsPicker = e.find('[data-view="years picker"]'),
            this.$yearsPrev = e.find('[data-view="years prev"]'),
            this.$yearsNext = e.find('[data-view="years next"]'),
            this.$yearsCurrent = e.find('[data-view="years current"]'),
            this.$years = e.find('[data-view="years"]'),
            this.$monthsPicker = e.find('[data-view="months picker"]'),
            this.$yearPrev = e.find('[data-view="year prev"]'),
            this.$yearNext = e.find('[data-view="year next"]'),
            this.$yearCurrent = e.find('[data-view="year current"]'),
            this.$months = e.find('[data-view="months"]'),
            this.$daysPicker = e.find('[data-view="days picker"]'),
            this.$monthPrev = e.find('[data-view="month prev"]'),
            this.$monthNext = e.find('[data-view="month next"]'),
            this.$monthCurrent = e.find('[data-view="month current"]'),
            this.$days = e.find('[data-view="days"]'),
            this.isInline ? E(t.container || i).append(e.addClass(C)) : (E(d.body).append(e.addClass($)),
            e.addClass(j)),
            this.fillWeek())
        },
        unbuild: function() {
            this.isBuilt && (this.isBuilt = !1,
            this.$picker.remove())
        },
        bind: function() {
            var e = this.options
              , t = this.$element;
            E.isFunction(e.show) && t.on(b, e.show),
            E.isFunction(e.hide) && t.on(k, e.hide),
            E.isFunction(e.pick) && t.on(w, e.pick),
            this.isInput && (t.on(m, E.proxy(this.keyup, this)),
            e.trigger || t.on(g, E.proxy(this.show, this))),
            this.$trigger.on(v, E.proxy(this.show, this))
        },
        unbind: function() {
            var e = this.options
              , t = this.$element;
            E.isFunction(e.show) && t.off(b, e.show),
            E.isFunction(e.hide) && t.off(k, e.hide),
            E.isFunction(e.pick) && t.off(w, e.pick),
            this.isInput && (t.off(m, this.keyup),
            e.trigger || t.off(g, this.show)),
            this.$trigger.off(v, this.show)
        },
        showView: function(e) {
            var t = this.$yearsPicker
              , i = this.$monthsPicker
              , n = this.$daysPicker
              , o = this.format;
            if (o.hasYear || o.hasMonth || o.hasDay)
                switch (p(e)) {
                case 2:
                case "years":
                    i.addClass(j),
                    n.addClass(j),
                    o.hasYear ? (this.fillYears(),
                    t.removeClass(j)) : this.showView(0);
                    break;
                case 1:
                case "months":
                    t.addClass(j),
                    n.addClass(j),
                    o.hasMonth ? (this.fillMonths(),
                    i.removeClass(j)) : this.showView(2);
                    break;
                default:
                    t.addClass(j),
                    i.addClass(j),
                    o.hasDay ? (this.fillDays(),
                    n.removeClass(j)) : this.showView(1)
                }
        },
        hideView: function() {
            this.options.autoHide && this.hide()
        },
        place: function() {
            var e = this.options
              , t = this.$element
              , i = this.$picker
              , n = f.outerWidth()
              , o = f.outerHeight()
              , s = t.outerWidth()
              , a = t.outerHeight()
              , r = i.width()
              , l = i.height()
              , c = t.offset()
              , u = c.left
              , d = c.top
              , p = parseFloat(e.offset) || 10
              , h = T;
            l < d && o < d + a + l ? (d -= l + p,
            h = P) : d += a + p,
            n < u + r && (u = u + s - r,
            h = h.replace("left", "right")),
            i.removeClass(M).addClass(h).css({
                top: d,
                left: u,
                zIndex: parseInt(e.zIndex, 10)
            })
        },
        trigger: function(e, t) {
            var i = E.Event(e, t);
            return this.$element.trigger(i),
            i
        },
        createItem: function(e) {
            var t = this.options
              , i = t.itemTag
              , n = {
                text: "",
                view: "",
                muted: !1,
                picked: !1,
                disabled: !1
            };
            return E.extend(n, e),
            "<" + i + " " + (n.disabled ? 'class="' + t.disabledClass + '"' : n.picked ? 'class="' + t.pickedClass + '"' : n.muted ? 'class="' + t.mutedClass + '"' : "") + (n.view ? ' data-view="' + n.view + '"' : "") + ">" + n.text + "</" + i + ">"
        },
        fillAll: function() {
            this.fillYears(),
            this.fillMonths(),
            this.fillDays()
        },
        fillWeek: function() {
            var e, t = this.options, i = parseInt(t.weekStart, 10) % 7, n = t.daysMin, o = "";
            for (n = E.merge(n.slice(i), n.slice(0, i)),
            e = 0; e <= 6; e++)
                o += this.createItem({
                    text: n[e]
                });
            this.$week.html(o)
        },
        fillYears: function() {
            var e, t = this.options, i = t.disabledClass || "", n = t.yearSuffix || "", o = E.isFunction(t.filter) && t.filter, s = this.startDate, a = this.endDate, r = this.viewDate, l = r.getFullYear(), c = r.getMonth(), u = r.getDate(), d = this.date, p = d.getFullYear(), h = !1, f = !1, v = !1, m = !1, g = !1, y = "", b = -5, k = 6;
            for (e = b; e <= k; e++)
                d = new Date(l + e,c,u),
                g = e === b || e === k,
                m = l + e === p,
                v = !1,
                s && (v = d.getFullYear() < s.getFullYear(),
                e === b && (h = v)),
                !v && a && (v = d.getFullYear() > a.getFullYear(),
                e === k && (f = v)),
                !v && o && (v = !1 === o.call(this.$element, d)),
                y += this.createItem({
                    text: l + e,
                    view: v ? "year disabled" : m ? "year picked" : "year",
                    muted: g,
                    picked: m,
                    disabled: v
                });
            this.$yearsPrev.toggleClass(i, h),
            this.$yearsNext.toggleClass(i, f),
            this.$yearsCurrent.toggleClass(i, !0).html(l + b + n + " - " + (l + k) + n),
            this.$years.html(y)
        },
        fillMonths: function() {
            var e, t = this.options, i = t.disabledClass || "", n = t.monthsShort, o = E.isFunction(t.filter) && t.filter, s = this.startDate, a = this.endDate, r = this.viewDate, l = r.getFullYear(), c = r.getDate(), u = this.date, d = u.getFullYear(), p = u.getMonth(), h = !1, f = !1, v = !1, m = !1, g = "";
            for (e = 0; e <= 11; e++)
                u = new Date(l,e,c),
                m = l === d && e === p,
                v = !1,
                s && (v = (h = u.getFullYear() === s.getFullYear()) && u.getMonth() < s.getMonth()),
                !v && a && (v = (f = u.getFullYear() === a.getFullYear()) && u.getMonth() > a.getMonth()),
                !v && o && (v = !1 === o.call(this.$element, u)),
                g += this.createItem({
                    index: e,
                    text: n[e],
                    view: v ? "month disabled" : m ? "month picked" : "month",
                    picked: m,
                    disabled: v
                });
            this.$yearPrev.toggleClass(i, h),
            this.$yearNext.toggleClass(i, f),
            this.$yearCurrent.toggleClass(i, h && f).html(l + t.yearSuffix || ""),
            this.$months.html(g)
        },
        fillDays: function() {
            var e, t, i, n = this.options, o = n.disabledClass || "", s = n.yearSuffix || "", a = n.monthsShort, r = parseInt(n.weekStart, 10) % 7, l = E.isFunction(n.filter) && n.filter, c = this.startDate, u = this.endDate, d = this.viewDate, p = d.getFullYear(), h = d.getMonth(), f = p, v = h, m = p, g = h, y = this.date, b = y.getFullYear(), k = y.getMonth(), w = y.getDate(), _ = !1, S = !1, x = !1, C = !1, $ = [], T = [], P = [], M = 42;
            for (0 === h ? (f -= 1,
            v = 11) : v -= 1,
            e = O(f, v),
            (i = (y = new Date(p,h,1)).getDay() - r) <= 0 && (i += 7),
            c && (_ = y.getTime() <= c.getTime()),
            t = e - (i - 1); t <= e; t++)
                y = new Date(f,v,t),
                x = !1,
                c && (x = y.getTime() < c.getTime()),
                !x && l && (x = !1 === l.call(this.$element, y)),
                $.push(this.createItem({
                    text: t,
                    view: "day prev",
                    muted: !0,
                    disabled: x
                }));
            for (11 === h ? (m += 1,
            g = 0) : g += 1,
            e = O(p, h),
            i = M - ($.length + e),
            y = new Date(p,h,e),
            u && (S = y.getTime() >= u.getTime()),
            t = 1; t <= i; t++)
                y = new Date(m,g,t),
                x = !1,
                u && (x = y.getTime() > u.getTime()),
                !x && l && (x = !1 === l.call(this.$element, y)),
                T.push(this.createItem({
                    text: t,
                    view: "day next",
                    muted: !0,
                    disabled: x
                }));
            for (t = 1; t <= e; t++)
                y = new Date(p,h,t),
                C = p === b && h === k && t === w,
                x = !1,
                c && (x = y.getTime() < c.getTime()),
                !x && u && (x = y.getTime() > u.getTime()),
                !x && l && (x = !1 === l.call(this.$element, y)),
                P.push(this.createItem({
                    text: t,
                    view: x ? "day disabled" : C ? "day picked" : "day",
                    picked: C,
                    disabled: x
                }));
            this.$monthPrev.toggleClass(o, _),
            this.$monthNext.toggleClass(o, S),
            this.$monthCurrent.toggleClass(o, _ && S).html(n.yearFirst ? p + s + " " + a[h] : a[h] + " " + p + s),
            this.$days.html($.join("") + P.join(" ") + T.join(""))
        },
        click: function(e) {
            var t, i, n, o, s, a, r = E(e.target), l = this.viewDate;
            if (e.stopPropagation(),
            e.preventDefault(),
            !r.hasClass("disabled"))
                switch (t = l.getFullYear(),
                i = l.getMonth(),
                n = l.getDate(),
                a = r.data("view")) {
                case "years prev":
                case "years next":
                    t = "years prev" === a ? t - 10 : t + 10,
                    s = r.text(),
                    (o = x.test(s)) && (t = parseInt(s, 10),
                    this.date = new Date(t,i,A(n, 28))),
                    this.viewDate = new Date(t,i,A(n, 28)),
                    this.fillYears(),
                    o && (this.showView(1),
                    this.pick("year"));
                    break;
                case "year prev":
                case "year next":
                    t = "year prev" === a ? t - 1 : t + 1,
                    this.viewDate = new Date(t,i,A(n, 28)),
                    this.fillMonths();
                    break;
                case "year current":
                    this.format.hasYear && this.showView(2);
                    break;
                case "year picked":
                    this.format.hasMonth ? this.showView(1) : this.hideView();
                    break;
                case "year":
                    t = parseInt(r.text(), 10),
                    this.date = new Date(t,i,A(n, 28)),
                    this.viewDate = new Date(t,i,A(n, 28)),
                    this.format.hasMonth ? this.showView(1) : this.hideView(),
                    this.pick("year");
                    break;
                case "month prev":
                case "month next":
                    i = "month prev" === a ? i - 1 : "month next" === a ? i + 1 : i,
                    this.viewDate = new Date(t,i,A(n, 28)),
                    this.fillDays();
                    break;
                case "month current":
                    this.format.hasMonth && this.showView(1);
                    break;
                case "month picked":
                    this.format.hasDay ? this.showView(0) : this.hideView();
                    break;
                case "month":
                    i = E.inArray(r.text(), this.options.monthsShort),
                    this.date = new Date(t,i,A(n, 28)),
                    this.viewDate = new Date(t,i,A(n, 28)),
                    this.format.hasDay ? this.showView(0) : this.hideView(),
                    this.pick("month");
                    break;
                case "day prev":
                case "day next":
                case "day":
                    i = "day prev" === a ? i - 1 : "day next" === a ? i + 1 : i,
                    n = parseInt(r.text(), 10),
                    this.date = new Date(t,i,n),
                    this.viewDate = new Date(t,i,n),
                    this.fillDays(),
                    "day" === a && this.hideView(),
                    this.pick("day");
                    break;
                case "day picked":
                    this.hideView(),
                    this.pick("day")
                }
        },
        clickDoc: function(e) {
            for (var t, i = e.target, n = this.$trigger[0]; i !== d; ) {
                if (i === n) {
                    t = !0;
                    break
                }
                i = i.parentNode
            }
            t || this.hide()
        },
        keyup: function() {
            this.update()
        },
        getValue: function() {
            var e = this.$element
              , t = "";
            return this.isInput ? t = e.val() : this.isInline ? this.options.container && (t = e.text()) : t = e.text(),
            t
        },
        setValue: function(e) {
            var t = this.$element;
            e = c(e) ? e : "",
            this.isInput ? t.val(e) : this.isInline ? this.options.container && t.text(e) : t.text(e)
        },
        show: function() {
            this.isBuilt || this.build(),
            this.isShown || this.trigger(b).isDefaultPrevented() || (this.isShown = !0,
            this.$picker.removeClass(j).on(v, E.proxy(this.click, this)),
            this.showView(this.options.startView),
            this.isInline || (o.on(y, this._place = e(this.place, this)),
            f.on(v, this._clickDoc = e(this.clickDoc, this)),
            this.place()))
        },
        hide: function() {
            this.isShown && (this.trigger(k).isDefaultPrevented() || (this.isShown = !1,
            this.$picker.addClass(j).off(v, this.click),
            this.isInline || (o.off(y, this._place),
            f.off(v, this._clickDoc))))
        },
        update: function() {
            var e = this.getValue();
            e !== this.oldValue && (this.setDate(e, !0),
            this.oldValue = e)
        },
        pick: function(e) {
            var t = this.$element
              , i = this.date;
            this.trigger(w, {
                view: e || "",
                date: i
            }).isDefaultPrevented() || (this.setValue(i = this.formatDate(this.date)),
            this.isInput && t.trigger("change"))
        },
        reset: function() {
            this.setDate(this.initialDate, !0),
            this.setValue(this.initialValue),
            this.isShown && this.showView(this.options.startView)
        },
        getMonthName: function(e, t) {
            var i = this.options
              , n = i.months;
            return E.isNumeric(e) ? e = p(e) : r(t) && (t = e),
            !0 === t && (n = i.monthsShort),
            n[s(e) ? e : this.date.getMonth()]
        },
        getDayName: function(e, t, i) {
            var n = this.options
              , o = n.days;
            return E.isNumeric(e) ? e = p(e) : (r(i) && (i = t),
            r(t) && (t = e)),
            (o = !0 === i ? n.daysMin : !0 === t ? n.daysShort : o)[s(e) ? e : this.date.getDay()]
        },
        getDate: function(e) {
            var t = this.date;
            return e ? this.formatDate(t) : new Date(t)
        },
        setDate: function(e, t) {
            var i = this.options.filter;
            if (u(e) || c(e)) {
                if (e = this.parseDate(e),
                E.isFunction(i) && !1 === i.call(this.$element, e))
                    return;
                this.date = e,
                this.viewDate = new Date(e),
                t || this.pick(),
                this.isBuilt && this.fillAll()
            }
        },
        setStartDate: function(e) {
            (u(e) || c(e)) && (this.startDate = this.parseDate(e),
            this.isBuilt && this.fillAll())
        },
        setEndDate: function(e) {
            (u(e) || c(e)) && (this.endDate = this.parseDate(e),
            this.isBuilt && this.fillAll())
        },
        parseDate: function(e) {
            var t, i, n, o, s, a, r = this.format, l = [];
            if (u(e))
                return new Date(e.getFullYear(),e.getMonth(),e.getDate());
            if (c(e) && (l = e.match(S) || []),
            i = (e = new Date).getFullYear(),
            n = e.getDate(),
            o = e.getMonth(),
            t = r.parts.length,
            l.length === t)
                for (a = 0; a < t; a++)
                    switch (s = parseInt(l[a], 10) || 1,
                    r.parts[a]) {
                    case "dd":
                    case "d":
                        n = s;
                        break;
                    case "mm":
                    case "m":
                        o = s - 1;
                        break;
                    case "yy":
                        i = 2e3 + s;
                        break;
                    case "yyyy":
                        i = s
                    }
            return new Date(i,o,n)
        },
        formatDate: function(e) {
            var t, i, n, o, s, a = this.format, r = "";
            if (u(e))
                for (r = a.source,
                i = e.getFullYear(),
                (o = {
                    d: e.getDate(),
                    m: e.getMonth() + 1,
                    yy: i.toString().substring(2),
                    yyyy: i
                }).dd = (o.d < 10 ? "0" : "") + o.d,
                o.mm = (o.m < 10 ? "0" : "") + o.m,
                t = a.parts.length,
                s = 0; s < t; s++)
                    n = a.parts[s],
                    r = r.replace(n, o[n]);
            return r
        },
        destroy: function() {
            this.unbind(),
            this.unbuild(),
            this.$element.removeData(h)
        }
    },
    l.LANGUAGES = {},
    l.DEFAULTS = {
        autoShow: !1,
        autoHide: !1,
        autoPick: !1,
        inline: !1,
        container: null,
        trigger: null,
        language: "",
        format: "mm/dd/yyyy",
        date: null,
        startDate: null,
        endDate: null,
        startView: 0,
        weekStart: 0,
        yearFirst: !1,
        yearSuffix: "",
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        itemTag: "li",
        mutedClass: "muted",
        pickedClass: "picked",
        disabledClass: "disabled",
        template: '<div class="datepicker-container"><div class="datepicker-panel" data-view="years picker"><ul><li data-view="years prev">&lsaquo;</li><li data-view="years current"></li><li data-view="years next">&rsaquo;</li></ul><ul data-view="years"></ul></div><div class="datepicker-panel" data-view="months picker"><ul><li data-view="year prev">&lsaquo;</li><li data-view="year current"></li><li data-view="year next">&rsaquo;</li></ul><ul data-view="months"></ul></div><div class="datepicker-panel" data-view="days picker"><ul><li data-view="month prev">&lsaquo;</li><li data-view="month current"></li><li data-view="month next">&rsaquo;</li></ul><ul data-view="week"></ul><ul data-view="days"></ul></div></div>',
        offset: 10,
        zIndex: 1e3,
        filter: null,
        show: null,
        hide: null,
        pick: null
    },
    l.setDefaults = function(e) {
        (e = E.isPlainObject(e) ? e : {}).language && (e = E.extend({}, l.LANGUAGES[e.language], e)),
        E.extend(l.DEFAULTS, e)
    }
    ,
    l.other = E.fn.datepicker,
    E.fn.datepicker = function(o) {
        var s, a = n(arguments, 1);
        return this.each(function() {
            var e, t, i = E(this), n = i.data(h);
            if (!n) {
                if (/destroy/.test(o))
                    return;
                e = E.extend({}, i.data(), E.isPlainObject(o) && o),
                i.data(h, n = new l(this,e))
            }
            c(o) && E.isFunction(t = n[o]) && (s = t.apply(n, a))
        }),
        r(s) ? this : s
    }
    ,
    E.fn.datepicker.Constructor = l,
    E.fn.datepicker.languages = l.LANGUAGES,
    E.fn.datepicker.setDefaults = l.setDefaults,
    E.fn.datepicker.noConflict = function() {
        return E.fn.datepicker = l.other,
        this
    }
}),
function() {
    var O, j;
    O = window.jQuery,
    j = O(window),
    O.fn.stick_in_parent = function(e) {
        var S, t, x, i, n, C, o, $, T, s, P, M, E;
        for (null == e && (e = {}),
        E = e.sticky_class,
        C = e.inner_scrolling,
        M = e.recalc_every,
        P = e.parent,
        T = e.offset_top,
        $ = e.spacer,
        x = e.bottoming,
        null == T && (T = 0),
        null == P && (P = void 0),
        null == C && (C = !0),
        null == E && (E = "is_stuck"),
        S = O(document),
        null == x && (x = !0),
        s = function(e) {
            var t, i;
            return window.getComputedStyle ? (e[0],
            t = window.getComputedStyle(e[0]),
            i = parseFloat(t.getPropertyValue("width")) + parseFloat(t.getPropertyValue("margin-left")) + parseFloat(t.getPropertyValue("margin-right")),
            "border-box" !== t.getPropertyValue("box-sizing") && (i += parseFloat(t.getPropertyValue("border-left-width")) + parseFloat(t.getPropertyValue("border-right-width")) + parseFloat(t.getPropertyValue("padding-left")) + parseFloat(t.getPropertyValue("padding-right"))),
            i) : e.outerWidth(!0)
        }
        ,
        i = function(a, r, l, c, u, d, p, h) {
            var f, e, v, m, g, y, b, k, t, w, _, n;
            if (!a.data("sticky_kit")) {
                if (a.data("sticky_kit", !0),
                g = S.height(),
                b = a.parent(),
                null != P && (b = b.closest(P)),
                !b.length)
                    throw "failed to find stick parent";
                if (f = v = !1,
                (_ = null != $ ? $ && a.closest($) : O("<div />")) && _.css("position", a.css("position")),
                (k = function() {
                    var e, t, i;
                    if (!h)
                        return g = S.height(),
                        e = parseInt(b.css("border-top-width"), 10),
                        t = parseInt(b.css("padding-top"), 10),
                        r = parseInt(b.css("padding-bottom"), 10),
                        l = b.offset().top + e + t,
                        c = b.height(),
                        v && (f = v = !1,
                        null == $ && (a.insertAfter(_),
                        _.detach()),
                        a.css({
                            position: "",
                            top: "",
                            width: "",
                            bottom: ""
                        }).removeClass(E),
                        i = !0),
                        u = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - T,
                        d = a.outerHeight(!0),
                        p = a.css("float"),
                        _ && _.css({
                            width: s(a),
                            height: d,
                            display: a.css("display"),
                            "vertical-align": a.css("vertical-align"),
                            "float": p
                        }),
                        i ? n() : void 0
                }
                )(),
                d !== c)
                    return m = void 0,
                    y = T,
                    w = M,
                    n = function() {
                        var e, t, i, n, o, s;
                        if (!h)
                            return i = !1,
                            null != w && (w -= 1) <= 0 && (w = M,
                            k(),
                            i = !0),
                            i || S.height() === g || (k(),
                            i = !0),
                            n = j.scrollTop(),
                            null != m && (t = n - m),
                            m = n,
                            v ? (x && (o = c + l < n + d + y,
                            f && !o && (f = !1,
                            a.css({
                                position: "fixed",
                                bottom: "",
                                top: y
                            }).trigger("sticky_kit:unbottom"))),
                            n < u && (v = !1,
                            y = T,
                            null == $ && ("left" !== p && "right" !== p || a.insertAfter(_),
                            _.detach()),
                            e = {
                                position: "",
                                width: "",
                                top: ""
                            },
                            a.css(e).removeClass(E).trigger("sticky_kit:unstick")),
                            C && (s = j.height()) < d + T && (f || (y -= t,
                            y = Math.max(s - d, y),
                            y = Math.min(T, y),
                            v && a.css({
                                top: y + "px"
                            })))) : u < n && (v = !0,
                            (e = {
                                position: "fixed",
                                top: y
                            }).width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px",
                            a.css(e).addClass(E),
                            null == $ && (a.after(_),
                            "left" !== p && "right" !== p || _.append(a)),
                            a.trigger("sticky_kit:stick")),
                            v && x && (null == o && (o = c + l < n + d + y),
                            !f && o) ? (f = !0,
                            "static" === b.css("position") && b.css({
                                position: "relative"
                            }),
                            a.css({
                                position: "absolute",
                                bottom: r,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                    }
                    ,
                    t = function() {
                        return k(),
                        n()
                    }
                    ,
                    e = function() {
                        if (h = !0,
                        j.off("touchmove", n),
                        j.off("scroll", n),
                        j.off("resize", t),
                        O(document.body).off("sticky_kit:recalc", t),
                        a.off("sticky_kit:detach", e),
                        a.removeData("sticky_kit"),
                        a.css({
                            position: "",
                            bottom: "",
                            top: "",
                            width: ""
                        }),
                        b.position("position", ""),
                        v)
                            return null == $ && ("left" !== p && "right" !== p || a.insertAfter(_),
                            _.remove()),
                            a.removeClass(E)
                    }
                    ,
                    j.on("touchmove", n),
                    j.on("scroll", n),
                    j.on("resize", t),
                    O(document.body).on("sticky_kit:recalc", t),
                    a.on("sticky_kit:detach", e),
                    setTimeout(n, 0)
            }
        }
        ,
        n = 0,
        o = this.length; n < o; n++)
            t = this[n],
            i(O(t));
        return this
    }
}
.call(this),
function(c, o, v, m) {
    function t(e) {
        var t = e.currentTarget
          , i = e.data ? e.data.options : {}
          , n = e.data ? e.data.items : []
          , o = ""
          , s = 0;
        e.preventDefault(),
        e.stopPropagation(),
        v(t).attr("data-fancybox") && (o = v(t).data("fancybox")),
        o ? s = (n = n.length ? n.filter('[data-fancybox="' + o + '"]') : v("[data-fancybox=" + o + "]")).index(t) : n = [t],
        v.fancybox.open(n, i, s)
    }
    if (!v)
        return;
    var e, s = {
        speed: 330,
        loop: !0,
        opacity: "auto",
        margin: [44, 0],
        gutter: 30,
        infobar: !0,
        buttons: !0,
        slideShow: !0,
        fullScreen: !0,
        thumbs: !0,
        closeBtn: !0,
        smallBtn: "auto",
        image: {
            preload: "auto",
            protect: !1
        },
        ajax: {
            settings: {
                data: {
                    fancybox: !0
                }
            }
        },
        iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
            preload: !0,
            scrolling: "no",
            css: {}
        },
        baseClass: "",
        slideClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
        closeTpl: '<button data-fancybox-close class="fancybox-close-small">\xd7</button>',
        parentEl: "body",
        touch: !0,
        keyboard: !0,
        focus: !0,
        closeClickOutside: !0,
        beforeLoad: v.noop,
        afterLoad: v.noop,
        beforeMove: v.noop,
        afterMove: v.noop,
        onComplete: v.noop,
        onInit: v.noop,
        beforeClose: v.noop,
        afterClose: v.noop,
        onActivate: v.noop,
        onDeactivate: v.noop
    }, u = v(c), i = v(o), a = 0, n = function(e) {
        return e && e.hasOwnProperty && e instanceof v
    }, g = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || function(e) {
        c.setTimeout(e, 1e3 / 60)
    }
    , h = function(e) {
        var t;
        return "function" == typeof v && e instanceof v && (e = e[0]),
        0 < (t = e.getBoundingClientRect()).bottom && 0 < t.right && t.left < (c.innerWidth || o.documentElement.clientWidth) && t.top < (c.innerHeight || o.documentElement.clientHeight)
    }, r = function(e, t, i) {
        var n = this;
        n.opts = v.extend(!0, {
            index: i
        }, s, t || {}),
        n.id = n.opts.id || ++a,
        n.group = [],
        n.currIndex = parseInt(n.opts.index, 10) || 0,
        n.prevIndex = null,
        n.prevPos = null,
        n.currPos = 0,
        n.firstRun = null,
        n.createGroup(e),
        n.group.length && (n.$lastFocus = v(o.activeElement).blur(),
        n.slides = {},
        n.init(e))
    };
    v.extend(r.prototype, {
        init: function() {
            var e, t, i = this;
            i.scrollTop = u.scrollTop(),
            i.scrollLeft = u.scrollLeft(),
            v.fancybox.isTouch || v("html").hasClass("fancybox-enabled") || (e = v("body").width(),
            v("html").addClass("fancybox-enabled"),
            1 < (e = v("body").width() - e) && v('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + e + "px; }").appendTo("head")),
            t = v(i.opts.baseTpl).attr("id", "fancybox-container-" + i.id).data("FancyBox", i).addClass(i.opts.baseClass).hide().prependTo(i.opts.parentEl),
            i.$refs = {
                container: t,
                bg: t.find(".fancybox-bg"),
                controls: t.find(".fancybox-controls"),
                buttons: t.find(".fancybox-buttons"),
                slider_wrap: t.find(".fancybox-slider-wrap"),
                slider: t.find(".fancybox-slider"),
                caption: t.find(".fancybox-caption")
            },
            i.trigger("onInit"),
            i.activate(),
            i.current || i.jumpTo(i.currIndex)
        },
        createGroup: function(e) {
            var c = this
              , t = v.makeArray(e);
            v.each(t, function(e, t) {
                var i, n, o, s, a = {}, r = {}, l = [];
                v.isPlainObject(t) ? r = (a = t).opts || {} : "object" === v.type(t) && v(t).length ? (r = "options"in (l = (i = v(t)).data()) ? l.options : {},
                r = "object" === v.type(r) ? r : {},
                a.type = "type"in l ? l.type : r.type,
                a.src = "src"in l ? l.src : r.src || i.attr("href"),
                r.width = "width"in l ? l.width : r.width,
                r.height = "height"in l ? l.height : r.height,
                r.thumb = "thumb"in l ? l.thumb : r.thumb,
                r.selector = "selector"in l ? l.selector : r.selector,
                "srcset"in l && (r.image = {
                    srcset: l.srcset
                }),
                r.$orig = i) : a = {
                    type: "html",
                    content: t + ""
                },
                a.opts = v.extend(!0, {}, c.opts, r),
                n = a.type,
                o = a.src || "",
                n || (a.content ? n = "html" : o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? n = "pdf" : "#" === o.charAt(0) && (n = "inline"),
                a.type = n),
                a.index = c.group.length,
                a.opts.$orig && !a.opts.$orig.length && delete a.opts.$orig,
                !a.opts.$thumb && a.opts.$orig && (a.opts.$thumb = a.opts.$orig.find("img:first")),
                a.opts.$thumb && !a.opts.$thumb.length && delete a.opts.$thumb,
                "function" === v.type(a.opts.caption) ? a.opts.caption = a.opts.caption.apply(t, [c, a]) : "caption"in l ? a.opts.caption = l.caption : r.$orig && (a.opts.caption = i.attr("title")),
                a.opts.caption = a.opts.caption === m ? "" : a.opts.caption + "",
                "ajax" === n && 1 < (s = o.split(/\s+/, 2)).length && (a.src = s.shift(),
                a.opts.selector = s.shift()),
                "auto" == a.opts.smallBtn && (-1 < v.inArray(n, ["html", "inline", "ajax"]) ? (a.opts.buttons = !1,
                a.opts.smallBtn = !0) : a.opts.smallBtn = !1),
                "pdf" === n && (a.type = "iframe",
                a.opts.closeBtn = !0,
                a.opts.smallBtn = !1,
                a.opts.iframe.preload = !1),
                a.opts.modal && v.extend(!0, a.opts, {
                    infobar: 0,
                    buttons: 0,
                    keyboard: 0,
                    slideShow: 0,
                    fullScreen: 0,
                    closeClickOutside: 0
                }),
                c.group.push(a)
            })
        },
        addEvents: function() {
            var n = this
              , t = function() {
                u.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft),
                n.$refs.slider_wrap.show(),
                n.update()
            };
            n.removeEvents(),
            n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                n.close(e)
            }).on("click.fb-previous", "[data-fancybox-previous]", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                n.previous()
            }).on("click.fb-next", "[data-fancybox-next]", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                n.next()
            }),
            v(c).on("orientationchange.fb resize.fb", function(e) {
                g(function() {
                    e && e.originalEvent && "orientationchange" == e.originalEvent.type ? (n.$refs.slider_wrap.hide(),
                    g(t)) : t()
                })
            }),
            i.on("focusin.fb", function(e) {
                var t = v.fancybox ? v.fancybox.getInstance() : null;
                !t || v(e.target).hasClass("fancybox-container") || v.contains(t.$refs.container[0], e.target) || (e.stopPropagation(),
                t.focus(),
                u.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
            }),
            v(o).on("keydown.fb", function(e) {
                var t = n.current
                  , i = e.keyCode || e.which;
                if (t && t.opts.keyboard && !v(e.target).is("input") && !v(e.target).is("textarea")) {
                    if (8 === i || 27 === i)
                        return e.preventDefault(),
                        void n.close(e);
                    switch (i) {
                    case 37:
                    case 38:
                        e.preventDefault(),
                        n.previous();
                        break;
                    case 39:
                    case 40:
                        e.preventDefault(),
                        n.next();
                        break;
                    case 80:
                    case 32:
                        e.preventDefault(),
                        n.SlideShow && (e.preventDefault(),
                        n.SlideShow.toggle());
                        break;
                    case 70:
                        n.FullScreen && (e.preventDefault(),
                        n.FullScreen.toggle());
                        break;
                    case 71:
                        n.Thumbs && (e.preventDefault(),
                        n.Thumbs.toggle())
                    }
                }
            })
        },
        removeEvents: function() {
            u.off("scroll.fb resize.fb orientationchange.fb"),
            i.off("keydown.fb focusin.fb click.fb-close"),
            this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
        },
        previous: function(e) {
            this.jumpTo(this.currIndex - 1, e)
        },
        next: function(e) {
            this.jumpTo(this.currIndex + 1, e)
        },
        jumpTo: function(e, t) {
            var i, n, o, s, a = this;
            if (i = a.firstRun = null === a.firstRun,
            n = o = e = parseInt(e, 10),
            s = !!a.current && a.current.opts.loop,
            !a.isAnimating && (n != a.currIndex || i)) {
                if (1 < a.group.length && s)
                    n = (n %= a.group.length) < 0 ? a.group.length + n : n,
                    2 == a.group.length ? o = e - a.currIndex + a.currPos : (o = n - a.currIndex + a.currPos,
                    Math.abs(a.currPos - (o + a.group.length)) < Math.abs(a.currPos - o) ? o += a.group.length : Math.abs(a.currPos - (o - a.group.length)) < Math.abs(a.currPos - o) && (o -= a.group.length));
                else if (!a.group[n])
                    return void a.update(!1, !1, t);
                a.current && (a.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),
                a.updateSlide(a.current, !0)),
                a.prevIndex = a.currIndex,
                a.prevPos = a.currPos,
                a.currIndex = n,
                a.currPos = o,
                a.current = a.createSlide(o),
                1 < a.group.length && ((a.opts.loop || 0 <= o - 1) && a.createSlide(o - 1),
                (a.opts.loop || o + 1 < a.group.length) && a.createSlide(o + 1)),
                a.current.isMoved = !1,
                a.current.isComplete = !1,
                t = parseInt(t === m ? 1.5 * a.current.opts.speed : t, 10),
                a.trigger("beforeMove"),
                a.updateControls(),
                i && (a.current.$slide.addClass("fancybox-slide--current"),
                a.$refs.container.show(),
                g(function() {
                    a.$refs.bg.css("transition-duration", a.current.opts.speed + "ms"),
                    a.$refs.container.addClass("fancybox-container--ready")
                })),
                a.update(!0, !1, i ? 0 : t, function() {
                    a.afterMove()
                }),
                a.loadSlide(a.current),
                i && a.current.$ghost || a.preload()
            }
        },
        createSlide: function(e) {
            var t, i, n, o = this;
            if (i = (i = e % o.group.length) < 0 ? o.group.length + i : i,
            !o.slides[e] && o.group[i]) {
                if (o.opts.loop && 2 < o.group.length)
                    for (var s in o.slides)
                        if (o.slides[s].index === i)
                            return (n = o.slides[s]).pos = e,
                            o.slides[e] = n,
                            delete o.slides[s],
                            o.updateSlide(n),
                            n;
                t = v('<div class="fancybox-slide"></div>').appendTo(o.$refs.slider),
                o.slides[e] = v.extend(!0, {}, o.group[i], {
                    pos: e,
                    $slide: t,
                    isMoved: !1,
                    isLoaded: !1
                })
            }
            return o.slides[e]
        },
        zoomInOut: function(t, e, i) {
            var n, o, s, a = this, r = a.current, l = r.$placeholder, c = r.opts.opacity, u = r.opts.$thumb, d = u ? u.offset() : 0, p = r.$slide.offset();
            return !!(l && r.isMoved && d && h(u)) && (!("In" === t && !a.firstRun) && (v.fancybox.stop(l),
            a.isAnimating = !0,
            n = {
                top: d.top - p.top + parseFloat(u.css("border-top-width") || 0),
                left: d.left - p.left + parseFloat(u.css("border-left-width") || 0),
                width: u.width(),
                height: u.height(),
                scaleX: 1,
                scaleY: 1
            },
            "auto" == c && (c = .1 < Math.abs(r.width / r.height - n.width / n.height)),
            "In" === t ? (o = n,
            (s = a.getFitPos(r)).scaleX = s.width / o.width,
            s.scaleY = s.height / o.height,
            c && (o.opacity = .1,
            s.opacity = 1)) : (o = v.fancybox.getTranslate(l),
            s = n,
            r.$ghost && (r.$ghost.show(),
            r.$image && r.$image.remove()),
            o.scaleX = o.width / s.width,
            o.scaleY = o.height / s.height,
            o.width = s.width,
            o.height = s.height,
            c && (s.opacity = 0)),
            a.updateCursor(s.width, s.height),
            delete s.width,
            delete s.height,
            v.fancybox.setTranslate(l, o),
            l.show(),
            a.trigger("beforeZoom" + t),
            g(function() {
                l.css("transition", "all " + e + "ms"),
                v.fancybox.setTranslate(l, s),
                setTimeout(function() {
                    g(function() {
                        var e;
                        l.css("transition", "none"),
                        (e = v.fancybox.getTranslate(l)).scaleX = 1,
                        e.scaleY = 1,
                        v.fancybox.setTranslate(l, e),
                        a.trigger("afterZoom" + t),
                        i.apply(a),
                        a.isAnimating = !1
                    })
                }, e)
            }),
            !0))
        },
        canPan: function() {
            var e = this
              , t = e.current
              , i = t.$placeholder
              , n = !1;
            return i && (n = e.getFitPos(t),
            n = 1 < Math.abs(i.width() - n.width) || 1 < Math.abs(i.height() - n.height)),
            n
        },
        isScaledDown: function() {
            var e = this.current
              , t = e.$placeholder
              , i = !1;
            return t && (i = (i = v.fancybox.getTranslate(t)).width < e.width || i.height < e.height),
            i
        },
        scaleToActual: function(e, t, i) {
            var n, o, s, a, r, l = this, c = l.current, u = c.$placeholder, d = parseInt(c.$slide.width(), 10), p = parseInt(c.$slide.height(), 10), h = c.width, f = c.height;
            u && (l.isAnimating = !0,
            e = e === m ? .5 * d : e,
            t = t === m ? .5 * p : t,
            a = h / (n = v.fancybox.getTranslate(u)).width,
            r = f / n.height,
            o = .5 * d - .5 * h,
            s = .5 * p - .5 * f,
            d < h && (0 < (o = n.left * a - (e * a - e)) && (o = 0),
            o < d - h && (o = d - h)),
            p < f && (0 < (s = n.top * r - (t * r - t)) && (s = 0),
            s < p - f && (s = p - f)),
            l.updateCursor(h, f),
            v.fancybox.animate(u, null, {
                top: s,
                left: o,
                scaleX: a,
                scaleY: r
            }, i || c.opts.speed, function() {
                l.isAnimating = !1
            }))
        },
        scaleToFit: function(e) {
            var t, i = this, n = i.current, o = n.$placeholder;
            o && (i.isAnimating = !0,
            t = i.getFitPos(n),
            i.updateCursor(t.width, t.height),
            v.fancybox.animate(o, null, {
                top: t.top,
                left: t.left,
                scaleX: t.width / o.width(),
                scaleY: t.height / o.height()
            }, e || n.opts.speed, function() {
                i.isAnimating = !1
            }))
        },
        getFitPos: function(e) {
            var t, i, n, o, s, a = e.$placeholder || e.$content, r = e.width, l = e.height, c = e.opts.margin;
            return !(!a || !a.length || !r && !l) && ("number" === v.type(c) && (c = [c, c]),
            2 == c.length && (c = [c[0], c[1], c[0], c[1]]),
            u.width() < 800 && (c = [0, 0, 0, 0]),
            t = parseInt(e.$slide.width(), 10) - (c[1] + c[3]),
            i = parseInt(e.$slide.height(), 10) - (c[0] + c[2]),
            n = Math.min(1, t / r, i / l),
            o = Math.floor(n * r),
            s = Math.floor(n * l),
            {
                top: Math.floor(.5 * (i - s)) + c[0],
                left: Math.floor(.5 * (t - o)) + c[3],
                width: o,
                height: s
            })
        },
        update: function(e, i, t, n) {
            var o = this
              , s = o.current.pos * Math.floor(o.current.$slide.width()) * -1 - o.current.pos * o.current.opts.gutter;
            !0 !== o.isAnimating && (t = parseInt(t, 10) || 0,
            v.fancybox.stop(o.$refs.slider),
            !1 === e ? o.updateSlide(o.current, i) : v.each(o.slides, function(e, t) {
                o.updateSlide(t, i)
            }),
            t ? v.fancybox.animate(o.$refs.slider, null, {
                top: 0,
                left: s
            }, t, function() {
                o.current.isMoved = !0,
                "function" === v.type(n) && n.apply(o)
            }) : (v.fancybox.setTranslate(o.$refs.slider, {
                top: 0,
                left: s
            }),
            o.current.isMoved = !0,
            "function" === v.type(n) && n.apply(o)))
        },
        updateSlide: function(e, t) {
            var i, n = this, o = e.$placeholder;
            (e = e || n.current) && !n.isClosing && ((i = e.pos * Math.floor(e.$slide.width()) + e.pos * e.opts.gutter) !== e.leftPos && (v.fancybox.setTranslate(e.$slide, {
                top: 0,
                left: i
            }),
            e.leftPos = i),
            !1 !== t && o && (v.fancybox.setTranslate(o, n.getFitPos(e)),
            e.pos === n.currPos && n.updateCursor()),
            e.$slide.trigger("refresh"),
            n.trigger("onUpdate", e))
        },
        updateCursor: function(e, t) {
            var i = this
              , n = i.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
            !i.isClosing && i.opts.touch && ((e !== m && t !== m ? e < i.current.width && t < i.current.height : i.isScaledDown()) ? n.addClass("fancybox-controls--canzoomIn") : i.group.length < 2 ? n.addClass("fancybox-controls--canzoomOut") : n.addClass("fancybox-controls--canGrab"))
        },
        loadSlide: function(i) {
            var e, t, n, o = this;
            if (i && !i.isLoaded && !i.isLoading) {
                switch (i.isLoading = !0,
                o.trigger("beforeLoad", i),
                e = i.type,
                (t = i.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(i.opts.slideClass),
                e) {
                case "image":
                    o.setImage(i);
                    break;
                case "iframe":
                    o.setIframe(i);
                    break;
                case "html":
                    o.setContent(i, i.content);
                    break;
                case "inline":
                    v(i.src).length ? o.setContent(i, v(i.src)) : o.setError(i);
                    break;
                case "ajax":
                    o.showLoading(i),
                    n = v.ajax(v.extend({}, i.opts.ajax.settings, {
                        url: i.src,
                        success: function(e, t) {
                            "success" === t && o.setContent(i, e)
                        },
                        error: function(e, t) {
                            e && "abort" !== t && o.setError(i)
                        }
                    })),
                    t.one("onReset", function() {
                        n.abort()
                    });
                    break;
                default:
                    o.setError(i)
                }
                return !0
            }
        },
        setImage: function(e) {
            var t, i, n, o, s = this, a = e.opts.image.srcset;
            if (!e.isLoaded || e.hasError) {
                if (a) {
                    n = c.devicePixelRatio || 1,
                    o = c.innerWidth * n,
                    (i = a.split(",").map(function(e) {
                        var n = {};
                        return e.trim().split(/\s+/).forEach(function(e, t) {
                            var i = parseInt(e.substring(0, e.length - 1), 10);
                            if (0 === t)
                                return n.url = e;
                            i && (n.value = i,
                            n.postfix = e[e.length - 1])
                        }),
                        n
                    })).sort(function(e, t) {
                        return e.value - t.value
                    });
                    for (var r = 0; r < i.length; r++) {
                        var l = i[r];
                        if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= n) {
                            t = l;
                            break
                        }
                    }
                    !t && i.length && (t = i[i.length - 1]),
                    t && (e.src = t.url,
                    e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value,
                    e.width = t.value))
                }
                e.$placeholder = v('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide),
                !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width,
                e.height = e.opts.height,
                e.$ghost = v("<img />").one("load error", function() {
                    s.isClosing || (v("<img/>")[0].src = e.src,
                    s.revealImage(e, function() {
                        s.setBigImage(e),
                        s.firstRun && e.index === s.currIndex && s.preload()
                    }))
                }).addClass("fancybox-image").appendTo(e.$placeholder).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : s.setBigImage(e)
            } else
                s.afterLoad(e)
        },
        setBigImage: function(e) {
            var t = this
              , i = v("<img />");
            e.$image = i.one("error", function() {
                t.setError(e)
            }).one("load", function() {
                clearTimeout(e.timouts),
                e.timouts = null,
                t.isClosing || (e.width = this.naturalWidth,
                e.height = this.naturalHeight,
                e.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset),
                t.afterLoad(e),
                e.$ghost && (e.timouts = setTimeout(function() {
                    e.$ghost.hide()
                }, 350)))
            }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$placeholder),
            i[0].complete ? i.trigger("load") : i[0].error ? i.trigger("error") : e.timouts = setTimeout(function() {
                i[0].complete || e.hasError || t.showLoading(e)
            }, 150),
            e.opts.image.protect && v('<div class="fancybox-spaceball"></div>').appendTo(e.$placeholder).on("contextmenu.fb", function(e) {
                return 2 == e.button && e.preventDefault(),
                !0
            })
        },
        revealImage: function(e, t) {
            var i = this;
            t = t || v.noop,
            "image" !== e.type || e.hasError || !0 === e.isRevealed ? t.apply(i) : (e.isRevealed = !0,
            e.pos === i.currPos && i.zoomInOut("In", e.opts.speed, t) || (e.$ghost && !e.isLoaded && i.updateSlide(e, !0),
            e.pos === i.currPos ? v.fancybox.animate(e.$placeholder, {
                opacity: 0
            }, {
                opacity: 1
            }, 300, t) : e.$placeholder.show(),
            t.apply(i)))
        },
        setIframe: function(a) {
            var r, e = this, l = a.opts.iframe, t = a.$slide;
            a.$content = v('<div class="fancybox-content"></div>').css(l.css).appendTo(t),
            r = v(l.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", v.fancybox.isTouch ? "auto" : l.scrolling).appendTo(a.$content),
            l.preload ? (a.$content.addClass("fancybox-tmp"),
            e.showLoading(a),
            r.on("load.fb error.fb", function() {
                this.isReady = 1,
                a.$slide.trigger("refresh"),
                e.afterLoad(a)
            }),
            t.on("refresh.fb", function() {
                var e, t, i, n, o = a.$content;
                if (1 === r[0].isReady) {
                    try {
                        e = r.contents().find("body")
                    } catch (s) {}
                    e && e.length && (l.css.width === m || l.css.height === m) && (t = r[0].contentWindow.document.documentElement.scrollWidth,
                    i = Math.ceil(e.outerWidth(!0) + (o.width() - t)),
                    n = Math.ceil(e.outerHeight(!0)),
                    o.css({
                        width: l.css.width === m ? i + (o.outerWidth() - o.innerWidth()) : l.css.width,
                        height: l.css.height === m ? n + (o.outerHeight() - o.innerHeight()) : l.css.height
                    })),
                    o.removeClass("fancybox-tmp")
                }
            })) : this.afterLoad(a),
            r.attr("src", a.src),
            a.opts.smallBtn && a.$content.prepend(a.opts.closeTpl),
            t.one("onReset", function() {
                try {
                    v(this).find("iframe").hide().attr("src", "//about:blank")
                } catch (e) {}
                v(this).empty(),
                a.isLoaded = !1
            })
        },
        setContent: function(t, i) {
            var e = this;
            e.isClosing || (e.hideLoading(t),
            t.$slide.empty(),
            n(i) && i.parent().length ? (i.data("placeholder") && i.parents(".fancybox-slide").trigger("onReset"),
            i.data({
                placeholder: v("<div></div>").hide().insertAfter(i)
            }).css("display", "inline-block")) : ("string" === v.type(i) && 3 === (i = v("<div>").append(i).contents())[0].nodeType && (i = v("<div>").html(i)),
            t.opts.selector && (i = v("<div>").html(i).find(t.opts.selector))),
            t.$slide.one("onReset", function() {
                var e = n(i) ? i.data("placeholder") : 0;
                e && (i.hide().replaceAll(e),
                i.data("placeholder", null)),
                t.hasError || (v(this).empty(),
                t.isLoaded = !1)
            }),
            t.$content = v(i).appendTo(t.$slide),
            !0 === t.opts.smallBtn && t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl),
            this.afterLoad(t))
        },
        setError: function(e) {
            e.hasError = !0,
            this.setContent(e, e.opts.errorTpl)
        },
        showLoading: function(e) {
            var t = this;
            (e = e || t.current) && !e.$spinner && (e.$spinner = v(t.opts.spinnerTpl).appendTo(e.$slide))
        },
        hideLoading: function(e) {
            (e = e || this.current) && e.$spinner && (e.$spinner.remove(),
            delete e.$spinner)
        },
        afterMove: function() {
            var i = this
              , e = i.current
              , n = {};
            e && (e.$slide.siblings().trigger("onReset"),
            v.each(i.slides, function(e, t) {
                t.pos >= i.currPos - 1 && t.pos <= i.currPos + 1 ? n[t.pos] = t : t && t.$slide.remove()
            }),
            i.slides = n,
            i.trigger("afterMove"),
            e.isLoaded && i.complete())
        },
        afterLoad: function(e) {
            var t = this;
            t.isClosing || (e.isLoading = !1,
            e.isLoaded = !0,
            t.trigger("afterLoad", e),
            t.hideLoading(e),
            e.$ghost || t.updateSlide(e, !0),
            e.index === t.currIndex && e.isMoved ? t.complete() : e.$ghost || t.revealImage(e))
        },
        complete: function() {
            var e = this
              , t = e.current;
            e.revealImage(t, function() {
                t.isComplete = !0,
                t.$slide.addClass("fancybox-slide--complete"),
                e.updateCursor(),
                e.trigger("onComplete"),
                t.opts.focus && "image" !== t.type && "iframe" !== t.type && e.focus()
            })
        },
        preload: function() {
            var e, t, i = this;
            i.group.length < 2 || (e = i.slides[i.currPos + 1],
            t = i.slides[i.currPos - 1],
            e && "image" === e.type && i.loadSlide(e),
            t && "image" === t.type && i.loadSlide(t))
        },
        focus: function() {
            var e, t = this.current;
            (e = t && t.isComplete ? t.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null) && e.length || (e = this.$refs.container),
            e.focus(),
            this.$refs.slider_wrap.scrollLeft(0),
            t && t.$slide.scrollTop(0)
        },
        activate: function() {
            var t = this;
            v(".fancybox-container").each(function() {
                var e = v(this).data("FancyBox");
                e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
            }),
            t.current && (0 < t.$refs.container.index() && t.$refs.container.prependTo(o.body),
            t.updateControls()),
            t.trigger("onActivate"),
            t.addEvents()
        },
        close: function(e) {
            var t = this
              , i = t.current
              , n = i.opts.speed
              , o = v.proxy(function() {
                t.cleanUp(e)
            }, this);
            if (t.isAnimating || t.isClosing)
                return !1;
            !1 !== t.trigger("beforeClose", e) && (t.isClosing = !0,
            i.timouts && clearTimeout(i.timouts),
            !0 !== e && v.fancybox.stop(t.$refs.slider),
            t.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),
            i.$slide.removeClass("fancybox-slide--complete").siblings().remove(),
            i.isMoved || i.$slide.css("overflow", "visible"),
            t.removeEvents(),
            t.hideLoading(i),
            t.hideControls(),
            t.updateCursor(),
            t.$refs.bg.css("transition-duration", n + "ms"),
            this.$refs.container.removeClass("fancybox-container--ready"),
            !0 === e ? setTimeout(o, n) : t.zoomInOut("Out", n, o) || v.fancybox.animate(t.$refs.container, null, {
                opacity: 0
            }, n, "easeInSine", o))
        },
        cleanUp: function(e) {
            var t, i = this;
            i.$refs.slider.children().trigger("onReset"),
            i.$refs.container.empty().remove(),
            i.trigger("afterClose", e),
            i.current = null,
            (t = v.fancybox.getInstance()) ? t.activate() : (v("html").removeClass("fancybox-enabled"),
            v("#fancybox-noscroll").remove()),
            i.$lastFocus && i.$lastFocus.focus()
        },
        trigger: function(e, t) {
            var i, n = Array.prototype.slice.call(arguments, 1), o = this, s = t && t.opts ? t : o.current;
            if (s ? n.unshift(s) : s = o,
            n.unshift(o),
            v.isFunction(s.opts[e]) && (i = s.opts[e].apply(s, n)),
            !1 === i)
                return i;
            o.$refs.container.trigger(e + ".fb", n)
        },
        toggleControls: function(e) {
            this.isHiddenControls ? this.updateControls(e) : this.hideControls()
        },
        hideControls: function() {
            this.isHiddenControls = !0,
            this.$refs.container.removeClass("fancybox-show-controls"),
            this.$refs.container.removeClass("fancybox-show-caption")
        },
        updateControls: function(e) {
            var t = this
              , i = t.$refs.container
              , n = t.$refs.caption
              , o = t.current
              , s = o.index
              , a = o.opts
              , r = a.caption;
            this.isHiddenControls && !0 !== e || (this.isHiddenControls = !1,
            t.$refs.container.addClass("fancybox-show-controls"),
            i.toggleClass("fancybox-show-infobar", !!a.infobar && 1 < t.group.length).toggleClass("fancybox-show-buttons", !!a.buttons).toggleClass("fancybox-is-modal", !!a.modal),
            v(".fancybox-button--left", i).toggleClass("fancybox-button--disabled", !a.loop && s <= 0),
            v(".fancybox-button--right", i).toggleClass("fancybox-button--disabled", !a.loop && s >= t.group.length - 1),
            v(".fancybox-button--play", i).toggle(!!(a.slideShow && 1 < t.group.length)),
            v(".fancybox-button--close", i).toggle(!!a.closeBtn),
            v(".js-fancybox-count", i).html(t.group.length),
            v(".js-fancybox-index", i).html(s + 1),
            o.$slide.trigger("refresh"),
            n && n.empty(),
            r && r.length ? (n.html(r),
            this.$refs.container.addClass("fancybox-show-caption "),
            t.$caption = n) : this.$refs.container.removeClass("fancybox-show-caption"))
        }
    }),
    v.fancybox = {
        version: "3.0.39",
        defaults: s,
        getInstance: function(e) {
            var t = v('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox")
              , i = Array.prototype.slice.call(arguments, 1);
            return t instanceof r && ("string" === v.type(e) ? t[e].apply(t, i) : "function" === v.type(e) && e.apply(t, i),
            t)
        },
        open: function(e, t, i) {
            return new r(e,t,i)
        },
        close: function(e) {
            var t = this.getInstance();
            t && (t.close(),
            !0 === e && this.close())
        },
        isTouch: o.createTouch !== m && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
        use3d: (e = o.createElement("div"),
        c.getComputedStyle(e).getPropertyValue("transform") && !(o.documentMode && o.documentMode <= 11)),
        getTranslate: function(e) {
            var t, i;
            return !(!e || !e.length) && (t = e.get(0).getBoundingClientRect(),
            {
                top: (i = (i = (i = e.eq(0).css("transform")) && -1 !== i.indexOf("matrix") ? (i = (i = i.split("(")[1]).split(")")[0]).split(",") : []).length ? (i = 10 < i.length ? [i[13], i[12], i[0], i[5]] : [i[5], i[4], i[0], i[3]]).map(parseFloat) : [0, 0, 1, 1])[0],
                left: i[1],
                scaleX: i[2],
                scaleY: i[3],
                opacity: parseFloat(e.css("opacity")),
                width: t.width,
                height: t.height
            })
        },
        setTranslate: function(e, t) {
            var i = ""
              , n = {};
            if (e && t)
                return t.left === m && t.top === m || (i = (t.left === m ? e.position().top : t.left) + "px, " + (t.top === m ? e.position().top : t.top) + "px",
                i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"),
                t.scaleX !== m && t.scaleY !== m && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"),
                i.length && (n.transform = i),
                t.opacity !== m && (n.opacity = t.opacity),
                t.width !== m && (n.width = t.width),
                t.height !== m && (n.height = t.height),
                e.css(n)
        },
        easing: {
            easeOutCubic: function(e, t, i, n) {
                return i * ((e = e / n - 1) * e * e + 1) + t
            },
            easeInCubic: function(e, t, i, n) {
                return i * (e /= n) * e * e + t
            },
            easeOutSine: function(e, t, i, n) {
                return i * Math.sin(e / n * (Math.PI / 2)) + t
            },
            easeInSine: function(e, t, i, n) {
                return -i * Math.cos(e / n * (Math.PI / 2)) + i + t
            }
        },
        stop: function(e) {
            e.removeData("animateID")
        },
        animate: function(i, n, o, s, a, e) {
            var r, l, c, u = this, d = null, p = 0, h = function() {
                o.scaleX !== m && o.scaleY !== m && n && n.width !== m && n.height !== m && (o.width = n.width * o.scaleX,
                o.height = n.height * o.scaleY,
                o.scaleX = 1,
                o.scaleY = 1),
                u.setTranslate(i, o),
                e()
            }, f = function(e) {
                if (r = [],
                l = 0,
                i.length && i.data("animateID") === c)
                    if (e = e || Date.now(),
                    d && (l = e - d),
                    d = e,
                    s <= (p += l))
                        h();
                    else {
                        for (var t in o)
                            o.hasOwnProperty(t) && n[t] !== m && (n[t] == o[t] ? r[t] = o[t] : r[t] = u.easing[a](p, n[t], o[t] - n[t], s));
                        u.setTranslate(i, r),
                        g(f)
                    }
            };
            u.animateID = c = u.animateID === m ? 1 : u.animateID + 1,
            i.data("animateID", c),
            e === m && "function" == v.type(a) && (e = a,
            a = m),
            a || (a = "easeOutCubic"),
            e = e || v.noop,
            n ? this.setTranslate(i, n) : n = this.getTranslate(i),
            s ? (i.show(),
            g(f)) : h()
        }
    },
    v.fn.fancybox = function(e) {
        return this.off("click.fb-start").on("click.fb-start", {
            items: this,
            options: e || {}
        }, t),
        this
    }
    ,
    v(o).on("click.fb-start", "[data-fancybox]", t)
}(window, document, window.jQuery),
function(h) {
    var f = function(i, e, t) {
        if (i)
            return t = t || "",
            "object" === h.type(t) && (t = h.param(t, !0)),
            h.each(e, function(e, t) {
                i = i.replace("$" + e, t || "")
            }),
            t.length && (i += (0 < i.indexOf("?") ? "&" : "?") + t),
            i
    }
      , i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        google_maps: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        }
    };
    h(document).on("onInit.fb", function(e, t) {
        h.each(t.group, function(e, o) {
            var s, a, r, l, c, u, d = o.src || "", p = !1;
            o.type || (h.each(i, function(e, t) {
                if (a = d.match(t.matcher),
                c = {},
                u = e,
                a) {
                    if (p = t.type,
                    t.paramPlace && a[t.paramPlace]) {
                        "?" == (l = a[t.paramPlace])[0] && (l = l.substring(1)),
                        l = l.split("&");
                        for (var i = 0; i < l.length; ++i) {
                            var n = l[i].split("=", 2);
                            2 == n.length && (c[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
                        }
                    }
                    return r = h.extend(!0, {}, t.params, o.opts[e], c),
                    d = "function" === h.type(t.url) ? t.url.call(this, a, r, o) : f(t.url, a, r),
                    s = "function" === h.type(t.thumb) ? t.thumb.call(this, a, r, o) : f(t.thumb, a),
                    "vimeo" === u && (d = d.replace("&%23", "#")),
                    !1
                }
            }),
            p ? (o.src = d,
            o.type = p,
            o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s),
            "iframe" === p && (h.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    scrolling: "no"
                },
                smallBtn: !1,
                closeBtn: !0,
                fullScreen: !1,
                slideShow: !1
            }),
            o.opts.slideClass += " fancybox-slide--video")) : o.type = "iframe")
        })
    })
}(window.jQuery),
function(f, e, v) {
    var m = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || function(e) {
        f.setTimeout(e, 1e3 / 60)
    }
      , r = function(e) {
        var t = [];
        for (var i in e = (e = e.originalEvent || e || f.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e])
            e[i].pageX ? t.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && t.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
        return t
    }
      , g = function(e, t, i) {
        return t && e ? "x" === i ? e.x - t.x : "y" === i ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }
      , s = function(e) {
        return e.is("a") || e.is("button") || e.is("input") || e.is("select") || e.is("textarea") || v.isFunction(e.get(0).onclick)
    }
      , i = function(e) {
        var t = f.getComputedStyle(e)["overflow-y"]
          , i = f.getComputedStyle(e)["overflow-x"]
          , n = ("scroll" === t || "auto" === t) && e.scrollHeight > e.clientHeight
          , o = ("scroll" === i || "auto" === i) && e.scrollWidth > e.clientWidth;
        return n || o
    }
      , a = function(e) {
        for (var t = !1; !(t = i(e.get(0))) && (e = e.parent()).length && !e.hasClass("fancybox-slider") && !e.is("body"); )
            ;
        return t
    }
      , n = function(e) {
        var t = this;
        t.instance = e,
        t.$wrap = e.$refs.slider_wrap,
        t.$slider = e.$refs.slider,
        t.$container = e.$refs.container,
        t.destroy(),
        t.$wrap.on("touchstart.fb mousedown.fb", v.proxy(t, "ontouchstart"))
    };
    n.prototype.destroy = function() {
        this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
    }
    ,
    n.prototype.ontouchstart = function(e) {
        var t = this
          , i = v(e.target)
          , n = t.instance.current
          , o = n.$content || n.$placeholder;
        return t.startPoints = r(e),
        t.$target = i,
        t.$content = o,
        t.canvasWidth = Math.round(n.$slide[0].clientWidth),
        t.canvasHeight = Math.round(n.$slide[0].clientHeight),
        (t.startEvent = e).originalEvent.clientX > t.canvasWidth || (n.opts.touch ? void (s(i) || s(i.parent()) || a(i) && !i.hasClass("fancybox-slide") || e.originalEvent && 2 == e.originalEvent.button || (e.stopPropagation(),
        e.preventDefault(),
        !n || t.instance.isAnimating || t.instance.isClosing || !t.startPoints || 1 < t.startPoints.length && !n.isMoved || (t.$wrap.off("touchmove.fb mousemove.fb", v.proxy(t, "ontouchmove")),
        t.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", v.proxy(t, "ontouchend")),
        t.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", v.proxy(t, "ontouchend")),
        t.$wrap.on("touchmove.fb mousemove.fb", v.proxy(t, "ontouchmove")),
        t.startTime = (new Date).getTime(),
        t.distanceX = t.distanceY = t.distance = 0,
        t.canTap = !1,
        t.isPanning = !1,
        t.isSwiping = !1,
        t.isZooming = !1,
        t.sliderStartPos = v.fancybox.getTranslate(t.$slider),
        t.contentStartPos = v.fancybox.getTranslate(t.$content),
        t.contentLastPos = null,
        1 !== t.startPoints.length || t.isZooming || (t.canTap = n.isMoved,
        "image" === n.type && (t.contentStartPos.width > t.canvasWidth + 1 || t.contentStartPos.height > t.canvasHeight + 1) ? (v.fancybox.stop(t.$content),
        t.isPanning = !0) : (v.fancybox.stop(t.$slider),
        t.isSwiping = !0),
        t.$container.addClass("fancybox-controls--isGrabbing")),
        2 === t.startPoints.length && n.isMoved && !n.hasError && "image" === n.type && (n.isLoaded || n.$ghost) && (t.isZooming = !0,
        t.isSwiping = !1,
        t.isPanning = !1,
        v.fancybox.stop(t.$content),
        t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - v(f).scrollLeft(),
        t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - v(f).scrollTop(),
        t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width,
        t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height,
        t.startDistanceBetweenFingers = g(t.startPoints[0], t.startPoints[1]))))) : (t.endPoints = t.startPoints,
        t.ontap()))
    }
    ,
    n.prototype.ontouchmove = function(e) {
        var t = this;
        e.preventDefault(),
        t.newPoints = r(e),
        t.newPoints && t.newPoints.length && (t.distanceX = g(t.newPoints[0], t.startPoints[0], "x"),
        t.distanceY = g(t.newPoints[0], t.startPoints[0], "y"),
        t.distance = g(t.newPoints[0], t.startPoints[0]),
        0 < t.distance && (t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))
    }
    ,
    n.prototype.onSwipe = function() {
        var e, t = this, i = t.isSwiping, n = t.sliderStartPos.left;
        !0 === i ? 10 < Math.abs(t.distance) && (t.instance.group.length < 2 ? t.isSwiping = "y" : !t.instance.current.isMoved || !1 === t.instance.opts.touch.vertical || "auto" === t.instance.opts.touch.vertical && 800 < v(f).width() ? t.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(t.distanceY, t.distanceX) / Math.PI),
        t.isSwiping = 45 < e && e < 135 ? "y" : "x"),
        t.canTap = !1,
        t.instance.current.isMoved = !1,
        t.startPoints = t.newPoints) : ("x" == i && (!t.instance.current.opts.loop && 0 === t.instance.current.index && 0 < t.distanceX ? n += Math.pow(t.distanceX, .8) : !t.instance.current.opts.loop && t.instance.current.index === t.instance.group.length - 1 && t.distanceX < 0 ? n -= Math.pow(-t.distanceX, .8) : n += t.distanceX),
        t.sliderLastPos = {
            top: "x" == i ? 0 : t.sliderStartPos.top + t.distanceY,
            left: n
        },
        m(function() {
            v.fancybox.setTranslate(t.$slider, t.sliderLastPos)
        }))
    }
    ,
    n.prototype.onPan = function() {
        var e, t, i, n = this;
        n.canTap = !1,
        e = n.contentStartPos.width > n.canvasWidth ? n.contentStartPos.left + n.distanceX : n.contentStartPos.left,
        t = n.contentStartPos.top + n.distanceY,
        (i = n.limitMovement(e, t, n.contentStartPos.width, n.contentStartPos.height)).scaleX = n.contentStartPos.scaleX,
        i.scaleY = n.contentStartPos.scaleY,
        n.contentLastPos = i,
        m(function() {
            v.fancybox.setTranslate(n.$content, n.contentLastPos)
        })
    }
    ,
    n.prototype.limitMovement = function(e, t, i, n) {
        var o, s, a, r, l = this, c = l.canvasWidth, u = l.canvasHeight, d = l.contentStartPos.left, p = l.contentStartPos.top, h = l.distanceX, f = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * i),
        s = Math.max(0, .5 * u - .5 * n),
        a = Math.min(c - i, .5 * c - .5 * i),
        r = Math.min(u - n, .5 * u - .5 * n),
        c < i && (0 < h && o < e && (e = o - 1 + Math.pow(-o + d + h, .8) || 0),
        h < 0 && e < a && (e = a + 1 - Math.pow(a - d - h, .8) || 0)),
        u < n && (0 < f && s < t && (t = s - 1 + Math.pow(-s + p + f, .8) || 0),
        f < 0 && t < r && (t = r + 1 - Math.pow(r - p - f, .8) || 0)),
        {
            top: t,
            left: e
        }
    }
    ,
    n.prototype.limitPosition = function(e, t, i, n) {
        var o = this
          , s = o.canvasWidth
          , a = o.canvasHeight;
        return e = s < i ? (e = 0 < e ? 0 : e) < s - i ? s - i : e : Math.max(0, s / 2 - i / 2),
        {
            top: t = a < n ? (t = 0 < t ? 0 : t) < a - n ? a - n : t : Math.max(0, a / 2 - n / 2),
            left: e
        }
    }
    ,
    n.prototype.onZoom = function() {
        var e = this
          , t = e.contentStartPos.width
          , i = e.contentStartPos.height
          , n = e.contentStartPos.left
          , o = e.contentStartPos.top
          , s = g(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers
          , a = Math.floor(t * s)
          , r = Math.floor(i * s)
          , l = (t - a) * e.percentageOfImageAtPinchPointX
          , c = (i - r) * e.percentageOfImageAtPinchPointY
          , u = (e.newPoints[0].x + e.newPoints[1].x) / 2 - v(f).scrollLeft()
          , d = (e.newPoints[0].y + e.newPoints[1].y) / 2 - v(f).scrollTop()
          , p = u - e.centerPointStartX
          , h = {
            top: o + (c + (d - e.centerPointStartY)),
            left: n + (l + p),
            scaleX: e.contentStartPos.scaleX * s,
            scaleY: e.contentStartPos.scaleY * s
        };
        e.canTap = !1,
        e.newWidth = a,
        e.newHeight = r,
        e.contentLastPos = h,
        m(function() {
            v.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    n.prototype.ontouchend = function(e) {
        var t = this
          , i = t.instance.current
          , n = Math.max((new Date).getTime() - t.startTime, 1)
          , o = t.isSwiping
          , s = t.isPanning
          , a = t.isZooming;
        if (t.endPoints = r(e),
        t.$container.removeClass("fancybox-controls--isGrabbing"),
        t.$wrap.off("touchmove.fb mousemove.fb", v.proxy(this, "ontouchmove")),
        t.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", v.proxy(this, "ontouchend")),
        t.isSwiping = !1,
        t.isPanning = !1,
        t.isZooming = !1,
        t.canTap)
            return t.ontap();
        t.velocityX = t.distanceX / n * .5,
        t.velocityY = t.distanceY / n * .5,
        t.speed = i.opts.speed || 330,
        t.speedX = Math.max(.75 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityX) * t.speed)),
        t.speedY = Math.max(.75 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityY) * t.speed)),
        s ? t.endPanning() : a ? t.endZooming() : t.endSwiping(o)
    }
    ,
    n.prototype.endSwiping = function(e) {
        var t = this;
        "y" == e && 50 < Math.abs(t.distanceY) ? (v.fancybox.animate(t.$slider, null, {
            top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
            left: t.sliderStartPos.left,
            opacity: 0
        }, t.speedY),
        t.instance.close(!0)) : "x" == e && 50 < t.distanceX ? t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 ? t.instance.next(t.speedX) : t.instance.update(!1, !0, 150)
    }
    ,
    n.prototype.endPanning = function() {
        var e, t, i, n = this;
        n.contentLastPos && (e = n.contentLastPos.left + n.velocityX * n.speed * 2,
        t = n.contentLastPos.top + n.velocityY * n.speed * 2,
        (i = n.limitPosition(e, t, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width,
        i.height = n.contentStartPos.height,
        v.fancybox.animate(n.$content, null, i, n.speed, "easeOutSine"))
    }
    ,
    n.prototype.endZooming = function() {
        var e, t, i, n, o = this, s = o.instance.current, a = o.newWidth, r = o.newHeight;
        o.contentLastPos && (e = o.contentLastPos.left,
        n = {
            top: t = o.contentLastPos.top,
            left: e,
            width: a,
            height: r,
            scaleX: 1,
            scaleY: 1
        },
        v.fancybox.setTranslate(o.$content, n),
        a < o.canvasWidth && r < o.canvasHeight ? o.instance.scaleToFit(150) : a > s.width || r > s.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (i = o.limitPosition(e, t, a, r),
        v.fancybox.animate(o.$content, null, i, o.speed, "easeOutSine")))
    }
    ,
    n.prototype.ontap = function() {
        var e = this
          , t = e.instance
          , i = t.current
          , n = e.endPoints[0].x
          , o = e.endPoints[0].y;
        if (n -= e.$wrap.offset().left,
        o -= e.$wrap.offset().top,
        t.SlideShow && t.SlideShow.isActive && t.SlideShow.stop(),
        !v.fancybox.isTouch)
            return i.opts.closeClickOutside && e.$target.is(".fancybox-slide") ? void t.close(e.startEvent) : void ("image" == i.type && i.isMoved && (t.canPan() ? t.scaleToFit() : t.isScaledDown() ? t.scaleToActual(n, o) : t.group.length < 2 && t.close(e.startEvent)));
        if (e.tapped) {
            if (clearTimeout(e.tapped),
            e.tapped = null,
            50 < Math.abs(n - e.x) || 50 < Math.abs(o - e.y) || !i.isMoved)
                return this;
            "image" == i.type && (i.isLoaded || i.$ghost) && (t.canPan() ? t.scaleToFit() : t.isScaledDown() && t.scaleToActual(n, o))
        } else
            e.x = n,
            e.y = o,
            e.tapped = setTimeout(function() {
                e.tapped = null,
                t.toggleControls(!0)
            }, 300);
        return this
    }
    ,
    v(e).on("onActivate.fb", function(e, t) {
        t.Guestures || (t.Guestures = new n(t))
    }),
    v(e).on("beforeClose.fb", function(e, t) {
        t.Guestures && t.Guestures.destroy()
    })
}(window, document, window.jQuery),
function(e, t) {
    var i = function(e) {
        this.instance = e,
        this.init()
    };
    t.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var e = this;
            e.$button = t('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(e.instance.$refs.buttons),
            e.instance.$refs.container.on("click", "[data-fancybox-play]", function() {
                e.toggle()
            })
        },
        set: function() {
            var e = this;
            e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.instance.next()
            }, e.instance.current.opts.slideShow.speed || e.speed) : e.stop()
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer),
            e.timer = null
        },
        start: function() {
            var e = this;
            e.stop(),
            e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) && (e.instance.$refs.container.on({
                "beforeLoad.fb.player": t.proxy(e, "clear"),
                "onComplete.fb.player": t.proxy(e, "set")
            }),
            e.isActive = !0,
            e.instance.current.isComplete && e.set(),
            e.instance.$refs.container.trigger("onPlayStart"),
            e.$button.addClass("fancybox-button--pause"))
        },
        stop: function() {
            var e = this;
            e.clear(),
            e.instance.$refs.container.trigger("onPlayEnd").off(".player"),
            e.$button.removeClass("fancybox-button--pause"),
            e.isActive = !1
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }),
    t(e).on("onInit.fb", function(e, t) {
        t.opts.slideShow && !t.SlideShow && 1 < t.group.length && (t.SlideShow = new i(t))
    }),
    t(e).on("beforeClose.fb onDeactivate.fb", function(e, t) {
        t.SlideShow && t.SlideShow.stop()
    })
}(document, window.jQuery),
function(e, t) {
    var i = function(e) {
        this.instance = e,
        this.init()
    };
    t.extend(i.prototype, {
        $button: null,
        init: function() {
            var i = this;
            i.isAvailable() && (i.$button = t('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(i.instance.$refs.buttons),
            i.instance.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                i.toggle()
            }),
            t(e).on("onUpdate.fb", function(e, t) {
                i.$button.toggle(!!t.current.opts.fullScreen),
                i.$button.toggleClass("fancybox-button-shrink", i.isActivated())
            }),
            t(e).on("afterClose.fb", function() {
                i.exit()
            }))
        },
        isAvailable: function() {
            var e = this.instance.$refs.container.get(0);
            return !!(e.requestFullscreen || e.msRequestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullscreen)
        },
        isActivated: function() {
            return !!(e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement)
        },
        launch: function() {
            var e = this.instance.$refs.container.get(0);
            e && !this.instance.isClosing && (e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen(e.ALLOW_KEYBOARD_INPUT))
        },
        exit: function() {
            e.exitFullscreen ? e.exitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitExitFullscreen && e.webkitExitFullscreen()
        },
        toggle: function() {
            this.isActivated() ? this.exit() : this.isAvailable() && this.launch()
        }
    }),
    t(e).on("onInit.fb", function(e, t) {
        t.opts.fullScreen && !t.FullScreen && (t.FullScreen = new i(t))
    })
}(document, window.jQuery),
function(e, r) {
    var o = function(e) {
        this.instance = e,
        this.init()
    };
    r.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this;
            t.$button = r('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function(e) {
                e.stopPropagation(),
                e.preventDefault(),
                t.toggle()
            })
        },
        create: function() {
            var i, n, e = this.instance;
            this.$grid = r('<div class="fancybox-thumbs"></div>').appendTo(e.$refs.container),
            i = "<ul>",
            r.each(e.group, function(e, t) {
                (n = t.opts.thumb || (t.opts.$thumb ? t.opts.$thumb.attr("src") : null)) || "image" !== t.type || (n = t.src),
                n && n.length && (i += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }),
            i += "</ul>",
            this.$list = r(i).appendTo(this.$grid).on("click touchstart", "li", function() {
                e.jumpTo(r(this).data("index"))
            }),
            this.$list.find("img").hide().one("load", function() {
                var e, t, i, n, o = r(this).parent().removeClass("fancybox-thumbs-loading"), s = o.outerWidth(), a = o.outerHeight();
                e = this.naturalWidth || this.width,
                n = (t = this.naturalHeight || this.height) / a,
                1 <= (i = e / s) && 1 <= n && (n < i ? (e /= n,
                t = a) : (e = s,
                t /= i)),
                r(this).css({
                    width: Math.floor(e),
                    height: Math.floor(t),
                    "margin-top": Math.min(0, Math.floor(.3 * a - .3 * t)),
                    "margin-left": Math.min(0, Math.floor(.5 * s - .5 * e))
                }).show()
            }).each(function() {
                this.src = r(this).data("src")
            })
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        },
        close: function() {
            this.$grid.hide()
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible),
            this.isVisible ? (this.$grid || this.create(),
            this.$grid.show(),
            this.focus()) : this.$grid && this.$grid.hide(),
            this.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible ? this.hide() : this.show()
        }
    }),
    r(e).on("onInit.fb", function(e, t) {
        var i = t.group[0]
          , n = t.group[1];
        t.opts.thumbs && !t.Thumbs && 1 < t.group.length && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && (t.Thumbs = new o(t))
    }),
    r(e).on("beforeMove.fb", function(e, t, i) {
        var n = t.Thumbs;
        n && (i.modal ? (n.$button.hide(),
        n.hide()) : (!0 === t.opts.thumbs.showOnStart && t.firstRun && n.show(),
        n.$button.show(),
        n.isVisible && n.focus()))
    }),
    r(e).on("beforeClose.fb", function(e, t) {
        t.Thumbs && t.Thumbs.isVisible && !1 !== t.opts.thumbs.hideOnClosing && t.Thumbs.close(),
        t.Thumbs = null
    })
}(document, window.jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function(l) {
    var o, s, c = {
        interval: 100,
        sensitivity: 6,
        timeout: 0
    }, u = 0, d = function(e) {
        o = e.pageX,
        s = e.pageY
    }, p = function(e, t, i, n) {
        if (Math.sqrt((i.pX - o) * (i.pX - o) + (i.pY - s) * (i.pY - s)) < n.sensitivity)
            return t.off(i.event, d),
            delete i.timeoutId,
            i.isActive = !0,
            e.pageX = o,
            e.pageY = s,
            delete i.pX,
            delete i.pY,
            n.over.apply(t[0], [e]);
        i.pX = o,
        i.pY = s,
        i.timeoutId = setTimeout(function() {
            p(e, t, i, n)
        }, n.interval)
    }, h = function(e, t, i, n) {
        return delete t.data("hoverIntent")[i.id],
        n.apply(t[0], [e])
    };
    l.fn.hoverIntent = function(e, t, i) {
        var a = u++
          , r = l.extend({}, c);
        l.isPlainObject(e) ? (r = l.extend(r, e),
        l.isFunction(r.out) || (r.out = r.over)) : r = l.isFunction(t) ? l.extend(r, {
            over: e,
            out: t,
            selector: i
        }) : l.extend(r, {
            over: e,
            out: e,
            selector: t
        });
        var n = function(e) {
            var t = l.extend({}, e)
              , i = l(this)
              , n = i.data("hoverIntent");
            n || i.data("hoverIntent", n = {});
            var o = n[a];
            o || (n[a] = o = {
                id: a
            }),
            o.timeoutId && (o.timeoutId = clearTimeout(o.timeoutId));
            var s = o.event = "mousemove.hoverIntent.hoverIntent" + a;
            if ("mouseenter" === e.type) {
                if (o.isActive)
                    return;
                o.pX = t.pageX,
                o.pY = t.pageY,
                i.off(s, d).on(s, d),
                o.timeoutId = setTimeout(function() {
                    p(t, i, o, r)
                }, r.interval)
            } else {
                if (!o.isActive)
                    return;
                i.off(s, d),
                o.timeoutId = setTimeout(function() {
                    h(t, i, o, r.out)
                }, r.timeout)
            }
        };
        return this.on({
            "mouseenter.hoverIntent": n,
            "mouseleave.hoverIntent": n
        }, r.selector)
    }
}),
function(l, n, e, c) {
    var o = l(n);
    l.fn.lazyload = function(e) {
        function t() {
            var t = 0;
            a.each(function() {
                var e = l(this);
                if (!r.skip_invisible || e.is(":visible"))
                    if (l.abovethetop(this, r) || l.leftofbegin(this, r))
                        ;
                    else if (l.belowthefold(this, r) || l.rightoffold(this, r)) {
                        if (++t > r.failure_limit)
                            return !1
                    } else
                        e.trigger("appear"),
                        t = 0
            })
        }
        var i, a = this, r = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll.lazyload",
            effect: "show",
            container: n,
            data_attribute: "original",
            data_srcset: "srcset",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
        };
        return e && (c !== e.failurelimit && (e.failure_limit = e.failurelimit,
        delete e.failurelimit),
        c !== e.effectspeed && (e.effect_speed = e.effectspeed,
        delete e.effectspeed),
        l.extend(r, e)),
        i = r.container === c || r.container === n ? o : l(r.container),
        0 === r.event.indexOf("scroll") && i.off(r.event).on(r.event, function() {
            return t()
        }),
        this.each(function() {
            var o = this
              , s = l(o);
            o.loaded = !1,
            s.attr("src") !== c && !1 !== s.attr("src") || s.is("img") && s.attr("src", r.placeholder),
            s.one("appear", function() {
                if (!this.loaded) {
                    if (r.appear) {
                        var e = a.length;
                        r.appear.call(o, e, r)
                    }
                    l("<img />").one("load", function() {
                        var e = s.attr("data-" + r.data_attribute)
                          , t = s.attr("data-" + r.data_srcset);
                        e != s.attr("src") && (s.hide(),
                        s.is("img") && (s.attr("src", e),
                        null != t && s.attr("srcset", t)),
                        s.is("video") ? s.attr("poster", e) : s.css("background-image", "url('" + e + "')"),
                        s[r.effect](r.effect_speed)),
                        o.loaded = !0;
                        var i = l.grep(a, function(e) {
                            return !e.loaded
                        });
                        if (a = l(i),
                        r.load) {
                            var n = a.length;
                            r.load.call(o, n, r)
                        }
                    }).attr({
                        src: s.attr("data-" + r.data_attribute),
                        srcset: s.attr("data-" + r.data_srcset) || ""
                    })
                }
            }),
            0 !== r.event.indexOf("scroll") && s.off(r.event).on(r.event, function() {
                o.loaded || s.trigger("appear")
            })
        }),
        o.off("resize.lazyload").bind("resize.lazyload", function() {
            t()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.on("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && a.each(function() {
                l(this).trigger("appear")
            })
        }),
        l(function() {
            t()
        }),
        this
    }
    ,
    l.belowthefold = function(e, t) {
        return (t.container === c || t.container === n ? (n.innerHeight ? n.innerHeight : o.height()) + o.scrollTop() : l(t.container).offset().top + l(t.container).height()) <= l(e).offset().top - t.threshold
    }
    ,
    l.rightoffold = function(e, t) {
        return (t.container === c || t.container === n ? o.width() + o.scrollLeft() : l(t.container).offset().left + l(t.container).width()) <= l(e).offset().left - t.threshold
    }
    ,
    l.abovethetop = function(e, t) {
        return (t.container === c || t.container === n ? o.scrollTop() : l(t.container).offset().top) >= l(e).offset().top + t.threshold + l(e).height()
    }
    ,
    l.leftofbegin = function(e, t) {
        return (t.container === c || t.container === n ? o.scrollLeft() : l(t.container).offset().left) >= l(e).offset().left + t.threshold + l(e).width()
    }
    ,
    l.inviewport = function(e, t) {
        return !(l.rightoffold(e, t) || l.leftofbegin(e, t) || l.belowthefold(e, t) || l.abovethetop(e, t))
    }
    ,
    l.extend(l.expr[":"], {
        "below-the-fold": function(e) {
            return l.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !l.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return l.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !l.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return l.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !l.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return l.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !l.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
function webpackUniversalModuleDefinition(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t(require("jquery"));
    else if ("function" == typeof define && define.amd)
        define(["jquery"], t);
    else {
        var i = "object" == typeof exports ? t(require("jquery")) : t(e.jQuery);
        for (var n in i)
            ("object" == typeof exports ? exports : e)[n] = i[n]
    }
}(this, function(t) {
    function o(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    return i = [function(e) {
        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}')
    }
    , function(e, t, i) {
        function n(e, t, i, n, o) {
            var s, a = this.opts;
            if (void 0 === t)
                return "selectionStart"in e && "selectionEnd"in e ? (t = e.selectionStart,
                i = e.selectionEnd) : window.getSelection ? (s = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && s.commonAncestorContainer !== e || (t = s.startOffset,
                i = s.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (s = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + s.text.length),
                {
                    begin: n ? t : u.call(this, t),
                    end: n ? i : u.call(this, i)
                };
            if (Array.isArray(t) && (i = this.isRTL ? t[0] : t[1],
            t = this.isRTL ? t[1] : t[0]),
            void 0 !== t.begin && (i = this.isRTL ? t.begin : t.end,
            t = this.isRTL ? t.end : t.begin),
            "number" == typeof t) {
                t = n ? t : u.call(this, t),
                i = "number" == typeof (i = n ? i : u.call(this, i)) ? i : t;
                var r = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                if (e.scrollLeft = r > e.scrollWidth ? r : 0,
                e.inputmask.caretPos = {
                    begin: t,
                    end: i
                },
                a.insertModeVisual && !1 === a.insertMode && t === i && (o || i++),
                e === (e.inputmask.shadowRoot || document).activeElement)
                    if ("setSelectionRange"in e)
                        e.setSelectionRange(t, i);
                    else if (window.getSelection) {
                        if (s = document.createRange(),
                        void 0 === e.firstChild || null === e.firstChild) {
                            var l = document.createTextNode("");
                            e.appendChild(l)
                        }
                        s.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length),
                        s.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length),
                        s.collapse(!0);
                        var c = window.getSelection();
                        c.removeAllRanges(),
                        c.addRange(s)
                    } else
                        e.createTextRange && ((s = e.createTextRange()).collapse(!0),
                        s.moveEnd("character", i),
                        s.moveStart("character", t),
                        s.select())
            }
        }
        function o(e) {
            var t, i, n = this.maskset, o = this.dependencyLib, s = b.getMaskTemplate.call(this, !0, m.call(this), !0, !0), a = s.length, r = m.call(this), l = {}, c = n.validPositions[r], u = void 0 !== c ? c.locator.slice() : void 0;
            for (t = r + 1; t < s.length; t++)
                u = (i = b.getTestTemplate.call(this, t, u, t - 1)).locator.slice(),
                l[t] = o.extend(!0, {}, i);
            var d = c && void 0 !== c.alternation ? c.locator[c.alternation] : void 0;
            for (t = a - 1; r < t && (((i = l[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || d && (d !== l[t].locator[c.alternation] && 1 != i.match["static"] || !0 === i.match["static"] && i.locator[c.alternation] && p.checkAlternationMatch.call(this, i.locator[c.alternation].toString().split(","), d.toString().split(",")) && "" !== b.getTests.call(this, t)[0].def)) && s[t] === b.getPlaceholder.call(this, t, i.match)); t--)
                a--;
            return e ? {
                l: a,
                def: l[a] ? l[a].match : void 0
            } : a
        }
        function s(e, t, i) {
            function n(e) {
                if ("" !== a.radixPoint && 0 !== a.digits) {
                    var t = s.validPositions;
                    if (void 0 === t[e] || t[e].input === b.getPlaceholder.call(o, e)) {
                        if (e < y.call(o, -1))
                            return !0;
                        var i = v.call(o).indexOf(a.radixPoint);
                        if (-1 !== i) {
                            for (var n in t)
                                if (t[n] && i < n && t[n].input !== b.getPlaceholder.call(o, n))
                                    return !1;
                            return !0
                        }
                    }
                }
                return !1
            }
            var o = this
              , s = this.maskset
              , a = this.opts;
            if (t && (o.isRTL ? e.end = e.begin : e.begin = e.end),
            e.begin === e.end) {
                switch (i = i || a.positionCaretOnClick) {
                case "none":
                    break;
                case "select":
                    e = {
                        begin: 0,
                        end: v.call(o).length
                    };
                    break;
                case "ignore":
                    e.end = e.begin = y.call(o, m.call(o));
                    break;
                case "radixFocus":
                    if (n(e.begin)) {
                        var r = v.call(o).join("").indexOf(a.radixPoint);
                        e.end = e.begin = a.numericInput ? y.call(o, r) : r;
                        break
                    }
                default:
                    var l = e.begin
                      , c = m.call(o, l, !0)
                      , u = y.call(o, -1 !== c || g.call(o, 0) ? c : -1);
                    if (l <= u)
                        e.end = e.begin = g.call(o, l, !1, !0) ? l : y.call(o, l);
                    else {
                        var d = s.validPositions[c]
                          , p = b.getTestTemplate.call(o, u, d ? d.match.locator : void 0, d)
                          , h = b.getPlaceholder.call(o, u, p.match);
                        if ("" !== h && v.call(o)[u] !== h && !0 !== p.match.optionalQuantifier && !0 !== p.match.newBlockMarker || !g.call(o, u, a.keepStatic, !0) && p.match.def === h) {
                            var f = y.call(o, u);
                            (f <= l || l === u) && (u = f)
                        }
                        e.end = e.begin = u
                    }
                }
                return e
            }
        }
        function v(e) {
            var t = this.maskset;
            return void 0 !== t.buffer && !0 !== e || (t.buffer = b.getMaskTemplate.call(this, !0, m.call(this), !0),
            void 0 === t._buffer && (t._buffer = t.buffer.slice())),
            t.buffer
        }
        function a() {
            var e = this.maskset;
            return void 0 === e._buffer && (e._buffer = b.getMaskTemplate.call(this, !1, 1),
            void 0 === e.buffer && (e.buffer = e._buffer.slice())),
            e._buffer
        }
        function m(e, t, i) {
            var n = this.maskset
              , o = -1
              , s = -1
              , a = i || n.validPositions;
            for (var r in void 0 === e && (e = -1),
            a) {
                var l = parseInt(r);
                a[l] && (t || !0 !== a[l].generatedInput) && (l <= e && (o = l),
                e <= l && (s = l))
            }
            return -1 === o || o == e ? s : -1 == s ? o : e - o < s - e ? o : s
        }
        function g(e, t, i) {
            var n = this.maskset
              , o = b.getTestTemplate.call(this, e).match;
            if ("" === o.def && (o = b.getTest.call(this, e).match),
            !0 !== o["static"])
                return o.fn;
            if (!0 === i && void 0 !== n.validPositions[e] && !0 !== n.validPositions[e].generatedInput)
                return !0;
            if (!0 !== t && -1 < e) {
                if (i) {
                    var s = b.getTests.call(this, e);
                    return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0)
                }
                var a = b.determineTestTemplate.call(this, e, b.getTests.call(this, e))
                  , r = b.getPlaceholder.call(this, e, a.match);
                return a.match.def !== r
            }
            return !1
        }
        function r(e) {
            var t = this.maskset;
            !(t.buffer = void 0) !== e && (t.validPositions = {},
            t.p = 0)
        }
        function y(e, t, i) {
            void 0 === i && (i = !0);
            for (var n = e + 1; "" !== b.getTest.call(this, n).match.def && (!0 === t && (!0 !== b.getTest.call(this, n).match.newBlockMarker || !g.call(this, n, void 0, !0)) || !0 !== t && !g.call(this, n, void 0, i)); )
                n++;
            return n
        }
        function l(e, t) {
            var i = e - 1;
            if (e <= 0)
                return 0;
            for (; 0 < i && (!0 === t && (!0 !== b.getTest.call(this, i).match.newBlockMarker || !g.call(this, i, void 0, !0)) || !0 !== t && !g.call(this, i, void 0, !0)); )
                i--;
            return i
        }
        function u(e) {
            var t = this.opts
              , i = this.el;
            return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.caret = n,
        t.determineLastRequiredPosition = o,
        t.determineNewCaretPosition = s,
        t.getBuffer = v,
        t.getBufferTemplate = a,
        t.getLastValidPosition = m,
        t.isMask = g,
        t.resetMaskSet = r,
        t.seekNext = y,
        t.seekPrevious = l,
        t.translatePosition = u;
        var b = i(3)
          , p = i(4)
    }
    , function(e, t, i) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                return typeof e
            }
            : function i(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function s(e, t, i) {
            if (b["default"]) {
                if (!(this instanceof s))
                    return new s(e,t,i);
                this.dependencyLib = d["default"],
                this.el = void 0,
                this.events = {},
                !(this.maskset = void 0) !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {},
                e && (t.alias = e)),
                this.opts = d["default"].extend(!0, {}, this.defaults, t),
                this.noMasksCache = t && void 0 !== t.definitions,
                this.userOptions = t || {},
                u(this.opts.alias, t, this.opts)),
                this.refreshValue = !1,
                this.undoValue = void 0,
                this.$el = void 0,
                this.skipKeyPressEvent = !1,
                this.skipInputEvent = !1,
                this.validationEvent = !1,
                this.ignorable = !1,
                this.maxLength,
                this.mouseEnter = !1,
                this.originalPlaceholder = void 0,
                this.isComposing = !1
            }
        }
        function u(e, t, i) {
            var n = s.prototype.aliases[e];
            return n ? (n.alias && u(n.alias, void 0, i),
            d["default"].extend(!0, i, n),
            d["default"].extend(!0, i, t),
            !0) : (null === i.mask && (i.mask = e),
            !1)
        }
        function a(n, e, o, s) {
            function t(e, t) {
                var i = "" === s ? e : s + "-" + e;
                null !== (t = void 0 !== t ? t : n.getAttribute(i)) && ("string" == typeof t && (0 === e.indexOf("on") ? t = p["default"][t] : "false" === t ? t = !1 : "true" === t && (t = !0)),
                o[e] = t)
            }
            if (!0 === e.importDataAttributes) {
                var i, a, r, l, c = n.getAttribute(s);
                if (c && "" !== c && (c = c.replace(/'/g, '"'),
                a = JSON.parse("{" + c + "}")),
                a)
                    for (l in r = void 0,
                    a)
                        if ("alias" === l.toLowerCase()) {
                            r = a[l];
                            break
                        }
                for (i in t("alias", r),
                o.alias && u(o.alias, o, e),
                e) {
                    if (a)
                        for (l in r = void 0,
                        a)
                            if (l.toLowerCase() === i.toLowerCase()) {
                                r = a[l];
                                break
                            }
                    t(i, r)
                }
            }
            return d["default"].extend(!0, e, o),
            "rtl" !== n.dir && !e.rightAlign || (n.style.textAlign = "right"),
            "rtl" !== n.dir && !e.numericInput || (n.dir = "ltr",
            n.removeAttribute("dir"),
            e.isRTL = !0),
            Object.keys(o).length
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0,
        i(16),
        i(17);
        var r = i(18)
          , d = o(i(12))
          , p = o(i(8))
          , l = i(19)
          , c = i(3)
          , h = i(1)
          , f = i(4)
          , v = i(5)
          , m = i(11)
          , g = o(i(20))
          , y = o(i(21))
          , b = o(i(9))
          , k = p["default"].document
          , w = "_inputmask_opts";
        s.prototype = {
            dataAttribute: "data-inputmask",
            defaults: y["default"],
            definitions: g["default"],
            aliases: {},
            masksCache: {},
            get isRTL() {
                return this.opts.isRTL || this.opts.numericInput
            },
            mask: function S(e) {
                var n = this;
                return "string" == typeof e && (e = k.getElementById(e) || k.querySelectorAll(e)),
                (e = e.nodeName ? [e] : Array.isArray(e) ? e : Array.from(e)).forEach(function(e) {
                    var t = d["default"].extend(!0, {}, n.opts);
                    if (a(e, t, d["default"].extend(!0, {}, n.userOptions), n.dataAttribute)) {
                        var i = (0,
                        l.generateMaskSet)(t, n.noMasksCache);
                        void 0 !== i && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0,
                        e.inputmask.remove()),
                        e.inputmask = new s(void 0,void 0,!0),
                        e.inputmask.opts = t,
                        e.inputmask.noMasksCache = n.noMasksCache,
                        e.inputmask.userOptions = d["default"].extend(!0, {}, n.userOptions),
                        (e.inputmask.el = e).inputmask.$el = (0,
                        d["default"])(e),
                        e.inputmask.maskset = i,
                        d["default"].data(e, w, n.userOptions),
                        r.mask.call(e.inputmask))
                    }
                }),
                e && e[0] && e[0].inputmask || this
            },
            option: function x(e, t) {
                return "string" == typeof e ? this.opts[e] : "object" === n(e) ? (d["default"].extend(this.userOptions, e),
                this.el && !0 !== t && this.mask(this.el),
                this) : void 0
            },
            unmaskedvalue: function C(e) {
                if (this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache),
                void 0 === this.el || void 0 !== e) {
                    var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                    v.checkVal.call(this, void 0, !1, !1, t),
                    "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, h.getBuffer.call(this), 0, this.opts)
                }
                return v.unmaskedvalue.call(this, this.el)
            },
            remove: function $() {
                if (this.el) {
                    d["default"].data(this.el, w, null);
                    var e = this.opts.autoUnmask ? (0,
                    v.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                    e !== h.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""),
                    m.EventRuler.off(this.el),
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                        get: this.__valueGet,
                        set: this.__valueSet,
                        configurable: !0
                    }) : k.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet),
                    this.el.__defineSetter__("value", this.__valueSet)),
                    this.el.inputmask = void 0
                }
                return this.el
            },
            getemptymask: function T() {
                return this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache),
                h.getBufferTemplate.call(this).join("")
            },
            hasMaskedValue: function P() {
                return !this.opts.autoUnmask
            },
            isComplete: function M() {
                return this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache),
                f.isComplete.call(this, h.getBuffer.call(this))
            },
            getmetadata: function E() {
                if (this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache),
                Array.isArray(this.maskset.metadata)) {
                    var t = c.getMaskTemplate.call(this, !0, 0, !1).join("");
                    return this.maskset.metadata.forEach(function(e) {
                        return e.mask !== t || (t = e,
                        !1)
                    }),
                    t
                }
                return this.maskset.metadata
            },
            isValid: function O(e) {
                if (this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache),
                e) {
                    var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                    v.checkVal.call(this, void 0, !0, !1, t)
                } else
                    e = this.isRTL ? h.getBuffer.call(this).slice().reverse().join("") : h.getBuffer.call(this).join("");
                for (var i = h.getBuffer.call(this), n = h.determineLastRequiredPosition.call(this), o = i.length - 1; n < o && !h.isMask.call(this, o); o--)
                    ;
                return i.splice(n, o + 1 - n),
                f.isComplete.call(this, i) && e === (this.isRTL ? h.getBuffer.call(this).slice().reverse().join("") : h.getBuffer.call(this).join(""))
            },
            format: function j(e, t) {
                this.maskset = this.maskset || (0,
                l.generateMaskSet)(this.opts, this.noMasksCache);
                var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                v.checkVal.call(this, void 0, !0, !1, i);
                var n = this.isRTL ? h.getBuffer.call(this).slice().reverse().join("") : h.getBuffer.call(this).join("");
                return t ? {
                    value: n,
                    metadata: this.getmetadata()
                } : n
            },
            setValue: function A(e) {
                this.el && (0,
                d["default"])(this.el).trigger("setvalue", [e])
            },
            analyseMask: l.analyseMask
        },
        s.extendDefaults = function(e) {
            d["default"].extend(!0, s.prototype.defaults, e)
        }
        ,
        s.extendDefinitions = function(e) {
            d["default"].extend(!0, s.prototype.definitions, e)
        }
        ,
        s.extendAliases = function(e) {
            d["default"].extend(!0, s.prototype.aliases, e)
        }
        ,
        s.format = function(e, t, i) {
            return s(t).format(e, i)
        }
        ,
        s.unmask = function(e, t) {
            return s(t).unmaskedvalue(e)
        }
        ,
        s.isValid = function(e, t) {
            return s(t).isValid(e)
        }
        ,
        s.remove = function(e) {
            "string" == typeof e && (e = k.getElementById(e) || k.querySelectorAll(e)),
            (e = e.nodeName ? [e] : e).forEach(function(e) {
                e.inputmask && e.inputmask.remove()
            })
        }
        ,
        s.setValue = function(e, t) {
            "string" == typeof e && (e = k.getElementById(e) || k.querySelectorAll(e)),
            (e = e.nodeName ? [e] : e).forEach(function(e) {
                e.inputmask ? e.inputmask.setValue(t) : (0,
                d["default"])(e).trigger("setvalue", [t])
            })
        }
        ,
        s.dependencyLib = d["default"];
        var _ = p["default"].Inputmask = s;
        t["default"] = _
    }
    , function(e, t) {
        function u(e, t) {
            var i = (null != e.alternation ? e.mloc[n(e)] : e.locator).join("");
            if ("" !== i)
                for (; i.length < t; )
                    i += "0";
            return i
        }
        function n(e) {
            var t = e.locator[e.alternation];
            return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]),
            void 0 !== t ? t.toString() : ""
        }
        function v(e, t, i) {
            var n = this.opts
              , o = this.maskset;
            if (void 0 !== (t = t || d.call(this, e).match).placeholder || !0 === i)
                return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
            if (!0 !== t["static"])
                return n.placeholder.charAt(e % n.placeholder.length);
            if (-1 < e && void 0 === o.validPositions[e]) {
                var s, a = y.call(this, e), r = [];
                if (a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0))
                    for (var l = 0; l < a.length; l++)
                        if ("" !== a[l].match.def && !0 !== a[l].match.optionality && !0 !== a[l].match.optionalQuantifier && (!0 === a[l].match["static"] || void 0 === s || !1 !== a[l].match.fn.test(s.match.def, o, e, !0, n)) && (r.push(a[l]),
                        !0 === a[l].match["static"] && (s = a[l]),
                        1 < r.length && /[0-9a-bA-Z]/.test(r[0].match.def)))
                            return n.placeholder.charAt(e % n.placeholder.length)
            }
            return t.def
        }
        function i(e, t, i, n, o) {
            var s = this.opts
              , a = this.maskset
              , r = s.greedy;
            o && (s.greedy = !1),
            t = t || 0;
            var l, c, u, d, p = [], h = 0;
            do {
                if (!0 === e && a.validPositions[h])
                    c = (u = o && !0 === a.validPositions[h].match.optionality && void 0 === a.validPositions[h + 1] && (!0 === a.validPositions[h].generatedInput || a.validPositions[h].input == s.skipOptionalPartCharacter && 0 < h) ? g.call(this, h, y.call(this, h, l, h - 1)) : a.validPositions[h]).match,
                    l = u.locator.slice(),
                    p.push(!0 === i ? u.input : !1 === i ? c.nativeDef : v.call(this, h, c));
                else {
                    c = (u = m.call(this, h, l, h - 1)).match,
                    l = u.locator.slice();
                    var f = !0 !== n && (!1 !== s.jitMasking ? s.jitMasking : c.jit);
                    (d = (d && c["static"] && c.def !== s.groupSeparator && null === c.fn || a.validPositions[h - 1] && c["static"] && c.def !== s.groupSeparator && null === c.fn) && a.tests[h] && 1 === a.tests[h].length) || !1 === f || void 0 === f || "number" == typeof f && isFinite(f) && h < f ? p.push(!1 === i ? c.nativeDef : v.call(this, h, c)) : d = !1
                }
                h++
            } while ((void 0 === this.maxLength || h < this.maxLength) && (!0 !== c["static"] || "" !== c.def) || h < t);
            return "" === p[p.length - 1] && p.pop(),
            !1 === i && void 0 !== a.maskLength || (a.maskLength = h - 1),
            s.greedy = r,
            p
        }
        function m(e, t, i) {
            return this.maskset.validPositions[e] || g.call(this, e, y.call(this, e, t ? t.slice() : t, i))
        }
        function g(e, t) {
            var i = this.opts;
            e = 0 < e ? e - 1 : 0;
            for (var n, o, s, a = u(d.call(this, e)), r = 0; r < t.length; r++) {
                var l = t[r];
                n = u(l, a.length);
                var c = Math.abs(n - a);
                (void 0 === o || "" !== n && c < o || s && !i.greedy && s.match.optionality && "master" === s.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || s && s.match.optionalQuantifier && !l.match.optionalQuantifier) && (o = c,
                s = l)
            }
            return s
        }
        function d(e, t) {
            var i = this.maskset;
            return i.validPositions[e] ? i.validPositions[e] : (t || y.call(this, e))[0]
        }
        function W(e, t, i) {
            function n(e) {
                for (var t, i = [], n = -1, o = 0, s = e.length; o < s; o++)
                    if ("-" === e.charAt(o))
                        for (t = e.charCodeAt(o + 1); ++n < t; )
                            i.push(String.fromCharCode(n));
                    else
                        n = e.charCodeAt(o),
                        i.push(e.charAt(o));
                return i.join("")
            }
            return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match["static"] || !0 === t.match["static"]) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")))
        }
        function y(F, e, t) {
            function B(D, R, e, t) {
                function L(e, t, i) {
                    function s(i, n) {
                        var o = 0 === n.matches.indexOf(i);
                        return o || n.matches.every(function(e, t) {
                            return !0 === e.isQuantifier ? o = s(i, n.matches[t - 1]) : Object.prototype.hasOwnProperty.call(e, "matches") && (o = s(i, e)),
                            !o
                        }),
                        o
                    }
                    function r(e, n, o) {
                        var s, a;
                        if ((N.tests[e] || N.validPositions[e]) && (N.tests[e] || [N.validPositions[e]]).every(function(e) {
                            if (e.mloc[n])
                                return s = e,
                                !1;
                            var t = void 0 !== o ? o : e.alternation
                              , i = void 0 !== e.locator[t] ? e.locator[t].toString().indexOf(n) : -1;
                            return (void 0 === a || i < a) && -1 !== i && (s = e,
                            a = i),
                            !0
                        }),
                        s) {
                            var t = s.locator[s.alternation];
                            return (s.mloc[n] || s.mloc[t] || s.locator).slice((void 0 !== o ? o : s.alternation) + 1)
                        }
                        return void 0 !== o ? r(e, n) : void 0
                    }
                    function n(e, t) {
                        return !0 === e.match["static"] && !0 !== t.match["static"] && t.match.fn.test(e.match.def, N, F, !1, H, !1)
                    }
                    function o(e, t) {
                        var i = e.alternation
                          , n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                        if (!n && i > t.alternation)
                            for (var o = t.alternation; o < i; o++)
                                if (e.locator[o] !== t.locator[o]) {
                                    i = o,
                                    n = !0;
                                    break
                                }
                        if (n) {
                            e.mloc = e.mloc || {};
                            var s = e.locator[i];
                            if (void 0 !== s) {
                                if ("string" == typeof s && (s = s.split(",")[0]),
                                void 0 === e.mloc[s] && (e.mloc[s] = e.locator.slice()),
                                void 0 !== t) {
                                    for (var a in t.mloc)
                                        "string" == typeof a && (a = a.split(",")[0]),
                                        void 0 === e.mloc[a] && (e.mloc[a] = t.mloc[a]);
                                    e.locator[i] = Object.keys(e.mloc).join(",")
                                }
                                return !0
                            }
                            e.alternation = void 0
                        }
                        return !1
                    }
                    function a(e, t) {
                        if (e.locator.length !== t.locator.length)
                            return !1;
                        for (var i = e.alternation + 1; i < e.locator.length; i++)
                            if (e.locator[i] !== t.locator[i])
                                return !1;
                        return !0
                    }
                    if (V > F + H._maxTestPos)
                        throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + N.mask;
                    if (V === F && void 0 === e.matches)
                        return Y.push({
                            match: e,
                            locator: t.reverse(),
                            cd: G,
                            mloc: {}
                        }),
                        !0;
                    if (void 0 !== e.matches) {
                        if (e.isGroup && i !== e) {
                            if (e = L(D.matches[D.matches.indexOf(e) + 1], t, i))
                                return !0
                        } else if (e.isOptional) {
                            var l = e
                              , c = Y.length;
                            if (e = B(e, R, t, i)) {
                                if (Y.forEach(function(e, t) {
                                    c <= t && (e.match.optionality = !0)
                                }),
                                q = Y[Y.length - 1].match,
                                void 0 !== i || !s(q, l))
                                    return !0;
                                U = !0,
                                V = F
                            }
                        } else if (e.isAlternator) {
                            var u, d = e, p = [], h = Y.slice(), f = t.length, v = !1, m = 0 < R.length ? R.shift() : -1;
                            if (-1 === m || "string" == typeof m) {
                                var g, y = V, b = R.slice(), k = [];
                                if ("string" == typeof m)
                                    k = m.split(",");
                                else
                                    for (g = 0; g < d.matches.length; g++)
                                        k.push(g.toString());
                                if (void 0 !== N.excludes[F]) {
                                    for (var w = k.slice(), _ = 0, S = N.excludes[F].length; _ < S; _++) {
                                        var x = N.excludes[F][_].toString().split(":");
                                        t.length == x[1] && k.splice(k.indexOf(x[0]), 1)
                                    }
                                    0 === k.length && (delete N.excludes[F],
                                    k = w)
                                }
                                (!0 === H.keepStatic || isFinite(parseInt(H.keepStatic)) && y >= H.keepStatic) && (k = k.slice(0, 1));
                                for (var C = 0; C < k.length; C++) {
                                    g = parseInt(k[C]),
                                    Y = [],
                                    R = "string" == typeof m && r(V, g, f) || b.slice();
                                    var $ = d.matches[g];
                                    if ($ && L($, [g].concat(t), i))
                                        e = !0;
                                    else if (0 === C && (v = !0),
                                    $ && $.matches && $.matches.length > d.matches[0].matches.length)
                                        break;
                                    u = Y.slice(),
                                    V = y,
                                    Y = [];
                                    for (var T = 0; T < u.length; T++) {
                                        var P = u[T]
                                          , M = !1;
                                        P.match.jit = P.match.jit || v,
                                        P.alternation = P.alternation || f,
                                        o(P);
                                        for (var E = 0; E < p.length; E++) {
                                            var O = p[E];
                                            if ("string" != typeof m || void 0 !== P.alternation && k.includes(P.locator[P.alternation].toString())) {
                                                if (P.match.nativeDef === O.match.nativeDef) {
                                                    M = !0,
                                                    o(O, P);
                                                    break
                                                }
                                                if (W(P, O, H)) {
                                                    o(P, O) && (M = !0,
                                                    p.splice(p.indexOf(O), 0, P));
                                                    break
                                                }
                                                if (W(O, P, H)) {
                                                    o(O, P);
                                                    break
                                                }
                                                if (n(P, O)) {
                                                    a(P, O) || void 0 !== z.inputmask.userOptions.keepStatic ? o(P, O) && (M = !0,
                                                    p.splice(p.indexOf(O), 0, P)) : H.keepStatic = !0;
                                                    break
                                                }
                                            }
                                        }
                                        M || p.push(P)
                                    }
                                }
                                Y = h.concat(p),
                                V = F,
                                U = 0 < Y.length,
                                e = 0 < p.length,
                                R = b.slice()
                            } else
                                e = L(d.matches[m] || D.matches[m], [m].concat(t), i);
                            if (e)
                                return !0
                        } else if (e.isQuantifier && i !== D.matches[D.matches.indexOf(e) - 1])
                            for (var j = e, A = 0 < R.length ? R.shift() : 0; A < (isNaN(j.quantifier.max) ? A + 1 : j.quantifier.max) && V <= F; A++) {
                                var I = D.matches[D.matches.indexOf(j) - 1];
                                if (e = L(I, [A].concat(t), I)) {
                                    if ((q = Y[Y.length - 1].match).optionalQuantifier = A >= j.quantifier.min,
                                    q.jit = (A || 1) * I.matches.indexOf(q) >= j.quantifier.jit,
                                    q.optionalQuantifier && s(q, I)) {
                                        U = !0,
                                        V = F;
                                        break
                                    }
                                    return q.jit && (N.jitOffset[F] = I.matches.length - I.matches.indexOf(q)),
                                    !0
                                }
                            }
                        else if (e = B(e, R, t, i))
                            return !0
                    } else
                        V++
                }
                for (var i = 0 < R.length ? R.shift() : 0; i < D.matches.length; i++)
                    if (!0 !== D.matches[i].isQuantifier) {
                        var n = L(D.matches[i], [i].concat(e), t);
                        if (n && V === F)
                            return n;
                        if (F < V)
                            break
                    }
            }
            function i(e, t) {
                var i, n = [];
                return Array.isArray(t) || (t = [t]),
                0 < t.length && (void 0 === t[0].alternation || !0 === H.keepStatic ? 0 === (n = g.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach(function(e) {
                    "" !== e.def && (0 === n.length ? (i = e.alternation,
                    n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]))
                })),
                n
            }
            var q, o = this, n = this.dependencyLib, N = this.maskset, H = this.opts, z = this.el, s = N.maskToken, V = e ? t : 0, a = e ? e.slice() : [0], Y = [], U = !1, G = e ? e.join("") : "";
            if (-1 < F && (void 0 === o.maxLength || F < o.maxLength)) {
                if (void 0 === e) {
                    for (var r, l = F - 1; void 0 === (r = N.validPositions[l] || N.tests[l]) && -1 < l; )
                        l--;
                    void 0 !== r && -1 < l && (a = i(l, r),
                    G = a.join(""),
                    V = l)
                }
                if (N.tests[F] && N.tests[F][0].cd === G)
                    return N.tests[F];
                for (var c = a.shift(); c < s.length; c++) {
                    if (B(s[c], a, [c]) && V === F || F < V)
                        break
                }
            }
            return 0 !== Y.length && !U || Y.push({
                match: {
                    fn: null,
                    "static": !0,
                    optionality: !1,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: G
            }),
            void 0 !== e && N.tests[F] ? n.extend(!0, [], Y) : (N.tests[F] = n.extend(!0, [], Y),
            N.tests[F])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.determineTestTemplate = g,
        t.getDecisionTaker = n,
        t.getMaskTemplate = i,
        t.getPlaceholder = v,
        t.getTest = d,
        t.getTests = y,
        t.getTestTemplate = m,
        t.isSubsetOf = W
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function P(e, t, i, n, o, s) {
            var a, r, l, c, u, d, p, h, f, v, m, g = this.dependencyLib, y = this.opts, b = this.maskset, k = g.extend(!0, {}, b.validPositions), w = g.extend(!0, {}, b.tests), _ = !1, S = !1, x = void 0 !== o ? o : O.getLastValidPosition.call(this);
            if (s && (v = s.begin,
            m = s.end,
            s.begin > s.end && (v = s.end,
            m = s.begin)),
            -1 === x && void 0 === o)
                a = 0,
                r = (c = E.getTest.call(this, a)).alternation;
            else
                for (; 0 <= x; x--)
                    if ((l = b.validPositions[x]) && void 0 !== l.alternation) {
                        if (c && c.locator[l.alternation] !== l.locator[l.alternation])
                            break;
                        a = x,
                        r = b.validPositions[a].alternation,
                        c = l
                    }
            if (void 0 !== r) {
                p = parseInt(a),
                b.excludes[p] = b.excludes[p] || [],
                !0 !== e && b.excludes[p].push((0,
                E.getDecisionTaker)(c) + ":" + c.alternation);
                var C = []
                  , $ = -1;
                for (u = p; u < O.getLastValidPosition.call(this, void 0, !0) + 1; u++)
                    -1 === $ && e <= u && void 0 !== t && (C.push(t),
                    $ = C.length - 1),
                    (d = b.validPositions[u]) && !0 !== d.generatedInput && (void 0 === s || u < v || m <= u) && C.push(d.input),
                    delete b.validPositions[u];
                for (-1 === $ && void 0 !== t && (C.push(t),
                $ = C.length - 1); void 0 !== b.excludes[p] && b.excludes[p].length < 10; ) {
                    for (b.tests = {},
                    O.resetMaskSet.call(this, !0),
                    _ = !0,
                    u = 0; u < C.length && (h = _.caret || O.getLastValidPosition.call(this, void 0, !0) + 1,
                    f = C[u],
                    _ = M.call(this, h, f, !1, n, !0)); u++)
                        u === $ && (S = _),
                        1 == e && _ && (S = {
                            caretPos: u
                        });
                    if (_)
                        break;
                    if (O.resetMaskSet.call(this),
                    c = E.getTest.call(this, p),
                    b.validPositions = g.extend(!0, {}, k),
                    b.tests = g.extend(!0, {}, w),
                    !b.excludes[p]) {
                        S = P.call(this, e, t, i, n, p - 1, s);
                        break
                    }
                    var T = (0,
                    E.getDecisionTaker)(c);
                    if (-1 !== b.excludes[p].indexOf(T + ":" + c.alternation)) {
                        S = P.call(this, e, t, i, n, p - 1, s);
                        break
                    }
                    for (b.excludes[p].push(T + ":" + c.alternation),
                    u = p; u < O.getLastValidPosition.call(this, void 0, !0) + 1; u++)
                        delete b.validPositions[u]
                }
            }
            return S && !1 === y.keepStatic || delete b.excludes[p],
            S
        }
        function S(e, t, i) {
            var n = this.opts
              , o = this.maskset;
            switch (n.casing || t.casing) {
            case "upper":
                e = e.toUpperCase();
                break;
            case "lower":
                e = e.toLowerCase();
                break;
            case "title":
                var s = o.validPositions[i - 1];
                e = 0 === i || s && s.input === String.fromCharCode(d["default"].SPACE) ? e.toUpperCase() : e.toLowerCase();
                break;
            default:
                if ("function" == typeof n.casing) {
                    var a = Array.prototype.slice.call(arguments);
                    a.push(o.validPositions),
                    e = n.casing.apply(this, a)
                }
            }
            return e
        }
        function o(e, t, i) {
            for (var n, o = this.opts.greedy ? t : t.slice(0, 1), s = !1, a = void 0 !== i ? i.split(",") : [], r = 0; r < a.length; r++)
                -1 !== (n = e.indexOf(a[r])) && e.splice(n, 1);
            for (var l = 0; l < e.length; l++)
                if (o.includes(e[l])) {
                    s = !0;
                    break
                }
            return s
        }
        function s(e, t, i, n) {
            var o = this.maskset
              , s = this.opts;
            if ((s.numericInput || this.isRTL) && (t === d["default"].BACKSPACE ? t = d["default"].DELETE : t === d["default"].DELETE && (t = d["default"].BACKSPACE),
            this.isRTL)) {
                var a = i.end;
                i.end = i.begin,
                i.begin = a
            }
            var r, l = O.getLastValidPosition.call(this, void 0, !0);
            if (i.end >= O.getBuffer.call(this).length && l >= i.end && (i.end = l + 1),
            t === d["default"].BACKSPACE ? i.end - i.begin < 1 && (i.begin = O.seekPrevious.call(this, i.begin)) : t === d["default"].DELETE && i.begin === i.end && (i.end = O.isMask.call(this, i.end, !0, !0) ? i.end + 1 : O.seekNext.call(this, i.end) + 1),
            !1 !== (r = T.call(this, i))) {
                if (!0 !== n && !1 !== s.keepStatic || null !== s.regex && -1 !== E.getTest.call(this, i.begin).match.def.indexOf("|")) {
                    var c = P.call(this, !0);
                    if (c) {
                        var u = void 0 !== c.caret ? c.caret : c.pos ? O.seekNext.call(this, c.pos.begin ? c.pos.begin : c.pos) : O.getLastValidPosition.call(this, -1, !0);
                        (t !== d["default"].DELETE || i.begin > u) && i.begin
                    }
                }
                !0 !== n && (o.p = t === d["default"].DELETE ? i.begin + r : i.begin)
            }
        }
        function x(e) {
            var t = this.opts
              , i = this.maskset;
            if ("function" == typeof t.isComplete)
                return t.isComplete(e, t);
            if ("*" !== t.repeat) {
                var n = !1
                  , o = O.determineLastRequiredPosition.call(this, !0)
                  , s = O.seekPrevious.call(this, o.l);
                if (void 0 === o.def || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) {
                    n = !0;
                    for (var a = 0; a <= s; a++) {
                        var r = E.getTestTemplate.call(this, a).match;
                        if (!0 !== r["static"] && void 0 === i.validPositions[a] && !0 !== r.optionality && !0 !== r.optionalQuantifier || !0 === r["static"] && e[a] !== E.getPlaceholder.call(this, a, r)) {
                            n = !1;
                            break
                        }
                    }
                }
                return n
            }
        }
        function M(l, e, t, c, i, n, o) {
            function u(e) {
                return p.isRTL ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1
            }
            function d(e) {
                if (void 0 !== e) {
                    if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]),
                    e.remove.sort(function(e, t) {
                        return t.pos - e.pos
                    }).forEach(function(e) {
                        T.call(p, {
                            begin: e,
                            end: e + 1
                        })
                    }),
                    e.remove = void 0),
                    void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]),
                    e.insert.sort(function(e, t) {
                        return e.pos - t.pos
                    }).forEach(function(e) {
                        "" !== e.c && M.call(p, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : c)
                    }),
                    e.insert = void 0),
                    e.refreshFromBuffer && e.buffer) {
                        var t = e.refreshFromBuffer;
                        C.call(p, !0 === t ? t : t.start, t.end, e.buffer),
                        e.refreshFromBuffer = void 0
                    }
                    void 0 !== e.rewritePosition && (a = e.rewritePosition,
                    e = !0)
                }
                return e
            }
            function s(o, s, a) {
                var r = !1;
                return E.getTests.call(p, o).every(function(e) {
                    var t = e.match;
                    if (O.getBuffer.call(p, !0),
                    !1 === (r = null != t.fn ? t.fn.test(s, v, o, a, f, u(l)) : (s === t.def || s === f.skipOptionalPartCharacter) && "" !== t.def && {
                        c: E.getPlaceholder.call(p, o, t, !0) || t.def,
                        pos: o
                    }))
                        return !0;
                    var i = void 0 !== r.c ? r.c : s
                      , n = o;
                    return i = i === f.skipOptionalPartCharacter && !0 === t["static"] ? E.getPlaceholder.call(p, o, t, !0) || t.def : i,
                    !0 !== (r = d(r)) && void 0 !== r.pos && r.pos !== o && (n = r.pos),
                    !0 !== r && void 0 === r.pos && void 0 === r.c || !1 === T.call(p, l, h.extend({}, e, {
                        input: S.call(p, i, t, n)
                    }), c, n) && (r = !1),
                    !1
                }),
                r
            }
            var p = this
              , h = this.dependencyLib
              , f = this.opts
              , v = p.maskset;
            t = !0 === t;
            var a = l;
            void 0 !== l.begin && (a = p.isRTL ? l.end : l.begin);
            var r = !0
              , m = h.extend(!0, {}, v.validPositions);
            if (!1 === f.keepStatic && void 0 !== v.excludes[a] && !0 !== i && !0 !== c)
                for (var g = a; g < (p.isRTL ? l.begin : l.end); g++)
                    void 0 !== v.excludes[g] && (v.excludes[g] = void 0,
                    delete v.tests[g]);
            if ("function" == typeof f.preValidation && !0 !== c && !0 !== n && (r = d(r = f.preValidation.call(p, O.getBuffer.call(p), a, e, u(l), f, v, l, t || i))),
            !0 === r) {
                if (void 0 === p.maxLength || a < O.translatePosition.call(p, p.maxLength)) {
                    if (r = s(a, e, t),
                    (!t || !0 === c) && !1 === r && !0 !== n) {
                        var y = v.validPositions[a];
                        if (!y || !0 !== y.match["static"] || y.match.def !== e && e !== f.skipOptionalPartCharacter) {
                            if (f.insertMode || void 0 === v.validPositions[O.seekNext.call(p, a)] || l.end > a) {
                                var b = !1;
                                if (v.jitOffset[a] && void 0 === v.validPositions[O.seekNext.call(p, a)] && (!1 !== (r = M.call(p, a + v.jitOffset[a], e, !0)) && (!0 !== i && (r.caret = a),
                                b = !0)),
                                l.end > a && (v.validPositions[a] = void 0),
                                !b && !O.isMask.call(p, a, f.keepStatic && 0 === a))
                                    for (var k = a + 1, w = O.seekNext.call(p, a, !1, 0 !== a); k <= w; k++)
                                        if (!1 !== (r = s(k, e, t))) {
                                            r = $.call(p, a, void 0 !== r.pos ? r.pos : k) || r,
                                            a = k;
                                            break
                                        }
                            }
                        } else
                            r = {
                                caret: O.seekNext.call(p, a)
                            }
                    }
                } else
                    r = !1;
                !1 !== r || !f.keepStatic || !x.call(p, O.getBuffer.call(p)) && 0 !== a || t || !0 === i ? u(l) && v.tests[a] && 1 < v.tests[a].length && f.keepStatic && !t && !0 !== i && (r = P.call(p, !0)) : r = P.call(p, a, e, t, c, void 0, l),
                !0 === r && (r = {
                    pos: a
                })
            }
            if ("function" == typeof f.postValidation && !0 !== c && !0 !== n) {
                var _ = f.postValidation.call(p, O.getBuffer.call(p, !0), void 0 !== l.begin ? p.isRTL ? l.end : l.begin : l, e, r, f, v, t, o);
                void 0 !== _ && (r = !0 === _ ? r : _)
            }
            return r && void 0 === r.pos && (r.pos = a),
            !1 === r || !0 === n ? (O.resetMaskSet.call(p, !0),
            v.validPositions = h.extend(!0, {}, m)) : $.call(p, void 0, a, !0),
            d(r)
        }
        function k(e, t, i) {
            for (var n = this.maskset, o = !1, s = E.getTests.call(this, e), a = 0; a < s.length; a++) {
                if (s[a].match && (s[a].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match["static"]) || s[a].match.nativeDef === t.match.nativeDef || i.regex && !s[a].match["static"] && s[a].match.fn.test(t.input))) {
                    o = !0;
                    break
                }
                if (s[a].match && s[a].match.def === t.match.nativeDef) {
                    o = void 0;
                    break
                }
            }
            return !1 === o && void 0 !== n.jitOffset[e] && (o = k.call(this, e + n.jitOffset[e], t, i)),
            o
        }
        function C(e, t, i) {
            var n, o, s = this.maskset, a = this.opts, r = this.dependencyLib, l = a.skipOptionalPartCharacter, c = this.isRTL ? i.slice().reverse() : i;
            if (!(a.skipOptionalPartCharacter = "") === e)
                O.resetMaskSet.call(this),
                s.tests = {},
                e = 0,
                t = i.length,
                o = O.determineNewCaretPosition.call(this, {
                    begin: 0,
                    end: 0
                }, !1).begin;
            else {
                for (n = e; n < t; n++)
                    delete s.validPositions[n];
                o = e
            }
            var u = new r.Event("keypress");
            for (n = e; n < t; n++) {
                u.which = c[n].toString().charCodeAt(0),
                this.ignorable = !1;
                var d = p.EventHandlers.keypressEvent.call(this, u, !0, !1, !1, o);
                !1 !== d && (o = d.forwardPosition)
            }
            a.skipOptionalPartCharacter = l
        }
        function $(e, t, i) {
            var n = this.maskset
              , o = this.dependencyLib;
            if (void 0 === e)
                for (e = t - 1; 0 < e && !n.validPositions[e]; e--)
                    ;
            for (var s = e; s < t; s++)
                if (void 0 === n.validPositions[s] && !O.isMask.call(this, s, !1)) {
                    if (0 == s ? E.getTest.call(this, s) : n.validPositions[s - 1]) {
                        var a = E.getTests.call(this, s).slice();
                        "" === a[a.length - 1].match.def && a.pop();
                        var r, l = E.determineTestTemplate.call(this, s, a);
                        if (l && (!0 !== l.match.jit || "master" === l.match.newBlockMarker && (r = n.validPositions[s + 1]) && !0 === r.match.optionalQuantifier) && ((l = o.extend({}, l, {
                            input: E.getPlaceholder.call(this, s, l.match, !0) || l.match.def
                        })).generatedInput = !0,
                        T.call(this, s, l, !0),
                        !0 !== i)) {
                            var c = n.validPositions[t].input;
                            return n.validPositions[t] = void 0,
                            M.call(this, t, c, !0, !0)
                        }
                    }
                }
        }
        function T(e, t, i, n) {
            function o(e, t, i) {
                var n = t[e];
                if (void 0 === n || !0 !== n.match["static"] || !0 === n.match.optionality || void 0 !== t[0] && void 0 !== t[0].alternation)
                    return !1;
                var o = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match["static"] && t[e - 1] : t[e - 1]
                  , s = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match["static"] && t[e + 1] : t[e + 1];
                return o && s
            }
            var s = this.maskset
              , a = this.opts
              , r = this.dependencyLib
              , l = 0
              , c = void 0 !== e.begin ? e.begin : e
              , u = void 0 !== e.end ? e.end : e;
            if (e.begin > e.end && (c = e.end,
            u = e.begin),
            n = void 0 !== n ? n : c,
            c !== u || a.insertMode && void 0 !== s.validPositions[n] && void 0 === i || void 0 === t) {
                var d, p = r.extend(!0, {}, s.validPositions), h = O.getLastValidPosition.call(this, void 0, !0);
                for (s.p = c,
                d = h; c <= d; d--)
                    delete s.validPositions[d],
                    void 0 === t && delete s.tests[d + 1];
                var f, v, m = !0, g = n, y = g;
                for (t && (s.validPositions[n] = r.extend(!0, {}, t),
                y++,
                g++),
                d = t ? u : u - 1; d <= h; d++) {
                    if (void 0 !== (f = p[d]) && !0 !== f.generatedInput && (u <= d || c <= d && o(d, p, {
                        begin: c,
                        end: u
                    }))) {
                        for (; "" !== E.getTest.call(this, y).match.def; ) {
                            if (!1 !== (v = k.call(this, y, f, a)) || "+" === f.match.def) {
                                "+" === f.match.def && O.getBuffer.call(this, !0);
                                var b = M.call(this, y, f.input, "+" !== f.match.def, "+" !== f.match.def);
                                if (m = !1 !== b,
                                g = (b.pos || y) + 1,
                                !m && v)
                                    break
                            } else
                                m = !1;
                            if (m) {
                                void 0 === t && f.match["static"] && d === e.begin && l++;
                                break
                            }
                            if (!m && y > s.maskLength)
                                break;
                            y++
                        }
                        "" == E.getTest.call(this, y).match.def && (m = !1),
                        y = g
                    }
                    if (!m)
                        break
                }
                if (!m)
                    return s.validPositions = r.extend(!0, {}, p),
                    O.resetMaskSet.call(this, !0),
                    !1
            } else
                t && E.getTest.call(this, n).match.cd === t.match.cd && (s.validPositions[n] = r.extend(!0, {}, t));
            return O.resetMaskSet.call(this, !0),
            l
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.alternate = P,
        t.checkAlternationMatch = o,
        t.isComplete = x,
        t.isValid = M,
        t.refreshFromBuffer = C,
        t.revalidateMask = T,
        t.handleRemove = s;
        var E = i(3)
          , d = n(i(0))
          , O = i(1)
          , p = i(6)
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function c(e, t) {
            var i = e ? e.inputmask : this
              , n = i.opts;
            e.inputmask.refreshValue = !1,
            "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t),
            o(e, !0, !1, t = t.toString().split("")),
            i.undoValue = x.getBuffer.call(i).join(""),
            (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === x.getBufferTemplate.call(i).join("") && -1 === x.getLastValidPosition.call(i) && e.inputmask._valueSet("")
        }
        function a(e) {
            e.length = 0;
            for (var t, i = S.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); )
                e.push(t);
            return e
        }
        function o(e, t, o, i, n) {
            function s(e, t) {
                for (var i = S.getMaskTemplate.call(a, !0, 0).slice(e, x.seekNext.call(a, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); 0 < n && " " === i[n - 1]; )
                    n--;
                var o = 0 === n && !x.isMask.call(a, e) && (S.getTest.call(a, e).match.nativeDef === t.charAt(0) || !0 === S.getTest.call(a, e).match["static"] && S.getTest.call(a, e).match.nativeDef === "'" + t.charAt(0) || " " === S.getTest.call(a, e).match.nativeDef && (S.getTest.call(a, e + 1).match.nativeDef === t.charAt(0) || !0 === S.getTest.call(a, e + 1).match["static"] && S.getTest.call(a, e + 1).match.nativeDef === "'" + t.charAt(0)));
                if (!o && 0 < n && !x.isMask.call(a, e, !1, !0)) {
                    var s = x.seekNext.call(a, e);
                    a.caretPos.begin < s && (a.caretPos = {
                        begin: s
                    })
                }
                return o
            }
            var a = e ? e.inputmask : this
              , r = a.maskset
              , l = a.opts
              , c = a.dependencyLib
              , u = i.slice()
              , d = ""
              , p = -1
              , h = void 0
              , f = l.skipOptionalPartCharacter;
            l.skipOptionalPartCharacter = "",
            x.resetMaskSet.call(a),
            r.tests = {},
            p = l.radixPoint ? x.determineNewCaretPosition.call(a, {
                begin: 0,
                end: 0
            }, !1, !1 === l.__financeInput ? "radixFocus" : void 0).begin : 0,
            r.p = p,
            a.caretPos = {
                begin: p
            };
            var v = []
              , m = a.caretPos;
            if (u.forEach(function(e, t) {
                if (void 0 !== e) {
                    var i = new c.Event("_checkval");
                    i.which = e.toString().charCodeAt(0),
                    d += e;
                    var n = x.getLastValidPosition.call(a, void 0, !0);
                    s(p, d) ? h = $.EventHandlers.keypressEvent.call(a, i, !0, !1, o, n + 1) : (h = $.EventHandlers.keypressEvent.call(a, i, !0, !1, o, a.caretPos.begin)) && (p = a.caretPos.begin + 1,
                    d = ""),
                    h ? (void 0 !== h.pos && r.validPositions[h.pos] && !0 === r.validPositions[h.pos].match["static"] && void 0 === r.validPositions[h.pos].alternation && (v.push(h.pos),
                    a.isRTL || (h.forwardPosition = h.pos + 1)),
                    _.call(a, void 0, x.getBuffer.call(a), h.forwardPosition, i, !1),
                    a.caretPos = {
                        begin: h.forwardPosition,
                        end: h.forwardPosition
                    },
                    m = a.caretPos) : void 0 === r.validPositions[t] && u[t] === S.getPlaceholder.call(a, t) && x.isMask.call(a, t, !0) ? a.caretPos.begin++ : a.caretPos = m
                }
            }),
            0 < v.length) {
                var g, y, b = x.seekNext.call(a, -1, void 0, !1);
                if (!C.isComplete.call(a, x.getBuffer.call(a)) && v.length <= b || C.isComplete.call(a, x.getBuffer.call(a)) && 0 < v.length && v.length !== b && 0 === v[0])
                    for (var k = b; void 0 !== (g = v.shift()); ) {
                        var w = new c.Event("_checkval");
                        if ((y = r.validPositions[g]).generatedInput = !0,
                        w.which = y.input.charCodeAt(0),
                        (h = $.EventHandlers.keypressEvent.call(a, w, !0, !1, o, k)) && void 0 !== h.pos && h.pos !== g && r.validPositions[h.pos] && !0 === r.validPositions[h.pos].match["static"])
                            v.push(h.pos);
                        else if (!h)
                            break;
                        k++
                    }
            }
            t && _.call(a, e, x.getBuffer.call(a), h ? h.forwardPosition : a.caretPos.begin, n || new c.Event("checkval"), n && "input" === n.type && a.undoValue !== x.getBuffer.call(a).join("")),
            l.skipOptionalPartCharacter = f
        }
        function s(e, t) {
            var i = e ? e.inputmask : this;
            if (l.ie) {
                if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                    var n = x.getBuffer.call(i).slice()
                      , o = e.inputmask._valueGet();
                    if (o !== t) {
                        var s = x.getLastValidPosition.call(i);
                        -1 === s && o === x.getBufferTemplate.call(i).join("") ? n = [] : -1 !== s && a.call(i, n),
                        _(e, n)
                    }
                }
            } else
                e.placeholder !== t && (e.placeholder = t,
                "" === e.placeholder && e.removeAttribute("placeholder"))
        }
        function r(e) {
            var t = e ? e.inputmask : this
              , i = t.opts
              , n = t.maskset;
            if (e) {
                if (void 0 === e.inputmask)
                    return e.value;
                e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0))
            }
            var o = []
              , s = n.validPositions;
            for (var a in s)
                s[a] && s[a].match && (1 != s[a].match["static"] || Array.isArray(n.metadata) && !0 !== s[a].generatedInput) && o.push(s[a].input);
            var r = 0 === o.length ? "" : (t.isRTL ? o.reverse() : o).join("");
            if ("function" == typeof i.onUnMask) {
                var l = (t.isRTL ? x.getBuffer.call(t).slice().reverse() : x.getBuffer.call(t)).join("");
                r = i.onUnMask.call(t, l, r, i)
            }
            return r
        }
        function _(e, t, i, n, o) {
            var s = e ? e.inputmask : this
              , a = s.opts
              , r = s.dependencyLib;
            if (n && "function" == typeof a.onBeforeWrite) {
                var l = a.onBeforeWrite.call(s, n, t, i, a);
                if (l) {
                    if (l.refreshFromBuffer) {
                        var c = l.refreshFromBuffer;
                        C.refreshFromBuffer.call(s, !0 === c ? c : c.start, c.end, l.buffer || t),
                        t = x.getBuffer.call(s, !0)
                    }
                    void 0 !== i && (i = void 0 !== l.caret ? l.caret : i)
                }
            }
            if (void 0 !== e && (e.inputmask._valueSet(t.join("")),
            void 0 === i || void 0 !== n && "blur" === n.type || x.caret.call(s, e, i, void 0, void 0, void 0 !== n && "keydown" === n.type && (n.keyCode === p["default"].DELETE || n.keyCode === p["default"].BACKSPACE)),
            !0 === o)) {
                var u = r(e)
                  , d = e.inputmask._valueGet();
                e.inputmask.skipInputEvent = !0,
                u.trigger("input"),
                setTimeout(function() {
                    d === x.getBufferTemplate.call(s).join("") ? u.trigger("cleared") : !0 === C.isComplete.call(s, t) && u.trigger("complete")
                }, 0)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.applyInputValue = c,
        t.clearOptionalTail = a,
        t.checkVal = o,
        t.HandleNativePlaceholder = s,
        t.unmaskedvalue = r,
        t.writeBuffer = _;
        var p = n(i(0))
          , S = i(3)
          , x = i(1)
          , C = i(4)
          , l = i(7)
          , $ = i(6)
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EventHandlers = void 0;
        var y = i(1)
          , b = n(i(0))
          , d = i(7)
          , g = i(4)
          , k = i(5)
          , w = i(3)
          , u = {
            keydownEvent: function p(e) {
                var t = this.inputmask
                  , i = t.opts
                  , n = t.dependencyLib
                  , o = t.maskset
                  , s = this
                  , a = n(s)
                  , r = e.keyCode
                  , l = y.caret.call(t, s)
                  , c = i.onKeyDown.call(this, e, y.getBuffer.call(t), l, i);
                if (void 0 !== c)
                    return c;
                if (r === b["default"].BACKSPACE || r === b["default"].DELETE || d.iphone && r === b["default"].BACKSPACE_SAFARI || e.ctrlKey && r === b["default"].X && !("oncut"in s))
                    e.preventDefault(),
                    g.handleRemove.call(t, s, r, l),
                    (0,
                    k.writeBuffer)(s, y.getBuffer.call(t, !0), o.p, e, s.inputmask._valueGet() !== y.getBuffer.call(t).join(""));
                else if (r === b["default"].END || r === b["default"].PAGE_DOWN) {
                    e.preventDefault();
                    var u = y.seekNext.call(t, y.getLastValidPosition.call(t));
                    y.caret.call(t, s, e.shiftKey ? l.begin : u, u, !0)
                } else
                    r === b["default"].HOME && !e.shiftKey || r === b["default"].PAGE_UP ? (e.preventDefault(),
                    y.caret.call(t, s, 0, e.shiftKey ? l.begin : 0, !0)) : (i.undoOnEscape && r === b["default"].ESCAPE || 90 === r && e.ctrlKey) && !0 !== e.altKey ? ((0,
                    k.checkVal)(s, !0, !1, t.undoValue.split("")),
                    a.trigger("click")) : !0 === i.tabThrough && r === b["default"].TAB ? !0 === e.shiftKey ? (l.end = y.seekPrevious.call(t, l.end, !0),
                    !0 === w.getTest.call(t, l.end - 1).match["static"] && l.end--,
                    l.begin = y.seekPrevious.call(t, l.end, !0),
                    0 <= l.begin && 0 < l.end && (e.preventDefault(),
                    y.caret.call(t, s, l.begin, l.end))) : (l.begin = y.seekNext.call(t, l.begin, !0),
                    l.end = y.seekNext.call(t, l.begin, !0),
                    l.end < o.maskLength && l.end--,
                    l.begin <= o.maskLength && (e.preventDefault(),
                    y.caret.call(t, s, l.begin, l.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (r === b["default"].RIGHT ? setTimeout(function() {
                        var e = y.caret.call(t, s);
                        y.caret.call(t, s, e.begin)
                    }, 0) : r === b["default"].LEFT && setTimeout(function() {
                        var e = y.translatePosition.call(t, s.inputmask.caretPos.begin);
                        y.translatePosition.call(t, s.inputmask.caretPos.end);
                        t.isRTL ? y.caret.call(t, s, e + (e === o.maskLength ? 0 : 1)) : y.caret.call(t, s, e - (0 === e ? 0 : 1))
                    }, 0));
                t.ignorable = i.ignorables.includes(r)
            },
            keypressEvent: function _(e, t, i, n, o) {
                var s = this.inputmask || this
                  , a = s.opts
                  , r = s.dependencyLib
                  , l = s.maskset
                  , c = s.el
                  , u = r(c)
                  , d = e.which || e.charCode || e.keyCode;
                if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || s.ignorable))
                    return d === b["default"].ENTER && s.undoValue !== y.getBuffer.call(s).join("") && (s.undoValue = y.getBuffer.call(s).join(""),
                    setTimeout(function() {
                        u.trigger("change")
                    }, 0)),
                    s.skipInputEvent = !0;
                if (d) {
                    44 !== d && 46 !== d || 3 !== e.location || "" === a.radixPoint || (d = a.radixPoint.charCodeAt(0));
                    var p, h = t ? {
                        begin: o,
                        end: o
                    } : y.caret.call(s, c), f = String.fromCharCode(d);
                    l.writeOutBuffer = !0;
                    var v = g.isValid.call(s, h, f, n, void 0, void 0, void 0, t);
                    if (!1 !== v && (y.resetMaskSet.call(s, !0),
                    p = void 0 !== v.caret ? v.caret : y.seekNext.call(s, v.pos.begin ? v.pos.begin : v.pos),
                    l.p = p),
                    p = a.numericInput && void 0 === v.caret ? y.seekPrevious.call(s, p) : p,
                    !1 !== i && (setTimeout(function() {
                        a.onKeyValidation.call(c, d, v)
                    }, 0),
                    l.writeOutBuffer && !1 !== v)) {
                        var m = y.getBuffer.call(s);
                        (0,
                        k.writeBuffer)(c, m, p, e, !0 !== t)
                    }
                    if (e.preventDefault(),
                    t)
                        return !1 !== v && (v.forwardPosition = p),
                        v
                }
            },
            keyupEvent: function o(e) {
                var t = this.inputmask;
                !t.isComposing || e.keyCode !== b["default"].KEY_229 && e.keyCode !== b["default"].ENTER || t.$el.trigger("input")
            },
            pasteEvent: function c(e) {
                var t, i = this.inputmask, n = i.opts, o = i._valueGet(!0), s = y.caret.call(i, this);
                i.isRTL && (t = s.end,
                s.end = s.begin,
                s.begin = t);
                var a = o.substr(0, s.begin)
                  , r = o.substr(s.end, o.length);
                if (a == (i.isRTL ? y.getBufferTemplate.call(i).slice().reverse() : y.getBufferTemplate.call(i)).slice(0, s.begin).join("") && (a = ""),
                r == (i.isRTL ? y.getBufferTemplate.call(i).slice().reverse() : y.getBufferTemplate.call(i)).slice(s.end).join("") && (r = ""),
                window.clipboardData && window.clipboardData.getData)
                    o = a + window.clipboardData.getData("Text") + r;
                else {
                    if (!e.clipboardData || !e.clipboardData.getData)
                        return !0;
                    o = a + e.clipboardData.getData("text/plain") + r
                }
                var l = o;
                if ("function" == typeof n.onBeforePaste) {
                    if (!1 === (l = n.onBeforePaste.call(i, o, n)))
                        return e.preventDefault();
                    l = l || o
                }
                return (0,
                k.checkVal)(this, !0, !1, l.toString().split(""), e),
                e.preventDefault()
            },
            inputFallBackEvent: function h(e) {
                function t(e, t, i) {
                    if (d.iemobile) {
                        var n = t.replace(y.getBuffer.call(m).join(""), "");
                        if (1 === n.length) {
                            var o = t.split("");
                            o.splice(i.begin, 0, n),
                            t = o.join("")
                        }
                    }
                    return t
                }
                function i(e, t, i) {
                    for (var n, o, s, a = e.substr(0, i.begin).split(""), r = e.substr(i.begin).split(""), l = t.substr(0, i.begin).split(""), c = t.substr(i.begin).split(""), u = a.length >= l.length ? a.length : l.length, d = r.length >= c.length ? r.length : c.length, p = "", h = []; a.length < u; )
                        a.push("~");
                    for (; l.length < u; )
                        l.push("~");
                    for (; r.length < d; )
                        r.unshift("~");
                    for (; c.length < d; )
                        c.unshift("~");
                    var f = a.concat(r)
                      , v = l.concat(c);
                    for (o = 0,
                    n = f.length; o < n; o++)
                        switch (s = w.getPlaceholder.call(m, y.translatePosition.call(m, o)),
                        p) {
                        case "insertText":
                            v[o - 1] === f[o] && i.begin == f.length - 1 && h.push(f[o]),
                            o = n;
                            break;
                        case "insertReplacementText":
                        case "deleteContentBackward":
                            "~" === f[o] ? i.end++ : o = n;
                            break;
                        default:
                            f[o] !== v[o] && ("~" !== f[o + 1] && f[o + 1] !== s && void 0 !== f[o + 1] || (v[o] !== s || "~" !== v[o + 1]) && "~" !== v[o] ? "~" === v[o + 1] && v[o] === f[o + 1] ? (p = "insertText",
                            h.push(f[o]),
                            i.begin--,
                            i.end--) : f[o] !== s && "~" !== f[o] && ("~" === f[o + 1] || v[o] !== f[o] && v[o + 1] === f[o + 1]) ? (p = "insertReplacementText",
                            h.push(f[o]),
                            i.begin--) : "~" === f[o] ? (p = "deleteContentBackward",
                            !y.isMask.call(m, y.translatePosition.call(m, o), !0) && v[o] !== g.radixPoint || i.end++) : o = n : (p = "insertText",
                            h.push(f[o]),
                            i.begin--,
                            i.end--))
                        }
                    return {
                        action: p,
                        data: h,
                        caret: i
                    }
                }
                var m = this.inputmask
                  , g = m.opts
                  , n = m.dependencyLib
                  , o = this
                  , s = o.inputmask._valueGet(!0)
                  , a = (m.isRTL ? y.getBuffer.call(m).slice().reverse() : y.getBuffer.call(m)).join("")
                  , r = y.caret.call(m, o, void 0, void 0, !0);
                if (a !== s) {
                    var l = i(s = t(o, s, r), a, r);
                    switch ((o.inputmask.shadowRoot || document).activeElement !== o && o.focus(),
                    (0,
                    k.writeBuffer)(o, y.getBuffer.call(m)),
                    y.caret.call(m, o, r.begin, r.end, !0),
                    l.action) {
                    case "insertText":
                    case "insertReplacementText":
                        l.data.forEach(function(e) {
                            var t = new n.Event("keypress");
                            t.which = e.charCodeAt(0),
                            m.ignorable = !1,
                            u.keypressEvent.call(o, t)
                        }),
                        setTimeout(function() {
                            m.$el.trigger("keyup")
                        }, 0);
                        break;
                    case "deleteContentBackward":
                        var c = new n.Event("keydown");
                        c.keyCode = b["default"].BACKSPACE,
                        u.keydownEvent.call(o, c);
                        break;
                    default:
                        (0,
                        k.applyInputValue)(o, s)
                    }
                    e.preventDefault()
                }
            },
            compositionendEvent: function s() {
                var e = this.inputmask;
                e.isComposing = !1,
                e.$el.trigger("input")
            },
            setValueEvent: function a(e, t, i) {
                var n = this.inputmask
                  , o = e && e.detail ? e.detail[0] : t;
                void 0 === o && (o = this.inputmask._valueGet(!0)),
                (0,
                k.applyInputValue)(this, o),
                (e.detail && void 0 !== e.detail[1] || void 0 !== i) && y.caret.call(n, this, e.detail ? e.detail[1] : i)
            },
            focusEvent: function r(e) {
                var t = this.inputmask
                  , i = t.opts
                  , n = this.inputmask._valueGet();
                i.showMaskOnFocus && n !== y.getBuffer.call(t).join("") && (0,
                k.writeBuffer)(this, y.getBuffer.call(t), y.seekNext.call(t, y.getLastValidPosition.call(t))),
                !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || g.isComplete.call(t, y.getBuffer.call(t)) && -1 !== y.getLastValidPosition.call(t) || u.clickEvent.apply(this, [e, !0]),
                t.undoValue = y.getBuffer.call(t).join("")
            },
            invalidEvent: function l() {
                this.inputmask.validationEvent = !0
            },
            mouseleaveEvent: function f() {
                var e = this.inputmask
                  , t = e.opts;
                e.mouseEnter = !1,
                t.clearMaskOnLostFocus && (this.inputmask.shadowRoot || document).activeElement !== this && (0,
                k.HandleNativePlaceholder)(this, e.originalPlaceholder)
            },
            clickEvent: function v(e, t) {
                var i = this.inputmask;
                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                    var n = y.determineNewCaretPosition.call(i, y.caret.call(i, this), t);
                    void 0 !== n && y.caret.call(i, this, n)
                }
            },
            cutEvent: function m(e) {
                var t = this.inputmask
                  , i = t.maskset
                  , n = y.caret.call(t, this)
                  , o = window.clipboardData || e.clipboardData
                  , s = t.isRTL ? y.getBuffer.call(t).slice(n.end, n.begin) : y.getBuffer.call(t).slice(n.begin, n.end);
                o.setData("text", t.isRTL ? s.reverse().join("") : s.join("")),
                document.execCommand && document.execCommand("copy"),
                g.handleRemove.call(t, this, b["default"].DELETE, n),
                (0,
                k.writeBuffer)(this, y.getBuffer.call(t), i.p, e, t.undoValue !== y.getBuffer.call(t).join(""))
            },
            blurEvent: function S(e) {
                var t = this.inputmask
                  , i = t.opts
                  , n = (0,
                t.dependencyLib)(this);
                if (this.inputmask) {
                    (0,
                    k.HandleNativePlaceholder)(this, t.originalPlaceholder);
                    var o = this.inputmask._valueGet()
                      , s = y.getBuffer.call(t).slice();
                    "" !== o && (i.clearMaskOnLostFocus && (-1 === y.getLastValidPosition.call(t) && o === y.getBufferTemplate.call(t).join("") ? s = [] : k.clearOptionalTail.call(t, s)),
                    !1 === g.isComplete.call(t, s) && (setTimeout(function() {
                        n.trigger("incomplete")
                    }, 0),
                    i.clearIncomplete && (y.resetMaskSet.call(t),
                    s = i.clearMaskOnLostFocus ? [] : y.getBufferTemplate.call(t).slice())),
                    (0,
                    k.writeBuffer)(this, s, void 0, e)),
                    t.undoValue !== y.getBuffer.call(t).join("") && (t.undoValue = y.getBuffer.call(t).join(""),
                    n.trigger("change"))
                }
            },
            mouseenterEvent: function x() {
                var e = this.inputmask
                  , t = e.opts;
                if (e.mouseEnter = !0,
                (this.inputmask.shadowRoot || document).activeElement !== this) {
                    var i = (e.isRTL ? y.getBufferTemplate.call(e).slice().reverse() : y.getBufferTemplate.call(e)).join("");
                    e.placeholder !== i && this.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = this.placeholder),
                    t.showMaskOnHover && (0,
                    k.HandleNativePlaceholder)(this, i)
                }
            },
            submitEvent: function C() {
                var e = this.inputmask
                  , t = e.opts;
                e.undoValue !== y.getBuffer.call(e).join("") && e.$el.trigger("change"),
                t.clearMaskOnLostFocus && -1 === y.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === y.getBufferTemplate.call(e).join("") && e._valueSet(""),
                t.clearIncomplete && !1 === g.isComplete.call(e, y.getBuffer.call(e)) && e._valueSet(""),
                t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0),
                setTimeout(function() {
                    (0,
                    k.writeBuffer)(e.el, y.getBuffer.call(e))
                }, 0))
            },
            resetEvent: function $() {
                var e = this.inputmask;
                e.refreshValue = !0,
                setTimeout(function() {
                    (0,
                    k.applyInputValue)(e.el, e._valueGet(!0))
                }, 0)
            }
        };
        t.EventHandlers = u
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.iphone = t.iemobile = t.mobile = t.ie = t.ua = void 0;
        var o = n(i(8))
          , s = o["default"].navigator && o["default"].navigator.userAgent || ""
          , a = 0 < s.indexOf("MSIE ") || 0 < s.indexOf("Trident/")
          , r = "ontouchstart"in o["default"]
          , l = /iemobile/i.test(s)
          , c = /iphone/i.test(s) && !l;
        t.iphone = c,
        t.iemobile = l,
        t.mobile = r,
        t.ie = a,
        t.ua = s
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0;
        var o = n(i(9))["default"] ? window : {};
        t["default"] = o
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0;
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t["default"] = i
    }
    , function(e) {
        e.exports = t
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EventRuler = void 0;
        var d = n(i(2))
          , p = n(i(0))
          , h = i(1)
          , f = i(5)
          , o = {
            on: function s(r, e, l) {
                var c = r.inputmask.dependencyLib
                  , u = function u(e) {
                    e.originalEvent && (e = e.originalEvent || e,
                    arguments[0] = e);
                    var t, i = this, n = i.inputmask, o = n ? n.opts : void 0;
                    if (void 0 === n && "FORM" !== this.nodeName) {
                        var s = c.data(i, "_inputmask_opts");
                        c(i).off(),
                        s && new d["default"](s).mask(i)
                    } else {
                        if (["submit", "reset", "setvalue"].includes(e.type) || "FORM" === this.nodeName || !(i.disabled || i.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === o.tabThrough && e.keyCode === p["default"].TAB))) {
                            switch (e.type) {
                            case "input":
                                if (!0 === n.skipInputEvent || e.inputType && "insertCompositionText" === e.inputType)
                                    return n.skipInputEvent = !1,
                                    e.preventDefault();
                                break;
                            case "keydown":
                                n.skipKeyPressEvent = !1,
                                n.skipInputEvent = n.isComposing = e.keyCode === p["default"].KEY_229;
                                break;
                            case "keyup":
                            case "compositionend":
                                n.isComposing && (n.skipInputEvent = !1);
                                break;
                            case "keypress":
                                if (!0 === n.skipKeyPressEvent)
                                    return e.preventDefault();
                                n.skipKeyPressEvent = !0;
                                break;
                            case "click":
                            case "focus":
                                return n.validationEvent ? (n.validationEvent = !1,
                                r.blur(),
                                (0,
                                f.HandleNativePlaceholder)(r, (n.isRTL ? h.getBufferTemplate.call(n).slice().reverse() : h.getBufferTemplate.call(n)).join("")),
                                setTimeout(function() {
                                    r.focus()
                                }, 3e3)) : (t = arguments,
                                setTimeout(function() {
                                    r.inputmask && l.apply(i, t)
                                }, 0)),
                                !1
                            }
                            var a = l.apply(i, arguments);
                            return !1 === a && (e.preventDefault(),
                            e.stopPropagation()),
                            a
                        }
                        e.preventDefault()
                    }
                };
                ["submit", "reset"].includes(e) ? (u = u.bind(r),
                null !== r.form && c(r.form).on(e, u)) : c(r).on(e, u),
                r.inputmask.events[e] = r.inputmask.events[e] || [],
                r.inputmask.events[e].push(u)
            },
            off: function r(e, t) {
                if (e.inputmask && e.inputmask.events) {
                    var i = e.inputmask.dependencyLib
                      , n = e.inputmask.events;
                    for (var o in t && ((n = [])[t] = e.inputmask.events[t]),
                    n) {
                        for (var s = n[o]; 0 < s.length; ) {
                            var a = s.pop();
                            ["submit", "reset"].includes(o) ? null !== e.form && i(e.form).off(o, a) : i(e).off(o, a)
                        }
                        delete e.inputmask.events[o]
                    }
                }
            }
        };
        t.EventRuler = o
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0;
        var o = n(i(10));
        if (void 0 === o["default"])
            throw "jQuery not loaded!";
        var s = o["default"];
        t["default"] = s
    }
    , function(e, t) {
        function i(e) {
            return e.replace(n, "\\$1")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = i;
        var n = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")","gim")
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0,
        i(15),
        i(22),
        i(23),
        i(24);
        var o = n(i(2))["default"];
        t["default"] = o
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(e, t, i) {
            return e = -1 < i - 1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e,
            -1 < i - 2 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : "00" + e,
            l.test(e)
        }
        var s = n(i(2))
          , a = i(1)
          , r = i(3);
        s["default"].extendDefinitions({
            A: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
            }
        });
        var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
        s["default"].extendAliases({
            cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
            },
            url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: !1,
                keepStatic: !1,
                tabThrough: !0
            },
            ip: {
                mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]",
                definitions: {
                    i: {
                        validator: o
                    },
                    j: {
                        validator: o
                    },
                    k: {
                        validator: o
                    },
                    l: {
                        validator: o
                    }
                },
                onUnMask: function c(e) {
                    return e
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                casing: "lower",
                onBeforePaste: function u(e) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]"
                    }
                },
                onUnMask: function c(e) {
                    return e
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            },
            ssn: {
                mask: "999-99-9999",
                postValidation: function d() {
                    var e = r.getMaskTemplate.call(this, !0, a.getLastValidPosition.call(this), !0, !0);
                    return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(e.join(""))
                }
            }
        })
    }
    , function() {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                return typeof e
            }
            : function i(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === n("test".__proto__) ? function(e) {
            return e.__proto__
        }
        : function(e) {
            return e.constructor.prototype
        }
        )
    }
    , function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function a(e, t) {
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var i = Object(this)
                  , n = i.length >>> 0;
                if (0 == n)
                    return !1;
                for (var o = 0 | t, s = Math.max(0 <= o ? o : n - Math.abs(o), 0); s < n; ) {
                    if (i[s] === e)
                        return !0;
                    s++
                }
                return !1
            }
        })
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o() {
            function e(e, l) {
                function t(e) {
                    function t(e) {
                        if (u.valHooks && (void 0 === u.valHooks[e] || !0 !== u.valHooks[e].inputmaskpatch)) {
                            var i = u.valHooks[e] && u.valHooks[e].get ? u.valHooks[e].get : function(e) {
                                return e.value
                            }
                              , n = u.valHooks[e] && u.valHooks[e].set ? u.valHooks[e].set : function(e, t) {
                                return e.value = t,
                                e
                            }
                            ;
                            u.valHooks[e] = {
                                get: function o(e) {
                                    if (e.inputmask) {
                                        if (e.inputmask.opts.autoUnmask)
                                            return e.inputmask.unmaskedvalue();
                                        var t = i(e);
                                        return -1 !== d.getLastValidPosition.call(c, void 0, void 0, e.inputmask.maskset.validPositions) || !0 !== l.nullable ? t : ""
                                    }
                                    return i(e)
                                },
                                set: function s(e, t) {
                                    var i = n(e, t);
                                    return e.inputmask && (0,
                                    p.applyInputValue)(e, t),
                                    i
                                },
                                inputmaskpatch: !0
                            }
                        }
                    }
                    function i() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== d.getLastValidPosition.call(c) || !0 !== l.nullable ? (this.inputmask.shadowRoot || document.activeElement) === this && l.clearMaskOnLostFocus ? (c.isRTL ? p.clearOptionalTail.call(c, d.getBuffer.call(c).slice()).reverse() : p.clearOptionalTail.call(c, d.getBuffer.call(c).slice())).join("") : s.call(this) : "" : s.call(this)
                    }
                    function n(e) {
                        a.call(this, e),
                        this.inputmask && (0,
                        p.applyInputValue)(this, e)
                    }
                    function o(e) {
                        h.EventRuler.on(e, "mouseenter", function() {
                            var e = this.inputmask._valueGet(!0);
                            e !== (c.isRTL ? d.getBuffer.call(c).reverse() : d.getBuffer.call(c)).join("") && (0,
                            p.applyInputValue)(this, e)
                        })
                    }
                    var s, a;
                    if (!e.inputmask.__valueGet) {
                        if (!0 !== l.noValuePatching) {
                            if (Object.getOwnPropertyDescriptor) {
                                var r = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                r && r.get && r.set ? (s = r.get,
                                a = r.set,
                                Object.defineProperty(e, "value", {
                                    get: i,
                                    set: n,
                                    configurable: !0
                                })) : "input" !== e.tagName.toLowerCase() && (s = function s() {
                                    return this.textContent
                                }
                                ,
                                a = function a(e) {
                                    this.textContent = e
                                }
                                ,
                                Object.defineProperty(e, "value", {
                                    get: i,
                                    set: n,
                                    configurable: !0
                                }))
                            } else
                                document.__lookupGetter__ && e.__lookupGetter__("value") && (s = e.__lookupGetter__("value"),
                                a = e.__lookupSetter__("value"),
                                e.__defineGetter__("value", i),
                                e.__defineSetter__("value", n));
                            e.inputmask.__valueGet = s,
                            e.inputmask.__valueSet = a
                        }
                        e.inputmask._valueGet = function(e) {
                            return c.isRTL && !0 !== e ? s.call(this.el).split("").reverse().join("") : s.call(this.el)
                        }
                        ,
                        e.inputmask._valueSet = function(e, t) {
                            a.call(this.el, null == e ? "" : !0 !== t && c.isRTL ? e.split("").reverse().join("") : e)
                        }
                        ,
                        void 0 === s && (s = function s() {
                            return this.value
                        }
                        ,
                        a = function a(e) {
                            this.value = e
                        }
                        ,
                        t(e.type),
                        o(e))
                    }
                }
                "textarea" !== e.tagName.toLowerCase() && l.ignorables.push(a["default"].ENTER);
                var i = e.getAttribute("type")
                  , n = "input" === e.tagName.toLowerCase() && l.supportsInputType.includes(i) || e.isContentEditable || "textarea" === e.tagName.toLowerCase();
                if (!n)
                    if ("input" === e.tagName.toLowerCase()) {
                        var o = document.createElement("input");
                        o.setAttribute("type", i),
                        n = "text" === o.type,
                        o = null
                    } else
                        n = "partial";
                return !1 !== n ? t(e) : e.inputmask = void 0,
                n
            }
            var c = this
              , t = this.opts
              , i = this.el
              , u = this.dependencyLib;
            h.EventRuler.off(i);
            var n = e(i, t);
            if (!1 !== n) {
                c.originalPlaceholder = i.placeholder,
                c.maxLength = void 0 !== i ? i.maxLength : void 0,
                -1 === c.maxLength && (c.maxLength = void 0),
                "inputMode"in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode,
                i.setAttribute("inputmode", t.inputmode)),
                !0 === n && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(i.autocomplete),
                r.iphone && (t.insertModeVisual = !1),
                h.EventRuler.on(i, "submit", f.EventHandlers.submitEvent),
                h.EventRuler.on(i, "reset", f.EventHandlers.resetEvent),
                h.EventRuler.on(i, "blur", f.EventHandlers.blurEvent),
                h.EventRuler.on(i, "focus", f.EventHandlers.focusEvent),
                h.EventRuler.on(i, "invalid", f.EventHandlers.invalidEvent),
                h.EventRuler.on(i, "click", f.EventHandlers.clickEvent),
                h.EventRuler.on(i, "mouseleave", f.EventHandlers.mouseleaveEvent),
                h.EventRuler.on(i, "mouseenter", f.EventHandlers.mouseenterEvent),
                h.EventRuler.on(i, "paste", f.EventHandlers.pasteEvent),
                h.EventRuler.on(i, "cut", f.EventHandlers.cutEvent),
                h.EventRuler.on(i, "complete", t.oncomplete),
                h.EventRuler.on(i, "incomplete", t.onincomplete),
                h.EventRuler.on(i, "cleared", t.oncleared),
                !0 !== t.inputEventOnly && (h.EventRuler.on(i, "keydown", f.EventHandlers.keydownEvent),
                h.EventRuler.on(i, "keypress", f.EventHandlers.keypressEvent),
                h.EventRuler.on(i, "keyup", f.EventHandlers.keyupEvent)),
                (r.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"),
                h.EventRuler.on(i, "input", f.EventHandlers.inputFallBackEvent),
                h.EventRuler.on(i, "compositionend", f.EventHandlers.compositionendEvent)),
                h.EventRuler.on(i, "setvalue", f.EventHandlers.setValueEvent),
                c.undoValue = d.getBufferTemplate.call(c).join("");
                var o = (i.inputmask.shadowRoot || document).activeElement;
                if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || o === i) {
                    (0,
                    p.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                    var s = d.getBuffer.call(c).slice();
                    !1 === l.isComplete.call(c, s) && t.clearIncomplete && d.resetMaskSet.call(c),
                    t.clearMaskOnLostFocus && o !== i && (-1 === d.getLastValidPosition.call(c) ? s = [] : p.clearOptionalTail.call(c, s)),
                    (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && o === i || "" !== i.inputmask._valueGet(!0)) && (0,
                    p.writeBuffer)(i, s),
                    o === i && d.caret.call(c, i, d.seekNext.call(c, d.getLastValidPosition.call(c)))
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.mask = o;
        var a = n(i(0))
          , d = i(1)
          , p = i(5)
          , h = i(11)
          , r = i(7)
          , l = i(4)
          , f = i(6)
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function o(t, r) {
            function e(e, t, i) {
                var n, o, s = !1;
                if (null !== e && "" !== e || (e = (s = null !== i.regex) ? (e = i.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0,
                ".*")),
                1 === e.length && !1 === i.greedy && 0 !== i.repeat && (i.placeholder = ""),
                0 < i.repeat || "*" === i.repeat || "+" === i.repeat) {
                    var a = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                    e = i.groupmarker[0] + e + i.groupmarker[1] + i.quantifiermarker[0] + a + "," + i.repeat + i.quantifiermarker[1]
                }
                return o = s ? "regex_" + i.regex : i.numericInput ? e.split("").reverse().join("") : e,
                !1 !== i.keepStatic && (o = "ks_" + o),
                void 0 === Inputmask.prototype.masksCache[o] || !0 === r ? (n = {
                    mask: e,
                    maskToken: Inputmask.prototype.analyseMask(e, s, i),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    excludes: {},
                    metadata: t,
                    maskLength: void 0,
                    jitOffset: {}
                },
                !0 !== r && (Inputmask.prototype.masksCache[o] = n,
                n = l["default"].extend(!0, {}, Inputmask.prototype.masksCache[o]))) : n = l["default"].extend(!0, {}, Inputmask.prototype.masksCache[o]),
                n
            }
            if ("function" == typeof t.mask && (t.mask = t.mask(t)),
            Array.isArray(t.mask)) {
                if (1 < t.mask.length) {
                    null === t.keepStatic && (t.keepStatic = !0);
                    var i = t.groupmarker[0];
                    return (t.isRTL ? t.mask.reverse() : t.mask).forEach(function(e) {
                        1 < i.length && (i += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]),
                        void 0 !== e.mask && "function" != typeof e.mask ? i += e.mask : i += e
                    }),
                    e(i += t.groupmarker[1], t.mask, t)
                }
                t.mask = t.mask.pop()
            }
            return null === t.keepStatic && (t.keepStatic = !1),
            t.mask && void 0 !== t.mask.mask && "function" != typeof t.mask.mask ? e(t.mask.mask, t.mask, t) : e(t.mask, t.mask, t)
        }
        function s(e, s, a) {
            function i(e, t, i, n) {
                this.matches = [],
                this.openGroup = e || !1,
                this.alternatorGroup = !1,
                this.isGroup = e || !1,
                this.isOptional = t || !1,
                this.isQuantifier = i || !1,
                this.isAlternator = n || !1,
                this.quantifier = {
                    min: 1,
                    max: 1
                }
            }
            function o(t, e, i) {
                i = void 0 !== i ? i : t.matches.length;
                var n = t.matches[i - 1];
                if (s)
                    0 === e.indexOf("[") || b && /\\d|\\s|\\w]/i.test(e) || "." === e ? t.matches.splice(i++, 0, {
                        fn: new RegExp(e,a.casing ? "i" : ""),
                        "static": !1,
                        optionality: !1,
                        newBlockMarker: void 0 === n ? "master" : n.def !== e,
                        casing: null,
                        def: e,
                        placeholder: void 0,
                        nativeDef: e
                    }) : (b && (e = e[e.length - 1]),
                    e.split("").forEach(function(e) {
                        n = t.matches[i - 1],
                        t.matches.splice(i++, 0, {
                            fn: /[a-z]/i.test(a.staticDefinitionSymbol || e) ? new RegExp("[" + (a.staticDefinitionSymbol || e) + "]",a.casing ? "i" : "") : null,
                            "static": !0,
                            optionality: !1,
                            newBlockMarker: void 0 === n ? "master" : n.def !== e && !0 !== n["static"],
                            casing: null,
                            def: a.staticDefinitionSymbol || e,
                            placeholder: void 0 !== a.staticDefinitionSymbol ? e : void 0,
                            nativeDef: (b ? "'" : "") + e
                        })
                    })),
                    b = !1;
                else {
                    var o = a.definitions && a.definitions[e] || a.usePrototypeDefinitions && Inputmask.prototype.definitions[e];
                    o && !b ? t.matches.splice(i++, 0, {
                        fn: o.validator ? "string" == typeof o.validator ? new RegExp(o.validator,a.casing ? "i" : "") : new function() {
                            this.test = o.validator
                        }
                        : new RegExp("."),
                        "static": o["static"] || !1,
                        optionality: !1,
                        newBlockMarker: void 0 === n ? "master" : n.def !== (o.definitionSymbol || e),
                        casing: o.casing,
                        def: o.definitionSymbol || e,
                        placeholder: o.placeholder,
                        nativeDef: e,
                        generated: o.generated
                    }) : (t.matches.splice(i++, 0, {
                        fn: /[a-z]/i.test(a.staticDefinitionSymbol || e) ? new RegExp("[" + (a.staticDefinitionSymbol || e) + "]",a.casing ? "i" : "") : null,
                        "static": !0,
                        optionality: !1,
                        newBlockMarker: void 0 === n ? "master" : n.def !== e && !0 !== n["static"],
                        casing: null,
                        def: a.staticDefinitionSymbol || e,
                        placeholder: void 0 !== a.staticDefinitionSymbol ? e : void 0,
                        nativeDef: (b ? "'" : "") + e
                    }),
                    b = !1)
                }
            }
            function r(n) {
                n && n.matches && n.matches.forEach(function(e, t) {
                    var i = n.matches[t + 1];
                    (void 0 === i || void 0 === i.matches || !1 === i.isQuantifier) && e && e.isGroup && (e.isGroup = !1,
                    s || (o(e, a.groupmarker[0], 0),
                    !0 !== e.openGroup && o(e, a.groupmarker[1]))),
                    r(e)
                })
            }
            function t() {
                if (0 < w.length) {
                    if (o(f = w[w.length - 1], p),
                    f.isAlternator) {
                        v = w.pop();
                        for (var e = 0; e < v.matches.length; e++)
                            v.matches[e].isGroup && (v.matches[e].isGroup = !1);
                        0 < w.length ? (f = w[w.length - 1]).matches.push(v) : k.matches.push(v)
                    }
                } else
                    o(k, p)
            }
            function l(e) {
                function t(e) {
                    return e === a.optionalmarker[0] ? e = a.optionalmarker[1] : e === a.optionalmarker[1] ? e = a.optionalmarker[0] : e === a.groupmarker[0] ? e = a.groupmarker[1] : e === a.groupmarker[1] && (e = a.groupmarker[0]),
                    e
                }
                for (var i in e.matches = e.matches.reverse(),
                e.matches)
                    if (Object.prototype.hasOwnProperty.call(e.matches, i)) {
                        var n = parseInt(i);
                        if (e.matches[i].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
                            var o = e.matches[i];
                            e.matches.splice(i, 1),
                            e.matches.splice(n + 1, 0, o)
                        }
                        void 0 !== e.matches[i].matches ? e.matches[i] = l(e.matches[i]) : e.matches[i] = t(e.matches[i])
                    }
                return e
            }
            function n(e) {
                var t = new i(!0);
                return t.openGroup = !1,
                t.matches = e,
                t
            }
            function c() {
                if ((h = w.pop()).openGroup = !1,
                void 0 !== h)
                    if (0 < w.length) {
                        if ((f = w[w.length - 1]).matches.push(h),
                        f.isAlternator) {
                            v = w.pop();
                            for (var e = 0; e < v.matches.length; e++)
                                v.matches[e].isGroup = !1,
                                v.matches[e].alternatorGroup = !1;
                            0 < w.length ? (f = w[w.length - 1]).matches.push(v) : k.matches.push(v)
                        }
                    } else
                        k.matches.push(h);
                else
                    t()
            }
            function u(e) {
                var t = e.pop();
                return t.isQuantifier && (t = n([e.pop(), t])),
                t
            }
            var d, p, h, f, v, m, g = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, y = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, b = !1, k = new i, w = [], _ = [], S = !1;
            for (s && (a.optionalmarker[0] = void 0,
            a.optionalmarker[1] = void 0); d = s ? y.exec(e) : g.exec(e); ) {
                if (p = d[0],
                s)
                    switch (p.charAt(0)) {
                    case "?":
                        p = "{0,1}";
                        break;
                    case "+":
                    case "*":
                        p = "{" + p + "}";
                        break;
                    case "|":
                        if (0 === w.length) {
                            var x = n(k.matches);
                            x.openGroup = !0,
                            w.push(x),
                            k.matches = [],
                            S = !0
                        }
                    }
                if (b)
                    t();
                else
                    switch (p.charAt(0)) {
                    case "$":
                    case "^":
                        s || t();
                        break;
                    case "(?=":
                    case "(?!":
                    case "(?<=":
                    case "(?<!":
                        break;
                    case a.escapeChar:
                        b = !0,
                        s && t();
                        break;
                    case a.optionalmarker[1]:
                    case a.groupmarker[1]:
                        c();
                        break;
                    case a.optionalmarker[0]:
                        w.push(new i(!1,!0));
                        break;
                    case a.groupmarker[0]:
                        w.push(new i(!0));
                        break;
                    case a.quantifiermarker[0]:
                        var C = new i(!1,!1,!0)
                          , $ = (p = p.replace(/[{}]/g, "")).split("|")
                          , T = $[0].split(",")
                          , P = isNaN(T[0]) ? T[0] : parseInt(T[0])
                          , M = 1 === T.length ? P : isNaN(T[1]) ? T[1] : parseInt(T[1]);
                        "*" !== P && "+" !== P || (P = "*" === M ? 0 : 1),
                        C.quantifier = {
                            min: P,
                            max: M,
                            jit: $[1]
                        };
                        var E = 0 < w.length ? w[w.length - 1].matches : k.matches;
                        if ((d = E.pop()).isAlternator) {
                            E.push(d),
                            E = d.matches;
                            var O = new i(!0)
                              , j = E.pop();
                            E.push(O),
                            E = O.matches,
                            d = j
                        }
                        d.isGroup || (d = n([d])),
                        E.push(d),
                        E.push(C);
                        break;
                    case a.alternatormarker:
                        if (0 < w.length) {
                            var A = (f = w[w.length - 1]).matches[f.matches.length - 1];
                            m = f.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? w.pop() : u(f.matches)
                        } else
                            m = u(k.matches);
                        if (m.isAlternator)
                            w.push(m);
                        else if (m.alternatorGroup ? (v = w.pop(),
                        m.alternatorGroup = !1) : v = new i(!1,!1,!1,!0),
                        v.matches.push(m),
                        w.push(v),
                        m.openGroup) {
                            var I = new i(!(m.openGroup = !1));
                            I.alternatorGroup = !0,
                            w.push(I)
                        }
                        break;
                    default:
                        t()
                    }
            }
            for (S && c(); 0 < w.length; )
                h = w.pop(),
                k.matches.push(h);
            return 0 < k.matches.length && (r(k),
            _.push(k)),
            (a.numericInput || a.isRTL) && l(_[0]),
            _
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateMaskSet = o,
        t.analyseMask = s;
        var l = n(i(12))
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0;
        var i = {
            9: {
                validator: "[0-9\uff10-\uff19]",
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
            }
        };
        t["default"] = i
    }
    , function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            _maxTestPos: 500,
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: function n() {},
            onincomplete: function o() {},
            oncleared: function s() {},
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !(t["default"] = void 0),
            insertMode: !0,
            insertModeVisual: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: function a() {},
            onBeforeMask: null,
            onBeforePaste: function r(e, t) {
                return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: function l() {},
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "text",
            importDataAttributes: !0,
            shiftPositions: !0,
            usePrototypeDefinitions: !0
        };
        t["default"] = i
    }
    , function(e, t, i) {
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                return typeof e
            }
            : function i(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function r(e) {
            var t = new RegExp("\\d+$").exec(e[0]);
            if (t && void 0 !== t[0]) {
                var i = _[e[0][0] + "x"].slice("");
                return i[0] = i[0](t[0]),
                i[3] = i[3](t[0]),
                i
            }
            if (_[e[0]])
                return _[e[0]]
        }
        function v(e) {
            if (!e.tokenizer) {
                var t = []
                  , i = [];
                for (var n in _)
                    if (/\.*x$/.test(n)) {
                        var o = n[0] + "\\d+";
                        -1 === i.indexOf(o) && i.push(o)
                    } else
                        -1 === t.indexOf(n[0]) && t.push(n[0]);
                e.tokenizer = "(" + (0 < i.length ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.",
                e.tokenizer = new RegExp(e.tokenizer,"g")
            }
            return e.tokenizer
        }
        function h(e, t, i) {
            if (e.year !== e.rawyear) {
                var n = d.toString()
                  , o = e.rawyear.replace(/[^0-9]/g, "")
                  , s = n.slice(0, o.length)
                  , a = n.slice(o.length);
                if (2 === o.length && o === s) {
                    var r = new Date(d,e.month - 1,e.day);
                    e.day == r.getDate() && (!i.max || i.max.date.getTime() >= r.getTime()) && (e.date.setFullYear(d),
                    e.year = n,
                    t.insert = [{
                        pos: t.pos + 1,
                        c: a[0]
                    }, {
                        pos: t.pos + 2,
                        c: a[1]
                    }])
                }
            }
            return t
        }
        function m(e, t, i) {
            if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(),isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1,0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(),isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1,0).getDate() >= e.day)
                return t;
            if ("29" == e.day) {
                var n = w(t.pos, i);
                if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2)
                    return t.remove = t.pos + 1,
                    t
            } else if ("02" == e.month && "30" == e.day && void 0 !== t.c)
                return e.day = "03",
                e.date.setDate(3),
                e.date.setMonth(1),
                t.insert = [{
                    pos: t.pos,
                    c: "0"
                }, {
                    pos: t.pos + 1,
                    c: t.c
                }],
                t.caret = c.seekNext.call(this, t.pos + 1),
                t;
            return !1
        }
        function g(e, t, i, n, o) {
            if (!t)
                return t;
            if (i.min) {
                if (e.rawyear) {
                    var s, a = e.rawyear.replace(/[^0-9]/g, ""), r = i.min.year.substr(0, a.length);
                    if (a < r) {
                        var l = w(t.pos, i);
                        if (a = e.rawyear.substr(0, t.pos - l.targetMatchIndex + 1).replace(/[^0-9]/g, "0"),
                        (r = i.min.year.substr(0, a.length)) <= a)
                            return t.remove = l.targetMatchIndex + a.length,
                            t;
                        if (a = "yyyy" === l.targetMatch[0] ? e.rawyear.substr(1, 1) : e.rawyear.substr(0, 1),
                        r = i.min.year.substr(2, 1),
                        s = i.max ? i.max.year.substr(2, 1) : a,
                        1 === a.length && r <= a && a <= s && !0 !== o)
                            return "yyyy" === l.targetMatch[0] ? (t.insert = [{
                                pos: t.pos + 1,
                                c: a,
                                strict: !0
                            }],
                            t.caret = t.pos + 2,
                            n.validPositions[t.pos].input = i.min.year[1]) : (t.insert = [{
                                pos: t.pos + 1,
                                c: i.min.year[1],
                                strict: !0
                            }, {
                                pos: t.pos + 2,
                                c: a,
                                strict: !0
                            }],
                            t.caret = t.pos + 3,
                            n.validPositions[t.pos].input = i.min.year[0]),
                            t;
                        t = !1
                    }
                }
                t && e.year && e.year === e.rawyear && i.min.date.getTime() == i.min.date.getTime() && (t = i.min.date.getTime() <= e.date.getTime())
            }
            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()),
            t
        }
        function y(e, t, i, n) {
            var o, s, a = "";
            for (v(i).lastIndex = 0; o = v(i).exec(e); )
                if (void 0 === t)
                    if (s = r(o))
                        a += "(" + s[0] + ")";
                    else
                        switch (o[0]) {
                        case "[":
                            a += "(";
                            break;
                        case "]":
                            a += ")?";
                            break;
                        default:
                            a += (0,
                            l["default"])(o[0])
                        }
                else if (s = r(o))
                    if (!0 !== n && s[3]) {
                        a += s[3].call(t.date)
                    } else
                        s[2] ? a += t["raw" + s[2]] : a += o[0];
                else
                    a += o[0];
            return a
        }
        function b(e, t, i) {
            for (e = String(e),
            t = t || 2; e.length < t; )
                e = i ? e + "0" : "0" + e;
            return e
        }
        function k(e, t, i) {
            function n(e, t) {
                if (e[o] = t.replace(/[^0-9]/g, "0"),
                e["raw" + o] = t,
                void 0 !== a) {
                    var i = e[o];
                    ("day" === o && 29 === parseInt(i) || "month" === o && 2 === parseInt(i)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e.date.setFullYear(2012, 1, 29)),
                    "day" === o && 0 === parseInt(i) && (i = 1),
                    "month" === o && 0 < (i = parseInt(i)) && (i -= 1),
                    "year" === o && i.length < 4 && (i = b(i, 4, !0)),
                    "" !== i && a.call(e.date, i)
                }
            }
            var o, s, a, r = {
                date: new Date(1,0,1)
            }, l = e;
            if ("string" == typeof l) {
                for (v(i).lastIndex = 0; s = v(i).exec(t); ) {
                    var c = new RegExp("\\d+$").exec(s[0])
                      , u = c ? s[0][0] + "x" : s[0]
                      , d = void 0;
                    if (c) {
                        var p = v(i).lastIndex
                          , h = w(s.index, i);
                        v(i).lastIndex = p,
                        d = l.slice(0, l.indexOf(h.nextMatch[0]))
                    } else
                        d = l.slice(0, u.length);
                    Object.prototype.hasOwnProperty.call(_, u) && (o = _[u][2],
                    a = _[u][1],
                    n(r, d, i)),
                    l = l.slice(d.length)
                }
                return r
            }
            if (l && "object" === f(l) && Object.prototype.hasOwnProperty.call(l, "date"))
                return l
        }
        function o(e, t) {
            return y(t.inputFormat, {
                date: e
            }, t)
        }
        function w(e, t) {
            var i, n, o = 0, s = 0;
            for (v(t).lastIndex = 0; n = v(t).exec(t.inputFormat); ) {
                var a = new RegExp("\\d+$").exec(n[0]);
                if (e <= (o += s = a ? parseInt(a[0]) : n[0].length)) {
                    i = n,
                    n = v(t).exec(t.inputFormat);
                    break
                }
            }
            return {
                targetMatchIndex: o - s,
                nextMatch: n,
                targetMatch: i
            }
        }
        var s = n(i(2))
          , a = n(i(0))
          , l = n(i(13))
          , c = i(1)
          , u = s["default"].dependencyLib
          , d = (new Date).getFullYear()
          , _ = {
            d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
            dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return b(Date.prototype.getDate.call(this), 2)
            }
            ],
            ddd: [""],
            dddd: [""],
            m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return Date.prototype.getMonth.call(this) + 1
            }
            ],
            mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() {
                return b(Date.prototype.getMonth.call(this) + 1, 2)
            }
            ],
            mmm: [""],
            mmmm: [""],
            yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return b(Date.prototype.getFullYear.call(this), 2)
            }
            ],
            yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return b(Date.prototype.getFullYear.call(this), 4)
            }
            ],
            h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return b(Date.prototype.getHours.call(this), 2)
            }
            ],
            hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", function() {
                return Date.prototype.getHours
            }
            ],
            H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
            HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return b(Date.prototype.getHours.call(this), 2)
            }
            ],
            Hx: [function(e) {
                return "[0-9]{".concat(e, "}")
            }
            , Date.prototype.setHours, "hours", function(e) {
                return function() {
                    return b(Date.prototype.getHours.call(this), e)
                }
            }
            ],
            M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
            MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return b(Date.prototype.getMinutes.call(this), 2)
            }
            ],
            s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
            ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return b(Date.prototype.getSeconds.call(this), 2)
            }
            ],
            l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return b(Date.prototype.getMilliseconds.call(this), 3)
            }
            ],
            L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return b(Date.prototype.getMilliseconds.call(this), 2)
            }
            ],
            t: ["[ap]"],
            tt: ["[ap]m"],
            T: ["[AP]"],
            TT: ["[AP]M"],
            Z: [""],
            o: [""],
            S: [""]
        }
          , p = {
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };
        s["default"].extendAliases({
            datetime: {
                mask: function S(e) {
                    return e.numericInput = !1,
                    _.S = e.i18n.ordinalSuffix.join("|"),
                    e.inputFormat = p[e.inputFormat] || e.inputFormat,
                    e.displayFormat = p[e.displayFormat] || e.displayFormat || e.inputFormat,
                    e.outputFormat = p[e.outputFormat] || e.outputFormat || e.inputFormat,
                    e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""),
                    e.regex = y(e.inputFormat, void 0, e),
                    e.min = k(e.min, e.inputFormat, e),
                    e.max = k(e.max, e.inputFormat, e),
                    null
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: void 0,
                outputFormat: void 0,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                    dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function x(e, t, i, n, o, s, a, r) {
                    if (r)
                        return !0;
                    if (isNaN(i) && e[t] !== i) {
                        var l = w(t, o);
                        if (l.nextMatch && l.nextMatch[0] === i && 1 < l.targetMatch[0].length) {
                            var c = _[l.targetMatch[0]][0];
                            if (new RegExp(c).test("0" + e[t - 1]))
                                return e[t] = e[t - 1],
                                e[t - 1] = "0",
                                {
                                    fuzzy: !0,
                                    buffer: e,
                                    refreshFromBuffer: {
                                        start: t - 1,
                                        end: t + 1
                                    },
                                    pos: t + 1
                                }
                        }
                    }
                    return !0
                },
                postValidation: function C(e, t, i, n, o, s, a, r) {
                    var l, c;
                    if (a)
                        return !0;
                    if (!1 === n && ((l = w(t + 1, o)).targetMatch && l.targetMatchIndex === t && 1 < l.targetMatch[0].length && void 0 !== _[l.targetMatch[0]] && (c = _[l.targetMatch[0]][0],
                    void 0 !== s.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i,
                    e[t + 1] = "0",
                    n = {
                        pos: t + 2,
                        caret: t
                    }) : new RegExp(c).test("0" + i) && (e[t] = "0",
                    e[t + 1] = i,
                    n = {
                        pos: t + 2
                    })),
                    !1 === n))
                        return n;
                    if (n.fuzzy && (e = n.buffer,
                    t = n.pos),
                    (l = w(t, o)).targetMatch && l.targetMatch[0] && void 0 !== _[l.targetMatch[0]]) {
                        c = _[l.targetMatch[0]][0];
                        var u = e.slice(l.targetMatchIndex, l.targetMatchIndex + l.targetMatch[0].length);
                        !1 === new RegExp(c).test(u.join("")) && 2 === l.targetMatch[0].length && s.validPositions[l.targetMatchIndex] && s.validPositions[l.targetMatchIndex + 1] && (s.validPositions[l.targetMatchIndex + 1].input = "0")
                    }
                    var d = n
                      , p = k(e.join(""), o.inputFormat, o);
                    return d && p.date.getTime() == p.date.getTime() && (d = h(p, d, o),
                    d = g(p, d = m.call(this, p, d, o), o, s, r)),
                    void 0 !== t && d && n.pos !== t ? {
                        buffer: y(o.inputFormat, p, o).split(""),
                        refreshFromBuffer: {
                            start: t,
                            end: n.pos
                        },
                        pos: n.caret || n.pos
                    } : d
                },
                onKeyDown: function $(e, t, i, n) {
                    e.ctrlKey && e.keyCode === a["default"].RIGHT && (this.inputmask._valueSet(o(new Date, n)),
                    u(this).trigger("setvalue"))
                },
                onUnMask: function T(e, t, i) {
                    return t ? y(i.outputFormat, k(e, i.inputFormat, i), i, !0) : t
                },
                casing: function P(e, t) {
                    return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e
                },
                onBeforeMask: function M(e, t) {
                    return "[object Date]" === Object.prototype.toString.call(e) && (e = o(e, t)),
                    e
                },
                insertMode: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric"
            }
        })
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a(e, t) {
            for (var i = "", n = 0; n < e.length; n++)
                l["default"].prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
            return i
        }
        function h(e, t, i, n) {
            if (0 < e.length && 0 < t && (!i.digitsOptional || n)) {
                var o = e.indexOf(i.radixPoint)
                  , s = !1;
                i.negationSymbol.back === e[e.length - 1] && (s = !0,
                e.length--),
                -1 === o && (e.push(i.radixPoint),
                o = e.length - 1);
                for (var a = 1; a <= t; a++)
                    isFinite(e[o + a]) || (e[o + a] = "0")
            }
            return s && e.push(i.negationSymbol.back),
            e
        }
        function m(e, t) {
            var i = 0;
            if ("+" === e) {
                for (i in t.validPositions)
                    ;
                i = parseInt(i)
            }
            for (var n in t.tests)
                if (i <= (n = parseInt(n)))
                    for (var o = 0, s = t.tests[n].length; o < s; o++)
                        if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][o].match.def === e)
                            return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
            return i
        }
        function g(e, t) {
            var i = -1;
            for (var n in t.validPositions) {
                var o = t.validPositions[n];
                if (o && o.match.def === e) {
                    i = parseInt(n);
                    break
                }
            }
            return i
        }
        function r(e) {
            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0,
            v["default"])(e.groupSeparator),"g"), ""),
            "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")),
            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN,
            isNaN(e.min) && (e.min = Number.MIN_VALUE)),
            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0,
            v["default"])(e.groupSeparator),"g"), ""),
            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")),
            e.max = isFinite(e.max) ? parseFloat(e.max) : NaN,
            isNaN(e.max) && (e.max = Number.MAX_VALUE)),
            e.parseMinMaxOptions = "done")
        }
        function o(e) {
            e.repeat = 0,
            e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""),
            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0),
            1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)),
            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
            var t = "0"
              , i = e.radixPoint;
            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1",
            e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick,
            e.digitsOptional = !1,
            isNaN(e.digits) && (e.digits = 2),
            e._radixDance = !1,
            i = "," === e.radixPoint ? "?" : "!",
            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {},
            e.definitions[i].validator = "[" + e.radixPoint + "]",
            e.definitions[i].placeholder = e.radixPoint,
            e.definitions[i]["static"] = !0,
            e.definitions[i].generated = !0)) : (e.__financeInput = !1,
            e.numericInput = !0);
            var n, o = "[+]";
            if (o += a(e.prefix, e),
            "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {},
            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]",
            e.definitions[e.groupSeparator].placeholder = e.groupSeparator,
            e.definitions[e.groupSeparator]["static"] = !0,
            e.definitions[e.groupSeparator].generated = !0),
            o += e._mask(e)) : o += "9{+}",
            void 0 !== e.digits && 0 !== e.digits) {
                var s = e.digits.toString().split(",");
                isFinite(s[0]) && s[1] && isFinite(s[1]) ? o += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? (n = o + i + t + "{0," + e.digits + "}",
                e.keepStatic = !0) : o += i + t + "{" + e.digits + "}")
            }
            return o += a(e.suffix, e),
            o += "[-]",
            n && (o = [n + a(e.suffix, e) + "[-]", o]),
            e.greedy = !1,
            r(e),
            o
        }
        function y(e, t, i, n, o) {
            return o._radixDance && o.numericInput && t !== o.negationSymbol.back && e <= i && (0 < i || t == o.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== o.negationSymbol.back) && (e -= 1),
            e
        }
        function s(e, t, i, n, o) {
            var s = t.buffer ? t.buffer.indexOf(o.radixPoint) : -1
              , a = -1 !== s && new RegExp("[0-9\uff11-\uff19]").test(e);
            return o._radixDance && a && null == t.validPositions[s] ? {
                insert: {
                    pos: s === i ? s + 1 : s,
                    c: o.radixPoint
                },
                pos: i
            } : a
        }
        function f(e, t) {
            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0,
            v["default"])(t.negationSymbol.front) + "?" : "") + (0,
            v["default"])(t.prefix) + ")(.*)(" + (0,
            v["default"])(t.suffix) + ("" != t.negationSymbol.back ? (0,
            v["default"])(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join(""))
              , n = i ? i[2] : ""
              , o = !1;
            return n && (n = n.split(t.radixPoint.charAt(0))[0],
            o = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)),
            !(!o || !(1 < o[0].length || 0 < o[0].length && o[0].length < n.length)) && o
        }
        var l = n(i(2))
          , c = n(i(0))
          , v = n(i(13))
          , b = l["default"].dependencyLib;
        l["default"].extendAliases({
            numeric: {
                mask: o,
                _mask: function u(e) {
                    return "(" + e.groupSeparator + "999){+|1}"
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: !1,
                step: 1,
                inputType: "text",
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "decimal",
                shortcuts: {
                    k: "000",
                    m: "000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                definitions: {
                    0: {
                        validator: s
                    },
                    1: {
                        validator: s,
                        definitionSymbol: "9"
                    },
                    "+": {
                        validator: function d(e, t, i, n, o) {
                            return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
                        }
                    },
                    "-": {
                        validator: function d(e, t, i, n, o) {
                            return o.allowMinus && e === o.negationSymbol.back
                        }
                    }
                },
                preValidation: function k(e, t, i, n, o, s, a, r) {
                    if (!1 !== o.__financeInput && i === o.radixPoint)
                        return !1;
                    var l;
                    if (l = o.shortcuts && o.shortcuts[i]) {
                        if (1 < l.length)
                            for (var c = [], u = 0; u < l.length; u++)
                                c.push({
                                    pos: t + u,
                                    c: l[u],
                                    strict: !1
                                });
                        return {
                            insert: c
                        }
                    }
                    var d = e.indexOf(o.radixPoint)
                      , p = t;
                    if (t = y(t, i, d, s, o),
                    "-" === i || i === o.negationSymbol.front) {
                        if (!0 !== o.allowMinus)
                            return !1;
                        var h = !1
                          , f = g("+", s)
                          , v = g("-", s);
                        return -1 !== f && (h = [f, v]),
                        !1 !== h ? {
                            remove: h,
                            caret: p - o.negationSymbol.front.length
                        } : {
                            insert: [{
                                pos: m("+", s),
                                c: o.negationSymbol.front,
                                fromIsValid: !0
                            }, {
                                pos: m("-", s),
                                c: o.negationSymbol.back,
                                fromIsValid: void 0
                            }],
                            caret: p + o.negationSymbol.back.length
                        }
                    }
                    if (i === o.groupSeparator)
                        return {
                            caret: p
                        };
                    if (r)
                        return !0;
                    if (-1 !== d && !0 === o._radixDance && !1 === n && i === o.radixPoint && void 0 !== o.digits && (isNaN(o.digits) || 0 < parseInt(o.digits)) && d !== t)
                        return {
                            caret: o._radixDance && t === d - 1 ? d + 1 : d
                        };
                    if (!1 === o.__financeInput)
                        if (n) {
                            if (o.digitsOptional)
                                return {
                                    rewritePosition: a.end
                                };
                            if (!o.digitsOptional) {
                                if (a.begin > d && a.end <= d)
                                    return i === o.radixPoint ? {
                                        insert: {
                                            pos: d + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: d
                                    } : {
                                        rewritePosition: d + 1
                                    };
                                if (a.begin < d)
                                    return {
                                        rewritePosition: a.begin - 1
                                    }
                            }
                        } else if (!o.showMaskOnHover && !o.showMaskOnFocus && !o.digitsOptional && 0 < o.digits && "" === this.__valueGet.call(this.el))
                            return {
                                rewritePosition: d
                            };
                    return {
                        rewritePosition: t
                    }
                },
                postValidation: function p(e, t, i, n, o, s, a) {
                    if (!1 === n)
                        return n;
                    if (a)
                        return !0;
                    if (null !== o.min || null !== o.max) {
                        var r = o.onUnMask(e.slice().reverse().join(""), void 0, b.extend({}, o, {
                            unmaskAsNumber: !0
                        }));
                        if (null !== o.min && r < o.min && (r.toString().length > o.min.toString().length || r < 0))
                            return !1;
                        if (null !== o.max && r > o.max)
                            return !!o.SetMaxOnOverflow && {
                                refreshFromBuffer: !0,
                                buffer: h(o.max.toString().replace(".", o.radixPoint).split(""), o.digits, o).reverse()
                            }
                    }
                    return n
                },
                onUnMask: function w(e, t, i) {
                    if ("" === t && !0 === i.nullable)
                        return t;
                    var n = e.replace(i.prefix, "");
                    return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0,
                    v["default"])(i.groupSeparator),"g"), ""),
                    "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0),"g"), "0")),
                    i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(v["default"].call(this, i.radixPoint), ".")),
                    n = (n = n.replace(new RegExp("^" + (0,
                    v["default"])(i.negationSymbol.front)), "-")).replace(new RegExp((0,
                    v["default"])(i.negationSymbol.back) + "$"), ""),
                    Number(n)) : n
                },
                isComplete: function _(e, t) {
                    var i = (t.numericInput ? e.slice().reverse() : e).join("");
                    return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0,
                    v["default"])(t.negationSymbol.front)), "-")).replace(new RegExp((0,
                    v["default"])(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0,
                    v["default"])(t.groupSeparator) + "([0-9]{3})","g"), "$1"),
                    "," === t.radixPoint && (i = i.replace((0,
                    v["default"])(t.radixPoint), ".")),
                    isFinite(i)
                },
                onBeforeMask: function S(e, t) {
                    var i = t.radixPoint || ",";
                    isFinite(t.digits) && (t.digits = parseInt(t.digits)),
                    "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                    var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front
                      , o = e.split(i)
                      , s = o[0].replace(/[^\-0-9]/g, "")
                      , a = 1 < o.length ? o[1].replace(/[^0-9]/g, "") : ""
                      , r = 1 < o.length;
                    e = s + ("" !== a ? i + a : a);
                    var l = 0;
                    if ("" !== i && (l = t.digitsOptional ? t.digits < a.length ? t.digits : a.length : t.digits,
                    "" !== a || !t.digitsOptional)) {
                        var c = Math.pow(10, l || 1);
                        e = e.replace((0,
                        v["default"])(i), "."),
                        isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * c) / c).toFixed(l)),
                        e = e.toString().replace(".", i)
                    }
                    if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))),
                    null !== t.min || null !== t.max) {
                        var u = e.toString().replace(i, ".");
                        null !== t.min && u < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && u > t.max && (e = t.max.toString().replace(".", i))
                    }
                    return n && "-" !== e.charAt(0) && (e = "-" + e),
                    h(e.toString().split(""), l, t, r).join("")
                },
                onBeforeWrite: function x(e, t, i, n) {
                    function o(e, t) {
                        if (!1 !== n.__financeInput || t) {
                            var i = e.indexOf(n.radixPoint);
                            -1 !== i && e.splice(i, 1)
                        }
                        if ("" !== n.groupSeparator)
                            for (; -1 !== (i = e.indexOf(n.groupSeparator)); )
                                e.splice(i, 1);
                        return e
                    }
                    var s, a = f(t, n);
                    if (a)
                        for (var r = t.join("").lastIndexOf(a[0].split("").reverse().join("")) - (a[0] == a.input ? 0 : 1), l = a[0] == a.input ? 1 : 0, c = a[0].length - l; 0 < c; c--)
                            delete this.maskset.validPositions[r + c],
                            delete t[r + c];
                    if (e)
                        switch (e.type) {
                        case "blur":
                        case "checkval":
                            if (null !== n.min) {
                                var u = n.onUnMask(t.slice().reverse().join(""), void 0, b.extend({}, n, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== n.min && u < n.min)
                                    return {
                                        refreshFromBuffer: !0,
                                        buffer: h(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                    }
                            }
                            if (t[t.length - 1] === n.negationSymbol.front) {
                                var d = new RegExp("(^" + ("" != n.negationSymbol.front ? (0,
                                v["default"])(n.negationSymbol.front) + "?" : "") + (0,
                                v["default"])(n.prefix) + ")(.*)(" + (0,
                                v["default"])(n.suffix) + ("" != n.negationSymbol.back ? (0,
                                v["default"])(n.negationSymbol.back) + "?" : "") + "$)").exec(o(t.slice(), !0).reverse().join(""));
                                0 == (d ? d[2] : "") && (s = {
                                    refreshFromBuffer: !0,
                                    buffer: [0]
                                })
                            } else
                                "" !== n.radixPoint && t[0] === n.radixPoint && (s && s.buffer ? s.buffer.shift() : (t.shift(),
                                s = {
                                    refreshFromBuffer: !0,
                                    buffer: o(t)
                                }));
                            if (n.enforceDigitsOnBlur) {
                                var p = (s = s || {}) && s.buffer || t.slice().reverse();
                                s.refreshFromBuffer = !0,
                                s.buffer = h(p, n.digits, n, !0).reverse()
                            }
                        }
                    return s
                },
                onKeyDown: function C(e, t, i, n) {
                    var o, s = b(this);
                    if (e.ctrlKey)
                        switch (e.keyCode) {
                        case c["default"].UP:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)),
                            s.trigger("setvalue"),
                            !1;
                        case c["default"].DOWN:
                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)),
                            s.trigger("setvalue"),
                            !1
                        }
                    if (!e.shiftKey && (e.keyCode === c["default"].DELETE || e.keyCode === c["default"].BACKSPACE || e.keyCode === c["default"].BACKSPACE_SAFARI) && i.begin !== t.length) {
                        if (t[e.keyCode === c["default"].DELETE ? i.begin - 1 : i.end] === n.negationSymbol.front)
                            return o = t.slice().reverse(),
                            "" !== n.negationSymbol.front && o.shift(),
                            "" !== n.negationSymbol.back && o.pop(),
                            s.trigger("setvalue", [o.join(""), i.begin]),
                            !1;
                        if (!0 === n._radixDance) {
                            var a = t.indexOf(n.radixPoint);
                            if (n.digitsOptional) {
                                if (0 === a)
                                    return (o = t.slice().reverse()).pop(),
                                    s.trigger("setvalue", [o.join(""), i.begin >= o.length ? o.length : i.begin]),
                                    !1
                            } else if (-1 !== a && (i.begin < a || i.end < a || e.keyCode === c["default"].DELETE && i.begin === a))
                                return i.begin !== i.end || e.keyCode !== c["default"].BACKSPACE && e.keyCode !== c["default"].BACKSPACE_SAFARI || i.begin++,
                                (o = t.slice().reverse()).splice(o.length - i.begin, i.begin - i.end + 1),
                                o = h(o, n.digits, n).join(""),
                                s.trigger("setvalue", [o, i.begin >= o.length ? a + 1 : i.begin]),
                                !1
                        }
                    }
                }
            },
            currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                inputmode: "numeric",
                digits: 0
            },
            percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
            },
            indianns: {
                alias: "numeric",
                _mask: function u(e) {
                    return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}"
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
            }
        })
    }
    , function(e, t, i) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                return typeof e
            }
            : function i(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && h(e, t)
        }
        function s(n) {
            var o = d();
            return function s() {
                var e, t = f(n);
                if (o) {
                    var i = f(this).constructor;
                    e = Reflect.construct(t, arguments, i)
                } else
                    e = t.apply(this, arguments);
                return a(this, e)
            }
        }
        function a(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? r(e) : t
        }
        function r(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function c(e) {
            var i = "function" == typeof Map ? new Map : void 0;
            return (c = function n(e) {
                function t() {
                    return u(e, arguments, f(this).constructor)
                }
                if (null === e || !p(e))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== i) {
                    if (i.has(e))
                        return i.get(e);
                    i.set(e, t)
                }
                return t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                h(t, e)
            }
            )(e)
        }
        function u(e, t, i) {
            return (u = d() ? Reflect.construct : function s(e, t, i) {
                var n = [null];
                n.push.apply(n, t);
                var o = new (Function.bind.apply(e, n));
                return i && h(o, i.prototype),
                o
            }
            ).apply(null, arguments)
        }
        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (e) {
                return !1
            }
        }
        function p(e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
        }
        function h(e, t) {
            return (h = Object.setPrototypeOf || function i(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function t(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function v(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var m = v(i(8))
          , g = v(i(2))
          , y = v(i(9))
          , b = m["default"].document;
        if (y["default"] && b && b.head && b.head.attachShadow && m["default"].customElements && void 0 === m["default"].customElements.get("input-mask")) {
            var k = function() {
                function a() {
                    var e;
                    l(this, a);
                    var t = (e = r.call(this)).getAttributeNames()
                      , i = e.attachShadow({
                        mode: "closed"
                    })
                      , n = b.createElement("input");
                    for (var o in n.type = "text",
                    i.appendChild(n),
                    t)
                        Object.prototype.hasOwnProperty.call(t, o) && n.setAttribute(t[o], e.getAttribute(t[o]));
                    var s = new g["default"];
                    return s.dataAttribute = "",
                    s.mask(n),
                    n.inputmask.shadowRoot = i,
                    e
                }
                o(a, c(HTMLElement));
                var r = s(a);
                return a
            }();
            m["default"].customElements.define("input-mask", k)
        }
    }
    , function(e, t, i) {
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(e) {
                return typeof e
            }
            : function i(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = n(i(10))
          , a = n(i(2));
        void 0 === s["default"].fn.inputmask && (s["default"].fn.inputmask = function(e, t) {
            var i, n = this[0];
            if (void 0 === t && (t = {}),
            "string" == typeof e)
                switch (e) {
                case "unmaskedvalue":
                    return n && n.inputmask ? n.inputmask.unmaskedvalue() : (0,
                    s["default"])(n).val();
                case "remove":
                    return this.each(function() {
                        this.inputmask && this.inputmask.remove()
                    });
                case "getemptymask":
                    return n && n.inputmask ? n.inputmask.getemptymask() : "";
                case "hasMaskedValue":
                    return !(!n || !n.inputmask) && n.inputmask.hasMaskedValue();
                case "isComplete":
                    return !n || !n.inputmask || n.inputmask.isComplete();
                case "getmetadata":
                    return n && n.inputmask ? n.inputmask.getmetadata() : void 0;
                case "setvalue":
                    a["default"].setValue(n, t);
                    break;
                case "option":
                    if ("string" != typeof t)
                        return this.each(function() {
                            if (void 0 !== this.inputmask)
                                return this.inputmask.option(t)
                        });
                    if (n && void 0 !== n.inputmask)
                        return n.inputmask.option(t);
                    break;
                default:
                    return t.alias = e,
                    i = new a["default"](t),
                    this.each(function() {
                        i.mask(this)
                    })
                }
            else {
                if (Array.isArray(e))
                    return t.alias = e,
                    i = new a["default"](t),
                    this.each(function() {
                        i.mask(this)
                    });
                if ("object" == o(e))
                    return i = new a["default"](e),
                    void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                        if (void 0 !== this.inputmask)
                            return this.inputmask.option(e);
                        i.mask(this)
                    }) : this.each(function() {
                        i.mask(this)
                    });
                if (void 0 === e)
                    return this.each(function() {
                        (i = new a["default"](t)).mask(this)
                    })
            }
        }
        )
    }
    , function(e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t["default"] = void 0;
        var o = n(i(14));
        i(25);
        var s = o["default"];
        t["default"] = s
    }
    ],
    n = {},
    o.m = i,
    o.c = n,
    o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (o.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                o.d(i, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return i
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function i() {
            return e["default"]
        }
        : function n() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 26);
    var i, n
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ClipboardJS = t() : e.ClipboardJS = t()
}(this, function() {
    function o(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    return n = {},
    o.m = i = [function(e) {
        e.exports = function(e) {
            var t;
            if ("SELECT" === e.nodeName)
                e.focus(),
                t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var i = e.hasAttribute("readonly");
                i || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                i || e.removeAttribute("readonly"),
                t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var n = window.getSelection()
                  , o = document.createRange();
                o.selectNodeContents(e),
                n.removeAllRanges(),
                n.addRange(o),
                t = n.toString()
            }
            return t
        }
    }
    , function(e) {
        function t() {}
        t.prototype = {
            on: function(e, t, i) {
                var n = this.e || (this.e = {});
                return (n[e] || (n[e] = [])).push({
                    fn: t,
                    ctx: i
                }),
                this
            },
            once: function(e, t, i) {
                function n() {
                    o.off(e, n),
                    t.apply(i, arguments)
                }
                var o = this;
                return n._ = t,
                this.on(e, n, i)
            },
            emit: function(e) {
                for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, o = i.length; n < o; n++)
                    i[n].fn.apply(i[n].ctx, t);
                return this
            },
            off: function(e, t) {
                var i = this.e || (this.e = {})
                  , n = i[e]
                  , o = [];
                if (n && t)
                    for (var s = 0, a = n.length; s < a; s++)
                        n[s].fn !== t && n[s].fn._ !== t && o.push(n[s]);
                return o.length ? i[e] = o : delete i[e],
                this
            }
        },
        e.exports = t,
        e.exports.TinyEmitter = t
    }
    , function(e, t, i) {
        var p = i(3)
          , h = i(4);
        e.exports = function(e, t, i) {
            if (!e && !t && !i)
                throw new Error("Missing required arguments");
            if (!p.string(t))
                throw new TypeError("Second argument must be a String");
            if (!p.fn(i))
                throw new TypeError("Third argument must be a Function");
            if (p.node(e))
                return u = t,
                d = i,
                (c = e).addEventListener(u, d),
                {
                    destroy: function() {
                        c.removeEventListener(u, d)
                    }
                };
            if (p.nodeList(e))
                return a = e,
                r = t,
                l = i,
                Array.prototype.forEach.call(a, function(e) {
                    e.addEventListener(r, l)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(a, function(e) {
                            e.removeEventListener(r, l)
                        })
                    }
                };
            if (p.string(e))
                return n = e,
                o = t,
                s = i,
                h(document.body, n, o, s);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var n, o, s, a, r, l, c, u, d
        }
    }
    , function(e, i) {
        i.node = function(e) {
            return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
        }
        ,
        i.nodeList = function(e) {
            var t = Object.prototype.toString.call(e);
            return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in e && (0 === e.length || i.node(e[0]))
        }
        ,
        i.string = function(e) {
            return "string" == typeof e || e instanceof String
        }
        ,
        i.fn = function(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }
    }
    , function(e, t, i) {
        function s(e, t, i, n, o) {
            var s = function(t, i, e, n) {
                return function(e) {
                    e.delegateTarget = a(e.target, i),
                    e.delegateTarget && n.call(t, e)
                }
            }
            .apply(this, arguments);
            return e.addEventListener(i, s, o),
            {
                destroy: function() {
                    e.removeEventListener(i, s, o)
                }
            }
        }
        var a = i(5);
        e.exports = function(e, t, i, n, o) {
            return "function" == typeof e.addEventListener ? s.apply(null, arguments) : "function" == typeof i ? s.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
            Array.prototype.map.call(e, function(e) {
                return s(e, t, i, n, o)
            }))
        }
    }
    , function(e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var t = Element.prototype;
            t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
        }
        e.exports = function(e, t) {
            for (; e && 9 !== e.nodeType; ) {
                if ("function" == typeof e.matches && e.matches(t))
                    return e;
                e = e.parentNode
            }
        }
    }
    , function(t, e, i) {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function o(e) {
            !function(e) {
                if (!(e instanceof o))
                    throw new TypeError("Cannot call a class as a function")
            }(this),
            this.resolveOptions(e),
            this.initSelection()
        }
        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function a(e, t) {
            !function(e) {
                if (!(e instanceof a))
                    throw new TypeError("Cannot call a class as a function")
            }(this);
            var i = function(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
            return i.resolveOptions(t),
            i.listenClick(e),
            i
        }
        function r(e, t) {
            var i = "data-clipboard-" + e;
            if (t.hasAttribute(i))
                return t.getAttribute(i)
        }
        i.r(e);
        var l, c, u, d = i(0), p = i.n(d), h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , f = (l = o,
        (c = [{
            key: "resolveOptions",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                this.action = t.action,
                this.container = t.container,
                this.emitter = t.emitter,
                this.target = t.target,
                this.text = t.text,
                this.trigger = t.trigger,
                this.selectedText = ""
            }
        }, {
            key: "initSelection",
            value: function() {
                this.text ? this.selectFake() : this.target && this.selectTarget()
            }
        }, {
            key: "selectFake",
            value: function() {
                var e = this
                  , t = "rtl" == document.documentElement.getAttribute("dir");
                this.removeFake(),
                this.fakeHandlerCallback = function() {
                    return e.removeFake()
                }
                ,
                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                this.fakeElem = document.createElement("textarea"),
                this.fakeElem.style.fontSize = "12pt",
                this.fakeElem.style.border = "0",
                this.fakeElem.style.padding = "0",
                this.fakeElem.style.margin = "0",
                this.fakeElem.style.position = "absolute",
                this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                var i = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = i + "px",
                this.fakeElem.setAttribute("readonly", ""),
                this.fakeElem.value = this.text,
                this.container.appendChild(this.fakeElem),
                this.selectedText = p()(this.fakeElem),
                this.copyText()
            }
        }, {
            key: "removeFake",
            value: function() {
                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                this.fakeHandler = null,
                this.fakeHandlerCallback = null),
                this.fakeElem && (this.container.removeChild(this.fakeElem),
                this.fakeElem = null)
            }
        }, {
            key: "selectTarget",
            value: function() {
                this.selectedText = p()(this.target),
                this.copyText()
            }
        }, {
            key: "copyText",
            value: function() {
                var e = void 0;
                try {
                    e = document.execCommand(this.action)
                } catch (t) {
                    e = !1
                }
                this.handleResult(e)
            }
        }, {
            key: "handleResult",
            value: function(e) {
                this.emitter.emit(e ? "success" : "error", {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                })
            }
        }, {
            key: "clearSelection",
            value: function() {
                this.trigger && this.trigger.focus(),
                document.activeElement.blur(),
                window.getSelection().removeAllRanges()
            }
        }, {
            key: "destroy",
            value: function() {
                this.removeFake()
            }
        }, {
            key: "action",
            set: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : "copy";
                if (this._action = t,
                "copy" !== this._action && "cut" !== this._action)
                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
            },
            get: function() {
                return this._action
            }
        }, {
            key: "target",
            set: function(e) {
                if (void 0 !== e) {
                    if (!e || "object" !== (void 0 === e ? "undefined" : h(e)) || 1 !== e.nodeType)
                        throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === this.action && e.hasAttribute("disabled"))
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    this._target = e
                }
            },
            get: function() {
                return this._target
            }
        }]) && n(l.prototype, c),
        u && n(l, u),
        o), v = i(1), m = i.n(v), g = i(2), y = i.n(g), b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , k = function(e, t, i) {
            return t && s(e.prototype, t),
            i && s(e, i),
            e
        }, w = (function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(a, m.a),
        k(a, [{
            key: "resolveOptions",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                this.text = "function" == typeof t.text ? t.text : this.defaultText,
                this.container = "object" === b(t.container) ? t.container : document.body
            }
        }, {
            key: "listenClick",
            value: function(e) {
                var t = this;
                this.listener = y()(e, "click", function(e) {
                    return t.onClick(e)
                })
            }
        }, {
            key: "onClick",
            value: function(e) {
                var t = e.delegateTarget || e.currentTarget;
                this.clipboardAction && (this.clipboardAction = null),
                this.clipboardAction = new f({
                    action: this.action(t),
                    target: this.target(t),
                    text: this.text(t),
                    container: this.container,
                    trigger: t,
                    emitter: this
                })
            }
        }, {
            key: "defaultAction",
            value: function(e) {
                return r("action", e)
            }
        }, {
            key: "defaultTarget",
            value: function(e) {
                var t = r("target", e);
                if (t)
                    return document.querySelector(t)
            }
        }, {
            key: "defaultText",
            value: function(e) {
                return r("text", e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.listener.destroy(),
                this.clipboardAction && (this.clipboardAction.destroy(),
                this.clipboardAction = null)
            }
        }], [{
            key: "isSupported",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : ["copy", "cut"]
                  , i = "string" == typeof t ? [t] : t
                  , n = !!document.queryCommandSupported;
                return i.forEach(function(e) {
                    n = n && !!document.queryCommandSupported(e)
                }),
                n
            }
        }]),
        a);
        e["default"] = w
    }
    ],
    o.c = n,
    o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (o.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                o.d(i, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return i
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 6)["default"];
    var i, n
}),
jQuery.fn.serializeObject = function() {
    var e = this.filter("form").serializeArray();
    return _.zipObjectDeep(_.map(e, "name"), _.map(e, "value"))
}
,
$(document.body).on("ajax:success", "[ajax-replace-with]", function(e, t) {
    $(e.target).parent().html(t)
});
var _createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}()
  , _get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
};
window.LineItem = Backbone.RelationalModel.extend({
    urlRoot: Spree.routes.line_item(),
    sync: Backbone.sync_with_order,
    relations: [{
        type: Backbone.HasMany,
        key: "subscription_line_items",
        relatedModel: "SubscriptionLineItem",
        collectionType: "SubscriptionLineItemCollection",
        reverseRelation: {
            key: "spree_line_item",
            includeInJSON: "id"
        }
    }]
});
var LineItemCollection = function(e) {
    function t() {
        _classCallCheck(this, t),
        _get(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(t, e),
    _createClass(t, [{
        key: "url",
        value: function i() {
            return Spree.routes.line_item()
        }
    }, {
        key: "model",
        value: function n() {
            return LineItem
        }
    }]),
    t
}(Backbone.Collection);
window.Order = Backbone.RelationalModel.extend({
    url: Spree.routes.order(),
    sync: Backbone.sync_with_order,
    relations: [{
        type: Backbone.HasMany,
        key: "line_items",
        relatedModel: "LineItem",
        collectionType: "LineItemCollection",
        reverseRelation: {
            key: "order",
            includeInJSON: "id"
        }
    }],
    addLineItem: function addLineItem(e) {
        var t = this
          , i = $.Deferred();
        return this.updateOrCreate(e, {
            success: function n() {
                i.resolve(t.fetch())
            }
        }),
        i
    },
    updateOrCreate: function updateOrCreate(e, t) {
        var i = this.get("line_items").findWhere({
            variant_id: e.variant_id
        });
        return i ? (e.quantity += i.get("quantity"),
        i.save(e, t)) : this.get("line_items").create(e, t)
    },
    getAdjustment: function getAdjustment(e) {
        return _.findWhere(this.get("promotions_by_label"), {
            label: e
        })
    }
});
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
;
window.Subscription = Backbone.RelationalModel.extend({
    urlRoot: "/subscriptions/api/v1/subscriptions",
    relations: [{
        type: Backbone.HasMany,
        key: "subscription_line_item",
        relatedModel: "SubscriptionLineItem",
        reverseRelation: {
            key: "subscription",
            type: Backbone.HasOne,
            includeInJSON: "id"
        }
    }],
    cancel: function cancel(e) {
        var t = arguments.length <= 0 || e === undefined ? {} : arguments[0]
          , i = $.extend({
            method: "POST",
            url: this.url() + "/cancel"
        }, t);
        return this.fetch(i)
    },
    activate: function activate(e) {
        var t = arguments.length <= 0 || e === undefined ? {} : arguments[0]
          , i = $.extend({
            method: "POST",
            url: this.url() + "/activate"
        }, t);
        return this.fetch(i)
    },
    cancel_current_installment: function cancel_current_installment(e) {
        var t = arguments.length <= 0 || e === undefined ? {} : arguments[0]
          , i = $.extend({
            method: "POST",
            url: this.url() + "/cancel_current_installment"
        }, t);
        return this.fetch(i)
    }
});
var SubscriptionCollection = function(e) {
    function t() {
        _classCallCheck(this, t),
        _get(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(t, e),
    _createClass(t, [{
        key: "model",
        value: function i() {
            return Subscription
        }
    }]),
    t
}(Backbone.Collection);
window.SubscriptionLineItem = Backbone.RelationalModel.extend({
    sync: Backbone.sync_with_order,
    urlRoot: function urlRoot() {
        return "/subscriptions/api/v1/line_items/"
    }
});
var SubscriptionLineItemCollection = function(e) {
    function t() {
        _classCallCheck(this, t),
        _get(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(t, e),
    _createClass(t, [{
        key: "url",
        value: function i() {
            return "/subscriptions/api/v1/line_items/"
        }
    }, {
        key: "model",
        value: function n() {
            return SubscriptionLineItem
        }
    }]),
    t
}(Backbone.Collection);
window.User = Backbone.RelationalModel.extend({
    urlRoot: Spree.pathFor("api/users"),
    relations: [{
        type: Backbone.HasMany,
        key: "subscriptions",
        relatedModel: "Subscription",
        collectionType: "SubscriptionCollection",
        reverseRelation: {
            key: "user",
            includeInJSON: "id"
        }
    }]
}),
$("link[data-href]").each(function() {
    var e = $(this);
    e.attr("href", e.data("href"))
});
var stickyHidingTimeout = null;
window.Header = {
    dom: {
        header: document.querySelector(".site--header"),
        mobileToggle: document.querySelector(".site--header-mobile"),
        mobileShopDropdownToggle: document.querySelector(".site--header-mobile-navigation .shop-mobile-dropdown-btn"),
        limitedEditionMobileShopDropdownToggle: document.querySelector(".site--header-mobile-navigation .limited-edition-shop-mobile-dropdown-btn"),
        mobileShopDropdowns: document.querySelectorAll(".site--header-mobile-navigation .shop-mobile-dropdown"),
        limitedEditionMobileShopDropdowns: document.querySelectorAll(".site--header-mobile-navigation .limited-edition-shop-mobile-dropdown"),
        mobileNav: document.querySelector(".site--header-mobile-navigation"),
        cartIndicator: document.querySelector(".site--header .cart--indicator")
    },
    init: function init() {
        this.mobileToggle(this.dom.mobileToggle),
        this.mobileShopDropdownToggle(this.dom.mobileShopDropdownToggle),
        this.limitedEditionMobileShopDropdownToggle(this.dom.limitedEditionMobileShopDropdownToggle),
        Site.current_order.on("change:total_quantity", this.updateCartQuantity.bind(this))
    },
    mobileToggle: function mobileToggle(e) {
        var t = this.dom.mobileNav;
        e && t && e.addEventListener("click", function() {
            e.classList.toggle("open"),
            t.classList.toggle("open")
        })
    },
    mobileShopDropdownToggle: function mobileShopDropdownToggle(e) {
        var t = this.dom.mobileShopDropdowns
          , i = $(e).find(".caret");
        e && t && (e.addEventListener("click", function() {
            $(t).toggleClass("hidden"),
            i.hasClass("fa-caret-down") ? (i.removeClass("fa-caret-down"),
            i.addClass("fa-caret-up")) : (i.removeClass("fa-caret-up"),
            i.addClass("fa-caret-down"))
        }),
        window.addEventListener("resize", function() {
            i.removeClass("fa-caret-up"),
            i.addClass("fa-caret-down")
        }))
    },
    limitedEditionMobileShopDropdownToggle: function limitedEditionMobileShopDropdownToggle(e) {
        var t = this.dom.limitedEditionMobileShopDropdowns
          , i = $(e).find(".limited-caret");
        e && t && (e.addEventListener("click", function() {
            $(t).toggleClass("hidden"),
            i.hasClass("fa-caret-down") ? (i.removeClass("fa-caret-down"),
            i.addClass("fa-caret-up")) : (i.removeClass("fa-caret-up"),
            i.addClass("fa-caret-down"))
        }),
        window.addEventListener("resize", function() {
            i.removeClass("fa-caret-up"),
            i.addClass("fa-caret-down")
        }))
    },
    stickyHeader: function stickyHeader(e) {
        var o = 120
          , s = document.documentElement;
        window.pageYOffset || s.scrollTop,
        s.clientTop;
        window.addEventListener("scroll", function() {
            function t() {
                e.classList.add("slideup")
            }
            function i() {
                e.classList.remove("slideup")
            }
            var n = (window.pageYOffset || s.scrollTop) - (s.clientTop || 0);
            o < n && setTimeout(function() {
                var e = (window.pageYOffset || s.scrollTop) - (s.clientTop || 0);
                console.log("top", n, "previous", e),
                n < e ? t() : e < n && i()
            }, 100)
        })
    },
    updateCartQuantity: function updateCartQuantity() {
        this.dom.cartIndicator.textContent = Site.current_order.get("total_quantity")
    }
},
window.MiniCart = {
    $: {
        base: $(".kit-cart--base"),
        stepOne: $(".js-step-1"),
        stepTwo: $(".js-step-2"),
        stepThree: $(".js-step-3"),
        stepFour: $(".js-step-4"),
        baseSteps: $(".kit-cart--base-step"),
        kitPanel: $(".kit-cart--panel"),
        panelSteps: $(".kit-cart--panel-step"),
        closeButton: $(".js-cart-close"),
        colorPicker: $(".js-color-picker"),
        backButton: $(".js-step-back"),
        colorBrushes: $(".js-color-brushes"),
        colorToothbrushes: $(".js-color-tootbrushes"),
        colorBacks: $(".js-color-back"),
        deliveryRadio: $('input[name="delivery"]'),
        cartIndicator: $(".kit-cart .cart--indicator")
    },
    init: function init() {
        this.$.kitPanel && (this.stepThroughCart(this.$.kitPanel, this.$.panelSteps, this.$.baseSteps, this.$.stepOne, this.$.stepTwo, this.$.stepThree, this.$.stepFour, this.$.deliveryRadio, this.$.closeButton),
        this.stickyBase(),
        this.colorPicker(this.$.colorPicker, this.$.colorBrushes, this.$.colorBacks),
        this.colorPicker(this.$.colorPicker, this.$.colorToothbrushes, this.$.colorBacks),
        this.bind())
    },
    stickyBase: function stickyBase() {
        var i = 120;
        window.addEventListener("scroll", function() {
            var e = document.documentElement
              , t = (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
            $("body").toggleClass("scrolled-from-top", i < t)
        })
    },
    setActive: function setActive(e, t) {
        e.removeClass("active").filter("." + t).addClass("active")
    },
    clickStep: function clickStep(e, t, i, n, o) {
        var s = this;
        $(e).on("click", function(e) {
            e.preventDefault(),
            n.addClass("open"),
            s.setActive(i, t),
            "step-1" === t ? s.$.backButton.removeClass("back") : s.$.backButton.addClass("back"),
            null !== o && s.setActive(o, t)
        })
    },
    stepThroughCart: function stepThroughCart(i, n, o, e, t, s, a, r, l) {
        var c = this;
        e.each(function(e, t) {
            c.clickStep(t, "step-1", o, i, n)
        }),
        t.each(function(e, t) {
            c.clickStep(t, "step-2", o, i, n)
        }),
        s.each(function(e, t) {
            c.clickStep(t, "step-3", o, i, null)
        }),
        a.each(function(e, t) {
            c.clickStep(t, "step-4", o, i, null)
        }),
        r.each(function(e, i) {
            $(i).on("click", function() {
                var e = i.value
                  , t = $(".kit-cart--panel-step-delivery-option");
                c.setActive(t, e)
            })
        }),
        l.on("click", function() {
            i.removeClass("open"),
            c.setActive(o, "step-0"),
            setTimeout(function() {
                c.setActive(n, "step-1")
            }, 500)
        })
    },
    colorPicker: function colorPicker(f, v, m) {
        var g = this;
        f.each(function(e, h) {
            $(h).on("click", function() {
                var e = $(h).attr("data-variant")
                  , t = $(h).attr("data-sku")
                  , i = $(h).data("variant").id;
                $("#variant_id").attr("data-variant", e),
                $("#variant_id").attr("value", i),
                $("#out--of-stock-sku").attr("value", t);
                var n = JSON.parse(e)
                  , o = n.has_backorder
                  , s = $(".out--of-stock-backorder")
                  , a = $(".js-cart-info")
                  , r = unescape(n.cart_info)
                  , l = $(h).attr("data-stock")
                  , c = $(".add--to--cart")
                  , u = $(".out--of-stock")
                  , d = $(h).data("variant").color
                  , p = d;
                g.setActive(f, d),
                g.setActive(m, d),
                g.setActive(v, d),
                $("body").hasClass("monochromes-show") && ("black" == p ? p = "electric-toothbrush-all-black" : "rose" == p ? p = "electric-toothbrush-all-pink" : "glacier" == p ? p = "electric-toothbrush-all-white" : "gold" == p ? p = "electric-toothbrush-all-gold" : "rose-gold" == p ? p = "electric-toothbrush-all-rose-gold" : "midnight" == p ? p = "electric-toothbrush-all-midnight" : "blue" == p ? p = "electric-toothbrush-all-blue" : "orange" == p ? p = "electric-toothbrush-all-orange" : "frost" == p ? p = "electric-toothbrush-frost" : console.log("Unable to match the url part with the new format")),
                history.replaceState({}, "", p),
                "empty--stock" === l && o ? (c.show(),
                u.hide(),
                s.is("*") && (s.hide(),
                $("." + n.color + "-backorder-message").show()),
                a.is("*") && a.hide().html(r).show()) : "empty--stock" !== l || o ? (u.hide(),
                s.is("*") && s.hide(),
                a.is("*") && a.hide(),
                c.show()) : (c.hide(),
                s.is("*") && (s.hide(),
                $("." + n.color + "-backorder-message").show()),
                a.is("*") && a.hide().html(r).show(),
                u.show().attr("disabled", !0))
            })
        })
    },
    selectedVariantId: function selectedVariantId() {
        return parseInt(this.selectedVariant().id)
    },
    selectedVariant: function selectedVariant() {
        return this.$.colorPicker.filter(".active").data("variant")
    },
    subscritionOptions: function subscritionOptions() {
        return $("#quick-cart-subscription-form").serializeObject()
    },
    updateStepCopy: function updateStepCopy(e) {
        $(".kit-cart--panel-step-copy .single-money").text(e)
    },
    updateCartQuantity: function updateCartQuantity() {
        this.$.cartIndicator.text(Site.current_order.get("total_quantity"))
    },
    onAddToCart: function onAddToCart(e) {
        e.preventDefault();
        var t = $(".step-3 .btn--secondary")
          , i = $.extend({
            variant_id: this.selectedVariantId(),
            quantity: 1
        }, this.subscritionOptions());
        t.prop("disabled", !0),
        Site.current_order.addLineItem(i).then(function() {
            return t.prop("disabled", !1)
        }),
        Segment.addToCart(this.selectedVariant(), i.quantity)
    },
    onQuantityChange: function onQuantityChange(e) {
        var t = parseInt($(e.target).val(), 10)
          , i = new BulkBrushHeads(t);
        this.updateStepCopy(i.singleMoney())
    },
    bind: function bind() {
        $(".kit-cart").on("click", ".add-to-cart", this.onAddToCart.bind(this)).on("change", ".line-item-quantity-input", this.onQuantityChange.bind(this)),
        Site.current_order.on("change:total_quantity", this.updateCartQuantity.bind(this))
    }
},
window.Parallax = {
    init: function init(e, t, i, n, o, s) {
        "head" === s ? this.animateBrushHead(e, t) : this.animateItem(e, t, i, n, o)
    },
    setPosition: function setPosition() {
        return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    animateItem: function animateItem(e, t, i, n, o) {
        var s = this.setPosition()
          , a = s / n + 4 * i;
        !0 === o ? this.setVendor(e, "Transform", "rotate(" + a + "deg) translateX(" + t + "px) rotate(-" + a + "deg)") : this.setVendor(e, "Transform", "translateY(" + s / t + "px)")
    },
    animateBrushHead: function animateBrushHead(e) {
        if ("undefined" == typeof window.orientation) {
            var t = this.setPosition()
              , i = parseInt(t / 40);
            e.style.backgroundPosition = "center " + -i + "%"
        }
    },
    setVendor: function setVendor(e, t, i) {
        e.style.transform = i,
        e.style["webkit" + t] = i,
        e.style["ms" + t] = i
    }
},
window.Bubbles = {
    dom: {
        bubbleWrap: document.querySelector(".home--bubbles-circles"),
        bubbles: document.querySelectorAll(".home--bubbles-circles-single")
    },
    init: function init() {
        this.dom.bubbleWrap && this.moveBubbles(this.dom.bubbles)
    },
    moveBubbles: function moveBubbles(e) {
        var t = e[0]
          , i = e[1]
          , n = e[2]
          , o = e[3]
          , s = function s() {
            Parallax.init(t, 570, 42, 50, !0),
            Parallax.init(i, 340, 30, 55, !0),
            Parallax.init(n, 560, -4, 50, !0),
            Parallax.init(o, 350, 65, 55, !0)
        };
        s(),
        window.addEventListener("scroll", s)
    }
};
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var BRUSH_HEAD_PRICE_CENTS = 750
  , BulkBrushHeads = function() {
    function t(e) {
        _classCallCheck(this, t),
        this.quantity = e || 0
    }
    return _createClass(t, [{
        key: "totalPrice",
        value: function e() {
            return Math.round(BRUSH_HEAD_PRICE_CENTS * this.quantity)
        }
    }, {
        key: "displayAmount",
        value: function i() {
            return displayCurrency(this.totalPrice())
        }
    }, {
        key: "singleMoney",
        value: function n() {
            return displayCurrency(this.totalPrice() / this.quantity)
        }
    }]),
    t
}()
  , DEFAULT_NAME = "shareWindow"
  , DEFAULT_OPTIONS = {
    toolbar: "no",
    location: "no",
    status: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "yes",
    width: 600,
    height: 400
};
$(document.body).on("click", "[data-popup]", function(e) {
    e.preventDefault();
    var t = $(this)
      , i = t.attr("href")
      , n = (t.data("popup-name"),
    $.extend({}, DEFAULT_OPTIONS, t.data("popup-options")));
    window.open(i, optionsString(n))
});
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var InputDisabler = function() {
    function i(e, t) {
        _classCallCheck(this, i),
        this.$el = e,
        this.selector = t,
        e.add("[name='" + e.attr("name") + "']").on("change", this.onChange.bind(this)),
        this.toggleDisabled(e[0].checked)
    }
    return _createClass(i, [{
        key: "onChange",
        value: function e() {
            this.toggleDisabled(this.$el[0].checked)
        }
    }, {
        key: "toggleDisabled",
        value: function t(e) {
            $(this.selector).prop("disabled", e)
        }
    }]),
    i
}();
$(function() {
    $("[data-disable-selector]").each(function() {
        var e = $(this);
        new InputDisabler(e,e.data("disable-selector"))
    })
});
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var InputHider = function() {
    function i(e, t) {
        _classCallCheck(this, i),
        this.$el = e,
        this.selector = t,
        e.add("[name='" + e.attr("name") + "']").on("change", this.onChange.bind(this)),
        this.toggleHidden(e[0].checked)
    }
    return _createClass(i, [{
        key: "onChange",
        value: function e() {
            this.toggleHidden(this.$el[0].checked)
        }
    }, {
        key: "toggleHidden",
        value: function t(e) {
            e ? $(this.selector).hide() : $(this.selector).show()
        }
    }]),
    i
}();
$(function() {
    $("[data-hide-selector]").each(function() {
        var e = $(this);
        new InputHider(e,e.data("hide-selector"))
    })
});
var RIGHT = 0
  , BOTTOM = 90
  , LEFT = 180
  , TOP = 270;
window.TimingSlideshow = {
    dom: {
        picker: document.querySelector(".home--slideshow-picker"),
        slides: document.querySelectorAll(".js-single-select"),
        leftSlides: document.querySelectorAll(".js-slide-left")
    },
    init: function init() {
        this.dom.picker && this.soloJazz(this.dom.picker)
    },
    rotateDots: function rotateDots(e, t, i, n) {
        var o = t.querySelector(".top")
          , s = t.querySelector(".left")
          , a = t.querySelector(".right")
          , r = t.querySelector(".bottom");
        RIGHT += e,
        BOTTOM += e,
        LEFT += e,
        TOP += e,
        o.style.transform = "rotate(" + TOP + "deg) translateX(26px) rotate(" + TOP + "deg)",
        s.style.transform = "rotate(" + LEFT + "deg) translateX(26px) rotate(" + LEFT + "deg)",
        r.style.transform = "rotate(" + BOTTOM + "deg) translateX(26px) rotate(" + BOTTOM + "deg)",
        a.style.transform = "rotate(" + RIGHT + "deg) translateX(26px) rotate(" + RIGHT + "deg)";
        var l = t.querySelector("[data-position='top']")
          , c = t.querySelector("[data-position='bottom']")
          , u = t.querySelector("[data-position='left']")
          , d = t.querySelector("[data-position='right']");
        90 === e ? (l.setAttribute("data-position", "right"),
        u.setAttribute("data-position", "top"),
        c.setAttribute("data-position", "left"),
        d.setAttribute("data-position", "bottom")) : 180 === e ? (l.setAttribute("data-position", "bottom"),
        u.setAttribute("data-position", "right"),
        c.setAttribute("data-position", "top"),
        d.setAttribute("data-position", "left")) : -90 === e && (l.setAttribute("data-position", "left"),
        u.setAttribute("data-position", "bottom"),
        c.setAttribute("data-position", "right"),
        d.setAttribute("data-position", "top"));
        var p = document.querySelectorAll(".home--slideshow-media-item");
        [].forEach.call(p, function(e) {
            e.classList.remove("active"),
            e.classList.contains(i) && e.classList.add("active")
        });
        var h = document.querySelector(".home--slideshow-items")
          , f = h.querySelectorAll(".home--slideshow-item")
          , v = h.querySelector("." + i)
          , m = h.querySelector('[data-position="active"]')
          , g = h.querySelector('[data-position="bottom"]')
          , y = h.querySelector('[data-position="top"]')
          , b = document.querySelector(".js-gif-swap")
          , k = b.getAttribute("data-src")
          , w = h.querySelector('[data-position="left"]');
        [].forEach.call(f, function(e) {
            e.classList.remove("active")
        });
        var _, S, x, C, $, T = document.querySelector(".js-paste-video"), P = document.querySelector(".js-timer-video");
        "midnight" === i ? this.blazyLoad(T) : (T.pause(),
        T.currentTime = 0),
        "orange" === i ? this.blazyLoad(P) : (P.pause(),
        P.currentTime = 0),
        "blue" === i && (b.setAttribute("src", ""),
        b.setAttribute("src", k)),
        "top" === n ? ($ = g,
        m.classList.add("bottom"),
        v.classList.add("active"),
        v.classList.remove("top"),
        y.setAttribute("data-position", "active"),
        m.setAttribute("data-position", "bottom"),
        g.setAttribute("data-position", "left"),
        w.setAttribute("data-position", "top"),
        setTimeout(function() {
            $.classList.add("top"),
            $.classList.remove("bottom")
        }, 250)) : "left" === n ? (S = g,
        x = y,
        (C = m).classList.add("bottom"),
        v.classList.add("active"),
        v.classList.remove("top"),
        y.setAttribute("data-position", "bottom"),
        m.setAttribute("data-position", "left"),
        g.setAttribute("data-position", "top"),
        w.setAttribute("data-position", "active"),
        setTimeout(function() {
            S.classList.add("top"),
            S.classList.remove("bottom"),
            C.classList.remove("bottom"),
            C.classList.add("top"),
            x.classList.add("bottom"),
            x.classList.remove("top")
        }, 250)) : "bottom" === n && (_ = w,
        m.classList.add("top"),
        v.classList.add("active"),
        v.classList.remove("bottom"),
        y.setAttribute("data-position", "left"),
        m.setAttribute("data-position", "top"),
        g.setAttribute("data-position", "active"),
        w.setAttribute("data-position", "bottom"),
        setTimeout(function() {
            _.classList.add("bottom"),
            _.classList.remove("top")
        }, 250))
    },
    blazyLoad: function blazyLoad(e) {
        new Blazy,
        setTimeout(function() {
            e.play()
        })
    },
    soloJazz: function soloJazz(o) {
        var s = this
          , e = o.querySelectorAll(".js-slideshow-select")
          , t = this.dom.slides
          , i = this.dom.leftSlides
          , n = document.querySelector(".js-gif-swap")
          , a = n.getAttribute("data-src")
          , r = new ScrollMagic.Controller;
        new ScrollMagic.Scene({
            triggerElement: o,
            offset: -200
        }).on("enter", function() {
            t[0].classList.add("active"),
            t[0].classList.remove("bottom"),
            i[0].classList.add("active"),
            n.setAttribute("src", ""),
            n.setAttribute("src", a),
            setTimeout(function() {
                o.classList.add("rotate")
            }, 150)
        }).addTo(r),
        [].forEach.call(i, function(e) {
            e.addEventListener("click", function() {
                var e = o.querySelector("[data-position='top']")
                  , t = e.getAttribute("data-select");
                o.querySelector("[data-position='right']").classList.remove("active"),
                e.classList.add("active"),
                s.rotateDots(90, o, t, "top")
            })
        }),
        [].forEach.call(t, function(e) {
            e.addEventListener("click", function() {
                var e = o.querySelector("[data-position='top']")
                  , t = e.getAttribute("data-select");
                o.querySelector("[data-position='right']").classList.remove("active"),
                e.classList.add("active"),
                s.rotateDots(90, o, t, "top")
            })
        }),
        [].forEach.call(e, function(n) {
            n.addEventListener("click", function() {
                var e = n.getAttribute("data-select")
                  , t = n.getAttribute("data-position")
                  , i = o.querySelector("[data-position='right']");
                n.classList.contains("active") || ("top" === t ? (n.classList.add("active"),
                i.classList.remove("active"),
                s.rotateDots(90, o, e, "top")) : "left" === t ? (i.classList.remove("active"),
                n.classList.add("active"),
                s.rotateDots(180, o, e, "left")) : "bottom" === t && (i.classList.remove("active"),
                n.classList.add("active"),
                s.rotateDots(-90, o, e, "bottom")))
            })
        })
    }
},
window.Fish = {
    dom: {
        fish: document.querySelector(".js-fish")
    },
    init: function init() {
        this.dom.fish && this.handleFish(this.dom.fish)
    },
    handleFish: function handleFish(e) {
        var t = function t() {
            Parallax.init(e, -15, 2, null, !1)
        };
        window.addEventListener("scroll", t);
        var i = e.querySelector(".about--goby-pin")
          , n = document.querySelector(".js-about-information")
          , o = document.querySelector(".js-overlay")
          , s = document.querySelector(".js-close-slide-out")
          , a = document.querySelector(".site--header")
          , r = document.querySelector("body");
        i.addEventListener("click", function() {
            n.classList.add("active"),
            o.classList.add("active"),
            r.classList.add("slide-out"),
            a.classList.remove("slideup")
        }),
        s.addEventListener("click", function() {
            n.classList.remove("active"),
            o.classList.remove("active"),
            r.classList.remove("slide-out")
        })
    }
},
window.Segment = {
    identify: function identify(e) {
        var t = {
            firstName: e.get("first_name"),
            lastName: e.get("last_name"),
            email: e.get("email"),
            createdAt: e.get("created_at"),
            id: e.get("id"),
            purchaser: e.get("purchaser")
        }
          , i = e.get("ship_address");
        i && _.extend(t, {
            phone: i.phone,
            $city: i.city,
            $region: i.state_text,
            address: {
                street: i.address1,
                city: i.city,
                state: i.state_text,
                postalCode: i.zipcode,
                country: i.country_iso
            }
        }),
        window.analytics && analytics.identify(e.get("id"), t)
    },
    addToCart: function addToCart(e, t) {
        var i = $.Deferred();
        return setTimeout(function() {
            i.resolve()
        }, 2e3),
        analytics.track("Product Added", {
            cart_id: window.Site.current_order.get("number"),
            sku: e.sku,
            name: e.name,
            variant: e.options_text,
            price: e.price,
            quantity: t
        }, {}, function() {
            i.resolve()
        }),
        i.promise()
    }
};
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var ToggleClass = function() {
    function n(e, t, i) {
        _classCallCheck(this, n),
        this.$el = e,
        this.classname = t,
        this.selector = i,
        this.bind(e),
        this.toggleClass(e[0].checked)
    }
    return _createClass(n, [{
        key: "onChange",
        value: function e() {
            this.toggleClass(this.$el[0].checked)
        }
    }, {
        key: "onClick",
        value: function t(e) {
            e.preventDefault(),
            this.toggleClass()
        }
    }, {
        key: "toggleClass",
        value: function i(e) {
            $(this.selector).toggleClass(this.classname, e)
        }
    }, {
        key: "bind",
        value: function o(e) {
            e.is('input[type="radio"]') ? e.add("[name='" + e.attr("name") + "']").on("change", this.onChange.bind(this)) : e.is('input[type="checkbox"]') ? e.on("change", this.onChange.bind(this)) : e.on("click", this.onClick.bind(this))
        }
    }]),
    n
}();
$(function() {
    $("[data-toggle-class]").each(function() {
        var e = $(this);
        new ToggleClass(e,e.data("toggle-class"),e.data("toggle-class-target"))
    })
}),
window.VerticalSlideshow = {
    dom: {
        slideshowBackground: document.querySelector(".js-slideshow-background"),
        slides: document.querySelectorAll(".js-slide")
    },
    init: function init() {
        this.dom.slideshowBackground && (this.handleBrushes(this.dom.slideshowBackground),
        this.handleSlides(this.dom.slides))
    },
    setPosition: function setPosition() {
        return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    handleSlides: function handleSlides(t) {
        var n = t.length
          , o = function o(e) {
            setTimeout(function() {
                e.classList.add("z-out")
            }, 500),
            setTimeout(function() {
                e.classList.add("bottom"),
                e.classList.remove("top")
            }, 700),
            setTimeout(function() {
                e.classList.remove("z-out")
            }, 900)
        }
          , s = function s() {
            var i = 0;
            return [].forEach.call(t, function(e, t) {
                e.classList.contains("active") && (e.classList.remove("active"),
                e.classList.add("top"),
                i = t === n - 1 ? 0 : t + 1,
                o(e))
            }),
            i
        };
        setInterval(function() {
            var e = s();
            t[e].classList.add("active"),
            t[e].classList.remove("bottom")
        }, 2e3)
    },
    handleBrushes: function handleBrushes(t) {
        var i = this
          , n = function n() {
            var e = i.setPosition() / 50;
            t.style.backgroundPosition = "80% " + e + "% "
        };
        window.addEventListener("scroll", n)
    }
};
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var QuantityInput = function() {
    function i(e) {
        _classCallCheck(this, i);
        var t = $("<div>");
        this.$input = $(e).attr({
            type: "number",
            min: 1
        }),
        this.$input.replaceWith(t),
        this.$el = this.template(e),
        this.$el.data("QuantityInput", this),
        t.replaceWith(this.$el)
    }
    return _createClass(i, null, [{
        key: "init",
        value: function e() {
            $(document).on("click", ".quantity-input--minus", "decrement", i.trigger),
            $(document).on("click", ".quantity-input--add", "increment", i.trigger),
            i.initInputs()
        }
    }, {
        key: "initInputs",
        value: function t() {
            $('input[type="custom-quantity"]').each(function() {
                new i(this)
            })
        }
    }, {
        key: "trigger",
        value: function n(e) {
            var t = e.data;
            $(this).closest(".quantity-input").data("QuantityInput")[t]()
        }
    }]),
    _createClass(i, [{
        key: "template",
        value: function o(e) {
            return $('\n    <div class="form-input quantity-input">\n      <div class="quantity-input--minus js-subtract"></div>\n      <input />\n      <div class="quantity-input--add js-add"></div>\n    </div>\n    ').find("input").replaceWith(e).end()
        }
    }, {
        key: "decrement",
        value: function s() {
            var e = this.value() - 1;
            1 <= e && this.$input.val(e).trigger("change")
        }
    }, {
        key: "increment",
        value: function a() {
            this.$input.val(this.value() + 1).trigger("change")
        }
    }, {
        key: "value",
        value: function r() {
            return parseInt(this.$input.val(), 10)
        }
    }]),
    i
}()
  , VisitorAlert = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function n(e) {
        var t = e.id
          , i = e.message;
        _classCallCheck(this, n),
        this.id = t,
        this.message = i,
        this.$el = $(this.template()),
        this.init()
    }
    return _createClass(n, [{
        key: "template",
        value: function e() {
            return '\n<div class="visitor-alert">' + this.message + '<a href="#" class="close">\xd7</a></div>\n    '
        }
    }, {
        key: "init",
        value: function t() {
            this.$el.on("click", ".close", this.onClick.bind(this)),
            this.show()
        }
    }, {
        key: "show",
        value: function i() {
            localStorage && localStorage.getItem("closed-notification-" + this.id) || $(document.body).addClass("has-visitor-alert").prepend(this.$el)
        }
    }, {
        key: "hide",
        value: function o() {
            localStorage && localStorage.setItem("closed-notification-" + this.id, !0),
            $(document.body).removeClass("has-visitor-alert"),
            this.$el.detach()
        }
    }, {
        key: "onClick",
        value: function s(e) {
            this.hide(),
            e.preventDefault()
        }
    }]),
    n
}());
$(function() {
    var e = $("[data-visitor-alert]").data("visitorAlert");
    e && e.enabled && new VisitorAlert(e)
}),
$(document).ready(function() {
    initBrushKitsMenu(),
    initProductSelectors("#header-metallic-brush-kits"),
    initProductSelectors("#header-metallic-brush-kits-mobile"),
    initProductSelectors("#header-super-brush-kits"),
    initProductSelectors("#header-classic-brush-kits"),
    initProductSelectors("#header-super-brush-kits-mobile"),
    initProductSelectors("#header-classic-brush-kits-mobile"),
    initProductSelectors("#header-limited-brush-kits"),
    initProductSelectors("#header-limited-brush-kits-mobile")
}),
$(document).ready(function() {
    $(".row-wrapper").click(function() {
        var e = $(this).children(".drop-down-wrapper");
        e.height(0),
        $(this).toggleClass("collapsed"),
        $(this).hasClass("collapsed") || e.height(e.find(".drop-down").height())
    }),
    $(".pages-faq .faq a, .order-history .row a").click(function(e) {
        e.stopPropagation()
    })
});
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}();
var KEY_CODE_ESC = 27
  , AccountDetails = function() {
    function e() {
        _classCallCheck(this, e),
        0 !== this.$el.length && (this.shippableStates = this.$el.data("shippablestates"),
        this.countryId = this.shippableStates[0].country_id,
        this.paymentId = this.$el.data("payment-id"),
        this.lastInstallmentFailed = this.$el.data("last-installment-failed"),
        this.creditCardValid = this.$el.data("valid-credit-card"),
        this.render(),
        this.$el.on("click", ".js-edit", this.editGroup.bind(this)),
        this.$el.on("click", ".js-cancel", this.cancelEditGroup.bind(this)),
        this.$el.on("click", ".js-update-btn", this.updateBtn.bind(this)),
        this.$el.on("submit", "form", this.saveGroup.bind(this)),
        this.$el.on("keyup", "form", this.onKeyup.bind(this)))
    }
    return _createClass(e, [{
        key: "$el",
        get: function t() {
            return $(".account-details")
        }
    }]),
    _createClass(e, [{
        key: "dots",
        value: function i(e) {
            return new Array(e + 1).join("&#42;")
        }
    }, {
        key: "render",
        value: function n() {
            this.$el.html(this.template({
                user: Site.current_user,
                shippableStatesOptions: this.shippableStatesOptions.bind(this),
                countryId: this.countryId,
                dots: this.dots
            })),
            $(this.initBraintree.bind(this)),
            "#default-cc-form" === window.location.hash && this.updateBtn()
        }
    }, {
        key: "onKeyup",
        value: function o(e) {
            e.keyCode == KEY_CODE_ESC && this.cancelEditGroup(e)
        }
    }, {
        key: "updateBtn",
        value: function s() {
            $(".js-editable").removeClass("editing"),
            $("li.js-editable:last").addClass("editing")
        }
    }, {
        key: "editGroup",
        value: function a(e) {
            e.preventDefault(),
            $(".js-editable").removeClass("editing"),
            $(e.currentTarget).closest(".js-editable").addClass("editing")
        }
    }, {
        key: "saveGroup",
        value: function r(e) {
            var t = this;
            e.preventDefault();
            var i = $(e.currentTarget).closest(".js-editable").addClass("loading")
              , n = this.groupData(i);
            $(".js-editable").removeClass("has-success has-danger"),
            Site.current_user.save({
                user: n
            }, {
                patch: !0
            }).then(function() {
                "default-cc-form" === i.context.id && t.handleBillingSuccess(),
                t.showApiSuccess(i)
            }, function(e) {
                i.removeClass("loading"),
                t.showApiErrors(i, e),
                i.find("form").trigger("submit-error")
            })
        }
    }, {
        key: "handleBillingSuccess",
        value: function l() {
            !0 === this.lastInstallmentFailed ? (Spree.Flash.success("Your billing information has been updated.", "Refills have been reactivated."),
            this.lastInstallmentFailed = !1) : (Spree.Flash.success("Your billing information has been updated."),
            this.creditCardValid = !0),
            window.location.hash = "",
            this.$el.html(this.template({
                user: Site.current_user,
                shippableStatesOptions: this.shippableStatesOptions.bind(this),
                countryId: this.countryId,
                dots: this.dots
            }))
        }
    }, {
        key: "groupData",
        value: function c(e) {
            return e.find("form").serializeObject()
        }
    }, {
        key: "cancelEditGroup",
        value: function u(e) {
            $(e.currentTarget).closest(".js-editable").removeClass("editing"),
            this.render(Site.current_user)
        }
    }, {
        key: "showApiSuccess",
        value: function d(e) {
            var t = e.index();
            this.render(),
            this.$el.find(".js-editable").eq(t).addClass("has-success")
        }
    }, {
        key: "showApiErrors",
        value: function p(e, t) {
            var n = this;
            e.addClass("has-danger").find(".form-control-feedback").remove(),
            $.map(t.responseJSON.errors, function(e, t) {
                var i = n.$el.find("[name=" + t + "]");
                _.each(e, function(e) {
                    n.addFormFeedback(i, e)
                })
            })
        }
    }, {
        key: "addFormFeedback",
        value: function h(e, t) {
            $('<div class="form-control-feedback">' + t + "</div>").insertAfter(e)
        }
    }, {
        key: "shippableStatesOptions",
        value: function f(t) {
            return this.shippableStates.map(function(e) {
                return '\n        <option value="' + e.id + '"\n        ' + (t === e.id ? " selected='selected'" : "") + "\n        >" + e.abbr + "</option>\n        "
            }).join()
        }
    }, {
        key: "initBraintree",
        value: function v() {
            SolidusBraintree.nonceInput = $("#default-cc-nonce"),
            SolidusBraintree.paymentForm = $("#default-cc-form").on("submit", SolidusBraintree.onSubmitPayment),
            SolidusBraintree.initPaymentMethod(),
            SolidusBraintree.paymentForm.on("submit-error", this.removeNonce)
        }
    }, {
        key: "removeNonce",
        value: function m() {
            SolidusBraintree.nonceInput.val("")
        }
    }, {
        key: "template",
        get: function g() {
            return _.template('\n\n  <% if (this.lastInstallmentFailed === true) { %>\n    <header class="billing-warning-banner">\n      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n      <div>\n        <div class="billing-warning-banner-bold">Your refills have paused.</div>\n        <div>Please update your billing information to reactivate.</div>\n      </div>\n      <button type="button" class="js-update-btn primary-edit btn-link"><a href="#default-cc-form">Update</a></button>\n    </header>\n  <% } else if (this.creditCardValid === false) { %>\n    <header class="billing-warning-banner">\n      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n      <div>\n        <div class="billing-warning-banner-bold">There\'s an issue with your card on file.</div>\n        <div>Please update your billing information.</div>\n      </div>\n      <button type="button" class="js-update-btn primary-edit btn-link"><a href="#default-cc-form">Update</a></button>\n    </header>\n  <% } %>\n\n<ul class="blocked-vertical-list">\n  <li class="js-editable">\n    <form>\n      <div class="account-details-editing-heading">\n        <h3>Name</h3>\n        <button type="button" class="js-cancel js-editing-show btn-link link-muted">Close</button>\n        <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n      </div>\n      <% if ( user.get(\'first_name\') || user.get(\'first_name\') ) { %>\n        <div class="js-editing-hide users-displayed-info"><%= user.get(\'full_name\') %></div>\n      <% } else { %>\n        <button type="button" class="js-edit btn-link js-editing-hide">Tell us your name</button>\n      <% } %>\n      <div class="js-editing-show input-group">\n        <div class="form-input-container">\n          <input class="form-input" name="first_name" value="<%= user.get(\'first_name\') %>" placeholder="First Name" />\n          <label>First Name</label>\n        </div>\n        <div class="form-input-container">\n          <input class="form-input" name="last_name" value="<%= user.get(\'last_name\') %>" placeholder="Last Name" />\n          <label>Last Name</label>\n        </div>\n      </div>\n      <div class="actions">\n        <button type="submit" class="js-editing-show btn--primary">Save</button>\n      </div>\n    </form>\n  </li>\n  <li class="js-editable">\n    <form>\n      <div class="account-details-editing-heading">\n        <h3>Email</h3>\n        <button type="button" class="js-cancel js-editing-show btn-link link-muted">Close</button>\n        <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n      </div>\n      <div class="js-editing-hide users-displayed-info"><%=  user.get(\'email\') %></div>\n      <div class="js-editing-show input-group">\n        <div class="form-input-container">\n          <input class="form-input" name="email" type="email" value="<%=  user.get(\'email\') %>" placeholder="Email" />\n          <label>Email</label>\n        </div>\n      </div>\n      <div class="actions">\n        <button type="submit" class="js-editing-show btn--primary">Save</button>\n      </div>\n    </form>\n  </li>\n  <li class="js-editable">\n    <form>\n      <div class="account-details-editing-heading">\n        <h3>Password</h3>\n        <button type="button" class="js-cancel js-editing-show btn-link link-muted">Close</button>\n        <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n      </div>\n      <div class="js-editing-hide"><%= dots(9) %></div>\n      <div class="js-editing-show input-group">\n        <div class="form-input-container">\n          <input class="form-input" name="current_password" type="password" value="" placeholder="Current Password" />\n          <label>Current Password</label>\n        </div>\n      </div>\n      <div class="js-editing-show input-group">\n        <div class="form-input-container">\n          <input class="form-input" name="password" type="password" value="" placeholder="New Password" />\n          <label>New Password</label>\n        </div>\n      </div>\n      <div class="js-editing-show input-group">\n        <div class="form-input-container">\n          <input class="form-input" name="password_confirmation" type="password" value="" placeholder="Confirm Password" />\n          <label>Confirm Password</label>\n        </div>\n      </div>\n      <div class="actions">\n        <button type="submit" class="js-editing-show btn--primary">Save</button>\n      </div>\n    </form>\n  </li>\n  <li class="js-editable">\n    <form id="default-cc-form">\n      <div class="account-details-editing-heading">\n        <h3>Billing</h3>\n        <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n        <button type="button" class="js-cancel js-editing-show btn-link link-muted">Close</button>\n      </div>\n      <div class="js-editing-hide">\n      <% if ( user.get(\'default_credit_card\') ) { %>\n        <div class="users-displayed-info">\n          <span class="cc-type"><%=  user.get(\'default_credit_card.cc_type\') %></span><% if (user.get(\'default_credit_card.cc_type\') != "paypal"){ %>\n          <%= dots(1) +  user.get(\'default_credit_card.last_digits\') %><% } %>\n        </div>\n        <div class="users-displayed-info-secondary">Expiration: <%=  user.get(\'default_credit_card.month\') %>/<%= user.get(\'default_credit_card.year\')  %></div>\n      <% } else { %>\n        <button type="button" class="js-edit btn-link js-editing-hide">Add payment information</button>\n      <% } %>\n        <% if (this.lastInstallmentFailed === true || this.creditCardValid === false) { %>\n          <div class="billing-warning">Please update your billing information.</div>\n        <% } %>\n      </div>\n      <div class="js-editing-show">\n        <br>\n        <input class="form-input braintree_payment_method_radio" id="radio-cc" name="braintree_payment_method" value="credit_card"  checked="checked" autofocus="autofocus" type="radio">\n        <label for="radio-cc">\n          <div class="radio-box form-input"></div>\n          <div class="info-wrapper">\n            <div class="title">\n              <span>Credit Card</span>\n            </div>\n            <div class="info">\n              We accept all major credit cards.\n            </div>\n          </div>\n        </label>\n      </div>\n      <div class="js-editing-show braintree-cc-input">\n        <div class="input-group">\n          <div class="form-input-container">\n            <input class="form-input" name="payment_method_name_on_card" id="name_on_card" placeholder="Name on Card" />\n            <label>Name on Card</label>\n          </div>\n        </div>\n        <div class="input-group">\n          <div class="form-input-container-braintree">\n            <label>Card Number</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_number" ></div>\n          </div>\n        </div>\n        <div class="input-group">\n          <div class="form-input-container-braintree">\n            <label>MM/YY</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_expiry"></div>\n          </div>\n          <div class="form-input-container-braintree cvv-input">\n            <label class="input-label">CVV</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_code">\n              <a href="/content/cvv" target=\'_blank\' class="cvv-link" tabindex=""-1">?</a>\n            </div>\n          </div>\n        </div>\n        <div class="input-group">\n          <input type="hidden" name="payment_method_nonce" id="default-cc-nonce">\n        </div>\n      </div>\n      <div class="js-editing-show">\n        <br>\n        <div>\n          <input class="form-input braintree_payment_method_radio" id="radio-paypal" name="braintree_payment_method" value="paypal" autofocus="autofocus" type="radio">\n          <label for="radio-paypal">\n            <div class="radio-box form-input"></div>\n            <div class="info-wrapper">\n              <div class="title">\n                <span>Paypal</span>\n              </div>\n              <div class="info">\n                You will be redirected to the PayPal website. After you enter your account information your payment method will be updated.\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class="braintree-input braintree-paypal-input js-editing-show">\n        <br>\n        <div class="actions">\n          <div id="#braintree-paypal-container">\n            <button id="paypal-button" class="btn btn--primary" type="button">Continue to Paypal</button>\n          </div>\n\n          <script>\n            $(document).ready(function(){\n              $(\'.braintree_payment_method_radio\').change(function(e){\n                var method = $(e.target).val();\n                var paypal_div = $(\'.braintree-paypal-input\');\n                var cc_div = $(\'.braintree-cc-input\');\n                var save_changes = $(\'.billing-save-changes\');\n\n                if (method == "credit_card"){\n                  paypal_div.hide();\n                  cc_div.show();\n                  save_changes.show();\n                  clearFields();\n                } else {\n                  $(\'#braintree-paypal-saved-correctly\').hide();\n                  $(\'.paypal-button\').show();\n                  cc_div.hide();\n                  paypal_div.show();\n                  save_changes.hide();\n                  clearFields();\n                }\n              });\n\n              function clearFields(){\n                $(\'#payment_method_nonce\').val("");\n                $(\'#cc_type\').val("");\n                $("input[id^=\'name_on_card\']").val("");\n              }\n\n              var paypal_div = $(\'.braintree-paypal-input\');\n              paypal_div.hide();\n            });\n          </script>\n        </div>\n        <input type="hidden" id="cc_type">\n        <br>\n      </div>\n      <div class="actions">\n        <button type="submit" class="js-editing-show btn--primary billing-save-changes">Save</button>\n      </div>\n    </form>\n  </li>\n</ul>\n')
        }
    }]),
    e
}();
$(document).ready(function() {
    $(".order-details-toggle-button").click(function() {
        var e = $(this).closest(".order-details-buttons").next(".drop-down-wrapper")
          , t = $(this).closest(".order-details-buttons").parent()
          , i = $(this);
        e.height(0),
        t.toggleClass("collapsed"),
        t.hasClass("collapsed") ? i.text(i.data("order-details-open")) : (i.text(i.data("order-details-close")),
        e.height(e.find(".drop-down").height()))
    })
});
_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
;
var SECONDS_PER_MONTH = 2592e3
  , AccountSubscription = function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this),
        this.$el.on("click", ".js-subscription-cancel", this.onCancelSubscription.bind(this))
    }
    return _inherits(e, AccountDetails),
    _createClass(e, [{
        key: "$el",
        get: function t() {
            return $(".account-subscription")
        }
    }]),
    _createClass(e, [{
        key: "render",
        value: function i() {
            this.$el.html(this.template({
                user: Site.current_user,
                shippableStatesOptions: this.shippableStatesOptions.bind(this),
                subscriptionIntervalOptions: this.subscriptionIntervalOptions,
                countryId: this.countryId,
                headerImageUrl: this.headerImageUrl,
                dots: this.dots,
                formatDate: this.americanDate,
                possesive: this.possesive,
                isDentistInviteArea: 0 < $("#dentist-invite-subscription-details").length
            })),
            $(this.initBraintree.bind(this)),
            QuantityInput.initInputs(),
            this.initDatepickers()
        }
    }, {
        key: "initDatepickers",
        value: function o() {
            var t = new Date
              , i = function i(e) {
                return t < e
            };
            this.$el.find('[data-toggle="datepicker"]').datepicker({
                filter: function n(e) {
                    if (!i(e))
                        return !1
                }
            }).on("pick.datepicker", function() {
                $(this).datepicker("hide")
            })
        }
    }, {
        key: "americanDate",
        value: function s(e) {
            var t = (new Date).getTimezoneOffset() / 60
              , i = e.split(/\D/)
              , n = new Date(i[0],i[1] - 1,i[2],t)
              , o = ("0" + n.getDate()).slice(-2);
            return ("0" + (n.getMonth() + 1)).slice(-2) + "/" + o + "/" + n.getFullYear()
        }
    }, {
        key: "fromAmericanDate",
        value: function n(e) {
            var t = e.split(/\D/)
              , i = (new Date).getTimezoneOffset() / 60;
            return new Date(t[2],t[0] - 1,t[1],i)
        }
    }, {
        key: "subscriptionIntervalOptions",
        value: function a(t) {
            return [1, 2, 3].map(function(e) {
                return '\n        <option value="' + e + '"\n        ' + (e === t ? " selected='selected'" : "") + "\n        >" + e + " Month" + (1 < e ? "s" : "") + "</option>\n      "
            }).join()
        }
    }, {
        key: "possesive",
        value: function r(e) {
            return "string" == typeof e && (e = "s" === (e = e.trim()).toLowerCase().slice(-1) ? e + "'" : e + "'s"),
            e
        }
    }, {
        key: "groupData",
        value: function l(e) {
            var t = this
              , i = e.find("form").serializeObject();
            return _.each(i.subscriptions_attributes, function(e) {
                e && e.actionable_date && (e.actionable_date = t.fromAmericanDate(e.actionable_date))
            }),
            i
        }
    }, {
        key: "onCancelSubscription",
        value: function c(e) {
            var t = $(e.currentTarget).closest(".js-editable").data("subscription-id")
              , i = Site.current_user
              , n = i.get("subscriptions").get(t)
              , o = '\n        <form id="subscription_form" class="edit_subscription" action="/subscriptions/' + n.get("id") + '" accept-charset="UTF-8" data-remote="true" method="put"><div class="subscription-form js-editable" data-subscription-id="' + n.get("id") + '">\n        <h2>Too many brush heads?</h2>\n        <p>\n        Did you know you can pause your subscription and restart it at a later date?\n        </p>\n        <h4>Choose a restart date below</h4>\n        <div class="input-group subscription-form__input-group">\n        <input id="actionable_date" class="form-input" data-toggle="datepicker" readonly="readonly" style="text-align: center;" type="text" name="subscription[actionable_date]" value="' + this.americanDate(n.get("actionable_date")) + '">\n        </div>\n        <div>\n        <button name="button" type="submit" class="btn--pink subscription-form__button" style="line-height: normal;">\n        <div>Pause</div>\n        <div>Subscription</div>\n        </button>\n        <input id="cancel_subscription_link" class="btn-link" type="submit" value="continue to cancel">\n        </div>\n        </div>\n        </form>\n    '
              , s = $.fancybox.open(o)
              , a = i.get("subscription_alert");
            0 < i.get("subscriptions").length ? $(".account-subscription").find("header > p").html(a) : $(".account-subscription").find("header > p").html("empty " + i.get("subscriptions").length),
            s.$refs.container.find(".subscription-form__button").click(function(e) {
                e.preventDefault(),
                s.$refs.container.find("#subscription_form").submit(),
                $(".js-editable.editing").removeClass(".editing"),
                s.close()
            }),
            s.$refs.container.find("#cancel_subscription_link").click(function(e) {
                e.preventDefault(),
                s.close(),
                window.confirm("Are you sure?") && ($(".js-editable.editing").toggle(),
                $("body").append('<a class="typeform-share button" href="https://goby.typeform.com/to/ORnHlN" data-mode="popup" data-auto-open=true data-hide-headers=true data-hide-footer=true data-submit-close-delay="5" target="_blank"> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>\n          '),
                n.cancel())
            })
        }
    }, {
        key: "update",
        value: function u() {
            var e = this;
            Site.current_user.fetch({
                success: function t() {
                    e.render()
                }
            })
        }
    }, {
        key: "template",
        get: function d() {
            return TOP = screen.height / 2 - 250,
            LEFT = screen.width / 2 - 400,
            _.template('\n<header>\n  <img src="<%= headerImageUrl %>" />\n  <h1>Your Subscription</h1>\n  <% if (!isDentistInviteArea) { %>\n    <p><%= user.get(\'subscription_alert\') %></p>\n  <% } %>\n</header>\n\n<ul class="blocked-vertical-list">\n  <% if (!isDentistInviteArea) { %>\n    <% user.get(\'subscriptions\').where(\'active?\').map(function(subscription, i) { %>\n      <li class="js-editable" data-subscription-id="<%= subscription.get(\'id\') %>">\n        <form>\n          <h3><%= possesive(subscription.get(\'shipping_address.firstname\')) %> Subscription details</h3>\n          <div class="js-editing-show input-group">\n            <label for="actionable_date">\n              <strong>Next Shipment Date</strong>\n              <br />\n              <span>\n                Choose when your next<br class="desktop"/> brush head ships\n              </span>\n            </label>\n            <input\n              id="actionable_date"\n              name="[subscriptions_attributes][<%= i %>][actionable_date]"\n              class="form-input form-input-group"\n              data-toggle="datepicker"\n              readonly="readonly"\n              value="<%= formatDate(subscription.get(\'actionable_date\')) %>"\n            />\n          </div>\n          <div class="js-editing-hide input-group" style="padding-right: 30px;">\n            <%= subscription.get(\'interval_description\') %>\n            <div class="actions" style="bottom: 0em;">\n              <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n            </div>\n          </div>\n          <div class="js-editing-show input-group">\n            <label for="quanity">\n              <strong>Replacement Cycle</strong>\n              <br />\n              <span>Choose how often you want<br class="desktop"/> to recieve brush heads</span>\n            </label>\n            <div class="carat">\n              <select\n                id="interval"\n                class="form-input carat form-input-group"\n                name="[subscriptions_attributes][<%= i %>][interval_length]">\n                <%= subscriptionIntervalOptions(subscription.get(\'interval_length\')) %>\n              </select>\n            </div>\n          </div>\n          <% subscription.get(\'subscription_line_items\').map(function(line_item, j) { %>\n            <div class="js-editing-show input-group">\n              <label for="quanity">\n                <strong>Brush Head Quantity</strong>\n                <br />\n                <span>Choose how many <%= line_item.name %> to recieve per shipment</span>\n              </label>\n              <input\n                type="custom-quantity"\n                name="[subscriptions_attributes][<%= i %>][line_items_attributes][<%=subscription.get(\'subscription_line_items\')[j]["id"]%>][quantity]"\n                id="quanity"\n                class="form-input-group"\n                value="<%= line_item[\'quantity\'] %>"\n              />\n              <input type="hidden" name="[subscriptions_attributes][<%= i %>][line_items_attributes][<%=subscription.get(\'subscription_line_items\')[j]["id"]%>][id]" value="<%= subscription.get(\'subscription_line_items\')[j]["id"] %>">\n            </div>\n          <% }) %>\n          <input type="hidden" name="[subscriptions_attributes][<%= i %>][id]" value="<%= subscription.get(\'id\') %>">\n          <div class="js-editing-hide">\n            <br>\n            <h4>Shipping Address:</h4>\n            <% if ( subscription.get(\'shipping_address\') ) { %>\n              <div><%=  subscription.get(\'shipping_address.firstname\') %> <%=  subscription.get(\'shipping_address.lastname\') %></div>\n              <div><%=  subscription.get(\'shipping_address.address1\') %></div>\n              <div><%=  subscription.get(\'shipping_address.address2\') %></div>\n              <div><%=  subscription.get(\'shipping_address.city\') %>, <%=  subscription.get(\'shipping_address.state_text\') %>, <%=  subscription.get(\'shipping_address.zipcode\') %></div>\n            <% } else { %>\n              <button type="button" class="js-edit btn-link js-editing-hide">Add a shipping address</button>\n            <% } %>\n          </div>\n          <div class="js-editing-show">\n            <br>\n            <h4>Shipping Address:</h4>\n            <div class="input-group">\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][firstname]" value="<%=  subscription.get(\'shipping_address.firstname\') %>" placeholder="First name" />\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][lastname]" value="<%=  subscription.get(\'shipping_address.lastname\') %>" placeholder="Last name" />\n            </div>\n            <div class="input-group">\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][address1]" value="<%=  subscription.get(\'shipping_address.address1\') %>" placeholder="Street Address" />\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][address2]" value="<%=  subscription.get(\'shipping_address.address2\') %>" placeholder="Suite Number" />\n            </div>\n            <div class="input-group">\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][city]" value="<%=  subscription.get(\'shipping_address.city\') %>" placeholder="City" />\n              <select class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][state_id]" value="<%=  subscription.get(\'shipping_address.state_text\') %>"><%= shippableStatesOptions(subscription.get(\'shipping_address.state_id\')) %> </select>\n              <input class="form-input" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][zipcode]"value="<%=  subscription.get(\'shipping_address.zipcode\') %>" placeholder="Zipcode" />\n            </div>\n            <div class="input-group">\n              <input type="hidden" name="[subscriptions_attributes][<%= i %>][shipping_address_attributes][country_id]"value="<%= countryId %>" />\n            </div>\n          </div>\n\n          <button type="button" class="js-editing-show subscription-cancel js-subscription-cancel btn-link link-muted">Cancel subscription</button>\n          <div class="actions">\n            <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n            <button type="submit" class="js-editing-show btn--primary">Save Changes</button>\n            <button type="button" class="js-cancel js-editing-show btn-link link-secondary">Discard and Close</button>\n          </div>\n        </form>\n      </li>\n    <% }) %>\n  <% } %>\n  <li class="js-editable">\n    <form id="default-cc-form">\n      <div class="account-details-editing-heading">\n        <h3>Billing</h3>\n        <button type="button" class="js-edit primary-edit btn-link js-editing-hide">Edit</button>\n        <button type="button" class="js-cancel js-editing-show btn-link link-muted">Close</button>\n      </div>\n      <div class="js-editing-hide">\n      <% if ( user.get(\'default_credit_card\') ) { %>\n        <div class="users-displayed-info">\n          <span class="cc-type"><%=  user.get(\'default_credit_card.cc_type\') %></span><% if (user.get(\'default_credit_card.cc_type\') != "paypal"){ %>\n          <%= dots(1) +  user.get(\'default_credit_card.last_digits\') %><% } %>\n        </div>\n        <div class="users-displayed-info-secondary">Expiration: <%=  user.get(\'default_credit_card.month\') %>/<%= user.get(\'default_credit_card.year\')  %></div>\n      <% } else { %>\n        <button type="button" class="js-edit btn-link js-editing-hide">Add payment information</button>\n      <% } %>\n        <% if (this.lastInstallmentFailed === true || this.creditCardValid === false) { %>\n          <div class="billing-warning">Please update your billing information.</div>\n        <% } %>\n      </div>\n      <div class="js-editing-show">\n        <br>\n        <input class="form-input braintree_payment_method_radio" id="radio-cc" name="braintree_payment_method" value="credit_card"  checked="checked" autofocus="autofocus" type="radio">\n        <label for="radio-cc">\n          <div class="radio-box form-input"></div>\n          <div class="info-wrapper">\n            <div class="title">\n              <span>Credit Card</span>\n            </div>\n            <div class="info">\n              We accept all major credit cards.\n            </div>\n          </div>\n        </label>\n      </div>\n      <div class="js-editing-show braintree-cc-input">\n        <div class="input-group">\n          <div class="form-input-container">\n            <input class="form-input" name="payment_method_name_on_card" id="name_on_card" placeholder="Name on Card" />\n            <label>Name on Card</label>\n          </div>\n        </div>\n        <div class="input-group">\n          <div class="form-input-container-braintree">\n            <label>Card Number</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_number" ></div>\n          </div>\n        </div>\n        <div class="input-group">\n          <div class="form-input-container-braintree">\n            <label>MM/YY</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_expiry"></div>\n          </div>\n          <div class="form-input-container-braintree cvv-input">\n            <label class="input-label">CVV</label>\n            <div class=\'braintree-hosted-field form-input\' id="braintree_card_code">\n              <a href="/content/cvv" target=\'_blank\' class="cvv-link" tabindex=""-1">?</a>\n            </div>\n          </div>\n        </div>\n        <div class="input-group">\n          <input type="hidden" name="payment_method_nonce" id="default-cc-nonce">\n        </div>\n      </div>\n      <div class="js-editing-show">\n        <br>\n        <div>\n          <input class="form-input braintree_payment_method_radio" id="radio-paypal" name="braintree_payment_method" value="paypal" autofocus="autofocus" type="radio">\n          <label for="radio-paypal">\n            <div class="radio-box form-input"></div>\n            <div class="info-wrapper">\n              <div class="title">\n                <span>Paypal</span>\n              </div>\n              <div class="info">\n                You will be redirected to the PayPal website. After you enter your account information your payment method will be updated.\n              </div>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class="braintree-input braintree-paypal-input js-editing-show">\n        <br>\n        <div class="actions">\n          <div id="#braintree-paypal-container">\n            <button id="paypal-button" class="btn btn--primary" type="button">Continue to Paypal</button>\n          </div>\n\n          <script>\n            $(document).ready(function(){\n              $(\'.braintree_payment_method_radio\').change(function(e){\n                var method = $(e.target).val();\n                var paypal_div = $(\'.braintree-paypal-input\');\n                var cc_div = $(\'.braintree-cc-input\');\n                var save_changes = $(\'.billing-save-changes\');\n\n                if (method == "credit_card"){\n                  paypal_div.hide();\n                  cc_div.show();\n                  save_changes.show();\n                  clearFields();\n                } else {\n                  $(\'#braintree-paypal-saved-correctly\').hide();\n                  $(\'.paypal-button\').show();\n                  cc_div.hide();\n                  paypal_div.show();\n                  save_changes.hide();\n                  clearFields();\n                }\n              });\n\n              function clearFields(){\n                $(\'#payment_method_nonce\').val("");\n                $(\'#cc_type\').val("");\n                $("input[id^=\'name_on_card\']").val("");\n              }\n\n              var paypal_div = $(\'.braintree-paypal-input\');\n              paypal_div.hide();\n            });\n          </script>\n        </div>\n        <input type="hidden" id="cc_type">\n        <br>\n      </div>\n      <div class="actions">\n        <button type="submit" class="js-editing-show btn--primary billing-save-changes">Save</button>\n      </div>\n    </form>\n  </li>\n</ul>\n')
        }
    }]),
    e
}()
  , AccountRefills = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function o() {
        var t = this;
        if (_classCallCheck(this, o),
        this.$el = $(this.selector),
        this.failedSubscriptionFeature = this.$el.data("failed-subscription-feature"),
        this.lastInstallmentFailed = this.$el.data("last-installment-failed"),
        0 !== this.$el.length) {
            var i = Site.current_user
              , e = i.get("subscriptions").where("active?").sort(function(e, t) {
                return e.id > t.id ? 1 : -1
            })
              , n = i.get("subscriptions").where({
                "active?": !1
            }).sort(function(e, t) {
                return e.updated_at > t.updated_at ? 1 : -1
            })[0];
            0 < e.length ? (!0 === this.lastInstallmentFailed && this.failedSubscriptionFeature && new BillingWarning(this.$el),
            e.forEach(function(e) {
                new AccountRefill(t.$el,i,e,t.$el.data(),function(e) {
                    "subscription:removed" == e.type && 0 === this.$el.find(".white-container-refill").length && this.$el.html(this.template)
                }
                .bind(t))
            }, this)) : n && this.failedSubscriptionFeature ? new AccountLastRefill(this.$el,i,n,this.$el.data(),function(e) {
                "subscription:removed" == e.type && 0 === this.$el.find(".white-container-refill").length && this.$el.html(this.template)
            }
            .bind(this)) : this.$el.html(this.template)
        }
    }
    return _createClass(o, [{
        key: "selector",
        get: function e() {
            return ".account-refills"
        }
    }]),
    _createClass(o, [{
        key: "render",
        value: function t() {}
    }, {
        key: "template",
        get: function i() {
            return '\n<div class="white-container-refill" style="padding: 40px;">\n  <h2 style="font-size: 32px; margin-bottom: 30px; max-width: 275px;">\n    YOU HAVEN\u2019T SUBSCRIBED TO ANY REFILLS\n  </h2>\n  <a href="/shop" class="btn btn--primary">SHOP NOW</a>\n</div>\n    '
        }
    }]),
    o
}())
  , AccountRefill = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function s(e, t, i, n, o) {
        _classCallCheck(this, s),
        0 !== e.length && (this.$el = $(this.template).appendTo(e),
        this.callback = o,
        this.productsSection = new RefillProductsSection(this.$el,t,i,n,function(e) {
            "actionable-date:updated" == e.type ? this.nextRefillSection.onSuccess() : "subscription:removed" == e.type && (this.$el.remove(),
            this.callback(e))
        }
        .bind(this)),
        this.nextRefillSection = new RefillNextRefillSection(this.$el,t,i,n),
        this.frequencySection = new RefillFrequencySection(this.$el,t,i,n),
        this.shippingAddressSection = new RefillShippingAddressSection(this.$el,t,i,n))
    }
    return _createClass(s, [{
        key: "template",
        get: function e() {
            return '\n<div class="white-container-refill">\n  <div class="section products-section js-editable"></div>\n  <div class="section next-refill-section js-editable"></div>\n  <div class="section frequency-section js-editable"></div>\n  <div class="section shipping-address-section js-editable"></div>\n</div>\n    '
        }
    }]),
    s
}())
  , AccountLastRefill = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function s(e, t, i, n, o) {
        _classCallCheck(this, s),
        0 !== e.length && (this.$el = $(this.template).appendTo(e),
        this.callback = o,
        this.productsSection = new RefillProductsSection(this.$el,t,i,n,function(e) {
            "actionable-date:updated" == e.type ? this.lastRefillDatePicker.onSuccess() : "subscription:removed" == e.type && (this.$el.remove(),
            this.callback(e))
        }
        .bind(this)),
        this.lastRefillDatePicker = new LastRefillDatePicker(this.$el,t,i,n,function(e) {
            "subscription:activated" == e.type && (this.$parent.remove(),
            new AccountRefills)
        }
        ),
        this.frequencySection = new RefillFrequencySection(this.$el,t,i,n),
        this.shippingAddressSection = new RefillShippingAddressSection(this.$el,t,i,n))
    }
    return _createClass(s, [{
        key: "template",
        get: function e() {
            return '\n    <div>\n    <div class="section last-refill-datepicker js-editable"></div>\n    <div class="white-container-refill">\n      <div class="section products-section js-editable"></div>\n      <div class="section frequency-section js-editable"></div>\n      <div class="section shipping-address-section js-editable"></div>\n    </div>\n    </div>\n    '
        }
    }]),
    s
}())
  , RefillSection = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function s(e, t, i, n, o) {
        _classCallCheck(this, s),
        this.$parent = e,
        this.$el = e.find(this.selector),
        0 !== this.$parent.length && 0 !== this.$el.length && (this.user = t,
        this.subscription = i,
        this.data = n,
        this.callback = o,
        this.beforeRender(),
        this.render())
    }
    return _createClass(s, [{
        key: "beforeRender",
        value: function e() {
            this.$el.on("click", ".js-edit", this.onEdit.bind(this)),
            this.$el.on("click", ".js-close", this.onClose.bind(this)),
            this.$el.on("submit", "form", this.onSave.bind(this))
        }
    }, {
        key: "onEdit",
        value: function t(e) {
            e.preventDefault(),
            this.edit()
        }
    }, {
        key: "onClose",
        value: function i(e) {
            e.preventDefault(),
            window.confirm("Do you want to save your changes?") ? this.$el.find("form").submit() : this.close()
        }
    }, {
        key: "edit",
        value: function n() {
            this.$el.addClass("editing")
        }
    }, {
        key: "close",
        value: function o() {
            this.$el.removeClass("editing has-danger"),
            this.render()
        }
    }, {
        key: "onSave",
        value: function a(e) {
            e.preventDefault();
            var t = this.$el.find("form").serializeObject();
            this.user.save({
                user: t
            }, {
                patch: !0
            }).then(this.onSuccess.bind(this), this.onError.bind(this))
        }
    }, {
        key: "onSuccess",
        value: function r() {
            var t = this;
            this.subscription = this.user.get("subscriptions").find(function(e) {
                return e.id === t.subscription.id
            }),
            this.close(),
            this.showSuccess()
        }
    }, {
        key: "onError",
        value: function l() {
            this.showError()
        }
    }, {
        key: "showSuccess",
        value: function c() {
            var e = this;
            this.$el.addClass("has-success"),
            setTimeout(function() {
                e.$el.removeClass("has-success")
            }, 2e3)
        }
    }, {
        key: "showError",
        value: function u() {
            this.$el.addClass("has-danger")
        }
    }, {
        key: "render",
        value: function d() {
            this.$el.html(this.template(this.templateParams))
        }
    }, {
        key: "templateParams",
        get: function p() {
            return {
                user: this.user,
                subscription: this.subscription
            }
        }
    }]),
    s
}())
  , LastRefillDatePicker = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function i() {
        _classCallCheck(this, i),
        _get(Object.getPrototypeOf(i.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(i, RefillSection),
    _createClass(i, [{
        key: "beforeRender",
        value: function e() {
            _get(Object.getPrototypeOf(i.prototype), "beforeRender", this).call(this)
        }
    }, {
        key: "render",
        value: function t() {
            _get(Object.getPrototypeOf(i.prototype), "render", this).call(this),
            this.initDatepicker()
        }
    }, {
        key: "onSave",
        value: function n(e) {
            var t = this;
            e.preventDefault(),
            this.subscription.activate().then(function() {
                _get(Object.getPrototypeOf(i.prototype), "onSave", t).call(t, e)
            }, this.onError.bind(this))
        }
    }, {
        key: "onSuccess",
        value: function o() {
            _get(Object.getPrototypeOf(i.prototype), "onSuccess", this).call(this),
            Spree.Flash.success("Refills have been reactivated."),
            this.callback({
                type: "subscription:activated"
            })
        }
    }, {
        key: "initDatepicker",
        value: function s() {
            var e = new Date;
            this.$el.find('[data-toggle="datepicker"]').datepicker({
                inline: !0,
                container: this.$el.find(".js-datepicker"),
                format: "yyyy-mm-dd",
                startDate: e
            })
        }
    }, {
        key: "timeToDate",
        value: function a(e) {
            var t = new Date(e)
              , i = t.getDate()
              , n = t.getMonth() + 1;
            return t.getFullYear() + "-" + n + "-" + i
        }
    }, {
        key: "selector",
        get: function r() {
            return ".last-refill-datepicker"
        }
    }, {
        key: "templateParams",
        get: function l() {
            return Object.assign({}, _get(Object.getPrototypeOf(i.prototype), "templateParams", this), {
                actionableDate: this.timeToDate(this.subscription.get("actionable_date"))
            })
        }
    }, {
        key: "template",
        get: function c() {
            return _.template('\n    <header class="last-refill-banner">\n      <i class="fa fa-info-circle" aria-hidden="true"></i>\n      <div>\n        <div class="billing-warning-banner-bold">This refill has been cancelled.</div>\n        <div>Reactivate to choose your next ship date.</div>\n      </div>\n      <button type="button" class="js-editing-hide js-edit primary-edit btn-link"><a href="#">Reactivate</a></button>\n    </header>\n    <div class="details js-editing-show edit">\n      <div class="date-picker-content js-close">\n        <div class="date-picker-content-container">\n          <div class="header">WE\'RE HAPPY TO<br>HAVE YOU BACK!</div>\n          <form>\n            <input type="hidden" name="[subscriptions_attributes][][id]" value="<%= subscription.get(\'id\') %>">\n      \n            <div class="next-order-text">\n              Choose when your next order ships.\n            </div>\n      \n            <input type="hidden" data-toggle="datepicker" name="[subscriptions_attributes][][actionable_date]" value="<%= actionableDate %>">\n            <div class="js-datepicker"></div>\n      \n            <button type="submit" class="btn--primary js-submit">REACTIVATE SUBSCRIPTION</button>\n          </form>\n        </div>\n      </div>\n    </div>\n    ')
        }
    }]),
    i
}())
  , RefillProductsSection = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(e, RefillSection),
    _createClass(e, [{
        key: "beforeRender",
        value: function t() {
            _get(Object.getPrototypeOf(e.prototype), "beforeRender", this).call(this),
            this.$el.on("click", ".js-remove", this.onRemove.bind(this)),
            this.$el.on("change", ".js-quantity-input", this.onQuantityChange.bind(this)),
            this.$el.on("click", ".js-add-product", this.onAddProduct.bind(this)),
            this.allLineItems = JSON.parse(JSON.stringify(this.subscription.get("subscription_line_items"))),
            this.formatter = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            })
        }
    }, {
        key: "close",
        value: function i() {
            this.allLineItems = JSON.parse(JSON.stringify(this.subscription.get("subscription_line_items"))),
            _get(Object.getPrototypeOf(e.prototype), "close", this).call(this)
        }
    }, {
        key: "onRemove",
        value: function n(e) {
            e.preventDefault(),
            1 < this.lineItems.length ? this.removeLineItemAt($(e.currentTarget).data("line-item-index")) : this.showPauseSubscriptionModal()
        }
    }, {
        key: "removeLineItemAt",
        value: function o(e) {
            var t = this.allLineItems[e];
            t.id ? t.markedForDestruction = !0 : this.allLineItems.splice(e),
            this.render()
        }
    }, {
        key: "americanDate",
        value: function s(e) {
            var t = (new Date).getTimezoneOffset() / 60
              , i = e.split(/\D/)
              , n = new Date(i[0],i[1] - 1,i[2],t)
              , o = ("0" + n.getDate()).slice(-2);
            return ("0" + (n.getMonth() + 1)).slice(-2) + "/" + o + "/" + n.getFullYear()
        }
    }, {
        key: "timeToDate",
        value: function a(e) {
            var t = new Date(e)
              , i = t.getDate()
              , n = t.getMonth() + 1;
            return t.getFullYear() + "-" + n + "-" + i
        }
    }, {
        key: "showPauseSubscriptionModal",
        value: function r() {
            var e = '\n<form id="subscription_form" class="edit_subscription">\n  <input type="hidden" name="[subscriptions_attributes][][id]" value="' + this.subscription.get("id") + '">\n\n  <div class="subscription-form js-editable">\n    <h2>Too many brush heads?</h2>\n    <p>\n      Did you know you can pause your subscription and restart it at a later date?\n    </p>\n    <h4>Choose a restart date below</h4>\n    <div class="input-group subscription-form__input-group">\n      <input id="actionable_date" class="form-input" data-toggle="datepicker" readonly="readonly" style="text-align: center;" type="text" name="[subscriptions_attributes][][actionable_date]" value="' + this.americanDate(this.subscription.get("actionable_date")) + '">\n    </div>\n    <div>\n      <button id="pause_subscription_button" type="submit" class="btn--pink subscription-form__button" style="line-height: normal;">\n        <div>Pause</div>\n        <div>Subscription</div>\n      </button>\n      <button id="cancel_subscription_button" class="btn-link" type="button">continue to cancel</button>\n    </div>\n  </div>\n</form>\n    '
              , i = $.fancybox.open(e);
            i.$refs.container.find("form").submit(function(e) {
                e.preventDefault();
                var t = $(e.currentTarget).serializeObject();
                t.subscriptions_attributes.actionable_date = this.timeToDate(t.subscriptions_attributes.actionable_date),
                this.user.save({
                    user: t
                }, {
                    patch: !0
                }).then(function() {
                    this.close(),
                    this.callback({
                        type: "actionable-date:updated"
                    }),
                    i.close()
                }
                .bind(this), this.onError.bind(this))
            }
            .bind(this)),
            i.$refs.container.find("#cancel_subscription_button").click(function(e) {
                e.preventDefault(),
                i.close(),
                window.confirm("Are you sure?") && this.cancelSubscription()
            }
            .bind(this))
        }
    }, {
        key: "cancelSubscription",
        value: function l() {
            var e = this;
            this.subscription.cancel().then(function() {
                $("body").append('\n<a class="typeform-share button" href="https://goby.typeform.com/to/ORnHlN" data-mode="popup" data-auto-open=true data-hide-headers=true data-hide-footer=true data-submit-close-delay="5" target="_blank"> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>\n        '),
                e.callback({
                    type: "subscription:removed"
                })
            }, this.onError.bind(this))
        }
    }, {
        key: "onQuantityChange",
        value: function c(e) {
            var t = e.currentTarget.value
              , i = $(e.currentTarget).closest(".js-line-item-container")
              , n = this.allLineItems[i.data("line-item-index")]
              , o = (n.quantity = t) * n.variant_price;
            i.find(".js-line-item-total").html(this.formatter.format(o))
        }
    }, {
        key: "onAddProduct",
        value: function u(t) {
            var e = this.variants.find(function(e) {
                return e.id === $(t.currentTarget).data("variant-id")
            });
            this.allLineItems.push({
                id: null,
                name: e.name,
                quantity: 1,
                variant_price: e.price,
                subscribable_id: e.id,
                image_for_account_page: e.image_for_account_page
            }),
            this.render()
        }
    }, {
        key: "render",
        value: function d() {
            _get(Object.getPrototypeOf(e.prototype), "render", this).call(this),
            QuantityInput.initInputs()
        }
    }, {
        key: "selector",
        get: function p() {
            return ".products-section"
        }
    }, {
        key: "lineItems",
        get: function h() {
            return this.allLineItems.filter(function(e) {
                return !e.markedForDestruction
            })
        }
    }, {
        key: "variants",
        get: function f() {
            var i = this.lineItems.map(function(e) {
                return e.subscribable_id
            });
            return this.data.subscribablevariants.filter(function(e) {
                var t = e.id;
                return !i.includes(t)
            })
        }
    }, {
        key: "templateParams",
        get: function v() {
            return Object.assign({}, _get(Object.getPrototypeOf(e.prototype), "templateParams", this), {
                allLineItems: this.allLineItems,
                lineItems: this.lineItems,
                formatter: this.formatter,
                variants: this.variants
            })
        }
    }, {
        key: "template",
        get: function m() {
            return _.template('\n<div class="header">\n  <div class="subheader">PRODUCTS</div>\n  <a href="#" class="js-edit js-editing-hide">Edit or Add</a>\n  <a href="#" class="js-close js-editing-show">Close</a>\n</div>\n\n<div class="details">\n  <div class="js-editing-hide show">\n    <% subscription.get(\'subscription_line_items\').forEach(function(line_item) { %>\n      <div class="product-container">\n        <img src="<%= line_item.image_for_account_page %>" style="margin: 0; border-radius: 8px; width: 80px; height: 80px;" />\n        <div class="product-details">\n          <div>\n            <%= line_item.quantity %>x <%= line_item.name %>\n          </div>\n          <div style="display:none; color: #4d4d4d">\n            Black\n          </div>\n        </div>\n      </div>\n    <% }); %>\n  </div>\n\n  <div class="js-editing-show edit">\n    <form>\n      <input type="hidden" name="[subscriptions_attributes][][id]" value="<%= subscription.get(\'id\') %>">\n\n      <% allLineItems.forEach(function(line_item, index) { %>\n        <input type="hidden" name="[subscriptions_attributes][][line_items_attributes][<%= index %>][id]" value="<%= line_item.id %>">\n\n        <% if(line_item.markedForDestruction) { %>\n          <input type="hidden" name="[subscriptions_attributes][][line_items_attributes][<%= index %>][_destroy]" value="1">\n        <% } else { %>\n          <input type="hidden" name="[subscriptions_attributes][][line_items_attributes][<%= index %>][subscribable_id]" value="<%= line_item.subscribable_id %>">\n          <div class="product-container js-line-item-container" data-line-item-index="<%= index %>">\n            <img src="<%= line_item.image_for_account_page %>" style="margin: 0; border-radius: 8px; width: 80px; height: 80px;">\n            <div class="product-details">\n              <div class="product-name">\n                <div>\n                  <%= line_item.name %>\n                </div>\n                <a href="#" class="js-remove" data-line-item-index="<%= index %>"><%= lineItems.length > 1 ? \'Remove\' : \'Cancel Subscription\' %></a>\n              </div>\n\n              <div class="product-quantity">\n                <div class="header">\n                  <div class="subheader">QUANTITY</div>\n                </div>\n                <div class="details">\n                  <input class="js-quantity-input" type="custom-quantity" name="[subscriptions_attributes][][line_items_attributes][<%= index %>][quantity]" value="<%= line_item.quantity %>">\n                </div>\n              </div>\n\n              <div class="product-total">\n                <div class="header">\n                  <div class="subheader">TOTAL</div>\n                </div>\n                <div class="details js-line-item-total">\n                  <%= formatter.format(line_item.variant_price * line_item.quantity) %>\n                </div>\n              </div>\n            </div>\n          </div>\n        <% } %>\n      <% }); %>\n\n      <button type="submit" class="btn--primary js-submit">Save</button>\n    </form>\n\n    <div style="margin: 30px -30px 0; padding: 30px 0; background-color: #f9fbff;">\n      <div class="header" style="margin-left: 30px;">\n        <div class="subheader">ADD TO YOUR NEXT BOX</div>\n      </div>\n      <div class="details" style="display: flex; overflow-x: auto;">\n        <% variants.forEach(function(variant, index) { %>\n          <div class="product-card">\n            <div style="position: relative;">\n              <img src="<%= variant.image_for_account_page %>" style="margin: 0; border-radius: 8px; width: 120px; height: 120px;">\n              <div style="position: absolute; bottom: 10px; right: 10px;">\n                <div class="add-button js-add-product" data-variant-id="<%= variant.id %>"></div>\n              </div>\n            </div>\n            <div style="margin-top: 10px;">\n              <%= variant.name %>\n            </div>\n            <div style="color: #4d4d4d;">\n              <%= formatter.format(variant.price) %>\n            </div>\n          </div>\n        <% }); %>\n      </div>\n    </div>\n  </div>\n</div>\n    ')
        }
    }]),
    e
}())
  , RefillNextRefillSection = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(e, RefillSection),
    _createClass(e, [{
        key: "render",
        value: function t() {
            _get(Object.getPrototypeOf(e.prototype), "render", this).call(this),
            this.initDatepicker()
        }
    }, {
        key: "initDatepicker",
        value: function i() {
            var e = new Date;
            this.$el.find('[data-toggle="datepicker"]').datepicker({
                inline: !0,
                container: this.$el.find(".js-datepicker"),
                format: "yyyy-mm-dd",
                startDate: e
            })
        }
    }, {
        key: "timeToDate",
        value: function o(e) {
            var t = new Date(e)
              , i = t.getDate()
              , n = t.getMonth() + 1;
            return t.getFullYear() + "-" + n + "-" + i
        }
    }, {
        key: "selector",
        get: function n() {
            return ".next-refill-section"
        }
    }, {
        key: "templateParams",
        get: function s() {
            return Object.assign({}, _get(Object.getPrototypeOf(e.prototype), "templateParams", this), {
                actionableDate: this.timeToDate(this.subscription.get("actionable_date"))
            })
        }
    }, {
        key: "template",
        get: function a() {
            return _.template('\n<div class="header">\n  <div class="subheader"">NEXT REFILL SHIPS</div>\n  <a href="#" class="js-edit js-editing-hide">Edit</a>\n  <a href="#" class="js-close js-editing-show">Close</a>\n</div>\n<div class="details">\n  <div class="js-editing-hide show">\n    <%= subscription.get(\'readable_actionable_date\') %>\n  </div>\n\n  <div class="js-editing-show edit">\n    <form>\n      <input type="hidden" name="[subscriptions_attributes][][id]" value="<%= subscription.get(\'id\') %>">\n\n      <div style="margin-bottom: 14px;">\n        Choose when your next order ships.\n      </div>\n\n      <input type="hidden" data-toggle="datepicker" name="[subscriptions_attributes][][actionable_date]" value="<%= actionableDate %>">\n      <div class="js-datepicker"></div>\n\n      <button type="submit" class="btn--primary js-submit">Save</button>\n    </form>\n  </div>\n</div>\n    ')
        }
    }]),
    e
}())
  , RefillFrequencySection = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(e, RefillSection),
    _createClass(e, [{
        key: "selector",
        get: function t() {
            return ".frequency-section"
        }
    }, {
        key: "templateParams",
        get: function i() {
            return Object.assign({}, _get(Object.getPrototypeOf(e.prototype), "templateParams", this), {
                intervalLength: this.subscription.get("interval_length")
            })
        }
    }, {
        key: "template",
        get: function n() {
            return _.template('\n<div class="header">\n  <div class="subheader"">FREQUENCY</div>\n  <a href="#" class="js-edit js-editing-hide">Edit</a>\n  <a href="#" class="js-close js-editing-show">Close</a>\n</div>\n<div class="details">\n  <div class="js-editing-hide show">\n    Every <%= subscription.get(\'readable_interval\') %>\n  </div>\n\n  <div class="js-editing-show edit">\n    <form>\n      <input type="hidden" name="[subscriptions_attributes][][id]" value="<%= subscription.get(\'id\') %>">\n\n      <div style="margin-bottom: 20px;">\n        We\'ll ship a new item every:\n      </div>\n\n      <input id="<%= subscription.id %>-1-month" type="radio" name="[subscriptions_attributes][][interval_length]" value="1" <%= intervalLength == 1 ? \'checked\' : \'\' %>>\n      <label for="<%= subscription.id %>-1-month" style="margin-bottom: 15px;">\n        <div class="radio-box form-input"></div>1 Month\n      </label>\n\n      <input id="<%= subscription.id %>-2-months" type="radio" name="[subscriptions_attributes][][interval_length]" value="2" <%= intervalLength == 2 ? \'checked\' : \'\' %>>\n      <label for="<%= subscription.id %>-2-months" style="margin-bottom: 15px;">\n        <div class="radio-box form-input"></div>2 Months\n      </label>\n\n      <input id="<%= subscription.id %>-3-months" type="radio" name="[subscriptions_attributes][][interval_length]" value="3" <%= intervalLength == 3 ? \'checked\' : \'\' %>>\n      <label for="<%= subscription.id %>-3-months" style="margin-bottom: 15px;">\n        <div class="radio-box form-input"></div>3 Months\n      </label>\n\n      <button type="submit" class="btn--primary js-submit">Save</button>\n    </form>\n  </div>\n</div>\n    ')
        }
    }]),
    e
}())
  , RefillShippingAddressSection = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(e, RefillSection),
    _createClass(e, [{
        key: "statesOptions",
        value: function i() {
            var t = this;
            return this.states.map(function(e) {
                return '<option value="' + e.id + '" ' + (e.id == t.shippingAddress.state_id ? "selected" : "") + ">" + e.abbr + "</option>"
            }).join()
        }
    }, {
        key: "selector",
        get: function t() {
            return ".shipping-address-section"
        }
    }, {
        key: "shippingAddress",
        get: function n() {
            return this.subscription.get("shipping_address")
        }
    }, {
        key: "states",
        get: function o() {
            return this.data.shippablestates
        }
    }, {
        key: "templateParams",
        get: function s() {
            return Object.assign({}, _get(Object.getPrototypeOf(e.prototype), "templateParams", this), {
                shippingAddress: this.shippingAddress,
                statesOptions: this.statesOptions(),
                countryId: this.states[0].country_id
            })
        }
    }, {
        key: "template",
        get: function a() {
            return _.template('\n<div class="header">\n  <div class="subheader"">SHIPPING ADDRESS</div>\n  <a href="#" class="js-edit js-editing-hide">Edit</a>\n  <a href="#" class="js-close js-editing-show">Close</a>\n</div>\n<div class="details">\n  <div class="js-editing-hide show">\n    <div><%= shippingAddress.full_name %></div>\n    <div><%= shippingAddress.address1 %></div>\n    <div><%= shippingAddress.city %>, <%= shippingAddress.state_text %></div>\n    <div><%= shippingAddress.zipcode %></div>\n  </div>\n\n  <div class="js-editing-show edit" style="padding-right: 52px;">\n    <form>\n      <input type="hidden" name="[subscriptions_attributes][][id]" value="<%= subscription.get(\'id\') %>">\n\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][firstname]" value="<%= shippingAddress.firstname %>" placeholder="First Name">\n        <label>First Name</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][lastname]" value="<%= shippingAddress.lastname %>" placeholder="Last Name">\n        <label>Last Name</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][address1]" value="<%= shippingAddress.address1 %>" placeholder="Address Line 1">\n        <label>Address Line 1</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][address2]" value="<%= shippingAddress.address2 %>" placeholder="Address Line 2">\n        <label>Address Line 2</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][city]" value="<%= shippingAddress.city %>" placeholder="City">\n        <label>City</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <select class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][state_id]" value="<%= shippingAddress.state_text %>"><%= statesOptions %></select>\n        <label>State</label>\n      </div>\n      <div class="form-input-container" style="margin-bottom: 10px;">\n        <input class="form-input" name="[subscriptions_attributes][][shipping_address_attributes][zipcode]" value="<%= shippingAddress.zipcode %>" placeholder="Zip Code">\n        <label>Zip Code</label>\n      </div>\n      <input type="hidden" name="[subscriptions_attributes][][shipping_address_attributes][country_id]" value="<%= countryId %>">\n\n      <button type="submit" class="btn--primary js-submit">Save</button>\n    </form>\n  </div>\n</div>\n    ')
        }
    }]),
    e
}())
  , BillingWarning = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
function() {
    function t(e) {
        _classCallCheck(this, t),
        e.html(this.template)
    }
    return _createClass(t, [{
        key: "template",
        get: function e() {
            return '\n  <header class="billing-warning-banner">\n    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>\n    <div>\n      <div class="billing-warning-banner-bold">Your refills have paused.</div>\n      <div>Please update your billing information to reactivate.</div>\n    </div>\n    <button type="button" class="js-update-btn primary-edit btn-link"><a href="/account#default-cc-form">Update</a></button>\n  </header>\n    '
        }
    }]),
    t
}())
  , PDPBulkBrushHeads = (_createClass = function() {
    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(e, t, i) {
        return t && n(e.prototype, t),
        i && n(e, i),
        e
    }
}(),
_get = function get(e, t, i) {
    for (var n = !0; n; ) {
        var o = e
          , s = t
          , a = i;
        n = !1,
        null === o && (o = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(o, s);
        if (r !== undefined) {
            if ("value"in r)
                return r.value;
            var l = r.get;
            return l === undefined ? undefined : l.call(a)
        }
        var c = Object.getPrototypeOf(o);
        if (null === c)
            return undefined;
        e = c,
        t = s,
        i = a,
        n = !0,
        r = c = undefined
    }
}
,
function() {
    function e() {
        _classCallCheck(this, e),
        _get(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
    }
    return _inherits(e, BulkBrushHeads),
    _createClass(e, [{
        key: "promoPitch",
        value: function t() {
            return 1 === quantity ? "" : "(" + this.singleMoney() + " per brush head)"
        }
    }]),
    e
}());
$(document).ready(function() {
    function e(e) {
        var t = $(this).val();
        $('[name="' + e.data.subscriptionQuantityName + '"]').val(t)
    }
    function i(e) {
        $("#final-cost").text(e)
    }
    function n(e) {
        $("#cost-per-brush-head").toggleClass("hide", !e).text(e)
    }
    function o() {
        return $(".js-color-picker.active").data("variant")
    }
    if ($(".bathroom-form-wrapper input#quantity").on("change input", function() {
        var e = parseInt($(this).val()) || 1;
        e = Math.max(e, 1);
        var t = new PDPBulkBrushHeads(e);
        i(t.displayAmount()),
        n(t.promoPitch())
    }),
    $("#add-to-cart-form").submit(function(e) {
        e.preventDefault();
        var t = parseInt($(this).find("input#quantity").val()) || 1;
        Segment.addToCart(o(), t).then(function() {
            e.target.submit()
        })
    }),
    $(".brush-quantity").on("change", {
        subscriptionQuantityName: "subscription_line_item[quantity]"
    }, e),
    $(".brush-head-colors li.js-color-picker").click(function() {
        var e = $(this).data("variant") || {};
        $("#subscription_line_item_subscribable_id").val(e.id),
        $(".pages-brush-heads").attr("data-variant-color", e.color)
    }),
    0 < $(".bathroom-form-wrapper").length) {
        var t = $('.bathroom-form-wrapper input[name="variant_id"]').val();
        $("li[data-variantid='" + t + "'].js-color-picker").click()
    }
}),
$(document).ready(function() {
    function i() {
        return $(".js-color-picker.active").data("variant")
    }
    $(".slider-dots").on("click", ".dot", function() {
        setSlide($(this).index())
    });
    var e = document.querySelector(".module-rotation .js-video");
    if (e && (e.classList.add("active"),
    e.play && e.play()),
    $("#subscription_line_item_quantity").on("change", function() {
        var e = parseInt($(this).val()) || 1;
        e = Math.max(e, 1);
        new BulkBrushHeads(e)
    }),
    $(".kit-form").submit(function(e) {
        e.preventDefault();
        var t = parseInt($(this).find("#quantity").val()) || 1;
        Segment.addToCart(i(), t).then(function() {
            e.target.submit()
        })
    }),
    0 < $(".kit-form.add-to-cart-form").length) {
        var t = $(".js-color-picker.active")
          , n = $(t).attr("data-variant")
          , o = $(t).attr("data-sku")
          , s = $(t).data("variant").id;
        $("#variant_id").attr("data-variant", n),
        $("#variant_id").attr("value", s),
        $("#out--of-stock-sku").attr("value", o);
        var a = JSON.parse(n)
          , r = a.has_backorder
          , l = $(".out--of-stock-backorder")
          , c = $(".js-cart-info")
          , u = unescape(a.cart_info)
          , d = $(t).attr("data-stock")
          , p = $(".add--to--cart")
          , h = $(".out--of-stock");
        "empty--stock" === d && r ? (p.show(),
        h.hide(),
        l.is("*") && (l.hide(),
        $("." + a.color + "-backorder-message").show()),
        c.is("*") && c.hide().html(u).show()) : "empty--stock" !== d || r ? (h.hide(),
        l.is("*") && l.hide(),
        c.is("*") && c.hide(),
        p.show()) : (p.hide(),
        l.is("*") && (l.hide(),
        $("." + a.color + "-backorder-message").show()),
        c.is("*") && c.hide().html(u).show(),
        h.show().attr("disabled", !0))
    }
});
var onChangeFunc = {};
window.Cart = {
    overlayScreen: function overlayScreen(e) {
        1 == e ? (Cart.catchCartError(),
        $("#cart-overlay").css("display", "flex").hide().fadeIn()) : (Cart.clearCatchCartError(),
        $("#cart-overlay").fadeOut())
    },
    init: function init() {
        $("body.orders-edit").on("change", ".line-item-quantity-input", Cart.onQuantityChange),
        $("body.orders-edit").on("click", ".line-item-delete", Cart.onClickDelete),
        $("body.orders-edit").on("click", ".toggle-coupon-input", function(e) {
            e.preventDefault()
        }),
        Cart.handleError()
    },
    setError: function setError() {
        localStorage.setItem("cartError", !0),
        window.location.reload()
    },
    handleError: function handleError() {
        localStorage.getItem("cartError") && (Spree.Flash.alert("Sorry, there was an error updating your cart."),
        localStorage.removeItem("cartError"))
    },
    catchCartError: function catchCartError() {
        Cart.catchCartError.timer = setTimeout(Cart.setError, 1e4)
    },
    clearCatchCartError: function clearCatchCartError() {
        clearTimeout(Cart.catchCartError.timer)
    },
    onQuantityChange: function onQuantityChange() {
        var e = $(this)
          , t = (e.closest(".line-item").find(".line-item-total"),
        parseInt(e.val(), 10))
          , i = e.closest(".line-item")
          , n = Cart.getLineItem(i);
        Cart.overlayScreen(!0),
        Cart.updateLineItem(i, n, {
            quantity: t
        }).then(Cart.updateCart).then(function() {
            Cart.overlayScreen(!1)
        })
    },
    onClickDelete: function onClickDelete() {
        Cart.overlayScreen(!0);
        var e = $(this).closest(".line-item")
          , t = Cart.getLineItem(e);
        Cart.updateLineItem(e, t, {
            quantity: 0
        }).then(Cart.updateCart).then(function() {
            e.remove()
        }).then(function() {
            Cart.overlayScreen(!1)
        })
    },
    getLineItemById: function getLineItemById(e) {
        return LineItem.find(e)
    },
    getLineItem: function getLineItem(e) {
        var t = e.data("lineItemId")
          , i = e.data("subscriptionLineItemId");
        return i ? SubscriptionLineItem.find(i) : LineItem.find(t)
    },
    destroyLineItem: function destroyLineItem(e, t) {
        return t.destroy().then(e.remove())
    },
    lineItemChildSubscriptionLineItems: function lineItemChildSubscriptionLineItems(e) {
        var i = [];
        return $('tr.line-item[data-line-item-id="' + e.id + '"][data-subscription-line-item-id]').each(function(e, t) {
            i.push(SubscriptionLineItem.find($(t).data("subscription-line-item-id")))
        }),
        i
    },
    updateLineItem: function updateLineItem(e, t, i) {
        var n = Cart.lineItemChildSubscriptionLineItems(t);
        t instanceof LineItem && 0 !== n.length && (i = {
            quantity: n.map(function(e) {
                return e.attributes.quantity
            }).reduce(function(e, t) {
                return e + t
            }, parseInt(i.quantity))
        });
        return t.save(i)
    },
    toggleSubscriptionSummaryMessage: function toggleSubscriptionSummaryMessage(e) {
        e.has_subscription_line_items ? $(".subscription-summaries").show() : $(".subscription-summaries").hide()
    },
    updateTotals: function updateTotals(e) {
        var t = e.order_adjustments
          , i = e.tax_adjustments
          , n = [];
        t.forEach(function(e) {
            n.push('\n      <div class="display-total" data-adjustment-label="<%= label %>">\n        <span class=\'category\'>' + e.label + '</span>\n        <span class="price">\n          ' + e.value + "\n        </span>\n      </div>\n      ")
        }),
        i.forEach(function(e) {
            n.push('\n      <div class="display-total" data-adjustment-label="<%= label %>">\n        <span class=\'category\'>' + e.label + '</span>\n        <span class="price">\n          ' + e.value + "\n        </span>\n      </div>\n      ")
        }),
        $(".order-adjustments").html(n.join("")),
        $(".order-total-number").text(e.display_total)
    },
    updateCartLines: function updateCartLines(e) {
        function t(e, t, i) {
            0 < e.cart_display_quantity ? ($(t + ".line-item-total .price").text(e.cart_display_amount),
            i.set("cart_display_amount", e.cart_display_amount),
            $(t + '.quantity-input input[name="quantity"]').val(e.cart_display_quantity),
            i.set("quantity", e.cart_display_quantity),
            $(t + ".line-item-price .price").text(e.unit_price),
            e.unit_price == e.price ? $(t + ".line-item-price .original-price").hide() : $(t + ".line-item-price .original-price").show(),
            $(t + ".line-item-price .original-price").text(" (" + e.price + ")")) : $(t).remove()
        }
        e.subscription_line_items.forEach(function(e) {
            t(e, '.line-item[data-subscription-line-item-id="' + e.id + '"] ', SubscriptionLineItem.find(e.id))
        }),
        e.line_items.forEach(function(e) {
            t(e, '.line-item[data-line-item-id="' + e.id + '"]:not([data-subscription-line-item-id]) ', LineItem.find(e.id))
        })
    },
    updateCart: function updateCart(e) {
        var t = e.order;
        Cart.updateCartLines(t),
        Cart.updateTotals(t),
        Cart.toggleSubscriptionSummaryMessage(t),
        $(".cart-empty-message").toggleClass("hide", 0 < t.line_items.length),
        $(".cart-contents, .checkout-link").toggleClass("hide", 0 === t.line_items.length)
    }
};
var GIFTCARD_MESSAGE_CHAR_LIMIT = 150
  , yesterday = new Date((new Date).setDate((new Date).getDate() - 1))
  , scrollToStep = function scrollToStep(e) {
    $("html, body").animate({
        scrollTop: $("#purchase-step-" + e).offset().top - 50
    }, 500)
}
  , updateCharCount = function updateCharCount(e) {
    var t = $(this).val().length
      , i = GIFTCARD_MESSAGE_CHAR_LIMIT < t;
    e.data.counter.text(t + "/" + GIFTCARD_MESSAGE_CHAR_LIMIT).toggleClass("invalid", i)
}
  , validateForm = function validateForm(e) {
    var t = e.delegateTarget;
    t && t.checkValidity && $(t).toggleClass("invalid", !t.checkValidity())
};
$("#spree_order_spree_line_item_any").on("focus", function() {
    $.each($(this).parent().children("input"), function() {
        $(this).attr("checked", !1)
    }),
    $("#spree_order_spree_line_item_variant_id_26").prop("checked", !1)
}),
$("#spree_order_spree_line_item_any").on("blur", function() {
    scrollToStep(2),
    $.each($(this).parent().children("input"), function() {
        $(this).attr("checked", !1)
    }),
    $("#spree_order_spree_line_item_variant_id_26").prop("checked", !0)
}),
$("#purchase-step-1").on("change", "input", function() {
    scrollToStep(2)
}),
$("#spree_order_goby_gift_card_delivery_date").datepicker({
    inline: !0,
    container: "#datepicker-container",
    autoShow: !0,
    autoPick: !0,
    format: "yyyy-mm-dd",
    filter: function filter(e) {
        return yesterday < e
    }
}).on("pick.datepicker", function() {
    scrollToStep(3)
}),
$("#spree_order_goby_gift_card_message").on("change keyup input", {
    counter: $(".giftcard-message-counter")
}, _.debounce(updateCharCount, 50)),
$(".vgc-container").on("change keyup input", "input", _.debounce(validateForm, 50)),
validateForm({
    delegateTarget: $(".vgc-container")[0]
}),
$(".pages-gift-cards .hero, .orders-add-gift-card .hero").stick_in_parent();
updateCharCount = function updateCharCount(e) {
    var t = $(this).val().length
      , i = DENTIST_INVITE_MESSAGE_CHAR_LIMIT < t;
    e.data.counter.text(t + "/" + DENTIST_INVITE_MESSAGE_CHAR_LIMIT).toggleClass("invalid", i)
}
,
validateForm = function validateForm(e) {
    var t = e.delegateTarget;
    t && t.checkValidity && $(t).toggleClass("invalid", !t.checkValidity())
}
;
var DENTIST_INVITE_MESSAGE_CHAR_LIMIT = 150;
$("#goby_dentist_invite_message").on("change keyup input", {
    counter: $(".dentist-invite-message-counter")
}, _.debounce(updateCharCount, 50)),
$(".vgc-container").on("change keyup input", "input", _.debounce(validateForm, 50)),
validateForm({
    delegateTarget: $(".vgc-container")[0]
}),
$("#send-sms-button").on("click", function() {
    $("#share-container").hide(),
    $("#send-sms-container").show()
}),
$("#add-recipient-btn").on("click", function() {
    var e = $(".recipient-row:first").clone();
    e.find("input").val(""),
    e.insertAfter(".recipient-row:last"),
    $("input[name='recipients[][phone]']:last").inputmask()
}),
$("#send-sms-container").on("click", ".delete-recipient-btn", function() {
    1 < $(".recipient-row").length ? $(this).parents(".recipient-row").remove() : ($("#send-sms-container").hide(),
    $("#share-container").show())
}),
$("input[name='recipients[][phone]']").inputmask();
var SLIDE = 0;
window.Home = {
    dom: {
        slideshow: document.querySelector(".js-slideshow"),
        slideshow2: document.querySelector(".js-slideshow2"),
        arrows: document.querySelectorAll(".js-arrow"),
        arrows2: document.querySelectorAll(".js-arrow2"),
        testimonials: document.querySelectorAll(".js-testimonial"),
        testimonials2: document.querySelectorAll(".js-testimonial2"),
        fancyload: !1
    },
    init: function init() {
        this.dom.slideshow && this.handleTestimonials(this.dom.slideshow, this.dom.arrows, this.dom.testimonials)
    },
    handleTestimonials: function handleTestimonials(e, t, i, n) {
        function o(e) {
            c.select(e)
        }
        function s(e) {
            SLIDE = e
        }
        function a(e) {
            [].forEach.call(i, function(e) {
                e.classList.remove("active")
            }),
            i[e].classList.add("active")
        }
        var r = e.querySelectorAll("img").length
          , l = n || 0
          , c = new Flickity(e,{
            contain: !0,
            wrapAround: !0,
            prevNextButtons: !1,
            pageDots: !1,
            lazyLoad: !0
        });
        c.select(l),
        setTimeout(function() {
            c.resize()
        }, 400),
        c.on("cellSelect", function() {
            var e = c.selectedIndex;
            s(e),
            a(e)
        }),
        [].forEach.call(t, function(e) {
            var t = e.classList.contains("left") ? "left" : "right";
            e.addEventListener("click", function(e) {
                switch (e.preventDefault(),
                t) {
                case "left":
                    0 === SLIDE ? c.select(r - 1) : c.select(SLIDE - 1);
                    break;
                case "right":
                    SLIDE === r ? c.select(0) : c.select(SLIDE + 1)
                }
            })
        }),
        $(".image_group").each(function() {
            var e = $(this).find("img").data("slick-position");
            $(this).fancybox({
                type: "inline",
                index: this.id,
                beforeLoad: function t() {
                    !1 === window.Home.dom.fancyload ? (window.Home.handleTestimonials(window.Home.dom.slideshow2, window.Home.dom.arrows2, window.Home.dom.testimonials2, e),
                    window.Home.dom.fancyload = !0) : o(e)
                }
            })
        })
    }
},
$(function() {
    $(".js-slideshow img").on("click", function() {
        $.fancybox.open({
            src: "#testimonial",
            type: "inline"
        })
    })
}),
$(function() {
    $(".site--module-press .press-link").on("click", function() {
        var e = $(this).data("target");
        $(".site--module-press .press-link").removeClass("active"),
        $(this).addClass("active"),
        $(".site--module-press .content p").removeClass("active"),
        $(".site--module-press .content p." + e).addClass("active")
    })
}),
$(document).ready(function() {
    $(".testimonial-cards, .press-links-mobile").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        speed: 300,
        autoplay: !0,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1
    }),
    $(window).width() < 767 && $(".banner-unlimited-compliments").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        speed: 300,
        autoplay: !0,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1
    })
}),
$(document).ready(function() {
    $("#referal_link").on("focus", function() {
        $(this).select()
    })
}),
$(document).ready(function() {
    $(".shipping-method").on("change", "input[type=radio]", function(e) {
        var t = $(e.delegateTarget)
          , i = parseFloat(t.data("shipping-tax"))
          , n = parseFloat(t.data("shipping-amount"));
        a(i, n),
        s(n),
        o(i)
    });
    var o = function o(e) {
        var t = $("#order-tax-total")
          , i = parseFloat(t.data("tax-without-shipping-total"));
        t.text(r(i + e))
    }
      , s = function s(e) {
        $("#order-shipping-cost").text(r(e))
    }
      , a = function a(e, t) {
        var i = $("#order-total-amount")
          , n = parseFloat(i.data("order-total-without-taxed-shipping"));
        i.text(r(n + e + t))
    }
      , r = function r(e) {
        return 0 < e ? "$" + e.toFixed(2) : "free"
    }
}),
$(document).ready(function() {
    function o() {
        $("#payment_method_nonce").val(""),
        $("#cc_type").val(""),
        $("input[id^='name_on_card']").val("")
    }
    $("#braintree_payment_method_selector .braintree_payment_method_radio").change(function(e) {
        var t = $(e.target).val()
          , i = $(".braintree-paypal-input")
          , n = $(".braintree-cc-input");
        "credit_card" == t ? (i.hide(),
        n.show()) : ($("#braintree-paypal-saved-correctly").hide(),
        $("#paypal-button").show(),
        n.hide(),
        i.show()),
        o()
    })
}),
window.DeepDive = {
    dom: {
        brushHead: document.querySelector(".js-brush-head"),
        brushBody: document.querySelector(".js-brush-body"),
        brushCharger: document.querySelector(".js-brush-charger"),
        brushDetail: document.querySelector(".js-brush-detail"),
        text: document.querySelectorAll(".brush--container-text-single")
    },
    init: function init() {
        this.dom.brushHead && this.featuresMagic()
    },
    featuresMagic: function featuresMagic() {
        var A = undefined
          , I = this.dom.text
          , D = this.dom.brushDetail
          , R = this.dom.brushHead.querySelector(".brush--container-image")
          , L = this.dom.brushBody
          , F = L.querySelector(".brush--container-image")
          , B = this.dom.brushCharger;
        enquire.register("screen and (min-width:900px)", {
            match: function q() {
                A = new ScrollMagic.Controller;
                var e = TweenMax.to(D, 1, {
                    scale: 1.2,
                    opacity: 1
                })
                  , t = TweenMax.to(R, 1, {
                    y: "20%"
                })
                  , i = document.getElementById("DeepDiveVideo");
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: -1300
                }).setClassToggle(I[0], "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: -300
                }).setClassToggle(I[0], "non-visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: -300
                }).setClassToggle(I[1], "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: -500,
                    duration: 800
                }).setTween(t).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: -300,
                    duration: 10
                }).setTween(e).addTo(A);
                var n = i.querySelector(".js-video");
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 200
                }).on("enter", function() {
                    n.classList.add("active"),
                    n.play()
                }).on("leave", function() {
                    n.classList.remove("active"),
                    n.pause()
                }).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 800
                }).on("enter", function() {
                    n.classList.remove("active"),
                    n.pause()
                }).on("leave", function() {
                    n.classList.add("active"),
                    n.play()
                }).addTo(A);
                var o = L.querySelector(".js-rotate-one")
                  , s = L.querySelector(".js-rotate-two")
                  , a = L.querySelector(".js-rotate-three")
                  , r = (L.querySelector(".js-light-one"),
                L.querySelector(".brush--body-pulse"))
                  , l = L.querySelector(".brush--body-pulse-follow")
                  , c = TweenMax.to(R, 1, {
                    opacity: 0,
                    y: "40%"
                })
                  , u = TweenMax.to(F, 1, {
                    opacity: 1,
                    y: "0%"
                })
                  , d = TweenMax.to(F, 1, {
                    y: "10%"
                })
                  , p = TweenMax.to(F, 1, {
                    opacity: 0
                })
                  , h = TweenMax.to(o, 1, {
                    opacity: 1
                })
                  , f = TweenMax.to(o, 1, {
                    opacity: 0
                })
                  , v = TweenMax.to(s, 1, {
                    opacity: 1
                })
                  , m = TweenMax.to(s, 1, {
                    opacity: 0
                })
                  , g = TweenMax.to(a, 1, {
                    opacity: 1
                })
                  , y = TweenMax.to(a, 1, {
                    y: "36%"
                });
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 350,
                    duration: 300
                }).setTween(c).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 250,
                    duration: 500
                }).setTween(u).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 800
                }).setClassToggle(I[2], "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1260
                }).setClassToggle(I[2], "non-visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1260
                }).setClassToggle(I[3], "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 700
                }).on("enter", function() {
                    r.classList.add("active"),
                    l.classList.add("active")
                }).on("leave", function() {
                    r.classList.remove("active"),
                    l.classList.remove("active")
                }).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1050,
                    duration: 300
                }).setTween(d).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1250,
                    duration: 10
                }).setTween(p).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1250,
                    duration: 10
                }).setTween(h).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1260,
                    duration: 10
                }).setTween(f).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1260,
                    duration: 10
                }).setTween(v).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1270,
                    duration: 10
                }).setTween(m).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1270,
                    duration: 10
                }).setTween(g).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: i,
                    offset: 1270,
                    duration: 600
                }).setTween(y).addTo(A);
                var b = B.querySelector(".brush--container-image.brush")
                  , k = B.querySelector(".brush--container-image.charger")
                  , w = B.querySelector(".brush--container-image.charger-base")
                  , _ = B.querySelector(".brush--container-image.charger-back")
                  , S = document.querySelector(".js-divider-two")
                  , x = document.querySelector(".js-text-5")
                  , C = document.querySelector(".js-text-6")
                  , $ = TweenMax.to(b, 1, {
                    y: "0"
                })
                  , T = TweenMax.to(k, 1, {
                    x: "-123%",
                    y: "-12%"
                })
                  , P = TweenMax.to(w, 1, {
                    x: "0",
                    y: "0"
                })
                  , M = TweenMax.to(_, 1, {
                    x: "0",
                    y: "0"
                });
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 600
                }).setClassToggle(x, "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 900
                }).setClassToggle(x, "non-visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 900
                }).setClassToggle(C, "visible").addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 450,
                    duration: 700
                }).setTween($).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 450,
                    duration: 700
                }).setTween(T).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 450,
                    duration: 700
                }).setTween(P).addTo(A),
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 450,
                    duration: 700
                }).setTween(M).addTo(A);
                var E = B.querySelector(".js-led-one")
                  , O = B.querySelector(".js-led-two")
                  , j = B.querySelector(".js-led-three");
                new ScrollMagic.Scene({
                    triggerElement: S,
                    offset: 1100
                }).on("enter", function() {
                    j.classList.add("on"),
                    O.classList.add("on"),
                    E.classList.add("on")
                }).on("leave", function() {
                    j.classList.remove("on"),
                    O.classList.remove("on"),
                    E.classList.remove("on")
                }).addTo(A)
            },
            unmatch: function e() {
                A.destroy(1),
                A = null
            }
        })
    }
},
$(document).ready(function() {
    $(".review-text-expand-link").click(function(e) {
        if (e.preventDefault(),
        "short" == $(this).data("status")) {
            $(this).data("status", "full"),
            $(this).text("See Less");
            var t = (i = $(this).parents("p").find(".review-text-container")).data("full-review");
            i.text(t)
        } else {
            $(this).data("status", "short"),
            $(this).text("Continue Reading");
            var i, n = (i = $(this).parents("p").find(".review-text-container")).data("short-review");
            i.text(n)
        }
    }),
    window.analytics && $(".review_submit > input").click(function() {
        analytics.track("Review Submit")
    })
}),
$(document).ready(function() {
    $.each($(".item-wrapper.multiple"), initShopSelectors)
}),
$(document).ready(function() {
    $(".kit-cart--panel-step-color-picker-wrapper>ul").on("click", "li", function(e) {
        $(".pdp-hero").removeClass("active").eq($(e.currentTarget).index()).addClass("active")
    })
}),
$(document).ready(function() {
    $("section#hero .slider-images").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        fade: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: "section#hero .slider-thumbnails",
        responsive: [{
            breakpoint: 1e3,
            settings: {
                fade: !1
            }
        }]
    }),
    $("section#hero .slider-thumbnails").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: !1,
        asNavFor: "section#hero .slider-images",
        focusOnSelect: !0
    }),
    document.documentElement.clientWidth < 1e3 && $("section#reviews .slider").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        autoplay: !0,
        autoplaySpeed: 5e3,
        slidesToShow: 1,
        slidesToScroll: 1
    }),
    $(".js-color-picker").click(function() {
        var e = $(this)
          , t = e.data("variant").color
          , i = e.data("variant").color_object
          , n = e.data("variant").custom_name
          , o = i ? i.presentation : t.charAt(0).toUpperCase() + t.substr(1);
        if ($(".slider").removeClass("active"),
        $(".slider." + t).addClass("active"),
        $(".feature-media").removeClass("active"),
        $(".feature-media." + t).addClass("active"),
        $(".color-name").text(o),
        $(".selected-variant-name").text(n),
        e.data("brush-head")) {
            var s = e.data("brush-head").id;
            $("#subscription_line_item_subscribable_id").attr("value", s)
        }
        document.title = n ? n + " | GOBY" : "Goby " + o + " Electric Toothbrush | GOBY",
        $(".slider-thumbnails img:nth-child(" + ($(".slider-images").slick("slickCurrentSlide") + 1) + ")").trigger("click")
    }),
    $("#subscription_line_item_interval_length").change(function() {
        $("#message-deliver-interval").text($(this).find(":selected").text().toLowerCase())
    }),
    $(window).on("resize scroll", function() {
        $("#features-sticky .text-content").each(function() {
            var e = $(this).data("section");
            $(this).isCenterInViewPort() && ($("#features-sticky .media-wrapper  > *").removeClass("visible"),
            $(".sticky--" + e).addClass("visible"))
        })
    }),
    $("#hero .reviews").click(function() {
        $("html, body").animate({
            scrollTop: $("section#reviews").offset().top - 100
        }, "slow")
    })
}),
$.fn.isCenterInViewPort = function() {
    var e = $(this).offset().top
      , t = e + $(this).outerHeight()
      , i = $(window).scrollTop() + $(window).height() / 4;
    return i < t && e < i
}
,
$(document).ready(function() {
    function e(e) {
        var t = $(this).val();
        $('[name="' + e.data.subscriptionQuantityName + '"]').val(t)
    }
    function t(e) {
        $(".product-price").text("$" + e)
    }
    $(".product-form-container .product-quantity").on("change input", function() {
        var e = parseInt($(this).val()) || 1;
        t(6 * (e = Math.max(e, 1)))
    }),
    $(".product-form-container .product-quantity").on("change", {
        subscriptionQuantityName: "subscription_line_item[quantity]"
    }, e)
}),
$(document).ready(function() {
    $("#gobygram .slider").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: !0,
        responsive: [{
            breakpoint: 1e3,
            settings: {
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                infinite: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: !0,
                dots: !1
            }
        }]
    })
}),
$(document).ready(function() {
    $("#more-btn-ada").click(function() {
        var e = $("#ada-more-content");
        e.toggleClass("hidden");
        var t = $("[data-ada-open-sign]")
          , i = $("[data-ada-open-sign-text]");
        e.hasClass("hidden") ? (t.text(t.data("ada-open-sign")),
        i.text(i.data("ada-open-sign-text"))) : (t.text(t.data("ada-close-sign")),
        i.text(i.data("ada-close-sign-text")))
    })
}),
$(document).ready(function() {
    $(".add-to-cart-form").submit(function() {
        window.pintrk && pintrk("track", "addtocart", {})
    })
});
var Site = {
    init: function() {
        Header.init(),
        MiniCart.init(),
        Bubbles.init(),
        TimingSlideshow.init(),
        Fish.init(),
        VerticalSlideshow.init(),
        new AccountDetails,
        new AccountSubscription,
        new AccountRefills,
        Cart.init(),
        Home.init(),
        DeepDive.init(),
        QuantityInput.init()
    },
    current_order: new Order($("body").data("order"))
}
  , user = $("body").data("user");
user && (Site.current_user = new User(user),
Segment.identify(Site.current_user)),
Site.init(),
$(function() {
    $("#header-super-brush-kits > .selector").find(">:first-child").addClass("active"),
    $("#header-super-brush-kits > .item-wrapper").find(">:first-child").addClass("active"),
    $("#header-super-brush-kits-mobile > .selector").find(">:first-child").addClass("active"),
    $("#header-super-brush-kits-mobile > .item-wrapper").find(">:first-child").addClass("active"),
    $("img").lazyload(),
    $("body").delegate("#actionable_date", "focusin", function() {
        $(this).datepicker({
            zIndex: 1e5
        }).on("pick.datepicker", function() {
            $(this).datepicker("hide")
        }).on("change", function() {
            var e = $(this).val();
            $(".js-editable.editing").find("#actionable_date").val(e)
        })
    }),
    $("#goby_dentist_invite_recipient_name").val(""),
    $("#goby_dentist_invite_recipient_email").val(""),
    $("#goby_dentist_invite_request_practice_review").prop("checked") && $("#review_link").show(),
    $("#goby_dentist_invite_request_practice_review").click(function() {
        $("#review_link").toggle()
    }),
    $("#goby_dentist_invite_invite_target_email").on("change", function() {
        $(this).is(":checked") && ($("label[for='goby_dentist_invite_invite_target_phone']").removeClass("checked"),
        $("label[for='goby_dentist_invite_invite_target_email']").addClass("checked"),
        $("#recipient_phone_panel").hide(),
        $("#recipient_email_panel").show(),
        $("#icons-text-selected").hide(),
        $("#icons-text").show(),
        $("#icons-email-selected").show(),
        $("#icons-email").hide(),
        $("#txt_request_review").html("send email requesting<br /> Practice Review From Patient"),
        $("#dentist_note").show(),
        $("input[name='goby_dentist_invite[recipient_phone]']").prop("required", !1),
        $("input[name='goby_dentist_invite[recipient_email]']").prop("required", !0))
    }),
    $("#goby_dentist_invite_invite_target_phone").on("change", function() {
        $(this).is(":checked") && ($("label[for='goby_dentist_invite_invite_target_phone']").addClass("checked"),
        $("label[for='goby_dentist_invite_invite_target_email']").removeClass("checked"),
        $("#recipient_phone_panel").show(),
        $("#recipient_email_panel").hide(),
        $("#icons-text-selected").show(),
        $("#icons-text").hide(),
        $("#icons-email-selected").hide(),
        $("#icons-email").show(),
        $("#txt_request_review").html("send text requesting<br /> Practice Review From Patient"),
        $("#dentist_note").hide(),
        $("input[name='goby_dentist_invite[recipient_phone]']").prop("required", !0),
        $("input[name='goby_dentist_invite[recipient_email]']").prop("required", !1)),
        $("input[name='goby_dentist_invite[recipient_phone]']").inputmask()
    }),
    new ClipboardJS(".clipboard-btn").on("success", function(e) {
        e.trigger.setAttribute("data-original-value", e.trigger.value),
        e.trigger.value = e.trigger.dataset.clipboardSuccessText,
        setTimeout(function() {
            e.trigger.value = e.trigger.dataset.originalValue
        }, 2e3),
        e.clearSelection()
    })
});
