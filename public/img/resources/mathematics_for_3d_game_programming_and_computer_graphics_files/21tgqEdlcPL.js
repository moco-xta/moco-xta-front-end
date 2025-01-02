;(function (d) {
  var e = window.AmazonUIPageJS || window.P,
    n = e._namespace || e.attributeErrors,
    b = n ? n('DetailPageProductSpecDepthAsset', '') : e
  b.guardFatal
    ? b.guardFatal(d)(b, window)
    : b.execute(function () {
        d(b, window)
      })
})(function (d, e, n) {
  d.when('A', 'ready', 'a-toggle-button', 'voyager-desktop-metric').register(
    'voyager-expand-collapse-module',
    function (b, c, a, k) {
      function l() {
        return f('#productDetails_expanderSectionTables').find('.a-expander-header')
      }
      function e(c, b) {
        c = a(c)
        b ? c.enable() : c.disable()
      }
      function h() {
        var a = f('#productDetails_expanderSectionTables').find('.a-expander-content')
        a &&
          a.length &&
          (a = a.find('.prodDetSectionEntry')) &&
          15 > a.length &&
          (l().each(function () {
            'true' !== this.getAttribute('data-expanded') && f(this).click()
          }),
          e('#voyager-expand-all-btn', !1),
          e('#voyager-collapse-all-btn', !0))
      }
      c = b.state('voyager-desktop-context')
      var g = 'unknown',
        m = 'unknown'
      c && ((g = c['voyager-desktop-treatment']), (m = c.product_type))
      var f = b.$
      h()
      b.on('PageRefresh:ATF', h)
      b.declarative('voyager-expand-all-handler', 'click', function () {
        var a = l()
        a &&
          a.length &&
          (k.incrementCounter(k.metricName.expandAllButtonClicked(m, g)),
          k.incrementCounter(k.metricName.expandAllButtonClicked('all', 'all')),
          a.each(function () {
            'true' !== this.getAttribute('aria-expanded') && f(this).click()
          }))
      })
      b.declarative('voyager-collapse-all-handler', 'click', function () {
        var a = l()
        a &&
          a.length &&
          (k.incrementCounter(k.metricName.collapseAllButtonClicked(m, g)),
          k.incrementCounter(k.metricName.collapseAllButtonClicked('all', 'all')),
          a.each(function () {
            'true' === this.getAttribute('aria-expanded') && f(this).click()
          }))
      })
      b.declarative('voyager-expander-heading-toggle', 'click', function () {
        var a = !1,
          c = !1
        l().each(function () {
          'true' === this.getAttribute('aria-expanded') ? (c = !0) : (a = !0)
        })
        e('#voyager-expand-all-btn', a)
        e('#voyager-collapse-all-btn', c)
      })
    },
  )
  ;('use strict')
  d.when('A', 'ready').register('voyager-pd-desktop-jump-link', function (b) {
    function c() {
      var a = b.$('#seeMoreDetailsLink'),
        c = b.$('#productDetails_expanderSectionTables')
      a.length && c.length && a.parent().removeClass('aok-hidden')
    }
    c()
    b.on('a:pageUpdate', c)
  })
  ;('use strict')
  ;('use strict')
  ;('use strict')
  ;('use strict')
  ;('use strict')
  ;('use strict')
  ;('use strict')
  ;('use strict')
  d.when('A', 'ready').register('voyager-desktop-metric', function (b) {
    b = {}
    b = {
      impression: function (c, a) {
        return 'voyager:desktop:' + c + ':' + a + ':impression'
      },
      sectionExpanderClicked: function (c, a, b, e) {
        return 'voyager:desktop:' + c + ':' + a + ':' + b + ':' + e + ':clicked'
      },
      sectionExpanderOverallClicked: function (c, a) {
        return 'voyager:desktop:' + c + ':' + a + ':sectionExpander:overall:clicked'
      },
      expandAllButtonClicked: function (c, a) {
        return 'voyager:desktop:' + c + ':' + a + ':expandAll:clicked'
      },
      collapseAllButtonClicked: function (c, a) {
        return 'voyager:desktop:' + c + ':' + a + ':collapseAll:clicked'
      },
      sectionExpanderContentDwellTime: function (c, a, b, e) {
        return 'voyager:desktop:' + c + ':' + a + ':' + b + ':' + e + ':dwellTime'
      },
      sectionExpanderContentOverallDwellTime: function (c, a) {
        return 'voyager:desktop:' + c + ':' + a + ':sectionExpander:overall:dwellTime'
      },
    }
    return {
      incrementCounter: function (c) {
        e.ue && e.ue.count && e.ue.count(c, (e.ue.count(c) || 0) + 1)
      },
      setCounter: function (c, a) {
        e.ue && e.ue.count && e.ue.count(c, a)
      },
      metricName: b,
    }
  })
  ;('use strict')
  d.when('A', 'jQuery', 'voyager-desktop-metric').execute(
    'voyager-desktop-sectionExpander-listener',
    function (b, c, a) {
      function e() {
        if (!q) {
          var c = document.getElementById('productDetails_expanderSectionTables')
          b.onScreen(c, 0) &&
            (a.setCounter(a.metricName.impression(g, h), 1),
            a.setCounter(a.metricName.impression('all', 'all'), 1),
            (q = !0))
        }
      }
      function l() {
        var d = document.getElementById('productDetails_expanderSectionTables')
        d && b.onScreen(d, 0) && !document.hidden
          ? (e(),
            f &&
              (function () {
                var e = Date.now() - f
                p += e
                var d = c('#productDetails_expanderSectionTables').find('.a-expander-header')
                d &&
                  d.length &&
                  d.each(function () {
                    if (b.onScreen(this, 0) && 'true' === this.getAttribute('aria-expanded')) {
                      var d = JSON.parse(
                          c(this).parent().attr('data-voyager-expander-heading-toggle'),
                        ),
                        f = d.columnName + d.sectionIndex
                      m.set(f, (m.get(f) || 0) + e)
                      a.setCounter(
                        a.metricName.sectionExpanderContentDwellTime(
                          g,
                          h,
                          d.columnName,
                          d.sectionIndex + 1,
                        ),
                        m.get(f),
                      )
                      a.setCounter(
                        a.metricName.sectionExpanderContentDwellTime(
                          'all',
                          'all',
                          d.columnName,
                          d.sectionIndex + 1,
                        ),
                        m.get(f),
                      )
                    }
                  })
                a.setCounter(a.metricName.sectionExpanderContentOverallDwellTime(g, h), p)
                a.setCounter(a.metricName.sectionExpanderContentOverallDwellTime('all', 'all'), p)
              })(),
            (f = Date.now()))
          : (f = n)
      }
      var d = b.state('voyager-desktop-context'),
        h = 'unknown',
        g = 'unknown'
      d && ((h = d['voyager-desktop-treatment']), (g = d.product_type))
      var m = new Map(),
        f = void 0,
        p = 0,
        q = !1
      ;(function () {
        document.addEventListener('visibilitychange', function () {
          document.hidden && (f = n)
        })
        l()
        b.interval(l, 1e3)
      })()
      b.declarative('voyager-expander-heading-toggle', 'click', function (b) {
        if (b && b.data) {
          l()
          var d = b.data.sectionIndex
          b = b.data.columnName
          'true' ===
            c('#productDetails_expanderTables_' + b)
              .find('.a-expander-header')
              .eq(d)
              .attr('aria-expanded') &&
            (a.incrementCounter(a.metricName.sectionExpanderClicked(g, h, b, d + 1)),
            a.incrementCounter(a.metricName.sectionExpanderClicked('all', 'all', b, d + 1)),
            a.incrementCounter(a.metricName.sectionExpanderOverallClicked(g, h)),
            a.incrementCounter(a.metricName.sectionExpanderOverallClicked('all', 'all')))
        }
      })
    },
  )
  ;('use strict')
  ;('use strict')
})
