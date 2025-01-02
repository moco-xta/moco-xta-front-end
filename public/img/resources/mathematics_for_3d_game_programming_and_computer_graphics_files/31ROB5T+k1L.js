;(function (r) {
  var p = window.AmazonUIPageJS || window.P,
    q = p._namespace || p.attributeErrors,
    g = q ? q('DetailPageMangaAcquisitionAssets', '') : p
  g.guardFatal
    ? g.guardFatal(r)(g, window)
    : g.execute(function () {
        r(g, window)
      })
})(function (r, p, q) {
  !(function (g) {
    function b(h) {
      if (a[h]) return a[h].exports
      var e = (a[h] = { i: h, l: !1, exports: {} })
      return g[h].call(e.exports, e, e.exports, b), (e.l = !0), e.exports
    }
    var a = {}
    b.m = g
    b.c = a
    b.d = function (a, e, k) {
      b.o(a, e) || Object.defineProperty(a, e, { enumerable: !0, get: k })
    }
    b.r = function (b) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(b, Symbol.toStringTag, { value: 'Module' })
      Object.defineProperty(b, '__esModule', { value: !0 })
    }
    b.t = function (a, e) {
      if ((1 & e && (a = b(a)), 8 & e) || (4 & e && 'object' == typeof a && a && a.__esModule))
        return a
      var k = Object.create(null)
      if (
        (b.r(k),
        Object.defineProperty(k, 'default', { enumerable: !0, value: a }),
        2 & e && 'string' != typeof a)
      )
        for (var d in a)
          b.d(
            k,
            d,
            function (b) {
              return a[b]
            }.bind(null, d),
          )
      return k
    }
    b.n = function (a) {
      var e =
        a && a.__esModule
          ? function () {
              return a.default
            }
          : function () {
              return a
            }
      return b.d(e, 'a', e), e
    }
    b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    }
    b.p = ''
    b((b.s = 6))
  })([
    function (g, b, a) {
      function h(a, b, h, m) {
        var g = m.initialBooksSelected,
          A = Object(c.CountingMap)(m.distinctDeliveryPriceBlockCounts),
          u = Number(m.priceOfAllBooksSelected),
          w = Number(m.sourceCurrencyPriceOfAllBooksSelected),
          B = Number(m.shippingFeeOfAllBooksSelected),
          t = void 0 === m.pointsEarned ? null : Number(m.pointsEarned),
          x = m.numberOfSelected3PSellers,
          y = m.numberOfSelected3PFulfillers,
          q = b('#'.concat(C)),
          G = b('.'.concat(D)),
          V = a('.'.concat(n)),
          W = a('.'.concat(v)),
          I = a('.'.concat(H)),
          X = a('.'.concat(J)),
          Y = a('.'.concat(z)),
          Z = a('.'.concat(p)),
          aa = a('.'.concat(E)),
          ba = a('.'.concat(L)),
          N = a('#'.concat(M)),
          O = a('.'.concat(r)),
          Q = a('.'.concat(P)),
          ca = a('.'.concat(R)),
          T = h('.'.concat(S)),
          F = f.SimplePriceFormat.getInstance(m.locale),
          U = function (a, c, b) {
            a.text(F.format({ amount: c, currency: { currencyCode: b } }))
          },
          da = function (a, c) {
            var b = A.getUniqueKeyOrEmpty()
            a ? A.inc(c) : A.dec(c)
            a = A.getUniqueKeyOrEmpty()
            a !== b && ca.html(a)
          }
        return {
          selectBook: function (c) {
            var b = c.isChecked,
              f = c.price,
              n = c.sourceCurrencyPrice,
              C = c.shippingFee,
              v = c.points,
              D = c.hiddenInputCssClass,
              E = c.offerId,
              h = c.deliveryPriceBlockHtml
            !(function (a, c, b) {
              g = a ? g + 1 : g - 1
              var f = !a && 0 === g
              ;((a && 1 === g && !q.isChecked()) || (f && q.isChecked())) && q.toggleChecked()
              V.text(g)
              f = g
              0 === f ? T.disable() : 1 === f && T.enable()
              0 < g ? N.text(m.unselectAllText) : N.text(m.selectAllText)
              var d = g,
                f = 0 < x || 0 < y,
                l = 0 < d - (a ? 1 : -1) && !f
              c && (x = a ? x + 1 : Math.max(0, x - 1))
              b && (y = a ? y + 1 : Math.max(0, y - 1))
              a = 0 < x || 0 < y
              c = 0 < d && !a
              f != a && (a ? e(Q) : k(Q))
              l != c && (c ? e(O) : k(O))
            })(b, c.soldBy3P, c.fulfilledBy3P)
            ;(function (a, c, b) {
              u = l(a ? d(u) + d(c) : d(u) - d(c))
              Z.text(F.format({ amount: u, currency: { currencyCode: b } }))
            })(b, f, m.currencyCode)
            ;(function (a, c) {
              w = l(a ? d(w) + d(c) : d(w) - d(c))
            })(b, n)
            ;(function (a, c, b) {
              B = a ? B + c : B - c
              aa.text(F.format({ amount: B, currency: { currencyCode: b } }))
            })(b, C, m.currencyCode)
            U(W, u, m.currencyCode)
            c = u.toFixed(2).toString().split('.')
            I.find('.a-price-whole').text(c[0])
            I.find('.a-price-fraction').text(c[1])
            U(X, w, m.sourceCurrencyCode)
            null !== t && null !== v && ((t = b ? t + v : t - v), ba.text(t))
            ;(function () {
              if (null !== t && m.currencyCode === m.sourceCurrencyCode) {
                var a = (100 * t) / w || 0
                Y.text((0 > a ? Math.ceil(a) : Math.floor(a)).toFixed())
              }
            })()
            ;(function (c, b, f) {
              var d = a('.'.concat(f, '-asin')),
                l = a('.'.concat(f, '-offer'))
              f = a('.'.concat(f, '-quantity'))
              c
                ? (l.val(b),
                  f.val('1'),
                  d.removeAttr('disabled'),
                  l.removeAttr('disabled'),
                  f.removeAttr('disabled'))
                : (d.attr('disabled', 'disabled'),
                  l.attr('disabled', 'disabled'),
                  f.attr('disabled', 'disabled'))
            })(b, E, D)
            da(b, h)
          },
          toggleAllCheckboxes: function (a) {
            a ? G.check() : G.uncheck()
          },
        }
      }
      function e(a) {
        a.removeClass('aok-hidden')
      }
      function k(a) {
        a.addClass('aok-hidden')
      }
      function d(a) {
        return Math.round(1e12 * a)
      }
      function l(a) {
        return Math.round(a) / 1e12
      }
      a.r(b)
      a.d(b, 'SELECT_ALL_CHECKBOXES', function () {
        return C
      })
      a.d(b, 'BOOK_CHECKBOX', function () {
        return D
      })
      a.d(b, 'NUMBER_OF_BOOKS_SELECTED', function () {
        return n
      })
      a.d(b, 'TOTAL_PRICE', function () {
        return v
      })
      a.d(b, 'TOTAL_PRICE_V2', function () {
        return H
      })
      a.d(b, 'SOURCE_CURRENCY_TOTAL_PRICE', function () {
        return J
      })
      a.d(b, 'POINTS_MULTIPLIER', function () {
        return z
      })
      a.d(b, 'PRICE_ALL_BOOKS_SELECTED', function () {
        return p
      })
      a.d(b, 'SHIPPING_FEE_ALL_BOOKS', function () {
        return E
      })
      a.d(b, 'POINTS_EARNED', function () {
        return L
      })
      a.d(b, '_1P_INFO_TEXT', function () {
        return r
      })
      a.d(b, '_3P_ALERT_TEXT', function () {
        return P
      })
      a.d(b, 'SELECT_ALL_LABEL', function () {
        return M
      })
      a.d(b, 'DELIVERY_PRICE_BLOCK', function () {
        return R
      })
      a.d(b, 'ADD_TO_CART_BUTTON_CLASS', function () {
        return S
      })
      a.d(b, 'PBnXComponent', function () {
        return h
      })
      a.d(b, 'show', function () {
        return e
      })
      a.d(b, 'hide', function () {
        return k
      })
      a.d(b, 'liftToFixedPoint', function () {
        return d
      })
      a.d(b, 'backToFloatingPoint', function () {
        return l
      })
      var c = a(1),
        f = a(2),
        C = 'pbnx-select-all-checkbox',
        D = 'pbnx-book-checkboxes',
        n = 'pbnx-number-books-selected',
        v = 'pbnx-total-price',
        H = 'pbnx-v2-total-price',
        J = 'pbnx-source-currency-total-price',
        z = 'pbnx-points-multiplier',
        p = 'pbnx-price-all-books-selected',
        E = 'pbnx-shipping-fee-all-books',
        L = 'pbnx-points-earned',
        r = 'pbnx-1p-info',
        P = 'pbnx-3p-alert',
        M = 'pbnx-select-all-label',
        R = 'pbnx-delivery-price-block',
        S = 'pbnx-add-to-cart-submit'
    },
    function (g, b, a) {
      function h(a) {
        var b = new Map(),
          d
        for (d in a) b.set(d, a[d])
        return {
          inc: function (a) {
            var c = b.get(a) || 0
            b.set(a, c + 1)
          },
          dec: function (a) {
            var c = b.get(a)
            void 0 !== c && (b.set(a, c - 1), 0 == c - 1 && b.delete(a))
          },
          getUniqueKeyOrEmpty: function () {
            var a = ''
            return (
              1 === b.size &&
                b.forEach(function (c, b) {
                  a = b
                }),
              a
            )
          },
        }
      }
      a.r(b)
      a.d(b, 'CountingMap', function () {
        return h
      })
    },
    function (g, b, a) {
      function h(a, b) {
        for (var c = 0; c < b.length; c++) {
          var f = b[c]
          f.enumerable = f.enumerable || !1
          f.configurable = !0
          'value' in f && (f.writable = !0)
          Object.defineProperty(a, f.key, f)
        }
      }
      a.r(b)
      a.d(b, 'SimplePriceFormat', function () {
        return e
      })
      var e = (function () {
          function a(b) {
            if (!(this instanceof a)) throw new TypeError('Cannot call a class as a function')
            !0
            this.locale = b
          }
          var b, c
          return (
            (c = [
              {
                key: 'getInstance',
                value: function (b) {
                  return new a(b)
                },
              },
            ]),
            (b = [
              {
                key: 'format',
                value: function (a) {
                  return k(this.locale, a.currency.currencyCode)(a.amount)
                },
              },
            ]),
            h(a.prototype, b),
            c && h(a, c),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          )
        })(),
        k = function (a, b) {
          return function (c) {
            try {
              return c.toLocaleString(a, { style: 'currency', currency: b })
            } catch (f) {
              return ''.concat(c.toFixed(2).toString(), ' ').concat(b)
            }
          }
        }
    },
    function (g, b, a) {
      function h(a) {
        var b
        ;(b = (function (a) {
          if (Array.isArray(a)) return e(a)
        })(a)) ||
          (b =
            ('undefined' != typeof Symbol && null != a[Symbol.iterator]) || null != a['@@iterator']
              ? Array.from(a)
              : void 0)
        if (
          !(a =
            b ||
            (function (a, b) {
              if (a) {
                if ('string' == typeof a) return e(a, b)
                var c = Object.prototype.toString.call(a).slice(8, -1)
                'Object' === c && a.constructor && (c = a.constructor.name)
                if ('Map' === c || 'Set' === c) return Array.from(a)
                if ('Arguments' === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                  return e(a, b)
              }
            })(a))
        )
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        return a
      }
      function e(a, b) {
        ;(null == b || b > a.length) && (b = a.length)
        for (var d = 0, e = Array(b); d < b; d++) e[d] = a[d]
        return e
      }
      function k(a) {
        return d.includes(a)
      }
      a.r(b)
      a.d(b, 'isDateOrder', function () {
        return k
      })
      a.d(b, 'PBnXRowSorter', function () {
        return l
      })
      var d = ['oldestFirst', 'newestFirst'],
        l = function (a, b) {
          var d = 'newestFirst',
            e = h(Array(b)).map(function (b, d) {
              return a('#'.concat('pbnx-next-books-list-row-').concat(d))
            })
          return {
            sortBooks: function (b) {
              b !== d &&
                (e.reverse(),
                (d = b),
                a('#'.concat('pbnx-next-x-books-list-root')).after(
                  e.reduce(function (a, b) {
                    return a.concat(b.get())
                  }, []),
                ))
            },
          }
        }
    },
    function (g, b, a) {
      function h(a, b) {
        var c = ('undefined' != typeof Symbol && a[Symbol.iterator]) || a['@@iterator']
        if (!c) {
          if (
            Array.isArray(a) ||
            (c = (function (a, b) {
              if (a) {
                if ('string' == typeof a) return e(a, b)
                var c = Object.prototype.toString.call(a).slice(8, -1)
                'Object' === c && a.constructor && (c = a.constructor.name)
                if ('Map' === c || 'Set' === c) return Array.from(a)
                if ('Arguments' === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
                  return e(a, b)
              }
            })(a)) ||
            (b && a && 'number' == typeof a.length)
          ) {
            c && (a = c)
            var f = 0
            b = function () {}
            return {
              s: b,
              n: function () {
                return f >= a.length ? { done: !0 } : { done: !1, value: a[f++] }
              },
              e: function (a) {
                throw a
              },
              f: b,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var g,
          h = !0,
          n = !1
        return {
          s: function () {
            c = c.call(a)
          },
          n: function () {
            var a = c.next()
            return (h = a.done), a
          },
          e: function (a) {
            n = !0
            g = a
          },
          f: function () {
            try {
              h || null == c.return || c.return()
            } finally {
              if (n) throw g
            }
          },
        }
      }
      function e(a, b) {
        ;(null == b || b > a.length) && (b = a.length)
        for (var c = 0, f = Array(b); c < b; c++) f[c] = a[c]
        return f
      }
      a.r(b)
      a.d(b, 'ClickNDrag', function () {
        return k
      })
      var k = function (a, b) {
        var c = null,
          f = null,
          e = function () {
            return b
              .get()
              .map(function (b) {
                var c = b.getBoundingClientRect()
                return void 0 === c
                  ? null
                  : {
                      position: {
                        left: c.left + p.scrollX,
                        right: c.right + p.scrollX,
                        top: c.top + p.scrollY,
                        bottom: c.bottom + p.scrollY,
                      },
                      aCheckbox: a(b),
                    }
              })
              .filter(function (a) {
                return null !== a
              })
          }
        return {
          bindEvents: function () {
            b.bind('pan', function (a, b) {
              var d
              a: {
                a = b.x
                b = b.y
                null === f && (f = e())
                var g,
                  k = h(f)
                try {
                  for (k.s(); !(g = k.n()).done; ) {
                    var l = g.value
                    if (
                      l.position.left <= a &&
                      a <= l.position.right &&
                      l.position.top <= b &&
                      b <= l.position.bottom
                    ) {
                      d = l.aCheckbox
                      break a
                    }
                  }
                } catch (p) {
                  k.e(p)
                } finally {
                  k.f()
                }
                d = null
              }
              null !== d ? d !== c && ((c = d), d.toggleChecked()) : (c = null)
            }).bind('swipe', function () {
              c = null
            })
          },
          invalidateCachedBoxes: function () {
            f = null
          },
        }
      }
    },
    function (g, b, a) {
      function h(a) {
        var b = a('#'.concat(k)),
          g = a('#'.concat(d)),
          h = a('body')
        return {
          show: function () {
            Object(e.show)(b)
            Object(e.show)(g)
            h.css(l)
          },
          hide: function () {
            Object(e.hide)(b)
            Object(e.hide)(g)
            h.css(c)
          },
        }
      }
      a.r(b)
      a.d(b, 'SIDE_SHEET', function () {
        return k
      })
      a.d(b, 'SIDE_SHEET_DARKEN_BG', function () {
        return d
      })
      a.d(b, 'SideSheet', function () {
        return h
      })
      var e = a(0),
        k = 'pbnx-side-sheet',
        d = 'pbnx-darken-background',
        l = { overflow: 'hidden' },
        c = { overflow: 'scroll' }
    },
    function (g, b, a) {
      a.r(b)
      a.d(b, 'PBnXWidget', function () {
        return l
      })
      var h = a(0),
        e = a(5),
        k = a(3),
        d = a(4),
        l = function (a, b, g, l) {
          var n = a.state('buyNextPBooks')
          if (void 0 === n)
            return (
              (b = function (a) {}),
              { selectBookHandler: b, selectAllBooksHandler: b, sortBooksHandler: b }
            )
          var p = Object(h.PBnXComponent)(b, g, l, n),
            r = Object(k.PBnXRowSorter)(b, n.numberOfBooks),
            q = Object(d.ClickNDrag)(g, b('.pbnx-book-checkboxes'))
          q.bindEvents()
          a.capabilities.mobile &&
            ((0 < n.numberOfSelected3PFulfillers || 0 < n.numberOfSelected3PSellers) &&
              a.on('a:popover:afterShow:pbnxTopSheetSecondaryView', function (a) {
                a.popover.$container[0].style.zIndex = '499'
              }),
            a.on('a:popover:afterShow:pbnxTopSheetSecondaryView', function (b) {
              a.declarative('pbnx-sort-by-release', 'change', z)
              a.off('a:popover:afterShow:pbnxTopSheetSecondaryView')
            }))
          l = function (a) {
            var b = a.data,
              c = b.price,
              d = b.sourceCurrencyPrice,
              e = b.shippingFee,
              f = b.points,
              h = b.soldBy3P,
              k = b.fulfilledBy3P,
              l = b.hiddenInputCssClass,
              n = b.offerId,
              b = b.deliveryPriceBlockHtml
            a = g(a.$target)
            p.selectBook({
              price: Number(c),
              sourceCurrencyPrice: Number(d),
              shippingFee: Number(e),
              points: void 0 === f ? null : Number(f),
              isChecked: a.isChecked(),
              soldBy3P: h,
              fulfilledBy3P: k,
              hiddenInputCssClass: l,
              offerId: n,
              deliveryPriceBlockHtml: b,
            })
          }
          var n = function (a) {
              a = g(a.$target)
              p.toggleAllCheckboxes(a.isChecked())
            },
            z = function (a) {
              a = a.$target.val()
              if (!Object(k.isDateOrder)(a))
                throw new RangeError('Invalid ordering value: '.concat(a))
              r.sortBooks(a)
              q.invalidateCachedBoxes()
            }
          if (
            (a.declarative('pbnx-select-manga', 'change', l),
            a.declarative('pbnx-select-all', 'click', n),
            !a.capabilities.mobile)
          ) {
            var K = Object(e.SideSheet)(b)
            a.declarative('pbnx-show-desktop-sidesheet', 'click', function (a) {
              K.show()
            })
            a.declarative('pbnx-close-side-sheet', 'click', function (a) {
              K.hide()
            })
          }
          return { selectBookHandler: l, selectAllBooksHandler: n, sortBooksHandler: z }
        }
      r.when('A', 'jQuery', 'a-checkbox', 'a-button', 'ready').execute('buyNextXPBooks', l)
    },
  ])
})
