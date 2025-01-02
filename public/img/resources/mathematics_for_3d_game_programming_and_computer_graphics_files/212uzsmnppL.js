;(function (c) {
  var b = window.AmazonUIPageJS || window.P,
    f = b._namespace || b.attributeErrors,
    e = f ? f('StarlingInterestGroupAssignment', '') : b
  e.guardFatal
    ? e.guardFatal(c)(e, window)
    : e.execute(function () {
        c(e, window)
      })
})(function (c, b, f) {
  c.now('StarlingIGConfiguration').execute(function (b) {
    b ||
      c.register('StarlingIGConfiguration', function () {
        return {
          getRoboticSessionId: function () {
            return '000-0000000-0000000'
          },
          getToken: function (a) {
            switch (a) {
              case 'gamma':
                return 'A+qAAwo/s1iDqc/hfoGSql86NR2wqWsxKIUj8+Zl/KP9ErZQwRM3HhdY1Q39N1bAueSVZZ+92xFH69iddkTxZwEAAACJeyJvcmlnaW4iOiJodHRwczovL3ByZS1wcm9kLmFtYXpvbi5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY5NTE2Nzk5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0\x3d'
              case 'prod':
                return 'A69tl2WjpmRBbEqXW1MOXcXGrvFyLn/bow90s5sv6cViJ1eGQCytat/+fYLyCa0i/5O88qtcfMU9MMRZH5RSPAcAAACEeyJvcmlnaW4iOiJodHRwczovL3d3dy5hbWF6b24uY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'
            }
          },
          generateGatewayUrl: function (a) {
            switch (a) {
              case 'beta':
                return 'https://at-' + a + '.amazon-adsystem.com'
              case 'gamma':
                return 'https://at-' + a + '-us-east.amazon-adsystem.com'
              case 'prod':
                return 'https://at-us-east.amazon-adsystem.com'
            }
          },
          getUserAgent: function () {
            return navigator.userAgent
          },
          getApnPrivacySetting: function () {
            if (null !== document && null !== document.cookie) {
              var a = document.cookie.match(/(^| )apn-privacy=([^;]+)/)
              if (a) return 'true' === a[2]
            }
            return !1
          },
          provideToken: function (a) {
            if (null !== document && null !== document.head) {
              var b = document.createElement('meta')
              b.httpEquiv = 'origin-trial'
              b.content = a
              document.head.appendChild(b)
            }
          },
        }
      })
  })
  ;('use strict')
  c.now('StarlingAddMetric').execute(function (e) {
    e ||
      c.register('StarlingAddMetric', function () {
        return {
          addMetric: function (a, g) {
            b.ue && b.ue.count && b.ue.count(a, g)
          },
        }
      })
  })
  ;('use strict')
  c.now('StarlingLogError').execute(function (e) {
    e ||
      c.register('StarlingLogError', function () {
        return {
          logError: function (a) {
            var g = {
              logLevel: 2 < arguments.length && arguments[2] !== f ? arguments[2] : 'ERROR',
              attribution: 'StarlingInterestGroupAssignment',
              message: 1 < arguments.length && arguments[1] !== f ? arguments[1] : '',
            }
            b.ueLogError && b.ueLogError(a, g)
            return [a, g]
          },
        }
      })
  })
  ;('use strict')
  c.now('StarlingIGJoinHelpers').execute(function (b) {
    b ||
      c
        .when(
          'StarlingIGHelpers',
          'StarlingIGConfiguration',
          'StarlingAddMetric',
          'StarlingLogError',
          'StarlingUtils',
        )
        .register('StarlingIGJoinHelpers', function (a, b, d, h, c) {
          function g(a) {
            var b = 0,
              g = 0,
              e = []
            a.forEach(function (a) {
              e.push(
                new Promise(function (d, b) {
                  try {
                    c.getNavigator().joinAdInterestGroup(a, 30 * c.SECONDS_PER_DAY), d(a)
                  } catch (n) {
                    b(n)
                  }
                }),
              )
            })
            return Promise.allSettled(e)
              .then(function (a) {
                a.forEach(function (a) {
                  'fulfilled' === a.status ? (b += 1) : (g += 1)
                })
                d.addMetric('Starling:BrowserAddedToIG:True', b)
                d.addMetric('Starling:BrowserAddedToIG:False', g)
                c.getCustomerId()
                  ? d.addMetric('Starling:IGAssigned:AmazonCustomer', b)
                  : d.addMetric('Starling:IGAssigned:AmazonGuest', b)
              })
              .catch(function (a) {
                d.addMetric('Starling:PromiseResolverError', 1)
                h.logError(a, 'Starling:PromiseResolveError. Error resolving IGJoinPromiseArray.')
              })
          }
          return {
            browserSupportsAdInterestGroup: function () {
              return (
                'joinAdInterestGroup' in navigator &&
                document.featurePolicy.allowsFeature('join-ad-interest-group') &&
                document.featurePolicy.allowsFeature('run-ad-auction')
              )
            },
            joinAdInterestGroupsV2: function (c, e) {
              e = b.generateGatewayUrl(e)
              return a
                .listInterestGroups(e + '/interestGroups/v2/join/', c)
                .then(function (a) {
                  d.addMetric('Starling:ReceivedGatewayJoinV2Response', 1)
                  return a.json()
                })
                .then(function (d) {
                  d = a.parseIGMetadataFromResponse(d)
                  return g(d)
                })
                .catch(function (a) {
                  a instanceof TypeError
                    ? (d.addMetric('Starling:FailedToFetchJoinV2Error', 1),
                      h.logError(
                        a,
                        'Starling:FailedToFetchJoinV2Error. Error making fetch request.',
                      ))
                    : (d.addMetric('Starling:ParseGatewayJoinV2ResponseError', 1),
                      h.logError(
                        a,
                        'Starling:ParseGatewayJoinV2ResponseError. Error parsing IG Metadata from Gateway.',
                      ))
                })
            },
          }
        })
  })
  ;('use strict')
  c.now('StarlingInterestGroupAssign').execute(function (b) {
    b ||
      (c.register('StarlingInterestGroupAssign', function () {
        var a = {
          init: function (b, d, c, e, f) {
            a.config = b
            a.joinHelpers = e
            a.metrics = d
            a.errors = c
            a.utils = f
            b = a.config.getRoboticSessionId()
            d = a.utils.getHref()
            a.joinHelpers.browserSupportsAdInterestGroup()
              ? d
                ? ((d = a.utils.getStage(d)),
                  (c = a.config.getToken(d)),
                  a.config.provideToken(c),
                  a.assignIG(d, b))
                : (a.metrics.addMetric('Starling:PageLoadError', 1),
                  a.errors.logError({
                    message: 'Starling:PageLoadError. Error retreiving url from window.',
                  }))
              : a.metrics.addMetric('Starling:BrowserSupportsAdInterestGroup:False', 1)
          },
          assignIG: function (b, d) {
            a.metrics.addMetric('Starling:BrowserSupportsAdInterestGroup:True', 1)
            var c = a.utils.lookupLocalStorage('csm:adb')
            if (null != c && c.endsWith('yes'))
              a.metrics.addMetric('Starling:AdBlockEnabled:True', 1)
            else {
              a.metrics.addMetric('Starling:AdBlockEnabled:False', 1)
              c = a.utils.getSessionId()
              var e = a.utils.getCustomerId(),
                g = a.utils.getPageType(),
                f = a.utils.getASIN(),
                k = a.config.getApnPrivacySetting(),
                l = a.utils.getHref()
              d = c === d
              var m = a.utils.getRandomUUID()
              k || d
                ? a.metrics.addMetric('Starling:TotalPunts', 1)
                : a.joinHelpers.joinAdInterestGroupsV2(
                    {
                      requestId: m,
                      identity: { customerId: e, sessionId: c },
                      pageInformation: { pageURL: l, pageType: g, asins: [f] },
                      marketplaceId: '1',
                    },
                    b,
                  )
              k && a.metrics.addMetric('Starling:UserOptedOut:True', 1)
              d && a.metrics.addMetric('Starling:RoboticTraffic:True', 1)
              e
                ? a.metrics.addMetric('Starling:BrowserSupportsAdInterestGroup:AmazonCustomer', 1)
                : c
                  ? a.metrics.addMetric('Starling:BrowserSupportsAdInterestGroup:AmazonGuest', 1)
                  : a.metrics.addMetric(
                      'Starling:BrowserSupportsAdInterestGroup:NoCustomerOrSessionId',
                    )
            }
          },
        }
        return a
      }),
      c
        .when(
          'StarlingIGConfiguration',
          'StarlingAddMetric',
          'StarlingLogError',
          'StarlingIGJoinHelpers',
          'StarlingInterestGroupAssign',
          'StarlingUtils',
          'ready',
        )
        .execute(function (a, b, d, c, e, f) {
          e.init(a, b, d, c, f)
        }))
  })
  ;('use strict')
  c.now('StarlingUtils').execute(function (e) {
    e ||
      c.register('StarlingUtils', function () {
        var a = /development|beta/,
          c = /pre-prod|gamma/
        return {
          lookupLocalStorage: function (a) {
            try {
              return b.localStorage.getItem(a)
            } catch (h) {
              return null
            }
          },
          addToLocalStorage: function (a, c) {
            try {
              ;(a = String(a)), (c = String(c)), b.localStorage.setItem(a, c)
            } catch (p) {}
          },
          removeFromLocalStorage: function (a) {
            try {
              b.localStorage.getItem(a) !== f && b.localStorage.removeItem(a)
            } catch (h) {}
          },
          getHref: function () {
            return b.location.href
          },
          getWindowOpts: function () {
            return b.opts
          },
          getCustomerId: function () {
            if (b.fwcimData) return b.fwcimData.customerId
            if (b.opts) return b.opts.customerId
          },
          getStage: function (b) {
            return a.test(b) ? 'beta' : c.test(b) ? 'gamma' : 'prod'
          },
          getNavigator: function () {
            return navigator
          },
          getSessionId: function () {
            if (b.ue) return b.ue.sid
            if (b.opts) return b.opts.sessionId
          },
          getPageType: function () {
            return b.ue_pty
          },
          getASIN: function () {
            return b.ue_pti
          },
          getRandomUUID: function () {
            return 'undefined' !== typeof crypto && crypto.randomUUID
              ? crypto.randomUUID()
              : 'requestId'
          },
          SECONDS_PER_DAY: 86400,
        }
      })
  })
  ;('use strict')
  c.now('StarlingIGHelpers').execute(function (b) {
    b ||
      c
        .when('StarlingAddMetric', 'StarlingLogError')
        .register('StarlingIGHelpers', function (a, b) {
          return {
            parseIGMetadataFromResponse: function (c) {
              if (c) {
                if ((c = c.interestGroups) && Array.isArray(c))
                  return (
                    0 < c.length
                      ? a.addMetric('Starling:AttemptedIGAdd', c.length)
                      : a.addMetric('Starling:GatewayNoIGsReturned', 1),
                    c
                  )
                a.addMetric('Starling:GatewayReturnedIGMetadata:False', 1)
                b.logError({
                  message:
                    'Starling:GatewayReturnedIGMetadata:False. IG Metadata from Gateway is incorrect format.',
                })
                return null
              }
              a.addMetric('Starling:NullGatewayResponseError', 1)
              b.logError({
                message:
                  'Starling:NullGatewayResponseError. Null IGMetadata response from Gateway.',
              })
              return null
            },
            listInterestGroups: function (a, b) {
              return fetch(a, { method: 'PUT', body: JSON.stringify(b), credentials: 'include' })
            },
          }
        })
  })
})
