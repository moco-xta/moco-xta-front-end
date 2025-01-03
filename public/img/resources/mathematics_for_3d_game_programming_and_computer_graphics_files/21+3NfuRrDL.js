;(function (d) {
  var b = window.AmazonUIPageJS || window.P,
    g = b._namespace || b.attributeErrors,
    a = g ? g('DetailPageNostosAssets', '') : b
  a.guardFatal
    ? a.guardFatal(d)(a, window)
    : a.execute(function () {
        d(a, window)
      })
})(function (d, b, g) {
  d.when('A').register('nostos-metrics', function (a) {
    return {
      addCSMTag: function (a) {
        b.ue && b.ue.tag && b.ue.tag(a)
      },
      addCount: function (a) {
        b.ue && b.ue.count && b.ue.count(a, (b.ue.count(a) || 0) + 1)
      },
    }
  })
  d.declare('nostos-buybox-config', {
    selectors: {
      buyboxTabSet: '#offerDisplayGroupTabSet',
      buyboxAccordionRows: '#buyBoxAccordion',
      nostosBadges: 'buyingOptionNostosBadge_feature_div',
    },
    tabs: {
      tab_desktop_buybox_group_1: '#tab_heading_desktop_buybox_group_1',
      tab_desktop_buybox_group_2: '#tab_heading_desktop_buybox_group_2',
      tab_mobile_buybox_group_1: '#tab_heading_mobile_buybox_group_1',
      tab_mobile_buybox_group_2: '#tab_heading_mobile_buybox_group_2',
      tab_mobileapp_buybox_group_1: '#tab_heading_mobileapp_buybox_group_1',
      tab_mobileapp_buybox_group_2: '#tab_heading_mobileapp_buybox_group_2',
    },
    accordionRowsToNostos: {
      newAccordionRow: 'NEW_1_nostos_badge',
      SecondNewAccordionRow: 'NEW_2_nostos_badge',
      pwBuyBoxAccordionRow: 'PRIME_WARDROBE_1_nostos_badge',
      usedAccordionRow: 'USED_1_nostos_badge',
      snsAccordionRow: 'SNS_1_nostos_badge',
      snsAccordionRowMovedUp: 'SNS_1_nostos_badge',
      snsAccordionRowMiddle: 'SNS_1_nostos_badge',
      snsAccordionRowMobileMiddle: 'SNS_1_nostos_badge',
      snsAccordionRowMobileAppMiddle: 'SNS_1_nostos_badge',
      dealsAccordionRow: 'LIGHTNING_DEAL_1_nostos_badge',
      renewedTier1AccordionRow: 'RENEWED_TIER_1_1_nostos_badge',
      mobile_renewedTier1AccordionRow: 'RENEWED_TIER_1_1_nostos_badge',
      mobileApp_renewedTier1AccordionRow: 'RENEWED_TIER_1_1_nostos_badge',
      renewedTier2AccordionRow: 'RENEWED_TIER_2_1_nostos_badge',
      mobile_renewedTier2AccordionRow: 'RENEWED_TIER_2_1_nostos_badge',
      mobileApp_renewedTier2AccordionRow: 'RENEWED_TIER_2_1_nostos_badge',
      renewedTier3AccordionRow: 'RENEWED_TIER_3_1_nostos_badge',
      mobile_renewedTier3AccordionRow: 'RENEWED_TIER_3_1_nostos_badge',
      mobileApp_renewedTier3AccordionRow: 'RENEWED_TIER_3_1_nostos_badge',
      renewedTier4AccordionRow: 'RENEWED_TIER_4_1_nostos_badge',
      mobile_renewedTier4AccordionRow: 'RENEWED_TIER_4_1_nostos_badge',
      mobileApp_renewedTier4AccordionRow: 'RENEWED_TIER_4_1_nostos_badge',
    },
    nostosToAccordionRows: {
      NEW_1_nostos_badge: [
        'newAccordionRow_0',
        'newAccordionRow_1',
        'newAccordionRow_2',
        'newAccordionRow_3',
      ],
      NEW_2_nostos_badge: [
        'newAccordionRow_1',
        'newAccordionRow_2',
        'newAccordionRow_3',
        'newAccordionRow_4',
      ],
      PRIME_WARDROBE_1_nostos_badge: ['pwBuyBoxAccordionRow'],
      USED_1_nostos_badge: ['usedAccordionRow'],
      SNS_1_nostos_badge: [
        'snsAccordionRow',
        'snsAccordionRowMovedUp',
        'snsAccordionRowMiddle',
        'snsAccordionRowMobileMiddle',
        'snsAccordionRowMobileAppMiddle',
      ],
      LIGHTNING_DEAL_1_nostos_badge: ['dealsAccordionRow'],
      RENEWED_TIER_1_1_nostos_badge: [
        'renewedTier1AccordionRow',
        'mobile_renewedTier1AccordionRow',
        'mobileApp_renewedTier1AccordionRow',
      ],
      RENEWED_TIER_2_1_nostos_badge: [
        'renewedTier2AccordionRow',
        'mobile_renewedTier2AccordionRow',
        'mobileApp_renewedTier2AccordionRow',
      ],
      RENEWED_TIER_3_1_nostos_badge: [
        'renewedTier3AccordionRow',
        'mobile_renewedTier3AccordionRow',
        'mobileApp_renewedTier3AccordionRow',
      ],
      RENEWED_TIER_4_1_nostos_badge: [
        'renewedTier4AccordionRow',
        'mobile_renewedTier4AccordionRow',
        'mobileApp_renewedTier4AccordionRow',
      ],
    },
    nostosToSingleOffer: {
      NEW_1_nostos_badge: [
        'qualifiedBuybox_globalMatchbox_3',
        'qualifiedBuybox_globalMatchbox_2',
        'qualifiedBuybox_globalMatchbox_1',
        'qualifiedBuybox',
      ],
      USED_1_nostos_badge: ['used_buybox_desktop', 'used_buybox_mobile', 'used_buybox_mobileApp'],
      PICKUP_1_nostos_badge: [
        'pickupOfferDisplay_Desktop',
        'pickupOfferDisplay_Mobile',
        'pickupOfferDisplay_MobileApp',
      ],
      LIGHTNING_DEAL_1_nostos_badge: [
        'deals_singleOfferDisplay_Desktop',
        'deals_singleOfferDisplay_Mobile',
        'deals_singleOfferDisplay_MobileApp',
      ],
    },
  })
  ;('use strict')
  d.when('A', 'nostos-metrics', 'nostos-buybox-config', 'atf').register(
    'nostos-buying-option-controller',
    function (a, b, h) {
      var e = a.$
      b.addCSMTag('buyingOptionNostos')
      var d,
        r,
        l,
        k,
        t = function () {
          d = 0 < e(h.selectors.buyboxTabSet).length
          r = 0 < e(h.selectors.buyboxAccordionRows).length
          for (
            var f = document.querySelectorAll('#buyingOptionNostosBadge_feature_div \x3e div'),
              a = [],
              c = 0;
            c < f.length;
            c++
          )
            a.push(f[c].id)
          l = a
          if (d)
            a: {
              for (var b in h.tabs)
                if (e(h.tabs[b]).hasClass('a-active')) {
                  k = b
                  break a
                }
              k = g
            }
        }
      t()
      var u = function (f) {
          f = h.nostosToSingleOffer[f]
          if (f !== g)
            for (var a = 0; a < f.length; a++)
              if (0 < e('#' + f[a]).length) {
                var b = f[a]
                if (d) {
                  if (
                    document.getElementById(k) !== g &&
                    document.getElementById(k).contains(document.getElementById(b))
                  )
                    return !0
                } else return !0
              }
          return !1
        },
        m = function (a) {
          e(a).addClass('aok-hidden')
        },
        p = function (a) {
          e(a).removeClass('aok-hidden')
        },
        q = function () {
          for (var a = 0; a < l.length; a++) {
            var b = l[a]
            if (r) {
              a: {
                var c = h.nostosToAccordionRows[b]
                if (c !== g)
                  for (var n = 0; n < c.length; n++)
                    if (e('#' + c[n]).hasClass('a-accordion-active')) {
                      var m = c[n]
                      if (d) {
                        if (
                          document.getElementById(k) !== g &&
                          document.getElementById(k).contains(document.getElementById(m))
                        ) {
                          c = !0
                          break a
                        }
                      } else {
                        c = !0
                        break a
                      }
                    }
                c = !1
              }
              if (c || u(b)) {
                p('#' + l[a])
                break
              }
            } else if (u(b)) {
              p('#' + l[a])
              break
            }
          }
        }
      q()
      ;(function () {
        a.on('a:tabs:offerDisplayGroup_tabs:select', function (a) {
          m(e('[id$\x3d_nostos_badge]'))
          k = a.selectedTab.tabName
          q()
        })
      })()
      ;(function () {
        a.on('a:accordion:buybox-accordion:select', function (a) {
          m(e('[id$\x3d_nostos_badge]'))
          p('#' + h.accordionRowsToNostos[a.selectedRow.rowName])
        })
      })()
      ;(function () {
        a.on('a:pageUpdate', function () {
          m(e('[id$\x3d_nostos_badge]'))
          t()
          q()
        })
      })()
    },
  )
})
