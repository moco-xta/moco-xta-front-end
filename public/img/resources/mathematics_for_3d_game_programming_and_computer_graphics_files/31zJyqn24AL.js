;(function (f) {
  var h = window.AmazonUIPageJS || window.P,
    m = h._namespace || h.attributeErrors,
    b = m ? m('DetailPageBTFSubNavDesktopAsset', '') : h
  b.guardFatal
    ? b.guardFatal(f)(b, window)
    : b.execute(function () {
        f(b, window)
      })
})(function (f, h, m) {
  f.when('ready').register('hit-btf-sub-nav-desktop-metrics-logger', function () {
    return {
      incrementMetricCount: function (b) {
        if ('undefined' !== typeof b) {
          var k = h.ue
          k && 'function' === typeof k.count && k.count(b, (k.count(b) || 0) + 1)
        }
      },
    }
  })
  ;('use strict')
  f.when('A', 'ready').register('btf-sub-nav-desktop-utils', function (b) {
    function k() {
      e('#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab').removeClass('active')
      e('#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab').removeAttr('aria-current')
    }
    var e = b.$
    return {
      processTargetIds: function (g) {
        var c = {}
        b.each(g, function (a, b) {
          a: {
            if (a !== m)
              for (var g = 0; g < a.length; g++)
                if (e(a[g]).length && 1 < e(a[g]).height()) {
                  a = a[g]
                  break a
                }
            a = !1
          }
          a ? (c[b] = a) : e('#' + b).hide()
        })
        return c
      },
      activateTab: function (b) {
        k()
        e('#' + b).addClass('active')
        e('#' + b).attr('aria-current', 'location')
      },
      deactivateTabs: k,
      getTargetDivCoordinates: function (b) {
        var c = []
        e(b).length &&
          e(b).offset() &&
          (c.push(e(b).offset().top),
          '#owner_zone_btf_header' === b
            ? c.push(
                e('#owner_zone_btf_footer').offset().top + e('#owner_zone_btf_footer').height(),
              )
            : c.push(e(b).offset().top + e(b).height() - 10))
        return c
      },
      onScreen: function (b, c) {
        var a = e(h)
        c = a.scrollTop() + c
        var a = h.innerHeight ? h.innerHeight : a.height(),
          u = c + a,
          n = b[0] - 100
        b = b[1]
        return (b > c && b <= u) || (b - n > a && n <= c && b >= u)
      },
    }
  })
  f.when('A', 'btf-sub-nav-desktop-utils', 'ready').execute(function (b, k) {
    function e() {
      f.register('btf-sub-nav-desktop-configs', function () {
        function a() {
          h = []
          for (var a in p)
            p.hasOwnProperty(a) && h.push({ tab: a, topOffset: c(p[a]).offset().top })
          h.sort(function (a, d) {
            return a.topOffset - d.topOffset
          })
        }
        var e = b.state('btf-sub-nav-desktop-context'),
          g = [],
          h = [],
          m = {},
          f = e['btf-sub-nav-desktop-leftAligned'],
          d = e['btf-sub-nav-desktop-lateActivation'],
          r = {
            btfSubNavDesktopAboutThisItemTab: e['btf-sub-nav-desktop-about-this-item-tab'],
            btfSubNavDesktopSimilarTab: e['btf-sub-nav-desktop-similar-tab'],
            btfSubNavDesktopProductInfoTab: e['btf-sub-nav-desktop-product-info-tab'],
            btfSubNavDesktopQuestionsTab: e['btf-sub-nav-desktop-questions-tab'],
            btfSubNavDesktopCustomerReviewsTab: e['btf-sub-nav-desktop-customer-reviews-tab'],
          },
          p = k.processTargetIds(r)
        b.objectIsEmpty(p) && c('#btf-sub-nav-desktop-wrapper').hide()
        e = c('#btf-sub-nav-desktop-tabs').outerHeight() - 2
        return {
          SUBNAV_ELEMENT: '#btf-sub-nav-desktop-tabs',
          tabTargets: r,
          isLeftAligned: f,
          isLateActivation: d,
          btfSubNavJQElemHeight: e,
          tabsArray: [
            'btfSubNavDesktopAboutThisItemTab',
            'btfSubNavDesktopSimilarTab',
            'btfSubNavDesktopProductInfoTab',
            'btfSubNavDesktopQuestionsTab',
            'btfSubNavDesktopCustomerReviewsTab',
          ],
          persistentHeaderClass: 'persistent-header',
          fixedAmazonNavJQElem: '#nav-belt',
          fixedAmazonNavBodyClass: 'nav-updated-pinned-config',
          animationDuration: 500,
          atfCustomerRatingScrollDuration: 800,
          navigateTopElements: ['btfSubNavDesktopTopTab', 'btfSubNavDesktopAboutThisItemTab'],
          initialize: function () {
            p = k.processTargetIds(r)
            g = []
            for (var d in p) p.hasOwnProperty(d) && g.push(d)
            a()
            m = { btfSubNavDesktopTopTab: 'btfSubNavDesktopTopTab' }
            for (d = 0; d < g.length; ++d) m[g[d]] = h[d].tab
            if (0 < h.length) {
              d = c('\x3cdiv\x3e')
              var b = c('#btfSubNavDesktopTopTab')
              null !== b && 0 < b.length && c(d).append(b.clone(!0))
              for (b = 0; b < h.length; b++) {
                var e = c('#' + h[b].tab)
                null !== e && 0 < e.length && c(d).append(e.clone(!0))
              }
              c('#btf-sub-nav-desktop-tabs').html(d.html())
            }
          },
          getSubNavDesktopTabToActualTabMap: function () {
            return m
          },
          getTabsArray: function () {
            return g
          },
        }
      })
    }
    function g() {
      c('#btf-sub-nav-desktop-tabs').length && (e(), b.off('a:pageUpdate', g))
    }
    var c = b.$
    if (c('#btf-sub-nav-desktop-tabs').length) e()
    else b.on('a:pageUpdate', g)
  })
  f.when(
    'A',
    'hit-btf-sub-nav-desktop-metrics-logger',
    'btf-sub-nav-desktop-configs',
    'btf-sub-nav-desktop-utils',
  ).execute(function (b, k, e, g) {
    if (!e) return !1
    var c = b.$,
      a = {},
      f = e.btfSubNavJQElemHeight,
      n = 0,
      v,
      q = null,
      w = !1
    a.isSubNavImpressionsMetricEmitted = !1
    a.isSubNavHiddenMetricEmitted = !1
    a.isSubNavRenderable = !1
    a.isLeftAligned = e.isLeftAligned
    a.isLateActivation = e.isLateActivation
    a.tabTargets = e.tabTargets
    a.tabCoordinates = {}
    a.jqSubNav = null
    a.topOffset = f + n
    a.animationDuration = e.animationDuration
    a.THIRD_PARTY_JUMP_LINKS =
      '#acrCustomerReviewLink #askATFLink #owner_zone_atf_jumplink #customerReviewsAttributeSeeAllRatings #seeMoreDetailsLink #HLCXComparisonJumplink_feature_div #climatePledgeFriendlyATF_feature_div'.split(
        ' ',
      )
    a.showTab = function () {
      a.jqSubNav.css({ top: a.getAmazonNavBarHeight(), position: '' })
      a.jqSubNav.addClass(e.persistentHeaderClass)
    }
    a.hideTab = function () {
      a.jqSubNav.css({ top: -100, position: 'absolute' })
      a.jqSubNav.removeClass(e.persistentHeaderClass)
    }
    a.fixNarBarWidth = function () {
      if (c('#btfSubNavDesktop_feature_div').length) {
        var d = c('#btfSubNavDesktop_feature_div').width()
        a.jqSubNav.width(d)
      }
    }
    a.emitSubNavImpressionsMetric = function () {
      if (!a.isSubNavImpressionsMetricEmitted && a.isSubNavRenderable) {
        a.logMetric('visible', '')
        for (var d in a.tabs) a.tabs.hasOwnProperty(d) && a.logMetric('visible', d)
        a.isSubNavImpressionsMetricEmitted = !0
      }
    }
    a.logMetric = function (a, c) {
      '' !== c
        ? k.incrementMetricCount('hit-btf-sub-nav-desktop:' + c + ':' + a)
        : k.incrementMetricCount('hit-btf-sub-nav-desktop:' + a)
    }
    a.emitSubNavHiddenMetric = function (d) {
      a.isSubNavHiddenMetricEmitted ||
        (a.logMetric('hidden', d), (a.isSubNavHiddenMetricEmitted = !0))
    }
    a.applyCenterTabStyling = function () {
      a.isLeftAligned || a.jqSubNav.css({ 'justify-content': 'center' })
    }
    a.attachTwisterUpdateHandler = function () {
      b.on('a:pageUpdate ready', a.initialize)
    }
    a.attachScreenResizeHandler = function () {
      b.on('resize', a.initialize)
      b.on('orientationChange', a.initialize)
    }
    a.refreshTabCoordinates = function () {
      b.each(a.tabs, function (d, c) {
        a.tabCoordinates[c] = g.getTargetDivCoordinates(d)
      })
    }
    a.processTabChecks = function () {
      for (
        var d = !1, c = e.getTabsArray(), b = e.getSubNavDesktopTabToActualTabMap(), h = 0;
        h < c.length;
        h++
      ) {
        var f = b[c[h]]
        if (a.tabCoordinates[f] && g.onScreen(a.tabCoordinates[f], a.topOffset)) {
          d = !0
          g.activateTab(f)
          break
        }
      }
      d || g.deactivateTabs()
    }
    a.setTopOffset = function () {
      n = a.getAmazonNavBarHeight()
      a.topOffset = f + n
    }
    a.getAmazonNavBarHeight = function () {
      var a = 0
      c(e.fixedAmazonNavJQElem).length &&
        c(e.fixedAmazonNavJQElem).hasClass(e.fixedAmazonNavBodyClass) &&
        ((a = c(e.fixedAmazonNavJQElem).css('top')),
        (a = parseFloat(a, 10) + c(e.fixedAmazonNavJQElem).outerHeight()))
      return a
    }
    a.findFeatureDivHeights = function (d, b) {
      var e = !0,
        h = !1,
        g = m
      try {
        for (var f = d.children[Symbol.iterator](), k; !(e = (k = f.next()).done); e = !0) {
          var l = k.value
          if (l.matches('[data-feature-name]')) {
            if (
              l.matches('div') &&
              l.id &&
              0 < l.children.length &&
              l.matches('[data-feature-name]')
            ) {
              var n = (c(l).offset().top + c(l).height()) / c(document).height()
              b.push({ node: l, nodePageRatio: n })
            }
            0 < l.children.length &&
              l.matches('[data-feature-name]') &&
              a.findFeatureDivHeights(l, b)
          }
        }
      } catch (t) {
        ;(h = !0), (g = t)
      } finally {
        try {
          !e && f.return && f.return()
        } finally {
          if (h) throw g
        }
      }
    }
    a.moveFeatureDivToPost35Percent = function () {
      var d = document.querySelector('#dp-container')
      if (d) {
        var b = []
        if (
          0 < d.children.length &&
          Array.from(d.children).every(function (a) {
            return !a.matches('[data-feature-name]')
          })
        )
          a.logMetric('missing-data-feature-name', '')
        else {
          a.findFeatureDivHeights(d, b)
          b.sort(function (a, d) {
            return a.nodePageRatio - d.nodePageRatio
          })
          var d = void 0,
            e = !0,
            h = !1,
            g = m
          try {
            for (var f = b[Symbol.iterator](), k; !(e = (k = f.next()).done); e = !0) {
              var l = k.value,
                n = l.node
              if (0.35 < l.nodePageRatio) {
                d = n
                break
              }
            }
          } catch (t) {
            ;(h = !0), (g = t)
          } finally {
            try {
              !e && f.return && f.return()
            } finally {
              if (h) throw g
            }
          }
          d &&
            !d.isSameNode(v) &&
            'btfSubNavDesktop_feature_div' !== d.id &&
            (c('#btfSubNavDesktop_feature_div').insertAfter(c(d)), (v = d))
        }
      } else a.logMetric('missing-dp-container', '')
    }
    a.moveFeatureDivToTopOfBtf = function () {
      var a = void 0
      0 < c('#bottomRow').length
        ? (a = c('#bottomRow'))
        : 0 < c('#ATFCriticalFeaturesDataContainer').length &&
          (a = c('#ATFCriticalFeaturesDataContainer'))
      a !== m && 0 < a.length && c('#btfSubNavDesktop_feature_div').insertAfter(a)
    }
    a.scrollHandler = function () {
      a.isLateActivation && a.moveFeatureDivToPost35Percent()
      if (3 > e.getTabsArray().length)
        a.disableKeyboardFocusOnTabs(), a.emitSubNavHiddenMetric('less-than-3-tabs')
      else {
        a.setTopOffset()
        var d = c(h).scrollTop() + n,
          b = d + h.innerHeight,
          p = c(document).height(),
          g = c('#bottomRow'),
          f = c('#ATFCriticalFeaturesDataContainer'),
          k
        if (a.isLateActivation) p *= 0.35
        else if ((0 < g.length ? (k = g) : 0 < f.length && (k = f), k !== m && 0 < k.length))
          p = k.offset().top + k.innerHeight()
        else {
          a.emitSubNavHiddenMetric('no-triggering-element')
          return
        }
        d = ((b - p) / (b - d)) * 100
        a.refreshTabCoordinates()
        100 <= d
          ? (a.showTab(),
            a.jqSubNav.css({ top: a.getAmazonNavBarHeight(), opacity: 1 }),
            a.processTabChecks(),
            a.emitSubNavImpressionsMetric())
          : 90 <= d && 100 > d
            ? (a.showTab(),
              a.jqSubNav.css({ top: a.getAmazonNavBarHeight(), opacity: (d - 90) / 25 }),
              a.processTabChecks(),
              a.emitSubNavImpressionsMetric())
            : (a.jqSubNav.css({ opacity: 0 }), a.hideTab(), a.processTabChecks())
      }
    }
    a.clickHandler = function (d) {
      d.preventDefault()
      b.off('scroll', a.scrollHandler)
      a.jqSubNav.css({ opacity: 1 })
      d = d.currentTarget.id
      var e = a.tabs[d]
      a.logMetric('click', d)
      'btfSubNavDesktopTopTab' === d
        ? (c('html,body').animate({ scrollTop: 0 }, a.animationDuration),
          b.on('scroll', a.scrollHandler),
          a.setKeyboardFocus('#' + a.getTopTabTargetId()))
        : ('btfSubNavDesktopAboutThisItemTab' === d
            ? (a.animationHelperForPinnedNavbar(e, 0), b.on('scroll', a.scrollHandler))
            : (g.activateTab(d),
              a.animationHelperForPinnedNavbar(e, f),
              b.delay(function () {
                b.on('scroll', a.scrollHandler)
                a.showTab()
              }, a.animationDuration + 300)),
          a.setKeyboardFocus(e))
    }
    a.animationHelper = function (d, b) {
      c(d).offset() &&
        c('html,body')
          .stop(!0, !1)
          .animate(
            { scrollTop: c(d).offset().top - b },
            {
              duration: a.animationDuration,
              step: function (a, e) {
                a = c(d).offset().top - b
                e.end !== a && (e.end = a)
              },
              complete: function () {
                c('html, body').animate({ scrollTop: c(d).offset().top - b }, { duration: 0 })
              },
            },
          )
    }
    a.animationHelperForPinnedNavbar = function (d, b) {
      c(d).offset() &&
        c('html,body')
          .stop(!0, !1)
          .animate(
            { scrollTop: c(d).offset().top - b },
            {
              duration: a.animationDuration,
              step: function (e, g) {
                a.setTopOffset()
                e = c(d).offset().top - b - n
                g.end !== e && (g.end = e)
              },
              complete: function () {
                c('html, body').animate({ scrollTop: c(d).offset().top - b - n }, { duration: 0 })
              },
            },
          )
    }
    a.handleThirdPartyJumpLinks = function () {
      b.off('scroll', a.scrollHandler)
      b.off('a:pageUpdate', a.initialize)
      b.delay(function () {
        b.on('scroll', a.scrollHandler)
        b.on('a:pageUpdate', a.initialize)
      }, e.atfCustomerRatingScrollDuration)
    }
    a.detachThirdPartyJumpLinksHandlers = function () {
      a.THIRD_PARTY_JUMP_LINKS.forEach(function (d) {
        c(d).length && c(d).unbind('click', a.handleThirdPartyJumpLinks)
      })
    }
    a.attachThirdPartyJumpLinksHandlers = function () {
      a.THIRD_PARTY_JUMP_LINKS.forEach(function (d) {
        c(d).length && c(d).click(a.handleThirdPartyJumpLinks)
      })
    }
    a.detachHandlers = function () {
      b.off('scroll', a.scrollHandler)
      a.detachThirdPartyJumpLinksHandlers()
      c('#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab').unbind('click', a.clickHandler)
    }
    a.attachHandlers = function () {
      b.on('scroll', a.scrollHandler)
      a.attachThirdPartyJumpLinksHandlers()
      c('#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab').click(a.clickHandler)
    }
    a.setHyperlinkDestinations = function (a) {
      c.each(a, function (a, d) {
        c('#' + a).attr('href', d)
      })
    }
    a.setKeyboardFocus = function (a) {
      0 !== c(a).length &&
        (c(a).attr('tabindex', '-1'),
        c(a)[0].focus({ preventScroll: !0 }),
        c(a).removeAttr('tabindex'))
    }
    a.getTopTabTargetId = function () {
      return 0 < c('#nav-top').length
        ? 'nav-top'
        : 0 < c('#navbar-main').length
          ? 'navbar-main'
          : 'nav-logo'
    }
    a.disableKeyboardFocusOnTabs = function () {
      c('#btf-sub-nav-desktop-tabs .sub-nav-desktop-tab').attr('tabindex', '-1')
    }
    a.removeHiddenClassAndHideTabs = function () {
      a.jqSubNav.hasClass('aok-hidden') && a.hideTab()
      a.jqSubNav.removeClass('aok-hidden')
    }
    a.initialize = function () {
      e.initialize()
      a.jqSubNav = c(e.SUBNAV_ELEMENT)
      a.tabs = g.processTargetIds(a.tabTargets)
      b.objectIsEmpty(a.tabs)
        ? (a.detachHandlers(),
          c('#btf-sub-nav-desktop-tabs').hide(),
          a.emitSubNavHiddenMetric('empty-tabs-list'))
        : (a.setHyperlinkDestinations(a.tabs),
          a.applyCenterTabStyling(),
          (a.isSubNavRenderable = !0),
          a.setTopOffset(),
          a.fixNarBarWidth(),
          a.scrollHandler(),
          a.refreshTabCoordinates(),
          a.detachHandlers(),
          a.attachHandlers(),
          a.removeHiddenClassAndHideTabs(),
          document.removeEventListener('focusin', a.focusHandler),
          document.addEventListener('focusin', a.focusHandler),
          document.removeEventListener('focusout', a.focusOutHandler),
          document.addEventListener('focusout', a.focusOutHandler),
          a.isLateActivation || w || (a.moveFeatureDivToTopOfBtf(), (w = !0)),
          c('#btf-sub-nav-desktop-tabs').is('[aria-label]') ||
            c('#btf-sub-nav-desktop-tabs').attr(
              'aria-label',
              'Navigate within the product detail page',
            ))
    }
    a.focusHandler = function (b) {
      if (b.target && b.target.classList && b.target.classList.contains('sub-nav-desktop-tab')) {
        q || (q = c(document).height())
        b = c('#bottomRow')
        var g = c('#ATFCriticalFeaturesDataContainer'),
          f
        if (a.isLateActivation) f = 0.35 * q
        else if ((0 < b.length ? (f = b) : 0 < g.length && (f = g), f !== m && 0 < f.length))
          f = f.offset().top + f.innerHeight()
        else return
        a.jqSubNav.hasClass(e.persistentHeaderClass) || h.scroll({ top: Math.ceil(f) })
      } else q = null
    }
    a.focusOutHandler = function () {
      b.delay(function () {
        a.jqSubNav.css({ top: a.getAmazonNavBarHeight() })
      }, 50)
    }
    a.initialize()
    a.attachTwisterUpdateHandler()
    a.attachScreenResizeHandler()
  })
})
