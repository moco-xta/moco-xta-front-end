/*
 Copyright (c) 2013 Amazon.com, Inc.  All rights reserved.

 @see "http://z-ecx.images-amazon.com/images/G/01/vap/Airy_Video_Player_-_OSS_Attribution_2014.08.20._V344367318_.docx"
*/
;(function (t, q, x) {
  function I(a) {
    return {
      addClassNames: ['airy-' + a],
      mouseEvents: {
        mouseover: { addClassNames: ['airy-' + a + '-hover'] },
        mouseout: { removeClassNames: ['airy-' + a + '-hover'] },
      },
    }
  }
  function Rb() {
    var a = c.h.kb('div', { position: 'relative', height: '100%', width: '100%' })
    return c.h.Bg(a, 'airy-renderer-container')
  }
  function Sb(a, b) {
    var e = c.h.kb('div', {
      backgroundColor: b,
      position: 'relative',
      width: '100%',
      height: '100%',
      fontSize: '0px',
      overflow: 'hidden',
      outline: 'none',
    })
    e.tabIndex = 0
    return c.h.Bg(e, [
      'airy',
      c.h.jD() ? 'airy-svg' : 'airy-png',
      a.ea.KF() ? 'vmin-supported' : 'vmin-unsupported',
    ])
  }
  function Tb(a) {
    var b = a.parentId,
      e = a.parentElement,
      f = a.desiredMode,
      d = a.forceMode,
      s = a.shouldStartHidden,
      g = a.canViewContent,
      h = a.contentId,
      k = a.vendorCode,
      m = a.contentMinAge,
      n = a.contentTitle,
      r = a.customerId,
      t = a.isShowFirstFrameWhenReadyEnabled,
      u = a.desiredVideoQuality,
      q
    q = (q = a.externalMetricsReportingParams) || {}
    a: {
      if ((q = q.aolLoggerReporter)) {
        var p = q.reportingParams
        if (p && q.baseUrl) {
          q = {
            dB: q.baseUrl,
            OI: p.autoStart,
            YI: p.domainSettingKey,
            eJ: p.fullUrl,
            AJ: p.memberId,
            NJ: p.playerPageLocation,
            OJ: p.protocolVersion,
            eK: p.syndicatePartnerId,
            hK: p.uniqueUserId,
            kK: p.urlHashCode,
            lK: p.urlId,
            oK: p.videoCategoryId,
            pK: p.videoId,
          }
          break a
        }
      }
      q = void 0
    }
    q = c.compact({ LI: q })
    var p = a.isLiveStream,
      w = wa(a.mediaInfo),
      x = wa(a.mediaSourceInfo || a.streamingUrls),
      v = a.mediaFallbackParams,
      v = v || {},
      v =
        c.compact({
          rt: v.maxFallbackLoopAttempts,
          bB: v.backoffMultiplierMillis,
          aB: v.backoffMaxDelayMillis,
        }) || {},
      y = a.skinUrl,
      z = a.ignoreBundledSkin,
      A = a.flashParams,
      B = a.flashVars,
      C = a.swfUrl,
      D = a.htmlVideoAttributes,
      E = a.isInstallFlashDialogDisabled,
      F = a.installFlashPrompt,
      G = a.installFlashButtonText,
      H = a.isVideoUnsupportedDialogDisabled,
      I = a.playbackErrorPrompt,
      K = a.videoUnsupportedPrompt,
      L = a.liveFallbackMaxAttemptExceededPrompt,
      M = a.bindings,
      N = a.cuePoints,
      O = a.disabledViewIds,
      P = a.initViewStateIds,
      Q = a.autoplayCutOffTimeSeconds,
      R = a.isAutoplayEnabled,
      S = a.shouldPlayHintStartHidden,
      T = a.shouldPreventSeekBeyondBuffer,
      U = a.sisImpressionToken,
      V = a.displayAdsForesterParams,
      W = a.displayAdsMetricEventNameSuffix,
      X = fb(a.videoAds),
      Y = gb(a.comScore),
      Z = a.environmentStage,
      $ = a.regionCode,
      aa = a.isForesterTrackingDisabled,
      ba = a.foresterPublishingInterval,
      ca = a.foresterProgramGroupName,
      da = a.foresterMetadataParams,
      ea = hb(a.ageGate),
      ga = ib(a.slateImages),
      J
    J = (J = a.experiments) || {}
    J = {
      Uh: J.checkBufferingIntervalMillis,
      Ol: J.enableHlsForAndroid,
      qJ: J.isBatchCallToForesterEnabled,
      bu: J.showLoadingSpinnerDelayMillis,
      cK: J.supportServerSideStitching,
      ju: J.supportChromelessPlayback,
    }
    var fa = a.chromeless,
      fa = fa || {},
      b = {
        Cc: b,
        parentElement: e,
        ws: f,
        Gs: d,
        pF: s,
        Sc: g,
        Fa: h,
        Od: k,
        Sb: m,
        vc: n,
        UI: r,
        iD: t,
        $h: u,
        fi: q,
        fa: p,
        xm: w,
        ng: x,
        st: v,
        du: y,
        QC: z,
        ji: A,
        Ae: B,
        Si: C,
        Cd: D,
        dt: E,
        WC: F,
        VC: G,
        oD: H,
        Bt: I,
        vn: K,
        uD: L,
        tl: M,
        MB: N,
        XB: O,
        TC: P,
        $A: Q,
        gg: R,
        nF: S,
        $t: T,
        wF: U,
        ZB: V,
        $B: W,
        mb: X,
        Wh: Y,
        di: Z,
        Ei: $,
        Ie: aa,
        tC: ba,
        Xl: ca,
        Be: da,
        vd: ea,
        Md: ga,
        backgroundColor: a.backgroundColor,
        DF: a.startWithFocus,
        Rb: {
          lg: fa.isSupportEnabled,
          Cs: fa.endedAnimationStartMillisFromEnd,
          Bs: fa.endedAnimationDurationMillis,
          eg: fa.ignoreRendererWidth,
        },
        Qa: J,
        bC: a.enableMultipleVideoTags,
        xi: a.mediaRequiresUserAction,
        Kb: a.supportsInlinePlayback,
        un: a.usePseudoFullscreen,
        RA: a.allowNativeFullscreenInAndroidWebView,
        CD: a.midstreamPlaybackTimeoutDurationMillis,
        BF: a.startPlaybackTimeoutDurationMillis,
      }
    void 0 !== a.pageAsin && (b.At = a.pageAsin)
    return b
  }
  function Ub(a, b) {
    b = b || {}
    return { bK: b.slotId, dJ: b.forceSize, pJ: b.heightPx, rK: b.widthPx }
  }
  function Vb(a) {
    a = a || []
    return c.map(a, Ub)
  }
  function fb(a) {
    a = a || {}
    var b =
      c.compact({
        II: a.adSkipText,
        GI: a.adEndText,
        JI: a.adText,
        HI: a.adPromptText,
        KI: a.adsRequestTimeoutMillis,
        Zr: a.adsRequestUrl,
        tl: a.bindings,
        WI: Vb(a.displayAdSlots),
        $I: a.enableAdsRequestWithNoCredentials,
        wJ: a.keyValuePairs,
        xJ: a.learnMoreText,
        DJ: a.minCreativeDurationSecondsForSkipOffset,
        FJ: a.networkId,
        Om: a.persistControlsDuringAdUx,
        profile: a.profile,
        TJ: a.sectionId,
        WJ: a.serverUrl,
        $J: a.skipOffset,
        jK: a.unwrapAdRequestTimeoutMillis,
        iK: a.unwrapAdRequestCountLimit,
      }) || {}
    b.at = a.isEngineEnabled
    return b
  }
  function ib(a) {
    a = a || {}
    return c.compact({ Qm: a.preloadSlate, FE: a.postMediaSlate }) || {}
  }
  function Wb(a, b) {
    return b ? (c.Ka(b) ? b : { Cb: b.channelId, jb: b.mimeType, url: b.url }) : b
  }
  function jb(a) {
    if (c.Ka(a)) return a
    if (c.isArray(a)) return c.map(a, Wb)
  }
  function wa(a) {
    return a ? (c.Le(a) ? c.map(a, jb) : jb(a)) : a
  }
  function gb(a) {
    a = a || {}
    return { dB: a.baseUrl, SJ: a.reportingParams }
  }
  function hb(a) {
    a = a || {}
    return (
      c.compact({
        Dl: a.computeAgeCallback || a.callback,
        us: a.deniedPrompt,
        vt: a.monthNames,
        prompt: a.prompt,
        scope: a.scope,
        gu: a.submitText,
      }) || {}
    )
  }
  function kb(a, b) {
    a = a || {}
    var e = !!(c.g.l.Ze() || c.g.l.dd() || c.g.l.ub()),
      e = a.ws || (e ? 'html' : 'hybrid')
    this.sz = this.Jx(b, a.Qa ? a.Qa.Ol : !1)
    this.ut = [e]
    a.Gs || this.ut.push('html' === e ? 'hybrid' : 'html')
  }
  function lb(a) {
    this.ik = a
    this.yA = new mb(a)
  }
  function mb(a) {
    this.ik = a
    this.gA = new nb(a)
  }
  function nb(a) {
    this.ik = a
  }
  function ob(a, b) {
    this.xA = a
    this.ky = b
    this.az = c.h.uB(b)
  }
  function pb(a) {
    var b = (this.M = a.M || c.h.kb('div'))
    b.unselectable = 'on'
    b.oncontextmenu = function () {
      return !1
    }
    b.tabIndex = -1
    this.id = a.id
    this.Cc = a.Cc
    'true' === a.lC && new qb(b)
    var b = a.SB,
      e = a.ZF
    if (e) {
      if (e && !b)
        throw 'State infos were provided, but no default state was specified for View: ' + this.id
      this.Fl = b
      this.Kh = e
      this.Sl = a.Sl
      this.Es = this.ok(S.$l, this.Rx)
      this.gc = { Ne: this.ok(S.BC, this.eq), Qe: this.ok(S.EC, this.eq) }
      this.Ep = null
      this.Wc = this.isEnabled = this.Sa = !0
      this.nk = null
    }
  }
  function qb(a) {
    c.g.l.sb() && 'none' !== a.style.touchAction && (this.md(a), (this.Dh = null))
  }
  function S(a, b, c, f) {
    this.El = a.join(' ')
    this.style = b
    this.Ds = c || {}
    this.gc = f || {}
  }
  function rb(a, b) {
    this.yb = b || [g.Nb, g.f, g.aa]
    this.Cf = !1
    this.re = a
    this.name = 'Component'
    this.xb = new G(this.name)
    var e = this.Ms() || []
    c.m(
      e,
      function (a, b) {
        this.re.bind(b, this.Hh, this, this.yb)
      },
      this,
    )
    var f = this.Ns() || []
    c.m(
      f,
      function (a, b) {
        this.re.bind(b, this.Hh, this, g.Nb)
      },
      this,
    )
    this.re.bind(d.Za, this.Hh, this, g.Nb)
    this.re.bind(d.Rd, this.Hh, this, g.Nb)
    this.Ty = c.ou(e.concat(f))
    this.Uy = {}
    e = this.Rs() || []
    c.m(
      e,
      function (a, b) {
        this.xb.bind(b, this.oA, this)
      },
      this,
    )
    this.gr = c.ou(e)
    this.Tk = {}
    this.name = ''
    e = B.call(arguments, 2)
    this.p.apply(this, e)
  }
  function sb(a) {
    this.Bb = a
  }
  function T() {}
  function xa(a, b) {
    this.b = a
    c.F(this, b)
    a.I.H('rendererinit', { k: this.k })
    this.p(a)
  }
  function tb(a, b) {
    this.Da = a
    this.yb = b
  }
  function ub(a) {
    this.$h = a.$h || 'sd'
  }
  function vb(a) {
    this.lq = a.bC
    this.er = a.xi
    this.Gr = a.Kb
    this.Ry = a.Cd
  }
  function ya(a, b) {
    this.b = a
    c.F(this, b)
    this.p(a)
  }
  function wb() {
    this.Dr = {}
  }
  function xb(a) {
    this.xb = a
    this.Iz = {}
    this.Eq = {}
    this.oq = {}
    this.Lq = {}
  }
  function G(a, b) {
    this.jh = {}
    this.fh = []
    this.iq = a || 'UNNAMED'
    this.p.apply(this, [b])
  }
  function v(a, b) {
    return c.map(b, function (b, f) {
      return c.ic(f) ? v(a, f) : a + f
    })
  }
  var N,
    za,
    Aa,
    Ba,
    U,
    Ca,
    Da,
    Ea,
    ga,
    Fa,
    Ga,
    Ha,
    ha,
    Ia,
    Ja,
    ia,
    Ka,
    La,
    Ma,
    Na,
    Oa,
    Pa,
    V,
    Qa,
    W,
    X,
    ja,
    Ra,
    ka,
    Sa,
    Ta,
    Y,
    Ua,
    Va,
    Wa,
    L,
    O,
    Z,
    $,
    la,
    ma,
    na,
    aa,
    oa,
    ba,
    pa,
    qa,
    K,
    A = t.Airy || {},
    yb = Array.prototype,
    B = yb.slice,
    Xb = yb.push,
    Yb = Object.prototype.toString
  A.Mr = A.Mr || 0
  var c = {
      Xr: function (a, b, c) {
        ;(a[b] || (a[b] = [])).push(c)
      },
      cs: function (a, b) {
        return c.wi(a, function (a) {
          return a.concat(b)
        })
      },
      compact: function (a) {
        if (a) {
          var b = c.isArray(a),
            e = b ? [] : {}
          c.m(a, function (a, c) {
            c && (b ? e.push(c) : (e[a] = c))
          })
          return e
        }
      },
      v: function () {
        return new Date().valueOf()
      },
      ts: function (a, b, e) {
        c.ic(a) &&
          c.m(a, function (a, d) {
            c.ic(d) ? c.ts(d, b, e) : d && b.call(e || this, a, d)
          })
      },
      PB: function (a, b, e) {
        if (c.ic(a))
          return c.map(a, function (a, d) {
            c.ic(d) ? (d = c.PB(d, b, e)) : d && (d = b.call(e || this, a, d))
            return d
          })
      },
      m: function (a, b, e) {
        if (a) {
          var f = 0,
            d = a.length
          if (c.isArray(a) || c.eD(a)) for (; f < d; f++) b.call(e || a[f], f, a[f])
          else for (f in a) c.Eb(a, f) && b.call(e || a[f], f, a[f])
          return a
        }
      },
      error: function (a) {
        throw Error(a)
      },
      every: function (a, b, e) {
        var f = !1
        c.m(
          a,
          function (a, c) {
            f = f || !b.call(e, a, c)
          },
          e,
        )
        return !f
      },
      cJ: function (a) {
        return c.uq(a)
      },
      uq: function (a, b) {
        var e = {}
        if (!c.Le(a)) return (e[b] = a), e
        c.m(a, function (a, b) {
          c.F(e, c.uq(b, a))
        })
        return e
      },
      filter: function (a, b, e) {
        e = e || this
        var f = [],
          d = 0
        c.m(a, function (a, c) {
          b.call(e, a, c) && (f[d++] = c)
        })
        return f
      },
      find: function (a, b, c) {
        for (var f = 0; f < a.length; f++) {
          var d = a[f]
          if (b.call(c || this, f, d)) return d
        }
        return null
      },
      Xf: function (a) {
        return a && a.length ? a[0] : void 0
      },
      De: function () {
        return A.Mr++
      },
      Eb: function (a, b) {
        if (null == a) return !1
        try {
          return a.hasOwnProperty(b)
        } catch (c) {
          return !1
        }
      },
      j: function (a, b, e) {
        function f() {
          this.constructor = d
        }
        var d =
          b && c.Eb(b, 'constructor')
            ? b.constructor
            : function () {
                return a.apply(this, arguments)
              }
        c.F(d, a, e || {})
        f.prototype = a.prototype
        d.prototype = new f()
        b && c.F(d.prototype, b)
        d.prototype.t = a.prototype
        return d
      },
      isArray:
        Array.isArray ||
        function (a) {
          return c.sc(a, 'Array')
        },
      tJ: function (a) {
        return c.sc(a, 'Document') || c.sc(a, 'XMLDocument')
      },
      jg: function (a) {
        a = a || {}
        return 1 === a.nodeType
      },
      mm: function (a) {
        return c.sc(a, 'Function')
      },
      dD: function (a) {
        return c.Ke(a) && a != +a
      },
      eD: function (a) {
        return c.sc(a, 'NodeList')
      },
      Ke: function (a) {
        return c.sc(a, 'Number')
      },
      ic: function (a) {
        return a === Object(a)
      },
      fD: function (a) {
        return 0 < c.keys(a).length ? !1 : !0
      },
      Le: function (a) {
        return c.sc(a, 'Object')
      },
      vJ: function (a) {
        return c.sc(a, 'RegExp')
      },
      Ka: function (a) {
        return c.sc(a, 'String')
      },
      sc: function (a, b) {
        return Yb.call(a) === '[object ' + b + ']'
      },
      join: function (a, b, e) {
        e = e || {}
        var f = e.sD || this.Ai,
          d = e.Xi || this.Ai,
          s = e.vi || '',
          g = c.isArray(a),
          h = []
        c.m(
          a,
          function (a, b) {
            var c = g ? '' : f(a) + s,
              c = c + d(b)
            Xb.call(h, c)
          },
          this,
        )
        return h.join(b || '')
      },
      keys: function (a) {
        var b = []
        c.m(a, function (a) {
          b.push(a)
        })
        return b
      },
      Ia: function (a) {
        return null == a ? [] : c.isArray(a) ? a : [a]
      },
      map: function (a, b, e) {
        if (a) {
          var f = c.isArray(a) ? [] : {}
          c.m(a, function (c, d) {
            f[c] = b.call(e || a[c], c, d)
          })
          return f
        }
      },
      wi: function (a, b, e) {
        if (!a) return {}
        var f = {}
        c.m(a, function (a, c) {
          var d = b.call(e, a, c)
          d && (f[d] = c)
        })
        return f
      },
      Gd: function (a, b) {
        var c
        return function () {
          return null != c ? c : (c = a.call(b))
        }
      },
      BJ: function (a, b) {
        if (!a || !b) return a
        c.m(b, this.Lx(a))
        return a
      },
      Lx: function (a) {
        return function (b, c) {
          a[b] = (a[b] || []).concat(c)
        }
      },
      matches: function (a, b) {
        return c.every(b || {}, this.$y(a || {}), this)
      },
      $y: function (a) {
        return function (b, e) {
          return c.Eb(a, b) && a[b] === e
        }
      },
      F: function (a) {
        if (!a) return null
        c.m(B.call(arguments, 1), function (b, c) {
          if (c)
            for (var f in c)
              try {
                a[f] = c[f]
              } catch (d) {}
        })
        return a
      },
      J: function () {},
      Ai: function (a) {
        return a
      },
      JJ: function (a, b) {
        return function () {
          return !a.apply(b || this, arguments)
        }
      },
      KJ: function (a) {
        return c.Ka(a) ? 'true' === a : !!a
      },
      reduce: function (a, b, c) {
        if (a && !(2 > a.length)) {
          for (var f = 1, d = a[0]; f < a.length; f++) d = b.call(c, d, a[f])
          return d
        }
      },
      Kd: function (a) {
        if (!c.isArray(a)) return c.F({}, a)
        var b = []
        c.m(a, function (a, c) {
          b.push(c)
        })
        return b
      },
      some: function (a, b, e) {
        return null != c.find(a, b, e)
      },
      iu: function (a) {
        var b = 0
        c.m(a, function (a, f) {
          c.Ke(f) && (b += f)
        })
        return b
      },
      ou: function (a) {
        a = a || []
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = 1
        return b
      },
      unshift: function (a, b) {
        var c = B.call(arguments, 1)
        return c.length ? c.concat(a) : a
      },
      La: function (a) {
        var b = []
        c.m(a, function (a, c) {
          b.push(c)
        })
        return b
      },
      ob: function (a, b, e, f) {
        var d = B.call(arguments, 3)
        return function () {
          var f = d.concat(B.call(arguments))
          return b.apply(e || this, c.unshift(f, a))
        }
      },
    },
    n = {
      Ku: 'audioContainer',
      Lu: 'audioElements',
      Qu: 'autoplayHint',
      Ud: 'autoplayHintStage',
      Mu: 'audioScrubber',
      Nu: 'audioScrubberBar',
      Ou: 'audioToggle',
      Pu: 'audioTrackBar',
      oc: 'controlsContainer',
      SG: 'contentTitle',
      $u: 'currentTimeLabel',
      cv: 'durationLabel',
      Dv: 'liveLabel',
      Fv: 'loadingSpinner',
      Gv: 'loadingSpinnerStage',
      Xv: 'playToggle',
      Ug: 'playToggleHint',
      gd: 'playToggleHintStage',
      dw: 'progressBar',
      jw: 'replayHint',
      jd: 'replayHintStage',
      Bw: 'trackBar',
      rp: 'trackBarContainer',
      fp: 'screenSizeToggle',
      nw: 'scrubber',
      ow: 'scrubberBar',
      QH: 'stage',
      Hw: 'videoQualityToggle',
      zu: 'ageGate',
      Bu: 'ageGatePrompt',
      Au: 'ageGateInputs',
      An: 'ageGateMonth',
      zn: 'ageGateDay',
      Bn: 'ageGateYear',
      Cu: 'ageGateSubmit',
      uv: 'installFlashDialog',
      vv: 'installFlashPrompt',
      tv: 'installFlashButton',
      Jw: 'videoUnsupportedDialog',
      Kw: 'videoUnsupportedPrompt',
    },
    g = { aa: 'ads', Nb: 'default', f: 'primary' },
    Zb = {
      '3g2': 'video/mp4',
      '3gp': 'video/mp4',
      flv: 'video/flv',
      m3u8: 'application/x-mpegURL',
      m4a: 'video/mp4',
      m4p: 'video/mp4',
      m4r: 'video/mp4',
      m4v: 'video/mp4',
      mp4: 'video/mp4',
      mov: 'video/quicktime',
      ogg: 'video/ogg',
      ogv: 'video/ogg',
      webm: 'video/webm',
    },
    P = {
      gb: function (a) {
        if (a) return new T().gb(a)
      },
      nm: function (a) {
        a = new m.ld().gb(a) || 'none'
        return -1 < ['application/x-mpegURL', 'vnd.apple.mpegURL', 'video/MP2T'].indexOf(a)
      },
    },
    z = {
      qb: 'click',
      jj: 'mousedown',
      Sg: 'mousemove',
      zj: 'mouseout',
      So: 'mouseover',
      tp: 'mouseup',
    },
    Q = {}
  Q[z.jj] = 'touchstart'
  Q[z.Sg] = 'touchmove'
  Q[z.zj] = 'touchleave'
  Q[z.So] = 'touchstart'
  Q[z.tp] = 'touchend'
  var Xa = {
      'application/x-mpegURL': { wo: 0.02, xo: 6, Nn: 0.5, On: 6, jo: 0.5 },
      'video/mp4': { wo: 0.02, xo: 3, Nn: 1.5, On: 3, jo: 0.5 },
    },
    r,
    C,
    k,
    D,
    H,
    p,
    h,
    d,
    Ya,
    Za = { Lc: 'start', Zd: 'impression', hv: 'end' }
  r = {
    TH: 'startadsplayback',
    of: 'stopadsplayback',
    Cj: 'prepareforadsux',
    rc: 'showadsux',
    ac: 'hideadsux',
    ep: 'retrieveadsresponse',
    kw: 'retrievingadsresponse',
    FH: 'retrieveadsresponsefailed',
    mG: 'adsresponsereceived',
    kG: 'adsresponseparsed',
    lG: 'adsresponseparsefailed',
    Uv: 'noadsrequesturl',
    yj: 'noprerollsfound',
    xH: 'prerollsfound',
    uw: 'supportedadpodsfound',
    XH: 'streamstitchingurlfound',
    Tv: 'nonsecureadsrequesturl',
    Sv: 'nonsecureads',
    tH: 'noncompliantmediaurl',
    yn: v('adpod.', Za),
    pG: v('adinstance.', Za),
    TG: v('creative.', Za),
  }
  C = v('agegate.', { Cn: 'allowsubmit', Wn: 'compute', af: 'denied', Ng: 'dismiss', ge: 'show' })
  k = {
    Lg: 'bitrateswitch',
    Yb: 'bufferstart',
    nc: 'bufferend',
    Pn: 'buffersizeupdate',
    pb: 'canplay',
    Vu: 'canplaythrough',
    Wd: 'durationchange',
    Zb: 'ended',
    za: 'error',
    fd: 'loadedmetadata',
    pj: 'loadeddata',
    cb: 'playheadupdate',
    hd: 'progress',
    RH: 'stalled',
    Aw: 'timeupdate',
    DI: 'waiting',
  }
  D = v('dialog.', {
    eo: 'dismissed',
    $d: 'showinstallflash',
    ia: 'showvideounsupported',
    Vj: 'showvideounsupportedintent',
  })
  H = {
    qj: 'loadingfragment',
    Go: 'loadedfragment',
    rj: 'loadinglevel',
    Ho: 'loadedlevel',
    sj: 'loadingmanifest',
    Io: 'loadedmanifest',
  }
  p = {
    $e: 'decodeerror',
    Pg: 'maxfallbackattemptederror',
    wj: 'midstreamplaybacktimeouterror',
    ff: 'networkerror',
    Qj: 'startplaybacktimeouterror',
    bh: 'undefinederror',
    ia: 'videounsupportederror',
  }
  h = {
    rb: {
      Jc: 'engagement.',
      f: v('primary.', {
        gj: 'completeCount',
        lj: 'firstQuartileCount',
        to: 'fullScreenCount',
        vj: 'midpointCount',
        Po: 'muteCount',
        Ro: 'normalScreenCount',
        To: 'pauseCount',
        dp: 'resumeCount',
        Oj: 'skipBackwardCount',
        Pj: 'skipForwardCount',
        sw: 'startCount',
        Rj: 'thirdQuartileCount',
        sp: 'unmuteCount',
      }),
    },
    za: {
      Jc: 'error.',
      f: v('primary.', {
        tj: 'response.loadCount',
        mj: 'response.interpretCount',
        Ew: 'undefinedCount',
        Iw: 'videoUnsupportedCount',
      }),
      kd: v('skin.', { tj: 'response.loadCount', mj: 'response.interpretCount' }),
    },
    A: {
      Jc: 'qos.',
      ad: 'android4NetworkIdleOccurred',
      INIT: v('init.', {
        fv: 'embedToInitStartDuration',
        ev: 'embedToInitCompleteDuration',
        gv: 'embedToSkinLoadedDuration',
      }),
      f: v('primary.', {
        Fn: 'averageBitrate',
        In: 'bitrateDecreaseCount',
        Jn: v('bitrateDroppedFramesPerSecond.', { Fc: 'avg', df: 'max', Mc: 'stdDev' }),
        Kn: 'bitrateIncreaseCount',
        Xe: 'bitrateSwitchDuration',
        dj: 'bitrateSwitchDurationPercentage',
        Mn: v('bitrateTotalFramesPerSecond.', { Fc: 'avg', df: 'max', ef: 'min', Mc: 'stdDev' }),
        Ln: v('bitrateRenderedFramesPerSecond.', { Fc: 'avg', ef: 'min', Mc: 'stdDev' }),
        Zu: 'createRendererDuration',
        fo: v('droppedFramesPerSecond.', { Fc: 'avg', df: 'max', Mc: 'stdDev' }),
        mo: 'fallbackAttemptCount',
        no: 'fallbackAttemptInstanceCount',
        oo: 'fallbackAttemptOccurred',
        po: 'maxFallbackAttemptsOccurred',
        ov: 'fragment.requestInstanceDuration',
        Cv: 'level.requestInstanceDuration',
        Jv: 'loadVideoToLoadedMetadataDuration',
        Iv: 'loadVideoToLoadedDataDuration',
        Hv: 'loadVideoToCanPlayDuration',
        Kv: 'manifest.requestInstanceDuration',
        Mv: 'mediaDuration',
        Jo: 'midstreamPlaybackTimeoutCount',
        Ko: 'midstreamPlaybackTimeoutOccurred',
        $v: 'playToLoadedMetadataDuration',
        Zv: 'playToLoadedDataDuration',
        Yv: 'playToCanPlayDuration',
        Vg: 'playToFirstFrameDuration',
        Xg: 'rebufferCount',
        Fj: 'rebufferDuration',
        Gj: 'rebufferInstanceDuration',
        Yg: 'rebufferOccurred',
        cp: v('renderedFramesPerSecond.', { Fc: 'avg', ef: 'min', Mc: 'stdDev' }),
        hp: 'seekDuration',
        pw: 'seekInstanceDuration',
        lp: 'startPlaybackTimeoutCount',
        mp: 'startPlaybackTimeoutOccurred',
        op: 'titleSessionCount',
        qp: v('totalFramesPerSecond.', { Fc: 'avg', df: 'max', ef: 'min', Mc: 'stdDev' }),
        Wj: 'viewedDuration',
        Lw: 'viewedPercentage',
      }),
      Vg: 'playToFirstFrameDuration',
      kd: v('skin.', { Ev: 'loadedToUiReadyDuration', Kj: 'requestDuration' }),
      pp: 'titleSessionStartCount',
      ro: 'flashUnresponsiveCount',
    },
    up: v('video', {
      qb: 'Click',
      Vd: 'Complete',
      Xn: 'CreativeView',
      ko: 'ExitFullscreen',
      Xd: 'FirstQuartile',
      so: 'Fullscreen',
      Zd: 'Impression',
      de: 'Midpoint',
      ee: 'Mute',
      R: 'Pause',
      ua: 'Replay',
      fe: 'Resume',
      mf: 'SkipBackward',
      nf: 'SkipForward',
      Lc: 'Start',
      ie: 'ThirdQuartile',
      le: 'Unmute',
    }),
    Uj: 'urlposted',
  }
  d = {
    $c: 'activerendererchanged',
    ad: 'android4networkidleoccurred',
    Fu: 'animation',
    Zi: 'apiinteraction',
    Rd: 'attach',
    En: 'attached',
    Sd: 'attemptfallbackmedia',
    Jg: 'audiooff',
    Kg: 'audioon',
    Td: 'autoplay',
    $i: 'autoplayclear',
    We: 'beforetitlesessionended',
    mc: 'beganplaying',
    ej: 'changeactiverenderer',
    Gc: 'changevideoquality',
    Ca: 'changevolume',
    Rn: 'changedisplayadsmetriceventnamesuffix',
    CLOSED: 'closed',
    Za: 'detach',
    bf: 'detached',
    co: 'detachfromdom',
    bd: 'endtitlesession',
    qo: 'flashtimeout',
    $a: 'fullscreen',
    vo: 'hideloadingspinner',
    cf: 'hideplayer',
    Yd: 'hiderenderer',
    Fo: 'keyboardinteraction',
    O: 'loadvideo',
    bb: 'normalscreen',
    Aj: 'pagehidden',
    Bj: 'pageshown',
    Tg: 'pageUnload',
    R: 'pause',
    Ua: 'paused',
    X: 'play',
    oa: 'playing',
    Xo: 'playerhidden',
    Yo: 'playershown',
    Wg: 'publishmetrics',
    ew: 'publishedmetrics',
    Dj: 'putrenderer',
    ap: 'rebufferdetectionsuppressed',
    bp: 'rebufferdetectionunsuppressed',
    hf: 'rebufferstartdetected',
    gf: 'rebufferenddetected',
    qc: 'reloadvideo',
    Ij: 'renderershown',
    Jj: 'renderertypechanged',
    ua: 'replay',
    $g: 'screenchange',
    va: 'seek',
    qw: 'seekutterlycomplete',
    qa: 'seeked',
    gp: 'seeking',
    Ma: 'shouldstartplayback',
    rw: 'shouldresumeplayback',
    Mj: 'showerrorux',
    ip: 'showloadingspinner',
    Nj: 'showplayer',
    lf: 'showrenderer',
    ah: 'stageclick',
    np: 'starttitlesession',
    vb: 'titlesessionended',
    je: 'titlesessionstarted',
    fb: 'userinteraction',
    dh: 'videourlselected',
    ij: 'destroyrenderer',
  }
  Ya = v('amazon', {
    nc: 'bufferend',
    Yb: 'bufferstart',
    Lg: 'bitrateswitch',
    Go: 'loadedfragment',
    qj: 'loadingfragment',
    Ho: 'loadedlevel',
    rj: 'loadinglevel',
    Io: 'loadedmanifest',
    sj: 'loadingmanifest',
    Aw: 'timeupdate',
  })
  c.F(n, {
    oG: 'adEnd',
    rG: 'adPromptLabel',
    qG: 'adPromptContainer',
    sG: 'adSkip',
    iG: 'adsAudioToggle',
    jG: 'adsControlsContainer',
    nG: 'adsScreenSizeToggle',
    MG: 'clickThroughStage',
    Bv: 'learnMore',
    bI: 'timeRemainingLabel',
  })
  r = r || {}
  c.F(r, {
    LG: 'clickthrough',
    RG: 'companionadsend',
    UG: 'creativeskipped',
    $G: 'endcreative',
    dH: 'hidecompanionadslots',
    LH: 'showcompanionadslots',
    KH: 'showadskip',
    kp: 'skipcreative',
    fb: 'userinteraction',
  })
  r.uj = {
    rb: { Jc: 'engagement', aa: v('ad.', { Bv: 'learnMoreCount', kp: 'skipCreativeCount' }) },
    za: {
      Jc: 'error',
      aa: v('ad.', {
        PG: 'code',
        ZH: 'suspectedAdBlockCount',
        CH: 'response.loadCount',
        AH: 'response.interpretCount',
        bh: 'undefinedCount',
      }),
    },
    A: {
      Jc: 'qos',
      aa: v('ad.', {
        BH: 'responseLinearCreativesCount',
        Kj: 'requestDuration',
        UH: 'startDelayDuration',
        Xg: 'rebufferCount',
        Fj: 'rebufferDuration',
        Gj: 'rebufferInstanceDuration',
        DH: 'resumeContentDelayCount',
        EH: 'resumeContentDelayDuration',
        aw: 'playToPrerollStartDuration',
        uH: 'nonProtocolCompliantAdsRequestUrlCount',
        vH: 'nonProtocolCompliantMediaUrlCount',
        vp: v('vpaid.', {
          tG: 'adStartToFirstUserClickThruDuration',
          wG: 'adStartToUserCloseDuration',
          uG: 'adStartToFirstUserEngagementDuration',
          vG: 'adStartToFirstUserInteractionDuration',
          fH: 'initToLoadedDuration',
          nH: 'loadResourceAttemptCount',
          oH: 'loadResourceDuration',
          VH: 'startToStartedDuration',
          nI: 'userClickThruCount',
          pI: 'userInteractionCount',
        }),
        Mw: v('wrapper.', { Kj: 'requestDuration', fI: 'unwrapDuration' }),
      }),
    },
    rI: v('vast.', {
      gG: 'acceptinvitation',
      hG: 'acceptinvitationlinear',
      qb: 'click',
      Yu: 'close',
      OG: 'closelinear',
      QG: 'collapse',
      Vd: 'complete',
      Xn: 'creativeview',
      za: 'error',
      aH: 'expand',
      ko: 'exitfullscreen',
      Xd: 'firstquartile',
      so: 'fullscreen',
      Zd: 'impression',
      de: 'midpoint',
      ee: 'mute',
      R: 'pause',
      hd: 'progress',
      fe: 'resume',
      HH: 'rewind',
      NH: 'skip',
      Lc: 'start',
      ie: 'thirdquartile',
      le: 'unmute',
    }),
    yI: v('vmap.', { KG: 'breakstart', JG: 'breakend', za: 'error' }),
  }
  r.vp = v('Ad', {
    NG: 'ClickThru',
    Wd: 'DurationChange',
    za: 'Error',
    bH: 'ExpandedChange',
    Zd: 'Impression',
    gH: 'Interaction',
    lH: 'LinearChange',
    mH: 'Loaded',
    pH: 'Log',
    Ua: 'Paused',
    oa: 'Playing',
    MH: 'SizeChange',
    OH: 'SkippableStateChange',
    PH: 'Skipped',
    SH: 'Started',
    WH: 'Stopped',
    mI: 'UserAcceptInvitation',
    oI: 'UserClose',
    qI: 'UserMinimize',
    sI: 'VideoComplete',
    tI: 'VideoFirstQuartile',
    uI: 'VideoMidpoint',
    vI: 'VideoStart',
    wI: 'VideoThirdQuartile',
    zI: 'VolumeChange',
  })
  r.vp.cH = { Yu: 'close', INIT: 'init', GH: 'retrievevpaidjs', Lc: 'start' }
  r.Mw = {
    hI: 'unwraprequested',
    eH: 'unwrap',
    kI: 'unwrapresponsereceived',
    jI: 'unwrapresponseparsed',
    iI: 'unwrapresponsefailed',
    eI: 'unwrapcomplete',
    gI: 'unwrapfailed',
    lI: 'unwrapskipped',
  }
  var zb = /opacity=([\d\.]+)/
  c.h = {
    rl: function (a, b, e) {
      var f = c.wi(e, function (a, b) {
          return b
        }),
        d = []
      c.m((a || []).concat(b || []), function (a, b) {
        f[b] || d.push(b)
      })
      return d
    },
    Rf: function (a, b) {
      var e = a.className || ''
      if (c.some(e.split(' '), c.$o.fu(b))) return a
      a.className = e + ' ' + b
      return a
    },
    Ja: function (a, b) {
      a && b && c.F(a.style, b)
    },
    fc: function (a, b) {
      b && a && b.appendChild(a)
    },
    bind: function (a, b, c, f) {
      this.mq(this.md, a, b, c, f)
    },
    md: function (a, b, c, f) {
      b && (a.addEventListener ? a.addEventListener(b, c, f || !1) : a.attachEvent('on' + b, c))
    },
    fs: function (a, b, e) {
      if ((b = c.join(b, ' ', { vi: '\x3d', Xi: c.wa.xn })))
        return ['\x3c' + a + ' ', b, '\x3e', e || '', '\x3c/' + a + '\x3e'].join('')
    },
    uB: function (a) {
      return c.some(c.La(z), function (b, c) {
        return c === a
      })
    },
    Hc: 'transform',
    ao: 10,
    Cw: 4,
    Dw: 5,
    ye: function (a, b, e) {
      function f(a, b) {
        d -= a.offsetLeft - a.scrollLeft
        s -= a.offsetTop - a.scrollTop
        b && ((d -= b.x), (s -= b.y))
      }
      var d = a.clientX,
        s = a.clientY
      a = !1
      for (var g = [c.h.Hc, '-webkit-' + c.h.Hc, '-ms-' + c.h.Hc, '-moz' + c.h.Hc]; b && b != e; ) {
        var h = c.h.li(b, g)
        ;(h = h[c.h.Hc] || h['-webkit-' + c.h.Hc] || h['-ms-' + c.h.Hc] || h['-moz' + c.h.Hc]) &&
        'none' !== h
          ? ((h = h.split(',')),
            f(b, { x: parseInt(h[c.h.Cw], c.h.ao) || 0, y: parseInt(h[c.h.Dw], c.h.ao) || 0 }))
          : f(b)
        if ('fixed' === c.h.li(b, 'position')) {
          a = !0
          break
        }
        b = b.offsetParent
      }
      b = q.documentElement
      a || e || !b || f(b)
      return { x: d, y: s }
    },
    jm: function (a, b) {
      for (; a && a != b; ) a = this.getParent(a)
      return !!a
    },
    sJ: function (a, b) {
      return this.getParent(a) === b
    },
    et: function () {
      return t.self !== t.top
    },
    Sa: function (a) {
      return 'hidden' !== a.style.visibility && 'none' !== a.style.display
    },
    Vl: function (a) {
      return q.getElementById(a)
    },
    bJ: function (a) {
      var b = {}
      c.m(
        a,
        function (a, c) {
          b[c] = this.Vl(c)
        },
        this,
      )
      return b
    },
    Wl: function (a, b) {
      b = b || q.body
      for (var e = b.childNodes, f = e.length, d = 0; d < f; d++) {
        var s = e[d]
        if (c.wa.Ui(s.nodeName) === a) return s
      }
    },
    li: function (a, b) {
      if (a && b) {
        var e = t.getComputedStyle ? t.getComputedStyle(a, null) : a.currentStyle
        return c.h.wq(e || {}, b)
      }
    },
    xc: function (a, b) {
      if (a && b) return c.h.wq(a.style, b)
    },
    wq: function (a, b) {
      if (c.Ka(b)) return a[b]
      var e = {}
      c.m(b, function (b, c) {
        e[c] = a[c]
      })
      return e
    },
    zC: function (a) {
      a = (a || q).getElementsByTagName('head')
      return 0 < a.length ? a[0] : null
    },
    Ps: function (a, b) {
      if (c.g.l.Do() && b && c.h.et()) {
        var e = a.getBoundingClientRect().width
        if (a.clientWidth > a.offsetWidth && a.clientWidth > e) return x.round(100 * e)
      }
      return a.offsetWidth
    },
    CC: function (a) {
      var b = c.h.Qs()
      a = c.h.xc(a, b)
      return c.h.Jy[b](a)
    },
    Jy: {
      filter: function (a) {
        return a ? ((a = a.match(zb)) && 1 < a.length ? a[1] / 100 : 0) : 0
      },
      opacity: c.Ai,
    },
    Qs: c.Gd(function () {
      return c.g.l.ce() ? 'filter' : 'opacity'
    }),
    getParent: function (a) {
      return a.parentNode
    },
    ag: function (a) {
      return this.Cr('1px', a)
    },
    bg: function (a) {
      return this.Cr('100%', a)
    },
    Cr: function (a, b) {
      var e = { height: a }
      if (b && c.g.l.ub()) return e
      e.width = a
      return e
    },
    lJ: function (a) {
      var b = c.h.getParent(a)
      if (c.jg(b))
        return c.filter(b.childNodes, function (b, c) {
          return c != a
        })
    },
    UC: function (a, b) {
      var e = c.h.getParent(b)
      c.jg(e) && (e.lastChild == b ? e.appendChild(a) : e.insertBefore(a, b.nextSibling))
    },
    jD: c.Gd(function () {
      return (
        !!q.createElementNS &&
        !!q.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
      )
    }),
    tt: function (a, b) {
      var e = c.h.Qs(),
        f = c.bc.bound(b, 0, 1)
      a[e] = c.h.rz[e](f, a[e])
      return f
    },
    rz: {
      filter: function (a, b) {
        var e = 'opacity\x3d' + 100 * a
        if (b && c.wa.contains(b, 'opacity\x3d')) return b.replace(zb, e)
        e = 'alpha(' + e + ')'
        return b ? b + ', ' + e : e
      },
      opacity: c.Ai,
    },
    zm: function (a) {
      return c.g.l.Aa() ? Q[a] || a : a
    },
    GJ: function (a) {
      a = c.h.wt(a)
      a.src = 'about:blank'
      return a
    },
    kb: function (a, b) {
      var e = q.createElement(a)
      c.h.Ja(e, b)
      return e
    },
    HJ: function (a, b, e) {
      a = a.contentWindow.document.createElement(b)
      c.h.Ja(a, e)
      return a
    },
    wt: function (a) {
      a = c.h.kb('iframe', a || {})
      a.scroll = 'no'
      a.scrolling = 'no'
      a.allowtransparency = !0
      a.frameBorder = 0
      return a
    },
    Rm: function (a) {
      a = a || t.event
      a.preventDefault && a.preventDefault()
    },
    removeChild: function (a, b) {
      a.removeChild(b)
    },
    QJ: function (a) {
      for (; a.hasChildNodes(); ) c.h.removeChild(a, a.lastChild)
    },
    Fi: function (a, b) {
      var e = c.h.rl((a.className || '').split(' '), [], [b])
      a.className = e.join(' ')
      return a
    },
    Jd: function (a) {
      if (a) {
        var b = a.parentNode
        c.jg(b) && c.h.removeChild(b, a)
      }
    },
    Bg: function (a, b) {
      a.className = c.isArray(b) ? b.join(' ') : b
      return a
    },
    Ni: function (a, b) {
      c.h.Ja(a, { visibility: b })
    },
    JF: c.Gd(function () {
      var a = c.h.kb('div').style
      return void 0 !== a.animationName
        ? !0
        : c.some(['Webkit', 'Moz', 'O', 'ms', 'Khtml'], function (b, c) {
            return void 0 !== a[c + 'AnimationName']
          })
    }),
    Eg: function (a) {
      a = a || t.event
      a.cancelBubble = !0
      a.stopPropagation && a.stopPropagation()
    },
    la: function (a, b, c, f) {
      this.mq(this.Pf, a, b, c, f)
    },
    Pf: function (a, b, c, f) {
      b &&
        (a.removeEventListener ? a.removeEventListener(b, c, f || !1) : a.detachEvent('on' + b, c))
    },
    mq: function (a, b, e, f, d) {
      b &&
        ((e = c.isArray(e) ? e : e.split(' ')),
        c.m(
          e,
          function (c, e) {
            a.call(this, b, e, f, d)
          },
          this,
        ))
    },
  }
  c.Ba = {}
  c.Ba.cj = function (a) {
    if (c.ed.cm()) {
      var b = t.P
      b && b.when && (this.mk = b.when.apply(b, arguments))
    }
  }
  c.Ba.cj.prototype = {
    execute: function (a, b) {
      if (this.mk) {
        var e = this.mk.execute
        if (e) {
          var f = c.C.Q(a, b)
          e.call(this.mk, f)
        }
      }
    },
  }
  c.Ba.ab = function () {
    c.Ba.ab.Ws || (this.zE(), this.mg && this.OE())
    c.F(this, c.Ba.ab.Nm)
  }
  c.Ba.ab.prototype = {
    Lv: 'amzn-app-ctxt',
    yD: { appName: 'an', appVersion: 'av', xD: 'xv', ug: 'os', Bi: 'ov' },
    Pv: '1.9',
    JA: function (a) {
      new c.Ba.cj('mash').execute(function (b) {
        c.m(a, function (a, c) {
          b.addEventListener(a, c)
        })
      })
    },
    rB: function () {
      return this.mg ? this.em : !0
    },
    OE: function () {
      var a = c.C.Q(this.tr, this, !0),
        b = c.C.Q(this.tr, this, !1)
      if ('Android' !== this.ug) return a(), this
      if (!this.ft || !c.ed.cm()) return b(), this
      new c.Ba.cj('mash').execute(function (c) {
        ;(c = c.video) ? c.canPlayHTML5Video({ successCallback: a, failCallback: b }) : b()
      })
      return this
    },
    tr: function (a) {
      this.em = c.Ba.ab.Nm.em = a
    },
    zE: function () {
      c.Ba.ab.Ws = !0
      var a = c.da.QE(this.Lv) || '',
        b = a.indexOf('{'),
        e = -1 !== b
      if (e) {
        var a = $a.parse(a.substring(b)),
          b = this.yD,
          f = a[b.xD],
          d = 0 <= c.ta.Bl(f, this.Pv)
        c.F(c.Ba.ab.Nm, { ft: d, mg: e, pt: f, ug: a[b.ug], Bi: a[b.Bi] })
      }
    },
  }
  c.Ba.ab.Ws = !1
  c.Ba.ab.Nm = { pt: '', mg: !1, ft: !1, em: !0, ug: '', Bi: '' }
  c.W = {
    eb: {
      gi: function (a) {
        a.Ta = 1
        return this.hi(a)
      },
      jC: function (a) {
        a.Ta = 1
        return this.Ul(a)
      },
      kC: function (a) {
        a.Ta = 0
        return this.hi(a)
      },
      Tl: function (a) {
        a.Ta = 0
        return this.Ul(a)
      },
      Ul: function (a) {
        a.Cl = function () {
          c.h.Ni(a.M, 'hidden')
        }
        return this.hi(a)
      },
      hi: function (a) {
        return new c.W.uo(a)
      },
    },
    Bo: { ge: 'show', qv: 'hide' },
  }
  c.W.EF = {
    fadeIn: c.W.eb.gi,
    fadeOut: c.W.eb.kC,
    fadeTo: c.W.eb.hi,
    fadeInAndHide: c.W.eb.jC,
    fadeOutAndHide: c.W.eb.Tl,
    fadeToAndHide: c.W.eb.Ul,
  }
  c.W.wC = function (a, b) {
    return ('fadeTo' === a && 0 < b.Ta) || 'fadeIn' === a ? c.W.Bo.ge : c.W.Bo.qv
  }
  c.W.aj = function (a) {
    this.M = a.M
    this.Dt = a.Qi
    this.Ta = a.Ta
    this.Vb = null
    this.Cl = a.Cl || c.J
    this.Dg = a.Dg || c.J
    this.scope = a.scope
    this.pm = a.pm
    this.KD = a.ai / 60
    this.om = !0
    this.hc = !1
    this.Pl = a.Pl
    this.Ml = a.Ml
    this.Pb = c.C.Q(this.Pb, this)
  }
  c.W.aj.prototype = {
    Iu: 'started',
    Ju: 'stopped',
    Hu: 'finished',
    Ql: function (a) {
      return a && a.Ta === this.Ta && a.M === this.M
    },
    ns: function (a) {
      this.Qi = a
      this.eu = x.abs(this.Ta - a) / this.KD
    },
    Pb: function () {
      !1 === this.hc && this.Dg.call(this.scope, this.Iu)
      this.hc = !0
      if (this.Er()) return this
      if (this.pm) return (this.Vb = this.Qi), this.Er(), this
      this.hc = !1
      !0 === this.Ml && this.xs()
      this.Cl.call(this.scope)
      this.Dg.call(this.scope, this.Hu)
      return this
    },
    xs: c.J,
    ys: c.J,
    ZC: function () {
      return this.cg() == this.Ta
    },
    cg: c.J,
    Dc: function () {
      !0 === this.Pl && this.ys()
      return this
    },
    Er: function () {
      var a = this.Vb
      if (this.om && a < this.Ta) this.Ki(a + this.eu)
      else if (!this.om && a > this.Ta) this.Ki(a - this.eu)
      else return !1
      this.Xz()
      return !0
    },
    Xz: function () {
      this.jA = setTimeout(this.Pb, 60)
    },
    stop: function () {
      !0 === this.hc && this.Dg.call(this.scope, this.Ju)
      this.hc = !1
      clearTimeout(this.jA)
      return this
    },
    Ki: c.J,
  }
  c.W.uo = c.j(c.W.aj, {
    gw: /alpha\((enabled=\w+,)?/i,
    Dc: function () {
      c.W.uo.prototype.t.Dc.apply(this, arguments)
      null != this.Dt && this.vr(this.Dt)
      var a = this.cg()
      this.Vb = a = '' === a ? 1 : Number(a)
      this.om = a <= this.Ta
      c.h.xc(this.M, 'visibility')
      c.h.Ni(this.M, 'visible')
      this.ns(a)
      return this
    },
    xs: function () {
      this.Np(!1)
    },
    ys: function () {
      this.Np(!0)
    },
    Np: function (a) {
      if (c.g.l.ce()) {
        var b = c.h.xc(this.M, 'filter')
        b && c.h.Ja(this.M, { filter: b.replace(this.gw, 'alpha(enabled\x3d' + a + ',') })
      }
    },
    cg: function () {
      return c.h.CC(this.M)
    },
    Ki: function (a) {
      this.Vb = this.vr(a)
    },
    vr: function (a) {
      return c.h.tt(this.M.style, a)
    },
  })
  c.W.Lj = c.j(c.W.aj, {
    Yn: 'airy-animation-rotate',
    Ch: !1,
    al: ['mozTransform', 'msTransform', 'oTransform', 'webkitTransform', 'transform'],
    YC: function () {
      this.Ch = c.h.JF()
      return (!this.Ch && c.every(this.al, this.ez)) || c.g.l.nj()
    },
    ez: function (a, b) {
      return void 0 === c.h.xc(q.body, b)
    },
    Dc: function () {
      var a = this.cg()
      this.Vb = a
      this.ns(a)
      return this
    },
    Pb: function () {
      if (!this.Ch) return c.W.Lj.prototype.t.Pb.apply(this, arguments), this
      this.hc = !0
      c.h.Rf(this.M, this.Yn)
    },
    stop: function () {
      if (!this.Ch) return c.W.Lj.prototype.t.stop.apply(this, arguments), this
      this.hc = !1
      c.h.Fi(this.M, this.Yn)
    },
    cg: function () {
      return (
        c.find(
          this.al,
          function (a, b) {
            return this.xC(b)
          },
          this,
        ) || 0
      )
    },
    xC: function (a) {
      return (a = a.match(/\([\-\w]+\)/i)) && a.length ? a[0] : 0
    },
    Ki: function (a) {
      this.Vb = a
      var b = 'rotate(' + a + 'deg)'
      c.m(
        this.al,
        function (a, c) {
          this.M.style[c] = b
        },
        this,
      )
    },
  })
  c.Ic = {
    TB: function (a) {
      if (c.g.l.Og()) {
        a.style.display = 'none'
        var b = function () {
          4 === a.readyState ? c.Ic.Vx(a) : setTimeout(b, 10)
        }
        setTimeout(b, 10)
      } else c.h.Jd(a)
    },
    Vx: function (a) {
      a &&
        (c.m(a, function (b, e) {
          c.mm(e) && (a[b] = null)
        }),
        c.h.Jd(a))
    },
    bi: function (a, b) {
      var e = b.url,
        f = b.id
      c.g.l.Og() && (e = c.da.Vr(e))
      var d = this.xq(),
        f = this.Mx(f, e, d)
      b.style && (f.style = c.join(b.style, '; ', { vi: ':' }))
      var s = b.yE || {},
        g = c.da.Gg(b.Ae || {})
      g && (s.flashvars = g)
      d && (s.movie = e)
      e = this.Sx(s)
      e = c.h.fs('object', f, e)
      a.innerHTML = e + a.innerHTML
      e = c.h.Wl('object', a)
      c.g.l.vw() || c.h.Bg(e, 'ap_never_hide')
      return e
    },
    Mx: function (a, b, e) {
      a = { id: a }
      e
        ? (a.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000')
        : c.F(a, { type: 'application/x-shockwave-flash', data: b })
      return a
    },
    Sx: function (a) {
      var b = []
      c.m(a, function (a, f) {
        b.push(c.h.fs('param', { name: a, value: f }))
      })
      return b.join('')
    },
    ct: function () {
      return '10' > (this.Ls() || 0)
    },
    Ls: function () {
      var a = this.By()
      if (!a) return null
      a = a.match(/[0-9.]+/)
      return 0 < a.length ? parseFloat(a[0]) : null
    },
    By: function () {
      var a = this.xq()
      return a ? a.GetVariable('$version') : this.Cy()
    },
    xq: function () {
      var a = t.ActiveXObject
      if (!a) return null
      try {
        return new a('ShockwaveFlash.ShockwaveFlash')
      } catch (b) {
        return null
      }
    },
    Cy: function () {
      var a = t.navigator || {},
        b = (a.mimeTypes || {})['application/x-shockwave-flash']
      if (!b || b.enabledPlugin) return ((a.plugins || {})['Shockwave Flash'] || {}).description
    },
  }
  c.C = {
    ze: function (a, b, e) {
      return function () {
        var f = B.call(arguments)
        return c.C.ka(a, b, e, f)
      }
    },
    ka: function (a, b, c, f) {
      f = f || []
      return setTimeout(function () {
        a.apply(c, f)
      }, b || 0)
    },
    Q: function (a, b, e) {
      var f = B.call(arguments, 2) || []
      return function () {
        var e = f.concat(B.call(arguments))
        return (a || c.J).apply(b, e)
      }
    },
  }
  c.ed = {
    cm: function () {
      var a = t.P
      return a && (a.hasOwnProperty('register') || a.AUI_BUILD_DATE)
    },
    Kt: function (a, b) {
      var e = t.P,
        f = (b.isRegisteredWithAui = b.isRegisteredWithAui || {})
      !0 === f && ((f = b.isRegisteredWithAui = {}), (f.Airy = !0))
      c.ed.cm() &&
        !f[a] &&
        (e.register(a, function () {
          return b
        }),
        (f[a] = !0))
    },
    Jt: function (a) {
      var b = t.amznJQ
      b && c.Eb(b, 'declareAvailable') && b.declareAvailable(a)
    },
    PJ: function (a, b) {
      c.Eb(t, 'muve') &&
        c.Eb(t, 'define') &&
        c.mm(t.define) &&
        (0, t.define)(a, function () {
          return {
            hJ: function () {
              return b
            },
          }
        })
    },
  }
  c.da = {
    Vr: function (a, b) {
      if (a) {
        var e = '',
          f = a.indexOf('?')
        ;-1 === f ? (e = '?') : f !== a.length - 1 && (e = '\x26')
        return a + e + 'cacheBuster' + (b || '') + '\x3d' + c.ta.random()
      }
    },
    AB: function (a) {
      if (t.DOMParser) return new DOMParser().parseFromString(a, 'text/xml')
      var b = new ActiveXObject('Microsoft.XMLDOM')
      b.async = !1
      b.loadXML(a)
      return b.documentElement
    },
    ss: function (a) {
      return decodeURIComponent(a)
    },
    ci: function (a) {
      return encodeURIComponent(a)
    },
    getExtension: function (a) {
      return a ? ((a = a.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)) && a.length ? a[1] : null) : null
    },
    AC: function (a) {
      return a ? /(?:[^:]+:\/\/)?([^\/]+)/.exec(a)[1] : null
    },
    ni: function () {
      var a = location.protocol
      return /http/.test(a) ? a : 'https:'
    },
    LC: function (a) {
      return c.g.l.nj() &&
        0 === a.indexOf(t.location.protocol) &&
        -1 === c.da.AC(a).indexOf(t.location.host)
        ? new XDomainRequest()
        : new XMLHttpRequest()
    },
    nD: function (a) {
      return 'http:' === c.da.ni() || ('https:' === c.da.ni() && 'https:' === a.split('/')[0])
    },
    MI: function (a) {
      return c.every(a, function (a, e) {
        return c.da.nD(e)
      })
    },
    qD: function (a) {
      return t.XDomainRequest && a instanceof XDomainRequest
    },
    Ct: function (a, b) {
      return c.da.GE(c.da.Vr(a, b))
    },
    GE: function (a) {
      if (c.da.kx(a)) return (new Image().src = a)
    },
    kx: function (a) {
      return a && 0 === a.indexOf('http')
    },
    QE: function (a) {
      a += '\x3d'
      var b
      try {
        b = q.cookie.split(';')
      } catch (e) {
        return null
      }
      for (var f = 0; f < b.length; f++) {
        for (var d = b[f]; ' ' === d.charAt(0); ) d = d.substring(1, d.length)
        if (0 === d.indexOf(a)) return c.da.ss(d.substring(a.length, d.length))
      }
      return null
    },
    VJ: function (a, b) {
      b = b || {}
      b.error = b.error || c.J
      b.Fe = null != b.Fe ? b.Fe : !0
      b.withCredentials = null != b.withCredentials ? b.withCredentials : !0
      if (this.Xy()) {
        var e = this.LC(a),
          f = c.da.qD(e)
        try {
          e.open(b.type || 'GET', a, b.Fe)
        } catch (d) {
          c.C.ka(b.error, 0, b.scope)
          return
        }
        c.m(b.headers, function (a, b) {
          e.setRequestHeader(b[0], b[1])
        })
        if (b.withCredentials)
          try {
            e.withCredentials = !0
          } catch (s) {
            c.C.ka(b.error, 0, b.scope)
            return
          }
        b.Fe && (e.timeout = b.fK || 0)
        e.onload = function () {
          if (!f && 200 !== e.status) b.error.call(b.scope, e.statusText, e)
          else if (b.hu)
            try {
              f && c.da.AB(e.responseText)
            } catch (a) {
              c.C.ka(b.error, 0, b.scope)
            }
        }
        e.onprogress = c.J
        e.onerror = function () {
          b.error && b.error.call(b.scope, e.statusText, e)
        }
        e.ontimeout = function () {
          b.timeout && b.timeout.call(b.scope, 4 === e.readyState ? e.statusText : '', e)
        }
        try {
          e.send(null)
        } catch (g) {
          e.onerror()
        }
        return e
      }
      c.C.ka(b.error, 0, b.scope)
    },
    Xy: function () {
      return (t.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()) || t.XDomainRequest
    },
    Gg: function (a) {
      return c.join(a, '\x26', {
        vi: '\x3d',
        Xi: function (a) {
          a = c.ic(a) ? c.Eo.ci(a) : a
          return c.da.ci(a)
        },
      })
    },
  }
  var $a = t.JSON || {}
  c.Eo = {
    ci:
      $a.stringify ||
      function (a) {
        if (null != a) return c.isArray(a) ? this.sx(a) : this.oz(a)
      },
    OB:
      $a.parse ||
      function (a) {
        if (
          a &&
          0 === a.indexOf('{') &&
          a.lastIndexOf('}') === a.length - 1 &&
          ((a = a.match(/[\w\"\.\s]+\:[\w\"\.\s]+/gi)), 0 !== a.length)
        ) {
          var b = {}
          c.m(a, function (a, f) {
            var d = f.match(/[\w\"\.]+/gi)
            if (2 === d.length) {
              var s = c.wa.Mt(d[1], '"')
              b[c.wa.Mt(d[0], '"')] = s === d[1] ? parseFloat(s) : s
            }
          })
          return b
        }
      },
    sx: function (a) {
      return '[' + c.join(a, ',', { Xi: c.C.Q(this.Qr, this) }) + ']'
    },
    oz: function (a) {
      return '{' + c.join(a, ',', { vi: ':', sD: c.wa.xn, Xi: c.C.Q(this.Qr, this) }) + '}'
    },
    Qr: function (a) {
      return c.ic(a) ? this.ci(a) : c.Ka(a) ? c.wa.xn(a) : a
    },
  }
  c.bc = {
    bound: function (a, b, c) {
      return x.max(x.min(a, c), b)
    },
  }
  c.ta = {
    Bl: function (a, b, e) {
      if (c.Ka(a) && c.Ka(b)) {
        e = e || '.'
        a = a.split(e)
        b = b.split(e)
        for (e = 0; e < x.min(a.length, b.length); e++) {
          var f = parseInt(a[e], 10),
            d = parseInt(b[e], 10)
          if (f > d) return 1
          if (f < d) return -1
        }
        return a.length < b.length && 0 < b.slice(-1).pop()
          ? -1
          : a.length > b.length && 0 < a.slice(-1).pop()
            ? 1
            : 0
      }
    },
    random: function () {
      return 1e19 * x.random()
    },
    toFixed: function (a, b) {
      if (c.Ke(a)) return parseFloat(a.toFixed(b || 2))
    },
  }
  c.g = {
    bm: c.Gd(function () {
      var a = c.g.l,
        b
      for (b in a) {
        var e = a[b]()
        if (e && c.Ka(e)) return e
      }
    }),
    DC: function (a, b) {
      a = a || this.bm()
      var c = this.St(a + (b || ' ([\\d.]+);'))
      return 1 < c.length ? c[1] : -1
    },
    Uc: function (a, b, e, f) {
      if ((a = c.g.DC(a, e))) return c.ta.Bl(a, b, f)
    },
    l: {
      Mb: function () {
        return c.g.na('Android')
      },
      Su: function () {
        return c.g.na('ARM')
      },
      Ze: function () {
        return c.g.na('Chrome')
      },
      Zn: function () {
        return this.Mb() && this.Ze()
      },
      dd: function () {
        return c.g.na('Firefox')
      },
      $b: function () {
        return c.g.na('AFT') ? 'FireTv' : ''
      },
      yo: function () {
        return this.zo() || this.Ao() || (!this.ae() && !this.be() && !this.oj())
      },
      zo: function () {
        if (!this.Mb()) return !1
        var a = c.g.Uc('Android', '3.0')
        return (null == a && this.dd()) || 1 === a
      },
      Ao: function () {
        return this.he() && 1 === c.g.Uc('Silk', '3.3', '\\/([\\d\\.]+)')
      },
      yv: function () {
        var a = new c.Ba.ab(),
          a = c.ta.Bl(a.Bi, '3.0')
        return this.xj && 1 === a
      },
      Og: function () {
        return c.g.na('MSIE|Trident') && !this.oj()
      },
      Av: function () {
        return this.Og() && this.Su()
      },
      Do: function () {
        return !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)
      },
      Co: function () {
        return this.zv() && c.g.na('Windows NT 6.1')
      },
      zv: function () {
        return !!q.all
      },
      nj: function () {
        return !!q.all && !t.atob
      },
      ce: function () {
        return this.nj() && !q.addEventListener
      },
      kH: function () {
        return this.ce() && !q.querySelector
      },
      pc: function () {
        return this.ce() && !t.XMLHttpRequest
      },
      oj: function () {
        return c.g.na('IEMobile')
      },
      sb: function () {
        return this.wv() || this.ae() || this.be()
      },
      wv: function () {
        return c.g.na('iPad')
      },
      ae: function () {
        return c.g.na('iPhone')
      },
      xv: function () {
        return (this.ae() || this.be()) && c.g.js('10_0')
      },
      be: function () {
        return c.g.na('iPod')
      },
      Qo: function () {
        return new c.Ba.ab().mg
      },
      xj: function () {
        var a = new c.Ba.ab()
        return a.mg && 'Android' === a.ug
      },
      Aa: function () {
        return this.Mb() || this.oj() || this.sb() || this.he()
      },
      wH: function () {
        return c.g.na('Opera')
      },
      fw: function () {
        return c.g.na('Phantom')
      },
      ub: function () {
        return c.g.l.Ze() || c.g.l.fw() ? '' : c.g.na('Safari')
      },
      vw: function () {
        return c.g.l.ub() && c.g.na('Safari/534.59.8')
      },
      ww: function () {
        return c.g.ks('537.43')
      },
      xw: function () {
        return c.g.ks('537.71')
      },
      he: function () {
        return c.g.na('Silk')
      },
      pf: function () {
        return c.g.l.Mb() && c.g.na('Mozilla') && !c.g.l.dd() && (!c.g.l.Ze() || !c.g.l.Rw())
      },
      Rw: function () {
        return 0 <= c.g.Uc('Chrome', '30', '\\/([\\d.]+)')
      },
      Gn: function () {
        return (
          c.g.l.Mb() &&
          ((c.g.na('Version') && c.g.na('Chrome')) || c.g.na('Amazon') || c.g.na('Windowshop'))
        )
      },
      Ru: function () {
        return (
          0 <= c.g.Uc('Android', '4.1', '\\ ([\\d.]+)') &&
          0 <= c.g.Uc('Chrome', '30', '\\/([\\d.]+)')
        )
      },
      xp: function () {
        return c.g.na('Windows')
      },
    },
    ks: function (a) {
      return c.g.l.ub() && 0 < c.g.Uc('Safari', a, '/([\\d\\.]+)')
    },
    js: function (a) {
      return c.g.l.sb() && 0 <= c.g.Uc('CPU[\\w\\s]+OS', a, ' ([\\d_]+)', '_')
    },
    nJ: function () {
      return navigator.userAgent
    },
    na: function (a) {
      return this.St(a)[0] || ''
    },
    St: function (a) {
      return navigator.userAgent.match(RegExp(a, 'i')) || []
    },
  }
  c.g.l = c.map(c.g.l, function (a, b) {
    return c.Gd(b, c.g.l)
  })
  c.$o = {
    fu: function (a) {
      return function (b, c) {
        return a === c
      }
    },
  }
  c.Zg = {
    open: function (a, b) {
      return new this.jf(a, b, !1, !1)
    },
    closed: function (a, b) {
      return new this.jf(a, b, !0, !0)
    },
    SI: function (a, b) {
      return new this.jf(a, b, !0, !1)
    },
    vE: function (a, b) {
      return new this.jf(a, b, !1, !0)
    },
  }
  c.Zg.jf = function (a, b, c, f) {
    var d = a <= b
    this.lower = d ? a : b
    this.upper = d ? b : a
    this.cD = c
    this.mD = f
  }
  c.Zg.jf.prototype = {
    contains: function (a) {
      return this.bD(a) && this.lD(a)
    },
    bD: function (a) {
      var b = this.lower,
        c = this.cD
      return (c && a >= b) || (!c && a > b)
    },
    lD: function (a) {
      var b = this.upper,
        c = this.mD
      return (c && a <= b) || (!c && a < b)
    },
  }
  c.yw = {
    oC: function (a, b) {
      b = b || {}
      var e = b.hu || c.J,
        f = b.error || c.J,
        d = c.h.kb('script'),
        s = !1
      d.async = !0
      d.src = a
      c.h.bind(d, 'load readystatechange', function (a) {
        s || ((s = !0), e(a))
      })
      c.h.bind(d, 'error', function (a) {
        c.h.Jd(d)
        f(a)
      })
      c.h.fc(d, b.oJ || c.h.zC())
    },
  }
  c.wa = {
    Eu: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    qB: function (a) {
      return a ? c.wa.Ui(a.replace(/([a-z])([A-Z])/g, '$1-$2')) : ''
    },
    contains: function (a, b) {
      return -1 !== a.indexOf(b)
    },
    yB: function (a, b) {
      if (b && c.wa.rm(a)) return (parseFloat(a) * b) / 100
    },
    rm: function (a) {
      return !!a && c.Ka(a) && a.indexOf('%') === a.length - 1
    },
    yJ: function (a) {
      return a ? c.wa.Ui(a.charAt(0)) + a.slice(1) : ''
    },
    zJ: function (a) {
      return a ? c.wa.nu(a.charAt(0)) + a.slice(1) : ''
    },
    JE: function (a, b, c) {
      for (; a.length < c; ) a = b + a
      return a
    },
    PE: function (a) {
      if (!c.Ke(a)) return ''
      for (var b = '', e = c.wa.Eu, f = 0; f < a; f++) b += e[x.floor(x.random() * e.length)]
      return b
    },
    Mt: function (a, b) {
      return a && 0 === a.indexOf(b) && a.lastIndexOf(b) === a.length - 1
        ? a.substr(1, a.length - 2)
        : a
    },
    Ui: function (a) {
      return a.toLowerCase()
    },
    nu: function (a) {
      return a.toUpperCase()
    },
    xn: function (a) {
      return '"' + a + '"'
    },
  }
  c.ke = {
    Lo: 1e3,
    TI: function (a) {
      a = c.ke.iA[a] || a
      return c.wa.rm(a) || c.Ke(a) ? a : c.ke.zB(a)
    },
    iA: { start: '0%', end: '100%' },
    zB: function (a) {
      if (a) {
        a = a.split(':')
        for (var b = 0, c = 1, f = a.length - 1; 0 <= f; f--, c *= 60) b += parseFloat(a[f]) * c
        return b
      }
    },
    Tt: function (a, b, e) {
      if (null != a && !(0 > a) && isFinite(a)) {
        a = x.round(a)
        var f = x.floor(a / 3600)
        a %= 3600
        var d = x.floor(a / 60),
          s = x.round(a % 60)
        a = c.wa.JE
        if (e || b || f) d = a(String(d), '0', 2)
        s = a(String(s), '0', 2)
        d = d + ':' + s
        if (0 !== f || b) e && (f = a(String(f), '0', 2)), (d = f + ':' + d)
        return d
      }
    },
    ZI: function (a, b) {
      return (b || c.v()) - (a || c.v())
    },
  }
  c.Xj = {
    ss: function (a) {
      var b = c.h.kb('div')
      b.innerHTML = a
      return b.childNodes && b.childNodes.length ? b.childNodes[0].nodeValue || a : a
    },
    m: function (a, b, c) {
      a = a || []
      for (var f = 0; f < a.length; f++) {
        var d = a.item(f)
        b.call(c, d.nodeName, d)
      }
    },
    fJ: function (a) {
      var b = {}
      c.Xj.m(
        a.attributes,
        function (a, c) {
          b[a] = c.nodeValue
        },
        this,
      )
      return b
    },
    gJ: function (a) {
      if (a.childNodes && a.childNodes.length) return c.Xj.Lt(a.childNodes[0].nodeValue)
    },
    iJ: function (a) {
      if ((a = a.childNodes) && a.length) {
        for (var b = '', e = 0; e < a.length; ++e) b += a[e].nodeValue
        return c.Xj.Lt(b)
      }
    },
    Lt: function (a) {
      if (!a) return a
      var b = a.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
      return (b && b.length ? b[1] : a).trim()
    },
    LJ: function (a) {
      var b
      t.DOMParser
        ? (b = new DOMParser().parseFromString(a, 'text/xml'))
        : ((b = new ActiveXObject('Microsoft.XMLDOM')), (b.async = !1), b.loadXML(a))
      return b
    },
  }
  c.Rv = {
    IB: function (a, b, e) {
      var f = {},
        d = c.filter(c.keys(a), function (a, e) {
          return !c.Eb(b, e)
        }),
        s = c.filter(c.keys(b), function (b, e) {
          return !c.Eb(a, e)
        })
      c.m(d, function (a, b) {
        f[b] = e[b]
      })
      c.m(s, function (a, c) {
        f[c] = b[c]
      })
      return f
    },
  }
  var ra = {
    Sh: function (a, b, c, f) {
      var d = (this.b || {}).I
      if (d) return this.hB(d, a, b, c, f)
    },
    hB: function (a, b, c, f, d) {
      a.bind.call(a, b, c, f, d)
      ;(this.ek || (this.ek = [])).push([b, c, f, d])
      return this
    },
    Z: function () {
      c.h.bind.apply(c.h, arguments)
      ;(this.dk || (this.dk = [])).push(B.call(arguments))
      return this
    },
    la: function () {
      c.m(this.ek || [], this.sA, this)
      c.m(this.dk || [], this.rA, this)
      this.ek = []
      this.dk = []
      return this
    },
    sA: function (a, b) {
      var c = (this.b || {}).I
      c && c.la.apply(c, b)
    },
    rA: function (a, b) {
      b && c.h.la.apply(c.h, b)
    },
  }
  G.ot = function (a) {
    a = a || {}
    return {
      adDurationSeconds: a.FI,
      adInstance: a.BA,
      adInstances: a.CA,
      adPod: a.Oh,
      adPods: a.Ur,
      adsRequestUrl: a.Zr,
      adsResponse: a.PA,
      animationIntent: a.as,
      animationStatus: a.bs,
      bufferSizeSeconds: a.es,
      canViewContent: a.Sc,
      comScore: a.Wh,
      contentId: a.Fa,
      contentMinAge: a.Sb,
      contentTitle: a.vc,
      controlId: a.D,
      controller: a.wc,
      creative: a.LB,
      currentFps: a.Gl,
      currentBitrateIndex: a.Y,
      droppedFrames: a.Nl,
      durationSeconds: a.U,
      errorCode: a.errorCode,
      errorMessage: a.eC,
      eventScopes: a.k,
      eventTimestamp: a.q,
      externalMetricsReportingParams: a.fi,
      forceMetricDispatch: a.Fs,
      foresterMetadataParams: a.Be,
      htmlVideoAttributes: a.Cd,
      isAnimationTriggered: a.si,
      isAsync: a.Fe,
      isFlashThrottlingFramerate: a.bt,
      isInternal: a.K,
      isPastMinAge: a.qm,
      keyboardCode: a.lt,
      mediaFile: a.zD,
      metricCount: a.ga,
      metricDurationMillis: a.ib,
      metricDurationPercentage: a.Me,
      metricEventNames: a.BD,
      metricEventNameSuffix: a.ym,
      parentEl: a.Mm,
      playbackBytesPerSecond: a.BE,
      playheadTimeSeconds: a.T,
      prompt: a.prompt,
      publishedMetrics: a.Ft,
      renderer: a.B,
      rendererType: a.Ot,
      renderingMode: a.WE,
      resource: a.$m,
      resourceType: a.Rt,
      skipOffsetSeconds: a.aK,
      slotIds: a.yF,
      startTimeSeconds: a.qn,
      targetVolume: a.ya,
      targetSeconds: a.Xb,
      url: a.url,
      vendorCode: a.Od,
      videoAds: a.mb,
      videoHeight: a.videoHeight,
      videoLoadedPercent: a.Lb,
      videoQuality: a.ha,
      videoSourceInfo: a.Ya,
      videoWidth: a.videoWidth,
      viewedDurationMillis: a.aG,
      volume: a.volume,
      vpaidArgs: a.cG,
      wasPlayingOnPageHide: a.Pd,
      wasPlayingOnSeek: a.nb,
      windowUnloading: a.Qd,
    }
  }
  G.nt = function (a) {
    a = a || {}
    return {
      BA: a.adInstance,
      CA: a.adInstances,
      Oh: a.adPod,
      Ur: a.adPods,
      Zr: a.adsRequestUrl,
      PA: a.adsResponse,
      vd: hb(a.ageGate),
      as: a.animationIntent,
      bs: a.animationStatus,
      es: a.bufferSizeSeconds,
      Sc: a.canViewContent,
      Wh: gb(a.comScore),
      Fa: a.contentId,
      Sb: a.contentMinAge,
      vc: a.contentTitle,
      D: a.controlId,
      wc: a.controller,
      LB: a.creative,
      Gl: a.currentFps,
      Y: a.currentBitrateIndex,
      Nl: a.droppedFrames,
      U: a.durationSeconds,
      errorCode: a.errorCode,
      eC: a.errorMessage,
      k: a.eventScopes,
      q: a.eventTimestamp,
      fi: a.externalMetricsReportingParams,
      Fs: a.forceMetricDispatch,
      Be: a.foresterMetadataParams,
      Cd: a.htmlVideoAttributes,
      si: a.isAnimationTriggered,
      Fe: a.isAsync,
      bt: a.isFlashThrottlingFramerate,
      K: a.isInternal,
      qm: a.isPastMinAge,
      lt: a.keyboardCode,
      zD: a.mediaFile,
      ga: a.metricCount,
      ib: a.metricDurationMillis,
      Me: a.metricDurationPercentage,
      BD: a.metricEventNames,
      ym: a.metricEventNameSuffix,
      Mm: a.parentEl,
      BE: a.playbackBytesPerSecond,
      T: a.playheadTimeSeconds,
      prompt: a.prompt,
      Ft: a.publishedMetrics,
      B: a.renderer,
      WE: a.renderingMode,
      Ot: a.rendererType,
      $m: a.resource,
      Rt: a.resourceType,
      Md: ib(a.slateImages),
      yF: a.slotIds,
      qn: a.startTimeSeconds,
      ya: a.targetVolume,
      Xb: a.targetSeconds,
      Od: a.vendorCode,
      mb: fb(a.videoAds),
      videoHeight: a.videoHeight,
      Lb: a.videoLoadedPercent,
      ha: a.videoQuality,
      Ya: wa(a.mediaSourceInfo || a.videoSourceInfo),
      videoWidth: a.videoWidth,
      aG: a.viewedDurationMillis,
      volume: a.volume,
      cG: a.vpaidArgs,
      Pd: a.wasPlayingOnPageHide,
      nb: a.wasPlayingOnSeek,
      Qd: a.windowUnloading,
    }
  }
  G.prototype = {
    p: c.J,
    Th: function (a, b, e, d) {
      var l = B.call(arguments)
      l[1] = c.ob(b, this.gx, e)
      var s = { ja: b, yu: c.C.ze(l[1], 0) }
      this.fh.push(s)
      l[1] = s.yu
      this.bind.apply(this, l)
      return this
    },
    RF: function (a, b, c, d) {
      b = this.sy(b)
      var l = null !== b ? b.yu : null
      this.la(a, l, c, d)
      if (null === l) return this
      this.fh.splice(this.fh.indexOf(b), 1)
      return this
    },
    gx: function (a, b, c) {
      return a.call(this, b, G.ot(c))
    },
    bind: function (a, b, e, d) {
      if (!a || !b) return this
      var l = B.call(arguments)
      c.m(
        c.Ia(a),
        function (a, b) {
          l[0] = b
          this.md.apply(this, l)
        },
        this,
      )
      return this
    },
    md: function (a, b, e) {
      c.Xr(this.jh, a, { type: a, ja: b, NI: c.C.ze(b, 0, e || this), scope: e || this })
      return this
    },
    Eb: function (a, b) {
      if (!a || !b) return !1
      var e = this.jh[a]
      if (!e) return !1
      var d = !1
      c.m(e, function (a, c) {
        d = d || c.ja === b
      })
      return d
    },
    sy: function (a) {
      return c.find(
        this.fh,
        function (b, c) {
          return c.ja === a
        },
        this,
      )
    },
    la: function (a, b, e) {
      if (!a || !b) return this
      var d = B.call(arguments)
      c.m(
        c.Ia(a),
        function (a, b) {
          d[0] = b
          this.Pf.apply(this, d)
        },
        this,
      )
      return this
    },
    Pf: function (a, b, c) {
      if (!a || !b) return this
      a = this.jh[a]
      if (!a) return this
      var d = 0,
        l = a.length
      c = c || this
      for (var s = 'user unbind no scope' !== c; d < l; d++) {
        var g = a[d]
        if (g.ja === b && (!s || g.scope === c)) {
          a.splice(d, 1)
          break
        }
      }
      return this
    },
    H: function (a, b) {
      if (!a) return this
      c.m(
        c.Ia(a),
        function (a, c) {
          this.kl(c, b)
        },
        this,
      )
      return this
    },
    kl: function (a, b) {
      b = c.F({ q: c.v() }, b)
      c.m(this.jh[a], function (a, c) {
        c.ja.call(c.scope, c, b)
      })
      return this
    },
    Hi: function (a) {
      this.iq = a
    },
  }
  var ca = c.j(G, {
    p: function (a) {
      this.xf = {}
      c.m(
        c.unshift(a, g.Nb),
        function (a, c) {
          this.xf[c] || (this.xf[c] = new G(this.iq + ' (' + c + ' scope)'))
        },
        this,
      )
    },
    md: function (a, b, c, d) {
      this.Jk(ca.prototype.t.md, d, a, b, c)
      return this
    },
    Eb: function (a, b, c) {
      return this.Jk(ca.prototype.t.Eb, c, a, b)
    },
    Pf: function (a, b, c, d) {
      this.Jk(ca.prototype.t.Pf, d, a, b, c)
      return this
    },
    Jk: function (a, b) {
      var c = B.call(arguments, 2),
        d = null
      this.jq(b, function (b) {
        null == d && (d = !0)
        d = a.apply(b, c) && d
      })
      return !!d
    },
    kl: function (a, b) {
      this.jq((b || {}).k, function (c) {
        c.kl(a, b)
      })
      return this
    },
    Hi: function (a) {
      ca.prototype.t.Hi.apply(this, arguments)
      c.m(this.xf, this.Vz(a), this)
    },
    Vz: function (a) {
      return function (b, c) {
        c.Hi(a + ' (scoped)')
      }
    },
    jq: function (a, b) {
      c.m(
        this.Oy(a),
        function (a, c) {
          b.call(this, this.xf[c])
        },
        this,
      )
    },
    Oy: function (a) {
      return c.filter(c.Ia(a || g.Nb), this.Yy, this)
    },
    Yy: function (a, b) {
      return !!this.xf[b]
    },
  })
  xb.prototype = {
    add: function (a, b, e, d, l) {
      var s = this.Iz
      s[e] ||
        ((s[e] = b),
        (s = c.De()),
        (b = this.Lq[s] = { vs: {}, Jl: 0, ja: b, type: e, scope: d || this }),
        this.Hp(e, l),
        this.Cp(b, s, c.Ia(a)),
        0 === b.Jl && this.pq(b))
    },
    IA: function (a, b) {
      b.length &&
        this.sq(
          a,
          function (a, c) {
            this.Cp(a, c, b)
          },
          this,
        )
    },
    Cp: function (a, b, e) {
      c.m(
        e,
        function (e, d) {
          var s = c.ic(d),
            h = s ? d.ei : d,
            s = s ? d.k : g.Nb
          h &&
            !a.vs[h] &&
            ((a.vs[h] = !0), this.Eq[h] || (this.Hp(h, s), this.Ey(h).push(b), ++a.Jl))
        },
        this,
      )
    },
    Ey: function (a) {
      var b = this.oq
      return b[a] || (b[a] = [])
    },
    sq: function (a, b, e) {
      ;(a = this.oq[a]) &&
        c.m(
          a,
          function (a, c) {
            var d = this.Lq[c]
            null != d && b.call(e, d, c)
          },
          this,
        )
    },
    Hp: function (a, b) {
      var c = this.xb
      c.Eb(a, this.nq, b) || c.bind(a, this.nq, this, b)
    },
    nq: function (a, b) {
      var c = a.type
      this.Eq[c] = !0
      this.sq(
        c,
        function (a) {
          0 === --a.Jl && this.pq(a, b)
        },
        this,
      )
    },
    pq: function (a, b) {
      var e = a.ja.call(a.scope || this, a, b)
      this.xb.H(a.type, { q: c.v(), result: e })
    },
  }
  wb.prototype = {
    xB: function (a) {
      c.m(this.Dr, function (b, e) {
        a.add(e.Gi, e.ja, b, null, e.Qh)
        e.Ym && a.IA(b, c.Ia(e.Ym))
      })
    },
    wg: function (a) {
      if (null == a.name || !a.ja) return this
      this.Dr[a.name] = {
        ja: c.C.Q(a.ja, a.scope || this.gq),
        Gi: a.Gi || 'initstart',
        Ym: a.Ym,
        Qh: (this.zq || []).concat(a.Qh || []),
      }
      return this
    },
    eF: function (a) {
      this.gq = a
      this.zq = B.call(arguments, 1)
      return this
    },
    vB: function () {
      this.zq = this.gq = null
      return this
    },
  }
  ya.prototype = c.F(
    {
      p: c.J,
      u: function () {},
      L: function () {},
      XJ: function () {},
      k: null,
      Ec: function (a) {
        this.k = a
        return this
      },
      bind: function () {
        this.xe(this.u, this.k)
        this.xe(this.L)
        this.bx()
        this.ca(this.b)
        return this
      },
      ca: c.J,
      xe: function (a, b) {
        this.Ii(a, function (a, d) {
          null != a &&
            d &&
            c.m(
              c.Ia(d),
              function (c, d) {
                this.Sh(a, d, this, b)
              },
              this,
            )
        })
      },
      Ii: function (a, b, e, d) {
        d = d || {}
        a.call(this, d, this)
        c.m(d, b, e || this)
        return d
      },
      bx: function () {
        this.Sh(k.za, this.Ax({}), this, this.k)
      },
      Ax: function (a) {
        return function (b, c) {
          var d = a[c.errorCode]
          d && d.apply(this, arguments)
        }
      },
      aJ: function (a, b) {
        return this.Ga(b)
      },
      Ga: function (a, b) {
        return function (e, d) {
          b && ((d = c.Kd(d)), (d.k = b))
          this.n(a, d)
        }
      },
      n: function (a, b) {
        b = b || {}
        b.k = this.Ks(b)
        this.b.I.H(a, b)
        return this
      },
      Ks: function (a) {
        a = a || {}
        return a.k || this.k
      },
      gK: function (a, b) {
        this.n(k.za, c.F({ errorCode: a, q: c.v() }, b))
        return this
      },
    },
    ra,
  )
  var $b = c.j(ya, {
      p: function () {
        this.reset()
      },
      u: function (a) {
        a[k.cb] = this.update
        a[d.qa] = this.update
      },
      Yr: function (a) {
        var b = c.ob(a.callback, this.pB, a.scope)
        this.add({
          type: a.type,
          La: a.values,
          ui: a.isValueFromEnd,
          tm: a.isSkipBackEnabled,
          ja: b,
        })
      },
      pB: function (a, b, c, d) {
        return a.call(this, b, c, G.ot(d))
      },
      add: function (a) {
        var b = a.La,
          e = a.ja
        if (e && null != b) {
          var d = a.type
          c.m(
            c.Ia(b),
            function (b, s) {
              var g = d || (c.wa.rm(s) ? 'percent' : 'position')
              ;(this.b.o && this.b.o.fa && 'percent' === g) ||
                this.kk.push({
                  type: g,
                  value: s,
                  LD: parseFloat(s),
                  ui: a.ui || !1,
                  tm: a.tm,
                  ja: e,
                  scope: a.scope,
                })
            },
            this,
          )
        }
      },
      update: function (a, b) {
        if (this.kk.length) {
          var e = b.T,
            d = b.U
          d &&
            this.sh !== e &&
            ((d = this.ry(c.Zg.vE(this.sh, e), d, this.sh > e)),
            c.m(
              d,
              function (a, c) {
                this.ly(c, b)
              },
              this,
            ),
            (this.sh = e))
        }
      },
      ry: function (a, b, e) {
        return c.filter(this.kk, function (c, d) {
          if (d.tm || !e) {
            var g = d.LD
            'percent' === d.type && (g = (g * b) / 100)
            d.ui && (g = b - g)
            return a.contains(g)
          }
        })
      },
      ly: function (a, b) {
        a.ja.call(a.scope, a.value, a.type, b)
      },
      reset: function () {
        this.sh = -1
        this.kk = []
      },
    }),
    u = c.j(ya, {
      bn: function () {},
      bind: function () {
        this.Ii(this.bn, this.HA, this, [])
        return u.prototype.t.bind.apply(this, arguments)
      },
      HA: function (a, b) {
        b.scope = this
        this.b.qs.add(b)
      },
    }),
    ac = c.j(u, {
      k: g.f,
      p: function () {
        this.XC = this.b
        this.sm = !1
        this.Um = []
      },
      u: function (a) {
        a.rendererready = c.C.ze(this.Wm, 0, this)
        a.renderernotready = this.Nt
      },
      L: function (a) {
        a[d.Za] = this.detach
      },
      Wm: function () {
        for (this.sm = !0; this.Um.length; ) {
          var a = this.Um.shift()
          a.method.apply(a.scope, a.Qh)
        }
      },
      detach: function () {
        this.Nt()
      },
      Nt: function () {
        this.sm = !1
      },
      ul: function () {
        var a = this.QA
        return c.map(
          a,
          function (b, e) {
            return c.ob(e, this.eG, this, a, b, this.XC)
          },
          this,
        )
      },
      Gy: c.Gd(function () {
        var a = {}
        c.m('addCuePoint attach bind detach hide isDetached show'.split(' '), function (b, c) {
          a[c] = !0
        })
        return a
      }),
      eG: function (a, b, c, d) {
        var l = B.call(arguments, 3)
        if (this.Gy()[c] || (this.dz(d) && this.sm)) return a.apply(b, l)
        this.Um.push({ method: a, scope: b, Qh: l })
      },
      dz: function (a) {
        return (a = a.Xa) ? a.gD({ k: this.k }) : !1
      },
      QA: {
        adBind: function (a, b, c, d) {
          a.I.Th(b, c, d, [g.aa])
          return this
        },
        addCuePoint: function (a, b) {
          a.qs.Yr(b)
          return this
        },
        adPlay: function (a, b) {
          this.uc(a, d.X, b, { k: g.aa })
        },
        attach: function (a, b, e) {
          this.uc(a, d.Rd, e, { Mm: c.Ka(b) ? c.h.Vl(b) : b })
          return this
        },
        audioOff: function (a, b) {
          this.Ob(a, d.Ca, b, { ya: 0, volume: a.o.volume })
          return this
        },
        audioOn: function (a, b) {
          this.Ob(a, d.Ca, b, { ya: a.o.Sm || 1, volume: a.o.volume })
          return this
        },
        bind: function (a, b, c, d) {
          a.I.Th(b, c, d, [g.Nb, g.f])
          return this
        },
        unbind: function (a, b, c, d) {
          a.I.RF(b, c, d || 'user unbind no scope', [g.Nb, g.f])
          return this
        },
        detach: function (a, b) {
          this.uc(a, [d.Za, d.co], b)
          return this
        },
        endTitleSession: function (a, b) {
          this.pause(a, b)
          this.uc(a, d.bd, b)
          return this
        },
        enterFullScreen: function (a, b) {
          this.Ob(a, d.$a, b)
          return this
        },
        enterNormalScreen: function (a, b) {
          this.Ob(a, d.bb, b)
          return this
        },
        getDurationSeconds: function (a) {
          return a.o.U
        },
        getMediaSourceInfo: function (a) {
          return a.o.Ya
        },
        getPlayheadTimeSeconds: function (a) {
          return a.o.T
        },
        getRendererType: function (a) {
          a = a.Xa
          return a ? ((a = a.$f({ k: g.f })) ? a.type : null) : null
        },
        getTitleSessionId: function (a) {
          return (a = a.zd) ? a.Fg : null
        },
        getVideoLoadedPercent: function (a) {
          return a.o.Lb
        },
        getVolume: function (a) {
          return a.o.volume
        },
        hide: function (a, b) {
          this.uc(a, d.cf, b)
          return this
        },
        isAudioOn: function (a) {
          return a.o.ti
        },
        isDetached: function (a) {
          return a.o.Ge
        },
        isPlaying: function (a) {
          return a.o.V
        },
        isFullScreen: function (a) {
          return a.o.Gb
        },
        loadMedia: function (a, b) {
          this.Ob(a, [d.$i, d.O], b)
          return this
        },
        pause: function (a, b) {
          this.uc(a, [d.R, 'pauseState'], b, { k: [g.aa, g.f] })
          return this
        },
        play: function (a, b) {
          if ((b || {}).isAsync && a.ea.xi() && !(a.o.oi || (c.ic(a.$r) && a.$r.oi))) return this
          this.Ob(a, a.o.He ? [d.$i, d.Ma] : [d.X, 'playState'], b)
          return this
        },
        replay: function (a, b) {
          this.Ob(a, d.ua, b)
          return this
        },
        seek: function (a, b, c) {
          var f = a.o
          this.Ob(a, d.va, c, { U: f.U, T: f.T, Xb: b })
          return this
        },
        show: function (a, b) {
          this.uc(a, d.Nj, b)
          return this
        },
        setDisplayAdsMetricEventNameSuffix: function (a, b, c) {
          this.Ob(a, d.Rn, c, { ym: b })
          return this
        },
        setVideoQuality: function (a, b, c) {
          this.Ob(a, d.Gc, c, { ha: b })
          return this
        },
        setVolume: function (a, b, c) {
          this.Ob(a, d.Ca, c, { ya: b, volume: a.o.volume })
          return this
        },
        skipCurrentAdCreative: function (a, b) {
          this.uc(a, r.kp, b, { k: g.aa })
          return this
        },
        supportsInlinePlayback: function (a) {
          return a.ea.Kb()
        },
        Ob: function (a, b, e, d) {
          this.uc(a, b, e, c.F({ k: g.f }, d))
        },
        uc: function (a, b, e, f) {
          e = G.nt(e)
          e.q = e.q || c.v()
          f = c.F(e, f)
          b = c.Ia(b)
          b.push(d.Zi)
          a.I.H(b, f)
        },
      },
    }),
    bc = c.j(u, {
      k: g.f,
      Hf: 0,
      mh: !1,
      u: function (a) {
        a[k.Zb] = this.ended
      },
      L: function (a) {
        a[r.uw] = this.IF
        a[r.yn.Lc] = this.EA
        a[r.yn.hv] = this.DA
        a[r.of] = this.FF
      },
      IF: function (a, b) {
        this.Hf = c.filter(b.Ur || [], this.Ez).length
      },
      Ez: function (a, b) {
        return !!b && !!b.gt
      },
      EA: function (a, b) {
        var c = b.Oh
        c && c.gt && (this.mh = !0)
      },
      DA: function (a, b) {
        var c = b.Oh
        c && c.gt && ((this.mh = !1), this.Hf--, 0 < this.Hf || (this.b.o.Tb && this.ll(a.type)))
      },
      FF: function (a) {
        this.mh && ((this.mh = !1), (this.Hf = 0), this.b.o.Tb && this.ll(a.type))
      },
      ended: function (a) {
        0 < this.Hf || this.ll(a.type)
      },
      ll: function () {
        this.b.I.H(d.bd, { q: c.v() })
      },
    })
  vb.prototype = {
    xi: function () {
      return null != this.er ? this.er : c.g.l.Aa()
    },
    rn: function () {
      return c.g.l.$b() && this.ay()
    },
    mu: function () {
      return !c.g.l.Aa() && (c.g.l.Ze() || c.g.l.ub() || c.g.l.Do())
    },
    lu: function (a, b) {
      return c.g.l.sb() || (c.g.l.ub() && 'video/mp4' === b) || c.g.l.dd()
    },
    ay: function () {
      return c.matches(this.Ry, { 'amazon-player-type': 'exoplayer' })
    },
    Kb: function () {
      return null != this.Gr ? this.Gr : c.g.l.yo()
    },
    KF: function () {
      if (c.g.l.ce()) return !1
      var a = c.h.kb('div', { width: '50vmin' })
      c.h.fc(a, q.body)
      var b = parseInt(c.h.li(a, 'width'), 10)
      c.h.removeChild(q.body, a)
      return x.round(50 * x.min(t.innerWidth / 100, t.innerHeight / 100)) === b
    },
    zi: function () {
      var a = !c.g.l.Aa()
      null != this.lq && (a = this.lq && !this.xi())
      return a
    },
    $C: function () {
      return !!q && typeof q.hasFocus === typeof Function
    },
  }
  var cc = c.j(u, {
      k: g.f,
      p: function () {
        this.Ok = !1
      },
      u: function (a) {
        a[d.Ua] = this.Fm
        a[d.X] = this.Gm
        a[d.oa] = this.Im
      },
      Fm: function () {
        this.Ok = !0
      },
      Gm: function () {
        this.Ok && this.n(d.qc)
      },
      Im: function () {
        this.Ok = !1
      },
    }),
    dc = c.j(u, {
      p: function () {
        var a = {}
        a.appPause = c.C.Q(this.MD, this)
        this.b.wD.JA(a)
      },
      MD: function () {
        this.b.I.H([d.R, 'pauseState'], { k: [g.aa, g.f] })
      },
    }),
    ec = c.j(u, {
      p: function () {
        this.Cz =
          this.b.w.Bt ||
          'Sorry, an error has occurred while attempting video playback. Please try again later.'
        this.wA = this.b.w.vn || 'Sorry, this video is unsupported on this browser.'
        this.iz =
          this.b.w.uD ||
          'The live video stream is currently unavailable. Please try another video or try again later.'
      },
      u: function (a) {
        a[p.$e] = this.Pe
        a[p.wj] = this.Pe
        a[p.ff] = this.Pe
        a[p.Qj] = this.Pe
        a[p.bh] = this.Pe
        a[p.ia] = this.Pe
        a[p.Pg] = this.dE
      },
      Pe: function (a, b) {
        this.b.o.fa
          ? this.n(d.Sd, b)
          : (this.As(),
            this.n(d.Mj, b),
            this.PF(a, c.F({}, b, { prompt: a.type === p.ia ? this.wA : this.Cz })))
      },
      As: function () {
        this.b.I.H([d.np, d.bd], {})
      },
      PF: function (a, b) {
        this.n(D.Vj, b)
      },
      dE: function (a, b) {
        this.b.o.fa && (this.As(), this.n(d.Mj, b), this.n(D.ia, { q: c.v(), prompt: this.iz }))
      },
    }),
    fc = c.j(u, {
      p: function () {
        var a = this.b.w.st || {}
        this.qz = a.rt || 0
        this.Zw = a.bB || 0
        this.Yw = a.aB || 0
        this.tf = 0
        this.Cq = !1
        this.ol = []
        this.Lf = 0
        this.bl = []
      },
      u: function (a) {
        a[d.Sd] = this.qg
        a[d.dh] = this.uE
        a[d.mc] = this.zc
      },
      uE: function (a, b) {
        b.kD || (this.$k(), (this.ol = b.VF))
      },
      qg: function (a, b) {
        if (!this.Cq) {
          var e = 0
          if (this.Lf < this.ol.length - 1) this.Lf++
          else {
            this.tf++
            if (this.tf >= this.qz) {
              this.n(p.Pg, b)
              this.Cq = !0
              this.$k()
              return
            }
            e = x.min(this.Zw << (this.tf - 1), this.Yw)
            this.Lf = 0
          }
          e = c.C.ka(this.kz, e, this, [this.ol[this.Lf], e])
          this.bl.push(e)
        }
      },
      zc: function () {
        ;(0 === this.Lf && 0 === this.tf) || this.n(d.lf)
        this.$k()
      },
      kz: function (a) {
        var b = c.v()
        this.n(d.O, { Fa: this.b.o.Fa, q: b, K: !0, Ya: c.Ia(a) })
        this.n(d.X, { q: b })
      },
      $k: function () {
        this.tf = 0
        c.m(this.bl, function (a, b) {
          clearTimeout(b)
        })
        this.bl = []
      },
    })
  ub.prototype = {
    select: function (a) {
      var b = a[this.$h]
      return b ? this.ps(this.$h, b) : this.aF(a)
    },
    aF: function (a) {
      var b = c.Xf(c.keys(a))
      if (b) return this.ps(b, a[b])
    },
    ps: function (a, b) {
      return { vu: b, ha: a }
    },
  }
  var gc = c.j(u, {
      k: g.f,
      hj: 1e4,
      Zq: 0,
      td: null,
      Qc: null,
      p: function () {
        this.fn((this.b.w || {}).CD || this.hj)
      },
      u: function (a) {
        a[k.cb] = this.Hm
        a[d.O] = this.sg
        a[d.Ua] = this.Fm
        a[d.qc] = this.Bc
      },
      L: function (a) {
        a[d.bf] = this.XD
      },
      XD: function () {
        this.Va()
      },
      sg: function () {
        this.Va()
      },
      Fm: function () {
        this.Va()
      },
      Bc: function () {
        this.Va()
      },
      Hm: function (a, b) {
        if (this.b.o.V) {
          var e = b.T,
            d = this.Zq
          this.Zq = e
          e <= d ? this.Qc || (this.Qc = c.C.ka(this.pk, this.td, this)) : this.Va()
        } else this.Va()
      },
      Va: function () {
        clearTimeout(this.Qc)
        this.Qc = null
      },
      pk: function () {
        this.n(p.wj, { CJ: this.td })
        this.Va()
      },
      fn: function (a) {
        this.td = a
      },
    }),
    Ab = c.j(u, {
      hb: !1,
      Bh: !1,
      p: function (a) {
        this.Pr = a
      },
      u: function (a) {
        a[d.Yd] = this.qi
        a[d.lf] = this.on
        a[d.$c] = this.AA
        a[k.pb] = this.Qb
        a[d.Gc] = this.wu
        a[d.O] = this.S
        a[d.qc] = this.Vm
        a[d.Td] = this.autoplay
      },
      L: function (a) {
        a[d.Rd] = this.B.ru
        a[d.Za] = this.detach
      },
      qi: function () {
        this.Bh = !1
        this.im()
      },
      im: function () {
        c.h.Ja(this.r, c.h.ag())
      },
      on: function () {
        this.Bh = !0
        if (!this.B.Dd || !this.hb) return !1
        this.Te()
        this.n(d.Ij, { q: c.v() })
        return !0
      },
      Te: function () {
        c.h.Ja(this.r, c.h.bg())
      },
      AA: function () {
        this.Bh && this.hb && this.on()
      },
      Qb: function () {
        this.hb = !0
        this.B.Dd && this.Bh && this.on()
      },
      wu: function (a, b) {
        var c = this.b.o,
          d = c.V
        this.br(a, { k: this.k, Ya: c.Ya[b.ha], qn: c.T })
        d && this.play()
      },
      S: function (a, b) {
        this.n(d.Yd, { q: c.v() })
        this.br(a, b)
      },
      br: function (a, b) {
        this.hb = !1
        var e = b.Ya,
          e = c.Le(e) ? this.MC(e) : e
        this.lF(e, b.qn || -1, b.K || !1, b.Cd)
      },
      MC: function (a) {
        a = this.b.AD.select(a)
        c.C.ka(this.n, 0, this, [d.Gc, { ha: a.ha }])
        return a.vu
      },
      lF: function (a, b, e, d) {
        b = c.C.Q(this.Sz, this, b, e, d)
        c.Ka(a) ? b(a, c.Ia(a)) : this.Pr.select(a, b)
      },
      Sz: function (a, b, e, f, l) {
        if (null == f) this.n(p.ia, { q: c.v() })
        else {
          var g = this.oy(f),
            h = this.ny(f)
          f = this.my(f)
          this.b.rs = { url: g, jb: h, Cb: f }
          this.n(d.dh, { q: c.v(), kD: b || !1, url: g, VF: l })
          null != e && this.Li(e, h)
          this.Mi(g, a, h)
        }
      },
      oy: function (a) {
        return c.Ka(a) ? a : a.url
      },
      ny: function (a) {
        return c.Ka(a) ? this.Pr.gb(a) : a.jb
      },
      my: function (a) {
        return c.Ka(a) ? null : a.Cb
      },
      Vm: c.J,
      Mi: c.J,
      Li: c.J,
      detach: function () {
        this.b.I.H(k.cb, { k: g.f, K: !0, U: 1, T: 0, Lb: 0 })
      },
      autoplay: function () {
        this.n(d.Ca, { q: c.v(), K: !0, ya: 0 })
        this.Te()
        this.play()
      },
      seek: function (a, b) {
        b && this.B.Ig(d.qa, b)
      },
      pause: function (a, b) {
        b && this.b.o.V && this.B.Ig(d.Ua, b)
      },
      play: function (a, b) {
        b && !this.b.o.V && this.B.Ig(d.oa, b)
      },
    }),
    hc = c.j(u, {
      k: [g.aa, g.f],
      L: function (a) {
        a[d.Rd] = this.Rh
        a[d.Za] = this.IE
        a[d.co] = this.UB
      },
      Rh: function (a, b) {
        this.b.o.Ge && (c.h.fc(this.b.Na, b.Mm), this.b.I.H(d.En, { q: c.v() }))
      },
      IE: function () {
        !this.b.o.Ge && c.h.getParent(this.b.Na) && this.n(d.bb, { q: c.v() })
      },
      UB: function () {
        !this.b.o.Ge &&
          c.h.getParent(this.b.Na) &&
          (c.h.Jd(this.b.Na), this.b.I.H(d.bf, { q: c.v() }))
      },
    }),
    ic = c.j(u, {
      p: function () {
        c.F(this, {
          Fa: null,
          Sb: -1,
          vc: null,
          U: 0,
          Rl: null,
          Tb: !1,
          dm: !1,
          Ra: !1,
          oi: !1,
          hg: !1,
          ti: !0,
          Ge: !1,
          km: !1,
          He: !0,
          Gb: !1,
          fa: this.b.w && this.b.w.fa,
          hb: !1,
          V: !1,
          it: !1,
          um: !1,
          jt: !1,
          Xc: !1,
          nb: null,
          T: 0,
          Sm: 1,
          Od: null,
          mb: {},
          Lb: 0,
          Ya: null,
          wn: null,
          volume: 1,
          Pd: null,
        })
        this.fa && (this.U = Infinity)
      },
      u: function (a) {
        a[d.cf] = this.fm
        a[d.Xo] = this.CE
        a[d.Nj] = this.jn
        a[d.Yo] = this.EE
        a[d.Aj] = this.Lm
        a[d.Bj] = this.wE
        a[d.O] = this.S
        a[d.dh] = this.YF
        a[k.pb] = this.Qb
        a[d.Gc] = this.xl
        a[k.Wd] = this.sn
        a[k.cb] = this.sn
        a[k.hd] = this.sn
        a[d.va] = this.seek
        a[d.qa] = this.Ag
        a[d.Ca] = this.Tc
        a[k.Zb] = this.ended
        a[d.Ua] = this.paused
        a[d.X] = this.play
        a[d.oa] = this.Re
        a[d.Td] = this.autoplay
        a[d.Zi] = this.Vc
        a[d.fb] = this.Vc
        a[d.Ij] = this.VE
        a[d.Yd] = this.qi
        a[p.$e] = this.error
        a[p.ff] = this.error
        a[p.bh] = this.error
        a[p.ia] = this.error
      },
      L: function (a) {
        a[d.En] = this.YA
        a[d.Za] = this.Dm
        a[d.bf] = this.Kl
        a[d.$g] = this.yg
      },
      fm: function () {
        this.um = !0
      },
      CE: function () {
        this.um = !1
      },
      jn: function () {
        this.jt = !0
      },
      EE: function () {
        this.jt = !1
      },
      S: function (a, b) {
        this.Fa = b.Fa
        this.Sb = b.Sb
        this.vc = b.vc
        this.Od = b.Od
        this.mb = b.mb
        this.Ya = b.Ya
        this.Rl = this.wn = null
        this.hb = this.hg = !1
        this.He = !0
        this.Ra = this.dm = this.Tb = this.V = !1
      },
      YF: function (a, b) {
        this.wn = b.url
      },
      Qb: function () {
        this.hb = !0
      },
      xl: function (a, b) {
        this.ha = b.ha
      },
      sn: function (a, b) {
        this.T = b.T
        this.fa || this.km || (this.U = b.U)
        this.Lb = b.Lb
      },
      seek: function (a, b) {
        this.Xc = !0
        this.nb = b.nb
      },
      Ag: function (a, b) {
        this.Tb = this.Xc = !1
        this.nb = null
        this.T = b.T
      },
      Tc: function (a, b) {
        this.Sm = this.volume
        this.volume = b.ya
        this.ti = !!b.ya
      },
      Lm: function (a, b) {
        this.Pd = b.Pd
      },
      wE: function () {
        this.Pd = null
      },
      paused: function () {
        this.V = !1
      },
      play: function () {
        this.He = !1
        this.Ra = !0
      },
      Re: function () {
        this.Tb = !1
        this.oi = this.V = !0
        this.Ra = !1
      },
      ended: function () {
        this.Tb = !0
        this.V = !1
      },
      autoplay: function () {
        this.hg = !0
      },
      Vc: function () {
        this.hg = !1
      },
      VE: function () {
        this.it = !0
      },
      qi: function () {
        this.it = !1
      },
      YA: function () {
        this.Ge = !1
      },
      Dm: function () {
        this.km = !0
      },
      Kl: function () {
        this.km = !1
        this.Ge = !0
        this.V = !1
      },
      yg: function () {
        this.Gb = !this.Gb
      },
      error: function (a) {
        this.Rl = a.type
        this.dm = !0
      },
    })
  xa.prototype = c.F(
    {
      type: null,
      p: c.J,
      k: null,
      r: null,
      Dd: !1,
      Xq: !1,
      ht: function () {
        return this.Xq
      },
      Mk: {},
      Ig: function (a, b) {
        this.Mk[a] = b.K
      },
      QI: function (a, b) {
        var c = this
        this.Z(this.r, a, function () {
          c.Pa(b)
        })
      },
      ru: function () {
        this.Xq = !0
        var a = this.b.I
        c.C.ka(a.H, 0, a, ['rendererready', { k: this.k }])
      },
      Pa: function (a, b) {
        var e = this.Js(a)
        this.b.I.H(a, c.F({ k: this.k, U: this.Bd(), K: e, T: this.Db(), Lb: this.Ss() }, b))
      },
      Js: function (a) {
        var b = this.Mk[a]
        this.Mk[a] = !1
        return b
      },
      Bd: c.J,
      yc: c.J,
      Db: c.J,
      Ss: c.J,
      lm: c.J,
      qu: c.J,
    },
    ra,
  )
  var jc = c.j(u, {
      k: c.La(g),
      Tr: null,
      ec: null,
      p: function () {
        this.rk = {}
        var a = (this.b.w || {}).Si
        a && (this.Ed = /hls/i.test(a))
      },
      u: function (a) {
        a[d.Dj] = this.gE
        a[d.ej] = this.VD
      },
      $f: function (a) {
        a = this.Fr(a)
        return (this.rk[a] || {}).B
      },
      gE: function (a, b) {
        var c = this.Fr(b),
          d = this.rk[c]
        this.rk[c] = b
        ;(d && 'html' === d.B.type) || this.tA(d)
      },
      tA: function (a) {
        a && (a.wc.la(), a.B.la())
      },
      VD: function (a, b) {
        var c = this.$f(b)
        if (c && !c.Dd) {
          this.ec && (this.ec.Dd = !1)
          var f = this.Tr
          this.Tr = b.k
          var l = this.ec
          this.ec = c
          c.Dd = !0
          this.ec.qu()
          this.b.I.H(d.$c, { k: b.k, B: c })
          f === g.aa && 'html' === l.type && this.n(d.ij, { k: f, id: l.id })
        }
      },
      gD: function (a) {
        return (a = this.$f(a)) ? a.ht() : !1
      },
      Fr: function (a) {
        return c
          .Ia((a || {}).k || [])
          .sort()
          .join(',')
      },
    }),
    Bb = c.j(u, {
      p: function () {
        c.F(this, { Ra: !1, V: !1 })
      },
      u: function (a) {
        a[k.Zb] = this.ended
        a[d.O] = this.S
        a[d.R] = this.pause
        a[d.Ua] = this.paused
        a[d.X] = this.play
        a[d.oa] = this.Re
      },
      YJ: function (a) {
        a[d.bf] = this.Kl
      },
      ended: function () {
        this.Ra = this.V = !1
      },
      S: function () {
        this.Ra = this.V = !1
      },
      pause: function () {
        this.Ra = !1
      },
      paused: function () {
        this.V = !1
      },
      play: function () {
        this.Ra = !0
      },
      Re: function () {
        this.V = !0
        this.Ra = !1
      },
      Kl: function () {
        this.V = !1
      },
    }),
    kc = c.j(u, {
      k: c.La(g),
      p: function () {
        var a = c.g.l
        a.ub() && a.xp()
      },
      L: function (a) {
        a[d.cf] = this.fm
        a[d.Nj] = this.jn
        a[d.$g] = this.yg
      },
      fm: function () {
        var a = { q: c.v() }
        this.n([d.R, 'pauseState'], a)
        this.b.o.Gb ? this.n(d.bb, a) : this.Jq()
      },
      yg: function () {
        this.b.o.um && this.Jq()
      },
      Jq: function () {
        c.h.Ja(this.b.Na, c.h.ag())
        this.n(d.Xo, { q: c.v() })
      },
      jn: function () {
        c.h.Ja(this.b.Na, c.h.bg())
        this.n(d.Yo, { q: c.v() })
      },
    }),
    lc = c.j(u, {
      k: g.f,
      hj: 1e4,
      td: null,
      Qc: null,
      zb: !0,
      p: function () {
        this.fn((this.b.w || {}).BF || this.hj)
      },
      u: function (a) {
        a[d.X] = this.Gm
        a[d.mc] = this.zc
        a[d.O] = this.sg
        a[d.qc] = this.Bc
        a[p.Pg] = this.cE
      },
      sg: function () {
        this.Va()
        this.zb = !0
      },
      cE: function () {
        this.Va()
      },
      Bc: function () {
        this.Va()
        this.zb = !0
      },
      zc: function () {
        this.Va()
      },
      Gm: function () {
        this.zb && ((this.zb = !1), this.cA())
      },
      Va: function () {
        clearTimeout(this.Qc)
        this.Qc = null
      },
      cA: function () {
        this.Va()
        this.Qc = c.C.ka(this.pk, this.td, this)
      },
      pk: function () {
        this.n(p.Qj, { MJ: this.td })
        this.Va()
      },
      fn: function (a) {
        this.td = a
      },
    })
  T.prototype = {
    av: 'data:',
    bv: /:([\w\/\-_]+)(,|;)/i,
    gb: function (a) {
      if (a) return c.Ka(a) ? (this.Qq(a) ? this.yy(a) : Zb[c.da.getExtension(a)]) : a.jb
    },
    Je: c.J,
    select: function (a, b, e) {
      a = c.Ia(a)
      var d = c.find(a, this.hz, this)
      this.Je('application/vnd.com.unicornmedia.once') && d
        ? b.call(e || this, d)
        : this.an(a, b, e || this)
    },
    an: function (a, b, c) {
      b.call(c, null)
    },
    hz: function (a, b) {
      return 'application/vnd.com.unicornmedia.once' === this.gb(b)
    },
    yy: function (a) {
      return a ? ((a = a.match(this.bv)) && 1 < a.length ? a[1] : null) : null
    },
    ID: function (a, b) {
      return !this.Hl(a, b)
    },
    Hl: function (a, b) {
      var e = c.Ka(b) ? b : b.url
      return this.Qq(e)
    },
    Qq: function (a) {
      return null != a && 0 === a.indexOf(this.av)
    },
  }
  sb.prototype = { create: function () {} }
  var Cb = c.j(u, {
    Uu: 0.1,
    Sn: 300,
    fk: null,
    Uq: !1,
    Nk: !1,
    Df: !0,
    Gf: !0,
    p: function () {
      this.Vf = []
      this.Kp = []
      this.Lp = []
      this.b.w.Qa && this.b.w.Qa.Uh && (this.Sn = this.b.w.Qa.Uh)
    },
    u: function (a) {
      this.b.ea.mu() && (a[k.hd] = this.eE)
    },
    eE: function () {
      this.Vk()
    },
    Vk: function () {
      this.Vf = this.tx(this.B.r.buffered)
    },
    tx: function (a) {
      var b,
        e = []
      for (b = 0; b < a.length; b++) e.push(c.Zg.closed(a.start(b), a.end(b)))
      return e
    },
    start: function () {
      this.Gf && ((this.Gf = !1), this.Vk(), this.Pp())
    },
    Pp: function () {
      this.Df = this.ix()
      this.Nk || this.Uq ? this.yt() : this.JD()
      this.Gf || (this.fk = c.C.ka(this.Pp, this.Sn, this))
    },
    ix: function () {
      if (!this.Df) return !1
      var a = this.B.Db(),
        b = this.uk(this.Vf, a)
      return !this.Vs(this.xk(b, a))
    },
    JD: function () {
      this.os()
      if (this.Vf.length) {
        var a = this.B.Db(),
          b = this.uk(this.Vf, a),
          b = this.xk(b, a)
        this.pu(b)
        a = this.Bq(b, a)
        ;(a = this.NC(b) && !a) && this.xz()
        return a
      }
    },
    pu: function (a) {
      this.n(k.Pn, { es: a })
    },
    os: function () {
      this.b.ea.mu() || this.Vk()
    },
    uk: function (a, b) {
      var e = c.filter(
        a,
        function (a, c) {
          return b >= c.lower - this.Uu && b <= c.upper
        },
        this,
      )
      return e[e.length - 1]
    },
    xk: function (a, b) {
      return a ? a.upper - b : 0
    },
    Bq: function (a, b) {
      var c = Xa[this.jb]
      return a + b > this.B.Bd() - c.jo
    },
    NC: function (a) {
      return a < this.Fy()
    },
    Fy: function () {
      var a = Xa[this.jb]
      return this.Df ? a.wo : a.Nn
    },
    xz: function () {
      this.Nk = !0
      c.m(
        this.Kp,
        function (a, b) {
          b.call(this)
        },
        this,
      )
    },
    yt: function () {
      this.os()
      var a = this.B.Db(),
        b = this.uk(this.Vf, a),
        b = this.xk(b, a)
      this.pu(b)
      a = this.Bq(b, a)
      ;(a = this.Vs(b) || a) && this.yz()
      return a
    },
    Vs: function (a) {
      return a >= this.Iy()
    },
    Iy: function () {
      var a = Xa[this.jb]
      return this.Df ? a.xo : a.On
    },
    yz: function () {
      this.Nk = !1
      c.m(
        this.Lp,
        function (a, b) {
          b.call(this)
        },
        this,
      )
    },
    RE: function (a) {
      this.Kp.push(a)
      return this
    },
    It: function (a) {
      this.Lp.push(a)
      return this
    },
    stop: function () {
      this.Gf || ((this.Gf = !0), clearTimeout(this.fk), (this.fk = null))
    },
    Wa: function () {
      this.stop()
      this.la()
    },
    VB: function () {
      this.Df = !1
      return this
    },
    WB: function () {
      this.Uq = !0
      return this
    },
  })
  rb.prototype = {
    p: c.J,
    Ms: function () {},
    Ns: function () {},
    Rs: function () {},
    KC: c.J,
    Rh: function () {
      this.Cf = !0
      return this
    },
    detach: function () {
      this.Cf = !1
      return this
    },
    bind: function (a, b, c) {
      this.gr[a] && this.xb.bind(a, b, c)
      return this
    },
    H: function (a, b) {
      this.Ty[a] && this.xb.H(a, b)
      return this
    },
    SE: function (a, b) {
      var e = this.Tk[a]
      e ? e.push(b) : (this.Tk[a] = c.Ia(b))
    },
    Hh: function (a, b) {
      !this.Cf ||
        (b && b.origin && b.origin === this.name) ||
        (c.m(this.Uy[a.type], this.Nq(a, b), this), this.xb.H(a.type, b))
    },
    oA: function (a, b) {
      this.Cf &&
        (c.m(this.Tk[a.type], this.Nq(a, b), this),
        (b = b ? b : {}),
        b.k || c.F(b, { k: this.yb }),
        this.re.H(a.type, b))
    },
    la: function (a, b, c) {
      this.gr[a] && this.xb.la(a, b, c)
      return this
    },
    Nq: function (a, b) {
      return function (c, d) {
        d.call(this, a, b)
      }
    },
  }
  var ab = c.j(u, {
      Ub: c.J,
      name: 'DEFAULT STRATEGY NAME',
      rh: !1,
      Xc: function () {
        return this.rh
      },
      Id: function () {
        this.rh = !0
      },
      Ac: c.J,
      jc: function () {
        this.rh = !1
      },
      reset: function () {
        this.rh = !1
      },
      Vi: function (a) {
        this.reset()
        var b = this.B.Db()
        this.n(a, { K: !0, T: b })
      },
    }),
    mc = c.j(ab, {
      name: 'PlayheadPollSeekedEventEmitterStrategy',
      Xu: 150,
      Qv: 0.5,
      Eh: null,
      dl: null,
      Ub: function () {
        return c.g.l.$b()
      },
      Id: function () {
        this.t.Id.call(this)
        this.pr()
      },
      Ac: function () {
        this.t.Ac.call(this)
        this.dl = this.rd.Db()
        this.zh(this.Rp)
      },
      Rp: function () {
        var a = this.rd.r.paused
        a || this.Fq() ? (a ? this.zh(this.Sp) : this.jc()) : this.zh(this.Rp)
      },
      Sp: function () {
        this.Fq() ? this.jc() : this.zh(this.Sp)
      },
      Fq: function () {
        return this.rd.Db() > this.dl + this.Qv
      },
      zh: function (a) {
        clearTimeout(this.Eh)
        this.Eh = c.C.ka(a, this.Xu, this)
      },
      jc: function () {
        this.t.jc.call(this)
        this.reset()
        this.Pa(d.qa)
      },
      reset: function () {
        this.t.reset.call(this)
        this.pr()
      },
      pr: function () {
        clearTimeout(this.Eh)
        this.Eh = this.dl = null
      },
    }),
    nc = c.j(ab, {
      name: 'BrowserBasedSeekedEventEmitterStrategy',
      Ub: function () {
        return !0
      },
      Ac: function () {
        this.t.Ac.call(this)
        this.jc()
      },
      jc: function () {
        this.t.jc.call(this)
        this.Vi([d.qa])
      },
    }),
    oc = c.j(ab, {
      name: 'HtmlBufferSizePollSeekedEventEmitterStrategy',
      p: function () {
        this.wd = new Cb(this.b, { jb: this.jb, B: this.B })
          .VB()
          .WB()
          .It(c.C.Q(this.jc, this))
          .bind()
      },
      Ub: function (a, b, c) {
        return a.ea.lu(b, c)
      },
      Id: function () {
        this.t.Id.call(this)
        this.n(d.R, { K: !0 })
        this.b.o.nb || this.n('pauseState', { K: !0 })
      },
      Ac: function () {
        this.t.Ac.call(this)
        this.wd.yt() || this.wd.start()
      },
      jc: function () {
        this.t.jc.call(this)
        this.b.o.nb
          ? this.Vi([d.qa, d.X, 'playState'])
          : c.g.l.dd() || (c.g.l.ub() && c.g.l.rJ())
            ? this.Vi([d.qa, 'pauseState'])
            : this.Vi([d.qa, d.R, 'pauseState'])
      },
      reset: function () {
        this.t.reset.call(this)
        this.wd.stop()
      },
    }),
    pc = c.j(u, {
      p: function () {
        this.fA = [mc, oc, nc]
      },
      u: function (a) {
        a[d.mc] = this.zc
      },
      L: function (a) {
        a[d.vb] = this.reset
        a[r.of] = this.reset
      },
      zc: function () {
        var a = P.gb(this.B.yc())
        this.sd = new (c.find(
          this.fA,
          function (b, c) {
            return c.prototype.Ub(this.b, this.B, a)
          },
          this,
        ))(this.b, { k: this.k, jb: a, B: this.B }).bind()
      },
      Xc: function () {
        this.sd.Xc()
      },
      Id: function () {
        this.sd && this.sd.Id()
      },
      Ac: function () {
        this.sd && this.sd.Ac()
      },
      reset: function () {
        this.sd && this.sd.reset()
      },
    }),
    Db = c.j(u, {
      Oq: !1,
      Ef: !1,
      Ab: !1,
      $q: null,
      ar: null,
      Pc: null,
      ve: null,
      il: null,
      p: function () {
        this.Oq = this.k === g.aa
        this.$q = [qc, rc, sc, tc]
        this.ar = [uc]
      },
      u: function (a) {
        a[d.Sd] = this.qg
        a[d.mc] = this.zc
        a[d.qc] = this.Bc
        a[d.ap] = this.hE
        a[d.bp] = this.iE
        a[d.hf] = this.jE
        a[d.gf] = this.Jm
      },
      L: function (a) {
        a[d.Za] = this.Dm
        a[d.vb] = this.tg
        a[r.of] = this.pE
      },
      zc: function () {
        this.Tp()
        this.Px()
        this.dA()
      },
      Tp: function () {
        this.Pc && this.Pc.Wa()
        this.ve && this.ve.Wa()
        this.il = this.ve = this.Pc = null
      },
      Px: function () {
        var a = P.gb(this.B.yc())
        this.il = { k: this.k, jb: a, B: this.B, kc: this.kc }
        this.Pc = this.sr(this.$q)
        this.ve = this.sr(this.ar)
      },
      sr: function (a) {
        return new (c.filter(a, this.gz, this)[0])(this.b, this.il).bind()
      },
      gz: function (a, b) {
        var c = P.gb(this.B.yc())
        return b.prototype.Ub(this.b, this.B, c)
      },
      qg: function () {
        this.Of()
      },
      Bc: function () {
        this.Of()
      },
      pE: function () {
        this.Oq && (this.Of(), c.C.ka(this.pe, 0, this))
      },
      pe: function () {
        this.la()
        this.Tp()
        this.kc = this.B = null
      },
      Dm: function () {
        this.Of()
      },
      tg: function () {
        this.Of()
      },
      dA: function () {
        this.gl(this.Pc)
        this.gl(this.ve)
      },
      gl: function (a) {
        a && a.start()
      },
      Of: function () {
        this.hl(this.Pc)
        this.hl(this.ve)
        this.Jm()
        this.Ef = !1
      },
      hl: function (a) {
        a && a.stop()
      },
      hE: function () {
        this.Ef = !0
        this.hl(this.Pc)
        this.Jm()
      },
      iE: function () {
        this.Ef && ((this.Ef = !1), this.gl(this.Pc))
      },
      jE: function (a, b) {
        this.Ab || this.Ef || ((this.Ab = !0), this.n(k.Yb, b))
      },
      Jm: function (a, b) {
        this.Ab && ((this.Ab = !1), this.n(k.nc, b))
      },
    }),
    da = c.j(u, {
      isEnabled: !1,
      Ub: c.J,
      name: 'DEFAULT STRATEGY NAME',
      start: function () {
        this.isEnabled = !0
      },
      stop: function () {
        this.isEnabled = !1
      },
      Wa: c.J,
    }),
    tc = c.j(da, {
      name: 'PlayheadPollRebufferDetectionStrategy',
      fj: 250,
      gk: null,
      Ab: !1,
      te: 0,
      p: function () {
        this.fj = this.b.w.Qa && this.b.w.Qa.Uh ? this.b.w.Qa.Uh : c.g.l.Mb() ? 500 : this.fj
      },
      Ub: function () {
        return !0
      },
      start: function () {
        this.isEnabled || (this.t.start.call(this), this.qr())
      },
      stop: function () {
        this.t.stop.call(this)
        this.te = 0
        this.Ab = !1
        clearTimeout(this.gk)
      },
      jx: function () {
        this.qr()
        var a = this.B
        a && a.Dd
          ? this.kc.V
            ? ((a = a.Db() * c.ke.Lo),
              this.Ab || a !== this.te || 0 === this.te || this.qA(),
              this.Ab && a > this.te && this.Kr(),
              (0 > a && 0 === this.te && !this.b.o.fa) || (this.te = a))
            : this.Ab && a.lm() && this.Kr()
          : (this.Ab = !1)
      },
      qA: function () {
        this.Ab = !0
        this.n(d.hf)
      },
      Kr: function () {
        this.Ab = !1
        this.n(d.gf)
      },
      qr: function () {
        clearTimeout(this.gk)
        this.gk = c.C.ka(this.jx, this.fj, this)
      },
      Wa: function () {
        this.la()
      },
    }),
    qc = c.j(da, {
      name: 'AWVRebufferDetectionStrategy',
      p: function () {
        var a = this.B
        a.Z(a.r, Ya.Yb, c.C.Q(this.Cm, this))
        a.Z(a.r, Ya.nc, c.C.Q(this.rg, this))
      },
      Ub: function (a) {
        return a.ea.rn()
      },
      Cm: function () {
        this.isEnabled && this.n(d.hf)
      },
      rg: function () {
        this.isEnabled && this.n(d.gf)
      },
      Wa: function () {
        this.la()
      },
    }),
    rc = c.j(da, {
      name: 'FlashBufferSizePollRebufferDetectionStrategy',
      Ub: function (a, b) {
        return 'flashhls' === b.type || 'flashbasic' === b.type
      },
      start: function () {
        this.t.start.call(this)
        this.B.CF()
      },
      stop: function () {
        this.t.stop.call(this)
        this.B.HF()
      },
      Wa: function () {
        this.la()
      },
    }),
    sc = c.j(da, {
      name: 'HtmlBufferSizePollRebufferDetectionStrategy',
      p: function () {
        this.wd = new Cb(this.b, { jb: this.jb, B: this.B })
          .RE(c.C.Q(this.SD, this))
          .It(c.C.Q(this.TD, this))
          .bind()
      },
      Ub: function (a, b, c) {
        return a.ea.lu(b, c)
      },
      start: function () {
        this.t.start.call(this)
        this.wd.start()
      },
      stop: function () {
        this.t.stop.call(this)
        this.wd.stop()
      },
      SD: function () {
        this.n(d.R, { K: !0 }).n(d.hf)
      },
      TD: function () {
        this.n(d.gf).n(d.X, { K: !0 })
      },
      Wa: function () {
        this.wd.Wa()
        this.la()
      },
    }),
    uc = c.j(da, {
      name: 'SeekingRebufferSuppressionStrategy',
      rr: null,
      p: function () {
        this.rr = c.g.l.$b() ? d.qw : d.qa
      },
      Ub: function () {
        return !0
      },
      u: function (a) {
        a[d.va] = this.nE
        a[this.rr] = this.oE
      },
      nE: function () {
        this.isEnabled && this.n(d.ap)
      },
      oE: function () {
        this.isEnabled && this.n(d.bp)
      },
      Wa: function () {
        this.la()
      },
    }),
    w = c.j(u, {
      D: null,
      qK: null,
      SA: 200,
      Ut: function () {
        return {}
      },
      lc: function () {
        return {}
      },
      hh: null,
      Cg: function (a) {
        this.hh = a
        return this
      },
      Ce: function () {
        return (this.s() || {}).M || this.hh
      },
      s: function () {
        return this.b.$.s(this.D)
      },
      IC: function () {
        var a = this.s()
        return c.filter(this.b.$.ud, function (b, c) {
          if (c) return c.Cc === a.Cc && b !== a.id
        })
      },
      bind: function () {
        if (!this.Ce()) return this
        if (this.ba(this.b)) return this.b.$.remove(this.D), this
        this.Ii(this.Ut, this.fB)
        this.Ii(this.lc, this.iB)
        return w.prototype.t.bind.apply(this, arguments)
      },
      ba: function () {
        return !1
      },
      fB: function (a, b) {
        this.ds(this.b.Na, a, b)
      },
      iB: function (a, b) {
        this.ds(this.Ce(), a, b)
      },
      ds: function (a, b, e) {
        e = c.C.Q(e, this)
        this.Z(a, c.h.zm(b), e, this.nK)
      },
      ye: function (a, b) {
        return c.h.ye(c.Xf(a.touches) || a, b, this.b.o.Gb ? this.b.Na : null)
      },
      Yh: function (a) {
        return a.call(c.W.eb, { M: this.s().M, ai: this.SA })
      },
      Rc: function () {
        c.g.l.pf() && this.Ce().blur()
      },
    }),
    M = c.j(w, {
      lc: function (a) {
        a[z.qb] = this.click
      },
      click: c.J,
    }),
    ea = c.j(M, {
      k: [g.aa, g.f],
      rf: g.f,
      o: null,
      p: function () {
        this.o = this.b.o
      },
      u: function (a) {
        c.m(
          a,
          function (b, e) {
            a[b] = c.ob(e, this.Pz, this)
          },
          this,
        )
        a[d.$c] = this.pg
      },
      L: function (a) {
        a[r.ac] = this.ma
      },
      Pz: function (a, b, e) {
        c.some(c.Ia(e.k), this.Sw, this) && a.call(this, b, e)
      },
      Sw: function (a, b) {
        return b === this.rf
      },
      pg: function (a, b) {
        this.cr(b.k)
      },
      ma: function () {
        this.cr(g.f)
      },
      cr: function (a) {
        this.rf !== a &&
          ((this.rf = a),
          (a = this.o),
          (this.o = this.rf === g.aa ? this.b.$r : this.b.o),
          this.Ue(a))
      },
      Ue: c.J,
      Ks: function () {
        return this.rf
      },
    }),
    Eb = c.j(w, {
      k: g.f,
      Pi: null,
      u: function (a) {
        a[d.O] = this.S
        this.Pi && (a[this.Pi] = c.C.ze(this.rF, 0, this))
      },
      ca: function () {
        this.kh = this.Yh(c.W.eb.gi)
        this.lh = this.Yh(c.W.eb.Tl)
      },
      S: function () {
        this.lh.Dc().Pb()
        this.n(D.eo, { q: c.v() })
      },
      rF: function () {
        this.kh.Dc().Pb()
      },
    }),
    Fb = c.j(w, {
      lc: function (a) {
        a[z.jj] = this.tz
      },
      Ut: function (a) {
        a[z.zj] = this.vz
        a[z.tp] = this.wz
        a[z.Sg] = this.uz
      },
      Hd: c.J,
      ED: c.J,
      Am: c.J,
      Oe: c.J,
      ig: !1,
      tz: function (a) {
        c.h.Eg(a)
        c.h.Rm(a)
        this.ig = !0
        this.Hd(a)
      },
      vz: function (a) {
        c.h.jm(a.relatedTarget || a.toElement, this.b.Na) || ((this.ig = !1), this.ED(a))
      },
      wz: function (a) {
        this.ig && (c.h.Eg(a), (this.ig = !1), this.Am(a))
      },
      uz: function (a) {
        this.ig && this.Oe(a)
      },
    })
  c.F(S, {
    $l: function (a) {
      return a.Ds
    },
    BC: function (a) {
      return a.gc.Ne
    },
    EC: function (a) {
      return a.gc.Qe
    },
  })
  qb.prototype = c.F(
    {
      md: function (a) {
        this.Z(a, 'touchstart', this.sE)
        this.Z(a, 'touchmove', this.rE)
        this.Z(a, 'touchend', this.qE)
      },
      sE: function (a) {
        if (1 !== a.targetTouches.length) return !0
        this.Dh = a.target
        return !0
      },
      rE: function () {
        this.Dh = null
        return !0
      },
      qE: function (a) {
        if (this.Dh !== a.target) return !0
        a.stopPropagation()
        a.preventDefault()
        a = q.createEvent('MouseEvents')
        a.initMouseEvent(z.qb, !0, !0, t, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null)
        this.Dh.dispatchEvent(a)
        return !1
      },
    },
    ra,
  )
  var vc = c.j(w, {
    k: [g.aa, g.f],
    p: function () {
      this.Z(q, 'visibilitychange', c.C.Q(this.bG, this))
    },
    ba: function () {
      return !(c.g.l.Qo() && c.g.l.sb())
    },
    bG: function () {
      q.hidden ? this.Lm() : this.xE()
    },
    Lm: function () {
      var a = this.b.o.V
      this.n(d.Aj, { k: this.k, Pd: a })
      a && this.n([d.R, 'pauseState'], { q: c.v, k: this.k })
    },
    xE: function () {
      this.b.o.Pd && this.n([d.X, 'playState'], { q: c.v() })
      this.n(d.Bj)
    },
  })
  pb.prototype = c.F(
    {
      cF: function (a) {
        this.Ep = a
        return this
      },
      ok: function (a, b) {
        var e = c.map(
          this.Kh,
          function (e, d) {
            return c.map(a.call(this, d), b, this)
          },
          this,
        )
        return c.F.apply(c, c.La(e))
      },
      Rx: function (a) {
        var b = this
        return function () {
          var e = b.mi().Ds[a]
          e && (c.h.Bg(b.M, e.El), c.h.Ja(b.M, e.style))
        }
      },
      eq: function (a) {
        return new ob(this, a).ul()
      },
      bind: function (a, b, c) {
        var d = this
        this.Z(
          this.M,
          a,
          function () {
            d.isEnabled && b.apply(this, arguments)
          },
          c || !1,
        )
        return this
      },
      remove: function () {
        c.h.Jd(this.M)
        this.la()
        return this
      },
      Jb: function (a) {
        this.M.innerHTML = a
        return this
      },
      Sf: function (a) {
        return this.Bp(this.mi(), a)
      },
      mi: function () {
        return this.Kh[this.Fl]
      },
      Wr: function (a) {
        c.m(
          this.Kh,
          function (b, c) {
            this.Bp(c, a)
          },
          this,
        )
        return this
      },
      Bp: function (a, b) {
        c.F(a.style, b)
        c.h.Ja(this.M, b)
        this.Hr()
        return this
      },
      Ea: function (a, b) {
        if (!this.isEnabled || this.Fl === a || !this.Kh[a]) return this
        this.Fl = a
        return this.Wc && b ? this : this.refresh()
      },
      refresh: function () {
        var a = this.mi()
        c.h.Bg(this.M, a.El)
        c.h.Ja(this.M, a.style)
        this.Hr()
        return this
      },
      Hr: function () {
        this.Sa = c.h.Sa(this.M)
      },
      show: function (a, b) {
        this.Ar(b, this.nk, 'visible', a)
        this.Sa = !0
        this.zs()
        return this
      },
      N: function (a, b) {
        null == this.nk && this.Uz()
        this.Ar(b, 'none', 'hidden', a)
        this.Sa = !1
        this.Ll()
        return this
      },
      Uz: function () {
        var a = c.h.li(this.M, 'display')
        this.nk = null == a || 'none' === a ? 'block' : a
      },
      Ar: function (a, b, e, d) {
        var l = c.h.xc(this.M, ['filter'])
        a ? this.Tw(l, b) : this.Vw(l, e)
        this.Uw(l, d)
        this.Wr(l)
      },
      Vw: function (a, b) {
        a.visibility = b
      },
      Tw: function (a, b) {
        a.display = b
      },
      Uw: function (a, b) {
        null != b && c.h.tt(a, b)
      },
      enable: function () {
        this.isEnabled = !0
        this.zs()
        return this
      },
      disable: function () {
        this.isEnabled = !1
        this.Ll()
        return this
      },
      Ri: function () {
        if (!this.Wc) return this
        this.Ep.wB()
        c.m(this.gc.Ne, this.Gp, this)
        c.m(this.gc.Qe, this.Gp, this)
        return this
      },
      zs: function () {
        if (this.Wc) return this
        this.Wc = !0
        this.Nr()
        return this
      },
      Ll: function () {
        if (!this.Wc) return this
        this.Wc = !1
        this.Nr()
        return this
      },
      Nr: function () {
        c.m(this.gc.Ne, this.Fp, this)
        c.m(this.gc.Qe, this.Fp, this)
      },
      Fp: function (a, b) {
        b.fF(this.Wc)
      },
      Gp: function (a, b) {
        b.Ri()
      },
      nB: function () {
        var a = this.M,
          b = c.map(this.PC, function (b, d) {
            return parseFloat(c.h.xc(a, d)) || 0
          })
        return c.iu(b)
      },
      PC: ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
    },
    ra,
  )
  var wc = c.j(w, {
      k: [g.aa, g.f],
      ba: function () {
        return !(c.g.l.Mb() && !(c.g.l.he() || c.g.l.dd() || c.g.l.$b() || c.g.l.Qo()))
      },
      lc: function (a) {
        a.blur = this.dG
      },
      dG: function () {
        this.n([d.R, 'pauseState'], { q: c.v() })
      },
    }),
    xc = c.j(w, {
      k: g.f,
      lc: function (a) {
        a.blur = this.Bm
        a.focusin = this.Em
      },
      Bm: function () {
        this.n('blur', { q: c.v() })
      },
      Em: function () {
        this.n('focusin', { q: c.v() })
      },
    }),
    yc = c.j(w, {
      k: g.f,
      No: 5,
      Oo: 0.1,
      ck: !1,
      ba: function () {
        return c.g.l.Aa()
      },
      lc: function (a) {
        a.keydown = this.rD
      },
      L: function (a) {
        a[r.rc] = this.sa
        a[r.ac] = this.ma
      },
      ca: function () {
        this.hA = this.Ix()
      },
      Ix: function () {
        var a = {}
        a[32] = this.zF
        a[37] = this.VA
        a[38] = this.XA
        a[39] = this.WA
        a[40] = this.UA
        return a
      },
      sa: function () {
        this.ck = !0
      },
      ma: function () {
        this.ck = !1
      },
      rD: function (a) {
        var b = a.keyCode || a.which
        if (this.ck || a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) return !0
        var e = this.hA[b]
        if (!e) return !0
        c.h.Rm(a)
        this.n(d.Fo, { q: c.v(), lt: b })
        e.apply(this, arguments)
        return !1
      },
      zF: function () {
        var a = this.b.o
        if (a.Tb) this.n(d.ua, { q: c.v() })
        else {
          var b = a.He ? d.Ma : [d.X, 'playState'],
            e = [d.R, 'pauseState']
          this.n(a.V ? e : b, { q: c.v() })
        }
      },
      XA: function () {
        this.Op(this.Oo)
      },
      UA: function () {
        this.Op(-this.Oo)
      },
      Op: function (a) {
        var b = this.b.o.volume
        a = c.bc.bound(b + a, 0, 1)
        this.n(d.Ca, { q: c.v(), ya: a, volume: b })
      },
      VA: function () {
        this.yh(-this.No)
      },
      WA: function () {
        this.yh(this.No)
      },
      yh: function (a) {
        var b = this.b.o,
          e = b.T,
          f = b.U
        a = c.bc.bound(e + a, 0, f)
        this.n(d.va, { U: f, q: c.v(), T: e, Xb: a, nb: b.V })
      },
    }),
    sa = c.j(u, {
      k: g.f,
      u: function (a) {
        a[d.Ma] = this.Oi
        a[d.rw] = this.Ld
      },
      Oi: function (a, b) {
        this.mn(b.q)
      },
      mn: function (a) {
        this.ln(a)
        this.n(d.X, { q: a || c.v() })
      },
      ln: function (a) {
        this.n([d.lf, d.ej], { q: a || c.v() })
      },
      Ld: function () {
        var a = c.v()
        this.b.o.V || this.mn(a)
      },
    }),
    sa = c.j(sa, {
      k: g.f,
      uA: c.g.l.Av(),
      u: function (a) {
        sa.prototype.t.u.call(this, a)
        a[d.O] = this.S
        a[k.pb] = this.Qb
      },
      L: function (a) {
        a[r.Cj] = this.hm
        a[r.rc] = this.sa
        a[r.Uv] = this.Ld
        a[r.yj] = this.Ld
        a[r.of] = this.Ld
        a[r.Tv] = this.Ld
        a[r.Sv] = this.Ld
      },
      kq: !1,
      ak: null,
      Zj: !1,
      S: function (a, b) {
        this.Zj = !1
        this.kq = this.Zz(b)
        ;(b.Md && b.Md.Qm) || this.nn()
      },
      Zz: function (a) {
        if (!1 === a.Sc) return (this.ak = C.af), !0
        this.ak = C.ge
        return !a.Sc && (!!this.b.w.vd.Dl || !!a.Sb)
      },
      Qb: function () {
        this.b.w.iD && this.ln()
      },
      Oi: function (a, b) {
        !b.qm && this.kq
          ? (this.hm(a, b), this.b.I.H(this.ak))
          : this.b.w.mb.at && !this.uA
            ? this.Zj || (this.hm(a, b), this.b.I.H(r.ep, { q: b.q }), (this.Zj = !0))
            : (this.nn(), this.mn(b.q))
      },
      hm: function (a, b) {
        this.b.$.N(n.oc, null, !0)
        this.n(d.Yd, b)
      },
      sa: function () {
        this.b.w.mb.Om && this.zr()
      },
      nn: function () {
        this.b.$.show(n.gd).show(n.Ug)
        this.zr()
      },
      zr: function () {
        this.b.$.show(n.oc, 0, !0)
      },
      Ld: function (a, b) {
        var e = c.v(),
          f = b.Oh || {},
          l = this.b.o
        l.V ||
          'nonlinear' === f.RI ||
          ((f = a.type !== r.yj),
          !this.b.ea.zi() && f && this.n(d.O, { Fa: this.b.o.Fa, q: e, K: !0, Ya: l.Ya }),
          this.nn(),
          this.ln(e),
          !l.He && l.Tb) ||
          ((l = ['playState', d.X]),
          (e = { q: e || c.v(), K: !0 }),
          !c.g.l.pf() || (f && null == b.errorCode)
            ? this.n(l, e)
            : c.C.ka(this.n, 0, this, [l, e]))
      },
    }),
    bb
  bb = c.j(u, {
    k: g.f,
    zp: { cw: 'preload', bw: 'postmedia' },
    Ow: {
      position: 'absolute',
      top: '0',
      left: '0',
      visibility: 'hidden',
      width: '100%',
      height: '100%',
    },
    Qw: { backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' },
    Rq: !0,
    Sq: !0,
    Jf: null,
    ue: null,
    If: null,
    p: function () {
      bb.prototype.t.p.call(this)
      var a = this.b.w.Md
      this.b.w.gg && (a.Qm = null)
      this.Vp(a)
    },
    ca: function () {
      this.kn()
    },
    u: function (a) {
      a[d.O] = this.vm
      a[d.ua] = this.gm
      ;(this.b.w.Rb || {}).lg || ((a[d.X] = this.pi), (a.rendererready = this.Wm))
    },
    Wm: function () {
      this.Sq && ((this.Sq = !1), this.kn())
    },
    L: function (a) {
      a[d.bd] = this.vF
      a.uiready = this.HE
      a[r.ep] = this.pi
      a[r.Cj] = this.pi
    },
    bn: function (a) {
      var b = this.b.w.Rb || {}
      b.lg &&
        (a.push({ La: 0.1, ja: this.pi, scope: this }),
        null != b.Cs &&
          null != b.Bs &&
          a.push({ La: b.Cs / 1e3, ui: !0, ja: this.py, scope: this }))
    },
    py: function () {
      this.ue &&
        ((this.If = c.W.eb.gi({ M: this.ue, Qi: 0, ai: (this.b.w.Rb || {}).Bs })),
        this.If.Dc().Pb())
    },
    Vp: function (a) {
      a = a || {}
      this.Jf = this.dq(a.Qm, this.zp.cw)
      this.ue = this.dq(a.FE, this.zp.bw)
      this.Ys()
      this.gm()
    },
    vm: function (a, b) {
      this.Rq
        ? (this.Rq = !1)
        : b.K ||
          (this.If && (this.If.stop(), (this.If = null)),
          c.h.Jd(this.Jf),
          c.h.Jd(this.ue),
          this.Vp(b.Md),
          this.kn())
    },
    dq: function (a, b) {
      if (a) return (a = c.jg(a) ? a : this.Qx(a, b)), this.Xw(a)
    },
    Qx: function (a, b) {
      var e = c.h.kb('div')
      e.id = 'airy-slate-' + b
      c.h.Ja(
        e,
        c.F(
          { backgroundColor: this.b.w.backgroundColor, backgroundImage: 'url(' + a + ')' },
          this.Qw,
        ),
      )
      return e
    },
    Xw: function (a) {
      c.h.Ja(a, this.Ow)
      c.h.UC(a, this.b.xg)
      return a
    },
    pi: function () {
      this.Ys()
      this.gm()
      var a = this.b.$.s(n.oc)
      a && a.enable()
    },
    kn: function () {
      this.yr(this.Jf)
    },
    Ys: function () {
      this.Hq(this.Jf)
    },
    vF: function () {
      this.yr(this.ue)
    },
    gm: function () {
      this.Hq(this.ue)
    },
    yr: function (a) {
      a && (c.h.Ni(a, 'visible'), this.Iq())
    },
    Hq: function (a) {
      a && c.h.Ni(a, 'hidden')
    },
    HE: function () {
      !this.Jf || this.b.o.V || this.b.o.Ra || this.Iq()
    },
    Iq: function () {
      c.g.l.pc() || this.b.$.N(n.oc, 0)
    },
  })
  var Gb = (A.BUILD_NAME = 'Skin'),
    zc = (A.VERSION = '2.0.1460.0')
  t.Airy = A
  var Hb = {},
    Ib = new G('Resource')
  A.addResource = function (a, b) {
    Hb[a] = b
    Ib.H('resourceadded', { Rt: a, $m: b })
  }
  A.getFlashVersion = c.Gd(c.Ic.Ls, c.Ic)
  A.isInlinePlaybackSupported = function () {
    return !!c.g.l.yo()
  }
  A.isMobilePlatform = function () {
    return !!c.g.l.Aa()
  }
  var y = {}
  y.ld = c.j(T, {
    constructor: function (a) {
      void 0 !== a && c.F(this, a ? new y.rv() : new y.Qn())
    },
  })
  y.Qn = c.j(T, {
    mw: 'rtmp:',
    lw: 'rtmpe:',
    ku: ['video/mp4', 'video/flv', 'video/x-flv'],
    Et: 'video/mp4',
    an: function (a, b, e) {
      a = c.filter(a, this.pD, this)
      var d = c.filter(a, this.Hl, this)
      d && d.length && (a = d)
      d = c.find(a, this.cz, this) || c.Xf(a)
      b.call(e, d, a)
    },
    cz: function (a, b) {
      return this.gb(b) === this.Et
    },
    pD: function (a, b) {
      return !this.hD(b) && this.Je(this.gb(b))
    },
    hD: function (a) {
      a = c.Ka(a) ? a : a.url
      return this.fz(a)
    },
    fz: function (a) {
      return null != a && (0 === a.indexOf(this.mw) || 0 === a.indexOf(this.lw))
    },
    Je: function (a) {
      return c.some(this.ku, function (b, c) {
        return a === c
      })
    },
  })
  y.rv = c.j(y.Qn, {
    Et: 'application/x-mpegURL',
    ku: [
      'application/x-mpegURL',
      'application/vnd.com.unicornmedia.once',
      'video/mp4',
      'video/flv',
      'video/x-flv',
    ],
  })
  A.flashEventCallbacks = A.flashEventCallbacks || {}
  y.lo = function (a) {
    this.xb = a.I
    this.jy = a.gC || c.J
    this.kA = a.scope || this
    this.Kq = c.De()
    this.Mp = A.flashEventCallbacks[this.Kq] = {}
  }
  y.lo.prototype = {
    DB: function (a) {
      var b = this.GB(a)
      if (this.Mp[a]) return b
      this.Mp[a] = this.Gx(a)
      return b
    },
    Gx: function () {
      var a = this
      return function (b, e) {
        var d = c.Eo.OB(e),
          d = G.nt(d)
        a.jy.call(a.kA, b, d)
        a.xb.H(b, d)
        return !0
      }
    },
    GB: function (a) {
      return "Airy.flashEventCallbacks['" + this.Kq + "']['" + a + "']"
    },
  }
  y.kf = c.j(xa, {
    type: 'flashbasic',
    mv: 2e3,
    Tn: 'airy-flash-to-front',
    p: function (a) {
      a.Xa.Ed && 'application/x-mpegURL' === this.Zs && (this.type = 'flashhls')
      var b = (this.ji = c.F({}, this.QB, this.ji))
      b.bgcolor = a.w.backgroundColor
      this.lx(b) && (b.wmode = 'opaque')
      var e = (this.Ae = c.F({}, this.RB, this.Ae))
      e.bindings = this.Fx(a)
      e.isLiveStream = a.w.fa
      var f = (this.id = this.id || c.De())
      ;(this.r = c.h.Wl('object', a.xg))
        ? c.C.ka(this.cq, 0, this)
        : (this.Sh('swfready', this.cq, this),
          this.Z(t, 'unload', function () {
            a.I.H(d.YG)
          }),
          (this.Mq = 'flashhls' === this.type ? c.h.bg() : c.h.ag()),
          (this.ty = c.C.ka(this.uy, this.mv, this)),
          this.Sh('swfready', this.ox, this),
          (this.cy = [
            a.xg,
            {
              url: this.Si,
              id: f,
              Ae: e,
              yE: b,
              style: c.F(
                {
                  display: 'block',
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  overflow: 'hidden',
                },
                this.Mq,
              ),
            },
          ]),
          this.bi())
    },
    bi: function () {
      return (this.r = c.Ic.bi.apply(c.Ic, this.cy))
    },
    QB: { allowscriptaccess: 'always', quality: 'autohigh', wmode: 'opaque' },
    RB: { hostname: t.location.hostname, mimetypeonce: 'application/vnd.com.unicornmedia.once' },
    lx: function (a) {
      return 'direct' === a.wmode && (c.g.l.Og() || (c.g.l.xp() && c.g.l.dd()))
    },
    Fx: function (a) {
      function b(a, b) {
        f[b] = e.DB(b)
      }
      var e = new y.lo({ I: a.I, gC: this.Zy, scope: this }),
        f = {}
      c.m(k, b)
      c.m(H, b)
      c.m(p, b)
      c.m(
        ['swfready', 'rendererready', 'renderingmodeselected', d.hf, d.gf, d.Ua, d.oa, d.Jj, d.qa],
        b,
      )
      return f
    },
    Zy: function (a, b) {
      var c = this.Js(a)
      null == b.K && (b.K = c)
    },
    cq: function () {
      this.Ha('_createScopedWrapper', this.k, this.Zs)
    },
    uy: function () {
      c.h.Ja(this.r, c.h.bg())
      c.h.Rf(this.r, this.Tn)
      this.b.I.H(d.qo, { k: this.k })
    },
    ox: function () {
      clearTimeout(this.ty)
      c.C.ka(
        function () {
          c.h.Ja(this.r, this.Mq)
          c.h.Fi(this.r, this.Tn)
        },
        0,
        this,
      )
    },
    Db: function () {
      return this.Ha('_getPlayheadTimeSeconds', this.k)
    },
    ht: function () {
      return !!this.Ha('_isReady', this.k)
    },
    lm: function () {
      return !!this.Ha('_isDoneBufferingWhilePaused', this.k)
    },
    CF: function () {
      this.Ha('_startRebufferDetectionStrategy', this.k)
    },
    HF: function () {
      this.Ha('_stopRebufferDetectionStrategy', this.k)
    },
    Ha: function (a) {
      if (this.r && this.r[a])
        try {
          var b = B.call(arguments, 1)
          return this.r[a].apply(this.r, b)
        } catch (c) {}
      else this.b.I.H('renderernotready', { k: this.k })
    },
  })
  y.pa = c.j(Ab, {
    p: function () {
      var a = new y.ld(this.b.Xa.Ed)
      y.pa.prototype.t.p.call(this, a)
      this.mz()
    },
    u: function (a) {
      y.pa.prototype.t.u.call(this, a)
      a[d.R] = this.pause
      a[d.X] = this.play
      a[d.ua] = this.Yc
      a[d.va] = this.seek
      a[d.Gc] = this.wu
      a[d.O] = this.S
      a[d.Ca] = this.hn
      a[k.Yb] = this.Cm
      a[k.nc] = this.rg
    },
    L: function (a) {
      a[d.Rd] = this.Rh
      a[d.Za] = this.detach
    },
    mz: function () {
      c.m(this.iy, this.nz, this)
    },
    nz: function (a, b) {
      this[a] = c.C.ze(b, 0, this)
    },
    Rh: function () {
      this.r = this.B.bi()
    },
    detach: function () {
      y.pa.prototype.t.detach.apply(this, arguments)
      this.B.Ha('_cleanUp', this.k)
      c.Ic.TB(this.r)
      this.r = null
    },
    iy: {
      Cm: function () {
        this.B.Ha('_pauseForRebuffering', this.k)
      },
      rg: function () {
        this.B.Ha('_resumeFromRebuffering', this.k)
      },
      im: function () {
        this.B.Ha('_hide', this.k)
      },
      Te: function () {
        y.pa.prototype.t.Te.call(this)
        this.B.Ha('_show', this.k)
      },
      pause: function () {
        y.pa.prototype.t.pause.apply(this, arguments)
        this.B.Ha('_pause', this.k)
      },
      play: function () {
        y.pa.prototype.t.play.apply(this, arguments)
        this.B.Ha('_play', this.k)
      },
      Vm: function () {
        this.B.Ha('_reload', this.k)
      },
      Yc: function () {
        var a = { K: !0 }
        this.B.Ig(d.oa, a)
        this.B.Ig(d.qa, a)
        this.B.Ha('_replay', this.k)
      },
      seek: function (a, b) {
        y.pa.prototype.t.seek.apply(this, arguments)
        this.B.Ha('_seek', this.k, b.Xb)
      },
      Mi: function (a, b, c) {
        this.B.Ha('_setVideoUrl', this.k, a, b, c)
      },
      hn: function (a, b) {
        this.B.Ha('_setVolume', this.k, c.bc.bound(b.ya, 0, 1))
      },
    },
  })
  var m = { G: {} }
  m.ld = c.j(T, {
    constructor: function (a, b) {
      this.Rr = a || c.h.kb('video')
      this.dr = new c.Ba.ab()
      this.pz = this.dr.pt
      this.fy = b
    },
    Uk: {
      Chrome: 'video/webm',
      Firefox: 'video/webm',
      iPad: 'application/x-mpegURL',
      iPhone: 'application/x-mpegURL',
      iPod: 'application/x-mpegURL',
      MSIE: 'video/mp4',
      Safari: 'application/x-mpegURL',
      Trident: 'video/mp4',
    },
    an: function (a, b, e) {
      a = c.C.Q(this.Qz, this, a, b, e)
      this.pz ? (this.dr.rB() ? a() : b()) : a()
    },
    Qz: function (a, b, e) {
      c.g.l.ub() && !c.g.l.xw() && (a = c.filter(a, this.ID, this))
      a = this.Ky(a)
      b.call(e, this.Rz(a), a)
    },
    Ky: function (a) {
      a = this.Hy(a)
      var b = c.g.bm(),
        b = a[this.Uk[b]] || []
      b.length || ((b = c.Xf(c.keys(a))), (b = a[b]))
      return b
    },
    Rz: function (a) {
      var b = c.filter(a, this.Hl, this) || []
      b.length && (a = b)
      return c.Xf(a)
    },
    Hy: function (a) {
      var b = {}
      c.m(
        a,
        function (a, d) {
          var l = this.gb(d)
          this.Je(l) && c.Xr(b, l, d)
        },
        this,
      )
      return b
    },
    Je: function (a) {
      if (!this.Rr.canPlayType) return !1
      switch (a) {
        case 'application/x-shockwave-flash':
        case 'video/flv':
        case 'video/x-flv':
          return !1
        case 'video/quicktime':
          return !1
        case 'application/x-mpegURL':
          if (c.g.l.Mb()) {
            if (!this.fy) return !1
            if (c.g.l.Ru()) return !0
          }
          break
        case 'application/vnd.com.unicornmedia.once':
          a = 'video/mp4'
          break
        case 'video/webm':
          if (c.g.l.ub()) return !1
      }
      return this.Rr.canPlayType(a)
    },
  })
  m.wp = function () {
    this.ud = {}
  }
  m.wp.prototype = {
    GA: function (a) {
      var b = []
      c.m(
        this.ud,
        function (a, d) {
          if (d) {
            var l = d.M,
              g = this.Ee(d.Cc)
            c.jg(g) ? c.h.fc(l, g) : d.Cc || b.push(l)
          }
        },
        this,
      )
      c.m(b, function (b, d) {
        c.h.fc(d, a)
      })
    },
    eB: function () {
      c.m(
        this.ud,
        function (a, b) {
          b &&
            (c.m(c.wi(b.Es, c.h.zm), b.bind, b),
            c.m(
              b.Sl,
              function (a, d) {
                var l = this.s(d)
                l && c.m(b.Es, l.bind, l)
              },
              this,
            ))
        },
        this,
      )
      return this
    },
    ME: function (a) {
      c.m(
        a,
        function (a, c) {
          c && (this.ud[a] = c)
        },
        this,
      )
      return this
    },
    bind: function (a, b, c, d) {
      a = this.s(a)
      if (!a) return this
      a.bind(b, c, d)
      return this
    },
    remove: function (a) {
      var b = this.s(a)
      this.ud[a] = null
      if (!b) return this
      b.remove()
      return this
    },
    Ee: function (a) {
      if ((a = this.s(a))) return a.M
    },
    s: function (a) {
      if (this.ud && (a = this.ud[a])) return a
    },
    Ea: function (a, b) {
      var c = this.s(a)
      if (!c) return this
      c.Ea(b)
      return this
    },
    show: function (a, b, c) {
      a = this.s(a)
      if (!a) return this
      a.show(b, c)
      return this
    },
    N: function (a, b, c) {
      a = this.s(a)
      if (!a) return this
      a.N(b, c)
      return this
    },
  }
  var Jb = c.j(u, {
      view: null,
      p: function () {
        Jb.prototype.t.p.apply(this, arguments)
        this.jl = []
      },
      mF: function (a) {
        this.view = a
        return this
      },
      u: function (a) {
        c.F(a, c.map(this.view.gc.Qe, this.zx, this))
        return this
      },
      zx: function (a, b) {
        return this.jk(b, b.pn)
      },
      bind: function () {
        if (!this.view) return this
        this.xe(this.u, c.La(g))
        var a = c.wi(this.view.gc.Ne, c.h.zm)
        c.m(a, this.$w, this)
        return this
      },
      wB: function () {
        c.m(this.jl, function (a, b) {
          clearTimeout(b)
        })
        this.jl = []
        return this
      },
      $w: function (a, b) {
        c.m(
          this.Ny(b.getTriggerIds()),
          function (c, d) {
            this.ax(a, b, d)
          },
          this,
        )
      },
      Ny: function (a) {
        a = c.map(a, this.zy, this)
        a = c.compact(a) || []
        if (a.length) return a
        a.push(this.b.Na)
        return a
      },
      zy: function (a, b) {
        return this.b.$.Ee(b)
      },
      ax: function (a, b, c) {
        var d = this.jk(b, b.AF, c)
        this.Z(c, a, d)
        b.hasInactivityAnimation() && ((a = this.jk(b, b.sB, c)), this.Z(c, z.Sg, a))
      },
      jk: function (a, b, e) {
        return c.ob(this.Kx(a, b, e), this.Oz, this)
      },
      Oz: function (a, b) {
        var c = a.call(this, b)
        null != c && this.jl.push(c)
      },
      Kx: function (a, b, e) {
        var d = this.view
        return c.C.ze(
          function (l) {
            d.Wc && b.call(a, c.Kd(l), e)
          },
          0,
          this,
        )
      },
    }),
    Kb = c.j(u, {
      k: g.f,
      p: function () {
        this.Bk = this.Gk = this.Hk = this.Bf = !1
      },
      u: function (a) {
        var b = c.ob(this.au, this.$j, this),
          e = c.ob(this.show, this.$j, this),
          f = c.ob(this.N, this.$j, this)
        a[d.X] = b
        a[k.Yb] = e
        a[d.Td] = this.sF
        a[d.va] = e
        a[d.ua] = this.uF
        a[k.nc] = this.rg
        a[k.pb] = this.RC(f)
        a[k.Wd] = this.hC(this.Qy)
        a[k.za] = f
        a[d.O] = f
        a[d.qc] = this.tF
        a[d.oa] = this.OC
        a[d.qa] = f
        a[d.Mj] = f
        a[D.$d] = f
        a[D.ia] = f
      },
      bF: function (a) {
        var b = c.ob(this.show, this.Ap, this),
          e = c.ob(this.N, this.Ap, this)
        a[k.Yb] = b
        a[d.va] = b
        a[k.nc] = e
        a[k.pb] = e
        a[k.za] = e
        a[d.qa] = e
      },
      L: function (a) {
        a[C.Ng] = this.au
        a[C.ge] = this.N
        a[d.bd] = this.N
        a[r.kw] = this.sa
        a[r.yj] = this.ma
        a[r.Cj] = this.sa
        a[r.ac] = this.ma
        a.hideloadingspinner = this.N
        a.uiready = this.tE
      },
      bind: function () {
        this.xe(this.bF, g.aa)
        return Kb.prototype.t.bind.apply(this, arguments)
      },
      tE: function () {
        var a = this.b.o
        ;(!a.Ra && !a.hg) || a.hb || this.show()
      },
      au: function (a) {
        this.b.o.hb || this.show(a)
      },
      show: function () {
        this.n(d.ip)
      },
      N: function () {
        this.n(d.vo)
      },
      $j: function (a, b, c) {
        this.Bf || a.call(this, b, c)
      },
      Ap: function (a, b, c) {
        this.Bf && a.call(this, b, c)
      },
      sa: function (a) {
        this.Bf = !0
        this.show(a)
      },
      ma: function (a) {
        this.Bf = !1
        this.b.o.hb ? this.N(a) : this.show(a)
      },
      uF: function (a) {
        this.Hk = !0
        this.show(a)
      },
      tF: function (a) {
        this.Gk = !0
        this.show(a)
      },
      sF: function (a) {
        this.Bk = !0
        this.show(a)
      },
      OC: function (a) {
        this.Bk && (this.N(a), (this.Bk = !1))
        if (this.Hk || this.Gk) (this.Hk = this.Gk = !1), this.N(a)
      },
      rg: function () {
        this.b.o.Xc || this.Bf || this.N()
      },
      RC: function (a) {
        return this.b.ea.rn() ? c.J : a
      },
      hC: function (a) {
        return this.b.ea.rn() ? a : c.J
      },
      Qy: function (a, b) {
        0 !== b.U && this.N()
      },
    }),
    Lb = c.j(w, {
      kF: function (a, b, e) {
        var d = b.inactivity || {}
        e = e || {}
        e.GF = e.GF || c.J
        c.F(this, {
          hh: a,
          nA: c.Ia(b.triggerIds),
          Ak: !!b.type,
          yf: !!d.type,
          Ww: b.delay || 0,
          Sy: d.delay || 0,
          Py: d.exception,
          EI: !1,
          Xk: 0,
          sf: e,
          Yx: b.disablingPlayerEvents,
          gy: b.enablingPlayerEvents,
          se: !0,
        })
        this.eh = this.aq(a, b)
        this.Af = this.aq(a, d)
        return this
      },
      fF: function (a) {
        this.se = a
      },
      getTriggerIds: function () {
        return this.nA
      },
      hasInactivityAnimation: function () {
        return this.yf
      },
      bind: function () {
        this.xe(this.Tz, c.La(g))
        this.xe(this.Wz, c.La(g))
        return this
      },
      Tz: function (a) {
        this.Yp(a, this.Xx, this.Yx)
      },
      Wz: function (a) {
        this.Yp(a, this.ey, this.gy)
      },
      Yp: function (a, b, e) {
        var d = c.C.Q(b, this)
        c.m(
          e,
          function (b, c) {
            a[c] = d
          },
          this,
        )
      },
      Xx: function () {
        this.se = !1
        this.Ri()
      },
      Ri: function () {
        this.Ak && (this.eh.stop(), this.yf && this.Af.stop())
      },
      ey: function () {
        this.se = !0
      },
      aq: function (a, b) {
        var e = c.W.EF[b.type]
        if (e) {
          var f = {
              Ml: b.disableOnCompletion,
              ai: b.duration || 0,
              M: a,
              Pl: b.enableOnStart,
              Qi: b.startValue,
              Ta: b.targetValue,
            },
            l = this
          f.Dg = function (a) {
            l.n(d.Fu, c.F({ as: c.W.wC(b.type, f), bs: a, q: c.v() }, l.sf.cB || {}))
          }
          return e.call(c.W.eb, f)
        }
      },
      AF: function (a, b) {
        this.se && this.Ak && this.xr(a, b) && this.pn()
      },
      pn: function () {
        var a = this.sf,
          b = a.Sr,
          e = this.eh,
          d = this.Af
        ;(e.ZC() || e.hc) && this.yf && a.fg && d.Ql(b)
          ? (this.Xk = c.v())
          : (b && (b.hc || a.fg) && (b.stop(), clearTimeout(a.Il)),
            this.vh(this.eh, this.Ww, function () {
              this.yf &&
                (this.Zt
                  ? (this.Zt = !1)
                  : ((this.Xk = c.v()), this.vh(this.Af, this.Sy, null, this.Yz)))
            }))
      },
      vh: function (a, b, e, d) {
        var l = arguments,
          g = this.sf,
          h = this
        c.F(g, {
          fg: !0,
          Sr: a,
          Il: setTimeout(function () {
            if (!h.se) g.fg = !1
            else if (!d || d.apply(h, l)) a.Dc().Pb(), (g.fg = !1), e && e.call(h)
          }, b),
        })
      },
      Yz: function (a, b, e, d) {
        b = this.Xk + b - c.v()
        if (0 >= b) return !0
        clearTimeout(this.sf.Il)
        this.vh(a, b, e, d)
        return !1
      },
      sB: function (a) {
        if (this.se && this.Ak && this.yf) {
          var b = this.sf,
            c = this.eh,
            d = b.Sr
          this.Py && this.xr(a, this.hh)
            ? c.Ql(d) && b.fg
              ? (this.Zt = !0)
              : this.Af.Ql(d) && (this.Af.stop(), clearTimeout(b.Il), this.vh(c, 0))
            : this.pn()
        }
      },
      xr: function (a, b) {
        var e = a.relatedTarget
        switch (a.type) {
          case z.Sg:
          case z.qb:
            return (e = a.target || a.srcElement), c.h.jm(e, b)
          case z.zj:
            e = e || a.toElement
            break
          case z.So:
            e = e || a.fromElement
        }
        return !c.h.jm(e, b)
      },
    })
  ob.prototype = {
    ul: function () {
      return c.map(
        Lb.prototype,
        function (a, b) {
          return c.mm(b) ? c.ob(b, this.zA, this) : b
        },
        this,
      )
    },
    zA: function (a) {
      var b = this.xy()
      if (b) return a.apply(b, B.call(arguments, 1))
    },
    xy: function () {
      var a = this.xA.mi().gc
      if (a) return (a = this.az ? a.Ne : a.Qe), (a || {})[this.ky]
    },
  }
  nb.prototype = {
    parse: function (a, b, e, d, l, g) {
      e = this.mr(c.F({}, e, a.style))
      b = this.Xp(a, b)
      var h = this.Dx(a.mouseEvents, b, e)
      a = c.map(this.wx(a.animations || {}, l || {}), this.vx(d, g), this)
      return new S(b, e, h, a)
    },
    wx: function (a, b) {
      return { Ne: this.Wp(a, b, 'mouseEvents'), Qe: this.Wp(a, b, 'playerEvents') }
    },
    Wp: function (a, b, e) {
      return c.F({}, b[e] || {}, a[e] || {})
    },
    vx: function (a, b) {
      return function (e, d) {
        return c.map(d, this.xx(a, b), this)
      }
    },
    xx: function (a, b) {
      return function (c, d) {
        return new Lb(this.ik).kF(a, d, b).bind()
      }
    },
    Dx: function (a, b, e) {
      return c.map(
        a,
        function (a, d) {
          var g = d.style
          return this.mr({ El: this.Xp(d, b).join(' '), style: g ? c.F({}, e, g) : {} })
        },
        this,
      )
    },
    Xp: function (a, b) {
      return c.h.rl(a.classNames || b, a.addClassNames, a.removeClassNames)
    },
    mr: function (a) {
      if (c.g.l.ce()) return a
      a.filter = void 0
      return a
    },
  }
  mb.prototype = {
    parse: function (a, b, e) {
      var d = c.h.kb(a.type || 'div')
      e = c.F({}, e, a.style)
      b = a.classNames || b || []
      b = c.Kd(b)
      b.push('airy-' + c.wa.qB(a.id))
      b = c.h.rl(b, a.addClassNames, a.removeClassNames)
      b = this.Ux(a.states || { view: {} }, b, e, d, a.id, a.animations)
      return new pb({
        M: d,
        id: a.id,
        Cc: a.parentId,
        lC: a.fastClick,
        Sl: a.eventLinkedViewIds || [],
        SB: a.defaultStateId || 'view',
        ZF: b,
      })
    },
    Ux: function (a, b, e, d, l, g) {
      if (a) {
        var h = { cB: { D: l } }
        return c.map(
          a,
          function (a, c) {
            return this.gA.parse(c, b, e, d, g, h)
          },
          this,
        )
      }
    },
  }
  lb.prototype = {
    parse: function (a) {
      var b = {}
      c.m(
        a.views,
        function (c, d) {
          var l = this.yA.parse(d, a.classNames, a.style).refresh()
          b[l.id] = l
        },
        this,
      )
      return b
    },
  }
  m.G.EG = c.j(w, {
    D: n.Ku,
    k: g.f,
    ba: function () {
      return c.g.l.Aa()
    },
  })
  m.G.FG = c.j(w, {
    D: n.Lu,
    ba: function () {
      return c.g.l.Aa()
    },
  })
  m.G.bj = c.j(ea, {
    D: n.Mu,
    p: function () {
      m.G.bj.prototype.t.p.apply(this, arguments)
      this.zg = this.b.$.s(n.Nu)
      this.by = new Fb(this.b, {
        D: this.D,
        Oe: c.C.Q(this.Oe, this),
        Hd: c.C.Q(this.Hd, this),
      }).bind()
    },
    u: function (a) {
      a[d.Ca] = this.Tc
      m.G.bj.prototype.t.u.apply(this, arguments)
    },
    ca: function () {
      this.Tc(null, { ya: this.b.o.volume })
    },
    la: function () {
      this.by.la()
      return m.G.bj.prototype.t.la.apply(this, arguments)
    },
    Tc: function (a, b) {
      var e = this.s(),
        d = this.b.$.Ee(e.Cc),
        e = parseInt(c.h.xc(e.M, 'height'), 10)
      ;(d = parseInt(c.h.xc(d, 'height'), 10)) && this.OA(b.ya * (1 - e / d) * 100 + '%')
    },
    OA: function (a) {
      this.s().Sf({ bottom: a })
      this.zg && this.zg.Sf({ height: a })
    },
    Hd: function () {
      this.n(d.fb, { D: this.D, q: c.v() })
    },
    Oe: function (a) {
      var b = c.v(),
        e = c.h.getParent(this.s().M),
        f = e.offsetHeight
      f &&
        ((a = this.ye(a, e)),
        (f = c.bc.bound(1 - a.y / f, 0, 1)),
        this.n(d.Ca, { q: b, ya: f, volume: this.b.o.volume }))
    },
  })
  m.G.Tu = c.j(ea, {
    D: n.Ou,
    Jg: d.Jg,
    Kg: d.Kg,
    ba: function () {
      return c.g.l.Aa()
    },
    u: function (a) {
      a[d.Ca] = this.Tc
      a[d.O] = this.TF
      m.G.Tu.prototype.t.u.apply(this, arguments)
    },
    ca: function () {
      this.s().Ea(this.o.ti ? this.Kg : this.Jg)
    },
    Ue: function (a) {
      null != a && this.n(d.Ca, { q: c.v(), K: !0, ya: a.volume })
    },
    click: function () {
      var a = c.v()
      this.Rc()
      var b = this.o
      this.n(d.Ca, { q: a, ya: b.ti ? 0 : b.Sm || 1, volume: this.o.volume }).n(d.fb, {
        q: a,
        D: this.D,
      })
    },
    Tc: function (a, b) {
      this.s().Ea(0 < b.ya ? this.Kg : this.Jg)
    },
    TF: function () {
      this.n(d.Ca, { q: c.v(), K: !0, ya: this.o.volume })
    },
  })
  m.G.GG = c.j(ea, {
    D: n.Pu,
    click: function (a) {
      var b = c.v()
      this.Rc()
      var e = this.s().M,
        f = e.offsetHeight
      f &&
        ((a = this.ye(a, e).y / f),
        (a = 1 - c.bc.bound(a, 0, 1)),
        this.n(d.Ca, { q: b, ya: a, volume: this.o.volume }).n(d.fb, { q: b, D: this.D }))
    },
  })
  m.G.HG = c.j(M, {
    D: n.Qu,
    k: g.f,
    Zh: -1,
    Hb: !1,
    kg: !1,
    p: function () {
      this.Zh = this.b.w.$A || this.Zh
    },
    ba: function () {
      return this.b.w.fa || c.g.l.pc() || c.g.l.Aa() || !this.b.w.gg
    },
    u: function (a) {
      a[k.pb] = this.Qb
      a[d.O] = this.S
      a[d.$i] = this.ZA
      a[k.cb] = this.vg
      a[d.Zi] = this.Vc
      a[d.Fo] = this.Vc
      a[d.fb] = this.Vc
    },
    L: function (a) {
      a[d.cf] = this.Vc
      a[d.Za] = this.Vc
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    ca: function () {
      this.b.$.N(n.oc).N(n.gd)
      this.b.o.hb && this.wr()
    },
    Qb: function () {
      this.Hb || this.wr()
    },
    wr: function () {
      this.s().show()
      this.n([d.ej, d.Td], { q: c.v() })
      this.b.$.N(n.jd).show(n.Ud).bind(n.Ud, z.qb, c.C.Q(this.click, this))
      this.kg = !0
    },
    S: function () {
      this.kg && !this.Hb && ((this.Hb = !0), this.pe())
    },
    ZA: function (a, b) {
      this.kg && !this.Hb && ((this.Hb = !0), this.pe(), this.or(b.q))
    },
    or: function (a) {
      return this.n(d.Ca, { q: a, K: !0, ya: 1 })
        .n(d.R, { q: a, K: !0 })
        .n(d.va, { U: this.b.o.U, q: a, K: !0, T: this.b.o.T, Xb: 0 })
    },
    vg: function () {
      this.kg &&
        !this.Hb &&
        this.Wq(this.b.o) &&
        (this.n(d.R, { q: c.v(), K: !0 }), this.s().Ea('play'))
    },
    Vc: function () {
      !this.kg || this.Hb || this.Wq(this.b.o) || ((this.Hb = !0), this.pe())
    },
    Wq: function (a) {
      var b = 0 > this.Zh ? a.U : this.Zh
      return 0 > b ? !1 : a.T >= b
    },
    click: function () {
      if (!this.Hb) {
        this.Hb = !0
        var a = c.v()
        this.pe()
        this.or(a).n(d.Ma, { q: a }).n([d.fb, d.ah], { D: this.D, q: a })
      }
    },
    pe: function () {
      this.b.$.remove(n.Ud).show(n.gd)
      var a = this.b.$.s(n.oc)
      a && !a.Sa && a.show()
    },
    sa: function () {
      this.Hb || (this.s().N(), this.b.$.N(n.Ud))
    },
    ma: function () {
      this.Hb || (this.s().show(), this.b.$.show(n.Ud))
    },
  })
  m.G.IG = c.j(w, {
    D: n.Ud,
    ba: function () {
      return c.g.l.pc()
    },
  })
  m.G.VG = c.j(w, {
    D: n.xI,
    k: g.f,
    u: function (a) {
      a[d.O] = this.S
    },
    ca: function () {
      this.Vt(this.b.o.vc)
    },
    S: function (a, b) {
      this.Vt(b.vc)
    },
    Vt: function (a) {
      a && (this.s().M.innerHTML = a)
    },
  })
  m.G.WG = c.j(M, {
    Vn: 'airy-ads-ux-show',
    D: n.oc,
    k: g.f,
    dc: !1,
    ba: function () {
      return !this.b.ea.Kb()
    },
    L: function (a) {
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    sa: function () {
      this.b.w.mb.Om ? c.h.Rf(this.Ce(), this.Vn) : ((this.dc = this.s().Sa), this.s().N())
    },
    ma: function () {
      this.b.w.mb.Om ? c.h.Fi(this.Ce(), this.Vn) : this.dc && this.s().show()
    },
    click: function (a) {
      c.h.Eg(a)
      this.Rc()
    },
  })
  m.G.XG = c.j(w, {
    D: n.$u,
    k: g.f,
    u: function (a) {
      a[d.O] = this.Zc
      a[d.va] = this.seek
      a[d.qa] = this.UF
      a[d.gp] = this.update
      a[k.cb] = this.vg
    },
    ca: function () {
      this.Zc()
    },
    Zc: function () {
      this.s().Jb('0:00')
    },
    seek: function (a, b) {
      this.ml(b.Xb)
    },
    vg: function (a, b) {
      this.b.o.Xc || this.ml(b.T)
    },
    UF: function (a, b) {
      var e = this.b.o.wn
      ;(c.g.l.sb() && P.nm(e)) || this.update(a, b)
    },
    update: function (a, b) {
      this.ml(b.T)
    },
    ml: function (a) {
      ;(a = c.ke.Tt(a)) && this.s().Jb(a)
    },
  })
  m.G.ZG = c.j(w, {
    D: n.cv,
    k: g.f,
    ba: function () {
      return this.b.w.fa
    },
    u: function (a) {
      a[d.O] = this.Zc
      a[k.Wd] = this.aC
    },
    ca: function () {
      this.Zc()
    },
    Zc: function () {
      this.s().Jb('0:00')
    },
    aC: function (a, b) {
      var e = c.ke.Tt(b.U)
      this.s().Jb(e)
    },
  })
  m.G.qH = c.j(w, {
    D: n.Dv,
    k: g.f,
    ba: function () {
      return !this.b.w.fa
    },
    ca: function () {
      this.s().Jb('LIVE')
    },
  })
  m.G.rH = c.j(w, {
    Gu: 2e3,
    jp: 250,
    D: n.Fv,
    k: g.f,
    Nf: null,
    p: function () {
      this.b.w.Qa && this.b.w.Qa.bu && (this.jp = this.b.w.Qa.bu)
    },
    ba: function () {
      this.Uf = new c.W.Lj({ M: this.s().M, Ta: 360, ai: this.Gu, pm: !0 })
      return c.g.l.pc() || this.Uf.YC()
    },
    u: function (a) {
      a[d.ip] = this.show
      a[d.vo] = this.N
    },
    ca: function () {
      this.Uf.Dc()
    },
    show: function (a) {
      a = a || {}
      this.s().Sa ||
        this.Uf.hc ||
        this.Nf ||
        (clearTimeout(this.Nf), (this.Nf = c.C.ka(this.aA, this.jp, this, [a])))
    },
    aA: function () {
      this.s().show()
      this.Uf.Pb()
    },
    N: function () {
      clearTimeout(this.Nf)
      this.Nf = null
      this.s().Sa && (this.s().N(), this.Uf.stop())
    },
  })
  m.G.sH = c.j(w, {
    D: n.Gv,
    ba: function () {
      return c.g.l.pc()
    },
  })
  m.G.Ej = c.j(ea, {
    D: n.Xv,
    Pq: !0,
    pl: !0,
    R: d.R,
    X: d.X,
    Ma: d.Ma,
    Uo: 'pauseState',
    Wv: 'playState',
    u: function (a) {
      a[d.O] = this.S
      a[k.Zb] = this.pause
      a[d.ua] = this.play
      a[this.R] = this.pause
      a[this.X] = this.play
      m.G.Ej.prototype.t.u.apply(this, arguments)
    },
    sa: function () {
      this.pl = !1
    },
    ma: function () {
      this.pl = !0
      m.G.Ej.prototype.t.ma.apply(this, arguments)
    },
    ca: function () {
      this.Ue()
    },
    Ue: function () {
      this.s().Ea(this.o.Ra ? this.R : this.X)
    },
    click: function () {
      var a = c.v(),
        b = this.o
      this.Rc()
      if (b.Tb) this.n(d.ua, { q: a })
      else {
        var e = this.pl && b.He ? this.Ma : [this.X, this.Wv]
        this.n(b.V ? [this.R, this.Uo] : e, { q: a, si: !0 }).n(d.fb, { D: this.D, q: a })
      }
    },
    S: function () {
      this.pause()
    },
    play: function (a, b) {
      b = b || {}
      this.Ea(this.R, b.si)
    },
    pause: function (a, b) {
      b = b || {}
      this.Ea(this.X, b.si)
    },
    Ea: function (a, b) {
      this.s().Ea(a, !this.Pq && b)
    },
  })
  m.G.Kc = c.j(m.G.Ej, {
    D: n.Ug,
    l: c.g.l,
    Pq: !1,
    p: function () {
      m.G.Kc.prototype.t.p.apply(this, arguments)
      var a = this.b.w
      this.Mf = !a.nF && (!a.gg || this.l.Aa())
      this.Ah = this.$z()
    },
    ba: function () {
      var a = this.b.w.Rb || {}
      return this.l.pc() || (a.lg && !this.l.Aa())
    },
    $z: function () {
      return (
        (c.g.l.xj() && !c.g.l.yv()) ||
        (!c.g.l.xj() && c.g.l.Mb() && !c.g.l.zo()) ||
        (c.g.l.he() && !c.g.l.Ao())
      )
    },
    u: function (a) {
      m.G.Kc.prototype.t.u.call(this, a)
      a[d.O] = c.ob(a[d.O], this.ur, this, !1)
      a[d.oa] = c.ob(a[d.oa], this.ur, this, !0)
      a[D.eo] = this.show
      a[D.$d] = this.N
      a[D.ia] = this.N
      a[d.Ma] = this.Oi
    },
    L: function (a) {
      m.G.Kc.prototype.t.L.call(this, a)
      a[C.Ng] = this.show
      a[C.ge] = this.N
      a[d.Rd] = this.show
      a[d.Za] = this.N
    },
    ca: function () {
      var a = this.o,
        b = a.V
      this.s().Ea(b ? this.R : this.X)
      this.b.$.bind(n.gd, z.qb, c.C.Q(this.click, this))
      !this.Mf || a.Ra || b || this.vq()
      this.Ah && this.s().Ll()
    },
    Ue: function () {
      m.G.Kc.prototype.t.Ue.apply(this, arguments)
      var a = this.o
      ;(!this.Mf || a.Ra || a.V) && this.cn()
    },
    click: function (a) {
      c.h.Eg(a)
      var b = c.v()
      !this.Ah && this.Mf && this.s().show(0)
      m.G.Kc.prototype.t.click.call(this, a)
      this.n(d.ah, { D: this.D, q: b })
    },
    S: function () {
      m.G.Kc.prototype.t.S.apply(this, arguments)
      this.n(this.Uo)
      !this.Mf || this.o.Ra || this.o.V || this.vq()
    },
    vq: function () {
      this.s().show(1).Ea(this.R)
    },
    Oi: function (a) {
      this.s().Ri()
      this.cn(a)
    },
    play: function () {
      !this.Ah && this.Mf && this.cn()
      m.G.Kc.prototype.t.play.apply(this, arguments)
    },
    cn: function () {
      this.s().show(0)
    },
    Ea: function (a, b) {
      this.Ah || m.G.Kc.prototype.t.Ea.call(this, a, b)
    },
    N: function () {
      this.s().N()
    },
    show: function () {
      this.s().show()
    },
    ur: function (a, b, e, d) {
      a && a(e, d)
      ;(!c.g.l.ae() && !c.g.l.be()) ||
        this.b.ea.Kb() ||
        ((a = this.s()), b ? a.N(null, !0) : a.show(null, !0))
    },
  })
  m.G.yH = c.j(ea, {
    D: n.gd,
    ba: function () {
      return c.g.l.pc()
    },
    u: function (a) {
      a.enableplaytogglehint = this.enable
      a.disableplaytogglehint = this.disable
    },
    enable: function () {
      this.s().show(null, !0)
    },
    disable: function () {
      this.s().N(null, !0)
    },
  })
  m.G.zH = c.j(w, {
    D: n.dw,
    k: g.f,
    ba: function () {
      return this.b.w.fa
    },
    u: function (a) {
      a[d.O] = this.S
      a[k.cb] = this.update
      a[k.hd] = this.update
    },
    L: function (a) {
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    sa: function () {
      this.s().N(null, !0)
    },
    ma: function () {
      this.s().show(null, !0)
    },
    S: function () {
      this.Yt(0)
    },
    update: function () {
      var a = this.b.o,
        b = a.U
      b && ((b = (a.T / b) * 100), (a = a.Lb), this.Yt(b > a ? b : a))
    },
    Yt: function (a) {
      this.s().Sf({ width: c.bc.bound(a, 0, 100) + '%' })
    },
  })
  m.G.IH = c.j(M, {
    D: n.jw,
    k: g.f,
    dc: !1,
    Ek: !1,
    ba: function () {
      var a = this.b.ea
      return this.b.w.fa || c.g.l.pc() || !(a.Kb() || c.g.l.sb())
    },
    u: function (a) {
      a[d.O] = this.yl
      a[d.oa] = this.yl
      a[d.ua] = this.Wa
      a[d.va] = this.yl
    },
    L: function (a) {
      a[d.bd] = this.ended
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    ca: function () {
      this.b.$.bind(n.jd, z.qb, c.C.Q(this.click, this))
    },
    ended: function () {
      this.Ek = !0
      this.b.o.hg ||
        (this.s().show(),
        this.b.$.N(n.gd).N(n.Ug).show(n.jd).N(n.oc, 1).show(n.fp),
        (!c.g.l.ae() && !c.g.l.be()) || this.b.ea.Kb() || this.n(d.Yd, { q: c.v(), K: !0 }))
    },
    click: function (a) {
      if (this.b.o.Tb) {
        c.h.Eg(a)
        a = c.v()
        var b = this.b.o
        this.Rc()
        this.n(k.cb, { U: b.U, q: a, K: !0, T: 0, Lb: b.Lb })
          .n(d.ua, { q: a })
          .n([d.fb, d.ah], { D: this.D, q: a })
      }
    },
    yl: function () {
      this.Ek && this.Wa()
    },
    Wa: function () {
      this.Ek = !1
      this.s().N()
      this.b.$.show(n.gd).show(n.Ug).N(n.jd).show(n.oc, 0)
      ;(c.g.l.ae() || c.g.l.be()) && this.n(d.lf, { q: c.v(), K: !0 })
    },
    sa: function () {
      this.dc = this.s().Sa
      this.s().N()
      var a = this.b.$.s(n.jd)
      a && ((this.dc = this.dc && a.Sa), a.N())
    },
    ma: function () {
      this.dc && (this.b.$.show(n.jd), this.s().show())
    },
  })
  m.G.JH = c.j(w, {
    D: n.jd,
    ba: function () {
      return this.b.w.fa || c.g.l.pc()
    },
  })
  m.G.$H = c.j(M, {
    D: n.fp,
    k: g.f,
    $a: d.$a,
    bb: d.bb,
    Tq: c.g.l.sb(),
    ba: function () {
      if (!this.b.ea.Kb()) return !0
      if (this.b.w.un) return !1
      var a = c.g.l
      return a.he() || a.pf() || (a.ub() && !a.ww() && c.h.et()) || (a.Gn() && !this.b.w.RA)
        ? !0
        : !(
            this.Tq ||
            q.fullscreenEnabled ||
            q.mozFullScreenEnabled ||
            q.msFullscreenEnabled ||
            q.webkitFullscreenEnabled
          )
    },
    u: function (a) {
      this.Tq && (a[k.fd] = this.mt)
    },
    L: function (a) {
      a[d.$g] = this.yg
    },
    mt: function (a, b) {
      var c = this.b.Xa.$f(b)
      if (c && c.r && 'html' === c.type) {
        var d = this.s()
        c.r.webkitSupportsFullscreen ? d.show() : d.N()
      }
    },
    click: function () {
      var a = c.v()
      this.Rc()
      this.n(this.b.o.Gb ? this.bb : this.$a, { q: a }).n(d.fb, { D: this.D, q: a })
    },
    yg: function () {
      this.s().Ea(this.b.o.Gb ? this.bb : this.$a)
    },
  })
  m.G.aI = c.j(Fb, {
    D: n.nw,
    k: g.f,
    Lk: !0,
    oh: !1,
    Rk: null,
    dc: !1,
    p: function () {
      this.zg = this.b.$.s(n.ow)
      this.Z(q, 'mousemove', c.C.Q(this.Oe, this))
      this.Z(q, 'mouseup', c.C.Q(this.Am, this))
      this.el = this.b.w.$t
    },
    ba: function () {
      return this.b.w.fa
    },
    u: function (a) {
      a[d.O] = this.S
      a[k.cb] = this.vg
      a[d.va] = this.seek
      a[d.qa] = this.Ag
    },
    L: function (a) {
      a[r.rc] = this.sa
      a[r.ac] = this.ma
      a[d.vb] = this.tg
      a[d.je] = this.Km
    },
    sa: function () {
      this.dc = this.s().Sa
      this.s().N(null, !0)
    },
    ma: function () {
      this.dc && this.s().show(null, !0)
    },
    S: function () {
      this.en(0)
    },
    seek: function (a, b) {
      this.update(b.Xb, b.U)
    },
    Ag: function (a, b) {
      !this.xu || c.ta.toFixed(b.T) >= c.ta.toFixed(b.U) || this.n(d.X, { q: c.v() })
    },
    vg: function (a, b) {
      this.b.o.Xc || this.update(b.T, b.U)
    },
    update: function (a, b) {
      if (b) {
        this.Fd = null
        var c = a / b
        1 < c || this.en(100 * c + '%')
      }
    },
    Hd: function () {
      var a = this
      this.oh = !0
      this.Rk = setTimeout(function () {
        a.hr(c.v())
      }, cb / 2)
    },
    Am: function () {
      if (this.oh) {
        this.oh = !1
        var a = c.v()
        this.Lk = !0
        clearTimeout(this.Rk)
        var b = this.b.o,
          e = b.U
        e &&
          null != this.Fd &&
          this.n(d.va, { U: e, q: a, T: b.T, Xb: ((this.Fd || 0) * e) / 100, nb: this.xu })
      }
    },
    Oe: function (a) {
      if (this.oh) {
        var b = c.v()
        clearTimeout(this.Rk)
        this.hr(b)
        var e = c.h.getParent(this.s().M),
          f = c.h.Ps(e, this.b.o.Gb)
        f &&
          ((a = this.ye(a, e)),
          (this.Fd = c.bc.bound((a.x / f) * 100, 0, 100)),
          this.el && ((f = this.b.o.Lb), this.Fd > f && (this.Fd = f)),
          this.en(this.Fd + '%'),
          this.n(d.gp, { q: b, T: (this.Fd * this.b.o.U) / 100 }))
      }
    },
    hr: function (a) {
      a = a || c.v()
      this.Lk &&
        ((this.Lk = !1),
        (this.xu = this.b.o.V),
        this.n(d.R, { q: a, K: !0 }).n(d.fb, { D: this.D, q: a }))
    },
    en: function (a) {
      this.s().Sf({ marginLeft: a })
      this.zg && this.zg.Sf({ width: a })
    },
    tg: function () {
      this.s().N(null, !0)
    },
    Km: function () {
      this.s().show(null, !0)
    },
  })
  m.G.cI = c.j(w, {
    D: n.Bw,
    k: g.f,
    od: !1,
    Mh: !1,
    p: function () {
      this.el = this.b.w.$t
    },
    ba: function () {
      return this.b.w.fa
    },
    u: function (a) {
      a.trackbarsetoffsets = this.dn
    },
    lc: function (a) {
      a[z.jj] = this.Hd
    },
    L: function (a) {
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    sa: function () {
      this.od = !0
    },
    ma: function () {
      this.od = !1
    },
    Hd: function (a) {
      if (!this.od) {
        var b = c.v(),
          e = this.b.o.U
        this.Rc()
        if (e) {
          var d = this.s().M,
            l = c.h.Ps(d, this.b.o.Gb)
          l &&
            ((d = this.ye(a, d)),
            (l = c.bc.bound(d.x / l || 0, 0, 1)),
            (e *= l),
            (this.el && 100 * l > this.b.o.Lb) || (c.h.Rm(a), this.yh(b, e)))
        }
      }
    },
    yh: function (a, b) {
      var c = this.b.o
      this.Mh = c.V
      this.n(d.fb, { D: this.D, q: a })
      this.Mh && this.n(d.R, { q: a, K: !0 })
      this.n(d.va, { U: c.U, q: a, T: c.T, Xb: b, nb: this.Mh })
      this.Mh && this.n(d.X, { q: a, K: !0 })
    },
  })
  m.G.dI = c.j(w, {
    D: n.rp,
    k: g.f,
    u: function (a) {
      a.trackbarsetoffsets = this.dn
    },
    dn: function () {
      var a = this.s(),
        b = 0,
        e = 0
      c.m(this.IC(), function (a, d) {
        if (d.Sa) {
          var g = c.h.xc(d.M, 'float'),
            h = d.nB()
          'right' === g ? (e += h) : (b += h)
        }
      })
      a.Wr({ marginLeft: b + 'px', marginRight: e + 'px' })
    },
  })
  m.G.AI = c.j(M, {
    D: n.Hw,
    k: g.f,
    ba: function () {
      return c.g.l.Aa()
    },
    u: function (a) {
      a[d.Gc] = this.xl
      a[d.O] = this.S
    },
    ca: function () {
      var a = this.b.o.ha
      a ? this.gn(a) : this.Xs()
    },
    xl: function (a, b) {
      this.qF()
      this.gn(b.ha)
    },
    S: function (a, b) {
      c.Le(b.Ya) || this.Xs()
    },
    Xs: function () {
      var a = this.s()
      a.Sa && (a.N(null, !0), this.$s())
    },
    qF: function () {
      var a = this.s()
      a.Sa || (a.show(null, !0), this.$s())
    },
    $s: function () {
      this.n('trackbarsetoffsets', { q: c.v() })
    },
    click: function () {
      var a = c.v(),
        b = this.b.o,
        e = b.Ya
      this.Rc()
      c.Le(e) &&
        ((b = 'hd' === b.ha ? 'sd' : 'hd'),
        e[b] && (this.n(d.Gc, { q: a, ha: b }).n(d.fb, { q: a, D: this.D }), this.gn(b)))
    },
    gn: function (a) {
      this.s().Jb(c.wa.nu(a))
    },
  })
  m.pa = c.j(Ab, {
    Dn: 'amazon-player-type',
    fl: null,
    bk: null,
    p: function () {
      var a = new m.ld(null, this.b.w.Qa.Ol),
        b = c.g.bm()
      'application/x-mpegURL' === a.Uk[b] && this.b.aD && (a.Uk[b] = 'video/mp4')
      m.pa.prototype.t.p.call(this, a)
      this.zb = !0
    },
    u: function (a) {
      m.pa.prototype.t.u.call(this, a)
      a[d.ij] = this.WD
      a[d.R] = this.pause
      a[d.X] = this.play
      a[d.ua] = this.Yc
      a[d.va] = this.seek
      a[d.Ca] = this.hn
      a[d.O] = this.S
      a[d.Ua] = this.Zp(['pauseState', d.R])
      a[d.oa] = this.Zp(['playState', d.X])
      a[k.fd] = this.mt
      a[k.hd] = this.Tm
    },
    WD: function (a, b) {
      this.B.id === b.id && (this.B.Wa(), (this.kc = this.B = this.r = null), this.la())
    },
    im: function () {
      c.h.Ja(this.r, c.h.ag(this.b.w.Rb.eg))
    },
    Te: function () {
      c.h.Ja(this.r, c.h.bg(this.b.w.Rb.eg))
    },
    detach: function () {
      this.pause()
      this.qi()
      this.px()
      m.pa.prototype.t.detach.apply(this, arguments)
    },
    px: function () {
      this.B.iC()
      this.Mi(this.B.Gw)
    },
    pause: function () {
      var a = this.r
      ;(a.paused && !c.g.l.Co()) ||
        !a.src ||
        (m.pa.prototype.t.pause.apply(this, arguments), a.pause())
    },
    play: function () {
      var a = this.r
      if (a.paused && (a.src || this.fl)) {
        this.zb && !this.b.ea.Kb() && ((this.zb = !1), this.Te(), this.B.wm(this.fl))
        !c.g.l.xv() || this.b.o.Gb || this.b.ea.Kb() || this.n(d.$a)
        m.pa.prototype.t.play.apply(this, arguments)
        var b = a.play(),
          e = this
        if (void 0 !== b)
          b['catch'](function () {
            a.paused && e.n(['pauseState', d.R])
          })
      }
    },
    Qb: function () {
      m.pa.prototype.t.Qb.apply(this, arguments)
      c.g.l.Zn() &&
        !c.g.l.$b() &&
        (0 <= c.g.Uc('Android', '5.0') ||
          (1 !== this.r.networkState ? this.n(d.ad, { ga: 0 }) : this.n(d.ad, { ga: 1 })))
    },
    Yc: function (a) {
      this.r.src &&
        (c.g.l.sb() && P.nm(this.r.src) ? this.r.load() : this.n(d.va, { K: !0, Xb: 0, nb: !0 }),
        this.play(a, { K: !0 }))
    },
    seek: function (a, b) {
      this.r.src &&
        ((this.b.o.nb = b.nb), m.pa.prototype.t.seek.apply(this, arguments), this.B.seek(b.Xb))
    },
    Mi: function (a, b) {
      var c = this.r
      0 <= b && (a += '#t\x3d' + b)
      c.paused || c.pause()
      this.B.Pm = null
      this.fl = a
      this.zb = !0
      this.b.ea.Kb() && this.B.wm(a)
    },
    Li: function (a, b) {
      this.oF(b) && ((a = this.rC(a)), this.B.UE([this.Dn]))
      this.B.Li(a)
    },
    oF: function (a) {
      return !(c.g.l.$b() && 'application/x-mpegURL' === a)
    },
    rC: function (a) {
      var b = {}
      c.m(a, this.qC(b), this)
      return b
    },
    qC: function (a) {
      return function (b, c) {
        ;-1 === this.Dn.indexOf(b) && (a[b] = c)
      }
    },
    hn: function (a, b) {
      this.r.volume = c.bc.bound(b.ya, 0, 1)
    },
    S: function (a, b) {
      m.pa.prototype.t.S.apply(this, arguments)
      P.nm(this.r.src) &&
        this.b.w.Qa.Ol &&
        c.g.l.Gn() &&
        !c.g.l.$b() &&
        (this.bk = new m.pa.Hn(this))
    },
    Vm: function () {
      this.B.wm(this.B.yc())
    },
    Tm: function () {
      this.bk && this.bk.Tm()
    },
    Zp: function (a) {
      return function () {
        c.g.l.sb() && this.b.o.Gb && this.n(a)
      }
    },
  })
  m.pa.Hn = function (a) {
    this.tq = !0
    this.wc = a
  }
  m.pa.Hn.prototype = {
    Tm: function () {
      this.tq && this.wc && this.wc.r && ((this.tq = !1), this.wc.r.pause(), this.wc.r.play())
    },
  }
  var cb = 500
  m.kf = c.j(xa, {
    Mo: 'data-emitted-queued-mobile-events',
    Gw: '',
    type: 'html',
    p: function (a) {
      a.ea.zi() || (this.r = c.h.Wl('video', a.xg))
      this.r = this.r || this.CB(a.xg, a.w.Cd, a.w.Rb.eg, a.ea.Kb())
      this.Z(
        this.r,
        k.za,
        c.C.Q(function () {
          var a = this.r.error
          if (a) {
            var b = { errorCode: a.code }
            switch (a.code) {
              case 2:
                this.Pa(p.ff, b)
                break
              case 3:
                this.Pa(p.$e, b)
                break
              case 4:
                if (this.sk) {
                  this.sk = !1
                  break
                }
                this.Pa(p.ia, b)
            }
          }
        }, this),
      )
      this.Wk = []
      this.Pm = null
      this.Z(
        this.r,
        k.pb,
        c.C.Q(function () {
          this.bz() || ((this.Pm = this.yc()), this.Pa(k.pb))
        }, this),
      )
      var b = (this.cl = new pc(a, { k: this.yb, B: this }).bind())
      this.Z(this.r, d.qa, function () {
        b.Ac()
      })
      this.Z(
        this.r,
        [k.Wd, k.pj, k.hd],
        c.C.Q(function (a) {
          this.Pa(a.type)
        }, this),
      )
      this.Z(
        this.r,
        d.oa,
        c.C.Q(function () {
          this.r.paused || this.Pa(d.oa)
        }, this),
      )
      this.Z(
        this.r,
        d.R,
        c.C.Q(function () {
          this.r.paused && (this.Vq() || this.Pa(d.Ua))
        }, this),
      )
      this.Z(
        this.r,
        k.Zb,
        c.C.Q(function () {
          this.Ir()
        }, this),
      )
      this.Z(
        this.r,
        k.fd,
        c.C.Q(function (a) {
          this.Pa(a.type, { videoHeight: this.GC(), videoWidth: this.HC() })
        }, this),
      )
      this.Kk = !1
      this.ir = c.C.ka(this.Jr, cb, this)
      this.sk = !1
      this.ru()
    },
    wm: function (a) {
      this.cl.reset()
      this.r.src = a
      this.r.load()
    },
    Jr: function () {
      ;(this.r.paused && !c.g.l.Co()) || this.Pa(k.cb)
      this.mA()
      this.ir = c.C.ka(this.Jr, cb, this)
    },
    Bd: function () {
      return this.r.duration
    },
    FC: function (a) {
      return this.r.getAttribute(a)
    },
    jJ: function () {
      return this.r.buffered
    },
    kJ: function () {
      return this.r.error
    },
    yc: function () {
      return this.r.src
    },
    HC: function () {
      return this.r.videoWidth
    },
    GC: function () {
      return this.r.videoHeight
    },
    Db: function () {
      return this.r.currentTime
    },
    Ss: function () {
      if (!this.yc()) return 0
      var a = this.r.buffered
      if (null == a) return 0
      var b = a.length,
        c = this.Bd()
      return b && c ? (a.end(b - 1) / c) * 100 : 0
    },
    uJ: function () {
      return this.r.paused
    },
    Xt: function (a, b) {
      this.r.setAttribute && this.r.setAttribute(a, b)
    },
    TE: function (a, b) {
      this.r.removeAttribute && this.r.removeAttribute(b)
    },
    DE: function () {
      this.r.pause()
    },
    Wa: function () {
      this.la()
      clearTimeout(this.ir)
      this.b.ea.zi() && c.h.getParent(this.r).removeChild(this.r)
      this.r = {}
    },
    seek: function (a) {
      var b = this.Bd()
      a >= b && (a = b - 0.5)
      this.cl.Id()
      this.Dz(a)
    },
    Dz: function (a) {
      this.r.mC ? this.r.mC(a) : (this.r.currentTime = a)
    },
    bz: function () {
      return this.Pm === this.yc()
    },
    mA: function () {
      if (c.g.l.he() || c.g.l.pf() || c.g.l.$b())
        this.Vq() ? this.Kk || ((this.Kk = !0), this.Ir()) : (this.Kk = !1)
    },
    Vq: function () {
      if (0 !== this.Bd()) return c.ta.toFixed(this.Db()) === c.ta.toFixed(this.Bd())
    },
    CB: function (a, b, e, d) {
      b = c.h.kb(
        'video',
        c.F({ position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }, c.h.ag(e)),
      )
      this.id = b.id = this.id || c.De()
      e = c.g.l.Zn() ? 'none' : 'auto'
      b.preload = e
      c.g.l.Aa() && d && b.setAttribute && c.g.js('10_0')
        ? b.setAttribute('playsinline', 'playsinline')
        : c.g.l.Aa() &&
          d &&
          b.setAttribute &&
          b.setAttribute('webkit-playsinline', 'webkit-playsinline')
      c.h.fc(b, a)
      return b
    },
    Li: function (a) {
      c.m(a, this.Xt, this)
    },
    UE: function (a) {
      c.m(a, this.TE, this)
    },
    Ir: function () {
      this.b.o.Tb || (this.r.paused || this.DE(), this.Pa([k.cb, k.Zb]))
    },
    Pa: function (a, b) {
      !c.g.l.Aa() || this.Dd
        ? this.Lr(a, b)
        : this.Dq()
          ? this.b.ea.zi() && this.Lr(a, b)
          : this.Wk.push({ ei: a, fC: b })
    },
    Lr: function (a, b) {
      m.kf.prototype.t.Pa.call(this, a, b)
    },
    Dq: function () {
      return !c.g.l.Aa() || this.FC(this.Mo)
    },
    qu: function () {
      this.Dq() || (c.m(this.Wk, this.pA, this), (this.Wk = []), this.Xt(this.Mo, !0))
    },
    pA: function (a, b) {
      m.kf.prototype.t.Pa.call(this, b.ei, b.fC)
    },
    UJ: function () {
      this.Pa(d.qa)
    },
    Az: 4,
    lm: function () {
      var a = this.r.buffered,
        b = this.Db()
      if (null == a) return !0
      var c
      for (c = 0; c < a.length; c++) {
        var d = a.start(c),
          l = a.end(c)
        if (b >= d && b <= l && l - b > this.Az) return !0
      }
      return !1
    },
    iC: function () {
      this.sk = !0
    },
  })
  m.zw = c.j(u, {
    Un: 'airy-pseudo-fullscreen',
    Fw: '#va-airy-fullscreen',
    Zo: 'popstate',
    k: c.La(g),
    p: function () {
      this.Aq = !1
      this.qe = c.C.Q(this.qe, this)
      this.fr = c.C.Q(this.IJ, this)
    },
    u: function (a) {
      a[d.$a] = this.YD
      a[d.bb] = this.zt
      c.m(
        p,
        function (b, c) {
          a[c] = this.mE
        },
        this,
      )
      c.g.l.sb() && (a[d.$c] = this.pg)
    },
    ca: function () {
      this.Z(
        q,
        ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'],
        this.qe,
      )
      c.g.l.sb() && this.Ip(this.b.Xa.ec)
    },
    pg: function (a, b) {
      this.Ip(b.B)
    },
    Ip: function (a) {
      !this.Aq &&
        a &&
        'html' === a.type &&
        (this.Z(a.r, ['webkitbeginfullscreen'], c.C.Q(this.Zx, this)),
        this.Z(a.r, ['webkitendfullscreen'], c.C.Q(this.$x, this)),
        (this.Aq = !0))
    },
    Zx: function () {
      this.hq()
      this.b.Xa.ec.r.play()
    },
    $x: function () {
      this.hq()
      this.b.Xa.ec.r.pause()
    },
    hq: function () {
      this.b.I.H('hideloadingspinner')
      this.qe()
    },
    qe: function () {
      this.b.I.H(d.$g)
    },
    YD: function () {
      if (!c.g.l.pf()) {
        var a = this.b.Na
        if (this.b.w.un) c.h.Rf(a, this.Un), this.qe()
        else {
          var b = this.yq()
          a.requestFullScreen
            ? a.requestFullScreen()
            : a.webkitRequestFullScreen
              ? a.webkitRequestFullScreen()
              : a.mozRequestFullScreen
                ? a.mozRequestFullScreen()
                : a.msRequestFullscreen
                  ? a.msRequestFullscreen()
                  : b.webkitRequestFullScreen
                    ? b.webkitRequestFullScreen()
                    : b.webkitEnterFullScreen && b.webkitEnterFullScreen()
          c.g.l.Mb() && (t.history.pushState({}, '', this.Fw), this.Z(t, this.Zo, this.fr))
        }
      }
    },
    zt: function () {
      var a = this.b.Na
      this.b.w.un
        ? (c.h.Fi(a, this.Un), this.qe())
        : ((a = this.yq()),
          q.cancelFullScreen
            ? q.cancelFullScreen()
            : q.webkitCancelFullScreen
              ? q.webkitCancelFullScreen()
              : q.mozCancelFullScreen
                ? q.mozCancelFullScreen()
                : q.msExitFullscreen
                  ? q.msExitFullscreen()
                  : a.webkitExitFullScreen && a.webkitExitFullScreen(),
          c.g.l.Mb() && c.h.la(t, this.Zo, this.fr))
    },
    yq: function () {
      return (this.b.Xa.ec || {}).r || {}
    },
    mE: function () {
      this.b.o.Gb && this.zt()
    },
  })
  var db = c.j(rb, {
    p: function (a, b, e) {
      this.name = 'RendererComponent'
      this.xb.Hi(this.name)
      this.Cf = !0
      a = c.Kd(a)
      a.I = this.xb
      this.Yk = new Bb(a).bind()
      this.rd = new b(a, { kc: this.Yk })
      this.Bz = new e(a, { B: this.rd, r: this.rd.r, kc: this.Yk }).bind()
      new Db(a, { k: this.yb, B: this.rd, kc: this.Yk }).bind()
      this.re.H(d.Dj, { wc: this.Bz, k: this.yb, B: this.rd })
      var f = this
      this.SE(d.R, function (a, b) {
        f.AE(a, b, f.name)
      })
    },
    Ms: function () {
      return [d.ij, d.Yd, d.lf, d.$c, d.Sd, d.mc, d.O, d.qc, d.Td, d.R, d.X, d.ua, d.va, d.Ca]
    },
    Ns: function () {
      return [r.of, d.vb]
    },
    Rs: function () {
      return [
        k.fd,
        k.pj,
        k.pb,
        k.Vu,
        k.Wd,
        k.Yb,
        k.nc,
        k.hd,
        k.cb,
        k.Zb,
        k.Lg,
        k.Pn,
        d.ad,
        d.Ij,
        d.qa,
        d.Aj,
        d.Bj,
        d.R,
        d.Ua,
        d.oa,
        d.dh,
        d.$a,
        'pauseState',
        'rendererready',
        'rendererinit',
        'swfready',
        p.ff,
        p.$e,
        p.ia,
      ]
    },
    KC: function () {},
    AE: function (a, b, c) {
      b.origin = c
    },
  })
  db.create = function (a, b, c) {
    return new db(a, c, b, m.kf, m.pa)
  }
  var ta
  ta = c.j(w, {
    k: g.f,
    p: function () {
      c.F(this, this.b.w.vd)
    },
    ca: function () {
      var a = this.Ce()
      this.Wy(this.ri(), function (b) {
        c.h.fc(b, a)
      })
    },
    ri: c.J,
    Wy: function (a, b) {
      for (var c = a.text, d = a.ii > a.Vb ? -1 : 1, l = a.ii, g = 0; l != a.Vb + d; l += d, g++) {
        var h = this.Nx(l, c && null != c[g] ? c[g] : l)
        b.call(this, h)
      }
    },
    Nx: function (a, b) {
      return c.F(c.h.kb('option'), { innerHTML: b, value: a })
    },
  })
  m.G.xG = c.j(w, {
    D: n.zu,
    k: g.f,
    Nw: 'denied',
    nh: !1,
    ca: function () {
      this.kh = this.Yh(c.W.eb.gi)
      this.lh = this.Yh(c.W.eb.Tl)
    },
    u: function (a) {
      a[d.O] = this.S
    },
    L: function (a) {
      a[C.af] = this.Wf
      a[C.Ng] = this.YB
      a[C.ge] = this.show
      a[d.Za] = this.detach
    },
    S: function () {
      this.nh = !1
      this.tk()
    },
    Wf: function () {
      this.nh = !0
      this.s().Ea(this.Nw)
      this.rq()
    },
    YB: function () {
      this.nh || (this.n(d.Ma, { qm: !0 }), this.tk())
    },
    show: function () {
      this.nh || (A.Jp ? this.b.I.H(C.Wn) : (this.s().show(0), this.rq()))
    },
    detach: function () {
      this.tk()
    },
    rq: function () {
      this.qq(this.kh, this.lh)
    },
    tk: function () {
      this.qq(this.lh, this.kh)
    },
    qq: function (a, b) {
      b.stop()
      a.Dc().Pb()
    },
  })
  m.G.AG = c.j(ta, {
    D: n.An,
    k: g.f,
    vt: 'January February March April May June July August September October November December'.split(
      ' ',
    ),
    ri: function () {
      return { ii: 1, Vb: 12, text: this.vt }
    },
  })
  m.G.yG = c.j(ta, {
    D: n.zn,
    k: g.f,
    ri: function () {
      return { ii: 1, Vb: 31 }
    },
  })
  m.G.DG = c.j(ta, {
    D: n.Bn,
    k: g.f,
    lc: function (a) {
      a.change = this.MF
    },
    ri: function () {
      return { ii: new Date().getFullYear(), Vb: 1900 }
    },
    MF: function () {
      this.b.I.H(C.Cn)
    },
  })
  m.G.CG = c.j(w, {
    D: n.Cu,
    k: g.f,
    tw: 'enabled',
    YH: 'disabled',
    gu: 'Submit',
    hk: -1,
    Yq: !1,
    p: function () {
      c.F(this, this.b.w.vd)
    },
    u: function (a) {
      a[d.O] = this.S
    },
    L: function (a) {
      a[C.Wn] = this.ms
      a[C.Cn] = this.cC
    },
    lc: function (a) {
      a[z.qb] = this.ms
    },
    ca: function () {
      this.hk = this.b.o.Sb
      this.s().Jb(this.gu)
    },
    S: function (a, b) {
      this.hk = b.Sb || -1
    },
    ms: function () {
      if (this.Yq) {
        var a = this.Ly(),
          a = (A.Jp = A.Jp || new Date(a.fG, a.DD - 1, a.NB)),
          a = this.Wx(this.qx(a))
        this.b.I.H(a ? C.Ng : C.af)
      }
    },
    cC: function () {
      this.Yq = !0
      this.s().Ea(this.tw)
    },
    Ly: function () {
      var a = this.b.$
      return c.map({ DD: a.Ee(n.An), NB: a.Ee(n.zn), fG: a.Ee(n.Bn) }, this.qy)
    },
    qy: function (a, b) {
      if (b) return Number(b.value)
    },
    qx: function (a) {
      var b = new Date(),
        c = b.getFullYear() - a.getFullYear(),
        d = b.getMonth() - a.getMonth()
      ;(0 > d || (0 === d && b.getDate() < a.getDate())) && c--
      return c
    },
    Wx: function (a) {
      var b = (this.b.w || {}).vd || {},
        c = b.Dl
      return c ? c.call(b.scope, a) : a >= this.hk
    },
  })
  m.G.BG = c.j(w, {
    D: n.Bu,
    k: g.f,
    prompt: 'This video is not intended for all audiences. What date were you born?',
    us: "We're sorry. You are not old enough to watch this video.",
    p: function () {
      c.F(this, this.b.w.vd)
    },
    ca: function () {
      this.s().Jb(this.prompt)
    },
    L: function (a) {
      a[C.af] = this.Wf
    },
    Wf: function () {
      this.s().Jb(this.us)
    },
  })
  m.G.zG = c.j(w, {
    D: n.Au,
    k: g.f,
    L: function (a) {
      a[C.af] = this.Wf
    },
    Wf: function () {
      this.s().remove()
    },
  })
  var Ac = c.j(u, {
    k: g.f,
    $d: D.$d,
    ia: D.ia,
    hx: c.g.l.Aa() || c.g.l.ub(),
    p: function () {
      this.od = !1
      this.gh = {}
      this.gh.hybrid = c.Ic.ct() ? this.$d : this.ia
      this.gh.html = this.ia
      this.ih = {}
    },
    u: function (a) {
      var b = this.b.w
      c.m(
        p,
        function (a, c) {
          this.ih[c] =
            b.Bt ||
            'Sorry, an error has occurred while attempting video playback. Please try again later.'
        },
        this,
      )
      c.m(
        [p.ia, D.Vj],
        function (a, c) {
          this.ih[c] = b.vn || 'Sorry, this video is unsupported on this browser.'
        },
        this,
      )
      a[D.Vj] = this.Yi
    },
    L: function (a) {
      a[r.rc] = this.sa
      a[r.ac] = this.ma
    },
    ca: function () {
      if (!this.Br() && !this.b.mode) {
        var a = this.b.w
        a.xm || a.ng
          ? this.Yi()
          : this.n(this.ia, { prompt: a.vn || 'Sorry, this video is unsupported on this browser.' })
      }
    },
    Yi: function (a, b) {
      if (!this.od) {
        b = c.F(
          {
            prompt: this.ih[(a || {}).type] || 'Sorry, this video is unsupported on this browser.',
          },
          b,
        )
        var d = this.b.o
        this.b.Xa.$f(b) && !d.ng
          ? this.n(this.ia, b)
          : this.hx
            ? this.n(this.ia, b)
            : ((d = this.b.w), this.n(d.Gs ? this.gh[d.ws] : this.gh.hybrid, b))
      }
    },
    sa: function () {
      this.od = !0
    },
    ma: function () {
      this.od = !1
      this.Br()
    },
    Br: function () {
      var a = this.b.o
      if (!a.dm) return !1
      this.n(this.ia, { q: c.v(), prompt: this.ih[a.Rl] })
      return !0
    },
  })
  m.G.hH = c.j(M, {
    D: n.tv,
    pv: 'http://get.adobe.com/flashplayer/',
    text: 'Install Flash Player',
    p: function () {
      this.text = this.b.w.VC || this.text
    },
    ca: function () {
      this.s().Jb(this.text)
    },
    click: function () {
      t.open(this.pv, '_blank')
    },
  })
  m.G.iH = c.j(Eb, {
    D: n.uv,
    Pi: D.$d,
    ba: function () {
      return this.b.w.dt || c.g.l.Aa()
    },
  })
  m.G.jH = c.j(w, {
    D: n.vv,
    prompt: 'Adobe Flash Player is required to watch this video.',
    p: function () {
      this.prompt = this.b.w.WC || this.prompt
    },
    ca: function () {
      this.s().Jb(this.prompt)
    },
  })
  m.G.BI = c.j(Eb, {
    D: n.Jw,
    Pi: D.ia,
    ba: function () {
      return this.b.w.oD
    },
  })
  m.G.CI = c.j(w, {
    k: g.f,
    D: n.Kw,
    u: function (a) {
      a[D.ia] = this.Yi
    },
    Yi: function (a, b) {
      b.prompt && this.s().Jb(b.prompt)
    },
  })
  var Bc = c.j(u, {
      k: c.La(g),
      zk: !1,
      zf: !1,
      u: function (a) {
        a[d.oa] = this.Im
        a[d.O] = this.sg
        a[d.qc] = this.Bc
        a[d.ua] = this.lE
      },
      Im: function (a, b) {
        var e = b.k,
          f = e === g.f,
          l = e === g.aa
        ;(this.zf && f) ||
          (this.zk && l) ||
          (f ? (this.zf = !0) : (this.zk = !0), this.b.I.H(d.mc, { q: c.v(), k: e }))
      },
      sg: function (a, b) {
        b.k === g.f ? (this.zf = !1) : (this.zk = !1)
      },
      Bc: function () {
        this.zf = !1
      },
      lE: function () {
        this.zf = !1
      },
    }),
    E,
    ua,
    F,
    Mb,
    Nb,
    Ob,
    Pb
  E = c.j(u, {
    Cb: null,
    p: function () {
      this.Fh = {}
    },
    ls: function () {
      this.Fh = {}
    },
    Al: function (a) {
      this.Fh[a] = void 0
    },
    Ib: function (a, b) {
      b.K || (this.Fh[a.type] = b.q)
    },
    Oa: function () {
      this.n.apply(this, arguments)
    },
    Ga: function (a, b) {
      if (a)
        return function (d, f) {
          f.K || (b && ((f = c.Kd(f)), (f.k = b)), (f.Cb = this.Cb), this.Oa(a, f))
        }
    },
    ZJ: function (a, b, d) {
      c.m(b, this.Cx(a, d), this)
    },
    Cx: function (a, b) {
      var d = this.Ga(b)
      return function (b, l) {
        c.m(l, this.Bx(a, d), this)
      }
    },
    Bx: function (a, b) {
      return function (d, f) {
        c.ic(f) || (a[f] = b)
      }
    },
    xd: function (a, b, c, d, l) {
      if (b)
        return function (g, h) {
          if (!h.K || l) (h.Cb = this.Cb), this.Us(g, h), this.lb(h, a, b, c), d && this.Al(a)
        }
    },
    Us: c.J,
    lb: function (a, b, c, d) {
      if (!a.K || a.Fs) (b = this.gs(a, b, d)), null != b && this.Oa(c, { q: a.q, ib: b, Cb: a.Cb })
    },
    gs: function (a, b, c) {
      b = this.Fh[b]
      if (null != b) return (a = a.q - b), c && (a = x.abs(a)), a
    },
    tu: function () {
      this.Cb = this.b.rs ? this.b.rs.Cb : null
    },
  })
  ua = {
    sv: 'ex-aaxitk',
    hy: { prod: 'prod', gamma: 'preprod', beta: 'beta', local: 'beta' },
    XF: function (a, b) {
      return !((!a.i && !b) || !a.a || !a.c)
    },
    yC: function (a, b, d) {
      d = d || {}
      var f = this.JC(this.hy[d.di || 'prod'], d.Ei || 'na'),
        l = c.da.ni()
      a = this.dx(a, b, d.SC)
      return l + '//' + f + '/iu3?' + a
    },
    dx: function (a, b, d) {
      a = { d: 'forester-did', 'ex-fargs': '?' + c.da.Gg(a), 'ex-fch': b }
      null != d && (a[ua.sv] = d)
      return c.da.Gg(a)
    },
    JC: function (a, b) {
      return [this.My(a, b), '.amazon-adsystem.com', 'na' === b ? '' : '/s'].join('')
    },
    My: function (a, b) {
      'na' === b && (b = '')
      var c = [b ? 'aax' : 's']
      b && c.push(b)
      'prod' !== a && c.push(a)
      return c.join('-')
    },
  }
  K = qa = pa = ba = oa = aa = na = ma = la = $ = Z = O = L = void 0
  L = c.j(u, {
    Tf: !1,
    pd: null,
    p: function (a) {
      this.qk = a || []
      this.wb = {}
    },
    Ji: function (a) {
      this.pd = a
      return this
    },
    $l: function () {
      return this.qk
    },
    u: function (a) {
      c.m(
        this.qk,
        function (b, c) {
          a[c] = this.handleEvent
        },
        this,
      )
    },
    L: function (a) {
      a[d.We] = this.sl
    },
    handleEvent: function (a, b) {
      var c = this.Yf(a, b)
      this.wb[c] = (this.wb[c] || 0) + this.am(c, b)
    },
    Yf: function (a) {
      return a.type
    },
    am: c.J,
    sl: function () {
      this.Tf && this.b.o.hb && this.Fb()
      this.yd()
    },
    Fb: function () {
      c.m(this.qk, this.Vy, this)
    },
    yd: function () {
      c.m(this.wb, this.LF, this)
      this.nx()
    },
    Vy: function (a, b) {
      this.wb[b] = this.wb[b] || 0
    },
    LF: function (a, b) {
      var c = this.Yl(a),
        d = this.Ad(a, b)
      this.pd && this.pd.H(c, d)
    },
    Yl: function (a) {
      return a
    },
    Ad: c.J,
    nx: function () {
      this.wb = {}
    },
  })
  O = c.j(L, {
    am: function () {
      return 1
    },
    Ad: function (a, b) {
      return { ga: b }
    },
  })
  Z = c.j(L, {
    am: function (a, b) {
      return b.ib
    },
    Ad: function (a, b) {
      return { ib: b }
    },
  })
  $ = c.j(L, {
    cd: [h.A.f.oo, h.A.f.po],
    p: function () {
      $.prototype.t.p.call(this, this.cd)
      this.Fb()
    },
    Fb: function () {
      var a = this
      c.m(this.cd, function (b, c) {
        a.wb[c] = 0
      })
    },
    yd: function () {
      $.prototype.t.yd.call(this)
      this.Fb()
    },
    handleEvent: function (a, b) {
      var c = this.Yf(a, b)
      this.wb[c] = 1
    },
    Ad: function (a, b) {
      return { ga: b }
    },
  })
  la = c.j(O, {
    Tf: !0,
    hw: /Count$/,
    jv: [h.rb.f.gj, h.rb.f.lj, h.rb.f.vj, h.rb.f.Oj, h.rb.f.Pj, h.rb.f.Rj],
    p: function (a) {
      a = c.filter(c.La(a), this.ux, this)
      this.b.o && this.b.o.fa && (a = c.filter(a, this.jz, this))
      la.prototype.t.p.call(this, a)
    },
    ux: function (a, b) {
      return this.hw.test(b)
    },
    jz: function (a, b) {
      return !c.find(
        this.jv,
        function (a, c) {
          return b === c
        },
        this,
      )
    },
  })
  ma = c.j(la, {
    p: function () {
      var a = h.rb.f
      ma.prototype.t.p.call(this, {
        Vd: a.gj,
        Xd: a.lj,
        $a: a.to,
        de: a.vj,
        ee: a.Po,
        bb: a.Ro,
        R: a.To,
        fe: a.dp,
        mf: a.Oj,
        nf: a.Pj,
        ie: a.Rj,
        le: a.sp,
      })
    },
  })
  na = c.j(Z, {
    Tf: !0,
    p: function () {
      var a = h.A.f
      na.prototype.t.p.call(this, [a.Fj, a.Wj])
      this.Fb()
    },
  })
  aa = c.j(L, {
    cd: [h.A.f.Ko, h.A.f.mp],
    p: function () {
      aa.prototype.t.p.call(this, this.cd)
      this.Fb()
    },
    Fb: function () {
      var a = this
      c.m(this.cd, function (b, c) {
        a.wb[c] = 0
      })
    },
    yd: function () {
      aa.prototype.t.yd.call(this)
      this.Fb()
    },
    handleEvent: function (a, b) {
      var c = this.Yf(a, b)
      this.wb[c] = 1
    },
    Ad: function (a, b) {
      return { ga: b }
    },
  })
  oa = c.j(O, {
    Tf: !0,
    cd: [h.A.f.Xg],
    kv: [h.A.f.mo, h.A.f.Jo, h.A.f.lp],
    p: function () {
      var a = this.cd
      this.b.o.fa && (a = a.concat(this.kv))
      oa.prototype.t.p.call(this, a)
      this.Fb()
    },
  })
  ba = c.j(L, {
    Yg: h.A.f.Yg,
    p: function () {
      ba.prototype.t.p.call(this, [h.A.f.Xg])
      this.Fb()
    },
    Fb: function () {
      this.wb[this.Yg] = 0
    },
    yd: function () {
      ba.prototype.t.yd.call(this)
      this.Fb()
    },
    handleEvent: function (a, b) {
      var c = this.Yf(a, b)
      this.wb[c] = 1
    },
    Ad: function (a, b) {
      return { ga: b }
    },
    Yl: function () {
      return this.Yg
    },
  })
  pa = c.j(Z, {
    p: function () {
      pa.prototype.t.p.call(this, [h.A.f.hp])
    },
  })
  qa = c.j(O, {
    Tf: !0,
    p: function () {
      qa.prototype.t.p.call(this, [h.A.f.op])
    },
  })
  K = {}
  K.$n = c.j(O, {
    p: function () {
      var a = h.A.f
      K.$n.prototype.t.p.call(this, [a.Kn, a.In])
    },
  })
  K.io = c.j(Z, {
    me: {},
    p: function () {
      K.io.prototype.t.p.call(this, [h.A.f.Xe])
    },
    Yf: function (a, b) {
      this.me[b.Y] = b.ha
      return b.Y
    },
    Yl: function () {
      return h.A.f.Xe
    },
    Ad: function (a, b) {
      return { ib: b, Y: parseInt(a, 10), ha: this.me[a] }
    },
  })
  F = {
    Mg: function () {
      this.oe = new F.Sj()
      this.ne = {}
    },
  }
  F.Mg.prototype = {
    dg: function () {
      return this.oe.dg()
    },
    Wb: function (a, b) {
      this.oe.Wb(a)
      null != b && (this.ne[b] || (this.ne[b] = this.bq())).Wb(a)
    },
    zl: function () {
      this.oe = this.bq()
      this.ne = {}
    },
    bq: function () {
      return new F.Sj()
    },
  }
  F.kj = function () {
    this.Pw = 0.5
    this.Yj = 1
    this.yp = 60
    this.Nc = this.qf = 0
    this.wf = null
    this.lk = 0
    this.qd = null
    this.Gh = 0
  }
  F.kj.prototype = {
    uu: function (a, b) {
      if (!(isNaN(a) || isNaN(b) || this.Gh > a)) {
        this.wf = null
        this.lz(b)
        var c = b - this.qd,
          d = a - this.Gh
        c <= this.Yj && ((this.qf += d), (this.Nc += c), this.Nc >= this.Yj && this.ex())
        this.lk = x.min(x.round(d / c), this.yp)
        this.qd = b
        this.Gh = a
      }
    },
    lz: function (a) {
      this.qd >= a && (this.qd = null)
      null === this.qd && (this.qd = a - this.Pw)
    },
    ex: function () {
      this.wf = x.min(x.round(this.qf / this.Nc), this.yp)
      this.Nc -= this.Yj
      this.qf = x.round(this.Nc * this.wf)
    },
    clear: function () {
      this.Nc = this.qf = 0
      this.wf = null
      this.lk = 0
      this.qd = null
      this.Gh = 0
    },
  }
  F.Sj = function () {
    this.xh = [0, 0]
    this.Qk = Number.MAX_VALUE
    this.Pk = Number.MIN_VALUE
    this.cc = 0
  }
  F.Sj.prototype = {
    Wb: function (a) {
      null != a &&
        (this.cc++,
        (this.xh = c.map(this.xh, function (b, c) {
          return c + x.pow(a, b + 1)
        })),
        (this.Qk = x.min(this.Qk, a)),
        (this.Pk = x.max(this.Pk, a)))
    },
    dg: function () {
      return 0 < this.cc
    },
    vl: function () {
      if (!(1 > this.cc)) return this.yk(1) / this.cc
    },
    is: function () {
      if (!(1 > this.cc)) return this.Qk
    },
    hs: function () {
      if (!(1 > this.cc)) return this.Pk
    },
    wl: function () {
      if (!(1 > this.cc)) {
        var a = x.sqrt(this.oB())
        if (!c.dD(a)) return a
      }
    },
    oB: function () {
      if (!(2 > this.cc)) return (this.yk(2) - x.pow(this.yk(1), 2) / this.cc) / (this.cc - 1)
    },
    yk: function (a) {
      if (!(this.xh.length < a)) return this.xh[a - 1]
    },
  }
  Y = function () {
    this.p()
  }
  Wa = Va = Ua = void 0
  Y.prototype = { p: c.J, Wb: function () {}, ki: function () {}, Vh: function () {} }
  Ua = c.j(Y, {
    f: h.A.f,
    tc: null,
    xa: null,
    p: function () {
      this.tc = new F.kj()
      this.xa = new F.Mg()
    },
    Wb: function (a, b) {
      var c = a.Nl
      isNaN(c) || (this.tc.uu(c, a.T), ((c = this.tc.wf) || 0 === c) && this.xa.Wb(c, b))
    },
    ki: function () {
      var a = []
      if (!this.xa.dg()) return a
      var b = this.Oc(this.xa.oe, this.f.fo, null)
      a.push(b)
      c.map(
        this.xa.ne,
        function (b, c) {
          var d = this.Oc(c, this.f.Jn, b)
          a.push(d)
        },
        this,
      )
      return a
    },
    Vh: function () {
      this.tc.clear()
      this.xa.zl()
    },
    Oc: function (a, b, d) {
      var f = {},
        l = a.vl()
      null != l && (f[b.Fc] = { ga: c.ta.toFixed(l), Y: d })
      l = a.hs()
      null != l && (f[b.df] = { ga: c.ta.toFixed(l), Y: d })
      a = a.wl()
      null != a && (f[b.Mc] = { ga: c.ta.toFixed(a), Y: d })
      return f
    },
  })
  Va = c.j(Y, {
    f: h.A.f,
    xa: null,
    p: function () {
      this.xa = new F.Mg()
    },
    Wb: function (a, b) {
      var c = a.Gl
      isNaN(c) || 0 === c || this.xa.Wb(c, b)
    },
    ki: function () {
      var a = []
      if (!this.xa.dg()) return a
      var b = this.Oc(this.xa.oe, this.f.cp, null, a)
      a.push(b)
      c.map(
        this.xa.ne,
        function (b, c) {
          var d = this.Oc(c, this.f.Ln, b)
          a.push(d)
        },
        this,
      )
      return a
    },
    Vh: function () {
      this.xa.zl()
    },
    Oc: function (a, b, d) {
      var f = {},
        g = a.vl()
      null != g && (f[b.Fc] = { ga: c.ta.toFixed(g), Y: d })
      g = a.is()
      null != g && (f[b.ef] = { ga: c.ta.toFixed(g), Y: d })
      a = a.wl()
      null != a && (f[b.Mc] = { ga: c.ta.toFixed(a), Y: d })
      return f
    },
  })
  Wa = c.j(Y, {
    f: h.A.f,
    tc: null,
    xa: null,
    p: function () {
      this.xa = new F.Mg()
      this.tc = new F.kj()
    },
    Wb: function (a, b) {
      var c = a.Gl,
        d = a.Nl
      isNaN(c) || 0 === c || isNaN(d) || (this.tc.uu(d, a.T), this.xa.Wb(c + this.tc.lk, b))
    },
    ki: function () {
      var a = []
      if (!this.xa.dg()) return a
      var b = this.Oc(this.xa.oe, this.f.qp, null)
      a.push(b)
      c.map(
        this.xa.ne,
        function (b, c) {
          var d = this.Oc(c, this.f.Mn, b)
          a.push(d)
        },
        this,
      )
      return a
    },
    Vh: function () {
      this.xa.zl()
      this.tc.clear()
    },
    Oc: function (a, b, d) {
      var f = {},
        g = a.vl()
      null != g && (f[b.Fc] = { ga: c.ta.toFixed(g), Y: d })
      g = a.hs()
      null != g && (f[b.df] = { ga: c.ta.toFixed(g), Y: d })
      g = a.is()
      null != g && (f[b.ef] = { ga: c.ta.toFixed(g), Y: d })
      a = a.wl()
      null != a && (f[b.Mc] = { ga: c.ta.toFixed(a), Y: d })
      return f
    },
  })
  Ta = Sa = ka = void 0
  ka = c.j(u, {
    pd: null,
    p: function () {
      this.Dp = []
    },
    FA: function (a) {
      this.Dp.push(a)
      return this
    },
    Ji: function (a) {
      this.pd = a
      return this
    },
    Os: function (a) {
      var b = []
      c.ts(a, function (a, c) {
        b.push(c)
      })
      return b
    },
    vC: function () {
      var a = c.map(this.Dp, this.Ay)
      return c.reduce(a, this.rx)
    },
    Ay: function (a, b) {
      return b.$l()
    },
    rx: function (a, b) {
      return a.concat(b)
    },
    BB: function (a) {
      return function (b, d) {
        return !c.some(a, c.$o.fu(d))
      }
    },
    Wt: function (a, b) {
      c.m(
        a,
        function (a, c) {
          b[c] = this.uC
        },
        this,
      )
    },
    uC: function (a, b) {
      this.pd && this.pd.H(a.type, b)
    },
  })
  Sa = c.j(ka, {
    k: g.f,
    u: function (a) {
      var b = this.Os(h),
        e = this.vC(),
        f = this.Os(h.aa),
        b = c.filter(b, this.BB(e.concat(f)), this),
        b = b.concat([k.fd, d.$c, d.Jj])
      this.Wt(b, a)
    },
  })
  Ta = c.j(ka, {
    L: function (a) {
      this.Wt([d.je, d.We, d.vb, d.Wg], a)
    },
  })
  Ra = ja = X = W = void 0
  W = c.j(E, {
    zb: void 0,
    p: function (a) {
      W.prototype.t.p()
      this.Zm()
      c.F(this, a)
    },
    u: function (a) {
      a[d.$a] = this.Ga(this.$a)
      a[d.bb] = this.Ga(this.bb)
      a[d.Ua] = this.Ga(this.R)
      a[d.oa] = this.Re
      a[k.Zb] = this.ended
      a[d.ua] = this.Yc
      a[d.ah] = this.Ga(this.qb)
      a[d.O] = this.Zm
      a[k.pb] = this.Qb
      a[d.Td] = this.Qt
      a[d.va] = this.seek
      a[d.qa] = this.Ag
      a[d.Ca] = this.Tc
    },
    bn: function (a) {
      function b(a, b) {
        a && (d[a] = b)
      }
      var d = {}
      this.Lc && b(this.Lc, 1)
      b(this.Xd, '25%')
      b(this.de, '50%')
      b(this.ie, '75%')
      b(this.Vd, '100%')
      var f = this
      c.m(d, function (b, c) {
        a.push({ La: c, ja: f.EB(b) })
      })
    },
    EB: function (a) {
      return function (b, c, d) {
        this.SF(b, c, d.U) && this.Oa(a, d)
      }
    },
    SF: function (a, b, d) {
      'percent' === b && (a = c.wa.yB(a, d))
      if (null == a || a <= this.qt) return !1
      this.qt = a
      return !0
    },
    Zm: function () {
      this.zb = !0
      this.Pt()
    },
    Pt: function () {
      this.qt = -1
    },
    Qb: function (a, b) {
      this.Oa(this.Zd, b)
    },
    Re: function (a, b) {
      this.zb ? (this.zb = !1) : b.K || this.Oa(this.fe, b)
    },
    Yc: function (a, b) {
      b.K || (this.Qt(), this.Oa(this.ua, b))
    },
    Qt: function () {
      this.Pt()
      this.Ci = null
    },
    seek: function (a, b) {
      this.Ci = b.K ? null : b.T
    },
    Ag: function (a, b) {
      if (!b.K) {
        var c = b.T
        null != this.Ci && c !== this.Ci && this.Oa(c > this.Ci ? this.nf : this.mf, b)
      }
    },
    Tc: function (a, b) {
      if (!b.K) {
        var c = b.volume,
          d = b.ya,
          g
        0 === c && d ? (g = this.le) : c && 0 === d && (g = this.ee)
        null != g && this.Oa(g, b)
      }
    },
  })
  X = c.j(W, {
    uj: h.rb.f,
    p: function () {
      var a = this.uj
      X.prototype.t.p.call(this, {
        Vd: a.gj,
        Xd: a.lj,
        $a: a.to,
        de: a.vj,
        ee: a.Po,
        bb: a.Ro,
        R: a.To,
        fe: a.dp,
        mf: a.Oj,
        nf: a.Pj,
        ie: a.Rj,
        le: a.sp,
      })
    },
    u: function (a) {
      X.prototype.t.u.call(this, a)
      a[d.oa] = this.Re
      a[d.Ua] = this.paused
      a[d.ua] = this.Yc
      a[d.O] = this.S
    },
    paused: function (a, b) {
      b.K || this.Oa(this.R, b)
    },
    S: function () {
      this.Zm()
    },
  })
  ja = c.j(W, {
    p: function () {
      var a = h.up
      ja.prototype.t.p.call(this, {
        qb: a.qb,
        Vd: a.Vd,
        Xd: a.Xd,
        $a: a.so,
        Zd: [a.Zd, a.Xn],
        de: a.de,
        ee: a.ee,
        bb: a.ko,
        R: a.R,
        ua: a.ua,
        fe: a.fe,
        mf: a.mf,
        nf: a.nf,
        Lc: a.Lc,
        ie: a.ie,
        le: a.le,
      })
    },
  })
  Ra = c.j(E, {
    Fk: !1,
    Dk: !1,
    u: function (a) {
      a[d.Sd] = this.qg
      a[d.mc] = this.zc
    },
    L: function (a) {
      a[d.vb] = this.tg
    },
    qg: function () {
      this.Fk = !0
    },
    zc: function () {
      ;(this.b.w.fa && this.Fk && this.Dk) || (this.Oa(h.rb.f.sw, { ga: 1 }), (this.Dk = !0))
    },
    tg: function () {
      this.Dk = this.Fk = !1
    },
  })
  Ca = U = Ba = Aa = za = N = void 0
  N = function () {
    this.p()
  }
  N.prototype = c.F({
    uh: null,
    we: null,
    p: c.J,
    getName: function () {
      return this.uh
    },
    mJ: function () {
      return this.we
    },
    Zf: function () {},
    kt: function (a) {
      return c.Ke(a)
    },
  })
  za = c.j(N, {
    uh: 'count',
    we: '',
    Zf: function (a) {
      return a.ga
    },
  })
  Aa = c.j(N, {
    uh: 'percentage',
    we: 'pct',
    Zf: function (a) {
      return a.Me
    },
  })
  Ba = c.j(N, {
    uh: 'durationMillis',
    we: 'ms',
    Zf: function (a) {
      return a.ib
    },
  })
  U = function (a, b) {
    this.Fa = a.Fa || this.Tj
    this.Ve = this.Ti = this.Fg = null
    this.Is()
    this.I = b
    this.og = c.F({}, this.bo.Be, a.Be)
    void 0 !== a.At && (this.og = c.F({}, this.og, { pageAsin: a.At }))
    this.Ie = a.Ie
    a.Ie ||
      ((this.Jh = {}),
      (this.vk = [
        c.da.ni(),
        '//',
        this.Dy(a.di, a.Ei),
        '/1/action-impressions/1/OP/',
        a.Xl || this.bo.Xl,
        '/action',
      ].join('')),
      (this.vy = a.tC || 30),
      a.VI || this.kr())
  }
  U.prototype = {
    iw: /__REGION_CODE__/,
    Tj: 'UNKNOWN',
    iv: {
      prod: 'fls-__REGION_CODE__.amazon.com',
      gamma: 'fls-gamma-__REGION_CODE__.amazon.com',
      beta: 'fls-gamma-__REGION_CODE__.amazon.com',
      local: 'localhost',
    },
    tb: { Ye: new za(), Vo: new Aa(), ho: new Ba() },
    Dy: function (a, b) {
      return this.iv[a || 'prod'].replace(this.iw, c.wa.Ui(b || 'na'))
    },
    dF: function (a) {
      a = a || this.Tj
      this.qh(this.Fa) ? (this.Fa = a) : (this.FD = a)
    },
    Is: function () {
      this.qh(this.Fg) ? (this.Fg = c.ta.random()) : (this.GD = c.ta.random())
    },
    jF: function (a) {
      a = a || null
      this.qh(this.Ti) ? ((this.Ti = a), (this.Ve = null)) : ((this.HD = a), (this.xt = null))
    },
    hF: function (a) {
      a = a || null
      this.qh(this.Ve) ? (this.Ve = a) : (this.xt = a)
    },
    Ph: function (a, b, c, d) {
      return !this.Ie && d && d.kt(c) ? this.$p(a + b, c, d.we) : this
    },
    LE: function (a, b, c, d, g) {
      if (this.Ie || !this.vk || !d || !d.kt(c)) return this
      var h = {}
      this.$p(a + b, c, d.we, h)
      a = {}
      g && (a[this.Wu] = g)
      return this.jr(!1, h, a)
    },
    $p: function (a, b, c, d) {
      var g = this.Ex(a)
      a = g.nC
      g = g.ZE
      d = d || this.Jh
      c = c || ''
      d[c] = d[c] || {}
      d[c][a] = d[c][a] || {}
      d[c][a][g] = b
      return this
    },
    Ex: function (a) {
      var b = a.lastIndexOf('.') + 1
      return { nC: a.substring(0, b), ZE: a.substring(b) }
    },
    cx: function (a, b) {
      a = a || this.Jh
      var d = c.F({}, this.og, b)
      if (c.every(a, this.dy, this)) return null
      var f = [this.vk]
      c.m(a, function (a, b) {
        a && (a = ':u\x3d' + a)
        c.m(b, function (b, d) {
          var e = []
          c.m(d, function (a, b) {
            1 !== b && (a += '@v\x3d' + b)
            e.push(a)
          })
          f.push(b + ':' + e.join(',') + a)
        })
      })
      this.mx()
      var g = f.join('/') + '?'
      return this.wy(g, d)
    },
    wy: function (a, b) {
      var d = c.F({}, b, {
        contentId: this.Fa,
        titleSessionId: this.Fg,
        titleSessionStartInstant: this.Ti,
        titleSessionEndInstant: this.Ve,
      })
      this.vA()
      var f = 1,
        g = c.cs(d, f.toString()),
        h = a + c.da.Gg(g),
        k = {}
      f++
      c.m(this.Du, function (a, b) {
        var g = c.Rv.IB(k, b, d),
          g = c.cs(g, f.toString())
        c.fD(g) || ((h = h + '\x26' + c.da.Gg(g)), (k = b), f++)
      })
      return h
    },
    dy: function (a, b) {
      return 0 === b.length
    },
    mx: function () {
      this.Jh = {}
    },
    vA: function () {
      this.Ve &&
        ((this.Fa = this.FD), (this.Fg = this.GD), (this.Ti = this.HD), (this.Ve = this.xt))
    },
    qh: function (a) {
      return !a || a === this.Tj
    },
    vD: function (a) {
      c.F(this.og, a)
    },
    Di: function (a) {
      if (!this.Ie && this.vk) return this.jr(a)
    },
    jr: function (a, b, d) {
      if ((b = this.cx(b, d))) (b = c.da.Ct(b, '1')), a || this.I.H(h.Uj, { q: c.v(), url: b })
    },
    kr: function () {
      t.setTimeout(c.C.Q(this.kr, this), 1e3 * this.vy)
      this.Di()
    },
  }
  ;(function () {
    function a(a) {
      var b = {},
        d = B.call(arguments)
      c.m(d, function (a, c) {
        b[c] = 'Aggregate'
      })
      return b
    }
    var b = {
      service: 'Airy',
      client: 'Unknown',
      method: 'Unknown',
      class: 'Unknown',
      instance: zc,
      hostgroup: 'Unknown',
      host: 'Unknown',
      marketplaceId: 'ATVPDKIKX0DER',
    }
    b.requestId = c.wa.PE(20)
    b.session = '123-1234567-1234567'
    c.F(U.prototype, {
      Wu: 'hostgroup',
      bo: { Xl: 'vap-metrics', Be: b },
      Du: [
        a('instance'),
        a('client', 'method'),
        a('client', 'method', 'instance'),
        a('class', 'instance'),
        a('method', 'class', 'instance'),
        a('class'),
      ],
    })
  })()
  Ca = c.j(u, {
    k: g.f,
    Sk: {},
    u: function (a) {
      a[d.O] = this.vm
    },
    L: function (a) {
      a[h.Uj] = this.WF
    },
    vm: function (a, b) {
      this.Sk = b.Be
    },
    WF: function () {
      this.b.zd.vD(this.Sk)
      this.Sk = {}
    },
  })
  Mb = c.j(u, {
    Wo: '__EVENT_NAME__',
    nv: 416719,
    th: '',
    p: function () {
      var a = this.b.w,
        b = c.Kd(this.b.w.ZB),
        d = a.wF
      b &&
        ua.XF(b, d) &&
        ((b.e = this.Wo),
        (this.Hs = ua.yC(b, this.nv, { di: a.di, SC: d, Ei: a.Ei })),
        (this.th = a.$B))
    },
    u: function (a) {
      this.Hs &&
        (c.m(
          h.up,
          function (b, c) {
            a[c] = this.YE
          },
          this,
        ),
        (a[d.Rn] = this.tB))
    },
    tB: function (a, b) {
      this.th = b.ym
    },
    YE: function (a) {
      a = a.type
      null != this.th && (a += this.th)
      a = this.Hs.replace(this.Wo, a)
      a = c.da.Ct(a)
      this.b.I.H(h.Uj, { q: c.v(), url: a })
    },
  })
  Nb = c.j(u, {
    k: c.La(g),
    lv: 100,
    dv: /Duration$/,
    Vv: /Percentage$/,
    Qg: h.A.Jc,
    Nv: h.rb.Jc,
    Ov: h.za.Jc,
    tb: null,
    yi: {
      NE: [h.A.INIT, h.A.f, h.A.f.fo, h.A.f.qp, h.A.f.cp, h.A.kd],
      KE: [h.A.f.Gj, h.A.f.no],
      dC: [h.rb.f],
      error: [h.za.f, h.za.kd],
    },
    p: function () {
      this.ra = this.b.zd
      this.tb = this.ra.tb
    },
    u: function (a) {
      this.gB(a)
      a[d.Wg] = this.fE
      a[h.A.f.Fn] = this.ND
      a[h.A.f.Xe] = this.QD
      a[h.A.f.dj] = this.RD
      c.m(
        h.A.f.Jn,
        function (b, c) {
          a[c] = this.Xm
        },
        this,
      )
      c.m(
        h.A.f.Ln,
        function (b, c) {
          a[c] = this.Xm
        },
        this,
      )
      c.m(
        h.A.f.Mn,
        function (b, c) {
          a[c] = this.Xm
        },
        this,
      )
      a[d.$c] = this.pg
      a[d.Jj] = this.kE
      c.g.l.$b() && (a[k.fd] = this.bE)
    },
    gB: function (a) {
      this.ra &&
        (c.m(
          this.yi.NE,
          function (b, d) {
            c.m(
              d,
              function (b, c) {
                a[c] = this.Kf
              },
              this,
            )
          },
          this,
        ),
        (a[h.A.ad] = this.Kf),
        (a[h.A.Vg] = this.Kf),
        (a[h.A.ro] = this.Kf),
        (a[h.A.pp] = this.Kf),
        c.m(
          this.yi.KE,
          function (b, c) {
            a[c] = function (a, b) {
              this.wk(c) === this.tb.Ye && void 0 === b.ga && (b.ga = 1)
              this.Mz(a, b)
            }
          },
          this,
        ),
        c.m(
          this.yi.dC,
          function (b, d) {
            c.m(
              d,
              function (b, c) {
                a[c] = this.Jz
              },
              this,
            )
          },
          this,
        ),
        c.m(
          this.yi.error,
          function (b, d) {
            c.m(
              d,
              function (b, c) {
                a[c] = this.Kz
              },
              this,
            )
          },
          this,
        ))
    },
    fE: function (a, b) {
      b.Qd ? this.ra.Di(!0) : c.C.ka(this.ra.Di, this.lv, this.ra)
    },
    wk: function (a) {
      return this.Vv.test(a) ? this.tb.Vo : this.dv.test(a) ? this.tb.ho : this.tb.Ye
    },
    Kf: function (a, b) {
      this.nr(a, b, this.Qg)
    },
    Jz: function (a, b) {
      this.nr(a, b, this.Nv)
    },
    nr: function (a, b, c) {
      a = a.type
      var d = this.wk(a)
      this.ra.Ph(c, a, d.Zf(b), d)
    },
    Mz: function (a, b) {
      var c = a.type,
        d = this.wk(c)
      this.ra.LE(this.Qg, c, d.Zf(b), d, b.Cb)
    },
    Kz: function (a) {
      this.XE(a.type)
    },
    XE: function (a) {
      c.m(c.Ia(a), this.Lz, this)
      this.ra.Di()
    },
    Lz: function (a, b) {
      this.ra.Ph(this.Ov, b, 1, this.tb.Ye)
    },
    pg: function (a, b) {
      var d = b.B
      c.g.l.$b() ? this.Or(d) : this.nl(d.type)
    },
    kE: function (a, b) {
      this.nl(b.Ot)
    },
    nl: function (a) {
      c.F(this.ra.og, { class: a })
    },
    ND: function (a, b) {
      this.ra.Ph(this.Qg, a.type, b.ha / 1e3, this.tb.Ye)
    },
    QD: function (a, b) {
      this.Zk(a.type, b.Y, b.ib, this.tb.ho)
    },
    RD: function (a, b) {
      this.Zk(a.type, b.Y, b.Me, this.tb.Vo)
    },
    Zk: function (a, b, c, d) {
      this.ra.Ph(this.Qg, a + b, c, d)
    },
    Xm: function (a, b) {
      this.Zk(a.type, b.Y, b.ga, this.tb.Ye)
    },
    bE: function () {
      this.Or(this.b.Xa.ec)
    },
    Or: function (a) {
      this.nl(a.type + '.' + c.da.getExtension(a.yc()))
    },
  })
  Ob = c.j(u, {
    k: [g.f, g.aa],
    p: function () {
      this.Ih = this.Ga(d.Wg, g.Nb)
    },
    u: function (a) {
      a[k.pb] = this.Ih
      a[d.mc] = this.Ih
    },
    L: function (a) {
      a[d.je] = this.Ih
      a[d.vb] = this.Ih
    },
  })
  Pb = c.j(u, {
    p: function () {
      this.wh = {}
      this.Ik = !1
      this.ra = this.b.zd
    },
    u: function (a) {
      a[d.Wg] = this.$E
      a[d.vb] = this.iF
    },
    gF: function (a) {
      this.Fz = a
      return this
    },
    $E: function () {
      c.m(this.ra.Jh, this.zz, this)
      this.Ik && this.OF()
    },
    zz: function (a, b) {
      c.m(b, this.Nz, this)
    },
    Nz: function (a, b) {
      c.Le(b) || (this.wh[a] = b)
      c.m(
        b,
        function (b, c) {
          this.wh[a + b] = c
        },
        this,
      )
    },
    iF: function () {
      this.Ik = !0
    },
    OF: function () {
      this.Fz.H(d.ew, { q: c.v(), Ft: this.wh })
      this.wh = {}
      this.Ik = !1
    },
  })
  Qa = function (a) {
    var b = c.h.wt({ display: 'none' })
    b.src = 'about:blank'
    c.h.fc(b, a)
  }
  Qa.prototype = {}
  V = Pa = Oa = Na = Ma = La = Ka = ia = Ja = Ia = ha = Ha = Ga = Fa = ga = void 0
  ga = c.j(E, {
    Hj: d.oa,
    Se: function (a, b) {
      this.Ib({ type: this.Hj }, c.F(b, { K: !1 }))
    },
    Ts: function (a, b) {
      var c = this.gs(b, this.Hj)
      if (null != c) return this.Al(this.Hj), c
    },
  })
  Fa = c.j(E, {
    f: h.A.f,
    Nh: null,
    nd: null,
    uf: [],
    p: function () {
      this.uf.push(new Ua())
      this.uf.push(new Va())
      this.uf.push(new Wa())
    },
    u: function (a) {
      a[k.cb] = this.Hm
      a[k.Lg] = this.PD
      a.blur = this.Bm
      a.focusin = this.Em
    },
    ca: function () {
      this.b.ea.$C() && (this.Nh = q.hasFocus())
    },
    L: function (a) {
      a[d.We] = this.OD
    },
    PD: function (a, b) {
      this.nd = b.Y
    },
    Bm: function () {
      this.Nh = !1
    },
    Em: function () {
      this.Nh = !0
    },
    Hm: function (a, b) {
      this.Nh &&
        (b.bt ||
          c.m(
            this.uf,
            function (a, c) {
              c.Wb(b, this.nd)
            },
            this,
          ))
    },
    OD: function () {
      c.m(
        this.uf,
        function (a, b) {
          var c = b.ki()
          this.Gz(c)
          b.Vh()
        },
        this,
      )
    },
    Gz: function (a) {
      c.m(
        a,
        function (a, d) {
          c.m(
            d,
            function (a, b) {
              this.Oa(a, b)
            },
            this,
          )
        },
        this,
      )
    },
  })
  Ga = c.j(E, {
    u: function (a) {
      a[d.Sd] = [this.tu, this.Ga([h.A.f.oo, h.A.f.mo, h.A.f.no])]
      a[p.Pg] = this.Ga(h.A.f.po)
    },
  })
  Ha = c.j(E, {
    A: h.A,
    u: function (a) {
      a[d.qo] = this.fq(1)
    },
    L: function (a) {
      a.swfready = this.fq(0)
    },
    fq: function (a) {
      return c.C.Q(function (b, c) {
        c.ga = a
        this.Oa(h.A.ro, c)
      }, this)
    },
  })
  ha = c.j(E, {
    f: h.A.f,
    p: function () {
      ha.prototype.t.p.apply(this, arguments)
      this.Lh = {}
    },
    u: function (a) {
      a[this.f.dj] = this.lB
    },
    L: function (a) {
      a[d.vb] = this.tn
    },
    lB: function (a, b) {
      this.Lh[b.ha] = b.Me
    },
    tn: function () {
      var a = this.fx()
      a && this.Oa(this.f.Fn, { q: c.v, ha: x.round(a) })
      this.Lh = {}
    },
    fx: function () {
      var a = 0
      c.m(this.Lh, function (b, c) {
        a += c * b
      })
      return a / c.iu(this.Lh)
    },
  })
  Ia = c.j(ga, {
    f: h.A.f,
    vf: null,
    nd: null,
    u: function (a) {
      a[H.qj] = this.Ib
      a[H.Go] = this.xd(H.qj, this.f.ov)
      a[H.rj] = this.Ib
      a[H.Ho] = this.xd(H.rj, this.f.Cv)
      a[H.sj] = this.Ib
      a[H.Io] = this.xd(H.sj, this.f.Kv)
      a[d.oa] = this.Se
      a[d.Ua] = this.Nd
      a[k.Yb] = this.Nd
      a[k.nc] = this.Se
      a[d.va] = this.Nd
      a[d.qa] = this.Se
      a[k.Lg] = this.jB
      a[k.Zb] = this.Nd
    },
    L: function (a) {
      a[d.Tg] = this.Nd
      a[d.Za] = this.Nd
    },
    jB: function (a, b) {
      var d = b.ha,
        f = b.Y
      f != this.nd &&
        (this.lA(d),
        this.b.o.V && (this.Nd(a, c.F({}, b, { ha: this.vf, Y: this.nd })), this.Se(a, b)),
        (this.vf = d),
        (this.nd = f))
    },
    lA: function (a) {
      this.Qp() && this.n(a > this.vf ? this.f.Kn : this.f.In, { timestamp: c.v() })
    },
    Nd: function (a, b) {
      if (this.Qp()) {
        var d = this.Ts(a, b)
        null != d &&
          this.n(this.f.Xe, {
            q: c.v(),
            ib: d,
            ha: void 0 === b.ha ? this.vf : b.ha,
            Y: void 0 === b.Y ? this.nd : b.Y,
          })
      }
    },
    Qp: function () {
      return this.b.o.hb && this.vf ? !0 : !1
    },
  })
  Ja = c.j(E, {
    A: h.A,
    k: g.f,
    u: function (a) {
      a[p.$e] = this.Ga(h.za.f.mj)
      a[p.ff] = this.Ga(h.za.f.tj)
      a[p.bh] = this.Ga(h.za.f.Ew)
      a[p.ia] = this.Ga(h.za.f.Iw)
      a.rendererinit = this.Ib
      a.rendererready = this.xd('rendererinit', this.A.f.Zu)
    },
    L: function (a) {
      a.embed = this.Ib
      a.initstart = this.xd('embed', this.A.INIT.fv)
      a.skinfetchinit = this.Ib
      a.skinloaded = this.xF
      a.uiready = this.QF
    },
    xF: function (a, b) {
      this.Ib(a, b)
      this.lb(b, 'embed', this.A.INIT.gv)
      this.lb(b, 'skinfetchinit', this.A.kd.Kj)
    },
    QF: function (a, b) {
      this.lb(b, 'embed', this.A.INIT.ev)
      this.lb(b, 'skinloaded', this.A.kd.Ev)
    },
  })
  ia = c.j(E, {
    f: h.A.f,
    p: function () {
      ia.prototype.t.p.apply(this, arguments)
      this.ql = {}
      this.me = {}
      this.Qf = null
    },
    u: function (a) {
      a[this.f.Wj] = this.$F
      a[this.f.Xe] = this.kB
    },
    L: function (a) {
      a[d.vb] = this.tn
    },
    $F: function (a, b) {
      this.Qf = b.ib
      this.Hz()
      c.m(this.ql, this.lr, this)
    },
    Hz: function () {
      if (!this.b.w.fa) {
        var a = this.Up(this.Qf / c.ke.Lo, this.b.o.U)
        this.Oa(this.f.Lw, { q: c.v(), Me: a })
      }
    },
    kB: function (a, b) {
      this.ql[b.Y] = b.ib
      this.me[b.Y] = b.ha
      this.Qf && this.lr(b.Y, b.ib)
    },
    lr: function (a, b) {
      var d = this.Up(b, this.Qf)
      this.Oa(this.f.dj, { q: c.v(), Me: d, Y: parseInt(a, 10), ha: this.me[a] })
    },
    Up: function (a, b) {
      return b ? parseFloat(((100 * a) / b).toFixed(2)) : 0
    },
    tn: function () {
      this.ql = {}
      this.me = {}
      this.Qf = null
    },
  })
  Ka = c.j(ga, {
    f: h.A.f,
    u: function (a) {
      a[d.oa] = this.Se
      a[d.Ua] = this.Hg
      a[k.Yb] = [this.tu, this.Ht]
      a[k.nc] = this.xd(k.Yb, [this.f.Xg, this.f.Fj, this.f.Gj], null, !0)
      var b = [this.f.hp, this.f.pw]
      a[d.va] = this.Ht
      a[d.qa] = this.xd(d.va, b, null, !0)
      a[k.Zb] = this.Hg
    },
    L: function (a) {
      a[d.We] = this.sl
      a[d.Za] = this.Hg
      a[d.Tg] = this.Hg
    },
    Ht: function (a, b) {
      this.b.o.V && (this.Ib(a, b), this.Hg(a, b))
    },
    Us: function (a, b) {
      this.b.o.V && this.Se(a, b)
    },
    Hg: function (a, b) {
      var d = this.Ts(a, b)
      null != d && this.n(this.f.Wj, { q: c.v(), ib: d })
    },
    sl: function () {
      var a = this.b.o.U
      null != a && this.Oa(this.f.Mv, { q: c.v(), ib: x.round(1e3 * a) })
    },
  })
  La = c.j(E, {
    A: h.A,
    p: function () {
      this.t.p()
      this.Ff = !1
    },
    u: function (a) {
      a[d.O] = this.ZD
      a[d.Gc] = this.ls
      a[d.qc] = this.Bc
      a[d.ad] = this.Ga(h.A.ad)
      a[d.Ma] = this.Ib
      a[k.fd] = this.aE
      a[k.pj] = this.$D
      a[k.pb] = this.UD
    },
    ZD: function (a, b) {
      this.Ff = !1
      b.K || (this.ls(), this.Ib(a, b))
    },
    Bc: function () {
      this.Ff = !0
    },
    aE: function (a, b) {
      this.Ff || (this.lb(b, d.O, this.A.f.Jv), this.lb(b, d.Ma, this.A.f.$v))
    },
    $D: function (a, b) {
      this.Ff || (this.lb(b, d.O, this.A.f.Iv), this.lb(b, d.Ma, this.A.f.Zv))
    },
    UD: function (a, b) {
      this.Ff || (this.lb(b, d.O, this.A.f.Hv), this.lb(b, d.Ma, this.A.f.Yv))
    },
  })
  Ma = c.j(E, {
    f: h.A.f,
    k: g.f,
    u: function (a) {
      a[p.wj] = this.Ga([this.f.Jo, this.f.Ko])
      a[p.Qj] = this.Ga([this.f.lp, this.f.mp])
    },
  })
  Na = c.j(E, {
    Rg: d.Ma,
    k: [g.f, g.aa],
    Ck: !1,
    u: function (a) {
      a[d.Ma] = this.Gt
      a[d.ua] = this.Gt
      a[d.mc] = this.mB
      a[d.O] = this.Zc
    },
    L: function (a) {
      a[d.vb] = this.Zc
    },
    Gt: function (a, b) {
      a.type = this.Rg
      this.Ib(a, b)
    },
    Zc: function (a, b) {
      b.K || b.k === g.aa || (this.Ck = !1)
    },
    mB: function (a, b) {
      if (!this.Ck) {
        this.Ck = !0
        var c = r.uj.A.aa,
          d = h.A.f,
          l = h.A
        this.lb(b, this.Rg, b.k === g.aa ? c.aw : d.Vg)
        this.lb(b, this.Rg, l.Vg)
        this.Al(this.Rg)
      }
    },
  })
  Oa = c.j(w, {
    k: g.f,
    lc: function (a) {
      a.unload = this.NF
    },
    NF: function () {
      this.b.I.H(d.Tg, { q: c.v(), Qd: !0 })
      return this
    },
  })
  Pa = c.j(E, {
    A: h.A.f,
    L: function (a) {
      a[d.je] = this.Ga(h.A.f.op)
    },
  })
  V = c.j(u, {
    k: g.f,
    p: function () {
      V.prototype.t.p.call(this)
      this.ph = !1
      this.ra = this.b.zd
    },
    u: function (a) {
      a[d.O] = this.Xh
      a[d.X] = this.Wi
      a[d.ua] = this.Yc
      a[d.Ma] = this.Wi
    },
    L: function (a) {
      V.prototype.t.L.call(this, a)
      a[d.bf] = this.Xh
      a[d.bd] = this.su
      a[d.Tg] = this.Xh
      a[d.np] = this.Wi
    },
    Yc: function (a, b) {
      this.Xh(a, b).Wi(a, b)
    },
    Wi: function (a, b) {
      if (this.ph) return this
      this.ph = !0
      this.ra.jF(b.q)
      this.n(h.A.pp, { ga: 1 })
      this.b.I.H(d.je, { q: c.v() })
      return this
    },
    Xh: function (a, b) {
      a = a || {}
      return (b && b.K) || !this.ph ? this : this.su(a, b)
    },
    su: function (a, b) {
      this.ph = !1
      var e = (b || {}).q || c.v()
      this.ra.hF(e)
      this.b.I.H(d.We, { q: e, Qd: b.Qd }).H(d.vb, { q: e, Qd: b.Qd })
      return this
    },
  })
  Ea = Da = void 0
  Da = c.j(u, {
    k: g.f,
    p: function () {
      this.ra = this.b.zd
    },
    u: function (a) {
      a[d.O] = this.S
    },
    S: function (a, b) {
      this.ra.dF(b.Fa)
    },
  })
  Ea = c.j(u, {
    p: function () {
      this.ra = this.b.zd
      this.eA = this.b.o
    },
    u: function (a) {
      a[d.je] = this.Km
    },
    Km: function () {
      this.eA.oi && this.ra.Is()
    },
  })
  var Cc = c.j(tb, {
      FB: function (a) {
        var b = this.Da
        b.aD && this.sC(a) && (b.Xa.Ed = !1)
        var d = new y.ld(b.Xa.Ed)
        a = a || b.w.ng
        b = c.C.Q(this.Hx, this, d)
        d.select(a, b)
      },
      sC: function (a) {
        return c.some(
          a,
          function (a, c) {
            var d = c.jb
            return 'video/mp4' === d || 'video/flv' === d || 'video/x-flv' === d
          },
          this,
        )
      },
      Hx: function (a, b) {
        var c = this.Da.w,
          d = a.gb(b),
          g = this.JB(this.Da),
          c = new y.kf(this.Da, {
            k: this.yb,
            Ae: c.Ae,
            ji: c.ji,
            Zs: d,
            Ed: c.Ed,
            kc: g,
            Si: c.Si,
          })
        this.Ox(c, y.pa, this.Da, g)
        new Db(this.Da, { k: this.yb, B: c, kc: g }).bind()
      },
      HB: function () {
        db.create(this.Da.I, this.Da, this.yb)
      },
      JB: function (a) {
        return new Bb(a).Ec(this.yb).bind()
      },
      Ox: function (a, b, c, f) {
        c = c || this.Da
        b = new b(c, { B: a, r: a.r, kc: f }).Ec(this.yb).bind()
        c.I.H(d.Dj, { wc: b, k: this.yb, B: a })
      },
      KB: function () {
        new m.zw(this.Da).bind()
      },
    }),
    Dc = c.j(tb, {
      pC: function () {
        var a = this.Da.w,
          b = this.Da.I
        a.du
          ? (Ib.bind('resourceadded', this.bA, this),
            c.yw.oC(a.du, {
              hu: function () {},
              error: function () {
                b.H(h.za.kd.tj)
              },
            }))
          : (a.QC || (this.Da.cu = Hb.beacon), b.H('skinloaded'))
      },
      Gq: !1,
      bA: function (a, b) {
        this.Gq || ((this.Gq = !0), (this.Da.cu = b.$m), this.Da.I.H('skinloaded'))
      },
      tD: function () {
        var a = this.Da,
          b = a.cu
        if (b) {
          c.h.Rf(a.Na, 'airy-skin-' + b.skinName)
          var d
          try {
            d = new lb(a).parse(b)
          } catch (f) {
            a.I.H(h.za.kd.mj)
            return
          }
          b = a.w
          c.m(b.XB, function (a, b) {
            d[b] = null
          })
          c.m(b.TC, function (a, b) {
            var c = d[a]
            c && c.Ea(b)
          })
          var b = a.$.ME(d),
            g = this.Tx()[n.rp]
          g && g.dn()
          c.m(d, this.yx, this)
          b.eB().GA(a.Na)
          new Ac(a).bind()
        }
      },
      Tx: function () {
        var a = {}
        c.m(
          m.G,
          function (b, c) {
            var d = new c(this.Da).bind()
            a[d.D] = d
          },
          this,
        )
        return a
      },
      yx: function (a, b) {
        if (!b) return null
        var c = new Jb(this.Da).mF(b).bind()
        b.cF(c)
        return c
      },
    })
  kb.prototype = {
    Jx: function (a, b) {
      var c = {}
      c.html = new m.ld(null, b)
      c.hybrid = new y.ld(a)
      return c
    },
    evaluate: function (a) {
      a = c.Ia(a)
      return c.find(
        this.ut,
        function (b, d) {
          var f = this.sz[d]
          if (f && ('hybrid' !== d || !c.Ic.ct())) return this.TA(a, f)
        },
        this,
      )
    },
    TA: function (a, b) {
      return c.some(a, function (a, c) {
        var d = b.gb(c)
        return b.Je(d)
      })
    },
  }
  var Ec = c.j(wb, {
      LA: function (a, b) {
        return this.wg({
          name: c.De(),
          ja: function () {
            b ? a.FB() : a.HB()
          },
          scope: a,
        })
      },
      MA: function (a) {
        return this.wg({ name: 'sizecontrollerready', ja: a.KB, scope: a })
      },
      NA: function (a, b) {
        return this.eF(a)
          .wg({ name: 'skinfetchinit', ja: a.pC })
          .wg({
            name: 'uiready',
            Gi: ['sizecontrollerready', 'skinloaded'].concat(b || []),
            ja: a.tD,
          })
      },
      KA: function (a) {
        return this.vB().wg({
          name: c.De(),
          Gi: { ei: 'rendererready', k: g.f },
          ja: function () {
            var b = a.w
            a.I.H(d.O, {
              Sc: b.Sc,
              Wh: b.Wh,
              Fa: b.Fa,
              Sb: b.Sb,
              vc: b.vc,
              k: g.f,
              fi: b.fi,
              Cd: b.Cd,
              Md: b.Md,
              Od: b.Od,
              mb: b.mb,
              Ya: b.xm || b.ng,
            })
          },
        })
      },
    }),
    va = c.j(sb, {
      create: function () {
        var a = this.Bb,
          b = a.w,
          c = a.I,
          d = (a.EJ = new kb(b, a.Xa.Ed)),
          h = (a.AD = new ub(b)),
          k = b.xm,
          h = k ? h.select(k).vu : b.ng,
          d = (a.mode = d.evaluate(h))
        if (!d && (c.H(p.ia), b.dt)) throw 'Video is unsupported for the supplied configuration'
        a.RJ = {}
        b = new Cc(a, g.f)
        a = a.dK = new xb(c)
        this.Zl(b, 'hybrid' === d, d).xB(a)
      },
      Zl: function (a, b, c) {
        var d = new Ec().MA(a)
        return c ? d.LA(a, b).KA(this.Bb) : d
      },
    }),
    va = c.j(va, {
      Zl: function (a, b, c) {
        this.Bb.$ = new m.wp()
        new bb(this.Bb).bind()
        new yc(this.Bb).Cg(this.Bb.Na).bind()
        new Oa(this.Bb).Cg(t).bind()
        new vc(this.Bb).Cg(this.Bb.Na).bind()
        new wc(this.Bb).Cg(t).bind()
        new xc(this.Bb).Cg(t).bind()
        var d = new Dc(this.Bb)
        return va.prototype.t.Zl.apply(this, arguments).NA(
          d,
          c ? [{ ei: 'rendererready', k: g.f }] : null,
        )
      },
    })
  A.embed = function (a) {
    var b = c.v(),
      e = {}
    a = e.w = Tb(a)
    a.Rb.lg = a.Rb.lg || a.Qa.ju
    a.Rb.eg = a.Rb.eg || a.Qa.ju
    a.backgroundColor = a.backgroundColor || '#000000'
    var f = a.parentElement || c.h.Vl(a.Cc)
    e.ea = new vb(a)
    var h = (e.Na = Sb(e, a.backgroundColor)),
      k = (e.xg = Rb())
    c.h.fc(k, h)
    var m = (e.I = new ca('Global', c.La(g)))
    c.m(a.tl, function (a, b) {
      m.Th(a, b, null, [g.Nb, g.f])
    })
    c.m(a.mb.tl, function (a, b) {
      m.Th(a, b, null, [g.aa])
    })
    var n = (e.qs = new $b(e).Ec(g.f).bind())
    c.m(a.MB, function (a, b) {
      n.Yr(b)
    })
    e.Xa = new jc(e).bind()
    e.XI = new hc(e).bind()
    e.o = new ic(e).Ec(g.f).bind()
    if (((a.Sb || a.vd.Dl) && !a.Sc) || !1 === a.Sc) a.gg = !1
    new kc(e).bind()
    new Bc(e).bind()
    a.st.rt && new fc(e).Ec(g.f).bind()
    a.fa && (new cc(e).bind(), new lc(e).bind(), new gc(e).bind())
    a.pF && ((a.gg = !1), m.H(d.cf, { timestamp: c.v() }))
    e.mK = new Qa(h)
    e.zd = new U(a, m)
    e.wD = new c.Ba.ab()
    k = c.Kd(e)
    new Da(e).bind()
    new Ea(e).bind()
    var p = (k.I = new G('Metrics')),
      r = new Sa(e),
      q = [$, aa],
      t = [ma, na, oa, ba, pa, qa, K.$n, K.io]
    a.fa && (t = t.concat(q))
    c.m(t, function (a, b) {
      var c = new b(e).Ec(g.f).Ji(p).bind()
      r.FA(c)
    })
    r.Ec(g.f).Ji(p).bind()
    new Ta(e).Ji(p).bind()
    new ha(k).bind()
    new ia(k).bind()
    new Nb(k).bind()
    new Pb(k).gF(e.I).bind()
    new Ca(e).bind()
    k = [Ga, Ma]
    q = [Mb, ja, X, Ra, Fa, Ha, Ia, Ja, Ka, La, V, Pa]
    a.fa && (q = q.concat(k))
    new Ob(e).bind()
    c.m(q, function (a, b) {
      new b(e).Ec(g.f).bind()
    })
    new Na(e).bind()
    new ec(e).Ec(g.f).bind()
    new sa(e).bind()
    new bc(e).bind()
    new Kb(e).bind()
    new dc(e).bind()
    e.w.mb.at = !1
    k = new ac(e).bind().ul()
    try {
      new va(e).create()
    } catch (u) {
      return k
    }
    c.h.fc(h, f)
    a.DF && h.focus && h.focus()
    c.C.ka(function () {
      m.H('embed', { q: b }).H('initstart')
    }, 0)
    return k
  }
  var R = { opacity: 0, filter: 'alpha(opacity\x3d0)', visibility: 'hidden' },
    eb =
      'progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d"' +
      (('https:' === location.protocol ? 'https://images-na.ssl-' : 'http://z-ecx.') +
        'images-amazon.com/images/G/01/vap/video/airy2/test/2.0.1460.0/images/beacon._TTW_.png') +
      '")'
  t.Airy.addResource('beacon', {
    version: 2,
    skinName: 'beacon',
    views: [
      {
        id: 'controlsContainer',
        style: R,
        animations: {
          playerEvents: {
            paused: { type: 'fadeIn', duration: 200, disableOnCompletion: !0 },
            playing: { type: 'fadeOut', delay: 2e3, duration: 1e3, enableOnStart: !0 },
          },
          mouseEvents: {
            mouseover: {
              disablingPlayerEvents: ['paused'],
              enablingPlayerEvents: ['playing'],
              type: 'fadeIn',
              duration: 200,
              disableOnCompletion: !0,
              inactivity: {
                type: 'fadeOut',
                exception: !0,
                delay: 2e3,
                duration: 1e3,
                enableOnStart: !0,
              },
            },
            mouseout: {
              disablingPlayerEvents: ['paused'],
              enablingPlayerEvents: ['playing'],
              type: 'fadeOut',
              delay: 2e3,
              duration: 1e3,
              enableOnStart: !0,
            },
          },
        },
      },
      {
        id: 'ageGate',
        style: R,
        addClassNames: ['airy-stage', 'airy-vertical-centering-table', 'airy-dialog'],
        defaultStateId: 'normal',
        states: { normal: {}, denied: { addClassNames: ['airy-denied'] } },
      },
      {
        id: 'ageGateVerticalCenteringTableCell',
        parentId: 'ageGate',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      {
        id: 'ageGateElementsWrapper',
        classNames: ['airy-vertical-centering-wrapper'],
        parentId: 'ageGateVerticalCenteringTableCell',
      },
      {
        id: 'ageGateElements',
        parentId: 'ageGateElementsWrapper',
        addClassNames: ['airy-dialog-elements'],
      },
      { id: 'ageGatePrompt', parentId: 'ageGateElements' },
      {
        id: 'ageGateInputs',
        parentId: 'ageGateElements',
        addClassNames: ['airy-dialog-inner-elements'],
      },
      { id: 'ageGateMonth', parentId: 'ageGateInputs', type: 'select' },
      { id: 'ageGateDay', parentId: 'ageGateInputs', type: 'select' },
      { id: 'ageGateYear', parentId: 'ageGateInputs', type: 'select' },
      {
        id: 'ageGateSubmit',
        addClassNames: ['airy-submit', 'airy-button'],
        parentId: 'ageGateInputs',
        fastClick: 'true',
        defaultStateId: 'disabled',
        states: {
          enabled: { addClassNames: ['airy-submit-enabled'] },
          disabled: { addClassNames: ['airy-submit-disabled'] },
        },
      },
      {
        id: 'installFlashDialog',
        style: R,
        addClassNames: [
          'airy-stage',
          'airy-vertical-centering-table',
          'airy-dialog',
          'airy-denied',
        ],
      },
      {
        id: 'installFlashVerticalCenteringTableCell',
        parentId: 'installFlashDialog',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      {
        id: 'installFlashElementsWrapper',
        classNames: ['airy-vertical-centering-wrapper'],
        parentId: 'installFlashVerticalCenteringTableCell',
      },
      {
        id: 'installFlashElements',
        parentId: 'installFlashElementsWrapper',
        addClassNames: ['airy-dialog-elements'],
      },
      { id: 'installFlashPrompt', parentId: 'installFlashElements' },
      {
        id: 'installFlashButtonWrapper',
        parentId: 'installFlashElements',
        addClassNames: ['airy-dialog-inner-elements'],
      },
      {
        id: 'installFlashButton',
        parentId: 'installFlashButtonWrapper',
        addClassNames: ['airy-button'],
      },
      {
        id: 'videoUnsupportedDialog',
        style: R,
        addClassNames: [
          'airy-stage',
          'airy-vertical-centering-table',
          'airy-dialog',
          'airy-denied',
        ],
      },
      {
        id: 'videoUnsupportedVerticalCenteringTableCell',
        parentId: 'videoUnsupportedDialog',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      {
        id: 'videoUnsupportedElementsWrapper',
        classNames: ['airy-vertical-centering-wrapper'],
        parentId: 'videoUnsupportedVerticalCenteringTableCell',
      },
      {
        id: 'videoUnsupportedElements',
        parentId: 'videoUnsupportedElementsWrapper',
        addClassNames: ['airy-dialog-elements'],
      },
      { id: 'videoUnsupportedPrompt', parentId: 'videoUnsupportedElements' },
      { id: 'loadingSpinnerStage', addClassNames: ['airy-stage'] },
      {
        id: 'loadingSpinnerVerticalCenteringTableCell',
        parentId: 'loadingSpinnerStage',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      {
        id: 'loadingSpinnerContainer',
        parentId: 'loadingSpinnerVerticalCenteringTableCell',
        addClassNames: ['airy-scalable-hint-container'],
      },
      {
        id: 'loadingSpinnerDummy',
        parentId: 'loadingSpinnerContainer',
        addClassNames: ['airy-scalable-dummy'],
      },
      {
        id: 'loadingSpinner',
        addClassNames: ['airy-hint'],
        parentId: 'loadingSpinnerContainer',
        style: { visibility: 'hidden' },
      },
      {
        id: 'adsScreenSizeToggle',
        addClassNames: ['airy-screen-size-toggle'],
        style: { visibility: 'hidden' },
        fastClick: 'true',
        defaultStateId: 'fullscreen',
        states: { fullscreen: I('fullscreen'), normalscreen: I('normalscreen') },
      },
      { id: 'adPromptContainer', style: { visibility: 'hidden' } },
      {
        id: 'adPromptVerticalCenteringTable',
        parentId: 'adPromptContainer',
        addClassNames: ['airy-vertical-centering-table'],
      },
      {
        id: 'adPromptVerticalCenteringTableCell',
        parentId: 'adPromptVerticalCenteringTable',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      { id: 'adPromptLabel', parentId: 'adPromptVerticalCenteringTableCell' },
      { id: 'adsControlsContainer', style: { visibility: 'hidden' } },
      {
        id: 'adsAudioToggle',
        parentId: 'adsControlsContainer',
        addClassNames: ['airy-audio-toggle'],
        style: { visibility: 'hidden' },
        fastClick: 'true',
        defaultStateId: 'audioon',
        states: { audioon: I('on'), audiooff: I('off') },
      },
      { id: 'timeRemainingLabelContainer', parentId: 'adsControlsContainer' },
      {
        id: 'timeRemainingVerticalCenteringTable',
        parentId: 'timeRemainingLabelContainer',
        addClassNames: ['airy-vertical-centering-table'],
      },
      {
        id: 'timeRemainingVerticalCenteringTableCell',
        parentId: 'timeRemainingVerticalCenteringTable',
        addClassNames: ['airy-vertical-centering-table-cell'],
      },
      {
        id: 'timeRemainingLabelWrapper',
        classNames: ['airy-vertical-centering-wrapper'],
        parentId: 'timeRemainingVerticalCenteringTableCell',
      },
      {
        id: 'timeRemainingLabel',
        parentId: 'timeRemainingLabelWrapper',
        style: { visibility: 'hidden' },
      },
      {
        id: 'adSkip',
        parentId: 'timeRemainingLabelWrapper',
        style: { visibility: 'hidden' },
        defaultStateId: 'hidden',
        states: { hidden: {}, expanded: { addClassNames: ['airy-expanded'] } },
        fastClick: 'true',
      },
      {
        id: 'adEnd',
        parentId: 'timeRemainingLabelWrapper',
        style: { visibility: 'hidden' },
        defaultStateId: 'hidden',
        states: { hidden: {}, expanded: { addClassNames: ['airy-expanded'] } },
        fastClick: 'true',
      },
      {
        id: 'learnMore',
        parentId: 'adsControlsContainer',
        style: { visibility: 'hidden' },
        fastClick: 'true',
      },
      {
        id: 'playToggleHintStage',
        addClassNames: ['airy-stage', 'airy-cursor'],
        fastClick: 'true',
      },
      {
        id: 'playToggleHintVerticalCenteringTableCell',
        parentId: 'playToggleHintStage',
        addClassNames: ['airy-vertical-centering-table-cell', 'airy-cursor'],
      },
      {
        id: 'playToggleHintContainer',
        parentId: 'playToggleHintVerticalCenteringTableCell',
        addClassNames: ['airy-scalable-hint-container'],
      },
      {
        id: 'playToggleHintDummy',
        parentId: 'playToggleHintContainer',
        addClassNames: ['airy-scalable-dummy'],
      },
      {
        id: 'playToggleHint',
        parentId: 'playToggleHintContainer',
        addClassNames: ['airy-hint', 'airy-play-hint'],
        style: { opacity: 0, filter: eb + ', alpha(opacity\x3d0)' },
        fastClick: 'true',
        defaultStateId: 'play',
        states: {
          play: {
            animations: {
              playerEvents: { pauseState: { type: 'fadeTo', duration: 350, targetValue: 0.5 } },
              mouseEvents: {
                click: {
                  triggerIds: ['playToggleHint', 'playToggleHintStage'],
                  type: 'fadeTo',
                  duration: 350,
                  targetValue: 0.5,
                },
              },
            },
          },
          pause: {
            animations: {
              playerEvents: { playState: { type: 'fadeTo', duration: 350, targetValue: 0 } },
              mouseEvents: {
                click: {
                  triggerIds: ['playToggleHint', 'playToggleHintStage'],
                  type: 'fadeTo',
                  duration: 350,
                  startValue: 0.5,
                  targetValue: 0,
                },
              },
            },
          },
        },
      },
      {
        id: 'replayHintStage',
        addClassNames: ['airy-stage'],
        style: { visibility: 'hidden' },
        fastClick: 'true',
      },
      {
        id: 'replayHintVerticalCenteringTableCell',
        parentId: 'replayHintStage',
        addClassNames: ['airy-vertical-centering-table-cell', 'airy-cursor'],
      },
      {
        id: 'replayHintContainer',
        parentId: 'replayHintVerticalCenteringTableCell',
        addClassNames: ['airy-scalable-hint-container'],
      },
      {
        id: 'replayHintDummy',
        parentId: 'replayHintContainer',
        addClassNames: ['airy-scalable-dummy'],
      },
      {
        id: 'replayHint',
        style: { filter: eb },
        fastClick: 'true',
        parentId: 'replayHintContainer',
        addClassNames: ['airy-hint'],
      },
      { id: 'autoplayHintStage', addClassNames: ['airy-stage'], style: { visibility: 'hidden' } },
      {
        id: 'autoplayHintVerticalCenteringTableCell',
        parentId: 'autoplayHintStage',
        addClassNames: ['airy-vertical-centering-table-cell', 'airy-cursor'],
      },
      {
        id: 'autoplayHintContainer',
        parentId: 'autoplayHintVerticalCenteringTableCell',
        addClassNames: ['airy-scalable-hint-container'],
      },
      {
        id: 'autoplayHintDummy',
        parentId: 'autoplayHintContainer',
        addClassNames: ['airy-scalable-dummy'],
      },
      {
        id: 'autoplayHint',
        style: { filter: eb },
        parentId: 'autoplayHintContainer',
        addClassNames: ['airy-hint'],
        defaultStateId: 'audio',
        states: {
          audio: { addClassNames: ['airy-audio-hint'] },
          play: { addClassNames: ['airy-play-hint'] },
        },
      },
      {
        id: 'screenSizeToggle',
        parentId: 'controlsContainer',
        defaultStateId: 'fullscreen',
        states: { fullscreen: I('fullscreen'), normalscreen: I('normalscreen') },
        fastClick: 'false',
      },
      { id: 'containerBottom', parentId: 'controlsContainer' },
      {
        id: 'audioToggle',
        parentId: 'audioElements',
        defaultStateId: 'audioon',
        states: { audioon: I('on'), audiooff: I('off') },
      },
      { id: 'trackBarSpacerLeft', parentId: 'containerBottom', style: { width: '11px' } },
      {
        id: 'playToggle',
        parentId: 'containerBottom',
        style: { width: '12px', marginRight: '12px' },
        fastClick: 'true',
        defaultStateId: 'play',
        states: { play: I('play'), pause: I('pause') },
      },
      {
        id: 'audioElements',
        parentId: 'containerBottom',
        style: { float: 'right', styleFloat: 'right', cssFloat: 'right', width: '34px' },
      },
      {
        id: 'audioContainer',
        parentId: 'audioElements',
        animations: {
          playerEvents: { ended: { type: 'fadeOutAndHide', duration: 200 } },
          mouseEvents: {
            mouseover: {
              type: 'fadeTo',
              triggerIds: 'audioElements',
              duration: 200,
              targetValue: 0.9,
            },
            mouseout: { type: 'fadeOutAndHide', triggerIds: 'audioElements', duration: 200 },
          },
        },
        style: R,
      },
      { id: 'audioTrackBar', parentId: 'audioContainer', style: { height: '80%' } },
      { id: 'audioScrubberBar', parentId: 'audioTrackBar' },
      { id: 'audioScrubber', parentId: 'audioTrackBar', style: { height: '12px' } },
      {
        id: 'durationLabel',
        parentId: 'containerBottom',
        style: {
          float: 'right',
          styleFloat: 'right',
          cssFloat: 'right',
          width: '26px',
          marginRight: '4px',
          textAlign: 'center',
        },
      },
      {
        id: 'liveLabel',
        parentId: 'containerBottom',
        style: {
          float: 'right',
          styleFloat: 'right',
          cssFloat: 'right',
          width: '28px',
          marginRight: '5px',
          textAlign: 'center',
        },
      },
      {
        id: 'trackBarSpacerRight',
        parentId: 'containerBottom',
        style: { float: 'right', styleFloat: 'right', cssFloat: 'right', width: '11px' },
      },
      { id: 'trackBarContainer', parentId: 'containerBottom' },
      {
        id: 'trackBar',
        parentId: 'trackBarContainer',
        addClassNames: ['airy-vertical-centering-table'],
      },
      { id: 'verticalCenteringTableCell', parentId: 'trackBar' },
      { id: 'trackBarElements', parentId: 'verticalCenteringTableCell' },
      { id: 'progressBar', parentId: 'trackBarElements' },
      { id: 'scrubberBar', parentId: 'trackBarElements' },
      { id: 'scrubber', parentId: 'trackBarElements' },
      { id: 'scrubberIcon', parentId: 'scrubber' },
      {
        id: 'adjustedAuiTooltip',
        parentId: 'scrubber',
        style: R,
        animations: {
          playerEvents: {
            pauseState: { type: 'fadeTo', duration: 200, targetValue: 0.9 },
            playState: { type: 'fadeOut', duration: 200 },
            ended: { type: 'fadeOut', duration: 200 },
          },
          mouseEvents: {
            mouseover: {
              disablingPlayerEvents: ['paused'],
              enablingPlayerEvents: ['playing'],
              type: 'fadeTo',
              triggerIds: 'containerBottom',
              duration: 200,
              targetValue: 0.9,
            },
            mouseout: {
              disablingPlayerEvents: ['paused'],
              enablingPlayerEvents: ['playing'],
              type: 'fadeOutAndHide',
              triggerIds: 'containerBottom',
              duration: 200,
            },
          },
        },
      },
      { id: 'adjustedAuiTooltipInner', parentId: 'adjustedAuiTooltip' },
      { id: 'currentTimeLabel', parentId: 'adjustedAuiTooltipInner' },
      { id: 'adjustedAuiArrowBorder', parentId: 'adjustedAuiTooltip' },
      { id: 'adjustedAuiArrow', parentId: 'adjustedAuiArrowBorder' },
    ],
  })
  c.ed.Kt('Airy', A)
  c.ed.Jt('Airy')
  if (Gb) {
    var Qb = 'Airy.' + Gb
    c.ed.Kt(Qb, A)
    c.ed.Jt(Qb)
  }
})(window, document, Math)
