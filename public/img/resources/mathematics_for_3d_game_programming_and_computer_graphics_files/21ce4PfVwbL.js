;(function (a) {
  var g = window.AmazonUIPageJS || window.P,
    k = g._namespace || g.attributeErrors,
    f = k ? k('AXFClientPluginAsset', '') : g
  f.guardFatal
    ? f.guardFatal(a)(f, window)
    : f.execute(function () {
        a(f, window)
      })
})(function (a, g, k) {
  a.when('A', 'ready').register('rufusContextualActionsAUI', function (g) {
    function f() {
      a.when('mash', 'A').execute(function (a, g) {
        function f(b) {
          a.dispatchEvent({
            type: 'ax:showActionBar',
            detail: { configId: 'rufus', isAvailable: b },
          })
        }
        function l() {
          a.dispatchEvent({ type: 'ax:rufusDetailPageListeners:ready' })
        }
        function q() {
          a.addEventListener('rufus:dpx:requestIsAddToCartAvailable', b)
          a.addEventListener('ax:dpx:requestIsAddToCartAvailable', b)
        }
        function c() {
          a.removeEventListener('rufus:dpx:requestIsAddToCartAvailable', b)
          a.removeEventListener('ax:dpx:requestIsAddToCartAvailable', b)
        }
        function b() {
          if (0 >= g.$('#buybox').length) f(!1)
          else {
            var b = document.getElementById('add-to-cart-button'),
              c = !1
            b && (c = null != b.offsetParent)
            f(c)
          }
        }
        a &&
          (c(),
          q(),
          l(),
          a.addEventListener('appPause', function () {
            c()
          }),
          a.addEventListener('appResume', function () {
            q()
            l()
          }))
        g.on('dpx:add-to-cart:success', function (b) {
          a.dispatchEvent({ type: 'rufus:dpx:addToCart:success', detail: {} })
        })
      })
    }
    a.when('ContextualActions').execute(function (a) {
      g.on('axf:mashExtHandOffCtxIos', function (a) {
        f()
      })
      g.on('axf:mashExtHandOffCtxAndroid', function (a) {
        f()
      })
    })
    return {}
  })
  a.when('A', 'ready').register('ContextualActionsAUI', function (f) {
    function k(c) {
      g.ue && 'function' === typeof g.ue.count && g.ue.count(c, 1)
    }
    function t() {
      a.when('mash', 'A').execute(function (c, b) {
        b.on('a:pageUpdate', function (a) {
          var g = b.$
          a = g('#corePriceDisplay_mobile_feature_div').attr('data-csa-c-asin')
          var f = !1
          ;(g = g('.a-price-range span')) && (f = 2 < g.length)
          c.dispatchEvent({
            type: 'appx:axf:pageUpdate',
            detail: { asin: a, hasPriceRangeLabel: f },
          })
        })
      })
    }
    function l() {
      a.when('mash', 'A').execute(function (c, b) {
        b.on('rcx:huc:template:inserted', function (b) {
          c.dispatchEvent({ type: 'appx:axf:miniBuyBoxDisplayed' })
        })
      })
      a.when('A', 'mash').execute('adjustMiniBuyBox', function (c, b) {
        var a = c.$('#mobile_miniatf'),
          f = a && a.hasClass('is-hidden')
        c.$(g).scroll(function () {
          var c = a && a.hasClass('is-hidden')
          c !== f &&
            (b.dispatchEvent({
              type: 'appx:axf:floatingButtonVisilibityChange',
              detail: { visibility: !c },
            }),
            (f = c))
        })
      })
      a.when('mash', 'A', 'btf-sub-nav-configs').execute(function (c, b) {
        document.getElementById('btf-sub-nav-tab') &&
          c.dispatchEvent({ type: 'appx:axf:blacklistBTTFromPage' })
      })
    }
    function u() {
      a.when('mash', 'A').execute(function (c, b) {
        b.on('ssf:event:caf-share-complete-success', function () {
          c.dispatchEvent({ type: 'axf:consultAFriend:shareCompletedSuccessfully' })
        })
      })
      a.when('mash', 'A').execute(function (c, b) {
        b.declarative('ssf-share-icon', 'click', function () {
          c.dispatchEvent({ type: 'axf:consultAFriend:shareButtonTapped' })
        })
      })
    }
    function y() {
      a.when('mash', 'A').execute(function (c, b) {
        var a = b.$(g),
          f = !1,
          k = '',
          p = b.$('#dp-pr-top-scrollable'),
          l = '',
          v = '',
          w = '.sponsored-products-detail-mobile',
          d = function (c) {
            c = b.$(
              '#newPitchPriceWrapper_feature_div, #unifiedPrice_feature_div, #buybox, #mobile_buybox_feature_div, #apex_mobile_feature_div, #apex_desktop, #almBuyBox_feature_div',
            )
            var a = b.$('#btf-sub-nav-tab')
            0 < c.length &&
              'visible' === document.visibilityState &&
              ((a = 0 < a.length ? a.height() : 0),
              b
                .$([document.documentElement, document.body])
                .animate({ scrollTop: c.eq(0).offset().top - a }, 200))
          },
          h = function (a) {
            var d = b.$(g),
              e = b.$('#' + k),
              m = b.$('#dp-pr-top-scrollable'),
              n = !1,
              h = !0,
              r = ''
            if (!(0 >= e.length)) {
              var p = document.getElementById(l),
                q = document.getElementById('buy-now-button'),
                x = b.$(v),
                t = b.$(w),
                u = 0 < t.length,
                z = 0 < x.length
              if (
                (0 < d.length || 0 < m.length) &&
                0 < e.length &&
                ((n = u ? t.eq(0) : z ? x : null),
                n
                  ? ((r = n.attr('cel_widget_id') || n.attr('id')),
                    (e = n.offset().top),
                    0 < m.length
                      ? ((d = m.scrollTop()), m.height(), (e = e + 0 > d))
                      : ((m = d.scrollTop()), d.height(), (e = e + 0 > m)),
                    (n = e))
                  : (0 < m.length
                      ? ((h = m.scrollTop()),
                        m.height(),
                        (r = e.offset().top),
                        (e = e.height()),
                        (h = r + e > h))
                      : ((h = d.scrollTop()),
                        d.height(),
                        (r = e.offset().top),
                        (e = e.height()),
                        (h = r + e > h)),
                    (n = h),
                    (r = k),
                    (h = !1)),
                f === n && !a)
              )
                return
              f = n
              e = a = !1
              p && (a = null != p.offsetParent)
              q && (e = null != q.offsetParent)
              c.dispatchEvent({
                type: 'appx:axf:buybox.availability',
                detail: {
                  isBuyboxOnScreen: n,
                  isCartButtonActive: a,
                  isBuyNowButtonActive: e,
                  isCustomAttribute: h,
                  widgetID: r,
                },
              })
            }
          }
        c &&
          (c.addEventListener('afx.mash.onclick.jumpToBuybox', d),
          c.addEventListener('appPause', function (b) {
            c.removeEventListener('afx.mash.onclick.jumpToBuybox', d)
          }),
          c.addEventListener('appResume', function (b) {
            c.addEventListener('afx.mash.onclick.jumpToBuybox', d)
          }),
          (k = 'buybox'),
          (l = 'add-to-cart-button'),
          (v = '[cel_widget_id\x3d"p13n-mobile-sims-fbt_DPSims_0"]'),
          (w = '.sponsored-products-detail-mobile'),
          a.scroll(function () {
            h(!1)
          }),
          0 < p.length &&
            p.scroll(function () {
              h(!1)
            }))
        b.on('dpx:add-to-cart:success', function (b) {
          c.dispatchEvent({ type: 'appfirst:dpx:add-to-cart:success', detail: {} })
        })
        b.on('dpx:add-to-cart:error', function (b) {
          c.dispatchEvent({ type: 'appfirst:dpx:add-to-cart:error', detail: {} })
        })
      })
    }
    function q() {
      a.when('mash', 'A').execute(function (a, b) {
        var c = b.$(g),
          f = !1,
          k = b.$('#dp-pr-top-scrollable'),
          p = function (a) {
            a = b.$(
              '#newPitchPriceWrapper_feature_div, #unifiedPrice_feature_div, #buybox, #mobile_buybox_feature_div, #apex_mobile_feature_div, #apex_desktop, #almBuyBox_feature_div',
            )
            var c = b.$('#btf-sub-nav-tab')
            0 < a.length &&
              'visible' === document.visibilityState &&
              ((c = 0 < c.length ? c.height() : 0),
              b
                .$([document.documentElement, document.body])
                .animate({ scrollTop: a.eq(0).offset().top - c }, 200))
          },
          l = function (c) {
            var k = b.$(g),
              d = b.$('#buybox'),
              h = b.$('#dp-pr-top-scrollable'),
              m = !1,
              l = !0,
              e = ''
            if (!(0 >= d.length)) {
              var p = document.getElementById('add-to-cart-button'),
                n = document.getElementById('buy-now-button'),
                q = b.$('[cel_widget_id\x3d"p13n-mobile-sims-fbt_DPSims_0"]'),
                r = b.$('.sponsored-products-detail-mobile'),
                v = b.$('#aw-udpv3-customer-reviews_feature_div'),
                t = 0 < r.length,
                u = 0 < q.length
              if (
                (0 < k.length || 0 < h.length) &&
                0 < d.length &&
                ((e = 0 < v.length ? v : t ? r.eq(0) : u ? q : null),
                (m = e)
                  ? ((e = m.attr('cel_widget_id') || m.attr('id')),
                    (d = m.offset().top),
                    0 < h.length
                      ? ((k = h.scrollTop()), h.height(), (d = d + -20 > k))
                      : ((h = k.scrollTop()), k.height(), (d = d + -20 > h)),
                    (m = d))
                  : (0 < h.length
                      ? ((l = h.scrollTop()),
                        h.height(),
                        (e = d.offset().top),
                        (d = d.height()),
                        (l = e + d > l))
                      : ((l = k.scrollTop()),
                        k.height(),
                        (e = d.offset().top),
                        (d = d.height()),
                        (l = e + d > l)),
                    (m = l),
                    (e = 'buybox'),
                    (l = !1)),
                f === m && !c)
              )
                return
              f = m
              d = c = !1
              p && (c = null != p.offsetParent)
              n && (d = null != n.offsetParent)
              a.dispatchEvent({
                type: 'appx:axf:buybox.availability',
                detail: {
                  isBuyboxOnScreen: m,
                  isCartButtonActive: c,
                  isBuyNowButtonActive: d,
                  isCustomAttribute: l,
                  widgetID: e,
                },
              })
            }
          }
        a &&
          (a.addEventListener('afx.mash.onclick.jumpToBuybox', p),
          a.addEventListener('appPause', function (b) {
            a.removeEventListener('afx.mash.onclick.jumpToBuybox', p)
          }),
          a.addEventListener('appResume', function (b) {
            a.addEventListener('afx.mash.onclick.jumpToBuybox', p)
          }),
          c.scroll(function () {
            l(!1)
          }),
          0 < k.length &&
            k.scroll(function () {
              l(!1)
            }))
        b.on('dpx:add-to-cart:success', function (b) {
          a.dispatchEvent({ type: 'appfirst:dpx:add-to-cart:success', detail: {} })
        })
        b.on('dpx:add-to-cart:error', function (b) {
          a.dispatchEvent({ type: 'appfirst:dpx:add-to-cart:error', detail: {} })
        })
      })
    }
    a.when('ContextualActions').execute(function (a) {
      f.on('axf:mashExtHandOffCtxIos', function (a) {
        t()
        l()
        u()
        y()
        k('axf:mashExtHf:ctx:ios:end')
      })
      f.on('axf:mashExtHandOffCtxAndroid', function (a) {
        t()
        l()
        u()
        q()
        k('axf:mashExtHf:ctx:android:end')
      })
    })
    return {}
  })
})
