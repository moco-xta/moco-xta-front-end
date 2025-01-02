;(function (e) {
  var f = window.AmazonUIPageJS || window.P,
    l = f._namespace || f.attributeErrors,
    c = l ? l('DetailPageBookDescriptionAssets', '') : f
  c.guardFatal
    ? c.guardFatal(e)(c, window)
    : c.execute(function () {
        e(c, window)
      })
})(function (e, f, l) {
  e.when('A', 'jQuery', 'atf').execute(function (c, a, h) {
    if (a('#bookDescription_feature_div').length) {
      var b = a('#outer_postBodyPS').height()
      a('#postBodyPS').height() > b + 30
        ? (a('#outer_postBodyPS').show(),
          a('#outer_postBodyPS').css('height', b),
          a('#psPlaceHolder').show(),
          a('#expandPS').show(),
          a('#collapsePS').hide())
        : (a('#outer_postBodyPS').css('height', 'auto'), a('#psPlaceHolder').hide())
      a('#bookDescription_feature_div .a-link-expander').click(function () {
        a('#bdSeeAllPrompt').is(':hidden')
          ? (a('#outer_postBodyPS').animate({ height: b }, 500),
            a('#bdSeeAllPrompt').show(),
            a('#bdSeeLessPrompt').hide())
          : (a('#outer_postBodyPS').animate({ height: a('#postBodyPS').height() }, 500),
            a('#bdSeeAllPrompt').hide(),
            a('#bdSeeLessPrompt').show())
        a('#bdExpanderIcon').toggleClass('bookDescription-read-more-icon-rotate')
        return !1
      })
    }
  })
  e.when('A', 'jQuery', 'DynamicIframe', 'bookDescriptionIframe').execute(function (c, a, h, b) {
    if (a('#bookDescription_feature_div').length) {
      var g = function () {
        var d = a('#' + n).contentDocument
        if (b.staticHeight && d && d.defaultView)
          var c = parseInt(b.numLines, 10),
            g = d.find('#iframeContent'),
            d = d.defaultView.getComputedStyle(g, null).getPropertyValue('line-height'),
            d = parseFloat(d),
            d = Math.round(d * c)
        else
          (c = document.getElementById(b.featureDiv).offsetTop),
            (d = document.getElementById(b.imageBlockDiv).offsetTop),
            (g = document.getElementById(b.imageBlockDiv).offsetHeight),
            (d = d + g - c - 30),
            d < l && (d = l)
        c = document.getElementById(b.postBodyId).offsetHeight
        c > d + 30
          ? a('#' + b.seeLessPromptId).hasClass('a-hidden')
            ? (a('#' + b.outerBodyId).height(d),
              a('#' + b.placeHolderId).removeClass('a-hidden'),
              a('#' + b.seeAllPromptId).removeClass('a-hidden'))
            : a('#' + b.outerBodyId).height(c)
          : (a('#' + b.outerBodyId).height(c),
            a('#' + b.placeHolderId).addClass('a-hidden'),
            a('#' + b.seeAllPromptId).removeClass('a-hidden'),
            a('#' + b.seeLessPromptId).addClass('a-hidden'),
            a('#' + b.expanderIconId).removeClass('bookDescription-read-more-icon-rotate'))
        d = a('#' + b.outerBodyId).height()
        0 === e && (e = d)
        d = e
        c > d + 30 && a('#' + b.seeLessPromptId).is(':hidden')
          ? (a('#' + b.outerBodyId).show(),
            a('#' + b.outerBodyId).css('height', d),
            a('#' + b.placeHolderId).show(),
            a('#expandPS').removeClass('a-hidden'),
            a('#collapsePS').addClass('a-hidden'))
          : a('#' + b.outerBodyId).css('height', 'auto')
      }
      ;('use strict')
      var k = null
      c = b.encodedDescription
      var e = 0,
        l = 112,
        m = {},
        n = b.iFrameId
      m.iframeId = n
      m.iframeWrapperId = 'bookDesc_iframe_wrapper'
      m.overriddenCSSId = 'bookDesc_override_CSS'
      m.encodedIframeContent = c
      m.initialResizeCallback = g
      k = new h(m)
      k.createIframe()
      'undefined' !== typeof k &&
        k instanceof h &&
        (a(f).resize(function () {
          k.resizeIframe(g)
        }),
        a(f).bind('imageResize', function () {
          k.resizeIframe(g)
        }))
      a('#' + b.featureDiv + ' .a-link-expander').click(function () {
        var c = '#' + b.outerBodyId,
          g = '#' + b.seeAllPromptId,
          h = '#' + b.seeLessPromptId,
          k = '#' + b.expanderIconId,
          f = '#' + b.postBodyId
        a(g).hasClass('a-hidden')
          ? ((f = e),
            a(c).animate({ height: f }, 500),
            a(g).removeClass('a-hidden'),
            a(h).addClass('a-hidden'),
            a(k).removeClass('bookDescription-read-more-icon-rotate'))
          : (a(c).animate({ height: a(f).height() }, 500),
            a(g).addClass('a-hidden'),
            a(h).removeClass('a-hidden'),
            a(k).addClass('bookDescription-read-more-icon-rotate'))
        return !1
      })
    }
  })
  e.when('A', 'jQuery', 'ready').execute('dpProductInfoTabs', function (c) {
    c.on('a:tabs:product_info_tabs:select', function () {
      e.when('a-expander').execute(function (a) {
        a.initializeExpanders()
      })
    })
    for (
      var a = document.getElementsByClassName('productInfoTabExpander'), h = 0;
      h < a.length;
      h++
    )
      c.on(
        'a:expander:' + a[h].getAttribute('data-a-expander-name') + ':toggle:collapse',
        function (a) {
          a = document.getElementsByClassName('productInfoTab')
          var c = a[0].getBoundingClientRect()
          ;(0 <= c.top &&
            0 <= c.left &&
            c.bottom <= (f.innerHeight || document.documentElement.clientHeight) &&
            c.right <= (f.innerWidth || document.documentElement.clientWidth)) ||
            a[0].scrollIntoView()
        },
      )
  })
  e.when('A', 'a-carousel-framework', 'atf').execute(function (c, a) {
    c = new f.ResizeObserver(function () {
      for (var b = a.getAllCarousels(), c = 0; c < b.length; c++) {
        var e = b[c]
        e.__initialized && e.resize(e)
      }
    })
    var e = document.querySelectorAll('#bookDescription_feature_div')[0]
    e && c.observe(e)
  })
})
