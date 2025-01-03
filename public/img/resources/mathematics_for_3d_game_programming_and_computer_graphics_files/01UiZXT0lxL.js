;(function (b) {
  var g = window.AmazonUIPageJS || window.P,
    h = g._namespace || g.attributeErrors,
    d = h ? h('DramAssets', '') : g
  d.guardFatal
    ? d.guardFatal(b)(d, window)
    : d.execute(function () {
        b(d, window)
      })
})(function (b, g, h) {
  b.when('jQuery', 'A').execute('dram-lazy-load', function (d, c) {
    var m = (g.ue && g.ue.count) || function () {},
      l = function (a) {
        m(a, (m(a) || 0) + 1)
      },
      p = function (a, e) {
        if (!a.hasAttribute('lazy-load-status')) {
          e = null == e ? 'None' : e
          a.setAttribute('lazy-load-status', 'initiated')
          a.querySelector('.lazy-load-spinner').classList.add('lazy-load-spinner-animation')
          var n = a.querySelector('.json-content').innerText.trim()
          c.post('/dram/renderLazyLoaded', {
            params: n,
            accepts: 'application/json',
            contentType: 'application/json',
            paramsFormat: 'json',
            success: function (f) {
              var b = ''
              f && f.cards && 0 < f.cards.length && f.cards[0].content && (b = f.cards[0].content)
              d(a.querySelector('.widget-html-container')).html(b)
              c.trigger('a:pageUpdate')
              c.loadDynamicImage(a.querySelectorAll('.widget-html-container img.a-dynamic-image'))
              a.setAttribute('lazy-load-status', 'loaded')
              l('dram:lazy-loader:' + e + ':success')
            },
            error: function (c) {
              d(a.querySelector('.widget-html-container')).html('')
              a.setAttribute('lazy-load-status', 'failed')
              0 === c.readyState
                ? (l('dram:lazy-loader:' + e + ':warn'),
                  b.log(
                    'Warning while processing lazy loading due to ' + c.responseText,
                    'WARN',
                    'LazyLoading',
                  ))
                : (l('dram:lazy-loader:' + e + ':error'),
                  b.log(
                    'Error while processing lazy loading due to ' + c.responseText,
                    'ERROR',
                    'LazyLoading',
                  ))
            },
          })
        }
      },
      k = function (a, e, b) {
        c.onScreen(a, e) && p(a, b)
      }
    c.on('dram:register-lazy-load-widget', function (a, b, d, f) {
      var e = document.querySelector(a)
      c.on(c.constants.BROWSER_EVENTS.SCROLL, function () {
        k(e, b, d)
      })
      c.on(c.constants.BROWSER_EVENTS.RESIZE, function () {
        k(e, b, d)
      })
      c.on(c.constants.BROWSER_EVENTS.ORIENTATION_CHANGE, function () {
        k(e, b, d)
      })
      f && k(e, b, d)
    })
    b.now('dram-lazy-load-widget').execute('dram-initalize-lazy-load', function (a) {
      a === h && b.declare('dram-lazy-load-widget', { lazyLoadInitiated: !0 })
    })
  })
})
