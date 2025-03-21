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
      <ol className='sdm_paragraphs_ol'>
        {skillsData.sections
          .filter((sectionData) => sectionData.key === currentSection.key)
          .map((sectionData) => {
            const translationPathRef = `${skillsData.translationKey}.SECTIONS.${sectionData.translationKey}`

            return sectionData.skills.map((skillData) => (
              <li
                key={`skills_sdm_skill_li_${sectionData.key}_${skillData.key}`}
                className='sdm_item sdm_paragraph_li'
              >
                <a
                  className={`${currentSkill.key === skillData.key ? 'current_skill' : getIndexByPropertyValue(currentSection.skills, 'key', currentSkill!.key) > getIndexByPropertyValue(currentSection.skills, 'key', skillData!.key) ? 'skill_read' : ''}`}
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
