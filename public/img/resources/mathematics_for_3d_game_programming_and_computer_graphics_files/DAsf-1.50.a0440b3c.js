;(() => {
  var e = function (e) {
      return e.replace(/_/g, ':')
    },
    t = /(\/b|\/s|\/l).*(node=)(\d{1,12})/,
    n = new Map(),
    i = function () {
      if (!n.has(window.location.href)) {
        var e = t.exec(window.location.href),
          i = e && e[3] ? e[3] : null
        n.set(window.location.href, i)
      }
      return n.get(window.location.href)
    },
    a = function (e) {
      var t = i()
      if (!e || !t) return null
      var n = e.split(':')
      return n.splice(n.length - 1, 0, t), n.join(':')
    },
    o = function (e) {
      var t = i()
      return t ? ''.concat(e, ':').concat(t) : null
    },
    s = { wb: 'ues', bb: 'uet', af: 'uet', cf: 'uet', be: 'uet', ld: 'uex' },
    r = function (t) {
      var n,
        i,
        s = t.latencyEvent,
        r = t.scope,
        m = t.placement,
        p = t.timestamp
      d(s) &&
        (l(s, c(r), m.id, p),
        l(s, c(r), e(m.name), p),
        l(s, c(r), null !== (n = a(m.name)) && void 0 !== n ? n : void 0, p),
        l(s, c(r), null !== (i = o(m.id)) && void 0 !== i ? i : void 0, p))
    },
    d = function (e) {
      return 'function' == typeof window[s[e]]
    },
    l = function (e, t, n, i) {
      void 0 === i && (i = new Date())
      var a = s[e]
      n && 'function' == typeof window[a] && window[a](e, t + n, { wb: 1 }, i)
    },
    c = function (e) {
      return 'adplacements:' + m(e)
    },
    m = function (e) {
      return e ? ''.concat(e, ':') : ''
    },
    p = function (e) {
      console.debug(e)
    },
    h = function (e, t) {
      console.error(e, JSON.stringify(t)), u('ERROR', e, w(e, t))
    },
    u = function (e, t, n) {
      var i
      null === (i = window.ueLogError) ||
        void 0 === i ||
        i.call(window, n, { logLevel: e, attribution: 'APE-safeframe', message: t + ' | ' })
    },
    w = function (e, t) {
      return t instanceof Error ? t : t ? new Error(t) : new Error(e)
    },
    v = function (e, t, n) {
      if (window.csa)
        try {
          window.csa('Content', { element: e })('mark', t, null == n ? void 0 : n.getTime())
        } catch (i) {
          h("Error with 'mark' CSA", i)
        }
    }
  class f {
    sendLatencyMetric({
      latencyMetricType: e,
      placementId: t,
      placementName: n,
      placementDivId: i,
      timestamp: a,
    }) {
      r({
        latencyEvent: e.csmKey,
        scope: e.csmMessage,
        placement: { id: t, name: n },
        timestamp: a,
      }),
        v(document.getElementById(i), e.csaKey, a)
    }
  }
  const g = () => new f()
  function y(e, t, n) {
    var i,
      a = n || {},
      o = a.noTrailing,
      s = void 0 !== o && o,
      r = a.noLeading,
      d = void 0 !== r && r,
      l = a.debounceMode,
      c = void 0 === l ? void 0 : l,
      m = !1,
      p = 0
    function h() {
      i && clearTimeout(i)
    }
    function u() {
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
      var r = this,
        l = Date.now() - p
      function u() {
        ;(p = Date.now()), t.apply(r, a)
      }
      function w() {
        i = void 0
      }
      m ||
        (d || !c || i || u(),
        h(),
        void 0 === c && l > e
          ? d
            ? ((p = Date.now()), s || (i = setTimeout(c ? w : u, e)))
            : u()
          : !0 !== s && (i = setTimeout(c ? w : u, void 0 === c ? e - l : e)))
    }
    return (
      (u.cancel = function (e) {
        var t = (e || {}).upcomingOnly,
          n = void 0 !== t && t
        h(), (m = !n)
      }),
      u
    )
  }
  const b =
      (e, t, n) =>
      (...i) => {
        try {
          e(...i)
        } catch (a) {
          null == t || t(n || 'Error in handler', a)
        }
      },
    I = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/,
    E = (e) => I.test(e),
    M = (e) => (E(e) ? A(e) : e),
    S = (e) => (E(e) ? e : k(e)),
    k = (e) => btoa(unescape(encodeURIComponent(e))),
    A = (e) => decodeURIComponent(escape(atob(e))),
    T = (e) => e && 0 === Object.keys(e).length && e.constructor === Object
  var x = function (t, n, i) {
      var s, r, d, l, c, m
      if ((void 0 === i && (i = 1), !D()))
        return (
          (window.safeframe = null !== (s = window.safeframe) && void 0 !== s ? s : {}),
          (window.safeframe.csmCache =
            null !== (r = window.safeframe.csmCache) && void 0 !== r ? r : {}),
          (window.safeframe.csmCache.incrementCsmPlacementCounter =
            null !== (d = window.safeframe.csmCache.incrementCsmPlacementCounter) && void 0 !== d
              ? d
              : []),
          void window.safeframe.csmCache.incrementCsmPlacementCounter.push({
            metric: t,
            placement: n,
            count: i,
          })
        )
      null ===
        (m =
          null === (c = null === (l = window.safeframe) || void 0 === l ? void 0 : l.csmCache) ||
          void 0 === c
            ? void 0
            : c.incrementCsmPlacementCounter) ||
        void 0 === m ||
        m.forEach(function (e) {
          return x(e.metric, e.placement, e.count)
        })
      var p = function (e, t, n) {
        t && L(''.concat(z(e), ':').concat(t), n)
      }
      p(t, n.id, i), p(t, o(n.id), i), p(t, e(n.name), i), p(t, a(e(n.name)), i)
    },
    N = function (e, t) {
      var n, i, a, o, s, r
      if ((void 0 === t && (t = 1), !D()))
        return (
          (window.safeframe = null !== (n = window.safeframe) && void 0 !== n ? n : {}),
          (window.safeframe.csmCache =
            null !== (i = window.safeframe.csmCache) && void 0 !== i ? i : {}),
          (window.safeframe.csmCache.incrementCsmCounter =
            null !== (a = window.safeframe.csmCache.incrementCsmCounter) && void 0 !== a ? a : []),
          void window.safeframe.csmCache.incrementCsmCounter.push({ metric: e, count: t })
        )
      null ===
        (r =
          null === (s = null === (o = window.safeframe) || void 0 === o ? void 0 : o.csmCache) ||
          void 0 === s
            ? void 0
            : s.incrementCsmCounter) ||
        void 0 === r ||
        r.forEach(function (e) {
          return N(e.metric, e.count)
        }),
        L(z(e), t)
    },
    D = function () {
      var e
      return (
        'function' ==
        typeof (null === (e = null === window || void 0 === window ? void 0 : window.ue) ||
        void 0 === e
          ? void 0
          : e.count)
      )
    },
    L = function (e, t) {
      var n
      return null === (n = null === window || void 0 === window ? void 0 : window.ue) ||
        void 0 === n
        ? void 0
        : n.count(e, t)
    },
    C = 'adplacements',
    z = function (e) {
      return e.startsWith(C) ? e : ''.concat(C, ':').concat(e)
    }
  const _ = (e, t) => {
      const n = e,
        i = n[t].options
      if (T(n)) return N('getiframe:admap:empty'), null
      if (T(i)) return N('getiframe:addetails:empty'), null
      ;(n[t] && !T(n[t])) || N('getiframe:admap:adinfo:undefinedorempty')
      const a = `ape_${i.scope}_iframe`
      var o, s
      n[t].iframe
        ? (
            null === (s = n[t]) || void 0 === s || null === (o = s.iframe) || void 0 === o
              ? void 0
              : o.innerHTML
          )
          ? N('getiframe:admap:iframe:innerhtml:exist')
          : (N('getiframe:admap:iframe:innerhtml:undefined'),
            (n[t].iframe = document.getElementById(a)),
            document.getElementById(a) || N('getiframe:getElementById:undefined'))
        : N('getiframe:admap:iframe:undefined')
      return n[t].iframe
    },
    F = [{ p: 50, t: 2, def: 'iab' }],
    R = [
      { p: 0, t: 0, def: 'amzn' },
      { p: 50, t: 1, def: 'iab' },
      { p: 100, t: 1, def: 'groupm' },
    ],
    H = [
      { p: 0, t: 0, def: 'amzn' },
      { p: 30, t: 1, def: 'iab' },
      { p: 100, t: 1, def: 'groupm' },
    ],
    B = () => window.innerHeight || document.documentElement.clientHeight,
    W = () => window.innerWidth || document.documentElement.clientWidth,
    $ = (e) => e.getBoundingClientRect().top - B(),
    O = (e, t) => ({ t: e.top, l: e.left, r: e.right, b: e.bottom, w: e.width, h: e.height, z: t }),
    U = (e) => {
      const t = e.getBoundingClientRect()
      return O(t, Number(window.getComputedStyle(e, null).zIndex))
    },
    q = (e) => {
      const t = G(e)
      return {
        t: e.t,
        l: e.l,
        r: e.r,
        b: e.b,
        w: e.w,
        h: e.h,
        z: e.z,
        xiv: t.xiv,
        yiv: t.yiv,
        iv: t.iv,
      }
    },
    V = () => {
      const e = window.screenY ? window.screenY : window.screenTop,
        t = window.screenX ? window.screenX : window.screenLeft,
        n = W(),
        i = B()
      return { t: e, l: t, w: n, h: i, b: e + i, r: t + n }
    },
    J = (e) => {
      const t = V(),
        n = ((e) => q(U(e)))(e),
        i = j(e)
      return {
        atf: Y(e),
        geom: { win: t, self: n, exp: i },
        payload: {
          wh: t.h,
          ww: t.w,
          sx: window.scrollX,
          sy: window.scrollY,
          ah: n.h,
          aw: n.w,
          top: n.t,
          left: n.l,
        },
      }
    },
    Y = (e) => {
      const t = (function (e) {
        const t = document.body.getBoundingClientRect()
        if (X(t)) return null
        const n = U(e),
          i = B(),
          a = W(),
          o = Math.max(0, Math.min(t.left + a, n.r) - n.l),
          s = Math.max(0, Math.min(t.top + i, n.b) - n.t),
          r = (o * s) / (n.h * Math.min(n.w, a))
        return Number(Math.min(1, Math.max(0, r)).toFixed(2))
      })(e)
      return null == t ? 'unknown' : t >= 0.5
    },
    X = (e) => 0 === e.width && 0 === e.height
  const G = (e) => {
      const t = W(),
        n = B(),
        i = Math.max(0, Q(e.t, e.b, n)),
        a = Math.max(0, Q(e.l, e.r, t)),
        o = i * a,
        s = e.h * Math.min(e.w, t)
      return 0 !== s || 0 !== o
        ? {
            xiv: Number(Math.min(1, a / e.w).toFixed(2)),
            yiv: Number(Math.min(1, i / e.h).toFixed(2)),
            iv: Number(Math.min(1, Math.max(0, o / s)).toFixed(2)),
          }
        : { xiv: 0, yiv: 0, iv: 0 }
    },
    j = (e) => {
      const t = e.getBoundingClientRect()
      return K(t)
    },
    K = (e) => ({
      t: e.top,
      l: e.left,
      r: W() - e.right,
      b: B() - e.bottom,
      xs: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) > W() ? 1 : 0,
      yx: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) > B() ? 1 : 0,
    }),
    Z = (e) => K(e),
    Q = (e, t, n) => {
      let i = 0
      return 'visible' !== document.visibilityState
        ? i
        : ((i = e > 0 ? n - e : t > 0 ? Math.min(t, n) : 0), Math.min(i, t - e))
    },
    ee = (e, t) => {
      const n = U(e),
        i = U(t),
        a = W(),
        o = B()
      return (
        n &&
        i &&
        (Math.abs(n.t - i.b) < o || Math.abs(n.b - i.t) < o) &&
        (Math.abs(n.l - i.r) < a || Math.abs(n.r - i.l) < a)
      )
    },
    te = (e, t) => {
      const n = parseInt(t.height) * parseInt(t.width) >= 242500
      return 'V' === e ? F : n ? H : R
    },
    ne = (e) => {
      const t = ie(e),
        n = V(),
        i = q(O(t, NaN))
      return {
        atf: 'unknown',
        geom: { win: n, self: i, exp: Z(t) },
        payload: {
          wh: n.h,
          ww: n.w,
          sx: window.scrollX,
          sy: window.scrollY,
          ah: i.h,
          aw: i.w,
          top: i.t,
          left: i.l,
        },
      }
    },
    ie = (e) => {
      const t = e.initialBoundingRect,
        n = t.top - (window.scrollY - e.originalScrollY),
        i = n + e.adHeight,
        a = t.left - (window.scrollX - e.originalScrollX)
      return {
        top: n,
        bottom: i,
        left: a,
        right: a + e.adWidth,
        width: e.adWidth,
        height: e.adHeight,
      }
    },
    ae = 'btr_client',
    oe = async (e, t) => {
      let n, i
      return new Promise((a) => {
        ;(i = a),
          (n = new IntersectionObserver((t) => {
            t.forEach((t) => {
              t.target === e && t.isIntersecting && (i(t), n.unobserve(e))
            })
          }, t)),
          n.observe(e)
      })
    },
    se = 'sfImpression',
    re = 'LightAdImpression',
    de = 'viewablelatency',
    le = (e, t, n) => ({ csaKey: e, csmKey: t, csmMessage: n }),
    ce = le('bodyBegin', 'bb', se),
    me =
      (le('bodyBegin', 'bb', re),
      le('bodyEnd', 'be'),
      le('clickToATF', 'af'),
      le('criticalFeature', 'cf'),
      le('criticalFeature', 'cf', se),
      le('criticalFeature', 'cf', re),
      le('loaded', 'ld'),
      le('loaded', 'ld', se),
      le('loaded', 'ld', re),
      le('viewablelatency:bodyBegin', 'bb', de)),
    pe = le('viewablelatency:loaded', 'ld', de),
    he = (e) =>
      null == e
        ? void 0
        : e
            .replace('criticalFeature', '')
            .replace('windowOnLoad', '')
            .replace('spATFEvent', '')
            .replace('r2OnLoad', '')
            .replace('aboveTheFold', '')
            .replace('af', ''),
    ue = (e) => {
      const t = he(e)
      return '' === t || 'immediate' === t
    },
    we = async (e, t) => {
      e = he(null != e ? e : '')
      const n = 'undefined' != typeof P,
        i = /^reached(\d{1,5}px)FromTop$/g.exec(e)
      if (!ue(e)) {
        if (e.match('[^:]+:.+')) {
          const t = e.split(':'),
            i = t[1],
            a = t.length > 2 ? t[2] : i
          if (n) return await new Promise((e) => P.when(a, 'A').execute(e))
          throw new Error('Need AUI or AmazonJQ installed')
        }
        return e.match(/^\d{1,4}px$/g)
          ? await fe(parseInt(e, 10), t, (e, t) => {
              const n = $(e)
              return e && n <= t
            })
          : i
            ? await fe(parseInt(i[1], 10), t, ve)
            : void h(`Unknown delay pattern ${e}`)
      }
    },
    ve = (e, t) => window.scrollY + B() >= t,
    fe = async (e, t, n) =>
      new Promise((i) => {
        const a = () => {
            n(t, e) &&
              (i(),
              window.removeEventListener('scroll', o),
              window.removeEventListener('resize', o))
          },
          o = b(
            y(20, () => {
              a()
            }),
            h,
          )
        window.addEventListener('scroll', o), window.addEventListener('resize', o), a()
      }),
    ge = (e, t, n, i, a, o) => {
      const s = null == e ? void 0 : e[t]
      ;(null == s ? void 0 : s.valid) &&
        ((s.loaded = !0),
        s.viewed &&
          (g().sendLatencyMetric({
            latencyMetricType: pe,
            placementId: i,
            placementName: n,
            placementDivId: a,
            timestamp: new Date(o),
          }),
          x('htmlviewed:loaded', { id: i, name: n })))
    },
    ye = (e) => {
      window.addEventListener('scroll', e),
        window.addEventListener('resize', e),
        document.addEventListener('visibilitychange', e)
    }
  class be {
    constructor(e, t) {
      ;(this.weblabsWindow = e),
        (this.prefix = t),
        (this.isT1 = () => 't1' === this.weblabTreatment()),
        (this.isT2 = () => 't2' === this.weblabTreatment()),
        (this.isT3 = () => 't3' === this.weblabTreatment()),
        (this.isT4 = () => 't4' === this.weblabTreatment()),
        (this.isT5 = () => 't5' === this.weblabTreatment()),
        (this.weblabTreatment = () => {
          var e, t, n
          return null === (n = this.weblabsWindow) ||
            void 0 === n ||
            null === (t = n.renderingWeblabs) ||
            void 0 === t ||
            null === (e = t[this.prefix]) ||
            void 0 === e
            ? void 0
            : e.toLowerCase()
        })
    }
  }
  const Ie = () => new be(window, 'ADPT_SF_TRANSPARENCY_INFO_MANDATORY_FOR_EU_712921'),
    Ee = () => new be(window, 'ADPT_SF_FIXED_POS_INT_OBSERVER_1106762'),
    Me = async (e, t) => {
      t.options.firePixelsAfter && (await we(t.options.firePixelsAfter, t.placement)),
        e.sendMessageToAd(t.options.arid, 'fireImpression', {
          measurementMethod: 'cod_client',
          isNoInventory: !1,
        })
    },
    Se = async (e, t) => {
      const n = _(e, t),
        i = { root: ke(n) ? null : document.documentElement }
      await oe(n, i)
    },
    ke = (e) => {
      if (Ee().isT1()) {
        let t = e
        for (; t; ) {
          if ('fixed' === window.getComputedStyle(t, null).getPropertyValue('position')) return !0
          t = t.parentElement
        }
        return !1
      }
      if (Ee().isT2()) {
        return !!document.querySelector('[data-adpt-sf-fixed-position]')
      }
      return !1
    },
    Ae = (e, t, n) => {
      const i = t[n].options,
        a = _(t, n),
        o = te(i.mediaType, i.size)
      if (a) {
        const t = J(a)
        ;(t.viewabilityStandards = o), e.sendMessageToAd(n, 'updateViewability', t)
      }
    },
    Te = (e, t, n, i) => {
      const a = t[n].options,
        o = te(a.mediaType, a.size),
        s = ne(i)
      ;(s.viewabilityStandards = o), e.sendMessageToAd(n, 'updateViewability', s)
    },
    xe = (e, t) => {
      const n = _(e, t)
      return {
        initialBoundingRect: (i = n).getBoundingClientRect(),
        adHeight: i.offsetHeight,
        adWidth: i.offsetWidth,
        originalScrollX: window.scrollX,
        originalScrollY: window.scrollY,
      }
      var i
    },
    Ne = async (e, t, n, i) => {
      n.options.firePixelsAfter && (await we(n.options.firePixelsAfter, n.placement)),
        await Se(t.adMap, n.options.arid),
        i.measurementMethod === ae &&
          e.sendMessageToAd(n.options.arid, 'fireImpression', {
            measurementMethod: ae,
            isNoInventory: i.isNoInventory,
          }),
        De(e, t, n, i.isNoInventory)
    },
    De = (e, t, n, i) => {
      i
        ? ((e, t, n) => {
            const i = xe(t.adMap, n.options.arid)
            ;(t.adMap[n.options.arid].noInventorySlotSnapshot = i),
              Te(e, t.adMap, n.options.arid, i),
              e.sendMessageToAd(n.options.arid, 'handleFallbackBehavior', {})
            const a = t.ADS_HANDLERS[n.options.arid]
            ;(a.noInventoryViewabilityTracker = () => {
              y(20, Te)(e, t.adMap, n.options.arid, i)
            }),
              ye(a.noInventoryViewabilityTracker)
          })(e, t, n)
        : ((e, t, n) => {
            Ae(e, t.adMap, n.options.arid)
            const i = t.ADS_HANDLERS[n.options.arid]
            ;(i.viewabilityTracker = () => {
              y(50, Ae)(e, t.adMap, n.options.arid)
            }),
              ye(i.viewabilityTracker),
              new IntersectionObserver(
                () => {
                  Ae(e, t.adMap, n.options.arid)
                },
                { threshold: [0, 0.5, 1] },
              ).observe(n.placement)
          })(e, t, n)
    },
    Le = ({ height: e, width: t, targetWidth: n }) =>
      0 === t || isNaN(e) || isNaN(t) || isNaN(n) ? 0 : Math.round((n * e) / t),
    Pe = (e) => (!e || Ce(e) || ze(e) ? e : e + 'px'),
    Ce = (e) => e.length > 1 && '%' === e.charAt(e.length - 1),
    ze = (e) => e.length > 2 && 'px' === e.substring(e.length - 2),
    _e = (e) => (Ce(e) ? e : `${parseInt(e)}px`),
    Fe = (e, t) => {
      const n = new Set([
        'bf4ab3db-618a-4853-ae89-3ad3bd17df16',
        'dd4c5e61-fe9a-4d91-9deb-25fa60557719',
        'da326e4a-90bd-4da3-a526-53301eb2c6a0',
        'ca609359-3cb9-4984-8830-231c22e978d3',
        '15554fd8-4c3e-45c6-ae61-84c65966f5d1',
        '1396c5b8-45a1-4618-9a09-0b84209807f9',
        'd9fb239d-fcde-414f-98a8-409c81052388',
        'b60ea84b-3e24-44dc-9fdb-35bb2fb1fe5c',
        '75b4c7aa-4c22-49d3-8371-15ca116eaf1f',
        'ef368293-2611-4cef-8050-4fcd9b97f12e',
        'db5cbac6-5194-4b52-9929-9ec0bbfed990',
        '6479c6f3-a9c2-4d7c-9d1a-45008113fe0c',
      ])
      new be(window, 'A2I_HOMEPAGE_CARD_THEMING_360311').isT1() &&
        n.has(e) &&
        (t && (t.style.background = 'linear-gradient(to right, #FFD07E, #EA7867)'),
        t && (t.style.margin = '0px'))
    },
    Re = 'nav-ewc-persistent-hover',
    He = () => null !== document.querySelector(`.${Re}`),
    Be = (e) =>
      'attributes' === e.type && 'class' === e.attributeName && e.target.classList.contains(Re),
    We = (e) => {
      if (He()) return void $e(e)
      new MutationObserver((t, n) => {
        if (t.some(Be))
          try {
            $e(e), n.disconnect()
          } catch (i) {
            h('Failed to resize ILM for EWC.', i)
          }
      }).observe(window.document.documentElement, { attributes: !0, attributeFilter: ['class'] })
    },
    $e = (e) => {
      const t = document.querySelector('div#nav-flyout-ewc')
      if (null === e || null === t)
        return void h(`could not find placementDiv (value was: ${e}) or ewc (value was: ${t})`)
      const n = t.offsetWidth
      Oe(e, n)
    },
    Oe = (e, t) => {
      var n, i
      const a = document.createElement('style')
      ;(a.innerHTML = `@media screen and (min-width: 1500px) { div[id$=${e.id}] {\n        width: calc(100vw - ${t + 5}px) !important;\n        margin-left: calc(-50vw + 50% + ${t / 2}px) !important;\n        margin-right: calc(-50vw + 50% + ${t / 2}px) !important;\n    `),
        null === (i = document) ||
          void 0 === i ||
          null === (n = i.body) ||
          void 0 === n ||
          n.appendChild(a)
    }
  class Ue {
    resize(e) {
      var t
      if (!this.isAllowedSize(e))
        return void h(`Size w:'${e.width}', h:'${e.height}' is not allow-listed for '${this.name}'`)
      const n = this.wrapperDiv,
        i = this.div,
        a = this.safeframe
      null == n || n.removeAttribute('style'),
        n && (n.style.overflow = 'hidden'),
        n && (n.style.backgroundColor = 'white'),
        i.removeAttribute('style'),
        (i.style.lineHeight = '0'),
        !n && (i.style.marginBottom = '20px'),
        (i.style.marginLeft = 'auto'),
        (i.style.marginRight = 'auto'),
        (i.style.maxHeight = 'inherit'),
        (i.style.maxWidth = n ? 'min(100vh, 100vw)' : 'inherit'),
        (i.style.position = 'relative'),
        (a.style.height = '100%'),
        (a.style.width = '100%'),
        a.removeAttribute('height'),
        a.removeAttribute('width'),
        a.style.removeProperty('min-width'),
        a.style.removeProperty('max-height'),
        a.style.removeProperty('padding-bottom'),
        null === (t = this.card) || void 0 === t || t.style.setProperty('padding', '0'),
        Ce(e.height) || Ce(e.width)
          ? ((i.style.height = _e(e.height)), (i.style.width = _e(e.width)))
          : (i.style.aspectRatio = `${parseInt(e.width)} / ${parseInt(e.height)}`),
        this.resizeHandleSpecialCases(e),
        Fe(this.id, this.wrapperDiv)
    }
    collapse() {
      this.wrapperDiv && (this.wrapperDiv.style.display = 'none'), (this.div.style.display = 'none')
    }
    resizeHandleSpecialCases(e) {
      const t = this.div
      if (Je(this.slotName, e)) t.style.maxWidth = _e(e.width)
      else if (Ve(this.slotName)) {
        var n
        const e = this.wrapperDiv
        null == e || e.style.setProperty('width', '100vw'),
          null == e || e.style.setProperty('margin-left', 'calc(-50vw + 50%)'),
          t.style.removeProperty('aspect-ratio'),
          t.style.removeProperty('max-width'),
          (t.style.height = '50px'),
          null === (n = t.closest('.a-container')) ||
            void 0 === n ||
            n.style.setProperty('padding-top', '0')
      } else if (qe(this.slotName)) {
        t.style.removeProperty('aspect-ratio'),
          t.style.removeProperty('max-width'),
          (t.style.height = '55px'),
          (t.style.width = '100vw'),
          (t.style.marginLeft = 'calc(-50vw + 50%)'),
          He() && ((t.style.width = '100%'), t.style.removeProperty('margin-left'))
        const e = document.createElement('style')
        ;(e.innerHTML = `@media screen and (max-width: 1000px) {div[id$=${this.div.id}] { width: 100% !important; margin-left: 0 !important; }}`),
          this.div.prepend(e)
        const n = document.createElement('style')
        ;(n.innerHTML = `#${t.id}_Feedback { margin-right: 10px; }`), t.prepend(n)
      } else
        ('alm-morrisons-storefront-desktop-ad-1' !== this.slotName &&
          'alm-morrisons-storefront-desktop-ad-2' !== this.slotName &&
          'alm-monoprix-storefront-desktop-ad-1' !== this.slotName &&
          'alm-monoprix-storefront-desktop-ad-2' !== this.slotName &&
          'alm-dia-storefront-desktop-ad-1' !== this.slotName &&
          'alm-dia-storefront-desktop-ad-2' !== this.slotName &&
          'alm-storefront-desktop-ad-1' !== this.slotName &&
          'alm-storefront-desktop-ad-2' !== this.slotName &&
          'alm-wfm-storefront-desktop-ad-1' !== this.slotName &&
          'alm-wfm-storefront-desktop-ad-2' !== this.slotName) ||
          ((this.div.style.maxWidth = '300px'),
          (this.div.style.marginTop = '47px'),
          this.div.style.removeProperty('margin-left'),
          this.div.style.removeProperty('margin-right'))
    }
    get wrapperDiv() {
      return this.wrapperDivId ? document.getElementById(this.wrapperDivId) : null
    }
    get div() {
      return document.getElementById(this.divId)
    }
    get safeframe() {
      return document.getElementById(this.safeframeId)
    }
    get card() {
      return document.getElementById(`ape_${this.name}_aui_card`)
    }
    constructor(e, t, n, i, a, o, s) {
      ;(this.id = e),
        (this.name = t),
        (this.wrapperDivId = n),
        (this.divId = i),
        (this.safeframeId = a),
        (this.slotName = o),
        (this.allowedSizes = s),
        (this.isAllowedSize = (e) =>
          this.allowedSizes.some((t) => _e(e.height) === t.height && _e(e.width) === t.width))
    }
  }
  const qe = (e) =>
      'desktop-detail-ilm' === e ||
      'fresh-desktop-detail-ilm' === e ||
      'wfm-desktop-detail-ilm' === e ||
      'vindp-desktop-atf-ilm' === e,
    Ve = (e) =>
      'mobile-detail-ilm' === e ||
      'mobile-app-detail-ilm' === e ||
      'fresh-mobile-detail-ilm' === e ||
      'fresh-mobile-detail-ilm-v1' === e ||
      'wfm-mobile-detail-ilm-v1' === e,
    Je = (e, t) =>
      970 === parseInt(t.width) ||
      980 === parseInt(t.width) ||
      728 === parseInt(t.width) ||
      'merchandised-search-top-1' === e ||
      'merchandised-search-7' === e ||
      'gwm-atf-dashboard' === e ||
      'auto-left-advertising-1' === e ||
      'auto-left-advertising-2' === e,
    Ye = (e) => Xe(e, []),
    Xe = (e, t) => {
      var n
      return new Ue(
        e.placementId,
        e.placementName,
        e.adUnitWrapperId,
        e.adUnitPlacementId,
        e.adUnitIframeId,
        e.slotName,
        (null !== (n = e.allowedSizes) && void 0 !== n ? n : [])
          .concat({ height: _e(e.size.height), width: _e(e.size.width) })
          .concat(t.map((e) => ({ height: _e(e.height), width: _e(e.width) }))),
      )
    },
    Ge = 'expanded-feedback-label',
    je = 'expanded-safeframe',
    Ke = 'expandable-ads-styles',
    Ze = (e, t, n) => {
      const i = ot(t, Ye(e.options).div.offsetWidth),
        a = { height: Pe(i), width: Pe(e.options.size.width) },
        o = Xe(e.options, [a])
      o.resize(a), at(e.options), tt(e.options), (o.div.style.height = a.height), st(e, n, et)
    },
    Qe = (e, t, n) => {
      const i = Ye(e.options).div.offsetHeight
      Ze(e, t, n)
      const a = Ye(e.options)
      ;(a.div.style.zIndex = '2'),
        (a.div.style.position = 'relative'),
        a.div.parentElement && a.div.parentElement.style.removeProperty('overflow'),
        a.div.parentElement && (a.div.parentElement.style.height = i + 'px')
    },
    et = (e) => {
      Ye(e.options).resize(e.options.size), it(e.options)
    },
    tt = (e) => {
      const t = document.getElementById(e.adUnitIframeId),
        n = nt(t)
      if (null === n || null === t)
        throw new Error(
          `feedbackWrapper: ${n ? 'present' : 'missing'}, safeFrame: ${t ? 'present' : 'missing'}`,
        )
      n.classList.add(Ge), t.classList.add(je)
    },
    nt = (e) => {
      var t
      let n = null == e ? void 0 : e.parentElement
      return (
        (null == n || null === (t = n.parentElement) || void 0 === t
          ? void 0
          : t.id.endsWith('_wrapper')) && (n = n.parentElement),
        n.querySelector('div[id$=_Feedback]')
      )
    },
    it = (e) => {
      const t = document.getElementById(e.adUnitIframeId),
        n = nt(t)
      null !== n && null !== t && (n.classList.remove(Ge), t.classList.remove(je))
    },
    at = (e) => {
      ;((e) => {
        if (null !== document.querySelector(`#${Ke}`)) return
        const t = document.createElement('style')
        ;(t.id = Ke),
          (t.innerHTML = `\n        div.${Ge} {\n            background-color: white;\n            z-index: 2;\n            margin-top: 0px !important;\n            padding-top: 2px !important;\n        }`),
          document.getElementById(e.adUnitPlacementId).appendChild(t)
      })(e)
    },
    ot = (e, t) =>
      (e.staticHeight ? parseInt(e.staticHeight, 10) : 0) +
      (Ce(e.width)
        ? parseInt(e.height, 10)
        : Le({ height: parseInt(e.height, 10), width: parseInt(e.width, 10), targetWidth: t })),
    st = (e, t, n) => {
      const i = (i) => {
        rt(i, e, t), n(e)
      }
      window.addEventListener('scroll', i, { once: !0 }),
        window.addEventListener('click', i, { once: !0 }),
        window.addEventListener('swipe', i, { once: !0 }),
        window.addEventListener('tap', i, { once: !0 })
    },
    rt = (e, t, n) => {
      n.sendMessageToAd(t.options.arid, 'triggerEventInIframe', { eventType: e.type })
    },
    dt = (e) => e + '_Feedback'
  class lt {
    async addSponsoredLabelWithFeedbackLink(e, t) {
      e.appendChildTo(this.parentHtmlId, this)
      const n = await t.getSponsoredLabelAndFeedbackLink(this.urlPathAndParameter)
      if (!(null == n ? void 0 : n.isOk()))
        throw new Error(`Result from the feedback service was not ok ${this.urlPathAndParameter}`)
      e.updateElement(this.getHtmlId(), n)
    }
    getHtmlId() {
      return dt(this.parentHtmlId)
    }
    isHidden() {
      return this.hidden
    }
    exists(e) {
      return e.exists(this.getHtmlId())
    }
    constructor(e, t, n, i, a, o, s) {
      ;(this.parentHtmlId = e),
        (this.feedbackStyle = t),
        (this.labelText = n),
        (this.labelStyle = i),
        (this.position = a),
        (this.urlPathAndParameter = o),
        (this.hidden = s)
    }
  }
  class ct {
    open(e) {
      e.clickChildLink(this)
    }
    getHtmlId() {
      return dt(this.parentHtmlId)
    }
    constructor(e) {
      this.parentHtmlId = e
    }
  }
  class mt {
    async createSponsoredLabelWithFeedbackLink(e, t) {
      if (!e.exists(this.feedbackHtmlPort)) {
        t.request()
        try {
          await e.addSponsoredLabelWithFeedbackLink(this.feedbackHtmlPort, this.feedbackApiPort),
            t.success(),
            e.isHidden() || t.labelRenderedHost()
        } catch (n) {
          throw (t.error(), n)
        }
      }
    }
    openModal(e) {
      e.open(this.feedbackHtmlPort)
    }
    labelRendered(e) {
      e.labelRenderedCreative()
    }
    removeSponsoredLabelAndFeedbackLink(e) {
      try {
        var t
        null === (t = document.getElementById(dt(e))) || void 0 === t || t.remove()
      } catch (n) {
        h('Unable to remove AdFeedback Div', n)
      }
    }
    logTransparencyInfoMissing(e) {
      e.transparencyInfoMissing()
    }
    constructor(e, t) {
      ;(this.feedbackHtmlPort = e), (this.feedbackApiPort = t)
    }
  }
  var pt = function (e) {
      if (window.csa)
        try {
          window.csa('Events', { producerId: 'adplacements' })('setEntity', {
            adCreativeMetaData: e,
          })
        } catch (t) {
          h("Error with 'setEntity' CSA", t)
        }
    },
    ht = function (e, t, n) {
      if ((void 0 === n && (n = 1), window.csa))
        try {
          window.csa('Events', { producerId: 'adplacements' })(
            'log',
            {
              schemaId: 'ApeSafeframe.csaEvent.1',
              metricName: e + ':' + t.name + ':' + t.id,
              metricValue: n,
            },
            { ent: 'all' },
          )
        } catch (i) {
          h("Error with 'logCsaEvent' CSA", i)
        }
    }
  const ut = (e) => new Tt(e),
    wt = 'adfeedback_request',
    vt = 'adfeedback_success',
    ft = 'adfeedback_error',
    gt = 'adfeedback_sponsoredlabelrendered_creative',
    yt = 'adfeedback_sponsoredlabelrendered_host',
    bt = 'adfeedback:request',
    It = 'adfeedback:success',
    Et = 'adfeedback:error',
    Mt = 'adfeedback:sponsoredlabelrendered:creative',
    St = 'adfeedback:sponsoredlabelrendered:host',
    kt = 'adfeedback:sponsoredlabelrendered',
    At = 'adfeedback:transparencyinfo:missing'
  class Tt {
    request() {
      x(bt, this.placement), N(bt), ht(wt, this.placement)
    }
    success() {
      x(It, this.placement), N(It), ht(vt, this.placement)
    }
    error() {
      x(Et, this.placement), ht(ft, this.placement)
    }
    labelRenderedCreative() {
      x(Mt, this.placement), N(kt), ht(gt, this.placement)
    }
    labelRenderedHost() {
      x(St, this.placement), N(kt), ht(yt, this.placement)
    }
    transparencyInfoMissing() {
      x(At, this.placement), N(At)
    }
    constructor(e) {
      this.placement = e
    }
  }
  class xt {
    isOk() {
      return 'ok' === this.status
    }
    constructor(e, t, n) {
      ;(this.status = e), (this.html = t), (this.script = n)
    }
  }
  class Nt {
    async getSponsoredLabelAndFeedbackLink(e) {
      const t = await fetch(this.windowRepo.origin() + e)
      if (t.ok) {
        const e = await t.json()
        return new xt(e.status, e.html, e.script)
      }
      throw Error('Could not fetch the feedback html/link/script/label')
    }
    constructor(e) {
      this.windowRepo = e
    }
  }
  class Dt {
    appendChildTo(e, t) {
      var n, i
      function a(e, t) {
        const n = document.createElement('div')
        return (
          n.setAttribute('id', t.getHtmlId()),
          n.classList.add('ape-feedback'),
          (n.style.position = 'relative'),
          (n.style.height = '20px'),
          (n.style.textAlign = n.id.includes('hero-quick-promo_Desktop_placement_Feedback')
            ? 'left'
            : 'right'),
          (n.style.padding = '0'),
          (n.style.marginTop = '2px'),
          (n.style.display = t.feedbackStyle.display),
          e.endsWith('_wrapper') &&
            (!e.includes('-ilm') && (n.style.maxWidth = 'min(100vh, 100vw)'),
            (n.style.marginLeft = 'auto'),
            (n.style.marginRight = 'auto'),
            (n.style.padding = '0 5px')),
          n.append(
            (function (e) {
              const t = document.createElement('div')
              return (t.innerHTML = e.labelText), Lt(t, e.labelStyle), t
            })(t),
          ),
          n
        )
      }
      1 === t.position
        ? null === (n = document.getElementById(e)) || void 0 === n || n.prepend(a(e, t))
        : 0 === t.position &&
          (null === (i = document.getElementById(e)) || void 0 === i || i.append(a(e, t)))
    }
    updateElement(e, t) {
      const n = document.getElementById(e)
      if (n) {
        ;(n.innerHTML = t.html), Pt(n, t)
        for (const e of n.children)
          'DIV' === e.tagName
            ? e.removeAttribute('style')
            : 'A' === e.tagName &&
              (e.style.removeProperty('position'),
              e.style.removeProperty('top'),
              e.style.removeProperty('right'),
              e.style.removeProperty('display'))
      }
    }
    clickChildLink(e) {
      const t = document.getElementById(e.getHtmlId())
      for (const i of (null == t ? void 0 : t.children) || [])
        if ('A' === (n = i).tagName || 'DIV' === n.tagName) return void i.click()
      var n
    }
    exists(e) {
      return !!document.getElementById(e)
    }
  }
  const Lt = (e, t) => {
      for (const n in t) e.style.setProperty(n, t[n])
    },
    Pt = (e, t) => {
      Ct(e).innerHTML = t.script
    },
    Ct = (e) => {
      const t = document.createElement('script')
      return e.prepend(t), t
    },
    zt = { code: 'BE', hostname: 'www.amazon.com.be', name: 'Belgium' },
    _t = { code: 'FR', hostname: 'www.amazon.fr', name: 'France' },
    Ft = { code: 'DE', hostname: 'www.amazon.de', name: 'Germany' },
    Rt = { code: 'IT', hostname: 'www.amazon.it', name: 'Italy' },
    Ht = { code: 'NL', hostname: 'www.amazon.nl', name: 'Netherlands' },
    Bt = { code: 'PL', hostname: 'www.amazon.pl', name: 'Poland' },
    Wt = { code: 'ES', hostname: 'www.amazon.es', name: 'Spain' },
    $t = { code: 'SE', hostname: 'www.amazon.se', name: 'Sweden' },
    Ot = (e) => location.hostname === e.hostname,
    Ut = (e) =>
      !(Ot(zt) || Ot(_t) || Ot(Ft) || Ot(Rt) || Ot(Ht) || Ot(Bt) || Ot(Wt) || Ot($t)) || qt(e),
    qt = (e) => {
      var t, n, i, a, o, s
      const r = []
      Jt(
        null == e ||
          null === (i = e.url) ||
          void 0 === i ||
          null === (n = i.parameters) ||
          void 0 === n ||
          null === (t = n.adPlacementMetaData) ||
          void 0 === t
          ? void 0
          : t.slotName,
      ) && r.push('DSA Error: slotName missing')
      const d =
        null == e ||
        null === (s = e.url) ||
        void 0 === s ||
        null === (o = s.parameters) ||
        void 0 === o ||
        null === (a = o.adCreativeMetaData) ||
        void 0 === a
          ? void 0
          : a.adCreativeDetails
      ;(!d || d.length <= 0) && r.push('DSA Error: transparency info missing'),
        null == d || d.every((e) => Vt(e, r))
      for (const l of r) for (let e = 0; e < Yt(); e++) h(l)
      return r.length <= 0
    },
    Vt = (e, t) => {
      var n, i, a, o, s
      e.version || t.push('DSA Error: version missing'),
        Jt(e.advertiserIdNS) && t.push('DSA Error: advertiserIdNS missing'),
        (void 0 !== (null === (n = e.selectionSignals) || void 0 === n ? void 0 : n.context) &&
          null !== (null === (i = e.selectionSignals) || void 0 === i ? void 0 : i.context)) ||
          t.push('DSA Error: selectionSignals.context missing'),
        (void 0 !== (null === (a = e.selectionSignals) || void 0 === a ? void 0 : a.location) &&
          null !== (null === (o = e.selectionSignals) || void 0 === o ? void 0 : o.location)) ||
          t.push('DSA Error: selectionSignals.location missing'),
        Jt(null === (s = e.selectionSignals) || void 0 === s ? void 0 : s.pastActivity) &&
          t.push('DSA Error: selectionSignals.pastActivity missing')
    },
    Jt = (e) => !e || e.length <= 0,
    Yt = () =>
      Ie().isT1() ? 2 : Ie().isT2() ? 4 : Ie().isT3() ? 8 : Ie().isT4() ? 16 : Ie().isT5() ? 32 : 1,
    Xt = () => new Gt(new mt(new Dt(), new Nt({ origin: () => window.location.origin })))
  class Gt {
    async addSponsoredLabel({ parentHtmlId: e, placement: t, feedback: n }) {
      return Ut(n)
        ? (n.hidden &&
            (Object.assign(n.style, { display: 'none' }),
            Object.assign(n.label.style, { display: 'none' })),
          await this.feedbackService.createSponsoredLabelWithFeedbackLink(jt(e, n), ut(t)),
          !0)
        : (this.feedbackService.logTransparencyInfoMissing(ut(t)),
          h('Transparency Information missing'),
          !1)
    }
    openModal(e) {
      this.feedbackService.openModal(new ct(e))
    }
    labelRendered({ placement: e }) {
      this.feedbackService.labelRendered(ut(e))
    }
    removeSponsoredLabelAndFeedbackLink(e) {
      this.feedbackService.removeSponsoredLabelAndFeedbackLink(e)
    }
    constructor(e) {
      this.feedbackService = e
    }
  }
  const jt = (e, t) => {
      const n = JSON.parse(JSON.stringify(t.url.parameters))
      return (
        (n.adPlacementMetaData.pageUrl = S(n.adPlacementMetaData.pageUrl)),
        new lt(
          e,
          t.style,
          t.label.text,
          t.label.style,
          'TOP' === t.position ? 1 : 0,
          ((i = t.url.path), (a = encodeURIComponent(JSON.stringify(n))), i + '?pl=' + a),
          t.hidden,
        )
      )
      var i, a
    },
    Kt = (e) => {
      Xt().labelRendered({
        placement: { id: e.options.placementId, name: e.options.placementName },
      })
    },
    Zt = (e) => {
      Xt().openModal(e.options.adPlacementMetaData.adElementId)
    },
    Qt = (e) => {
      Xt().removeSponsoredLabelAndFeedbackLink(e.options.adPlacementMetaData.adElementId)
    },
    en = async (e) => Xt().addSponsoredLabel(tn(e)),
    tn = (e) => {
      const t = e.adPlacementMetaData,
        n = e.adFeedbackInfo
      var i
      return {
        parentHtmlId: null !== (i = e.adUnitWrapperId) && void 0 !== i ? i : e.adUnitPlacementId,
        placement: { id: e.placementId, name: e.placementName },
        feedback: {
          position: n.adFeedbackOnTop ? 'TOP' : 'BOTTOM',
          hidden: !n.boolFeedback,
          style: e.feedbackDivStyle,
          url: {
            path: n.endPoint,
            parameters: {
              adPlacementMetaData: {
                adElementId: t.adElementId,
                pageType: t.pageType,
                pageUrl: S(t.pageUrl),
                slotName: t.slotName,
              },
              adCreativeMetaData: e.adCreativeMetaData,
            },
          },
          label: { text: M(n.sponsoredText), style: e.advertisementStyle },
        },
      }
    },
    nn = 'gw-video-orchestrator',
    an = (e, t, n) => {
      var i
      null === (i = window.P) ||
        void 0 === i ||
        i.when(nn).execute((i) => {
          try {
            i.subscribe(e, t, n)
          } catch (a) {
            a instanceof Error
              ? p(`gw-video-orchestrator error: ${a.message}`)
              : p(`gw-video-orchestrator error: ${a}`)
          }
        })
    },
    on = (e) => {
      var t
      null === (t = window.P) ||
        void 0 === t ||
        t.when(nn).execute((t) => {
          t.elect(e)
        })
    }
  let sn = null
  function rn(e, t, n) {
    const i = (t) => {
      n.sendCustomMessageToAd(e.options.arid, 'videoAutoplayResponse', t)
    }
    var a
    ;(a = e.options.pageType) && 'gateway' === a.toLowerCase()
      ? an(e.iframe, i, t)
      : sn === e.options.arid
        ? i(!0)
        : null === sn &&
            (function (e) {
              const t = document.getElementsByTagName('video')
              for (let n = 0; n < t.length; ++n) if (!t[n].paused && ee(e, t[n])) return !1
              return !0
            })(e.iframe)
          ? ((sn = e.options.arid), i(!0))
          : i(!1)
  }
  function dn() {
    on(), (sn = null)
  }
  function ln(e) {
    var t
    ;(t = e.iframe), on(t), (sn = e.options.arid)
  }
  var cn = function (t, n, i) {
      mn() && (pn(hn(t, n.id, i)), pn(hn(t, e(n.name), i)))
    },
    mn = function () {
      var e
      return (
        'function' ==
        typeof (null === (e = null === window || void 0 === window ? void 0 : window.ue) ||
        void 0 === e
          ? void 0
          : e.tag)
      )
    },
    pn = function (e) {
      var t
      return null === (t = null === window || void 0 === window ? void 0 : window.ue) ||
        void 0 === t
        ? void 0
        : t.tag(e)
    },
    hn = function (e, t, n) {
      return ''.concat(e, ':').concat(t).concat(un(n))
    },
    un = function (e) {
      return e ? ':'.concat(e) : ''
    }
  const wn = 'aUAZqFtiIp6VxqpW3coqZ2JdZnV3RN9S8yKMRIdJ',
    vn = (e, t, n) => {
      fn(gn(e, n, yn(t)))
    },
    fn = (e) => {
      new be(window, 'ADPT_SF_METRICS_LOGGING_1100263').isT1() &&
        navigator.sendBeacon &&
        navigator.sendBeacon(
          `https://e5qq6zj76g.execute-api.us-east-1.amazonaws.com/metric?x-api-key=${wn}`,
          JSON.stringify(e),
        )
    },
    gn = (e, t, n) => ({ metricName: e, count: t, dimensions: n, xApiKey: wn }),
    yn = (e) => {
      var t, n
      return {
        app: 'SF',
        siteName: e.siteName,
        slotName: e.slotName,
        pageType: e.pageType,
        subPageType: e.subPageType,
        placementId: e.placementId,
        mediaType: e.mediaType,
        programId: null === (t = e.adCreativeMetaData) || void 0 === t ? void 0 : t.adProgramId,
        creativeTemplateName:
          null === (n = e.adCreativeMetaData) || void 0 === n ? void 0 : n.adCreativeTemplateName,
        deviceType: e.deviceType,
        userAgent: navigator.userAgent,
      }
    }
  class bn {
    constructor(e, t) {
      ;(this.hms = e),
        (this.hc = t),
        (this.changeSize = (e, t) => {
          vn('resize:size:changeSize', e.options)
          Ye(e.options).resize(t)
        }),
        (this.startBTRPixelTracking = async (e, t) => {
          await Ne(this.hms, this.hc, e, t)
        }),
        (this.fireImpressionWithDelay = async (e) => {
          await Me(this.hms, e)
        }),
        (this.logAPIInvocation = (e, t) => {
          const n = `messenger:${t.apiName}`
          N(n), x(n, { id: e.options.placementId, name: e.options.placementName })
        }),
        (this.logError = (e, t) => {
          h(t.message + ': ' + e.options.placementName, t.error)
        }),
        (this.logFatal = (e, t) => {
          var n, i
          ;(n = t.message + ': ' + e.options.placementName),
            (i = t.error),
            console.error(n, JSON.stringify(i)),
            u('FATAL', n, w(n, i))
        }),
        (this.logCsaEvent = (e, t) => {
          ht(t.metricName, { name: e.options.placementName, id: e.options.placementId })
        }),
        (this.addCsaEntity = (e, t) => {
          pt(t)
        }),
        (this.sendLatencyMetric = (e, t) => In(e, t)),
        (this.customMessage = (e, t) => {
          this.hms.customMessage(
            t.key,
            t.body,
            ['openPsAdPopover', 'openATCModal', 'setPartner', 'sendMetrics', 'wrap'],
            e.options.placementName,
            e.options.placementId,
          )
        }),
        (this.fireViewableLatencyMetrics = async (e, t) => {
          ge(
            this.hc.viewableLatencyTrackers,
            e.options.arid,
            e.options.placementName,
            e.options.placementId,
            e.options.adUnitPlacementId,
            t.adLoadedTimestamp,
          )
        }),
        (this.countMetric = (e, t) => {
          t.isGlobal
            ? N(t.metricMsg, t.value)
            : x(t.metricMsg, { id: e.options.placementId, name: e.options.placementName }, t.value)
        }),
        (this.addCsmTag = (e, t) => {
          var n, i
          t.isGlobal
            ? ((n = t.tag), (i = t.msg), mn() && pn(n + un(i)))
            : cn(t.tag, { id: e.options.placementId, name: e.options.placementName }, t.msg)
        }),
        (this.requestVideoAutoplay = async (e, t) => {
          rn(e, t, this.hms)
        }),
        (this.releaseVideoAutoplay = async () => {
          dn()
        }),
        (this.haveVideoAutoplayPermission = async (e) => {
          ln(e)
        }),
        (this.feedbackLabelRendered = (e) => {
          Kt(e)
        }),
        (this.feedbackOpenModal = (e) => {
          Zt(e)
        }),
        (this.handleFallbackExperience = async (e) => {
          Qt(e)
        }),
        (this.expandAdSlot = (e, t) => {
          Ze(e, t, this.hms)
        }),
        (this.expandAdSlotWithOverlap = (e, t) => {
          Qe(e, t, this.hms)
        }),
        (this.resetSlotSize = (e) => {
          et(e)
        }),
        (this.triggerEventInIframe = (e, t) => {
          this.hms.sendMessageToAd(e.options.arid, 'triggerEventInIframe', {
            eventType: t.event.type,
          })
        }),
        (this.safeFrameReady = (e) => {
          var t, n
          null === (n = performance) ||
            void 0 === n ||
            null === (t = n.mark) ||
            void 0 === t ||
            t.call(n, `SafeFrame:  safeFrameReady ${e.options.slotName}`),
            this.hms.sendMessageToAd(e.options.arid, 'setupComputedAdDetails', {
              computed: { aPageStart: window.aPageStart, adStartTime: new Date().getTime() },
            })
        })
    }
  }
  const In = (e, { latencyMetricType: t, timestamp: n }) => {
      g().sendLatencyMetric({
        latencyMetricType: t,
        placementName: e.options.placementName,
        placementId: e.options.placementId,
        placementDivId: e.options.adUnitPlacementId,
        timestamp: n,
      })
    },
    En = (e) => {
      const t = document.getElementById(e)
      void 0 !== t && t && (t.style.display = 'none')
    }
  class Mn extends bn {
    constructor(e, t) {
      super(e, t),
        (this.collapseSlot = async (e) => {
          var t, n
          ;(En(this.hc.AD_IDS[e.options.arid].placementDivId),
          En(this.hc.AD_IDS[e.options.arid].auiCardDeckId),
          'nav-sitewide-msg' === e.options.slotName) &&
            (await we('amznJQ.available:navbarJSLoaded', e.placement),
            'function' ==
              typeof (null === (n = parent) ||
              void 0 === n ||
              null === (t = n.navbar) ||
              void 0 === t
                ? void 0
                : t.unHideSWM) && parent.navbar.unHideSWM())
        })
    }
  }
  const Sn = 'adload:start',
    kn = (e, t, n) => (e > 0 ? n > e : t > 0),
    An = (e, t, n, i, a, o) => {
      var s, r, d
      const l =
        null === (d = document) ||
        void 0 === d ||
        null === (r = d.getElementById) ||
        void 0 === r ||
        null === (s = r.call(d, n)) ||
        void 0 === s
          ? void 0
          : s.getBoundingClientRect()
      if (l && kn(l.top, l.bottom, B()) && kn(l.left, l.right, W())) {
        if (
          (g().sendLatencyMetric({
            latencyMetricType: me,
            placementId: a,
            placementName: i,
            placementDivId: n,
            timestamp: new Date(),
          }),
          e[o].loaded)
        ) {
          g().sendLatencyMetric({
            latencyMetricType: pe,
            placementId: a,
            placementName: i,
            placementDivId: n,
            timestamp: new Date(),
          })
          const e = { id: a, name: i }
          x('adplacements:htmlviewed:loaded:', e), x('adplacements:htmlviewed', e)
        }
        ;(t.viewed = !0),
          (c = t.tracker),
          window.removeEventListener('scroll', c),
          window.removeEventListener('resize', c),
          document.removeEventListener('visibilitychange', c)
      }
      var c
    },
    Tn = (e, t, n, i, a) => {
      if (!e[a]) {
        e[a] = { valid: !1 }
        try {
          const o = e[a]
          An(e, o, t, n, i, a)
          const s = b(
            y(20, () => {
              An(e, o, t, n, i, a)
            }),
            h,
          )
          ye(s), (o.tracker = s), (o.valid = !0)
        } catch (o) {
          throw (h('Error initializing viewable latency instrumentation', o), o)
        }
      }
    },
    xn = (e) => {
      N('resize:size:request'),
        e.creative.size
          ? (e.creative.size.height === parseInt(e.size.height) &&
              e.creative.size.width === parseInt(e.size.width)) ||
            (N('resize:size:differ'), vn('resize:size:differ', e))
          : (N('resize:size:missing'), vn('resize:size:missing', e))
    }
  class Nn {
    constructor(e, t, n, i) {
      ;(this.hc = e),
        (this.hms = t),
        (this.hmr = n),
        (this.supportedCommands = i),
        (this.initializeAdIds = (e) => {
          var t, n
          this.hc.AD_IDS[e.arid] =
            ((t = e.placementName),
            (n = e.scope),
            {
              slotId: t,
              wrapperDivId: `ape_${n}_wrapper`,
              placementDivId: `ape_${n}_placement`,
              iframeId: `ape_${n}_iframe`,
              textDivWrapperId: `ape_${n}_text-wrapper`,
              textDivId: `ape_${n}_text`,
              auiCardDeckId: `ape_${n}_aui_cardDeck`,
            })
        }),
        (this.initializeAdMap = (e, t) => {
          try {
            const n = document.getElementById(this.hc.AD_IDS[e.arid].placementDivId),
              i = this.hc.AD_IDS[e.arid].iframeId,
              a = document.getElementById(i)
            this.hc.adMap[e.arid] = {
              placement: n,
              iframe: a,
              options: e,
              messagePort: t,
              hasTransferredMessagePort: !1,
            }
          } catch (n) {
            h(`Error creating safeFrame ${e.slotName}`, n)
          }
        }),
        (this.initAllSafeFrames = async () => {
          var e, t
          null === (t = performance) ||
            void 0 === t ||
            null === (e = t.mark) ||
            void 0 === e ||
            e.call(t, 'SafeFrame: Start initAllSafeFrames'),
            this.getWindowSafeFrame() ||
              (this.initWindowSafeFrame({
                registerCustomMessageListener: this.hms.registerCustomMessageListener,
                sendCustomMessage: this.hms.sendCustomMessage,
                secondPhaseLoadAd: this.secondPhaseLoadAd,
              }),
              Cn(this.getWindowSafeFrame()))
        }),
        (this.secondPhaseLoadAd = async (e, t, n, i, a) => {
          var o, s
          null === (s = performance) ||
            void 0 === s ||
            null === (o = s.mark) ||
            void 0 === o ||
            o.call(s, `SafeFrame: Start secondPhaseLoadAd ${t.adUnitPlacementId}`),
            this.initializeAdIds(t),
            this.initializeAdMap(t, n)
          const r = this.hc,
            d = this.hms,
            l = this.hc.adMap[e].options
          r.ADS_HANDLERS[l.arid] = r.ADS_HANDLERS[l.arid] || {}
          const c = Ye(l)
          c.resize(t.size), xn(t), _n(c, t)
          const m = this.hc.AD_IDS[e]
          if ((Tn(r.viewableLatencyTrackers, m.placementDivId, m.slotId, c.id, e), l.forcePunt))
            return cn('forcePunt', c), pt({ forcePunt: 'true' }), void c.collapse()
          Ln(l),
            zn(c, m.placementDivId, i, a),
            x('adload:delayloadcallback', c),
            ht('adload_delayload', c)
          try {
            var p
            new be(window, 'ADPT_SF_SERVER_SIDE_SPONSORED_LABEL_998980').isT1() &&
              (null === (p = window.feedbackLabelFunctions) ||
                void 0 === p ||
                p[l.adUnitWrapperId || l.adUnitPlacementId]()),
              (await en(l)) ? (Dn(r, l, this.hmr), Pn(r, l, d)) : c.collapse()
          } catch (h) {
            throw (c.collapse(), h)
          }
        })
    }
  }
  const Dn = (e, t, n) => {
      e.adMap[t.arid].messagePort.onmessage = n.receiveMessage
    },
    Ln = (e) => {
      g().sendLatencyMetric({
        latencyMetricType: ce,
        placementId: e.placementId,
        placementName: e.placementName,
        placementDivId: e.adUnitPlacementId,
      }),
        x(Sn, { id: e.placementId, name: e.placementName }),
        N(Sn),
        ht('adload_start', { id: e.placementId, name: e.placementName })
    },
    Pn = (e, t, n) => {
      var i
      qe((i = t).slotName) && We(document.getElementById(i.adUnitPlacementId))
    },
    Cn = (e) => {
      window.addEventListener('resize', () => {
        null == e ||
          e.sendCustomMessage('resize', { height: window.innerHeight, width: window.innerWidth })
      })
    },
    zn = (e, t, n, i) => {
      var a, o
      n &&
        (r({ latencyEvent: 'wb', placement: e, timestamp: n }),
        r({ latencyEvent: 'bb', placement: e, timestamp: n }))
      const s =
        null === (o = document) || void 0 === o || null === (a = o.getElementById) || void 0 === a
          ? void 0
          : a.call(o, t)
      i && null !== s && v(s, 'bodyBegin', i)
    },
    _n = (e, t) => {
      try {
        x('coordinate:x', e, e.div.getBoundingClientRect().x),
          x('coordinate:y', e, e.div.getBoundingClientRect().y),
          vn('coordinate:x', t, e.div.getBoundingClientRect().x),
          vn('coordinate:y', t, e.div.getBoundingClientRect().y)
      } catch (n) {
        return
      }
    },
    Fn = 'custommessage:notallowlisted'
  class Rn {
    constructor(e, t = {}) {
      ;(this.adMap = e),
        (this.msgListeners = t),
        (this.sendMessageToAd = (e, t, n) => {
          const i = { command: t, data: n }
          this.adMap[e].messagePort.postMessage(i)
        }),
        (this.customMessage = (e, t, n, i, a) => {
          const o = this.msgListeners
          try {
            'undefined' !== n &&
              Array.isArray(n) &&
              (n.indexOf(e) > -1 && o[e]
                ? (N(`custommessage:allowlisted:${e}`), o[e](t))
                : -1 === n.indexOf(e)
                  ? (N(Fn), x(Fn, { id: a, name: i }))
                  : h('Unrecognized custom message key: ' + e))
          } catch (s) {
            h('Custom Message Error', s)
          }
        }),
        (this.registerCustomMessageListener = (e, t, n) => {
          let i = !1
          const a = this.msgListeners
          try {
            if (!a[e] || 'function' != typeof a[e] || n) (a[e] = t), (i = !0)
            else {
              const t = new Error('Custom message listener already exists for key: ' + e)
              h('Duplicate Key', t)
            }
          } catch (o) {
            h('Error registering custom message listener', o)
          }
          return i
        }),
        (this.sendCustomMessage = (e, t) => {
          const n = this.adMap,
            i = { key: e, data: t }
          for (const a in n) this.sendMessageToAd(a, 'customMessage', i)
        }),
        (this.sendCustomMessageToAd = (e, t, n) => {
          const i = { key: t, data: n }
          this.sendMessageToAd(e, 'customMessage', i)
        })
    }
  }
  class Hn {
    constructor(e = {}, t = {}, n = {}, i = {}) {
      ;(this.adMap = e),
        (this.ADS_HANDLERS = t),
        (this.AD_IDS = n),
        (this.viewableLatencyTrackers = i)
    }
  }
  class Bn {
    constructor(e = {}, t) {
      ;(this.adMap = e),
        (this.supportedCommands = t),
        (this.receiveMessage = async (e) => {
          const t = this.adMap,
            n = e.data,
            i = t[n.arid]
          try {
            const e = this.supportedCommands[n.command]
            e && (await e(i, n.data))
          } catch (a) {
            const t = 'Problem with message: ' + JSON.stringify(e.data)
            h(t, a)
          }
        })
    }
  }
  var Wn, $n
  null === ($n = performance) ||
    void 0 === $n ||
    null === (Wn = $n.mark) ||
    void 0 === Wn ||
    Wn.call($n, 'SafeFrame: SafeFrame: Starting DAsf')
  const On = new Hn(),
    Un = new Rn(null == On ? void 0 : On.adMap),
    qn = new (class extends Nn {
      constructor(e = new Hn(), t = new Rn(e.adMap)) {
        const n = new Mn(t, e)
        super(e, t, new Bn(e.adMap, n), n),
          (this.initWindowSafeFrame = (e) => {
            window.DAsf = e
          }),
          (this.getWindowSafeFrame = () => window.DAsf)
      }
    })(On, Un)
  b(() => qn.initAllSafeFrames(), h, 'Error initializing safeFrame')()
})()
//# sourceMappingURL=DAsf-1.50.a0440b3c.js.map
