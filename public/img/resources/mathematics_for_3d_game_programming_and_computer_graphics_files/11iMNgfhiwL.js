'use strict'
mix_d(
  'CustomerReviewsSummarizationCards__cr-ratings-histogram:cr-ratings-histogram__AiLYd_Jo',
  'require exports tslib @c/metrics @c/remote-operations @c/scoped-dom @p/A'.split(' '),
  function (B, m, h, u, C, D, E) {
    function v(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    function F(a) {
      if (a && a.__esModule) return a
      var b = Object.create(null)
      a &&
        Object.keys(a).forEach(function (e) {
          if ('default' !== e) {
            var c = Object.getOwnPropertyDescriptor(a, e)
            Object.defineProperty(
              b,
              e,
              c.get
                ? c
                : {
                    enumerable: !0,
                    get: function () {
                      return a[e]
                    },
                  },
            )
          }
        })
      b['default'] = a
      return b
    }
    var G = v(C),
      H = v(D),
      x = v(E),
      k = function (a, b) {
        return void 0 == a
          ? b
          : 'false' == a.toLowerCase()
            ? !1
            : 'true' == a.toLowerCase()
              ? !0
              : b
      },
      y = function (a, b) {
        var e = a.dataset.arpLinkRefTag || '',
          c = a.dataset.celWidgetName || '',
          f = k(a.dataset.isMobile, !1),
          p = k(a.dataset.isCnMarketplace, !1),
          q = a.dataset.refTag || '',
          r = a.dataset.reviewsRatingsHelpPageUrl || '',
          t = k(a.dataset.showDivider, !0)
        var d = (d = a.dataset.starRatingSize)
          ? 'small' == d.toLowerCase()
            ? 'Small'
            : 'mini' == d.toLowerCase()
              ? 'Mini'
              : 'medium' == d.toLowerCase()
                ? 'Medium'
                : 'Unspecified'
          : 'Unspecified'
        var g = (g = a.dataset.starType)
          ? 'brand' == g.toLowerCase()
            ? 'Brand'
            : 'Review'
          : 'Review'
        return {
          arpLinkRefTag: e,
          asin: b,
          celWidgetName: c,
          isMobile: f,
          isCNMarketplace: p,
          refTag: q,
          reviewsRatingsHelpPageUrl: r,
          showDivider: t,
          starRatingSize: d,
          starType: g,
          updateReviewsRatingsExplanation: k(a.dataset.updateReviewsRatingsExplanation, !1),
          shouldOpenHelpPageInNewTab: k(a.dataset.shouldOpenHelpPageInNewTab, !1),
          isLynxMessageMarketplace: k(a.dataset.isLynxMessageMarketplace, !1),
        }
      },
      w,
      n,
      z = function (a) {
        return a && 'AjaxError' === a.type
      },
      A = function (a, b) {
        var e = x['default'].debounce(function () {
          return h.__awaiter(void 0, void 0, void 0, function () {
            var c, f, p, q, r, t, d, g
            return h.__generator(this, function (l) {
              switch (l.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (I, J) {
                      B(
                        ['@p/customer-reviews-twister-update'],
                        function (K) {
                          I(F(K))
                        },
                        J,
                      )
                    }),
                  ]
                case 1:
                  c = l.sent()
                  f = c.default.getDisplayedASIN()
                  p = w || ''
                  if (!f || f === p) return [3, 5]
                  l.label = 2
                case 2:
                  return (
                    l.trys.push([2, 4, , 5]),
                    (q = y(b, f)),
                    (r = G['default'].setup()),
                    [4, r.getValueHTML(q)]
                  )
                case 3:
                  return (
                    (t = l.sent()),
                    (a.innerHTML = t.outerHTML),
                    (w = f),
                    (n = (null !== n && void 0 !== n ? n : 0) + 1),
                    u.count('cr-ratings-histogram:dp:twister-page-update', n),
                    [3, 5]
                  )
                case 4:
                  d = l.sent()
                  if (z(d) && ((g = d.statusCode), 403 === g || 404 === g))
                    return (
                      u.count('cr-ratings-histogram:dp:twister-page-update:force-page-refresh', 1),
                      location.reload(),
                      [2]
                    )
                  u.count('cr-ratings-histogram:dp:twister-page-update:error', 1)
                  throw d
                case 5:
                  return [2]
              }
            })
          })
        }, 200)
        x['default'].on('a:pageUpdate', function () {
          return h.__awaiter(void 0, void 0, void 0, function () {
            return h.__generator(this, function (c) {
              switch (c.label) {
                case 0:
                  return [4, e()]
                case 1:
                  return c.sent(), [2]
              }
            })
          })
        })
      }
    m._operationNames = ['getValueHTML']
    m.attachTwisterUpdateEventListener = A
    m.card = function () {
      return h.__awaiter(void 0, void 0, void 0, function () {
        var a, b
        return h.__generator(this, function (e) {
          a = H['default'].cardRoot.firstChild
          if ((b = null === a || void 0 === a ? void 0 : a.firstChild))
            (w = b.dataset.asin || ''), A(a, b)
          return [2]
        })
      })
    }
    m.getParamList = y
    m.isAjaxError = z
  },
)
