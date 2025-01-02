;(function (b) {
  var a = window.AmazonUIPageJS || window.P,
    d = a._namespace || a.attributeErrors,
    c = d ? d('ARARegisterTriggerSubAssets@utils', '') : a
  c.guardFatal
    ? c.guardFatal(b)(c, window)
    : c.execute(function () {
        b(c, window)
      })
})(function (b, a, d) {
  b.now('ARAConfiguration').execute(function (a) {
    a ||
      b.register('ARAConfiguration', function () {
        return {
          getRoboticSessionId: function () {
            return '000-0000000-0000000'
          },
          getUserAgent: function () {
            return navigator.userAgent
          },
        }
      })
  })
  ;('use strict')
  b.now('ARAAddMetric').execute(function (c) {
    c ||
      b.register('ARAAddMetric', function () {
        return {
          addMetric: function (b, c) {
            a.ue && a.ue.count && a.ue.count(b, c)
          },
        }
      })
  })
  ;('use strict')
  b.now('ARALogError').execute(function (c) {
    c ||
      b.register('ARALogError', function () {
        return {
          logError: function (b) {
            var c = {
              logLevel: 2 < arguments.length && arguments[2] !== d ? arguments[2] : 'ERROR',
              attribution: 'ARARegisterTrigger',
              message: 1 < arguments.length && arguments[1] !== d ? arguments[1] : '',
            }
            a.ueLogError && a.ueLogError(b, c)
            return [b, c]
          },
        }
      })
  })
  ;('use strict')
  b.now('ARAUtils').execute(function (c) {
    c ||
      b.when('ARAAddMetric').register('ARAUtils', function (b) {
        function c() {
          return a.ue_pty
        }
        var p = /development|beta/,
          f = /pre-prod|gamma/,
          q = { 'Google Chrome': 106 }
        return {
          getWindowOpts: function () {
            return a.opts
          },
          getHref: function () {
            return a.location.href
          },
          getStage: function (a) {
            return p.test(a) ? 'beta' : f.test(a) ? 'gamma' : 'prod'
          },
          getCustomerId: function () {
            var e = c() || ''
            if (a.fwcimData)
              return b.addMetric('ARA:UsingFWCIMDataCustomerId:' + e, 1), a.fwcimData.customerId
            if (a.opts)
              return b.addMetric('ARA:UsingWindowOptsCustomerId:' + e, 1), a.opts.customerId
            b.addMetric('ARA:FailedToGetCustomerId:' + e, 1)
          },
          getRequestId: function () {
            if (a.ue) return a.ue.rid
          },
          getASIN: function () {
            return a.ue_pti
          },
          getMarketId: function () {
            if (a.ue) return a.ue.mid
          },
          getSessionId: function () {
            if (a.ue) return a.ue.sid
          },
          getPageType: c,
          getPageLoadStartTime: function (c) {
            if (a.ue && a.ue.t0) return a.ue.t0
            b.addMetric('ARA:FailedToGetPageLoadStart:' + c, 1)
            return !1
          },
          getNavigator: function () {
            return navigator
          },
          registerFetch: function (b) {
            return a.fetch(b, {
              keepalive: !0,
              attributionReporting: { eventSourceEligible: !1, triggerEligible: !0 },
            })
          },
          checkIsBrowserSupported: function () {
            var a = navigator.userAgentData
            if (null == a) return !1
            a = a.brands
            a: {
              if (a && 0 !== a.length) {
                var b = !0,
                  c = !1,
                  l = d
                try {
                  for (var g = a[Symbol.iterator](), m; !(b = (m = g.next()).done); b = !0) {
                    var n = m.value
                    if (Number.parseFloat(n.version) >= q[n.brand]) {
                      var f = !0
                      break a
                    }
                  }
                } catch (r) {
                  ;(c = !0), (l = r)
                } finally {
                  try {
                    !b && g.return && g.return()
                  } finally {
                    if (c) throw l
                  }
                }
              }
              f = !1
            }
            return f
          },
          checkIsFeatureAllowed: function () {
            return 'featurePolicy' in document &&
              'function' === typeof document.featurePolicy.allowsFeature
              ? document.featurePolicy.allowsFeature('attribution-reporting')
              : !1
          },
          getDetailPageState: function () {
            if (a.DetailPage && a.DetailPage.StateController)
              return a.DetailPage.StateController.getState()
          },
        }
      })
  })
  ;('use strict')
  b.now('ARARegisterTriggerHelpers').execute(function (a) {
    a ||
      b
        .when('ARAConfiguration', 'ARAAddMetric', 'ARALogError', 'ARAUtils')
        .register('ARARegisterTriggerHelpers', function (a, b, c, f) {
          function d(a) {
            switch (a) {
              case 'beta':
                return 'https://beta-ara.paa-reporting-advertising.amazon'
              case 'gamma':
                return 'https://gamma-ara.paa-reporting-advertising.amazon'
              case 'prod':
                return 'https://ara.paa-reporting-advertising.amazon'
            }
          }
          function e(a) {
            return d(a) + '/conversion?'
          }
          function h(a) {
            var b = encodeURIComponent
            return Object.keys(a)
              .map(function (c) {
                return Array.isArray(a[c])
                  ? a[c]
                      .map(function (a) {
                        return b(c) + '\x3d' + b(a)
                      })
                      .join('\x26')
                  : b(c) + '\x3d' + b(a[c])
              })
              .join('\x26')
          }
          function k(a, g, d, e, h) {
            return f
              .registerFetch(a)
              .then(function (c) {
                if (d < e)
                  return c.ok
                    ? (b.addMetric('ARA:RegisterTriggerResponseReceived:' + g, 1), c.json())
                    : new Promise(function (b, c) {
                        setTimeout(function () {
                          k(a, g, d + 1, e, 2 * h)
                            .then(b)
                            .catch(c)
                        }, h)
                      })
                throw Error('Exceeded maximum retries')
              })
              .catch(function (a) {
                b.addMetric('ARA:RegisterTriggerResponseError:' + g, 1)
                c.logError(
                  a,
                  'ARA:RegisterTriggerResponseError:' +
                    g +
                    '. Error receiving response from ARAService',
                )
              })
          }
          return {
            generateGatewayUrl: d,
            browserSupportsARA: function (a) {
              var c = f.checkIsBrowserSupported(),
                d = f.checkIsFeatureAllowed()
              c
                ? d || b.addMetric('ARA:ARAFeatureNotEnabled:' + a, 1)
                : b.addMetric('ARA:UserAgentNotSupported:' + a, 1)
              return c && d
            },
            registerTrigger: k,
            generateQuery: h,
            generateConversionBaseUrl: e,
            generateUrl: function (a, b) {
              return e(b) + h(a)
            },
          }
        })
  })
})
/* ******** */
;(function (f) {
  var d = window.AmazonUIPageJS || window.P,
    g = d._namespace || d.attributeErrors,
    b = g ? g('ARARegisterTriggerSubAssets@dpv', '') : d
  b.guardFatal
    ? b.guardFatal(f)(b, window)
    : b.execute(function () {
        f(b, window)
      })
})(function (f, d, g) {
  f.now('DetailedPageInfo').execute(function (b) {
    b ||
      (f.when('A', '3p-promise').register('DetailedPageInfo', function (b, g) {
        var a = {},
          y = b.$
        a.init = function (b, f, d, g, k) {
          a.config = b
          a.helpers = g
          a.utils = k
          a.metrics = f
          a.errors = d
          a.retrieveDPV(!1)
        }
        a.retrieveDPV = function (d) {
          var m = function (e) {
              if (!e.isRoboticTraffic && e.asin && e.obfuscatedMarketplaceId) {
                var c = a.helpers.generateUrl(
                    {
                      asin: e.asin,
                      eventType: 'dpv',
                      debugKey: e.customerId,
                      obfuscatedMarketplaceId: e.obfuscatedMarketplaceId,
                      requestId: e.requestId,
                    },
                    e.stage,
                  ),
                  b = Date.now()
                a.helpers.registerTrigger(c, 'DPV', 0, 1, 100)
                ;(c = a.utils.getPageLoadStartTime(e.pageType)) &&
                  !d &&
                  a.metrics.addMetric('ARA:ScriptLoadLatency:' + e.pageType, b - c)
              } else a.metrics.addMetric('ARA:TotalPunts:DPV', 1)
            },
            n = function (e) {
              var c = y('[data-ssf-share-icon]')
              if (
                (c = c ? c.data() : null) &&
                c.ssfShareIcon &&
                c.ssfShareIcon.shareDataAttributes &&
                c.ssfShareIcon.shareDataAttributes.requestId
              )
                return c.ssfShareIcon.shareDataAttributes.requestId
              a.metrics.addMetric('ARA:DuplicateTwisterRequestId:DPV', 1)
              return e
            },
            p = a.utils.getHref(),
            k = a.utils.getDetailPageState(),
            w = a.utils.getSessionId(),
            q = a.utils.getPageType(),
            r = a.utils.getCustomerId(),
            h = a.utils.getRequestId(),
            t = a.utils.getMarketId(),
            x = a.config.getRoboticSessionId(),
            u = w === x,
            v = a.utils.getStage(p),
            l = void 0
          if (p)
            if (a.helpers.browserSupportsARA('DPV')) {
              a.metrics.addMetric('ARA:BrowserSupportsARA:DPV', 1)
              if (d) {
                if (b.capabilities.mobile) {
                  console.log('mobile')
                  new g(function (a) {
                    f.when('twister-plus-mobile-inline-twister').execute(function (c) {
                      c = c.util.getAsinFromSelectionInfo(c.state())
                      a(c)
                    })
                  }).then(function (a) {
                    l = a
                    h = n(h)
                    m({
                      asin: l,
                      requestId: h,
                      stage: v,
                      pageType: q,
                      customerId: r,
                      obfuscatedMarketplaceId: t,
                      isRoboticTraffic: u,
                    })
                  })
                  return
                }
                k && k.current_asin
                  ? (console.log('desktop'), (l = k.current_asin))
                  : (console.log('neither'), a.metrics.addMetric('ARA:DetailPageStateNotFound', 1))
                h = n(h)
              } else (l = a.utils.getASIN()) || a.metrics.addMetric('ARA:ASINNotFound', 1)
              m({
                asin: l,
                requestId: h,
                stage: v,
                pageType: q,
                customerId: r,
                obfuscatedMarketplaceId: t,
                isRoboticTraffic: u,
              })
            } else a.metrics.addMetric('ARA:BrowserDoesNotSupportARA:DPV', 1)
          else
            a.metrics.addMetric('ARA:PageLoadError:DPV', 1),
              a.errors.logError({
                message: 'ARA:PageLoadError:DPV. Error retrieving url from window.',
              })
        }
        b.on('PageRefresh:ATF', function () {
          a.metrics
            ? (a.metrics.addMetric('ARA:DPVTwisterEventCaptured', 1), a.retrieveDPV(!0))
            : d.ue && d.ue.count && d.ue.count('ARA:DPVTwisterEventMissed', 1)
        })
        return a
      }),
      f
        .when(
          'ARAConfiguration',
          'ARAAddMetric',
          'ARALogError',
          'ARARegisterTriggerHelpers',
          'ARAUtils',
          'DetailedPageInfo',
          'ready',
        )
        .execute(function (b, d, a, f, g, m) {
          m.init(b, d, a, f, g)
        }))
  })
})
/* ******** */
