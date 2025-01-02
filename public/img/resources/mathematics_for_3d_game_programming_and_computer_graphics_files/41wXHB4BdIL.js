;(function (n) {
  var c = window.AmazonUIPageJS || window.P,
    M = c._namespace || c.attributeErrors,
    k = M ? M('DetailPageLookInsideAssets', '') : c
  k.guardFatal
    ? k.guardFatal(n)(k, window)
    : k.execute(function () {
        n(k, window)
      })
})(function (n, c, M) {
  function k(h) {
    c.ue && c.ue.count && c.ue.tag && (ue.count(h, 0), ue.tag(O()))
  }
  function g(h) {
    if ('undefined' !== typeof h) {
      var e = c.ue
      if (e && e.count && e.tag) {
        var d = e.count(h) || 0
        e.count(h, d + 1)
        e.tag(O())
      }
    }
  }
  function O() {
    var c = /ipad|tablet/i.test(navigator.userAgent)
    return /mobile/i.test(navigator.userAgent) && !c ? 'mobile' : c ? 'tablet' : 'desktop'
  }
  function S(c, e) {
    var d = {}
    var f = Y.COUNT
    f = {
      Timestamp: Date.now(),
      CloudWatchMetrics: [
        {
          Namespace: 'LITB',
          Dimensions: [['region'], ['marketplace'], ['platform']],
          Metrics: [{ Name: c, Unit: f }],
        },
      ],
    }
    d._aws = f
    d.region = e.region
    d.marketplace = e.marketplace
    d.platform = O()
    d[c] = 1
    return { logs: [{ level: 'info', message: c, context: { emfLog: d, logTime: Date.now() } }] }
  }
  n.when('A', 'jQuery', 'ebooksImageBlockATF', 'cf').execute(function (h, e, d) {
    function f() {
      k('litbReaderIframeSrcNotAvailable')
      k('litbReaderIframeContentWindowNotAvailable')
      k('litbStickerClickedOnKindleBook')
      k('bookImageClickedOnKindleBook')
      D()
      P.addClass('image-2d')
      if (d && d.litbData && d.litbData.hasLitb && d.litbData.litbReftag) {
        P.addClass('clickableImage')
        var a = document.getElementById('litb-read-frame')
        a && a.dataset && a.dataset.src
          ? (a.src = a.dataset.src)
          : g('litbReaderIframeSrcNotAvailable')
        d.litbData.showNewDesktopLitb && a
          ? (y.click(function (a) {
              l(!0)
              p(a.target) &&
                (g('litbStickerClickedOnKindleBook'),
                b.incrementMetric('litbStickerClickedOnKindleBook'))
            }),
            c.addEventListener('popstate', H, !1),
            c.addEventListener('message', q, !1),
            B(),
            (a = r(c.location.search)),
            a.asin && a.format && l(!1))
          : y.click(function (a) {
              U(!0)
              p(a.target) && g('litbStickerClickedOnKindleBook')
            })
      }
      e(c).resize(K)
    }
    function p(a) {
      return (
        a &&
        ('ebooksSitbLogoImg' === a.getAttribute('id') || 'ebooksSitbLogo' === a.getAttribute('id'))
      )
    }
    function B() {
      var a = document.getElementById('litb-read-frame')
      if (a && a.contentWindow) {
        if (t) {
          a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
          return
        }
        a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
        V > R && !W && ((W = !0), g('DpIsReadyAttemptsOverMax:Count'))
        V++
      } else a && g('litbReaderIframeContentWindowNotAvailable')
      setTimeout(B, O)
    }
    function l(a) {
      X++
      t
        ? U(a)
        : X > S ||
          setTimeout(function () {
            l(a)
          }, O)
    }
    function U(a) {
      g('bookImageClickedOnKindleBook')
      b.incrementMetric('bookImageClickedOnKindleBook')
      var A = document.getElementById('litb-read-frame')
      d.litbData && d.litbData.showNewDesktopLitb && A && A.contentWindow
        ? ((a = JSON.stringify({
            command: 'initializeLITB',
            time: Date.now(),
            search: c.location.search,
            newSession: a,
          })),
          A.contentWindow.postMessage(a, '*'),
          z(),
          A.focus())
        : (A && !A.contentWindow && g('litbReaderIframeContentWindowNotAvailable'),
          'undefined' != typeof SitbReader &&
            SitbReader.LightboxActions.openReader(d.litbData.litbReftag))
    }
    function H() {
      var a = document.getElementById('litb-read-frame')
      d.litbData && d.litbData.showNewDesktopLitb && a && a.contentWindow
        ? (G ||
            (!C() && !v) ||
            (z(),
            a.contentWindow.postMessage(
              JSON.stringify({ command: 'updateLITB', search: c.location.search }),
              a.src,
            )),
          (G = !1))
        : a && g('litbReaderIframeContentWindowNotAvailable')
      v || u()
    }
    function z() {
      var a = document.getElementById('litb-read-frame')
      if (a) {
        T = c.scrollY
        var b = document.body
        b.style.position = 'fixed'
        b.style.top = '-' + T + 'px'
        b.style.right = '0'
        b.style.left = '0'
        a.style.cssText =
          'position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; display: block; border: 0 none;'
        v = !0
      }
    }
    function x(a) {
      var b = document.getElementById('litb-read-frame')
      b &&
        ((b.style.cssText = 'display: none'),
        (b = document.body),
        (b.style.position = ''),
        (b.style.top = ''),
        (b.style.right = ''),
        (b.style.left = ''),
        c.scrollTo(0, parseInt(T || '0', 10)),
        (v = !1),
        a && u())
    }
    function u() {
      C() &&
        c.history.replaceState(
          {},
          document.title,
          c.location.origin + c.location.pathname + E() + c.location.hash,
        )
    }
    function q(a) {
      var b
      if ((b = 'string' === typeof a.data))
        try {
          JSON.parse(a.data), (b = !0)
        } catch (da) {
          b = !1
        }
      b &&
        ((a = JSON.parse(a.data)),
        (b = a.command),
        'closeLITB' === b
          ? a.depth
            ? ((G = !0), c.history.go(-1 * a.depth), x(!1))
            : x(!0)
          : 'updateLITB' === b && a.search
            ? ((b = r(c.location.search)),
              c.history.pushState(
                {},
                document.title,
                c.location.origin + c.location.pathname + w(a.search) + c.location.hash,
              ),
              b.asin !== a.search.asin && c.dispatchEvent(new PopStateEvent('popstate')))
            : 'readyLITB' === b
              ? (t = !0)
              : 'reloadLITB' === b && c.location.reload())
    }
    function D() {
      var a = N.outerWidth(),
        b = N.outerHeight(),
        e = L.outerHeight() - (L.outerHeight() - N.outerHeight()) / 2
      P.width(a).height(b)
      N.css({ position: 'relative', top: '0', left: '0' })
      A.height(e)
      ;(c.innerWidth || document.body.offsetWidth) < d.windowWidthThreshold && K()
    }
    function K() {
      var a = c.innerWidth || document.body.offsetWidth
      if (!(0 >= a))
        if (a > d.windowWidthThreshold) {
          a = d.configWidths[1]
          var b = a / d.holderRatio,
            A = d.frontImageWidth,
            e = d.frontImageHeight
          I(a, b, A, e)
        } else
          a < d.windowWidthThreshold &&
            ((a = d.configWidths[0]),
            (b = a / d.holderRatio),
            d.frontImageAspectRatio > d.holderRatio
              ? ((A = a), (e = A / d.frontImageAspectRatio))
              : ((e = b), (A = e * d.frontImageAspectRatio)),
            I(a, b, A, e))
    }
    function I(a, b, c, f) {
      if (0 < a && 0 < b && 0 < c && 0 < f) {
        M.length &&
          n.length &&
          (M.css('margin-left', a + d.centerColMargin).removeClass('centerColumn'), n.width(a))
        var w = b + d.containerMargin
        y.width(a).height(w)
        N.width(c).height(f)
        P.width(c).height(f)
        A.height(b - (b - N.outerHeight()) / 2)
        e(this).trigger('imageResize')
      }
    }
    function r(a) {
      var b = {}
      0 < a.length &&
        a
          .substr(1)
          .split('\x26')
          .forEach(function (a) {
            a = a.split('\x3d')
            2 === a.length && (b[a[0]] = a[1])
          })
      return b
    }
    function m(a) {
      var b = ''
      Object.keys(a).forEach(function (c) {
        0 < b.length && (b += '\x26')
        b += c + '\x3d' + a[c]
      })
      return b
    }
    function w(a) {
      if (c.location.search) {
        var b = r(c.location.search)
        b.asin = a.asin
        b.revisionId = a.revisionId
        b.format = a.format
        b.depth = a.depth
        a = m(b)
      } else a = m(a)
      return '?' + a
    }
    function E() {
      var a = ''
      c.location.search &&
        ((a = r(c.location.search)),
        delete a.asin,
        delete a.revisionId,
        delete a.format,
        delete a.depth,
        (a = m(a)))
      return '?' + a
    }
    function C() {
      var a = r(c.location.search)
      return a.asin && a.format
    }
    var G = !1,
      t = !1,
      v = !1,
      y = e('#ebooksImageBlock'),
      J = e('#ebooksImgBlkFront'),
      F = e('#ebooksImgBlockInlineVideo'),
      a = e('#ebooksImgBlockInlineVideoSrc'),
      b = new Q(h, e, d)
    if (y.length) {
      var L = y.find('#ebooks-img-wrapper'),
        A = y.find('#ebooksImageBlockContainer'),
        P = y.find('#ebooks-img-canvas'),
        N = P.find('.frontImage'),
        n = e('#leftCol'),
        M = e('#centerCol')
      f()
    } else throw Error('Element with id imageBlock is missing')
    h.on('a:image:load', function (b) {
      F.length && a.length && d.hasCoverImageInlineVideo && (J.hide(), F.show())
    })
    h.loadDynamicImage(J)
    var O = 100,
      R = 50,
      S = 280,
      W = !1,
      V = 0,
      X = 0,
      T = 0
  })
  n.when('A', 'jQuery', 'ImageBlockATF', 'cf').execute(function (h, e, d) {
    function f() {
      var e = c.innerWidth || document.body.offsetWidth
      if (!(0 >= e))
        if (e > d.windowWidthThreshold && l.width() <= d.configWidths[0]) {
          e = d.configWidths[1]
          var f = e / d.holderRatio,
            h = d.frontImageWidth,
            g = d.frontImageHeight
          p(e, f, h, g)
        } else
          e < d.windowWidthThreshold &&
            l.width() > d.configWidths[0] &&
            ((e = d.configWidths[0]),
            (f = e / d.holderRatio),
            d.frontImageAspectRatio > d.holderRatio
              ? ((h = e), (g = h / d.frontImageAspectRatio))
              : ((g = f), (h = g * d.frontImageAspectRatio)),
            p(e, f, h, g))
    }
    function p(c, f, h, g) {
      if (0 < c && 0 < f && 0 < h && 0 < g) {
        I.css('margin-left', c + d.centerColMargin).removeClass('centerColumn')
        n.css('width', c)
        var p = f + d.containerMargin + d.flipLinkMinHeight + d.litbHeight
        l.css('width', c).css('height', p)
        B(h, g)
        k.css('height', f + d.litbHeight - (f + d.litbHeight - q.outerHeight()) / 2)
        e(this).trigger('imageResize')
      }
    }
    function B(c, d) {
      q.css('width', c).css('height', d)
      c = q.width()
      d = q.height()
      z.css('width', c).css('height', d)
      m.resizeCanvas(c)
      'undefined' !== typeof x &&
        0 < x.length &&
        (x.css('width', c).css('height', d),
        u.css('height', d),
        isShowing3D &&
          D &&
          ((d = u.width()),
          (r = (c - d) / 2 - 2),
          u.removeClass('ieTransition').css('left', (c - d) / 2),
          u.css('transform', 'perspective(3000px) rotateY(-65deg) translateZ(' + r + 'px)'),
          h.delay(function () {
            u.addClass('ieTransition')
          }, 10)))
    }
    var l = e('#imageBlock'),
      g = l.find('#img-wrapper'),
      k = l.find('#imageBlockContainer'),
      z = l.find('#img-canvas'),
      x = z.find('.backImage'),
      u = z.find('.sideImage'),
      q = z.find('.frontImage'),
      D = e.browser.msie || !!navigator.userAgent.match(/Trident/),
      n = e('#leftCol'),
      I = e('#centerCol'),
      r = 0,
      m = new Z(h, e, l, d, !0)
    m.initializeMetrics()
    ;(function () {
      if (q.offset()) {
        var c = g.outerHeight() - (g.outerHeight() - q.outerHeight()) / 2,
          d = u.outerWidth()
        g.css('position', 'relative')
        q.css({ position: 'relative', top: '0', left: '0' })
        x.css('position', 'absolute').css('top', '0').css('left', '0')
        u.css('position', 'absolute')
          .css('top', '0')
          .css('left', '-' + d + 'px')
        k.css('height', c)
      }
    })()
    z.addClass('image-2d')
    m.initializeSticker('front')
    d.disableResize || e(c).resize(f)
  })
  n.when('a-modal-handlers').execute('mark-booksimageblock-interactive-time', function () {
    'function' === typeof c.markFeatureInteractive &&
      c.markFeatureInteractive('booksImageBlock', {
        hasComponents: !0,
        components: [{ name: 'thumbnail' }],
      })
  })
  var Z = (function () {
    return function (h, e, d, f, p) {
      function B() {
        var a = document.getElementById('litb-read-frame')
        if (a) {
          if (G) {
            a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
            return
          }
          a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
          50 < y && !v && ((v = !0), g('DpIsReadyAttemptsOverMax:Count'))
          y++
        }
        setTimeout(B, 100)
      }
      function l(a, b) {
        J++
        G
          ? n(a, b)
          : 280 < J
            ? g('litbReadyMaxAttempts')
            : setTimeout(function () {
                l(a, b)
              }, 100)
      }
      function n(a, b) {
        g('litbStickerClickedOnPrintBook')
        E.incrementMetric('litbStickerClickedOnPrintBook')
        var d = document.getElementById('litb-read-frame')
        f.litbData && f.litbData.showNewDesktopLitb && d
          ? ((a = JSON.stringify({
              command: 'initializeLITB',
              time: Date.now(),
              search: c.location.search,
              newSession: a,
            })),
            d.contentWindow.postMessage(a, '*'),
            u(),
            d.focus())
          : 'undefined' != typeof SitbReader &&
            (g('sitbReaderCodePathUsed'),
            'back' == b && SitbReader.currentBook && SitbReader.currentBook.bookmarks
              ? ((d =
                  SitbReader.currentBook.bookmarks.getFirstAndLastPageNumberByName(
                    'Back Cover',
                  ).first),
                (a =
                  SitbReader.currentBook.bookmarks.getFirstAndLastPageNumberByName(
                    'Back Flap',
                  ).first),
                d
                  ? SitbReader.LightboxActions.openReaderToPage(d)
                  : a
                    ? SitbReader.LightboxActions.openReaderToPage(a)
                    : SitbReader.LightboxActions.openReader(f.litbData.litbReftag))
              : SitbReader.LightboxActions.openReader(f.litbData.litbReftag))
      }
      function H() {
        D() &&
          c.history.replaceState(
            {},
            document.title,
            c.location.origin + c.location.pathname + z() + c.location.hash,
          )
      }
      function z() {
        var a = ''
        c.location.search &&
          ((a = m(c.location.search)),
          delete a.asin,
          delete a.revisionId,
          delete a.format,
          delete a.depth,
          (a = r(a)))
        return '?' + a
      }
      function x(a) {
        var b = document.getElementById('litb-read-frame')
        b &&
          ((b.style.cssText = 'display: none'),
          (b = document.body),
          (b.style.position = ''),
          (b.style.top = ''),
          (b.style.right = ''),
          (b.style.left = ''),
          c.scrollTo(0, parseInt(F || '0', 10)),
          (t = !1),
          a && H())
      }
      function u() {
        var a = document.getElementById('litb-read-frame')
        if (a) {
          F = c.scrollY
          var b = document.body
          b.style.position = 'fixed'
          b.style.top = '-' + F + 'px'
          b.style.right = '0'
          b.style.left = '0'
          a.style.cssText =
            'position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; display: block; border: 0 none;'
          t = !0
        }
      }
      function q() {
        var a = document.getElementById('litb-read-frame')
        f.litbData &&
          f.litbData.showNewDesktopLitb &&
          a &&
          (C ||
            (!D() && !t) ||
            (u(),
            a.contentWindow.postMessage(
              JSON.stringify({ command: 'updateLITB', search: c.location.search }),
              a.src,
            )),
          (C = !1))
        t || H()
      }
      function D() {
        var a = m(c.location.search)
        return a.asin && a.format
      }
      function K(a) {
        var b
        if ((b = 'string' === typeof a.data))
          try {
            JSON.parse(a.data), (b = !0)
          } catch (L) {
            b = !1
          }
        b &&
          ((a = JSON.parse(a.data)),
          (b = a.command),
          'closeLITB' === b
            ? a.depth
              ? ((C = !0), c.history.go(-1 * a.depth), x(!1))
              : x(!0)
            : 'updateLITB' === b && a.search
              ? ((b = m(c.location.search)),
                c.history.pushState(
                  {},
                  document.title,
                  c.location.origin + c.location.pathname + I(a.search) + c.location.hash,
                ),
                b.asin !== a.search.asin && c.dispatchEvent(new PopStateEvent('popstate')))
              : 'readyLITB' === b
                ? (G = !0)
                : 'reloadLITB' === b && c.location.reload())
      }
      function I(a) {
        if (c.location.search) {
          var b = m(c.location.search)
          b.asin = a.asin
          b.revisionId = a.revisionId
          b.format = a.format
          b.depth = a.depth
          a = r(b)
        } else a = r(a)
        return '?' + a
      }
      function r(a) {
        var b = ''
        Object.keys(a).forEach(function (c) {
          0 < b.length && (b += '\x26')
          b += c + '\x3d' + a[c]
        })
        return b
      }
      function m(a) {
        var b = {}
        0 < a.length &&
          a
            .substr(1)
            .split('\x26')
            .forEach(function (a) {
              a = a.split('\x3d')
              2 === a.length && (b[a[0]] = a[1])
            })
        return b
      }
      p = {}
      var w = d.find('#litb-canvas'),
        E = new Q(h, e, f),
        C = !1,
        G = !1,
        t = !1,
        v = !1,
        y = 0,
        J = 0,
        F = 0
      p.initializeMetrics = function () {
        k('litbReadyMaxAttempts')
        k('litbReaderIframeSrcNotAvailable')
        k('sitbReaderCodePathUsed')
        k('litbStickerClickedOnPrintBook')
      }
      p.initializeSticker = function (a) {
        if (
          f &&
          f.litbData &&
          ((f.litbData.hasLitb && f.litbData.litbReftag) || f.litbData.showNewDesktopLitb)
        ) {
          w.addClass('litb-on-click')
          w.click(l.bind(this, !0, a))
          var b = document.getElementById('litb-read-frame')
          b && b.dataset && b.dataset.src
            ? (b.src = b.dataset.src)
            : g('litbReaderIframeSrcNotAvailable')
          f.litbData.showNewDesktopLitb && b
            ? (c.addEventListener('popstate', q, !1),
              c.addEventListener('message', K, !1),
              B(),
              (b = m(c.location.search)),
              b.asin && b.format && l(!1, a))
            : w.click(function () {
                n(this, !0, a)
              })
          b = { hasComponents: !0, components: [{ name: 'mainimage' }] }
          'function' === typeof c.markFeatureInteractive &&
            c.markFeatureInteractive('booksImageBlock', b)
        }
      }
      p.resizeCanvas = function (a) {
        w.css('width', a)
      }
      return p
    }
  })()
  n.when('A', 'jQuery', 'EbooksReadSample', 'cf').execute(function (c, e, d) {
    new aa(c, e, d).setupInteractions(d)
  })
  n.when('A', 'jQuery', 'PbooksReadSample', 'cf').execute(function (c, e, d) {
    var f = e('#imageBlock'),
      g = e('#pbooksReadSample')
    new ba(c, e, f, d, g).initializeSticker(M)
  })
  var aa = (function () {
      return function (h, e, d) {
        function f() {
          var b = document.getElementById('litb-read-frame')
          if (b && b.contentWindow) {
            if (w) {
              b.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
              t.isSpinnerVisible() && (g('SpinnerShown:Count'), t.hideSpinnerAndShowText(!1), B(!0))
              return
            }
            b.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
            a > y && !F && ((F = !0), g('DpIsReadyAttemptsOverMax:Count'))
            a++
          } else b && g('litbReaderIframeContentWindowNotAvailable')
          setTimeout(f, v)
        }
        function p(a) {
          b++
          w
            ? B(a)
            : b > J ||
              setTimeout(function () {
                p(a)
              }, v)
        }
        function B(a) {
          a && (g('readSampleButtonClicked'), G.incrementMetric('readSampleButtonClicked'))
          var b = document.getElementById('litb-read-frame')
          b && !b.contentWindow && g('litbReaderIframeContentWindowNotAvailable')
          d.litbData && d.litbData.showNewDesktopLitb && b && b.contentWindow
            ? (t.isSpinnerVisible() && t.hideSpinnerAndShowText(!1),
              (a = JSON.stringify({
                command: 'initializeLITB',
                time: Date.now(),
                search: c.location.search,
                newSession: a,
              })),
              b.contentWindow.postMessage(a, '*'),
              k(),
              b.focus())
            : d &&
              d.litbData &&
              d.litbData.hasLitb &&
              (c.smash
                ? n.when('mash').execute(function (a) {
                    a.navigate({ url: d.litbData.litbReaderUrl, transition: 'slide' })
                  })
                : (c.location.href = d.litbData.litbReaderUrl))
        }
        function l() {
          var a = document.getElementById('litb-read-frame')
          d.litbData && d.litbData.showNewDesktopLitb && a && a.contentWindow
            ? (m ||
                (!x() && !E) ||
                (k(),
                a.contentWindow.postMessage(
                  JSON.stringify({ command: 'updateLITB', search: c.location.search }),
                  a.src,
                )),
              (m = !1))
            : a && g('litbReaderIframeContentWindowNotAvailable')
          E || z()
        }
        function k() {
          var a = document.getElementById('litb-read-frame')
          if (a) {
            L = c.scrollY
            var b = document.body
            b.style.position = 'fixed'
            b.style.top = '-' + L + 'px'
            b.style.right = '0'
            b.style.left = '0'
            a.style.cssText =
              'position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; display: block; border: 0 none;'
            E = !0
          }
        }
        function H(a) {
          var b = document.getElementById('litb-read-frame')
          b &&
            ((b.style.cssText = 'display: none'),
            (b = document.body),
            (b.style.position = ''),
            (b.style.top = ''),
            (b.style.right = ''),
            (b.style.left = ''),
            c.scrollTo(0, parseInt(L || '0', 10)),
            (E = !1),
            a && z())
        }
        function z() {
          x() &&
            c.history.replaceState(
              {},
              document.title,
              c.location.origin + c.location.pathname + I(),
            )
        }
        function x() {
          var a = q(c.location.search)
          return a.asin && a.format
        }
        function u(a) {
          var b
          if ((b = 'string' === typeof a.data))
            try {
              JSON.parse(a.data), (b = !0)
            } catch (N) {
              b = !1
            }
          b &&
            ((a = JSON.parse(a.data)),
            (b = a.command),
            'closeLITB' === b
              ? a.depth
                ? ((m = !0), c.history.go(-1 * a.depth), H(!1))
                : H(!0)
              : 'updateLITB' === b && a.search
                ? ((b = q(c.location.search)),
                  c.history.pushState(
                    {},
                    document.title,
                    c.location.origin + c.location.pathname + K(a.search),
                  ),
                  b.asin !== a.search.asin && c.dispatchEvent(new PopStateEvent('popstate')))
                : 'readyLITB' === b && (w = !0))
        }
        function q(a) {
          var b = {}
          0 < a.length &&
            a
              .substr(1)
              .split('\x26')
              .forEach(function (a) {
                a = a.split('\x3d')
                2 === a.length && (b[a[0]] = a[1])
              })
          return b
        }
        function D(a) {
          var b = ''
          Object.keys(a).forEach(function (c) {
            0 < b.length && (b += '\x26')
            b += c + '\x3d' + a[c]
          })
          return b
        }
        function K(a) {
          if (c.location.search) {
            var b = q(c.location.search)
            b.asin = a.asin
            b.revisionId = a.revisionId
            b.format = a.format
            b.depth = a.depth
            a = D(b)
          } else a = D(a)
          return '?' + a
        }
        function I() {
          var a = ''
          c.location.search &&
            ((a = q(c.location.search)),
            delete a.asin,
            delete a.revisionId,
            delete a.format,
            delete a.depth,
            (a = D(a)))
          return '?' + a
        }
        var r = {},
          m = !1,
          w = !1,
          E = !1,
          C = e('#ebooksReadSample'),
          G = new Q(h, e, d),
          t = new R(h, e)
        r.setupInteractions = function () {
          if (d && d.litbData && d.litbData.hasLitb) {
            var a = document.getElementById('litb-read-frame')
            a && a.dataset && a.dataset.src
              ? (a.src = a.dataset.src)
              : d.litbData.showNewDesktopLitb && g('litbReaderIframeSrcNotAvailable')
            d.litbData.showNewDesktopLitb && a
              ? (C.click(function (a) {
                  w ||
                    t.isSpinnerVisible() ||
                    (t.showSpinnerAndHideText(),
                    g('SpinnerShown:Count'),
                    setTimeout(function () {
                      1 > e('#litb-read-frame').length && t.hideSpinnerAndShowText(!1)
                    }, 3e4))
                  p(!0)
                }),
                c.addEventListener('popstate', l, !1),
                c.addEventListener('message', u, !1),
                f(),
                (a = q(c.location.search)),
                a.asin && a.format && p(!1))
              : C.click(function (a) {
                  B(!0)
                })
          }
        }
        var v = 100,
          y = 50,
          J = 280,
          F = !1,
          a = 0,
          b = 0,
          L = 0
        return r
      }
    })(),
    ba = (function () {
      return function (h, e, d, f, p) {
        function B() {
          var a = document.getElementById('litb-read-frame')
          if (a) {
            if (E) {
              a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
              v.isSpinnerVisible() && (g('SpinnerShown:Count'), v.hideSpinnerAndShowText(!1), n(!0))
              return
            }
            a.contentWindow.postMessage(JSON.stringify({ command: 'readyLITB' }), '*')
            50 < y && !G && ((G = !0), g('DpIsReadyAttemptsOverMax:Count'))
            y++
          }
          setTimeout(B, 100)
        }
        function l(a, b) {
          J++
          E
            ? n(a, b)
            : 280 < J
              ? g('litbReadyMaxAttempts')
              : setTimeout(function () {
                  l(a, b)
                }, 100)
        }
        function n(a) {
          g('printReadSampleButtonClicked')
          t.incrementMetric('printReadSampleButtonClicked')
          var b = document.getElementById('litb-read-frame')
          f.litbData && f.litbData.showNewDesktopLitb && b
            ? (v.isSpinnerVisible() && v.hideSpinnerAndShowText(!1),
              (a = JSON.stringify({
                command: 'initializeLITB',
                time: Date.now(),
                search: c.location.search,
                newSession: a,
              })),
              b.contentWindow.postMessage(a, '*'),
              u(),
              b.focus())
            : (c.location.href = f.litbData.litbReaderUrl)
        }
        function H() {
          D() &&
            c.history.replaceState(
              {},
              document.title,
              c.location.origin + c.location.pathname + z() + c.location.hash,
            )
        }
        function z() {
          var a = ''
          c.location.search &&
            ((a = m(c.location.search)),
            delete a.asin,
            delete a.revisionId,
            delete a.format,
            delete a.depth,
            (a = r(a)))
          return '?' + a
        }
        function x(a) {
          var b = document.getElementById('litb-read-frame')
          b &&
            ((b.style.cssText = 'display: none'),
            (b = document.body),
            (b.style.position = ''),
            (b.style.top = ''),
            (b.style.right = ''),
            (b.style.left = ''),
            c.scrollTo(0, parseInt(F || '0', 10)),
            (C = !1),
            a && H())
        }
        function u() {
          var a = document.getElementById('litb-read-frame')
          if (a) {
            F = c.scrollY
            var b = document.body
            b.style.position = 'fixed'
            b.style.top = '-' + F + 'px'
            b.style.right = '0'
            b.style.left = '0'
            a.style.cssText =
              'position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; display: block; border: 0 none;'
            C = !0
          }
        }
        function q() {
          var a = document.getElementById('litb-read-frame')
          f.litbData &&
            f.litbData.showNewDesktopLitb &&
            a &&
            (w ||
              (!D() && !C) ||
              (u(),
              a.contentWindow.postMessage(
                JSON.stringify({ command: 'updateLITB', search: c.location.search }),
                a.src,
              )),
            (w = !1))
          C || H()
        }
        function D() {
          var a = m(c.location.search)
          return a.asin && a.format
        }
        function K(a) {
          var b
          if ((b = 'string' === typeof a.data))
            try {
              JSON.parse(a.data), (b = !0)
            } catch (L) {
              b = !1
            }
          b &&
            ((a = JSON.parse(a.data)),
            (b = a.command),
            'closeLITB' === b
              ? a.depth
                ? ((w = !0), c.history.go(-1 * a.depth), x(!1))
                : x(!0)
              : 'updateLITB' === b && a.search
                ? ((b = m(c.location.search)),
                  c.history.pushState(
                    {},
                    document.title,
                    c.location.origin + c.location.pathname + I(a.search) + c.location.hash,
                  ),
                  b.asin !== a.search.asin && c.dispatchEvent(new PopStateEvent('popstate')))
                : 'readyLITB' === b
                  ? (E = !0)
                  : 'reloadLITB' === b && c.location.reload())
        }
        function I(a) {
          if (c.location.search) {
            var b = m(c.location.search)
            b.asin = a.asin
            b.revisionId = a.revisionId
            b.format = a.format
            b.depth = a.depth
            a = r(b)
          } else a = r(a)
          return '?' + a
        }
        function r(a) {
          var b = ''
          Object.keys(a).forEach(function (c) {
            0 < b.length && (b += '\x26')
            b += c + '\x3d' + a[c]
          })
          return b
        }
        function m(a) {
          var b = {}
          0 < a.length &&
            a
              .substr(1)
              .split('\x26')
              .forEach(function (a) {
                a = a.split('\x3d')
                2 === a.length && (b[a[0]] = a[1])
              })
          return b
        }
        d = {}
        var w = !1,
          E = !1,
          C = !1,
          G = !1,
          t = new Q(h, e, f),
          v = new R(h, e),
          y = 0,
          J = 0,
          F = 0
        d.initializeMetrics = function () {
          k('litbReadyMaxAttempts')
          k('litbReaderIframeSrcNotAvailable')
          k(sitbReaderCodePathUsedMetric)
          k(litbStickerClickedMetric)
        }
        d.initializeSticker = function (a) {
          if (
            f &&
            f.litbData &&
            ((f.litbData.hasLitb && f.litbData.litbReftag) || f.litbData.showNewDesktopLitb)
          ) {
            p.click(function () {
              E ||
                v.isSpinnerVisible() ||
                !f.litbData.showNewDesktopLitb ||
                (v.showSpinnerAndHideText(),
                g('SpinnerShown:Count'),
                setTimeout(function () {
                  1 > e('#litb-read-frame').length && spinnerUtls.hideSpinnerAndShowText(!1)
                }, 3e4))
              l(this, !0, a)
            })
            var b = document.getElementById('litb-read-frame')
            b && b.dataset && b.dataset.src
              ? (b.src = b.dataset.src)
              : g('litbReaderIframeSrcNotAvailable')
            f.litbData.showNewDesktopLitb && b
              ? (c.addEventListener('popstate', q, !1),
                c.addEventListener('message', K, !1),
                B(),
                (b = m(c.location.search)),
                b.asin && b.format && l(!1, a))
              : p.click(n.bind(this, !0, a))
          }
        }
        return d
      }
    })()
  ;(function () {
    return function (c, e, d) {
      function f() {
        var c = document.createElement('a')
        c.href = d.litbData.litbReaderUrl
        return c.hostname
      }
      return {
        triggerWeblab: function (c) {
          e.ajax('https://' + f() + '/sample/trigger-weblab?weblab\x3d' + c, {
            method: 'get',
            xhrFields: { withCredentials: !0 },
            success: function (c) {
              return c.treatment
            },
            error: function (c) {
              return 'Unable to trigger weblab due to ' + c.responseText
            },
          })
        },
      }
    }
  })()
  var ca = {
      'read.amazon.com': {
        marketplace: 'US',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://b11v5ewz9l.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read.amazon.co.jp': {
        marketplace: 'JP',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://bs7kdk5kxb.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
      'read.amazon.ca': {
        marketplace: 'CA',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://b11v5ewz9l.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'ler.amazon.com.br': {
        marketplace: 'BR',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://b11v5ewz9l.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read.amazon.com.au': {
        marketplace: 'AU',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://bs7kdk5kxb.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
      'www.amazon.sg': {
        marketplace: 'SG',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://bs7kdk5kxb.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
      'leer.amazon.com.mx': {
        marketplace: 'MX',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://b11v5ewz9l.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read.amazon.co.uk': {
        marketplace: 'GB',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'lesen.amazon.de': {
        marketplace: 'DE',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'lire.amazon.fr': {
        marketplace: 'FR',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'leggi.amazon.it': {
        marketplace: 'IT',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'leer.amazon.es': {
        marketplace: 'ES',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'lezen.amazon.nl': {
        marketplace: 'NL',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read.amazon.in': {
        marketplace: 'IN',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://hjszhb9uk3.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-preprod.amazon.com': {
        marketplace: 'US',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://wa9hufu4c9.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-jp.amazon.com': {
        marketplace: 'JP',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://arufknsm9d.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-ca.amazon.com': {
        marketplace: 'CA',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://wa9hufu4c9.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-br.amazon.com': {
        marketplace: 'BR',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://wa9hufu4c9.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-au.amazon.com': {
        marketplace: 'AU',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://arufknsm9d.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-mx.amazon.com': {
        marketplace: 'MX',
        region: 'us-east-1',
        katalCloudWatchEndpointEmf:
          'https://wa9hufu4c9.execute-api.us-east-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-uk.amazon.com': {
        marketplace: 'GB',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-de.amazon.com': {
        marketplace: 'DE',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-fr.amazon.com': {
        marketplace: 'FR',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-it.amazon.com': {
        marketplace: 'IT',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-es.amazon.com': {
        marketplace: 'ES',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'lezen-nl-preprod.dub.xcorp.amazon.com': {
        marketplace: 'NL',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'read-pre-prod-in.amazon.com': {
        marketplace: 'IN',
        region: 'eu-west-1',
        katalCloudWatchEndpointEmf:
          'https://fdoxuxsenl.execute-api.eu-west-1.amazonaws.com/prod/v1/log',
      },
      'sg-gamma.aka.amazon.com': {
        marketplace: 'SG',
        region: 'us-west-2',
        katalCloudWatchEndpointEmf:
          'https://arufknsm9d.execute-api.us-west-2.amazonaws.com/prod/v1/log',
      },
    },
    Q = (function () {
      return function (c, e, d) {
        function f() {
          var c = document.createElement('a'),
            e = document.getElementById('litb-read-frame')
          e ? (c.href = e.src) : d && d.litbData && (c.href = d.litbData.litbReaderUrl)
          return c.hostname
        }
        return {
          incrementMetric: function (c) {
            try {
              var d = ca[f()]
              d &&
                e.ajax({
                  url: d.katalCloudWatchEndpointEmf,
                  type: 'POST',
                  data: JSON.stringify(S(c, d)),
                  success: function (c) {
                    return c
                  },
                  error: function (c) {
                    return 'Unable to log metric due to ' + c
                  },
                })
            } catch (l) {
              return 'Failed to emit metrics to cloudwatch due to ' + l
            }
          },
        }
      }
    })(),
    Y = { COUNT: 'Count', MILLISECONDS: 'Milliseconds', NONE: 'None' },
    R = (function () {
      return function (c, e) {
        c = {}
        var d = 0,
          f = e('#spinny-spinner'),
          h = e('.read-sample-button-text')
        c.hideSpinnerAndShowText = function (c) {
          if (null !== f) {
            var e = f.data('startTime')
            d = 0 === e.length ? d : e
            f.css('display', 'none')
            null !== h && h.first().css('display', 'block')
            c
              ? g('SPINNER_TIMED_OUT')
              : /^-?\d+$/.test(d) &&
                ((c = Math.floor(Date.now() / 1e3) - d),
                'undefined' !== typeof ue &&
                  'undefined' !== typeof ue.count &&
                  ue.count('SpinnerLoading:Time', (ue.count('SpinnerLoading:Time') || 0) + c),
                (d = 0))
          }
        }
        c.showSpinnerAndHideText = function () {
          null !== f &&
            (f.css('display', 'block'),
            null !== h && h.first().css('display', 'none'),
            (d = Math.floor(Date.now() / 1e3)),
            k('SPINNER_TIMED_OUT'))
        }
        c.isSpinnerVisible = function () {
          var c = document.getElementById('spinny-spinner')
          return null != c ? 'none' !== c.style.display : !1
        }
        return c
      }
    })()
})
