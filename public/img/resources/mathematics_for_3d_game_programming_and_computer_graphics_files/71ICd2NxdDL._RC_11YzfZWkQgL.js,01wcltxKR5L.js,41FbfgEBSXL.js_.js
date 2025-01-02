;(function (r) {
  var u = window.AmazonUIPageJS || window.P,
    x = u._namespace || u.attributeErrors,
    h = x ? x('QTipsWebLibrary', '') : u
  h.guardFatal
    ? h.guardFatal(r)(h, window)
    : h.execute(function () {
        r(h, window)
      })
})(function (r, u, x) {
  ;(function () {
    r.when('jQuery', 'QTipsConstants', 'ready').register('QTipLibrary', function (h, d) {
      var a = {
        Model: function (a) {
          this.attributes = a || {}
          this.set(a)
          this.initialize.apply(this, arguments)
        },
      }
      h.extend(a.Model.prototype, {
        initialize: function () {},
        get: function (a) {
          if (this.attributes && this.attributes.hasOwnProperty(a)) return this.attributes[a]
        },
        has: function (a) {
          return null !== this.get(a) && this.get(a) !== x
        },
        set: function (a) {
          for (var d in a) a.hasOwnProperty(d) && (this.attributes[d] = a[d])
        },
        unset: function (a) {
          delete this.attributes[a]
        },
        parse: function (a, d) {
          return a
        },
        toJson: function () {
          return this.attributes ? JSON.stringify(this.attributes) : ''
        },
      })
      a.Collection = function (a) {
        this.models = a || {}
        this.initialize.apply(this, arguments)
      }
      h.extend(a.Collection.prototype, {
        initialize: function () {},
        at: function (a) {
          if (this.models && this.models.hasOwnProperty(a)) return this.models[a]
        },
        add: function (a) {
          a && (this.models[this.modelLength()] = a)
        },
        remove: function (a) {
          for (var d in this.models) this.models[d] === a && delete this.models[d]
        },
        create: function (a) {
          a = this.parse(a)
          for (var d in a) a.hasOwnProperty(d) && this.add(a[d])
        },
        _prepareModel: function (e) {
          if (this.model && e) {
            for (var f in e)
              if (e.hasOwnProperty(f)) {
                var c = e[f]
                d.regex.numberRegex.test(c) && (c = Number(c))
                e[f] = c
              }
            e = new a.Model(e)
          }
          return e
        },
        set: function (a) {
          this.model = a
        },
        modelLength: function () {
          if (this.models) return Object.keys(this.models).length
        },
        parse: function (a, d) {
          return a
        },
        toJson: function () {
          return JSON.stringify(this.models)
        },
      })
      a.View = function (a) {
        this.tagName = a || '\x3cdiv/\x3e'
        this.template = this.template || ''
        this.initialize.apply(this, arguments)
      }
      h.extend(a.View.prototype, {
        events: {},
        initialize: function () {},
        render: function () {},
        remove: function () {},
        _removeElement: function (a) {
          a = h(a)
          this.isDefined(a) &&
            this.isDefined(a[0]) &&
            (a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a))
        },
        setElement: function (a, d) {
          h(a).append(d)
        },
        getElement: function (a) {
          if ((a = h(a)) && 0 < a.length) return a[0].lastChild
        },
        add: function (a, d) {
          d = this._createElement(this.template, d)
          this.setElement(a, d)
          return d
        },
        _createElement: function (a, d) {
          a = this._processTemplate(a, d)
          return h(this.tagName).html(a)
        },
        _processTemplate: function (a, f) {
          var c = a.match(d.regex.templateSpliterRegex)
          if (c)
            for (var b = 0; b < c.length; b++) {
              var e = c[b].match(/\w+/)[0]
              f && f.has(e) && (a = a.replace(c[b], f.get(e)))
            }
          return a
        },
        isDefined: function (a) {
          return null !== a && a !== x
        },
      })
      a.Model.extend =
        a.Collection.extend =
        a.View.extend =
          function (a, d) {
            var c = this,
              b =
                a && 'object' === typeof a && a.hasOwnProperty('constructor')
                  ? a.constructor
                  : function () {
                      return c.apply(this, arguments)
                    }
            h.extend(b, c, d)
            d = function () {
              this.constructor = b
            }
            d.prototype = c.prototype
            b.prototype = new d()
            a && h.extend(b.prototype, a)
            b.__super__ = c.prototype
            return b
          }
      return a
    })
  })()
  ;(function () {
    r.when('A', 'a-sheet', 'QTips').execute(function (h, d, a) {
      h.on('a:sheet:beforeShow', function (d) {
        a.view.dismissAndRender()
      })
      h.on('a:sheet:afterHide', function (d) {
        a.view.dismissAndRender()
      })
    })
    r.when('A', 'a-popover', 'QTips').execute(function (h, d, a) {
      h.on('a:popover:beforeShow', function (d) {
        a.view.dismissAndRender()
      })
      h.on('a:popover:afterHide', function (d) {
        a.view.dismissAndRender()
      })
    })
    r.when('A', 'all-offers-display-content-loader', 'QTips').execute(function (h, d, a) {
      h.on('aod-event-opened', function (d) {
        a.view.dismissAndRender()
      })
      h.on('aod-event-closed', function (d) {
        a.view.dismissAndRender()
      })
    })
    r.when(
      'A',
      'jQuery',
      'QTipsConstants',
      'QTipLibrary',
      'QTipsStyles',
      'QTipsMetrics',
      'SAConfig',
      'NestedShoppingAidHelper',
      'ShoppingAidsGenericUtils',
      'AnchorBasedSAUtils',
      'SAMetricConstants',
      'SAPAttributionHandler',
      'SAFeature',
      'FeatureAttributionConstants',
      'SACommonConstants',
    ).register('QTips', function (h, d, a, e, f, c, b, l, g, k, n, m, p, v, z) {
      var q = {
          isDefined: function (a) {
            return g.isDefined(a)
          },
          platformCheck: function () {
            return g.platformCheck()
          },
          cleanUpCachingInstrumentation: function () {
            var a = g.removeFromLocalStorageIfPresent('SAcacheConfig_4')
            c.incrementCounter('SAcacheConfig_4_' + a)
          },
          getCurrentLoP: function () {
            return g.getCookie(b.cookies.language) || b.defaultLoP
          },
          getPreviousLoP: function () {
            return g.isMShop() && g.isAndroidDevice()
              ? g.getQueryParameter('previous_lop')
              : g.getFromLocalStorage('previous_lop') || b.defaultLoP
          },
          saveCurrentLoP: function () {
            g.setInLocalStorage('current_lop', this.getCurrentLoP())
          },
          savePreviousLoP: function () {
            if (!g.isMShop() || !g.isAndroidDevice()) {
              var a = g.getFromLocalStorage('current_lop')
              a && g.setInLocalStorage('previous_lop', a)
            }
          },
          isGuidedTour: function (a) {
            return 'guidedtour' === a.get('dismissalType')
          },
          updateRetryCount: function (a) {
            var d = a.get('retryCount')
            ;-1 <= d && a.set({ retryCount: d - 1 })
          },
        },
        t = {}
      t.model = new e.Model()
      t.utils = q
      t.addStyles = function () {
        var a = document.createElement('style')
        a.innerHTML = f
        document.head.appendChild(a)
      }
      var P = e.Collection.extend({
        model: t.model,
        elementAnchorList: [],
        invokingEventsMap: {},
        auiTriggerHandler: {},
        tipStartTime: 0,
        isSet: !1,
        registerEvent: function (a, d) {
          if (d) {
            d = a.eventType
            var b = a.invokingEventElement
            a = this
          } else (d = a.data.eventType), (b = a.data.invokingEventElement), (a = a.data.self)
          if (d in a.invokingEventsMap)
            g.isDefined(a.invokingEventsMap[d]) &&
              -1 === a.invokingEventsMap[d].indexOf(b) &&
              a.invokingEventsMap[d].push(b)
          else {
            var c = []
            c.push(b)
            a.invokingEventsMap[d] = c
          }
        },
        add: function (b) {
          try {
            if (
              (c.incrementCounter('qtips_add_initiated'),
              g.isDefined(b) &&
                g.isDefined(b.get('elementAnchor')) &&
                (b.get('weblabTriggerOnlyFlag') ||
                  (g.isDefined(b.get('maxDisplayCount')) && 0 < b.get('maxDisplayCount'))))
            ) {
              var A = b.get('elementAnchor')
              var e = isNaN(A) ? k.processAnchor(A, a.regex.anchorSpliterRegex) : A
              b.set({ elementAnchor: e })
              A = {}
              A[b.get('elementAnchor')] = b.get('sequenceNum')
              A.schedulingType = b.get('schedulingType')
              b.set({ retryCount: a.view.retryCount })
              b.get('onDemand') ? this.elementAnchorList.unshift(A) : this.elementAnchorList.push(A)
              this.models[b.get('elementAnchor')] = b
              var y = b.get('invokingEventElement'),
                l = b.get('invokingEventType')
              if (
                g.isDefined(y) &&
                0 < y.length &&
                g.isDefined(l) &&
                0 < l.length &&
                l.toLowerCase() !== a.PartnerEvent
              )
                (y = k.processAnchor(y, a.regex.anchorSpliterRegex)),
                  d(y).bind(
                    l,
                    { eventType: l, invokingEventElement: y, self: this },
                    this.registerEvent,
                  )
              else if (g.isDefined(y) && 0 < y.length && g.isDefined(l) && 0 < l.length) {
                var f = h.on(y, function () {
                  t.collection.registerEvent({ eventType: l, invokingEventElement: y }, !0)
                })
                this.auiTriggerHandler[y] = f
              }
            }
          } catch (B) {
            c.incrementCounter('qtips_model_undefined'), r.log(B, 'WARN', 'QTips')
          }
        },
        parse: function (a, d) {
          if (q.isDefined(a)) {
            var b = this._prepareModel.bind(this)
            a.forEach(function (d, c, A) {
              a[c] = b(d)
            })
            return a
          }
        },
      })
      t.collection = new P()
      e = e.View.extend({
        isDismissInvoked: !0,
        isToolTipSafeToBeDisplayed: !0,
        isAnchorDescriptionUpdated: !1,
        nativeToolTipDisplayBackoffMap: {},
        currentSequence: 0,
        qtipsId: '#qtips',
        highlighterId: '#sa-highlighter',
        pageAnchor: 'body',
        qtipDismissIcon: '#qtip-dismiss-cross',
        qtipVideoId: '#qtip-video',
        popoverClass: a.popOverAnchors.popoverClass,
        searchSugesstions: a.popOverAnchors.searchSugesstions,
        searchFilterPage: a.popOverAnchors.searchFilterPage,
        anchor: '#buyNow',
        defaultArrowPosition: 'topright',
        qtipThumbnailId: '#qtip-thumbnail',
        qtipThumbnailTextId: '#qtip-thumbnail-text',
        identifier: '',
        dismissalEvent: '',
        scrollHideToolTipEvent: 'scroll.hideToolTip',
        scrollUpdateCoordinateEvent: 'scroll.updateCoordinate',
        scrollEndUpdateCoordinateEvent: 'scrollend.updateCoordinate',
        scrollAnimationStopEvent: 'scroll.animateStop',
        collection: t.collection,
        events: {
          'touchstart click keyup': 'dismissAndRender',
          scroll: 'dismissAndRender',
          orientationchange: 'dismissAndRender',
          'blur focus': 'dismissOrRender',
          'visibilitychange webkitvisibilitychange': 'visibilityChange',
        },
        eventHandlers: {},
        toolTipVideoPlayed: {},
        pageType: 'unknown',
        setPageType: function (a) {
          a && (this.pageType = a)
        },
        getPageType: function () {
          return this.pageType
        },
        addStaticToolTipHandlers: function (a) {
          if (a.get('videoSource')) {
            var b = this,
              c = a.get('identifier')
            b.addDismissIconHandlers(a)
            d(b.qtipsId).bind('click.videoToolTip keypress', { model: a, tipId: c }, function (c) {
              if ('keypress' !== c.type || 13 === c.charCode || 32 === c.charCode)
                g.isDefined(b.animateIntervalId) &&
                  (clearInterval(b.animateIntervalId), (b.animateIntervalId = x)),
                  b.animateVideo(a),
                  b.clearFadeOut(),
                  d(b.qtipsId).unbind('click.videoToolTip'),
                  b.addVideoToolTipHandlers(a),
                  b.addDismissIconHandlers(a)
            })
          }
        },
        addDismissIconHandlers: function (a) {
          var b = this
          a = a.get('identifier')
          d(this.qtipDismissIcon).bind(
            'click.staticToolTip',
            { eventType: 'dismissalByUser', tipId: a },
            function (a) {
              var d = a.data.tipId
              b.countLogger('dismiss_icon_clicked', d)
              b.toolTipVideoPlayed && b.toolTipVideoPlayed[d]
                ? b.countLogger('dismissed_after_video_played', d)
                : b.countLogger('dismissed_before_video_played', d)
              b.dismissAndRender.call(b, a)
              a.stopPropagation()
            },
          )
        },
        addVideoToolTipHandlers: function (a) {
          var b = this
          a = a.get('identifier')
          d(this.qtipVideoId).bind('play.videoToolTip', { tipId: a }, function (a) {
            a = a.data.tipId
            b.toolTipVideoPlayed &&
              !b.toolTipVideoPlayed[a] &&
              (b.toolTipVideoPlayed[a] = b.getVideoPlayedMetricsObject())
            b.countLogger('video_played', a)
          })
          d(this.qtipVideoId).bind(
            'timeupdate.videoToolTip',
            { tipId: a },
            h.throttle(function (a) {
              a = a.data.tipId
              var c = d(b.qtipVideoId)
              if (c[0]) {
                c = Math.ceil((4 * c[0].currentTime) / c[0].duration)
                var e = b.toolTipVideoPlayed[a]
                if (b.toolTipVideoPlayed && e && 1 <= c) {
                  if (!e.firstQuarterPublished) {
                    var g = 1
                    e.firstQuarterPublished = !0
                  }
                  2 <= c &&
                    (e.secondQuarterPublished || ((g = 2), (e.secondQuarterPublished = !0)),
                    3 <= c &&
                      (e.thirdQuartedrublished || ((g = 3), (e.thirdQuartedrublished = !0)),
                      4 <= c &&
                        !e.fourthQuarterPublished &&
                        ((g = 4), (e.fourthQuarterPublished = !0))))
                  g && b.countLogger('video_length_played_' + g, a)
                  b.toolTipVideoPlayed[a] = e
                }
              }
            }, 1e3),
          )
          d(this.qtipVideoId).bind('error.videoToolTip', { tipId: a }, function (a) {
            b.countLogger('video_failed_to_load', a.data.tipId)
          })
        },
        getVideoPlayedMetricsObject: function () {
          return {
            firstQuarterPublished: !1,
            secondQuarterPublished: !1,
            thirdQuartedrublished: !1,
            fourthQuarterPublished: !1,
          }
        },
        addAutoDismissalHandlers: function () {
          for (var a in this.events)
            this.events.hasOwnProperty(a) &&
              !g.isDefined(this.eventHandlers[a]) &&
              ((this.eventHandlers[a] = this[this.events[a]].bind(this)),
              d(u).bind(a, this.eventHandlers[a]))
        },
        makeToolTipVisible: function (a, b, c) {
          d(t.view.qtipsId).length &&
            k.isElementVisible(a) &&
            (t.view.adjustCoordinates(
              a,
              c.get('elementArrowPosition') || this.defaultArrowPosition,
              c.get('offsetX'),
              c.get('offsetY'),
              !0,
            ),
            d(t.view.qtipsId).css({ visibility: 'visible' }),
            (b.isToolTipHidden = !1))
        },
        bindScrollHandlers: function (a, b) {
          var c = { isToolTipHidden: !1 }
          d(u).bind(t.view.scrollHideToolTipEvent, function () {
            !c.isToolTipHidden &&
              d(t.view.qtipsId).length &&
              (d(t.view.qtipsId).css({ visibility: 'hidden' }), (c.isToolTipHidden = !0))
          })
          if ('onscrollend' in u)
            d(u).bind(
              t.view.scrollEndUpdateCoordinateEvent,
              h.throttle(function () {
                t.view.makeToolTipVisible(a, c, b)
              }, 50),
            )
          else {
            var e
            d(u).bind(t.view.scrollUpdateCoordinateEvent, function () {
              clearTimeout(e)
              e = setTimeout(function () {
                t.view.makeToolTipVisible(a, c, b)
              }, 50)
            })
          }
          d(u).bind('visibilitychange webkitvisibilitychange', function () {
            t.view.visibilityChange()
            t.view.unbindScrollHandler()
          })
        },
        unbindScrollHandler: function () {
          d(u).unbind(t.view.scrollHideToolTipEvent)
          d(u).unbind(t.view.scrollEndUpdateCoordinateEvent)
          d(u).unbind(t.view.scrollUpdateCoordinateEvent)
        },
        removeStaticToolTipHandlers: function () {
          d(this.qtipDismissIcon).unbind('click.staticToolTip')
          d(this.qtipsId).unbind('click.videoToolTip keypress')
          d(this.qtipVideoId).unbind('play.videoToolTip')
          d(this.qtipVideoId).unbind('error.videoToolTip')
          d(this.qtipVideoId).unbind('timeupdate.videoToolTip')
        },
        removeAutoDismissalHandlers: function () {
          for (var a in this.events)
            this.events.hasOwnProperty(a) &&
              g.isDefined(this.eventHandlers[a]) &&
              (d(u).unbind(a, this.eventHandlers[a]), (this.eventHandlers[a] = x))
        },
        render: function (b) {
          var c = b.get('identifier')
          d(b.get('elementAnchor')).attr('aria-describedby') ||
            ((this.isAnchorDescriptionUpdated = !0),
            d(b.get('elementAnchor')).attr('aria-describedby', 'qtips-text'))
          var e = k.getIndexByAnchor(this.collection.elementAnchorList, this.anchor)
          if (g.weblabTriggerAndCheck(b))
            if (g.isShoppingAidForWeblabTesting(c))
              -1 !== e && this.dismissalHandler(e), this.nextQTip()
            else {
              this.fadeOut(this.remove.bind(this))
              var l = this.addAndPosition(this.anchor, b)
              'hidden' !== document.visibilityState &&
                g.isDefined(l) &&
                (g.hasNoPopover(this.popoverClass, this.searchSugesstions, this.searchFilterPage) ||
                  k.isShoppingAidOverPopoverVisible(
                    b.get('popoverAnchor'),
                    b.get('elementAnchor'),
                  )) &&
                (this.animateIn(b),
                d(this.qtipsId).attr(a.view.saDOMNameAttribute, c),
                'hotspot' !== b.get('tipType') &&
                  ((c = d('.qtips-text').width() + a.view.deltaX),
                  (l = d(this.qtipsId).width()),
                  b.get('videoWidth'),
                  c < l &&
                    !b.get('videoSource') &&
                    !t.utils.isGuidedTour(b) &&
                    (d(this.qtipsId).width(c),
                    a.regex.positionRightRegex.test(b.get('elementArrowPosition')) &&
                      ((c = parseInt(d(this.qtipsId).css('left'), 10) + (l - c) + a.view.deltaX),
                      d(this.qtipsId).css({ left: c }))),
                  (c = b.get('elementDuration') || a.timer.defaultAnimationTime),
                  (l = b.get('toolTipUXChangeAllocatedTreatment')),
                  !g.isDefined(l) ||
                    'C' === l ||
                    (g.isDefined(b.get('videoSource')) && '' !== b.get('videoSource')) ||
                    !g.isPlatformSupportedForToolTipUxExperiment()) &&
                  (this.fadeTimeoutId = setTimeout(this.fadeOut.bind(this), c, this.nextQTip)),
                -1 !== e &&
                  (this.dismissalTimeoutId = setTimeout(
                    this.dismissalHandler.bind(this),
                    a.timer.defaultDismissalCallbackTime,
                    e,
                  )))
            }
          else -1 !== e && this.collection.elementAnchorList.splice(e, 1), this.nextQTip()
        },
        dismissalHandler: function (b) {
          var d = Object.keys(this.collection.elementAnchorList[b])[0],
            c = this.collection.elementAnchorList[b][d],
            e = this.collection.at(d).get('identifier'),
            l = this.collection.at(d).get('contextAwareIndex'),
            f = this.collection.at(d).get('schedulingType'),
            k = this.collection.at(d).get('elementDisplayType'),
            y = this.collection.at(d).get('maxDisplayCount'),
            n = d,
            v = this.collection.at(d).get('videoSource')
          g.isDefined(v) || (v = a.EmptyString)
          var q = this.collection.at(d).get('toolTipUXChangeAllocatedTreatment')
          g.isDefined(q) || (q = a.EmptyString)
          g.isDefined(this.collection.at(d).get('featureAttributionAnchor')) &&
            (n = this.collection.at(d).get('featureAttributionAnchor'))
          var h = this.collection.at(d).get('onDemand'),
            t = this.collection.at(d).get('successResponse')
          this.collection.elementAnchorList.splice(b, 1)
          g.isDefined(this.dismissalCallback) &&
            ((b = {
              identifier: e,
              elementAnchor: d,
              sequenceNum: c,
              schedulingType: f,
              onDemand: h,
              contextAwareIndex: l,
              successResponse: t,
              featureAttributionAnchor: n,
              elementDisplayType: k,
              maxDisplayCount: y,
              videoSource: v,
              toolTipUXChangeAllocatedTreatment: q,
            }),
            this.dismissalCallback(b),
            (d = g.platformCheck()),
            ('html' === k.toLowerCase() || (p.androidFeatureAttribution && d !== z.MSHOP_IPHONE)) &&
              m.enableFeatureAttribution(b))
        },
        dismissByUserHandler: function (b) {
          var d = b.get('elementAnchor'),
            c = b.get('identifier')
          b = b.get('schedulingType')
          var e = this.collection.at(d).get('contextAwareIndex'),
            g = this.collection.at(d).get('onDemand')
          d = this.collection.at(d).get('successResponse')
          c = {
            identifier: c,
            schedulingType: b,
            onDemand: g,
            contextAwareIndex: e,
            successResponse: d,
            userEvent: a.userEvent.optOut,
          }
          q.isDefined(this.dismissalCallback) && this.dismissalCallback(c)
        },
        clickEventHandlerForUserDismissalTip: function (a) {
          d(u).bind('click', function () {
            t.view.dismissAndRender()
          })
        },
        errorCallbackFunction: function (a, b) {
          t.view.moveToolTipToEndOfList(b)
          var d = k.getIndexByAnchor(this.collection.elementAnchorList, b.get('elementAnchor'))
          b.get('nestedSAList') && t.utils.isGuidedTour(b)
            ? t.view.handleGuidedTour(b, 'Error')
            : 'Class not found' === a &&
              (c.incrementCounter('ShoppingAids_CordovaRefactoring_PluginNotFound'),
              this.collection.elementAnchorList.splice(d, 1))
          this.isToolTipSafeToBeDisplayed = !0
          this.nativeToolTipDisplayBackoffMap[b.get('identifier')] = !1
        },
        successCallbackFunction: function (a, b, d, e) {
          var l = b.get('identifier'),
            f = b.get('elementAnchor')
          f = k.getIndexByAnchor(this.collection.elementAnchorList, f)
          g.isDefined(d) &&
            g.isDefined(e) &&
            (b.set({ failureResponse: e }), b.set({ successResponse: d }))
          'displayNativeToolTip' === a
            ? ((this.isToolTipSafeToBeDisplayed = !1),
              (this.nativeToolTipDisplayBackoffMap[l] = !0))
            : 'NativeTipDisplaySuccessful' === a
              ? (this.setPreviousTipDismissalTime(Date.now()),
                (this.isToolTipSafeToBeDisplayed = !0))
              : 'NativeToolTipDisplayStarted' === a
                ? (c.incrementCounter('nativeToolTipShown:'.concat(l)), this.dismissalHandler(f))
                : 'NativeTipNotInView' === a
                  ? ((this.isToolTipSafeToBeDisplayed = !0),
                    'iPhone' === g.platformCheck()
                      ? (c.incrementCounter('nativeToolTipNotInView:'.concat(l)),
                        this.collection.elementAnchorList.splice(f, 1))
                      : (0 < b.get('retryCount')
                          ? ((this.nativeToolTipDisplayBackoffMap[b.get('identifier')] = !1),
                            t.view.moveToolTipToEndOfList(b))
                          : (c.incrementCounter('nativeToolTipNotInView:'.concat(l)),
                            this.collection.elementAnchorList.splice(f, 1)),
                        b.get('nestedSAList') &&
                          t.utils.isGuidedTour(b) &&
                          t.view.handleGuidedTour(b, 'Success', a)))
                  : 'NativeTipDismissed' === a
                    ? (this.setPreviousTipDismissalTime(Date.now()),
                      c.incrementCounter('nativeToolTipDismissed:'.concat(l)),
                      (this.isToolTipSafeToBeDisplayed = !0))
                    : 'NativeToolTipInvalid' === a || 'NativeAnchorNotPresent' === a
                      ? (c.incrementCounter(a.charAt(0) + a.slice(1) + ':'.concat(l)),
                        (this.isToolTipSafeToBeDisplayed = !0),
                        this.collection.elementAnchorList.splice(f, 1),
                        b.get('nestedSAList') &&
                          t.utils.isGuidedTour(b) &&
                          t.view.handleGuidedTour(b, 'Success', a))
                      : 'NativeToolTipCrossClick' === a
                        ? (this.setPreviousTipDismissalTime(Date.now()),
                          c.incrementCounter('nativeToolTipCrossClicked:'.concat(l)),
                          (this.isToolTipSafeToBeDisplayed = !0),
                          t.view.logMetricsUserDismissalTip(Date.now(), b),
                          t.view.dismissByUserHandler(b),
                          t.view.dismissAndRender())
                        : 'NativeToolTipCTAClick' === a &&
                          (this.setPreviousTipDismissalTime(Date.now()),
                          (this.isToolTipSafeToBeDisplayed = !0),
                          t.view.countLogger('native_tooltip_cta_clicked', b.get('identifier')),
                          b.get('nestedSAList')
                            ? t.view.renderNestedSA(b)
                            : t.view.logMetricsUserDismissalTip(Date.now(), b),
                          t.view.dismissAndRender())
        },
        handleGuidedTour: function (a, b, d) {
          var c = a.get('elementAnchor')
          c = k.getIndexByAnchor(this.collection.elementAnchorList, c)
          var e = 'Error' === b ? 'native_tool_tip_error' : 'native_tool_tip_not_in_view'
          if ('Error' === b || 'NativeTipNotInView' === d)
            this.collection.elementAnchorList.splice(c, 1),
              t.view.countLogger(e, a.get('identifier'))
          t.view.renderNestedSA(a)
          t.view.dismissAndRender()
        },
        renderNestedSA: function (a) {
          try {
            var b = JSON.parse(a.get('nestedSAList'))
            b && 0 < b.length && l.dispatchShoppingAidEvent(b)
          } catch (K) {
            t.view.countLogger(
              'ShoppingAids_illegal_input_nested_shopping_aid',
              a.get('identifier'),
            )
          }
        },
        displayNativeToolTip: function (b) {
          var d = this.getPageType(),
            c = { pageType: d }
          b.set({ elementBounceDuration: a.BounceDurationNineSeconds })
          b.set({ elementBackgroundColor: a.DefaultElementBackgroundColor })
          b.set({ elementTextColor: a.DefaultElementTextColor })
          r.when('com.amazon.mobile.mshop.shoppingaids').execute(function (a) {
            a = u.cordova.require('cordova/exec')
            var e = {}
            e.ToolTips = [b.attributes]
            if ('iPhone' === g.platformCheck()) {
              if (b.get('onDemand')) {
                var l = b.get('successResponse')
                var f = b.get('failureResponse')
                b.unset('failureResponse')
                b.unset('successResponse')
              }
              e = [e, c]
            } else
              (e.ToolTips[0][v.featureAttribution] = p.androidFeatureAttribution),
                (e.ToolTips[0].pageType = d)
            document.hidden
              ? (this.isToolTipSafeToBeDisplayed = !0)
              : a(
                  function (a) {
                    t.view.successCallbackFunction(a, b, l, f)
                  },
                  function (a) {
                    t.view.errorCallbackFunction(a, b)
                  },
                  'MShopShoppingAids',
                  'displayNativeToolTip',
                  e,
                )
          })
        },
        moveToolTipToEndOfList: function (a) {
          var b = a.get('elementAnchor'),
            d = k.getIndexByAnchor(this.collection.elementAnchorList, b)
          this.collection.elementAnchorList.splice(d, 1)
          d = {}
          d[b] = a.get('sequenceNum')
          this.collection.elementAnchorList.push(d)
          t.utils.updateRetryCount(a)
        },
        postQTipRender: function () {
          if (this.collection.elementAnchorList) {
            var b = this.collection.elementAnchorList
            this.clearRender()
            for (var d = 0; d < b.length; d++) {
              var c = k.processAnchor(Object.keys(b[d])[0], a.regex.anchorSpliterRegex)
              if (!document.hidden) {
                var e = this.collection.at(c)
                this.identifier = e.get('identifier')
                k.setDependentElement(e)
                if (!this.isToolTipTimeGapLessThanThreshold(e) && this.isToolTipSafeToBeDisplayed)
                  if (
                    'NATIVE' === e.get('elementDisplayType') &&
                    !0 !== this.nativeToolTipDisplayBackoffMap[e.get('identifier')]
                  )
                    (this.isToolTipSafeToBeDisplayed = !1), this.displayNativeToolTip(e)
                  else {
                    var f = e.get('onDemand')
                    if (
                      null !== f &&
                      f &&
                      (f = e.get('failureResponse')) &&
                      'function' === typeof f
                    ) {
                      var p = a.errorCodes.ALREADY_RENDERED
                      f(p)
                      e.set({ failureResponse: null })
                    }
                    if (e.get('nestedSAList'))
                      try {
                        var z = JSON.parse(e.get('nestedSAList'))
                        if (z && 0 < z.length && !k.isElementPresent(c)) {
                          this.remove()
                          this.collection.elementAnchorList.splice(d, 1)
                          l.dispatchShoppingAidEvent(z)
                          break
                        }
                      } catch (H) {
                        this.countLogger(
                          'ShoppingAids_illegal_input_nested_shopping_aid',
                          e.get('identifier'),
                        )
                      }
                    e.get('scrollToAnchor') &&
                      k.isElementPresent(c) &&
                      !k.isElementVisible(c) &&
                      (this.scrollPageToAnchor(c, e.get('anchorScrollOffset')),
                      (this.adjustCoordTimeoutId = setTimeout(
                        this.adjustCoordinates.bind(this),
                        a.timer.maxAnchorScrollTime + a.timer.anchorReAdjustTime,
                        c,
                        e.get('elementArrowPosition'),
                        e.get('offsetX'),
                        e.get('offsetY'),
                        !1,
                      )))
                    this._conditionalRetryUpdate(e, d)
                    if (
                      k.isElementVisible(c) &&
                      this.isEventCheckSatisfied(e) &&
                      k.isDependentCheckSatisfied(e) &&
                      g.isDefined(b[d])
                    ) {
                      e.get('triggerDependentCheck') &&
                        (e = k.onDemandContextAwareSubstitution(e, a.ShoppingAidsTooltips))
                      this.currentSequence = b[d][c]
                      this.anchor = c
                      b = e.get('elementStartOffset')
                      if (isNaN(b) || 0 > b) b = a.timer.defaultStartOffset
                      g.hasNoPopover(
                        this.popoverClass,
                        this.searchSugesstions,
                        this.searchFilterPage,
                      ) ||
                      k.isShoppingAidOverPopoverVisible(
                        e.get('popoverAnchor'),
                        e.get('elementAnchor'),
                      )
                        ? ((d = e.get('dismissalType')),
                          (z = e.get('toolTipUXChangeAllocatedTreatment')),
                          'hotspot' === e.get('tipType')
                            ? this.removeAutoDismissalHandlers()
                            : (this._shouldFollowDefaultUXExperience(z, e) ||
                                t.view.bindScrollHandlers(c, e),
                              (g.isDefined(d) && -1 !== d.toUpperCase().indexOf('USER')) ||
                              !this._shouldFollowDefaultUXExperience(z, e)
                                ? (this.removeAutoDismissalHandlers(),
                                  g.isDefined(d) &&
                                    'USER' !== d.toUpperCase() &&
                                    this._shouldFollowDefaultUXExperience(z, e) &&
                                    t.view.clickEventHandlerForUserDismissalTip(c))
                                : this.addAutoDismissalHandlers()),
                          g.logClientSideWeblabMetrics(
                            e,
                            n.SHOPPINGAIDS_WEBLAB_IN_POST_QTIP_RENDER,
                          ),
                          (this.renderTimeoutId = setTimeout(this.render.bind(this), b, e)))
                        : (this.renderTimeoutId = setTimeout(this.postQTipRender.bind(this), b))
                      break
                    } else if (
                      ((f = e.get('onDemand')),
                      null !== f && f && (f = e.get('failureResponse')) && 'function' === typeof f)
                    )
                      (p = a.errorCodes.UNKNOWN),
                        k.isElementVisible(c)
                          ? this.isEventCheckSatisfied(e)
                            ? k.isDependentCheckSatisfied(e) ||
                              (p = a.errorCodes.DEPENDANT_CHECK_NOT_SATISFIED)
                            : (p = a.errorCodes.EVENT_CHECK_NOT_SATISFIED)
                          : (p = a.errorCodes.ELEMENT_NOT_VISIBLE),
                        f(p),
                        e.set({ failureResponse: null })
                  }
              }
            }
            g.isDefined(this.renderTimeoutId) ||
              (this.renderTimeoutId = setTimeout(
                this.postQTipRender.bind(this),
                a.timer.defaultStartOffset,
              ))
          }
        },
        isToolTipTimeGapLessThanThreshold: function (a) {
          if (a.get('invokingEventType') || a.get('onDemand')) return !1
          a = Date.now() - this.previousTipDismissalTime
          return 0 < a && a < b.intervalBetweenSuccessiveTips ? !0 : !1
        },
        isEventCheckSatisfied: function (a) {
          var b = a.get('invokingEventType'),
            d = a.get('invokingEventElement'),
            c = this.collection.invokingEventsMap[b]
          if (b && d && (!g.isDefined(c) || -1 === c.indexOf(d))) return !1
          b &&
            d &&
            (g.isDefined(c) || -1 !== c.indexOf(d)) &&
            ((b = a.get('triggerDependentTargeting')),
            g.isDefined(b) &&
              (a.set({ clientSideTargetting: b }), a.set({ triggerDependentCheck: !0 })))
          return !0
        },
        dismissAndRender: function (a) {
          var b = function () {
            this.clearAdjustCoordinates()
            this.clearRender()
            this.fadeOut(function () {
              this.nextQTip()
            })
          }
          g.isDefined(a) && g.isDefined(a.type) && (this.dismissalEvent = a.type)
          var d = h.throttle(b.bind(this), 1e3)
          a && a.data && 'dismissalByUser' === a.data.eventType ? b.call(this) : d.call(this)
        },
        dismissWithId: function (b, c, e) {
          var l = d(this.qtipsId)[0]
          ;(l && l.getAttribute(a.view.saDOMNameAttribute) === b) ||
          (g.isDefined(this.renderTimeoutId) && this.identifier === b)
            ? (this._stopToolTips(), c && 'function' === typeof c && c())
            : e && 'function' === typeof e && e(a.errorCodes.SA_NOT_DISPLAYED)
        },
        _stopToolTips: function () {
          this.clearAdjustCoordinates()
          this.clearRender()
          this.fadeOut(this.remove.bind(this))
        },
        dismissOrRender: function (a) {
          !this.isBlurSet && a && 'blur' === a.type
            ? (this.clearRender(),
              this.clearFadeOut(),
              this.clearAdjustCoordinates(),
              this.fadeOut(this.remove.bind(this)),
              (this.isBlurSet = !0),
              (this.isWindowVisible = x))
            : this.isBlurSet &&
              a &&
              'focus' === a.type &&
              (this.isWindowVisible || this.postQTipRender(), (this.isBlurSet = !1))
        },
        visibilityChange: function () {
          ;(this.isWindowVisible !== x && !0 !== this.isWindowVisible) ||
          'hidden' !== document.visibilityState
            ? !1 === this.isWindowVisible &&
              'hidden' !== document.visibilityState &&
              (this.postQTipRender(), (this.isWindowVisible = !0))
            : (this.isBlurSet ||
                (this.clearFadeOut(),
                this.clearRender(),
                this.clearAdjustCoordinates(),
                this.fadeOut(this.remove.bind(this))),
              (this.isWindowVisible = !1))
        },
        clearRender: function () {
          g.isDefined(this.renderTimeoutId) &&
            (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId)
          g.isDefined(this.dismissalTimeoutId) && clearTimeout(this.dismissalTimeoutId)
          g.isDefined(this.scrollTimeoutId) &&
            (clearTimeout(this.scrollTimeoutId), delete this.scrollTimeoutId)
        },
        clearAdjustCoordinates: function () {
          g.isDefined(this.adjustCoordTimeoutId) &&
            (clearTimeout(this.adjustCoordTimeoutId), delete this.adjustCoordTimeoutId)
        },
        clearFadeOut: function () {
          g.isDefined(this.fadeTimeoutId) && clearTimeout(this.fadeTimeoutId)
        },
        postScrollToPageAnchor: function (a) {
          g.isDefined(this.scrollTimeoutId) ||
            (this.scrollTimeoutId = setTimeout(this.postQTipRender.bind(this), a))
        },
        scrollPageToAnchor: function (b, c) {
          var e = d(b).offset().top - c
          e = parseInt(Math.abs(e - u.scrollY), 10) * a.timer.scrollTimePerPixel
          e = Math.min(a.timer.maxAnchorScrollTime, Math.max(a.timer.minAnchorScrollTime, e))
          d('html, body').animate(
            { scrollTop: d(b).offset().top - c },
            { duration: e, start: this.postScrollToPageAnchor(e) },
          )
        },
        hasNoPopover: function () {
          return g.hasNoPopover(this.popoverClass, this.searchSugesstions, this.searchFilterPage)
        },
        createUserDismissalOkayGotItToolTip: function (b) {
          var d = this._createElement(a.templates.dismissOkayGotItToolTipTemplate, b),
            c = document.createElement('BUTTON')
          b.get('dismissalButtonText')
            ? (c.innerHTML = b.get('dismissalButtonText'))
            : (c.innerHTML = 'OKAY, GOT IT')
          c.addEventListener('click', function () {
            t.view.logMetricsUserDismissalTip(Date.now(), b)
            t.view.dismissByUserHandler(b)
            t.view.dismissAndRender()
          })
          'userOkayGotItBlackBorder' === b.get('dismissalType')
            ? ((c.style.cssText =
                'background-color: Transparent; border-width: thin; text-align: center; border-color: black; border-style: solid; display: table-row; float: right;'),
              (c.style.color = b.get('elementTextColor')))
            : ((c.style.cssText =
                'background-color: Transparent; border: 0; padding-top: 2.5%; padding-right: 2%; display: table-row; float: right;text-decoration: underline;'),
              'userOkayGotItWhiteText' === b.get('dismissalType')
                ? (c.style.color = 'white')
                : (c.style.color = b.get('elementTextColor')))
          d.find('.tooltip-userdismissable').append(c)
          return d
        },
        createUserActionToolTip: function (b) {
          var d = this._createElement(a.templates.userActionToolTipTemplate, b),
            c = d.find('#qtip-button')[0]
          b.get('nestedSAList')
            ? c.addEventListener('click', function () {
                try {
                  var a = JSON.parse(b.get('nestedSAList'))
                  a && 0 < a.length && l.dispatchShoppingAidEvent(a)
                } catch (L) {
                  t.view.countLogger(
                    'ShoppingAids_illegal_input_nested_shopping_aid',
                    b.get('identifier'),
                  )
                }
                t.view.dismissAndRender()
              })
            : c.addEventListener('click', function () {
                t.view.logMetricsUserDismissalTip(Date.now(), b)
                t.view.dismissAndRender()
              })
          return d
        },
        createUpdatedUserActionToolTip: function (b) {
          var d =
            b.get('highlighter') && !0 === b.get('highlighter')
              ? a.templates.userActionToolTipTemplate_V3
              : a.templates.userActionToolTipTemplate_V2
          d = this._createElement(d, b)
          d.find('#qtip-button')[0].addEventListener('click', function () {
            t.view.countLogger('tooltip_cta_clicked', b.get('identifier'))
            b.get('nestedSAList')
              ? t.view.renderNestedSA(b)
              : t.view.logMetricsUserDismissalTip(Date.now(), b)
            t.view.dismissAndRender()
          })
          return d
        },
        logMetricsUserDismissalTip: function (a, b) {
          a = Math.ceil(4 * ((a - t.view.tipStartTime) / b.get('elementDuration')))
          this.countLogger('tooltip_dismissed', b.get('identifier'))
          this.countLogger('tooltip_dismissal_quarter_' + a, b.get('identifier'))
        },
        _isNullOrControlTreatment: function (a) {
          return !g.isDefined(a) || 'C' === a.toUpperCase()
        },
        _shouldFollowDefaultUXExperience: function (a, b) {
          return g.isPlatformSupportedForToolTipUxExperiment()
            ? b.get('videoSource')
              ? !0
              : this._isNullOrControlTreatment(a)
            : !0
        },
        _isTreatmentT1: function (a) {
          return g.isDefined(a) && 'T1' === a.toUpperCase()
        },
        _replaceToolTipWidth: function (a, b) {
          return a.replace(/<%\s*newUXToolTipWidth\s*%>/, b)
        },
        _generateTemplateBasedUponTextDirection: function (b) {
          b = b.get('elementValue')
          var d = a.templates.dismissNew36cross36Template
          'rtl' === document.dir && (d = a.templates.dismissNew36cross36TemplateRtl)
          return g.isDefined(b)
            ? 21 < b.length
              ? this._replaceToolTipWidth(d, 90)
              : 17 < b.length
                ? this._replaceToolTipWidth(d, 85)
                : 11 < b.length
                  ? this._replaceToolTipWidth(d, 78)
                  : this._replaceToolTipWidth(d, 75)
            : this._replaceToolTipWidth(d, 78)
        },
        addAndPosition: function (b, c) {
          var e,
            f = c.get('toolTipUXChangeAllocatedTreatment')
          if (c.get('videoSource') || !g.isPlatformSupportedForToolTipUxExperiment())
            c.set({ elementBackgroundColor: a.DefaultElementBackgroundColor }),
              c.set({ elementTextColor: a.DefaultElementTextColor }),
              c.set({ elementBorderColor: a.DefaultElementBorderColor })
          var k = (e =
            c.get('dismissalType') && t.utils.isGuidedTour(c)
              ? this.createUpdatedUserActionToolTip(c)
              : c.get('elementCTA')
                ? this.createUserActionToolTip(c)
                : 'userCross' === c.get('dismissalType')
                  ? this._shouldFollowDefaultUXExperience(f, c)
                    ? this._createElement(a.templates.dismissCrossToolTipTemplate, c)
                    : this._createElement(this._generateTemplateBasedUponTextDirection(c), c)
                  : c.get('dismissalType') && -1 !== c.get('dismissalType').indexOf('userOkayGotIt')
                    ? this._shouldFollowDefaultUXExperience(f, c)
                      ? this.createUserDismissalOkayGotItToolTip(c)
                      : this._createElement(this._generateTemplateBasedUponTextDirection(c), c)
                    : 'hotspot' === c.get('tipType') && g.isDefined(c.get('nestedSAList'))
                      ? this._createElement(a.templates.hotspotTemplate, c)
                      : this._shouldFollowDefaultUXExperience(f, c)
                        ? this._createElement(a.templates.defaultTemplate, c)
                        : this._createElement(this._generateTemplateBasedUponTextDirection(c), c))
          if (c.get('videoSource')) {
            c.get('videoThumbnail') ||
              ((k = c.get('videoSource').split(',')),
              c.set({ videoThumbnail: k[0].replace(/^\s*/, '').replace(/\s*$/, '') }),
              1 < k.length
                ? c.set({ videoSource: k[1].replace(/^\s*/, '').replace(/\s*$/, '') })
                : c.set({ videoSource: '' }))
            k = this._createElement(a.templates.preVideoTemplate, c)
            var p = this._createElement(a.templates.dismissIconTemplate, c)
            e.find('span.qtips-text').html(p).append(k)
            k = e
          }
          this.setElement(this.pageAnchor, k)
          d(this.qtipsId).hide()
          this.addStaticToolTipHandlers(c)
          var z = this
          ;('userCross' === c.get('dismissalType') ||
            t.utils.isGuidedTour(c) ||
            (g.isDefined(f) && this._isTreatmentT1(f))) &&
            d('#tooltip-dismiss-cross').click(function () {
              t.view.unbindScrollHandler()
              t.view.dismissByUserHandler(c)
              t.view.dismissAndRender()
            })
          d(k).click(function () {
            if ('hotspot' === c.get('tipType'))
              l.dispatchShoppingAidEvent(JSON.parse(c.get('nestedSAList'))),
                t.view.dismissAndRender()
            else if (c && c.attributes) {
              var a = c.attributes.identifier
              g.isDefined(z.terminationCallback) && z.terminationCallback({ identifier: a })
            }
          })
          if (0 < d(this.qtipsId).length) {
            f = d(u).width() * a.view.maxWidthFactor
            f = f >= a.view.maxWidth ? a.view.maxWidth : f
            if (c.get('videoSource') && c.get('videoWidth') > d(this.qtipsId).width()) {
              p = d(this.qtipsId).width()
              d(this.qtipsId).width(c.get('videoWidth') + a.view.deltaX)
              var m = c.get('videoWidth')
              a.regex.positionRightRegex.test(c.get('elementArrowPosition')) &&
                ((p = parseInt(d(this.qtipsId).css('left'), 10) - (m - p) - a.view.deltaX),
                d(this.qtipsId).css({ left: p }))
            }
            d(this.qtipsId).width() > f &&
              (d(this.qtipsId).width(f), c.set({ videoWidth: f - a.view.deltaX }))
            this.setThumbnailCss(e, c)
            if (b !== this.pageAnchor)
              if ('hotspot' === c.get('tipType')) {
                if (
                  !this.adjustHotspotPosition(
                    b,
                    c.get('elementPositionY'),
                    c.get('elementPositionX'),
                  )
                )
                  return
              } else if (
                !this.adjustCoordinates(
                  b,
                  c.get('elementArrowPosition') || this.defaultArrowPosition,
                  c.get('offsetX'),
                  c.get('offsetY'),
                  !1,
                )
              )
                return
            return k
          }
        },
        setThumbnailCss: function (b, e) {
          if (e.get('videoSource')) {
            var g = 0.25 * d(this.qtipsId).width(),
              l = 0.15 * d(this.qtipsId).width(),
              f = b.find('i#qtip-dismiss-cross').height()
            b.find('div#qtip-thumbnail').css({ width: g + 'px', height: l + 'px' })
            b.find('img#qtip-thumbnail-image').css({ width: g + 'px', height: l + 'px' })
            b.find('img#qtip-thumbnail-image').attr('aria-hidden', 'true')
            b.find('img#qtip-thumbnail-play').css({
              width: 0.64 * l + 'px',
              height: 0.64 * l + 'px',
            })
            var k = d(this.qtipsId).height() > l ? d(this.qtipsId).height() : l
            b.find('img#qtip-thumbnail-play').css({
              left: (g - 0.64 * l) / 2 + 'px',
              top: (k - 0.64 * l) / 2 + 'px',
            })
            b.find('i#qtip-dismiss-cross').css({
              position: 'relative',
              right: '0px',
              top: (k - f) / 2 + 'px',
            })
            try {
              var p = JSON.parse(e.get('tooltipUIStrings')).videoTooltipPlayButtonString
            } catch (H) {
              c.incrementCounter('invalid_ui_string_input'), (p = a.VideoPlayButtonDefaultAltText)
            }
            b.find('img#qtip-thumbnail-play').attr('aria-label', p)
          }
        },
        animateIn: function (b) {
          d(this.qtipsId).fadeIn(a.timer.defaultFadeTime)
          var c = b.get('elementBounceDuration')
          0 < c &&
            'hotspot' !== b.get('tipType') &&
            setTimeout(this.bounceAnimate.bind(this), 0, c, b)
        },
        animateVideo: function (b) {
          var c = this,
            e = d(c.qtipsId).prop('classList'),
            g = !1,
            l
          for (l = 0; l < e.length; l++) a.regex.positionTopRegex.test(e[l]) && (g = !0)
          d(c.qtipDismissIcon).css({ top: '' })
          e = c._createElement(a.templates.videoTemplate, b)
          c._createElement(a.templates.dismissIconTemplate, b)
          var f = d(c.qtipThumbnailTextId).position()
          l = d(c.qtipsId).position().top
          var k = d(c.qtipsId).height()
          d(c.qtipThumbnailId).remove()
          d(c.qtipThumbnailTextId).css({ 'padding-left': '', 'padding-bottom': '10px' })
          var p = d(c.qtipThumbnailTextId).height()
          d(c.qtipThumbnailTextId).css({
            position: 'absolute',
            left: f.left + 'px',
            top: f.top + 'px',
          })
          d(c.qtipsId).find('span.qtips-text').append(e)
          d(c.qtipThumbnailTextId).animate(
            { left: '-\x3d' + f.left + 'px' },
            {
              duration: 800,
              queue: !1,
              complete: function () {
                d(c.qtipThumbnailTextId).css({ position: '', left: '', top: '' })
              },
            },
          )
          d(c.qtipVideoId).removeAttr('controls')
          g
            ? ((g = e.height()),
              d(c.qtipVideoId).css({ height: e.height() }),
              d(c.qtipVideoId).attr('poster', b.get('videoThumbnail')),
              e.hide(),
              e.animate(
                { height: 'toggle' },
                {
                  duration: 1e3,
                  queue: !1,
                  complete: function () {
                    d(c.qtipVideoId).attr('controls', '')
                  },
                },
              ))
            : ((g = e.height() + p),
              d(c.qtipVideoId).css({ height: e.height() }),
              d(c.qtipVideoId).attr('poster', b.get('videoThumbnail')),
              e.hide(),
              d(c.qtipsId).css({ top: l + k + 'px' }),
              e.animate(
                { height: 'toggle' },
                {
                  duration: 800,
                  queue: !1,
                  complete: function () {
                    d(c.qtipVideoId).attr('controls', '')
                  },
                },
              ),
              d(c.qtipsId)
                .animate(
                  { marginTop: -g + 'px' },
                  { duration: 1e3, queue: !1, complete: function () {} },
                )
                .css('overflow', 'visible'))
        },
        bounceAnimate: function (b, c) {
          var e = this,
            g = c.get('toolTipUXChangeAllocatedTreatment'),
            l = a.bounceParameters.amplitude
          this._shouldFollowDefaultUXExperience(g, c) ||
            d(u).bind(t.view.scrollAnimationStopEvent, function () {
              e.animateIntervalId && (clearInterval(e.animateIntervalId), (e.animateIntervalId = x))
              d(u).unbind(t.view.scrollAnimationStopEvent)
            })
          this.animate({
            delay: 10,
            duration: b,
            delta: function (b) {
              return (
                Math.pow(Math.E, -1 * a.bounceParameters.gamma * b) *
                Math.cos(a.bounceParameters.beta * b - a.bounceParameters.alpha)
              )
            },
            anchor: this.qtipsId,
            basePosition: d(this.qtipsId).position().top,
            step: function (a) {
              d(this.anchor).css({ top: this.basePosition - l * a + 'px' })
            },
          })
        },
        animate: function (a) {
          var b = Date.now()
          this.tipStartTime = b
          this.animateIntervalId &&
            (clearInterval(this.animateIntervalId), (this.animateIntervalId = x))
          this.animateIntervalId = setInterval(
            function () {
              var d = (Date.now() - b) / a.duration
              1 < d && (d = 1)
              var c = a.delta(d)
              a.step(c)
              1 === d && (clearInterval(this.animateIntervalId), (this.animateIntervalId = x))
            }.bind(this),
            a.delay,
          )
        },
        fadeOut: function (b) {
          g.isDefined(b)
            ? 0 < d(this.qtipsId).length
              ? (d(this.qtipsId).fadeOut(a.timer.defaultFadeTime, b.bind(this)),
                -1 !== k.getIndexByAnchor(this.collection.elementAnchorList, this.anchor)
                  ? this.setPreviousTipDismissalTime(0)
                  : this.setPreviousTipDismissalTime(Date.now()))
              : ((b = b.bind(this)), b())
            : d(this.qtipsId).fadeOut(a.timer.defaultFadeTime)
          g.isDefined(this.animateIntervalId) &&
            (clearInterval(this.animateIntervalId), (this.animateIntervalId = x))
        },
        nextQTip: function () {
          this.clearFadeOut()
          this.clearAdjustCoordinates()
          this.isAnchorDescriptionUpdated &&
            (d(this.anchor).removeAttr('aria-describedby'), (this.isAnchorDescriptionUpdated = !1))
          g.isDefined(this.collection.elementAnchorList) &&
          0 < this.collection.elementAnchorList.length
            ? (this.remove(), this.postQTipRender())
            : this.stopQTips()
        },
        stopQTips: function () {
          this.removeAutoDismissalHandlers()
          this.removeStaticToolTipHandlers()
          var b = this.collection.invokingEventsMap,
            c
          for (c in b)
            if (b.hasOwnProperty(c) && g.isDefined(b[c]))
              for (var e = b[c], l = 0; l < e.length; l++)
                c.toLowerCase() === a.PartnerEvent
                  ? g.detachTrigger(e[l], this.collection.auiTriggerHandler[e[l]].callback)
                  : d(e[l]).unbind(c, this.collection.registerEvent)
          this.collection.invokingEventsMap = {}
          this.fadeOut(this.remove.bind(this))
          this.clearRender()
          this.clearAdjustCoordinates()
        },
        removeAllDirectionToolTipArrowClasses: function () {
          d(this.qtipsId).removeClass('qtips-arrow-topleft')
          d(this.qtipsId).removeClass('qtips-arrow-topright')
          d(this.qtipsId).removeClass('qtips-arrow-topmiddle')
          d(this.qtipsId).removeClass('qtips-arrow-bottomleft')
          d(this.qtipsId).removeClass('qtips-arrow-bottomright')
          d(this.qtipsId).removeClass('qtips-arrow-bottommiddle')
        },
        adjustCoordinates: function (b, e, g, l, f) {
          var k = this,
            p = d(this.qtipsId)
          if (0 >= p.length) return !1
          f &&
            (this.removeAllDirectionToolTipArrowClasses(),
            (f = 'qtips-arrow-' + e),
            d(this.qtipsId).hasClass(f) || d(this.qtipsId).addClass(f))
          f = d(b)[0].getBoundingClientRect()
          var z = d(b).offset().top - f.top || 0
          b = a.view.arrowHeight + a.view.marginFactor * a.view.deltaY
          if ('topleft' === e) {
            var m = f.left
            var n = f.bottom + a.view.arrowHeight + a.view.deltaY
          } else if ('bottomleft' === e) (m = f.left), (n = f.top - Math.abs(p.height()) - b)
          else if ('bottomright' === e)
            (m = f.right - Math.abs(p.width()) - a.view.deltaX),
              (n = f.top - Math.abs(p.height()) - b)
          else if ('topright' === e)
            (m = f.right - Math.abs(p.width()) - a.view.deltaX),
              (n = f.bottom + a.view.arrowHeight + a.view.deltaY)
          else if ('topmiddle' === e) {
            var v = f.right - f.left
            m = f.left + parseFloat(((v - Math.abs(p.width()) - a.view.deltaX) / 2).toFixed(2))
            n = f.bottom + a.view.arrowHeight + a.view.deltaY
            v = parseFloat((Math.abs(p.width()) / 2).toFixed(2))
            this._setClassLeftStyleProperty('qtips-arrow-topmiddle', v + 'px')
            this._setHighlighterClassLeftStyleProperty('sa-highlighter-topmiddle', v + 'px')
          } else if ('bottommiddle' === e)
            (v = f.right - f.left),
              (m = f.left + parseFloat(((v - Math.abs(p.width()) - a.view.deltaX) / 2).toFixed(2))),
              (n = f.top - Math.abs(p.height()) - b),
              (v = parseFloat((Math.abs(p.width()) / 2).toFixed(2))),
              this._setClassLeftStyleProperty('qtips-arrow-bottommiddle', v + 'px'),
              this._setHighlighterClassLeftStyleProperty('sa-highlighter-bottommiddle', v + 'px')
          else return !1
          g && (m += (g / 100) * p.width())
          l && (n += (l / 100) * p.height())
          g = u.innerHeight || d(u).height()
          0 > n
            ? ((n = f.bottom + a.view.arrowHeight + a.view.deltaY),
              'bottomleft' === e
                ? (d(this.qtipsId)
                    .removeClass('qtips-arrow-bottomleft')
                    .addClass('qtips-arrow-topleft'),
                  d(this.highlighterId)
                    .removeClass('sa-highlighter-bottomleft')
                    .addClass('sa-highlighter-topleft'))
                : 'bottomright' === e
                  ? (d(this.qtipsId)
                      .removeClass('qtips-arrow-bottomright')
                      .addClass('qtips-arrow-topright'),
                    d(this.highlighterId)
                      .removeClass('sa-highlighter-bottomright')
                      .addClass('sa-highlighter-topright'))
                  : 'bottommiddle' === e &&
                    (d(this.qtipsId)
                      .removeClass('qtips-arrow-bottommiddle')
                      .addClass('qtips-arrow-topmiddle'),
                    d(this.highlighterId)
                      .removeClass('sa-highlighter-bottommiddle')
                      .addClass('sa-highlighter-topmiddle'),
                    (v = parseFloat((Math.abs(p.width()) / 2).toFixed(2))),
                    this._setClassLeftStyleProperty('qtips-arrow-topmiddle', v + 'px'),
                    this._setHighlighterClassLeftStyleProperty(
                      'sa-highlighter-topmiddle',
                      v + 'px',
                    )))
            : f.bottom + Math.abs(p.height()) + b > g &&
              ((n = f.top - Math.abs(p.height()) - b),
              'topleft' === e
                ? (d(this.qtipsId)
                    .removeClass('qtips-arrow-topleft')
                    .addClass('qtips-arrow-bottomleft'),
                  d(this.highlighterId)
                    .removeClass('sa-highlighter-topleft')
                    .addClass('sa-highlighter-bottomleft'))
                : 'topright' === e
                  ? (d(this.qtipsId)
                      .removeClass('qtips-arrow-topright')
                      .addClass('qtips-arrow-bottomright'),
                    d(this.highlighterId)
                      .removeClass('sa-highlighter-topright')
                      .addClass('sa-highlighter-bottomright'))
                  : 'topmiddle' === e &&
                    (d(this.qtipsId)
                      .removeClass('qtips-arrow-topmiddle')
                      .addClass('qtips-arrow-bottommiddle'),
                    d(this.highlighterId)
                      .removeClass('sa-highlighter-topmiddle')
                      .addClass('sa-highlighter-bottommiddle'),
                    (v = parseFloat((Math.abs(p.width()) / 2).toFixed(2))),
                    this._setClassLeftStyleProperty('qtips-arrow-bottommiddle', v + 'px'),
                    this._setHighlighterClassLeftStyleProperty(
                      'sa-highlighter-bottommiddle',
                      v + 'px',
                    )))
          n += z
          g = u.innerWidth || d(u).width()
          0 >= m && f.left + Math.abs(p.width()) + a.view.deltaX >= g
            ? ((p = Math.abs(p.width()) + m), d(this.qtipsId).width(p), (m = a.view.deltaX))
            : m + Math.abs(p.width()) + a.view.deltaX >= g &&
                0 >= f.right - Math.abs(p.width()) - a.view.deltaX
              ? ((e = m + Math.abs(p.width()) + a.view.deltaX - g),
                (p = Math.abs(p.width()) - e),
                d(this.qtipsId).width(p))
              : 0 >= m
                ? 'topright' === e
                  ? ((m = f.left + a.view.deltaX),
                    d(this.qtipsId)
                      .removeClass('qtips-arrow-topright')
                      .addClass('qtips-arrow-topleft'),
                    d(this.highlighterId)
                      .removeClass('sa-highlighter-topright')
                      .addClass('sa-highlighter-topleft'))
                  : 'bottomright' === e
                    ? ((m = f.left + a.view.deltaX),
                      d(this.qtipsId)
                        .removeClass('qtips-arrow-bottomright')
                        .addClass('qtips-arrow-bottomleft'),
                      d(this.highlighterId)
                        .removeClass('sa-highlighter-bottomright')
                        .addClass('sa-highlighter-bottomleft'))
                    : 'topmiddle' == e
                      ? ((m = f.left + a.view.deltaX),
                        d(this.qtipsId)
                          .removeClass('qtips-arrow-topmiddle')
                          .addClass('qtips-arrow-topleft'),
                        d(this.highlighterId)
                          .removeClass('sa-highlighter-topmiddle')
                          .addClass('sa-highlighter-topleft'))
                      : 'bottommiddle' == e &&
                        ((m = f.left + a.view.deltaX),
                        d(this.qtipsId)
                          .removeClass('qtips-arrow-bottommiddle')
                          .addClass('qtips-arrow-bottomleft'),
                        d(this.highlighterId)
                          .removeClass('sa-highlighter-bottommiddle')
                          .addClass('sa-highlighter-bottomleft'))
                : m + Math.abs(p.width()) + a.view.deltaX >= g &&
                  ((g = f.top - Math.abs(p.height()) - b),
                  l && (g += (l / 100) * p.height()),
                  'topleft' === e
                    ? ((m = f.right - Math.abs(p.width()) - a.view.deltaX),
                      d(this.qtipsId)
                        .removeClass('qtips-arrow-topleft')
                        .addClass('qtips-arrow-topright'),
                      d(this.highlighterId)
                        .removeClass('sa-highlighter-topleft')
                        .addClass('sa-highlighter-topright'))
                    : 'bottomleft' === e
                      ? ((m = f.right - Math.abs(p.width()) - a.view.deltaX),
                        0 > g
                          ? (d(this.qtipsId)
                              .removeClass('qtips-arrow-topleft')
                              .addClass('qtips-arrow-topright'),
                            d(this.highlighterId)
                              .removeClass('sa-highlighter-topleft')
                              .addClass('sa-highlighter-topright'))
                          : (d(this.qtipsId)
                              .removeClass('qtips-arrow-bottomleft')
                              .addClass('qtips-arrow-bottomright'),
                            d(this.highlighterId)
                              .removeClass('sa-highlighter-bottomleft')
                              .addClass('sa-highlighter-bottomright')))
                      : 'topmiddle' === e
                        ? ((m = f.right - Math.abs(p.width()) - a.view.deltaX),
                          d(this.qtipsId)
                            .removeClass('qtips-arrow-topmiddle')
                            .addClass('qtips-arrow-topright'),
                          d(this.highlighterId)
                            .removeClass('sa-highlighter-topmiddle')
                            .addClass('sa-highlighter-topright'))
                        : 'bottommiddle' === e &&
                          ((m = f.right - Math.abs(p.width()) - a.view.deltaX),
                          0 > g
                            ? (d(this.qtipsId)
                                .removeClass('qtips-arrow-topmiddle')
                                .addClass('qtips-arrow-topright'),
                              d(this.highlighterId)
                                .removeClass('sa-highlighter-topmiddle')
                                .addClass('sa-highlighter-topright'))
                            : (d(this.qtipsId)
                                .removeClass('qtips-arrow-bottommiddle')
                                .addClass('qtips-arrow-bottomright'),
                              d(this.highlighterId)
                                .removeClass('sa-highlighter-bottommiddle')
                                .addClass('sa-highlighter-bottomright'))))
          'function' === typeof h.$.withoutRtl
            ? (h.$.withoutRtl(function () {
                k._setTooltipsAttributesJquery(m, n)
              }),
              c.incrementCounter('QTipsWebLibrary:withoutRTL_supported'))
            : (this._setTooltipsAttributesJavascript(m, n),
              c.incrementCounter('QTipsWebLibrary:withoutRTL_not_supported'))
          return !0
        },
        adjustHotspotPosition: function (a, b, c) {
          if (0 >= d(this.qtipsId).length) return !1
          var e = d(a)[0].getBoundingClientRect()
          a = d(a).offset().top - b
          c = e.left + c
          d(this.qtipsId).css({ left: c + 'px', top: a + 'px', visibility: 'visible' })
          return !0
        },
        _setTooltipsAttributesJquery: function (a, b) {
          d(this.qtipsId).css({ left: a + 'px', top: b + 'px', visibility: 'visible' })
        },
        _setTooltipsAttributesJavascript: function (a, b) {
          document.getElementById('qtips').style.cssText =
            'left:' + a + 'px;top:' + b + 'px;visibility: visible;'
        },
        _setClassLeftStyleProperty: function (a, b) {
          var c = document.createElement('style')
          document.head.appendChild(c)
          ;(c = c.sheet) &&
            (c.insertRule
              ? c.insertRule('.' + a + '::after { left:' + b + ' }', 0)
              : c.addRule && c.addRule('.' + a + '::after', 'left:' + b))
        },
        _setHighlighterClassLeftStyleProperty: function (a, b) {
          var c = document.createElement('style')
          document.head.appendChild(c)
          ;(c = c.sheet) &&
            (c.insertRule
              ? c.insertRule('.' + a + ' { left:' + b + ' }', 0)
              : c.addRule && c.addRule('.' + a, 'left:' + b))
        },
        _conditionalRetryUpdate: function (b, c) {
          this.dismissalEvent === a.ScrollEvent
            ? (this.dismissalEvent = a.EmptyString)
            : (t.utils.updateRetryCount(b), this.removeIneligibleQtip(b, c))
        },
        remove: function () {
          d(this.qtipsId) && d(this.qtipsId)[0] !== x && this._removeElement(this.qtipsId)
        },
        removeIneligibleQtip: function (a, b) {
          0 > a.get('retryCount') &&
            g.isDefined(b) &&
            (this.collection.elementAnchorList.splice(b, 1), this.clearRender())
        },
        setDismissalCallback: function (a) {
          this.dismissalCallback = a
        },
        setTerminationCallback: function (a) {
          this.terminationCallback = a
        },
        setPreviousTipDismissalTime: function (a) {
          this.previousTipDismissalTime = a
        },
        countLogger: function () {},
        setCountLogger: function (a) {
          this.countLogger = a
        },
      })
      t.view = new e()
      t.addStyles()
      return t
    })
  })()
  ;(function () {
    r.register('QTipsConstants', function () {
      return {
        view: {
          deltaX: 20,
          deltaY: 5,
          marginFactor: 4,
          arrowHeight: 8,
          maxWidth: 300,
          maxWidthFactor: 0.8,
          saDOMNameAttribute: 'data-name',
          retryCount: 4,
        },
        bounceParameters: { alpha: 10, beta: 25, gamma: 1.5, amplitude: 7 },
        timer: {
          defaultStartOffset: 3e3,
          defaultDismissalCallbackTime: 800,
          defaultAnimationTime: 7e3,
          defaultFadeTime: 400,
          minAnchorScrollTime: 400,
          maxAnchorScrollTime: 3e3,
          anchorReAdjustTime: 3e3,
          scrollTimePerPixel: 1,
          searchSuggestionPollTime: 300,
        },
        regex: {
          anchorSpliterRegex: /\|/g,
          templateSpliterRegex: /<%\s*\w*\s*%>/g,
          numberRegex: /^(\-|\+)?([0-9]+|Infinity)$/,
          positionRightRegex: /right/,
          positionTopRegex: /top/,
        },
        popOverAnchors: {
          popoverClass: '.a-popover',
          searchSugesstions: '.s-suggestion-container',
          searchFilterPage: '.sx-page.sx-filter-page.sx-animable',
        },
        templates: {
          dismissNew36cross36Template:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX    %\x3epx; padding : 8px 0px 8px 0px; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e ; border-radius: 12px;} .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d \'tooltip-cross-dismissal\' style\x3d"display: table; width: 100%; padding-left: 12px; padding-right: 0px;"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle;width: \x3c% newUXToolTipWidth %\x3e%; /*margin-bottom: 8px; margin-top: 8px;*/"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cbutton id\x3d"tooltip-dismiss-cross" style\x3d"display: table-cell; text-align: center;  background: \x3c% elementBackgroundColor %\x3e;  border: none; padding: 0px;"\x3e\x3ci class\x3d"a-icon a-icon-close-white" role\x3d"img" style\x3d"margin:10px 12px 10px 10px;"\x3e\x3c/i\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e',
          dismissNew36cross36TemplateRtl:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX    %\x3epx; padding : 8px 0px 8px 0px; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e ; border-radius: 12px;} .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d \'tooltip-cross-dismissal\' style\x3d"display: table; width: 100%; padding-left: 0px; padding-right: 12px;"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle;width: \x3c% newUXToolTipWidth %\x3e%; /*margin-bottom: 8px; margin-top: 8px;*/"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cbutton id\x3d"tooltip-dismiss-cross" style\x3d"display: table-cell; text-align: center;  background: \x3c% elementBackgroundColor %\x3e;  border: none; padding: 0px;"\x3e\x3ci class\x3d"a-icon a-icon-close-white" role\x3d"img" style\x3d"margin:10px 10px 10px 12px;"\x3e\x3c/i\x3e\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e',
          defaultTemplate:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX %\x3epx; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv class\x3d"qtips-textholder aok-relative aok-float-left"\x3e \x3cspan class\x3d"qtips-text"\x3e \x3c% elementValue %\x3e\x3c/span\x3e\x3c/div\x3e \x3c/div\x3e',
          dismissCrossToolTipTemplate:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX    %\x3epx; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d \'tooltip-cross-dismissal\' style\x3d"display: table; width: 100%; padding-left: 2%; padding-right: 0%;"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle;width: 90%; line-height: 1.2;"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cdiv style\x3d"display: table-cell; text-align: center; padding-left: 1%; "\x3e\x3ci id\x3d"tooltip-dismiss-cross" class\x3d"a-icon a-icon-close" role\x3d"img" style\x3d"padding-left: 0%; padding-right: 1%;vertical-align: top; "\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
          dismissOkayGotItToolTipTemplate:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX      %\x3epx; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv class\x3d"tooltip-userdismissable" style\x3d"padding-left: 2%; padding-right: 2%; display: table; border-collapse: collapse;"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-row; text-align: left; line-height: 1.2;"\x3e \x3c% elementValue %\x3e \x3c/span\x3e\x3c/div\x3e \x3c/div\x3e',
          dismissIconTemplate:
            '\x3cdiv id\x3d"qtip-dismiss"\x3e\x3ci id\x3d"qtip-dismiss-cross" class\x3d"a-icon a-icon-close" role\x3d"img" style\x3d"float:right; padding-left:5%;padding-bottom:5%;"\x3e\x3c/i\x3e\x3c/div\x3e',
          preVideoTemplate:
            '\x3cdiv id\x3d"qtip-thumbnail" style\x3d"text-align: left;display: table-cell; vertical-align: middle; border-style: solid; border-width: 1px; border-color: #FFFFFF; position:relative;"\x3e\x3cimg id\x3d"qtip-thumbnail-image"src\x3d\x3c%videoThumbnail%\x3e style\x3d"vertical-align: middle;position:relative"\x3e\x3cimg id\x3d"qtip-thumbnail-play"src\x3d"https://m.media-amazon.com/images/G/31/shopping-aids/play-icon._CB456863585_.png" tabindex\x3d0 role\x3d"button" style\x3d"vertical-align: middle;position:absolute;left:0"\x3e\x3c/div\x3e\x3cspan id\x3d"qtip-thumbnail-text" style\x3d"text-align: left;padding-left: 5%;display: table-cell;vertical-align: middle;width: 75%; line-height:1.2"\x3e\x3c% elementValue %\x3e\x3c/span\x3e',
          videoTemplate:
            '\x3cvideo id\x3d"qtip-video" width\x3d\x3c%videoWidth%\x3e style\x3d"background-color: black;vertical-align:bottom" controls autoplay controlslist\x3d"nodownload" preload\x3d"metadata"\x3e\x3csource src\x3d\x3c%videoSource%\x3e type\x3d"video/mp4"\x3e\x3c/video\x3e',
          hotspotTemplate:
            '\x3cdiv id\x3d"qtips"class\x3d"qtips-background"\x3e\x3cstyle\x3e.qtips-background{ border-color : #EC912D;border-radius: 50%;width: 16px;height: 16px;background-color: #EC912D; position:absolute;display: table-cell;text-align:center;box-shadow: 0 0 0 0 rgba(236, 145, 45, 1);transform: scale(1);animation: pulse 1.5s 0.2s \x3c% elementBounceDuration %\x3e;} .qtips-background:after{ content: none;}\x3c/style\x3e\x3cstyle\x3e @keyframes pulse {0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(236, 145, 45, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(236, 145, 45, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(236, 145, 45, 0); }}\x3c/style\x3e\x3cp class\x3d"qtips-text" style \x3d"vertical-align:middle; position:relative;top:-10.5px;right:2.5px;color: white; font-size:15px; font-family: Bookerly;font-style: italic;font-size;font-weight: bold;"\x3ei\x3c/p\x3e\x3c/div\x3e',
          userActionToolTipTemplate:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background { top: \x3c% elementY %\x3epx; left: \x3c% elementX    %\x3epx; background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBackgroundColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d "tooltip-user-action" style\x3d"display: table; width: 100%; padding-left: 2%; padding-right: 2%; border-collapse: collapse;"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle;width: 90%; line-height: 1.2;"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cdiv style\x3d"display: table-cell; text-align: center; padding-left: 1%; "\x3e\x3ci id\x3d"tooltip-dismiss-cross" class\x3d"a-icon a-icon-close" role\x3d"img" style\x3d"padding-left: 0%; padding-right: 1%;vertical-align: top; "\x3e\x3c/i\x3e\x3c/div\x3e\x3cdiv style\x3d"display: table-row;"\x3e\x3cbutton id\x3d"qtip-button" style\x3d"background-color: Transparent; border-width: thin; text-align: right; border-color: black; border-style: solid; display: table-cell; float: right; border-radius: 3px"\x3e \x3c% elementCTA %\x3e \x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
          userActionToolTipTemplate_V2:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background {background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBorderColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d "tooltip-user-action" style\x3d"display: table; width: auto; font-family: \'Amazon Ember\'"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle; width: auto; line-height: 20px; font-size: 15px; font-style: normal; font-weight: 400; max-width: 127px"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cdiv id\x3d"tooltip-dismiss-cross" style\x3d"display: table-cell; text-align: right; left:0;right:-0.1%;top:0; bottom: -0.1%; vertical-align: top; padding-left: 20px;"\x3eX\x3c/div\x3e\x3cdiv style\x3d"display: table-row;"\x3e\x3cbutton id\x3d"qtip-button" style\x3d"background-color: Transparent; border-width: 1px; text-align: right; border-color: \x3c% elementTextColor %\x3e; border-style: solid; display: table-cell; color: \x3c% elementTextColor %\x3e; padding: 6px 22px; left: 10px; margin-top: 10px"\x3e \x3c% elementCTA %\x3e \x3c/button\x3e\x3cdiv style\x3d"display: table-cell; text-align: right; margin-top: 10px; padding-left:10px; line-height: 20px; font-size: 15px; font-style: normal; font-weight: 400; vertical-align: bottom;"\x3e \x3c% elementIndex %\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
          userActionToolTipTemplate_V3:
            '\x3cdiv id\x3d"qtips" class\x3d"qtips-background qtips-arrow-\x3c% elementArrowPosition %\x3e"\x3e  \x3cstyle\x3e .qtips-background {background-color: \x3c% elementBackgroundColor %\x3e; color: \x3c% elementTextColor %\x3e; } .qtips-background:after { border-color : \x3c% elementBorderColor %\x3e transparent;}\x3c/style\x3e \x3cdiv id \x3d "tooltip-user-action" style\x3d"display: table; width: auto; font-family: \'Amazon Ember\'"\x3e\x3cspan class\x3d"qtips-text"  style\x3d"display:table-cell; vertical-align: middle; width: auto; line-height: 20px; font-size: 15px; font-style: normal; font-weight: 400; max-width: 127px"\x3e \x3c% elementValue %\x3e \x3c/span\x3e \x3cdiv id\x3d"tooltip-dismiss-cross" style\x3d"display: table-cell; text-align: right; left:0;right:-0.1%;top:0; bottom: -0.1%; vertical-align: top; padding-left: 20px;"\x3eX\x3c/div\x3e\x3cdiv style\x3d"display: table-row;"\x3e\x3cbutton id\x3d"qtip-button" style\x3d"background-color: Transparent; border-width: 1px; text-align: right; border-color: \x3c% elementTextColor %\x3e; border-style: solid; display: table-cell; color: \x3c% elementTextColor %\x3e; padding: 6px 22px; left: 10px; margin-top: 10px"\x3e \x3c% elementCTA %\x3e \x3c/button\x3e\x3cdiv style\x3d"display: table-cell; text-align: right; margin-top: 10px; padding-left:10px; line-height: 20px; font-size: 15px; font-style: normal; font-weight: 400; vertical-align: bottom;"\x3e \x3c% elementIndex %\x3e \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"sa-highlighter" class\x3d"sa-highlighter-background sa-highlighter-\x3c% elementArrowPosition %\x3e"\x3e\x3cstyle\x3e.sa-highlighter-background{ border: 4px solid \x3c% elementBackgroundColor %\x3e;}\x3c/style\x3e\x3c/div\x3e\x3c/div\x3e',
        },
        errorCodes: {
          ELEMENT_NOT_VISIBLE: 'Element not Visible on Viewport',
          EVENT_CHECK_NOT_SATISFIED: 'Event Check not Satisfied',
          DEPENDANT_CHECK_NOT_SATISFIED: 'Dependant Check not Satisfied',
          API_THROTTLED: 'API in Throttled State',
          AID_NOT_ALLOWLISTED: 'Shopping Aid is not Allowlisted',
          INVALID_VERSION: 'Invalid Version',
          INVALID_SHOPPING_AID_TYPE: 'Invalid Shopping Aid Type',
          SA_NOT_DISPLAYED: 'Shopping Aid is not being displayed',
          BOTTOM_SHEET_IN_VIEW: 'Bottom Sheet in View',
          INVALID_STATE_DATA: 'Invalid State Data',
          ILLEGAL_INPUT: 'Illegal Input',
          ALREADY_RENDERED: 'Already Rendered',
          SPARKLE_IN_VIEW: 'Sparkle in View',
          UNKNOWN: 'Unknown',
        },
        userEvent: {
          optOut: 'OPT_OUT',
          complete: 'COMPLETE',
          optIn: 'OPT_IN',
          yetToOptIn: 'YET_TO_OPT_IN',
        },
        nativeConstants: { SHOPPING_AIDS: 'SHOPPING_AIDS' },
        contextAwareSADelimiter: ':::',
        secondToMillisecondConversion: 1e3,
        hourToSecondConversion: 3600,
        ShoppingAidsSparkles: 'Sparkles',
        ShoppingAidsTooltips: 'ToolTips',
        PartnerEvent: 'partnerevent',
        SparkleClick: 'click.sparkle',
        TooltipClick: 'click.tooltip',
        ScrollEvent: 'scroll',
        EmptyString: '',
        BounceDurationNineSeconds: 9e3,
        DefaultElementBackgroundColor: '#FFA724',
        DefaultElementTextColor: '#000000',
        DefaultElementBorderColor: '#FFA724',
        ToolTipUXMetricForLogImpression: 'ToolTip_UX_Change_LogImpression_',
        ToolTipUXExperimentWeblab: 'A2I_SHOPPINGAIDS_TOOLTIP_UX_EXPERIMENT_1099906',
        VideoPlayButtonDefaultAltText: 'Play Video',
      }
    })
  })()
  ;(function () {
    r.register('QTipsStyles', function () {
      return "#qtips{position:absolute;overflow:initial}.qtips-background{position:fixed;z-index:90000;padding:10px;opacity:1;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.qtips-arrow-topleft:after,.qtips-arrow-topmiddle:after,.qtips-arrow-topright:after{top:-8px;border-width:0 8px 9px}.qtips-arrow-bottomleft:after,.qtips-arrow-topleft:after{left:14px}.qtips-arrow-bottomright:after,.qtips-arrow-topright:after{right:14px}.qtips-arrow-bottomleft:after,.qtips-arrow-bottommiddle:after,.qtips-arrow-bottomright:after{bottom:-8px;border-width:9px 8px 0;-webkit-box-shadow:0 0 0 -2px rgba(17,17,17,.25);-moz-box-shadow:0 0 0 -2px rgba(17,17,17,.25);box-shadow:0 0 0 -2px rgba(17,17,17,.25);-o-box-shadow:0 0 0 -2px rgba(17,17,17,.25)}.qtips-arrow-left:after{left:-12px; border-width:0 8px 9px;transform:rotate(270deg)}.qtips-arrow-right:after{border-width:0 8px 9px;transform:rotate(90deg)}.qtips-textholder{width:100%;height:100%}.slate-image-video-loader {background: #ffffff;border-radius: 50%;position: absolute;opacity: 0.7;}.slate-image-play-button {margin: auto;position: absolute;border-style: solid;border-color: transparent transparent transparent #ada6a6;} .sa-highlighter-background { z-index: 90000; padding: 10px; width: 10px; height: 10px; background-color: transparent; border-radius: 50%; position: absolute; animation: ring 1.5s linear infinite; }.sa-highlighter-topleft, .sa-highlighter-topmiddle, .sa-highlighter-topright { top: -50px; }.sa-highlighter-topleft, .sa-highlighter-bottomleft { left: 8px; }.sa-highlighter-bottomright, .sa-highlighter-topright { right: 8px; }.sa-highlighter-bottomleft, .sa-highlighter-bottommiddle, .sa-highlighter-bottomright { bottom: -50px; } @keyframes ring { from {opacity: 1;} to {opacity: 0; transform: scale(3);}}"
    })
  })()
  ;(function () {
    r.when('A').register('QTipsMetrics', function () {
      var h = u.ue
      return {
        incrementCounter: function (d, a, e) {
          a = a || 1
          h &&
            h.count &&
            (h.count(d, (h.count(d) || 0) + a), e && h.count(d + '_' + e, (h.count(d) || 0) + a))
        },
      }
    })
  })()
  ;(function () {
    r.register('ShoppingAidsSparklesStyles', function () {
      var h = JSON.stringify([
          '.sparkle-container {             background: #eaeded;             position: fixed;             bottom: 4px;             left: 0;             right: 0;             margin: 9px;             box-sizing: border-box;             display: table;             border-radius: 10px;             box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);             z-index: 99;             opacity: 0.5;             transform: translateY(100%);             transition: transform 0.6s, opacity 0.5s;         }',
          '.sparkle-content {             display: table-cell;             vertical-align: top;             width: 100%;             padding-top: 13px;             padding-bottom: 13px;             padding-left: 9px;             padding-right: 9px;         }',
          '.sparkle-close {             display: table-cell;             vertical-align: top;             padding: 9px 12px 0 0;             width: 12px;             height: 13px;             font-weight: 700;         }',
          '.sparkle-close-btn {             border: none;             padding: 0;         }',
          '.sparkle-image-container {             display: table-cell;             vertical-align: top;             width: 34px;             height: 34px;         }',
          '.sparkle-text-container {             display: table-cell;             vertical-align: middle;             padding-left: 15px;         }',
          '.sparkle-text {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;         }',
          '.sparkle-description-container {             display: table-cell;             vertical-align: middle;             padding-left: 7px;             height: 34px;         }',
          '.sparkle-description {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;             color: #111;         }',
          '.sparkle-linkText-container {             display: table-cell;             vertical-align: middle;             padding-left: 0;             padding-right: 18px;         }',
          '.sparkle-linkText {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;             color: #0066c0;             font-weight: bold;         }',
          '.sparkle-image, .sparkle-image-loader {             border: none;             height: 34px;             width: 34px;         }',
          '.sparkle-image-loader {             display: none;         }.sparkle-container.sparkle-loading .sparkle-image-loader {             display: block;         }',
          '.sparkle-container.sparkle-loading .sparkle-image {             display: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-content {             pointer-events: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-linkText-container {             pointer-events: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-text {             color: #aaa;         }',
          '.sparkle-container.sparkle-open {             transform: translateY(0);             opacity: 1;         }',
          '.sparkle-container.sparkle-closing {             transform: translateY(100%);             opacity: 0.5;         }',
        ]),
        d = JSON.stringify([
          '.sparkle-container {             background: #eaeded;             position: fixed;             bottom: 4px;             left: 0;             right: 0;             margin: 9px;             box-sizing: border-box;             display: table;             border-radius: 10px;             box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);             z-index: 99;             opacity: 0.5;             transform: translateY(100%);             transition: transform 0.6s, opacity 0.5s;         }',
          '.sparkle-content {             display: table-cell;             vertical-align: top;             width: 100%;             padding-top: 13px;             padding-bottom: 13px;             padding-left: 9px;             padding-right: 9px;         }',
          '.sparkle-close {             display: table-cell;             vertical-align: top;             padding: 9px 0 0 12px;             width: 12px;             height: 13px;             font-weight: 700;         }',
          '.sparkle-close-btn {             border: none;             padding: 0;         }',
          '.sparkle-image-container {             display: table-cell;             vertical-align: top;             width: 34px;             height: 34px;         }',
          '.sparkle-text-container {             display: table-cell;             vertical-align: middle;             padding-right: 15px;         }',
          '.sparkle-text {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;         }',
          '.sparkle-description-container {             display: table-cell;             vertical-align: middle;             padding-right: 7px;             height: 34px;         }',
          '.sparkle-description {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;             color: #111;         }',
          '.sparkle-linkText-container {             display: table-cell;             vertical-align: middle;             padding-right: 0;             padding-left: 18px;         }',
          '.sparkle-linkText {             display: -webkit-box;             -webkit-line-clamp: 2;             -webkit-box-orient: vertical;             overflow: hidden;             text-overflow: ellipsis;             white-space: normal;             color: #0066c0;             font-weight: bold;         }',
          '.sparkle-image, .sparkle-image-loader {             border: none;             height: 34px;             width: 34px;         }',
          '.sparkle-image-loader {             display: none;         }.sparkle-container.sparkle-loading .sparkle-image-loader {             display: block;         }',
          '.sparkle-container.sparkle-loading .sparkle-image {             display: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-content {             pointer-events: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-linkText-container {             pointer-events: none;         }',
          '.sparkle-container.sparkle-loading .sparkle-text {             color: #aaa;         }',
          '.sparkle-container.sparkle-open {             transform: translateY(0);             opacity: 1;         }',
          '.sparkle-container.sparkle-closing {             transform: translateY(100%);             opacity: 0.5;         }',
        ])
      return {
        defaultStyleCSS: h,
        defaultStyleRTLCSS: d,
        newStyleCSS:
          '[\n    ".sparkle-container{background: rgb(0, 130, 150);border: 1px solid rgb(0, 113, 133);width:95%;position:fixed;bottom:4px;left:0;right:0;margin:9px;box-sizing:border-box;display:table;border-radius:4px;box-shadow:0px 2px 4px rgba(0, 0, 0, .25);z-index:99;opacity:.5;transform:translateY(100%);transition:transform .6s,opacity .5s}",\n    ".sparkle-content{display:table-cell;vertical-align:top;width:95%;padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px}",\n    ".sparkle-close{display:table-cell;vertical-align:top;padding:8px 8px 0px 12px;width:12px;height:13px;font-weight:700;color: #FFFFFF}",\n    ".sparkle-image-container{display:table-cell;vertical-align:top;width:30px;height:30px; border-radius: 4px}",\n    ".sparkle-text-container{display:table-cell;vertical-align:middle;padding-left:15px}",\n    ".sparkle-text{color: rgb(255,255,255); font-size:15px; display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n    ".sparkle-description-container{display:table-cell;vertical-align:middle;padding-left:7px;height:34px}",\n    ".sparkle-description{color: rgb(255, 255, 255);font-size:15px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n    ".sparkle-linkText-container{display:table-cell;vertical-align:middle;padding-left:0;padding-right:8px;text-align: center}",\n    ".sparkle-linkText{color:rgb(255, 255, 255);font-weight:normal;font-size:15px;border: 1px solid #FFFFFF;padding: 4px 11px;-webkit-line-clamp: 1;border-radius: 4px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n    ".sparkle-image,.sparkle-image-loader{border-radius: 4px;height:30px;width:30px;background: rgb(217, 217, 217)}",\n    ".sparkle-image-loader{display:none}.sparkle-container.sparkle-loading .sparkle-image-loader{display:block}",\n    ".sparkle-container.sparkle-loading .sparkle-image{display:none}",\n    ".sparkle-container.sparkle-loading .sparkle-content{pointer-events:none}",\n    ".sparkle-container.sparkle-loading .sparkle-linkText-container{pointer-events:none}",\n    ".sparkle-container.sparkle-loading .sparkle-text{color:#aaa}",\n    ".sparkle-container.sparkle-open{transform:translateY(0);opacity:1}",\n    ".sparkle-container.sparkle-closing{transform:translateY(100%);opacity:.5}"\n]',
        newStyleRTLCSS:
          '[\n  ".sparkle-container{background: rgb(0, 130, 150);border: 1px solid rgb(0, 113, 133);width:95%;position:fixed;bottom:4px;left:0;right:0;margin:9px;box-sizing:border-box;display:table;border-radius:4px;box-shadow:0px 2px 4px rgba(0, 0, 0, .25);z-index:99;opacity:.5;transform:translateY(100%);transition:transform .6s,opacity .5s}",\n  ".sparkle-content{display:table-cell;vertical-align:top;width:95%;padding-top:9px;padding-bottom:9px;padding-left:9px;padding-right:9px}",\n  ".sparkle-close{display:table-cell;vertical-align:top;padding:8px 12px 0px 8px;width:12px;height:13px;font-weight:700;color: #FFFFFF}",\n  ".sparkle-image-container{display:table-cell;vertical-align:top;width:30px;height:30px; border-radius: 4px}",\n  ".sparkle-text-container{display:table-cell;vertical-align:middle;padding-right:15px}",\n  ".sparkle-text{color: rgb(255,255,255); font-size:15px; display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n  ".sparkle-description-container{display:table-cell;vertical-align:middle;padding-right:7px;height:34px}",\n  ".sparkle-description{color: rgb(255, 255, 255);font-size:15px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n  ".sparkle-linkText-container{display:table-cell;vertical-align:middle;padding-left:0;padding-right:8px;text-align: center}",\n  ".sparkle-linkText-container{display:table-cell;vertical-align:middle;padding-right:0;padding-left:8x; text-align: center}",\n  ".sparkle-linkText{color:rgb(255, 255, 255);font-weight:normal;font-size:15px;border: 1px solid #FFFFFF;padding: 4px 11px;-webkit-line-clamp: 1;border-radius: 4px;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}",\n  ".sparkle-image,.sparkle-image-loader{border-radius: 4px;height:30px;width:30px;background: rgb(217, 217, 217)}",\n  ".sparkle-image-loader{display:none}.sparkle-container.sparkle-loading .sparkle-image-loader{display:block}",\n  ".sparkle-container.sparkle-loading .sparkle-image{display:none}",\n  ".sparkle-container.sparkle-loading .sparkle-content{pointer-events:none}",\n  ".sparkle-container.sparkle-loading .sparkle-linkText-container{pointer-events:none}",\n  ".sparkle-container.sparkle-loading .sparkle-text{color:#aaa}",\n  ".sparkle-container.sparkle-open{transform:translateY(0);opacity:1}",\n  ".sparkle-container.sparkle-closing{transform:translateY(100%);opacity:.5}"\n]',
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipsMetrics',
      'QTipsConstants',
      'QTips',
      'SAEndPointsConfig',
      'NestedShoppingAidHelper',
      'ShoppingAidsGenericUtils',
      'LogImpressionManager',
      'SAFeature',
      'SparkleConfig',
      'SAMetricConstants',
      'ShoppingAidsFilters',
      'ContextAwareSubstitutor',
      'ShoppingAidsSparklesStyles',
      'SparkleConstants',
    ).register('ShoppingAidsSparkles', function (h, d, a, e, f, c, b, l, g, k, n, m, p, v, z, q) {
      var t = c.logImpressionEndPoint,
        P = !1,
        y = 0,
        A = 0,
        K = 0,
        S = 0,
        L = u.innerHeight,
        G = x,
        B = x,
        H = x,
        w = {
          logImpression: function (a, b, c) {
            if (l.isDefined(c)) {
              var d = c.userEvent
              var e = c.successCallback
              var f = c.errorCallback
              var p = c.contextAwareIndex
            }
            k.clientSideCaching
              ? g.handle(a, b, q.shoppingAidsType, G, c)
              : ((a = {
                  pageType: G,
                  shoppingAidsType: q.shoppingAidsType,
                  id: a,
                  schedulingType: b,
                }),
                l.isDefined(d) && (a.userEvent = d),
                l.isDefined(p) && (a.contextAwareIndex = p),
                h.ajax(t, {
                  method: 'GET',
                  contentType: 'application/json; charset\x3dutf-8',
                  timeout: 6e4,
                  params: a,
                  success: e,
                  error: f,
                }))
          },
          logInteraction: function (a, b, c, d) {
            c()
          },
          logCounter: function (b, c) {
            a.incrementCounter('shopping_aids_' + B + '_' + q.shoppingAidsType + b, c)
            a.incrementCounter('shopping_aids_' + G + '_' + q.shoppingAidsType + '_' + b, c)
            a.incrementCounter('shopping_aids_' + q.shoppingAidsType + '_' + b, c)
          },
          nestedJsonParser: function (a) {
            try {
              return JSON.parse(a)
            } catch (fa) {
              w.logCounter('illegal_input_nested_shopping_aid')
            }
          },
          detectUserScroll: function () {
            var a = u.scrollY
            20 >= a
              ? (document.getElementsByClassName('sparkle-container')[0].style.bottom = '46px')
              : (document.getElementsByClassName('sparkle-container')[0].style.bottom = '4px')
            y = Math.max(y, a)
            a < y && !A && (A = 1)
          },
          _contextAwareModelTransformer: function (a, b) {
            b = a.getState(b)
            b.clientSideTargetting = a.getClientSideTargetting()
            b.desiredWeblabTreatment = a.getDesiredWeblabTreatment()
            b.nestedSAList = a.getNestedSAList()
            b.identifier = a.getIdentifier()
            return b
          },
          executeContextAwareSubstitution: function (a) {
            var b = a.getEventData().state,
              c = this._contextAwareModelTransformer(a, b),
              d = p.getContextTargetingIndex(c)
            v.substitute(c, d, e.ShoppingAidsSparkles)
            a.setClientSideTargetting(c.clientSideTargetting)
            a.setState(b, c)
            a.setNestedSAList(c.nestedSAList)
            l.isDefined(c.contextAwareIndex) &&
              (a.setTriggerDependentTriggering(x), a.setContextAwareIndex(c.contextAwareIndex))
            return a
          },
          injectStyleToDom: function (a) {
            var b = document.createElement('style')
            b.innerHTML = JSON.parse(a).join('')
            document.head.appendChild(b)
          },
        },
        ea = {
          create: function (a) {
            var c = a.sparkleType,
              d = a.identifier,
              g = a.invokingEventType,
              f = a.invokingEventElement,
              l = a.weblabName,
              p = a.desiredWeblabTreatment,
              k = a.allocatedWeblabTreatment,
              m = a.schedulingType,
              z = a.targetEndpoint,
              v = a.typeOfStaticSparkle,
              n = a.displayIconAltText,
              t = a.sparkleUIStrings,
              Y = a.nestedSAList,
              P = a.bottomNavPadding,
              r = a.backGroundColor,
              A = a.borderColor,
              y = a.borderStyle,
              S = a.descriptionColor,
              K = {},
              B,
              C = !1,
              L = a.successResponse,
              G = a.failureResponse,
              D = a.onDemand,
              J = a.contextAwareIndex,
              R = a.triggerDependentTargeting,
              V,
              Z
            if (c === q.sparkleTypes.dynamic && f && g) {
              var aa = []
              try {
                aa = JSON.parse(a.stateData)
              } catch (ca) {
                w.logCounter('illegal_input_stateData')
                ;(G = this.failureResponse) && 'function' === typeof G && G(e.INVALID_STATE_DATA)
                return
              }
              aa.forEach(function (a) {
                K[a.stateId] = {
                  id: a.stateId,
                  mode: a.mode,
                  linkText: a.text,
                  icon: a.icon,
                  descText: a.descriptionText,
                }
              })
              document.querySelector(f).addEventListener(g, function (a) {
                B = a.detail
              })
            } else if (c === q.sparkleTypes.static) {
              K = {
                initial: {
                  id: 'initial',
                  mode: 'default',
                  linkText: a.displayText,
                  icon: a.displayIcon,
                  descText: a.descriptionText,
                },
              }
              var X = {
                requestUpdate: x,
                state: 'initial',
                onShow: function (a) {
                  this.requestUpdate = a.requestUpdate
                },
                onClick: function () {
                  this.requestUpdate({ signal: 'complete' })
                  var c = w.nestedJsonParser(Y)
                  c && 0 < c.length
                    ? setTimeout(function () {
                        b.dispatchShoppingAidEvent(c)
                      }, q.timer.animationDelay)
                    : setTimeout(function () {
                        u.location.href = a.targetEndpoint
                      }, q.timer.animationDelay)
                },
                onClose: function () {},
              }
              f && g && g.toLowerCase() === e.PartnerEvent
                ? (Z = h.on(f, function () {
                    B = X
                  }))
                : f && g
                  ? document.querySelector(f).addEventListener(g, function () {
                      B = X
                    })
                  : (B = X)
            } else {
              w.logCounter('illegal_input')
              ;(G = this.failureResponse) && 'function' === typeof G && G(e.ILLEGAL_INPUT)
              return
            }
            return {
              getSparkleType: function () {
                return c
              },
              getIdentifier: function () {
                return d
              },
              getState: function (a) {
                return K[a]
              },
              isEligible: function () {
                return !(!B || C)
              },
              getEventData: function () {
                return B
              },
              isDone: function () {
                return C
              },
              getWeblabName: function () {
                return l
              },
              getDesiredWeblabTreatment: function () {
                return p
              },
              getAllocatedWeblabTreatment: function () {
                return k
              },
              getSchedulingType: function () {
                return m
              },
              getTargetEndpoint: function () {
                return z
              },
              getTypeOfStaticSparkle: function () {
                return v
              },
              getDisplayIconAltText: function () {
                return n
              },
              getSparkleUIStrings: function () {
                return t
              },
              getSuccessResponse: function () {
                return L
              },
              getFailureResponse: function () {
                return G
              },
              getOnDemand: function () {
                return D
              },
              getContextAwareIndex: function () {
                return J
              },
              getTriggerDependentTargeting: function () {
                return R
              },
              getNestedSAList: function () {
                return Y
              },
              getClientSideTargetting: function () {
                return V
              },
              getAuiEventCallback: function () {
                return Z
              },
              getBackGroundColor: function () {
                return r
              },
              getBorderColor: function () {
                return A
              },
              getBorderStyle: function () {
                return y
              },
              getDescriptionColor: function () {
                return S
              },
              setBottomNavPadding: function () {
                H = '0' !== P ? P : x
              },
              setClientSideTargetting: function (a) {
                V = a
              },
              setState: function (a, b) {
                K[a] = b
              },
              setContextAwareIndex: function (a) {},
              setNestedSAList: function (a) {},
              setTriggerDependentTriggering: function (a) {},
              done: function () {
                C = !0
              },
            }
          },
        },
        ba = {
          create: function (b, c) {
            function g() {
              !1 === aa && (O.parentNode.removeChild(O), N.parentNode.removeChild(N), (aa = !0))
            }
            function f() {
              !1 === Z && (J.parentNode.removeChild(J), O.parentNode.removeChild(O), (Z = !0))
            }
            function p() {
              !1 === ca &&
                (W.parentNode.removeChild(W),
                J.parentNode.removeChild(J),
                N.parentNode.removeChild(N),
                (ca = !0))
            }
            function k() {
              !1 === X && (J.parentNode.removeChild(J), N.parentNode.removeChild(N), (X = !0))
            }
            function v(a) {
              T.style.cssText = q.widthString + (95 - a) + q.percentile
              O.style.cssText = q.widthString + a + q.percentile
            }
            function t(a) {
              a ? F.classList.add('sparkle-loading') : F.classList.remove('sparkle-loading')
            }
            function Y(a) {
              F.classList.remove(
                'sparkle-mode-warning',
                'sparkle-mode-success',
                'sparkle-mode-error',
              )
              'loading' === a.mode
                ? t(!0)
                : 'default' !== a.mode && F.classList.add('sparkle-mode-' + a.mode)
              b.getSparkleType() === q.sparkleTypes.static
                ? b.getTypeOfStaticSparkle() && '1' !== b.getTypeOfStaticSparkle().toString()
                  ? '2' === b.getTypeOfStaticSparkle().toString()
                    ? ((R.innerText = a.linkText),
                      (I.src = a.icon),
                      g(),
                      w.logCounter(b.getIdentifier() + 'type2_static_sparkle'))
                    : '3' === b.getTypeOfStaticSparkle().toString()
                      ? ((D.innerText = a.descText),
                        (D.ariaHidden = 'true'),
                        (C.ariaLabel = a.descText + '.' + a.linkText),
                        (C.innerHTML = a.linkText),
                        p(),
                        w.logCounter(b.getIdentifier() + 'type3_static_sparkle'))
                      : '4' === b.getTypeOfStaticSparkle().toString()
                        ? ((D.innerText = a.descText),
                          (D.ariaHidden = 'true'),
                          (C.ariaLabel = a.descText + '.' + a.linkText),
                          (C.innerHTML = a.linkText),
                          (I.src = a.icon),
                          k(),
                          w.logCounter(b.getIdentifier() + 'type4_static_sparkle'))
                        : '5' === b.getTypeOfStaticSparkle().toString()
                          ? ((D.innerText = a.descText),
                            (D.ariaHidden = 'true'),
                            (C.ariaLabel = a.descText + '.' + a.linkText),
                            (C.innerHTML = a.linkText),
                            (C.style.color = q.whiteColor),
                            v(
                              Math.min(
                                a.linkText.length * q.width.widthFactor + q.width.minCTAWidth,
                                q.width.maxCTAWidth,
                              ),
                            ),
                            p(),
                            w.logCounter(b.getIdentifier() + 'type5_static_sparkle'))
                          : '6' === b.getTypeOfStaticSparkle().toString()
                            ? ((D.innerText = a.descText),
                              (D.ariaHidden = 'true'),
                              (C.ariaLabel = a.descText + '.' + a.linkText),
                              (C.innerHTML = a.linkText),
                              (C.style.color = q.whiteColor),
                              (I.src = a.icon),
                              v(
                                Math.min(
                                  a.linkText.length * q.width.widthFactor + q.width.minCTAWidth,
                                  q.width.maxCTAWidth,
                                ),
                              ),
                              k(),
                              w.logCounter(b.getIdentifier() + 'type6_static_sparkle'))
                            : '7' === b.getTypeOfStaticSparkle().toString()
                              ? ((U.innerHTML = a.linkText),
                                (U.style.color = q.whiteColor),
                                (I.src = a.icon),
                                f(),
                                w.logCounter(b.getIdentifier() + 'type7_static_sparkle'))
                              : '8' === b.getTypeOfStaticSparkle().toString() &&
                                ((R.innerText = a.linkText),
                                (R.style.color = q.whiteColor),
                                (I.src = a.icon),
                                g(),
                                w.logCounter(b.getIdentifier() + 'type8_static_sparkle'))
                  : ((U.innerHTML = a.linkText),
                    (I.src = a.icon),
                    f(),
                    w.logCounter(b.getIdentifier() + 'type1_static_sparkle'))
                : ((C.innerHTML = a.linkText),
                  (U.innerHTML = a.linkText),
                  a.descText !== x && a.icon !== x
                    ? ((D.innerText = a.descText),
                      (I.src = a.icon),
                      (D.ariaHidden = 'true'),
                      (C.ariaLabel = a.descText + '.' + a.linkText),
                      k())
                    : a.icon !== x && a.descText === x
                      ? ((I.src = a.icon), f())
                      : a.icon === x &&
                        ((D.innerText = a.descText),
                        (D.ariaHidden = 'true'),
                        (C.ariaLabel = a.descText + '.' + a.linkText),
                        p()))
              da = a
            }
            function A(a) {
              ba.removeSparkleFromView(F)
              c.sparkleClosed(b, a)
            }
            function y(a) {
              if (b.isDone()) return !1
              switch (a.signal) {
                case 'statechange':
                  if ((a = b.getState(a.state))) return t(!1), Y(a), !0
                  A('client_illegal_state')
                  return !1
                case 'complete':
                  return (
                    c.sparkleComplete(b),
                    (a = b.getState(a.state))
                      ? (t(!1),
                        Y(a),
                        setTimeout(function () {
                          A('client_complete')
                        }, q.timer.autoCloseDelay))
                      : A('client_complete'),
                    !0
                  )
                case 'abort':
                  return A('client_abort'), !0
                default:
                  return !1
              }
            }
            function fa(b) {
              var c = u.scrollY
              'Android' === B && b
                ? (d(u).bind('scroll', h.throttle(w.detectUserScroll, 100)),
                  20 >= c &&
                    (document.getElementsByClassName('sparkle-container')[0].style.bottom =
                      n.andoridBottomPadding_SubnavPresent))
                : 'iPhone' === B &&
                  H &&
                  (r.when('MShopChrome').execute(function (a) {
                    a.getBottomBarsHeight({
                      successCallback: function (a) {
                        var c = b
                          ? a.visibleHeight + n.iOSBottomPadding_SubnavPresent
                          : a.visibleHeight
                        document.getElementsByClassName('sparkle-container')[0].style.bottom =
                          c + 'px'
                        H = a.visibleHeight
                      },
                      failCallback: function (a) {
                        w.logCounter('fetchBottomHeight_Failure')
                      },
                    })
                  }),
                  d(u).bind(
                    'scroll',
                    h.throttle(function () {
                      var a = document.getElementsByClassName('sparkle-container')[0].style.bottom
                      0 >= u.scrollY && b
                        ? (document.getElementsByClassName('sparkle-container')[0].style.bottom =
                            H + n.iOSBottomPadding_SubnavPresent + 'px')
                        : 0 < u.scrollY &&
                          a.slice(0, -2) > H &&
                          b &&
                          (document.getElementsByClassName('sparkle-container')[0].style.bottom =
                            H + 'px')
                      a === n.iOSBottomPadding_WhenEndOfPage &&
                        (document.getElementsByClassName('sparkle-container')[0].style.bottom =
                          H + 'px')
                      u.innerHeight + u.scrollY >= document.body.scrollHeight &&
                        (document.getElementsByClassName('sparkle-container')[0].style.bottom =
                          n.iOSBottomPadding_WhenEndOfPage)
                    }, 100),
                  ))
              a.incrementCounter(
                m.SPARKLE_BOTTOM_PADDING_PREFIX + G + '_' + B + '_bottomNav_' + !!H + '_Subnav' + b,
              )
            }
            function L(a, d) {
              y({ signal: 'statechange', state: a }) &&
                (document.body.appendChild(F),
                setTimeout(function () {
                  F.classList.add('sparkle-open')
                  c.getMetricsIntersectionObserver()
                  fa(d)
                  P = !0
                  if (b.getAuiEventCallback()) {
                    var a = b.getAuiEventCallback()
                    l.detachTrigger(a.event, a.callback)
                  }
                  K = Date.now()
                  S = u.scrollY
                  c.sparkleShown(b, y)
                  if (
                    b.getSparkleType() !== q.sparkleTypes.static ||
                    (b.getSparkleType() === q.sparkleTypes.static &&
                      (!b.getTypeOfStaticSparkle() ||
                        '1' === b.getTypeOfStaticSparkle().toString() ||
                        '2' === b.getTypeOfStaticSparkle().toString() ||
                        '3' === b.getTypeOfStaticSparkle().toString() ||
                        '4' === b.getTypeOfStaticSparkle().toString()))
                  ) {
                    a = document.getElementsByClassName('sparkle-container')[0]
                    var e = a
                      .getElementsByClassName('sparkle-content')[0]
                      .getElementsByClassName('sparkle-description-container')[0]
                      .getElementsByClassName('sparkle-description')[0]
                    b.getBackGroundColor() !== x && (a.style.background = b.getBackGroundColor())
                    b.getBorderColor() !== x && (a.style.borderColor = b.getBorderColor())
                    b.getBorderStyle() !== x && (a.style.borderStyle = b.getBorderStyle())
                    b.getDescriptionColor() !== x && (e.style.color = b.getDescriptionColor())
                  }
                  a = document.getElementsByClassName('sparkle-container')[0]
                  a.removeAttribute('role')
                  a.removeAttribute('aria-live')
                  a.removeAttribute('aria-label')
                  a.removeChild(V)
                }, q.timer.animationDelay))
            }
            var E = !1,
              Q = !1
            try {
              var M = JSON.parse(b.getSparkleUIStrings())
            } catch (ha) {
              w.logCounter('invalid_ui_string_input'), (M = {})
            }
            b.getSparkleType() !== q.sparkleTypes.static ||
            !b.getTypeOfStaticSparkle() ||
            ('5' !== b.getTypeOfStaticSparkle().toString() &&
              '6' !== b.getTypeOfStaticSparkle().toString() &&
              '7' !== b.getTypeOfStaticSparkle().toString() &&
              '8' !== b.getTypeOfStaticSparkle().toString()) ||
            Q
              ? E ||
                ((Q = !1),
                (E = !0),
                'rtl' === document.dir
                  ? w.injectStyleToDom(z.defaultStyleRTLCSS)
                  : w.injectStyleToDom(z.defaultStyleCSS))
              : ((Q = !0),
                (E = !1),
                'rtl' === document.dir
                  ? w.injectStyleToDom(z.newStyleRTLCSS)
                  : w.injectStyleToDom(z.newStyleCSS))
            var F = document.createElement('div')
            F.classList.add('sparkle-container')
            F.role = 'alert'
            F.ariaLive = 'polite'
            F.ariaLabel = M.sparkleAnnouncementPrefix
              ? M.sparkleAnnouncementPrefix
              : q.sparkleAnnouncementPrefix
            F.setAttribute(e.view.saDOMNameAttribute, b.getIdentifier())
            var T = document.createElement('div')
            T.classList.add('sparkle-content')
            var W = document.createElement('div')
            W.classList.add('sparkle-image-container')
            E = document.createElement('img')
            E.classList.add('sparkle-image-loader')
            E.src = q.spinnerUrl
            var I = document.createElement('img')
            I.classList.add('sparkle-image')
            I.alt = b.getDisplayIconAltText() ? b.getDisplayIconAltText() : q.defaultAltText
            W.appendChild(E)
            W.appendChild(I)
            var O = document.createElement('div')
            O.classList.add('sparkle-linkText-container')
            var C = document.createElement('a')
            C.classList.add('sparkle-linkText')
            C.href = '#'
            O.appendChild(C)
            var N = document.createElement('div')
            N.classList.add('sparkle-text-container')
            var U = document.createElement('a')
            U.classList.add('sparkle-text')
            U.href = '#'
            N.appendChild(U)
            E = document.createElement('div')
            E.classList.add('sparkle-description-container')
            var D = document.createElement('a')
            D.classList.add('sparkle-description')
            D.innerText = ' '
            E.appendChild(D)
            var J = document.createElement('div')
            J.classList.add('sparkle-text-container')
            var R = document.createElement('p')
            R.classList.add('sparkle-text')
            R.innerText = ' '
            var V = document.createElement('div')
            V.ariaLabel = M.sparkleAnnouncementSuffix
              ? M.sparkleAnnouncementSuffix
              : q.sparkleAnnouncementSuffix
            V.role = 'button'
            J.appendChild(R)
            T.appendChild(W)
            T.appendChild(N)
            T.appendChild(J)
            T.appendChild(E)
            M = document.createElement('div')
            M.classList.add('sparkle-close')
            E = document.createElement('button')
            E.classList.add('sparkle-close-btn')
            E.ariaLabel = 'close'
            Q = document.createElement('i')
            Q.classList.add('a-icon')
            Q.classList.add('a-icon-close')
            Q.classList.add('a-icon-mini')
            E.appendChild(Q)
            M.appendChild(E)
            F.appendChild(T)
            F.appendChild(O)
            F.appendChild(M)
            F.appendChild(V)
            var Z = !1,
              aa = !1,
              X = !1,
              ca = !1,
              da
            O.addEventListener('click', function (a) {
              a.preventDefault()
              t(!0)
              c.sparkleClicked(b, da)
            })
            N.addEventListener('click', function (a) {
              a.preventDefault()
              t(!0)
              c.sparkleClicked(b, da)
            })
            r.when('mash').execute(function (a) {
              'iPhone' === B &&
                H &&
                a.addEventListener(
                  'bottomBarsUpdate',
                  h.throttle(function (a) {
                    a = a.detail.visibleHeight + 'px'
                    0 < u.scrollY &&
                      (document.getElementsByClassName('sparkle-container')[0].style.bottom = a)
                  }, 100),
                )
            })
            M.addEventListener('click', function () {
              A('customer_closed')
            })
            return {
              display: function (a) {
                if ('Android' === B || 'iPhone' === B) {
                  var b = n.shouldAddPaddingForPage(G)
                  L(a, b)
                } else L(a)
              },
              isSparkleDisplaying: function () {
                return P
              },
            }
          },
          removeSparkleFromView: function (a) {
            a &&
              (a.classList.add('sparkle-closing'),
              (P = !1),
              setTimeout(function () {
                d(u).unbind('scroll', w.detectUserScroll())
                a.remove()
              }, q.timer.animationDelay))
          },
        }
      c = {
        models: {},
        dismissWithId: function (a, b, c) {
          var d = document.getElementsByClassName('sparkle-container')[0]
          d && d.getAttribute(e.view.saDOMNameAttribute) === a
            ? (ba.removeSparkleFromView(d), b && 'function' === typeof b && b())
            : c && 'function' === typeof c && c(e.errorCodes.SA_NOT_DISPLAYED)
        },
        init: function (a) {
          G = a.page
          ;(B = a.platform) || (B = l.platformCheck())
          this.models = this.createModels(a.sparkles)
          this.render()
        },
        invokeOnDemandSparkle: function (a) {
          G = a.page
          ;(B = a.platform) || (B = l.platformCheck())
          if ((a = ea.create(a.sparkles)))
            Array.isArray(this.models) ? this.models.unshift(a) : (this.models = [a])
          this.render()
        },
        createModels: function (a) {
          var b = []
          a.forEach(function (a) {
            ;(a = ea.create(a)) && b.push(a)
          })
          return b
        },
        getNextEligible: function () {
          for (var a = 0; a < this.models.length && !this.models[a].isEligible(); a++);
          return this.models.splice(a, 1)[0]
        },
        render: function () {
          setTimeout(
            function () {
              if (f.view.hasNoPopover()) {
                var a = this.getNextEligible()
                a && !l.weblabTriggerAndCheck(a, q.shoppingAidsType) && a.done()
                if (a) {
                  if (l.isDefined(a.getTriggerDependentTargeting())) {
                    var b = a.getTriggerDependentTargeting()
                    a.setClientSideTargetting(b)
                    a = w.executeContextAwareSubstitution(a)
                  }
                  b = ba.create(a, this)
                  a.setBottomNavPadding()
                  a.getOnDemand() && b.isSparkleDisplaying()
                    ? (a = a.getFailureResponse()) &&
                      'function' === typeof a &&
                      a(e.errorCodes.SPARKLE_IN_VIEW)
                    : b.display(a.getEventData().state)
                } else 0 < this.models.length && this.render()
              } else this.render()
            }.bind(this),
            q.timer.displayLoopDelay,
          )
        },
        sparkleShown: function (a, b) {
          w.logImpression(a.getIdentifier(), a.getSchedulingType(), {
            successCallback: function () {
              w.logCounter('logImpression_success')
              var b = a.getSuccessResponse()
              b && 'function' === typeof b && b()
            },
            errorCallback: function () {
              w.logCounter('logImpression_error')
            },
            contextAwareIndex: a.getContextAwareIndex(),
          })
          w.logCounter('sparkleShown')
          w.logCounter(a.getIdentifier() + '_sparkleShown')
          this._scrollDepthMetricLogger(
            a.getIdentifier(),
            S,
            m.SPARKLE_DISPLAY_ATF,
            m.SPARKLE_DISPLAY_SCROLLED,
            m.SPARKLE_DISPLAY_DEPTH,
            m.SPARKLE_DISPLAY_DEPTH_PERCENTAGE,
          )
          a.getEventData().onShow({ requestUpdate: b })
        },
        sparkleClicked: function (a, b) {
          a.getEventData().onClick({ state: b.id })
          b = u.scrollY - S
          this._scrollDepthMetricLogger(
            a.getIdentifier(),
            b,
            m.SPARKLE_CTA_ATF,
            m.SPARKLE_CTA_SCROLLED,
            m.SPARKLE_CTA_DEPTH,
            m.SPARKLE_CTA_DEPTH_PERCENTAGE,
            m.SPARKLE_CTA,
          )
          b = Date.now() - K
          w.logCounter(m.SPARKLE_CTA_TIME, b)
          w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_CTA_TIME, b)
          'Android' === B &&
            (w.logCounter(m.SPARKLE_CTA_MAX_SCROLL_DEPTH, y),
            w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_CTA_MAX_SCROLL_DEPTH, y),
            (b = Math.ceil((y / L) * 100)),
            w.logCounter(m.SPARKLE_CTA_MAX_SCROLL_DEPTH_PERCENTAGE, b),
            w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_CTA_MAX_SCROLL_DEPTH_PERCENTAGE, b),
            (y = 0),
            w.logCounter(m.SPARKLE_CTA_SCROLL_DIRECTION_CHANGE + A),
            w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_CTA_SCROLL_DIRECTION_CHANGE + A),
            (A = 0))
        },
        sparkleClosed: function (a, b) {
          if ('customer_closed' === b) {
            w.logImpression(a.getIdentifier(), a.getSchedulingType(), {
              userEvent: e.userEvent.optOut,
              successCallback: function () {
                w.logCounter('logOptOut_success')
                var b = a.getSuccessResponse()
                b && 'function' === typeof b && b()
              },
              errorCallback: function () {
                w.logCounter('logOptOut_error')
              },
              contextAwareIndex: a.getContextAwareIndex(),
            })
            var c = u.scrollY - S
            this._scrollDepthMetricLogger(
              a.getIdentifier(),
              c,
              m.SPARKLE_DISMISS_ATF,
              m.SPARKLE_DISMISS_SCROLLED,
              m.SPARKLE_DISMISS_DEPTH,
              m.SPARKLE_DISMISS_DEPTH_PERCENTAGE,
              m.SPARKLE_DISMISSED,
            )
          }
          w.logCounter('sparkleClosed')
          w.logCounter('sparkleClosed_' + b)
          w.logCounter(a.getIdentifier() + '_sparkleClosed')
          w.logCounter(a.getIdentifier() + '_sparkleClosed_' + b)
          c = Date.now() - K
          w.logCounter(m.SPARKLE_DISPLAY_DURATION, c)
          w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_DISPLAY_DURATION, c)
          'Android' === B &&
            (w.logCounter(m.SPARKLE_DISMISS_MAX_SCROLL_DEPTH, y),
            w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_DISMISS_MAX_SCROLL_DEPTH, y),
            (c = Math.ceil((y / L) * 100)),
            w.logCounter(m.SPARKLE_DISMISS_MAX_SCROLL_DEPTH_PERCENTAGE, c),
            w.logCounter(
              a.getIdentifier() + '_' + m.SPARKLE_DISMISS_MAX_SCROLL_DEPTH_PERCENTAGE,
              c,
            ),
            (y = 0),
            w.logCounter(m.SPARKLE_DISMISS_SCROLL_DIRECTION_CHANGE + A),
            w.logCounter(a.getIdentifier() + '_' + m.SPARKLE_DISMISS_SCROLL_DIRECTION_CHANGE + A),
            (A = 0))
          a.done()
          a.getEventData().onClose({ reason: b })
          this.render()
        },
        sparkleComplete: function (a) {
          w.logInteraction(
            a.getIdentifier(),
            a.getSchedulingType,
            function () {
              w.logCounter('logInteraction_success')
              w.logCounter(a.getIdentifier() + '_logInteraction_success')
            },
            function () {
              w.logCounter('logInteraction_error')
              w.logCounter(a.getIdentifier() + '_logInteraction_error')
            },
          )
        },
        getMetricsIntersectionObserver: function () {
          'Android' === B &&
            (w.logCounter('sparkle_android_user'),
            u.IntersectionObserver
              ? w.logCounter('sparkle_android_intersectionObserver_supported')
              : w.logCounter('sparkle_android_intersectionObserver_not_supported'))
        },
        _isSparkleATF: function (a) {
          return a < L
        },
        _scrollDepthMetricLogger: function (a, b, c, d, e, g, f) {
          var p = Math.ceil((b / L) * 100)
          this._isSparkleATF(b)
            ? (w.logCounter(c), w.logCounter(a + '_' + c))
            : (w.logCounter(d), w.logCounter(a + '_' + d))
          l.isDefined(f) && (w.logCounter(f), w.logCounter(a + '_' + f))
          w.logCounter(e, b)
          w.logCounter(a + '_' + e, b)
          w.logCounter(g, p)
          w.logCounter(a + '_' + g, p)
        },
      }
      return {
        init: c.init.bind(c),
        invokeOnDemandSparkle: c.invokeOnDemandSparkle.bind(c),
        dismissWithId: c.dismissWithId.bind(c),
      }
    })
  })()
  ;(function () {
    r.register('SparkleConstants', function () {
      return {
        timer: { displayLoopDelay: 3e3, animationDelay: 500, autoCloseDelay: 1e4 },
        width: { maxCTAWidth: 30, minCTAWidth: 10, widthFactor: 2.3 },
        sparkleTypes: { static: 'static', dynamic: 'dynamic' },
        sparkleEvent: { displayEvent: 'display', closeEvent: 'close' },
        shoppingAidsType: 'sparkle',
        spinnerUrl: 'https://m.media-amazon.com/images/G/01/amazonui/loading/loading-4x._V1_.gif',
        defaultAltText: 'Amazon Retail Website logo',
        whiteColor: 'rgb(255,255,255)',
        widthString: 'width: ',
        sparkleAnnouncementPrefix: 'Notification on Screen',
        sparkleAnnouncementSuffix:
          'Please go to the end of the page to interact with this notification',
        percentile: '%;',
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'ValueOfFilter',
      'HTMLFilter',
      'CookieFilter',
      'URLFilter',
      'QTipsMetrics',
      'SAMetricConstants',
      'SAFeature',
      'QTipsConstants',
      'ShoppingAidsGenericUtils',
      'PageResolver',
    ).register('ShoppingAidsFilters', function (h, d, a, e, f, c, b, l, g, k, n) {
      return {
        filteredShoppingAids: {},
        start: function (a) {
          return this.filterShoppingAids(a)
        },
        removeIneligibleAid: function (a, b) {
          a.splice(b, 1)
        },
        isShoppingAidEligible: function (a) {
          c.incrementCounter(b.SA_CACHE_PREFIX + b.CLIENTSIDE_FILTER + b.START)
          return -1 !== this.getContextTargetingIndex(a)
        },
        getContextTargetingIndex: function (a) {
          if (
            a.clientSideTargetting &&
            a.desiredWeblabTreatment &&
            -1 !== a.clientSideTargetting.indexOf(g.contextAwareSADelimiter) &&
            -1 !== a.desiredWeblabTreatment.indexOf(g.contextAwareSADelimiter)
          )
            return -1
          var b = 0
          a.invokingEventElement &&
            a.invokingEventType &&
            !a.triggerDependentCheck &&
            ((a.triggerDependentTargeting = a.clientSideTargetting), delete a.clientSideTargetting)
          if (a.clientSideTargetting) {
            b = -1
            for (
              var c = a.clientSideTargetting.split(g.contextAwareSADelimiter), d = 0;
              d < c.length;
              d++
            )
              if (this.excecuteClientSideTargetting(c[d].trim())) {
                b = d
                break
              }
          }
          if (0 === b && a.desiredWeblabTreatment && a.weblabName && a.allocatedWeblabTreatment)
            for (
              c = a.desiredWeblabTreatment.split(g.contextAwareSADelimiter), d = 0;
              d < c.length;
              d++
            )
              if (c[d].trim() === a.allocatedWeblabTreatment.trim()) {
                b = d
                break
              }
          return b
        },
        excecuteClientSideTargetting: function (a) {
          var d = k.parseJSONStringIfValid(a)
          if (k.isDefined(d)) {
            if (k.isDefined(d.pages))
              return (
                (a = n.pageAdapter()),
                (d = d.pages[a]),
                k.isDefined(d) ? this.startFilteringCriteriaExecutor(d) : !0
              )
            c.incrementCounter(b.SA_CACHE_PREFIX + b.CLIENTSIDE_FILTER + b.INVALID)
            return !1
          }
          return this.startFilteringCriteriaExecutor(a)
        },
        filterShoppingAidsArray: function (a) {
          for (var b = a.length - 1; 0 <= b; b--)
            this.isShoppingAidEligible(a[b]) || this.removeIneligibleAid(a, b)
        },
        filterShoppingAids: function (a) {
          var b = a.ShoppingAidsList
          b &&
            (Array.isArray(b.MultiPageShoppingAids) &&
              this.filterShoppingAidsArray(b.MultiPageShoppingAids),
            Array.isArray(b.ToolTips) && this.filterShoppingAidsArray(b.ToolTips),
            Array.isArray(b.BottomSheets) && this.filterShoppingAidsArray(b.BottomSheets),
            Array.isArray(b.Sparkles) && this.filterShoppingAidsArray(b.Sparkles),
            Array.isArray(b.Audiospots) && this.filterShoppingAidsArray(b.Audiospots),
            Array.isArray(b.Hotspots) && this.filterShoppingAidsArray(b.Hotspots),
            Array.isArray(b.Highlighters) && this.filterShoppingAidsArray(b.Highlighters))
          return a
        },
        startFilteringCriteriaExecutor: function (a) {
          a = this.splitOrCondition(a)
          for (var b, c = 0; c < a.length; c++)
            if ((b = this.executeOrCondition(a[c].trim()))) return !0
          return !1
        },
        splitAndCondition: function (a) {
          return a.split('(AND)')
        },
        splitOrCondition: function (a) {
          return a.split('(OR)')
        },
        executeOrCondition: function (a) {
          if (-1 !== a.indexOf('(AND)')) {
            a = this.splitAndCondition(a)
            for (var b, c = 0; c < a.length; c++)
              if (((b = this.executeFilter(a[c].trim())), !b)) return !1
            return !0
          }
          return this.executeFilter(a)
        },
        executeFilter: function (b) {
          b = b.split(' ')
          switch (b[0]) {
            case 'url':
              return f.execute(b)
            case 'cookie':
              return e.execute(b)
            case 'html':
              return a.execute(b)
            case 'valueOf':
              return d.execute(b)
            case 'valueOfAAPI':
              return !0
            default:
              return !1
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A').register('CookieFilter', function (h) {
      return {
        execute: function (d) {
          var a = this.getCookie(),
            e = d[2]
          switch (d[1]) {
            case 'contains':
              return -1 !== a.indexOf(e)
            case 'not_contains':
              return -1 === a.indexOf(e)
            case 'pattern':
              return 0 < (a.match(e) || []).length
            default:
              return !1
          }
        },
        getCookie: function () {
          return document.cookie
        },
      }
    })
  })()
  ;(function () {
    r.when('A').register('HTMLFilter', function (h) {
      return {
        execute: function (d) {
          var a = d[1]
          switch (d[2]) {
            case 'visible':
              return 0 < h.$(a + ':visible').length
            case 'hidden':
              return 0 < h.$(a + ':hidden').length
            case 'disabled':
              return 0 < h.$(a + ':disabled').length
            case 'not_visible':
              return 0 >= h.$(a + ':visible').length
            case 'not_hidden':
              return 0 >= h.$(a + ':hidden').length
            case 'not_disabled':
              return 0 >= h.$(a + ':disabled').length
            default:
              return !1
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A').register('URLFilter', function (h) {
      return {
        getWindowLocationHref: function () {
          return u.location.href
        },
        execute: function (d) {
          var a = this.getWindowLocationHref(),
            e = d[2]
          switch (d[1]) {
            case 'contains':
              return -1 !== a.indexOf(e)
            case 'equals':
              return a.toLowerCase() === e.toLowerCase()
            case 'not_equals':
              return a.toLowerCase() !== e.toLowerCase()
            case 'pattern':
              return 0 < (a.match(e) || []).length
            default:
              return !1
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A').register('ValueOfFilter', function (h) {
      return {
        execute: function (d) {
          for (
            var a = d[2],
              e = h
                .$(d[1])
                .text()
                .replace(/(\r\n|\n|\r)/gm, ''),
              f = '',
              c = 3;
            c < d.length - 1;
            c++
          )
            f = f + d[c] + ' '
          f += d[d.length - 1]
          switch (a) {
            case 'greater':
              return Number(e.replace(/(,)/gm, '')) > Number(f)
            case 'less':
              return Number(e.replace(/(,)/gm, '')) > Number(f)
            case 'equals':
              return e === f
            case 'not_equals':
              return e !== f
            case 'contains':
              return -1 !== e.indexOf(f)
            case 'not_contains':
              return -1 === e.indexOf(f)
            case 'pattern':
              return 0 < (e.match(f) || []).length
            default:
              return !1
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'QTipsMetrics').register('NestedShoppingAidHelper', function (h, d) {
      function a(a, d) {
        d = d || { bubbles: !1, cancelable: !1, detail: null }
        if (u && u.CustomEvent) var c = new u.CustomEvent(a, { detail: d.detail })
        else
          u &&
            u.initCustomEvent &&
            ((c = document.createEvent('CustomEvent')),
            c.initCustomEvent(a, d.bubbles, d.cancelable, d.detail))
        return c
      }
      return {
        dispatchShoppingAidEvent: function (e) {
          ;(e = a('SA:InvokeOnDemandSA', { detail: e }))
            ? (document.dispatchEvent(e),
              d.incrementCounter('nestedShoppingAidHelper:ShoppingAidData:invoked'))
            : d.incrementCounter('nestedShoppingAidHelper:CustomEvent_not_supported')
        },
        dispatchDismissShoppingAidEvent: function (e) {
          ;(e = a('SA:OnDemandDismissSA', { detail: e }))
            ? (document.dispatchEvent(e),
              d.incrementCounter('nestedShoppingAidHelper:ShoppingAidData:dismissed'))
            : d.incrementCounter('nestedShoppingAidHelper:CustomEvent_not_supported')
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'SAAudiospotConstants',
      'AnchorBasedSAUtils',
      'QTipsMetrics',
      'AudioMetrics',
    ).register('AudioStateManager', function (h, d, a, e, f, c) {
      var b = a.metrics.PREFIX,
        l = {
          playIconId: a.cssConstants.playIconId,
          pauseIconId: a.cssConstants.pauseIconId,
          playSVG: a.cssConstants.playSVG,
          progressBarId: a.cssConstants.progressBarId,
          fillerCircleId: a.cssConstants.fillerCircleId,
          circumference: '',
          elementIdStore: [],
          cacheElementsid: function () {
            this.elementIdStore.playIcon = d(this.playIconId)[0]
            this.elementIdStore.pauseIcon = d(this.pauseIconId)[0]
            this.elementIdStore.playSVG = d(this.playSVG)[0]
            this.elementIdStore.progressBar = d(this.progressBarId)
            this.elementIdStore.fillerCircle = d(this.fillerCircleId)
          },
          _transposePlayIcon: function () {
            d(this.elementIdStore.playIcon).show()
            d(this.elementIdStore.pauseIcon).hide()
            d(this.elementIdStore.fillerCircle)[0].style.fill = '#0B8699'
            d(this.elementIdStore.fillerCircle)[0].r.baseVal.value = 16
          },
          _transposePauseIcon: function () {
            d(this.elementIdStore.playIcon).hide()
            d(this.elementIdStore.pauseIcon).show()
            d(this.elementIdStore.fillerCircle)[0].style.fill = '#fff'
            d(this.elementIdStore.fillerCircle)[0].r.baseVal.value = 12
          },
          _modifyPlayStateCss: function () {
            d(this.elementIdStore.playSVG).show()
          },
          updateVisualTimer: function (a) {
            var b = d(this.elementIdStore.progressBar)[0],
              c = this.circumference
            a = (1 - a) * c
            b.style.setProperty('--initialStroke', c)
            b.style.strokeDashoffset = a
          },
          _resetTimer: function () {
            d(this.elementIdStore.progressBar)[0].style.strokeDashoffset = this.circumference
          },
          setCircumference: function (a) {
            a = d(this.elementIdStore.progressBar)[0]
            this.circumference = 2 * Math.PI * a.r.baseVal.value
          },
        },
        g = {
          initialState: a.audioStates.INITIAL_STATE,
          playState: a.audioStates.PLAY_STATE,
          pauseState: a.audioStates.PAUSE_STATE,
          completeState: a.audioStates.COMPLETION_STATE,
          identifier: '',
          replayed: !1,
          configureAudio: function (a) {
            g.audio = new Audio()
            g.audio.src = a.get('audioSource')
            this.identifier = a.get('identifier')
            this.setState(this.initialState)
            this._addAudioEventListeners()
            c._addMetricEventListeners(g.audio, this.identifier)
          },
          _updateAnimation: function () {
            switch (g.state) {
              case this.playState:
                this._togglePlay()
                break
              case this.pauseState:
                this._togglePause()
                break
              case this.completeState:
                l._resetTimer(), this._togglePause()
            }
          },
          _togglePlay: function () {
            g.audio.play()
            l._transposePauseIcon()
            l._modifyPlayStateCss()
            this.replayed
              ? f.incrementCounter(b + a.metrics.REPLAY, 1, this.identifier)
              : f.incrementCounter(b + a.metrics.PLAY, 1, this.identifier)
          },
          _togglePause: function () {
            g.audio.pause()
            var c = g.audio.currentTime
            g.audio.currentTime = 0
            l._transposePlayIcon()
            f.incrementCounter(b + a.metrics.PAUSE, c, this.identifier)
          },
          _addAudioEventListeners: function () {
            g.audio.addEventListener('ended', function () {
              g.setState(g.completeState)
              g.replayed = !0
              f.incrementCounter(b + a.metrics.END, 1, g.identifier)
            })
            g.audio.addEventListener(
              'timeupdate',
              h.throttle(function () {
                g.getCurrentState() !== g.completeState &&
                  l.updateVisualTimer(g.audio.currentTime / g.audio.duration)
              }, 500),
            )
          },
          setState: function (a) {
            a && ((g.state = a), this._updateAnimation())
          },
          getCurrentState: function () {
            return g.state
          },
          cacheElementData: function () {
            l.cacheElementsid()
            l.setCircumference()
          },
        }
      return g
    })
  })()
  ;(function () {
    r.register('SAConfig', function () {
      return {
        cookies: { language: 'lc-main' },
        defaultLoP: 'en_US',
        intervalBetweenSuccessiveTips: 3e3,
      }
    })
  })()
  ;(function () {
    r.register('SAEndPointsConfig', function () {
      return {
        fetchShoppingAidsEndPoint: '/shoppingaids/fetchshoppingaids',
        logImpressionEndPoint: '/shoppingaids/logimpression',
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'ShoppingAidsGenericUtils',
      'QTipsMetrics',
      'ShoppingAidsFilters',
      'ContextAwareSubstitutor',
    ).register('AnchorBasedSAUtils', function (h, d, a, e, f, c) {
      return {
        metricsPrefix: 'SA_AnchorBasedSAUtils_',
        aPage: '#a-page',
        processAnchor: function (a, c) {
          c = a.split(c)
          Array.isArray(c) || (c = [c])
          Array.prototype.find ||
            (Array.prototype.find = function (a, b) {
              var c = this.length,
                d
              for (d = 0; d < c; d += 1) if (a.call(b, this[d], d, this)) return this[d]
              return x
            })
          return (
            c.find(function (a, b, c) {
              return d(a).length
            }) || a
          )
        },
        getIndexByAnchor: function (a, c) {
          Array.prototype.findIndex ||
            (Array.prototype.findIndex = function (a, b) {
              if (null === this)
                throw new TypeError('Array.prototype.findIndex called on null or undefined')
              if ('function' !== typeof a) throw new TypeError('callback must be a function')
              for (var c = Object(this), d = c.length, e, g = 0; g < d; g++)
                if (((e = c[g]), a.call(b, e, g, c))) return g
              return -1
            })
          return a.findIndex(function (a, b, d) {
            return c + '' === Object.keys(d[b])[0]
          }, c)
        },
        getAUIScrollPageValue: function () {
          if (0 < d(this.aPage).length) {
            var b = parseInt(d(this.aPage).css('top'))
            return a.isDefined(b) ? b : 0
          }
          return 0
        },
        getIndexByIdentifier: function (a, c) {
          Array.prototype.findIndex ||
            (Array.prototype.findIndex = function (a, b) {
              if (null === this)
                throw new TypeError('Array.prototype.findIndex called on null or undefined')
              if ('function' !== typeof a) throw new TypeError('callback must be a function')
              for (var c = Object(this), d = c.length, e, g = 0; g < d; g++)
                if (((e = c[g]), a.call(b, e, g, c))) return g
              return -1
            })
          return a.findIndex(function (a, b, d) {
            return c + '' === d[b].id
          }, c)
        },
        isElementPresent: function (b) {
          return d(b).length && 0 < d(b).length && a.isDefined(d(b).offset()) && d(b).is(':visible')
        },
        isElementVisible: function (b) {
          var c = u.scrollY || u.pageYOffset,
            e = document.documentElement.scrollTop || document.body.scrollTop
          c = a.isDefined(c) ? c : e
          e = c + (u.innerHeight || d(u).height())
          var f = d(b)
          f = a.isDefined(f) ? f.offset() : x
          return a.isDefined(f) && ((f = f.top), d(b + ':visible')[0] && c <= f && f < e) ? !0 : !1
        },
        isShoppingAidOverPopoverVisible: function (a, c) {
          return this.isElementVisible(a) && this.isElementVisible(c) ? !0 : !1
        },
        setDependentElement: function (a) {
          var b = a.get('popoverAnchor')
          b &&
            ((b = b.split('::')),
            b[1] && 'disable' === b[1] && a.set({ dependentElementAnchor: b[1] }))
        },
        _isElementDisabled: function (a) {
          return d(a + ':disabled')[0] ? !0 : !1
        },
        isDependentCheckSatisfied: function (a) {
          return (a = a.get('dependentElementAnchor')) ? this._isElementDisabled(a) : !0
        },
        isElementOrParentFixed: function (a) {
          var b = !1,
            c = d(a)
          c.add(c.parents()).each(function () {
            'fixed' === d(this).css('position') &&
              ((b = !0), e.incrementCounter(this.metricsPrefix + 'elementOrParentFixed_' + a))
          })
          return b
        },
        onDemandContextAwareSubstitution: function (b, d) {
          b = h.parseJSON(b.toJson())
          var e = f.getContextTargetingIndex(b)
          if (c.substitute(b, e, d)) return a.convertModel(b)
        },
        getAidAnchorElement: function (a, c) {
          return (c = this.getAnchorFieldForValidSAType(c)) ? a[c] : x
        },
        getAnchorFieldForValidSAType: function (a) {
          return {
            tool_tip: 'elementAnchor',
            hotspot: 'hotspotAnchor',
            audiospot: 'audiospotAnchor',
          }[a]
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipsMetrics',
      'QTipLibrary',
      'SAMetricConstants',
      'PageResolver',
      'ShoppingAidsCacheData',
      'LocalStorageInterface',
      'SASupportedMarketplaceConfig',
      'SADesktopConfig',
      'SACommonConstants',
    ).register('ShoppingAidsGenericUtils', function (h, d, a, e, f, c, b, l, g, k, n) {
      var m
      return {
        isDefined: function (a) {
          return null !== a && a !== x
        },
        isObjectEmpty: function (a) {
          return h.objectIsEmpty(a)
        },
        _getUserAgent: function () {
          return u.navigator.userAgent.toLowerCase()
        },
        _getCookieList: function () {
          return document.cookie ? document.cookie.split(';') : []
        },
        platformCheck: function () {
          var b = 'Unsupported'
          this.isMobileDevice()
            ? this.isAndroidDevice()
              ? (b = this.isMShop() ? 'Android' : 'mweb_Android')
              : this.isIOSDevice() && (b = this.isMShop() ? 'iPhone' : 'mweb_iPhone')
            : this.isDesktopDevice()
              ? (b = 'Desktop')
              : this.isTabletDevice() && (b = 'Tablet')
          a.incrementCounter('SA_Platform_' + b)
          return b
        },
        isPlatformSupportedForToolTipUxExperiment: function () {
          var a = this.platformCheck()
          return a !== n.UNSUPPORTED_PLATFORM && a !== n.DESKTOP && a !== n.TABLET
        },
        isAndroidDevice: function () {
          return !!h.capabilities && h.capabilities.android
        },
        isIOSDevice: function () {
          return !!h.capabilities && h.capabilities.ios
        },
        isMShop: function () {
          return !!h.capabilities && h.capabilities.isAmazonApp
        },
        isMobileDevice: function () {
          return !!h.capabilities && h.capabilities.mobile
        },
        isDesktopDevice: function () {
          return !!h.capabilities && !h.capabilities.mobile && !h.capabilities.tablet
        },
        isTabletDevice: function () {
          return !!h.capabilities && h.capabilities.tablet
        },
        hasNoPopover: function (a, b, c) {
          a = d(a)
          for (c = 0; c < a.length; c++) {
            var e = a[c].style,
              f = a[c].className
            if (e && e.display && 'none' !== e.display && -1 === f.indexOf('a-popover-secondary'))
              return !1
          }
          return !d('.a-sheet-content-container').is(':visible') && !d(b).is(':visible')
        },
        weblabTriggerAndCheck: function (b, c) {
          if ('sparkle' === c) {
            c = new e.Model()
            c.set({ allocatedWeblabTreatment: b.getAllocatedWeblabTreatment() })
            c.set({ weblabName: b.getWeblabName() })
            c.set({ desiredWeblabTreatment: b.getDesiredWeblabTreatment() })
            var d = c
          } else d = b
          if (d) {
            c = d.get('allocatedWeblabTreatment')
            var g = d.get('weblabName')
            d = d.get('desiredWeblabTreatment')
            return g && c && d
              ? (u.ue.trigger &&
                  (u.ue.trigger(g, c),
                  a.incrementCounter(f.SHOPPINGAIDS_WEBLAB_TRIGGER + g + '_' + c)),
                c === d && !b.get('weblabTriggerOnlyFlag'))
              : !0
          }
          return !1
        },
        logClientSideWeblabMetricsForSAList: function (b, c, d) {
          h.each(b, function (b, e) {
            h.each(b, function (b, e) {
              b.allocatedWeblabTreatment &&
                b.weblabName &&
                b.desiredWeblabTreatment &&
                (a.incrementCounter(c + b.weblabName + '_' + b.allocatedWeblabTreatment),
                d &&
                  a.incrementCounter(
                    f.SHOPPINGAIDS_WEBLAB_AFTER_FETCH_CALL_BACKEND_CALL +
                      b.weblabName +
                      '_' +
                      b.allocatedWeblabTreatment,
                  ))
            })
          })
        },
        logClientSideWeblabMetrics: function (b, c) {
          if (b) {
            var d = b.get('allocatedWeblabTreatment'),
              e = b.get('weblabName')
            b = b.get('desiredWeblabTreatment')
            e && d && b && a.incrementCounter(c + e + '_' + d)
          }
        },
        getCookie: function (a) {
          for (var b = this._getCookieList(), c = 0; c < b.length; c++) {
            var d = b[c].trim().split('\x3d'),
              e = d[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            if (a === e)
              return d
                .slice(1)
                .join('\x3d')
                .replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
          }
        },
        getFromLocalStorage: function (a) {
          if (l.isLocalStorageExposed()) return localStorage.getItem(a)
        },
        setInLocalStorage: function (a, b) {
          if (l.isLocalStorageExposed())
            try {
              localStorage.setItem(a, b)
            } catch (z) {}
        },
        removeFromLocalStorage: function (a) {
          if (l.isLocalStorageExposed()) return localStorage.removeItem(a)
        },
        removeFromLocalStorageIfPresent: function (a) {
          if (l.isLocalStorageExposed())
            return localStorage.getItem(a) ? (localStorage.removeItem(a), 1) : 0
        },
        getWindowLocationPath: function () {
          return u.location.pathname
        },
        getWindowLocationQueryString: function () {
          return u.location.search
        },
        isSADebugRequest: function () {
          return (
            h.contains(c.getWindowLocationHref(), 'isSADebug') &&
            '1' === this.getQueryParameter('isSADebug')
          )
        },
        isMarketplaceRTLEnabled: function () {
          return 'rtl' === document.dir
        },
        isShoppingAidForWeblabTesting: function (a) {
          return a && -1 !== a.indexOf('Weblab_Test')
        },
        getQueryParameter: function (a) {
          this.isDefined(m) || (m = this.getQueryParameterMap())
          return m[a] ? m[a] : ''
        },
        getQueryParameterMap: function () {
          for (
            var a = {}, b = (c.getWindowLocationHref().split('?')[1] || '').split('\x26'), d = 0;
            d < b.length;
            d++
          ) {
            var e = b[d].split('\x3d'),
              f = decodeURIComponent(e[0])
            e = decodeURIComponent(e[1])
            f && e && (a[f] = e)
          }
          return a
        },
        getSAListTypeFromShoppingAidsType: function (a) {
          return {
            tool_tip: 'ToolTips',
            bottom_sheet: 'BottomSheets',
            sparkle: 'Sparkles',
            multiPageShoppingAids: 'MultiPageShoppingAids',
            hotspot: 'Hotspots',
            audiospot: 'Audiospots',
          }[a]
        },
        isNonEmptyArray: function (a) {
          return a && Array.isArray(a) && a.length
        },
        addStyleToHead: function (a) {
          var b = document.createElement('style')
          b.innerHTML = a
          document.head.appendChild(b)
        },
        defaultJSONIfUndefined: function (a, b) {
          return a || b
        },
        parseJSONStringIfValid: function (a) {
          try {
            var b = h.parseJSON(a)
            if (b && 'object' === typeof b) return b
          } catch (z) {}
          return null
        },
        getAsin: function () {
          var a = (a = u.location.href.match(
            /\/(?:dp|gp\/product|gp\/aw\/d|gp\/mobile\/udp)\/([a-zA-Z0-9]{10})(?:\/|\?|#|$)/,
          ))
            ? a[1]
            : void 0
          return 'undefined' !== typeof a ? a : 'undefined' !== typeof u.ue_pti ? u.ue_pti : ''
        },
        isTandemDetailPage: function () {
          return document.getElementById('audibleNarrationTandem') ||
            document.getElementById('audiblesampleplayer_mobile') ||
            document.getElementById('audiblesampleplayer_web') ||
            document.getElementById('audiblesampleplayer_mobileApp')
            ? !0
            : !1
        },
        isDesktopPageRequestSupported: function () {
          var a = !1
          switch (c.pageAdapter()) {
            case 'detailpage':
              a = this.isTandemDetailPage()
          }
          return a
        },
        getMarketplaceID: function () {
          return u.ue_mid
        },
        getPageHitRequestID: function () {
          return u.ue_id ? u.ue_id : ''
        },
        isSupportedMarketplace: function () {
          return this.getMarketplaceName() ? !0 : !1
        },
        getMarketplaceName: function () {
          var a = this.getMarketplaceID()
          return g.supportedMarketplace[a]
        },
        minutesBetween: function (a, b) {
          return Math.round(Math.abs(a - b) / 6e4)
        },
        isMutationObserverSupported: function () {
          return u && u.MutationObserver
        },
        isInRange: function (a, b, c) {
          return a >= b && a <= c
        },
        isValidCampaignAvailable: function (a) {
          for (var b in a) if (!this.isObjectEmpty(a[b].data)) return !0
          return !1
        },
        shouldBackOff: function (a) {
          return 0 < b.getTTLExpFactorForPageType(a) && b.cacheExpiryTimeForPage(a) >= Date.now()
            ? !0
            : !1
        },
        dispatchMASHEvent: function (a, b, c) {
          this.isDefined(a) &&
            this.isDefined(b) &&
            this.isDefined(c) &&
            r.when('mash').execute(function (d) {
              d.dispatchEvent({ type: 'sa_'.concat(a.toString(), '.', b.toString()), detail: c })
            })
        },
        getAbsoluteHeight: function (a) {
          a = 'string' === typeof a ? document.querySelector(a) : a
          var b = u.getComputedStyle(a)
          b = parseFloat(b.marginTop) + parseFloat(b.marginBottom)
          return Math.ceil(a.offsetHeight + b)
        },
        convertModel: function (a) {
          return (a = new e.Model(a))
        },
        detachTrigger: function (a, b) {
          this.isDefined(a) && h.off(a, b)
        },
        isAPDNativeEnvironment: function () {
          return (
            'undefined' !== typeof u.isNativeEnvironment &&
            u.isNativeEnvironment &&
            'undefined' !== typeof u.NativeInterface &&
            u.NativeInterface
          )
        },
        getQueryParameterValue: function (a) {
          return new u.URLSearchParams(u.location.search).get(a)
        },
      }
    })
  })()
  ;(function () {
    var h
    r.when('page-detector-current-page').execute(function (d) {
      h = d
    })
    r.when('A', 'jQuery', 'QTipsMetrics', 'SAPageMap').register(
      'PageResolver',
      function (d, a, e, f) {
        return {
          urlPageTypeMap: f.urlPageTypeMap,
          pageMap: f.windowPageTypeMap,
          subPageTypeMap: f.subPageTypeMap,
          umbrellaPageTypes: f.umbrellaPageTypes,
          getWindowLocationHref: function () {
            return u.location.href
          },
          pageAdapter: function () {
            var a = u.ue_pty
            if (a && ((a = a.toLowerCase()), this.pageMap[a])) {
              var b = this.pageMap[a]
              e.incrementCounter('qtipsWindowUePtyUsed')
            }
            b = this.determineSubPageType(b)
            if (!b) {
              a = this.getWindowLocationHref()
              for (var d in this.urlPageTypeMap)
                if (this.urlPageTypeMap.hasOwnProperty(d) && a.match(new RegExp(d, 'i')))
                  return e.incrementCounter('qtipsURLRegexUsed'), this.urlPageTypeMap[d]
            }
            return b
          },
          subPageTypeAdapter: function (a) {
            var b
            if ((a = this.subPageTypeFactory(a)))
              (a = a.toLowerCase()), this.subPageTypeMap[a] && (b = this.subPageTypeMap[a])
            return b
          },
          subPageTypeFactory: function (a) {
            if ('checkoutPipeline' === a)
              return (
                e.incrementCounter('qtips-checkoutPageDetectorUsed'), h ? h.getCurrentPage() : null
              )
            e.incrementCounter('qtips-WindowUeSPtyUsed')
            return u.ue_spty
          },
          isUmbrellaPageTypes: function (a) {
            return a ? (this.umbrellaPageTypes[a] ? !0 : !1) : !1
          },
          determineSubPageType: function (a) {
            return this.isUmbrellaPageTypes(a) ? this.subPageTypeAdapter(a) : a
          },
        }
      },
    )
  })()
  ;(function () {
    r.when('A').register('SAPageMap', function (h) {
      return {
        windowPageTypeMap: {
          'gateway-phone-web': 'gateway',
          'gateway-phone-apps': 'gateway',
          'exports-gateway-phone-web': 'gateway',
          'exports-gateway-phone-apps': 'gateway',
          detailaw: 'detailpage',
          detailwebview: 'detailpage',
          searchaw: 'search',
          checkoutthankyouaw: 'thankYou',
          checkoutthankyouwebview: 'thankYou',
          amazonmoneyamazonapp: 'money',
          shoppingcartaw: 'cart',
          shoppingcartwebview: 'cart',
          amazonmoneymobile: 'pay',
          inprepaidrecharge: 'recharge',
          inbillpayments: 'billPayment',
          flights: 'travel',
          bustickets: 'travel',
          movies: 'entertainment',
          goldboxaw: 'deals',
          mobiledeals: 'deals',
          spark: 'foundIt',
          landingaw: 'browse',
          highvelocityevent: 'event',
          productlifecyclesupport: 'productSupport',
          freshmerchandisedcontentmobile: 'fmc',
          checkoutpipeline: 'checkoutPipeline',
          livedestination: 'live',
          primelandingpagehorizonte: 'prime',
          searchlessorderpharmacy: 'pharmacyPrescriptionUpload',
          rxmanagementpage: 'pharmacyPrescriptionManagement',
          amazonstores: 'amazonStores',
          gphelp: 'help',
          searchautocomplete: 'autocomplete',
          'amazon-bazaar-gateway-page': 'bazaarGateway',
          'amazon-bazaar-account-page': 'bazaarAccount',
          'amazon-bazaar-explore-page': 'bazaarExplore',
          lists: 'lists',
        },
        urlPageTypeMap: {
          '/(d|product|dp|reader|detail|ASIN|udp)(/|\\?.\\*ASIN\x3d)([A-Z0-9]{8,13})[$\\/\x26\\?]?':
            'detailpage',
          '/(search|s)/': 'search',
          '/events': 'event',
          '/live/': 'live',
          '/b\\S+node': 'browse',
          '(.amazon.\\[^\\/\\?]+$)|(gp/(homepage.html|aw(?!/(gb|c|d|s|search)))|(exec/obidos/subst/home/home.html)|/{2}.*?/$|/{2}[^/]*?/(ref|sessionID|\\?|#))':
            'gateway',
          '/gp/buy/thankyou/': 'thankYou',
          '/gp/buy/addressselect/handlers/display': 'checkoutSelectAddress',
          '/gp/buy/addressselect/handlers/edit-address': 'checkoutEditAddress',
          '/gp/buy/addressselect/handlers/new': 'checkoutNewAddress',
          '/gp/buy/shipoptionselect/handlers/display': 'checkoutShipOption',
          '/gp/buy/payselect/handlers/display': 'checkoutPayment',
          '/gp/buy/spc/handlers/display': 'checkoutConfirmOrder',
          '/gp/buy/billingaddressselect/handlers/display': 'checkoutBilling',
          '/gp/buy/pharmacy/handlers/display': 'checkoutPharma',
          '/gp/(sva(?!(\\?|/dashboard|/$))\\S+)|(payment/statement)': 'pay',
          '(/gp/(aw/c|(cart/view)))': 'cart',
          '/gp/(sva(/dashboard|\\?|/$|$))|(/amazonpay/home)': 'money',
          '/hfc/mobileRecharge': 'recharge',
          '/hfc/bill/lpg': 'lpg',
          '/hfc/dth': 'dth',
          '/hfc/bill/gas': 'gas',
          '/hfc/bill/subscriptions': 'subscriptions',
          '/hfc/bill/cable_tv': 'cableTV',
          '/hfc/bill/water': 'water',
          '/hfc/bill/municipal_tax': 'municipalTax',
          '/hfc/bill/electricity': 'electricity',
          '/hfc/bill/landline': 'landline',
          '/hfc/bill/education_fee': 'educationFee',
          '/hfc/bill/mobile_postpaid': 'postpaid',
          '/hfc/bill/credit-cards': 'creditCard',
          '/hfc/bill/google_play_recharge': 'googlePlay',
          '/hfc/addMoney': 'addMoney',
          '/hfc/fastag': 'fastag',
          '/bus-tickets': 'bus',
          '/flights': 'flight',
          '/train': 'train',
          '/(movie-tickets)': 'entertainment',
          '/gp/(aw/gb)|(mobile/deals)': 'deals',
          '/(your-account/order-history|your-orders|progress-tracker/package)': 'yourorder',
          '/finds': 'foundIt',
          '/spr/returns/confirmation': 'onlineReturnsConfirmation',
          '/spr/returns/contract': 'onlineReturnsContract',
          '/spr/returns': 'onlineReturns',
          '/ps/product-support': 'productSupport',
          '/(fmc|alm/(storefront|category))': 'fmc',
          '/amazonprime': 'prime',
          '/prescriptions/quickupload': 'pharmacyPrescriptionUpload',
          '/prescriptionmanagement/viewAllRequests': 'pharmacyPrescriptionManagement',
          '/stores/page': 'amazonStores',
          '/gp/help': 'help',
          '/autocomplete': 'autocomplete',
          '/amazon-bazaar/store': 'bazaarGateway',
          '/amazon-bazaar/my-account': 'bazaarAccount',
          '/amazon-bazaar/all-categories': 'bazaarExplore',
          '/hz/wishlist/yoursaves': 'lists',
        },
        subPageTypeMap: {
          dth: 'dth',
          lpg: 'lpg',
          gas: 'gas',
          subscriptions: 'subscriptions',
          cable_tv: 'cableTV',
          water: 'water',
          municipal_tax: 'municipalTax',
          electricity: 'electricity',
          mobile_postpaid: 'postpaid',
          credit_card_landingpage: 'creditCard',
          landline: 'landline',
          education_fee: 'educationFee',
          google_play_recharge: 'googlePlay',
          fastag: 'fastag',
          add_money: 'addMoney',
          shipaddressselect: 'checkoutSelectAddress',
          editaddress: 'checkoutEditAddress',
          newaddress: 'checkoutNewAddress',
          shipoptionselect: 'checkoutShipOption',
          payselect: 'checkoutPayment',
          spc: 'checkoutConfirmOrder',
          billingaddressselect: 'checkoutBilling',
          pip: 'checkoutInterstitial',
          rxselect: 'checkoutPharma',
        },
        umbrellaPageTypes: { billPayment: !0, checkoutPipeline: !0 },
      }
    })
  })()
  ;(function () {
    r.register('SACommonConstants', function () {
      return {
        MWEB_IPHONE: 'mweb_iPhone',
        MWEB_ANDROID: 'mweb_Android',
        DESKTOP: 'Desktop',
        TABLET: 'Tablet',
        MSHOP_IPHONE: 'iPhone',
        MSHOP_ANDROID: 'Android',
        UNSUPPORTED_PLATFORM: 'Unsupported',
        DEFAULT_PAGE_CACHE_TTL: 15,
      }
    })
  })()
  ;(function () {
    r.when('A', 'QTipsMetrics', 'SACommonConfig', 'SAFeature', 'SACacheConfig').register(
      'ShoppingAidsCacheData',
      function (h, d, a, e, f) {
        var c = {}
        return {
          setSACacheData: function (a) {
            null !== a && (c = a)
          },
          emptySACacheData: function () {
            c = {
              version: a.cacheVersion,
              TTL: 6e4 * a.cacheTTLInMinutes + Date.now(),
              sessionDayImpressionCount: {},
              anchorGroups: {},
            }
          },
          getSACacheData: function (a) {
            return c
          },
          getSAAnchorGroup: function () {
            return c.anchorGroups
          },
          getVersion: function () {
            return c.version
          },
          setVersion: function (a) {
            c.version = a
          },
          getTTL: function () {
            return c.TTL
          },
          setTTL: function (a) {
            c.TTL = a
          },
          getSessionDayImpressionCount: function () {
            return c.sessionDayImpressionCount
          },
          setSessionDayImpressionCount: function (a) {
            c.sessionDayImpressionCount = a
          },
          getSessionDayImpressionCountForSAType: function (a) {
            try {
              return c.sessionDayImpressionCount[this._getDateString()][a]
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setAnchorGroupLastUpdateTime: function (a) {
            try {
              c.anchorGroups || (c.anchorGroups = {}),
                c.anchorGroups[a] || (c.anchorGroups[a] = {}),
                (c.anchorGroups[a].groupLastImpressionTime = Date.now())
            } catch (l) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          setSessionDayImpressionCountForSAType: function (a, e) {
            try {
              ;(c.sessionDayImpressionCount &&
                c.sessionDayImpressionCount[this._getDateString()]) ||
                ((c.sessionDayImpressionCount = {}),
                (c.sessionDayImpressionCount[this._getDateString()] = {})),
                (c.sessionDayImpressionCount[this._getDateString()][a] = e)
            } catch (g) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          incrementSessionDayImpressionCountForSAType: function (a) {
            var b = this.getSessionDayImpressionCountForSAType(a)
            b === x && (b = 0)
            this.setSessionDayImpressionCountForSAType(a, b + 1)
          },
          getDailyImpressionCountForPageType: function (a) {
            try {
              return c[a].impressionCount[this._getDateString()]
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setDailyImpressionCountForPageType: function (a, e) {
            try {
              c[a] || (c[a] = {}), (c[a].impressionCount = e)
            } catch (g) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          incrementDailyImpressionCountForPageType_SAType: function (a, c) {
            var b = this.getDailyImpressionCountForPageType_SAType(a, c)
            b === x && (b = 0)
            this.setDailyImpressionCountForPageType_SAType(a, c, b + 1)
          },
          getDailyImpressionCountForPageType_SAType: function (a, c) {
            try {
              return this.getDailyImpressionCountForPageType(a)[c]
            } catch (g) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setDailyImpressionCountForPageType_SAType: function (a, e, f) {
            try {
              c[a] || (c[a] = {}),
                (c[a].impressionCount && c[a].impressionCount[this._getDateString()]) ||
                  ((c[a].impressionCount = {}), (c[a].impressionCount[this._getDateString()] = {})),
                (c[a].impressionCount[this._getDateString()][e] = f)
            } catch (k) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          getTTLForPageType: function (a) {
            try {
              return c[a].TTL
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          getTTLExpFactorForPageType: function (a) {
            try {
              return c[a].TTL.expFactor
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          cacheExpiryTimeForPage: function (a) {
            try {
              return c[a].TTL.validTill
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setTTLForPageType: function (a, e) {
            try {
              c[a] || (c[a] = {}), (c[a].TTL = e)
            } catch (g) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          getSAListForPageType: function (a) {
            try {
              return c[a].shoppingAidsList
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), {}
            }
          },
          setSAListForPageType: function (a, e) {
            try {
              c[a] || (c[a] = {}), (c[a].shoppingAidsList = e)
            } catch (g) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          removeSAListForPageType: function (a) {
            try {
              delete c[a].shoppingAidsList
            } catch (l) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          getSAPriorityListForPageType_SAType: function (a, e) {
            try {
              return c[a].shoppingAidsList[e].priorityList
            } catch (g) {
              return d.incrementCounter('SA_Cache_Error_1'), []
            }
          },
          getCaheHitFrequencyForPageType: function (a) {
            try {
              return c[a].count ? c[a].count : 0
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setCaheHitFrequencyForPageType: function (a, e) {
            try {
              c && c[a] && (c[a].count = e)
            } catch (g) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          setSAPriorityListForPageType_SAType: function (a, e, f) {
            try {
              c[a] || (c[a] = {}),
                c[a].shoppingAidsList || (c[a].shoppingAidsList = {}),
                c[a].shoppingAidsList[e] ||
                  (c[a].shoppingAidsList[e] = { data: {}, priorityList: [] }),
                (c[a].shoppingAidsList[e].priorityList = f)
            } catch (k) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          removeShoppingAidsFromCache: function (a, e, f, k) {
            try {
              k
                ? this.removeNestedShoppingAidsFromCache(a, e, f)
                : this._deleteShoppingAidsFromCache(a, e, f, c)
            } catch (n) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          removeNestedShoppingAidsFromCache: function (a, e, f) {
            try {
              var b = this.getShoppingAidsDataForPageType_SAType(a, e, f),
                g = b.parentIdentity.identifier,
                l = b.parentIdentity.pageType,
                p = b.parentIdentity.SAType,
                v = this.getShoppingAidsDataForPageType_SAType(l, p, g).nestedSAPriorityList
              h.each(v, function (a) {
                delete c[a.pageType].shoppingAidsList[a.SAType].data[a.identifier]
              })
              this._deleteShoppingAidsFromCache(l, p, g, c)
            } catch (z) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          _deleteShoppingAidsFromCache: function (a, c, d, e) {
            var b = this.getSAPriorityListForPageType_SAType(a, c)
            b.splice(b.indexOf(d), 1)
            delete e[a].shoppingAidsList[c].data[d]
          },
          getShoppingAidsDataForPageType_SAType: function (a, e, f) {
            try {
              return c[a].shoppingAidsList[e].data[f]
            } catch (k) {
              return d.incrementCounter('SA_Cache_Error_1'), 0
            }
          },
          setShoppingAidsDataForPageType_SAType: function (a, e, f, k) {
            try {
              c[a] || (c[a] = {}),
                c[a].shoppingAidsList || (c[a].shoppingAidsList = {}),
                c[a].shoppingAidsList[e] ||
                  (c[a].shoppingAidsList[e] = { data: {}, priorityList: [] }),
                (c[a].shoppingAidsList[e].data[f] = k)
            } catch (n) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          _getDateString: function () {
            var a = new Date()
            return '' + a.getUTCFullYear() + '-' + a.getUTCMonth() + '-' + a.getUTCDate()
          },
          getSAContextObject: function () {
            try {
              return c.context
            } catch (b) {
              return d.incrementCounter('SA_Cache_Error_1'), {}
            }
          },
          setSAContextObject: function (a) {
            try {
              c.context = a
            } catch (l) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          getSAContextCookies: function () {
            try {
              return c.context.cookies
            } catch (b) {
              return d.incrementCounter('SA_Cache_Error_1'), {}
            }
          },
          setSAContextCookies: function (a) {
            try {
              c.context || (c.context = {}), (c.context.cookies = a)
            } catch (l) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          getBackoffConfig: function () {
            try {
              return c.BackoffConfig
            } catch (b) {
              return d.incrementCounter('SA_Cache_Error_1'), {}
            }
          },
          setBackoffConfig: function (a) {
            try {
              c.BackoffConfig = a
            } catch (l) {
              d.incrementCounter('SA_Cache_Error_1')
            }
          },
          removeValidTillForPageType: function (a) {
            if (a)
              try {
                delete c[a].TTL.validTill
              } catch (l) {
                d.incrementCounter('SA_Cache_Error_1')
              }
          },
          setPrefetchSourcePage: function (a, e) {
            if (a)
              try {
                c[a].prefetchSourcePage = e
              } catch (g) {
                d.incrementCounter('SA_Cache_Error_1')
              }
          },
          removePrefetchSourcePage: function (a) {
            if (a)
              try {
                delete c[a].prefetchSourcePage
              } catch (l) {
                d.incrementCounter('SA_Cache_Error_1')
              }
          },
          getPrefetchSourcePage: function (a) {
            if (a)
              try {
                return c[a].prefetchSourcePage
              } catch (l) {
                return d.incrementCounter('SA_Cache_Error_1'), ''
              }
          },
          isCachePrefetchedForPageType: function (a) {
            try {
              return c[a].hasOwnProperty('prefetchSourcePage')
            } catch (l) {
              return d.incrementCounter('SA_Cache_Error_1'), !1
            }
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipsMetrics',
      'SAMetricConstants',
      'LocalStorageInterface',
      'SACommonConfig',
      'ShoppingAidsCacheData',
      'CacheValidator',
      'ShoppingAidsGenericUtils',
      'StatefulSADataStore',
      'SAFeature',
      'StatefulSAEligiblityHelper',
      'AnchorBasedSAUtils',
    ).register('CacheManager', function (h, d, a, e, f, c, b, l, g, k, n, m, p) {
      var v = e.SA_CACHE_PREFIX
      d = {
        init: function () {
          if (l.isSACacheDataEmpty()) {
            var a = f.getFromLocalStorage(c.saCacheKey)
            this.isObjectEmpty(a) ? b.emptySACacheData() : b.setSACacheData(a)
          }
        },
        invalidateCacheForPage: function (c) {
          b.removeSAListForPageType(c)
          b.removeValidTillForPageType(c)
          b.isCachePrefetchedForPageType(c) && b.removePrefetchSourcePage(c)
          this.storeEntireCache()
          a.incrementCounter(v + e.SA_CACHE_INVALIDATE + c)
        },
        isObjectEmpty: function (a) {
          return h.objectIsEmpty(a)
        },
        updateCacheAfterLogImpression: function (b) {
          if (b) {
            var c = b.shoppingAidsType,
              d = !1
            h.contains(c, ':childSA') && ((c = c.split(':childSA', 1)), (d = !0))
            g.isDefined(p.getAnchorFieldForValidSAType(c)) &&
              !d &&
              this.updateAnchorGroupImpressionTime(b.shoppingAidsAnchorGroup)
            ;(c = g.getSAListTypeFromShoppingAidsType(c))
              ? (d ||
                  (this.updateSessionDayImpressionCount(c),
                  this.updatePageTypeImpressionCount(b.pageType, c)),
                this.updateAidsData(b.pageType, c, b.identifier, d),
                this.storeEntireCache())
              : a.incrementCounter(v + e.SATYPE_UNDEFINED)
          } else a.incrementCounter(v + e.IMPRESSIONDATA_UNDEFINED)
        },
        updateAnchorGroupImpressionTime: function (a) {
          b.setAnchorGroupLastUpdateTime(a)
        },
        updateSessionDayImpressionCount: function (a) {
          b.incrementSessionDayImpressionCountForSAType(a)
        },
        updatePageTypeImpressionCount: function (a, c) {
          b.incrementDailyImpressionCountForPageType_SAType(a, c)
        },
        updateAidsData: function (d, f, l, k) {
          try {
            var n = b.getShoppingAidsDataForPageType_SAType(d, f, l)
            n.lastImpressionTime = Date.now()
            n.maxDisplayCount || (n.maxDisplayCount = 1)
            g.isDefined(n.impressionInterval) ||
              (n.impressionInterval = c.defaultImpressionIntervalInHours)
            --n.maxDisplayCount
            var h = n.lastImpressionTime + 36e5 * n.impressionInterval
            if (h > b.cacheExpiryTimeForPage(d) || h > b.getTTL() || 0 >= n.maxDisplayCount)
              n.allocatedWeblabTreatment || n.weblabName || n.desiredWeblabTreatment
                ? (n.weblabTriggerOnlyFlag = !0)
                : b.removeShoppingAidsFromCache(d, f, l, k)
            a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_1)
            a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_1_ + l)
            a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_1_ + f)
            a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_1_ + d)
          } catch (K) {
            a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_0),
              a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_0_ + l),
              a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_0_ + f),
              a.incrementCounter(v + e.LOG_IMPRESSION + e.STATUS_0_ + d)
          }
        },
        getShoppingAidsListForPageFromCache: function (d) {
          var f = this,
            g = {},
            l = c.saListParadigms
          l && d
            ? (h.each(
                l,
                function (c) {
                  var l = [],
                    k = b.getSAPriorityListForPageType_SAType(d, c)
                  k &&
                    h.each(
                      k,
                      function (f) {
                        if ('string' === typeof f || f instanceof String) {
                          var g = b.getShoppingAidsDataForPageType_SAType(d, c, f)
                          g &&
                            (l.push(g),
                            a.incrementCounter(v + e.GET_SHOPPING_AIDS + e.STATUS_1_ + f))
                        }
                      },
                      f,
                    )
                  g[c] = l
                },
                f,
              ),
              a.incrementCounter(v + e.GET_SHOPPING_AIDS + e.STATUS_1_ + d))
            : a.incrementCounter(v + e.GET_SHOPPING_AIDS + e.STATUS_0_ + d ? d : 'unknown')
          return g
        },
        updateShoppingAidsListForPageInCache: function (c, d) {
          c && d && !this.isObjectEmpty(d)
            ? (b.setSAListForPageType(c, d),
              (d = this.constructTTLObjectForPage(c, d)),
              b.setTTLForPageType(c, d),
              this.storeEntireCache(),
              a.incrementCounter(v + e.UPDATE_SHOPPING_AIDS + e.STATUS_1),
              a.incrementCounter(v + e.UPDATE_SHOPPING_AIDS + e.STATUS_1_ + c))
            : (a.incrementCounter(v + e.UPDATE_SHOPPING_AIDS + e.STATUS_0),
              a.incrementCounter(v + e.UPDATE_SHOPPING_AIDS + e.STATUS_0_ + c ? c : 'unknown'))
        },
        updateContextForShoppingAidsCache: function (d) {
          if (!d || this.isObjectEmpty(d.cookies))
            return a.incrementCounter(v + e.UPDATE_CONTEXT + e.STATUS_0), !1
          var f = {}
          h.each(
            d.cookies,
            function (a, b) {
              a && ((b = l.getValueForCookie(a)), (f[a] = b ? b : c.defaultCookieValue))
            },
            this,
          )
          b.setSAContextCookies(f)
          a.incrementCounter(v + e.UPDATE_CONTEXT + e.STATUS_1)
        },
        isShoppingAidsAvailableForPage: function (c, d) {
          if (!c) return !1
          d = g.isDefined(d) ? d : !1
          var f = !l.isSACacheForCurrentContext()
          f && k.setInProgressSAs([])
          return l.isSACacheDataInvalid(c, d) || f
            ? (a.incrementCounter(v + e.CONTEXT_INVALID), b.emptySACacheData(), !1)
            : l.isCacheExpiredForPage(c)
              ? (a.incrementCounter(v + e.CACHE_EXPIRED + '_' + c),
                this.invalidateCacheForPage(c),
                !1)
              : l.isCacheAvailableForPage(c)
        },
        storeEntireCache: function () {
          try {
            f.setInLocalStorage(c.saCacheKey, JSON.stringify(b.getSACacheData()))
          } catch (z) {
            a.incrementCounter(v + e.CACHE_STORAGE + e.STATUS_0)
          }
        },
        getSessionDayImpressionsForSAType: function (a) {
          a = b.getSessionDayImpressionCountForSAType(a)
          return isNaN(a) ? 0 : a
        },
        getPageImpressionsForSAType: function (a, c) {
          a = b.getDailyImpressionCountForPageType_SAType(a, c)
          return isNaN(a) ? 0 : a
        },
        getShoppingAidsDataForPageType_SAType: function (a, c, d) {
          return b.getShoppingAidsDataForPageType_SAType(a, c, d)
        },
        cleanUpCache: function () {
          f.removeFromLocalStorage(c.saCacheKey)
        },
        updateSessionDayImpressionCountObjectInCache: function (a) {
          this.isObjectEmpty(a) ||
            b.setSessionDayImpressionCount(this._getDatedImpressionCountObject(a))
        },
        updatePageImpressionCountObjectInCache: function (a, c) {
          this.isObjectEmpty(c) ||
            b.setDailyImpressionCountForPageType(a, this._getDatedImpressionCountObject(c))
        },
        updateCacheHitFrequencyInCache: function (a, c) {
          this.isObjectEmpty(a) || (b.setCaheHitFrequencyForPageType(a, c), this.storeEntireCache())
        },
        getCacheHitFrequencyForPage: function (a) {
          if (!this.isObjectEmpty(a)) return b.getCaheHitFrequencyForPageType(a)
        },
        _getDatedImpressionCountObject: function (a) {
          var c = {}
          c[b._getDateString()] = a
          return c
        },
        constructTTLObjectForPage: function (a, d) {
          if (!n.backoff)
            return { expFactor: 0, validTill: 6e4 * c.pageTTLInMinutes(a) + Date.now() }
          var e = !g.isObjectEmpty(m.getEligibleInProgressSA(a))
          e = g.isValidCampaignAvailable(d) || e
          ;(d = b.getTTLForPageType(a)) || (d = { expFactor: 0 })
          e
            ? ((d.validTill = 6e4 * c.pageTTLInMinutes(a) + Date.now()), (d.expFactor = 0))
            : ((a =
                6e4 *
                c.defaultBackoffConfig.BackoffInterval *
                Math.pow(c.defaultBackoffConfig.BackoffFactor, d.expFactor)),
              (e = 6e4 * c.defaultBackoffConfig.MaximumBackoff),
              a < e
                ? ((a += Date.now()), (d.validTill = a), (d.expFactor += 1))
                : ((e += Date.now()), (d.validTill = e)))
          return d
        },
        setPrefetchSourcePage: function (a, c) {
          b.setPrefetchSourcePage(a, c)
        },
        removePrefetchSourcePage: function (a) {
          b.removePrefetchSourcePage(a)
        },
        logMetricsIfNetworkCallSaved: function (c) {
          b.isCachePrefetchedForPageType(c) &&
            (a.incrementCounter(
              e.NETWORK_CALL_SAVED + c + e.DELIMITER + b.getPrefetchSourcePage(c),
            ),
            this.removePrefetchSourcePage(c))
        },
      }
      d.init()
      return d
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipsMetrics',
      'CacheManager',
      'SAEndPointsConfig',
      'SAMetricConstants',
      'ShoppingAidsGenericUtils',
      'SAFeature',
      'QTipsConstants',
    ).register('LogImpressionManager', function (h, d, a, e, f, c, b, l, g) {
      var k = f.logImpressionEndPoint
      return {
        optionals: x,
        logImpressionInDynamoDB: function (d) {
          a.incrementCounter(c.SA_CACHE_PREFIX + c.LOG_IMPRESSION + '_' + c.NETWORK_CALL_INITIATED)
          a.incrementCounter(
            c.SA_CACHE_PREFIX +
              b.platformCheck +
              '_' +
              c.LOG_IMPRESSION +
              '_' +
              c.NETWORK_CALL_INITIATED,
          )
          var e = this.buildParamMap(d)
          h.ajax(k, {
            method: 'GET',
            contentType: 'application/json; charset\x3dutf-8',
            timeout: 6e3,
            params: e,
            success: function (e) {
              a.incrementCounter(c.SA_CACHE_PREFIX + c.LOG_IMPRESSION + d.pageType + c.STATUS_1)
              b.isDefined(d.tooltipAllocatedTreatment) &&
                d.tooltipAllocatedTreatment !== g.EmptyString &&
                (u.ue.trigger &&
                  u.ue.trigger(g.ToolTipUXExperimentWeblab, d.tooltipAllocatedTreatment),
                a.incrementCounter(g.ToolTipUXMetricForLogImpression + d.tooltipAllocatedTreatment))
              d.successCallback && 'function' === typeof d.successCallback && d.successCallback(e)
            },
            error: function (e, f) {
              a.incrementCounter(
                c.SA_CACHE_PREFIX +
                  c.LOG_IMPRESSION +
                  d.pageType +
                  '_' +
                  b.platformCheck +
                  c.STATUS_0,
              )
              'NotFound' === f &&
                a.incrementCounter(
                  c.SA_CACHE_PREFIX +
                    c.LOG_IMPRESSION +
                    d.pageType +
                    c.STATUS_0 +
                    c.SA_UNKNOWN_ENDPOINT,
                )
              d.errorCallback && 'function' === typeof d.errorCallback && d.errorCallback(e)
            },
          })
        },
        handle: function (b, d, f, g, l) {
          try {
            if (-1 === b.indexOf('NO_GUARD')) {
              var k = this.logImpressionDataBuilder(b, d, f, g, l)
              this.logImpressionInDynamoDB(k)
              e.updateCacheAfterLogImpression(k)
            }
          } catch (t) {
            a.incrementCounter(c.SA_CACHE_PREFIX + c.LOG_IMPRESSION + '_' + c.ERROR_CATCHED)
          }
        },
        logImpressionDataBuilder: function (a, c, d, e, f) {
          var g = {}
          g.schedulingType = c
          g.shoppingAidsType = d
          g.identifier = a
          g.pageType = e
          b.isDefined(f) &&
            ((g.userEvent = f.userEvent),
            (g.successCallback = f.successCallback),
            (g.errorCallback = f.errorCallback),
            (g.contextAwareIndex = f.contextAwareIndex),
            b.isDefined(f.shoppingAidsAnchorGroup) &&
              (g.shoppingAidsAnchorGroup = f.shoppingAidsAnchorGroup),
            b.isDefined(f.tooltipAllocatedTreatment) &&
              (g.tooltipAllocatedTreatment = f.tooltipAllocatedTreatment))
          return g
        },
        buildParamMap: function (a) {
          var c = {
            pageType: a.pageType,
            shoppingAidsType: a.shoppingAidsType,
            id: a.identifier,
            schedulingType: a.schedulingType,
          }
          b.isDefined(a.userEvent) && (c.userEvent = a.userEvent)
          b.isDefined(a.contextAwareIndex) && (c.contextAwareIndex = a.contextAwareIndex)
          b.isDefined(a.shoppingAidsAnchorGroup) &&
            (c.shoppingAidsAnchorGroup = a.shoppingAidsAnchorGroup)
          return c
        },
        buildOptionalParameter: function () {
          this.optionals = {}
          return this
        },
        withSuccessCallback: function (a) {
          this.optionals.successCallback = a
          return this
        },
        withErrorCallback: function (a) {
          this.optionals.errorCallback = a
          return this
        },
        withUserEvent: function (a) {
          this.optionals.userEvent = a
          return this
        },
        withContextAwareIndex: function (a) {
          this.optionals.contextAwareIndex = a
          return this
        },
        withShoppingAidsAnchorGroup: function (a) {
          this.optionals.shoppingAidsAnchorGroup = a
          return this
        },
        withToolTipUxAllocatedTreatmentValue: function (a) {
          this.optionals.tooltipAllocatedTreatment = a
          return this
        },
        build: function () {
          return this.optionals
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'QTipsMetrics').register('LocalStorageInterface', function (h, d) {
      return {
        sourceName: 'ShoppingAidsMWebLibrary_',
        getFromLocalStorage: function (a) {
          if (this.isLocalStorageExposed())
            try {
              return JSON.parse(localStorage.getItem(a))
            } catch (e) {
              return d.incrementCounter(this.sourceName + 'localStorage_parse_0'), {}
            }
        },
        setInLocalStorage: function (a, e) {
          if (this.isLocalStorageExposed())
            try {
              localStorage.setItem(a, e)
            } catch (f) {
              d.incrementCounter(this.sourceName + 'QuotaExceededError')
            }
        },
        removeFromLocalStorage: function (a) {
          if (this.isLocalStorageExposed()) return localStorage.removeItem(a)
        },
        isLocalStorageExposed: function () {
          try {
            if (u.localStorage) return 1
          } catch (a) {
            return d.incrementCounter(this.sourceName + 'LocalStorageNotExposed'), 0
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'SACommonConfig', 'ShoppingAidsCacheData', 'ShoppingAidsGenericUtils').register(
      'CacheValidator',
      function (h, d, a, e) {
        return {
          isSACacheDataInvalid: function (a, c) {
            return (
              this.isSACacheDataEmpty() ||
              this.isSACacheDataVersionIncorrect(a, c) ||
              this.isSACacheDataTTLExpired()
            )
          },
          isCacheAvailableForPage: function (d) {
            return !h.objectIsEmpty(a.getSAListForPageType(d))
          },
          isCacheExpiredForPage: function (d) {
            return a.cacheExpiryTimeForPage(d) < Date.now()
          },
          isSACacheDataEmpty: function () {
            return !a.getSACacheData() || h.objectIsEmpty(a.getSACacheData())
          },
          isSACacheDataVersionIncorrect: function (e, c) {
            return c
              ? 0 === a.getVersion() || a.getVersion() !== d.cacheVersionForPrefetch
              : 0 === a.getVersion() || a.getVersion() !== d.cacheVersion
          },
          isSACacheDataTTLExpired: function () {
            return a.getTTL() < Date.now()
          },
          isSACacheForCurrentContext: function () {
            var e = this,
              c = a.getSAContextCookies()
            if (h.objectIsEmpty(c)) return !1
            var b = !1
            h.each(
              c,
              function (a, c) {
                b ||
                  ((c = e.getValueForCookie(c)),
                  a === d.defaultCookieValue
                    ? h.objectIsEmpty(c) || c === d.defaultCookieValue || (b = !0)
                    : c !== a && (b = !0))
              },
              e,
            )
            return !b
          },
          getValueForCookie: function (a) {
            try {
              var c = a.trim() + '\x3d'
              return this.getCookie().split(c)[1].split('; ')[0].trim()
            } catch (b) {
              return ''
            }
          },
          getCookie: function () {
            return document.cookie
          },
        }
      },
    )
  })()
  ;(function () {
    r.register('SAMetricConstants', function () {
      return {
        SA_CACHE_PREFIX: 'SAC_',
        STATUS_1: '_1',
        STATUS_0: '_0',
        STATUS_1_: '_1_',
        STATUS_0_: '_0_',
        START: '_st',
        INVALID: '_inv',
        NETWORK_CALL_INITIATED: 'nci',
        SERVERD_FROM_CACHE: 'sfc',
        SA_CACHE_VALID: 'valid',
        SA_CACHE_INVALIDATE: 'inv_',
        LOG_IMPRESSION: 'log_impr',
        GET_SHOPPING_AIDS: 'getSA',
        UPDATE_SHOPPING_AIDS: 'updateSA',
        CACHE_STORAGE: 'store',
        UPDATE_CONTEXT: 'updateCtxt',
        UPDATE_BACKOFF: 'updateBkof',
        BACKOFF: 'bkof',
        SA_FETCH_PREFIX: 'SA_fetch_',
        SA_UNKNOWN_ENDPOINT: 'unkown_ep',
        SA_TIMEOUT: 'to',
        SATYPE_UNDEFINED: 'undef',
        IMPRESSIONDATA_UNDEFINED: 'no_impr',
        CACHE_UPDATE_ERROR: 'cue',
        FETCH_RESPONSE: 'fr',
        SA_PREPROCESSOR: 'grf',
        DEADLINE_FILTER: 'dlf',
        IMPRESSIONINTERVAL_FILTER: 'inf',
        CLIENTSIDE_FILTER: 'csf',
        SESSION_DAY_FILTER: 'sdf',
        CONTEXT_INVALID: 'civ',
        CACHE_EXPIRED: 'cae',
        ERROR_CATCHED: 'ec',
        TIME_TAKEN: 'tt',
        SPARKLE_BOTTOM_PADDING_PREFIX: 'SA_sp_bp_',
        CORDOVA_SUCCESS: 'cdv_1',
        CORDOVA_ERROR: 'cdv_0',
        SHOPPINGAIDS_WEBLAB_TRIGGER: 'SA_WL_Tr_',
        SHOPPINGAIDS_WEBLAB_AFTER_FETCH_CALL: 'SA_WL_AFC_',
        SHOPPINGAIDS_WEBLAB_AFTER_FILTERING: 'SA_WL_AFL_',
        SHOPPINGAIDS_WEBLAB_IN_POST_QTIP_RENDER: 'SA_WL_PQR_',
        SHOPPINGAIDS_WEBLAB_AFTER_FETCH_CALL_BACKEND_CALL: 'SA_WL_AFC_ABC',
        SA_CONTEXT_AWARE_SUBSTITUTION: 'SA_CAS_',
        FAIL: '_fl',
        SPARKLE_DISPLAY_MASH_EVENT: 'DISP_MASH',
        SPARKLE_CLOSE_MASH_EVENT: 'CLOSE_MASH',
        SA_FETCH_RATE_LIMITING_PREFIX: 'SA_FETCH_RL_',
        UI_GUARD_RAIL_FILTER: 'uigrf',
        PASS: '_ps',
        PAGE_LIST_EMPTY: 'ple',
        NETWORK_CALL_SAVED: 'ncs_',
        DELIMITER: ':',
        SPARKLE_CTA: 'cta',
        SPARKLE_CTA_DEPTH: 'cta_depth',
        SPARKLE_CTA_DEPTH_PERCENTAGE: 'cta_depth_percentage',
        SPARKLE_CTA_TIME: 'cta_time',
        SPARKLE_CTA_SCROLLED: 'cta_scrolled',
        SPARKLE_CTA_SCROLL_DIRECTION_CHANGE: 'cta_scroll_dir_change',
        SPARKLE_CTA_ATF: 'cta_atf',
        SPARKLE_CTA_MAX_SCROLL_DEPTH: 'cta_max_depth',
        SPARKLE_CTA_MAX_SCROLL_DEPTH_PERCENTAGE: 'cta_max_depth_percentage',
        SPARKLE_DISMISSED: 'dismiss',
        SPARKLE_DISMISS_DEPTH: 'dismiss_depth',
        SPARKLE_DISMISS_DEPTH_PERCENTAGE: 'dismiss_depth_percentage',
        SPARKLE_DISPLAY_DURATION: 'display_time',
        SPARKLE_DISMISS_SCROLLED: 'dismiss_scrolled',
        SPARKLE_DISMISS_SCROLL_DIRECTION_CHANGE: 'dismiss_scroll_dir_change',
        SPARKLE_DISMISS_ATF: 'dismiss_atf',
        SPARKLE_DISMISS_MAX_SCROLL_DEPTH: 'dismiss_max_depth',
        SPARKLE_DISMISS_MAX_SCROLL_DEPTH_PERCENTAGE: 'dismiss_max_depth_percentage',
        SPARKLE_DISPLAY_DEPTH: 'display_depth',
        SPARKLE_DISPLAY_DEPTH_PERCENTAGE: 'display_depth_percentage',
        SPARKLE_DISPLAY_ATF: 'display_atf',
        SPARKLE_DISPLAY_SCROLLED: 'display_scrolled',
        ANCHOR_GROUP_FILTERING: 'anchor_flt',
      }
    })
  })()
  ;(function () {
    r.when('SACacheConfig').register('SACommonConfig', function (h) {
      return {
        saListParadigms:
          'ToolTips BottomSheets Sparkles Hotspots Audiospots MultiPageShoppingAids'.split(' '),
        defaultImpressionIntervalInHours: 24,
        defaultBackoffConfig: { BackoffInterval: 60, MaximumBackoff: 480, BackoffFactor: 2 },
        statefulSAStorageKey: 'SA_StatefulSA',
        saCacheKey: 'SA_Cache',
        cacheTTLInMinutes: 1440,
        pageTTLInMinutes: function (d) {
          var a = h.cacheTTL
          return a && a[d] ? a[d] : 0
        },
        cacheVersion: '1.0',
        cacheVersionForPrefetch: '1.1',
        defaultCookieValue: 'unknown',
        fatigueConfig: {
          pageLimits: {
            ToolTips: 3,
            BottomSheets: 3,
            Sparkles: 3,
            Hotspots: 3,
            Highlighters: 3,
            Audiospots: 2,
            MultiPageShoppingAids: 1,
          },
          sessionDayLimits: {
            ToolTips: 8,
            BottomSheets: 3,
            Sparkles: 6,
            Hotspots: 8,
            Highlighters: 10,
            Audiospots: 5,
            MultiPageShoppingAids: 1,
          },
        },
      }
    })
  })()
  ;(function () {
    r.register('SACacheConfig', function () {
      return { cacheTTL: { gateway: 15, search: 15, detailpage: 0 } }
    })
  })()
  ;(function () {
    r.when('A').register('SAFeature', function (h) {
      return { clientSideCaching: !0, backoff: !1, androidFeatureAttribution: !1 }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'DeadlineFilter',
      'SessionDayFilter',
      'ShoppingAidsFilters',
      'ImpressionIntervalFilter',
      'QTipsMetrics',
      'SAMetricConstants',
      'AuthPortalURISubstitute',
      'SAFilteringHelper',
      'ContextAwareSubstitutor',
      'UIGuardRailFiltering',
      'HighPrioritySAListProvider',
      'AnchorGroupFiltering',
    ).register('SAPreProcessor', function (h, d, a, e, f, c, b, l, g, k, n, m, p) {
      return {
        preProcessSAList: function (v, z) {
          c.incrementCounter(b.SA_CACHE_PREFIX + b.SA_PREPROCESSOR + b.START)
          var q = {}
          h.each(v, function (a, b) {
            q[b] = h.filter(a, function (a) {
              var c = -1
              return (
                g.isClientSideWeblabTriggerOnlySA(a) ||
                (d.filter(a) &&
                  f.filter(a) &&
                  p.filter(a, b) &&
                  -1 !== (c = e.getContextTargetingIndex(a)) &&
                  l.substitute(a) &&
                  k.substitute(a, c, b) &&
                  n.isUIGuardRailMet(a))
              )
            })
          })
          q = a.filter(q)
          q = m.getHighPrioritySAList(q)
          v = {}
          v.ShoppingAidsList = q
          return v
        },
        isShoppingAidsListEmpty: function (a) {
          if (a)
            for (var b in a)
              if (a.hasOwnProperty(b) && a[b] && Array.isArray(a[b]) && 0 < a[b].length) return !1
          return !0
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'QTipsMetrics', 'SAMetricConstants').register('DeadlineFilter', function (h, d, a) {
      return {
        filter: function (e) {
          d.incrementCounter(a.SA_CACHE_PREFIX + a.DEADLINE_FILTER + a.START)
          e.deadline && Date.now() > parseInt(e.deadline, 10)
            ? (d.incrementCounter(a.SA_CACHE_PREFIX + a.DEADLINE_FILTER + a.STATUS_0), (e = !1))
            : (e = !0)
          return e
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'SACommonConfig',
      'CacheManager',
      'SAFilteringHelper',
      'QTipsMetrics',
      'SAMetricConstants',
    ).register('SessionDayFilter', function (h, d, a, e, f, c) {
      return {
        filter: function (b) {
          f.incrementCounter(c.SA_CACHE_PREFIX + c.SESSION_DAY_FILTER + c.START)
          var l = {},
            g = d.fatigueConfig.sessionDayLimits
          h.each(b, function (b, c) {
            var d = (g && g[c] ? g[c] : 0) - a.getSessionDayImpressionsForSAType(c)
            l[c] = e.filterSAListWithQuotaRemaining(b, d)
          })
          return l
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'SACommonConfig',
      'QTipsMetrics',
      'SAMetricConstants',
      'ShoppingAidsGenericUtils',
    ).register('ImpressionIntervalFilter', function (h, d, a, e, f) {
      return {
        filter: function (c) {
          a: {
            a.incrementCounter(e.SA_CACHE_PREFIX + e.IMPRESSIONINTERVAL_FILTER + e.START)
            f.isDefined(c.impressionInterval) ||
              (c.impressionInterval = d.defaultImpressionIntervalInHours)
            if (
              c.lastImpressionTime &&
              ((c = c.lastImpressionTime + 36e5 * c.impressionInterval), Date.now() < c)
            ) {
              a.incrementCounter(e.SA_CACHE_PREFIX + e.IMPRESSIONINTERVAL_FILTER + e.STATUS_0)
              c = !1
              break a
            }
            c = !0
          }
          return c
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'SACommonConfig',
      'QTipsMetrics',
      'SAMetricConstants',
      'ShoppingAidsGenericUtils',
      'SAFeature',
      'ShoppingAidsCacheData',
      'QTipsConstants',
    ).register('AnchorGroupFiltering', function (h, d, a, e, f, c, b, l) {
      return {
        filter: function (c, d) {
          var g = {
            ToolTips: 'elementAnchor',
            Hotspots: 'hotspotAnchor',
            Audiospots: 'audiospotAnchor',
          }
          return (function (c) {
            a.incrementCounter(e.SA_CACHE_PREFIX + e.ANCHOR_GROUP_FILTERING + e.START)
            var k = g[d] ? !0 : !1
            if (!k) return !0
            if ((k = b.getSAAnchorGroup())) {
              var h = c[g[d]]
              if (!f.isDefined(k[h]) || !f.isDefined(k[h].groupLastImpressionTime)) return !0
              c =
                k[h].groupLastImpressionTime +
                c.anchorGroupImpressionInterval *
                  l.hourToSecondConversion *
                  l.secondToMillisecondConversion
              if (Date.now() < c)
                return (
                  a.incrementCounter(e.SA_CACHE_PREFIX + e.ANCHOR_GROUP_FILTERING + e.STATUS_0), !1
                )
            }
            return !0
          })(c)
        },
      }
    })
  })()
  ;(function () {
    r.when('A').register('SAFilteringHelper', function (h) {
      return {
        _isNonConditionalSA: function (d) {
          return d && !d.invokingEventElement && !d.weblabName
        },
        filterSAListWithQuotaRemaining: function (d, a) {
          var e = []
          h.each(
            d,
            function (d) {
              this._isNonConditionalSA(d) ? 0 < a && (e.push(d), a--) : e.push(d)
            }.bind(this),
          )
          return e
        },
        isClientSideWeblabSA: function (d) {
          return d && d.weblabName && d.desiredWeblabTreatment && d.allocatedWeblabTreatment
        },
        isClientSideWeblabTriggerOnlySA: function (d) {
          return (
            this.isClientSideWeblabSA(d) &&
            d.weblabTriggerOnlyFlag &&
            'true' === d.weblabTriggerOnlyFlag.toString()
          )
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'CacheManager',
      'QTipsMetrics',
      'QTips',
      'SAEndPointsConfig',
      'SAPreProcessor',
      'SACommonConfig',
      'SAMetricConstants',
      '3p-promise',
      'ShoppingAidsGenericUtils',
      'PageResolver',
      'SAFeature',
      'SARateLimitingInstrumentationHandler',
      'LoPResolver',
    ).register('ShoppingAidsFetcher', function (h, d, a, e, f, c, b, l, g, k, n, m, p, v) {
      return {
        fetchShoppingAids: function (b, c, e) {
          try {
            var f = h.now(),
              g = this
            if (k.isSADebugRequest()) g.promiseFetchFromBackendForPage(b).then(c, e)
            else if (m.backoff && k.shouldBackOff(b))
              a.incrementCounter(l.SA_CACHE_PREFIX + l.SA_FETCH_PREFIX + l.BACKOFF + b)
            else if (d.isShoppingAidsAvailableForPage(b)) {
              var n = d.getCacheHitFrequencyForPage(b)
              d.updateCacheHitFrequencyInCache(b, n + 1)
              var t = g._generateFinalResponse(f, b)
              a.incrementCounter(l.SA_CACHE_PREFIX + l.SERVERD_FROM_CACHE)
              a.incrementCounter(l.SA_CACHE_PREFIX + l.SERVERD_FROM_CACHE + '_' + n)
              a.incrementCounter(l.SA_CACHE_PREFIX + l.SERVERD_FROM_CACHE + '_' + k.platformCheck)
              a.incrementCounter(l.SA_CACHE_PREFIX + l.SERVERD_FROM_CACHE + '_' + b)
              c(t)
            } else
              g.promiseFetchFromBackendForPage(b)
                .then(
                  function (a) {
                    g._updateShoppingAidsListInCache(b, a)
                    return a
                  }.bind(g),
                )
                .then(
                  function (a) {
                    return g._generateFinalResponse(f, b, a)
                  }.bind(g),
                )
                .then(
                  function (a) {
                    return c(a)
                  }.bind(g),
                )
                .catch(e)
          } catch (S) {
            a.incrementCounter(l.SA_CACHE_PREFIX + l.SA_FETCH_PREFIX + l.ERROR_CATCHED)
          }
        },
        _generateFinalResponse: function (b, e, f) {
          var g = d.getShoppingAidsListForPageFromCache(e)
          k.logClientSideWeblabMetricsForSAList(g, l.SHOPPINGAIDS_WEBLAB_AFTER_FETCH_CALL, f)
          e = c.preProcessSAList(g, e)
          f = this._updateNestedShoppingAidsStructure(e.ShoppingAidsList)
          e = {}
          e.ShoppingAidsList = f
          k.logClientSideWeblabMetricsForSAList(f, l.SHOPPINGAIDS_WEBLAB_AFTER_FILTERING)
          b = h.now() - b
          a.incrementCounter(l.SA_CACHE_PREFIX + l.TIME_TAKEN, b)
          a.incrementCounter(l.SA_CACHE_PREFIX + l.SA_FETCH_PREFIX + l.TIME_TAKEN, b)
          a.incrementCounter(l.SA_CACHE_PREFIX + l.SERVERD_FROM_CACHE + '_' + l.TIME_TAKEN, b)
          return e
        },
        promiseFetchFromBackendForPage: function (a) {
          var b = this
          return new g(
            function (c, d) {
              b.fetchShoppingAidsFromBackend(a, c, d)
            }.bind(b),
          )
        },
        fetchShoppingAidsFromBackend: function (c, d, g) {
          var m = l.SA_FETCH_PREFIX,
            p = document.referrer,
            t = /.*\.amazon\..*/g,
            q = 'DIRECT'
          t && t.test(p) && (q = 'INDIRECT')
          p = f.fetchShoppingAidsEndPoint
          a.incrementCounter(m + l.NETWORK_CALL_INITIATED)
          a.incrementCounter(m + l.NETWORK_CALL_INITIATED + k.platformCheck)
          h.ajax(p, {
            method: 'GET',
            contentType: 'application/json; charset\x3dutf-8',
            timeout: 6e4,
            params: {
              page: c,
              url: n.getWindowLocationHref(),
              trafficType: q,
              cacheTTL: b.pageTTLInMinutes(c),
              cacheVersion: b.cacheVersion,
              previousLop: e.utils.getPreviousLoP(),
              currentLop: v.getCurrentLoP(),
              pageHitRequestID: k.getPageHitRequestID(),
            },
            success: function (b) {
              a.incrementCounter(m + c + l.STATUS_1)
              d && 'function' === typeof d && d(b)
              return b
            },
            error: function (b, d) {
              'Request Timeout' === d
                ? a.incrementCounter(m + c + l.STATUS_0_ + l.SA_TIMEOUT)
                : 'NotFound' === d &&
                  a.incrementCounter(m + c + l.STATUS_0_ + l.SA_UNKNOWN_ENDPOINT)
              a.incrementCounter(m + c + k.platformCheck + l.STATUS_0)
              g && 'function' === typeof g && g(b)
              return b
            },
          })
        },
        _updateShoppingAidsListInCache: function (b, c) {
          try {
            h.objectIsEmpty(c)
              ? a.incrementCounter(l.SA_CACHE_PREFIX + l.FETCH_RESPONSE + l.STATUS_0)
              : (a.incrementCounter(l.SA_CACHE_PREFIX + l.FETCH_RESPONSE + l.STATUS_1),
                d.updateContextForShoppingAidsCache(c.Context),
                d.updateSessionDayImpressionCountObjectInCache(c.SessionDayImpressionCount),
                d.updatePageImpressionCountObjectInCache(b, c.PageImpressionCount),
                d.updateShoppingAidsListForPageInCache(b, c.ShoppingAidsList),
                'detailpage' !== b ||
                  m.backoff ||
                  p.rateLimitingInstrumentation(
                    Date.now(),
                    k.isValidCampaignAvailable(c.ShoppingAidsList),
                  ))
          } catch (t) {
            a.incrementCounter(l.SA_CACHE_PREFIX + l.CACHE_UPDATE_ERROR)
          }
        },
        _updateNestedShoppingAidsStructure: function (a) {
          h.each(
            a,
            function (a, b) {
              h.each(
                a,
                function (a) {
                  this._updateNestedStructure(a)
                },
                this,
              )
            },
            this,
          )
          return a
        },
        _updateNestedStructure: function (a) {
          var b = a.nestedSAPriorityList
          if (b) {
            var c = []
            h.each(b, function (a) {
              a = d.getShoppingAidsDataForPageType_SAType(a.pageType, a.SAType, a.identifier)
              c.push(a)
            })
            a.nestedSAList = JSON.stringify(c)
          }
          return a
        },
        cleanUpSACache: function () {
          d.cleanUpCache()
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'ShoppingAidsGenericUtils', 'SAMetricConstants', 'QTipsMetrics').register(
      'AuthPortalURISubstitute',
      function (h, d, a, e) {
        return {
          substitute: function (f) {
            if (f.targetEndpoint) {
              var c = f.targetEndpoint
              try {
                var b = d.getWindowLocationPath() + d.getWindowLocationQueryString()
                b ? '/' !== b.charAt(0) && (b = '/' + b) : (b = '/')
                var l = encodeURIComponent(b),
                  g = encodeURIComponent(l)
                var k = c.replace('%2Fsa-request-url', l).replace('%252Fsa-request-url', g)
                f.targetEndpoint = k
              } catch (n) {
                return (
                  e.incrementCounter(a.SA_CACHE_PREFIX + a.URL_ENCODE_ERR),
                  e.incrementCounter(a.SA_CACHE_PREFIX + a.URL_ENCODE_ERR + '_' + f.identifier),
                  !1
                )
              }
            }
            return !0
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'QTipLibrary',
      'SAHotspotConstants',
      'ShoppingAidsGenericUtils',
      'AnchorSACollection',
    ).register('SAHotspot', function (h, d, a, e, f) {
      h = {}
      h.model = new d.Model()
      h.collection = new f()
      h.collection.identifierList = []
      h.collection.setValidSACallback(
        function (a) {
          var b = a.get('hotspotAnchor'),
            c = a.get('maxDisplayCount'),
            d = a.get('nestedSAList')
          return e.isDefined(a) && e.isDefined(c) && e.isDefined(b) && 0 < c && e.isDefined(d)
        }.bind(this),
      )
      e.addStyleToHead(a.style.hotspotStyle)
      return h
    })
  })()
  ;(function () {
    r.register('SAHotspotConstants', function () {
      return {
        timer: {
          defaultStartOffset: 3e3,
          defaultHotspotInterval: 1e4,
          defaultRenderCallbackTime: 800,
        },
        templates: {
          hotspotTemplate:
            '\x3cdiv id\x3d"hotspot"class\x3d"hotspot-background"\x3e\x3cstyle\x3e.hotspot-background{ border-color : #EC912D;border-radius: 50%;width: 16px;height: 16px;background-color: #EC912D; position:absolute;display: table-cell;text-align:center;box-shadow: 0 0 0 0 rgba(236, 145, 45, 1);transform: scale(1);animation: pulse 1.5s 0.2s \x3c% pulsatingIteration %\x3e;} .hotspot-background:after{ content: none;}\x3c/style\x3e\x3cstyle\x3e @keyframes pulse {0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(236, 145, 45, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(236, 145, 45, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(236, 145, 45, 0); }}\x3c/style\x3e\x3cdiv class\x3d"hotspot-text" style \x3d"vertical-align:middle; position:relative;top:-10.5px;right:2.5px;color: white; font-size:15px; font-family: Bookerly;font-style: italic;font-size;font-weight: bold;"\x3e\x3cp\x3ei\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e',
        },
        style: {
          hotspotStyle:
            "#hotspot{position:absolute;overflow:initial}.hotspot-background{position:fixed;z-index:90000;padding:10px;opacity:1;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.hotspot-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.hotspot-textholder{width:100%;height:100%}",
        },
        Z_indexConstants: { lowerZ_index: 200, higherZ_index: 9e4 },
        CSSConstants: { TEXT_RTL: '-2.5px' },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'QTipsConstants',
      'ShoppingAidsGenericUtils',
      'SAHotspot',
      'AnchorBasedSAUtils',
      'AnchorBasedPositioning',
      'NestedShoppingAidHelper',
      'SAHotspotConstants',
    ).execute(function (h, d, a, e, f, c, b, l, g, k) {
      a = a.View.extend({
        collection: c.collection,
        anchor: '',
        popoverClass: e.popOverAnchors.popoverClass,
        searchSugesstions: e.popOverAnchors.searchSugesstions,
        searchFilterPage: e.popOverAnchors.searchFilterPage,
        hotspotId: '#hotspot',
        shoppingAidsType: 'hotspot',
        identifier: '',
        positionY: 0,
        originalPositionX: 0,
        originalPositionY: 0,
        postHotspotRender: function () {
          if (this.collection.identifierList) {
            var a = this.collection.identifierList
            this.clearTimeouts()
            for (var c = 0; c < a.length; c++)
              if (!document.hidden) {
                var d = this.collection.at(a[c].id)
                d.set({ shoppingAidsType: this.shoppingAidsType })
                this.originalPositionY = d.get('positionY')
                this.originalPositionX = d.get('positionX')
                this.anchor = b.processAnchor(d.get('hotspotAnchor'), e.regex.anchorSpliterRegex)
                this.identifier = d.get('identifier')
                if (b.isElementVisible(this.anchor)) {
                  if (
                    f.hasNoPopover(
                      this.popoverClass,
                      this.searchSugesstions,
                      this.searchFilterPage,
                    ) ||
                    b.isShoppingAidOverPopoverVisible(
                      d.get('popoverAnchor'),
                      d.get('hotspotAnchor'),
                    )
                  )
                    this.renderTimeoutId = setTimeout(this.render.bind(this), 0, d)
                  break
                }
              }
            f.isDefined(this.renderTimeoutId) ||
              (this.renderTimeoutId = setTimeout(
                this.postHotspotRender.bind(this),
                k.timer.defaultStartOffset,
              ))
          }
        },
        render: function (a) {
          var c = this._createHotspotBaseElement(a)
          f.isDefined(c)
            ? (l.addAndPosition(c, a, this.anchor),
              this._attachClickListener(c, a),
              this._displayHotspot(a.get('renderPointX'), a.get('renderPointY')),
              (a = b.getIndexByIdentifier(this.collection.identifierList, a.get('identifier'))),
              -1 !== a &&
                (this.renderCompleteTimeoutId = setTimeout(
                  this.renderComplete.bind(this),
                  k.timer.defaultRenderCallbackTime,
                  a,
                )))
            : (this.renderTimeoutId = setTimeout(
                this.postHotspotRender.bind(this),
                k.timer.defaultStartOffset,
              ))
        },
        dismissWithId: function (a, b, c) {
          var g = d(this.hotspotId)[0]
          ;(g && g.getAttribute(e.view.saDOMNameAttribute) === a) ||
          (this.identifier === a && f.isDefined(this.renderTimeoutId))
            ? (this._stopHotspots(), b && 'function' === typeof b && b())
            : c && 'function' === typeof c && c(e.errorCodes.SA_NOT_DISPLAYED)
        },
        _displayHotspot: function (a, c) {
          var g = d(this.hotspotId)
          this.positionY = c
          f.isMarketplaceRTLEnabled() && this._makeRTLCompatible()
          g.css({ left: a + 'px', top: c + 'px', visibility: 'visible' })
          b.isElementOrParentFixed(this.anchor) && g.css({ position: 'fixed' })
          g.attr(e.view.saDOMNameAttribute, this.identifier)
        },
        renderComplete: function (a) {
          var b = this.collection.identifierList[a].id,
            c = this.collection.identifierList[a].schedulingType,
            d = this.shoppingAidsType
          this.collection.identifierList.splice(a, 1)
          f.isDefined(this.renderCompleteCallback) &&
            this.renderCompleteCallback({
              identifier: b,
              schedulingType: c,
              shoppingAidsType: d,
              hotspotAnchor: this.anchor,
            })
        },
        _closeAndRenderNext: function () {
          h.throttle(
            function () {
              this.clearTimeouts()
              this._nextHotspot()
            }.bind(this),
            1e3,
          ).call(this)
        },
        _createHotspotBaseElement: function (a) {
          return this._createElement(k.templates.hotspotTemplate, a)
        },
        _isHotspotPresent: function () {
          return document.getElementById('hotspot')
        },
        _attachClickListener: function (a, b) {
          d(a).click(function () {
            g.dispatchShoppingAidEvent(JSON.parse(b.get('nestedSAList')))
            c.view._closeAndRenderNext()
          })
        },
        _stopHotspots: function () {
          this.clearTimeouts()
          this._removeElement(this.hotspotId)
        },
        _nextHotspot: function () {
          f.isDefined(this.collection.identifierList) && 0 < this.collection.identifierList.length
            ? (this._removeElement(this.hotspotId),
              (this.renderTimeoutId = setTimeout(
                this.postHotspotRender.bind(this),
                k.timer.defaultHotspotInterval,
              )))
            : this._stopHotspots()
        },
        _makeRTLCompatible: function () {
          var a = d('.hotspot-text')
          'function' === typeof h.$.withoutRtl
            ? h.$.withoutRtl(function () {
                a.css({ right: k.CSSConstants.TEXT_RTL })
              })
            : (document
                .getElementById('hotspot')
                .getElementsByClassName('hotspot-text')[0].style.right = k.CSSConstants.TEXT_RTL)
        },
        handleOverlay: function () {
          this._isHotspotPresent() && this._pushHotspotToBackground()
        },
        _repositionHotspot: function () {
          if (b.isElementVisible(this.anchor)) {
            var a = l.getAbsolutePositionToPlaceSA(
              this.anchor,
              this.originalPositionY,
              this.originalPositionX,
            )
            d(this.hotspotId).css({ left: a[0] + 'px', top: a[1] + 'px', visibility: 'visible' })
          } else this.dismissWithId(this.identifier)
        },
        handleOverlayDismiss: function () {
          this._isHotspotPresent() &&
            (this._bringAudiospotToForeground(), this._repositionHotspot())
        },
        _pushHotspotToBackground: function () {
          var a = d(this.hotspotId),
            c = this.positionY + b.getAUIScrollPageValue()
          a.css({ 'z-index': k.Z_indexConstants.lowerZ_index, top: c })
        },
        _bringAudiospotToForeground: function () {
          d(this.hotspotId).css({
            'z-index': k.Z_indexConstants.higherZ_index,
            top: this.positionY,
          })
        },
        clearTimeouts: function () {
          f.isDefined(this.renderTimeoutId) &&
            (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId)
          f.isDefined(this.renderCompleteTimeoutId) &&
            (clearTimeout(this.renderCompleteTimeoutId), delete this.renderCompleteTimeoutId)
        },
        setRenderCompleteCallback: function (a) {
          this.renderCompleteCallback = a
        },
      })
      c.view = new a()
      return c
    })
  })()
  ;(function () {
    r.when(
      'A',
      'QTipLibrary',
      'SAHighlighterConstants',
      'ShoppingAidsGenericUtils',
      'AnchorSACollection',
    ).register('SAHighlighter', function (h, d, a, e, f) {
      h = {}
      h.model = new d.Model()
      h.collection = new f()
      h.collection.identifierList = []
      h.collection.setValidSACallback(
        function (a) {
          var b = a.get('highlighterAnchor'),
            c = a.get('maxDisplayCount')
          return e.isDefined(a) && e.isDefined(c) && e.isDefined(b) && 0 < c
        }.bind(this),
      )
      e.addStyleToHead(a.style.SA_HighlighterStyle)
      return h
    })
  })()
  ;(function () {
    r.register('SAHighlighterConstants', function () {
      return {
        timer: {
          defaultStartOffset: 3e3,
          defaultHighlighterInterval: 1e4,
          defaultRenderCallbackTime: 800,
          defaultDismissCallbackTime: 2e4,
        },
        templates: {
          SA_HighlighterTemplate:
            '\x3cdiv id\x3d"page-highlighter" class\x3d"page-highlighter-background"\x3e\x3c/div\x3e',
        },
        style: {
          SA_HighlighterStyle:
            '#page-highlighter{ position: absolute; overflow: initial;} .page-highlighter-background{ position: fixed; z-index: 90000; padding: 10px; width: 5px; height: 5px; background-color: transparent; border:  4px solid #007185 ; border-radius: 50%; position: absolute; animation: ring 1.5s linear infinite;} @keyframes ring { from { opacity: 1;} to { opacity: 0; transform: scale(3);}}',
        },
        metrics: {
          PREFIX: 'SA_PAGEHIGHLIGHTER_',
          DISPLAY: 'DISPLAYED',
          POSTRENDER: 'POST_RENDER',
          ONDEMAND_DISPLAY: 'ONDEMAND_DISPLAYED',
          DISMISS: 'DISMISSED',
          DISSMISS_ID: 'DISMISSED_WITH_ID',
          CLICK: 'CLICKED',
          VALID_RENDER: 'VALID_RENDER',
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'QTipsConstants',
      'ShoppingAidsGenericUtils',
      'SAHighlighter',
      'AnchorBasedSAUtils',
      'AnchorBasedPositioning',
      'NestedShoppingAidHelper',
      'SAHighlighterConstants',
      'QTipsMetrics',
    ).execute(function (h, d, a, e, f, c, b, l, g, k, n) {
      a = a.View.extend({
        collection: c.collection,
        anchor: '',
        popoverClass: e.popOverAnchors.popoverClass,
        searchSugesstions: e.popOverAnchors.searchSugesstions,
        searchFilterPage: e.popOverAnchors.searchFilterPage,
        HighlighterId: '#page-highlighter',
        shoppingAidsType: 'highlighter',
        identifier: '',
        postHighlighterRender: function () {
          if (this.collection.identifierList) {
            var a = this.collection.identifierList
            this.clearTimeouts()
            for (var c = 0; c < a.length; c++)
              if (!document.hidden) {
                var d = this.collection.at(a[c].id)
                d.set({ shoppingAidsType: this.shoppingAidsType })
                this.anchor = b.processAnchor(
                  d.get('highlighterAnchor'),
                  e.regex.anchorSpliterRegex,
                )
                this.identifier = d.get('identifier')
                if (b.isElementVisible(this.anchor)) {
                  if (
                    f.hasNoPopover(
                      this.popoverClass,
                      this.searchSugesstions,
                      this.searchFilterPage,
                    ) ||
                    b.isShoppingAidOverPopoverVisible(
                      d.get('popoverAnchor'),
                      d.get('HighlighterAnchor'),
                    )
                  )
                    this.renderTimeoutId = setTimeout(this.render.bind(this), 0, d)
                  break
                }
              }
            f.isDefined(this.renderTimeoutId) ||
              ((this.renderTimeoutId = setTimeout(
                this.postHighlighterRender.bind(this),
                k.timer.defaultStartOffset,
              )),
              n.incrementCounter(k.metrics.PREFIX + k.metrics.POSTRENDER, 1, this.identifier))
          }
        },
        render: function (a) {
          var c = this._createHighlighterBaseElement(a)
          f.isDefined(c)
            ? (l.addAndPosition(c, a, this.anchor),
              this._attachClickListener(c, a),
              this._displayHighlighter(a.get('renderPointX'), a.get('renderPointY')),
              (a = b.getIndexByIdentifier(this.collection.identifierList, a.get('identifier'))),
              n.incrementCounter(k.metrics.PREFIX + k.metrics.VALID_RENDER, 1, this.identifier),
              -1 !== a &&
                ((this.renderCompleteTimeoutId = setTimeout(
                  this.renderComplete.bind(this),
                  k.timer.defaultRenderCallbackTime,
                  a,
                )),
                (this.defaultDismissalTimeoutId = setTimeout(
                  this._closeAndRenderNext.bind(this),
                  k.timer.defaultDismissCallbackTime,
                  a,
                ))))
            : (this.renderTimeoutId = setTimeout(
                this.postHighlighterRender.bind(this),
                k.timer.defaultStartOffset,
              ))
        },
        _displayHighlighter: function (a, c) {
          var f = d(this.HighlighterId)
          f.css({ left: a + 'px', top: c + 'px', visibility: 'visible' })
          b.isElementOrParentFixed(this.anchor) && f.css({ position: 'fixed' })
          f.attr(e.view.saDOMNameAttribute, this.identifier)
          n.incrementCounter(k.metrics.PREFIX + k.metrics.DISPLAY, 1, this.identifier)
        },
        renderComplete: function (a) {
          var b = this.collection.identifierList[a].id,
            c = this.collection.identifierList[a].schedulingType,
            d = this.shoppingAidsType
          this.collection.identifierList.splice(a, 1)
          f.isDefined(this.renderCompleteCallback) &&
            this.renderCompleteCallback({ identifier: b, schedulingType: c, shoppingAidsType: d })
        },
        _closeAndRenderNext: function () {
          h.throttle(
            function () {
              this.clearTimeouts()
              this._nextHighlighter()
            }.bind(this),
            1e3,
          ).call(this)
          n.incrementCounter(k.metrics.PREFIX + k.metrics.DISMISS, 1, this.identifier)
        },
        _createHighlighterBaseElement: function (a) {
          return this._createElement(k.templates.SA_HighlighterTemplate, a)
        },
        _attachClickListener: function (a, b) {
          var e = this
          d(a).click(function () {
            n.incrementCounter(k.metrics.PREFIX + k.metrics.CLICK, 1, e.identifier)
            f.isDefined(b.get('nestedSAList')) &&
              g.dispatchShoppingAidEvent(JSON.parse(b.get('nestedSAList')))
            c.view._closeAndRenderNext()
          })
        },
        _stopHighlighters: function () {
          this.clearTimeouts()
          this._removeElement(this.HighlighterId)
        },
        _nextHighlighter: function () {
          f.isDefined(this.collection.identifierList) && 0 < this.collection.identifierList.length
            ? (this._removeElement(this.HighlighterId),
              (this.renderTimeoutId = setTimeout(
                this.postHighlighterRender.bind(this),
                k.timer.defaultHighlighterInterval,
              )))
            : this._stopHighlighters()
        },
        clearTimeouts: function () {
          f.isDefined(this.renderTimeoutId) &&
            (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId)
          f.isDefined(this.renderCompleteTimeoutId) &&
            (clearTimeout(this.renderCompleteTimeoutId), delete this.renderCompleteTimeoutId)
          f.isDefined(this.defaultDismissalTimeoutId) &&
            (clearTimeout(this.defaultDismissalTimeoutId), delete this.defaultDismissalTimeoutId)
        },
        dismissWithId: function (a, b, c) {
          var g = d(this.HighlighterId)
          ;(g && g.attr(e.view.saDOMNameAttribute) === a) ||
          (a === this.identifier && f.isDefined(this.renderTimeoutId))
            ? (this._stopHighlighters(), b && 'function' === typeof b && b())
            : c && 'function' === typeof c && c(e.errorCodes.SA_NOT_DISPLAYED)
          n.incrementCounter(k.metrics.PREFIX + k.metrics.DISSMISS_ID, 1, this.identifier)
        },
        setRenderCompleteCallback: function (a) {
          this.renderCompleteCallback = a
        },
        displayOnDemandHighlighter: function (a) {
          this._stopHighlighters()
          c.collection.add(a)
          this.postHighlighterRender()
          n.incrementCounter(k.metrics.PREFIX + k.metrics.ONDEMAND_DISPLAY, 1, this.identifier)
        },
      })
      c.view = new a()
      return c
    })
  })()
  ;(function () {
    r.when(
      'A',
      'QTipLibrary',
      'SAAudiospotConstants',
      'ShoppingAidsGenericUtils',
      'AnchorSACollection',
    ).register('SAAudiospot', function (h, d, a, e, f) {
      h = {}
      h.model = new d.Model()
      h.collection = new f()
      h.collection.identifierList = []
      h.collection.setValidSACallback(
        function (a) {
          var b = a.get('audiospotAnchor'),
            c = a.get('audioSource')
          return e.isDefined(a) && e.isDefined(b) && e.isDefined(c)
        }.bind(this),
      )
      e.addStyleToHead(a.style.audiospotStyle)
      return h
    })
  })()
  ;(function () {
    r.register('SAAudiospotConstants', function () {
      return {
        timer: { defaultStartOffset: 3e3, defaultAudioSpotInterval: 1e4 },
        templates: {
          audiospotTemplate:
            '\x3cdiv id\x3d"sa_audiospot"class\x3d"sa_audiospot-background"\x3e\x3cstyle\x3e.sa_audiospot-background{ border:1px solid transparent; border-radius: 50%;width: 30px;height: 30px; background-color: #fafafa; position:relative;display:block; box-shadow: 1px 1px 0 0 transparent;} .sa_audiospot-background:after{ content: none;}\x3c/style\x3e\x3csvg id\x3d"audio_playSVG" width\x3d"34" height\x3d"34" style\x3d"transform: rotate(90deg); position: absolute; background: transparent; stroke: #0B8699; display:none;top:-3px;left:-3px;"\x3e\x3ccircle id \x3d "sa_audiospot_progress_indicator_inner" cx\x3d"50%" cy\x3d"50%" r\x3d"14" style\x3d"fill: none; stroke-opacity: 0.3; stroke-width: 5; stroke-linecap: round;"\x3e\x3c/circle\x3e\x3ccircle id \x3d "sa_audiospot_progress_indicator" cx\x3d"50%" cy\x3d"50%" r\x3d"14" style\x3d"fill: none;  --initialStroke: 87.9646;  stroke-dasharray: var(--initialStroke); stroke-dashoffset: var(--initialStroke); stroke-width: 5; stroke-opacity: 1; stroke-linecap: round; transition: stroke-dashoffset 1ms ease;"\x3e\x3c/circle\x3e\x3c/svg\x3e\x3cdiv id\x3d"audio-play-icon" class\x3d"play-css"\x3e\x3cspan\x3e\x3cstyle\x3e.play-css { height: 18px; width: 18px; position: relative; overflow: hidden; display: inline-block;top:-5px;left:-5px;z-index:1 } .play-css span{ display: block; width: 5px; height: 5px; background: #fff; margin: 7px 0 0 1px; } .play-css span:after { content: \'\'; position: absolute; width: 0; height: 0; border-style: solid; border-color: transparent #fff transparent transparent; border-width: 6px 8px 6px 9px; left: -8px; top: 3px; } .play-css span:before { transform: rotate(45deg); border-radius: 0 30px 0 0; content: \'\'; position: absolute; width: 3px; height: 3px; border-style: double; border-color: #fff; border-width: 5px 5px 0 0; left: 11px; top: 5px; transition: all 0.2s ease-out; }\x3c/style\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv id\x3d"audio-pause-icon" class\x3d"pause-css"\x3e\x3cstyle\x3e.pause-css{border: 0; background: transparent; box-sizing: border-box; width: 0; height: 9px; border-color: transparent transparent transparent #0B8699; transition: 100ms all ease; border-style: double; border-width: 0px 0 0px 7px;position:relative;z-index:1;left:0.5px;display:none}\x3c/style\x3e\x3c/div\x3e\x3csvg id\x3d"audio_play_filler_circle" width\x3d"34" height\x3d"34" style\x3d"transform: rotate(90deg); position: absolute; background: transparent; fill: #0B8699;top:-3px;left:-3px"\x3e\x3ccircle id \x3d "filler_circle" cx\x3d"50%" cy\x3d"50%" r\x3d"16" style\x3d"fill:#0B8699;"\x3e\x3c/circle\x3e\x3c/svg\x3e\x3c/div\x3e',
        },
        style: {
          audiospotStyle:
            "#sa_audiospot{ position: absolute; overflow: initial; }.sa_audiospot-background { position: fixed; z-index: 90000; padding: 10px; opacity: 1; border-radius: 3px; -webkit-box-shadow: 0 2px 5px 0 rgba(17,17,17,.25); -moz-box-shadow: 0 2px 5px 0 rgba(17,17,17,.25); box-shadow: 0 2px 5px 0 rgba(17,17,17,.25); -o-box-shadow: 0 2px 5px 0 rgba(17,17,17,.25); -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; } .sa_audiospot-background:after { position: absolute; display: block; width: 0; content: ''; border-style: solid; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -webkit-transform-style: preserve-3d; transform-style: preserve-3d; } .slate-image-video-loader { background: #ffffff; border-radius: 50%; position: absolute; opacity: 0.7; } .slate-image-play-button { margin: auto; position: absolute; border-style: solid; border-color: transparent transparent transparent #ada6a6; }",
        },
        constants: { lowerZindex: 200, higherZindex: 9e4 },
        cssConstants: {
          playIconId: '#audio-play-icon',
          pauseIconId: '#audio-pause-icon',
          playSVG: '#audio_playSVG',
          progressBarId: '#sa_audiospot_progress_indicator',
          fillerCircleId: '#filler_circle',
        },
        audioStates: {
          PLAY_STATE: 'PLAY_STATE',
          PAUSE_STATE: 'PAUSE_STATE',
          COMPLETION_STATE: 'END',
          INITIAL_STATE: 'INITIAL',
        },
        metrics: {
          PREFIX: 'SA_Audiospot_',
          PLAY: 'played',
          PAUSE: 'paused',
          REPLAY: 'replayed',
          END: 'ended',
          ERROR: 'error',
          STALLED: 'stalled',
          SUSPEND: 'suspend',
          WAITING: 'waiting',
          ABORT: 'abort',
          LOADED: 'loadeddata',
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'QTipsConstants',
      'ShoppingAidsGenericUtils',
      'SAAudiospot',
      'AnchorBasedSAUtils',
      'AnchorBasedPositioning',
      'SAAudiospotConstants',
      'AudioStateManager',
      'QTipsMetrics',
      'ShoppingAidsAudioUtils',
    ).execute(function (h, d, a, e, f, c, b, l, g, k, n, m) {
      h = a.View.extend({
        collection: c.collection,
        anchor: '',
        popoverClass: e.popOverAnchors.popoverClass,
        searchSugesstions: e.popOverAnchors.searchSugesstions,
        searchFilterPage: e.popOverAnchors.searchFilterPage,
        audiospotId: '#sa_audiospot',
        shoppingAidsType: 'audiospot',
        identifier: '',
        positionY: 0,
        originalPositionX: 0,
        originalPositionY: 0,
        postAudiospotRender: function () {
          if (this.collection.identifierList) {
            var a = this.collection.identifierList
            this.clearTimeouts()
            for (var c = 0; c < a.length; c++)
              if (!document.hidden) {
                var d = this.collection.at(a[c].id)
                d.set({ shoppingAidsType: this.shoppingAidsType })
                this.originalPositionY = d.get('positionY')
                this.originalPositionX = d.get('positionX')
                this.anchor = b.processAnchor(d.get('audiospotAnchor'), e.regex.anchorSpliterRegex)
                this.identifier = d.get('identifier')
                if (f.isDefined(this.anchor) && b.isElementVisible(this.anchor)) {
                  if (
                    f.hasNoPopover(
                      this.popoverClass,
                      this.searchSugesstions,
                      this.searchFilterPage,
                    ) ||
                    b.isShoppingAidOverPopoverVisible(d.get('popoverAnchor'), this.anchor)
                  )
                    this.renderTimeoutId = setTimeout(this.render.bind(this), 0, d)
                  break
                }
              }
            f.isDefined(this.renderTimeoutId) ||
              (this.renderTimeoutId = setTimeout(
                this.postAudiospotRender.bind(this),
                g.timer.defaultStartOffset,
              ))
          }
        },
        render: function (a) {
          var c = b.getIndexByIdentifier(this.collection.identifierList, this.identifier)
          if (f.isShoppingAidForWeblabTesting(this.identifier) && -1 !== c)
            this.renderComplete(c),
              n.incrementCounter(g.metrics.PREFIX + 'logImpression_' + this.identifier)
          else {
            var d = this._createAudiospotBaseElement(a)
            f.isDefined(d) &&
              (l.addAndPosition(d, a, this.anchor),
              k.cacheElementData(),
              this._attachClickListener(d, a),
              this._displayAudiospot(a.get('renderPointX'), a.get('renderPointY')),
              this._handleVisibility(),
              -1 !== c &&
                ((this.renderCompleteTimeoutId = setTimeout(
                  this.renderComplete.bind(this),
                  e.timer.defaultDismissalCallbackTime,
                  c,
                )),
                n.incrementCounter(g.metrics.PREFIX + 'logImpression_' + this.identifier)))
            n.incrementCounter(g.metrics.PREFIX + 'undefined_audiospot_element_' + this.identifier)
          }
        },
        dismissWithId: function (a, b, c) {
          var g = d(this.audiospotId)[0]
          ;(g && g.getAttribute(e.view.saDOMNameAttribute) === a) ||
          (this.identifier === a && f.isDefined(this.renderTimeoutId))
            ? (this._dismissAudiospots(), b && 'function' === typeof b && b())
            : c && 'function' === typeof c && c(e.errorCodes.SA_NOT_DISPLAYED)
        },
        _dismissAudiospots: function () {
          d(this.audiospotId)[0] && k.setState(k.pauseState)
          this._removeElement(this.audiospotId)
          this.clearTimeouts()
          document.removeEventListener('visibilitychange', this._visibilityChangeHandler)
        },
        _displayAudiospot: function (a, c) {
          var f = d(this.audiospotId)
          this.positionY = c
          f.css({ left: a + 'px', top: c + 'px', visibility: 'visible' })
          b.isElementOrParentFixed(this.anchor) && f.css({ position: 'fixed' })
          f.attr(e.view.saDOMNameAttribute, this.identifier)
          n.incrementCounter(g.metrics.PREFIX + 'render_' + this.identifier)
        },
        _isAudiospotPresent: function () {
          return document.getElementById('sa_audiospot')
        },
        pushAudiospotToBackground: function () {
          var a = d(this.audiospotId),
            c = this.positionY + b.getAUIScrollPageValue()
          a.css({ 'z-index': g.constants.lowerZindex, top: c })
        },
        bringAudiospotToForeground: function () {
          d(this.audiospotId).css({ 'z-index': g.constants.higherZindex, top: this.positionY })
        },
        renderComplete: function (a) {
          var b = this.collection.identifierList[a].id,
            c = this.collection.identifierList[a].schedulingType,
            d = this.shoppingAidsType
          this.collection.identifierList.splice(a, 1)
          f.isDefined(this.audiospotRenderCompleteCallback) &&
            this.audiospotRenderCompleteCallback({
              identifier: b,
              schedulingType: c,
              shoppingAidsType: d,
              audiospotAnchor: this.anchor,
            })
        },
        _createAudiospotBaseElement: function (a) {
          k.configureAudio(a)
          return this._createElement(g.templates.audiospotTemplate, a)
        },
        _attachClickListener: function (a) {
          d(a).click(function () {
            c.view._updateState()
          })
        },
        _updateState: function () {
          k.getCurrentState() === k.initialState
            ? k.setState(k.playState)
            : k.getCurrentState() === k.playState
              ? k.setState(k.pauseState)
              : k.getCurrentState() === k.pauseState
                ? k.setState(k.playState)
                : k.getCurrentState() === k.completeState && k.setState(k.playState)
        },
        _handleVisibility: function () {
          document.addEventListener('visibilitychange', this._visibilityChangeHandler)
        },
        _visibilityChangeHandler: function () {
          document.hidden && k.getCurrentState() === k.playState && k.setState(k.pauseState)
        },
        handleOverlay: function () {
          this._isAudiospotPresent() &&
            (m.handleOverlay(k.getCurrentState.bind(k), k.setState.bind(k)),
            this.pushAudiospotToBackground())
        },
        _repositionAudiospot: function () {
          if (b.isElementVisible(this.anchor)) {
            var a = l.getAbsolutePositionToPlaceSA(
              this.anchor,
              this.originalPositionY,
              this.originalPositionX,
            )
            d(this.audiospotId).css({ left: a[0] + 'px', top: a[1] + 'px', visibility: 'visible' })
          } else this.dismissWithId(this.identifier)
        },
        handleOverlayDismiss: function () {
          this._isAudiospotPresent() &&
            (this.bringAudiospotToForeground(),
            this._repositionAudiospot(),
            m.handleOverlayDismiss(k.getCurrentState.bind(k), k.setState.bind(k)))
        },
        clearTimeouts: function () {
          f.isDefined(this.renderTimeoutId) &&
            (clearTimeout(this.renderTimeoutId), delete this.renderTimeoutId)
          f.isDefined(this.renderCompleteTimeoutId) &&
            (clearTimeout(this.renderCompleteTimeoutId), delete this.renderCompleteTimeoutId)
        },
        setAudiospotRenderCompleteCallback: function (a) {
          this.audiospotRenderCompleteCallback = a
        },
      })
      c.view = new h()
      return c
    })
  })()
  ;(function () {
    r.when('A', 'SAAudiospotConstants', 'QTipsMetrics').register(
      'AudioMetrics',
      function (h, d, a) {
        var e = d.metrics.PREFIX
        return {
          _addMetricEventListeners: function (f, c) {
            f.addEventListener('error', function () {
              a.incrementCounter(e + d.metrics.ERROR, 1, c)
            })
            f.addEventListener('stalled', function () {
              a.incrementCounter(e + d.metrics.STALLED, 1, c)
            })
            f.addEventListener('suspend', function () {
              a.incrementCounter(e + d.metrics.SUSPEND, 1, c)
            })
            f.addEventListener('waiting', function () {
              a.incrementCounter(e + d.metrics.WAITING, 1, c)
            })
            f.addEventListener('abort', function () {
              a.incrementCounter(e + d.metrics.ABORT, 1, c)
            })
            f.addEventListener('loadeddata', function () {
              a.incrementCounter(e + d.metrics.LOADED, 1, c)
            })
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'QTipsConstants',
      'AnchorBasedSAUtils',
      'ShoppingAidsGenericUtils',
      'NestedShoppingAidHelper',
      'SAHotspot',
    ).register('AnchorBasedPositioning', function (h, d, a, e, f, c, b, l) {
      h = a.View.extend({
        pageAnchor: 'body',
        addAndPosition: function (a, b, c) {
          this.setElement(this.pageAnchor, a)
          a = this.getAbsolutePositionToPlaceSA(
            c,
            b.get('positionY'),
            b.get('positionX'),
            b.get('startPositionX'),
          )
          b.set({ renderPointX: a[0] })
          b.set({ renderPointY: a[1] })
        },
        getAbsolutePositionToPlaceSA: function (a, b, e, l) {
          var g = d(a)[0].getBoundingClientRect(),
            k = d(a).offset().top
          f.isElementOrParentFixed(a) && (k = g.top)
          a = g.left
          c.isDefined(l) &&
            ('middle' === l && (a += (g.left + g.right) / 2),
            'right' === l && (a = g.right),
            'left' === l && (a = g.left))
          c.isDefined(b) && (k -= b)
          c.isDefined(e) && (a += e)
          return [a, k]
        },
      })
      return (h = new h())
    })
  })()
  ;(function () {
    r.when('A', 'QTipLibrary', 'ShoppingAidsGenericUtils').register(
      'AnchorSACollection',
      function (h, d, a) {
        return d.Collection.extend({
          model: {},
          identifierList: [],
          add: function (d) {
            if (a.isDefined(this.validSACallback) && this.validSACallback(d)) {
              var e = {},
                c = d.get('identifier')
              e.id = c
              e.sequenceNum = d.get('sequenceNum')
              e.schedulingType = d.get('schedulingType')
              this.identifierList.push(e)
              this.models[c] = d
            }
          },
          parse: function (d, f) {
            if (a.isDefined(d)) {
              var c = this._prepareModel.bind(this)
              d.forEach(function (a, e, f) {
                d[e] = c(a)
              })
              return d
            }
          },
          setValidSACallback: function (a) {
            this.validSACallback = a
          },
        })
      },
    )
  })()
  ;(function () {
    r.when('A', 'AssistedShoppingDataParser', 'ShoppingAidsGenericUtils').register(
      'AssistedShoppingDataManager',
      function (h, d, a) {
        return {
          model: x,
          _currentPage: x,
          initialiseCampaignData: function (e, f) {
            this.model = d.parseASCampaignJson(e, f)
            this._currentPage = f
            return a.isDefined(this.model) ? !0 : !1
          },
          getCurrentPage: function () {
            return this._currentPage
          },
          isCompletionPage: function () {
            return this.getCurrentPage() === this.getCompletionPage()
          },
          isFirstRender: function () {
            return this._getFieldFromModel('firstRender')
          },
          getIdentifier: function () {
            return this._getFieldFromModel('identifier')
          },
          getType: function () {
            return this._getFieldFromModel('type')
          },
          getState: function () {
            return this._getFieldFromModel('state')
          },
          getCompletionPage: function () {
            return this._getFieldFromModel('completionPage')
          },
          getTTL: function () {
            return this._getFieldFromModel('ttl')
          },
          getPageTransitionEvents: function () {
            return (
              this._getFieldFromModel('pageTransitionEvents') ||
              this.getPageLevelSA().get('pageTransitionEvents')
            )
          },
          getEnabledBottomSheets: function () {
            return this.getPageLevelSA().get('enabledBottomSheets')
          },
          getEnabledPopOvers: function () {
            return this.getPageLevelSA().get('enabledPopOvers')
          },
          getPageLevelSA: function () {
            return this._getFieldFromModel('pageLevelSA')
          },
          getTriggers: function () {
            return this._getFieldFromModel('triggers')
          },
          updateState: function (a) {
            try {
              return this.model.set({ state: a }), !0
            } catch (f) {
              return !1
            }
          },
          updateAudioURL: function (a, f) {
            try {
              return d.identifierToModelMap[a].set({ audioSrc: f }), !0
            } catch (c) {
              return !1
            }
          },
          _getFieldFromModel: function (d) {
            return a.isDefined(this.model) ? this.model.get(d) : null
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'ShoppingAidsGenericUtils',
      'QTipsConstants',
      'AssistedShoppingModelBuilder',
      'ShoppingAidsFilters',
      'ContextAwareSubstitutor',
    ).register('AssistedShoppingDataParser', function (h, d, a, e, f, c, b, l) {
      return {
        identifierToModelMap: {},
        parseASCampaignJson: function (a, b) {
          b = this._getPageLevelContext(a, b)
          if (!e.isDefined(b)) return null
          a = c
            .newBuilder()
            .withIdentifier(a.identifier)
            .withType(a.type)
            .withState(a.state)
            .withTTL(Number(a.ttl))
            .withCompletionPage(a.completionPage)
            .withFirstRender(a.firstRender)
            .withPageTransitionEvents(e.parseJSONStringIfValid(a.pageTransitionEvents))
            .withPageLevelSA(this._parsePageLevelSA(a.pageLevelSA, b.pageLevelSA))
            .withTriggers(this._parseShoppingAidsJSONCollection(b.triggers))
            .build()
          this._registerModel(a)
          return a
        },
        _parseShoppingAidsJSONCollection: function (a) {
          var b = []
          if (e.isNonEmptyArray(a))
            for (var c = 0; c < a.length; c++) b[c] = this.parseShoppingAidJSON(a[c])
          return b
        },
        parseShoppingAidJSON: function (b) {
          var c = {}
          if (b && this._preProcessShoppingAidsJSON(b)) {
            for (var d in b) b.hasOwnProperty(d) && (c[d] = this._formatSAJSONValue(d, b[d]))
            c = new a.Model(c)
            this._registerModel(c)
          }
          return c
        },
        _preProcessShoppingAidsJSON: function (a) {
          if (e.isDefined(a.type) && 'FabAudioSpot' === a.type) {
            var c = -1
            return -1 !== (c = b.getContextTargetingIndex(a)) && l.substitute(a, c, a.type)
          }
          return !0
        },
        _parsePageLevelSA: function (a, b) {
          a = d.extend(e.defaultJSONIfUndefined(a, {}), e.defaultJSONIfUndefined(b, {}))
          return this.parseShoppingAidJSON(a)
        },
        _getPageLevelContext: function (a, b) {
          try {
            return a.pages[b]
          } catch (n) {
            return null
          }
        },
        _formatSAJSONValue: function (a, b) {
          return f.regex.numberRegex.test(b)
            ? Number(b)
            : 'targetSA' === a
              ? this.parseShoppingAidJSON(b)
              : 'supplementarySA' === a && 1 !== b.indexOf(f.contextAwareSADelimiter)
                ? this._parseShoppingAidsJSONCollection(b)
                : b
        },
        _registerModel: function (a) {
          this.identifierToModelMap[a.get('identifier')] = a
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'QTipLibrary').register('AssistedShoppingModelBuilder', function (h, d) {
      return {
        model: x,
        newBuilder: function () {
          this.model = new d.Model()
          return this
        },
        withIdentifier: function (a) {
          this.model.set({ identifier: a })
          return this
        },
        withState: function (a) {
          this.model.set({ state: a })
          return this
        },
        withType: function (a) {
          this.model.set({ type: a })
          return this
        },
        withTTL: function (a) {
          this.model.set({ ttl: a })
          return this
        },
        withCompletionPage: function (a) {
          this.model.set({ completionPage: a })
          return this
        },
        withFirstRender: function (a) {
          this.model.set({ firstRender: a })
          return this
        },
        withPageLevelSA: function (a) {
          this.model.set({ pageLevelSA: a })
          return this
        },
        withTriggers: function (a) {
          this.model.set({ triggers: a })
          return this
        },
        withPageTransitionEvents: function (a) {
          this.model.set({ pageTransitionEvents: a })
          return this
        },
        build: function () {
          return this.model
        },
      }
    })
  })()
  ;(function () {
    r.register('SparkleConfig', function () {
      return {
        pagesWithSubnav: {
          gateway: 1,
          detailpage: 0,
          search: 1,
          browse: 0,
          deals: 0,
          event: 0,
          yourorder: 0,
          cart: 1,
          foundIt: 0,
          thankYou: 0,
        },
        shouldAddPaddingForPage: function (h) {
          return h && 1 === this.pagesWithSubnav[h]
        },
        elementPresentOnPage: 'ElementPresentOnPage',
        elementNotPresentOnPage: 'ElementNotPresentOnPage',
        elementIdInvalid: 'ElementIdInvalid',
        subnavElementId: 'glow_sub_nav_bar_view',
        andoridBottomPadding_SubnavPresent: '46px',
        iOSBottomPadding_WhenEndOfPage: '1px',
        iOSBottomPadding_SubnavPresent: 15,
      }
    })
  })()
  ;(function () {
    r.when('A', 'SACommonConfig', 'ShoppingAidsGenericUtils', 'LocalStorageInterface').register(
      'StatefulSADataStore',
      function (h, d, a, e) {
        var f = []
        h = {
          init: function () {
            var c = e.getFromLocalStorage(d.statefulSAStorageKey)
            a.isNonEmptyArray(c) && (f = c)
          },
          _storeInProgressSAs: function () {
            try {
              e.setInLocalStorage(d.statefulSAStorageKey, JSON.stringify(f))
            } catch (c) {}
          },
          getInProgressSAs: function () {
            return f.slice()
          },
          getInProgressSAByIdentifier: function (a) {
            var b
            f.forEach(function (c) {
              a === c.identifier && (b = c)
            })
            return b
          },
          setInProgressSAs: function (a) {
            a && Array.isArray(a) && ((f = a.slice()), this._storeInProgressSAs())
          },
          updateInProgressSA: function (a, b, d) {
            f.forEach(function (c) {
              a === c.identifier && ((c.state = b), (c.status = d))
            })
            this._storeInProgressSAs()
          },
          isInProgressSA: function (a) {
            return !f.every(function (b) {
              return b.identifier !== a
            })
          },
          addInProgressSA: function (a) {
            if (this.isInProgressSA(a.identifier)) return !1
            a.firstImpressionTime = Date.now()
            f.push(a)
            this._storeInProgressSAs()
            return !0
          },
          removeInProgressSA: function (a) {
            var b = -1
            f.forEach(function (c, d) {
              a === c.identifier && (b = d)
            })
            return -1 < b ? (f.splice(b, 1), this._storeInProgressSAs(), !0) : !1
          },
          cleanUp: function () {
            f = []
            e.removeFromLocalStorage(d.statefulSAStorageKey)
          },
        }
        h.init()
        return h
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'CacheValidator',
      'ShoppingAidsGenericUtils',
      'SAFeature',
      'ShoppingAidsFilters',
      'StatefulSADataStore',
    ).register('StatefulSAEligiblityHelper', function (h, d, a, e, f, c) {
      return {
        getEligibleInProgressSA: function (a) {
          var b = c.getInProgressSAs()
          b = b.filter(this._isSAActive)
          c.setInProgressSAs(b)
          for (var d = 0; d < b.length; d++)
            if (this._isMultiPageSAForCurrentPage(b[d], a) && f.isShoppingAidEligible(b[d]))
              return b[d]
          return {}
        },
        _isSAActive: function (b) {
          return a.isDefined(b.ttl) && a.isDefined(b.firstImpressionTime)
            ? a.minutesBetween(Date.now(), b.firstImpressionTime) < b.ttl
            : !1
        },
        _isMultiPageSAForCurrentPage: function (a, c) {
          return a.pages && a.pages[c]
        },
        cleanUpInProgressStore: function () {
          c.cleanUp()
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'AssistedShoppingDataManager',
      'LogImpressionManager',
      'StatefulSADataStore',
      'ShoppingAidsGenericUtils',
      'SAFabAudiospot',
      'SAFabAudiospotConstants',
      'TriggerHandler',
      'MultiPageSAConstants',
      'SAMetricUtils',
      'QTipsConstants',
      'ShoppingAidsFilters',
      'PageResolver',
      'LocalStorageInterface',
      'UIGuardRailFiltering',
    ).register('MultiPageSAOrchestrator', function (h, d, a, e, f, c, b, l, g, k, n, m, p, v, r) {
      var q = {
        schedulingType: x,
        multiPageSA: x,
        isExperienceCompleted: !1,
        display: function (a, b) {
          this._isCurrentPagePresentInCampaign(a, b) &&
            ((this.schedulingType = a.schedulingType),
            (this.multiPageSA = a),
            (this.isExperienceCompleted = !1),
            this._handleFirstRenderImpression(a, b),
            this._mapUserStatusToState(a),
            this._saveInProgressSA(a),
            d.initialiseCampaignData(a, b)
              ? ((b = this._setupModel(d.getPageLevelSA())),
                c.render(
                  b,
                  this.onFabAudioSpotStateUpdate.bind(this),
                  this._errorCallBack.bind(this),
                ),
                this._logMetric(g.metrics.Render),
                this._setup(a))
              : this._logMetric(g.metrics.InvalidCampaign, a.identifier))
        },
        _handleFirstRenderImpression: function (b, c) {
          if (f.isDefined(b.status) && b.status !== n.userEvent.complete) b.firstRender = !1
          else {
            b.firstRender = !0
            b.status = n.userEvent.yetToOptIn
            var d = a
              .buildOptionalParameter()
              .withSuccessCallback(this._successCallBack.bind(this))
              .withErrorCallback(this._errorCallBack.bind(this))
              .withUserEvent(n.userEvent.yetToOptIn)
              .build()
            a.handle(b.identifier, b.schedulingType, 'multi_page_shopping_aid', c, d)
            this._logMetric(g.metrics.FirstRender, b.identifier)
          }
        },
        _isCurrentPagePresentInCampaign: function (a, b) {
          try {
            return f.isDefined(a.pages[b])
          } catch (y) {
            return !1
          }
        },
        _setupModel: function (a) {
          var b = d.getState()
          ;(f.isDefined(b) && b !== g.state.YetToOptIn) || a.set({ introductoryAnimation: !0 })
          if (b === g.state.Enabled || b === g.state.Disabled || d.getType() === g.type.AutoPlay)
            (b = a.get('supplementarySA') || []),
              (b = b.filter(function (a) {
                return 'tool_tip' !== a.get('type')
              })),
              a.set({ supplementarySA: b })
          return a
        },
        _setup: function (a) {
          d.getType() === g.type.AutoPlay &&
            !0 === d.isFirstRender() &&
            setTimeout(this._playAudio, g.delays.AutoPlay)
          this._setupCompletionEvent(a)
          this._enableTriggers()
          l.registerPageTransitionEvents(d.getPageTransitionEvents(), q.onPageChange.bind(q))
        },
        _setupCompletionEvent: function (a) {
          var b = d.getCompletionPage()
          b = f.parseJSONStringIfValid(b)
          f.isDefined(b)
            ? l.registerMultiPageCompletionEvent(b, q.onCompletionEventFired.bind(q))
            : this._logCompletion(a)
        },
        _enableTriggers: function () {
          var a = d.getTriggers()
          l.registerTriggers(a, q.onTriggerFired.bind(q))
          l.triggerPageLoadEvent()
        },
        _cleanUpResources: function () {
          l.deregisterTriggers()
          l.deregisterMultiPageCompletionEvent()
          c.dismiss()
        },
        _logCompletion: function (b, c) {
          q.isCompletionCriteriaMet(c) &&
            ((q.isExperienceCompleted = !0),
            (c = a
              .buildOptionalParameter()
              .withSuccessCallback(this._successCallBack.bind(this))
              .withErrorCallback(this._errorCallBack.bind(this))
              .withUserEvent(n.userEvent.complete)
              .build()),
            a.handle(
              b.identifier,
              b.schedulingType,
              'multi_page_shopping_aid',
              d.getCurrentPage(),
              c,
            ),
            (c = a
              .buildOptionalParameter()
              .withSuccessCallback(this._successCallBack.bind(this))
              .withErrorCallback(this._errorCallBack.bind(this))
              .withUserEvent(null)
              .build()),
            a.handle(
              b.identifier,
              b.schedulingType,
              'multi_page_shopping_aid',
              d.getCurrentPage(),
              c,
            ),
            e.removeInProgressSA(d.getIdentifier()),
            d.getState() !== g.state.YetToOptIn && q._logMetric(g.metrics.Complete))
        },
        onCompletionEventFired: function (a) {
          q._logCompletion(q.multiPageSA, a)
        },
        isCompletionCriteriaMet: function (a) {
          return f.isDefined(a) ? q.validateCompletionCriteria(a) : d.isCompletionPage()
        },
        validateCompletionCriteria: function (a) {
          return (
            (f.isDefined(a.data) &&
              f.isDefined(a.detail) &&
              f.isDefined(a.data.identifier) &&
              f.isDefined(a.detail.identifier) &&
              a.data.identifier === a.detail.identifier) ||
            ((!f.isDefined(a.data) || !f.isDefined(a.data.identifier)) && !f.isDefined(a.detail))
          )
        },
        onFabAudioSpotStateUpdate: function (a, e) {
          a === b.successCode.UPDATE_SUCCESS
            ? ((a = d.getState()),
              a === g.state.YetToOptIn && e === b.state.complete
                ? (q._updateStateAndStatus(g.state.Enabled, n.userEvent.optIn),
                  l.triggerPageLoadEvent(),
                  q._logMetric(g.metrics.OptIn))
                : a === g.state.Enabled && e === b.state.pause
                  ? (q._updateStateAndStatus(g.state.Disabled, n.userEvent.optOut),
                    q._logMetric(g.metrics.Disabled))
                  : a === g.state.Disabled &&
                    e === b.state.play &&
                    (q._updateStateAndStatus(g.state.Enabled, n.userEvent.optIn),
                    q._logMetric(g.metrics.Enabled)))
            : a === b.errorCode.UPDATE_FAILED &&
              e === b.errorCode.AUTO_PLAY_NOT_SUPPORTED &&
              (q._logMetric(g.metrics.AutoPlayFailed),
              c.updateState(
                b.state.autoPlayFailed,
                q._successCallBack.bind(q),
                q._errorCallBack.bind(q),
              ))
        },
        _updateStateAndStatus: function (b, c) {
          d.updateState(b)
          q.isExperienceCompleted ||
            (e.updateInProgressSA(d.getIdentifier(), b, c),
            (b = a
              .buildOptionalParameter()
              .withSuccessCallback(this._successCallBack.bind(this))
              .withErrorCallback(this._errorCallBack.bind(this))
              .withUserEvent(c)
              .build()),
            a.handle(
              d.getIdentifier(),
              this.schedulingType,
              'multi_page_shopping_aid',
              d.getCurrentPage(),
              b,
            ))
        },
        onTriggerFired: function (a) {
          if (d.getState() !== g.state.YetToOptIn) {
            var e = a.get('targetSA').get('type'),
              f = a.get('targetSA').get('identifier')
            'FabAudioSpot' !== e ||
              (f === c.getIdentifier() && c.getState() === b.state.play) ||
              ((e = a.get('type')),
              q._pauseAudio(),
              c.updateModel(
                a.get('targetSA'),
                q._successCallBack.bind(q),
                q._errorCallBack.bind(q),
              ),
              q._logMetric(g.metrics.TriggerFired, f),
              d.getState() === g.state.Enabled &&
                ('OnFocus' === e
                  ? q._isInputFieldEmpty(a.get('anchor')) && q._playAudio()
                  : q._playAudio()))
          }
        },
        onPageChange: function () {
          q._cleanUpResources()
          setTimeout(function () {
            var a = p.pageAdapter()
            e.init()
            var b = e.getInProgressSAByIdentifier(d.getIdentifier())
            f.isDefined(b) && m.isShoppingAidEligible(b) && r.isUIGuardRailMet(b) && q.display(b, a)
          }, g.delays.ResourcesRegistration)
        },
        _playAudio: function () {
          c.updateState(b.state.play, q._successCallBack.bind(q), q._errorCallBack.bind(q))
        },
        _pauseAudio: function () {
          c.getState() === b.state.play &&
            c.updateState(b.state.pause, q._successCallBack.bind(q), q._errorCallBack.bind(q))
        },
        _isInputFieldEmpty: function (a) {
          a = h.$(a)
          return f.isDefined(a) && f.isDefined(a.val()) ? 0 === a.val().trim().length : !1
        },
        _logMetric: function (a, b) {
          b = b || d.getIdentifier()
          k.incrementCounterWithLOPPlatformAndCombination(g.metrics.Prefix + a, 1, b)
        },
        _saveInProgressSA: function (a) {
          e.isInProgressSA(a.identifier) || e.addInProgressSA(a)
        },
        _mapUserStatusToState: function (a) {
          f.isDefined(a.status) &&
          a.status !== n.userEvent.yetToOptIn &&
          a.status !== n.userEvent.complete
            ? a.status === n.userEvent.optIn
              ? (a.state = g.state.Enabled)
              : a.status === n.userEvent.optOut
                ? (a.state = g.state.Disabled)
                : this._logMetric(g.metrics.UndefinedStatus)
            : (a.state = g.state.YetToOptIn)
        },
        _successCallBack: function (a) {},
        _errorCallBack: function (a) {},
        isBrowserSupported: function () {
          return v.isLocalStorageExposed() && u.Audio
        },
      }
      return q
    })
  })()
  ;(function () {
    r.register('MultiPageSAConstants', function () {
      return {
        delays: { AutoPlay: 1e3, ResourcesRegistration: 200 },
        state: { YetToOptIn: 'YetToOptIn', Enabled: 'Enabled', Disabled: 'Disabled' },
        type: { AutoPlay: 'AutoPlay', TapAndPlay: 'TapAndPlay' },
        metrics: {
          Prefix: 'MultiPageSA_',
          Render: 'render',
          FirstRender: 'first_render',
          OptIn: 'opt_in',
          Disabled: 'disabled',
          Enabled: 'enabled',
          TriggerFired: 'trigger_fired',
          Complete: 'complete',
          InvalidCampaign: 'invalid_campaign',
          AutoPlayFailed: 'autoplay_failed',
          UndefinedStatus: 'undefined_status',
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'jQuery', 'ShoppingAidsGenericUtils', 'SATriggerResolver').register(
      'TriggerHandler',
      function (h, d, a, e) {
        var f = {
            OnFocus: 'focus.shopping_aids',
            OnSelected: 'change.shopping_aids',
            OnClick: 'click.shopping_aids',
            OnPageLoad: 'SAPageLoad.shopping_aids',
            OnPartnerEvent: 'partnerEvent.shopping_aids',
            OnAudioPlay: 'PLAY_STATE.shopping_aids',
            OnAudioPause: 'PAUSE_STATE.shopping_aids',
            OnAudioComplete: 'COMPLETED.shopping_aids',
          },
          c = {},
          b = [],
          l = [],
          g,
          k,
          n,
          m = ['hfc-events:BILL_PAY_AUTHENTICATOR_CHANGE'],
          p,
          v = function (b) {
            a.isDefined(d(this).attr('type')) && 'checkbox' === d(this).attr('type')
              ? d(this).is(':checked') && r(b.data)
              : r(b.data)
          },
          r = function (b) {
            if (a.isDefined(b)) {
              if (b.trigger.get('targetSA').get('triggerDependentTargeting')) {
                var c = e.executeContextFilter(b.trigger.get('targetSA'))
                b.trigger.unset('targetSA')
                b.trigger.set({ targetSA: c })
              }
              q()
              c = b.trigger.get('delay')
              var d = b.trigger.get('type')
              if (a.isDefined(c) || 'OnPageLoad' === d)
                p = setTimeout(function () {
                  b.onAidsTriggeredCallback(b.trigger)
                  q()
                }, c || 1e3)
              else b.onAidsTriggeredCallback(b.trigger)
            }
          },
          q = function () {
            a.isDefined(p) && (clearTimeout(p), (p = x))
          },
          t = function (b) {
            return !!(
              a.isDefined(b.get('targetSA')) &&
              a.isDefined(b.get('targetSA').get('identifier')) &&
              a.isDefined(b.get('type')) &&
              f.hasOwnProperty(b.get('type'))
            )
          },
          u = function (a) {
            return -1 === l.indexOf(a)
          },
          y = {
            registerTriggers: function (c, d) {
              a.isDefined(c) &&
                a.isDefined(d) &&
                'function' === typeof d &&
                c.filter(t).forEach(function (c) {
                  var e = c.get('type'),
                    f = c.get('event')
                  if (a.isDefined(f)) {
                    var g =
                      'OnPartnerEvent' === e
                        ? h.on(f, function () {
                            var a = c.get('delay') || 500
                            c.set({ delay: a })
                            r({ trigger: c, onAidsTriggeredCallback: d })
                            ;-1 !== m.indexOf(f) && h.off(g.event, g.callback)
                          })
                        : h.on(f, function () {
                            setTimeout(function () {
                              y._bindEvent(c, d)
                            }, 100)
                          })
                    b.push(g)
                  } else y._bindEvent(c, d)
                })
            },
            _bindEvent: function (b, e) {
              var g = b.get('targetSA').get('identifier'),
                l = b.get('type'),
                k = b.get('anchor') || document
              g in c
                ? (d(k).unbind(f[l]),
                  d(k).bind(f[l], { trigger: b, onAidsTriggeredCallback: e }, h.throttle(v, 1e3)))
                : a.isDefined(d(k)) &&
                  ((c[g] = { triggerElement: k, eventType: f[l] }),
                  d(k).bind(f[l], { trigger: b, onAidsTriggeredCallback: e }, h.throttle(v, 1e3)))
            },
            triggerPageLoadEvent: function () {
              var a = new CustomEvent('SAPageLoad', { bubbles: !0, cancelable: !1, detail: x })
              document.dispatchEvent(a)
            },
            deregisterTriggers: function () {
              for (var e in c)
                if (c.hasOwnProperty(e) && a.isDefined(c[e])) {
                  var f = c[e]
                  d(f.triggerElement).unbind(f.eventType)
                }
              b.forEach(function (a) {
                h.off(a.event, a.callback)
              })
              c = {}
              b = []
              q()
            },
            registerPageTransitionEvents: function (b, c) {
              a.isDefined(b) &&
                a.isDefined(c) &&
                'function' === typeof c &&
                b.filter(u).forEach(function (a) {
                  h.on(a, function () {
                    c()
                    l.push(a)
                  })
                })
            },
            registerMultiPageCompletionEvent: function (b, c) {
              a.isDefined(b) &&
                a.isDefined(b.eventType) &&
                a.isDefined(c) &&
                'function' === typeof c &&
                ((k = b.anchor || document),
                (g = b.eventType),
                'OnPartnerEvent' === g
                  ? (n = h.on(b.event, c))
                  : d(k).bind(f[g], { identifier: b.identifier }, c))
            },
            deregisterMultiPageCompletionEvent: function () {
              a.isDefined(k) && a.isDefined(g) && (d(k).unbind(f[g]), (g = k = x))
              a.isDefined(n) && (h.off(n.event, n.callback), (n = x))
            },
          }
        return y
      },
    )
  })()
  ;(function () {
    r.when('A', 'AssistedShoppingDataParser').register('SATriggerResolver', function (h, d) {
      return {
        executeContextFilter: function (a) {
          var e = a.get('triggerDependentTargeting')
          a.set({ clientSideTargetting: e })
          a.unset('triggerDependentTargeting')
          a = h.parseJSON(a.toJson())
          return d.parseShoppingAidJSON(a)
        },
      }
    })
  })()
  ;(function () {
    r.register('SAFabAudiospotConstants', function () {
      return {
        timer: { elongationTimer: 3e3, supplementarySAThrottleTimer: 50 },
        template: {
          pulse:
            '\x3cstyle\x3e.sa_fabAudiospot-pulse-dynamic-background{ border-color : #fff;border-radius: 50%;width: 42px;height: 42px;background-color: #fff; position:absolute;display: none;top:7px;left:7px;text-align:center;transform: scale(1);animation: pulse 1.5s 0.2s infinite;} .sa_fabAudiospot-pulse-dynamic-background:after{ content: none;} @keyframes pulse {0% { transform: scale(1); } 70% { transform: scale(1.25); } 100% { transform: scale(1); }}\x3c/style\x3e',
          innerCircle:
            '\x3cstyle\x3e.sa_fabAudiospot-pulse-static-background-inner{ border-color : #fff;border-radius: 50%;width: 34px;height: 34px;background-color: #fff; position:absolute;display: table-cell;top:11px;left:11px;text-align:center;transform: scale(1.2);opacity:0.15;}\x3c/style\x3e',
          staticPulse:
            '\x3cstyle\x3e.sa_fabAudiospot-pulse-static-background{ border-color : #fff;border-radius: 50%;width: 42px;height: 42px;background-color: #fff; position:absolute;display: table-cell;top:7px;left:7px;text-align:center;transform: scale(1.2);opacity:0.15} \x3c/style\x3e',
          dynamicPulse:
            '\x3cstyle\x3e.sa_fabAudiospot-pulse-initial-background{ border-color : #fff;border-radius: 50%;width: 42px;height: 42px;background-color: #fff; position:absolute;display: none;top:7px;left:7px;text-align:center;transform: scale(1.2);opacity:0.25;animation: initialPulse 1.5s 0.2s infinite;} @keyframes initialPulse {0% { transform: scale(1); } 70% { transform: scale(1.25); } 100% { transform: scale(1); }} \x3c/style\x3e',
          animatingSpeaker:
            "\x3cstyle\x3e.sa_fabaudiospot-image { height: 54px; width: 54px; position: relative; overflow: hidden; display: none;margin-left: 7px;margin-top: 8px;z-index:100 } .sa_fabaudiospot-image span{ display: block; width: 14px; height: 14px; background: #fff; margin: 17px 0 0 3px; } .sa_fabaudiospot-image span:after { content: ''; position: absolute; width: 0; height: 0; border-style: solid; border-color: transparent #fff transparent transparent; border-width: 15px 20px 15px 21px; left: -15px; top: 9px; } .sa_fabaudiospot-image span:before { transform: rotate(45deg); border-radius: 0 26px 0 0; content: ''; position: absolute; width: 8px; height: 8px; border-style: double; border-color: #fff; border-width: 13px 13px 0 0; left: 29px; top: 14px; transition: all 0.2s ease-out;animation: pulse1 1.5s 0.2s infinite;}@keyframes pulse1 {0% { border-style: solid; width: 8px; height: 8px;border-width: 4px 4px 0 0;left: 25px; top: 18px; } 50% { border-style: double; } 100% { border-style: none; }}\x3c/style\x3e",
          staticSpeaker:
            "\x3cstyle\x3e.sa_fabaudiospot-image-static { height: 39px; width: 39px; position: relative; overflow: hidden; display: inline-block;margin-left:10px;margin-top: 10px;z-index:100 } .sa_fabaudiospot-image-static span{ display: block; width: 10.5px; height: 10.5px; background: #fff; margin: 12.75px 0 0 2.25px; } .sa_fabaudiospot-image-static span:after { content: ''; position: absolute; width: 0; height: 0; border-style: solid; border-color: transparent #fff transparent transparent; border-width: 11.25px 15px 11.25px 15.75px; left: -11.25px; top: 6.75px; } .sa_fabaudiospot-image-static span:before { transform: rotate(45deg); border-radius: 0 19.5px 0 0; content: ''; position: absolute; width: 6px; height: 6px; border-style: double; border-color: #fff; border-width: 9px 9px 0 0; left: 21px; top: 10px; transition: all 0.2s ease-out;}\x3c/style\x3e",
        },
        style: {
          FABaudiospotStyle:
            ".sa_fabaudiospot-container{ background:#007185; position:fixed; bottom:50%; left:0px;  box-sizing:border-box; display:table; box-shadow:0px 2px 7px #F0F2F2; z-index:490; opacity:1;margin-right: 0px; border-top-left-radius: 32px; border-bottom-left-radius: 32px;transition: margin-left 0s cubic-bezier(0.65, 0, 0.076, 1); }.sa_fabaudiospot-content{display:flex;align-items: center;vertical-align: middle;} .sa_fabaudiospot-image-container{display:table-cell;vertical-align:top;width:56px;height:56px}.sa_fabaudiospot-text-container{display:flex;flex-direction: column;justify-content: center;padding-left:10px;padding-right: 120px; transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);}.sa_fabaudiospot-text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:clip;white-space:nowrap;color:#fff}#sa_fabAudiospot-dynamic-pulse{overflow:auto}.sa_fabAudiospot-pulse-dynamic-background{position:relative;z-index:99;padding:10px;opacity:0.15;border-radius:3px;-webkit-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-o-box-shadow:0 2px 5px 0 rgba(17,17,17,.25);-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.sa_fabAudiospot-pulse-dynamic-background:after{position:absolute;display:block;width:0;content:'';border-style:solid;-moz-transform-style:preserve-3d;-o-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transform-style:preserve-3d} .sa_fabaudiospot-pause{border: 0; background: transparent; box-sizing: border-box; width: 0; height: 22px; border-color: transparent transparent transparent #fff; transition: 100ms all ease; border-style: double; border-width: 0px 0 0px 20px;position:relative;z-index:1;left:17px;top:17px;display:none;margin-right: 30px}",
        },
        errorCode: {
          ALREADY_RENDERED: 'Already_Rendered',
          UPDATE_FAILED: 'Update_Failed',
          DISMISS_FAILED: 'Dimiss_Failed',
          AUDIO_NOT_SUPPORTED: 'Audio_not_supported',
          STATE_NOT_SUPPORTED: 'State_not_supported',
          PARAMETER_MISSING: 'Mandatory_param_missing',
          AUTO_PLAY_NOT_SUPPORTED: 'Auto_play_not_supported',
        },
        successCode: {
          UPDATE_SUCCESS: 'Update_Success',
          DISMISS_SUCCESS: 'Dismiss_Success',
          RENDER_SUCCESS: 'Render_Success',
          STATE_UPDATE_SUCCESS: 'Update_State_Success',
          AUTO_PLAY_SUPPORTED: 'Auto_play_supported',
        },
        constants: {
          expandedTextSplitter: '|',
          defaultAudioPlayFeedbackText: 'Audio On',
          defaultAudioPauseFeedbackText: 'Audio Off',
          defaultAutoPlayFallbackText: 'Tap for Help',
          fabAudiospotElongateMarginLeft: '0px',
          fabAudiospotFallbackContractMarginLeft: '-13px',
          fabAudiospotDefaultImageWidth: 55,
          fabAudiospotDefaultTransitionDelay: '2s',
          fabAudiospotTextMarginConstant: 25,
          fabAudiospotNegation: -1,
          fabAudiospotZIndex: 490,
          fabAudiospotForegroundZIndex: 9e3,
          fabAudiospotBackgroundZIndex: 390,
        },
        CSSConstants: {
          fabAudiospotContainerIdentifier: 'sa_fabaudiospot',
          fabAudiospotContainerClass: 'sa_fabaudiospot-container',
          fabAudiospotContentClass: 'sa_fabaudiospot-content',
          fabAudiospotImageContainerIdentifier: 'sa_fabaudiospot-image',
          fabAudiospotImageContainerClass: 'sa_fabaudiospot-image-container',
          fabAudiospotInitialPulseIdentifier: 'sa_fabAudiospot-pulse-initial-dynamic',
          fabAudiospotInitialPulseClass: 'sa_fabAudiospot-pulse-initial-background',
          fabAudiospotPulseIdentifier: 'sa_fabAudiospot-dynamic-pulse',
          fabAudiospotPulseClass: 'sa_fabAudiospot-pulse-dynamic-background',
          fabAudiospotStaticPulseClass: 'sa_fabAudiospot-pulse-static-background',
          fabAudiospotStaticPulseIdentifier: 'sa_fabAudiospot-static-pulse',
          fabAudiospotInnerStaticPulseIdentifier: 'sa_fabAudiospot-static-pulse-inner',
          fabAudiospotInnerStaticPulseClass: 'sa_fabAudiospot-pulse-static-background-inner',
          fabAudiospotSpeakerClass: 'sa_fabaudiospot-image',
          fabAudiospotSpeakerIdentifiers: 'sa_fabaudiospot-image-speaker',
          fabAudiospotStaticSpeakerClass: 'sa_fabaudiospot-image-static',
          fabAudiospotStaticSpeakerIdentifier: 'sa_fabaudiospot-image-static-speaker',
          fabAudiospotPauseIconIdentifier: 'sa_fabaudiospot-pause-icon',
          fabAudiospotPauseIconClass: 'sa_fabaudiospot-pause',
          fabAudiospotTextContainerClass: 'sa_fabaudiospot-text-container',
          fabAudiospotTextClass: 'sa_fabaudiospot-text',
          fabAudiospotTextIdentifier: 'sa_fabaudiospot-text-id',
        },
        state: {
          play: 'PLAY_STATE',
          pause: 'PAUSE_STATE',
          complete: 'COMPLETED',
          autoPlayFailed: 'AUTOPLAY_FAILED',
        },
        metrics: {
          PREFIX: 'SA_FABAUDIOSPOT_',
          PLAY: 'PLAYED',
          PAUSE: 'PAUSED',
          REPLAY: 'REPLAYED',
          COMPLETE: 'COMPLETED',
          ERROR: 'ERROR',
          STALLED: 'STALLED',
          SUSPEND: 'SUSPENDED',
          WAITING: 'WAITING',
          ABORT: 'ABORT',
          LOADED: 'LOADED',
          USER_PAUSE: 'USER_PAUSE',
          NON_USER_PAUSE: 'NON_USER_PAUSE',
          USER_PLAY: 'USER_PLAY',
          USER_REPLAY: 'USER_REPLAY',
          ENABLED_BOTTOMSHEET: 'ENABLED_BOTTOMSHEET',
          ENABLED_POPOVER: 'ENABLED_POPOVER',
          DISABLED_OVERLAY: 'DISABLED_OVERLAY',
        },
        overlay: { BOTTOM_SHEET: 'bottomsheet', POP_OVER: 'popover' },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'SAFabAudiospotConstants',
      'QTipLibrary',
      'ShoppingAidsGenericUtils',
    ).register('SAFabAudiospotRenderer', function (h, d, a, e, f) {
      h = {
        addStyles: function () {
          f.addStyleToHead(a.style.FABaudiospotStyle)
        },
      }
      e = e.View.extend({
        container: x,
        create: function (c) {
          var b = document.createElement('div')
          b.id = a.CSSConstants.fabAudiospotContainerIdentifier
          b.classList.add(a.CSSConstants.fabAudiospotContainerClass)
          var d = document.createElement('div')
          d.classList.add(a.CSSConstants.fabAudiospotContentClass)
          var e = document.createElement('div')
          e.id = a.CSSConstants.fabAudiospotImageContainerIdentifier
          e.classList.add(a.CSSConstants.fabAudiospotImageContainerClass)
          var f = document.createElement('div')
          f.id = a.CSSConstants.fabAudiospotInitialPulseIdentifier
          f.classList.add(a.CSSConstants.fabAudiospotInitialPulseClass)
          f.innerHTML = a.template.dynamicPulse
          var h = document.createElement('div')
          h.classList.add(a.CSSConstants.fabAudiospotPulseClass)
          h.id = a.CSSConstants.fabAudiospotPulseIdentifier
          h.innerHTML = a.template.pulse
          var m = document.createElement('div')
          m.classList.add(a.CSSConstants.fabAudiospotInnerStaticPulseClass)
          m.id = a.CSSConstants.fabAudiospotInnerStaticPulseIdentifier
          m.innerHTML = a.template.innerCircle
          var p = document.createElement('div')
          p.classList.add(a.CSSConstants.fabAudiospotStaticPulseClass)
          p.id = a.CSSConstants.fabAudiospotStaticPulseIdentifier
          p.innerHTML = a.template.staticPulse
          var v = document.createElement('div')
          v.id = a.CSSConstants.fabAudiospotSpeakerIdentifier
          v.classList.add(a.CSSConstants.fabAudiospotSpeakerClass)
          var r = document.createElement('span')
          r.innerHTML = a.template.animatingSpeaker
          var q = document.createElement('div')
          q.id = a.CSSConstants.fabAudiospotStaticSpeakerIdentifier
          q.classList.add(a.CSSConstants.fabAudiospotStaticSpeakerClass)
          var t = document.createElement('span')
          t.innerHTML = a.template.staticSpeaker
          var u = document.createElement('div')
          u.id = a.CSSConstants.fabAudiospotPauseIconIdentifier
          u.classList.add(a.CSSConstants.fabAudiospotPauseIconClass)
          v.appendChild(r)
          q.appendChild(t)
          e.appendChild(h)
          e.appendChild(m)
          e.appendChild(p)
          e.appendChild(f)
          e.appendChild(q)
          e.appendChild(u)
          f = document.createElement('div')
          f.classList.add(a.CSSConstants.fabAudiospotTextContainerClass)
          h = document.createElement('p')
          h.id = a.CSSConstants.fabAudiospotTextIdentifier
          h.classList.add(a.CSSConstants.fabAudiospotTextClass)
          h.innerText = c
          f.appendChild(h)
          d.appendChild(e)
          d.appendChild(f)
          b.appendChild(d)
          this.container = b
        },
      })
      h.createFabAudiospot = new e()
      h.addStyles()
      return h
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'QTipLibrary',
      'ShoppingAidsGenericUtils',
      'FabAudiospotStateManager',
      'SAFabAudiospotConstants',
      'ShoppingAidsAudioUtils',
      'NestedShoppingAidHelper',
      'SAFabAudiospotUIManager',
      'SAFabAudiospotRenderer',
      'QTipsMetrics',
      'QTips',
      'AssistedShoppingDataManager',
    ).execute(function (h, d, a, e, f, c, b, l, g, k, n, m, p) {
      h = a.View.extend({
        createFabAudiospot: k.createFabAudiospot,
        model: x,
        render: function (a, d) {
          if (this.createFabAudiospot.container)
            throw (
              (n.incrementCounter(
                c.metrics.PREFIX + this.model.identifier + c.errorCode.ALREADY_RENDERED,
              ),
              c.errorCode.ALREADY_RENDERED)
            )
          this.model = a
          this._validateModel(this.model)
          this._splitExpandedText()
          this.createFabAudiospot.create(this.model.get('audioPlayFeedbackText'))
          f.configureAudio(this.model, d)
          this._displayFabAudiospot()
          e.isDefined(this.model.get('introductoryAnimation')) &&
            this.model.get('introductoryAnimation') &&
            g.introductoryAnimation()
          this._attachClickListener()
          b.handleVisibility(f.getCurrentState.bind(f), f.setState.bind(f))
          n.incrementCounter(
            c.metrics.PREFIX + this.model.identifier + c.successCode.RENDER_SUCCESS,
          )
        },
        update: function (a) {
          if (this._validateModel(a))
            this._updateIdentifier(a.get('identifier')),
              this._updateSupplementarySA(a.get('supplementarySA')),
              f.updateAudioSrc(a.get('audioSrc')),
              f.setElongateFabAudiospot(a.get('expandFabAudiospot')),
              n.incrementCounter(
                c.metrics.PREFIX + this.model.identifier + c.successCode.UPDATE_SUCCESS,
              )
          else
            throw (
              (n.incrementCounter(
                c.metrics.PREFIX + this.model.identifier + c.errorCode.UPDATE_FAILED,
              ),
              c.errorCode.UPDATE_FAILED)
            )
        },
        getIdentifier: function () {
          return this.model.get('identifier')
        },
        isFabAudiospotPresent: function () {
          return e.isDefined(this.createFabAudiospot.container)
        },
        dismiss: function () {
          f.setState(f.pause, !1)
          b.removeVisibilityChangeListener()
          document.body.removeChild(this.createFabAudiospot.container)
          this.createFabAudiospot.container = x
          this._dismissSupplementarySA()
          f.resetModuleVariables()
          f.audio = null
          n.incrementCounter(c.metrics.PREFIX + this.model.identifier + '_dismissed')
        },
        _displayFabAudiospot: function () {
          document.body.appendChild(this.createFabAudiospot.container)
          g.cacheElements()
          this._adjustPosition()
          this._renderSupplementarySA()
          g.enableTransition()
        },
        _attachClickListener: function () {
          d(this.createFabAudiospot.container).click(function () {
            f.getCurrentState() === f.pause
              ? (f.setState(f.play, !0), g.elongateShortenAnimation())
              : f.getCurrentState() === f.play
                ? (f.setState(f.pause, !0), g.elongateShortenAnimation())
                : f.getCurrentState() === f.complete
                  ? f.setState(f.play, !0)
                  : f.getCurrentState() === f.autoPlayFailed && f.setState(f.play, !0)
          })
        },
        _updateIdentifier: function (a) {
          this.model.set({ identifier: a })
          f.setIdentifier(a)
        },
        _updateSupplementarySA: function (a) {
          this.model.set({ supplementarySA: a })
          this._renderSupplementarySA()
        },
        _dismissSupplementarySA: function () {
          f.dismissAllRenderingSupplementarySA()
        },
        _splitExpandedText: function () {
          if (this.model.get('expandedText')) {
            var a = this.model.get('expandedText'),
              b = a.split(c.constants.expandedTextSplitter)[0]
            if ((a = a.split(c.constants.expandedTextSplitter)[1]) && b) {
              this.model.set({ audioPlayFeedbackText: b })
              this.model.set({ audioPauseFeedbackText: a })
              return
            }
          }
          this.model.set({ audioPlayFeedbackText: c.constants.defaultAudioPlayFeedbackText })
          this.model.set({ audioPauseFeedbackText: c.constants.defaultAudioPauseFeedbackText })
        },
        _adjustPosition: function () {
          e.isDefined(this.model.get('positionY')) &&
            (d('#sa_fabaudiospot')[0].style.bottom = this.model.get('positionY').toString() + '%')
          d('#sa_fabaudiospot')[0].style.left =
            (screen.width - c.constants.fabAudiospotDefaultImageWidth).toString() + 'px'
          d('#sa_fabaudiospot')[0].style.marginLeft = c.constants.fabAudiospotElongateMarginLeft
        },
        _renderSupplementarySA: function () {
          var a = []
          if (this.model.get('supplementarySA'))
            for (var b = 0; b < this.model.get('supplementarySA').length; b++)
              this.model.get('supplementarySA')[b].has('from') &&
              this.model.get('supplementarySA')[b].has('to')
                ? a.push(this.model.get('supplementarySA')[b])
                : l.dispatchShoppingAidEvent(this.model.get('supplementarySA')[b])
          f.setTimeUpdateSupplementarySAList(a)
          a.length && f.audioEventListenerForTimeUpdate()
          n.incrementCounter(
            c.metrics.PREFIX + this.model.identifier + '_supplementarySA_displayed',
          )
        },
        _validateModel: function (a) {
          if (!e.isDefined(a.get('identifier')) || !e.isDefined(a.get('audioSrc')))
            throw c.errorCode.PARAMETER_MISSING
          return !0
        },
        handlerOverlay: function (a, e) {
          this.isFabAudiospotPresent() &&
            ((e === c.overlay.BOTTOM_SHEET && this._isCurrentBottomSheetEnabled(a)) ||
            (e === c.overlay.POP_OVER && this._isCurrentPopOverEnabled(a))
              ? ((d('#sa_fabaudiospot')[0].style.zIndex = c.constants.fabAudiospotForegroundZIndex),
                n.incrementCounter(
                  c.metrics.PREFIX +
                    this.model.identifier +
                    '_' +
                    (e === c.overlay.BOTTOM_SHEET
                      ? c.metrics.ENABLED_BOTTOMSHEET
                      : c.metrics.ENABLED_POPOVER) +
                    '_' +
                    (e === c.overlay.BOTTOM_SHEET ? a.sheet._name : a.popover._name),
                ))
              : ((d('#sa_fabaudiospot')[0].style.zIndex = c.constants.fabAudiospotBackgroundZIndex),
                b.handleOverlay(
                  f.getCurrentState.bind(f),
                  f.setState.bind(f),
                  this.getIdentifier(),
                ),
                n.incrementCounter(
                  c.metrics.PREFIX + this.model.identifier + '_' + c.metrics.DISABLED_OVERLAY,
                )))
        },
        handlerOverlayDismiss: function (a, e) {
          this.isFabAudiospotPresent() &&
            ((e === c.overlay.BOTTOM_SHEET && this._isCurrentBottomSheetEnabled(a)) ||
              (e === c.overlay.POP_OVER && this._isCurrentPopOverEnabled(a)) ||
              (b.handleOverlayDismiss(
                f.getCurrentState.bind(f),
                f.setState.bind(f),
                k.renderer.getIdentifier.bind(k.renderer),
              ),
              (this.userInteraction = !1)),
            (d('#sa_fabaudiospot')[0].style.zIndex = c.constants.fabAudiospotZIndex))
        },
        _isCurrentBottomSheetEnabled: function (a) {
          return (
            e.isDefined(a) &&
            e.isDefined(a.sheet._name) &&
            e.isDefined(p.getEnabledBottomSheets()) &&
            -1 !== p.getEnabledBottomSheets().indexOf(a.sheet._name)
          )
        },
        _isCurrentPopOverEnabled: function (a) {
          return (
            e.isDefined(a) &&
            e.isDefined(a.popover._name) &&
            e.isDefined(p.getEnabledPopOvers()) &&
            -1 !== p.getEnabledPopOvers().indexOf(a.popover._name)
          )
        },
      })
      k.renderer = new h()
      return k
    })
  })()
  ;(function () {
    r.when(
      'A',
      'SAFabAudiospotRenderer',
      'SAFabAudiospotConstants',
      'QTipsConstants',
      'FabAudiospotStateManager',
    ).register('SAFabAudiospot', function (h, d, a, e, f) {
      return {
        render: function (a, b, e) {
          try {
            d.renderer.render(a, b)
          } catch (g) {
            e && 'function' === typeof e && e(g)
          }
        },
        updateModel: function (c, b, e) {
          try {
            d.renderer.update(c), b && 'function' === typeof b && b(a.successCode.UPDATE_SUCCESS)
          } catch (g) {
            e && 'function' === typeof e && e(g)
          }
        },
        getState: function () {
          return f.getCurrentState()
        },
        updateState: function (c, b, d) {
          try {
            f.setState(c), b && 'function' === typeof b && b(a.successCode.STATE_UPDATE_SUCCESS)
          } catch (g) {
            d && 'function' === typeof d && d(g)
          }
        },
        getIdentifier: function () {
          return d.renderer.getIdentifier()
        },
        dismiss: function (c, b) {
          try {
            d.renderer.dismiss(), c && 'function' === typeof c && c(a.successCode.DISMISS_SUCCESS)
          } catch (l) {
            b && 'function' === typeof b && b(a.errorCode.DISMISS_FAILED)
          }
        },
        dismissWithId: function (a, b, f) {
          d.renderer.isFabAudiospotPresent() && this.getIdentifier() === a
            ? this.dismiss(b, f)
            : f && 'function' === typeof f && f(e.errorCodes.SA_NOT_DISPLAYED)
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'SAFabAudiospotConstants',
      'ShoppingAidsAudioUtils',
      'ShoppingAidsGenericUtils',
      'SAFabAudiospotUIManager',
      'NestedShoppingAidHelper',
      'QTipsConstants',
      'SAMetricUtils',
    ).register('FabAudiospotStateManager', function (h, d, a, e, f, c, b, l, g) {
      var k = {
        play: a.state.play,
        pause: a.state.pause,
        complete: a.state.complete,
        autoPlayFailed: a.state.autoPlayFailed,
        audioPlayFeedbackText: '',
        audioPauseFeedbackText: '',
        audioFallbackText: '',
        stateUpdateCallback: x,
        elongateFabAudiospot: !1,
        identifier: x,
        replayed: !1,
        timeUpdateSupplementarySAList: [],
        timeUpdateSupplementarySAListIndex: 0,
        isTimeUpdateEventListenerAdded: !1,
        currentlyRenderingSupplementarySAList: [],
        lastAudioTimeUpdateCall: 0,
        configureAudio: function (b, c) {
          if (e.isAudioSupported())
            (k.audio = new Audio()),
              (k.audio.src = b.get('audioSrc')),
              (k.state = this.pause),
              (this.audioPlayFeedbackText = b.get('audioPlayFeedbackText')),
              (this.audioPauseFeedbackText = b.get('audioPauseFeedbackText')),
              (this.stateUpdateCallback = c),
              (this.elongateFabAudiospot = b.get('expandFabAudiospot')),
              (this.identifier = b.get('identifier')),
              (this.audioFallbackText = b.get('fallbackText')),
              this._audioEventListeners()
          else throw a.errorCode.AUDIO_NOT_SUPPORTED
        },
        triggerEvent: function (a) {
          a = new CustomEvent(a, {
            bubbles: !0,
            cancelable: !1,
            detail: { identifier: k.identifier },
          })
          document.dispatchEvent(a)
        },
        _updateState: function (a) {
          switch (k.state) {
            case this.play:
              this._togglePlay(a)
              break
            case this.pause:
              this._togglePause(this.pause, a)
              break
            case this.complete:
              this._togglePause(this.complete)
              break
            case this.autoPlayFailed:
              c.autoPlayFallbackCSS(this.audioFallbackText)
          }
        },
        _togglePlay: function (b) {
          var d = k.audio.play()
          f.isDefined(d) &&
            d
              .then(function () {
                k.triggerEvent(k.play)
                c.updatePlayCSS(k.audioPlayFeedbackText)
                c.adjustView()
                k.replayed
                  ? (g.incrementCounterWithPlatform(
                      a.metrics.PREFIX + a.metrics.REPLAY,
                      1,
                      k.identifier,
                    ),
                    f.isDefined(b) &&
                      !0 === b &&
                      g.incrementCounterWithPlatform(
                        a.metrics.PREFIX + a.metrics.USER_REPLAY,
                        1,
                        k.identifier,
                      ))
                  : (g.incrementCounterWithPlatform(
                      a.metrics.PREFIX + a.metrics.PLAY,
                      1,
                      k.identifier,
                    ),
                    f.isDefined(b) &&
                      !0 === b &&
                      g.incrementCounterWithPlatform(
                        a.metrics.PREFIX + a.metrics.USER_PLAY,
                        1,
                        k.identifier,
                      ))
              })
              .catch(function (b) {
                k.stateUpdateCallback(
                  a.errorCode.UPDATE_FAILED,
                  a.errorCode.AUTO_PLAY_NOT_SUPPORTED,
                )
              })
        },
        _togglePause: function (b, d) {
          if (b === this.pause) {
            k.audio.pause()
            k.triggerEvent(k.pause)
            var e = k.audio.currentTime
            k.audio.currentTime = 0
            g.incrementCounterWithPlatform(a.metrics.PREFIX + a.metrics.PAUSE, e, this.identifier)
            f.isDefined(d) && !0 === d
              ? g.incrementCounterWithPlatform(
                  a.metrics.PREFIX + a.metrics.USER_PAUSE,
                  1,
                  this.identifier,
                )
              : g.incrementCounterWithPlatform(
                  a.metrics.PREFIX + a.metrics.NON_USER_PAUSE,
                  1,
                  this.identifier,
                )
          }
          c.updateAudioStoppedCSS(this.audioPauseFeedbackText, b)
          k.dismissAllRenderingSupplementarySA()
        },
        _audioEventListeners: function () {
          k.audio.addEventListener('ended', function () {
            k.setState(k.complete, !0)
            k.triggerEvent(k.complete)
            k.replayed = !0
            k.dismissAllRenderingSupplementarySA()
            g.incrementCounterWithPlatform(a.metrics.PREFIX + a.metrics.COMPLETE, 1, k.identifier)
          })
          k.audio.addEventListener('stalled', function () {
            g.incrementCounterWithPlatform(a.metrics.PREFIX + a.metrics.STALLED, 1, k.identifier)
          })
          k.audio.addEventListener('waiting', function () {
            g.incrementCounterWithPlatform(a.metrics.PREFIX + a.metrics.WAITING, 1, k.identifier)
          })
        },
        _processSupplementarySA: function () {
          if (0 < k.audio.currentTime && k.getCurrentState() === k.play) {
            for (
              var a = k.audio.currentTime * l.secondToMillisecondConversion, c = 0;
              c < k.currentlyRenderingSupplementarySAList.length;
              c++
            ) {
              var d = k.currentlyRenderingSupplementarySAList[c].get('to')
              f.isInRange(d, k.lastAudioTimeUpdateCall, a) &&
                (b.dispatchDismissShoppingAidEvent(
                  k.currentlyRenderingSupplementarySAList[c].attributes,
                ),
                k.currentlyRenderingSupplementarySAList.splice(c, 1),
                --c)
            }
            for (
              c = k.timeUpdateSupplementarySAListIndex;
              c < k.timeUpdateSupplementarySAList.length;
              c++
            )
              if (
                ((d = k.timeUpdateSupplementarySAList[c].get('from')),
                f.isInRange(d, k.lastAudioTimeUpdateCall, a))
              )
                k.currentlyRenderingSupplementarySAList.push(k.timeUpdateSupplementarySAList[c]),
                  b.dispatchShoppingAidEvent(k.timeUpdateSupplementarySAList[c]),
                  (k.timeUpdateSupplementarySAListIndex = c + 1)
              else break
            k.lastAudioTimeUpdateCall = a
          }
        },
        audioEventListenerForTimeUpdate: function () {
          var b = a.timer.supplementarySAThrottleTimer
          k.isTimeUpdateEventListenerAdded ||
            (k.audio.addEventListener('timeupdate', h.throttle(this._processSupplementarySA, b)),
            (k.isTimeUpdateEventListenerAdded = !0))
        },
        setTimeUpdateSupplementarySAList: function (a) {
          this.timeUpdateSupplementarySAList = a
        },
        dismissAllRenderingSupplementarySA: function () {
          for (var a = 0; a < k.currentlyRenderingSupplementarySAList.length; a++)
            b.dispatchDismissShoppingAidEvent(k.currentlyRenderingSupplementarySAList[a].attributes)
          this._resetCurrentlyRenderingSupplementarySAList()
        },
        _resetCurrentlyRenderingSupplementarySAList: function () {
          k.currentlyRenderingSupplementarySAList = []
          k.timeUpdateSupplementarySAListIndex = 0
          k.lastAudioTimeUpdateCall = 0
        },
        getCurrentState: function () {
          return k.state
        },
        updateAudioSrc: function (a) {
          k.audio.src = a
          this.replayed = !1
        },
        setState: function (b, c) {
          f.isDefined(b) && (k.state = b)
          this._updateState(c)
          this._expandFabAudiospot()
          f.isDefined(this.stateUpdateCallback) &&
            'function' === typeof this.stateUpdateCallback &&
            c &&
            this.stateUpdateCallback(a.successCode.UPDATE_SUCCESS, k.state)
        },
        setElongateFabAudiospot: function (a) {
          this.elongateFabAudiospot = a
        },
        _expandFabAudiospot: function () {
          this.elongateFabAudiospot &&
            (c.elongateShortenAnimation(), (this.elongateFabAudiospot = !1))
        },
        setIdentifier: function (a) {
          this.identifier = a
        },
        resetModuleVariables: function () {
          this.replayed = !1
          this.timeUpdateSupplementarySAList = []
          this.isTimeUpdateEventListenerAdded = !1
        },
      }
      return k
    })
  })()
  ;(function () {
    r.when('A', 'jQuery', 'SAFabAudiospotConstants', 'ShoppingAidsGenericUtils').register(
      'SAFabAudiospotUIManager',
      function (h, d, a, e) {
        var f = {
          elementIdStore: [],
          cacheElements: function () {
            this.elementIdStore.fabAudiospot = d('#sa_fabaudiospot')
            this.elementIdStore.fabAudiospotText = d('#sa_fabaudiospot-text-id')
            this.elementIdStore.fabAudiospotPause = d('#sa_fabaudiospot-pause-icon')
            this.elementIdStore.fabAudiospotSpeaker = d('#sa_fabaudiospot-image-static-speaker')
            this.elementIdStore.fabAudiospotDynamicPulse = d('#sa_fabAudiospot-dynamic-pulse')
            this.elementIdStore.fabAudiospotStaticPulse = d('#sa_fabAudiospot-static-pulse')
            this.elementIdStore.fabAudiospotInnerStaticPulse = d(
              '#sa_fabAudiospot-static-pulse-inner',
            )
            this.elementIdStore.fabAudiospotInitialPulse = d(
              '#sa_fabAudiospot-pulse-initial-dynamic',
            )
          },
          updatePlayCSS: function (a) {
            d(this.elementIdStore.fabAudiospotText)[0].innerText = a
            d(this.elementIdStore.fabAudiospotPause).show()
            d(this.elementIdStore.fabAudiospotSpeaker).hide()
            d(this.elementIdStore.fabAudiospotDynamicPulse).show()
            d(this.elementIdStore.fabAudiospotStaticPulse).hide()
            d(this.elementIdStore.fabAudiospotInnerStaticPulse).hide()
            d(this.elementIdStore.fabAudiospotInitialPulse).hide()
          },
          updateAudioStoppedCSS: function (c, b) {
            b === a.state.pause && (d(this.elementIdStore.fabAudiospotText)[0].innerText = c)
            d(this.elementIdStore.fabAudiospotPause).hide()
            d(this.elementIdStore.fabAudiospotSpeaker).show()
            d(this.elementIdStore.fabAudiospotDynamicPulse).hide()
            d(this.elementIdStore.fabAudiospotStaticPulse).show()
            d(this.elementIdStore.fabAudiospotInnerStaticPulse).show()
          },
          introductoryAnimation: function () {
            d(this.elementIdStore.fabAudiospotInitialPulse).show()
            d(this.elementIdStore.fabAudiospotStaticPulse).hide()
          },
          enableTransition: function () {
            d(this.elementIdStore.fabAudiospot)[0].style.transitionDuration =
              a.constants.fabAudiospotDefaultTransitionDelay
          },
          elongateShortenAnimation: function () {
            d(this.elementIdStore.fabAudiospot)[0].style.marginLeft = f.getLeftMargin()
            setTimeout(function () {
              f.enableTransition()
              d(f.elementIdStore.fabAudiospot)[0].style.marginLeft =
                a.constants.fabAudiospotElongateMarginLeft
            }, a.timer.elongationTimer)
          },
          autoPlayFallbackCSS: function (c) {
            d(this.elementIdStore.fabAudiospotText)[0].innerText =
              a.constants.defaultAutoPlayFallbackText
            c && (d(this.elementIdStore.fabAudiospotText)[0].innerText = c)
            this.elongateShortenAnimation()
          },
          getLeftMargin: function () {
            var c = d(this.elementIdStore.fabAudiospotText)[0].offsetWidth
            return (
              (
                a.constants.fabAudiospotNegation *
                (c + a.constants.fabAudiospotTextMarginConstant)
              ).toString() + 'px'
            )
          },
          adjustView: function () {
            e.isDefined(d(this.elementIdStore.fabAudiospot)[0].style.marginLeft) &&
              d(this.elementIdStore.fabAudiospot)[0].style.marginLeft !==
                a.constants.fabAudiospotElongateMarginLeft &&
              (d(this.elementIdStore.fabAudiospot)[0].style.marginLeft = this.getLeftMargin())
          },
        }
        return f
      },
    )
  })()
  ;(function () {
    r.when('A', 'jQuery', 'ShoppingAidsGenericUtils').register(
      'ShoppingAidsAudioUtils',
      function (h, d, a) {
        return {
          lastKnownState: x,
          lastKnownIdentifier: x,
          defaultOverlayTime: 1e3,
          handleVisibility: function (a, f) {
            d(document).bind('visibilitychange.fab_audio_spot', function () {
              document.hidden
                ? ((this.lastKnownState = a()), f('PAUSE_STATE'))
                : (f(this.lastKnownState), (this.lastKnownState = x))
            })
          },
          removeVisibilityChangeListener: function () {
            d(document).unbind('visibilitychange.fab_audio_spot')
          },
          isAudioSupported: function () {
            return u && u.Audio
          },
          handleOverlay: function (a, d, c) {
            this.lastKnownState = a()
            d('PAUSE_STATE')
            this.lastKnownIdentifier = c
          },
          handleOverlayDismiss: function (d, f, c) {
            var b = this
            setTimeout(function () {
              a.isDefined(c) && a.isDefined(b.lastKnownIdentifier) && b.lastKnownIdentifier !== c()
                ? (b.lastKnownIdentifier = x)
                : 'PAUSE_STATE' === d() && f(b.lastKnownState)
              b.lastKnownState = x
            }, b.defaultOverlayTime)
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'a-sheet',
      'SAAudiospot',
      'SAFabAudiospotRenderer',
      'SAHotspot',
      'ShoppingAidsGenericUtils',
      'SAFabAudiospotConstants',
      'a-popover',
      'AnchorBasedSAUtils',
      'QTipsConstants',
      'QTips',
    ).execute(function (h, d, a, e, f, c, b, l, g, k, n, m) {
      var p = !1
      h.on('a:sheet:beforeShow', function (a) {
        b.isDefined(e.view) &&
          b.isDefined(f.renderer) &&
          b.isDefined(c.view) &&
          (e.view.handleOverlay(),
          f.renderer.handlerOverlay(a, l.overlay.BOTTOM_SHEET),
          c.view.handleOverlay())
      })
      h.on('a:sheet:afterHide', function (a) {
        b.isDefined(e.view) &&
          b.isDefined(f.renderer) &&
          b.isDefined(c.view) &&
          (e.view.handleOverlayDismiss(),
          f.renderer.handlerOverlayDismiss(a, l.overlay.BOTTOM_SHEET),
          c.view.handleOverlayDismiss())
      })
      h.on('a:popover:beforeShow', function (a) {
        b.isDefined(e.view) &&
          b.isDefined(f.renderer) &&
          b.isDefined(c.view) &&
          (e.view.handleOverlay(),
          f.renderer.handlerOverlay(a, l.overlay.POP_OVER),
          c.view.handleOverlay())
      })
      h.on('a:popover:afterHide', function (a) {
        b.isDefined(e.view) &&
          b.isDefined(f.renderer) &&
          b.isDefined(c.view) &&
          (e.view.handleOverlayDismiss(),
          f.renderer.handlerOverlayDismiss(a, l.overlay.POP_OVER),
          c.view.handleOverlayDismiss())
      })
      0 < d('.nav-input.nav-progressive-attribute').length &&
        (d('.nav-input.nav-progressive-attribute').bind('focus', function () {
          this.intervalId = setInterval(function () {
            b.isDefined(e.view) &&
              b.isDefined(c.view) &&
              b.isDefined(m.view) &&
              (b.hasNoPopover(
                n.popOverAnchors.popoverClass,
                n.popOverAnchors.searchSugesstions,
                n.popOverAnchors.searchFilterPage,
              ) || p
                ? b.hasNoPopover(
                    n.popOverAnchors.popoverClass,
                    n.popOverAnchors.searchSugesstions,
                    n.popOverAnchors.searchFilterPage,
                  ) && (c.view.handleOverlayDismiss(), e.view.handleOverlayDismiss(), (p = !1))
                : (e.view.handleOverlay(),
                  c.view.handleOverlay(),
                  m.view.dismissAndRender(),
                  (p = !0)))
          }, n.timer.searchSuggestionPollTime)
        }),
        d('.nav-input.nav-progressive-attribute').bind('focusout', function () {
          b.isDefined(this.intervalId) &&
            (clearInterval(this.intervalId),
            delete this.intervalId,
            b.isDefined(e.view) &&
              b.isDefined(c.view) &&
              (c.view.handleOverlayDismiss(), e.view.handleOverlayDismiss(), (p = !1)))
        }))
    })
  })()
  ;(function () {
    r.when(
      'A',
      'ContextAwareFieldsFactory',
      'QTipsConstants',
      'QTipsMetrics',
      'SAMetricConstants',
      'ContextAwareFieldsProcessor',
      'ShoppingAidsGenericUtils',
    ).register('ContextAwareSubstitutor', function (h, d, a, e, f, c, b) {
      return {
        substitute: function (a, b, c) {
          if (a.clientSideTargetting || a.desiredWeblabTreatment) a.contextAwareIndex = b
          else return !0
          return !0 !== this.substituteGenericContextAwareFields(a, b)
            ? !1
            : (c = d.getContextAwareFields(c))
              ? this.substituteIndexedValueInSAData(a, c, b)
              : !0
        },
        substituteGenericContextAwareFields: function (a, b) {
          var c = d.getContextAwareFields('Generic')
          return this.substituteIndexedValueInSAData(a, c, b)
        },
        substituteIndexedValueInSAData: function (b, c, d) {
          for (var g = 0; g < c.length; g++) {
            var l = c[g]
            if (!h.objectIsEmpty(b[l])) {
              var k = b[l].split(a.contextAwareSADelimiter)
              if (1 < k.length)
                if (d < k.length)
                  (b[l] = k[d].trim()),
                    this.processSubstituteField(b, l),
                    e.incrementCounter(
                      f.SA_CONTEXT_AWARE_SUBSTITUTION + b.identifier + '_' + l + '_' + d,
                    )
                else
                  return (
                    e.incrementCounter(
                      f.SA_CONTEXT_AWARE_SUBSTITUTION + b.identifier + '_' + l + f.FAIL,
                    ),
                    !1
                  )
            }
          }
          return !0
        },
        processSubstituteField: function (a, d) {
          ;-1 !== c.fields.indexOf(d) &&
            (-1 !== c.fieldsParsersMap.stringToObject.indexOf(d) && 'string' === typeof a[d]
              ? (a[d] = b.parseJSONStringIfValid(a[d]))
              : -1 !== c.fieldsParsersMap.stringToNumber.indexOf(d) &&
                'string' === typeof a[d] &&
                (a[d] = Number(a[d])))
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'ContextAwareFields').register('ContextAwareFieldsFactory', function (h, d) {
      return {
        getContextAwareFields: function (a) {
          return 'Sparkles' === a
            ? d.sparklesContextAwareFields
            : 'ToolTips' === a
              ? d.toolTipsContextAwareFields
              : 'FabAudioSpot' === a
                ? d.fabAudioSpotContextAwareFields
                : 'Generic' === a
                  ? d.genericContextAwareFields
                  : null
        },
      }
    })
  })()
  ;(function () {
    r.register('ContextAwareFields', function () {
      return {
        genericContextAwareFields: [
          'nestedSAList',
          'clientSideTargetting',
          'desiredWeblabTreatment',
        ],
        toolTipsContextAwareFields: ['elementValue', 'elementAnchor', 'elementType'],
        sparklesContextAwareFields:
          'linkText descText targetEndPoint icon displayIcon displayText descriptionText'.split(
            ' ',
          ),
        fabAudioSpotContextAwareFields: ['audioSrc', 'supplementarySA', 'positionY'],
      }
    })
  })()
  ;(function () {
    r.register('SASupportedMarketplaceConfig', function () {
      return {
        supportedMarketplace: {
          ATVPDKIKX0DER: 'us',
          A2EUQ1WTGCTBG2: 'ca',
          A1AM78C64UM0Y8: 'mx',
          A2Q3Y263D00KWC: 'br',
          A1F83G8C2ARO7P: 'uk',
          A1PA6795UKMFR9: 'de',
          A13V1IB3VIYZZH: 'fr',
          A1RKKUPIHCS9HS: 'es',
          APJ6JRA9NG5V4: 'it',
          A21TJRUUN4KGV: 'in',
          A33AVAJ2PDY3EV: 'tr',
          A2VIGQ35RCS4UG: 'ae',
          A17E79C6D8DWNP: 'sa',
          A1805IZSGTT6HS: 'nl',
          ARBP9OOSHTCHU: 'eg',
          A2NODRKZP88ZB9: 'se',
          A1C3SOZRARQ6R3: 'pl',
          AMEN7PMS3EDWL: 'be',
          AE08WJ6YKNBMC: 'za',
          A1VC38T7YXB528: 'jp',
          A39IBJ37TRP1C6: 'au',
          A19VAU5U5O7RUS: 'sg',
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'ShoppingAidsGenericUtils', 'PageResolver').register(
      'SAMutationObserver',
      function (h, d, a) {
        var e = {
          _pageChangeObserver: x,
          attachPageChangeObserver: function (e, c) {
            d.isMutationObserverSupported() &&
              d.isDefined(c) &&
              d.isDefined(e) &&
              'function' === typeof e &&
              ((this._pageChangeObserver = new u.MutationObserver(function () {
                var b = a.pageAdapter()
                d.isDefined(b) && b !== c && ((c = b), e(b))
              })),
              this._handleVisibilityChange())
          },
          isPageChangeObserverAttached: function () {
            return d.isDefined(this._pageChangeObserver)
          },
          enablePageChangeObserver: function () {
            this.isPageChangeObserverAttached() &&
              this._pageChangeObserver.observe(document, { subtree: !0, childList: !0 })
          },
          disconnectPageChangeObserver: function () {
            this.isPageChangeObserverAttached() && this._pageChangeObserver.disconnect()
          },
          cleanUpPageChangeObserver: function () {
            this._pageChangeObserver = x
            h.$(document).unbind('visibilitychange.mutation_observer')
          },
          _handleVisibilityChange: function () {
            h.$(document).bind('visibilitychange.mutation_observer', function () {
              document.hidden ? e.disconnectPageChangeObserver() : e.enablePageChangeObserver()
            })
          },
        }
        return e
      },
    )
  })()
  ;(function () {
    r.register('ContextAwareFieldsProcessor', function () {
      return {
        fields: ['supplementarySA', 'positionY'],
        fieldsParsersMap: { stringToObject: ['supplementarySA'], stringToNumber: ['positionY'] },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'SARateLimitingUtils',
      'SARateLimitingConfig',
      'SAMetricConstants',
      'QTipsMetrics',
      'ShoppingAidsGenericUtils',
      'LocalStorageInterface',
    ).register('SARateLimitingInstrumentationHandler', function (h, d, a, e, f, c, b) {
      return {
        localStorageKey: a.rateLimitingInstrumentationKey,
        fetchWindowIntervals: a.fetchWindowIntervals,
        rateLimitingInstrumentation: function (a, e) {
          var f = c.defaultJSONIfUndefined(b.getFromLocalStorage(this.localStorageKey), {})
          a = d.updateFetchWindowConfig(a, f)
          this._logMetricsForRateLimiting(a, e)
          b.setInLocalStorage(this.localStorageKey, JSON.stringify(a))
        },
        _logMetricsForRateLimiting: function (b, c) {
          for (var d = 0; d < this.fetchWindowIntervals.length; d++) {
            var g = this.fetchWindowIntervals[d]
            g = e.SA_FETCH_RATE_LIMITING_PREFIX.concat(g, '_', b[g][a.countKey])
            c ? f.incrementCounter(g + e.STATUS_1) : f.incrementCounter(g + e.STATUS_0)
          }
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'ShoppingAidsGenericUtils', 'SARateLimitingConfig').register(
      'SARateLimitingUtils',
      function (h, d, a) {
        return {
          fetchWindowIntervals: a.fetchWindowIntervals,
          windowStartTimeKey: a.windowStartTimeKey,
          countKey: a.countKey,
          updateFetchWindowConfig: function (a, d) {
            for (var c = {}, b = 0; b < this.fetchWindowIntervals.length; b++) {
              var e = this.fetchWindowIntervals[b]
              c[e] = this._updateFetchWindowConfigForInterval(a, d[e], e)
            }
            return c
          },
          _updateFetchWindowConfigForInterval: function (a, d, c) {
            var b = {}
            this.isFetchWindowActive(a, d, c)
              ? ((b[this.windowStartTimeKey] = d[this.windowStartTimeKey]),
                (b[this.countKey] = d[this.countKey] + 1))
              : ((b[this.windowStartTimeKey] = a), (b[this.countKey] = 1))
            return b
          },
          isFetchWindowActive: function (a, f, c) {
            return d.isDefined(f) && d.isDefined(f[this.windowStartTimeKey])
              ? a - f[this.windowStartTimeKey] < 6e4 * c
              : !1
          },
        }
      },
    )
  })()
  ;(function () {
    r.register('SARateLimitingConfig', function () {
      return {
        rateLimitingInstrumentationKey: 'sa_fetch_window_config',
        fetchWindowIntervals: [5, 10, 15, 30, 60],
        countKey: 'count',
        windowStartTimeKey: 'windowStartTime',
      }
    })
  })()
  ;(function () {
    r.when('QTipsMetrics', 'ShoppingAidsGenericUtils', 'SAConfig').register(
      'SAMetricUtils',
      function (h, d, a) {
        return {
          currentLop: d.getCookie(a.cookies.language) || a.defaultLoP,
          platform: d.platformCheck(),
          incrementCounterWithLOP: function (a, d, c) {
            h.incrementCounter(a, d, c)
            h.incrementCounter(a + '_' + this.currentLop, d, c)
          },
          incrementCounterWithPlatform: function (a, d, c) {
            h.incrementCounter(a, d, c)
            h.incrementCounter(a + '_' + this.platform, d, c)
          },
          incrementCounterWithLOPAndPlatform: function (a, d, c) {
            h.incrementCounter(a, d, c)
            h.incrementCounter(a + '_' + this.currentLop, d, c)
            h.incrementCounter(a + '_' + this.platform, d, c)
          },
          incrementCounterWithLOPPlatformAndCombination: function (a, d, c) {
            h.incrementCounter(a, d, c)
            h.incrementCounter(a + '_' + this.currentLop, d, c)
            h.incrementCounter(a + '_' + this.platform, d, c)
            h.incrementCounter(a + '_' + this.platform + '_' + this.currentLop, d, c)
          },
          incrementLOPCounter: function (a, d, c) {
            h.incrementCounter(a + '_' + this.currentLop, d, c)
          },
          incrementPlatformCounter: function (a, d, c) {
            h.incrementCounter(a + '_' + this.platform, d, c)
          },
          incrementLOPPlatformCombinationCounter: function (a, d, c) {
            h.incrementCounter(a + '_' + this.platform + '_' + this.currentLop, d, c)
          },
        }
      },
    )
  })()
  ;(function () {
    r.when(
      'ShoppingAidsFilters',
      'PageResolver',
      'QTipsMetrics',
      'SAMetricConstants',
      'SAMetricUtils',
      'QTipsConstants',
    ).register('UIGuardRailFiltering', function (h, d, a, e, f, c) {
      return {
        isUIGuardRailMet: function (b) {
          a.incrementCounter(e.SA_CACHE_PREFIX + e.UI_GUARD_RAIL_FILTER + e.START)
          var c = d.pageAdapter()
          if (b.uiBasedGuardRail && !h.excecuteClientSideTargetting(b.uiBasedGuardRail.trim()))
            return (
              f.incrementCounterWithLOPPlatformAndCombination(
                e.UI_GUARD_RAIL_FILTER + e.FAIL,
                1,
                b.identifier,
              ),
              a.incrementCounter(e.UI_GUARD_RAIL_FILTER + e.FAIL + '_' + c, b.identifier),
              !1
            )
          f.incrementCounterWithLOPPlatformAndCombination(
            e.UI_GUARD_RAIL_FILTER + e.PASS,
            1,
            b.identifier,
          )
          a.incrementCounter(e.UI_GUARD_RAIL_FILTER + e.PASS + '_' + c, b.identifier)
          return !0
        },
      }
    })
  })()
  ;(function () {
    r.when('A', 'ShoppingAidsGenericUtils').register('HighPrioritySAListProvider', function (h, d) {
      return {
        getHighPrioritySAList: function (a) {
          var e = this._provideHighPrioritySA(a)
          return d.isDefined(e) ? e : a
        },
        _provideHighPrioritySA: function (a) {
          var e
          h.each(a, function (a, c) {
            a = h.filter(a, function (a) {
              return !d.isDefined(e) && -1 !== a.identifier.indexOf('GuidedTour')
            })
            d.isNonEmptyArray(a) && ((e = {}), (e[c] = [a[0]]))
          })
          return e
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'ShoppingAidsGenericUtils',
      'MwebAttributionHandler',
      'NativeFeatureAttributionHandler',
      'QTipsMetrics',
      'FeatureAttributionConstants',
      'SACommonConstants',
      'SAFeature',
    ).register('SAPAttributionHandler', function (h, d, a, e, f, c, b, l, g) {
      function k(a) {
        for (var d in a)
          if (a.hasOwnProperty(d)) {
            var e = a[d][b.lastLogImpressionTime]
            e = Math.abs(Date.now() - e)
            e = Math.round(e / 36e5)
            a[d][b.timeElapsed] = e
            e > b.ATTRIBUTION_TIME_LIMIT_HR &&
              (delete a[d], c.incrementCounter(b.SAP_ATTRIBUTION_METRIC_PREFIX + d + '_Deleted'))
          }
        return a
      }
      function n(a) {
        a[b.html] = {}
        a[b.native] = {}
        a[b.native][l.MSHOP_ANDROID] = {}
        a[b.native][l.MSHOP_IPHONE] = {}
        return a
      }
      var m = {},
        p
      return {
        featureAttributionBootUp: function (d, h) {
          p = d
          d = a.getFromLocalStorage(b.SAP_ATTRIBUTION_LOCALSTORAGE_KEY)
          a.isDefined(d)
            ? (m = a.parseJSONStringIfValid(d))
            : ((m = n(m)),
              c.incrementCounter(b.SAP_ATTRIBUTION_METRIC_PREFIX + 'Local_Storage_Initialised'))
          a.isDefined(m[b.html]) ||
            ((m[b.html] = {}),
            c.incrementCounter(
              b.SAP_ATTRIBUTION_METRIC_PREFIX + 'Html_Anchors_Local_Storage_Initialised',
            ))
          a.isDefined(m[b.native]) ||
            ((m[b.native] = {}),
            (m[b.native][l.MSHOP_ANDROID] = {}),
            (m[b.native][l.MSHOP_IPHONE] = {}),
            c.incrementCounter(
              b.SAP_ATTRIBUTION_METRIC_PREFIX + 'Native_Anchors_Local_Storage_Initialised',
            ))
          if (a.isDefined(m[p])) {
            if (a.isDefined(m[p][b.html])) {
              for (var q in m[p][b.html]) m[b.html][q] = m[p][b.html][q]
              delete m[p][b.html]
            }
            a.isDefined(m[p][b.native]) && delete m[p][b.native]
            delete m[p]
          }
          m[b.html] = k(m[b.html])
          m[b.native][l.MSHOP_ANDROID] = k(m[b.native][l.MSHOP_ANDROID])
          m[b.native][l.MSHOP_IPHONE] = k(m[b.native][l.MSHOP_IPHONE])
          ;(h !== l.MSHOP_ANDROID && h !== l.MSHOP_IPHONE) ||
            !g.androidFeatureAttribution ||
            ((q = m[b.native]), a.isDefined(q) ? f.initiate(q, h) : n(m))
          h = m[b.html]
          a.isDefined(h) ? e.initiate(h) : n(m)
          a.setInLocalStorage(b.SAP_ATTRIBUTION_LOCALSTORAGE_KEY, JSON.stringify(m))
          c.incrementCounter(b.SAP_ATTRIBUTION_METRIC_PREFIX + 'initialised')
        },
        enableFeatureAttribution: function (c) {
          if (
            a.isDefined(c) &&
            a.isDefined(c[b.featureAttributionAnchor]) &&
            a.isDefined(c[b.maxDisplayCount]) &&
            a.isDefined(c[b.maxDisplayCount])
          ) {
            var d = {},
              f = c[b.identifier],
              g = c[b.elementDisplayType].toLowerCase()
            d[f] = {}
            d[f][b.identifier] = f
            d[f][b.lastLogImpressionTime] = Date.now()
            d[f][b.maxDisplayCount] = c[b.maxDisplayCount]
            d[f][b.timeElapsed] = 0
            d[f][b.eventListenerAnchor] = c[b.featureAttributionAnchor]
            g === b.html
              ? ((d[f][b.videoSource] = c[b.videoSource]),
                (d[f][b.toolTipUXChangeAllocatedTreatment] =
                  c[b.toolTipUXChangeAllocatedTreatment]),
                e.unbindListener(m[b.html][f]),
                a.isDefined(d) ? e.initiate(d) : n(m),
                (m[b.html][f] = d[f]))
              : g === b.native && (m[b.native][a.platformCheck()][f] = d[f])
            a.setInLocalStorage(b.SAP_ATTRIBUTION_LOCALSTORAGE_KEY, JSON.stringify(m))
          }
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'jQuery',
      'ShoppingAidsGenericUtils',
      'SAAttributionMetricLogger',
      'QTipsMetrics',
      'FeatureAttributionConstants',
    ).register('MwebAttributionHandler', function (h, d, a, e, f, c) {
      return {
        initiate: function (a) {
          for (var b in a)
            if (a.hasOwnProperty(b)) {
              var f = a[b].eventListenerAnchor,
                h = a[b].maxDisplayCount,
                n = a[b].timeElapsed,
                m = a[b].videoSource,
                p = a[b].toolTipUXChangeAllocatedTreatment
              0 !== d(f).length &&
                d(f).bind(
                  c.SA_ATTRIBUTION_CLICK_LISTENER,
                  {
                    identifier: b,
                    impressionCount: h,
                    timeElapsed: n,
                    videoSource: m,
                    toolTipUXChangeAllocatedTreatment: p,
                  },
                  e.logAttributionMetrics,
                )
            }
        },
        unbindListener: function (b) {
          a.isDefined(b) &&
            (d(b.eventListenerAnchor).unbind(c.SA_ATTRIBUTION_CLICK_LISTENER),
            f.incrementCounter(c.SAP_MWEB_HANDLER_METRIC_PREFIX + 'Listener_Unbounded'),
            f.incrementCounter(
              c.SAP_MWEB_HANDLER_METRIC_PREFIX +
                'Listener_Unbounded_' +
                b.identifier +
                '_' +
                b.eventListenerAnchor,
            ))
        },
      }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'QTipsMetrics',
      'FeatureAttributionConstants',
      'SACommonConstants',
      'ShoppingAidsGenericUtils',
    ).register('NativeFeatureAttributionHandler', function (h, d, a, e, f) {
      return { initiate: function (a, b) {} }
    })
  })()
  ;(function () {
    r.when(
      'A',
      'QTipsMetrics',
      'FeatureAttributionConstants',
      'ShoppingAidsGenericUtils',
      'QTipsConstants',
    ).register('SAAttributionMetricLogger', function (h, d, a, e, f) {
      return {
        logAttributionMetrics: function (c) {
          var b = c.data.identifier,
            h = c.data.timeElapsed,
            g =
              a.SA_ATTRIBUTION_PREFIX + b + '_' + c.data.impressionCount + '_' + a.SA_HOUR_CONSTANT
          b = a.SA_ATTRIBUTION_PREFIX + b + '_' + a.SA_HOUR_CONSTANT
          h <= a.TWO_HOUR_BUCKET
            ? (d.incrementCounter(g + a.TWO_HOUR_BUCKET),
              d.incrementCounter(g + a.FOUR_HOUR_BUCKET),
              d.incrementCounter(g + a.EIGHT_HOUR_BUCKET),
              d.incrementCounter(g + a.TWELVE_HOUR_BUCKET),
              d.incrementCounter(b + a.TWO_HOUR_BUCKET),
              d.incrementCounter(b + a.FOUR_HOUR_BUCKET),
              d.incrementCounter(b + a.EIGHT_HOUR_BUCKET))
            : h > a.TWO_HOUR_BUCKET && h <= a.FOUR_HOUR_BUCKET
              ? (d.incrementCounter(g + a.FOUR_HOUR_BUCKET),
                d.incrementCounter(g + a.EIGHT_HOUR_BUCKET),
                d.incrementCounter(g + a.TWELVE_HOUR_BUCKET),
                d.incrementCounter(b + a.FOUR_HOUR_BUCKET),
                d.incrementCounter(b + a.EIGHT_HOUR_BUCKET))
              : h > a.FOUR_HOUR_BUCKET && h <= a.EIGHT_HOUR_BUCKET
                ? (d.incrementCounter(g + a.EIGHT_HOUR_BUCKET),
                  d.incrementCounter(g + a.TWELVE_HOUR_BUCKET),
                  d.incrementCounter(b + a.EIGHT_HOUR_BUCKET))
                : d.incrementCounter(g + a.TWELVE_HOUR_BUCKET)
          d.incrementCounter(b + a.TWELVE_HOUR_BUCKET)
          d.incrementCounter(
            a.SA_ATTRIBUTION_PREFIX + c.data.impressionCount + '_' + c.data.identifier,
          )
          d.incrementCounter(a.SA_ATTRIBUTION_PREFIX + c.data.identifier)
          c.data.videoSource === f.EmptyString &&
            c.data.toolTipUXChangeAllocatedTreatment !== f.EmptyString &&
            e.isPlatformSupportedForToolTipUxExperiment() &&
            d.incrementCounter(
              a.SA_ATTRIBUTION_PREFIX +
                '_' +
                a.TOOL_TIP_UX +
                '_' +
                c.data.toolTipUXChangeAllocatedTreatment,
            )
        },
      }
    })
  })()
  ;(function () {
    r.register('FeatureAttributionConstants', function () {
      return {
        SA_ATTRIBUTION_CLICK_LISTENER: 'click.SAAttribution',
        SAP_MWEB_HANDLER_METRIC_PREFIX: 'SAAttribution_Mweb_Handler_',
        SAP_ATTRIBUTION_LOCALSTORAGE_KEY: 'SA_Attribution_Cache',
        SAP_ATTRIBUTION_METRIC_PREFIX: 'SAAttribution_',
        SA_ATTRIBUTION_PREFIX: 'SA_ATTRIBUTION_',
        TOOL_TIP_UX: 'ToolTip_UX',
        SA_HOUR_CONSTANT: 'Hour',
        TWO_HOUR_BUCKET: 2,
        FOUR_HOUR_BUCKET: 4,
        EIGHT_HOUR_BUCKET: 8,
        TWELVE_HOUR_BUCKET: 12,
        ATTRIBUTION_TIME_LIMIT_HR: 12,
        native: 'native',
        html: 'html',
        identifier: 'identifier',
        elementAnchor: 'elementAnchor',
        eventListenerAnchor: 'eventListenerAnchor',
        videoSource: 'videoSource',
        toolTipUXChangeAllocatedTreatment: 'toolTipUXChangeAllocatedTreatment',
        lastLogImpressionTime: 'lastLogImpressionTime',
        maxDisplayCount: 'maxDisplayCount',
        elementDisplayType: 'elementDisplayType',
        featureAttribution: 'featureAttribution',
        featureAttributionAnchor: 'featureAttributionAnchor',
        timeElapsed: 'timeElapsed',
        SUCCESS_MESSAGE: 'SA_FeatureAttributionSuccess',
        INVALID_DATA: 'SA_InvalidFeatureAttributionData',
        NULL_VIEW: 'NullView',
        FeatureAttribution: 'FeatureAttribution',
      }
    })
  })()
  ;(function () {
    r.when('ShoppingAidsGenericUtils', 'LocaleConfig', 'QTipsMetrics').register(
      'LoPResolver',
      function (h, d, a) {
        return {
          SA_LOP_PREFIX: 'sa_lop_',
          LANG_META_TAG_LOP_METRIC: 'lang_meta_tag_used',
          COOKIE_LOP_METRIC: 'cookie_used',
          UNKNOWN_LOP_METRIC: 'unknown_used',
          getCurrentLoP: function () {
            var d = this._formatLoP(this._retrieveLoPFromLangMetaTag())
            if (h.isDefined(d))
              return a.incrementCounter(this.SA_LOP_PREFIX + this.LANG_META_TAG_LOP_METRIC), d
            d = this._formatLocaleToLoP(this._retrieveLocaleFromCookie())
            if (h.isDefined(d))
              return a.incrementCounter(this.SA_LOP_PREFIX + this.COOKIE_LOP_METRIC), d
            a.incrementCounter(this.SA_LOP_PREFIX + this.UNKNOWN_LOP_METRIC)
            return 'unknown'
          },
          _retrieveLoPFromLangMetaTag: function () {
            try {
              var a = document.querySelector('html').getAttribute('lang')
              return h.isDefined(a) ? a : null
            } catch (f) {
              return null
            }
          },
          _retrieveLocaleFromCookie: function () {
            var a = h.getMarketplaceName()
            return h.getCookie(d.MarketplaceLocaleMap[a])
          },
          _formatLoP: function (a) {
            if (!h.isDefined(a) || -1 === a.indexOf('-')) return null
            a = a.split('-')
            return a[0] + '-' + a[1].toUpperCase()
          },
          _formatLocaleToLoP: function (a) {
            return h.isDefined(a) && -1 !== a.indexOf('_') ? a.replace('_', '-') : null
          },
        }
      },
    )
  })()
  ;(function () {
    r.register('LocaleConfig', function () {
      return {
        MarketplaceLocaleMap: {
          us: 'lc-main',
          ca: 'lc-acbca',
          mx: 'lc-acbmx',
          br: 'lc-acbbr',
          uk: 'lc-acbuk',
          de: 'lc-acbde',
          fr: 'lc-acbfr',
          es: 'lc-acbes',
          it: 'lc-acbit',
          in: 'lc-acbin',
          tr: 'lc-acbtr',
          ae: 'lc-acbae',
          sa: 'lc-acbsa',
          nl: 'lc-acbnl',
          eg: 'lc-acbeg',
          se: 'lc-acbse',
          pl: 'lc-acbpl',
          be: 'lc-acbbe',
          jp: 'lc-acbjp',
          au: 'lc-acbau',
          sg: 'lc-acbsg',
        },
      }
    })
  })()
  ;(function () {
    r.register('SADesktopConfig', function () {
      return {
        pageEligibility: {
          Detail: { wdg: ['ebooks_display_on_website', 'audible_display_on_website'] },
        },
      }
    })
  })()
})
/* ******** */
;(function (e) {
  var l = window.AmazonUIPageJS || window.P,
    k = l._namespace || l.attributeErrors,
    g = k ? k('SABottomSheetLibrary', '') : l
  g.guardFatal
    ? g.guardFatal(e)(g, window)
    : g.execute(function () {
        e(g, window)
      })
})(function (e, l, k) {
  ;(function () {
    e.when('A').register('SA_BottomSheet', function () {
      return {}
    })
  })()
  ;(function () {
    e.register('SA_BottomSheetStyles', function () {
      return '\n    #saBottomSheet-bottom-sheet{\n      -webkit-transition:height 2s;\n      transition:height 2s;\n      overflow-y:auto;height:100%\n    }\n  '
    })
  })()
  ;(function () {
    e.when('A', 'jQuery').register('SA_MemoryManager', function () {
      var g = function () {
          try {
            if (l.localStorage) return 1
          } catch (a) {
            return l.ue.count('SA_MemoryManager_LocalStorageNotExposed', 1), 0
          }
        },
        e = { bottomSheet: 'SA_BottomSheetObj' },
        k = function () {
          return new Date().setHours(0, 0, 0, 0).toString()
        }
      return {
        shouldFetchShoppingAids: function (a, f, c, d) {
          if (!g()) return !1
          a = localStorage.getItem(e[a])
          if (null === a) return !0
          a = JSON.parse(a)
          var b = a.lastShownDate
          if (k() !== b) return !0
          b = a.dayCount
          return a.pageCounts[f] < d && b < c ? !0 : !1
        },
        writeShoppingAidsData: function (a, f, c) {
          if (g()) {
            var d = localStorage.getItem(e[a]),
              b = {},
              h = Math.round(new Date().getTime() / 36e5)
            null === d
              ? ((b.lastShownDate = k()),
                (b.dayCount = 1),
                (d = {}),
                (d[c] = 1),
                (b.pageCounts = d),
                (c = {}),
                (c.lastTimeStamp = h),
                (c.count = 1),
                (h = {}),
                (h[f] = c),
                (b.elements = h))
              : ((b = JSON.parse(d)),
                (b.lastShownDate = k()),
                (b.dayCount += 1),
                (d = b.pageCounts),
                (d[c] += 1),
                (b.pageCounts = d),
                (c = b.elements),
                c[f]
                  ? ((c[f].count += 1), (c[f].lastTimeStamp = h))
                  : ((d = {}), (d.lastTimeStamp = h), (d.count = 1), (c[f] = d)),
                (b.elements = c))
            localStorage.setItem(e[a], JSON.stringify(b))
          }
        },
        shouldShowShoppingAids: function (a, f, c, d) {
          if (!g()) return !1
          a = localStorage.getItem(e[a])
          if (null === a) return !0
          a = JSON.parse(a).elements
          if (!a[f]) return !0
          var b = a[f].lastTimeStamp,
            h = Math.round(new Date().getTime() / 36e5)
          return b + c <= h && a[f].count < d ? !0 : !1
        },
      }
    })
  })()
  ;(function () {
    e.register('vernacBSStyles', function () {
      return '.a-container{padding-bottom : 12px !important;}.a-spacing-base{margin-bottom : -2.5rem !important;}#saBottomSheet-bottom-sheet form{margin-bottom : 0 !important;}.a-box-inner{padding-bottom : 10px !important;padding-top : 10px !important;}.a-form-actions{padding-top : 8px}#icp-sl-t-text{margin-left : 10px !important;margin-right : 10px !important;margin-bottom : 7px !important; font-size : 1.2rem;}div[data-a-input-name\x3d"LOP"]{font-size : 1.3rem !important;}#icp-btn-close{margin-bottom : 0.5rem; margin-top : 0!important}#icp-btn-save{margin-bottom : 0.5rem; margin-top : 0!important}'
    })
  })()
})
/* ******** */
;(function (a) {
  var c = window.AmazonUIPageJS || window.P,
    d = c._namespace || c.attributeErrors,
    b = d ? d('SAPartnerAssets', '') : c
  b.guardFatal
    ? b.guardFatal(a)(b, window)
    : b.execute(function () {
        a(b, window)
      })
})(function (a, c, d) {
  ;(function () {
    a.when('A').register('SAPartnerUtils', function () {
      var b = c.ue
      return {
        logCSMTag: function (a) {
          b && b.tag && b.tag(a)
          c && uex && 'function' === typeof uex && uex('ld', a, { wb: 1 })
        },
        triggerCustomEvent: function (b, a, c, e, f) {
          a = new CustomEvent(a, { bubbles: c || !0, cancelable: e || !1, detail: f || d })
          b.dispatchEvent(a)
        },
      }
    })
  })()
})
/* ******** */
;(function (l) {
  var u = window.AmazonUIPageJS || window.P,
    e = u._namespace || u.attributeErrors,
    m = e ? e('QTipsMobileWebAssets', '') : u
  m.guardFatal
    ? m.guardFatal(l)(m, window)
    : m.execute(function () {
        l(m, window)
      })
})(function (l, u, e) {
  ;(function () {
    l.when(
      'A',
      'StatefulSAEligiblityHelper',
      'MultiPageSAOrchestrator',
      'SA_BottomSheet',
      'SA_MemoryManager',
      'QTips',
      'QTipsMetrics',
      'QTipsConstants',
      'ShoppingAidsSparkles',
      'ShoppingAidsFilters',
      'SAFeature',
      'SAEndPointsConfig',
      'ShoppingAidsFetcher',
      'LogImpressionManager',
      'ShoppingAidsGenericUtils',
      'SAHotspot',
      'SAAudiospot',
      'SAHighlighter',
      'PageResolver',
      'LocalStorageInterface',
      'LoPResolver',
      'SAPAttributionHandler',
      'AnchorBasedSAUtils',
    ).register(
      'QTipsHandler',
      function (e, g, a, h, b, c, t, C, p, f, q, z, D, x, n, d, y, A, B, E, v, w, r) {
        return {
          page: '',
          storageKey: 'identifier',
          schedulingKey: 'schedulingType',
          shoppingAidsType: 'shoppingAidsType',
          contextAwareIndex: 'contextAwareIndex',
          sourceName: 'ShoppingAidsMWeb_',
          platform: n.platformCheck(),
          SupportedMarketplace: n.isSupportedMarketplace(),
          init: function () {
            var b = this
            if ('Unsupported' === b.platform || !b.SupportedMarketplace)
              return t.incrementCounter(this.sourceName + 'assetsNotSupported'), 0
            if ('Desktop' === b.platform) {
              if (!n.isDesktopPageRequestSupported())
                return t.incrementCounter('Desktop_IneligibleRequest_AssetsNotSupported'), 0
              t.incrementCounter('Desktop_EligibleRequest_AssetsLoaded')
            } else t.incrementCounter(this.sourceName + 'assetsLoaded')
            if (!E.isLocalStorageExposed()) return 0
            c.utils.cleanUpCachingInstrumentation()
            c.utils.savePreviousLoP()
            c.utils.saveCurrentLoP()
            if ((this.page = B.pageAdapter())) {
              w.featureAttributionBootUp(this.page, this.platform)
              var d = function (k) {
                if (k) {
                  var d = !1
                  if (q.clientSideCaching && a.isBrowserSupported()) {
                    var c = g.getEligibleInProgressSA(b.page)
                    n.isObjectEmpty(c)
                      ? k.ShoppingAidsList &&
                        n.isNonEmptyArray(k.ShoppingAidsList.MultiPageShoppingAids) &&
                        ((d = !0), a.display(k.ShoppingAidsList.MultiPageShoppingAids[0], b.page))
                      : ((d = !0), a.display(c, b.page))
                  } else g.cleanUpInProgressStore()
                  q.clientSideCaching || (k = f.start(k))
                  k.ShoppingAidsList &&
                    !d &&
                    ((d = k.ShoppingAidsList.ToolTips),
                    n.isNonEmptyArray(d) && b._display(d),
                    (d = k.ShoppingAidsList.BottomSheets),
                    n.isNonEmptyArray(d) &&
                      (d.sort(function (a, b) {
                        return a.sequenceNum - b.sequenceNum
                      }),
                      h.collection.create(d),
                      h.view.start(b.page, n.isMShop())),
                    (d = k.ShoppingAidsList.Sparkles),
                    n.isNonEmptyArray(d) &&
                      p.init({ sparkles: d, page: b.page, platform: b.platform }),
                    (d = k.ShoppingAidsList.Audiospots),
                    n.isNonEmptyArray(d) && b._displayAudiospots(d),
                    (d = k.ShoppingAidsList.Hotspots),
                    n.isNonEmptyArray(d) && b._displayHotspots(d),
                    (k = k.ShoppingAidsList.Highlighters),
                    n.isNonEmptyArray(k) && b._displayHighlighters(k))
                }
                b.fireReady()
              }
              q.clientSideCaching
                ? D.fetchShoppingAids(b.page, d)
                : (D.cleanUpSACache(), b.fetch(b.page, d))
            } else t.incrementCounter(this.sourceName + 'pageTypeMismatch')
          },
          _getParameterByName: function (a, b) {
            b || (b = u.location.href)
            a = a.replace(/[\[\]]/g, '\\$\x26')
            return (a = new RegExp('[?\x26]' + a + '(\x3d([^\x26#]*)|\x26|#|$)').exec(b))
              ? a[2]
                ? decodeURIComponent(a[2].replace(/\+/g, ' '))
                : ''
              : null
          },
          fetch: function (a, b, f) {
            var k = this.sourceName + 'fetchShoppingAids_',
              d = document.referrer,
              g = /.*\.amazon\..*/g,
              h = 'DIRECT'
            g && g.test(d) && (h = 'INDIRECT')
            e.ajax(z.fetchShoppingAidsEndPoint, {
              method: 'GET',
              contentType: 'application/json; charset\x3dutf-8',
              timeout: 6e4,
              params: {
                page: a,
                url: B.getWindowLocationHref(),
                trafficType: h,
                previousLop: c.utils.getPreviousLoP(),
                currentLop: v.getCurrentLoP(),
                pageHitRequestID: n.getPageHitRequestID(),
              },
              success: function (f) {
                t.incrementCounter(k + a + '_success')
                b && 'function' === typeof b && b(f)
              },
              error: function (b, d) {
                'Request Timeout' === d
                  ? t.incrementCounter(k + a + '_request_timeout')
                  : 'NotFound' === d && t.incrementCounter(k + a + '_unknown_endpoint')
                t.incrementCounter(k + a + '_failed')
                f && 'function' === typeof f && f(b)
              },
            })
          },
          displayOnDemandToolTip: function (a) {
            c.collection.add(a)
            c.view.setDismissalCallback(this.logImpression.bind(this))
            c.view.setTerminationCallback(this.terminateQTip.bind(this))
            c.view.setPageType(this.page)
            c.utils.isDefined(c.view.setCountLogger) &&
              c.view.setCountLogger(this.logCounter.bind(this))
            c.view.dismissAndRender()
          },
          _display: function (a) {
            c.collection.create(a)
            c.view.setDismissalCallback(this.logImpression.bind(this))
            c.view.setTerminationCallback(this.terminateQTip.bind(this))
            c.view.setPageType(this.page)
            c.utils.isDefined(c.view.setCountLogger) &&
              c.view.setCountLogger(this.logCounter.bind(this))
            c.view.postQTipRender()
          },
          _displayAudiospots: function (a) {
            u &&
              u.Audio &&
              (y.collection.create(a),
              y.view.setAudiospotRenderCompleteCallback(this.logImpression.bind(this)),
              y.view.postAudiospotRender())
          },
          _displayHotspots: function (a) {
            d.collection.create(a)
            d.view.setRenderCompleteCallback(this.logImpression.bind(this))
            d.view.postHotspotRender()
          },
          _displayHighlighters: function (a) {
            A.collection.create(a)
            A.view.setRenderCompleteCallback(this.logImpression.bind(this))
            A.view.postHighlighterRender()
          },
          logCounter: function (a, b, f) {
            t.incrementCounter(a + '_' + b, f)
          },
          _isEligibleForToolTipUxExperiment: function (a, b, f, d) {
            return (
              n.isDefined(a) &&
              'tool_tip' === a &&
              n.isDefined(b) &&
              'html' === b.toLowerCase() &&
              n.isDefined(f) &&
              '' === f &&
              n.isDefined(d) &&
              '' !== d &&
              n.isPlatformSupportedForToolTipUxExperiment()
            )
          },
          logImpression: function (a) {
            var b = this,
              f = a[this.storageKey],
              d = a.elementDisplayType,
              c = a.videoSource,
              k = this.sourceName + f + '_' + this.page,
              g = this.sourceName + 'logSA_',
              h = a[this.schedulingKey],
              v = a[this.contextAwareIndex],
              m = a.userEvent,
              w = a[this.shoppingAidsType] || 'tool_tip',
              p = a.toolTipUXChangeAllocatedTreatment,
              l = r.getAidAnchorElement(a, w)
            null !== a.onDemand &&
              a.onDemand &&
              ((a = a.successResponse),
              (w = 'tool_tip:childSA'),
              a && 'function' === typeof a && a())
            if (q.clientSideCaching)
              (v = b._isEligibleForToolTipUxExperiment(w, d, c, p)
                ? x
                    .buildOptionalParameter()
                    .withContextAwareIndex(v)
                    .withUserEvent(m)
                    .withShoppingAidsAnchorGroup(l)
                    .withToolTipUxAllocatedTreatmentValue(p)
                    .build()
                : x
                    .buildOptionalParameter()
                    .withContextAwareIndex(v)
                    .withUserEvent(m)
                    .withShoppingAidsAnchorGroup(l)
                    .build()),
                x.handle(f, h, w, this.page, v)
            else {
              l = z.logImpressionEndPoint
              f = { pageType: this.page, shoppingAidsType: w, id: f, schedulingType: h }
              n.isDefined(v) && (f.contextAwareIndex = v)
              if (n.isDefined(m))
                switch (((f.userEvent = m), m)) {
                  case C.userEvent.optOut:
                    k += '_optOut'
                    break
                  case C.userEvent.complete:
                    k += '_complete'
                }
              e.ajax(l, {
                method: 'GET',
                contentType: 'application/json; charset\x3dutf-8',
                timeout: 6e4,
                params: f,
                success: function (a) {
                  t.incrementCounter(k + '_logged')
                  b._isEligibleForToolTipUxExperiment(w, d, c, p) &&
                    ((a = C.ToolTipUXMetricForLogImpression + p),
                    u.ue.trigger && u.ue.trigger(C.ToolTipUXExperimentWeblab, p),
                    t.incrementCounter(a))
                },
                error: function (a, b) {
                  'NotFound' === b && t.incrementCounter(g + 'unknown_endpoint')
                  t.incrementCounter(k + '_failedToLog')
                },
              })
            }
          },
          terminateQTip: function (a) {
            t.incrementCounter('terminate_' + a[this.storageKey])
          },
          fireReady: function () {
            l.register('shopping-aids-ready', function () {})
          },
        }
      },
    )
    l.when('QTipsHandler', 'ready').execute(function (e) {
      e.init()
    })
  })()
  ;(function () {
    l.when('A', 'QTipsMetrics').register('OnDemandTooltipBuilder', function (m, g) {
      return function () {
        return {
          setIdentifier: function (a) {
            this.identifier = a
            return this
          },
          setElementStartOffset: function (a) {
            this.elementStartOffset = a
            return this
          },
          setElementDisplayType: function (a) {
            this.elementDisplayType = a
            return this
          },
          setElementArrowPosition: function (a) {
            this.elementArrowPosition = a
            return this
          },
          setElementValue: function (a) {
            this.elementValue = a
            return this
          },
          setElementAnchor: function (a) {
            this.elementAnchor = a
            return this
          },
          setSuccessResponse: function (a) {
            this.success = a
            return this
          },
          setFailureResponse: function (a) {
            this.failure = a
            return this
          },
          setDismissalType: function (a) {
            this.dismissalType = a
            return this
          },
          setElementCTA: function (a) {
            this.elementCTA = a
            return this
          },
          setElementDuration: function (a) {
            this.elementDuration = a
            return this
          },
          setElementBounceDuration: function (a) {
            this.elementBounceDuration = a
            return this
          },
          setVideoSource: function (a) {
            this.videoSource = a
            return this
          },
          setVideoWidth: function (a) {
            this.videoWidth = a
            return this
          },
          setNestedSA: function (a) {
            this.nestedSA = a
            return this
          },
          setScrollToAnchor: function (a) {
            this.scrollToAnchor = a
            return this
          },
          setAnchorScrollOffset: function (a) {
            this.anchorScrollOffset = a
            return this
          },
          setOffsetX: function (a) {
            this.offsetX = a
            return this
          },
          setOffsetY: function (a) {
            this.offsetY = a
            return this
          },
          setElementIndex: function (a) {
            this.elementIndex = a
            return this
          },
          setElementBackgroundColor: function (a) {
            this.elementBackgroundColor = a
            return this
          },
          setElementTextColor: function (a) {
            this.elementTextColor = a
            return this
          },
          setHighlighter: function (a) {
            this.highlighter = a
            return this
          },
          setElementBorderColor: function (a) {
            this.elementBorderColor = a
            return this
          },
          buildTooltip: function (a, h) {
            var b = {
              elementHeight: 80,
              elementWidth: 390,
              userState: 'ANY',
              elementType: 'TEXT',
              onDemand: !0,
              sequenceNum: 1,
              elementStartOffset: 0,
              elementDuration: 12e3,
              elementBounceDuration: 9e3,
              maxDisplayCount: 1,
              elementBackgroundColor: '#FFA724',
              elementTextColor: '#000000',
              elementIndex: '',
              elementBorderColor: '#FFA724',
            }
            b.identifier = this.identifier
            b.elementDisplayType = this.elementDisplayType
            b.elementArrowPosition = this.elementArrowPosition
            b.elementValue = this.elementValue
            b.elementAnchor = this.elementAnchor
            b.successResponse = this.success
            b.failureResponse = this.failure
            this.elementStartOffset && (b.elementStartOffset = this.elementStartOffset)
            this.dismissalType && (b.dismissalType = this.dismissalType)
            this.elementDuration && (b.elementDuration = this.elementDuration)
            this.elementBounceDuration && (b.elementBounceDuration = this.elementBounceDuration)
            this.videoSource && (b.videoSource = this.videoSource)
            this.videoWidth && (b.videoWidth = this.videoWidth)
            this.nestedSA && (b.nestedSAList = this.nestedSA)
            this.elementCTA && (b.elementCTA = this.elementCTA)
            this.scrollToAnchor && (b.scrollToAnchor = this.scrollToAnchor)
            this.anchorScrollOffset && (b.anchorScrollOffset = this.anchorScrollOffset)
            this.elementIndex && (b.elementIndex = this.elementIndex)
            this.offsetX && ((b.offsetX = this.offsetX), (b.xOffset = this.offsetX))
            this.offsetY && ((b.offsetY = this.offsetY), (b.yOffset = this.offsetY))
            this.elementBackgroundColor && (b.elementBackgroundColor = this.elementBackgroundColor)
            this.elementTextColor && (b.elementTextColor = this.elementTextColor)
            this.highlighter && (b.highlighter = this.highlighter)
            this.elementBorderColor && (b.elementBorderColor = this.elementBorderColor)
            try {
              if (b.identifier === e) throw 'Mandatory parameter missing: identifier'
              if (b.elementDisplayType === e)
                throw 'Mandatory parameter missing: elementDisplayType'
              if (b.elementArrowPosition === e)
                throw 'Mandatory parameter missing: elementArrowPosition'
              if (b.elementValue === e) throw 'Mandatory parameter missing: elementValue'
              if (b.elementAnchor === e) throw 'Mandatory parameter missing: elementAnchor'
              if (b.successResponse === e) throw 'Mandatory parameter missing: successResponse'
              if (b.failureResponse === e) throw 'Mandatory parameter missing: failureResponse'
              a && 'function' === typeof a && (g.incrementCounter('TooltipBuilder:success'), a(b))
            } catch (c) {
              h && 'function' === typeof h && (g.incrementCounter('TooltipBuilder:failure'), h(c))
            }
          },
        }
      }
    })
  })()
  ;(function () {
    l.when('A', 'QTipsMetrics').register('OnDemandBottomSheetBuilder', function (m, g) {
      return function () {
        return {
          setIdentifier: function (a) {
            this.identifier = a
            return this
          },
          setInvokingEventType: function (a) {
            this.invokingEventType = a
            return this
          },
          setInvokingEventElement: function (a) {
            this.invokingEventElement = a
            return this
          },
          setContentUrl: function (a) {
            this.contentUrl = a
            return this
          },
          setStaticContent: function (a) {
            this.staticContent = a
            return this
          },
          setCloseType: function (a) {
            this.closeType = a
            return this
          },
          setCloseMessage: function (a) {
            this.closeMessage = a
            return this
          },
          setSchedulingType: function (a) {
            this.schedulingType = a
            return this
          },
          setBottomSheetHeight: function (a) {
            this.bottomSheetHeight = a
            return this
          },
          setClientSideTargeting: function (a) {
            this.clientSideTargeting = a
            return this
          },
          setNestedSA: function (a) {
            this.nestedSA = a
            return this
          },
          setSuccessResponse: function (a) {
            this.success = a
            return this
          },
          setFailureResponse: function (a) {
            this.failure = a
            return this
          },
          buildBottomSheet: function (a, h) {
            var b = {
              onDemand: !0,
              sequenceNum: 1,
              maxDisplayCount: 1,
              impressionInterval: 24,
              elementDisplayType: 'HTML',
            }
            b.identifier = this.identifier
            b.successResponse = this.success
            b.failureResponse = this.failure
            this.invokingEventType && (b.invokingEventType = this.invokingEventType)
            this.invokingEventElement && (b.invokingEventElement = this.invokingEventElement)
            this.contentUrl && (b.contentUrl = this.contentUrl)
            this.contentUrl === e && this.staticContent && (b.staticContent = this.staticContent)
            this.closeType && (b.closeType = this.closeType)
            this.closeMessage && (b.closeMessage = this.closeMessage)
            this.schedulingType && (b.schedulingType = this.schedulingType)
            this.bottomSheetHeight && (b.bottomSheetHeight = this.bottomSheetHeight)
            this.clientSideTargeting && (b.clientSideTargetting = this.clientSideTargeting)
            this.nestedSA && (b.nestedSAList = this.nestedSA)
            try {
              if (b.identifier === e) throw 'Mandatory parameter missing: identifier'
              if (b.contentUrl === e && b.staticContent === e)
                throw 'Mandatory parameter missing: content(static/URL)'
              if (b.successResponse === e) throw 'Mandatory parameter missing: successResponse'
              if (b.failureResponse === e) throw 'Mandatory parameter missing: failureResponse'
              a &&
                'function' === typeof a &&
                (g.incrementCounter('BottomSheetBuilder:success'), a(b))
            } catch (c) {
              h &&
                'function' === typeof h &&
                (g.incrementCounter('BottomSheetBuilder:failure'), h(c))
            }
          },
        }
      }
    })
  })()
  ;(function () {
    l.when('A', 'QTipsMetrics').register('OnDemandDynamicSparkleBuilder', function (m, g) {
      return function () {
        return {
          setIdentifier: function (a) {
            this.identifier = a
            return this
          },
          setInvokingEventType: function (a) {
            this.invokingEventType = a
            return this
          },
          setInvokingEventElement: function (a) {
            this.invokingEventElement = a
            return this
          },
          setStateData: function (a) {
            this.stateData = a
            return this
          },
          setSuccessResponse: function (a) {
            this.success = a
            return this
          },
          setFailureResponse: function (a) {
            this.failure = a
            return this
          },
          buildSparkle: function (a, h) {
            var b = {
              onDemand: !0,
              sparkleType: 'dynamic',
              sequenceNum: 1,
              maxDisplayCount: 1,
              impressionInterval: 24,
              clickInterval: 24,
            }
            b.identifier = this.identifier
            b.stateData = this.stateData
            b.successResponse = this.success
            b.failureResponse = this.failure
            this.invokingEventType && (b.invokingEventType = this.invokingEventType)
            this.invokingEventElement && (b.invokingEventElement = this.invokingEventElement)
            try {
              if (b.identifier === e) throw 'Mandatory parameter missing: identifier'
              if (b.stateData === e) throw 'Mandatory parameter missing: stateData'
              try {
                JSON.parse(b.stateData)
              } catch (c) {
                throw 'Mandatory parameter missing: illegalStateData'
              }
              if (b.successResponse === e) throw 'Mandatory parameter missing: successResponse'
              if (b.failureResponse === e) throw 'Mandatory parameter missing: failureResponse'
              a &&
                'function' === typeof a &&
                (g.incrementCounter('DynamicSparkleBuilder:success'), a(b))
            } catch (c) {
              h &&
                'function' === typeof h &&
                (g.incrementCounter('DynamicSparkleBuilder:failure'), h(c))
            }
          },
        }
      }
    })
  })()
  ;(function () {
    l.when('A', 'QTipsMetrics').register('OnDemandStaticSparkleBuilder', function (m, g) {
      return function () {
        return {
          setIdentifier: function (a) {
            this.identifier = a
            return this
          },
          setInvokingEventType: function (a) {
            this.invokingEventType = a
            return this
          },
          setInvokingEventElement: function (a) {
            this.invokingEventElement = a
            return this
          },
          setDisplayText: function (a) {
            this.displayText = a
            return this
          },
          setDisplayIcon: function (a) {
            this.displayIcon = a
            return this
          },
          setTargetEndpoint: function (a) {
            this.targetEndpoint = a
            return this
          },
          setDescriptionText: function (a) {
            this.descriptionText = a
            return this
          },
          setTypeOfStaticSparkle: function (a) {
            this.typeOfStaticSparkle = a
            return this
          },
          setNestedSA: function (a) {
            this.nestedSA = a
            return this
          },
          setSuccessResponse: function (a) {
            this.success = a
            return this
          },
          setFailureResponse: function (a) {
            this.failure = a
            return this
          },
          buildSparkle: function (a, h) {
            var b = {
              onDemand: !0,
              sparkleType: 'static',
              sequenceNum: 1,
              maxDisplayCount: 1,
              impressionInterval: 24,
              clickInterval: 24,
            }
            b.identifier = this.identifier
            b.successResponse = this.success
            b.failureResponse = this.failure
            this.invokingEventType && (b.invokingEventType = this.invokingEventType)
            this.invokingEventElement && (b.invokingEventElement = this.invokingEventElement)
            this.displayText && (b.displayText = this.displayText)
            this.displayIcon && (b.displayIcon = this.displayIcon)
            this.targetEndpoint && (b.targetEndpoint = this.targetEndpoint)
            this.descriptionText && (b.descriptionText = this.descriptionText)
            this.schedulingType && (b.schedulingType = this.schedulingType)
            this.typeOfStaticSparkle && (b.typeOfStaticSparkle = this.typeOfStaticSparkle)
            this.nestedSA && (b.nestedSAList = this.nestedSA)
            try {
              if (b.identifier === e) throw 'Mandatory parameter missing: identifier'
              if (b.successResponse === e) throw 'Mandatory parameter missing: successResponse'
              if (b.failureResponse === e) throw 'Mandatory parameter missing: failureResponse'
              a &&
                'function' === typeof a &&
                (g.incrementCounter('StaticSparkleBuilder:success'), a(b))
            } catch (c) {
              h &&
                'function' === typeof h &&
                (g.incrementCounter('StaticSparkleBuilder:failure'), h(c))
            }
          },
        }
      }
    })
  })()
  ;(function () {
    l.when('A', 'QTipsMetrics').register('OnDemandHighlighterBuilder', function (m, g) {
      return function () {
        return {
          setIdentifier: function (a) {
            this.identifier = a
            return this
          },
          setHighlighterAnchor: function (a) {
            this.highlighterAnchor = a
            return this
          },
          setSuccessResponse: function (a) {
            this.success = a
            return this
          },
          setFailureResponse: function (a) {
            this.failure = a
            return this
          },
          setStartPositionX: function (a) {
            this.startPositionX = a
            return this
          },
          setPositionX: function (a) {
            this.positionX = a
            return this
          },
          setPositionY: function (a) {
            this.positionY = a
            return this
          },
          setElementDisplayType: function (a) {
            this.elementDisplayType = a
            return this
          },
          buildHighlighter: function (a, h) {
            var b = {
              onDemand: !0,
              sequenceNum: 1,
              elementStartOffset: 0,
              maxDisplayCount: 1,
              startPositionX: 'left',
              positionX: 0,
              positionY: 0,
              elementDisplayType: 'HTML',
            }
            b.identifier = this.identifier
            b.highlighterAnchor = this.highlighterAnchor
            b.successResponse = this.success
            b.failureResponse = this.failure
            this.startPositionX && (b.startPositionX = this.startPositionX)
            this.positionX && (b.positionX = this.positionX)
            this.positionY && (b.positionY = this.positionY)
            this.elementDisplayType && (b.elementDisplayType = this.elementDisplayType)
            try {
              if (b.identifier === e) throw 'Mandatory parameter missing: identifier'
              if (b.highlighterAnchor === e) throw 'Mandatory parameter missing: highlighterAnchor'
              if (b.successResponse === e) throw 'Mandatory parameter missing: successResponse'
              if (b.failureResponse === e) throw 'Mandatory parameter missing: failureResponse'
              a &&
                'function' === typeof a &&
                (g.incrementCounter('HighlighterBuilder:success'), a(b))
            } catch (c) {
              h &&
                'function' === typeof h &&
                (g.incrementCounter('HighlighterBuilder:failure'), h(c))
            }
          },
        }
      }
    })
  })()
  ;(function () {
    l.when(
      'A',
      'QTipsHandler',
      'QTips',
      'SA_BottomSheet',
      'ShoppingAidsSparkles',
      'SAFabAudiospot',
      'SAHotspot',
      'SAAudiospot',
      'QTipsConstants',
      'OnDemandTooltipBuilder',
      'OnDemandBottomSheetBuilder',
      'OnDemandDynamicSparkleBuilder',
      'OnDemandStaticSparkleBuilder',
      'OnDemandShoppingAidsAllowlist',
      'QTipLibrary',
      'QTipsMetrics',
      'SAHighlighter',
      'OnDemandHighlighterBuilder',
      'PageResolver',
    ).register(
      'OnDemandShoppingAids',
      function (e, g, a, h, b, c, l, u, p, f, q, z, D, x, n, d, y, A, B) {
        var m = this
        return {
          toolTipBuilder: f,
          bottomSheetBuilder: q,
          staticSparkleBuilder: D,
          dynamicSparkleBuilder: z,
          highlighterBuilder: A,
          invoke: function (f, c) {
            if (m.inThrottledState) f.failureResponse(p.errorCodes.API_THROTTLED)
            else {
              var r = c.split('/')
              c = r[0]
              r = r[1]
              var k = f.identifier,
                q
              ;(q = e.contains(x.allowListedIdentifiers, k)) ||
                (q =
                  e.contains(k, x.allowedPrefixIdentifier) &&
                  0 === k.indexOf(x.allowedPrefixIdentifier)
                    ? !0
                    : !1)
              if (q) {
                switch (c) {
                  case 'tooltip':
                    d.incrementCounter('OnDemandShoppingAids:tooltip:' + r)
                    d.incrementCounter('OnDemandShoppingAids:tooltip')
                    d.incrementCounter('OnDemandShoppingAids:' + r)
                    '1.0.0' === r
                      ? ((c = new n.Model()),
                        c.set(f),
                        d.incrementCounter('OnDemandShoppingAids:tooltip:invoked:' + r),
                        g.displayOnDemandToolTip(c))
                      : (f.failureResponse(p.errorCodes.INVALID_VERSION),
                        d.incrementCounter('OnDemandShoppingAids:tooltip:invalidVersion'))
                    break
                  case 'sparkle':
                    d.incrementCounter('OnDemandShoppingAids:sparkle:' + r)
                    d.incrementCounter('OnDemandShoppingAids:sparkle')
                    d.incrementCounter('OnDemandShoppingAids:' + r)
                    '1.0.0' === r
                      ? b.invokeOnDemandSparkle({
                          sparkles: f,
                          page: B.pageAdapter(),
                          platform: 'mweb',
                        })
                      : (f.failureResponse(p.errorCodes.INVALID_VERSION),
                        d.incrementCounter('OnDemandShoppingAids:sparkle:invalidVersion'))
                    break
                  case 'bottomsheet':
                    d.incrementCounter('OnDemandShoppingAids:bottomsheet:' + r)
                    d.incrementCounter('OnDemandShoppingAids:bottomsheet')
                    d.incrementCounter('OnDemandShoppingAids:' + r)
                    '1.0.0' === r
                      ? ((c = new n.Model()),
                        c.set(f),
                        h.collection.add(c),
                        a.view.clearRender(),
                        h.view.start(B.pageAdapter()))
                      : (f.failureResponse(p.errorCodes.INVALID_VERSION),
                        d.incrementCounter('OnDemandShoppingAids:bottomsheet:invalidVersion'))
                    break
                  case 'highlighter':
                    d.incrementCounter('OnDemandShoppingAids:highlighter:' + r)
                    d.incrementCounter('OnDemandShoppingAids:highlighter')
                    d.incrementCounter('OnDemandShoppingAids:' + r)
                    '1.0.0' === r
                      ? ((c = new n.Model()),
                        c.set(f),
                        d.incrementCounter('OnDemandShoppingAids:highlighter:invoked:' + r),
                        y.view.displayOnDemandHighlighter(c))
                      : (f.failureResponse(p.errorCodes.INVALID_VERSION),
                        d.incrementCounter('OnDemandShoppingAids:highlighter:invalidVersion'))
                    break
                  default:
                    d.incrementCounter('OnDemandShoppingAids:invalidShoppingAidType'),
                      f.failureResponse(p.errorCodes.INVALID_SHOPPING_AID_TYPE)
                }
                d.incrementCounter(m.sourceName + 'presentInAllowlist')
              } else
                f.failureResponse(p.errorCodes.AID_NOT_ALLOWLISTED),
                  d.incrementCounter(m.sourceName + 'rejectedFromAllowlist'),
                  d.incrementCounter(m.sourceName + 'rejectedFromAllowlist:' + f.identifier)
            }
          },
          dismiss: function (f, e, g, k) {
            d.incrementCounter('OnDemandShoppingAids:dismiss:' + f)
            d.incrementCounter('OnDemandShoppingAids:dismiss:' + e)
            switch (e) {
              case 'tool_tip':
                a.view.dismissWithId(f, g, k)
                break
              case 'bottomsheet':
                h.view.dismissWithId(f, g, k)
                break
              case 'sparkles':
                b.dismissWithId(f, g, k)
                break
              case 'hotspot':
                l.view.dismissWithId(f, g, k)
                break
              case 'audiospot':
                u.view.dismissWithId(f, g, k)
                break
              case 'fabaudiospot':
                c.dismissWithId(f, g, k)
                break
              case 'highlighter':
                y.view.dismissWithId(f, g, k)
                break
              default:
                k && 'function' === typeof k && k(p.errorCodes.INVALID_SHOPPING_AID_TYPE),
                  d.incrementCounter('OnDemandShoppingAids:dismiss:invalidShoppingAidType')
            }
          },
        }
      },
    )
  })()
  ;(function () {
    l.when('A').register('OnDemandShoppingAidsAllowlist', function (e) {
      return {
        allowedPrefixIdentifier: 'nested_sa',
        allowListedIdentifiers: [
          'devTestID',
          'ShoppingAidsInternal',
          's-search-pinch-to-zoom-hotspot-video-tooltip-text-EU',
          'GameXActionTray',
        ],
      }
    })
  })()
  ;(function () {
    l.when('A', 'OnDemandShoppingAids', 'QTipsMetrics').register(
      'NestedSARenderer',
      function (e, g, a) {
        function h(f, g) {
          var e = f.type,
            h = function (a) {
              p.result = a
            },
            q = function () {
              a.incrementCounter('NestedSARenderer:' + g + e + '_error')
            }
          a.incrementCounter('NestedSARenderer:' + g + e)
          'bottom_sheet' === e
            ? b(f, h, q)
            : 'sparkle' === e
              ? c(f, h, q)
              : 'tool_tip' === e
                ? l(f, h, q)
                : 'highlighter' === e
                  ? m(f, h, q)
                  : a.incrementCounter('NestedSARenderer:unknown_shopping_aid')
        }
        function b(b, c, e) {
          var f = b.identifier,
            h = b.closeType,
            q = b.staticContent,
            d = b.contentUrl,
            l = b.bottomSheetHeight
          a.incrementCounter('NestedSARenderer:bottom_sheet_builder:invoked')
          g.bottomSheetBuilder()
            .setIdentifier(f)
            .setStaticContent(q)
            .setContentUrl(d)
            .setCloseType(h)
            .setBottomSheetHeight(l)
            .setNestedSA(b.nestedSAList)
            .setSuccessResponse(function () {})
            .setFailureResponse(function () {})
            .buildBottomSheet(c, e)
          g.invoke(p.result, 'bottomsheet/1.0.0')
          a.incrementCounter('NestedSARenderer:on_demand_bottom_sheet:invoked')
        }
        function c(b, c, e) {
          var f = b.identifier,
            h = b.displayText,
            q = b.displayIcon,
            d = b.targetEndpoint,
            l = b.descriptionText,
            m = b.typeOfStaticSparkle
          a.incrementCounter('NestedSARenderer:sparkle_builder:invoked')
          g.staticSparkleBuilder()
            .setIdentifier(f)
            .setDisplayText(h)
            .setDisplayIcon(q)
            .setDescriptionText(l)
            .setTypeOfStaticSparkle(m)
            .setNestedSA(b.nestedSAList)
            .setTargetEndpoint(d)
            .setSuccessResponse(function () {})
            .setFailureResponse(function () {})
            .buildSparkle(c, e)
          g.invoke(p.result, 'sparkle/1.0.0')
          a.incrementCounter('NestedSARenderer:on_demand_sparkle:invoked')
        }
        function l(b, c, e) {
          a.incrementCounter('NestedSARenderer:tooltip_builder:invoked')
          g.toolTipBuilder()
            .setIdentifier(b.identifier)
            .setElementAnchor(b.elementAnchor)
            .setElementDisplayType(b.elementDisplayType)
            .setElementArrowPosition(b.elementArrowPosition)
            .setElementValue(b.elementValue)
            .setElementStartOffset(b.elementStartOffset)
            .setElementDuration(b.elementDuration)
            .setElementBounceDuration(b.elementBounceDuration)
            .setElementCTA(b.elementCTA)
            .setDismissalType(b.dismissalType)
            .setNestedSA(b.nestedSAList)
            .setScrollToAnchor(b.scrollToAnchor)
            .setAnchorScrollOffset(b.anchorScrollOffset)
            .setVideoSource(b.videoSource)
            .setVideoWidth(b.videoWidth)
            .setSuccessResponse(function () {})
            .setFailureResponse(function () {})
            .setOffsetX(b.offsetX)
            .setOffsetY(b.offsetY)
            .setElementIndex(b.elementIndex)
            .setElementBackgroundColor(b.elementBackgroundColor)
            .setElementTextColor(b.elementTextColor)
            .setHighlighter(b.highlighter)
            .setElementBorderColor(b.elementBorderColor)
            .buildTooltip(c, e)
          g.invoke(p.result, 'tooltip/1.0.0')
          a.incrementCounter('NestedSARenderer:on_demand_tooltip:invoked')
        }
        function m(b, c, e) {
          a.incrementCounter('NestedSARenderer:highlighter_builder:invoked')
          g.highlighterBuilder()
            .setIdentifier(b.identifier)
            .setHighlighterAnchor(b.highlighterAnchor)
            .setStartPositionX(b.startPositionX)
            .setPositionX(b.positionX)
            .setPositionY(b.positionY)
            .setElementDisplayType(b.elementDisplayType)
            .setSuccessResponse(function () {})
            .setFailureResponse(function () {})
            .buildHighlighter(c, e)
          g.invoke(p.result, 'highlighter/1.0.0')
          a.incrementCounter('NestedSARenderer:on_demand_highlighter:invoked')
        }
        var p = this
        document.addEventListener('SA:InvokeOnDemandSA', function (b) {
          a.incrementCounter('NestedSARenderer:shopping_aid_data_event')
          if ((b = b.detail) && 0 < b.length) {
            var c = b[0]
            c.nestedSAList = JSON.stringify(b.splice(1))
            h(c, 'nestedSA_invoke:')
          } else
            b
              ? ((b = JSON.parse(b.toJson())), h(b, 'supplementarySA_invoke:'))
              : a.incrementCounter(
                  'NestedSARenderer:shopping_aid_data_event:undefined_data_received',
                )
        })
        document.addEventListener('SA:OnDemandDismissSA', function (b) {
          try {
            var c = b.detail
            g.dismiss(c.identifier, c.type, c.successCallback, c.errorCallback)
          } catch (z) {
            a.incrementCounter('NestedSARenderer:sa:dismiss:event:invalid_data_received')
          }
        })
      },
    )
  })()
})
/* ******** */
