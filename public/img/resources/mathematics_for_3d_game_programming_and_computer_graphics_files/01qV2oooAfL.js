;(function (a) {
  var b = window.AmazonUIPageJS || window.P,
    e = b._namespace || b.attributeErrors,
    c = e ? e('DetailPageKcpAppAssets', '') : b
  c.guardFatal
    ? c.guardFatal(a)(c, window)
    : c.execute(function () {
        a(c, window)
      })
})(function (a, b, e) {
  function c(c, f, d, a) {
    c.preventDefault()
    a = d.$(a)
    var b = f.get(a)
    b || (b = f.create(a, d.state('kcpAppModalOptions')))
    b.show()
    c.stopPropagation()
  }
  a.when('A', 'a-modal', 'ready').execute(function (a, b) {
    a.$(document).delegate('.kcpAppsPopOver', 'click', function (d) {
      c(d, b, a, '.kcpAppsPopOver')
    })
    a.$('#kcpAppsPopOver-wrapper').keyup(function (d) {
      13 === d.keyCode && c(d, b, a, '.kcpAppsPopOver')
    })
  })
})
