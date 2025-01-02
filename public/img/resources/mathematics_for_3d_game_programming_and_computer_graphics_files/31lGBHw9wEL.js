'use strict'
mix_d(
  'AuthorCards__follow-the-author-card:follow-the-author-card__AR3UgKqe',
  'exports tslib @c/scoped-dom @c/remote-operations @c/dom @c/metrics @c/tracking @p/A @p/a-modal @p/a-popover @p/jQuery @c/navigation'.split(
    ' ',
  ),
  function (t, n, q, x, y, z, u, A, B, C, D, E) {
    function l(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var F = l(q),
      G = l(x),
      H = l(y),
      I = l(z),
      r = l(A),
      J = l(B),
      K = l(C),
      L = l(D)
    q = l(E)
    var m,
      d = (function () {
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
          ((m = {}),
          (m[a.PLACEMENT_FTA] = a.CSS_CLASS_FOLLOW),
          (m[a.PLACEMENT_POPOVER] = a.CSS_CLASS_SIMILAR_AUTHORS),
          (m[a.PLACEMENT_MATA] = a.CSS_CLASS_MATA),
          (m[a.PLACEMENT_MATA_MOBILE] = a.CSS_CLASS_MATA_MOBILE),
          (m[a.PLACEMENT_TYP] = a.CSS_CLASS_TYP),
          m)
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
      v
    ;(function (a) {
      a.SERIES_DETAIL_PAGE = 'series-detail-page'
      a.DETAIL_PAGE = 'detail-page'
      a.THANK_YOU_PAGE = 'thank-you-page'
    })(v || (v = {}))
    var k = q['default'].getLocation(),
      M = k.protocol + '//' + k.hostname + (k.port ? ':' + k.port : '') + '/ap/signin',
      N =
        /^(?:(?:(?:(\w\w)-)?pre-prod)|(?:.+))\.amazon.(?:(\w\w)|(com)|(?:co\.(?:(\w\w)))|(?:com\.(?:(\w\w))))?$/,
      w = {
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
      O = {
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
      P = function (a) {
        var b
        a: if ((b = k.hostname.match(N))) {
          for (var c = 1; c < b.length; c++)
            if (void 0 !== b[c]) {
              b = void 0 !== w[b[c]] ? w[b[c]] : 'ATVPDKIKX0DER'
              break a
            }
          b = void 0
        } else b = 'ATVPDKIKX0DER'
        return (
          M.replace(/^https?:\/\//, 'https://') +
          '?openid.assoc_handle=' +
          O[b] +
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
              k.hostname +
              k.pathname +
              ((k.search ? k.search + '&' : '?') + ('author-follow=' + a)),
          )
        )
      },
      R = (function () {
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
            ((b = b.getAttribute(d.DATA_AUTHOR_ASIN)), (sessionStorage.followKey = b))
        }
        a.prototype.isAutoFollowEnabled = function (b) {
          b = b.getAttribute(d.DATA_AUTHOR_ASIN)
          var c = k.search.match('author-follow=([^#&]+)')
          if ((c && 2 === c.length ? c[1] : void 0) !== b || 'undefined' === typeof sessionStorage)
            return !1
          c = sessionStorage.followKey
          sessionStorage.removeItem('followKey')
          return c === b
        }
        a.prototype.updateFollowButtonText = function (b, c) {
          if (c) {
            c = b.getAttribute(d.DATA_FOLLOWING)
            c = null !== c ? c : d.TEXT_TICK
            b.innerText = c
            var e = b.getAttribute(d.DATA_FOLLOWING_ARIA_LABEL)
            b.setAttribute(d.FOLLOW_BUTTON_ARIA_LABEL, e ? e : c)
          } else
            (c = b.getAttribute(d.DATA_FOLLOW)),
              (c = null !== c ? c : d.TEXT_PLUS),
              (b.innerText = c),
              (e = b.getAttribute(d.DATA_FOLLOW_ARIA_LABEL)),
              b.setAttribute(d.FOLLOW_BUTTON_ARIA_LABEL, e ? e : c)
        }
        a.prototype.setFollowStatus = function (b, c) {
          var e = this
          if (null === b.getAttribute(d.DATA_SYNCED)) {
            b.setAttribute(d.DATA_SYNCED, 'true')
            var f = b.getAttribute(d.DATA_AUTHOR_ASIN),
              g = b.getAttribute(d.DATA_REFTAG)
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
                  .filter(function (p) {
                    return !p.includes('spinner')
                  })
                  .join(' ')
                b.innerHTML = h.outerHTML
                h = b.getElementsByClassName('author-follow-button')[0]
                e.bindOperationsToButton(h, f)
              })
          }
        }
        a.prototype.bindOperationsForAllButtons = function (b) {
          var c = this
          b.forEach(function (e) {
            c.bindOperationsToButton(e, e.getAttribute(d.DATA_AUTHOR_ASIN))
          })
        }
        a.prototype.executeUnfollow = function (b) {
          var c = this,
            e,
            f = null !== (e = b.getAttribute(d.DATA_UNFOLLOW_REF)) && void 0 !== e ? e : '',
            g = b.getAttribute(d.DATA_AUTHOR_ASIN)
          u.addTracking(this.getOperationProxy().executeUnfollow, { ref_: f })({ authorAsin: g })
            .then(function (h) {
              c.publishDataToNexus('RemoveFavorite', g, f, h)
              c.updateFollowButtonText(b, !1)
              b.setAttribute(d.DATA_IS_FOLLOWING, 'false')
            })
            .catch(function () {
              c.showErrorModal()
            })
        }
        a.prototype.executeFollow = function (b) {
          var c = this,
            e,
            f = null !== (e = b.getAttribute(d.DATA_FOLLOW_REF)) && void 0 !== e ? e : '',
            g = b.getAttribute(d.DATA_AUTHOR_ASIN)
          u.addTracking(this.getOperationProxy().executeFollow, { ref_: f })({ authorAsin: g })
            .then(function (h) {
              c.publishDataToNexus('AddFavorite', g, f, h)
              c.updateFollowButtonText(b, !0)
              b.setAttribute(d.DATA_IS_FOLLOWING, 'true')
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
            e
          if (
            null !== b.getAttribute(d.DATA_SIMILAR_POPOVER) &&
            null !== b.getAttribute(d.DATA_SIMILAR_POPOVER_CONTENT)
          ) {
            var f = Number(
              null === (e = b.getAttribute(d.DATA_SIMILAR_POPOVER)) || void 0 === e
                ? void 0
                : e.split('_')[1],
            )
            this.getOperationProxy()
              .getRecommendedAuthors({
                authorAsin: b.getAttribute(d.DATA_AUTHOR_ASIN),
                index: f,
                reftag: this.reftag,
              })
              .then(function (g) {
                if (0 < g.innerHTML.length) {
                  var h = b.closest('.a-button')
                  null === h || void 0 === h
                    ? void 0
                    : h.insertAdjacentHTML('afterend', g.innerHTML)
                  g = H['default'].cardRoot.ownerDocument.querySelectorAll(
                    '[class*=authorFollowColumn]',
                  )
                  c.buttonPlacement = d.PLACEMENT_POPOVER
                  c.enableButtonColumns(g)
                  L['default'].when('a-popover').then(function () {
                    var p,
                      Q =
                        null !== (p = b.getAttribute(d.DATA_SIMILAR_POPOVER)) && void 0 !== p
                          ? p
                          : ''
                    K['default'].get(r['default'].$('#' + Q)).show()
                  })
                }
              })
          }
        }
        a.prototype.showErrorModal = function () {
          var b = r['default'].$('#followErrorPopoverTrigger'),
            c = J['default'].create(b, {
              closeButton: !1,
              hideHeader: !0,
              name: 'followErrorPopover',
              popoverLabel: 'followErrorPopover',
            })
          r['default'].declarative('closeErrorDialog', 'click', function () {
            c.hide()
          })
          c.show()
        }
        a.prototype.publishDataToNexus = function (b, c, e, f) {
          b = n.__assign(
            {
              eventType: b,
              entityType: 'author',
              entityId: c,
              signedIn: !0,
              lobExpression: d.LOB,
              lobBitmapExpression: d.LOB,
              reftag: e,
            },
            f,
          )
          I['default'].event(b, d.NEXUS_PRODUCER_ID, 'PIM.FollowEvent.9')
        }
        a.prototype.checkIsFollowing = function (b) {
          return 'true' === b.getAttribute(d.DATA_IS_FOLLOWING)
        }
        a.prototype.bindOperationsToButton = function (b, c) {
          var e = this
          b.getAttribute('href')
            ? (b.setAttribute('href', P(c)),
              (b.onclick = function () {
                e.setAutoFollowEnabled(b)
              }))
            : (!this.checkIsFollowing(b) && this.isAutoFollowEnabled(b) && this.executeFollow(b),
              (b.onclick = function () {
                e.checkIsFollowing(b) ? e.executeUnfollow(b) : e.executeFollow(b)
              }))
        }
        return a
      })(),
      S = function (a, b) {
        return n.__awaiter(void 0, void 0, void 0, function () {
          var c, e
          return n.__generator(this, function (f) {
            c = G['default'].setup()
            e = new R(a, c)
            e.bindOperationsForAllButtons(b)
            return [2]
          })
        })
      }
    t._operationNames = [
      'getFollowStatus',
      'executeFollow',
      'executeUnfollow',
      'getRecommendedAuthors',
    ]
    t.card = function () {
      return n.__awaiter(void 0, void 0, void 0, function () {
        var a
        return n.__generator(this, function (b) {
          a = F['default'].cardRoot.querySelectorAll('[class*=author-follow-button]')
          0 < a.length && S(d.PLACEMENT_FTA, a)
          return [2]
        })
      })
    }
  },
)
