'use strict'
mix_d(
  'BuffetDisclaimersCards__buffet-disclaimers-card:buffet-disclaimers-card__STrzPlAG',
  'require exports tslib @c/remote-operations @c/scoped-dom @c/aui-utils @c/metrics'.split(' '),
  function (xa, ia, x, ya, za, L, Aa) {
    function ja(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    function Ba(a) {
      if (a && a.__esModule) return a
      var c = Object.create(null)
      a &&
        Object.keys(a).forEach(function (b) {
          if ('default' !== b) {
            var f = Object.getOwnPropertyDescriptor(a, b)
            Object.defineProperty(
              c,
              b,
              f.get
                ? f
                : {
                    enumerable: !0,
                    get: function () {
                      return a[b]
                    },
                  },
            )
          }
        })
      c['default'] = a
      return c
    }
    var Ca = ja(ya),
      r = ja(za),
      ka
    ;(function (a) {
      a.BEFORE_FIRST_OPEN = 'before first open'
      a.OPEN = 'open'
      a.CLOSE = 'close'
    })(ka || (ka = {}))
    var la
    ;(function (a) {
      a.RIGHT_OUT_OF_SCREEN = '-120%'
      a.INSIDE_SCREEN = '0px'
    })(la || (la = {}))
    var B
    ;(function (a) {
      a.MOBILE = 'mobile'
      a.DESKTOP = 'desktop'
    })(B || (B = {}))
    var C
    ;(function (a) {
      a.ATF = 'ATF'
      a.BTF = 'BTF'
    })(C || (C = {}))
    var I
    ;(function (a) {
      a.GPSR = 'GPSR'
      a.ENV = 'ENV'
    })(I || (I = {}))
    var M
    ;(function (a) {
      a.Sidesheet = 'Sidesheet'
      a.BTF = 'BTF'
    })(M || (M = {}))
    var ma
    ;(function (a) {
      a.FATAL = 'FATAL'
      a.ERROR = 'ERROR'
      a.WARN = 'WARN'
    })(ma || (ma = {}))
    var y
    ;(function (a) {
      a[(a.PSI = 0)] = 'PSI'
      a[(a.RSP_MANUFACTURER = 1)] = 'RSP_MANUFACTURER'
      a[(a.PD = 2)] = 'PD'
      a[(a.RED = 3)] = 'RED'
    })(y || (y = {}))
    var g
    ;(function (a) {
      a[(a.RSP = 0)] = 'RSP'
      a[(a.MANUFACTURER = 1)] = 'MANUFACTURER'
      a[(a.PSI = 2)] = 'PSI'
      a[(a.PD = 3)] = 'PD'
      a[(a.RED = 4)] = 'RED'
    })(g || (g = {}))
    var n
    ;(function (a) {
      a.CLIENT_LOAD = 'Buffet.Client.Load'
      a.RED_LOADED_CHARGER_INCLUDED = 'Buffet.Client.RedChargerIncludedLoaded'
      a.RED_LOADED_NO_CHARGER_INCLUDED = 'Buffet.Client.RedNoChargerIncludedLoaded'
      a.INGRESS_LINK_CLICK = 'Buffet.Sidesheet.IngressLinkClick'
      a.RSP_INGRESS_LINK_CLICK = 'Buffet.Sidesheet.RspIngressLinkClick'
      a.PD_INGRESS_LINK_CLICK = 'Buffet.Sidesheet.PdIngressLinkClick'
      a.PSI_INGRESS_LINK_CLICK = 'Buffet.Sidesheet.PsiIngressLinkClick'
      a.RED_ICON_CLICK_CHARGER_INCLUDED = 'Buffet.Sidesheet.RedIconClickChargerIncluded'
      a.RED_ICON_CLICK_NO_CHARGER_INCLUDED = 'Buffet.Sidesheet.RedIconClickNoChargerIncluded'
      a.RED_LINK_CLICK_CHARGER_INCLUDED = 'Buffet.Sidesheet.RedLinkClickChargerIncluded'
      a.RED_LINK_CLICK_NO_CHARGER_INCLUDED = 'Buffet.Sidesheet.RedLinkClickNoChargerIncluded'
      a.SIDESHEET_OPENED = 'Buffet.Sidesheet.Open'
      a.SIDESHEET_CLOSED = 'Buffet.Sidesheet.Close'
      a.SIDESHEET_DWELL_TIME = 'Buffet.Sidesheet.DwellTime'
      a.SIDESHEET_CONTENT_LOADED = 'Buffet.SdesheetContent.Load'
      a.SIDESHEET_CONTENT_LOAD_LATENCY = 'Buffet.SidesheetContent.LoadLatency'
      a.PSI_PILL_CLICK = 'Buffet.SidesheetContent.PsiPillClick'
      a.MANUFACTURER_PILL_CLICK = 'Buffet.SidesheetContent.ManufacturerPillClick'
      a.RSP_PILL_CLICK = 'Buffet.SidesheetContent.RspPillClick'
      a.PD_PILL_CLICK = 'Buffet.SidesheetContent.PdPillClick'
      a.RED_PILL_CLICK = 'Buffet.SidesheetContent.RedPillClick'
      a.PSI_ZOOM_IN_CLICK = 'Buffet.SidesheetContent.PsiZoomInClick'
      a.PSI_ZOOM_OUT_CLICK = 'Buffet.SidesheetContent.PsiZoomOutClick'
      a.PD_SIDESHEET_WINDOW_OPEN_CLICK = 'Buffet.SidesheetContent.PdWindowOpen'
      a.GPSR_EXPANDER_OPEN = 'Buffet.Sidesheet.GpsrExpanderOpen'
      a.ENVIORNMENTAL_EXPANDER_OPEN = 'Buffet.Sidesheet.EnviornmantalExpanderOpen'
      a.PD_BTF_WINDOW_OPEN_CLICK = 'Buffet.BtfContent.PdWindowOpen'
      a.MISSING_ASIN_ERROR = 'Buffet.MissingAsin.Error'
      a.MISSING_CRUCIAL_ELEMENTS_ERROR = 'Buffet.MissingCrucialElements.Error'
      a.MISSING_GPSR_CONTENT_ERROR = 'Buffet.MissingGpsrContent.Error'
      a.MISSING_PD_ELEMENTS_ERROR = 'Buffet.MissingExpectedPdElements.Error'
      a.SIDESHEET_OPEN_ERROR = 'Buffet.Sidesheet.Open.Error'
      a.SIDESHEET_CONTENT_LOAD_ERROR = 'Buffet.Sidesheet.ContentLoad.Error'
      a.ALL_AAPI_CALL_FAIL = 'Buffet.AllAapiCall.FAIL'
      a.RSP_MANUFACTURER_AAPI_CALL_FAIL = 'Buffet.RspManufacturerAapiCall.FAIL'
      a.PSI_AAPI_CALL_FAIL = 'Buffet.PsiAapiCall.FAIL'
      a.PD_AAPI_CALL_FAIL = 'Buffet.PdAapiCall.FAIL'
      a.RED_AAPI_CALL_FAIL = 'Buffet.RedAapiCall.FAIL'
    })(n || (n = {}))
    var na = new Map([
        [
          g.RSP,
          {
            aapiCallFailMetric: n.RSP_MANUFACTURER_AAPI_CALL_FAIL,
            pillClickMetric: n.RSP_PILL_CLICK,
          },
        ],
        [
          g.MANUFACTURER,
          {
            aapiCallFailMetric: n.RSP_MANUFACTURER_AAPI_CALL_FAIL,
            pillClickMetric: n.MANUFACTURER_PILL_CLICK,
          },
        ],
        [g.PSI, { aapiCallFailMetric: n.PSI_AAPI_CALL_FAIL, pillClickMetric: n.PSI_PILL_CLICK }],
        [g.PD, { aapiCallFailMetric: n.PD_AAPI_CALL_FAIL, pillClickMetric: n.PD_PILL_CLICK }],
        [g.RED, { aapiCallFailMetric: n.RED_AAPI_CALL_FAIL, pillClickMetric: n.RED_PILL_CLICK }],
      ]),
      Da = new Map([
        [g.RSP, y.RSP_MANUFACTURER],
        [g.MANUFACTURER, y.RSP_MANUFACTURER],
        [g.PSI, y.PSI],
        [g.PD, y.PD],
        [g.RED, y.RED],
      ]),
      Ea = new Map([
        [I.GPSR, n.GPSR_EXPANDER_OPEN],
        [I.ENV, n.ENVIORNMENTAL_EXPANDER_OPEN],
      ]),
      N = function (a, c) {
        a && !a.classList.contains(c) && a.classList.add(c)
      },
      O = function (a, c) {
        a && a.classList.contains(c) && a.classList.remove(c)
      },
      Z = function (a) {
        if (
          !a.every(function (c) {
            return c
          }) ||
          !a
            .map(function (c) {
              return null === c || void 0 === c ? void 0 : c.id
            })
            .every(function (c) {
              return c
            })
        )
          throw Error('Some HTML elements are missing.')
      },
      oa = function (a) {
        return { html: a.innerHTML, className: a.className, style: a.style.cssText }
      },
      Q = function (a, c) {
        a.innerHTML = c.html
        a.className = c.className
        a.style.cssText = c.style
      },
      F
    ;(function (a) {
      a.LANDING_ASIN = 'buffet-btf-asin'
      a.OPEN_BUTTON_IMG_DOC_CONT = 'buffet-sidesheet-ingress'
      a.DISCLAIMER_CONTENT = 'buffet-disclaimer-content'
      a.CLOSE_BUTTON = 'buffet-sidesheet-close'
      a.DARKENED_BACKGROUND = 'buffet-darkened-background'
      a.SIDESHEET_ROOT = 'buffet-sidesheet-root'
      a.SIDESHEET = 'buffet-sidesheet'
      a.SIDESHEET_CONTENT = 'buffet-sidesheet-content'
      a.SIDESHEET_SUB_CONTENT = 'buffet-sidesheet-sub-content'
      a.SIDESHEET_CONTENT_BUFFER_SPINNER = 'buffet-sidesheet-content-spinner'
      a.SIDESHEET_ERROR_ALERT = 'buffet-sidesheet-error-alert'
      a.SIDESHEET_GPSR_PILLS_CONTAINER = 'buffet-sidesheet-gpsr-pills-container'
      a.SIDESHEET_ENV_PILLS_CONTAINER = 'buffet-sidesheet-env-pills-container'
      a.SIDESHEET_RSP_PILL = 'buffet-sidesheet-rsp-pill'
      a.SIDESHEET_MANUFACTURER_PILL = 'buffet-sidesheet-manufacturer-pill'
      a.SIDESHEET_PSI_PILL = 'buffet-sidesheet-psi-pill'
      a.SIDESHEET_RSP_CONTENT = 'buffet-sidesheet-rsp-content-container'
      a.SIDESHEET_MANUFACTURER_CONTENT = 'buffet-sidesheet-manufacturer-content-container'
      a.SIDESHEET_PSI_CONTENT = 'buffet-sidesheet-psi-content-container'
      a.SIDESHEET_PSI_CAROUSEL = 'buffet-psi-component'
      a.SIDESHEET_RED_CONTENT = 'buffet-sidesheet-red-content-container'
      a.SIDESHEET_RED_PILL = 'buffet-product-red-pill'
      a.SIDESHEET_PD_CONTENT = 'buffet-sidesheet-product-docs-content-container'
      a.SIDESHEET_PD_PILL = 'buffet-product-docs-pill'
      a.RSP_MANUFACTURER_AAPI_FAIL = 'buffet-sidesheet-rsp-manufacturer-aapi-fail'
      a.PSI_AAPI_FAIL = 'buffet-sidesheet-psi-aapi-fail'
      a.PD_AAPI_FAIL = 'buffet-sidesheet-pd-aapi-fail'
      a.RED_AAPI_FAIL = 'buffet-sidesheet-mobile-red-aapi-fail'
      a.SIDESHEET_PD_LINKS_SECTION = 'product-docs-links'
      a.SIDESHEET_PD_LINK = 'product-docs-ingress-'
      a.SIDESHEET_PD_URL = 'buffet-product-docs-url-'
      a.SIDESHEET_PD_LIST_SIZE = 'product-docs-list-size'
      a.BTF_PD_LINKS_SECTION = 'product-docs-btf-links'
      a.BTF_PD_LINK = 'product-docs-btf-ingress-'
      a.BTF_PD_URL = 'buffet-product-docs-btf-url-'
      a.BTF_PD_LIST_SIZE = 'product-docs-btf-list-size'
      a.PRODUCT_DOCS_BTF = 'product-docs-btf-section'
      a.GPSR_EXPANDER = 'buffet-sidesheet-gpsr-expander'
      a.GPSR_EXPANDER_HEADER = 'buffet-sidesheet-gpsr-expander-header'
      a.ENVIRONMENTAL_EXPANDER = 'buffet-sidesheet-env-expander'
      a.ENVIRONMENTAL_EXPANDER_HEADER = 'buffet-sidesheet-env-expander-header'
      a.DYNAMIC_DOCUMENTS_INGRESS = 'buffet-dynamic-product-docs-ingress-btf'
      a.DYNAMIC_CONTACTS_INGRESS = 'buffet-dynamic-contacts-ingress-btf'
      a.DYNAMIC_IMAGES_INGRESS = 'buffet-dynamic-images-ingress-btf'
    })(F || (F = {}))
    var pa
    ;(function (a) {
      a.DE = 'A1PA6795UKMFR9'
      a.FR = 'A13V1IB3VIYZZH'
      a.IT = 'APJ6JRA9NG5V4'
      a.ES = 'A1RKKUPIHCS9HS'
      a.NL = 'A1805IZSGTT6HS'
      a.SE = 'A2NODRKZP88ZB9'
      a.PL = 'A1C3SOZRARQ6R3'
      a.BE = 'AMEN7PMS3EDWL'
      a.IE = 'A28R8C7NBKEWEA'
    })(pa || (pa = {}))
    var t = function (a, c, b, f) {
        void 0 === f && (f = 1)
        Aa.count(a + '.' + c + '.' + b, f)
      },
      aa = function (a, c, b, f, e, l) {
        var d = b.SIDESHEET_PD_LINKS_SECTION,
          k = b.SIDESHEET_PD_LIST_SIZE,
          h = b.SIDESHEET_PD_LINK,
          q = b.SIDESHEET_PD_URL,
          m = n.PD_SIDESHEET_WINDOW_OPEN_CLICK
        a === M.BTF &&
          ((d = b.BTF_PD_LINKS_SECTION),
          (k = b.BTF_PD_LIST_SIZE),
          (h = b.BTF_PD_LINK),
          (q = b.BTF_PD_URL),
          (m = n.PD_BTF_WINDOW_OPEN_CLICK))
        a = r['default'].cardRoot.querySelector('#' + d)
        k = r['default'].cardRoot.querySelector('#' + k)
        if (a && k)
          for (
            a = function (u) {
              var p = r['default'].cardRoot.querySelector('#' + h + u)
              u = r['default'].cardRoot.querySelector('#' + q + u)
              if (p && u) {
                var w = u.value
                p.addEventListener('click', function () {
                  c ? p.setAttribute('href', w) : f.openWindow(w, 'ProductDisplay')
                  t(e, l, m)
                })
              } else t(e, l, n.MISSING_PD_ELEMENTS_ERROR)
            },
              b = 0;
            b < parseInt(k.value);
            b++
          )
            a(b)
        else t(e, l, n.MISSING_PD_ELEMENTS_ERROR)
      },
      qa = function (a, c, b) {
        if (a) {
          var f = !1,
            e = a.querySelectorAll('li'),
            l = a.querySelectorAll('img')
          e.forEach(function (d, k) {
            d.style.maxWidth = '1600px'
            0 === k
              ? (d.style.marginLeft = '0px')
              : k === e.length - 1 && (d.style.marginRight = '0px')
          })
          l.forEach(function (d) {
            d.addEventListener('click', function () {
              return x.__awaiter(void 0, void 0, void 0, function () {
                return x.__generator(this, function (k) {
                  switch (k.label) {
                    case 0:
                      return (
                        f
                          ? (t(c, b, n.PSI_ZOOM_OUT_CLICK),
                            e.forEach(function (h) {
                              h.style.width = ''
                            }),
                            l.forEach(function (h) {
                              h.style.maxWidth = '100%'
                              var q = r['default'].cardRoot.querySelector(
                                '#' + h.id + '-zoomed-out',
                              ).value
                              h.src = q
                            }),
                            (f = !1))
                          : (t(c, b, n.PSI_ZOOM_IN_CLICK),
                            e.forEach(function (h) {
                              h.style.width = '1600px'
                            }),
                            l.forEach(function (h) {
                              h.style.maxWidth = '1600px'
                              var q = r['default'].cardRoot.querySelector(
                                '#' + h.id + '-zoomed-in',
                              ).value
                              h.src = q
                            }),
                            (f = !0)),
                        [4, d.decode()]
                      )
                    case 1:
                      return k.sent(), d.scrollIntoView({ block: 'center', inline: 'center' }), [2]
                  }
                })
              })
            })
          })
        }
      },
      ba = new Map([
        [I.ENV, Array.from([g.RED])],
        [I.GPSR, Array.from([g.PSI, g.MANUFACTURER, g.RSP, g.PD])],
      ]),
      Fa = function (a) {
        return new Map([
          [
            g.RSP,
            {
              contentElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_RSP_CONTENT),
              pillElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_RSP_PILL),
            },
          ],
          [
            g.MANUFACTURER,
            {
              contentElement: r['default'].cardRoot.querySelector(
                '#' + a.SIDESHEET_MANUFACTURER_CONTENT,
              ),
              pillElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_MANUFACTURER_PILL),
            },
          ],
          [
            g.PSI,
            {
              contentElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_PSI_CONTENT),
              pillElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_PSI_PILL),
            },
          ],
          [
            g.PD,
            {
              contentElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_PD_CONTENT),
              pillElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_PD_PILL),
            },
          ],
          [
            g.RED,
            {
              contentElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_RED_CONTENT),
              pillElement: r['default'].cardRoot.querySelector('#' + a.SIDESHEET_RED_PILL),
            },
          ],
        ])
      },
      R = function (a) {
        return new Map([
          [
            I.GPSR,
            {
              headerElement: r['default'].cardRoot.querySelector('#' + a.GPSR_EXPANDER_HEADER),
              pillContainerElement: r['default'].cardRoot.querySelector(
                '#' + a.SIDESHEET_GPSR_PILLS_CONTAINER,
              ),
            },
          ],
          [
            I.ENV,
            {
              headerElement: r['default'].cardRoot.querySelector(
                '#' + a.ENVIRONMENTAL_EXPANDER_HEADER,
              ),
              pillContainerElement: r['default'].cardRoot.querySelector(
                '#' + a.SIDESHEET_ENV_PILLS_CONTAINER,
              ),
            },
          ],
        ])
      },
      Ga = function (a, c) {
        switch (c) {
          case g.RSP:
          case g.MANUFACTURER:
            return a.RSP_MANUFACTURER_AAPI_FAIL
          case g.PSI:
            return a.PSI_AAPI_FAIL
          case g.PD:
            return a.PD_AAPI_FAIL
          case g.RED:
            return a.RED_AAPI_FAIL
        }
      },
      Ha = function (a) {
        switch (a) {
          case g.RSP:
          case g.MANUFACTURER:
            return y.RSP_MANUFACTURER
          case g.PSI:
            return y.PSI
          case g.PD:
            return y.PD
          case g.RED:
            return y.RED
        }
      },
      Ia = function (a, c) {
        a.forEach(function (b, f) {
          ;(b.contentElement && b.pillElement) || (a.delete(f), c.delete(Ha(f)))
        })
      },
      S = function (a) {
        var c
        try {
          for (var b = x.__values(ba.keys()), f = b.next(); !f.done; f = b.next()) {
            var e = f.value
            if (ba.get(e).includes(a)) return e
          }
        } catch (d) {
          var l = { error: d }
        } finally {
          try {
            f && !f.done && (c = b.return) && c.call(b)
          } finally {
            if (l) throw l.error
          }
        }
        throw Error('Content type not found in Expanders-ContentType mapping!')
      },
      Ja = function (a, c) {
        var b, f
        try {
          for (var e = x.__values(a.keys()), l = e.next(); !l.done; l = e.next()) {
            var d = l.value,
              k = a.get(d).pillElement,
              h = S(d),
              q = null === (f = c.get(h)) || void 0 === f ? void 0 : f.pillContainerElement
            k && q && k.addEventListener('click', ra(k, q))
          }
        } catch (u) {
          var m = { error: u }
        } finally {
          try {
            l && !l.done && (b = e.return) && b.call(e)
          } finally {
            if (m) throw m.error
          }
        }
      },
      ra = function (a, c) {
        return function () {
          var b = c.offsetWidth,
            f = c.scrollWidth,
            e = a.offsetLeft - b / 2 + a.offsetWidth / 2
          0 > e ? (e = 0) : e + b > f && (e = f - b)
          c.scroll({ behavior: 'smooth', left: e })
        }
      },
      sa = function (a, c, b) {
        var f
        void 0 === b && (b = !1)
        var e = S(a)
        try {
          for (var l = x.__values(c.keys()), d = l.next(); !d.done; d = l.next()) {
            var k = d.value,
              h = c.get(k),
              q = S(k)
            if (q === e)
              if (k === a) {
                var m = h
                N(m.pillElement, 'a-button-selected')
                O(m.contentElement, 'aok-hidden')
              } else
                (m = h), O(m.pillElement, 'a-button-selected'), N(m.contentElement, 'aok-hidden')
            else if (b) {
              m = k
              a: {
                var u = void 0,
                  p = void 0,
                  w = new Set(c.keys()),
                  A = ba.get(q)
                if (A) {
                  try {
                    for (var G = x.__values(A), D = G.next(); !D.done; D = G.next()) {
                      var K = D.value
                      if (w.has(K)) {
                        var E = K
                        break a
                      }
                    }
                  } catch (H) {
                    p = { error: H }
                  } finally {
                    try {
                      D && !D.done && (u = G.return) && u.call(G)
                    } finally {
                      if (p) throw p.error
                    }
                  }
                  E = null
                } else throw Error('Expander must be defined in Expander-ContentType mapping!')
              }
              m === E
                ? ((m = h),
                  N(m.pillElement, 'a-button-selected'),
                  O(m.contentElement, 'aok-hidden'))
                : ((m = h),
                  O(m.pillElement, 'a-button-selected'),
                  N(m.contentElement, 'aok-hidden'))
            }
          }
        } catch (H) {
          var v = { error: H }
        } finally {
          try {
            d && !d.done && (f = l.return) && f.call(l)
          } finally {
            if (v) throw v.error
          }
        }
      },
      ta = function (a) {
        var c, b
        try {
          for (var f = x.__values(Object.values(I)), e = f.next(); !e.done; e = f.next()) {
            var l = e.value,
              d = null === (b = R(a).get(l)) || void 0 === b ? void 0 : b.headerElement,
              k = null === d || void 0 === d ? void 0 : d.getAttribute('aria-expanded')
            d && 'true' === k && d.click()
          }
        } catch (q) {
          var h = { error: q }
        } finally {
          try {
            e && !e.done && (c = f.return) && c.call(f)
          } finally {
            if (h) throw h.error
          }
        }
      },
      ca,
      da,
      J = new Set(
        Object.values(y).filter(function (a) {
          return 'number' === typeof a
        }),
      ),
      z,
      Ka = Object.keys(y).length / 2,
      Pa = function (a, c, b, f, e, l, d, k, h, q, m) {
        return x.__awaiter(void 0, void 0, void 0, function () {
          var u, p, w, A, G, D, K
          return x.__generator(this, function (E) {
            switch (E.label) {
              case 0:
                u = Date.now()
                p = r['default'].cardRoot.querySelector('#' + d.SIDESHEET_CONTENT)
                w = r['default'].cardRoot.querySelector('#' + d.SIDESHEET_CONTENT_BUFFER_SPINNER)
                A = r['default'].cardRoot.querySelector('#' + d.SIDESHEET_ERROR_ALERT)
                G = [p, w, A]
                try {
                  Z(G)
                } catch (v) {
                  throw (t(B.DESKTOP, C.BTF, n.MISSING_CRUCIAL_ELEMENTS_ERROR), Error())
                }
                a && ((ca = oa(w)), (da = oa(p)))
                if (c) return [3, 5]
                E.label = 1
              case 1:
                return (
                  E.trys.push([1, 3, , 4]),
                  Q(w, ca),
                  Q(p, da),
                  (D = r['default'].cardRoot.querySelector('#' + d.SIDESHEET_SUB_CONTENT)),
                  (z = Fa(d)),
                  (K = R(d)),
                  La(D, b, e),
                  Ia(z, J),
                  Ja(z, K),
                  Ma(b, e),
                  [4, Na(l, d, k, b, e, f, m)]
                )
              case 2:
                E.sent()
                if (J.size === Ka) throw (t(b, e, n.ALL_AAPI_CALL_FAIL), Error())
                w.style.opacity = '0'
                t(b, e, n.SIDESHEET_CONTENT_LOAD_LATENCY, Date.now() - u)
                L.delay(function () {
                  N(w, 'aok-hidden')
                  O(D, 'aok-hidden')
                  p.style.opacity = '1'
                }, 200)
                c = !0
                return [3, 4]
              case 3:
                return (
                  E.sent(),
                  t(b, e, n.SIDESHEET_CONTENT_LOAD_ERROR),
                  Q(w, ca),
                  Q(p, da),
                  O(A, 'aok-hidden'),
                  (w.style.opacity = '0'),
                  L.delay(function () {
                    N(w, 'aok-hidden')
                    p.style.opacity = '1'
                  }, 200),
                  [3, 4]
                )
              case 4:
                return [3, 6]
              case 5:
                0 !== J.size &&
                  J.forEach(function (v) {
                    return x.__awaiter(void 0, void 0, void 0, function () {
                      var H, ea, T, ua, U, va, wa, V, W, fa, X, ha, Y
                      return x.__generator(this, function (P) {
                        switch (P.label) {
                          case 0:
                            H = v
                            switch (H) {
                              case y.PSI:
                                return [3, 1]
                              case y.RSP_MANUFACTURER:
                                return [3, 3]
                              case y.PD:
                                return [3, 5]
                              case y.RED:
                                return [3, 7]
                            }
                            return [3, 9]
                          case 1:
                            return [4, l.getPsiContent({ asin: k })]
                          case 2:
                            return (
                              (ea = P.sent()) &&
                              'false' === ea.querySelector('#' + d.PSI_AAPI_FAIL).value
                                ? (J.delete(y.PSI),
                                  (T = z.get(g.PSI).contentElement),
                                  (T.style.opacity = '0'),
                                  L.delay(function () {
                                    T.innerHTML = ea.outerHTML
                                    T.style.opacity = '1'
                                  }, 500),
                                  (ua = r['default'].cardRoot.querySelector(
                                    '#' + d.SIDESHEET_PSI_CAROUSEL,
                                  )),
                                  qa(ua, b, e))
                                : t(b, e, n.PSI_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 3:
                            return [4, l.getRspManufacturerContent({ asin: k })]
                          case 4:
                            return (
                              (U = P.sent()) &&
                              'false' === U.querySelector('#' + d.RSP_MANUFACTURER_AAPI_FAIL).value
                                ? (J.delete(y.RSP_MANUFACTURER),
                                  (va = U.querySelector('#' + d.SIDESHEET_RSP_CONTENT)),
                                  (wa = U.querySelector('#' + d.SIDESHEET_MANUFACTURER_CONTENT)),
                                  (V = z.get(g.RSP).contentElement),
                                  (W = z.get(g.MANUFACTURER).contentElement),
                                  (V.style.opacity = '0'),
                                  (W.style.opacity = '0'),
                                  L.delay(function () {
                                    V.innerHTML = va.innerHTML
                                    W.innerHTML = wa.innerHTML
                                    V.style.opacity = '1'
                                    W.style.opacity = '1'
                                  }, 500))
                                : t(b, e, n.RSP_MANUFACTURER_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 5:
                            return [4, l.getPdContent({ asin: k })]
                          case 6:
                            return (
                              (fa = P.sent()) &&
                              'false' === fa.querySelector('#' + d.PD_AAPI_FAIL).value
                                ? (J.delete(y.PD),
                                  (X = z.get(g.PD).contentElement),
                                  (X.style.opacity = '0'),
                                  L.delay(function () {
                                    X.innerHTML = fa.innerHTML
                                    aa(M.Sidesheet, f, d, m, b, e)
                                    X.style.opacity = '1'
                                  }, 500))
                                : t(b, e, n.PD_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 7:
                            return [4, l.getRedContent({ asin: k })]
                          case 8:
                            return (
                              (ha = P.sent()) &&
                              'false' === ha.querySelector('#' + d.RED_AAPI_FAIL).value
                                ? (J.delete(y.RED),
                                  (Y = z.get(g.RED).contentElement),
                                  (Y.style.opacity = '0'),
                                  L.delay(function () {
                                    Y.innerHTML = ha.innerHTML
                                    Y.style.opacity = '1'
                                  }, 500))
                                : t(b, e, n.RED_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 9:
                            return [2]
                        }
                      })
                    })
                  }),
                  (E.label = 6)
              case 6:
                return Oa(d, h, a, q, b, e), (a = !1), [2, [a, c]]
            }
          })
        })
      },
      Ma = function (a, c) {
        var b,
          f,
          e = function (h) {
            null === (f = z.get(h)) || void 0 === f
              ? void 0
              : f.pillElement.addEventListener('click', function () {
                  sa(h, z)
                  t(a, c, na.get(h).pillClickMetric)
                })
          }
        try {
          for (var l = x.__values(z.keys()), d = l.next(); !d.done; d = l.next()) e(d.value)
        } catch (h) {
          var k = { error: h }
        } finally {
          try {
            d && !d.done && (b = l.return) && b.call(l)
          } finally {
            if (k) throw k.error
          }
        }
      },
      Na = function (a, c, b, f, e, l, d) {
        return x.__awaiter(void 0, void 0, void 0, function () {
          var k, h, q, m, u, p, w, A, G, D, K, E
          return x.__generator(this, function (v) {
            switch (v.label) {
              case 0:
                ;(k = null), (v.label = 1)
              case 1:
                v.trys.push([1, 23, 24, 25]),
                  (h = x.__values(z.keys())),
                  (q = h.next()),
                  (v.label = 2)
              case 2:
                if (q.done) return [3, 22]
                m = q.value
                u = z.get(m)
                p = void 0
                w = m
                switch (w) {
                  case g.PSI:
                    return [3, 3]
                  case g.MANUFACTURER:
                    return [3, 5]
                  case g.RSP:
                    return [3, 5]
                  case g.PD:
                    return [3, 8]
                  case g.RED:
                    return [3, 10]
                }
                return [3, 12]
              case 3:
                return [4, a.getPsiContent({ asin: b })]
              case 4:
                return (p = v.sent()), [3, 12]
              case 5:
                return null !== k ? [3, 7] : [4, a.getRspManufacturerContent({ asin: b })]
              case 6:
                ;(k = v.sent()), (v.label = 7)
              case 7:
                return (p = k), [3, 12]
              case 8:
                return [4, a.getPdContent({ asin: b })]
              case 9:
                return (p = v.sent()), [3, 12]
              case 10:
                return [4, a.getRedContent({ asin: b })]
              case 11:
                return (p = v.sent()), [3, 12]
              case 12:
                if (
                  !p ||
                  !u.contentElement ||
                  'false' !==
                    (null === (E = p.querySelector('#' + Ga(c, m))) || void 0 === E
                      ? void 0
                      : E.value)
                )
                  return [3, 20]
                J.delete(Da.get(m))
                A = m
                switch (A) {
                  case g.PSI:
                    return [3, 13]
                  case g.RSP:
                    return [3, 14]
                  case g.MANUFACTURER:
                    return [3, 15]
                  case g.PD:
                    return [3, 16]
                  case g.RED:
                    return [3, 18]
                }
                return [3, 19]
              case 13:
                return (
                  (u.contentElement.innerHTML = p.outerHTML),
                  (v = r['default'].cardRoot.querySelector('#' + c.SIDESHEET_PSI_CAROUSEL)),
                  qa(v, f, e),
                  [3, 19]
                )
              case 14:
                v = u
                var H = p.querySelector('#' + c.SIDESHEET_RSP_CONTENT)
                v.contentElement.innerHTML = H.innerHTML
                return [3, 19]
              case 15:
                return (
                  (v = u),
                  (H = p.querySelector('#' + c.SIDESHEET_MANUFACTURER_CONTENT)),
                  (v.contentElement.innerHTML = H.innerHTML),
                  [3, 19]
                )
              case 16:
                return [4, Qa(u, p, c, l, d, f, e)]
              case 17:
                return v.sent(), [3, 19]
              case 18:
                return (u.contentElement.innerHTML = p.outerHTML), [3, 19]
              case 19:
                return [3, 21]
              case 20:
                t(f, e, na.get(m).aapiCallFailMetric), (v.label = 21)
              case 21:
                return (q = h.next()), [3, 2]
              case 22:
                return [3, 25]
              case 23:
                return (G = v.sent()), (D = { error: G }), [3, 25]
              case 24:
                try {
                  q && !q.done && (K = h.return) && K.call(h)
                } finally {
                  if (D) throw D.error
                }
                return [7]
              case 25:
                return [2]
            }
          })
        })
      },
      Qa = function (a, c, b, f, e, l, d) {
        return x.__awaiter(void 0, void 0, void 0, function () {
          return x.__generator(this, function (k) {
            a.contentElement.innerHTML = c.outerHTML
            aa(M.Sidesheet, f, b, e, l, d)
            return [2]
          })
        })
      },
      La = function (a, c, b) {
        try {
          Z([a])
        } catch (f) {
          throw (t(c, b, n.MISSING_CRUCIAL_ELEMENTS_ERROR), Error())
        }
      },
      Oa = function (a, c, b, f, e, l) {
        var d,
          k,
          h = S(c)
        ta(a)
        var q,
          m = null === (q = R(a).get(h)) || void 0 === q ? void 0 : q.headerElement
        q = null === m || void 0 === m ? void 0 : m.getAttribute('aria-expanded')
        m && 'false' === q && (m.click(), t(e, l, Ea.get(h)))
        if (b || f)
          sa(c, z, b),
            (c = null === (d = z.get(c)) || void 0 === d ? void 0 : d.pillElement),
            (a = null === (k = R(a).get(h)) || void 0 === k ? void 0 : k.pillContainerElement),
            c && a && ra(c, a)()
      }
    ia._operationNames = []
    ia.card = function () {
      return x.__awaiter(void 0, void 0, void 0, function () {
        var a, c, b, f, e, l, d, k, h, q, m
        return x.__generator(this, function (u) {
          switch (u.label) {
            case 0:
              return (
                t(B.DESKTOP, C.BTF, n.CLIENT_LOAD),
                (a = r['default'].cardRoot.querySelector('#' + F.LANDING_ASIN)),
                a && a.value
                  ? [
                      4,
                      new Promise(function (p, w) {
                        xa(
                          ['@p/buffet-sidesheet'],
                          function (A) {
                            p(Ba(A))
                          },
                          w,
                        )
                      }),
                    ]
                  : (t(B.DESKTOP, C.BTF, n.MISSING_ASIN_ERROR), [2])
              )
            case 1:
              c = u.sent().default
              r['default'].cardRoot.querySelector('#' + F.PRODUCT_DOCS_BTF) &&
                aa(M.BTF, !1, F, c, B.DESKTOP, C.BTF)
              b = r['default'].cardRoot.querySelector('#' + F.OPEN_BUTTON_IMG_DOC_CONT)
              f = r['default'].cardRoot.querySelector('#' + F.DARKENED_BACKGROUND)
              e = r['default'].cardRoot.querySelector('#' + F.CLOSE_BUTTON)
              l = [b, f, e]
              try {
                Z(l)
              } catch (p) {
                return t(B.DESKTOP, C.BTF, n.MISSING_CRUCIAL_ELEMENTS_ERROR), [2]
              }
              d = Ca['default'].setup([
                'getRspManufacturerContent',
                'getPsiContent',
                'getPdContent',
              ])
              k = !0
              h = !1
              b.addEventListener('click', function (p) {
                return x.__awaiter(void 0, void 0, void 0, function () {
                  var w
                  return x.__generator(this, function (A) {
                    switch (A.label) {
                      case 0:
                        return (
                          p.preventDefault(),
                          t(B.DESKTOP, C.BTF, n.INGRESS_LINK_CLICK),
                          c.showSidesheet(),
                          t(B.DESKTOP, C.BTF, n.SIDESHEET_OPENED),
                          [4, Pa(k, h, B.DESKTOP, !1, C.BTF, d, F, a.value, g.PSI, !1, c)]
                        )
                      case 1:
                        w = x.__read.apply(void 0, [A.sent(), 2])
                        k = w[0]
                        if ((h = w[1]))
                          t(B.DESKTOP, C.BTF, n.SIDESHEET_CONTENT_LOADED), (q = Date.now())
                        return [2]
                    }
                  })
                })
              })
              m = function () {
                c.closeSidesheet()
                ta(F)
                t(B.DESKTOP, C.BTF, n.SIDESHEET_CLOSED)
                h && t(B.DESKTOP, C.BTF, n.SIDESHEET_DWELL_TIME, Date.now() - q)
              }
              e.addEventListener('click', function () {
                m()
              })
              f.addEventListener('click', function () {
                m()
              })
              return [2]
          }
        })
      })
    }
  },
)
