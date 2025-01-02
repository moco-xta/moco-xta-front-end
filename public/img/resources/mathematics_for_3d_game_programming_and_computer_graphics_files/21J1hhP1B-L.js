;(function (d) {
  var c = window.AmazonUIPageJS || window.P,
    p = c._namespace || c.attributeErrors,
    a = p ? p('DetailPageAlohaAssets', '') : c
  a.guardFatal
    ? a.guardFatal(d)(a, window)
    : a.execute(function () {
        d(a, window)
      })
})(function (d, c, p) {
  d.when('A').register('aloha-cartapi', function (a) {
    return {
      createAddToCartRequest: function (d, r, u, h, n, l) {
        l = l || 5e3
        n = n || h
        var f = { items: [] }
        return {
          count: function () {
            return f.items.length
          },
          call: function (b) {
            if (0 < f.items.length) {
              var t = {
                  'Content-Type':
                    'application/vnd.com.amazon.api+json; type\x3d"cart.add-items.request/v1"',
                  Accept: 'application/vnd.com.amazon.api+json; type\x3d"cart.add-items/v1"',
                  'Accept-Language': 'en-US',
                  'x-api-csrf-token': r,
                },
                g = a.$('meta[name\x3d"encrypted-slate-token"]')
              g.length && g.attr('content')
                ? (c.ue.count('simpleBundleAjaxSlateTokenPresent', 1),
                  (t['x-amzn-encrypted-slate-token'] = g.attr('content')))
                : c.ue.count('simpleBundleAjaxSlateTokenAbsent', 1)
              a.$.ajax({
                url: b === p ? d + '?ref_\x3ddp_atch_abb_atc' : d + '?ref_\x3d' + b,
                xhrFields: { withCredentials: !0 },
                type: 'POST',
                headers: t,
                data: JSON.stringify(f),
                timeout: l,
                success: u,
                error: h,
                abort: n,
              })
            }
          },
          addItem: function (a, c, g) {
            f.items.push({ asin: a, offerListingId: c, quantity: Number(g || 1) })
          },
        }
      },
    }
  })
  ;('use strict')
  d.when('A', 'a-modal', 'aloha-simplebundle-common', 'ready').execute(function (a, c, d) {
    function m(b) {
      !l &&
        a.onScreen(document.getElementById(h.SIMPLE_BUNDLE), 0) &&
        ((l = !0),
        a.defer(function () {
          b.logNexusImpressionsOnDpx(n.DESKTOP)
        }))
    }
    var h = {
        AUI_PAGE_ROOT: '#a-page',
        SB_ROOT: '.showBundleAsins.simpleBundleFeatureContainer',
        SIMPLE_BUNDLE: 'simpleBundleV2_feature_div',
      },
      n = { DESKTOP: 'desktop' },
      l = !1,
      f = a.debounce(function () {
        if (a.$(h.SB_ROOT).length) {
          var b = d.getSimpleBundlePageState() || {},
            c = b.csrfToken,
            g = b.cartEndpoint,
            f = b.items || []
          b = {
            baseAsin: b.baseAsin,
            marketplaceId: b.marketPlaceId,
            baseItemPrice: a.$('#base-product-price').data('base-product-price'),
            clientType: 'aloha-simplebundle-desktop',
            currencyOfPreferenceSupported: b.currencyOfPreferenceSupported || !1,
          }
          var k = d.createMetricsLogger(b, f, n.DESKTOP)
          m(k)
          if (!l)
            a.on(a.constants.BROWSER_EVENTS.SCROLL, function () {
              m(k)
            })
          k.setupMiniDpImpressionTriggering()
          d.setupAccessoryAddToCart(f, k, g, c)
        }
      }, 200)
    ;(function () {
      a.declarative('show-review-tab', 'click', function (b) {
        a.$(b.$target).closest(h.AUI_PAGE_ROOT).find('.popoverReviewsTab').click()
      })
      a.declarative('focus-image', 'mouseenter', function (a) {
        var b = a.$target,
          c = b.parents(h.AUI_PAGE_ROOT)
        a = a.data
        c.find('#productImageMain-' + a.asin).attr('src', a.imageUrl)
        c.find('.thumbnail-group').removeClass('a-button-selected')
        c.find('#' + b.prop('name')).addClass('a-button-selected')
      })
    })()
    f()
    a.on('a:pageUpdate', f)
    a.on('attach:dss:initialized', function () {
      a.off('a:pageUpdate', f)
      f()
    })
  })
  ;('use strict')
  d.when('A', 'aloha-cartapi').register('aloha-simplebundle-common', function (a, m) {
    var r = /[^\d,\.]/g,
      p = /,/g,
      h = /\./g,
      n = /(^\D+|\D+$)/,
      l = Date.now().toString(10) + Math.random().toString(16).substring(2, 13),
      f = !1
    return {
      createMetricsLogger: function (b, d, f) {
        function m(a, v, c, d, f) {
          var e = q(b.baseItemPrice)
          return {
            baseAsin: b.baseAsin,
            basePrice: e.priceDecimal,
            currencySymbol: e.currencySymbol,
            clientType: b.clientType,
            producerId: 'atch',
            marketplaceId: b.marketplaceId,
            uniqueId: l,
            accessoryAsin: a,
            accessoryPrice: v,
            displayPosition: c,
            featureLayout: d,
            deviceType: f,
          }
        }
        function k(a, b) {
          c.ue && c.ue.event && c.ue.event(a, 'atch', b, { ssd: !0 })
        }
        function g(a) {
          return b.currencyOfPreferenceSupported
            ? {
                priceFormatted: a.ourPrice,
                priceDecimal: parseFloat(a.ourPriceAmount) || null,
                currencySymbol: a.ourPriceSymbol,
              }
            : q(a.ourPrice)
        }
        function q(a) {
          a = a || ''
          var b = a.lastIndexOf(','),
            e = a.lastIndexOf('.')
          if (b > e) {
            e = h
            var c = p
          } else (e = p), (c = h)
          ;(b = a.match(n)) && (b = b[0].trim())
          e = a.replace(r, '').replace(e, '').replace(c, '.')
          e = parseFloat(e)
          return { priceFormatted: a, currencySymbol: b, priceDecimal: e }
        }
        a.defer(function () {
          c.ue && c.ue.count && c.ue.count('aloha-simplebundle-view', 1)
        })
        return {
          logExpandedLink: function () {
            c.ue && c.ue.count && c.ue.count('aloha-simplebundle-buybox-expanded-link', 1)
          },
          logNexusImpressionsOnDpx: function () {
            for (var a = 0; a < d.length; a++) {
              var b = d[a]
              b = m(b.asin, g(b).priceDecimal, a, 'dpx', f)
              k(b, 'attach.ABBImpression.7')
            }
          },
          setupMiniDpImpressionTriggering: function () {
            a.$('.simpleBundle-popover-title')
              .unbind('click')
              .bind('click', function (a) {
                a = parseInt(a.currentTarget.className.split('popover-simpleBundle-link-')[1].at(0))
                var b = d[a]
                a = m(b.asin, g(b).priceDecimal, a, 'minidp', f)
                k(a, 'attach.ABBImpression.7')
              })
          },
          logNexusAddAccessoryToCart: function (a, b, c, q, d) {
            var e = m()
            e.accessoryAsin = a
            e.accessoryPrice = g(b).priceDecimal
            e.displayPosition = c
            e.featureLayout = q
            e.deviceType = d
            k(e, 'attach.ABBAddAccessoryToCart.4')
          },
        }
      },
      getSimpleBundlePageState: function () {
        var b = a.$('.simpleBundleJavascriptParameters').find('script').html()
        return a.parseJSON(b)
      },
      setupAccessoryAddToCart: function (b, h, g, l) {
        function k(b, e, f, k, p, r) {
          var q = m.createAddToCartRequest(
            g,
            l,
            function (a) {
              n(b)
              h.logNexusAddAccessoryToCart(b, e, f, p, r)
              d.when('EWC').execute('abb-everywhere-cart', function (a) {
                a.refresh()
              })
              var c = a.entity.count.entity.items
              d.when('nav.setCartCount').execute('abb-nav-cart', function (a) {
                a(c)
              })
              d.when('mash').execute('abb-mash', function (a) {
                a.cart.didUpdate({ newCartQuantity: c })
              })
            },
            function () {
              a.$('#abb_add_accessory_spinner_' + b).addClass('aok-hidden')
              a.$('#minidp_add_accessory_spinner_' + b).addClass('aok-hidden')
              a.$('#abb_add_accessory_error_' + b).removeClass('aok-hidden')
              a.$('#minidp_add_accessory_error_' + b).removeClass('aok-hidden')
              c.ueLogError &&
                c.ueLogError(
                  {
                    message:
                      '[There was an error while adding items to the cart using the universal add to cart api.]',
                  },
                  { logLevel: 'ERROR', attribution: 'SimpleBundle' },
                )
            },
          )
          q.addItem(b, e.offerListingId)
          q.call(k)
        }
        function n(b) {
          a.$('#abb_add_accessory_spinner_' + b).addClass('aok-hidden')
          a.$('#minidp_add_accessory_spinner_' + b).addClass('aok-hidden')
          a.$('#abb_add_accessory_alert_' + b).removeClass('aok-hidden')
          a.$('#minidp_add_accessory_alert_' + b).removeClass('aok-hidden')
        }
        f ||
          ((f = !0),
          a.$('.simpleBundleSection').each(function (b, c) {
            a.$(c).closest('#simpleBundleV2_feature_div').length ||
              a.$(c).closest('#simpleBundle_feature_div').length ||
              c.remove()
          }),
          a.declarative('abb-accessory-add', 'click', function (c) {
            var e = c.data
            c = e.asin
            var d
            a: {
              for (d = 0; d < b.length; d++) if (b[d].asin === c) break a
              d = void 0
            }
            var f = b[d]
            e = e.atcRefmarker
            var m = e.includes('base') ? 'dpx' : 'minidp',
              g = e.includes('desktop') ? 'desktop' : 'mobile'
            a.$('#abb_accessory_add_button_' + c).addClass('aok-hidden')
            a.$('#minidp_accessory_add_button_' + c).addClass('aok-hidden')
            a.$('#abb_add_accessory_spinner_' + c).removeClass('aok-hidden')
            a.$('#minidp_add_accessory_spinner_' + c).removeClass('aok-hidden')
            k(c, f, d, e, m, g)
          }))
      },
    }
  })
  ;('use strict')
  d.when('ready').register('aloha-buy-now-integration', function () {
    var a = {}
    d.when('turbo-checkout-buy-now-integration').execute(function (c) {
      a = c
    })
    return {
      isBuyNow: function (c) {
        return 'function' === typeof a.isBuyNow && a.isBuyNow(c)
      },
      checkoutWith: function (c, d) {
        return a.checkoutWith(c, d)
      },
    }
  })
})
