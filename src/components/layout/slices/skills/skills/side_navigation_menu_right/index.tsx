import React from 'react'
import { useTranslations } from 'next-intl'

import type { TSideNavigationMenu } from '@/types/components/layout/types'
import type { TParagraphData } from '@/types/data/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getIndexByPropertyValue } from '@/helpers/pageHelpers'

import './index.scss'

export default function SideNavigationMenuRight({ pageData }: TSideNavigationMenu) {
  const t = useTranslations()

  const { currentSection, currentParagraph, handleSetCurrentParagraph } = usePageContext()

  function handleOnClick(paragraphData: TParagraphData) {
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
        {pageData.sections
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
