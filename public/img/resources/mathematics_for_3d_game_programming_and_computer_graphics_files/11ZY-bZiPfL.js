;(function (d) {
  var h = window.AmazonUIPageJS || window.P,
    k = h._namespace || h.attributeErrors,
    c = k ? k('MorpheusPopularityRankSidesheetAssets', '') : h
  c.guardFatal
    ? c.guardFatal(d)(c, window)
    : c.execute(function () {
        d(c, window)
      })
})(function (d, h, k) {
  d.when('A', 'jQuery', 'ready').register('monarch-sidesheet', function (c) {
    function d(a) {
      a && b('#' + l).is(':hidden')
        ? b('#' + l).show()
        : !a && b('#' + l).is(':visible') && b('#' + l).hide()
    }
    function A() {
      var a = b('#' + f).width() + 50
      y({ right: '-' + a + 'px' }, function () {
        b('#' + f).hide()
      })
    }
    function m(a) {
      if (f && n && e) {
        A()
        b('#' + n).hide()
        b('#' + e).hide()
        document.body.style.overflow = r ? r : ''
        var t = h.ue
        t && t.count && t.count('morpheusSidesheetDismissed', 1)
        p = a ? a : k
        document.activeElement.blur()
        ;(a = b('#morpheus-sidesheet-ingress a')) && 0 < a.length && a[0].focus()
      }
    }
    function u(a) {
      b('#' + f).show(function () {
        y({ right: '0px' }, function () {
          b('#' + e).show()
          b('#' + g).is(':empty') && d(!0)
          document.activeElement.blur()
          a && p && b('#' + p) ? b('#' + p).focus() : v().focus()
          p = k
        })
      })
    }
    function z(a) {
      'Escape' === a.key || 'Esc' === a.key
        ? (a.preventDefault(), a.stopPropagation(), m())
        : 'Tab' !== a.key ||
          a.shiftKey ||
          a.target !== w() ||
          (a.preventDefault(), a.stopPropagation(), a.target.blur(), v().focus())
    }
    function q(a) {
      if ('Enter' === a.key) a.preventDefault(), a.stopPropagation(), m()
      else if ('Tab' === a.key && a.shiftKey) {
        a.preventDefault()
        a.stopPropagation()
        var b = w()
        b &&
          (a.target.blur(),
          'TAG-PILL' === b.nodeName && (b = b.shadowRoot.querySelector('button')),
          b.focus())
      } else
        'Tab' !== a.key ||
          a.shiftKey ||
          a.target !== w() ||
          (a.preventDefault(), a.stopPropagation())
    }
    function y(a, e) {
      c.animate(b('#' + f), a, 300, 'ease-out', e)
    }
    function w() {
      var a = Array.from(document.querySelectorAll(x + ' div[class*\x3d"pagination-section"] a'))
      if (a.length) return a[a.length - 1]
      a = Array.from(
        document.querySelectorAll(
          x + ' \x3e :not(div[class*\x3d"pagination-section"]) a:not(.aok-hidden)',
        ),
      )
      if (a.length) return a[a.length - 1]
      a = Array.from(document.querySelectorAll('#' + g + ' #morpheus-header-formats tag-pill'))
      if (a.length) return a[a.length - 1]
      a = Array.from(document.querySelectorAll('#' + g + ' #morpheus-header-title a'))
      return a.length ? a[a.length - 1] : v()
    }
    function v() {
      var a = document.getElementById(e + '-announce')
      return a ? a : e
    }
    var b = c.$,
      f,
      g,
      n,
      e,
      l,
      r,
      p,
      x
    return {
      initialize: function (a, b, c, u, d) {
        f = a
        g = b
        n = c
        l = u
        e = d
        x =
          '#' + g + ' div[class*\x3d"sidesheetAsinListContainer"]:not([style*\x3d"display: none;"])'
        r = document.body.style.overflow
        f &&
          g &&
          n &&
          l &&
          e &&
          (document.getElementById(n).addEventListener('click', m),
          document.getElementById(e).addEventListener('click', m),
          document.getElementById(e).addEventListener('keydown', q),
          document.getElementById(n).addEventListener('keydown', z),
          document.getElementById(f).addEventListener('keydown', z))
      },
      show: function (a) {
        f &&
          g &&
          n &&
          l &&
          e &&
          (b('#' + n).show(), u(a), (document.body.style.overflow = 'hidden'))
      },
      setContent: function (a) {
        g && l && (d(!1), b('#' + g).html(a))
      },
      closeSidesheet: m,
    }
  })
  ;('use strict')
  d.when('A', 'jQuery', 'ready').register('mobile-bottomsheet', function (c) {
    function d() {
      if (0 === document.getElementsByClassName('morpheus-lightbox').length) {
        var c = document.getElementsByClassName('a-sheet-lightbox')
        if (0 < c.length) c[0].classList.add('morpheus-lightbox')
        else return !0
      }
      return !1
    }
    function h() {
      d() && setTimeout(h, 10)
    }
    function m() {
      var c = document.getElementsByClassName('a-popover a-popover-secondary')[0],
        d = document.getElementsByClassName('a-sheet-web')[0],
        q = document.getElementsByClassName('a-sheet-content-container')[0]
      c !== k && d !== k && q !== k
        ? ((c.style.zIndex = '498'),
          (d.style.borderRadius = '16px 16px 0 0'),
          (q.style.borderRadius = '16px 16px 0 0'),
          h())
        : setTimeout(m, 10)
    }
    c.on('a:popover:beforeHide:secondary_view_morpheus', function () {
      var c = document.getElementsByClassName('morpheus-lightbox')
      0 < c.length && c[0].classList.remove('morpheus-lightbox')
    })
    c.on('a:popover:afterShow:secondary_view_morpheus', d)
    return { styleElements: m }
  })
})
