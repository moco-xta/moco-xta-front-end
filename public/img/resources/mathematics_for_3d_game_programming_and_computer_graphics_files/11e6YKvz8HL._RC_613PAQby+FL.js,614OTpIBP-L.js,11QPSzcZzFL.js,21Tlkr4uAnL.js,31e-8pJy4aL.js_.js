;(function (d) {
  var m = window.AmazonUIPageJS || window.P,
    f = m._namespace || m.attributeErrors,
    b = f ? f('DetailPageImageBlockSubAssets@controller', 'DetailPageImageBlockSubAssets') : m
  b.guardFatal
    ? b.guardFatal(d)(b, window)
    : b.execute(function () {
        d(b, window)
      })
})(function (d, m, f) {
  d.when('A', 'imageBlockUtils').register('ImageBlockModel', function (b, c) {
    function p(b, a, q, e, n, h) {
      c.isDefined(b) && (g.type = b)
      c.isDefined(a) && (g.index = a)
      c.isDefined(q) && (g.thumbnailIndex = q)
      c.isDefined(e) && (g.variant = e)
      c.isDefined(n) && (g.color = n)
      g.shoppableScene = h || null
    }
    function k(b) {
      p('image', 0, 0, 'MAIN', b || a.landingAsinColor || a.defaultColor, null)
    }
    function e(a) {
      a = a.data
      l = b.copy(g)
      p(a.type, a.index, a.thumbnailIndex, a.variant, a.color, a.shoppableScene)
    }
    function h(a) {
      e(a)
      a = b.copy(a)
      a.data = b.copy(g)
      n.dispatch('updateView', a)
    }
    function d() {
      l = b.copy(g)
      k(g.color)
    }
    var a,
      n,
      g = {},
      l = {},
      m,
      f
    return function (c, r) {
      n = r
      a = c
      n.register('updateSelection', h)
      n.register('updateModel', e)
      n.register('resetModel', d)
      this.init = function () {
        k()
      }
      this.getCurrentItem = function () {
        return b.copy(g)
      }
      this.getPreviousItem = function () {
        return b.copy(l)
      }
      this.setCurrentEvent = function (a) {
        m = a
      }
      this.getCurrentEvent = function () {
        return m
      }
      this.setImmersiveViewModalInstance = function (a) {
        f = a
      }
      this.getImmersiveViewModalInstance = function () {
        return f
      }
      this.updateTitle = function (b) {
        a.title = b
      }
      this.setToPreviousItem = function () {
        p(l.type, l.index, l.thumbnailIndex, l.variant, l.color, l.shoppableScene)
      }
      this.setToCurrentItem = function (a) {
        p(a.type, a.index, a.thumbnailIndex, a.variant, a.color, a.shoppableScene)
      }
    }
  })
  ;('use strict')
  d.when('imageBlockUtils').register('ImageBlockState', function (b) {
    return function (c, d, k) {
      this.getImageHash = function (e) {
        var h = k.getCurrentItem()
        e = b.getIndexForVariant(h.color, e || 'MAIN', c)
        return b.getImageHash(h.color, e, c)
      }
      this.onImageUpdateForTwister = function (b) {
        d.register('updateSelection', function (c) {
          'swatchClick' === c.type && 'function' === typeof b && b()
        })
      }
    }
  })
  ;('use strict')
  d.when(
    'jQuery',
    'ImageBlockModel',
    'ImageBlockView',
    'imageBlockUtils',
    'ImageBlockState',
  ).register('ImageBlockController', function (b, c, d, k, e) {
    var h = {}
    return function (f) {
      var a = this
      a.dispatch = function (a, c) {
        a = h[a]
        k.isDefined(a) &&
          b.each(a, function (a, b) {
            b.call(m, c)
          })
      }
      a.register = function (a, b) {
        k.isDefined(h[a]) || (h[a] = [])
        'function' === typeof b && h[a].push(b)
      }
      a.model = new c(f, a)
      a.view = new d(f, a, a.model)
      a.api = new e(f, a, a.model)
      a.init = function () {
        a.model.init()
        a.view.init()
      }
      a.init()
    }
  })
  ;('use strict')
  d.when('jQuery', 'ImageBlockController', 'ImageBlockATF', 'ImageBlockBTF').register(
    'ImageBlock',
    function (b, c, f, k) {
      b = b.extend(!0, {}, f, k)
      var e = new c(b)
      d.register('ImageBlockAPI', function () {
        return e.api
      })
      return e
    },
  )
})
/* ******** */
;(function (B) {
  var u = window.AmazonUIPageJS || window.P,
    aa = u._namespace || u.attributeErrors,
    V = aa ? aa('DetailPageImageBlockSubAssets@baseViews', 'DetailPageImageBlockSubAssets') : u
  V.guardFatal
    ? V.guardFatal(B)(V, window)
    : V.execute(function () {
        B(V, window)
      })
})(function (B, u, aa) {
  B.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'ImageBlockLoader',
    'postMetric',
    'logFailedInteractionMetric',
    'postEarlyMetric',
  ).register('ImageBlockAdditionalAltImageView', function (n, b, e, K, k, N, H) {
    function O(c, a, v, l, p) {
      if (!e.isjQueryObjDefined(c.find('.a-button-selected'))) {
        var r = F.getCurrentItem()
        if (!l || 'chromeless-video' !== r.type || !f.autoplayVideo) {
          l = 0
          'image' === r.type && (l = Math.max(e.getIndexForVariant(r.color, r.variant, f), 0))
          var d = 0
          e.isDefined(f.heroImage[r.color]) && (d = f.heroImage[r.color].length)
          p = l - (a >= f.maxAlts ? f.maxAlts - p - d : 0)
          a = 0 <= p ? a + p : l + d
          a >= v && ((l = 0), (a = d))
          v = e.getImageHash(r.color, l, f)
          ;-1 !== v &&
            (P.dispatch('updateModel', {
              data: {
                index: l,
                thumbnailIndex: a,
                variant: v.variant,
                type: 'image',
                shoppableScene: v.shoppableScene,
              },
            }),
            (v = c.find('.item').get(a)),
            e.selectGivenThumbnail(b(v), c))
        }
      }
    }
    function M(b) {
      if (!f.useChildVideos)
        return e.lazyLoadingRequired(F.getCurrentItem(), F, f) ? void 0 : f.videos
      if (f.colorToVideo[b]) return f.colorToVideo[b]
      var a = f.colorToAsin[b]
      if (a && a.asin) {
        var c = {}
        c.params = {
          asin: a.asin,
          productGroupID: f.productGroupID,
          useAiryVideoPlayer: !0,
          useChromelessVideoPlayer: f.useChromelessVideoPlayer,
          isUDP: f.isUDP,
        }
        f.isDPXFeatureEnabled ||
          ((c.success = function (a) {
            videosOnTwisterRefresh(a)
          }),
          K.load(VIDEO_AJAX_ENDPOINT, c))
        return f.colorToVideo && f.colorToVideo[b]
      }
    }
    function w(r, a, v) {
      if ((2 === f.unrolledImageBlockTreatment || 3 === f.unrolledImageBlockTreatment) && v)
        return r
      var l = M(a),
        p = e.isDefined(l) && 0 < l.length && f.alwaysIncludeVideo ? 1 : 0
      a = f.colorImages && f.colorImages[a]
      l = r
      var d = 0
      e.isDefined(a) &&
        (b.each(a, function (a, h) {
          if (d >= f.maxAlts - p && r < f.maxAlts + f.additionalNumberOfImageAlts) {
            if (2 === f.unrolledImageBlockTreatment || 3 === f.unrolledImageBlockTreatment) {
              var q = b('.thumbItemUnrolled')
              q[r]
                ? (q[r].querySelector('img').src = h.thumb)
                : b(
                    '\x3cli class\x3d"thumbItemUnrolled thumbTypeimage thumbIndex' +
                      a +
                      '"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-button a-button-thumbnail a-button-toggle" id\x3d"a-autoid-' +
                      (r + 1) +
                      '"\x3e\x3cspan class\x3d"a-button-inner"\x3e\x3cinput class\x3d"a-button-input" type\x3d"submit" aria-labelledby\x3d"a-autoid-' +
                      (r + 1) +
                      '-announce"\x3e\x3cspan class\x3d"a-button-text" aria-hidden\x3d"true" id\x3d"a-autoid-' +
                      (r + 1) +
                      '-announce"\x3e \x3cimg alt\x3d"" src\x3d"' +
                      h.thumb +
                      '"\x3e \x3c/span\x3e\x3c/span\x3e\x3c/span\x3e \x3c/span\x3e\x3c/li\x3e',
                  ).appendTo(b('.regularAltImageViewLayout'))
            } else
              e.createThumbnail(
                {
                  type: 'image',
                  index: a,
                  thumbnailIndex: r,
                  variant: h.variant,
                  shoppableScene: h.shoppableScene,
                },
                h.thumb,
                c,
                'imageThumbnail',
              )
            r++
          }
          d++
        }),
        N.isEnabled && H.logAltImgRequestPlacedOnThumbnails(b, N, F),
        O(c, l, r, v, p))
      return r
    }
    function J(b, a) {
      f.useIV && e.isDefined(a.hiRes) && b.css('cursor', 'pointer')
    }
    function D(c, a) {
      if ('image' === c.type && ba) {
        var r = b('#image-canvas-caption #canvasCaption'),
          l = f.staticStrings,
          p = f.colorImages,
          d = c.color,
          z = c.index
        if (e.isShoppableScenesEnabled() && c.shoppableScene) var h = l.clickSceneTagsToShopProducts
        else
          a && f.useIV
            ? (h = l.clickToExpand)
            : p[d] && p[d][z].hiRes && f.useHoverZoom
              ? ((h = f.useHoverZoomIpad
                  ? l.touchToZoom
                  : f.useClickZoom
                    ? l.clickToZoom
                    : l.rollOverToZoom),
                f.hoverZoomIndicator &&
                  (h = "\x3cimg src\x3d'" + f.staticImages.hoverZoomIcon + "'/\x3e\x26nbsp;" + h))
              : f.useIV && (h = l.clickToExpand)
        r.html(h)
      }
    }
    function G(c, a) {
      var r = 'a-dynamic-image'
      if (!f.acEnabled) {
        var l
        b.each(c.main, function (a, q) {
          e.isDefined(l) ||
            (l =
              parseFloat(q[1] / q[0]) <= parseFloat(f.holderRatio)
                ? ' a-stretch-vertical'
                : ' a-stretch-horizontal')
        })
        r += l
      }
      var p = e.getMaxDimensionsOfMainImage(c.main, A, f),
        d = p[0],
        z = p[1]
      p = b('\x3cdiv\x3e\x3c/div\x3e')
      d = { 'max-height': d, 'max-width': z }
      p.addClass(r)
        .css(d)
        .attr({ 'data-old-hires': c.hiRes, 'data-a-manual-replacement': 'true', onload: a })
        .data('a-dynamic-image', c.main)
      return p
    }
    function t(b, a, c) {
      var e = 'desktop-dp-atf-ib-shoppablescenes-tags-' + b
      'function' == typeof uet && uet('bb', e, { wb: 1 })
      c.attr('data-a-image-name', 'shoppable-scene:' + b)
      c = p
        .find('.mirai-scene-image-block-template')
        .clone()
        .removeClass('mirai-scene-image-block-template aok-hidden')
        .addClass('mirai-shoppable-scene')
      c.addClass('celwidget').attr('cel_widget_id', e)
      c.children('span').css('display', 'inline-block')
      P.dispatch('initialize-shoppable-scene', {
        index: b,
        shoppableScene: a.shoppableScene,
        imageSource: a.hiRes || a.large || a.lowRes,
        $tagPlaceholder: c.find('.mirai-scene-tag-placeholder'),
        $viewProductsButton: c.find('.mirai-scene-view-products-button'),
      })
      'MutationObserver' in u &&
        new MutationObserver(function (c, e) {
          c.forEach(function (c) {
            'childList' === c.type &&
              c.target.classList.contains('mirai-scene-image-block-tag-container') &&
              1 === c.addedNodes.length &&
              'IMG' === c.addedNodes[0].tagName &&
              '' !== c.addedNodes[0].src &&
              ((c = c.addedNodes[0]),
              'function' !== typeof c.onload &&
                (c.onload = function () {
                  n.trigger('shoppable-scene-image-loaded', {
                    index: b,
                    shoppableScene: a.shoppableScene,
                  })
                }),
              e.disconnect())
          })
        }).observe(c.find('.mirai-scene-image-block-tag-container')[0], {
          subtree: !0,
          childList: !0,
          attributes: !1,
        })
      'function' == typeof uet && uet('cf', e, { wb: 1 })
      return c
    }
    function x(c, a, b) {
      b = G(c, b)
      c =
        e.isShoppableScenesEnabled() && c.shoppableScene
          ? t(a, c, b)
          : p.find('.mainImageTemplate').clone().removeClass('template mainImageTemplate')
      c.addClass('image item itemNo' + a + ' maintain-height').attr({
        'data-csa-c-type': 'uxElement',
        'data-csa-c-element-type': 'navigational',
        'data-csa-c-action': 'image-block-main-image-hover',
        'data-csa-c-posy': a + 1,
      })
      c.find('.placeHolder').replaceWith(b)
      p.find('.list').append(c)
      n.loadImageManually(b)
      return c
    }
    function R(c) {
      var a = A.css('height')
      null !== a && c.find('.imgTagWrapper').css('height', a)
      c.addClass('selected')
      f.imgTagWrapperClasses && c.find('.imgTagWrapper').addClass(f.imgTagWrapperClasses)
    }
    function Q(c, a, l, d) {
      if (
        (2 !== f.unrolledImageBlockTreatment && 3 !== f.unrolledImageBlockTreatment) ||
        d ||
        'unavailable' === c.type
      ) {
        if ('image' === c.type || 'unavailable' === c.type || 'lazy-loaded' === c.type) {
          l = e.getImageHash(c.color, c.index, f)
          if (-1 === l)
            return (
              (a = { data: { index: 0, thumbnailIndex: 0, variant: '', type: 'unavailable' } }),
              e.lazyLoadingRequired(c, F, f) ||
                (P.dispatch('updateModel', a), e.showUnavailable(c.color)),
              -1
            )
          d = p.find('.item.itemNo' + c.thumbnailIndex)
          e.isjQueryObjDefined(d) || (d = x(l, c.thumbnailIndex, a))
          R(d)
          P.dispatch('loadMagnifier')
          D(c)
          J(d, l)
          n.trigger('dp:image-block:update', l)
        }
      } else {
        c = f.colorImages && f.colorImages[l]
        a = b('.unrolledImg')
        l = M(l)
        var z = e.isDefined(l) && 0 < l.length && f.alwaysIncludeVideo ? 1 : 0
        a.length > f.maxAlts &&
          a.each(function (a) {
            a >= f.maxAlts && b(this).remove()
          })
        e.isDefined(c) &&
          b.each(c, function (a, c) {
            a < f.maxAlts - z + f.additionalNumberOfImageAlts &&
              a >= f.maxAlts - z &&
              b(
                '\x3cli data-csa-c-action\x3d"image-block-main-image-hover" data-csa-c-element-type\x3d"navigational" data-csa-c-posy\x3d"' +
                  (a + z + 1) +
                  '" data-csa-c-type\x3d"uxElement" class\x3d"image item itemNo' +
                  (a + z) +
                  ' unrolledImg imgMedia"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-declarative" data-action\x3d"main-image-click" data-csa-c-type\x3d"widget" data-csa-c-func-deps\x3d"aui-da-main-image-click" data-main-image-click\x3d"{}" data-ux-click\x3d""\x3e \x3cdiv id\x3d"imgTagWrapperId" class\x3d"imgTagWrapper"\x3e \x3cdiv id\x3d"unrolledImgNo' +
                  (a + z) +
                  '"\x3e \x3cdiv class\x3d"a-image-container a-dynamic-image-container greyBackground" style\x3d"width:100%; height:600px;"\x3e \x3cimg alt\x3d"" src\x3d"' +
                  c.large +
                  '" data-a-hires\x3d"' +
                  c.hiRes +
                  '"\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/span\x3e \x3c/span\x3e\x3c/li\x3e',
              ).appendTo(b('.unrolledScrollBox .list-unrolled'))
          })
      }
    }
    function m(c) {
      var a = F.getCurrentItem().color
      f.colorImages[a] || (f.colorImages[a] = c)
      c = { type: 'updatedData', data: F.getCurrentItem() }
      P.dispatch('updateView', c)
      ;(a = f.colorToAsin[a]) && a.asin && B.register(e.rankedImagesReadyEvent(a.asin))
    }
    function d() {
      var c = p.find('.item .imgTagWrapper'),
        a = e.getContainerHeight(A, f.holderRatio, f.holderMaxHeight)
      0 < a && (A.height(a), c.height(a))
      p.find('img.a-dynamic-image').each(function () {
        var a = b(this)
        a.data('a-manual-replacement') && n.loadDynamicImage(this)
        var c = a.data('a-dynamic-image')
        c = e.getMaxDimensionsOfMainImage(c, A, f)
        a.css({ 'max-height': c[0] + 'px', 'max-width': c[1] + 'px' })
      })
    }
    function l(c) {
      D(F.getCurrentItem(), 'mouseenter' === c.type)
    }
    var z,
      f,
      F,
      P,
      c,
      p,
      A,
      W,
      ba = (k = n.state('imageBlockStateData')) ? !k.shouldRemoveCaption : !0
    return function (r, a, v, k) {
      z = this
      f = r
      F = a
      P = k
      n.on('triggerImageAjax', m)
      f.colorImages[f.landingAsinColor] = f.colorImages[f.defaultColor]
      z.render = function (a, l, d, h, q, g, L) {
        p = d
        c = h
        A = q
        W = w(l, a, g)
        g ||
          ((l = F.getCurrentItem()),
          e.lazyLoadingRequired(l, F, f) &&
            P.dispatch('updateModel', { data: { type: 'lazy-loaded' } }))
        l = F.getCurrentItem()
        d = !g
        e.lazyLoadingRequired(l, F, f) ||
          (b('#imageBlock').css('opacity', '1'),
          p.css('opacity', '1'),
          e.spinner(p, !1),
          p.find('li').removeClass('selected'),
          ba && b('#image-canvas-caption #canvasCaption').empty(),
          e.hideUnavailable(),
          d && p.find('.list .item').remove())
        Q(F.getCurrentItem(), L, a, g)
        return W
      }
      z.update = function (a) {}
      f.overrideAltImageClickAction && e.addTag('clickEnabledOnAltImages')
      P.register('imageHover', l)
      P.register('resize', d)
    }
  })
  ;('use strict')
  B.when('A', 'jQuery', 'imageBlockUtils').register(
    'ImageBlockAltImageIngressView',
    function (n, b, e) {
      var u, k, N, H
      return function (b, K, w, J) {
        u = this
        k = b
        N = J
        u.render = function (b, w, t, x, K, Q, m) {
          H = x
          u = this
          t = k.maxAlts
          x = w
          K = k.colorImages[b] ? k.colorImages[b].length : 0
          K += e.getVideosCount(b, k)
          b = k.heroImage[b]
          Q = 0
          b && (Q = b.length)
          b = K + Q
          b > t &&
            ((t = b - t),
            (b = H.find('.altIngressTemplate')
              .clone()
              .removeClass('altIngressTemplate')
              .removeClass('aok-hidden')
              .addClass('item')),
            (t += '+'),
            (x = { type: 'ingress', index: 0, thumbnailIndex: w, variant: '' }),
            b.find('#altIngressText').append(t),
            n.declarative.create(b, 'thumb-action', x),
            H.append(b),
            (x = w++))
          return x
        }
        u.update = function (b) {
          'ingress' === b.data.type && 'click' === b.type && N.dispatch('imageClick', b)
        }
      }
    },
  )
  ;('use strict')
  B.when('A', 'jQuery', 'imageBlockUtils', 'ImageBlockHeroUtils').register(
    'ImageBlockHeroImageView',
    function (n, b, e, u) {
      function k(l, d, f, m) {
        if (!e.isjQueryObjDefined(l.find('.a-button-selected'))) {
          var z = x.getCurrentItem()
          if (!m || 'chromeless-video' !== z.type || !t.autoplayVideo) {
            m = 0
            if ('hero-image' === z.type) {
              m = H(z.color, z.variant)
              if (-1 === m) return
              m = -1 !== m ? m : 0
            }
            var c = d + m
            c >= f && ((m = 0), (c = d))
            d = u.getHeroImageHash(t, z.color, m)
            ;-1 !== d &&
              (R.dispatch('updateModel', {
                data: { index: m, thumbnailIndex: c, variant: d.variant, type: 'hero-image' },
              }),
              (d = l.find('.item').get(c)),
              e.selectGivenThumbnail(b(d), l))
          }
        }
      }
      function K(l, d, f) {
        if ('hero-video' === x.getCurrentItem().type) return l
        d = t.heroImage && t.heroImage[d]
        var m = l
        e.isDefined(d) &&
          (b.each(d, function (b, c) {
            l < t.maxAlts &&
              (e.createThumbnail(
                { type: 'hero-image', index: b, thumbnailIndex: l, variant: c.variant },
                c.thumb,
                Q,
                'imageThumbnail',
              ),
              l++)
          }),
          k(Q, m, l, f))
        return l
      }
      function H(l, d) {
        var f = t.heroImage
        if (1 > f.length || !e.isDefined(f[l]) || !e.isDefined(d)) return -1
        var m = -1
        b.each(f[l], function (b, c) {
          c.variant === d && (m = b)
        })
        return m
      }
      function O() {
        if (m.length && t.repositionHeroImage) {
          var b = u.getHeroDimParams(t, x.getCurrentItem())
          if (e.isDefined(b)) {
            var d = e.isDefined(b.xPos)
              ? b.xPos + 'px ' + b.yPos + 'px '
              : 'center ' + b.yPos + 'px '
            m.css({
              'background-position': d,
              'background-size': b.width + 'px ' + b.height + 'px ',
              'max-width': b.width + 'px ',
              'min-height': b.height + 'px ',
              filter: '',
              '-ms-filter': '',
            })
          }
        }
      }
      function M(b, d, f, k) {
        if (m.length && b && d) {
          if ('function' === typeof f || k) {
            var l = new Image()
            l.onload = k
              ? function () {
                  m.css('background-image', 'url("' + b + '")')
                }
              : f
            l.src = b
          }
          f = d[1]
          l = d[0]
          k || m.css({ 'background-image': 'url("' + b + '")' })
          if (
            t.repositionHeroImage &&
            ((d = u.getHeroDimParams(t, x.getCurrentItem(), d)), e.isDefined(d))
          ) {
            f = d.width
            l = d.height
            var c = e.isDefined(d.xPos)
              ? d.xPos + 'px ' + d.yPos + 'px '
              : 'center ' + d.yPos + 'px '
          }
          m.css({
            'background-position': c,
            'background-size': f + 'px ' + l + 'px ',
            'max-width': f + 'px ',
            'min-height': l + 'px ',
            filter: '',
            '-ms-filter': '',
          })
        }
      }
      function w(e, d, f, m) {
        e = u.getHeroImageHash(t, e, d)
        if (-1 === e) return -1
        d = b.map(e.main, function (b, c) {
          return c
        })[0]
        M(d, e.main[d], f, m)
      }
      function J(b, e, d) {
        if ('hero-image' !== b.type) return -1
        var f = H(b.color, x.getCurrentItem().variant)
        f = -1 !== f ? f : 0
        if (-1 === u.getHeroImageHash(t, b.color, f)) return -1
        var l = x.getCurrentItem()
        b.thumbnailIndex = l.thumbnailIndex
        b.type = l.type
        b.variant = l.variant
        b.index = f
        D(b, e, d)
      }
      function D(b, e, f) {
        var l = u.getHeroImageHash(t, b.color, b.index)
        var k = b && d && n.equals(b, d) ? !0 : !1
        d || (d = b)
        if ((!k && b) || e) w(b.color, b.index, e, f), (d = b)
        m.removeClass('hide-background')
        n.trigger('dp:image-block:update', l)
      }
      var G,
        t,
        x,
        R,
        Q,
        m,
        d = {}
      return function (d, k, f, n) {
        G = this
        t = d
        x = k
        R = n
        t.heroImage[t.landingAsinColor] = t.heroImage[t.defaultColor]
        G.render = function (e, c, d, f, l, k, r) {
          Q = f
          m = b('#heroImage')
          e = K(c, e, k)
          J(x.getCurrentItem(), r, k)
          return e
        }
        G.update = function (b) {
          var c = b.data
          'ingress' !== c.type && m.addClass('hide-background')
          'swatchHover' === b.type
            ? b.captured || ((c.type = x.getCurrentItem().type), -1 !== J(c) && (b.captured = !0))
            : 'hero-image' === c.type &&
              (D(c),
              ('click' !== b.type && t.usePeekHover) ||
                e.selectGivenThumbnail(b.$declarativeParent, Q))
        }
        R.register('resize', O)
      }
    },
  )
  ;('use strict')
  B.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'postMetric',
    'logFailedInteractionMetric',
    'postEarlyMetric',
  ).register('ImageBlockMagnifierView', function (n, b, e, K, k, N) {
    function H(b) {
      Q
        ? b.css('cursor', "url('" + D.staticImages.zoomIn + "'), auto")
        : (b.css('cursor', '-webkit-zoom-in'),
          b.css('cursor', '-moz-zoom-in'),
          b.css('cursor', 'zoom-in'))
    }
    function O(b) {
      var d = b.match(/\._((\w|,|\.)+)_\.(gif|jpg|png)$/i)
      b = {}
      if (e.isDefined(d)) {
        d = d[1].split('_')
        for (var l = 0; l < d.length; l++) {
          var m = d[l].match(/^([A-Z]+)(\d+(\.\d+)?)$/)
          e.isDefined(m) && (b[m[1]] = parseInt(m[2], 10))
        }
      }
      return b
    }
    function M(m, d) {
      function l() {
        if (d.useClickZoom) {
          var b = d.offsetInClickZoom
          b = [
            Math.min(1, Math.max(0, v[0] - (C[0] + b)) / (C[2] - 2 * b)),
            Math.min(1, Math.max(0, v[1] - (C[1] + b)) / (C[3] - 2 * b)),
          ]
        } else b = a && a.updatePosition()
        if (b && r && r.detailSize) {
          var g = [r.detailSize[0] - r.rect.width, r.detailSize[1] - r.rect.height]
          n.capabilities.rtl
            ? (r.detailImage.get(0).style.right = -(b[0] * g[0]) + 'px')
            : (r.detailImage.get(0).style.left = -(b[0] * g[0]) + 'px')
          r.detailImage.get(0).style.top = -(b[1] * g[1]) + 'px'
        }
      }
      function t(b) {
        return b.offsetParent().hasClass('a-dynamic-image-container')
      }
      function f(a) {
        var c = g ? a.originalEvent.touches[0] || a.originalEvent.changedTouches[0] : ''
        v = g ? [c.pageX, c.pageY] : [a.pageX, a.pageY]
        if (n.capabilities.rtl) {
          var h = b(u).width()
          v = g ? [h - c.pageX, c.pageY] : [h - a.pageX, a.pageY]
        }
      }
      function w(b) {
        g && b.preventDefault()
        f(b)
        d.useClickZoom
          ? (b = [C[0], C[1], C[0] + C[2], C[1] + C[3]])
          : ((b = a ? a.offset : m.offsetParent().offset()),
            (b = D.acEnabled
              ? [b.left, b.top, J.width() + b.left, J.height() + b.top]
              : [y[0] + b.left, y[1] + b.top, y[0] + y[2] + b.left, y[1] + y[3] + b.top]))
        v[0] < b[0] || v[1] < b[1] || v[0] >= b[2] || v[1] >= b[3] || (D.acEnabled && !t(m))
          ? (d.fadeMagnifier
              ? T ||
                ((T = !0),
                (da = setTimeout(function () {
                  x(!0)
                }, 500)))
              : d.useClickZoom || x(),
            X && ((X = !1), clearTimeout(M)))
          : (X ||
              ((X = !0),
              (M = setTimeout(function () {
                K.postCountMetric('dppc_hoverZoomOpened')
                k.isEnabled && N.logHoverZoomRequestServed(k)
              }, 1e3))),
            d.fadeMagnifier && T && ((T = !1), clearTimeout(da)),
            l())
      }
      function x(h) {
        h && A.suppressMagnifier(!0)
        if (
          E &&
          (r && r.hide(),
          a && (a.destroy(), (a = null)),
          (E = !1),
          g
            ? (m.unbind('touchmove.magnifier touchstart.magnifier touchend.magnifier'),
              b(document).trigger('disengaged.magnifier'))
            : b(document).unbind('mousemove.magnifier').trigger('disengaged.magnifier'),
          p(),
          h)
        )
          m.one('click.magnifier touchstart.magnifier', function (b) {
            c(b, !0)
          })
      }
      function c(c, e) {
        e && A.suppressMagnifier(!1)
        if (
          !E &&
          !h &&
          (0 === L &&
            (K.postCountMetric('dppc_hoverTime', new Date() - ((u.ue && u.ue.t0) || 0)), (L = 1)),
          S[q] || (K.postCountMetric('dppc_hoverMain'), (S[q] = 1)),
          (y = [m.position().left, m.position().top, m.width(), m.height()]),
          q &&
            (f(c),
            r ? r.refit().show() : (r = new U()),
            d.useClickZoom || (a = a || new ca()),
            (C = r.getWindowSize()),
            l()),
          (E = !0),
          g
            ? (m
                .unbind('touchstart.magnifier touchmove.magnifier')
                .bind('touchmove.magnifier', w)
                .bind('touchend.magnifier', x),
              b(document).trigger('engaged.magnifier'))
            : (D.acEnabled ? J.unbind('mousemove.magnifier') : m.unbind('mousemove.magnifier'),
              b(document).trigger('engaged.magnifier').bind('mousemove.magnifier', w)),
          e && ((c = b('#zoomWindow')), 0 < c.length))
        )
          c.one('click.magnifier touchend.magnifier', function (b) {
            x(!0)
          })
      }
      function p() {
        d.useHoverZoom &&
          (g
            ? m.bind('touchstart.magnifier touchmove.magnifier', c)
            : D.acEnabled
              ? t(m) && J.bind('mousemove.magnifier', c)
              : m.bind('mousemove.magnifier', c))
      }
      var A = this,
        J = m.offsetParent(),
        G = {
          detailImageUrl: m.attr('data-old-hires'),
          location: 'over',
          locationElement: m,
          prelaod: 'ready',
          zIndex: 50,
          offsetInClickZoom: 50,
        }
      d = b.extend(G, d)
      d.adjustment = [10, 0, -10, 0]
      var r = null,
        a = null,
        v = null,
        y = null,
        C = null,
        I = { null: 1, '': 1, undefined: 1 },
        E = !1,
        h = !1,
        q = d.detailImageUrl,
        g = d.useHoverZoomIpad || 0,
        L = 0,
        S = {},
        ca = function () {
          function g(b) {
            var a = Math.round(Math.min(m.width(), r.rect.width / b))
            b = Math.round(Math.min(m.height(), r.rect.height / b))
            q.css({ width: a, height: b })
            c = [a, b]
          }
          var a = this,
            c = [0, 0],
            h = ((r.detailSize && r.detailSize[0]) || 5e8) / y[2],
            e = ((r.detailSize && r.detailSize[1]) || 5e8) / y[3]
          h = e > h ? e : h
          b('#magnifierLens').remove()
          var q = b("\x3cdiv id\x3d'magnifierLens' /\x3e").css({ position: 'absolute' })
          d.generalImageUrls.zoomLensBackground &&
            q.css({ backgroundImage: 'url(' + d.generalImageUrls.zoomLensBackground + ')' })
          D.showMagnifierOnHover ? H(q) : q.css('cursor', 'pointer')
          a.updatePosition = function () {
            var b = [y[2] - c[0], y[3] - c[1]],
              g =
                0 >= b[0]
                  ? 0.5
                  : Math.max(0, Math.min(1, (v[0] - c[0] / 2 - y[0] - a.offset.left) / b[0])),
              h =
                0 >= b[1]
                  ? 0.5
                  : Math.max(0, Math.min(1, (v[1] - c[1] / 2 - y[1] - a.offset.top) / b[1])),
              e = y[0] + Math.round(g * b[0])
            b = y[1] + Math.round(h * b[1])
            q.get(0).style.left = e + 'px'
            q.get(0).style.top = b + 'px'
            return [g, h]
          }
          a.destroy = function () {
            q.remove()
          }
          a.offset = m.offsetParent().offset()
          g(h)
          a.updatePosition()
          q.appendTo(m.parent())
          r.detailImage[0].complete ||
            r.detailImage.load(function () {
              var b = r.detailImage.width() / y[2]
              g(b)
              a.updatePosition()
            })
        }
      ca.preload = function () {
        A.preload(d.generalImageUrls.lensBackgroundUrl)
      }
      var U = function () {
          function a() {
            var a = {}
            if ('over' === d.location) {
              a = d.useClickZoom
              var g = {},
                q = b('#leftCol'),
                f = b('#centerCol'),
                S = b('#rightCol'),
                l = b('#hover-zoom-end'),
                p = b('#actionPanelContainer'),
                ta = e.isjQueryObjDefined(q) ? q.outerHeight() : f.outerHeight()
              g.top = e.isjQueryObjDefined(q) ? q.offset().top : f.offset().top
              g.bottom = ta + g.top
              g.right = e.isjQueryObjDefined(S) ? S.offset().left : p.offset().left
              g.left = a ? 0 : q.offset().left + q.outerWidth()
              e.isjQueryObjDefined(l) && l.offset().top > g.bottom && (g.bottom = l.offset().top)
              a = g
            } else
              'right' === d.location &&
                ((a = m.offset()),
                (a = {
                  left: a.left + m.outerWidth(),
                  top: a.top,
                  right: a.left + m.outerWidth() + 400,
                  bottom: a.top + 400,
                }))
            d.minHeightElement &&
              (a.bottom = Math.max(a.bottom, a.top + b(d.minHeightElement).outerHeight()))
            a.bottom = Math.min(a.bottom, b(u).scrollTop() + b(u).height())
            a.left += h[0]
            a.top += h[1]
            a.right += h[2]
            a.bottom += h[3]
            a.width = a.right - a.left
            a.height = a.bottom - a.top
            d.enhancedHoverOverlay &&
              e.isDefined(u.pageXOffset) &&
              ((g = b(u).width()), (a.width = g - a.left + u.pageXOffset - 18), (a.height -= 14))
            L.css({ left: a.left, top: a.top, width: a.width, height: a.height })
            c.rect = a
            return c
          }
          function g(a) {
            var b = new Image()
            c.detailSize = [0, 0]
            b.onload = function () {
              c.detailSize = [b.width, b.height]
              l()
            }
            b.src = a.attr('src')
            if (0 < b.width && 0 < b.height) c.detailSize = [b.width, b.height]
            else if (d.detailImageSize) c.detailSize = d.detailImageSize
            else {
              a = O(b.src)
              var g = y[2] / y[3]
              a.SS || a.AA
                ? ((a = a.SS || a.AA), (c.detailSize = [a, a]))
                : a.SX
                  ? (c.detailSize = [a.SX, Math.round(a.SX / g)])
                  : a.SY
                    ? (c.detailSize = [Math.round(a.SY * g), a.SY])
                    : a.SL &&
                      (c.detailSize =
                        1 <= g ? [a.SL, Math.round(a.SL / g)] : [Math.round(a.SL * g), a.SL])
            }
          }
          var c = this,
            h = d.adjustment
          b('#zoomWindow').remove()
          var f = {
            overflow: 'hidden',
            position: 'absolute',
            backgroundColor: 'white',
            zIndex: d.zIndex,
          }
          d.enhancedHoverOverlay &&
            ((f.boxShadow = '0 6px 8px 2px rgba(0,0,0,.25)'),
            (f.border = '1px solid #949494'),
            (f.borderColor = 'rgb(148,148,148)'))
          var L = b("\x3cdiv id\x3d'zoomWindow' /\x3e").css(f)
          d.fadeMagnifier && L.fadeIn(200)
          d.useClickZoom &&
            (Q
              ? L.css('cursor', 'url("' + d.zoomOutIcon + '"), auto')
              : (L.css('cursor', '-webkit-zoom-out'),
                L.css('cursor', '-moz-zoom-out'),
                L.css('cursor', 'zoom-out')))
          c.updateImage = function (a) {
            a = b("\x3cimg id\x3d'detailImg' src\x3d'" + a + "'/\x3e").css('position', 'absolute')
            c.detailImage && c.detailImage.remove()
            L.append(a)
            b(document).trigger('updated.magnifier')
            c.detailImage = a
            g(c.detailImage)
          }
          c.refit = function () {
            a()
            g(c.detailImage)
            return c
          }
          d.fadeMagnifier
            ? ((c.show = function () {
                L.fadeIn(200)
                return c
              }),
              (c.hide = function () {
                L.fadeOut(200)
                return c
              }))
            : ((c.show = function () {
                L.show()
                return c
              }),
              (c.hide = function () {
                L.hide()
                return c
              }))
          c.destroy = function () {
            L.remove()
            return c
          }
          c.getWindowSize = function () {
            return [c.rect.left, c.rect.top, c.rect.width, c.rect.height]
          }
          c.updateImage(q)
          a()
          L.appendTo(document.body)
        },
        T = !1,
        da,
        X = !1,
        M
      A.preload = function (a) {
        a = b.makeArray(a)
        for (var g = a.length, c = 0; c < g; c++)
          a[c] instanceof Array
            ? A.preload(a[c])
            : 'string' === typeof a[c] &&
              a[c] &&
              !I[a[c]] &&
              ((I[a[c]] = new Image()), (I[a[c]].src = a[c]))
      }
      A.changeImage = function (a, c) {
        E && x()
        q = c
        m.attr('src', a)
        A.preload(a)
        y = [m.position().left, m.position().top, m.width(), m.height()]
        c &&
          ('immediately' === d.preload
            ? A.preload(c, !0)
            : b(u).ready(function () {
                A.preload(c)
              }),
          r ? r.updateImage(c) : m.attr('data-old-hires', c))
      }
      A.destroy = function () {
        D.acEnabled
          ? J.unbind('touchstart touchstart.magnifier touchmove.magnifier mousemove.magnifier')
          : m.unbind('touchstart touchstart.magnifier touchmove.magnifier mousemove.magnifier')
        b(document).unbind('mousemove.magnifier')
        a && a.destroy()
        a = null
        r && r.destroy()
        r = null
      }
      A.detailImage = function () {
        return r.detailImage
      }
      A.suppressMagnifier = function (a) {
        h = a
      }
      A.isEngaged = function () {
        return E
      }
      A.engageMagnifier = c
      A.disengageMagnifier = x
      m[0].complete ? p() : m.one('load', p)
      A.preload(m.attr('src'))
      u.performance &&
        performance.now &&
        u.ue &&
        ue.count &&
        ue.count('MagnifierImageDownload', performance.now())
      if (d.preload) {
        var R = d.detailImageUrl
        G = function () {
          A.preload(R, !0)
          d.useClickZoom || ca.preload()
        }
        var B = d.preload
        B.constructor !== Array && (B = [B])
        for (var Z = 0; Z < B.length; Z++)
          if ('immediately' === B[Z]) G()
          else if (b(u)[B[Z]]) b(u)[B[Z]](G)
          else b(u).bind(B[Z], G)
      }
      return A
    }
    function w() {
      if (D.useHoverZoom) {
        var m = {
          adjustment: [0, 0, 1, 1],
          generalImageUrls: D.staticImages,
          location: 'over',
          minHeightElement: '#imageBlock',
          preload: 'ready',
          zIndex: 199,
          useHoverZoomIpad: D.useHoverZoomIpad,
          useHoverZoom: D.useHoverZoom,
          useClickZoom: D.useClickZoom,
          fadeMagnifier: D.fadeMagnifier,
          zoomOutIcon: D.staticImages.zoomOutCur,
          enhancedHoverOverlay: D.enhancedHoverOverlay || D.atfEnhancedHoverOverlay,
        }
        x && (x.destroy(), (x = aa))
        var d = R.find('.image.item.selected:not(.mirai-shoppable-scene) img[data-old-hires]').not(
          "[data-old-hires\x3d'']",
        )
        e.isjQueryObjDefined(d)
          ? D.useClickZoom
            ? (d.one('click.loadmagnifier touchstart.loadmagnifier', function (b) {
                x = new M(d, m)
                x.engageMagnifier(b, !0)
              }),
              Q
                ? d.css('cursor', 'url("' + D.staticImages.zoomInCur + '"), auto')
                : (d.css('cursor', '-webkit-zoom-in'),
                  d.css('cursor', '-moz-zoom-in'),
                  d.css('cursor', 'zoom-in')))
            : (x = new M(d, m))
          : k.isEnabled && N.logHoverZoomApplicability(b, k)
      }
    }
    var J,
      D,
      G,
      t,
      x,
      R,
      Q = navigator.userAgent.match(/msie|trident/i)
    return function (b, e, l, n) {
      J = this
      D = b
      G = e
      k.refToModel = G
      t = n
      J.render = function (b, e, d, c, l, m) {
        R = d
        x && (x.destroy(), (x = aa))
      }
      J.update = function (b) {}
      t.register('loadMagnifier', w)
      t.register('resize', w)
    }
  })
  ;('use strict')
  B.when('A', 'jQuery', 'imageBlockUtils', 'postMetric').register(
    'ImageBlockTwisterView',
    function (n, b, e, K) {
      function k(b, k, n) {
        b =
          (b = n ? n : e.getColorFromState(k.getState().hovered_variations, O)) && '' !== b
            ? b
            : O.defaultColor
        w.dispatch('updateView', { type: 'swatchHover', data: { color: b } })
        K.postCountMetric('swatchHover')
      }
      function B(b, k, n, t) {
        b =
          (b = t ? t : e.getColorFromState(k.getState().selected_variations, O)) && '' !== b
            ? b
            : O.defaultColor
        b === M.getCurrentItem().color
          ? 'function' === typeof n && n()
          : (w.dispatch('updateSelection', {
              type: 'swatchClick',
              data: { color: b },
              onload: function () {
                var b = { hasComponents: !0, components: [{ name: 'mainImage' }] }
                'function' === typeof u.markFeatureRender && u.markFeatureRender('imageblock', b)
                n()
              },
            }),
            K.postCountMetric('swatchClick'))
      }
      var H, O, M, w
      return function (b, e, u, t) {
        H = this
        O = b
        M = e
        w = t
        n.on('image-block-twister-swatch-hover', k)
        n.on('image-block-twister-swatch-click', B)
        H.render = function (b, e, k, m, d) {}
        H.update = function (b) {}
      }
    },
  )
  ;('use strict')
  B.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'ImageBlockLoader',
    'postMetric',
    'logFailedInteractionMetric',
    'postEarlyMetric',
  ).register('ImageBlockAltImageView', function (n, b, e, K, k, N, H) {
    function O(a, h, q, d) {
      if (!e.isjQueryObjDefined(a.find('.a-button-selected'))) {
        var g = p.getCurrentItem()
        if (!d || 'chromeless-video' !== g.type || !c.autoplayVideo)
          if (
            ((d = 0),
            'image' === g.type && (d = Math.max(D(g.color, g.variant), 0)),
            !(g.thumbnailIndex >= c.maxAlts && 0 != d))
          ) {
            var f = h + d
            f >= q && ((d = 0), (f = h))
            h = e.getImageHash(g.color, d, c)
            ;-1 !== h &&
              (A.dispatch('updateModel', {
                data: {
                  index: d,
                  thumbnailIndex: f,
                  variant: h.variant,
                  type: 'image',
                  shoppableScene: h.shoppableScene,
                },
              }),
              (h = a.find('.item').get(f)),
              e.selectGivenThumbnail(b(h), a))
          }
      }
    }
    function M(a, h, q) {
      if ((2 === c.unrolledImageBlockTreatment || 3 === c.unrolledImageBlockTreatment) && q)
        return a
      var g = c.colorImages && c.colorImages[h]
      h = a
      ;(2 !== c.unrolledImageBlockTreatment && 3 !== c.unrolledImageBlockTreatment) ||
        b('.thumbItemUnrolled').each(function (a) {
          ;(!b(this)[0].classList.contains('thumbTypeimage') || a >= g.length || a >= c.maxAlts) &&
            b(this).remove()
        })
      e.isDefined(g) &&
        (b.each(g, function (g, h) {
          if (a < c.maxAlts)
            if (2 === c.unrolledImageBlockTreatment || 3 === c.unrolledImageBlockTreatment) {
              a++
              var q = b('.thumbItemUnrolled')
              q[g]
                ? (q[g].querySelector('img').src = h.thumb)
                : b(
                    '\x3cli class\x3d"thumbItemUnrolled thumbTypeimage thumbIndex' +
                      g +
                      '"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-button a-button-thumbnail a-button-toggle" id\x3d"a-autoid-' +
                      a +
                      '"\x3e\x3cspan class\x3d"a-button-inner"\x3e\x3cinput class\x3d"a-button-input" type\x3d"submit" aria-labelledby\x3d"a-autoid-' +
                      a +
                      '-announce"\x3e\x3cspan class\x3d"a-button-text" aria-hidden\x3d"true" id\x3d"a-autoid-' +
                      a +
                      '-announce"\x3e \x3cimg alt\x3d"" src\x3d"' +
                      h.thumb +
                      '"\x3e \x3c/span\x3e\x3c/span\x3e\x3c/span\x3e \x3c/span\x3e\x3c/li\x3e',
                  ).appendTo(b('.regularAltImageViewLayout'))
            } else
              e.createThumbnail(
                {
                  type: 'image',
                  index: g,
                  thumbnailIndex: a,
                  variant: h.variant,
                  shoppableScene: h.shoppableScene,
                },
                h.thumb,
                r,
                'imageThumbnail',
              ),
                a++
        }),
        N.isEnabled && H.logAltImgRequestPlacedOnThumbnails(b, N, p),
        O(r, h, a, q))
      return a
    }
    function w(a, b) {
      c.useIV && e.isDefined(b.hiRes) && a.css('cursor', 'pointer')
    }
    function J(a, h) {
      if ('image' === a.type && q) {
        var g = b('#image-canvas-caption #canvasCaption'),
          d = c.staticStrings,
          f = c.colorImages,
          L = a.color,
          l = a.index
        if (e.isShoppableScenesEnabled() && a.shoppableScene) var p = d.clickSceneTagsToShopProducts
        else
          h && c.useIV
            ? (p = d.clickToExpand)
            : f[L] && f[L][l].hiRes && c.useHoverZoom
              ? ((p = c.useHoverZoomIpad
                  ? d.touchToZoom
                  : c.useClickZoom
                    ? d.clickToZoom
                    : d.rollOverToZoom),
                c.hoverZoomIndicator &&
                  (p = "\x3cimg src\x3d'" + c.staticImages.hoverZoomIcon + "'/\x3e\x26nbsp;" + p))
              : c.useIV && (p = d.clickToExpand)
        g.html(p)
      }
    }
    function D(a, b) {
      return e.getIndexForVariant(a, b, c)
    }
    function G(a, b, q) {
      var g = b.thumbnailIndex,
        e = c.colorToAsin[b.color] && c.colorToAsin[b.color].asin
      b =
        'altImageHover' === q &&
        y &&
        y.altImageIdx === g &&
        y.asin === e &&
        'swatchClick' === y.event
          ? !0
          : 'swatchHover' === q
            ? y && y.asin === e && y.event === q
            : y && y.altImageIdx === g && y.asin === e && y.event === q
      if (!b) {
        var d = '#',
          f = a.find('.imgTagWrapper img').get(0)
        f && (d = f.src)
        a = new Image()
        a.onload = function () {
          if (f) {
            f.src = d
            var a = f.width,
              b = f.height,
              c = f.naturalWidth,
              L = f.naturalHeight
            try {
              var p = (Math.abs((a / c) * L - b) / b).toFixed(2)
              0.01 < p &&
                (u.ue &&
                  (((('landing' !== q || E || h) && 'swatchClick' !== q) ||
                    u.ue.count('imageBlock-PC-hi_res_image_distortion', 1),
                  'landing' === q || 'swatchClick' === q)
                    ? u.ue.count('imageBlock-PC-hi_res_landing_image_distortion', 1)
                    : 'swatchHover' !== q || h
                      ? 'altImageHover' !== q ||
                        E ||
                        (u.ue.count('imageBlock-PC-hi_res_alt_image_distortion', 1), (E = !0))
                      : (u.ue.count('imageBlock-PC-hi_res_swatch_hover_image_distortion', 1),
                        (h = !0))),
                u.ueLogError &&
                  ((a = { logLevel: 'WARN', attribution: 'imageBlock-PC-hi_res_image_distortion' }),
                  u.ueLogError(
                    'swatchHover' === q
                      ? {
                          message:
                            '[ImageBlock Hi-Res: Size distortion for ASIN: ' +
                            e +
                            ' Event:' +
                            q +
                            ' Diff:' +
                            p.toString() +
                            ']',
                        }
                      : {
                          message:
                            '[ImageBlock Hi-Res: Size distortion for ASIN: ' +
                            e +
                            ' at altImageIdx ' +
                            g +
                            ' Event:' +
                            q +
                            ' Diff:' +
                            p.toString() +
                            ']',
                        },
                    a,
                  )))
            } catch (ja) {
              u.ueLogError &&
                ((a = {
                  logLevel: 'WARN',
                  attribution: 'imageBlock-PC-hi_res_log_distortion_catch_exception',
                }),
                u.ueLogError(ja, a))
            }
          }
        }
        '#' !== d && (a.src = d)
        y.altImageIdx = g
        y.asin = e
        y.event = q
      }
    }
    function t(a, h) {
      var g = 'a-dynamic-image'
      if (!c.acEnabled) {
        var q
        b.each(a.main, function (a, b) {
          e.isDefined(q) ||
            (q =
              parseFloat(b[1] / b[0]) <= parseFloat(c.holderRatio)
                ? ' a-stretch-vertical'
                : ' a-stretch-horizontal')
        })
        g += q
      }
      var d = e.getMaxDimensionsOfMainImage(a.main, v, c),
        f = d[0],
        L = d[1]
      d = b('\x3cdiv\x3e\x3c/div\x3e')
      f = { 'max-height': f, 'max-width': L }
      d.addClass(g)
        .css(f)
        .attr({ 'data-old-hires': a.hiRes, 'data-a-manual-replacement': 'true', onload: h })
        .data('a-dynamic-image', a.main)
      return d
    }
    function x(b, h, q) {
      var g = 'desktop-dp-atf-ib-shoppablescenes-tags-' + b
      'function' == typeof uet && uet('bb', g, { wb: 1 })
      q.attr('data-a-image-name', 'shoppable-scene:' + b)
      q = a
        .find('.mirai-scene-image-block-template')
        .clone()
        .removeClass('mirai-scene-image-block-template aok-hidden')
        .addClass('mirai-shoppable-scene')
      q.find('.mirai-scene-image-block-tag-container').attr({
        'data-csa-c-content-id': g,
        'data-csa-c-slot-id': g,
        'data-csa-c-type': 'widget',
        'data-csa-c-asin': c.mediaAsin,
        'data-csa-c-physical-id': h.shoppableScene.physicalId,
        'data-product-line': h.shoppableScene.productLine,
      })
      q.children('span').css('display', 'inline-block')
      A.dispatch('initialize-shoppable-scene', {
        index: b,
        shoppableScene: h.shoppableScene,
        imageSource: h.hiRes || h.large || h.lowRes,
        $tagPlaceholder: q.find('.mirai-scene-tag-placeholder'),
        $viewProductsButton: q.find('.mirai-scene-view-products-button'),
      })
      'MutationObserver' in u &&
        new MutationObserver(function (a, c) {
          a.forEach(function (a) {
            'childList' === a.type &&
              a.target.classList.contains('mirai-scene-image-block-tag-container') &&
              1 === a.addedNodes.length &&
              'IMG' === a.addedNodes[0].tagName &&
              '' !== a.addedNodes[0].src &&
              ((a = a.addedNodes[0]),
              'function' !== typeof a.onload &&
                (a.onload = function () {
                  n.trigger('shoppable-scene-image-loaded', {
                    index: b,
                    shoppableScene: h.shoppableScene,
                  })
                }),
              c.disconnect())
          })
        }).observe(q.find('.mirai-scene-image-block-tag-container')[0], {
          subtree: !0,
          childList: !0,
          attributes: !1,
        })
      'function' == typeof uet && uet('cf', g, { wb: 1 })
      return q
    }
    function R(b, c, h) {
      h = t(b, h)
      b =
        e.isShoppableScenesEnabled() && b.shoppableScene
          ? x(c, b, h)
          : a.find('.mainImageTemplate').clone().removeClass('template mainImageTemplate')
      b.addClass('image item itemNo' + c + ' maintain-height').attr({
        'data-csa-c-type': 'uxElement',
        'data-csa-c-element-type': 'navigational',
        'data-csa-c-action': 'image-block-main-image-hover',
        'data-csa-c-posy': c + 1,
      })
      b.find('.placeHolder').replaceWith(h)
      a.find('.list').append(b)
      n.loadImageManually(h)
      n.trigger('dp:image-block:imageBlockImageLoad', c)
      return b
    }
    function Q(a) {
      var b = v.css('height')
      null !== b && a.find('.imgTagWrapper').css('height', b)
      a.addClass('selected')
      c.imgTagWrapperClasses && a.find('.imgTagWrapper').addClass(c.imgTagWrapperClasses)
    }
    function m(a) {
      if (a.isUserGenerated) {
        var b = p.getPreviousItem(),
          c = a.variant
        e.isDefined(c) &&
          b.thumbnailIndex !== a.thumbnailIndex &&
          (N.isEnabled && H.logAltImgRequestServed(N),
          k.postCountMetric('ImageThumbnailSelectedVariant:' + c),
          0 === c.indexOf('IG') &&
            (k.postCountMetric('IGImageSelectedVariant:' + c),
            k.postCountMetric('IGImageSelectedEvent:' + a.interaction)))
      }
    }
    function d(g, q, d, f) {
      if (
        (2 !== c.unrolledImageBlockTreatment && 3 !== c.unrolledImageBlockTreatment) ||
        f ||
        'unavailable' === g.type
      ) {
        if ('image' === g.type || 'unavailable' === g.type || 'lazy-loaded' === g.type) {
          ;(l = e.isDefined(q)) && k.postCountMetric('mainImageUpdateOnTwisterVariationClick')
          d = e.getImageHash(g.color, g.index, c)
          if (-1 === d)
            return (
              (q = { data: { index: 0, thumbnailIndex: 0, variant: '', type: 'unavailable' } }),
              e.lazyLoadingRequired(g, p, c) ||
                (A.dispatch('updateModel', q), e.showUnavailable(g.color)),
              -1
            )
          f = a.find('.item.itemNo' + g.thumbnailIndex)
          e.isjQueryObjDefined(f) ||
            ((f = R(d, g.thumbnailIndex, q)),
            l ? ((h = E = !1), G(f, g, 'swatchClick')) : G(f, g, 'altImageHover'))
          Q(f)
          A.dispatch('loadMagnifier')
          J(g)
          w(f, d)
          m(g)
          n.trigger('dp:image-block:update', d)
        }
      } else if (
        ((g = c.colorImages && c.colorImages[d]),
        b('.unrolledImg').each(function (a) {
          b(this).remove()
        }),
        e.isDefined(g))
      ) {
        b.each(g, function (a, h) {
          if (a < c.maxAlts) {
            var g = b('.unrolledImg')
            g[a]
              ? b('.unrolledImg #unrolledImgNo' + a + ' img').replaceWith(
                  '\x3cimg alt\x3d"" src\x3d"' +
                    h.large +
                    '" data-a-hires\x3d"' +
                    h.hiRes +
                    '" data-a-manual-replacement\x3d"true"\x3e',
                )
              : a >= g.length &&
                b(
                  '\x3cli data-csa-c-action\x3d"image-block-main-image-hover" data-csa-c-element-type\x3d"navigational" data-csa-c-posy\x3d"' +
                    (a + 1) +
                    '" data-csa-c-type\x3d"uxElement" class\x3d"image item itemNo' +
                    a +
                    ' unrolledImg imgMedia"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-declarative" data-action\x3d"main-image-click" data-csa-c-type\x3d"widget" data-csa-c-func-deps\x3d"aui-da-main-image-click" data-main-image-click\x3d"{}" data-ux-click\x3d""\x3e \x3cdiv id\x3d"imgTagWrapperId" class\x3d"imgTagWrapper"\x3e \x3cdiv id\x3d"unrolledImgNo' +
                    a +
                    '"\x3e \x3cdiv class\x3d"a-image-container a-dynamic-image-container greyBackground" style\x3d"width:100%; height:600px;"\x3e \x3cimg alt\x3d"" src\x3d"' +
                    h.large +
                    '" data-a-hires\x3d"' +
                    h.hiRes +
                    '" data-a-manual-replacement\x3d"true"\x3e \x3c/div\x3e \x3c/div\x3e\x3c/div\x3e\x3c/span\x3e \x3c/span\x3e\x3c/li\x3e',
                ).appendTo(b('.unrolledScrollBox .list-unrolled'))
          }
        })
        n.loadHiResImage(document.querySelectorAll('.unrolledImg.imgMedia img'))
        var l = e.isDefined(q)
        l && (k.postCountMetric('mainImageUpdateOnTwisterVariationClick'), q())
      }
    }
    function l(b) {
      var h = Math.max(D(b.color, p.getCurrentItem().variant), 0)
      h = e.getImageHash(b.color, h, c)
      if (-1 === h) return e.lazyLoadingRequired(b, p, c) || e.showUnavailable(b.color), -1
      var g = a.find('.swatchHoverExp'),
        q = t(h)
      g.find('.imgTagWrapper').html(q)
      n.loadImageManually(q)
      k.postCountMetric('mainImageUpdateOnTwisterVariationHover')
      Q(g)
      G(g, b, 'swatchHover')
      n.trigger('dp:image-block:update', h)
    }
    function z(h, d) {
      e.lazyLoadingRequired(h, p, c) ||
        (b('#imageBlock').css('opacity', '1'),
        a.css('opacity', '1'),
        e.spinner(a, !1),
        a.find('li').removeClass('selected'),
        q && b('#image-canvas-caption #canvasCaption').empty(),
        e.hideUnavailable(),
        d && a.find('.list .item').remove())
    }
    function f() {
      var h = a.find('.item .imgTagWrapper'),
        q = e.getContainerHeight(v, c.holderRatio, c.holderMaxHeight)
      0 < q && (v.height(q), h.height(q))
      a.find('img.a-dynamic-image').each(function () {
        var a = b(this)
        a.data('a-manual-replacement') && n.loadDynamicImage(this)
        var h = a.data('a-dynamic-image')
        h = e.getMaxDimensionsOfMainImage(h, v, c)
        a.css({ 'max-height': h[0] + 'px', 'max-width': h[1] + 'px' })
      })
    }
    function F(a) {
      J(p.getCurrentItem(), 'mouseenter' === a.type)
    }
    var P,
      c,
      p,
      A,
      W,
      ba,
      r,
      a,
      v,
      y = {},
      C,
      I = null,
      E = !1,
      h = !1,
      q = (K = n.state('imageBlockStateData')) ? !K.shouldRemoveCaption : !0
    n.on('triggerImageAjax', function (a) {
      var b = p.getCurrentItem().color
      c.colorImages[b] || (c.colorImages[b] = a)
      a = { type: 'updatedData', data: p.getCurrentItem() }
      A.dispatch('updateView', a)
      ;(b = c.colorToAsin[b]) && b.asin && B.register(e.rankedImagesReadyEvent(b.asin))
    })
    return function (h, q, m, n) {
      P = this
      c = h
      p = q
      A = n
      c.colorImages[c.landingAsinColor] = c.colorImages[c.defaultColor]
      P.render = function (h, q, g, f, l, m, k, n) {
        a =
          2 !== c.unrolledImageBlockTreatment && 3 !== c.unrolledImageBlockTreatment
            ? g
            : b('.unrolledScrollBox')
        r = f
        v = l
        C = M(q, h, m)
        m
          ? 0 === q && G(a.find('.item.itemNo0'), p.getCurrentItem(), 'landing')
          : ((q = p.getCurrentItem()),
            e.lazyLoadingRequired(q, p, c) &&
              A.dispatch('updateModel', { data: { type: 'lazy-loaded' } }))
        z(p.getCurrentItem(), !m)
        2 === c.unrolledImageBlockTreatment || 3 === c.unrolledImageBlockTreatment
          ? 'swatchClick' === n && c && c.colorImages
            ? ((I = c.colorImages[h]), d(p.getCurrentItem(), k, h, m))
            : 'updatedData' === n &&
              c &&
              c.colorImages &&
              c.colorImages[h] !== I &&
              ((I = c.colorImages[h]), d(p.getCurrentItem(), k, h, m))
          : d(p.getCurrentItem(), k, h, m)
        return C
      }
      e.isImageBlockGridViewHoverDelayEnabled()
        ? (P.update = function (a) {
            var b = a.data
            p.setCurrentEvent(a)
            'ingress' !== b.type &&
              'swatchHover' !== a.type &&
              (p.setToPreviousItem(),
              'mouseenter' === a.type
                ? (ba && clearTimeout(ba),
                  (ba = setTimeout(function () {
                    p.setToCurrentItem(b)
                    z(a.data, !1)
                  }, e.getHoveringDelayTimer())))
                : 'mouseleave' === a.type
                  ? ba && clearTimeout(ba)
                  : 'click' === a.type && (p.setToCurrentItem(b), z(a.data, !1)))
            'swatchHover' === a.type
              ? ('ingress' !== b.type && z(a.data, !1),
                b.color === p.getCurrentItem().color
                  ? d(p.getCurrentItem(), null, b.color, !0)
                  : a.captured || -1 === l(b) || (a.captured = !0))
              : 'image' === b.type &&
                ((b.interaction = a.type),
                (b.isUserGenerated = !0),
                'mouseenter' === a.type
                  ? (k.postCountMetric(
                      'dpcc_imageThumbHovered_' + (b.thumbnailIndex + 1) + '_' + C,
                    ),
                    W && clearTimeout(W),
                    (W = setTimeout(function () {
                      d(b, null, b.color, !0)
                      c.usePeekHover || e.selectGivenThumbnail(a.$declarativeParent, r)
                    }, e.getHoveringDelayTimer())))
                  : 'mouseleave' === a.type
                    ? W && clearTimeout(W)
                    : 'click' === a.type &&
                      (d(b, null, b.color, !0),
                      e.selectGivenThumbnail(a.$declarativeParent, r),
                      k.postCountMetric('dpcc_imageThumbClicked_total'),
                      k.postCountMetric(
                        'dpcc_imageThumbClicked_' + (b.thumbnailIndex + 1) + '_' + C,
                      )))
          })
        : (P.update = function (a) {
            var b = a.data
            p.setCurrentEvent(a)
            'ingress' !== b.type && z(a.data, !1)
            'swatchHover' === a.type
              ? b.color === p.getCurrentItem().color
                ? d(p.getCurrentItem(), null, b.color, !0)
                : a.captured || -1 === l(b) || (a.captured = !0)
              : 'image' === b.type &&
                ((b.interaction = a.type),
                (b.isUserGenerated = !0),
                'mouseenter' === a.type &&
                  k.postCountMetric('dpcc_imageThumbHovered_' + (b.thumbnailIndex + 1) + '_' + C),
                d(b, null, b.color, !0),
                (c.usePeekHover && 'click' !== a.type) ||
                  (e.selectGivenThumbnail(a.$declarativeParent, r),
                  'click' === a.type &&
                    (k.postCountMetric('dpcc_imageThumbClicked_total'),
                    k.postCountMetric(
                      'dpcc_imageThumbClicked_' + (b.thumbnailIndex + 1) + '_' + C,
                    ))))
          })
      c.overrideAltImageClickAction && e.addTag('clickEnabledOnAltImages')
      A.register('imageHover', F)
      A.register('resize', f)
    }
  })
  ;('use strict')
  B.when('A', 'jQuery', 'imageBlockUtils', 'postMetric').register(
    'ImageBlockShoppableSceneView',
    function (n, b, e, u) {
      function k(e, m) {
        e = b(
          "\x3cimg src\x3d'" +
            (m ? t.staticImages.shoppableSceneDotHighlighted : t.staticImages.shoppableSceneDot) +
            "' alt\x3d''\x3e",
        )
        e.css({ display: m ? 'none' : 'inline-block' })
        e.addClass('mirai-scene-tag').addClass(m ? 'active-tag' : 'inactive-tag')
        return e
      }
      function K(e) {
        var m = b('\x3cspan\x3e')
        n.each(e.tags, function (e) {
          var d = b('\x3cdiv\x3e').css({
            position: 'absolute',
            left: 100 * e.left + '%',
            top: 100 * e.top + '%',
            height: 'auto',
            width: 'auto',
          })
          d.append(k(e, !1))
          d.append(k(e, !0))
          d.bind('mouseenter', function () {
            H(b(this).find(".mirai-scene-tag[style*\x3d'display: inline-block']"))
          })
          n.declarative.create(d, 'scenes-show-details-tags-ib', { tagId: e.link })
          m.append(d)
        })
        return m.children()
      }
      function H(b) {
        b.addClass('mirai-scene-dot-pulsate')
        n.delay(function () {
          b.removeClass('mirai-scene-dot-pulsate')
        }, 4e3)
      }
      function O(b, e) {
        b.css({ display: 'none' })
        e.css({ display: 'inline-block' })
      }
      function M(b, e, d) {
        b.eq(d).css({ display: 'inline-block' })
        e.eq(d).css({ display: 'none' })
      }
      function w(b) {
        B.when('mirai-multi-scene-view').execute(
          'mirai-scene-protected-image-selection',
          function () {
            n.trigger('mirai:scene-details-change', { physicalId: b })
          },
        )
      }
      function J() {
        var e = b("\x3cspan class\x3d'mirai-scene-view-products-button-content'\x3e"),
          m = b("\x3cimg class\x3d'item-tag'\x3e")
            .attr('src', t.staticImages.shoppableSceneViewProductsButton)
            .addClass('item-tag'),
          d = b("\x3cspan class\x3d'mirai-scene-view-products-button-text'\x3e")
        d.html(t.staticStrings.shoppableSceneViewProductsButton)
        return e.append(m).append(d)[0].outerHTML
      }
      function D(b) {
        function e() {
          b.$tagPlaceholder.replaceWith(l)
          var c = l.find('.mirai-scene-tag.active-tag'),
            e = l.find('.mirai-scene-tag.inactive-tag')
          M(c, e, 0)
          H(l.find(".mirai-scene-tag[style*\x3d'display: inline-block']"))
          R = !0
          b.$viewProductsButton.removeClass('aok-hidden')
          'function' == typeof uex &&
            uex('ld', 'desktop-dp-atf-ib-shoppablescenes-tags-' + b.index, { wb: 1 })
          x = !0
          u.postCountMetric('miraiShoppableScenes_imageLoadedCount')
        }
        if (b.shoppableScene) {
          var d = b.$viewProductsButton.find('.a-button-text')
          if (0 === d.children().length) {
            d.append(J())
            n.declarative.create(b.$viewProductsButton, 'scenes-show-details-view-products-ib', {
              tagId: b.shoppableScene.tags[0].link,
            })
            var l = K(b.shoppableScene),
              k = l.find('.mirai-scene-tag.active-tag'),
              f = l.find('.mirai-scene-tag.inactive-tag'),
              w = b.shoppableScene.physicalId,
              x = !1
            n.on('mirai:index:change', function (b) {
              b.scenePhysicalId === w &&
                ((b = b.selectedIndices[0]),
                O(k, f),
                M(k, f, b),
                H(l.find(".mirai-scene-tag[style*\x3d'display: inline-block']").eq(b)),
                (R = !0))
            })
            n.on('mirai:scene-details-change', function (b) {
              b.physicalId !== w ||
                R ||
                (O(k, f),
                M(k, f, 0),
                H(l.find(".mirai-scene-tag[style*\x3d'display: inline-block']")),
                (R = !0))
            })
            n.on('mirai:no-products-active', function (b) {
              b.scenePhysicalId === w && O(k, f)
            })
            n.on('mirai:set-first-product-active', function (b) {
              b.scenePhysicalId === w && (O(k, f), M(k, f, 0))
            })
            n.on('a:image:load:shoppable-scene:' + b.index, function () {
              x || (e(), u.postCountMetric('miraiShoppableScenes_imageLoadedViaAuiListenerCount'))
            })
            n.on('shoppable-scene-image-loaded', function (c) {
              c.index != b.index ||
                x ||
                (e(), u.postCountMetric('miraiShoppableScenes_imageLoadedViaMiraiListenerCount'))
            })
            B.when('mirai-multi-scene-view').execute(
              'mirai-scene-protected-side-sheet-initialization',
              function () {
                n.trigger('mirai:scene-side-sheet-init', {
                  icons: t.staticImages,
                  strings: t.staticStrings,
                })
                n.trigger('mirai:scene-details-init', {
                  scene: b.shoppableScene,
                  imageSource: b.imageSource,
                })
              },
            )
          }
        }
      }
      var G,
        t,
        x,
        R = !1
      return function (b, k, d, l) {
        G = this
        t = b
        x = l
        e.isShoppableScenesEnabled()
          ? (x.register('initialize-shoppable-scene', D),
            (G.render = function (b, e, d, l, c, p, k) {}),
            (G.update = function (b) {
              'mouseenter' === b.type &&
                (b.data.shoppableScene ? w(b.data.shoppableScene.physicalId) : (R = !1))
            }))
          : ((b = function () {}), (G.render = b), (G.update = b))
      }
    },
  )
  B.now().register('ShoppableSceneWeblabProvider', function () {
    return { isEnabled: !0 }
  })
  ;('use strict')
  var V =
    'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
      ? function (n) {
          return typeof n
        }
      : function (n) {
          return n &&
            'function' === typeof Symbol &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? 'symbol'
            : typeof n
        }
  B.when(
    'A',
    'jQuery',
    'Airy',
    'postMetric',
    'ImageBlockATF',
    'ImageBlockBTF',
    'logFailedInteractionMetric',
    'postEarlyMetric',
    'ShoppableSceneWeblabProvider',
  ).register('imageBlockUtils', function (n, b, e, K, k, B, H, O, M) {
    function w(a) {
      return null !== a && 'undefined' !== typeof a
    }
    function J(a) {
      var h = 0
      b.each(a, function (a, b) {
        a = parseInt(b[1], 10)
        a > h && (h = a)
      })
      return h
    }
    function D(a) {
      var h = 0
      b.each(a, function (a, b) {
        a = parseInt(b[0], 10)
        a > h && (h = a)
      })
      return h
    }
    function G(a, b, c) {
      b = b.width()
      if (c.naturalMainImageSize) return b
      a = J(a)
      0 < a && (b = Math.min(b, a))
      return b
    }
    function t(a, b, c) {
      b = b.height()
      if (c.naturalMainImageSize) return b
      a = D(a)
      0 < a && (b = Math.min(b, a))
      return b
    }
    function x(a) {
      var c
      b.each(a, function (a, b) {
        w(c) || (c = b[1] / b[0])
      })
      return c || 1
    }
    function R(a) {
      if (a) {
        if (0 < a.indexOf('.m3u8')) return 'application/x-mpegURL'
        if (0 < a.indexOf('.mp4')) return 'video/mp4'
      }
      return ''
    }
    function Q(a, c, g, f, p, l, k, n, r, v, t, u, w, y, x) {
      var h = b.extend({}, g.foresterMetadataParams)
      null !== f && (h.method += '.' + f)
      var q = []
      c.disabledViewIds && (q = c.disabledViewIds)
      x = x && x.videoBackgroundChromefulMainView ? x.videoBackgroundChromefulMainView : 'black'
      'unrolled-video-add' === y && (x = 'transparent')
      return e.embed({
        parentElement: a[0],
        streamingUrls: c.url,
        contentId: c.mediaObjectId,
        contentMinAge: Number(c.minimumAge || '') || 0,
        contentTitle: c.title,
        swfUrl: g.swfUrl,
        foresterMetadataParams: h,
        backgroundColor: x,
        flashParams: { wmode: 'transparent' },
        slateImages: { preloadSlate: c.slateUrl, postMediaSlate: c.slateUrl },
        videoAds: g.videoAds,
        bindings: {
          play: function () {
            if ('ImmersiveView' === f)
              A || ((A = !0), K.postCountMetric('dppc_chromefulVideoPlayedIV'))
            else if ((W || ((W = !0), K.postCountMetric('dppc_chromefulVideoPlayedPV')), !v)) {
              var a = K.buildNexusMetric(
                'ib.thumbnailClick',
                r,
                c.mediaObjectId,
                c.rankingStrategy,
                c.groupType,
                t,
                u,
                w,
              )
              K.emitNexusMetric(a)
            }
          },
        },
        cuePoints: [
          {
            values: c.durationSeconds - 1,
            type: 'position',
            callback: function (a, b, c) {
              p && (m(0, l, n), d(k))
            },
          },
        ],
        disabledViewIds: q,
      })
    }
    function m(a, b, c) {
      b.fadeTo(500, 0, function () {
        l(a, c)
        b.fadeTo(500, 1)
      })
    }
    function d(a) {
      a && a.toggle()
    }
    function l(a, c) {
      c = c.find('img')
      w(c[a]) && b(c[a]).click()
    }
    function z(b, c) {
      a[b] = c ? c : a[b]
      return a[b]
    }
    function f(a, c, g) {
      g = g || r
      g = g.colorImages
      if (1 > g.length || !w(g[a]) || !w(c)) return -1
      var h = -1
      b.each(g[a], function (a, b) {
        b.variant === c && (h = a)
      })
      return h
    }
    function F(a, c, g) {
      g = g || r
      g = g.colorImages
      return !(w(g) && w(g[a]) && w(g[a][c]) && w(g[a][c].main)) ||
        1 >
          b.map(g[a][c].main, function (a, b) {
            return b
          }).length
        ? -1
        : g[a][c]
    }
    function P(a, b, c, e) {
      e.parent().css('z-index', 2)
      0 !== c &&
        0 !== b &&
        ((b /= c),
        e.css('width', ''),
        e.css('height', ''),
        a > b ? e.css('width', (b / a) * 100 + '%') : e.css('height', (a / b) * 100 + '%'))
    }
    function c(a, c) {
      var h
      if ((h = a.useIV))
        h = a.colorImages && a.colorImages[c] && 0 < a.colorImages[c].length ? !0 : !1
      a = h
      H.isEnabled && ((H.IVApplicaple = a), O.logImmersiveViewApplicability(b, H))
      return a
    }
    function p() {
      return (
        0 < b('.gridImageBlockViewLayoutIn2x4').length ||
        0 < b('.gridImageBlockViewLayoutIn2x5').length ||
        0 < b('.gridImageBlockViewLayoutIn1x7').length
      )
    }
    var A,
      W,
      N,
      r = b.extend(!0, {}, k, B),
      a = {},
      v = 0,
      y = 0,
      C = /gridAltImageViewLayoutIn(\d+)x(\d+)/g,
      I = {},
      E = {}
    return {
      isDefined: w,
      isDefinedAndEmpty: function (a) {
        return (
          w(a) &&
          'object' === ('undefined' === typeof a ? 'undefined' : V(a)) &&
          0 === Object.keys(a).length
        )
      },
      isUndefinedOrEmpty: function (a) {
        return w(a)
          ? 'object' === ('undefined' === typeof a ? 'undefined' : V(a)) &&
              0 === Object.keys(a).length
          : !0
      },
      isDefinedAndNotEmpty: function (a) {
        return w(a)
          ? 'object' === ('undefined' === typeof a ? 'undefined' : V(a)) &&
              0 < Object.keys(a).length
          : !1
      },
      isjQueryObjDefined: function (a) {
        return 0 !== a.length
      },
      getAspectRatio: x,
      getMaxHeightOfMainImage: t,
      getMaxWidthOfMainImage: G,
      getMaxDimensionsOfMainImage: function (a, b, c) {
        if (c.acEnabled) return [b.height(), b.width()]
        var h = t(a, b, c)
        b = G(a, b, c)
        a = x(a)
        c = b / a
        b = Math.min(b, h * a)
        h = Math.min(h, c)
        return [h, b]
      },
      getContainerHeight: function (a, b, c) {
        var h = a.get(0)
        a = 0
        if (w(h)) {
          a = Math.min(h.offsetWidth / b, c)
          var e
          b = r.mainImageHeightPartitions
          c = r.mainImageMaxSizes
          if (w(c) && w(b)) {
            var g = 0,
              d =
                u.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            for (h = 0; h < b.length; h++) d > b[h] && (g = h + 1)
            c.length >= g && (e = c[g])
          }
          w(e) && (a = Math.min(e[1], a))
        }
        return a
      },
      getColorFromState: function (a, c) {
        if (a) {
          c = c || r
          var h = ''
          b.each(c.visualDimensions, function (b, c) {
            a[c] && (h += ' ' + a[c])
          })
          return h && h.substring(1)
        }
      },
      createThumbnail: function (a, b, c, e) {
        var h = c.find('.template').clone().removeClass('template').addClass('item'),
          d = document.createElement('img')
        d.src = b
        h.find('.placeHolder').replaceWith(d)
        ;(b = a.heroVideoVariant) &&
          'hero-image' === a.type &&
          a.variant === b &&
          h.addClass('heroImageThumbnail')
        w(e) && h.addClass(e)
        p() &&
          h &&
          ((e = document.createElement('div')),
          (e.className = 'imageBlockThumbnailImageGrayOverlay'),
          d.parentNode.insertBefore(e, d))
        n.declarative.create(h, 'thumb-action', a)
        h.attr &&
          (h.attr('data-ux-click', ''),
          a.type && a.type.match(/video/)
            ? (h.attr('data-csa-c-type', 'uxElement'),
              h.attr('data-csa-c-element-type', 'navigational'),
              h.attr('data-csa-c-action', 'image-block-alt-image-clickToImmersiveVideos'))
            : (h.attr('data-csa-c-type', 'uxElement'),
              h.attr('data-csa-c-element-type', 'navigational'),
              h.attr('data-csa-c-action', 'image-block-alt-image-hover')),
          h.attr('data-csa-c-posy', a.thumbnailIndex + 1))
        c.append(h)
        return h
      },
      updateImageThumbnailOverlay: function (a, b, c) {
        a.find('.textMoreImages').append(c.length - b.thumbnailIndex + '+')
      },
      selectGivenThumbnail: function (a, b) {
        a = a.find('.a-button')
        b.find('.a-button').removeClass('a-button-selected').removeClass('a-button-focus')
        a.addClass('a-button-selected').addClass('a-button-focus')
      },
      createAiryInstanceForChromeful: function (a, b, c, e, d, f, p, l) {
        Q(a, b, c, e, d, f, p, l, 0, 1, '', '', '')
      },
      createAiryInstanceForChromefulNotUseTabbedImmersiveView: Q,
      loadMediaIntoAiry: function (a, b, c, e) {
        a &&
          a.getMediaSourceInfo() !== b.url &&
          (e
            ? a.loadMedia
              ? ((N = {
                  mediaSourceInfo: [b.url],
                  contentId: b.mediaObjectId,
                  refTag: 'vse_ib_tablet_web',
                }),
                a.loadMedia(N))
              : a.play({
                  videoUrl: b.url,
                  imageUrl: b.slateUrl,
                  mimeType: 'video/mp4',
                  contentId: b.mediaObjectId,
                  rankingStrategy: b.rankingStrategy,
                  refTag: 'vse_ib_tablet_web',
                })
            : a.loadMedia
              ? a.loadMedia({
                  mediaSourceInfo: b.url,
                  contentId: b.mediaObjectId,
                  contentMinAge: Number(b.minimumAge || '') || 0,
                  contentTitle: b.title,
                  slateImages: { preloadSlate: b.slateUrl, postMediaSlate: b.slateUrl },
                })
              : a.setInitialData({
                  videoUrl: b.url,
                  mimeType: R(b.url),
                  contentId: b.mediaObjectId,
                  rankingStrategy: b.rankingStrategy,
                  imageUrl: b.slateUrl,
                  aciContentId: b.aciContentId,
                }))
      },
      showUnavailable: function (a) {
        a &&
          (b('#imageBlock .unvailableVariation').html(a),
          b('#imageBlock .variationUnavailable').show())
      },
      hideUnavailable: function () {
        b('#imageBlock .variationUnavailable').hide()
      },
      fadeToThumbnail: m,
      toggleVideoCaption: d,
      selectThumbnail: l,
      spinner: function (a, c) {
        var e = b('#imageBlock .a-spinner').parent()
        0 === e.length &&
          ((e = b('\x3cdiv\x3e\x3c/div\x3e').append(
            b('\x3cspan\x3e\x3c/span\x3e').addClass('a-spinner').addClass('a-spinner-medium'),
          )),
          a.append(e),
          e.css({
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
            '-webkit-transform': 'translate3d(-50%, -50%, 0)',
            'z-index': '3',
            width: '48px',
            height: '48px',
            border: '8px solid #FFFFFF',
            '-webkit-border-radius': '20px',
            '-moz-border-radius': '20px',
            'border-radius': '100%',
          }))
        c ? e.show() : e.hide()
        return e
      },
      rankedImagesReadyEvent: function (a) {
        return 'ranked-images-ready-for-' + a
      },
      ajaxState: z,
      getIndexForVariant: f,
      getImageHash: F,
      lazyLoadingRequired: function (a, b, c) {
        b = Math.max(f(a.color, b.getCurrentItem().variant, c), 0)
        b = -1 !== F(a.color, b, c)
        a = c.colorToAsin[a.color] && c.colorToAsin[a.color].asin
        a = !a || 'success' !== z(a)
        return !c.lazyLoadExperienceDisabled && !b && a
      },
      lazyLoadOnHoverEnabled: function (a) {
        return !a.lazyLoadExperienceOnHoverDisabled
      },
      updateAspectRatio: P,
      repositionVideoBanner: function (a, b, c, e) {
        setTimeout(function () {
          var c = a.width() / a.height()
          P(c, 16, 9, b)
        }, e || 0)
      },
      getVideosCount: function (a, b) {
        return b.useChildVideos && b.colorToVideo[a]
          ? b.colorToVideo[a].length
          : b.videos
            ? b.videos.length
            : 0
      },
      getVideoHash: function (a, b, c) {
        if (c.useChildVideos) {
          if (!w(c.colorToVideo)) return -1
          a = c.colorToVideo[a]
        } else a = c.videos
        return w(a) && w(a[b]) && w(a[b].url) ? a[b] : -1
      },
      isImmersiveViewEnabled: c,
      playVideoInImmersiveView: function (a, b) {
        return c(a, b) && a.useTabbedImmersiveView
      },
      useTabbedImmersiveView: function (a) {
        return a.useTabbedImmersiveView
      },
      getMediaSourceInfo: function () {
        return w(N) ? N.mediaSourceInfo[0] : ''
      },
      getNilgiriServiceAjaxRequest: function (a, b, c) {
        return {
          requester: 'DetailPageTablet',
          marketplaceID: c.marketPlaceID,
          clientPrefix: 'ImageBlock_tablet',
          locale: c.languageCode,
          page: 'DetailPageTablet',
          placement: 'ImageBlock',
          metadata: { shouldPreload: !1 },
          video: { videoURL: c.url, imageURL: c.slateUrl },
        }
      },
      addTag: function (a) {
        u.ue && u.ue.tag && u.ue.tag(a)
      },
      isShoppableScenesEnabled: function () {
        return M.isEnabled && 0 < b('.mirai-scene-image-block-template').length
      },
      isImageBlockGridViewDisplayEnabled: p,
      isImageBlockGridViewHoverDelayEnabled: function () {
        return (
          0 < b('.gridImageBlockViewLayoutIn2x4').length ||
          0 < b('.gridImageBlockViewLayoutIn2x5').length
        )
      },
      getHoveringDelayTimer: function () {
        return v
      },
      updateThumbnailHoverDelay: function (a) {
        if (w(a)) {
          v = 0
          var b = a.closest('li')
          b = b.parent().children('li').filter(':not(.aok-hidden, .template, .pos-360)').index(b)
          if (-1 !== b) {
            var c = y
            a = a.closest('ul').attr('class')
            a === aa
              ? (c = !1)
              : ((a = C.exec(a)),
                null === a || 3 !== a.length
                  ? (c = !1)
                  : ((a = a[2]), (c = Math.floor(c / a) > Math.floor(b / a))))
            c && (v = 100)
            y = b
          }
        }
      },
      setDimensionIngressData: function (a, b, c) {
        I[a] = b
        E[a] = c
      },
      isDimensionIngressEnabled: function (a) {
        return !!I[a]
      },
      getDimensionVariantList: function (a) {
        return E[a]
      },
      logError: function (a, b, c, e) {
        u.ueLogError && u.ueLogError(e, { logLevel: a, attribution: b, message: c })
      },
    }
  })
  ;('use strict')
  B.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'ImageBlockLoader',
    'postMetric',
    'vse_ns_videoPlayer',
  ).register('ImageBlockVideoView', function (n, b, e, K, k, N) {
    function H(c, d, f, g) {
      !a.autoplayVideo || ma || a.useChromelessVideoPlayer
        ? !e.isjQueryObjDefined(c.find('.a-button-selected')) &&
          ((f = v.getCurrentItem()),
          !g || a.prioritizeVideos || ('chromeless-video' === f.type && a.autoplayVideo)) &&
          ((g = e.getVideoHash(f.color, 0, a)),
          -1 === g ||
            f.thumbnailIndex >= a.maxAlts - 1 ||
            ((d += 0),
            y.dispatch('updateModel', {
              data: {
                index: 0,
                thumbnailIndex: d,
                variant: g.variant,
                type: a.useChromelessVideoPlayer ? 'chromeless-video' : 'chromeful-video',
              },
            }),
            (d = c.find('.item').get(d)),
            e.selectGivenThumbnail(b(d), c)))
        : (e.selectGivenThumbnail(c.find('img:last'), c),
          e.fadeToThumbnail(c.find('img').length - 1, h, c))
    }
    function O(b) {
      var c = v.getCurrentItem().color
      if (a.useChildVideos && !a.colorToVideo[c]) {
        var d = function () {
          if (b) {
            a.colorToVideo[c] = b
            var e = { type: 'updatedData', data: v.getCurrentItem() }
            y.dispatch('updateView', e)
          }
        }
        a.lazyLoadExperienceDisabled
          ? d()
          : B.when(e.rankedImagesReadyEvent(a.colorToAsin[c].asin)).execute(function () {
              d()
            })
      }
    }
    function M(b) {
      b &&
        ((a.notShowVideoCount = b),
        (b = { type: 'updatedData', data: v.getCurrentItem() }),
        y.dispatch('updateView', b))
    }
    function w(b) {
      if (!a.useChildVideos)
        return e.lazyLoadingRequired(v.getCurrentItem(), v, a) ? void 0 : a.videos
      if (a.colorToVideo[b]) return a.colorToVideo[b]
      var c = a.colorToAsin[b]
      if (c && c.asin) {
        var d = {}
        d.params = {
          asin: c.asin,
          productGroupID: a.productGroupID,
          useAiryVideoPlayer: !0,
          useChromelessVideoPlayer: a.useChromelessVideoPlayer,
          isUDP: a.isUDP,
        }
        a.isDPXFeatureEnabled ||
          ((d.success = function (a) {
            O(a)
          }),
          K.load('/gp/product/features/apparel-main-image/videos.html', d))
        return a.colorToVideo && a.colorToVideo[b]
      }
    }
    function J(b) {
      g &&
        null === b &&
        2 !== a.unrolledImageBlockTreatment &&
        3 !== a.unrolledImageBlockTreatment &&
        (g.hide(), I.parent().css('z-index', -1), E && E.hide())
    }
    function D(b, c, d) {
      c = h.width() / h.height()
      var f = parseInt(b.videoWidth, 10),
        p = parseInt(b.videoHeight, 10)
      e.updateAspectRatio(c, f, p, I)
      if (g && 'unrolled-video-add' !== d) g.show(), e.loadMediaIntoAiry(g, b, L, a.tabletWeb)
      else if (a.tabletWeb) g = U
      else {
        if ('unrolled-video-add' === d) {
          g = U
          return
        }
        if (null === U || U === aa)
          Y = setInterval(function () {
            g = U
            g !== aa &&
              null !== g &&
              (g.show(),
              e.loadMediaIntoAiry(g, b, L, a.tabletWeb),
              G(),
              m(g),
              clearInterval(Y),
              (Y = null))
          }, 500)
        else if (((g = U), g !== aa && null !== g)) {
          g.show()
          e.loadMediaIntoAiry(g, b, L, a.tabletWeb)
          G()
          m(g)
          return
        }
      }
      G()
      m(g)
    }
    function G() {
      if (2 !== a.unrolledImageBlockTreatment && 3 !== a.unrolledImageBlockTreatment)
        if (e.useTabbedImmersiveView(a)) {
          if (1 < e.getVideosCount(v.getCurrentItem().color, a) && E) {
            if (e.isDefined(q)) {
              E.show()
              return
            }
            q = b('\x3ca class\x3d"more-videos"\x3e\x3c/a\x3e')
              .attr('href', '#')
              .text(a.staticStrings.watchMoreVideos)
            E.find('#videoCaption').append(q)
            n.declarative.create(q, 'videoIngressClick', S)
          }
          e.playVideoInImmersiveView(a, v.getCurrentItem().color) &&
            (n.declarative.create(I, 'videoIngressClick', S),
            I.attr && I.attr('data-ux-click', ''),
            I.children().css('z-index', '-1'),
            I.css('display', 'inline-block'))
        } else E && (E.find('#videoCaption').text(a.staticStrings.playVideo), E.show())
    }
    function t(b, c) {
      if (
        'chromeful-video' === b.type ||
        'chromeless-video' === b.type ||
        'unrolled-video-add' === c
      ) {
        var d = e.getVideoHash(b.color, b.index, a)
        if (-1 === d) return -1
        'chromeful-video' === b.type && D(d, b.thumbnailIndex + 1, c)
      }
    }
    function x(c, d, f) {
      if ((2 === a.unrolledImageBlockTreatment || 3 === a.unrolledImageBlockTreatment) && f)
        return c
      var h = w(d)
      d = c
      var g = b('.unrolledImg'),
        l = e.isDefined(h) && 0 < h.length && a.alwaysIncludeVideo ? 1 : 0
      e.isDefined(h) &&
        0 < h.length &&
        !a.alwaysIncludeVideo &&
        c === a.maxAlts &&
        k.postCountMetric('IBVideoDrop')
      g.length > a.maxAlts &&
        g.each(function (c) {
          c >= a.maxAlts && b(this).remove()
        })
      l &&
        c === a.maxAlts &&
        (2 === a.unrolledImageBlockTreatment || 3 == a.unrolledImageBlockTreatment
          ? (b('.thumbItemUnrolled').last().remove(), b('.unrolledImg').last().remove())
          : C.find('.item:last').remove(),
        c--)
      e.isDefined(h) &&
        (b.each(h, function (d, f) {
          if (c < a.maxAlts) {
            if (2 === a.unrolledImageBlockTreatment || 3 === a.unrolledImageBlockTreatment) {
              var g = a.useChromelessVideoPlayer ? 'chromeless-video' : 'chromeful-video'
              b(
                '\x3cli class\x3d"thumbItemUnrolled thumbType' +
                  g +
                  ' thumbIndex' +
                  d +
                  '"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-button a-button-thumbnail a-button-toggle" id\x3d"a-autoid-' +
                  c +
                  '"\x3e\x3cspan class\x3d"a-button-inner"\x3e\x3cinput class\x3d"a-button-input" type\x3d"submit" aria-labelledby\x3d"a-autoid-' +
                  c +
                  '-announce"\x3e\x3cspan class\x3d"a-button-text" aria-hidden\x3d"true" id\x3d"a-autoid-' +
                  c +
                  '-announce"\x3e \x3cimg alt\x3d"" src\x3d"' +
                  f.thumb +
                  '"\x3e \x3c/span\x3e\x3c/span\x3e\x3c/span\x3e \x3c/span\x3e\x3c/li\x3e',
              ).appendTo(b('ul.regularAltImageViewLayout'))
              b(
                '\x3cli data-csa-c-action\x3d"image-block-main-image-hover" data-csa-c-element-type\x3d"navigational" data-csa-c-posy\x3d"' +
                  c +
                  '" data-csa-c-type\x3d"uxElement" class\x3d"image item itemNo' +
                  c +
                  ' unrolledImg videoMedia"\x3e\x3cspan class\x3d"a-list-item"\x3e \x3cspan class\x3d"a-declarative" data-action\x3d"main-image-click" data-csa-c-type\x3d"widget" data-csa-c-func-deps\x3d"aui-da-main-image-click" data-main-image-click\x3d"{}" data-ux-click\x3d"" \x3e \x3cdiv id\x3d"imgTagWrapperId" class\x3d"imgTagWrapper"\x3e\x3cdiv id\x3d"unrolledImgNo' +
                  c +
                  '" class\x3d"videoIndex' +
                  d +
                  '"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/span\x3e\x3c/span\x3e\x3c/li\x3e',
              ).appendTo(b('.unrolledScrollBox .list-unrolled'))
              a.dp60InLastPositionUnrolledImageBlock ||
                2 !== a.dp60VideoPosition ||
                R(b('.regularAltImageViewLayout'), a.dp60VideoPosition)
            } else {
              g = a.useChromelessVideoPlayer ? 'chromeless-video' : 'chromeful-video'
              var p = { type: g, index: d, thumbnailIndex: c, variant: f.variant }
              S = { type: 'video-ingress', index: d, thumbnailIndex: c, variant: f.variant }
              e.useTabbedImmersiveView(a) &&
                ('chromeful-video' === g &&
                  ((ka += ' videoBlockIngress  videoBlockDarkIngress'),
                  (f.thumb = f.thumb.replace('_PKmb-play-button-overlay-thumb', ''))),
                a.altsOnLeft || (ka += ' a-align-top'))
              e.isImageBlockGridViewDisplayEnabled() && (ka += ' videoImageBlockGridView')
              e.createThumbnail(p, f.thumb, C, ka)
              2 === a.dp60VideoPosition && R(C, a.dp60VideoPosition)
              e.useTabbedImmersiveView(a) &&
                (Q(C.find('.videoBlockIngress img'), a.videoIngressATFSlateThumbURL),
                (d = 1 < h.length ? 'multiple-videos' : 'one-video'),
                (p =
                  !0 === a.notShowVideoCount
                    ? a.staticStrings.multipleVideos
                    : 1 < h.length
                      ? h.length + ' ' + a.staticStrings.multipleVideos
                      : a.staticStrings.singleVideo) &&
                  C.find('.videoBlockIngress')
                    .append(C.find('#videoCount_template').clone().text(p).attr('id', 'videoCount'))
                    .addClass(d))
              f = k.buildNexusMetric(
                'ib.thumbnailRender',
                c + 1,
                f.mediaObjectId,
                f.rankingStrategy,
                f.groupType,
                da,
                T,
                X,
                ea,
              )
              k.emitNexusMetric(f)
              ja ||
                ((ja = !0),
                k.postCountMetric(
                  'chromeless-video' === g
                    ? 'dppc_chromelessVideoAvailable'
                    : 'dppc_chromefulVideoAvailable',
                ))
            }
            c++
          }
          if (e.useTabbedImmersiveView(a)) return !1
        }),
        H(C, d, c, f),
        P(p),
        a.imageBlockRenderingStartTime &&
          k.postTimeMetric(
            'vse_desktop_ib_video_ingress_enable_duration',
            n.now() - a.imageBlockRenderingStartTime,
          ))
      return c
    }
    function R(c, e) {
      if (0 !== e)
        if (2 === a.unrolledImageBlockTreatment || 3 === a.unrolledImageBlockTreatment) {
          var d = a.useChromelessVideoPlayer ? 'chromeless-video' : 'chromeful-video',
            f = c.children('.thumbTypeimage')
          c = c.children('.thumbType' + d)
          f && c && f[e - 1] && b(f[e - 1]).before(c[0])
          c = b('.unrolledScrollBox .list-unrolled')
          f = c.children('.unrolledImg.imgMedia')
          c = c.children('.unrolledImg.videoMedia')
          f && c && f[e - 1] && b(f[e - 1]).before(c[0])
          b('.unrolledScrollBox .list-unrolled')
            .children('.unrolledImg')
            .each(function (a) {
              for (var c = null, e = 0; e < this.classList.length; e++)
                this.classList[e].includes('itemNo') && (c = e)
              null !== c &&
                b(this)
                  .removeClass(this.classList[c])
                  .addClass('itemNo' + a)
              this.querySelectorAll('div')[1].id = 'unrolledImgNo' + a
            })
        } else
          (f = c.children('.imageThumbnail')),
            (c = c.children('.videoBlockIngress')),
            f && c && f[e - 1] && b(f[e - 1]).before(c[0])
    }
    function Q(a, b) {
      var c = a.attr('src')
      c &&
        b &&
        (a.attr('src', b),
        (b = new Image()),
        (b.onload = function (b) {
          a.attr('src', c)
        }),
        (b.src = c))
    }
    function m(b) {
      a.autoplayVideo &&
        b &&
        !ma &&
        (E && e.toggleVideoCaption(E), b.setVolume(0), b.show(), b.play(), (ma = !0))
    }
    function d(c) {
      g && g.pause()
      c.data = S
      c.clickTimeStamp = c.$event.timeStamp
      var e = 'a' === c.targetTag ? 'dpcc_videoIngressLink' : 'dpcc_videoIngressSlate'
      y.dispatch('imageClick', c)
      k.postTimeMetric('dpcc_vse_videoingressclick', c.$event.timeStamp)
      c = k.buildNexusMetric(
        'ib.thumbnailClick',
        c.data.thumbnailIndex + 1,
        a.videos[0].mediaObjectId,
        a.videos[0].rankingStrategy,
        a.videos[0].groupType,
        da,
        T,
        X,
        ea,
      )
      k.emitNexusMetric(c)
      k.postCountMetric(e)
      b('#main-video-container .vjs-control-bar').css('display', 'none')
      b('#main-video-container .vjs-poster').css('display', 'inline-block')
    }
    function l(a) {
      null !== g &&
        g !== aa &&
        (g.frame && g.frame.remove(), (g = null), U.frame && U.frame.remove(), (U = null))
      U = a.player
      b('#main-video-container .vse-airy-container.vse-player-container').css('min-width', 'auto')
      U.hide = function () {
        U.pause()
        n.$('#main-video-container').find('.vse-player-container').hide()
      }
      U.show = function () {
        n.$('#main-video-container').find('.vse-player-container').show()
      }
      U.getMediaSourceInfo = function () {
        return e.getMediaSourceInfo()
      }
    }
    function z(c, f, g, p, l, k) {
      J(k)
      I = null !== k ? b('#unrolledImgNo' + k.thumbnailIndex) : p.find('#main-video-container')
      sa && (E = null !== k ? '' : I.parent().find('#video-canvas-caption'))
      h = null !== k ? b('.unrolledScrollBox') : b('#main-image-container')
      null === k &&
        e.isImageBlockGridViewDisplayEnabled() &&
        (I.addClass('videoCenter'), p.find('#video-outer-container').addClass('videoWrapperCenter'))
      da = u.location.href
      c = v.getCurrentItem().color
      !0 === l
        ? (T = a.mediaAsin)
        : ((T = a.colorToAsin[c] && a.colorToAsin[c].asin), (T = e.isDefined(T) ? T : a.mediaAsin))
      a.useChromelessVideoPlayer || I.addClass('chromeful-container')
      null !== k ? t(k, 'unrolled-video-add') : t(v.getCurrentItem(), '')
      e.useTabbedImmersiveView(a) && n.declarative('videoIngressClick', ['click'], d)
      if (-1 !== m && null !== k) {
        c = v.getCurrentItem().color
        var m = e.getVideoHash(c, k.index, a)
        l = {
          requester: 'MediaBlockSoftlines',
          marketplaceID: m.marketPlaceID,
          clientPrefix: 'mbSoftlines' + k.thumbnailIndex,
          locale: m.languageCode,
          page: 'Detail',
          metadata: { placementcontext: 'mb_sl', alwaysSetInitialVideo: !1 },
          placement: 'ImageBlock',
          video: { videoURL: m.url, imageURL: m.slateUrl },
          product: { contentID: ba(a, c), contentIDType: 'ASIN' },
        }
        N.get(
          n,
          '#unrolledImgNo' + k.thumbnailIndex,
          l,
          function () {
            n.$('#unrolledImgNo' + k.thumbnailIndex)
              .find('.vse-player-container')
              .show()
          },
          function () {
            n.$('#imageBlock #altImages ul').find('li.videoThumbnail').hide()
          },
        )
      }
    }
    function f(a, c) {
      function e() {
        var a = Math.floor((C.width() - 1) / p)
        return f ? a - 1 : a
      }
      function d(a) {
        a = e()
        c.slice(a).hide()
        c.slice(0, a).show()
        c.find('.textMoreImages').remove()
        c.removeClass('overlayRestOfImages')
        c.find('img').each(function () {
          b(this).parent().attr('aria-hidden', 'true')
        })
        if (a < c.length) {
          var d = a - 1
          a = c.eq(d)
          c.eq(d).find('img').parent().attr('aria-hidden', 'false')
          d = c.length - d
          d = b('\x3cspan\x3e')
            .addClass('textMoreImages')
            .text(d + '+')
          a.find('img').after(d)
          a.addClass('overlayRestOfImages')
        }
      }
      var f = 0 != C.find('.item.videoThumbnail').length,
        h = c.eq(0).width(),
        g = c.eq(1).position().left - c.eq(0).position().left - h,
        p = h + g
      d()
      a.register('resize', d)
    }
    function F(a) {
      var b = C.find('.item.imageThumbnail')
      if (!(1 >= b.length)) {
        var c = b.eq(0).find('img').get(0)
        c !== aa &&
          c.decode().then(function () {
            f(a, b)
          })
      }
    }
    function P(a) {
      try {
        if (!a) return !1
        na = a
        fa = document.querySelectorAll('#imageBlock #altImages ul li.videoThumbnail')
        a = { root: null, rootMargin: '0%', threshold: 0.75 }
        null !== la && la.disconnect()
        0 < fa.length && (la = new IntersectionObserver(c, a))
        fa.forEach(function (a) {
          la.observe(a)
        })
      } catch (ua) {
        k.postCountMetric('ib_dsktp_thumb_impr_intersection_obs_failed')
      }
    }
    function c(a) {
      na(a, ra, qa, fa, pa)
    }
    function p(a, c, e, d, f) {
      try {
        b.each(a, function (a, h) {
          var g = b(d).index(h.target)
          h.isIntersecting
            ? ha[g] ||
              (ha[g] = setTimeout(function () {
                c = c.slice()
                c.push(g)
                e = c.sort(function (a, b) {
                  return a - b
                })
                var a = A(e, f)
                if (0 !== a.length && 0 !== e.length) {
                  var b = v.getCurrentItem().color
                  b = w(b)
                  W(b, a)
                  delete ha[g]
                }
              }, 1e3))
            : (clearTimeout(ha[g]),
              delete ha[g],
              (c = c.filter(function (a) {
                return a !== g
              })),
              (e = c.sort(function (a, b) {
                return a - b
              })))
        })
      } catch (wa) {
        k.postCountMetric('ib_dsktp_thumbnail_on_intersection_failed')
      }
    }
    function A(a, b) {
      return (b = a =
        a.slice().filter(function (a) {
          return 0 > b.indexOf(a)
        }))
    }
    function W(a, c) {
      try {
        if (!a || !c || 0 === a.length || 0 === c.length) return !1
        b.each(c, function (b, c) {
          if ((c = 1 === fa.length ? a[0] : a[c]))
            (b = k.buildNexusMetric(
              'ib.thumbnailImpression',
              b + 1,
              c.mediaObjectId,
              c.rankingStrategy,
              c.groupType,
              u.location.href,
              T,
              X,
              ea,
            )),
              k.emitNexusMetric(b)
        })
      } catch (va) {
        k.postCountMetric('ib_dsktp_thumbnail_impression_failed')
      }
    }
    function ba(a, b) {
      if (a) {
        if (a.colorToAsin && a.colorToAsin[b] && a.colorToAsin[b].asin) return a.colorToAsin[b].asin
        if (a.mediaAsin) return a.mediaAsin
      }
      return ''
    }
    var r,
      a,
      v,
      y,
      C,
      I,
      E,
      h,
      q,
      g,
      L,
      S,
      ca,
      U,
      T,
      da,
      X,
      ea,
      V,
      ia,
      Z,
      ja = !1,
      ma = !1,
      ka = 'videoThumbnail',
      Y = null,
      la = null,
      qa,
      pa = [],
      fa,
      ra = [],
      na = null,
      oa = n.state('imageBlockStateData'),
      sa = oa ? !oa.shouldRemoveCaption : !0,
      ha = {}
    return function (c, d, f, g) {
      r = this
      a = c
      v = d
      y = g
      L = a.airyConfig
      X = a.contentWeblab && a.contentWeblab + ':' + a.contentWeblabTreatment
      a.colorToVideo = {}
      a.colorToVideo[a.landingAsinColor] = a.colorToVideo[a.defaultColor] = a.videos
      a.tabletWeb
        ? ((V = 'tablet'), (ea = 'applicationType.ImageBlock.vse_ib_tablet_web'))
        : n.capabilities.tablet
          ? ((V = 'tablet'),
            n.capabilities.isAmazonApp && (ea = 'applicationType.ImageBlock.vse_ib_tablet_app'))
          : ((V = 'desktop'), (ea = 'desktop_web.ImageBlock.vse_ib_iv'))
      r.render = function (c, d, f, g, h, p) {
        null !== Y &&
          (clearInterval(Y),
          (Y = null),
          I && I.parent && I.parent().css('z-index', -1),
          E && E.hide && E.hide())
        var l = []
        if (2 === a.unrolledImageBlockTreatment || 3 === a.unrolledImageBlockTreatment) {
          C = b('ul.regularAltImageViewLayout')
          ca = x(d, c, p)
          l = []
          d = b('.thumbItemUnrolled').filter(function () {
            return (
              this.classList.contains('thumbTypechromeful-video') ||
              this.classList.contains('thumbTypechromeless-video')
            )
          })
          for (var k = 0; k < d.length; k++) {
            var m = d[k].classList.contains('thumbTypechromeful-video')
                ? 'chromeful-video'
                : 'chromeless-video',
              q = Number(d[k].classList[2].slice(10)),
              r = b('.thumbItemUnrolled').index(d[k])
            l.push({ color: c, thumbnailIndex: r, type: m, varient: 'MAIN', index: q })
          }
          for (k = 0; k < l.length; k++) z(c, f, g, h, p, l[k])
        } else
          (C = g),
            (ca = x(d, c, p)),
            z(c, f, g, h, p, null),
            (c = v.getCurrentItem().color),
            (f = e.getVideoHash(c, 0, a)),
            -1 !== f &&
              ((c = a.tabletWeb
                ? e.getNilgiriServiceAjaxRequest(a, c, f)
                : {
                    requester: 'MediaBlockSoftlines',
                    marketplaceID: f.marketPlaceID,
                    clientPrefix: 'mbSoftlines',
                    locale: f.languageCode,
                    page: 'Detail',
                    metadata: { placementcontext: 'mb_sl', alwaysSetInitialVideo: !1 },
                    placement: 'ImageBlock',
                    video: { videoURL: f.url, imageURL: f.slateUrl },
                    product: { contentID: ba(a, c), contentIDType: 'ASIN' },
                  }),
              N.get(
                n,
                '#main-video-container',
                c,
                function () {
                  n.$('#main-video-container').find('.vse-player-container').hide()
                },
                function () {
                  n.$('#imageBlock #altImages ul').find('li.videoThumbnail').hide()
                },
              ))
        a.collapsibleThumbnails && F(y)
        return ca
      }
      r.setupIntersectionObserverToWatchVideoThumbnail = P
      r.emitMultipleImpressionMetric = W
      e.isImageBlockGridViewHoverDelayEnabled()
        ? (r.update = function (b) {
            null !== Y &&
              (clearInterval(Y),
              (Y = null),
              I && I.parent && I.parent().css('z-index', -1),
              E && E.hide && E.hide())
            var c = b.data
            'ingress' === c.type ||
              'swatchHover' === b.type ||
              e.lazyLoadingRequired(c, v, a) ||
              (v.setToPreviousItem(),
              'mouseenter' === b.type
                ? (Z && clearTimeout(Z),
                  (Z = setTimeout(function () {
                    v.setToCurrentItem(c)
                    J(null)
                  }, e.getHoveringDelayTimer())))
                : 'mouseleave' === b.type
                  ? Z && clearTimeout(Z)
                  : 'click' === b.type && (v.setToCurrentItem(c), J(null)))
            if ('swatchHover' === b.type)
              'ingress' === c.type || e.lazyLoadingRequired(c, v, a) || J(null),
                c.color === v.getCurrentItem().color
                  ? t(v.getCurrentItem(), '')
                  : b.captured ||
                    (e.lazyLoadingRequired(c, v, a) &&
                      !e.lazyLoadOnHoverEnabled(a) &&
                      t(v.getCurrentItem(), ''))
            else if ('chromeful-video' === c.type) {
              var d = e.getVideoHash(c.color, c.index, a)
              'mouseenter' === b.type
                ? (k.postCountMetric('dpcc_videoThumbHovered_' + (c.thumbnailIndex + 1) + '_' + ca),
                  (d = k.buildNexusMetric(
                    'ib.thumbnailHover',
                    c.thumbnailIndex + 1,
                    d.mediaObjectId,
                    d.rankingStrategy,
                    d.groupType,
                    da,
                    T,
                    X,
                    ea,
                  )),
                  k.emitNexusMetric(d),
                  ia && clearTimeout(ia),
                  (ia = setTimeout(function () {
                    t(c, '')
                    !a.usePeekHover &&
                      n.$(b.$currentTarget).closest('li').hasClass('videoThumbnail') &&
                      e.selectGivenThumbnail(b.$declarativeParent, C)
                  }, e.getHoveringDelayTimer())))
                : 'mouseleave' === b.type
                  ? ia && clearTimeout(ia)
                  : 'click' === b.type &&
                    (t(c, ''),
                    n.$(b.$currentTarget).closest('li').hasClass('videoThumbnail') &&
                      (e.selectGivenThumbnail(b.$declarativeParent, C),
                      (d = k.buildNexusMetric(
                        'ib.thumbnailClick',
                        c.thumbnailIndex + 1,
                        d.mediaObjectId,
                        d.rankingStrategy,
                        d.groupType,
                        da,
                        T,
                        X,
                        ea,
                      )),
                      ((!e.useTabbedImmersiveView(a) && 'chromeless-video' === c.type) ||
                        'tablet' == V) &&
                        k.emitNexusMetric(d),
                      e.useTabbedImmersiveView(a) &&
                        (k.emitNexusMetric(d),
                        k.postCountMetric(
                          'dpcc_videoThumbClicked_' + (c.thumbnailIndex + 1) + '_' + ca,
                        ),
                        (S.action = 'videoIngressClick'),
                        (S.clickTimeStamp = b.$event.timeStamp),
                        (S.$event = b.$event),
                        (S.$currentTarget = b.$currentTarget),
                        y.dispatch('videoIngressClick', S),
                        k.postTimeMetric('dpcc_vse_videoingressclick', b.$event.timeStamp))))
            }
          })
        : (r.update = function (b) {
            null !== Y &&
              (clearInterval(Y),
              (Y = null),
              I && I.parent && I.parent().css('z-index', -1),
              E && E.hide && E.hide())
            var c = b.data
            'ingress' === c.type || e.lazyLoadingRequired(c, v, a) || J(null)
            if ('swatchHover' === b.type)
              c.color === v.getCurrentItem().color
                ? t(v.getCurrentItem(), '')
                : b.captured ||
                  (e.lazyLoadingRequired(c, v, a) &&
                    !e.lazyLoadOnHoverEnabled(a) &&
                    t(v.getCurrentItem(), ''))
            else if ('chromeful-video' === c.type) {
              var d = e.getVideoHash(c.color, c.index, a)
              if ('mouseenter' === b.type) {
                k.postCountMetric('dpcc_videoThumbHovered_' + (c.thumbnailIndex + 1) + '_' + ca)
                var f = k.buildNexusMetric(
                  'ib.thumbnailHover',
                  c.thumbnailIndex + 1,
                  d.mediaObjectId,
                  d.rankingStrategy,
                  d.groupType,
                  da,
                  T,
                  X,
                  ea,
                )
                k.emitNexusMetric(f)
              }
              t(c, '')
              ;(a.usePeekHover && 'click' !== b.type) ||
                !n.$(b.$currentTarget).closest('li').hasClass('videoThumbnail') ||
                (e.selectGivenThumbnail(b.$declarativeParent, C),
                'click' === b.type &&
                  ((d = k.buildNexusMetric(
                    'ib.thumbnailClick',
                    c.thumbnailIndex + 1,
                    d.mediaObjectId,
                    d.rankingStrategy,
                    d.groupType,
                    da,
                    T,
                    X,
                    ea,
                  )),
                  ((!e.useTabbedImmersiveView(a) && 'chromeless-video' === c.type) ||
                    'tablet' == V) &&
                    k.emitNexusMetric(d),
                  e.useTabbedImmersiveView(a) &&
                    (k.emitNexusMetric(d),
                    k.postCountMetric(
                      'dpcc_videoThumbClicked_' + (c.thumbnailIndex + 1) + '_' + ca,
                    ),
                    (S.action = 'videoIngressClick'),
                    (S.clickTimeStamp = b.$event.timeStamp),
                    (S.$event = b.$event),
                    (S.$currentTarget = b.$currentTarget),
                    y.dispatch('videoIngressClick', S),
                    k.postTimeMetric('dpcc_vse_videoingressclick', b.$event.timeStamp))))
            }
          })
      a.isDPXFeatureEnabled && (n.on('triggerVideoAjax', O), n.on('notShowVideoCountAjax', M))
      n.on('vsePlayer-imageblock_tablet', l)
      n.on('vsePlayer-mbsoftlines', l)
    }
  })
  ;('use strict')
  B.when('ImageBlockBTF', 'postMetric').register('ImageBlockInitViews', function (n, b) {
    function e(b, e, N, H, O) {
      function k(b) {
        'click' === b.type && H.postCountMetric('thumbClick')
        'click' === b.type && f.overrideAltImageClickAction
          ? F.dispatch('thumbActionClick', b)
          : F.dispatch('updateSelection', b)
      }
      function w(b) {
        f.useClickZoom || F.dispatch('imageClick', b)
      }
      function J(b) {
        f.useClickZoom || F.dispatch('imageHover', b)
      }
      function D(b) {
        F.dispatch('button360Click', b)
      }
      function G(c) {
        !N.isDefined(c) || ('swatchClick' !== c.type && 'updatedData' !== c.type)
          ? (z.update(c),
            'swatchHover' !== c.type &&
              P.getPreviousItem().thumbnailIndex !== c.data.thumbnailIndex &&
              H.postCountMetric(c.data.type + 'ThumbnailSelected'),
            b.trigger('image-block-thumbnail-selected', c.data))
          : (z.render(c.data.color, !1, c.onload, c.type),
            (c = { hasComponents: !0, components: [{ name: 'mainimage' }, { name: 'thumbnail' }] }),
            'function' === typeof u.markFeatureRender && u.markFeatureRender('imageblock', c))
      }
      function t(b) {
        F.dispatch('resize', b)
      }
      function x(b) {
        N.selectThumbnail(b, c)
      }
      function K() {
        'function' === typeof u.markFeatureInteractive &&
          u.markFeatureInteractive('imageblock', {
            hasComponents: !0,
            components: [{ name: 'mainimage', events: ['click'], alwaysInteractive: !0 }],
          })
      }
      function Q() {
        f.interactiveCallJSPEnabled ||
          ('function' === typeof u.markFeatureInteractive &&
            u.markFeatureInteractive('imageblock', {
              hasComponents: !0,
              components: [
                { name: 'mainimage', events: ['hover'], alwaysInteractive: !0 },
                { name: 'thumbnail', events: ['click', 'hover'], alwaysInteractive: !0 },
              ],
            }),
          1 === n.useIV
            ? B.when('a-modal').execute(function () {
                K()
              })
            : K())
        f.disableHoverOnAltImages || b.declarative('thumb-action', ['mouseenter', 'mouseleave'], k)
        b.declarative('thumb-action', ['click'], k)
        b.declarative('main-image-click', ['click'], w)
        b.declarative('main-image-click', ['mouseenter', 'mouseleave'], J)
        b.declarative('button-360-click', ['click'], D)
        b.on('resize', t)
      }
      function m(b) {
        var c = b.data,
          d
        c && 'ingress' !== c.type && 'click' === b.type && (d = b)
        return d
      }
      function d(b) {
        var c = P.getCurrentItem(),
          d = { type: 'click' }
        d.$declarativeParent = b
        d.data = c
        return d
      }
      function l(b) {
        N.isImageBlockGridViewHoverDelayEnabled() &&
          'mouseenter' === b.type &&
          N.updateThumbnailHoverDelay(b.$target)
      }
      var z, f, F, P, c
      return function (b, k, n) {
        z = this
        f = b
        F = k
        P = n
        c = e('#imageBlock #altImages ul')
        var p = e('#imageBlock .canvas'),
          r = e('#main-image-container'),
          a
        z.subViews = []
        for (k = 0; k < O.length; k++) z.subViews.push(new O[k](b, n, z, F))
        z.render = function (b, k, l, m) {
          var n = 0
          c.find('.item').remove()
          b = b || P.getCurrentItem().color
          e.each(z.subViews, function (a, d) {
            n =
              (2 === f.unrolledImageBlockTreatment || 3 === f.unrolledImageBlockTreatment
                ? d.render(b, n, p, c, r, k, l, m)
                : d.render(b, n, p, c, r, k, l)) || n
          })
          var h = c.find('.a-button-selected').closest('.a-declarative')
          a = d(h)
        }
        z.init = function () {
          c = e('#imageBlock #altImages ul')
          var a = c.find('.a-button-selected').closest('.a-declarative'),
            b = a.data('action')
          a = a.data(b) || {}
          a.color = f.landingAsinColor || f.defaultColor
          F.dispatch('updateModel', { data: a })
          z.render(a.color, !0)
          f.isDebug && u.console && console.log(f)
          F.register('updateView', G)
          F.register('selectThumbnail', x)
          Q()
        }
        z.update = function (b) {
          l(b)
          e.each(z.subViews, function (a, c) {
            c.update(b)
          })
          f.usePeekHover &&
            ('mouseleave' === b.type
              ? F.dispatch('updateSelection', a)
              : 'click' === b.type && (a = m(b) || a))
        }
      }
    }
    b = ['A', 'jQuery', 'imageBlockUtils', 'postMetric'].concat(n.views)
    B.when.apply(B, b).register('ImageBlockView', function () {
      for (
        var b = arguments[0],
          k = arguments[1],
          n = arguments[2],
          u = arguments[3],
          B = [],
          M = 4,
          w = arguments.length;
        M < w;
        M++
      )
        B.push(arguments[M])
      return e(b, k, n, u, B)
    })
  })
})
/* ******** */
;(function (C) {
  var v = window.AmazonUIPageJS || window.P,
    ia = v._namespace || v.attributeErrors,
    h = ia ? ia('DetailPageImageBlockSubAssets@immersiveViews', 'DetailPageImageBlockSubAssets') : v
  h.guardFatal
    ? h.guardFatal(C)(h, window)
    : h.execute(function () {
        C(h, window)
      })
})(function (C, v, ia) {
  C.when('A', 'jQuery', 'imageBlockUtils', 'imageBlockImmersiveViewUtils', 'postMetric').register(
    'ImageBlockImmersiveViewDimensionIngress',
    function (h, a, c, x, n) {
      function ja(d, b) {
        var t = a(d + ' image').attr('data')
        a(d + ' image')[0].setAttribute('href', t)
        d = new Image()
        d.src = t
        d.onload = function () {
          b(this.width / this.height)
        }
      }
      function y(d) {
        null !== a(d.euclidSvg) &&
          new Promise(function (b, a) {
            ja(d.euclidSvg, b)
          }).then(function (b) {
            if (null === a(d.featureDiv) || 0 === a(d.featureDiv).length || 0 >= b) var t = null
            else {
              var c = a(d.featureDiv).width(),
                u = a(d.featureDiv).height(),
                f = 2 * (16 + z(d.euclidHeightText, d.numberSpace) + 10),
                e = c - f,
                m = a(d.euclidHeightLine).data('euclid-height-startx')
              0 > m ? (f += e * Math.abs(m) * 2) : 1 < m && (f += e * (m - 1) * 2)
              e = c - f
              0 > e && (f = 152)
              var O = a(d.euclidWidthLine).data('euclid-width-starty'),
                h = 1 < O ? u * (O - 1) + 50 : 50,
                p = u - h
              if (e / p > b)
                var k = p * b,
                  q = p,
                  na = p * b + f,
                  ha = u
              else (k = e), (q = e / b), (na = c), (ha = e / b + h)
              t = { imageWidth: k, imageHeight: q, svgWidth: na, svgHeight: ha }
            }
            if (
              'undefined' === typeof t ||
              null === t ||
              10 >= t.imageWidth ||
              10 >= t.imageHeight ||
              10 >= t.svgWidth ||
              10 >= t.svgHeight
            )
              n.postCountMetric('dpcc_dimensionIngressEuclidInvalid')
            else {
              var M = t,
                r = d.euclidSvg
              a(r + ' image').attr('width', M.imageWidth)
              a(r + ' image').attr('height', M.imageHeight)
              a(r).attr('width', M.svgWidth)
              a(r).attr('height', M.svgHeight)
              var E = (M.svgWidth - M.imageWidth) / 2
              a(r + ' image')[0].setAttribute('x', E)
              a(r + ' image')[0].setAttribute('y', 10)
              var G = M.imageWidth,
                D = M.imageHeight,
                l = (M.svgWidth - M.imageWidth) / 2,
                x = a(d.euclidLengthLine).data('euclid-length-startx') * G,
                y = a(d.euclidLengthLine).data('euclid-length-starty') * D,
                A = a(d.euclidLengthLine).data('euclid-length-endx') * G,
                S = a(d.euclidLengthLine).data('euclid-length-endy') * D,
                aa = a(d.euclidWidthLine).data('euclid-width-startx') * G,
                w = a(d.euclidWidthLine).data('euclid-width-starty') * D,
                W = a(d.euclidWidthLine).data('euclid-width-endx') * G,
                F = a(d.euclidWidthLine).data('euclid-width-endy') * D,
                I = a(d.euclidHeightLine).data('euclid-height-startx') * G,
                ja = a(d.euclidHeightLine).data('euclid-height-starty') * D,
                Y = a(d.euclidHeightLine).data('euclid-height-endx') * G,
                J = a(d.euclidHeightLine).data('euclid-height-endy') * D,
                da = (F - w) / (W - aa),
                X = 0 >= da ? 'leftInclined' : 'rightInclined',
                ta = 1 / da,
                pa = Math.abs(Math.sqrt(Math.pow(16, 2) / (1 + Math.pow(ta, 2)))),
                ra = 0 === pa ? 16 : Math.abs(ta * pa),
                sa = Math.abs(Math.sqrt(Math.pow(3, 2) / (1 + Math.pow(ta, 2)))),
                va = 0 === sa ? 3 : Math.abs(ta * sa),
                kb = (S - y) / (A - x),
                Va = 1 / kb,
                qa = Math.abs(Math.sqrt(Math.pow(16, 2) / (1 + Math.pow(Va, 2)))),
                v = 0 === qa ? 16 : Math.abs(Va * qa),
                C = Math.abs(Math.sqrt(Math.pow(3, 2) / (1 + Math.pow(Va, 2)))),
                K = 0 === C ? 3 : Math.abs(Va * C),
                T = 0 >= kb ? 'leftInclined' : 'rightInclined'
              if (0.5 < a(d.euclidHeightLine).data('euclid-height-startx')) {
                var N = I + l + 16,
                  R = ja + 10,
                  U = Y + l + 16,
                  V = J + 10,
                  fa = I + l + 16 - 3,
                  ba = ja + 10,
                  ca = I + l + 16 + 3,
                  ma = ja + 10,
                  ia = Y + l + 16 - 3,
                  lb = J + 10,
                  mb = Y + l + 16 + 3,
                  nb = J + 10,
                  ob = (N + U) / 2 + 5,
                  pb = (R + V) / 2 + 8,
                  Da = W + l + pa,
                  Ea = F + ra + 10,
                  Fa = aa + l + pa,
                  Ga = w + ra + 10,
                  qb = W + l + pa - sa,
                  rb = F + ra - va + 10,
                  sb = W + l + pa + sa,
                  tb = F + ra + va + 10,
                  ub = aa + l + pa - sa,
                  vb = w + ra - va + 10,
                  wb = aa + l + pa + sa,
                  xb = w + ra + va + 10
                if ('leftInclined' === X) {
                  var Wa = (Da + Fa) / 2
                  var Xa = (Ea + Ga) / 2 + 15
                } else (Wa = (Da + Fa) / 2 + 5), (Xa = (Ea + Ga) / 2)
                var Ha = x + l - qa,
                  Ia = y + v + 10,
                  Ja = A + l - qa,
                  Ka = S + v + 10,
                  yb = x + l - qa - C,
                  zb = y + v + K + 10,
                  Ab = x + l - qa + C,
                  Bb = y + v - K + 10,
                  Cb = A + l - qa - C,
                  Db = S + v + K + 10,
                  Eb = A + l - qa + C,
                  Fb = S + v - K + 10,
                  Ib = z(d.euclidLengthText, d.numberSpace)
                if ('leftInclined' === T)
                  var Ya = (Ha + Ja) / 2,
                    Za = (Ia + Ka) / 2 + 15
                else (Ya = (Ha + Ja) / 2 - Ib), (Za = (Ia + Ka) / 2 + 15)
              } else {
                N = I + l - 16
                R = ja + 10
                U = Y + l - 16
                V = J + 10
                fa = I + l - 16 - 3
                ba = ja + 10
                ca = I + l - 16 + 3
                ma = ja + 10
                ia = Y + l - 16 - 3
                lb = J + 10
                mb = Y + l - 16 + 3
                nb = J + 10
                var Jb = z(d.euclidHeightText, d.numberSpace)
                ob = (N + U) / 2 - Jb - 3
                pb = (R + V) / 2 + 8
                Da = W + l - pa
                Ea = F + ra + 10
                Fa = aa + l - pa
                Ga = w + ra + 10
                qb = W + l - pa - sa
                rb = F + ra + va + 10
                sb = W + l - pa + sa
                tb = F + ra - va + 10
                ub = aa + l - pa - sa
                vb = w + ra + va + 10
                wb = aa + l - pa + sa
                xb = w + ra - va + 10
                var Gb = z(d.euclidWidthText, d.numberSpace)
                'leftInclined' === X
                  ? ((Wa = (Da + Fa) / 2 - Gb), (Xa = (Ea + Ga) / 2))
                  : ((Wa = (Da + Fa) / 2 - Gb), (Xa = (Ea + Ga) / 2 + 15))
                Ha = x + l + qa
                Ia = y + v + 10
                Ja = A + l + qa
                Ka = S + v + 10
                yb = x + l + qa + C
                zb = y + v + K + 10
                Ab = x + l + qa - C
                Bb = y + v - K + 10
                Cb = A + l + qa + C
                Db = S + v + K + 10
                Eb = A + l + qa - C
                Fb = S + v - K + 10
                'leftInclined' === T
                  ? ((Ya = (Ha + Ja) / 2), (Za = (Ia + Ka) / 2 + 15))
                  : ((Ya = (Ha + Ja) / 2 + 15), (Za = (Ia + Ka) / 2))
              }
              var Kb = Ha
              var Lb = Ia
              var Mb = Ja
              var Nb = Ka
              var Ob = yb
              var Pb = zb
              var Qb = Ab
              var Rb = Bb
              var Sb = Cb
              var Tb = Db
              var Ub = Eb
              var Vb = Fb
              var Wb = Ya
              var Xb = Za
              var Yb = Da
              var Zb = Ea
              var $b = Fa
              var ac = Ga
              var bc = qb
              var cc = rb
              var dc = sb
              var ec = tb
              var fc = ub
              var gc = vb
              var hc = wb
              var ic = xb
              var jc = Wa
              var kc = Xa
              var lc = N
              var mc = R
              var nc = U
              var oc = V
              var pc = fa
              var qc = ba
              var rc = ca
              var sc = ma
              var tc = ia
              var uc = lb
              var vc = mb
              var wc = nb
              var xc = ob
              var yc = pb
              P(r + ' .hit-pd-euclid-height-line', lc, mc, nc, oc)
              P(r + ' .hit-pd-euclid-height-start', pc, qc, rc, sc)
              P(r + ' .hit-pd-euclid-height-end', tc, uc, vc, wc)
              la(r + ' .hit-pd-euclid-height-text', xc, yc)
              P(r + ' .hit-pd-euclid-width-line', Yb, Zb, $b, ac)
              P(r + ' .hit-pd-euclid-width-start', bc, cc, dc, ec)
              P(r + ' .hit-pd-euclid-width-end', fc, gc, hc, ic)
              la(r + ' .hit-pd-euclid-width-text', jc, kc)
              P(r + ' .hit-pd-euclid-length-line', Kb, Lb, Mb, Nb)
              P(r + ' .hit-pd-euclid-length-start', Ob, Pb, Qb, Rb)
              P(r + ' .hit-pd-euclid-length-end', Sb, Tb, Ub, Vb)
              la(r + ' .hit-pd-euclid-length-text', Wb, Xb)
              Q(
                '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
              ) &&
                (d === ea && 'dimension-ingress-image' === L.getCurrentItem().type
                  ? (H(),
                    a(
                      '#imageBlock #main-image-container #dimension-ingress-outer-container',
                    ).addClass('a-declarative'),
                    a('#imageBlock #main-image-container #dimension-ingress-outer-container').attr(
                      'data-action',
                      'dimension-hero-click',
                    ),
                    n.postTimeMetric('dppc_loadDimensionHeroTime', Date.now() - wa))
                  : d === oa &&
                    (a('ivDimensionTab').css('display', 'block'),
                    g(
                      a('#iv-euclid'),
                      a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container'),
                    ),
                    n.postTimeMetric('dppc_loadDimensionImmersiveTime', Date.now() - ka)))
            }
          })
        Q(
          '#imageBlockDimensionIngress_feature_div #image-block-seller-dimension-image-container',
        ) && K(d === ea, L.getCurrentItem(), null)
      }
      function z(d, b) {
        return (
          a(d)
            .text()
            .replace(/[^0-9]/g, '').length *
            b +
          5
        )
      }
      function P(d, b, t, c, u) {
        d = a(d)[0]
        d !== ia &&
          null !== d &&
          (d.setAttribute('x1', b),
          d.setAttribute('y1', t),
          d.setAttribute('x2', c),
          d.setAttribute('y2', u))
      }
      function la(d, b, t) {
        var c = a(d)[0]
        c !== ia &&
          null !== c &&
          (c.setAttribute('x', b),
          c.setAttribute('y', t),
          (d = a(d + ' tspan')),
          d !== ia &&
            null !== d &&
            2 === d.length &&
            (d[0].setAttribute('x', b),
            d[0].setAttribute('dy', LEFT_STRING_FIRST_LINE_BIAS),
            d[1].setAttribute('x', b),
            d[1].setAttribute('dy', LEFT_STRING_SECOND_LINE_BIAS)))
      }
      function v(d) {
        if (
          !a('#imageBlock #main-image-container #dimension-ingress-outer-container').length ||
          a('#imageBlock #main-image-container #dimension-ingress-outer-container').hasClass(
            'aok-hidden',
          )
        ) {
          if (!a('#imageBlock #main-image-container #dimension-ingress-outer-container').length) {
            d = m(d.color)
            if (null === d) return
            if (d in J)
              Q(
                '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
              ) && J[d].clone().appendTo(a('#imageBlock #main-image-container'))
            else {
              var b = a(
                '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container',
              )
              b.length
                ? (Q(
                    '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
                  ) && b.clone().appendTo(a('#imageBlock #main-image-container')),
                  (J[d] = b))
                : C(d)
            }
          }
          y(ea)
        }
      }
      function C(d) {
        try {
          setTimeout(function () {
            ma++
            var b = a('#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container')
            b.length
              ? (d in J || (J[d] = b),
                a('#imageBlock #main-image-container #dimension-ingress-outer-container') &&
                  0 >=
                    a('#imageBlock #main-image-container #dimension-ingress-outer-container')
                      .length &&
                  Q(
                    '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
                  ) &&
                  b.clone().appendTo(a('#imageBlock #main-image-container')),
                y(ea))
              : 100 > ma && C(d)
          }, 100)
        } catch (b) {
          console.log('ImageBlockImmersiveViewDimensionIngress lazy load loop:' + b)
        }
      }
      function Q(d) {
        return 'true' === a(d).attr('data-should-use-in-hero')
      }
      function K(d, b, c) {
        var t = k.colorImages[b.color],
          u = a(
            '#imageBlockDimensionIngress_feature_div #image-block-seller-dimension-image-container #dimension-ingress-seller-image',
          )
        u && 0 < u.length ? ((t = V(t)), R(t, d, b, c)) : N(t, d, b, c)
      }
      function N(d, b, c, B) {
        try {
          setTimeout(function () {
            f++
            var t = a(
              '#imageBlockDimensionIngress_feature_div #image-block-seller-dimension-image-container #dimension-ingress-seller-image',
            )
            t && 0 < t.length
              ? ((t = V(d)), R(t, b, c, B))
              : 100 > f
                ? N(d, b, c, B)
                : (n.postCountMetric('dpcc_dimensionIngress_hero_data_not_found'),
                  (t = d[0]),
                  R(t, b, c, B))
          }, 100)
        } catch (u) {
          console.log('ImageBlockImmersiveViewDimensionIngress lazy load seller image loop:' + u)
        }
      }
      function V(d) {
        for (
          var b = a(
              '#imageBlockDimensionIngress_feature_div #image-block-seller-dimension-image-container #dimension-ingress-seller-image',
            ).attr('variant'),
            c = d[0],
            f = 0;
          f < d.length;
          f++
        ) {
          var u = d[f]
          u.variant === b && (c = u)
        }
        c === d[0] &&
          n.postCountMetric('dpcc_dimensionIngress_no_image_data_found_for_seller_image_variant')
        return c
      }
      function R(d, b, t, f) {
        b
          ? ((b = S.find('.item.dimensionItemNo' + t.thumbnailIndex)) && b.remove(),
            (b = t.thumbnailIndex),
            (f = F(d, f)),
            (t = S.find('.mainImageTemplate').clone().removeClass('template mainImageTemplate')),
            t.addClass('image item dimensionItemNo' + b + ' maintain-height').attr({
              'data-csa-c-type': 'uxElement',
              'data-csa-c-element-type': 'navigational',
              'data-csa-c-action': 'image-block-main-image-hover',
              'data-csa-c-posy': b + 1,
            }),
            t.find('.placeHolder').replaceWith(f),
            t.find('.a-declarative').attr('data-action', 'dimension-hero-click'),
            S.find('.list').append(t),
            h.loadImageManually(f),
            (f = b = t),
            (t = M.css('height')),
            null !== t && f.find('.imgTagWrapper').css('height', t),
            f.addClass('selected'),
            k.imgTagWrapperClasses && f.find('.imgTagWrapper').addClass(k.imgTagWrapperClasses),
            O.dispatch('loadMagnifier'),
            (f = b),
            k.useIV && c.isDefined(d.hiRes) && f.css('cursor', 'pointer'),
            h.trigger('dp:image-block:update', d))
          : (T(d), g(a('#iv-seller'), a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper')))
      }
      function T(d) {
        var b = a('#ivDimensionTab #ivLargeDimensions')
        if (0 < b.find('.imgTagWrapper').length) {
          var c = a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper img')
          return U(b, c)
        }
        c = a('\x3cdiv\x3e\x3c/div\x3e')
        c.addClass('imgTagWrapper')
        var f = a('\x3cimg\x3e')
        c.html(f)
        b.append(c)
        c = a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper img')
        c.attr('src', d.hiRes)
        return U(b, c)
      }
      function U(a, b) {
        a = a.closest('#ivStageDimensions')
        var d = a.width()
        a = { height: 'auto', 'max-height': a.height(), 'max-width': d, 'text-align': 'center' }
        b.css(a)
        b = b.closest('.imgTagWrapper')
        b.css(a)
        return b
      }
      function F(d, b) {
        var f = 'a-dynamic-image'
        if (!k.acEnabled) {
          var e
          a.each(d.main, function (b, a) {
            c.isDefined(e) ||
              (e =
                parseFloat(a[1] / a[0]) <= parseFloat(k.holderRatio)
                  ? ' a-stretch-vertical'
                  : ' a-stretch-horizontal')
          })
          f += e
        }
        var u = c.getMaxDimensionsOfMainImage(d.main, M, k),
          g = u[0],
          m = u[1]
        u = a('\x3cdiv\x3e\x3c/div\x3e')
        g = { 'max-height': g, 'max-width': m }
        u.addClass(f)
          .css(g)
          .attr({ 'data-old-hires': d.hiRes, 'data-a-manual-replacement': 'true', onload: b })
          .data('a-dynamic-image', d.main)
        return u
      }
      function q() {
        a('#image-canvas-caption #canvasCaption').html(
          k.dimensionIngressAtfData.initial.heroImageCaption,
        )
      }
      function m(a) {
        var b = k.colorToAsin[a]
        return b && b.asin ? (a = k.colorToAsin[a].asin) : (a = k.mediaAsin ? k.mediaAsin : null)
      }
      function D() {
        a('#imageBlock #main-image-container #dimension-ingress-outer-container').addClass(
          'aok-hidden',
        )
        a('#imageBlock #main-image-container #dimension-ingress-outer-container').css('z-index', -1)
      }
      function H() {
        null !== a(ea.euclidSvg) && 0 !== a(ea.euclidSvg).length
          ? (a('#imageBlock #main-image-container #dimension-ingress-outer-container').removeClass(
              'aok-hidden',
            ),
            a('#imageBlock #main-image-container #dimension-ingress-outer-container').css(
              'z-index',
              2,
            ))
          : K(ea, L.getCurrentItem(), null)
      }
      function E(a, b) {
        ;(k.usePeekHover && 'click' !== b.type) || c.selectGivenThumbnail(b.$declarativeParent, a)
      }
      function I(a) {
        a.action = 'dimensionIngressClick'
        a.data = aa
        O.dispatch('dimensionIngressClick', a)
      }
      function A() {
        ka = Date.now()
        if (
          W &&
          !a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container').length
        ) {
          var d = m(L.getCurrentItem().color)
          if (null !== d) {
            a('#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container')
            var b = a('#ivDimensionTab #ivLargeDimensions').length
            console.log('checkImmersiveViewContainer', b)
            d in J
              ? J[d].clone().appendTo(a('#ivDimensionTab #ivLargeDimensions'))
              : ((b = a(
                  '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container',
                )),
                b.length
                  ? (b.clone().appendTo(a('#ivDimensionTab #ivLargeDimensions')), (J[d] = b))
                  : G(d))
            x.populateTitle(
              a('#ivDimensionTab #ivMainDimensions').find('#ivTitleDimensions'),
              160,
              k,
            )
            x.populateVariationSelection(
              a('#ivDimensionTab #ivMainDimensions').find('#ivVariationSelectionDimensions'),
            )
            X()
            W = !1
          }
          d = a('#iv-tab-view-container').find('#ivThumbsDimensions')
          d.find('.ivRow').not('.placeholder').remove()
          b = d.find('.ivRow.placeholder').clone().removeClass('placeholder').appendTo(d)
          var c =
              0 <
              a(
                '#imageBlockDimensionIngress_feature_div #image-block-seller-dimension-image-container',
              ).length,
            f =
              0 <
              a(
                '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
              ).length
          if (
            'true' ===
            a('#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container').attr(
              'data-should-show-thumbnails-in-iv',
            )
          ) {
            if (c) {
              if (!a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper').length) {
                var u = k.colorImages[L.getCurrentItem().color]
                u = V(u)
                T(u)
                a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper').addClass('aok-hidden')
              }
              e(d, b, u.thumb, a('#ivDimensionTab #ivLargeDimensions .imgTagWrapper'), 'iv-seller')
            }
            f &&
              ((u = a(
                '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container image',
              ).attr('data')),
              e(
                d,
                b,
                u,
                a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container'),
                'iv-euclid',
              ))
          }
        }
        w()
      }
      function w() {
        na = a('#ivDimensionTab').height()
        if (0 !== na) {
          x.detachImmersiveViewResizeHandler(A)
          var d = a('#ivDimensionTab #ivMainDimensions'),
            b = a('#ivDimensionTab').height(),
            c = a('#ivDimensionTab').width()
          d.css('height', b)
          d.css('width', c)
          c = d.find('#ivTitleDimensions').outerHeight(!0)
          var f = d.find('#ivVariationSelectionDimensions').outerHeight(!0),
            u = d.find('#ivThumbsDimensions'),
            e = x.getDimension(u, 'margin-top') + x.getDimension(u, 'margin-bottom')
          u.css('height', b - c - f - e)
          c = d.find('#ivStageDimensions')
          d =
            ((d[0] &&
              d[0].getBoundingClientRect &&
              Math.floor(d[0].getBoundingClientRect().width)) ||
              d.width()) -
            x.getDimension(d, 'padding-left') -
            x.getDimension(d, 'padding-right') -
            d.find('#ivThumbColumnDimensions').width() -
            x.getDimension(c, 'margin-left') -
            x.getDimension(c, 'margin-right')
          c.css('width', d)
          c.css('height', b)
          y(oa)
        }
      }
      function e(a, b, c, f, e) {
        a = a
          .find('.ivThumb.placeholder')
          .clone()
          .removeClass('placeholder')
          .attr({ id: e })
          .appendTo(b)
        a.find('.ivThumbImage').css(
          'background',
          'url("' + x.getResizedThumbnailURL(c) + '") center no-repeat',
        )
        f.hasClass('aok-hidden') || a.addClass('selected')
        r(a, f)
      }
      function r(a, b) {
        a.click(function () {
          g(a, b)
        })
      }
      function g(a, b) {
        a.parent().find('.ivThumb').removeClass('selected')
        a.addClass('selected')
        b.hasClass('imgTagWrapper') && U(b, b.find('img'))
        b.parent().find('#dimension-ingress-outer-container').addClass('aok-hidden')
        b.parent().find('.imgTagWrapper').addClass('aok-hidden')
        b.removeClass('aok-hidden')
      }
      function G(d) {
        try {
          setTimeout(function () {
            ca++
            var b = a('#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container')
            b.length
              ? (d in J || (J[d] = b),
                a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container') &&
                  0 >=
                    a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container')
                      .length &&
                  b.clone().appendTo(a('#ivDimensionTab #ivLargeDimensions')),
                w())
              : 100 > ca && G(d)
          }, 100)
        } catch (b) {
          console.log('ImageBlockImmersiveViewDimensionIngress lazy load IV loop:' + b)
        }
      }
      function Y(d, b) {
        da && clearTimeout(da)
        'mouseenter' === b.type &&
          (da = setTimeout(function () {
            v(d)
            a('#image-canvas-caption #canvasCaption').empty()
            q()
            E(ha, b)
          }, c.getHoveringDelayTimer()))
        'mouseleave' === b.type && q()
      }
      var l,
        k,
        L,
        O,
        ha,
        S,
        M,
        aa,
        W = !0,
        wa,
        ka,
        da,
        p,
        J = {},
        ma = 0,
        ca = 0,
        f = 0,
        na,
        ea = {
          euclidSvgContainer: '#imageBlock #image-block-euclid-svg-container',
          euclidSvg: '#imageBlock #hit-pd-angled-front-svg',
          euclidHeightText: '#imageBlock #hit-pd-angled-front-svg .hit-pd-euclid-height-text',
          euclidWidthText: '#imageBlock #hit-pd-angled-front-svg .hit-pd-euclid-width-text',
          euclidLengthText: '#imageBlock #hit-pd-angled-front-svg .hit-pd-euclid-length-text',
          featureDiv: '#imageBlock #main-image-container',
          euclidLengthLine: '#imageBlock .hit-pd-euclid-length-line',
          euclidWidthLine: '#imageBlock .hit-pd-euclid-width-line',
          euclidHeightLine: '#imageBlock .hit-pd-euclid-height-line',
          numberSpace: 10,
        },
        oa = {
          euclidSvg: '#ivDimensionTab #hit-pd-angled-front-svg',
          euclidHeightText: '#ivDimensionTab #hit-pd-angled-front-svg .hit-pd-euclid-height-text',
          euclidWidthText: '#ivDimensionTab #hit-pd-angled-front-svg .hit-pd-euclid-width-text',
          euclidLengthText: '#ivDimensionTab #hit-pd-angled-front-svg .hit-pd-euclid-length-text',
          featureDiv: '#ivDimensionTab #ivStageDimensions',
          euclidLengthLine: '#ivDimensionTab .hit-pd-euclid-length-line',
          euclidWidthLine: '#ivDimensionTab .hit-pd-euclid-width-line',
          euclidHeightLine: '#ivDimensionTab .hit-pd-euclid-height-line',
          numberSpace: 14,
        },
        X = h.once(function () {
          x.attachImmersiveViewResizeHandler(A)
        })
      h.on.resize(function () {
        Q(
          '#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container #image-block-euclid-svg-container',
        ) && y(ea)
      })
      return function (d, b, f, e) {
        l = this
        k = d
        L = b
        O = e
        d = k.mediaAsin
        b = []
        k &&
          k.dimensionIngressAtfData &&
          k.dimensionIngressAtfData.initial &&
          (b = k.dimensionIngressAtfData.initial.dimensionVariantList)
        c.setDimensionIngressData(d, k.dimensionIngressEnabled, b)
        l.render = function (b, d, f, e, t, g) {
          ha = e
          S =
            2 !== k.unrolledImageBlockTreatment && 3 !== k.unrolledImageBlockTreatment
              ? f
              : a('.unrolledScrollBox')
          M = t
          W = !0
          a('#imageBlock #main-image-container #dimension-ingress-outer-container').remove()
          a('#ivDimensionTab #ivLargeDimensions #dimension-ingress-outer-container').remove()
          a('#ivDimensionTab #ivLargeDimensions').empty()
          ca = ma = 0
          f = m(L.getCurrentItem().color)
          if (null !== f) {
            if (
              c.isDimensionIngressEnabled(f) &&
              k.dimensionIngressThumbURL &&
              k.dimensionIngressThumbURL.initial &&
              k.dimensionIngressThumbURL.initial.length
            ) {
              f = c.getDimensionVariantList(f)
              if (f.includes('DIMN') || f.includes('DCMN'))
                Array.isArray(f) || (f = JSON.parse(f.replace(/(\w+)/g, '"$1"'))),
                  f.push('DIMN'),
                  f.push('DCMN')
              if (f && 0 < f.length) {
                t = k.colorImages[b]
                g = e.find('.item.imageThumbnail')
                for (var u = 0; u < g.length && u < k.maxAlts - 1; u++) {
                  var O = t[u].variant
                  'MAIN' != O && f.includes(O) && (O = g.eq(u)) && (O.remove(), d--)
                }
              }
              d === k.maxAlts && (e.find('.item.imageThumbnail').last().remove(), d--)
              aa = { type: 'dimension-ingress-image', index: 0, thumbnailIndex: d, variant: 'Main' }
              c.createThumbnail(
                aa,
                k.dimensionIngressThumbURL.initial,
                e,
                'dimension-ingress-imageblock-thumbnail',
              )
              e = k.dimensionIngressAtfData.initial.thumbnailCaption
              e = a('\x3cspan /\x3e').html(e)
              e.addClass('a-size-mini a-color-secondary dimension-caption a-text-bold a-nowrap')
              e.attr('id', 'dimensionCaption')
              a('.dimension-ingress-imageblock-thumbnail').addClass('a-align-top')
              a('.dimension-ingress-imageblock-thumbnail').append(e)
              d++
              a('#ivDimensionTabHeading').removeClass('aok-hidden')
              m(b) !== k.mediaAsin &&
                0 ===
                  a('#imageBlockDimensionIngress_feature_div #dimension-ingress-outer-container')
                    .length &&
                a('#imageBlock .dimension-ingress-imageblock-thumbnail').addClass('aok-hidden')
              return d
            }
            a('#ivDimensionTabHeading').addClass('aok-hidden')
          }
        }
        l.update = function (b) {
          var d = b.data
          L.setCurrentEvent(b)
          'dimension-ingress-image' === d.type
            ? ((d.interaction = b.type),
              (d.isUserGenerated = !0),
              'mouseenter' === b.type &&
                ((wa = Date.now()), n.postCountMetric('dpcc_dimensionIngressHovered')),
              c.isImageBlockGridViewHoverDelayEnabled()
                ? Y(d, b)
                : (v(d), a('#image-canvas-caption #canvasCaption').empty(), q(), E(ha, b)),
              'click' === b.type &&
                c.useTabbedImmersiveView(k) &&
                (I(b), n.postCountMetric('dpcc_dimensionIngressClicked')))
            : 'swatchHover' === b.type
              ? d.color === L.getCurrentItem().color &&
                'dimension-ingress-image' === L.getCurrentItem().type
                ? H()
                : D()
              : c.isImageBlockGridViewHoverDelayEnabled()
                ? (L.setToPreviousItem(),
                  'mouseenter' === b.type &&
                    (p && clearTimeout(p),
                    (p = setTimeout(function () {
                      L.setToCurrentItem(d)
                      D()
                    }, c.getHoveringDelayTimer()))),
                  'mouseleave' === b.type && p && clearTimeout(p),
                  'click' === b.type && (L.setToCurrentItem(d), D()))
                : D()
        }
        x.attachTabSelectHandler('ivDimensionTab', A)
        h.declarative('dimension-hero-click', ['click'], I)
      }
    },
  )
  ;('use strict')
  C.when('A', 'jQuery', 'imageBlockUtils', 'postMetric', 'imageBlockImmersiveViewUtils').register(
    'ImageBlockImmersiveViewImages',
    function (h, a, c, x, n) {
      function v() {
        n.populateTitle(m.find('#ivTitle'), 160, F)
      }
      function y() {
        var a = q.getCurrentItem().color
        H = F.colorImages[a]
        D = F.heroImage[a]
        E = I = 0
        c.isDefined(D) && (E = D.length)
        c.isDefined(H) && (I = H.length)
      }
      function z(a) {
        return a.hiRes || a.large || a.main[a.main.length - 1]
      }
      function C() {
        var a = m.find('#ivStage').find('#ivLargeImage'),
          c = a.width(),
          e = a.height(),
          l = a.find('.fullscreen')
        l.removeAttr('style')
        var h = l.width(),
          k = l.height()
        0 < l.length &&
          (l[0].naturalWidth && (h = l[0].naturalWidth),
          l[0].naturalHeight && (k = l[0].naturalHeight))
        a.css('cursor', 'auto')
        h = 0 === h ? 1 : h
        k = 0 === k ? 1 : k
        var q = Math.min(c / h, e / k),
          n = k * q,
          G = h * q
        1 > q
          ? (w
              ? a.css('cursor', "url('" + F.staticImages.zoomIn + "'), auto")
              : (a.css('cursor', '-webkit-zoom-in'),
                a.css('cursor', '-moz-zoom-in'),
                a.css('cursor', 'zoom-in')),
            (g = !0))
          : (g = !1)
        h = Math.min(G, h)
        k = Math.min(n - 20, k)
        l.css({ 'margin-top': (e - k) / 2, 'margin-left': (c - h) / 2, height: k, width: h })
        a.css('visibility', 'visible')
        r = !1
      }
      function la(a) {
        var c = m.find('#ivLargeImage')
        c.css('visibility', 'hidden')
        c.empty()
        n.animateStageIn(c)
        c.append(a)
        C()
      }
      function fa(e) {
        m.find('#ivLargeImage').css('display', 'none')
        m.find('#ivLargeImage').css('display', 'block')
        var g
        'hero-image' === e
          ? c.isDefined(D) && (g = z(D[A.index]))
          : c.isDefined(H) && (g = z(H[A.index]))
        if (c.isDefined(g)) {
          m.find('.fullscreen').remove()
          var l = a('\x3cimg\x3e').attr('src', g).addClass('fullscreen'),
            k = m.find('#ivLargeImage')
          n.animateStageOut(k, function () {
            l.load(function () {
              la(l)
              h.trigger('dp:image-block:imageBlockImmersiveImageLoad', A.index)
            })
            if (l[0].complete)
              la(l), h.trigger('dp:image-block:imageBlockImmersiveImageLoad', A.index)
            else {
              k.empty()
              var c = (k.height() - 104) / 2,
                e = (k.width() - 80) / 2
              a('\x3cimg\x3e')
                .attr('src', F.staticImages.spinner)
                .css({ position: 'relative', top: c + 'px', left: e + 'px' })
                .appendTo(k)
            }
          })
        }
      }
      function ba(a) {
        m.find('.ivThumb').removeClass('selected')
        a.addClass('selected')
        a.hasClass('ivHeroImage') ? (A.type = 'hero-image') : (A.type = 'image')
        A.index = a.attr('id').split('_')[1]
        fa(A.type)
        x.postCountMetric('dpcc_iv_thumbCLick_' + (parseInt(A.index, 10) + 1) + '_' + (E + I))
      }
      function Q() {
        m.delegate('.ivThumb', 'click', function () {
          var c = a(this)
          ba(c)
        })
      }
      function K(a, c) {
        return 0 < c ? c / 2 : Math.min(0, Math.max(c, a))
      }
      function N(a) {
        var c = Y.top - (a.pageY - k[1]) * l
        a = K(Y.left - (a.pageX - k[0]) * l, G.left)
        c = K(c, G.top)
        m.find('.fullscreen').css({ left: a, top: c })
      }
      function V() {
        m.delegate('#ivLargeImage', 'click', function (a) {
          if (r) C()
          else if (g) {
            m.find('.fullscreen').removeAttr('style')
            if (g) {
              var c = m.find('#ivLargeImage'),
                e = c.find('.fullscreen')
              w
                ? c.css('cursor', "url('" + F.staticImages.zoomOut + "'), auto")
                : (c.css('cursor', '-webkit-zoom-out'),
                  c.css('cursor', '-moz-zoom-out'),
                  c.css('cursor', 'zoom-out'))
              r = !0
              var h = m.find('#ivLargeImage')
              G.left = h.width() - e.width()
              G.top = h.height() - e.height()
              h = c.height() / 2
              var q = c.width() / 2
              k = [c.offset().left + q, c.offset().top + h]
              Y.top = h - e.height() / 2
              Y.left = q - e.width() / 2
              e.css({ position: 'relative', left: Y.left, top: Y.top })
              l = Math.max(e.height() / c.height(), e.width() / c.width())
            }
            N(a)
            x.postCountMetric('dpcc_iv_largeImageCLick')
          }
        })
        m.delegate('#ivLargeImage', 'mousemove', function (a) {
          r && N(a)
        })
      }
      function R() {
        m.find('#ivLargeImage').empty()
      }
      function T(g) {
        if (e) {
          m = a('#ivMain')
          y()
          A = q.getCurrentItem()
          v()
          n.populateVariationSelection(m.find('#ivVariationSelection'))
          g = m.find('#ivThumbs')
          g.find('.ivRow').not('.placeholder').remove()
          var l = E + I,
            h = !1
          F &&
            F.dimensionIngressAtfData &&
            F.dimensionIngressAtfData.initial &&
            (h = F.dimensionIngressAtfData.initial.immersiveViewDimensionSuppressionEnabled)
          for (var k = 0, r = 0; k < l; )
            for (
              var G = g.find('.ivRow.placeholder').clone().removeClass('placeholder').appendTo(g),
                x = 0;
              4 > x && k < l;
              x++, k++, r++
            )
              if (r < E) {
                var w = D[k].thumb,
                  z = g
                    .find('.ivThumb.placeholder')
                    .clone()
                    .removeClass('placeholder')
                    .addClass('ivHeroImage')
                    .attr({
                      id: 'ivHeroImage_' + k,
                      'data-csa-c-type': 'item',
                      'data-csa-c-component': 'imageBlock',
                      'data-csa-c-content-id': 'image-block-immersive-view-hero-image',
                      'data-csa-c-posy': k + 1,
                    })
                    .appendTo(G)
                z.find('.ivThumbImage').css(
                  'background',
                  'url("' + n.getResizedThumbnailURL(w) + '") center no-repeat',
                )
              } else if (r >= E && r < I + E) {
                w = F.colorToAsin[q.getCurrentItem().color].asin
                w || (w = F.mediaAsin)
                if ((z = c.isDimensionIngressEnabled(w)) && h) {
                  if ((w = c.getDimensionVariantList(w)) && w.includes(H[k - E].variant)) {
                    x--
                    continue
                  }
                } else if (z && 'DIMN' === H[k - E].variant) {
                  x--
                  continue
                }
                w = H[k - E].thumb
                z = g
                  .find('.ivThumb.placeholder')
                  .clone()
                  .removeClass('placeholder')
                  .attr({
                    id: 'ivImage_' + (k - E),
                    'data-csa-c-type': 'item',
                    'data-csa-c-component': 'imageBlock',
                    'data-csa-c-content-id': 'image-block-immersive-view-alt-image',
                    'data-csa-c-posy': k - E + 1,
                  })
                  .appendTo(G)
                z.find('.ivThumbImage').css(
                  'background',
                  'url("' + n.getResizedThumbnailURL(w) + '") center no-repeat',
                )
              }
          L()
          e = !1
        } else v()
        g = a('#ivImagesTab').height()
        m.css('height', g)
        l = m.find('#ivTitle').outerHeight(!0)
        h = m.find('#ivVariationSelection').outerHeight(!0)
        k = m.find('#ivThumbs')
        r = n.getDimension(k, 'margin-top') + n.getDimension(k, 'margin-bottom')
        k.css('height', g - l - h - r)
        m.find('#ivLargeImage').css('height', g)
        g = m.find('#ivStage')
        l =
          (m[0] && m[0].getBoundingClientRect && Math.floor(m[0].getBoundingClientRect().width)) ||
          m.width()
        g.css(
          'width',
          l -
            n.getDimension(m, 'padding-left') -
            n.getDimension(m, 'padding-right') -
            m.find('#ivThumbColumn').width() -
            n.getDimension(g, 'margin-left') -
            n.getDimension(g, 'margin-right'),
        )
        A = q.getCurrentItem()
        g =
          'hero-image' === A.type
            ? m.find('#ivHeroImage_' + A.index)
            : 'image' === A.type
              ? m.find('#ivImage_' + A.index)
              : c.isDefined(D)
                ? m.find('#ivHeroImage_' + A.index)
                : m.find('#ivImage_' + A.index)
        c.isjQueryObjDefined(g) || (g = m.find('#ivImage_0'))
        ba(g)
      }
      var U,
        F,
        q,
        m,
        D,
        H,
        E,
        I,
        A,
        w = navigator.userAgent.match(/msie|trident/i),
        e = !0,
        r = !1,
        g = !1,
        G = {},
        Y = {},
        l,
        k
      e = !0
      var L = h.once(function () {
        Q()
        V()
        n.attachImmersiveViewResizeHandler(T)
        n.attachTabDeselectHandler('ivImagesTab', R)
      })
      return function (c, g, k, l) {
        U = this
        F = c
        q = g
        U.render = function (c, g, k, l, h, m) {
          e = !0
          y()
          0 === E + I
            ? n.hideTabHeading('ivImagesTabHeading')
            : n.unhideTabHeading('ivImagesTabHeading')
          1 === E + I ? a('#ivThumbs').hide() : a('#ivThumbs').show()
        }
        U.update = function (a) {}
        n.attachTabSelectHandler('ivImagesTab', T)
      }
    },
  )
  ;('use strict')
  C.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'postMetric',
    'logFailedInteractionMetric',
    'postEarlyMetric',
    'imageBlockImmersiveViewUtils',
  ).register('ImageBlockTabbedImmersiveView', function (h, a, c, x, n, ja, y) {
    function z() {
      var c = Q.getImmersiveViewModalInstance().$container.find('.a-popover-wrapper'),
        m = c.find('.a-popover-inner')
      c = c.height() - y.getDimension(m, 'padding-top') - y.getDimension(m, 'padding-bottom')
      a('#iv-tab-view-container').css('height', c)
      V = a('#iv-tab-view-container ul.iv-tab-views li').filter(function () {
        return 'none' !== a(this).css('display')
      }).length
      1 < V
        ? (a('#iv-tab-view-container ul.iv-tab-views li').parent().show(),
          (m = a('#iv-tab-view-container ul.iv-tab-views li').parent().height()),
          (c -= m))
        : a('#iv-tab-view-container ul.iv-tab-views li').parent().hide()
      a('#iv-tab-view-container .iv-tab-content').css('height', c)
      h.trigger('dp:image-block:immersive-view:resize')
    }
    function P() {
      h.trigger('dp:image-block:immersive-view:reset')
    }
    function la(q) {
      if (c.isImmersiveViewEnabled(ba, Q.getCurrentItem().color))
        if (T) {
          var m = q.$event.originalEvent
          m.acknowledge && m.acknowledge(q.$currentTarget[0])
          n.isEnabled && ja.logImmersiveViewRequestServed(n)
          x.postCountMetric('dppc_immersiveViewOpened')
          c.isDefined(q) &&
            ('button-360-click' === q.action
              ? a('#iv360TabHeading').click()
              : 'videoIngressClick' === q.action
                ? ((R = q.clickTimeStamp), a('#ivVideosTabHeading').click())
                : 'showroomIngressClick' === q.action
                  ? ((R = q.clickTimeStamp), a('#ivShowroomTabHeading').click())
                  : 'dimensionIngressClick' === q.action
                    ? ((R = q.clickTimeStamp), a('#ivDimensionTabHeading').click())
                    : a('#ivImagesTabHeading').click())
          m = Q.getImmersiveViewModalInstance()
          if (c.isDefined(m)) m.show()
          else {
            q = a('#auiImmersiveViewDiv')
            m = Math.min(Math.max(a(v).height() - 150, 540), 1080)
            var D = Math.min(Math.max(a(v).width() - 75, 990), 1980)
            m = T.create(q, {
              name: 'immersiveView',
              activate: 'onclick',
              width: D,
              height: m,
              popoverLabel: 'ImmersiveView',
              hideHeader: !0,
            })
            Q.setImmersiveViewModalInstance(m)
            q.click()
          }
          N && ((N = !1), U(), h.trigger('dp:image-block:immersive-view:init'))
        } else
          v.performance &&
            performance.now &&
            v.ue &&
            ue.count &&
            ue.count(
              'DPIBClickFailedInteractionCount',
              (ue.count('DPIBClickFailedInteractionCount') || 0) + 1,
            )
      else x.postCountMetric('immersiveViewNotExistsClickCount')
    }
    var fa,
      ba,
      Q,
      K,
      N = !0,
      V = 0,
      R,
      T
    C.when('a-modal').execute(function (a) {
      T = a
    })
    var U = h.once(function () {
        h.on('a:popover:afterUpdatePosition:immersiveView', z)
        h.on('a:popover:afterShow:immersiveView', z)
        h.on('a:popover:afterHide:immersiveView', P)
      }),
      F = h.once(function () {
        var c = a('#iv-tab-view-container ul.iv-tab-views li')
        c.bind('click', function (m) {
          var n = c.filter('.iv-active')
          n.attr('id') !== a(this).attr('id') &&
            h.trigger('dp:ivTabs:' + n.find('a').attr('data-iv-tab-view') + ':deselect', m)
          c.removeClass('iv-active')
          a(this).addClass('iv-active')
          a('#iv-tab-view-container .iv-tab-content').hide()
          n = a(this).find('a').attr('data-iv-tab-view')
          a('#' + n).show()
          'ivVideosTab' === n && (m.clickTimeStamp = R || m.timeStamp)
          h.trigger('dp:ivTabs:' + n + ':select', m)
          x.postCountMetric('dppc_' + n)
          return !1
        })
      })
    return function (a, m, y, z) {
      fa = this
      ba = a
      Q = m
      n.refToModel = Q
      K = z
      fa.render = function (a, c, h, m, e, r) {
        x.postCountMetric('dpcc_altThumbs_' + c)
        N = !0
      }
      fa.update = function (a) {}
      fa.getTitle = function () {}
      fa.getVariationSelectionInfo = function () {}
      F()
      c.isImmersiveViewEnabled(ba, Q.getCurrentItem().color) ||
        c.addTag('immersiveViewNotAvailable')
      K.register('imageClick', la)
      K.register('button360Click', la)
      ba.collapsibleThumbnails &&
        h.declarative('thumb-action', ['click'], function (a) {
          a.$declarativeParent.hasClass('overlayRestOfImages') && la(a)
        })
      c.useTabbedImmersiveView(ba) &&
        (K.register('videoIngressClick', la),
        K.register('showroomIngressClick', la),
        K.register('dimensionIngressClick', la))
    }
  })
  ;('use strict')
  C.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'ImageBlockLoader',
    'postMetric',
    'logFailedInteractionMetric',
    'postEarlyMetric',
    'imageBlockImmersiveViewUtils',
  ).register('ImageBlockImmersiveView', function (h, a, c, x, n, ja, y, z) {
    function P(a) {
      return a.hiRes || a.large || a.main[a.main.length - 1]
    }
    function la() {
      f.find('#ivTitle').click(function () {
        ca.hide()
      })
    }
    function fa() {
      B = ib ? { type: '360-spin' } : J.getCurrentItem()
    }
    function ba() {
      var a = f.find('#ivStage'),
        b = ca.$container.find('.a-popover-wrapper'),
        c = b.find('.a-popover-inner')
      b = b.height() - z.getDimension(c, 'padding-top') - z.getDimension(c, 'padding-bottom')
      f.css('height', b)
      c = f.find('#ivTitle').outerHeight(!0)
      var d = f.find('#ivVariationSelection').outerHeight(!0),
        e = f.find('#ivMediaSelection').outerHeight(!0),
        g = f.find('#ivThumbs'),
        k = z.getDimension(g, 'margin-top') + z.getDimension(g, 'margin-bottom')
      g.css('height', b - c - d - e - k)
      f.find('#ivLargeImage').css('height', b)
      a.css(
        'width',
        f.width() -
          z.getDimension(f, 'padding-left') -
          z.getDimension(f, 'padding-right') -
          f.find('#ivThumbColumn').width() -
          z.getDimension(a, 'margin-left') -
          z.getDimension(a, 'margin-right'),
      )
    }
    function Q() {
      f.find('#ivMediaSelect').change(function () {
        var b = a(this).val()
        'all' === b
          ? (f.find('#ivVideoList').hide(),
            f.find('#ivThumbs').show(),
            f.find('.ivThumbVideo').show(),
            'chromeful-video' === B.type && f.find('#ivVideo_' + B.index).click())
          : 'images' === b
            ? (f.find('#ivVideoList').hide(),
              f.find('#ivThumbs').show(),
              f.find('.ivThumbVideo').hide(),
              'chromeful-video' === B.type &&
                (0 === d && 0 === X
                  ? f.find('#iv360').click()
                  : 0 === d
                    ? f.find('#ivHeroImage_0').click()
                    : f.find('#ivImage_0').click()))
            : 'videos' === b &&
              (f.find('#ivVideoList').show(),
              f.find('#ivThumbs').hide(),
              'chromeful-video' !== B.type
                ? f.find('#ivVideoList_0').click()
                : f.find('#ivVideoList_' + B.index).click())
      })
    }
    function K() {
      var a = f.find('#ivStage').find('#ivLargeImage'),
        b = a.width(),
        c = a.height(),
        d = a.find('.fullscreen')
      d.removeAttr('style')
      var e = d.width(),
        g = d.height()
      0 < d.length &&
        (d[0].naturalWidth && (e = d[0].naturalWidth),
        d[0].naturalHeight && (g = d[0].naturalHeight))
      a.css('cursor', 'auto')
      e = 0 === e ? 1 : e
      g = 0 === g ? 1 : g
      var k = Math.min(b / e, c / g),
        l = g * k,
        h = e * k
      1 > k
        ? (jb
            ? a.css('cursor', "url('" + p.staticImages.zoomIn + "'), auto")
            : (a.css('cursor', '-webkit-zoom-in'),
              a.css('cursor', '-moz-zoom-in'),
              a.css('cursor', 'zoom-in')),
          (Ra = !0))
        : (Ra = !1)
      e = Math.min(h, e)
      g = Math.min(l - 20, g)
      d.css({ 'margin-top': (c - g) / 2, 'margin-left': (b - e) / 2, height: g, width: e })
      a.css('visibility', 'visible')
      Qa = !1
    }
    function N(a) {
      var b = f.find('#ivLargeImage')
      b.css('visibility', 'hidden')
      b.empty()
      z.animateStageIn(b)
      b.append(a)
      K()
    }
    function V() {
      u && u.pause()
      f.find('#ivLarge360').css('display', 'none')
      f.find('#ivLargeVideo').css('display', 'none')
      f.find('#ivLargeImage').css('display', 'none')
      D()
    }
    function R(b) {
      V()
      f.find('#ivLargeImage').css('display', 'block')
      var d
      'hero-image' === b
        ? c.isDefined(na) && (d = P(na[B.index]))
        : c.isDefined(ea) && (d = P(ea[B.index]))
      if (c.isDefined(d)) {
        f.find('.fullscreen').remove()
        var ta = a('\x3cimg\x3e').attr('src', d).addClass('fullscreen'),
          e = f.find('#ivLargeImage')
        z.animateStageOut(e, function () {
          ta.load(function () {
            N(ta)
          })
          if (ta[0].complete) N(ta)
          else {
            e.empty()
            var b = (e.height() - 104) / 2,
              c = (e.width() - 80) / 2
            a('\x3cimg\x3e')
              .attr('src', p.staticImages.spinner)
              .css({ position: 'relative', top: b + 'px', left: c + 'px' })
              .appendTo(e)
          }
        })
      }
    }
    function T() {
      var a = parseInt(B.index, 10) + 1
      a >= oa.length || f.find('#ivVideo_' + a).click()
    }
    function U() {
      var a
      c.isDefined(oa) && (a = oa[B.index])
      if (c.isDefined(a)) {
        V()
        var b = f.find('#ivLargeVideo').css('display', 'block')
        u
          ? (u.isDetached() && u.attach(b[0]), c.loadMediaIntoAiry(u, a, La, p.tabletWeb), u.show())
          : ((u = c.createAiryInstanceForChromeful(b, a, La, 'ImmersiveView')),
            La.enableContinuousPlay && u.bind('ended', T))
        u.play({ isAsync: !0 })
      }
    }
    function F() {
      fa()
      var a =
        'hero-image' === B.type
          ? f.find('#ivHeroImage_' + B.index)
          : 'image' === B.type
            ? f.find('#ivImage_' + B.index)
            : 'chromeful-video' === B.type || 'chromeless-video' === B.type
              ? f.find('#ivVideo_' + B.index)
              : '360-spin' === B.type
                ? f.find('#iv360')
                : c.isDefined(na)
                  ? f.find('#ivHeroImage_' + B.index)
                  : f.find('#ivImage_' + B.index)
      c.isjQueryObjDefined(a) || (a = f.find('#ivImage_0'))
      q(a)
    }
    function q(a) {
      f.find('.ivThumb').removeClass('selected')
      a.addClass('selected')
      a.hasClass('ivThumbVideo')
        ? ((B.type = 'chromeful-video'), (B.index = a.attr('id').split('_')[1]), U())
        : a.hasClass('ivHeroImage')
          ? ((B.type = 'hero-image'), (B.index = a.attr('id').split('_')[1]), R(B.type))
          : a.hasClass('iv360Image')
            ? ((B.type = '360-spin'), (B.index = 0), m())
            : ((B.type = 'image'), (B.index = a.attr('id').split('_')[1]), R(B.type))
    }
    function m() {
      V()
      f.find('#ivLarge360').css('display', 'block')
      w()
      var a = f.find('#ivLarge360')
      a.css({ opacity: 0 })
      setTimeout(function () {
        a.css({ opacity: 0.4 })
        z.animateStageIn(a)
      }, 200)
      E()
      n.postCountMetric('dppc_click360')
      Ca = Date.now()
    }
    function D() {
      0 < Ca && (H('dppc_duration360', Date.now() - Ca), (Ca = 0))
    }
    function H(a, b) {
      v.ue && v.ue.count(a, b)
    }
    function E() {
      if (0 < xa) {
        var a = f.find('.iv360Hint')
        a.removeClass('iv360HintFaded')
        a.animate({ opacity: 1 }, 200)
      }
    }
    function I(b, c) {
      if (xa < b.length) {
        var d = a('\x3cimg /\x3e').css({
          display: 'block',
          width: 6 * ua + 'px',
          height: za + 'px',
        })
        d.hide()
        c.append(d)
        d.get(0).onload = function () {
          c.closest(document.documentElement).length &&
            (xa++,
            1 === xa && (E(), 0 < Ca && H('dppc_loadTime360', Date.now() - Ca)),
            0 < db && H('dppc_perSpriteloadTime360', Date.now() - db),
            f.find('#iv360Spinner').hide(),
            d.show(),
            (Na =
              5 *
              Z.imageLocations[Math.floor(Ma / Z.imageLocations[0].length)][
                Ma % Z.imageLocations[0].length
              ]),
            I(b, c))
        }
        d.attr('src', b[xa].replace(/(\._SP)\d+(,)\d+/, '$1' + Ba + '$2' + Aa))
        db = Date.now()
      }
    }
    function A(a) {
      if (c.isDefined(Z.spriteWidthSizes) && 0 < Z.spriteWidthSizes.length) {
        var b = Z.spriteWidthSizes,
          d = b.length,
          e = b[0],
          f = b[d - 1]
        if (a <= e) return e
        if (a > f) return f
        for (e = 0; e < d; e++) if (a > b[e] && a <= b[e + 1]) return b[e + 1]
      } else return a
    }
    function w() {
      var b = f.find('#ivLarge360')
      b.children('#image-360-sprites').length ||
        (b.append("\x3cdiv id\x3d'image-360-sprites'\x3e\x3c/div\x3e"),
        b.css({
          'margin-left': 0,
          'margin-top': 0,
          width: b.parent().width(),
          height: b.parent().height(),
          overflow: 'hidden',
          position: 'relative',
          '-ms-user-select': 'none',
          '-webkit-user-select': 'none',
          '-mos-user-select': 'none',
        }),
        a('\x3cimg\x3e')
          .attr('src', p.staticImages.spinnerNoLabel)
          .attr('id', 'iv360Spinner')
          .css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block',
          })
          .appendTo(b),
        (bb = !0),
        e())
    }
    function e() {
      if (c.isDefined(Z.spriteURLs) && c.isDefined(f) && bb && !cb) {
        var b = f.find('#ivLarge360'),
          d = a('\x3cdiv\x3e')
            .addClass('iv360Hint')
            .css({ position: 'absolute', width: '100%', bottom: 0, opacity: 0, display: 'block' })
        c.isDefined(Z.staticImages.hint360) &&
          a('\x3cimg\x3e')
            .css({ 'margin-left': 'auto', 'margin-right': 'auto', display: 'block' })
            .attr('src', Z.staticImages.hint360)
            .appendTo(d)
        a('\x3cdiv\x3e')
          .css({ 'text-align': 'center' })
          .text(p.staticStrings.dragToSpin)
          .appendTo(d)
        d.appendTo(b)
        d = Z.imageWidth
        var e = Z.imageHeight,
          h = b.parent().width(),
          t = b.parent().height(),
          m = 0,
          u = 0
        d / e > h / t
          ? ((Ba = A(h)),
            (Aa = Math.round((e / d) * Ba)),
            (ua = Math.ceil(h)),
            (za = Math.ceil((Aa / Ba) * h)),
            (u = (t - za) / 2))
          : ((Aa = A(t)),
            (Ba = Math.round((d / e) * Aa)),
            (za = Math.ceil(t)),
            (ua = Math.ceil((Ba / Aa) * t)),
            (m = (h - ua) / 2))
        b.css({
          'margin-left': m,
          'margin-top': u,
          width: ua + 'px',
          height: za + 'px',
          overflow: 'hidden',
          position: 'relative',
        })
        b.children('#image-360-sprites').css('width', 6 * ua + 'px')
        I(Z.spriteURLs, f.find('#image-360-sprites'), 0)
        d = f.find('#ivLarge360')
        d.bind('mousedown', Y)
        d.bind('touchstart', r)
        d.bind('touchmove', g)
        d.bind('touchend', G)
        a(document).bind('mousemove', l)
        a(document).bind('mouseup', k)
        c.isDefined(p.staticImages.grab) &&
          b.css('cursor', "url('" + p.staticImages.grab + "'), auto")
        cb = !0
      }
    }
    function r(a) {
      Pa = !0
      ab = a.originalEvent.targetTouches[0].clientX
    }
    function g(a) {
      Pa &&
        (L(a.originalEvent.targetTouches[0].clientX - ab),
        (ab = a.originalEvent.targetTouches[0].clientX))
    }
    function G(a) {
      Pa && (Pa = !1)
    }
    function Y(a) {
      Oa = !0
      $a = a.originalEvent.clientX
      c.isDefined(p.staticImages.grabbing) &&
        ((a = f.find('#ivLarge360')),
        a.css('cursor', "url('" + p.staticImages.grabbing + "'), auto"),
        a
          .parents('.a-declarative')
          .last()
          .css('cursor', "url('" + p.staticImages.grabbing + "'), auto"))
      return !1
    }
    function l(a) {
      Oa && (L(a.originalEvent.clientX - $a), ($a = a.originalEvent.clientX))
    }
    function k(a) {
      Oa &&
        ((Oa = !1),
        c.isDefined(p.staticImages.grab) &&
          ((a = f.find('#ivLarge360')),
          a.css('cursor', "url('" + p.staticImages.grab + "'), auto"),
          a.parents('.a-declarative').last().css('cursor', 'auto')))
    }
    function L(a) {
      for (a = Na -= (a / ua) * 180; 0 > a; ) a += 360
      for (; 360 < a; ) a -= 360
      Na = a
      a = 360
      for (var b = 0; b < xa; b++)
        for (var d = 0; d < Z.imageLocations[b].length; d++) {
          var e = Math.abs(Na - 5 * Z.imageLocations[b][d])
          if (e < a) {
            a = e
            var g = b * Z.imageLocations[0].length + d
          }
        }
      g !== Ma &&
        ((a = Math.floor(g / Z.imageLocations[0].length)),
        a !== Math.floor(Ma / Z.imageLocations[0].length) &&
          (c.isDefined(eb) || (eb = document.createElement('canvas').getContext('2d')),
          (b = f.find('#image-360-sprites').children()),
          eb.drawImage(b[a], 0, 0)),
        (a = f.find('.iv360Hint').not('.iv360HintFaded')),
        c.isDefined(a) && (a.addClass('iv360HintFaded'), a.animate({ opacity: 0 }, 750)))
      Ma = g
      a = (g % Z.imageLocations[0].length) * -1 * ua
      g = -1 * Math.floor(g / Z.imageLocations[0].length) * za
      b = f.find('#ivLarge360').children('#image-360-sprites')
      b.css('-webkit-transform', 'translate3d(' + a + 'px, ' + g + 'px, 0)')
      b.css('transform', 'translate3d(' + a + 'px, ' + g + 'px, 0)')
    }
    function O() {
      f.delegate('.ivThumb', 'click', function () {
        var b = a(this)
        q(b)
      })
      f.delegate('.ivThumbVideoListOuter', 'click', function () {
        f.find('.ivThumbVideoListOuter').removeClass('selected')
        var b = a(this)
        b.addClass('selected')
        B.type = 'chromeful-video'
        B.index = b.attr('id').split('_')[1]
        U()
      })
    }
    function ha() {
      u &&
        !u.isDetached() &&
        ((La.volume = u.getVolume()),
        u.detach(),
        !document.all || v.atob || document.addEventListener || (u = null))
      f.find('#ivLargeImage').empty()
      D()
    }
    function S(a, b) {
      return 0 < b ? b / 2 : Math.min(0, Math.max(b, a))
    }
    function M(b) {
      var d = ya.left - (b.pageX - Ua[0]) * Ta
      h.capabilities.rtl && (d = ya.left - (a(v).width() - b.pageX - Ua[0]) * Ta)
      b = ya.top - (b.pageY - Ua[1]) * Ta
      d = S(d, Sa.left)
      b = S(b, Sa.top)
      f.find('.fullscreen').css({ left: d, top: b })
    }
    function aa() {
      f.delegate('#ivLargeImage', 'click', function (a) {
        if (Qa) K()
        else if (Ra) {
          f.find('.fullscreen').removeAttr('style')
          if (Ra) {
            var b = f.find('#ivLargeImage'),
              d = b.find('.fullscreen')
            jb
              ? b.css('cursor', "url('" + p.staticImages.zoomOut + "'), auto")
              : (b.css('cursor', '-webkit-zoom-out'),
                b.css('cursor', '-moz-zoom-out'),
                b.css('cursor', 'zoom-out'))
            Qa = !0
            var c = f.find('#ivLargeImage')
            Sa.left = c.width() - d.width()
            Sa.top = c.height() - d.height()
            c = b.height() / 2
            var e = b.width() / 2
            Ua = [b.offset().left + e, b.offset().top + c]
            ya.top = c - d.height() / 2
            ya.left = e - d.width() / 2
            d.css({ position: 'relative', left: ya.left, top: ya.top })
            Ta = Math.max(d.height() / b.height(), d.width() / b.width())
          }
          M(a)
        }
      })
      f.delegate('#ivLargeImage', 'mousemove', function (a) {
        Qa && M(a)
      })
    }
    function W(e) {
      if (c.isImmersiveViewEnabled(p, J.getCurrentItem().color))
        if (gb) {
          var g = e.$event.originalEvent
          g.acknowledge && g.acknowledge(e.$currentTarget[0])
          ib = c.isDefined(e) && 'button-360-click' === e.action
          ja.isEnabled && y.logImmersiveViewRequestServed(ja)
          n.postCountMetric('dppc_immersiveViewOpened')
          if (c.isDefined(ca)) ca.show()
          else {
            e = a('#auiImmersiveViewDiv')
            g = a(v).height() - 150
            var k = a(v).width() - 75
            ca = gb.create(e, {
              name: 'immersiveView',
              activate: 'onclick',
              width: k,
              height: g,
              popoverLabel: 'ImmersiveView',
              hideHeader: !0,
            })
            e.click()
          }
          if (fb) {
            f = a('#ivMain')
            e = J.getCurrentItem().color
            ea = p.colorImages[e]
            na = p.heroImage[e]
            oa = p.useChildVideos ? p.colorToVideo[e] : p.videos
            hb = ka() && p.spin360ColorEnabled[e]
            Z = ka() ? p.spin360ColorData[e] : ia
            fa()
            t = X = b = d = 0
            c.isDefined(na) && (X = na.length)
            c.isDefined(ea) && (d = ea.length)
            c.isDefined(oa) && (b = oa.length)
            hb && (t = 1)
            z.populateTitle(f.find('#ivTitle'), 45, p)
            z.populateVariationSelection(f.find('#ivVariationSelection'))
            e = f.find('#ivMediaSelect')
            0 === d + t || 0 === b
              ? (e.parent().hide(), f.find('#ivThumbs').addClass('noMediaSelection'))
              : (e.empty(),
                a('\x3coption/\x3e')
                  .attr('value', 'all')
                  .prop('selected', !0)
                  .text(p.staticStrings.allMedia + ' (' + (X + d + t + b) + ')')
                  .appendTo(e),
                a('\x3coption/\x3e')
                  .attr('value', 'images')
                  .text(p.staticStrings.images + ' (' + (X + d + t) + ')')
                  .appendTo(e),
                a('\x3coption/\x3e')
                  .attr('value', 'videos')
                  .text(p.staticStrings.videos + ' (' + b + ')')
                  .appendTo(e),
                e.parent().show(),
                e.val('all'))
            e = f.find('#ivThumbs')
            e.find('.ivRow').not('.placeholder').remove()
            g = X + d + b + t
            for (var l = (k = 0); k < g; )
              for (
                var m = e.find('.ivRow.placeholder').clone().removeClass('placeholder').appendTo(e),
                  u = 0;
                3 > u && k < g;
                u++, k++, l++
              )
                if (l < X) {
                  var r = na[k].thumb,
                    B = e
                      .find('.ivThumb.placeholder')
                      .clone()
                      .removeClass('placeholder')
                      .addClass('ivHeroImage')
                      .attr('id', 'ivHeroImage_' + k)
                      .appendTo(m)
                  B.find('.ivThumbImage').css(
                    'background',
                    'url("' + z.getResizedThumbnailURL(r) + '") center no-repeat',
                  )
                } else if (l >= X && l < d + X)
                  (r = ea[k - X].thumb),
                    (B = e
                      .find('.ivThumb.placeholder')
                      .clone()
                      .removeClass('placeholder')
                      .attr('id', 'ivImage_' + (k - X))
                      .appendTo(m)),
                    B.find('.ivThumbImage').css(
                      'background',
                      'url("' + z.getResizedThumbnailURL(r) + '") center no-repeat',
                    )
                else if (l >= X + d && l < d + X + t)
                  (B = e
                    .find('.ivThumb.placeholder')
                    .clone()
                    .removeClass('placeholder')
                    .addClass('iv360Image')
                    .attr('id', 'iv360')
                    .appendTo(m)),
                    B.find('.ivThumbImage').css(
                      'background',
                      'url("' +
                        (c.isDefined(p.staticImages.icon360)
                          ? z.getResizedThumbnailURL(p.staticImages.icon360, !0)
                          : '') +
                        '") center no-repeat',
                    )
                else if (
                  ((r = oa[k - d - X - t]),
                  (B = e
                    .find('.ivThumb.placeholder')
                    .clone()
                    .removeClass('placeholder')
                    .addClass('ivThumbVideo')
                    .attr('id', 'ivVideo_' + (k - d - X - t))
                    .appendTo(m)),
                  B.find('.ivThumbImage').css(
                    'background',
                    'url("' + r.thumbUrl + '") center no-repeat',
                  ),
                  c.isDefined(r))
                ) {
                  var q = { position: 'triggerTop' },
                    G = f
                      .find('#ivThumbs')
                      .find('.ivThumbVideoPopover.placeholder')
                      .clone()
                      .removeClass('placeholder')
                  G.find('.ivVideoPopoverTitle').text(r.title)
                  G.find('.ivVideoPopoverDuration').text(r.durationTimestamp)
                  q.inlineContent = G[0]
                  h.declarative.create(B, 'a-tooltip', q)
                }
            e = f.find('#ivVideoList')
            e.find('.ivThumbVideoListOuter').not('.placeholder').remove()
            g = e.find('.placeholder')
            for (k = 0; k < b; k++)
              (l = oa[k]),
                (m = g.clone().removeClass('placeholder').appendTo(e)),
                m.attr('id', 'ivVideoList_' + k),
                m
                  .find('.ivThumbImage')
                  .css('background', 'url("' + l.thumbUrl + '") center no-repeat'),
                m.find('.ivThumbTitle').text(l.title),
                m.find('.ivThumbDuration').text(l.durationTimestamp)
            f.find('#ivLarge360').empty()
            xa = 0
            cb = bb = !1
            La = p.airyConfig
            fb = !1
            Hb()
          }
        } else
          v.performance &&
            performance.now &&
            v.ue &&
            ue.count &&
            ue.count(
              'DPIBClickFailedInteractionCount',
              (ue.count('DPIBClickFailedInteractionCount') || 0) + 1,
            )
      else n.postCountMetric('immersiveViewNotExistsClickCount')
    }
    function wa(a) {
      var b = p.colorToAsin[a],
        d = {},
        g = 500
      if (b && b.asin) {
        d.params = { asin: b.asin }
        var f = '360' + b.asin,
          k = Date.now()
        d.success = function (b) {
          H('dppc_asyncRequestTime360', Date.now() - k)
          b && c.isDefined(b.spin360.spin360Model)
            ? (c.ajaxState(f, 'success'),
              (p.spin360ColorData[a] = b.spin360.spin360Model),
              a === J.getCurrentItem().color && ((Z = p.spin360ColorData[a]), e()))
            : d.error()
        }
        d.error = function () {
          n.postCountMetric('dppc_asyncFailed360')
          H('dppc_asyncRequestTime360', Date.now() - k)
          g *= 2
          16e3 >= g
            ? setTimeout(function () {
                k = Date.now()
                x.load('/gp/product/features/apparel-main-image/360.html', d)
              }, g)
            : c.ajaxState(f, 'fail')
        }
        ;(c.ajaxState(f) && 'fail' !== c.ajaxState(f)) ||
          (x.load('/gp/product/features/apparel-main-image/360.html', d), c.ajaxState(f, 'sent'))
      }
    }
    function ka() {
      return c.isDefined(p.spin360ConfigEnabled) && p.spin360ConfigEnabled
    }
    var da,
      p,
      J,
      ma,
      ca,
      f,
      na,
      ea,
      oa,
      X,
      d,
      b,
      t,
      B,
      u,
      La,
      Z,
      hb,
      ua,
      za,
      Aa,
      Ba,
      $a,
      ab,
      ib = !1,
      bb = !1,
      cb = !1,
      Na = 0,
      Ma = 0,
      Ca = 0,
      db = 0,
      Oa = !1,
      Pa = !1,
      xa = 0,
      eb,
      jb = navigator.userAgent.match(/msie|trident/i),
      fb = !0,
      Qa = !1,
      Ra = !1,
      Sa = {},
      ya = {},
      Ta,
      Ua,
      gb
    C.when('a-modal').execute(function (a) {
      gb = a
    })
    var Hb = h.once(function () {
      Q()
      O()
      aa()
      h.on('a:popover:afterUpdatePosition:immersiveView', ba)
      h.on('a:popover:afterShow:immersiveView', F)
      h.on('a:popover:afterHide:immersiveView', ha)
      la()
    })
    return function (b, d, e, g) {
      da = this
      p = b
      J = d
      ja.refToModel = J
      ma = g
      ka() &&
        ((p.spin360ColorData[p.landingAsinColor] = p.spin360ColorData[p.defaultColor]),
        (p.spin360ColorEnabled[p.landingAsinColor] = p.spin360ColorEnabled[p.defaultColor]))
      c.isDefined(p.staticImages.icon360) &&
        a('#imageBlock #altImages ul')
          .find('.360IngressTemplate')
          .find('img')
          .attr('src', z.addStyleCodeToURL(p.staticImages.icon360, '_FMpng_RI_'))
      da.render = function (a, b, d, e, g, f) {
        fb = !0
        ka() &&
          p.spin360ColorEnabled[a] &&
          !c.isDefined(p.spin360ColorData[a]) &&
          ((p.spin360ColorData[a] = {}), wa(a))
        c.isImmersiveViewEnabled(p, J.getCurrentItem().color) &&
          ka() &&
          p.spin360ColorEnabled[a] &&
          (b === p.maxAlts &&
            ((a = e.find('.item.imageThumbnail')),
            (d = e.find('.item.videoThumbnail')),
            c.isDefined(d) && 1 < d.length ? d.last().remove() : a.last().remove(),
            b--),
          (a = e
            .find('.360IngressTemplate')
            .clone()
            .removeClass('360IngressTemplate')
            .removeClass('aok-hidden')
            .addClass('item')),
          h.declarative.create(a, 'button-360-click'),
          e.append(a),
          b++,
          n.postCountMetric('dppc_display360'))
        return b
      }
      da.update = function (a) {}
      c.isImmersiveViewEnabled(p, J.getCurrentItem().color) || c.addTag('immersiveViewNotAvailable')
      ma.register('imageClick', W)
      ma.register('button360Click', W)
    }
  })
  ;('use strict')
  C.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'ImageBlockLoader',
    'nexusLogger360',
    'postMetric',
    'imageBlockImmersiveViewUtils',
    'hit-spin360-feature-data',
    'hit-spin360-constants',
  ).register('ImageBlockImmersiveView360', function (h, a, c, x, n, v, y, z, C) {
    function P() {
      var b = a('#iv360Tab').height()
      l.css('height', b)
      var d = l.find('#ivTitle360').outerHeight(!0),
        c = l.find('#ivVariationSelection360').outerHeight(!0),
        e = l.find('#ivThumbs360'),
        g = y.getDimension(e, 'margin-top') + y.getDimension(e, 'margin-bottom')
      e.css('height', b - d - c - g)
      b = l.find('#ivStage360')
      d =
        (l[0] && l[0].getBoundingClientRect && Math.floor(l[0].getBoundingClientRect().width)) ||
        l.width()
      b.css(
        'width',
        d -
          y.getDimension(l, 'padding-left') -
          y.getDimension(l, 'padding-right') -
          l.find('#ivThumbColumn360').width() -
          y.getDimension(b, 'margin-left') -
          y.getDimension(b, 'margin-right'),
      )
    }
    function ja() {
      N()
      var a = l.find('#ivLarge360')
      a.css({ opacity: 0 })
      setTimeout(function () {
        a.css({ opacity: 0.4 })
        y.animateStageIn(a)
      }, 200)
      ba()
    }
    function ba() {
      if (0 < f) {
        var a = l.find('.iv360Hint')
        a.removeClass('iv360HintFaded')
        a.animate({ opacity: 1 }, 200)
      }
    }
    function Q(b, d) {
      if (f < b.length) {
        var c = a('\x3cimg /\x3e').css({ display: 'block', width: 6 * L + 'px', height: O + 'px' })
        c.hide()
        d.append(c)
        c.get(0).onload = function () {
          d.closest(document.documentElement).length &&
            (f++,
            1 === f &&
              (ba(),
              0 < p &&
                (n.time('dppc_loadTime360', Date.now() - p, g.mediaAsin),
                v.postTimeMetric('dppc_loadTime360', Date.now() - p))),
            0 < J &&
              (n.time('dppc_perSpriteloadTime360', Date.now() - J, g.mediaAsin),
              v.postTimeMetric('dppc_perSpriteloadTime360', Date.now() - J)),
            l.find('#iv360Spinner').hide(),
            c.show(),
            (ka =
              5 *
              k.imageLocations[Math.floor(da / k.imageLocations[0].length)][
                da % k.imageLocations[0].length
              ]),
            Q(b, d))
        }
        c.attr('src', b[f].replace(/(\._SP)\d+(,)\d+/, '$1' + S + '$2' + ha))
        J = Date.now()
      }
    }
    function K(a) {
      if (c.isDefined(k.spriteWidthSizes) && 0 < k.spriteWidthSizes.length) {
        var b = k.spriteWidthSizes,
          d = b.length,
          e = b[0],
          g = b[d - 1]
        if (a <= e) return e
        if (a > g) return g
        for (e = 0; e < d; e++) if (a > b[e] && a <= b[e + 1]) return b[e + 1]
      } else return a
    }
    function N() {
      var b = l.find('#ivLarge360')
      b.children('#image-360-sprites').length ||
        (b.append("\x3cdiv id\x3d'image-360-sprites'\x3e\x3c/div\x3e"),
        b.css({
          'margin-left': 0,
          'margin-top': 0,
          width: b.parent().width(),
          height: b.parent().height(),
          overflow: 'hidden',
          position: 'relative',
          '-ms-user-select': 'none',
          '-webkit-user-select': 'none',
          '-mos-user-select': 'none',
        }),
        a('\x3cimg\x3e')
          .attr('src', g.staticImages.spinnerNoLabel)
          .attr('id', 'iv360Spinner')
          .css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block',
          })
          .appendTo(b),
        (W = !0),
        V())
    }
    function V() {
      if (c.isDefined(k.spriteURLs) && c.isDefined(l) && W && !wa) {
        var b = l.find('#ivLarge360'),
          d = a('\x3cdiv\x3e')
            .addClass('iv360Hint')
            .css({ position: 'absolute', width: '100%', bottom: 0, opacity: 0, display: 'block' })
        c.isDefined(k.staticImages.hint360) &&
          a('\x3cimg\x3e')
            .css({ 'margin-left': 'auto', 'margin-right': 'auto', display: 'block' })
            .attr('src', k.staticImages.hint360)
            .appendTo(d)
        a('\x3cdiv\x3e')
          .css({ 'text-align': 'center' })
          .text(g.staticStrings.dragToSpin)
          .appendTo(d)
        d.appendTo(b)
        d = k.imageWidth
        var e = k.imageHeight,
          f = b.parent().width(),
          h = b.parent().height(),
          r = 0,
          n = 0
        d / e > f / h
          ? ((S = K(f)),
            (ha = Math.round((e / d) * S)),
            (L = Math.ceil(f)),
            (O = Math.ceil((ha / S) * f)),
            (n = (h - O) / 2))
          : ((ha = K(h)),
            (S = Math.round((d / e) * ha)),
            (O = Math.ceil(h)),
            (L = Math.ceil((S / ha) * h)),
            (r = (f - L) / 2))
        b.css({
          'margin-left': r,
          'margin-top': n,
          width: L + 'px',
          height: O + 'px',
          overflow: 'hidden',
          position: 'relative',
        })
        b.children('#image-360-sprites').css('width', 6 * L + 'px')
        Q(k.spriteURLs, l.find('#image-360-sprites'), 0)
        d = l.find('#ivLarge360')
        d.bind('mousedown', F)
        d.bind('touchstart', R)
        d.bind('touchmove', T)
        d.bind('touchend', U)
        a(document).bind('mousemove', q)
        a(document).bind('mouseup', m)
        c.isDefined(g.staticImages.grab) &&
          b.css('cursor', "url('" + g.staticImages.grab + "'), auto")
        wa = !0
      }
    }
    function R(a) {
      ca = !0
      aa = a.originalEvent.targetTouches[0].clientX
    }
    function T(a) {
      ca &&
        (D(a.originalEvent.targetTouches[0].clientX - aa),
        (aa = a.originalEvent.targetTouches[0].clientX))
    }
    function U(a) {
      ca && (ca = !1)
    }
    function F(a) {
      ma = !0
      M = a.originalEvent.clientX
      c.isDefined(g.staticImages.grabbing) &&
        ((a = l.find('#ivLarge360')),
        a.css('cursor', "url('" + g.staticImages.grabbing + "'), auto"),
        a
          .parents('.a-declarative')
          .last()
          .css('cursor', "url('" + g.staticImages.grabbing + "'), auto"))
      return !1
    }
    function q(a) {
      ma && (D(a.originalEvent.clientX - M), (M = a.originalEvent.clientX))
    }
    function m(a) {
      ma &&
        ((ma = !1),
        c.isDefined(g.staticImages.grab) &&
          ((a = l.find('#ivLarge360')),
          a.css('cursor', "url('" + g.staticImages.grab + "'), auto"),
          a.parents('.a-declarative').last().css('cursor', 'auto')))
    }
    function D(a) {
      ka -= (a / L) * 180
      ea && (n.count('dppc_360dragToSpin', g.mediaAsin), v.postCountMetric('dppc_360dragToSpin'))
      ea = !1
      for (a = ka; 0 > a; ) a += 360
      for (; 360 < a; ) a -= 360
      ka = a
      a = 360
      for (var b = 0; b < f; b++)
        for (var d = 0; d < k.imageLocations[b].length; d++) {
          var e = Math.abs(ka - 5 * k.imageLocations[b][d])
          if (e < a) {
            a = e
            var h = b * k.imageLocations[0].length + d
          }
        }
      h !== da &&
        ((a = Math.floor(h / k.imageLocations[0].length)),
        a !== Math.floor(da / k.imageLocations[0].length) &&
          (c.isDefined(na) || (na = document.createElement('canvas').getContext('2d')),
          (b = l.find('#image-360-sprites').children()),
          na.drawImage(b[a], 0, 0)),
        (a = l.find('.iv360Hint').not('.iv360HintFaded')),
        c.isDefined(a) && (a.addClass('iv360HintFaded'), a.animate({ opacity: 0 }, 750)))
      da = h
      a = (h % k.imageLocations[0].length) * -1 * L
      h = -1 * Math.floor(h / k.imageLocations[0].length) * O
      b = l.find('#ivLarge360').children('#image-360-sprites')
      b.css('-webkit-transform', 'translate3d(' + a + 'px, ' + h + 'px, 0)')
      b.css('transform', 'translate3d(' + a + 'px, ' + h + 'px, 0)')
    }
    function H() {
      if (X) {
        l = a('#ivMain360')
        var b = G.getCurrentItem().color
        I() && A(b)
        k = I() ? g.spin360ColorData[b] : ia
        y.populateTitle(l.find('#ivTitle360'), 160, g)
        y.populateVariationSelection(l.find('#ivVariationSelection360'))
        l.find('#ivLarge360').empty()
        f = 0
        wa = W = !1
        da = ka = 0
        d()
        X = !1
      }
      0 !== a('#iv360Tab').height() &&
        (y.detachImmersiveViewResizeHandler(H),
        P(),
        ja(),
        (p = Date.now()),
        (oa = ea = !0),
        n.count('dppc_click360', g.mediaAsin),
        v.postCountMetric('dppc_click360'))
    }
    function E(a, d, e) {
      a = g.colorToAsin[e]
      var b = {},
        f = 500
      if (!a || !a.asin)
        if (e === g.defaultColor) a = { asin: g.winningAsin }
        else return
      b.params = { asin: a.asin }
      var k = '360' + a.asin,
        h = Date.now()
      b.success = function (a) {
        n.time('dppc_asyncRequestTime360', Date.now() - h, g.mediaAsin)
        v.postTimeMetric('dppc_asyncRequestTime360', Date.now() - h)
        a && c.isDefined(a.spin360)
          ? ((a = a.spin360.spin360Model) && z.setData(a), c.ajaxState(k, 'success'))
          : b.error()
      }
      b.error = function () {
        n.count('dppc_asyncFailedTransient360', g.mediaAsin)
        v.postCountMetric('dppc_asyncFailedTransient360')
        n.time('dppc_asyncRequestTime360', Date.now() - h, g.mediaAsin)
        v.postTimeMetric('dppc_asyncRequestTime360', Date.now() - h)
        f *= 2
        16e3 >= f
          ? setTimeout(function () {
              h = Date.now()
              x.load('/gp/product/features/apparel-main-image/360.html', b)
            }, f)
          : (n.count('dppc_asyncFailed360', g.mediaAsin),
            v.postCountMetric('dppc_asyncFailed360'),
            c.ajaxState(k, 'fail'))
      }
      ;(c.ajaxState(k) && 'fail' !== c.ajaxState(k)) ||
        (x.load('/gp/product/features/apparel-main-image/360.html', b), c.ajaxState(k, 'sent'))
    }
    function I() {
      return g && c.isDefined(g.spin360ConfigEnabled) && g.spin360ConfigEnabled
    }
    function A(a) {
      return c.isDefinedAndNotEmpty(g.spin360ColorData[a])
        ? !0
        : c.isDefined(g.spin360LazyLoadEnabled) && g.spin360LazyLoadEnabled
    }
    function w() {
      oa &&
        (n.time('dppc_duration360', Date.now() - p, g.mediaAsin),
        v.postTimeMetric('dppc_duration360', Date.now() - p),
        (oa = !1))
    }
    function e(a) {
      a = g.colorToAsin[a.color] && g.colorToAsin[a.color].asin
      a || (a = g.mediaAsin)
      return a
    }
    var r,
      g,
      G,
      Y,
      l,
      k,
      L,
      O,
      ha,
      S,
      M,
      aa,
      W = !1,
      wa = !1,
      ka = 0,
      da = 0,
      p = 0,
      J = 0,
      ma = !1,
      ca = !1,
      f = 0,
      na,
      ea = !0,
      oa = !1,
      X = !0,
      d = h.once(function () {
        y.attachImmersiveViewResizeHandler(H)
        y.attachImmersiveViewResizeHandler(P)
        y.attachImmersiveViewResetHandler(w)
        y.attachTabDeselectHandler('iv360Tab', w)
      })
    return function (b, d, f, l) {
      r = this
      g = b
      G = d
      Y = l
      b = g.landingAsinColor
      d = g.defaultColor
      c.isDefined(g.staticImages.icon360) &&
        a('#imageBlock #altImages ul')
          .find('.360IngressTemplate')
          .find('img')
          .attr('src', y.addStyleCodeToURL(g.staticImages.icon360, '_FMpng_RI_'))
      I() &&
        (g.spin360ColorData || (g.spin360ColorData = {}),
        b === d && c.isDefinedAndEmpty(g.spin360ColorData[d]) && delete g.spin360ColorData[d])
      h.on(C.TWISTER_DATA_EVENT, function (a) {
        e(G.getCurrentItem()) === a &&
          ((k = z.getData(a)),
          V(),
          (a = { type: 'updatedData', data: G.getCurrentItem() }),
          Y.dispatch('updateView', a))
      })
      r.render = function (b, d, f, k, l, m) {
        X = !0
        !I() || (c.isDefinedAndEmpty(g.spin360ColorData[b]) && !z.getData(e(G.getCurrentItem())))
          ? y.hideTabHeading('iv360TabHeading')
          : ((g.spin360ColorData[b] = z.getData(e(G.getCurrentItem()))),
            c.isDefinedAndNotEmpty(g.spin360ColorData[b])
              ? (a('#ivThumbs360').hide(),
                y.unhideTabHeading('iv360TabHeading'),
                c.isImmersiveViewEnabled(g, G.getCurrentItem().color) &&
                  I() &&
                  A(b) &&
                  (d === g.maxAlts &&
                    ((b = k.find('.item.imageThumbnail')),
                    (f = k.find('.item.videoThumbnail')),
                    c.isDefined(f) && 1 < f.length ? f.last().remove() : b.last().remove(),
                    d--),
                  (b = k
                    .find('.360IngressTemplate')
                    .clone()
                    .removeClass('360IngressTemplate')
                    .removeClass('aok-hidden')
                    .addClass('item')),
                  h.declarative.create(b, 'button-360-click'),
                  k.append(b),
                  n.count('dppc_display360', g.mediaAsin),
                  v.postCountMetric('dppc_display360')))
              : c.isDefined(g.spin360LazyLoadEnabled) && g.spin360LazyLoadEnabled
                ? ((g.spin360ColorData[b] = {}), y.hideTabHeading('iv360TabHeading'), E(k, d, b))
                : y.hideTabHeading('iv360TabHeading'))
      }
      r.update = function (a) {}
      y.attachTabSelectHandler('iv360Tab', H)
    }
  })
  C.register('nexusLogger360', function () {
    return {
      count: function (h, a) {
        v.ue &&
          v.ue.event({ asin: a, metricName: h, metricValue: 1 }, 'hit-360', 'hit360.clientEvent.3')
      },
      time: function (h, a, c) {
        v.ue &&
          v.ue.event({ asin: c, metricName: h, metricValue: a }, 'hit-360', 'hit360.clientEvent.3')
      },
    }
  })
  C.register('hit-spin360-constants', function () {
    return { TWISTER_DATA_EVENT: 'spin360TwisterData' }
  })
  C.when('A', 'hit-spin360-constants').register('hit-spin360-feature-data', function (h, a) {
    var c = {}
    return {
      setData: function (x) {
        var n = x.asin
        c[n] || ((c[n] = x), h.trigger(a.TWISTER_DATA_EVENT, n))
      },
      getData: function (a) {
        return c[a]
      },
    }
  })
  ;('use strict')
  C.when('postMetric').register('ImageBlockImmersiveViewShowroom', function (h) {
    function a() {
      this.render = function () {}
      this.update = function () {}
    }
    return function (c, x, n, v) {
      var y = !1,
        z = new a()
      C.now('showroom-image-block-view').execute('showroom-image-block-view-decider', function (a) {
        a !== ia && ((y = !0), (z = new a(c, x, n, v)))
      })
      c &&
        !0 === c.showroomEnabled &&
        !1 === y &&
        h.postCountMetric('showroom:atf:imageBlock:hiddenDueToAssetsNotPresentInTime')
      return z
    }
  })
  ;('use strict')
  C.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'postMetric',
    'imageBlockImmersiveViewUtils',
    'vse_ns_preLoaderHook',
    'vse_ns_lazyLoaderHook',
  ).register('ImageBlockImmersiveViewVideos', function (h, a, c, x, n, C, y) {
    function z() {
      E.delegate('.ivThumb', 'click', function () {
        var c = a(this)
        E.find('.ivThumb').removeClass('selected')
        c.addClass('selected')
        c.hasClass('ivThumbVideo') &&
          ((I.type = 'chromeful-video'), (I.index = c.attr('id').split('_')[1]))
      })
    }
    function P() {
      if (W) {
        var c = a('#ivVideosTab').height()
        E.css('height', c)
        var e = E.find('.vse-lb-container')
        A = c - n.getDimension(e, 'padding-top') - n.getDimension(e, 'padding-bottom')
        e.css({ 'max-height': c, overflow: 'hidden' })
        if (ha) {
          E.css({ 'max-width': Math.floor(1.77 * A) })
          return
        }
        c = E.find('.vse-player-container')
        e = E.find('.vse-video-action-strip')
        var f = E.find('.vse-lb-video-metadata'),
          g = Math.floor(A - n.getDimension(f, 'height') - n.getDimension(e, 'height')),
          d = Math.floor(1.77 * g)
        c.css({ 'max-height': g, 'max-width': d, marginLeft: 'auto', marginRight: 'auto' })
        f.css({ 'max-width': d, marginLeft: 'auto', marginRight: 'auto' })
        e.css({ 'max-width': d, marginLeft: 'auto', marginRight: 'auto' })
      }
      S &&
        ((c = E.find('.vse-vertical-scroll')),
        (e = n.getDimension(c, 'margin-top') + n.getDimension(c, 'margin-bottom')),
        c.css('max-height', A - e))
    }
    function ja() {
      fa()
      w && w.pause()
      M = !1
      L = !0
      G = null
      aa = !0
      W = !1
    }
    function fa() {
      M = !1
      w && w.pause()
    }
    function ba(e) {
      G = e.clickTimeStamp ? e.clickTimeStamp : h.now()
      c.isDefined(H) && (H.eventTimestamp = G)
      M = !0
      O &&
        (y.get(h, '#ivVideoBlock', D, ca, f),
        (E = a('#ivVideoBlock')),
        m.getCurrentItem(),
        (I = m.getCurrentItem()),
        p(),
        T())
      P()
      O = !1
      N()
    }
    function Q(c) {
      O && ((E = a('#ivVideoBlock')), m.getCurrentItem(), (I = m.getCurrentItem()), p())
      M && N()
      P()
    }
    function K(a) {
      w = a.player
      x.postTimeMetric('vse_ib_desktop_player_initialisation_duration', h.now() - da)
      q.imageBlockRenderingStartTime &&
        x.postTimeMetric(
          'vse_ib_desktop_time_to_player_interactive',
          h.now() - q.imageBlockRenderingStartTime,
        )
      W && (T(), N())
    }
    function N() {
      if (
        w &&
        M &&
        (E.find('.vse-lb-container').animate({ opacity: 1 }, 200),
        w.play(H),
        x.postCountMetric('dpcc_vse_videoBlock_video_played'),
        L)
      ) {
        var a = v.ue
        a &&
          ((a = a.count('dpcc_vse_videoingressclick')),
          (a = new Date().getTime() - a),
          x.postTimeMetric('dpcc_vse_vitff', a),
          (L = !1))
      }
    }
    function V() {
      h.trigger('vse:detailpage-imageblock:page:lightBoxClosed')
    }
    function R(a) {
      e = a.popover.$popover
      W = !0
      T()
    }
    function T() {
      if (W && aa && M && w) {
        e.addClass(h.$(e).find('.vse-lb-container').data('cssClass'))
        var a = H
        ia && ((a = ka), (ia = !1))
        h.trigger('vse:detailpage-imageblock:page:lightBoxOpened', {
          lightBoxId: 'ivVideoBlock',
          assetSpec: a,
        })
        P()
        aa = !1
      }
    }
    function U(a) {
      document.getElementsByClassName('videoBlockIngress')[0].click()
      ka = a
      ia = !0
    }
    var F,
      q,
      m,
      D,
      H,
      E,
      I,
      A,
      w,
      e,
      r,
      g,
      G,
      Y,
      l,
      k,
      L = !0,
      O = !0,
      ha = !1,
      S = !1,
      M = !1,
      aa = !0,
      W = !1,
      ia = !1,
      ka,
      da = 0,
      p = h.once(function () {
        z()
        n.attachImmersiveViewResizeHandler(Q)
        n.attachTabDeselectHandler('ivVideosTab', fa)
        n.attachImmersiveViewResetHandler(ja)
      }),
      J = function (e, f, g) {
        a('#ivVideoBlockSpinner').addClass('aok-hidden')
        x.postCountMetric('dpcc_vse_videoBlock_preload_failed_' + f.placement)
        e = m.getCurrentItem().color
        e = c.getVideoHash(e, 0, q)
        w ||
          (w = c.createAiryInstanceForChromeful(
            a('#ivVideoBlock'),
            e,
            q.airyConfig,
            'ImmersiveView',
          ))
        ha = !0
        a('#ivVideoBlock').css({ 'max-width': 1.77 * A, margin: '0 auto' })
        M && ha && w.play({ isAsync: !0 })
      },
      ma = function (c, e, g) {
        O || y.get(c, '#ivVideoBlock', D, ca, f)
        a('#ivVideoBlockSpinner').addClass('aok-hidden')
      },
      ca = function (a, c, e) {
        S = !0
        P()
      },
      f = function (a, c, e) {
        x.postCountMetric(
          'dpcc_vse_videoBlock_lazyload_failed_' +
            c.pageContext.placement +
            '_' +
            c.configuration.type,
        )
      }
    return function (a, e, f, p) {
      F = this
      q = a
      m = e
      F.render = function (a, b, e, f, p, v) {
        a = m.getCurrentItem().color
        b = c.getVideoHash(a, 0, q)
        !0 === v
          ? (r = q.mediaAsin)
          : ((r = q.colorToAsin[a] && q.colorToAsin[a].asin),
            (r = c.isDefined(r) ? r : q.mediaAsin))
        g = !0 === q.useVSEVideos ? 'VIDEO_ID' : 'physicalID'
        Y = q.contentWeblab
        l = q.contentWeblabTreatment
        k = q.parentAsin || ''
        O = !0
        ;-1 === b
          ? n.hideTabHeading('ivVideosTabHeading')
          : (n.unhideTabHeading('ivVideosTabHeading'),
            (D = {
              page: 'DetailPage',
              placement: 'ImageBlock',
              device: 'Desktop',
              marketplaceID: b.marketPlaceID,
              locale: b.languageCode,
              product: {
                contentID: r,
                contentIDType: 'ASIN',
                parentContentID: k,
                parentContentIDType: 'ASIN',
              },
              video: {
                contentID: b.mediaObjectId,
                contentIDType: g,
                videoURL: b.url,
                imageURL: b.slateUrl,
                rankingStrategy: b.rankingStrategy,
              },
              requestId: q.dpRequestId,
              weblabContext: [{ name: Y, assignment: l, ignoreForG2S2Key: !0 }],
              metadata: { ProductTitle: q.title },
            }),
            (H = {
              videoUrl: D.video.videoURL,
              contentId: D.video.contentID,
              duration: 0,
              vendorCode: '',
              eventTimestamp: c.isDefined(G) ? G : h.now(),
              imageUrl: D.video.imageURL,
              productAsin: D.product.contentID,
              rankingStrategy: D.video.rankingStrategy,
              index: 0,
            }),
            c.isDefinedAndNotEmpty(w) && (w.destroy(), (w = null)),
            (da = h.now()),
            C.get(h, '#ivVideoBlock', D, ma, J))
      }
      F.update = function (a) {}
      n.attachTabSelectHandler('ivVideosTab', ba)
      h.on('vsePlayer-detailpage-imageblock', K)
      h.on('a:popover:afterShow:immersiveView', R)
      h.on('a:popover:beforeHide:immersiveView', V)
      h.on('detailpage-imageblock-leave-pip', U)
    }
  })
  ;('use strict')
  C.when('A', 'jQuery', 'imageBlockUtils', 'postMetric', 'imageBlockImmersiveViewUtils').register(
    'ImageBlockShoppableSceneImmersiveView',
    function (h, a, c, v, n) {
      function x(c, h) {
        if (c) {
          H = q.getCurrentItem()
          0 == Object.entries(w).length && y()
          var e = H.shoppableScene
          e == ia
            ? ((c = T(Object.values(w)[0])), (e = Object.values(w)[0].shoppableScene))
            : (c = T(D[H.index]))
          A = e.physicalId
          var r = a('.shoppable-scene-image-block-placeholder-in-iv')
          if (0 < r.length) {
            var n = a('\x3cimg\x3e')
            n.attr('id', 'shoppableSceneIvImage')
            n.attr('src', c)
            n.css({ 'max-height': '500px', 'max-width': '650px' })
            r.replaceWith(n)
            c = z(e)
            e = a('.shoppable-scene-image-block-tags-in-iv')
            e.empty()
            c.appendTo(e)
          } else m.hide(), K()
          la()
          c = H.shoppableScene ? H.shoppableScene : Object.values(w)[0].shoppableScene
          fa(c)
          N(h, E, null, A)
        }
      }
      function y() {
        D = F.colorImages[H.color]
        E = F.colorToAsin[H.color].asin
        D.forEach(function (a) {
          a.shoppableScene != ia && (w[a.shoppableScene.physicalId] = a)
        })
      }
      function z(c) {
        var e = a('\x3cspan\x3e')
        h.each(c.tags, function (g) {
          var m = a('\x3cdiv\x3e').css({
            position: 'absolute',
            left: 100 * g.left + '%',
            top: 100 * g.top + '%',
            height: 'auto',
            width: 'auto',
          })
          m.append(P(!1))
          m.append(P(!0))
          h.declarative.create(m, 'scenes-show-details-tags-ib-iv-click', {
            tagId: g.link,
            physicalId: c.physicalId,
          })
          e.append(m)
        })
        return e.children()
      }
      function P(c) {
        var e = a(
          "\x3cimg src\x3d'" +
            (c ? F.staticImages.shoppableSceneDotHighlighted : F.staticImages.shoppableSceneDot) +
            "' alt\x3d''\x3e",
        )
        e.css({ display: c ? 'none' : 'inline-block' })
        e.addClass('mirai-scene-tag-in-iv').addClass(c ? 'active-tag' : 'inactive-tag')
        return e
      }
      function la() {
        var c = a('.ivBottomThumbImagesShoppableScene')
        c.empty()
        Object.keys(w).forEach(function (e) {
          var g = w[e],
            m = a('\x3cimg\x3e')
          g = T(g)
          m.attr('id', 'shoppable-scene-thumbnail-' + e)
          m.attr('src', g)
          m.addClass('shoppable-scene-thumbnail')
          h.declarative.create(m, 'scenes-thumbnail-ib-iv-click', { physicalId: e })
          m.appendTo(c)
        })
      }
      function fa(a) {
        R()
        C.when('mirai-shoppable-scene-immersive-view').execute(
          'shoppable-scene-image-recommendation-col-render',
          function () {
            h.trigger('mirai:scene-immersive-recommendation-col-init', { scene: a })
          },
        )
      }
      function ba(a, c) {
        R()
        C.when('mirai-shoppable-scene-immersive-view').execute(
          'shoppable-scene-image-recommendation-col-updater',
          function () {
            h.trigger('mirai:scene-immersive-recommendation-col-update', {
              tagId: a,
              physicalId: c,
            })
          },
        )
      }
      function Q() {
        var c = w[A].shoppableScene,
          h = a('.shoppable-scene-image-block-tags-in-iv')
        h.hide()
        c = z(c)
        h.empty()
        c.appendTo(h)
        h.show()
        m.show()
      }
      function K() {
        var c = T(w[A]),
          h = a('#shoppableSceneIvImage')
        h.bind('load', Q)
        h.attr('src', c)
      }
      function N(a, c, g, m) {
        var e = 'shoppable-scene-dp-iv:mirai:' + a
        C.when('mirai-shoppable-scene-immersive-view').execute(
          'shoppable-scene-image-recommendation-col-updater',
          function () {
            h.trigger('mirai:scene-immersive-publish-metric', {
              nexusTargetName: a,
              csmCounterName: e,
              asin: c,
              tagId: g,
              physicalId: m,
            })
          },
        )
      }
      function V() {
        var c = a('.shoppable-scene-image-block-tags-in-iv').find('.mirai-scene-tag-in-iv')
        c.removeClass('mirai-scene-dot-pulsate').addClass('mirai-scene-dot-pulsate')
        h.delay(function () {
          c.removeClass('mirai-scene-dot-pulsate')
        }, 3600)
      }
      function R() {
        var c = a('#shoppable-scene-iv-recommendation-waiting-spinner')
        0 < c.length && c.remove()
        c = a('#shoppableSceneRecommendationColumn')
        a('.shoppable-scene-recommendation-iv').hide()
        var h = a('\x3cimg\x3e')
        h.attr('id', 'shoppable-scene-iv-recommendation-waiting-spinner')
        h.attr('src', F.staticImages.spinner)
        h.css({ position: 'relative' }).appendTo(c)
      }
      function T(a) {
        return a.hiRes || a.large || a.main[a.main.length - 1]
      }
      var U = void 0,
        F = void 0,
        q = void 0,
        m = void 0,
        D = void 0,
        H = void 0,
        E = void 0,
        I = void 0,
        A = void 0,
        w = {}
      h.declarative('shoppable-scene-image-click', 'click', function (a) {
        x(!0, 'IMAGE_BLOCK_SHOPPABLE_SCENE')
      })
      h.declarative('scenes-show-details-tags-ib-iv-click', 'click', function (a) {
        var c = a.$currentTarget
        if (null != I) {
          var e = I.find('.active-tag'),
            h = I.find('.inactive-tag')
          e.css({ display: 'none' })
          h.css({ display: 'inline-block' })
        }
        e = c.find('.active-tag')
        h = c.find('.inactive-tag')
        e.css({ display: 'inline-block' })
        e.addClass('mirai-scene-dot-pulsate')
        h.css({ display: 'none' })
        I = c
        V()
        ba(a.data.tagId, a.data.physicalId)
        N('IMMERSIVE_VIEW_PRODUCT_TAG', E, a.data.tagId, a.data.physicalId)
      })
      h.declarative('scenes-thumbnail-ib-iv-click', 'click', function (a) {
        A = a.data.physicalId
        K()
        fa(w[A].shoppableScene)
      })
      return function (c, h, g, n) {
        U = this
        F = c
        q = h
        m = a('#ivMainShoppableScene')
        U.render = function (a, c, e, g, h, m) {}
        U.update = function (a) {}
        ;(c = document.getElementById('ivShoppableSceneHeading')) &&
          c.addEventListener('click', function (a) {
            a = q.getCurrentItem()
            x(null == H || H.index != a.index, 'IMMERSIVE_VIEW_TAB')
          })
      }
    },
  )
})
/* ******** */
;(function (e) {
  var f = window.AmazonUIPageJS || window.P,
    l = f._namespace || f.attributeErrors,
    a = l ? l('DetailPageImageBlockSubAssets@logging', 'DetailPageImageBlockSubAssets') : f
  a.guardFatal
    ? a.guardFatal(e)(a, window)
    : a.execute(function () {
        e(a, window)
      })
})(function (e, f, l) {
  e.when('A', 'postMetric', 'ready').execute('feature-bullets-tailoring-metrics', function (a, b) {
    try {
      var c = a.$,
        d = c('#featurebullets_feature_div'),
        k = c('#productOverview_feature_div')
      if (
        d &&
        0 < d.length &&
        (b.postCountMetric('FeatureBulletsRendered.GV'), k && 0 < k.length)
      ) {
        b.postCountMetric('FeatureBulletsRenderedWithPO.GV')
        var g = c('#featurebullets_feature_div .a-expander-container')
        g &&
          0 < g.length &&
          'feature-bullets-expander' === g.data('aExpanderName') &&
          (b.postCountMetric('FeatureBulletsRenderedCollapsed.GV'),
          a.on('a:expander:feature-bullets-expander:toggle:expand', function (a) {
            b.postCountMetric('FeatureBulletsInteraction.Expanded')
          }),
          a.on('a:expander:feature-bullets-expander:toggle:collapse', function (a) {
            b.postCountMetric('FeatureBulletsInteraction.Collapsed')
          }))
      }
    } catch (m) {
      e.log(
        'Feature bullets metric logging failed with error: ( ' + m + ' )',
        'ERROR',
        'FeatureBulletsTailoringMetrics',
      )
    }
  })
  ;('use strict')
  e.when('A', 'ImageBlockATF', 'ImageBlockBTF', 'imageBlockUtils', 'postMetric').execute(
    function (a, b, c, d, k) {
      var g = [0, 50, 100, 500, 1e3, 2e3, 3e3, 3500]
      ;(function () {
        var a = c.colorImages,
          b = 0,
          h
        for (h in a) a[h] && a[h].length && (b += a[h].length)
        a = 'image_size_bucket:gt' + g[g.length - 1]
        for (h = 1; h < g.length; h++)
          if (b <= g[h]) {
            a = 'image_size_bucket:' + g[h - 1] + '-' + g[h]
            break
          }
        k.postCountMetric(a)
        d.addTag(a)
      })()
      ;(function () {
        var a = b.colorImages
        a &&
          a.initial &&
          a.initial.length &&
          ((a = a.initial.length), f.ue && ue.count && ue.count('altImageCount', a))
      })()
      ;(function () {
        var a = c.lazyLoadExperienceDisabled
        d.isDefined(c.lazyLoadExperienceDisabled) &&
          !a &&
          (k.postCountMetric('lazyLoadingExperienceOnTwisterUpdateEnabled'),
          d.addTag('lazyLoadingExperienceOnTwisterUpdateEnabled'))
      })()
    },
  )
  ;('use strict')
  e.register('logFailedInteractionMetric', function () {
    return { isEnabled: !1 }
  })
  e.register('postEarlyMetric', function () {
    return null
  })
  ;('use strict')
  e.register('postMetric', function () {
    return {
      postCountMetric: function (a) {
        if ('undefined' !== typeof a) {
          var b = f.ue
          if (b) {
            var c = b.count(a) || 0
            b.count(a, c + 1)
          }
        }
      },
      postTimeMetric: function (a, b) {
        if ('undefined' !== typeof a && 'undefined' !== typeof b) {
          var c = f.ue
          c && c.count(a, b)
        }
      },
      emitNexusMetric: function (a) {
        f.ue &&
          ue.event &&
          ue.event(a, 'VSEImageBlockEvents', 'vse.VSEImageBlockEvents.5', { ssd: !1 })
      },
      buildNexusMetric: function (a, b, c, d, k, g, e, f, h) {
        return {
          eventSource: 'IBCarousel',
          placementContext: h,
          clientId: 'VSE',
          userAgentData: navigator.userAgent,
          titleSessionId: '0',
          eventName: a,
          intPayload: b,
          videoAsin: c,
          videoAsinList: '',
          rankingStrategy: d,
          groupType: k,
          pageUrl: g,
          pageAsin: e,
          weblabIds: f,
        }
      },
    }
  })
  ;('use strict')
  e.when('A', 'get-resource-time', 'postMetric', 'afterLoad').execute(function (a, b, c) {
    var d = a.state('desktop-landing-image-data')
    d &&
      ((d = a.values(d)),
      (b = b.getResourceTimeByName('img', d)),
      a.each(b, function (a) {
        a &&
          (a.responseEnd != l &&
            c.postCountMetric('ibDesktopLandingImageDownloadTime', f.parseInt(a.responseEnd)),
          a.transferSize != l &&
            (0 === a.transferSize
              ? c.postCountMetric('ibDesktopLandingImageCached', 1)
              : (c.postCountMetric('ibDesktopLandingImageSizeInBytes', f.parseInt(a.transferSize)),
                c.postCountMetric('ibDesktopLandingImageNotCached', 1))))
      }))
  })
})
/* ******** */
;(function (l) {
  var g = window.AmazonUIPageJS || window.P,
    r = g._namespace || g.attributeErrors,
    e = r ? r('DetailPageImageBlockSubAssets@utils', 'DetailPageImageBlockSubAssets') : g
  e.guardFatal
    ? e.guardFatal(l)(e, window)
    : e.execute(function () {
        l(e, window)
      })
})(function (l, g, r) {
  l.when('ImageBlockATF', 'atf').register('ImageBlockAiryLoader', function (e) {
    function f(d) {
      d &&
        (l.load.js(d),
        g.performance &&
          performance.now &&
          g.ue &&
          ue.count &&
          ue.count('DPAiryDownloadStartTime', g.parseInt(performance.now())))
    }
    function k(d) {
      d && l.load.css(d)
    }
    var d = e.airyConfig
    d === r
      ? l.when('ImageBlockBTF').execute(function (e) {
          d = e.airyConfig
          f(d.jsUrl)
          k(d.cssUrl)
        })
      : (f(d.jsUrl), k(d.cssUrl))
  })
  ;('use strict')
  l.when('A', 'jQuery').execute(function (e, f) {
    e.on('a:image:load:landingImage', function () {
      g.performance &&
        performance.now &&
        g.ue &&
        ue.count &&
        ue.count('DPLandingImageHighResDownloadTime', performance.now())
    })
    e.loadDynamicImage(f('#landingImage'))
  })
  ;('use strict')
  l.when('jQuery', 'imageBlockUtils').register('ImageBlockHeroUtils', function (e, f) {
    function k(a, c) {
      if (c.repositionHeroImage) {
        c = a[1]
        a = a[0]
        if (
          768 >=
          (g.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
        )
          (c *= 0.7), (a *= 0.7)
        else {
          var b = Math.max(
            Math.min(
              ((g.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) -
                1024) /
                256,
              1,
            ),
            0,
          )
          c *= 0.7 + 0.3 * b
          a *= 0.7 + 0.3 * b
        }
        b = [c, a]
      }
      return b
    }
    function d(a, c, b) {
      if (b.repositionHeroImage) {
        var d = g.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        b = b.heroFocalPoint
        if (f.isDefined(b)) {
          var e = Math.max((d - Math.min(1500, a)) / 2, 0)
          var k = Math.max((d - a) / 2, 0)
          d = Math.max(Math.min(d, 1500), 1024)
          e = e - k + (d - 420 - 23) / 2 - (a / c[1]) * b
        }
      }
      return e
    }
    function h(a, c, b) {
      a = a.heroImage
      return !(
        f.isDefined(a) &&
        f.isDefined(a[c]) &&
        f.isDefined(a[c][b]) &&
        f.isDefined(a[c][b].main)
      ) ||
        1 >
          e.map(a[c][b].main, function (a, b) {
            return b
          }).length
        ? -1
        : a[c][b]
    }
    return {
      getHeroImageHash: h,
      getHeroDimParams: function (a, c, b) {
        if (a.repositionHeroImage) {
          if (!f.isDefined(b)) {
            b = h(a, c.color, c.index)
            if (-1 === b) return
            c = e.map(b.main, function (a, b) {
              return b
            })[0]
            b = b.main[c]
          }
          c = k(b, a)
          a = d(c[0], b, a)
          return { height: c[1], width: c[0], xPos: a, yPos: 75 }
        }
      },
    }
  })
  ;('use strict')
  l.when('A', 'jQuery', 'imageBlockUtils').register(
    'imageBlockImmersiveViewUtils',
    function (e, f, k) {
      function d(a, c) {
        var b = e.copy(a)
        if (k.isDefined(a) && a.length > c) {
          try {
            for (var d = -1, h = 0; h < a.length; h++) {
              var f = a.charAt(h)
              if (' ' === f || '.' === f || '?' === f || ';' === f || ',' === f || ':' === f) d = h
              if (h === c - 4) {
                b = a.substring(0, -1 === d ? h : d)
                break
              }
            }
          } catch (m) {
            b = a.substring(0, c - 3)
          }
          b += '...'
        }
        return b
      }
      function h(a, c) {
        var b = a.lastIndexOf('.')
        return (a =
          '_' === a.charAt(b - 1)
            ? a.substring(0, b - 1) + c + a.substring(b)
            : a.substring(0, b) + '.' + c + a.substring(b))
      }
      return {
        getDimension: function (a, c) {
          a = parseInt(a.css(c), 10)
          return isNaN(a) ? 0 : a
        },
        attachTabSelectHandler: function (a, c) {
          e.on('dp:ivTabs:' + a + ':select', c)
        },
        attachTabDeselectHandler: function (a, c) {
          e.on('dp:ivTabs:' + a + ':deselect', c)
        },
        attachImmersiveViewResizeHandler: function (a) {
          e.on('dp:image-block:immersive-view:resize', a)
        },
        detachImmersiveViewResizeHandler: function (a) {
          e.off('dp:image-block:immersive-view:resize', a)
        },
        attachImmersiveViewResetHandler: function (a) {
          e.on('a:popover:afterHide:immersiveView', a)
        },
        hideTabHeading: function (a) {
          f('#' + a).hide()
        },
        unhideTabHeading: function (a) {
          f('#' + a).show()
        },
        addStyleCodeToURL: h,
        getResizedThumbnailURL: function (a, c) {
          a = a.replace(/\._(AA|SS)\d+_/, '').replace(/\._SX\d+_SY\d+_CR,0,0,\d+,\d+_/, '')
          a = a
            .replace(/\._(US)\d+_/, '')
            .replace(/\._SR\d+,\d+_/, '')
            .replace(/\._SP[0-9,C]+_/, '')
          a = a.replace(/\._CB\d+_SS\d+_/, '')
          var b = '_AA50_'
          c && (b += 'FMpng_RI_')
          return h(a, b)
        },
        populateVariationSelection: function (a) {
          if (k.isDefined(g.DetailPage) && k.isDefined(g.DetailPage.StateController)) {
            a.empty()
            var c = g.DetailPage.StateController.getState(),
              b = c.variation_label_order,
              d
            for (d in b)
              if (b.hasOwnProperty(d)) {
                var e = b[d],
                  h = c.selected_variations[e]
                e = c.variation_display_labels[e]
                h &&
                  f('\x3cdiv/\x3e')
                    .addClass('ivVariations')
                    .text(e + ':' + h)
                    .appendTo(a)
              }
          }
        },
        populateTitle: function (a, c, b) {
          a.html(b.title)
          a.attr('title', a.text())
          a.html(d(b.title, c))
        },
        animateStageIn: function (a) {
          a.animate({ opacity: 1 }, 200)
        },
        animateStageOut: function (a, c) {
          a.animate({ opacity: 0.4 }, 100, c)
        },
        logError: function (a, c, b, d) {
          g.ueLogError && g.ueLogError(d, { logLevel: a, attribution: c, message: b })
        },
      }
    },
  )
  ;('use strict')
  l.when('A').register('ImageBlockLoader', function (e) {
    return {
      load: function (f, k) {
        k = k || {}
        k.timeout = k.timeout || 4e3
        e.ajax(f, k)
      },
    }
  })
  ;('use strict')
  l.when('postMetric', 'imageBlockImmersiveViewUtils').execute(
    'vse-ns-ajax-calls',
    function (e, f) {
      l.register('vse_ns_preLoaderHook', function () {
        function k(d, h) {
          try {
            var a = d.A,
              c = d.block,
              b = d.request,
              g = d.handleFailure,
              l = d.handleSuccess,
              p = a.$
            h--
            var m = 3 - h - 1,
              n = a.now()
            a.ajax('/vap/ew/componentbuilder', {
              params: b,
              paramsFormat: 'json',
              crossDomain: !0,
              method: 'post',
              contentType: 'application/json',
              timeout: b.timeout || 5e3,
              withCredentials: !0,
              success: function (d) {
                var h = a.now() - n
                e.postTimeMetric('vse_preLoaderHook:success:', h)
                e.postCountMetric(
                  'vse_preLoaderHook:success:' + b.page + ':' + b.placement + ':' + m,
                )
                p(c).html(d)
                l(a, b, d)
              },
              error: function (c) {
                e.postCountMetric('vse_preLoaderHook:error:' + b.page + ':' + b.placement + ':' + m)
                ;(0 === c.http.status || (500 <= c.http.status && 599 >= c.http.status)) && 0 < h
                  ? k(d, h)
                  : (e.postCountMetric('vse_preLoaderHook:error:', 1), g(a, b, c))
              },
            })
          } catch (q) {
            f.logError('FATAL', 'vse_ns_desktop', '[vse_ns_preLoaderHook] ', q)
          }
        }
        return {
          get: function (d, e, a, c, b) {
            k({ A: d, block: e, request: a, handleFailure: b, handleSuccess: c }, 3)
          },
        }
      })
      l.register('vse_ns_lazyLoaderHook', function () {
        function k(d, h, a) {
          try {
            var c = d.A,
              b = d.context,
              g = d.handleFailure,
              l = d.handleSuccess
            h.attr('data-configuration')
            var p = atob(h.attr('data-configuration')),
              m = JSON.parse(p),
              n = { pageContext: b, configuration: m },
              q = c.now()
            a--
            var t = 3 - a - 1
            c.ajax('/vap/ew/subcomponent/' + m.type, {
              params: n,
              paramsFormat: 'json',
              method: 'post',
              contentType: 'application/json',
              timeout: b.timeout || 5e3,
              withCredentials: !0,
              success: function (a) {
                var d = c.now() - q
                e.postTimeMetric('vse_lazyLoaderHook:success:', d)
                e.postCountMetric(
                  'vse_lazyLoaderHook:success:' +
                    b.page +
                    ':' +
                    b.placement +
                    ':' +
                    m.type +
                    ':' +
                    t,
                )
                h.html(a)
                l(c, n, a)
              },
              error: function (f) {
                e.postCountMetric(
                  'vse_lazyLoaderHook:error:' + b.page + ':' + b.placement + ':' + m.type + ':' + t,
                )
                ;(0 === f.http.status || (500 <= f.http.status && 599 >= f.http.status)) && 0 < a
                  ? k(d, h, a)
                  : (e.postCountMetric('vse_lazyLoaderHook:error:', 1), g(c, n, f))
              },
            })
          } catch (u) {
            f.logError('FATAL', 'vse_ns_desktop', '[vse_ns_lazyLoaderHook] ', u)
          }
        }
        return {
          get: function (d, e, a, c, b) {
            var f = d.$
            f(e + ' div[data-configuration]').each(function () {
              k({ A: d, context: a, handleFailure: b, handleSuccess: c }, f(this), 3)
            })
          },
        }
      })
      l.register('vse_ns_videoPlayer', function () {
        function k(d, h, a) {
          try {
            var c = d.A,
              b = d.block,
              g = d.request,
              l = d.handleFailure,
              p = d.handleSuccess,
              m = c.$
            a--
            var n = 3 - a - 1,
              q = c.now()
            c.ajax('/vap/ew/subcomponent/vseplayer', {
              params: g,
              paramsFormat: 'json',
              crossDomain: !0,
              method: 'post',
              contentType: 'application/json',
              timeout: g.timeout || 5e3,
              withCredentials: !0,
              success: function (a) {
                var d = c.now() - q
                e.postTimeMetric('vse_lightPlayerLoaderHook:success:', d)
                e.postCountMetric(
                  'vse_lightPlayerLoaderHook:success:' + g.page + ':' + g.placement + ':' + n,
                )
                m(b).html(a)
                p(c, g, a)
              },
              error: function (b) {
                e.postCountMetric(
                  'vse_lightPlayerLoaderHook:error:' + g.page + ':' + g.placement + ':' + n,
                )
                ;(0 === b.http.status || (500 <= b.http.status && 599 >= b.http.status)) && 0 < a
                  ? k(d, a)
                  : (e.postCountMetric('vse_lightPlayerLoaderHook:error:', 1), l(c, g, b))
              },
            })
          } catch (t) {
            f.logError('FATAL', 'vse_ns_lightPlayer', '[vse_ns_lightPlayerLoaderHook] ', t)
          }
        }
        return {
          get: function (d, e, a, c, b) {
            k({ A: d, block: e, request: a, handleFailure: b, handleSuccess: c }, 3)
          },
        }
      })
    },
  )
})
/* ******** */
;(function (k) {
  var d = window.AmazonUIPageJS || window.P,
    p = d._namespace || d.attributeErrors,
    b = p ? p('DetailPageShowroomImageBlockAssets', '') : d
  b.guardFatal
    ? b.guardFatal(k)(b, window)
    : b.execute(function () {
        k(b, window)
      })
})(function (k, d, p) {
  k.when(
    'A',
    'imageBlockUtils',
    'showroom-lite-atf-feature-data',
    'showroom-image-block-detail-page-rendering',
    'showroom-image-block-constants',
    'showroom-image-block-metrics',
  ).register('showroom-image-block-view', function (b, f, m, g, e, a) {
    function c(h) {
      h.interaction === p.MOUSE_ENTER &&
        h.type === e.SHOWROOM_THUMBNAIL_TYPE &&
        g.isShowroomMainImageHidden() &&
        a.addOne(a.COUNTER_NAMES.SHOWROOM_IMAGEBLOCK_THUMBNAIL_HOVER)
    }
    function d(b, e) {
      var d = new Date()
      b.interaction = e.type
      b.isUserGenerated = !0
      if (f.isImageBlockGridViewHoverDelayEnabled()) {
        if (
          ('mouseenter' === e.type &&
            m.isDataValidForAsin(u(b)) &&
            (c(b),
            q && clearTimeout(q),
            (q = setTimeout(function () {
              var a = m.getDataForAsin(u(b)).imageData
              g.updateMainImage(h, a, r)
              g.showShowroomMainImage(h)
              n.usePeekHover || f.selectGivenThumbnail(e.$declarativeParent, x)
            }, f.getHoveringDelayTimer()))),
          'mouseleave' === e.type && q && clearTimeout(q),
          'click' === e.type)
        ) {
          if (m.isDataValidForAsin(u(b))) {
            var l = m.getDataForAsin(u(b)).imageData
            g.updateMainImage(h, l, r)
            g.showShowroomMainImage(h)
          }
          f.selectGivenThumbnail(e.$declarativeParent, x)
          f.useTabbedImmersiveView(n) && g.handleShowroomThumbnailClick(e)
        }
      } else
        m.isDataValidForAsin(u(b)) &&
          (c(b),
          (l = m.getDataForAsin(u(b)).imageData),
          g.updateMainImage(h, l, r),
          g.showShowroomMainImage(h)),
          (n.usePeekHover && 'click' !== e.type) ||
            (f.selectGivenThumbnail(e.$declarativeParent, x),
            'click' === e.type && f.useTabbedImmersiveView(n) && g.handleShowroomThumbnailClick(e))
      a.logValue(
        a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_UPDATE_HANDLE_THUMBNAIL_EVENT,
        new Date() - d,
      )
    }
    function u(a) {
      a = n.colorToAsin[a.color].asin
      a || (a = n.mediaAsin)
      return a
    }
    var k = void 0,
      n = void 0,
      l = void 0,
      r = void 0,
      x = void 0,
      h = void 0,
      y = void 0,
      q = void 0,
      v = void 0,
      p = { SWATCH_HOVER: 'swatchHover', MOUSE_ENTER: 'mouseenter' }
    return function (c, q, t, z) {
      t = new Date()
      k = this
      n = c
      l = q
      r = z
      b.on(e.TWISTER_DATA_EVENT, function (a) {
        u(l.getCurrentItem()) === a &&
          ((a = { type: 'updatedData', data: l.getCurrentItem() }), r.dispatch('updateView', a))
      })
      k.render = function (e, f, c, d, k, q) {
        e = new Date()
        x = d
        h = k.find('#main-showroom-container')
        h.parent().find('#showroom-canvas-caption')
        b.$('#main-image-container')
        try {
          var w = u(l.getCurrentItem())
          if (m.isDataValidForAsin(w)) {
            var p = new Date(),
              t = m.getDataForAsin(w)
            g.refresh(r, t.asin, t.defaultStageId)
            a.logValue(
              a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_GET_DATA_FOR_ASIN,
              new Date() - p,
            )
            if (!q) {
              var B = new Date()
              g.updateMainImage(h, t.imageData, r)
              a.logValue(
                a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_UPDATE_MAIN_IMAGE,
                new Date() - B,
              )
            }
            var v = new Date()
            f = g.createThumbnail(n, d, f, t.imageData)
            a.logValue(
              a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_CREATE_THUMBNAIL,
              new Date() - v,
            )
            var z = new Date()
            b.$('#ivShowroomTabHeading').removeClass('aok-hidden')
            a.logValue(
              a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_UNHIDE_TAB_HEADING,
              new Date() - z,
            )
            if (w !== y) {
              var A = new Date()
              a.addOne(a.COUNTER_NAMES.SHOWROOM_IMAGEBLOCK_FEATURE_RENDERED)
              var C = a.createShowroomAtfEvent(
                t.defaultStageId,
                w,
                a.EVENT_NAMES.IMAGEBLOCK_LOAD,
                a.STATUS_TYPES.SUCCESS,
              )
              a.logShowroomAtfEvent(C)
              y = w
              a.logValue(a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_LOG_EVENT, new Date() - A)
            }
          } else b.$('#ivShowroomTabHeading').addClass('aok-hidden')
        } catch (E) {
          b.$('#ivShowroomTabHeading').addClass('aok-hidden')
        }
        a.logValue(a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_RENDER, new Date() - e)
        return f
      }
      k.update = function (b) {
        var r = new Date()
        try {
          var c = b.data
          l.setCurrentEvent(b)
          c.type === e.SHOWROOM_THUMBNAIL_TYPE
            ? d(c, b)
            : c.type !== e.SHOWROOM_MAIN_IMAGE_TYPE &&
              (b.type === p.SWATCH_HOVER
                ? c.color === l.getCurrentItem().color &&
                  l.getCurrentItem().type === e.SHOWROOM_THUMBNAIL_TYPE
                  ? g.showShowroomMainImage(h)
                  : g.hideShowroomMainImage(h)
                : f.isImageBlockGridViewHoverDelayEnabled()
                  ? (l.setToPreviousItem(),
                    'mouseenter' === b.type &&
                      (v && clearTimeout(v),
                      (v = setTimeout(function () {
                        l.setToCurrentItem(c)
                        g.hideShowroomMainImage(h)
                      }, f.getHoveringDelayTimer()))),
                    'mouseleave' === b.type && v && clearTimeout(v),
                    'click' === b.type && (l.setToCurrentItem(c), g.hideShowroomMainImage(h)))
                  : g.hideShowroomMainImage(h))
        } catch (D) {}
        a.logValue(a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_UPDATE, new Date() - r)
      }
      ;(c = document.getElementById('ivShowroomTabHeading')) &&
        c.addEventListener('click', function (b) {
          a.addOne(a.COUNTER_NAMES.TAB_SELECT)
          b = m.getDataForAsin(y).defaultStageId
          b = a.createShowroomAtfEvent(
            b,
            y,
            a.EVENT_NAMES.IMMERSIVE_VIEW_TAB_CLICK,
            a.STATUS_TYPES.SUCCESS,
          )
          a.logShowroomAtfEvent(b)
        })
      a.logValue(a.TIMER_NAMES.SHOWROOM_IMAGEBLOCK_LATENCY_INVOKE, new Date() - t)
    }
  })
  ;('use strict')
  k.register('showroom-image-block-constants', function () {
    return {
      SHOWROOM_THUMBNAIL_TYPE: 'showroom-image',
      SHOWROOM_MAIN_IMAGE_TYPE: 'showroom-main-image',
      TWISTER_DATA_EVENT: 'showroomTwisterData',
      STRING_IDS: {
        MAIN_IMAGE_OVERLAY_TEXT: 'showroom_dp_imageblock_atf_main_image_overlay_text',
        MAIN_IMAGE_OVERLAY_BUTTON_TEXT: 'showroom_dp_imageblock_atf_main_image_overlay_text_T2',
        MAIN_IMAGE_OVERLAY_ICON_URL: 'showroom_dp_imageblock_atf_main_image_overlay_icon_url',
      },
    }
  })
  ;('use strict')
  k.when(
    'A',
    'jQuery',
    'imageBlockUtils',
    'showroom-lite-atf-feature-data',
    'showroom-image-block-constants',
    'showroom-image-block-metrics',
  ).register('showroom-image-block-detail-page-rendering', function (b, f, m, g, e, a) {
    function c(b) {
      a.addOne(a.COUNTER_NAMES.SHOWROOM_IMAGEBLOCK_MAIN_IMAGE_SELECT)
      var c = a.createShowroomAtfEvent(
        n,
        k,
        a.EVENT_NAMES.IMAGEBLOCK_MAIN_IMAGE_CLICK,
        a.STATUS_TYPES.SUCCESS,
      )
      a.logShowroomAtfEvent(c)
      d(b)
    }
    function d(a) {
      a.action = 'showroomIngressClick'
      a.data = l
      p.dispatch('showroomIngressClick', a)
    }
    var k, p, n, l
    return {
      createThumbnail: function (a, b, c, f) {
        c === a.maxAlts && (b.find('.item.imageThumbnail').last().remove(), c--)
        l = { type: 'showroomIngress', index: 0, thumbnailIndex: c, variant: f.variant }
        m.createThumbnail(
          { type: e.SHOWROOM_THUMBNAIL_TYPE, index: 0, thumbnailIndex: c, variant: f.variant },
          f.thumb,
          b,
          'showroom-imageblock-thumbnail',
        )
        c++
        return c
      },
      updateMainImage: function (a, d) {
        var h = a.find('#showroom-main-image')
        h.length
          ? h.attr('src', d.hiRes)
          : ((h = g.getStringValue(e.STRING_IDS.MAIN_IMAGE_OVERLAY_BUTTON_TEXT)),
            (h = f(
              (
                '\x3cdiv id\x3d"showroom-main-image-container"\x3e                    \x3cbutton class\x3d"a-button" style\x3d"border-width: 0"\x3e\n                        \x3cimg src\x3d"' +
                d.hiRes +
                '" id\x3d"showroom-main-image" alt\x3d"' +
                h +
                '"/\x3e                    \x3c/button\x3e\n                \x3c/div\x3e'
              ).trim(),
            )),
            h.appendTo(a),
            b.declarative.create(a, 'showroom-image-action', l),
            b.declarative('showroom-image-action', ['click'], c),
            h.addClass('image-gradient-hue'),
            (d = g.getStringValue(e.STRING_IDS.MAIN_IMAGE_OVERLAY_TEXT)),
            (h = g.getStringValue(e.STRING_IDS.MAIN_IMAGE_OVERLAY_BUTTON_TEXT)),
            f(
              (
                '\x3cdiv id\x3d"showroom-main-image-overlay-container"\x3e                    \x3cdiv style\x3d"padding-bottom: 7px;width: 40%;"\x3e                        \x3cspan id\x3d"showroom-main-image-overlay-subtext"\x3e' +
                d +
                '\x3c/span\x3e                    \x3c/div\x3e                    \x3cbutton class\x3d"a-button a-button-base"\x3e                        \x3cspan class\x3d"a-button-inner"\x3e                            \x3cspan class\x3d"a-button-text" id\x3d"showroom-main-image-overlay-button"\x3e                                \x3cimg id\x3d"showroom-main-image-overlay-icon" src\x3d"https://m.media-amazon.com/images/G/01/showroom/icon-lightbulb._CB628497379_.png" alt\x3d""/\x3e' +
                h +
                '\n                            \x3c/span\x3e                        \x3c/span\x3e                    \x3c/button\x3e                \x3c/div\x3e'
              ).trim(),
            ).appendTo(a))
      },
      hideShowroomMainImage: function (a) {
        a.parent().css('z-index', -1)
        a.parent().addClass('aok-hidden')
      },
      showShowroomMainImage: function (a) {
        a.parent().css('z-index', 2)
        a.parent().removeClass('aok-hidden')
      },
      isShowroomMainImageHidden: function () {
        return f('#showroom-outer-container').hasClass('aok-hidden')
      },
      handleShowroomIngressClick: d,
      handleShowroomThumbnailClick: function (b) {
        a.addOne(a.COUNTER_NAMES.SHOWROOM_IMAGEBLOCK_THUMBNAIL_SELECT)
        var c = a.createShowroomAtfEvent(
          n,
          k,
          a.EVENT_NAMES.IMAGEBLOCK_THUMBNAIL_CLICK,
          a.STATUS_TYPES.SUCCESS,
        )
        a.logShowroomAtfEvent(c)
        d(b)
      },
      handleShowroomMainImageClick: c,
      refresh: function (a, b, c) {
        p = a
        k = b
        n = c
      },
    }
  })
  ;('use strict')
  k.when('A').register('showroom-image-block-metrics', function (b) {
    return {
      EVENT_NAMES: {
        IMAGEBLOCK_LOAD: 'srm_atf_imageBlock_load',
        IMAGEBLOCK_THUMBNAIL_CLICK: 'srm_atf_thumbnail_click',
        IMAGEBLOCK_MAIN_IMAGE_CLICK: 'srm_atf_main_image_click',
        IMMERSIVE_VIEW_TAB_CLICK: 'srm_atf_iv_tab_click',
      },
      COUNTER_NAMES: {
        SHOWROOM_IMAGEBLOCK_FEATURE_RENDERED: 'showroom:atf:imageBlock:feature:render',
        SHOWROOM_IMAGEBLOCK_THUMBNAIL_HOVER: 'showroom:atf:imageBlock:thumbnail:hover',
        SHOWROOM_IMAGEBLOCK_THUMBNAIL_SELECT: 'showroom:atf:imageBlock:thumbnail:select',
        SHOWROOM_IMAGEBLOCK_MAIN_IMAGE_SELECT: 'showroom:atf:imageBlock:mainImage:select',
        SHOWROOM_IMAGEBLOCK_FAILED_TO_INITIALIZED_WEBLAB_TRIGGER:
          'showroom:atf:imageBlock:failedToInitializeWeblabTrigger',
        TAB_SELECT: 'showroom:atf:tab:select',
      },
      STATUS_TYPES: { SUCCESS: 'success', ERROR: 'error' },
      TIMER_NAMES: {
        SHOWROOM_IMAGEBLOCK_LATENCY_INVOKE: 'showroom:atf:imageBlock:latency:invoke',
        SHOWROOM_IMAGEBLOCK_LATENCY_LOAD: 'showroom:atf:imageBlock:latency:load',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER: 'showroom:atf:imageBlock:latency:render',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_GET_DATA_FOR_ASIN:
          'showroom:atf:imageBlock:latency:render:getDataForAsin',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_UPDATE_MAIN_IMAGE:
          'showroom:atf:imageBlock:latency:render:updateMainImage',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_CREATE_THUMBNAIL:
          'showroom:atf:imageBlock:latency:render:createThumbnail',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_UTIL_CREATE_THUMBNAIL:
          'showroom:atf:imageBlock:latency:render:utilCreateThumbnail',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_UNHIDE_TAB_HEADING:
          'showroom:atf:imageBlock:latency:render:unhideTabHeading',
        SHOWROOM_IMAGEBLOCK_LATENCY_RENDER_LOG_EVENT:
          'showroom:atf:imageBlock:latency:render:logEvent',
        SHOWROOM_IMAGEBLOCK_LATENCY_UPDATE: 'showroom:atf:imageBlock:latency:update',
        SHOWROOM_IMAGEBLOCK_LATENCY_UPDATE_HANDLE_THUMBNAIL_EVENT:
          'showroom:atf:imageBlock:latency:update:handleThumbnailEvent',
      },
      addOne: function (b) {
        try {
          if (d.ue && b) {
            var f = (d.ue.count(b) || 0) + 1
            d.ue.count(b, f)
          }
        } catch (g) {}
      },
      logValue: function (b, m) {
        try {
          d.ue && b && 'number' === typeof m && d.ue.count(b, m)
        } catch (g) {}
      },
      createShowroomAtfEvent: function (f, d, g, e) {
        var a = {}
        a.showroomId = f
        a.asin = d
        a.eventType = g
        a.status = e
        a.device = b.capabilities
          ? b.capabilities.isAmazonApp
            ? 'AmazonApp'
            : b.capabilities.mobile
              ? 'mobile'
              : b.capabilities.tablet
                ? 'tablet'
                : 'desktop'
          : ''
        a.userAgent = navigator ? navigator.userAgent : ''
        a.producerId = 'showroom_atf'
        a.schemaId = 'com.amazon.showroom.ingress.clientEvent.3'
        return a
      },
      logShowroomAtfEvent: function (b) {
        try {
          d.ue &&
            d.ue.event &&
            b &&
            d.ue.event(b, 'showroom_atf', 'com.amazon.showroom.ingress.clientEvent.3')
        } catch (m) {}
      },
    }
  })
  ;('use strict')
  k.when('A', 'showroom-image-block-constants').register(
    'showroom-lite-atf-feature-data',
    function (b, d) {
      function f() {
        return e[a]
      }
      function g(a) {
        return a in e
      }
      var e = {},
        a
      return {
        setData: function (c) {
          c &&
            c.asin &&
            c.imageDomain &&
            c.defaultCollageUrl &&
            c.defaultStageId &&
            Array.isArray(c.itemMainImagePhysicalIds) &&
            ((a = c.asin), g(c.asin) || ((e[c.asin] = c), b.trigger(d.TWISTER_DATA_EVENT, c.asin)))
        },
        getDataForCurrentAsin: f,
        getDataForAsin: function (a) {
          return e[a]
        },
        getStringValue: function (a) {
          return f().displayStrings ? f().displayStrings[a] : ''
        },
        isDataValidForAsin: g,
      }
    },
  )
})
/* ******** */
