import React from 'react'
import { useTranslations } from 'next-intl'

import type { TSkillsSideNavigationMenu } from '@/types/components/layout/types'
import type { TSkillData } from '@/types/data/components/layout/types'

import { useSkillsPageContext } from '@/contexts/SkillsPageContext'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'
import { getIndexByPropertyValue } from '@/helpers/pageHelpers'

import './index.scss'

export default function SkillsSideNavigationMenuRight({ skillsData }: TSkillsSideNavigationMenu) {
  const t = useTranslations()

  const { currentSection, currentSkill, handleSetCurrentSkill } = useSkillsPageContext()

  function handleOnClick(paragraphData: TSkillData) {
    handleSetCurrentSkill(paragraphData)
  }

  return (
    <nav className='side_navigation_menu_right'>
      {currentSection.key !== 'introduction' && (
        <p className='sdm_item_right side_navigation_menu_title'>
          {capitalizeFirstLetter(t('LAYOUT.SIDE_NAVIGATION_MENU.ON_THIS_SECTION'))}
        </p>
      )}
      <ol className='sdm_paragraphs_ol'>
        {skillsData.sections
          .filter((sectionData) => sectionData.key === currentSection.key)
          .map((sectionData) => {
            const translationPathRef = `${skillsData.translationKey}.SECTIONS.${sectionData.translationKey}`

            return sectionData.skills.map((skillData) => (
              <li
                key={`sdm_paragraph_li_${sectionData.key}_${skillData.key}`}
                className='sdm_item sdm_paragraph_li'
              >
                <a
                  className={`sdm_a sdm_paragraph_a ${currentSkill.key === skillData.key ? 'sdm_current' : getIndexByPropertyValue(currentSection.skills, 'key', currentSkill!.key) > getIndexByPropertyValue(currentSection.skills, 'key', skillData!.key) ? 'read' : ''}`}
                  onClick={() => handleOnClick(skillData)}
                >
                  {capitalizeFirstLetter(
                    t(`${translationPathRef}.SKILLS.${skillData.translationKey}.SKILL_TITLE`),
                  )}
                </a>
              </li>
            ))
          })}
      </ol>
    </nav>
  )
}
