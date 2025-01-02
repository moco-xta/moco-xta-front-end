'use strict'
mix_d(
  'MorpheusPopularityRankSidesheetCards__morpheus-popularity-rank-sidesheet-card:morpheus-popularity-rank-sidesheet-card__zVi-94EP',
  'exports tslib @c/browser-operations @c/logger @c/scoped-dom @p/monarch-sidesheet @c/metrics @c/remote-operations @p/A'.split(
    ' ',
  ),
  function (S, p, K, Z, aa, ba, ca, da, ea) {
    function z(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var fa = z(K),
      T = z(Z),
      n = z(aa),
      L = z(ba)
    K = z(da)
    var ha = z(ea),
      v = function (a, b) {
        void 0 === b && (b = 1)
        ca.count(a, b)
      },
      y = function (a, b) {
        void 0 === b && (b = 1)
        var c = n['default'].cardRoot.getElementsByClassName('editionQualityWeblab')[0].value
        v(a + '.' + c, b)
      },
      ia = function (a) {
        return p.__awaiter(void 0, void 0, void 0, function () {
          var b, c
          return p.__generator(this, function (f) {
            a.classList.contains('morpheusAodEntryLink') &&
              !a.classList.contains('morpheusAodDeclarativeAction') &&
              (L['default'].closeSidesheet(a.id),
              (b =
                null === (c = a.parentElement) || void 0 === c
                  ? void 0
                  : c.getElementsByClassName('morpheusAodDeclarativeAction')[0])) &&
              (b.click(), v('morpheusAODClicked'), y('morpheusAODClicked'))
            return [2]
          })
        })
      },
      A
    ;(function (a) {
      a.editionClickHandler = 'editionClickHandler'
      a.aodLinkClickHandler = 'aodLinkClickHandler'
      a.ingressLinkClickHandler = 'ingressLinkClickHandler'
      a.formatPillClickHandler = 'formatPillClickHandler'
    })(A || (A = {}))
    var F = function (a) {
        E(a) && a.classList.add('aok-hidden')
      },
      G = function (a) {
        E(a) || a.classList.remove('aok-hidden')
      },
      E = function (a) {
        return a && !a.classList.contains('aok-hidden')
      },
      q
    ;(function (a) {
      a.INGRESS_LINK_CLICK = 'Morpheus.Desktop.IngressLinkClick'
      a.FORMAT_PILL_CLICK = 'Morpheus.Desktop.FormatPillClick'
      a.PAGINATION_PILL_CLICK = 'Morpheus.Desktop.PaginationPillClick'
      a.INGRESS_LINK_CLICK_ERROR = 'Morpheus.Desktop.IngressLinkClick.Error'
      a.FORMAT_PILL_CLICK_ERROR = 'Morpheus.Desktop.FormatPillClick.Error'
      a.PAGINATION_PILL_CLICK_ERROR = 'Morpheus.Desktop.PaginationPillClick.Error'
    })(q || (q = {}))
    var r
    ;(function (a) {
      a.INGRESS = 'morpheus-sidesheet-ingress'
      a.CLOSE = 'morpheus-sidesheet-close'
      a.ROOT = 'morpheusRoot'
      a.SIDESHEET = 'morpheus-sidesheet'
      a.SIDESHEET_BODY = 'morpheus-sidesheet-main-body'
      a.SIDESHEET_SPINNER = 'morpheus-sidesheet-spinner'
      a.SIDESHEET_ERROR_VIEW = 'morpheus-sidesheet-error-view'
      a.SIDESHEET_ERROR_VIEW_CLONED = 'morpheus-sidesheet-error-view-cloned'
      a.SIDESHEET_BACKGROUND = 'morpheus-darkened-background'
      a.SIDESHEET_CONTENT = 'morpheus-sidesheet-content-container'
    })(r || (r = {}))
    var H = function () {
        var a = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_SPINNER)
        U()
        G(a)
        return a
      },
      O = function (a) {
        var b = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_SPINNER),
          c = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_ERROR_VIEW)
        F(b)
        a
          ? ((b = c.cloneNode(!0)), (b.id = r.SIDESHEET_ERROR_VIEW_CLONED), a.appendChild(b), G(b))
          : G(c)
      },
      U = function () {
        var a = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_ERROR_VIEW)
        E(a) && F(a)
        ;(a = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_ERROR_VIEW_CLONED)) &&
          a.remove()
      },
      V = function () {
        var a = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_SPINNER)
        F(a)
        U()
      },
      I = function () {
        return n['default'].cardRoot.getElementsByClassName('_bW9yc_sidesheet-main-body_qw6om')[0]
      },
      W = function () {
        var a,
          b =
            null === (a = I().querySelector('.sidesheetAsinListContainer:not(.aok-hidden)')) ||
            void 0 === a
              ? void 0
              : a.parentElement
        if (b) return { htmlElement: b, id: b.id }
      },
      P = function () {
        var a,
          b,
          c = I(),
          f = c.querySelector('tag-pill[selected]')
        f ||
          (f =
            null ===
              (b =
                null === (a = c.querySelector('tags-scroller')) || void 0 === a
                  ? void 0
                  : a.shadowRoot) || void 0 === b
              ? void 0
              : b.querySelector('tag-pill[selected]'))
        a = f ? { htmlElement: f, id: f.getAttribute('tagid') } : void 0
        return a
      },
      B = function (a) {
        return I().querySelector('#' + a + '._bW9yc_pill-content_2rpOw')
      },
      ja = function () {
        var a = n['default'].cardRoot.querySelector(
          '#' +
            r.SIDESHEET_BODY +
            ' div[class*="sidesheetAsinListContainer"]:not([style*="display: none;"]) div[class*="pagination-section"] div',
        )
        if (a) {
          var b
          ;(b = (b = n['default'].cardRoot.querySelector('tag-pill[selected]'))
            ? b.tagName.replace(/(\([0-9]*\))/g, '').trim()
            : '') && a.setAttribute('aria-label', b)
        }
      },
      X = function (a, b) {
        var c = a.getElementsByClassName('_bW9yc_pagination_2YDti')[0],
          f = a.getElementsByClassName('a-pagination')[0].getElementsByTagName('li')
        a = function (g) {
          var h = f[g]
          h.classList.contains('a-disabled') ||
            h.addEventListener('click', function (l) {
              return p.__awaiter(void 0, void 0, void 0, function () {
                var e, m, w, d, k
                return p.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      l.preventDefault()
                      e = h && h.classList.contains('a-selected')
                      m = f[f.length - 2]
                      if (!e && m && m.dataset.pageNumber) {
                        a: switch (((t = Number(m.dataset.pageNumber)), !0)) {
                          case 2 >= t:
                            w = 'morpheusSidesheetOtherPageNavigated.1To2Pages'
                            break a
                          case 2 < t && 5 >= t:
                            w = 'morpheusSidesheetOtherPageNavigated.3To5Pages'
                            break a
                          default:
                            w = 'morpheusSidesheetOtherPageNavigated.MoreThan5Pages'
                        }
                        v(w)
                      }
                      0 === g && c.dataset.prevPageNumber
                        ? (d = Number(c.dataset.prevPageNumber))
                        : g === f.length - 1 && c.dataset.nextPageNumber
                          ? (d = Number(c.dataset.nextPageNumber))
                          : h && h.dataset.pageNumber && (d = Number(h.dataset.pageNumber))
                      if (!h || e || !d) return [3, 2]
                      v('morpheusSidesheetOtherPageNavigated')
                      if (!(b || (m && m.dataset.pageNumber))) return [3, 2]
                      H()
                      k = P()
                      if (!k) return [3, 2]
                      Q(B(k.id))
                      v(q.PAGINATION_PILL_CLICK + '.' + d)
                      return [4, R(k, q.PAGINATION_PILL_CLICK, q.PAGINATION_PILL_CLICK_ERROR, d)]
                    case 1:
                      t.sent(), (t.label = 2)
                    case 2:
                      return [2]
                  }
                })
              })
            })
        }
        for (var u = 0; u < f.length; u++) a(u)
        ja()
      },
      M = new Set(),
      N,
      ka = K['default'].setup(),
      Q = function (a) {
        a = a.querySelector('.sidesheetAsinListContainer')
        F(a)
      },
      R = function (a, b, c, f) {
        return p.__awaiter(void 0, void 0, void 0, function () {
          var u, g, h, l, e, m, w
          return p.__generator(this, function (d) {
            switch (d.label) {
              case 0:
                var k = a.id
                k = u = I().querySelector('input[type=hidden]#' + k + '-formatReference').value
                try {
                  var t = k.split('products/')[1].split('/')
                  var J = null === t || void 0 === t ? void 0 : t[0]
                } catch (na) {
                  throw Error('Failed to extract ASIN from URI ' + k)
                }
                var x = new URLSearchParams(k.split('?')[1])
                t = x.get('pageSize')
                k = x.get('pageNumber')
                var C = x.get('selectedFormats')
                x = x.get('sortBy')
                g = {
                  asin: J,
                  pageSize: null !== t ? Number(t) : void 0,
                  pageNumber: null !== k ? Number(k) : void 0,
                  selectedFormats: null !== C ? JSON.parse(decodeURIComponent(C)) : void 0,
                  sortBy: null !== x ? x : void 0,
                }
                v(b + '.' + (null === (m = g.selectedFormats) || void 0 === m ? void 0 : m[0]))
                if (M.has(a.id)) return [2]
                h = B(a.id)
                d.label = 1
              case 1:
                return (
                  d.trys.push([1, 3, 4, 5]),
                  M.add(a.id),
                  (g.pageNumber = f),
                  [4, ka.getPageHTML(p.__assign({}, g))]
                )
              case 2:
                return (
                  (l = d.sent()),
                  (e = l.querySelector('#' + a.id + '.a-row')),
                  (h.innerHTML = e.innerHTML),
                  X(h),
                  N === a.id || Q(h),
                  V(),
                  [3, 5]
                )
              case 3:
                return (
                  d.sent(),
                  O(h),
                  v(c),
                  y(c),
                  v(c + '.' + (null === (w = g.selectedFormats) || void 0 === w ? void 0 : w[0])),
                  [3, 5]
                )
              case 4:
                return M.delete(a.id), [7]
              case 5:
                return [2]
            }
          })
        })
      },
      la = function (a) {
        return p.__awaiter(void 0, void 0, void 0, function () {
          var b, c, f, u
          return p.__generator(this, function (g) {
            switch (g.label) {
              case 0:
                v(q.FORMAT_PILL_CLICK)
                y(q.FORMAT_PILL_CLICK)
                b = P()
                c = W()
                if (!(g = !b)) {
                  g = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_ERROR_VIEW)
                  var h = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_ERROR_VIEW_CLONED)
                  if ((g = !(E(g) || E(h)))) g = N === b.id
                }
                if (g) {
                  var l = null === c || void 0 === c ? void 0 : c.id,
                    e,
                    m,
                    w,
                    d,
                    k =
                      null ===
                        (m =
                          null === (e = a.querySelector('tags-scroller')) || void 0 === e
                            ? void 0
                            : e.shadowRoot) || void 0 === m
                        ? void 0
                        : m.querySelector('tag-pill[tagid="' + l + '"]')
                  null ===
                    (d =
                      null === (w = null === k || void 0 === k ? void 0 : k.shadowRoot) ||
                      void 0 === w
                        ? void 0
                        : w.querySelector('button')) || void 0 === d
                    ? void 0
                    : d.classList.add('selected')
                  k.classList.add('customSelectedFormat')
                  return [2]
                }
                var t, J, x, C
                if (
                  (e =
                    null ===
                      (J =
                        null === (t = a.querySelector('tags-scroller')) || void 0 === t
                          ? void 0
                          : t.shadowRoot) || void 0 === J
                      ? void 0
                      : J.querySelector('tag-pill.customSelectedFormat'))
                )
                  null ===
                    (C =
                      null === (x = null === e || void 0 === e ? void 0 : e.shadowRoot) ||
                      void 0 === x
                        ? void 0
                        : x.querySelector('button')) || void 0 === C
                    ? void 0
                    : C.classList.remove('selected'),
                    e.classList.remove('customSelectedFormat')
                N = b.id
                if ((m = b.htmlElement))
                  (e =
                    null ===
                      (k =
                        null === (l = a.querySelector('tags-scroller')) || void 0 === l
                          ? void 0
                          : l.shadowRoot) || void 0 === k
                      ? void 0
                      : k.querySelector('.scrollingContent')),
                    m.scrollIntoView({ block: 'nearest' }),
                    (l = m.getBoundingClientRect()),
                    (k = e.getBoundingClientRect()),
                    k.left + 30 > l.left
                      ? (e.scrollLeft -= 30)
                      : k.right - 30 < l.right && (e.scrollLeft += 30)
                c && ((f = B(c.id)), Q(f))
                if (M.has(b.id)) return H(), [2]
                if ((u = B(b.id).querySelector('.sidesheetAsinListContainer')))
                  return u.scrollIntoView(), G(u), V(), [2]
                H()
                return [4, R(b, q.FORMAT_PILL_CLICK, q.FORMAT_PILL_CLICK_ERROR)]
              case 1:
                return g.sent(), [2]
            }
          })
        })
      },
      ma = K['default'].setup(),
      Y = function () {
        return p.__awaiter(void 0, void 0, void 0, function () {
          var a, b, c, f, u, g, h
          return p.__generator(this, function (l) {
            switch (l.label) {
              case 0:
                v(q.INGRESS_LINK_CLICK)
                y(q.INGRESS_LINK_CLICK)
                a = n['default'].cardRoot.getElementsByClassName('_bW9yc_sidesheet_18DM8')[0]
                b = I()
                c = n['default'].cardRoot.getElementsByClassName('landingAsinValue')[0]
                if (!a || !c || !c.value)
                  return (
                    T['default'].log(
                      'Not able to open see all formats sidesheet, missing necessary component.',
                      'FATAL',
                    ),
                    [2]
                  )
                L['default'].show()
                f = W()
                if (!f || !f.id) return [3, 4]
                u = B(f.id).querySelector('.sidesheetAsinListContainer')
                if (!u) return [3, 1]
                b.scrollIntoView()
                G(u)
                return [3, 3]
              case 1:
                return H(), [4, R(f, q.INGRESS_LINK_CLICK, q.INGRESS_LINK_CLICK_ERROR)]
              case 2:
                l.sent(), (l.label = 3)
              case 3:
                return [2]
              case 4:
                ;(g = H()), (l.label = 5)
              case 5:
                return l.trys.push([5, 7, , 8]), [4, ma.getPageHTML({ asin: c.value })]
              case 6:
                return (
                  (h = l.sent()),
                  F(g),
                  (b.innerHTML = h.outerHTML),
                  setTimeout(function () {
                    var e = P()
                    e
                      ? ((N = e.id), v(q.INGRESS_LINK_CLICK + '.' + e.id), X(B(e.id)))
                      : (O(void 0), v(q.INGRESS_LINK_CLICK_ERROR), y(q.INGRESS_LINK_CLICK_ERROR))
                  }, 0),
                  [3, 8]
                )
              case 7:
                return (
                  l.sent(),
                  O(b),
                  v(q.INGRESS_LINK_CLICK_ERROR),
                  y(q.INGRESS_LINK_CLICK_ERROR),
                  [3, 8]
                )
              case 8:
                return [2]
            }
          })
        })
      },
      D = !1
    S._operationNames = ['getPageHTML']
    S.card = function () {
      return p.__awaiter(void 0, void 0, void 0, function () {
        var a, b, c, f, u, g, h, l, e, m
        return p.__generator(this, function (w) {
          a = n['default'].cardRoot.querySelector('#' + r.ROOT)
          if (!a) return [2]
          b = n['default'].cardRoot.querySelector('#' + r.SIDESHEET)
          c = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_BODY)
          f = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_BACKGROUND)
          u = n['default'].cardRoot.querySelector('#' + r.SIDESHEET_SPINNER)
          g = n['default'].cardRoot.querySelector('#' + r.CLOSE)
          h = [b, c, f, u, g]
          if (
            h.every(function (d) {
              return d
            }) &&
            h
              .map(function (d) {
                return d.id
              })
              .every(function (d) {
                return d
              })
          )
            L['default'].initialize.apply(
              L['default'],
              p.__spread(
                h.map(function (d) {
                  return d.id
                }),
              ),
            ),
              (g.tabIndex = 0)
          else
            return (
              T['default'].log(
                'Not able to initialize see all formats sidesheet, missing necessary component or component id.',
                'FATAL',
              ),
              [2]
            )
          l = n['default'].cardRoot.getElementsByClassName('ingressMigrationWeblabTreatment')[0]
          e = l.value
          m = fa['default'].setup().define
          m(A.editionClickHandler, 'click', function () {
            v('morpheusEditionItemClicked')
            y('morpheusEditionItemClicked')
          })
          m(A.aodLinkClickHandler, 'click', function (d) {
            ia(d.target)
          })
          if ('T1' === e)
            ha['default'].on('akira:morpheusIngress:clicked', function () {
              return p.__awaiter(void 0, void 0, void 0, function () {
                return p.__generator(this, function (d) {
                  switch (d.label) {
                    case 0:
                      if (D) return [3, 2]
                      D = !0
                      return [4, Y()]
                    case 1:
                      d.sent(), (D = !1), (d.label = 2)
                    case 2:
                      return [2]
                  }
                })
              })
            })
          else
            m(A.ingressLinkClickHandler, 'click', function () {
              return p.__awaiter(void 0, void 0, void 0, function () {
                return p.__generator(this, function (d) {
                  switch (d.label) {
                    case 0:
                      if (D) return [3, 2]
                      D = !0
                      return [4, Y()]
                    case 1:
                      d.sent(), (D = !1), (d.label = 2)
                    case 2:
                      return [2]
                  }
                })
              })
            })
          m(A.formatPillClickHandler, 'click', function () {
            la(b)
          })
          return [2]
        })
      })
    }
  },
)
