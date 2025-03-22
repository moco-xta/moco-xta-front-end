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
    <nav
      id='skills_snm_right'
      className='side_navigation_menu'
    >
      <ol
        id='ol_smn_right'
        className='ol_smn'
      >
        {skillsData.sections
          .filter((sectionData) => sectionData.key === currentSection.key)
          .map((sectionData) => {
            const translationPathRef = `${skillsData.translationKey}.SECTIONS.${sectionData.translationKey}`

            return sectionData.skills.map((skillData) => (
              <li
                key={`skills_li_smn_${sectionData.key}_${skillData.key}`}
                className='li_smn'
              >
                <a
                  className={`${currentSkill.key === skillData.key ? 'li_smn_current' : getIndexByPropertyValue(currentSection.skills, 'key', currentSkill!.key) > getIndexByPropertyValue(currentSection.skills, 'key', skillData!.key) ? 'li_smn_read' : 'li_smn_to_read'}`}
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
