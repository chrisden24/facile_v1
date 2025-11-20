window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": ""
    }
};
/*! This file is auto-generated */
! function(s, n) {
    var o, i, e;

    function c(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }

    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
            a = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data));
        return t.every(function(e, t) {
            return e === a[t]
        })
    }

    function u(e, t) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        for (var n = e.getImageData(16, 16, 1, 1), a = 0; a < n.data.length; a++)
            if (0 !== n.data[a]) return !1;
        return !0
    }

    function f(e, t, n, a) {
        switch (t) {
            case "flag":
                return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\udde8\ud83c\uddf6", "\ud83c\udde8\u200b\ud83c\uddf6") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case "emoji":
                return !a(e, "\ud83e\udedf")
        }
        return !1
    }

    function g(e, t, n, a) {
        var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : s.createElement("canvas"),
            o = r.getContext("2d", {
                willReadFrequently: !0
            }),
            i = (o.textBaseline = "top", o.font = "600 32px Arial", {});
        return e.forEach(function(e) {
            i[e] = t(o, e, n, a)
        }), i
    }

    function t(e) {
        var t = s.createElement("script");
        t.src = e, t.defer = !0, s.head.appendChild(t)
    }
    "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", i = ["flag", "emoji"], n.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, e = new Promise(function(e) {
        s.addEventListener("DOMContentLoaded", e, {
            once: !0
        })
    }), new Promise(function(t) {
        var n = function() {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try {
                var e = "postMessage(" + g.toString() + "(" + [JSON.stringify(i), f.toString(), p.toString(), u.toString()].join(",") + "));",
                    a = new Blob([e], {
                        type: "text/javascript"
                    }),
                    r = new Worker(URL.createObjectURL(a), {
                        name: "wpTestEmojiSupports"
                    });
                return void(r.onmessage = function(e) {
                    c(n = e.data), r.terminate(), t(n)
                })
            } catch (e) {}
            c(n = g(i, f, p, u))
        }
        t(n)
    }).then(function(e) {
        for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]);
        n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function() {
            n.DOMReady = !0
        }
    }).then(function() {
        return e
    }).then(function() {
        var e;
        n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
    }))
}((window, document), window._wpemojiSettings);
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var c = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var c in e) n.d(o, c, function(t) {
                return e[t]
            }.bind(null, c));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    const n = window._ckyConfig,
        o = window._ckyStyles;
    n._backupNodes = [], n._resetConsentID = !1, n._bannerState = !1, n._preferenceOriginTag = !1, window.cookieyes = window.cookieyes || {};
    const c = window.cookieyes;
    c._ckyConsentStore = new Map, c._ckyGetCookieMap = function() {
        const e = {};
        try {
            document.cookie.split(";").map(t => {
                const [n, o] = t.split("=");
                n && (e[n.trim()] = o)
            })
        } catch (e) {}
        return e
    };
    const r = c._ckyGetCookieMap();
    c._ckyGetFromStore = function(e) {
        return c._ckyConsentStore.get(e) || ""
    }, c._ckySetInStore = function(e, t) {
        c._ckyConsentStore.set(e, t);
        let o = [];
        for (const [e, t] of c._ckyConsentStore) o.push(`${e}:${t}`);
        const r = n && n._expiry ? n._expiry : 365;
        c._ckySetCookie("cookieyes-consent", o.join(","), r)
    };
    const s = (r["cookieyes-consent"] || "").split(",").reduce((e, t) => {
        if (!t) return e;
        const [n, o] = t.split(":");
        return e[n] = o, e
    }, {});

    function i(e) {
        const t = document.querySelector("[data-cky-tag=" + e + "]");
        return t || !1
    }

    function a(e, t) {
        const n = y(e);
        n && n.addEventListener("click", t)
    }

    function u() {
        return d("remove", ...arguments)
    }

    function l() {
        return d("toggle", ...arguments)
    }

    function d(e, t, n, o = !0) {
        const c = y(t, o);
        return c && c.classList[e](n)
    }

    function y(e, t) {
        let n = e;
        switch (!0) {
            case e.startsWith("="):
                n = `[data-cky-tag="${e.substring(1)}"]`
        }
        const o = document.querySelector(n);
        return !o || t && !o.parentElement ? null : t ? o.parentElement : o
    }

    function f(e) {
        const t = new CustomEvent("cookieyes_consent_update", {
            detail: e
        });
        document.dispatchEvent(t)
    }

    function g() {
        S(), !0 === n._bannerConfig.config.revisitConsent.status && I()
    }

    function p() {
        ! function() {
            if (document.getElementById("cky-style") || !o) return;
            document.head.insertAdjacentHTML("beforeend", ` <style id="cky-style">${o.css}</style>`)
        }(),
        function() {
            const e = n._tags;
            Array.prototype.forEach.call(e, (function(e) {
                document.querySelectorAll("[data-cky-tag=" + e.tag + "]").forEach((function(t) {
                    let n = "";
                    for (const t in e.styles) n += `${t}: ${e.styles[t]};`;
                    t.style.cssText = n
                }))
            }))
        }(),
        function() {
            const e = document.getElementById("ckyBannerTemplate").innerHTML,
                t = (new DOMParser).parseFromString(e, "text/html");
            (function(e) {
                const t = e.querySelector('[data-cky-tag="detail"] .cky-footer-shadow'),
                    n = e.querySelector('[data-cky-tag="detail"]');
                if (!t) return;
                const o = n && n.style.backgroundColor || "#ffffff";
                t.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${o} 100%)`
            })(t), document.body.insertAdjacentHTML("afterbegin", t.body.innerHTML), "classic" === h() && k("=settings-button", "false");
            P(),
                function() {
                    if (!n._bannerConfig.config.auditTable.status) return;
                    const e = n._categories.map(({
                        slug: e
                    }) => e);
                    e.map(t => {
                        const n = "#ckyDetailCategory" + t,
                            o = n + "  .cky-accordion-btn",
                            c = document.querySelector(o);
                        if (c) {
                            const e = c.closest(".cky-accordion");
                            if (e) {
                                const t = e.querySelector(".cky-accordion-body");
                                if (t) {
                                    let n = t.id;
                                    n || (n = `ckyDetailCategory${e.id.replace("ckyDetailCategory","")}Body`, t.id = n), c.setAttribute("aria-controls", n)
                                }
                            }
                        }
                        k(o, "false"), a(n, ({
                            target: {
                                id: c
                            }
                        }) => {
                            c !== "ckySwitch" + t && l(n, "cky-accordion-active", !1) ? (k(o, "true"), e.filter(e => e !== t).map(e => {
                                u("#ckyDetailCategory" + e, "cky-accordion-active", !1), k(`#ckyDetailCategory${e} .cky-accordion-btn`, "false")
                            })) : k(o, "false")
                        })
                    })
                }(),
                function() {
                    for (const {
                            slug: e
                        }
                        of n._categories) a("detail-category-title", () => document.getElementById("ckyCategory" + e).classList.toggle("cky-tab-active"));
                    a("=settings-button", () => O("settings-button")), a("=detail-close", () => E()), a("=optout-cancel-button", () => E()), a("=close-button", () => (c._ckySetInStore("action", "yes"), void g())), a("=donotsell-button", () => O("donotsell-button")), a("=reject-button", H("reject")), a("=accept-button", H("all")), a("=detail-accept-button", H("all")), a("=detail-save-button", H()), a("=detail-category-preview-save-button", H()), a("=optout-confirm-button", H()), a("=detail-reject-button", H("reject")), a("=revisit-consent", () => _revisitCkyConsent()), a("=optout-close", () => E())
                }(),
                function() {
                    const e = n._bannerConfig.config.optOption.toggle,
                        t = e.states.active.styles["background-color"],
                        o = e.states.inactive.styles["background-color"];
                    u("=optout-option", "cky-disabled", !1);
                    const r = n._shortCodes.find(e => "cky_optout_toggle_label" === e.key),
                        s = n._shortCodes.find(e => "cky_optout_option_title" === e.key),
                        i = r.content.replace("[cky_optout_option_title]", s.content),
                        l = "yes" === c._ckyGetFromStore("consent");
                    ! function(e, t, {
                        checked: n,
                        disabled: o,
                        addListeners: c
                    }, {
                        activeColor: r,
                        inactiveColor: s
                    }, i = !1) {
                        if (!e) return;
                        i && c && a("=optout-option-title", () => e.click());
                        if (e.checked = n, e.disabled = o, e.style.backgroundColor = n ? r : s, F(e, n, t, i), !c) return;
                        e.addEventListener("change", ({
                            currentTarget: n
                        }) => {
                            const o = n.checked;
                            n.style.backgroundColor = o ? r : s, F(e, o, t, i)
                        })
                    }(document.getElementById("ckyCCPAOptOut"), i, {
                        checked: l,
                        disabled: !1,
                        addListeners: !0
                    }, {
                        activeColor: t,
                        inactiveColor: o
                    }, !0)
                }(),
                function() {
                    const e = n._bannerConfig.config.videoPlaceholder.status,
                        t = n._bannerConfig.config.videoPlaceholder.styles;
                    if (!e) return;
                    if (!e) return;
                    const o = document.querySelectorAll('[data-cky-tag="placeholder-title"]');
                    if (o.length < 1) return;
                    Array.from(o).forEach(e => {
                        e.style.display = "block", e.addEventListener("click", () => {
                            c._ckyGetFromStore("action") && _revisitCkyConsent()
                        });
                        for (const n in t) t[n] && (e.style[n] = t[n])
                    })
                }(),
                function() {
                    const e = n._shortCodes.find(e => "cky_readmore" === e.key);
                    if (!e.status) return;
                    const t = e.content,
                        o = n._bannerConfig.config.readMore.styles,
                        c = document.querySelector('[data-cky-tag="description"]');
                    if (!c) return;
                    if (c.childNodes.length > 1) {
                        const e = document.querySelector('[data-cky-tag="description"] p:last-child');
                        e && e.insertAdjacentHTML("beforeend", "&nbsp;" + t)
                    } else c.insertAdjacentHTML("beforeend", "&nbsp;" + t);
                    const r = document.querySelectorAll('[data-cky-tag="readmore-button"]');
                    if (r.length < 1) return;
                    Array.from(r).forEach(e => {
                        for (const t in o) o[t] && (e.style[t] = o[t])
                    })
                }(),
                function() {
                    const e = document.getElementById("cky-style-inline");
                    e && e.remove()
                }(),
                function() {
                    const e = i("notice");
                    if (!e) return !1;
                    const t = e.closest(".cky-consent-container");
                    if (!t) return !1;
                    t.setAttribute("aria-label", "We value your privacy"), t.setAttribute("role", "region");
                    const o = n._bannerConfig.settings.type;
                    let c = n._bannerConfig.settings.position,
                        r = o;
                    "popup" === r && (c = "center");
                    r = "pushdown" === C() ? "classic" : r;
                    const s = `cky-${r}-${c}`;
                    t.classList.add(s);
                    const a = i("revisit-consent");
                    if (!a) return !1;
                    const u = "cky-revisit-" + n._bannerConfig.config.revisitConsent.position;
                    a.classList.add(u)
                }(),
                function() {
                    if (!n._rtl) return;
                    ["notice", "detail", "optout-popup", "revisit-consent", "video-placeholder"].forEach((function(e) {
                        i(e) && i(e).classList.add("cky-rtl")
                    }))
                }(), ["detail-powered-by", "optout-powered-by"].map(e => {
                    const t = document.querySelector(`[data-cky-tag="${e}"]`);
                    t && (t.style.display = "flex", t.style.justifyContent = "flex-end", t.style.alignItems = "center")
                }),
                function() {
                    const e = _(),
                        t = h();
                    if ("classic" === t) return;
                    if ("popup" === t) {
                        const [e, t] = D("notice");
                        M(e, t, !0), M(t, e)
                    }
                    const [n, o] = D("ccpa" === e ? "optout-popup" : "detail");
                    M(n, o, !0), M(o, n)
                }(),
                function() {
                    const e = "ccpa" === _() ? i("optout-popup") : i("detail");
                    if (!e) return !1;
                    const t = e.closest(".cky-modal");
                    if (!t) return !1;
                    if ("pushdown" !== C() && "popup" !== C()) {
                        const e = "cky-" + n._bannerConfig.settings.preferenceCenterType;
                        t.classList.add(e)
                    }
                    const o = t.querySelector(".cky-preference-center");
                    if (o) {
                        o.setAttribute("role", "dialog"), o.setAttribute("aria-modal", "true");
                        const e = "ccpa" === _() ? "Opt-out Preferences" : "Customise Consent Preferences";
                        o.setAttribute("aria-label", e)
                    }
                }()
        }(),
        function() {
            const e = _(),
                t = n._shortCodes.find(e => "cky_show_desc" === e.key),
                o = n._shortCodes.find(e => "cky_hide_desc" === e.key);
            if (!t || !o) return;
            const c = o.content,
                r = t.content,
                s = window.innerWidth < 376 ? 150 : 300,
                i = document.querySelector(`[data-cky-tag="${"gdpr"===e?"detail":"optout"}-description"]`);
            if (i.textContent.length < s) return;
            const u = i.innerHTML,
                l = (new DOMParser).parseFromString(u, "text/html").querySelectorAll("body > p");
            if (l.length <= 1) return;
            let d = "";
            for (let e = 0; e < l.length; e++) {
                if (e === l.length - 1) return;
                const t = l[e];
                if (`${d}${t.outerHTML}`.length > s && t.insertAdjacentHTML("beforeend", "...&nbsp;" + r), d = `${d}${t.outerHTML}`, d.length > s) break
            }

            function y() {
                i.innerHTML = `${u}${c}`, a("=hide-desc-button", f)
            }

            function f() {
                i.innerHTML = d, a("=show-desc-button", y)
            }
            f()
        }(), !c._ckyGetFromStore("action") || function() {
            let e = new URL(document.location).searchParams;
            return e.get("cky_preview") && "true" === e.get("cky_preview")
        }() ? (w(), function() {
            const e = _();
            c._ckySetInStore("consent", "no");
            const t = J(),
                o = {
                    accepted: [],
                    rejected: []
                };
            let r = "yes";
            for (const s of n._categories)("gdpr" === e && !s.isNecessary && !s.defaultConsent[e] || "ccpa" === e && t && !s.defaultConsent.ccpa) && (r = "no"), "no" === r ? o.rejected.push(s.slug) : o.accepted.push(s.slug), c._ckySetInStore("" + s.slug, r);
            U(), f(o)
        }(), function() {
            if (c._ckyGetFromStore("consentid")) return;
            const e = c._ckyRandomString(32);
            c._ckySetInStore("consentid", e), n._resetConsentID = !0
        }()) : g()
    }

    function k(e, t = null) {
        const n = y(e);
        if (!n) return;
        if (n.classList.contains("cky-accordion-btn")) {
            const e = n.closest(".cky-accordion");
            if (e) {
                const t = e.querySelector(".cky-accordion-body");
                if (t) {
                    let o = t.id;
                    o || (o = `ckyDetailCategory${e.id.replace("ckyDetailCategory","")}Body`, t.id = o), n.setAttribute("aria-controls", o)
                }
            }
        }
        const o = n.getAttribute("aria-expanded"),
            c = t || ("true" === o ? "false" : "true");
        n.setAttribute("aria-expanded", c)
    }
    async function m() {
        try {
            p(),
                function() {
                    for (const e of n._categories) "yes" !== c._ckyGetFromStore(e.slug) && N(e)
                }(), document.querySelector("body").addEventListener("click", e => {
                    const t = ".cky-banner-element, .cky-banner-element *";
                    (e.target.matches ? e.target.matches(t) : e.target.msMatchesSelector(t)) && _revisitCkyConsent()
                })
        } catch (e) {
            console.error(e)
        }
    }
    var b;

    function _() {
        return n._bannerConfig.settings.applicableLaw
    }

    function h() {
        return n._bannerConfig.settings.type
    }

    function C() {
        return "classic" === h() ? "pushdown" : n._bannerConfig.settings.preferenceCenterType
    }

    function v() {
        const e = i("notice"),
            t = e && e.closest(".cky-consent-container") || !1;
        return t && t || !1
    }

    function S() {
        const e = v();
        e && e.classList.add("cky-hide")
    }

    function w() {
        const e = v();
        e && e.classList.remove("cky-hide")
    }

    function L() {
        const e = document.querySelector(".cky-overlay");
        e && e.classList.add("cky-hide")
    }

    function A() {
        const e = document.querySelector(".cky-overlay");
        e && e.classList.remove("cky-hide")
    }

    function $() {
        if ("classic" === h()) return v();
        let e = "ccpa" === _() ? i("optout-popup") : i("detail");
        return e && e.closest(".cky-modal") || !1
    }

    function E() {
        const e = $();
        e && e.classList.remove(j()), "classic" !== h() ? (L(), c._ckyGetFromStore("action") || w()) : (k("=settings-button", "false"), u("=notice", "cky-consent-bar-expand")), c._ckyGetFromStore("action") && I();
        const t = n._preferenceOriginTag;
        t && X(t)
    }

    function T() {
        const e = $();
        if (e && e.classList.add(j()), e) {
            const t = e.querySelector(".cky-preference-center");
            if (t) {
                t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true");
                const e = "ccpa" === _() ? "Opt-out Preferences" : "Customise Consent Preferences";
                t.setAttribute("aria-label", e)
            }
        }
        "classic" !== h() ? (A(), S()) : (k("=settings-button"), function() {
            d("add", ...arguments)
        }("=notice", "cky-consent-bar-expand"))
    }

    function x() {
        const e = $();
        if (!e) return;
        e.classList.toggle(j()), "pushdown" !== C() && function() {
            const e = document.querySelector(".cky-overlay");
            e && e.classList.toggle("cky-hide")
        }();
        const t = e.classList.contains(j());
        if (e.classList.toggle(j()), "classic" === h()) {
            const t = e.querySelector(".cky-preference-center");
            if (t) {
                t.setAttribute("role", "dialog"), t.setAttribute("aria-modal", "true");
                const e = "ccpa" === _() ? "Opt-out Preferences" : "Customise Consent Preferences";
                t.setAttribute("aria-label", e)
            }
            k("=settings-button"), l("=notice", "cky-consent-bar-expand")
        } else t ? (L(), c._ckyGetFromStore("action") || w()) : (A(), S());
        c._ckyGetFromStore("action") && I();
        const o = n._preferenceOriginTag;
        o && X(o)
    }

    function j() {
        return "pushdown" === C() ? "cky-consent-bar-expand" : "cky-modal-open"
    }

    function q() {
        const e = i("revisit-consent");
        return e && e || !1
    }

    function I() {
        const e = q();
        e && e.classList.remove("cky-revisit-hide")
    }

    function O(e = !1) {
        n._preferenceOriginTag = e, "classic" === h() ? (x(), k("=settings-button")) : T()
    }

    function D(e) {
        const t = document.querySelector(`[data-cky-tag="${e}"]`);
        if (!t) return [];
        const n = Array.from(t.querySelectorAll('a:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])')).filter(e => "none" !== e.style.display);
        return n.length <= 0 ? [] : [n[0], n[n.length - 1]]
    }

    function M(e, t, n = !1) {
        e && t && e.addEventListener("keydown", e => {
            9 !== e.which || n && !e.shiftKey || !n && e.shiftKey || (e.preventDefault(), t.focus())
        })
    }

    function N({
        cookies: e
    }) {
        const t = c._ckyGetCookieMap();
        for (const {
                cookieID: n,
                domain: o
            }
            of e) t[n] && [o, ""].map(e => c._ckySetCookie(n, "", 0, e))
    }

    function P(e = !1) {
        for (const t of n._categories) {
            const o = c._ckyGetFromStore(t.slug);
            G(t, "yes" === o || !o && t.defaultConsent[_()] || t.isNecessary, t.isNecessary, n._shortCodes.find(e => "cky_category_toggle_label" === e.key).content.replace("[cky_preference_{{category_slug}}_title]", t.name), e), B(t)
        }
    }

    function G(e, t, o, c, r = !1) {
        const s = n._bannerConfig.config.preferenceCenter.toggle,
            i = s.states.active.styles["background-color"],
            a = s.states.inactive.styles["background-color"];
        ["ckyCategoryDirect", "ckySwitch"].map(s => {
            const u = document.getElementById(`${s}${e.slug}`);
            u && (! function(e, t = {}, o = !1) {
                if (o) return;
                "detail-category-toggle" === e.parentElement.getAttribute("data-cky-tag") ? function(e, t) {
                    let o = e.closest(".cky-accordion-item");
                    if (!o) return;
                    const c = o.querySelector(".cky-switch");
                    t.isNecessary ? c && c.remove() : ("classic" === h() && n._bannerConfig.config.categoryPreview.status || t.cookies && 0 === t.cookies.length) && c && c.remove()
                }(e, t) : "detail-category-preview-toggle" === e.parentElement.getAttribute("data-cky-tag") && function(e, t) {
                    t.cookies && 0 === t.cookies.length && !t.isNecessary && e.parentElement.parentElement.remove()
                }(e, t);
                if (!t.isNecessary) {
                    const e = t.name,
                        n = document.querySelector(`[data-cky-tag="detail-category-title"][aria-label="${e}"]`);
                    if (n) {
                        const e = n.closest(".cky-accordion-item").querySelector(".cky-always-active");
                        e && e.remove()
                    }
                }
            }(u, e, r), u.checked = t, u.disabled = o, u.style.backgroundColor = t ? i : a, F(u, t, c), r || u.addEventListener("change", ({
                currentTarget: e
            }) => {
                const t = e.checked;
                e.style.backgroundColor = t ? i : a, F(u, t, c)
            }))
        })
    }

    function B(e) {
        if (!1 === n._bannerConfig.config.auditTable.status) {
            const t = document.querySelector(`#ckyDetailCategory${e.slug} [data-cky-tag="audit-table"]`);
            t && t.remove();
            const n = document.querySelector(`#ckyDetailCategory${e.slug} .cky-accordion-chevron`);
            n && n.classList.add("cky-accordion-chevron-hide")
        }
    }

    function F(e, t, o, c = !1) {
        if (!e) return;
        const r = t ? "disable" : "enable",
            s = `cky_${r}_${c?"optout":"category"}_label`,
            i = n._shortCodes.find(e => e.key === s);
        if (!i) return;
        const a = o.replace(/{{status}}/g, r).replace(`[${s}]`, i.content);
        e.setAttribute("aria-label", a)
    }

    function H(e = "custom") {
        return () => {
            ! function(e = "all") {
                const t = _(),
                    o = J();
                c._ckySetInStore("action", "yes"), "gdpr" === t ? c._ckySetInStore("consent", "reject" === e ? "no" : "yes") : c._ckySetInStore("consent", o ? "yes" : "no");
                const r = {
                    accepted: [],
                    rejected: []
                };
                for (const s of n._categories) {
                    let n = "no";
                    n = "gdpr" === t ? s.isNecessary || "reject" !== e && ("custom" !== e || J(s.slug)) ? "yes" : "no" : o && !s.defaultConsent.ccpa ? "no" : "yes", c._ckySetInStore("" + s.slug, n), "no" === n ? (r.rejected.push(s.slug), N(s)) : r.accepted.push(s.slug)
                }
                U(), f(r)
            }(e), g(), E(),
                function() {
                    "gdpr" === _() && P(!0);
                    !0 === n._bannerConfig.behaviours.reloadBannerOnAccept && window.location.reload()
                }()
        }
    } ["consentid", "consent", "action"].concat(n._categories.map(({
        slug: e
    }) => e)).map(e => c._ckyConsentStore.set(e, s[e] || "")), c._ckyGetCookie = function(e) {
        const t = new RegExp(e + "=([^;]+)").exec(document.cookie);
        return t && Array.isArray(t) && t[1] ? unescape(t[1]) : null
    }, c._ckySetCookie = function(e, t, o = 0, c = n._rootDomain) {
        const r = new Date;
        c && (c = "domain=" + c);
        const s = 0 === o ? 0 : r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        document.cookie = `${e}=${t}; expires=${new Date(s).toUTCString()}; path=/;${c}; SameSite=Strict;`
    }, _revisitCkyConsent = function() {
        "classic" === h() && w(), O(),
            function(e = !1) {
                const t = q();
                t && (!0 === e ? _ckyRevisitHide() : t.classList.toggle("cky-revisit-hide"))
            }()
    }, c._ckyRandomString = function(e, t = !0) {
        const n = (t ? "0123456789" : "") + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz",
            o = [];
        for (let t = 0; t < e; t++) o.push(n[Math.floor(Math.random() * n.length)]);
        return t ? btoa(o.join("")).replace(/\=+$/, "") : o.join("")
    }, b = async function() {
        try {
            await m()
        } catch (e) {
            console.error(e)
        }
    }, "undefined" != typeof document && ("complete" !== document.readyState && "interactive" !== document.readyState ? document.addEventListener("DOMContentLoaded", b) : b());
    const R = document.createElement;

    function U() {
        if (1 === navigator.doNotTrack) return;
        const e = c._ckyGetFromStore("consent");
        ("gdpr" !== _() || e && "yes" === e) && (n._backupNodes = n._backupNodes.filter(({
            position: e,
            node: t,
            uniqueID: n
        }) => {
            try {
                if (Y(t.src)) return !0;
                if ("script" === t.nodeName.toLowerCase()) {
                    const n = document.createElement("script");
                    n.src = t.src, n.type = "text/javascript", document[e].appendChild(n)
                } else {
                    const e = document.getElementById(n);
                    if (!e) return !1;
                    const o = document.createElement("iframe");
                    o.src = t.src, o.width = e.offsetWidth, o.height = e.offsetHeight, e.parentNode.insertBefore(o, e), e.parentNode.removeChild(e)
                }
                return !1
            } catch (e) {
                return console.error(e), !1
            }
        }))
    }

    function W(e, t) {
        const o = e.hasAttribute("data-cookieyes") && e.getAttribute("data-cookieyes");
        if (!o) return;
        const c = o.replace("cookieyes-", "");
        for (const e of n._categories)
            if (e.isNecessary && e.slug === c) return;
        const r = n._providersToBlock.find(({
            re: e
        }) => e === t);
        r ? r.isOverridden ? r.categories.includes(c) || r.categories.push(c) : (r.categories = [c], r.isOverridden = !0) : n._providersToBlock.push({
            re: t,
            categories: [c],
            fullPath: !1
        })
    }
    document.createElement = (...e) => {
        const t = R.call(document, ...e);
        if ("script" !== t.nodeName.toLowerCase()) return t;
        const n = t.setAttribute.bind(t);
        return Object.defineProperties(t, {
            src: {
                get: function() {
                    return t.getAttribute("src")
                },
                set: function(e) {
                    return z(t, e) && n("type", "javascript/blocked"), n("src", e), !0
                }
            },
            type: {
                get: function() {
                    return t.getAttribute("type")
                },
                set: function(e) {
                    return e = z(t) ? "javascript/blocked" : e, n("type", e), !0
                }
            }
        }), t.setAttribute = (e, o) => {
            if ("type" === e || "src" === e) return t[e] = o;
            n(e, o), "data-cookieyes" !== e || z(t) || n("type", "text/javascript")
        }, t
    };
    const K = new MutationObserver((function(e) {
        for (const {
                addedNodes: t
            }
            of e)
            for (const e of t)
                if (e.src && e.nodeName && ["script", "iframe"].includes(e.nodeName.toLowerCase())) try {
                    const t = e.src.startsWith("//") ? `${window.location.protocol}${e.src}` : e.src,
                        {
                            hostname: o,
                            pathname: r
                        } = new URL(t),
                        s = `${o}${r}`.replace(/^www./, "");
                    if (W(e, s), !Y(s)) continue;
                    const i = c._ckyRandomString(8, !1);
                    if ("iframe" === e.nodeName.toLowerCase()) V(e, i);
                    else {
                        e.type = "javascript/blocked";
                        const t = function(n) {
                            n.preventDefault(), e.removeEventListener("beforescriptexecute", t)
                        };
                        e.addEventListener("beforescriptexecute", t)
                    }
                    const a = document.head.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? "head" : "body";
                    e.remove(), n._backupNodes.push({
                        position: a,
                        node: e.cloneNode(),
                        uniqueID: i
                    })
                } catch (e) {}
    }));

    function Q(e) {
        const t = c._ckyGetFromStore(e);
        return "no" === t || !t && n._categories.some(t => t.slug === e && !t.isNecessary)
    }

    function Y(e) {
        const t = n._providersToBlock.find(({
            re: t
        }) => {
            return new RegExp((n = t, n.replace(/[.*+?^${}()[\]\\]/g, "\\$&"))).test(e);
            var n
        });
        return t && t.categories.some(e => Q(e))
    }

    function z(e, t) {
        return e.hasAttribute("data-cookieyes") && Q(e.getAttribute("data-cookieyes").replace("cookieyes-", "")) || Y(t || e.src)
    }

    function J(e = "") {
        return (e ? ["ckySwitch", "ckyCategoryDirect"] : ["ckyCCPAOptOut"]).some(t => {
            const n = document.getElementById(`${t}${e}`);
            return n && n.checked
        })
    }

    function V(e, t) {
        const o = n._shortCodes.find(e => "cky_video_placeholder" === e.key).content,
            {
                offsetWidth: c,
                offsetHeight: r
            } = e;
        if (0 === c || 0 === r) return;
        e.insertAdjacentHTML("beforebegin", ("" + o).replace("[UNIQUEID]", t));
        const s = document.getElementById(t);
        s.style.width = c + "px", s.style.height = r + "px";
        const i = document.querySelector(`#${t} .video-placeholder-text-normal`);
        i.style.display = "none";
        const a = function(e) {
            const t = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
            return !!(t && Array.isArray(t) && t[2] && 11 === t[2].length) && t[2]
        }(e.src);
        a && (s.classList.replace("video-placeholder-normal", "video-placeholder-youtube"), s.style.backgroundImage = `linear-gradient(rgba(76,72,72,.7),rgba(76,72,72,.7)),url('https://img.youtube.com/vi/${a}/maxresdefault.jpg')`, i.classList.replace("video-placeholder-text-normal", "video-placeholder-text-youtube"))
    }

    function X(e) {
        const t = i(e);
        t && t.focus()
    }
    K.observe(document.documentElement, {
        childList: !0,
        subtree: !0
    }), window.revisitCkyConsent = () => _revisitCkyConsent(), window.getCkyConsent = function() {
        const e = {
            activeLaw: "",
            categories: {},
            isUserActionCompleted: !1,
            consentID: "",
            languageCode: ""
        };
        try {
            e.activeLaw = _(), n._categories.forEach(t => {
                e.categories[t.slug] = "yes" === c._ckyGetFromStore(t.slug)
            }), e.isUserActionCompleted = "yes" === c._ckyGetFromStore("action"), e.consentID = c._ckyGetFromStore("consentid") || "", e.languageCode = n._language || ""
        } catch (e) {}
        return e
    }
}]); /*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DOMPurify = t()
}(this, (function() {
    "use strict";

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e(t)
    }

    function t(e, n) {
        return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, t(e, n)
    }

    function n(e, r, o) {
        return n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function(e, n, r) {
            var o = [null];
            o.push.apply(o, n);
            var a = new(Function.bind.apply(e, o));
            return r && t(a, r.prototype), a
        }, n.apply(null, arguments)
    }

    function r(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = Object.hasOwnProperty,
        i = Object.setPrototypeOf,
        l = Object.isFrozen,
        c = Object.getPrototypeOf,
        u = Object.getOwnPropertyDescriptor,
        s = Object.freeze,
        m = Object.seal,
        f = Object.create,
        p = "undefined" != typeof Reflect && Reflect,
        d = p.apply,
        h = p.construct;
    d || (d = function(e, t, n) {
        return e.apply(t, n)
    }), s || (s = function(e) {
        return e
    }), m || (m = function(e) {
        return e
    }), h || (h = function(e, t) {
        return n(e, r(t))
    });
    var g, y = O(Array.prototype.forEach),
        b = O(Array.prototype.pop),
        T = O(Array.prototype.push),
        v = O(String.prototype.toLowerCase),
        N = O(String.prototype.toString),
        E = O(String.prototype.match),
        A = O(String.prototype.replace),
        S = O(String.prototype.indexOf),
        _ = O(String.prototype.trim),
        w = O(RegExp.prototype.test),
        x = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return h(g, t)
        });

    function O(e) {
        return function(t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return d(e, t, r)
        }
    }

    function k(e, t, n) {
        var r;
        n = null !== (r = n) && void 0 !== r ? r : v, i && i(e, null);
        for (var o = t.length; o--;) {
            var a = t[o];
            if ("string" == typeof a) {
                var c = n(a);
                c !== a && (l(t) || (t[o] = c), a = c)
            }
            e[a] = !0
        }
        return e
    }

    function L(e) {
        var t, n = f(null);
        for (t in e) !0 === d(a, e, [t]) && (n[t] = e[t]);
        return n
    }

    function C(e, t) {
        for (; null !== e;) {
            var n = u(e, t);
            if (n) {
                if (n.get) return O(n.get);
                if ("function" == typeof n.value) return O(n.value)
            }
            e = c(e)
        }
        return function(e) {
            return console.warn("fallback value for", e), null
        }
    }
    var D = s(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
        R = s(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
        M = s(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
        I = s(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
        F = s(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
        U = s(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
        H = s(["#text"]),
        z = s(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
        P = s(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
        B = s(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
        j = s(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        G = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        W = m(/<%[\w\W]*|[\w\W]*%>/gm),
        q = m(/\${[\w\W]*}/gm),
        $ = m(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        Y = m(/^aria-[\-\w]+$/),
        K = m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        V = m(/^(?:\w+script|data):/i),
        X = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Z = m(/^html$/i),
        J = m(/^[a-z][.\w]*(-[.\w]+)+$/i),
        Q = function() {
            return "undefined" == typeof window ? null : window
        };
    var ee = function t() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            o = function(e) {
                return t(e)
            };
        if (o.version = "2.5.8", o.removed = [], !n || !n.document || 9 !== n.document.nodeType) return o.isSupported = !1, o;
        var a = n.document,
            i = n.document,
            l = n.DocumentFragment,
            c = n.HTMLTemplateElement,
            u = n.Node,
            m = n.Element,
            f = n.NodeFilter,
            p = n.NamedNodeMap,
            d = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
            h = n.HTMLFormElement,
            g = n.DOMParser,
            O = n.trustedTypes,
            ee = m.prototype,
            te = C(ee, "cloneNode"),
            ne = C(ee, "nextSibling"),
            re = C(ee, "childNodes"),
            oe = C(ee, "parentNode");
        if ("function" == typeof c) {
            var ae = i.createElement("template");
            ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument)
        }
        var ie = function(t, n) {
                if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                var r = null,
                    o = "data-tt-policy-suffix";
                n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                var a = "dompurify" + (r ? "#" + r : "");
                try {
                    return t.createPolicy(a, {
                        createHTML: function(e) {
                            return e
                        },
                        createScriptURL: function(e) {
                            return e
                        }
                    })
                } catch (e) {
                    return console.warn("TrustedTypes policy " + a + " could not be created."), null
                }
            }(O, a),
            le = ie ? ie.createHTML("") : "",
            ce = i,
            ue = ce.implementation,
            se = ce.createNodeIterator,
            me = ce.createDocumentFragment,
            fe = ce.getElementsByTagName,
            pe = a.importNode,
            de = {};
        try {
            de = L(i).documentMode ? i.documentMode : {}
        } catch (e) {}
        var he = {};
        o.isSupported = "function" == typeof oe && ue && void 0 !== ue.createHTMLDocument && 9 !== de;
        var ge, ye, be = G,
            Te = W,
            ve = q,
            Ne = $,
            Ee = Y,
            Ae = V,
            Se = X,
            _e = J,
            we = K,
            xe = null,
            Oe = k({}, [].concat(r(D), r(R), r(M), r(F), r(H))),
            ke = null,
            Le = k({}, [].concat(r(z), r(P), r(B), r(j))),
            Ce = Object.seal(Object.create(null, {
                tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1
                }
            })),
            De = null,
            Re = null,
            Me = !0,
            Ie = !0,
            Fe = !1,
            Ue = !0,
            He = !1,
            ze = !0,
            Pe = !1,
            Be = !1,
            je = !1,
            Ge = !1,
            We = !1,
            qe = !1,
            $e = !0,
            Ye = !1,
            Ke = !0,
            Ve = !1,
            Xe = {},
            Ze = null,
            Je = k({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = k({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            nt = k({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            rt = "http://www.w3.org/1998/Math/MathML",
            ot = "http://www.w3.org/2000/svg",
            at = "http://www.w3.org/1999/xhtml",
            it = at,
            lt = !1,
            ct = null,
            ut = k({}, [rt, ot, at], N),
            st = ["application/xhtml+xml", "text/html"],
            mt = null,
            ft = i.createElement("form"),
            pt = function(e) {
                return e instanceof RegExp || e instanceof Function
            },
            dt = function(t) {
                mt && mt === t || (t && "object" === e(t) || (t = {}), t = L(t), ge = ge = -1 === st.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === ge ? N : v, xe = "ALLOWED_TAGS" in t ? k({}, t.ALLOWED_TAGS, ye) : Oe, ke = "ALLOWED_ATTR" in t ? k({}, t.ALLOWED_ATTR, ye) : Le, ct = "ALLOWED_NAMESPACES" in t ? k({}, t.ALLOWED_NAMESPACES, N) : ut, tt = "ADD_URI_SAFE_ATTR" in t ? k(L(nt), t.ADD_URI_SAFE_ATTR, ye) : nt, Qe = "ADD_DATA_URI_TAGS" in t ? k(L(et), t.ADD_DATA_URI_TAGS, ye) : et, Ze = "FORBID_CONTENTS" in t ? k({}, t.FORBID_CONTENTS, ye) : Je, De = "FORBID_TAGS" in t ? k({}, t.FORBID_TAGS, ye) : {}, Re = "FORBID_ATTR" in t ? k({}, t.FORBID_ATTR, ye) : {}, Xe = "USE_PROFILES" in t && t.USE_PROFILES, Me = !1 !== t.ALLOW_ARIA_ATTR, Ie = !1 !== t.ALLOW_DATA_ATTR, Fe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Ue = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, He = t.SAFE_FOR_TEMPLATES || !1, ze = !1 !== t.SAFE_FOR_XML, Pe = t.WHOLE_DOCUMENT || !1, Ge = t.RETURN_DOM || !1, We = t.RETURN_DOM_FRAGMENT || !1, qe = t.RETURN_TRUSTED_TYPE || !1, je = t.FORCE_BODY || !1, $e = !1 !== t.SANITIZE_DOM, Ye = t.SANITIZE_NAMED_PROPS || !1, Ke = !1 !== t.KEEP_CONTENT, Ve = t.IN_PLACE || !1, we = t.ALLOWED_URI_REGEXP || we, it = t.NAMESPACE || at, Ce = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ce.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), He && (Ie = !1), We && (Ge = !0), Xe && (xe = k({}, r(H)), ke = [], !0 === Xe.html && (k(xe, D), k(ke, z)), !0 === Xe.svg && (k(xe, R), k(ke, P), k(ke, j)), !0 === Xe.svgFilters && (k(xe, M), k(ke, P), k(ke, j)), !0 === Xe.mathMl && (k(xe, F), k(ke, B), k(ke, j))), t.ADD_TAGS && (xe === Oe && (xe = L(xe)), k(xe, t.ADD_TAGS, ye)), t.ADD_ATTR && (ke === Le && (ke = L(ke)), k(ke, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && k(tt, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ze === Je && (Ze = L(Ze)), k(Ze, t.FORBID_CONTENTS, ye)), Ke && (xe["#text"] = !0), Pe && k(xe, ["html", "head", "body"]), xe.table && (k(xe, ["tbody"]), delete De.tbody), s && s(t), mt = t)
            },
            ht = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = k({}, ["annotation-xml"]),
            yt = k({}, ["title", "style", "font", "a", "script"]),
            bt = k({}, R);
        k(bt, M), k(bt, I);
        var Tt = k({}, F);
        k(Tt, U);
        var vt = function(e) {
                T(o.removed, {
                    element: e
                });
                try {
                    e.parentNode.removeChild(e)
                } catch (t) {
                    try {
                        e.outerHTML = le
                    } catch (t) {
                        e.remove()
                    }
                }
            },
            Nt = function(e, t) {
                try {
                    T(o.removed, {
                        attribute: t.getAttributeNode(e),
                        from: t
                    })
                } catch (e) {
                    T(o.removed, {
                        attribute: null,
                        from: t
                    })
                }
                if (t.removeAttribute(e), "is" === e && !ke[e])
                    if (Ge || We) try {
                        vt(t)
                    } catch (e) {} else try {
                        t.setAttribute(e, "")
                    } catch (e) {}
            },
            Et = function(e) {
                var t, n;
                if (je) e = "<remove></remove>" + e;
                else {
                    var r = E(e, /^[\r\n\t ]+/);
                    n = r && r[0]
                }
                "application/xhtml+xml" === ge && it === at && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                var o = ie ? ie.createHTML(e) : e;
                if (it === at) try {
                    t = (new g).parseFromString(o, ge)
                } catch (e) {}
                if (!t || !t.documentElement) {
                    t = ue.createDocument(it, "template", null);
                    try {
                        t.documentElement.innerHTML = lt ? le : o
                    } catch (e) {}
                }
                var a = t.body || t.documentElement;
                return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), it === at ? fe.call(t, Pe ? "html" : "body")[0] : Pe ? t.documentElement : a
            },
            At = function(e) {
                return se.call(e.ownerDocument || e, e, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null, !1)
            },
            St = function(e) {
                return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof d) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            _t = function(t) {
                return "object" === e(u) ? t instanceof u : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            wt = function(e, t, n) {
                he[e] && y(he[e], (function(e) {
                    e.call(o, t, n, mt)
                }))
            },
            xt = function(e) {
                var t;
                if (wt("beforeSanitizeElements", e, null), St(e)) return vt(e), !0;
                if (w(/[\u0080-\uFFFF]/, e.nodeName)) return vt(e), !0;
                var n = ye(e.nodeName);
                if (wt("uponSanitizeElement", e, {
                        tagName: n,
                        allowedTags: xe
                    }), e.hasChildNodes() && !_t(e.firstElementChild) && (!_t(e.content) || !_t(e.content.firstElementChild)) && w(/<[/\w]/g, e.innerHTML) && w(/<[/\w]/g, e.textContent)) return vt(e), !0;
                if ("select" === n && w(/<template/i, e.innerHTML)) return vt(e), !0;
                if (7 === e.nodeType) return vt(e), !0;
                if (ze && 8 === e.nodeType && w(/<[/\w]/g, e.data)) return vt(e), !0;
                if (!xe[n] || De[n]) {
                    if (!De[n] && kt(n)) {
                        if (Ce.tagNameCheck instanceof RegExp && w(Ce.tagNameCheck, n)) return !1;
                        if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)) return !1
                    }
                    if (Ke && !Ze[n]) {
                        var r = oe(e) || e.parentNode,
                            a = re(e) || e.childNodes;
                        if (a && r)
                            for (var i = a.length - 1; i >= 0; --i) {
                                var l = te(a[i], !0);
                                l.__removalCount = (e.__removalCount || 0) + 1, r.insertBefore(l, ne(e))
                            }
                    }
                    return vt(e), !0
                }
                return e instanceof m && ! function(e) {
                    var t = oe(e);
                    t && t.tagName || (t = {
                        namespaceURI: it,
                        tagName: "template"
                    });
                    var n = v(e.tagName),
                        r = v(t.tagName);
                    return !!ct[e.namespaceURI] && (e.namespaceURI === ot ? t.namespaceURI === at ? "svg" === n : t.namespaceURI === rt ? "svg" === n && ("annotation-xml" === r || ht[r]) : Boolean(bt[n]) : e.namespaceURI === rt ? t.namespaceURI === at ? "math" === n : t.namespaceURI === ot ? "math" === n && gt[r] : Boolean(Tt[n]) : e.namespaceURI === at ? !(t.namespaceURI === ot && !gt[r]) && !(t.namespaceURI === rt && !ht[r]) && !Tt[n] && (yt[n] || !bt[n]) : !("application/xhtml+xml" !== ge || !ct[e.namespaceURI]))
                }(e) ? (vt(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !w(/<\/no(script|embed|frames)/i, e.innerHTML) ? (He && 3 === e.nodeType && (t = e.textContent, t = A(t, be, " "), t = A(t, Te, " "), t = A(t, ve, " "), e.textContent !== t && (T(o.removed, {
                    element: e.cloneNode()
                }), e.textContent = t)), wt("afterSanitizeElements", e, null), !1) : (vt(e), !0)
            },
            Ot = function(e, t, n) {
                if ($e && ("id" === t || "name" === t) && (n in i || n in ft)) return !1;
                if (Ie && !Re[t] && w(Ne, t));
                else if (Me && w(Ee, t));
                else if (!ke[t] || Re[t]) {
                    if (!(kt(e) && (Ce.tagNameCheck instanceof RegExp && w(Ce.tagNameCheck, e) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(e)) && (Ce.attributeNameCheck instanceof RegExp && w(Ce.attributeNameCheck, t) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(t)) || "is" === t && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && w(Ce.tagNameCheck, n) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(n)))) return !1
                } else if (tt[t]);
                else if (w(we, A(n, Se, "")));
                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== S(n, "data:") || !Qe[e]) {
                    if (Fe && !w(Ae, A(n, Se, "")));
                    else if (n) return !1
                }
                return !0
            },
            kt = function(e) {
                return "annotation-xml" !== e && E(e, _e)
            },
            Lt = function(t) {
                var n, r, a, i;
                wt("beforeSanitizeAttributes", t, null);
                var l = t.attributes;
                if (l && !St(t)) {
                    var c = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: ke
                    };
                    for (i = l.length; i--;) {
                        var u = n = l[i],
                            s = u.name,
                            m = u.namespaceURI;
                        if (r = "value" === s ? n.value : _(n.value), a = ye(s), c.attrName = a, c.attrValue = r, c.keepAttr = !0, c.forceKeepAttr = void 0, wt("uponSanitizeAttribute", t, c), r = c.attrValue, !c.forceKeepAttr && (Nt(s, t), c.keepAttr))
                            if (Ue || !w(/\/>/i, r)) {
                                He && (r = A(r, be, " "), r = A(r, Te, " "), r = A(r, ve, " "));
                                var f = ye(t.nodeName);
                                if (Ot(f, a, r))
                                    if (!Ye || "id" !== a && "name" !== a || (Nt(s, t), r = "user-content-" + r), ze && w(/((--!?|])>)|<\/(style|title)/i, r)) Nt(s, t);
                                    else {
                                        if (ie && "object" === e(O) && "function" == typeof O.getAttributeType)
                                            if (m);
                                            else switch (O.getAttributeType(f, a)) {
                                                case "TrustedHTML":
                                                    r = ie.createHTML(r);
                                                    break;
                                                case "TrustedScriptURL":
                                                    r = ie.createScriptURL(r)
                                            }
                                        try {
                                            m ? t.setAttributeNS(m, s, r) : t.setAttribute(s, r), St(t) ? vt(t) : b(o.removed)
                                        } catch (e) {}
                                    }
                            } else Nt(s, t)
                    }
                    wt("afterSanitizeAttributes", t, null)
                }
            },
            Ct = function e(t) {
                var n, r = At(t);
                for (wt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) wt("uponSanitizeShadowNode", n, null), xt(n), Lt(n), n.content instanceof l && e(n.content);
                wt("afterSanitizeShadowDOM", t, null)
            };
        return o.sanitize = function(t) {
            var r, i, c, s, m, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((lt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !_t(t)) {
                if ("function" != typeof t.toString) throw x("toString is not a function");
                if ("string" != typeof(t = t.toString())) throw x("dirty is not a string, aborting")
            }
            if (!o.isSupported) {
                if ("object" === e(n.toStaticHTML) || "function" == typeof n.toStaticHTML) {
                    if ("string" == typeof t) return n.toStaticHTML(t);
                    if (_t(t)) return n.toStaticHTML(t.outerHTML)
                }
                return t
            }
            if (Be || dt(f), o.removed = [], "string" == typeof t && (Ve = !1), Ve) {
                if (t.nodeName) {
                    var p = ye(t.nodeName);
                    if (!xe[p] || De[p]) throw x("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (t instanceof u) 1 === (i = (r = Et("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? r = i : r.appendChild(i);
            else {
                if (!Ge && !He && !Pe && -1 === t.indexOf("<")) return ie && qe ? ie.createHTML(t) : t;
                if (!(r = Et(t))) return Ge ? null : qe ? le : ""
            }
            r && je && vt(r.firstChild);
            for (var d = At(Ve ? t : r); c = d.nextNode();) 3 === c.nodeType && c === s || (xt(c), Lt(c), c.content instanceof l && Ct(c.content), s = c);
            if (s = null, Ve) return t;
            if (Ge) {
                if (We)
                    for (m = me.call(r.ownerDocument); r.firstChild;) m.appendChild(r.firstChild);
                else m = r;
                return (ke.shadowroot || ke.shadowrootmod) && (m = pe.call(a, m, !0)), m
            }
            var h = Pe ? r.outerHTML : r.innerHTML;
            return Pe && xe["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && w(Z, r.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + h), He && (h = A(h, be, " "), h = A(h, Te, " "), h = A(h, ve, " ")), ie && qe ? ie.createHTML(h) : h
        }, o.setConfig = function(e) {
            dt(e), Be = !0
        }, o.clearConfig = function() {
            mt = null, Be = !1
        }, o.isValidAttribute = function(e, t, n) {
            mt || dt({});
            var r = ye(e),
                o = ye(t);
            return Ot(r, o, n)
        }, o.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], T(he[e], t))
        }, o.removeHook = function(e) {
            if (he[e]) return b(he[e])
        }, o.removeHooks = function(e) {
            he[e] && (he[e] = [])
        }, o.removeAllHooks = function() {
            he = {}
        }, o
    }();
    return ee
})); /*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+o[a] < +n[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.1";
        var t = Object.create(null);
        s.migrateDisablePatches = function() {
            for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
        }, s.migrateEnablePatches = function() {
            for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
        }, s.migrateIsPatchEnabled = function(e) {
            return !t[e]
        }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var o = {};

        function u(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n, o), r
                },
                set: function(e) {
                    u(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function c(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            return a(e, t, r, n, o), 0
        }

        function i(e, t, r, n) {
            return a(e, t, r, n), 0
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
        var d, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        for (d in i(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
        c(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "$1")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), c(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function x(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        i(s.fn, "removeAttr", function(e) {
            var r = this,
                n = !1;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && r.each(function() {
                    if (!1 !== s(this).prop(t)) return !(n = !0)
                }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), i(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var Q, A, R = !1,
            C = /^[a-z]/,
            N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return R = !0, e = r.apply(this, arguments), R = !1, e
            })
        }), i(s, "swap", function(e, t, r, n) {
            var o, a, i = {};
            for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
            for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
            return o
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") ? (A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
            get: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        }, "css-number");
        var S, P, k, H, E = s.data;
        i(s, "data", function(e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                return E.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
        }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function(e) {
            return e
        }, i(s.Tween.prototype, "run", function() {
            1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
        }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
            },
            set: function(e) {
                u("fx-interval", P), S = e
            }
        }));
        var M = s.fn.load,
            q = s.event.add,
            O = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, "event-old-patch"), i(s.event, "add", function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
        }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
            i(s.fn, t, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }, "shorthand-removed-v3")
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            c(s.fn, r, function(e, t) {
                return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("ready-event", "'ready' event is deprecated")
            }
        }, c(s.fn, "bind", function(e, t, r) {
            return this.on(e, null, t, r)
        }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function(e, t) {
            return this.off(e, null, t)
        }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function(e, t, r, n) {
            return this.on(t, e, r, n)
        }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.migrateEnablePatches("self-closed-tags")
        }, i(s, "htmlPrefilter", function(e) {
            var t, r;
            return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
        }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
        var D, W, _, I = s.fn.offset;
        return i(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], i(s, "Deferred", function(e) {
            var a = W(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(_, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
    });
jQuery(document).ready((function($) {
    function t(t) {
        const s = t.hasClass(i),
            r = t.parent().hasClass(i),
            n = t.closest("." + i).length > 0;
        if (("true" === ForceInlineSVGActive || s || n) && (!svgSettings.skipNested || s || r || !n)) {
            var a = t.attr("id"),
                o = t.attr("class"),
                c = t.attr("src");
            c.endsWith("svg") && $.get(c, (function(i) {
                var s = $(i).find("svg"),
                    r = s.attr("id");
                void 0 === a ? void 0 === r ? (a = "svg-replaced-" + e, s = s.attr("id", a)) : a = r : s = s.attr("id", a), void 0 !== o && (s = s.attr("class", o + " replaced-svg svg-replaced-" + e)), s = s.removeAttr("xmlns:a"), "on" === frontSanitizationEnabled && "" != s[0].outerHTML && (s = DOMPurify.sanitize(s[0].outerHTML)), t.replaceWith(s), e++, $(document).trigger("svg.loaded", [a])
            }), "xml").fail((function() {}))
        }
    }
    let e = 0,
        i;
    (bodhisvgsInlineSupport = function() {
        "true" === ForceInlineSVGActive && jQuery("img").each((function() {
            void 0 !== jQuery(this).attr("src") && !1 !== jQuery(this).attr("src") && jQuery(this).attr("src").match(/\.(svg)/) && (jQuery(this).hasClass(cssTarget.ForceInlineSVG) || jQuery(this).addClass(cssTarget.ForceInlineSVG))
        })), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
            var i = this.toString();
            ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > i.length) && (e = i.length), e -= t.length;
            var s = i.lastIndexOf(t, e);
            return -1 !== s && s === e
        }), String.prototype.endsWith = function(t) {
            var e = this.length - t.length;
            return e >= 0 && this.lastIndexOf(t) === e
        }, i = "true" === ForceInlineSVGActive ? "img." !== cssTarget.Bodhi ? cssTarget.ForceInlineSVG : "style-svg" : "img." !== cssTarget.Bodhi ? cssTarget.Bodhi : "style-svg", "string" == typeof i && (i = i.replace("img.", ""), $("." + i).each((function(e) {
            void 0 !== $(this).attr("src") && !1 !== $(this).attr("src") ? t($(this)) : $(this).find("img").each((function(e) {
                void 0 !== $(this).attr("src") && !1 !== $(this).attr("src") && t($(this))
            }))
        })))
    })()
}));
cssTarget = {
    "Bodhi": "img.style-svg",
    "ForceInlineSVG": "style-svg"
};
ForceInlineSVGActive = "false";
frontSanitizationEnabled = "on";
jQuery(document).ready(function() {
    jQuery("#hello-elementor-css").attr("defer", "defer");
    jQuery('.services-accordian a').attr('href', '#');
    jQuery('.esz_post_link a').attr('target', '_blank');
    jQuery(".esz_slide_box .esz_post_meta").prepend('<img class="latest-tcn" src="/wp-content/uploads/2024/10/Latest.svg">')
    var $swiper = jQuery(".services-slider");
    var mySwiper = new Swiper(".services-slider", {
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
        centeredSlides: !0,
        autoplay: {
            delay: 3000,
            speed: 80,
        },
        loop: !0,
        grabCursor: !0,
        disableOnInteraction: !1
    });
    jQuery('.webinar-archive .e-loop-nothing-found-message').parent().parent().addClass('nothing-found');
    jQuery('.grid-view .elementor-icon').addClass('active-view');
    jQuery('.blog-grid-section-outer .grid-view').on('click', function() {
        jQuery('.blog-grid-section .e-loop-item').removeClass('list-view-display');
        jQuery('.blog-grid-section .e-loop-item').addClass('grid-view-display');
        jQuery('.blog-grid-section .elementor-grid').removeClass('list-view-display-outer');
        jQuery('.blog-grid-section .elementor-grid').addClass('grid-view-display-outer');
        jQuery('.list-view .elementor-icon').removeClass('active-view');
        jQuery('.grid-view .elementor-icon').addClass('active-view')
    });
    jQuery('.blog-grid-section-outer .list-view').on('click', function() {
        jQuery('.blog-grid-section .e-loop-item').removeClass('grid-view-display');
        jQuery('.blog-grid-section .e-loop-item').addClass('list-view-display');
        jQuery('.blog-grid-section .elementor-grid').removeClass('grid-view-display-outer');
        jQuery('.blog-grid-section .elementor-grid').addClass('list-view-display-outer');
        jQuery('.grid-view .elementor-icon').removeClass('active-view');
        jQuery('.list-view .elementor-icon').addClass('active-view')
    });
    jQuery(".logo-carousel .swiper-wrapper").mouseenter(function() {
        jQuery('.logo-carousel .swiper-wrapper').addClass('stopcarousel')
    }).mouseleave(function() {
        jQuery('.logo-carousel .swiper-wrapper').removeClass('stopcarousel')
    });
    jQuery(".testi-content").each(function() {
        if (jQuery(this).html().trim() == "") {
            jQuery(this).parent().parent().addClass("notestimonial")
        } else {
            jQuery(this).parent().parent().addClass("has_testimonial")
        }
    });
    jQuery(".testi-content-text").prepend('<img src="/wp-content/uploads/2024/08/quote.png" class="quote_icon" >');
    jQuery(".has_testimonial .elementor-widget-image").prepend('<a href="/testimonials/" target="_blank"><img src="/wp-content/uploads/2024/10/info-clientele.svg" alt="testimonial" class="view-content" ></a>')
});
jQuery(".list-view-display-outer .e-loop__load-more a").on('click', function(e) {
    jQuery('.list-view-display-outer .e-loop-item ').removeClass('list-view-display');
    jQuery('.list-view-display-outer .e-loop-item ').addClass('list-view-display')
});
jQuery(jQuery => {
    jQuery('a:not([aria-label])').attr('aria-label', function() {
        return this.textContent.trim()
    })
});
document.addEventListener('DOMContentLoaded', function() {
    var popupId = 14255;
    var popupSelector = '.book-demo';
    var popupOpenedManually = !1;
    if (document.body.classList.contains('single-webinars')) {
        return
    }
    document.querySelectorAll(popupSelector).forEach(function(el) {
        el.addEventListener('click', function() {
            popupOpenedManually = !0;
            sessionStorage.setItem('enquiryPopupOpened', 'true');
            elementorProFrontend.modules.popup.showPopup({
                id: popupId
            })
        })
    });
    setTimeout(function() {
        if (!popupOpenedManually && !sessionStorage.getItem('enquiryPopupOpened')) {
            elementorProFrontend.modules.popup.showPopup({
                id: popupId
            })
        }
    }, 45000)
});
var Swiper = function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {});
        const i = ["__proto__", "constructor", "prototype"];
        Object.keys(a).filter((e => i.indexOf(e) < 0)).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    function n(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
    }

    function l(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function o() {
        return Date.now()
    }

    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let a = 1; a < arguments.length; a += 1) {
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t],
                        r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
                }
            }
        }
        var s;
        return e
    }

    function u(e, t, s) {
        e.style.setProperty(t, s)
    }

    function m(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                l = (new Date).getTime(), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: c
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }

    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function f(e, t) {
        void 0 === t && (t = "");
        const s = r(),
            a = [...e.children];
        return s.HTMLSlotElement && e instanceof HTMLSlotElement && a.push(...e.assignedElements()), t ? a.filter((e => e.matches(t))) : a
    }

    function g(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }

    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)), s
    }

    function w(e) {
        const t = r(),
            s = a(),
            i = e.getBoundingClientRect(),
            n = s.body,
            l = e.clientTop || n.clientTop || 0,
            o = e.clientLeft || n.clientLeft || 0,
            d = e === t ? t.scrollY : e.scrollTop,
            c = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + d - l,
            left: i.left + c - o
        }
    }

    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t)
    }

    function y(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
            return t
        }
    }

    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
        return s
    }

    function x(e, t) {
        t && e.addEventListener("transitionend", (function s(a) {
            a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
        }))
    }

    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function T(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
    }

    function M(e) {
        return t => Math.abs(t) > 0 && e.browser && e.browser.need3dFix && Math.abs(t) % 90 == 0 ? t + .001 : t
    }

    function C(e, t) {
        void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
            createHTML: e => e
        }).createHTML(t) : e.innerHTML = t
    }
    let P, L, I;

    function z() {
        return P || (P = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), P
    }

    function A(e) {
        return void 0 === e && (e = {}), L || (L = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = z(),
                a = r(),
                i = a.navigator.platform,
                n = t || a.navigator.userAgent,
                l = {
                    ios: !1,
                    android: !1
                },
                o = a.screen.width,
                d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
        }(e)), L
    }

    function $() {
        return I || (I = function() {
            const e = r(),
                t = A();
            let s = !1;

            function a() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (a()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, a] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    s = e < 16 || 16 === e && a < 2
                }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                n = a();
            return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || i && t.ios,
                isWebView: i
            }
        }()), I
    }
    var k = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    const O = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    };
    const D = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    };
    const G = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        },
        X = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        },
        Y = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = i,
                    r = [s - t];
                return r.push(...Array.from({
                    length: t
                }).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
                    r.includes(t.column) && X(e, s)
                }))
            }
            const r = i + a - 1;
            if (e.params.rewind || e.params.loop)
                for (let a = i - t; a <= r + t; a += 1) {
                    const t = (a % s + s) % s;
                    (t < i || t > r) && X(e, t)
                } else
                    for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && X(e, a)
        };
    var B = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;

            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }
            const s = e.params,
                {
                    wrapperEl: a,
                    slidesEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && s.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = f(i, `.${e.params.slideClass}, swiper-slide`),
                p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = [],
                g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length,
                E = e.slidesGrid.length;
            let x = s.spaceBetween,
                T = -v,
                M = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
            })), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let a = 0; a < p; a += 1) {
                let i;
                if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        I && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i),
                            n = i.style.transform,
                            l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                        else {
                            const e = t(r, "width"),
                                s = t(r, "padding-left"),
                                a = t(r, "padding-right"),
                                n = t(r, "margin-left"),
                                l = t(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) L = e + n + l;
                            else {
                                const {
                                    clientWidth: t,
                                    offsetWidth: r
                                } = i;
                                L = e + s + a + n + l + (r - t)
                            }
                        }
                        n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L))
                    } else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize+x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize+x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
                const t = [];
                for (let a = 0; a < m.length; a += 1) {
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i)
                }
                m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                        i = t * s.slidesPerGroup;
                    for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i)
                }
                for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
            }
            if (0 === m.length && (m = [0]), 0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${x}px`
                }))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                })), e -= x;
                const t = e > r ? e - r : 0;
                m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                })), e -= x;
                const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < r) {
                    const s = (r - e - t) / 2;
                    m.forEach(((e, t) => {
                        m[t] = e - s
                    })), h.forEach(((e, t) => {
                        h[t] = e + s
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: m,
                    slidesGrid: h,
                    slidesSizesGrid: g
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`,
                    a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                    s.push(e)
                }));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e))
                    } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides,
                s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    u = -(n - d),
                    m = u + t.slidesSizesGrid[e],
                    h = u >= 0 && u <= t.size - t.slidesSizesGrid[e],
                    f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), O(o, f, s.slideVisibleClass), O(o, h, s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n,
                progressLoop: l
            } = t;
            const o = r,
                d = n;
            if (0 === a) i = 0, r = !0, n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1,
                    l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0),
                    a = t.getSlideIndexByData(t.slides.length - 1),
                    i = t.slidesGrid[s],
                    r = t.slidesGrid[a],
                    n = t.slidesGrid[t.slidesGrid.length - 1],
                    o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    slidesEl: a,
                    activeIndex: i
                } = e,
                r = e.virtual && s.virtual.enabled,
                n = e.grid && s.grid && s.grid.rows > 1,
                l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (r)
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
                } else o = l(`[data-swiper-slide-index="${i}"]`);
            else n ? (o = t.find((e => e.column === i)), c = t.find((e => e.column === i + 1)), d = t.find((e => e.column === i - 1))) : o = t[i];
            o && (n || (c = function(e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                D(e, e === o, s.slideActiveClass), D(e, e === c, s.slideNextClass), D(e, e === d, s.slidePrevClass)
            })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    snapGrid: a,
                    params: i,
                    activeIndex: r,
                    realIndex: n,
                    snapIndex: l
                } = t;
            let o, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
            };
            if (void 0 === d && (d = function(e) {
                    const {
                        slidesGrid: t,
                        params: s
                    } = e, a = e.rtlTranslate ? e.translate : -e.translate;
                    let i;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                    return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
                }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
            else if (p) {
                const e = t.slides.find((e => e.column === d));
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d
            } else u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }), t.initialized && Y(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
            const s = this,
                a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
            }));
            let r, n = !1;
            if (i)
                for (let e = 0; e < s.slides.length; e += 1)
                    if (s.slides[e] === i) {
                        n = !0, r = e;
                        break
                    } if (!i || !n) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
            s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };
    var H = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    wrapperEl: r,
                    progress: n
                } = s;
            let l, o = 0,
                d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"))
            }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function N(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && "reset" === l ? t.emit(`slideResetTransition${i}`) : s && r !== n && (t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`))
    }
    var R = {
        slideTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: f
            } = r;
            if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = r.params.speed);
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset";
            const y = r.virtual && r.params.virtual.enabled;
            if (!(y && i) && (u && -w === r.translate || !u && w === r.translate)) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? w : -w;
                if (0 === t) y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                    h[e ? "scrollLeft" : "scrollTop"] = s
                }))) : h[e ? "scrollLeft" : "scrollTop"] = s, y && requestAnimationFrame((() => {
                    r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
                }));
                else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            const E = $().isSafari;
            return y && !i && E && r.isElement && r.virtual.update(!1, !1, n), r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop)
                if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
                else {
                    let e;
                    if (r) {
                        const t = n * i.params.grid.rows;
                        e = i.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                    } else e = i.getSlideIndexByData(n);
                    const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                        {
                            centeredSlides: s
                        } = i.params;
                    let l = i.params.slidesPerView;
                    "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
                    let o = t - e < l;
                    if (s && (o = o || e < Math.ceil(l / 2)), a && s && "auto" !== i.params.slidesPerView && !r && (o = !1), o) {
                        const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({
                            direction: a,
                            slideTo: !0,
                            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === a ? i.realIndex : void 0
                        })
                    }
                    if (r) {
                        const e = n * i.params.grid.rows;
                        n = i.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                    } else n = i.getSlideIndexByData(n)
                } return requestAnimationFrame((() => {
                i.slideTo(n, t, s, a)
            })), i
        },
        slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this,
                {
                    enabled: i,
                    params: r,
                    animating: n
                } = a;
            if (!i || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
                d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding) return !1;
                if (a.loopFix({
                        direction: "next"
                    }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                    a.slideTo(a.activeIndex + o, e, t, s)
                })), !0
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    snapGrid: r,
                    slidesGrid: n,
                    rtlTranslate: l,
                    enabled: o,
                    animating: d
                } = a;
            if (!o || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding) return !1;
                a.loopFix({
                    direction: "prev"
                }), a._clientLeft = a.wrapperEl.clientLeft
            }

            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? a.translate : -a.translate),
                m = r.map((e => p(e))),
                h = i.freeMode && i.freeMode.enabled;
            let f = r[m.indexOf(u) - 1];
            if (void 0 === f && (i.cssMode || h)) {
                let e;
                r.forEach(((t, s) => {
                    u >= t && (e = s)
                })), void 0 !== e && (f = h ? r[e] : r[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== f && (g = n.indexOf(f), g < 0 && (g = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - a.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
                a.slideTo(g, e, t, s)
            })), !0) : a.slideTo(g, e, t, s)
        },
        slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this;
            if (!a.destroyed) return void 0 === e && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
                params: t,
                slidesEl: s
            } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.getSlideIndexWhenGrid(e.clickedIndex);
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
                o = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(i) : r > (o ? (e.slides.length - a) / 2 - (e.params.grid.rows - 1) : e.slides.length - a) ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var _ = {
        loopCreate: function(e, t) {
            const s = this,
                {
                    params: a,
                    slidesEl: i
                } = s;
            if (!a.loop || s.virtual && s.params.virtual.enabled) return;
            const r = () => {
                    f(i, `.${a.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }))
                },
                n = s.grid && a.grid && a.grid.rows > 1;
            a.loopAddBlankSlides && (a.slidesPerGroup > 1 || n) && (() => {
                const e = f(i, `.${a.slideBlankClass}`);
                e.forEach((e => {
                    e.remove()
                })), e.length > 0 && (s.recalcSlides(), s.updateSlides())
            })();
            const l = a.slidesPerGroup * (n ? a.grid.rows : 1),
                o = s.slides.length % l != 0,
                d = n && s.slides.length % a.grid.rows != 0,
                c = e => {
                    for (let t = 0; t < e; t += 1) {
                        const e = s.isElement ? v("swiper-slide", [a.slideBlankClass]) : v("div", [a.slideClass, a.slideBlankClass]);
                        s.slidesEl.append(e)
                    }
                };
            if (o) {
                if (a.loopAddBlankSlides) {
                    c(l - s.slides.length % l), s.recalcSlides(), s.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                r()
            } else if (d) {
                if (a.loopAddBlankSlides) {
                    c(a.grid.rows - s.slides.length % a.grid.rows), s.recalcSlides(), s.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                r()
            } else r();
            s.loopFix({
                slideRealIndex: e,
                direction: a.centeredSlides ? void 0 : "next",
                initial: t
            })
        },
        loopFix: function(e) {
            let {
                slideRealIndex: t,
                slideTo: s = !0,
                direction: a,
                setTranslate: i,
                activeSlideIndex: r,
                initial: n,
                byController: l,
                byMousewheel: o
            } = void 0 === e ? {} : e;
            const d = this;
            if (!d.params.loop) return;
            d.emit("beforeLoopFix");
            const {
                slides: c,
                allowSlidePrev: p,
                allowSlideNext: u,
                slidesEl: m,
                params: h
            } = d, {
                centeredSlides: f,
                initialSlide: v
            } = h;
            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== d.snapIndex ? h.centeredSlides && d.snapIndex < h.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
            let w = h.slidesPerView;
            "auto" === w ? w = d.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(h.slidesPerView, 10)), f && w % 2 == 0 && (w += 1));
            const b = h.slidesPerGroupAuto ? w : h.slidesPerGroup;
            let y = f ? Math.max(b, Math.ceil(w / 2)) : b;
            y % b != 0 && (y += b - y % b), y += h.loopAdditionalSlides, d.loopedSlides = y;
            const E = d.grid && h.grid && h.grid.rows > 1;
            c.length < w + y || "cards" === d.params.effect && c.length < w + 2 * y ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : E && "row" === h.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const x = [],
                S = [],
                T = E ? Math.ceil(c.length / h.grid.rows) : c.length,
                M = n && T - v < w && !f;
            let C = M ? v : d.activeIndex;
            void 0 === r ? r = d.getSlideIndex(c.find((e => e.classList.contains(h.slideActiveClass)))) : C = r;
            const P = "next" === a || !a,
                L = "prev" === a || !a;
            let I = 0,
                z = 0;
            const A = (E ? c[r].column : r) + (f && void 0 === i ? -w / 2 + .5 : 0);
            if (A < y) {
                I = Math.max(y - A, b);
                for (let e = 0; e < y - A; e += 1) {
                    const t = e - Math.floor(e / T) * T;
                    if (E) {
                        const e = T - t - 1;
                        for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && x.push(t)
                    } else x.push(T - t - 1)
                }
            } else if (A + w > T - y) {
                z = Math.max(A - (T - 2 * y), b), M && (z = Math.max(z, w - T + v + 1));
                for (let e = 0; e < z; e += 1) {
                    const t = e - Math.floor(e / T) * T;
                    E ? c.forEach(((e, s) => {
                        e.column === t && S.push(s)
                    })) : S.push(t)
                }
            }
            if (d.__preventObserver__ = !0, requestAnimationFrame((() => {
                    d.__preventObserver__ = !1
                })), "cards" === d.params.effect && c.length < w + 2 * y && (S.includes(r) && S.splice(S.indexOf(r), 1), x.includes(r) && x.splice(x.indexOf(r), 1)), L && x.forEach((e => {
                    c[e].swiperLoopMoveDOM = !0, m.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                })), P && S.forEach((e => {
                    c[e].swiperLoopMoveDOM = !0, m.append(c[e]), c[e].swiperLoopMoveDOM = !1
                })), d.recalcSlides(), "auto" === h.slidesPerView ? d.updateSlides() : E && (x.length > 0 && L || S.length > 0 && P) && d.slides.forEach(((e, t) => {
                    d.grid.updateSlide(t, e, d.slides)
                })), h.watchSlidesProgress && d.updateSlidesOffset(), s)
                if (x.length > 0 && L) {
                    if (void 0 === t) {
                        const e = d.slidesGrid[C],
                            t = d.slidesGrid[C + I] - e;
                        o ? d.setTranslate(d.translate - t) : (d.slideTo(C + Math.ceil(I), 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                    } else if (i) {
                        const e = E ? x.length / h.grid.rows : x.length;
                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                    }
                } else if (S.length > 0 && P)
                if (void 0 === t) {
                    const e = d.slidesGrid[C],
                        t = d.slidesGrid[C - z] - e;
                    o ? d.setTranslate(d.translate - t) : (d.slideTo(C - z, 0, !1, !0), i && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                } else {
                    const e = E ? S.length / h.grid.rows : S.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0)
                } if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !l) {
                const e = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(d.controller.control) ? d.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === h.slidesPerView && s
                    })
                })) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
                    ...e,
                    slideTo: d.controller.control.params.slidesPerView === h.slidesPerView && s
                })
            }
            d.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this,
                {
                    params: t,
                    slidesEl: s
                } = e;
            if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            })), a.forEach((e => {
                s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
        }
    };

    function q(e, t, s) {
        const a = r(),
            {
                params: i
            } = e,
            n = i.edgeSwipeDetection,
            l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0)
    }

    function V(e) {
        const t = this,
            s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
            n.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void q(t, i, i.targetTouches[0].pageX);
        const {
            params: l,
            touches: d,
            enabled: c
        } = t;
        if (!c) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && ! function(e, t) {
                const s = r();
                let a = t.contains(e);
                !a && s.HTMLSlotElement && t instanceof HTMLSlotElement && (a = [...t.assignedElements()].includes(e), a || (a = function(e, t) {
                    const s = [t];
                    for (; s.length > 0;) {
                        const t = s.shift();
                        if (e === t) return !0;
                        s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t)));
                return a
            }(p, t.wrapperEl)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
            m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(h, p) : p.closest(h))) return void(t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
        d.currentX = i.pageX, d.currentY = i.pageY;
        const g = d.currentX,
            v = d.currentY;
        if (!q(t, i, g)) return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !p.matches(n.focusableElements)) && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
    }

    function F(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: d
            } = s;
        if (!d) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
            if (null !== i.touchId) return;
            if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
            if (c = [...p.changedTouches].find((e => e.identifier === i.touchId)), !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX,
            m = c.pageY;
        if (p.preventedByNestedSwiper) return n.startX = u, void(n.startY = m);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m
        }), i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else {
                if (l && (u > n.startX && -s.translate <= s.maxTranslate() || u < n.startX && -s.translate >= s.minTranslate())) return;
                if (!l && (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())) return
            } if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
        const h = n.currentX - n.startX,
            f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f,
            v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode,
            y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({
                    direction: s.swipeDirection
                }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let E = !0,
            x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== r.slidesPerView && s.slides.length - r.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
            }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function W(e) {
        const t = this,
            s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [...i.changedTouches].find((e => e.identifier === s.touchId)), !a || a.identifier !== s.touchId) return
        } else {
            if (null !== s.touchId) return;
            if (i.pointerId !== s.pointerId) return;
            a = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
            if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
        }
        s.pointerId = null, s.touchId = null;
        const {
            params: r,
            touches: n,
            rtlTranslate: d,
            slidesGrid: c,
            enabled: p
        } = t;
        if (!p) return;
        if (!r.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o(),
            m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = o(), l((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        const f = h >= -t.maxTranslate() && !t.params.loop;
        let g = 0,
            v = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
        }
        let w = null,
            b = null;
        r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const y = (h - c[g]) / v,
            E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
        } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
        }
    }

    function j() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e, n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function U(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function K() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function Z(e) {
        const t = this;
        G(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }

    function Q() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }
    const J = (e, t) => {
        const s = a(),
            {
                params: i,
                el: r,
                wrapperEl: n,
                device: l
            } = e,
            o = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
        r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }), r[d]("touchstart", e.onTouchStart, {
            passive: !1
        }), r[d]("pointerdown", e.onTouchStart, {
            passive: !1
        }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
        }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
        }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e[c]("observerUpdate", j, !0), r[d]("load", e.onLoad, {
            capture: !0
        }))
    };
    const ee = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var te = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function se(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), p(t, s)) : p(t, s)) : p(t, s)
        }
    }
    const ae = {
            eventsEmitter: k,
            update: B,
            translate: H,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), N({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), N({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: R,
            loop: _,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        {
                            params: t
                        } = e;
                    e.onTouchStart = V.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = W.bind(e), e.onDocumentTouchStart = Q.bind(e), t.cssMode && (e.onScroll = K.bind(e)), e.onClick = U.bind(e), e.onLoad = Z.bind(e), J(e, "on")
                },
                detachEvents: function() {
                    J(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            realIndex: t,
                            initialized: s,
                            params: i,
                            el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const l = a(),
                        o = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase,
                        d = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : l.querySelector(i.breakpointsBase),
                        c = e.getBreakpoint(n, o, d);
                    if (!c || e.currentBreakpoint === c) return;
                    const u = (c in n ? n[c] : void 0) || e.originalParams,
                        m = ee(e, i),
                        h = ee(e, u),
                        f = e.params.grabCursor,
                        g = u.grabCursor,
                        v = i.enabled;
                    m && !h ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !m && h && (r.classList.add(`${i.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), f && !g ? e.unsetGrabCursor() : !f && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === u[t]) return;
                        const s = i[t] && i[t].enabled,
                            a = u[t] && u[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const w = u.direction && u.direction !== i.direction,
                        b = i.loop && (u.slidesPerView !== i.slidesPerView || w),
                        y = i.loop;
                    w && s && e.changeDirection(), p(e.params, u);
                    const E = e.params.enabled,
                        x = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), v && !E ? e.disable() : !v && E && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", u), s && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && x ? (e.loopCreate(t), e.updateSlides()) : y && !x && e.loopDestroy()), e.emit("breakpoint", u)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: a,
                            el: i,
                            device: r
                        } = e,
                        n = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...n), i.classList.add(...t), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        el: e,
                        classNames: t
                    } = this;
                    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                }
            }
        },
        ie = {};
    class re {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const a = p({}, t, {
                        el: s
                    });
                    e.push(new re(a))
                })), e
            }
            const l = this;
            l.__swiper__ = !0, l.support = z(), l.device = A({
                userAgent: t.userAgent
            }), l.browser = $(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: se(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                })
            }));
            const d = p({}, te, o);
            return l.params = p({}, d, ie, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                l.on(e, l.params.on[e])
            })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === l.params.direction,
                isVertical: () => "vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l.emit("_swiper"), l.params.init && l.init(), l
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            } [e]
        }
        getSlideIndex(e) {
            const {
                slidesEl: t,
                params: s
            } = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
        }
        getSlideIndexWhenGrid(e) {
            return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
        }
        recalcSlides() {
            const {
                slidesEl: e,
                params: t
            } = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView) return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize), o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && G(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
            s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const a = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let i = (() => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return f(s, a())[0]
            })();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }))), Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                e.complete ? G(t, e) : e.addEventListener("load", (e => {
                    G(t, e.target)
                }))
            })), Y(t), t.initialized = !0, Y(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    el: i,
                    wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), r && r.removeAttribute("style"), n && n.length && n.forEach((e => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            p(ie, e)
        }
        static get extendedDefaults() {
            return ie
        }
        static get defaults() {
            return te
        }
        static installModule(e) {
            re.prototype.__modules__ || (re.prototype.__modules__ = []);
            const t = re.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => re.installModule(e))), re) : (re.installModule(e), re)
        }
    }

    function ne(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r
            }
        })), s
    }

    function le(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
    }

    function oe(e) {
        const t = this,
            {
                params: s,
                slidesEl: a
            } = t;
        s.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                C(t, e), a.append(t.children[0]), C(t, "")
            } else a.append(e)
        };
        if ("object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
        else i(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
    }

    function de(e) {
        const t = this,
            {
                params: s,
                activeIndex: a,
                slidesEl: i
            } = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                C(t, e), i.prepend(t.children[0]), C(t, "")
            } else i.prepend(e)
        };
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
            r = a + e.length
        } else n(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
    }

    function ce(e, t) {
        const s = this,
            {
                params: a,
                activeIndex: i,
                slidesEl: r
            } = s;
        let n = i;
        a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n
        } else r.append(t);
        for (let e = 0; e < d.length; e += 1) r.append(d[e]);
        s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function pe(e) {
        const t = this,
            {
                params: s,
                activeIndex: a
            } = t;
        let i = a;
        s.loop && (i -= t.loopedSlides, t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
            n = Math.max(n, 0)
        } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }

    function ue() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function me(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate _virtualUpdated", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function he(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
    }

    function fe(e) {
        let {
            swiper: t,
            duration: s,
            transformElements: a,
            allSlides: i
        } = e;
        const {
            activeIndex: r
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e => {
                const s = e.classList.contains("swiper-slide-transform") ? (e => {
                    if (!e.parentElement) return t.slides.find((t => t.shadowRoot && t.shadowRoot === e.parentNode));
                    return e.parentElement
                })(e) : e;
                return t.getSlideIndex(s) === r
            })), e.forEach((e => {
                x(e, (() => {
                    if (s) return;
                    if (!t || t.destroyed) return;
                    s = !0, t.animating = !1;
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e)
                }))
            }))
        }
    }

    function ge(e, t, s) {
        const a = `swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
            i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")), i.append(r)), r
    }
    Object.keys(ae).forEach((e => {
        Object.keys(ae[e]).forEach((t => {
            re.prototype[t] = ae[e][t]
        }))
    })), re.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const i = r();
        let n = null,
            l = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            d = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let i = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: n
                        } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = [],
            l = r(),
            o = function(e, s) {
                void 0 === s && (s = {});
                const a = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const s = function() {
                        i("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
                }));
                a.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: t.isElement || (void 0 === s.childList || s).childList,
                    characterData: void 0 === s.characterData || s.characterData
                }), n.push(a)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), o(t.wrapperEl, {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const ve = [function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i
        } = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                containerRole: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null,
                scrollOnFocus: !0
            }
        }), t.a11y = {
            clicked: !1
        };
        let r, n, l = null,
            o = (new Date).getTime();

        function d(e) {
            const t = l;
            0 !== t.length && C(t, e)
        }

        function c(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }))
        }

        function p(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }))
        }

        function u(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("role", t)
            }))
        }

        function m(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }))
        }

        function h(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }))
        }

        function f(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }))
        }

        function g(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }))
        }

        function w(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = e.target;
            if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(le(t.params.pagination.bulletClass))) {
                if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                    const e = T(t.navigation.prevEl);
                    T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage))
                }
                t.pagination && a.matches(le(t.params.pagination.bulletClass)) && a.click()
            }
        }

        function b() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function E() {
            return b() && t.params.pagination.clickable
        }
        const x = (e, t, s) => {
                c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", w)), h(e, s),
                    function(e, t) {
                        (e = T(e)).forEach((e => {
                            e.setAttribute("aria-controls", t)
                        }))
                    }(e, t)
            },
            S = e => {
                n && n !== e.target && !n.contains(e.target) && (r = !0), t.a11y.clicked = !0
            },
            M = () => {
                r = !1, requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            },
            P = e => {
                o = (new Date).getTime()
            },
            L = e => {
                if (t.a11y.clicked || !t.params.a11y.scrollOnFocus) return;
                if ((new Date).getTime() - o < 100) return;
                const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!s || !t.slides.includes(s)) return;
                n = s;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                    r || (t.params.loop ? t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(s.getAttribute("data-swiper-slide-index"))), 0) : t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(s)), 0), r = !1)
                })))
            },
            I = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
                const s = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(((a, i) => {
                    const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                    h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            },
            z = () => {
                const e = t.params.a11y;
                t.el.append(l);
                const s = t.el;
                e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage), e.containerRole && u(s, e.containerRole);
                const i = t.wrapperEl,
                    r = e.id || i.getAttribute("id") || `swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var n;
                const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var d;
                d = r, T(i).forEach((e => {
                        e.setAttribute("id", d)
                    })),
                    function(e, t) {
                        (e = T(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }))
                    }(i, o), I();
                let {
                    nextEl: c,
                    prevEl: p
                } = t.navigation ? t.navigation : {};
                if (c = T(c), p = T(p), c && c.forEach((t => x(t, r, e.nextSlideMessage))), p && p.forEach((t => x(t, r, e.prevSlideMessage))), E()) {
                    T(t.pagination.el).forEach((e => {
                        e.addEventListener("keydown", w)
                    }))
                }
                a().addEventListener("visibilitychange", P), t.el.addEventListener("focus", L, !0), t.el.addEventListener("focus", L, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", M, !0)
            };
        i("beforeInit", (() => {
            l = v("span", t.params.a11y.notificationClass), l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true")
        })), i("afterInit", (() => {
            t.params.a11y.enabled && z()
        })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && I()
        })), i("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    nextEl: e,
                    prevEl: s
                } = t.navigation;
                s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))), e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)))
            }()
        })), i("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                b() && t.pagination.bullets.forEach((s => {
                    t.params.pagination.clickable && (c(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(le(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                }))
            }()
        })), i("destroy", (() => {
            t.params.a11y.enabled && function() {
                l && l.remove();
                let {
                    nextEl: e,
                    prevEl: s
                } = t.navigation ? t.navigation : {};
                e = T(e), s = T(s), e && e.forEach((e => e.removeEventListener("keydown", w))), s && s.forEach((e => e.removeEventListener("keydown", w))), E() && T(t.pagination.el).forEach((e => {
                    e.removeEventListener("keydown", w)
                }));
                a().removeEventListener("visibilitychange", P), t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", L, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", M, !0))
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
                let d = l(o.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e?`${e}/`:""}${d}`
                } else n.pathname.includes(e) || (d = `${e?`${e}/`:""}${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d))
            },
            c = (e, s, a) => {
                if (s)
                    for (let i = 0, r = t.slides.length; i < r; i += 1) {
                        const r = t.slides[i];
                        if (l(r.getAttribute("data-history")) === s) {
                            const s = t.getSlideIndex(r);
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: i,
            on: n
        } = e, l = !1;
        const o = a(),
            d = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(e, s) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.find((e => e.getAttribute("data-hash") === s));
                        if (!e) return 0;
                        return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    }
                    return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                }
            }
        });
        const c = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", ""),
                    s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (s ? s.getAttribute("data-hash") : "")) {
                    const s = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === s || Number.isNaN(s)) return;
                    t.slideTo(s)
                }
            },
            p = () => {
                if (!l || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                    s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
            };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0,
                        a = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && p()
        })), n("slideChange", (() => {
            l && t.params.cssMode && p()
        }))
    }, function(e) {
        let t, s, {
            swiper: i,
            extendParams: r,
            on: n,
            emit: l,
            params: o
        } = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
            w = o && o.autoplay ? o.autoplay.delay : 3e3,
            b = (new Date).getTime();

        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || e.detail && e.detail.bySwiperTouchMove || C())
        }
        const E = () => {
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
                const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
                i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
                    E()
                }))
            },
            x = e => {
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(s), E();
                let a = void 0 === e ? i.params.autoplay.delay : e;
                v = i.params.autoplay.delay, w = i.params.autoplay.delay;
                const r = (() => {
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.find((e => e.classList.contains("swiper-slide-active"))) : i.slides[i.activeIndex], !e) return;
                    return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
                const n = i.params.speed,
                    o = () => {
                        i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                            x()
                        }))))
                    };
                return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    o()
                }), a)) : requestAnimationFrame((() => {
                    o()
                })), a
            },
            S = () => {
                b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart")
            },
            T = () => {
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop")
            },
            M = (e, s) => {
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (f = !0);
                const a = () => {
                    l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
                };
                if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
                const r = d || i.params.autoplay.delay;
                d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a())
            },
            C = () => {
                i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"))
            },
            P = () => {
                if (i.destroyed || !i.autoplay.running) return;
                const e = a();
                "hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C()
            },
            L = e => {
                "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0))
            },
            I = e => {
                "mouse" === e.pointerType && (g = !1, i.autoplay.paused && C())
            };
        n("init", (() => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", I)), a().addEventListener("visibilitychange", P), S())
        })), n("destroy", (() => {
            i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", I)), a().removeEventListener("visibilitychange", P), i.autoplay.running && T()
        })), n("_freeModeStaticRelease", (() => {
            (u || f) && C()
        })), n("_freeModeNoMomentumRelease", (() => {
            i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
        })), n("beforeTransitionStart", ((e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
        })), n("sliderFirstMove", (() => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout((() => {
                f = !0, u = !0, M(!0)
            }), 200)))
        })), n("touchEnd", (() => {
            if (!i.destroyed && i.autoplay.running && p) {
                if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void(p = !1);
                u && i.params.cssMode && C(), u = !1, p = !1
            }
        })), n("slideChange", (() => {
            !i.destroyed && i.autoplay.running && (h = !0)
        })), Object.assign(i.autoplay, {
            start: S,
            stop: T,
            pause: M,
            resume: C
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1,
            n = !1;

        function l() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function o() {
            const {
                thumbs: e
            } = t.params;
            if (r) return !1;
            r = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) {
                if (e.swiper.destroyed) return r = !1, !1;
                t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper.update()
            } else if (c(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), n = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
        }

        function d(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
                    e.classList.add(r)
                }));
            else
                for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset,
                l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                const i = s.activeIndex;
                let r, o;
                if (s.params.loop) {
                    const e = s.slides.find((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`));
                    r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
                l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, i("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            if (e && e.swiper)
                if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const s = a(),
                        i = () => {
                            const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                            if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);
                            else if (a) {
                                const s = `${t.params.eventsPrefix}init`,
                                    i = r => {
                                        e.swiper = r.detail[0], a.removeEventListener(s, i), o(), d(!0), e.swiper.update(), t.update()
                                    };
                                a.addEventListener(s, i)
                            }
                            return a
                        },
                        r = () => {
                            if (t.destroyed) return;
                            i() || requestAnimationFrame(r)
                        };
                    requestAnimationFrame(r)
                } else o(), d(!0)
        })), i("slideChange update resize observerUpdate", (() => {
            d()
        })), i("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), i("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        })), Object.assign(t.thumbs, {
            init: o,
            update: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: i
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    if (t.params.cssMode) return;
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: o()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    if (t.params.cssMode) return;
                    const {
                        params: r,
                        wrapperEl: n,
                        rtlTranslate: l,
                        snapGrid: d,
                        touchEventsData: c
                    } = t, p = o() - c.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(),
                                    s = c.velocities.pop(),
                                    a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let p = t.translate + s;
                            l && (p = -p);
                            let u, m = !1;
                            const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1)
                                    if (d[t] > -p) {
                                        e = t;
                                        break
                                    } p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                            }
                            if (f && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -p : p) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, (() => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(u), x(n, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, (() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, i, {
            swiper: r,
            extendParams: n,
            on: l
        } = e;
        n({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const o = () => {
            let e = r.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
        };
        l("init", (() => {
            i = r.params.grid && r.params.grid.rows > 1
        })), l("update", (() => {
            const {
                params: e,
                el: t
            } = r, s = e.grid && e.grid.rows > 1;
            i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s
        })), r.grid = {
            initSlides: e => {
                const {
                    slidesPerView: i
                } = r.params, {
                    rows: n,
                    fill: l
                } = r.params.grid, o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n
            },
            unsetSlides: () => {
                r.slides && r.slides.forEach((e => {
                    e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "")
                }))
            },
            updateSlide: (e, i, n) => {
                const {
                    slidesPerGroup: l
                } = r.params, d = o(), {
                    rows: c,
                    fill: p
                } = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                let m, h, f;
                if ("row" === p && l > 1) {
                    const s = Math.floor(e / (l * c)),
                        a = e - c * l * s,
                        r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                    f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m
                } else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
                i.row = f, i.column = h, i.style.height = `calc((100% - ${(c-1)*d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0
            },
            updateWrapperSize: (e, s) => {
                const {
                    centeredSlides: a,
                    roundLengths: i
                } = r.params, n = o(), {
                    rows: l
                } = r.params.grid;
                if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize+n}px`), a) {
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a)
                    }
                    s.splice(0, s.length), s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: oe.bind(t),
            prependSlide: de.bind(t),
            addSlide: ce.bind(t),
            removeSlide: pe.bind(t),
            removeAllSlides: ue.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1
            }
        }), me({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t;
                t.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides[s];
                    let a = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (a -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = a, a = 0);
                    const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                        n = he(0, e);
                    n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                })), fe({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
        };
        me({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    el: e,
                    wrapperEl: s,
                    slides: a,
                    width: r,
                    height: n,
                    rtlTranslate: l,
                    size: o,
                    browser: d
                } = t, c = M(t), p = t.params.cubeEffect, u = t.isHorizontal(), m = t.virtual && t.params.virtual.enabled;
                let h, f = 0;
                p.shadow && (u ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${r}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = v("div", "swiper-cube-shadow"), e.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    let s = e;
                    m && (s = parseInt(t.getAttribute("data-swiper-slide-index"), 10));
                    let r = 90 * s,
                        n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t.progress, 1), -1);
                    let h = 0,
                        g = 0,
                        v = 0;
                    s % 4 == 0 ? (h = 4 * -n * o, v = 0) : (s - 1) % 4 == 0 ? (h = 0, v = 4 * -n * o) : (s - 2) % 4 == 0 ? (h = o + 4 * n * o, v = o) : (s - 3) % 4 == 0 && (h = -o, v = 3 * o + 4 * o * n), l && (h = -h), u || (g = h, h = 0);
                    const w = `rotateX(${c(u?0:-r)}deg) rotateY(${c(u?r:0)}deg) translate3d(${h}px, ${g}px, ${v}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.style.transform = w, p.slideShadows && i(t, d, u)
                }
                if (s.style.transformOrigin = `50% 50% -${o/2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o/2}px`, p.shadow)
                    if (u) h.style.transform = `translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale,
                            a = p.shadowScale / t,
                            i = p.shadowOffset;
                        h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`
                    } const g = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                s.style.transform = `translate3d(0px,0,${g}px) rotateX(${c(t.isHorizontal()?0:f)}deg) rotateY(${c(t.isHorizontal()?-f:0)}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    el: s,
                    slides: a
                } = t;
                if (a.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = s.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(t, s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const i = (e, s) => {
            let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = ge("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = ge("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0))
        };
        me({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect, r = M(t);
                for (let n = 0; n < e.length; n += 1) {
                    const l = e[n];
                    let o = l.progress;
                    t.params.flipEffect.limitRotation && (o = Math.max(Math.min(l.progress, 1), -1));
                    const d = l.swiperSlideOffset;
                    let c = -180 * o,
                        p = 0,
                        u = t.params.cssMode ? -d - t.translate : -d,
                        m = 0;
                    t.isHorizontal() ? s && (c = -c) : (m = u, u = 0, p = -c, c = 0), l.style.zIndex = -Math.abs(Math.round(o)) + e.length, a.slideShadows && i(l, o);
                    const h = `translate3d(${u}px, ${m}px, 0px) rotateX(${r(p)}deg) rotateY(${r(c)}deg)`;
                    he(0, l).style.transform = h
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), fe({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            },
            recreateShadows: () => {
                t.params.flipEffect, t.slides.forEach((e => {
                    let s = e.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    } 
];
    return re.use(ve), re
}();

(self.webpackChunkelementorFrontend = self.webpackChunkelementorFrontend || []).push([

]); /*! elementor-pro - v3.28.0 - 16-04-2025 */
"use strict";


(jQuery, window.elementorFrontend),

function(e) {
    "use strict";
    e.fn.animateNumbers = function(t, n, i, s) {
        return this.each((function() {
            var o = e(this),
                a = parseInt(o.text().replace(/,/g, ""), 10);
            n = n === undefined || n, e({
                value: a
            }).animate({
                value: t
            }, {
                duration: i === undefined ? 500 : i,
                easing: s === undefined ? "swing" : s,
                step: function() {
                    o.text(Math.floor(this.value)), n && o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                },
                complete: function() {
                    parseInt(o.text(), 10) !== t && (o.text(t), n && o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                }
            })
        }))
    }
}

(jQuery);
