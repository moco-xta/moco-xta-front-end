;(function (c) {
  var d = window.AmazonUIPageJS || window.P,
    h = d._namespace || d.attributeErrors,
    a = h ? h('DetailPageQRMAssets', '') : d
  a.guardFatal
    ? a.guardFatal(c)(a, window)
    : a.execute(function () {
        c(a, window)
      })
})(function (c, d, h) {
  c.when('singletonPopupModal', 'a-dropdown', 'jQuery', 'csm-counter').register(
    'quantity-restriction-messaging',
    function (a, d, k, l) {
      return {
        quantityModal: function (e) {
          var c = k('#quantity'),
            g = k('#cspQuantity'),
            f = function () {
              var b = {}
              return 'lastQuantityOption' === c.find('option:selected').attr('data-a-id')
                ? ((b.id = c),
                  (b.dropdown = 'quantity'),
                  (b.popoverTitle = e.popoverTitle),
                  (b.message = e.message),
                  (b.plusOne = e.moq),
                  b)
                : 'lastQuantityOption' === g.find('option:selected').attr('data-a-id')
                  ? ((b.id = g),
                    (b.dropdown = 'cspQuantity'),
                    (b.popoverTitle = e.popoverTitle),
                    (b.message = e.cspMessage),
                    (b.plusOne = e.cspMOQ),
                    b)
                  : null
            },
            m = function () {
              var b = f()
              null !== b &&
                b.message &&
                (a.show(
                  {
                    width: 502,
                    position: 'triggerRight',
                    header: b.popoverTitle,
                    inlineContent: b.message.replace(/MAX_QUANTITY_PLUS_ONE/g, b.plusOne),
                  },
                  !0,
                ),
                (b.id.selectedIndex = 0),
                (b = d.getSelect(b.dropdown)) && b.getOption(0).update({ selected: !0 }),
                l.increment('last-quantity-option-click-count'))
            }
          c.change(m)
          g.change(m)
          m()
        },
      }
    },
  )
  ;('use strict')
  c.when('A').register('csm-counter', function (a) {
    var c = a.$
    return {
      register: function (k, a, e) {
        k && a && e && c(k).bind(a, c.proxy(this.increment, this, e))
      },
      increment: function (a) {
        a && d.ue.count(a, (d.ue.count(a) || 0) + 1)
      },
      update: function (a, c) {
        a && 'number' === typeof c && d.ue.count(a, c)
      },
    }
  })
  ;('use strict')
  c.when('A', 'jQuery', 'a-modal').register('singletonPopupModal', function (a, c, d) {
    function l(a) {
      null === f ? ((g = h.appendTo(c('body'))), (f = d.create(g, a))) : f.update(a)
      f.show()
    }
    function e() {
      f && f.hide()
    }
    var h = c('\x3cdiv style\x3d"display:none"\x3e'),
      g = null,
      f = null
    a.declarative('cfg-singleton-modal-close', 'click', e)
    a.declarative('cfg-singleton-modal-open', 'click', function (a) {
      l(
        {
          inlineContent: a.data.inlineContent,
          header: a.data.header,
          width: a.data.width || '502',
          position: 'triggerRight',
        },
        !0,
      )
    })
    return {
      show: l,
      hide: e,
      destroy: function () {
        f && (d.remove(f), (f = null))
      },
    }
  })
})
