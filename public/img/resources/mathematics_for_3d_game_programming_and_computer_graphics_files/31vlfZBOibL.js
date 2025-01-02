;(function (k) {
  var e = window.AmazonUIPageJS || window.P,
    r = e._namespace || e.attributeErrors,
    c = r ? r('DetailPageBulkBuyingAssets', '') : e
  c.guardFatal
    ? c.guardFatal(k)(c, window)
    : c.execute(function () {
        k(c, window)
      })
})(function (k, e, r) {
  k.when(
    'A',
    'jQuery',
    'abs-currency-formatter-util',
    'abs_bulk_buying_constants',
    'abs_bulk_buying_metrics',
    'dp-latency-marker',
  ).register('abs_bulk_buying_update_manager', function (c, b, e, a, l) {
    function k(f, n, d) {
      for (var b = 0; b < f.length; b++) {
        var e = h(f[b], a.ELEMENT_TYPE.DIV, a.SUBTOTAL.BULK_BUYING_SUBTOTAL_SECTION),
          c = h(f[b], a.ELEMENT_TYPE.INPUT, a.SUBTOTAL.BULK_BUYING_SUBTOTAL_QUANTITY_ELEMENT_ID)
        if (e && c && w(c, d)) {
          var p = e,
            e = f[b],
            t = d
          if (1 === parseInt(t)) (c.value = t), m(p)
          else {
            try {
              var g =
                  h(e, a.ELEMENT_TYPE.INPUT, a.SUBTOTAL.BULK_BUYING_PRICE_PER_ITEM_ELEMENT_ID)
                    .value * t,
                y = x(g)
              h(p, a.ELEMENT_TYPE.SPAN, a.SUBTOTAL.BULK_BUYING_SUBTOTAL_ELEMENT_ID).textContent = y
              u(p)
            } catch (q) {
              l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_EXCEPTION),
                l.logError(
                  'ERROR',
                  'Error while displaying Subtotal and Savings for absTotalUnitAndSubtotal',
                  q,
                ),
                m(p)
            }
            if ((p = h(p, a.ELEMENT_TYPE.DIV, a.TOTAL_SAVINGS.BULK_BUYING_TOTAL_SAVINGS_SECTION))) {
              var z =
                h(e, a.ELEMENT_TYPE.INPUT, a.TOTAL_SAVINGS.BULK_BUYING_SAVINGS_PER_ITEM_ELEMENT_ID)
                  .value * t
              try {
                var A = x(z)
                h(
                  e,
                  a.ELEMENT_TYPE.SPAN,
                  a.TOTAL_SAVINGS.BULK_BUYING_TOTAL_SAVINGS_ELEMENT_ID,
                ).textContent = A
                u(p)
              } catch (q) {
                m(p)
              }
            }
            c.value = t
          }
        }
      }
      b = h(n, a.ELEMENT_TYPE.INPUT, a.TOTAL_UNITS.BULK_BUYING_QUANTITY_ELEMENT_ID)
      n =
        h(n, a.ELEMENT_TYPE.SPAN, a.TOTAL_UNITS.BULK_BUYING_TOTAL_UNITS_ELEMENT_ID) && b
          ? w(b, d)
          : !1
      n && r(f, d)
    }
    function r(f, n) {
      if (1 === parseInt(n)) B(f, n)
      else {
        var d = b(a.TOTAL_UNITS.BULK_BUYING_CSRF_TOKEN_ELEMENT_ID).attr('value'),
          e = b(a.TOTAL_UNITS.BULK_BUYING_AJAX_ENDPOINT_ELEMENT_ID).attr('value'),
          c = b(a.TOTAL_UNITS.BULK_BUYING_TOTAL_UNITS_LOCALE_ELEMENT_ID).attr('value'),
          g = b(a.METADATA.AAPI_SLATE_TOKEN_META_NAME).attr('content')
        d && e && c
          ? ((c = c.replace(/_/g, '-')),
            (d = {
              'Accept-Language': c,
              Accept:
                'application/vnd.com.amazon.api+json; type\x3d"product/v2"; expand\x3d"buyingOptions[].totalUnit(product.total-unit/v1)"',
              'x-api-csrf-token': d,
            }),
            g
              ? ((d['x-amzn-encrypted-slate-token'] = g),
                l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_PRESENT))
              : l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_SLATE_TOKEN_ABSENT),
            b.ajax({
              url: e + n,
              type: 'GET',
              headers: d,
              async: !1,
              xhrFields: { withCredentials: !0 },
              success: function (d) {
                l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_SUCCESS)
                if (0 < d.entity.buyingOptions.length && d.entity.buyingOptions[0].totalUnit) {
                  if ((d = d.entity.buyingOptions[0].totalUnit)) {
                    if (d.metadata && d.metadata[a.METADATA.AAPI_METADATA_EXPERIMENTS])
                      try {
                        C(d.metadata[a.METADATA.AAPI_METADATA_EXPERIMENTS])
                      } catch (n) {
                        l.registerCounter(a.METRICS.TOTAL_UNIT_AND_SUBTOTAL_TRIGGERING_EXCEPTION),
                          l.logError(
                            'ERROR',
                            'Error while triggering weblabs For absTotalUnitAndSubtotal',
                            n,
                          )
                      }
                    for (var b = 0; b < f.length; b++) {
                      var e = h(
                          f[b],
                          a.ELEMENT_TYPE.SPAN,
                          a.TOTAL_UNITS.BULK_BUYING_TOTAL_UNITS_ELEMENT_ID,
                        ),
                        c = h(
                          f[b],
                          a.ELEMENT_TYPE.SPAN,
                          a.TOTAL_UNITS.BULK_BUYING_UNIT_COUNT_ELEMENT_ID,
                        ),
                        g = h(f[b], a.ELEMENT_TYPE.DIV, a.SUBTOTAL.BULK_BUYING_SUBTOTAL_SECTION)
                      if (e && c && g)
                        try {
                          d.entity && d.entity.displayString
                            ? ((e.textContent = d.entity.displayString),
                              u(e),
                              l.registerCounter(
                                a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_INFO_SHOWN,
                              ),
                              d.entity.unitCount &&
                                d.entity.unitCount.displayString &&
                                ((c.textContent = d.entity.unitCount.displayString), u(c)))
                            : (m(e), m(c), m(g))
                        } catch (n) {
                          l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_EXCEPTION),
                            l.logError(
                              'ERROR',
                              'Error while displaying Total Units for absTotalUnitAndSubtotal',
                              n,
                            ),
                            m(e),
                            m(c),
                            m(g)
                        }
                    }
                  }
                } else q(f)
              },
              error: function (a) {
                q(f)
              },
              complete: function (d) {
                for (d = 0; d < f.length; d++) {
                  var b = h(
                    f[d],
                    a.ELEMENT_TYPE.INPUT,
                    a.TOTAL_UNITS.BULK_BUYING_QUANTITY_ELEMENT_ID,
                  )
                  b && (b.value = n)
                }
              },
            }))
          : q(f)
      }
    }
    function B(f, b) {
      for (var d = 0; d < f.length; d++) {
        var e = h(f[d], a.ELEMENT_TYPE.SPAN, a.TOTAL_UNITS.BULK_BUYING_TOTAL_UNITS_ELEMENT_ID),
          c = h(f[d], a.ELEMENT_TYPE.SPAN, a.TOTAL_UNITS.BULK_BUYING_UNIT_COUNT_ELEMENT_ID),
          g = h(f[d], a.ELEMENT_TYPE.INPUT, a.TOTAL_UNITS.BULK_BUYING_QUANTITY_ELEMENT_ID)
        g && (g.value = b)
        m(e)
        m(c)
      }
    }
    function w(a, b) {
      return parseInt(a.value) === parseInt(b) ? !1 : !0
    }
    function q(f) {
      l.registerCounter(a.METRICS.TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_ERROR)
      for (var b = 0; b < f.length; b++) {
        var d = h(f[b], a.ELEMENT_TYPE.SPAN, a.TOTAL_UNITS.BULK_BUYING_TOTAL_UNITS_ELEMENT_ID),
          e = h(f[b], a.ELEMENT_TYPE.SPAN, a.TOTAL_UNITS.BULK_BUYING_UNIT_COUNT_ELEMENT_ID),
          c = h(f[b], a.ELEMENT_TYPE.DIV, a.SUBTOTAL.BULK_BUYING_SUBTOTAL_SECTION)
        m(d)
        m(e)
        m(c)
      }
    }
    function x(f) {
      var c = b(a.SUBTOTAL.BULK_BUYING_COUNTRY_CODE_ELEMENT_ID).attr('value'),
        d = b(a.SUBTOTAL.BULK_BUYING_LOCALE_ELEMENT_ID).attr('value'),
        l = b(a.SUBTOTAL.BULK_BUYING_COP_ELEMENT_ID).attr('value')
      return e.utilMethods.formatCurrency(c, d, l, f)
    }
    function u(a) {
      a && a.classList.remove('aok-hidden')
    }
    function m(a) {
      a && a.classList.add('aok-hidden')
    }
    function C(b) {
      ;('string' === typeof b || b instanceof String) &&
        b.split(',').forEach(function (b) {
          b = b.split(':', 2)
          ;(b[0] !== a.EXPERIMENTAL_WEBLABS.DESKTOP && b[0] !== a.EXPERIMENTAL_WEBLABS.MOBILE) ||
            l.triggerWeblab(b[0], b[1])
        })
    }
    function h(a, b, d) {
      return a.querySelector(b + '[id\x3d' + d + ']')
    }
    function v(b) {
      for (var c = '', d = 0; d < b.length; d++)
        (c +=
          a.ELEMENT_TYPE.DIV +
          '[id^\x3d"' +
          b[d] +
          '_"], ' +
          a.ELEMENT_TYPE.DIV +
          '[id\x3d"' +
          b[d] +
          '"]'),
          d < b.length - 1 && (c += ', ')
      return c
    }
    b("#selectQuantity [name\x3d'quantity'], #mobileQuantityDropDown").live('change', function (c) {
      var e = b(this).val()
      c = c.target
      var d = c.closest(a.ELEMENT_TYPE.DIV + '[id^\x3d' + a.BUY_BOX.BUY_BOX_ELEMENT_ID + ']')
      if (d) {
        var g
        g = v(a.BUY_BOX.LIST_OF_BUY_BOXES_COVERED_TOGETHER)
        ;(g = d.querySelectorAll(g)) && 0 !== g.length
          ? ((d = v(a.BUY_BOX.LIST_OF_BUY_BOXES_COVERED_TOGETHER)),
            (c = c.closest(d)) && k(g, c, e))
          : k(Array.of(d), d, e)
      }
    })
    b(
      "#mobileQuantitySelection [name\x3d'cspQuantity'],#mobileQuantitySelection [name\x3d'items[0.base][quantity]']",
    ).live('change', function (c) {
      var e = b(this).val()
      c = c.target
      var d
      d = v([a.BUY_BOX.NEGOTIATED_PRICING_ROW_ELEMENT_ID])
      ;(d = c.closest(d)) ||
        (d = c.closest(a.ELEMENT_TYPE.DIV + '[id^\x3d' + a.BUY_BOX.BUY_BOX_ELEMENT_ID + ']'))
      k(Array.of(d), d, e)
    })
  })
  ;('use strict')
  k.when('dp-latency-marker').register('abs_bulk_buying_constants', function () {
    return {
      TOTAL_UNITS: {
        BULK_BUYING_TOTAL_UNITS_ELEMENT_ID: 'bulk-buying-total-units',
        BULK_BUYING_UNIT_COUNT_ELEMENT_ID: 'bulk-buying-unit-count',
        BULK_BUYING_QUANTITY_ELEMENT_ID: 'bulk-buying-total-units-quantity',
        BULK_BUYING_CSRF_TOKEN_ELEMENT_ID: '#bulk-buying-csrf-token',
        BULK_BUYING_AJAX_ENDPOINT_ELEMENT_ID: '#bulk-buying-ajax-endpoint',
        BULK_BUYING_TOTAL_UNITS_LOCALE_ELEMENT_ID: '#bulk-buying-total-units-locale',
      },
      SUBTOTAL: {
        BULK_BUYING_SUBTOTAL_ELEMENT_ID: 'bulk-buying-subtotal',
        BULK_BUYING_SUBTOTAL_QUANTITY_ELEMENT_ID: 'bulk-buying-subtotal-quantity',
        BULK_BUYING_PRICE_PER_ITEM_ELEMENT_ID: 'bulk-buying-price-per-item',
        BULK_BUYING_COUNTRY_CODE_ELEMENT_ID: '#bulk-buying-subtotal-country-code',
        BULK_BUYING_LOCALE_ELEMENT_ID: '#bulk-buying-subtotal-locale',
        BULK_BUYING_COP_ELEMENT_ID: '#bulk-buying-subtotal-cop',
        BULK_BUYING_SUBTOTAL_SECTION: 'bulk-buying-subtotal-section',
      },
      TOTAL_SAVINGS: {
        BULK_BUYING_TOTAL_SAVINGS_ELEMENT_ID: 'bulk-buying-total-savings',
        BULK_BUYING_SAVINGS_PER_ITEM_ELEMENT_ID: 'bulk-buying-savings-per-item',
        BULK_BUYING_TOTAL_SAVINGS_SECTION: 'bulk-buying-total-savings-section',
      },
      METADATA: {
        AAPI_METADATA_EXPERIMENTS: 'x-api-exp-data',
        AAPI_SLATE_TOKEN_META_NAME: 'meta[name\x3d"encrypted-slate-token"]',
      },
      METRICS: {
        TOTAL_UNIT_AND_SUBTOTAL_TRIGGERING_EXCEPTION:
          'AbDpxAbsTotalUnitandSubtotalTriggeringException',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_INFO_SHOWN: 'AbDpxAbsTotalUnitsAndSubtotalBuyBoxInfoShown',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_EXCEPTION: 'AbDpxAbsTotalUnitsAndSubtotalBuyBoxException',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_SLATE_TOKEN_ABSENT:
          'AbDpxAbsTotalUnitsAndSubtotalBuyBoxSlateTokenAbsent',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_PRESENT:
          'AbDpxAbsTotalUnitsAndSubtotalBuyBoxSlateTokenPresent',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_SUCCESS:
          'AbDpxAbsTotalUnitsAndSubtotalBuyBoxAAPIAJAXSuccess',
        TOTAL_UNITS_AND_SUBTOTAL_BUYBOX_AAPI_AJAX_ERROR:
          'AbDpxAbsTotalUnitsAndSubtotalBuyBoxAAPIAJAXError',
      },
      BUY_BOX: {
        BUY_BOX_ELEMENT_ID: 'buybox',
        NEW_ACCORDION_ROW_ELEMENT_ID: 'newAccordionRow',
        B2BRD_ACCORDION_ROW_ELEMENT_ID: 'b2brdAccordionRow',
        NEGOTIATED_PRICING_ROW_ELEMENT_ID: 'cspAccordionRow',
        LIST_OF_BUY_BOXES_COVERED_TOGETHER: ['newAccordionRow', 'b2brdAccordionRow'],
      },
      EXPERIMENTAL_WEBLABS: {
        DESKTOP: 'AB_DPX_MULTI_UNIT_BUYBOX_776203',
        MOBILE: 'AB_DPX_MULTI_UNIT_BUYBOX_MOBILE_777278',
      },
      ELEMENT_TYPE: { DIV: 'div', SPAN: 'span', INPUT: 'input' },
    }
  })
  ;('use strict')
  k.when('A', 'dp-latency-marker').register('abs-currency-formatter-util', function (c) {
    return {
      utilMethods: {
        isToLocaleStringSupported: function () {
          return 'object' === typeof Intl && c.$.isFunction(Intl.NumberFormat)
        },
        formatAmount: function (b, c) {
          b = parseFloat(b)
          if (isNaN(b)) throw Error('Amount is not a valid number')
          c = 'es-US' === c ? 'en-US' : c
          return this.isToLocaleStringSupported()
            ? b.toLocaleString(c, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : b.toFixed(2)
        },
        formatCurrency: function (b, c, a, e) {
          c = c.replace(/_/g, '-')
          e = this.formatAmount(e, c)
          var k = {
            'US|USD|en-US': '$' + e,
            'US|USD|es-US': 'US$ ' + e,
            'US|GBP|en-US': 'GBP ' + e,
            'US|GBP|es-US': 'GBP ' + e,
          }
          b = b + '|' + a + '|' + c
          return b in k ? k[b] : a + ' ' + e
        },
      },
    }
  })
  ;('use strict')
  k.when('dp-latency-marker').register('abs_bulk_buying_metrics', function () {
    return {
      registerCounter: function (c) {
        e.ue && e.ue.count && e.ue.count(c, (e.ue.count(c) || 0) + 1)
      },
      triggerWeblab: function (c, b) {
        e.ue && e.ue.trigger && e.ue.trigger(c, b)
      },
      logError: function (c, b, g) {
        e.ueLogError &&
          e.ueLogError(g, {
            logLevel: c,
            attribution: 'absTotalUnitandUnitCountBuyBox',
            message: b,
          })
      },
    }
  })
})
