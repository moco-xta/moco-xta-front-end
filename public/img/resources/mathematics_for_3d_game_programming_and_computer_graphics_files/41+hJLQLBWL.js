'use strict'
mix_d(
  'BuffetDisclaimersCards__buffet-high-priority-disclaimers-card:buffet-high-priority-disclaimers-card__G1GhChJ3',
  'require exports tslib @c/remote-operations @c/scoped-dom @c/aui-utils @c/metrics'.split(' '),
  function (xa, ha, t, ya, za, N, Aa) {
    function ia(a) {
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
    var Ca = ia(ya),
      q = ia(za),
      ja
    ;(function (a) {
      a.BEFORE_FIRST_OPEN = 'before first open'
      a.OPEN = 'open'
      a.CLOSE = 'close'
    })(ja || (ja = {}))
    var ka
    ;(function (a) {
      a.RIGHT_OUT_OF_SCREEN = '-120%'
      a.INSIDE_SCREEN = '0px'
    })(ka || (ka = {}))
    var A
    ;(function (a) {
      a.MOBILE = 'mobile'
      a.DESKTOP = 'desktop'
    })(A || (A = {}))
    var B
    ;(function (a) {
      a.ATF = 'ATF'
      a.BTF = 'BTF'
    })(B || (B = {}))
    var K
    ;(function (a) {
      a.GPSR = 'GPSR'
      a.ENV = 'ENV'
    })(K || (K = {}))
    var Q
    ;(function (a) {
      a.Sidesheet = 'Sidesheet'
      a.BTF = 'BTF'
    })(Q || (Q = {}))
    var la
    ;(function (a) {
      a.FATAL = 'FATAL'
      a.ERROR = 'ERROR'
      a.WARN = 'WARN'
    })(la || (la = {}))
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
    var k
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
    })(k || (k = {}))
    var ma = new Map([
        [
          g.RSP,
          {
            aapiCallFailMetric: k.RSP_MANUFACTURER_AAPI_CALL_FAIL,
            pillClickMetric: k.RSP_PILL_CLICK,
          },
        ],
        [
          g.MANUFACTURER,
          {
            aapiCallFailMetric: k.RSP_MANUFACTURER_AAPI_CALL_FAIL,
            pillClickMetric: k.MANUFACTURER_PILL_CLICK,
          },
        ],
        [g.PSI, { aapiCallFailMetric: k.PSI_AAPI_CALL_FAIL, pillClickMetric: k.PSI_PILL_CLICK }],
        [g.PD, { aapiCallFailMetric: k.PD_AAPI_CALL_FAIL, pillClickMetric: k.PD_PILL_CLICK }],
        [g.RED, { aapiCallFailMetric: k.RED_AAPI_CALL_FAIL, pillClickMetric: k.RED_PILL_CLICK }],
      ]),
      Da = new Map([
        [g.RSP, y.RSP_MANUFACTURER],
        [g.MANUFACTURER, y.RSP_MANUFACTURER],
        [g.PSI, y.PSI],
        [g.PD, y.PD],
        [g.RED, y.RED],
      ]),
      Ea = new Map([
        [K.GPSR, k.GPSR_EXPANDER_OPEN],
        [K.ENV, k.ENVIORNMENTAL_EXPANDER_OPEN],
      ]),
      O = function (a, c) {
        a && !a.classList.contains(c) && a.classList.add(c)
      },
      P = function (a, c) {
        a && a.classList.contains(c) && a.classList.remove(c)
      },
      aa = function (a) {
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
      na = function (a) {
        return { html: a.innerHTML, className: a.className, style: a.style.cssText }
      },
      S = function (a, c) {
        a.innerHTML = c.html
        a.className = c.className
        a.style.cssText = c.style
      },
      G
    ;(function (a) {
      a.LANDING_ASIN = 'buffet-atf-asin'
      a.OPEN_BUTTON_IMG_DOC_CONT = 'buffet-sidesheet-atf-open-button-show-image-doc-contact'
      a.CLOSE_BUTTON = 'buffet-sidesheet-atf-close-button'
      a.DARKENED_BACKGROUND = 'buffet-atf-darkened-background'
      a.RED_ATF_CONTENT = 'buffet-red-atf-content'
      a.RED_IS_CHARGER_INCLUDED_INPUT = 'buffet-red-atf-is-charger-included'
      a.RED_ICON = 'buffet-red-atf-icon'
      a.RED_LINK = 'buffet-red-atf-link'
      a.SIDESHEET = 'buffet-sidesheet-atf'
      a.SIDESHEET_CONTENT = 'buffet-sidesheet-atf-content'
      a.SIDESHEET_SUB_CONTENT = 'buffet-sidesheet-atf-sub-content'
      a.SIDESHEET_CONTENT_BUFFER_SPINNER = 'buffet-sidesheet-atf-content-spinner'
      a.SIDESHEET_ERROR_ALERT = 'buffet-sidesheet-atf-error-alert'
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
      a.DYNAMIC_DOCUMENTS_INGRESS = 'buffet-dynamic-product-docs-ingress-atf'
      a.DYNAMIC_CONTACTS_INGRESS = 'buffet-dynamic-contacts-ingress-atf'
      a.DYNAMIC_IMAGES_INGRESS = 'buffet-dynamic-images-ingress-atf'
    })(G || (G = {}))
    var oa
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
    })(oa || (oa = {}))
    var v = function (a, c, b, f) {
        void 0 === f && (f = 1)
        Aa.count(a + '.' + c + '.' + b, f)
      },
      pa = function (a, c, b, f, e, m) {
        var d = b.SIDESHEET_PD_LINKS_SECTION,
          h = b.SIDESHEET_PD_LIST_SIZE,
          l = b.SIDESHEET_PD_LINK,
          r = b.SIDESHEET_PD_URL,
          n = k.PD_SIDESHEET_WINDOW_OPEN_CLICK
        a === Q.BTF &&
          ((d = b.BTF_PD_LINKS_SECTION),
          (h = b.BTF_PD_LIST_SIZE),
          (l = b.BTF_PD_LINK),
          (r = b.BTF_PD_URL),
          (n = k.PD_BTF_WINDOW_OPEN_CLICK))
        a = q['default'].cardRoot.querySelector('#' + d)
        h = q['default'].cardRoot.querySelector('#' + h)
        if (a && h)
          for (
            a = function (x) {
              var u = q['default'].cardRoot.querySelector('#' + l + x)
              x = q['default'].cardRoot.querySelector('#' + r + x)
              if (u && x) {
                var z = x.value
                u.addEventListener('click', function () {
                  c ? u.setAttribute('href', z) : f.openWindow(z, 'ProductDisplay')
                  v(e, m, n)
                })
              } else v(e, m, k.MISSING_PD_ELEMENTS_ERROR)
            },
              b = 0;
            b < parseInt(h.value);
            b++
          )
            a(b)
        else v(e, m, k.MISSING_PD_ELEMENTS_ERROR)
      },
      qa = function (a, c, b) {
        if (a) {
          var f = !1,
            e = a.querySelectorAll('li'),
            m = a.querySelectorAll('img')
          e.forEach(function (d, h) {
            d.style.maxWidth = '1600px'
            0 === h
              ? (d.style.marginLeft = '0px')
              : h === e.length - 1 && (d.style.marginRight = '0px')
          })
          m.forEach(function (d) {
            d.addEventListener('click', function () {
              return t.__awaiter(void 0, void 0, void 0, function () {
                return t.__generator(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return (
                        f
                          ? (v(c, b, k.PSI_ZOOM_OUT_CLICK),
                            e.forEach(function (l) {
                              l.style.width = ''
                            }),
                            m.forEach(function (l) {
                              l.style.maxWidth = '100%'
                              var r = q['default'].cardRoot.querySelector(
                                '#' + l.id + '-zoomed-out',
                              ).value
                              l.src = r
                            }),
                            (f = !1))
                          : (v(c, b, k.PSI_ZOOM_IN_CLICK),
                            e.forEach(function (l) {
                              l.style.width = '1600px'
                            }),
                            m.forEach(function (l) {
                              l.style.maxWidth = '1600px'
                              var r = q['default'].cardRoot.querySelector(
                                '#' + l.id + '-zoomed-in',
                              ).value
                              l.src = r
                            }),
                            (f = !0)),
                        [4, d.decode()]
                      )
                    case 1:
                      return h.sent(), d.scrollIntoView({ block: 'center', inline: 'center' }), [2]
                  }
                })
              })
            })
          })
        }
      },
      ba = new Map([
        [K.ENV, Array.from([g.RED])],
        [K.GPSR, Array.from([g.PSI, g.MANUFACTURER, g.RSP, g.PD])],
      ]),
      Fa = function (a) {
        return new Map([
          [
            g.RSP,
            {
              contentElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_RSP_CONTENT),
              pillElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_RSP_PILL),
            },
          ],
          [
            g.MANUFACTURER,
            {
              contentElement: q['default'].cardRoot.querySelector(
                '#' + a.SIDESHEET_MANUFACTURER_CONTENT,
              ),
              pillElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_MANUFACTURER_PILL),
            },
          ],
          [
            g.PSI,
            {
              contentElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_PSI_CONTENT),
              pillElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_PSI_PILL),
            },
          ],
          [
            g.PD,
            {
              contentElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_PD_CONTENT),
              pillElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_PD_PILL),
            },
          ],
          [
            g.RED,
            {
              contentElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_RED_CONTENT),
              pillElement: q['default'].cardRoot.querySelector('#' + a.SIDESHEET_RED_PILL),
            },
          ],
        ])
      },
      T = function (a) {
        return new Map([
          [
            K.GPSR,
            {
              headerElement: q['default'].cardRoot.querySelector('#' + a.GPSR_EXPANDER_HEADER),
              pillContainerElement: q['default'].cardRoot.querySelector(
                '#' + a.SIDESHEET_GPSR_PILLS_CONTAINER,
              ),
            },
          ],
          [
            K.ENV,
            {
              headerElement: q['default'].cardRoot.querySelector(
                '#' + a.ENVIRONMENTAL_EXPANDER_HEADER,
              ),
              pillContainerElement: q['default'].cardRoot.querySelector(
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
      U = function (a) {
        var c
        try {
          for (var b = t.__values(ba.keys()), f = b.next(); !f.done; f = b.next()) {
            var e = f.value
            if (ba.get(e).includes(a)) return e
          }
        } catch (d) {
          var m = { error: d }
        } finally {
          try {
            f && !f.done && (c = b.return) && c.call(b)
          } finally {
            if (m) throw m.error
          }
        }
        throw Error('Content type not found in Expanders-ContentType mapping!')
      },
      Ja = function (a, c) {
        var b, f
        try {
          for (var e = t.__values(a.keys()), m = e.next(); !m.done; m = e.next()) {
            var d = m.value,
              h = a.get(d).pillElement,
              l = U(d),
              r = null === (f = c.get(l)) || void 0 === f ? void 0 : f.pillContainerElement
            h && r && h.addEventListener('click', ra(h, r))
          }
        } catch (x) {
          var n = { error: x }
        } finally {
          try {
            m && !m.done && (b = e.return) && b.call(e)
          } finally {
            if (n) throw n.error
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
        var e = U(a)
        try {
          for (var m = t.__values(c.keys()), d = m.next(); !d.done; d = m.next()) {
            var h = d.value,
              l = c.get(h),
              r = U(h)
            if (r === e)
              if (h === a) {
                var n = l
                O(n.pillElement, 'a-button-selected')
                P(n.contentElement, 'aok-hidden')
              } else
                (n = l), P(n.pillElement, 'a-button-selected'), O(n.contentElement, 'aok-hidden')
            else if (b) {
              n = h
              a: {
                var x = void 0,
                  u = void 0,
                  z = new Set(c.keys()),
                  I = ba.get(r)
                if (I) {
                  try {
                    for (var H = t.__values(I), C = H.next(); !C.done; C = H.next()) {
                      var J = C.value
                      if (z.has(J)) {
                        var D = J
                        break a
                      }
                    }
                  } catch (w) {
                    u = { error: w }
                  } finally {
                    try {
                      C && !C.done && (x = H.return) && x.call(H)
                    } finally {
                      if (u) throw u.error
                    }
                  }
                  D = null
                } else throw Error('Expander must be defined in Expander-ContentType mapping!')
              }
              n === D
                ? ((n = l),
                  O(n.pillElement, 'a-button-selected'),
                  P(n.contentElement, 'aok-hidden'))
                : ((n = l),
                  P(n.pillElement, 'a-button-selected'),
                  O(n.contentElement, 'aok-hidden'))
            }
          }
        } catch (w) {
          var p = { error: w }
        } finally {
          try {
            d && !d.done && (f = m.return) && f.call(m)
          } finally {
            if (p) throw p.error
          }
        }
      },
      ta = function (a) {
        var c, b
        try {
          for (var f = t.__values(Object.values(K)), e = f.next(); !e.done; e = f.next()) {
            var m = e.value,
              d = null === (b = T(a).get(m)) || void 0 === b ? void 0 : b.headerElement,
              h = null === d || void 0 === d ? void 0 : d.getAttribute('aria-expanded')
            d && 'true' === h && d.click()
          }
        } catch (r) {
          var l = { error: r }
        } finally {
          try {
            e && !e.done && (c = f.return) && c.call(f)
          } finally {
            if (l) throw l.error
          }
        }
      },
      ca,
      da,
      L = new Set(
        Object.values(y).filter(function (a) {
          return 'number' === typeof a
        }),
      ),
      E,
      Ka = Object.keys(y).length / 2,
      Pa = function (a, c, b, f, e, m, d, h, l, r, n) {
        return t.__awaiter(void 0, void 0, void 0, function () {
          var x, u, z, I, H, C, J
          return t.__generator(this, function (D) {
            switch (D.label) {
              case 0:
                x = Date.now()
                u = q['default'].cardRoot.querySelector('#' + d.SIDESHEET_CONTENT)
                z = q['default'].cardRoot.querySelector('#' + d.SIDESHEET_CONTENT_BUFFER_SPINNER)
                I = q['default'].cardRoot.querySelector('#' + d.SIDESHEET_ERROR_ALERT)
                H = [u, z, I]
                try {
                  aa(H)
                } catch (p) {
                  throw (v(A.DESKTOP, B.BTF, k.MISSING_CRUCIAL_ELEMENTS_ERROR), Error())
                }
                a && ((ca = na(z)), (da = na(u)))
                if (c) return [3, 5]
                D.label = 1
              case 1:
                return (
                  D.trys.push([1, 3, , 4]),
                  S(z, ca),
                  S(u, da),
                  (C = q['default'].cardRoot.querySelector('#' + d.SIDESHEET_SUB_CONTENT)),
                  (E = Fa(d)),
                  (J = T(d)),
                  La(C, b, e),
                  Ia(E, L),
                  Ja(E, J),
                  Ma(b, e),
                  [4, Na(m, d, h, b, e, f, n)]
                )
              case 2:
                D.sent()
                if (L.size === Ka) throw (v(b, e, k.ALL_AAPI_CALL_FAIL), Error())
                z.style.opacity = '0'
                v(b, e, k.SIDESHEET_CONTENT_LOAD_LATENCY, Date.now() - x)
                N.delay(function () {
                  O(z, 'aok-hidden')
                  P(C, 'aok-hidden')
                  u.style.opacity = '1'
                }, 200)
                c = !0
                return [3, 4]
              case 3:
                return (
                  D.sent(),
                  v(b, e, k.SIDESHEET_CONTENT_LOAD_ERROR),
                  S(z, ca),
                  S(u, da),
                  P(I, 'aok-hidden'),
                  (z.style.opacity = '0'),
                  N.delay(function () {
                    O(z, 'aok-hidden')
                    u.style.opacity = '1'
                  }, 200),
                  [3, 4]
                )
              case 4:
                return [3, 6]
              case 5:
                0 !== L.size &&
                  L.forEach(function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      var w, F, M, ua, V, va, wa, W, X, ea, Y, fa, Z
                      return t.__generator(this, function (R) {
                        switch (R.label) {
                          case 0:
                            w = p
                            switch (w) {
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
                            return [4, m.getPsiContent({ asin: h })]
                          case 2:
                            return (
                              (F = R.sent()) &&
                              'false' === F.querySelector('#' + d.PSI_AAPI_FAIL).value
                                ? (L.delete(y.PSI),
                                  (M = E.get(g.PSI).contentElement),
                                  (M.style.opacity = '0'),
                                  N.delay(function () {
                                    M.innerHTML = F.outerHTML
                                    M.style.opacity = '1'
                                  }, 500),
                                  (ua = q['default'].cardRoot.querySelector(
                                    '#' + d.SIDESHEET_PSI_CAROUSEL,
                                  )),
                                  qa(ua, b, e))
                                : v(b, e, k.PSI_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 3:
                            return [4, m.getRspManufacturerContent({ asin: h })]
                          case 4:
                            return (
                              (V = R.sent()) &&
                              'false' === V.querySelector('#' + d.RSP_MANUFACTURER_AAPI_FAIL).value
                                ? (L.delete(y.RSP_MANUFACTURER),
                                  (va = V.querySelector('#' + d.SIDESHEET_RSP_CONTENT)),
                                  (wa = V.querySelector('#' + d.SIDESHEET_MANUFACTURER_CONTENT)),
                                  (W = E.get(g.RSP).contentElement),
                                  (X = E.get(g.MANUFACTURER).contentElement),
                                  (W.style.opacity = '0'),
                                  (X.style.opacity = '0'),
                                  N.delay(function () {
                                    W.innerHTML = va.innerHTML
                                    X.innerHTML = wa.innerHTML
                                    W.style.opacity = '1'
                                    X.style.opacity = '1'
                                  }, 500))
                                : v(b, e, k.RSP_MANUFACTURER_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 5:
                            return [4, m.getPdContent({ asin: h })]
                          case 6:
                            return (
                              (ea = R.sent()) &&
                              'false' === ea.querySelector('#' + d.PD_AAPI_FAIL).value
                                ? (L.delete(y.PD),
                                  (Y = E.get(g.PD).contentElement),
                                  (Y.style.opacity = '0'),
                                  N.delay(function () {
                                    Y.innerHTML = ea.innerHTML
                                    pa(Q.Sidesheet, f, d, n, b, e)
                                    Y.style.opacity = '1'
                                  }, 500))
                                : v(b, e, k.PD_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 7:
                            return [4, m.getRedContent({ asin: h })]
                          case 8:
                            return (
                              (fa = R.sent()) &&
                              'false' === fa.querySelector('#' + d.RED_AAPI_FAIL).value
                                ? (L.delete(y.RED),
                                  (Z = E.get(g.RED).contentElement),
                                  (Z.style.opacity = '0'),
                                  N.delay(function () {
                                    Z.innerHTML = fa.innerHTML
                                    Z.style.opacity = '1'
                                  }, 500))
                                : v(b, e, k.RED_AAPI_CALL_FAIL),
                              [3, 9]
                            )
                          case 9:
                            return [2]
                        }
                      })
                    })
                  }),
                  (D.label = 6)
              case 6:
                return Oa(d, l, a, r, b, e), (a = !1), [2, [a, c]]
            }
          })
        })
      },
      Ma = function (a, c) {
        var b,
          f,
          e = function (l) {
            null === (f = E.get(l)) || void 0 === f
              ? void 0
              : f.pillElement.addEventListener('click', function () {
                  sa(l, E)
                  v(a, c, ma.get(l).pillClickMetric)
                })
          }
        try {
          for (var m = t.__values(E.keys()), d = m.next(); !d.done; d = m.next()) e(d.value)
        } catch (l) {
          var h = { error: l }
        } finally {
          try {
            d && !d.done && (b = m.return) && b.call(m)
          } finally {
            if (h) throw h.error
          }
        }
      },
      Na = function (a, c, b, f, e, m, d) {
        return t.__awaiter(void 0, void 0, void 0, function () {
          var h, l, r, n, x, u, z, I, H, C, J, D
          return t.__generator(this, function (p) {
            switch (p.label) {
              case 0:
                ;(h = null), (p.label = 1)
              case 1:
                p.trys.push([1, 23, 24, 25]),
                  (l = t.__values(E.keys())),
                  (r = l.next()),
                  (p.label = 2)
              case 2:
                if (r.done) return [3, 22]
                n = r.value
                x = E.get(n)
                u = void 0
                z = n
                switch (z) {
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
                return (u = p.sent()), [3, 12]
              case 5:
                return null !== h ? [3, 7] : [4, a.getRspManufacturerContent({ asin: b })]
              case 6:
                ;(h = p.sent()), (p.label = 7)
              case 7:
                return (u = h), [3, 12]
              case 8:
                return [4, a.getPdContent({ asin: b })]
              case 9:
                return (u = p.sent()), [3, 12]
              case 10:
                return [4, a.getRedContent({ asin: b })]
              case 11:
                return (u = p.sent()), [3, 12]
              case 12:
                if (
                  !u ||
                  !x.contentElement ||
                  'false' !==
                    (null === (D = u.querySelector('#' + Ga(c, n))) || void 0 === D
                      ? void 0
                      : D.value)
                )
                  return [3, 20]
                L.delete(Da.get(n))
                I = n
                switch (I) {
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
                  (x.contentElement.innerHTML = u.outerHTML),
                  (p = q['default'].cardRoot.querySelector('#' + c.SIDESHEET_PSI_CAROUSEL)),
                  qa(p, f, e),
                  [3, 19]
                )
              case 14:
                p = x
                var w = u.querySelector('#' + c.SIDESHEET_RSP_CONTENT)
                p.contentElement.innerHTML = w.innerHTML
                return [3, 19]
              case 15:
                return (
                  (p = x),
                  (w = u.querySelector('#' + c.SIDESHEET_MANUFACTURER_CONTENT)),
                  (p.contentElement.innerHTML = w.innerHTML),
                  [3, 19]
                )
              case 16:
                return [4, Qa(x, u, c, m, d, f, e)]
              case 17:
                return p.sent(), [3, 19]
              case 18:
                return (x.contentElement.innerHTML = u.outerHTML), [3, 19]
              case 19:
                return [3, 21]
              case 20:
                v(f, e, ma.get(n).aapiCallFailMetric), (p.label = 21)
              case 21:
                return (r = l.next()), [3, 2]
              case 22:
                return [3, 25]
              case 23:
                return (H = p.sent()), (C = { error: H }), [3, 25]
              case 24:
                try {
                  r && !r.done && (J = l.return) && J.call(l)
                } finally {
                  if (C) throw C.error
                }
                return [7]
              case 25:
                return [2]
            }
          })
        })
      },
      Qa = function (a, c, b, f, e, m, d) {
        return t.__awaiter(void 0, void 0, void 0, function () {
          return t.__generator(this, function (h) {
            a.contentElement.innerHTML = c.outerHTML
            pa(Q.Sidesheet, f, b, e, m, d)
            return [2]
          })
        })
      },
      La = function (a, c, b) {
        try {
          aa([a])
        } catch (f) {
          throw (v(c, b, k.MISSING_CRUCIAL_ELEMENTS_ERROR), Error())
        }
      },
      Oa = function (a, c, b, f, e, m) {
        var d,
          h,
          l = U(c)
        ta(a)
        var r,
          n = null === (r = T(a).get(l)) || void 0 === r ? void 0 : r.headerElement
        r = null === n || void 0 === n ? void 0 : n.getAttribute('aria-expanded')
        n && 'false' === r && (n.click(), v(e, m, Ea.get(l)))
        if (b || f)
          sa(c, E, b),
            (c = null === (d = E.get(c)) || void 0 === d ? void 0 : d.pillElement),
            (a = null === (h = T(a).get(l)) || void 0 === h ? void 0 : h.pillContainerElement),
            c && a && ra(c, a)()
      },
      Ra = function () {
        var a = q['default'].cardRoot.querySelector('#' + G.RED_IS_CHARGER_INCLUDED_INPUT)
        a &&
          v(
            A.DESKTOP,
            B.ATF,
            'true' === a.value ? k.RED_LOADED_CHARGER_INCLUDED : k.RED_LOADED_NO_CHARGER_INCLUDED,
          )
      }
    ha._operationNames = [
      'getRspManufacturerContent',
      'getPsiContent',
      'getPdContent',
      'getRedContent',
    ]
    ha.card = function () {
      return t.__awaiter(void 0, void 0, void 0, function () {
        var a, c, b, f, e, m, d, h, l, r, n, x, u, z, I, H, C, J
        return t.__generator(this, function (D) {
          switch (D.label) {
            case 0:
              v(A.DESKTOP, B.ATF, k.CLIENT_LOAD)
              Ra()
              a = q['default'].cardRoot.querySelector('#' + G.LANDING_ASIN)
              if (!a || !a.value) return v(A.DESKTOP, B.ATF, k.MISSING_ASIN_ERROR), [2]
              c = q['default'].cardRoot.querySelector('#' + G.DARKENED_BACKGROUND)
              b = q['default'].cardRoot.querySelector('#' + G.CLOSE_BUTTON)
              f = [c, b]
              try {
                aa(f)
              } catch (p) {
                return v(A.DESKTOP, B.ATF, k.MISSING_CRUCIAL_ELEMENTS_ERROR), [2]
              }
              return [
                4,
                new Promise(function (p, w) {
                  xa(
                    ['@p/buffet-sidesheet-atf'],
                    function (F) {
                      p(Ba(F))
                    },
                    w,
                  )
                }),
              ]
            case 1:
              return (
                (e = D.sent().default),
                (m = Ca['default'].setup([
                  'getRspManufacturerContent',
                  'getPsiContent',
                  'getPdContent',
                  'getRedContent',
                ])),
                (d = !0),
                (h = !1),
                (r = function (p) {
                  return function (w) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      var F
                      return t.__generator(this, function (M) {
                        switch (M.label) {
                          case 0:
                            return (
                              w.preventDefault(),
                              e.showSidesheet(),
                              v(A.DESKTOP, B.ATF, k.SIDESHEET_OPENED),
                              [4, Pa(d, h, A.DESKTOP, !1, B.ATF, m, G, a.value, p, !0, e)]
                            )
                          case 1:
                            F = t.__read.apply(void 0, [M.sent(), 2])
                            d = F[0]
                            if ((h = F[1]))
                              v(A.DESKTOP, B.ATF, k.SIDESHEET_CONTENT_LOADED), (l = Date.now())
                            return [2]
                        }
                      })
                    })
                  }
                }),
                (n = q['default'].cardRoot.querySelector('#' + G.RED_ICON)),
                (x = q['default'].cardRoot.querySelector('#' + G.RED_LINK)),
                n &&
                  x &&
                  ((z =
                    (u = q['default'].cardRoot.querySelector(
                      '#' + G.RED_IS_CHARGER_INCLUDED_INPUT,
                    )) && u.value),
                  n.addEventListener('click', function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      var w
                      return t.__generator(this, function (F) {
                        switch (F.label) {
                          case 0:
                            return (
                              (w =
                                'true' === z
                                  ? k.RED_ICON_CLICK_CHARGER_INCLUDED
                                  : k.RED_ICON_CLICK_NO_CHARGER_INCLUDED),
                              v(A.DESKTOP, B.ATF, w),
                              [4, r(g.RED)(p)]
                            )
                          case 1:
                            return F.sent(), [2]
                        }
                      })
                    })
                  }),
                  x.addEventListener('click', function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      var w
                      return t.__generator(this, function (F) {
                        switch (F.label) {
                          case 0:
                            return (
                              (w =
                                'true' === z
                                  ? k.RED_LINK_CLICK_CHARGER_INCLUDED
                                  : k.RED_LINK_CLICK_NO_CHARGER_INCLUDED),
                              v(A.DESKTOP, B.ATF, w),
                              [4, r(g.RED)(p)]
                            )
                          case 1:
                            return F.sent(), [2]
                        }
                      })
                    })
                  })),
                (I = q['default'].cardRoot.querySelector('#' + G.DYNAMIC_IMAGES_INGRESS)),
                (H = q['default'].cardRoot.querySelector('#' + G.DYNAMIC_DOCUMENTS_INGRESS)),
                (C = q['default'].cardRoot.querySelector('#' + G.DYNAMIC_CONTACTS_INGRESS)),
                I &&
                  I.addEventListener('click', function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      return t.__generator(this, function (w) {
                        switch (w.label) {
                          case 0:
                            return v(A.DESKTOP, B.ATF, k.PSI_INGRESS_LINK_CLICK), [4, r(g.PSI)(p)]
                          case 1:
                            return w.sent(), [2]
                        }
                      })
                    })
                  }),
                C &&
                  C.addEventListener('click', function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      return t.__generator(this, function (w) {
                        switch (w.label) {
                          case 0:
                            return (
                              v(A.DESKTOP, B.ATF, k.RSP_INGRESS_LINK_CLICK),
                              [4, r(g.MANUFACTURER)(p)]
                            )
                          case 1:
                            return w.sent(), [2]
                        }
                      })
                    })
                  }),
                H &&
                  H.addEventListener('click', function (p) {
                    return t.__awaiter(void 0, void 0, void 0, function () {
                      return t.__generator(this, function (w) {
                        switch (w.label) {
                          case 0:
                            return v(A.DESKTOP, B.ATF, k.PD_INGRESS_LINK_CLICK), [4, r(g.PD)(p)]
                          case 1:
                            return w.sent(), [2]
                        }
                      })
                    })
                  }),
                (J = function () {
                  e.closeSidesheet()
                  ta(G)
                  v(A.DESKTOP, B.ATF, k.SIDESHEET_CLOSED)
                  h && v(A.DESKTOP, B.ATF, k.SIDESHEET_DWELL_TIME, Date.now() - l)
                }),
                b.addEventListener('click', function () {
                  J()
                }),
                c.addEventListener('click', function () {
                  J()
                }),
                [2]
              )
          }
        })
      })
    }
  },
)
