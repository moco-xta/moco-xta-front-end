;(function (e) {
  var f = window.AmazonUIPageJS || window.P,
    k = f._namespace || f.attributeErrors,
    a = k ? k('DetailPageDigitalBulkAssets', '') : f
  a.guardFatal
    ? a.guardFatal(e)(a, window)
    : a.execute(function () {
        e(a, window)
      })
})(function (e, f, k) {
  e.when('A', 'jQuery', 'accordionInstrumentation', 'ready').execute(function (a, b, p) {
    b('.bfoBuyButton').click(function (a) {
      var c = p.counter()
      c &&
        ((a = b(a.currentTarget).find('input').data('bfotype')),
        'con' === a
          ? c.buttonClick('consumerBulkBuyForOthers')
          : 'bus' === a && c.buttonClick('bulkBuyButton'))
    })
  })
  e.when('A', 'ready').execute(function (a) {
    var b = f.ue
    a.on('a:popover:show:digitalBulkQuantityDiscountsPopover', function (a) {
      b &&
        b.count &&
        b.count(
          'digitalBulkQuantityDiscountsShow',
          1 + (b.count('digitalBulkQuantityDiscountsShow') || 0),
        )
    })
  })
  e.when('A', 'ready').execute(function (a) {
    var b = f.ue
    a.on('a:popover:show:digitalBulkHowDeliveryWorksPopover', function (a) {
      a &&
        a.popover &&
        a.popover.data &&
        a.popover.data.bfotype &&
        ((a =
          'con' === a.popover.data.bfotype
            ? 'digitalBulkConsumerHowDeliveryWorksShow'
            : 'digitalBulkHowDeliveryWorksShow'),
        b && b.count && b.count(a, 1 + (b.count(a) || 0)))
    })
  })
  e.when('A', 'ready').execute(function (a) {
    var b = f.ue
    a.on('a:popover:show:consumerBuyForOthersPopover', function (a) {
      b &&
        b.count &&
        b.count(
          'consumerBuyForOthersWithADLPopoverShow',
          1 + (b.count('consumerBuyForOthersPopoverShow') || 0),
        )
    })
  })
  e.register('simpleQuantityUIManager', function () {
    return {
      refresh: function (a) {
        this.quantityTextField.val(a)
        this.quantityFormField.val(a)
        this.changeButtonOnUpdate && this.initialized && this.makeButtonPrimary()
        this.textboxOnly ||
          (this.isQuantityLessThanMaxFreeFormDropdownQuantity(a)
            ? (this.hideQuantityTextField(),
              this.quantityDropdownSelect.val(a),
              this.showQuantityDropdown())
            : (this.hideQuantityDropdown(), this.showQuantityTextField()))
      },
      showQuantityTextField: function () {
        this.quantityTextField.hasClass(this.hideCss) &&
          (this.quantityTextField.removeClass(this.hideCss),
          this.quantityTextFieldBox.removeClass(this.hideCss),
          this.quantityTextField.focus())
      },
      hideQuantityTextField: function () {
        this.quantityTextField.addClass(this.hideCss)
        this.quantityTextFieldBox.addClass(this.hideCss)
        this.hideQuantityWarning()
      },
      showQuantityDropdown: function () {
        this.quantityDropdown.removeClass(this.hideCss)
      },
      hideQuantityDropdown: function () {
        this.quantityDropdown.addClass(this.hideCss)
      },
      showQuantityWarning: function (a) {
        this.quantityLimitMessage.removeClass(this.hideCss)
        var b = this
        this.A.slideDown(this.quantityLimitMessage, 300, 'ease-out', function () {
          b.quantityTextField.val(a)
        })
      },
      hideQuantityWarning: function () {
        var a = this
        this.A.slideUp(this.quantityLimitMessage, 500, 'ease-out', function () {
          a.quantityLimitMessage && a.quantityLimitMessage.addClass(a.hideCss)
        })
      },
      makeButtonPrimary: function () {
        this.callToActionButton.addClass('a-button-primary')
      },
      isQuantityLessThanMaxFreeFormDropdownQuantity: function (a) {
        return a >= this.minDropDownQuantity && a <= this.maxDropDownQuantity
      },
    }
  })
  e.when(
    'A',
    'jQuery',
    'a-dropdown',
    'cf',
    'simpleQuantityPickerParams',
    'simpleQuantityUIManager',
  ).execute(function (a, b, e, f, c, d) {
    function k(a) {
      d.hideQuantityWarning()
      var b = m()
      d.refresh(b)
      a = a.event ? a.event : a.$event
      13 === a.keyCode && (a.preventDefault(), g.focus())
    }
    function q(a) {
      a = g.val()
      var b = a.replace(/\D/g, '')
      a !== b && g.val(b)
      n.val(m())
    }
    function m() {
      var a = g.val(),
        a = parseInt(a) || 0
      a > c.maxQuantity
        ? ((a = c.maxQuantity), d.showQuantityWarning(a))
        : (a = a < c.minDropDownQuantity ? c.minDropDownQuantity : a)
      return a
    }
    function r(a) {
      a = a.$event
      var b
      ;(b = (a.shiftKey && 9 !== a.keyCode) || a.ctrlKey || a.altKey) ||
        ((b = a.keyCode),
        (b = !(
          (48 <= b && 57 >= b) ||
          (96 <= b && 105 >= b) ||
          8 === b ||
          46 === b ||
          9 === b ||
          36 === b ||
          35 === b ||
          37 === b ||
          39 === b ||
          13 === b
        )))
      b && a.preventDefault()
      13 === a.keyCode && g.blur()
    }
    function t(a) {
      d.refresh(l.val())
    }
    if (null !== c) {
      var n = b('#quantity-form-field'),
        g = b('#quantity-update-text')
      f = b('#quantity-update-text-outer')
      var l = e.getSelect('#quantity-dropdown-select')
      e = b('#quantity-dropdown')
      var h = b('#quantity-picker-warning'),
        u = c.changeButtonOnUpdate
      b = b(c.callToActionButtonId)
      d.initialized = !1
      d.textboxOnly = c.textboxOnly
      d.hideCss = c.hideCss
      d.quantityFormField = n
      d.quantityTextField = g
      d.quantityTextFieldBox = f
      d.quantityDropdownSelect = l
      d.quantityDropdown = e
      d.quantityLimitMessage = h
      d.callToActionButton = b
      d.changeButtonOnUpdate = u
      d.minDropDownQuantity = c.minDropDownQuantity
      d.maxDropDownQuantity = c.maxDropDownQuantity
      d.A = a
      e = c.maxQuantity <= c.maxDropDownQuantity ? c.maxQuantity : c.maxDropDownQuantity
      b = 0
      f = !1
      for (h = c.minDropDownQuantity; h <= e; h++)
        l.addOption({ text: h.toString(), value: h.toString() }, b++), h === c.quantity && (f = !0)
      c.maxQuantity > c.maxDropDownQuantity &&
        ((e = c.maxDropDownQuantity + 1),
        l.addOption(
          {
            text: e.toString() + '+',
            value: e.toString(),
            id: 'quantity-last-option',
            nativeId: 'quantityToggleOption',
          },
          b,
        ))
      f && l.setValue(c.quantity)
      d.refresh(m())
      d.initialized = !0
      a.declarative('quantity-update-text-action', 'keydown', r)
      a.declarative('quantity-update-text-action', 'keyup', q)
      a.declarative('quantity-update-text-action', 'focusout', k)
      a.declarative('quantity-dropdown-action', 'change', t)
      g.bind('paste', function (a) {
        a.preventDefault()
      })
    }
  })
  e.when('jQuery', 'ready').register('simpleQuantityPickerParams', function (a) {
    a = a('#bfoSimpleQuantityPickerParams')
    return 1 !== a.length
      ? null
      : {
          autoCorrect: a.data('auto-correct'),
          changeButtonOnUpdate: a.data('change-on-update'),
          callToActionButtonId: a.data('call-to-action-id'),
          maxQuantity: a.data('max-quantity'),
          minDropDownQuantity: a.data('min-drop-down-quantity'),
          maxDropDownQuantity: a.data('max-drop-down-quantity'),
          hideCss: a.data('hide-css'),
          quantity: a.data('quantity'),
          textboxOnly: a.data('textbox-only'),
        }
  })
})
