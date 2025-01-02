;(function (e) {
  var f = window.AmazonUIPageJS || window.P,
    g = f._namespace || f.attributeErrors,
    a = g ? g('DetailPageMediaMatrixGridAsset', '') : f
  a.guardFatal
    ? a.guardFatal(e)(a, window)
    : a.execute(function () {
        e(a, window)
      })
})(function (e, f, g) {
  e.register('metrics-utils', function () {
    var a = function () {
      var a = /ipad|tablet/i.test(navigator.userAgent)
      return /mobile/i.test(navigator.userAgent) && !a ? 'mobile' : a ? 'tablet' : 'desktop'
    }
    return {
      getSurfaceType: a,
      incrementMetric: function (d) {
        if (d) {
          var b = f.ue
          if (b && b.count && b.tag) {
            var c = b.count(d) || 0
            b.count(d, c + 1)
            b.tag(a())
          }
        }
      },
    }
  })
  e.when('A', 'metrics-utils').execute(function (a, d) {
    function b(a) {
      a = a.data.modal
      a !== g &&
        null !== a &&
        a.popover !== g &&
        null !== a.popover &&
        (d.incrementMetric('hideSeeAllFormatsPopover'), a.popover.hide())
    }
    var c = a.$
    a.on('a:popover:beforeShow:loadAllFormatsEditions', function (a) {
      d.incrementMetric('showSeeAllFormatsPopover')
      c('div.safPopover td.dp-new-col \x3e span').click({ modal: a }, b)
      c('div.safPopover td.dp-used-col \x3e span').click({ modal: a }, b)
    })
  })
  e.when('A', 'a-popover').execute(function (a, d) {
    a.declarative('show-all-offers-display', 'click', function () {
      var a = d.get('mediaMatrixGridAODPopover')
      null != a && a.hide()
    })
  })
  e.execute(function () {
    var a = document.querySelector('#mediaMatrixGridAODPopover')
    if (null !== a) {
      var a = parseInt(f.getComputedStyle(a).paddingRight, 10),
        d = document
          .getElementsByClassName('aod-popover-caret-link')[0]
          .getBoundingClientRect().width,
        b = document.querySelector('#mediaMatrixGridAODPopover .a-icon-popover'),
        b = parseInt(f.getComputedStyle(b).width, 10),
        c = document.querySelector('#rightCol'),
        e = 0
      null !== c
        ? (e = parseInt(f.getComputedStyle(c).width, 10))
        : ((c = document.querySelector('#aud_right_col')),
          null !== c && (e = parseInt(f.getComputedStyle(c).width, 10)))
      c = e - 2 * a
      0 <= c - d &&
        c - d <= b + 1 &&
        ((a = a + c - d + b),
        (document.getElementById('mediaMatrixGridAODPopover').style.paddingRight =
          a.toString() + 'px'))
    }
  })
})
