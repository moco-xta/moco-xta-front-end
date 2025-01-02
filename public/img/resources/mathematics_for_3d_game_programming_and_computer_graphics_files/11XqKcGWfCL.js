;(function (g) {
  var f = window.AmazonUIPageJS || window.P,
    h = f._namespace || f.attributeErrors,
    d = h ? h('DetailPageKindleRewardsRedemptionAssets', '') : f
  d.guardFatal
    ? d.guardFatal(g)(d, window)
    : d.execute(function () {
        g(d, window)
      })
})(function (g, f, h) {
  g.when('A').register('bifrost-list-param-update-module', function (d) {
    function c(a, b) {
      if (0 === d.$('#buyOneClick input[name\x3d"' + a + '"]').length && b) {
        var c = document.createElement('input')
        c.setAttribute('type', 'hidden')
        c.setAttribute('name', a)
        c.setAttribute('value', b)
        var e = document.getElementById('buyOneClick')
        e && (e.insertBefore(c, e.firstChild), (e[a].value = b))
      }
    }
    function f(a) {
      var b = document.getElementById('buyOneClick')
      if (b)
        for (var d = b.querySelectorAll('input[name^\x3d"' + a + '"]'), f = 0; f < d.length; f++)
          b.removeChild(d[f])
      for (b = 0; b < e[a].length; b++) c(a + '[' + b + ']', e[a][b])
    }
    var e = {}
    return {
      appendToBuyOneClickListInput: function (a, b) {
        e[a] || (e[a] = [])
        0 ===
          e[a].filter(function (a) {
            return a === b
          }).length && e[a].push(b)
        f(a)
      },
      removeFromBuyOneClickListInput: function (a, b) {
        e[a] &&
          ((e[a] = e[a].filter(function (a) {
            return a !== b
          })),
          f(a))
      },
      createHiddenFieldIfNotPresent: c,
      deleteFormFieldByName: function (a) {
        var b = document.getElementById('buyOneClick')
        b && ((a = b.querySelector('[name\x3d"' + a + '"]')), null != a && b.removeChild(a))
      },
    }
  })
  g.when('bifrost-list-param-update-module', 'A').execute(
    'kindle-rewards-redemption-checkbox-toggle-script',
    function (d, c) {
      try {
        var g = function (a) {
            a
              ? ((a = c.$('#kindleRewardPointsBalanceDetail').attr('payment-method-id')),
                d.createHiddenFieldIfNotPresent(
                  'payment.kindlePoints[0].paystationPaymentMethodId',
                  a,
                ),
                d.appendToBuyOneClickListInput('payment.availableBalances', 'KindlePoints'),
                d.appendToBuyOneClickListInput('payment.applicableBalances', 'KindlePoints'))
              : (d.deleteFormFieldByName('payment.kindlePoints[0].paystationPaymentMethodId'),
                d.removeFromBuyOneClickListInput('payment.availableBalances', 'KindlePoints'),
                d.removeFromBuyOneClickListInput('payment.applicableBalances', 'KindlePoints'))
          },
          e = function () {
            var a = c.$('#krrCheckbox').is(':checked')
            c.hide(c.$(a ? '#krrUncheckedDisplayText' : '#krrCheckedDisplayText'))
            c.show(c.$(a ? '#krrCheckedDisplayText' : '#krrUncheckedDisplayText'))
            g(a)
            c.trigger('kindleRewardsCheckboxToggled', a)
          }
        c.declarative('krrCheckboxAction', 'change', function (a) {
          e()
        })
        c.declarative('krrCheckboxLabelTextAction', 'click', function (a) {
          ;(a && 'a' === a.targetTag) ||
            (c.$('#krrCheckbox').prop('checked', !c.$('#krrCheckbox').is(':checked')), e())
        })
        g(c.$('#krrCheckbox').is(':checked'))
      } catch (a) {
        f.ueLogError &&
          f.ueLogError(a, {
            logLevel: 'FATAL',
            attribution: 'kindle_rewards_redemption_checkbox_toggle_script_error',
            message: 'Kindle Rewards buybox checkbox handler encountered an exception',
          })
      }
    },
  )
})
