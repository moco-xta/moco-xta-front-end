;(function (d) {
  var e = window.AmazonUIPageJS || window.P,
    k = e._namespace || e.attributeErrors,
    a = k ? k('DetailPageSeriesSubscriptionsAssets', '') : e
  a.guardFatal
    ? a.guardFatal(d)(a, window)
    : a.execute(function () {
        d(a, window)
      })
})(function (d, e, k) {
  d.when('A', 'jQuery', 'baymax-series-subscription-utility', 'a-popover').register(
    'baymax-series-subscription',
    function (a, h, f, l) {
      a.declarative('baymaxBiFrostButton', 'click', function (b) {
        try {
          f.subscribeToSeriesApi(b), l.remove('baymaxSubscribeStep2')
        } catch (c) {
          logMetric('SeriesSubscriptionUISignupError')
        }
      })
      h('#series_subscription_button_step_1').click(function (b) {
        f.makeReftagCallApi(b)
      })
    },
  )
  ;('use strict')
  d.when('A', 'jQuery', 'inline-buy-utility', 'a-popover').register(
    'baymax-series-subscription-utility',
    function (a, h, f) {
      return {
        subscribeToSeriesApi: function (a) {
          var b,
            c = a.$declarativeParent.data('baymaxbifrostbutton')
          b = c.positionLabel
          var d = 'itemSpinner_' + b,
            g = h('#itemSpinner').clone()
          g.attr('id', d)
          var d = c.actionType,
            e = f.parentUntilApi(a.$target, '.series-subscribe-widget')
          e.prepend(g)
          f.positionOnApi(e, 'center', g)
          g.css('display', 'table')
          f.greyOutElementApi(e)
          g = h('#series-sub-glide-button-csrf-override').data('csrf')
          b = new f.bifrostParametersApi(
            c.actionUrl + '\x26x-client-id\x3d' + c.x_client_id,
            g,
            c.x_client_id,
            b,
            c.asin,
            '',
            d,
          )
          h('#deliverTo [name\x3d"target-fiona.0"]').length &&
            ((c = h('#deliverTo [name\x3d"target-fiona.0"]')),
            (g = c.find('option:selected').length - 1),
            (b.device = { encryptedId: c.find('option:selected')[g].value }))
          f.callBifrostApi(a, b, function () {})
        },
        makeReftagCallApi: function (a) {
          h.ajax({
            url: '/kindle-dbs/reftag?ref\x3d' + a.target.getAttribute('data-refTag'),
            type: 'GET',
            success: function (a) {},
            error: function (a) {},
          })
        },
      }
    },
  )
})
