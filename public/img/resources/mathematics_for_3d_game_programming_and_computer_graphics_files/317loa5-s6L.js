;(function (h) {
  var f = window.AmazonUIPageJS || window.P,
    l = f._namespace || f.attributeErrors,
    d = l ? l('EbooksBottomSheetAssets', '') : f
  d.guardFatal
    ? d.guardFatal(h)(d, window)
    : d.execute(function () {
        h(d, window)
      })
})(function (h, f, l) {
  h.when('jQuery', 'A').register('BottomSheet-Surface-Helper', function (d, f) {
    return {
      createDeclarativeHandlers: function (b) {
        b &&
          'function' === typeof b &&
          (f.declarative('carousel_item_clicked', 'click', b),
          f.declarative('carousel_item_clicked', 'keypress', function (d) {
            var e = d.$event
            !e || (32 !== e.which && 13 !== e.which) || b(d)
          }))
      },
      setSurfaceCarouselSettings: function () {},
      getTitleTargetFromDeclarative: function (b) {
        if (b && b.$event && 'function' === typeof b.$event.preventDefault)
          return b.$event.preventDefault(), b.$currentTarget
      },
      orientationChange: function () {},
      getDeliverToDevice: function (b, k) {
        b = d('form#' + (b ? b : 'buyOneClick') + ' select#' + (k ? k : 'deliverTo'))
        return b.length ? b.val() : ''
      },
      getTYPParamsFromRequests: function (b) {
        return 'transfer-via-computer' === b
          ? 'action\x3dtransfer-via-computer\x26a\x3dtransfer-via-computer'
          : b
            ? 'a\x3d' + b
            : ''
      },
      addDeviceAccountIdToRequests: function (b, d) {
        b.forEach(function (b) {
          b.asin && d && (b.deviceAccountId = d)
        })
      },
    }
  })
  h.register('KU-ReturnAndBorrowSheet-CSM', function () {
    function d(b, d) {
      f.ues && 'function' === typeof ues && ues('id', d, b)
    }
    function h(b, d) {
      f.uet && 'function' === typeof uet && uet('bb', b, { wb: 1 }, d)
    }
    function b(b) {
      f.uex && 'function' === typeof uex && uex('ld', b, { wb: 1 })
    }
    return {
      bindRequest: d,
      widgetBegin: h,
      widgetEnd: b,
      ManualTimeCSM: function (f) {
        var e, k, a
        this.manualWidgetBegin = function () {
          k = new Date()
        }
        this.setWidgetSuffix = function (b) {
          a = b
        }
        this.addRequestId = function (a) {
          e = a
        }
        this.manualWidgetEnd = function () {
          var m = a ? f + a : f
          h(m, k)
          d(e, m)
          b(m)
        }
      },
    }
  })
  h.when(
    'jQuery',
    'A',
    'a-modal',
    'KU-ReturnAndBorrowSheet-CSM',
    'BottomSheet-Surface-Helper',
  ).register('KU-ReturnAndBorrowSheet-Helper', function (d, h, b, k, e) {
    function m(a, b, d) {
      f.ueLogError &&
        'function' === f.ueLogError &&
        f.ueLogError(b, {
          logLevel: a,
          attribution: 'ku_dpx_return_and_borrow',
          message: '[KU-DPX] ' + d,
        })
    }
    return {
      Helper: function () {
        function a(a) {
          function b(a, c) {
            c = c || 2
            return (Array(c).join('0') + a).slice(-c)
          }
          0 === a.indexOf('#') && (a = a.slice(1))
          3 === a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2])
          if (6 !== a.length) throw Error('Invalid HEX color - ' + a)
          var c = (255 - parseInt(a.slice(0, 2), 16)).toString(16),
            d = (255 - parseInt(a.slice(2, 4), 16)).toString(16)
          a = (255 - parseInt(a.slice(4, 6), 16)).toString(16)
          return '#' + b(c) + b(d) + b(a)
        }
        function r(a) {
          a = { name: a, hideHeader: !0 }
          b.create(d('#' + a.name + 'Trigger'), a).show()
        }
        function n(a) {
          a.headers = a.headers ? a.headers : {}
          var b = g.CSRF_TOKEN
          ;(b && '' !== b) ||
            ((b = h.state('csrfData') || {}), (b = b.csrfToken !== l ? b.csrfToken : ''))
          '' === b
            ? (m('FATAL', null, 'NO CSRF token found'), t.showReturnAndBorrowErrorDialog())
            : ((a.headers['X-CSRFToken'] = b), d.ajax(a))
        }
        if (1 > arguments.length)
          return m('FATAL', null, 'ReturnAndBorrowSheetHelper init: widgetContext missing'), !1
        var g = arguments[0],
          t = this
        this.returnAndBorrow = function (a, b, c, d, h, p) {
          if (!g) return m('FATAL', null, 'Calling returnAndBorrow without initializing'), !1
          b = t.cloneObject(b)
          var C = t.getDeliverToDevice()
          e &&
            'function' === typeof e.addDeviceAccountIdToRequests &&
            e.addDeviceAccountIdToRequests(b, C)
          b = {
            type: 'POST',
            url: g.RETURN_AND_BORROW_ENDPOINT + h,
            headers: { isFromDP: !0 },
            contentType: 'application/json',
            data: JSON.stringify(b),
            dataType: 'json',
            timeout: 5e3,
            error: function (a) {
              d(a)
            },
            success: function (b, d, t) {
              d = t && t.getResponseHeader ? t.getResponseHeader('x-amz-rid') : ''
              k.bindRequest(d, g.WIDGET_NAME_BOTTOM_SHEET)
              p && p.addRequestId(d)
              k.bindRequest(d, a)
              k.widgetEnd(a)
              ;(function () {
                if (b.allSucceeded) return !0
                if (b.succeededResults && b.succeededResults.length) {
                  var a = b.succeededResults.filter(function (a) {
                    return (
                      a.requestedBorrowAsin === g.ASIN &&
                      a.workflowResponse &&
                      'KLU_BORROW_SUCCEEDED' === a.workflowResponse.resultCode
                    )
                  })
                  return a && a.length
                }
                return !1
              })()
                ? ((d = ''),
                  e &&
                    'function' === typeof e.getTYPParamsFromRequests &&
                    (d = e.getTYPParamsFromRequests(C)),
                  (f.location =
                    g.TYP_BASE_URL +
                    '\x26asin\x3d' +
                    g.ASIN +
                    '\x26subtype\x3d' +
                    g.BORROW_SUB_TYPE +
                    '\x26borrowingProgram\x3d' +
                    g.PROGRAM +
                    '\x26redirectionChecked\x3d1\x26' +
                    d))
                : c(b)
            },
          }
          k.widgetBegin(a)
          n(b)
        }
        this.getLoans = function (a, b) {
          if (!g) return m('FATAL', null, 'Calling getLoans without initializing'), !1
          var c = new k.ManualTimeCSM(g.WIDGET_NAME_GET_LOANS),
            e = {
              type: 'POST',
              url: g.GET_LOANS_ENDPOINT + g.BORROW_BUTTON_REF_TAG,
              contentType: 'application/json',
              data: JSON.stringify({
                programName: g.PROGRAM,
                programChannel: g.CHANNEL ? g.CHANNEL : 'ALL_YOU_CAN_READ',
                currentPageKey: g.CURRENT_PAGE_KEY,
              }),
              dataType: 'html',
              timeout: 1e4,
              success: function (b, e, f) {
                e = f && f.getResponseHeader ? f.getResponseHeader('x-amz-rid') : ''
                k.bindRequest(e, g.WIDGET_NAME_GET_LOANS)
                k.bindRequest(e, g.WIDGET_NAME_BOTTOM_SHEET_ELAPSED)
                k.widgetEnd(g.WIDGET_NAME_GET_LOANS)
                f = d(b).find('.carouselItem').length
                c.setWidgetSuffix('ActiveLoans' + f)
                c.addRequestId(e)
                c.manualWidgetEnd()
                a(b, f)
              },
              error: function (a) {
                b(a)
              },
            }
          k.widgetBegin(g.WIDGET_NAME_GET_LOANS)
          c.manualWidgetBegin()
          n(e)
        }
        this.cloneObject = function (a) {
          return JSON.parse(JSON.stringify(a))
        }
        this.composeAbsoluteURL = function (a) {
          return (
            f.location.href.replace(/(:\/*[^/]*).*$/, '$1') + ('/' === a.charAt(0) ? '' : '/') + a
          )
        }
        this.showReturnAndBorrowErrorDialog = function () {
          r(g.ERROR_MODAL_PRELOAD_NAME)
        }
        this.showReturnAndBorrowIOUInfoDialog = function () {
          r(g.IOU_MODAL_PRELOAD_NAME)
        }
        this.invertColor = function (b) {
          if (b.startsWith('rgb')) {
            var d = b.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
            if (!d) throw Error('Invalid RGB color - ' + b)
            return 'rgb(' + (255 - d[1]) + ',' + (255 - d[2]) + ',' + (255 - d[3]) + ')'
          }
          return a(b)
        }
        this.getDeliverToDevice = function () {
          return e && 'function' === typeof e.getDeliverToDevice
            ? e.getDeliverToDevice(g.FORM_NAME, g.DELIVER_TO_FIELD)
            : ''
        }
      },
      logError: m,
    }
  })
  h.when(
    'jQuery',
    'A',
    'a-carousel-framework',
    'a-button',
    'KU-ReturnAndBorrowSheet-Helper',
    'KU-ReturnAndBorrowSheet-CSM',
    'BottomSheet-Surface-Helper',
  ).register('KU-ReturnAndBorrowSheet', function (d, n, b, k, e, m, a) {
    function r() {
      var a = d('#shelfSpinnerContainer'),
        b = d('#shelfSpinnerContainer #shelfSpinner'),
        e = this
      this.toggle = function (c) {
        a.toggleClass('shelfSpinnerContainerShow a-spacing-small', c)
        a.toggleClass('shelfSpinnerContainerHide aok-hidden', !c)
        b.toggleClass('aok-hidden', !c)
      }
      this.show = function () {
        e.toggle(!0)
      }
      this.hide = function () {
        e.toggle(!1)
      }
    }
    function l() {
      var a = {},
        b = this
      this.get = function () {
        return Object.keys(a)
      }
      this.count = function () {
        return b.get().length
      }
      this.reset = function () {
        a = {}
      }
      this.update = function (d, c) {
        c ? (a[d] = !0) : delete a[d]
        return b.count()
      }
    }
    function g() {
      function f(b) {
        var c
        a &&
          'function' === typeof a.getTitleTargetFromDeclarative &&
          (c = a.getTitleTargetFromDeclarative(b))
        b = b.data.loanId
        var d = c.siblings('.carouselSelectedMarker'),
          e = !d.length
        e
          ? (c.after('\x3cdiv class\x3d"carouselSelectedMarker carouselItem"\x3e'),
            (d = c.position()),
            c.siblings('.carouselSelectedMarker').css({
              top: d.top + 'px',
              left: d.left + 'px',
              height: c.height() + 'px',
              width: c.width() + 'px',
            }))
          : d.remove()
        0 < v.update(b, e) ? p.enable() : p.disable()
      }
      function g(f, g) {
        B.empty()
        f
          ? (B.append(f),
            c(),
            B.removeClass('aok-hidden'),
            b.createAll(),
            b.initializeAll(),
            (f = b.getCarousel(d('#shelfContainer', u))),
            a &&
              'function' === typeof a.setSurfaceCarouselSettings &&
              a.setSurfaceCarouselSettings(f),
            m.widgetEnd(x),
            y.setWidgetSuffix('ActiveLoans' + g),
            y.manualWidgetEnd())
          : (e.logError('ERROR', null, 'Get loans request succeeded, but got empty response.'), A())
        w.hide()
      }
      function k(a) {
        e.logError('ERROR', null, 'Get loans request failed with error: ' + a)
        z()
        w.hide()
      }
      function c() {
        var a = d(D),
          b = 0,
          c = 0
        a.load(function () {
          b++
          c = Math.max(c, d(this).outerHeight())
          b === a.length && h(c)
        })
      }
      function h(a) {
        d(D).each(function () {
          var b = a - d(this).outerHeight()
          d(this).css('margin-top', b + 'px')
        })
        var b = a + 5
        d('#shelfContainer', u)
          .find('ol')
          .css('height', b + 'px')
      }
      if (6 > arguments.length)
        return (
          e.logError(
            'FATAL',
            null,
            'Carousel init: not properly constructed [' + arguments.length + ']',
          ),
          !1
        )
      var n = arguments[0],
        p = arguments[1],
        z = arguments[2],
        A = arguments[3],
        u = arguments[4],
        x = arguments[5],
        y = arguments[6],
        w = new r(),
        v = new l(),
        B = d(u + ' #shelfCarouselContent'),
        D = u + ' .shelfCarouselContainer img'
      a && 'function' === typeof a.createDeclarativeHandlers && a.createDeclarativeHandlers(f)
      this.update = function () {
        w.show()
        B.addClass('aok-hidden')
        p.disable()
        v.reset()
        'function' === typeof n && n(g, k)
      }
      this.getSelectedLoanIds = function () {
        return v.get()
      }
    }
    return {
      ReturnAndBorrowSheetWidget: function () {
        function a(a) {
          z.addClass('aok-hidden')
          A.addClass('aok-hidden')
          h.when('mash').execute(function (b) {
            'function' === typeof b.dispatchEvent &&
              b.dispatchEvent({ type: 'appOverlays.' + ('On' === a ? 'Hide' : 'Show') })
          })
          'On' === a
            ? (l.removeClass('aok-hidden'),
              p.css('height', d(document).height()),
              p.removeClass('aok-hidden'))
            : (l.addClass('aok-hidden'), p.addClass('aok-hidden'))
        }
        function b(a) {
          var b = ''
          if (a.failedResults && a.failedResults.length) {
            var d = a.failedResults.filter(function (a) {
              return a.requestedBorrowAsin === c.ASIN
            })
            if (d && d.length) {
              var e = d[0]
              b = d[0].workflowResponse.resultCode
            }
          }
          switch (b) {
            case 'KLU_ALREADY_BORROWED':
            case 'ALREADY_PURCHASED':
              v.hide()
              q.showReturnAndBorrowIOUInfoDialog()
              break
            case 'KLU_CONCURRENT_LIMIT_REACHED':
              f.location =
                c.RnB_PAGE_URL +
                '\x26ASIN\x3d' +
                c.ASIN +
                '\x26continueAction\x3d' +
                c.CONTINUE_ACTION +
                '\x26program\x3d' +
                c.PROGRAM +
                '\x26channel\x3d' +
                c.CHANNEL +
                '\x26ref_\x3d' +
                c.BORROW_BUTTON_REF_TAG +
                '\x26a\x3d' +
                q.getDeliverToDevice()
              break
            case 'KLU_BOTTOM_SHEET':
              v.show()
              break
            case 'CHOOSE_DEVICE':
              a = q.composeAbsoluteURL(
                c.NON_AJAX_RNB_ENDPOINT +
                  '/ref\x3d' +
                  c.RETURN_AND_BORROW_BUTTON_REF_TAG +
                  '?asin\x3d' +
                  c.ASIN +
                  '\x26program\x3d' +
                  c.PROGRAM +
                  '\x26channel\x3d' +
                  c.CHANNEL +
                  '\x26action\x3dtransfer-via-computer\x26csrfToken\x3d' +
                  encodeURIComponent(c.CSRF_TOKEN),
              )
              f.location =
                c.CHOOSE_DEVICE_PAGE_URL +
                '?asin\x3d' +
                c.ASIN +
                '\x26action\x3dtransfer-via-computer\x26buyHandlerCallBackUrl\x3d' +
                encodeURIComponent(a)
              break
            case 'KLU_MFA_FIX_UP':
              f.location =
                c.MFA_FIXUP_URL +
                '?asin\x3d' +
                c.ASIN +
                '\x26subtype\x3d' +
                c.BORROW_SUB_TYPE +
                '\x26program\x3d' +
                c.PROGRAM +
                '\x26channel\x3d' +
                c.CHANNEL +
                '\x26action\x3d' +
                c.CONTINUE_ACTION +
                '\x26authPageSource\x3dborrowInterrupt'
              break
            case 'KLU_PINCHOT_BORROW_INTERRUPT_ELIGIBLE':
              f.location =
                c.PINCHOT_BORROW_INTERRUPT_ELIGIBLE_URL +
                '?asin\x3d' +
                c.ASIN +
                '\x26program\x3d' +
                c.PROGRAM
              break
            case 'BORROW_DEFERRED':
              f.location =
                c.MFA_FIXUP_URL +
                '?asin\x3d' +
                c.ASIN +
                '\x26loanId\x3d' +
                (e && e.requestedReturnLoanId ? e.requestedReturnLoanId : '') +
                '\x26subtype\x3d' +
                c.BORROW_SUB_TYPE +
                '\x26program\x3d' +
                c.PROGRAM +
                '\x26channel\x3d' +
                c.CHANNEL +
                '\x26action\x3d' +
                c.CONTINUE_ACTION +
                '\x26authPageSource\x3dborrowInterrupt\x26authPageSourceVariant\x3dborrowDeferred'
              break
            case 'KLU_ASIN_INELIGIBLE':
              f.location = c.INELIGIBLE_ASIN_URL
              break
            case 'KLU_CUSTOMER_NOT_SUBSCRIBED':
              f.location =
                c.NOT_SUBSCRIBED_URL + '?passThroughAsin\x3d' + c.ASIN + '\x26ref\x3dku_br_aw_ns'
              break
            case 'KLU_CUSTOMER_SUBSCRIBED_WITH_PAYMENT_PROBLEM':
              f.location = c.getPaymentProblemURL(q, c)
              break
            default:
              r(a)
          }
        }
        function r(a) {
          a = 'function' === typeof a.statusCode ? a.statusCode() : a
          e.logError(
            'ERROR',
            null,
            'Error occurred while calling returnAndBorrow: ' + JSON.stringify(a),
          )
          v.hide()
          q.showReturnAndBorrowErrorDialog()
        }
        if (1 > arguments.length)
          return (
            e.logError('FATAL', null, 'ReturnAndBorrowSheetWidget init: widgetContext missing'), !1
          )
        var c = arguments[0],
          q = new e.Helper(c),
          l = d('#' + c.MAIN_CONTAINER_ID),
          p = d('#' + c.SCRIM_SHEET_ID),
          z = l.find('#shelfAlertBox'),
          A = l.find('#shelfNullResponseAlertBox'),
          u = k('#' + c.MAIN_CONTAINER_ID + ' #returnAndContinueButton'),
          x = new m.ManualTimeCSM(c.WIDGET_NAME_BOTTOM_SHEET)
        l.css('background-color', c.THEME_COLOR)
        p.css('background-color', q.invertColor(c.THEME_COLOR))
        var y = new g(
            q.getLoans,
            u,
            function () {
              z.removeClass('aok-hidden')
            },
            function () {
              A.removeClass('aok-hidden')
            },
            '#' + c.MAIN_CONTAINER_ID,
            c.WIDGET_NAME_BOTTOM_SHEET,
            x,
          ),
          w = { asin: c.ASIN, program: c.PROGRAM, channel: c.CHANNEL, loanId: '' },
          v = this
        n.declarative('return_and_continue', 'click', function () {
          var a = y.getSelectedLoanIds()
          if (u.isEnabled() && 0 < a.length) {
            var d = [],
              e = 0
            a.forEach(function (a) {
              var b = q.cloneObject(w)
              b.loanId = a
              0 < e++ && (b.asin = '')
              d.push(b)
            })
            q.returnAndBorrow(
              c.WIDGET_NAME_RETURN_AND_BORROW + a.length,
              d,
              b,
              r,
              c.RETURN_AND_BORROW_BUTTON_REF_TAG,
            )
          }
        })
        this.show = function () {
          a('On')
          m.widgetBegin(c.WIDGET_NAME_BOTTOM_SHEET_ELAPSED)
          y.update()
        }
        this.hide = function () {
          a('Off')
          m.widgetEnd(c.WIDGET_NAME_BOTTOM_SHEET_ELAPSED)
        }
        this.borrow = function () {
          m.widgetBegin(c.WIDGET_NAME_BOTTOM_SHEET)
          x.manualWidgetBegin()
          q.returnAndBorrow(c.WIDGET_NAME_BORROW, [w], b, r, c.BORROW_BUTTON_REF_TAG, x)
        }
      },
    }
  })
  h.when('jQuery').register('KU-ReturnAndBorrowSheet-PaymentProblemURL', function (d) {
    return {
      getPaymentProblemURL: function (f, b) {
        b.PAYMENT_PROBLEM_URL = b.PAYMENT_PROBLEM_URL
          ? b.PAYMENT_PROBLEM_URL
          : '/gp/digital/fiona/clarification/prime-borrow-failed'
        b.COR = b.COR ? b.COR : d('#buyOneClick').attr('cor.0')
        return (
          b.PAYMENT_PROBLEM_URL +
          '?ASIN\x3d' +
          b.ASIN +
          '\x26cor\x3d' +
          b.COR +
          '\x26error\x3dklu_customer_subscribed_with_payment_problem'
        )
      },
    }
  })
  h.when('jQuery', 'A').execute('KU-DP-BottomSheet-Bind', function (d, n) {
    function b(a) {
      m = !0
      h.now('KU-ReturnAndBorrowSheet').execute('KU-DP-BottomSheet-Bind', function (a) {
        a === l &&
          (e.hide(),
          k.removeClass('aok-hidden'),
          f.ue && ue.count('ku_bottom_sheet_spinner_displayed', 1))
      })
    }
    var k = d('#ku-borrow-button-spinner'),
      e = d('#borrow-button'),
      m = !1
    'undefined' === typeof NativeHost && e.click(b)
    h.when(
      'KU-DP-BottomSheet-Context',
      'KU-ReturnAndBorrowSheet-PaymentProblemURL',
      'KU-ReturnAndBorrowSheet',
      'BottomSheet-Surface-Helper',
    ).register('KU-DP-BottomSheet-Module', function (a, f, h, g) {
      k.hasClass('aok-hidden') || (k.addClass('aok-hidden'), e.show())
      e.unbind('click', b)
      a = a.widgetContext
      a.CHANNEL = a.CHANNEL ? a.CHANNEL : 'ALL_YOU_CAN_READ'
      a.RnB_PAGE_URL = a.RnB_PAGE_URL ? a.RnB_PAGE_URL : '/kindle-dbs/hz/return?_encoding\x3dUTF8'
      a.CONTINUE_ACTION = a.CONTINUE_ACTION ? a.CONTINUE_ACTION : 'borrow'
      a.WIDGET_NAME_BOTTOM_SHEET_ELAPSED = a.WIDGET_NAME_BOTTOM_SHEET_ELAPSED
        ? a.WIDGET_NAME_BOTTOM_SHEET_ELAPSED
        : 'kuDpBottomSheetElapsed'
      a.MFA_FIXUP_URL = a.MFA_FIXUP_URL ? a.MFA_FIXUP_URL : '/kindle-dbs/ku/auth-fixup'
      a.PINCHOT_BORROW_INTERRUPT_ELIGIBLE_URL = a.PINCHOT_BORROW_INTERRUPT_ELIGIBLE_URL
        ? a.PINCHOT_BORROW_INTERRUPT_ELIGIBLE_URL
        : '/kindle-dbs/ku/borrow-interrupt'
      a.INELIGIBLE_ASIN_URL = a.INELIGIBLE_ASIN_URL ? a.INELIGIBLE_ASIN_URL : '/dp/' + a.ASIN
      a.NOT_SUBSCRIBED_URL = a.NOT_SUBSCRIBED_URL ? a.NOT_SUBSCRIBED_URL : '/kindle-dbs/ku2'
      a.THEME_COLOR = a.THEME_COLOR ? a.THEME_COLOR : d('body').css('background-color')
      a.NON_AJAX_RNB_ENDPOINT = a.NON_AJAX_RNB_ENDPOINT
        ? a.NON_AJAX_RNB_ENDPOINT
        : '/kindle-dbs/hz/returnAndBorrow'
      a.CHOOSE_DEVICE_PAGE_URL = a.CHOOSE_DEVICE_PAGE_URL
        ? a.CHOOSE_DEVICE_PAGE_URL
        : '/kindle-dbs/clarification/choose-device'
      a.getPaymentProblemURL = f.getPaymentProblemURL
      var l = new h.ReturnAndBorrowSheetWidget(a)
      'undefined' === typeof NativeHost &&
        e.click(function (a) {
          a.preventDefault()
          l.borrow()
          return !1
        })
      n.declarative &&
        'function' === typeof n.declarative &&
        n.declarative('collapseBottomSheet', 'click', function () {
          l.hide()
        })
      g && 'function' === typeof g.orientationChange && g.orientationChange(l.hide)
      m && l.borrow()
      return { borrow: l.borrow }
    })
  })
})
