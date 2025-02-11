import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TSideNavigationMenu } from '@/types/components/layout/types'
import type { TResourcesMenuSectionData } from '@/types/data/components/layout/types'

import { useResourcesPageContext } from '@/contexts/ResourcesPageContext'

import { getIndexByPropertyValue } from '@/helpers/pageHelpers'
import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function SideNavigationMenuLeft({ pageData, extraButtons }: TSideNavigationMenu) {
  const t = useTranslations()

  const { menuRef, currentSection, handleSetCurrentSection } = useResourcesPageContext()

  function handleOnClick(sectionData: TResourcesMenuSectionData) {
    handleSetCurrentSection(sectionData)
    //handleSetIsScrolling(true)
  }

  useGSAP(() => {
    gsap.from('.sdm_item_left', {
      duration: 0.5,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      delay: 1,
    })
  })

  return (
    <nav className='side_navigation_menu'>
      <p className='sdm_item_left side_navigation_menu_title'>
        {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_PAGE'))}
      </p>
      <ol>
        <li
          key='sdm_section_li_introduction'
          className='sdm_item_left sdm_section_li'
        >
          <a
            className={`sdm_a ${currentSection.key === 'introduction' ? 'sdm_current' : 'read'}`}
            onClick={() =>
              handleOnClick({
                key: 'introduction',
                translationKey: 'LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION',
              })
            }
          >
            {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.INTRODUCTION'))}
          </a>
        </li>
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
      {extraButtons && extraButtons.length > 0 && <>{extraButtons.map((button) => button)}</>}
    </nav>
  )
}
