/*
 regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
;(function (D) {
  var R = window.AmazonUIPageJS || window.P,
    n = R._namespace || R.attributeErrors,
    S = n ? n('DetailPagePriceTrackerAssets', '') : R
  S.guardFatal
    ? S.guardFatal(D)(S, window)
    : S.execute(function () {
        D(S, window)
      })
})(function (D, R, n) {
  'use strict'
  var S =
    'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
      ? function (n) {
          return typeof n
        }
      : function (n) {
          return n &&
            'function' === typeof Symbol &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? 'symbol'
            : typeof n
        }
  D.register('price-tracker-latency-metrics', function () {
    return { METRIC_LATENCY_WIDGET: 'priceTrackerWidget:assetsLoadedNonCriticalATF' }
  })
  D.execute('price-tracker-init', function () {
    var T = (function () {
      var n = navigator.userAgent,
        h = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
      if (/trident/i.test(h[1]))
        return (
          (n = /\brv[ :]+(\d+)/g.exec(n) || []), { vendor: 'IE', version: parseInt(n[1]) || null }
        )
    })()
    ;(T &&
      null != T.vendor &&
      0 === T.vendor.localeCompare('IE') &&
      null != T.version &&
      11 >= T.version) ||
      (D.register('price-tracker-d3', function () {
        function E(d, e) {
          return (
            e || (e = d.slice(0)),
            Object.freeze(Object.defineProperties(d, { raw: { value: Object.freeze(e) } }))
          )
        }
        function h(d, e, l) {
          return (
            (e = Wa(e)) in d
              ? Object.defineProperty(d, e, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (d[e] = l),
            d
          )
        }
        function l() {
          return (
            (l = Object.assign
              ? Object.assign.bind()
              : function (d) {
                  for (var e = 1; e < arguments.length; e++) {
                    var l = arguments[e],
                      h
                    for (h in l) ({}).hasOwnProperty.call(l, h) && (d[h] = l[h])
                  }
                  return d
                }),
            l.apply(null, arguments)
          )
        }
        function r(d, e) {
          var l = Array.isArray(d) ? d : void 0
          if (!l)
            a: {
              var h =
                null == d
                  ? null
                  : ('undefined' != typeof Symbol && d[Symbol.iterator]) || d['@@iterator']
              if (null != h) {
                var n,
                  Eb,
                  t,
                  r = [],
                  v = !0,
                  C = !1
                try {
                  if (((Eb = (h = h.call(d)).next), 0 === e)) {
                    if (Object(h) !== h) {
                      l = void 0
                      break a
                    }
                    v = !1
                  } else
                    for (
                      ;
                      !(v = (n = Eb.call(h)).done) && (r.push(n.value), r.length !== e);
                      v = !0
                    );
                } catch (Qg) {
                  C = !0
                  var y = Qg
                } finally {
                  try {
                    if (!v && null != h['return'] && ((t = h['return']()), Object(t) !== t)) {
                      l = void 0
                      break a
                    }
                  } finally {
                    if (C) throw y
                  }
                }
                l = r
              } else l = void 0
            }
          if (!(d = l || T(d, e)))
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          return d
        }
        function x(d, e, l) {
          e = ja(e)
          e = t() ? Reflect.construct(e, l || [], ja(d).constructor) : e.apply(d, l)
          if (!e || ('object' != V(e) && 'function' != typeof e)) {
            if (void 0 !== e)
              throw new TypeError('Derived constructors may only return object or undefined')
            if (void 0 === d)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          } else d = e
          return d
        }
        function N(d, e, l, h) {
          var n = G(ja(1 & h ? d.prototype : d), e, l)
          return 2 & h && 'function' == typeof n
            ? function (d) {
                return n.apply(l, d)
              }
            : n
        }
        function G() {
          return (
            (G =
              'undefined' != typeof Reflect && Reflect.get
                ? Reflect.get.bind()
                : function (d, e, l) {
                    var h
                    for (h = d; !{}.hasOwnProperty.call(h, e) && null !== (h = ja(h)); );
                    if (h)
                      return (
                        (h = Object.getOwnPropertyDescriptor(h, e)),
                        h.get ? h.get.call(3 > arguments.length ? d : l) : h.value
                      )
                  }),
            G.apply(null, arguments)
          )
        }
        function O(d, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function')
          d.prototype = Object.create(e && e.prototype, {
            constructor: { value: d, writable: !0, configurable: !0 },
          })
          Object.defineProperty(d, 'prototype', { writable: !1 })
          e && L(d, e)
        }
        function v(d) {
          var l = 'function' == typeof Map ? new Map() : void 0
          return (
            (v = function (d) {
              function h() {
                return A(d, arguments, ja(this).constructor)
              }
              if (null === d || !e(d)) return d
              if ('function' != typeof d)
                throw new TypeError('Super expression must either be null or a function')
              if (void 0 !== l) {
                if (l.has(d)) return l.get(d)
                l.set(d, h)
              }
              return (
                (h.prototype = Object.create(d.prototype, {
                  constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 },
                })),
                L(h, d)
              )
            }),
            v(d)
          )
        }
        function A(d, e, l) {
          if (t()) return Reflect.construct.apply(null, arguments)
          var h = [null]
          h.push.apply(h, e)
          h = new (d.bind.apply(d, h))()
          return l && L(h, l.prototype), h
        }
        function t() {
          try {
            var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
          } catch (Eb) {}
          return (t = function () {
            return !!d
          })()
        }
        function e(d) {
          try {
            return -1 !== Function.toString.call(d).indexOf('[native code]')
          } catch (Eb) {
            return 'function' == typeof d
          }
        }
        function L(d, e) {
          return (
            (L = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (d, e) {
                  return (d.__proto__ = e), d
                }),
            L(d, e)
          )
        }
        function ja(d) {
          return (
            (ja = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (d) {
                  return d.__proto__ || Object.getPrototypeOf(d)
                }),
            ja(d)
          )
        }
        function fa(d, e) {
          if (!(d instanceof e)) throw new TypeError('Cannot call a class as a function')
        }
        function D(d, e) {
          for (var h = 0; h < e.length; h++) {
            var l = e[h]
            l.enumerable = l.enumerable || !1
            l.configurable = !0
            'value' in l && (l.writable = !0)
            Object.defineProperty(d, Wa(l.key), l)
          }
        }
        function W(d, e, l) {
          return (
            e && D(d.prototype, e),
            l && D(d, l),
            Object.defineProperty(d, 'prototype', { writable: !1 }),
            d
          )
        }
        function Wa(d) {
          a: if ('object' == V(d) && d) {
            var e = d[Symbol.toPrimitive]
            if (void 0 !== e) {
              d = e.call(d, 'string')
              if ('object' != V(d)) break a
              throw new TypeError('@@toPrimitive must return a primitive value.')
            }
            d = String(d)
          }
          return 'symbol' == V(d) ? d : d + ''
        }
        function ra(d) {
          var e = Array.isArray(d) ? sa(d) : void 0
          e ||
            (e =
              ('undefined' != typeof Symbol && null != d[Symbol.iterator]) ||
              null != d['@@iterator']
                ? Array.from(d)
                : void 0)
          if (!(d = e || T(d)))
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          return d
        }
        function V(d) {
          '@babel/helpers - typeof'
          return (
            (V =
              'function' == typeof Symbol && 'symbol' == S(Symbol.iterator)
                ? function (d) {
                    return 'undefined' === typeof d ? 'undefined' : S(d)
                  }
                : function (d) {
                    return d &&
                      'function' == typeof Symbol &&
                      d.constructor === Symbol &&
                      d !== Symbol.prototype
                      ? 'symbol'
                      : 'undefined' === typeof d
                        ? 'undefined'
                        : S(d)
                  }),
            V(d)
          )
        }
        function ba() {
          function d(d, e, l) {
            return (
              Object.defineProperty(d, e, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              d[e]
            )
          }
          function e(d, e, l, n) {
            e = Object.create((e && e.prototype instanceof h ? e : h).prototype)
            n = new A(n || [])
            return N(e, '_invoke', { value: C(d, l, n) }), e
          }
          function l(d, e, l) {
            try {
              return { type: 'normal', arg: d.call(e, l) }
            } catch (ib) {
              return { type: 'throw', arg: ib }
            }
          }
          function h() {}
          function n() {}
          function t() {}
          function r(e) {
            ;['next', 'throw', 'return'].forEach(function (l) {
              d(e, l, function (d) {
                return this._invoke(l, d)
              })
            })
          }
          function v(d, e) {
            function h(n, t, r, v) {
              n = l(d[n], d, t)
              if ('throw' !== n.type) {
                var Ha = n.arg
                return (n = Ha.value) && 'object' == V(n) && K.call(n, '__await')
                  ? e.resolve(n.__await).then(
                      function (d) {
                        h('next', d, r, v)
                      },
                      function (d) {
                        h('throw', d, r, v)
                      },
                    )
                  : e.resolve(n).then(
                      function (d) {
                        Ha.value = d
                        r(Ha)
                      },
                      function (d) {
                        return h('throw', d, r, v)
                      },
                    )
              }
              v(n.arg)
            }
            var n
            N(this, '_invoke', {
              value: function (d, l) {
                function t() {
                  return new e(function (e, n) {
                    h(d, l, e, n)
                  })
                }
                return (n = n ? n.then(t, t) : t())
              },
            })
          }
          function C(d, e, h) {
            var n = kb
            return function (t, r) {
              if (n === ja) throw Error('Generator is already running')
              if (n === W) {
                if ('throw' === t) throw r
                return { value: x, done: !0 }
              }
              h.method = t
              for (h.arg = r; ; ) {
                if ((t = h.delegate))
                  if ((t = y(t, h))) {
                    if (t === D) continue
                    return t
                  }
                if ('next' === h.method) h.sent = h._sent = h.arg
                else if ('throw' === h.method) {
                  if (n === kb) throw ((n = W), h.arg)
                  h.dispatchException(h.arg)
                } else 'return' === h.method && h.abrupt('return', h.arg)
                n = ja
                t = l(d, e, h)
                if ('normal' === t.type) {
                  if (((n = h.done ? W : Ib), t.arg === D)) continue
                  return { value: t.arg, done: h.done }
                }
                'throw' === t.type && ((n = W), (h.method = 'throw'), (h.arg = t.arg))
              }
            }
          }
          function y(d, e) {
            var h = e.method,
              n = d.iterator[h]
            if (n === x)
              return (
                (e.delegate = null),
                ('throw' === h &&
                  d.iterator['return'] &&
                  ((e.method = 'return'), (e.arg = x), y(d, e), 'throw' === e.method)) ||
                  ('return' !== h &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError("The iterator does not provide a '" + h + "' method")))),
                D
              )
            h = l(n, d.iterator, e.arg)
            return 'throw' === h.type
              ? ((e.method = 'throw'), (e.arg = h.arg), (e.delegate = null), D)
              : (h = h.arg)
                ? h.done
                  ? ((e[d.resultName] = h.value),
                    (e.next = d.nextLoc),
                    'return' !== e.method && ((e.method = 'next'), (e.arg = x)),
                    (e.delegate = null),
                    D)
                  : h
                : ((e.method = 'throw'),
                  (e.arg = new TypeError('iterator result is not an object')),
                  (e.delegate = null),
                  D)
          }
          function F(d) {
            var e = { tryLoc: d[0] }
            1 in d && (e.catchLoc = d[1])
            2 in d && ((e.finallyLoc = d[2]), (e.afterLoc = d[3]))
            this.tryEntries.push(e)
          }
          function B(d) {
            var e = d.completion || {}
            e.type = 'normal'
            delete e.arg
            d.completion = e
          }
          function A(d) {
            this.tryEntries = [{ tryLoc: 'root' }]
            d.forEach(F, this)
            this.reset(!0)
          }
          function E(d) {
            if (d || '' === d) {
              var e = d[ka]
              if (e) return e.call(d)
              if ('function' == typeof d.next) return d
              if (!isNaN(d.length)) {
                var h = -1
                e = function ta() {
                  for (; ++h < d.length; )
                    if (K.call(d, h)) return (ta.value = d[h]), (ta.done = !1), ta
                  return (ta.value = x), (ta.done = !0), ta
                }
                return (e.next = e)
              }
            }
            throw new TypeError(V(d) + ' is not iterable')
          }
          ba = function () {
            return L
          }
          var x,
            L = {},
            da = Object.prototype,
            K = da.hasOwnProperty,
            N =
              Object.defineProperty ||
              function (d, e, h) {
                d[e] = h.value
              },
            G = 'function' == typeof Symbol ? Symbol : {},
            ka = G.iterator || '@@iterator',
            Hb = G.asyncIterator || '@@asyncIterator',
            O = G.toStringTag || '@@toStringTag'
          try {
            d({}, '')
          } catch (Ha) {
            d = function (d, e, h) {
              return (d[e] = h)
            }
          }
          L.wrap = e
          var kb = 'suspendedStart',
            Ib = 'suspendedYield',
            ja = 'executing',
            W = 'completed',
            D = {}
          G = {}
          d(G, ka, function () {
            return this
          })
          var fa = Object.getPrototypeOf
          ;(fa = fa && fa(fa(E([])))) && fa !== da && K.call(fa, ka) && (G = fa)
          var wa = (t.prototype = h.prototype = Object.create(G))
          return (
            (n.prototype = t),
            N(wa, 'constructor', { value: t, configurable: !0 }),
            N(t, 'constructor', { value: n, configurable: !0 }),
            (n.displayName = d(t, O, 'GeneratorFunction')),
            (L.isGeneratorFunction = function (d) {
              d = 'function' == typeof d && d.constructor
              return !!d && (d === n || 'GeneratorFunction' === (d.displayName || d.name))
            }),
            (L.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : ((e.__proto__ = t), d(e, O, 'GeneratorFunction')),
                (e.prototype = Object.create(wa)),
                e
              )
            }),
            (L.awrap = function (d) {
              return { __await: d }
            }),
            r(v.prototype),
            d(v.prototype, Hb, function () {
              return this
            }),
            (L.AsyncIterator = v),
            (L.async = function (d, h, l, n, t) {
              void 0 === t && (t = Promise)
              var r = new v(e(d, h, l, n), t)
              return L.isGeneratorFunction(h)
                ? r
                : r.next().then(function (d) {
                    return d.done ? d.value : r.next()
                  })
            }),
            r(wa),
            d(wa, O, 'Generator'),
            d(wa, ka, function () {
              return this
            }),
            d(wa, 'toString', function () {
              return '[object Generator]'
            }),
            (L.keys = function (d) {
              var e = Object(d),
                h = [],
                l
              for (l in e) h.push(l)
              return (
                h.reverse(),
                function la() {
                  for (; h.length; ) {
                    var d = h.pop()
                    if (d in e) return (la.value = d), (la.done = !1), la
                  }
                  return (la.done = !0), la
                }
              )
            }),
            (L.values = E),
            (A.prototype = {
              constructor: A,
              reset: function (d) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = x),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = x),
                  this.tryEntries.forEach(B),
                  !d)
                )
                  for (var e in this)
                    't' === e.charAt(0) && K.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = x)
              },
              stop: function () {
                this.done = !0
                var d = this.tryEntries[0].completion
                if ('throw' === d.type) throw d.arg
                return this.rval
              },
              dispatchException: function (d) {
                function e(e, l) {
                  return (
                    (t.type = 'throw'),
                    (t.arg = d),
                    (h.next = e),
                    l && ((h.method = 'next'), (h.arg = x)),
                    !!l
                  )
                }
                if (this.done) throw d
                for (var h = this, l = this.tryEntries.length - 1; 0 <= l; --l) {
                  var n = this.tryEntries[l],
                    t = n.completion
                  if ('root' === n.tryLoc) return e('end')
                  if (n.tryLoc <= this.prev) {
                    var r = K.call(n, 'catchLoc'),
                      v = K.call(n, 'finallyLoc')
                    if (r && v) {
                      if (this.prev < n.catchLoc) return e(n.catchLoc, !0)
                      if (this.prev < n.finallyLoc) return e(n.finallyLoc)
                    } else if (r) {
                      if (this.prev < n.catchLoc) return e(n.catchLoc, !0)
                    } else {
                      if (!v) throw Error('try statement without catch or finally')
                      if (this.prev < n.finallyLoc) return e(n.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (d, e) {
                for (var h = this.tryEntries.length - 1; 0 <= h; --h) {
                  var l = this.tryEntries[h]
                  if (
                    l.tryLoc <= this.prev &&
                    K.call(l, 'finallyLoc') &&
                    this.prev < l.finallyLoc
                  ) {
                    var n = l
                    break
                  }
                }
                n &&
                  ('break' === d || 'continue' === d) &&
                  n.tryLoc <= e &&
                  e <= n.finallyLoc &&
                  (n = null)
                h = n ? n.completion : {}
                return (
                  (h.type = d),
                  (h.arg = e),
                  n ? ((this.method = 'next'), (this.next = n.finallyLoc), D) : this.complete(h)
                )
              },
              complete: function (d, e) {
                if ('throw' === d.type) throw d.arg
                return (
                  'break' === d.type || 'continue' === d.type
                    ? (this.next = d.arg)
                    : 'return' === d.type
                      ? ((this.rval = this.arg = d.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === d.type && e && (this.next = e),
                  D
                )
              },
              finish: function (d) {
                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                  var h = this.tryEntries[e]
                  if (h.finallyLoc === d) return this.complete(h.completion, h.afterLoc), B(h), D
                }
              },
              catch: function (d) {
                for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                  var h = this.tryEntries[e]
                  if (h.tryLoc === d) {
                    d = h.completion
                    if ('throw' === d.type) {
                      var l = d.arg
                      B(h)
                    }
                    return l
                  }
                }
                throw Error('illegal catch attempt')
              },
              delegateYield: function (d, e, h) {
                return (
                  (this.delegate = { iterator: E(d), resultName: e, nextLoc: h }),
                  'next' === this.method && (this.arg = x),
                  D
                )
              },
            }),
            L
          )
        }
        function B(d, e) {
          var h = ('undefined' != typeof Symbol && d[Symbol.iterator]) || d['@@iterator']
          if (!h) {
            if (Array.isArray(d) || (h = T(d)) || (e && d && 'number' == typeof d.length)) {
              h && (d = h)
              var l = 0
              e = function () {}
              return {
                s: e,
                n: function () {
                  return l >= d.length ? { done: !0 } : { done: !1, value: d[l++] }
                },
                e: function (d) {
                  throw d
                },
                f: e,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          }
          var n,
            t = !0,
            r = !1
          return {
            s: function () {
              h = h.call(d)
            },
            n: function () {
              var d = h.next()
              return (t = d.done), d
            },
            e: function (d) {
              r = !0
              n = d
            },
            f: function () {
              try {
                t || null == h['return'] || h['return']()
              } finally {
                if (r) throw n
              }
            },
          }
        }
        function T(d, e) {
          if (d) {
            if ('string' == typeof d) return sa(d, e)
            var h = {}.toString.call(d).slice(8, -1)
            return (
              'Object' === h && d.constructor && (h = d.constructor.name),
              'Map' === h || 'Set' === h
                ? Array.from(d)
                : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)
                  ? sa(d, e)
                  : void 0
            )
          }
        }
        function sa(d, e) {
          ;(null == e || e > d.length) && (e = d.length)
          for (var h = 0, l = Array(e); h < e; h++) l[h] = d[h]
          return l
        }
        var y, C, F, K, ka, da, Hb, kb, wa, Ib, Vd, Wd, Xd, Yd
        return (function (d) {
          function e(a, b) {
            return null == a || null == b ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
          }
          function t(a, b) {
            return null == a || null == b ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
          }
          function A(a) {
            function b(a, b) {
              var g = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 0,
                k = 3 < arguments.length && arguments[3] !== n ? arguments[3] : a.length
              if (g < k) {
                if (0 !== c(b, b)) return k
                do {
                  var m = (g + k) >>> 1
                  0 > f(a[m], b) ? (g = m + 1) : (k = m)
                } while (g < k)
              }
              return g
            }
            if (2 !== a.length) {
              var c = e
              var f = function (b, c) {
                return e(a(b), c)
              }
              var g = function (b, c) {
                return a(b) - c
              }
            } else (c = a === e || a === t ? a : L), (g = f = a)
            return {
              left: b,
              center: function (a, c) {
                var f = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 0,
                  k = b(
                    a,
                    c,
                    f,
                    (3 < arguments.length && arguments[3] !== n ? arguments[3] : a.length) - 1,
                  )
                return k > f && g(a[k - 1], c) > -g(a[k], c) ? k - 1 : k
              },
              right: function (a, b) {
                var g = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 0,
                  k = 3 < arguments.length && arguments[3] !== n ? arguments[3] : a.length
                if (g < k) {
                  if (0 !== c(b, b)) return k
                  do {
                    var m = (g + k) >>> 1
                    0 >= f(a[m], b) ? (g = m + 1) : (k = m)
                  } while (g < k)
                }
                return g
              },
            }
          }
          function L() {
            return 0
          }
          function G(a) {
            return null === a ? NaN : +a
          }
          function D(a, b) {
            var c, f, g, m, q, z, k
            return ba().wrap(
              function (p) {
                for (;;)
                  switch ((p.prev = p.next)) {
                    case 0:
                      if (b !== n) {
                        p.next = 21
                        break
                      }
                      c = B(a)
                      p.prev = 2
                      c.s()
                    case 4:
                      if ((f = c.n()).done) {
                        p.next = 11
                        break
                      }
                      g = f.value
                      if (!(null != g && (g = +g) >= g)) {
                        p.next = 9
                        break
                      }
                      p.next = 9
                      return g
                    case 9:
                      p.next = 4
                      break
                    case 11:
                      p.next = 16
                      break
                    case 13:
                      ;(p.prev = 13), (p.t0 = p['catch'](2)), c.e(p.t0)
                    case 16:
                      return (p.prev = 16), c.f(), p.finish(16)
                    case 19:
                      p.next = 40
                      break
                    case 21:
                      ;(m = -1), (q = B(a)), (p.prev = 23), q.s()
                    case 25:
                      if ((z = q.n()).done) {
                        p.next = 32
                        break
                      }
                      k = z.value
                      if (!(null != (k = b(k, ++m, a)) && (k = +k) >= k)) {
                        p.next = 30
                        break
                      }
                      p.next = 30
                      return k
                    case 30:
                      p.next = 25
                      break
                    case 32:
                      p.next = 37
                      break
                    case 34:
                      ;(p.prev = 34), (p.t1 = p['catch'](23)), q.e(p.t1)
                    case 37:
                      return (p.prev = 37), q.f(), p.finish(37)
                    case 40:
                    case 'end':
                      return p.stop()
                  }
              },
              Ug,
              null,
              [
                [2, 13, 16, 19],
                [23, 34, 37, 40],
              ],
            )
          }
          function ja(a) {
            return function (b, c) {
              var f = 2 < arguments.length && arguments[2] !== n ? arguments[2] : c
              if (!(0 <= (c = +c))) throw new RangeError('invalid rx')
              if (!(0 <= (f = +f))) throw new RangeError('invalid ry')
              var g = b.data,
                m = b.width,
                q = b.height
              if (!(0 <= (m = Math.floor(m)))) throw new RangeError('invalid width')
              if (!(0 <= (q = Math.floor(q !== n ? q : g.length / m))))
                throw new RangeError('invalid height')
              if (!m || !q || (!c && !f)) return b
              var z = c && a(c)
              f = f && a(f)
              var k = g.slice()
              z && f
                ? (T(z, k, g, m, q),
                  T(z, g, k, m, q),
                  T(z, k, g, m, q),
                  S(f, g, k, m, q),
                  S(f, k, g, m, q),
                  S(f, g, k, m, q))
                : z
                  ? (T(z, g, k, m, q), T(z, k, g, m, q), T(z, g, k, m, q))
                  : f && (S(f, g, k, m, q), S(f, k, g, m, q), S(f, g, k, m, q))
              return b
            }
          }
          function T(a, b, c, f, g) {
            var m = 0
            for (g *= f; m < g; ) a(b, c, m, (m += f), 1)
          }
          function S(a, b, c, f, g) {
            var m = 0
            for (g *= f; m < f; ++m) a(b, c, m, m + g, f)
          }
          function yc(a) {
            var b = Math.floor(a)
            if (b === a) return Wa(a)
            var c = a - b,
              f = 2 * a + 1
            return function (a, m, q, z, k) {
              if ((z -= k) >= q) {
                for (var g = b * m[q], w = k * b, u = w + k, d = q, H = q + w; d < H; d += k)
                  g += m[Math.min(z, d)]
                d = q
                for (H = z; d <= H; d += k)
                  (g += m[Math.min(z, d + w)]),
                    (a[d] = (g + c * (m[Math.max(q, d - u)] + m[Math.min(z, d + u)])) / f),
                    (g -= m[Math.max(q, d - w)])
              }
            }
          }
          function Wa(a) {
            var b = 2 * a + 1
            return function (c, f, g, m, q) {
              if ((m -= q) >= g) {
                for (var z = a * f[g], k = q * a, p = g, w = g + k; p < w; p += q)
                  z += f[Math.min(m, p)]
                p = g
                for (w = m; p <= w; p += q)
                  (z += f[Math.min(m, p + k)]), (c[p] = z / b), (z -= f[Math.max(g, p - k)])
              }
            }
          }
          function sa(a, b) {
            var c = 0
            if (b === n) {
              a = B(a)
              var f
              try {
                for (a.s(); !(f = a.n()).done; ) {
                  var g = f.value
                  null != g && (g = +g) >= g && ++c
                }
              } catch (z) {
                a.e(z)
              } finally {
                a.f()
              }
            } else {
              f = -1
              g = B(a)
              var m
              try {
                for (g.s(); !(m = g.n()).done; ) {
                  var q = m.value
                  null != (q = b(q, ++f, a)) && (q = +q) >= q && ++c
                }
              } catch (z) {
                g.e(z)
              } finally {
                g.f()
              }
            }
            return c
          }
          function xc(a) {
            return a.length | 0
          }
          function Rg(a) {
            return !(0 < a)
          }
          function Sg(a) {
            return 'object' !== V(a) || 'length' in a ? a : Array.from(a)
          }
          function Tg(a) {
            return function (b) {
              return a.apply(void 0, ra(b))
            }
          }
          function Md(a, b) {
            var c = 0,
              f = 0,
              g = 0
            if (b === n) {
              a = B(a)
              var m
              try {
                for (a.s(); !(m = a.n()).done; ) {
                  var q = m.value
                  if (null != q && (q = +q) >= q) {
                    var z = q - f
                    f += z / ++c
                    g += z * (q - f)
                  }
                }
              } catch (w) {
                a.e(w)
              } finally {
                a.f()
              }
            } else {
              m = -1
              q = B(a)
              var k
              try {
                for (q.s(); !(k = q.n()).done; ) {
                  var p = k.value
                  null != (p = b(p, ++m, a)) &&
                    (p = +p) >= p &&
                    ((z = p - f), (f += z / ++c), (g += z * (p - f)))
                }
              } catch (w) {
                q.e(w)
              } finally {
                q.f()
              }
            }
            if (1 < c) return g / (c - 1)
          }
          function Ld(a, b) {
            return (a = Md(a, b)) ? Math.sqrt(a) : a
          }
          function Gb(a, b) {
            var c, f
            if (b === n) {
              a = B(a)
              var g
              try {
                for (a.s(); !(g = a.n()).done; ) {
                  var m = g.value
                  null != m &&
                    (c === n ? m >= m && (c = f = m) : (c > m && (c = m), f < m && (f = m)))
                }
              } catch (k) {
                a.e(k)
              } finally {
                a.f()
              }
            } else {
              g = -1
              m = B(a)
              var q
              try {
                for (m.s(); !(q = m.n()).done; ) {
                  var z = q.value
                  null != (z = b(z, ++g, a)) &&
                    (c === n ? z >= z && (c = f = z) : (c > z && (c = z), f < z && (f = z)))
                }
              } catch (k) {
                m.e(k)
              } finally {
                m.f()
              }
            }
            return [c, f]
          }
          function Ac(a, b) {
            var c = a._intern
            a = a._key
            a = a(b)
            return c.has(a) ? c.get(a) : b
          }
          function Rd(a, b) {
            var c = a._intern
            a = a._key
            a = a(b)
            if (c.has(a)) return c.get(a)
            c.set(a, b)
            return b
          }
          function Sd(a, b) {
            var c = a._intern
            a = a._key
            a = a(b)
            c.has(a) && ((b = c.get(a)), c['delete'](a))
            return b
          }
          function Nd(a) {
            return null !== a && 'object' === V(a) ? a.valueOf() : a
          }
          function Ya(a) {
            return a
          }
          function Od(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), f = 1; f < b; f++)
              c[f - 1] = arguments[f]
            return Xa(a, Ya, Ya, c)
          }
          function Pd(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), f = 1; f < b; f++)
              c[f - 1] = arguments[f]
            return Xa(a, Array.from, Ya, c)
          }
          function Qd(a, b) {
            var c = 1
            for (b = b.length; c < b; ++c)
              a = a.flatMap(function (a) {
                return a.pop().map(function (b) {
                  var c = r(b, 2)
                  b = c[0]
                  c = c[1]
                  return [].concat(ra(a), [b, c])
                })
              })
            return a
          }
          function Td(a, b) {
            for (var c = arguments.length, f = Array(2 < c ? c - 2 : 0), g = 2; g < c; g++)
              f[g - 2] = arguments[g]
            return Xa(a, Ya, b, f)
          }
          function Ud(a, b) {
            for (var c = arguments.length, f = Array(2 < c ? c - 2 : 0), g = 2; g < c; g++)
              f[g - 2] = arguments[g]
            return Xa(a, Array.from, b, f)
          }
          function Ha(a) {
            if (1 !== a.length) throw Error('duplicate key')
            return a[0]
          }
          function Xa(a, b, c, f) {
            return (function z(a, q) {
              if (q >= f.length) return c(a)
              var k = new lb(),
                m = f[q++],
                w = -1,
                u = B(a),
                d
              try {
                for (u.s(); !(d = u.n()).done; ) {
                  var H = d.value,
                    e = m(H, ++w, a),
                    h = k.get(e)
                  h ? h.push(H) : k.set(e, [H])
                }
              } catch (Ja) {
                u.e(Ja)
              } finally {
                u.f()
              }
              a = B(k)
              var l
              try {
                for (a.s(); !(l = a.n()).done; ) {
                  var n = r(l.value, 2)
                  k.set(n[0], z(n[1], q))
                }
              } catch (Ja) {
                a.e(Ja)
              } finally {
                a.f()
              }
              return b(k)
            })(a, 0)
          }
          function Kd(a, b) {
            return Array.from(b, function (b) {
              return a[b]
            })
          }
          function ib(a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), f = 1; f < b; f++)
              c[f - 1] = arguments[f]
            if ('function' !== typeof a[Symbol.iterator])
              throw new TypeError('values is not iterable')
            a = Array.from(a)
            var g = r(c, 1)[0]
            return (g && 2 !== g.length) || 1 < c.length
              ? ((b = Uint32Array.from(a, function (a, b) {
                  return b
                })),
                1 < c.length
                  ? ((c = c.map(function (b) {
                      return a.map(b)
                    })),
                    b.sort(function (a, b) {
                      var f = B(c),
                        k
                      try {
                        for (f.s(); !(k = f.n()).done; ) {
                          var g = k.value,
                            m = la(g[a], g[b])
                          if (m) return m
                        }
                      } catch (u) {
                        f.e(u)
                      } finally {
                        f.f()
                      }
                    }))
                  : ((g = a.map(g)),
                    b.sort(function (a, b) {
                      return la(g[a], g[b])
                    })),
                Kd(a, b))
              : a.sort(ta(g))
          }
          function ta() {
            var a = 0 < arguments.length && arguments[0] !== n ? arguments[0] : e
            if (a === e) return la
            if ('function' !== typeof a) throw new TypeError('compare is not a function')
            return function (b, c) {
              var f = a(b, c)
              return f || 0 === f ? f : (0 === a(c, c)) - (0 === a(b, b))
            }
          }
          function la(a, b) {
            return (
              (null == a || !(a >= a)) - (null == b || !(b >= b)) || (a < b ? -1 : a > b ? 1 : 0)
            )
          }
          function zc(a) {
            return function () {
              return a
            }
          }
          function Fb(a, b, c) {
            var f = (b - a) / Math.max(0, c),
              g = Math.floor(Math.log10(f))
            f /= Math.pow(10, g)
            f = f >= Vg ? 10 : f >= Wg ? 5 : f >= Xg ? 2 : 1
            if (0 > g) {
              var m = Math.pow(10, -g) / f
              g = Math.round(a * m)
              f = Math.round(b * m)
              g / m < a && ++g
              f / m > b && --f
              m = -m
            } else
              (m = Math.pow(10, g) * f),
                (g = Math.round(a / m)),
                (f = Math.round(b / m)),
                g * m < a && ++g,
                f * m > b && --f
            return f < g && 0.5 <= c && 2 > c ? Fb(a, b, 2 * c) : [g, f, m]
          }
          function jb(a, b, c) {
            b = +b
            a = +a
            c = +c
            if (!(0 < c)) return []
            if (a === b) return [a]
            var f = b < a
            a = f ? Fb(b, a, c) : Fb(a, b, c)
            a = r(a, 3)
            var g = a[0],
              m = a[1]
            a = a[2]
            if (!(m >= g)) return []
            b = m - g + 1
            c = Array(b)
            if (f)
              if (0 > a) for (f = 0; f < b; ++f) c[f] = (m - f) / -a
              else for (f = 0; f < b; ++f) c[f] = (m - f) * a
            else if (0 > a) for (f = 0; f < b; ++f) c[f] = (g + f) / -a
            else for (f = 0; f < b; ++f) c[f] = (g + f) * a
            return c
          }
          function Ia(a, b, c) {
            return Fb(+a, +b, +c)[2]
          }
          function Jb(a, b, c) {
            b = +b
            a = +a
            c = +c
            var f = b < a
            a = f ? Ia(b, a, c) : Ia(a, b, c)
            return (f ? -1 : 1) * (0 > a ? 1 / -a : a)
          }
          function Zd(a, b, c) {
            for (var f; ; ) {
              var g = Ia(a, b, c)
              if (g === f || 0 === g || !isFinite(g)) return [a, b]
              0 < g
                ? ((a = Math.floor(a / g) * g), (b = Math.ceil(b / g) * g))
                : 0 > g && ((a = Math.ceil(a * g) / g), (b = Math.floor(b * g) / g))
              f = g
            }
          }
          function $d(a) {
            return Math.max(1, Math.ceil(Math.log(sa(a)) / Math.LN2) + 1)
          }
          function ae() {
            function a(a) {
              Array.isArray(a) || (a = Array.from(a))
              var g,
                q = a.length,
                d,
                k,
                p = Array(q)
              for (g = 0; g < q; ++g) p[g] = b(a[g], g, a)
              var w = c(p),
                u = w[0]
              w = w[1]
              var I = f(p, u, w)
              if (!Array.isArray(I)) {
                var H = w
                g = +I
                c === Gb && ((u = Zd(u, w, g)), (w = r(u, 2)), (u = w[0]), (w = w[1]))
                I = jb(u, w, g)
                I[0] <= u && (k = Ia(u, w, g))
                I[I.length - 1] >= w &&
                  (H >= w && c === Gb
                    ? ((H = Ia(u, w, g)),
                      isFinite(H) &&
                        (0 < H
                          ? (w = (Math.floor(w / H) + 1) * H)
                          : 0 > H && (w = (Math.ceil(w * -H) + 1) / -H)))
                    : I.pop())
              }
              H = I.length
              g = 0
              for (var e = H; I[g] <= u; ) ++g
              for (; I[e - 1] > w; ) --e
              if (g || e < H) (I = I.slice(g, e)), (H = e - g)
              e = Array(H + 1)
              for (g = 0; g <= H; ++g) {
                var h = (e[g] = [])
                h.x0 = 0 < g ? I[g - 1] : u
                h.x1 = g < H ? I[g] : w
              }
              if (isFinite(k))
                if (0 < k)
                  for (g = 0; g < q; ++g)
                    null != (d = p[g]) &&
                      u <= d &&
                      d <= w &&
                      e[Math.min(H, Math.floor((d - u) / k))].push(a[g])
                else {
                  if (0 > k)
                    for (g = 0; g < q; ++g)
                      null != (d = p[g]) &&
                        u <= d &&
                        d <= w &&
                        ((h = Math.floor((u - d) * k)), e[Math.min(H, h + (I[h] <= d))].push(a[g]))
                }
              else
                for (g = 0; g < q; ++g)
                  null != (d = p[g]) && u <= d && d <= w && e[Ka(I, d, 0, H)].push(a[g])
              return e
            }
            var b = Ya,
              c = Gb,
              f = $d
            a.value = function (c) {
              return arguments.length ? ((b = 'function' === typeof c ? c : zc(c)), a) : b
            }
            a.domain = function (b) {
              return arguments.length
                ? ((c = 'function' === typeof b ? b : zc([b[0], b[1]])), a)
                : c
            }
            a.thresholds = function (b) {
              return arguments.length
                ? ((f = 'function' === typeof b ? b : zc(Array.isArray(b) ? Yg.call(b) : b)), a)
                : f
            }
            return a
          }
          function Bc(a, b) {
            var c
            if (b === n) {
              a = B(a)
              var f
              try {
                for (a.s(); !(f = a.n()).done; ) {
                  var g = f.value
                  null != g && (c < g || (c === n && g >= g)) && (c = g)
                }
              } catch (z) {
                a.e(z)
              } finally {
                a.f()
              }
            } else {
              f = -1
              g = B(a)
              var m
              try {
                for (g.s(); !(m = g.n()).done; ) {
                  var q = m.value
                  null != (q = b(q, ++f, a)) && (c < q || (c === n && q >= q)) && (c = q)
                }
              } catch (z) {
                g.e(z)
              } finally {
                g.f()
              }
            }
            return c
          }
          function Cc(a, b) {
            var c = -1,
              f = -1
            if (b === n) {
              a = B(a)
              var g
              try {
                for (a.s(); !(g = a.n()).done; ) {
                  var m = g.value
                  ++f
                  if (null != m && (q < m || (q === n && m >= m))) {
                    var q = m
                    c = f
                  }
                }
              } catch (p) {
                a.e(p)
              } finally {
                a.f()
              }
            } else {
              g = B(a)
              var d
              try {
                for (g.s(); !(d = g.n()).done; ) {
                  var k = d.value
                  null != (k = b(k, ++f, a)) && (q < k || (q === n && k >= k)) && ((q = k), (c = f))
                }
              } catch (p) {
                g.e(p)
              } finally {
                g.f()
              }
            }
            return c
          }
          function Kb(a, b) {
            var c
            if (b === n) {
              a = B(a)
              var f
              try {
                for (a.s(); !(f = a.n()).done; ) {
                  var g = f.value
                  null != g && (c > g || (c === n && g >= g)) && (c = g)
                }
              } catch (z) {
                a.e(z)
              } finally {
                a.f()
              }
            } else {
              f = -1
              g = B(a)
              var m
              try {
                for (g.s(); !(m = g.n()).done; ) {
                  var q = m.value
                  null != (q = b(q, ++f, a)) && (c > q || (c === n && q >= q)) && (c = q)
                }
              } catch (z) {
                g.e(z)
              } finally {
                g.f()
              }
            }
            return c
          }
          function Dc(a, b) {
            var c = -1,
              f = -1
            if (b === n) {
              a = B(a)
              var g
              try {
                for (a.s(); !(g = a.n()).done; ) {
                  var m = g.value
                  ++f
                  if (null != m && (q > m || (q === n && m >= m))) {
                    var q = m
                    c = f
                  }
                }
              } catch (p) {
                a.e(p)
              } finally {
                a.f()
              }
            } else {
              g = B(a)
              var d
              try {
                for (g.s(); !(d = g.n()).done; ) {
                  var k = d.value
                  null != (k = b(k, ++f, a)) && (q > k || (q === n && k >= k)) && ((q = k), (c = f))
                }
              } catch (p) {
                g.e(p)
              } finally {
                g.f()
              }
            }
            return c
          }
          function Lb(a, b) {
            var c = 2 < arguments.length && arguments[2] !== n ? arguments[2] : 0,
              f = 3 < arguments.length && arguments[3] !== n ? arguments[3] : Infinity,
              g = 4 < arguments.length ? arguments[4] : n
            b = Math.floor(b)
            c = Math.floor(Math.max(0, c))
            f = Math.floor(Math.min(a.length - 1, f))
            if (!(c <= b && b <= f)) return a
            for (g = g === n ? la : ta(g); f > c; ) {
              if (600 < f - c) {
                var m = f - c + 1,
                  q = b - c + 1,
                  d = Math.log(m),
                  k = 0.5 * Math.exp((2 * d) / 3)
                d = 0.5 * Math.sqrt((d * k * (m - k)) / m) * (0 > q - m / 2 ? -1 : 1)
                Lb(
                  a,
                  b,
                  Math.max(c, Math.floor(b - (q * k) / m + d)),
                  Math.min(f, Math.floor(b + ((m - q) * k) / m + d)),
                  g,
                )
              }
              m = a[b]
              q = c
              k = f
              mb(a, c, b)
              for (0 < g(a[f], m) && mb(a, c, f); q < k; ) {
                mb(a, q, k)
                ++q
                for (--k; 0 > g(a[q], m); ) ++q
                for (; 0 < g(a[k], m); ) --k
              }
              0 === g(a[c], m) ? mb(a, c, k) : (++k, mb(a, k, f))
              k <= b && (c = k + 1)
              b <= k && (f = k - 1)
            }
            return a
          }
          function mb(a, b, c) {
            var f = a[b]
            a[b] = a[c]
            a[c] = f
          }
          function be(a) {
            var b = 1 < arguments.length && arguments[1] !== n ? arguments[1] : e,
              c = !1
            if (1 === b.length) {
              var f = B(a),
                g
              try {
                for (f.s(); !(g = f.n()).done; ) {
                  var m = g.value,
                    q = b(m)
                  if (c ? 0 < e(q, k) : 0 === e(q, q)) {
                    var d = m
                    var k = q
                    c = !0
                  }
                }
              } catch (w) {
                f.e(w)
              } finally {
                f.f()
              }
            } else {
              k = B(a)
              try {
                for (k.s(); !(f = k.n()).done; ) {
                  var p = f.value
                  if (c ? 0 < b(p, d) : 0 === b(p, p)) (d = p), (c = !0)
                }
              } catch (w) {
                k.e(w)
              } finally {
                k.f()
              }
            }
            return d
          }
          function nb(a, b, c) {
            a = Float64Array.from(D(a, c))
            if ((c = a.length) && !isNaN((b = +b))) {
              if (0 >= b || 2 > c) return Kb(a)
              if (1 <= b) return Bc(a)
              b *= c - 1
              c = Math.floor(b)
              var f = Bc(Lb(a, c).subarray(0, c + 1))
              a = Kb(a.subarray(c + 1))
              return f + (a - f) * (b - c)
            }
          }
          function ce(a, b) {
            var c = 2 < arguments.length && arguments[2] !== n ? arguments[2] : G
            if ((f = a.length) && !isNaN((b = +b))) {
              if (0 >= b || 2 > f) return +c(a[0], 0, a)
              if (1 <= b) return +c(a[f - 1], f - 1, a)
              var f
              f = (f - 1) * b
              var g = Math.floor(f),
                m = +c(a[g], g, a)
              c = +c(a[g + 1], g + 1, a)
              return m + (c - m) * (f - g)
            }
          }
          function de(a, b) {
            var c = 2 < arguments.length && arguments[2] !== n ? arguments[2] : G
            if (!isNaN((b = +b))) {
              var f = Float64Array.from(a, function (b, f) {
                return G(c(a[f], f, a))
              })
              if (0 >= b) return Dc(f)
              if (1 <= b) return Cc(f)
              var g = Uint32Array.from(a, function (a, b) {
                  return b
                }),
                m = f.length - 1,
                q = Math.floor(m * b)
              Lb(g, q, 0, m, function (a, b) {
                return la(f[a], f[b])
              })
              q = be(g.subarray(0, q + 1), function (a) {
                return f[a]
              })
              return 0 <= q ? q : -1
            }
          }
          function ee(a) {
            var b, c, f
            return ba().wrap(
              function (g) {
                for (;;)
                  switch ((g.prev = g.next)) {
                    case 0:
                      ;(b = B(a)), (g.prev = 1), b.s()
                    case 3:
                      if ((c = b.n()).done) {
                        g.next = 8
                        break
                      }
                      f = c.value
                      return g.delegateYield(f, 't0', 6)
                    case 6:
                      g.next = 3
                      break
                    case 8:
                      g.next = 13
                      break
                    case 10:
                      ;(g.prev = 10), (g.t1 = g['catch'](1)), b.e(g.t1)
                    case 13:
                      return (g.prev = 13), b.f(), g.finish(13)
                    case 16:
                    case 'end':
                      return g.stop()
                  }
              },
              Zg,
              null,
              [[1, 10, 13, 16]],
            )
          }
          function $g(a, b) {
            return [a, b]
          }
          function fe(a, b, c) {
            a = +a
            b = +b
            c = 2 > (g = arguments.length) ? ((b = a), (a = 0), 1) : 3 > g ? 1 : +c
            for (var f = -1, g = Math.max(0, Math.ceil((b - a) / c)) | 0, m = Array(g); ++f < g; )
              m[f] = a + f * c
            return m
          }
          function ge(a) {
            var b = 1 < arguments.length && arguments[1] !== n ? arguments[1] : e
            if (1 === b.length) return Dc(a, b)
            var c = -1,
              f = -1,
              g = B(a),
              m
            try {
              for (g.s(); !(m = g.n()).done; ) {
                var q = m.value
                ++f
                if (0 > c ? 0 === b(q, q) : 0 > b(q, d)) {
                  var d = q
                  c = f
                }
              }
            } catch (k) {
              g.e(k)
            } finally {
              g.f()
            }
            return c
          }
          function he(a) {
            return function (b) {
              for (
                var c = 1 < arguments.length && arguments[1] !== n ? arguments[1] : 0,
                  f =
                    (2 < arguments.length && arguments[2] !== n ? arguments[2] : b.length) -
                    (c = +c);
                f;

              ) {
                var g = (a() * f--) | 0,
                  m = b[f + c]
                b[f + c] = b[g + c]
                b[g + c] = m
              }
              return b
            }
          }
          function ie(a) {
            if (!(m = a.length)) return []
            for (var b = -1, c = Kb(a, ah), f = Array(c); ++b < c; )
              for (var g = -1, m, q = (f[b] = Array(m)); ++g < m; ) q[g] = a[g][b]
            return f
          }
          function ah(a) {
            return a.length
          }
          function bh(a) {
            return a instanceof La ? a : new La(a)
          }
          function je(a, b) {
            a = a[Symbol.iterator]()
            var c = new Set()
            b = B(b)
            var f
            try {
              for (b.s(); !(f = b.n()).done; ) {
                var g = ke(f.value)
                if (!c.has(g))
                  for (
                    var m = void 0, q = void 0;
                    (d = a.next()), (m = d.value), (q = d.done), d;

                  ) {
                    var d
                    if (q) return !1
                    var k = ke(m)
                    c.add(k)
                    if (Object.is(g, k)) break
                  }
              }
            } catch (p) {
              b.e(p)
            } finally {
              b.f()
            }
            return !0
          }
          function ke(a) {
            return null !== a && 'object' === V(a) ? a.valueOf() : a
          }
          function ch(a) {
            return a
          }
          function dh(a) {
            return 'translate(' + a + ',0)'
          }
          function eh(a) {
            return 'translate(0,' + a + ')'
          }
          function fh(a) {
            return function (b) {
              return +a(b)
            }
          }
          function gh(a, b) {
            b = Math.max(0, a.bandwidth() - 2 * b) / 2
            a.round() && (b = Math.round(b))
            return function (c) {
              return +a(c) + b
            }
          }
          function hh() {
            return !this.__axis
          }
          function Mb(a, b) {
            function c(c) {
              var z = null == g ? (b.ticks ? b.ticks.apply(b, f) : b.domain()) : g,
                e = null == m ? (b.tickFormat ? b.tickFormat.apply(b, f) : ch) : m,
                H = Math.max(q, 0) + k,
                h = b.range(),
                l = +h[0] + p
              h = +h[h.length - 1] + p
              var n = (b.bandwidth ? gh : fh)(b.copy(), p),
                t = c.selection ? c.selection() : c,
                r = t.selectAll('.domain').data([null])
              z = t.selectAll('.tick').data(z, b).order()
              var v = z.exit(),
                C = z.enter().append('g').attr('class', 'tick'),
                y = z.select('line'),
                Ma = z.select('text')
              r = r.merge(
                r
                  .enter()
                  .insert('path', '.tick')
                  .attr('class', 'domain')
                  .attr('stroke', 'currentColor'),
              )
              z = z.merge(C)
              y = y.merge(
                C.append('line')
                  .attr('stroke', 'currentColor')
                  .attr(u + '2', w * q),
              )
              Ma = Ma.merge(
                C.append('text')
                  .attr('fill', 'currentColor')
                  .attr(u, w * H)
                  .attr('dy', 1 === a ? '0em' : 3 === a ? '0.71em' : '0.32em'),
              )
              c !== t &&
                ((r = r.transition(c)),
                (z = z.transition(c)),
                (y = y.transition(c)),
                (Ma = Ma.transition(c)),
                (v = v
                  .transition(c)
                  .attr('opacity', 1e-6)
                  .attr('transform', function (a) {
                    return isFinite((a = n(a))) ? I(a + p) : this.getAttribute('transform')
                  })),
                C.attr('opacity', 1e-6).attr('transform', function (a) {
                  var b = this.parentNode.__axis
                  return I((b && isFinite((b = b(a))) ? b : n(a)) + p)
                }))
              v.remove()
              r.attr(
                'd',
                4 === a || 2 === a
                  ? d
                    ? 'M' + w * d + ',' + l + 'H' + p + 'V' + h + 'H' + w * d
                    : 'M' + p + ',' + l + 'V' + h
                  : d
                    ? 'M' + l + ',' + w * d + 'V' + p + 'H' + h + 'V' + w * d
                    : 'M' + l + ',' + p + 'H' + h,
              )
              z.attr('opacity', 1).attr('transform', function (a) {
                return I(n(a) + p)
              })
              y.attr(u + '2', w * q)
              Ma.attr(u, w * H).text(e)
              t.filter(hh)
                .attr('fill', 'none')
                .attr('font-size', 10)
                .attr('font-family', 'sans-serif')
                .attr('text-anchor', 2 === a ? 'start' : 4 === a ? 'end' : 'middle')
              t.each(function () {
                this.__axis = n
              })
            }
            var f = [],
              g = null,
              m = null,
              q = 6,
              d = 6,
              k = 3,
              p = 'undefined' !== typeof R && 1 < R.devicePixelRatio ? 0 : 0.5,
              w = 1 === a || 4 === a ? -1 : 1,
              u = 4 === a || 2 === a ? 'x' : 'y',
              I = 1 === a || 3 === a ? dh : eh
            c.scale = function (a) {
              return arguments.length ? ((b = a), c) : b
            }
            c.ticks = function () {
              return (f = Array.from(arguments)), c
            }
            c.tickArguments = function (a) {
              return arguments.length ? ((f = null == a ? [] : Array.from(a)), c) : f.slice()
            }
            c.tickValues = function (a) {
              return arguments.length ? ((g = null == a ? null : Array.from(a)), c) : g && g.slice()
            }
            c.tickFormat = function (a) {
              return arguments.length ? ((m = a), c) : m
            }
            c.tickSize = function (a) {
              return arguments.length ? ((q = d = +a), c) : q
            }
            c.tickSizeInner = function (a) {
              return arguments.length ? ((q = +a), c) : q
            }
            c.tickSizeOuter = function (a) {
              return arguments.length ? ((d = +a), c) : d
            }
            c.tickPadding = function (a) {
              return arguments.length ? ((k = +a), c) : k
            }
            c.offset = function (a) {
              return arguments.length ? ((p = +a), c) : p
            }
            return c
          }
          function ma(a, b) {
            switch (arguments.length) {
              case 0:
                break
              case 1:
                this.range(a)
                break
              default:
                this.range(b).domain(a)
            }
            return this
          }
          function xa(a, b) {
            switch (arguments.length) {
              case 0:
                break
              case 1:
                'function' === typeof a ? this.interpolator(a) : this.range(a)
                break
              default:
                this.domain(a), 'function' === typeof b ? this.interpolator(b) : this.range(b)
            }
            return this
          }
          function Ec() {
            function a(a) {
              var m = b.get(a)
              if (m === n) {
                if (g !== Fc) return g
                b.set(a, (m = c.push(a) - 1))
              }
              return f[m % f.length]
            }
            var b = new lb(),
              c = [],
              f = [],
              g = Fc
            a.domain = function (f) {
              if (!arguments.length) return c.slice()
              c = []
              b = new lb()
              var g = B(f),
                m
              try {
                for (g.s(); !(m = g.n()).done; ) {
                  var k = m.value
                  b.has(k) || b.set(k, c.push(k) - 1)
                }
              } catch (p) {
                g.e(p)
              } finally {
                g.f()
              }
              return a
            }
            a.range = function (b) {
              return arguments.length ? ((f = Array.from(b)), a) : f.slice()
            }
            a.unknown = function (b) {
              return arguments.length ? ((g = b), a) : g
            }
            a.copy = function () {
              return Ec(c, f).unknown(g)
            }
            ma.apply(a, arguments)
            return a
          }
          function Gc() {
            function a() {
              var a = c().length,
                b = m < g,
                z = b ? m : g,
                e = b ? g : m
              q = (e - z) / Math.max(1, a - p + 2 * w)
              k && (q = Math.floor(q))
              z += (e - z - q * (a - p)) * u
              d = q * (1 - p)
              k && ((z = Math.round(z)), (d = Math.round(d)))
              a = fe(a).map(function (a) {
                return z + q * a
              })
              return f(b ? a.reverse() : a)
            }
            var b = Ec().unknown(n),
              c = b.domain,
              f = b.range,
              g = 0,
              m = 1,
              q,
              d,
              k = !1,
              p = 0,
              w = 0,
              u = 0.5
            delete b.unknown
            b.domain = function (b) {
              return arguments.length ? (c(b), a()) : c()
            }
            b.range = function (b) {
              var c
              return arguments.length
                ? ((c = r(b, 2)), (g = c[0]), (m = c[1]), (g = +g), (m = +m), a())
                : [g, m]
            }
            b.rangeRound = function (b) {
              var c
              return (c = r(b, 2)), (g = c[0]), (m = c[1]), (g = +g), (m = +m), (k = !0), a()
            }
            b.bandwidth = function () {
              return d
            }
            b.step = function () {
              return q
            }
            b.round = function (b) {
              return arguments.length ? ((k = !!b), a()) : k
            }
            b.padding = function (b) {
              return arguments.length ? ((p = Math.min(1, (w = +b))), a()) : p
            }
            b.paddingInner = function (b) {
              return arguments.length ? ((p = Math.min(1, b)), a()) : p
            }
            b.paddingOuter = function (b) {
              return arguments.length ? ((w = +b), a()) : w
            }
            b.align = function (b) {
              return arguments.length ? ((u = Math.max(0, Math.min(1, b))), a()) : u
            }
            b.copy = function () {
              return Gc(c(), [g, m]).round(k).paddingInner(p).paddingOuter(w).align(u)
            }
            return ma.apply(a(), arguments)
          }
          function le(a) {
            var b = a.copy
            a.padding = a.paddingOuter
            delete a.paddingInner
            delete a.paddingOuter
            a.copy = function () {
              return le(b())
            }
            return a
          }
          function Hc(a, b, c) {
            a.prototype = b.prototype = c
            c.constructor = a
          }
          function me(a, b) {
            a = Object.create(a.prototype)
            for (var c in b) a[c] = b[c]
            return a
          }
          function pb() {}
          function ne() {
            return this.rgb().formatHex()
          }
          function oe() {
            return this.rgb().formatRgb()
          }
          function Na(a) {
            var b, c
            a = (a + '').trim().toLowerCase()
            return (b = jh.exec(a))
              ? ((c = b[1].length),
                (b = parseInt(b[1], 16)),
                6 === c
                  ? pe(b)
                  : 3 === c
                    ? new ha(
                        ((b >> 8) & 15) | ((b >> 4) & 240),
                        ((b >> 4) & 15) | (b & 240),
                        ((b & 15) << 4) | (b & 15),
                        1,
                      )
                    : 8 === c
                      ? Nb((b >> 24) & 255, (b >> 16) & 255, (b >> 8) & 255, (b & 255) / 255)
                      : 4 === c
                        ? Nb(
                            ((b >> 12) & 15) | ((b >> 8) & 240),
                            ((b >> 8) & 15) | ((b >> 4) & 240),
                            ((b >> 4) & 15) | (b & 240),
                            (((b & 15) << 4) | (b & 15)) / 255,
                          )
                        : null)
              : (b = kh.exec(a))
                ? new ha(b[1], b[2], b[3], 1)
                : (b = lh.exec(a))
                  ? new ha((255 * b[1]) / 100, (255 * b[2]) / 100, (255 * b[3]) / 100, 1)
                  : (b = mh.exec(a))
                    ? Nb(b[1], b[2], b[3], b[4])
                    : (b = nh.exec(a))
                      ? Nb((255 * b[1]) / 100, (255 * b[2]) / 100, (255 * b[3]) / 100, b[4])
                      : (b = oh.exec(a))
                        ? qe(b[1], b[2] / 100, b[3] / 100, 1)
                        : (b = ph.exec(a))
                          ? qe(b[1], b[2] / 100, b[3] / 100, b[4])
                          : re.hasOwnProperty(a)
                            ? pe(re[a])
                            : 'transparent' === a
                              ? new ha(NaN, NaN, NaN, 0)
                              : null
          }
          function pe(a) {
            return new ha((a >> 16) & 255, (a >> 8) & 255, a & 255, 1)
          }
          function Nb(a, b, c, f) {
            0 >= f && (a = b = c = NaN)
            return new ha(a, b, c, f)
          }
          function Ic(a, b, c, f) {
            if (1 === arguments.length) {
              var g = a
              g instanceof pb || (g = Na(g))
              g ? ((g = g.rgb()), (g = new ha(g.r, g.g, g.b, g.opacity))) : (g = new ha())
            } else g = new ha(a, b, c, null == f ? 1 : f)
            return g
          }
          function ha(a, b, c, f) {
            this.r = +a
            this.g = +b
            this.b = +c
            this.opacity = +f
          }
          function se() {
            return '#'.concat(Oa(this.r)).concat(Oa(this.g)).concat(Oa(this.b))
          }
          function te() {
            var a = Ob(this.opacity)
            return ''
              .concat(1 === a ? 'rgb(' : 'rgba(')
              .concat(Pa(this.r), ', ')
              .concat(Pa(this.g), ', ')
              .concat(Pa(this.b))
              .concat(1 === a ? ')' : ', '.concat(a, ')'))
          }
          function Ob(a) {
            return isNaN(a) ? 1 : Math.max(0, Math.min(1, a))
          }
          function Pa(a) {
            return Math.max(0, Math.min(255, Math.round(a) || 0))
          }
          function Oa(a) {
            a = Pa(a)
            return (16 > a ? '0' : '') + a.toString(16)
          }
          function qe(a, b, c, f) {
            0 >= f ? (a = b = c = NaN) : 0 >= c || 1 <= c ? (a = b = NaN) : 0 >= b && (a = NaN)
            return new oa(a, b, c, f)
          }
          function ue(a) {
            if (a instanceof oa) return new oa(a.h, a.s, a.l, a.opacity)
            a instanceof pb || (a = Na(a))
            if (!a) return new oa()
            if (a instanceof oa) return a
            a = a.rgb()
            var b = a.r / 255,
              c = a.g / 255,
              f = a.b / 255,
              g = Math.min(b, c, f),
              m = Math.max(b, c, f),
              q = NaN,
              d = m - g,
              k = (m + g) / 2
            d
              ? ((q =
                  b === m
                    ? (c - f) / d + 6 * (c < f)
                    : c === m
                      ? (f - b) / d + 2
                      : (b - c) / d + 4),
                (d /= 0.5 > k ? m + g : 2 - m - g),
                (q *= 60))
              : (d = 0 < k && 1 > k ? 0 : q)
            return new oa(q, d, k, a.opacity)
          }
          function oa(a, b, c, f) {
            this.h = +a
            this.s = +b
            this.l = +c
            this.opacity = +f
          }
          function ve(a) {
            a = (a || 0) % 360
            return 0 > a ? a + 360 : a
          }
          function Pb(a) {
            return Math.max(0, Math.min(1, a || 0))
          }
          function Jc(a, b, c) {
            return (
              255 *
              (60 > a
                ? b + ((c - b) * a) / 60
                : 180 > a
                  ? c
                  : 240 > a
                    ? b + ((c - b) * (240 - a)) / 60
                    : b)
            )
          }
          function qh(a, b) {
            return function (c) {
              return a + c * b
            }
          }
          function rh(a, b, c) {
            return (
              (a = Math.pow(a, c)),
              (b = Math.pow(b, c) - a),
              (c = 1 / c),
              function (f) {
                return Math.pow(a + f * b, c)
              }
            )
          }
          function sh(a) {
            return 1 === (a = +a)
              ? we
              : function (b, c) {
                  return c - b ? rh(b, c, a) : Kc(isNaN(b) ? c : b)
                }
          }
          function we(a, b) {
            var c = b - a
            return c ? qh(a, c) : Kc(isNaN(a) ? b : a)
          }
          function th(a, b) {
            b || (b = [])
            var c = a ? Math.min(b.length, a.length) : 0,
              f = b.slice(),
              g
            return function (m) {
              for (g = 0; g < c; ++g) f[g] = a[g] * (1 - m) + b[g] * m
              return f
            }
          }
          function uh(a, b) {
            var c = b ? b.length : 0,
              f = a ? Math.min(c, a.length) : 0,
              g = Array(f),
              m = Array(c),
              q
            for (q = 0; q < f; ++q) g[q] = Za(a[q], b[q])
            for (; q < c; ++q) m[q] = b[q]
            return function (a) {
              for (q = 0; q < f; ++q) m[q] = g[q](a)
              return m
            }
          }
          function vh(a, b) {
            var c = new Date()
            return (
              (a = +a),
              (b = +b),
              function (f) {
                return c.setTime(a * (1 - f) + b * f), c
              }
            )
          }
          function pa(a, b) {
            return (
              (a = +a),
              (b = +b),
              function (c) {
                return a * (1 - c) + b * c
              }
            )
          }
          function wh(a, b) {
            var c = {},
              f = {},
              g
            if (null === a || 'object' !== V(a)) a = {}
            if (null === b || 'object' !== V(b)) b = {}
            for (g in b) g in a ? (c[g] = Za(a[g], b[g])) : (f[g] = b[g])
            return function (a) {
              for (g in c) f[g] = c[g](a)
              return f
            }
          }
          function xh(a) {
            return function () {
              return a
            }
          }
          function yh(a) {
            return function (b) {
              return a(b) + ''
            }
          }
          function xe(a, b) {
            var c = (Lc.lastIndex = Mc.lastIndex = 0),
              f,
              g,
              m,
              q = -1,
              d = [],
              k = []
            a += ''
            for (b += ''; (f = Lc.exec(a)) && (g = Mc.exec(b)); )
              (m = g.index) > c && ((m = b.slice(c, m)), d[q] ? (d[q] += m) : (d[++q] = m)),
                (f = f[0]) === (g = g[0])
                  ? d[q]
                    ? (d[q] += g)
                    : (d[++q] = g)
                  : ((d[++q] = null), k.push({ i: q, x: pa(f, g) })),
                (c = Mc.lastIndex)
            c < b.length && ((m = b.slice(c)), d[q] ? (d[q] += m) : (d[++q] = m))
            return 2 > d.length
              ? k[0]
                ? yh(k[0].x)
                : xh(b)
              : ((b = k.length),
                function (a) {
                  for (var c = 0, f; c < b; ++c) d[(f = k[c]).i] = f.x(a)
                  return d.join('')
                })
          }
          function Za(a, b) {
            var c = V(b)
            if (null == b || 'boolean' === c) a = Kc(b)
            else {
              if ('number' === c) var f = pa
              else
                'string' === c
                  ? (c = (f = Na(b)) ? ((b = f), Qb) : xe)
                  : (b instanceof Na
                      ? (f = Qb)
                      : b instanceof Date
                        ? (f = vh)
                        : ((f = b),
                          (f =
                            !ArrayBuffer.isView(f) || f instanceof DataView
                              ? Array.isArray(b)
                                ? uh
                                : ('function' !== typeof b.valueOf &&
                                      'function' !== typeof b.toString) ||
                                    isNaN(b)
                                  ? wh
                                  : pa
                              : th)),
                    (c = f)),
                  (f = c)
              a = f(a, b)
            }
            return a
          }
          function Nc(a, b) {
            return (
              (a = +a),
              (b = +b),
              function (c) {
                return Math.round(a * (1 - c) + b * c)
              }
            )
          }
          function ye(a, b, c, f, g, m) {
            var q, d, k
            if ((q = Math.sqrt(a * a + b * b))) (a /= q), (b /= q)
            if ((k = a * c + b * f)) (c -= a * k), (f -= b * k)
            if ((d = Math.sqrt(c * c + f * f))) (c /= d), (f /= d), (k /= d)
            a * f < b * c && ((a = -a), (b = -b), (k = -k), (q = -q))
            return {
              translateX: g,
              translateY: m,
              rotate: Math.atan2(b, a) * ze,
              skewX: Math.atan(k) * ze,
              scaleX: q,
              scaleY: d,
            }
          }
          function Ae(a, b, c, f) {
            function g(a) {
              return a.length ? a.pop() + ' ' : ''
            }
            function m(a, f, k, g, m, q) {
              a !== k || f !== g
                ? ((m = m.push('translate(', null, b, null, c)),
                  q.push({ i: m - 4, x: pa(a, k) }, { i: m - 2, x: pa(f, g) }))
                : (k || g) && m.push('translate(' + k + b + g + c)
            }
            function q(a, b, c, k) {
              a !== b
                ? (180 < a - b ? (b += 360) : 180 < b - a && (a += 360),
                  k.push({ i: c.push(g(c) + 'rotate(', null, f) - 2, x: pa(a, b) }))
                : b && c.push(g(c) + 'rotate(' + b + f)
            }
            function d(a, b, c, k) {
              a !== b
                ? k.push({ i: c.push(g(c) + 'skewX(', null, f) - 2, x: pa(a, b) })
                : b && c.push(g(c) + 'skewX(' + b + f)
            }
            function k(a, b, c, f, k, m) {
              a !== c || b !== f
                ? ((k = k.push(g(k) + 'scale(', null, ',', null, ')')),
                  m.push({ i: k - 4, x: pa(a, c) }, { i: k - 2, x: pa(b, f) }))
                : (1 === c && 1 === f) || k.push(g(k) + 'scale(' + c + ',' + f + ')')
            }
            return function (b, c) {
              var f = [],
                g = []
              b = a(b)
              c = a(c)
              m(b.translateX, b.translateY, c.translateX, c.translateY, f, g)
              q(b.rotate, c.rotate, f, g)
              d(b.skewX, c.skewX, f, g)
              k(b.scaleX, b.scaleY, c.scaleX, c.scaleY, f, g)
              b = c = null
              return function (a) {
                for (var b = -1, c = g.length, k; ++b < c; ) f[(k = g[b]).i] = k.x(a)
                return f.join('')
              }
            }
          }
          function zh(a, b) {
            b === n && ((b = a), (a = Za))
            for (var c = 0, f = b.length - 1, g = b[0], m = Array(0 > f ? 0 : f); c < f; )
              m[c] = a(g, (g = b[++c]))
            return function (a) {
              var b = Math.max(0, Math.min(f - 1, Math.floor((a *= f))))
              return m[b](a - b)
            }
          }
          function Ah(a) {
            return function () {
              return a
            }
          }
          function Rb(a) {
            return +a
          }
          function Y(a) {
            return a
          }
          function Oc(a, b) {
            return (b -= a = +a)
              ? function (c) {
                  return (c - a) / b
                }
              : Ah(isNaN(b) ? NaN : 0.5)
          }
          function Bh(a, b) {
            if (a > b) {
              var c = a
              a = b
              b = c
            }
            return function (c) {
              return Math.max(a, Math.min(b, c))
            }
          }
          function Ch(a, b, c) {
            var f = a[0]
            a = a[1]
            var g = b[0]
            b = b[1]
            a < f ? ((f = Oc(a, f)), (g = c(b, g))) : ((f = Oc(f, a)), (g = c(g, b)))
            return function (a) {
              return g(f(a))
            }
          }
          function Dh(a, b, c) {
            var f = Math.min(a.length, b.length) - 1,
              g = Array(f),
              m = Array(f),
              q = -1
            a[f] < a[0] && ((a = a.slice().reverse()), (b = b.slice().reverse()))
            for (; ++q < f; ) (g[q] = Oc(a[q], a[q + 1])), (m[q] = c(b[q], b[q + 1]))
            return function (b) {
              var c = Ka(a, b, 1, f) - 1
              return m[c](g[c](b))
            }
          }
          function qb(a, b) {
            return b
              .domain(a.domain())
              .range(a.range())
              .interpolate(a.interpolate())
              .clamp(a.clamp())
              .unknown(a.unknown())
          }
          function $a() {
            function a() {
              var a = Math.min(c.length, f.length)
              k !== Y && (k = Bh(c[0], c[a - 1]))
              p = 2 < a ? Dh : Ch
              w = u = null
              return b
            }
            function b(a) {
              return null == a || isNaN((a = +a)) ? d : (w || (w = p(c.map(m), f, g)))(m(k(a)))
            }
            var c = Be,
              f = Be,
              g = Za,
              m,
              q,
              d,
              k = Y,
              p,
              w,
              u
            b.invert = function (a) {
              return k(q((u || (u = p(f, c.map(m), pa)))(a)))
            }
            b.domain = function (b) {
              return arguments.length ? ((c = Array.from(b, Rb)), a()) : c.slice()
            }
            b.range = function (b) {
              return arguments.length ? ((f = Array.from(b)), a()) : f.slice()
            }
            b.rangeRound = function (b) {
              return (f = Array.from(b)), (g = Nc), a()
            }
            b.clamp = function (b) {
              return arguments.length ? ((k = b ? !0 : Y), a()) : k !== Y
            }
            b.interpolate = function (b) {
              return arguments.length ? ((g = b), a()) : g
            }
            b.unknown = function (a) {
              return arguments.length ? ((d = a), b) : d
            }
            return function (b, c) {
              m = b
              q = c
              return a()
            }
          }
          function Sb(a, b) {
            if (0 > (b = (a = b ? a.toExponential(b - 1) : a.toExponential()).indexOf('e')))
              return null
            var c = a.slice(0, b)
            return [1 < c.length ? c[0] + c.slice(2) : c, +a.slice(b + 1)]
          }
          function ab(a) {
            return (a = Sb(Math.abs(a))), a ? a[1] : NaN
          }
          function Eh(a, b) {
            return function (c, f) {
              for (var g = c.length, m = [], q = 0, d = a[0], k = 0; 0 < g && 0 < d; ) {
                k + d + 1 > f && (d = Math.max(1, f - k))
                m.push(c.substring((g -= d), g + d))
                if ((k += d + 1) > f) break
                d = a[(q = (q + 1) % a.length)]
              }
              return m.reverse().join(b)
            }
          }
          function Fh(a) {
            return function (b) {
              return b.replace(/[0-9]/g, function (b) {
                return a[+b]
              })
            }
          }
          function rb(a) {
            if (!(b = Gh.exec(a))) throw Error('invalid format: ' + a)
            var b
            return new Pc({
              fill: b[1],
              align: b[2],
              sign: b[3],
              symbol: b[4],
              zero: b[5],
              width: b[6],
              comma: b[7],
              precision: b[8] && b[8].slice(1),
              trim: b[9],
              type: b[10],
            })
          }
          function Pc(a) {
            this.fill = a.fill === n ? ' ' : a.fill + ''
            this.align = a.align === n ? '\x3e' : a.align + ''
            this.sign = a.sign === n ? '-' : a.sign + ''
            this.symbol = a.symbol === n ? '' : a.symbol + ''
            this.zero = !!a.zero
            this.width = a.width === n ? n : +a.width
            this.comma = !!a.comma
            this.precision = a.precision === n ? n : +a.precision
            this.trim = !!a.trim
            this.type = a.type === n ? '' : a.type + ''
          }
          function Ce(a, b) {
            b = Sb(a, b)
            if (!b) return a + ''
            a = b[0]
            b = b[1]
            return 0 > b
              ? '0.' + Array(-b).join('0') + a
              : a.length > b + 1
                ? a.slice(0, b + 1) + '.' + a.slice(b + 1)
                : a + Array(b - a.length + 2).join('0')
          }
          function De(a) {
            return a
          }
          function Hh(a) {
            function b(a) {
              function b(a) {
                var b = A,
                  f = x,
                  g,
                  d
                if ('c' === C) (f = F(a) + f), (a = '')
                else {
                  a = +a
                  var u = 0 > a || 0 > 1 / a
                  a = isNaN(a) ? p : F(Math.abs(a), v)
                  if (y) {
                    var I = a.length,
                      h = 1,
                      H = -1
                    a: for (; h < I; ++h)
                      switch (a[h]) {
                        case '.':
                          H = g = h
                          break
                        case '0':
                          0 === H && (H = h)
                          g = h
                          break
                        default:
                          if (!+a[h]) break a
                          0 < H && (H = 0)
                      }
                    a = 0 < H ? a.slice(0, H) + a.slice(g + 1) : a
                  }
                  u && 0 === +a && '+' !== e && (u = !1)
                  b = (u ? ('(' === e ? e : k) : '-' === e || '(' === e ? '' : e) + b
                  f = ('s' === C ? Ee[8 + Fe / 3] : '') + f + (u && '(' === e ? ')' : '')
                  if (Ma)
                    for (u = -1, g = a.length; ++u < g; )
                      if (((d = a.charCodeAt(u)), 48 > d || 57 < d)) {
                        f = (46 === d ? m + a.slice(u + 1) : a.slice(u)) + f
                        a = a.slice(0, u)
                        break
                      }
                }
                r && !l && (a = c(a, Infinity))
                d = b.length + a.length + f.length
                u = d < t ? Array(t - d + 1).join(w) : ''
                r && l && ((a = c(u + a, u.length ? t - f.length : Infinity)), (u = ''))
                switch (z) {
                  case '\x3c':
                    a = b + a + f + u
                    break
                  case '\x3d':
                    a = b + u + a + f
                    break
                  case '^':
                    a = u.slice(0, (d = u.length >> 1)) + b + a + f + u.slice(d)
                    break
                  default:
                    a = u + b + a + f
                }
                return q(a)
              }
              a = rb(a)
              var w = a.fill,
                z = a.align,
                e = a.sign,
                h = a.symbol,
                l = a.zero,
                t = a.width,
                r = a.comma,
                v = a.precision,
                y = a.trim,
                C = a.type
              'n' === C
                ? ((r = !0), (C = 'g'))
                : Ge[C] || (v === n && (v = 12), (y = !0), (C = 'g'))
              if (l || ('0' === w && '\x3d' === z)) (l = !0), (w = '0'), (z = '\x3d')
              var A = '$' === h ? f : '#' === h && /[boxX]/.test(C) ? '0' + C.toLowerCase() : '',
                x = '$' === h ? g : /[%p]/.test(C) ? d : '',
                F = Ge[C],
                Ma = /[defgprs%]/.test(C)
              v =
                v === n
                  ? 6
                  : /[gprs]/.test(C)
                    ? Math.max(1, Math.min(21, v))
                    : Math.max(0, Math.min(20, v))
              b.toString = function () {
                return a + ''
              }
              return b
            }
            var c =
                a.grouping === n || a.thousands === n
                  ? De
                  : Eh(He.call(a.grouping, Number), a.thousands + ''),
              f = a.currency === n ? '' : a.currency[0] + '',
              g = a.currency === n ? '' : a.currency[1] + '',
              m = a.decimal === n ? '.' : a.decimal + '',
              q = a.numerals === n ? De : Fh(He.call(a.numerals, String)),
              d = a.percent === n ? '%' : a.percent + '',
              k = a.minus === n ? '−' : a.minus + '',
              p = a.nan === n ? 'NaN' : a.nan + ''
            return {
              format: b,
              formatPrefix: function (a, c) {
                var f = b(((a = rb(a)), (a.type = 'f'), a))
                a = 3 * Math.max(-8, Math.min(8, Math.floor(ab(c) / 3)))
                var k = Math.pow(10, -a),
                  g = Ee[8 + a / 3]
                return function (a) {
                  return f(k * a) + g
                }
              },
            }
          }
          function Ie(a, b, c, f) {
            c = Jb(a, b, c)
            f = rb(null == f ? ',f' : f)
            switch (f.type) {
              case 's':
                a = Math.max(Math.abs(a), Math.abs(b))
                if ((b = null == f.precision)) {
                  var g = isNaN
                  c = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(ab(a) / 3))) - ab(Math.abs(c)),
                  )
                  b = !g((g = c))
                }
                b && (f.precision = g)
                return Je(f, a)
              case '':
              case 'e':
              case 'g':
              case 'p':
              case 'r':
                var m
                if ((m = null == f.precision))
                  (g = isNaN),
                    (a = Math.max(Math.abs(a), Math.abs(b))),
                    (c = Math.abs(c)),
                    (a = Math.abs(a) - c),
                    (c = Math.max(0, ab(a) - ab(c)) + 1),
                    (m = !g((g = c)))
                m && (f.precision = g - ('e' === f.type))
                break
              case 'f':
              case '%':
                null != f.precision ||
                  isNaN((g = Math.max(0, -ab(Math.abs(c))))) ||
                  (f.precision = g - 2 * ('%' === f.type))
            }
            return Qc(f)
          }
          function Ca(a) {
            var b = a.domain
            a.ticks = function (a) {
              var c = b()
              return jb(c[0], c[c.length - 1], null == a ? 10 : a)
            }
            a.tickFormat = function (a, f) {
              var c = b()
              return Ie(c[0], c[c.length - 1], null == a ? 10 : a, f)
            }
            a.nice = function (c) {
              null == c && (c = 10)
              var f = b(),
                g = 0,
                m = f.length - 1,
                d = f[g],
                z = f[m],
                k = 10
              if (z < d) {
                var p = d
                d = z
                z = p
                p = g
                g = m
                m = p
              }
              for (; 0 < k--; ) {
                p = Ia(d, z, c)
                if (p === w) return (f[g] = d), (f[m] = z), b(f)
                if (0 < p) (d = Math.floor(d / p) * p), (z = Math.ceil(z / p) * p)
                else if (0 > p) (d = Math.ceil(d * p) / p), (z = Math.floor(z * p) / p)
                else break
                var w = p
              }
              return a
            }
            return a
          }
          function Ke() {
            var a = $a()(Y, Y)
            a.copy = function () {
              return qb(a, Ke())
            }
            ma.apply(a, arguments)
            return Ca(a)
          }
          function Le(a) {
            function b(a) {
              return null == a || isNaN((a = +a)) ? c : a
            }
            var c
            b.invert = b
            b.domain = b.range = function (c) {
              return arguments.length ? ((a = Array.from(c, Rb)), b) : a.slice()
            }
            b.unknown = function (a) {
              return arguments.length ? ((c = a), b) : c
            }
            b.copy = function () {
              return Le(a).unknown(c)
            }
            a = arguments.length ? Array.from(a, Rb) : [0, 1]
            return Ca(b)
          }
          function Me(a, b) {
            a = a.slice()
            var c = 0,
              f = a.length - 1,
              g = a[c],
              m = a[f]
            if (m < g) {
              var d = c
              c = f
              f = d
              d = g
              g = m
              m = d
            }
            a[c] = b.floor(g)
            a[f] = b.ceil(m)
            return a
          }
          function Ne(a) {
            return Math.log(a)
          }
          function Oe(a) {
            return Math.exp(a)
          }
          function Ih(a) {
            return -Math.log(-a)
          }
          function Jh(a) {
            return -Math.exp(-a)
          }
          function Kh(a) {
            return isFinite(a) ? +('1e' + a) : 0 > a ? 0 : a
          }
          function Lh(a) {
            return 10 === a
              ? Kh
              : a === Math.E
                ? Math.exp
                : function (b) {
                    return Math.pow(a, b)
                  }
          }
          function Mh(a) {
            return a === Math.E
              ? Math.log
              : (10 === a && Math.log10) ||
                  (2 === a && Math.log2) ||
                  ((a = Math.log(a)),
                  function (b) {
                    return Math.log(b) / a
                  })
          }
          function Pe(a) {
            return function (b, c) {
              return -a(-b, c)
            }
          }
          function Rc(a) {
            function b() {
              m = Mh(g)
              d = Lh(g)
              0 > f()[0] ? ((m = Pe(m)), (d = Pe(d)), a(Ih, Jh)) : a(Ne, Oe)
              return c
            }
            var c = a(Ne, Oe),
              f = c.domain,
              g = 10,
              m,
              d
            c.base = function (a) {
              return arguments.length ? ((g = +a), b()) : g
            }
            c.domain = function (a) {
              return arguments.length ? (f(a), b()) : f()
            }
            c.ticks = function (a) {
              var b = f(),
                c = b[0],
                q = b[b.length - 1]
              if ((b = q < c)) (q = [q, c]), (c = q[0]), (q = q[1])
              var u = m(c),
                z = m(q),
                e = null == a ? 10 : +a,
                h = []
              if (!(g % 1) && z - u < e) {
                u = Math.floor(u)
                z = Math.ceil(z)
                if (0 < c)
                  for (; u <= z; ++u)
                    for (a = 1; a < g; ++a) {
                      var l = 0 > u ? a / d(-u) : a * d(u)
                      if (!(l < c)) {
                        if (l > q) break
                        h.push(l)
                      }
                    }
                else
                  for (; u <= z; ++u)
                    for (a = g - 1; 1 <= a; --a)
                      if (((l = 0 < u ? a / d(-u) : a * d(u)), !(l < c))) {
                        if (l > q) break
                        h.push(l)
                      }
                2 * h.length < e && (h = jb(c, q, e))
              } else h = jb(u, z, Math.min(z - u, e)).map(d)
              return b ? h.reverse() : h
            }
            c.tickFormat = function (a, b) {
              null == a && (a = 10)
              null == b && (b = 10 === g ? 's' : ',')
              'function' !== typeof b &&
                (g % 1 || null != (b = rb(b)).precision || (b.trim = !0), (b = Qc(b)))
              if (Infinity === a) return b
              var f = Math.max(1, (g * a) / c.ticks().length)
              return function (a) {
                var c = a / d(Math.round(m(a)))
                c * g < g - 0.5 && (c *= g)
                return c <= f ? b(a) : ''
              }
            }
            c.nice = function () {
              return f(
                Me(f(), {
                  floor: function (a) {
                    return d(Math.floor(m(a)))
                  },
                  ceil: function (a) {
                    return d(Math.ceil(m(a)))
                  },
                }),
              )
            }
            return c
          }
          function Qe() {
            var a = Rc($a()).domain([1, 10])
            a.copy = function () {
              return qb(a, Qe()).base(a.base())
            }
            ma.apply(a, arguments)
            return a
          }
          function Re(a) {
            return function (b) {
              return Math.sign(b) * Math.log1p(Math.abs(b / a))
            }
          }
          function Se(a) {
            return function (b) {
              return Math.sign(b) * Math.expm1(Math.abs(b)) * a
            }
          }
          function Sc(a) {
            var b = 1,
              c = a(Re(b), Se(b))
            c.constant = function (c) {
              return arguments.length ? a(Re((b = +c)), Se(b)) : b
            }
            return Ca(c)
          }
          function Te() {
            var a = Sc($a())
            a.copy = function () {
              return qb(a, Te()).constant(a.constant())
            }
            return ma.apply(a, arguments)
          }
          function Ue(a) {
            return function (b) {
              return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
            }
          }
          function Nh(a) {
            return 0 > a ? -Math.sqrt(-a) : Math.sqrt(a)
          }
          function Oh(a) {
            return 0 > a ? -a * a : a * a
          }
          function Tc(a) {
            var b = a(Y, Y),
              c = 1
            b.exponent = function (b) {
              return arguments.length
                ? ((c = +b), 1 === c ? a(Y, Y) : 0.5 === c ? a(Nh, Oh) : a(Ue(c), Ue(1 / c)))
                : c
            }
            return Ca(b)
          }
          function Uc() {
            var a = Tc($a())
            a.copy = function () {
              return qb(a, Uc()).exponent(a.exponent())
            }
            ma.apply(a, arguments)
            return a
          }
          function Ve(a) {
            return Math.sign(a) * a * a
          }
          function We() {
            function a(a) {
              a = b(a)
              a = Math.sign(a) * Math.sqrt(Math.abs(a))
              return isNaN(a) ? g : f ? Math.round(a) : a
            }
            var b = $a()(Y, Y),
              c = [0, 1],
              f = !1,
              g
            a.invert = function (a) {
              return b.invert(Ve(a))
            }
            a.domain = function (c) {
              return arguments.length ? (b.domain(c), a) : b.domain()
            }
            a.range = function (f) {
              return arguments.length ? (b.range((c = Array.from(f, Rb)).map(Ve)), a) : c.slice()
            }
            a.rangeRound = function (b) {
              return a.range(b).round(!0)
            }
            a.round = function (b) {
              return arguments.length ? ((f = !!b), a) : f
            }
            a.clamp = function (c) {
              return arguments.length ? (b.clamp(c), a) : b.clamp()
            }
            a.unknown = function (b) {
              return arguments.length ? ((g = b), a) : g
            }
            a.copy = function () {
              return We(b.domain(), c).round(f).clamp(b.clamp()).unknown(g)
            }
            ma.apply(a, arguments)
            return Ca(a)
          }
          function Xe() {
            function a() {
              var a = 0,
                m = Math.max(1, f.length)
              for (g = Array(m - 1); ++a < m; ) g[a - 1] = ce(c, a / m)
              return b
            }
            function b(a) {
              return null == a || isNaN((a = +a)) ? m : f[Ka(g, a)]
            }
            var c = [],
              f = [],
              g = [],
              m
            b.invertExtent = function (a) {
              a = f.indexOf(a)
              return 0 > a
                ? [NaN, NaN]
                : [0 < a ? g[a - 1] : c[0], a < g.length ? g[a] : c[c.length - 1]]
            }
            b.domain = function (b) {
              if (!arguments.length) return c.slice()
              c = []
              var f = B(b),
                k
              try {
                for (f.s(); !(k = f.n()).done; ) {
                  var g = k.value
                  null == g || isNaN((g = +g)) || c.push(g)
                }
              } catch (w) {
                f.e(w)
              } finally {
                f.f()
              }
              c.sort(e)
              return a()
            }
            b.range = function (b) {
              return arguments.length ? ((f = Array.from(b)), a()) : f.slice()
            }
            b.unknown = function (a) {
              return arguments.length ? ((m = a), b) : m
            }
            b.quantiles = function () {
              return g.slice()
            }
            b.copy = function () {
              return Xe().domain(c).range(f).unknown(m)
            }
            return ma.apply(b, arguments)
          }
          function Ye() {
            function a(a) {
              return null != a && a <= a ? d[Ka(m, a, 0, g)] : e
            }
            function b() {
              var b = -1
              for (m = Array(g); ++b < g; ) m[b] = ((b + 1) * f - (b - g) * c) / (g + 1)
              return a
            }
            var c = 0,
              f = 1,
              g = 1,
              m = [0.5],
              d = [0, 1],
              e
            a.domain = function (a) {
              var k
              return arguments.length
                ? ((k = r(a, 2)), (c = k[0]), (f = k[1]), (c = +c), (f = +f), b())
                : [c, f]
            }
            a.range = function (a) {
              return arguments.length ? ((g = (d = Array.from(a)).length - 1), b()) : d.slice()
            }
            a.invertExtent = function (a) {
              a = d.indexOf(a)
              return 0 > a
                ? [NaN, NaN]
                : 1 > a
                  ? [c, m[0]]
                  : a >= g
                    ? [m[g - 1], f]
                    : [m[a - 1], m[a]]
            }
            a.unknown = function (b) {
              return arguments.length ? ((e = b), a) : a
            }
            a.thresholds = function () {
              return m.slice()
            }
            a.copy = function () {
              return Ye().domain([c, f]).range(d).unknown(e)
            }
            return ma.apply(Ca(a), arguments)
          }
          function Ze() {
            function a(a) {
              return null != a && a <= a ? c[Ka(b, a, 0, g)] : f
            }
            var b = [0.5],
              c = [0, 1],
              f,
              g = 1
            a.domain = function (f) {
              return arguments.length
                ? ((b = Array.from(f)), (g = Math.min(b.length, c.length - 1)), a)
                : b.slice()
            }
            a.range = function (f) {
              return arguments.length
                ? ((c = Array.from(f)), (g = Math.min(b.length, c.length - 1)), a)
                : c.slice()
            }
            a.invertExtent = function (a) {
              a = c.indexOf(a)
              return [b[a - 1], b[a]]
            }
            a.unknown = function (b) {
              return arguments.length ? ((f = b), a) : f
            }
            a.copy = function () {
              return Ze().domain(b).range(c).unknown(f)
            }
            return ma.apply(a, arguments)
          }
          function Z(a, b, c, f) {
            function g(b) {
              return a((b = 0 === arguments.length ? new Date() : new Date(+b))), b
            }
            g.floor = function (b) {
              return a((b = new Date(+b))), b
            }
            g.ceil = function (c) {
              return a((c = new Date(c - 1))), b(c, 1), a(c), c
            }
            g.round = function (a) {
              var b = g(a),
                c = g.ceil(a)
              return a - b < c - a ? b : c
            }
            g.offset = function (a, c) {
              return b((a = new Date(+a)), null == c ? 1 : Math.floor(c)), a
            }
            g.range = function (c, f, d) {
              var k = []
              c = g.ceil(c)
              d = null == d ? 1 : Math.floor(d)
              if (!(c < f && 0 < d)) return k
              var m
              do k.push((m = new Date(+c))), b(c, d), a(c)
              while (m < c && c < f)
              return k
            }
            g.filter = function (c) {
              return Z(
                function (b) {
                  if (b >= b) for (; a(b), !c(b); ) b.setTime(b - 1)
                },
                function (a, f) {
                  if (a >= a)
                    if (0 > f) for (; 0 >= ++f; ) for (; b(a, -1), !c(a); );
                    else for (; 0 <= --f; ) for (; b(a, 1), !c(a); );
                },
              )
            }
            c &&
              ((g.count = function (b, f) {
                Vc.setTime(+b)
                Wc.setTime(+f)
                a(Vc)
                a(Wc)
                return Math.floor(c(Vc, Wc))
              }),
              (g.every = function (a) {
                a = Math.floor(a)
                return isFinite(a) && 0 < a
                  ? 1 < a
                    ? g.filter(
                        f
                          ? function (b) {
                              return 0 === f(b) % a
                            }
                          : function (b) {
                              return 0 === g.count(0, b) % a
                            },
                      )
                    : g
                  : null
              }))
            return g
          }
          function Qa(a) {
            return Z(
              function (b) {
                b.setDate(b.getDate() - ((b.getDay() + 7 - a) % 7))
                b.setHours(0, 0, 0, 0)
              },
              function (a, c) {
                a.setDate(a.getDate() + 7 * c)
              },
              function (a, c) {
                return (c - a - 6e4 * (c.getTimezoneOffset() - a.getTimezoneOffset())) / Xc
              },
            )
          }
          function Ra(a) {
            return Z(
              function (b) {
                b.setUTCDate(b.getUTCDate() - ((b.getUTCDay() + 7 - a) % 7))
                b.setUTCHours(0, 0, 0, 0)
              },
              function (a, c) {
                a.setUTCDate(a.getUTCDate() + 7 * c)
              },
              function (a, c) {
                return (c - a) / Xc
              },
            )
          }
          function $e(a, b, c, f, g, d) {
            function m(b, c, f) {
              var g = Math.abs(c - b) / f,
                k = A(function (a) {
                  return r(a, 3)[2]
                }).right(e, g)
              if (k === e.length) return a.every(Jb(b / Yc, c / Yc, f))
              if (0 === k) return Tb.every(Math.max(Jb(b, c, f), 1))
              b = r(e[g / e[k - 1][2] < e[k][2] / g ? k - 1 : k], 2)
              return b[0].every(b[1])
            }
            var e = [
              [Sa, 1, 1e3],
              [Sa, 5, 5e3],
              [Sa, 15, 15e3],
              [Sa, 30, 3e4],
              [d, 1, 6e4],
              [d, 5, 3e5],
              [d, 15, 9e5],
              [d, 30, 18e5],
              [g, 1, 36e5],
              [g, 3, 108e5],
              [g, 6, 216e5],
              [g, 12, 432e5],
              [f, 1, 864e5],
              [f, 2, 1728e5],
              [c, 1, Xc],
              [b, 1, af],
              [b, 3, 3 * af],
              [a, 1, Yc],
            ]
            return [
              function (a, b, c) {
                var f = b < a
                f && ((b = [b, a]), (a = b[0]), (b = b[1]))
                a = (c = c && 'function' === typeof c.range ? c : m(a, b, c))
                  ? c.range(a, +b + 1)
                  : []
                return f ? a.reverse() : a
              },
              m,
            ]
          }
          function Zc(a) {
            if (0 <= a.y && 100 > a.y) {
              var b = new Date(-1, a.m, a.d, a.H, a.M, a.S, a.L)
              b.setFullYear(a.y)
              return b
            }
            return new Date(a.y, a.m, a.d, a.H, a.M, a.S, a.L)
          }
          function $c(a) {
            if (0 <= a.y && 100 > a.y) {
              var b = new Date(Date.UTC(-1, a.m, a.d, a.H, a.M, a.S, a.L))
              b.setUTCFullYear(a.y)
              return b
            }
            return new Date(Date.UTC(a.y, a.m, a.d, a.H, a.M, a.S, a.L))
          }
          function sb(a, b, c) {
            return { y: a, m: b, d: c, H: 0, M: 0, S: 0, L: 0 }
          }
          function Ph(a) {
            function b(a, b) {
              return function (c) {
                var f = [],
                  g = -1,
                  k = 0,
                  d = a.length,
                  m,
                  p
                for (c instanceof Date || (c = new Date(+c)); ++g < d; )
                  if (37 === a.charCodeAt(g)) {
                    f.push(a.slice(k, g))
                    null != (k = bf[(m = a.charAt(++g))])
                      ? (m = a.charAt(++g))
                      : (k = 'e' === m ? ' ' : '0')
                    if ((p = b[m])) m = p(c, k)
                    f.push(m)
                    k = g + 1
                  }
                f.push(a.slice(k, g))
                return f.join('')
              }
            }
            function c(a, b) {
              return function (c) {
                var g = sb(1900, n, 1)
                if (f(g, a, (c += ''), 0) != c.length) return null
                if ('Q' in g) return new Date(g.Q)
                if ('s' in g) return new Date(1e3 * g.s + ('L' in g ? g.L : 0))
                !b || 'Z' in g || (g.Z = 0)
                'p' in g && (g.H = (g.H % 12) + 12 * g.p)
                g.m === n && (g.m = 'q' in g ? g.q : 0)
                if ('V' in g) {
                  if (1 > g.V || 53 < g.V) return null
                  'w' in g || (g.w = 1)
                  if ('Z' in g) {
                    c = $c(sb(g.y, 0, 1))
                    var k = c.getUTCDay()
                    c = 4 < k || 0 === k ? Ub.ceil(c) : Ub(c)
                    c = Vb.offset(c, 7 * (g.V - 1))
                    g.y = c.getUTCFullYear()
                    g.m = c.getUTCMonth()
                    g.d = c.getUTCDate() + ((g.w + 6) % 7)
                  } else
                    (c = Zc(sb(g.y, 0, 1))),
                      (k = c.getDay()),
                      (c = 4 < k || 0 === k ? Wb.ceil(c) : Wb(c)),
                      (c = tb.offset(c, 7 * (g.V - 1))),
                      (g.y = c.getFullYear()),
                      (g.m = c.getMonth()),
                      (g.d = c.getDate() + ((g.w + 6) % 7))
                } else if ('W' in g || 'U' in g)
                  'w' in g || (g.w = 'u' in g ? g.u % 7 : 'W' in g ? 1 : 0),
                    (k = 'Z' in g ? $c(sb(g.y, 0, 1)).getUTCDay() : Zc(sb(g.y, 0, 1)).getDay()),
                    (g.m = 0),
                    (g.d =
                      'W' in g
                        ? ((g.w + 6) % 7) + 7 * g.W - ((k + 5) % 7)
                        : g.w + 7 * g.U - ((k + 6) % 7))
                return 'Z' in g ? ((g.H += (g.Z / 100) | 0), (g.M += g.Z % 100), $c(g)) : Zc(g)
              }
            }
            function f(a, b, c, f) {
              for (var g = 0, k = b.length, d = c.length, m; g < k; ) {
                if (f >= d) return -1
                m = b.charCodeAt(g++)
                if (37 === m) {
                  if (
                    ((m = b.charAt(g++)),
                    (m = B[m in bf ? b.charAt(g++) : m]),
                    !m || 0 > (f = m(a, c, f)))
                  )
                    return -1
                } else if (m != c.charCodeAt(f++)) return -1
              }
              return f
            }
            var g = a.dateTime,
              d = a.date,
              q = a.time,
              e = a.periods,
              k = a.days,
              p = a.shortDays,
              w = a.months,
              u = a.shortMonths,
              I = ub(e),
              h = vb(e),
              l = ub(k),
              J = vb(k),
              t = ub(p),
              r = vb(p),
              v = ub(w),
              C = vb(w),
              y = ub(u),
              A = vb(u),
              F = {
                a: function (a) {
                  return p[a.getDay()]
                },
                A: function (a) {
                  return k[a.getDay()]
                },
                b: function (a) {
                  return u[a.getMonth()]
                },
                B: function (a) {
                  return w[a.getMonth()]
                },
                c: null,
                d: cf,
                e: cf,
                f: Qh,
                g: Rh,
                G: Sh,
                H: Th,
                I: Uh,
                j: Vh,
                L: df,
                m: Wh,
                M: Xh,
                p: function (a) {
                  return e[+(12 <= a.getHours())]
                },
                q: function (a) {
                  return 1 + ~~(a.getMonth() / 3)
                },
                Q: ef,
                s: ff,
                S: Yh,
                u: Zh,
                U: $h,
                V: ai,
                w: bi,
                W: ci,
                x: null,
                X: null,
                y: di,
                Y: ei,
                Z: fi,
                '%': gf,
              },
              x = {
                a: function (a) {
                  return p[a.getUTCDay()]
                },
                A: function (a) {
                  return k[a.getUTCDay()]
                },
                b: function (a) {
                  return u[a.getUTCMonth()]
                },
                B: function (a) {
                  return w[a.getUTCMonth()]
                },
                c: null,
                d: hf,
                e: hf,
                f: gi,
                g: hi,
                G: ii,
                H: ji,
                I: ki,
                j: li,
                L: jf,
                m: mi,
                M: ni,
                p: function (a) {
                  return e[+(12 <= a.getUTCHours())]
                },
                q: function (a) {
                  return 1 + ~~(a.getUTCMonth() / 3)
                },
                Q: ef,
                s: ff,
                S: oi,
                u: pi,
                U: qi,
                V: ri,
                w: si,
                W: ti,
                x: null,
                X: null,
                y: ui,
                Y: vi,
                Z: wi,
                '%': gf,
              },
              B = {
                a: function (a, b, c) {
                  return (b = t.exec(b.slice(c)))
                    ? ((a.w = r.get(b[0].toLowerCase())), c + b[0].length)
                    : -1
                },
                A: function (a, b, c) {
                  return (b = l.exec(b.slice(c)))
                    ? ((a.w = J.get(b[0].toLowerCase())), c + b[0].length)
                    : -1
                },
                b: function (a, b, c) {
                  return (b = y.exec(b.slice(c)))
                    ? ((a.m = A.get(b[0].toLowerCase())), c + b[0].length)
                    : -1
                },
                B: function (a, b, c) {
                  return (b = v.exec(b.slice(c)))
                    ? ((a.m = C.get(b[0].toLowerCase())), c + b[0].length)
                    : -1
                },
                c: function (a, b, c) {
                  return f(a, g, b, c)
                },
                d: kf,
                e: kf,
                f: xi,
                g: lf,
                G: mf,
                H: nf,
                I: nf,
                j: yi,
                L: zi,
                m: Ai,
                M: Bi,
                p: function (a, b, c) {
                  return (b = I.exec(b.slice(c)))
                    ? ((a.p = h.get(b[0].toLowerCase())), c + b[0].length)
                    : -1
                },
                q: Ci,
                Q: Di,
                s: Ei,
                S: Fi,
                u: Gi,
                U: Hi,
                V: Ii,
                w: Ji,
                W: Ki,
                x: function (a, b, c) {
                  return f(a, d, b, c)
                },
                X: function (a, b, c) {
                  return f(a, q, b, c)
                },
                y: lf,
                Y: mf,
                Z: Li,
                '%': Mi,
              }
            F.x = b(d, F)
            F.X = b(q, F)
            F.c = b(g, F)
            x.x = b(d, x)
            x.X = b(q, x)
            x.c = b(g, x)
            return {
              format: function (a) {
                var c = b((a += ''), F)
                c.toString = function () {
                  return a
                }
                return c
              },
              parse: function (a) {
                var b = c((a += ''), !1)
                b.toString = function () {
                  return a
                }
                return b
              },
              utcFormat: function (a) {
                var c = b((a += ''), x)
                c.toString = function () {
                  return a
                }
                return c
              },
              utcParse: function (a) {
                var b = c((a += ''), !0)
                b.toString = function () {
                  return a
                }
                return b
              },
            }
          }
          function P(a, b, c) {
            var f = 0 > a ? '-' : ''
            a = (f ? -a : a) + ''
            var g = a.length
            return f + (g < c ? Array(c - g + 1).join(b) + a : a)
          }
          function Ni(a) {
            return a.replace(Oi, '\\$\x26')
          }
          function ub(a) {
            return new RegExp('^(?:' + a.map(Ni).join('|') + ')', 'i')
          }
          function vb(a) {
            return new Map(
              a.map(function (a, c) {
                return [a.toLowerCase(), c]
              }),
            )
          }
          function Ji(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 1))) ? ((a.w = +b[0]), c + b[0].length) : -1
          }
          function Gi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 1))) ? ((a.u = +b[0]), c + b[0].length) : -1
          }
          function Hi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.U = +b[0]), c + b[0].length) : -1
          }
          function Ii(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.V = +b[0]), c + b[0].length) : -1
          }
          function Ki(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.W = +b[0]), c + b[0].length) : -1
          }
          function mf(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 4))) ? ((a.y = +b[0]), c + b[0].length) : -1
          }
          function lf(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2)))
              ? ((a.y = +b[0] + (68 < +b[0] ? 1900 : 2e3)), c + b[0].length)
              : -1
          }
          function Li(a, b, c) {
            return (b = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(b.slice(c, c + 6)))
              ? ((a.Z = b[1] ? 0 : -(b[2] + (b[3] || '00'))), c + b[0].length)
              : -1
          }
          function Ci(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 1))) ? ((a.q = 3 * b[0] - 3), c + b[0].length) : -1
          }
          function Ai(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.m = b[0] - 1), c + b[0].length) : -1
          }
          function kf(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.d = +b[0]), c + b[0].length) : -1
          }
          function yi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 3)))
              ? ((a.m = 0), (a.d = +b[0]), c + b[0].length)
              : -1
          }
          function nf(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.H = +b[0]), c + b[0].length) : -1
          }
          function Bi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.M = +b[0]), c + b[0].length) : -1
          }
          function Fi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 2))) ? ((a.S = +b[0]), c + b[0].length) : -1
          }
          function zi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 3))) ? ((a.L = +b[0]), c + b[0].length) : -1
          }
          function xi(a, b, c) {
            return (b = aa.exec(b.slice(c, c + 6)))
              ? ((a.L = Math.floor(b[0] / 1e3)), c + b[0].length)
              : -1
          }
          function Mi(a, b, c) {
            return (a = Pi.exec(b.slice(c, c + 1))) ? c + a[0].length : -1
          }
          function Di(a, b, c) {
            return (b = aa.exec(b.slice(c))) ? ((a.Q = +b[0]), c + b[0].length) : -1
          }
          function Ei(a, b, c) {
            return (b = aa.exec(b.slice(c))) ? ((a.s = +b[0]), c + b[0].length) : -1
          }
          function cf(a, b) {
            return P(a.getDate(), b, 2)
          }
          function Th(a, b) {
            return P(a.getHours(), b, 2)
          }
          function Uh(a, b) {
            return P(a.getHours() % 12 || 12, b, 2)
          }
          function Vh(a, b) {
            return P(1 + tb.count(ya(a), a), b, 3)
          }
          function df(a, b) {
            return P(a.getMilliseconds(), b, 3)
          }
          function Qh(a, b) {
            return df(a, b) + '000'
          }
          function Wh(a, b) {
            return P(a.getMonth() + 1, b, 2)
          }
          function Xh(a, b) {
            return P(a.getMinutes(), b, 2)
          }
          function Yh(a, b) {
            return P(a.getSeconds(), b, 2)
          }
          function Zh(a) {
            a = a.getDay()
            return 0 === a ? 7 : a
          }
          function $h(a, b) {
            return P(Xb.count(ya(a) - 1, a), b, 2)
          }
          function of(a) {
            var b = a.getDay()
            return 4 <= b || 0 === b ? bb(a) : bb.ceil(a)
          }
          function ai(a, b) {
            a = of(a)
            return P(bb.count(ya(a), a) + (4 === ya(a).getDay()), b, 2)
          }
          function bi(a) {
            return a.getDay()
          }
          function ci(a, b) {
            return P(Wb.count(ya(a) - 1, a), b, 2)
          }
          function di(a, b) {
            return P(a.getFullYear() % 100, b, 2)
          }
          function Rh(a, b) {
            a = of(a)
            return P(a.getFullYear() % 100, b, 2)
          }
          function ei(a, b) {
            return P(a.getFullYear() % 1e4, b, 4)
          }
          function Sh(a, b) {
            var c = a.getDay()
            a = 4 <= c || 0 === c ? bb(a) : bb.ceil(a)
            return P(a.getFullYear() % 1e4, b, 4)
          }
          function fi(a) {
            a = a.getTimezoneOffset()
            return (0 < a ? '-' : ((a *= -1), '+')) + P((a / 60) | 0, '0', 2) + P(a % 60, '0', 2)
          }
          function hf(a, b) {
            return P(a.getUTCDate(), b, 2)
          }
          function ji(a, b) {
            return P(a.getUTCHours(), b, 2)
          }
          function ki(a, b) {
            return P(a.getUTCHours() % 12 || 12, b, 2)
          }
          function li(a, b) {
            return P(1 + Vb.count(za(a), a), b, 3)
          }
          function jf(a, b) {
            return P(a.getUTCMilliseconds(), b, 3)
          }
          function gi(a, b) {
            return jf(a, b) + '000'
          }
          function mi(a, b) {
            return P(a.getUTCMonth() + 1, b, 2)
          }
          function ni(a, b) {
            return P(a.getUTCMinutes(), b, 2)
          }
          function oi(a, b) {
            return P(a.getUTCSeconds(), b, 2)
          }
          function pi(a) {
            a = a.getUTCDay()
            return 0 === a ? 7 : a
          }
          function qi(a, b) {
            return P(Yb.count(za(a) - 1, a), b, 2)
          }
          function pf(a) {
            var b = a.getUTCDay()
            return 4 <= b || 0 === b ? cb(a) : cb.ceil(a)
          }
          function ri(a, b) {
            a = pf(a)
            return P(cb.count(za(a), a) + (4 === za(a).getUTCDay()), b, 2)
          }
          function si(a) {
            return a.getUTCDay()
          }
          function ti(a, b) {
            return P(Ub.count(za(a) - 1, a), b, 2)
          }
          function ui(a, b) {
            return P(a.getUTCFullYear() % 100, b, 2)
          }
          function hi(a, b) {
            a = pf(a)
            return P(a.getUTCFullYear() % 100, b, 2)
          }
          function vi(a, b) {
            return P(a.getUTCFullYear() % 1e4, b, 4)
          }
          function ii(a, b) {
            var c = a.getUTCDay()
            a = 4 <= c || 0 === c ? cb(a) : cb.ceil(a)
            return P(a.getUTCFullYear() % 1e4, b, 4)
          }
          function wi() {
            return '+0000'
          }
          function gf() {
            return '%'
          }
          function ef(a) {
            return +a
          }
          function ff(a) {
            return Math.floor(+a / 1e3)
          }
          function Qi(a) {
            return new Date(a)
          }
          function Ri(a) {
            return a instanceof Date ? +a : +new Date(+a)
          }
          function ad(a, b, c, f, g, d, q, e, k, p) {
            function m(a) {
              return (
                k(a) < a
                  ? l
                  : e(a) < a
                    ? n
                    : q(a) < a
                      ? t
                      : d(a) < a
                        ? r
                        : f(a) < a
                          ? g(a) < a
                            ? v
                            : C
                          : c(a) < a
                            ? y
                            : F
              )(a)
            }
            var u = $a()(Y, Y),
              z = u.invert,
              h = u.domain,
              l = p('.%L'),
              n = p(':%S'),
              t = p('%I:%M'),
              r = p('%I %p'),
              v = p('%a %d'),
              C = p('%b %d'),
              y = p('%B'),
              F = p('%Y')
            u.invert = function (a) {
              return new Date(z(a))
            }
            u.domain = function (a) {
              return arguments.length ? h(Array.from(a, Ri)) : h().map(Qi)
            }
            u.ticks = function (b) {
              var c = h()
              return a(c[0], c[c.length - 1], null == b ? 10 : b)
            }
            u.tickFormat = function (a, b) {
              return null == b ? m : p(b)
            }
            u.nice = function (a) {
              var c = h()
              ;(a && 'function' === typeof a.range) ||
                (a = b(c[0], c[c.length - 1], null == a ? 10 : a))
              return a ? h(Me(c, a)) : u
            }
            u.copy = function () {
              return qb(u, ad(a, b, c, f, g, d, q, e, k, p))
            }
            return u
          }
          function Zb() {
            function a(a) {
              return null == a || isNaN((a = +a))
                ? w
                : k(0 === q ? 0.5 : ((a = (e(a) - g) * q), p ? Math.max(0, Math.min(1, a)) : a))
            }
            function b(b) {
              return function (c) {
                var f, g, d
                return arguments.length
                  ? ((f = r(c, 2)), (g = f[0]), (d = f[1]), (k = b(g, d)), a)
                  : [k(0), k(1)]
              }
            }
            var c = 0,
              f = 1,
              g,
              d,
              q,
              e,
              k = Y,
              p = !1,
              w
            a.domain = function (b) {
              var k
              return arguments.length
                ? ((k = r(b, 2)),
                  (c = k[0]),
                  (f = k[1]),
                  (g = e((c = +c))),
                  (d = e((f = +f))),
                  (q = g === d ? 0 : 1 / (d - g)),
                  a)
                : [c, f]
            }
            a.clamp = function (b) {
              return arguments.length ? ((p = !!b), a) : p
            }
            a.interpolator = function (b) {
              return arguments.length ? ((k = b), a) : k
            }
            a.range = b(Za)
            a.rangeRound = b(Nc)
            a.unknown = function (b) {
              return arguments.length ? ((w = b), a) : w
            }
            return function (b) {
              e = b
              g = b(c)
              d = b(f)
              q = g === d ? 0 : 1 / (d - g)
              return a
            }
          }
          function Da(a, b) {
            return b
              .domain(a.domain())
              .interpolator(a.interpolator())
              .clamp(a.clamp())
              .unknown(a.unknown())
          }
          function qf() {
            var a = Ca(Zb()(Y))
            a.copy = function () {
              return Da(a, qf())
            }
            return xa.apply(a, arguments)
          }
          function rf() {
            var a = Rc(Zb()).domain([1, 10])
            a.copy = function () {
              return Da(a, rf()).base(a.base())
            }
            return xa.apply(a, arguments)
          }
          function sf() {
            var a = Sc(Zb())
            a.copy = function () {
              return Da(a, sf()).constant(a.constant())
            }
            return xa.apply(a, arguments)
          }
          function bd() {
            var a = Tc(Zb())
            a.copy = function () {
              return Da(a, bd()).exponent(a.exponent())
            }
            return xa.apply(a, arguments)
          }
          function tf() {
            function a(a) {
              if (null != a && !isNaN((a = +a))) return c((Ka(b, a, 1) - 1) / (b.length - 1))
            }
            var b = [],
              c = Y
            a.domain = function (c) {
              if (!arguments.length) return b.slice()
              b = []
              var f = B(c),
                d
              try {
                for (f.s(); !(d = f.n()).done; ) {
                  var q = d.value
                  null == q || isNaN((q = +q)) || b.push(q)
                }
              } catch (z) {
                f.e(z)
              } finally {
                f.f()
              }
              b.sort(e)
              return a
            }
            a.interpolator = function (b) {
              return arguments.length ? ((c = b), a) : c
            }
            a.range = function () {
              return b.map(function (a, g) {
                return c(g / (b.length - 1))
              })
            }
            a.quantiles = function (a) {
              return Array.from({ length: a + 1 }, function (c, f) {
                return nb(b, f / a)
              })
            }
            a.copy = function () {
              return tf(c).domain(b)
            }
            return xa.apply(a, arguments)
          }
          function $b() {
            function a(a) {
              return isNaN((a = +a))
                ? l
                : ((a = 0.5 + ((a = +I(a)) - e) * (d * a < d * e ? p : w)),
                  u(h ? Math.max(0, Math.min(1, a)) : a))
            }
            function b(b) {
              return function (c) {
                var f, g, k, d
                return arguments.length
                  ? ((f = r(c, 3)), (g = f[0]), (k = f[1]), (d = f[2]), (u = zh(b, [g, k, d])), a)
                  : [u(0), u(0.5), u(1)]
              }
            }
            var c = 0,
              f = 0.5,
              g = 1,
              d = 1,
              q,
              e,
              k,
              p,
              w,
              u = Y,
              I,
              h = !1,
              l
            a.domain = function (b) {
              var m
              return arguments.length
                ? ((m = r(b, 3)),
                  (c = m[0]),
                  (f = m[1]),
                  (g = m[2]),
                  (q = I((c = +c))),
                  (e = I((f = +f))),
                  (k = I((g = +g))),
                  (p = q === e ? 0 : 0.5 / (e - q)),
                  (w = e === k ? 0 : 0.5 / (k - e)),
                  (d = e < q ? -1 : 1),
                  a)
                : [c, f, g]
            }
            a.clamp = function (b) {
              return arguments.length ? ((h = !!b), a) : h
            }
            a.interpolator = function (b) {
              return arguments.length ? ((u = b), a) : u
            }
            a.range = b(Za)
            a.rangeRound = b(Nc)
            a.unknown = function (b) {
              return arguments.length ? ((l = b), a) : l
            }
            return function (b) {
              I = b
              q = b(c)
              e = b(f)
              k = b(g)
              p = q === e ? 0 : 0.5 / (e - q)
              w = e === k ? 0 : 0.5 / (k - e)
              d = e < q ? -1 : 1
              return a
            }
          }
          function uf() {
            var a = Ca($b()(Y))
            a.copy = function () {
              return Da(a, uf())
            }
            return xa.apply(a, arguments)
          }
          function vf() {
            var a = Rc($b()).domain([0.1, 1, 10])
            a.copy = function () {
              return Da(a, vf()).base(a.base())
            }
            return xa.apply(a, arguments)
          }
          function wf() {
            var a = Sc($b())
            a.copy = function () {
              return Da(a, wf()).constant(a.constant())
            }
            return xa.apply(a, arguments)
          }
          function cd() {
            var a = Tc($b())
            a.copy = function () {
              return Da(a, cd()).exponent(a.exponent())
            }
            return xa.apply(a, arguments)
          }
          function wb(a) {
            var b = (a += ''),
              c = b.indexOf(':')
            0 <= c && 'xmlns' !== (b = a.slice(0, c)) && (a = a.slice(c + 1))
            return dd.hasOwnProperty(b) ? { space: dd[b], local: a } : a
          }
          function Si(a) {
            return function () {
              var b = this.ownerDocument,
                c = this.namespaceURI
              return 'http://www.w3.org/1999/xhtml' === c &&
                'http://www.w3.org/1999/xhtml' === b.documentElement.namespaceURI
                ? b.createElement(a)
                : b.createElementNS(c, a)
            }
          }
          function Ti(a) {
            return function () {
              return this.ownerDocument.createElementNS(a.space, a.local)
            }
          }
          function ac(a) {
            a = wb(a)
            return (a.local ? Ti : Si)(a)
          }
          function Ui() {}
          function bc(a) {
            return null == a
              ? Ui
              : function () {
                  return this.querySelector(a)
                }
          }
          function xf(a) {
            return null == a ? [] : Array.isArray(a) ? a : Array.from(a)
          }
          function Vi() {
            return []
          }
          function ed(a) {
            return null == a
              ? Vi
              : function () {
                  return this.querySelectorAll(a)
                }
          }
          function Wi(a) {
            return function () {
              return xf(a.apply(this, arguments))
            }
          }
          function fd(a) {
            return function () {
              return this.matches(a)
            }
          }
          function yf(a) {
            return function (b) {
              return b.matches(a)
            }
          }
          function Xi(a) {
            return function () {
              return Yi.call(this.children, a)
            }
          }
          function Zi() {
            return this.firstElementChild
          }
          function $i() {
            return Array.from(this.children)
          }
          function aj(a) {
            return function () {
              return bj.call(this.children, a)
            }
          }
          function zf(a) {
            return Array(a.length)
          }
          function cc(a, b) {
            this.ownerDocument = a.ownerDocument
            this.namespaceURI = a.namespaceURI
            this._next = null
            this._parent = a
            this.__data__ = b
          }
          function cj(a) {
            return function () {
              return a
            }
          }
          function dj(a, b, c, f, g, d) {
            for (var m = 0, e, k = b.length, p = d.length; m < p; ++m)
              (e = b[m]) ? ((e.__data__ = d[m]), (f[m] = e)) : (c[m] = new cc(a, d[m]))
            for (; m < k; ++m) if ((e = b[m])) g[m] = e
          }
          function ej(a, b, c, f, g, d, q) {
            var m,
              k,
              p = new Map(),
              w = b.length,
              u = d.length,
              e = Array(w),
              h
            for (m = 0; m < w; ++m)
              if ((k = b[m]))
                (e[m] = h = q.call(k, k.__data__, m, b) + ''), p.has(h) ? (g[m] = k) : p.set(h, k)
            for (m = 0; m < u; ++m)
              (h = q.call(a, d[m], m, d) + ''),
                (k = p.get(h))
                  ? ((f[m] = k), (k.__data__ = d[m]), p['delete'](h))
                  : (c[m] = new cc(a, d[m]))
            for (m = 0; m < w; ++m) (k = b[m]) && p.get(e[m]) === k && (g[m] = k)
          }
          function fj(a) {
            return a.__data__
          }
          function gj(a, b) {
            return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
          }
          function hj(a) {
            return function () {
              this.removeAttribute(a)
            }
          }
          function ij(a) {
            return function () {
              this.removeAttributeNS(a.space, a.local)
            }
          }
          function jj(a, b) {
            return function () {
              this.setAttribute(a, b)
            }
          }
          function kj(a, b) {
            return function () {
              this.setAttributeNS(a.space, a.local, b)
            }
          }
          function lj(a, b) {
            return function () {
              var c = b.apply(this, arguments)
              null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
            }
          }
          function mj(a, b) {
            return function () {
              var c = b.apply(this, arguments)
              null == c
                ? this.removeAttributeNS(a.space, a.local)
                : this.setAttributeNS(a.space, a.local, c)
            }
          }
          function gd(a) {
            return (
              (a.ownerDocument && a.ownerDocument.defaultView) || (a.document && a) || a.defaultView
            )
          }
          function nj(a) {
            return function () {
              this.style.removeProperty(a)
            }
          }
          function oj(a, b, c) {
            return function () {
              this.style.setProperty(a, b, c)
            }
          }
          function pj(a, b, c) {
            return function () {
              var f = b.apply(this, arguments)
              null == f ? this.style.removeProperty(a) : this.style.setProperty(a, f, c)
            }
          }
          function Ta(a, b) {
            return (
              a.style.getPropertyValue(b) || gd(a).getComputedStyle(a, null).getPropertyValue(b)
            )
          }
          function qj(a) {
            return function () {
              delete this[a]
            }
          }
          function rj(a, b) {
            return function () {
              this[a] = b
            }
          }
          function sj(a, b) {
            return function () {
              var c = b.apply(this, arguments)
              null == c ? delete this[a] : (this[a] = c)
            }
          }
          function hd(a) {
            return a.classList || new Af(a)
          }
          function Af(a) {
            this._node = a
            this._names = (a.getAttribute('class') || '').trim().split(/^|\s+/)
          }
          function Bf(a, b) {
            a = hd(a)
            for (var c = -1, f = b.length; ++c < f; ) a.add(b[c])
          }
          function Cf(a, b) {
            a = hd(a)
            for (var c = -1, f = b.length; ++c < f; ) a.remove(b[c])
          }
          function tj(a) {
            return function () {
              Bf(this, a)
            }
          }
          function uj(a) {
            return function () {
              Cf(this, a)
            }
          }
          function vj(a, b) {
            return function () {
              ;(b.apply(this, arguments) ? Bf : Cf)(this, a)
            }
          }
          function wj() {
            this.textContent = ''
          }
          function xj(a) {
            return function () {
              this.textContent = a
            }
          }
          function yj(a) {
            return function () {
              var b = a.apply(this, arguments)
              this.textContent = null == b ? '' : b
            }
          }
          function zj() {
            this.innerHTML = ''
          }
          function Aj(a) {
            return function () {
              this.innerHTML = a
            }
          }
          function Bj(a) {
            return function () {
              var b = a.apply(this, arguments)
              this.innerHTML = null == b ? '' : b
            }
          }
          function Cj() {
            this.nextSibling && this.parentNode.appendChild(this)
          }
          function Dj() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
          }
          function Ej() {
            return null
          }
          function Fj() {
            var a = this.parentNode
            a && a.removeChild(this)
          }
          function Gj() {
            var a = this.cloneNode(!1),
              b = this.parentNode
            return b ? b.insertBefore(a, this.nextSibling) : a
          }
          function Hj() {
            var a = this.cloneNode(!0),
              b = this.parentNode
            return b ? b.insertBefore(a, this.nextSibling) : a
          }
          function Ij(a) {
            return function (b) {
              a.call(this, b, this.__data__)
            }
          }
          function Jj(a) {
            return a
              .trim()
              .split(/^|\s+/)
              .map(function (a) {
                var b = '',
                  f = a.indexOf('.')
                0 <= f && ((b = a.slice(f + 1)), (a = a.slice(0, f)))
                return { type: a, name: b }
              })
          }
          function Kj(a) {
            return function () {
              var b = this.__on
              if (b) {
                for (var c = 0, f = -1, g = b.length, d; c < g; ++c)
                  ((d = b[c]), (a.type && d.type !== a.type) || d.name !== a.name)
                    ? (b[++f] = d)
                    : this.removeEventListener(d.type, d.listener, d.options)
                ++f ? (b.length = f) : delete this.__on
              }
            }
          }
          function Lj(a, b, c) {
            return function () {
              var f = this.__on,
                g,
                d = Ij(b)
              if (f)
                for (var q = 0, e = f.length; q < e; ++q)
                  if ((g = f[q]).type === a.type && g.name === a.name) {
                    this.removeEventListener(g.type, g.listener, g.options)
                    this.addEventListener(g.type, (g.listener = d), (g.options = c))
                    g.value = b
                    return
                  }
              this.addEventListener(a.type, d, c)
              g = { type: a.type, name: a.name, value: b, listener: d, options: c }
              f ? f.push(g) : (this.__on = [g])
            }
          }
          function Df(a, b, c) {
            var f = gd(a),
              g = f.CustomEvent
            'function' === typeof g
              ? (g = new g(b, c))
              : ((g = f.document.createEvent('Event')),
                c
                  ? (g.initEvent(b, c.bubbles, c.cancelable), (g.detail = c.detail))
                  : g.initEvent(b, !1, !1))
            a.dispatchEvent(g)
          }
          function Mj(a, b) {
            return function () {
              return Df(this, a, b)
            }
          }
          function Nj(a, b) {
            return function () {
              return Df(this, a, b.apply(this, arguments))
            }
          }
          function Ef() {
            var a, b, c, f, g, d, q
            return ba().wrap(
              function (m) {
                for (;;)
                  switch ((m.prev = m.next)) {
                    case 0:
                      ;(a = this._groups), (b = 0), (c = a.length)
                    case 1:
                      if (!(b < c)) {
                        m.next = 13
                        break
                      }
                      f = a[b]
                      g = 0
                      d = f.length
                    case 3:
                      if (!(g < d)) {
                        m.next = 10
                        break
                      }
                      if (!(q = f[g])) {
                        m.next = 7
                        break
                      }
                      m.next = 7
                      return q
                    case 7:
                      ++g
                      m.next = 3
                      break
                    case 10:
                      ++b
                      m.next = 1
                      break
                    case 13:
                    case 'end':
                      return m.stop()
                  }
              },
              Oj,
              this,
            )
          }
          function ea(a, b) {
            this._groups = a
            this._parents = b
          }
          function Ua() {
            return new ea([[document.documentElement]], id)
          }
          function Ff(a) {
            return 'string' === typeof a
              ? new ea([[document.querySelector(a)]], [document.documentElement])
              : new ea([[a]], id)
          }
          function Gf() {
            return new jd()
          }
          function jd() {
            this._ = '@' + (++Pj).toString(36)
          }
          function Hf(a) {
            for (var b; (b = a.sourceEvent); ) a = b
            return a
          }
          function If(a, b) {
            a = Hf(a)
            b === n && (b = a.currentTarget)
            if (b) {
              var c = b.ownerSVGElement || b
              if (c.createSVGPoint)
                return (
                  (c = c.createSVGPoint()),
                  (c.x = a.clientX),
                  (c.y = a.clientY),
                  (c = c.matrixTransform(b.getScreenCTM().inverse())),
                  [c.x, c.y]
                )
              if (b.getBoundingClientRect)
                return (
                  (c = b.getBoundingClientRect()),
                  [a.clientX - c.left - b.clientLeft, a.clientY - c.top - b.clientTop]
                )
            }
            return [a.pageX, a.pageY]
          }
          function M(a) {
            return function () {
              return a
            }
          }
          function Jf(a) {
            return 1 <= a ? dc : -1 >= a ? -dc : Math.asin(a)
          }
          function Kf(a) {
            this._ += a[0]
            for (var b = 1, c = a.length; b < c; ++b) this._ += arguments[b] + a[b]
          }
          function Qj(a) {
            var b = Math.floor(a)
            if (!(0 <= b)) throw Error('invalid digits: '.concat(a))
            if (15 < b) return Kf
            var c = Math.pow(10, b)
            return function (a) {
              this._ += a[0]
              for (var b = 1, f = a.length; b < f; ++b)
                this._ += Math.round(arguments[b] * c) / c + a[b]
            }
          }
          function xb(a) {
            var b = 3
            a.digits = function (c) {
              if (!arguments.length) return b
              if (null == c) b = null
              else {
                var f = Math.floor(c)
                if (!(0 <= f)) throw new RangeError('invalid digits: '.concat(c))
                b = f
              }
              return a
            }
            return function () {
              return new Rj(b)
            }
          }
          function Sj(a) {
            return a.innerRadius
          }
          function Tj(a) {
            return a.outerRadius
          }
          function Uj(a) {
            return a.startAngle
          }
          function Vj(a) {
            return a.endAngle
          }
          function Wj(a) {
            return a && a.padAngle
          }
          function ec(a, b, c, f, g, d, q) {
            var m = a - c,
              k = b - f
            q = (q ? d : -d) / U(m * m + k * k)
            k *= q
            m *= -q
            var p = a + k,
              w = b + m,
              u = c + k,
              e = f + m
            c = (p + u) / 2
            f = (w + e) / 2
            b = u - p
            a = e - w
            q = b * b + a * a
            d = g - d
            e = p * e - u * w
            var h = (0 > a ? -1 : 1) * U(Xj(0, d * d * q - e * e))
            p = (e * a - b * h) / q
            w = (-e * b - a * h) / q
            u = (e * a + b * h) / q
            b = (-e * b + a * h) / q
            a = p - c
            q = w - f
            c = u - c
            f = b - f
            a * a + q * q > c * c + f * f && ((p = u), (w = b))
            return { cx: p, cy: w, x01: -k, y01: -m, x11: p * (g / d - 1), y11: w * (g / d - 1) }
          }
          function fc(a) {
            return 'object' === V(a) && 'length' in a ? a : Array.from(a)
          }
          function Lf(a) {
            this._context = a
          }
          function gc(a) {
            return new Lf(a)
          }
          function kd(a) {
            return a[0]
          }
          function ld(a) {
            return a[1]
          }
          function md(a, b) {
            function c(c) {
              var k,
                m = (c = fc(c)).length,
                u,
                h = !1,
                z
              null == g && (q = d((z = e())))
              for (k = 0; k <= m; ++k)
                !(k < m && f((u = c[k]), k, c)) === h && ((h = !h) ? q.lineStart() : q.lineEnd()),
                  h && q.point(+a(u, k, c), +b(u, k, c))
              if (z) return (q = null), z + '' || null
            }
            var f = M(!0),
              g = null,
              d = gc,
              q = null,
              e = xb(c)
            a = 'function' === typeof a ? a : a === n ? kd : M(a)
            b = 'function' === typeof b ? b : b === n ? ld : M(b)
            c.x = function (b) {
              return arguments.length ? ((a = 'function' === typeof b ? b : M(+b)), c) : a
            }
            c.y = function (a) {
              return arguments.length ? ((b = 'function' === typeof a ? a : M(+a)), c) : b
            }
            c.defined = function (a) {
              return arguments.length ? ((f = 'function' === typeof a ? a : M(!!a)), c) : f
            }
            c.curve = function (a) {
              return arguments.length ? ((d = a), null != g && (q = d(g)), c) : d
            }
            c.context = function (a) {
              return arguments.length ? (null == a ? (g = q = null) : (q = d((g = a))), c) : g
            }
            return c
          }
          function Mf(a, b, c) {
            function f(f) {
              var g,
                m,
                u = (f = fc(f)).length,
                h,
                z = !1,
                l,
                n = Array(u),
                t = Array(u)
              null == e && (p = k((l = w())))
              for (g = 0; g <= u; ++g) {
                if (!(g < u && q((h = f[g]), g, f)) === z)
                  if ((z = !z)) {
                    var r = g
                    p.areaStart()
                    p.lineStart()
                  } else {
                    p.lineEnd()
                    p.lineStart()
                    for (m = g - 1; m >= r; --m) p.point(n[m], t[m])
                    p.lineEnd()
                    p.areaEnd()
                  }
                z &&
                  ((n[g] = +a(h, g, f)),
                  (t[g] = +b(h, g, f)),
                  p.point(d ? +d(h, g, f) : n[g], c ? +c(h, g, f) : t[g]))
              }
              if (l) return (p = null), l + '' || null
            }
            function g() {
              return md().defined(q).curve(k).context(e)
            }
            var d = null,
              q = M(!0),
              e = null,
              k = gc,
              p = null,
              w = xb(f)
            a = 'function' === typeof a ? a : a === n ? kd : M(+a)
            b = 'function' === typeof b ? b : b === n ? M(0) : M(+b)
            c = 'function' === typeof c ? c : c === n ? ld : M(+c)
            f.x = function (b) {
              return arguments.length
                ? ((a = 'function' === typeof b ? b : M(+b)), (d = null), f)
                : a
            }
            f.x0 = function (b) {
              return arguments.length ? ((a = 'function' === typeof b ? b : M(+b)), f) : a
            }
            f.x1 = function (a) {
              return arguments.length
                ? ((d = null == a ? null : 'function' === typeof a ? a : M(+a)), f)
                : d
            }
            f.y = function (a) {
              return arguments.length
                ? ((b = 'function' === typeof a ? a : M(+a)), (c = null), f)
                : b
            }
            f.y0 = function (a) {
              return arguments.length ? ((b = 'function' === typeof a ? a : M(+a)), f) : b
            }
            f.y1 = function (a) {
              return arguments.length
                ? ((c = null == a ? null : 'function' === typeof a ? a : M(+a)), f)
                : c
            }
            f.lineX0 = f.lineY0 = function () {
              return g().x(a).y(b)
            }
            f.lineY1 = function () {
              return g().x(a).y(c)
            }
            f.lineX1 = function () {
              return g().x(d).y(b)
            }
            f.defined = function (a) {
              return arguments.length ? ((q = 'function' === typeof a ? a : M(!!a)), f) : q
            }
            f.curve = function (a) {
              return arguments.length ? ((k = a), null != e && (p = k(e)), f) : k
            }
            f.context = function (a) {
              return arguments.length ? (null == a ? (e = p = null) : (p = k((e = a))), f) : e
            }
            return f
          }
          function Yj(a, b) {
            return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
          }
          function Zj(a) {
            return a
          }
          function Nf(a) {
            this._curve = a
          }
          function nd(a) {
            function b(b) {
              return new Nf(a(b))
            }
            b._curve = a
            return b
          }
          function yb(a) {
            var b = a.curve
            a.angle = a.x
            delete a.x
            a.radius = a.y
            delete a.y
            a.curve = function (a) {
              return arguments.length ? b(nd(a)) : b()._curve
            }
            return a
          }
          function Of() {
            return yb(md().curve(Pf))
          }
          function Qf() {
            var a = Mf().curve(Pf),
              b = a.curve,
              c = a.lineX0,
              f = a.lineX1,
              g = a.lineY0,
              d = a.lineY1
            a.angle = a.x
            delete a.x
            a.startAngle = a.x0
            delete a.x0
            a.endAngle = a.x1
            delete a.x1
            a.radius = a.y
            delete a.y
            a.innerRadius = a.y0
            delete a.y0
            a.outerRadius = a.y1
            delete a.y1
            a.lineStartAngle = function () {
              return yb(c())
            }
            delete a.lineX0
            a.lineEndAngle = function () {
              return yb(f())
            }
            delete a.lineX1
            a.lineInnerRadius = function () {
              return yb(g())
            }
            delete a.lineY0
            a.lineOuterRadius = function () {
              return yb(d())
            }
            delete a.lineY1
            a.curve = function (a) {
              return arguments.length ? b(nd(a)) : b()._curve
            }
            return a
          }
          function zb(a, b) {
            return [(b = +b) * Math.cos((a -= Math.PI / 2)), b * Math.sin(a)]
          }
          function Rf(a) {
            return new Sf(a, !0)
          }
          function Tf(a) {
            return new Sf(a, !1)
          }
          function ak(a) {
            return new bk(a)
          }
          function ck(a) {
            return a.source
          }
          function dk(a) {
            return a.target
          }
          function hc(a) {
            function b() {
              var b,
                m = ek.call(arguments),
                u = c.apply(this, m),
                h = f.apply(this, m)
              null == q && (e = a((b = k())))
              e.lineStart()
              m[0] = u
              e.point(+g.apply(this, m), +d.apply(this, m))
              m[0] = h
              e.point(+g.apply(this, m), +d.apply(this, m))
              e.lineEnd()
              if (b) return (e = null), b + '' || null
            }
            var c = ck,
              f = dk,
              g = kd,
              d = ld,
              q = null,
              e = null,
              k = xb(b)
            b.source = function (a) {
              return arguments.length ? ((c = a), b) : c
            }
            b.target = function (a) {
              return arguments.length ? ((f = a), b) : f
            }
            b.x = function (a) {
              return arguments.length ? ((g = 'function' === typeof a ? a : M(+a)), b) : g
            }
            b.y = function (a) {
              return arguments.length ? ((d = 'function' === typeof a ? a : M(+a)), b) : d
            }
            b.context = function (c) {
              return arguments.length ? (null == c ? (q = e = null) : (e = a((q = c))), b) : q
            }
            return b
          }
          function Ea() {}
          function ic(a, b, c) {
            a._context.bezierCurveTo(
              (2 * a._x0 + a._x1) / 3,
              (2 * a._y0 + a._y1) / 3,
              (a._x0 + 2 * a._x1) / 3,
              (a._y0 + 2 * a._y1) / 3,
              (a._x0 + 4 * a._x1 + b) / 6,
              (a._y0 + 4 * a._y1 + c) / 6,
            )
          }
          function jc(a) {
            this._context = a
          }
          function Uf(a) {
            this._context = a
          }
          function Vf(a) {
            this._context = a
          }
          function Wf(a, b) {
            this._basis = new jc(a)
            this._beta = b
          }
          function kc(a, b, c) {
            a._context.bezierCurveTo(
              a._x1 + a._k * (a._x2 - a._x0),
              a._y1 + a._k * (a._y2 - a._y0),
              a._x2 + a._k * (a._x1 - b),
              a._y2 + a._k * (a._y1 - c),
              a._x2,
              a._y2,
            )
          }
          function od(a, b) {
            this._context = a
            this._k = (1 - b) / 6
          }
          function pd(a, b) {
            this._context = a
            this._k = (1 - b) / 6
          }
          function qd(a, b) {
            this._context = a
            this._k = (1 - b) / 6
          }
          function rd(a, b, c) {
            var f = a._x1,
              g = a._y1,
              d = a._x2,
              q = a._y2
            if (1e-12 < a._l01_a) {
              var e = 2 * a._l01_2a + 3 * a._l01_a * a._l12_a + a._l12_2a,
                k = 3 * a._l01_a * (a._l01_a + a._l12_a)
              f = (f * e - a._x0 * a._l12_2a + a._x2 * a._l01_2a) / k
              g = (g * e - a._y0 * a._l12_2a + a._y2 * a._l01_2a) / k
            }
            1e-12 < a._l23_a &&
              ((e = 2 * a._l23_2a + 3 * a._l23_a * a._l12_a + a._l12_2a),
              (k = 3 * a._l23_a * (a._l23_a + a._l12_a)),
              (d = (d * e + a._x1 * a._l23_2a - b * a._l12_2a) / k),
              (q = (q * e + a._y1 * a._l23_2a - c * a._l12_2a) / k))
            a._context.bezierCurveTo(f, g, d, q, a._x2, a._y2)
          }
          function Xf(a, b) {
            this._context = a
            this._alpha = b
          }
          function Yf(a, b) {
            this._context = a
            this._alpha = b
          }
          function Zf(a, b) {
            this._context = a
            this._alpha = b
          }
          function $f(a) {
            this._context = a
          }
          function ag(a, b, c) {
            var f = a._x1 - a._x0
            b -= a._x1
            var g = (a._y1 - a._y0) / (f || (0 > b && -0))
            a = (c - a._y1) / (b || (0 > f && -0))
            return (
              ((0 > g ? -1 : 1) + (0 > a ? -1 : 1)) *
                Math.min(Math.abs(g), Math.abs(a), 0.5 * Math.abs((g * b + a * f) / (f + b))) || 0
            )
          }
          function bg(a, b) {
            var c = a._x1 - a._x0
            return c ? ((3 * (a._y1 - a._y0)) / c - b) / 2 : b
          }
          function sd(a, b, c) {
            var f = a._x0,
              g = a._x1,
              d = a._y1,
              q = (g - f) / 3
            a._context.bezierCurveTo(f + q, a._y0 + q * b, g - q, d - q * c, g, d)
          }
          function lc(a) {
            this._context = a
          }
          function cg(a) {
            this._context = new dg(a)
          }
          function dg(a) {
            this._context = a
          }
          function eg(a) {
            this._context = a
          }
          function fg(a) {
            var b,
              c = a.length - 1,
              f = Array(c),
              g = Array(c),
              d = Array(c)
            f[0] = 0
            g[0] = 2
            d[0] = a[0] + 2 * a[1]
            for (b = 1; b < c - 1; ++b) (f[b] = 1), (g[b] = 4), (d[b] = 4 * a[b] + 2 * a[b + 1])
            f[c - 1] = 2
            g[c - 1] = 7
            d[c - 1] = 8 * a[c - 1] + a[c]
            for (b = 1; b < c; ++b) {
              var q = f[b] / g[b - 1]
              g[b] -= q
              d[b] -= q * d[b - 1]
            }
            f[c - 1] = d[c - 1] / g[c - 1]
            for (b = c - 2; 0 <= b; --b) f[b] = (d[b] - f[b + 1]) / g[b]
            g[c - 1] = (a[c] + f[c - 1]) / 2
            for (b = 0; b < c - 1; ++b) g[b] = 2 * a[b + 1] - f[b + 1]
            return [f, g]
          }
          function mc(a, b) {
            this._context = a
            this._t = b
          }
          function db(a, b) {
            if (1 < (q = a.length))
              for (var c = 1, f, g, d = a[b[0]], q, e = d.length; c < q; ++c)
                for (g = d, d = a[b[c]], f = 0; f < e; ++f)
                  d[f][1] += d[f][0] = isNaN(g[f][1]) ? g[f][0] : g[f][1]
          }
          function eb(a) {
            a = a.length
            for (var b = Array(a); 0 <= --a; ) b[a] = a
            return b
          }
          function fk(a, b) {
            return a[b]
          }
          function gk(a) {
            var b = []
            b.key = a
            return b
          }
          function gg(a) {
            var b = a.map(hk)
            return eb(a).sort(function (a, f) {
              return b[a] - b[f]
            })
          }
          function hk(a) {
            for (var b = -1, c = 0, f = a.length, g, d = -Infinity; ++b < f; )
              (g = +a[b][1]) > d && ((d = g), (c = b))
            return c
          }
          function hg(a) {
            var b = a.map(ig)
            return eb(a).sort(function (a, f) {
              return b[a] - b[f]
            })
          }
          function ig(a) {
            for (var b = 0, c = -1, f = a.length, g; ++c < f; ) if ((g = +a[c][1])) b += g
            return b
          }
          function jg() {
            for (var a = 0, b = arguments.length, c = {}, f; a < b; ++a) {
              if (!(f = arguments[a] + '') || f in c || /[\s.]/.test(f))
                throw Error('illegal type: ' + f)
              c[f] = []
            }
            return new nc(c)
          }
          function nc(a) {
            this._ = a
          }
          function ik(a, b) {
            return a
              .trim()
              .split(/^|\s+/)
              .map(function (a) {
                var c = '',
                  g = a.indexOf('.')
                0 <= g && ((c = a.slice(g + 1)), (a = a.slice(0, g)))
                if (a && !b.hasOwnProperty(a)) throw Error('unknown type: ' + a)
                return { type: a, name: c }
              })
          }
          function kg(a, b, c) {
            for (var f = 0, g = a.length; f < g; ++f)
              if (a[f].name === b) {
                a[f] = jk
                a = a.slice(0, f).concat(a.slice(f + 1))
                break
              }
            null != c && a.push({ name: b, value: c })
            return a
          }
          function td() {
            return Va || (lg(kk), (Va = Ab.now() + oc))
          }
          function kk() {
            Va = 0
          }
          function pc() {
            this._call = this._time = this._next = null
          }
          function mg(a, b, c) {
            var f = new pc()
            f.restart(a, b, c)
            return f
          }
          function ng() {
            Va = (qc = Ab.now()) + oc
            fb = Bb = 0
            try {
              td()
              ++fb
              for (var a = rc, b; a; ) 0 <= (b = Va - a._time) && a._call.call(n, b), (a = a._next)
              --fb
            } finally {
              fb = 0
              a = rc
              for (var c = Infinity; a; )
                if (a._call) {
                  c > a._time && (c = a._time)
                  var f = a
                  a = a._next
                } else (b = a._next), (a._next = null), (a = f ? (f._next = b) : (rc = b))
              Cb = f
              ud(c)
              Va = 0
            }
          }
          function lk() {
            var a = Ab.now(),
              b = a - qc
            1e3 < b && ((oc -= b), (qc = a))
          }
          function ud(a) {
            fb ||
              (Bb && (Bb = clearTimeout(Bb)),
              24 < a - Va
                ? (Infinity > a && (Bb = setTimeout(ng, a - Ab.now() - oc)),
                  Db && (Db = clearInterval(Db)))
                : (Db || ((qc = Ab.now()), (Db = setInterval(lk, 1e3))), (fb = 1), lg(ng)))
          }
          function og(a, b, c) {
            var f = new pc()
            b = null == b ? 0 : +b
            f.restart(
              function (c) {
                f.stop()
                a(c + b)
              },
              b,
              c,
            )
            return f
          }
          function sc(a, b, c, f, g, d) {
            var m = a.__transition
            if (!m) a.__transition = {}
            else if (c in m) return
            mk(a, c, {
              name: b,
              index: f,
              group: g,
              on: nk,
              tween: ok,
              time: d.time,
              delay: d.delay,
              duration: d.duration,
              ease: d.ease,
              timer: null,
              state: 0,
            })
          }
          function vd(a, b) {
            a = qa(a, b)
            if (0 < a.state) throw Error('too late; already scheduled')
            return a
          }
          function ua(a, b) {
            a = qa(a, b)
            if (3 < a.state) throw Error('too late; already running')
            return a
          }
          function qa(a, b) {
            a = a.__transition
            if (!a || !(a = a[b])) throw Error('transition not found')
            return a
          }
          function mk(a, b, c) {
            function f(k) {
              var m, w
              if (1 !== c.state) return d()
              for (h in q) {
                var u = q[h]
                if (u.name === c.name) {
                  if (3 === u.state) return og(f)
                  4 === u.state
                    ? ((u.state = 6),
                      u.timer.stop(),
                      u.on.call('interrupt', a, a.__data__, u.index, u.group),
                      delete q[h])
                    : +h < b &&
                      ((u.state = 6),
                      u.timer.stop(),
                      u.on.call('cancel', a, a.__data__, u.index, u.group),
                      delete q[h])
                }
              }
              og(function () {
                3 === c.state && ((c.state = 4), c.timer.restart(g, c.delay, c.time), g(k))
              })
              c.state = 2
              c.on.call('start', a, a.__data__, c.index, c.group)
              if (2 === c.state) {
                c.state = 3
                e = Array((w = c.tween.length))
                var h = 0
                for (m = -1; h < w; ++h)
                  if ((u = c.tween[h].value.call(a, a.__data__, c.index, c.group))) e[++m] = u
                e.length = m + 1
              }
            }
            function g(b) {
              b =
                b < c.duration
                  ? c.ease.call(null, b / c.duration)
                  : (c.timer.restart(d), (c.state = 5), 1)
              for (var f = -1, g = e.length; ++f < g; ) e[f].call(a, b)
              5 === c.state && (c.on.call('end', a, a.__data__, c.index, c.group), d())
            }
            function d() {
              c.state = 6
              c.timer.stop()
              delete q[b]
              for (var f in q) return
              delete a.__transition
            }
            var q = a.__transition,
              e
            q[b] = c
            c.timer = mg(
              function (a) {
                c.state = 1
                c.timer.restart(f, c.delay, c.time)
                c.delay <= a && f(a - c.delay)
              },
              0,
              c.time,
            )
          }
          function pg(a, b) {
            var c = a.__transition,
              f,
              g = !0,
              d
            if (c) {
              b = null == b ? null : b + ''
              for (d in c)
                if ((f = c[d]).name !== b) g = !1
                else {
                  var q = 2 < f.state && 5 > f.state
                  f.state = 6
                  f.timer.stop()
                  f.on.call(q ? 'interrupt' : 'cancel', a, a.__data__, f.index, f.group)
                  delete c[d]
                }
              g && delete a.__transition
            }
          }
          function pk(a, b) {
            var c, f
            return function () {
              var g = ua(this, a),
                d = g.tween
              if (d !== c) {
                f = c = d
                d = 0
                for (var q = f.length; d < q; ++d)
                  if (f[d].name === b) {
                    f = f.slice()
                    f.splice(d, 1)
                    break
                  }
              }
              g.tween = f
            }
          }
          function qk(a, b, c) {
            var f, g
            if ('function' !== typeof c) throw Error()
            return function () {
              var d = ua(this, a),
                q = d.tween
              if (q !== f) {
                g = (f = q).slice()
                q = { name: b, value: c }
                for (var e = 0, k = g.length; e < k; ++e)
                  if (g[e].name === b) {
                    g[e] = q
                    break
                  }
                e === k && g.push(q)
              }
              d.tween = g
            }
          }
          function wd(a, b, c) {
            var f = a._id
            a.each(function () {
              var a = ua(this, f)
              ;(a.value || (a.value = {}))[b] = c.apply(this, arguments)
            })
            return function (a) {
              return qa(a, f).value[b]
            }
          }
          function qg(a, b) {
            var c
            return (
              'number' === typeof b ? pa : b instanceof Na ? Qb : (c = Na(b)) ? ((b = c), Qb) : xe
            )(a, b)
          }
          function rk(a) {
            return function () {
              this.removeAttribute(a)
            }
          }
          function sk(a) {
            return function () {
              this.removeAttributeNS(a.space, a.local)
            }
          }
          function tk(a, b, c) {
            var f,
              g = c + '',
              d
            return function () {
              var m = this.getAttribute(a)
              return m === g ? null : m === f ? d : (d = b((f = m), c))
            }
          }
          function uk(a, b, c) {
            var f,
              g = c + '',
              d
            return function () {
              var m = this.getAttributeNS(a.space, a.local)
              return m === g ? null : m === f ? d : (d = b((f = m), c))
            }
          }
          function vk(a, b, c) {
            var f, g, d
            return function () {
              var m = c(this)
              if (null == m) return void this.removeAttribute(a)
              var e = this.getAttribute(a)
              var k = m + ''
              return e === k ? null : e === f && k === g ? d : ((g = k), (d = b((f = e), m)))
            }
          }
          function wk(a, b, c) {
            var f, g, d
            return function () {
              var m = c(this)
              if (null == m) return void this.removeAttributeNS(a.space, a.local)
              var e = this.getAttributeNS(a.space, a.local)
              var k = m + ''
              return e === k ? null : e === f && k === g ? d : ((g = k), (d = b((f = e), m)))
            }
          }
          function xk(a, b) {
            return function (c) {
              this.setAttribute(a, b.call(this, c))
            }
          }
          function yk(a, b) {
            return function (c) {
              this.setAttributeNS(a.space, a.local, b.call(this, c))
            }
          }
          function zk(a, b) {
            function c() {
              var c = b.apply(this, arguments)
              c !== g && (f = (g = c) && yk(a, c))
              return f
            }
            var f, g
            c._value = b
            return c
          }
          function Ak(a, b) {
            function c() {
              var c = b.apply(this, arguments)
              c !== g && (f = (g = c) && xk(a, c))
              return f
            }
            var f, g
            c._value = b
            return c
          }
          function Bk(a, b) {
            return function () {
              vd(this, a).delay = +b.apply(this, arguments)
            }
          }
          function Ck(a, b) {
            return (
              (b = +b),
              function () {
                vd(this, a).delay = b
              }
            )
          }
          function Dk(a, b) {
            return function () {
              ua(this, a).duration = +b.apply(this, arguments)
            }
          }
          function Ek(a, b) {
            return (
              (b = +b),
              function () {
                ua(this, a).duration = b
              }
            )
          }
          function Fk(a, b) {
            if ('function' !== typeof b) throw Error()
            return function () {
              ua(this, a).ease = b
            }
          }
          function Gk(a, b) {
            return function () {
              var c = b.apply(this, arguments)
              if ('function' !== typeof c) throw Error()
              ua(this, a).ease = c
            }
          }
          function Hk(a) {
            return (a + '')
              .trim()
              .split(/^|\s+/)
              .every(function (a) {
                var b = a.indexOf('.')
                0 <= b && (a = a.slice(0, b))
                return !a || 'start' === a
              })
          }
          function Ik(a, b, c) {
            var f,
              g,
              d = Hk(b) ? vd : ua
            return function () {
              var m = d(this, a),
                e = m.on
              if (e !== f) (g = (f = e).copy()).on(b, c)
              m.on = g
            }
          }
          function Jk(a) {
            return function () {
              var b = this.parentNode,
                c
              for (c in this.__transition) if (+c !== a) return
              b && b.removeChild(this)
            }
          }
          function Kk(a, b) {
            var c, f, g
            return function () {
              var d = Ta(this, a),
                e = (this.style.removeProperty(a), Ta(this, a))
              return d === e ? null : d === c && e === f ? g : (g = b((c = d), (f = e)))
            }
          }
          function rg(a) {
            return function () {
              this.style.removeProperty(a)
            }
          }
          function Lk(a, b, c) {
            var f,
              g = c + '',
              d
            return function () {
              var m = Ta(this, a)
              return m === g ? null : m === f ? d : (d = b((f = m), c))
            }
          }
          function Mk(a, b, c) {
            var f, g, d
            return function () {
              var m = Ta(this, a),
                e = c(this),
                k = e + ''
              null == e && (k = e = (this.style.removeProperty(a), Ta(this, a)))
              return m === k ? null : m === f && k === g ? d : ((g = k), (d = b((f = m), e)))
            }
          }
          function Nk(a, b) {
            var c,
              f,
              g,
              d = 'style.' + b,
              e = 'end.' + d,
              h
            return function () {
              var k = ua(this, a),
                m = k.on,
                q = null == k.value[d] ? h || (h = rg(b)) : n
              if (m !== c || g !== q) (f = (c = m).copy()).on(e, (g = q))
              k.on = f
            }
          }
          function Ok(a, b, c) {
            return function (f) {
              this.style.setProperty(a, b.call(this, f), c)
            }
          }
          function Pk(a, b, c) {
            function f() {
              var f = b.apply(this, arguments)
              f !== d && (g = (d = f) && Ok(a, f, c))
              return g
            }
            var g, d
            f._value = b
            return f
          }
          function Qk(a) {
            return function () {
              this.textContent = a
            }
          }
          function Rk(a) {
            return function () {
              var b = a(this)
              this.textContent = null == b ? '' : b
            }
          }
          function Sk(a) {
            return function (b) {
              this.textContent = a.call(this, b)
            }
          }
          function Tk(a) {
            function b() {
              var b = a.apply(this, arguments)
              b !== f && (c = (f = b) && Sk(b))
              return c
            }
            var c, f
            b._value = a
            return b
          }
          function va(a, b, c, f) {
            this._groups = a
            this._parents = b
            this._name = c
            this._id = f
          }
          function sg(a) {
            return Ua().transition(a)
          }
          var Ug = ba().mark(D),
            Zg = ba().mark(ee),
            Oj = ba().mark(Ef),
            tg = A(e),
            ug = tg.right,
            Uk = tg.left,
            Vk = A(G).center,
            Ka = ug,
            Wk = ja(yc),
            Xk = ja(function (a) {
              var b = yc(a)
              return function (a, f, g, d, e) {
                g <<= 2
                d <<= 2
                e <<= 2
                b(a, f, g + 0, d + 0, e)
                b(a, f, g + 1, d + 1, e)
                b(a, f, g + 2, d + 2, e)
                b(a, f, g + 3, d + 3, e)
              }
            }),
            xd = (function () {
              function a() {
                fa(this, a)
                this._partials = new Float64Array(32)
                this._n = 0
              }
              return W(a, [
                {
                  key: 'add',
                  value: function (a) {
                    for (var b = this._partials, f = 0, g = 0; g < this._n && 32 > g; g++) {
                      var d = b[g],
                        e = a + d
                      ;(a = Math.abs(a) < Math.abs(d) ? a - (e - d) : d - (e - a)) && (b[f++] = a)
                      a = e
                    }
                    b[f] = a
                    this._n = f + 1
                    return this
                  },
                },
                {
                  key: 'valueOf',
                  value: function () {
                    var a = this._partials,
                      c = this._n,
                      f = 0
                    if (0 < c) {
                      for (f = a[--c]; 0 < c; ) {
                        var g = f
                        var d = a[--c]
                        f = g + d
                        if ((g = d - (f - g))) break
                      }
                      0 < c &&
                        ((0 > g && 0 > a[c - 1]) || (0 < g && 0 < a[c - 1])) &&
                        ((d = 2 * g), (g = f + d), d == g - f && (f = g))
                    }
                    return f
                  },
                },
              ])
            })(),
            lb = (function (a) {
              function b(a) {
                var c = 1 < arguments.length && arguments[1] !== n ? arguments[1] : Nd
                fa(this, b)
                var g = x(this, b)
                Object.defineProperties(g, { _intern: { value: new Map() }, _key: { value: c } })
                if (null != a) {
                  c = B(a)
                  var d
                  try {
                    for (c.s(); !(d = c.n()).done; ) {
                      var e = r(d.value, 2)
                      g.set(e[0], e[1])
                    }
                  } catch (z) {
                    c.e(z)
                  } finally {
                    c.f()
                  }
                }
                return g
              }
              O(b, a)
              return W(b, [
                {
                  key: 'get',
                  value: function (a) {
                    return N(b, 'get', this, 3)([Ac(this, a)])
                  },
                },
                {
                  key: 'has',
                  value: function (a) {
                    return N(b, 'has', this, 3)([Ac(this, a)])
                  },
                },
                {
                  key: 'set',
                  value: function (a, f) {
                    return N(b, 'set', this, 3)([Rd(this, a), f])
                  },
                },
                {
                  key: 'delete',
                  value: function (a) {
                    return N(b, 'delete', this, 3)([Sd(this, a)])
                  },
                },
              ])
            })(v(Map)),
            La = (function (a) {
              function b(a) {
                var c = 1 < arguments.length && arguments[1] !== n ? arguments[1] : Nd
                fa(this, b)
                var g = x(this, b)
                Object.defineProperties(g, { _intern: { value: new Map() }, _key: { value: c } })
                if (null != a) {
                  c = B(a)
                  var d
                  try {
                    for (c.s(); !(d = c.n()).done; ) g.add(d.value)
                  } catch (q) {
                    c.e(q)
                  } finally {
                    c.f()
                  }
                }
                return g
              }
              O(b, a)
              return W(b, [
                {
                  key: 'has',
                  value: function (a) {
                    return N(b, 'has', this, 3)([Ac(this, a)])
                  },
                },
                {
                  key: 'add',
                  value: function (a) {
                    return N(b, 'add', this, 3)([Rd(this, a)])
                  },
                },
                {
                  key: 'delete',
                  value: function (a) {
                    return N(b, 'delete', this, 3)([Sd(this, a)])
                  },
                },
              ])
            })(v(Set)),
            Yg = Array.prototype.slice,
            Vg = Math.sqrt(50),
            Wg = Math.sqrt(10),
            Xg = Math.sqrt(2),
            Yk = he(Math.random),
            Fc = Symbol('implicit'),
            tc = 1 / 0.7,
            jh = /^#([0-9a-f]{3,8})$/,
            kh = new RegExp(
              '^rgb\\('
                .concat('\\s*([+-]?\\d+)\\s*', ',')
                .concat('\\s*([+-]?\\d+)\\s*', ',')
                .concat('\\s*([+-]?\\d+)\\s*', '\\)$'),
            ),
            lh = new RegExp(
              '^rgb\\('
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', '\\)$'),
            ),
            mh = new RegExp(
              '^rgba\\('
                .concat('\\s*([+-]?\\d+)\\s*', ',')
                .concat('\\s*([+-]?\\d+)\\s*', ',')
                .concat('\\s*([+-]?\\d+)\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*', '\\)$'),
            ),
            nh = new RegExp(
              '^rgba\\('
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*', '\\)$'),
            ),
            oh = new RegExp(
              '^hsl\\('
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', '\\)$'),
            ),
            ph = new RegExp(
              '^hsla\\('
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*', ',')
                .concat('\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*', '\\)$'),
            ),
            re = {
              aliceblue: 15792383,
              antiquewhite: 16444375,
              aqua: 65535,
              aquamarine: 8388564,
              azure: 15794175,
              beige: 16119260,
              bisque: 16770244,
              black: 0,
              blanchedalmond: 16772045,
              blue: 255,
              blueviolet: 9055202,
              brown: 10824234,
              burlywood: 14596231,
              cadetblue: 6266528,
              chartreuse: 8388352,
              chocolate: 13789470,
              coral: 16744272,
              cornflowerblue: 6591981,
              cornsilk: 16775388,
              crimson: 14423100,
              cyan: 65535,
              darkblue: 139,
              darkcyan: 35723,
              darkgoldenrod: 12092939,
              darkgray: 11119017,
              darkgreen: 25600,
              darkgrey: 11119017,
              darkkhaki: 12433259,
              darkmagenta: 9109643,
              darkolivegreen: 5597999,
              darkorange: 16747520,
              darkorchid: 10040012,
              darkred: 9109504,
              darksalmon: 15308410,
              darkseagreen: 9419919,
              darkslateblue: 4734347,
              darkslategray: 3100495,
              darkslategrey: 3100495,
              darkturquoise: 52945,
              darkviolet: 9699539,
              deeppink: 16716947,
              deepskyblue: 49151,
              dimgray: 6908265,
              dimgrey: 6908265,
              dodgerblue: 2003199,
              firebrick: 11674146,
              floralwhite: 16775920,
              forestgreen: 2263842,
              fuchsia: 16711935,
              gainsboro: 14474460,
              ghostwhite: 16316671,
              gold: 16766720,
              goldenrod: 14329120,
              gray: 8421504,
              green: 32768,
              greenyellow: 11403055,
              grey: 8421504,
              honeydew: 15794160,
              hotpink: 16738740,
              indianred: 13458524,
              indigo: 4915330,
              ivory: 16777200,
              khaki: 15787660,
              lavender: 15132410,
              lavenderblush: 16773365,
              lawngreen: 8190976,
              lemonchiffon: 16775885,
              lightblue: 11393254,
              lightcoral: 15761536,
              lightcyan: 14745599,
              lightgoldenrodyellow: 16448210,
              lightgray: 13882323,
              lightgreen: 9498256,
              lightgrey: 13882323,
              lightpink: 16758465,
              lightsalmon: 16752762,
              lightseagreen: 2142890,
              lightskyblue: 8900346,
              lightslategray: 7833753,
              lightslategrey: 7833753,
              lightsteelblue: 11584734,
              lightyellow: 16777184,
              lime: 65280,
              limegreen: 3329330,
              linen: 16445670,
              magenta: 16711935,
              maroon: 8388608,
              mediumaquamarine: 6737322,
              mediumblue: 205,
              mediumorchid: 12211667,
              mediumpurple: 9662683,
              mediumseagreen: 3978097,
              mediumslateblue: 8087790,
              mediumspringgreen: 64154,
              mediumturquoise: 4772300,
              mediumvioletred: 13047173,
              midnightblue: 1644912,
              mintcream: 16121850,
              mistyrose: 16770273,
              moccasin: 16770229,
              navajowhite: 16768685,
              navy: 128,
              oldlace: 16643558,
              olive: 8421376,
              olivedrab: 7048739,
              orange: 16753920,
              orangered: 16729344,
              orchid: 14315734,
              palegoldenrod: 15657130,
              palegreen: 10025880,
              paleturquoise: 11529966,
              palevioletred: 14381203,
              papayawhip: 16773077,
              peachpuff: 16767673,
              peru: 13468991,
              pink: 16761035,
              plum: 14524637,
              powderblue: 11591910,
              purple: 8388736,
              rebeccapurple: 6697881,
              red: 16711680,
              rosybrown: 12357519,
              royalblue: 4286945,
              saddlebrown: 9127187,
              salmon: 16416882,
              sandybrown: 16032864,
              seagreen: 3050327,
              seashell: 16774638,
              sienna: 10506797,
              silver: 12632256,
              skyblue: 8900331,
              slateblue: 6970061,
              slategray: 7372944,
              slategrey: 7372944,
              snow: 16775930,
              springgreen: 65407,
              steelblue: 4620980,
              tan: 13808780,
              teal: 32896,
              thistle: 14204888,
              tomato: 16737095,
              turquoise: 4251856,
              violet: 15631086,
              wheat: 16113331,
              white: 16777215,
              whitesmoke: 16119285,
              yellow: 16776960,
              yellowgreen: 10145074,
            }
          Hc(pb, Na, {
            copy: function (a) {
              return l(new this.constructor(), this, a)
            },
            displayable: function () {
              return this.rgb().displayable()
            },
            hex: ne,
            formatHex: ne,
            formatHex8: function () {
              return this.rgb().formatHex8()
            },
            formatHsl: function () {
              return ue(this).formatHsl()
            },
            formatRgb: oe,
            toString: oe,
          })
          Hc(
            ha,
            Ic,
            me(pb, {
              brighter: function (a) {
                a = null == a ? tc : Math.pow(tc, a)
                return new ha(this.r * a, this.g * a, this.b * a, this.opacity)
              },
              darker: function (a) {
                a = null == a ? 0.7 : Math.pow(0.7, a)
                return new ha(this.r * a, this.g * a, this.b * a, this.opacity)
              },
              rgb: function () {
                return this
              },
              clamp: function () {
                return new ha(Pa(this.r), Pa(this.g), Pa(this.b), Ob(this.opacity))
              },
              displayable: function () {
                return (
                  -0.5 <= this.r &&
                  255.5 > this.r &&
                  -0.5 <= this.g &&
                  255.5 > this.g &&
                  -0.5 <= this.b &&
                  255.5 > this.b &&
                  0 <= this.opacity &&
                  1 >= this.opacity
                )
              },
              hex: se,
              formatHex: se,
              formatHex8: function () {
                return '#'
                  .concat(Oa(this.r))
                  .concat(Oa(this.g))
                  .concat(Oa(this.b))
                  .concat(Oa(255 * (isNaN(this.opacity) ? 1 : this.opacity)))
              },
              formatRgb: te,
              toString: te,
            }),
          )
          Hc(
            oa,
            function (a, b, c, f) {
              return 1 === arguments.length ? ue(a) : new oa(a, b, c, null == f ? 1 : f)
            },
            me(pb, {
              brighter: function (a) {
                a = null == a ? tc : Math.pow(tc, a)
                return new oa(this.h, this.s, this.l * a, this.opacity)
              },
              darker: function (a) {
                a = null == a ? 0.7 : Math.pow(0.7, a)
                return new oa(this.h, this.s, this.l * a, this.opacity)
              },
              rgb: function () {
                var a = (this.h % 360) + 360 * (0 > this.h),
                  b = isNaN(a) || isNaN(this.s) ? 0 : this.s,
                  c = this.l
                b = c + (0.5 > c ? c : 1 - c) * b
                c = 2 * c - b
                return new ha(
                  Jc(240 <= a ? a - 240 : a + 120, c, b),
                  Jc(a, c, b),
                  Jc(120 > a ? a + 240 : a - 120, c, b),
                  this.opacity,
                )
              },
              clamp: function () {
                return new oa(ve(this.h), Pb(this.s), Pb(this.l), Ob(this.opacity))
              },
              displayable: function () {
                return (
                  ((0 <= this.s && 1 >= this.s) || isNaN(this.s)) &&
                  0 <= this.l &&
                  1 >= this.l &&
                  0 <= this.opacity &&
                  1 >= this.opacity
                )
              },
              formatHsl: function () {
                var a = Ob(this.opacity)
                return ''
                  .concat(1 === a ? 'hsl(' : 'hsla(')
                  .concat(ve(this.h), ', ')
                  .concat(100 * Pb(this.s), '%, ')
                  .concat(100 * Pb(this.l), '%')
                  .concat(1 === a ? ')' : ', '.concat(a, ')'))
              },
            }),
          )
          var Kc = function (a) {
              return function () {
                return a
              }
            },
            Qb = (function c(b) {
              function f(b, c) {
                var f = g((b = Ic(b)).r, (c = Ic(c)).r),
                  k = g(b.g, c.g),
                  d = g(b.b, c.b),
                  m = we(b.opacity, c.opacity)
                return function (c) {
                  b.r = f(c)
                  b.g = k(c)
                  b.b = d(c)
                  b.opacity = m(c)
                  return b + ''
                }
              }
              var g = sh(b)
              f.gamma = c
              return f
            })(1),
            Lc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Mc = new RegExp(Lc.source, 'g'),
            ze = 180 / Math.PI,
            yd = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
            uc,
            Zk = Ae(
              function (b) {
                b = new ('function' === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(b + '')
                return b.isIdentity ? yd : ye(b.a, b.b, b.c, b.d, b.e, b.f)
              },
              'px, ',
              'px)',
              'deg)',
            ),
            $k = Ae(
              function (b) {
                if (null == b) return yd
                uc || (uc = document.createElementNS('http://www.w3.org/2000/svg', 'g'))
                uc.setAttribute('transform', b)
                if (!(b = uc.transform.baseVal.consolidate())) return yd
                b = b.matrix
                return ye(b.a, b.b, b.c, b.d, b.e, b.f)
              },
              ', ',
              ')',
              ')',
            ),
            Be = [0, 1],
            Gh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
          rb.prototype = Pc.prototype
          Pc.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? '0' : '') +
              (this.width === n ? '' : Math.max(1, this.width | 0)) +
              (this.comma ? ',' : '') +
              (this.precision === n ? '' : '.' + Math.max(0, this.precision | 0)) +
              (this.trim ? '~' : '') +
              this.type
            )
          }
          var Fe,
            Ge = {
              '%': function (b, c) {
                return (100 * b).toFixed(c)
              },
              b: function (b) {
                return Math.round(b).toString(2)
              },
              c: function (b) {
                return b + ''
              },
              d: function (b) {
                return 1e21 <= Math.abs((b = Math.round(b)))
                  ? b.toLocaleString('en').replace(/,/g, '')
                  : b.toString(10)
              },
              e: function (b, c) {
                return b.toExponential(c)
              },
              f: function (b, c) {
                return b.toFixed(c)
              },
              g: function (b, c) {
                return b.toPrecision(c)
              },
              o: function (b) {
                return Math.round(b).toString(8)
              },
              p: function (b, c) {
                return Ce(100 * b, c)
              },
              r: Ce,
              s: function (b, c) {
                var f = Sb(b, c)
                if (!f) return b + ''
                var g = f[0]
                f = f[1]
                f = f - (Fe = 3 * Math.max(-8, Math.min(8, Math.floor(f / 3)))) + 1
                var d = g.length
                return f === d
                  ? g
                  : f > d
                    ? g + Array(f - d + 1).join('0')
                    : 0 < f
                      ? g.slice(0, f) + '.' + g.slice(f)
                      : '0.' + Array(1 - f).join('0') + Sb(b, Math.max(0, c + f - 1))[0]
              },
              X: function (b) {
                return Math.round(b).toString(16).toUpperCase()
              },
              x: function (b) {
                return Math.round(b).toString(16)
              },
            },
            He = Array.prototype.map,
            Ee = 'y z a f p n µ m  k M G T P E Z Y'.split(' '),
            vc,
            Qc,
            Je
          ;(function (b) {
            vc = Hh(b)
            Qc = vc.format
            Je = vc.formatPrefix
            return vc
          })({ thousands: ',', grouping: [3], currency: ['$', ''] })
          var Vc = new Date(),
            Wc = new Date(),
            Tb = Z(
              function () {},
              function (b, c) {
                b.setTime(+b + c)
              },
              function (b, c) {
                return c - b
              },
            )
          Tb.every = function (b) {
            b = Math.floor(b)
            return isFinite(b) && 0 < b
              ? 1 < b
                ? Z(
                    function (c) {
                      c.setTime(Math.floor(c / b) * b)
                    },
                    function (c, f) {
                      c.setTime(+c + f * b)
                    },
                    function (c, f) {
                      return (f - c) / b
                    },
                  )
                : Tb
              : null
          }
          Tb.range
          var Xc = 6048e5,
            af = 2592e6,
            Yc = 31536e6,
            Sa = Z(
              function (b) {
                b.setTime(b - b.getMilliseconds())
              },
              function (b, c) {
                b.setTime(+b + 1e3 * c)
              },
              function (b, c) {
                return (c - b) / 1e3
              },
              function (b) {
                return b.getUTCSeconds()
              },
            )
          Sa.range
          var zd = Z(
            function (b) {
              b.setTime(b - b.getMilliseconds() - 1e3 * b.getSeconds())
            },
            function (b, c) {
              b.setTime(+b + 6e4 * c)
            },
            function (b, c) {
              return (c - b) / 6e4
            },
            function (b) {
              return b.getMinutes()
            },
          )
          zd.range
          var Ad = Z(
            function (b) {
              b.setUTCSeconds(0, 0)
            },
            function (b, c) {
              b.setTime(+b + 6e4 * c)
            },
            function (b, c) {
              return (c - b) / 6e4
            },
            function (b) {
              return b.getUTCMinutes()
            },
          )
          Ad.range
          var Bd = Z(
            function (b) {
              b.setTime(b - b.getMilliseconds() - 1e3 * b.getSeconds() - 6e4 * b.getMinutes())
            },
            function (b, c) {
              b.setTime(+b + 36e5 * c)
            },
            function (b, c) {
              return (c - b) / 36e5
            },
            function (b) {
              return b.getHours()
            },
          )
          Bd.range
          var Cd = Z(
            function (b) {
              b.setUTCMinutes(0, 0, 0)
            },
            function (b, c) {
              b.setTime(+b + 36e5 * c)
            },
            function (b, c) {
              return (c - b) / 36e5
            },
            function (b) {
              return b.getUTCHours()
            },
          )
          Cd.range
          var tb = Z(
            function (b) {
              return b.setHours(0, 0, 0, 0)
            },
            function (b, c) {
              return b.setDate(b.getDate() + c)
            },
            function (b, c) {
              return (c - b - 6e4 * (c.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5
            },
            function (b) {
              return b.getDate() - 1
            },
          )
          tb.range
          var Vb = Z(
            function (b) {
              b.setUTCHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setUTCDate(b.getUTCDate() + c)
            },
            function (b, c) {
              return (c - b) / 864e5
            },
            function (b) {
              return b.getUTCDate() - 1
            },
          )
          Vb.range
          var vg = Z(
            function (b) {
              b.setUTCHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setUTCDate(b.getUTCDate() + c)
            },
            function (b, c) {
              return (c - b) / 864e5
            },
            function (b) {
              return Math.floor(b / 864e5)
            },
          )
          vg.range
          var Xb = Qa(0),
            Wb = Qa(1),
            al = Qa(2),
            bl = Qa(3),
            bb = Qa(4),
            cl = Qa(5),
            dl = Qa(6)
          Xb.range
          Wb.range
          al.range
          bl.range
          bb.range
          cl.range
          dl.range
          var Yb = Ra(0),
            Ub = Ra(1),
            el = Ra(2),
            fl = Ra(3),
            cb = Ra(4),
            gl = Ra(5),
            hl = Ra(6)
          Yb.range
          Ub.range
          el.range
          fl.range
          cb.range
          gl.range
          hl.range
          var Dd = Z(
            function (b) {
              b.setDate(1)
              b.setHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setMonth(b.getMonth() + c)
            },
            function (b, c) {
              return c.getMonth() - b.getMonth() + 12 * (c.getFullYear() - b.getFullYear())
            },
            function (b) {
              return b.getMonth()
            },
          )
          Dd.range
          var Ed = Z(
            function (b) {
              b.setUTCDate(1)
              b.setUTCHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setUTCMonth(b.getUTCMonth() + c)
            },
            function (b, c) {
              return (
                c.getUTCMonth() - b.getUTCMonth() + 12 * (c.getUTCFullYear() - b.getUTCFullYear())
              )
            },
            function (b) {
              return b.getUTCMonth()
            },
          )
          Ed.range
          var ya = Z(
            function (b) {
              b.setMonth(0, 1)
              b.setHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setFullYear(b.getFullYear() + c)
            },
            function (b, c) {
              return c.getFullYear() - b.getFullYear()
            },
            function (b) {
              return b.getFullYear()
            },
          )
          ya.every = function (b) {
            return isFinite((b = Math.floor(b))) && 0 < b
              ? Z(
                  function (c) {
                    c.setFullYear(Math.floor(c.getFullYear() / b) * b)
                    c.setMonth(0, 1)
                    c.setHours(0, 0, 0, 0)
                  },
                  function (c, f) {
                    c.setFullYear(c.getFullYear() + f * b)
                  },
                )
              : null
          }
          ya.range
          var za = Z(
            function (b) {
              b.setUTCMonth(0, 1)
              b.setUTCHours(0, 0, 0, 0)
            },
            function (b, c) {
              b.setUTCFullYear(b.getUTCFullYear() + c)
            },
            function (b, c) {
              return c.getUTCFullYear() - b.getUTCFullYear()
            },
            function (b) {
              return b.getUTCFullYear()
            },
          )
          za.every = function (b) {
            return isFinite((b = Math.floor(b))) && 0 < b
              ? Z(
                  function (c) {
                    c.setUTCFullYear(Math.floor(c.getUTCFullYear() / b) * b)
                    c.setUTCMonth(0, 1)
                    c.setUTCHours(0, 0, 0, 0)
                  },
                  function (c, f) {
                    c.setUTCFullYear(c.getUTCFullYear() + f * b)
                  },
                )
              : null
          }
          za.range
          var il = $e(za, Ed, Yb, vg, Cd, Ad),
            wg = r(il, 2),
            jl = wg[0],
            kl = wg[1],
            ll = $e(ya, Dd, Xb, tb, Bd, zd),
            xg = r(ll, 2),
            ml = xg[0],
            nl = xg[1],
            bf = { '-': '', _: ' ', 0: '0' },
            aa = /^\s*\d+/,
            Pi = /^%/,
            Oi = /[\\^$*+?|[\]().{}]/g,
            gb,
            yg,
            zg
          ;(function (b) {
            gb = Ph(b)
            yg = gb.format
            gb.parse
            zg = gb.utcFormat
            gb.utcParse
            return gb
          })({
            dateTime: '%x, %X',
            date: '%-m/%-d/%Y',
            time: '%-I:%M:%S %p',
            periods: ['AM', 'PM'],
            days: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
            shortDays: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
            months:
              'January February March April May June July August September October November December'.split(
                ' ',
              ),
            shortMonths: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          })
          var dd = {
              svg: 'http://www.w3.org/2000/svg',
              xhtml: 'http://www.w3.org/1999/xhtml',
              xlink: 'http://www.w3.org/1999/xlink',
              xml: 'http://www.w3.org/XML/1998/namespace',
              xmlns: 'http://www.w3.org/2000/xmlns/',
            },
            Yi = Array.prototype.find,
            bj = Array.prototype.filter
          cc.prototype = {
            constructor: cc,
            appendChild: function (b) {
              return this._parent.insertBefore(b, this._next)
            },
            insertBefore: function (b, c) {
              return this._parent.insertBefore(b, c)
            },
            querySelector: function (b) {
              return this._parent.querySelector(b)
            },
            querySelectorAll: function (b) {
              return this._parent.querySelectorAll(b)
            },
          }
          Af.prototype = {
            add: function (b) {
              0 > this._names.indexOf(b) &&
                (this._names.push(b), this._node.setAttribute('class', this._names.join(' ')))
            },
            remove: function (b) {
              b = this._names.indexOf(b)
              0 <= b &&
                (this._names.splice(b, 1), this._node.setAttribute('class', this._names.join(' ')))
            },
            contains: function (b) {
              return 0 <= this._names.indexOf(b)
            },
          }
          var id = [null]
          ea.prototype = Ua.prototype = h(
            {
              constructor: ea,
              select: function (b) {
                'function' !== typeof b && (b = bc(b))
                for (var c = this._groups, f = c.length, g = Array(f), d = 0; d < f; ++d)
                  for (var e = c[d], h = e.length, k = (g[d] = Array(h)), p, w, u = 0; u < h; ++u)
                    (p = e[u]) &&
                      (w = b.call(p, p.__data__, u, e)) &&
                      ('__data__' in p && (w.__data__ = p.__data__), (k[u] = w))
                return new ea(g, this._parents)
              },
              selectAll: function (b) {
                b = 'function' === typeof b ? Wi(b) : ed(b)
                for (var c = this._groups, f = c.length, g = [], d = [], e = 0; e < f; ++e)
                  for (var h = c[e], k = h.length, p, w = 0; w < k; ++w)
                    if ((p = h[w])) g.push(b.call(p, p.__data__, w, h)), d.push(p)
                return new ea(g, d)
              },
              selectChild: function (b) {
                return this.select(null == b ? Zi : Xi('function' === typeof b ? b : yf(b)))
              },
              selectChildren: function (b) {
                return this.selectAll(null == b ? $i : aj('function' === typeof b ? b : yf(b)))
              },
              filter: function (b) {
                'function' !== typeof b && (b = fd(b))
                for (var c = this._groups, f = c.length, g = Array(f), d = 0; d < f; ++d)
                  for (var e = c[d], h = e.length, k = (g[d] = []), p, w = 0; w < h; ++w)
                    (p = e[w]) && b.call(p, p.__data__, w, e) && k.push(p)
                return new ea(g, this._parents)
              },
              data: function (b, c) {
                if (!arguments.length) return Array.from(this, fj)
                var f = c ? ej : dj,
                  g = this._parents,
                  d = this._groups
                'function' !== typeof b && (b = cj(b))
                for (
                  var e = d.length, h = Array(e), k = Array(e), p = Array(e), w = 0;
                  w < e;
                  ++w
                ) {
                  var u = g[w],
                    I = d[w],
                    H = I.length,
                    l = b.call(u, u && u.__data__, w, g)
                  var n = 'object' === V(l) && 'length' in l ? l : Array.from(l)
                  l = n.length
                  var t = (k[w] = Array(l)),
                    r = (h[w] = Array(l))
                  H = p[w] = Array(H)
                  f(u, I, t, r, H, n, c)
                  for (I = u = 0; u < l; ++u)
                    if ((H = t[u])) {
                      for (u >= I && (I = u + 1); !(n = r[I]) && ++I < l; );
                      H._next = n || null
                    }
                }
                h = new ea(h, g)
                h._enter = k
                h._exit = p
                return h
              },
              enter: function () {
                return new ea(this._enter || this._groups.map(zf), this._parents)
              },
              exit: function () {
                return new ea(this._exit || this._groups.map(zf), this._parents)
              },
              join: function (b, c, f) {
                var g = this.enter(),
                  d = this,
                  e = this.exit()
                'function' === typeof b ? (g = b(g)) && (g = g.selection()) : (g = g.append(b + ''))
                null != c && (d = c(d)) && (d = d.selection())
                null == f ? e.remove() : f(e)
                return g && d ? g.merge(d).order() : d
              },
              merge: function (b) {
                var c = b.selection ? b.selection() : b
                b = this._groups
                c = c._groups
                for (var f = b.length, g = Math.min(f, c.length), d = Array(f), e = 0; e < g; ++e)
                  for (
                    var h = b[e], k = c[e], p = h.length, w = (d[e] = Array(p)), u, I = 0;
                    I < p;
                    ++I
                  )
                    if ((u = h[I] || k[I])) w[I] = u
                for (; e < f; ++e) d[e] = b[e]
                return new ea(d, this._parents)
              },
              selection: function () {
                return this
              },
              order: function () {
                for (var b = this._groups, c = -1, f = b.length; ++c < f; )
                  for (var g = b[c], d = g.length - 1, e = g[d], h; 0 <= --d; )
                    if ((h = g[d]))
                      e && h.compareDocumentPosition(e) ^ 4 && e.parentNode.insertBefore(h, e),
                        (e = h)
                return this
              },
              sort: function (b) {
                function c(c, f) {
                  return c && f ? b(c.__data__, f.__data__) : !c - !f
                }
                b || (b = gj)
                for (var f = this._groups, g = f.length, d = Array(g), e = 0; e < g; ++e) {
                  for (var h = f[e], k = h.length, p = (d[e] = Array(k)), w, u = 0; u < k; ++u)
                    if ((w = h[u])) p[u] = w
                  p.sort(c)
                }
                return new ea(d, this._parents).order()
              },
              call: function () {
                var b = arguments[0]
                arguments[0] = this
                b.apply(null, arguments)
                return this
              },
              nodes: function () {
                return Array.from(this)
              },
              node: function () {
                for (var b = this._groups, c = 0, f = b.length; c < f; ++c)
                  for (var g = b[c], d = 0, e = g.length; d < e; ++d) {
                    var h = g[d]
                    if (h) return h
                  }
                return null
              },
              size: function () {
                var b = 0,
                  c = B(this)
                try {
                  for (c.s(); !c.n().done; ) ++b
                } catch (f) {
                  c.e(f)
                } finally {
                  c.f()
                }
                return b
              },
              empty: function () {
                return !this.node()
              },
              each: function (b) {
                for (var c = this._groups, f = 0, g = c.length; f < g; ++f)
                  for (var d = c[f], e = 0, h = d.length, k; e < h; ++e)
                    (k = d[e]) && b.call(k, k.__data__, e, d)
                return this
              },
              attr: function (b, c) {
                var f = wb(b)
                if (2 > arguments.length) {
                  var g = this.node()
                  return f.local ? g.getAttributeNS(f.space, f.local) : g.getAttribute(f)
                }
                return this.each(
                  (null == c
                    ? f.local
                      ? ij
                      : hj
                    : 'function' === typeof c
                      ? f.local
                        ? mj
                        : lj
                      : f.local
                        ? kj
                        : jj)(f, c),
                )
              },
              style: function (b, c, f) {
                return 1 < arguments.length
                  ? this.each(
                      (null == c ? nj : 'function' === typeof c ? pj : oj)(
                        b,
                        c,
                        null == f ? '' : f,
                      ),
                    )
                  : Ta(this.node(), b)
              },
              property: function (b, c) {
                return 1 < arguments.length
                  ? this.each((null == c ? qj : 'function' === typeof c ? sj : rj)(b, c))
                  : this.node()[b]
              },
              classed: function (b, c) {
                var f = (b + '').trim().split(/^|\s+/)
                if (2 > arguments.length) {
                  for (var g = hd(this.node()), d = -1, e = f.length; ++d < e; )
                    if (!g.contains(f[d])) return !1
                  return !0
                }
                return this.each(('function' === typeof c ? vj : c ? tj : uj)(f, c))
              },
              text: function (b) {
                return arguments.length
                  ? this.each(null == b ? wj : ('function' === typeof b ? yj : xj)(b))
                  : this.node().textContent
              },
              html: function (b) {
                return arguments.length
                  ? this.each(null == b ? zj : ('function' === typeof b ? Bj : Aj)(b))
                  : this.node().innerHTML
              },
              raise: function () {
                return this.each(Cj)
              },
              lower: function () {
                return this.each(Dj)
              },
              append: function (b) {
                var c = 'function' === typeof b ? b : ac(b)
                return this.select(function () {
                  return this.appendChild(c.apply(this, arguments))
                })
              },
              insert: function (b, c) {
                var f = 'function' === typeof b ? b : ac(b),
                  g = null == c ? Ej : 'function' === typeof c ? c : bc(c)
                return this.select(function () {
                  return this.insertBefore(
                    f.apply(this, arguments),
                    g.apply(this, arguments) || null,
                  )
                })
              },
              remove: function () {
                return this.each(Fj)
              },
              clone: function (b) {
                return this.select(b ? Hj : Gj)
              },
              datum: function (b) {
                return arguments.length ? this.property('__data__', b) : this.node().__data__
              },
              on: function (b, c, f) {
                var g = Jj(b + ''),
                  d = g.length,
                  e
                if (2 > arguments.length) {
                  var h = this.node().__on
                  if (h)
                    for (var k = 0, p = h.length, w; k < p; ++k) {
                      var u = 0
                      for (w = h[k]; u < d; ++u)
                        if ((e = g[u]).type === w.type && e.name === w.name) return w.value
                    }
                } else {
                  h = c ? Lj : Kj
                  for (u = 0; u < d; ++u) this.each(h(g[u], c, f))
                  return this
                }
              },
              dispatch: function (b, c) {
                return this.each(('function' === typeof c ? Nj : Mj)(b, c))
              },
            },
            Symbol.iterator,
            Ef,
          )
          var Pj = 0
          jd.prototype = Gf.prototype = {
            constructor: jd,
            get: function (b) {
              for (var c = this._; !(c in b); ) if (!(b = b.parentNode)) return
              return b[c]
            },
            set: function (b, c) {
              return (b[this._] = c)
            },
            remove: function (b) {
              return this._ in b && delete b[this._]
            },
            toString: function () {
              return this._
            },
          }
          var Ag = Math.abs,
            ca = Math.atan2,
            Aa = Math.cos,
            Xj = Math.max,
            hb = Math.min,
            ia = Math.sin,
            U = Math.sqrt,
            Fa = Math.PI,
            dc = Fa / 2,
            Ga = 2 * Fa,
            Fd = Math.PI,
            Gd = 2 * Fd,
            ol = Gd - 1e-6,
            Rj = (function () {
              function b(c) {
                fa(this, b)
                this._x0 = this._y0 = this._x1 = this._y1 = null
                this._ = ''
                this._append = null == c ? Kf : Qj(c)
              }
              return W(b, [
                {
                  key: 'moveTo',
                  value: function (b, f) {
                    this._append(
                      y || (y = E(['M', ',', ''])),
                      (this._x0 = this._x1 = +b),
                      (this._y0 = this._y1 = +f),
                    )
                  },
                },
                {
                  key: 'closePath',
                  value: function () {
                    null !== this._x1 &&
                      ((this._x1 = this._x0),
                      (this._y1 = this._y0),
                      this._append(C || (C = E(['Z']))))
                  },
                },
                {
                  key: 'lineTo',
                  value: function (b, f) {
                    this._append(F || (F = E(['L', ',', ''])), (this._x1 = +b), (this._y1 = +f))
                  },
                },
                {
                  key: 'quadraticCurveTo',
                  value: function (b, f, g, d) {
                    this._append(
                      K || (K = E(['Q', ',', ',', ',', ''])),
                      +b,
                      +f,
                      (this._x1 = +g),
                      (this._y1 = +d),
                    )
                  },
                },
                {
                  key: 'bezierCurveTo',
                  value: function (b, f, g, d, e, h) {
                    this._append(
                      ka || (ka = E('C , , , , , '.split(' '))),
                      +b,
                      +f,
                      +g,
                      +d,
                      (this._x1 = +e),
                      (this._y1 = +h),
                    )
                  },
                },
                {
                  key: 'arcTo',
                  value: function (b, f, g, d, e) {
                    b = +b
                    f = +f
                    g = +g
                    d = +d
                    e = +e
                    if (0 > e) throw Error('negative radius: '.concat(e))
                    var c = this._x1,
                      k = this._y1,
                      p = g - b,
                      m = d - f,
                      u = c - b,
                      h = k - f,
                      q = u * u + h * h
                    if (null === this._x1)
                      this._append(da || (da = E(['M', ',', ''])), (this._x1 = b), (this._y1 = f))
                    else if (1e-6 < q)
                      if (1e-6 < Math.abs(h * p - m * u) && e) {
                        g -= c
                        d -= k
                        var l = p * p + m * m
                        k = Math.sqrt(l)
                        c = Math.sqrt(q)
                        q =
                          e *
                          Math.tan((Fd - Math.acos((l + q - (g * g + d * d)) / (2 * k * c))) / 2)
                        c = q / c
                        q /= k
                        1e-6 < Math.abs(c - 1) &&
                          this._append(kb || (kb = E(['L', ',', ''])), b + c * u, f + c * h)
                        this._append(
                          wa || (wa = E('A , ,0,0, , , '.split(' '))),
                          e,
                          e,
                          +(h * g > u * d),
                          (this._x1 = b + q * p),
                          (this._y1 = f + q * m),
                        )
                      } else
                        this._append(Hb || (Hb = E(['L', ',', ''])), (this._x1 = b), (this._y1 = f))
                  },
                },
                {
                  key: 'arc',
                  value: function (b, f, g, d, e, h) {
                    b = +b
                    f = +f
                    g = +g
                    h = !!h
                    if (0 > g) throw Error('negative radius: '.concat(g))
                    var c = g * Math.cos(d),
                      p = g * Math.sin(d),
                      m = b + c,
                      u = f + p,
                      q = 1 ^ h
                    d = h ? d - e : e - d
                    null === this._x1
                      ? this._append(Ib || (Ib = E(['M', ',', ''])), m, u)
                      : (1e-6 < Math.abs(this._x1 - m) || 1e-6 < Math.abs(this._y1 - u)) &&
                        this._append(Vd || (Vd = E(['L', ',', ''])), m, u)
                    g &&
                      (0 > d && (d = (d % Gd) + Gd),
                      d > ol
                        ? this._append(
                            Wd || (Wd = E('A , ,0,1, , , A , ,0,1, , , '.split(' '))),
                            g,
                            g,
                            q,
                            b - c,
                            f - p,
                            g,
                            g,
                            q,
                            (this._x1 = m),
                            (this._y1 = u),
                          )
                        : 1e-6 < d &&
                          this._append(
                            Xd || (Xd = E('A , ,0, , , , '.split(' '))),
                            g,
                            g,
                            +(d >= Fd),
                            q,
                            (this._x1 = b + g * Math.cos(e)),
                            (this._y1 = f + g * Math.sin(e)),
                          ))
                  },
                },
                {
                  key: 'rect',
                  value: function (b, f, g, d) {
                    this._append(
                      Yd || (Yd = E('M,hvhZ'.split(''))),
                      (this._x0 = this._x1 = +b),
                      (this._y0 = this._y1 = +f),
                      (g = +g),
                      +d,
                      -g,
                    )
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return this._
                  },
                },
              ])
            })(),
            ek = Array.prototype.slice
          Lf.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._point = 0
            },
            lineEnd: function () {
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (b, c) {
              b = +b
              c = +c
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._line ? this._context.lineTo(b, c) : this._context.moveTo(b, c)
                  break
                case 1:
                  this._point = 2
                default:
                  this._context.lineTo(b, c)
              }
            },
          }
          var Pf = nd(gc)
          Nf.prototype = {
            areaStart: function () {
              this._curve.areaStart()
            },
            areaEnd: function () {
              this._curve.areaEnd()
            },
            lineStart: function () {
              this._curve.lineStart()
            },
            lineEnd: function () {
              this._curve.lineEnd()
            },
            point: function (b, c) {
              this._curve.point(c * Math.sin(b), c * -Math.cos(b))
            },
          }
          var Sf = (function () {
              function b(c, f) {
                fa(this, b)
                this._context = c
                this._x = f
              }
              return W(b, [
                {
                  key: 'areaStart',
                  value: function () {
                    this._line = 0
                  },
                },
                {
                  key: 'areaEnd',
                  value: function () {
                    this._line = NaN
                  },
                },
                {
                  key: 'lineStart',
                  value: function () {
                    this._point = 0
                  },
                },
                {
                  key: 'lineEnd',
                  value: function () {
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                      this._context.closePath()
                    this._line = 1 - this._line
                  },
                },
                {
                  key: 'point',
                  value: function (b, f) {
                    b = +b
                    f = +f
                    switch (this._point) {
                      case 0:
                        this._point = 1
                        this._line ? this._context.lineTo(b, f) : this._context.moveTo(b, f)
                        break
                      case 1:
                        this._point = 2
                      default:
                        this._x
                          ? this._context.bezierCurveTo(
                              (this._x0 = (this._x0 + b) / 2),
                              this._y0,
                              this._x0,
                              f,
                              b,
                              f,
                            )
                          : this._context.bezierCurveTo(
                              this._x0,
                              (this._y0 = (this._y0 + f) / 2),
                              b,
                              this._y0,
                              b,
                              f,
                            )
                    }
                    this._x0 = b
                    this._y0 = f
                  },
                },
              ])
            })(),
            bk = (function () {
              function b(c) {
                fa(this, b)
                this._context = c
              }
              return W(b, [
                {
                  key: 'lineStart',
                  value: function () {
                    this._point = 0
                  },
                },
                { key: 'lineEnd', value: function () {} },
                {
                  key: 'point',
                  value: function (b, f) {
                    b = +b
                    f = +f
                    if (0 === this._point) this._point = 1
                    else {
                      var c,
                        d,
                        e = zb(this._x0, this._y0),
                        h = zb(this._x0, (this._y0 = (this._y0 + f) / 2)),
                        k = zb(b, this._y0),
                        p = zb(b, f)
                      ;(c = this._context).moveTo.apply(c, ra(e))
                      ;(d = this._context).bezierCurveTo.apply(d, ra(h).concat(ra(k), ra(p)))
                    }
                    this._x0 = b
                    this._y0 = f
                  },
                },
              ])
            })(),
            pl = U(3),
            Bg = {
              draw: function (b, c) {
                c = 0.59436 * U(c + hb(c / 28, 0.75))
                var f = c / 2,
                  g = f * pl
                b.moveTo(0, c)
                b.lineTo(0, -c)
                b.moveTo(-g, -f)
                b.lineTo(g, f)
                b.moveTo(-g, f)
                b.lineTo(g, -f)
              },
            },
            wc = {
              draw: function (b, c) {
                c = U(c / Fa)
                b.moveTo(c, 0)
                b.arc(0, 0, c, 0, Ga)
              },
            },
            Cg = {
              draw: function (b, c) {
                c = U(c / 5) / 2
                b.moveTo(-3 * c, -c)
                b.lineTo(-c, -c)
                b.lineTo(-c, -3 * c)
                b.lineTo(c, -3 * c)
                b.lineTo(c, -c)
                b.lineTo(3 * c, -c)
                b.lineTo(3 * c, c)
                b.lineTo(c, c)
                b.lineTo(c, 3 * c)
                b.lineTo(-c, 3 * c)
                b.lineTo(-c, c)
                b.lineTo(-3 * c, c)
                b.closePath()
              },
            },
            Dg = U(1 / 3),
            ql = 2 * Dg,
            Eg = {
              draw: function (b, c) {
                c = U(c / ql)
                var f = c * Dg
                b.moveTo(0, -c)
                b.lineTo(f, 0)
                b.lineTo(0, c)
                b.lineTo(-f, 0)
                b.closePath()
              },
            },
            Fg = {
              draw: function (b, c) {
                c = 0.62625 * U(c)
                b.moveTo(0, -c)
                b.lineTo(c, 0)
                b.lineTo(0, c)
                b.lineTo(-c, 0)
                b.closePath()
              },
            },
            Gg = {
              draw: function (b, c) {
                c = 0.87559 * U(c - hb(c / 7, 2))
                b.moveTo(-c, 0)
                b.lineTo(c, 0)
                b.moveTo(0, c)
                b.lineTo(0, -c)
              },
            },
            Hg = {
              draw: function (b, c) {
                c = U(c)
                var f = -c / 2
                b.rect(f, f, c, c)
              },
            },
            Ig = {
              draw: function (b, c) {
                c = 0.4431 * U(c)
                b.moveTo(c, c)
                b.lineTo(c, -c)
                b.lineTo(-c, -c)
                b.lineTo(-c, c)
                b.closePath()
              },
            },
            Jg = ia(Fa / 10) / ia((7 * Fa) / 10),
            rl = ia(Ga / 10) * Jg,
            sl = -Aa(Ga / 10) * Jg,
            Kg = {
              draw: function (b, c) {
                c = U(0.8908130915292852 * c)
                var f = rl * c,
                  g = sl * c
                b.moveTo(0, -c)
                b.lineTo(f, g)
                for (var d = 1; 5 > d; ++d) {
                  var e = (Ga * d) / 5,
                    h = Aa(e)
                  e = ia(e)
                  b.lineTo(e * c, -h * c)
                  b.lineTo(h * f - e * g, e * f + h * g)
                }
                b.closePath()
              },
            },
            Hd = U(3),
            Lg = {
              draw: function (b, c) {
                c = -U(c / (3 * Hd))
                b.moveTo(0, 2 * c)
                b.lineTo(-Hd * c, -c)
                b.lineTo(Hd * c, -c)
                b.closePath()
              },
            },
            tl = U(3),
            Mg = {
              draw: function (b, c) {
                c = 0.6824 * U(c)
                var f = c / 2,
                  g = (c * tl) / 2
                b.moveTo(0, -c)
                b.lineTo(g, f)
                b.lineTo(-g, f)
                b.closePath()
              },
            },
            na = U(3) / 2,
            Id = 1 / U(12),
            ul = 3 * (Id / 2 + 1),
            Ng = {
              draw: function (b, c) {
                var f = U(c / ul)
                c = f / 2
                var g = f * Id
                f = f * Id + f
                var d = -c
                b.moveTo(c, g)
                b.lineTo(c, f)
                b.lineTo(d, f)
                b.lineTo(-0.5 * c - na * g, na * c + -0.5 * g)
                b.lineTo(-0.5 * c - na * f, na * c + -0.5 * f)
                b.lineTo(-0.5 * d - na * f, na * d + -0.5 * f)
                b.lineTo(-0.5 * c + na * g, -0.5 * g - na * c)
                b.lineTo(-0.5 * c + na * f, -0.5 * f - na * c)
                b.lineTo(-0.5 * d + na * f, -0.5 * f - na * d)
                b.closePath()
              },
            },
            Jd = {
              draw: function (b, c) {
                c = 0.6189 * U(c - hb(c / 6, 1.7))
                b.moveTo(-c, -c)
                b.lineTo(c, c)
                b.moveTo(-c, c)
                b.lineTo(c, -c)
              },
            },
            Og = [wc, Cg, Eg, Hg, Kg, Lg, Ng],
            vl = [wc, Gg, Jd, Mg, Bg, Ig, Fg]
          jc.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._y0 = this._y1 = NaN
              this._point = 0
            },
            lineEnd: function () {
              switch (this._point) {
                case 3:
                  ic(this, this._x1, this._y1)
                case 2:
                  this._context.lineTo(this._x1, this._y1)
              }
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (b, c) {
              b = +b
              c = +c
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._line ? this._context.lineTo(b, c) : this._context.moveTo(b, c)
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  ;(this._point = 3),
                    this._context.lineTo(
                      (5 * this._x0 + this._x1) / 6,
                      (5 * this._y0 + this._y1) / 6,
                    )
                default:
                  ic(this, b, c)
              }
              this._x0 = this._x1
              this._x1 = b
              this._y0 = this._y1
              this._y1 = c
            },
          }
          Uf.prototype = {
            areaStart: Ea,
            areaEnd: Ea,
            lineStart: function () {
              this._x0 =
                this._x1 =
                this._x2 =
                this._x3 =
                this._x4 =
                this._y0 =
                this._y1 =
                this._y2 =
                this._y3 =
                this._y4 =
                  NaN
              this._point = 0
            },
            lineEnd: function () {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x2, this._y2)
                  this._context.closePath()
                  break
                case 2:
                  this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3)
                  this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3)
                  this._context.closePath()
                  break
                case 3:
                  this.point(this._x2, this._y2),
                    this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4)
              }
            },
            point: function (b, c) {
              b = +b
              c = +c
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._x2 = b
                  this._y2 = c
                  break
                case 1:
                  this._point = 2
                  this._x3 = b
                  this._y3 = c
                  break
                case 2:
                  this._point = 3
                  this._x4 = b
                  this._y4 = c
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + b) / 6,
                    (this._y0 + 4 * this._y1 + c) / 6,
                  )
                  break
                default:
                  ic(this, b, c)
              }
              this._x0 = this._x1
              this._x1 = b
              this._y0 = this._y1
              this._y1 = c
            },
          }
          Vf.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._y0 = this._y1 = NaN
              this._point = 0
            },
            lineEnd: function () {
              ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (b, c) {
              b = +b
              c = +c
              switch (this._point) {
                case 0:
                  this._point = 1
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  this._point = 3
                  var f = (this._x0 + 4 * this._x1 + b) / 6,
                    g = (this._y0 + 4 * this._y1 + c) / 6
                  this._line ? this._context.lineTo(f, g) : this._context.moveTo(f, g)
                  break
                case 3:
                  this._point = 4
                default:
                  ic(this, b, c)
              }
              this._x0 = this._x1
              this._x1 = b
              this._y0 = this._y1
              this._y1 = c
            },
          }
          Wf.prototype = {
            lineStart: function () {
              this._x = []
              this._y = []
              this._basis.lineStart()
            },
            lineEnd: function () {
              var b = this._x,
                c = this._y,
                f = b.length - 1
              if (0 < f)
                for (var g = b[0], d = c[0], e = b[f] - g, h = c[f] - d, k = -1, p; ++k <= f; )
                  (p = k / f),
                    this._basis.point(
                      this._beta * b[k] + (1 - this._beta) * (g + p * e),
                      this._beta * c[k] + (1 - this._beta) * (d + p * h),
                    )
              this._x = this._y = null
              this._basis.lineEnd()
            },
            point: function (b, c) {
              this._x.push(+b)
              this._y.push(+c)
            },
          }
          var wl = (function f(c) {
            function g(f) {
              return 1 === c ? new jc(f) : new Wf(f, c)
            }
            g.beta = function (c) {
              return f(+c)
            }
            return g
          })(0.85)
          od.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN
              this._point = 0
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x2, this._y2)
                  break
                case 3:
                  kc(this, this._x1, this._y1)
              }
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (c, f) {
              c = +c
              f = +f
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._line ? this._context.lineTo(c, f) : this._context.moveTo(c, f)
                  break
                case 1:
                  this._point = 2
                  this._x1 = c
                  this._y1 = f
                  break
                case 2:
                  this._point = 3
                default:
                  kc(this, c, f)
              }
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = c
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = f
            },
          }
          var xl = (function g(f) {
            function d(g) {
              return new od(g, f)
            }
            d.tension = function (f) {
              return g(+f)
            }
            return d
          })(0)
          pd.prototype = {
            areaStart: Ea,
            areaEnd: Ea,
            lineStart: function () {
              this._x0 =
                this._x1 =
                this._x2 =
                this._x3 =
                this._x4 =
                this._x5 =
                this._y0 =
                this._y1 =
                this._y2 =
                this._y3 =
                this._y4 =
                this._y5 =
                  NaN
              this._point = 0
            },
            lineEnd: function () {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x3, this._y3)
                  this._context.closePath()
                  break
                case 2:
                  this._context.lineTo(this._x3, this._y3)
                  this._context.closePath()
                  break
                case 3:
                  this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5)
              }
            },
            point: function (f, g) {
              f = +f
              g = +g
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._x3 = f
                  this._y3 = g
                  break
                case 1:
                  this._point = 2
                  this._context.moveTo((this._x4 = f), (this._y4 = g))
                  break
                case 2:
                  this._point = 3
                  this._x5 = f
                  this._y5 = g
                  break
                default:
                  kc(this, f, g)
              }
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = f
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = g
            },
          }
          var yl = (function m(g) {
            function d(d) {
              return new pd(d, g)
            }
            d.tension = function (g) {
              return m(+g)
            }
            return d
          })(0)
          qd.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN
              this._point = 0
            },
            lineEnd: function () {
              ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (g, d) {
              g = +g
              d = +d
              switch (this._point) {
                case 0:
                  this._point = 1
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  this._point = 3
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2)
                  break
                case 3:
                  this._point = 4
                default:
                  kc(this, g, d)
              }
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = g
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = d
            },
          }
          var zl = (function q(d) {
            function e(k) {
              return new qd(k, d)
            }
            e.tension = function (d) {
              return q(+d)
            }
            return e
          })(0)
          Xf.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN
              this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x2, this._y2)
                  break
                case 3:
                  this.point(this._x2, this._y2)
              }
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (d, e) {
              d = +d
              e = +e
              if (this._point) {
                var m = this._x2 - d,
                  k = this._y2 - e
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(m * m + k * k, this._alpha)))
              }
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._line ? this._context.lineTo(d, e) : this._context.moveTo(d, e)
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  this._point = 3
                default:
                  rd(this, d, e)
              }
              this._l01_a = this._l12_a
              this._l12_a = this._l23_a
              this._l01_2a = this._l12_2a
              this._l12_2a = this._l23_2a
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = d
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = e
            },
          }
          var Al = (function z(d) {
            function k(k) {
              return d ? new Xf(k, d) : new od(k, 0)
            }
            k.alpha = function (d) {
              return z(+d)
            }
            return k
          })(0.5)
          Yf.prototype = {
            areaStart: Ea,
            areaEnd: Ea,
            lineStart: function () {
              this._x0 =
                this._x1 =
                this._x2 =
                this._x3 =
                this._x4 =
                this._x5 =
                this._y0 =
                this._y1 =
                this._y2 =
                this._y3 =
                this._y4 =
                this._y5 =
                  NaN
              this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0
            },
            lineEnd: function () {
              switch (this._point) {
                case 1:
                  this._context.moveTo(this._x3, this._y3)
                  this._context.closePath()
                  break
                case 2:
                  this._context.lineTo(this._x3, this._y3)
                  this._context.closePath()
                  break
                case 3:
                  this.point(this._x3, this._y3),
                    this.point(this._x4, this._y4),
                    this.point(this._x5, this._y5)
              }
            },
            point: function (d, e) {
              d = +d
              e = +e
              if (this._point) {
                var k = this._x2 - d,
                  p = this._y2 - e
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(k * k + p * p, this._alpha)))
              }
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._x3 = d
                  this._y3 = e
                  break
                case 1:
                  this._point = 2
                  this._context.moveTo((this._x4 = d), (this._y4 = e))
                  break
                case 2:
                  this._point = 3
                  this._x5 = d
                  this._y5 = e
                  break
                default:
                  rd(this, d, e)
              }
              this._l01_a = this._l12_a
              this._l12_a = this._l23_a
              this._l01_2a = this._l12_2a
              this._l12_2a = this._l23_2a
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = d
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = e
            },
          }
          var Bl = (function k(d) {
            function e(k) {
              return d ? new Yf(k, d) : new pd(k, 0)
            }
            e.alpha = function (d) {
              return k(+d)
            }
            return e
          })(0.5)
          Zf.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN
              this._l01_a =
                this._l12_a =
                this._l23_a =
                this._l01_2a =
                this._l12_2a =
                this._l23_2a =
                this._point =
                  0
            },
            lineEnd: function () {
              ;(this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (d, k) {
              d = +d
              k = +k
              if (this._point) {
                var e = this._x2 - d,
                  w = this._y2 - k
                this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + w * w, this._alpha)))
              }
              switch (this._point) {
                case 0:
                  this._point = 1
                  break
                case 1:
                  this._point = 2
                  break
                case 2:
                  this._point = 3
                  this._line
                    ? this._context.lineTo(this._x2, this._y2)
                    : this._context.moveTo(this._x2, this._y2)
                  break
                case 3:
                  this._point = 4
                default:
                  rd(this, d, k)
              }
              this._l01_a = this._l12_a
              this._l12_a = this._l23_a
              this._l01_2a = this._l12_2a
              this._l12_2a = this._l23_2a
              this._x0 = this._x1
              this._x1 = this._x2
              this._x2 = d
              this._y0 = this._y1
              this._y1 = this._y2
              this._y2 = k
            },
          }
          var Cl = (function p(d) {
            function k(k) {
              return d ? new Zf(k, d) : new qd(k, 0)
            }
            k.alpha = function (d) {
              return p(+d)
            }
            return k
          })(0.5)
          $f.prototype = {
            areaStart: Ea,
            areaEnd: Ea,
            lineStart: function () {
              this._point = 0
            },
            lineEnd: function () {
              this._point && this._context.closePath()
            },
            point: function (d, e) {
              d = +d
              e = +e
              this._point
                ? this._context.lineTo(d, e)
                : ((this._point = 1), this._context.moveTo(d, e))
            },
          }
          lc.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN
              this._point = 0
            },
            lineEnd: function () {
              switch (this._point) {
                case 2:
                  this._context.lineTo(this._x1, this._y1)
                  break
                case 3:
                  sd(this, this._t0, bg(this, this._t0))
              }
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              this._line = 1 - this._line
            },
            point: function (d, e) {
              var k = NaN
              d = +d
              e = +e
              if (d !== this._x1 || e !== this._y1) {
                switch (this._point) {
                  case 0:
                    this._point = 1
                    this._line ? this._context.lineTo(d, e) : this._context.moveTo(d, e)
                    break
                  case 1:
                    this._point = 2
                    break
                  case 2:
                    this._point = 3
                    sd(this, bg(this, (k = ag(this, d, e))), k)
                    break
                  default:
                    sd(this, this._t0, (k = ag(this, d, e)))
                }
                this._x0 = this._x1
                this._x1 = d
                this._y0 = this._y1
                this._y1 = e
                this._t0 = k
              }
            },
          }
          ;(cg.prototype = Object.create(lc.prototype)).point = function (d, e) {
            lc.prototype.point.call(this, e, d)
          }
          dg.prototype = {
            moveTo: function (d, e) {
              this._context.moveTo(e, d)
            },
            closePath: function () {
              this._context.closePath()
            },
            lineTo: function (d, e) {
              this._context.lineTo(e, d)
            },
            bezierCurveTo: function (d, e, h, u, I, l) {
              this._context.bezierCurveTo(e, d, u, h, l, I)
            },
          }
          eg.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x = []
              this._y = []
            },
            lineEnd: function () {
              var d = this._x,
                e = this._y,
                h = d.length
              if (h)
                if (
                  (this._line ? this._context.lineTo(d[0], e[0]) : this._context.moveTo(d[0], e[0]),
                  2 === h)
                )
                  this._context.lineTo(d[1], e[1])
                else
                  for (var u = fg(d), I = fg(e), l = 0, n = 1; n < h; ++l, ++n)
                    this._context.bezierCurveTo(u[0][l], I[0][l], u[1][l], I[1][l], d[n], e[n])
              ;(this._line || (0 !== this._line && 1 === h)) && this._context.closePath()
              this._line = 1 - this._line
              this._x = this._y = null
            },
            point: function (d, e) {
              this._x.push(+d)
              this._y.push(+e)
            },
          }
          mc.prototype = {
            areaStart: function () {
              this._line = 0
            },
            areaEnd: function () {
              this._line = NaN
            },
            lineStart: function () {
              this._x = this._y = NaN
              this._point = 0
            },
            lineEnd: function () {
              0 < this._t &&
                1 > this._t &&
                2 === this._point &&
                this._context.lineTo(this._x, this._y)
              ;(this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath()
              0 <= this._line && ((this._t = 1 - this._t), (this._line = 1 - this._line))
            },
            point: function (d, e) {
              d = +d
              e = +e
              switch (this._point) {
                case 0:
                  this._point = 1
                  this._line ? this._context.lineTo(d, e) : this._context.moveTo(d, e)
                  break
                case 1:
                  this._point = 2
                default:
                  if (0 >= this._t) this._context.lineTo(this._x, e), this._context.lineTo(d, e)
                  else {
                    var k = this._x * (1 - this._t) + d * this._t
                    this._context.lineTo(k, this._y)
                    this._context.lineTo(k, e)
                  }
              }
              this._x = d
              this._y = e
            },
          }
          var jk = { value: function () {} }
          nc.prototype = jg.prototype = {
            constructor: nc,
            on: function (d, e) {
              var k = this._,
                p = ik(d + '', k),
                h,
                l = -1,
                n = p.length
              if (2 > arguments.length)
                for (; ++l < n; ) {
                  var t
                  if ((t = h = (d = p[l]).type)) {
                    a: {
                      t = k[h]
                      for (var r = 0, v = t.length; r < v; ++r)
                        if ((h = t[r]).name === d.name) {
                          h = h.value
                          break a
                        }
                      h = void 0
                    }
                    t = h
                  }
                  if (t) return h
                }
              else {
                if (null != e && 'function' !== typeof e) throw Error('invalid callback: ' + e)
                for (; ++l < n; )
                  if ((h = (d = p[l]).type)) k[h] = kg(k[h], d.name, e)
                  else if (null == e) for (h in k) k[h] = kg(k[h], d.name, null)
                return this
              }
            },
            copy: function () {
              var d = {},
                e = this._,
                h
              for (h in e) d[h] = e[h].slice()
              return new nc(d)
            },
            call: function (d, e) {
              if (0 < (h = arguments.length - 2))
                for (var k = Array(h), p = 0, h, l; p < h; ++p) k[p] = arguments[p + 2]
              if (!this._.hasOwnProperty(d)) throw Error('unknown type: ' + d)
              l = this._[d]
              p = 0
              for (h = l.length; p < h; ++p) l[p].value.apply(e, k)
            },
            apply: function (d, e, h) {
              if (!this._.hasOwnProperty(d)) throw Error('unknown type: ' + d)
              d = this._[d]
              for (var k = 0, p = d.length; k < p; ++k) d[k].value.apply(e, h)
            },
          }
          var fb = 0,
            Bb = 0,
            Db = 0,
            rc,
            Cb,
            qc = 0,
            Va = 0,
            oc = 0,
            Ab =
              'object' === ('undefined' === typeof performance ? 'undefined' : V(performance)) &&
              performance.now
                ? performance
                : Date,
            lg =
              'object' === ('undefined' === typeof R ? 'undefined' : V(R)) &&
              R.requestAnimationFrame
                ? R.requestAnimationFrame.bind(R)
                : function (d) {
                    setTimeout(d, 17)
                  }
          pc.prototype = mg.prototype = {
            constructor: pc,
            restart: function (d, e, h) {
              if ('function' !== typeof d) throw new TypeError('callback is not a function')
              h = (null == h ? td() : +h) + (null == e ? 0 : +e)
              this._next || Cb === this || (Cb ? (Cb._next = this) : (rc = this), (Cb = this))
              this._call = d
              this._time = h
              ud()
            },
            stop: function () {
              this._call && ((this._call = null), (this._time = Infinity), ud())
            },
          }
          var nk = jg('start', 'end', 'cancel', 'interrupt'),
            ok = [],
            Dl = Ua.prototype.constructor,
            Pg = 0,
            Ba = Ua.prototype
          va.prototype = sg.prototype = h(
            {
              constructor: va,
              select: function (d) {
                var k = this._name,
                  e = this._id
                'function' !== typeof d && (d = bc(d))
                for (var h = this._groups, l = h.length, H = Array(l), n = 0; n < l; ++n)
                  for (var t = h[n], r = t.length, v = (H[n] = Array(r)), C, y, F = 0; F < r; ++F)
                    (C = t[F]) &&
                      (y = d.call(C, C.__data__, F, t)) &&
                      ('__data__' in C && (y.__data__ = C.__data__),
                      (v[F] = y),
                      sc(v[F], k, e, F, v, qa(C, e)))
                return new va(H, this._parents, k, e)
              },
              selectAll: function (d) {
                var k = this._name,
                  e = this._id
                'function' !== typeof d && (d = ed(d))
                for (var h = this._groups, l = h.length, n = [], t = [], r = 0; r < l; ++r)
                  for (var v = h[r], C = v.length, y, F = 0; F < C; ++F)
                    if ((y = v[F])) {
                      for (
                        var x = d.call(y, y.__data__, F, v), A, B = qa(y, e), L = 0, E = x.length;
                        L < E;
                        ++L
                      )
                        (A = x[L]) && sc(A, k, e, L, x, B)
                      n.push(x)
                      t.push(y)
                    }
                return new va(n, t, k, e)
              },
              selectChild: Ba.selectChild,
              selectChildren: Ba.selectChildren,
              filter: function (d) {
                'function' !== typeof d && (d = fd(d))
                for (var k = this._groups, e = k.length, h = Array(e), l = 0; l < e; ++l)
                  for (var n = k[l], t = n.length, r = (h[l] = []), v, C = 0; C < t; ++C)
                    (v = n[C]) && d.call(v, v.__data__, C, n) && r.push(v)
                return new va(h, this._parents, this._name, this._id)
              },
              merge: function (d) {
                if (d._id !== this._id) throw Error()
                var k = this._groups
                d = d._groups
                for (var e = k.length, h = Math.min(e, d.length), l = Array(e), n = 0; n < h; ++n)
                  for (
                    var t = k[n], r = d[n], v = t.length, C = (l[n] = Array(v)), y, F = 0;
                    F < v;
                    ++F
                  )
                    if ((y = t[F] || r[F])) C[F] = y
                for (; n < e; ++n) l[n] = k[n]
                return new va(l, this._parents, this._name, this._id)
              },
              selection: function () {
                return new Dl(this._groups, this._parents)
              },
              transition: function () {
                for (
                  var d = this._name, e = this._id, h = ++Pg, u = this._groups, l = u.length, n = 0;
                  n < l;
                  ++n
                )
                  for (var t = u[n], r = t.length, v, C = 0; C < r; ++C)
                    if ((v = t[C])) {
                      var y = qa(v, e)
                      sc(v, d, h, C, t, {
                        time: y.time + y.delay + y.duration,
                        delay: 0,
                        duration: y.duration,
                        ease: y.ease,
                      })
                    }
                return new va(u, this._parents, d, h)
              },
              call: Ba.call,
              nodes: Ba.nodes,
              node: Ba.node,
              size: Ba.size,
              empty: Ba.empty,
              each: Ba.each,
              on: function (d, e) {
                var k = this._id
                return 2 > arguments.length ? qa(this.node(), k).on.on(d) : this.each(Ik(k, d, e))
              },
              attr: function (d, e) {
                var k = wb(d),
                  h = 'transform' === k ? $k : qg
                return this.attrTween(
                  d,
                  'function' === typeof e
                    ? (k.local ? wk : vk)(k, h, wd(this, 'attr.' + d, e))
                    : null == e
                      ? (k.local ? sk : rk)(k)
                      : (k.local ? uk : tk)(k, h, e),
                )
              },
              attrTween: function (d, e) {
                var k = 'attr.' + d
                if (2 > arguments.length) return (k = this.tween(k)) && k._value
                if (null == e) return this.tween(k, null)
                if ('function' !== typeof e) throw Error()
                var h = wb(d)
                return this.tween(k, (h.local ? zk : Ak)(h, e))
              },
              style: function (d, e, h) {
                var k = 'transform' === (d += '') ? Zk : qg
                return null == e
                  ? this.styleTween(d, Kk(d, k)).on('end.style.' + d, rg(d))
                  : 'function' === typeof e
                    ? this.styleTween(d, Mk(d, k, wd(this, 'style.' + d, e))).each(Nk(this._id, d))
                    : this.styleTween(d, Lk(d, k, e), h).on('end.style.' + d, null)
              },
              styleTween: function (d, e, h) {
                var k = 'style.' + (d += '')
                if (2 > arguments.length) return (k = this.tween(k)) && k._value
                if (null == e) return this.tween(k, null)
                if ('function' !== typeof e) throw Error()
                return this.tween(k, Pk(d, e, null == h ? '' : h))
              },
              text: function (d) {
                return this.tween(
                  'text',
                  'function' === typeof d ? Rk(wd(this, 'text', d)) : Qk(null == d ? '' : d + ''),
                )
              },
              textTween: function (d) {
                var k = 'text'
                if (1 > arguments.length) return (k = this.tween(k)) && k._value
                if (null == d) return this.tween(k, null)
                if ('function' !== typeof d) throw Error()
                return this.tween(k, Tk(d))
              },
              remove: function () {
                return this.on('end.remove', Jk(this._id))
              },
              tween: function (d, e) {
                var k = this._id
                d += ''
                if (2 > arguments.length) {
                  k = qa(this.node(), k).tween
                  for (var h = 0, p = k.length, l; h < p; ++h)
                    if ((l = k[h]).name === d) return l.value
                  return null
                }
                return this.each((null == e ? pk : qk)(k, d, e))
              },
              delay: function (d) {
                var k = this._id
                return arguments.length
                  ? this.each(('function' === typeof d ? Bk : Ck)(k, d))
                  : qa(this.node(), k).delay
              },
              duration: function (d) {
                var k = this._id
                return arguments.length
                  ? this.each(('function' === typeof d ? Dk : Ek)(k, d))
                  : qa(this.node(), k).duration
              },
              ease: function (d) {
                var k = this._id
                return arguments.length ? this.each(Fk(k, d)) : qa(this.node(), k).ease
              },
              easeVarying: function (d) {
                if ('function' !== typeof d) throw Error()
                return this.each(Gk(this._id, d))
              },
              end: function () {
                var d,
                  e,
                  h = this,
                  u = h._id,
                  l = h.size()
                return new Promise(function (k, p) {
                  var w = { value: p },
                    n = {
                      value: function () {
                        0 === --l && k()
                      },
                    }
                  h.each(function () {
                    var k = ua(this, u),
                      h = k.on
                    h !== d &&
                      ((e = (d = h).copy()),
                      e._.cancel.push(w),
                      e._.interrupt.push(w),
                      e._.end.push(n))
                    k.on = e
                  })
                  0 === l && k()
                })
              },
            },
            Symbol.iterator,
            Ba[Symbol.iterator],
          )
          var El = {
            time: null,
            delay: 0,
            duration: 250,
            ease: function (d) {
              return (1 >= (d *= 2) ? d * d * d : (d -= 2) * d * d + 2) / 2
            },
          }
          Ua.prototype.interrupt = function (d) {
            return this.each(function () {
              pg(this, d)
            })
          }
          Ua.prototype.transition = function (d) {
            var k
            if (d instanceof va) {
              var e = d._id
              d = d._name
            } else (e = ++Pg), ((k = El).time = td()), (d = null == d ? null : d + '')
            for (var h = this._groups, l = h.length, n = 0; n < l; ++n)
              for (var t = h[n], r = t.length, v, C = 0; C < r; ++C)
                if ((v = t[C])) {
                  var y = v,
                    F = d,
                    x = e,
                    A = C,
                    L = t,
                    B
                  if (!(B = k)) {
                    B = void 0
                    for (var E = e; !(B = v.__transition) || !(B = B[E]); )
                      if (!(v = v.parentNode)) throw Error('transition '.concat(E, ' not found'))
                  }
                  sc(y, F, x, A, L, B)
                }
            return new va(h, this._parents, d, e)
          }
          var Fl = [null]
          d.Adder = xd
          d.InternMap = lb
          d.InternSet = La
          d.active = function (d, e) {
            var k = d.__transition,
              h,
              p
            if (k)
              for (p in ((e = null == e ? null : e + ''), k))
                if (1 < (h = k[p]).state && h.name === e) return new va([[d]], Fl, e, +p)
            return null
          }
          d.arc = function () {
            function d() {
              var d,
                k = +e.apply(this, arguments),
                p = +h.apply(this, arguments),
                w = n.apply(this, arguments) - dc,
                I = t.apply(this, arguments) - dc,
                H = Ag(I - w),
                y = I > w
              v || (v = d = C())
              if (p < k) {
                var F = p
                p = k
                k = F
              }
              if (1e-12 < p)
                if (H > Ga - 1e-12)
                  v.moveTo(p * Aa(w), p * ia(w)),
                    v.arc(0, 0, p, w, I, !y),
                    1e-12 < k && (v.moveTo(k * Aa(I), k * ia(I)), v.arc(0, 0, k, I, w, y))
                else {
                  var J = w,
                    Q = I
                  F = w
                  var x = I,
                    A = H,
                    B = H,
                    L = r.apply(this, arguments) / 2,
                    E = 1e-12 < L && (l ? +l.apply(this, arguments) : U(k * k + p * p)),
                    X = hb(Ag(p - k) / 2, +u.apply(this, arguments)),
                    K = X,
                    G = X
                  if (1e-12 < E) {
                    var da = Jf((E / k) * ia(L))
                    L = Jf((E / p) * ia(L))
                    1e-12 < (A -= 2 * da)
                      ? ((da *= y ? 1 : -1), (F += da), (x -= da))
                      : ((A = 0), (F = x = (w + I) / 2))
                    1e-12 < (B -= 2 * L)
                      ? ((L *= y ? 1 : -1), (J += L), (Q -= L))
                      : ((B = 0), (J = Q = (w + I) / 2))
                  }
                  w = p * Aa(J)
                  I = p * ia(J)
                  da = k * Aa(x)
                  L = k * ia(x)
                  if (1e-12 < X) {
                    var N = p * Aa(Q),
                      ka = p * ia(Q),
                      M = k * Aa(F),
                      D = k * ia(F)
                    if (H < Fa) {
                      K = M - w
                      G = D - I
                      H = da - N
                      E = L - ka
                      var O = E * K - H * G
                      1e-12 > O * O
                        ? (K = void 0)
                        : ((O = (H * (I - ka) - E * (w - N)) / O), (K = [w + O * K, I + O * G]))
                      K
                        ? ((G = w - K[0]),
                          (H = I - K[1]),
                          (E = N - K[0]),
                          (O = ka - K[1]),
                          (G = (G * E + H * O) / (U(G * G + H * H) * U(E * E + O * O))),
                          (G = 1 / ia((1 < G ? 0 : -1 > G ? Fa : Math.acos(G)) / 2)),
                          (H = U(K[0] * K[0] + K[1] * K[1])),
                          (K = hb(X, (k - H) / (G - 1))),
                          (G = hb(X, (p - H) / (G + 1))))
                        : (K = G = 0)
                    }
                  }
                  1e-12 < B
                    ? 1e-12 < G
                      ? ((J = ec(M, D, w, I, p, G, y)),
                        (Q = ec(N, ka, da, L, p, G, y)),
                        v.moveTo(J.cx + J.x01, J.cy + J.y01),
                        G < X
                          ? v.arc(J.cx, J.cy, G, ca(J.y01, J.x01), ca(Q.y01, Q.x01), !y)
                          : (v.arc(J.cx, J.cy, G, ca(J.y01, J.x01), ca(J.y11, J.x11), !y),
                            v.arc(
                              0,
                              0,
                              p,
                              ca(J.cy + J.y11, J.cx + J.x11),
                              ca(Q.cy + Q.y11, Q.cx + Q.x11),
                              !y,
                            ),
                            v.arc(Q.cx, Q.cy, G, ca(Q.y11, Q.x11), ca(Q.y01, Q.x01), !y)))
                      : (v.moveTo(w, I), v.arc(0, 0, p, J, Q, !y))
                    : v.moveTo(w, I)
                  1e-12 < k && 1e-12 < A
                    ? 1e-12 < K
                      ? ((J = ec(da, L, N, ka, k, -K, y)),
                        (Q = ec(w, I, M, D, k, -K, y)),
                        v.lineTo(J.cx + J.x01, J.cy + J.y01),
                        K < X
                          ? v.arc(J.cx, J.cy, K, ca(J.y01, J.x01), ca(Q.y01, Q.x01), !y)
                          : (v.arc(J.cx, J.cy, K, ca(J.y01, J.x01), ca(J.y11, J.x11), !y),
                            v.arc(
                              0,
                              0,
                              k,
                              ca(J.cy + J.y11, J.cx + J.x11),
                              ca(Q.cy + Q.y11, Q.cx + Q.x11),
                              y,
                            ),
                            v.arc(Q.cx, Q.cy, K, ca(Q.y11, Q.x11), ca(Q.y01, Q.x01), !y)))
                      : v.arc(0, 0, k, x, F, y)
                    : v.lineTo(da, L)
                }
              else v.moveTo(0, 0)
              v.closePath()
              if (d) return (v = null), d + '' || null
            }
            var e = Sj,
              h = Tj,
              u = M(0),
              l = null,
              n = Uj,
              t = Vj,
              r = Wj,
              v = null,
              C = xb(d)
            d.centroid = function () {
              var d = (+e.apply(this, arguments) + +h.apply(this, arguments)) / 2,
                k = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2 - Fa / 2
              return [Aa(k) * d, ia(k) * d]
            }
            d.innerRadius = function (k) {
              return arguments.length ? ((e = 'function' === typeof k ? k : M(+k)), d) : e
            }
            d.outerRadius = function (k) {
              return arguments.length ? ((h = 'function' === typeof k ? k : M(+k)), d) : h
            }
            d.cornerRadius = function (k) {
              return arguments.length ? ((u = 'function' === typeof k ? k : M(+k)), d) : u
            }
            d.padRadius = function (k) {
              return arguments.length
                ? ((l = null == k ? null : 'function' === typeof k ? k : M(+k)), d)
                : l
            }
            d.startAngle = function (k) {
              return arguments.length ? ((n = 'function' === typeof k ? k : M(+k)), d) : n
            }
            d.endAngle = function (k) {
              return arguments.length ? ((t = 'function' === typeof k ? k : M(+k)), d) : t
            }
            d.padAngle = function (k) {
              return arguments.length ? ((r = 'function' === typeof k ? k : M(+k)), d) : r
            }
            d.context = function (k) {
              return arguments.length ? ((v = null == k ? null : k), d) : v
            }
            return d
          }
          d.area = Mf
          d.areaRadial = Qf
          d.ascending = e
          d.axisBottom = function (d) {
            return Mb(3, d)
          }
          d.axisLeft = function (d) {
            return Mb(4, d)
          }
          d.axisRight = function (d) {
            return Mb(2, d)
          }
          d.axisTop = function (d) {
            return Mb(1, d)
          }
          d.bin = ae
          d.bisect = Ka
          d.bisectCenter = Vk
          d.bisectLeft = Uk
          d.bisectRight = ug
          d.bisector = A
          d.blur = function (d, e) {
            if (!(0 <= (e = +e))) throw new RangeError('invalid r')
            var k = d.length
            if (!(0 <= (k = Math.floor(k)))) throw new RangeError('invalid length')
            if (!k || !e) return d
            e = yc(e)
            var h = d.slice()
            e(d, h, 0, k, 1)
            e(h, d, 0, k, 1)
            e(d, h, 0, k, 1)
            return d
          }
          d.blur2 = Wk
          d.blurImage = Xk
          d.count = sa
          d.create = function (d) {
            return Ff(ac(d).call(document.documentElement))
          }
          d.creator = ac
          d.cross = function () {
            for (var d = arguments.length, e = Array(d), h = 0; h < d; h++) e[h] = arguments[h]
            d = 'function' === typeof e[e.length - 1] && Tg(e.pop())
            e = e.map(Sg)
            h = e.map(xc)
            var u = e.length - 1,
              l = Array(u + 1).fill(0),
              n = []
            if (0 > u || h.some(Rg)) return n
            for (;;) {
              n.push(
                l.map(function (d, k) {
                  return e[k][d]
                }),
              )
              for (var t = u; ++l[t] === h[t]; ) {
                if (0 === t) return d ? n.map(d) : n
                l[t--] = 0
              }
            }
          }
          d.cumsum = function (d, e) {
            var k = 0,
              h = 0
            return Float64Array.from(
              d,
              e === n
                ? function (d) {
                    return (k += +d || 0)
                  }
                : function (p) {
                    return (k += +e(p, h++, d) || 0)
                  },
            )
          }
          d.curveBasis = function (d) {
            return new jc(d)
          }
          d.curveBasisClosed = function (d) {
            return new Uf(d)
          }
          d.curveBasisOpen = function (d) {
            return new Vf(d)
          }
          d.curveBumpX = Rf
          d.curveBumpY = Tf
          d.curveBundle = wl
          d.curveCardinal = xl
          d.curveCardinalClosed = yl
          d.curveCardinalOpen = zl
          d.curveCatmullRom = Al
          d.curveCatmullRomClosed = Bl
          d.curveCatmullRomOpen = Cl
          d.curveLinear = gc
          d.curveLinearClosed = function (d) {
            return new $f(d)
          }
          d.curveMonotoneX = function (d) {
            return new lc(d)
          }
          d.curveMonotoneY = function (d) {
            return new cg(d)
          }
          d.curveNatural = function (d) {
            return new eg(d)
          }
          d.curveStep = function (d) {
            return new mc(d, 0.5)
          }
          d.curveStepAfter = function (d) {
            return new mc(d, 1)
          }
          d.curveStepBefore = function (d) {
            return new mc(d, 0)
          }
          d.descending = t
          d.deviation = Ld
          d.difference = function (d) {
            d = new La(d)
            for (var k = arguments.length, e = Array(1 < k ? k - 1 : 0), h = 1; h < k; h++)
              e[h - 1] = arguments[h]
            for (k = 0; k < e.length; k++) {
              h = B(e[k])
              var l
              try {
                for (h.s(); !(l = h.n()).done; ) d['delete'](l.value)
              } catch (H) {
                h.e(H)
              } finally {
                h.f()
              }
            }
            return d
          }
          d.disjoint = function (d, e) {
            e = e[Symbol.iterator]()
            var k = new La()
            d = B(d)
            var h
            try {
              for (d.s(); !(h = d.n()).done; ) {
                var p = h.value
                if (k.has(p)) return !1
                for (var l = void 0, n = void 0; (t = e.next()), (l = t.value), (n = t.done), t; ) {
                  var t
                  if (n) break
                  if (Object.is(p, l)) return !1
                  k.add(l)
                }
              }
            } catch (X) {
              d.e(X)
            } finally {
              d.f()
            }
            return !0
          }
          d.every = function (d, e) {
            if ('function' !== typeof e) throw new TypeError('test is not a function')
            var k = -1,
              h = B(d),
              p
            try {
              for (h.s(); !(p = h.n()).done; ) if (!e(p.value, ++k, d)) return !1
            } catch (H) {
              h.e(H)
            } finally {
              h.f()
            }
            return !0
          }
          d.extent = Gb
          d.fcumsum = function (d, e) {
            var k = new xd(),
              h = -1
            return Float64Array.from(
              d,
              e === n
                ? function (d) {
                    return k.add(+d || 0)
                  }
                : function (p) {
                    return k.add(+e(p, ++h, d) || 0)
                  },
            )
          }
          d.filter = function (d, e) {
            if ('function' !== typeof e) throw new TypeError('test is not a function')
            var k = [],
              h = -1,
              p = B(d),
              l
            try {
              for (p.s(); !(l = p.n()).done; ) {
                var n = l.value
                e(n, ++h, d) && k.push(n)
              }
            } catch (J) {
              p.e(J)
            } finally {
              p.f()
            }
            return k
          }
          d.flatGroup = function (d) {
            for (var k = arguments.length, e = Array(1 < k ? k - 1 : 0), h = 1; h < k; h++)
              e[h - 1] = arguments[h]
            return Qd(Pd.apply(void 0, [d].concat(e)), e)
          }
          d.flatRollup = function (d, e) {
            for (var k = arguments.length, h = Array(2 < k ? k - 2 : 0), p = 2; p < k; p++)
              h[p - 2] = arguments[p]
            return Qd(Ud.apply(void 0, [d, e].concat(h)), h)
          }
          d.fsum = function (d, e) {
            var k = new xd()
            if (e === n) {
              d = B(d)
              var h
              try {
                for (d.s(); !(h = d.n()).done; ) {
                  var p = h.value
                  ;(p = +p) && k.add(p)
                }
              } catch (J) {
                d.e(J)
              } finally {
                d.f()
              }
            } else {
              h = -1
              p = B(d)
              var l
              try {
                for (p.s(); !(l = p.n()).done; ) {
                  var t = l.value
                  ;(t = +e(t, ++h, d)) && k.add(t)
                }
              } catch (J) {
                p.e(J)
              } finally {
                p.f()
              }
            }
            return +k
          }
          d.greatest = be
          d.greatestIndex = function (d) {
            var k = 1 < arguments.length && arguments[1] !== n ? arguments[1] : e
            if (1 === k.length) return Cc(d, k)
            var h = -1,
              u = -1,
              l = B(d),
              t
            try {
              for (l.s(); !(t = l.n()).done; ) {
                var v = t.value
                ++u
                if (0 > h ? 0 === k(v, v) : 0 < k(v, r)) {
                  var r = v
                  h = u
                }
              }
            } catch (X) {
              l.e(X)
            } finally {
              l.f()
            }
            return h
          }
          d.group = Od
          d.groupSort = function (d, h, l) {
            return (
              2 !== h.length
                ? ib(Td(d, h, l), function (d, k) {
                    var h = r(d, 2)
                    d = h[0]
                    h = h[1]
                    k = r(k, 2)
                    var p = k[0]
                    return e(h, k[1]) || e(d, p)
                  })
                : ib(Od(d, l), function (d, k) {
                    var p = r(d, 2)
                    d = p[0]
                    p = p[1]
                    k = r(k, 2)
                    var u = k[0]
                    return h(p, k[1]) || e(d, u)
                  })
            ).map(function (d) {
              return r(d, 1)[0]
            })
          }
          d.groups = Pd
          d.histogram = ae
          d.index = function (d) {
            for (var k = arguments.length, e = Array(1 < k ? k - 1 : 0), h = 1; h < k; h++)
              e[h - 1] = arguments[h]
            return Xa(d, Ya, Ha, e)
          }
          d.indexes = function (d) {
            for (var k = arguments.length, e = Array(1 < k ? k - 1 : 0), h = 1; h < k; h++)
              e[h - 1] = arguments[h]
            return Xa(d, Array.from, Ha, e)
          }
          d.interrupt = pg
          d.intersection = function (d) {
            for (var k = arguments.length, e = Array(1 < k ? k - 1 : 0), h = 1; h < k; h++)
              e[h - 1] = arguments[h]
            d = new La(d)
            e = e.map(bh)
            k = B(d)
            var l
            try {
              a: for (k.s(); !(l = k.n()).done; ) {
                var n = l.value,
                  t = B(e),
                  v
                try {
                  for (t.s(); !(v = t.n()).done; )
                    if (!v.value.has(n)) {
                      d['delete'](n)
                      continue a
                    }
                } catch (X) {
                  t.e(X)
                } finally {
                  t.f()
                }
              }
            } catch (X) {
              k.e(X)
            } finally {
              k.f()
            }
            return d
          }
          d.least = function (d) {
            var k = 1 < arguments.length && arguments[1] !== n ? arguments[1] : e,
              h = !1
            if (1 === k.length) {
              var l = B(d),
                t
              try {
                for (l.s(); !(t = l.n()).done; ) {
                  var v = t.value,
                    r = k(v)
                  if (h ? 0 > e(r, y) : 0 === e(r, r)) {
                    var J = v
                    var y = r
                    h = !0
                  }
                }
              } catch (Ja) {
                l.e(Ja)
              } finally {
                l.f()
              }
            } else {
              y = B(d)
              try {
                for (y.s(); !(l = y.n()).done; ) {
                  var C = l.value
                  if (h ? 0 > k(C, J) : 0 === k(C, C)) (J = C), (h = !0)
                }
              } catch (Ja) {
                y.e(Ja)
              } finally {
                y.f()
              }
            }
            return J
          }
          d.leastIndex = ge
          d.line = md
          d.lineRadial = Of
          d.link = hc
          d.linkHorizontal = function () {
            return hc(Rf)
          }
          d.linkRadial = function () {
            var d = hc(ak)
            d.angle = d.x
            delete d.x
            d.radius = d.y
            delete d.y
            return d
          }
          d.linkVertical = function () {
            return hc(Tf)
          }
          d.local = Gf
          d.map = function (d, e) {
            if ('function' !== typeof d[Symbol.iterator])
              throw new TypeError('values is not iterable')
            if ('function' !== typeof e) throw new TypeError('mapper is not a function')
            return Array.from(d, function (k, h) {
              return e(k, h, d)
            })
          }
          d.matcher = fd
          d.max = Bc
          d.maxIndex = Cc
          d.mean = function (d, e) {
            var k = 0,
              h = 0
            if (e === n) {
              d = B(d)
              var p
              try {
                for (d.s(); !(p = d.n()).done; ) {
                  var l = p.value
                  null != l && (l = +l) >= l && (++k, (h += l))
                }
              } catch (X) {
                d.e(X)
              } finally {
                d.f()
              }
            } else {
              p = -1
              l = B(d)
              var t
              try {
                for (l.s(); !(t = l.n()).done; ) {
                  var v = t.value
                  null != (v = e(v, ++p, d)) && (v = +v) >= v && (++k, (h += v))
                }
              } catch (X) {
                l.e(X)
              } finally {
                l.f()
              }
            }
            if (k) return h / k
          }
          d.median = function (d, e) {
            return nb(d, 0.5, e)
          }
          d.medianIndex = function (d, e) {
            return de(d, 0.5, e)
          }
          d.merge = function (d) {
            return Array.from(ee(d))
          }
          d.min = Kb
          d.minIndex = Dc
          d.mode = function (d, e) {
            var k = new lb()
            if (e === n) {
              d = B(d)
              var h
              try {
                for (d.s(); !(h = d.n()).done; ) {
                  var p = h.value
                  null != p && p >= p && k.set(p, (k.get(p) || 0) + 1)
                }
              } catch (ob) {
                d.e(ob)
              } finally {
                d.f()
              }
            } else {
              h = -1
              p = B(d)
              var l
              try {
                for (p.s(); !(l = p.n()).done; ) {
                  var t = l.value
                  null != (t = e(t, ++h, d)) && t >= t && k.set(t, (k.get(t) || 0) + 1)
                }
              } catch (ob) {
                p.e(ob)
              } finally {
                p.f()
              }
            }
            d = 0
            k = B(k)
            var v
            try {
              for (k.s(); !(v = k.n()).done; ) {
                var y = r(v.value, 2),
                  C = y[0],
                  F = y[1]
                if (F > d) {
                  d = F
                  var x = C
                }
              }
            } catch (ob) {
              k.e(ob)
            } finally {
              k.f()
            }
            return x
          }
          d.namespace = wb
          d.namespaces = dd
          d.nice = Zd
          d.pairs = function (d) {
            var e = 1 < arguments.length && arguments[1] !== n ? arguments[1] : $g,
              k = [],
              h = !1,
              l = B(d),
              t
            try {
              for (l.s(); !(t = l.n()).done; ) {
                var v = t.value
                h && k.push(e(r, v))
                var r = v
                h = !0
              }
            } catch (X) {
              l.e(X)
            } finally {
              l.f()
            }
            return k
          }
          d.permute = Kd
          d.pie = function () {
            function d(d) {
              var k,
                p = (d = fc(d)).length
              var u = 0
              var w = Array(p),
                r = Array(p),
                y = +n.apply(this, arguments)
              var C = Math.min(Ga, Math.max(-Ga, t.apply(this, arguments) - y))
              var H = Math.min(Math.abs(C) / p, v.apply(this, arguments)),
                I = H * (0 > C ? -1 : 1),
                F
              for (k = 0; k < p; ++k) 0 < (F = r[(w[k] = k)] = +e(d[k], k, d)) && (u += F)
              null != h
                ? w.sort(function (d, e) {
                    return h(r[d], r[e])
                  })
                : null != l &&
                  w.sort(function (e, k) {
                    return l(d[e], d[k])
                  })
              k = 0
              for (C = u ? (C - p * I) / u : 0; k < p; ++k, y = J) {
                u = w[k]
                F = r[u]
                var J = y + (0 < F ? F * C : 0) + I
                r[u] = { data: d[u], index: k, value: F, startAngle: y, endAngle: J, padAngle: H }
              }
              return r
            }
            var e = Zj,
              h = Yj,
              l = null,
              n = M(0),
              t = M(Ga),
              v = M(0)
            d.value = function (k) {
              return arguments.length ? ((e = 'function' === typeof k ? k : M(+k)), d) : e
            }
            d.sortValues = function (e) {
              return arguments.length ? ((h = e), (l = null), d) : h
            }
            d.sort = function (e) {
              return arguments.length ? ((l = e), (h = null), d) : l
            }
            d.startAngle = function (e) {
              return arguments.length ? ((n = 'function' === typeof e ? e : M(+e)), d) : n
            }
            d.endAngle = function (e) {
              return arguments.length ? ((t = 'function' === typeof e ? e : M(+e)), d) : t
            }
            d.padAngle = function (e) {
              return arguments.length ? ((v = 'function' === typeof e ? e : M(+e)), d) : v
            }
            return d
          }
          d.pointRadial = zb
          d.pointer = If
          d.pointers = function (d, e) {
            d.target && ((d = Hf(d)), e === n && (e = d.currentTarget), (d = d.touches || [d]))
            return Array.from(d, function (d) {
              return If(d, e)
            })
          }
          d.quantile = nb
          d.quantileIndex = de
          d.quantileSorted = ce
          d.quickselect = Lb
          d.radialArea = Qf
          d.radialLine = Of
          d.range = fe
          d.rank = function (d) {
            var k = 1 < arguments.length && arguments[1] !== n ? arguments[1] : e
            if ('function' !== typeof d[Symbol.iterator])
              throw new TypeError('values is not iterable')
            var h = Array.from(d),
              l = new Float64Array(h.length)
            2 !== k.length && ((h = h.map(k)), (k = e))
            var t = function (d, e) {
                return k(h[d], h[e])
              },
              v,
              r
            d = Uint32Array.from(h, function (d, e) {
              return e
            })
            d.sort(
              k === e
                ? function (d, e) {
                    return la(h[d], h[e])
                  }
                : ta(t),
            )
            d.forEach(function (d, e) {
              var k = t(d, v === n ? d : v)
              if (0 <= k) {
                if (v === n || 0 < k) (v = d), (r = e)
                l[d] = r
              } else l[d] = NaN
            })
            return l
          }
          d.reduce = function (d, e, h) {
            if ('function' !== typeof e) throw new TypeError('reducer is not a function')
            var k = d[Symbol.iterator](),
              p = -1
            if (3 > arguments.length) {
              var l = k.next()
              var n = l.done
              h = l.value
              if (n) return
              ++p
            }
            for (; (t = k.next()), (n = t.done), (l = t.value), !n; ) {
              var t
              h = e(h, l, ++p, d)
            }
            return h
          }
          d.reverse = function (d) {
            if ('function' !== typeof d[Symbol.iterator])
              throw new TypeError('values is not iterable')
            return Array.from(d).reverse()
          }
          d.rollup = Td
          d.rollups = Ud
          d.scaleBand = Gc
          d.scaleDiverging = uf
          d.scaleDivergingLog = vf
          d.scaleDivergingPow = cd
          d.scaleDivergingSqrt = function () {
            return cd.apply(null, arguments).exponent(0.5)
          }
          d.scaleDivergingSymlog = wf
          d.scaleIdentity = Le
          d.scaleImplicit = Fc
          d.scaleLinear = Ke
          d.scaleLog = Qe
          d.scaleOrdinal = Ec
          d.scalePoint = function () {
            return le(Gc.apply(null, arguments).paddingInner(1))
          }
          d.scalePow = Uc
          d.scaleQuantile = Xe
          d.scaleQuantize = Ye
          d.scaleRadial = We
          d.scaleSequential = qf
          d.scaleSequentialLog = rf
          d.scaleSequentialPow = bd
          d.scaleSequentialQuantile = tf
          d.scaleSequentialSqrt = function () {
            return bd.apply(null, arguments).exponent(0.5)
          }
          d.scaleSequentialSymlog = sf
          d.scaleSqrt = function () {
            return Uc.apply(null, arguments).exponent(0.5)
          }
          d.scaleSymlog = Te
          d.scaleThreshold = Ze
          d.scaleTime = function () {
            return ma.apply(
              ad(ml, nl, ya, Dd, Xb, tb, Bd, zd, Sa, yg).domain([
                new Date(2e3, 0, 1),
                new Date(2e3, 0, 2),
              ]),
              arguments,
            )
          }
          d.scaleUtc = function () {
            return ma.apply(
              ad(jl, kl, za, Ed, Yb, Vb, Cd, Ad, Sa, zg).domain([
                Date.UTC(2e3, 0, 1),
                Date.UTC(2e3, 0, 2),
              ]),
              arguments,
            )
          }
          d.scan = function (d, e) {
            d = ge(d, e)
            return 0 > d ? n : d
          }
          d.select = Ff
          d.selectAll = function (d) {
            return 'string' === typeof d
              ? new ea([document.querySelectorAll(d)], [document.documentElement])
              : new ea([xf(d)], id)
          }
          d.selection = Ua
          d.selector = bc
          d.selectorAll = ed
          d.shuffle = Yk
          d.shuffler = he
          d.some = function (d, e) {
            if ('function' !== typeof e) throw new TypeError('test is not a function')
            var k = -1,
              h = B(d),
              p
            try {
              for (h.s(); !(p = h.n()).done; ) if (e(p.value, ++k, d)) return !0
            } catch (H) {
              h.e(H)
            } finally {
              h.f()
            }
            return !1
          }
          d.sort = ib
          d.stack = function () {
            function d(d) {
              var k = Array.from(e.apply(this, arguments), gk),
                p = k.length,
                u = -1,
                t = B(d),
                w
              try {
                for (t.s(); !(w = t.n()).done; ) {
                  var v = w.value
                  var r = 0
                  for (++u; r < p; ++r) (k[r][u] = [0, +n(v, k[r].key, u, d)]).data = v
                }
              } catch (ih) {
                t.e(ih)
              } finally {
                t.f()
              }
              r = 0
              for (u = fc(h(k)); r < p; ++r) k[u[r]].index = r
              l(k, u)
              return k
            }
            var e = M([]),
              h = eb,
              l = db,
              n = fk
            d.keys = function (k) {
              return arguments.length
                ? ((e = 'function' === typeof k ? k : M(Array.from(k))), d)
                : e
            }
            d.value = function (e) {
              return arguments.length ? ((n = 'function' === typeof e ? e : M(+e)), d) : n
            }
            d.order = function (e) {
              return arguments.length
                ? ((h = null == e ? eb : 'function' === typeof e ? e : M(Array.from(e))), d)
                : h
            }
            d.offset = function (e) {
              return arguments.length ? ((l = null == e ? db : e), d) : l
            }
            return d
          }
          d.stackOffsetDiverging = function (d, e) {
            if (0 < (v = d.length))
              for (var k, h = 0, p, l, n, t, v, r = d[e[0]].length; h < r; ++h)
                for (k = n = t = 0; k < v; ++k)
                  0 < (l = (p = d[e[k]][h])[1] - p[0])
                    ? ((p[0] = n), (p[1] = n += l))
                    : 0 > l
                      ? ((p[1] = t), (p[0] = t += l))
                      : ((p[0] = 0), (p[1] = l))
          }
          d.stackOffsetExpand = function (d, e) {
            if (0 < (h = d.length)) {
              for (var k, h, p = 0, l = d[0].length, n; p < l; ++p) {
                for (n = k = 0; k < h; ++k) n += d[k][p][1] || 0
                if (n) for (k = 0; k < h; ++k) d[k][p][1] /= n
              }
              db(d, e)
            }
          }
          d.stackOffsetNone = db
          d.stackOffsetSilhouette = function (d, e) {
            if (0 < (p = d.length)) {
              for (var k = 0, h = d[e[0]], p, l = h.length; k < l; ++k) {
                for (var n = 0, t = 0; n < p; ++n) t += d[n][k][1] || 0
                h[k][1] += h[k][0] = -t / 2
              }
              db(d, e)
            }
          }
          d.stackOffsetWiggle = function (d, e) {
            if (0 < (n = d.length) && 0 < (l = (p = d[e[0]]).length)) {
              for (var k = 0, h = 1, p, l, n; h < l; ++h) {
                for (var t = 0, v = 0, r = 0; t < n; ++t) {
                  var y = d[e[t]],
                    C = y[h][1] || 0
                  y = (C - (y[h - 1][1] || 0)) / 2
                  for (var F = 0; F < t; ++F) {
                    var x = d[e[F]]
                    y += (x[h][1] || 0) - (x[h - 1][1] || 0)
                  }
                  v += C
                  r += y * C
                }
                p[h - 1][1] += p[h - 1][0] = k
                v && (k -= r / v)
              }
              p[h - 1][1] += p[h - 1][0] = k
              db(d, e)
            }
          }
          d.stackOrderAppearance = gg
          d.stackOrderAscending = hg
          d.stackOrderDescending = function (d) {
            return hg(d).reverse()
          }
          d.stackOrderInsideOut = function (d) {
            var e = d.length,
              k = d.map(ig),
              h = gg(d),
              l = 0,
              n = 0,
              t = [],
              v = []
            for (d = 0; d < e; ++d) {
              var r = h[d]
              l < n ? ((l += k[r]), t.push(r)) : ((n += k[r]), v.push(r))
            }
            return v.reverse().concat(t)
          }
          d.stackOrderNone = eb
          d.stackOrderReverse = function (d) {
            return eb(d).reverse()
          }
          d.style = Ta
          d.subset = function (d, e) {
            return je(e, d)
          }
          d.sum = function (d, e) {
            var k = 0
            if (e === n) {
              d = B(d)
              var h
              try {
                for (d.s(); !(h = d.n()).done; ) {
                  var l = h.value
                  if ((l = +l)) k += l
                }
              } catch (J) {
                d.e(J)
              } finally {
                d.f()
              }
            } else {
              h = -1
              l = B(d)
              var p
              try {
                for (l.s(); !(p = l.n()).done; ) {
                  var t = p.value
                  if ((t = +e(t, ++h, d))) k += t
                }
              } catch (J) {
                l.e(J)
              } finally {
                l.f()
              }
            }
            return k
          }
          d.superset = je
          d.symbol = function (d, e) {
            function k() {
              var k
              h || (h = k = l())
              d.apply(this, arguments).draw(h, +e.apply(this, arguments))
              if (k) return (h = null), k + '' || null
            }
            var h = null,
              l = xb(k)
            d = 'function' === typeof d ? d : M(d || wc)
            e = 'function' === typeof e ? e : M(e === n ? 64 : +e)
            k.type = function (e) {
              return arguments.length ? ((d = 'function' === typeof e ? e : M(e)), k) : d
            }
            k.size = function (d) {
              return arguments.length ? ((e = 'function' === typeof d ? d : M(+d)), k) : e
            }
            k.context = function (d) {
              return arguments.length ? ((h = null == d ? null : d), k) : h
            }
            return k
          }
          d.symbolAsterisk = Bg
          d.symbolCircle = wc
          d.symbolCross = Cg
          d.symbolDiamond = Eg
          d.symbolDiamond2 = Fg
          d.symbolPlus = Gg
          d.symbolSquare = Hg
          d.symbolSquare2 = Ig
          d.symbolStar = Kg
          d.symbolTimes = Jd
          d.symbolTriangle = Lg
          d.symbolTriangle2 = Mg
          d.symbolWye = Ng
          d.symbolX = Jd
          d.symbols = Og
          d.symbolsFill = Og
          d.symbolsStroke = vl
          d.thresholdFreedmanDiaconis = function (d, e, h) {
            var k = sa(d)
            d = nb(d, 0.75) - nb(d, 0.25)
            return k && d ? Math.ceil((h - e) / (2 * d * Math.pow(k, -1 / 3))) : 1
          }
          d.thresholdScott = function (d, e, h) {
            var k = sa(d)
            d = Ld(d)
            return k && d ? Math.ceil(((h - e) * Math.cbrt(k)) / (3.49 * d)) : 1
          }
          d.thresholdSturges = $d
          d.tickFormat = Ie
          d.tickIncrement = Ia
          d.tickStep = Jb
          d.ticks = jb
          d.transition = sg
          d.transpose = ie
          d.union = function () {
            for (var d = new La(), e = arguments.length, h = Array(e), l = 0; l < e; l++)
              h[l] = arguments[l]
            for (e = 0; e < h.length; e++) {
              l = B(h[e])
              var n
              try {
                for (l.s(); !(n = l.n()).done; ) d.add(n.value)
              } catch (H) {
                l.e(H)
              } finally {
                l.f()
              }
            }
            return d
          }
          d.variance = Md
          d.window = gd
          d.zip = function () {
            return ie(arguments)
          }
          return d
        })({})
      }),
      D.register('price-tracker-constants', function () {
        return {
          PRICE_TRACKER_MODAL_NAME: 'price-tracker',
          PRICE_TRACKER_GRAPH_DIALOG_WIDTH_PERCENTAGE_DESKTOP: 75,
          PRICE_TRACKER_GRAPH_HEIGHT_TO_WIDTH_RATIO_DESKTOP: 0.3,
          PRICE_TRACKER_BOTTOM_SHEET_NAME: 'price-tracker',
          PRICE_TRACKER_PRELOAD_DOM_ID: 'price-tracker',
          PRICE_TRACKER_PRELOAD_DOM_PARENT_ID: 'price-tracker-parent',
          PRICE_TRACKER_MOBILE_HEADER_ID: 'price-tracker-header-mobile',
          PRICE_TRACKER_GRAPH_DIALOG_WIDTH_PERCENTAGE_MOBILE: 95,
          PRICE_TRACKER_GRAPH_DIALOG_HEIGHT_LANDSCAPE_MOBILE: 140,
          PRICE_TRACKER_GRAPH_HEIGHT_TO_WIDTH_RATIO_MOBILE: 0.5,
          PRICE_TRACKER_HIDDEN_AOK: 'aok-hidden',
          PRICE_TRACKER_DEFAULT_RANGE: '30',
          PRICE_TRACKER_ASSETS_LOADED_STATE: 'priceTracker:assetsLoaded',
          PRICE_TRACKER_MOBILE_MINIMUM_VIEWPORT_SIZE_OF_THE_SHORTEST_SIDE: 450,
          CURRENCY_SYMBOL: {
            USD: '$',
            CAD: '$',
            MXN: '$',
            BRL: 'R$',
            CLP: '$',
            COP: '$',
            EUR: '€',
            INR: '₹',
            GBP: '£',
            SGD: '$',
            AED: 'AED',
            SAR: 'SAR',
            SEK: 'kr',
            PLN: 'zł',
            EGP: 'EGP',
            TRY: '₺',
            ZAR: 'R',
            NGN: '₦',
            JPY: '¥',
            AUD: '$',
            NZD: '$',
            CNY: '¥',
          },
          PRICE_TRACKER_IS_LOADED_EVENT_NAME: 'priceTrackerIsLoaded',
          PRICE_TRACKER_GRID_SHOWN_EVENT_NAME: 'gridIsShown',
          PRICE_TRACKER_GRID_ID: 'price-tracker-grid',
          PRICE_TRACKER_FAILURE_ID: 'price-tracker-failure',
          PRICE_TRACKER_SPINNER_ID: 'price-tracker-spinner',
          PRICE_TRACKER_DESCRIPTION_ID: 'price-tracker-description',
          PRICE_TRACKER_LEGEND_COMPONENT_ID: 'price-tracker-event-markers-component',
          PRICE_TRACKER_LEGEND_ID: 'price-tracker-legend',
          PRICE_TRACKER_GRAPH_ID: 'price-tracker-graph-svg',
          PRICE_TRACKER_CONTENT_ID: 'price-tracker-content',
          PRICE_TRACKER_X_AXIS_ID: 'price-tracker-x-axis',
          PRICE_TRACKER_Y_AXIS_ID: 'price-tracker-y-axis',
          PRICE_TRACKER_TOOLTIP_ID: 'price-tracker-tooltip',
          PRICE_TRACKER_TOOLTIP_RECT_ID: 'price-tracker-tooltip-rect',
          PRICE_TRACKER_TOOLTIP_TEXT_ID: 'price-tracker-tooltip-text',
          PRICE_TRACKER_TOOLTIP_LINE_ID: 'price-tracker-tooltip-line',
          PRICE_TRACKER_LEGEND_PRICE_LINE_ID: 'price-tracker-legend-price-line',
          PRICE_TRACKER_LEGEND_NO_DATA_LINE_ID: 'price-tracker-legend-no-data-line',
          PRICE_TRACKER_LEGEND_PRICE_LABEL_CLASS: 'price-tracker-legend-price-label-style',
          PRICE_TRACKER_LEGEND_NO_DATA_LABEL_CLASS: 'price-tracker-legend-no-data-label-style',
          PRICE_TRACKER_LEGEND_TABLE_CLASS: 'price-tracker-legend-table',
          PRICE_TRACKER_LEGEND_CELL_CLASS: 'price-tracker-legend-cell',
          PRICE_TRACKER_EVENT_SYMBOL_RADIUS: '4',
          PRICE_TRACKER_EVENT_SYMBOL_RADIUS_HIGHLIGHTED: '6',
          PRICE_TRACKER_SYMBOL_LEGEND_CX: '10',
          PRICE_TRACKER_SYMBOL_LEGEND_CY: '10',
          PRICE_TRACKER_SYMBOL_LEGEND_WIDTH: '16',
          PRICE_TRACKER_LEGEND_NO_DATA_DASHARRAY: '2,4',
          PRICE_TRACKER_SYMBOL_HEIGHT: 16,
          PRICE_TRACKER_LEGEND_PRICE_LINE_LENGTH: 10,
          PRICE_TRACKER_LEGEND_PRICE_LINE_WIDTH: 12,
          PRICE_TRACKER_LEGEND_NO_DATA_LINE_LENGTH: 15,
          PRICE_TRACKER_LEGEND_NO_DATA_LINE_WIDTH: 17,
          PRICE_TRACKER_EVENT_SYMBOL_CLASS: 'price-tracker-event-symbol',
          PRICE_TRACKER_EVENT_CIRCLE: 'circle',
          PRICE_TRACKER_EVENT_TYPE_MAP: {
            DEAL: {
              LABEL_CLASS: 'price-tracker-deal-event-label-style',
              CSS_CLASS: 'price-tracker-event-symbol pt-circle-deal',
              SYMBOL_ID: 'price-tracker-deal-event-symbol',
              GRID_ID: 'price-tracker-deal-event-legend-style',
              LINE_STYLE: 'price-tracker-deal-line',
            },
            PRIME: {
              LABEL_CLASS: 'price-tracker-prime-event-label-style',
              CSS_CLASS: 'price-tracker-event-symbol pt-circle-prime',
              SYMBOL_ID: 'price-tracker-prime-event-symbol',
              GRID_ID: 'price-tracker-prime-event-legend-style',
              LINE_STYLE: 'price-tracker-prime-line',
            },
          },
          PRICE_TRACKER_GRAPH_DIALOG_MAX_WIDTH: 600,
          PRICE_TRACKER_GRAPH_DIALOG_MIN_WIDTH: 320,
          PRICE_TRACKER_GRAPH_WINDOW_PADDING_TOP: 0,
          PRICE_TRACKER_GRAPH_WINDOW_PADDING_LEFT: 10,
          PRICE_TRACKER_GRAPH_WINDOW_PADDING_RIGHT: 20,
          PRICE_TRACKER_GRAPH_WINDOW_PADDING_BOTTOM: 30,
          PRICE_TRACKER_TOOLTIP_TEXT_LEFT_PADDING: 10,
          PRICE_TRACKER_TOOLTIP_TEXT_TOP_PADDING: 20,
          PRICE_TRACKER_TOOLTIP_TOP_OFFSET: 5,
          PRICE_TRACKER_TOOLTIP_SHADOW_X_OFFSET: 4,
          PRICE_TRACKER_TOOLTIP_VERTICAL_LINE_TOP_OFFSET: 10,
          PRICE_TRACKER_X_AXIS_TEXT_OFFSET: 10,
          PRICE_TRACKER_ANIMATION_DURATION: 100,
          PRICE_TRACKER_TREND_LINE_STYLE: 'price-tracker-trend-line',
          PRICE_TRACKER_NO_DATA_TREND_LINE_STYLE: 'price-tracker-no-data-line',
          PRICE_TRACKER_TICK_TEXT: 'tick text',
          PRICE_TRACKER_TICK_LINE: 'tick line',
          PRICE_TRACKER_X_AXIS_TICK_TEXT_CLASS: 'pt-xaxis-ticks-text',
          PRICE_TRACKER_Y_AXIS_TICK_TEXT_CLASS: 'pt-yaxis-ticks-text',
          PRICE_TRACKER_Y_AXIS_TICK_LINE_CLASS: 'pt-yaxis-ticks-line',
          PRICE_TRACKER_PATH: 'path',
          PRICE_TRACKER_TOUCHABLE_AREA_CLASS: 'pt-blank-touchable-area',
          PRICE_TRACKER_DESCRIPTION_STYLE_CLASS: 'price-tracker-description',
          PRICE_TRACKER_TOOLTIP_STYLE_CLASS: 'price-tracker-tooltip-style',
          PRICE_TRACKER_TOOLTIP_LINE_STYLE_CLASS: 'price-tracker-tooltip-line-style',
          PRICE_TRACKER_TOOLTIP_RECT_STYLE_CLASS: 'price-tracker-tooltip-rect-style',
          PRICE_TRACKER_TOOLTIP_TEXT_STYLE_CLASS: 'price-tracker-tooltip-text-style',
          PRICE_TRACKER_X_AXIS_STYLE_CLASS: 'price-tracker-x-axis-style',
          PRICE_TRACKER_Y_AXIS_STYLE_CLASS: 'price-tracker-y-axis-style',
          PRICE_TRACKER_ATYPICAL_PRICE_TYPE: 'ATYPICAL_PRICE',
        }
      }),
      D.when('A', 'jQuery', 'price-tracker-d3', 'price-tracker-constants').register(
        'price-tracker-helper',
        function (E, h, l, r) {
          function x(l) {
            return h('#' + l)
          }
          function N(h) {
            var e = (Math.round(100 * h) / 100).toFixed(2)
            isNaN(e) && (e = h)
            return e
          }
          function G(h) {
            var e = ''
            if (h.text) e = h.text
            else if (h.money) {
              e = h.money.currencyCode
              var l = r.CURRENCY_SYMBOL[e]
              l === n && (l = e)
              e = l + N(h.money.amount)
            }
            return e
          }
          function O(h) {
            var e = ''
            Array.isArray(h) &&
              E.each(h, function (h, l) {
                e += G(h)
              })
            return e
          }
          function v(h) {
            return x(null != A ? h + '-' + A : h)
          }
          var A = void 0
          return {
            getElementBasedOnID: x,
            parseRichContent: function (h) {
              var e = ''
              h &&
                (e = h.paragraph ? O(h.paragraph.fragments) : h.fragments ? O(h.fragments) : G(h))
              return e
            },
            buildRichContentFromText: function (h) {
              var e = []
              e.push({ text: h })
              return { fragments: e }
            },
            parseAmount: N,
            formatEvents: function (h) {
              return h.events.flat().map(function (e) {
                e.type = h.type
                return e
              })
            },
            checkIfPointBelongsToEvent: function (h, e) {
              return (
                0 <
                h.filter(function (h) {
                  return h.startDateTick <= e.dateTick && h.finishDateTick >= e.dateTick
                }).length
              )
            },
            tooltipTransform: function (h, e, l) {
              h.x = Math.max(e, h.x)
              h.x = Math.min(l - h.width, h.x)
              return 'translate(' + h.x + ',' + h.y + ')'
            },
            clamp: function (h, e, l) {
              return Math.min(Math.max(h, e), l)
            },
            showFailureMessage: function () {
              v(r.PRICE_TRACKER_FAILURE_ID).show()
            },
            hideFailureMessage: function () {
              v(r.PRICE_TRACKER_FAILURE_ID).hide()
            },
            hideSpinner: function () {
              v(r.PRICE_TRACKER_SPINNER_ID).hide()
            },
            getBuyingOptionIndex: function () {
              return null != A ? A.split('-')[0] : 0
            },
            updateBuyingOptionIndex: function (h) {
              A = h
            },
            getDynamicID: function (h) {
              return null != A ? h + '-' + A : h
            },
            getElementBasedOnDynamicID: v,
            getD3ElementBasedOnDynamicID: function (h) {
              return l.select('#' + (null != A ? h + '-' + A : h))
            },
            getD3ChildrenElementsBasedOnClass: function (h, e) {
              return h.selectAll('.' + e)
            },
            registerEvent: function (h, e) {
              if (!E.isListening(h)) E.on(h, e)
            },
            logError: function (h) {
              var e = 1 < arguments.length && arguments[1] !== n ? arguments[1] : null
              if (R.ueLogError) {
                var l = {
                  logLevel: 'ERROR',
                  attribution: 'detail_page_price_tracker_assets',
                  message: h + ' ',
                }
                e || (e = Error('No exception is thrown.'))
                R.ueLogError(e, l)
              }
            },
          }
        },
      ),
      D.when('price-tracker-constants').register('price-tracker-data-helper', function (n) {
        var h = {}
        return {
          setPriceTrackerIngressData: function (l) {
            h = l
          },
          getNoDataLegendLabel: function () {
            return h ? h.priceTrackerNoDataLegendLabel : null
          },
          getPriceLegendLabel: function () {
            return h ? h.priceTrackerPriceLegendLabel : null
          },
          getNoDataTooltipLabel: function () {
            return h ? h.priceTrackerNoDataTooltip : null
          },
          getRange: function () {
            return h && h.priceTrackerRanges && h.priceTrackerRanges[0]
              ? h.priceTrackerRanges[0]
              : null
          },
          isAtypicalPriceType: function () {
            return h ? h.trackerType === n.PRICE_TRACKER_ATYPICAL_PRICE_TYPE : !1
          },
        }
      }),
      D.register('price-tracker-metrics', function () {
        return {
          logCountMetric: function (n) {
            R.ue && R.ue.count && R.ue.count(n, 1)
          },
          logData: function (n, h, l) {
            R.ue && R.ue.event && R.ue.event(n, h, l)
          },
          startTimer: function (n) {
            uet && uet('bb', n, { wb: 1 })
          },
          stopTimer: function (n) {
            uex && uex('ld', n, { wb: 1 })
          },
          reportCriticalFeature: function (n) {
            uet && uet('cf', n, { wb: 1 })
          },
          METRIC_AJAX_CALL: 'priceTracker:ajax:call',
          METRIC_AJAX_SUCCESS: 'priceTracker:ajax:success',
          METRIC_AJAX_STATUS_CODE_2XX: 'priceTracker:ajax:statusCode:2XX',
          METRIC_AJAX_STATUS_CODE_4XX: 'priceTracker:ajax:statusCode:4XX',
          METRIC_AJAX_STATUS_CODE_5XX: 'priceTracker:ajax:statusCode:5XX',
          METRIC_RESPONSE_EMPTY: 'priceTracker:response:empty',
          METRIC_DATA_RECEIVED: 'priceTracker:data:received',
          METRIC_DATA_INVALID: 'priceTracker:data:invalid',
          METRIC_DATA_TITLE_EMPTY: 'priceTracker:data:title:empty',
          METRIC_DATA_CHART_EMPTY: 'priceTracker:data:chart:empty',
          METRIC_DATA_XAXIS_EMPTY: 'priceTracker:data:xAxis:empty',
          METRIC_DATA_YAXIS_EMPTY: 'priceTracker:data:yAxis:empty',
          METRIC_DATA_PRICE_EMPTY: 'priceTracker:data:price:empty',
          METRIC_DATA_EVENTS_EMPTY: 'priceTracker:data:events:empty',
          METRIC_DATA_XAXIS_INVALID: 'priceTracker:data:xAxis:invalid',
          METRIC_DATA_YAXIS_INVALID: 'priceTracker:data:yAxis:invalid',
          METRIC_DATA_PRICE_INVALID: 'priceTracker:data:price:invalid',
          METRIC_DATA_EVENTS_INVALID: 'priceTracker:data:events:invalid',
          METRIC_MOBILE_LANDSCAPE: 'priceTracker:mobile:landscape',
          METRIC_MOBILE_FATAL: 'priceTracker:mobile:fatal',
          METRIC_DESKTOP_FATAL: 'priceTracker:desktop:fatal',
          METRIC_LATENCY_AJAX: 'priceTrackerWidgetAjax',
          NEXUS_PRODUCER_ID: 'pricetracker',
          NEXUS_SCHEMA_ID: 'pricetracker.PriceTracker.12',
        }
      }),
      D.when('price-tracker-constants', 'price-tracker-metrics').register(
        'price-tracker-validator',
        function (n, h) {
          function l(e, h) {
            return A(e.max, 'number') && A(e.min, 'number') ? r(e.labels, h) : null
          }
          function r(e, h) {
            return A(e, 'object') && 0 !== e.length
              ? ((e = e.filter(function (e) {
                  return h(e)
                })),
                0 !== e.length ? e : null)
              : null
          }
          function x(e) {
            return A(e.dateTick, 'number') && A(e.label, 'object') && A(e.value, 'number')
          }
          function E(e) {
            return A(e.dateTick, 'number') && A(e.label, 'string')
          }
          function G(e) {
            return A(e.label, 'object') && A(e.value, 'number')
          }
          function O(e) {
            return A(e.label, 'string') && A(e.type, 'string') && A(e.events, 'object')
          }
          function v(e) {
            return (
              A(e.startDateTick, 'number') && A(e.finishDateTick, 'number') && A(e.value, 'number')
            )
          }
          function A(e, h) {
            switch (h) {
              case 'string':
                return (
                  null !== e &&
                  ('undefined' === typeof e ? 'undefined' : S(e)) === h &&
                  0 !== e.trim().length
                )
              case 'object':
                return (
                  null !== e &&
                  ('undefined' === typeof e ? 'undefined' : S(e)) === h &&
                  '{}' !== JSON.stringify(e)
                )
              default:
                return null !== e && ('undefined' === typeof e ? 'undefined' : S(e)) === h
            }
          }
          function t(e) {
            if (e) {
              var h = (function () {
                var h = [],
                  l
                for (l in n.PRICE_TRACKER_EVENT_TYPE_MAP) h.push(l)
                return {
                  v: e.filter(function (e) {
                    for (var l in h) if (e.type === h[l]) return e
                  }),
                }
              })()
              if ('object' === ('undefined' === typeof h ? 'undefined' : S(h))) return h.v
            }
          }
          return {
            validate: function (e) {
              h.logCountMetric(h.METRIC_DATA_RECEIVED)
              if (A(e, 'object') && !e.code) {
                a: {
                  var n = e.title,
                    N = e.chart
                  n || h.logCountMetric(h.METRIC_DATA_TITLE_EMPTY)
                  N || h.logCountMetric(h.METRIC_DATA_CHART_EMPTY)
                  if (A(n, 'string') && A(N, 'object')) {
                    n = N.xAxis
                    var D = N.yAxis
                    n || h.logCountMetric(h.METRIC_DATA_XAXIS_EMPTY)
                    D || h.logCountMetric(h.METRIC_DATA_YAXIS_EMPTY)
                    N.series || h.logCountMetric(h.METRIC_DATA_PRICE_EMPTY)
                    if (A(n, 'object') && A(D, 'object') && A(N.series, 'object')) {
                      var T = l(n, E),
                        W = l(D, G)
                      b: {
                        var R = N.series
                        if (A(R, 'object') && 0 !== R.length) {
                          for (ba in R) {
                            var S = R[ba].points,
                              V = r(S, x)
                            if (!V || V.length !== S.length) {
                              var ba = null
                              break b
                            }
                          }
                          ba = R
                        } else ba = null
                      }
                      T || h.logCountMetric(h.METRIC_DATA_XAXIS_INVALID)
                      W || h.logCountMetric(h.METRIC_DATA_YAXIS_INVALID)
                      ba || h.logCountMetric(h.METRIC_DATA_PRICE_INVALID)
                      if (T && W && ba) {
                        n.labels = T
                        D.labels = W
                        N.series = ba
                        break a
                      }
                    }
                  }
                  e = null
                }
                if (e) {
                  N = e.description
                  if ((D = e.chart.eventSeries)) {
                    n = e.chart
                    a: if ((D = r(D, O))) {
                      for (B in D)
                        if (((T = D[B].events), (W = r(T, v)), !W || W.length !== T.length)) {
                          var B = null
                          break a
                        }
                      B = t(D)
                      B = 0 !== B.length ? B : null
                    } else B = null
                    n.eventSeries = B
                    e.chart.eventSeries || h.logCountMetric(h.METRIC_DATA_EVENTS_INVALID)
                  } else h.logCountMetric(h.METRIC_DATA_EVENTS_EMPTY)
                  A(N, 'object') || (e.description = null)
                  return e
                }
              }
              h.logCountMetric(h.METRIC_DATA_INVALID)
              return null
            },
          }
        },
      ),
      D.when('A', 'price-tracker-constants', 'price-tracker-data-helper').register(
        'price-tracker-events-legend-element-helper',
        function (n, h, l) {
          function r(l, n) {
            return l
              .append('td')
              .attr('class', h.PRICE_TRACKER_LEGEND_CELL_CLASS)
              .append('svg')
              .attr('height', h.PRICE_TRACKER_SYMBOL_HEIGHT)
              .attr('width', n)
              .append('g')
          }
          function x(l) {
            return l.append('td').attr('class', h.PRICE_TRACKER_LEGEND_CELL_CLASS)
          }
          return {
            addDynamicLegendElements: function (E, G, D, v) {
              var A = 0,
                t = 0
              n.each(v.chart.series, function (e) {
                A += e.points.length
              })
              n.each(v.chart.eventSeries, function (e) {
                h.PRICE_TRACKER_EVENT_TYPE_MAP.hasOwnProperty(e.type) &&
                  n.each(e.events, function (e) {
                    t += e.finishDateTick - e.startDateTick + 1
                  })
              })
              ;(D = l.getPriceLegendLabel()) &&
                A > t &&
                (r(E, h.PRICE_TRACKER_LEGEND_PRICE_LINE_WIDTH)
                  .append('line')
                  .attr('id', h.PRICE_TRACKER_LEGEND_PRICE_LINE_ID)
                  .attr('class', h.PRICE_TRACKER_TREND_LINE_STYLE)
                  .attr('x1', 1)
                  .attr('y1', G)
                  .attr('x2', 1 + h.PRICE_TRACKER_LEGEND_PRICE_LINE_LENGTH)
                  .attr('y2', G),
                x(E).append('text').attr('class', h.PRICE_TRACKER_LEGEND_PRICE_LABEL_CLASS).text(D))
              v = v.chart.series
                .map(function (e) {
                  return e.points
                })
                .flat()
                .map(function (e) {
                  return e.dateTick
                })
              v = Math.min.apply(null, v)
              ;(D = l.getNoDataLegendLabel()) &&
                (A + v - 1 !== l.getRange() || l.isAtypicalPriceType()) &&
                (r(E, h.PRICE_TRACKER_LEGEND_NO_DATA_LINE_WIDTH)
                  .append('line')
                  .attr('id', h.PRICE_TRACKER_LEGEND_NO_DATA_LINE_ID)
                  .attr('class', h.PRICE_TRACKER_NO_DATA_TREND_LINE_STYLE)
                  .attr('x1', 1)
                  .attr('y1', G)
                  .attr('x2', 1 + h.PRICE_TRACKER_LEGEND_NO_DATA_LINE_LENGTH)
                  .attr('y2', G)
                  .attr('stroke-dasharray', h.PRICE_TRACKER_LEGEND_NO_DATA_DASHARRAY),
                x(E)
                  .append('text')
                  .attr('class', h.PRICE_TRACKER_LEGEND_NO_DATA_LABEL_CLASS)
                  .text(D))
            },
            createSVGTableCell: r,
            createTextTableCell: x,
          }
        },
      ),
      D.when('A', 'jQuery', 'price-tracker-constants', 'price-tracker-helper').register(
        'price-tracker-ui-helper',
        function (n, h, l, r) {
          function x() {
            return r.clamp(
              Math.round(
                (R.innerWidth / 100) * l.PRICE_TRACKER_GRAPH_DIALOG_WIDTH_PERCENTAGE_DESKTOP,
              ),
              l.PRICE_TRACKER_GRAPH_DIALOG_MIN_WIDTH,
              l.PRICE_TRACKER_GRAPH_DIALOG_MAX_WIDTH,
            )
          }
          return {
            getDialogWidth: x,
            getDialogHeight: function () {
              return Math.round(x() * l.PRICE_TRACKER_GRAPH_HEIGHT_TO_WIDTH_RATIO_DESKTOP)
            },
            isMobile: function () {
              return !1
            },
          }
        },
      ),
      D.when('A', 'jQuery', 'a-modal', 'price-tracker-helper', 'price-tracker-constants').register(
        'price-tracker-header-render',
        function (n, h, l, r, x) {
          return {
            renderHeader: function (h) {
              l.get(r.getDynamicID(x.PRICE_TRACKER_MODAL_NAME)).update({ header: h })
            },
            clearHeader: function () {
              l.get(r.getDynamicID(x.PRICE_TRACKER_MODAL_NAME)).update({ header: '' })
            },
          }
        },
      ),
      D.when(
        'A',
        'jQuery',
        'price-tracker-content-render',
        'price-tracker-helper',
        'price-tracker-metrics',
      ).register('price-tracker-content-handler', function (n, h, l, r, x) {
        function E() {
          r.hideSpinner()
          r.showFailureMessage()
        }
        return {
          onHttpSuccess: function (h) {
            x.logCountMetric(x.METRIC_AJAX_SUCCESS)
            r.hideSpinner()
            if (
              h &&
              h.entity &&
              Array.isArray(h.entity.buyingOptions) &&
              0 < h.entity.buyingOptions.length
            ) {
              var n = r.getBuyingOptionIndex()
              if ((h = h.entity.buyingOptions[n].priceTracker) && h.metadata) {
                n = h.metadata['x-amzn-metrics-id']
                var v = R.opts
                n &&
                  v &&
                  x.logData(
                    { metricsId: n, customerId: v.customerId, asin: v.asin, marketId: v.marketId },
                    x.NEXUS_PRODUCER_ID,
                    x.NEXUS_SCHEMA_ID,
                  )
              }
              l.renderContent(h.entity)
            } else x.logCountMetric(x.METRIC_RESPONSE_EMPTY), r.showFailureMessage()
          },
          onHttpError: function (h, l, n) {
            r.logError('An HTTP error occurred while fetching price data.', n)
            E()
          },
          onFailure: E,
        }
      }),
      D.when(
        'A',
        'price-tracker-content-handler',
        'price-tracker-constants',
        'price-tracker-helper',
        'price-tracker-metrics',
        'price-tracker-data-helper',
      ).register('price-tracker-content-loader', function (n, h, l, r, x, D) {
        function G(h) {
          var n = 'https://' + h.priceTrackerAjaxURL,
            t = l.PRICE_TRACKER_DEFAULT_RANGE
          h.priceTrackerRanges && h.priceTrackerRanges[0] && (t = h.priceTrackerRanges[0])
          n += t
          h.trackerType && (n += '\x26trackerType\x3d' + h.trackerType)
          return n
        }
        function E(h) {
          h &&
            h.http &&
            h.http.status &&
            ((h = h.http.status),
            400 <= h && 500 > h
              ? x.logCountMetric(x.METRIC_AJAX_STATUS_CODE_4XX)
              : 500 <= h && 600 > h
                ? x.logCountMetric(x.METRIC_AJAX_STATUS_CODE_5XX)
                : 200 <= h && 300 > h && x.logCountMetric(x.METRIC_AJAX_STATUS_CODE_2XX))
        }
        return {
          loadPriceTracker: function (r) {
            x.logCountMetric(x.METRIC_AJAX_CALL)
            if (r && r.data && r.data.priceTrackerAjaxURL) {
              x.startTimer(x.METRIC_LATENCY_AJAX)
              D.setPriceTrackerIngressData(r.data)
              var v = G(r.data)
              r = {
                Accept:
                  'application/vnd.com.amazon.api+json; type\x3d"product/v2"; expand\x3d"buyingOptions[].priceTracker(product.price-tracker/v1)"',
                'Accept-Language': r.data.priceTrackerLocale,
                'x-api-csrf-token': r.data.priceTrackerCSRFToken,
                'x-cc-currency-of-preference': r.data.priceTrackerCurrencyOfPreference,
                'X-Requested-With': null,
              }
              var t = document.querySelector('meta[name\x3d"encrypted-slate-token"]')
              t && (r['x-amzn-encrypted-slate-token'] = t.content)
              n.ajax(v, {
                type: 'GET',
                timeout: 1e4,
                contentType: 'application/x-www-form-urlencoded;charset\x3dutf-8',
                headers: r,
                withCredentials: !0,
                success: function (e) {
                  x.stopTimer(x.METRIC_LATENCY_AJAX)
                  E(e)
                  h.onHttpSuccess(e)
                  n.trigger(l.PRICE_TRACKER_IS_LOADED_EVENT_NAME)
                },
                error: function (e) {
                  x.stopTimer(x.METRIC_LATENCY_AJAX)
                  E(e)
                  h.onHttpError(e)
                  n.trigger(l.PRICE_TRACKER_IS_LOADED_EVENT_NAME)
                },
              })
            } else h.onFailure(), n.trigger(l.PRICE_TRACKER_IS_LOADED_EVENT_NAME)
          },
        }
      }),
      D.when(
        'A',
        'jQuery',
        'price-tracker-graph-render',
        'price-tracker-events-legend-render',
        'price-tracker-header-render',
        'price-tracker-description-render',
        'price-tracker-helper',
        'price-tracker-ui-helper',
        'price-tracker-validator',
        'price-tracker-constants',
        'price-tracker-metrics',
      ).register('price-tracker-content-render', function (n, h, l, r, x, D, G, O, v, A, t) {
        function e(e) {
          try {
            E = e
            var h = O.getDialogWidth(),
              N = O.getDialogHeight()
            O.isMobile() &&
              O.isLandscapeMode() &&
              !O.isTablet() &&
              t.logCountMetric(t.METRIC_MOBILE_LANDSCAPE)
            var L = v.validate(e)
            if (L) {
              var T = L.chart.eventSeries
              x.renderHeader(L.title)
              D.renderDescription(L.description, h)
              r.renderLegend(L)
              l.renderChart(L.chart, T, h, N)
              G.getElementBasedOnDynamicID(A.PRICE_TRACKER_GRID_ID).show()
              n.trigger(A.PRICE_TRACKER_GRID_SHOWN_EVENT_NAME)
            } else G.showFailureMessage(), G.logError('Price Tracker data is not valid.')
          } catch (ra) {
            O.isMobile()
              ? t.logCountMetric(t.METRIC_MOBILE_FATAL)
              : t.logCountMetric(t.METRIC_DESKTOP_FATAL),
              G.showFailureMessage(),
              G.logError('An error occurred while rendering Price Tracker.', ra)
          }
        }
        var E = void 0
        return {
          renderContent: e,
          rerenderContent: function () {
            E && e(E)
          },
          clearContent: function () {
            x.clearHeader()
            D.clearDescription()
            r.clearLegend()
            G.getElementBasedOnDynamicID(A.PRICE_TRACKER_GRID_ID).hide()
            G.hideFailureMessage()
            l.clearGraph()
          },
        }
      }),
      D.when('A', 'jQuery', 'price-tracker-helper', 'price-tracker-constants').register(
        'price-tracker-description-render',
        function (n, h, l, r) {
          return {
            renderDescription: function (h, n) {
              h &&
                (h = l.parseRichContent(h)) &&
                l
                  .getElementBasedOnDynamicID(r.PRICE_TRACKER_DESCRIPTION_ID)
                  .text(h)
                  .width(n)
                  .attr('class', r.PRICE_TRACKER_DESCRIPTION_STYLE_CLASS)
            },
            clearDescription: function () {
              l.getElementBasedOnDynamicID(r.PRICE_TRACKER_DESCRIPTION_ID).text('')
            },
          }
        },
      ),
      D.when(
        'A',
        'price-tracker-helper',
        'price-tracker-constants',
        'price-tracker-d3',
        'price-tracker-data-helper',
      ).register('price-tracker-graph-render', function (n, h, l, r, x) {
        function D(e, n) {
          return h
            .getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_GRAPH_ID)
            .attr('width', e)
            .attr('height', n)
        }
        function G(e, n) {
          var t = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_CONTENT_ID)
          t.empty() && (t = e.append('g').attr('id', h.getDynamicID(l.PRICE_TRACKER_CONTENT_ID)))
          return t.attr('transform', 'translate(' + n.left + ',' + n.top + ')')
        }
        function E(e, n) {
          n &&
            ((n = h.parseRichContent(n)),
            h.getElementBasedOnDynamicID(l.PRICE_TRACKER_GRAPH_ID).attr('aria-label', n))
          e.attr('aria-hidden', !0)
        }
        function v(e) {
          var h = {}
          n.each(e, function (e) {
            h[e.dateTick] = e
          })
          return h
        }
        function A(e) {
          var h = {}
          n.each(e.labels, function (e) {
            h[e.dateTick] = e.label
          })
          return { values: h, tickValues: Object.keys(h), min: e.min, max: e.max }
        }
        function t(e) {
          var l = {}
          n.each(e.labels, function (e) {
            l[e.value] = h.parseRichContent(e.label)
          })
          return { values: l, tickValues: Object.keys(l), min: e.min, max: e.max }
        }
        function e(e) {
          var l = {}
          e &&
            n.each(e, function (e) {
              l[e.type] = h.formatEvents(e)
            })
          return l
        }
        function L(e, n, t, v, x, B, A) {
          n = r.scaleLinear().domain([v, x]).range([0, n]).clamp(!0)
          v = r.axisBottom(n)
          v.tickSize(0)
          x = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_X_AXIS_ID)
          x.empty() &&
            (x = e
              .append('g')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_X_AXIS_ID))
              .attr('class', l.PRICE_TRACKER_X_AXIS_STYLE_CLASS))
          x = x.attr('transform', 'translate(0,' + t + ')').call(
            v
              .ticks(A.length)
              .tickValues(A)
              .tickFormat(function (e) {
                return B[e]
              }),
          )
          h.getD3ChildrenElementsBasedOnClass(x, l.PRICE_TRACKER_TICK_TEXT)
            .attr('class', l.PRICE_TRACKER_X_AXIS_TICK_TEXT_CLASS)
            .attr('y', l.PRICE_TRACKER_X_AXIS_TEXT_OFFSET)
          return n
        }
        function T(e, n, t, v, x, B, A) {
          t = r.scaleLinear().domain([v, x]).range([t, 0])
          v = r.axisLeft(t)
          v.tickSize(-n)
          n = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_Y_AXIS_ID)
          n.empty() &&
            (n = e
              .append('g')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_Y_AXIS_ID))
              .attr('class', l.PRICE_TRACKER_Y_AXIS_STYLE_CLASS))
          n = n.call(
            v
              .ticks(A.length)
              .tickValues(A)
              .tickFormat(function (e) {
                return B[e]
              }),
          )
          h.getD3ChildrenElementsBasedOnClass(n, l.PRICE_TRACKER_TICK_LINE).attr(
            'class',
            l.PRICE_TRACKER_Y_AXIS_TICK_LINE_CLASS,
          )
          h.getD3ChildrenElementsBasedOnClass(n, l.PRICE_TRACKER_TICK_TEXT).attr(
            'class',
            l.PRICE_TRACKER_Y_AXIS_TICK_TEXT_CLASS,
          )
          return t
        }
        function R(e, h) {
          return r
            .line()
            .x(function (h) {
              return e(h.dateTick)
            })
            .y(function (e) {
              return h(e.value)
            })
        }
        function S(e, l, n) {
          return r
            .line()
            .x(function (h) {
              return e(h.dateTick)
            })
            .y(function (e) {
              return l(e.value)
            })
            .defined(function (e) {
              return h.checkIfPointBelongsToEvent(n, e)
            })
        }
        function W(e, n, t, r) {
          h.getD3ChildrenElementsBasedOnClass(n, r)
            .data(e)
            .join(l.PRICE_TRACKER_PATH)
            .attr('class', r)
            .attr('d', t)
        }
        function Wa(e, n, t, r, v) {
          h.getD3ChildrenElementsBasedOnClass(n, l.PRICE_TRACKER_TOUCHABLE_AREA_CLASS)
            .data(e)
            .join('rect')
            .attr('class', l.PRICE_TRACKER_TOUCHABLE_AREA_CLASS)
            .attr('x', function (e) {
              return t(e.tick - 0.5)
            })
            .attr('width', function () {
              return t(1)
            })
            .attr('height', r)
            .on('touchstart', function (e) {
              return e.preventDefault()
            })
            .on('pointermove pointerdown', v.showAction)
            .on('pointerup mouseout', v.hideAction)
        }
        function ra(e, n, t, v, x) {
          var y = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_TOOLTIP_ID)
          y.empty() &&
            (y = t
              .append('g')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_TOOLTIP_ID))
              .attr('class', l.PRICE_TRACKER_TOOLTIP_STYLE_CLASS))
          y = y.attr('opacity', 0)
          var C = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_TOOLTIP_RECT_ID)
          C.empty() &&
            (C = y
              .append('rect')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_TOOLTIP_RECT_ID))
              .attr('class', l.PRICE_TRACKER_TOOLTIP_RECT_STYLE_CLASS))
          var B = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_TOOLTIP_TEXT_ID)
          B.empty() &&
            (B = y
              .append('text')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_TOOLTIP_TEXT_ID))
              .attr('class', l.PRICE_TRACKER_TOOLTIP_TEXT_STYLE_CLASS))
          var F = h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_TOOLTIP_LINE_ID)
          F.empty() &&
            (F = t
              .append('line')
              .attr('id', h.getDynamicID(l.PRICE_TRACKER_TOOLTIP_LINE_ID))
              .attr('class', l.PRICE_TRACKER_TOOLTIP_LINE_STYLE_CLASS))
          F = F.attr('opacity', 0)
          return {
            tooltip: y,
            tooltipRect: C,
            tooltipText: B,
            tooltipLine: F,
            showAction: function (A, D) {
              t.node().append(y.node())
              A = r.pointer(A)[0]
              A = x.invert(A)
              var G = Object.keys(v)
              D = r.bisector(function (d) {
                return d
              }).left
              var E = D(G, A, 1)
              D = G[E - 1]
              E = G[E]
              E = A - D > E - A ? E : D
              A = x(E)
              D = Math.min.apply(null, G)
              G = Math.max.apply(null, G)
              E = v[h.clamp(E, D, G)]
              E = h.parseRichContent(E.label)
              if (0 < E.length) {
                B.text(E)
                var K =
                  B.node().getComputedTextLength() + 2 * l.PRICE_TRACKER_TOOLTIP_TEXT_LEFT_PADDING
                E = l.PRICE_TRACKER_TOOLTIP_VERTICAL_LINE_TOP_OFFSET
                K = { x: A - K / 2, y: l.PRICE_TRACKER_TOOLTIP_TOP_OFFSET, width: K, height: n }
                B.attr('width', K.width)
                  .attr('y', l.PRICE_TRACKER_TOOLTIP_TEXT_TOP_PADDING)
                  .attr('x', K.width / 2)
                C.attr('width', K.width)
                r.select(this)
                  .transition()
                  .duration(l.PRICE_TRACKER_ANIMATION_DURATION)
                  .attr('r', l.PRICE_TRACKER_EVENT_SYMBOL_RADIUS_HIGHLIGHTED)
                y.attr(
                  'transform',
                  h.tooltipTransform(
                    K,
                    -l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_RIGHT,
                    e +
                      l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_RIGHT -
                      l.PRICE_TRACKER_TOOLTIP_SHADOW_X_OFFSET,
                  ),
                )
                  .transition()
                  .duration(l.PRICE_TRACKER_ANIMATION_DURATION)
                  .attr('opacity', 1)
                A = h.clamp(A, x(D), x(G))
                F.attr('x1', A)
                  .attr('y1', E)
                  .attr('x2', A)
                  .attr('y2', n)
                  .transition()
                  .duration(l.PRICE_TRACKER_ANIMATION_DURATION)
                  .attr('opacity', 1)
              }
            },
            hideAction: function (e, h) {
              r.select(this)
                .transition()
                .duration(l.PRICE_TRACKER_ANIMATION_DURATION)
                .attr('r', l.PRICE_TRACKER_EVENT_SYMBOL_RADIUS)
              y.transition().duration(l.PRICE_TRACKER_ANIMATION_DURATION).attr('opacity', 0)
              F.transition().duration(l.PRICE_TRACKER_ANIMATION_DURATION).attr('opacity', 0)
            },
          }
        }
        function V(e, h, n, t, r, v) {
          var y = [],
            x
          for (x in e)
            if (e.hasOwnProperty(x)) {
              var A = e[x],
                C = S(t, r, A)
              W(n, h, C, l.PRICE_TRACKER_EVENT_TYPE_MAP[x].LINE_STYLE)
              y = y.concat(A)
            }
          ba(y, h, t, r, v)
        }
        function ba(e, n, t, r, v) {
          e = e.map(function (e) {
            return { tick: e.startDateTick, value: e.value, type: e.type }
          })
          h.getD3ChildrenElementsBasedOnClass(n, l.PRICE_TRACKER_EVENT_SYMBOL_CLASS)
            .data(e)
            .join(l.PRICE_TRACKER_EVENT_CIRCLE)
            .attr('class', function (e) {
              return l.PRICE_TRACKER_EVENT_TYPE_MAP[e.type].CSS_CLASS
            })
            .attr('cx', function (e) {
              return t(e.tick)
            })
            .attr('cy', function (e) {
              return r(e.value)
            })
            .attr('r', l.PRICE_TRACKER_EVENT_SYMBOL_RADIUS)
            .on('touchstart', function (e) {
              return e.preventDefault()
            })
            .on('pointermove', v.showAction)
            .on('pointerup mouseout', v.hideAction)
        }
        function B(e, h, n, t, r) {
          var v = []
          if (x.isAtypicalPriceType() && 0 < e.length && 1 < e[0][0].dateTick) {
            var y = JSON.parse(JSON.stringify(e[0][0]))
            y.dateTick = 1
            v.push([y, e[0][0]])
          }
          if (1 < e.length)
            for (y = 0; y < e.length - 1; y++) {
              var A = e[y].reduce(function (e, h) {
                  return e.dateTick > h.dateTick ? e : h
                }),
                C = e[y + 1].reduce(function (e, h) {
                  return e.dateTick < h.dateTick ? e : h
                })
              v.push(xc(A, C, t, r))
            }
          W(v, h, n, l.PRICE_TRACKER_NO_DATA_TREND_LINE_STYLE)
        }
        function xc(e, l, n, t) {
          var r = h.buildRichContentFromText(x.getNoDataTooltipLabel()),
            v = (l.value - e.value) / (l.dateTick - e.dateTick),
            y = e.value,
            A = [e]
          for (e = e.dateTick + 1; e < l.dateTick; ++e) {
            y += v
            var B = { dateTick: e, label: r, value: y }
            A.push(B)
            n.push({ tick: e, value: y })
            t[e] = B
          }
          A.push(l)
          return A
        }
        function sa(e) {
          var h = r
              .select('body')
              .append('svg')
              .attr('width', 0)
              .attr('height', 0)
              .style('position', 'absolute'),
            t = 0
          n.each(e, function (e) {
            h.append('text')
              .attr('x', 0)
              .attr('y', 0)
              .attr('class', l.PRICE_TRACKER_Y_AXIS_TICK_TEXT_CLASS)
              .text(e)
            e = h
              .select('.' + l.PRICE_TRACKER_Y_AXIS_TICK_TEXT_CLASS)
              .node()
              .getComputedTextLength()
            e > t && (t = e)
            h.select('.' + l.PRICE_TRACKER_Y_AXIS_TICK_TEXT_CLASS).remove()
          })
          h.remove()
          return t
        }
        return {
          renderChart: function (h, n, r, x) {
            var y = A(h.xAxis),
              C = t(h.yAxis),
              F = sa(C.values),
              K = {
                top: l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_TOP,
                right: l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_RIGHT,
                bottom: l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_BOTTOM,
                left: l.PRICE_TRACKER_GRAPH_WINDOW_PADDING_LEFT + F,
              },
              N = r - K.left - K.right
            F = x - K.top - K.bottom
            r = D(r, x)
            r = G(r, K)
            x = h.series.map(function (e) {
              return e.points
            })
            if (0 < x.length) {
              var O = x.flat().sort(function (e, h) {
                return e.dateTick - h.dateTick
              })
              K = v(O)
              O = O.map(function (e) {
                return { tick: e.dateTick, value: e.value }
              })
              n = e(n)
              y = L(r, N, F, y.min, y.max, y.values, y.tickValues)
              C = T(r, N, F, C.min, C.max, C.values, C.tickValues)
              var S = R(y, C)
              W(x, r, S, l.PRICE_TRACKER_TREND_LINE_STYLE)
              B(x, r, S, O, K)
              N = ra(N, F, r, K, y)
              V(n, r, x, y, C, N)
              Wa(O, r, y, F, N)
            }
            E(r, h.textualRepresentation)
          },
          clearGraph: function () {
            h.getD3ElementBasedOnDynamicID(l.PRICE_TRACKER_GRAPH_ID).selectAll('*').remove()
          },
        }
      }),
      D.when(
        'A',
        'jQuery',
        'price-tracker-helper',
        'price-tracker-constants',
        'price-tracker-d3',
        'price-tracker-events-legend-element-helper',
      ).register('price-tracker-events-legend-render', function (n, h, l, r, x, D) {
        function E(h, l) {
          D.createSVGTableCell(h, r.PRICE_TRACKER_SYMBOL_LEGEND_WIDTH)
            .selectAll('g')
            .data(l)
            .enter()
            .append(r.PRICE_TRACKER_EVENT_CIRCLE)
            .attr('id', function (h) {
              return r.PRICE_TRACKER_EVENT_TYPE_MAP[h.type].SYMBOL_ID
            })
            .attr('class', function (h) {
              return r.PRICE_TRACKER_EVENT_TYPE_MAP[h.type].CSS_CLASS
            })
            .attr('r', r.PRICE_TRACKER_EVENT_SYMBOL_RADIUS)
            .attr('cx', r.PRICE_TRACKER_SYMBOL_LEGEND_CX)
            .attr('cy', r.PRICE_TRACKER_SYMBOL_LEGEND_CY)
            .attr('x', '0')
        }
        function N(h, l) {
          D.createTextTableCell(h)
            .selectAll('td')
            .data(l)
            .enter()
            .append('text')
            .attr('class', function (h) {
              return r.PRICE_TRACKER_EVENT_TYPE_MAP[h.type].LABEL_CLASS
            })
            .text(function (h) {
              return h.label
            })
        }
        return {
          renderLegend: function (h) {
            if (h && h.chart) {
              var n = h.chart.eventSeries,
                t = l.getDynamicID(r.PRICE_TRACKER_LEGEND_ID)
              if (0 === l.getElementBasedOnID(t).length) {
                t = l
                  .getD3ElementBasedOnDynamicID(r.PRICE_TRACKER_LEGEND_COMPONENT_ID)
                  .append('table')
                  .attr('id', t)
                  .attr('class', r.PRICE_TRACKER_LEGEND_TABLE_CLASS)
                  .append('tr')
                var e = parseInt(r.PRICE_TRACKER_SYMBOL_LEGEND_CY)
                h.chart.eventSeries && (E(t, n), N(t, n))
                D.addDynamicLegendElements(t, e, n, h)
                l.getElementBasedOnDynamicID(r.PRICE_TRACKER_LEGEND_ID).attr('aria-hidden', !0)
              }
            }
          },
          clearLegend: function () {
            l.getD3ElementBasedOnDynamicID(r.PRICE_TRACKER_LEGEND_COMPONENT_ID)
              .selectAll('*')
              .remove()
          },
        }
      }))
  })
  D.when(
    'A',
    'price-tracker-content-render',
    'price-tracker-content-loader',
    'price-tracker-helper',
    'price-tracker-constants',
    'price-tracker-metrics',
    'price-tracker-latency-metrics',
  ).register('price-tracker-event-handler', function (n, E, h, l, r, x, N) {
    function G(h) {
      n.on(n.constants.BROWSER_EVENTS.RESIZE, O)
      l.registerEvent('a:popover:invisible:' + h, function () {
        n.off(n.constants.BROWSER_EVENTS.RESIZE, O)
        n.off(r.PRICE_TRACKER_GRID_SHOWN_EVENT_NAME)
        E.clearContent()
      })
      l.registerEvent(r.PRICE_TRACKER_IS_LOADED_EVENT_NAME, function () {
        x.stopTimer(N.METRIC_LATENCY_WIDGET)
      })
    }
    D.declare(r.PRICE_TRACKER_ASSETS_LOADED_STATE, { isPriceTrackerAssetsLoaded: !0 })
    var O = function () {
      E.rerenderContent()
    }
    return {
      renderPriceTracker: function (n) {
        try {
          n &&
            n.data &&
            null != n.data.buyingOptionIndex &&
            l.updateBuyingOptionIndex(n.data.buyingOptionIndex)
          var v = l.getDynamicID(r.PRICE_TRACKER_MODAL_NAME)
          G(v)
          h.loadPriceTracker(n)
        } catch (t) {
          x.logCountMetric(x.METRIC_DESKTOP_FATAL),
            l.hideSpinner(),
            l.showFailureMessage(),
            x.stopTimer(N.METRIC_LATENCY_WIDGET),
            l.logError('An error occurred while loading Price Tracker on a desktop client.', t)
        }
      },
    }
  })
})
