import React from 'react'
import { useTranslations } from 'next-intl'

import type { TMenuSectionData, TSideNavigationMenu } from '@/types/components/layout/types'

import { usePageContext } from '@/contexts/PageContext'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getIndexByPropertyValue } from '@/helpers/pageHelpers'

import './index.scss'

export default function SideNavigationMenuLeft({ pageData }: TSideNavigationMenu) {
  const t = useTranslations()

  const { menuRef, currentSection, handleSetCurrentSection } = usePageContext()

  function handleOnClick(sectionData: TMenuSectionData) {
    handleSetCurrentSection(sectionData)
  }

  return (
    <nav className='side_navigation_menu'>
      <p>
        {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_PAGE'))}
      </p>
      <ol>
        {menuRef.current.sections.map((sectionData) => {
          const translationPathRef = `${pageData.translationKey}.SECTIONS.${sectionData.translationKey}`

          return (
            <li
              key={`sdm_section_li_${sectionData.key}`}
              className='sdm_item_left sdm_section_li'
            >
              <a
                className={`sdm_a ${currentSection.key === sectionData.key ? 'sdm_current' : getIndexByPropertyValue(menuRef.current.sections, 'key', currentSection.key) > getIndexByPropertyValue(menuRef.current.sections, 'key', sectionData.key) ? 'read' : ''}`}
                onClick={() => handleOnClick({ ...sectionData })}
              >
                {capitalizeFirstLetter(t(`${translationPathRef}.SECTION_TITLE`))}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
