;(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d('DetailPageInstallmentCalculatorAssets', '') : b
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window)
      })
})(function (c, b, d) {})
/* ******** */
;(function (b) {
  var g = window.AmazonUIPageJS || window.P,
    p = g._namespace || g.attributeErrors,
    a = p ? p('DetailPagePriceTrackerIngressAssets', '') : g
  a.guardFatal
    ? a.guardFatal(b)(a, window)
    : a.execute(function () {
        b(a, window)
      })
})(function (b, g, p) {
  'use strict'
  b.when('price-tracker-ingress-helper').register('price-tracker-events-registrar', function (a) {
    return {
      registerEventsBasedOnWeblab: function (b) {
        a.handleFirstClickEvent(b)
      },
    }
  })
  b.register('price-tracker-ingress-latency-metrics', function () {
    return { METRIC_LATENCY_WIDGET: 'priceTrackerWidget:assetsLoadedNonCriticalATF' }
  })
  b.execute('price-tracker-ingress-init', function () {
    b.register('price-tracker-ingress-constants', function () {
      return {
        CLICK_ACTION: 'click',
        CLICK_ACTION_ID: 'show-price-tracker',
        MAIN_HANDLER_NAME: 'price-tracker-event-handler',
        ASSETS_LOAD_EVENT: 'priceTrackerIngressClick',
        CLICK_DECLARATIVE_EVENT: 'priceTrackerDeclarativeEvent',
        ASSETS_LOADED_STATE: 'priceTracker:assetsLoaded',
        SPINNER_ID: 'price-tracker-spinner',
        MODAL_NAME: 'price-tracker',
        DATA_STRATEGY: 'preload',
        FAILURE_ID: 'price-tracker-failure',
        MAIN_ASSETS_LOADING_TIMEOUT: 3e4,
        BOTTOM_SHEET_INITIAL_HEIGHT: 100,
        BOTTOM_SHEET_CLOSE_TYPE: 'icon',
        HIDDEN_AOK: 'aok-hidden',
        MOBILE_STYLE: 'price-tracker-style',
        BOTTOM_SHEET_NAME: 'price-tracker',
        PRELOAD_DOM_ID: 'price-tracker',
        PRELOAD_DOM_PARENT_ID: 'price-tracker-parent',
      }
    })
    b.when(
      'A',
      'jQuery',
      'price-tracker-state-handler',
      'price-tracker-ingress-metrics',
      'price-tracker-ingress-constants',
    ).register('price-tracker-ingress-helper', function (a, h, f, d, k) {
      function e(c) {
        return h('#' + c)
      }
      function n(c) {
        return e(null != m ? c + '-' + m : c)
      }
      function q(c) {
        l ||
          b.register(k.CLICK_DECLARATIVE_EVENT, function () {
            l = !0
            return c
          })
      }
      var m = void 0,
        r = void 0,
        l = void 0
      return {
        getElementBasedOnID: e,
        getDynamicID: function (c) {
          return null != m ? c + '-' + m : c
        },
        getElementBasedOnDynamicID: n,
        updateBuyingOptionIndex: function (c) {
          m = c
        },
        showFailureMessage: function () {
          n(k.FAILURE_ID).show()
        },
        logError: function (c) {
          var a = 1 < arguments.length && arguments[1] !== p ? arguments[1] : null
          if (g.ueLogError) {
            var b = {
              logLevel: 'ERROR',
              attribution: 'detail_page_price_tracker_ingress_assets',
              message: c + ' ',
            }
            a || (a = Error('No exception is thrown.'))
            g.ueLogError(a, b)
          }
        },
        registerEvent: function (c, b) {
          if (!a.isListening(c)) a.on(c, b)
        },
        triggerEventToLoadAsset: function (c) {
          b.now().execute(function () {
            f.isMarkerOverrideRegistered() ||
              (b.register(k.ASSETS_LOAD_EVENT),
              d.startTimer(d.METRIC_MAIN_ASSETS_LOADING_LATENCY),
              (r = !0),
              q(c),
              f.setMarkerOverrideRegistered())
          })
        },
        handleFirstClickEvent: q,
        stopAssetsLoadedTimer: function () {
          r && d.stopTimer(d.METRIC_MAIN_ASSETS_LOADING_LATENCY)
        },
      }
    })
    b.register('price-tracker-ingress-metrics', function () {
      return {
        logCountMetric: function (a) {
          g.ue && g.ue.count && g.ue.count(a, 1)
        },
        startTimer: function (a) {
          uet && uet('bb', a, { wb: 1 })
        },
        stopTimer: function (a) {
          uex && uex('ld', a, { wb: 1 })
        },
        reportCriticalFeature: function (a) {
          uet && uet('cf', a, { wb: 1 })
        },
        METRIC_NULL_BUYING_OPTION: 'priceTracker:buyingOption:null',
        METRIC_FAILED_TO_LOAD_ASSETS_WITHIN_TIMEOUT: 'priceTracker:assets:loading:timeout',
        METRIC_ASSETS_LOADED_AFTER_TIMEOUT: 'priceTracker:assets:loading:success:after:timeout',
        METRIC_A11Y_INGRESS_DATA_INCOMPLETE: 'priceTracker:a11y:ingress:data:incomplete',
        METRIC_MAIN_ASSETS_LOADING_LATENCY: 'priceTrackerAssetsLoading',
        METRIC_DESKTOP: 'priceTracker:desktop',
        METRIC_DESKTOP_FATAL: 'priceTracker:desktop:fatal',
        METRIC_MOBILE: 'priceTracker:mobile',
        METRIC_MOBILE_CHANGE_HEIGHT_FATAL: 'priceTracker:mobile:changeHeight:fatal',
        METRIC_MOBILE_FATAL: 'priceTracker:mobile:fatal',
      }
    })
    b.register('price-tracker-state-handler', function () {
      var a = !1
      return {
        isMarkerOverrideRegistered: function () {
          return a
        },
        setMarkerOverrideRegistered: function () {
          a = !0
        },
      }
    })
    b.when(
      'A',
      'price-tracker-ingress-constants',
      'price-tracker-ingress-helper',
      'price-tracker-events-registrar',
      'price-tracker-ingress-metrics',
      'price-tracker-ingress-action-handler-helper-utils',
    ).register('price-tracker-ingress-action-handler-helper', function (a, h, f, d, k, e) {
      function g() {
        return a.delay(function () {
          f.getElementBasedOnDynamicID(h.SPINNER_ID).hide()
          f.showFailureMessage()
          m = !0
          k.logCountMetric(k.METRIC_FAILED_TO_LOAD_ASSETS_WITHIN_TIMEOUT)
        }, h.MAIN_ASSETS_LOADING_TIMEOUT)
      }
      function q() {
        var a = !1
        b.now(h.ASSETS_LOADED_STATE).execute(function (b) {
          'undefined' !== typeof b && (a = b)
        })
        return a
      }
      var m = !1
      return {
        handle: function (a, l) {
          q()
            ? b.when(h.MAIN_HANDLER_NAME).execute(function (c) {
                e.unregisterIngressEventHandlers(l)
                c.renderPriceTracker(a)
              })
            : (function () {
                d.registerEventsBasedOnWeblab(a)
                var c = g()
                b.when(h.MAIN_HANDLER_NAME, h.CLICK_DECLARATIVE_EVENT).execute(function (a, b) {
                  f.stopAssetsLoadedTimer()
                  clearTimeout(c)
                  m &&
                    (f.getElementBasedOnDynamicID(h.FAILURE_ID).hide(),
                    f.getElementBasedOnDynamicID(h.SPINNER_ID).show(),
                    k.logCountMetric(k.METRIC_ASSETS_LOADED_AFTER_TIMEOUT))
                  e.unregisterIngressEventHandlers(l)
                  a.renderPriceTracker(b)
                })
              })()
        },
      }
    })
    b.when('A').register('price-tracker-ingress-action-handler-helper-utils', function (a) {
      return {
        unregisterIngressEventHandlers: function (b) {
          a.off('a:popover:invisible:' + b)
        },
      }
    })
    b.when(
      'A',
      'a-modal',
      'price-tracker-ingress-constants',
      'price-tracker-ingress-helper',
      'price-tracker-ingress-action-handler-helper',
      'price-tracker-ingress-metrics',
      'price-tracker-ingress-latency-metrics',
    ).execute(function (a, b, f, d, g, e, n) {
      a.declarative(f.CLICK_ACTION_ID, f.CLICK_ACTION, function (a) {
        function h(c) {
          var d = b.get(c)
          d && a.$target.data('a-popover-id', d.id)
          c = { name: c, dataStrategy: f.DATA_STRATEGY }
          a && a.data && a.data.priceTrackerCloseA11YLabel && a.data.priceTrackerA11YLabel
            ? ((c.closeButtonLabel = a.data.priceTrackerCloseA11YLabel),
              (c.popoverLabel = a.data.priceTrackerA11YLabel))
            : e.logCountMetric(e.METRIC_A11Y_INGRESS_DATA_INCOMPLETE)
          d = b.create(a.$target, c)
          d.show()
        }
        function k(a) {
          d.registerEvent('a:popover:invisible:' + a, function () {
            d.getElementBasedOnDynamicID(f.FAILURE_ID).hide()
          })
        }
        try {
          if (
            (e.startTimer(n.METRIC_LATENCY_WIDGET),
            e.logCountMetric(e.METRIC_DESKTOP),
            a && a.data && null != a.data.buyingOptionIndex)
          ) {
            d.updateBuyingOptionIndex(a.data.buyingOptionIndex)
            var l = d.getDynamicID(f.MODAL_NAME)
            k(l)
            d.getElementBasedOnDynamicID(f.SPINNER_ID).show()
            h(l)
            e.reportCriticalFeature(n.METRIC_LATENCY_WIDGET)
            g.handle(a, l)
          } else e.logCountMetric(e.METRIC_NULL_BUYING_OPTION), e.stopTimer(n.METRIC_LATENCY_WIDGET)
        } catch (c) {
          e.logCountMetric(e.METRIC_DESKTOP_FATAL),
            d.getElementBasedOnDynamicID(f.SPINNER_ID).hide(),
            d.showFailureMessage(),
            e.stopTimer(n.METRIC_LATENCY_WIDGET),
            d.logError('An error occurred while loading Price Tracker on a desktop client.', c)
        }
      })
    })
    b.when(
      'A',
      'a-modal',
      'price-tracker-ingress-constants',
      'price-tracker-ingress-helper',
      'price-tracker-ingress-action-handler-helper',
      'price-tracker-ingress-metrics',
    ).register('price-tracker-ingress-action-handler', function () {})
  })
})
/* ******** */
