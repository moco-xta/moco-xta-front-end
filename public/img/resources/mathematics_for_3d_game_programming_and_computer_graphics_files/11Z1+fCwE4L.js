'use strict'
mix_d(
  'CrossBorderWidgetCards__cross-border-widget:cross-border-widget__jQoC5G4e',
  'exports tslib @c/scoped-dom @c/pagemarker @c/metrics @c/browser-operations @c/remote-operations'.split(
    ' ',
  ),
  function (n, f, A, B, c, C, D) {
    function g(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var p = g(A),
      E = g(B),
      q = g(D),
      h
    ;(h || (h = {})).redericationButtonHandler = 'redericationButtonHandler'
    var r = {
      publishNexusMetric: function (a, d) {
        d.eventName = a
        try {
          c.event(d, 'cartman', 'cbw.logging_raw.1', { ssd: !0 })
        } catch (k) {
          c.count('publishCBWNexusMetricError', 1)
        }
      },
    }
    n._operationNames = ['getNexusEventData', 'getValueHTML']
    n.card = function () {
      return f.__awaiter(void 0, void 0, void 0, function () {
        var a, d, k, t
        return f.__generator(this, function (u) {
          switch (u.label) {
            case 0:
              return c.count('CrossBorderWidgetTotalImpression', 1), [4, E['default'].visible()]
            case 1:
              u.sent()
              a = p['default'].cardRoot.getElementsByClassName(
                '_cross-border-widget_style_preload-widget__2xzSp',
              )[0]
              d = a.dataset
              if (void 0 === d.asin || '' === d.asin)
                return c.count('CBW_input_ASIN_NULL', 1), [2, 204]
              k = d.asin
              t = q['default'].setup()
              t.getValueHTML({ asin: k })
                .then(function (v) {
                  return f.__awaiter(void 0, void 0, void 0, function () {
                    var e, w, l, x, y, b, m
                    return f.__generator(this, function (z) {
                      switch (z.label) {
                        case 0:
                          c.count('CrossBorderWidgetTotalAjaxResponse', 1)
                          a.appendChild(v)
                          e = p['default'].cardRoot.getElementsByClassName(
                            '_cross-border-widget_style_cross-border-widget__JbgVu',
                          )[0].dataset
                          w = 'true' === e.isshowwidget
                          l = e.metricsprefix || 'crossBorderWidget'
                          if (!0 !== w) return [3, 2]
                          c.count(l + 'Impression', 1)
                          x = C.setup().define
                          x(h.redericationButtonHandler, 'click', function (F) {
                            c.count(l + 'Click', 1)
                            r.publishNexusMetric('click', m)
                          })
                          y = q['default'].setup()
                          return [4, y.getNexusEventData({})]
                        case 1:
                          return (
                            (b = z.sent()),
                            (m = {
                              targetMarketplaceId: e.targetmarketplaceid,
                              sourceMarketplaceId: b.sourceMarketplaceId,
                              targetCountryCode: e.targetcountrycode,
                              sourceCountryCode: b.sourceCountryCode,
                              eventName: b.eventName,
                              sessionId: b.sessionId,
                              requestId: b.requestId,
                              customerId: b.customerId,
                              customerType: b.customerType,
                              deviceType: b.deviceType,
                              asin: e.asin,
                            }),
                            r.publishNexusMetric('render', m),
                            [3, 3]
                          )
                        case 2:
                          throw Error('getValueHTML response null')
                        case 3:
                          return [2]
                      }
                    })
                  })
                })
                .catch(function (v) {
                  return 204
                })
              return [2]
          }
        })
      })
    }
  },
)
