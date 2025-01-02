'use strict'
mix_d(
  'MonarchShoppingCXFeedbackWidgetCards__shopping-cx-feedback-widget:shopping-cx-feedback-widget__fRHXfuVQ',
  'exports tslib @c/logger @c/metrics @c/pagemarker @c/scoped-dom @c/dom @c/remote-operations'.split(
    ' ',
  ),
  function (G, D, N, r, O, P, Q, R) {
    function w(a) {
      return a && 'object' === typeof a && 'default' in a ? a : { default: a }
    }
    var t = w(N),
      S = w(O),
      f = w(P),
      E = w(Q),
      T = w(R),
      z = function () {
        return T['default'].setup()
      },
      U = {
        CREDIT_CARD_NUMBER: [/\b\d{15,16}\b/i, /\b\d{4}([\- ])\d{4}\1\d{4}\1\d{4}\b/i],
        PASSPORT: [/\b[Cc\d]\d{8}\b/i],
        ADDRESS: [
          /\d{1,5}\s([\w\.\-]+\s){1,3}(st|ln|rd|ave|dr|pl|pkwy|blvd|street|lane|road|avenue|drive|parkway|boulevard)\b/i,
        ],
        PHONE_NUMBER: [
          /\b(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?\b/g,
        ],
        EMAIL: [
          /[a-z0-9!#$%&'*+\/=?\^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
        ],
      },
      V = {
        NA: {
          CREDIT_CARD_NUMBER: [/\b\d{4}([\- ])\d{6}\1\d{5}\b/i],
          NATIONAL_IDENTIFIER: [
            /\b(?!000)\d{3}[\- ](?!00)\d{2}[\- ](?!0000)\d{4}\b/i,
            /\b\d{2}[\- ]\d{7}\b/i,
          ],
          PASSPORT: [/\b[A-z]{2}[0-9]{7}\b/i],
          ADDRESS: [/\b\d{5}[ \-]\d{4}\b/, /\b(?:[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d)\b/i],
          PHONE_NUMBER: [
            /\b(?:\+\d{1,3}[\( \-\/\-])?(?:\d{3}|\(\d{3}\))([ -\/\.])\d{3}([\-\/\.])\d{4}\s*((x|ex\w*|#)\s*\d+)?\b/g,
          ],
        },
        EU: {
          CREDIT_CARD_NUMBER: [],
          NATIONAL_IDENTIFIER: [],
          PASSPORT: [
            /\b[A-z][0-9]{6}\b/i,
            /\b[A-z]{2}[0-9]{7}\b/i,
            /\b[A-z0-9][0-9]{7}\b/i,
            /\b[CFGHJK0-9][0-9]{3}[CHJKLMNPRTVWXYZ0-9]{5}[0-9]\b/i,
            /\b[A-z][0-9]{6,7}\b/i,
            /\b[0-9]{12}\b/i,
            /\b[0-9]{2}[A-z]{2}[0-9]{5}\b/i,
            /\b[A-z] ?[0-9]{7}\b/i,
          ],
          ADDRESS: [
            /\b(?:[0-8]\d|9[0-8])\d{3}\b/i,
            /\b\d{5}\b/i,
            /\b(?:NL-)?(?:[1-9]\d{3} ?(?:[A-EGHJ-NPRTVWXZ][A-EGHJ-NPRSTVWXZ]|S[BCEGHJ-NPRTVWXZ]))\b/i,
            /\b(?:0[1-9]|[1-4]\d|5[0-2])\d{3}\b/,
            /\b[1-9]\d{3}\b/,
            /\b(?:GIR 0AA|(?:(?:(?:A[BL]|B[ABDHLNRSTX]?|C[ABFHMORTVW]|D[ADEGHLNTY]|E[HNX]?|F[KY]|G[LUY]?|H[ADGPRSUX]|I[GMPV]|JE|K[ATWY]|L[ADELNSU]?|M[EKL]?|N[EGNPRW]?|O[LX]|P[AEHLOR]|R[GHM]|S[AEGK-PRSTY]?|T[ADFNQRSW]|UB|W[ADFNRSV]|YO|ZE)[1-9]?\d|(?:(?:E|N|NW|SE|SW|W)1|EC[1-4]|WC[12])[A-HJKMNPR-Y]|(?:SW|W)(?:[2-9]|[1-9]\d)|EC[1-9]\d)\d[ABD-HJLNP-UW-Z]{2}))\b/i,
          ],
          PHONE_NUMBER: [
            /(\+|\b011\W*)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7)(\W*\d){1,14}\b/i,
          ],
        },
        FE: {
          CREDIT_CARD_NUMBER: [],
          NATIONAL_IDENTIFIER: [],
          PASSPORT: [/\b[Cc\d]\d{8}\b/i],
          ADDRESS: [/\b(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))\b/i, /\b\d{3}-\d{4}\b/],
          PHONE_NUMBER: [
            /(\+|\b011\W*)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7)(\W*\d){1,14}\b/i,
          ],
        },
      },
      W = {
        ABUSE_WORD: [
          /\bsh[i|*|1]t\b|\bf[u|*][c|*]k\b|\bb[i|*]tch\b|\bcrap\b|\bsucks\b|\bdamn\b|\bwhore\b|\bass\b|\\s/gi,
        ],
      },
      c
    ;(function (a) {
      a.NA = 'NA'
      a.FE = 'FE'
      a.EU = 'EU'
    })(c || (c = {}))
    var H
    ;(H || (H = {})).PNG = 'png'
    var X = /[0-9]{9}[0-9X]|[A-Z][A-Z0-9]{9}/,
      F = function (a, b, d) {
        var e,
          g,
          p = b.violationMap
        b = b.textAfterValidation
        for (var m in a) {
          var x = a[m]
          try {
            for (var l = ((e = void 0), D.__values(x)), q = l.next(); !q.done; q = l.next()) {
              var h = b.match(q.value)
              h &&
                ((h = 'CREDIT_CARD_NUMBER' === m ? h.filter(Boolean).filter(Y) : h.filter(Boolean)),
                0 < h.length &&
                  (d
                    ? (b = b.replace(new RegExp('\\b' + h.join('\\b|\\b') + '\\b', 'gi'), ''))
                    : p[m]
                      ? (p[m] = p[m].concat(h))
                      : (p[m] = h)))
            }
          } catch (n) {
            e = { error: n }
          } finally {
            try {
              q && !q.done && (g = l.return) && g.call(l)
            } finally {
              if (e) throw e.error
            }
          }
        }
        return { textAfterValidation: b, violationMap: p }
      },
      Y = function (a) {
        if (/[^0-9\-\s]+/.test(a)) return !1
        var b = 0,
          d = !1
        a = a.replace(/\D/g, '')
        if ('' === a) return !1
        for (var e = a.length - 1; 0 <= e; e--) {
          var g = a.charAt(e)
          g = parseInt(g, 10)
          d && ((g *= 2), 9 < g && (g -= 9))
          b += g
          d = !d
        }
        return 0 === b % 10
      },
      A
    ;(function (a) {
      a.Rating = 'Rating'
      a.Text = 'Text'
    })(A || (A = {}))
    var aa = function () {
        var a = f['default'].cardRoot.getElementsByClassName('shoppingCxFeedbackRootWidget')[0]
        a &&
          z()
            .getRatingFeedbackHtml()
            .then(function (b) {
              b && b.outerHTML && ((a.innerHTML = b.outerHTML), Z())
            })
            .catch(function (b) {
              t['default'].log(
                'Experiencing some issues to load heimdall feedback widget rating view, trace: ' +
                  b,
                'ERROR',
              )
            })
      },
      ba = function (a) {
        return 'string' !== typeof a
          ? (r.count('shoppingcxWidgetEmptyAsin', 1), null)
          : 10 < a.length || !X.test(a)
            ? (r.count('shoppingcxWidgetInvalidAsin', 1), null)
            : a
      },
      Z = function () {
        var a = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_shopping-cx-feedback-widget__3OJWU',
          )[0],
          b = f['default'].cardRoot.getElementsByClassName('widgetContentContainer')[0],
          d = f['default'].cardRoot.getElementsByClassName('feedbackRadioHeading')[0],
          e = f['default'].cardRoot.getElementsByClassName('feedbackRadioButton')
        a && r.count('shoppingcxWidgetGlanceView', 1)
        var g = f['default'].cardRoot.getElementsByClassName('shoppingCxFeedbackRootWidget')[0],
          p = ba(g.dataset.asin)
        g = function (x) {
          var l = e[x].getElementsByTagName('input')[0]
          l &&
            (l.addEventListener('click', function () {
              l.disabled = !0
              r.count('ratingFeedbackSubmitted', 1)
              var q = Number(l.value)
              ca(q, d.textContent, p)
              z()
                .getTextFeedbackHtml()
                .then(function (h) {
                  b && (b.innerHTML = h.outerHTML)
                  h = f['default'].cardRoot.getElementsByClassName(
                    '_shopping-cx-feedback-widget_style_text-feedback-submit-button__OfIRR',
                  )[0]
                  var n = f['default'].cardRoot.getElementsByTagName('textarea')[0],
                    I = f['default'].cardRoot.getElementsByClassName(
                      '_shopping-cx-feedback-widget_style_text-feedback-alert-info__iTrz-',
                    )[0]
                  if (h && n) {
                    var v = !1
                    h.addEventListener('click', function () {
                      r.count('textFeedbackSubmitted', 1)
                      v && (B(!1), (v = !1))
                      var k = n.value,
                        y = d.textContent,
                        u = f['default'].cardRoot.getElementsByClassName('mkpID')[0]
                      u =
                        V[
                          {
                            ATVPDKIKX0DER: c.NA,
                            A2EUQ1WTGCTBG2: c.NA,
                            A1AM78C64UM0Y8: c.NA,
                            A39IBJ37TRP1C6: c.FE,
                            AD2EMQ3L3PG8S: c.FE,
                            A1VC38T7YXB528: c.FE,
                            A19VAU5U5O7RUS: c.FE,
                            A1F83G8C2ARO7P: c.EU,
                            A1PA6795UKMFR9: c.EU,
                            A13V1IB3VIYZZH: c.EU,
                            APJ6JRA9NG5V4: c.EU,
                            A1RKKUPIHCS9HS: c.EU,
                            ARBP9OOSHTCHU: c.EU,
                            A21TJRUUN4KGV: c.EU,
                            A1805IZSGTT6HS: c.EU,
                            A2VIGQ35RCS4UG: c.EU,
                            A17E79C6D8DWNP: c.EU,
                            A33AVAJ2PDY3EV: c.EU,
                            A1C3SOZRARQ6R3: c.EU,
                            A2NODRKZP88ZB9: c.EU,
                          }[u.value]
                        ]
                      k = { textAfterValidation: k, violationMap: {} }
                      k = F(W, k, !0)
                      k = F(U, k, !1)
                      u && (k = F(u, k, !1))
                      u = k.violationMap
                      if (0 < Object.keys(u).length)
                        t['default'].log(
                          'Feedback validation: ' + Object.keys(u).toString(),
                          'WARN',
                        ),
                          J(!1),
                          r.count('textFeedbackFailedValidation', 1)
                      else {
                        k = k.textAfterValidation
                        y = {
                          feedbackType: A.Text,
                          feedbackContentIntValue: q,
                          feedbackContentString: encodeURIComponent(k),
                          feedbackQuestion: encodeURIComponent(y),
                          feedbackAsin: p,
                        }
                        K(y)
                        if (
                          (y = f['default'].cardRoot.getElementsByClassName(
                            '_shopping-cx-feedback-widget_style_text-feedback-submit-button__OfIRR',
                          )[0])
                        )
                          y.getElementsByTagName('input')[0].disabled = !0
                        L()
                      }
                    })
                    n.addEventListener('input', function () {
                      I && 'none' === I.style.display && J(!0)
                      n.value && 0 < n.value.length && !v && (B(!0), (v = !0))
                      ;(n.value && 0 < n.value.length) || !v || (B(!1), (v = !1))
                    })
                  }
                })
                .catch(function (h) {
                  t['default'].log(
                    'Experiencing some issues redricting to text feedback page, trace: ' + h,
                    'ERROR',
                  )
                  L()
                })
            }),
            l.checked && l.click())
        }
        for (var m = 0; m < e.length; m++) g(m)
        if (
          (g = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_close__2J0I_',
          )[0])
        )
          g.addEventListener('click', function () {
            M(a)
          }),
            g.addEventListener('keydown', function (x) {
              'Enter' === x.key && M(a)
            })
      },
      M = function (a) {
        r.count('shoppingcxWidgetDismissed', 1)
        B(!1)
        a &&
          (z()
            .postWidgetDismissed()
            .then(function (b) {
              b.succeed ||
                t['default'].log(
                  'Experiencing some service side issues when calling submitFeedback api with dismiss action: ' +
                    b.message,
                  'ERROR',
                )
            })
            .catch(function (b) {
              t['default'].log(
                'Experiencing some client side issues when calling submitFeedback api with dismiss action, trace: ' +
                  b,
                'ERROR',
              )
            }),
          C(a))
      },
      ca = function (a, b, d) {
        a = {
          feedbackType: A.Rating,
          feedbackContentIntValue: a,
          feedbackQuestion: encodeURIComponent(b),
          feedbackAsin: d,
        }
        K(a)
      },
      K = function (a) {
        z()
          .postFeedbackData(a)
          .then(function (b) {
            b.succeed ||
              t['default'].log(
                'Experiencing some service side issues when calling submitFeedback api: ' +
                  b.message,
                'ERROR',
              )
          })
          .catch(function (b) {
            t['default'].log(
              'Experiencing some client side issues when calling submitFeedback api, trace: ' + b,
              'ERROR',
            )
          })
      },
      C = function (a) {
        a.style.display = 'none'
      },
      J = function (a) {
        var b = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_text-feedback-alert-info__iTrz-',
          )[0],
          d = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_text-feedback-alert-error__1Y0pJ',
          )[0],
          e = a ? b : d
        a = a ? d : b
        e && a && 'none' !== a.style.display && (C(a), (e.style.display = 'inline-block'))
      },
      B = function (a) {
        var b, d
        ;(null ===
          (d =
            null ===
              (b =
                null === E['default'] || void 0 === E['default']
                  ? void 0
                  : E['default'].cardRoot) || void 0 === b
              ? void 0
              : b.ownerDocument) || void 0 === d
          ? void 0
          : d.defaultView
        ).onbeforeunload = a
          ? function (e) {
              e.preventDefault()
              e.returnValue = ''
            }
          : null
      },
      L = function () {
        var a = f['default'].cardRoot.getElementsByClassName('widgetContentContainer')[0],
          b = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_thank-you-view-placeholder__2G21U',
          )[0],
          d = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_shopping-cx-feedback-widget__3OJWU',
          )[0],
          e = f['default'].cardRoot.getElementsByClassName(
            '_shopping-cx-feedback-widget_style_close__2J0I_',
          )[0]
        a && b && (a.innerHTML = b.innerHTML)
        e && C(e)
        setTimeout(function () {
          d && C(d)
        }, 3e3)
      }
    G._operationNames = [
      'getRatingFeedbackHtml',
      'getTextFeedbackHtml',
      'postFeedbackData',
      'postWidgetDismissed',
    ]
    G.card = function () {
      return D.__awaiter(void 0, void 0, void 0, function () {
        return D.__generator(this, function (a) {
          S['default'].pageReady.then(aa)
          return [2]
        })
      })
    }
  },
)
