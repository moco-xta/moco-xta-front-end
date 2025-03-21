import React from 'react'
import { useTranslations } from 'next-intl'

import type { TSkillsSideNavigationMenu } from '@/types/components/layout/types'
import type { TSectionData } from '@/types/data/components/layout/types'

import { useSkillsPageContext } from '@/contexts/SkillsPageContext'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getIndexByPropertyValue } from '@/helpers/pageHelpers'

import './index.scss'

export default function SkillsSideNavigationMenuLeft({ skillsData }: TSkillsSideNavigationMenu) {
  const t = useTranslations()

  const { currentSection, handleSetCurrentSection } = useSkillsPageContext()

  function handleOnClick(sectionData: TSectionData) {
    handleSetCurrentSection(sectionData)
  }

  return (
    <nav className='side_navigation_menu'>
      <p>{capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_PAGE'))}</p>
      <ol>
        {skillsData.sections.map((sectionData) => {
          const translationPathRef = `${skillsData.translationKey}.SECTIONS.${sectionData.translationKey}`

          return (
            <li
              key={`sdm_section_li_${sectionData.key}`}
              className='sdm_item_left sdm_section_li'
            >
              <a
                className={`sdm_a ${currentSection.key === sectionData.key ? 'sdm_current' : getIndexByPropertyValue(skillsData.sections, 'key', currentSection.key) > getIndexByPropertyValue(skillsData.sections, 'key', sectionData.key) ? 'read' : ''}`}
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
