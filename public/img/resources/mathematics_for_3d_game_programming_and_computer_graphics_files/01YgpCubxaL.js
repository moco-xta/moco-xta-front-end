;(function (d) {
  var e = window.AmazonUIPageJS || window.P,
    f = e._namespace || e.attributeErrors,
    c = f ? f('InstallmentPaymentDetailPageAssets', '') : e
  c.guardFatal
    ? c.guardFatal(d)(c, window)
    : c.execute(function () {
        d(c, window)
      })
})(function (d, e, f) {
  function c(a) {
    var b = a.$("select[name\x3d'quantity']").val(),
      c = a.$('#installmentsQuantityDropdown').val()
    if (b !== c) {
      var d = 1,
        e,
        f = 0,
        c = a.$('#installmentsQuantityDropdown option')
      c.each(function (a, b) {
        e = b.value
        f = d = Math.max(f, e)
      })
      b > d && (b = d)
      c.length
        ? a.$('#installmentsQuantityDropdown').val(b).trigger('change')
        : (a.$("[name\x3d'quantity']").val(b).trigger('change'),
          a.$("[name\x3d'items[0.base][quantity]']").val(b))
    }
  }
  d.when('A', 'ready').execute('installments-atc-switch-endpoint', function (a) {
    function b() {
      !0 === c.shouldUseNatc &&
        d &&
        a
          .$('#installmentPaymentAccordionRow')
          .find('form')
          .attr('action', '/cart/add-to-cart/ref\x3ddp_start-bbf_1_glance')
    }
    var c = a.state('installments-atc-page-state')
    if (c !== f) {
      var d = /\/gp\/product\/handle-buy-box\//.test(
        a.$('#installmentPaymentAccordionRow').find('form').attr('action'),
      )
      b()
      a.on('a:pageUpdate', function () {
        b()
      })
    }
  })
  d.when('A').execute('installment-quantity-dropdown', function (a) {
    a.declarative('installment-quantity-dropdown', 'change', function (b) {
      b = b.$event.target.value
      a.$("[name\x3d'quantity']").val(b).trigger('change')
      a.$("[name\x3d'items[0.base][quantity]']").val(b)
    })
  })
  d.when('A').execute(function (a) {
    a.on(
      'a:accordion:installment-payment-buybox-accordion:installment-payment-accordion-row:select',
      function (b) {
        c(a)
      },
    )
  })
  d.when('A').execute(function (a) {
    a.on('a:accordion:buybox-accordion:installmentPaymentAccordionRow:select', function (b) {
      c(a)
    })
  })
  d.when('A').execute(function (a) {
    a.on('a:accordion:buybox-accordion:mobile_installmentPaymentAccordionRow:select', function (b) {
      c(a)
    })
  })
  d.when('A').execute(function (a) {
    a.on(
      'a:accordion:buybox-accordion:mobileapp_installmentPaymentAccordionRow:select',
      function (b) {
        c(a)
      },
    )
  })
})
