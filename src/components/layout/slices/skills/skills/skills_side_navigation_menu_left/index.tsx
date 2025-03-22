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
    <nav
      id='skills_snm_left'
      className='side_navigation_menu'
    >
      <p className='smn_title'>{capitalizeFirstLetter(t('SKILLS.SIDE_NAVIGATION_MENU.SKILLS'))}</p>
      <ol
        id='ol_smn_left'
        className='ol_smn'
      >
        {skillsData.sections.map((sectionData) => {
          const translationPathRef = `${skillsData.translationKey}.SECTIONS.${sectionData.translationKey}`

          return (
            <li
              key={`skills_li_smn_${sectionData.key}`}
              className='li_smn'
            >
              <a
                className={`${currentSection.key === sectionData.key ? 'li_smn_current' : getIndexByPropertyValue(skillsData.sections, 'key', currentSection.key) > getIndexByPropertyValue(skillsData.sections, 'key', sectionData.key) ? 'li_smn_read' : 'li_smn_to_read'}`}
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
