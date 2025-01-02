'use strict'
mix_d(
  'BooksTrustedVoicesCards__accolades-award-card:accolades-award-card__DQXPzhHf',
  'exports tslib @c/scoped-dom @c/aui-carousel @c/logger @c/metrics'.split(' '),
  function (g, d, m, n, p, q) {
    function e(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var r = e(m),
      t = e(n),
      h = e(p),
      k = function (a, c) {
        try {
          q.count(a, c)
        } catch (b) {
          h['default'].log('Failed to emit CSM metric: ' + a, 'WARN'), h['default'].log(b, 'WARN')
        }
      },
      u = function (a, c) {
        return d.__awaiter(void 0, void 0, void 0, function () {
          var b, f
          return d.__generator(this, function (l) {
            switch (l.label) {
              case 0:
                b = r['default'].cardRoot.getElementsByClassName(a)[0]
                if (void 0 === b) return [2]
                f = t['default'].getCarousel(b)
                return [4, f.initialized]
              case 1:
                return l.sent(), k(c + ':rendered-count', 1), [2, f]
            }
          })
        })
      }
    g._operationNames = []
    g.card = function () {
      return d.__awaiter(void 0, void 0, void 0, function () {
        var a
        return d.__generator(this, function (c) {
          switch (c.label) {
            case 0:
              return [
                4,
                u('_accolades-award-card_style_awardCarousel__fNu4g', 'accolades-awards-card'),
              ]
            case 1:
              if ((a = c.sent()))
                a.on('change:pageNumber', function (b) {
                  b.oldPageNumber != b.newPageNumber &&
                    k('accolades-awards-card:button-clicked-count', 1)
                })
              return [2]
          }
        })
      })
    }
  },
)
