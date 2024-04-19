function promisify(e, t, n) {
    var r = $.Deferred();
    return e.apply(n || this, (t || []).concat(function(e, t) {
        e && r.reject(e),
        r.resolve(t)
    })),
    r.promise()
}
function errorShippingContactSelection(e, t, n) {
    var r = new ApplePayError("shippingContactInvalid","postalCode",n);
    e.completeShippingContactSelection({
        newTotal: {
            label: t.total.label,
            amount: t.total.amount
        },
        errors: [r]
    }),
    console.error("Error:", n)
}
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(w, e) {
    function s(e) {
        var t = !!e && "length"in e && e.length
          , n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function t(e, n, r) {
        if (he.isFunction(n))
            return he.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            });
        if (n.nodeType)
            return he.grep(e, function(e) {
                return e === n !== r
            });
        if ("string" == typeof n) {
            if (Se.test(n))
                return he.filter(n, e, r);
            n = he.filter(n, e)
        }
        return he.grep(e, function(e) {
            return -1 < he.inArray(e, n) !== r
        })
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function l(e) {
        var n = {};
        return he.each(e.match(Pe) || [], function(e, t) {
            n[t] = !0
        }),
        n
    }
    function i() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", o),
        w.removeEventListener("load", o)) : (ie.detachEvent("onreadystatechange", o),
        w.detachEvent("onload", o))
    }
    function o() {
        (ie.addEventListener || "load" === w.event.type || "complete" === ie.readyState) && (i(),
        he.ready())
    }
    function c(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(Fe, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : De.test(n) ? he.parseJSON(n) : n)
                } catch (i) {}
                he.data(e, t, n)
            } else
                n = undefined
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !he.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function r(e, t, n, r) {
        if (Le(e)) {
            var i, o, a = he.expando, s = e.nodeType, c = s ? he.cache : e, u = s ? e[a] : e[a] && a;
            if (u && c[u] && (r || c[u].data) || n !== undefined || "string" != typeof t)
                return u || (u = s ? e[a] = re.pop() || he.guid++ : a),
                c[u] || (c[u] = s ? {} : {
                    toJSON: he.noop
                }),
                "object" != typeof t && "function" != typeof t || (r ? c[u] = he.extend(c[u], t) : c[u].data = he.extend(c[u].data, t)),
                o = c[u],
                r || (o.data || (o.data = {}),
                o = o.data),
                n !== undefined && (o[he.camelCase(t)] = n),
                "string" == typeof t ? null == (i = o[t]) && (i = o[he.camelCase(t)]) : i = o,
                i
        }
    }
    function a(e, t, n) {
        if (Le(e)) {
            var r, i, o = e.nodeType, a = o ? he.cache : e, s = o ? e[he.expando] : he.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = he.isArray(t) ? t.concat(he.map(t, he.camelCase)) : t in r ? [t] : (t = he.camelCase(t))in r ? [t] : t.split(" ")).length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !u(r) : !he.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                u(a[s]))) && (o ? he.cleanData([e], !0) : pe.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }
    function d(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return he.css(e, t, "")
        }
        , c = s(), u = n && n[3] || (he.cssNumber[t] ? "" : "px"), l = (he.cssNumber[t] || "px" !== u && +c) && Ue.exec(he.css(e, t));
        if (l && l[3] !== u)
            for (u = u || l[3],
            n = n || [],
            l = +c || 1; l /= o = o || ".5",
            he.style(e, t, l + u),
            o !== (o = s() / c) && 1 !== o && --a; )
                ;
        return n && (l = +l || +c || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = l,
        r.end = i)),
        i
    }
    function y(e) {
        var t = Qe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function g(e, t) {
        var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || he.nodeName(r, t) ? o.push(r) : he.merge(o, g(r, t));
        return t === undefined || t && he.nodeName(e, t) ? he.merge([e], o) : o
    }
    function v(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            he._data(n, "globalEval", !t || he._data(t[r], "globalEval"))
    }
    function b(e) {
        qe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function m(e, t, n, r, i) {
        for (var o, a, s, c, u, l, d, p = e.length, f = y(t), h = [], m = 0; m < p; m++)
            if ((a = e[m]) || 0 === a)
                if ("object" === he.type(a))
                    he.merge(h, a.nodeType ? [a] : a);
                else if (Ge.test(a)) {
                    for (c = c || f.appendChild(t.createElement("div")),
                    u = (We.exec(a) || ["", ""])[1].toLowerCase(),
                    d = $e[u] || $e._default,
                    c.innerHTML = d[1] + he.htmlPrefilter(a) + d[2],
                    o = d[0]; o--; )
                        c = c.lastChild;
                    if (!pe.leadingWhitespace && Ke.test(a) && h.push(t.createTextNode(Ke.exec(a)[0])),
                    !pe.tbody)
                        for (o = (a = "table" !== u || Xe.test(a) ? "<table>" !== d[1] || Xe.test(a) ? 0 : c : c.firstChild) && a.childNodes.length; o--; )
                            he.nodeName(l = a.childNodes[o], "tbody") && !l.childNodes.length && a.removeChild(l);
                    for (he.merge(h, c.childNodes),
                    c.textContent = ""; c.firstChild; )
                        c.removeChild(c.firstChild);
                    c = f.lastChild
                } else
                    h.push(t.createTextNode(a));
        for (c && f.removeChild(c),
        pe.appendChecked || he.grep(g(h, "input"), b),
        m = 0; a = h[m++]; )
            if (r && -1 < he.inArray(a, r))
                i && i.push(a);
            else if (s = he.contains(a.ownerDocument, a),
            c = g(f.appendChild(a), "script"),
            s && v(c),
            n)
                for (o = 0; a = c[o++]; )
                    Ye.test(a.type || "") && n.push(a);
        return c = null,
        f
    }
    function p() {
        return !0
    }
    function f() {
        return !1
    }
    function h() {
        try {
            return ie.activeElement
        } catch (e) {}
    }
    function E(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = undefined),
            t)
                E(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = undefined) : null == i && ("string" == typeof n ? (i = r,
        r = undefined) : (i = r,
        r = n,
        n = undefined)),
        !1 === i)
            i = f;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return he().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = he.guid++)),
        e.each(function() {
            he.event.add(this, t, i, r, n)
        })
    }
    function T(e, t) {
        return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function S(e) {
        return e.type = (null !== he.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function A(e) {
        var t = ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function I(e, t) {
        if (1 === t.nodeType && he.hasData(e)) {
            var n, r, i, o = he._data(e), a = he._data(t, o), s = o.events;
            if (s)
                for (n in delete a.handle,
                a.events = {},
                s)
                    for (r = 0,
                    i = s[n].length; r < i; r++)
                        he.event.add(t, n, s[n][r]);
            a.data && (a.data = he.extend({}, a.data))
        }
    }
    function O(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !pe.noCloneEvent && t[he.expando]) {
                for (r in (i = he._data(t)).events)
                    he.removeEvent(t, r, i.handle);
                t.removeAttribute(he.expando)
            }
            "script" === n && t.text !== e.text ? (S(t).text = e.text,
            A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            pe.html5Clone && e.innerHTML && !he.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && qe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function N(n, r, i, o) {
        r = ae.apply([], r);
        var e, t, a, s, c, u, l = 0, d = n.length, p = d - 1, f = r[0], h = he.isFunction(f);
        if (h || 1 < d && "string" == typeof f && !pe.checkClone && st.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = f.call(this, e, t.html())),
                N(t, r, i, o)
            });
        if (d && (e = (u = m(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === u.childNodes.length && (u = e),
        e || o)) {
            for (a = (s = he.map(g(u, "script"), S)).length; l < d; l++)
                t = u,
                l !== p && (t = he.clone(t, !0, !0),
                a && he.merge(s, g(t, "script"))),
                i.call(n[l], t, l);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                he.map(s, A),
                l = 0; l < a; l++)
                    t = s[l],
                    Ye.test(t.type || "") && !he._data(t, "globalEval") && he.contains(c, t) && (t.src ? he._evalUrl && he._evalUrl(t.src) : he.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ut, "")));
            u = e = null
        }
        return n
    }
    function C(e, t, n) {
        for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || he.cleanData(g(r)),
            r.parentNode && (n && he.contains(r.ownerDocument, r) && v(g(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function x(e, t) {
        var n = he(t.createElement(e)).appendTo(t.body)
          , r = he.css(n[0], "display");
        return n.detach(),
        r
    }
    function P(e) {
        var t = ie
          , n = pt[e];
        return n || ("none" !== (n = x(e, t)) && n || ((t = ((dt = (dt || he("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || dt[0].contentDocument).document).write(),
        t.close(),
        n = x(e, t),
        dt.detach()),
        pt[e] = n),
        n
    }
    function R(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function L(e) {
        if (e in Ot)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = It.length; n--; )
            if ((e = It[n] + t)in Ot)
                return e
    }
    function D(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (o[a] = he._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Ve(r) && (o[a] = he._data(r, "olddisplay", P(r.nodeName)))) : (i = Ve(r),
            (n && "none" !== n || !i) && he._data(r, "olddisplay", i ? n : he.css(r, "display"))));
        for (a = 0; a < s; a++)
            (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function F(e, t, n) {
        var r = wt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += he.css(e, n + He[o], !0, i)),
            r ? ("content" === n && (a -= he.css(e, "padding" + He[o], !0, i)),
            "margin" !== n && (a -= he.css(e, "border" + He[o] + "Width", !0, i))) : (a += he.css(e, "padding" + He[o], !0, i),
            "padding" !== n && (a += he.css(e, "border" + He[o] + "Width", !0, i)));
        return a
    }
    function j(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = gt(e)
          , a = pe.boxSizing && "border-box" === he.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = vt(e, t, o)) < 0 || null == i) && (i = e.style[t]),
            ht.test(i))
                return i;
            r = a && (pe.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function M(e, t, n, r, i) {
        return new M.prototype.init(e,t,n,r,i)
    }
    function B() {
        return w.setTimeout(function() {
            Nt = undefined
        }),
        Nt = he.now()
    }
    function U(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = He[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function H(e, t, n) {
        for (var r, i = (q.tweeners[t] || []).concat(q.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function V(t, e, n) {
        var r, i, o, a, s, c, u, l = this, d = {}, p = t.style, f = t.nodeType && Ve(t), h = he._data(t, "fxshow");
        for (r in n.queue || (null == (s = he._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
        c = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || c()
        }
        ),
        s.unqueued++,
        l.always(function() {
            l.always(function() {
                s.unqueued--,
                he.queue(t, "fx").length || s.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === ("none" === (u = he.css(t, "display")) ? he._data(t, "olddisplay") || P(t.nodeName) : u) && "none" === he.css(t, "float") && (pe.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        pe.shrinkWrapBlocks() || l.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        })),
        e)
            if (i = e[r],
            Ft.exec(i)) {
                if (delete e[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined)
                        continue;
                    f = !0
                }
                d[r] = h && h[r] || he.style(t, r)
            } else
                u = undefined;
        if (he.isEmptyObject(d))
            "inline" === ("none" === u ? P(t.nodeName) : u) && (p.display = u);
        else
            for (r in h ? "hidden"in h && (f = h.hidden) : h = he._data(t, "fxshow", {}),
            o && (h.hidden = !f),
            f ? he(t).show() : l.done(function() {
                he(t).hide()
            }),
            l.done(function() {
                var e;
                for (e in he._removeData(t, "fxshow"),
                d)
                    he.style(t, e, d[e])
            }),
            d)
                a = H(f ? h[r] : 0, r, l),
                r in h || (h[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
    }
    function z(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (i = t[r = he.camelCase(n)],
            o = e[n],
            he.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = he.cssHooks[r]) && "expand"in a)
                for (n in o = a.expand(o),
                delete e[r],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = i);
            else
                t[r] = i
    }
    function q(o, e, t) {
        var n, a, r = 0, i = q.prefilters.length, s = he.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (a)
                return !1;
            for (var e = Nt || B(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++)
                u.tweens[r].run(n);
            return s.notifyWith(o, [u, n, t]),
            n < 1 && i ? t : (s.resolveWith(o, [u]),
            !1)
        }, u = s.promise({
            elem: o,
            props: he.extend({}, e),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Nt || B(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = he.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? (s.notifyWith(o, [u, 1, 0]),
                s.resolveWith(o, [u, e])) : s.rejectWith(o, [u, e]),
                this
            }
        }), l = u.props;
        for (z(l, u.opts.specialEasing); r < i; r++)
            if (n = q.prefilters[r].call(u, o, l, u.opts))
                return he.isFunction(n.stop) && (he._queueHooks(u.elem, u.opts.queue).stop = he.proxy(n.stop, n)),
                n;
        return he.map(l, H, u),
        he.isFunction(u.opts.start) && u.opts.start.call(o, u),
        he.fx.timer(he.extend(c, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function W(e) {
        return he.attr(e, "class") || ""
    }
    function Y(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(Pe) || [];
            if (he.isFunction(t))
                for (; n = i[r++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function K(t, i, o, a) {
        function s(e) {
            var r;
            return c[e] = !0,
            he.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || c[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                s(n),
                !1)
            }),
            r
        }
        var c = {}
          , u = t === sn;
        return s(i.dataTypes[0]) || !c["*"] && s("*")
    }
    function Q(e, t) {
        var n, r, i = he.ajaxSettings.flatOptions || {};
        for (r in t)
            t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && he.extend(!0, e, n),
        e
    }
    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    c.unshift(a);
                    break
                }
        if (c[0]in n)
            o = c[0];
        else {
            for (a in n) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o)
            return o !== c[0] && c.unshift(o),
            n[o]
    }
    function G(e, t, n, r) {
        var i, o, a, s, c, u = {}, l = e.dataTypes.slice();
        if (l[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        for (o = l.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            c = o,
            o = l.shift())
                if ("*" === o)
                    o = c;
                else if ("*" !== c && c !== o) {
                    if (!(a = u[c + " " + o] || u["* " + o]))
                        for (i in u)
                            if ((s = i.split(" "))[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0],
                                l.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + c + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function X(e) {
        return e.style && e.style.display || he.css(e, "display")
    }
    function J(e) {
        if (!he.contains(e.ownerDocument || ie, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === X(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function Z(n, e, r, i) {
        var t;
        if (he.isArray(e))
            he.each(e, function(e, t) {
                r || pn.test(n) ? i(n, t) : Z(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== he.type(e))
            i(n, e);
        else
            for (t in e)
                Z(n + "[" + t + "]", e[t], r, i)
    }
    function ee() {
        try {
            return new w.XMLHttpRequest
        } catch (e) {}
    }
    function te() {
        try {
            return new w.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function ne(e) {
        return he.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var re = []
      , ie = w.document
      , oe = re.slice
      , ae = re.concat
      , se = re.push
      , ce = re.indexOf
      , ue = {}
      , le = ue.toString
      , de = ue.hasOwnProperty
      , pe = {}
      , fe = "1.12.4"
      , he = function(e, t) {
        return new he.fn.init(e,t)
    }
      , me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ye = /^-ms-/
      , ge = /-([\da-z])/gi
      , ve = function(e, t) {
        return t.toUpperCase()
    };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(n) {
            return this.pushStack(he.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: re.sort,
        splice: re.splice
    },
    he.extend = he.fn.extend = function(e) {
        var t, n, r, i, o, a, s = e || {}, c = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[c] || {},
        c++),
        "object" == typeof s || he.isFunction(s) || (s = {}),
        c === u && (s = this,
        c--); c < u; c++)
            if (null != (o = arguments[c]))
                for (i in o)
                    t = s[i],
                    s !== (r = o[i]) && (l && r && (he.isPlainObject(r) || (n = he.isArray(r))) ? (n ? (n = !1,
                    a = t && he.isArray(t) ? t : []) : a = t && he.isPlainObject(t) ? t : {},
                    s[i] = he.extend(l, a, r)) : r !== undefined && (s[i] = r));
        return s
    }
    ,
    he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === he.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === he.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !he.isArray(e) && 0 <= t - parseFloat(t) + 1
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== he.type(e) || e.nodeType || he.isWindow(e))
                return !1;
            try {
                if (e.constructor && !de.call(e, "constructor") && !de.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!pe.ownFirst)
                for (t in e)
                    return de.call(e, t);
            for (t in e)
                ;
            return t === undefined || de.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && he.trim(e) && (w.execScript || function(e) {
                w.eval.call(w, e)
            }
            )(e)
        },
        camelCase: function(e) {
            return e.replace(ye, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (s(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ce)
                    return ce.call(t, e, n);
                for (r = t.length,
                n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; )
                e[i++] = t[r++];
            if (n != n)
                for (; t[r] !== undefined; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (s(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return ae.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            he.isFunction(e) ? (n = oe.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(oe.call(arguments)))
            }
            ).guid = e.guid = e.guid || he.guid++,
            r) : undefined
        },
        now: function() {
            return +new Date
        },
        support: pe
    }),
    "function" == typeof Symbol && (he.fn[Symbol.iterator] = re[Symbol.iterator]),
    he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var _e = function(n) {
        function b(e, t, n, r) {
            var i, o, a, s, c, u, l, d, p = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!r && ((t ? t.ownerDocument || t : U) !== R && P(t),
            t = t || R,
            D)) {
                if (11 !== f && (u = ge.exec(e)))
                    if (i = u[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (p && (a = p.getElementById(i)) && M(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && g.getElementsByClassName && t.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (g.qsa && !W[e + " "] && (!F || !F.test(e))) {
                    if (1 !== f)
                        p = t,
                        d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(_e, "\\$&") : t.setAttribute("id", s = B),
                        o = (l = A(e)).length,
                        c = pe.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            l[o] = c + " " + y(l[o]);
                        d = l.join(","),
                        p = ve.test(e) && m(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return J.apply(n, p.querySelectorAll(d)),
                            n
                        } catch (h) {} finally {
                            s === B && t.removeAttribute("id")
                        }
                }
            }
            return O(e.replace(se, "$1"), t, n, r)
        }
        function e() {
            function n(e, t) {
                return r.push(e + " ") > T.cacheLength && delete n[r.shift()],
                n[e + " "] = t
            }
            var r = [];
            return n
        }
        function c(e) {
            return e[B] = !0,
            e
        }
        function i(e) {
            var t = R.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function u(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function r(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function o(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function a(a) {
            return c(function(o) {
                return o = +o,
                c(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function m(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function s() {}
        function y(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function d(s, e, t) {
            var c = e.dir
              , u = t && "parentNode" === c
              , l = V++;
            return e.first ? function(e, t, n) {
                for (; e = e[c]; )
                    if (1 === e.nodeType || u)
                        return s(e, t, n)
            }
            : function(e, t, n) {
                var r, i, o, a = [H, l];
                if (n) {
                    for (; e = e[c]; )
                        if ((1 === e.nodeType || u) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[c]; )
                        if (1 === e.nodeType || u) {
                            if ((r = (i = (o = e[B] || (e[B] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[c]) && r[0] === H && r[1] === l)
                                return a[2] = r[2];
                            if ((i[c] = a)[2] = s(e, t, n))
                                return !0
                        }
            }
        }
        function p(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function v(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                b(e, t[r], n);
            return n
        }
        function E(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                u && t.push(s)));
            return a
        }
        function _(f, h, m, y, g, e) {
            return y && !y[B] && (y = _(y)),
            g && !g[B] && (g = _(g, e)),
            c(function(e, t, n, r) {
                var i, o, a, s = [], c = [], u = t.length, l = e || v(h || "*", n.nodeType ? [n] : n, []), d = !f || !e && h ? l : E(l, s, f, n, r), p = m ? g || (e ? f : u || y) ? [] : t : d;
                if (m && m(d, p, n, r),
                y)
                    for (i = E(p, c),
                    y(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (p[c[o]] = !(d[c[o]] = a));
                if (e) {
                    if (g || f) {
                        if (g) {
                            for (i = [],
                            o = p.length; o--; )
                                (a = p[o]) && i.push(d[o] = a);
                            g(null, p = [], i, r)
                        }
                        for (o = p.length; o--; )
                            (a = p[o]) && -1 < (i = g ? ee(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = E(p === t ? p.splice(u, p.length) : p),
                    g ? g(null, t, p, r) : J.apply(t, p)
            })
        }
        function f(e) {
            for (var i, t, n, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, c = d(function(e) {
                return e === i
            }, a, !0), u = d(function(e) {
                return -1 < ee(i, e)
            }, a, !0), l = [function(e, t, n) {
                var r = !o && (n || t !== N) || ((i = t).nodeType ? c(e, t, n) : u(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = T.relative[e[s].type])
                    l = [d(p(l), t)];
                else {
                    if ((t = T.filter[e[s].type].apply(null, e[s].matches))[B]) {
                        for (n = ++s; n < r && !T.relative[e[n].type]; n++)
                            ;
                        return _(1 < s && p(l), 1 < s && y(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), t, s < n && f(e.slice(s, n)), n < r && f(e = e.slice(n)), n < r && y(e))
                    }
                    l.push(t)
                }
            return p(l)
        }
        function l(y, g) {
            var v = 0 < g.length
              , _ = 0 < y.length
              , e = function(e, t, n, r, i) {
                var o, a, s, c = 0, u = "0", l = e && [], d = [], p = N, f = e || _ && T.find.TAG("*", i), h = H += null == p ? 1 : Math.random() || .1, m = f.length;
                for (i && (N = t === R || t || i); u !== m && null != (o = f[u]); u++) {
                    if (_ && o) {
                        for (a = 0,
                        t || o.ownerDocument === R || (P(o),
                        n = !D); s = y[a++]; )
                            if (s(o, t || R, n)) {
                                r.push(o);
                                break
                            }
                        i && (H = h)
                    }
                    v && ((o = !s && o) && c--,
                    e && l.push(o))
                }
                if (c += u,
                v && u !== c) {
                    for (a = 0; s = g[a++]; )
                        s(l, d, t, n);
                    if (e) {
                        if (0 < c)
                            for (; u--; )
                                l[u] || d[u] || (d[u] = G.call(r));
                        d = E(d)
                    }
                    J.apply(r, d),
                    i && !e && 0 < d.length && 1 < c + g.length && b.uniqueSort(r)
                }
                return i && (H = h,
                N = p),
                l
            };
            return v ? c(e) : e
        }
        var h, g, T, w, S, A, I, O, N, C, x, P, R, L, D, F, k, j, M, B = "sizzle" + 1 * new Date, U = n.document, H = 0, V = 0, z = e(), q = e(), W = e(), Y = function(e, t) {
            return e === t && (x = !0),
            0
        }, K = 1 << 31, Q = {}.hasOwnProperty, $ = [], G = $.pop, X = $.push, J = $.push, Z = $.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), pe = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, _e = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), Ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Te = function() {
            P()
        };
        try {
            J.apply($ = Z.call(U.childNodes), U.childNodes),
            $[U.childNodes.length].nodeType
        } catch (we) {
            J = {
                apply: $.length ? function(e, t) {
                    X.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (h in g = b.support = {},
        S = b.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        P = b.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : U;
            return r !== R && 9 === r.nodeType && r.documentElement && (L = (R = r).documentElement,
            D = !S(R),
            (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
            g.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            g.getElementsByTagName = i(function(e) {
                return e.appendChild(R.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            g.getElementsByClassName = ye.test(R.getElementsByClassName),
            g.getById = i(function(e) {
                return L.appendChild(e).id = B,
                !R.getElementsByName || !R.getElementsByName(B).length
            }),
            g.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(be, Ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var n = e.replace(be, Ee);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ),
            T.find.TAG = g.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            T.find.CLASS = g.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && D)
                    return t.getElementsByClassName(e)
            }
            ,
            k = [],
            F = [],
            (g.qsa = ye.test(R.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + B + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + B + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = R.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (g.matchesSelector = ye.test(j = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                g.disconnectedMatch = j.call(e, "div"),
                j.call(e, "[s!='']:x"),
                k.push("!=", oe)
            }),
            F = F.length && new RegExp(F.join("|")),
            k = k.length && new RegExp(k.join("|")),
            t = ye.test(L.compareDocumentPosition),
            M = t || ye.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return x = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === R || e.ownerDocument === U && M(U, e) ? -1 : t === R || t.ownerDocument === U && M(U, t) ? 1 : C ? ee(C, e) - ee(C, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return x = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === R ? -1 : t === R ? 1 : i ? -1 : o ? 1 : C ? ee(C, e) - ee(C, t) : 0;
                if (i === o)
                    return u(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? u(a[r], s[r]) : a[r] === U ? -1 : s[r] === U ? 1 : 0
            }
            ),
            R
        }
        ,
        b.matches = function(e, t) {
            return b(e, null, null, t)
        }
        ,
        b.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== R && P(e),
            t = t.replace(le, "='$1']"),
            g.matchesSelector && D && !W[t + " "] && (!k || !k.test(t)) && (!F || !F.test(t)))
                try {
                    var n = j.call(e, t);
                    if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (we) {}
            return 0 < b(t, R, null, [e]).length
        }
        ,
        b.contains = function(e, t) {
            return (e.ownerDocument || e) !== R && P(e),
            M(e, t)
        }
        ,
        b.attr = function(e, t) {
            (e.ownerDocument || e) !== R && P(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && Q.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !D) : undefined;
            return r !== undefined ? r : g.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        b.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        b.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (x = !g.detectDuplicates,
            C = !g.sortStable && e.slice(0),
            e.sort(Y),
            x) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return C = null,
            e
        }
        ,
        w = b.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += w(t);
            return n
        }
        ,
        (T = b.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: fe,
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
                    return e[1] = e[1].replace(be, Ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, Ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, Ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = b.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, m, y) {
                    var g = "nth" !== h.slice(0, 3)
                      , v = "last" !== h.slice(-4)
                      , _ = "of-type" === e;
                    return 1 === m && 0 === y ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, c, u = g !== v ? "nextSibling" : "previousSibling", l = e.parentNode, d = _ && e.nodeName.toLowerCase(), p = !n && !_, f = !1;
                        if (l) {
                            if (g) {
                                for (; u; ) {
                                    for (a = e; a = a[u]; )
                                        if (_ ? a.nodeName.toLowerCase() === d : 1 === a.nodeType)
                                            return !1;
                                    c = u = "only" === h && !c && "nextSibling"
                                }
                                return !0
                            }
                            if (c = [v ? l.firstChild : l.lastChild],
                            v && p) {
                                for (f = (s = (r = (i = (o = (a = l)[B] || (a[B] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === H && r[1]) && r[2],
                                a = s && l.childNodes[s]; a = ++s && a && a[u] || (f = s = 0) || c.pop(); )
                                    if (1 === a.nodeType && ++f && a === e) {
                                        i[h] = [H, s, f];
                                        break
                                    }
                            } else if (p && (f = s = (r = (i = (o = (a = e)[B] || (a[B] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === H && r[1]),
                            !1 === f)
                                for (; (a = ++s && a && a[u] || (f = s = 0) || c.pop()) && ((_ ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (p && ((i = (o = a[B] || (a[B] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [H, f]),
                                a !== e)); )
                                    ;
                            return (f -= y) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                    return a[B] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? c(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = ee(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: c(function(e) {
                    var r = []
                      , i = []
                      , s = I(e.replace(se, "$1"));
                    return s[B] ? c(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: c(function(t) {
                    return function(e) {
                        return 0 < b(t, e).length
                    }
                }),
                contains: c(function(t) {
                    return t = t.replace(be, Ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || w(e)).indexOf(t)
                    }
                }),
                lang: c(function(n) {
                    return pe.test(n || "") || b.error("unsupported lang: " + n),
                    n = n.replace(be, Ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(e, t) {
                    return [t - 1]
                }),
                eq: a(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: a(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: a(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: a(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = T.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[h] = r(h);
        for (h in {
            submit: !0,
            reset: !0
        })
            T.pseudos[h] = o(h);
        return s.prototype = T.filters = T.pseudos,
        T.setFilters = new s,
        A = b.tokenize = function(e, t) {
            var n, r, i, o, a, s, c, u = q[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            s = [],
            c = T.preFilter; a; ) {
                for (o in n && !(r = ce.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = ue.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(se, " ")
                }),
                a = a.slice(n.length)),
                T.filter)
                    !(r = fe[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? b.error(e) : q(e, s).slice(0)
        }
        ,
        I = b.compile = function(e, t) {
            var n, r = [], i = [], o = W[e + " "];
            if (!o) {
                for (t || (t = A(e)),
                n = t.length; n--; )
                    (o = f(t[n]))[B] ? r.push(o) : i.push(o);
                (o = W(e, l(i, r))).selector = e
            }
            return o
        }
        ,
        O = b.select = function(e, t, n, r) {
            var i, o, a, s, c, u = "function" == typeof e && e, l = !r && A(e = u.selector || e);
            if (n = n || [],
            1 === l.length) {
                if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (a = o[0]).type && g.getById && 9 === t.nodeType && D && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(be, Ee), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !T.relative[s = a.type]); )
                    if ((c = T.find[s]) && (r = c(a.matches[0].replace(be, Ee), ve.test(o[0].type) && m(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && y(o)))
                            return J.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || I(e, l))(r, t, !D, n, !t || ve.test(e) && m(t.parentNode) || t),
            n
        }
        ,
        g.sortStable = B.split("").sort(Y).join("") === B,
        g.detectDuplicates = !!x,
        P(),
        g.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(R.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        g.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        b
    }(w);
    he.find = _e,
    he.expr = _e.selectors,
    he.expr[":"] = he.expr.pseudos,
    he.uniqueSort = he.unique = _e.uniqueSort,
    he.text = _e.getText,
    he.isXMLDoc = _e.isXML,
    he.contains = _e.contains;
    var be = function(e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && he(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , Ee = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , Te = he.expr.match.needsContext
      , we = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , Se = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    he.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (he.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                he.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? he.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
        }
    });
    var Ae, Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (he.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || Ae,
        "string" != typeof e)
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : he.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(he) : (e.selector !== undefined && (this.selector = e.selector,
            this.context = e.context),
            he.makeArray(e, this));
        if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : Ie.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof he ? t[0] : t,
            he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)),
            we.test(r[1]) && he.isPlainObject(t))
                for (r in t)
                    he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        if ((i = ie.getElementById(r[2])) && i.parentNode) {
            if (i.id !== r[2])
                return Ae.find(e);
            this.length = 1,
            this[0] = i
        }
        return this.context = ie,
        this.selector = e,
        this
    }
    ).prototype = he.fn,
    Ae = he(ie);
    var Oe = /^(?:parents|prev(?:Until|All))/
      , Ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t, n = he(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (he.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Te.test(e) || "string" != typeof e ? he(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? he.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? he.inArray(this[0], he(e)) : he.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Ee((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Ee(e.firstChild)
        },
        contents: function(e) {
            return he.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : he.merge([], e.childNodes)
        }
    }, function(r, i) {
        he.fn[r] = function(e, t) {
            var n = he.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = he.filter(t, n)),
            1 < this.length && (Ne[r] || (n = he.uniqueSort(n)),
            Oe.test(r) && (n = n.reverse())),
            this.pushStack(n)
        }
    });
    var Ce, xe, Pe = /\S+/g;
    for (xe in he.Callbacks = function(r) {
        r = "string" == typeof r ? l(r) : he.extend({}, r);
        var i, e, t, n, o = [], a = [], s = -1, c = function() {
            for (n = r.once,
            t = i = !0; a.length; s = -1)
                for (e = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length,
                    e = !1);
            r.memory || (e = !1),
            i = !1,
            n && (o = e ? [] : "")
        }, u = {
            add: function() {
                return o && (e && !i && (s = o.length - 1,
                a.push(e)),
                function n(e) {
                    he.each(e, function(e, t) {
                        he.isFunction(t) ? r.unique && u.has(t) || o.push(t) : t && t.length && "string" !== he.type(t) && n(t)
                    })
                }(arguments),
                e && !i && c()),
                this
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var n; -1 < (n = he.inArray(t, o, n)); )
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < he.inArray(e, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return n = a = [],
                o = e = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return n = !0,
                e || u.disable(),
                this
            },
            locked: function() {
                return !!n
            },
            fireWith: function(e, t) {
                return n || (t = [e, (t = t || []).slice ? t.slice() : t],
                a.push(t),
                i || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return u
    }
    ,
    he.extend({
        Deferred: function(e) {
            var o = [["resolve", "done", he.Callbacks("once memory"), "resolved"], ["reject", "fail", he.Callbacks("once memory"), "rejected"], ["notify", "progress", he.Callbacks("memory")]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var i = arguments;
                    return he.Deferred(function(r) {
                        he.each(o, function(e, t) {
                            var n = he.isFunction(i[e]) && i[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && he.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? he.extend(e, a) : a
                }
            }
              , s = {};
            return a.pipe = a.then,
            he.each(o, function(e, t) {
                var n = t[2]
                  , r = t[3];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var i, t, n, r = 0, o = oe.call(arguments), a = o.length, s = 1 !== a || e && he.isFunction(e.promise) ? a : 0, c = 1 === s ? e : he.Deferred(), u = function(t, n, r) {
                return function(e) {
                    n[t] = this,
                    r[t] = 1 < arguments.length ? oe.call(arguments) : e,
                    r === i ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                }
            };
            if (1 < a)
                for (i = new Array(a),
                t = new Array(a),
                n = new Array(a); r < a; r++)
                    o[r] && he.isFunction(o[r].promise) ? o[r].promise().progress(u(r, t, i)).done(u(r, n, o)).fail(c.reject) : --s;
            return s || c.resolveWith(n, o),
            c.promise()
        }
    }),
    he.fn.ready = function(e) {
        return he.ready.promise().done(e),
        this
    }
    ,
    he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? he.readyWait++ : he.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0) !== e && 0 < --he.readyWait || (Ce.resolveWith(ie, [he]),
            he.fn.triggerHandler && (he(ie).triggerHandler("ready"),
            he(ie).off("ready")))
        }
    }),
    he.ready.promise = function(e) {
        if (!Ce)
            if (Ce = he.Deferred(),
            "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll)
                w.setTimeout(he.ready);
            else if (ie.addEventListener)
                ie.addEventListener("DOMContentLoaded", o),
                w.addEventListener("load", o);
            else {
                ie.attachEvent("onreadystatechange", o),
                w.attachEvent("onload", o);
                var t = !1;
                try {
                    t = null == w.frameElement && ie.documentElement
                } catch (n) {}
                t && t.doScroll && function r() {
                    if (!he.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (n) {
                            return w.setTimeout(r, 50)
                        }
                        i(),
                        he.ready()
                    }
                }()
            }
        return Ce.promise(e)
    }
    ,
    he.ready.promise(),
    he(pe))
        break;
    pe.ownFirst = "0" === xe,
    pe.inlineBlockNeedsLayout = !1,
    he(function() {
        var e, t, n, r;
        (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"),
        (r = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        pe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = ie.createElement("div");
        pe.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            pe.deleteExpando = !1
        }
        e = null
    }();
    var Re, Le = function(e) {
        var t = he.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Fe = /([A-Z])/g;
    he.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? he.cache[e[he.expando]] : e[he.expando]) && !u(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return a(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return a(e, t, !0)
        }
    }),
    he.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (e !== undefined)
                return "object" == typeof e ? this.each(function() {
                    he.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    he.data(this, e, t)
                }) : o ? c(o, e, he.data(o, e)) : undefined;
            if (this.length && (i = he.data(o),
            1 === o.nodeType && !he._data(o, "parsedAttrs"))) {
                for (n = a.length; n--; )
                    a[n] && 0 === (r = a[n].name).indexOf("data-") && c(o, r = he.camelCase(r.slice(5)), i[r]);
                he._data(o, "parsedAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                he.removeData(this, e)
            })
        }
    }),
    he.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = he._data(e, t),
                n && (!r || he.isArray(n) ? r = he._data(e, t, he.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = he._queueHooks(e, t)
              , a = function() {
                he.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return he._data(e, n) || he._data(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    he._removeData(e, t + "queue"),
                    he._removeData(e, n)
                })
            })
        }
    }),
    he.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? he.queue(this[0], t) : n === undefined ? this : this.each(function() {
                var e = he.queue(this, t, n);
                he._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && he.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = he.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = undefined),
            e = e || "fx"; a--; )
                (n = he._data(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    }),
    pe.shrinkWrapBlocks = function() {
        return null != Re ? Re : (Re = !1,
        (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"),
        (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        t.appendChild(n).appendChild(e),
        "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        e.appendChild(ie.createElement("div")).style.width = "5px",
        Re = 3 !== e.offsetWidth),
        t.removeChild(n),
        Re) : void 0);
        var e, t, n
    }
    ;
    var ke, je, Me, Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ue = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$","i"), He = ["Top", "Right", "Bottom", "Left"], Ve = function(e, t) {
        return e = t || e,
        "none" === he.css(e, "display") || !he.contains(e.ownerDocument, e)
    }, ze = function(e, t, n, r, i, o, a) {
        var s = 0
          , c = e.length
          , u = null == n;
        if ("object" === he.type(n))
            for (s in i = !0,
            n)
                ze(e, t, s, n[s], !0, o, a);
        else if (r !== undefined && (i = !0,
        he.isFunction(r) || (a = !0),
        u && (a ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(he(e), n)
        }
        )),
        t))
            for (; s < c; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : c ? t(e[0], n) : o
    }, qe = /^(?:checkbox|radio)$/i, We = /<([\w:-]+)/, Ye = /^$|\/(?:java|ecma)script/i, Ke = /^\s+/, Qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ke = ie.createElement("div"),
    je = ie.createDocumentFragment(),
    Me = ie.createElement("input"),
    ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    pe.leadingWhitespace = 3 === ke.firstChild.nodeType,
    pe.tbody = !ke.getElementsByTagName("tbody").length,
    pe.htmlSerialize = !!ke.getElementsByTagName("link").length,
    pe.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
    Me.type = "checkbox",
    Me.checked = !0,
    je.appendChild(Me),
    pe.appendChecked = Me.checked,
    ke.innerHTML = "<textarea>x</textarea>",
    pe.noCloneChecked = !!ke.cloneNode(!0).lastChild.defaultValue,
    je.appendChild(ke),
    (Me = ie.createElement("input")).setAttribute("type", "radio"),
    Me.setAttribute("checked", "checked"),
    Me.setAttribute("name", "t"),
    ke.appendChild(Me),
    pe.checkClone = ke.cloneNode(!0).cloneNode(!0).lastChild.checked,
    pe.noCloneEvent = !!ke.addEventListener,
    ke[he.expando] = 1,
    pe.attributes = !ke.getAttribute(he.expando);
    var $e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: pe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    $e.optgroup = $e.option,
    $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead,
    $e.th = $e.td;
    var Ge = /<|&#?\w+;/
      , Xe = /<tbody/i;
    !function() {
        var e, t, n = ie.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            t = "on" + e,
            (pe[e] = t in w) || (n.setAttribute(t, "t"),
            pe[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Je = /^(?:input|select|textarea)$/i
      , Ze = /^key/
      , et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , tt = /^(?:focusinfocus|focusoutblur)$/
      , nt = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, c, u, l, d, p, f, h, m, y = he._data(e);
            if (y) {
                for (n.handler && (n = (c = n).handler,
                i = c.selector),
                n.guid || (n.guid = he.guid++),
                (a = y.events) || (a = y.events = {}),
                (l = y.handle) || ((l = y.handle = function(e) {
                    return void 0 === he || e && he.event.triggered === e.type ? undefined : he.event.dispatch.apply(l.elem, arguments)
                }
                ).elem = e),
                s = (t = (t || "").match(Pe) || [""]).length; s--; )
                    f = m = (o = nt.exec(t[s]) || [])[1],
                    h = (o[2] || "").split(".").sort(),
                    f && (u = he.event.special[f] || {},
                    f = (i ? u.delegateType : u.bindType) || f,
                    u = he.event.special[f] || {},
                    d = he.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && he.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, c),
                    (p = a[f]) || ((p = a[f] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, r, h, l) || (e.addEventListener ? e.addEventListener(f, l, !1) : e.attachEvent && e.attachEvent("on" + f, l))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    he.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, u, l, d, p, f, h, m, y = he.hasData(e) && he._data(e);
            if (y && (l = y.events)) {
                for (u = (t = (t || "").match(Pe) || [""]).length; u--; )
                    if (f = m = (s = nt.exec(t[u]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    f) {
                        for (d = he.event.special[f] || {},
                        p = l[f = (r ? d.delegateType : d.bindType) || f] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        c = o = p.length; o--; )
                            a = p[o],
                            !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1),
                            a.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, a));
                        c && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, y.handle) || he.removeEvent(e, f, y.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            he.event.remove(e, f + t[u], n, r, !0);
                he.isEmptyObject(l) && (delete y.handle,
                he._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, r) {
            var i, o, a, s, c, u, l, d = [n || ie], p = de.call(e, "type") ? e.type : e, f = de.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || ie,
            3 !== n.nodeType && 8 !== n.nodeType && !tt.test(p + he.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(),
            f.sort()),
            o = p.indexOf(":") < 0 && "on" + p,
            (e = e[he.expando] ? e : new he.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = undefined,
            e.target || (e.target = n),
            t = null == t ? [e] : he.makeArray(t, [e]),
            c = he.event.special[p] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !he.isWindow(n)) {
                    for (s = c.delegateType || p,
                    tt.test(s + p) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        u = a;
                    u === (n.ownerDocument || ie) && d.push(u.defaultView || u.parentWindow || w)
                }
                for (l = 0; (a = d[l++]) && !e.isPropagationStopped(); )
                    e.type = 1 < l ? s : c.bindType || p,
                    (i = (he._data(a, "events") || {})[e.type] && he._data(a, "handle")) && i.apply(a, t),
                    (i = o && a[o]) && i.apply && Le(a) && (e.result = i.apply(a, t),
                    !1 === e.result && e.preventDefault());
                if (e.type = p,
                !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), t)) && Le(n) && o && n[p] && !he.isWindow(n)) {
                    (u = n[o]) && (n[o] = null),
                    he.event.triggered = p;
                    try {
                        n[p]()
                    } catch (h) {}
                    he.event.triggered = undefined,
                    u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = he.event.fix(e);
            var t, n, r, i, o, a = [], s = oe.call(arguments), c = (he._data(this, "events") || {})[e.type] || [], u = he.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = he.event.handlers.call(this, e, c),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                        for (r = [],
                        n = 0; n < s; n++)
                            r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? -1 < he(i, this).index(c) : he.find(i, this, null, [c]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        fix: function(e) {
            if (e[he.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = et.test(i) ? this.mouseHooks : Ze.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new he.Event(o),
            t = r.length; t--; )
                e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || ie),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || ie).documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
                e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === h() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (he.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return he.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    he.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    he.Event = function(e, t) {
        if (!(this instanceof he.Event))
            return new he.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? p : f) : this.type = e,
        t && he.extend(this, t),
        this.timeStamp = e && e.timeStamp || he.now(),
        this[he.expando] = !0
    }
    ,
    he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        he.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this, r = e.relatedTarget, i = e.handleObj;
                return r && (r === n || he.contains(n, r)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    pe.submit || (he.event.special.submit = {
        setup: function() {
            if (he.nodeName(this, "form"))
                return !1;
            he.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = he.nodeName(t, "input") || he.nodeName(t, "button") ? he.prop(t, "form") : undefined;
                n && !he._data(n, "submit") && (he.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                he._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && he.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (he.nodeName(this, "form"))
                return !1;
            he.event.remove(this, "._submit")
        }
    }),
    pe.change || (he.event.special.change = {
        setup: function() {
            if (Je.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (he.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }),
                he.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    he.event.simulate("change", this, e)
                })),
                !1;
            he.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Je.test(t.nodeName) && !he._data(t, "change") && (he.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || he.event.simulate("change", this.parentNode, e)
                }),
                he._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return he.event.remove(this, "._change"),
            !Je.test(this.nodeName)
        }
    }),
    pe.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            he.event.simulate(r, e.target, he.event.fix(e))
        };
        he.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = he._data(e, r);
                t || e.addEventListener(n, i, !0),
                he._data(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = he._data(e, r) - 1;
                t ? he._data(e, r, t) : (e.removeEventListener(n, i, !0),
                he._removeData(e, r))
            }
        }
    }),
    he.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = undefined),
                !1 === n && (n = f),
                this.each(function() {
                    he.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return he.event.trigger(e, t, n, !0)
        }
    });
    var rt = / jQuery\d+="(?:null|\d+)"/g
      , it = new RegExp("<(?:" + Qe + ")[\\s/>]","i")
      , ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , at = /<script|<style|<link/i
      , st = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ct = /^true\/(.*)/
      , ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , lt = y(ie).appendChild(ie.createElement("div"));
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(ot, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, c = he.contains(e.ownerDocument, e);
            if (pe.html5Clone || he.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML,
            lt.removeChild(o = lt.firstChild)),
            !(pe.noCloneEvent && pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (r = g(o),
                s = g(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && O(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e),
                    r = r || g(o),
                    a = 0; null != (i = s[a]); a++)
                        I(i, r[a]);
                else
                    I(e, o);
            return 0 < (r = g(o, "script")).length && v(r, !c && g(e, "script")),
            r = s = i = null,
            o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = he.expando, c = he.cache, u = pe.attributes, l = he.event.special; null != (n = e[a]); a++)
                if ((t || Le(n)) && (o = (i = n[s]) && c[i])) {
                    if (o.events)
                        for (r in o.events)
                            l[r] ? he.event.remove(n, r) : he.removeEvent(n, r, o.handle);
                    c[i] && (delete c[i],
                    u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s),
                    re.push(i))
                }
        }
    }),
    he.fn.extend({
        domManip: N,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return ze(this, function(e) {
                return e === undefined ? he.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && he.cleanData(g(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && he.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return ze(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (e === undefined)
                    return 1 === t.nodeType ? t.innerHTML.replace(rt, "") : undefined;
                if ("string" == typeof e && !at.test(e) && (pe.htmlSerialize || !it.test(e)) && (pe.leadingWhitespace || !Ke.test(e)) && !$e[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (he.cleanData(g(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return N(this, arguments, function(e) {
                var t = this.parentNode;
                he.inArray(this, n) < 0 && (he.cleanData(g(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        he.fn[e] = function(e) {
            for (var t, n = 0, r = [], i = he(e), o = i.length - 1; n <= o; n++)
                t = n === o ? this : this.clone(!0),
                he(i[n])[a](t),
                se.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var dt, pt = {
        HTML: "block",
        BODY: "block"
    }, ft = /^margin/, ht = new RegExp("^(" + Be + ")(?!px)[a-z%]+$","i"), mt = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    }, yt = ie.documentElement;
    !function() {
        function e() {
            var e, t, n = ie.documentElement;
            n.appendChild(u),
            l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            r = o = c = !1,
            i = s = !0,
            w.getComputedStyle && (t = w.getComputedStyle(l),
            r = "1%" !== (t || {}).top,
            c = "2px" === (t || {}).marginLeft,
            o = "4px" === (t || {
                width: "4px"
            }).width,
            l.style.marginRight = "50%",
            i = "4px" === (t || {
                marginRight: "4px"
            }).marginRight,
            (e = l.appendChild(ie.createElement("div"))).style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            e.style.marginRight = e.style.width = "0",
            l.style.width = "1px",
            s = !parseFloat((w.getComputedStyle(e) || {}).marginRight),
            l.removeChild(e)),
            l.style.display = "none",
            (a = 0 === l.getClientRects().length) && (l.style.display = "",
            l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            l.childNodes[0].style.borderCollapse = "separate",
            (e = l.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            (a = 0 === e[0].offsetHeight) && (e[0].style.display = "",
            e[1].style.display = "none",
            a = 0 === e[0].offsetHeight)),
            n.removeChild(u)
        }
        var r, i, o, a, s, c, u = ie.createElement("div"), l = ie.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5",
        pe.opacity = "0.5" === l.style.opacity,
        pe.cssFloat = !!l.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        pe.clearCloneStyle = "content-box" === l.style.backgroundClip,
        (u = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        l.innerHTML = "",
        u.appendChild(l),
        pe.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
        he.extend(pe, {
            reliableHiddenOffsets: function() {
                return null == r && e(),
                a
            },
            boxSizingReliable: function() {
                return null == r && e(),
                o
            },
            pixelMarginRight: function() {
                return null == r && e(),
                i
            },
            pixelPosition: function() {
                return null == r && e(),
                r
            },
            reliableMarginRight: function() {
                return null == r && e(),
                s
            },
            reliableMarginLeft: function() {
                return null == r && e(),
                c
            }
        }))
    }();
    var gt, vt, _t = /^(top|right|bottom|left)$/;
    w.getComputedStyle ? (gt = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = w),
        t.getComputedStyle(e)
    }
    ,
    vt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || he.contains(e.ownerDocument, e) || (a = he.style(e, t)),
        n && !pe.pixelMarginRight() && ht.test(a) && ft.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o),
        a === undefined ? a : a + ""
    }
    ) : yt.currentStyle && (gt = function(e) {
        return e.currentStyle
    }
    ,
    vt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return null == (a = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]),
        ht.test(a) && !_t.test(t) && (r = s.left,
        (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left),
        s.left = "fontSize" === t ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = r,
        o && (i.left = o)),
        a === undefined ? a : a + "" || "auto"
    }
    );
    var bt = /alpha\([^)]*\)/i
      , Et = /opacity\s*=\s*([^)]*)/i
      , Tt = /^(none|table(?!-c[ea]).+)/
      , wt = new RegExp("^(" + Be + ")(.*)$","i")
      , St = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , At = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , It = ["Webkit", "O", "Moz", "ms"]
      , Ot = ie.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": pe.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = he.camelCase(t), c = e.style;
                if (t = he.cssProps[s] || (he.cssProps[s] = L(s) || s),
                a = he.cssHooks[t] || he.cssHooks[s],
                n === undefined)
                    return a && "get"in a && (i = a.get(e, !1, r)) !== undefined ? i : c[t];
                if ("string" === (o = typeof n) && (i = Ue.exec(n)) && i[1] && (n = d(e, t, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (he.cssNumber[s] ? "" : "px")),
                pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                !(a && "set"in a && (n = a.set(e, n, r)) === undefined)))
                    try {
                        c[t] = n
                    } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = he.camelCase(t);
            return t = he.cssProps[s] || (he.cssProps[s] = L(s) || s),
            (a = he.cssHooks[t] || he.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
            o === undefined && (o = vt(e, t, r)),
            "normal" === o && t in At && (o = At[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    he.each(["height", "width"], function(e, i) {
        he.cssHooks[i] = {
            get: function(e, t, n) {
                if (t)
                    return Tt.test(he.css(e, "display")) && 0 === e.offsetWidth ? mt(e, St, function() {
                        return j(e, i, n)
                    }) : j(e, i, n)
            },
            set: function(e, t, n) {
                var r = n && gt(e);
                return F(e, t, n ? k(e, i, n, pe.boxSizing && "border-box" === he.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    pe.opacity || (he.cssHooks.opacity = {
        get: function(e, t) {
            return Et.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = he.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === he.trim(o.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = bt.test(o) ? o.replace(bt, i) : o + " " + i)
        }
    }),
    he.cssHooks.marginRight = R(pe.reliableMarginRight, function(e, t) {
        if (t)
            return mt(e, {
                display: "inline-block"
            }, vt, [e, "marginRight"])
    }),
    he.cssHooks.marginLeft = R(pe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(vt(e, "marginLeft")) || (he.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
    }),
    he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        he.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + He[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        ft.test(i) || (he.cssHooks[i + o].set = F)
    }),
    he.fn.extend({
        css: function(e, t) {
            return ze(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (he.isArray(t)) {
                    for (r = gt(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = he.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? he.style(e, t, n) : he.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ve(this) ? he(this).show() : he(this).hide()
            })
        }
    }),
    (he.Tween = M).prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || he.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    he.fx = M.prototype.init,
    he.fx.step = {};
    var Nt, Ct, xt, Pt, Rt, Lt, Dt, Ft = /^(?:toggle|show|hide)$/, kt = /queueHooks$/;
    he.Animation = he.extend(q, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Ue.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            he.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Pe);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                q.tweeners[n] = q.tweeners[n] || [],
                q.tweeners[n].unshift(t)
        },
        prefilters: [V],
        prefilter: function(e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }),
    he.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || he.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !he.isFunction(t) && t
        };
        return r.duration = he.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in he.fx.speeds ? he.fx.speeds[r.duration] : he.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            he.isFunction(r.old) && r.old.call(this),
            r.queue && he.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    he.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ve).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = he.isEmptyObject(t)
              , o = he.speed(e, n, r)
              , a = function() {
                var e = q(this, he.extend({}, t), o);
                (i || he._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = undefined),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = he.timers
                  , r = he._data(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && kt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || he.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = he._data(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = he.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                he.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    he.each(["toggle", "show", "hide"], function(e, r) {
        var i = he.fn[r];
        he.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(U(r, !0), e, t, n)
        }
    }),
    he.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        he.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    he.timers = [],
    he.fx.tick = function() {
        var e, t = he.timers, n = 0;
        for (Nt = he.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || he.fx.stop(),
        Nt = undefined
    }
    ,
    he.fx.timer = function(e) {
        he.timers.push(e),
        e() ? he.fx.start() : he.timers.pop()
    }
    ,
    he.fx.interval = 13,
    he.fx.start = function() {
        Ct || (Ct = w.setInterval(he.fx.tick, he.fx.interval))
    }
    ,
    he.fx.stop = function() {
        w.clearInterval(Ct),
        Ct = null
    }
    ,
    he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    he.fn.delay = function(r, e) {
        return r = he.fx && he.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = w.setTimeout(e, r);
            t.stop = function() {
                w.clearTimeout(n)
            }
        })
    }
    ,
    Pt = ie.createElement("input"),
    Rt = ie.createElement("div"),
    Lt = ie.createElement("select"),
    Dt = Lt.appendChild(ie.createElement("option")),
    (Rt = ie.createElement("div")).setAttribute("className", "t"),
    Rt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    xt = Rt.getElementsByTagName("a")[0],
    Pt.setAttribute("type", "checkbox"),
    Rt.appendChild(Pt),
    (xt = Rt.getElementsByTagName("a")[0]).style.cssText = "top:1px",
    pe.getSetAttribute = "t" !== Rt.className,
    pe.style = /top/.test(xt.getAttribute("style")),
    pe.hrefNormalized = "/a" === xt.getAttribute("href"),
    pe.checkOn = !!Pt.value,
    pe.optSelected = Dt.selected,
    pe.enctype = !!ie.createElement("form").enctype,
    Lt.disabled = !0,
    pe.optDisabled = !Dt.disabled,
    (Pt = ie.createElement("input")).setAttribute("value", ""),
    pe.input = "" === Pt.getAttribute("value"),
    Pt.value = "t",
    Pt.setAttribute("type", "radio"),
    pe.radioValue = "t" === Pt.value;
    var jt = /\r/g
      , Mt = /[\x20\t\r\n\f]+/g;
    he.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = he.isFunction(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, he(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : he.isArray(t) && (t = he.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set"in r && r.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (r = he.valHooks[t.type] || he.valHooks[t.nodeName.toLowerCase()]) && "get"in r && (e = r.get(t, "value")) !== undefined ? e : "string" == typeof (e = t.value) ? e.replace(jt, "") : null == e ? "" : e : void 0
        }
    }),
    he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : he.trim(he.text(e)).replace(Mt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, c = i < 0 ? s : o ? i : 0; c < s; c++)
                        if (((n = r[c]).selected || c === i) && (pe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--; )
                        if (r = i[a],
                        -1 < he.inArray(he.valHooks.option.get(r), o))
                            try {
                                r.selected = n = !0
                            } catch (_) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (he.isArray(t))
                    return e.checked = -1 < he.inArray(he(e).val(), t)
            }
        },
        pe.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Bt, Ut, Ht = he.expr.attrHandle, Vt = /^(?:checked|selected)$/i, zt = pe.getSetAttribute, qt = pe.input;
    he.fn.extend({
        attr: function(e, t) {
            return ze(this, he.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }),
    he.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (t = t.toLowerCase(),
                i = he.attrHooks[t] || (he.expr.match.bool.test(t) ? Ut : Bt)),
                n !== undefined ? null === n ? void he.removeAttr(e, t) : i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = he.find.attr(e, t)) ? undefined : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(Pe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = he.propFix[n] || n,
                    he.expr.match.bool.test(n) ? qt && zt || !Vt.test(n) ? e[r] = !1 : e[he.camelCase("default-" + n)] = e[r] = !1 : he.attr(e, n, ""),
                    e.removeAttribute(zt ? n : r)
        }
    }),
    Ut = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : qt && zt || !Vt.test(n) ? e.setAttribute(!zt && he.propFix[n] || n, n) : e[he.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = Ht[t] || he.find.attr;
        qt && zt || !Vt.test(t) ? Ht[t] = function(e, t, n) {
            var r, i;
            return n || (i = Ht[t],
            Ht[t] = r,
            r = null != o(e, t, n) ? t.toLowerCase() : null,
            Ht[t] = i),
            r
        }
        : Ht[t] = function(e, t, n) {
            if (!n)
                return e[he.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    qt && zt || (he.attrHooks.value = {
        set: function(e, t, n) {
            if (!he.nodeName(e, "input"))
                return Bt && Bt.set(e, t, n);
            e.defaultValue = t
        }
    }),
    zt || (Bt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n))
                return t
        }
    },
    Ht.id = Ht.name = Ht.coords = function(e, t, n) {
        var r;
        if (!n)
            return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    he.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)
                return n.value
        },
        set: Bt.set
    },
    he.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Bt.set(e, "" !== t && t, n)
        }
    },
    he.each(["width", "height"], function(e, n) {
        he.attrHooks[n] = {
            set: function(e, t) {
                if ("" === t)
                    return e.setAttribute(n, "auto"),
                    t
            }
        }
    })),
    pe.style || (he.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Wt = /^(?:input|select|textarea|button|object)$/i
      , Yt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return ze(this, he.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = he.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = undefined,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    he.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t,
                i = he.propHooks[t]),
                n !== undefined ? i && "set"in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Wt.test(e.nodeName) || Yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    pe.hrefNormalized || he.each(["href", "src"], function(e, t) {
        he.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    pe.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }),
    pe.enctype || (he.propFix.enctype = "encoding");
    var Kt = /[\t\r\n\f]/g;
    he.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (he.isFunction(t))
                return this.each(function(e) {
                    he(this).addClass(t.call(this, e, W(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(Pe) || []; n = this[c++]; )
                    if (i = W(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Kt, " ")) {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = he.trim(r)) && he.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (he.isFunction(t))
                return this.each(function(e) {
                    he(this).removeClass(t.call(this, e, W(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Pe) || []; n = this[c++]; )
                    if (i = W(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Kt, " ")) {
                        for (a = 0; o = e[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = he.trim(r)) && he.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : he.isFunction(i) ? this.each(function(e) {
                he(this).toggleClass(i.call(this, e, W(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0,
                    n = he(this),
                    r = i.match(Pe) || []; e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    i !== undefined && "boolean" !== o || ((e = W(this)) && he._data(this, "__className__", e),
                    he.attr(this, "class", e || !1 === i ? "" : he._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + W(n) + " ").replace(Kt, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
    he.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        he.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Qt = w.location
      , $t = he.now()
      , Gt = /\?/
      , Xt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    he.parseJSON = function(e) {
        if (w.JSON && w.JSON.parse)
            return w.JSON.parse(e + "");
        var i, o = null, t = he.trim(e + "");
        return t && !he.trim(t.replace(Xt, function(e, t, n, r) {
            return i && t && (o = 0),
            0 === o ? e : (i = n || t,
            o += !r - !n,
            "")
        })) ? Function("return " + t)() : he.error("Invalid JSON: " + e)
    }
    ,
    he.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            w.DOMParser ? t = (new w.DOMParser).parseFromString(e, "text/xml") : ((t = new w.ActiveXObject("Microsoft.XMLDOM")).async = "false",
            t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + e),
        t
    }
    ;
    var Jt = /#.*$/
      , Zt = /([?&])_=[^&]*/
      , en = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , nn = /^(?:GET|HEAD)$/
      , rn = /^\/\//
      , on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , an = {}
      , sn = {}
      , cn = "*/".concat("*")
      , un = Qt.href
      , ln = on.exec(un.toLowerCase()) || [];
    he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: un,
            type: "GET",
            isLocal: tn.test(ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": cn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": he.parseJSON,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
        },
        ajaxPrefilter: Y(an),
        ajaxTransport: Y(sn),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, c, u = t;
                2 !== E && (E = 2,
                p && w.clearTimeout(p),
                h = undefined,
                d = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = $(m, T, n)),
                s = G(m, s, T, i),
                i ? (m.ifModified && ((c = T.getResponseHeader("Last-Modified")) && (he.lastModified[l] = c),
                (c = T.getResponseHeader("etag")) && (he.etag[l] = c)),
                204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = u,
                !e && u || (u = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || u) + "",
                i ? v.resolveWith(y, [o, u, T]) : v.rejectWith(y, [T, u, a]),
                T.statusCode(b),
                b = undefined,
                f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [T, m, i ? o : a]),
                _.fireWith(y, [T, u]),
                f && (g.trigger("ajaxComplete", [T, m]),
                --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = undefined),
            t = t || {};
            var r, i, l, d, p, f, h, o, m = he.ajaxSetup({}, t), y = m.context || m, g = m.context && (y.nodeType || y.jquery) ? he(y) : he.event, v = he.Deferred(), _ = he.Callbacks("once memory"), b = m.statusCode || {}, a = {}, s = {}, E = 0, c = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === E) {
                        if (!o)
                            for (o = {}; t = en.exec(d); )
                                o[t[1].toLowerCase()] = t[2];
                        t = o[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? d : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return E || (e = s[n] = s[n] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return E || (m.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (E < 2)
                            for (t in e)
                                b[t] = [b[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || c;
                    return h && h.abort(t),
                    n(0, t),
                    this
                }
            };
            if (v.promise(T).complete = _.add,
            T.success = T.done,
            T.error = T.fail,
            m.url = ((e || m.url || un) + "").replace(Jt, "").replace(rn, ln[1] + "//"),
            m.type = t.method || t.type || m.method || m.type,
            m.dataTypes = he.trim(m.dataType || "*").toLowerCase().match(Pe) || [""],
            null == m.crossDomain && (r = on.exec(m.url.toLowerCase()),
            m.crossDomain = !(!r || r[1] === ln[1] && r[2] === ln[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (ln[3] || ("http:" === ln[1] ? "80" : "443")))),
            m.data && m.processData && "string" != typeof m.data && (m.data = he.param(m.data, m.traditional)),
            K(an, m, t, T),
            2 === E)
                return T;
            for (i in (f = he.event && m.global) && 0 == he.active++ && he.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !nn.test(m.type),
            l = m.url,
            m.hasContent || (m.data && (l = m.url += (Gt.test(l) ? "&" : "?") + m.data,
            delete m.data),
            !1 === m.cache && (m.url = Zt.test(l) ? l.replace(Zt, "$1_=" + $t++) : l + (Gt.test(l) ? "&" : "?") + "_=" + $t++)),
            m.ifModified && (he.lastModified[l] && T.setRequestHeader("If-Modified-Since", he.lastModified[l]),
            he.etag[l] && T.setRequestHeader("If-None-Match", he.etag[l])),
            (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType),
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + cn + "; q=0.01" : "") : m.accepts["*"]),
            m.headers)
                T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(y, T, m) || 2 === E))
                return T.abort();
            for (i in c = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                T[i](m[i]);
            if (h = K(sn, m, t, T)) {
                if (T.readyState = 1,
                f && g.trigger("ajaxSend", [T, m]),
                2 === E)
                    return T;
                m.async && 0 < m.timeout && (p = w.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    E = 1,
                    h.send(a, n)
                } catch (u) {
                    if (!(E < 2))
                        throw u;
                    n(-1, u)
                }
            } else
                n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, undefined, t, "script")
        }
    }),
    he.each(["get", "post"], function(e, i) {
        he[i] = function(e, t, n, r) {
            return he.isFunction(t) && (r = r || n,
            n = t,
            t = undefined),
            he.ajax(he.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, he.isPlainObject(e) && e))
        }
    }),
    he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    he.fn.extend({
        wrapAll: function(t) {
            if (he.isFunction(t))
                return this.each(function(e) {
                    he(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = he(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return he.isFunction(n) ? this.each(function(e) {
                he(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = he(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = he.isFunction(t);
            return this.each(function(e) {
                he(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                he.nodeName(this, "body") || he(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    he.expr.filters.hidden = function(e) {
        return pe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }
    ,
    he.expr.filters.visible = function(e) {
        return !he.expr.filters.hidden(e)
    }
    ;
    var dn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , hn = /^(?:submit|button|image|reset|file)$/i
      , mn = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = he.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = he.ajaxSettings && he.ajaxSettings.traditional),
        he.isArray(e) || e.jquery && !he.isPlainObject(e))
            he.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Z(n, e[n], t, i);
        return r.join("&").replace(dn, "+")
    }
    ,
    he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && mn.test(this.nodeName) && !hn.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    he.ajaxSettings.xhr = w.ActiveXObject !== undefined ? function() {
        return this.isLocal ? te() : 8 < ie.documentMode ? ee() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ee() || te()
    }
    : ee;
    var yn = 0
      , gn = {}
      , vn = he.ajaxSettings.xhr();
    w.attachEvent && w.attachEvent("onunload", function() {
        for (var e in gn)
            gn[e](undefined, !0)
    }),
    pe.cors = !!vn && "withCredentials"in vn,
    (vn = pe.ajax = !!vn) && he.ajaxTransport(function(u) {
        var l;
        if (!u.crossDomain || pe.cors)
            return {
                send: function(e, a) {
                    var t, s = u.xhr(), c = ++yn;
                    if (s.open(u.type, u.url, u.async, u.username, u.password),
                    u.xhrFields)
                        for (t in u.xhrFields)
                            s[t] = u.xhrFields[t];
                    for (t in u.mimeType && s.overrideMimeType && s.overrideMimeType(u.mimeType),
                    u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                    s.send(u.hasContent && u.data || null),
                    l = function(e, t) {
                        var n, r, i;
                        if (l && (t || 4 === s.readyState))
                            if (delete gn[c],
                            l = undefined,
                            s.onreadystatechange = he.noop,
                            t)
                                4 !== s.readyState && s.abort();
                            else {
                                i = {},
                                n = s.status,
                                "string" == typeof s.responseText && (i.text = s.responseText);
                                try {
                                    r = s.statusText
                                } catch (o) {
                                    r = ""
                                }
                                n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                            }
                        i && a(n, r, i, s.getAllResponseHeaders())
                    }
                    ,
                    u.async ? 4 === s.readyState ? w.setTimeout(l) : s.onreadystatechange = gn[c] = l : l()
                },
                abort: function() {
                    l && l(undefined, !0)
                }
            }
    }),
    he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e),
                e
            }
        }
    }),
    he.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    he.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var r, i = ie.head || he("head")[0] || ie.documentElement;
            return {
                send: function(e, n) {
                    (r = ie.createElement("script")).async = !0,
                    t.scriptCharset && (r.charset = t.scriptCharset),
                    r.src = t.url,
                    r.onload = r.onreadystatechange = function(e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null,
                        r.parentNode && r.parentNode.removeChild(r),
                        r = null,
                        t || n(200, "success"))
                    }
                    ,
                    i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(undefined, !0)
                }
            }
        }
    });
    var _n = []
      , bn = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = _n.pop() || he.expando + "_" + $t++;
            return this[e] = !0,
            e
        }
    }),
    he.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = he.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(bn, "$1" + r) : !1 !== e.jsonp && (e.url += (Gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || he.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = w[r],
            w[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                i === undefined ? he(w).removeProp(r) : w[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                _n.push(r)),
                o && he.isFunction(i) && i(o[0]),
                o = i = undefined
            }),
            "script"
    }),
    he.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || ie;
        var r = we.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = m([e], t, i),
        i && i.length && he(i).remove(),
        he.merge([], r.childNodes))
    }
    ;
    var En = he.fn.load;
    he.fn.load = function(e, t, n) {
        if ("string" != typeof e && En)
            return En.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = he.trim(e.slice(s, e.length)),
        e = e.slice(0, s)),
        he.isFunction(t) ? (n = t,
        t = undefined) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && he.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    he.expr.filters.animated = function(t) {
        return he.grep(he.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    he.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, u = he.css(e, "position"), l = he(e), d = {};
            "static" === u && (e.style.position = "relative"),
            s = l.offset(),
            o = he.css(e, "top"),
            c = he.css(e, "left"),
            ("absolute" === u || "fixed" === u) && -1 < he.inArray("auto", [o, c]) ? (a = (r = l.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(c) || 0),
            he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, d) : l.css(d)
        }
    },
    he.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return t === undefined ? this : this.each(function(e) {
                    he.offset.setOffset(this, t, e)
                });
            var e, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            return o ? (e = o.documentElement,
            he.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
            n = ne(o),
            {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === he.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                he.nodeName(e[0], "html") || (n = e.offset()),
                n.top += he.css(e[0], "borderTopWidth", !0),
                n.left += he.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - he.css(r, "marginTop", !0),
                    left: t.left - n.left - he.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !he.nodeName(e, "html") && "static" === he.css(e, "position"); )
                    e = e.offsetParent;
                return e || yt
            })
        }
    }),
    he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = /Y/.test(i);
        he.fn[t] = function(e) {
            return ze(this, function(e, t, n) {
                var r = ne(e);
                if (n === undefined)
                    return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? he(r).scrollLeft() : n, o ? n : he(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }),
    he.each(["top", "left"], function(e, n) {
        he.cssHooks[n] = R(pe.pixelPosition, function(e, t) {
            if (t)
                return t = vt(e, n),
                ht.test(t) ? he(e).position()[n] + "px" : t
        })
    }),
    he.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        he.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            he.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return ze(this, function(e, t, n) {
                    var r;
                    return he.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === undefined ? he.css(e, t, i) : he.style(e, t, n, i)
                }, a, n ? e : undefined, n, null)
            }
        })
    }),
    he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    he.fn.size = function() {
        return this.length
    }
    ,
    he.fn.andSelf = he.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Tn = w.jQuery
      , wn = w.$;
    return he.noConflict = function(e) {
        return w.$ === he && (w.$ = wn),
        e && w.jQuery === he && (w.jQuery = Tn),
        he
    }
    ,
    e || (w.jQuery = w.$ = he),
    he
}),
function(l, c) {
    "use strict";
    var u;
    l.rails !== c && l.error("jquery-ujs has already been loaded!");
    var e = l(document);
    l.rails = u = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return l("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return l("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = u.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            l('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
        },
        fire: function(e, t, n) {
            var r = l.Event(t);
            return e.trigger(r, n),
            !1 !== r.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(e) {
            return l.ajax(e)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== c && !1 !== e.data("remote")
        },
        handleRemote: function(r) {
            var e, t, n, i, o, a;
            if (u.fire(r, "ajax:before")) {
                if (i = r.data("with-credentials") || null,
                o = r.data("type") || l.ajaxSettings && l.ajaxSettings.dataType,
                r.is("form")) {
                    e = r.data("ujs:submit-button-formmethod") || r.attr("method"),
                    t = r.data("ujs:submit-button-formaction") || r.attr("action"),
                    n = l(r[0]).serializeArray();
                    var s = r.data("ujs:submit-button");
                    s && (n.push(s),
                    r.data("ujs:submit-button", null)),
                    r.data("ujs:submit-button-formmethod", null),
                    r.data("ujs:submit-button-formaction", null)
                } else
                    r.is(u.inputChangeSelector) ? (e = r.data("method"),
                    t = r.data("url"),
                    n = r.serialize(),
                    r.data("params") && (n = n + "&" + r.data("params"))) : r.is(u.buttonClickSelector) ? (e = r.data("method") || "get",
                    t = r.data("url"),
                    n = r.serialize(),
                    r.data("params") && (n = n + "&" + r.data("params"))) : (e = r.data("method"),
                    t = u.href(r),
                    n = r.data("params") || null);
                return a = {
                    type: e || "GET",
                    data: n,
                    dataType: o,
                    beforeSend: function(e, t) {
                        if (t.dataType === c && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script),
                        !u.fire(r, "ajax:beforeSend", [e, t]))
                            return !1;
                        r.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: u.isCrossDomain(t)
                },
                i && (a.xhrFields = {
                    withCredentials: i
                }),
                t && (a.url = t),
                u.ajax(a)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (r) {
                return !0
            }
        },
        handleMethod: function(e) {
            var t = u.href(e)
              , n = e.data("method")
              , r = e.attr("target")
              , i = u.csrfToken()
              , o = u.csrfParam()
              , a = l('<form method="post" action="' + t + '"></form>')
              , s = '<input name="_method" value="' + n + '" type="hidden" />';
            o === c || i === c || u.isCrossDomain(t) || (s += '<input name="' + o + '" value="' + i + '" type="hidden" />'),
            r && a.attr("target", r),
            a.hide().append(s).appendTo("body"),
            a.submit()
        },
        formElements: function(e, t) {
            return e.is("form") ? l(e[0].elements).filter(t) : e.find(t)
        },
        disableFormElements: function(e) {
            u.formElements(e, u.disableSelector).each(function() {
                u.disableFormElement(l(this))
            })
        },
        disableFormElement: function(e) {
            var t, n;
            t = e.is("button") ? "html" : "val",
            (n = e.data("disable-with")) !== c && (e.data("ujs:enable-with", e[t]()),
            e[t](n)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            u.formElements(e, u.enableSelector).each(function() {
                u.enableFormElement(l(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== c && (e[t](e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"), r = !1;
            if (!n)
                return !0;
            if (u.fire(e, "confirm")) {
                try {
                    r = u.confirm(n)
                } catch (i) {
                    (console.error || console.log).call(console, i.stack || i)
                }
                t = u.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function(e, t, n) {
            var r, i, o, a = l(), s = t || "input,textarea", c = e.find(s), u = {};
            return c.each(function() {
                (r = l(this)).is("input[type=radio]") ? (o = r.attr("name"),
                u[o] || (0 === e.find('input[type=radio]:checked[name="' + o + '"]').length && (i = e.find('input[type=radio][name="' + o + '"]'),
                a = a.add(i)),
                u[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === n && (a = a.add(r))
            }),
            !!a.length && a
        },
        nonBlankInputs: function(e, t) {
            return u.blankInputs(e, t, !0)
        },
        stopEverything: function(e) {
            return l(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var t = e.data("disable-with");
            t !== c && (e.data("ujs:enable-with", e.html()),
            e.html(t)),
            e.bind("click.railsDisable", function(e) {
                return u.stopEverything(e)
            }),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== c && (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    u.fire(e, "rails:attachBindings") && (l.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || u.CSRFProtection(n)
    }),
    l(window).on("pageshow.rails", function() {
        l(l.rails.enableSelector).each(function() {
            var e = l(this);
            e.data("ujs:disabled") && l.rails.enableFormElement(e)
        }),
        l(l.rails.linkDisableSelector).each(function() {
            var e = l(this);
            e.data("ujs:disabled") && l.rails.enableElement(e)
        })
    }),
    e.on("ajax:complete", u.linkDisableSelector, function() {
        u.enableElement(l(this))
    }),
    e.on("ajax:complete", u.buttonDisableSelector, function() {
        u.enableFormElement(l(this))
    }),
    e.on("click.rails", u.linkClickSelector, function(e) {
        var t = l(this)
          , n = t.data("method")
          , r = t.data("params")
          , i = e.metaKey || e.ctrlKey;
        if (!u.allowAction(t))
            return u.stopEverything(e);
        if (!i && t.is(u.linkDisableSelector) && u.disableElement(t),
        u.isRemote(t)) {
            if (i && (!n || "GET" === n) && !r)
                return !0;
            var o = u.handleRemote(t);
            return !1 === o ? u.enableElement(t) : o.fail(function() {
                u.enableElement(t)
            }),
            !1
        }
        return n ? (u.handleMethod(t),
        !1) : void 0
    }),
    e.on("click.rails", u.buttonClickSelector, function(e) {
        var t = l(this);
        if (!u.allowAction(t) || !u.isRemote(t))
            return u.stopEverything(e);
        t.is(u.buttonDisableSelector) && u.disableFormElement(t);
        var n = u.handleRemote(t);
        return !1 === n ? u.enableFormElement(t) : n.fail(function() {
            u.enableFormElement(t)
        }),
        !1
    }),
    e.on("change.rails", u.inputChangeSelector, function(e) {
        var t = l(this);
        return u.allowAction(t) && u.isRemote(t) ? (u.handleRemote(t),
        !1) : u.stopEverything(e)
    }),
    e.on("submit.rails", u.formSubmitSelector, function(e) {
        var t, n, r = l(this), i = u.isRemote(r);
        if (!u.allowAction(r))
            return u.stopEverything(e);
        if (r.attr("novalidate") === c)
            if (r.data("ujs:formnovalidate-button") === c) {
                if ((t = u.blankInputs(r, u.requiredInputSelector, !1)) && u.fire(r, "ajax:aborted:required", [t]))
                    return u.stopEverything(e)
            } else
                r.data("ujs:formnovalidate-button", c);
        if (i) {
            if (n = u.nonBlankInputs(r, u.fileInputSelector)) {
                setTimeout(function() {
                    u.disableFormElements(r)
                }, 13);
                var o = u.fire(r, "ajax:aborted:file", [n]);
                return o || setTimeout(function() {
                    u.enableFormElements(r)
                }, 13),
                o
            }
            return u.handleRemote(r),
            !1
        }
        setTimeout(function() {
            u.disableFormElements(r)
        }, 13)
    }),
    e.on("click.rails", u.formInputClickSelector, function(e) {
        var t = l(this);
        if (!u.allowAction(t))
            return u.stopEverything(e);
        var n = t.attr("name")
          , r = n ? {
            name: n,
            value: t.val()
        } : null
          , i = t.closest("form");
        0 === i.length && (i = l("#" + t.attr("form"))),
        i.data("ujs:submit-button", r),
        i.data("ujs:formnovalidate-button", t.attr("formnovalidate")),
        i.data("ujs:submit-button-formaction", t.attr("formaction")),
        i.data("ujs:submit-button-formmethod", t.attr("formmethod"))
    }),
    e.on("ajax:send.rails", u.formSubmitSelector, function(e) {
        this === e.target && u.disableFormElements(l(this))
    }),
    e.on("ajax:complete.rails", u.formSubmitSelector, function(e) {
        this === e.target && u.enableFormElements(l(this))
    }),
    l(function() {
        u.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).client = e()
}(function() {
    return function c(r, i, o) {
        function a(t, e) {
            if (!i[t]) {
                if (!r[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n)
                        return n(t, !0);
                    if (s)
                        return s(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    n
                }
                n = i[t] = {
                    exports: {}
                },
                r[t][0].call(n.exports, function(e) {
                    return a(r[t][1][e] || e)
                }, n, n.exports, c, r, i, o)
            }
            return i[t].exports
        }
        for (var s = "function" == typeof require && require, e = 0; e < o.length; e++)
            a(o[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PromiseGlobal = void 0,
            e = r(e("promise-polyfill")),
            e = "undefined" != typeof Promise ? Promise : e["default"],
            n.PromiseGlobal = e
        }
        , {
            "promise-polyfill": 15
        }],
        2: [function(e, t) {
            "use strict";
            function n(n) {
                var e, t = JSON.stringify(n);
                if (!n.forceScriptReload && (e = s[t]))
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
                e = new a.PromiseGlobal(function(e, t) {
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
                s[t] = e
            }
            var a = e("./lib/promise")
              , s = {};
            n.clearCache = function() {
                s = {}
            }
            ,
            t.exports = n
        }
        , {
            "./lib/promise": 1
        }],
        3: [function(e, t) {
            t.exports = e("./dist/load-script")
        }
        , {
            "./dist/load-script": 2
        }],
        4: [function(e, t) {
            "use strict";
            var n = e("./is-ie11");
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE") || n(e)
            }
        }
        , {
            "./is-ie11": 5
        }],
        5: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Trident/7")
            }
        }
        , {}],
        6: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9")
            }
        }
        , {}],
        7: [function(e, t) {
            t.exports = e("./dist/is-ie")
        }
        , {
            "./dist/is-ie": 4
        }],
        8: [function(e, t) {
            t.exports = e("./dist/is-ie9")
        }
        , {
            "./dist/is-ie9": 6
        }],
        9: [function(e, t) {
            "use strict";
            function r(e) {
                var n = this;
                "function" != typeof e ? (this._promise = new r.Promise(function(e, t) {
                    n._resolveFunction = e,
                    n._rejectFunction = t
                }
                ),
                this._onResolve = (e = e || {}).onResolve || r.defaultOnResolve,
                this._onReject = e.onReject || r.defaultOnReject,
                r.shouldCatchExceptions(e) && this._promise["catch"](function() {}),
                this._resetState()) : this._promise = new r.Promise(e)
            }
            var n = "undefined" != typeof Promise ? Promise : null;
            r.defaultOnResolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.defaultOnReject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.setPromise = function(e) {
                r.Promise = e
            }
            ,
            r.shouldCatchExceptions = function(e) {
                return e.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(e.suppressUnhandledPromiseMessage) : Boolean(r.suppressUnhandledPromiseMessage)
            }
            ,
            r.all = function(e) {
                return r.Promise.all(e)
            }
            ,
            r.allSettled = function(e) {
                return r.Promise.allSettled(e)
            }
            ,
            r.race = function(e) {
                return r.Promise.race(e)
            }
            ,
            r.reject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.resolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.prototype.then = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).then.apply(e, t)
            }
            ,
            r.prototype["catch"] = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise)["catch"].apply(e, t)
            }
            ,
            r.prototype.resolve = function(e) {
                var t = this;
                return this.isFulfilled || (this._setResolved(),
                r.Promise.resolve().then(function() {
                    return t._onResolve(e)
                }).then(function(e) {
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    t._resetState(),
                    t.reject(e)
                })),
                this
            }
            ,
            r.prototype.reject = function(e) {
                var t = this;
                return this.isFulfilled || (this._setRejected(),
                r.Promise.resolve().then(function() {
                    return t._onReject(e)
                }).then(function(e) {
                    t._setResolved(),
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    return t._rejectFunction(e)
                })),
                this
            }
            ,
            r.prototype._resetState = function() {
                this.isFulfilled = !1,
                this.isResolved = !1,
                this.isRejected = !1
            }
            ,
            r.prototype._setResolved = function() {
                this.isFulfilled = !0,
                this.isResolved = !0,
                this.isRejected = !1
            }
            ,
            r.prototype._setRejected = function() {
                this.isFulfilled = !0,
                this.isResolved = !1,
                this.isRejected = !0
            }
            ,
            r.Promise = n,
            n = r;
            t.exports = n
        }
        , {}],
        10: [function(e, t) {
            "use strict";
            t.exports = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
        }
        , {}],
        11: [function(e, t, n) {
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
        12: [function(e, t, n) {
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
        13: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.promiseOrCallback = function(e, t) {
                if (!t)
                    return e;
                e.then(function(e) {
                    return t(null, e)
                })["catch"](function(e) {
                    return t(e)
                })
            }
        }
        , {}],
        14: [function(e, t) {
            "use strict";
            function n(r) {
                return function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return "function" == typeof t[t.length - 1] && (e = t.pop(),
                    e = o.once(i.deferred(e))),
                    a.promiseOrCallback(r.apply(this, t), e)
                }
            }
            var i = e("./lib/deferred")
              , o = e("./lib/once")
              , a = e("./lib/promise-or-callback");
            n.wrapPrototype = function(r, e) {
                var i = (e = void 0 === e ? {} : e).ignoreMethods || []
                  , o = !0 === e.transformPrivateMethods;
                return Object.getOwnPropertyNames(r.prototype).filter(function(e) {
                    var t = "constructor" !== e && "function" == typeof r.prototype[e]
                      , n = -1 === i.indexOf(e);
                    e = o || "_" !== e.charAt(0);
                    return t && e && n
                }).forEach(function(e) {
                    var t = r.prototype[e];
                    r.prototype[e] = n(t)
                }),
                r
            }
            ,
            t.exports = n
        }
        , {
            "./lib/deferred": 11,
            "./lib/once": 12,
            "./lib/promise-or-callback": 13
        }],
        15: [function(e, t) {
            "use strict";
            function c(e) {
                return Boolean(e && void 0 !== e.length)
            }
            function r() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                d(e, this)
            }
            function i(n, r) {
                for (; 3 === n._state; )
                    n = n._value;
                0 !== n._state ? (n._handled = !0,
                o._immediateFn(function() {
                    var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void s(r.promise, e)
                        }
                        a(r.promise, e)
                    } else
                        (1 === n._state ? a : s)(r.promise, n._value)
                })) : n._deferreds.push(r)
            }
            function a(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o)
                            return e._state = 3,
                            e._value = t,
                            void u(e);
                        if ("function" == typeof n)
                            return void d((r = n,
                            i = t,
                            function() {
                                r.apply(i, arguments)
                            }
                            ), e)
                    }
                    e._state = 1,
                    e._value = t,
                    u(e)
                } catch (t) {
                    s(e, t)
                }
                var r, i
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                u(e)
            }
            function u(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    i(e, e._deferreds[t]);
                e._deferreds = null
            }
            function l(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function d(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        s(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    s(t, e)
                }
            }
            var n = setTimeout;
            o.prototype["catch"] = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return i(this, new l(e,t,n)),
                n
            }
            ,
            o.prototype["finally"] = function(t) {
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
                return new o(function(r, i) {
                    if (!c(t))
                        return i(new TypeError("Promise.all accepts an array"));
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length)
                        return r([]);
                    for (var a = o.length, e = 0; e < o.length; e++)
                        !function s(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n)
                                        return void n.call(e, function(e) {
                                            s(t, e)
                                        }, i)
                                }
                                o[t] = e,
                                0 == --a && r(o)
                            } catch (e) {
                                i(e)
                            }
                        }(e, o[e])
                }
                )
            }
            ,
            o.allSettled = function(t) {
                return new this(function(r, e) {
                    if (!t || void 0 === t.length)
                        return e(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length)
                        return r([]);
                    for (var o = i.length, a = 0; a < i.length; a++)
                        !function a(t, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function(e) {
                                        a(t, e)
                                    }, function(e) {
                                        i[t] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        0 == --o && r(i)
                                    })
                            }
                            i[t] = {
                                status: "fulfilled",
                                value: e
                            },
                            0 == --o && r(i)
                        }(a, i[a])
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
                n(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            t.exports = o
        }
        , {}],
        16: [function(e, t) {
            "use strict";
            var n = e("@braintree/browser-detection/is-ie");
            e = e("@braintree/browser-detection/is-ie9");
            t.exports = {
                isIe: n,
                isIe9: e
            }
        }
        , {
            "@braintree/browser-detection/is-ie": 7,
            "@braintree/browser-detection/is-ie9": 8
        }],
        17: [function(e, t) {
            "use strict";
            function i(e) {
                var t, n;
                if (e = e || {},
                t = JSON.stringify(e),
                !(n = e.gatewayConfiguration))
                    throw new l(v.CLIENT_MISSING_GATEWAY_CONFIGURATION);
                ["assetsUrl", "clientApiUrl", "configUrl"].forEach(function(e) {
                    if (e in n && !a(n[e]))
                        throw new l({
                            type: v.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                            code: v.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                            message: e + " property is on an invalid domain."
                        })
                }),
                this.getConfiguration = function() {
                    return JSON.parse(t)
                }
                ,
                this._request = o,
                this._configuration = this.getConfiguration(),
                this._clientApiBaseUrl = n.clientApiUrl + "/v1/",
                n.graphQL && (this._graphQL = new r({
                    graphQL: n.graphQL
                }))
            }
            var u = e("./constants").BRAINTREE_VERSION
              , r = e("./request/graphql")
              , o = e("./request")
              , a = e("../lib/is-verified-domain")
              , l = e("../lib/braintree-error")
              , d = e("../lib/convert-to-braintree-error")
              , s = e("./get-configuration").getConfiguration
              , c = e("../lib/create-authorization-data")
              , p = e("../lib/add-metadata")
              , f = e("../lib/promise")
              , n = e("@braintree/wrap-promise")
              , h = e("../lib/once")
              , m = e("../lib/deferred")
              , y = e("../lib/assign").assign
              , g = e("../lib/analytics")
              , v = e("./errors")
              , _ = e("../lib/constants").VERSION
              , b = e("../lib/constants").GRAPHQL_URLS
              , E = e("../lib/methods")
              , T = e("../lib/convert-methods-to-error")
              , w = e("../lib/assets")
              , S = e("../lib/constants").FRAUDNET_FNCLS
              , A = e("../lib/constants").FRAUDNET_SOURCE
              , I = e("../lib/constants").FRAUDNET_URL
              , O = {};
            i.initialize = function(t) {
                var n, e, r = O[t.authorization];
                if (r)
                    return g.sendEvent(r, "custom.client.load.cached"),
                    r;
                try {
                    e = c(t.authorization)
                } catch (e) {
                    return f.reject(new l(v.CLIENT_INVALID_AUTHORIZATION))
                }
                return r = s(e).then(function(e) {
                    return t.debug && (e.isDebug = !0),
                    e.authorization = t.authorization,
                    n = new i(e)
                }),
                O[t.authorization] = r,
                g.sendEvent(r, "custom.client.load.initialized"),
                r.then(function(e) {
                    return g.sendEvent(n, "custom.client.load.succeeded"),
                    e
                })["catch"](function(e) {
                    return delete O[t.authorization],
                    f.reject(e)
                })
            }
            ,
            i.clearCache = function() {
                O = {}
            }
            ,
            i.prototype._findOrCreateFraudnetJSON = function(e) {
                var t, n, r = document.querySelector('script[fncls="' + S + '"]');
                r || ((r = document.body.appendChild(document.createElement("script"))).type = "application/json",
                r.setAttribute("fncls", S)),
                n = this.getConfiguration(),
                t = {
                    rda_tenant: "bt_card",
                    mid: n.gatewayConfiguration.merchantId
                },
                (n = n.authorizationFingerprint) && n.split("&").forEach(function(e) {
                    "customer_id" === (e = e.split("="))[0] && 1 < e.length && (t.cid = e[1])
                }),
                e = {
                    f: e.substr(0, 32),
                    fp: t,
                    bu: !1,
                    s: A
                },
                r.text = JSON.stringify(e)
            }
            ,
            i.prototype.request = function(s, n) {
                var c = this
                  , e = new f(function(r, i) {
                    var o, e, t, n, a = Boolean("payment_methods/credit_cards" === s.endpoint && c.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);
                    if ("graphQLApi" !== s.api && (s.method ? s.endpoint || (n = "options.endpoint") : n = "options.method"),
                    n)
                        throw new l({
                            type: v.CLIENT_OPTION_REQUIRED.type,
                            code: v.CLIENT_OPTION_REQUIRED.code,
                            message: n + " is required when making a request."
                        });
                    if (o = "api"in s ? s.api : "clientApi",
                    t = {
                        method: s.method,
                        graphQL: c._graphQL,
                        timeout: s.timeout,
                        metadata: c._configuration.analyticsMetadata
                    },
                    "clientApi" === o)
                        e = c._clientApiBaseUrl,
                        t.data = p(c._configuration, s.data);
                    else {
                        if ("graphQLApi" !== o)
                            throw new l({
                                type: v.CLIENT_OPTION_INVALID.type,
                                code: v.CLIENT_OPTION_INVALID.code,
                                message: "options.api is invalid."
                            });
                        e = b[c._configuration.gatewayConfiguration.environment],
                        s.endpoint = "",
                        t.method = "post",
                        t.data = y({
                            clientSdkMetadata: {
                                platform: c._configuration.analyticsMetadata.platform,
                                source: c._configuration.analyticsMetadata.source,
                                integration: c._configuration.analyticsMetadata.integration,
                                sessionId: c._configuration.analyticsMetadata.sessionId,
                                version: _
                            }
                        }, s.data),
                        t.headers = {
                            Authorization: "Bearer " + ((n = c._configuration).authorizationFingerprint || n.authorization),
                            "Braintree-Version": u
                        }
                    }
                    t.url = e + s.endpoint,
                    t.sendAnalyticsEvent = function(e) {
                        g.sendEvent(c, e)
                    }
                    ,
                    c._request(t, function(e, t, n) {
                        (e = function(e, t) {
                            var n;
                            if (-1 === e ? n = new l(v.CLIENT_REQUEST_TIMEOUT) : 401 === e ? n = new l(v.CLIENT_AUTHORIZATION_INVALID) : 403 === e ? n = new l(v.CLIENT_AUTHORIZATION_INSUFFICIENT) : 429 === e ? n = new l(v.CLIENT_RATE_LIMITED) : 500 <= e ? n = new l(v.CLIENT_GATEWAY_NETWORK) : (e < 200 || 400 <= e) && (n = d(t, {
                                type: v.CLIENT_REQUEST_ERROR.type,
                                code: v.CLIENT_REQUEST_ERROR.code,
                                message: v.CLIENT_REQUEST_ERROR.message
                            })),
                            n)
                                return n.details = n.details || {},
                                n.details.httpStatus = e,
                                n
                        }(n, e)) ? i(e) : "graphQLApi" === o && t.errors ? i(d(t.errors, {
                            type: v.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                            code: v.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                            message: v.CLIENT_GRAPHQL_REQUEST_ERROR.message
                        })) : (t = y({
                            _httpStatus: n
                        }, t),
                        a && t.creditCards && 0 < t.creditCards.length && (c._findOrCreateFraudnetJSON(t.creditCards[0].nonce),
                        w.loadScript({
                            src: I,
                            forceScriptReload: !0
                        })),
                        r(t))
                    })
                }
                );
                return "function" == typeof n ? (n = h(m(n)),
                void e.then(function(e) {
                    n(null, e, e._httpStatus)
                })["catch"](function(e) {
                    var t = e && e.details && e.details.httpStatus;
                    n(e, null, t)
                })) : e
            }
            ,
            i.prototype.toJSON = function() {
                return this.getConfiguration()
            }
            ,
            i.prototype.getVersion = function() {
                return _
            }
            ,
            i.prototype.teardown = n(function() {
                return delete O[this.getConfiguration().authorization],
                T(this, E(i.prototype)),
                f.resolve()
            }),
            t.exports = i
        }
        , {
            "../lib/add-metadata": 38,
            "../lib/analytics": 39,
            "../lib/assets": 40,
            "../lib/assign": 41,
            "../lib/braintree-error": 42,
            "../lib/constants": 43,
            "../lib/convert-methods-to-error": 44,
            "../lib/convert-to-braintree-error": 45,
            "../lib/create-authorization-data": 46,
            "../lib/deferred": 47,
            "../lib/is-verified-domain": 51,
            "../lib/methods": 53,
            "../lib/once": 54,
            "../lib/promise": 55,
            "./constants": 18,
            "./errors": 19,
            "./get-configuration": 20,
            "./request": 32,
            "./request/graphql": 30,
            "@braintree/wrap-promise": 14
        }],
        18: [function(e, t) {
            "use strict";
            t.exports = {
                BRAINTREE_VERSION: "2018-05-10"
            }
        }
        , {}],
        19: [function(e, t) {
            "use strict";
            e = e("../lib/braintree-error"),
            t.exports = {
                CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"
                },
                CLIENT_OPTION_REQUIRED: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_OPTION_REQUIRED"
                },
                CLIENT_OPTION_INVALID: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_OPTION_INVALID"
                },
                CLIENT_MISSING_GATEWAY_CONFIGURATION: {
                    type: e.types.INTERNAL,
                    code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
                    message: "Missing gatewayConfiguration."
                },
                CLIENT_INVALID_AUTHORIZATION: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_INVALID_AUTHORIZATION",
                    message: "Authorization is invalid. Make sure your client token or tokenization key is valid."
                },
                CLIENT_GATEWAY_NETWORK: {
                    type: e.types.NETWORK,
                    code: "CLIENT_GATEWAY_NETWORK",
                    message: "Cannot contact the gateway at this time."
                },
                CLIENT_REQUEST_TIMEOUT: {
                    type: e.types.NETWORK,
                    code: "CLIENT_REQUEST_TIMEOUT",
                    message: "Request timed out waiting for a reply."
                },
                CLIENT_REQUEST_ERROR: {
                    type: e.types.NETWORK,
                    code: "CLIENT_REQUEST_ERROR",
                    message: "There was a problem with your request."
                },
                CLIENT_GRAPHQL_REQUEST_ERROR: {
                    type: e.types.NETWORK,
                    code: "CLIENT_GRAPHQL_REQUEST_ERROR",
                    message: "There was a problem with your request."
                },
                CLIENT_RATE_LIMITED: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_RATE_LIMITED",
                    message: "You are being rate-limited; please try again in a few minutes."
                },
                CLIENT_AUTHORIZATION_INSUFFICIENT: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
                    message: "The authorization used has insufficient privileges."
                },
                CLIENT_AUTHORIZATION_INVALID: {
                    type: e.types.MERCHANT,
                    code: "CLIENT_AUTHORIZATION_INVALID",
                    message: "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted."
                }
            }
        }
        , {
            "../lib/braintree-error": 42
        }],
        20: [function(e, t) {
            "use strict";
            var c = e("../lib/braintree-error")
              , n = e("../lib/promise")
              , r = e("@braintree/wrap-promise")
              , u = e("./request")
              , l = e("@braintree/uuid")
              , d = e("../lib/constants")
              , p = e("./errors")
              , f = e("./request/graphql")
              , h = e("../lib/constants").GRAPHQL_URLS
              , m = e("../lib/is-date-string-before-or-on")
              , y = e("./constants").BRAINTREE_VERSION;
            t.exports = {
                getConfiguration: r(function(t) {
                    return new n(function(r, i) {
                        var o, e = l(), a = {
                            merchantAppId: window.location.host,
                            platform: d.PLATFORM,
                            sdkVersion: d.VERSION,
                            source: d.SOURCE,
                            integration: d.INTEGRATION,
                            integrationType: d.INTEGRATION,
                            sessionId: e
                        }, s = t.attrs;
                        e = t.configUrl;
                        s._meta = a,
                        s.braintreeLibraryVersion = d.BRAINTREE_LIBRARY_VERSION,
                        s.configVersion = "3",
                        e = {
                            url: e,
                            method: "GET",
                            data: s
                        },
                        s.authorizationFingerprint && t.graphQL ? (m(t.graphQL.date, y) && (e.graphQL = new f({
                            graphQL: {
                                url: t.graphQL.url,
                                features: ["configuration"]
                            }
                        })),
                        e.metadata = a) : s.tokenizationKey && (e.graphQL = new f({
                            graphQL: {
                                url: h[t.environment],
                                features: ["configuration"]
                            }
                        }),
                        e.metadata = a),
                        u(e, function(e, t, n) {
                            return e ? (n = 403 === n ? p.CLIENT_AUTHORIZATION_INSUFFICIENT : 401 === n ? p.CLIENT_AUTHORIZATION_INVALID : p.CLIENT_GATEWAY_NETWORK,
                            void i(new c({
                                type: n.type,
                                code: n.code,
                                message: n.message,
                                details: {
                                    originalError: e
                                }
                            }))) : (o = {
                                authorizationType: s.tokenizationKey ? "TOKENIZATION_KEY" : "CLIENT_TOKEN",
                                authorizationFingerprint: s.authorizationFingerprint,
                                analyticsMetadata: a,
                                gatewayConfiguration: t
                            },
                            void r(o))
                        })
                    }
                    )
                })
            }
        }
        , {
            "../lib/braintree-error": 42,
            "../lib/constants": 43,
            "../lib/is-date-string-before-or-on": 50,
            "../lib/promise": 55,
            "./constants": 18,
            "./errors": 19,
            "./request": 32,
            "./request/graphql": 30,
            "@braintree/uuid": 10,
            "@braintree/wrap-promise": 14
        }],
        21: [function(e, t) {
            "use strict";
            var n = e("../lib/braintree-error")
              , r = e("./client")
              , i = e("../lib/promise")
              , o = e("@braintree/wrap-promise")
              , a = e("../lib/errors");
            t.exports = {
                create: o(function(e) {
                    return e.authorization ? r.initialize(e) : i.reject(new n({
                        type: a.INSTANTIATION_OPTION_REQUIRED.type,
                        code: a.INSTANTIATION_OPTION_REQUIRED.code,
                        message: "options.authorization is required when instantiating a client."
                    }))
                }),
                VERSION: "3.82.0"
            }
        }
        , {
            "../lib/braintree-error": 42,
            "../lib/errors": 49,
            "../lib/promise": 55,
            "./client": 17,
            "@braintree/wrap-promise": 14
        }],
        22: [function(e, t) {
            "use strict";
            function m(t, n, r) {
                var i, o, a, e, s, c, u = t.url, l = t.graphQL, d = t.timeout, p = b.getRequestObject(), f = r, h = Boolean(l && l.isGraphQLRequest(u, t.data));
                t.headers = g({
                    "Content-Type": "application/json"
                }, t.headers),
                u = (a = new (h ? T : w)(t)).getUrl(),
                e = a.getBody(),
                l = a.getMethod(),
                s = a.getHeaders(),
                "GET" === l && (u = y.queryify(u, e),
                e = null),
                E ? p.onreadystatechange = function() {
                    if (4 === p.readyState) {
                        if (0 === p.status && h)
                            return delete t.graphQL,
                            void m(t, n, r);
                        if (c = _(p.responseText),
                        o = a.adaptResponseBody(c),
                        400 <= (i = a.determineStatus(p.status, c)) || i < 200) {
                            if (h && ("UNKNOWN" === (e = !(e = c).data && e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass) || "INTERNAL" === e))
                                return delete t.graphQL,
                                void m(t, n, r);
                            n < S && (!(e = i) || e === A) ? m(t, ++n, r) : f(o || "error", null, i || 500)
                        } else
                            f(null, o, i);
                        var e
                    }
                }
                : (t.headers && (u = y.queryify(u, s)),
                p.onload = function() {
                    f(null, _(p.responseText), p.status)
                }
                ,
                p.onerror = function() {
                    f("error", null, 500)
                }
                ,
                p.onprogress = function() {}
                ,
                p.ontimeout = function() {
                    f("timeout", null, -1)
                }
                );
                try {
                    p.open(l, u, !0)
                } catch (e) {
                    if (!h)
                        throw e;
                    return delete t.graphQL,
                    void m(t, n, r)
                }
                p.timeout = d,
                E && Object.keys(s).forEach(function(e) {
                    p.setRequestHeader(e, s[e])
                });
                try {
                    p.send(v(l, e))
                } catch (e) {}
            }
            var y = e("../../lib/querystring")
              , g = e("../../lib/assign").assign
              , v = e("./prep-body")
              , _ = e("./parse-body")
              , b = e("./xhr")
              , E = b.isAvailable
              , T = e("./graphql/request")
              , w = e("./default-request")
              , S = 1
              , A = 408;
            t.exports = {
                request: function(e, t) {
                    m(e, 0, t)
                }
            }
        }
        , {
            "../../lib/assign": 41,
            "../../lib/querystring": 56,
            "./default-request": 23,
            "./graphql/request": 31,
            "./parse-body": 35,
            "./prep-body": 36,
            "./xhr": 37
        }],
        23: [function(e, t) {
            "use strict";
            function n(e) {
                this._url = e.url,
                this._data = e.data,
                this._method = e.method,
                this._headers = e.headers
            }
            n.prototype.getUrl = function() {
                return this._url
            }
            ,
            n.prototype.getBody = function() {
                return this._data
            }
            ,
            n.prototype.getMethod = function() {
                return this._method
            }
            ,
            n.prototype.getHeaders = function() {
                return this._headers
            }
            ,
            n.prototype.adaptResponseBody = function(e) {
                return e
            }
            ,
            n.prototype.determineStatus = function(e) {
                return e
            }
            ,
            t.exports = n
        }
        , {}],
        24: [function(e, t) {
            "use strict";
            t.exports = function() {
                return window.navigator.userAgent
            }
        }
        , {}],
        25: [function(e, t) {
            "use strict";
            function o(e, n) {
                return e.reduce(function(e, t) {
                    return n.hasOwnProperty(t) ? e.concat(n[t]) : e
                }, [])
            }
            var a = e("./error")
              , s = e("../../../../lib/assign").assign
              , c = {
                creditCard: {
                    AMERICAN_EXPRESS: "American Express",
                    DISCOVER: "Discover",
                    INTERNATIONAL_MAESTRO: "Maestro",
                    JCB: "JCB",
                    MASTERCARD: "MasterCard",
                    SOLO: "Solo",
                    UK_MAESTRO: "UK Maestro",
                    UNION_PAY: "UnionPay",
                    VISA: "Visa"
                },
                applePayWeb: {
                    VISA: "visa",
                    MASTERCARD: "mastercard",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    INTERNATIONAL_MAESTRO: "maestro",
                    ELO: "elo"
                },
                visaCheckout: {
                    VISA: "Visa",
                    MASTERCARD: "MasterCard",
                    DISCOVER: "Discover",
                    AMERICAN_EXPRESS: "American Express"
                },
                googlePay: {
                    VISA: "visa",
                    MASTERCARD: "mastercard",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    INTERNATIONAL_MAESTRO: "maestro",
                    ELO: "elo"
                },
                masterpass: {
                    VISA: "visa",
                    MASTERCARD: "master",
                    DISCOVER: "discover",
                    AMERICAN_EXPRESS: "amex",
                    DINERS: "diners",
                    INTERNATIONAL_MAESTRO: "maestro",
                    JCB: "jcb"
                }
            };
            t.exports = function(e, t) {
                return e.data && !e.errors ? (r = t,
                n = {
                    environment: (i = (n = e).data.clientConfiguration).environment.toLowerCase(),
                    clientApiUrl: i.clientApiUrl,
                    assetsUrl: i.assetsUrl,
                    analytics: {
                        url: i.analyticsUrl
                    },
                    merchantId: i.merchantId,
                    venmo: "off"
                },
                i.supportedFeatures && (n.graphQL = {
                    url: r._graphQL._config.url,
                    features: i.supportedFeatures.map(function(e) {
                        return e.toLowerCase()
                    })
                }),
                i.braintreeApi && (n.braintreeApi = i.braintreeApi),
                i.applePayWeb && (n.applePayWeb = i.applePayWeb,
                n.applePayWeb.supportedNetworks = o(i.applePayWeb.supportedCardBrands, c.applePayWeb),
                delete n.applePayWeb.supportedCardBrands),
                i.ideal && (n.ideal = i.ideal),
                i.kount && (n.kount = {
                    kountMerchantId: i.kount.merchantId
                }),
                i.creditCard ? (n.challenges = i.creditCard.challenges.map(function(e) {
                    return e.toLowerCase()
                }),
                n.creditCards = {
                    supportedCardTypes: o(i.creditCard.supportedCardBrands, c.creditCard)
                },
                n.threeDSecureEnabled = i.creditCard.threeDSecureEnabled,
                n.threeDSecure = i.creditCard.threeDSecure) : (n.challenges = [],
                n.creditCards = {
                    supportedCardTypes: []
                },
                n.threeDSecureEnabled = !1),
                i.googlePay && (n.androidPay = {
                    displayName: i.googlePay.displayName,
                    enabled: !0,
                    environment: i.googlePay.environment.toLowerCase(),
                    googleAuthorizationFingerprint: i.googlePay.googleAuthorization,
                    paypalClientId: i.googlePay.paypalClientId,
                    supportedNetworks: o(i.googlePay.supportedCardBrands, c.googlePay)
                }),
                i.venmo && (n.payWithVenmo = {
                    merchantId: i.venmo.merchantId,
                    accessToken: i.venmo.accessToken,
                    environment: i.venmo.environment.toLowerCase()
                }),
                i.paypal ? (n.paypalEnabled = !0,
                n.paypal = s({}, i.paypal),
                n.paypal.currencyIsoCode = n.paypal.currencyCode,
                n.paypal.environment = n.paypal.environment.toLowerCase(),
                delete n.paypal.currencyCode) : n.paypalEnabled = !1,
                i.unionPay && (n.unionPay = {
                    enabled: !0,
                    merchantAccountId: i.unionPay.merchantAccountId
                }),
                i.visaCheckout && (n.visaCheckout = {
                    apikey: i.visaCheckout.apiKey,
                    encryptionKey: i.visaCheckout.encryptionKey,
                    externalClientId: i.visaCheckout.externalClientId,
                    supportedCardTypes: o(i.visaCheckout.supportedCardBrands, c.visaCheckout)
                }),
                i.masterpass && (n.masterpass = {
                    merchantCheckoutId: i.masterpass.merchantCheckoutId,
                    supportedNetworks: o(i.masterpass.supportedCardBrands, c.masterpass)
                }),
                i.usBankAccount && (n.usBankAccount = {
                    routeId: i.usBankAccount.routeId,
                    plaid: {
                        publicKey: i.usBankAccount.plaidPublicKey
                    }
                }),
                n) : a(e);
                var n, r, i
            }
        }
        , {
            "../../../../lib/assign": 41,
            "./error": 27
        }],
        26: [function(e, t) {
            "use strict";
            var n = e("./error")
              , i = {
                AMERICAN_EXPRESS: "American Express",
                DINERS: "Discover",
                DISCOVER: "Discover",
                INTERNATIONAL_MAESTRO: "Maestro",
                JCB: "JCB",
                MASTERCARD: "MasterCard",
                UK_MAESTRO: "Maestro",
                UNION_PAY: "Union Pay",
                VISA: "Visa"
            }
              , o = {
                YES: "Yes",
                NO: "No",
                UNKNOWN: "Unknown"
            }
              , a = {
                PSDTWO: "psd2"
            };
            t.exports = function(e) {
                return (e.data && !e.errors ? function(e) {
                    var t = e.data.tokenizeCreditCard
                      , n = t.creditCard
                      , r = (e = n.last4 ? n.last4.substr(2, 4) : "",
                    n.binData);
                    return r && (["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"].forEach(function(e) {
                        r[e] ? r[e] = o[r[e]] : r[e] = "Unknown"
                    }),
                    ["issuingBank", "countryOfIssuance", "productId"].forEach(function(e) {
                        r[e] || (r[e] = "Unknown")
                    })),
                    e = {
                        creditCards: [{
                            binData: r,
                            consumed: !1,
                            description: e ? "ending in " + e : "",
                            nonce: t.token,
                            details: {
                                cardholderName: n.cardholderName,
                                expirationMonth: n.expirationMonth,
                                expirationYear: n.expirationYear,
                                bin: n.bin || "",
                                cardType: i[n.brandCode] || "Unknown",
                                lastFour: n.last4 || "",
                                lastTwo: e
                            },
                            type: "CreditCard",
                            threeDSecureInfo: null
                        }]
                    },
                    t.authenticationInsight && (t = t.authenticationInsight.customerAuthenticationRegulationEnvironment,
                    e.creditCards[0].authenticationInsight = {
                        regulationEnvironment: a[t] || t.toLowerCase()
                    }),
                    e
                }
                : n)(e)
            }
        }
        , {
            "./error": 27
        }],
        27: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                var t, n, r, i, o, a = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
                return "VALIDATION" === a ? 0 !== (i = (t = e).errors,
                o = [],
                i.forEach(function(a) {
                    a.extensions && a.extensions.inputPath && function a(e, t, n) {
                        var r, i = t.extensions.legacyCode, o = e[0];
                        1 !== e.length ? (n.forEach(function(e) {
                            e.field === o && (r = e)
                        }),
                        r || (r = {
                            field: o,
                            fieldErrors: []
                        },
                        n.push(r)),
                        a(e.slice(1), t, r.fieldErrors)) : n.push({
                            code: i,
                            field: o,
                            message: t.message
                        })
                    }(a.extensions.inputPath.slice(1), a, o)
                }),
                n = o).length ? {
                    error: {
                        message: (r = n,
                        {
                            creditCard: "Credit card is invalid"
                        }[r = r[0].field])
                    },
                    fieldErrors: n
                } : {
                    error: {
                        message: t.errors[0].message
                    }
                } : a ? {
                    error: {
                        message: e.errors[0].message
                    },
                    fieldErrors: []
                } : {
                    error: {
                        message: "There was a problem serving your request"
                    },
                    fieldErrors: []
                }
            }
        }
        , {}],
        28: [function(e, t) {
            "use strict";
            t.exports = function() {
                return {
                    query: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",
                    operationName: "ClientConfiguration"
                }
            }
        }
        , {}],
        29: [function(e, t) {
            "use strict";
            function i(e, t) {
                var n, r, i, o = (c = e.creditCard) && c.billingAddress, a = c && c.expirationDate, s = c && (c.expirationMonth || a && a.split("/")[0].trim()), c = (a = c && (c.expirationYear || a && a.split("/")[1].trim()),
                {
                    input: {
                        creditCard: {
                            number: c && c.number,
                            expirationMonth: s,
                            expirationYear: a,
                            cvv: c && c.cvv,
                            cardholderName: c && c.cardholderName
                        },
                        options: {}
                    }
                });
                return t.hasAuthenticationInsight && (c.authenticationInsightInput = {
                    merchantAccountId: e.merchantAccountId
                }),
                o && (c.input.creditCard.billingAddress = o),
                c.input = (n = e,
                r = c.input,
                n.creditCard && n.creditCard.options && "boolean" == typeof n.creditCard.options.validate ? i = n.creditCard.options.validate : n.authorizationFingerprint && n.tokenizationKey || n.authorizationFingerprint ? i = !0 : n.tokenizationKey && (i = !1),
                "boolean" == typeof i && (r.options = u({
                    validate: i
                }, r.options)),
                r),
                c
            }
            var u = e("../../../../lib/assign").assign;
            t.exports = function(e) {
                var t, n, r = {
                    hasAuthenticationInsight: Boolean(e.authenticationInsight && e.merchantAccountId)
                };
                return {
                    query: (n = (t = r).hasAuthenticationInsight,
                    t = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!",
                    n && (t += ", $authenticationInsightInput: AuthenticationInsightInput!"),
                    t += ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } ",
                    n && (t += "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }"),
                    t += "  } }"),
                    variables: i(e, r),
                    operationName: "TokenizeCreditCard"
                }
            }
        }
        , {
            "../../../../lib/assign": 41
        }],
        30: [function(e, t) {
            "use strict";
            function n(e) {
                this._config = e.graphQL
            }
            var i = e("../../browser-detection")
              , o = {
                tokenize_credit_cards: "payment_methods/credit_cards",
                configuration: "configuration"
            }
              , a = ["creditCard.options.unionPayEnrollment"];
            n.prototype.getGraphQLEndpoint = function() {
                return this._config.url
            }
            ,
            n.prototype.isGraphQLRequest = function(e, t) {
                var n, r = this.getClientApiPath(e);
                return !(!this._isGraphQLEnabled() || !r || i.isIe9()) && (e = this._config.features.some(function(e) {
                    return o[e] === r
                }),
                n = t,
                !a.some(function(e) {
                    return void 0 !== e.split(".").reduce(function(e, t) {
                        return e && e[t]
                    }, n)
                }) && e)
            }
            ,
            n.prototype.getClientApiPath = function(e) {
                var t;
                return 1 < (e = e.split("/client_api/v1/")).length ? e[1].split("?")[0] : t
            }
            ,
            n.prototype._isGraphQLEnabled = function() {
                return Boolean(this._config)
            }
            ,
            t.exports = n
        }
        , {
            "../../browser-detection": 16
        }],
        31: [function(e, t) {
            "use strict";
            function n(e) {
                var t = e.graphQL.getClientApiPath(e.url);
                this._graphQL = e.graphQL,
                this._data = e.data,
                this._method = e.method,
                this._headers = e.headers,
                this._clientSdkMetadata = {
                    source: e.metadata.source,
                    integration: e.metadata.integration,
                    sessionId: e.metadata.sessionId
                },
                this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype,
                this._generator = u[t],
                this._adapter = l[t],
                this._sendAnalyticsEvent("graphql.init")
            }
            function o(e) {
                return -1 === e.indexOf("_") ? e : e.toLowerCase().replace(/(\_\w)/g, function(e) {
                    return e[1].toUpperCase()
                })
            }
            var r = e("../../constants").BRAINTREE_VERSION
              , a = e("../../../lib/assign").assign
              , i = e("./generators/credit-card-tokenization")
              , s = e("./adapters/credit-card-tokenization")
              , c = e("./generators/configuration")
              , u = (e = e("./adapters/configuration"),
            {
                "payment_methods/credit_cards": i,
                configuration: c
            })
              , l = {
                "payment_methods/credit_cards": s,
                configuration: e
            };
            n.prototype.getUrl = function() {
                return this._graphQL.getGraphQLEndpoint()
            }
            ,
            n.prototype.getBody = function() {
                var e = function i(n) {
                    var r = {};
                    return Object.keys(n).forEach(function(e) {
                        var t = o(e);
                        "object" == typeof n[e] ? r[t] = i(n[e]) : "number" == typeof n[e] ? r[t] = String(n[e]) : r[t] = n[e]
                    }),
                    r
                }(this._data);
                e = this._generator(e),
                e = a({
                    clientSdkMetadata: this._clientSdkMetadata
                }, e);
                return JSON.stringify(e)
            }
            ,
            n.prototype.getMethod = function() {
                return "POST"
            }
            ,
            n.prototype.getHeaders = function() {
                var e = this._data.authorizationFingerprint ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"),
                this._data.authorizationFingerprint) : (this._sendAnalyticsEvent("graphql.tokenization-key"),
                this._data.tokenizationKey);
                return a({}, this._headers, {
                    Authorization: "Bearer " + e,
                    "Braintree-Version": r
                })
            }
            ,
            n.prototype.adaptResponseBody = function(e) {
                return this._adapter(e, this)
            }
            ,
            n.prototype.determineStatus = function(e, t) {
                var n, r = 200 === e ? (n = t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorClass,
                t.data && !t.errors ? 200 : "VALIDATION" === n ? 422 : "AUTHORIZATION" === n ? 403 : "AUTHENTICATION" === n ? 401 : (r = t,
                !n && r.errors[0].message ? 403 : 500)) : e || 500;
                return this._sendAnalyticsEvent("graphql.status." + e),
                this._sendAnalyticsEvent("graphql.determinedStatus." + r),
                r
            }
            ,
            t.exports = n
        }
        , {
            "../../../lib/assign": 41,
            "../../constants": 18,
            "./adapters/configuration": 25,
            "./adapters/credit-card-tokenization": 26,
            "./generators/configuration": 28,
            "./generators/credit-card-tokenization": 29
        }],
        32: [function(e, t) {
            "use strict";
            var n, r = e("../../lib/once"), i = e("./jsonp-driver"), o = e("./ajax-driver"), a = e("./get-user-agent"), s = e("./is-http");
            t.exports = function(e, t) {
                t = r(t || Function.prototype),
                e.method = (e.method || "GET").toUpperCase(),
                e.timeout = null == e.timeout ? 6e4 : e.timeout,
                e.data = e.data || {},
                ((n = null == n ? !(s() && /MSIE\s(8|9)/.test(a())) : n) ? o : i).request(e, t)
            }
        }
        , {
            "../../lib/once": 54,
            "./ajax-driver": 22,
            "./get-user-agent": 24,
            "./is-http": 33,
            "./jsonp-driver": 34
        }],
        33: [function(e, t) {
            "use strict";
            t.exports = function() {
                return "http:" === window.location.protocol
            }
        }
        , {}],
        34: [function(t, e) {
            "use strict";
            function l(e) {
                try {
                    delete window[e]
                } catch (t) {
                    window[e] = null
                }
            }
            function d(i, o, a) {
                window[a] = function(e) {
                    var t = e.status || 500
                      , n = null
                      , r = null;
                    delete e.status,
                    400 <= t || t < 200 ? n = e : r = e,
                    l(a),
                    (e = i) && e.parentNode && e.parentNode.removeChild(e),
                    clearTimeout(m[a]),
                    o(n, r, t)
                }
            }
            var p, f = t("@braintree/uuid"), h = t("../../lib/querystring"), m = {};
            e.exports = {
                request: function(e, t) {
                    var n, r, i, o, a = "callback_json_" + f().replace(/-/g, ""), s = e.url, c = e.data, u = e.method;
                    e = e.timeout,
                    s = h.queryify(s, c);
                    s = s = h.queryify(s, {
                        _method: u,
                        callback: a
                    }),
                    n = a,
                    r = document.createElement("script"),
                    i = !1,
                    r.src = s,
                    r.async = !0,
                    r.onerror = function() {
                        window[n]({
                            message: "error",
                            status: 500
                        })
                    }
                    ,
                    r.onload = r.onreadystatechange = function() {
                        i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0,
                        r.onload = r.onreadystatechange = null)
                    }
                    ,
                    d(s = r, t, a),
                    m[o = a] = setTimeout(function() {
                        m[o] = null,
                        window[o]({
                            error: "timeout",
                            status: -1
                        }),
                        window[o] = function() {
                            l(o)
                        }
                    }, e),
                    (p = p || document.getElementsByTagName("head")[0]).appendChild(s)
                }
            }
        }
        , {
            "../../lib/querystring": 56,
            "@braintree/uuid": 10
        }],
        35: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                try {
                    e = JSON.parse(e)
                } catch (e) {}
                return e
            }
        }
        , {}],
        36: [function(e, t) {
            "use strict";
            t.exports = function(e, t) {
                if ("string" != typeof e)
                    throw new Error("Method must be a string");
                return "get" !== e.toLowerCase() && null != t ? "string" == typeof t ? t : JSON.stringify(t) : t
            }
        }
        , {}],
        37: [function(e, t) {
            "use strict";
            var n = "undefined" != typeof window && window.XMLHttpRequest && "withCredentials"in new window.XMLHttpRequest;
            t.exports = {
                isAvailable: n,
                getRequestObject: function() {
                    return new (n ? window.XMLHttpRequest : window.XDomainRequest)
                }
            }
        }
        , {}],
        38: [function(e, t) {
            "use strict";
            var o = e("./create-authorization-data")
              , a = e("./json-clone")
              , s = e("./constants");
            t.exports = function(e, t) {
                var n, r = t ? a(t) : {}, i = (t = o(e.authorization).attrs,
                a(e.analyticsMetadata));
                for (n in r.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION,
                r._meta)
                    r._meta.hasOwnProperty(n) && (i[n] = r._meta[n]);
                return r._meta = i,
                t.tokenizationKey ? r.tokenizationKey = t.tokenizationKey : r.authorizationFingerprint = t.authorizationFingerprint,
                r
            }
        }
        , {
            "./constants": 43,
            "./create-authorization-data": 46,
            "./json-clone": 52
        }],
        39: [function(e, t) {
            "use strict";
            var n = e("./promise")
              , s = e("./constants")
              , c = e("./add-metadata");
            t.exports = {
                sendEvent: function(e, i, o) {
                    var a = Date.now();
                    return n.resolve(e).then(function(e) {
                        var t = Date.now()
                          , n = e.getConfiguration()
                          , r = e._request;
                        e = n.gatewayConfiguration.analytics.url,
                        t = {
                            analytics: [{
                                kind: s.ANALYTICS_PREFIX + i,
                                isAsync: Math.floor(t / 1e3) !== Math.floor(a / 1e3),
                                timestamp: a
                            }]
                        };
                        r({
                            url: e,
                            method: "post",
                            data: c(n, t),
                            timeout: s.ANALYTICS_REQUEST_TIMEOUT_MS
                        }, o)
                    })
                }
            }
        }
        , {
            "./add-metadata": 38,
            "./constants": 43,
            "./promise": 55
        }],
        40: [function(e, t) {
            "use strict";
            e = e("@braintree/asset-loader/load-script"),
            t.exports = {
                loadScript: e
            }
        }
        , {
            "@braintree/asset-loader/load-script": 3
        }],
        41: [function(e, t) {
            "use strict";
            function n(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                    for (n in t = arguments[r])
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            var r = "function" == typeof Object.assign ? Object.assign : n;
            t.exports = {
                assign: r,
                _assign: n
            }
        }
        , {}],
        42: [function(e, t) {
            "use strict";
            function n(e) {
                if (!n.types.hasOwnProperty(e.type))
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
            e = e("./enumerate"),
            ((n.prototype = Object.create(Error.prototype)).constructor = n).types = e(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]),
            n.findRootError = function(e) {
                return e instanceof n && e.details && e.details.originalError ? n.findRootError(e.details.originalError) : e
            }
            ,
            t.exports = n
        }
        , {
            "./enumerate": 48
        }],
        43: [function(e, t) {
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
        44: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./errors");
            t.exports = function(t, e) {
                e.forEach(function(e) {
                    t[e] = function() {
                        throw new n({
                            type: r.METHOD_CALLED_AFTER_TEARDOWN.type,
                            code: r.METHOD_CALLED_AFTER_TEARDOWN.code,
                            message: e + " cannot be called after teardown."
                        })
                    }
                })
            }
        }
        , {
            "./braintree-error": 42,
            "./errors": 49
        }],
        45: [function(e, t) {
            "use strict";
            var n = e("./braintree-error");
            t.exports = function(e, t) {
                return e instanceof n ? e : new n({
                    type: t.type,
                    code: t.code,
                    message: t.message,
                    details: {
                        originalError: e
                    }
                })
            }
        }
        , {
            "./braintree-error": 42
        }],
        46: [function(e, t) {
            "use strict";
            var i = e("../lib/vendor/polyfill").atob
              , o = e("../lib/constants").CLIENT_API_URLS;
            t.exports = function(e) {
                var t, n, r = {
                    attrs: {},
                    configUrl: ""
                };
                return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (t = (n = (t = e).split("_"))[0],
                t = {
                    merchantId: n.slice(2).join("_"),
                    environment: t
                },
                r.environment = t.environment,
                r.attrs.tokenizationKey = e,
                r.configUrl = o[t.environment] + "/merchants/" + t.merchantId + "/client_api/v1/configuration") : (e = JSON.parse(i(e)),
                r.environment = e.environment,
                r.attrs.authorizationFingerprint = e.authorizationFingerprint,
                r.configUrl = e.configUrl,
                r.graphQL = e.graphQL),
                r
            }
        }
        , {
            "../lib/constants": 43,
            "../lib/vendor/polyfill": 57
        }],
        47: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return function() {
                    var e = arguments;
                    setTimeout(function() {
                        t.apply(null, e)
                    }, 1)
                }
            }
        }
        , {}],
        48: [function(e, t) {
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
        49: [function(e, t) {
            "use strict";
            e = e("./braintree-error"),
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
            "./braintree-error": 42
        }],
        50: [function(e, t) {
            "use strict";
            function n(e) {
                return e = e.split("-"),
                new Date(e[0],e[1],e[2])
            }
            t.exports = function(e, t) {
                return n(e) <= n(t)
            }
        }
        , {}],
        51: [function(e, t) {
            "use strict";
            var n, r = {
                "paypal.com": 1,
                "braintreepayments.com": 1,
                "braintreegateway.com": 1,
                "braintree-api.com": 1
            };
            t.exports = function(e) {
                return e = e.toLowerCase(),
                !!/^https:/.test(e) && ((n = n || document.createElement("a")).href = e,
                e = n.hostname.split(".").slice(-2).join("."),
                r.hasOwnProperty(e))
            }
        }
        , {}],
        52: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }
        , {}],
        53: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return Object.keys(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            }
        }
        , {}],
        54: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    e.apply(null, arguments))
                }
            }
        }
        , {}],
        55: [function(e, t) {
            "use strict";
            var n = e("promise-polyfill");
            e = e("@braintree/extended-promise"),
            n = "undefined" != typeof Promise ? Promise : n;
            e.suppressUnhandledPromiseMessage = !0,
            e.setPromise(n),
            t.exports = n
        }
        , {
            "@braintree/extended-promise": 9,
            "promise-polyfill": 15
        }],
        56: [function(e, t) {
            "use strict";
            function n(e) {
                return e = e || window.location.href,
                /\?/.test(e)
            }
            function a(e, t) {
                var n, r, i, o = [];
                for (r in e)
                    e.hasOwnProperty(r) && (n = e[r],
                    i = t ? (i = e) && "object" == typeof i && "number" == typeof i.length && "[object Array]" === Object.prototype.toString.call(i) ? t + "[]" : t + "[" + r + "]" : r,
                    "object" == typeof n ? o.push(a(n, i)) : o.push(encodeURIComponent(i) + "=" + encodeURIComponent(n)));
                return o.join("&")
            }
            t.exports = {
                parse: function(e) {
                    return n(e = e || window.location.href) ? e.replace(/#.*$/, "").replace(/^.*\?/, "").split("&").reduce(function(e, t) {
                        var n = t.split("=");
                        t = decodeURIComponent(n[0]),
                        n = decodeURIComponent(n[1]);
                        return e[t] = n,
                        e
                    }, {}) : {}
                },
                stringify: a,
                queryify: function(e, t) {
                    return e = e || "",
                    null != t && "object" == typeof t && function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t))
                                return 1
                    }(t) && (e += -1 === e.indexOf("?") ? "?" : "",
                    e += -1 !== e.indexOf("=") ? "&" : "",
                    e += a(t)),
                    e
                },
                hasQueryParams: n
            }
        }
        , {}],
        57: [function(e, t) {
            "use strict";
            function n(e) {
                var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "";
                if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))
                    throw new Error("Non base64 encoded input passed to window.atob polyfill");
                for (o = 0; n = a.indexOf(e.charAt(o++)),
                t = (15 & (r = a.indexOf(e.charAt(o++)))) << 4 | (i = a.indexOf(e.charAt(o++))) >> 2 & 15,
                i = (3 & i) << 6 | 63 & a.indexOf(e.charAt(o++)),
                s += String.fromCharCode((63 & n) << 2 | r >> 4 & 3) + (t ? String.fromCharCode(t) : "") + (i ? String.fromCharCode(i) : ""),
                o < e.length; )
                    ;
                return s
            }
            var r = "function" == typeof atob ? atob : n;
            t.exports = {
                atob: function(e) {
                    return r.call(window, e)
                },
                _atob: n
            }
        }
        , {}]
    }, {}, [21])(21)
}),
function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).hostedFields = e()
}(function() {
    return function c(r, i, o) {
        function a(t, e) {
            if (!i[t]) {
                if (!r[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n)
                        return n(t, !0);
                    if (s)
                        return s(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    n
                }
                n = i[t] = {
                    exports: {}
                },
                r[t][0].call(n.exports, function(e) {
                    return a(r[t][1][e] || e)
                }, n, n.exports, c, r, i, o)
            }
            return i[t].exports
        }
        for (var s = "function" == typeof require && require, e = 0; e < o.length; e++)
            a(o[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PromiseGlobal = void 0,
            e = r(e("promise-polyfill")),
            e = "undefined" != typeof Promise ? Promise : e["default"],
            n.PromiseGlobal = e
        }
        , {
            "promise-polyfill": 63
        }],
        2: [function(e, t) {
            "use strict";
            function n(n) {
                var e, t = JSON.stringify(n);
                if (!n.forceScriptReload && (e = s[t]))
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
                e = new a.PromiseGlobal(function(e, t) {
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
                s[t] = e
            }
            var a = e("./lib/promise")
              , s = {};
            n.clearCache = function() {
                s = {}
            }
            ,
            t.exports = n
        }
        , {
            "./lib/promise": 1
        }],
        3: [function(e, t) {
            t.exports = e("./dist/load-script")
        }
        , {
            "./dist/load-script": 2
        }],
        4: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /Android/.test(e)
            }
        }
        , {}],
        5: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /CrOS/i.test(e)
            }
        }
        , {}],
        6: [function(e, t) {
            "use strict";
            var n = e("./is-edge")
              , r = e("./is-samsung")
              , i = e("./is-duckduckgo")
              , o = e("./is-opera")
              , a = e("./is-silk");
            t.exports = function(e) {
                return !(-1 === (e = e || window.navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || n(e) || r(e) || i(e) || o(e) || a(e))
            }
        }
        , {
            "./is-duckduckgo": 7,
            "./is-edge": 8,
            "./is-opera": 17,
            "./is-samsung": 18,
            "./is-silk": 19
        }],
        7: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/")
            }
        }
        , {}],
        8: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/")
            }
        }
        , {}],
        9: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /Firefox/i.test(e)
            }
        }
        , {}],
        10: [function(e, t) {
            "use strict";
            var n = e("./is-ie11");
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE") || n(e)
            }
        }
        , {
            "./is-ie11": 12
        }],
        11: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 10")
            }
        }
        , {}],
        12: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Trident/7")
            }
        }
        , {}],
        13: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9")
            }
        }
        , {}],
        14: [function(e, t) {
            "use strict";
            var n = e("./is-ios");
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                n(e) && /\bGSA\b/.test(e)
            }
        }
        , {
            "./is-ios": 16
        }],
        15: [function(e, t) {
            "use strict";
            var n = e("./is-ios")
              , r = e("./is-ios-google-search-app");
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                !!n(e) && (!!r(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
            }
        }
        , {
            "./is-ios": 16,
            "./is-ios-google-search-app": 14
        }],
        16: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /iPhone|iPod|iPad/i.test(e)
            }
        }
        , {}],
        17: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("OPR/") || -1 !== e.indexOf("Opera/") || -1 !== e.indexOf("OPT/")
            }
        }
        , {}],
        18: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /SamsungBrowser/i.test(e)
            }
        }
        , {}],
        19: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/")
            }
        }
        , {}],
        20: [function(e, t) {
            t.exports = e("./dist/is-android")
        }
        , {
            "./dist/is-android": 4
        }],
        21: [function(e, t) {
            t.exports = e("./dist/is-chrome-os")
        }
        , {
            "./dist/is-chrome-os": 5
        }],
        22: [function(e, t) {
            t.exports = e("./dist/is-chrome")
        }
        , {
            "./dist/is-chrome": 6
        }],
        23: [function(e, t) {
            t.exports = e("./dist/is-edge")
        }
        , {
            "./dist/is-edge": 8
        }],
        24: [function(e, t) {
            t.exports = e("./dist/is-firefox")
        }
        , {
            "./dist/is-firefox": 9
        }],
        25: [function(e, t) {
            t.exports = e("./dist/is-ie")
        }
        , {
            "./dist/is-ie": 10
        }],
        26: [function(e, t) {
            t.exports = e("./dist/is-ie10")
        }
        , {
            "./dist/is-ie10": 11
        }],
        27: [function(e, t) {
            t.exports = e("./dist/is-ie9")
        }
        , {
            "./dist/is-ie9": 13
        }],
        28: [function(e, t) {
            t.exports = e("./dist/is-ios-webview")
        }
        , {
            "./dist/is-ios-webview": 15
        }],
        29: [function(e, t) {
            t.exports = e("./dist/is-ios")
        }
        , {
            "./dist/is-ios": 16
        }],
        30: [function(e, t, n) {
            "use strict";
            function r(e) {
                return e.className.trim().split(/\s+/)
            }
            function i(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                e.className = r(e).filter(function(e) {
                    return -1 === t.indexOf(e)
                }).concat(t).join(" ")
            }
            function o(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                e.className = r(e).filter(function(e) {
                    return -1 === t.indexOf(e)
                }).join(" ")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.toggle = n.remove = n.add = void 0,
            n.add = i,
            n.remove = o,
            n.toggle = function(e, t, n) {
                (n ? i : o)(e, t)
            }
        }
        , {}],
        31: [function(e, t) {
            "use strict";
            function n() {
                this._events = {}
            }
            var r = (n.prototype.on = function(e, t) {
                this._events[e] ? this._events[e].push(t) : this._events[e] = [t]
            }
            ,
            n.prototype.off = function(e, t) {
                (e = this._events[e]) && (t = e.indexOf(t),
                e.splice(t, 1))
            }
            ,
            n.prototype._emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                (e = this._events[e]) && e.forEach(function(e) {
                    e.apply(void 0, t)
                })
            }
            ,
            n.prototype.hasListener = function(e) {
                return !!(e = this._events[e]) && 0 < e.length
            }
            ,
            n.createChild = function(e) {
                e.prototype = Object.create(n.prototype, {
                    constructor: e
                })
            }
            ,
            n);
            t.exports = r
        }
        , {}],
        32: [function(e, t) {
            "use strict";
            function r(e) {
                var n = this;
                "function" != typeof e ? (this._promise = new r.Promise(function(e, t) {
                    n._resolveFunction = e,
                    n._rejectFunction = t
                }
                ),
                this._onResolve = (e = e || {}).onResolve || r.defaultOnResolve,
                this._onReject = e.onReject || r.defaultOnReject,
                r.shouldCatchExceptions(e) && this._promise["catch"](function() {}),
                this._resetState()) : this._promise = new r.Promise(e)
            }
            var n = "undefined" != typeof Promise ? Promise : null;
            r.defaultOnResolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.defaultOnReject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.setPromise = function(e) {
                r.Promise = e
            }
            ,
            r.shouldCatchExceptions = function(e) {
                return e.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(e.suppressUnhandledPromiseMessage) : Boolean(r.suppressUnhandledPromiseMessage)
            }
            ,
            r.all = function(e) {
                return r.Promise.all(e)
            }
            ,
            r.allSettled = function(e) {
                return r.Promise.allSettled(e)
            }
            ,
            r.race = function(e) {
                return r.Promise.race(e)
            }
            ,
            r.reject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.resolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.prototype.then = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).then.apply(e, t)
            }
            ,
            r.prototype["catch"] = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise)["catch"].apply(e, t)
            }
            ,
            r.prototype.resolve = function(e) {
                var t = this;
                return this.isFulfilled || (this._setResolved(),
                r.Promise.resolve().then(function() {
                    return t._onResolve(e)
                }).then(function(e) {
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    t._resetState(),
                    t.reject(e)
                })),
                this
            }
            ,
            r.prototype.reject = function(e) {
                var t = this;
                return this.isFulfilled || (this._setRejected(),
                r.Promise.resolve().then(function() {
                    return t._onReject(e)
                }).then(function(e) {
                    t._setResolved(),
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    return t._rejectFunction(e)
                })),
                this
            }
            ,
            r.prototype._resetState = function() {
                this.isFulfilled = !1,
                this.isResolved = !1,
                this.isRejected = !1
            }
            ,
            r.prototype._setResolved = function() {
                this.isFulfilled = !0,
                this.isResolved = !0,
                this.isRejected = !1
            }
            ,
            r.prototype._setRejected = function() {
                this.isFulfilled = !0,
                this.isResolved = !1,
                this.isRejected = !0
            }
            ,
            r.Promise = n,
            n = r;
            t.exports = n
        }
        , {}],
        33: [function(e, t) {
            "use strict";
            var n = e("./lib/set-attributes")
              , r = e("./lib/default-attributes")
              , i = e("./lib/assign");
            t.exports = function(e) {
                void 0 === e && (e = {});
                var t = document.createElement("iframe");
                return (e = i.assign({}, r.defaultAttributes, e)).style && "string" != typeof e.style && (i.assign(t.style, e.style),
                delete e.style),
                n.setAttributes(t, e),
                t.getAttribute("id") || (t.id = t.name),
                t
            }
        }
        , {
            "./lib/assign": 34,
            "./lib/default-attributes": 35,
            "./lib/set-attributes": 36
        }],
        34: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.assign = void 0,
            n.assign = function(n) {
                for (var e = [], t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t];
                return e.forEach(function(t) {
                    "object" == typeof t && Object.keys(t).forEach(function(e) {
                        n[e] = t[e]
                    })
                }),
                n
            }
        }
        , {}],
        35: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.defaultAttributes = void 0,
            n.defaultAttributes = {
                src: "about:blank",
                frameBorder: 0,
                allowtransparency: !0,
                scrolling: "no"
            }
        }
        , {}],
        36: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.setAttributes = void 0,
            n.setAttributes = function(e, t) {
                for (var n in t) {
                    var r;
                    t.hasOwnProperty(n) && (null == (r = t[n]) ? e.removeAttribute(n) : e.setAttribute(n, r))
                }
            }
        }
        , {}],
        37: [function(e, t) {
            "use strict";
            t.exports = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
        }
        , {}],
        38: [function(e, t, n) {
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
        39: [function(e, t, n) {
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
        40: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.promiseOrCallback = function(e, t) {
                if (!t)
                    return e;
                e.then(function(e) {
                    return t(null, e)
                })["catch"](function(e) {
                    return t(e)
                })
            }
        }
        , {}],
        41: [function(e, t) {
            "use strict";
            function n(r) {
                return function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return "function" == typeof t[t.length - 1] && (e = t.pop(),
                    e = o.once(i.deferred(e))),
                    a.promiseOrCallback(r.apply(this, t), e)
                }
            }
            var i = e("./lib/deferred")
              , o = e("./lib/once")
              , a = e("./lib/promise-or-callback");
            n.wrapPrototype = function(r, e) {
                var i = (e = void 0 === e ? {} : e).ignoreMethods || []
                  , o = !0 === e.transformPrivateMethods;
                return Object.getOwnPropertyNames(r.prototype).filter(function(e) {
                    var t = "constructor" !== e && "function" == typeof r.prototype[e]
                      , n = -1 === i.indexOf(e);
                    e = o || "_" !== e.charAt(0);
                    return t && e && n
                }).forEach(function(e) {
                    var t = r.prototype[e];
                    r.prototype[e] = n(t)
                }),
                r
            }
            ,
            t.exports = n
        }
        , {
            "./lib/deferred": 38,
            "./lib/once": 39,
            "./lib/promise-or-callback": 40
        }],
        42: [function(e, t) {
            "use strict";
            function r(e) {
                return d[e] || a[e]
            }
            function i(e, t) {
                void 0 === t && (t = !1);
                var n = f.indexOf(e);
                if (!t && -1 === n)
                    throw new Error('"' + e + '" is not a supported card type.');
                return n
            }
            function n(t) {
                var n = [];
                if (!c.isValidInputType(t))
                    return n;
                if (0 === t.length)
                    return f.map(function(e) {
                        return l.clone(r(e))
                    });
                f.forEach(function(e) {
                    e = r(e),
                    s.addMatchingCardsToResults(t, e, n)
                });
                var e = u.findBestMatch(n);
                return e ? [e] : n
            }
            var o = this && this.__assign || function() {
                return (o = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ).apply(this, arguments)
            }
              , a = e("./lib/card-types")
              , s = e("./lib/add-matching-cards-to-results")
              , c = e("./lib/is-valid-input-type")
              , u = e("./lib/find-best-match")
              , l = e("./lib/clone")
              , d = {}
              , p = [(e = {
                VISA: "visa",
                MASTERCARD: "mastercard",
                AMERICAN_EXPRESS: "american-express",
                DINERS_CLUB: "diners-club",
                DISCOVER: "discover",
                JCB: "jcb",
                UNIONPAY: "unionpay",
                MAESTRO: "maestro",
                ELO: "elo",
                MIR: "mir",
                HIPER: "hiper",
                HIPERCARD: "hipercard"
            }).VISA, e.MASTERCARD, e.AMERICAN_EXPRESS, e.DINERS_CLUB, e.DISCOVER, e.JCB, e.UNIONPAY, e.MAESTRO, e.ELO, e.MIR, e.HIPER, e.HIPERCARD]
              , f = l.clone(p);
            n.getTypeInfo = function(e) {
                return l.clone(r(e))
            }
            ,
            n.removeCard = function(e) {
                e = i(e),
                f.splice(e, 1)
            }
            ,
            n.addCard = function(e) {
                var t = i(e.type, !0);
                d[e.type] = e,
                -1 === t && f.push(e.type)
            }
            ,
            n.updateCard = function(e, t) {
                var n = d[e] || a[e];
                if (!n)
                    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
                if (t.type && n.type !== t.type)
                    throw new Error("Cannot overwrite type parameter.");
                n = l.clone(n),
                n = o(o({}, n), t),
                d[n.type] = n
            }
            ,
            n.changeOrder = function(e, t) {
                var n = i(e);
                f.splice(n, 1),
                f.splice(t, 0, e)
            }
            ,
            n.resetModifications = function() {
                f = l.clone(p),
                d = {}
            }
            ,
            n.types = e,
            t.exports = n
        }
        , {
            "./lib/add-matching-cards-to-results": 43,
            "./lib/card-types": 44,
            "./lib/clone": 45,
            "./lib/find-best-match": 46,
            "./lib/is-valid-input-type": 47
        }],
        43: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.addMatchingCardsToResults = void 0;
            var a = e("./clone")
              , s = e("./matches");
            n.addMatchingCardsToResults = function(e, t, n) {
                for (var r = 0; r < t.patterns.length; r++) {
                    var i = t.patterns[r];
                    if (s.matches(e, i)) {
                        var o = a.clone(t);
                        i = (Array.isArray(i) ? String(i[0]) : String(i)).length;
                        e.length >= i && (o.matchStrength = i),
                        n.push(o);
                        break
                    }
                }
            }
        }
        , {
            "./clone": 45,
            "./matches": 48
        }],
        44: [function(e, t) {
            "use strict";
            t.exports = {
                visa: {
                    niceType: "Visa",
                    type: "visa",
                    patterns: [4],
                    gaps: [4, 8, 12],
                    lengths: [16, 18, 19],
                    code: {
                        name: "CVV",
                        size: 3
                    }
                },
                mastercard: {
                    niceType: "Mastercard",
                    type: "mastercard",
                    patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
                    gaps: [4, 8, 12],
                    lengths: [16],
                    code: {
                        name: "CVC",
                        size: 3
                    }
                },
                "american-express": {
                    niceType: "American Express",
                    type: "american-express",
                    patterns: [34, 37],
                    gaps: [4, 10],
                    lengths: [15],
                    code: {
                        name: "CID",
                        size: 4
                    }
                },
                "diners-club": {
                    niceType: "Diners Club",
                    type: "diners-club",
                    patterns: [[300, 305], 36, 38, 39],
                    gaps: [4, 10],
                    lengths: [14, 16, 19],
                    code: {
                        name: "CVV",
                        size: 3
                    }
                },
                discover: {
                    niceType: "Discover",
                    type: "discover",
                    patterns: [6011, [644, 649], 65],
                    gaps: [4, 8, 12],
                    lengths: [16, 19],
                    code: {
                        name: "CID",
                        size: 3
                    }
                },
                jcb: {
                    niceType: "JCB",
                    type: "jcb",
                    patterns: [2131, 1800, [3528, 3589]],
                    gaps: [4, 8, 12],
                    lengths: [16, 17, 18, 19],
                    code: {
                        name: "CVV",
                        size: 3
                    }
                },
                unionpay: {
                    niceType: "UnionPay",
                    type: "unionpay",
                    patterns: [620, [624, 626], [62100, 62182], [62184, 62187], [62185, 62197], [62200, 62205], [622010, 622999], 622018, [622019, 622999], [62207, 62209], [622126, 622925], [623, 626], 6270, 6272, 6276, [627700, 627779], [627781, 627799], [6282, 6289], 6291, 6292, 810, [8110, 8131], [8132, 8151], [8152, 8163], [8164, 8171]],
                    gaps: [4, 8, 12],
                    lengths: [14, 15, 16, 17, 18, 19],
                    code: {
                        name: "CVN",
                        size: 3
                    }
                },
                maestro: {
                    niceType: "Maestro",
                    type: "maestro",
                    patterns: [493698, [5e5, 504174], [504176, 506698], [506779, 508999], [56, 59], 63, 67, 6],
                    gaps: [4, 8, 12],
                    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                    code: {
                        name: "CVC",
                        size: 3
                    }
                },
                elo: {
                    niceType: "Elo",
                    type: "elo",
                    patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778], [509e3, 509999], 627780, 636297, 636368, [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650978], [651652, 651679], [655e3, 655019], [655021, 655058]],
                    gaps: [4, 8, 12],
                    lengths: [16],
                    code: {
                        name: "CVE",
                        size: 3
                    }
                },
                mir: {
                    niceType: "Mir",
                    type: "mir",
                    patterns: [[2200, 2204]],
                    gaps: [4, 8, 12],
                    lengths: [16, 17, 18, 19],
                    code: {
                        name: "CVP2",
                        size: 3
                    }
                },
                hiper: {
                    niceType: "Hiper",
                    type: "hiper",
                    patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
                    gaps: [4, 8, 12],
                    lengths: [16],
                    code: {
                        name: "CVC",
                        size: 3
                    }
                },
                hipercard: {
                    niceType: "Hipercard",
                    type: "hipercard",
                    patterns: [606282],
                    gaps: [4, 8, 12],
                    lengths: [16],
                    code: {
                        name: "CVC",
                        size: 3
                    }
                }
            }
        }
        , {}],
        45: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.clone = void 0,
            n.clone = function(e) {
                return e ? JSON.parse(JSON.stringify(e)) : null
            }
        }
        , {}],
        46: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.findBestMatch = void 0,
            n.findBestMatch = function(e) {
                return 0 < (n = (t = e).filter(function(e) {
                    return e.matchStrength
                }).length) && n === t.length ? e.reduce(function(e, t) {
                    return !e || Number(e.matchStrength) < Number(t.matchStrength) ? t : e
                }) : null;
                var t, n
            }
        }
        , {}],
        47: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.isValidInputType = void 0,
            n.isValidInputType = function(e) {
                return "string" == typeof e || e instanceof String
            }
        }
        , {}],
        48: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.matches = void 0,
            n.matches = function(e, t) {
                return Array.isArray(t) ? (n = e,
                r = t[0],
                i = t[1],
                o = String(r).length,
                n = n.substr(0, o),
                o = parseInt(n, 10),
                r = parseInt(String(r).substr(0, n.length), 10),
                i = parseInt(String(i).substr(0, n.length), 10),
                r <= o && o <= i) : (e = e,
                t = t,
                (t = String(t)).substring(0, e.length) === e.substring(0, t.length));
                var n, r, i, o
            }
        }
        , {}],
        49: [function(e, t, n) {
            "use strict";
            function o(e) {
                this.origin = (e = void 0 === e ? {} : e).origin || "*",
                this.channel = e.channel || "",
                this.verifyDomain = e.verifyDomain,
                this.isDestroyed = !1,
                this.listeners = []
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.Framebus = void 0;
            var i = e("./lib/is-not-string")
              , s = e("./lib/subscription-args-invalid")
              , a = e("./lib/broadcast")
              , c = e("./lib/package-payload")
              , u = e("./lib/constants");
            e = "undefined" != typeof window && window.Promise,
            o.setPromise = function(e) {
                o.Promise = e
            }
            ,
            o.target = function(e) {
                return new o(e)
            }
            ,
            o.prototype.include = function(e) {
                return null != e && null != e.Window && e.constructor === e.Window && (u.childWindows.push(e),
                !0)
            }
            ,
            o.prototype.target = function(e) {
                return o.target(e)
            }
            ,
            o.prototype.emit = function(e, t, n) {
                if (this.isDestroyed)
                    return !1;
                var r = this.origin;
                return e = this.namespaceEvent(e),
                !i.isntString(e) && (!i.isntString(r) && ("function" == typeof t && (n = t,
                t = void 0),
                !!(n = c.packagePayload(e, r, t, n)) && (a.broadcast(window.top || window.self, n, r),
                !0)))
            }
            ,
            o.prototype.emitAsPromise = function(n, r) {
                var i = this;
                return new o.Promise(function(t, e) {
                    i.emit(n, r, function(e) {
                        t(e)
                    }) || e(new Error('Listener not added for "' + n + '"'))
                }
                )
            }
            ,
            o.prototype.on = function(e, n) {
                if (this.isDestroyed)
                    return !1;
                var r = this
                  , t = this.origin
                  , i = n;
                return e = this.namespaceEvent(e),
                !s.subscriptionArgsInvalid(e, i, t) && (this.verifyDomain && (i = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    r.checkOrigin(this && this.origin) && n.apply(void 0, e)
                }
                ),
                this.listeners.push({
                    eventName: e,
                    handler: i,
                    originalHandler: n
                }),
                u.subscribers[t] = u.subscribers[t] || {},
                u.subscribers[t][e] = u.subscribers[t][e] || [],
                u.subscribers[t][e].push(i),
                !0)
            }
            ,
            o.prototype.off = function(e, t) {
                var n = t;
                if (this.isDestroyed)
                    return !1;
                if (this.verifyDomain)
                    for (var r = 0; r < this.listeners.length; r++) {
                        var i = this.listeners[r];
                        i.originalHandler === t && (n = i.handler)
                    }
                e = this.namespaceEvent(e);
                var o = this.origin;
                if (s.subscriptionArgsInvalid(e, n, o))
                    return !1;
                var a = u.subscribers[o] && u.subscribers[o][e];
                if (!a)
                    return !1;
                for (r = 0; r < a.length; r++)
                    if (a[r] === n)
                        return a.splice(r, 1),
                        !0;
                return !1
            }
            ,
            o.prototype.teardown = function() {
                if (!this.isDestroyed) {
                    this.isDestroyed = !0;
                    for (var e = 0; e < this.listeners.length; e++) {
                        var t = this.listeners[e];
                        this.off(t.eventName, t.handler)
                    }
                    this.listeners.length = 0
                }
            }
            ,
            o.prototype.checkOrigin = function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = "https:" === t.protocol ? t.host.replace(/:443$/, "") : "http:" === t.protocol ? t.host.replace(/:80$/, "") : t.host;
                return t.protocol + "//" + n === e || !this.verifyDomain || this.verifyDomain(e)
            }
            ,
            o.prototype.namespaceEvent = function(e) {
                return this.channel ? this.channel + ":" + e : e
            }
            ,
            o.Promise = e,
            e = o;
            n.Framebus = e
        }
        , {
            "./lib/broadcast": 53,
            "./lib/constants": 54,
            "./lib/is-not-string": 57,
            "./lib/package-payload": 59,
            "./lib/subscription-args-invalid": 61
        }],
        50: [function(e, t) {
            "use strict";
            var n = e("./lib/attach");
            e = e("./framebus");
            n.attach(),
            t.exports = e.Framebus
        }
        , {
            "./framebus": 49,
            "./lib/attach": 51
        }],
        51: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.detach = n.attach = void 0;
            var r = e("./message")
              , i = !1;
            n.attach = function() {
                i || "undefined" == typeof window || (i = !0,
                window.addEventListener("message", r.onmessage, !1))
            }
            ,
            n.detach = function() {
                i = !1,
                window.removeEventListener("message", r.onmessage, !1)
            }
        }
        , {
            "./message": 58
        }],
        52: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.broadcastToChildWindows = void 0;
            var o = e("./broadcast")
              , a = e("./constants");
            n.broadcastToChildWindows = function(e, t, n) {
                for (var r = a.childWindows.length - 1; 0 <= r; r--) {
                    var i = a.childWindows[r];
                    i.closed ? a.childWindows.splice(r, 1) : n !== i && o.broadcast(i.top, e, t)
                }
            }
        }
        , {
            "./broadcast": 53,
            "./constants": 54
        }],
        53: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.broadcast = void 0;
            var o = e("./has-opener");
            n.broadcast = function a(e, t, n) {
                var r, i = 0;
                try {
                    for (e.postMessage(t, n),
                    o.hasOpener(e) && e.opener.top !== window.top && a(e.opener.top, t, n); r = e.frames[i]; )
                        a(r, t, n),
                        i++
                } catch (p4) {}
            }
        }
        , {
            "./has-opener": 56
        }],
        54: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscribers = n.childWindows = n.prefix = void 0,
            n.prefix = "/*framebus*/",
            n.childWindows = [],
            n.subscribers = {}
        }
        , {}],
        55: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.dispatch = void 0;
            var s = e("./constants");
            n.dispatch = function(e, t, n, r, i) {
                if (s.subscribers[e] && s.subscribers[e][t]) {
                    var o = [];
                    n && o.push(n),
                    r && o.push(r);
                    for (var a = 0; a < s.subscribers[e][t].length; a++)
                        s.subscribers[e][t][a].apply(i, o)
                }
            }
        }
        , {
            "./constants": 54
        }],
        56: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.hasOpener = void 0,
            n.hasOpener = function(e) {
                return e.top === e && null != e.opener && e.opener !== e && !0 !== e.opener.closed
            }
        }
        , {}],
        57: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.isntString = void 0,
            n.isntString = function(e) {
                return "string" != typeof e
            }
        }
        , {}],
        58: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.onmessage = void 0;
            var i = e("./is-not-string")
              , o = e("./unpack-payload")
              , a = e("./dispatch")
              , s = e("./broadcast-to-child-windows");
            n.onmessage = function(e) {
                var t, n, r;
                i.isntString(e.data) || (t = o.unpackPayload(e)) && (n = t.eventData,
                r = t.reply,
                a.dispatch("*", t.event, n, r, e),
                a.dispatch(e.origin, t.event, n, r, e),
                s.broadcastToChildWindows(e.data, t.origin, e.source))
            }
        }
        , {
            "./broadcast-to-child-windows": 52,
            "./dispatch": 55,
            "./is-not-string": 57,
            "./unpack-payload": 62
        }],
        59: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.packagePayload = void 0;
            var o = e("./subscribe-replier")
              , a = e("./constants");
            n.packagePayload = function(e, t, n, r) {
                var i;
                e = {
                    event: e,
                    origin: t
                };
                "function" == typeof r && (e.reply = o.subscribeReplier(r, t)),
                e.eventData = n;
                try {
                    i = a.prefix + JSON.stringify(e)
                } catch (e) {
                    throw new Error("Could not stringify event: " + e.message)
                }
                return i
            }
        }
        , {
            "./constants": 54,
            "./subscribe-replier": 60
        }],
        60: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscribeReplier = void 0;
            var a = e("../framebus")
              , s = r(e("@braintree/uuid"));
            n.subscribeReplier = function(n, r) {
                var i = s["default"]();
                return a.Framebus.target({
                    origin: r
                }).on(i, function o(e, t) {
                    n(e, t),
                    a.Framebus.target({
                        origin: r
                    }).off(i, o)
                }),
                i
            }
        }
        , {
            "../framebus": 49,
            "@braintree/uuid": 37
        }],
        61: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscriptionArgsInvalid = void 0;
            var r = e("./is-not-string");
            n.subscriptionArgsInvalid = function(e, t, n) {
                return !!r.isntString(e) || "function" != typeof t || r.isntString(n)
            }
        }
        , {
            "./is-not-string": 57
        }],
        62: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.unpackPayload = void 0;
            var o = e("./constants")
              , a = e("./package-payload");
            n.unpackPayload = function(e) {
                var t, n, r, i;
                if (e.data.slice(0, o.prefix.length) !== o.prefix)
                    return !1;
                try {
                    t = JSON.parse(e.data.slice(o.prefix.length))
                } catch (e) {
                    return !1
                }
                return t.reply && (n = e.origin,
                r = e.source,
                i = t.reply,
                t.reply = function(e) {
                    !r || (e = a.packagePayload(i, n, e)) && r.postMessage(e, n)
                }
                ),
                t
            }
        }
        , {
            "./constants": 54,
            "./package-payload": 59
        }],
        63: [function(e, t) {
            "use strict";
            function c(e) {
                return Boolean(e && void 0 !== e.length)
            }
            function r() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                d(e, this)
            }
            function i(n, r) {
                for (; 3 === n._state; )
                    n = n._value;
                0 !== n._state ? (n._handled = !0,
                o._immediateFn(function() {
                    var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void s(r.promise, e)
                        }
                        a(r.promise, e)
                    } else
                        (1 === n._state ? a : s)(r.promise, n._value)
                })) : n._deferreds.push(r)
            }
            function a(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o)
                            return e._state = 3,
                            e._value = t,
                            void u(e);
                        if ("function" == typeof n)
                            return void d((r = n,
                            i = t,
                            function() {
                                r.apply(i, arguments)
                            }
                            ), e)
                    }
                    e._state = 1,
                    e._value = t,
                    u(e)
                } catch (t) {
                    s(e, t)
                }
                var r, i
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                u(e)
            }
            function u(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    i(e, e._deferreds[t]);
                e._deferreds = null
            }
            function l(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function d(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        s(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    s(t, e)
                }
            }
            var n = setTimeout;
            o.prototype["catch"] = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return i(this, new l(e,t,n)),
                n
            }
            ,
            o.prototype["finally"] = function(t) {
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
                return new o(function(r, i) {
                    if (!c(t))
                        return i(new TypeError("Promise.all accepts an array"));
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length)
                        return r([]);
                    for (var a = o.length, e = 0; e < o.length; e++)
                        !function s(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n)
                                        return void n.call(e, function(e) {
                                            s(t, e)
                                        }, i)
                                }
                                o[t] = e,
                                0 == --a && r(o)
                            } catch (e) {
                                i(e)
                            }
                        }(e, o[e])
                }
                )
            }
            ,
            o.allSettled = function(t) {
                return new this(function(r, e) {
                    if (!t || void 0 === t.length)
                        return e(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length)
                        return r([]);
                    for (var o = i.length, a = 0; a < i.length; a++)
                        !function a(t, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function(e) {
                                        a(t, e)
                                    }, function(e) {
                                        i[t] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        0 == --o && r(i)
                                    })
                            }
                            i[t] = {
                                status: "fulfilled",
                                value: e
                            },
                            0 == --o && r(i)
                        }(a, i[a])
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
                n(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            t.exports = o
        }
        , {}],
        64: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.isIos = n.isIE9 = n.isSamsungBrowser = n.isAndroidChrome = n.isKitKatWebview = void 0;
            var r = "undefined" != typeof window && window.navigator && window.navigator.userAgent
              , i = e("@braintree/browser-detection/is-android")
              , o = e("@braintree/browser-detection/is-chrome-os")
              , a = e("@braintree/browser-detection/is-chrome")
              , s = e("@braintree/browser-detection/is-ios");
            n.isIos = s,
            e = e("@braintree/browser-detection/is-ie9"),
            n.isIE9 = e;
            var c = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
            n.isKitKatWebview = function(e) {
                return i(e = void 0 === e ? r : e) && c.test(e)
            }
            ,
            n.isAndroidChrome = function(e) {
                return (i(e = void 0 === e ? r : e) || o(e)) && a(e)
            }
            ,
            n.isSamsungBrowser = function(e) {
                return /SamsungBrowser/.test(e = void 0 === e ? r : e) || !a(e = e) && -1 < e.indexOf("Samsung")
            }
        }
        , {
            "@braintree/browser-detection/is-android": 20,
            "@braintree/browser-detection/is-chrome": 22,
            "@braintree/browser-detection/is-chrome-os": 21,
            "@braintree/browser-detection/is-ie9": 27,
            "@braintree/browser-detection/is-ios": 29
        }],
        65: [function(e, t) {
            "use strict";
            var n = e("./lib/device");
            t.exports = function() {
                return !n.isSamsungBrowser()
            }
        }
        , {
            "./lib/device": 64
        }],
        66: [function(e, t) {
            t.exports = e("./dist/supports-input-formatting")
        }
        , {
            "./dist/supports-input-formatting": 65
        }],
        67: [function(e, t) {
            "use strict";
            var o = e("../../lib/braintree-error")
              , a = e("../shared/errors")
              , s = e("../shared/constants").allowedAttributes;
            t.exports = function(e, t) {
                var n, r, i;
                return s.hasOwnProperty(e) ? null == t || (i = t,
                "string" === s[r = e] ? "string" == typeof i || "number" == typeof i : "boolean" === s[r] && ("true" === String(i) || "false" === String(i))) || (n = new o({
                    type: a.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
                    code: a.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
                    message: 'Value "' + t + '" is not allowed for "' + e + '" attribute.'
                })) : n = new o({
                    type: a.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
                    code: a.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
                    message: 'The "' + e + '" attribute is not supported in Hosted Fields.'
                }),
                n
            }
        }
        , {
            "../../lib/braintree-error": 86,
            "../shared/constants": 75,
            "../shared/errors": 76
        }],
        68: [function(e, t) {
            "use strict";
            var r = e("../shared/constants")
              , i = e("../../lib/use-min");
            t.exports = function(e, t, n) {
                return e + "/web/" + r.VERSION + "/html/hosted-fields-frame" + i(n) + ".html#" + t
            }
        }
        , {
            "../../lib/use-min": 102,
            "../shared/constants": 75
        }],
        69: [function(e, t) {
            "use strict";
            function c(e) {
                return r.hasSoftwareKeyboard() ? -1 < i.indexOf(e.tagName) && o.indexOf(e.type) < 0 : "hidden" !== e.type
            }
            function n(e) {
                for (var t, n = 0; n < e.length; n++)
                    if (c(t = e[n]))
                        return t;
                return null
            }
            var u = e("../shared/constants").navigationDirections
              , r = e("../shared/browser-detection")
              , l = e("../shared/focus-intercept")
              , d = e("../shared/find-parent-tags")
              , i = ["INPUT", "SELECT", "TEXTAREA"]
              , o = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];
            t.exports = {
                removeExtraFocusElements: function(e, t) {
                    [n(e = Array.prototype.slice.call(e.elements)), n(e.reverse())].forEach(function(e) {
                        e && l.matchFocusElement(e.getAttribute("id")) && t(e.getAttribute("id"))
                    })
                },
                createFocusChangeHandler: function(a, s) {
                    return function(e) {
                        var t, n, r, i, o = document.getElementById("bt-" + e.field + "-" + e.direction + "-" + a);
                        if (o)
                            if (r = d(o, "form")[0],
                            document.forms.length < 1 || !r)
                                s.onRemoveFocusIntercepts();
                            else {
                                t = (r = [].slice.call(r.elements)).indexOf(o),
                                i = function(e, t) {
                                    switch (e) {
                                    case u.BACK:
                                        return {
                                            checkIndexBounds: function(e) {
                                                return e < 0
                                            },
                                            indexChange: -1
                                        };
                                    case u.FORWARD:
                                        return {
                                            checkIndexBounds: function(e) {
                                                return t - 1 < e
                                            },
                                            indexChange: 1
                                        }
                                    }
                                    return {}
                                }(e.direction, r.length);
                                do {
                                    if (t += i.indexChange,
                                    i.checkIndexBounds(t))
                                        return
                                } while (!c(n = r[t]));
                                l.matchFocusElement(n.getAttribute("id")) ? s.onTriggerInputFocus(n.getAttribute("data-braintree-type")) : n.focus()
                            }
                    }
                }
            }
        }
        , {
            "../shared/browser-detection": 74,
            "../shared/constants": 75,
            "../shared/find-parent-tags": 77,
            "../shared/focus-intercept": 78
        }],
        70: [function(e, t) {
            "use strict";
            var i = e("../shared/constants").allowedStyles;
            t.exports = function(e) {
                var n, t = document.createElement("input"), r = {};
                return "." === e[0] && (e = e.substring(1)),
                t.className = e,
                t.style.display = "none !important",
                t.style.position = "fixed !important",
                t.style.left = "-99999px !important",
                t.style.top = "-99999px !important",
                document.body.appendChild(t),
                n = window.getComputedStyle(t),
                i.forEach(function(e) {
                    var t = n[e];
                    t && (r[e] = t)
                }),
                document.body.removeChild(t),
                r
            }
        }
        , {
            "../shared/constants": 75
        }],
        71: [function(e, t) {
            "use strict";
            function r(a) {
                return function(e) {
                    var t, n, r = e.merchantPayload, i = r.emittedBy, o = a[i].containerElement;
                    Object.keys(r.fields).forEach(function(e) {
                        r.fields[e].container = a[e].containerElement
                    }),
                    t = r.fields[i],
                    "blur" === e.type && (n = o,
                    O.isIos() && document.activeElement === document.body && ((i = n.querySelector("input")) || ((i = document.createElement("input")).type = "button",
                    i.style.height = "0px",
                    i.style.width = "0px",
                    i.style.opacity = "0",
                    i.style.padding = "0",
                    i.style.position = "absolute",
                    i.style.left = "-200%",
                    i.style.top = "0px",
                    n.insertBefore(i, n.firstChild)),
                    i.focus(),
                    i.blur())),
                    y.toggle(o, w.externalClasses.FOCUSED, t.isFocused),
                    y.toggle(o, w.externalClasses.VALID, t.isValid),
                    y.toggle(o, w.externalClasses.INVALID, !t.isPotentiallyValid),
                    this._state = {
                        cards: r.cards,
                        fields: r.fields
                    },
                    this._emit(e.type, r)
                }
            }
            function i(o) {
                var n, e, t, a, s = this, c = {}, u = {}, l = [], d = I();
                if (this._merchantConfigurationOptions = p({}, o),
                t = o.client ? (e = (t = o.client.getConfiguration()).gatewayConfiguration.assetsUrl,
                t.isDebug) : (e = f.create(o.authorization),
                Boolean(o.isDebug)),
                this._clientPromise = _.create({
                    client: o.client,
                    authorization: o.authorization,
                    debug: t,
                    assetsUrl: e,
                    name: "Hosted Fields"
                }),
                a = E(e, d, t),
                !o.fields || 0 === Object.keys(o.fields).length)
                    throw new b({
                        type: F.INSTANTIATION_OPTION_REQUIRED.type,
                        code: F.INSTANTIATION_OPTION_REQUIRED.code,
                        message: "options.fields is required when instantiating Hosted Fields."
                    });
                C.call(this),
                this._injectedNodes = [],
                this._destructor = new m,
                this._fields = c,
                this._state = {
                    fields: {},
                    cards: k("")
                },
                this._bus = new v({
                    channel: d,
                    verifyDomain: h
                }),
                this._destructor.registerFunctionForTeardown(function() {
                    s._bus.teardown()
                }),
                o.client ? P.sendEvent(this._clientPromise, "custom.hosted-fields.initialized") : P.sendEvent(this._clientPromise, "custom.hosted-fields.initialized.deferred-client"),
                Object.keys(o.fields).forEach(function(t) {
                    var e, n, r, i;
                    if (!w.allowedFields.hasOwnProperty(t))
                        throw new b({
                            type: S.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
                            code: S.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
                            message: '"' + t + '" is not a valid field.'
                        });
                    if (!(n = "string" == typeof (n = (e = o.fields[t]).container || e.selector) ? document.querySelector(n) : n) || 1 !== n.nodeType)
                        throw new b({
                            type: S.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
                            code: S.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
                            message: S.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
                            details: {
                                fieldSelector: e.selector,
                                fieldContainer: e.container,
                                fieldKey: t
                            }
                        });
                    if (n.querySelector('iframe[name^="braintree-"]'))
                        throw new b({
                            type: S.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
                            code: S.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
                            message: S.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
                            details: {
                                fieldSelector: e.selector,
                                fieldContainer: e.container,
                                fieldKey: t
                            }
                        });
                    if (i = n,
                    L.isShadowElement(i) && (i = L.transformToSlot(i, "height: 100%")),
                    e.maxlength && "number" != typeof e.maxlength)
                        throw new b({
                            type: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                            code: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                            message: "The value for maxlength must be a number.",
                            details: {
                                fieldKey: t
                            }
                        });
                    if (e.minlength && "number" != typeof e.minlength)
                        throw new b({
                            type: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                            code: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                            message: "The value for minlength must be a number.",
                            details: {
                                fieldKey: t
                            }
                        });
                    r = g({
                        type: t,
                        name: "braintree-hosted-field-" + t,
                        style: w.defaultIFrameStyle,
                        title: "Secure Credit Card Frame - " + w.allowedFields[t].label
                    }),
                    this._injectedNodes.push.apply(this._injectedNodes, x(d, r, i, function() {
                        s.focus(t)
                    })),
                    this._setupLabelFocus(t, n),
                    c[t] = {
                        frameElement: r,
                        containerElement: n
                    },
                    i = new j(function(e) {
                        u[t] = e
                    }
                    ),
                    l.push(i),
                    this._state.fields[t] = {
                        isEmpty: !0,
                        isValid: !1,
                        isPotentiallyValid: !0,
                        isFocused: !1,
                        container: n
                    },
                    setTimeout(function() {
                        O.isIE() || O.isEdge() ? (r.src = "about:blank",
                        setTimeout(function() {
                            r.src = a
                        }, 0)) : r.src = a
                    }, 0)
                }
                .bind(this)),
                this._merchantConfigurationOptions.styles && Object.keys(this._merchantConfigurationOptions.styles).forEach(function(e) {
                    var t = s._merchantConfigurationOptions.styles[e];
                    "string" == typeof t && (s._merchantConfigurationOptions.styles[e] = T(t))
                }),
                this._bus.on(N.REMOVE_FOCUS_INTERCEPTS, function(e) {
                    B(e && e.id)
                }),
                this._bus.on(N.TRIGGER_FOCUS_CHANGE, M.createFocusChangeHandler(d, {
                    onRemoveFocusIntercepts: function(e) {
                        s._bus.emit(N.REMOVE_FOCUS_INTERCEPTS, {
                            id: e
                        })
                    },
                    onTriggerInputFocus: function(e) {
                        s.focus(e)
                    }
                })),
                this._bus.on(N.READY_FOR_CLIENT, function(t) {
                    s._clientPromise.then(function(e) {
                        t(e)
                    })
                }),
                this._bus.on(N.CARD_FORM_ENTRY_HAS_BEGUN, function() {
                    P.sendEvent(s._clientPromise, "hosted-fields.input.started")
                }),
                this._bus.on(N.BIN_AVAILABLE, function(e) {
                    s._emit("binAvailable", {
                        bin: e
                    })
                }),
                n = setTimeout(function() {
                    P.sendEvent(s._clientPromise, "custom.hosted-fields.load.timed-out"),
                    s._emit("timeout")
                }, A),
                j.all(l).then(function(e) {
                    var t;
                    e = e[0];
                    clearTimeout(n),
                    e((e = s._merchantConfigurationOptions,
                    (t = p({}, e)).fields = p({}, t.fields),
                    Object.keys(t.fields).forEach(function(e) {
                        t.fields[e] = p({}, t.fields[e]),
                        delete t.fields[e].container
                    }),
                    t)),
                    s._cleanUpFocusIntercepts(),
                    s._emit("ready")
                }),
                this._bus.on(N.FRAME_READY, function(e, t) {
                    u[e.field](t)
                }),
                this._bus.on(N.INPUT_EVENT, r(c).bind(this)),
                this._destructor.registerFunctionForTeardown(function() {
                    for (var e, t, n = 0; n < s._injectedNodes.length; n++)
                        (t = (e = s._injectedNodes[n]).parentNode).removeChild(e),
                        y.remove(t, w.externalClasses.FOCUSED, w.externalClasses.INVALID, w.externalClasses.VALID)
                }),
                this._destructor.registerFunctionForTeardown(function() {
                    B()
                }),
                this._destructor.registerFunctionForTeardown(function() {
                    var e = R(i.prototype).concat(R(C.prototype));
                    D(s, e)
                })
            }
            var p = e("../../lib/assign").assign
              , f = e("../../lib/create-assets-url")
              , h = e("../../lib/is-verified-domain")
              , m = e("../../lib/destructor")
              , y = e("@braintree/class-list")
              , g = e("@braintree/iframer")
              , v = e("framebus")
              , _ = e("../../lib/create-deferred-client")
              , b = e("../../lib/braintree-error")
              , E = e("./compose-url")
              , T = e("./get-styles-from-class")
              , w = e("../shared/constants")
              , S = e("../shared/errors")
              , A = e("../../lib/constants").INTEGRATION_TIMEOUT_MS
              , I = e("@braintree/uuid")
              , s = e("../shared/find-parent-tags")
              , O = e("../shared/browser-detection")
              , N = w.events
              , C = e("@braintree/event-emitter")
              , x = e("./inject-frame")
              , P = e("../../lib/analytics")
              , o = w.allowedFields
              , R = e("../../lib/methods")
              , L = e("../../lib/shadow")
              , c = e("../../lib/find-root-node")
              , D = e("../../lib/convert-methods-to-error")
              , F = e("../../lib/errors")
              , k = e("../shared/get-card-types")
              , a = e("./attribute-validation-error")
              , j = e("../../lib/promise")
              , n = e("@braintree/wrap-promise")
              , M = e("./focus-change")
              , B = e("../shared/focus-intercept").destroy;
            C.createChild(i),
            i.prototype._setupLabelFocus = function(e, t) {
                function n() {
                    o.focus(e)
                }
                var r, i, o = this, a = c(t);
                if (null != t.id) {
                    for (r = Array.prototype.slice.call(document.querySelectorAll('label[for="' + t.id + '"]')),
                    r = (r = (r = a !== document ? r.concat(Array.prototype.slice.call(a.querySelectorAll('label[for="' + t.id + '"]'))) : r).concat(s(t, "label"))).filter(function(e, t, n) {
                        return n.indexOf(e) === t
                    }),
                    i = 0; i < r.length; i++)
                        r[i].addEventListener("click", n, !1);
                    this._destructor.registerFunctionForTeardown(function() {
                        for (i = 0; i < r.length; i++)
                            r[i].removeEventListener("click", n, !1)
                    })
                }
            }
            ,
            i.prototype._getAnyFieldContainer = function() {
                var n = this;
                return Object.keys(this._fields).reduce(function(e, t) {
                    return e || n._fields[t].containerElement
                }, null)
            }
            ,
            i.prototype._cleanUpFocusIntercepts = function() {
                var e;
                document.forms.length < 1 ? this._bus.emit(N.REMOVE_FOCUS_INTERCEPTS) : (e = this._getAnyFieldContainer(),
                (e = s(e, "form")[0]) ? M.removeExtraFocusElements(e, function(e) {
                    this._bus.emit(N.REMOVE_FOCUS_INTERCEPTS, {
                        id: e
                    })
                }
                .bind(this)) : this._bus.emit(N.REMOVE_FOCUS_INTERCEPTS))
            }
            ,
            i.prototype._attachInvalidFieldContainersToError = function(t) {
                t.details && t.details.invalidFieldKeys && 0 < t.details.invalidFieldKeys.length && (t.details.invalidFields = {},
                t.details.invalidFieldKeys.forEach(function(e) {
                    t.details.invalidFields[e] = this._fields[e].containerElement
                }
                .bind(this)))
            }
            ,
            i.prototype.getChallenges = function() {
                return this._clientPromise.then(function(e) {
                    return e.getConfiguration().gatewayConfiguration.challenges
                })
            }
            ,
            i.prototype.getSupportedCardTypes = function() {
                return this._clientPromise.then(function(e) {
                    return e.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.map(function(e) {
                        return "MasterCard" === e ? "Mastercard" : e
                    })
                })
            }
            ,
            i.prototype.teardown = function() {
                var r = this;
                return new j(function(t, n) {
                    r._destructor.teardown(function(e) {
                        P.sendEvent(r._clientPromise, "custom.hosted-fields.teardown-completed"),
                        e ? n(e) : t()
                    })
                }
                )
            }
            ,
            i.prototype.tokenize = function(e) {
                var i = this;
                return e = e || {},
                new j(function(n, r) {
                    i._bus.emit(N.TOKENIZATION_REQUEST, e, function(e) {
                        var t = e[0];
                        e = e[1];
                        t ? (i._attachInvalidFieldContainersToError(t),
                        r(new b(t))) : n(e)
                    })
                }
                )
            }
            ,
            i.prototype.addClass = function(e, t) {
                var n;
                return o.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(N.ADD_CLASS, {
                    field: e,
                    classname: t
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.'
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.'
                }),
                n ? j.reject(n) : j.resolve()
            }
            ,
            i.prototype.removeClass = function(e, t) {
                var n;
                return o.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(N.REMOVE_CLASS, {
                    field: e,
                    classname: t
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.'
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.'
                }),
                n ? j.reject(n) : j.resolve()
            }
            ,
            i.prototype.setAttribute = function(e) {
                var t, n;
                return o.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = a(e.attribute, e.value)) ? n = t : this._bus.emit(N.SET_ATTRIBUTE, {
                    field: e.field,
                    attribute: e.attribute,
                    value: e.value
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
                }),
                n ? j.reject(n) : j.resolve()
            }
            ,
            i.prototype.setMonthOptions = function(t) {
                var e, n = this, r = this._merchantConfigurationOptions.fields;
                return r.expirationMonth ? r.expirationMonth.select || (e = "Expiration month field must be a select element.") : e = "Expiration month field must exist to use setMonthOptions.",
                e ? j.reject(new b({
                    type: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                    message: e
                })) : new j(function(e) {
                    n._bus.emit(N.SET_MONTH_OPTIONS, t, e)
                }
                )
            }
            ,
            i.prototype.setMessage = function(e) {
                this._bus.emit(N.SET_MESSAGE, {
                    field: e.field,
                    message: e.message
                })
            }
            ,
            i.prototype.removeAttribute = function(e) {
                var t, n;
                return o.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = a(e.attribute)) ? n = t : this._bus.emit(N.REMOVE_ATTRIBUTE, {
                    field: e.field,
                    attribute: e.attribute
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                }) : n = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
                }),
                n ? j.reject(n) : j.resolve()
            }
            ,
            i.prototype.setPlaceholder = function(e, t) {
                return this.setAttribute({
                    field: e,
                    attribute: "placeholder",
                    value: t
                })
            }
            ,
            i.prototype.clear = function(e) {
                var t;
                return o.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(N.CLEAR_FIELD, {
                    field: e
                }) : t = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.'
                }) : t = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.'
                }),
                t ? j.reject(t) : j.resolve()
            }
            ,
            i.prototype.focus = function(e) {
                var t, r = this._fields[e];
                return o.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? (r.frameElement.focus(),
                this._bus.emit(N.TRIGGER_INPUT_FOCUS, {
                    field: e
                }),
                O.isIos() && setTimeout(function() {
                    var e, t, n;
                    t = (e = r.containerElement).getBoundingClientRect(),
                    n = Math.floor(t.height / 2),
                    e = Math.floor(t.width / 2),
                    t.top < (window.innerHeight - n || document.documentElement.clientHeight - n) && t.right > e && t.bottom > n && t.left < (window.innerWidth - e || document.documentElement.clientWidth - e) || r.containerElement.scrollIntoView()
                }, 5)) : t = new b({
                    type: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                    code: S.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                    message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.'
                }) : t = new b({
                    type: S.HOSTED_FIELDS_FIELD_INVALID.type,
                    code: S.HOSTED_FIELDS_FIELD_INVALID.code,
                    message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.'
                }),
                t ? j.reject(t) : j.resolve()
            }
            ,
            i.prototype.getState = function() {
                return this._state
            }
            ,
            t.exports = n.wrapPrototype(i)
        }
        , {
            "../../lib/analytics": 81,
            "../../lib/assign": 83,
            "../../lib/braintree-error": 86,
            "../../lib/constants": 87,
            "../../lib/convert-methods-to-error": 88,
            "../../lib/create-assets-url": 89,
            "../../lib/create-deferred-client": 91,
            "../../lib/destructor": 92,
            "../../lib/errors": 94,
            "../../lib/find-root-node": 95,
            "../../lib/is-verified-domain": 96,
            "../../lib/methods": 98,
            "../../lib/promise": 100,
            "../../lib/shadow": 101,
            "../shared/browser-detection": 74,
            "../shared/constants": 75,
            "../shared/errors": 76,
            "../shared/find-parent-tags": 77,
            "../shared/focus-intercept": 78,
            "../shared/get-card-types": 79,
            "./attribute-validation-error": 67,
            "./compose-url": 68,
            "./focus-change": 69,
            "./get-styles-from-class": 70,
            "./inject-frame": 72,
            "@braintree/class-list": 30,
            "@braintree/event-emitter": 31,
            "@braintree/iframer": 33,
            "@braintree/uuid": 37,
            "@braintree/wrap-promise": 41,
            framebus: 50
        }],
        72: [function(e, t) {
            "use strict";
            var c = e("../shared/focus-intercept")
              , u = e("../shared/constants").navigationDirections;
            t.exports = function(e, t, n, r) {
                var i = t.getAttribute("type")
                  , o = document.createElement("div")
                  , a = document.createDocumentFragment()
                  , s = c.generate(e, i, u.BACK, r);
                r = c.generate(e, i, u.FORWARD, r);
                return o.style.clear = "both",
                a.appendChild(s),
                a.appendChild(t),
                a.appendChild(r),
                a.appendChild(o),
                n.appendChild(a),
                [t, o]
            }
        }
        , {
            "../shared/constants": 75,
            "../shared/focus-intercept": 78
        }],
        73: [function(e, t) {
            "use strict";
            var r = e("./external/hosted-fields")
              , n = e("../lib/basic-component-verification")
              , i = e("./shared/errors")
              , o = e("restricted-input/supports-input-formatting")
              , a = e("@braintree/wrap-promise")
              , s = e("../lib/braintree-error")
              , c = e("../lib/promise");
            t.exports = {
                supportsInputFormatting: o,
                create: a(function(e) {
                    return n.verify({
                        name: "Hosted Fields",
                        authorization: e.authorization,
                        client: e.client
                    }).then(function() {
                        var n = new r(e);
                        return new c(function(e, t) {
                            n.on("ready", function() {
                                e(n)
                            }),
                            n.on("timeout", function() {
                                t(new s(i.HOSTED_FIELDS_TIMEOUT))
                            })
                        }
                        )
                    })
                }),
                VERSION: "3.82.0"
            }
        }
        , {
            "../lib/basic-component-verification": 84,
            "../lib/braintree-error": 86,
            "../lib/promise": 100,
            "./external/hosted-fields": 71,
            "./shared/errors": 76,
            "@braintree/wrap-promise": 41,
            "restricted-input/supports-input-formatting": 66
        }],
        74: [function(e, t) {
            "use strict";
            var n = e("@braintree/browser-detection/is-android")
              , r = e("@braintree/browser-detection/is-chrome-os")
              , i = e("@braintree/browser-detection/is-ios")
              , o = e("@braintree/browser-detection/is-chrome");
            t.exports = {
                isIE: e("@braintree/browser-detection/is-ie"),
                isEdge: e("@braintree/browser-detection/is-edge"),
                isIe9: e("@braintree/browser-detection/is-ie9"),
                isIe10: e("@braintree/browser-detection/is-ie10"),
                isAndroid: n,
                isChromeOS: r,
                isChromeIos: function() {
                    return o() && i()
                },
                isFirefox: e("@braintree/browser-detection/is-firefox"),
                isIos: i,
                isIosWebview: e("@braintree/browser-detection/is-ios-webview"),
                hasSoftwareKeyboard: function() {
                    return n() || r() || i()
                }
            }
        }
        , {
            "@braintree/browser-detection/is-android": 20,
            "@braintree/browser-detection/is-chrome": 22,
            "@braintree/browser-detection/is-chrome-os": 21,
            "@braintree/browser-detection/is-edge": 23,
            "@braintree/browser-detection/is-firefox": 24,
            "@braintree/browser-detection/is-ie": 25,
            "@braintree/browser-detection/is-ie10": 26,
            "@braintree/browser-detection/is-ie9": 27,
            "@braintree/browser-detection/is-ios": 29,
            "@braintree/browser-detection/is-ios-webview": 28
        }],
        75: [function(e, t) {
            "use strict";
            var n = e("../../lib/enumerate");
            (e = {
                VERSION: "3.82.0",
                maxExpirationYearAge: 19,
                externalEvents: {
                    FOCUS: "focus",
                    BLUR: "blur",
                    EMPTY: "empty",
                    NOT_EMPTY: "notEmpty",
                    VALIDITY_CHANGE: "validityChange",
                    CARD_TYPE_CHANGE: "cardTypeChange"
                },
                defaultMaxLengths: {
                    number: 19,
                    postalCode: 8,
                    expirationDate: 7,
                    expirationMonth: 2,
                    expirationYear: 4,
                    cvv: 3
                },
                externalClasses: {
                    FOCUSED: "braintree-hosted-fields-focused",
                    INVALID: "braintree-hosted-fields-invalid",
                    VALID: "braintree-hosted-fields-valid"
                },
                navigationDirections: {
                    BACK: "before",
                    FORWARD: "after"
                },
                defaultIFrameStyle: {
                    border: "none",
                    width: "100%",
                    height: "100%",
                    "float": "left"
                },
                tokenizationErrorCodes: {
                    81724: (e = e("./errors")).HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
                    81736: e.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
                },
                allowedStyles: ["-moz-appearance", "-moz-box-shadow", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-box-shadow", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "box-shadow", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "opacity", "outline", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "text-align", "text-shadow", "transition"],
                allowedFields: {
                    cardholderName: {
                        name: "cardholder-name",
                        label: "Cardholder Name"
                    },
                    number: {
                        name: "credit-card-number",
                        label: "Credit Card Number"
                    },
                    cvv: {
                        name: "cvv",
                        label: "CVV"
                    },
                    expirationDate: {
                        name: "expiration",
                        label: "Expiration Date"
                    },
                    expirationMonth: {
                        name: "expiration-month",
                        label: "Expiration Month"
                    },
                    expirationYear: {
                        name: "expiration-year",
                        label: "Expiration Year"
                    },
                    postalCode: {
                        name: "postal-code",
                        label: "Postal Code"
                    }
                },
                allowedAttributes: {
                    "aria-invalid": "boolean",
                    "aria-required": "boolean",
                    disabled: "boolean",
                    placeholder: "string"
                },
                autocompleteMappings: {
                    "cardholder-name": "cc-name",
                    "credit-card-number": "cc-number",
                    expiration: "cc-exp",
                    "expiration-month": "cc-exp-month",
                    "expiration-year": "cc-exp-year",
                    cvv: "cc-csc",
                    "postal-code": "billing postal-code"
                }
            }).events = n(["ADD_CLASS", "AUTOFILL_DATA_AVAILABLE", "BIN_AVAILABLE", "CARD_FORM_ENTRY_HAS_BEGUN", "CLEAR_FIELD", "CONFIGURATION", "FRAME_READY", "INPUT_EVENT", "READY_FOR_CLIENT", "REMOVE_ATTRIBUTE", "REMOVE_CLASS", "REMOVE_FOCUS_INTERCEPTS", "SET_ATTRIBUTE", "SET_MESSAGE", "SET_MONTH_OPTIONS", "TOKENIZATION_REQUEST", "TRIGGER_FOCUS_CHANGE", "TRIGGER_INPUT_FOCUS", "VALIDATE_STRICT"], "hosted-fields:"),
            t.exports = e
        }
        , {
            "../../lib/enumerate": 93,
            "./errors": 76
        }],
        76: [function(e, t) {
            "use strict";
            e = e("../../lib/braintree-error"),
            t.exports = {
                HOSTED_FIELDS_TIMEOUT: {
                    type: e.types.UNKNOWN,
                    code: "HOSTED_FIELDS_TIMEOUT",
                    message: "Hosted Fields timed out when attempting to set up."
                },
                HOSTED_FIELDS_INVALID_FIELD_KEY: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_INVALID_FIELD_KEY"
                },
                HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
                    message: "Selector does not reference a valid DOM node."
                },
                HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
                    message: "Element already contains a Braintree iframe."
                },
                HOSTED_FIELDS_FIELD_INVALID: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_FIELD_INVALID"
                },
                HOSTED_FIELDS_FIELD_NOT_PRESENT: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_FIELD_NOT_PRESENT"
                },
                HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
                    type: e.types.NETWORK,
                    code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
                    message: "A tokenization network error occurred."
                },
                HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
                    type: e.types.CUSTOMER,
                    code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
                    message: "This credit card already exists in the merchant's vault."
                },
                HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
                    type: e.types.CUSTOMER,
                    code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
                    message: "CVV verification failed during tokenization."
                },
                HOSTED_FIELDS_FAILED_TOKENIZATION: {
                    type: e.types.CUSTOMER,
                    code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
                    message: "The supplied card data failed tokenization."
                },
                HOSTED_FIELDS_FIELDS_EMPTY: {
                    type: e.types.CUSTOMER,
                    code: "HOSTED_FIELDS_FIELDS_EMPTY",
                    message: "All fields are empty. Cannot tokenize empty card fields."
                },
                HOSTED_FIELDS_FIELDS_INVALID: {
                    type: e.types.CUSTOMER,
                    code: "HOSTED_FIELDS_FIELDS_INVALID",
                    message: "Some payment input fields are invalid. Cannot tokenize invalid card fields."
                },
                HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"
                },
                HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"
                },
                HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
                    type: e.types.MERCHANT,
                    code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID"
                }
            }
        }
        , {
            "../../lib/braintree-error": 86
        }],
        77: [function(e, t) {
            "use strict";
            t.exports = function(e, t) {
                for (var n = e.parentNode, r = []; null != n; )
                    null != n.tagName && n.tagName.toLowerCase() === t && r.push(n),
                    n = n.parentNode;
                return r
            }
        }
        , {}],
        78: [function(e, t) {
            "use strict";
            var o = e("./browser-detection")
              , a = e("@braintree/class-list")
              , r = (e = e("./constants"),
            Object.keys(e.allowedFields))
              , i = e.navigationDirections
              , n = {
                generate: function(e, t, n, r) {
                    var i = document.createElement("input");
                    return o.hasSoftwareKeyboard() || o.isFirefox() || o.isIE() ? (i.setAttribute("aria-hidden", "true"),
                    i.setAttribute("autocomplete", "off"),
                    i.setAttribute("data-braintree-direction", n),
                    i.setAttribute("data-braintree-type", t),
                    i.setAttribute("id", "bt-" + t + "-" + n + "-" + e),
                    i.setAttribute("style", JSON.stringify({
                        border: "none !important",
                        display: "block !important",
                        height: "1px !important",
                        left: "-1px !important",
                        opacity: "0 !important",
                        position: "absolute !important",
                        top: "-1px !important",
                        width: "1px !important"
                    }).replace(/[{}"]/g, "").replace(/,/g, ";")),
                    a.add(i, "focus-intercept"),
                    i.addEventListener("focus", function(e) {
                        r(e),
                        o.hasSoftwareKeyboard() || i.blur()
                    }),
                    i) : document.createDocumentFragment()
                },
                destroy: function(e) {
                    var t = e ? [document.getElementById(e)] : (t = document.querySelectorAll("[data-braintree-direction]"),
                    [].slice.call(t));
                    t.forEach(function(e) {
                        e && 1 === e.nodeType && n.matchFocusElement(e.getAttribute("id")) && e.parentNode.removeChild(e)
                    })
                },
                matchFocusElement: function(e) {
                    var t, n;
                    return !!e && !((n = e.split("-")).length < 4) && (t = "bt" === n[0],
                    e = -1 < r.indexOf(n[1]),
                    n = n[2] === i.BACK || n[2] === i.FORWARD,
                    Boolean(t && e && n))
                }
            };
            t.exports = n
        }
        , {
            "./browser-detection": 74,
            "./constants": 75,
            "@braintree/class-list": 30
        }],
        79: [function(e, t) {
            "use strict";
            var n = e("credit-card-type");
            t.exports = function(e) {
                return (e = n(e)).forEach(function(e) {
                    "mastercard" === e.type && (e.type = "master-card")
                }),
                e
            }
        }
        , {
            "credit-card-type": 42
        }],
        80: [function(e, t) {
            "use strict";
            var o = e("./create-authorization-data")
              , a = e("./json-clone")
              , s = e("./constants");
            t.exports = function(e, t) {
                var n, r = t ? a(t) : {}, i = (t = o(e.authorization).attrs,
                a(e.analyticsMetadata));
                for (n in r.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION,
                r._meta)
                    r._meta.hasOwnProperty(n) && (i[n] = r._meta[n]);
                return r._meta = i,
                t.tokenizationKey ? r.tokenizationKey = t.tokenizationKey : r.authorizationFingerprint = t.authorizationFingerprint,
                r
            }
        }
        , {
            "./constants": 87,
            "./create-authorization-data": 90,
            "./json-clone": 97
        }],
        81: [function(e, t) {
            "use strict";
            var n = e("./promise")
              , s = e("./constants")
              , c = e("./add-metadata");
            t.exports = {
                sendEvent: function(e, i, o) {
                    var a = Date.now();
                    return n.resolve(e).then(function(e) {
                        var t = Date.now()
                          , n = e.getConfiguration()
                          , r = e._request;
                        e = n.gatewayConfiguration.analytics.url,
                        t = {
                            analytics: [{
                                kind: s.ANALYTICS_PREFIX + i,
                                isAsync: Math.floor(t / 1e3) !== Math.floor(a / 1e3),
                                timestamp: a
                            }]
                        };
                        r({
                            url: e,
                            method: "post",
                            data: c(n, t),
                            timeout: s.ANALYTICS_REQUEST_TIMEOUT_MS
                        }, o)
                    })
                }
            }
        }
        , {
            "./add-metadata": 80,
            "./constants": 87,
            "./promise": 100
        }],
        82: [function(e, t) {
            "use strict";
            e = e("@braintree/asset-loader/load-script"),
            t.exports = {
                loadScript: e
            }
        }
        , {
            "@braintree/asset-loader/load-script": 3
        }],
        83: [function(e, t) {
            "use strict";
            function n(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                    for (n in t = arguments[r])
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            var r = "function" == typeof Object.assign ? Object.assign : n;
            t.exports = {
                assign: r,
                _assign: n
            }
        }
        , {}],
        84: [function(e, t) {
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
            "./braintree-error": 86,
            "./errors": 94,
            "./promise": 100
        }],
        85: [function(e, t) {
            "use strict";
            var u = e("./once");
            t.exports = function(e, t) {
                function n(e) {
                    e ? c(e) : 0 == --s && c(null)
                }
                var r, i, o, a = e.length, s = a, c = u(t);
                if (0 !== a)
                    for (r = 0; r < a; r++)
                        o = n,
                        0 === (i = e[r]).length ? (i(),
                        o(null)) : i(o);
                else
                    c(null)
            }
        }
        , {
            "./once": 99
        }],
        86: [function(e, t) {
            "use strict";
            function n(e) {
                if (!n.types.hasOwnProperty(e.type))
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
            e = e("./enumerate"),
            ((n.prototype = Object.create(Error.prototype)).constructor = n).types = e(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]),
            n.findRootError = function(e) {
                return e instanceof n && e.details && e.details.originalError ? n.findRootError(e.details.originalError) : e
            }
            ,
            t.exports = n
        }
        , {
            "./enumerate": 93
        }],
        87: [function(e, t) {
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
        88: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./errors");
            t.exports = function(t, e) {
                e.forEach(function(e) {
                    t[e] = function() {
                        throw new n({
                            type: r.METHOD_CALLED_AFTER_TEARDOWN.type,
                            code: r.METHOD_CALLED_AFTER_TEARDOWN.code,
                            message: e + " cannot be called after teardown."
                        })
                    }
                })
            }
        }
        , {
            "./braintree-error": 86,
            "./errors": 94
        }],
        89: [function(e, t) {
            "use strict";
            var n = e("./constants").ASSETS_URLS;
            t.exports = {
                create: function() {
                    return n.production
                }
            }
        }
        , {
            "./constants": 87
        }],
        90: [function(e, t) {
            "use strict";
            var i = e("../lib/vendor/polyfill").atob
              , o = e("../lib/constants").CLIENT_API_URLS;
            t.exports = function(e) {
                var t, n, r = {
                    attrs: {},
                    configUrl: ""
                };
                return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (t = (n = (t = e).split("_"))[0],
                t = {
                    merchantId: n.slice(2).join("_"),
                    environment: t
                },
                r.environment = t.environment,
                r.attrs.tokenizationKey = e,
                r.configUrl = o[t.environment] + "/merchants/" + t.merchantId + "/client_api/v1/configuration") : (e = JSON.parse(i(e)),
                r.environment = e.environment,
                r.attrs.authorizationFingerprint = e.authorizationFingerprint,
                r.configUrl = e.configUrl,
                r.graphQL = e.graphQL),
                r
            }
        }
        , {
            "../lib/constants": 87,
            "../lib/vendor/polyfill": 103
        }],
        91: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./promise")
              , i = e("./assets")
              , o = e("./errors")
              , a = "3.82.0";
            t.exports = {
                create: function(e) {
                    var t = r.resolve();
                    return e.client ? r.resolve(e.client) : (t = window.braintree && window.braintree.client ? t : i.loadScript({
                        src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
                    })["catch"](function(e) {
                        return r.reject(new n({
                            type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                            code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                            message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })).then(function() {
                        return window.braintree.client.VERSION !== a ? r.reject(new n({
                            type: o.INCOMPATIBLE_VERSIONS.type,
                            code: o.INCOMPATIBLE_VERSIONS.code,
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
            "./assets": 82,
            "./braintree-error": 86,
            "./errors": 94,
            "./promise": 100
        }],
        92: [function(e, t) {
            "use strict";
            function n() {
                this._teardownRegistry = [],
                this._isTearingDown = !1
            }
            var r = e("./batch-execute-functions");
            n.prototype.registerFunctionForTeardown = function(e) {
                "function" == typeof e && this._teardownRegistry.push(e)
            }
            ,
            n.prototype.teardown = function(t) {
                this._isTearingDown ? t(new Error("Destructor is already tearing down")) : (this._isTearingDown = !0,
                r(this._teardownRegistry, function(e) {
                    this._teardownRegistry = [],
                    this._isTearingDown = !1,
                    "function" == typeof t && t(e)
                }
                .bind(this)))
            }
            ,
            t.exports = n
        }
        , {
            "./batch-execute-functions": 85
        }],
        93: [function(e, t) {
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
        94: [function(e, t) {
            "use strict";
            e = e("./braintree-error"),
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
            "./braintree-error": 86
        }],
        95: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                for (; e.parentNode; )
                    e = e.parentNode;
                return e
            }
        }
        , {}],
        96: [function(e, t) {
            "use strict";
            var n, r = {
                "paypal.com": 1,
                "braintreepayments.com": 1,
                "braintreegateway.com": 1,
                "braintree-api.com": 1
            };
            t.exports = function(e) {
                return e = e.toLowerCase(),
                !!/^https:/.test(e) && ((n = n || document.createElement("a")).href = e,
                e = n.hostname.split(".").slice(-2).join("."),
                r.hasOwnProperty(e))
            }
        }
        , {}],
        97: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }
        , {}],
        98: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return Object.keys(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            }
        }
        , {}],
        99: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    e.apply(null, arguments))
                }
            }
        }
        , {}],
        100: [function(e, t) {
            "use strict";
            var n = e("promise-polyfill");
            e = e("@braintree/extended-promise"),
            n = "undefined" != typeof Promise ? Promise : n;
            e.suppressUnhandledPromiseMessage = !0,
            e.setPromise(n),
            t.exports = n
        }
        , {
            "@braintree/extended-promise": 32,
            "promise-polyfill": 63
        }],
        101: [function(s, e) {
            "use strict";
            function c(e) {
                return "[object ShadowRoot]" === (e = d(e)).toString()
            }
            function u(e) {
                return c(e = d(e)) ? e.host : null
            }
            var l = s("@braintree/uuid")
              , d = s("./find-root-node");
            e.exports = {
                isShadowElement: c,
                getShadowHost: u,
                transformToSlot: function s(e, t) {
                    var n = d(e).querySelector("style")
                      , r = u(e)
                      , i = "shadow-slot-" + l()
                      , o = document.createElement("slot")
                      , a = document.createElement("div");
                    return o.setAttribute("name", i),
                    e.appendChild(o),
                    a.setAttribute("slot", i),
                    r.appendChild(a),
                    t && (n || (n = document.createElement("style"),
                    e.appendChild(n)),
                    n.sheet.insertRule('::slotted([slot="' + i + '"]) { ' + t + " }")),
                    c(r) ? s(a, t) : a
                }
            }
        }
        , {
            "./find-root-node": 95,
            "@braintree/uuid": 37
        }],
        102: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e ? "" : ".min"
            }
        }
        , {}],
        103: [function(e, t) {
            "use strict";
            function n(e) {
                var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "";
                if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))
                    throw new Error("Non base64 encoded input passed to window.atob polyfill");
                for (o = 0; n = a.indexOf(e.charAt(o++)),
                t = (15 & (r = a.indexOf(e.charAt(o++)))) << 4 | (i = a.indexOf(e.charAt(o++))) >> 2 & 15,
                i = (3 & i) << 6 | 63 & a.indexOf(e.charAt(o++)),
                s += String.fromCharCode((63 & n) << 2 | r >> 4 & 3) + (t ? String.fromCharCode(t) : "") + (i ? String.fromCharCode(i) : ""),
                o < e.length; )
                    ;
                return s
            }
            var r = "function" == typeof atob ? atob : n;
            t.exports = {
                atob: function(e) {
                    return r.call(window, e)
                },
                _atob: n
            }
        }
        , {}]
    }, {}, [73])(73)
}),
function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).paypal = e()
}(function() {
    return function c(r, i, o) {
        function a(t, e) {
            if (!i[t]) {
                if (!r[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n)
                        return n(t, !0);
                    if (s)
                        return s(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    n
                }
                n = i[t] = {
                    exports: {}
                },
                r[t][0].call(n.exports, function(e) {
                    return a(r[t][1][e] || e)
                }, n, n.exports, c, r, i, o)
            }
            return i[t].exports
        }
        for (var s = "function" == typeof require && require, e = 0; e < o.length; e++)
            a(o[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PromiseGlobal = void 0,
            e = r(e("promise-polyfill")),
            e = "undefined" != typeof Promise ? Promise : e["default"],
            n.PromiseGlobal = e
        }
        , {
            "promise-polyfill": 47
        }],
        2: [function(e, t) {
            "use strict";
            function n(n) {
                var e, t = JSON.stringify(n);
                if (!n.forceScriptReload && (e = s[t]))
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
                e = new a.PromiseGlobal(function(e, t) {
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
                s[t] = e
            }
            var a = e("./lib/promise")
              , s = {};
            n.clearCache = function() {
                s = {}
            }
            ,
            t.exports = n
        }
        , {
            "./lib/promise": 1
        }],
        3: [function(e, t) {
            t.exports = e("./dist/load-script")
        }
        , {
            "./dist/load-script": 2
        }],
        4: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /Android/.test(e)
            }
        }
        , {}],
        5: [function(e, t) {
            "use strict";
            var n = e("./is-edge")
              , r = e("./is-samsung")
              , i = e("./is-duckduckgo")
              , o = e("./is-opera")
              , a = e("./is-silk");
            t.exports = function(e) {
                return !(-1 === (e = e || window.navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || n(e) || r(e) || i(e) || o(e) || a(e))
            }
        }
        , {
            "./is-duckduckgo": 6,
            "./is-edge": 7,
            "./is-opera": 15,
            "./is-samsung": 16,
            "./is-silk": 17
        }],
        6: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/")
            }
        }
        , {}],
        7: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/")
            }
        }
        , {}],
        8: [function(e, t) {
            "use strict";
            var n = e("./is-ie11");
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE") || n(e)
            }
        }
        , {
            "./is-ie11": 9
        }],
        9: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Trident/7")
            }
        }
        , {}],
        10: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /FxiOS/i.test(e)
            }
        }
        , {}],
        11: [function(e, t) {
            "use strict";
            var n = e("./is-ios");
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                n(e) && /\bGSA\b/.test(e)
            }
        }
        , {
            "./is-ios": 14
        }],
        12: [function(e, t) {
            "use strict";
            var n = e("./is-ios")
              , r = e("./is-ios-google-search-app");
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                !!n(e) && (!!r(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
            }
        }
        , {
            "./is-ios": 14,
            "./is-ios-google-search-app": 11
        }],
        13: [function(e, t) {
            "use strict";
            var n = e("./is-ios-webview");
            t.exports = function(e, t) {
                return t = void 0 !== t ? t : window.statusbar.visible,
                n(e) && t
            }
        }
        , {
            "./is-ios-webview": 12
        }],
        14: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /iPhone|iPod|iPad/i.test(e)
            }
        }
        , {}],
        15: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("OPR/") || -1 !== e.indexOf("Opera/") || -1 !== e.indexOf("OPT/")
            }
        }
        , {}],
        16: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                /SamsungBrowser/i.test(e)
            }
        }
        , {}],
        17: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/")
            }
        }
        , {}],
        18: [function(e, t) {
            "use strict";
            function n(e) {
                return -1 < (e = e || window.navigator.userAgent).indexOf("Opera Mini")
            }
            var r = e("./is-android")
              , i = e("./is-ios-firefox")
              , o = e("./is-ios-webview")
              , a = e("./is-chrome")
              , s = e("./is-samsung")
              , c = e("./is-duckduckgo");
            t.exports = function(e) {
                return e = e || window.navigator.userAgent,
                !(o(e) || i(e) || (t = (t = e) || window.navigator.userAgent,
                r(t) && /Version\/[\d.]+/.test(t) && !n(t) && !c(t)) || n(e) || (t = (t = (t = e) || window.navigator.userAgent).match(/CriOS\/(\d+)\./)) && parseInt(t[1], 10) < 48 || !a(e = e) && !s(e) && /samsung/i.test(e));
                var t
            }
        }
        , {
            "./is-android": 4,
            "./is-chrome": 5,
            "./is-duckduckgo": 6,
            "./is-ios-firefox": 10,
            "./is-ios-webview": 12,
            "./is-samsung": 16
        }],
        19: [function(e, t) {
            t.exports = e("./dist/is-ie")
        }
        , {
            "./dist/is-ie": 8
        }],
        20: [function(e, t) {
            t.exports = e("./dist/is-ios-wkwebview")
        }
        , {
            "./dist/is-ios-wkwebview": 13
        }],
        21: [function(e, t) {
            t.exports = e("./dist/is-ios")
        }
        , {
            "./dist/is-ios": 14
        }],
        22: [function(e, t) {
            t.exports = e("./dist/supports-popups")
        }
        , {
            "./dist/supports-popups": 18
        }],
        23: [function(e, t) {
            "use strict";
            function r(e) {
                var n = this;
                "function" != typeof e ? (this._promise = new r.Promise(function(e, t) {
                    n._resolveFunction = e,
                    n._rejectFunction = t
                }
                ),
                this._onResolve = (e = e || {}).onResolve || r.defaultOnResolve,
                this._onReject = e.onReject || r.defaultOnReject,
                r.shouldCatchExceptions(e) && this._promise["catch"](function() {}),
                this._resetState()) : this._promise = new r.Promise(e)
            }
            var n = "undefined" != typeof Promise ? Promise : null;
            r.defaultOnResolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.defaultOnReject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.setPromise = function(e) {
                r.Promise = e
            }
            ,
            r.shouldCatchExceptions = function(e) {
                return e.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(e.suppressUnhandledPromiseMessage) : Boolean(r.suppressUnhandledPromiseMessage)
            }
            ,
            r.all = function(e) {
                return r.Promise.all(e)
            }
            ,
            r.allSettled = function(e) {
                return r.Promise.allSettled(e)
            }
            ,
            r.race = function(e) {
                return r.Promise.race(e)
            }
            ,
            r.reject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.resolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.prototype.then = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).then.apply(e, t)
            }
            ,
            r.prototype["catch"] = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise)["catch"].apply(e, t)
            }
            ,
            r.prototype.resolve = function(e) {
                var t = this;
                return this.isFulfilled || (this._setResolved(),
                r.Promise.resolve().then(function() {
                    return t._onResolve(e)
                }).then(function(e) {
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    t._resetState(),
                    t.reject(e)
                })),
                this
            }
            ,
            r.prototype.reject = function(e) {
                var t = this;
                return this.isFulfilled || (this._setRejected(),
                r.Promise.resolve().then(function() {
                    return t._onReject(e)
                }).then(function(e) {
                    t._setResolved(),
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    return t._rejectFunction(e)
                })),
                this
            }
            ,
            r.prototype._resetState = function() {
                this.isFulfilled = !1,
                this.isResolved = !1,
                this.isRejected = !1
            }
            ,
            r.prototype._setResolved = function() {
                this.isFulfilled = !0,
                this.isResolved = !0,
                this.isRejected = !1
            }
            ,
            r.prototype._setRejected = function() {
                this.isFulfilled = !0,
                this.isResolved = !1,
                this.isRejected = !0
            }
            ,
            r.Promise = n,
            n = r;
            t.exports = n
        }
        , {}],
        24: [function(e, t) {
            "use strict";
            var n = e("./lib/set-attributes")
              , r = e("./lib/default-attributes")
              , i = e("./lib/assign");
            t.exports = function(e) {
                void 0 === e && (e = {});
                var t = document.createElement("iframe");
                return (e = i.assign({}, r.defaultAttributes, e)).style && "string" != typeof e.style && (i.assign(t.style, e.style),
                delete e.style),
                n.setAttributes(t, e),
                t.getAttribute("id") || (t.id = t.name),
                t
            }
        }
        , {
            "./lib/assign": 25,
            "./lib/default-attributes": 26,
            "./lib/set-attributes": 27
        }],
        25: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.assign = void 0,
            n.assign = function(n) {
                for (var e = [], t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t];
                return e.forEach(function(t) {
                    "object" == typeof t && Object.keys(t).forEach(function(e) {
                        n[e] = t[e]
                    })
                }),
                n
            }
        }
        , {}],
        26: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.defaultAttributes = void 0,
            n.defaultAttributes = {
                src: "about:blank",
                frameBorder: 0,
                allowtransparency: !0,
                scrolling: "no"
            }
        }
        , {}],
        27: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.setAttributes = void 0,
            n.setAttributes = function(e, t) {
                for (var n in t) {
                    var r;
                    t.hasOwnProperty(n) && (null == (r = t[n]) ? e.removeAttribute(n) : e.setAttribute(n, r))
                }
            }
        }
        , {}],
        28: [function(e, t) {
            "use strict";
            t.exports = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
        }
        , {}],
        29: [function(e, t, n) {
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
        30: [function(e, t, n) {
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
        31: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.promiseOrCallback = function(e, t) {
                if (!t)
                    return e;
                e.then(function(e) {
                    return t(null, e)
                })["catch"](function(e) {
                    return t(e)
                })
            }
        }
        , {}],
        32: [function(e, t) {
            "use strict";
            function n(r) {
                return function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return "function" == typeof t[t.length - 1] && (e = t.pop(),
                    e = o.once(i.deferred(e))),
                    a.promiseOrCallback(r.apply(this, t), e)
                }
            }
            var i = e("./lib/deferred")
              , o = e("./lib/once")
              , a = e("./lib/promise-or-callback");
            n.wrapPrototype = function(r, e) {
                var i = (e = void 0 === e ? {} : e).ignoreMethods || []
                  , o = !0 === e.transformPrivateMethods;
                return Object.getOwnPropertyNames(r.prototype).filter(function(e) {
                    var t = "constructor" !== e && "function" == typeof r.prototype[e]
                      , n = -1 === i.indexOf(e);
                    e = o || "_" !== e.charAt(0);
                    return t && e && n
                }).forEach(function(e) {
                    var t = r.prototype[e];
                    r.prototype[e] = n(t)
                }),
                r
            }
            ,
            t.exports = n
        }
        , {
            "./lib/deferred": 29,
            "./lib/once": 30,
            "./lib/promise-or-callback": 31
        }],
        33: [function(e, t, n) {
            "use strict";
            function o(e) {
                this.origin = (e = void 0 === e ? {} : e).origin || "*",
                this.channel = e.channel || "",
                this.verifyDomain = e.verifyDomain,
                this.isDestroyed = !1,
                this.listeners = []
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.Framebus = void 0;
            var i = e("./lib/is-not-string")
              , s = e("./lib/subscription-args-invalid")
              , a = e("./lib/broadcast")
              , c = e("./lib/package-payload")
              , u = e("./lib/constants");
            e = "undefined" != typeof window && window.Promise,
            o.setPromise = function(e) {
                o.Promise = e
            }
            ,
            o.target = function(e) {
                return new o(e)
            }
            ,
            o.prototype.include = function(e) {
                return null != e && null != e.Window && e.constructor === e.Window && (u.childWindows.push(e),
                !0)
            }
            ,
            o.prototype.target = function(e) {
                return o.target(e)
            }
            ,
            o.prototype.emit = function(e, t, n) {
                if (this.isDestroyed)
                    return !1;
                var r = this.origin;
                return e = this.namespaceEvent(e),
                !i.isntString(e) && (!i.isntString(r) && ("function" == typeof t && (n = t,
                t = void 0),
                !!(n = c.packagePayload(e, r, t, n)) && (a.broadcast(window.top || window.self, n, r),
                !0)))
            }
            ,
            o.prototype.emitAsPromise = function(n, r) {
                var i = this;
                return new o.Promise(function(t, e) {
                    i.emit(n, r, function(e) {
                        t(e)
                    }) || e(new Error('Listener not added for "' + n + '"'))
                }
                )
            }
            ,
            o.prototype.on = function(e, n) {
                if (this.isDestroyed)
                    return !1;
                var r = this
                  , t = this.origin
                  , i = n;
                return e = this.namespaceEvent(e),
                !s.subscriptionArgsInvalid(e, i, t) && (this.verifyDomain && (i = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    r.checkOrigin(this && this.origin) && n.apply(void 0, e)
                }
                ),
                this.listeners.push({
                    eventName: e,
                    handler: i,
                    originalHandler: n
                }),
                u.subscribers[t] = u.subscribers[t] || {},
                u.subscribers[t][e] = u.subscribers[t][e] || [],
                u.subscribers[t][e].push(i),
                !0)
            }
            ,
            o.prototype.off = function(e, t) {
                var n = t;
                if (this.isDestroyed)
                    return !1;
                if (this.verifyDomain)
                    for (var r = 0; r < this.listeners.length; r++) {
                        var i = this.listeners[r];
                        i.originalHandler === t && (n = i.handler)
                    }
                e = this.namespaceEvent(e);
                var o = this.origin;
                if (s.subscriptionArgsInvalid(e, n, o))
                    return !1;
                var a = u.subscribers[o] && u.subscribers[o][e];
                if (!a)
                    return !1;
                for (r = 0; r < a.length; r++)
                    if (a[r] === n)
                        return a.splice(r, 1),
                        !0;
                return !1
            }
            ,
            o.prototype.teardown = function() {
                if (!this.isDestroyed) {
                    this.isDestroyed = !0;
                    for (var e = 0; e < this.listeners.length; e++) {
                        var t = this.listeners[e];
                        this.off(t.eventName, t.handler)
                    }
                    this.listeners.length = 0
                }
            }
            ,
            o.prototype.checkOrigin = function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = "https:" === t.protocol ? t.host.replace(/:443$/, "") : "http:" === t.protocol ? t.host.replace(/:80$/, "") : t.host;
                return t.protocol + "//" + n === e || !this.verifyDomain || this.verifyDomain(e)
            }
            ,
            o.prototype.namespaceEvent = function(e) {
                return this.channel ? this.channel + ":" + e : e
            }
            ,
            o.Promise = e,
            e = o;
            n.Framebus = e
        }
        , {
            "./lib/broadcast": 37,
            "./lib/constants": 38,
            "./lib/is-not-string": 41,
            "./lib/package-payload": 43,
            "./lib/subscription-args-invalid": 45
        }],
        34: [function(e, t) {
            "use strict";
            var n = e("./lib/attach");
            e = e("./framebus");
            n.attach(),
            t.exports = e.Framebus
        }
        , {
            "./framebus": 33,
            "./lib/attach": 35
        }],
        35: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.detach = n.attach = void 0;
            var r = e("./message")
              , i = !1;
            n.attach = function() {
                i || "undefined" == typeof window || (i = !0,
                window.addEventListener("message", r.onmessage, !1))
            }
            ,
            n.detach = function() {
                i = !1,
                window.removeEventListener("message", r.onmessage, !1)
            }
        }
        , {
            "./message": 42
        }],
        36: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.broadcastToChildWindows = void 0;
            var o = e("./broadcast")
              , a = e("./constants");
            n.broadcastToChildWindows = function(e, t, n) {
                for (var r = a.childWindows.length - 1; 0 <= r; r--) {
                    var i = a.childWindows[r];
                    i.closed ? a.childWindows.splice(r, 1) : n !== i && o.broadcast(i.top, e, t)
                }
            }
        }
        , {
            "./broadcast": 37,
            "./constants": 38
        }],
        37: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.broadcast = void 0;
            var o = e("./has-opener");
            n.broadcast = function a(e, t, n) {
                var r, i = 0;
                try {
                    for (e.postMessage(t, n),
                    o.hasOpener(e) && e.opener.top !== window.top && a(e.opener.top, t, n); r = e.frames[i]; )
                        a(r, t, n),
                        i++
                } catch (Hla) {}
            }
        }
        , {
            "./has-opener": 40
        }],
        38: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscribers = n.childWindows = n.prefix = void 0,
            n.prefix = "/*framebus*/",
            n.childWindows = [],
            n.subscribers = {}
        }
        , {}],
        39: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.dispatch = void 0;
            var s = e("./constants");
            n.dispatch = function(e, t, n, r, i) {
                if (s.subscribers[e] && s.subscribers[e][t]) {
                    var o = [];
                    n && o.push(n),
                    r && o.push(r);
                    for (var a = 0; a < s.subscribers[e][t].length; a++)
                        s.subscribers[e][t][a].apply(i, o)
                }
            }
        }
        , {
            "./constants": 38
        }],
        40: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.hasOpener = void 0,
            n.hasOpener = function(e) {
                return e.top === e && null != e.opener && e.opener !== e && !0 !== e.opener.closed
            }
        }
        , {}],
        41: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.isntString = void 0,
            n.isntString = function(e) {
                return "string" != typeof e
            }
        }
        , {}],
        42: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.onmessage = void 0;
            var i = e("./is-not-string")
              , o = e("./unpack-payload")
              , a = e("./dispatch")
              , s = e("./broadcast-to-child-windows");
            n.onmessage = function(e) {
                var t, n, r;
                i.isntString(e.data) || (t = o.unpackPayload(e)) && (n = t.eventData,
                r = t.reply,
                a.dispatch("*", t.event, n, r, e),
                a.dispatch(e.origin, t.event, n, r, e),
                s.broadcastToChildWindows(e.data, t.origin, e.source))
            }
        }
        , {
            "./broadcast-to-child-windows": 36,
            "./dispatch": 39,
            "./is-not-string": 41,
            "./unpack-payload": 46
        }],
        43: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.packagePayload = void 0;
            var o = e("./subscribe-replier")
              , a = e("./constants");
            n.packagePayload = function(e, t, n, r) {
                var i;
                e = {
                    event: e,
                    origin: t
                };
                "function" == typeof r && (e.reply = o.subscribeReplier(r, t)),
                e.eventData = n;
                try {
                    i = a.prefix + JSON.stringify(e)
                } catch (e) {
                    throw new Error("Could not stringify event: " + e.message)
                }
                return i
            }
        }
        , {
            "./constants": 38,
            "./subscribe-replier": 44
        }],
        44: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscribeReplier = void 0;
            var a = e("../framebus")
              , s = r(e("@braintree/uuid"));
            n.subscribeReplier = function(n, r) {
                var i = s["default"]();
                return a.Framebus.target({
                    origin: r
                }).on(i, function o(e, t) {
                    n(e, t),
                    a.Framebus.target({
                        origin: r
                    }).off(i, o)
                }),
                i
            }
        }
        , {
            "../framebus": 33,
            "@braintree/uuid": 28
        }],
        45: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.subscriptionArgsInvalid = void 0;
            var r = e("./is-not-string");
            n.subscriptionArgsInvalid = function(e, t, n) {
                return !!r.isntString(e) || "function" != typeof t || r.isntString(n)
            }
        }
        , {
            "./is-not-string": 41
        }],
        46: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.unpackPayload = void 0;
            var o = e("./constants")
              , a = e("./package-payload");
            n.unpackPayload = function(e) {
                var t, n, r, i;
                if (e.data.slice(0, o.prefix.length) !== o.prefix)
                    return !1;
                try {
                    t = JSON.parse(e.data.slice(o.prefix.length))
                } catch (e) {
                    return !1
                }
                return t.reply && (n = e.origin,
                r = e.source,
                i = t.reply,
                t.reply = function(e) {
                    !r || (e = a.packagePayload(i, n, e)) && r.postMessage(e, n)
                }
                ),
                t
            }
        }
        , {
            "./constants": 38,
            "./package-payload": 43
        }],
        47: [function(e, t) {
            "use strict";
            function c(e) {
                return Boolean(e && void 0 !== e.length)
            }
            function r() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                d(e, this)
            }
            function i(n, r) {
                for (; 3 === n._state; )
                    n = n._value;
                0 !== n._state ? (n._handled = !0,
                o._immediateFn(function() {
                    var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void s(r.promise, e)
                        }
                        a(r.promise, e)
                    } else
                        (1 === n._state ? a : s)(r.promise, n._value)
                })) : n._deferreds.push(r)
            }
            function a(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o)
                            return e._state = 3,
                            e._value = t,
                            void u(e);
                        if ("function" == typeof n)
                            return void d((r = n,
                            i = t,
                            function() {
                                r.apply(i, arguments)
                            }
                            ), e)
                    }
                    e._state = 1,
                    e._value = t,
                    u(e)
                } catch (t) {
                    s(e, t)
                }
                var r, i
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                u(e)
            }
            function u(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    i(e, e._deferreds[t]);
                e._deferreds = null
            }
            function l(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function d(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        s(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    s(t, e)
                }
            }
            var n = setTimeout;
            o.prototype["catch"] = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return i(this, new l(e,t,n)),
                n
            }
            ,
            o.prototype["finally"] = function(t) {
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
                return new o(function(r, i) {
                    if (!c(t))
                        return i(new TypeError("Promise.all accepts an array"));
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length)
                        return r([]);
                    for (var a = o.length, e = 0; e < o.length; e++)
                        !function s(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n)
                                        return void n.call(e, function(e) {
                                            s(t, e)
                                        }, i)
                                }
                                o[t] = e,
                                0 == --a && r(o)
                            } catch (e) {
                                i(e)
                            }
                        }(e, o[e])
                }
                )
            }
            ,
            o.allSettled = function(t) {
                return new this(function(r, e) {
                    if (!t || void 0 === t.length)
                        return e(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length)
                        return r([]);
                    for (var o = i.length, a = 0; a < i.length; a++)
                        !function a(t, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function(e) {
                                        a(t, e)
                                    }, function(e) {
                                        i[t] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        0 == --o && r(i)
                                    })
                            }
                            i[t] = {
                                status: "fulfilled",
                                value: e
                            },
                            0 == --o && r(i)
                        }(a, i[a])
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
                n(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            t.exports = o
        }
        , {}],
        48: [function(e, t) {
            "use strict";
            var o = e("./create-authorization-data")
              , a = e("./json-clone")
              , s = e("./constants");
            t.exports = function(e, t) {
                var n, r = t ? a(t) : {}, i = (t = o(e.authorization).attrs,
                a(e.analyticsMetadata));
                for (n in r.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION,
                r._meta)
                    r._meta.hasOwnProperty(n) && (i[n] = r._meta[n]);
                return r._meta = i,
                t.tokenizationKey ? r.tokenizationKey = t.tokenizationKey : r.authorizationFingerprint = t.authorizationFingerprint,
                r
            }
        }
        , {
            "./constants": 54,
            "./create-authorization-data": 58,
            "./json-clone": 75
        }],
        49: [function(e, t) {
            "use strict";
            var n = e("./promise")
              , s = e("./constants")
              , c = e("./add-metadata");
            t.exports = {
                sendEvent: function(e, i, o) {
                    var a = Date.now();
                    return n.resolve(e).then(function(e) {
                        var t = Date.now()
                          , n = e.getConfiguration()
                          , r = e._request;
                        e = n.gatewayConfiguration.analytics.url,
                        t = {
                            analytics: [{
                                kind: s.ANALYTICS_PREFIX + i,
                                isAsync: Math.floor(t / 1e3) !== Math.floor(a / 1e3),
                                timestamp: a
                            }]
                        };
                        r({
                            url: e,
                            method: "post",
                            data: c(n, t),
                            timeout: s.ANALYTICS_REQUEST_TIMEOUT_MS
                        }, o)
                    })
                }
            }
        }
        , {
            "./add-metadata": 48,
            "./constants": 54,
            "./promise": 78
        }],
        50: [function(e, t) {
            "use strict";
            e = e("@braintree/asset-loader/load-script"),
            t.exports = {
                loadScript: e
            }
        }
        , {
            "@braintree/asset-loader/load-script": 3
        }],
        51: [function(e, t) {
            "use strict";
            function n(e) {
                for (var t, n, r = 1; r < arguments.length; r++)
                    for (n in t = arguments[r])
                        t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            var r = "function" == typeof Object.assign ? Object.assign : n;
            t.exports = {
                assign: r,
                _assign: n
            }
        }
        , {}],
        52: [function(e, t) {
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
            "./braintree-error": 53,
            "./errors": 62,
            "./promise": 78
        }],
        53: [function(e, t) {
            "use strict";
            function n(e) {
                if (!n.types.hasOwnProperty(e.type))
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
            e = e("./enumerate"),
            ((n.prototype = Object.create(Error.prototype)).constructor = n).types = e(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]),
            n.findRootError = function(e) {
                return e instanceof n && e.details && e.details.originalError ? n.findRootError(e.details.originalError) : e
            }
            ,
            t.exports = n
        }
        , {
            "./enumerate": 61
        }],
        54: [function(e, t) {
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
        55: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./errors");
            t.exports = function(t, e) {
                e.forEach(function(e) {
                    t[e] = function() {
                        throw new n({
                            type: r.METHOD_CALLED_AFTER_TEARDOWN.type,
                            code: r.METHOD_CALLED_AFTER_TEARDOWN.code,
                            message: e + " cannot be called after teardown."
                        })
                    }
                })
            }
        }
        , {
            "./braintree-error": 53,
            "./errors": 62
        }],
        56: [function(e, t) {
            "use strict";
            var n = e("./braintree-error");
            t.exports = function(e, t) {
                return e instanceof n ? e : new n({
                    type: t.type,
                    code: t.code,
                    message: t.message,
                    details: {
                        originalError: e
                    }
                })
            }
        }
        , {
            "./braintree-error": 53
        }],
        57: [function(e, t) {
            "use strict";
            var n = e("./constants").ASSETS_URLS;
            t.exports = {
                create: function() {
                    return n.production
                }
            }
        }
        , {
            "./constants": 54
        }],
        58: [function(e, t) {
            "use strict";
            var i = e("../lib/vendor/polyfill").atob
              , o = e("../lib/constants").CLIENT_API_URLS;
            t.exports = function(e) {
                var t, n, r = {
                    attrs: {},
                    configUrl: ""
                };
                return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (t = (n = (t = e).split("_"))[0],
                t = {
                    merchantId: n.slice(2).join("_"),
                    environment: t
                },
                r.environment = t.environment,
                r.attrs.tokenizationKey = e,
                r.configUrl = o[t.environment] + "/merchants/" + t.merchantId + "/client_api/v1/configuration") : (e = JSON.parse(i(e)),
                r.environment = e.environment,
                r.attrs.authorizationFingerprint = e.authorizationFingerprint,
                r.configUrl = e.configUrl,
                r.graphQL = e.graphQL),
                r
            }
        }
        , {
            "../lib/constants": 54,
            "../lib/vendor/polyfill": 81
        }],
        59: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./promise")
              , i = e("./assets")
              , o = e("./errors")
              , a = "3.82.0";
            t.exports = {
                create: function(e) {
                    var t = r.resolve();
                    return e.client ? r.resolve(e.client) : (t = window.braintree && window.braintree.client ? t : i.loadScript({
                        src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
                    })["catch"](function(e) {
                        return r.reject(new n({
                            type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                            code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                            message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })).then(function() {
                        return window.braintree.client.VERSION !== a ? r.reject(new n({
                            type: o.INCOMPATIBLE_VERSIONS.type,
                            code: o.INCOMPATIBLE_VERSIONS.code,
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
            "./assets": 50,
            "./braintree-error": 53,
            "./errors": 62,
            "./promise": 78
        }],
        60: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return function() {
                    var e = arguments;
                    setTimeout(function() {
                        t.apply(null, e)
                    }, 1)
                }
            }
        }
        , {}],
        61: [function(e, t) {
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
        62: [function(e, t) {
            "use strict";
            e = e("./braintree-error"),
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
            "./braintree-error": 53
        }],
        63: [function(e, t) {
            "use strict";
            function n() {}
            function r(e) {
                !function(t) {
                    if (!t)
                        throw new Error("Valid configuration is required");
                    if (v.forEach(function(e) {
                        if (!t.hasOwnProperty(e))
                            throw new Error("A valid frame " + e + " must be provided")
                    }),
                    !/^[\w_]+$/.test(t.name))
                        throw new Error("A valid frame name must be provided")
                }(e),
                this._serviceId = d().replace(/-/g, ""),
                this._options = {
                    name: e.name + "_" + this._serviceId,
                    dispatchFrameUrl: e.dispatchFrameUrl,
                    openFrameUrl: e.openFrameUrl,
                    height: e.height,
                    width: e.width,
                    top: e.top,
                    left: e.left
                },
                this.state = e.state || {},
                this._bus = new s({
                    channel: this._serviceId
                }),
                this._setBusEvents()
            }
            var i = e("./strategies/popup")
              , o = e("./strategies/popup-bridge")
              , a = e("./strategies/modal")
              , s = e("framebus")
              , c = e("../shared/events")
              , u = e("../shared/errors")
              , l = e("../shared/constants")
              , d = e("@braintree/uuid")
              , p = e("@braintree/iframer")
              , f = e("../../braintree-error")
              , h = e("../shared/browser-detection")
              , m = e("../../is-https")
              , y = e("./../../assign").assign
              , g = e("../../constants").BUS_CONFIGURATION_REQUEST_EVENT
              , v = ["name", "dispatchFrameUrl", "openFrameUrl"];
            r.prototype.initialize = function(e) {
                var t = function() {
                    e(),
                    this._bus.off(c.DISPATCH_FRAME_READY, t)
                }
                .bind(this);
                this._bus.on(c.DISPATCH_FRAME_READY, t),
                this._writeDispatchFrame()
            }
            ,
            r.prototype._writeDispatchFrame = function() {
                var e = l.DISPATCH_FRAME_NAME + "_" + this._serviceId
                  , t = this._options.dispatchFrameUrl;
                this._dispatchFrame = p({
                    "aria-hidden": !0,
                    name: e,
                    title: e,
                    src: t,
                    "class": l.DISPATCH_FRAME_CLASS,
                    height: 0,
                    width: 0,
                    style: {
                        position: "absolute",
                        left: "-9999px"
                    }
                }),
                document.body.appendChild(this._dispatchFrame)
            }
            ,
            r.prototype._setBusEvents = function() {
                this._bus.on(c.DISPATCH_FRAME_REPORT, function(e, t) {
                    this._onCompleteCallback && this._onCompleteCallback.call(null, e.err, e.payload),
                    this._frame.close(),
                    this._onCompleteCallback = null,
                    t && t()
                }
                .bind(this)),
                this._bus.on(g, function(e) {
                    e(this.state)
                }
                .bind(this))
            }
            ,
            r.prototype.open = function(e, t) {
                if (this._frame = this._getFrameForEnvironment(e = e || {}),
                this._frame.initialize(t),
                !(this._frame instanceof o)) {
                    if (y(this.state, e.state),
                    this._onCompleteCallback = t,
                    this._frame.open(),
                    this.isFrameClosed())
                        return this._cleanupFrame(),
                        void (t && t(h.isIE() && !m.isHTTPS() ? new f(u.FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG) : new f(u.FRAME_SERVICE_FRAME_OPEN_FAILED)));
                    this._pollForPopupClose()
                }
            }
            ,
            r.prototype.redirect = function(e) {
                this._frame && !this.isFrameClosed() && this._frame.redirect(e)
            }
            ,
            r.prototype.close = function() {
                this.isFrameClosed() || this._frame.close()
            }
            ,
            r.prototype.focus = function() {
                this.isFrameClosed() || this._frame.focus()
            }
            ,
            r.prototype.createHandler = function(e) {
                return e = e || {},
                {
                    close: function() {
                        e.beforeClose && e.beforeClose(),
                        this.close()
                    }
                    .bind(this),
                    focus: function() {
                        e.beforeFocus && e.beforeFocus(),
                        this.focus()
                    }
                    .bind(this)
                }
            }
            ,
            r.prototype.createNoopHandler = function() {
                return {
                    close: n,
                    focus: n
                }
            }
            ,
            r.prototype.teardown = function() {
                this.close(),
                this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),
                this._dispatchFrame = null,
                this._cleanupFrame()
            }
            ,
            r.prototype.isFrameClosed = function() {
                return null == this._frame || this._frame.isClosed()
            }
            ,
            r.prototype._cleanupFrame = function() {
                this._frame = null,
                clearInterval(this._popupInterval),
                this._popupInterval = null
            }
            ,
            r.prototype._pollForPopupClose = function() {
                return this._popupInterval = setInterval(function() {
                    this.isFrameClosed() && (this._cleanupFrame(),
                    this._onCompleteCallback && this._onCompleteCallback(new f(u.FRAME_SERVICE_FRAME_CLOSED)))
                }
                .bind(this), l.POPUP_POLL_INTERVAL),
                this._popupInterval
            }
            ,
            r.prototype._getFrameForEnvironment = function(e) {
                var t = h.supportsPopups()
                  , n = Boolean(window.popupBridge);
                e = y({}, this._options, e);
                return new (n ? o : t ? i : a)(e)
            }
            ,
            t.exports = r
        }
        , {
            "../../braintree-error": 53,
            "../../constants": 54,
            "../../is-https": 74,
            "../shared/browser-detection": 70,
            "../shared/constants": 71,
            "../shared/errors": 72,
            "../shared/events": 73,
            "./../../assign": 51,
            "./strategies/modal": 65,
            "./strategies/popup": 68,
            "./strategies/popup-bridge": 66,
            "@braintree/iframer": 24,
            "@braintree/uuid": 28,
            framebus: 34
        }],
        64: [function(e, t) {
            "use strict";
            var r = e("./frame-service");
            t.exports = {
                create: function(e, t) {
                    var n = new r(e);
                    n.initialize(function() {
                        t(n)
                    })
                }
            }
        }
        , {
            "./frame-service": 63
        }],
        65: [function(e, t) {
            "use strict";
            function n() {}
            function r(e) {
                this._closed = null,
                this._frame = null,
                this._options = e || {},
                this._container = this._options.container || document.body
            }
            var i = e("@braintree/iframer")
              , o = e("../../../assign").assign
              , a = e("../../shared/browser-detection")
              , s = {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                padding: 0,
                margin: 0,
                border: 0,
                outline: "none",
                zIndex: 20001,
                background: "#FFFFFF"
            };
            r.prototype.initialize = n,
            r.prototype.open = function() {
                var e = {
                    src: this._options.openFrameUrl,
                    name: this._options.name,
                    scrolling: "yes",
                    height: "100%",
                    width: "100%",
                    style: o({}, s),
                    title: "Lightbox Frame"
                };
                a.isIos() ? (a.isIosWKWebview() && (this._lockScrolling(),
                e.style = {}),
                this._el = document.createElement("div"),
                o(this._el.style, s, {
                    height: "100%",
                    width: "100%",
                    overflow: "auto",
                    "-webkit-overflow-scrolling": "touch"
                }),
                this._frame = i(e),
                this._el.appendChild(this._frame)) : this._el = this._frame = i(e),
                this._closed = !1,
                this._container.appendChild(this._el)
            }
            ,
            r.prototype.focus = n,
            r.prototype.close = function() {
                this._container.removeChild(this._el),
                this._frame = null,
                this._closed = !0,
                a.isIosWKWebview() && this._unlockScrolling()
            }
            ,
            r.prototype.isClosed = function() {
                return Boolean(this._closed)
            }
            ,
            r.prototype.redirect = function(e) {
                this._frame.src = e
            }
            ,
            r.prototype._unlockScrolling = function() {
                document.body.style.overflow = this._savedBodyProperties.overflowStyle,
                document.body.style.position = this._savedBodyProperties.positionStyle,
                window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top),
                delete this._savedBodyProperties
            }
            ,
            r.prototype._lockScrolling = function() {
                var e = document.documentElement;
                this._savedBodyProperties = {
                    left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                    top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    overflowStyle: document.body.style.overflow,
                    positionStyle: document.body.style.position
                },
                document.body.style.overflow = "hidden",
                document.body.style.position = "fixed",
                window.scrollTo(0, 0)
            }
            ,
            t.exports = r
        }
        , {
            "../../../assign": 51,
            "../../shared/browser-detection": 70,
            "@braintree/iframer": 24
        }],
        66: [function(e, t) {
            "use strict";
            function n() {}
            function r(e) {
                this._closed = null,
                this._options = e
            }
            var o = e("../../../braintree-error")
              , a = e("../../shared/errors");
            r.prototype.initialize = function(r) {
                var i = this;
                window.popupBridge.onComplete = function(e, t) {
                    var n = !t && !e;
                    i._closed = !0,
                    e || n ? r(new o(a.FRAME_SERVICE_FRAME_CLOSED)) : r(null, t)
                }
            }
            ,
            r.prototype.open = function(e) {
                e = (e = e || {}).openFrameUrl || this._options.openFrameUrl,
                this._closed = !1,
                window.popupBridge.open(e)
            }
            ,
            r.prototype.focus = n,
            r.prototype.close = n,
            r.prototype.isClosed = function() {
                return Boolean(this._closed)
            }
            ,
            r.prototype.redirect = function(e) {
                this.open({
                    openFrameUrl: e
                })
            }
            ,
            t.exports = r
        }
        , {
            "../../../braintree-error": 53,
            "../../shared/errors": 72
        }],
        67: [function(e, t) {
            "use strict";
            function i(e, t, n) {
                return void 0 !== t ? t : r[e](n)
            }
            var o = e("../../../shared/constants")
              , r = e("./position");
            t.exports = function(e) {
                var t = e.height || o.DEFAULT_POPUP_HEIGHT
                  , n = e.width || o.DEFAULT_POPUP_WIDTH
                  , r = i("top", e.top, t);
                e = i("left", e.left, n);
                return [o.POPUP_BASE_OPTIONS, "height=" + t, "width=" + n, "top=" + r, "left=" + e].join(",")
            }
        }
        , {
            "../../../shared/constants": 71,
            "./position": 69
        }],
        68: [function(e, t) {
            "use strict";
            function n(e) {
                this._frame = null,
                this._options = e || {},
                this.open()
            }
            var r = e("./compose-options");
            n.prototype.initialize = function() {}
            ,
            n.prototype.open = function() {
                this._frame = window.open(this._options.openFrameUrl, this._options.name, r(this._options))
            }
            ,
            n.prototype.focus = function() {
                this._frame.focus()
            }
            ,
            n.prototype.close = function() {
                this._frame.closed || this._frame.close()
            }
            ,
            n.prototype.isClosed = function() {
                return !this._frame || Boolean(this._frame.closed)
            }
            ,
            n.prototype.redirect = function(e) {
                this._frame.location.href = e
            }
            ,
            t.exports = n
        }
        , {
            "./compose-options": 67
        }],
        69: [function(e, t) {
            "use strict";
            function n(e, t, n) {
                return (e - t) / 2 + n
            }
            t.exports = {
                top: function(e) {
                    return ((window.outerHeight || document.documentElement.clientHeight) - e) / 2 + (null == window.screenY ? window.screenTop : window.screenY)
                },
                left: function(e) {
                    return ((window.outerWidth || document.documentElement.clientWidth) - e) / 2 + (null == window.screenX ? window.screenLeft : window.screenX)
                },
                center: n
            }
        }
        , {}],
        70: [function(e, t) {
            "use strict";
            t.exports = {
                isIos: e("@braintree/browser-detection/is-ios"),
                isIosWKWebview: e("@braintree/browser-detection/is-ios-wkwebview"),
                isIE: e("@braintree/browser-detection/is-ie"),
                supportsPopups: e("@braintree/browser-detection/supports-popups")
            }
        }
        , {
            "@braintree/browser-detection/is-ie": 19,
            "@braintree/browser-detection/is-ios": 21,
            "@braintree/browser-detection/is-ios-wkwebview": 20,
            "@braintree/browser-detection/supports-popups": 22
        }],
        71: [function(e, t) {
            "use strict";
            t.exports = {
                DISPATCH_FRAME_NAME: "dispatch",
                DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
                POPUP_BASE_OPTIONS: "resizable,scrollbars",
                DEFAULT_POPUP_WIDTH: 450,
                DEFAULT_POPUP_HEIGHT: 535,
                POPUP_POLL_INTERVAL: 100,
                POPUP_CLOSE_TIMEOUT: 100
            }
        }
        , {}],
        72: [function(e, t) {
            "use strict";
            e = e("../../braintree-error"),
            t.exports = {
                FRAME_SERVICE_FRAME_CLOSED: {
                    type: e.types.INTERNAL,
                    code: "FRAME_SERVICE_FRAME_CLOSED",
                    message: "Frame closed before tokenization could occur."
                },
                FRAME_SERVICE_FRAME_OPEN_FAILED: {
                    type: e.types.INTERNAL,
                    code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
                    message: "Frame failed to open."
                },
                FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG: {
                    type: e.types.INTERNAL,
                    code: "FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG",
                    message: "Could not open frame. This may be due to a bug in IE browsers when attempting to open an HTTPS page from a HTTP page. https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11324352/"
                }
            }
        }
        , {
            "../../braintree-error": 53
        }],
        73: [function(e, t) {
            "use strict";
            e = e("../../enumerate"),
            t.exports = e(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:")
        }
        , {
            "../../enumerate": 61
        }],
        74: [function(e, t) {
            "use strict";
            t.exports = {
                isHTTPS: function(e) {
                    return "https:" === (e || window.location.protocol)
                }
            }
        }
        , {}],
        75: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }
        , {}],
        76: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return Object.keys(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            }
        }
        , {}],
        77: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                var t = !1;
                return function() {
                    t || (t = !0,
                    e.apply(null, arguments))
                }
            }
        }
        , {}],
        78: [function(e, t) {
            "use strict";
            var n = e("promise-polyfill");
            e = e("@braintree/extended-promise"),
            n = "undefined" != typeof Promise ? Promise : n;
            e.suppressUnhandledPromiseMessage = !0,
            e.setPromise(n),
            t.exports = n
        }
        , {
            "@braintree/extended-promise": 23,
            "promise-polyfill": 47
        }],
        79: [function(e, t) {
            "use strict";
            function n(e) {
                return e = e || window.location.href,
                /\?/.test(e)
            }
            function a(e, t) {
                var n, r, i, o = [];
                for (r in e)
                    e.hasOwnProperty(r) && (n = e[r],
                    i = t ? (i = e) && "object" == typeof i && "number" == typeof i.length && "[object Array]" === Object.prototype.toString.call(i) ? t + "[]" : t + "[" + r + "]" : r,
                    "object" == typeof n ? o.push(a(n, i)) : o.push(encodeURIComponent(i) + "=" + encodeURIComponent(n)));
                return o.join("&")
            }
            t.exports = {
                parse: function(e) {
                    return n(e = e || window.location.href) ? e.replace(/#.*$/, "").replace(/^.*\?/, "").split("&").reduce(function(e, t) {
                        var n = t.split("=");
                        t = decodeURIComponent(n[0]),
                        n = decodeURIComponent(n[1]);
                        return e[t] = n,
                        e
                    }, {}) : {}
                },
                stringify: a,
                queryify: function(e, t) {
                    return e = e || "",
                    null != t && "object" == typeof t && function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t))
                                return 1
                    }(t) && (e += -1 === e.indexOf("?") ? "?" : "",
                    e += -1 !== e.indexOf("=") ? "&" : "",
                    e += a(t)),
                    e
                },
                hasQueryParams: n
            }
        }
        , {}],
        80: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return e ? "" : ".min"
            }
        }
        , {}],
        81: [function(e, t) {
            "use strict";
            function n(e) {
                var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "";
                if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))
                    throw new Error("Non base64 encoded input passed to window.atob polyfill");
                for (o = 0; n = a.indexOf(e.charAt(o++)),
                t = (15 & (r = a.indexOf(e.charAt(o++)))) << 4 | (i = a.indexOf(e.charAt(o++))) >> 2 & 15,
                i = (3 & i) << 6 | 63 & a.indexOf(e.charAt(o++)),
                s += String.fromCharCode((63 & n) << 2 | r >> 4 & 3) + (t ? String.fromCharCode(t) : "") + (i ? String.fromCharCode(i) : ""),
                o < e.length; )
                    ;
                return s
            }
            var r = "function" == typeof atob ? atob : n;
            t.exports = {
                atob: function(e) {
                    return r.call(window, e)
                },
                _atob: n
            }
        }
        , {}],
        82: [function(e, t) {
            "use strict";
            function n(e) {
                this._client = e.client,
                this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl + "/web/" + u,
                this._isDebug = e.client.getConfiguration().isDebug,
                this._loadingFrameUrl = this._assetsUrl + "/html/paypal-landing-frame" + a(this._isDebug) + ".html",
                this._authorizationInProgress = !1
            }
            var o = e("../../lib/frame-service/external")
              , c = e("../../lib/braintree-error")
              , i = e("../../lib/convert-to-braintree-error")
              , a = e("../../lib/use-min")
              , s = e("../../lib/once")
              , u = "3.82.0"
              , l = e("../shared/constants")
              , d = e("../../lib/constants").INTEGRATION_TIMEOUT_MS
              , p = e("../../lib/analytics")
              , r = e("../../lib/methods")
              , f = e("../../lib/deferred")
              , h = e("../shared/errors")
              , m = e("../../lib/convert-methods-to-error")
              , y = e("../../lib/querystring")
              , g = e("../../lib/promise");
            e = e("@braintree/wrap-promise");
            n.prototype._initialize = function() {
                var n = this
                  , r = this._client
                  , i = setTimeout(function() {
                    p.sendEvent(r, "paypal.load.timed-out")
                }, d);
                return new g(function(t) {
                    o.create({
                        name: l.LANDING_FRAME_NAME,
                        dispatchFrameUrl: n._assetsUrl + "/html/dispatch-frame" + a(n._isDebug) + ".html",
                        openFrameUrl: n._loadingFrameUrl
                    }, function(e) {
                        n._frameService = e,
                        clearTimeout(i),
                        p.sendEvent(r, "paypal.load.succeeded"),
                        t(n)
                    })
                }
                )
            }
            ,
            n.prototype.tokenize = function(n, t) {
                var e, r = this, i = this._client;
                return t = t && s(f(t)),
                n && l.FLOW_ENDPOINTS.hasOwnProperty(n.flow) ? (e = new g(function(e, t) {
                    r._authorizationInProgress ? (p.sendEvent(i, "paypal.tokenization.error.already-opened"),
                    t(new c(h.PAYPAL_TOKENIZATION_REQUEST_ACTIVE))) : (r._authorizationInProgress = !0,
                    window.popupBridge || p.sendEvent(i, "paypal.tokenization.opened"),
                    !0 === n.offerCredit && p.sendEvent(i, "paypal.credit.offered"),
                    !0 === n.offerPayLater && p.sendEvent(i, "paypal.paylater.offered"),
                    r._navigateFrameToAuth(n)["catch"](t),
                    r._frameService.open({}, r._createFrameServiceCallback(n, e, t)))
                }
                ),
                t ? (e.then(function(e) {
                    t(null, e)
                })["catch"](t),
                this._frameService.createHandler({
                    beforeClose: function() {
                        p.sendEvent(i, "paypal.tokenization.closed.by-merchant")
                    }
                })) : e) : (e = new c(h.PAYPAL_FLOW_OPTION_REQUIRED),
                t ? (t(e),
                this._frameService.createNoopHandler()) : g.reject(e))
            }
            ,
            n.prototype._createFrameServiceCallback = function(r, i, o) {
                var a = this
                  , s = this._client;
                return window.popupBridge ? function(e, t) {
                    var n = t && t.path && "/cancel" === t.path.substring(0, 7);
                    a._authorizationInProgress = !1,
                    e || n ? (p.sendEvent(s, "paypal.tokenization.closed-popupbridge.by-user"),
                    o(new c(h.PAYPAL_POPUP_CLOSED))) : t && a._tokenizePayPal(r, t.queryItems).then(i)["catch"](o)
                }
                : function(e, t) {
                    a._authorizationInProgress = !1,
                    e ? "FRAME_SERVICE_FRAME_CLOSED" === e.code ? (p.sendEvent(s, "paypal.tokenization.closed.by-user"),
                    o(new c(h.PAYPAL_POPUP_CLOSED))) : e.code && -1 < e.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") && o(new c({
                        code: h.PAYPAL_POPUP_OPEN_FAILED.code,
                        type: h.PAYPAL_POPUP_OPEN_FAILED.type,
                        message: h.PAYPAL_POPUP_OPEN_FAILED.message,
                        details: {
                            originalError: e
                        }
                    })) : t && a._tokenizePayPal(r, t).then(i)["catch"](o)
                }
            }
            ,
            n.prototype._tokenizePayPal = function(e, t) {
                var n = this
                  , r = this._client;
                return window.popupBridge || this._frameService.redirect(this._loadingFrameUrl),
                r.request({
                    endpoint: "payment_methods/paypal_accounts",
                    method: "post",
                    data: this._formatTokenizeData(e, t)
                }).then(function(e) {
                    return e = n._formatTokenizePayload(e),
                    window.popupBridge ? p.sendEvent(r, "paypal.tokenization.success-popupbridge") : p.sendEvent(r, "paypal.tokenization.success"),
                    e.creditFinancingOffered && p.sendEvent(r, "paypal.credit.accepted"),
                    n._frameService.close(),
                    e
                })["catch"](function(e) {
                    return window.popupBridge ? p.sendEvent(r, "paypal.tokenization.failed-popupbridge") : p.sendEvent(r, "paypal.tokenization.failed"),
                    n._frameService.close(),
                    g.reject(i(e, {
                        type: h.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                        code: h.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                        message: h.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
                    }))
                })
            }
            ,
            n.prototype._formatTokenizePayload = function(e) {
                var t = {};
                e = {
                    nonce: (t = e.paypalAccounts ? e.paypalAccounts[0] : t).nonce,
                    details: {},
                    type: t.type
                };
                return t.details && t.details.payerInfo && (e.details = t.details.payerInfo),
                t.details && t.details.creditFinancingOffered && (e.creditFinancingOffered = t.details.creditFinancingOffered),
                e
            }
            ,
            n.prototype._formatTokenizeData = function(e, t) {
                var n = (r = this._client.getConfiguration()).gatewayConfiguration
                  , r = "TOKENIZATION_KEY" === r.authorizationType;
                r = {
                    paypalAccount: {
                        correlationId: t.ba_token || t.token,
                        options: {
                            validate: "vault" === e.flow && !r
                        }
                    }
                };
                return t.ba_token ? r.paypalAccount.billingAgreementToken = t.ba_token : (r.paypalAccount.paymentToken = t.paymentId,
                r.paypalAccount.payerId = t.PayerID,
                r.paypalAccount.unilateral = n.paypal.unvettedMerchant,
                e.hasOwnProperty("intent") && (r.paypalAccount.intent = e.intent)),
                r
            }
            ,
            n.prototype._navigateFrameToAuth = function(t) {
                var n = this
                  , r = this._client
                  , e = "paypal_hermes/" + l.FLOW_ENDPOINTS[t.flow];
                return r.request({
                    endpoint: e,
                    method: "post",
                    data: this._formatPaymentResourceData(t)
                }).then(function(e) {
                    e = "checkout" === t.flow ? e.paymentResource.redirectUrl : e.agreementSetup.approvalUrl,
                    "commit" === t.useraction && (e = y.queryify(e, {
                        useraction: "commit"
                    })),
                    window.popupBridge && p.sendEvent(r, "paypal.tokenization.opened-popupbridge"),
                    n._frameService.redirect(e)
                })["catch"](function(e) {
                    var t = e.details && e.details.httpStatus;
                    return n._frameService.close(),
                    n._authorizationInProgress = !1,
                    422 === t ? g.reject(new c({
                        type: h.PAYPAL_INVALID_PAYMENT_OPTION.type,
                        code: h.PAYPAL_INVALID_PAYMENT_OPTION.code,
                        message: h.PAYPAL_INVALID_PAYMENT_OPTION.message,
                        details: {
                            originalError: e
                        }
                    })) : g.reject(i(e, {
                        type: h.PAYPAL_FLOW_FAILED.type,
                        code: h.PAYPAL_FLOW_FAILED.code,
                        message: h.PAYPAL_FLOW_FAILED.message
                    }))
                })
            }
            ,
            n.prototype._formatPaymentResourceData = function(e) {
                var t, n = this._client.getConfiguration().gatewayConfiguration, r = this._frameService._serviceId, i = {
                    returnUrl: n.paypal.assetsUrl + "/web/" + u + "/html/redirect-frame" + a(this._isDebug) + ".html?channel=" + r,
                    cancelUrl: n.paypal.assetsUrl + "/web/" + u + "/html/cancel-frame" + a(this._isDebug) + ".html?channel=" + r,
                    offerPaypalCredit: !0 === e.offerCredit,
                    offerPayLater: !0 === e.offerPayLater,
                    experienceProfile: {
                        brandName: e.displayName || n.paypal.displayName,
                        localeCode: e.locale,
                        noShipping: (!e.enableShippingAddress).toString(),
                        addressOverride: !1 === e.shippingAddressEditable,
                        landingPageType: e.landingPageType
                    }
                };
                if (window.popupBridge && "function" == typeof window.popupBridge.getReturnUrlPrefix && (i.returnUrl = window.popupBridge.getReturnUrlPrefix() + "return",
                i.cancelUrl = window.popupBridge.getReturnUrlPrefix() + "cancel"),
                "checkout" === e.flow)
                    for (t in i.amount = e.amount,
                    i.currencyIsoCode = e.currency,
                    e.hasOwnProperty("intent") && (i.intent = e.intent),
                    e.shippingAddressOverride)
                        e.shippingAddressOverride.hasOwnProperty(t) && (i[t] = e.shippingAddressOverride[t]);
                else
                    i.shippingAddress = e.shippingAddressOverride,
                    e.billingAgreementDescription && (i.description = e.billingAgreementDescription);
                return i
            }
            ,
            n.prototype.closeWindow = function() {
                this._authorizationInProgress && p.sendEvent(this._client, "paypal.tokenize.closed.by-merchant"),
                this._frameService.close()
            }
            ,
            n.prototype.focusWindow = function() {
                this._frameService.focus()
            }
            ,
            n.prototype.teardown = e(function() {
                return this._frameService.teardown(),
                m(this, r(n.prototype)),
                p.sendEvent(this._client, "paypal.teardown-completed"),
                g.resolve()
            }),
            t.exports = n
        }
        , {
            "../../lib/analytics": 49,
            "../../lib/braintree-error": 53,
            "../../lib/constants": 54,
            "../../lib/convert-methods-to-error": 55,
            "../../lib/convert-to-braintree-error": 56,
            "../../lib/deferred": 60,
            "../../lib/frame-service/external": 64,
            "../../lib/methods": 76,
            "../../lib/once": 77,
            "../../lib/promise": 78,
            "../../lib/querystring": 79,
            "../../lib/use-min": 80,
            "../shared/constants": 84,
            "../shared/errors": 85,
            "@braintree/wrap-promise": 32
        }],
        83: [function(e, t) {
            "use strict";
            var r = e("../lib/analytics")
              , i = e("../lib/basic-component-verification")
              , o = e("../lib/create-deferred-client")
              , a = e("../lib/create-assets-url")
              , s = e("../lib/braintree-error")
              , c = e("./shared/errors")
              , u = e("./external/paypal")
              , n = e("@braintree/wrap-promise")
              , l = e("../lib/promise");
            t.exports = {
                create: n(function(n) {
                    return i.verify({
                        name: "PayPal",
                        client: n.client,
                        authorization: n.authorization
                    }).then(function() {
                        return o.create({
                            authorization: n.authorization,
                            client: n.client,
                            debug: n.debug,
                            assetsUrl: a.create(n.authorization),
                            name: "PayPal"
                        })
                    }).then(function(e) {
                        var t = e.getConfiguration();
                        return n.client = e,
                        !0 !== t.gatewayConfiguration.paypalEnabled ? l.reject(new s(c.PAYPAL_NOT_ENABLED)) : (r.sendEvent(n.client, "paypal.initialized"),
                        new u(n)._initialize())
                    })
                }),
                isSupported: function() {
                    return !0
                },
                VERSION: "3.82.0"
            }
        }
        , {
            "../lib/analytics": 49,
            "../lib/basic-component-verification": 52,
            "../lib/braintree-error": 53,
            "../lib/create-assets-url": 57,
            "../lib/create-deferred-client": 59,
            "../lib/promise": 78,
            "./external/paypal": 82,
            "./shared/errors": 85,
            "@braintree/wrap-promise": 32
        }],
        84: [function(e, t) {
            "use strict";
            t.exports = {
                LANDING_FRAME_NAME: "braintreepaypallanding",
                FLOW_ENDPOINTS: {
                    checkout: "create_payment_resource",
                    vault: "setup_billing_agreement"
                }
            }
        }
        , {}],
        85: [function(e, t) {
            "use strict";
            e = e("../../lib/braintree-error"),
            t.exports = {
                PAYPAL_NOT_ENABLED: {
                    type: e.types.MERCHANT,
                    code: "PAYPAL_NOT_ENABLED",
                    message: "PayPal is not enabled for this merchant."
                },
                PAYPAL_TOKENIZATION_REQUEST_ACTIVE: {
                    type: e.types.MERCHANT,
                    code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE",
                    message: "Another tokenization request is active."
                },
                PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                    type: e.types.NETWORK,
                    code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
                    message: "Could not tokenize user's PayPal account."
                },
                PAYPAL_FLOW_FAILED: {
                    type: e.types.NETWORK,
                    code: "PAYPAL_FLOW_FAILED",
                    message: "Could not initialize PayPal flow."
                },
                PAYPAL_FLOW_OPTION_REQUIRED: {
                    type: e.types.MERCHANT,
                    code: "PAYPAL_FLOW_OPTION_REQUIRED",
                    message: "PayPal flow property is invalid or missing."
                },
                PAYPAL_POPUP_OPEN_FAILED: {
                    type: e.types.MERCHANT,
                    code: "PAYPAL_POPUP_OPEN_FAILED",
                    message: "PayPal popup failed to open, make sure to tokenize in response to a user action."
                },
                PAYPAL_POPUP_CLOSED: {
                    type: e.types.CUSTOMER,
                    code: "PAYPAL_POPUP_CLOSED",
                    message: "Customer closed PayPal popup before authorizing."
                },
                PAYPAL_INVALID_PAYMENT_OPTION: {
                    type: e.types.MERCHANT,
                    code: "PAYPAL_INVALID_PAYMENT_OPTION",
                    message: "PayPal payment options are invalid."
                }
            }
        }
        , {
            "../../lib/braintree-error": 53
        }]
    }, {}, [83])(83)
}),
function(e) {
    var t;
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).applePay = e()
}(function() {
    return function c(r, i, o) {
        function a(t, e) {
            if (!i[t]) {
                if (!r[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n)
                        return n(t, !0);
                    if (s)
                        return s(t, !0);
                    throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    n
                }
                n = i[t] = {
                    exports: {}
                },
                r[t][0].call(n.exports, function(e) {
                    return a(r[t][1][e] || e)
                }, n, n.exports, c, r, i, o)
            }
            return i[t].exports
        }
        for (var s = "function" == typeof require && require, e = 0; e < o.length; e++)
            a(o[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            ;
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.PromiseGlobal = void 0,
            e = r(e("promise-polyfill")),
            e = "undefined" != typeof Promise ? Promise : e["default"],
            n.PromiseGlobal = e
        }
        , {
            "promise-polyfill": 9
        }],
        2: [function(e, t) {
            "use strict";
            function n(n) {
                var e, t = JSON.stringify(n);
                if (!n.forceScriptReload && (e = s[t]))
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
                e = new a.PromiseGlobal(function(e, t) {
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
                s[t] = e
            }
            var a = e("./lib/promise")
              , s = {};
            n.clearCache = function() {
                s = {}
            }
            ,
            t.exports = n
        }
        , {
            "./lib/promise": 1
        }],
        3: [function(e, t) {
            t.exports = e("./dist/load-script")
        }
        , {
            "./dist/load-script": 2
        }],
        4: [function(e, t) {
            "use strict";
            function r(e) {
                var n = this;
                "function" != typeof e ? (this._promise = new r.Promise(function(e, t) {
                    n._resolveFunction = e,
                    n._rejectFunction = t
                }
                ),
                this._onResolve = (e = e || {}).onResolve || r.defaultOnResolve,
                this._onReject = e.onReject || r.defaultOnReject,
                r.shouldCatchExceptions(e) && this._promise["catch"](function() {}),
                this._resetState()) : this._promise = new r.Promise(e)
            }
            var n = "undefined" != typeof Promise ? Promise : null;
            r.defaultOnResolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.defaultOnReject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.setPromise = function(e) {
                r.Promise = e
            }
            ,
            r.shouldCatchExceptions = function(e) {
                return e.hasOwnProperty("suppressUnhandledPromiseMessage") ? Boolean(e.suppressUnhandledPromiseMessage) : Boolean(r.suppressUnhandledPromiseMessage)
            }
            ,
            r.all = function(e) {
                return r.Promise.all(e)
            }
            ,
            r.allSettled = function(e) {
                return r.Promise.allSettled(e)
            }
            ,
            r.race = function(e) {
                return r.Promise.race(e)
            }
            ,
            r.reject = function(e) {
                return r.Promise.reject(e)
            }
            ,
            r.resolve = function(e) {
                return r.Promise.resolve(e)
            }
            ,
            r.prototype.then = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise).then.apply(e, t)
            }
            ,
            r.prototype["catch"] = function() {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return (e = this._promise)["catch"].apply(e, t)
            }
            ,
            r.prototype.resolve = function(e) {
                var t = this;
                return this.isFulfilled || (this._setResolved(),
                r.Promise.resolve().then(function() {
                    return t._onResolve(e)
                }).then(function(e) {
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    t._resetState(),
                    t.reject(e)
                })),
                this
            }
            ,
            r.prototype.reject = function(e) {
                var t = this;
                return this.isFulfilled || (this._setRejected(),
                r.Promise.resolve().then(function() {
                    return t._onReject(e)
                }).then(function(e) {
                    t._setResolved(),
                    t._resolveFunction(e)
                })["catch"](function(e) {
                    return t._rejectFunction(e)
                })),
                this
            }
            ,
            r.prototype._resetState = function() {
                this.isFulfilled = !1,
                this.isResolved = !1,
                this.isRejected = !1
            }
            ,
            r.prototype._setResolved = function() {
                this.isFulfilled = !0,
                this.isResolved = !0,
                this.isRejected = !1
            }
            ,
            r.prototype._setRejected = function() {
                this.isFulfilled = !0,
                this.isResolved = !1,
                this.isRejected = !0
            }
            ,
            r.Promise = n,
            n = r;
            t.exports = n
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
                })["catch"](function(e) {
                    return t(e)
                })
            }
        }
        , {}],
        8: [function(e, t) {
            "use strict";
            function n(r) {
                return function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return "function" == typeof t[t.length - 1] && (e = t.pop(),
                    e = o.once(i.deferred(e))),
                    a.promiseOrCallback(r.apply(this, t), e)
                }
            }
            var i = e("./lib/deferred")
              , o = e("./lib/once")
              , a = e("./lib/promise-or-callback");
            n.wrapPrototype = function(r, e) {
                var i = (e = void 0 === e ? {} : e).ignoreMethods || []
                  , o = !0 === e.transformPrivateMethods;
                return Object.getOwnPropertyNames(r.prototype).filter(function(e) {
                    var t = "constructor" !== e && "function" == typeof r.prototype[e]
                      , n = -1 === i.indexOf(e);
                    e = o || "_" !== e.charAt(0);
                    return t && e && n
                }).forEach(function(e) {
                    var t = r.prototype[e];
                    r.prototype[e] = n(t)
                }),
                r
            }
            ,
            t.exports = n
        }
        , {
            "./lib/deferred": 5,
            "./lib/once": 6,
            "./lib/promise-or-callback": 7
        }],
        9: [function(e, t) {
            "use strict";
            function c(e) {
                return Boolean(e && void 0 !== e.length)
            }
            function r() {}
            function o(e) {
                if (!(this instanceof o))
                    throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                    throw new TypeError("not a function");
                this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                d(e, this)
            }
            function i(n, r) {
                for (; 3 === n._state; )
                    n = n._value;
                0 !== n._state ? (n._handled = !0,
                o._immediateFn(function() {
                    var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                    if (null !== t) {
                        try {
                            e = t(n._value)
                        } catch (e) {
                            return void s(r.promise, e)
                        }
                        a(r.promise, e)
                    } else
                        (1 === n._state ? a : s)(r.promise, n._value)
                })) : n._deferreds.push(r)
            }
            function a(e, t) {
                try {
                    if (t === e)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof o)
                            return e._state = 3,
                            e._value = t,
                            void u(e);
                        if ("function" == typeof n)
                            return void d((r = n,
                            i = t,
                            function() {
                                r.apply(i, arguments)
                            }
                            ), e)
                    }
                    e._state = 1,
                    e._value = t,
                    u(e)
                } catch (t) {
                    s(e, t)
                }
                var r, i
            }
            function s(e, t) {
                e._state = 2,
                e._value = t,
                u(e)
            }
            function u(e) {
                2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                    e._handled || o._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                    i(e, e._deferreds[t]);
                e._deferreds = null
            }
            function l(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            function d(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0,
                        a(t, e))
                    }, function(e) {
                        n || (n = !0,
                        s(t, e))
                    })
                } catch (e) {
                    if (n)
                        return;
                    n = !0,
                    s(t, e)
                }
            }
            var n = setTimeout;
            o.prototype["catch"] = function(e) {
                return this.then(null, e)
            }
            ,
            o.prototype.then = function(e, t) {
                var n = new this.constructor(r);
                return i(this, new l(e,t,n)),
                n
            }
            ,
            o.prototype["finally"] = function(t) {
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
                return new o(function(r, i) {
                    if (!c(t))
                        return i(new TypeError("Promise.all accepts an array"));
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length)
                        return r([]);
                    for (var a = o.length, e = 0; e < o.length; e++)
                        !function s(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if ("function" == typeof n)
                                        return void n.call(e, function(e) {
                                            s(t, e)
                                        }, i)
                                }
                                o[t] = e,
                                0 == --a && r(o)
                            } catch (e) {
                                i(e)
                            }
                        }(e, o[e])
                }
                )
            }
            ,
            o.allSettled = function(t) {
                return new this(function(r, e) {
                    if (!t || void 0 === t.length)
                        return e(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length)
                        return r([]);
                    for (var o = i.length, a = 0; a < i.length; a++)
                        !function a(t, e) {
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if ("function" == typeof n)
                                    return void n.call(e, function(e) {
                                        a(t, e)
                                    }, function(e) {
                                        i[t] = {
                                            status: "rejected",
                                            reason: e
                                        },
                                        0 == --o && r(i)
                                    })
                            }
                            i[t] = {
                                status: "fulfilled",
                                value: e
                            },
                            0 == --o && r(i)
                        }(a, i[a])
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
                n(e, 0)
            }
            ,
            o._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }
            ,
            t.exports = o
        }
        , {}],
        10: [function(e, t) {
            "use strict";
            function n(e) {
                this._instantiatedWithClient = Boolean(!e.useDeferredClient),
                this._client = e.client,
                this._createPromise = e.createPromise,
                this._client && this._setMerchantIdentifier()
            }
            var r = e("../lib/braintree-error")
              , i = e("../lib/analytics")
              , o = e("./errors")
              , a = e("../lib/promise")
              , s = e("../lib/methods")
              , c = e("../lib/convert-methods-to-error");
            e = e("@braintree/wrap-promise");
            n.prototype._waitForClient = function() {
                return this._client ? a.resolve() : this._createPromise.then(function(e) {
                    this._client = e,
                    this._setMerchantIdentifier()
                }
                .bind(this))
            }
            ,
            n.prototype._setMerchantIdentifier = function() {
                var e = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
                e && Object.defineProperty(this, "merchantIdentifier", {
                    value: e.merchantIdentifier,
                    configurable: !1,
                    writable: !1
                })
            }
            ,
            n.prototype.createPaymentRequest = function(e) {
                return this._instantiatedWithClient ? this._createPaymentRequestSynchronously(e) : this._waitForClient().then(function() {
                    return this._createPaymentRequestSynchronously(e)
                }
                .bind(this))
            }
            ,
            n.prototype._createPaymentRequestSynchronously = function(e) {
                var t = {
                    countryCode: (t = this._client.getConfiguration().gatewayConfiguration.applePayWeb).countryCode,
                    currencyCode: t.currencyCode,
                    merchantCapabilities: t.merchantCapabilities || ["supports3DS"],
                    supportedNetworks: t.supportedNetworks.map(function(e) {
                        return "mastercard" === e ? "masterCard" : e
                    })
                };
                return Object.assign({}, t, e)
            }
            ,
            n.prototype.performValidation = function(t) {
                var n = this;
                return t && t.validationURL ? this._waitForClient().then(function() {
                    var e = {
                        validationUrl: t.validationURL,
                        domainName: t.domainName || window.location.hostname,
                        merchantIdentifier: t.merchantIdentifier || n.merchantIdentifier
                    };
                    return null != t.displayName && (e.displayName = t.displayName),
                    n._client.request({
                        method: "post",
                        endpoint: "apple_pay_web/sessions",
                        data: {
                            _meta: {
                                source: "apple-pay"
                            },
                            applePayWebSession: e
                        }
                    })
                }).then(function(e) {
                    return i.sendEvent(n._client, "applepay.performValidation.succeeded"),
                    a.resolve(e)
                })["catch"](function(e) {
                    return i.sendEvent(n._client, "applepay.performValidation.failed"),
                    "CLIENT_REQUEST_ERROR" === e.code ? a.reject(new r({
                        type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
                        code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
                        message: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
                        details: {
                            originalError: e.details.originalError
                        }
                    })) : a.reject(new r({
                        type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
                        code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
                        message: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
                        details: {
                            originalError: e
                        }
                    }))
                }) : a.reject(new r(o.APPLE_PAY_VALIDATION_URL_REQUIRED))
            }
            ,
            n.prototype.tokenize = function(e) {
                var t = this;
                return e.token ? this._waitForClient().then(function() {
                    return t._client.request({
                        method: "post",
                        endpoint: "payment_methods/apple_payment_tokens",
                        data: {
                            _meta: {
                                source: "apple-pay"
                            },
                            applePaymentToken: Object.assign({}, e.token, {
                                paymentData: btoa(JSON.stringify(e.token.paymentData))
                            })
                        }
                    })
                }).then(function(e) {
                    return i.sendEvent(t._client, "applepay.tokenize.succeeded"),
                    a.resolve(e.applePayCards[0])
                })["catch"](function(e) {
                    return i.sendEvent(t._client, "applepay.tokenize.failed"),
                    a.reject(new r({
                        type: o.APPLE_PAY_TOKENIZATION.type,
                        code: o.APPLE_PAY_TOKENIZATION.code,
                        message: o.APPLE_PAY_TOKENIZATION.message,
                        details: {
                            originalError: e
                        }
                    }))
                }) : a.reject(new r(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED))
            }
            ,
            n.prototype.teardown = function() {
                return c(this, s(n.prototype)),
                a.resolve()
            }
            ,
            t.exports = e.wrapPrototype(n)
        }
        , {
            "../lib/analytics": 14,
            "../lib/braintree-error": 17,
            "../lib/convert-methods-to-error": 19,
            "../lib/methods": 26,
            "../lib/promise": 27,
            "./errors": 11,
            "@braintree/wrap-promise": 8
        }],
        11: [function(e, t) {
            "use strict";
            e = e("../lib/braintree-error"),
            t.exports = {
                APPLE_PAY_NOT_ENABLED: {
                    type: e.types.MERCHANT,
                    code: "APPLE_PAY_NOT_ENABLED",
                    message: "Apple Pay is not enabled for this merchant."
                },
                APPLE_PAY_VALIDATION_URL_REQUIRED: {
                    type: e.types.MERCHANT,
                    code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
                    message: "performValidation must be called with a validationURL."
                },
                APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
                    type: e.types.NETWORK,
                    code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
                    message: "A network error occurred when validating the Apple Pay merchant."
                },
                APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
                    type: e.types.MERCHANT,
                    code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
                    message: "Make sure you have registered your domain name in the Braintree Control Panel."
                },
                APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
                    type: e.types.MERCHANT,
                    code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
                    message: "tokenize must be called with a payment token."
                },
                APPLE_PAY_TOKENIZATION: {
                    type: e.types.NETWORK,
                    code: "APPLE_PAY_TOKENIZATION",
                    message: "A network error occurred when processing the Apple Pay payment."
                }
            }
        }
        , {
            "../lib/braintree-error": 17
        }],
        12: [function(e, t) {
            "use strict";
            var i = e("./apple-pay")
              , o = e("../lib/analytics")
              , a = e("../lib/braintree-error")
              , s = e("../lib/basic-component-verification")
              , c = e("../lib/create-assets-url")
              , u = e("../lib/create-deferred-client")
              , l = e("../lib/promise")
              , d = e("./errors");
            e = e("@braintree/wrap-promise");
            t.exports = {
                create: e(function(n) {
                    var r = "Apple Pay";
                    return s.verify({
                        name: r,
                        client: n.client,
                        authorization: n.authorization
                    }).then(function() {
                        var t, e = u.create({
                            authorization: n.authorization,
                            client: n.client,
                            debug: n.debug,
                            assetsUrl: c.create(n.authorization),
                            name: r
                        }).then(function(e) {
                            return e.getConfiguration().gatewayConfiguration.applePayWeb ? (o.sendEvent(e, "applepay.initialized"),
                            e) : l.reject(new a(d.APPLE_PAY_NOT_ENABLED))
                        });
                        return n.createPromise = e,
                        t = new i(n),
                        n.useDeferredClient ? t : e.then(function(e) {
                            return t._client = e,
                            t
                        })
                    })
                }),
                VERSION: "3.82.0"
            }
        }
        , {
            "../lib/analytics": 14,
            "../lib/basic-component-verification": 16,
            "../lib/braintree-error": 17,
            "../lib/create-assets-url": 20,
            "../lib/create-deferred-client": 22,
            "../lib/promise": 27,
            "./apple-pay": 10,
            "./errors": 11,
            "@braintree/wrap-promise": 8
        }],
        13: [function(e, t) {
            "use strict";
            var o = e("./create-authorization-data")
              , a = e("./json-clone")
              , s = e("./constants");
            t.exports = function(e, t) {
                var n, r = t ? a(t) : {}, i = (t = o(e.authorization).attrs,
                a(e.analyticsMetadata));
                for (n in r.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION,
                r._meta)
                    r._meta.hasOwnProperty(n) && (i[n] = r._meta[n]);
                return r._meta = i,
                t.tokenizationKey ? r.tokenizationKey = t.tokenizationKey : r.authorizationFingerprint = t.authorizationFingerprint,
                r
            }
        }
        , {
            "./constants": 18,
            "./create-authorization-data": 21,
            "./json-clone": 25
        }],
        14: [function(e, t) {
            "use strict";
            var n = e("./promise")
              , s = e("./constants")
              , c = e("./add-metadata");
            t.exports = {
                sendEvent: function(e, i, o) {
                    var a = Date.now();
                    return n.resolve(e).then(function(e) {
                        var t = Date.now()
                          , n = e.getConfiguration()
                          , r = e._request;
                        e = n.gatewayConfiguration.analytics.url,
                        t = {
                            analytics: [{
                                kind: s.ANALYTICS_PREFIX + i,
                                isAsync: Math.floor(t / 1e3) !== Math.floor(a / 1e3),
                                timestamp: a
                            }]
                        };
                        r({
                            url: e,
                            method: "post",
                            data: c(n, t),
                            timeout: s.ANALYTICS_REQUEST_TIMEOUT_MS
                        }, o)
                    })
                }
            }
        }
        , {
            "./add-metadata": 13,
            "./constants": 18,
            "./promise": 27
        }],
        15: [function(e, t) {
            "use strict";
            e = e("@braintree/asset-loader/load-script"),
            t.exports = {
                loadScript: e
            }
        }
        , {
            "@braintree/asset-loader/load-script": 3
        }],
        16: [function(e, t) {
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
            "./promise": 27
        }],
        17: [function(e, t) {
            "use strict";
            function n(e) {
                if (!n.types.hasOwnProperty(e.type))
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
            e = e("./enumerate"),
            ((n.prototype = Object.create(Error.prototype)).constructor = n).types = e(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]),
            n.findRootError = function(e) {
                return e instanceof n && e.details && e.details.originalError ? n.findRootError(e.details.originalError) : e
            }
            ,
            t.exports = n
        }
        , {
            "./enumerate": 23
        }],
        18: [function(e, t) {
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
        19: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./errors");
            t.exports = function(t, e) {
                e.forEach(function(e) {
                    t[e] = function() {
                        throw new n({
                            type: r.METHOD_CALLED_AFTER_TEARDOWN.type,
                            code: r.METHOD_CALLED_AFTER_TEARDOWN.code,
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
        20: [function(e, t) {
            "use strict";
            var n = e("./constants").ASSETS_URLS;
            t.exports = {
                create: function() {
                    return n.production
                }
            }
        }
        , {
            "./constants": 18
        }],
        21: [function(e, t) {
            "use strict";
            var i = e("../lib/vendor/polyfill").atob
              , o = e("../lib/constants").CLIENT_API_URLS;
            t.exports = function(e) {
                var t, n, r = {
                    attrs: {},
                    configUrl: ""
                };
                return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (t = (n = (t = e).split("_"))[0],
                t = {
                    merchantId: n.slice(2).join("_"),
                    environment: t
                },
                r.environment = t.environment,
                r.attrs.tokenizationKey = e,
                r.configUrl = o[t.environment] + "/merchants/" + t.merchantId + "/client_api/v1/configuration") : (e = JSON.parse(i(e)),
                r.environment = e.environment,
                r.attrs.authorizationFingerprint = e.authorizationFingerprint,
                r.configUrl = e.configUrl,
                r.graphQL = e.graphQL),
                r
            }
        }
        , {
            "../lib/constants": 18,
            "../lib/vendor/polyfill": 28
        }],
        22: [function(e, t) {
            "use strict";
            var n = e("./braintree-error")
              , r = e("./promise")
              , i = e("./assets")
              , o = e("./errors")
              , a = "3.82.0";
            t.exports = {
                create: function(e) {
                    var t = r.resolve();
                    return e.client ? r.resolve(e.client) : (t = window.braintree && window.braintree.client ? t : i.loadScript({
                        src: e.assetsUrl + "/web/" + a + "/js/client.min.js"
                    })["catch"](function(e) {
                        return r.reject(new n({
                            type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                            code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                            message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                            details: {
                                originalError: e
                            }
                        }))
                    })).then(function() {
                        return window.braintree.client.VERSION !== a ? r.reject(new n({
                            type: o.INCOMPATIBLE_VERSIONS.type,
                            code: o.INCOMPATIBLE_VERSIONS.code,
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
            "./promise": 27
        }],
        23: [function(e, t) {
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
        24: [function(e, t) {
            "use strict";
            e = e("./braintree-error"),
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
        25: [function(e, t) {
            "use strict";
            t.exports = function(e) {
                return JSON.parse(JSON.stringify(e))
            }
        }
        , {}],
        26: [function(e, t) {
            "use strict";
            t.exports = function(t) {
                return Object.keys(t).filter(function(e) {
                    return "function" == typeof t[e]
                })
            }
        }
        , {}],
        27: [function(e, t) {
            "use strict";
            var n = e("promise-polyfill");
            e = e("@braintree/extended-promise"),
            n = "undefined" != typeof Promise ? Promise : n;
            e.suppressUnhandledPromiseMessage = !0,
            e.setPromise(n),
            t.exports = n
        }
        , {
            "@braintree/extended-promise": 4,
            "promise-polyfill": 9
        }],
        28: [function(e, t) {
            "use strict";
            function n(e) {
                var t, n, r, i, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "";
                if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))
                    throw new Error("Non base64 encoded input passed to window.atob polyfill");
                for (o = 0; n = a.indexOf(e.charAt(o++)),
                t = (15 & (r = a.indexOf(e.charAt(o++)))) << 4 | (i = a.indexOf(e.charAt(o++))) >> 2 & 15,
                i = (3 & i) << 6 | 63 & a.indexOf(e.charAt(o++)),
                s += String.fromCharCode((63 & n) << 2 | r >> 4 & 3) + (t ? String.fromCharCode(t) : "") + (i ? String.fromCharCode(i) : ""),
                o < e.length; )
                    ;
                return s
            }
            var r = "function" == typeof atob ? atob : n;
            t.exports = {
                atob: function(e) {
                    return r.call(window, e)
                },
                _atob: n
            }
        }
        , {}]
    }, {}, [12])(12)
}),
function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Bugsnag = e()
}(function() {
    function e() {
        return (e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function t() {
        return Q((Math.random() * ie << 0).toString(re), ne)
    }
    function n() {
        return "c" + (new Date).getTime().toString(re) + Q(function e() {
            return te = te < ie ? te : 0,
            ++te - 1
        }().toString(re), ne) + ee() + (t() + t())
    }
    function g(e) {
        return "[Throws: " + (e ? e.message : "?") + "]"
    }
    function v(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t)
                return !0;
        return !1
    }
    function _(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (0 === t.indexOf(e[n]))
                return !0;
        return !1
    }
    function b(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase())
                return !0;
            if (e[n] && "function" == typeof e[n].test && e[n].test(t))
                return !0
        }
        return !1
    }
    function E(e, t) {
        try {
            return e[t]
        } catch (l) {
            return g(l)
        }
    }
    function r() {
        return Ie((Math.random() * ke << 0).toString(Fe), De)
    }
    function i() {
        return "c" + (new Date).getTime().toString(Fe) + Ie(function e() {
            return Le = Le < ke ? Le : 0,
            ++Le - 1
        }().toString(Fe), De) + Re() + (r() + r())
    }
    function f(e, t, n) {
        var r = e[t];
        if (!r)
            return r;
        var i = n(r);
        return e[t] = i,
        r
    }
    function h(t) {
        var n = !!t[1] && "function" == typeof t[1].handleEvent;
        return {
            get: function() {
                return n ? t[1].handleEvent : t[1]
            },
            replace: function(e) {
                n ? t[1].handleEvent = e : t[1] = e
            }
        }
    }
    var a = ["navigation", "request", "process", "log", "user", "state", "error", "manual"]
      , T = function(e, t, n) {
        for (var r = n, i = 0, o = e.length; i < o; i++)
            r = t(r, e[i], i, e);
        return r
    }
      , m = function(e, i) {
        return T(e, function(e, t, n, r) {
            return i(t, n, r) ? e.concat(t) : e
        }, [])
    }
      , y = function(e, n) {
        return T(e, function(e, t) {
            return !0 === e || t === n
        }, !1)
    }
      , o = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
      , s = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
      , u = function(e) {
        var t, n = [];
        for (t in e)
            Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        if (!s)
            return n;
        for (var r = 0, i = c.length; r < i; r++)
            Object.prototype.hasOwnProperty.call(e, c[r]) && n.push(c[r]);
        return n
    }
      , l = function(t, n) {
        return void 0 === t && (t = 1),
        void 0 === n && (n = Infinity),
        function(e) {
            return "number" == typeof e && parseInt("" + e, 10) === e && t <= e && e <= n
        }
    }
      , d = function(e) {
        return "function" == typeof e || o(e) && m(e, function(e) {
            return "function" == typeof e
        }).length === e.length
    }
      , p = function(e) {
        return "string" == typeof e && !!e.length
    }
      , w = {};
    w.schema = {
        apiKey: {
            defaultValue: function() {
                return null
            },
            message: "is required",
            validate: p
        },
        appVersion: {
            defaultValue: function() {
                return undefined
            },
            message: "should be a string",
            validate: function(e) {
                return e === undefined || p(e)
            }
        },
        appType: {
            defaultValue: function() {
                return undefined
            },
            message: "should be a string",
            validate: function(e) {
                return e === undefined || p(e)
            }
        },
        autoDetectErrors: {
            defaultValue: function() {
                return !0
            },
            message: "should be true|false",
            validate: function(e) {
                return !0 === e || !1 === e
            }
        },
        enabledErrorTypes: {
            defaultValue: function() {
                return {
                    unhandledExceptions: !0,
                    unhandledRejections: !0
                }
            },
            message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
            allowPartialObject: !0,
            validate: function(t) {
                if ("object" != typeof t || !t)
                    return !1;
                var e = u(t)
                  , n = u({
                    unhandledExceptions: !0,
                    unhandledRejections: !0
                });
                return !(m(e, function(e) {
                    return y(n, e)
                }).length < e.length || 0 < m(u(t), function(e) {
                    return "boolean" != typeof t[e]
                }).length)
            }
        },
        onError: {
            defaultValue: function() {
                return []
            },
            message: "should be a function or array of functions",
            validate: d
        },
        onSession: {
            defaultValue: function() {
                return []
            },
            message: "should be a function or array of functions",
            validate: d
        },
        onBreadcrumb: {
            defaultValue: function() {
                return []
            },
            message: "should be a function or array of functions",
            validate: d
        },
        endpoints: {
            defaultValue: function() {
                return {
                    notify: "https://notify.bugsnag.com",
                    sessions: "https://sessions.bugsnag.com"
                }
            },
            message: "should be an object containing endpoint URLs { notify, sessions }",
            validate: function(e) {
                return e && "object" == typeof e && p(e.notify) && p(e.sessions) && 0 === m(u(e), function(e) {
                    return !y(["notify", "sessions"], e)
                }).length
            }
        },
        autoTrackSessions: {
            defaultValue: function() {
                return !0
            },
            message: "should be true|false",
            validate: function(e) {
                return !0 === e || !1 === e
            }
        },
        enabledReleaseStages: {
            defaultValue: function() {
                return null
            },
            message: "should be an array of strings",
            validate: function(e) {
                return null === e || o(e) && m(e, function(e) {
                    return "string" == typeof e
                }).length === e.length
            }
        },
        releaseStage: {
            defaultValue: function() {
                return "production"
            },
            message: "should be a string",
            validate: function(e) {
                return "string" == typeof e && e.length
            }
        },
        maxBreadcrumbs: {
            defaultValue: function() {
                return 25
            },
            message: "should be a number \u2264100",
            validate: function(e) {
                return l(0, 100)(e)
            }
        },
        enabledBreadcrumbTypes: {
            defaultValue: function() {
                return a
            },
            message: "should be null or a list of available breadcrumb types (" + a.join(",") + ")",
            validate: function(e) {
                return null === e || o(e) && T(e, function(e, t) {
                    return !1 === e ? e : y(a, t)
                }, !0)
            }
        },
        context: {
            defaultValue: function() {
                return undefined
            },
            message: "should be a string",
            validate: function(e) {
                return e === undefined || "string" == typeof e
            }
        },
        user: {
            defaultValue: function() {
                return {}
            },
            message: "should be an object with { id, email, name } properties",
            validate: function(e) {
                return null === e || e && T(u(e), function(e, t) {
                    return e && y(["id", "email", "name"], t)
                }, !0)
            }
        },
        metadata: {
            defaultValue: function() {
                return {}
            },
            message: "should be an object",
            validate: function(e) {
                return "object" == typeof e && null !== e
            }
        },
        logger: {
            defaultValue: function() {
                return undefined
            },
            message: "should be null or an object with methods { debug, info, warn, error }",
            validate: function(n) {
                return !n || n && T(["debug", "info", "warn", "error"], function(e, t) {
                    return e && "function" == typeof n[t]
                }, !0)
            }
        },
        redactedKeys: {
            defaultValue: function() {
                return ["password"]
            },
            message: "should be an array of strings|regexes",
            validate: function(e) {
                return o(e) && e.length === m(e, function(e) {
                    return "string" == typeof e || e && "function" == typeof e.test
                }).length
            }
        },
        plugins: {
            defaultValue: function() {
                return []
            },
            message: "should be an array of plugin objects",
            validate: function(e) {
                return o(e) && e.length === m(e, function(e) {
                    return e && "object" == typeof e && "function" == typeof e.load
                }).length
            }
        }
    };
    var S = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , A = function(e, i) {
        return T(e, function(e, t, n, r) {
            return e.concat(i(t, n, r))
        }, [])
    }
      , I = w.schema
      , O = {
        releaseStage: S({}, I.releaseStage, {
            defaultValue: function() {
                return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
            }
        }),
        appType: e({}, I.appType, {
            defaultValue: function() {
                return "browser"
            }
        }),
        logger: S({}, I.logger, {
            defaultValue: function() {
                return "undefined" != typeof console && "function" == typeof console.debug ? N() : undefined
            }
        })
    }
      , N = function() {
        var n = {}
          , r = console.log;
        return A(["debug", "info", "warn", "error"], function(e) {
            var t = console[e];
            n[e] = "function" == typeof t ? t.bind(console, "[bugsnag]") : r.bind(console, "[bugsnag]")
        }),
        n
    }
      , C = function() {
        function e(e, t, n, r) {
            void 0 === r && (r = new Date),
            this.type = n,
            this.message = e,
            this.metadata = t,
            this.timestamp = r
        }
        return e.prototype.toJSON = function() {
            return {
                type: this.type,
                name: this.message,
                timestamp: this.timestamp,
                metaData: this.metadata
            }
        }
        ,
        e
    }()
      , x = {};
    !function(e, t) {
        "use strict";
        "object" == typeof x ? x = t() : e.StackFrame = t()
    }(this, function() {
        "use strict";
        function n(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        function r(e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
        function e(e) {
            return function() {
                return this[e]
            }
        }
        function t(e) {
            if (e instanceof Object)
                for (var t = 0; t < s.length; t++)
                    e.hasOwnProperty(s[t]) && e[s[t]] !== undefined && this["set" + r(s[t])](e[s[t]])
        }
        var i = ["isConstructor", "isEval", "isNative", "isToplevel"]
          , o = ["columnNumber", "lineNumber"]
          , a = ["fileName", "functionName", "source"]
          , s = i.concat(o, a, ["args"]);
        t.prototype = {
            getArgs: function() {
                return this.args
            },
            setArgs: function(e) {
                if ("[object Array]" !== Object.prototype.toString.call(e))
                    throw new TypeError("Args must be an Array");
                this.args = e
            },
            getEvalOrigin: function() {
                return this.evalOrigin
            },
            setEvalOrigin: function(e) {
                if (e instanceof t)
                    this.evalOrigin = e;
                else {
                    if (!(e instanceof Object))
                        throw new TypeError("Eval Origin must be an Object or StackFrame");
                    this.evalOrigin = new t(e)
                }
            },
            toString: function() {
                return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (n(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (n(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
            }
        };
        for (var c = 0; c < i.length; c++)
            t.prototype["get" + r(i[c])] = e(i[c]),
            t.prototype["set" + r(i[c])] = function(t) {
                return function(e) {
                    this[t] = Boolean(e)
                }
            }(i[c]);
        for (var u = 0; u < o.length; u++)
            t.prototype["get" + r(o[u])] = e(o[u]),
            t.prototype["set" + r(o[u])] = function(t) {
                return function(e) {
                    if (!n(e))
                        throw new TypeError(t + " must be a Number");
                    this[t] = Number(e)
                }
            }(o[u]);
        for (var l = 0; l < a.length; l++)
            t.prototype["get" + r(a[l])] = e(a[l]),
            t.prototype["set" + r(a[l])] = function(t) {
                return function(e) {
                    this[t] = String(e)
                }
            }(a[l]);
        return t
    });
    var P = {};
    !function(e, t) {
        "use strict";
        "object" == typeof P ? P = t(x) : e.ErrorStackParser = t(e.StackFrame)
    }(this, function(s) {
        "use strict";
        var t = /(^|@)\S+\:\d+/
          , n = /^\s*at .*(\S+\:\d+|\(native\))/m
          , r = /^(eval@)?(\[native code\])?$/;
        return {
            parse: function(e) {
                if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"])
                    return this.parseOpera(e);
                if (e.stack && e.stack.match(n))
                    return this.parseV8OrIE(e);
                if (e.stack)
                    return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object")
            },
            extractLocation: function(e) {
                if (-1 === e.indexOf(":"))
                    return [e];
                var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                return [t[1], t[2] || undefined, t[3] || undefined]
            },
            parseV8OrIE: function(e) {
                return e.stack.split("\n").filter(function(e) {
                    return !!e.match(n)
                }, this).map(function(e) {
                    -1 < e.indexOf("(eval ") && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                    var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(")
                      , n = t.match(/ (\((.+):(\d+):(\d+)\)$)/)
                      , r = (t = n ? t.replace(n[0], "") : t).split(/\s+/).slice(1)
                      , i = this.extractLocation(n ? n[1] : r.pop())
                      , o = r.join(" ") || undefined
                      , a = -1 < ["eval", "<anonymous>"].indexOf(i[0]) ? undefined : i[0];
                    return new s({
                        functionName: o,
                        fileName: a,
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: e
                    })
                }, this)
            },
            parseFFOrSafari: function(e) {
                return e.stack.split("\n").filter(function(e) {
                    return !e.match(r)
                }, this).map(function(e) {
                    if (-1 < e.indexOf(" > eval") && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                    -1 === e.indexOf("@") && -1 === e.indexOf(":"))
                        return new s({
                            functionName: e
                        });
                    var t = /((.*".+"[^@]*)?[^@]*)(?:@)/
                      , n = e.match(t)
                      , r = n && n[1] ? n[1] : undefined
                      , i = this.extractLocation(e.replace(t, ""));
                    return new s({
                        functionName: r,
                        fileName: i[0],
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: e
                    })
                }, this)
            },
            parseOpera: function(e) {
                return !e.stacktrace || -1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
            },
            parseOpera9: function(e) {
                for (var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), r = [], i = 2, o = n.length; i < o; i += 2) {
                    var a = t.exec(n[i]);
                    a && r.push(new s({
                        fileName: a[2],
                        lineNumber: a[1],
                        source: n[i]
                    }))
                }
                return r
            },
            parseOpera10: function(e) {
                for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), r = [], i = 0, o = n.length; i < o; i += 2) {
                    var a = t.exec(n[i]);
                    a && r.push(new s({
                        functionName: a[3] || undefined,
                        fileName: a[2],
                        lineNumber: a[1],
                        source: n[i]
                    }))
                }
                return r
            },
            parseOpera11: function(e) {
                return e.stack.split("\n").filter(function(e) {
                    return !!e.match(t) && !e.match(/^Error created at/)
                }, this).map(function(e) {
                    var t, n = e.split("@"), r = this.extractLocation(n.pop()), i = n.shift() || "", o = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
                    i.match(/\(([^\)]*)\)/) && (t = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                    var a = t === undefined || "[arguments not available]" === t ? undefined : t.split(",");
                    return new s({
                        functionName: o,
                        args: a,
                        fileName: r[0],
                        lineNumber: r[1],
                        columnNumber: r[2],
                        source: e
                    })
                }, this)
            }
        }
    });
    var R = P
      , L = function(e) {
        return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message)
    }
      , D = function dt(e) {
        switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return e instanceof Error
        }
    }
      , F = function(e, t, n) {
        "string" == typeof t && (n ? e[t] && delete e[t][n] : delete e[t])
    }
      , k = {
        add: function(e, t, n, r) {
            var i;
            if (t) {
                var o;
                if (null === n)
                    return F(e, t);
                "object" == typeof n && (o = n),
                "string" == typeof n && ((i = {})[n] = r,
                o = i),
                o && (e[t] || (e[t] = {}),
                e[t] = S({}, e[t], o))
            }
        },
        get: function(e, t, n) {
            return "string" != typeof t ? undefined : n ? e[t] ? e[t][n] : undefined : e[t]
        },
        clear: F
    }
      , j = {};
    !function(e, t) {
        "use strict";
        "object" == typeof j ? j = t(x) : e.StackGenerator = t(e.StackFrame)
    }(this, function(a) {
        return {
            backtrace: function(e) {
                var t = []
                  , n = 10;
                "object" == typeof e && "number" == typeof e.maxStackSize && (n = e.maxStackSize);
                for (var r = arguments.callee; r && t.length < n && r.arguments; ) {
                    for (var i = new Array(r.arguments.length), o = 0; o < i.length; ++o)
                        i[o] = r.arguments[o];
                    /function(?:\s+([\w$]+))+\s*\(/.test(r.toString()) ? t.push(new a({
                        functionName: RegExp.$1 || undefined,
                        args: i
                    })) : t.push(new a({
                        args: i
                    }));
                    try {
                        r = r.caller
                    } catch (c) {
                        break
                    }
                }
                return t
            }
        }
    });
    var M = function() {
        function o(e, t, n, r, i) {
            void 0 === n && (n = []),
            void 0 === r && (r = H()),
            this.apiKey = undefined,
            this.context = undefined,
            this.groupingHash = undefined,
            this.originalError = i,
            this._handledState = r,
            this.severity = this._handledState.severity,
            this.unhandled = this._handledState.unhandled,
            this.app = {},
            this.device = {},
            this.request = {},
            this.breadcrumbs = [],
            this.threads = [],
            this._metadata = {},
            this._user = {},
            this._session = undefined,
            this.errors = [{
                errorClass: V(e),
                errorMessage: V(t),
                type: o.__type,
                stacktrace: T(n, function(e, t) {
                    var n = B(t);
                    try {
                        return "{}" === JSON.stringify(n) ? e : e.concat(n)
                    } catch (r) {
                        return e
                    }
                }, [])
            }]
        }
        var e = o.prototype;
        return e.addMetadata = function(e, t, n) {
            return k.add(this._metadata, e, t, n)
        }
        ,
        e.getMetadata = function(e, t) {
            return k.get(this._metadata, e, t)
        }
        ,
        e.clearMetadata = function(e, t) {
            return k.clear(this._metadata, e, t)
        }
        ,
        e.getUser = function() {
            return this._user
        }
        ,
        e.setUser = function(e, t, n) {
            this._user = {
                id: e,
                email: t,
                name: n
            }
        }
        ,
        e.toJSON = function() {
            return {
                payloadVersion: "4",
                exceptions: A(this.errors, function(e) {
                    return S({}, e, {
                        message: e.errorMessage
                    })
                }),
                severity: this.severity,
                unhandled: this._handledState.unhandled,
                severityReason: this._handledState.severityReason,
                app: this.app,
                device: this.device,
                request: this.request,
                breadcrumbs: this.breadcrumbs,
                context: this.context,
                groupingHash: this.groupingHash,
                metaData: this._metadata,
                user: this._user,
                session: this._session
            }
        }
        ,
        o
    }()
      , B = function(e) {
        var t = {
            file: e.fileName,
            method: U(e.functionName),
            lineNumber: e.lineNumber,
            columnNumber: e.columnNumber,
            code: undefined,
            inProject: undefined
        };
        return -1 < t.lineNumber && !t.file && !t.method && (t.file = "global code"),
        t
    }
      , U = function(e) {
        return /^global code$/i.test(e) ? "global code" : e
    }
      , H = function() {
        return {
            unhandled: !1,
            severity: "warning",
            severityReason: {
                type: "handledException"
            }
        }
    }
      , V = function(e) {
        return "string" == typeof e ? e : ""
    };
    M.getStacktrace = function(e, t, n) {
        if (L(e))
            return R.parse(e).slice(t);
        try {
            return m(j.backtrace(), function(e) {
                return -1 === (e.functionName || "").indexOf("StackGenerator$$")
            }).slice(1 + n)
        } catch (p) {
            return []
        }
    }
    ,
    M.create = function(e, t, n, r, i, o) {
        void 0 === i && (i = 0);
        var a, s = q(e, t, r, o), c = s[0], u = s[1];
        try {
            var l = M.getStacktrace(c, 0 < u ? 1 + u + i : 0, 1 + i);
            a = new M(c.name,c.message,l,n,e)
        } catch (O) {
            a = new M(c.name,c.message,[],n,e)
        }
        return "InvalidError" === c.name && a.addMetadata("" + r, "non-error parameter", z(e)),
        a
    }
    ;
    var z = function(e) {
        return null === e ? "null" : e === undefined ? "undefined" : e
    }
      , q = function(e, t, n, r) {
        var i, o = 0, a = function(e) {
            r && r.warn(n + ' received a non-error: "' + e + '"');
            var t = new Error(n + ' received a non-error. See "' + n + '" tab for more detail.');
            return t.name = "InvalidError",
            t
        };
        if (t)
            switch (typeof e) {
            case "string":
            case "number":
            case "boolean":
                i = new Error(String(e)),
                o += 1;
                break;
            case "function":
                i = a("function"),
                o += 2;
                break;
            case "object":
                null !== e && D(e) ? i = e : null !== e && W(e) ? ((i = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass,
                o += 1) : (i = a(null === e ? "null" : "unsupported object"),
                o += 2);
                break;
            default:
                i = a("nothing"),
                o += 2
            }
        else
            D(e) ? i = e : (i = a(typeof e),
            o += 2);
        if (!L(i))
            try {
                throw i
            } catch (u) {
                L(u) && (i = u,
                o = 1)
            }
        return [i, o]
    };
    M.__type = "browserjs";
    var W = function(e) {
        return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage)
    }
      , Y = M
      , K = function(e, t, n, r) {
        for (var i = !1, o = e.slice(); !i && o.length; )
            try {
                i = !1 === o.pop()(t)
            } catch (c) {
                r.error("Error occurred in " + n + " callback, continuing anyway\u2026"),
                r.error(c)
            }
        return i
    }
      , Q = function(e, t) {
        var n = "000000000" + e;
        return n.substr(n.length - t)
    }
      , $ = "object" == typeof window ? window : self
      , G = 0;
    for (var X in $)
        Object.hasOwnProperty.call($, X) && G++;
    var J = navigator.mimeTypes ? navigator.mimeTypes.length : 0
      , Z = Q((J + navigator.userAgent.length).toString(36) + G.toString(36), 4)
      , ee = function() {
        return Z
    }
      , te = 0
      , ne = 4
      , re = 36
      , ie = Math.pow(re, ne);
    n.fingerprint = ee;
    var oe, ae = n, se = function() {
        function e() {
            this.id = ae(),
            this.startedAt = new Date,
            this._handled = 0,
            this._unhandled = 0,
            this._user = {},
            this.app = {},
            this.device = {}
        }
        var t = e.prototype;
        return t.getUser = function() {
            return this._user
        }
        ,
        t.setUser = function(e, t, n) {
            this._user = {
                id: e,
                email: t,
                name: n
            }
        }
        ,
        t.toJSON = function() {
            return {
                id: this.id,
                startedAt: this.startedAt,
                events: {
                    handled: this._handled,
                    unhandled: this._unhandled
                }
            }
        }
        ,
        t._track = function(e) {
            this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
        }
        ,
        e
    }(), ce = function() {}, ue = function() {
        function h(e, t, n, r) {
            var i = this;
            void 0 === t && (t = w.schema),
            void 0 === n && (n = []),
            this._notifier = r,
            this._config = {},
            this._schema = t,
            this._delivery = {
                sendSession: ce,
                sendEvent: ce
            },
            this._logger = {
                debug: ce,
                info: ce,
                warn: ce,
                error: ce
            },
            this._plugins = {},
            this._breadcrumbs = [],
            this._session = null,
            this._metadata = {},
            this._context = undefined,
            this._user = {},
            this._cbs = {
                e: [],
                s: [],
                sp: [],
                b: []
            },
            this.Client = h,
            this.Event = Y,
            this.Breadcrumb = C,
            this.Session = se,
            this._config = this._configure(e, n),
            A(n.concat(this._config.plugins), function(e) {
                e && i._loadPlugin(e)
            }),
            this._depth = 1;
            var o = this
              , a = this.notify;
            this.notify = function() {
                return a.apply(o, arguments)
            }
        }
        var e = h.prototype;
        return e.addMetadata = function(e, t, n) {
            return k.add(this._metadata, e, t, n)
        }
        ,
        e.getMetadata = function(e, t) {
            return k.get(this._metadata, e, t)
        }
        ,
        e.clearMetadata = function(e, t) {
            return k.clear(this._metadata, e, t)
        }
        ,
        e.getContext = function() {
            return this._context
        }
        ,
        e.setContext = function(e) {
            this._context = e
        }
        ,
        e._configure = function(r, e) {
            var i = T(e, function(e, t) {
                return t && t.configSchema ? S({}, e, t.configSchema) : e
            }, this._schema)
              , t = T(u(i), function(e, t) {
                var n = i[t].defaultValue(r[t]);
                return r[t] !== undefined ? i[t].validate(r[t]) ? i[t].allowPartialObject ? e.config[t] = S(n, r[t]) : e.config[t] = r[t] : (e.errors[t] = i[t].message,
                e.config[t] = n) : e.config[t] = n,
                e
            }, {
                errors: {},
                config: {}
            })
              , n = t.errors
              , o = t.config;
            if (i.apiKey) {
                if (!o.apiKey)
                    throw new Error("No Bugsnag API Key set");
                /^[0-9a-f]{32}$/i.test(o.apiKey) || (n.apiKey = "should be a string of 32 hexadecimal characters")
            }
            return this._metadata = S({}, o.metadata),
            this._user = S({}, o.user),
            this._context = o.context,
            o.logger && (this._logger = o.logger),
            o.onError && (this._cbs.e = this._cbs.e.concat(o.onError)),
            o.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(o.onBreadcrumb)),
            o.onSession && (this._cbs.s = this._cbs.s.concat(o.onSession)),
            u(n).length && this._logger.warn(le(n, r)),
            o
        }
        ,
        e.getUser = function() {
            return this._user
        }
        ,
        e.setUser = function(e, t, n) {
            this._user = {
                id: e,
                email: t,
                name: n
            }
        }
        ,
        e._loadPlugin = function(e) {
            var t = e.load(this);
            return e.name && (this._plugins["~" + e.name + "~"] = t),
            this
        }
        ,
        e.getPlugin = function(e) {
            return this._plugins["~" + e + "~"]
        }
        ,
        e._setDelivery = function(e) {
            this._delivery = e(this)
        }
        ,
        e.startSession = function() {
            var e = new se;
            return e.app.releaseStage = this._config.releaseStage,
            e.app.version = this._config.appVersion,
            e.app.type = this._config.appType,
            e._user = S({}, this._user),
            K(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"),
            this) : this._sessionDelegate.startSession(this, e)
        }
        ,
        e.addOnError = function(e, t) {
            void 0 === t && (t = !1),
            this._cbs.e[t ? "unshift" : "push"](e)
        }
        ,
        e.removeOnError = function(t) {
            this._cbs.e = m(this._cbs.e, function(e) {
                return e !== t
            })
        }
        ,
        e._addOnSessionPayload = function(e) {
            this._cbs.sp.push(e)
        }
        ,
        e.addOnSession = function(e) {
            this._cbs.s.push(e)
        }
        ,
        e.removeOnSession = function(t) {
            this._cbs.s = m(this._cbs.s, function(e) {
                return e !== t
            })
        }
        ,
        e.addOnBreadcrumb = function(e, t) {
            void 0 === t && (t = !1),
            this._cbs.b[t ? "unshift" : "push"](e)
        }
        ,
        e.removeOnBreadcrumb = function(t) {
            this._cbs.b = m(this._cbs.b, function(e) {
                return e !== t
            })
        }
        ,
        e.pauseSession = function() {
            return this._sessionDelegate.pauseSession(this)
        }
        ,
        e.resumeSession = function() {
            return this._sessionDelegate.resumeSession(this)
        }
        ,
        e.leaveBreadcrumb = function(e, t, n) {
            if (e = "string" == typeof e ? e : "",
            n = "string" == typeof n && y(a, n) ? n : "manual",
            t = "object" == typeof t && null !== t ? t : {},
            e) {
                var r = new C(e,t,n);
                K(this._cbs.b, r, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(r),
                this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs)))
            }
        }
        ,
        e._isBreadcrumbTypeEnabled = function(e) {
            var t = this._config.enabledBreadcrumbTypes;
            return null === t || y(t, e)
        }
        ,
        e.notify = function(e, t, n) {
            void 0 === n && (n = ce);
            var r = Y.create(e, !0, undefined, "notify()", this._depth + 1, this._logger);
            this._notify(r, t, n)
        }
        ,
        e._notify = function(n, e, r) {
            var i = this;
            if (void 0 === r && (r = ce),
            n.app = S({}, n.app, {
                releaseStage: this._config.releaseStage,
                version: this._config.appVersion,
                type: this._config.appType
            }),
            n.context = n.context || this._context,
            n._metadata = S({}, n._metadata, this._metadata),
            n._user = S({}, n._user, this._user),
            n.breadcrumbs = this._breadcrumbs.slice(),
            null !== this._config.enabledReleaseStages && !y(this._config.enabledReleaseStages, this._config.releaseStage))
                return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),
                r(null, n);
            var o, a, t, s, c, u, l, d = n.severity, p = function(e) {
                i._logger.error("Error occurred in onError callback, continuing anyway\u2026"),
                i._logger.error(e)
            }, f = [].concat(this._cbs.e).concat(e);
            o = n,
            a = p,
            t = f,
            s = function(e, n) {
                if ("function" != typeof e)
                    return n(null);
                try {
                    if (2 !== e.length) {
                        var t = e(o);
                        return t && "function" == typeof t.then ? t.then(function(e) {
                            return setTimeout(function() {
                                return n(null, e)
                            })
                        }, function(e) {
                            setTimeout(function() {
                                return a(e),
                                n(null, !0)
                            })
                        }) : n(null, t)
                    }
                    e(o, function(e, t) {
                        if (e)
                            return a(e),
                            n(null);
                        n(null, t)
                    })
                } catch (r) {
                    a(r),
                    n(null)
                }
            }
            ,
            c = function(e, t) {
                if (e && p(e),
                !t)
                    return i._logger.debug("Event not sent due to onError callback"),
                    r(null, n);
                i._isBreadcrumbTypeEnabled("error") && h.prototype.leaveBreadcrumb.call(i, n.errors[0].errorClass, {
                    errorClass: n.errors[0].errorClass,
                    errorMessage: n.errors[0].errorMessage,
                    severity: n.severity
                }, "error"),
                d !== n.severity && (n._handledState.severityReason = {
                    type: "userCallbackSetSeverity"
                }),
                n.unhandled !== n._handledState.unhandled && (n._handledState.severityReason.unhandledOverridden = !0,
                n._handledState.unhandled = n.unhandled),
                i._session && (i._session._track(n),
                n._session = i._session),
                i._delivery.sendEvent({
                    apiKey: n.apiKey || i._config.apiKey,
                    notifier: i._notifier,
                    events: [n]
                }, function(e) {
                    return r(e, n)
                })
            }
            ,
            u = 0,
            (l = function() {
                if (u >= t.length)
                    return c(null, !0);
                s(t[u], function(e, t) {
                    return e ? c(e) : !1 === t ? c(null, !1) : (u++,
                    void l())
                })
            }
            )()
        }
        ,
        h
    }(), le = function(t, n) {
        return new Error("Invalid configuration\n" + A(u(t), function(e) {
            return "  - " + e + " " + t[e] + ", got " + de(n[e])
        }).join("\n\n"))
    }, de = function(e) {
        switch (typeof e) {
        case "string":
        case "number":
        case "object":
            return JSON.stringify(e);
        default:
            return String(e)
        }
    }, pe = ue, fe = function(e, t, n, r) {
        var i = r && r.redactedKeys ? r.redactedKeys : []
          , o = r && r.redactedPaths ? r.redactedPaths : [];
        return JSON.stringify(function a(e, p, f) {
            var h = []
              , m = 0;
            return function y(e, t) {
                function n() {
                    return t.length > ye && me < m
                }
                if (m++,
                t.length > he)
                    return ge;
                if (n())
                    return ge;
                if (null === e || "object" != typeof e)
                    return e;
                if (v(h, e))
                    return "[Circular]";
                if (h.push(e),
                "function" == typeof e.toJSON)
                    try {
                        m--;
                        var r = y(e.toJSON(), t);
                        return h.pop(),
                        r
                    } catch (T) {
                        return g(T)
                    }
                var i, o;
                if ((i = e)instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(i))) {
                    m--;
                    var a = y({
                        name: e.name,
                        message: e.message
                    }, t);
                    return h.pop(),
                    a
                }
                if (o = e,
                "[object Array]" === Object.prototype.toString.call(o)) {
                    for (var s = [], c = 0, u = e.length; c < u; c++) {
                        if (n()) {
                            s.push(ge);
                            break
                        }
                        s.push(y(e[c], t.concat("[]")))
                    }
                    return h.pop(),
                    s
                }
                var l = {};
                try {
                    for (var d in e)
                        if (Object.prototype.hasOwnProperty.call(e, d))
                            if (_(f, t.join(".")) && b(p, d))
                                l[d] = "[REDACTED]";
                            else {
                                if (n()) {
                                    l[d] = ge;
                                    break
                                }
                                l[d] = y(E(e, d), t.concat(d))
                            }
                } catch (x) {}
                return h.pop(),
                l
            }(e, [])
        }(e, i, o), t, n)
    }, he = 20, me = 25e3, ye = 8, ge = "...", ve = {}, _e = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
    ve.event = function(e, t) {
        var n = fe(e, null, null, {
            redactedPaths: _e,
            redactedKeys: t
        });
        if (1e6 < n.length && (e.events[0]._metadata = {
            notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
        },
        1e6 < (n = fe(e, null, null, {
            redactedPaths: _e,
            redactedKeys: t
        })).length))
            throw new Error("payload exceeded 1MB limit");
        return n
    }
    ,
    ve.session = function(e) {
        var t = fe(e, null, null);
        if (1e6 < t.length)
            throw new Error("payload exceeded 1MB limit");
        return t
    }
    ,
    oe = function(i, o) {
        return void 0 === o && (o = window),
        {
            sendEvent: function(e, t) {
                void 0 === t && (t = function() {}
                );
                var n = be(i._config, "notify", "4", o)
                  , r = new o.XDomainRequest;
                r.onload = function() {
                    t(null)
                }
                ,
                r.open("POST", n),
                setTimeout(function() {
                    try {
                        r.send(ve.event(e, i._config.redactedKeys))
                    } catch (n) {
                        i._logger.error(n),
                        t(n)
                    }
                }, 0)
            },
            sendSession: function(e, t) {
                void 0 === t && (t = function() {}
                );
                var n = be(i._config, "sessions", "1", o)
                  , r = new o.XDomainRequest;
                r.onload = function() {
                    t(null)
                }
                ,
                r.open("POST", n),
                setTimeout(function() {
                    try {
                        r.send(ve.session(e, i._config.redactedKeys))
                    } catch (n) {
                        i._logger.error(n),
                        t(n)
                    }
                }, 0)
            }
        }
    }
    ;
    var be = function(e, t, n, r) {
        var i = JSON.parse(JSON.stringify(new Date));
        return Ee(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(i)
    }
      , Ee = oe._matchPageProtocol = function(e, t) {
        return "http:" === t ? e.replace(/^https:/, "http:") : e
    }
      , Te = function(i, o) {
        return void 0 === o && (o = window),
        {
            sendEvent: function(e, t) {
                void 0 === t && (t = function() {}
                );
                try {
                    var n = i._config.endpoints.notify
                      , r = new o.XMLHttpRequest;
                    r.onreadystatechange = function() {
                        r.readyState === o.XMLHttpRequest.DONE && t(null)
                    }
                    ,
                    r.open("POST", n),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.setRequestHeader("Bugsnag-Api-Key", e.apiKey || i._config.apiKey),
                    r.setRequestHeader("Bugsnag-Payload-Version", "4"),
                    r.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()),
                    r.send(ve.event(e, i._config.redactedKeys))
                } catch (a) {
                    i._logger.error(a)
                }
            },
            sendSession: function(e, t) {
                void 0 === t && (t = function() {}
                );
                try {
                    var n = i._config.endpoints.sessions
                      , r = new o.XMLHttpRequest;
                    r.onreadystatechange = function() {
                        r.readyState === o.XMLHttpRequest.DONE && t(null)
                    }
                    ,
                    r.open("POST", n),
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.setRequestHeader("Bugsnag-Api-Key", i._config.apiKey),
                    r.setRequestHeader("Bugsnag-Payload-Version", "1"),
                    r.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()),
                    r.send(ve.session(e, i._config.redactedKeys))
                } catch (a) {
                    i._logger.error(a)
                }
            }
        }
    }
      , we = new Date
      , Se = function() {
        we = new Date
    }
      , Ae = {
        name: "appDuration",
        load: function(e) {
            return e.addOnError(function(e) {
                var t = new Date;
                e.app.duration = t - we
            }, !0),
            {
                reset: Se
            }
        }
    }
      , Ie = function(e, t) {
        var n = "000000000" + e;
        return n.substr(n.length - t)
    }
      , Oe = "object" == typeof window ? window : self
      , Ne = 0;
    for (var Ce in Oe)
        Object.hasOwnProperty.call(Oe, Ce) && Ne++;
    var xe = navigator.mimeTypes ? navigator.mimeTypes.length : 0
      , Pe = Ie((xe + navigator.userAgent.length).toString(36) + Ne.toString(36), 4)
      , Re = function() {
        return Pe
    }
      , Le = 0
      , De = 4
      , Fe = 36
      , ke = Math.pow(Fe, De);
    i.fingerprint = Re;
    var je, Me = i, Be = "bugsnag-anonymous-id", Ue = function(e, r) {
        return void 0 === e && (e = navigator),
        void 0 === r && (r = window.screen),
        {
            load: function(t) {
                var n = {
                    locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                    userAgent: e.userAgent
                };
                r && r.orientation && r.orientation.type ? n.orientation = r.orientation.type : n.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait",
                t._config.generateAnonymousId && (n.id = function() {
                    try {
                        var e = window.localStorage
                          , t = e.getItem(Be);
                        return t && /^c[a-z0-9]{20,32}$/.test(t) || (t = Me(),
                        e.setItem(Be, t)),
                        t
                    } catch (n) {}
                }()),
                t.addOnSession(function(e) {
                    e.device = S({}, e.device, n),
                    t._config.collectUserIp || He(e)
                }),
                t.addOnError(function(e) {
                    e.device = S({}, e.device, n, {
                        time: new Date
                    }),
                    t._config.collectUserIp || He(e)
                }, !0)
            },
            configSchema: {
                generateAnonymousId: {
                    validate: function(e) {
                        return !0 === e || !1 === e
                    },
                    defaultValue: function() {
                        return !0
                    },
                    message: "should be true|false"
                }
            }
        }
    }, He = function(e) {
        var t = e.getUser();
        t && t.id || e.setUser(e.device.id)
    }, Ve = {
        load: function(e) {
            e._sessionDelegate = ze
        }
    }, ze = {
        startSession: function(e, t) {
            var n = e;
            return n._session = t,
            (n._pausedSession = null) === n._config.enabledReleaseStages || y(n._config.enabledReleaseStages, n._config.releaseStage) ? n._delivery.sendSession({
                notifier: n._notifier,
                device: t.device,
                app: t.app,
                sessions: [{
                    id: t.id,
                    startedAt: t.startedAt,
                    user: t._user
                }]
            }) : n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),
            n
        },
        resumeSession: function(e) {
            return e._session ? e : e._pausedSession ? (e._session = e._pausedSession,
            e._pausedSession = null,
            e) : e.startSession()
        },
        pauseSession: function(e) {
            e._pausedSession = e._session,
            e._session = null
        }
    }, qe = {
        load: function(e) {
            e._config.collectUserIp || e.addOnError(function(e) {
                e._user && "undefined" == typeof e._user.id && delete e._user.id,
                e._user = S({
                    id: "[REDACTED]"
                }, e._user),
                e.request = S({
                    clientIp: "[REDACTED]"
                }, e.request)
            })
        },
        configSchema: {
            collectUserIp: {
                defaultValue: function() {
                    return !0
                },
                message: "should be true|false",
                validate: function(e) {
                    return !0 === e || !1 === e
                }
            }
        }
    }, We = {
        load: function(o) {
            !/^(local-)?dev(elopment)?$/.test(o._config.releaseStage) && o._isBreadcrumbTypeEnabled("log") && A(Ye, function(r) {
                var i = console[r];
                console[r] = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    o.leaveBreadcrumb("Console output", T(t, function(e, t, n) {
                        var r = "[Unknown value]";
                        try {
                            r = String(t)
                        } catch (i) {}
                        if ("[object Object]" === r)
                            try {
                                r = JSON.stringify(t)
                            } catch (i) {}
                        return e["[" + n + "]"] = r,
                        e
                    }, {
                        severity: 0 === r.indexOf("group") ? "log" : r
                    }), "log"),
                    i.apply(console, t)
                }
                ,
                console[r]._restore = function() {
                    console[r] = i
                }
            })
        }
    }, Ye = m(["log", "debug", "info", "warn", "error"], function(e) {
        return "undefined" != typeof console && "function" == typeof console[e]
    }), Ke = function(i, p) {
        return void 0 === i && (i = document),
        void 0 === p && (p = window),
        {
            load: function(e) {
                function t(i, o, a) {
                    return void 0 === a && (a = !1),
                    function() {
                        var e = [].slice.call(arguments);
                        try {
                            var t = o(e)
                              , n = t.get();
                            if (a && i.apply(this, e),
                            "function" != typeof n)
                                return i.apply(this, e);
                            if (n.__trace__)
                                t.replace(n.__trace__);
                            else {
                                var r = l();
                                n.__trace__ = function() {
                                    u(r),
                                    d(function() {
                                        u(null)
                                    }, 0);
                                    var e = n.apply(this, arguments);
                                    return u(null),
                                    e
                                }
                                ,
                                n.__trace__.__trace__ = n.__trace__,
                                t.replace(n.__trace__)
                            }
                        } catch (s) {}
                        if (i.apply)
                            return i.apply(this, e);
                        switch (e.length) {
                        case 1:
                            return i(e[0]);
                        case 2:
                            return i(e[0], e[1]);
                        default:
                            return i()
                        }
                    }
                }
                if (e._config.trackInlineScripts) {
                    var s = p.location.href
                      , o = ""
                      , a = i.attachEvent ? "complete" === i.readyState : "loading" !== i.readyState
                      , c = function() {
                        return i.documentElement.outerHTML
                    };
                    o = c();
                    var n = i.onreadystatechange;
                    i.onreadystatechange = function() {
                        "interactive" === i.readyState && (o = c(),
                        a = !0);
                        try {
                            n.apply(this, arguments)
                        } catch (e) {}
                    }
                    ;
                    var r = null
                      , u = function(e) {
                        r = e
                    }
                      , l = function() {
                        var e = i.currentScript || r;
                        if (!e && !a) {
                            var t = i.scripts || i.getElementsByTagName("script");
                            e = t[t.length - 1]
                        }
                        return e
                    };
                    e.addOnError(function(e) {
                        e.errors[0].stacktrace = m(e.errors[0].stacktrace, function(e) {
                            return !/__trace__$/.test(e.method)
                        });
                        var t = e.errors[0].stacktrace[0];
                        if (!t || !t.file || t.file.replace(/#.*$/, "") === s.replace(/#.*$/, "")) {
                            var n = l();
                            if (n) {
                                var r = n.innerHTML;
                                e.addMetadata("script", "content", r.length <= 5e5 ? r : r.substr(0, 5e5)),
                                t && t.lineNumber && (t.code = function(e) {
                                    a && o || (o = c());
                                    var t = ["<!-- DOC START -->"].concat(o.split("\n"))
                                      , n = e - 1
                                      , r = Math.max(n - 3, 0)
                                      , i = Math.min(n + 3, t.length);
                                    return T(t.slice(r, i), function(e, t, n) {
                                        return e[r + 1 + n] = t.length <= 200 ? t : t.substr(0, 200),
                                        e
                                    }, {})
                                }(t.lineNumber))
                            }
                        }
                    }, !0);
                    var d = A(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function(e) {
                        return f(p, e, function(e) {
                            return t(e, function(t) {
                                return {
                                    get: function() {
                                        return t[0]
                                    },
                                    replace: function(e) {
                                        t[0] = e
                                    }
                                }
                            })
                        })
                    })[0];
                    A(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function(e) {
                        p[e] && p[e].prototype && Object.prototype.hasOwnProperty.call(p[e].prototype, "addEventListener") && (f(p[e].prototype, "addEventListener", function(e) {
                            return t(e, h)
                        }),
                        f(p[e].prototype, "removeEventListener", function(e) {
                            return t(e, h, !0)
                        }))
                    })
                }
            },
            configSchema: {
                trackInlineScripts: {
                    validate: function(e) {
                        return !0 === e || !1 === e
                    },
                    defaultValue: function() {
                        return !0
                    },
                    message: "should be true|false"
                }
            }
        }
    }, Qe = function(r) {
        return void 0 === r && (r = window),
        {
            load: function(o) {
                "addEventListener"in r && o._isBreadcrumbTypeEnabled("user") && r.addEventListener("click", function(e) {
                    var t, n;
                    try {
                        t = $e(e.target),
                        n = function i(e, t) {
                            var n = [e.tagName];
                            if (e.id && n.push("#" + e.id),
                            e.className && e.className.length && n.push("." + e.className.split(" ").join(".")),
                            !t.document.querySelectorAll || !Array.prototype.indexOf)
                                return n.join("");
                            try {
                                if (1 === t.document.querySelectorAll(n.join("")).length)
                                    return n.join("")
                            } catch (o) {
                                return n.join("")
                            }
                            if (1 < e.parentNode.childNodes.length) {
                                var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
                                n.push(":nth-child(" + r + ")")
                            }
                            return 1 === t.document.querySelectorAll(n.join("")).length ? n.join("") : e.parentNode ? i(e.parentNode, t) + " > " + n.join("") : n.join("")
                        }(e.target, r)
                    } catch (p) {
                        n = t = "[hidden]",
                        o._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                    }
                    o.leaveBreadcrumb("UI click", {
                        targetText: t,
                        targetSelector: n
                    }, "user")
                }, !0)
            }
        }
    }, $e = function(e) {
        var t = e.textContent || e.innerText || "";
        return t || "submit" !== e.type && "button" !== e.type || (t = e.value),
        function n(e, t) {
            return e && e.length <= t ? e : e.slice(0, t - "(...)".length) + "(...)"
        }(t = t.replace(/^\s+|\s+$/g, ""), 140)
    };
    je = function(r) {
        return void 0 === r && (r = window),
        {
            load: function(n) {
                if ("addEventListener"in r && n._isBreadcrumbTypeEnabled("navigation")) {
                    var e = function(e) {
                        return function() {
                            return n.leaveBreadcrumb(e, {}, "navigation")
                        }
                    };
                    r.addEventListener("pagehide", e("Page hidden"), !0),
                    r.addEventListener("pageshow", e("Page shown"), !0),
                    r.addEventListener("load", e("Page loaded"), !0),
                    r.document.addEventListener("DOMContentLoaded", e("DOMContentLoaded"), !0),
                    r.addEventListener("load", function() {
                        return r.addEventListener("popstate", e("Navigated back"), !0)
                    }),
                    r.addEventListener("hashchange", function(e) {
                        var t = e.oldURL ? {
                            from: Ge(e.oldURL, r),
                            to: Ge(e.newURL, r),
                            state: Je(r)
                        } : {
                            to: Ge(r.location.href, r)
                        };
                        n.leaveBreadcrumb("Hash changed", t, "navigation")
                    }, !0),
                    r.history.replaceState && Xe(n, r.history, "replaceState", r),
                    r.history.pushState && Xe(n, r.history, "pushState", r)
                }
            }
        }
    }
    ;
    var Ge = function(e, t) {
        var n = t.document.createElement("A");
        return n.href = e,
        "" + n.pathname + n.search + n.hash
    }
      , Xe = function(c, u, l, d) {
        var p = u[l];
        u[l] = function(e, t, n) {
            var r, i, o, a, s;
            c.leaveBreadcrumb("History " + l, (i = e,
            o = t,
            a = n,
            s = Ge((r = d).location.href, r),
            {
                title: o,
                state: i,
                prevState: Je(r),
                to: a || s,
                from: s
            }), "navigation"),
            "function" == typeof c.resetEventCount && c.resetEventCount(),
            c._config.autoTrackSessions && c.startSession(),
            p.apply(u, [e, t].concat(n !== undefined ? n : []))
        }
    }
      , Je = function(e) {
        try {
            return e.history.state
        } catch (o) {}
    }
      , Ze = "request"
      , et = "BS~~U"
      , tt = "BS~~M"
      , nt = {
        load: function(e) {
            var t = 0;
            e.addOnError(function() {
                if (t >= e._config.maxEvents)
                    return !1;
                t++
            }),
            e.resetEventCount = function() {
                t = 0
            }
        },
        configSchema: {
            maxEvents: {
                defaultValue: function() {
                    return 10
                },
                message: "should be a positive integer \u2264100",
                validate: function(e) {
                    return l(1, 100)(e)
                }
            }
        }
    }
      , rt = {}
      , it = (rt = {
        load: function(e) {
            e.addOnError(function(e) {
                var t = T(e.errors, function(e, t) {
                    return e.concat(t.stacktrace)
                }, []);
                A(t, function(e) {
                    e.file = it(e.file)
                })
            })
        }
    })._strip = function(e) {
        return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
    }
      , ot = function(e, t, n, r) {
        e[0] || e.push({});
        var i = e[0];
        i.file || "string" != typeof t || (i.file = t),
        !i.lineNumber && at(n) && (i.lineNumber = n),
        i.columnNumber || (at(r) ? i.columnNumber = r : window.event && at(window.event.errorCharacter) && (i.columnNumber = window.event.errorCharacter))
    }
      , at = function(e) {
        return "number" == typeof e && "NaN" !== String.call(e)
    }
      , st = function(t) {
        return function(e) {
            e.file !== t.toString() && e.method && (e.method = e.method.replace(/^\s+/, ""))
        }
    }
      , ct = {}
      , ut = S({}, w.schema, O)
      , lt = {
        _client: null,
        createClient: function(e) {
            "string" == typeof e && (e = {
                apiKey: e
            }),
            e || (e = {});
            var t, n, r, a, l, o, s = [Ae, Ue(), (void 0 === r && (r = window),
            {
                load: function(e) {
                    e.addOnError(function(e) {
                        e.context === undefined && (e.context = r.location.pathname)
                    }, !0)
                }
            }), (void 0 === n && (n = window),
            {
                load: function(e) {
                    e.addOnError(function(e) {
                        e.request && e.request.url || (e.request = S({}, e.request, {
                            url: n.location.href
                        }))
                    }, !0)
                }
            }), nt, Ve, qe, rt, (void 0 === t && (t = window),
            {
                load: function(u) {
                    if (u._config.autoDetectErrors && u._config.enabledErrorTypes.unhandledExceptions) {
                        var l = t.onerror;
                        t.onerror = function d(e, t, n, r, i) {
                            if (0 === n && /Script error\.?/.test(e))
                                u._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                            else {
                                var o, a = {
                                    severity: "error",
                                    unhandled: !0,
                                    severityReason: {
                                        type: "unhandledException"
                                    }
                                };
                                if (i)
                                    o = u.Event.create(i, !0, a, "window onerror", 1),
                                    ot(o.errors[0].stacktrace, t, n, r);
                                else if ("object" != typeof e || null === e || t && "string" == typeof t || n || r || i)
                                    o = u.Event.create(e, !0, a, "window onerror", 1),
                                    ot(o.errors[0].stacktrace, t, n, r);
                                else {
                                    var s = e.type ? "Event: " + e.type : "Error"
                                      , c = e.message || e.detail || "";
                                    (o = u.Event.create({
                                        name: s,
                                        message: c
                                    }, !0, a, "window onerror", 1)).originalError = e,
                                    o.addMetadata("window onerror", {
                                        event: e,
                                        extraParameters: t
                                    })
                                }
                                u._notify(o)
                            }
                            "function" == typeof l && l.apply(this, arguments)
                        }
                    }
                }
            }), (void 0 === o && (o = window),
            {
                load: function(i) {
                    if (i._config.autoDetectErrors && i._config.enabledErrorTypes.unhandledRejections) {
                        var n = function(e) {
                            var t = e.reason
                              , n = !1;
                            try {
                                e.detail && e.detail.reason && (t = e.detail.reason,
                                n = !0)
                            } catch (s) {}
                            var r = i.Event.create(t, !1, {
                                severity: "error",
                                unhandled: !0,
                                severityReason: {
                                    type: "unhandledPromiseRejection"
                                }
                            }, "unhandledrejection handler", 1, i._logger);
                            n && A(r.errors[0].stacktrace, st(t)),
                            i._notify(r, function(e) {
                                var t;
                                D(e.originalError) && !e.originalError.stack && e.addMetadata("unhandledRejection handler", ((t = {})[Object.prototype.toString.call(e.originalError)] = {
                                    name: e.originalError.name,
                                    message: e.originalError.message,
                                    code: e.originalError.code
                                },
                                t))
                            })
                        };
                        "addEventListener"in o ? o.addEventListener("unhandledrejection", n) : o.onunhandledrejection = function(e, t) {
                            n({
                                detail: {
                                    reason: e,
                                    promise: t
                                }
                            })
                        }
                    }
                }
            }), je(), Qe(), (void 0 === a && (a = []),
            void 0 === l && (l = window),
            {
                load: function(i) {
                    function r() {
                        var e = this[et];
                        if (e !== undefined) {
                            if ("string" != typeof e || !y(n, e.replace(/\?.*$/, ""))) {
                                var t = {
                                    status: this.status,
                                    request: this[tt] + " " + this[et]
                                };
                                400 <= this.status ? i.leaveBreadcrumb("XMLHttpRequest failed", t, Ze) : i.leaveBreadcrumb("XMLHttpRequest succeeded", t, Ze)
                            }
                        } else
                            i._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                    }
                    function o() {
                        var e = this[et];
                        e !== undefined ? "string" == typeof e && y(n, e.replace(/\?.*$/, "")) || i.leaveBreadcrumb("XMLHttpRequest error", {
                            request: this[tt] + " " + this[et]
                        }, Ze) : i._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                    }
                    if (i._isBreadcrumbTypeEnabled("request")) {
                        var n = [i._config.endpoints.notify, i._config.endpoints.sessions].concat(a);
                        !function e() {
                            if ("addEventListener"in l.XMLHttpRequest.prototype) {
                                var n = l.XMLHttpRequest.prototype.open;
                                l.XMLHttpRequest.prototype.open = function(e, t) {
                                    this[et] = t,
                                    this[tt] = e,
                                    this["BS~~S"] && (this.removeEventListener("load", r),
                                    this.removeEventListener("error", o)),
                                    this.addEventListener("load", r),
                                    this.addEventListener("error", o),
                                    this["BS~~S"] = !0,
                                    n.apply(this, arguments)
                                }
                            }
                        }(),
                        function t() {
                            if ("fetch"in l && !l.fetch.polyfill) {
                                var s = l.fetch;
                                l.fetch = function(e, t) {
                                    var r, i = arguments, n = e, o = t, a = null;
                                    return n && "object" == typeof n ? (a = n.url,
                                    o && "method"in o ? r = o.method : n && "method"in n && (r = n.method)) : (a = n,
                                    o && "method"in o && (r = o.method)),
                                    r === undefined && (r = "GET"),
                                    new Promise(function(t, n) {
                                        s.apply(void 0, i).then(function(e) {
                                            c(e, r, a),
                                            t(e)
                                        })["catch"](function(e) {
                                            u(r, a),
                                            n(e)
                                        })
                                    }
                                    )
                                }
                            }
                        }();
                        var c = function(e, t, n) {
                            var r = {
                                status: e.status,
                                request: t + " " + n
                            };
                            400 <= e.status ? i.leaveBreadcrumb("fetch() failed", r, Ze) : i.leaveBreadcrumb("fetch() succeeded", r, Ze)
                        }
                          , u = function(e, t) {
                            i.leaveBreadcrumb("fetch() error", {
                                request: e + " " + t
                            }, Ze)
                        }
                    }
                }
            }), We, Ke()], i = new pe(e,ut,s,{
                name: "Bugsnag JavaScript",
                version: "7.14.1",
                url: "https://github.com/bugsnag/bugsnag-js"
            });
            return i._setDelivery(window.XDomainRequest ? oe : Te),
            i._logger.debug("Loaded!"),
            i.leaveBreadcrumb("Bugsnag loaded", {}, "state"),
            i._config.autoTrackSessions ? i.startSession() : i
        },
        start: function(e) {
            return lt._client ? lt._client._logger.warn("Bugsnag.start() was called more than once. Ignoring.") : lt._client = lt.createClient(e),
            lt._client
        }
    };
    return A(["resetEventCount"].concat(u(pe.prototype)), function(t) {
        /^_/.test(t) || (lt[t] = function() {
            if (!lt._client)
                return console.log("Bugsnag." + t + "() was called before Bugsnag.start()");
            lt._client._depth += 1;
            var e = lt._client[t].apply(lt._client, arguments);
            return lt._client._depth -= 1,
            e
        }
        )
    }),
    (ct = lt).Client = pe,
    ct.Event = Y,
    ct.Session = se,
    ct.Breadcrumb = C,
    ct["default"] = lt,
    ct
});
var Query = function(e) {
    "use strict";
    var s = function(e) {
        var t, n, r, i = [];
        if (null == e || "" === e)
            return i;
        for (0 === e.indexOf("?") && (e = e.substring(1)),
        n = e.toString().split(/[&;]/),
        t = 0; t < n.length; t++)
            r = n[t].split("="),
            i.push([r[0], r[1]]);
        return i
    }(e)
      , c = function(e) {
        return e = (e = decodeURIComponent(e)).replace("+", " ")
    }
      , a = function(e, t) {
        var n, r, i, o, a = [];
        for (n = 0; n < s.length; n++)
            r = s[n],
            i = c(r[0]) === c(e),
            o = c(r[1]) === c(t),
            (1 === arguments.length && !i || 2 === arguments.length && !i && !o) && a.push(r);
        return s = a,
        this
    }
      , u = function(e, t, n) {
        return 3 === arguments.length && -1 !== n ? (n = Math.min(n, s.length),
        s.splice(n, 0, [e, t])) : 0 < arguments.length && s.push([e, t]),
        this
    }
      , t = function(e, t, n) {
        var r, i, o = -1;
        if (3 === arguments.length) {
            for (r = 0; r < s.length; r++)
                if (i = s[r],
                c(i[0]) === c(e) && decodeURIComponent(i[1]) === c(n)) {
                    o = r;
                    break
                }
            a(e, n).addParam(e, t, o)
        } else {
            for (r = 0; r < s.length; r++)
                if (i = s[r],
                c(i[0]) === c(e)) {
                    o = r;
                    break
                }
            a(e),
            u(e, t, o)
        }
        return this
    };
    return {
        getParamValue: function(e) {
            var t, n;
            for (n = 0; n < s.length; n++)
                if (t = s[n],
                c(e) === c(t[0]))
                    return t[1]
        },
        getParamValues: function(e) {
            var t, n, r = [];
            for (t = 0; t < s.length; t++)
                n = s[t],
                c(e) === c(n[0]) && r.push(n[1]);
            return r
        },
        deleteParam: a,
        addParam: u,
        replaceParam: t,
        toString: function() {
            var e, t, n = "";
            for (e = 0; e < s.length; e++)
                t = s[e],
                0 < n.length && (n += "&"),
                n += t.join("=");
            return 0 < n.length ? "?" + n : n
        }
    }
}
  , Uri = function(e) {
    "use strict";
    var a = !1
      , t = function(e) {
        for (var t = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], r = {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        }, n = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }[a ? "strict" : "loose"].exec(e), i = {}, o = 14; o--; )
            i[t[o]] = n[o] || "";
        return i[r.name] = {},
        i[t[12]].replace(r.parser, function(e, t, n) {
            t && (i[r.name][t] = n)
        }),
        i
    }(e || "")
      , n = new Query(t.query)
      , r = function(e) {
        return void 0 !== e && (t.protocol = e),
        t.protocol
    }
      , i = null
      , o = function(e) {
        return void 0 !== e && (i = e),
        null === i ? -1 !== t.source.indexOf("//") : i
    }
      , s = function(e) {
        return void 0 !== e && (t.userInfo = e),
        t.userInfo
    }
      , c = function(e) {
        return void 0 !== e && (t.host = e),
        t.host
    }
      , u = function(e) {
        return void 0 !== e && (t.port = e),
        t.port
    }
      , l = function(e) {
        return void 0 !== e && (t.path = e),
        t.path
    }
      , d = function(e) {
        return void 0 !== e && (n = new Query(e)),
        n
    }
      , p = function(e) {
        return void 0 !== e && (t.anchor = e),
        t.anchor
    }
      , f = function(e) {
        return r(e),
        this
    }
      , h = function(e) {
        return o(e),
        this
    }
      , m = function(e) {
        return s(e),
        this
    }
      , y = function(e) {
        return c(e),
        this
    }
      , g = function(e) {
        return u(e),
        this
    }
      , v = function(e) {
        return l(e),
        this
    }
      , _ = function(e) {
        return d(e),
        this
    }
      , b = function(e) {
        return p(e),
        this
    }
      , E = function(e) {
        return d().getParamValue(e)
    }
      , T = function(e) {
        return d().getParamValues(e)
    }
      , w = function(e, t) {
        return 2 === arguments.length ? d().deleteParam(e, t) : d().deleteParam(e),
        this
    }
      , S = function(e, t, n) {
        return 3 === arguments.length ? d().addParam(e, t, n) : d().addParam(e, t),
        this
    }
      , A = function(e, t, n) {
        return 3 === arguments.length ? d().replaceParam(e, t, n) : d().replaceParam(e, t),
        this
    }
      , I = function() {
        var e = ""
          , t = function(e) {
            return null !== e && "" !== e
        };
        return t(r()) ? (e += r(),
        r().indexOf(":") !== r().length - 1 && (e += ":"),
        e += "//") : o() && t(c()) && (e += "//"),
        t(s()) && t(c()) && (e += s(),
        s().indexOf("@") !== s().length - 1 && (e += "@")),
        t(c()) && (e += c(),
        t(u()) && (e += ":" + u())),
        t(l()) ? e += l() : t(c()) && (t(d().toString()) || t(p())) && (e += "/"),
        t(d().toString()) && (0 !== d().toString().indexOf("?") && (e += "?"),
        e += d().toString()),
        t(p()) && (0 !== p().indexOf("#") && (e += "#"),
        e += p()),
        e
    }
      , O = function() {
        return new Uri(I())
    };
    return {
        protocol: r,
        hasAuthorityPrefix: o,
        userInfo: s,
        host: c,
        port: u,
        path: l,
        query: d,
        anchor: p,
        setProtocol: f,
        setHasAuthorityPrefix: h,
        setUserInfo: m,
        setHost: y,
        setPort: g,
        setPath: v,
        setQuery: _,
        setAnchor: b,
        getQueryParamValue: E,
        getQueryParamValues: T,
        deleteQueryParam: w,
        addQueryParam: S,
        replaceQueryParam: A,
        toString: I,
        clone: O
    }
}
  , jsUri = Uri;
(function() {
    window.Spree = function() {
        function r() {}
        return r.ready = function(e) {
            return jQuery(document).ready(e)
        }
        ,
        r.mountedAt = function() {
            return "/"
        }
        ,
        r.pathFor = function(e) {
            return "" + (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")) + this.mountedAt() + e
        }
        ,
        r.url = function(n, e) {
            return "development" !== r.env && "test" !== r.env || console.warn("Spree.url is deprecated, please use Spree.ajax for your request instead."),
            void 0 === n.path && (n = new Uri(n)),
            e && $.each(e, function(e, t) {
                return n.addQueryParam(e, t)
            }),
            n
        }
        ,
        r.ajax = function(e, t) {
            return "object" == typeof e && (t = e,
            e = void 0),
            t = t || {},
            t = $.extend(t, {
                headers: {
                    "X-Spree-Token": r.api_key
                }
            }),
            $.ajax(e, t)
        }
        ,
        r.routes = {
            states_search: r.pathFor("api/states"),
            apply_coupon_code: function(e) {
                return r.pathFor("api/orders/" + e + "/apply_coupon_code")
            }
        },
        r.getJSON = function(e, t, n) {
            return "function" == typeof t && (n = t,
            t = void 0),
            this.ajax({
                dataType: "json",
                url: e,
                data: t,
                success: n
            })
        }
        ,
        r
    }()
}
).call(this),
SolidusPaypalBraintree = {
    APPLE_PAY_API_VERSION: 1,
    config: {
        paths: {
            clientTokens: Spree.pathFor("solidus_paypal_braintree/client_token"),
            transactions: Spree.pathFor("solidus_paypal_braintree/transactions")
        },
        braintreeErrorHandle: function(e) {
            BraintreeError.getErrorFromSlug(e.code),
            SolidusPaypalBraintree.showError(error)
        },
        classes: {
            hostedForm: function() {
                return SolidusPaypalBraintree.HostedForm
            },
            client: function() {
                return SolidusPaypalBraintree.Client
            },
            paypalButton: function() {
                return SolidusPaypalBraintree.PaypalButton
            },
            applepayButton: function() {
                return SolidusPaypalBraintree.ApplepayButton
            }
        }
    },
    showError: function(e) {
        var t = $("#content")
          , n = $("<div class='flash error'>" + e + "</div>");
        t.prepend(n),
        n.show().delay(5e3).fadeOut(500)
    },
    createHostedForm: function() {
        return SolidusPaypalBraintree._factory(SolidusPaypalBraintree.config.classes.hostedForm(), arguments)
    },
    createClient: function() {
        return SolidusPaypalBraintree._factory(SolidusPaypalBraintree.config.classes.client(), arguments)
    },
    createPaypalButton: function() {
        return SolidusPaypalBraintree._factory(SolidusPaypalBraintree.config.classes.paypalButton(), arguments)
    },
    createApplePayButton: function() {
        return SolidusPaypalBraintree._factory(SolidusPaypalBraintree.config.classes.applepayButton(), arguments)
    },
    _factory: function(e, t) {
        var n = Array.prototype.slice.call(t);
        return new (Function.prototype.bind.apply(e, [null].concat(n)))
    }
},
SolidusPaypalBraintree.PromiseShim = {
    convertBraintreePromise: function(e, t, n) {
        var r = $.Deferred();
        return n = n || this,
        t = (t = t || []).concat(function(e, t) {
            e ? r.reject(e) : r.resolve(t)
        }),
        e.apply(n, t),
        r.promise()
    }
},
SolidusPaypalBraintree.Client = function(e) {
    this.paymentMethodId = e.paymentMethodId,
    this.readyCallback = e.readyCallback,
    this.useDataCollector = e.useDataCollector,
    this.usePaypal = e.usePaypal,
    this.useApplepay = e.useApplepay,
    this._braintreeInstance = null,
    this._dataCollectorInstance = null,
    this._paypalInstance = null
}
,
SolidusPaypalBraintree.Client.prototype.initialize = function() {
    var e = this._fetchToken().then(this._createBraintreeInstance.bind(this));
    return this.useDataCollector && (e = e.then(this._createDataCollector.bind(this))),
    this.usePaypal && (e = e.then(this._createPaypal.bind(this))),
    this.useApplepay && (e = e.then(this._createApplepay.bind(this))),
    e.then(this._invokeReadyCallback.bind(this))
}
,
SolidusPaypalBraintree.Client.prototype.getBraintreeInstance = function() {
    return this._braintreeInstance
}
,
SolidusPaypalBraintree.Client.prototype.getPaypalInstance = function() {
    return this._paypalInstance
}
,
SolidusPaypalBraintree.Client.prototype.getApplepayInstance = function() {
    return this._applepayInstance
}
,
SolidusPaypalBraintree.Client.prototype.getDataCollectorInstance = function() {
    return this._dataCollectorInstance
}
,
SolidusPaypalBraintree.Client.prototype._fetchToken = function() {
    var e = {
        dataType: "json",
        type: "POST",
        url: SolidusPaypalBraintree.config.paths.clientTokens,
        error: function() {
            console.error("Error fetching braintree token")
        }
    };
    return this.paymentMethodId && (e.data = {
        payment_method_id: this.paymentMethodId
    }),
    Spree.ajax(e)
}
,
SolidusPaypalBraintree.Client.prototype._createBraintreeInstance = function(e) {
    return this.paymentMethodId = e.payment_method_id,
    SolidusPaypalBraintree.PromiseShim.convertBraintreePromise(braintree.client.create, [{
        authorization: e.client_token
    }]).then(function(e) {
        return this._braintreeInstance = e
    }
    .bind(this))
}
,
SolidusPaypalBraintree.Client.prototype._invokeReadyCallback = function() {
    return this.readyCallback && this.readyCallback(this._braintreeInstance),
    this
}
,
SolidusPaypalBraintree.Client.prototype._createDataCollector = function() {
    return SolidusPaypalBraintree.PromiseShim.convertBraintreePromise(braintree.dataCollector.create, [{
        client: this._braintreeInstance,
        paypal: !!this.usePaypal
    }]).then(function(e) {
        return this._dataCollectorInstance = e
    }
    .bind(this))
}
,
SolidusPaypalBraintree.Client.prototype._createPaypal = function() {
    return SolidusPaypalBraintree.PromiseShim.convertBraintreePromise(braintree.paypalCheckout.create, [{
        client: this._braintreeInstance
    }]).then(function(e) {
        return this._paypalInstance = e
    }
    .bind(this))
}
,
SolidusPaypalBraintree.Client.prototype._createApplepay = function() {
    return SolidusPaypalBraintree.PromiseShim.convertBraintreePromise(braintree.applePay.create, [{
        client: this._braintreeInstance
    }]).then(function(e) {
        return this._applepayInstance = e
    }
    .bind(this))
}
,
SolidusPaypalBraintree.HostedForm = function(e) {
    this.paymentMethodId = e,
    this.client = null
}
,
SolidusPaypalBraintree.HostedForm.prototype.initialize = function() {
    return this.client = SolidusPaypalBraintree.createClient({
        paymentMethodId: this.paymentMethodId
    }),
    this.client.initialize().then(this._createHostedFields.bind(this))
}
,
SolidusPaypalBraintree.HostedForm.prototype._createHostedFields = function() {
    if (!this.client)
        throw new Error("Client not initialized, please call initialize first!");
    var e = {
        client: this.client.getBraintreeInstance(),
        fields: {
            number: {
                selector: "#card_number" + this.paymentMethodId
            },
            cvv: {
                selector: "#card_code" + this.paymentMethodId
            },
            expirationDate: {
                selector: "#card_expiry" + this.paymentMethodId
            }
        }
    };
    return SolidusPaypalBraintree.PromiseShim.convertBraintreePromise(braintree.hostedFields.create, [e])
}
,
SolidusPaypalBraintree.PaypalButton = function(e, t, n) {
    if (this._element = e,
    this._paypalOptions = t || {},
    this._options = n || {},
    this._client = null,
    this._environment = this._paypalOptions.environment || "sandbox",
    delete this._paypalOptions.environment,
    !this._element)
        throw new Error("Element for the paypal button must be present on the page")
}
,
SolidusPaypalBraintree.PaypalButton.prototype.initialize = function() {
    return this._client = new SolidusPaypalBraintree.createClient({
        useDataCollector: !0,
        usePaypal: !0
    }),
    this._client.initialize().then(this.initializeCallback.bind(this))
}
,
SolidusPaypalBraintree.PaypalButton.prototype.initializeCallback = function() {
    this._paymentMethodId = this._client.paymentMethodId,
    paypal.Button.render({
        env: this._environment,
        payment: function() {
            return this._client.getPaypalInstance().createPayment(this._paypalOptions)
        }
        .bind(this),
        onAuthorize: function(e) {
            return this._client.getPaypalInstance().tokenizePayment(e, this._tokenizeCallback.bind(this))
        }
        .bind(this)
    }, this._element)
}
,
SolidusPaypalBraintree.PaypalButton.prototype._tokenizeCallback = function(e, t) {
    if (!e) {
        var n = this._transactionParams(t);
        return Spree.ajax({
            url: SolidusPaypalBraintree.config.paths.transactions,
            type: "POST",
            dataType: "json",
            data: n,
            success: function(e) {
                window.location.href = e.redirectUrl
            },
            error: function() {
                console.error("Error submitting transaction")
            }
        })
    }
    SolidusPaypalBraintree.config.braintreeErrorHandle(e)
}
,
SolidusPaypalBraintree.PaypalButton.prototype._transactionParams = function(e) {
    return {
        payment_method_id: this._paymentMethodId,
        options: this._options,
        transaction: {
            email: e.details.email,
            phone: e.details.phone,
            nonce: e.nonce,
            payment_type: e.type,
            address_attributes: this._addressParams(e)
        }
    }
}
,
SolidusPaypalBraintree.PaypalButton.prototype._addressParams = function(e) {
    var t, n, r = e.details.shippingAddress || e.details.billingAddress;
    return r.recipientName && (t = r.recipientName.split(" ")[0],
    n = r.recipientName.split(" ")[1]),
    t && n || (t = e.details.firstName,
    n = e.details.lastName),
    {
        first_name: t,
        last_name: n,
        address_line_1: r.line1,
        address_line_2: r.line2,
        city: r.city,
        state_code: r.state,
        zip: r.postalCode,
        country_code: r.countryCode
    }
}
,
SolidusPaypalBraintree.ApplepayButton = function(e, t) {
    if (this._element = e,
    this._applepayOptions = t || {},
    this._client = null,
    !this._element)
        throw new Error("Element for the Apple Pay button must be present on the page")
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.initialize = function() {
    if (window.ApplePaySession && ApplePaySession.canMakePayments())
        return this._client = new SolidusPaypalBraintree.createClient({
            useDataCollector: !1,
            useApplepay: !0,
            paymentMethodId: this._applepayOptions.paymentMethodId
        }),
        this._client.initialize().then(this.initializeCallback.bind(this))
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.initializeCallback = function() {
    this._paymentMethodId = this._client.paymentMethodId,
    this._applePayInstance = this._client.getApplepayInstance(),
    this._element.removeAttribute("disabled"),
    this._element.classList.add("visible"),
    this._element.addEventListener("click", function(e) {
        this.initializeApplePaySession(),
        e.preventDefault()
    }
    .bind(this), !1)
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.initializeApplePaySession = function() {
    var e = this._applePayInstance.createPaymentRequest(this._paymentRequestHash())
      , t = new ApplePaySession(SolidusPaypalBraintree.APPLE_PAY_API_VERSION,e)
      , n = this;
    t.onvalidatemerchant = function() {
        n.validateMerchant(t, e)
    }
    ,
    t.onpaymentauthorized = function(e) {
        n.tokenize(t, e.payment)
    }
    ,
    t.begin()
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.validateMerchant = function(n, e) {
    this._applePayInstance.performValidation({
        validationURL: event.validationURL,
        displayName: e.total.label
    }, function(e, t) {
        if (e)
            return console.error("Error validating Apple Pay:", e),
            void n.abort();
        n.completeMerchantValidation(t)
    })
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.tokenize = function(n, r) {
    this._applePayInstance.tokenize({
        token: r.token
    }, function(e, t) {
        e && (console.error("Error tokenizing Apple Pay:", e),
        n.completePayment(ApplePaySession.STATUS_FAILURE)),
        this._createTransaction(n, r, t)
    }
    .bind(this))
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._createTransaction = function(n, e, t) {
    Spree.ajax({
        data: this._transactionParams(t, e.shippingContact),
        dataType: "json",
        type: "POST",
        url: SolidusPaypalBraintree.config.paths.transactions,
        success: function(e) {
            n.completePayment(ApplePaySession.STATUS_SUCCESS),
            window.location.replace(e.redirectUrl)
        },
        error: function(e) {
            if (422 === e.status) {
                var t = e.responseJSON.errors;
                t && t.Address ? n.completePayment(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS) : n.completePayment(ApplePaySession.STATUS_FAILURE)
            }
        }
    })
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._paymentRequestHash = function() {
    return {
        total: {
            label: this._applepayOptions.storeName,
            amount: this._applepayOptions.amount
        },
        shippingContact: this._applepayOptions.shippingContact,
        requiredShippingContactFields: ["postalAddress", "phone", "email"]
    }
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._transactionParams = function(e, t) {
    return {
        payment_method_id: this._applepayOptions.paymentMethodId,
        transaction: {
            email: t.emailAddress,
            nonce: e.nonce,
            payment_type: e.type,
            phone: t.phoneNumber,
            address_attributes: this._addressParams(t)
        }
    }
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._addressParams = function(e) {
    var t = {
        country_name: e.country,
        country_code: e.countryCode,
        first_name: e.givenName,
        last_name: e.familyName,
        state_code: e.administrativeArea,
        city: e.locality,
        zip: e.postalCode,
        address_line_1: e.addressLines[0]
    };
    return 1 < e.addressLines.length && (t.address_line_2 = e.addressLines[1]),
    t
}
,
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
    display: function display(e, t, n) {
        var r = Spree.Flash.template(t, n).addClass("flash-" + e + " custom-flash");
        return $(".flash-notices").append(r),
        "success" === e ? $(".flash-notices").fadeIn().delay(3200).fadeOut("slow") : r
    },
    template: function template(e, t) {
        var n = undefined;
        return n = "" !== t ? '\n      <div class="flash">\n        <div>' + e + "</div>\n        <div>" + t + "</div>\n      </div>\n      " : '\n      <div class="flash">\n        <div>' + e + "</div>\n      </div>\n      ",
        $(n)
    },
    alert: function alert(e, t) {
        var n = arguments.length <= 1 || t === undefined ? "" : t;
        return Spree.Flash.display("alert", e, n)
    },
    error: function gUa(e, t) {
        var n = arguments.length <= 1 || t === undefined ? "" : t;
        return Spree.Flash.display("error", e, n)
    },
    warn: function warn(e, t) {
        var n = arguments.length <= 1 || t === undefined ? "" : t;
        return Spree.Flash.display("warn", e, n)
    },
    success: function success(e, t) {
        var n = arguments.length <= 1 || t === undefined ? "" : t;
        return Spree.Flash.display("success", e, n)
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
window.SolidusBraintree = {},
SolidusBraintree.getFrontendStyles = function() {
    var e = $(".braintree-hosted-field")
      , t = "#92979f"
      , n = "#3c773d"
      , r = "#d8544f";
    return {
        input: {
            "font-family": e.css("font-family"),
            "font-size": e.css("font-size"),
            "font-weight": e.css("font-weight"),
            "letter-spacing": e.css("letter-spacing"),
            color: e.css("color")
        },
        ".valid": {
            color: n
        },
        ".invalid": {
            color: r
        },
        "::-webkit-input-placeholder": {
            color: t
        },
        ":-moz-placeholder": {
            color: t
        },
        "::-moz-placeholder": {
            color: t
        },
        ":-ms-input-placeholder ": {
            color: t
        }
    }
}
,
SolidusBraintree.hostedFieldsOptions = function(e) {
    return $.extend({
        styles: SolidusBraintree.getFrontendStyles(),
        fields: {
            number: {
                selector: "#braintree_card_number",
                placeholder: braintree.placeholders.number
            },
            cvv: {
                selector: "#braintree_card_code",
                placeholder: braintree.placeholders.cvv
            },
            expirationDate: {
                selector: "#braintree_card_expiry",
                placeholder: "MM/YY"
            }
        }
    }, e)
}
,
SolidusBraintree.onClientError = function(e) {
    var t = "VALIDATION" === e.type ? "There was a problem with your payment information. Please check your information and try again." : e.message;
    Spree.Flash.alert(t),
    (e.details && e.details.invalidFieldKeys || []).forEach(function(e) {
        Spree.Flash.alert(e + " is required.")
    })
}
,
SolidusBraintree.onBlurPayment = function(e) {
    var t = e.emittedBy
      , n = e.fields[t];
    SolidusBraintree.validateField(n, t)
}
,
SolidusBraintree.onFocusPayment = function(e) {
    var t = e.emittedBy
      , n = e.fields[t];
    SolidusBraintree.clearValidations(n, t)
}
,
SolidusBraintree.onValidityChange = function(e) {
    var t = e.emittedBy
      , n = e.fields[t];
    SolidusBraintree.validateField(n, t)
}
,
SolidusBraintree.onSubmitPayment = function() {
    return $(this).find("input[type=submit]").prop("disabled", !0),
    "paypal" == $("#cc_type").val() || SolidusBraintree.validateForm() ? !!SolidusBraintree.paymentNonce() && void 0 : ($(this).find("input[type=submit]").prop("disabled", !1),
    !1)
}
,
SolidusBraintree.validateForm = function() {
    var e = SolidusBraintree.hostedFieldsInstance.getState().fields;
    return _.each(e, function(e, t) {
        SolidusBraintree.validateField(e, t)
    }),
    _.every(e, "isValid")
}
,
SolidusBraintree.validateField = function(e, t) {
    $(e.container).toggleClass("form-input-success", e.isValid).toggleClass("form-input-danger", !e.isValid),
    e.isValid ? SolidusBraintree.hostedFieldsInstance.addClass(t, "valid") : SolidusBraintree.hostedFieldsInstance.addClass(t, "invalid")
}
,
SolidusBraintree.clearValidations = function(e, t) {
    $(e.container).removeClass("form-input-success form-input-danger"),
    SolidusBraintree.hostedFieldsInstance.removeClass(t, "valid"),
    SolidusBraintree.hostedFieldsInstance.removeClass(t, "invalid")
}
,
SolidusBraintree.paymentNonce = function() {
    var e = SolidusBraintree.nonceInput.val();
    return e || SolidusBraintree.hostedFieldsInstance.tokenize(function(e, t) {
        SolidusBraintree.nonceInput.val(t && t.nonce),
        SolidusBraintree.paymentForm.submit()
    }),
    e
}
,
SolidusBraintree.keyboardSubmit = function() {
    SolidusBraintree.hostedFieldsInstance.on("inputSubmitRequest", function() {
        SolidusBraintree.paymentForm.submit()
    })
}
,
SolidusBraintree.enableForm = function() {
    SolidusBraintree.paymentForm.find(":submit").prop("disabled", !1)
}
,
SolidusBraintree.bindHostedField = function() {
    SolidusBraintree.hostedFieldsInstance.on("blur", SolidusBraintree.onBlurPayment),
    SolidusBraintree.hostedFieldsInstance.on("focus", SolidusBraintree.onFocusPayment),
    SolidusBraintree.hostedFieldsInstance.on("validityChange", SolidusBraintree.onValidityChange)
}
,
SolidusBraintree.setDeviceData = function(e) {
    $("input#device_data").val(e.deviceData),
    e.teardown()
}
,
SolidusBraintree.createDataCollector = function(e) {
    return promisify(braintree.dataCollector.create, [{
        client: e,
        kount: !0,
        paypal: !0
    }])
}
,
SolidusBraintree.recordDeviceData = function(e) {
    return braintree.dataCollector && SolidusBraintree.createDataCollector(e).then(SolidusBraintree.setDeviceData),
    e
}
,
SolidusBraintree.createHostedFields = function(e) {
    return promisify(braintree.hostedFields.create, [SolidusBraintree.hostedFieldsOptions({
        client: e
    })]).then(function(e) {
        return SolidusBraintree.hostedFieldsInstance = e
    })
}
,
SolidusBraintree.createPaypal = function(e) {
    return braintree.paypal.create({
        client: e
    }, function(e, t) {
        if (!e) {
            $("#paypal-checkbox").show();
            var n = document.querySelector("#paypal-button");
            return n.removeAttribute("disabled"),
            n.addEventListener("click", function() {
                t.tokenize({
                    flow: "vault"
                }, function(e, t) {
                    e ? "CUSTOMER" !== e.type && console.error("Error tokenizing:", e) : ($(n).hide(),
                    $("#payment_method_nonce").val(t.nonce),
                    $("#default-cc-nonce").val(t.nonce),
                    $("input[id^='name_on_card']").val(t.details.email),
                    $("#cc_type").val("paypal"),
                    $("#paypal-submit").click(),
                    $(".billing-save-changes").click())
                })
            }, !1),
            braintree.client
        }
        console.error("Error creating PayPal:", e)
    }),
    e
}
,
SolidusBraintree.createClient = function(e) {
    return promisify(braintree.client.create, [{
        authorization: e
    }])
}
,
SolidusBraintree.getPaymentMethodInputs = function() {
    return $('[name*="[payment_method_id]"]')
}
,
SolidusBraintree.getPaymentId = function() {
    return SolidusBraintree.getPaymentMethodInputs().filter(":checked").val()
}
,
SolidusBraintree.initPaymentMethod = function() {
    Spree.api.payment_client_token.create({
        payment_method_id: SolidusBraintree.getPaymentId()
    }).then(SolidusBraintree.createClient).then(SolidusBraintree.createPaypal).then(SolidusBraintree.recordDeviceData).then(SolidusBraintree.createHostedFields).then(SolidusBraintree.keyboardSubmit).then(SolidusBraintree.bindHostedField).then(SolidusBraintree.enableForm, SolidusBraintree.onClientError)
}
,
$(document).ready(function() {
    var e = document.getElementById("paymentSubmitBtn");
    void 0 !== e && null != e && document.getElementById("paymentSubmitBtn").addEventListener("click", function(e) {
        e.preventDefault(),
        $(this).find("input[type=submit]").prop("disabled", !0),
        grecaptcha.execute()
    }),
    SolidusBraintree.nonceInput = $("#payment_method_nonce"),
    SolidusBraintree.paymentForm = $("#checkout_form_payment").on("submit", SolidusBraintree.onSubmitPayment),
    0 !== SolidusBraintree.getPaymentMethodInputs().length && (SolidusBraintree.initPaymentMethod(),
    SolidusBraintree.getPaymentMethodInputs().on("change", SolidusBraintree.initPaymentMethod))
}),
SolidusPaypalBraintree.ApplepayButton.prototype.initializeCallback = function() {
    this._paymentMethodId = this._client.paymentMethodId,
    this._applePayInstance = this._client.getApplepayInstance(),
    this._element.removeAttribute("disabled"),
    this._element.classList.add("visible"),
    "BUTTON" == this._element.tagName && this._element.addEventListener("click", function(e) {
        this.initializeApplePaySession(),
        e.preventDefault()
    }
    .bind(this), !1)
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.initializeApplePaySession = function() {
    var t = this._applePayInstance.createPaymentRequest(this._paymentRequestHash())
      , n = new ApplePaySession(SolidusPaypalBraintree.APPLE_PAY_API_VERSION,t)
      , r = this;
    n.onvalidatemerchant = function() {
        r.validateMerchant(n, t)
    }
    ,
    n.onpaymentauthorized = function(e) {
        r.tokenize(n, e.payment)
    }
    ,
    n.onshippingcontactselected = function(e) {
        r.addShippingMethods(n, t, e.shippingContact)
    }
    ,
    n.onshippingmethodselected = function(e) {
        r.updateTotal(n, t, e.shippingMethod)
    }
    ,
    n.begin()
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._paymentRequestHash = function() {
    return {
        total: {
            label: this._applepayOptions.storeName,
            amount: this._applepayOptions.amount
        },
        shippingContact: this._applepayOptions.shippingContact,
        requiredShippingContactFields: ["postalAddress", "phone", "email"],
        countryCode: this._applepayOptions.countryCode,
        currencyCode: this._applepayOptions.currencyCode
    }
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.addShippingMethods = function(t, n, e) {
    var r = $('meta[name="csrf-token"]').attr("content");
    fetch("/apple_pay/shipping_rates", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            shipping_address: e,
            authenticity_token: r
        })
    }).then(function(e) {
        return e.json()
    }).then(function(e) {
        e.success ? t.completeShippingContactSelection({
            newTotal: {
                label: n.total.label,
                amount: e.new_total
            },
            newShippingMethods: e.shipping_rates
        }) : errorShippingContactSelection(t, n, e.error)
    })["catch"](function(e) {
        errorShippingContactSelection(t, n, e)
    })
}
,
SolidusPaypalBraintree.ApplepayButton.prototype.updateTotal = function(t, n, e) {
    var r = $('meta[name="csrf-token"]').attr("content");
    fetch("/apple_pay/set_shipping_method", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            shipping_method_id: e.identifier,
            authenticity_token: r
        })
    }).then(function(e) {
        return e.json()
    }).then(function(e) {
        e.success ? t.completeShippingMethodSelection({
            newTotal: {
                label: n.total.label,
                amount: e.new_total
            }
        }) : console.error("Error:", e.error)
    })["catch"](function(e) {
        console.error("Error:", e)
    })
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._createTransaction = function(n, e, t) {
    Spree.ajax({
        data: this._transactionParams(t, e.shippingContact),
        dataType: "json",
        type: "POST",
        url: SolidusPaypalBraintree.config.paths.transactions,
        success: function r(e) {
            n.completePayment(ApplePaySession.STATUS_SUCCESS),
            window.location.replace(e.redirectUrl)
        },
        error: function i(e) {
            if (422 === e.status) {
                var t = e.responseJSON.errors;
                t && t.Address ? n.completePayment(ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS) : n.completePayment(ApplePaySession.STATUS_FAILURE)
            }
        }
    })
}
,
SolidusPaypalBraintree.ApplepayButton.prototype._transactionParams = function(e, t) {
    return {
        payment_method_id: this._applepayOptions.paymentMethodId,
        transaction: {
            email: t.emailAddress,
            nonce: e.nonce,
            payment_type: e.type,
            phone: t.phoneNumber,
            address_attributes: this._addressParams(t)
        }
    }
}
,
$(document).ready(function() {
    var e = document.getElementById("apple-pay-button");
    e && new SolidusPaypalBraintree.createApplePayButton(e,applePayOptions).initialize()
});
