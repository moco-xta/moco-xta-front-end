import React from 'react'
import { useTranslations } from 'next-intl'

import type { TMenuParagraphData, TSideNavigationMenu } from '@/types/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getIndexByPropertyValue } from '@/helpers/pageHelpers'

import './index.scss'

export default function SideNavigationMenuRight({ pageData }: TSideNavigationMenu) {
  const t = useTranslations()

  const { menuRef, currentSection, currentParagraph, handleSetCurrentParagraph } = usePageContext()

  function handleOnClick(paragraphData: TMenuParagraphData) {
    if (paragraphData.key !== 'introduction') {
      const paragraphElement = document.getElementById(`${paragraphData.key}_paragraph`)
      if (paragraphElement) {
        paragraphElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    } /*  else {
      document.getElementById(`${pageData.key}_content`)!.scrollTo({ top: 0, behavior: 'smooth' })
    } */
    handleSetCurrentParagraph(paragraphData)
  }

  return (
    <nav className='side_navigation_menu_right'>
      {currentSection.key !== 'introduction' && (
        <p className='sdm_item_right side_navigation_menu_title'>
          {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_SECTION'))}
        </p>
      )}
      <ol className='sdm_paragraphs_ol'>
        {currentSection.key !== 'introduction' && (
          <li
            key={`sdm_paragraph_li_introduction`}
            className='sdm_item sdm_paragraph_li'
          >
            <a
              className={`sdm_a sdm_paragraph_a ${currentParagraph?.key === 'introduction' ? 'sdm_current' : 'read'}`}
              onClick={() =>
                handleOnClick({
                  key: 'introduction',
                  translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
                  logoName: 'LogoAngular',
                })
              }
            >
              {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION'))}
            </a>
          </li>
        )}
        {menuRef.current.sections
          .filter((sectionData) => sectionData.key === currentSection.key)
          .map((sectionData) => {
            const translationPathRef = `${pageData.translationKey}.SECTIONS.${sectionData.translationKey}`

            return sectionData.paragraphs.map((paragraphData) => (
              <li
                key={`sdm_paragraph_li_${sectionData.key}_${paragraphData.key}`}
                className='sdm_item sdm_paragraph_li'
              >
                <a
                  className={`sdm_a sdm_paragraph_a ${currentParagraph.key === paragraphData.key ? 'sdm_current' : getIndexByPropertyValue(currentSection.paragraphs, 'key', currentParagraph!.key) > getIndexByPropertyValue(currentSection.paragraphs, 'key', paragraphData!.key) ? 'read' : ''}`}
                  onClick={() => handleOnClick(paragraphData)}
                >
                  {capitalizeFirstLetter(
                    t(
                      `${translationPathRef}.PARAGRAPHS.${paragraphData.translationKey}.PARAGRAPH_TITLE`,
                    ),
                  )}
                </a>
              </li>
            ))
          })}
      </ol>
    </nav>
  )
}
