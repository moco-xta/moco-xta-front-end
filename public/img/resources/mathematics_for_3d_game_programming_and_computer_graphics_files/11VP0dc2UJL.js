;(function (g) {
  var h = window.AmazonUIPageJS || window.P,
    l = h._namespace || h.attributeErrors,
    b = l ? l('DetailPageRichProductInformationAssets', '') : h
  b.guardFatal
    ? b.guardFatal(g)(b, window)
    : b.execute(function () {
        g(b, window)
      })
})(function (g, h, l) {
  g.register('metrics-helper', function () {
    function b(a, b) {
      h.ue && h.ue.count && ue.count(a, b)
    }
    return {
      logCounter: function (a) {
        if (h.ue && h.ue.count) {
          var b = (ue.count(a) || 0) + 1
          ue.count(a, b)
        }
      },
      logCounterValue: b,
      maxCarouselItemIndexMetricsEmit: function (a) {
        var e = a.dom.$viewport[0]
        a = a.dom.$carousel[0].children
        this.maxCarouselItemIndex === l && (this.maxCarouselItemIndex = -1)
        for (
          var c = e.getBoundingClientRect(), e = c.x, c = e + c.width, d = -1, f = 0;
          f < a.length;
          f++
        ) {
          var m = a[f].getBoundingClientRect(),
            k = m.x,
            m = k + m.width
          k >= e && m <= c && f > d && (d = f)
        }
        d + 1 > this.maxCarouselItemIndex &&
          ((this.maxCarouselItemIndex = d + 1),
          b('rich-product-information-carousel-max-item-viewed', this.maxCarouselItemIndex))
      },
    }
  })
  g.when('A', 'a-carousel-framework', 'metrics-helper').register(
    'rich-product-information-carousel-buttons-handler',
    function (b, a, e) {
      function c(d) {
        var a = d.getAttr('pageNumber')
        d = d.getAttr('totalPages')
        var c = b.$('#rich_product_information .rpi-section.rpi-section-iconic .a-carousel-left'),
          k = b.$('#rich_product_information .rpi-section.rpi-section-iconic .a-carousel-right')
        null != c &&
          null != k &&
          (1 === a ? c.css('visibility', 'hidden') : c.css('visibility', 'visible'),
          a === d
            ? (e.logCounter('rich-product-information-carousel-show-last-page'),
              k.css('visibility', 'hidden'))
            : k.css('visibility', 'visible'))
      }
      a.onInit('rich-product-information-carousel', function (a) {
        c(a)
        e.maxCarouselItemIndexMetricsEmit(a)
      })
      b.on('a:carousel:rich-product-information-carousel:change:animating', function (a) {
        0 === a.newValue && e.maxCarouselItemIndexMetricsEmit(a.carousel)
      })
      b.on('a:carousel:rich-product-information-carousel:change:pageNumber', function (a) {
        a.oldValue < a.newValue
          ? e.logCounter('rich-product-information-carousel-click-next-page')
          : e.logCounter('rich-product-information-carousel-click-previous-page')
        c(a.carousel)
      })
      b.on('a:carousel:rich-product-information-carousel:change:pageSize', function (a) {
        c(a.carousel)
      })
    },
  )
  g.when('A', 'ready').execute('carousel-keyboard_navigation-handler', function (b) {
    b.on('a:carousel:rich-product-information-carousel:change:animating', function (a) {
      !a.newValue &&
        (a = a.carousel.dom.$carousel) &&
        (a = a.children("[aria-hidden\x3d'false']")) &&
        ((a = a.first().find('.rpi-attribute-content').first()),
        a.attr('tabindex', '-1'),
        a.focus())
    })
  })
  g.when('A', 'ready').execute('see-all-details-link-handler', function (b) {
    function a() {
      f.focus()
      d !== document.activeElement.id && (f.attr('tabindex', '-1'), f.focus())
    }
    var e = b.$('#rich_product_information-learn_more_link')
    if (0 < e.length) {
      var c = e.attr('href')
      if ('#' === c[0]) {
        var d = c.substring(1),
          f = b.$('#' + d)
        e.bind('click', a)
      }
    }
  })
  g.when('A', 'metrics-helper').execute(function (b, a) {
    function e(c, e) {
      b.on('a:popover:afterShow:rpi-inlinePopover_' + c, function (b) {
        a.logCounterValue('rpiIconInlinePopover_' + c + 'Showed', 1)
        b = b.popover.$container.find('a')
        for (var d = 0; d < b.length; d++) {
          var f = b.get(d),
            g = new URL(f.href)
          g.searchParams.set('ref', e)
          f.href = g.href
        }
      })
    }
    for (var c = b.$('.rpi-attribute-content'), d = 0; d < c.length; d++) {
      var f = c.get(d),
        g = f.dataset.rpiAttributeName,
        f = f.dataset.rpiAttributeRefTag
      g && f && e(g, f)
    }
  })
})
