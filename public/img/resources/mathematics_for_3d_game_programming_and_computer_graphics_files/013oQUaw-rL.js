;(function (b) {
  var c = window.AmazonUIPageJS || window.P,
    f = c._namespace || c.attributeErrors,
    a = f ? f('DetailPageEbooksDeviceSupportAssets', '') : c
  a.guardFatal
    ? a.guardFatal(b)(a, window)
    : a.execute(function () {
        b(a, window)
      })
})(function (b, c, f) {
  b.when('A', 'ready').execute(function (a) {
    var b = !1,
      d = a.state('deviceRestrictionPopoverState')
    if (d) {
      var e = d.metricName
      a.on('a:popover:beforeShow:' + d.deviceRestrictionPopoverName, function (a) {
        ue && ue.count && !b && (ue.count(e, (ue.count(e) || 0) + 1), (b = !0))
      })
    }
    if ((d = a.state('supportedDevicesPopoverState'))) {
      var c = d.supportedDevicesPopoverName,
        e = d.metricName
      a.on('a:popover:beforeShow:' + c, function (a) {
        ue && ue.count && !b && (ue.count(e, (ue.count(e) || 0) + 1), (b = !0))
      })
    }
  })
})
