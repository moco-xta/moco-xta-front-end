'use strict'
mix_d(
  'AuthorCards__about-the-author-card:about-the-author-card__z2tpK12a',
  'exports tslib @c/dom @c/aui-carousel @c/remote-operations @c/metrics @c/tracking @p/A @p/a-modal @p/a-popover @p/jQuery @c/navigation @c/browser-operations @c/aui-truncate'.split(
    ' ',
  ),
  function (v, m, w, H, I, J, C, K, L, M, N, O, P, Q) {
    function n(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var t = n(w),
      R = n(H),
      D = n(I),
      S = n(J),
      x = n(K),
      T = n(L),
      U = n(M),
      V = n(N)
    w = n(O)
    var W = n(Q),
      r,
      e = (function () {
        function a() {}
        a.MORE_ABOUT_THE_AUTHOR_SECTION_REFERENCE = 'books-entity-teaser'
        a.SIMILAR_AUTHORS_NUMBER = 3
        a.MAX_NUMBER_OF_AUTHORS = 2
        a.MAX_IMAGE_HEIGHT = 600
        a.IMAGE_SCALE_STYLE = '_SY315_'
        a.ADDITIONAL_AUTHORS_NAMES = 2
        a.MAX_PRODUCT_API_BATCH_SIZE = 30
        a.AUTHOR_PAGE_URL = 'authorPageUrl'
        a.CONTRIBUTOR_PAGE_URL = 'contributorLinkUrl'
        a.SEARCH_PAGE_URL = 'searchPageUrlFromConfig'
        a.AUTHOR_PROFILE_IMAGE = 'authorProfileImage'
        a.CUSTOMER_REVIEWS_DP_ANCHOR = '#customerReviews'
        a.DISPLAY_TEXT = 'displayText'
        a.FOLLOW_BUTTON_INITIAL_ARIA_LABEL = 'ariaLabel'
        a.FOLLOW_BUTTON_ARIA_LABEL = 'aria-label'
        a.FOLLOW_ARIA_LABEL = 'followAriaLabel'
        a.FOLLOWING_ARIA_LABEL = 'followingAriaLabel'
        a.FOLLOW_TEXT = 'followText'
        a.FOLLOWING_TEXT = 'followingText'
        a.TOOLTIP_TEXT = 'tooltipText'
        a.SIMILAR_AUTHORS_POPOVER_ID = 'similarAuthorsPopoverId'
        a.SIMILAR_AUTHORS_POPOVER_CONTENT_NAME = 'similarAuthorsPopoverContentName'
        a.NEXUS_PRODUCER_ID = 'author-follows'
        a.NEXUS_PROMPT_SCHEMA_ID = 'authorfollow.prompts.2'
        a.AUTHOR_PROMPTS_CARD_ID = 'author-prompts-card'
        a.LOB = '1'
        a.TEXT_TICK = '\u2713'
        a.TEXT_PLUS = '+'
        a.PLACEMENT_FTA = 'FTA'
        a.PLACEMENT_POPOVER = 'POPOVER'
        a.PLACEMENT_MATA = 'MATA'
        a.PLACEMENT_MATA_MOBILE = 'MATA_MOBILE'
        a.PLACEMENT_TYP = 'TYP'
        a.PLACEMENT_AUTHOR_PAGE = 'ap'
        a.CSS_CLASS_FOLLOW = 'follow'
        a.CSS_CLASS_FOLLOW_T1 = 'followT1'
        a.CSS_CLASS_SIMILAR_AUTHORS = 'similarAuthorsFollow'
        a.CSS_CLASS_MATA_MOBILE = 'followButtonMobile'
        a.CSS_CLASS_TYP = 'fullWidth'
        a.CSS_CLASS_MATA = 'followMata'
        a.CSS_CLASS_MATA_T1 = 'followMataT1'
        a.DATA = 'data'
        a.DATA_AUTHOR_ASIN = 'data-authorasin'
        a.DATA_FOLLOWING = 'data-followingtext'
        a.DATA_FOLLOW = 'data-followtext'
        a.DATA_REFTAG = 'data-reftag'
        a.DATA_FOLLOW_REF = 'data-followref'
        a.DATA_UNFOLLOW_REF = 'data-unfollowref'
        a.DATA_SIMILAR_POPOVER = 'data-similarauthorspopoverid'
        a.DATA_SIMILAR_POPOVER_CONTENT = 'data-similarauthorspopovercontentname'
        a.DATA_SIGNEDIN = 'data-issignedin'
        a.DATA_IS_FOLLOWING = 'data-isfollowing'
        a.DATA_SYNCED = 'data-synced'
        a.DATA_FOLLOW_BUTTON_TOTAL_WIDTH = 'data-followbuttontotalwidth'
        a.DATA_FOLLOW_ARIA_LABEL = 'data-followAriaLabel'
        a.DATA_FOLLOWING_ARIA_LABEL = 'data-followingAriaLabel'
        a.DEFAULT_ORG_UNIT = '01'
        a.C_TREATMENT = 'C'
        a.T1_TREATMENT = 'T1'
        a.T2_TREATMENT = 'T2'
        a.T3_TREATMENT = 'T3'
        a.MARKETPLACE_ORG_UNIT = {
          A13V1IB3VIYZZH: '08',
          A1AM78C64UM0Y8: '33',
          A1F83G8C2ARO7P: '02',
          A1PA6795UKMFR9: '03',
          A1RKKUPIHCS9HS: '30',
          A1VC38T7YXB528: '09',
          A21TJRUUN4KGV: '31',
          A2EUQ1WTGCTBG2: '15',
          A2Q3Y263D00KWC: '32',
          A39IBJ37TRP1C6: '35',
          APJ6JRA9NG5V4: '29',
          ATVPDKIKX0DER: a.DEFAULT_ORG_UNIT,
        }
        a.PLACEMENTS_TO_CLASSES_MAP =
          ((r = {}),
          (r[a.PLACEMENT_FTA] = a.CSS_CLASS_FOLLOW),
          (r[a.PLACEMENT_POPOVER] = a.CSS_CLASS_SIMILAR_AUTHORS),
          (r[a.PLACEMENT_MATA] = a.CSS_CLASS_MATA),
          (r[a.PLACEMENT_MATA_MOBILE] = a.CSS_CLASS_MATA_MOBILE),
          (r[a.PLACEMENT_TYP] = a.CSS_CLASS_TYP),
          r)
        a.DEFAULT_FOLLOW_BUTTON_WIDTH = 95
        a.LANGUAGE_TO_FOLLOW_BUTTON_WIDTH_MAP = new Map([
          ['es-ES', 97],
          ['es-US', 97],
          ['es-MX', 97],
          ['fr-FR', 72],
          ['fr-CA', 89],
          ['de-DE', 85],
          ['pt-PT', 85],
          ['pt-BR', 93],
          ['it-IT', 97],
          ['he-IL', 61],
          ['tr-TR', 116],
          ['pl-PL', 118],
          ['cs-CZ', 86],
          ['ml-IN', 107],
          ['te-IN', 139],
          ['hi-IN', 108],
          ['ta-IN', 106],
          ['kn-IN', 137],
          ['bn-IN', 78],
          ['mr-IN', 83],
          ['ja-JP', 103],
          ['zh-CN', 90],
          ['ar-AE', 66],
          ['zh-TW', 60],
          ['ko-KR', 57],
          ['nl-NL', 79],
          ['sv-SE', 71],
        ])
        return a
      })(),
      E
    ;(function (a) {
      a.SERIES_DETAIL_PAGE = 'series-detail-page'
      a.DETAIL_PAGE = 'detail-page'
      a.THANK_YOU_PAGE = 'thank-you-page'
    })(E || (E = {}))
    var p = w['default'].getLocation(),
      X = p.protocol + '//' + p.hostname + (p.port ? ':' + p.port : '') + '/ap/signin',
      Y =
        /^(?:(?:(?:(\w\w)-)?pre-prod)|(?:.+))\.amazon.(?:(\w\w)|(com)|(?:co\.(?:(\w\w)))|(?:com\.(?:(\w\w))))?$/,
      F = {
        au: 'A39IBJ37TRP1C6',
        br: 'A2Q3Y263D00KWC',
        ca: 'A2EUQ1WTGCTBG2',
        com: 'ATVPDKIKX0DER',
        de: 'A1PA6795UKMFR9',
        es: 'A1RKKUPIHCS9HS',
        fr: 'A13V1IB3VIYZZH',
        in: 'A21TJRUUN4KGV',
        it: 'APJ6JRA9NG5V4',
        jp: 'A1VC38T7YXB528',
        mx: 'A1AM78C64UM0Y8',
        uk: 'A1F83G8C2ARO7P',
      },
      Z = {
        A13V1IB3VIYZZH: 'author_follows_dp_fr',
        A1AM78C64UM0Y8: 'author_follows_dp_mx',
        A1F83G8C2ARO7P: 'author_follows_dp_uk',
        A1PA6795UKMFR9: 'author_follows_dp_de',
        A1RKKUPIHCS9HS: 'author_follows_dp_es',
        A1VC38T7YXB528: 'author_follows_dp_jp',
        A21TJRUUN4KGV: 'author_follows_dp_in',
        A2EUQ1WTGCTBG2: 'author_follows_dp_ca',
        A2Q3Y263D00KWC: 'author_follows_dp_br',
        A39IBJ37TRP1C6: 'author_follows_dp_au',
        APJ6JRA9NG5V4: 'author_follows_dp_it',
        ATVPDKIKX0DER: 'author_follows_dp_us',
      },
      aa = function (a) {
        var b
        a: if ((b = p.hostname.match(Y))) {
          for (var c = 1; c < b.length; c++)
            if (void 0 !== b[c]) {
              b = void 0 !== F[b[c]] ? F[b[c]] : 'ATVPDKIKX0DER'
              break a
            }
          b = void 0
        } else b = 'ATVPDKIKX0DER'
        return (
          X.replace(/^https?:\/\//, 'https://') +
          '?openid.assoc_handle=' +
          Z[b] +
          '&openid.claimed_id=' +
          encodeURIComponent('http://specs.openid.net/auth/2.0/identifier_select') +
          '&openid.identity=' +
          encodeURIComponent('http://specs.openid.net/auth/2.0/identifier_select') +
          '&openid.mode=checkid_setup&openid.ns=' +
          encodeURIComponent('http://specs.openid.net/auth/2.0') +
          '&openid.ns.pape=' +
          encodeURIComponent('http://specs.openid.net/extensions/pape/1.0') +
          '&openid.pape.max_auth_age=0&openid.return_to=' +
          encodeURIComponent(
            'https://' +
              p.hostname +
              p.pathname +
              ((p.search ? p.search + '&' : '?') + ('author-follow=' + a)),
          )
        )
      },
      ba = (function () {
        function a(b, c) {
          this.buttonPlacement = b
          this.operationProxy = c
          this.reftag = ''
        }
        a.prototype.enableButtonColumns = function (b) {
          for (var c = 0; c < b.length; c++) this.setFollowStatus(b.item(c), c)
        }
        a.prototype.setAutoFollowEnabled = function (b) {
          void 0 !== sessionStorage &&
            ((b = b.getAttribute(e.DATA_AUTHOR_ASIN)), (sessionStorage.followKey = b))
        }
        a.prototype.isAutoFollowEnabled = function (b) {
          b = b.getAttribute(e.DATA_AUTHOR_ASIN)
          var c = p.search.match('author-follow=([^#&]+)')
          if ((c && 2 === c.length ? c[1] : void 0) !== b || 'undefined' === typeof sessionStorage)
            return !1
          c = sessionStorage.followKey
          sessionStorage.removeItem('followKey')
          return c === b
        }
        a.prototype.updateFollowButtonText = function (b, c) {
          if (c) {
            c = b.getAttribute(e.DATA_FOLLOWING)
            c = null !== c ? c : e.TEXT_TICK
            b.innerText = c
            var d = b.getAttribute(e.DATA_FOLLOWING_ARIA_LABEL)
            b.setAttribute(e.FOLLOW_BUTTON_ARIA_LABEL, d ? d : c)
          } else
            (c = b.getAttribute(e.DATA_FOLLOW)),
              (c = null !== c ? c : e.TEXT_PLUS),
              (b.innerText = c),
              (d = b.getAttribute(e.DATA_FOLLOW_ARIA_LABEL)),
              b.setAttribute(e.FOLLOW_BUTTON_ARIA_LABEL, d ? d : c)
        }
        a.prototype.setFollowStatus = function (b, c) {
          var d = this
          if (null === b.getAttribute(e.DATA_SYNCED)) {
            b.setAttribute(e.DATA_SYNCED, 'true')
            var f = b.getAttribute(e.DATA_AUTHOR_ASIN),
              g = b.getAttribute(e.DATA_REFTAG)
            this.reftag = g ? g : this.reftag
            this.getOperationProxy()
              .getFollowStatus({
                authorAsin: f,
                index: c,
                placement: this.buttonPlacement,
                reftag: this.reftag,
              })
              .then(function (h) {
                b.className = b.className
                  .split(' ')
                  .filter(function (k) {
                    return !k.includes('spinner')
                  })
                  .join(' ')
                b.innerHTML = h.outerHTML
                h = b.getElementsByClassName('author-follow-button')[0]
                d.bindOperationsToButton(h, f)
              })
          }
        }
        a.prototype.bindOperationsForAllButtons = function (b) {
          var c = this
          b.forEach(function (d) {
            c.bindOperationsToButton(d, d.getAttribute(e.DATA_AUTHOR_ASIN))
          })
        }
        a.prototype.executeUnfollow = function (b) {
          var c = this,
            d,
            f = null !== (d = b.getAttribute(e.DATA_UNFOLLOW_REF)) && void 0 !== d ? d : '',
            g = b.getAttribute(e.DATA_AUTHOR_ASIN)
          C.addTracking(this.getOperationProxy().executeUnfollow, { ref_: f })({ authorAsin: g })
            .then(function (h) {
              c.publishDataToNexus('RemoveFavorite', g, f, h)
              c.updateFollowButtonText(b, !1)
              b.setAttribute(e.DATA_IS_FOLLOWING, 'false')
            })
            .catch(function () {
              c.showErrorModal()
            })
        }
        a.prototype.executeFollow = function (b) {
          var c = this,
            d,
            f = null !== (d = b.getAttribute(e.DATA_FOLLOW_REF)) && void 0 !== d ? d : '',
            g = b.getAttribute(e.DATA_AUTHOR_ASIN)
          C.addTracking(this.getOperationProxy().executeFollow, { ref_: f })({ authorAsin: g })
            .then(function (h) {
              c.publishDataToNexus('AddFavorite', g, f, h)
              c.updateFollowButtonText(b, !0)
              b.setAttribute(e.DATA_IS_FOLLOWING, 'true')
              c.showSimilarAuthorsPopover(b)
            })
            .catch(function () {
              c.showErrorModal()
            })
        }
        a.prototype.getOperationProxy = function () {
          return this.operationProxy
        }
        a.prototype.showSimilarAuthorsPopover = function (b) {
          var c = this,
            d
          if (
            null !== b.getAttribute(e.DATA_SIMILAR_POPOVER) &&
            null !== b.getAttribute(e.DATA_SIMILAR_POPOVER_CONTENT)
          ) {
            var f = Number(
              null === (d = b.getAttribute(e.DATA_SIMILAR_POPOVER)) || void 0 === d
                ? void 0
                : d.split('_')[1],
            )
            this.getOperationProxy()
              .getRecommendedAuthors({
                authorAsin: b.getAttribute(e.DATA_AUTHOR_ASIN),
                index: f,
                reftag: this.reftag,
              })
              .then(function (g) {
                if (0 < g.innerHTML.length) {
                  var h = b.closest('.a-button')
                  null === h || void 0 === h
                    ? void 0
                    : h.insertAdjacentHTML('afterend', g.innerHTML)
                  g = t['default'].cardRoot.ownerDocument.querySelectorAll(
                    '[class*=authorFollowColumn]',
                  )
                  c.buttonPlacement = e.PLACEMENT_POPOVER
                  c.enableButtonColumns(g)
                  V['default'].when('a-popover').then(function () {
                    var k,
                      l =
                        null !== (k = b.getAttribute(e.DATA_SIMILAR_POPOVER)) && void 0 !== k
                          ? k
                          : ''
                    U['default'].get(x['default'].$('#' + l)).show()
                  })
                }
              })
          }
        }
        a.prototype.showErrorModal = function () {
          var b = x['default'].$('#followErrorPopoverTrigger'),
            c = T['default'].create(b, {
              closeButton: !1,
              hideHeader: !0,
              name: 'followErrorPopover',
              popoverLabel: 'followErrorPopover',
            })
          x['default'].declarative('closeErrorDialog', 'click', function () {
            c.hide()
          })
          c.show()
        }
        a.prototype.publishDataToNexus = function (b, c, d, f) {
          b = m.__assign(
            {
              eventType: b,
              entityType: 'author',
              entityId: c,
              signedIn: !0,
              lobExpression: e.LOB,
              lobBitmapExpression: e.LOB,
              reftag: d,
            },
            f,
          )
          S['default'].event(b, e.NEXUS_PRODUCER_ID, 'PIM.FollowEvent.9')
        }
        a.prototype.checkIsFollowing = function (b) {
          return 'true' === b.getAttribute(e.DATA_IS_FOLLOWING)
        }
        a.prototype.bindOperationsToButton = function (b, c) {
          var d = this
          b.getAttribute('href')
            ? (b.setAttribute('href', aa(c)),
              (b.onclick = function () {
                d.setAutoFollowEnabled(b)
              }))
            : (!this.checkIsFollowing(b) && this.isAutoFollowEnabled(b) && this.executeFollow(b),
              (b.onclick = function () {
                d.checkIsFollowing(b) ? d.executeUnfollow(b) : d.executeFollow(b)
              }))
        }
        return a
      })(),
      ca = function (a) {
        return m.__awaiter(void 0, void 0, void 0, function () {
          var b
          return m.__generator(this, function (c) {
            b = D['default'].setup()
            y(a, b)
            return [2]
          })
        })
      },
      ea = function (a) {
        return m.__awaiter(void 0, void 0, void 0, function () {
          var b, c
          return m.__generator(this, function (d) {
            switch (d.label) {
              case 0:
                return (
                  (b = D['default'].setup()),
                  y(a, b),
                  [4, da('authorsCarousel', b.getCarouselAuthorItemsFromAuthorObjects)]
                )
              case 1:
                return (
                  (c = d.sent()),
                  c.on('change:fetchedItems', function () {
                    y(a, b)
                  }),
                  [2]
                )
            }
          })
        })
      },
      y = function (a, b) {
        var c = t['default'].cardRoot.querySelectorAll('[class*=followButtonColumn]')
        new ba(a, b).enableButtonColumns(c)
      },
      da = function (a, b) {
        return m.__awaiter(void 0, void 0, void 0, function () {
          var c, d, f
          return m.__generator(this, function (g) {
            switch (g.label) {
              case 0:
                return (
                  (c = t['default'].cardRoot.getElementsByClassName(a)[0]),
                  (d = R['default'].getCarousel(c)),
                  [4, d.initialized]
                )
              case 1:
                return (
                  g.sent(),
                  b &&
                    ((f = function (h) {
                      var k,
                        l,
                        q,
                        u,
                        fa = h.indexes,
                        ha = h.ids
                      h = JSON.parse(
                        null !== (k = c.getAttribute('data-a-carousel-options')) && void 0 !== k
                          ? k
                          : '',
                      )
                      k = {
                        indexes: fa,
                        ids: ha,
                        widgetName: null === (l = h.ajax) || void 0 === l ? void 0 : l.widgetName,
                        dibParameter:
                          null === (q = h.ajax) || void 0 === q ? void 0 : q.dibParameter,
                        dibTag: null === (u = h.ajax) || void 0 === u ? void 0 : u.dibTag,
                      }
                      return b(k)
                    }),
                    d.attachRemoteOperation(f)),
                  [2, d]
                )
            }
          })
        })
      },
      z
    ;(z || (z = {})).resizeOperation = 'resizeOperation'
    var ia = z,
      A = null,
      B = function (a, b, c) {
        var d
        void 0 === c && (c = 1)
        try {
          for (var f = m.__values(Array.from(b)), g = f.next(); !g.done; g = f.next()) {
            var h = g.value,
              k = h.getElementsByClassName('book-item')
            G(k)
            var l = 126 * Math.min(~~((a - 84 - 170 - 40 + 10) / 126), k.length) - 10 + 10
            l !== h.clientWidth && ((h.style.width = l + 'px'), 5 > c && B(a, b, c + 1))
          }
        } catch (u) {
          var q = { error: u }
        } finally {
          try {
            g && !g.done && (d = f.return) && d.call(f)
          } finally {
            if (q) throw q.error
          }
        }
      },
      G = function (a) {
        var b, c
        a = Array.from(a)
        try {
          for (var d = m.__values(a), f = d.next(); !f.done; f = d.next()) {
            var g = f.value,
              h = g.getBoundingClientRect(),
              k =
                null === (c = g.parentElement) || void 0 === c ? void 0 : c.getBoundingClientRect()
            k && h.top > k.top + 10
              ? (g.setAttribute('aria-hidden', 'true'), g.setAttribute('tabindex', '-1'))
              : (g.removeAttribute('aria-hidden'), g.removeAttribute('tabindex'))
          }
        } catch (q) {
          var l = { error: q }
        } finally {
          try {
            f && !f.done && (b = d.return) && b.call(d)
          } finally {
            if (l) throw l.error
          }
        }
      }
    v._operationNames = [
      'getCarouselAuthorItemsFromAuthorObjects',
      'getFollowStatus',
      'executeFollow',
      'executeUnfollow',
      'getRecommendedAuthors',
    ]
    v.card = function () {
      return m.__awaiter(void 0, void 0, void 0, function () {
        var a, b, c, d, f
        return m.__generator(this, function (g) {
          ;(a = 1 === t['default'].cardRoot.getElementsByClassName('singleAuthorSection').length)
            ? ca(e.PLACEMENT_MATA)
            : ea(e.PLACEMENT_MATA)
          b = t['default'].cardRoot.getElementsByClassName('horizontal-div-10')
          c = t['default'].cardRoot.getElementsByClassName('horizontal-div')
          d = P.setup().define
          f = function () {
            var h,
              k = Date.now()
            if (null === A || 100 <= k - A) {
              var l = null === (h = c[0]) || void 0 === h ? void 0 : h.clientWidth
              B(l, b)
              W['default'].updateAll()
              A = k
            }
          }
          d(ia.resizeOperation, 'resize', f)
          f()
          return [2]
        })
      })
    }
    v.updateLayoutForBooks = B
    v.updateNavigationForBooks = G
  },
)
