'use strict'
mix_d(
  'KnfdgDetailsPageCards__popular-highlight-btf:popular-highlight-btf__vY0TKL7b',
  ['exports', 'tslib', '@p/A', '@c/scoped-dom', '@c/metrics'],
  function (g, h, p, q, k) {
    function l(b) {
      return b && 'object' === typeof b && 'default' in b ? b : { default: b }
    }
    var r = l(p),
      t = l(q),
      f = function (b) {
        return (b = t['default'].cardRoot.getElementsByClassName(b)) && 0 !== b.length ? b[0] : null
      },
      c = function (b, d, e) {
        return 0 < d.length ? d : f(b) ? e : d
      }
    g._operationNames = []
    g.card = function () {
      return h.__awaiter(void 0, void 0, void 0, function () {
        var b, d, e, a, m, n
        return h.__generator(this, function (u) {
          b = f('_cG9wd_ph-btf-main-title_1icJ4')
          if (!b) return [2]
          e = (d = r['default'].capabilities.mobile) ? 'Mobile' : 'Desktop'
          a = ''
          d
            ? ((a = c('_cG9wd_btf-mobile-pq0-top-items_3oxUa', a, 'PQ0')),
              (a = c('_cG9wd_btf-mobile-pq1-top-items_7bXC0', a, 'PQ1')),
              (a = c('_cG9wd_btf-mobile-pq2-top-items_jg7r9', a, 'PQ2')),
              (a = c('_cG9wd_btf-mobile-pq3-top-items_BITIF', a, 'PQ3')),
              (a = c('_cG9wd_btf-mobile-pq4-top-items_1JtU7', a, 'PQ4')),
              (a = c('_cG9wd_btf-mobile-pq5-top-items_2wyHO', a, 'PQ5')),
              (a = c('_cG9wd_btf-mobile-pq6-top-items_3eJN-', a, 'PQ6')))
            : ((a = c('_cG9wd_btf-pq0-top-items_2Ot2n', a, 'PQ0')),
              (a = c('_cG9wd_btf-pq1-top-items_vtlsY', a, 'PQ1')),
              (a = c('_cG9wd_btf-pq2-top-items_H5hQm', a, 'PQ2')),
              (a = c('_cG9wd_btf-pq3-top-items_2oJDd', a, 'PQ3')),
              (a = c('_cG9wd_btf-pq4-top-items_1_QCi', a, 'PQ4')),
              (a = c('_cG9wd_btf-pq5-top-items_C4dHm', a, 'PQ5')),
              (a = c('_cG9wd_btf-pq6-top-items_3iftL', a, 'PQ6')))
          m = 'knfdg:phl:cards:' + e + ':' + a + 'CardRendered'
          k.count(m, 1)
          ;(n = f('_cG9wd_why-highlights-link_1S9qY')) &&
            n.addEventListener('mouseover', function () {
              k.count('knfdg:phl:cards:' + e + ':' + a + 'WhyHighlightLinkMouseOver', 1)
            })
          return [2]
        })
      })
    }
  },
)
