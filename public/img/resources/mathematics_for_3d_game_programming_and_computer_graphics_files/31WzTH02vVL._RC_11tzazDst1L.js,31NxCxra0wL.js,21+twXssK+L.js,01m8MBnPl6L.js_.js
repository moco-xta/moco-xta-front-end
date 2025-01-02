;(function (y) {
  var q = window.AmazonUIPageJS || window.P,
    R = q._namespace || q.attributeErrors,
    n = R ? R('MSXBooksDetailPageAsset', '') : q
  n.guardFatal
    ? n.guardFatal(y)(n, window)
    : n.execute(function () {
        y(n, window)
      })
})(function (y, q, R) {
  function n(g) {
    if ('undefined' !== typeof g) {
      var c = q.ue
      if (c && c.count) {
        var f = c.count(g) || 0
        c.count(g, f + 1)
      }
    }
  }
  y.when('A', 'jQuery', 'ImageBlockATF', 'AudibleAudioPlayer', 'cf').execute(function (g, c, f, T) {
    function t() {
      var b = v.find('.audioSamplePopover')
      y.when('jQuery', 'a-popover', 'ready').execute(function (e, c) {
        I = c.create(a, { activate: 'onclick', position: 'triggerRight', inlineContent: b })
      })
      E.click(h)
    }
    function h() {
      I && I.show()
    }
    function A() {
      I && I.hide()
    }
    function L(b) {
      b.bind('audioEnded', function () {
        r.hide()
        w.hide()
        E.show()
        k = 0
        A()
      })
      b.bind('audioPlaying', function () {
        r.hide()
        E.hide()
        w.show()
        k = 1
        h()
      })
      b.bind('audioPaused', function () {
        w.hide()
        E.hide()
        r.show()
        k = 0
        A()
      })
    }
    function M() {
      k ? e.pause() : e.play()
    }
    function J(b) {
      S
        ? 'click' == b.type
          ? 'front' == x
            ? ((x = 'back'),
              l.removeClass('frontUnrotated frontUnrotatedHover').addClass('frontRotated'),
              u.removeClass('backUnrotated backUnrotatedHover').addClass('backRotated'),
              p.css('transform', 'perspective(3000px) rotateY(90deg) translateZ(' + d + 'px)'),
              C.addClass('a-hidden'),
              N.removeClass('a-hidden'),
              O.addClass('flipToBackImgRotate'),
              n('booksImageFlipToBackCount'))
            : ((x = 'front'),
              l.removeClass('frontRotated frontRotatedHover').addClass('frontUnrotated'),
              u.removeClass('backRotated backRotatedHover').addClass('backUnrotated'),
              p.css('transform', 'perspective(3000px) rotateY(-65deg) translateZ(' + d + 'px)'),
              N.addClass('a-hidden'),
              C.removeClass('a-hidden'),
              O.removeClass('flipToBackImgRotate'),
              n('booksImageFlipToFrontCount'))
          : 'mouseenter' == b.type
            ? 'front' == x
              ? (l.removeClass('frontUnrotated').addClass('frontUnrotatedHover'),
                u.removeClass('backUnrotated').addClass('backUnrotatedHover'),
                p.css('transform', 'perspective(3000px) rotateY(-55deg) translateZ(' + d + 'px)'))
              : (l.removeClass('frontRotated').addClass('frontRotatedHover'),
                u.removeClass('backRotated').addClass('backRotatedHover'),
                p.css('transform', 'perspective(3000px) rotateY(80deg) translateZ(' + d + 'px)'))
            : 'front' == x
              ? (l.removeClass('frontUnrotatedHover').addClass('frontUnrotated'),
                u.removeClass('backUnrotatedHover').addClass('backUnrotated'),
                p.css('transform', 'perspective(3000px) rotateY(-65deg) translateZ(' + d + 'px)'))
              : (l.removeClass('frontRotatedHover').addClass('frontRotated'),
                u.removeClass('backRotatedHover').addClass('backRotated'),
                p.css('transform', 'perspective(3000px) rotateY(90deg) translateZ(' + d + 'px)'))
        : 'click' == b.type
          ? 'front' == x
            ? (m.removeClass('bookCanvasTransformHover').addClass('rotated'),
              C.addClass('a-hidden'),
              N.removeClass('a-hidden'),
              O.addClass('flipToBackImgRotate'),
              (x = 'back'),
              n('booksImageFlipToBackCount'))
            : (m.removeClass('rotated rotatedHover'),
              N.addClass('a-hidden'),
              C.removeClass('a-hidden'),
              O.removeClass('flipToBackImgRotate'),
              (x = 'front'),
              n('booksImageFlipToFrontCount'))
          : 'mouseenter' == b.type
            ? 'front' == x
              ? m.addClass('bookCanvasTransformHover')
              : m.removeClass('rotated').addClass('rotatedHover')
            : 'front' == x
              ? m.removeClass('bookCanvasTransformHover')
              : m.removeClass('rotatedHover').addClass('rotated')
    }
    function G() {
      F.addClass('parentImage')
      p.addClass('bookSpine').removeClass('a-hidden')
      m.addClass('bookCanvasTransition')
      l.addClass('bookFrontTransition')
      g.delay(function () {
        m.addClass('bookCanvasTransformHover')
        g.delay(function () {
          m.removeClass('bookCanvasTransformHover')
        }, 1500)
      }, 50)
    }
    function P() {
      var b = p.outerWidth(),
        a = l.outerWidth()
      d = (a - b) / 2 - 2
      p.css('left', (a - b) / 2).css(
        'transform',
        'perspective(3000px) rotateY(-90deg) translateZ(' + d + 'px)',
      )
      l.addClass('ieTransition ieBookShadow').css('transform-origin', '50% 50% -' + b / 2 + 'px')
      u.addClass('ieTransition backLanding ieBookShadow')
        .removeClass('a-hidden')
        .css('transform-origin', '50% 50% -' + b / 2 + 'px')
      p.addClass('ieTransition ieBookShadow')
        .removeClass('a-hidden')
        .css('transform-origin', '50% 50% -' + b / 2 + 'px')
      g.delay(function () {
        u.removeClass('backLanding').addClass('backUnrotated')
        l.addClass('frontUnrotated')
        p.css('transform', 'perspective(3000px) rotateY(-65deg) translateZ(' + d + 'px)')
      }, 50)
      l.mouseenter(function () {
        p.css('transform', 'perspective(3000px) rotateY(-75deg) translateZ(' + d + 'px)')
      })
      l.mouseleave(function () {
        p.css('transform', 'perspective(3000px) rotateY(-65deg) translateZ(' + d + 'px)')
      })
      z.removeClass('a-hidden')
    }
    var H = c('#imageBlock'),
      F = H.find('#img-wrapper'),
      m = H.find('#img-canvas'),
      u = m.find('.backImage'),
      p = m.find('.sideImage'),
      l = m.find('.frontImage'),
      z = H.find('.flipImageToBack'),
      v = H.find('.sampleBookAudio'),
      K = 0,
      x = 'front',
      B = 0,
      k = 0,
      E = v.find('.audioListenText'),
      w = v.find('.audioPlayingText'),
      r = v.find('.audioPausedText'),
      Q = v.find('.audioText'),
      a = v.find('.audioPopoverTrigger'),
      e,
      C = z.find('.flipToBackText'),
      N = z.find('.flipToFrontText'),
      O = z.find('.flipToBackImg'),
      S = c.browser.msie || !!navigator.userAgent.match(/Trident/),
      I,
      d = 0
    ;(function () {
      q.ue && q.ue.count && ue.count('booksImageFlipToBackCount', 0)
      q.ue && q.ue.count && ue.count('booksImageFlipToFrontCount', 0)
      if (f.audibleData && f.audibleData.audioSampleSrc) {
        e = new T()
        var b = {}
        b.audioSrc = f.audibleData.audioSampleSrc
        b.audioId = 'img-blk-audio-sample'
        b.audioControllerId = v
        b.flashPlayerUrl = f.audibleData.flashPlayerUrl
        b.bindEventsCallback = L
        e.init(b)
      }
      for (
        var a = 1,
          b = [
            'Perspective',
            'TransformStyle',
            'TransformOrigin',
            'BackfaceVisibility',
            'Transition',
          ],
          d = 0;
        d < b.length;
        d++
      )
        if (a) {
          for (
            var a = b[d],
              C = ['Webkit', 'Moz', 'O', 'ms'],
              D = document.createElement('div'),
              h = !1,
              k = 0;
            k < C.length;
            k++
          )
            C[k] + a in D.style && (h = h || !0)
          'Perspective' === a &&
            'WebkitPerspective' in D.style &&
            ((h = !1),
            (D.id = 'test3d'),
            document.body.appendChild(D),
            3 === D.offsetHeight && (h = !0),
            D.parentNode.removeChild(D))
          a = h
        }
      K = a
      b = 'undefined' !== typeof u && 0 < u.length
      ;(B = K && b)
        ? ((b = l.width()),
          (d = l.height()),
          0 < b &&
            0 < d &&
            (m.addClass('image-3d'),
            u.css('width', b).css('height', d),
            p.css('height', d),
            S
              ? P()
              : (G(), u.addClass('bookBack').removeClass('a-hidden'), z.removeClass('a-hidden')),
            g.declarative('flip-action', ['click', 'mouseenter', 'mouseleave'], J)),
          e && e.isPlayerAvailable ? z.addClass('a-span6') : z.addClass('a-span12'))
        : m.addClass('image-2d')
      e &&
        e.isPlayerAvailable &&
        (B ? v.addClass('a-span6') : v.addClass('a-span12'),
        w.hide(),
        r.hide(),
        v.removeClass('a-hidden'),
        Q.children().click(M),
        (b = parseInt),
        (d = E.outerWidth()),
        (a = w.outerWidth()),
        (C = r.outerWidth()),
        (D = 0),
        0 < d && 0 < a && 0 < C && (D = Math.max(d, a, C) + 5),
        (b = b(D)) && 0 < b && Q.css('width', b),
        t())
      f.disableResize || c(q).resize(A)
    })()
  })
  y.when('a-modal-handlers').execute('mark-booksimageblock-interactive-time', function () {
    'function' === typeof q.markFeatureInteractive &&
      q.markFeatureInteractive('booksImageBlock', {
        hasComponents: !0,
        components: [{ name: 'thumbnail' }],
      })
  })
  y.when('A', 'jQuery', 'ImageBlockATF', 'ImageGalleryMarkup').execute(function (g, c, f) {
    function q() {
      var a = f.imageGalleryData
      if (a && 0 < a.length) {
        k = {}
        E = a.length
        for (var e = 0; e < a.length; e++) k['ig-thumb-' + e] = a[e]
      }
    }
    function t() {
      B = m.height()
      0 < u.length && (B -= u.height())
      if (c.browser.msie && 7 == c.browser.version) {
        var a = p.outerHeight() - p.height()
        a && 0 < a && (B -= a)
      }
      if (B && 0 < B) {
        p.css('height', B)
        var a = K.height(),
          e = K.width()
        l.css('height', a).css('width', e).data('height', a).data('width', e)
      }
    }
    function h() {
      if (0 < m.length) {
        t()
        L()
        if (0 < E)
          for (var a = 0; a < E; a++) {
            var e = 'ig-thumb-' + a,
              e = c(
                '\x3cdiv class\x3d"ig-thumb-image"\x3e\x3cimg class\x3d"ig-thumb-inner ' +
                  (e == r ? 'selected' : '') +
                  '" id\x3d"' +
                  e +
                  '" src\x3d"' +
                  k[e].thumbUrl +
                  '"\x3e\x3c/div\x3e',
              )
            v.append(e)
          }
        zoomOptions = J()
        w.setImageData(zoomOptions)
        w.attachZoomEvents()
      }
    }
    function A() {
      var a = k[r].dimensions[0],
        e = k[r].dimensions[1]
      z.css('max-width', a)
        .css('max-height', e)
        .removeClass('image-stretch-horizontal image-stretch-vertical')
      z.addClass(y(a, e))
    }
    function L() {
      k[r] && (A(), z.attr('src', k[r].mainUrl))
    }
    function y(a, e) {
      var c = l.data('width') / l.data('height'),
        g = 'image-stretch-vertical'
      a / e > c && (g = 'image-stretch-horizontal')
      return g
    }
    function J() {
      var a = {}
      k[r] &&
        ((a.containerId = 'igInner'),
        (a.imageId = 'igImage'),
        (a.imageWidth = k[r].dimensions[0]),
        (a.imageHeight = k[r].dimensions[1]))
      return a
    }
    function n() {
      k &&
        v.find('.ig-thumb-inner').click(function () {
          var a = this.id,
            e = c(this),
            g = k[a]
          !e.hasClass('selected') &&
            g &&
            ((r = a),
            v.find('.selected').removeClass('selected'),
            e.addClass('selected'),
            w.detachEvents(),
            z.addClass('a-hidden'),
            x.show(),
            (document.getElementById('igImage').onload = Q),
            L(),
            (a = J()),
            w.setImageData(a))
        })
    }
    function P() {
      var a = g.viewport()
      F.closest('.a-popover-modal')
        .css('width', 0.75 * a.width)
        .css('height', 0.75 * a.height)
      t()
      w.detachEvents()
      A()
      a = J()
      w.setImageData(a)
      w.attachZoomEvents()
    }
    function H() {
      g.capabilities.orientation &&
        (g.on('orientationchange', function () {
          P()
        }),
        g.on('a:popover:afterHide:imageGallery', function () {
          g.off('a:popover:afterHide:imageGallery')
          g.on('a:popover:beforeShow:imageGallery', function () {
            P()
          })
        }))
    }
    var F = c('#imgGalleryContent'),
      m = F.closest('.a-popover-wrapper'),
      u = m.find('.a-popover-header'),
      p = m.find('.a-popover-inner'),
      l = F.find('#igInner'),
      z = l.find('#igImage'),
      v = F.find('.ig-thumbs'),
      K = F.find('.ig-main-image'),
      x = F.find('.loading-bar'),
      B = 0,
      k = null,
      E = 0,
      w = new (function () {
        function a() {
          b.bind('touchstart.ig touchmove.ig', function (d) {
            e(d)
            b.unbind('touchstart.ig touchmove.ig')
            b.bind('touchmove.ig', function (a) {
              e(a)
            })
            b.bind('touchend.ig', function (d) {
              f.zoomOut()
              b.unbind('touchstart.ig touchmove.ig touchend.ig')
              a()
            })
          })
        }
        function e(a) {
          r && a.preventDefault()
          var b,
            e = {},
            c = d.width(),
            g = d.height()
          b = a.pageX - d.offset().left
          a = a.pageY - d.offset().top
          e.x = p ? (b * l) / c - b : 0
          e.y = t ? (a * m) / g - a : 0
          f.zoomIn(e)
        }
        var f = {},
          h = null,
          k = null,
          l = 0,
          m = 0,
          d = null,
          b = null,
          p = !1,
          t = !1,
          r = g.capabilities.touch
        f.setImageData = function (a) {
          h = a.containerId
          k = a.imageId
          l = a.imageWidth
          m = a.imageHeight
          d = c('#' + h)
          b = c('#' + k)
          p = 0 < l && 0 < d.length && l > d.width()
          t = 0 < m && 0 < d.length && m > d.height()
        }
        f.attachZoomEvents = function () {
          if (p || t)
            d.addClass('zoomable'),
              r
                ? a()
                : b.click(function (a) {
                    d.hasClass('zoomed-in')
                      ? (f.zoomOut(), b.unbind('mousemove'))
                      : d.hasClass('zoomed-out') &&
                        (e(a),
                        b.mousemove(function (a) {
                          e(a)
                        }))
                  })
        }
        f.zoomIn = function (a) {
          b.css('top', -1 * a.y)
          b.css('left', -1 * a.x)
          d.removeClass('zoomed-out').addClass('zoomed-in')
        }
        f.zoomOut = function () {
          d.removeClass('zoomed-in').addClass('zoomed-out')
          b.css('top', 'auto').css('left', 'auto')
        }
        f.detachEvents = function () {
          f.zoomOut()
          b.unbind()
          d.removeClass('zoomable')
        }
        return f
      })(),
      r
    0 < F.length && ((r = 'ig-thumb-0'), x.hide(), q(), h(), n(), H())
    var Q = function () {
      x.hide()
      z.removeClass('a-hidden')
      w.attachZoomEvents()
    }
  })
  y.when('A', 'jQuery').execute(function (g, c) {
    if (c('#imageBlockThumbs').length) {
      var f = function () {
        var f = c('#imgThumbs'),
          t = f.data('a-modal'),
          h = g.viewport()
        t.width = 0.75 * h.width
        t.height = 0.75 * h.height
        f.data('a-modal', t)
      }
      ;('use strict')
      f()
      g.on('resize', f)
    }
  })
  ;('use strict')
  y.when('A', 'jQuery', 'msxUtility', 'ready', 'atf').execute(function (g, c, f) {
    function q(h) {
      var G = c('\x3cdiv\x3e\x3c/div\x3e').html(h)
      f.digestPageStates(G)
      G = null
      y.when('responsiveMediaTabsLoadComplete').execute(function () {
        var f = c(h).find('#twister')
        f.addClass('no-swatches')
        n.eq(0).html(f)
        ;(f = A[0].getElementsByClassName('olpLink')[0]) &&
        'show-all-offers-display' === f.parentElement.getAttribute('data-action')
          ? A.find('.olpLink').eq(0).parent().addClass('tabHidden')
          : A.find('.olpLink').eq(0).addClass('tabHidden')
        A.find('.mediaMatrix').eq(0).removeClass('tabHidden')
        g.trigger('mediaMatrixLazyLoadComplete')
      })
      G = c('.otherSellers.mediaMatrix')
      0 < G.length && G.eq(0).bind('click', t)
    }
    function t(g) {
      f.postMetric('mmt-media-matrix-glance-view')
      c(g.currentTarget).unbind('click', t)
    }
    var h = g.state('media-matrix-variables')
    if (h) {
      var h =
          '/gp/mediatabs/mediamatrix?' +
          c.param({
            asin: h.currentAsin,
            isMediaMatrixAjaxCall: 1,
            productGroupId: h.productGroupID,
          }),
        A = c('#mediaTabsHeadings'),
        n = c('#mediaTab_content_all').find('#MediaMatrix'),
        M = c('#mediaTab_content_all').find('#MediaMatrixSlot')
      n &&
        0 < n.length &&
        M &&
        0 < M.length &&
        c.ajax({
          method: 'GET',
          url: h,
          dataType: 'text',
          success: function (c) {
            c && /\S/.test(c) ? q(c) : f.postMetric('mmt-media-matrix-ajax-call-fail')
          },
          error: function (c) {
            f.postMetric('mmt-media-matrix-ajax-call-fail')
          },
        })
    }
  })
  ;('use strict')
  y.when('A', 'jQuery').register('msxUtility', function (g, c) {
    return {
      digestPageStates: function (f) {
        f.find("script[type\x3d'a-state']").each(function (f, c) {
          var h,
            q,
            n = c.dataset
          n && n.aState && ((h = JSON.parse(n.aState).key), (q = JSON.parse(c.innerText)))
          h && q && g.state(h, q)
        })
      },
      postMetric: function (c) {
        if ('undefined' !== typeof c) {
          var g = q.ue
          if (g) {
            var n = g.count(c) || 0
            g.count(c, n + 1)
          }
        }
      },
    }
  })
})
/* ******** */
;(function (e) {
  var f = window.AmazonUIPageJS || window.P,
    k = f._namespace || f.attributeErrors,
    d = k ? k('OffersBooksDetailPageAsset', '') : f
  d.guardFatal
    ? d.guardFatal(e)(d, window)
    : d.execute(function () {
        e(d, window)
      })
})(function (e, f, k) {
  e.when('A', 'jQuery', 'atf').execute(function (d, c, e) {
    var b = c('#rbbContainer')
    b.find('.rbbHeaderLink').attr('href', 'javascript:void(0);')
    b.find('.rbbHeader .displayNone i.prime').hide()
    b.find('.rbbHeader .displayNone .primeBadge').hide()
    b.find('.rbbHeader .ubbPrimeBadge').hide()
    b.find('.rbbHeader .prime-plus-price').hide()
    b.find('.rbbHeader .displayNone').removeClass('displayNone')
    c('#rbbContainer .rbbSection.unselected .dp-accordion-inner').hide()
    var f = c('#buyDealSection').length
    c('#rbbContainer .rbbSection .rbbHeader').click(function (a) {
      c(a.target)
      a = c(this)
      a = a.hasClass('rbbHeader') ? a : a.parents('.rbbHeader')
      if (a.parents('.rbbSection').hasClass('selected')) return !1
      b.find('.selected .a-icon-radio-active')
        .removeClass('a-icon-radio-active')
        .addClass('a-icon-radio-inactive')
      b.find('.selected .offer-price')
        .removeClass('a-color-price a-size-medium')
        .addClass('a-color-base a-size-base')
      b.find('i.a-icon.prime').hide()
      b.find('.primeBadge').hide()
      b.find('.ubbPrimeBadge').hide()
      var d = b.find('.prime-plus-price-grid')
      d.hasClass('hidden') ? d.removeClass('hidden').show() : d.addClass('hidden').hide()
      b.find('.prime-plus-price').show()
      a.parents('.rbbSection').removeClass('unselected').addClass('selected')
      a.parents('.rbbSection').toggleClass('dp-accordion-active', 500)
      a.find('.a-icon-radio-inactive')
        .removeClass('a-icon-radio-inactive')
        .addClass('a-icon-radio-active')
      a.find('.offer-price')
        .removeClass('a-color-base a-size-base')
        .addClass('a-color-price a-size-medium')
      a.find('#priceBadgeValue').removeClass('a-size-medium').addClass('a-size-base')
      a.find('i.a-icon.prime').show()
      a.find('.primeBadge').show()
      a.find('.prime-plus-price').hide()
      c('#rbbContainer .rbbSection .rbbContent')
        .find('.offer-price')
        .removeClass('a-color-base')
        .addClass('a-color-price')
      a.find('.ubbPrimeBadge').show()
      var e = c(this).attr('id'),
        g,
        h
      b.find('.rbbSection').each(function (b, a) {
        c(a).find('.rbbHeader')[0].id === e ? (g = c(a)) : c(a).hasClass('selected') && (h = c(a))
      })
      h.find('.rbbContent').slideUp(500, function () {
        h.removeClass('selected').addClass('unselected')
        h.toggleClass('dp-accordion-active', 500)
      })
      g.find('.rbbContent').slideDown(500)
      c.browser.msie &&
        7 === parseInt(c.browser.version, 10) &&
        (g.find('.rbbContent').css('display', 'inline'),
        setTimeout(function () {
          g.find('.rbbContent').css('display', 'block')
        }, 505))
      if (f && 'undefined' != typeof UDPDealView)
        if ((c('#gbld_header_message').show(), 'buyDealSection' === e))
          UDPDealView.prototype.onSelectLDBuybox()
        else UDPDealView.prototype.onSelectRegularBuybox()
      return !0
    })
  })
  e.when('A', 'jQuery').execute(function (d, c) {
    c('#one-click-button-ubb, #usedbuyBox #add-to-cart-button-ubb').click(function () {
      var d = c('#addToCart'),
        b = d
          .attr('action')
          .replace('ref\x3ddp_start-bbf_1_glance', 'ref\x3ddp_start-ubbf_1_glance')
      d.attr('action', b)
      return !0
    })
    e.when('a-popover').execute(function (e) {
      var b = c('#usedItemConditionInfoLink'),
        f = e.create(b, {
          width: 250,
          position: 'triggerBottom',
          activate: d.capabilities.touch ? 'onmousemove' : 'onclick',
          closeButton: !1,
          popoverLabel: 'Used condition details',
          name: 'usedItemConditionDetailsPopover',
          dataStrategy: 'preload',
        })
      b.mouseleave(function () {
        f.hide()
      })
    })
  })
})
/* ******** */
;(function (k) {
  var m = window.AmazonUIPageJS || window.P,
    q = m._namespace || m.attributeErrors,
    p = q ? q('PInfoBooksDetailPageAsset', '') : m
  p.guardFatal
    ? p.guardFatal(k)(p, window)
    : p.execute(function () {
        k(p, window)
      })
})(function (k, m, q) {
  function p(c) {
    var a = 'au br ca de es fr in it jp mx uk us'.split(' '),
      f = c.split(/[.-]+/),
      g =
        null !==
        c.match(/^(www|smile).amazon.(ca|com|com.br|com.mx|co.uk|de|fr|es|it|in|co.jp|com.au)$/),
      f = f.filter(function (b) {
        return -1 !== a.indexOf(b)
      }),
      f = 0 < f.length ? f[0] : 'us',
      e = t(f)
    return {
      obfuscatedMarketplace: {
        au: 'A39IBJ37TRP1C6',
        br: 'A2Q3Y263D00KWC',
        ca: 'A2EUQ1WTGCTBG2',
        de: 'A1PA6795UKMFR9',
        es: 'A1RKKUPIHCS9HS',
        fr: 'A13V1IB3VIYZZH',
        in: 'A21TJRUUN4KGV',
        it: 'APJ6JRA9NG5V4',
        jp: 'A1VC38T7YXB528',
        mx: 'A1AM78C64UM0Y8',
        uk: 'A1F83G8C2ARO7P',
        us: 'ATVPDKIKX0DER',
      }[f],
      endpoint: g
        ? c.replace(/^(www|smile)/, 'data')
        : 'data-' + f + '-pre-prod.' + e + '.corp.amazon.com',
    }
  }
  function t(c) {
    switch (c) {
      case 'us':
      case 'br':
      case 'ca':
      case 'mx':
        return 'iad'
      case 'de':
      case 'fr':
      case 'uk':
      case 'es':
      case 'it':
      case 'in':
        return 'dub'
      case 'jp':
      case 'au':
        return 'pdx'
    }
  }
  function p(c) {
    var a = 'au br ca de es fr in it jp mx uk us'.split(' '),
      f = c.split(/[.-]+/),
      g =
        null !==
        c.match(/^(www|smile).amazon.(ca|com|com.br|com.mx|co.uk|de|fr|es|it|in|co.jp|com.au)$/),
      f = f.filter(function (b) {
        return -1 !== a.indexOf(b)
      }),
      f = 0 < f.length ? f[0] : 'us',
      e = t(f)
    return {
      obfuscatedMarketplace: {
        au: 'A39IBJ37TRP1C6',
        br: 'A2Q3Y263D00KWC',
        ca: 'A2EUQ1WTGCTBG2',
        de: 'A1PA6795UKMFR9',
        es: 'A1RKKUPIHCS9HS',
        fr: 'A13V1IB3VIYZZH',
        in: 'A21TJRUUN4KGV',
        it: 'APJ6JRA9NG5V4',
        jp: 'A1VC38T7YXB528',
        mx: 'A1AM78C64UM0Y8',
        uk: 'A1F83G8C2ARO7P',
        us: 'ATVPDKIKX0DER',
      }[f],
      endpoint: g
        ? c.replace(/^(www|smile)/, 'data')
        : 'data-' + f + '-pre-prod.' + e + '.corp.amazon.com',
    }
  }
  function t(c) {
    switch (c) {
      case 'us':
      case 'br':
      case 'ca':
      case 'mx':
        return 'iad'
      case 'de':
      case 'fr':
      case 'uk':
      case 'es':
      case 'it':
      case 'in':
        return 'dub'
      case 'jp':
      case 'au':
        return 'pdx'
    }
  }
  k.when('A', 'jQuery', 'atf').execute(function (c, a, f) {
    var g,
      e = 0
    k.when('DPClientLogger').execute(function () {
      'undefined' != typeof m.DPClientLogger &&
        (g = new m.DPClientLogger.ImpressionLogger('dpbxapps', 'bxapps-atfMarker', !0, !0))
    })
    a('#bookDetails_feature_div .hero-more').click(function (b) {
      b.preventDefault()
      b = a(this).attr('data-popupID')
      var c = a('#' + b),
        d = a(this).offset().left + a(this).width() / 2,
        h = a('#popupContent').offset().left,
        d = ((d - h) / a('#popupContent').width()) * 100
      a('#' + b + ' .pointer').css({ left: d + '%' })
      a('#popupContent .details-popup').filter(':visible').length
        ? a('#popupContent .details-popup').filter(':visible').attr('id') !== b
          ? (a('#popupContent .details-popup').filter(':visible').slideToggle(300),
            c.slideToggle(300))
          : c.slideUp(300)
        : (c.slideDown(300),
          a(this).hasClass('hero-more') &&
            a('html,body').animate(
              { scrollTop: a('#bookDetails_feature_div').offset().top - 50 },
              600,
            ))
      g && !e && (g.logImpression('ma-books-br-details'), (e = 1))
    })
    a('#bookDetails_feature_div .moreNarratorLink').click(function () {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname
      ) {
        var b = a(this.hash),
          b = b.length ? b : a('[name\x3d' + this.hash.slice(1) + ']')
        b.length && a('html,body').animate({ scrollTop: b.offset().top }, 1e3)
        return !1
      }
    })
    a('#bookDetails_feature_div .details-popup button').click(function (b) {
      a(this).parent().slideUp(300)
    })
  })
  var l = m.location.hostname,
    l = p(l),
    r = l.obfuscatedMarketplace,
    x = l.endpoint
  k.when('A', 'jQuery', 'atf').execute(function (c, a, f) {
    function g() {
      var e = parseInt(a('#byline').width()),
        b = 0
      a('#byline .author').each(function () {
        a(this).is('.notFaded') && (b += a(this).outerWidth())
      })
      b += a('#byline .more').outerWidth()
      if (b > e) {
        var c = a('#byline .author.notFaded').length
        a(a('#byline .author.notFaded').get().reverse()).each(function (d) {
          b > e &&
            d < c - 1 &&
            ((d = a(this).width()),
            a(this).removeClass('notFaded'),
            a(this).fadeOut(10, function () {
              a(this).hide()
            }),
            (b -= d),
            a('#byline .moreCount').html(
              a('#byline .author').length - a('#byline .author.notFaded').length,
            ),
            a('#byline .more').addClass('notFaded').fadeIn(10))
        })
      } else if (b < e && a('#byline .author.notFaded').length < a('#byline .author').length) {
        var d = e - b
        a('#byline .author').each(function () {
          if (!a(this).hasClass('notFaded')) {
            var b = a(this).outerWidth()
            b <= d
              ? ((d -= b),
                a(this).addClass('notFaded').fadeIn(10),
                (b = a('#byline .author').length - a('#byline .author.notFaded').length),
                0 === b
                  ? a('#byline .more').removeClass('notFaded').fadeOut(10)
                  : (a('#byline .moreCount').html(b),
                    a('#byline .more').addClass('notFaded').fadeIn(10)))
              : (d = 0)
          }
        })
      }
    }
    a('#byline .showMoreLink').click(function () {
      a('#byline .author').each(function () {
        a(this).hasClass('notFaded') || a(this).addClass('notFaded').fadeIn(0)
        a('#byline .more').removeClass('notFaded').fadeOut(0)
      })
      return !1
    })
    a('#byline .contributorNameID').mouseenter(function () {
      var e = a(this).attr('data-asin'),
        b = 'isAjaxComplete_' + e,
        f = 'isAjaxInProgress_' + e,
        d = c.state('popoverImage-state')
      if ('1' !== d[b] && '1' !== d[f]) {
        var h = a('meta[id\x3dbyline-csrf-token]').attr('content')
        a.ajax({
          url: 'https://' + x + '/api/marketplaces/' + r + '/contributors/authors/' + e,
          type: 'GET',
          headers: {
            'Accept-Language': 'en-US',
            Accept:
              'application/vnd.com.amazon.api+json; type\x3d"contributor.author/v1"; expand\x3d"profile(contributor.profile/v1)"',
            'x-api-csrf-token': h,
          },
          xhrFields: { withCredentials: !0 },
          success: function (h) {
            h = h.entity.profile.entity.image
            var y = document.createElement('img')
            y.setAttribute(
              'src',
              'https://images-na.ssl-images-amazon.com/images' +
                (h.s3Bucket !== q ? '/S/' + h.s3Bucket + '/' : '/I/') +
                h.physicalId +
                '._SY75_.' +
                h.extension,
            )
            y.setAttribute('id', e)
            a('#contributorImageContainer' + e)
              .get(0)
              .appendChild(y)
            d[b] = '1'
            c.state('popoverImage-state', d)
          },
          error: function () {
            d[f] = '0'
            c.state('popoverImage-state', d)
          },
        })
        d[f] = '1'
        c.state('popoverImage-state', d)
      }
    })
    ;(function (e) {
      var b = parseInt(e.width()),
        c = parseInt(e.find('.more').outerWidth()),
        d = 0
      a('#byline .author').each(function () {
        a(this).is('.notFaded') && (d += a(this).outerWidth())
      })
      a('#byline .more').attr('data-width', c)
      var h = b - c
      if (h > d)
        e.find('.author').each(function () {
          var b = a(this).index()
          3 <= parseInt(b)
            ? ((b = a(this).outerWidth()),
              a(this).attr('data-width', b),
              b < h
                ? ((h -= b), a(this).addClass('notFaded'), a(this).fadeIn('slow'))
                : ((h = 0), a(this).fadeOut('slow')))
            : ((b = a(this).outerWidth()), a(this).attr('data-width', b), (h -= b))
        })
      else {
        var f = a('#byline .author.notFaded').length
        a(a('#byline .author.notFaded').get().reverse()).each(function (b) {
          h < d &&
            b < f - 1 &&
            ((b = a(this).outerWidth()), (d -= b), a(this).fadeOut('slow').removeClass('notFaded'))
        })
      }
      b = e.find('.author').length - e.find('.author.notFaded').length
      0 < b &&
        (e.find('.moreCount').html(b),
        e.find('.more').fadeIn('slow'),
        e.find('.more').addClass('notFaded'))
    })(c.$('#byline'))
    a(m).resize(function () {
      g()
    })
  })
  l = m.location.hostname
  l = p(l)
  r = l.obfuscatedMarketplace
  x = l.endpoint
  k.when('A', 'jQuery', 'atf').execute(function (c, a, f) {
    function g() {
      var e = parseInt(a('#bylineInfo').width()),
        b = 0
      a('#bylineInfo .author').each(function () {
        a(this).is('.notFaded') && (b += a(this).outerWidth())
      })
      b += a('#bylineInfo .more').outerWidth()
      if (b > e) {
        var c = a('#bylineInfo .author.notFaded').length
        a(a('#bylineInfo .author.notFaded').get().reverse()).each(function (d) {
          b > e &&
            d < c - 1 &&
            ((d = a(this).width()),
            a(this).removeClass('notFaded'),
            a(this).fadeOut(10, function () {
              a(this).hide()
            }),
            (b -= d),
            a('#bylineInfo .moreCount').html(
              a('#bylineInfo .author').length - a('#bylineInfo .author.notFaded').length,
            ),
            a('#bylineInfo .more').addClass('notFaded').fadeIn(10))
        })
      } else if (
        b < e &&
        a('#bylineInfo .author.notFaded').length < a('#bylineInfo .author').length
      ) {
        var d = e - b
        a('#bylineInfo .author').each(function () {
          if (!a(this).hasClass('notFaded')) {
            var b = a(this).outerWidth()
            b <= d
              ? ((d -= b),
                a(this).addClass('notFaded').fadeIn(10),
                (b = a('#bylineInfo .author').length - a('#bylineInfo .author.notFaded').length),
                0 === b
                  ? a('#bylineInfo .more').removeClass('notFaded').fadeOut(10)
                  : (a('#bylineInfo .moreCount').html(b),
                    a('#bylineInfo .more').addClass('notFaded').fadeIn(10)))
              : (d = 0)
          }
        })
      }
    }
    a('#bylineInfo .showMoreLink').click(function () {
      a('#bylineInfo .author').each(function () {
        a(this).hasClass('notFaded') || a(this).addClass('notFaded').fadeIn(0)
        a('#bylineInfo .more').removeClass('notFaded').fadeOut(0)
      })
      return !1
    })
    a('#bylineInfo .contributorNameID').mouseenter(function () {
      var e = a(this).attr('data-asin'),
        b = 'isAjaxComplete_' + e,
        f = 'isAjaxInProgress_' + e,
        d = c.state('popoverImage-state')
      if ('1' !== d[b] && '1' !== d[f]) {
        var h = a('meta[id\x3dbyline-csrf-token]').attr('content')
        a.ajax({
          url: 'https://' + x + '/api/marketplaces/' + r + '/contributors/authors/' + e,
          type: 'GET',
          headers: {
            'Accept-Language': 'en-US',
            Accept:
              'application/vnd.com.amazon.api+json; type\x3d"contributor.author/v1"; expand\x3d"profile(contributor.profile/v1)"',
            'x-api-csrf-token': h,
          },
          xhrFields: { withCredentials: !0 },
          success: function (f) {
            f = f.entity.profile.entity.image
            var h = document.createElement('img')
            h.setAttribute(
              'src',
              'https://images-na.ssl-images-amazon.com/images' +
                (f.s3Bucket !== q ? '/S/' + f.s3Bucket + '/' : '/I/') +
                f.physicalId +
                '._SY75_.' +
                f.extension,
            )
            h.setAttribute('id', e)
            a('#contributorImageContainer' + e)
              .get(0)
              .appendChild(h)
            d[b] = '1'
            c.state('popoverImage-state', d)
          },
          error: function () {
            d[f] = '0'
            c.state('popoverImage-state', d)
          },
        })
        d[f] = '1'
        c.state('popoverImage-state', d)
      }
    })
    ;(function (e) {
      var b = parseInt(e.width()),
        f = parseInt(e.find('.more').outerWidth()),
        d = 0
      a('#bylineInfo .author').each(function () {
        a(this).is('.notFaded') && (d += a(this).outerWidth())
      })
      a('#bylineInfo .more').attr('data-width', f)
      var c = b - f
      if (c > d)
        e.find('.author').each(function () {
          var b = a(this).index()
          3 <= parseInt(b)
            ? ((b = a(this).outerWidth()),
              a(this).attr('data-width', b),
              b < c
                ? ((c -= b), a(this).addClass('notFaded'), a(this).fadeIn('slow'))
                : ((c = 0), a(this).fadeOut('slow')))
            : ((b = a(this).outerWidth()), a(this).attr('data-width', b), (c -= b))
        })
      else {
        var g = a('#bylineInfo .author.notFaded').length
        a(a('#bylineInfo .author.notFaded').get().reverse()).each(function (b) {
          c < d &&
            b < g - 1 &&
            ((b = a(this).outerWidth()), (d -= b), a(this).fadeOut('slow').removeClass('notFaded'))
        })
      }
      b = e.find('.author').length - e.find('.author.notFaded').length
      0 < b &&
        (e.find('.moreCount').html(b),
        e.find('.more').fadeIn('slow'),
        e.find('.more').addClass('notFaded'))
    })(c.$('#bylineInfo'))
    a(m).resize(function () {
      g()
    })
  })
  k.when('A', 'jQuery', 'DynamicIframe', 'ProductDescriptionData', 'cf').execute(
    function (c, a, f, g) {
      function e() {
        q = 0
        var a = Math.min(k, l.length)
        m(0, a)
      }
      function b() {
        0 < u.length &&
          0 < v.length &&
          ((w = 'collapsed'),
          u.removeClass('a-hidden'),
          u.click(function () {
            'collapsed' === w
              ? (t
                  ? v.animate({ height: 'show' })
                  : (v.removeClass('extraReviews'), m(q, l.length), (t = 1)),
                u.removeClass('collapsed').addClass('expanded'),
                (w = 'expanded'))
              : (v.animate({ height: 'hide' }),
                u.removeClass('expanded').addClass('collapsed'),
                (w = 'collapsed'))
          }))
      }
      function m(b, e) {
        var c
        for (c = b; c < e; c++) {
          var h = {}
          h.iframeId = 'er_iframe_' + c
          h.iframeWrapperId = 'er_iframe_wrapper_' + c
          h.iframeContainerId = 'er_container_' + c
          h.iframeExpanderId = 'er_expander_' + c
          h.iframeColumnId = 'er_column_' + c
          var g = h,
            n = l[c],
            k =
              "\x3ch3 class\x3d'erSource'\x3e" +
              n.source +
              "\x3c/h3\x3e\x3cdiv class\x3d'erContent'\x3e" +
              n.content +
              '\x3c/div\x3e'
          n.footnote && (k = k + "\x3cem class\x3d'erFootnote'\x3e" + n.footnote + '\x3c/em\x3e')
          g.encodedIframeContent = k
          h.initialResizeCallback = d
          g = h
          n = {}
          n.id = a('#' + g.iframeId)
          n.column = a('#' + g.iframeColumnId)
          n.wrapper = a('#' + g.iframeWrapperId)
          n.container = a('#' + g.iframeContainerId)
          n.expander = a('#' + g.iframeExpanderId)
          n.iframeObj = new f(g)
          n.state = 'full'
          g = n
          r[h.iframeId] = g
          g.column.removeClass('extraReviews')
          g &&
            'undefined' != typeof g.iframeObj &&
            'function' == typeof g.iframeObj.createIframe &&
            g.iframeObj.createIframe()
          p(g)
          q++
        }
      }
      function d(a) {
        ;(a = r[a]) &&
          170 < a.wrapper.outerHeight() &&
          (a.container.css('height', 140),
          a.expander.removeClass('a-hidden expanded').addClass('collapsed'),
          (a.state = 'partial'))
      }
      function h(a) {
        ;(a = r[a]) && 'full' === a.state && a.container.css('height', a.wrapper.outerHeight())
      }
      function p(b) {
        if (b && 'undefined' != typeof b.iframeObj && 'function' == typeof b.iframeObj.resizeIframe)
          c.on('resize', function () {
            b.iframeObj.resizeIframe(h)
          })
        b &&
          b.expander &&
          b.expander.click(function () {
            'partial' === b.state
              ? (b.container.animate({ height: b.wrapper.outerHeight() }),
                b.expander.removeClass('collapsed').addClass('expanded'),
                (b.state = 'full'))
              : (b.container.animate({ height: 140 }),
                b.expander.removeClass('expanded').addClass('collapsed'),
                a('html, body').animate({ scrollTop: b.container.offset().top - 20 }),
                (b.state = 'partial'))
          })
      }
      var l = g.encodedReviews,
        k = parseInt(g.reviewsPerRow),
        q = 0,
        t = 0
      g = a('#productDescription-multiColumn')
      var r = {},
        u,
        v,
        w
      0 < g.length &&
        l &&
        0 < l.length &&
        k &&
        ((u = g.find('.reviewsExpander')), (v = g.find('.seeMoreProductReviews')), e(), b())
    },
  )
})
/* ******** */
;(function (m) {
  var k = window.AmazonUIPageJS || window.P,
    p = k._namespace || k.attributeErrors,
    f = p ? p('TwisterBooksDetailPageAsset', '') : k
  f.guardFatal
    ? f.guardFatal(m)(f, window)
    : f.execute(function () {
        m(f, window)
      })
})(function (m, k, p) {
  m.when('A', 'jQuery', 'atf', 'a-modal').execute(function (f, a, O, w) {
    f.on.ready(function () {
      function q(a, c) {
        100 >= c
          ? g.count(a + '-count-0-100', c)
          : 1e3 >= c
            ? g.count(a + '-count-100-1000', c)
            : 1e3 < c && g.count(a + '-count-1000', c)
      }
      function r(b, c, d, f, e) {
        a(b).slideToggle(300)
        a(c).slideToggle(300)
        a(d).toggleClass('tmmShowPrompt tmmHidePrompt')
        a(f).toggleClass('tmmShowPrompt tmmHidePrompt')
        a(e).toggleClass('rotate')
      }
      function x(b) {
        b = b.data.modal
        if (b !== p && null !== b) {
          var c = a('#saf-popover-action')
          b.get(c).hide()
        }
      }
      function L(b) {
        b.position()
        b.width()
        a('.swatchElement')
        b.find('.swatchElement').each(function () {
          a(this).attr('data-width', a(this).width())
          t += a(this).width()
        })
        a('#formats').find('.a-row').removeClass('nonJSFormats')
      }
      function y() {
        var b = a('#formats.responsive')
        if (0 !== b.length) {
          var c = b.width() - 40,
            d = 0,
            f = 0
          b.find('.swatchElement').each(function () {
            a(this).is(':visible') ? (d += a(this).width()) : f++
          })
          var e = a(b.find('.swatchElement').get().length),
            u = b.find('.swatchElement .audibleTitle').length,
            h = 0 < e.length && 4 <= e[0]
          ;(z || A) &&
            h &&
            u &&
            ((h = M(d, c)),
            (d -= h),
            z
              ? g.count('mediaMatrixUIOptimization', 1)
              : g.count('mediaMatrixUIOptimizationResizeAndSpillOver', 1))
          d > c
            ? a(b.find('.swatchElement:visible').get().reverse()).each(function () {
                var b = 0,
                  e = !1
                a(this).find('.format').hasClass('a-button-selected')
                  ? ((b = a(this).prev('.swatchElement').width()),
                    (e = a(this).prev('.swatchElement').is(':hidden')),
                    a(this).prev('.swatchElement').hide())
                  : ((b = a(this).width()), (e = a(this).is(':hidden')), a(this).hide())
                f++
                e || (d -= b)
                return d > c
              })
            : d < c &&
              b.find('.swatchElement').each(function () {
                if (a(this).is(':hidden')) {
                  var b = a(this).width()
                  b <= c - d && (a(this).show(), (d += b), f--)
                }
              })
          0 == f && N(d, c, e, t)
          ;(A || B) &&
            u &&
            (a('#tmmSwatches').css({ display: 'inline-block', 'white-space': 'normal' }),
            B && g.count('mediaMatrixtwisterSpillOver', 1),
            a(b.find('.swatchElement').get().reverse()).each(function () {
              a(this).is(':hidden') && a(this).show()
              a(this).addClass('marginTop')
            }))
          !C &&
            u &&
            (a.post('/hz/audible/wl', { audible_weblabs: 'ADBL_TWISTER_RESIZE_116490' }), (C = 1))
          D ||
            ((e = a('#audibleTwisterWeblabs')),
            null != e &&
              e.length &&
              null != e.data('weblabs') &&
              ((e = e.data('weblabs')),
              (b = b.find('.swatchElement:visible .audibleTitle').length),
              e.length &&
                b &&
                a.post('/hz/audible/wl', { audible_weblabs: e }, function (a) {
                  D = !0
                })))
        }
      }
      function M(b, c) {
        var d = a('#formats'),
          f = 0
        a(d.find('.swatchElement').get().reverse()).each(function () {
          var e = E(a(this)),
            d = a(this).width(),
            d = d > e ? d - e : 0
          if ((b > c && 0 < d) || a(this).is(':hidden')) F(a(this), e), (f += d), (b -= d)
        })
        return f
      }
      function N(b, c, d, f) {
        var e = Math.round(0 < d.length ? (c - b) / d[0] : 0) - 10,
          e = 0 < e ? e : 0
        0 < e &&
          a('#formats')
            .find('.swatchElement')
            .each(function () {
              var b = parseInt(a(this).attr('data-width')),
                d = E(a(this)) + (0 < e ? e : 0),
                b = f < c ? b + 1 : Math.min(d, b)
              F(a(this), b)
            })
        return e
      }
      function E(a) {
        var c = a.find('#kuBadge').length
        a = a.find('.a-icon-kindle-unlimited').length
        return 0 < c || 0 < a ? 150 : 117
      }
      function F(a, c) {
        a.addClass('resizedSwatchElement')
        a.css({ width: c + 'px' })
      }
      var G = 0,
        H = 0,
        D = !1,
        v,
        g = k.ue,
        t = 0,
        C = 0,
        z = a('#twisterResizeWeblab') ? a('#twisterResizeWeblab').data('weblabs') : null,
        A = a('#twisterResizeAndSpillOver')
          ? a('#twisterResizeAndSpillOver').data('weblabs')
          : null,
        B = a('#twisterSpillOver') ? a('#twisterSpillOver').data('weblabs') : null,
        I = function (a) {
          'undefined' != typeof a &&
            (v = new a.ImpressionLogger('dpbxapps', 'bxapps-atfMarker', !0, !0))
        }
      'undefined' != typeof amznJQ
        ? amznJQ.available('DPClientLogger', function () {
            I(k.DPClientLogger)
          })
        : m.when('DPClientLogger').execute(I)
      var h = f.state('mediamatrix-saf'),
        J = h && h.hideEdition,
        n = h ? h.editionCount : 0
      f.declarative('tmm-see-more-editions-click', ['click'], function (b) {
        var c = b.data,
          d = c.metabindingUrl
        if (
          b.$target.hasClass('a-link-expander') ||
          b.$target.parent().hasClass('a-link-expander')
        ) {
          var c = c.metabindingPlaceHolder,
            g = '#metabinding_row_top_' + c,
            e = '#metabinding_row_bottom_' + c,
            h = '#editionsSeePrompt_' + c,
            m = '#editionsHidePrompt_' + c,
            p = '#editionsIcon_' + c,
            q = 'isAjaxComplete_' + c,
            n = 'isAjaxInProgress_' + c
          b = '#tmmSpinnerDiv_' + c
          var l = f.state('mediamatrix-state'),
            c = l['url_' + c].replace(/&amp;/g, '\x26')
          a('#formats .tmmErrorClass').hide()
          '1' === l[q] || '1' === l[n]
            ? r(g, e, h, m, p)
            : (f.ajax(c, {
                method: 'get',
                success: function () {
                  l[q] = '1'
                  f.state('mediamatrix-state', l)
                  r(g, e, h, m, p)
                  a('div.safPopover td.dp-new-col \x3e span').click({ modal: w }, x)
                  a('div.safPopover td.dp-used-col \x3e span').click({ modal: w }, x)
                },
                indicator: a(b),
                error: function () {
                  a($tmmErrorDiv).show()
                  l[n] = '0'
                  f.state('mediamatrix-state', l)
                },
              }),
              (l[n] = '1'),
              f.state('mediamatrix-state', l))
        } else '#' !== d && (k.location = d)
      })
      0 < a('#formats \x3e .a-link-expander').length &&
        g &&
        g.count &&
        (J
          ? (g.count('mediaMatrixExpanderPresent-saf', 1), q('mediaMatrixExpanderPresent-saf', n))
          : (g.count('mediaMatrixExpanderPresent', 1), q('mediaMatrixExpanderPresent', n)))
      a('#formats \x3e .a-link-expander').click(function () {
        r(
          '#tmmSwatches',
          '#twister',
          '#showMoreFormatsPrompt',
          '#hideMoreFormatsPrompt',
          '#formatsIcon',
        )
        H ||
          (g &&
            g.count &&
            (J
              ? (g.count('mediaMatrixExpanderClicked-saf', 1),
                q('mediaMatrixExpanderClicked-saf', n))
              : (g.count('mediaMatrixExpanderClicked', 1), q('mediaMatrixExpanderClicked', n))),
          (H = 1))
        v &&
          a('#twister').is(':visible') &&
          !G &&
          (v.logImpression('tmm-show-more-formats-viewed'), (G = 1))
      })
      a('#formats.responsive').each(function () {
        L(a(this))
      })
      var h = f.state('mediamatrixState'),
        K = 'false'
      'undefined' !== typeof h && 'undefined' !== typeof h.swatchWrap && (K = h.swatchWrap)
      'true' != K && (y(), f.on('resize', y))
      a('#formats .unselected .format')
        .mouseenter(function () {
          a(this)
            .find('.a-color-secondary')
            .addClass('a-color-price')
            .removeClass('a-color-secondary')
        })
        .mouseleave(function () {
          a(this).find('.a-color-price').addClass('a-color-secondary').removeClass('a-color-price')
        })
      a('#landingItemRentalLink').attr(
        'href',
        "javascript:document.getElementById('rentBuySection').click();",
      )
      h = {
        hasComponents: !0,
        components: [
          { name: 'swatches', events: ['click', 'hover'] },
          { name: 'seeAll', events: ['click', 'hover'] },
        ],
      }
      'function' === typeof k.markFeatureInteractive && k.markFeatureInteractive('MediaMatrix', h)
    })
  })
})
/* ******** */
;(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    d = b._namespace || b.attributeErrors,
    a = d ? d('DetailPageBookProductDescriptionAssets', '') : b
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window)
      })
})(function (c, b, d) {})
/* ******** */
