;(function (b) {
  var c = window.AmazonUIPageJS || window.P,
    d = c._namespace || c.attributeErrors,
    a = d ? d('DetailPageLayoutAssets', '') : c
  a.guardFatal
    ? a.guardFatal(b)(a, window)
    : a.execute(function () {
        b(a, window)
      })
})(function (b, c, d) {
  b.when('A', 'ready').execute(function (a) {
    var b,
      d = a.$
    a.on('a:expander:zones_progressive_disclosure_expander:toggle:collapse', function (a) {
      ;((a = d('#dp-pr-top')) && a.length) || c.scrollTo({ top: b })
    })
    a.on('a:expander:zones_progressive_disclosure_expander:toggle:expand', function (a) {
      b = d(c).scrollTop()
    })
  })
})
/* ******** */
;(function (f) {
  var h = window.AmazonUIPageJS || window.P,
    l = h._namespace || h.attributeErrors,
    c = l ? l('DetailPageMobileIconFarmAssets@common', 'DetailPageMobileIconFarm') : h
  c.guardFatal
    ? c.guardFatal(f)(c, window)
    : c.execute(function () {
        f(c, window)
      })
})(function (f, h, l) {
  f.when('A', 'ready').register('get-icon-farm-page-state', function (c) {
    return {
      parseJSON: function (e, b) {
        b = 'iconfarm-state-' + b
        var d = 'script[data-a-state\x3d"{"key":"' + b + '"}"]',
          a
        try {
          a = c
            .$('#' + e)
            .find(d)
            .html()
        } catch (k) {
          console.log(k.message)
        }
        a ? (e = c.$.parseJSON(a)) : (c.state.parse(), (e = c.state(b)))
        return e
      },
    }
  })
  f.declare('icon-farm-mod-constants', {
    selector: {
      BUYBOX_ACCORDION: '#buybox .a-accordion',
      BUYBOX_ACCORDION_ACTIVE: '#buybox .a-accordion-active',
      iconfarm: '#iconfarmv2_feature_div .offersConsistencyEnabled',
    },
  })
  f.declare('iconfarm-metrics-constants', {
    ICON_FARM_FEATURE_DIV: 'iconFarm_feature_div',
    ICON_FARM_PAGE_STATE_HOLDER_DIV: 'iconfarm-pagestate-holder',
    METRIC_TYPE: {
      GLANCE_VIEW: 'GLANCE_VIEW',
      ICON_CLICK: 'ICON_CLICK',
      SECONDARY_PAGE_OPEN: 'SECONDARY_PAGE_OPEN',
      SECONDARY_PAGE_CLOSE: 'SECONDARY_PAGE_CLOSE',
      FULL_RETURN_POLICY: 'FULL_RETURN_POLICY',
      PAGE_DATA_MISSING: 'PAGE_DATA_MISSING',
      ABSENT: 'ABSENT',
      EXPANDER_OPEN: 'EXPANDER_OPEN',
    },
    REF_MARKER_PREFIX: {
      ICON_FARM_WIDGET: 'iconfarm_wid',
      AMAZON_DELIVERED: 'iconfarm_ad',
      RETURNS_POLICY: 'iconfarm_rp',
      PAY_ON_DELIVERY: 'iconfarm_pod',
      WARRANTY: 'iconfarm_wr',
      EASY_CARE: 'iconfarm_ec',
      AMAZON_PROTECT: 'iconfarm_ap',
      NO_CONTACT_DELIVERY: 'iconfarm_ncd',
      GENERIC_RETURN_POLICY: 'iconfarm_grp',
      MULTIPLE_SPECIFIC_RETURN_POLICY: 'iconfarm_msrp',
      SINGLE_SPECIFIC_RETURN_POLICY: 'iconfarm_ssrp',
      PAYMENTS_AND_SECURITY: 'iconfarm_ps',
      PAY_ON_DELIVERY_ACTIVE: 'iconfarm_pod_active',
      PAY_ON_DELIVERY_INACTIVE: 'iconfarm_pod_inactive',
      WARRANTY_EU: 'iconfarm_wr_eu',
      AMAZON_MANAGED_DELIVERY: 'iconfarm_amd',
      AMAZON_DELIVERED_MENA: 'iconfarm_ad_mena',
      SAFE_PAYMENTS: 'iconfarm_sp',
      STATIC_RETURNS_POLICY: 'iconfarm_srp',
      GENERIC_RETURNS_POLICY: 'iconfarm_grp',
      SUPPORT_POLICY: 'iconfarm_supp',
      WARRANTY360: 'iconfarm_wr360',
      WORRY_FREE_GUARANTEE_JP: 'iconfarm_wfg_jp',
      WARRANTY_JP: 'iconfarm_wr_jp',
      DELIVERY_JP: 'iconfarm_dl_jp',
      RETURN_POLICY_JP: 'iconfarm_rp_jp',
      SMALL_BUSINESS_JP: 'iconfarm_sb_jp',
      DELIVERY_HIT: 'iconfarm_dh',
      WARRANTY_HIT: 'iconfarm_wh',
      RETURN_POLICY_HIT: 'iconfarm_rph',
      CUSTOMER_SUPPORT: 'iconfarm_cs',
      SERVICE: 'iconfarm_serv',
      FREE_DELIVERY: 'iconfarm_fd',
      FREE_DELIVERY_V2: 'iconfarm_fdv2',
      TOP_BRAND: 'iconfarm_tb',
      AUTHENTICITY: 'iconfarm_auth',
    },
    REF_MARKER_SUFFIX: {
      GLANCE_VIEW: '_gv',
      ICON_CLICK: '_clk',
      SECONDARY_PAGE_OPEN: '_sp_op',
      SECONDARY_PAGE_CLOSE: '_sp_cl',
      FULL_RETURN_POLICY: '_frp',
      EXPANDER_OPEN: '_exp_op',
      ABSENT: '_noavail',
    },
    NEXUS_CONFIG: { NEXUS_PRODUCER_ID: 'a2i-dpx', NEXUS_SCHEMA_ID: 'a2i.dpx.WidgetImpressions.3' },
    LOGGER_CONFIG: { NEXUS_LOGGER: 'nexus' },
  })
  f.when(
    'A',
    'iconfarm-return-policy-metric-logger',
    'iconfarm-pay-on-delivery-metric-logger',
    'iconfarm-default-metric-logger',
  ).register('iconfarm-icon-metric-factory', function (c, e, b, d) {
    return {
      getIconMetric: function (a) {
        switch (a) {
          case 'RETURNS_POLICY':
            return e
          case 'PAY_ON_DELIVERY':
            return b
          default:
            return d
        }
      },
    }
  })
  f.when(
    'A',
    'iconfarm-metrics-constants',
    'get-icon-farm-page-state',
    'iconfarm-icon-metric-factory',
    'ready',
  ).register('iconfarm-metricLogger', function (c, e, b, d) {
    return {
      log: function (a, k, m, g) {
        if (a && k && null !== m && e.REF_MARKER_PREFIX[a] && e.REF_MARKER_SUFFIX[k]) {
          var f = c.$('#icon-farm-widget-' + m),
            h = b.parseJSON(e.ICON_FARM_PAGE_STATE_HOLDER_DIV + '-' + m, m)
          h
            ? d.getIconMetric(a).log(
                a,
                k,
                m,
                c.$.extend(
                  !0,
                  {
                    asin: h.asin,
                    merchantId: h.merchantId,
                    remoteAddress: h.remoteAddress,
                    isInternal: h.isInternal,
                    isRobot: h.isRobot,
                    numOfShownIcons: h.numOfShownIcons,
                    buyingOptionIndex: m,
                  },
                  g,
                ),
              )
            : f.length && console.warn('iconfarm state may not be available')
        }
      },
    }
  })
  f.when('A', 'ready').register('iconfarm-postmetric', function () {
    return {
      postCountMetric: function (c) {
        if ('undefined' !== typeof c) {
          var e = h.ue
          if (e) {
            var b = e.count(c) || 0
            e.count(c, b + 1)
          }
        }
      },
      postTimeMetric: function (c, e) {
        if ('undefined' !== typeof c && 'undefined' !== typeof e) {
          var b = h.ue
          b && b.count(c, e)
        }
      },
    }
  })
  f.when('A', 'ready').register('iconfarm-metric-cache', function (c) {
    var e = [],
      b = function (a) {
        if (!d(a)) return !1
        var b = !1
        c.each(e, function (c, d) {
          c.asin === a.asin &&
            c.merchantId === a.merchantId &&
            c.ref === a.ref &&
            c.loggerType === a.loggerType &&
            c.buyingOptionIndex === a.buyingOptionIndex &&
            (b = !0)
        })
        return b
      },
      d = function (a) {
        return a && a.asin && a.merchantId && a.ref && a.loggerType && null !== a.buyingOptionIndex
      }
    return {
      isPresent: b,
      add: function (a) {
        return d(a) ? (b(a) ? !1 : (e.push(a), !0)) : !1
      },
      reset: function () {
        e = []
      },
    }
  })
  ;('use strict')
  f.when('A', 'iconfarm-metric-cache', 'iconfarm-metrics-constants', 'ready').register(
    'iconfarm-Nexus-Service',
    function (c, e, b) {
      return {
        log: function (d) {
          if (e.add(d)) {
            var a = {}
            a.producerId = b.NEXUS_CONFIG.NEXUS_PRODUCER_ID
            a.schemaId = b.NEXUS_CONFIG.NEXUS_SCHEMA_ID
            a.refMarker = d.ref
            a.pageAsin = d.asin
            a.pageType = c.capabilities
              ? c.capabilities.mobile
                ? c.capabilities.isAmazonApp
                  ? 'DetailWebView'
                  : 'DetailAW'
                : 'Detail'
              : ''
            a.subPageType = 'IconFarm'
            a.server = h ? h.ue_sn : ''
            a.merchantId = d.merchantId
            a.remoteAddress = d.remoteAddress
            a.isInternal = d.isInternal ? 1 : 0
            a.isRobot = d.isRobot ? 1 : 0
            var k = {}
            k.numOfShownIcons = d.numOfShownIcons
            k.buyingOptionIndex = d.buyingOptionIndex
            d = JSON.stringify(k)
            a.additionalRequestData = d
            if ((d = h.ue))
              try {
                d.event &&
                  d.event(a, b.NEXUS_CONFIG.NEXUS_PRODUCER_ID, b.NEXUS_CONFIG.NEXUS_SCHEMA_ID)
              } catch (f) {
                d.count('NexusLoggerFailure', 1)
              }
          }
        },
      }
    },
  )
  f.when(
    'A',
    'iconfarm-Nexus-Service',
    'iconfarm-metrics-constants',
    'iconfarm-postmetric',
    'ready',
  ).register('iconfarm-default-metric-logger', function (c, e, b, d) {
    return {
      log: function (a, k, f, g) {
        f = JSON.parse(JSON.stringify(g))
        e.log(
          c.$.extend(!0, f, {
            ref: b.REF_MARKER_PREFIX[a] + b.REF_MARKER_SUFFIX[k],
            loggerType: b.LOGGER_CONFIG.NEXUS_LOGGER,
          }),
        )
        d.postCountMetric(b.REF_MARKER_PREFIX[a] + b.REF_MARKER_SUFFIX[k])
      },
    }
  })
  f.when(
    'A',
    'iconfarm-Nexus-Service',
    'iconfarm-metrics-constants',
    'iconfarm-postmetric',
    'get-icon-farm-page-state',
    'ready',
  ).register('iconfarm-return-policy-metric-logger', function (c, e, b, d, a) {
    return {
      log: function (k, f, g, h) {
        a: {
          if (
            (g = a.parseJSON(b.ICON_FARM_PAGE_STATE_HOLDER_DIV + '-' + g, g)) &&
            g.RETURNS_POLICY &&
            g.RETURNS_POLICY.secondaryViewData &&
            g.RETURNS_POLICY.secondaryViewData.glLevelReturnPolicies
          )
            switch (g.RETURNS_POLICY.secondaryViewData.glLevelReturnPolicies.length) {
              case 0:
                g = 'GENERIC_RETURN_POLICY'
                break a
              case 1:
                g = 'SINGLE_SPECIFIC_RETURN_POLICY'
                break a
              default:
                g = 'MULTIPLE_SPECIFIC_RETURN_POLICY'
                break a
            }
          g = void 0
        }
        k = g || k
        h = JSON.parse(JSON.stringify(h))
        e.log(
          c.$.extend(!0, h, {
            ref: b.REF_MARKER_PREFIX[k] + b.REF_MARKER_SUFFIX[f],
            loggerType: b.LOGGER_CONFIG.NEXUS_LOGGER,
          }),
        )
        d.postCountMetric(b.REF_MARKER_PREFIX[k] + b.REF_MARKER_SUFFIX[f])
      },
    }
  })
  f.when(
    'A',
    'iconfarm-Nexus-Service',
    'iconfarm-metrics-constants',
    'iconfarm-postmetric',
    'get-icon-farm-page-state',
    'ready',
  ).register('iconfarm-pay-on-delivery-metric-logger', function (c, e, b, d, a) {
    return {
      log: function (f, h, g, l) {
        g =
          (g = a.parseJSON(b.ICON_FARM_PAGE_STATE_HOLDER_DIV + '-' + g, g)) &&
          g.PAY_ON_DELIVERY &&
          g.PAY_ON_DELIVERY.isEligible
            ? g.PAY_ON_DELIVERY.isEligible
              ? 'PAY_ON_DELIVERY_ACTIVE'
              : 'PAY_ON_DELIVERY_INACTIVE'
            : void 0
        f = g || f
        l = JSON.parse(JSON.stringify(l))
        e.log(
          c.$.extend(!0, l, {
            ref: b.REF_MARKER_PREFIX[f] + b.REF_MARKER_SUFFIX[h],
            loggerType: b.LOGGER_CONFIG.NEXUS_LOGGER,
          }),
        )
        d.postCountMetric(b.REF_MARKER_PREFIX[f] + b.REF_MARKER_SUFFIX[h])
      },
    }
  })
})
/* ******** */
;(function (e) {
  var k = window.AmazonUIPageJS || window.P,
    g = k._namespace || k.attributeErrors,
    a = g ? g('DetailPageMobileIconFarmAssets@desktop', 'DetailPageMobileIconFarm') : k
  a.guardFatal
    ? a.guardFatal(e)(a, window)
    : a.execute(function () {
        e(a, window)
      })
})(function (e, k, g) {
  e.when(
    'A',
    'a-popover',
    'icon-farm-constants',
    'iconfarm-metricLogger',
    'iconfarm-metrics-constants',
    'icon-farm-web-mod-util',
    'ready',
  ).register('icon-farm-desktop-popover', function (a, l, b, c, d, f) {
    var h = function (b) {
      var h = b.data('name')
      a.off('a:popover:beforeShow:' + h)
      a.on('a:popover:beforeShow:' + h, function (a) {
        a = f.getCurrentBuyingOptionIndex()
        c.log(h, d.METRIC_TYPE.ICON_CLICK, a)
        c.log(h, d.METRIC_TYPE.SECONDARY_PAGE_OPEN, a)
      })
      a.off('a:popover:beforeHide:' + h)
      a.on('a:popover:beforeHide:' + h, function (a) {
        a = f.getCurrentBuyingOptionIndex()
        c.log(h, d.METRIC_TYPE.SECONDARY_PAGE_CLOSE, a)
      })
    }
    return {
      init: function () {
        for (var c = a.$(b.ICON_FARM_CONTAINER_CLASS), f = 0; f < c.length; f++) {
          var d = a.$(c[f]),
            e = d.data(b.TYPE_PARAM)
          if (e && e === b.TYPE_PARAM_VALUE_CUSTOM_POP_OVER) {
            var e = d,
              g = a.$('#' + e.data(b.POPOVER_CONTENT_PARAM)),
              g = {
                activate: b.POPOVER_ACTIVATION,
                position: b.POPOVER_POSITION,
                width: b.POPOVER_WIDTH,
                inlineContent: g.html(),
                name: e.data('name'),
              }
            l.create(e, g)
            h(d)
          }
        }
      },
    }
  })
  e.when(
    'A',
    'get-icon-farm-page-state',
    'icon-farm-constants',
    'iconfarm-metricLogger',
    'iconfarm-metrics-constants',
    'icon-farm-web-mod-util',
    'ready',
  ).register('icon-farm-desktop-returns-policy', function (a, e, b, c, d, f) {
    a.declarative('returns-policy-url', 'click', function (a) {
      a = f.getCurrentBuyingOptionIndex()
      c.log('RETURNS_POLICY', d.METRIC_TYPE.FULL_RETURN_POLICY, a)
      a = e.parseJSON(b.ICON_FARM_PAGE_STATE_HOLDER_DIV + '-' + a, a)
      k.open(a.RETURNS_POLICY.genericReturnPolicyURL, '_blank')
    })
    a.off('a:popover:beforeShow:return-policy-secondary-view')
    a.on('a:popover:beforeShow:return-policy-secondary-view', function (a) {
      a = f.getCurrentBuyingOptionIndex()
      c.log('RETURNS_POLICY', d.METRIC_TYPE.ICON_CLICK, a)
      c.log('RETURNS_POLICY', d.METRIC_TYPE.SECONDARY_PAGE_OPEN, a)
    })
    a.off('a:popover:beforeHide:return-policy-secondary-view')
    a.on('a:popover:beforeHide:return-policy-secondary-view', function (a) {
      a = f.getCurrentBuyingOptionIndex()
      c.log('RETURNS_POLICY', d.METRIC_TYPE.SECONDARY_PAGE_CLOSE, a)
    })
    return { init: function () {} }
  })
  e.when(
    'A',
    'IconFarmPageStateParserService',
    'icon-farm-desktop-popover',
    'icon-farm-desktop-returns-policy',
    'iconfarm-metricLogger',
    'icon-farm-constants',
    'iconfarm-metrics-constants',
    'iconfarm-metric-cache',
    'icon-farm-web-mod-util',
    'icon-farm-change-buying-option',
    'atf',
    'ready',
  ).execute(function (a, l, b, c, d, f, h, g, k, q) {
    function m() {
      g.reset()
      a.loadImageManually(a.$('.icon-box'))
      b.init()
      c.init()
      q.init()
      for (var f = 0; f < n; f++) r(f)
    }
    var n = k.getBuyingOptionCounts(),
      r = function (f) {
        var b = '#icon-farm-widget-' + f,
          c = a.$(b)
        c && c.length
          ? d.log('ICON_FARM_WIDGET', h.METRIC_TYPE.GLANCE_VIEW, f)
          : d.log('ICON_FARM_WIDGET', h.METRIC_TYPE.ABSENT, f)
        ;(b = a.$(b + ' .icon-container')) &&
          b.length &&
          b.each(function () {
            d.log(a.$(this).data('name'), h.METRIC_TYPE.GLANCE_VIEW, f)
          })
      }
    m()
    a.on('a:pageUpdate', function () {
      var b
      a: {
        try {
          if (a.$('#' + f.ICON_FARM_V2_FEATURE_DIV).find('script').length) {
            b = f.ICON_FARM_V2_FEATURE_DIV
            break a
          }
          if (a.$('#' + f.ICON_FARM_V2_PRIMARY_FEATURE_DIV).find('script').length) {
            b = f.ICON_FARM_V2_PRIMARY_FEATURE_DIV
            break a
          }
          d.log('ICON_FARM_WIDGET', h.PAGE_DATA_MISSING, 0)
        } catch (c) {
          e.log(c, 'ERROR', 'DetailPageMobileIconFarm')
        }
        b = void 0
      }
      if (b) {
        for (var g = 0; g < n; g++)
          if (l.isNewState(b, f.ICON_FARM_STATE + '-' + g)) {
            var p = l.processState(b, f.ICON_FARM_STATE + '-' + g)
            if (a.objectIsEmpty(p)) return
          }
        m()
      }
    })
  })
  e.declare('icon-farm-constants', {
    ICON_FARM_FEATURE_DIV: 'iconFarm_feature_div',
    ICON_FARM_V2_FEATURE_DIV: 'iconfarmv2_feature_div',
    ICON_FARM_V2_PRIMARY_FEATURE_DIV: 'iconFarmV2InsidePrimary_feature_div',
    ICON_FARM_PAGE_STATE_HOLDER_DIV: 'iconfarm-pagestate-holder',
    ICON_FARM_CONTAINER_CLASS: '.icon-container',
    ICON_FARM_SECONDARY_VIEW_HOLDER_ID: '#icon-farm-secondary-view-holder',
    ICON_FARM_STATE: 'iconfarm-state',
    POPOVER_ACTIVATION: 'onclick',
    POPOVER_POSITION: 'triggerBottom',
    POPOVER_WIDTH: '533',
    POPOVER_CONTENT_PARAM: 'iconContent',
    TYPE_PARAM: 'type',
    TYPE_PARAM_VALUE: 'bottom-sheet',
    TYPE_PARAM_VALUE_CUSTOM_POP_OVER: 'custom-pop-over',
  })
  ;(function () {
    e.when('A', 'atf', 'ready').register('IconFarmPageStateParserService', function (a) {
      function e(b, c) {
        c = 'script[data-a-state\x3d"' + JSON.stringify({ key: c }) + '"]'
        return a.$('#' + b).find(c)
      }
      return {
        processState: function (b, c) {
          var d
          try {
            var f = e(b, c),
              h = f[0]
            d = f.html()
            var g = a.parseJSON(d)
            a.state(c, g)
            a.$.data(h, 'state_processed', !0)
            return g
          } catch (k) {
            console.log(k)
          }
          return a.state(c)
        },
        isNewState: function (b, c) {
          try {
            return !a.$.data(e(b, c)[0], 'state_processed')
          } catch (d) {
            console.warn('Unable to determine state status', d)
          }
          return !1
        },
      }
    })
  })()
  ;('use strict')
  e.when('A', 'icon-farm-mod-constants').register('icon-farm-web-mod-util', function (a, e) {
    return {
      getBuyingOptionCounts: function () {
        if (!a.$(e.selector.iconfarm).length) return 1
        var b = a.$(e.selector.BUYBOX_ACCORDION)
        if (0 === b.length) return 1
        b = b[0]
        if (a.$(e.selector.iconfarm).length) {
          for (var b = b.children, c = 0, d = 0; d < b.length; d++)
            var f = a.$(b[d]).attr('data-buying-option-index'), c = Math.max(c, f)
          b = c
        } else b = 0
        return b + 1
      },
      getCurrentBuyingOptionIndex: function () {
        var b = 0
        if (!a.$(e.selector.iconfarm).length) return 0
        var c = a.$(e.selector.BUYBOX_ACCORDION_ACTIVE)
        c.length && (b = c.index())
        return b
      },
    }
  })
  e.when('A', 'icon-farm-mod-constants', 'icon-farm-web-mod-util', 'ready').register(
    'icon-farm-change-buying-option',
    function (a, e, b) {
      var c = b.getCurrentBuyingOptionIndex(),
        d = function (b) {
          var d = a.$(e.selector.iconfarm)
          if (d.length) {
            var k = d[0].children
            k.length &&
              ((d = k[c]),
              b !== g &&
                b.selectedRow !== g &&
                b.selectedRow.$row !== g &&
                a.$(b.selectedRow.$row) !== g &&
                ((b = a.$(b.selectedRow.$row).index()),
                b !== c &&
                  ((k = k[b]), (d.style.display = 'none'), (k.style.display = 'block'), (c = b))))
          }
        }
      return {
        init: function () {
          a.on('a:pageUpdate', d)
          a.on('PageRefresh:ATF', d)
          a.on('a:accordion:buybox-accordion:select', d)
        },
      }
    },
  )
})
/* ******** */
;(function (d) {
  var f = window.AmazonUIPageJS || window.P,
    g = f._namespace || f.attributeErrors,
    b = g ? g('DetailPageSocialProofingAssets@common', 'DetailPageSocialProofing') : f
  b.guardFatal
    ? b.guardFatal(d)(b, window)
    : b.execute(function () {
        d(b, window)
      })
})(function (d, f, g) {
  d.declare('socialProofingConstants', {
    socialProofingAUIState: 'social-proofing-page-state-cache',
    socialProofingState: 'social-proofing-page-state',
    socialProofingTriggeredAsinsState: 'social-proofing-triggered-asins-page-state',
    socialProofingBadgeClass: '.social-proofing-badge',
    socialProofingFaceoutClass: '.social-proofing-faceout',
    socialProofingBadgeWeblabDivId: '#social-proofing-badge-weblab-data',
    MOBILE_APP: 'mobileApp',
    ATTRIBUTION: 'SocialProofing',
  })
  ;('use strict')
  d.when('A', 'socialProofingConstants', 'socialProofingPageState', 'ready').register(
    'socialProofingUtil',
    function (b, e, h) {
      function k(b, a) {
        f.ue && f.ue.trigger
          ? f.ue.trigger(b, a)
          : d.log(
              'Failed to get ue and ue.trigger for weblab: ' + b + 'and treatment: ' + a,
              'WARN',
              e.ATTRIBUTION,
            )
      }
      return {
        getAttributeFromPageState: function (c) {
          var a = b.state(e.socialProofingState)
          if (a) return a[c]
        },
        triggerWebLab: k,
        triggerWeblabsBySectionId: function (c) {
          c = b.$(c)
          if (c.length) {
            if (!h.isWeblabTriggered() && (c = c[0])) {
              c = c.dataset
              for (var a in c) k(a.toString().toUpperCase(), c[a])
              h.updateWeblabTriggeredToTrue()
            }
          } else b.state.replace(e.socialProofingTriggeredAsinsState, {})
        },
      }
    },
  )
  ;('use strict')
  d.when('A', 'socialProofingConstants', 'ready').register(
    'socialProofingPageState',
    function (b, e) {
      function d() {
        var a = b.state(c)
        if (a) return a.asin
      }
      function f() {
        var a = b.state(e.socialProofingTriggeredAsinsState)
        return a
          ? !0 === a.weblabTriggered
          : (b.state.replace(e.socialProofingTriggeredAsinsState, { weblabTriggered: !1 }), !1)
      }
      var c = e.socialProofingState
      return {
        reloadPageState: function () {
          b.each(b.$('.social-proofing-badge').siblings('[data-a-state]'), function (a) {
            b.parseJSON(b.$(a).attr('data-a-state')).key === c &&
              (a = b.parseJSON(b.$(a).html())) &&
              a.asin !== d() &&
              (b.state.replace(c, a, !0), b.state.replace(e.socialProofingTriggeredAsinsState, {}))
          })
          b.each(b.$('.social-proofing-faceout').siblings('[data-a-state]'), function (a) {
            b.parseJSON(b.$(a).attr('data-a-state')).key === c &&
              (a = b.parseJSON(b.$(a).html())) &&
              a.asin !== d() &&
              b.state.replace(c, a, !0)
          })
        },
        isMobileApp: function () {
          var a = b.state(c)
          if (a) return a.deviceType === e.MOBILE_APP
        },
        getAsin: d,
        getMerchantId: function () {
          var a = b.state(c)
          if (a) return a.merchantId
        },
        getRemoteAddress: function () {
          var a = b.state(c)
          if (a) return a.remoteAddress
        },
        getIsInternal: function () {
          var a = b.state(c)
          if (a) return a.isInternal
        },
        getIsRobot: function () {
          var a = b.state(c)
          if (a) return a.isRobot
        },
        getAvailableBadges: function () {
          var a = b.state(c)
          if (a) return a.availableBadges
        },
        getAvailableFaceouts: function () {
          var a = b.state(c)
          if (a) return a.availableFaceouts
        },
        isWeblabTriggered: f,
        updateWeblabTriggeredToTrue: function () {
          var a = b.state(e.socialProofingTriggeredAsinsState)
          a &&
            !f() &&
            ((a.weblabTriggered = !0), b.state.replace(e.socialProofingTriggeredAsinsState, a))
        },
      }
    },
  )
})
/* ******** */
;(function (f) {
  var c = window.AmazonUIPageJS || window.P,
    e = c._namespace || c.attributeErrors,
    d = e ? e('DetailPageSocialProofingAssets@logger', 'DetailPageSocialProofing') : c
  d.guardFatal
    ? d.guardFatal(f)(d, window)
    : d.execute(function () {
        f(d, window)
      })
})(function (f, c, e) {
  f.when('A', 'ready').register('socialProofingNexusLogger', function (d) {
    function f(b) {
      var a = c.ue
      if (a)
        try {
          a.event && a.event(b, b.producerId, b.schemaId)
        } catch (d) {
          a.count('NexusLoggerFailure', 1)
        }
    }
    var a = {}
    return {
      createEvent: function (b) {
        a.producerId = b.producerId
        a.schemaId = b.schemaId
        a.pageAsin = b.pageAsin
        a.pageType = b.pageType
        a.subPageType = b.subPageType
        a.merchantId = b.merchantId
        a.remoteAddress = b.remoteAddress
        a.isInternal = b.isInternal ? 1 : 0
        a.isRobot = b.isRobot ? 1 : 0
        a.server = c ? c.ue_sn : ''
      },
      logNexusEvent: function (b, c) {
        if (0 !== Object.keys(a).length) {
          var e = JSON.parse(JSON.stringify(a))
          e.refMarker = b
          d.objectIsEmpty(c) ||
            Object.keys(c).forEach(function (a) {
              e[a] = c[a]
            })
          f(e)
        }
      },
    }
  })
})
/* ******** */
;(function (a) {
  var c = window.AmazonUIPageJS || window.P,
    e = c._namespace || c.attributeErrors,
    b = e ? e('DetailPageSocialProofingAssets@badges', 'DetailPageSocialProofing') : c
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window)
      })
})(function (a, c, e) {
  a.when('A', 'socialProofingConstants', 'ready').register(
    'socialProofingBadgeUtil',
    function (b, d) {
      return {
        isSocialProofingBadgePresent: function () {
          return 0 < b.$(d.socialProofingBadgeClass).length
        },
      }
    },
  )
  ;('use strict')
  a.declare('socialProofingBadgeMetricConstants', {
    NEXUS_PRODUCER_ID: 'a2i-dpx',
    NEXUS_SCHEMA_ID: 'a2i.dpx.WidgetImpressions.3',
    pageTypeWebview: 'DetailWebview',
    pageTypeAW: 'DetailAW',
    subPageType: 'INAffordability',
    refMarker: { glanceView: 'social_proofing_badge_present' },
  })
  ;('use strict')
  a.when(
    'A',
    'socialProofingPageState',
    'socialProofingBadgeMetricConstants',
    'socialProofingNexusLogger',
  ).register('socialProofingBadgeNexusLogger', function (b, d, a, c) {
    return {
      createSocialProofingBadgeNexusEvent: function () {
        c.createEvent({
          producerId: a.NEXUS_PRODUCER_ID,
          schemaId: a.NEXUS_SCHEMA_ID,
          pageType: d.isMobileApp() ? a.pageTypeWebview : a.pageTypeAW,
          subPageType: a.subPageType,
          pageAsin: d.getAsin(),
          merchantId: d.getMerchantId(),
          remoteAddress: null,
          isInternal: d.getIsInternal(),
          isRobot: d.getIsRobot(),
        })
      },
      logGlanceViewData: function () {
        var b = d.getAvailableBadges()
        b && c.logNexusEvent(a.refMarker.glanceView, { additionalRequestData: b })
      },
      logMetrics: function (a, b) {
        c.logNexusEvent(a, b)
      },
    }
  })
})
/* ******** */
;(function (a) {
  var c = window.AmazonUIPageJS || window.P,
    e = c._namespace || c.attributeErrors,
    b = e ? e('DetailPageSocialProofingAssets@faceouts', 'DetailPageSocialProofing') : c
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window)
      })
})(function (a, c, e) {
  a.when('A', 'socialProofingConstants', 'ready').register(
    'socialProofingFaceoutUtil',
    function (b, d) {
      return {
        isSocialProofingFaceoutPresent: function () {
          return 0 < b.$(d.socialProofingFaceoutClass).length
        },
      }
    },
  )
  ;('use strict')
  a.declare('socialProofingFaceoutMetricConstants', {
    NEXUS_PRODUCER_ID: 'a2i-dpx',
    NEXUS_SCHEMA_ID: 'a2i.dpx.WidgetImpressions.3',
    pageTypeWebview: 'DetailWebview',
    pageTypeAW: 'DetailAW',
    subPageType: 'INAffordability',
    refMarker: { glanceView: 'social_proofing_faceout_present' },
  })
  ;('use strict')
  a.when(
    'A',
    'socialProofingPageState',
    'socialProofingFaceoutMetricConstants',
    'socialProofingNexusLogger',
  ).register('socialProofingFaceoutNexusLogger', function (b, d, a, c) {
    return {
      createSocialProofingFaceoutNexusEvent: function () {
        c.createEvent({
          producerId: a.NEXUS_PRODUCER_ID,
          schemaId: a.NEXUS_SCHEMA_ID,
          pageType: d.isMobileApp() ? a.pageTypeWebview : a.pageTypeAW,
          subPageType: a.subPageType,
          pageAsin: d.getAsin(),
          merchantId: d.getMerchantId(),
          remoteAddress: null,
          isInternal: d.getIsInternal(),
          isRobot: d.getIsRobot(),
        })
      },
      logGlanceViewData: function () {
        var b = d.getAvailableFaceouts()
        b && c.logNexusEvent(a.refMarker.glanceView, { additionalRequestData: b })
      },
      logMetrics: function (a, b) {
        c.logNexusEvent(a, b)
      },
    }
  })
})
/* ******** */
;(function (b) {
  var a = window.AmazonUIPageJS || window.P,
    d = a._namespace || a.attributeErrors,
    c = d ? d('DetailPageSocialProofingAssets@desktop', 'DetailPageSocialProofing') : a
  c.guardFatal
    ? c.guardFatal(b)(c, window)
    : c.execute(function () {
        b(c, window)
      })
})(function (b, a, d) {
  b.when(
    'A',
    'socialProofingPageState',
    'socialProofingBadgeNexusLogger',
    'socialProofingFaceoutNexusLogger',
    'socialProofingBadgeUtil',
    'socialProofingFaceoutUtil',
    'socialProofingUtil',
    'socialProofingConstants',
    'atf',
    'ready',
  ).execute(function (c, b, a, e, d, f, g, h) {
    c.on('a:pageUpdate', function () {
      d.isSocialProofingBadgePresent() &&
        (b.reloadPageState(), a.createSocialProofingBadgeNexusEvent(), a.logGlanceViewData())
      g.triggerWeblabsBySectionId(h.socialProofingBadgeWeblabDivId)
      f.isSocialProofingFaceoutPresent() &&
        (b.reloadPageState(), e.createSocialProofingFaceoutNexusEvent(), e.logGlanceViewData())
    })
    d.isSocialProofingBadgePresent() &&
      (a.createSocialProofingBadgeNexusEvent(), a.logGlanceViewData())
    g.triggerWeblabsBySectionId(h.socialProofingBadgeWeblabDivId)
    f.isSocialProofingFaceoutPresent() &&
      (e.createSocialProofingFaceoutNexusEvent(), e.logGlanceViewData())
  })
})
/* ******** */
;(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d('DetailPageBylineInfoAssets@core', 'DetailPageBylineInfo') : b
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window)
      })
})(function (c, b, d) {})
/* ******** */
;(function (v) {
  var k = window.AmazonUIPageJS || window.P,
    h = k._namespace || k.attributeErrors,
    L = h ? h('SocialShareWidgetAUI', 'AmazonUI') : k
  L.guardFatal
    ? L.guardFatal(v)(L, window)
    : L.execute(function () {
        v(L, window)
      })
})(function (v, k, h) {
  function L(e) {
    if (Array.isArray(e)) {
      for (var h = 0, k = Array(e.length); h < e.length; h++) k[h] = e[h]
      return k
    }
    return Array.from(e)
  }
  ;('use strict')
  ;('use strict')
  v.register('SocialShareWidget', function () {
    var e
    ;(function () {
      var h = {
          353: function (e, a, m) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            var f = m(905),
              b = m(738)
            e = (function () {
              function a() {
                var x = this
                this.generateTimestampCollection = function () {
                  var a = new Date().getTimezoneOffset()
                  a = x.getDateTimeByOffset(a)
                  var c = x.getDateTimeByOffset(0)
                  return { hitDay: a.split('T')[0], hitDatetime: a, hitDatetimeUtc: c }
                }
                this.getMarketplaceId = function (a) {
                  return 'string' == typeof a
                    ? a
                    : k.ue && k.ue.mid
                      ? k.ue.mid
                      : b.CSA_DEFAULT_VALUE.string
                }
                var c = this.generateTimestampCollection()
                this.csaMetricsData = {
                  schemaId: a.CSA_SCHEMA_ID,
                  userAgentId: b.CSA_DEFAULT_VALUE.number,
                  hitDay: c.hitDay,
                  hitDatetime: c.hitDatetime,
                  hitDatetimeUtc: c.hitDatetimeUtc,
                  pageType: k.ue_pty ? k.ue_pty : b.CSA_DEFAULT_VALUE.string,
                  subPageType: k.ue_spty ? k.ue_spty : b.CSA_DEFAULT_VALUE.string,
                  sessionId: k.ue && k.ue.sid ? k.ue.sid : b.CSA_DEFAULT_VALUE.string,
                }
              }
              return (
                (a.prototype.withCSAClickEventData = function (a) {
                  var c = a.shareDataAttributes
                  if (
                    ((this.csaMetricsData.customerId = c.customerId
                      ? c.customerId
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.httpRequestId = c.requestId
                      ? c.requestId
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.asin = c.asin ? c.asin : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.ingress = c.ingress
                      ? c.ingress
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.platform = c.platform
                      ? c.platform
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.isInternal = this.getCSANumberMapping(c.isInternal)),
                    (this.csaMetricsData.isRobot = this.getCSANumberMapping(c.isRobot)),
                    (this.csaMetricsData.channel = a.channel
                      ? a.channel
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.refMarker = a.refMarker
                      ? a.refMarker
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.referrerUrl = a.refererURL
                      ? a.refererURL
                      : b.CSA_DEFAULT_VALUE.string),
                    (this.csaMetricsData.marketplaceId = this.getMarketplaceId(c.marketplaceId)),
                    (this.csaMetricsData.isExperiment = /T\d+/.test(a.treatment) ? 'Y' : 'N'),
                    (this.csaMetricsData.triggeredFromScreenshotToast =
                      !!c.triggeredFromScreenshotToast && c.triggeredFromScreenshotToast),
                    a.weblab)
                  )
                    (c = this.csaMetricsData.shareEntities),
                      ((c = void 0 === c ? {} : c)[a.weblab] = a.treatment),
                      (this.csaMetricsData.shareEntities = c)
                  a.customizeShareCSAData &&
                    ((c = this.csaMetricsData.shareEntities),
                    (c = void 0 === c ? {} : c),
                    a.customizeShareCSAData.isCustomizedExperienceEnabled === b.TRUE &&
                      ((c.backgroundImagePhysicalId =
                        a.customizeShareCSAData.backgroundImagePhysicalId),
                      (c.deviceCoverImagePhysicalId =
                        a.customizeShareCSAData.deviceCoverImagePhysicalId),
                      (c.hasQuote = a.customizeShareCSAData.hasQuote),
                      (c.isCustomized = a.customizeShareCSAData.isCustomized),
                      (c.customizePreSelected = a.customizeShareCSAData.customizePreSelected),
                      (c.isQuotesAvailable = a.customizeShareCSAData.isQuotesAvailable),
                      (this.csaMetricsData.shareEntities = c)))
                  a.isCustomShareOptionsSheetEnabled &&
                    ((c = this.csaMetricsData.shareEntities),
                    ((c = void 0 === c ? {} : c).isCustomShareOptionsSheetEnabled = '1'),
                    (this.csaMetricsData.shareEntities = c))
                  a.caf &&
                    ((c = this.csaMetricsData.shareEntities),
                    ((c = void 0 === c ? {} : c).cafSwitchEnabled = a.cafSwitchEnabled
                      ? b.TRUE
                      : b.FALSE),
                    (this.csaMetricsData.shareEntities = c))
                  a.cafEdCXIngressWeblabTreatment &&
                    ((c = this.csaMetricsData.shareEntities),
                    ((c = void 0 === c ? {} : c).cafEdCxIngressWelabT1 =
                      'T1' === a.cafEdCXIngressWeblabTreatment ? b.TRUE : b.FALSE),
                    (c.cafEdCxIngressWelabT2 =
                      'T2' === a.cafEdCXIngressWeblabTreatment ? b.TRUE : b.FALSE))
                  return this
                }),
                (a.prototype.withShareHitType = function (a) {
                  return (this.csaMetricsData.shareHitType = a || b.CSA_DEFAULT_VALUE.string), this
                }),
                (a.prototype.getCSANumberMapping = function (a) {
                  return isNaN(Number(a)) ? 2 : Number(a)
                }),
                (a.prototype.getDateTimeByOffset = function (b) {
                  var c = new Date()
                  0 !== b &&
                    ((b *= a.MINUTES_TO_MILISECONDS), (c = c.getTime() - b), (c = new Date(c)))
                  return c.toISOString().split('Z')[0].split('.')[0]
                }),
                (a.prototype.logEvent = function () {
                  ;(0, f.isCSALoaded)() &&
                    k.csa(a.CSAPluginId, { producerId: a.CSA_PRODUCER_ID })(
                      a.CSA_LOG_EVENT,
                      this.csaMetricsData,
                    )
                }),
                (a.MINUTES_TO_MILISECONDS = 6e4),
                (a.CSAPluginId = 'Events'),
                (a.CUSTOMIZE_SHARE_ENTITY_NAME = 'CustomizeShare'),
                (a.CSA_PRODUCER_ID = 'social-share'),
                (a.CSA_LOG_EVENT = 'log'),
                (a.CSA_SCHEMA_ID = 'SocialShareCSACustomEvent.CSAShareMetrics.8'),
                a
              )
            })()
            a.default = e
          },
          305: function (e, a) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.default = function (a, f) {
              var b = {
                email: {
                  label: 'Email',
                  name: 'email',
                  ref: 'em',
                  shareBaseUrl: 'mailto:',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'email-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'email-squared.svg',
                  ),
                  canOpenInPopup: !1,
                  getSharingUrl: function (b) {
                    var c = '?subject\x3d'.concat(encodeURIComponent(a.emailSubject || a.title)),
                      d = '\x26body\x3d'.concat(encodeURIComponent(a.title))
                    b = encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref))
                    return ''.concat(this.shareBaseUrl).concat(c).concat(d, ' ').concat(b)
                  },
                },
                pi: {
                  label: 'Pinterest',
                  name: 'pinterest',
                  ref: 'pi',
                  shareBaseUrl: 'https://www.pinterest.com/pin/create/button/',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'pinterest-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'pinterest-squared.svg',
                  ),
                  canOpenInPopup: !0,
                  getSharingUrl: function (b) {
                    b = '?url\x3d'.concat(
                      encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref)),
                    )
                    var c = '\x26description\x3d'.concat(encodeURIComponent(a.title)),
                      d = '\x26media\x3d'.concat(encodeURIComponent(a.image))
                    return ''
                      .concat(this.shareBaseUrl)
                      .concat(b)
                      .concat(c)
                      .concat(d, '\x26method\x3dbutton')
                  },
                },
                li: {
                  label: 'Line',
                  name: 'line',
                  ref: 'li',
                  shareBaseUrl: 'https://social-plugins.line.me/lineit/share',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'line-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'line-squared.svg',
                  ),
                  canOpenInPopup: !0,
                  getSharingUrl: function (b) {
                    var c = '?text\x3d'
                      .concat(encodeURIComponent(a.text), ' ')
                      .concat(encodeURIComponent(a.title))
                    b = '\x26url\x3d'.concat(
                      encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref)),
                    )
                    return ''.concat(this.shareBaseUrl).concat(c).concat(b)
                  },
                },
                fb: {
                  label: 'Facebook',
                  name: 'facebook',
                  ref: 'fa',
                  shareBaseUrl: 'https://www.facebook.com/dialog/share',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'facebook-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'facebook-squared.svg',
                  ),
                  canOpenInPopup: !0,
                  getSharingUrl: function (b) {
                    b = encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref))
                    var c = encodeURIComponent(
                        a.shareUrl.getReturnForChannel(this.ref).replace('_r_', '_s_'),
                      ),
                      d = encodeURIComponent('#' + (a.hashtags[0] || 'Amazon'))
                    b = [
                      '?_encoding\x3dUTF8\x26app_id\x3d465632727431967\x26display\x3dpopup',
                      'href\x3d'.concat(b),
                      'redirect_uri\x3d'.concat(c),
                      'hashtag\x3d'.concat(d),
                    ].join('\x26')
                    return ''.concat(this.shareBaseUrl).concat(b)
                  },
                },
                tw: {
                  label: 'X',
                  name: 'x',
                  ref: 'tw',
                  shareBaseUrl: 'https://twitter.com/intent/tweet',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'x-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'x-squared.svg',
                  ),
                  canOpenInPopup: !0,
                  getSharingUrl: function (b) {
                    var c = '?text\x3d'.concat(encodeURIComponent(a.title))
                    b = '\x26url\x3d'.concat(
                      encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref)),
                    )
                    var d = '\x26hashtags\x3d'.concat(a.hashtags.join(',')),
                      x = '\x26via\x3d'.concat(encodeURIComponent('Amazon'))
                    return ''.concat(this.shareBaseUrl).concat(c).concat(b).concat(d).concat(x)
                  },
                },
                wa: {
                  label: 'WhatsApp',
                  name: 'whatsapp',
                  ref: 'wa',
                  shareBaseUrl: 'https://api.whatsapp.com/send?text\x3d',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'whatsapp-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'whatsapp-squared.svg',
                  ),
                  canOpenInPopup: !0,
                  getSharingUrl: function (b) {
                    b = '\n              '
                      .concat(encodeURIComponent(a.title), '\n              ')
                      .concat(encodeURIComponent(a.text), '\n              ')
                      .concat(encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref)))
                    return ''.concat(this.shareBaseUrl).concat(b)
                  },
                },
                sms: {
                  label: 'SMS',
                  name: 'sms',
                  ref: 'sms',
                  shareBaseUrl: 'sms:',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'sms-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'sms-squared.svg',
                  ),
                  canOpenInPopup: !1,
                  getSharingUrl: function (b) {
                    b = '\n              '
                      .concat(encodeURIComponent(a.title), '\n              ')
                      .concat(encodeURIComponent(b || a.shareUrl.getReturnForChannel(this.ref)))
                    return ''.concat(this.shareBaseUrl).concat(b)
                  },
                },
                embed: {
                  label: 'Embed',
                  name: 'embed',
                  ref: 'eb',
                  shareBaseUrl: '',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'embed-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'embed-squared.svg',
                  ),
                  canOpenInPopup: !1,
                  getSharingUrl: function () {
                    return ''
                  },
                },
                copy: {
                  label: 'Copy',
                  name: 'copy',
                  ref: 'cp',
                  shareBaseUrl: '',
                  image: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'link-circular.svg',
                  ),
                  imageSquared: ''.concat(
                    'https://m.media-amazon.com/images/G/01/share-icons/',
                    'link-squared.svg',
                  ),
                  canOpenInPopup: !1,
                  getSharingUrl: function () {
                    return ''
                  },
                },
              }
              if (null == f ? 0 : f.length) {
                var d = {}
                return (
                  f.forEach(function (a) {
                    b[a] && (d[a] = b[a])
                  }),
                  d
                )
              }
              return b
            }
          },
          738: function (e, a) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.Err = { Abort: 'AbortError' }
            e = a.CSA_HIT_TYPE = {}
            e.CLICK_SUCCESS = 'click_success'
            e.CLICK_ERROR = 'click_error'
            e.CLICK_CANCEL = 'click_cancel'
            e.SHARE = 'share'
            e.CUSTOMIZE_SHARE = 'click_customize_success'
            a.customize = 'customize'
            a.customShareOptions = 'customShareOptions'
            a.customizeShareStateKey = 'customizeShareCSAData'
            a.CSA_DEFAULT_VALUE = { string: 'unknown', number: 0, boolean: 2 }
            a.CAF_LEARN_MORE_KEY = 'learn_more_link'
            a.CAF_INFO_ICON_KEY = 'info_icon'
            a.UNKNOWN = 'unknown'
            a.DEFAULT_CSA_REF_ID = 'u_'
            a.EMPTY_STRING = ''
            a.RAW_CHANNEL_PREFIX = 'raw:'
            a.CP_CHANNEL_REF = 'cp'
            a.CUSTOM_SHARE_OPTIONS_CP_CHANNEL_REF = 'cso_cp'
            a.CUSTOM_SHARE_OPTIONS_REF_PREFIX = 'cso'
            a.BOOKS_REF_PREFIX = 'bks'
            a.BOOKS_CUSTOMIZE_PREVIEW_NOT_AVAILABLE = 't2cna'
            a.CAF_REF_PREFIX = 'caf'
            a.EMBED_CHANNEL_REF = 'eb'
            a.BEST_FORMAT_REF = 'ffobk'
            a.FALSE = 'false'
            a.TRUE = 'true'
            a.CUSTOM_SHEET_CLICK_LATENCY_METRIC = 'CustomShareSheet.Click'
            a.CAF_CUSTOM_SHEET_CLICK_LATENCY_METRIC = 'Caf.CustomShareSheet.Click'
            a.BOOKS_CUSTOM_SHEET_CLICK_LATENCY_METRIC = 'Books.CustomShareSheet.Click'
            a.SSF_AUI_PACKAGE_ATTRIBUTION = 'SocialShareWidgetAUI'
            a.REGEX_TO_REF_ID_AND_CHANNEL_APP = {
              instagram: { refId: 'in', channel: 'Instagram' },
              snap: { refId: 'sn', channel: 'Snapchat' },
              discord: { refId: 'di', channel: 'Discord' },
              viber: { refId: 'vi', channel: 'Viber' },
              telegram: { refId: 'te', channel: 'Telegram' },
              pinterest: { refId: 'pi', channel: 'Pinterest' },
              qzone: { refId: 'qz', channel: 'QQ Zone' },
              renren: { refId: 're', channel: 'Renren' },
              twitter: { refId: 'tw', channel: 'Twitter' },
              airdrop: { refId: 'ar', channel: 'AirDrop' },
              tencentweibo: { refId: 'tc', channel: 'Tencent Weibo' },
              wechatmoment: { refId: 'wm', channel: 'WeChat Moment' },
              line: { refId: 'li', channel: 'Line' },
              whatsapp: { refId: 'wa', channel: 'Whatsapp' },
              weibo: { refId: 'si', channel: 'Sina Weibo' },
              facebook: { refId: 'fb', channel: 'Facebook' },
            }
            a.defaultShareDataAttributes = {
              isInternal: a.CSA_DEFAULT_VALUE.boolean,
              isRobot: a.CSA_DEFAULT_VALUE.boolean,
              userAgent: a.CSA_DEFAULT_VALUE.number,
              platform: a.CSA_DEFAULT_VALUE.string,
              ingress: a.CSA_DEFAULT_VALUE.string,
              asin: a.CSA_DEFAULT_VALUE.string,
              requestId: a.CSA_DEFAULT_VALUE.string,
              customerId: a.CSA_DEFAULT_VALUE.string,
              marketplaceId: a.CSA_DEFAULT_VALUE.string,
            }
            a.defaultCustomizeShareCSAData = {
              backgroundImagePhysicalId: a.EMPTY_STRING,
              deviceCoverImagePhysicalId: a.EMPTY_STRING,
              hasQuote: a.EMPTY_STRING,
              isCustomizedExperienceEnabled: a.EMPTY_STRING,
              isCustomized: a.EMPTY_STRING,
            }
          },
          905: function (e, a, m) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.isSafari =
              a.isCSALoaded =
              a.isNativeAppShareAvailable =
              a.isNativeWebShareAvailable =
              a.isMobileWeb =
              a.isMobileApp =
              a.isDesktop =
              a.isIpadIOS =
              a.isIOS =
              a.isAndroid =
              a.isIE =
              a.isAUILoaded =
              a.isUeAvailable =
              a.isClipboardAvailable =
              a.isRTL =
              a.isTwisterAsin =
              a.context =
              a.Device =
                void 0
            var f,
              b = m(161)
            !(function (a) {
              a.Android = 'apan'
              a.IOS = 'apin'
              a.MWeb = 'mwn'
              a.Other = 'ud'
            })(f || (a.Device = f = {}))
            a.context = function () {
              var b = f.Other
              ;(0, a.isMobileApp)() && (0, a.isAndroid)()
                ? (b = f.Android)
                : (0, a.isMobileApp)() && (0, a.isIOS)()
                  ? (b = f.IOS)
                  : (0, a.isMobileWeb)() && (b = f.MWeb)
              var c = 'unknown'
              return (
                (0, a.isMobileApp)()
                  ? (c = 'mshop')
                  : (0, a.isMobileWeb)()
                    ? (c = 'mweb')
                    : (0, a.isDesktop)() && (c = 'desktop'),
                {
                  device: b,
                  page: (0, a.isUeAvailable)() ? k.ue_pty : 'unknown',
                  subPage: (0, a.isUeAvailable)() ? k.ue_spty || k.ue_pti : 'unknown',
                  platform: c,
                }
              )
            }
            a.isTwisterAsin = function () {
              return !!k.isTwisterPage || !!k.twisterController || d
            }
            a.isRTL = function () {
              return 'rtl' === document.dir
            }
            a.isClipboardAvailable = function () {
              return !!navigator.clipboard && (0, b.isFunction)(navigator.clipboard.writeText)
            }
            a.isUeAvailable = function () {
              return !!k.ue
            }
            a.isAUILoaded = function () {
              var a
              return (
                'undefined' != typeof k &&
                (0, b.isString)(
                  null === (a = null === k || void 0 === k ? void 0 : k.P) || void 0 === a
                    ? void 0
                    : a.AUI_BUILD_DATE,
                )
              )
            }
            a.isIE = function () {
              return (0, b.testUserAgent)(/MSIE|Trident/i)
            }
            a.isAndroid = function () {
              return (
                (0, b.testUserAgent)(/android.([1-9]|[L-Z])/i) &&
                !(0, b.testUserAgent)(/trident|Edge/i)
              )
            }
            a.isIOS = function () {
              return (
                (0, b.testUserAgent)(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i) &&
                !(0, b.testUserAgent)(/trident|Edge/i)
              )
            }
            a.isIpadIOS = function () {
              return (
                (0, b.testUserAgent)(
                  /[a-zA-z]{1,}\/[0-99].[0-99] \(Macintosh; [a-zA-z]{1,} Mac OS X [1-9][0-9]*_[1-9][0-9]*_[1-9][0-9]*\) AppleWebKit\/[1-9][0-9]*.[1-9][0-9]*.[1-9][0-9]*/,
                ) || (0, b.testUserAgent)(/iPad/)
              )
            }
            a.isDesktop = function () {
              return !(
                (0, a.isAndroid)() ||
                (0, a.isIOS)() ||
                (0, a.isMobileApp)() ||
                (0, a.isMobileWeb)()
              )
            }
            a.isMobileApp = function () {
              return /(Windowshop|Amazon|Amazon\.com)\//.test((0, b.getCookie)('amzn-app-id'))
            }
            a.isMobileWeb = function () {
              return (
                450 >= k.screen.availWidth &&
                ((0, b.testUserAgent)(/mobile|mini/i) || (0, a.isAndroid)() || (0, a.isIOS)())
              )
            }
            a.isNativeWebShareAvailable = function () {
              return k.navigator && (0, b.isFunction)(k.navigator.share)
            }
            a.isNativeAppShareAvailable = function (a) {
              return a && (0, b.isFunction)(a.share)
            }
            a.isCSALoaded = function () {
              return (0, b.isFunction)(k.csa)
            }
            a.isSafari = function () {
              var a
              return /apple/i.test(null === (a = k.navigator) || void 0 === a ? void 0 : a.vendor)
            }
            var d = !1
            ;(0, a.isAUILoaded)() &&
              k.P.when('mobile-inline-twister-critical').execute(function () {
                d = !0
              })
            a.default = {
              context: a.context,
              isTwisterAsin: a.isTwisterAsin,
              isClipboardAvailable: a.isClipboardAvailable,
              isUeAvailable: a.isUeAvailable,
              isAUILoaded: a.isAUILoaded,
              isIE: a.isIE,
              isAndroid: a.isAndroid,
              isDesktop: a.isDesktop,
              isIOS: a.isIOS,
              isIpadIOS: a.isIpadIOS,
              isMobileApp: a.isMobileApp,
              isMobileWeb: a.isMobileWeb,
              isNativeWebShareAvailable: a.isNativeWebShareAvailable,
              isNativeAppShareAvailable: a.isNativeAppShareAvailable,
              isCSALoaded: a.isCSALoaded,
              isSafari: a.isSafari,
              isRTL: a.isRTL,
            }
          },
          495: function (e, a, m) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            var f = m(905),
              b = m(353),
              d = m(738)
            e = (function () {
              function a() {}
              return (
                (a.logCountOnce = function (a) {
                  ;(0, f.isUeAvailable)() && k.ue.count(a, (k.ue.count(a) || 0) + 1)
                }),
                (a.emitFullMetricName = function (a, b, d) {
                  var c = this
                  ;(0, f.isAUILoaded)() &&
                    k.P.when('A').execute(function (q) {
                      q.trigger(''.concat(c.BASE_METRIC_NAME, ':metrics:logged'), {
                        fullMetricName: a,
                        callee: b,
                        message: d,
                      })
                    })
                }),
                (a.logCounter = function (a, b) {
                  b = b ? '.'.concat(b) : ''
                  a = ''.concat(this.BASE_METRIC_NAME, '.').concat(a).concat(b)
                  this.emitFullMetricName(a, 'logCounter')
                  this.logCountOnce(a)
                }),
                (a.logCounterRefactor = function (a, b) {
                  b = b ? '.'.concat(b.toLowerCase()) : ''
                  a = ''
                    .concat(this.BASE_METRIC_NAME)
                    .concat(b, '.')
                    .concat(this.platform)
                    .concat(this.metricName, '.')
                    .concat(a.toLowerCase())
                  this.emitFullMetricName(a, 'logCounterRefactor')
                  this.logCountOnce(a)
                }),
                (a.logLoad = function (a) {
                  a = ''
                    .concat(this.BASE_METRIC_NAME, '.')
                    .concat(this.platform)
                    .concat(this.metricName, '.')
                    .concat(a.toLowerCase())
                  this.logCountOnce(a)
                }),
                (a.logFatal = function (a) {
                  ;(0, f.isAUILoaded)() && k.P.log(a, 'FATAL', this.BASE_METRIC_NAME)
                }),
                (a.logCSAEvent = function (a, d) {
                  ;(0, f.isCSALoaded)() &&
                    new b.default().withCSAClickEventData(d).withShareHitType(a).logEvent()
                }),
                (a.startTimer = function (a) {
                  a = ''.concat(this.BASE_METRIC_NAME, '.').concat(this.LATENCY, '.').concat(a)
                  this.timers[a] = k.uet && k.uet('bb', a, { wb: 1 })
                }),
                (a.stopTimer = function (a) {
                  a = ''.concat(this.BASE_METRIC_NAME, '.').concat(this.LATENCY, '.').concat(a)
                  var b = this.timers[a]
                  ;(0, f.isUeAvailable)() &&
                    b &&
                    ((b = k.uet('be', a, { wb: 1 }) - b),
                    k.ue.count(a, b),
                    k.uex && k.uex('ld', a, { wb: 1 }),
                    this.emitFullMetricName(a, 'stopTimer', ''.concat(b, 'ms')),
                    delete this.timers[a],
                    (this.timers[''.concat(a, '_done_in')] = b))
                }),
                (a.BASE_METRIC_NAME = 'SocialShareFramework'),
                (a.LATENCY = 'Latency'),
                (a.platform = d.UNKNOWN),
                (a.metricName = ''),
                (a.timers = {}),
                (a.getMetricName = function (b, d) {
                  var c
                  if ((void 0 === d && (d = ''), (0, f.isUeAvailable)())) {
                    var e = (0, f.context)()
                    a.platform = e.platform
                    a.metricName = d ? '.'.concat(d.toLowerCase()) : ''
                  }
                  b = b('[data-action\x3d"ssf-share-icon"]').data()
                  d = d ? '.'.concat(d) : ''
                  return b
                    ? ((b =
                        (null === (c = b.ssfShareIcon) || void 0 === c
                          ? void 0
                          : c.shareDataAttributes) || {}),
                      (c = b.ingress),
                      (b = b.platform),
                      (b = void 0 === b ? 'unknown' : b),
                      ''
                        .concat(void 0 === c ? 'unknown' : c, '.')
                        .concat(b)
                        .concat(d)
                        .toLowerCase())
                    : ''
                }),
                a
              )
            })()
            a.default = e
          },
          241: function (e, a, m) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            var f,
              b = m(905),
              d = m(738)
            !(function (a) {
              a.RETURN = 'r'
              a.CLICK = 'cl'
            })(f || (f = {}))
            e = (function () {
              function a(a, f) {
                if (
                  (void 0 === a && (a = 'ur'),
                  void 0 === f && (f = void 0),
                  (this.PREFIX = 'cm_sw'),
                  (this.id = ''),
                  (this.refId = ''),
                  (this._isBestFormatEnabled = !1),
                  (this.cxt = {
                    device: b.Device.Other,
                    page: '',
                    subPage: '',
                    platform: d.UNKNOWN,
                  }),
                  2 > a.length)
                )
                  throw new TypeError('refId must be 2 or more characters long')
                this.refId = a
                this.cxt = (0, b.context)()
                this.treatment = f
                this.generateUniqueId()
              }
              return (
                Object.defineProperty(a.prototype, 'isBestFormatEnabled', {
                  set: function (a) {
                    this._isBestFormatEnabled = a
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(a.prototype, 'return', {
                  get: function () {
                    return this.get(f.RETURN)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(a.prototype, 'click', {
                  get: function () {
                    return this.get(f.CLICK)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (a.prototype.getReturnForChannel = function (a) {
                  var b,
                    c = null !== (b = this.treatment) && void 0 !== b ? b : ''
                  return [
                    this.PREFIX,
                    f.RETURN,
                    this._isBestFormatEnabled ? d.BEST_FORMAT_REF : '',
                    a,
                    this.cxt.device,
                    this.refId,
                    c,
                    this.id,
                  ]
                    .filter(function (a) {
                      return a && '' !== a
                    })
                    .join('_')
                }),
                (a.prototype.getClickForChannel = function (a) {
                  return [
                    this.PREFIX,
                    f.CLICK,
                    this._isBestFormatEnabled ? d.BEST_FORMAT_REF : '',
                    a,
                    this.cxt.device,
                    this.refId,
                    this.id,
                  ]
                    .filter(function (a) {
                      return a && '' !== a
                    })
                    .join('_')
                }),
                (a.prototype.generateUniqueId = function () {
                  var a,
                    b =
                      null === (a = null === k || void 0 === k ? void 0 : k.ue) || void 0 === a
                        ? void 0
                        : a.rid
                  return (
                    b ||
                      (b = ''
                        .concat(Math.random().toString(36).slice(2))
                        .concat(Math.random().toString(36).slice(2))
                        .substring(0, 13)),
                    (this.id = b)
                  )
                }),
                (a.prototype.get = function (a) {
                  var b,
                    c = null !== (b = this.treatment) && void 0 !== b ? b : ''
                  return [
                    this.PREFIX,
                    a,
                    this._isBestFormatEnabled ? d.BEST_FORMAT_REF : '',
                    this.cxt.device,
                    this.refId,
                    c,
                    this.id,
                  ]
                    .filter(function (a) {
                      return a && '' !== a
                    })
                    .join('_')
                }),
                a
              )
            })()
            a.default = e
          },
          198: function (e, a, m) {
            var f =
              (this && this.__assign) ||
              function () {
                return (
                  (f =
                    Object.assign ||
                    function (a) {
                      for (var b, g = 1, d = arguments.length; g < d; g++)
                        for (var c in (b = arguments[g]))
                          Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
                      return a
                    }),
                  f.apply(this, arguments)
                )
              }
            Object.defineProperty(a, '__esModule', { value: !0 })
            var b,
              d = m(495),
              h = m(905),
              c = m(474),
              l = m(161),
              t = m(738)
            ;(0, h.isAUILoaded)() &&
              k.P.when('mash').execute(function (a) {
                return (b = a)
              })
            e = (function () {
              function a(a) {
                this.sheetOptions = {
                  title: t.EMPTY_STRING,
                  text: t.EMPTY_STRING,
                  shareUrl: new c.default('http://amazon.com/', 'ur'),
                  lang: 'en',
                  shareDataAttributes: t.defaultShareDataAttributes,
                  refererURL: '',
                  image: '',
                  customizeShareCSAData: t.defaultCustomizeShareCSAData,
                  isCustomShareOptionsSheetEnabled: !1,
                }
                this.sheetOptions = f(f({}, this.sheetOptions), a)
                this.shareUrl = a.shareUrl
              }
              return (
                (a.prototype.launchNativeWeb = function () {
                  var a,
                    b = this,
                    c = this.sheetOptions.shareDataAttributes.ingress,
                    f = {
                      channel: t.EMPTY_STRING,
                      refMarker: this.shareUrl.refMarker.click,
                      refererURL: this.sheetOptions.refererURL,
                      shareDataAttributes: this.sheetOptions.shareDataAttributes,
                      customizeShareCSAData: this.sheetOptions.customizeShareCSAData,
                    },
                    e = this.shareUrl.return
                  this.sheetOptions.tinyUrl &&
                    ((e = this.sheetOptions.tinyUrl),
                    d.default.logCounter('MWeb.Tiny.Success'),
                    d.default.logCounterRefactor('Tiny.Success', c))
                  var m = (0, l.isFunction)(this.sheetOptions.sheetShownCallback)
                  try {
                    null === (a = null === k || void 0 === k ? void 0 : k.navigator) ||
                      void 0 === a ||
                      a
                        .share({
                          url: e,
                          title: this.sheetOptions.title,
                          text: this.sheetOptions.text,
                        })
                        .then(function () {
                          m && b.sheetOptions.sheetShownCallback()
                          d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_SUCCESS, f)
                          d.default.logCSAEvent(t.CSA_HIT_TYPE.SHARE, f)
                          d.default.logCounterRefactor(
                            'ChannelClick',
                            b.sheetOptions.shareDataAttributes.ingress,
                          )
                          d.default.logCounter('ShareClick')
                        })
                        .catch(function (a) {
                          m && b.sheetOptions.sheetShownCallback()
                          d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_SUCCESS, f)
                          a.name === t.Err.Abort &&
                            d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_CANCEL, f)
                        })
                  } catch (p) {
                    d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_ERROR, f)
                  }
                }),
                (a.prototype.launchNativeApp = function () {
                  var a = this,
                    g = this.shareUrl.refMarker.click,
                    c = this.sheetOptions.shareDataAttributes,
                    e = this.sheetOptions.refererURL,
                    u = this.sheetOptions.customizeShareCSAData,
                    m = this.sheetOptions.shareDataAttributes.ingress,
                    p = t.EMPTY_STRING,
                    h = this.sheetOptions.caf || !1,
                    x = this.sheetOptions.cafSwitchEnabled || !1,
                    k = this.sheetOptions.isCustomShareOptionsSheetEnabled || !1,
                    n = this.shareUrl.return
                  this.sheetOptions.tinyUrl &&
                    ((n = this.sheetOptions.tinyUrl),
                    d.default.logCounter('MShop.Tiny.Success'),
                    d.default.logCounterRefactor('Tiny.Success', m))
                  var w = {
                    channel: p,
                    refMarker: g,
                    refererURL: e,
                    shareDataAttributes: c,
                    customizeShareCSAData: u,
                    caf: h,
                    cafSwitchEnabled: x,
                    isCustomShareOptionsSheetEnabled: k,
                  }
                  g = {
                    messagePlain: this.getShareMessage,
                    messagePlain160: this.getShare160Message,
                    messagePlain140: this.getShare140Message,
                    messageHTML: this.getShareMessage,
                    url: n,
                    imageURL: this.sheetOptions.image,
                    subject: this.sheetOptions.text,
                  }
                  null == b ||
                    b.share(
                      f(f({}, g), {
                        successCallback: function () {
                          ;(0, l.isFunction)(a.sheetOptions.sheetShownCallback) &&
                            a.sheetOptions.sheetShownCallback()
                          d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_SUCCESS, w)
                        },
                        failCallback: function () {
                          d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_ERROR, w)
                        },
                        shareServiceSelectedCallback: function (b) {
                          b && "'null'" !== b
                            ? ((0, l.isFunction)(a.sheetOptions.channelSelectCB) &&
                                a.sheetOptions.channelSelectCB(b),
                              (w.channel = a.getChannelByKeyword(b).channel),
                              (b = a.getChannelByKeyword(b).refId),
                              (w.refMarker = a.shareUrl.refMarker.getClickForChannel(b)),
                              d.default.logCSAEvent(t.CSA_HIT_TYPE.SHARE, w),
                              d.default.logCounterRefactor(
                                'ChannelClick',
                                a.sheetOptions.shareDataAttributes.ingress,
                              ),
                              d.default.logCounter('ShareClick'),
                              (0, l.isFunction)(a.sheetOptions.sdTooltipCallback) &&
                                a.sheetOptions.sdTooltipCallback())
                            : d.default.logCSAEvent(t.CSA_HIT_TYPE.CLICK_CANCEL, w)
                        },
                      }),
                    )
                }),
                (a.prototype.launch = function (a) {
                  ;(0, h.isNativeAppShareAvailable)(b)
                    ? this.launchNativeApp()
                    : (0, h.isNativeWebShareAvailable)()
                      ? this.launchNativeWeb()
                      : (0, l.isFunction)(a)
                        ? a()
                        : (d.default.logCounter('Click.ShareUnavailable'),
                          d.default.logCounterRefactor(
                            'Click.ShareUnavailable',
                            this.sheetOptions.shareDataAttributes.ingress,
                          ))
                }),
                Object.defineProperty(a.prototype, 'getShare160Message', {
                  get: function () {
                    var a = this.sheetOptions.tinyUrl || this.shareUrl.return,
                      b = a.length + 2
                    b = (0, l.truncate)(this.sheetOptions.title, 160 - b)
                    return ''.concat(b, ' ').concat(a)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(a.prototype, 'getShare140Message', {
                  get: function () {
                    var a = this.sheetOptions.tinyUrl || this.shareUrl.return,
                      b = a.length + 2
                    b = (0, l.truncate)(this.sheetOptions.title, 140 - b)
                    return ''.concat(b, ' ').concat(a)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (a.prototype.getRefByRegex = function (a) {
                  return t.REGEX_TO_REF_ID_AND_CHANNEL_APP[a].refId
                }),
                (a.prototype.getChannelByRegex = function (a) {
                  return t.REGEX_TO_REF_ID_AND_CHANNEL_APP[a].channel
                }),
                (a.prototype.getChannelByKeyword = function (a) {
                  var b = t.RAW_CHANNEL_PREFIX + a,
                    d = t.DEFAULT_CSA_REF_ID,
                    c = a.match(
                      /instagram|snap|discord|viber|telegram|pinterest|qzone|renren|twitter|airdrop|tencentweibo|wechatmoment|line|whatsapp|weibo|^Facebook$/gi,
                    )
                  if (c && c.length)
                    return {
                      channel: this.getChannelByRegex(c[0].toLowerCase()),
                      refId: this.getRefByRegex(c[0].toLowerCase()),
                    }
                  switch (!0) {
                    case /android.messaging|sms|android.apps.messaging|mms/gi.test(a):
                      b = 'SMS'
                      d = 'sm'
                      break
                    case /outlook|mail/gi.test(a):
                      b = 'Email'
                      d = 'em'
                      break
                    case /clipboardactivity|copy/gi.test(a):
                      b = 'Copy'
                      d = 'cp'
                      break
                    case /facebook.composer/gi.test(a):
                      b = 'Facebook'
                      d = 'fb'
                      break
                    case /facebook.messenger|FacebookMessenger/gi.test(a):
                      b = 'FacebookMessenger'
                      d = 'fm'
                      break
                    case /tencent|wechat/gi.test(a):
                      b = 'WeChat'
                      d = 'we'
                      break
                    case /unknown|null/gi.test(a):
                      ;(b = 'unknown'), (d = 'u')
                  }
                  return { channel: b, refId: d }
                }),
                Object.defineProperty(a.prototype, 'getShareMessage', {
                  get: function () {
                    var a = this.sheetOptions.tinyUrl || this.shareUrl.return
                    return ''.concat(this.sheetOptions.title, ' ').concat(a)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                a
              )
            })()
            a.default = e
          },
          474: function (e, a, m) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            var f = m(241)
            e = (function () {
              function a(b, e, c) {
                this.REF_PARAM_NAME = 'ref_'
                a.isValid(b) || (b = a.getDefault())
                this.url = new URL(b)
                this._refMarker = new f.default(e, c)
              }
              return (
                (a.prototype.getUpdatedUrl = function (a) {
                  var b = new URL(this.raw)
                  return b.searchParams.set(this.REF_PARAM_NAME, a), b.toString()
                }),
                Object.defineProperty(a.prototype, 'raw', {
                  get: function () {
                    return this.url.toString()
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(a.prototype, 'refMarker', {
                  get: function () {
                    return this._refMarker
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (a.isValid = function (a) {
                  try {
                    new URL(a)
                  } catch (x) {
                    return !1
                  }
                  return !0
                }),
                (a.getDefault = function () {
                  var a,
                    b,
                    c =
                      null === (a = null === k || void 0 === k ? void 0 : k.location) ||
                      void 0 === a
                        ? void 0
                        : a.href
                  if (!c)
                    return (
                      null === (b = null === k || void 0 === k ? void 0 : k.ue) || void 0 === b
                        ? 0
                        : b.sn
                    )
                      ? 'https://'.concat(k.ue.sn)
                      : 'https://amazon.com'
                  a = new URL(c)
                  b = a.searchParams.has('psc') ? '?psc\x3d1' : ''
                  return k.ue_pti
                    ? ''.concat(k.location.origin, '/dp/').concat(k.ue_pti).concat(b)
                    : ((a.search = b), a.href)
                }),
                (a.prototype.getReturnForChannel = function (a) {
                  a = this._refMarker.getReturnForChannel(a)
                  return this.getUpdatedUrl(a)
                }),
                (a.prototype.getClickForChannel = function (a) {
                  a = this._refMarker.getClickForChannel(a)
                  return this.getUpdatedUrl(a)
                }),
                Object.defineProperty(a.prototype, 'return', {
                  get: function () {
                    return this.getUpdatedUrl(this._refMarker.return)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(a.prototype, 'click', {
                  get: function () {
                    return this.getUpdatedUrl(this._refMarker.click)
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                a
              )
            })()
            a.default = e
          },
          161: function (e, a) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.getDPXObject =
              a.sanitizeInput =
              a.getCookie =
              a.testUserAgent =
              a.truncate =
              a.isString =
              a.isEmpty =
              a.isNumber =
              a.isFunction =
                void 0
            a.isFunction = function (a) {
              return 'function' == typeof a
            }
            a.isNumber = function (a) {
              return !isNaN(a) && 'number' == typeof a
            }
            a.isEmpty = function (a) {
              return !a || !a.length
            }
            a.isString = function (a) {
              return 'string' == typeof a
            }
            a.truncate = function (a, f) {
              void 0 === a && (a = '')
              var b = Array(3).fill('.')
              return a.length > f ? a.substring(0, f - 3) + b.join('') : a
            }
            a.testUserAgent = function (a) {
              if (!k && !k.navigator) return !1
              try {
                return a.test(k.navigator.userAgent)
              } catch (f) {
                return !1
              }
            }
            a.getCookie = function (a) {
              a = ''.concat(a, '\x3d')
              for (var f = document.cookie.split(';'), b = 0; b < f.length; b++) {
                for (var d = f[b]; ' ' == d.charAt(0); ) d = d.substring(1)
                if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
              }
              return ''
            }
            a.sanitizeInput = function (a) {
              return a.replace(/[<>&'"]/g, function (a) {
                switch (a) {
                  case '\x3c':
                    return '\x26lt;'
                  case '\x3e':
                    return '\x26gt;'
                  case '\x26':
                    return '\x26amp;'
                  case "'":
                    return '\x26#39;'
                  case '"':
                    return '\x26quot;'
                  default:
                    return a
                }
              })
            }
            a.getDPXObject = function () {
              var a, f
              return null ===
                (f = null === (a = k.DetailPage) || void 0 === a ? void 0 : a.StateController) ||
                void 0 === f
                ? void 0
                : f.state
            }
            a.default = {
              isFunction: a.isFunction,
              isNumber: a.isNumber,
              isEmpty: a.isEmpty,
              isString: a.isString,
              truncate: a.truncate,
              testUserAgent: a.testUserAgent,
              getCookie: a.getCookie,
              getDPXObject: a.getDPXObject,
            }
          },
          156: function (e, a) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.default = {}
          },
          519: function (e, a, h) {
            Object.defineProperty(a, '__esModule', { value: !0 })
            a.SocialShareCore = void 0
            e = h(305)
            var f = h(474),
              b = h(156),
              d = h(495),
              m = h(198),
              c = h(241),
              l = h(905),
              t = h(738)
            h = h(161)
            a.SocialShareCore = {
              Channels: e.default,
              Url: f.default,
              Translations: b.default,
              Metrics: d.default,
              ShareSheet: m.default,
              RefMarker: c.default,
              Detection: l.default,
              Constants: t,
              ToolBelt: h,
            }
            a.default = a.SocialShareCore
          },
        },
        A = {}
      e = (function m(a) {
        var e = A[a]
        if (void 0 !== e) return e.exports
        e = A[a] = { exports: {} }
        return h[a].call(e.exports, e, e.exports, m), e.exports
      })(519)
    })()
    return e
  })
  ;('use strict')
  v.register('SocialShareWidgetConfig', function () {
    var e = Object.freeze({ MODAL: 'modal', POPOVER: 'popover' }),
      h = Object.freeze({ IOS: 'ios', ANDROID: 'android', ARROW: 'arrow', VARIABLE: 'variable' })
    return {
      WIDGET_TYPE: e,
      WIDGET_ICON: h,
      excludedChannels: ['sms', 'wa'],
      lineMarketplaces: ['A1VC38T7YXB528'],
      cnMarketplace: ['AAHKV2X7AFYLW'],
      nonCNChannels: ['fb', 'tw', 'pi'],
      defaultShareData: {
        url: '',
        title: location.hostname,
        text: '',
        image: '',
        hashtags: ['Amazon'],
        type: e.POPOVER,
        lang: 'en',
        refId: 'ts',
        channels: [],
        refererURL: '',
        treatment: '',
        weblab: '',
        customize: !1,
        previewDoh: !1,
        caf: !1,
        displayCustomShareSheet: !1,
        cafSwitch: !1,
        eventPreviewTreatment: 'C',
        cafIngressId: '',
        t: {},
        associateLink: {},
        popoverPosition: 'triggerBottom',
        popoverDistance: 48,
        defaultCustomShareOptions: {
          email: {
            label: 'Email',
            image: 'customchannels-email.png',
            ref: 'em',
            shareUrl: 'mailto:?subject\x3d{subject}\x26body\x3d{body}\x26url\x3d{url}',
            className: 'email',
            stringId: 'taf_customshare_email',
          },
          copy: {
            label: 'Copy',
            image: 'customchannels-link.png',
            ref: 'cp',
            shareUrl: '',
            className: 'custom-share-copy',
            stringId: 'taf_customshare_copy',
          },
          more: {
            label: 'More',
            image: 'customchannels-more.png',
            ref: '',
            shareUrl: '',
            className: 'custom-share-native-sheet',
            stringId: 'taf_customshare_more',
          },
        },
        isFallbackShareUrlEnabled: !1,
        isNewIMessagePreviewGating: !1,
        isOnShareGatingEnabled: !1,
        isIpadFixesEnabled: !1,
        isNewWhatsAppPreview: !1,
        skipTwisterAPI: 'C',
        isBestFormatEnabled: !1,
        isCafPreviewGenerationMigrationEnabled: !1,
        isUnrecognizedUsersRichPreviewEnabled: !1,
        customizePreSelected: !1,
        isAndroidCopyLinkGatingEnabled: !1,
        isUnsignedShareSheetGatingEnabled: !1,
        isUnsignedShareSheetCopyLinkOverrideEnabled: !1,
        isShortTitleGatingEnabled: !1,
        isShortTitleAsyncGatingEnabled: !1,
        titleSource: '',
      },
      defaultWidgetData: { icon: h.VARIABLE, background: !0, width: 24 },
      shareDataAttributes: {
        isInternal: 2,
        isRobot: 2,
        userAgent: k.navigator.userAgent,
        platform: 'DESKTOP',
        ingress: k.ue_pty,
        asin: k.ue_pti,
        requestId: k.ue_id,
        customerId: '',
        marketplaceId: k.ue_mid,
        triggeredFromScreenshotToast: !1,
      },
      iconMap: {
        ios: 'https://m.media-amazon.com/images/G/01/share-icons/share-std.svg',
        android: 'https://m.media-amazon.com/images/G/01/share-icons/share-android.svg',
        arrow: 'https://m.media-amazon.com/images/G/01/share-icons/share-icon-experiment.svg',
      },
      customShareOptions: [],
    }
  })
  ;('use strict')
  v.when(
    'A',
    'SocialShareWidget',
    'SocialShareWidgetTemplating',
    'SocialShareWidgetConfig',
    'SocialShareWidgetState',
    'SocialShareWidgetNativeUtils',
  ).register('SocialShareWidgetAUI', function (e, n, A, l, a, m) {
    var f = n.SocialShareCore,
      b = f.Metrics,
      d = 0,
      x = function () {},
      c = !1,
      y = b.getMetricName(e.$)
    b.startTimer(y)
    b.logCounter('DPX.Desktop.ImageBlockRender')
    try {
      ;(function () {
        var t = e.$,
          n = f.Detection,
          q = f.Translations,
          g = f.Channels,
          r = f.Url,
          z = f.Constants,
          u = function (a) {
            a = a.data('share') || a.find('[data-share]').data('share')
            return e.extend({}, l.defaultWidgetData, a)
          },
          B = t('.ssf-share-trigger'),
          p = l.defaultShareData,
          D = u(B),
          C = p.url,
          N = t('#ac-getlink-bottomsheet'),
          K = t('[data-action\x3d"ssf-share-icon"]'),
          w = function () {
            var a = l.iconMap
            if (D.icon === l.WIDGET_ICON.ARROW) return a.arrow
            if (n.isDesktop()) return a.ios
            if (D.icon === l.WIDGET_ICON.VARIABLE) {
              var b = e.$('#ssf-primary-widget-desktop')
              p = e.extend(p, b.data('ssfShareIcon'))
              b = a.android
              if (n.isIOS() || (p.isIpadFixesEnabled && n.isIpadIOS())) b = a.ios
              return b
            }
            return a[D.icon]
          },
          H = function (a) {
            a.find('[class*\x3d"ssf-multi-"]').length ||
              a
                .find('.ssf-share-trigger')
                .addClass('ssf-multi-' + Math.random().toString(36).slice(2))
            B = a.find('[class*\x3d"ssf-multi-"]')
          },
          F = void 0,
          I = void 0,
          M = void 0,
          O = void 0,
          P = void 0,
          R = void 0,
          Q = void 0
        v.when('a-sheet').execute(function (a) {
          return (F = a)
        })
        v.when('a-popover').execute(function (a) {
          return (I = a)
        })
        v.when('a-modal').execute(function (a) {
          return (M = a)
        })
        v.when('SocialShareWidgetTiny').execute(function (a) {
          return (Q = a)
        })
        var U = function (a, b) {
            var g =
                2 < arguments.length && arguments[2] !== h
                  ? arguments[2]
                  : 'ssf-share-bottom-sheet',
              d = p.displayCustomShareSheet || p.customize || p.caf
            if (!O || d) O = F.create({ name: g, inlineContent: a, closeType: 'icon', height: b })
            F.showSheet(O)
          },
          G = function (a) {
            var b = a.type === l.WIDGET_TYPE.POPOVER && I,
              g = a.type === l.WIDGET_TYPE.MODAL && M
            a = A.build(a)
            F
              ? U(a.getBottom())
              : b
                ? ((b = a.getPopover()),
                  B.hasClass('a-declarative') ||
                    (P = I.create(B, {
                      name: 'ssf-share-popover',
                      position: p.popoverPosition,
                      inlineContent: b,
                      activate: 'onclick',
                      closeButton: !0,
                      width: 160,
                      padding: 'none',
                      popoverLabel: 'Share Popup',
                      closeButtonLabel: 'Close Share Popup',
                    }).show()))
                : g &&
                  ((b = a.getModal()),
                  B.hasClass('a-declarative') ||
                    (R = M.create(B, {
                      name: 'ssf-share-modal',
                      inlineContent: b,
                      width: 600,
                      popoverLabel: 'Share Modal',
                    }).show()))
          },
          W = function (a) {
            if (a.displayCustomShareSheet || a.customize || a.caf)
              b.logCounter('webview.sharesheet.caf.background'),
                b.logCounterRefactor(
                  'webview.sharesheet.caf.background',
                  a.shareDataAttributes.ingress,
                ),
                v.when('mash').execute(function (a) {
                  a.addEventListener('appPause', J)
                })
          },
          V = function (a) {
            v.when('SocialShareWidgetCustomize').execute(function (b) {
              A.build(a).getCustomize(function (g) {
                U(g, 650, 'ssf-customize-bottom-sheet')
                b.init(a, G, J)
                W(a)
              })
            })
          },
          J = function ea() {
            v.when('mash').execute(function (a) {
              a.removeEventListener('appPause', ea)
            })
            P && I.get(B).hide()
            O && F.hideSheet(O)
            R && M.get(B).hide()
          },
          X = function () {
            var a = p.shareDataAttributes.asin,
              b = k.DetailPage
            if (!b) return !1
            b = b.StateController && b.StateController.getState().current_asin
            p.shareDataAttributes.asin = 'string' == typeof b ? b : a
            return a !== b
          },
          S = function (a, g, d) {
            var c = a.shareDataAttributes,
              f = a.t
            b.logCSAEvent(z.CSA_HIT_TYPE.SHARE, g)
            b.logCounter('DPX.Desktop.CopySuccess')
            b.logCounter('Share.CopySuccess')
            b.logCounter(y, 'CopySuccess')
            b.logCounterRefactor('CopySuccess', c.ingress)
            n.isDesktop()
              ? (function () {
                  var a = d.find('.copy-label')
                  a.text(f.taf_copy_url_changeover)
                  e.delay(function () {
                    J()
                    a.text(f.taf_copy_name)
                  }, 1e3)
                })()
              : (t('.ssf-feedback').show(), J())
          },
          Y = function (a) {
            b.logCSAEvent(z.CSA_HIT_TYPE.CLICK_ERROR, a)
            b.logCounter('DPX.Desktop.CopyFailure')
            b.logCounter('Share.CopyFailure')
            b.logCounter(y, 'CopyFailure')
          },
          T = function (a) {
            var g = a.shareData,
              c = a.channelRef,
              e = g.shareUrl
            a = g.socialLinks
            var f = a === h ? {} : a
            a = g.isOGTEnabled
            a = a === h ? !1 : a
            var r = g.dealsPreviewEnabled
            r = r === h ? !1 : r
            var u = g.eventPreviewTreatment
            u = u === h ? 'C' : u
            e.refMarker.isBestFormatEnabled = g.isBestFormatEnabled
            c = c ? e.getReturnForChannel(c) : e.return
            e = f.shareframework || g.url
            f = g.aapiBaseUrl
            f = f === h ? '' : f
            var p = g.shareAapiCsrfToken
            p = p === h ? '' : p
            var w = g.tinyUrlEnabled
            w = w === h ? !1 : w
            var q = g.deeplinkInfo
            q = q === h ? {} : q
            var z = g.storeId
            z = z === h ? '' : z
            var m = g.shareDataAttributes,
              l = m.marketplaceId
            l = l === h ? '' : l
            m = m.ingress
            m = m === h ? '' : m
            g.isUnrecognizedUsersRichPreviewEnabled &&
              ((c = new URL(c)), c.searchParams.append('starsLeft', 1), (c = c.toString()))
            'c' !== u.toLowerCase() &&
              ((c = new URL(c)),
              (g = u.match(/^T(\d+)$/)),
              c.searchParams.append('peakEvent', g[1]),
              c.searchParams.append('dealEvent', r ? '1' : '0'),
              (c = c.toString()),
              b.logCounterRefactor('EventPreview' + u, m))
            return {
              tinyUrlEnabled: w,
              aapiBaseUrl: f,
              shareAapiCsrfToken: p,
              marketplaceId: l,
              url: c,
              isOGTEnabled: a,
              originalUrl: e || c,
              refMarkerId: d++,
              deeplinkInfo: q,
              storeId: z,
            }
          }
        t(document).delegate('.ssf-channel:not(.copy,.embed)', 'click', function (a) {
          a.preventDefault()
          a.stopPropagation()
          b.logCounter('DPX.Desktop.ChannelClick')
          b.logCounter('ShareClick')
          b.logCounter(y, 'ChannelClick')
          b.logCounterRefactor('ChannelClick', p.shareDataAttributes.ingress)
          var g = t(this),
            d = g.data('key'),
            c = p
          a = c.refererURL
          var f = c.shareDataAttributes,
            r = c.treatment
          r = r === h ? '' : r
          var u = c.weblab
          u = u === h ? '' : u
          var w = c.builtChannels[d],
            q = w.ref
          d = c.shareUrl.refMarker.getClickForChannel(q)
          c = w.name
          var l = w.getSharingUrl()
          b.logCSAEvent(z.CSA_HIT_TYPE.SHARE, {
            channel: c,
            refMarker: d,
            refererURL: a,
            shareDataAttributes: f,
            treatment: r,
            weblab: u,
          })
          a = T({ shareData: p, channelRef: q })
          m.showSpinner(g)
          Q.fetch({
            data: a,
            callback: function (a) {
              m.hideSpinner(g)
              a &&
                ((l = w.getSharingUrl(a)),
                b.logCounter('Desktop.Tiny.Success'),
                b.logCounterRefactor('Tiny.Success', f.ingress))
              if ('em' === q) k.open(l, '_self')
              else if (n.isDesktop()) {
                a = screen.width
                var d = screen.height,
                  c = 'pi' === q ? 900 : 600,
                  r = Math.min(c, 0.7 * a)
                c = Math.min(c, 0.7 * d)
                k.open(
                  l,
                  '_blank',
                  'toolbar\x3d0,status\x3d0,width\x3d' +
                    r +
                    ',height\x3d' +
                    c +
                    ',top\x3d' +
                    (d / 2 - c / 2) +
                    ',left\x3d' +
                    (a / 2 - r / 2),
                )
              } else k.open(l, '_blank')
              J()
              e.trigger('ssf:event:share', p)
            },
          })
        })
        e.declarative('ssf-share-icon', 'click', function (d) {
          b.logCounter('DPX.Desktop.SheetClick')
          b.logCounter('SheetClick')
          b.logCounter(y, 'SheetClick')
          if (c) return J()
          H(d.$currentTarget)
          p = e.extend(p, d.data)
          p.shareDataAttributes = e.extend(l.shareDataAttributes, d.data.shareDataAttributes)
          var f = p.shareDataAttributes.ingress
          b.logCounterRefactor('SheetClick', f)
          if (!e.objectIsEmpty(d.data.associateLink) && N.length)
            b.logCounter('SheetClick.Associate'), e.trigger('ac-getlink-bottomsheet-event', p)
          else {
            e.extend(q[p.lang], p.t)
            var u = g(p, p.channels)
            p.builtChannels = u
            p.url = p.url.startsWith('/') ? '' + k.location.origin + p.url : p.url
            p.shareUrl = new r(p.url, p.refId)
            X() && ((p.shareUrl = new r(p.url, p.refId)), p.shareUrl.url.searchParams.set('psc', 1))
            a.set('shareData', p)
            !n.isDesktop() ||
            (p.isIpadFixesEnabled && n.isIpadIOS() && n.isNativeWebShareAvailable())
              ? p.displayCustomShareSheet || p.customize || p.caf
                ? V(p)
                : m.launchNativeShareSheet(d, p, T, G)
              : (p.isUnrecognizedUsersRichPreviewEnabled &&
                  p.shareUrl.url.searchParams.set('starsLeft', 1),
                (p.image = p.image || t('#imgTagWrapperId img').attr('src')),
                G(p),
                b.logCounter('DPX.Desktop.SheetOpen'),
                b.logCounter('SheetOpen'),
                b.logCounter(y, 'SheetOpen'),
                b.logCounterRefactor('SheetOpen', f),
                b.logCSAEvent(z.CSA_HIT_TYPE.CLICK_SUCCESS, {
                  channel: z.EMPTY_STRING,
                  refMarker: p.shareUrl.refMarker.click,
                  refererURL: p.refererURL,
                  shareDataAttributes: p.shareDataAttributes,
                  treatment: p.treatment || '',
                  weblab: p.weblab || '',
                }))
            n.isSafari() &&
              n.isDesktop() &&
              ((d = T({ shareData: p, channelRef: z.CP_CHANNEL_REF })),
              Q.fetch({
                data: d,
                callback: function (a) {
                  b.logCounter('TinyUrlOnSheetOpen')
                  C = a
                },
              }))
            e.trigger('ssf:event:sheetOpen', p)
          }
        })
        t(document).delegate('.ssf-copy,.ssf-channel.copy', 'click', function (a) {
          b.logCounter('ShareClick')
          b.logCounter('DPX.Desktop.ChannelClick')
          b.logCounter(y, 'ChannelClick')
          b.logCounterRefactor('ChannelClick', p.shareDataAttributes.ingress)
          a.preventDefault()
          var g = p
          a = g.shareUrl
          var d = g.shareDataAttributes,
            c = g.treatment
          c = c === h ? '' : c
          var f = g.weblab
          f = f === h ? '' : f
          g = g.isBestFormatEnabled
          var r = z.CP_CHANNEL_REF,
            u = a.refMarker.getClickForChannel(r),
            w = {
              channel: z.CP_CHANNEL_REF,
              refMarker: u,
              shareDataAttributes: d,
              treatment: c,
              weblab: f,
            },
            q = t(this)
          a.refMarker.isBestFormatEnabled = g
          var l = a.getReturnForChannel(r)
          n.isSafari() && n.isDesktop()
            ? navigator.clipboard.writeText(C || l).then(
                function () {
                  S(p, w, q)
                },
                function () {
                  Y(w)
                },
              )
            : ((a = T({ shareData: p, channelRef: r })),
              m.showSpinner(q),
              Q.fetch({
                data: a,
                callback: function (a) {
                  m.hideSpinner(q)
                  navigator.clipboard.writeText(a || l).then(
                    function () {
                      S(p, w, q)
                    },
                    function () {
                      Y(w)
                    },
                  )
                },
              }))
          e.trigger('ssf:event:share', p)
        })
        t(document).delegate('.ssf-embed,.ssf-channel.embed', 'click', function (a) {
          a.preventDefault()
          var g = p
          a = g.shareDataAttributes
          var d = g.treatment
          d = d === h ? '' : d
          var c = g.weblab
          c = c === h ? '' : c
          g = {
            channel: 'embed',
            refMarker: g.shareUrl.refMarker.getClickForChannel(z.EMBED_CHANNEL_REF),
            shareDataAttributes: a,
            treatment: d,
            weblab: c,
          }
          b.logCSAEvent(z.CSA_HIT_TYPE.SHARE, g)
          b.logCounter('DPX.Desktop.ChannelClick')
          b.logCounter(y, 'ChannelClick')
          b.logCounter('ChannelClick.Embed')
          b.logCounter('ShareClick')
          b.logCounterRefactor('ChannelClick', a.ingress)
          M.create(t('.ssf-channel.embed'), p.kpModalParams).show()
        })
        x = function () {
          B = t('.ssf-share-trigger')
          D = u(B)
          var a = D.width
          if (!t('.ssf-background').length && D.background) {
            var b = 1.4 * a
            b = t(
              '\x3cdiv class\x3d"ssf-background' +
                (D.floatedIcon ? '-float' : '') +
                '"\x3e\x3c/div\x3e',
            ).css({ width: b, height: b })
            B.wrap(b)
          }
          D.icon && B.css({ height: a, width: a, backgroundImage: 'url(' + w() + ')' })
        }
        n.isIE() && t('.ssf-share-trigger,.ssf-background').remove()
        e.on('a:popover:afterUpdatePosition:ssf-share-popover', function (a) {
          a = a.popover.$popover
          var b = a.position().left - p.popoverDistance
          a.find('.a-arrow-border').css({ right: 24, left: '' })
          a.css({ left: b })
        })
        e.on('ssf:event:trigger-share-widget', function (a) {
          e.trigger('a:declarative:ssf-share-icon:click', {
            data: a,
            $currentTarget: (1 < arguments.length && arguments[1] !== h ? arguments[1] : h) || K,
          })
        })
        e.on('a:popover:show:ssf-share-popover', function () {
          c = !0
          document
            .getElementsByClassName('ssf-share-trigger')[0]
            .setAttribute('aria-expanded', 'true')
        })
        e.on('a:popover:hide:ssf-share-popover', function () {
          c = !1
          document
            .getElementsByClassName('ssf-share-trigger')[0]
            .setAttribute('aria-expanded', 'false')
        })
        e.on('a:popover:show:ssf-share-modal', function () {
          c = !0
          document
            .getElementsByClassName('ssf-share-trigger')[0]
            .setAttribute('aria-expanded', 'true')
        })
        e.on('a:popover:hide:ssf-share-modal', function () {
          c = !1
          document
            .getElementsByClassName('ssf-share-trigger')[0]
            .setAttribute('aria-expanded', 'false')
        })
        e.on('a:sheet:beforeShow:ssf-customize-bottom-sheet', function (a) {
          a.sheet.$container.css('height', '')
        })
        x()
      })()
    } catch (t) {
      b.logCounter('DPX.Desktop.Error'),
        b.logCounter(y, 'Error'),
        b.logLoad('Error'),
        b.logFatal('Error loading Share Framework AUI: ' + t.toString())
    } finally {
      b.logCounter('DPX.Desktop.Render'),
        b.logCounter(y, 'Render'),
        b.logLoad('Render'),
        e.trigger('ssf:event:load'),
        b.stopTimer(y)
    }
    return { init: x }
  })
  ;('use strict')
  var ba = (function () {
    return function (e, n) {
      if (Array.isArray(e)) return e
      if (Symbol.iterator in Object(e)) {
        var k = [],
          l = !0,
          a = !1,
          m = h
        try {
          for (
            var f = e[Symbol.iterator](), b;
            !(l = (b = f.next()).done) && (k.push(b.value), !n || k.length !== n);
            l = !0
          );
        } catch (d) {
          ;(a = !0), (m = d)
        } finally {
          try {
            if (!l && f['return']) f['return']()
          } finally {
            if (a) throw m
          }
        }
        return k
      }
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    }
  })()
  v.when('A', 'SocialShareWidgetConfig', 'SocialShareWidget').register(
    'SocialShareWidgetTemplating',
    function (e, n, k) {
      k = k.SocialShareCore
      var l = e.$,
        a = k.Detection.isClipboardAvailable,
        m = k.Detection.isDesktop,
        f = n.excludedChannels
      a() || f.push('copy')
      var b = function (a) {
        return (
          '\x3cspan class\x3d"a-spinner a-spinner-' +
          a +
          ' a-align-center aok-hidden"\x3e\x3c/span\x3e'
        )
      }
      return {
        build: function (d) {
          var e = d.shareUrl,
            c = d.socialLinks,
            k = c === h ? {} : c
          c = d.shareDataAttributes
          var t = d.builtChannels,
            A = d.kpModalParams,
            q = d.t
          k.email = d.mailToUri
          var g =
            '\x3cspan class\x3d"a-button ssf-copy"\x3e\n        \x3cspan class\x3d"a-button-inner"\x3e\n          \x3cinput class\x3d"a-button-input" type\x3d"button" aria-label\x3d"' +
            q.taf_copy_tooltip +
            '"\x3e\n          \x3cspan class\x3d"a-button-text" aria-hidden\x3d"true"\x3e\n            \x3cbutton class\x3d"a-button-text"\x3e\n              \x3cdiv class\x3d"copy-label"\x3e\n                ' +
            q.taf_copy_tooltip +
            '\n              \x3c/div\x3e\n            \x3c/button\x3e\n          \x3c/span\x3e\n        \x3c/span\x3e\n      \x3c/span\x3e'
          !m() &&
            a() &&
            1 > l('.ssf-feedback').length &&
            l(document.body).append(
              '\x3cdiv class\x3d"a-changeover ssf-feedback" style\x3d"display:none"\x3e\n          \x3cdiv class\x3d"a-changeover-inner"\x3e\n            \x3ci class\x3d"a-icon a-icon-checkmark-inverse"\x3e\x3c/i\x3e\n            \x3cstrong class\x3d"a-size-medium"\x3e' +
                q.taf_copy_url_changeover +
                '\x3c/strong\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e',
            )
          var r = function (a) {
            return {
              title: q['taf_' + a.name + '_tooltip'] || a.label,
              label: q['taf_' + a.name + '_name'] || a.label,
            }
          }
          n.lineMarketplaces.includes(c.marketplaceId) || k.li ? f.push('pi') : f.push('li')
          A || f.push('embed')
          n.cnMarketplace.includes(c.marketplaceId) && f.push.apply(f, L(n.nonCNChannels))
          return {
            getModal: function () {
              var d = '',
                c = !0,
                m = !1,
                p = h
              try {
                for (
                  var l = Object.entries(t)[Symbol.iterator](), n;
                  !(c = (n = l.next()).done);
                  c = !0
                ) {
                  var x = ba(n.value, 2),
                    A = x[0],
                    w = x[1]
                  if (!f.includes(A) && 'copy' !== A) {
                    var H = r(w),
                      F = k[w.name] || w.getSharingUrl()
                    d +=
                      '\x3cli class\x3d"ssf-channel-h"\x3e\n              \x3ca class\x3d"ssf-channel a-color-base" aria-label\x3d"' +
                      H.label +
                      '" href\x3d"' +
                      F +
                      '" title\x3d"' +
                      H.title +
                      '" data-key\x3d"' +
                      A +
                      '"\x3e\n                ' +
                      b('medium') +
                      '\n                \x3ci aria-hidden\x3d"true" style\x3d"background-image: url(' +
                      w.image +
                      ')"\x3e\x3c/i\x3e\n              \x3c/a\x3e\n              \x3cspan\x3e' +
                      H.label +
                      '\x3c/span\x3e\n            \x3c/li\x3e'
                  }
                }
              } catch (I) {
                ;(m = !0), (p = I)
              } finally {
                try {
                  !c && l.return && l.return()
                } finally {
                  if (m) throw p
                }
              }
              c = a()
                ? '\x3cdiv class\x3d"ssf-copy-section a-box a-padding-base a-spacing-top-large"\x3e\n              \x3cdiv class\x3d"link-section"\x3e' +
                  e.return +
                  '\x3c/div\x3e\n              \x3cdiv class\x3d"copy-button"\x3e' +
                  g +
                  '\x3c/div\x3e\n          \x3c/div\x3e'
                : ''
              return (
                '\x3ch3 class\x3d"a-spacing-large"\x3e' +
                q.taf_share_bottom_sheet_title +
                '\x3c/h3\x3e' +
                ('\x3cdiv class\x3d"ssf-h-icons"\x3e\x3cul class\x3d"ssf-h-icons a-nostyle"\x3e' +
                  d +
                  '\x3c/ul\x3e\x3c/div\x3e') +
                c
              )
            },
            getPopover: function () {
              var a = '',
                g = !0,
                d = !1,
                c = h
              try {
                for (
                  var e = Object.entries(t)[Symbol.iterator](), q;
                  !(g = (q = e.next()).done);
                  g = !0
                ) {
                  var m = ba(q.value, 2),
                    l = m[0],
                    w = m[1]
                  if (!f.includes(l)) {
                    var n = r(w),
                      F = k[w.name] || w.getSharingUrl()
                    a +=
                      '\x3cli class\x3d"ssf-channel-v"\x3e\n              \x3ca class\x3d"ssf-channel ' +
                      l +
                      ' a-color-base" aria-label\x3d"' +
                      n.label +
                      '" href\x3d"' +
                      F +
                      '" title\x3d"' +
                      n.title +
                      '" data-key\x3d"' +
                      l +
                      '"\x3e\n                ' +
                      b('small') +
                      '\n                \x3ci aria-hidden\x3d"true" style\x3d"background-image: url(' +
                      w.image +
                      ')"\x3e\x3c/i\x3e\n                \x3cspan class\x3d"' +
                      l +
                      '-label"\x3e' +
                      n.label +
                      '\x3c/span\x3e\n              \x3c/a\x3e\n            \x3c/li\x3e'
                  }
                }
              } catch (I) {
                ;(d = !0), (c = I)
              } finally {
                try {
                  !g && e.return && e.return()
                } finally {
                  if (d) throw c
                }
              }
              return '\x3cul class\x3d"a-nostyle"\x3e' + a + '\x3c/ul\x3e'
            },
            getBottom: function () {
              var a = '',
                g = !0,
                d = !1,
                c = h
              try {
                for (
                  var e = Object.entries(t)[Symbol.iterator](), l;
                  !(g = (l = e.next()).done);
                  g = !0
                ) {
                  var m = ba(l.value, 2),
                    n = m[0],
                    w = m[1]
                  if (!f.includes(n)) {
                    var H = r(w),
                      F = k[w.name] || w.getSharingUrl()
                    a +=
                      '\x3cli class\x3d"ssf-channel-b a-padding-base"\x3e\n              \x3ca class\x3d"ssf-channel ' +
                      n +
                      ' a-color-base" aria-label\x3d"' +
                      H.label +
                      '" href\x3d"' +
                      F +
                      '" title\x3d"' +
                      H.title +
                      '" data-key\x3d"' +
                      n +
                      '"\x3e\n                ' +
                      b('medium') +
                      '\n                \x3ci aria-hidden\x3d"true" style\x3d"background-image: url(' +
                      w.image +
                      ')"\x3e\x3c/i\x3e\n                \x3cspan class\x3d"a-size-base-plus"\x3e' +
                      H.label +
                      '\x3c/span\x3e\n              \x3c/a\x3e\n              \x3c/li\x3e'
                  }
                }
              } catch (I) {
                ;(d = !0), (c = I)
              } finally {
                try {
                  !g && e.return && e.return()
                } finally {
                  if (d) throw c
                }
              }
              return (
                '\x3cdiv class\x3d"a-padding-base ssf-header"\x3e\n          \x3ch4\x3e' +
                q.taf_share_bottom_sheet_title +
                '\x3c/h4\x3e\n        \x3c/div\x3e\x3cdiv class\x3d"ssf-scroll"\x3e\x3cul class\x3d"a-nostyle"\x3e' +
                (a + '\x3c/ul\x3e') +
                '\x3c/ul\x3e\x3c/div\x3e'
              )
            },
            getCustomize: function () {
              var a = void 0
              v.now('SocialShareWidgetCustomizeTemplate').execute(function (b) {
                a = d.customize ? b.getCustomizeBox(q) : ''
              })
              var g =
                  '\x3ch3 class\x3d"a-spacing-base a-spacing-top-base"\x3e' +
                  q.taf_share_bottom_sheet_title +
                  '\x3c/h3\x3e',
                c =
                  '\x3cdiv class\x3d"ssf-heading-container"\x3e\x3cimg class\x3d"ssf-back-btn" src\x3d"https://m.media-amazon.com/images/G/01/share-icons/arrow-left.svg"\x3e' +
                  g +
                  '\x3c/div\x3e',
                e =
                  '\x3cdiv class\x3d"a-padding-base a-box ssf-preview-container ssf-no-border" style\x3d"background-image: url(' +
                  d.image +
                  ')"\x3e' +
                  b('medium') +
                  '\x3c/div\x3e',
                f = d.caf
                  ? '\x3cdiv class\x3d"a-row a-spacing-top-large' +
                    (d.customize ? '' : ' a-spacing-large') +
                    '"\x3e\n          \x3cdiv class\x3d"a-column a-span9"\x3e\n            \x3cstrong class\x3d"ssf-caf-toggle-label"\x3e' +
                    q.taf_custshare_caf_ingress +
                    '\x3c/strong\x3e\n          \x3c/div\x3e\n          \x3cdiv class\x3d"a-column a-span3 a-text-right a-span-last"\x3e\n            \x3cdiv class\x3d"a-switch-row ssf-caf-toggle"\x3e\n          \x3cinput class\x3d"a-declarative a-switch-input" data-action\x3d"a-switch-input" name\x3d"caf" type\x3d"checkbox"\x3e\n          \x3clabel class\x3d"a-switch-label a-declarative" data-action\x3d"a-switch-label"\x3e\n            \x3cdiv class\x3d"a-switch a-declarative" data-action\x3d"a-switch"\x3e\n              \x3ca class\x3d"a-switch-control" aria-label\x3d"caf" style\x3d"transform: translateX(-1px) translateZ(0px);"\x3e\x3c/a\x3e\n            \x3c/div\x3e\n          \x3c/label\x3e\n        \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e'
                  : '',
                r =
                  '\x3cspan class\x3d"a-button a-button-primary a-spacing-top-small ssf-customize-share-btn"\x3e\n          \x3cspan class\x3d"a-button-inner"\x3e\n            \x3cinput class\x3d"a-button-input" type\x3d"button" aria-labelledby\x3d"ssf-customize-share-btn"\x3e\n            \x3cspan class\x3d"a-button-text" aria-hidden\x3d"true" id\x3d"ssf-customize-share-btn"\x3e\n              ' +
                  d.shareLabel +
                  '\n              ' +
                  b('small') +
                  '\n            \x3c/span\x3e\n          \x3c/span\x3e\n        \x3c/span\x3e'
              return (
                '\x3cdiv class\x3d"a-padding-base ssf-customize-container-one"\x3e' +
                g +
                e +
                f +
                a +
                r +
                '\x3c/div\x3e' +
                (d.customize
                  ? '\x3cdiv class\x3d"a-padding-base ssf-customize-container-two aok-hidden"\x3e' +
                    c +
                    e +
                    f +
                    '\x3cdiv class\x3d"a-row a-spacing-top-base a-padding-base ssf-tabs"\x3e\x3c/div\x3e' +
                    r +
                    '\x3c/div\x3e'
                  : '')
              )
            },
          }
        },
      }
    },
  )
  ;('use strict')
  v.when(
    'jQuery',
    'SocialShareWidget',
    'SocialShareWidgetState',
    'SocialShareWidgetLinkUtil',
    'SocialShareWidgetAPI',
  ).register('SocialShareWidgetTiny', function (e, n, A, l, a) {
    n = n.SocialShareCore
    var m = n.Metrics,
      f = n.Constants
    return {
      fetch: function (b) {
        var d = b.data,
          n = b.isAsync,
          c = n === h ? !0 : n,
          y = b.callback
        try {
          if (0 < d.refMarkerId) {
            var t = new URL(d.url),
              E = t.searchParams.get('ref_')
            E &&
              ((E = E + '_' + d.refMarkerId), t.searchParams.set('ref_', E), (d.url = t.toString()))
          }
          var q = A.get('shareData')
          if (A.get('dpx')) {
            var g = A.get('shareAapiCsrfToken'),
              r = A.get('aapiBaseUrl')
            if ('C' !== q.skipTwisterAPI) {
              var z = new URL(d.url)
              z.searchParams.append('skipTwisterOG', 'T2' === q.skipTwisterAPI ? 2 : 1)
              d.url = z.toString()
            }
            if (q.isBestFormatEnabled) {
              var u = new URL(d.url)
              u.searchParams.append('bestFormat', 'true')
              d.url = u.toString()
            }
            if (q.isShortTitleGatingEnabled && '' !== q.titleSource) {
              var B = new URL(d.url)
              B.searchParams.append('titleSource', q.titleSource)
              d.url = B.toString()
            }
            d.url = l.getLinkWithFlippedStarsLeft(d.url)
            'dprv' === q.refId &&
              ((d.shareAapiCsrfToken = g),
              (d.aapiBaseUrl = r),
              (d.tinyUrlEnabled = !0),
              m.logCounter('reviews.tiny'))
          }
          var p = k.location.protocol + '//'
          if (d.isOGTEnabled) {
            var D = new URL(d.url)
            D.searchParams.append('newOGT', '1')
            d.url = D.toString()
          }
          var C = d.deeplinkInfo
          if (C && C.isDisabled && C.flag != h) {
            var N = new URL(d.url)
            N.searchParams.append('nodl', C.flag)
            d.url = N.toString()
          }
          if (d.isOnShareGatingEnabled) a.build(q).onShare(c, d.url, d.extractedRef, d.osType, y)
          else if (d.tinyUrlEnabled)
            if (d.aapiBaseUrl && d.shareAapiCsrfToken && d.marketplaceId)
              (function () {
                var a =
                    '' +
                    p +
                    d.aapiBaseUrl +
                    '/api/marketplaces/' +
                    d.marketplaceId +
                    '/social-share/tinyurl',
                  b = { longUrl: d.url },
                  g = {
                    'Accept-Language': 'en-US',
                    Accept:
                      'application/vnd.com.amazon.api+json; type\x3d"social-share.tinyurl/v1"',
                    'x-api-csrf-token': d.shareAapiCsrfToken,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'x-amzn-encrypted-slate-token': A.get('slateToken'),
                  }
                m.startTimer('Tiny')
                e.ajax(a, {
                  type: 'POST',
                  headers: g,
                  xhrFields: { withCredentials: !0 },
                  contentType: 'application/x-www-form-urlencoded',
                  async: c,
                  data: b,
                  success: function (a) {
                    m.logCounter('Tiny.Response')
                    m.logCounter('Desktop.Tiny.Response')
                    m.logCounterRefactor('Tiny.Response')
                    a.entity && a.entity.shortUrl
                      ? (y(a.entity.shortUrl.url), m.logCounter('Tiny.Success'))
                      : (v.log(
                          'Error Generating TinyURL. with share url ' + d.url,
                          'ERROR',
                          f.SSF_AUI_PACKAGE_ATTRIBUTION,
                        ),
                        m.logCounter('Tiny.Error'),
                        y(d.url))
                  },
                  error: function (b) {
                    b && b.status != h && 0 === b.status
                      ? m.logCounter('Tiny.Blocked')
                      : (v.log(
                          'Error Generating TinyURL with share url ' +
                            d.url +
                            ', Error Code: ' +
                            b.status +
                            ', Error Response: ' +
                            b.responseText +
                            ', Endpoint: ' +
                            a,
                          'ERROR',
                          f.SSF_AUI_PACKAGE_ATTRIBUTION,
                        ),
                        m.logCounter('Tiny.Error'),
                        m.logCounter('Desktop.Tiny.Error'),
                        m.logCounterRefactor('Tiny.Error'))
                    y(d.url)
                  },
                  complete: function () {
                    m.stopTimer('Tiny')
                  },
                })
              })()
            else return m.logCounter('Tiny.Unavailable'), y(d.url)
          else return y(d.url)
        } catch (K) {
          return (
            v.log(
              'Error generating tinyURL: ' + K.toString(),
              'ERROR',
              f.SSF_AUI_PACKAGE_ATTRIBUTION,
            ),
            d.url
          )
        }
      },
    }
  })
  ;('use strict')
  v.when('A').register('SocialShareWidgetState', function (e) {
    var h = 'social-' + k.ue_id + '-share',
      A = {
        slateToken: e.$('meta[name\x3d"encrypted-slate-token"]').attr('content') || '',
        dpx: !1,
      }
    e.state(h, A)
    return {
      getCurrent: function () {
        return e.state(h)
      },
      get: function (e) {
        return this.getCurrent()[e]
      },
      getAndReset: function (e) {
        var a = this.get(e)
        a && this.set(e, null)
        return a
      },
      set: function (l, a) {
        var m = this.getCurrent()
        e.trigger('ssf:event:state:set', m)
        if (!l) return m
        m[l] = a
        m = e.state(h, m)
        e.trigger('ssf:event:state:changed', m)
        return m
      },
    }
  })
  ;('use strict')
  v.when('jQuery', 'SocialShareWidget', 'SocialShareWidgetState').register(
    'SocialShareWidgetAPI',
    function (e, n, A) {
      n = n.SocialShareCore
      var l = n.Constants,
        a = n.Metrics,
        m = k.location.protocol + '//',
        f = a.getMetricName(e, l.customize),
        b = Object.freeze({ GET: 'GET', POST: 'POST', PUT: 'PUT' }),
        d = Object.freeze({
          generateImage:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.custom.ssapis.product.generate.customized.image.response/v1"',
          externalizeImage:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.custom.ssapis.product.externalize.customized.image.response/v1"',
          fetchTabs:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.custom.ssapis.product.shareable.attributes.response/v1"',
          getWeblabTreatmentAndTrigger:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.weblab.treatment-and-trigger.response/v1"',
          onShare:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.social-share.on-share.response/v1"',
          fetchCAFID:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.consultafriendcontracts.custom.consult-a-friend.feedback-request.response/v1"',
          fetchHmpPollId:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.consultafriendcontracts.custom.helpmepick.create-poll.response/v1"',
          getShortTitle:
            'application/vnd.com.amazon.api+json; type\x3d"aapi.socialshareapicontracts.social-share.get-short-title.response/v1"',
        }),
        x = function (a) {
          return (a = a.entity) && 'SUCCEEDED' === a.status
            ? a.tabs.map(function (a) {
                var b = {
                  id: a.id,
                  heading: a.shortDisplayName,
                  text: a.longDisplayName,
                  isQuote: !0,
                }
                a.params && ((b.values = Object.values(a.params)[0]), (b.isQuote = !1))
                return b
              })
            : []
        }
      return {
        build: function (c) {
          var n = c.shareAapiCsrfToken,
            k = c.locale,
            E = c.cafAapiCsrfToken,
            q = c.productType,
            g = c.shareDataAttributes,
            r = g.marketplaceId,
            z = g.asin,
            u = g.ingress,
            B = m + c.aapiBaseUrl,
            p = A.get('slateToken')
          p || a.logCounter('slate.missing')
          var D = function (a) {
              return (
                B +
                '/custom/socialshareapicontracts/marketplaces/' +
                r +
                '/products/' +
                z +
                '/shareframework/' +
                a
              )
            },
            C = function (a) {
              var b = a.async
              e.ajax({
                url: a.url,
                type: a.type,
                async: b === h ? !0 : b,
                data: a.data,
                headers: {
                  'Accept-Language': k,
                  Accept: a.accept,
                  'x-api-csrf-token': a.cafToken || n,
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'x-amzn-encrypted-slate-token': p,
                },
                xhrFields: { withCredentials: !0 },
                success: a.success,
                error: a.error,
                complete: a.complete,
              })
            }
          return {
            generateImage: function (g, c) {
              var e = D('generatecustomizedimage')
              a.startTimer('GenerateCustomizeImage')
              C({
                url: e,
                type: b.POST,
                data: g,
                accept: d.generateImage,
                success: function (b) {
                  'SUCCEEDED' === b.entity.status
                    ? (a.logCounter('GenerateCustomizeImage.Success'),
                      a.logCounter(f, 'generateCustomizeImageSuccess'),
                      a.logCounterRefactor('generateCustomizeImageSuccess', u))
                    : (a.logCounter('GenerateCustomizeImage.Fail'),
                      a.logCounter(f, 'generateCustomizeImageFail'),
                      a.logCounterRefactor('generateCustomizeImageFail', u))
                  c(b)
                },
                error: function (b) {
                  a.logCounter('GenerateCustomizeImage.Error')
                  a.logCounter(f, 'generateCustomizeImageError')
                  a.logCounterRefactor('generateCustomizeImageError', u)
                  a.logCounter('generateCustomizeImageError')
                  v.log(
                    'Error generating customize image. with request URL ' +
                      e +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  c(b)
                },
                complete: function () {
                  a.stopTimer('GenerateCustomizeImage')
                },
              })
            },
            externalizeImage: function (g, c, e) {
              var r = D('externalizecustomizedimage?customizedImageUrl\x3d' + g)
              a.startTimer('ExternalizeImage')
              C({
                url: r,
                type: b.PUT,
                accept: d.externalizeImage,
                async: e,
                success: function (a) {
                  c(a)
                },
                error: function (b) {
                  a.logCounter(f, 'externalizeImageFail')
                  a.logCounterRefactor('externalizeImageFail', u)
                  a.logCounter('externalizeImageFail')
                  v.log(
                    'Error externalizing image. with request URL ' +
                      r +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  c({})
                },
                complete: function () {
                  a.stopTimer('ExternalizeImage')
                },
              })
            },
            fetchTabs: function (g) {
              var c = D('productshareableattributes?locale\x3d' + k + '\x26type\x3d' + q)
              a.startTimer('FetchTabs')
              C({
                url: c,
                type: b.GET,
                accept: d.fetchTabs,
                success: function (b) {
                  a.logCounter(f, 'FetchTabsSuccess')
                  a.logCounterRefactor('FetchTabsSuccess', u)
                  g(x(b))
                },
                error: function (b) {
                  a.logCounter(f, 'FetchTabsFail')
                  a.logCounterRefactor('FetchTabsFail', u)
                  a.logCounter('FetchTabsFail')
                  v.log(
                    'Error Fetching customize share tabs. with request URL ' +
                      c +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  g([])
                },
                complete: function () {
                  a.stopTimer('FetchTabs')
                },
              })
            },
            fetchCAFID: function (g) {
              var e = 1 < arguments.length && arguments[1] !== h ? arguments[1] : !0,
                q =
                  B +
                  '/custom/consultafriendcontracts/marketplaces/' +
                  r +
                  '/consultafriend/feedback-request/' +
                  z
              a.logCounter(f, 'CAF.createCAFID.called')
              a.logCounterRefactor('CAF.createCAFID.called', u)
              a.startTimer('CafIdGeneration')
              C({
                url: q,
                type: b.POST,
                accept: d.fetchCAFID,
                async: e,
                cafToken: E,
                success: function (a) {
                  g(a.entity && a.entity.cafId, z, c.url)
                },
                error: function (b) {
                  a.logCounter(f, 'CAF.createCAFID.failed')
                  a.logCounterRefactor('CAF.createCAFID.failed', u)
                  v.log(
                    'Error Creating CAF Id. with request URL ' +
                      q +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  g()
                },
                complete: function () {
                  a.stopTimer('CafIdGeneration')
                },
              })
            },
            fetchHmpPollId: function (g) {
              var f = 1 < arguments.length && arguments[1] !== h ? arguments[1] : !0,
                q = c.hmpAapiCsrfToken,
                p = e.param(c.hmpState, !0),
                m =
                  B + '/custom/consultafriendcontracts/marketplaces/' + r + '/helpmepick/poll?' + p
              a.logCounter('HMP.fetchHmpPollId.called.' + u)
              a.startTimer('HmpIdGeneration')
              C({
                url: m,
                type: b.POST,
                accept: d.fetchHmpPollId,
                async: f,
                cafToken: q,
                success: function (a) {
                  g(a.entity && a.entity.cafId)
                },
                error: function (b) {
                  a.logCounter('HMP.fetchHmpPollId.failed.' + u)
                  v.log(
                    'Error Fetching Poll Id. with request URL ' +
                      m +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  g()
                },
                complete: function () {
                  a.stopTimer('HmpIdGeneration')
                },
              })
            },
            getWeblabTreatmentAndTrigger: function (g, c, e) {
              var f =
                B +
                '/custom/socialshareapicontracts/marketplaces/' +
                r +
                '/weblab/get-weblab-treatment-and-record?name\x3d' +
                c
              a.startTimer('GetWeblabTreatmentAndTriggerMetric')
              C({
                url: f,
                type: b.GET,
                accept: d.getWeblabTreatmentAndTrigger,
                async: g,
                success: function (b) {
                  a.logCounter('GetWeblabTreatmentAndRecordSuccess')
                  e(b)
                },
                error: function (b) {
                  a.logCounter('GetWeblabTreatmentAndRecordFail')
                  v.log(
                    'Error calling weblab treatment and trigger. with request URL ' +
                      f +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  e([])
                },
                complete: function () {
                  a.stopTimer('GetWeblabTreatmentAndTriggerMetric')
                },
              })
            },
            onShare: function (g, c, e, f, q) {
              var u =
                B +
                '/custom/socialshareapicontracts/marketplaces/' +
                r +
                '/products/' +
                z +
                '/shareframework/onshare'
              a.startTimer('onShare')
              C({
                url: u,
                type: b.POST,
                accept: d.onShare,
                async: g,
                data: { longUrl: c, channel: e, osType: f },
                success: function (b) {
                  'SUCCEEDED' === b.entity.status
                    ? (q(b.entity.shortUrl.url), a.logCounter('OnShare.Success'))
                    : (v.log(
                        'The request was sent successfully, but the response status indicates a failure with request URL ' +
                          c,
                        'ERROR',
                        l.SSF_AUI_PACKAGE_ATTRIBUTION,
                      ),
                      a.logCounter('OnShare.Failure'),
                      q(c))
                },
                error: function (b) {
                  a.logCounter('OnShare.Error')
                  v.log(
                    'Error calling on share. with request URL ' + c,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  q([])
                },
                complete: function () {
                  a.stopTimer('onShare')
                },
              })
            },
            getShortTitle: function (g, c) {
              var e =
                  B +
                  '/custom/socialshareapicontracts/marketplaces/' +
                  r +
                  '/products/' +
                  z +
                  '/shareframework/getshorttitle',
                f = g ? 'Async' : 'Sync'
              a.startTimer('GetShortTitle-' + f)
              C({
                url: e,
                type: b.GET,
                accept: d.getShortTitle,
                async: g,
                success: function (b) {
                  'SUCCEEDED' === b.entity.status
                    ? (a.logCounter('GetShortTitle.Success'), c(b.entity))
                    : (v.log(
                        'The request was sent successfully, but the response status indicates a failure',
                        'ERROR',
                        l.SSF_AUI_PACKAGE_ATTRIBUTION,
                      ),
                      a.logCounter('GetShortTitle.Failure'),
                      c([]))
                },
                error: function (b) {
                  a.logCounter('GetShortTitle.Error')
                  v.log(
                    'Error calling get short title. with request URL ' +
                      e +
                      ', Error Code: ' +
                      b.status +
                      '. Error Response: ' +
                      b.responseText,
                    'ERROR',
                    l.SSF_AUI_PACKAGE_ATTRIBUTION,
                  )
                  c([])
                },
                complete: function () {
                  a.stopTimer('GetShortTitle-' + f)
                },
              })
            },
          }
        },
      }
    },
  )
  ;('use strict')
  v.when('A', 'SocialShareWidget', 'SocialShareWidgetAPI').register(
    'SocialShareWidgetCustomShareOptionsTemplate',
    function (e, n, k) {
      function l(a, b, c, d) {
        k.build(a).getWeblabTreatmentAndTrigger(b, c, function (a) {
          d(a.entity)
        })
      }
      function a(a) {
        return new Promise(function (b) {
          l(a, !1, 'TMT_SOCIAL_SHARE_ANDROID_COPY_LINK_1061126', function (a) {
            b(a && 'SUCCEEDED' === a.status && 'T1' === a.treatment)
          })
        })
      }
      var m = e.capabilities.rtl,
        f = n.SocialShareCore.Detection.isAndroid(),
        b = void 0,
        d = e.constants.HIDE_CLASS
      v.when('mash').execute(function (a) {
        return (b = a)
      })
      var x = function () {
          b ||
            v.now('mash').execute(function (a) {
              return (b = a)
            })
          return b
        },
        c = function (a, b) {
          if (!x() || 0 === a.length) return b([])
          var g = a.length,
            c = []
          a.forEach(function (a) {
            A(a, function (a, d) {
              g--
              d && (c[a.label.toLowerCase()] = a)
              ;(3 <= c.length || 0 >= g) && b(c)
            })
          })
        },
        A = function (a, b) {
          var g = 'whatsapp' === a.label.toLowerCase() && f
          x().canLaunchIntentURL({
            url: a.schemeURI,
            successCallback: function (c) {
              if (g) return b(a, !0)
              b(a, c)
            },
            failCallback: function () {
              if (g) return b(a, !0)
              b(a, !1)
            },
          })
        },
        t = function (a, b) {
          var g = b.stringId,
            c = b.className,
            e = b.label
          b = 'https://m.media-amazon.com/images/G/01/share-icons/' + b.image
          return (
            '\x3cli class\x3d"ssf-custom-share-option ' +
            (c === h ? '' : c) +
            '"  data-name\x3d"' +
            e.toLowerCase() +
            '"\x3e\n                    \x3cdiv class\x3d"ssf-custom-share-spinner" role\x3d"button"\x3e\n                        ' +
            ('\x3cspan class\x3d"a-spinner a-spinner-medium a-align-center ' +
              d +
              '"\x3e\x3c/span\x3e') +
            '\n                        \x3cimg src\x3d"' +
            b +
            '" title\x3d"' +
            e +
            '" aria-label\x3d"' +
            e +
            '"/\x3e\n                    \x3c/div\x3e\n                    \x3cspan class\x3d"label a-size-small"\x3e' +
            (a.t[g] || e) +
            '\x3c/span\x3e\n                 \x3c/li\x3e'
          )
        },
        E = function (a) {
          var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : ''
          a = a.startsWith('http') ? a : 'https://m.media-amazon.com/images/G/01/share-icons/' + a
          return '\x3cimg class\x3d"' + b + '" src\x3d"' + a + '" /\x3e'
        },
        q = function () {
          return (
            '\x3cspan class\x3d"a-size-mini ssf-rating-count"\x3e' +
            (0 < arguments.length && arguments[0] !== h ? arguments[0] : '') +
            '\x3c/span\x3e'
          )
        }
      return {
        getChannelsHtml: function (b, d) {
          var g = ''
          c(b.customShareOptions, function (c) {
            var q = e.extend(c, b.defaultCustomShareOptions)
            b.customShareBuiltChannels = q
            var r = Object.keys(q),
              h = [],
              u = '',
              m = ''
            if (0 === r.length) throw Error('Fallback to Native Sheet: channel key list is empty.')
            c = function (c) {
              var d = r[c]
              f && 'copy' === d
                ? b.isUnsignedShareSheetCopyLinkOverrideEnabled
                  ? (u = t(b, q[d]))
                  : b.isAndroidCopyLinkGatingEnabled &&
                    h.push(
                      a(b).then(function (a) {
                        a && (u = t(b, q[d]))
                      }),
                    )
                : 'more' === d
                  ? x() && (m = t(b, q[d]))
                  : (g += t(b, q[d]))
            }
            for (var l = 0; l < r.length; l++) c(l)
            Promise.all(h).then(function () {
              u && (g += u)
              m && (g += m)
              d(
                '\n                    \x3cdiv class\x3d"ssf-custom-channels-container a-color-base-background"\x3e\n                        \x3cul class\x3d"ssf-custom-share-options-container a-unordered-list a-nostyle"\x3e\n                            ' +
                  g +
                  '\n                        \x3c/ul\x3e\n                    \x3c/div\x3e\n                ',
              )
            })
          })
        },
        getPreviewImage: function (a) {
          var b = a.starRating,
            g = a.numberOfReviews,
            c = m ? 'r' : ''
          a =
            '\x3cdiv class\x3d"ssf-cso-p-image ssf-regular"\x3e' +
            E(a.productImage, 'ssf-regular') +
            '\x3c/div\x3e'
          b = b ? E('RIO' + b + c + '.png', 'ssf-caf-stars') : ''
          g = q(g)
          return (
            '\x3cdiv class\x3d"ssf-cso-p-image"\x3e' +
            a +
            ('\x3cdiv class\x3d"ssf-cso-stickers ssf-regular"\x3e' + b + g + '\x3c/div\x3e') +
            '\x3c/div\x3e'
          )
        },
        getErrorAlert: function (a) {
          return (
            '\x3cdiv class\x3d"ssf-error-text a-row ' +
            d +
            '"\x3e\n          \x3cdiv class\x3d"a-box a-alert-inline a-alert-inline-error" role\x3d"alert"\x3e\n              \x3cdiv class\x3d"a-box-inner a-alert-container"\x3e\n                  \x3ci class\x3d"a-icon a-icon-alert"\x3e\x3c/i\x3e\n                  \x3cdiv class\x3d"a-alert-content"\x3e\n                    \x3cspan class\x3d"ssf-error-generic ' +
            d +
            '"\x3e' +
            a.taf_custshare_channel_error_generic +
            '\x3c/span\x3e\n                    \x3cspan class\x3d"ssf-error-email ' +
            d +
            '"\x3e' +
            a.taf_custshare_channel_error_email +
            '\x3c/span\x3e\n                  \x3c/div\x3e\n              \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e'
          )
        },
        getAvailableChannels: c,
      }
    },
  )
  ;('use strict')
  v.when('A', 'SocialShareWidget', 'SocialShareWidgetAPI', 'SocialShareWidgetState').register(
    'SocialShareWidgetCustomShareOptions',
    function (e, n, A, l) {
      var a = e.$
      n = n.SocialShareCore
      var m = n.ShareSheet,
        f = n.Metrics,
        b = n.Constants,
        d = void 0,
        x = void 0,
        c = void 0,
        y = void 0,
        t = !1,
        E = n.Detection.isAndroid(),
        q = e.constants.HIDE_CLASS
      v.when('mash').execute(function (a) {
        x = a
      })
      v.when('SocialShareWidgetTiny').execute(function (a) {
        d = a
      })
      v.when('SocialShareWidgetCustomizeUtils').execute(function (a) {
        c = a
      })
      v.when('SocialShareWidgetCAFUtils').execute(function (a) {
        y = a
      })
      return {
        init: function (g, r, n, u, A, p) {
          var z = g.customShareBuiltChannels
          r = g.isCustomShareOptionsSheetEnabled
          var B = r === h ? !1 : r
          r = g.isFallbackShareUrlEnabled
          var N = r === h ? !1 : r
          r = g.caf
          var K = r === h ? !1 : r,
            w = g.shareDataAttributes
          r = g.treatment
          var H = r === h ? '' : r
          r = g.weblab
          var F = r === h ? '' : r
          r = g.refererURL
          var I = r === h ? '' : r,
            M = 'C'
          g.cafIngressId === b.CAF_INFO_ICON_KEY
            ? (M = 'T1')
            : g.cafIngressId === b.CAF_LEARN_MORE_KEY && (M = 'T2')
          e.on('ssf:event:caf-switch-change', function (a) {
            t = a
          })
          var O = function (a) {
              a.addClass('ssf-noclick')
              a.find('.a-spinner').removeClass(q)
            },
            P = function (a) {
              a.removeClass('ssf-noclick')
              a.find('.a-spinner').addClass(q)
            },
            R = function () {
              return t ? (g.t['taf-share-caf-messageprefix'] || '') + ' ' + g.title : g.title
            },
            Q = function (a, b, e) {
              t
                ? y.prepareShareUrl(g, a, d, b, function (a, b) {
                    return e(a, b)
                  })
                : g && g.isHmpShareSheet
                  ? y.prepareHmpShareUrl(g, a, d, b, function (a, b) {
                      return e(a, b)
                    })
                  : c.prepareShareUrl(g, a, d, b, function (a) {
                      return e(a)
                    })
            },
            U = function (a) {
              a && e.trigger('ssf:event:caf-share-complete-success', g)
            },
            G = function () {
              x.dispatchEvent({
                type: 'axf:consultAFriend:shareCompletedSuccessfully',
                detail: { isHmp: !0 },
              })
            },
            W = function (a, c, d, f) {
              try {
                var q = encodeURIComponent(f + ' \n ' + d)
                return 'Messages' === c
                  ? e.capabilities.ios
                    ? 'sms:///\x26body\x3d' + q
                    : 'mms:?\x26body\x3d' + q
                  : 'Email' === c
                    ? (a = a
                        .replace('\x26url\x3d{url}', '')
                        .replace('{subject}', encodeURIComponent(g.emailSubject))
                        .replace('{body}', '' + q))
                    : 'whatsApp' === c
                      ? (a = a.replace('{url}', '' + q))
                      : (a = a
                          .replace('{text}', encodeURIComponent(f))
                          .replace('{url}', encodeURIComponent(d))
                          .replace('{titleAndURL}', encodeURIComponent(q)))
              } catch (aa) {
                return (
                  v.log(
                    'Failed to generate shareUrl, error: ' + aa.toString(),
                    'ERROR',
                    b.SSF_AUI_PACKAGE_ATTRIBUTION,
                  ),
                  a
                )
              }
            },
            V = function (a) {
              if (t) {
                f.logCounter('Caf.customShareOptions.ChannelClick.' + a)
                var d = 'C'
                g.cafIngressId === b.CAF_INFO_ICON_KEY
                  ? (d = 'T1')
                  : g.cafIngressId === b.CAF_LEARN_MORE_KEY && (d = 'T2')
                f.logCounter('CAF.edIngress.ChannelClick.' + a + '.' + d)
              } else
                c.imageState.isEmpty()
                  ? f.logCounter('CustomShareOptions.ChannelClick.' + a)
                  : f.logCounter('Books.customShareOptions.ChannelClick.' + a)
            },
            J = function () {
              var a = 0 < arguments.length && arguments[0] !== h ? arguments[0] : ''
              a = 0 < a.length ? '.' + a : ''
              return t
                ? '' + b.CAF_CUSTOM_SHEET_CLICK_LATENCY_METRIC + a
                : c.imageState.isEmpty()
                  ? '' + b.CUSTOM_SHEET_CLICK_LATENCY_METRIC + a
                  : '' + b.BOOKS_CUSTOM_SHEET_CLICK_LATENCY_METRIC + a
            },
            X = function () {
              var a = J()
              f.startTimer(a)
              Q(b.EMPTY_STRING, !0, function (b) {
                var c = 1 < arguments.length && arguments[1] !== h ? arguments[1] : ''
                g.tinyUrl = b
                var d = g
                c &&
                  ((d = e.extend(
                    {
                      channelSelectCB: function () {
                        U(c)
                      },
                      cafSwitchEnabled: t,
                    },
                    g,
                  )),
                  (d.title = R()))
                g &&
                  g.isHmpShareSheet &&
                  ((d = e.extend(
                    {
                      channelSelectCB: function () {
                        G()
                      },
                    },
                    g,
                  )),
                  (d.title = R()))
                new m(d).launch(function () {
                  f.logCounter('customShareOptions.SheetOpen')
                })
                f.stopTimer(a)
              })
            },
            S = function (a, c) {
              var d = l.getAndReset(b.customizeShareStateKey)
              return {
                channel: a,
                refMarker: c,
                refererURL: I,
                shareDataAttributes: w,
                treatment: H,
                weblab: F,
                isCustomShareOptionsSheetEnabled: B,
                caf: K,
                cafSwitchEnabled: t,
                customizeShareCSAData: d,
                cafEdCXIngressWeblabTreatment: M,
              }
            }
          a('.custom-share-native-sheet')
            .unbind('click')
            .click(function (a) {
              try {
                V('more'), n(), X()
              } catch (fa) {
                v.log(
                  'Failed to launch native share sheet via "More" button, error: ' + fa.toString(),
                  'ERROR',
                  b.SSF_AUI_PACKAGE_ATTRIBUTION,
                )
              }
            })
          var Y = function (a) {
              return new Promise(function (b, c) {
                var d = document.createElement('textarea')
                d.value = a
                document.body.appendChild(d)
                d.focus()
                d.select()
                try {
                  var g = document.execCommand('copy')
                  document.body.removeChild(d)
                  g ? b() : c()
                } catch (aa) {
                  c(aa)
                }
              })
            },
            T = function (d, e, q, r) {
              d = g.shareUrl.refMarker.getClickForChannel(d)
              f.logCSAEvent(b.CSA_HIT_TYPE.SHARE, S('copy', d))
              t
                ? f.logCounter('Caf.CustomShareOptions.CopySuccess')
                : c.imageState.isEmpty()
                  ? f.logCounter('customShareOptions.CopySuccess')
                  : f.logCounter('Books.CustomShareOptions.CopySuccess')
              a('.ssf-feedback').show()
              P(e)
              n()
              f.stopTimer(q)
              r && U(r)
              g && g.isHmpShareSheet && G()
            },
            ca = function (a, b, d) {
              f.stopTimer(d)
              t
                ? f.logCounter('Caf.CustomShareOptions.CopyFail')
                : c.imageState.isEmpty()
                  ? f.logCounter('CustomShareOptions.CopyFail')
                  : f.logCounter('Books.CustomShareOptions.CopyFail')
              p({ shareData: g, channelRef: a, caf: K, cafSwitchEnabled: t })
              P(b)
            }
          a('.custom-share-copy')
            .unbind('click')
            .click(function (c) {
              var d = this
              try {
                ;(function () {
                  var c = J()
                  f.startTimer(c)
                  V('copy')
                  var g = b.CUSTOM_SHARE_OPTIONS_CP_CHANNEL_REF,
                    e = a(d)
                  O(e)
                  Q(g, !1, function (a) {
                    var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : ''
                    E
                      ? Y(a).then(
                          function () {
                            return T(g, e, c, b)
                          },
                          function () {
                            return ca(g, e, c)
                          },
                        )
                      : E ||
                        navigator.clipboard.writeText(a).then(
                          function () {
                            return T(g, e, c, b)
                          },
                          function () {
                            return ca(g, e, c)
                          },
                        )
                  })
                })()
              } catch (Z) {
                v.log(
                  'Failed to share using copy channel, error: ' + Z.toString(),
                  'ERROR',
                  b.SSF_AUI_PACKAGE_ATTRIBUTION,
                )
              }
            })
          a('.ssf-custom-share-option:not(.custom-share-copy,.custom-share-native-sheet)').unbind(
            'click',
          )
          a('.ssf-custom-share-option:not(.custom-share-copy,.custom-share-native-sheet)').click(
            function (c) {
              var d = this
              try {
                ;(function () {
                  var c = a(d),
                    e = c.data('name'),
                    r = J(),
                    u = J(e)
                  f.startTimer(r)
                  f.startTimer(u)
                  var p = z[e],
                    m = b.CUSTOM_SHARE_OPTIONS_REF_PREFIX + '_' + p.ref,
                    l = g.shareUrl.refMarker.getClickForChannel(m)
                  a('.ssf-error-text').addClass(q)
                  O(c)
                  Q(m, !0, function (a) {
                    var d = 1 < arguments.length && arguments[1] !== h ? arguments[1] : '',
                      q = W(p.shareUrl, p.label, a, R())
                    x
                      ? x.launchIntentURL({
                          url: q,
                          successCallback: function () {
                            f.stopTimer(r)
                            f.stopTimer(u)
                            P(c)
                            n()
                            f.logCounterRefactor('ChannelClick', w.ingress)
                            f.logCounter('ChannelClick')
                            V(e)
                            d && U(d)
                            g && g.isHmpShareSheet && G()
                            f.logCSAEvent(b.CSA_HIT_TYPE.SHARE, S(e, l))
                          },
                          failCallback: function (d) {
                            v.log(
                              'Failed to launch intent URL ' + q + ' with error code: ' + d.code,
                              'WARN',
                              b.SSF_AUI_PACKAGE_ATTRIBUTION,
                            )
                            f.logCounter('customShareOptions.LaunchShareIntentFail')
                            P(c)
                            f.stopTimer(r)
                            f.stopTimer(u)
                            N && p.fallbackShareUrl
                              ? (f.logCSAEvent(b.CSA_HIT_TYPE.SHARE, S(e, l)),
                                (k.location = W(p.fallbackShareUrl, p.label, a, R())))
                              : (n(), X())
                          },
                        })
                      : (P(c),
                        f.logCSAEvent(b.CSA_HIT_TYPE.SHARE, S(e, l)),
                        n(),
                        k.open(q, '_blank'))
                  })
                })()
              } catch (Z) {
                v.log(
                  'Failed to share, error: ' + Z.toString(),
                  'ERROR',
                  b.SSF_AUI_PACKAGE_ATTRIBUTION,
                )
              }
            },
          )
        },
      }
    },
  )
  ;('use strict')
  v.when('A', 'SocialShareWidgetState', 'atf').execute(function (e, h) {
    var n = e.$('#ssf-primary-widget-desktop')
    e = e.$('#ssf-share-action')
    n = n.data('ssfShareIcon') || e.data('ssfShareIcon') || {}
    h.set('shareAapiCsrfToken', n.shareAapiCsrfToken)
    h.set('aapiBaseUrl', n.aapiBaseUrl)
    h.set('dpx', !0)
  })
  ;('use strict')
  v.when('A', 'SocialShareWidget').execute(function (e, h) {
    var n = void 0,
      l = h.SocialShareCore.Metrics
    h = e.debounce(
      function () {
        clearTimeout(n)
      },
      200,
      !0,
    )
    e.declarative('ssf-share-icon', 'touchstart', function () {
      n = setTimeout(function () {
        l.logCounter('longpress')
      }, 500)
    })
    e.declarative('ssf-share-icon', 'touchmove touchend', h)
  })
  ;('use strict')
  v.when('A', 'SocialShareWidget').register('SocialShareWidgetMetrics', function (e, n) {
    var k = n.SocialShareCore.Metrics,
      l = function (a) {
        a = a.pathname.split('/').filter(function (a) {
          return e.contains(a, 'ref\x3d')
        })
        return (a.length ? a[0] : '').replace('ref\x3d', '')
      },
      a = function (a) {
        return (a = a.match(/cm_sw_r_(?:cso_)?(.*?)_/)) ? a[1] : h
      }
    v.now('SocialShareWidgetLoadedBTF').execute(function (a) {
      a ? k.logCounter('btf:render') : k.logCounter('atf:render')
    })
    v.when('atf').execute(function () {
      try {
        var h = e.capabilities,
          f = h.tablet
        h.isIE && k.logCounter('render.ie')
        ;(f || (600 < screen.width && h.isAmazonApp)) && k.logCounter('render.tablet')
        var b = new URL(location.href)
        if (b.href.includes('cm_sw_r_')) {
          var d = b.searchParams.get('ref') || b.searchParams.get('ref_')
          d || (d = l(b))
          if (d.startsWith('cm_sw_r_')) {
            var n = a(d)
            n && k.logCounter('return.visit.' + n)
            k.logCounter('return.visit')
          }
        }
        b.searchParams.get('cafId') && k.logCounter('CAF.cafDeepLink')
      } catch (c) {
        k.logCounter('urlparam.issue')
      }
    })
    return { getRefEq: l, getChannelFromRef: a }
  })
  ;('use strict')
  v.register('SocialShareWidgetLinkUtil', function () {
    return {
      getLinkWithFlippedStarsLeft: function (e) {
        try {
          var h = new URL(e.href || e),
            k = h.searchParams
          if (k.get('ref_') && k.get('starsLeft')) {
            var l = k.get('ref_'),
              a = k.get('starsLeft'),
              m = k.get('newPreview'),
              f = k.get('skipTwisterOG'),
              b = k.get('bestFormat'),
              d = k.get('language'),
              x = k.get('titleSource')
            k.delete('ref_')
            k.delete('starsLeft')
            k.delete('newPreview')
            k.delete('skipTwisterOG')
            k.delete('bestFormat')
            k.delete('language')
            k.delete('titleSource')
            h.searchParams.append('ref_', l)
            h.searchParams.append('starsLeft', a)
            m && h.searchParams.append('newPreview', m)
            f && h.searchParams.append('skipTwisterOG', f)
            b && h.searchParams.append('bestFormat', b)
            d && h.searchParams.append('language', d)
            x && h.searchParams.append('titleSource', x)
          }
          return h.toString()
        } catch (c) {
          return e.toString()
        }
      },
    }
  })
  ;('use strict')
  v.when(
    'A',
    'SocialShareWidget',
    'SocialShareWidgetAPI',
    'SocialShareWidgetCustomizeUtils',
  ).register('SocialShareWidgetCustomize', function (e, n, A, l) {
    n = n.SocialShareCore
    var a = e.$,
      m = n.ShareSheet,
      f = n.Url,
      b = n.Metrics,
      d = n.Constants,
      x = b.getMetricName(a, d.customize),
      c = e.constants.HIDE_CLASS,
      y = function () {},
      t,
      E = 0,
      q = void 0,
      g = void 0,
      r = void 0,
      z = !1
    v.when('a-checkbox').execute(function (a) {
      return (g = a)
    })
    v.when('a-button').execute(function (a) {
      return (q = a)
    })
    try {
      ;(function () {
        var u = l.imageState
        e.declarative('cafCheckboxAction', 'change', function () {
          r()
        })
        e.on(l.getEventName('Hide'), function (a) {
          a.sheet.getContentContainer().remove()
          u.clear()
        })
        e.on('a:sheet:afterShow:ssf-customize-bottom-sheet', function (a) {
          K(a.sheet)
        })
        var n = function (c, d, g) {
            var f = a('.ssf-preview-container'),
              q = a('.ssf-caf-preview'),
              h = (t = d) ? 'CAF.switchOn' : 'CAF.switchOff'
            b.logCounter(x, h)
            b.logCounterRefactor(h, g)
            e.trigger('ssf:event:caf-switch-change', d)
            u.isConsultAFriendPreview = d
            g = l.getImageData(c, u)
            z
              ? l.getBackendPreviewImage(c, g, function (a) {
                  a ? C(a) : e.trigger('ssf:event:preview-generation-failed', c)
                })
              : d
                ? (q.fadeIn(100), f.hide())
                : (f.fadeIn(100), q.hide())
          },
          p = function (a) {
            var b = a.shareData,
              c = a.channelRef,
              d = b.shareUrl
            a = b.isOGTEnabled
            a = a === h ? !1 : a
            var g = b.aapiBaseUrl
            g = g === h ? '' : g
            var e = b.shareAapiCsrfToken
            e = e === h ? '' : e
            var f = b.tinyUrlEnabled
            f = f === h ? !1 : f
            var q = b.deeplinkInfo
            q = q === h ? {} : q
            var r = b.shareDataAttributes,
              p = b.storeId
            p = p === h ? '' : p
            d.refMarker.isBestFormatEnabled = b.isBestFormatEnabled
            c = c ? d.getReturnForChannel(c) : d.return
            d = r.marketplaceId
            return {
              tinyUrlEnabled: f,
              aapiBaseUrl: g,
              shareAapiCsrfToken: e,
              marketplaceId: d === h ? '' : d,
              url: c,
              isOGTEnabled: a,
              originalUrl: b.url || c,
              refMarkerId: E++,
              deeplinkInfo: q,
              storeId: p,
            }
          },
          D = function (g, r, u, l, n, z, t) {
            var w = u.shareDataAttributes,
              B = u.url,
              y = w.asin,
              D = w.ingress
            w = u.refId
            a('.ssf-customize-share-btn').find('.a-spinner').addClass(c)
            q('.ssf-customize-share-btn').enable()
            r()
            var A = !1
            r = new URL(z === h ? B : z)
            l &&
              ((w = d.CAF_REF_PREFIX + '_' + w),
              r.searchParams.append('cafId', l),
              r.searchParams.append('cafASIN', n),
              n !== y && b.logCounter(x, 'CAF.ShareASINMismatch'),
              (A = !0))
            r.searchParams.append('language', k.languageOfPreference || u.locale || 'en_US')
            u.shareUrl = new f(r.toString(), w)
            var C = p({ shareData: u })
            v.when('SocialShareWidgetTiny').execute(function (a) {
              a.fetch({
                data: C,
                callback: function (a) {
                  u.tinyUrl = a
                  t && t()
                  a = e.extend(
                    {
                      channelSelectCB: function () {
                        l && e.trigger('ssf:event:caf-share-complete-success', u)
                      },
                      cafSwitchEnabled: A,
                    },
                    u,
                  )
                  new m(a).launch(function () {
                    e.delay(function (a) {
                      g(u)
                    }, 100)
                    l
                      ? (b.logCounter(x, 'CAF.ShareSheetOpen'),
                        b.logCounterRefactor('CAF.ShareSheetOpen', D))
                      : (b.logCounter(x, 'ShareSheetOpen'),
                        b.logCounterRefactor('ShareSheetOpen', D))
                  })
                },
              })
            })
          },
          C = function (a) {
            if (!(1 < arguments.length && arguments[1] !== h && arguments[1])) {
              var b = new Image()
              b.src = a
              b.onload = function () {
                u.productImageProperties.width = this.width
                u.productImageProperties.height = this.height
              }
            }
          },
          N = function (a) {
            a = a.popularHighlightStrings
            var b = []
            b.push({
              id: 'BackgroundImageTab',
              physicalId: '417kcYISTOL.jpg',
              url: 'https://m.media-amazon.com/images/I/417kcYISTOL.jpg',
            })
            a.length &&
              ((defaultQuote = a[0].replace(/"|”|“/g, '')),
              b.push({ id: 'BookQuotesTab', value: defaultQuote }))
            return b
          },
          K = function (a) {
            var c = a.$contentContainer,
              d = parseInt(a.$container.css('max-height'))
            c = parseInt(c.height())
            d < c
              ? (a.$contentContainer.css('height', d), b.logCounter('SmallDevice'))
              : a.$contentContainer.css('height', 'auto')
          }
        y = function (f, p, k, m) {
          var B = f.shareDataAttributes,
            w = f.treatment,
            y = w === h ? '' : w
          w = f.weblab
          var E = w === h ? '' : w
          w = f.caf
          w = w === h ? !1 : w
          var H = f.isCafPreviewGenerationMigrationEnabled,
            F = B.ingress
          u.currentPreview = l.getRegularImage()
          t = f.cafSwitch
          w && H && (z = !0)
          w = function (a, b) {
            0 < b.length &&
              b.forEach(function (a) {
                u.set(a)
              })
          }
          var G = function (a) {
              b.logCounter(x, a)
              b.logCounterRefactor(a, F)
              b.logCounter(a)
            },
            I = function (b, c) {
              A.build(b).fetchTabs(function (d) {
                v.now('SocialShareWidgetCustomizeTemplate').execute(function (g) {
                  a('.ssf-tabs').html(g.getTabs(b, d))
                  c(d)
                })
              })
            }
          r = function () {
            var a = g('.ssf-caf-toggle')
            n(f, a.isChecked(), F)
          }
          f.customize && f.customizePreSelected
            ? ((H = N(f)),
              (u.defaultCustomizationOptions = H),
              w(f, H),
              (w = l.getImageData(f, u)),
              l.getBackendPreviewImage(f, w, function (a) {
                u.currentImage = a
                C(a)
                l.adjustPreviewHeight()
                K(m)
              }))
            : z
              ? ((w = l.getImageData(f, u)),
                l.getBackendPreviewImage(f, w, function (a) {
                  a ? C(a) : e.trigger('ssf:event:preview-generation-failed', f)
                }))
              : n(f, t, F)
          a('.ssf-customize-share-btn').click(function () {
            q('.ssf-customize-share-btn').isEnabled() &&
              (a('.ssf-customize-share-btn').find('.a-spinner').removeClass(c),
              q('.ssf-customize-share-btn').disable(),
              t
                ? (G('CAF.shareClick'),
                  b.startTimer('CAF.fetchCAFAndTinyURL'),
                  (f.title = (f.t['taf-share-caf-messageprefix'] || '') + ' ' + f.title),
                  A.build(f).fetchCAFID(function (a, c, d) {
                    D(p, k, f, a, c, d, function () {
                      b.stopTimer('CAF.fetchCAFAndTinyURL')
                    })
                  }))
                : (G('shareClick'),
                  b.logCSAEvent(d.CSA_HIT_TYPE.CUSTOMIZE_SHARE, {
                    channel: d.EMPTY_STRING,
                    refMarker: f.shareUrl.refMarker.click,
                    shareDataAttributes: B,
                    treatment: y,
                    weblab: E,
                  }),
                  D(p, k, f)))
          })
          a('.ssf-caf-toggle-ed-ingress').click(function () {
            var a = 'C'
            f.cafIngressId === d.CAF_INFO_ICON_KEY
              ? (a = 'T1')
              : f.cafIngressId === d.CAF_LEARN_MORE_KEY && (a = 'T2')
            G('CAF.edIngressTapped' + a)
            l.transitionToCAFEducationPage()
            K(m)
          })
          a('.ssf-customize-icon').click(function () {
            q(this).isEnabled() &&
              (G('CustomizeButtonClick'),
              q(this).disable(),
              (u.currentPreview = l.getCustomizeImage()),
              I(f, function (b) {
                b.forEach(function (b) {
                  var c = 'input[type\x3dradio][name\x3d' + b.id + ']'
                  a(c).change(function (b) {
                    b = JSON.parse(b.target.value)
                    L(b)
                    a(c).unbind('click')
                    a(this).one('click', function (a) {
                      a = a.target
                      a.checked = !1
                      a = JSON.parse(a.value)
                      J(a)
                    })
                  })
                })
                f.customizePreSelected &&
                  (a('#BackgroundImageTab1').trigger('click'),
                  a('#BookQuotesTab0').trigger('click'))
                b = l.getImageData(f, u)
                l.getBackendPreviewImage(f, b, function (a) {
                  u.currentImage = a
                  l.transitionToCustomizePage()
                  l.adjustCustomizedPreviewHeight()
                  K(m)
                  C(a)
                })
              }))
          })
          a('.ssf-customize-edit-poll-btn').click(function () {
            q(this).isEnabled() &&
              (q(this).disable(),
              e.trigger('ssf-edit-your-poll-trigger', f.hmpState),
              G('HMP.EditYourPoll.Clicked'),
              k())
          })
          var L = function (a) {
              l.setImage()
              Array.isArray(a)
                ? a.forEach(function (a) {
                    u.set(a)
                  })
                : u.set(a)
              var b = l.getImageData(f, u)
              G(a.id + 'Select')
              l.getBackendPreviewImage(f, b, function (a) {
                u.currentImage = a
                C(a)
              })
            },
            J = function (a) {
              l.setImage()
              G(a.id + 'Unselect')
              u.unset(a)
              a = l.getImageData(f, u)
              l.getBackendPreviewImage(f, a, function (a) {
                u.currentImage = a
                C(a)
              })
            }
          a('.ssf-back-btn').click(function () {
            l.isCAFEducationPageVisible() &&
              (f.cafIngressId === d.CAF_INFO_ICON_KEY
                ? G('CAF.edBackTappedT1')
                : f.cafIngressId === d.CAF_LEARN_MORE_KEY
                  ? G('CAF.edBackTappedT2')
                  : G('CAF.edBackTappedC'))
            u.currentPreview = l.getRegularImage()
            b.logCounter('BackButtonClick')
            l.resetPreviewState(u)
            l.transitionToDefaultPage()
            K(m)
          })
          v.when('a-checkbox').execute(function (b) {
            a('.ssf-caf-toggle-label').click(function () {
              var a = b('.ssf-caf-toggle')
              a.check(!a.isChecked())
            })
          })
          e.on('ssf:event:preview-generation-failed', function (b) {
            z = !1
            a('.ssf-backend-preview').addClass(c)
            a('.ssf-html-preview').removeClass(c)
            n(b, t, F)
          })
        }
      })()
    } catch (u) {
      b.logCounter(x, 'Error'),
        b.logLoad('Error'),
        b.logFatal('Error loading Customize widget, Share Framework AUI: ' + u.toString())
    } finally {
      b.logCounter(x, 'Render'), b.logLoad('Render')
    }
    return { init: y }
  })
  ;('use strict')
  v.when('A', 'SocialShareWidget').register('SocialShareWidgetCustomizeTemplate', function (e, k) {
    k = k.SocialShareCore
    var n = e.capabilities.rtl,
      l = k.Constants,
      a = k.ToolBelt,
      m = function (a) {
        var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : ''
        a = a.startsWith('http') ? a : 'https://m.media-amazon.com/images/G/01/share-icons/' + a
        return '\x3cimg class\x3d"' + b + '" src\x3d"' + a + '"/\x3e'
      },
      f = function (a) {
        var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : 'ssf-product-title-text'
        e.on('a:sheet:afterShow:ssf-customize-bottom-sheet', function () {
          e.$('.ssf-title-label').text(a.title)
        })
        return (
          '\x3cdiv class\x3d"a-color-secondary a-padding-small ' +
          b +
          '"\x3e\n      \x3cspan class\x3d"ssf-title-label" id\x3d"ssf-title-label"\x3e\n        \x3c!-- TITLE  --\x3e\n      \x3c/span\x3e\n    \x3c/div\x3e'
        )
      },
      b = function (a) {
        return (
          '\x3cdiv class\x3d"ssf-product-preview"\x3e' +
          d(a.productImage, '', '', 'ssf-title-label') +
          '\x3c/div\x3e'
        )
      },
      d = function (a) {
        var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : '',
          c = 2 < arguments.length && arguments[2] !== h ? arguments[2] : '',
          d = 3 < arguments.length && arguments[3] !== h ? arguments[3] : ''
        a = a.startsWith('http') ? a : 'https://m.media-amazon.com/images/G/01/share-icons/' + a
        return c || d
          ? '\x3cimg class\x3d"' +
              b +
              '" ' +
              (d ? 'aria-labelledby\x3d"' + d + '"' : '') +
              ' ' +
              (c ? 'aria-label\x3d"' + c + '"' : '') +
              ' src\x3d"' +
              a +
              '"/\x3e'
          : m(a, b)
      },
      x = function () {
        return (
          '\x3cspan class\x3d"a-size-mini ssf-rating-count"\x3e' +
          (0 < arguments.length && arguments[0] !== h ? arguments[0] : '') +
          '\x3c/span\x3e'
        )
      },
      c = function (a) {
        return (
          '\x3cul class\x3d"ssf-options-box-container a-unordered-list a-nostyle"\x3e' +
          a.values
            .map(function (b, c) {
              var d = e.extend(b, { id: a.id }),
                g = { id: a.id, position: c, val: d, background: b.url }
              a.isQuote &&
                (g = e.extend(g, { center: !0, width: 150, content: d.displayText, background: h }))
              d = g.id
              c = g.position
              b = g.content
              b = b === h ? '' : b
              var f = g.width,
                q = f === h ? 100 : f,
                r = g.background
              f = g.center
              f = f === h ? !1 : f
              g = g.val
              q =
                'style\x3d"width: ' +
                q +
                'px;background-image: url(' +
                (r === h ? '' : r) +
                ');background-size: ' +
                q +
                'px ' +
                q +
                'px;"'
              r = JSON.stringify(g)
              c = d + c
              g = g.label || ''
              var k = '\x3cspan class\x3d"aok-offscreen"\x3e' + g + '\x3c/span\x3e'
              f &&
                (k =
                  '\x3cspan class\x3d"a-box-inner a-text-center ssf-q-text"\x3e' +
                  b +
                  '\x3c/span\x3e')
              return (
                '\x3cli class\x3d"ssf-options-box" aria-label\x3d\'' +
                g +
                '\'\x3e\n              \x3cinput id\x3d"' +
                c +
                '" type\x3d"radio" name\x3d"' +
                d +
                '" value\x3d\'' +
                r +
                "' aria-label\x3d'" +
                g +
                '\'\x3e\x3c/input\x3e\n              \x3clabel for\x3d"' +
                c +
                '" class\x3d"a-box a-text-normal" ' +
                q +
                '\x3e' +
                k +
                '\x3c/label\x3e\n            \x3c/li\x3e'
              )
            })
            .join('') +
          '\x3c/ul\x3e'
        )
      },
      v = function (a) {
        var b = 1 < arguments.length && arguments[1] !== h ? arguments[1] : '',
          c = 2 < arguments.length && arguments[2] !== h ? arguments[2] : !1
        return (
          '\x3cli class\x3d"a-tab-heading ssf-customize-tab ' +
          (c ? 'a-active' : '') +
          '" data-a-tab-name\x3d"ssf-tab-' +
          a +
          '" role\x3d"presentation"\x3e\n              \x3ca aria-label\x3d"' +
          b +
          '" href\x3d"#" role\x3d"tab" aria-selected\x3d"' +
          (c ? 'true' : 'false') +
          '" ' +
          (c ? '' : 'tabindex\x3d"-1"') +
          '\x3e' +
          b +
          '\x3c/a\x3e\n            \x3c/li\x3e'
        )
      },
      t = function (a) {
        return (
          '\x3cdiv data-a-name\x3d"ssf-tab-' +
          a +
          '" class\x3d"ssf-tab-' +
          a +
          ' a-box a-box-tab a-tab-content ' +
          (3 < arguments.length && arguments[3] !== h && arguments[3] ? '' : 'a-hidden') +
          ' a-padding-mini" role\x3d"tabpanel" tabindex\x3d"0"\x3e\n              ' +
          (1 < arguments.length && arguments[1] !== h ? arguments[1] : '') +
          '\n            \x3c/div\x3e'
        )
      },
      E = function () {
        return (0 < arguments.length && arguments[0] !== h ? arguments[0] : []).map(function (a) {
          a = a.replace(/"|”|“/g, '')
          return { displayText: '“' + a + '”', value: a }
        })
      }
    return {
      getTabs: function (a, b) {
        var d = a.popularHighlightStrings
        if (!b.length) return ''
        var g = '',
          f = '',
          e = -1
        b.forEach(function (a, b) {
          a.isQuote && (a.values = E(d))
          if (!a.values.length) return ''
          ;-1 === e && (e = b)
          b = b === e
          g += v(a.id, a.heading, b)
          f += t(a.id, c(a), a.text, b)
        })
        return (
          '\x3cdiv class\x3d"a-tab-container a-size-small"\x3e' +
          ('\x3cul data-action\x3d"a-tabs" class\x3d"a-tabs a-declarative ssf-customize-tab a-spacing-small" role\x3d"tablist" data-a-tabs\x3d\'{"name": "customize-tabs"}\'\x3e\n        ' +
            g +
            '\x3c/ul\x3e' +
            f) +
          '\x3c/div\x3e'
        )
      },
      getCustomizeBox: function (a) {
        return (
          '\x3cdiv class\x3d"a-box a-color-alternate-background a-spacing-top-large a-padding-base ssf-customize-box"\x3e\n      ' +
          ('\x3ch5 class\x3d"a-size-small a-spacing-micro"\x3e' +
            a.taf_custshare_customizelong +
            '\x3c/h5\x3e') +
          ('\x3cp class\x3d"a-size-small a-color-secondary"\x3e' +
            a.taf_custshare_customizedesc +
            '\x3c/p\x3e') +
          ('\x3cspan class\x3d"a-button a-button-small" id\x3d"ssf-customize-share"\x3e\n      \x3cspan class\x3d"a-button-inner"\x3e\n        \x3cbutton class\x3d"a-button-text" type\x3d"button"\x3e' +
            a.taf_custshare_customizeshort +
            '\x3c/button\x3e\n      \x3c/span\x3e\n    \x3c/span\x3e') +
          '\n    \x3c/div\x3e'
        )
      },
      getBackArrow: function (a) {
        a = a['taf-share-general-gobacktopage'] || ''
        return (
          '\x3cbutton type\x3d"button" class\x3d"ssf-back-btn a-padding-small" aria-label\x3d"' +
          a +
          '" tabindex\x3d"0"\x3e' +
          ('\x3cimg src\x3d"https://m.media-amazon.com/images/G/01/share-icons/arrow-left.svg" alt\x3d"' +
            a +
            '"\x3e') +
          '\x3c/button\x3e'
        )
      },
      tabsContainer:
        '\x3cdiv class\x3d"a-row a-spacing-top-micro ssf-tabs a-color-base-background a-padding-mini"\x3e\x3c/div\x3e',
      getImageSection: function (a) {
        var c = f(a)
        var e = a.isCafPreviewGenerationMigrationEnabled
        var k = a.customize,
          l = a.customizePreSelected
        e = a.caf && e ? !0 : k && l ? !0 : !1
        k =
          '\x3cdiv class\x3d"a-padding-base ssf-preview-container"\x3e\n      ' +
          (a.customize
            ? '\x3cspan id\x3d"ssf-customize-icon" class\x3d"ssf-customize-icon"\x3e' +
              m('customize') +
              '\x3c/span\x3e'
            : '') +
          '\n      \x3cspan class\x3d"a-spinner a-spinner-medium a-align-center ssf-preview-spinner aok-hidden"\x3e\x3c/span\x3e\n    \x3c/div\x3e'
        e =
          '\x3cdiv class\x3d"a-box ssf-preview-box"\x3e\n              \x3cdiv class\x3d"ssf-backend-preview ' +
          (e ? '' : 'aok-hidden') +
          '"\x3e' +
          k +
          '\x3c/div\x3e\n              \x3cdiv class\x3d"ssf-html-preview ' +
          (e ? 'aok-hidden' : '') +
          '"\x3e'
        var q = a.customize
        l = a.t
        k = b({ productImage: a.productImage })
        var p = a.starRating,
          t = p === h ? 'ZERO' : p
        p = a.customize
        p = p === h ? !1 : p
        var v = a.numberOfReviews,
          y = a.caf
        a = a.isUnrecognizedUsersRichPreviewEnabled
        t = d('RIO' + t + (n ? 'r' : '') + '.png', 'ssf-caf-stars', t + ' star rating')
        v = x(v)
        a =
          '\x3cdiv class\x3d"ssf-caf-rating"\x3e\n              \x3cdiv class\x3d"' +
          (y || a || p ? 'ssf-caf-rating-left' : 'ssf-caf-rating-right') +
          '"\x3e\n                ' +
          t +
          v +
          '\n              \x3c/div\x3e\n            \x3c/div\x3e'
        q = q
          ? '\x3cspan id\x3d"ssf-customize-icon" class\x3d"ssf-customize-icon"\x3e' +
            m('customize') +
            '\x3c/span\x3e'
          : ''
        l =
          '\x3cp class\x3d"a-size-base a-spacing-micro ssf-caf-text"\x3e' +
          l.taf_custshare_caf_recipientemoji +
          '\x3c/p\x3e'
        p = d(
          'caf-emojis' + (n ? 'r' : '') + '.png',
          'ssf-caf-emojis',
          'A heart eyes emoji, a thinking emoji, and a frowning emoji',
        )
        return (
          e +
          ('\x3cdiv class\x3d"a-padding-base ssf-preview-container"\x3e\n              ' +
            q +
            '\n              \x3cspan class\x3d"a-spinner a-spinner-medium a-align-center ssf-preview-spinner aok-hidden"\x3e\x3c/span\x3e\n              ' +
            k +
            '\n              ' +
            a +
            '\n            \x3c/div\x3e ' +
            ('\x3cdiv class\x3d"ssf-caf-preview"\x3e\n              \x3cdiv class\x3d"a-padding-base ssf-caf-image"\x3e\n                \x3cdiv class\x3d"a-row ssf-caf-image-stickers"\x3e' +
              k +
              ('\x3cdiv class\x3d"a-column ssf-caf-stickers"\x3e' + l + p + '\x3c/div\x3e') +
              '\x3c/div\x3e\n                  ' +
              a +
              '\n                \x3c/div\x3e\n            \x3c/div\x3e')) +
          '\x3c/div\x3e\n              ' +
          c +
          '\n            \x3c/div\x3e'
        )
      },
      getHmpImageSection: function (c) {
        var d = c.productImage
        c =
          '\x3cdiv class\x3d"a-color-secondary a-padding-small ssf-title-text-hmp"\x3e\n    \x3cspan\x3e\n    ' +
          a.sanitizeInput(c.hmpState.title) +
          '\n    \x3c/span\x3e\n    \x3c/div\x3e'
        return (
          '\x3cdiv class\x3d"a-box ssf-preview-box"\x3e\n                ' +
          b({ productImage: d }) +
          '\n                ' +
          c +
          '\n            \x3c/div\x3e'
        )
      },
      getCustomizePreviewImage: function (a) {
        return (
          '\x3cdiv class\x3d"a-box ssf-no-border ssf-cus-img-container"\x3e\n      \x3cdiv class\x3d"ssf-cus-img"\x3e\x3cspan class\x3d"a-spinner a-spinner-medium a-align-center ssf-preview-spinner aok-hidden"\x3e\x3c/span\x3e\x3c/div\x3e\n      ' +
          f(a, 'ssf-product-title-text-small') +
          '\n    \x3c/div\x3e'
        )
      },
      getToggleContainer: function (a) {
        var b = 2 < arguments.length && arguments[2] !== h ? arguments[2] : '',
          c = (1 < arguments.length && arguments[1] !== h ? arguments[1] : '').match(/^T(\d+)$/)
        c = a['taf_custshare_caf_ingress' + (c ? '_alt' + c[1] : '')]
        var d =
            '\x3csmall\x3e\x3ca class\x3d"ssf-caf-toggle-ed-ingress a-size-base a-link-normal"\x3e' +
            (a.taf_custshare_caf_ingress_learn_more || 'Learn more') +
            '\x3c/a\x3e\x3c/small\x3e',
          e = m(
            'https://m.media-amazon.com/images/G/01/AppFirst/ConsultAFriend/information-default.png',
          )
        return (
          '\x3cdiv class\x3d"a-row a-spacing-top-medium-plus a-grid-vertical-align a-grid-center a-spacing-micro"\x3e\n      \x3cdiv class\x3d"a-column a-span1"\x3e\x3cdiv class\x3d"a-checkbox a-declarative a-checkbox-fancy ssf-caf-toggle" data-action\x3d"cafCheckboxAction"\x3e\n      \x3clabel class\x3d"a-padding-none" aria-labelledby\x3d"caf-checkbox-label"\x3e\n        \x3cinput class\x3d"a-declarative" name\x3d"caf" type\x3d"checkbox"\x3e\n        \x3ci class\x3d"a-icon a-icon-checkbox"\x3e\x3c/i\x3e\n      \x3c/label\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n      \x3cdiv class\x3d"a-column a-span10"\x3e\n        \x3csmall id\x3d"caf-checkbox-label" class\x3d"ssf-caf-toggle-label a-size-base"\x3e' +
          c +
          '.\x3c/small\x3e\n        ' +
          (b === l.CAF_INFO_ICON_KEY
            ? '\x3cspan class\x3d"ssf-info-icon ssf-caf-toggle-ed-ingress"\x3e\x3cstrong\x3e' +
              e +
              '\x3c/strong\x3e\x3c/span\x3e'
            : b === l.CAF_LEARN_MORE_KEY
              ? d
              : '') +
          '\n      \x3c/div\x3e\n    \x3c/div\x3e'
        )
      },
      getEducationCXBody: function (a) {
        return (
          '\x3cdiv class\x3d"a-box ssf-no-border"\x3e\n        ' +
          ('\x3cdiv class\x3d"a-color-secondary a-padding-small"\x3e\n      \x3cspan\x3e\n        ' +
            (a.taf_custshare_caf_education_body ||
              'Ask your friends for help. Use this option to ask friends to react to the item with an emoji. You can share the link by messaging your friends or posting on social media. You’ll get a notification for each reaction.') +
            '\n      \x3c/span\x3e\n    \x3c/div\x3e') +
          '\n        \x3cdiv class\x3d"ssf-caf-education-video a-padding-base"\x3e\n          \x3cvideo id\x3d"ssf-caf-education-video" loop playsinline\x3e\n            \x3csource src\x3d"https://m.media-amazon.com/images/G/01/AppFirst/ConsultAFriend/caf-education-no-audio.mp4" type\x3d"video/mp4"\x3e\n          \x3c/video\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e'
        )
      },
    }
  })
  ;('use strict')
  var da =
    'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' === typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        }
  v.when('A', 'SocialShareWidget', 'SocialShareWidgetAPI', 'SocialShareWidgetState').register(
    'SocialShareWidgetCustomizeUtils',
    function (e, n, v, l) {
      function a(a) {
        var b = a.values,
          c = b.BackgroundImageTab,
          d = b.DeviceCoverImageTab,
          g = b.BookQuotesTab
        b = b.isConsultAFriendPreview
        var e = a.productImageProperties
        a = e.width
        e = e.height
        return {
          bgId: (c === h ? {} : c).physicalId || '',
          deviceId: (d === h ? {} : d).physicalId || '',
          quoteValue: (g === h ? {} : g).value || '',
          isConsultAFriendPreview: b === h ? !1 : b,
          width: a === h ? '' : a,
          height: e === h ? '' : e,
        }
      }
      function m(a, b) {
        var c = a.shareUrl,
          g = a.socialLinks,
          e = g === h ? {} : g
        g = a.isOGTEnabled
        g = g === h ? !1 : g
        c.refMarker.isBestFormatEnabled = a.isBestFormatEnabled
        c = b ? c.getReturnForChannel(b) : c.return
        b = b.replace(y.CUSTOM_SHARE_OPTIONS_REF_PREFIX + '_', '')
        e = e.shareframework || a.url
        var f = a.aapiBaseUrl
        f = f === h ? '' : f
        var k = a.shareAapiCsrfToken
        k = k === h ? '' : k
        var l = a.tinyUrlEnabled
        l = l === h ? !1 : l
        var r = a.deeplinkInfo
        r = r === h ? {} : r
        var m = a.isOnShareGatingEnabled
        m = m === h ? !1 : m
        var n = a.shareDataAttributes
        a = n.marketplaceId
        a = a === h ? '' : a
        n = n.asin
        n = n === h ? '' : n
        var t = d()
        return {
          tinyUrlEnabled: l,
          aapiBaseUrl: f,
          shareAapiCsrfToken: k,
          marketplaceId: a,
          asin: n,
          url: c,
          osType: t,
          isOGTEnabled: g,
          originalUrl: e || c,
          refMarkerId: q++,
          deeplinkInfo: r,
          isOnShareGatingEnabled: m,
          extractedRef: b,
        }
      }
      function f(a, b, c, d) {
        if (
          c.isEmpty() ||
          da(c.currentImage) === h ||
          (da(c.currentImage) !== h && !c.currentImage.length)
        )
          return d({})
        c = encodeURIComponent(c.currentImage)
        v.build(a).externalizeImage(c, d, b)
      }
      function b(a, b, c) {
        v.build(a).generateImage(b, function (a) {
          c(a.entity)
        })
      }
      function d() {
        switch (!0) {
          case e.capabilities.ios:
            return 'ios'
          case e.capabilities.android:
            return 'android'
          default:
            return 'unknown'
        }
      }
      n = n.SocialShareCore
      var x = e.constants.HIDE_CLASS,
        c = e.$,
        y = n.Constants,
        t = n.Metrics,
        A = n.Url,
        q = 0
      return {
        getEventName: function (a) {
          return 'a:sheet:after' + a + ':ssf-customize-bottom-sheet'
        },
        getCustomizeImage: function () {
          return c('.ssf-cus-img')
        },
        getCustomizeImageContainer: function () {
          return c('.ssf-cus-img-container')
        },
        getRegularImage: function () {
          return c('.ssf-backend-preview .ssf-preview-container')
        },
        getPreviewBox: function () {
          return c('.ssf-preview-box')
        },
        setImage: function (a) {
          this.imageState.currentPreview.css('background-image', 'url("' + a + '")')
        },
        showSpinner: function () {
          this.imageState.currentPreview.find('.a-spinner').removeClass(x)
        },
        hideSpinner: function () {
          this.imageState.currentPreview.find('.a-spinner').addClass(x)
        },
        transitionToCustomizePage: function () {
          c('.ssf-customize-container-one').addClass(x)
          c('.ssf-customize-container-two').removeClass(x).addClass('ssf-customize-transition')
        },
        transitionToCAFEducationPage: function () {
          c('.ssf-customize-container-one').addClass(x)
          c('.ssf-customize-container-three').removeClass(x).addClass('ssf-customize-transition')
          var a = c('#ssf-caf-education-video').get(0)
          a && ((a.currentTime = 0), a.play())
        },
        isCAFEducationPageVisible: function () {
          return c('.ssf-customize-container-three').is(':visible')
        },
        adjustCustomizedPreviewHeight: function () {
          this.getCustomizeImageContainer().css({ width: 0.76 * k.innerWidth })
          var a =
              parseInt(this.getCustomizeImage().css('border-left-width')) +
              parseInt(this.getCustomizeImage().css('border-right-width')),
            b = this.getCustomizeImage().innerWidth()
          this.getCustomizeImage().css({ height: (b + a) / 1.91 })
        },
        adjustPreviewHeight: function () {
          this.getPreviewBox().css({ width: 0.93 * k.innerWidth })
          var a =
              parseInt(this.getRegularImage().css('border-left-width')) +
              parseInt(this.getRegularImage().css('border-right-width')),
            b = this.getRegularImage().innerWidth()
          this.getRegularImage().css({ height: (b + a) / 1.91 })
        },
        transitionToDefaultPage: function () {
          c('.ssf-customize-container-two').addClass(x)
          c('.ssf-customize-container-three').addClass(x)
          c('.ssf-customize-container-one').removeClass(x).addClass('ssf-customize-transition-back')
        },
        getImageData: function (b, c) {
          var d = a(c)
          return {
            productImageUrl: b.productImage,
            starRating: b.starRating || '',
            numberOfReviews: b.numberOfReviews || '',
            backgroundImagePhysicalId: d.bgId,
            deviceCoverImagePhysicalId: d.deviceId,
            bookQuote: d.quoteValue,
            productImageWidth: d.width,
            productImageHeight: d.height,
            consultAFriendPreviewEnabled: c.isConsultAFriendPreview,
            previewDohEnabled: b.previewDoh,
          }
        },
        resetPreviewState: function (a) {
          a.clear()
          0 < a.defaultCustomizationOptions.length &&
            a.defaultCustomizationOptions.forEach(function (b) {
              a.set(b)
            })
        },
        getBackendPreviewImage: function (a, c, d) {
          var e = this
          e.setImage('')
          e.showSpinner()
          b(a, c, function (a) {
            a && 'SUCCEEDED' === a.status
              ? ((a = a.customizedImage.url), e.hideSpinner(), e.setImage(a), d(a))
              : d()
          })
        },
        setCustomizeCSAData: function (b, c) {
          var d = y.customizeShareStateKey
          c = a(c)
          var e = y.TRUE,
            f = y.FALSE
          l.set(d, {
            backgroundImagePhysicalId: c.bgId,
            deviceCoverImagePhysicalId: c.deviceId,
            hasQuote: 0 < c.quoteValue.length ? e : f,
            isCustomizedExperienceEnabled: b.customize ? e : f,
            isCustomized: c.bgId || c.deviceId || c.quoteValue ? e : f,
            customizePreSelected: b.customizePreSelected ? e : f,
            isQuotesAvailable: b.popularHighlightStrings ? e : f,
          })
        },
        prepareShareUrl: function (a, b, c, d, e) {
          this.setCustomizeCSAData(a, this.imageState)
          f(a, d, this.imageState, function (f) {
            var g = f.entity
            f = new URL(a.url)
            var h = b
            g && g.physicalId
              ? (t.logCounterRefactor('externalizeImageSuccess'),
                f.searchParams.append('cspi', g.physicalId),
                (h = b + '_' + y.BOOKS_REF_PREFIX))
              : (a.customizePreSelected &&
                  (t.logCounter('booksPreviewNotAvailable'),
                  (h =
                    b + '_' + y.BOOKS_REF_PREFIX + '_' + y.BOOKS_CUSTOMIZE_PREVIEW_NOT_AVAILABLE)),
                (a.caf || a.isUnrecognizedUsersRichPreviewEnabled || a.customize) &&
                  f.searchParams.append('starsLeft', '1'),
                a.eventPreviewTreatment &&
                  'c' !== a.eventPreviewTreatment.toLowerCase() &&
                  ((g = a.eventPreviewTreatment.match(/^T(\d+)$/)),
                  f.searchParams.append('peakEvent', g[1]),
                  t.logCounterRefactor(
                    'EventPreview' + a.eventPreviewTreatment,
                    a.shareDataAttributes.ingress,
                  )))
            a.shareUrl = new A(f.toString(), a.refId)
            f = m(a, h)
            c.fetch({
              data: f,
              isAsync: d,
              callback: function (a) {
                e(a)
              },
            })
          })
        },
        imageState: {
          clear: function () {
            this.values = {}
          },
          isEmpty: function () {
            return c.isEmptyObject(this.values)
          },
          values: {},
          unset: function (a) {
            delete this.values[a.id]
          },
          set: function (a) {
            this.values[a.id] = a
          },
          defaultCustomizationOptions: [],
          currentImage: '',
          isConsultAFriendPreview: !1,
          currentPreview: '',
          productImageProperties: { width: 0, height: 0 },
        },
      }
    },
  )
  ;('use strict')
  v.when('A', 'SocialShareWidget', 'SocialShareWidgetAPI').register(
    'SocialShareWidgetCAFUtils',
    function (e, n, v) {
      function l(d, e) {
        var c = d.shareUrl,
          f = d.socialLinks
        f = f === h ? {} : f
        var l = d.isOGTEnabled
        l = l === h ? !1 : l
        c.refMarker.isBestFormatEnabled = d.isBestFormatEnabled
        var m = d.isHmpShareSheet ? 'hmp' : a.CAF_REF_PREFIX
        e = e ? c.getReturnForChannel(m + '_' + e) : c.return
        e = new URL(e)
        ;(d.caf || d.isUnrecognizedUsersRichPreviewEnabled) &&
          e.searchParams.append('starsLeft', '1')
        e.searchParams.has('language') ||
          e.searchParams.append('language', k.languageOfPreference || d.locale || 'en_US')
        e = e.toString()
        c = d.aapiBaseUrl
        m = d.shareAapiCsrfToken
        var n = d.tinyUrlEnabled,
          g = d.deeplinkInfo
        g = g === h ? {} : g
        var r = d.shareDataAttributes.marketplaceId
        return {
          tinyUrlEnabled: n === h ? !1 : n,
          aapiBaseUrl: c === h ? '' : c,
          shareAapiCsrfToken: m === h ? '' : m,
          marketplaceId: r === h ? '' : r,
          url: e,
          isOGTEnabled: l,
          originalUrl: f.shareframework || d.url || e,
          refMarkerId: b++,
          deeplinkInfo: g,
        }
      }
      var a = n.SocialShareCore.Constants,
        m = n.SocialShareCore.Url,
        f = n.SocialShareCore.Metrics,
        b = 0
      return {
        prepareShareUrl: function (b, e, c, h, k) {
          var d = b.refId
          f.logCounterRefactor('CAF.shareChannelClick', b.ingress)
          f.startTimer('CAF.fetchCAFAndTinyURL')
          d = a.CAF_REF_PREFIX + '_' + d
          v.build(b).fetchCAFID(function (a, g) {
            var n = new URL(b.url)
            a && n.searchParams.append('cafId', a)
            g && n.searchParams.append('cafASIN', g)
            b.shareUrl = new m(n.toString(), d)
            g = l(b, e)
            c.fetch({
              data: g,
              isAsync: h,
              callback: function (b) {
                f.stopTimer('CAF.fetchCAFAndTinyURL')
                k(b, a)
              },
            })
          }, h)
        },
        prepareHmpShareUrl: function (a, b, c, h, k) {
          var d = a.refId
          f.logCounter('HMP.shareChannelClick.' + a.ingress)
          f.startTimer('HMP.fetchPollIdAndTinyURL')
          d = 'hmp.' + d
          v.build(a).fetchHmpPollId(function (n) {
            var g = new URL(a.url)
            n && g.searchParams.append('hmpId', n)
            a.shareUrl = new m(g.toString(), d)
            a.url = g.toString()
            g = l(a, b)
            c.fetch({
              data: g,
              isAsync: h,
              callback: function (b) {
                f.stopTimer('HMP.fetchPollIdAndTinyURL')
                e.trigger('ssf:event:hmpPollCreated', a)
                k(b, n)
              },
            })
          }, h)
        },
      }
    },
  )
  ;('use strict')
  v.when('A', 'SocialShareWidget', 'SocialShareWidgetTiny').register(
    'SocialShareWidgetNativeUtils',
    function (e, h, k) {
      var l = h.SocialShareCore.ShareSheet,
        a = e.constants.HIDE_CLASS,
        m = h.SocialShareCore.Metrics,
        f = m.getMetricName(e.$)
      return {
        showSpinner: function (b) {
          b.addClass('ssf-noclick')
          b.find('.a-spinner').removeClass(a)
          b.find('i').hide()
        },
        hideSpinner: function (b) {
          b.removeClass('ssf-noclick')
          b.find('.a-spinner').addClass(a)
          b.find('i').show()
        },
        launchNativeShareSheet: function (a, d, h, c) {
          var b = this
          this.showSpinner(a.$currentTarget)
          h = h({ shareData: d })
          var n = d.shareDataAttributes.ingress
          d = e.extend(d, {
            sheetShownCallback: function () {
              b.hideSpinner(a.$currentTarget)
            },
          })
          k.fetch({
            data: h,
            callback: function (e) {
              d.tinyUrl = e
              new l(d).launch(function () {
                c(d)
                m.logCounter('DPX.Desktop.SheetOpen')
                m.logCounter(f, 'SheetOpen')
                m.logCounter('SheetOpen')
                m.logCounterRefactor('SheetOpen', n)
                b.hideSpinner(a.$currentTarget)
              })
            },
          })
        },
      }
    },
  )
})
/* ******** */
